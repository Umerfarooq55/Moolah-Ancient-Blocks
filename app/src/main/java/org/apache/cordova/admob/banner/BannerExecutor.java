package org.apache.cordova.admob.banner;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;


import com.google.android.gms.ads.AdView;
import com.ironsource.mediationsdk.ISBannerSize;
import com.ironsource.mediationsdk.IronSource;
import com.ironsource.mediationsdk.IronSourceBannerLayout;
import com.ironsource.mediationsdk.logger.IronSourceError;
import com.ironsource.mediationsdk.sdk.BannerListener;
import com.loopj.android.http.AsyncHttpClient;
import com.loopj.android.http.AsyncHttpResponseHandler;
import com.moolahmobile.moolahancientblocks.common.SharedPrefsUtils;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.apache.cordova.admob.AbstractExecutor;
import org.apache.cordova.admob.AdMob;
import org.json.JSONException;
import org.json.JSONObject;


import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import cz.msebera.android.httpclient.Header;

public class BannerExecutor extends AbstractExecutor {
    private static final String TAG = "BannerExecutor";

    /**
     * The adView to display to the user.
     */
    private AdView adView;
    /**
     * if want banner view overlap webview, we will need this layout
     */
    private RelativeLayout adViewLayout = null;

    private ViewGroup parentView;

    private boolean bannerShow = true;

    boolean bannerVisible = false;

    public BannerExecutor(AdMob plugin) {

        super(plugin);
    }

    @Override
    public String getAdType() {
        return "banner";
    }


    /**
     * Parses the createAd banner view input parameters and runs the createAd banner
     * view action on the UI thread.  If this request is successful, the developer
     * should make the requestAd call to request an ad for the banner.
     *
     * @param options The JSONArray representing input parameters.  This function
     *                expects the first object in the array to be a JSONObject with the
     *                input parameters.
     * @return A PluginResult representing whether or not the banner was created
     * successfully.
     */
    public void submitAdImpression(Context ctx, final String dash_location, final String ad_partner, final String ad_type, final String success, final String successInt, final String ad_info) {
        try {
//

            Handler mainHandler = new Handler(Looper.getMainLooper());
            Runnable myRunnable = new Runnable() {
                @Override
                public void run() {
                    //Code that uses AsyncHttpClient in your case ConsultaCaract()

                    String dataUrl = "";
                    int cpmID = 0;
                    double activeCPM = 0.3;
                    String moolah_partner = "moolah";
                    try {
                        dataUrl = "http://api.moolahmobile.com:49153/post_adUsage?user_id=" + URLEncoder.encode(SharedPrefsUtils.getStringPreference(ctx, "uid"), "UTF-8") + "&ad_location=" + URLEncoder.encode(dash_location, "UTF-8")
                                + "&ad_partner=" + URLEncoder.encode(ad_partner, "UTF-8")
                                + "&ad_type=" + URLEncoder.encode("ad_network", "UTF-8")
                                + "&latitude=" + URLEncoder.encode("0", "UTF-8")
                                + "&longitude=" + URLEncoder.encode("0", "UTF-8")
                                + "&successful=" + URLEncoder.encode(successInt, "UTF-8")
                                + "&ad_info=" + URLEncoder.encode(ad_info, "UTF-8")
                                + "&payoutIndex=" + URLEncoder.encode(String.valueOf(cpmID), "UTF-8")
                                + "&mulaah_partner=" + URLEncoder.encode(moolah_partner, "UTF-8")
                                + "&payoutAmount=" + URLEncoder.encode(String.valueOf(activeCPM), "UTF-8"); //imei+"&device_id="+did;

                    } catch (Exception e) {
                        e.printStackTrace();
                    }


                    Log.i("AdImpression", " %%% submitAdImpression called %%% dataUrl = "+dataUrl);

                    AsyncHttpClient client = new AsyncHttpClient();
                    client.post(dataUrl, new AsyncHttpResponseHandler() {

                        @Override
                        public void onSuccess(int statusCode, Header[] headers, byte[] responseBody) {

                            String content;

                            try {

                                content = new String(responseBody, "UTF-8");
                                Log.i("submitAdImpression", "4 ** submitAdImpression: success :: "+content );
                                // content is json response that can be parsed.
                                JSONObject jsonObjectItem = new JSONObject(content);
                                Boolean success = jsonObjectItem.getBoolean("success");



                            } catch (JSONException | UnsupportedEncodingException e) {
                                e.printStackTrace();
                            }

                        }

                        @Override
                        public void onFailure(int statusCode, Header[] headers, byte[] responseBody, Throwable error) {
                            Log.i("submitAdImpression", "4 ** submitAdImpression: success :: "+error );
                        }

                        @Override
                        public void onRetry(int retryNo) {
                        }

                    });

                }
            };
            mainHandler.post(myRunnable);

        } catch (Exception e) {
            Log.e(TAG, "submitAdImpression: " + e);
        }

    }
    public PluginResult prepareAd(JSONObject options, final CallbackContext callbackContext) {
        CordovaInterface cordova = plugin.cordova;

        plugin.config.setBannerOptions(options);

        cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                CordovaInterface cordova = plugin.cordova;
                IronSource.init(cordova.getActivity(), "9459d105", IronSource.AD_UNIT.BANNER);
                final IronSourceBannerLayout banner = IronSource.createBanner(cordova.getActivity(), ISBannerSize.BANNER);
                IronSource.loadBanner(banner);
                banner.setBannerListener(new BannerListener() {
                    @Override
                    public void onBannerAdLoaded() {
                        Log.v(TAG, "PTAdAdMobBridge  -- ieononBannerAdLoaded");
                        showAd(true,null,banner);
//                       submitAdImpression(cordova.getActivity(),"main", "IronSource", "banner", "true", "1", "ad_loaded");
                    }

                    @Override
                    public void onBannerAdLoadFailed(IronSourceError ironSourceError) {
                        Log.v(TAG, "PTAdAdMobBridge  -- ieononBannerAdLoaded"+ironSourceError.getErrorCode());
                    }

                    @Override
                    public void onBannerAdClicked() {

                    }

                    @Override
                    public void onBannerAdScreenPresented() {

                    }

                    @Override
                    public void onBannerAdScreenDismissed() {

                    }

                    @Override
                    public void onBannerAdLeftApplication() {

                    }
                });
//                if (adView == null) {
//                    adView = new AdView(cordova.getActivity());
//                    adView.setAdUnitId(plugin.config.getBannerAdUnitId());
//                    adView.setAdSize(plugin.config.adSize);
//                    adView.setAdListener(new BannerListener(BannerExecutor.this));
//                }
//                if (adView.getParent() != null) {
//                    ((ViewGroup) adView.getParent()).removeView(adView);
//                }
//
//                bannerVisible = false;
//                adView.loadAd(plugin.buildAdRequest());

//                if (config.autoShowBanner) {
//                    executeShowAd(true, null);
//                }
                Log.w("banner", plugin.config.getBannerAdUnitId());

                callbackContext.success();
            }
        });

        return null;
    }

    /**
     * Parses the request ad input parameters and runs the request ad action on
     * the UI thread.
     *
     * @param options The JSONArray representing input parameters.  This function
     *                expects the first object in the array to be a JSONObject with the
     *                input parameters.
     * @return A PluginResult representing whether or not an ad was requested
     * succcessfully.  Listen for onReceiveAd() and onFailedToReceiveAd()
     * callbacks to see if an ad was successfully retrieved.
     */
    public PluginResult requestAd(JSONObject options, CallbackContext callbackContext) {
        CordovaInterface cordova = plugin.cordova;

        plugin.config.setBannerOptions(options);

        if (adView == null) {
            callbackContext.error("adView is null, call createBannerView first");
            return null;
        }

        final CallbackContext delayCallback = callbackContext;
        cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (adView == null) {
                    return;
                }
                adView.loadAd(plugin.buildAdRequest());

                delayCallback.success();
            }
        });

        return null;
    }

    public PluginResult removeAd(CallbackContext callbackContext) {
        CordovaInterface cordova = plugin.cordova;

        Log.w(TAG, "executeDestroyBannerView");

        final CallbackContext delayCallback = callbackContext;
        cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (adView != null) {
                    ViewGroup parentView = (ViewGroup) adView.getParent();
                    if (parentView != null) {
                        parentView.removeView(adView);
                    }
                    adView.destroy();
                    adView = null;
                }
                bannerVisible = false;
                delayCallback.success();
            }
        });

        return null;
    }


    /**
     * Parses the show ad input parameters and runs the show ad action on
     * the UI thread.
     *
     * @param show The JSONArray representing input parameters.  This function
     *             expects the first object in the array to be a JSONObject with the
     *             input parameters.
     * @return A PluginResult representing whether or not an ad was requested
     * succcessfully.  Listen for onReceiveAd() and onFailedToReceiveAd()
     * callbacks to see if an ad was successfully retrieved.
     */
    public PluginResult showAd(final boolean show, final CallbackContext callbackContext , IronSourceBannerLayout banner) {
        CordovaInterface cordova = plugin.cordova;
        bannerShow = show;

        if (banner == null) {
            return new PluginResult(PluginResult.Status.ERROR, "adView is null, call createBannerView first.");
        }

        cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (banner == null) {
                    return;
                }
                CordovaInterface cordova = plugin.cordova;
                if (bannerVisible == bannerShow) {
                    // no change
                } else if (bannerShow) {
                    CordovaWebView webView = plugin.webView;
                    if (banner.getParent() != null) {
                        ((ViewGroup) banner.getParent()).removeView(banner);
                    }
                    if (plugin.config.bannerOverlap) {
                        RelativeLayout.LayoutParams params2 = new RelativeLayout.LayoutParams(
                                RelativeLayout.LayoutParams.MATCH_PARENT,
                                RelativeLayout.LayoutParams.WRAP_CONTENT);
                        params2.addRule(plugin.config.bannerAtTop ? RelativeLayout.ALIGN_PARENT_TOP : RelativeLayout.ALIGN_PARENT_BOTTOM);

                        if (adViewLayout == null) {
                            adViewLayout = new RelativeLayout(cordova.getActivity());
                            RelativeLayout.LayoutParams params = new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT, RelativeLayout.LayoutParams.MATCH_PARENT);
                            try {
                                ((ViewGroup) (((View) webView.getClass().getMethod("getView").invoke(webView)).getParent())).addView(adViewLayout, params);
                            } catch (Exception e) {
                                ((ViewGroup) webView).addView(adViewLayout, params);
                            }
                        }

                        adViewLayout.addView(banner, params2);
                        adViewLayout.bringToFront();
                    } else {
                        ViewGroup wvParentView = (ViewGroup) getWebView().getParent();
                        if (parentView == null) {
                            parentView = new LinearLayout(webView.getContext());
                        }
                        if (wvParentView != null && wvParentView != parentView) {
                            ViewGroup rootView = (ViewGroup)(getWebView().getParent());
                            wvParentView.removeView(getWebView());
                            ((LinearLayout) parentView).setOrientation(LinearLayout.VERTICAL);
                            parentView.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT, 0.0F));
                            getWebView().setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT, 1.0F));
                            parentView.addView(getWebView());
                            rootView.addView(parentView);
                        }


                        if (plugin.config.bannerAtTop) {
                            parentView.addView(banner, 0);
                        } else {
                            parentView.addView(banner);
                        }
                        parentView.bringToFront();
                        parentView.requestLayout();
                        parentView.requestFocus();
                    }

                    banner.setVisibility(View.VISIBLE);
                    bannerVisible = true;

                } else {
                    banner.setVisibility(View.GONE);
                    bannerVisible = false;
                }

                if (callbackContext != null) {
                    callbackContext.success();
                }
            }
        });

        return null;
    }

    public void pauseAd() {
        if (adView != null) {
            adView.pause();
        }
    }

    public void resumeAd() {
        if (adView != null) {
            adView.resume();
        }
    }

    @Override
    public void destroy() {
        if (adView != null) {
            adView.destroy();
            adView = null;
        }
        if (adViewLayout != null) {
            ViewGroup parentView = (ViewGroup) adViewLayout.getParent();
            if (parentView != null) {
                parentView.removeView(adViewLayout);
            }
            adViewLayout = null;
        }
    }

    private View getWebView() {
        CordovaWebView webView = plugin.webView;
        try {
            return (View) webView.getClass().getMethod("getView").invoke(webView);
        } catch (Exception e) {
            return (View) webView;
        }
    }

    boolean shouldAutoShow() {
        return plugin.config.autoShowBanner;
    }
}
