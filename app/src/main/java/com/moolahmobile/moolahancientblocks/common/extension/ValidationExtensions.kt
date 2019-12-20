package com.moolahmobile.moolahsystem.common.extension

import android.text.format.DateFormat
import android.util.Patterns
import java.util.*


/**
 * Check given string is contain at least char and size
 * @receiver String
 * @return Boolean
 */
fun String.isValidPasswordLength(): Boolean {
    return length >= 6
}

/**
 * Thus fun is used to check email is valid or not.
 * @receiver String
 * @return Boolean
 */
fun String.isValidEmail(): Boolean = isNotEmpty() && Patterns.EMAIL_ADDRESS.matcher(this).matches()

/**
 * This function is used to check if userName is valid or not.
 * @receiver String
 * @return Boolean
 */
fun String.isValidUserName(): Boolean = matches(Regex("[a-zA-Z]*"))

/**
 * This function is used to check if phone is valid or not.
 */
fun String.isValidPhone(): Boolean {
    return length >= 10
}

fun giftExpiryDate(): String {
    val calender = Calendar.getInstance()
    calender.add(Calendar.MONTH, 1)
    return DateFormat.format("yyyy-MM-dd", calender.time).toString()
}
