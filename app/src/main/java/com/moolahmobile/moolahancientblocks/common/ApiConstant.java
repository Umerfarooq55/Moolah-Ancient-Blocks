package com.moolahmobile.moolahancientblocks.common;

import android.content.Context;
import android.util.Log;

import com.loopj.android.http.AsyncHttpClient;
import com.loopj.android.http.AsyncHttpResponseHandler;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import cz.msebera.android.httpclient.Header;

//import com.moolahmobile.moolahsystem.pairdevice.PariSimScheduler;

public class ApiConstant {

    public static final int NOTIFICATION_ID_FOREGROUND_SERVICE = 8466503;
    public static String STATUS_SUCCESS = "success";
    public static String RESPONSE_MESSAGE = "message";
    public static String ACTIVE_USER_MULAAH_POINT = "activeUserMulaah";
    public static String WELCOME_ACCESS_STATUS = "access_status";

    public static void getSimAccountStatus(final Context context, String uid) {
        String dataUrl = null;
        try {
            dataUrl = "http://52.14.205.101/getSimAccountStatus?user_id=" + URLEncoder.encode(uid, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        AsyncHttpClient client = new AsyncHttpClient();
        client.get(dataUrl, new AsyncHttpResponseHandler() {

            @Override
            public void onSuccess(int statusCode, Header[] headers, byte[] responseBody) {
                String content;
                try {
                    content = new String(responseBody, StandardCharsets.UTF_8);
                    JSONObject jsonObjectItem = new JSONObject(content);
                    JSONObject jsonArrayItemNest = jsonObjectItem.getJSONObject("0");

                    SharedPrefsUtils.setIntegerPreference(context, getSimAccountStatusAPI.AUTOPAYENROLLED,
                            jsonArrayItemNest.getInt(getSimAccountStatusAPI.AUTOPAYENROLLED));
                    SharedPrefsUtils.setStringPreference(context, getSimAccountStatusAPI.AUTOPAYSTATUS,
                            jsonArrayItemNest.getString(getSimAccountStatusAPI.AUTOPAYSTATUS));
                    SharedPrefsUtils.setStringPreference(context, getSimAccountStatusAPI.AUTOPAYSTART,
                            jsonArrayItemNest.getString(getSimAccountStatusAPI.AUTOPAYSTART));
                    SharedPrefsUtils.setStringPreference(context, getSimAccountStatusAPI.AUTOPAYEND,
                            jsonArrayItemNest.getString(getSimAccountStatusAPI.AUTOPAYEND));

//                    if (SharedPrefsUtils.getIntegerPreference(context, ApiConstant.getSimAccountStatusAPI.AUTOPAYENROLLED, 0) == 1)
//                        new PariSimScheduler(context).setScheduler(jsonArrayItemNest.getString(ApiConstant.getSimAccountStatusAPI.AUTOPAYEND));

                } catch (JSONException e) {
                    //Log.i("getMulaahUpdates", " error ENCODING" );
                    e.printStackTrace();
                }
            }

            @Override
            public void onFailure(int statusCode, Header[] headers, byte[] responseBody, Throwable error) {
                Log.e("API call fail", " failure");
            }

            @Override
            public void onRetry(int retryNo) {
                Log.e("API call retry", String.valueOf(retryNo));
            }
        });
    }

    public static class ACTION {
        public static final String MAIN_ACTION = "test.action.main";
        public static final String START_ACTION = "test.action.start";
        public static final String STOP_ACTION = "test.action.stop";
    }

    public static class STATE_SERVICE {
        public static final int CONNECTED = 10;
        public static final int NOT_CONNECTED = 0;
    }

    public static class PairSurgeSimAPI {
        public static String UID = "uid";
        public static String IMEI = "imei";
        public static String PHONE = "phone";
        public static String SIM = "sim";
    }

    public static class getSimAccountStatusAPI {
        // request

        // response
        public static String AUTOPAYENROLLED = "autopayEnrolled";
        public static String AUTOPAYSTATUS = "autopayStatus";
        public static String AUTOPAYSTART = "autopayStart";
        public static String AUTOPAYEND = "autopayEnd";
    }

    public static class getRefillAPI {
        public static String CARDIMAGE = "cardImage";
        public static String REFILLNO = "refillNo";
    }

    public static class payRefillAPI {
        public static String USER_ID = "user_id";
        public static String REFILL_CODE_AMOUNT = "refill_code_amount";
        public static String AMOUNT_PAID = "amount_paid";
        public static String EMAIL = "email";
        public static String PHONE = "phone";
        public static String REFILL_CODE_ID = "refill_code_id";
        public static String REFILL_CODE = "refill_code";
    }
}
