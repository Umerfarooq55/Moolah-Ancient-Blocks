package com.moolahmobile.moolahsystem.common.extension

import android.app.Activity
import android.view.View
import androidx.appcompat.app.AlertDialog
import com.company.game.R
import com.google.android.material.snackbar.Snackbar

import com.tapadoo.alerter.Alerter

fun showSnackBar(view: View, message: String) {
    Snackbar.make(view, message, Snackbar.LENGTH_LONG).show()
}

/**
 * Display custom alert with only body
 * @receiver Activity
 * @param body String
 */
fun Activity.displayAlert(body: String?) {
    body?.run {
        displayAlert(this, "")
    }
}

/**
 * Display custom alert with body and title
 * @receiver Activity
 * @param body String
 * @param title String
 */
fun Activity.displayAlert(body: String, title: String) {
    Alerter.create(this)
            .setTitle(title)
            .setText(body)
            .setBackgroundColorRes(R.color.new_mulaah_green)
            .show()

}

fun Activity.showPopup(body: String, title: String) {
    AlertDialog.Builder(this)
            .setTitle(title)
            .setMessage(body)
            .setPositiveButton(android.R.string.ok) { _, _ ->

            }
            .setIcon(R.drawable.ic_domino)
            .show()
}