/**
	Gradle
	KNOWLEDGE IS POWER
	Update : 2019_11_25 21:55:00
	v1.0.67
	@2019
*/
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        d = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        e = function() {
            for (var f, b = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], c = 0, g = b.length, e = {}; c < g; c++)
                if ((f = b[c]) && f[1] in a) {
                    for (c = 0; c < f.length; c++) e[b[0][c]] =
                        f[c];
                    return e
                }
            return !1
        }(),
        k = {
            change: e.fullscreenchange,
            error: e.fullscreenerror
        },
        c = {
            request: function(f) {
                var c = e.requestFullscreen;
                f = f || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) f[c]();
                else f[c](b && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[e.exitFullscreen]()
            },
            toggle: function(a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function(a) {
                this.on("change", a)
            },
            onerror: function(a) {
                this.on("error", a)
            },
            on: function(f, b) {
                var c = k[f];
                c && a.addEventListener(c, b, !1)
            },
            off: function(b,
                c) {
                var f = k[b];
                f && a.removeEventListener(f, c, !1)
            },
            raw: e
        };
    e ? (Object.defineProperties(c, {
        isFullscreen: {
            get: function() {
                return !!a[e.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[e.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[e.fullscreenEnabled]
            }
        }
    }), d ? module.exports = c : window.screenfull = c) : d ? module.exports = !1 : window.screenfull = !1
})();
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}

function getSize(a) {
    var d = a.toLowerCase(),
        b = window.document,
        e = b.documentElement;
    if (void 0 === window["inner" + a]) a = e["client" + a];
    else if (window["inner" + a] != e["client" + a]) {
        var k = b.createElement("body");
        k.id = "vpw-test-b";
        k.style.cssText = "overflow:scroll";
        var c = b.createElement("div");
        c.id = "vpw-test-d";
        c.style.cssText = "position:absolute;top:-1000px";
        c.innerHTML = "<style>@media(" + d + ":" + e["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>";
        k.appendChild(c);
        e.insertBefore(k, b.head);
        a = 7 == c["offset" + a] ? e["client" + a] : window["inner" + a];
        e.removeChild(k)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var d = getSize("Width");
        _checkOrientation(d, a);
		//console.log(d,a, CANVAS_WIDTH, CANVAS_HEIGHT);
        var b = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
            e = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var k = a - b;
            b += k;
            e += CANVAS_WIDTH / CANVAS_HEIGHT * k
        } else e < d && (k = d - e, e += k, b += CANVAS_HEIGHT / CANVAS_WIDTH * k);
        k = a / 2 - b / 2;
        var c = d / 2 - e / 2,
            f = CANVAS_WIDTH / e;
        if (c * f < -EDGEBOARD_X || k * f < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), e = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, k = (a - b) / 2, c = (d - e) / 2, f = CANVAS_WIDTH / e;
        s_iOffsetX = -1 * c * f;
        s_iOffsetY = -1 * k * f;
        0 <= k && (s_iOffsetY = 0);
        0 <= c && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos();
        null !== s_oMenu && s_oMenu.refreshButtonPos();
		//change 165.
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * e, s_oStage.canvas.height = 2 * b, canvas.style.width = e + "px", canvas.style.height = b + "px", s_oStage.scaleX = s_oStage.scaleY = 2 * Math.min(e / CANVAS_WIDTH,
            b / CANVAS_HEIGHT)) : !1 && (s_bMobile || isChrome()) ? ($("#canvas").css("width", e + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = e, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(e / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > k ? $("#canvas").css("top", k + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", c + "px");
        fullscreenHandler();
    }
}

function createBitmap(a, d, b) {
    var e = new createjs.Bitmap(a),
        k = new createjs.Shape;
    d && b ? k.graphics.beginFill("#fff").drawRect(0, 0, d, b) : k.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    e.hitArea = k;
    return e
}

function createSprite(a, d, b, e, k, c) {
    a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
    d = new createjs.Shape;
    d.graphics.beginFill("#000000").drawRect(-b, -e, k, c);
    a.hitArea = d;
    return a
}

function randomFloatBetween(a, d, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(b))
}

function formatTime(a) {
    a /= 1E3;
    var d = Math.floor(a / 60);
    a = Math.floor(a - 60 * d);
    var b = "";
    b = 10 > d ? b + ("0" + d + ":") : b + (d + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var d = a.length, b, e; 0 < d;) e = Math.floor(Math.random() * d), d--, b = a[d], a[d] = a[e], a[e] = b;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var d = document.createEvent("MouseEvents");
            d.initEvent("click", !0, !0);
            a.dispatchEvent(d)
        }
    }
};

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var d = window.location.search.substring(1).split("&"), b = 0; b < d.length; b++) {
        var e = d[b].split("=");
        if (e[0] == a) return e[1]
    }
}

function playSound(a, d, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(d), s_aSounds[a].loop(b), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, d) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(d)
}

function setMute(a, d) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(d)
}

function _checkOrientation(a, d) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > d ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}

function easeLinear(a, d, b, e) {
    return b * a / e + d
}

function collisionWithCircle(a, d, b) {
    var e = a.getX() - d.getX(),
        k = a.getY() - d.getY();
    return Math.sqrt(e * e + k * k) < a.getCollision() * b + d.getCollision() * b ? !0 : !1
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !inIframe() && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var d = a.split("."),
        b = d.length;
    2 < b && (a = d[b - 2] + "." + d[b - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            d = !1;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    d = !0;
                    break
                }
        } catch (b) {
            d = !0
        }
        return {
            topFrame: a,
            err: d
        }
    },
    getBestPageUrl = function(a) {
        var d = a.topFrame,
            b = "";
        if (a.err) try {
            try {
                b = window.top.location.href
            } catch (k) {
                var e = window.location.ancestorOrigins;
                b = e[e.length - 1]
            }
        } catch (k) {
            b = d.document.referrer
        } else b = d.location.href;
        return b
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    return 1;
}

function CSpriteLibrary() {
    var a, d, b, e, k, c;
    this.init = function(f, h, l) {
        b = d = 0;
        e = f;
        k = h;
        c = l;
        a = {}
    };
    this.addSprite = function(b, c) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: c,
            oSprite: new Image
        }, d++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        k.call(c)
    };
    this._onSpriteLoaded = function() {
        e.call(c);
        ++b === d && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return d
    }
}
var CANVAS_WIDTH = 960,
    CANVAS_HEIGHT = 1440,
    CANVAS_WIDTH_HALF = .5 * CANVAS_WIDTH,
    CANVAS_HEIGHT_HALF = .5 * CANVAS_HEIGHT,
    EDGEBOARD_X = 50,
    EDGEBOARD_Y = 130,
    FPS = 30,
    FPS_TIME = 1 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    OUTLINE_TEXT = 4,
    CELL_OFFSET = {
        x: -9,
        y: -9
    },
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    CONFIRMATION_EXIT = 0,
    CONFIRMATION_RESET = 1,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ON_TWEEN_ENDED = 6,
    ON_BUT_NO_DOWN = 7,
    ON_BUT_YES_DOWN = 8,
    BLOCK_TIME_SPAWN_RANGE = {
        min: 500,
        max: 1E4
    },
    LEFT = 0,
    RIGHT = 1,
    UP = 2,
    DOWN = 3,
    GRID_Y = 20,
    GRID_X = 10,
    SHOW_CELL = !1,
    TIME_REFRESH_DIRECTION = .2,
    CELL_DESTROY_MS = 15,
    DELAY_CELL_DESTROY_MS = 20,
    DELAY_LINE_DOWN = 10,
    LINE_DOWN_TIME = 40,
    SHOW_FPS = !1,
    TIME_REFRESH_GAME = 1,
    TIME_REFRESH_GAME_KEY_DOWN, GRID_X_HALF = Math.floor(.5 * GRID_X),
    CELL_SIZE = 50,
    START_GRID_X = CANVAS_WIDTH_HALF - CELL_SIZE * GRID_X_HALF - 2.35 * EDGEBOARD_X,
    START_GRID_Y = CANVAS_HEIGHT_HALF - GRID_Y * GRID_Y,
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;


TEXT_SHARE_IMAGE = "";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, d, b, e, k, c, f;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", g_sprites[40]);
        s_oSpriteLibrary.loadSprites();
        f = new createjs.Container;
        s_oStage.addChild(f)
    };
    this.unload = function() {
        f.removeAllChildren()
    };
    this.hide = function() {
        var a = this;
        setTimeout(function() {
            createjs.Tween.get(c).to({
                alpha: 1
            }, 500).call(function() {
                a.unload();
                s_oMain.gotoMenu()
            })
        }, 1E3)
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        a = 1;//h.width;
        d = 1;//h.height;
        k = new createjs.Shape;
        b = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT - 250;
        b.shadow = new createjs.Shadow("#000", 2, 2, 2);
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        f.addChild(b);
        c = new createjs.Shape;
        c.alpha = 0.9;
        
    };
    this.refreshLoader = function(c) {
        b.text = c + "%";
        k.graphics.clear();
        c = Math.floor(c * a / 100);
        
    };
    this._init()
}

function CMain(a) {
	
    var d, b = 0,
        e = 0,
        k = STATE_LOADING,
        c, f;
	STATE = k;
    this.initContainer = function() {
		s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage);
        s_bMobile = true || jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(30);
        navigator.userAgent.match(/Windows Phone/i) &&
            (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        c = new CPreloader;
    };
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        d = !0;
		//gradle.event('game_loaded');
    };
    this.soundLoaded = function() {
        b++;
        c.refreshLoader(Math.floor(b / e * 100));
        b === e && (c.unload(), isIOS() || (s_oSoundTrack = playSound("soundtrack", 1, !0)), this.gotoMenu())
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "delete_lines",
            loop: !1,
            volume: 1,
            ingamename: "delete_lines"
        });
        a.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        a.push({
            path: "./sounds/",
            filename: "shift_piece",
            loop: !1,
            volume: 1,
            ingamename: "shift_piece"
        });
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        e += a.length;
        s_aSounds = [];
        for (var g = 0; g < a.length; g++) s_aSounds[a[g].ingamename] = new Howl({
            src: [a[g].path +
                a[g].filename + ".mp3", a[g].path + a[g].filename + ".ogg"
            ],
            autoplay: !1,
            preload: !0,
            loop: a[g].loop,
            volume: a[g].volume,
            onload: s_oMain.soundLoaded()
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_game",  g_sprites[1]);
        s_oSpriteLibrary.addSprite("but_exit", g_sprites[2]);
        s_oSpriteLibrary.addSprite("but_pause", g_sprites[3]);
        s_oSpriteLibrary.addSprite("icon_audio", g_sprites[4]);
        s_oSpriteLibrary.addSprite("but_play", g_sprites[5]);
        s_oSpriteLibrary.addSprite("but_restart", g_sprites[6]);
        s_oSpriteLibrary.addSprite("but_continue", g_sprites[7]);
        s_oSpriteLibrary.addSprite("but_home", g_sprites[8]);
        s_oSpriteLibrary.addSprite("but_not", g_sprites[9]);
        s_oSpriteLibrary.addSprite("but_rotation", g_sprites[10]);
        s_oSpriteLibrary.addSprite("small_logo", g_sprites[11]);
        s_oSpriteLibrary.addSprite("block_blur", g_sprites[12]);
        s_oSpriteLibrary.addSprite("block_rotation", g_sprites[13]);
        s_oSpriteLibrary.addSprite("block_down", g_sprites[14]);
        s_oSpriteLibrary.addSprite("logo_ctl", g_sprites[15]);
        s_oSpriteLibrary.addSprite("pause_text", g_sprites[16]);
        s_oSpriteLibrary.addSprite("cell", g_sprites[17]);
        s_oSpriteLibrary.addSprite("msg_box", g_sprites[18]);
        s_oSpriteLibrary.addSprite("but_yes", g_sprites[19]);
        s_oSpriteLibrary.addSprite("but_info", g_sprites[20]);
        s_oSpriteLibrary.addSprite("arrow", g_sprites[21]);
        s_oSpriteLibrary.addSprite("next_board", g_sprites[22]);
        s_oSpriteLibrary.addSprite("info_board", g_sprites[23]);
        s_oSpriteLibrary.addSprite("score_board", g_sprites[24]);
        s_oSpriteLibrary.addSprite("frame_top", g_sprites[25]);
        s_oSpriteLibrary.addSprite("frame_bottom", g_sprites[26]);
        s_oSpriteLibrary.addSprite("key_down", g_sprites[27]);
        s_oSpriteLibrary.addSprite("key_up", g_sprites[28]);
        s_oSpriteLibrary.addSprite("key_right", g_sprites[29]);
        s_oSpriteLibrary.addSprite("key_left", g_sprites[30]);
        s_oSpriteLibrary.addSprite("logo_menu", g_sprites[31]);
        s_oSpriteLibrary.addSprite("but_fullscreen", g_sprites[32]);
		s_oSpriteLibrary.addSprite("msg_credits", g_sprites[41]);
		
        for (var a = 0; a < BLOCKS_TYPE.length; a++){
			s_oSpriteLibrary.addSprite("cell_" + a, g_sprites[33+(a%7)]);
		}
        e += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };
    this._onImagesLoaded = function() {
        b++;
        c.refreshLoader(Math.floor(b / e * 100));
        b === e && (c.unload(), isIOS() || (s_oSoundTrack = playSound("soundtrack", 1, !0)), this.gotoMenu())
    };
    this._onAllImagesLoaded = function() {};
    this.gotoMenu = function() {
        new CMenu;
        STATE = k = STATE_MENU;
    };
    this.gotoGame = function() {
        f = new CGame(h);
        STATE = k = STATE_GAME;
        $(s_oMain).trigger("start_session")
    };
    this.stopUpdate = function() {
        d = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime =
            (new Date).getTime();
        d = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== d) {
            var g = (new Date).getTime();
            s_iTimeElaps = g - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = g;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            k === STATE_GAME && f.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var h = a;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_iAdsLevel = 1,
    s_iLevelReached = 1,
    s_aScores = [],
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_oCanvas, s_aSounds, s_oSpriteSheetLora, s_bFullscreen = !1;

function CTextButton(a, d, b, e, k, c, f) {
    var h, l, g, m, n;
    this._init = function(a, b, c, f, e, k, d) {
        h = [];
        l = [];
        e = createBitmap(c);
        var v = Math.ceil(d / 20);
        n = new createjs.Text(f, "bold " + d + "px " + PRIMARY_FONT, "#000000");
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        var q = n.getBounds();
        n.x = c.width / 2 + v;
        n.y = Math.floor(c.height / 2) + q.height / 3 + v;
        m = new createjs.Text(f, "bold " + d + "px " + PRIMARY_FONT, k);
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        q = m.getBounds();
        m.x = c.width / 2;
        m.y = Math.floor(c.height / 2) + q.height / 3;
        g = new createjs.Container;
        g.x = a;
        g.y = b;
        g.regX = c.width / 2;
        g.regY = c.height / 2;
        g.addChild(e, n, m);
        s_oStage.addChild(g);
        s_bMobile || (g.cursor = "pointer");
        this._initListener()
    };
    this.unload = function() {
        g.off("mousedown");
        g.off("pressup");
        s_oStage.removeChild(g)
    };
    this.setVisible = function(a) {
        g.visible = a
    };
    this._initListener = function() {
        oParent = this;
        g.on("mousedown", this.buttonDown);
        g.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, g, b) {
        h[a] = g;
        l[a] = b
    };
    this.buttonRelease = function() {
        g.scaleX = 1;
        g.scaleY = 1;
        playSound("click",
            1, !1);
        h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(l[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        g.scaleX = .9;
        g.scaleY = .9;
        h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN])
    };
    this.setTextPosition = function(a) {
        m.y = a;
        n.y = a + 2
    };
    this.setPosition = function(a, b) {
        g.x = a;
        g.y = b
    };
    this.setX = function(a) {
        g.x = a
    };
    this.setY = function(a) {
        g.y = a
    };
    this.getButtonImage = function() {
        return g
    };
    this.getX = function() {
        return g.x
    };
    this.getY = function() {
        return g.y
    };
    this._init(a, d, b, e, k, c, f);
    return this
}

function CTextToggle(a, d, b, e, k, c, f, h, l) {
    var g = 1,
        m, n = !1,
        q, v, r, p, u, t;
    this._init = function(a, g, b, c, f, e, k, h, d) {
        m = !1;
        q = [];
        v = [];
        t = createBitmap(b);
        var l = Math.ceil(k / 20);
        u = new createjs.Text(c, " " + k + "px " + f, "#000000");
        u.textAlign = "center";
        u.textBaseline = "alphabetic";
        var n = u.getBounds();
        u.x = b.width / 2 + l;
        u.y = Math.floor(b.height / 2) + n.height / 3 + l - 7;
        p = new createjs.Text(c, " " + k + "px " + f, e);
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        n = p.getBounds();
        p.x = b.width / 2;
        p.y = Math.floor(b.height / 2) + n.height / 3 - 7;
        r = new createjs.Container;
        r.x = a;
        r.y = g;
        r.regX = b.width / 2;
        r.regY = b.height / 2;
        h || (a = new createjs.SpriteSheet({
            images: [b],
            frames: {
                width: b.width / 2,
                height: b.height,
                regX: b.width / 2 / 2,
                regY: b.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        }), t = createSprite(a, "state_false", b.width / 2 / 2, b.height / 2, b.width / 2, b.height), u.x = l, u.y = l + 17, p.x = 0, p.y = 17, r.regX = 0, r.regY = 0);
        r.addChild(t, u, p);
        s_bMobile || (r.cursor = "pointer");
        d.addChild(r);
        this._initListener()
    };
    this.unload = function() {
        r.off("mousedown");
        r.off("pressup");
        l.removeChild(r)
    };
    this.setVisible =
        function(a) {
            r.visible = a
        };
    this._initListener = function() {
        oParent = this;
        r.on("mousedown", this.buttonDown);
        r.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, g) {
        q[a] = b;
        v[a] = g
    };
    this.buttonRelease = function() {
        m || n || (r.scaleX = 1 * g, r.scaleY = 1 * g, q[ON_MOUSE_UP] && q[ON_MOUSE_UP].call(v[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        m || n || (r.scaleX = .9 * g, r.scaleY = .9 * g, q[ON_MOUSE_DOWN] && q[ON_MOUSE_DOWN].call(v[ON_MOUSE_DOWN]))
    };
    this.enable = function() {
        m = !1;
        h || t.gotoAndStop("state_true")
    };
    this.disable =
        function() {
            m = !0;
            h || t.gotoAndStop("state_false")
        };
    this.setTextPosition = function(a, b) {
        var g = Math.ceil(f / 20);
        u.x = a + g;
        u.y = b + g;
        p.x = a;
        p.y = b
    };
    this.setText = function(a) {
        p.text = a;
        u.text = a
    };
    this.setPosition = function(a, b) {
        r.x = a;
        r.y = b
    };
    this.setX = function(a) {
        r.x = a
    };
    this.setY = function(a) {
        r.y = a
    };
    this.getButtonImage = function() {
        return r
    };
    this.getX = function() {
        return r.x
    };
    this.getY = function() {
        return r.y
    };
    this.block = function(a) {
        n = a
    };
    this.setScale = function(a) {
        g = a;
        r.scaleX = a;
        r.scaleY = a
    };
    this.setScaleX = function(a) {
        t.scaleX =
            a
    };
    this._init(a, d, b, e, k, c, f, h, l);
    return this
}

function CToggle(a, d, b, e, k) {
    var c, f, h, l = [],
        g;
    this._init = function(a, b, e, k) {
        f = [];
        h = [];
        var d = new createjs.SpriteSheet({
            images: [e],
            frames: {
                width: e.width / 2,
                height: e.height,
                regX: e.width / 2 / 2,
                regY: e.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        c = k;
        g = createSprite(d, "state_" + c, e.width / 2 / 2, e.height / 2, e.width / 2, e.height);
        g.mouseEnabled = !0;
        g.x = a;
        g.y = b;
        g.stop();
        s_bMobile || (g.cursor = "pointer");
        m.addChild(g);
        this._initListener()
    };
    this.unload = function() {
        g.off("mousedown", this.buttonDown);
        g.off("pressup",
            this.buttonRelease);
        g.mouseEnabled = !1;
        m.removeChild(g)
    };
    this._initListener = function() {
        g.on("mousedown", this.buttonDown);
        g.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, g) {
        f[a] = b;
        h[a] = g
    };
    this.addEventListenerWithParams = function(a, b, g, c) {
        f[a] = b;
        h[a] = g;
        l = c
    };
    this.setActive = function(a) {
        c = a;
        g.gotoAndStop("state_" + c)
    };
    this.buttonRelease = function() {
        g.scaleX = 1;
        g.scaleY = 1;
        playSound("click", 1, !1);
        c = !c;
        g.gotoAndStop("state_" + c);
        f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(h[ON_MOUSE_UP], l)
    };
    this.buttonDown =
        function() {
            g.scaleX = .9;
            g.scaleY = .9;
            f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], l)
        };
    this.setPosition = function(a, b) {
        g.x = a;
        g.y = b
    };
    this.setVisible = function(a) {
        g.visible = a
    };
    var m = k;
    this._init(a, d, b, e)
}

function CNumToggle(a, d, b, e) {
    var k, c, f, h, l, g, m, n = [];
    this._init = function(a, b, e, d) {
        c = !1;
        f = [];
        h = [];
        l = new createjs.Container;
        l.x = a;
        l.y = b;
        d.addChild(l);
        a = s_oSpriteLibrary.getSprite("num_button");
        b = {
            images: [a],
            framerate: 5,
            frames: {
                width: a.width / 2,
                height: a.height,
                regX: a.width / 2 / 2,
                regY: a.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        };
        b = new createjs.SpriteSheet(b);
        k = !1;
        g = createSprite(b, "state_" + k, a.width / 2 / 2, a.height / 2, a.width / 2, a.height);
        g.stop();
        a = s_oSpriteLibrary.getSprite("ball");
        b = {
            images: [a],
            frames: {
                width: a.width / NUM_DIFFERENT_BALLS,
                height: a.height,
                regX: a.width / NUM_DIFFERENT_BALLS / 2,
                regY: a.height / 2
            },
            animations: {
                red: [0],
                green: [1],
                cyan: [0],
                violet: [1],
                blue: [1]
            }
        };
        b = new createjs.SpriteSheet(b);
        m = createSprite(b, "red", a.width / NUM_DIFFERENT_BALLS / 2, a.height / 2, a.width / NUM_DIFFERENT_BALLS, a.height);
        m.gotoAndStop(0);
        m.visible = !1;
        l.addChild(g, m);
        this._initListener()
    };
    this.unload = function() {
        l.off("mousedown", this.buttonDown);
        l.off("pressup", this.buttonRelease);
        e.removeChild(l)
    };
    this._initListener =
        function() {
            l.on("mousedown", this.buttonDown);
            l.on("pressup", this.buttonRelease)
        };
    this.addEventListener = function(a, b, g) {
        f[a] = b;
        h[a] = g
    };
    this.addEventListenerWithParams = function(a, b, g, c) {
        f[a] = b;
        h[a] = g;
        n = c
    };
    this.setActive = function(a) {
        k = a;
        g.gotoAndStop("state_" + k)
    };
    this.buttonRelease = function() {
        c || (playSound("click", 1, !1), k = !k, g.gotoAndStop("state_" + k), f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(h[ON_MOUSE_UP], n))
    };
    this.buttonDown = function() {
        c || f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], n)
    };
    this.setPosition =
        function(a, b) {
            l.x = a;
            l.y = b
        };
    this.getGlobalPosition = function() {
        return {
            x: l.localToGlobal(0, 0).x,
            y: l.localToGlobal(0, 0).y
        }
    };
    this.block = function(a) {
        c = a
    };
    this.setExtracted = function(a, b) {
        m.visible = a;
        m.gotoAndStop(b)
    };
    this.highlight = function() {
        g.gotoAndPlay(0)
    };
    this.stopHighlight = function() {
        g.gotoAndStop(1)
    };
    this._init(a, d, b, e)
}

function CGfxButton(a, d, b, e) {
    var k, c, f, h, l = [],
        g, m;
    this._init = function(a, b, e, d) {
        k = c = 1;
        f = [];
        h = [];
        g = createBitmap(e);
        g.x = a;
        g.y = b;
        g.regX = e.width / 2;
        g.regY = e.height / 2;
        s_bMobile || (g.cursor = "pointer");
        n ? n.addChild(g) : s_oStage.addChild(g);
        m = !1;
        this._initListener()
    };
    this.unload = function() {
        g.off("mousedown", this.buttonDown);
        g.off("pressup", this.buttonRelease);
        n ? n.removeChild(g) : s_oStage.removeChild(g)
    };
    this.setVisible = function(a) {
        g.visible = a
    };
    this._initListener = function() {
        g.on("mousedown", this.buttonDown);
        g.on("pressup",
            this.buttonRelease)
    };
    this.addEventListener = function(a, b, g) {
        f[a] = b;
        h[a] = g
    };
    this.addEventListenerWithParams = function(a, b, g, c) {
        f[a] = b;
        h[a] = g;
        l = c
    };
    this.buttonRelease = function() {
        m || (g.scaleX = c, g.scaleY = k, playSound("click", 1, !1), f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(h[ON_MOUSE_UP], l))
    };
    this.buttonDown = function() {
        m || (g.scaleX = .9 * c, g.scaleY = .9 * k, f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], l))
    };
    this.setScale = function(a) {
        k = c = a;
        g.scaleX = a;
        g.scaleY = a
    };
    this.setScaleX = function(a) {
        c = a;
        g.scaleX = a
    };
    this.setPosition =
        function(a, b) {
            g.x = a;
            g.y = b
        };
    this.setX = function(a) {
        g.x = a
    };
    this.setY = function(a) {
        g.y = a
    };
    this.getButtonImage = function() {
        return g
    };
    this.getX = function() {
        return g.x
    };
    this.getY = function() {
        return g.y
    };
    this.block = function(a) {
        m = a
    };
    this.rotation = function(a) {
        g.rotation = a
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(g).to({
            scaleX: .9 * c,
            scaleY: .9 * k
        }, 850, createjs.Ease.quadOut).to({
            scaleX: c,
            scaleY: k
        }, 650, createjs.Ease.quadIn).call(function() {
            q.pulseAnimation()
        })
    };
    this.trebleAnimation = function() {
        createjs.Tween.get(g).to({
                rotation: 5
            },
            75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            q.trebleAnimation()
        })
    };
    var n = e;
    var q = this;
    this._init(a, d, b, e);
    return this
}

function CMenu() {
    var a, d, b, e, k, c, f, h, l, g, m, n, q, v, r = null,
        p = null;
    this._init = function() {
        var l = s_oSpriteLibrary.getSprite("logo_menu");
        q = createBitmap(l);
        q.x = CANVAS_WIDTH_HALF;
        q.y = .5 * -l.width;
        q.regX = .5 * l.width;
        q.regY = .5 * l.height;
        q.rotation = -15;
        s_oStage.addChild(q);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) l = s_oSpriteLibrary.getSprite("icon_audio"), k = CANVAS_WIDTH - l.width / 2 + 15, c = l.height / 2 + 30, n = new CToggle(k, c, l, s_bAudioActive,
            s_oStage), n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        l = s_oSpriteLibrary.getSprite("but_play");
        h = new CGfxButton(CANVAS_WIDTH / 2, 1100, l);
        h.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        h.pulseAnimation();
        l = s_oSpriteLibrary.getSprite("but_info");
        b = l.width / 2 + 30;
        e = l.height / 2 + 30;
        g = new CGfxButton(b, e, l);
        g.addEventListener(ON_MOUSE_UP, this._onCredits, this);
        l = window.document;
        var t = l.documentElement;
        r = t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || t.msRequestFullscreen;
        p = l.exitFullscreen || l.mozCancelFullScreen || l.webkitExitFullscreen || l.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (r = !1);
        r && !1 === inIframe() && (l = s_oSpriteLibrary.getSprite("but_fullscreen"), a = b + l.width / 2 + 10, d = e, v = new CToggle(a, d, l, s_bFullscreen, s_oStage), v.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(m);
        createjs.Tween.get(q).wait(300).to({
            rotation: 0
        }, 1E3, createjs.Ease.cubicOut);
        createjs.Tween.get(q).wait(300).to({
            y: CANVAS_HEIGHT_HALF - 100
        }, 1E3, createjs.Ease.bounceOut);
        createjs.Tween.get(m).to({
            alpha: 0
        }, 1E3).call(function() {
            s_oStage.removeChild(m)
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        h.unload();
        h = null;
        g.unload();
        g = null;
        l && (l.unload(), l = null);
        r && !1 === inIframe() && v.unload();
        s_oStage.removeChild(f);
        f = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) n.unload(), n = null;
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this.exitFromCredits = function() {};
    this.refreshButtonPos = function(f, l) {
		if(typeof f == 'undefined'){
			f=s_iOffsetX; l=s_iOffsetY;
		}
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(k - f, c + l);
        r && !1 === inIframe() && v.setPosition(a + s_iOffsetX, d + s_iOffsetY);
		//console.log(f, b+f, e+l, e, l, s_iOffsetX, s_iOffsetY);
        g.setPosition(b + f, e+l );
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        v.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? p.call(window.document) : r.call(window.document.documentElement);
        sizeHandler()
    };
    this._onCredits = function() {
        new CCreditsPanel
    };
    this._onButPlayRelease = function() {
        this.unload();
        isIOS() && null === s_oSoundTrack && (s_oSoundTrack = playSound("soundtrack", 1, !0));
        s_oMain.gotoGame()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    function d(a) {
        p || u || s_oGameField.isAnimFullLines() || (37 === a.keyCode ? (s_oGame.onLeft(), p = !0) : 39 === a.keyCode ? (s_oGame.onRight(), p = !0) : 38 === a.keyCode && (s_oGame.onUp(), p = !0));
        if (40 === a.keyCode && !1 === t && !u) s_oGame.onDown();
        a.preventDefault();
        return !1
    }

    function b(a) {
        !p || u || s_oGameField.isAnimFullLines() || (37 === a.keyCode ? (p = !1, s_oGame.dirKeyUp()) : 39 === a.keyCode ? (p = !1, s_oGame.dirKeyUp()) : 38 === a.keyCode ? p = !1 : 80 === a.keyCode ? p = !1 : 32 === a.keyCode && (p = !1));
        if (40 === a.keyCode && !0 === t) s_oGame.onDownKeyUp();
        a.preventDefault();
        return !1
    }
    var e, k, c, f, h, l, g, m, n, q, v, r, p, u, t = !1,
        w = !1,
        A, z, B, x;
    this._init = function() {
        setVolume("soundtrack", .4);
        this.setPause(!0);
        e = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(e);
        g = new CEdges;
        this.createGameContainer();
        p = !1;
        c = new CGameField;
        r = v = q = m = 0;
        A = z = TIME_REFRESH_GAME;
        x = [];
        for (var a = 0; a < BLOCKS_TYPE.length; a++)
            //for (; 0 < BLOCKS_OCCURENCE[a]; a++) 
				x.push(a);
        this.createBlock(x[Math.floor(Math.random() * x.length)]);
        this.nextType();
        k = new CInterface(n);
        k.refreshLevel(q +
            1);
        this.canInput(!0);
        g.createIEdge();
        $(s_oMain).trigger("start_level", 1);
        k.showHelpPanel();
        s_bMobile || (document.onkeydown = d, document.onkeyup = b)
    };
    this.createGameContainer = function() {
        h = new createjs.Container;
        s_oStage.addChild(h)
    };
    this.nextType = function() {
        n = x[Math.floor(Math.random() * x.length)]
    };
    this.setPause = function(a) {
        u = a
    };
    this._onExitHelpPanel = function() {
        this.setPause(!1);
        k.unloadHelp()
    };
    this.onExit = function() {
        setVolume("soundtrack", 1);
        s_oGame.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad")
    };
    this.restartGame = function() {
        c.unload();
        c = null;
        h.removeAllChildren();
        f = null;
        w = !1;
        this.nextType();
        k.refreshNextBlock(n);
        c = new CGameField;
        this.createBlock(x[Math.floor(Math.random() * x.length)]);
        z = TIME_REFRESH_GAME;
        r = v = q = m = 0;
        k.refreshLevel(q + 1);
        k.refreshLines(v);
        k.refreshScore(m);
        u = !1
    };
    this.unload = function() {
        s_bMobile || (document.onkeydown = null, document.onkeyup = null);
        c.unload();
        try{c = null;}catch(val){};
        k.unload();
        createjs.Tween.removeAllTweens();
        try{s_oStage.removeAllChildren()}catch(val){};
    };
    this.onLeft = function() {
        f.getReplace() || (l = s_oGame.onLeft, w = !0, B = TIME_REFRESH_DIRECTION, 0 < f.getCol() && !c.checkDirection(f, LEFT) && (f.setCol(f.getCol() - 1), f.refreshCellPosition()))
    };
    this.onRight = function() {
        f.getReplace() || (l = s_oGame.onRight, w = !0, B = TIME_REFRESH_DIRECTION, f.getCol() < GRID_X - f.getWidth() && !c.checkDirection(f, RIGHT) && (f.setCol(f.getCol() + 1), f.refreshCellPosition()))
    };
    this.onUp = function() {
        playSound("shift_piece", 1, !1);
        f.setOrientation(f.getOrientation() + 90);
        f.refreshCellPosition()
    };
    this.onDown = function() {
        t = !0;
        f.getReplace() || f.down();
        A = TIME_REFRESH_GAME_KEY_DOWN
    };
    this.calculateScore = function(a) {
        this.addScore(SCORE_LINE[a - 1] * (q + 1))
    };
    this.checkForNewLevel = function(a) {
        v += a;
        r += a;
        k.refreshLines(v);
        r >= LEVEL_UP_LINES && (q++, r -= LEVEL_UP_LINES, k.refreshLevel(q + 1), a = z - STEP_DECREASE, a >= MIN_REFRESH_GAME && (z = a), STEP_DECREASE -= .05, .05 > STEP_DECREASE && (STEP_DECREASE = .05))
    };
    this.canInput = function(a) {};
    this.addScore = function(a) {
        m += a;
        k.refreshScore(m)
    };
    this.dirKeyUp = function() {
        w = !1
    };
    this.onDownKeyUp =
        function() {
            t = !1;
            A = z
        };
    this.createBlock = function(a) {
        var b = s_oSpriteLibrary.getSprite("cell_" + a);
        f = new CBlock(a, b, h)
    };
    this.getContainerGame = function() {
        return h
    };
    this.gameOver = function() {
        this.setPause(!0);
        s_aSounds.game_over.on("end", function() {
            setVolume("soundtrack", .4)
        });
        playSound("game_over", 1, !1);
        setVolume("soundtrack", 0);
        $(s_oMain).trigger("end_level", 1);
        k.gameOver(m, q + 1, v)
    };
    this.keysDirectionPress = function() {
        w && l()
    };
    this.update = function() {
        if (!1 === u && !s_oGameField.isAnimFullLines()) {
            if (!0 === f.getReplace() &&
                (f = null, this.createBlock(n), this.nextType(), k.refreshNextBlock(n), s_oGameField.checkDirection(f))) {
                this.gameOver();
                return
            }
            0 > A ? (f.down(), A = t ? TIME_REFRESH_GAME_KEY_DOWN : 1E3 * z) : A -= s_iTimeElaps;
            0 > B ? (B = TIME_REFRESH_DIRECTION, this.keysDirectionPress()) : w && (B -= FPS_TIME)
        }
    };
    s_oGame = this;
    LEVEL_UP_LINES = a.level_up_lines;
    MIN_REFRESH_GAME = a.min_refresh_game;
    SCORE_LINE = a.score_line;
    TIME_REFRESH_GAME = a.start_refresh_game;
    STEP_DECREASE = a.step_decrease_refresh_game;
    BLOCKS_OCCURENCE = a.blocks_occurence;
    NUM_LEVEL_FOR_ADS =
        a.num_levels_for_ads;
    TIME_REFRESH_GAME_KEY_DOWN = MIN_REFRESH_GAME;
    this._init()
}
var s_oGame, s_oScrollStage;

function CInterface(a) {
    var d, b, e, k, c, f, h, l, g, m = null,
        n = null,
        q, v, r, p, u, t, w, A, z, B, x, G, D, y = null,
        F;
    this._init = function(a) {
        var p = s_oSpriteLibrary.getSprite("but_exit");
        e = CANVAS_WIDTH - p.width / 2 - 30;
        k = p.height / 2 + 30;
        r = new CGfxButton(e, k, p);
        r.addEventListener(ON_MOUSE_UP, this._onExit, this);
        var C = s_oSpriteLibrary.getSprite("but_pause");
        h = CANVAS_WIDTH - C.width / 2 - p.width - 30 - 15;
        l = C.height / 2 + 30;
        v = new CGfxButton(h, l, C);
        v.addEventListener(ON_MOUSE_UP, this.onButPauseRelease, this);
        var E = s_oSpriteLibrary.getSprite("but_fullscreen");
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
            var w = s_oSpriteLibrary.getSprite("icon_audio");
            c = CANVAS_WIDTH - w.width / 2 - C.width - p.width / 2 - 30 - 30;
            f = w.height / 2 + 30;
            q = new CToggle(c, f, w, s_bAudioActive, s_oStage);
            q.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
            d = c - E.width / 2 - 10;
            b = f
        } else d = CANVAS_WIDTH - E.width / 2 - C.width - p.width / 2 - 30 - 30, b = E.height / 2 + 30;
        p = window.document;
        C = p.documentElement;
        m = C.requestFullscreen || C.mozRequestFullScreen || C.webkitRequestFullScreen || C.msRequestFullscreen;
        n = p.exitFullscreen ||
            p.mozCancelFullScreen || p.webkitExitFullscreen || p.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (m = !1);
        m && !1 === inIframe() && (F = new CToggle(d, b, E, s_bFullscreen, s_oStage), F.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        E = s_oSpriteLibrary.getSprite("next_board");
        B = new CNextBlockBoard(800, 417, E, a, s_oStage);
        a = s_oSpriteLibrary.getSprite("info_board");
        x = new CInfoBoard(800, 757, a, s_oStage);
        a = s_oSpriteLibrary.getSprite("score_board");
        G = new CScoreBoard(800, 1051, a, s_oStage);
        a = s_oSpriteLibrary.getSprite("small_logo");
        g = {
            x: .5 * a.width + 30,
            y: .5 * a.height + 30
        };
        D = createBitmap(a);
        D.x = g;
        D.y = g;
        D.regX = .5 * a.width;
        D.regY = .5 * a.height;
        s_oStage.addChild(D);
        !0 === SHOW_FPS && (u = new createjs.Text("", "normal 60px " + PRIMARY_FONT, "#ffd800"), u.textAlign = "center", u.textBaseline = "alphabetic", u.x = .5 * CANVAS_WIDTH + -330, u.y = .5 * CANVAS_HEIGHT + 550, t = new createjs.Text("", "normal 60px " + PRIMARY_FONT, "#025cce"), t.textAlign = "center", t.textBaseline = "alphabetic", t.x = .5 * CANVAS_WIDTH + -328, t.y = .5 * CANVAS_HEIGHT + 552, s_oStage.addChild(t, u));
        s_bMobile && (y = new CController);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(a, n) {
		if(typeof a == 'undefined'){
			a=s_iOffsetX; n=s_iOffsetY;
		}
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.setPosition(c - a, f + n);
        m && !1 === inIframe() && F.setPosition(d - s_iOffsetX, b + s_iOffsetY);
        v.setPosition(h - a, l + n);
        r.setPosition(e - a, k + n);
        var p = B.getStartPos();
        B.setPosition(p.x - a, p.y);
        p = x.getStartPos();
        x.setPosition(p.x - a, p.y);
        p = G.getStartPos();
        G.setPosition(p.x - a, p.y);
        D.x = g.x + a;
        D.y = g.y + n;
        null !== y && (p = y.getStartPositionControlLeft(), y.setPositionControlLeft(p.x + a,
            p.y - n), p = y.getStartPositionControlRight(), y.setPositionControlRight(p.x + a, p.y - n), p = y.getStartPositionControlUp(), y.setPositionControlUp(p.x - a, p.y - n), p = y.getStartPositionControlDown(), y.setPositionControlDown(p.x + a, p.y - n))
    };
    this.finishGame = function(a) {
        var b = s_oSpriteLibrary.getSprite("msg_box");
        A = new CCongratulations(b, a)
    };
    this._onButNextLevelRelease = function() {
        setVolume("soundtrack", .4);
        w = null;
        s_oGame.nextLevel()
    };
    this._onButSpaceBarRelease = function() {
        w && w._onContinue()
    };
    this._onButMenuRelease = function() {
        A &&
            (A.unload(), A = null);
        s_oGame.onExit()
    };
    this.refreshScore = function(a) {
        G.refreshScore(a)
    };
    this.refreshLevel = function(a) {
        x.refreshLevel(a)
    };
    this.refreshLines = function(a) {
        x.refreshLines(a)
    };
    this.unloadPause = function() {
        z.unload();
        z = null
    };
    this.onButPauseRelease = function() {
        z = new CPause
    };
    this.onContinuePauseRelease = function() {
        z && z._onLeavePause()
    };
    this.showHelpPanel = function() {
        var a = s_oSpriteLibrary.getSprite("msg_box");
        p = new CHelpPanel(0, 0, a)
    };
    this.gameOver = function(a, b, g) {
        var c = s_oSpriteLibrary.getSprite("msg_box");
        new CGameOver(c, a, b, g)
    };
    this.unloadHelp = function() {
        p.unload();
        p = null
    };
    this._onButRestartLevelRelease = function() {
        s_oGame.restartLevelFromGameOver();
        r.block(!1)
    };
    this.showLevelNum = function(a) {
        var b = a + 1;
        a = new createjs.Text(TEXT_LEVEL + " " + b, "normal 90px " + PRIMARY_FONT, "#ffffff");
        a.textAlign = "left";
        a.textBaseline = "alphabetic";
        a.x = -90;
        a.y = 0;
        b = new createjs.Text(TEXT_LEVEL + " " + b, "normal 90px " + PRIMARY_FONT, "#000000");
        b.textAlign = "left";
        b.textBaseline = "alphabetic";
        b.x = -90;
        b.y = 0;
        b.outline = OUTLINE_TEXT + 1;
        var g =
            new createjs.Container;
        g.addChild(b, a);
        g.scaleX = 0;
        g.scaleY = 0;
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(g);
        createjs.Tween.get(g).to({
            scaleX: 1,
            scaleY: 1
        }, 1E3, createjs.Ease.elasticOut).call(function() {
            createjs.Tween.get(g).wait(500).to({
                scaleX: 0,
                scaleY: 0
            }, 1E3, createjs.Ease.elasticIn).call(function() {
                s_oStage.removeChild(g);
                s_oGame.setPause(!1);
                s_oGame.canInput(!0);
                s_oGame.startAnimEnemy("walk")
            })
        })
    };
    this.numLevel = function(a) {};
    this.unload = function() {
        r.unload();
        r = null;
        v.unload();
        v = null;
        null !== y && (y.unload(), y = null);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q.unload(), q = null;
        m && !1 === inIframe() && F.unload();
        s_oInterface = null
    };
    this.refreshNextBlock = function(a) {
        B.refreshBlock(a)
    };
    this.refreshFPS = function() {
        var a = Math.ceil(createjs.Ticker.getMeasuredFPS());
        u.text = "FPS:" + a;
        t.text = "FPS:" + a
    };
    this._onExit = function() {
        (new CAreYouSurePanel(s_oStage)).show()
    };
    this._onButRestartLevelRelease = function() {
        s_oGame.restartGame()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        F.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? n.call(window.document) : m.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(a);
    return this
}
var s_oInterface = null;

function CHelpPanel(a, d, b) {
    var e, k, c, f, h, l, g = !1;
    this._init = function(a, b, g) {
        h = new createjs.Container;
        h.x = a;
        h.y = b;
        s_oStage.addChild(h);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .7;
        h.addChild(f);
        c = createBitmap(g);
        c.x = CANVAS_WIDTH_HALF;
        c.y = CANVAS_HEIGHT_HALF;
        c.regX = .5 * g.width;
        c.regY = .5 * g.height;
        h.addChild(c);
        k = new createjs.Text(TEXT_HOW_TO_PLAY, "50px " + PRIMARY_FONT, "#0025c2");
        k.textAlign = "center";
        k.lineWidth = 500;
        k.x = .5 * CANVAS_WIDTH;
        k.y = .5 * CANVAS_HEIGHT -
            210;
        k.outline = 4;
        h.addChild(k);
        e = new createjs.Text(TEXT_HOW_TO_PLAY, "50px " + PRIMARY_FONT, "#ffd800");
        e.textAlign = "center";
        e.lineWidth = 500;
        e.x = .5 * CANVAS_WIDTH;
        e.y = .5 * CANVAS_HEIGHT - 210;
        h.addChild(e);
        l = new createjs.Container;
        if (s_bMobile) {
            var d = s_oSpriteLibrary.getSprite("arrow");
            var m = s_oSpriteLibrary.getSprite("arrow");
            var n = s_oSpriteLibrary.getSprite("arrow");
            var q = s_oSpriteLibrary.getSprite("but_rotation")
        } else d = s_oSpriteLibrary.getSprite("key_left"), m = s_oSpriteLibrary.getSprite("key_up"), n = s_oSpriteLibrary.getSprite("key_right"),
            q = s_oSpriteLibrary.getSprite("key_down");
        a = this.createKey(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF - 100, s_oSpriteLibrary.getSprite("block_blur"));
        b = this.createKey(CANVAS_WIDTH_HALF - 125, CANVAS_HEIGHT_HALF + 30, s_oSpriteLibrary.getSprite("block_down"));
        g = this.createKey(CANVAS_WIDTH_HALF + 125, CANVAS_HEIGHT_HALF + 30, s_oSpriteLibrary.getSprite("block_rotation"));
        d = this.createKey(CANVAS_WIDTH_HALF - 135, CANVAS_HEIGHT_HALF - 90, d);
        m = this.createKey(CANVAS_WIDTH_HALF + 125, CANVAS_HEIGHT_HALF + 170, m);
        n = this.createKey(CANVAS_WIDTH_HALF +
            135, CANVAS_HEIGHT_HALF - 90, n);
        q = this.createKey(CANVAS_WIDTH_HALF - 125, CANVAS_HEIGHT_HALF + 170, q);
        s_bMobile && (d.scaleX = -1, m.rotation = 270);
        l.addChild(d, m, n, q, a, b, g);
        h.addChild(l);
        s_bMobile || (h.cursor = "pointer");
        var t = this;
        h.on("pressup", function() {
            t._onExitHelp()
        })
    };
    this.createKey = function(a, b, g) {
        var c = createBitmap(g);
        c.x = a;
        c.y = b;
        c.regX = .5 * g.width;
        c.regY = .5 * g.height;
        return c
    };
    this.unload = function() {
        createjs.Tween.removeAllTweens();
        createjs.Tween.get(h).to({
            alpha: 0
        }, 500, createjs.Ease.cubicIn).call(function() {
            s_oStage.removeChild(h)
        });
        var a = this;
        h.off("pressup", function() {
            a._onExitHelp()
        })
    };
    this._onExitHelp = function() {
        g || (g = !0, this.unload(), s_oGame._onExitHelpPanel())
    };
    this._init(a, d, b);
    return this
}

function CGameOver(a, d, b, e) {
    var k, c, f, h, l, g;
    this._init = function(a, b, e, d) {
        s_oGame.setPause(!0);
        k = new createjs.Container;
        c = new createjs.Container;
        c.y = -CANVAS_WIDTH_HALF - .5 * a.width;
        f = createBitmap(a);
        f.x = .5 * CANVAS_WIDTH;
        f.y = .5 * CANVAS_HEIGHT;
        f.regX = .5 * a.width;
        f.regY = .5 * a.height;
        c.addChild(f);
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = 0;
        h.on("click", function() {});
        k.addChild(h);
        a = .5 * CANVAS_WIDTH;
        var n = .5 * CANVAS_HEIGHT - 75;
        var m = new createjs.Text(TEXT_GAMEOVER,
            "60px " + PRIMARY_FONT, "#025cce");
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        m.x = a;
        m.y = n - 50;
        m.outline = OUTLINE_TEXT;
        c.addChild(m);
        var q = new createjs.Text(TEXT_GAMEOVER, "60px " + PRIMARY_FONT, "#ffd800");
        q.textAlign = "center";
        q.textBaseline = "alphabetic";
        q.x = a;
        q.y = m.y;
        c.addChild(q);
        e = new createjs.Text(TEXT_LEVEL + "\n" + e, "40px " + PRIMARY_FONT, "#025cce");
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.x = a - 150;
        e.y = n + 25;
        e.lineHeight = 50;
        e.outline = OUTLINE_TEXT;
        c.addChild(e);
        q = new createjs.Text(e.text, "40px " +
            PRIMARY_FONT, "#ffd800");
        q.textAlign = "center";
        q.textBaseline = "alphabetic";
        q.x = a - 150;
        q.y = e.y;
        q.lineHeight = 50;
        c.addChild(q);
        d = new createjs.Text(TEXT_LINES + "\n" + d, "40px " + PRIMARY_FONT, "#025cce");
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.x = a + 150;
        d.y = n + 25;
        d.lineHeight = 50;
        d.outline = OUTLINE_TEXT;
        c.addChild(d);
        d = new createjs.Text(d.text, "40px " + PRIMARY_FONT, "#ffd800");
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.x = a + 150;
        d.y = e.y;
        d.lineHeight = 50;
        c.addChild(d);
        d = new createjs.Text(TEXT_SCORE_GAMEOVER +
            "\n\n" + b, "40px " + PRIMARY_FONT, "#025cce");
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.x = a;
        d.y = n + 150;
        d.outline = 4;
        c.addChild(d);
        n = new createjs.Text(d.text, "40px " + PRIMARY_FONT, "#ffd800");
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        n.x = a;
        n.y = d.y;
        c.addChild(n);
        k.addChild(c);
        k.x = 0;
        k.y = 0;
        s_oStage.addChild(k);
        a = s_oSpriteLibrary.getSprite("but_restart");
        n = s_oSpriteLibrary.getSprite("but_home");
        l = new CGfxButton(CANVAS_WIDTH / 2 - 250, CANVAS_HEIGHT / 2 + 150, n, c);
        l.addEventListener(ON_MOUSE_UP, this._onMenu,
            this);
        g = new CGfxButton(CANVAS_WIDTH / 2 + 250, CANVAS_HEIGHT / 2 + 150, a, c);
        g.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        g.pulseAnimation();
        createjs.Tween.get(h).to({
            alpha: .5
        }, 750, createjs.Ease.cubicOut);
        createjs.Tween.get(c).to({
            y: 0
        }, 1500, createjs.Ease.bounceOut).call(function() {
            s_iAdsLevel === NUM_LEVEL_FOR_ADS ? ($(s_oMain).trigger("show_interlevel_ad"), s_iAdsLevel = 1) : s_iAdsLevel++
        });
        $(s_oMain).trigger("save_score", b);
        $(s_oMain).trigger("share_event", b)
    };
    this.unload = function() {
        h.off("click", function() {});
        l && (l.unload(), l = null);
        s_oStage.removeChild(k)
    };
    this._onMenu = function() {
        this.unload();
        s_oInterface._onButMenuRelease()
    };
    this._onRestart = function() {
        this.unload();
        s_oInterface._onButRestartLevelRelease()
    };
    this._init(a, d, b, e);
    return this
}

function CPause() {
    var a, d, b;
    this._init = function() {
        a = new createjs.Container;
        a.alpha = 0;
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        d.alpha = 1;
        d.on("click", function() {});
        a.addChild(d);
        var e = s_oSpriteLibrary.getSprite("pause_text");
        b = createBitmap(e);
        b.x = CANVAS_WIDTH_HALF;
        b.y = CANVAS_HEIGHT_HALF - 200;
        b.regX = .5 * e.width;
        b.regY = .5 * e.height;
        a.addChild(b);
        e = s_oSpriteLibrary.getSprite("but_continue");
        (new CGfxButton(.5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT + 100, e, a)).addEventListener(ON_MOUSE_UP, this._onLeavePause,
            this);
        s_oStage.addChild(a);
        this.onPause(!0);
        createjs.Tween.get(a).to({
            alpha: 1
        }, 300, createjs.quartOut).call(function() {
            createjs.Ticker.paused = !0
        })
    };
    this.onPause = function(a) {
        s_oGame.setPause(a);
        s_oGame.canInput(!a)
    };
    this.unload = function() {
        d.off("click", function() {});
        s_oStage.removeChild(a)
    };
    this._onLeavePause = function() {
        createjs.Ticker.paused = !1;
        createjs.Tween.removeTweens(a);
        var b = this;
        createjs.Tween.get(a).to({
            alpha: 0
        }, 300, createjs.quartIn).call(function() {
            b.onPause(!1);
            s_oInterface.unloadPause()
        })
    };
    this._init();
    return this
}

function CAreYouSurePanel(a) {
    var d, b, e, k, c, f, h;
    this._init = function() {
        f = new createjs.Container;
        f.visible = !1;
        l.addChild(f);
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = .7;
        h.on("click", function() {});
        f.addChild(h);
        var a = s_oSpriteLibrary.getSprite("msg_box");
        c = createBitmap(a);
        c.x = CANVAS_WIDTH_HALF;
        c.y = CANVAS_HEIGHT_HALF;
        c.regX = .5 * a.width;
        c.regY = .5 * a.height;
        f.addChild(c);
        c.on("click", function() {});
        d = new createjs.Text(TEXT_ARE_SURE, "60px " + PRIMARY_FONT,
            "#0025c2");
        d.x = CANVAS_WIDTH / 2;
        d.y = .5 * CANVAS_HEIGHT - 100;
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.outline = 5;
        f.addChild(d);
        b = new createjs.Text(d.text, "60px " + PRIMARY_FONT, "#ffd800");
        b.x = d.x;
        b.y = d.y;
        b.textAlign = "center";
        b.textBaseline = "middle";
        f.addChild(b);
        e = new CGfxButton(CANVAS_WIDTH / 2 + 170, d.y + 200, s_oSpriteLibrary.getSprite("but_yes"), f);
        e.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        k = new CGfxButton(CANVAS_WIDTH / 2 - 170, d.y + 200, s_oSpriteLibrary.getSprite("but_not"), f);
        k.addEventListener(ON_MOUSE_UP,
            this._onButNo, this)
    };
    this.onPause = function(a) {
        s_oGame.setPause(a);
        createjs.Ticker.paused = a;
        !0 === a ? s_oGame.canInput(!1) : s_oGame.canInput(!0)
    };
    this.show = function() {
        this.onPause(!0);
        f.visible = !0
    };
    this.unload = function() {
        k.unload();
        e.unload();
        h.off("click", function() {})
    };
    this._onButYes = function() {
        this.unload();
        this.onPause(!1);
        s_oGame.onExit()
    };
    this._onButNo = function() {
        this.unload();
        this.onPause(!1);
        f.visible = !1
    };
    var l = a;
    this._init()
}

function CCreditsPanel() {
    var a, d, b, e, k, c, f, h, l;
    this._init = function() {
		STATE = 5;
        l = new createjs.Container;
        l.y = -130;
        s_oStage.addChild(l);
        var g = new createjs.Shape;
        g.graphics.beginFill("black").drawRect(0, 130, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.alpha = .7;
        l.addChild(g);
        g = s_oSpriteLibrary.getSprite("msg_credits");
        a = createBitmap(g);
        l.addChild(a);
        a.x = .5 * CANVAS_WIDTH;
        a.y = .5 * CANVAS_HEIGHT + 130;
        a.regX = .5 * g.width;
        a.regY = .5 * g.height;
        c = new createjs.Shape;
        c.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha =
            .01;
        c.on("click", this._onLogoButRelease);
        s_bMobile || (c.cursor = "pointer");
        l.addChild(c);
        g = s_oSpriteLibrary.getSprite("but_exit");
        b = new CGfxButton(800, 640, g, l);
        b.addEventListener(ON_MOUSE_UP, this.unload, this);
        k = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + PRIMARY_FONT, "#025cce");
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.x = CANVAS_WIDTH / 2;
        k.y = 770;
        k.outline = OUTLINE_TEXT;
        l.addChild(k);
        e = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + PRIMARY_FONT, "#ffd800");
        e.textAlign = "center";
        e.textBaseline =
            "alphabetic";
        e.x = CANVAS_WIDTH / 2;
        e.y = k.y;
        l.addChild(e);
        g = s_oSpriteLibrary.getSprite("logo_ctl");
        d = createBitmap(g);
        d.regX = g.width / 2;
        d.regY = g.height / 2;
        d.x = CANVAS_WIDTH / 2;
        d.y = 850;
        l.addChild(d);
		
		gd_h = new createjs.Text(TEXT_CREDITS_DEV_NAME, "40px " + PRIMARY_FONT, "#025cce");
        gd_h.textAlign = "center";
        gd_h.textBaseline = "alphabetic";
        gd_h.x = CANVAS_WIDTH / 2;
        gd_h.y = 850;
        gd_h.outline = OUTLINE_TEXT;
        l.addChild(gd_h);
		gd_f = new createjs.Text(TEXT_CREDITS_DEV_NAME, "40px " + PRIMARY_FONT, "#ffd800");
        gd_f.textAlign = "center";
        gd_f.textBaseline = "alphabetic";
        gd_f.x = CANVAS_WIDTH / 2;
        gd_f.y = gd_h.y;
        l.addChild(gd_f);
        
		
        h = new createjs.Text(TEXT_LINK1, "32px " + PRIMARY_FONT, "#025cce");
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.x = CANVAS_WIDTH / 2 - 10;
        h.y = 960;
        h.outline = OUTLINE_TEXT;
        l.addChild(h);
        f = new createjs.Text(TEXT_LINK1, "32px " + PRIMARY_FONT, "#ffd800");
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.x = CANVAS_WIDTH / 2 -10;
        f.y = h.y;
        l.addChild(f);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(a, b) {};
    this.unload = function() {
        c.off("click", this._onLogoButRelease);
        b.unload();
        b = null;
        s_oStage.removeChild(l);
        s_oMenu.exitFromCredits();
		STATE = 1;
    };
    this._onLogoButRelease = function() {
        gradle.event('logo_click');
		
		c.off("click", this._onLogoButRelease);
        b.unload();
        b = null;
        s_oStage.removeChild(l);
        s_oMenu.exitFromCredits();
		STATE = 1;
    };
    this._init()
}

function CBlock(a, d, b) {
    var e = 0,
        k, c, f = !1,
        h, l = BLOCKS_TYPE[a];
    this._init = function(a) {
        c = Math.floor(GRID_X_HALF - this.getWidth() / 2);
        k = 0;
        h = this.createSpriteBlock(a);
        this.refreshCellPosition();
        this.orderCellsChildIndex()
    };
    this.getHeight = function() {
        return l.length
    };
    this.getWidth = function() {
        return l[0].length
    };
    this.createSpriteBlock = function(a) {
        for (var b = [], g = c, e = k, f = s_oGameField.getXByCol(g), d = s_oGameField.getYByRow(e), h = l.length * l[0].length, u = 0, t = 0; t < l.length; t++) {
            for (var w = 0; w < l[t].length; w++) 1 === l[t][w] &&
                (b[u] = this.createCell(f, d, a, e, g, 0), u++), g++, f = s_oGameField.getXByCol(g), h--;
            e++;
            g = c;
            d = s_oGameField.getYByRow(e);
            f = s_oGameField.getXByCol(g)
        }
        return b
    };
    this.createCell = function(a, c, e, f, d, k) {
        a = new CCell(a, c, k, e, b);
        a.setRow(f);
        a.setCol(d);
        return a
    };
    this.orderCellsChildIndex = function() {
        for (var a = b.numChildren - 1, c = 0; c < h.length; c++) h[c].setChildIndex(a), a--
    };
    this.updateRenderOffsets = function(a) {
        a.x++;
        a.x >= this.getWidth() && (a.y++, a.x = 0);
        return a
    };
    this.pieceFilled = function(a) {
        a = this.stepToCooordinates(a);
        return !!l[a.y][a.x]
    };
    this.stepToCooordinates = function(a) {
        var b = {
            x: 0,
            y: 0
        };
        b.x = a % this.getWidth();
        b.y = Math.floor(a / this.getWidth());
        return b
    };
    this.down = function() {
        s_oGameField.checkHitBottom(this, DOWN);
        !0 !== f && (k += 1, this.refreshCellPosition())
    };
    this.refreshCellPosition = function() {
        for (var a = c, b = k, e = 0, f = s_oGameField.getXByCol(a), d = s_oGameField.getYByRow(b), r = 0; r < l.length; r++) {
            for (var p = 0; p < l[r].length; p++) 1 === l[r][p] && (h[e].setPosition(f, d), h[e].setRow(b), h[e].setCol(a), h[e].setChildIndex(s_oGameField.getChildID(b,
                a)), e++), a++, a < GRID_X && (f = s_oGameField.getXByCol(a));
            if (b + 1 > GRID_Y - 1) break;
            b++;
            a = c;
            d = s_oGameField.getYByRow(b);
            f = s_oGameField.getXByCol(a)
        }
    };
    this.setReplace = function(a) {
        f = a
    };
    this.getReplace = function() {
        return f
    };
    this.getCol = function() {
        return c
    };
    this.getRow = function() {
        return k
    };
    this.getBlock = function() {
        return h
    };
    this.setRow = function(a) {
        k = a
    };
    this.setCol = function(a) {
        c = a
    };
    this.__rotateBlock = function(a) {
        for (var b = [], c = a[0].length - 1; - 1 < c; c--) {
            for (var g = [], e = 0; e < a.length; e++) g.push(a[e][c]);
            b.push(g)
        }
        return b
    };
    this.getOrientation = function() {
        return e
    };
    this.setOrientation = function(a) {
        360 === a && (a = 0);
        var b = this.__rotateBlock(l),
            c = s_oGameField.badRotation(b, this);
        1 !== c && (0 === c ? (e = a, l = b) : 2 === c && this.setOrientation(a))
    };
    this.unload = function() {
        for (var a = 0; a < h.length; a++) h[a].unload();
        h = null
    };
    this._init(d);
    return this
}

function CGameField() {
    var a = [],
        d = !1;
    this._init = function() {
        s_bMobile && (START_GRID_Y = CANVAS_HEIGHT_HALF - GRID_Y * GRID_Y);
        for (var b = START_GRID_X, e = START_GRID_Y, d = 0; d < GRID_Y; d++) {
            a[d] = [];
            for (var c = 0; c < GRID_X; c++) a[d][c] = {
                x: b,
                y: e,
                occupied: !1,
                cell: null,
                childID: null
            }, this.createCellTest(b, e), b += CELL_SIZE + CELL_OFFSET.x;
            e += CELL_SIZE + CELL_OFFSET.y;
            b = START_GRID_X
        }
        this.setID()
    };
    this.createCellTest = function(a, e) {
        if (SHOW_CELL) {
            var b = s_oSpriteLibrary.getSprite("cell");
            var c = createBitmap(b);
            c.x = a;
            c.y = e;
            c.regX = .5 * b.width;
            c.regY = .5 * b.height;
            s_oStage.addChild(c);
            s_oStage.setChildIndex(c, 1)
        }
    };
    this.setID = function() {
        for (var b = s_oSpriteLibrary.getSprite("cell_0"), e = GRID_Y - 1; - 1 < e; e--)
            for (var d = GRID_X - 1; - 1 < d; d--) a[e][d].childID = new CCell(a[e][d].x, a[e][d].y, 0, b, s_oGame.getContainerGame()), a[e][d].childID.setVisible(!1)
    };
    this.getMiddleGridX = function() {
        return a[0][GRID_X_HALF].x
    };
    this.getStartGridY = function() {
        return a[0][0].y
    };
    this.getXByCol = function(b) {
        return a[0][b].x
    };
    this.getYByRow = function(b) {
        return a[b][0].y
    };
    this.setCellState =
        function(b, e, d) {
            a[b][e].occupied = d
        };
    this.getCellState = function(b, e) {
        return a[b][e].occupied
    };
    this.checkDirection = function(b, e) {
        for (var d = !1, c = {
                x: 0,
                y: 0
            }, f, h, l = 0; l < b.getWidth() * b.getHeight(); l++) {
            f = b.getCol() + c.x;
            h = b.getRow() + c.y;
            switch (e) {
                case UP:
                    h--;
                    break;
                case RIGHT:
                    f++;
                    break;
                case DOWN:
                    h++;
                    break;
                case LEFT:
                    f--
            }
            if (h > GRID_Y - 1) return !0;
            if (a[h][f].occupied && (f = b.pieceFilled(l))) {
                d = !0;
                break
            }
            c = b.updateRenderOffsets(c)
        }
        return d
    };
    this.getChildID = function(b, e) {
        return a[b][e].childID.getChildIndex()
    };
    this.checkHitBottom =
        function(b) {
            var e = this.checkDirection(b, DOWN);
            b.getRow() + b.getHeight() >= a.length && (e = !0);
            if (e) {
                b.setReplace(!0);
                b = b.getBlock();
                for (e = 0; e < b.length; e++) a[b[e].getRow()][b[e].getCol()].occupied = !0, a[b[e].getRow()][b[e].getCol()].cell = b[e];
                this.checkForFullLines()
            }
        };
    this.badRotation = function(b, e) {
        for (var d = 0, c = 0, f = 0, h, l, g = 0; g < b[0].length * b.length; g++) {
            h = e.getCol() + c;
            l = e.getRow() + f;
            if (l > GRID_Y - 1) return 1;
            if (h > GRID_X - 1) return e.setCol(e.getCol() - e.getWidth() + 1), 2;
            if (a[l][h].occupied) {
                d = 1;
                break
            }
            c++;
            c >= b[0].length &&
                (f++, c = 0)
        }
        return d
    };
    this.isAnimFullLines = function() {
        return d
    };
    this.checkForFullLines = function() {
        for (var b = 0, e, k = [], c = 0, f = 0; f < a.length; f++) {
            for (var h = e = 0; h < a[0].length; h++) a[f][h].occupied && e++;
            if (e === a[0].length) {
                b++;
                k[c] = f;
                c++;
                var l = DELAY_CELL_DESTROY_MS;
                for (h = 0; h < a[0].length; h++) a[f][h].occupied = !1, this.animCellDestroy(a[f][h], l), l += DELAY_CELL_DESTROY_MS
            }
        }
        0 < b && (d = !0, playSound("delete_lines", 1, !1), l += 2 * CELL_DESTROY_MS, createjs.Tween.get(this).wait(l).call(function() {
            s_oGame.calculateScore(b);
            s_oGame.checkForNewLevel(b);
            this.checkEmptyRowForFall(k);
            d = !1
        }))
    };
    this.animCellDestroy = function(a, e) {
        a.cell.changeState(1);
        createjs.Tween.get(a.cell.getSprite()).wait(e).to({
            scaleX: 0,
            scaleY: 0
        }, CELL_DESTROY_MS, createjs.Ease.cubicOut).call(function() {
            !0 === a.occupied && a.cell.unload()
        })
    };
    this.checkEmptyRowForFall = function(b) {
        for (var e = 0, d = 0; d < b.length; d++)
            for (var c = 0; c < a[d].length; c++)
                for (var f = b[d] - 1; - 1 < f; f--) !0 === a[f][c].occupied && (a[f][c].occupied = !1, a[f + 1][c].cell = a[f][c].cell, a[f][c].cell = null, a[f + 1][c].occupied = !0);
        for (f =
            a[d].length - 1; - 1 < f; f--)
            for (d = a.length - 1; - 1 < d; d--) !0 === a[d][f].occupied && (a[d][f].cell.setChildIndex(this.getChildID(d, f)), this.animateLineDown(a[d][f].cell.getSprite(), a[d][f].y, e), e += DELAY_LINE_DOWN)
    };
    this.animateLineDown = function(a, e, d) {
        createjs.Tween.get(a).wait(d).to({
            y: e
        }, LINE_DOWN_TIME, createjs.Ease.cubicOut)
    };
    this.unload = function() {
        for (var b = 0; b < a.length; b++)
            for (var e = 0; e < a[0].length; e++) a[b][e].occupied && a[b][e].cell.unload();
        s_oGameField = a = null
    };
    this._init();
    s_oGameField = this;
    return this
}
var s_oGameField;

function CCell(a, d, b, e, k) {
    var c, f, h;
    this._init = function(a, b, e, d) {
        c = createBitmap(d);
        c.x = a;
        c.y = b;
        a = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 2,
                height: d.height,
                regX: d.width / 2 / 2,
                regY: d.height / 2 + e
            },
            animations: {
                normal: [0],
                complete: [1]
            }
        });
        c = createSprite(a, "normal", d.width / 2 / 2, d.height / 2 + e, d.width / 2, d.height);
        c.stop();
        k.addChild(c)
    };
    this.setPosition = function(a, b) {
        c.x = a;
        c.y = b
    };
    this.getY = function() {
        return c.y
    };
    this.getX = function() {
        return c.x
    };
    this.setRow = function(a) {
        f = a
    };
    this.setCol = function(a) {
        h =
            a
    };
    this.getRow = function() {
        return f
    };
    this.getCol = function() {
        return h
    };
    this.setRegY = function(a) {
        c.regY = a
    };
    this.changeState = function(a) {
		//console.log(a);
        c.gotoAndStop(a)
    };
    this.getSprite = function() {
        return c
    };
    this.getRegY = function() {
        return c.regY
    };
    this.setVisible = function(a) {
        c.visible = a
    };
    this.getChildIndex = function() {
        return k.getChildIndex(c)
    };
    this.setChildIndex = function(a) {
        k.setChildIndex(c, a)
    };
    this.unload = function() {
        k.removeChild(c)
    };
    this._init(a, d, b, e);
    return this
}

function CNextBlockBoard(a, d, b, e, k) {
    var c, f, h, l, g, m, n, q, v;
    this._init = function(a, b, d, e) {
        v = {
            x: a,
            y: b
        };
        l = new createjs.Container;
        l.x = a;
        l.y = b;
        r.addChild(l);
        h = createBitmap(e);
        h.regX = .5 * e.width;
        h.regY = .5 * e.height;
        l.addChild(h);
        c = new createjs.Text(TEXT_NEXT, "32px " + PRIMARY_FONT, "#025cce");
        c.x = 2;
        c.y = -h.regY + 53;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.outline = 5;
        l.addChild(c);
        f = new createjs.Text(c.text, "32px " + PRIMARY_FONT, "#ffd800");
        f.x = c.x;
        f.y = c.y;
        f.textAlign = "center";
        f.textBaseline = "middle";
        l.addChild(f);
        g = new createjs.Container;
        n = .15 * h.regX;
        q = .25 * h.regY + 16;
        l.addChild(g);
        this.createNextBlock(d)
    };
    this.createNextBlock = function(a) {
        m = new CNextBlock(BLOCKS_TYPE[a], s_oSpriteLibrary.getSprite("cell_" + a), g);
        g.x = n - m.getOffsetX();
        g.y = q - m.getOffsetY()
    };
    this.refreshBlock = function(a) {
        m.unload();
        this.createNextBlock(a)
    };
    this.getStartPos = function() {
        return v
    };
    this.setPosition = function(a, b) {
        l.x = a;
        l.y = b
    };
    var r = k;
    this._init(a, d, e, b);
    return this
}

function CNextBlock(a, d, b) {
    var e, k, c;
    this._init = function(a, b) {
        k = 0;
        e = this.createSpriteBlock(a, b);
        this.orderCellsChildIndex()
    };
    this.createSpriteBlock = function(a, b) {
        for (var d = [], e = 0, f = 0, h = 0; h < a.length; h++) {
            for (var q = 0; q < a[h].length; q++) 1 === a[h][q] && d.push(this.createCell(e, f, b, 0)), e += CELL_SIZE + CELL_OFFSET.x;
            f += CELL_SIZE + CELL_OFFSET.y;
            e = 0
        }
        k = .5 * (CELL_SIZE + CELL_OFFSET.y) * a[0].length;
        c = .5 * (CELL_SIZE + CELL_OFFSET.x) * a.length;
        return d
    };
    this.createCell = function(a, c, d, e) {
        d = new CCell(a, c, e, d, b);
        d.setPosition(a,
            c);
        return d
    };
    this.orderCellsChildIndex = function() {
        for (var a = b.numChildren - 1, c = 0; c < e.length; c++) e[c].setChildIndex(a), a--
    };
    this.getOffsetX = function() {
        return k
    };
    this.getOffsetY = function() {
        return c
    };
    this.unload = function() {
        for (var a = 0; a < e.length; a++) e[a].unload();
        e = null
    };
    this._init(a, d);
    return this
}

function CInfoBoard(a, d, b, e) {
    var k, c, f, h, l, g, m;
    this._init = function(a, b, d) {
        m = {
            x: a,
            y: b
        };
        g = new createjs.Container;
        g.x = a;
        g.y = b;
        e.addChild(g);
        k = createBitmap(d);
        k.regX = .5 * d.width;
        k.regY = .5 * d.height;
        g.addChild(k);
        f = new createjs.Text(TEXT_LEVEL + "\n0", "33px " + PRIMARY_FONT, "#025cce");
        f.x = 5;
        f.y = .5 * -k.regY - 8;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.outline = 4;
        f.lineHeight = 50;
        g.addChild(f);
        c = new createjs.Text(TEXT_LEVEL + "\n0", "33px " + PRIMARY_FONT, "#ffd800");
        c.x = 5;
        c.y = .5 * -k.regY - 8;
        c.textAlign = "center";
        c.textBaseline =
            "middle";
        c.lineHeight = 50;
        g.addChild(c);
        l = new createjs.Text(TEXT_LINES + "\n0", "33px " + PRIMARY_FONT, "#025cce");
        l.x = 5;
        l.y = .5 * k.regY - 39;
        l.textAlign = "center";
        l.textBaseline = "middle";
        l.outline = 4;
        l.lineHeight = 50;
        g.addChild(l);
        h = new createjs.Text(TEXT_LINES + "\n0", "33px " + PRIMARY_FONT, "#ffd800");
        h.x = 5;
        h.y = .5 * k.regY - 39;
        h.textAlign = "center";
        h.textBaseline = "middle";
        h.lineHeight = 50;
        g.addChild(h)
    };
    this.refreshLevel = function(a) {
        c.text = TEXT_LEVEL + "\n" + a;
        f.text = TEXT_LEVEL + "\n" + a
    };
    this.refreshLines = function(a) {
        l.text =
            TEXT_LINES + "\n" + a;
        h.text = TEXT_LINES + "\n" + a
    };
    this.getStartPos = function() {
        return m
    };
    this.setPosition = function(a, b) {
        g.x = a;
        g.y = b
    };
    this._init(a, d, b);
    return this
}

function CScoreBoard(a, d, b, e) {
    var k, c, f, h, l;
    this._init = function(a, b, d) {
        l = {
            x: a,
            y: b
        };
        h = new createjs.Container;
        h.x = a;
        h.y = b;
        e.addChild(h);
        k = createBitmap(d);
        k.regX = .5 * d.width;
        k.regY = .5 * d.height;
        h.addChild(k);
        f = new createjs.Text(TEXT_SCORE + "\n0", "36px " + PRIMARY_FONT, "#025cce");
        f.x = 0;
        f.y = -26;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.outline = 4;
        f.lineHeight = 50;
        h.addChild(f);
        c = new createjs.Text(TEXT_SCORE + "\n0", "36px " + PRIMARY_FONT, "#ffd800");
        c.x = 0;
        c.y = -26;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.lineHeight = 50;
        h.addChild(c)
    };
    this.refreshScore = function(a) {
        c.text = TEXT_SCORE + "\n" + a;
        f.text = TEXT_SCORE + "\n" + a
    };
    this.getStartPos = function() {
        return l
    };
    this.setPosition = function(a, b) {
        h.x = a;
        h.y = b
    };
    this._init(a, d, b);
    return this
}

function CController() {
    var a, d, b, e, k, c, f, h;
    this._init = function() {
        a = {
            x: .5 * CANVAS_WIDTH - 210,
            y: CANVAS_HEIGHT - 190
        };
        d = {
            x: .5 * CANVAS_WIDTH - 380,
            y: CANVAS_HEIGHT - 190
        };
        b = {
            x: .5 * CANVAS_WIDTH + 380,
            y: CANVAS_HEIGHT - 190
        };
        e = {
            x: .5 * CANVAS_WIDTH - 60,
            y: CANVAS_HEIGHT - 190
        };
        var l = s_oSpriteLibrary.getSprite("arrow"),
            g = s_oSpriteLibrary.getSprite("but_rotation");
        k = new CGfxButton(d.x, d.y, l, s_oStage);
        k.addEventListener(ON_MOUSE_DOWN, s_oGame.onLeft, this);
        k.addEventListener(ON_MOUSE_UP, s_oGame.dirKeyUp, this);
        k.setScaleX(-1);
        c = new CGfxButton(a.x,
            a.y, l, s_oStage);
        c.addEventListener(ON_MOUSE_DOWN, s_oGame.onRight, this);
        c.addEventListener(ON_MOUSE_UP, s_oGame.dirKeyUp, this);
        f = new CGfxButton(b.x, b.y, g, s_oStage);
        f.addEventListener(ON_MOUSE_DOWN, s_oGame.onUp, this);
        h = new CGfxButton(e.x, e.y, l, s_oStage);
        h.addEventListener(ON_MOUSE_DOWN, s_oGame.onDown, this);
        h.addEventListener(ON_MOUSE_UP, s_oGame.onDownKeyUp, this);
        h.rotation(90)
    };
    this.getStartPositionControlRight = function() {
        return a
    };
    this.getStartPositionControlLeft = function() {
        return d
    };
    this.getStartPositionControlUp =
        function() {
            return b
        };
    this.getStartPositionControlDown = function() {
        return e
    };
    this.setPositionControlRight = function(a, b) {
        c.setPosition(a, b)
    };
    this.setPositionControlLeft = function(a, b) {
        k.setPosition(a, b)
    };
    this.setPositionControlUp = function(a, b) {
        f.setPosition(a, b)
    };
    this.setPositionControlDown = function(a, b) {
        h.setPosition(a, b)
    };
    this.unload = function() {
        k.unload();
        k = null;
        c.unload();
        c = null;
        f.unload();
        f = null;
        h.unload();
        h = null
    };
    this._init();
    return this
}

function CEdges() {
    var a, d;
    this._init = function() {
        var b = s_oSpriteLibrary.getSprite("frame_bottom");
        a = createBitmap(b);
        a.x = 300 + .5 * b.width;
        a.y = 713;
        a.regX = b.width;
        a.regY = .5 * b.height;
        s_oStage.addChild(a)
    };
    this.createIEdge = function() {
        var a = s_oSpriteLibrary.getSprite("frame_top");
        d = createBitmap(a);
        d.x = 88;
        d.y = 709;
        d.regX = .5 * a.width;
        d.regY = .5 * a.height;
        s_oStage.addChild(d)
    };
    this._init();
    return this
};