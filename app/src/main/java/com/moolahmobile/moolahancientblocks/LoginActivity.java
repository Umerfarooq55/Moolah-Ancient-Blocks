package com.moolahmobile.moolahancientblocks;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.annotation.DrawableRes;
import androidx.appcompat.app.AppCompatActivity;

import com.moolahmobile.moolahancientblocks.common.SharedPrefsUtils;
import com.moolahmobile.moolahancientblocks.common.Utils;
import com.moolahmobile.moolahancientblocks.threading.DefaultExecutorSupplier;
import com.moolahmobile.moolahancientblocks.threading.Priority;
import com.moolahmobile.moolahancientblocks.threading.PriorityRunnable;
import com.github.ybq.android.spinkit.SpinKitView;
import com.github.ybq.android.spinkit.sprite.Sprite;
import com.github.ybq.android.spinkit.style.DoubleBounce;
import com.google.android.material.textfield.TextInputEditText;
import com.loopj.android.http.AsyncHttpClient;
import com.loopj.android.http.AsyncHttpResponseHandler;


import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.Future;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import cz.msebera.android.httpclient.Header;

//import com.blankj.utilcode.util.NetworkUtils;

public class LoginActivity extends AppCompatActivity {

     SpinKitView progressBar;
    private Button btn_login;
    private TextInputEditText edt_email,edt_password;
    private TextView txtRegister,txtForgotPassword;
    private RelativeLayout main_content;
    private Future loginFuture;
    private TextView register;

    @DrawableRes
    public static int getIcon() {
        return R.drawable.moolah_mobile_icon_large;
    }

    /**
     * method is used for checking valid email id format.
     *
     * @param email
     * @return boolean true for valid false for invalid
     */
    public static boolean isEmailValid(String email) {
        String expression = "^[\\w\\.-]+@([\\w\\-]+\\.)+[A-Z]{2,4}$";
        Pattern pattern = Pattern.compile(expression, Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        main_content = findViewById(R.id.loginparent);
        Spinner();

        Log.d("log"," login act *onCreate* ");

        //
        btn_login = findViewById(R.id.btn_login);
        register = findViewById(R.id.register);
        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(LoginActivity.this, RegisterActivity.class));
            }
        });
        btn_login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view)
            {
                // Do something
                progressBar.setVisibility(View.VISIBLE);
                if (!edt_email.getText().toString().equals("") && !edt_password.getText().toString().equals("")) {
                    threadLoginMethod();

                }
                else {
                    Utils.showSnackBar(main_content, getString(R.string.err_login_email_password));
                    progressBar.setVisibility(View.GONE);
                }
            }
        });

        txtRegister = findViewById(R.id.txtRegister);
        txtRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view)
            {
                // Do something
                startActivityForResult(new Intent(getApplicationContext(), RegisterActivity.class), 1);
            }
        });

        txtForgotPassword = findViewById(R.id.txtForgotPassword);
        txtForgotPassword.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view)
            {
                // Do something
            }
        });

        edt_email = findViewById(R.id.edt_email);
        edt_password  = findViewById(R.id.edt_password);
    }

    private void Spinner() {
        progressBar = findViewById(R.id.spin_kit);

        Sprite doubleBounce = new DoubleBounce();
        progressBar.setIndeterminateDrawable(doubleBounce);
    }

    /**
     * Login Method
     */
    public void loginValidationAndSubmitMethod() {

        if ( edt_email.getText().toString().length() <= 0  ) {
            Utils.showSnackBar(main_content, getString(R.string.err_email_should_not_blank));
            progressBar.setVisibility(View.GONE);
        }
        else if (!isEmailValid(edt_email.getText().toString().trim())) {
            Utils.showSnackBar(main_content, getString(R.string.err_valid_email));
            progressBar.setVisibility(View.GONE);
        }
        else if (edt_password.getText().toString().length() < 6) {
            Utils.showSnackBar(main_content, getString(R.string.err_password_length));
            progressBar.setVisibility(View.GONE);
        }
        else {

//        if (NetworkUtils.isConnected()) {

            String dataUrl = null;
            String deviceId = "";

            try {
                dataUrl = "http://api.moolahmobile.com:49153/login2?email=" + URLEncoder.encode(edt_email.getText().toString().trim(), "UTF-8") +"&password="+ URLEncoder.encode(edt_password.getText().toString().trim(), "UTF-8") + "&device_id="+deviceId;
                Log.d("login retun", " dataUrl "+dataUrl +" CURR THREAD "+Thread.currentThread());
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            AsyncHttpClient client = new AsyncHttpClient();
            client.post(dataUrl, new AsyncHttpResponseHandler() {

                @Override
                public void onSuccess(int statusCode, Header[] headers, byte[] responseBody) {

                    String content;

                    try {

                        int registerStatusVal = SharedPrefsUtils.getIntegerPreference(getApplicationContext(), "register_status", 0);
                        content = new String(responseBody, StandardCharsets.UTF_8);
                        JSONObject jsonObjectItem = new JSONObject(content);
                        Log.i("loginumer", content);
                        if (jsonObjectItem.getBoolean("success")) {
                            Log.i("login retun", " -- |register| --jsonArrayItemNest string " + jsonObjectItem.toString() + " BEFORE " + registerStatusVal);

                            SharedPrefsUtils.setStringPreference(getApplicationContext(), "uid", jsonObjectItem.getString("user_id"));
                            SharedPrefsUtils.setStringPreference(getApplicationContext(), "email", jsonObjectItem.getString("email"));
                            SharedPrefsUtils.setStringPreference(getApplicationContext(), "username", jsonObjectItem.getString("username"));
                            SharedPrefsUtils.setStringPreference(getApplicationContext(), "phone", jsonObjectItem.getString("phone"));
                            SharedPrefsUtils.setStringPreference(getApplicationContext(), "lastName", jsonObjectItem.getString("lastName"));
                            SharedPrefsUtils.setStringPreference(getApplicationContext(), "firstName", jsonObjectItem.getString("firstName"));

                            SharedPrefsUtils.setIntegerPreference(getApplicationContext(), "register_status", 1);
                            int registerStatusValF = SharedPrefsUtils.getIntegerPreference(getApplicationContext(), "register_status", 0);
                            Log.i("login retun", " -- |register| --jsonArrayItemNest string " + jsonObjectItem.toString() + " AFTER " + registerStatusValF);
//                        finish();

                            startActivityForResult(new Intent(getApplicationContext(), MainActivity.class), 1);
                        }
                        else {
                            Utils.showAlertDialog(LoginActivity.this,"Moolah Mobile Login",jsonObjectItem.getString("errorMsg"),getIcon());
                             Utils.showSnackBar(main_content, jsonObjectItem.getString("errorMsg"));
                        }

                    } catch (JSONException e) {
                        Log.i("login", " error ENCODING "+e );
                        e.printStackTrace();
                    }

                }

                @Override
                public void onFailure(int statusCode, Header[] headers, byte[] responseBody, Throwable error) {
                    Log.i("login", " error onFailure "+error.getMessage());
                    progressBar.setVisibility(View.GONE);
                }

                @Override
                public void onRetry(int retryNo) {
                    Log.i("login", " error onRetry " );
                }

            });
//        } else
//             Utils.showSnackBar(main_content, getString(R.string.check_internet_connection));

        }


    }

    public void threadLoginMethod(){

        Log.d("login retun", " threadLoginMethod CURR THREAD "+Thread.currentThread());
        loginFuture = DefaultExecutorSupplier.getInstance().forBackgroundTasks()
                .submit(new PriorityRunnable(Priority.HIGH) {
                    private Handler mHandler = new Handler(Looper.getMainLooper());

                    @Override
                    public void run() {

                        // ...
                        mHandler.post(new Runnable() {
                            public void run() {
                                // ...
                                loginValidationAndSubmitMethod();
                                try {
                                    Thread.sleep(50);
                                } catch (InterruptedException e) {
                                    e.printStackTrace();
                                }
                            }
                        });

                    }
                });
    }

}
