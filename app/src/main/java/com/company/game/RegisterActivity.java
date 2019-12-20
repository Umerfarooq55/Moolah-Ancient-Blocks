package com.company.game;

import android.app.DatePickerDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.renderscript.RenderScript;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.annotation.DrawableRes;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import com.company.game.common.SharedPrefsUtils;
import com.company.game.common.Utils;
import com.company.game.threading.DefaultExecutorSupplier;
import com.company.game.threading.Priority;
import com.company.game.threading.PriorityRunnable;
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
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;
import java.util.concurrent.Future;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import cz.msebera.android.httpclient.Header;



public class RegisterActivity extends AppCompatActivity {

    final Calendar myCalendar = Calendar.getInstance();
    DatePickerDialog.OnDateSetListener date = new DatePickerDialog.OnDateSetListener() {

        @Override
        public void onDateSet(DatePicker view, int year, int monthOfYear,
                              int dayOfMonth) {
            // TODO Auto-generated method stub
            myCalendar.set(Calendar.YEAR, year);
            myCalendar.set(Calendar.MONTH, monthOfYear);
            myCalendar.set(Calendar.DAY_OF_MONTH, dayOfMonth);
            updateBDateLabel();
        }

    };
    private Button btn_signup;
    private TextInputEditText edt_email,edt_username,edt_password,edt_phone,edt_firstname,edt_lastname,edt_gender,edt_birthday,edt_conf_password,edt_invited_by;
    private TextView txtRegister,alreadyAUserView;
    private RelativeLayout main_content;
    private Future registerFuture;
    private SpinKitView progressBar;

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

    private int getAge(int year, int month, int day){
        Log.d("getAge"," year "+year+" month "+month+" day "+day);

        Calendar dob = Calendar.getInstance();
        Calendar today = Calendar.getInstance();

        dob.set(year, month, day);

        int age = today.get(Calendar.YEAR) - dob.get(Calendar.YEAR);

        if (today.get(Calendar.DAY_OF_YEAR) < dob.get(Calendar.DAY_OF_YEAR)){
            age--;
        }

        Integer ageInt = new Integer(age);
        // String ageS = ageInt.toString();

        return ageInt;
    }

//    private int getAge(String dobString){
//
//        Date date = null;
//        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
//        try {
//            date = sdf.parse(dobString);
//        } catch (ParseException e) {
//            e.printStackTrace();
//        }
//
//        if(date == null) return 0;
//
//        Calendar dob = Calendar.getInstance();
//        Calendar today = Calendar.getInstance();
//
//        dob.setTime(date);
//
//        int year = dob.get(Calendar.YEAR);
//        int month = dob.get(Calendar.MONTH);
//        int day = dob.get(Calendar.DAY_OF_MONTH);
//
//        dob.set(year, month+1, day);
//
//        int age = today.get(Calendar.YEAR) - dob.get(Calendar.YEAR);
//
//        if (today.get(Calendar.DAY_OF_YEAR) < dob.get(Calendar.DAY_OF_YEAR)){
//            age--;
//        }
//
//Log.d("age",age+" age of user ");
//
//        return age;
//    }
private void Spinner() {
    progressBar = findViewById(R.id.spin_kit);

    Sprite doubleBounce = new DoubleBounce();
    progressBar.setIndeterminateDrawable(doubleBounce);
}

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);
        main_content = findViewById(R.id.registerparent);
        Spinner();
        Log.d("log"," register act *onCreate* ");

        btn_signup = findViewById(R.id.btn_signup);
        btn_signup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view)
            {
                progressBar.setVisibility(View.VISIBLE);
                // Do something
                if (!edt_email.getText().toString().equals("") &&
                        !edt_username.getText().toString().equals("") &&
                        !edt_phone.getText().toString().equals("") &&
                        !edt_firstname.getText().toString().equals("") &&
                        !edt_lastname.getText().toString().equals("") &&
                        !edt_gender.getText().toString().equals("") &&
                        !edt_birthday.getText().toString().equals("") &&
                        !edt_password.getText().toString().equals("") &&
                        !edt_conf_password.getText().toString().equals("") ) {
                    threadLSignUpMethod();
                }
                else {
                    Utils.showSnackBar(main_content, getString(R.string.err_login_email_password));
                    progressBar.setVisibility(View.GONE);
                }
            }
        });

//        txtRegister = findViewById(R.id.txtRegister);
//        txtRegister.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view)
//            {
//                // Do something
//            }
//        });
//
        alreadyAUserView = findViewById(R.id.alreadyAUserView);
        alreadyAUserView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view)
            {
                // Do something
                startActivityForResult(new Intent(getApplicationContext(), LoginActivity.class), 1);

            }
        });

        edt_email = findViewById(R.id.edt_email);
        edt_username  = findViewById(R.id.edt_username);
        edt_phone = findViewById(R.id.edt_phone);
        edt_firstname = findViewById(R.id.edt_firstname);
        edt_lastname = findViewById(R.id.edt_lastname);
        edt_gender = findViewById(R.id.edt_gender);
        edt_gender.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view)
            {
                // Do something
                showSelectGenderMethod();
            }
        });
        edt_birthday = findViewById(R.id.edt_birthday);
        edt_birthday.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view)
            {
                // Do something
                showDatePickerMethod();
            }
        });
        edt_password = findViewById(R.id.edt_password);
        edt_conf_password = findViewById(R.id.edt_conf_password);
        edt_invited_by = findViewById(R.id.edt_invited_by);

    }

    public void showSelectGenderMethod() {
        AlertDialog.Builder builderSingle = new AlertDialog.Builder(RegisterActivity.this);
        builderSingle.setIcon(R.drawable.ic_domino);
        builderSingle.setTitle("Select One Name:-");

        final ArrayAdapter<String> arrayAdapter = new ArrayAdapter<String>(RegisterActivity.this, android.R.layout.select_dialog_singlechoice);
        arrayAdapter.add("Male");
        arrayAdapter.add("Female");
        arrayAdapter.add("Other");

        builderSingle.setNegativeButton("cancel", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                dialog.dismiss();
            }
        });

        builderSingle.setAdapter(arrayAdapter, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                String strName = arrayAdapter.getItem(which);
                edt_gender.setText(strName);
//                AlertDialog.Builder builderInner = new AlertDialog.Builder(RegisterActivity.this);
//                builderInner.setMessage(strName);
//                builderInner.setTitle("Your Selected Item is");
//                builderInner.setPositiveButton("Ok", new DialogInterface.OnClickListener() {
//                    @Override
//                    public void onClick(DialogInterface dialog,int which) {
//                        dialog.dismiss();
//                    }
//                });
//                builderInner.show();
            }
        });
        builderSingle.show();
    }

    public void showDatePickerMethod() {

        new DatePickerDialog(RegisterActivity.this, date, myCalendar
                .get(Calendar.YEAR), myCalendar.get(Calendar.MONTH),
                myCalendar.get(Calendar.DAY_OF_MONTH)).show();
    }

    public void updateBDateLabel() {
        String myFormat = "MM/dd/yyyy"; //In which you need put here
        SimpleDateFormat sdf = new SimpleDateFormat(myFormat, Locale.US);

        edt_birthday.setText(sdf.format(myCalendar.getTime()));
    }

    /**
     * Login Method
     */
    public void signupValidationAndSubmitMethod() {

        int age = getAge(Integer.parseInt(edt_birthday.getText().toString().split("/")[2]),Integer.parseInt(edt_birthday.getText().toString().split("/")[0]),Integer.parseInt(edt_birthday.getText().toString().split("/")[0]));
        if ( edt_email.getText().toString().length() <= 0  ) {
            Utils.showSnackBar(main_content, getString(R.string.err_email_should_not_blank));
            progressBar.setVisibility(View.GONE);
        }
        else if (!isEmailValid(edt_email.getText().toString().trim())) {
            Utils.showSnackBar(main_content, getString(R.string.err_valid_email));
            progressBar.setVisibility(View.GONE);
        }
        else if (edt_username.getText().toString().length() < 6) {
            Utils.showSnackBar(main_content, getString(R.string.err_valid_user_name));
            progressBar.setVisibility(View.GONE);
        }
        else if (edt_phone.getText().toString().length() < 10) {
            Utils.showSnackBar(main_content, getString(R.string.err_valid_phone_10_digit));
            progressBar.setVisibility(View.GONE);
        }
        else if (edt_firstname.getText().toString().length() == 0) {
            Utils.showSnackBar(main_content, getString(R.string.err_first_name_should_not_blank));
            progressBar.setVisibility(View.GONE);
        }
        else if (edt_lastname.getText().toString().length() == 0) {
            Utils.showSnackBar(main_content, getString(R.string.err_last_name_should_not_blank));
            progressBar.setVisibility(View.GONE);
        }
        else if (edt_gender.getText().toString().length() == 0) {
            Utils.showSnackBar(main_content, getString(R.string.err_gender_should_not_blank));
            progressBar.setVisibility(View.GONE);
        }
        else if (edt_birthday.getText().toString().length() == 0) {
            Utils.showSnackBar(main_content, getString(R.string.err_birthday_should_not_blank));
            progressBar.setVisibility(View.GONE);
        }
        else if (edt_conf_password.getText().toString().length() < 6) {
            Utils.showSnackBar(main_content, getString(R.string.err_conf_password_should_not_blank));
            progressBar.setVisibility(View.GONE);
        }
        else if (edt_password.getText().toString().length() < 6) {
            Utils.showSnackBar(main_content, getString(R.string.err_password_length));
            progressBar.setVisibility(View.GONE);
        }
        else if (!edt_password.getText().toString().equals(edt_conf_password.getText().toString())) {
            Utils.showSnackBar(main_content, getString(R.string.err_password_conf_password_not_match));
            progressBar.setVisibility(View.GONE);
        }
        else if ( age < 13) {
            progressBar.setVisibility(View.GONE);
            Utils.showSnackBar(main_content, "You must be over 13 years old to sign up to Moolah.");

        }
        else {

//        if (NetworkUtils.isConnected()) {

            String dataUrl = null;
            String deviceId = "";

            try {
                dataUrl = "http://http://api.moolahmobile.com:49153/mulaah_register?email=" + URLEncoder.encode(edt_email.getText().toString().trim(), "UTF-8") +"&password="+ URLEncoder.encode(edt_password.getText().toString().trim(), "UTF-8") + "&device_id="+deviceId+"&firstName="+ URLEncoder.encode(edt_firstname.getText().toString().trim(), "UTF-8")+"&lastName="+ URLEncoder.encode(edt_lastname.getText().toString().trim(), "UTF-8")+"&phone="+ URLEncoder.encode(edt_phone.getText().toString().trim(), "UTF-8")+"&phone="+ URLEncoder.encode(edt_phone.getText().toString().trim(), "UTF-8")+"&username="+ URLEncoder.encode(edt_username.getText().toString().trim(), "UTF-8")+"&gender="+ URLEncoder.encode(edt_gender.getText().toString().trim(), "UTF-8")+"&dob="+ URLEncoder.encode(edt_birthday.getText().toString().trim(), "UTF-8");
                Log.d("su retun", " dataUrl "+dataUrl +" CURR THREAD "+Thread.currentThread());
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            AsyncHttpClient client = new AsyncHttpClient();
            client.post(dataUrl, new AsyncHttpResponseHandler() {

                @Override
                public void onSuccess(int statusCode, Header[] headers, byte[] responseBody) {
                    progressBar.setVisibility(View.GONE);
                    String content;

                    try {


                        int registerStatusVal = SharedPrefsUtils.getIntegerPreference(getApplicationContext(), "register_status", 0);
                        content = new String(responseBody, StandardCharsets.UTF_8);
                        JSONObject jsonObjectItem = new JSONObject(content);
                        Log.i("register", " -- |register| --jsonArrayItemNest string "+jsonObjectItem.toString() +" BEFORE "+registerStatusVal);


//                        SharedPrefsUtils.setStringPreference(getApplicationContext(),"uid",jsonObjectItem.getString("user_id"));
//                        SharedPrefsUtils.setStringPreference(getApplicationContext(),"email",jsonObjectItem.getString("email"));
//                        SharedPrefsUtils.setStringPreference(getApplicationContext(),"username",jsonObjectItem.getString("username"));
//                        SharedPrefsUtils.setStringPreference(getApplicationContext(),"phone",jsonObjectItem.getString("phone"));
//                        SharedPrefsUtils.setStringPreference(getApplicationContext(),"lastName",jsonObjectItem.getString("lastName"));
//                        SharedPrefsUtils.setStringPreference(getApplicationContext(),"firstName",jsonObjectItem.getString("firstName"));

//                        SharedPrefsUtils.setIntegerPreference(getApplicationContext(), "register_status", 1);
//                        int registerStatusValF = SharedPrefsUtils.getIntegerPreference(getApplicationContext(), "register_status", 0);
//                        Log.i("su retun", " -- |register| --jsonArrayItemNest string "+jsonObjectItem.toString() +" AFTER "+registerStatusValF);
                        if (jsonObjectItem.getBoolean("success")) {
                            Utils.showAlertDialog(RegisterActivity.this,"Moolah Mobile Registration",jsonObjectItem.getString("message"),getIcon());

                            Log.i("register", " -- |register| --jsonArrayItemNest string " + jsonObjectItem.toString() + " BEFORE " + registerStatusVal);


                            finish();
                            //startActivityForResult(new Intent(getApplicationContext(), MainActivity.class), 1);
                        }
                        else {
                            //Utils.showAlertDialog(LoginActivity.this,"Moolah Mobile Login",jsonObjectItem.getString("errorMsg"),getIcon());
                            Utils.showSnackBar(main_content, jsonObjectItem.getString("message"));
                        }
                        //finish();


                    } catch (JSONException e) {
                        Log.i("register", " error ENCODING "+e );
                        progressBar.setVisibility(View.GONE);
                        e.printStackTrace();

                    }

                }

                @Override
                public void onFailure(int statusCode, Header[] headers, byte[] responseBody, Throwable error) {
                    Log.i("register", " error onFailure "+error.getMessage());
                    progressBar.setVisibility(View.GONE);
                }

                @Override
                public void onRetry(int retryNo) {
                    Log.i("register", " error onRetry " );
                    progressBar.setVisibility(View.GONE);
                }

            });
//        } else
//             Utils.showSnackBar(main_content, getString(R.string.check_internet_connection));

        }


    }

    public void threadLSignUpMethod(){

        Log.d("signup retun", " threadLSignUpMethod CURR THREAD "+Thread.currentThread());
        registerFuture = DefaultExecutorSupplier.getInstance().forBackgroundTasks()
                .submit(new PriorityRunnable(Priority.HIGH) {
                    private Handler mHandler = new Handler(Looper.getMainLooper());

                    @Override
                    public void run() {

                        // ...
                        mHandler.post(new Runnable() {
                            public void run() {
                                // ...
                                signupValidationAndSubmitMethod();
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
