/**
	GRADLE - KNOWLEDGE IS POWER
    ***** PROPRIETARY CODE *****
    @author : gradle (gradlecode@outlook.com)
	@update: 11/25/2019 14:38:00
	@version_name: gradle-logic
	@version_code: v5.0.1
	copyright @2019
*/


TEXT_SCORE = "SCORE";
TEXT_SCORE_CASE = "Score";
TEXT_SCORE_GAMEOVER = "TOTAL SCORE";
TEXT_LEVEL_UPPERCASE = TEXT_LEVEL = "LEVEL";
TEXT_GAMEOVER = "GAME OVER";
TEXT_GAME_COMPLETED = "GAME COMPLETED";
TEXT_HOW_TO_PLAY = "HOW TO PLAY";
TEXT_HELP_ENEMY = "Escape from him";
TEXT_SELECT_A_LEVEL = "SELECT A LEVEL";
TEXT_PAUSE = "Pause";
TEXT_HELP_TNT = "Touch this to trigger an explosion";
TEXT_FINAL_SCORE = "FINAL SCORE";
TEXT_ARE_SURE = "ARE YOU SURE?";
TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
TEXT_CREDITS_DEV_NAME  = "GRADLE 2019";
TEXT_LINK1 = "MORE GAMES";
TEXT_RESET = "ARE YOU SURE? ALL YOUR PREVIOUS SCORES WILL BE DELETED!";
TEXT_NEXT  = "NEXT";
TEXT_LINES = "LINES";

PRIMARY_FONT = "cartoon";



var gradle = {

	//Parameters :
	//============
    banner            : 'ca-app-pub-3940256099942544/6300978111', //id placement banner
    interstitial      : 'ca-app-pub-3940256099942544/1033173712', //id placement interstitial

    isTesting         : true, //Ads mode testing. set to false for a production mode.
    enableBanner      : true, //Ads enable the banner. set to false to disable the banner.
    enableInterstitial: true, //Ads enable the interstitial. set to false to disable all interstitials.

	bannerAtBottom    : true, //if false the banner will be at top
    overlap           : false,

	notifiBackbutton  : true, //for confirmation backbutton
   	notifiMessage     : 'Do you want to exit the game ?',

	intervalAds       : 3,     //Ads each interval for example each 3 times
	
	//Link for your playstore account :
	//===============================
	developer_link : "https://play.google.com/store/apps/developer?id=Childrens+Games",



	//Events manager :
	//================
    event: function(ev, msg){
        gradle.process(ev,msg), gradle.log(ev, msg);
        
		switch(ev){
            case 'first_start':   //First start
                //gradle.showInter();
                break;
			case 'start_session':   //button play
                gradle.showInter();
                break;
            case 'end_session':   //button home on popup game over
                //gradle.showInter();
                break;
            case 'start_level':

                break;
            case 'end_level': //event on gameover
				//gradle.showInter();
                break;
            case 'logo_click':    //on click logo of credits
                gradle.more();
                break;
			case 'test':
				//gradle.checkInterval() && gradle.showInter();
                break;	
        }
    },
	
	
	//Config :
	//========
    oMain: new CMain({
        level_up_lines: 10, //EVERY N LINES IS FILL
        score_line: [40, 100, 300, 1200], //ADD THIS VALUE TO SCORE WHEN DESTROY LINES
        blocks_occurence: [19, 19, 19, 12, 12, 7, 11], //BLOCKS SPAWN OCCURENCE
        start_refresh_game: 1,
		min_refresh_game: 0.05, //MINIUM REFRESH FOR GAME UPDATE (MAX VELOCITY OF GAME)
        step_decrease_refresh_game: 0.25, //EVERY LEVEL UP REFRESH VALUE IS DECREASE
        fullscreen: false,     //MUST BE FALSE
        check_orientation: true, //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
    }),
	
	

    log: function(val){
        if(typeof val === 'object' && typeof val.isTrusted!='undefined' && val.isTrusted==false) return;
        gradle.debug && console.log( gradle.isMobile && (typeof val === 'object' && val !== null) ? JSON.stringify(val) : val );
    },
	
	
	//Ready : /!\ DO NOT CHANGE, ONLY IF YOU ARE AN EXPERT.
	//=========================
    debug : true,
    isMobile : ( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) ),
	first_start: true,
    ready: function() {
        gradle.event('gradle ready ...');
        if(typeof admob != 'undefined'){
            if(gradle.isTesting){
                admob.banner.config({
                    id: gradle.banner,
                    isTesting: true,
                    autoShow: true,
                    overlap: gradle.overlap,
                    offsetTopBar: false,
                    bannerAtTop: !gradle.bannerAtBottom
                });

                admob.interstitial.config({
                    id: gradle.interstitial,
                    isTesting: true,
                    autoShow: false,
                });
            }
            else{
                admob.banner.config({
                    id: gradle.banner,
                    autoShow: true,
                    overlap: gradle.overlap,
                    offsetTopBar: false,
                    bannerAtTop: !gradle.bannerAtBottom
                });

                admob.interstitial.config({
                    id: gradle.interstitial,
                    autoShow: false,
                });
            }
        }
        
		if(gradle.enableBanner && typeof admob!=='undefined'){
            admob.banner.prepare();
        }
        gradle.prepareInter();

		document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {
           gradle.log(event);
        });

        document.addEventListener('admob.banner.events.LOAD', function(event) {
           gradle.log(event);
        });

        document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
           gradle.log(event);
        });

        document.addEventListener('admob.interstitial.events.LOAD', function(event) {
           gradle.log(event);
        });

        document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
           gradle.log(event);
           admob.interstitial.prepare();
        });
		

		if(gradle.notifiBackbutton){
            document.addEventListener("backbutton", function() {
                var key=null;
                if(typeof STATE!='undefined'){
                    key = STATE;
                    switch(key){
                        case 1: //'Menu'
                            key=null;
							gradle.process('button_back');
                            break;
                        case 3: //'Game'
                            (new CAreYouSurePanel(s_oStage)).show();
                            break;
						case 5: //'Credits'
							(new CMenu(s_oStage)).unload();
                            gradle.oMain.gotoMenu();
							gradle.process('button_back');
                            break;
                    }
                }
				
                if(key==null){
                    navigator.notification.confirm(gradle.notifiMessage, function(buttonIndex){
                        if(buttonIndex == 1) {
                            navigator.app.exitApp();
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                }
            }, !1);
        }
        document.addEventListener("visibilitychange", gradle.onVisibilityChanged, false);
		document.addEventListener("mozvisibilitychange", gradle.onVisibilityChanged, false);
		document.addEventListener("webkitvisibilitychange", gradle.onVisibilityChanged, false);
		document.addEventListener("msvisibilitychange", gradle.onVisibilityChanged, false);
		
		$(gradle.oMain).on("start_session", function (evt) {
            if (getParamValue('ctl-arcade') === "true") {
                parent.__ctlArcadeStartSession();
            }
            gradle.event("start_session");
        });

        $(gradle.oMain).on("end_session", function (evt) {
            if (getParamValue('ctl-arcade') === "true") {
                parent.__ctlArcadeEndSession();
            }
            gradle.event("end_session");
        });

        $(gradle.oMain).on("start_level", function (evt, iLevel) {
            if (getParamValue('ctl-arcade') === "true") {
                parent.__ctlArcadeStartLevel({level: iLevel});
            }
            gradle.event("start_level");
        });

        $(gradle.oMain).on("end_level", function (evt, iLevel) {
            if (getParamValue('ctl-arcade') === "true") {
                parent.__ctlArcadeEndLevel({level: iLevel});
            }
            gradle.event("end_level");
        });

        $(gradle.oMain).on("restart_level", function (evt, iLevel) {
            if (getParamValue('ctl-arcade') === "true") {
                parent.__ctlArcadeRestartLevel({level: iLevel});
            }
            gradle.event("restart_level");
        });

        $(gradle.oMain).on("save_score", function (evt, iScore) {
            if (getParamValue('ctl-arcade') === "true") {
                parent.__ctlArcadeSaveScore({score: iScore});
            }
            gradle.event("save_score");
        });
		gradle.event('first_start');
		sizeHandler();
		setTimeout(function(){gradle.hideSplash();},500);
    },

    more: function(){
        (gradle.developer_link!=="")&&window.open(gradle.developer_link);
    },

    process: function(ev, msg){
        if(ev=='game_loaded'){
            gradle.hideSplash();
        }
		//console.log(STATE);
		switch(STATE){
			case 1: //'Menu'
				document.getElementById('bg_block').style.backgroundImage= "url('images/menu.png')";
				break;
			case 3: //'Game'
			case 5: //'Credits'
				document.getElementById('bg_block').style.backgroundImage= "url('images/background.jpg')";
				break;
		}
    },


    hideSplash: function(){
        if(gradle.isMobile && typeof cordova!='undefined'){
            cordova.exec(null, null, "SplashScreen", "hide", []);
        }
    },

    prepareInter: function(){
        if(!gradle.isMobile || typeof admob=='undefined' || admob==null) return;
        admob.interstitial.prepare();
    },

    showInter: function(){
        if(!gradle.enableInterstitial || !gradle.isMobile || typeof admob=='undefined' || admob==null) return;
        admob.interstitial.show();
		//gradle.prepareInter();
    },

    run : function(){
        gradle.isMobile ? document.addEventListener('deviceready', gradle.ready, false) :  gradle.ready();
    },
	
	onVisibilityChanged : function(){
		try{
			if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden){
				gradle.oMain.stopUpdate();
			}else{
				gradle.oMain.startUpdate();
			}
		}catch(error){}
	},
	
	currentInterval : 0,
	checkInterval: function(){
		return (++gradle.currentInterval==gradle.intervalAds) ? !(gradle.currentInterval=0) : !1;
	},
	
	buildKey : function(key){
        return "gd.ludo."+key;
    },

    getStorage: function(key, default_value){
        var value;
        try {
            value = localStorage.getItem(gradle.buildKey(key));
        }
        catch(error){
			return default_value;
        }
		if(value !== undefined && value !=null){
            value = window.atob(value);
        }
		else{
			value = default_value;
		}
        return value;
    },

    setStorage: function(key, value){
        var v = value;
        if(v !== undefined){
            v = window.btoa(v);
        }
        try{
            localStorage.setItem(gradle.buildKey(key), v);
            return value;
        }
        catch(error){
            return undefined;
        }
    }
};

gradle.run();





