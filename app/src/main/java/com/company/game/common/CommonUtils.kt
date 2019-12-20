package com.moolahmobile.moolahsystem.common

import android.annotation.SuppressLint
import android.content.Context
import android.provider.Settings
import android.text.SpannableString
import android.text.format.DateFormat
import android.text.style.ForegroundColorSpan
import androidx.core.content.ContextCompat
import com.company.game.R

import java.util.*

/**
 * All Common function
 */
open class CommonUtils {

    companion object {
        /**
         * text with 2 different color
         */
        @JvmStatic
        fun getStringWithDiffColor(context: Context, message: String, messagePartColor: String): SpannableString {
            val spannable = SpannableString(message)
            spannable.setSpan(ForegroundColorSpan(ContextCompat.getColor(context, R.color.color_white)), 0, messagePartColor.length, 0)

            spannable.setSpan(ForegroundColorSpan(ContextCompat.getColor(context, R.color.new_mulaah_green)), messagePartColor.length, message.length, 0)
            return spannable
        }

        @JvmStatic
        fun getStringWithDiffColorMulaahStore(context: Context, message: String, messagePartColor: String): SpannableString {
            val spannable = SpannableString(message)
            spannable.setSpan(ForegroundColorSpan(ContextCompat.getColor(context, R.color.menu_black)), 0, messagePartColor.length, 0)

            spannable.setSpan(ForegroundColorSpan(ContextCompat.getColor(context, R.color.color_email)), messagePartColor.length, message.length, 0)
            return spannable
        }

        @SuppressLint("HardwareIds")
        fun getDeviceId(context: Context): String {
            return Settings.Secure.getString(context.contentResolver,
                    Settings.Secure.ANDROID_ID)
        }

        fun setDateFormat(year: Int, monthOfYear: Int, dayOfMonth: Int): String {
            val birthday = Calendar.getInstance()
            birthday.set(year, monthOfYear , dayOfMonth)
            return DateFormat.format("yyyy-MM-dd", birthday.time).toString()
        }
    }

}