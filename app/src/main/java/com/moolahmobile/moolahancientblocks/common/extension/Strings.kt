/*
* Copyright 2018 Snax App
* Develop By Shweta Chauhan
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
package com.moolahmobile.moolahsystem.common.extension

import java.util.*

/**
 * string range
 */
fun ClosedRange<Int>.random() =
    Random().nextInt(endInclusive - start) + start

/**
 * generate random ID
 */
fun String.random(length: Int = 8): String {
    val base = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var randomString = ""

    for (i in 1..length) {
        val randomValue = (0..base.count()).random()
        randomString += "${base[randomValue]}"
    }
    return randomString
}
