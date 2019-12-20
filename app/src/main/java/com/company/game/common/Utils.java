package com.company.game.common;

import android.app.ActivityManager;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.net.TrafficStats;
import android.text.format.DateFormat;
import android.util.Log;
import android.view.View;

import androidx.annotation.DrawableRes;

import com.google.android.material.snackbar.Snackbar;

import java.util.List;
import java.util.regex.Pattern;

public class Utils {

    /**
     * The constant EXTRA_MESSAGE_UID.
     */
    public static final String EXTRA_MESSAGE_UID = "com.moolahmobile.moolahsystem.UID";
    private static String TAG = Utils.class.getName();

    /**
     * get app consume data
     *
     * @param context
     * @return
     */
    public static double getDataUsage(Context context) {
        double total = 0.0;
        ActivityManager manager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
        List<ActivityManager.RunningAppProcessInfo> runningApps = manager.getRunningAppProcesses();

        for (ActivityManager.RunningAppProcessInfo runningApp : runningApps) {

            // Get UID of the selected process
            //  int uid = ((ActivityManager.RunningAppProcessInfo) getListAdapter().getItem(position)).uid;

            // Get traffic data
            if (runningApp.processName.equals(context.getApplicationContext().getPackageName())) {
                double received = (double) TrafficStats.getUidRxBytes(runningApp.uid) / (1024 * 1024);
                double send = (double) TrafficStats.getUidTxBytes(runningApp.uid) / (1024 * 1024);
                Log.e("" + runningApp.uid, "Send :" + send + ", Received :" + received);

                total = send + received;
            }
        }
        return total;
    }

    public static String getDate(long time) {
        return DateFormat.format("yyyy-MM-dd HH:mm:ss", time).toString();
    }

    /**
     * check current version and live version
     *
     * @param oldVersion
     * @param newVersion
     * @return
     */
    public static Boolean isValidVersion(String oldVersion, String newVersion) {
        int currentVer = Integer.parseInt(oldVersion.split("\\.")[0]);
        int liveVersion = Integer.parseInt(newVersion.split("\\.")[0]);

        return currentVer < liveVersion;
    }

    /**
     * show alert popup
     *
     * @param context
     * @param title
     * @param message
     * @param iconId
     */
    public static void showAlertDialog(Context context, String title, String message, @DrawableRes int iconId) {
        new AlertDialog.Builder(context)
                .setTitle(title)
                .setMessage(message)
                .setPositiveButton(android.R.string.ok, new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {

                    }
                })
                .setIcon(iconId)
                .show();
    }

    /**
     * Is valid emaill id boolean.
     *
     * @param email the email
     * @return the boolean
     */
    public static boolean isValidEmaillId(String email) {

        return Pattern.compile("^(([\\w-]+\\.)+[\\w-]+|([a-zA-Z]{1}|[\\w-]{2,}))@"
                + "((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?"
                + "[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\."
                + "([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?"
                + "[0-9]{1,2}|25[0-5]|2[0-4][0-9])){1}|"
                + "([a-zA-Z]+[\\w-]+\\.)+[a-zA-Z]{2,4})$").matcher(email).matches();
    }

    public static void showSnackBar(View view, String message) {
        Snackbar.make(view, message, Snackbar.LENGTH_LONG).show();
    }

}
