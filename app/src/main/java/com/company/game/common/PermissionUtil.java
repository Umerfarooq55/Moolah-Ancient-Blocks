package com.company.game.common;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;

import androidx.core.app.ActivityCompat;

/**
 * Created by Shweta.Chauhan on 30/08/16.
 */

public class PermissionUtil {
    private String[] storagePermissions = {
            "android.permission.WRITE_EXTERNAL_STORAGE",
            "android.permission.READ_EXTERNAL_STORAGE"
    };

    private String[] readPhoneStatePermissions = {
            "android.permission.READ_PHONE_STATE"
    };

    private String[] contactPermissions = {
            "android.permission.READ_CONTACTS",
            "android.permission.WRITE_CONTACTS"
    };

    private String[] storagePackageUsagePermissions = {
            "android.permission.WRITE_EXTERNAL_STORAGE",
            "android.permission.READ_EXTERNAL_STORAGE",
            "android.permission.PACKAGE_USAGE_STATS"
    };

    public static void showPermissionDialog(final Context mContext, String msg) {
        AlertDialog.Builder builder = new AlertDialog.Builder(mContext);
        builder.setTitle("Need Permission");
        builder.setMessage(msg);
        builder.setPositiveButton(android.R.string.yes, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                Intent intent = new Intent();
                intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
                Uri uri = Uri.fromParts("package", mContext.getPackageName(), null);
                intent.setData(uri);
                (mContext).startActivity(intent);
            }
        });
        builder.setNegativeButton(android.R.string.no, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                // do nothing
            }
        });
        builder.show();
    }

    public String[] getStoragePermissions() {
        return storagePermissions;
    }

    public String[] getReadPhoneStatePermissions() {
        return readPhoneStatePermissions;
    }

    public String[] getContactPermissions() {
        return contactPermissions;
    }

    public String[] getStoragePackageUsagePermissions() {
        return storagePackageUsagePermissions;
    }

    public boolean verifyPermissions(Context context, String[] grantResults) {
        for (String result : grantResults) {
            if (ActivityCompat.checkSelfPermission(context, result) != PackageManager.PERMISSION_GRANTED) {
                return false;
            }
        }
        return true;
    }

    public boolean checkMarshMellowPermission() {
        return (Build.VERSION.SDK_INT > Build.VERSION_CODES.LOLLIPOP_MR1);
    }
}
