var vidyardEmbed = function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "https://play.vidyard.com/embed/", n(n.s = 6)
}([function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var i, o, a, u = n(14),
        c = n(13),
        s = function(e) {
            return "svg" !== e.tagName.toLowerCase()
        };

    function l(e, t) {
        return !1 === t ? f(e, "aria-hidden", "false") : f(e, "hidden", !1)
    }

    function d(e, t) {
        return !1 === t ? f(e, "aria-hidden", "true") : f(e, "hidden", !0)
    }

    function f(e, t, n) {
        var r = "boolean" == typeof n;
        return {
            el: e,
            attributeName: t,
            cleanValue: r ? e[t] : e.getAttribute(t),
            dirtyValue: n,
            isProperty: r
        }
    }

    function p() {
        o && (a.forEach(function(e) {
            var t;
            (t = e).cleanValue ? !0 === t.isProperty ? t.el[t.attributeName] = t.cleanValue : t.el.setAttribute(t.attributeName, t.cleanValue) : t.el.removeAttribute(t.attributeName)
        }), a = [], i && i.setAttribute("role", "main"), o.dispatchEvent(new u("screenreaderUntrap", {
            bubbles: !0
        })), o = null)
    }
    var h = {
        useHiddenProperty: !1
    };
    e.exports = {
        trap: function(e, t) {
            p();
            var n = r({}, h, t);
            o = e, (i = document.querySelector('main, [role="main"]')) && i.setAttribute("role", "presentation");
            var f = c.getAncestors(o),
                v = c.getSiblings(o),
                y = c.getSiblingsOfAncestors(o);
            !0 === n.useHiddenProperty && (v = v.filter(s), y = y.filter(s)), (a = [l(o, n.useHiddenProperty)].concat(f.map(function(e) {
                return l(e, n.useHiddenProperty)
            })).concat(v.map(function(e) {
                return d(e, n.useHiddenProperty)
            })).concat(y.map(function(e) {
                return d(e, n.useHiddenProperty)
            }))).forEach(function(e) {
                var t;
                !0 === (t = e).isProperty ? t.el[t.attributeName] = t.dirtyValue : t.el.setAttribute(t.attributeName, t.dirtyValue)
            }), o.dispatchEvent(new u("screenreaderTrap", {
                bubbles: !0
            }))
        },
        untrap: p
    }
}, function(e, t, n) {
    var r, i, o;
    ! function(a, u) {
        "use strict";
        i = [n(7)], void 0 === (o = "function" == typeof(r = function(e) {
            var t = /(^|@)\S+\:\d+/,
                n = /^\s*at .*(\S+\:\d+|\(native\))/m,
                r = /^(eval@)?(\[native code\])?$/;
            return {
                parse: function(e) {
                    if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return this.parseOpera(e);
                    if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                    if (e.stack) return this.parseFFOrSafari(e);
                    throw new Error("Cannot parse given Error object")
                },
                extractLocation: function(e) {
                    if (-1 === e.indexOf(":")) return [e];
                    var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
                    return [t[1], t[2] || void 0, t[3] || void 0]
                },
                parseV8OrIE: function(t) {
                    var r = t.stack.split("\n").filter(function(e) {
                        return !!e.match(n)
                    }, this);
                    return r.map(function(t) {
                        t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                        var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1),
                            r = this.extractLocation(n.pop()),
                            i = n.join(" ") || void 0,
                            o = ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? void 0 : r[0];
                        return new e({
                            functionName: i,
                            fileName: o,
                            lineNumber: r[1],
                            columnNumber: r[2],
                            source: t
                        })
                    }, this)
                },
                parseFFOrSafari: function(t) {
                    var n = t.stack.split("\n").filter(function(e) {
                        return !e.match(r)
                    }, this);
                    return n.map(function(t) {
                        if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
                            functionName: t
                        });
                        var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                            r = t.match(n),
                            i = r && r[1] ? r[1] : void 0,
                            o = this.extractLocation(t.replace(n, ""));
                        return new e({
                            functionName: i,
                            fileName: o[0],
                            lineNumber: o[1],
                            columnNumber: o[2],
                            source: t
                        })
                    }, this)
                },
                parseOpera: function(e) {
                    return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                },
                parseOpera9: function(t) {
                    for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), i = [], o = 2, a = r.length; o < a; o += 2) {
                        var u = n.exec(r[o]);
                        u && i.push(new e({
                            fileName: u[2],
                            lineNumber: u[1],
                            source: r[o]
                        }))
                    }
                    return i
                },
                parseOpera10: function(t) {
                    for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), i = [], o = 0, a = r.length; o < a; o += 2) {
                        var u = n.exec(r[o]);
                        u && i.push(new e({
                            functionName: u[3] || void 0,
                            fileName: u[2],
                            lineNumber: u[1],
                            source: r[o]
                        }))
                    }
                    return i
                },
                parseOpera11: function(n) {
                    var r = n.stack.split("\n").filter(function(e) {
                        return !!e.match(t) && !e.match(/^Error created at/)
                    }, this);
                    return r.map(function(t) {
                        var n, r = t.split("@"),
                            i = this.extractLocation(r.pop()),
                            o = r.shift() || "",
                            a = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                        o.match(/\(([^\)]*)\)/) && (n = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                        var u = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                        return new e({
                            functionName: a,
                            args: u,
                            fileName: i[0],
                            lineNumber: i[1],
                            columnNumber: i[2],
                            source: t
                        })
                    }, this)
                }
            }
        }) ? r.apply(t, i) : r) || (e.exports = o)
    }()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            var t = void 0 === e ? {
                    emit: !1,
                    logger: console.log
                } : e,
                n = t.emit,
                r = t.logger;
            this.emit = n, this.externalLogger = r, this.buffer = [], this.customLevel = {}, this.error = this.setLevel(1), this.warn = this.setLevel(2), this.info = this.setLevel(3), this.log = this.setLevel(4)
        }
        return e.prototype.getLogs = function(e) {
            return "function" == typeof e ? this.buffer.filter(function(t) {
                return t.level === e.level
            }) : e ? this.buffer.filter(function(t) {
                return t.level === e
            }) : this.buffer
        }, e.prototype.setLevel = function(e) {
            var t = this,
                n = function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    var i = {
                        level: e,
                        time: Date.now(),
                        msg: n.join(" ")
                    };
                    t.buffer.push(i), t.emit && t.externalLogger(i)
                };
            return n.level = e, this.customLevel[e] = n, n
        }, e
    }();
    t.default = r
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = this.constructor;
        return this.then(function(n) {
            return t.resolve(e()).then(function() {
                return n
            })
        }, function(n) {
            return t.resolve(e()).then(function() {
                return t.reject(n)
            })
        })
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(4),
            i = setTimeout;

        function o() {}

        function a(e) {
            if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
        }

        function u(e, t) {
            for (; 3 === e._state;) e = e._value;
            0 !== e._state ? (e._handled = !0, a._immediateFn(function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var r;
                    try {
                        r = n(e._value)
                    } catch (e) {
                        return void s(t.promise, e)
                    }
                    c(t.promise, r)
                } else(1 === e._state ? c : s)(t.promise, e._value)
            })) : e._deferreds.push(t)
        }

        function c(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof a) return e._state = 3, e._value = t, void l(e);
                    if ("function" == typeof n) return void d((r = n, i = t, function() {
                        r.apply(i, arguments)
                    }), e)
                }
                e._state = 1, e._value = t, l(e)
            } catch (t) {
                s(e, t)
            }
            var r, i
        }

        function s(e, t) {
            e._state = 2, e._value = t, l(e)
        }

        function l(e) {
            2 === e._state && 0 === e._deferreds.length && a._immediateFn(function() {
                e._handled || a._unhandledRejectionFn(e._value)
            });
            for (var t = 0, n = e._deferreds.length; t < n; t++) u(e, e._deferreds[t]);
            e._deferreds = null
        }

        function d(e, t) {
            var n = !1;
            try {
                e(function(e) {
                    n || (n = !0, c(t, e))
                }, function(e) {
                    n || (n = !0, s(t, e))
                })
            } catch (e) {
                if (n) return;
                n = !0, s(t, e)
            }
        }
        a.prototype.catch = function(e) {
            return this.then(null, e)
        }, a.prototype.then = function(e, t) {
            var n = new this.constructor(o);
            return u(this, new function(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
            }(e, t, n)), n
        }, a.prototype.finally = r.a, a.all = function(e) {
            return new a(function(t, n) {
                if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                var r = Array.prototype.slice.call(e);
                if (0 === r.length) return t([]);
                var i = r.length;

                function o(e, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var u = a.then;
                            if ("function" == typeof u) return void u.call(a, function(t) {
                                o(e, t)
                            }, n)
                        }
                        r[e] = a, 0 == --i && t(r)
                    } catch (e) {
                        n(e)
                    }
                }
                for (var a = 0; a < r.length; a++) o(a, r[a])
            })
        }, a.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === a ? e : new a(function(t) {
                t(e)
            })
        }, a.reject = function(e) {
            return new a(function(t, n) {
                n(e)
            })
        }, a.race = function(e) {
            return new a(function(t, n) {
                for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
            })
        }, a._immediateFn = "function" == typeof e && function(t) {
            e(t)
        } || function(e) {
            i(e, 0)
        }, a._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }, t.a = a
    }).call(this, n(18).setImmediate)
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r, i, o, a = n(5),
        u = function(e) {
            return "function" == typeof e
        },
        c = (i = (void 0 === r ? window : r).Promise) && i.all && i.race && i.resolve && i.reject && u(i) && u(i.all) && u(i.race) && u(i.resolve) && u(i.reject) ? window.Promise : a.a,
        s = function(e, t, n, r) {
            return void 0 === r && (r = window), window.addEventListener ? r.addEventListener(e, n, !1) : window.attachEvent && r.attachEvent(t, n), {
                eventName: e,
                handler: n,
                element: r
            }
        },
        l = function(e, t, n) {
            void 0 === n && (n = window), n.removeEventListener ? n.removeEventListener(e, t, !1) : n.detachEvent ? n.detachEvent("on" + e, t) : n["on" + e] = null
        },
        d = function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
            return JSON.stringify(e) === JSON.stringify({})
        },
        f = function(e, t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0; n < t.length; n++)
                if (t[n] === e) return n;
            return -1
        },
        p = function(e, t, n) {
            if (void 0 === t && (t = "*"), void 0 === n && (n = document), "function" == typeof document.getElementsByClassName) return n.getElementsByClassName(e);
            for (var r = [], i = new RegExp("(^| )" + e + "( |$)"), o = 0, a = E(n.getElementsByTagName(t)); o < a.length; o++) {
                var u = a[o];
                i.test(u.className) && r.push(u)
            }
            return r
        },
        h = function(e, t) {
            void 0 === t && (t = 0);
            var n = k(e);
            return 0 !== n.height || 0 !== n.width ? (n.height / (n.width + t) * 100).toFixed(2) : 56.25.toFixed(2)
        },
        v = function(e, t) {
            void 0 === t && (t = "log"), window.console && "function" == typeof window.console[t] && console[t](e)
        },
        y = function(e, t) {
            for (var n = 0, r = e; n < r.length; n++) {
                var i = r[n];
                if (!0 === t(i)) return i
            }
        },
        m = function(e, t) {
            return y(e, function(e) {
                return e === t
            })
        },
        g = function(e) {
            var t = !1;
            return function() {
                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                t || (e && e.apply(void 0, n), t = !0)
            }
        },
        b = function(e) {
            return function(t) {
                32 !== t.keyCode && 13 !== t.keyCode || e(t)
            }
        },
        w = function(e) {
            return function(t) {
                27 === t.keyCode && e(t)
            }
        },
        x = function() {
            return document.currentScript ? document.currentScript : y(E(document.getElementsByTagName("script")), function(e) {
                return e.src && (null !== e.src.match("vidyard-embed-code.js") || null !== e.src.match(/v4(\.umd)?\.js/))
            })
        },
        k = function(e) {
            if (e.naturalWidth) return {
                width: e.naturalWidth,
                height: e.naturalHeight
            };
            var t = new Image;
            return t.src = e.src, {
                width: t.width,
                height: t.height
            }
        },
        E = function(e) {
            return Array.prototype.slice.call(e)
        },
        _ = function(e) {
            return new c(function(t, n) {
                try {
                    t(JSON.parse(e))
                } catch (e) {
                    n(e)
                }
            })
        },
        C = function(e) {
            var t = e.endpoint,
                n = e.payload,
                r = void 0 === n ? {} : n,
                i = e.method,
                o = void 0 === i ? "GET" : i;
            return new c(function(e, n) {
                var i = void 0 === (new XMLHttpRequest).withCredentials && XDomainRequest ? new XDomainRequest : new XMLHttpRequest;
                i.open(o, t), i instanceof XMLHttpRequest && i.setRequestHeader("Content-Type", "text/plain"), i.onerror = function(e) {
                    return n(e)
                }, i.onload = function() {
                    i instanceof XMLHttpRequest ? 2 === Math.floor(i.status / 100) ? e(i.responseText) : n() : e(i.responseText)
                }, i.send(JSON.stringify(r))
            })
        },
        O = function(e) {
            for (var t = {}, n = function(e) {
                    return e.name.replace("data-", "")
                }, r = 0; r < e.attributes.length; r += 1) {
                var i = e.attributes[r];
                i.name.indexOf("data-") < 0 || (t[n(i)] = i.value)
            }
            return t
        },
        N = function(e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            if (null !== t) return t[1]
        },
        S = function(e) {
            return Object.keys(e).reduce(function(t, n) {
                if ("vydata" === n) {
                    var r = function(e, t) {
                        try {
                            var n = JSON.parse(decodeURIComponent(e));
                            return Object.keys(n).reduce(function(e, r) {
                                return e[t + "[" + r + "]"] = n[r], e
                            }, {})
                        } catch (e) {
                            return v("Invalid " + t + " payload", "warn"), {}
                        }
                    }(e[n], "vydata");
                    Object.keys(r).forEach(function(e) {
                        t[e] = r[e]
                    })
                } else t[n] = e[n];
                return t
            }, {})
        },
        I = function(e, t, n) {
            var r = function(e, t) {
                    return -1 !== e.className.indexOf(t)
                },
                i = function(e, t) {
                    r(e, t) || (e.className = e.className.trim() + " " + t)
                },
                o = function(e, t) {
                    r(e, t) && (e.className = e.className.replace(t, " ").trim())
                };
            !0 === n ? i(e, t) : !1 === n ? o(e, t) : r(e, t) ? o(e, t) : i(e, t)
        },
        L = "4.2.35",
        T = /vidyard\.com\/embed\/v4/,
        j = .5,
        A = 319,
        P = {
            setPlaybackURL: function(e) {
                return o = e
            },
            getPlaybackURL: function() {
                var e = x(),
                    t = e ? e.getAttribute("data-playbackurl") : null;
                return o || window.VIDYARD_PLAYBACK_URL || t || "play.vidyard.com"
            }
        },
        V = P.setPlaybackURL,
        U = P.getPlaybackURL,
        F = function() {
            return "https://" + U() + "/v4/"
        },
        R = function() {
            function e(e) {
                var t = this;
                this.disable_popouts = 1;
                var n = S(O(e));
                Object.keys(n).forEach(function(e) {
                    t[e] = n[e]
                }), "inline" !== this.type && "lightbox" !== this.type && (v("Invalid Vidyard player embed type, defaulting to inline.", "warn"), this.type = "inline"), this.v = L, this.disable_popouts = 1, this.custom_id = this.custom_id || N("vycustom_id"), this.vyemail = this.vyemail || N("vyemail"), this.vysfid = this.vysfid || N("vysfid"), this.vyetoken = this.vyetoken || N("vyetoken");
                var r = N("vyac"),
                    i = N("vyplayer");
                r && i && i === this.uuid ? this.access_code = r : r && i && v("Invalid Vidyard player access code.", "warn")
            }
            return e.prototype.toQueryString = function() {
                var e, t = "?";
                for (e in this) this.hasOwnProperty(e) && "height" !== e && "uuid" !== e && "width" !== e && void 0 !== this[e] && (t += "?" !== t ? "&" : "", t += encodeURIComponent(e) + "=" + encodeURIComponent(this[e]));
                return "?" === t ? "" : t
            }, e
        }();

    function M(e) {
        void 0 === e && (e = p("vidyard-player-embed", "img"));
        for (var t = 0, n = e; t < n.length; t++) {
            var r = n[t],
                i = new R(r),
                o = i.uuid,
                a = "https://" + U() + "/" + o + i.toQueryString();
            o && (-1 === f(a, window.VidyardV4.preloadLinks) && (B(o, a), window.VidyardV4.preloadLinks.push(a)))
        }
    }

    function B(e, t) {
        var n = document.createElement("link");
        return n.rel = "prefetch", n.crossOrigin = "anonymous", n.href = t, document.body.appendChild(n), t
    }
    var q = function(e, t, n) {
            if (t && n)
                if (window.postMessage && n.contentWindow) n.contentWindow.postMessage(JSON.stringify(e), t);
                else {
                    if ("associateVisitor" !== e.event) return;
                    var r = e.event + "," + e.data.type + "," + e.data.value + "|",
                        i = n.src; - 1 === i.indexOf("#") && (i += "#"), i += r, n.src = i
                }
        },
        D = function(e) {
            return function(t) {
                var n = function(e) {
                    if ("string" != typeof e.data || "" === e.data) return;
                    try {
                        var t = JSON.parse(e.data),
                            n = p("vidyard-iframe-" + t.uuid, "iframe")[0],
                            r = n ? n.contentWindow : null,
                            i = r === e.source,
                            o = "string" == typeof t.event;
                        if (!i || !o) return;
                        return t
                    } catch (e) {
                        return void v("Invalid postMessage received", "warn")
                    }
                }(t);
                n && e(n)
            }
        };
    var z = ["pardot", "hubspotutk", "_mkto_trk", "vy_dreamforce", "eloqua"],
        H = ["pardot", "hubspot", "marketo", "dreamforce", "eloqua"];
    var W = function() {
            document.dispatchEvent(function(e, t) {
                if ("function" == typeof window.CustomEvent) return new window.CustomEvent(e, {
                    detail: t
                });
                if ("function" == typeof document.createEvent) {
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, !1, !1, t), n
                }
            }("onVidyardAPI", window.VidyardV4))
        },
        G = g(function() {
            window.onVidyardAPI && "function" == typeof window.onVidyardAPI && window.onVidyardAPI(window.VidyardV4), W()
        }),
        J = n(3),
        $ = new(n.n(J).a)({
            emit: !!window.location.search.match("vydebug=1"),
            logger: function(e) {
                return v(e, "info")
            }
        }),
        Q = x();
    Q && ($.info("vidyardEmbed V" + L + " loaded from " + Q.src), $.info("data-playbackurl=" + Q.getAttribute("data-playbackurl"))), $.info("userAgent " + window.navigator.userAgent), $.info("cookies " + navigator.cookieEnabled), window.performance && window.performance.timing && window.performance.timing.navigationStart && $.info("Script load time " + (Date.now() - window.performance.timing.navigationStart));
    var K = {
        logger: $,
        getPlaybackURL: U,
        setPlaybackURL: V,
        version: L
    };
    var X, Z = function(e, t) {
            var n;
            return '<div class="vidyard-div-' + e.uuid + '" role="region" aria-label="Vidyard media player" style="position: absolute; padding-bottom: ' + t.ratio + '%; height: 0; overflow: hidden; max-width: 100%; ">' + (n = '<iframe allow="' + ["autoplay", "fullscreen", "picture-in-picture", "camera", "microphone", "display-capture"].join("; ") + '"allowfullscreen allowtransparency="true" referrerpolicy="no-referrer-when-downgrade" aria-label="Vidyard video player" class="vidyard-iframe-' + e.uuid + '" frameborder=0 height="100%" width="100%" scrolling=no src="https://' + U() + "/" + e.uuid + e.toQueryString() + '" title="Vidyard video player" style="opacity: 0; background-color: transparent; position: absolute; top: 0; left: 0;"></iframe>', "inline" === e.type ? '<div class="vidyard-inner-container-' + e.uuid + '" style="position: absolute;height: 100%; width: 100%; ' + (t.maxWidth ? "max-width: " + t.maxWidth + "px; " : "") + (t.maxHeight ? "max-height: " + t.maxHeight + "px; " : "") + '"> ' + n + "</div> " : n) + "</div>"
        },
        Y = function(e) {
            var t = document.createElement("script");
            return t.type = "application/ld+json", t.text = JSON.stringify(e), t
        },
        ee = function(e) {
            return new c(function(t, n) {
                return oe({
                    error: n,
                    success: t,
                    url: "" + F() + e + "/style.js",
                    uuid: "style_" + e
                })
            })
        },
        te = function(e) {
            return new c(function(t, n) {
                return oe({
                    error: n,
                    success: t,
                    url: "" + F() + e + "/integrations.js",
                    uuid: "integrations_" + e
                })
            })
        },
        ne = function(e) {
            return new c(function(t, n) {
                return oe({
                    error: n,
                    success: t,
                    url: "" + F() + e + "/details.js",
                    uuid: "details_" + e
                })
            })
        },
        re = function(e, t) {
            return new c(function(n, r) {
                var i = encodeURIComponent(t),
                    o = "" + F() + e + "/contact/" + i + "/marketoContact.js";
                oe({
                    error: r,
                    success: n,
                    url: o,
                    uuid: "marketoContact_" + e
                })
            })
        },
        ie = {},
        oe = function(e) {
            var t = e.url,
                n = e.uuid,
                r = e.success,
                i = e.error,
                o = n.replace(/-/g, ""),
                a = function(e) {
                    var t = e.error,
                        n = e.url,
                        r = e.requestUuid,
                        i = document.createElement("script");
                    return i.type = "application/javascript", i.onerror = t, i.src = n + "?callback=window.VidyardV4.jsonp." + r + ".done", i.setAttribute("data-playbackurl", U()), document.body.appendChild(i), i
                }({
                    error: i,
                    url: t,
                    requestUuid: o
                }),
                u = g(function(e) {
                    r(e), a.parentNode.removeChild(a)
                });
            ie[o] = ie[o] || [], ie[o].push(u), window.VidyardV4.jsonp[o] = {
                done: function(e) {
                    ie[o].forEach(function(t) {
                        return t(e)
                    })
                }
            }
        },
        ae = {
            errors: {
                placeholder: "Cannot render the player, check the placeholder Image"
            }
        },
        ue = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && (n[r[i]] = e[r[i]])
            }
            return n
        },
        ce = function(e) {
            if (!e) return c.reject(new Error(ae.errors.placeholder));
            var t = k(e),
                n = t.width,
                r = t.height,
                i = e.getAttribute("data-uuid");
            return "" !== e.src && i && (!e.complete || 0 !== n && 0 !== r) ? e.complete ? c.resolve(e) : new c(function(t, n) {
                e.onload = function() {
                    return t(e)
                }, e.onerror = function() {
                    return n(e)
                }
            }) : c.reject(new Error(ae.errors.placeholder))
        },
        se = function(e) {
            void 0 === e && (e = {});
            var t = e.uuid,
                n = e.container,
                r = e.type,
                i = void 0 === r ? "inline" : r,
                o = (e.aspect, ue(e, ["uuid", "container", "type", "aspect"]));
            if (t && n) {
                $.setLevel("placeholder")("creating placeholder image");
                var a = document.createElement("img"),
                    u = o.width ? o.width + "px" : "100%",
                    c = "\n    display: block;\n    margin: 0 auto;\n    max-height: " + (o.height ? o.height + "px" : "100%") + ";\n    max-width: " + u + ";\n    opacity: 0;\n  ";
                return a.src = "//" + U() + "/" + t + ".jpg", a.className = "vidyard-player-embed", a.setAttribute("style", c), a.setAttribute("data-uuid", t), a.setAttribute("data-type", i), Object.keys(o).forEach(function(e) {
                    return a.setAttribute("data-" + e, o[e])
                }), n.appendChild(a)
            }
        },
        le = function(e) {
            var t = e.dataParams,
                n = e.player,
                r = $.setLevel(t.uuid);
            r("injecting inline embed");
            var i = function() {
                    return n.placeholder.src !== "//" + U() + "/" + n.uuid + ".jpg" ? (e = n.uuid, t = document.createElement("img"), t.setAttribute("data-uuid", e), t.src = "//" + U() + "/" + e + ".jpg", ce(t)).then(h).catch(function() {
                        return !1
                    }) : c.resolve(!1);
                    var e, t
                },
                o = {
                    maxHeight: t.height ? parseInt(t.height, 10).toString() : null,
                    maxWidth: t.width ? parseInt(t.width, 10).toString() : null,
                    ratio: h(n.placeholder)
                };
            n.container.innerHTML = Z(t, o);
            var a = n.container.getElementsByTagName("iframe")[0];
            n.iframe = a;
            var u = new c(function(e) {
                    s("load", "onload", e, a)
                }),
                l = new c(function(e) {
                    n.on("ready", e)
                });

            function d() {
                var e = n.container.clientWidth >= 2 * A;
                I(n.container, "playlist-open", e)
            }
            n.on("sidePlaylistOpen", function() {
                d()
            }), c.race([u, l]).then(function() {
                r("player or iFrame is ready"), i().then(function(e) {
                    e && (a.parentElement.parentElement.style.paddingBottom = e + "%")
                });
                var e = n.container.getElementsByClassName("vidyard-inner-container-" + n.uuid)[0];
                n.placeholder.parentElement.removeChild(n.placeholder), I(n.placeholder, "inserted", !0), e.appendChild(n.placeholder), a.parentElement.parentElement.style.position = "relative", a.style.opacity = "1"
            }), u.then(function() {
                n.placeholder.style.display = "none", a.parentElement.parentElement.style.backgroundColor = "transparent"
            }), r("getStyle sent"), ee(n.uuid).then(function(e) {
                r("getStyle received: " + JSON.stringify(e)), 1 === e.pl && "0" !== t.playlist_always_open || "1" === t.playlist_always_open ? (n.iframe.parentElement.setAttribute("data-pl", "true"), s("resize", "onresize", d), d()) : n.iframe.parentElement.setAttribute("data-pl", "false")
            }).catch(function(e) {
                r("getStyle failed, likely a network error")
            })
        },
        de = function(e) {
            void 0 === e && (e = document.body);
            for (var t = 0, n = Array.from(e.children); t < n.length; t++) {
                var r = n[t];
                r.hasAttribute("aria-hidden") && r.setAttribute("data-vy-keep-hidden", r.getAttribute("aria-hidden")), r.setAttribute("aria-hidden", "true")
            }
        },
        fe = function(e) {
            void 0 === e && (e = document.body);
            for (var t = 0, n = Array.from(e.children); t < n.length; t++) {
                var r = n[t];
                r.getAttribute("data-vy-keep-hidden") ? r.setAttribute("aria-hidden", r.getAttribute("data-vy-keep-hidden")) : r.removeAttribute("aria-hidden"), r.removeAttribute("data-vy-keep-hidden")
            }
        },
        pe = {
            ios: function() {
                return /ipad|iphone|ipod/i.test(navigator.userAgent)
            }
        },
        he = function(e) {
            for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
            return t
        },
        ve = function(e) {
            return Array.isArray(e) ? e : [e]
        },
        ye = function() {
            return document && he(document.querySelectorAll("[data-no-focus-lock]")).some(function(e) {
                return e.contains(document.activeElement)
            })
        },
        me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        ge = function(e) {
            return ve(e).filter(Boolean).reduce(function(e, t) {
                var n = t.getAttribute("data-focus-lock");
                return e.push.apply(e, n ? function e(t) {
                    for (var n = t.length, r = 0; r < n; r += 1)
                        for (var i = function(n) {
                                if (r !== n && t[r].contains(t[n])) return {
                                    v: e(t.filter(function(e) {
                                        return e !== t[n]
                                    }))
                                }
                            }, o = 0; o < n; o += 1) {
                            var a = i(o);
                            if ("object" === (void 0 === a ? "undefined" : me(a))) return a.v
                        }
                    return t
                }(he(function e(t) {
                    return t.parentNode ? e(t.parentNode) : t
                }(t).querySelectorAll('[data-focus-lock="' + n + '"]:not([data-focus-lock-disabled="disabled"])'))) : [t]), e
            }, [])
        },
        be = function(e) {
            return e === document.activeElement
        },
        we = function(e) {
            var t = document && document.activeElement;
            return !(!t || t.dataset && t.dataset.focusGuard) && ge(e).reduce(function(e, n) {
                return e || n.contains(t) || (r = he(n.querySelectorAll("iframe")), i = be, !!r.filter(function(e) {
                    return e === i
                })[0]);
                var r, i
            }, !1)
        },
        xe = function(e, t) {
            var n = e.tabIndex - t.tabIndex,
                r = e.index - t.index;
            if (n) {
                if (!e.tabIndex) return 1;
                if (!t.tabIndex) return -1
            }
            return n || r
        },
        ke = function(e, t, n) {
            return he(e).map(function(e, t) {
                return {
                    node: e,
                    index: t,
                    tabIndex: n && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
                }
            }).filter(function(e) {
                return !t || e.tabIndex >= 0
            }).sort(xe)
        },
        Ee = ["button:enabled:not([readonly])", "select:enabled:not([readonly])", "textarea:enabled:not([readonly])", "input:enabled:not([readonly])", "a[href]", "area[href]", "iframe", "object", "embed", "[tabindex]", "[contenteditable]", "[autofocus]"],
        _e = Ee.join(","),
        Ce = _e + ", [data-focus-guard]",
        Oe = function(e, t) {
            return e.reduce(function(e, n) {
                return e.concat(he(n.querySelectorAll(t ? Ce : _e)), n.parentNode ? he(n.parentNode.querySelectorAll(Ee.join(","))).filter(function(e) {
                    return e === n
                }) : [])
            }, [])
        },
        Ne = function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return n.push(t), t.parentNode && e(t.parentNode, n), n
        },
        Se = function(e, t) {
            for (var n = Ne(e), r = Ne(t), i = 0; i < n.length; i += 1) {
                var o = n[i];
                if (r.indexOf(o) >= 0) return o
            }
            return !1
        },
        Ie = function(e) {
            return he(e).filter(function(e) {
                return function e(t) {
                    return !t || t === document || t.nodeType === Node.DOCUMENT_NODE || !((n = window.getComputedStyle(t, null)) && n.getPropertyValue && ("none" === n.getPropertyValue("display") || "hidden" === n.getPropertyValue("visibility"))) && e(t.parentNode);
                    var n
                }(e)
            }).filter(function(e) {
                return function(e) {
                    return !(("INPUT" === e.tagName || "BUTTON" === e.tagName) && ("hidden" === e.type || e.disabled))
                }(e)
            })
        },
        Le = function(e, t) {
            return ke(Ie(Oe(e, t)), !0, t)
        },
        Te = function(e) {
            return Ie((t = e.querySelectorAll("[data-autofocus-inside]"), he(t).map(function(e) {
                return Oe([e])
            }).reduce(function(e, t) {
                return e.concat(t)
            }, [])));
            var t
        },
        je = function(e) {
            return "INPUT" === e.tagName && "radio" === e.type
        },
        Ae = function(e, t) {
            return t.filter(je).filter(function(t) {
                return t.name === e.name
            }).filter(function(e) {
                return e.checked
            })[0] || e
        },
        Pe = function(e, t) {
            return e.length > 1 && je(e[t]) && e[t].name ? e.indexOf(Ae(e[t], e)) : t
        },
        Ve = function(e) {
            return e[0] && e.length > 1 && je(e[0]) && e[0].name ? Ae(e[0], e) : e[0]
        },
        Ue = function(e) {
            return e && e.dataset && e.dataset.focusGuard
        },
        Fe = function(e) {
            return !Ue(e)
        },
        Re = function(e, t, n) {
            var r = ve(e),
                i = ve(t),
                o = r[0],
                a = null;
            return i.filter(Boolean).forEach(function(e) {
                a = Se(a || e, e) || a, n.filter(Boolean).forEach(function(e) {
                    var t = Se(o, e);
                    t && (a = !a || t.contains(a) ? t : Se(t, a))
                })
            }), a
        },
        Me = function(e, t) {
            var n = document && document.activeElement,
                r = ge(e).filter(Fe),
                i = Re(n || e, e, r),
                o = Le(r).filter(function(e) {
                    var t = e.node;
                    return Fe(t)
                });
            if (o[0] || (o = (a = r, ke(Ie(Oe(a)), !1)).filter(function(e) {
                    var t = e.node;
                    return Fe(t)
                }))[0]) {
                var a, u, c, s, l, d = Le([i]).map(function(e) {
                        return e.node
                    }),
                    f = (u = d, c = o, s = new Map, c.forEach(function(e) {
                        return s.set(e.node, e)
                    }), u.map(function(e) {
                        return s.get(e)
                    }).filter(Boolean)),
                    p = f.map(function(e) {
                        return e.node
                    }),
                    h = function(e, t, n, r, i) {
                        var o = e.length,
                            a = e[0],
                            u = e[o - 1],
                            c = Ue(n);
                        if (!(e.indexOf(n) >= 0)) {
                            var s = t.indexOf(n),
                                l = t.indexOf(r || s),
                                d = e.indexOf(r),
                                f = s - l,
                                p = t.indexOf(a),
                                h = t.indexOf(u),
                                v = Pe(e, 0),
                                y = Pe(e, o - 1);
                            return -1 === s || -1 === d ? e.indexOf(i && i.length ? Ve(i) : Ve(e)) : !f && d >= 0 ? d : s <= p && c && Math.abs(f) > 1 ? y : s >= p && c && Math.abs(f) > 1 ? v : f && Math.abs(f) > 1 ? d : s <= p ? y : s > h ? v : f ? Math.abs(f) > 1 ? d : (o + d + f) % o : void 0
                        }
                    }(p, d, n, t, p.filter((l = function(e) {
                        return e.reduce(function(e, t) {
                            return e.concat(Te(t))
                        }, [])
                    }(r), function(e) {
                        return !!e.autofocus || e.dataset && !!e.dataset.autofocus || l.indexOf(e) >= 0
                    })));
                return void 0 === h ? h : f[h]
            }
        },
        Be = 0,
        qe = !1,
        De = function(e, t) {
            var n, r = Me(e, t);
            if (!qe && r) {
                if (Be > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), qe = !0, void setTimeout(function() {
                    qe = !1
                }, 1);
                Be++, (n = r.node).focus(), n.contentWindow && n.contentWindow.focus(), Be--
            }
        },
        ze = 0,
        He = null,
        We = function() {
            return document && document.activeElement === document.body || ye()
        },
        Ge = function(e) {
            ze = e, e && function() {
                var e = !1;
                if (ze) {
                    var t = ze;
                    We() || (t && !we(t) && (e = De(t, He)), He = document.activeElement)
                }
            }()
        },
        Je = [],
        $e = function(e) {
            return !!Ge((t = Je, t.filter(function(e) {
                return e
            }).slice(-1)[0])) && (e && e.preventDefault(), !0);
            var t
        },
        Qe = {
            on: function(e) {
                0 === Je.length && document.addEventListener("focusin", $e), Je.indexOf(e) < 0 && (Je.push(e), $e())
            },
            off: function(e) {
                Je = Je.filter(function(t) {
                    return t !== e
                }), $e(), 0 === Je.length && document.removeEventListener("focusin", $e)
            }
        },
        Ke = n(1),
        Xe = n.n(Ke);

    function Ze(e, t, n) {
        if (e && !document.getElementById("vidyard-overlay")) {
            var r, i, o = (r = e, (i = {}).backerElement = document.createElement("div"), i.backerElement.className = "vidyard-lightbox-content-backer", i.containerElement = document.createElement("div"), i.containerElement.innerHTML = r, i.containingDiv = i.containerElement.getElementsByTagName("div")[0], i.containingDiv.style.position = "absolute", i.containingDiv.style.height = "100%", i.containingDiv.style.width = "100%", i.containingDiv.style.zIndex = "2", i.iframe = i.containerElement.getElementsByTagName("iframe")[0], i.iframe.parentNode.style.position = "static", i.iframe.parentNode.style.paddingBottom = 0, i.iframe.style.opacity = "1", setTimeout(function() {
                    i.backerElement.style.opacity = "1", i.backerElement.style.filter = "alpha(opacity=100)"
                }, 0), i),
                a = function(e) {
                    var t = {};
                    t.overlay = document.createElement("div"), t.contentFixed = document.createElement("div"), t.popbox = document.createElement("div"), t.overlayWrapper = document.createElement("div"), t.closeContainer = function() {
                        var e = {};
                        return e.closeContainer = document.createElement("div"), e.closeButton = document.createElement("div"), e.closeContainer.className = "vidyard-close-container", e.closeContainer.setAttribute("aria-label", "Close Player"), e.closeContainer.setAttribute("role", "button"), e.closeContainer.setAttribute("tabindex", "0"), e.closeButton.className = "vidyard-close-x", document.documentMode < 9 && (e.closeButton.className += " simple-close", e.closeButton.innerHTML = "&times;"), e.closeContainer.appendChild(e.closeButton), e
                    }().closeContainer, t.overlay.id = "vidyard-overlay", t.overlay.setAttribute("aria-hidden", "true"), t.overlay.style.display = "block", t.contentFixed.id = "vidyard-content-fixed", t.contentFixed.setAttribute("aria-label", "media player lightbox"), t.contentFixed.setAttribute("role", "dialog"), t.contentFixed.style.display = "block", t.popbox.id = "vidyard-popbox", t.overlayWrapper.id = "vidyard-overlay-wrapper", t.overlayWrapper.style.display = "block", t.contentFixed.appendChild(t.popbox), t.overlayWrapper.appendChild(t.overlay), t.overlayWrapper.appendChild(t.closeContainer), t.overlayWrapper.appendChild(t.contentFixed), e && (t.overlay.style.zIndex = e, t.contentFixed.style.zIndex = e + 2, t.closeContainer.style.zIndex = e + 1);
                    return t
                }(n),
                u = function(e) {
                    var t = p("vidyard-lightbox-image", "img", e)[0].cloneNode();
                    return t.className = "", t.id = "vidyard-popbox-constraint", t.alt = "", t.setAttribute("aria-hidden", "true"), t
                }(t),
                c = document.createElement("div");
            return c.id = "vidyard-focusable-element", c.tabIndex = 0, a.popbox.appendChild(o.backerElement), a.popbox.appendChild(o.containingDiv), a.popbox.appendChild(u), pe.ios() && de(), document.body.appendChild(a.overlayWrapper), document.body.appendChild(c), a.closeContainer.focus(), Qe.on(a.overlayWrapper), Xe.a.trap(a.overlayWrapper), setTimeout(function() {
                a.overlayWrapper.style.opacity = "1", a.overlayWrapper.style.filter = "alpha(opacity=100)"
            }, 0), {
                container: o,
                lightbox: a
            }
        }
    }
    var Ye = {};

    function et(e) {
        var t = p("vidyard-lightbox-centering", "div", e.container)[0];
        e.player.showLightbox = function() {
            $.setLevel(e.player.uuid)("show lightbox"),
                function(e) {
                    X = document.activeElement;
                    var t = Ze(e.iframe, e.container, e.overlayZindex);
                    e.player.iframe = t.container.iframe;
                    var n = e.player.uuid,
                        r = t.container.iframe,
                        i = function(e, t, n) {
                            return g(function() {
                                ! function(e) {
                                    e.style.opacity = "1"
                                }(e), tt(), Ye.parentEsc = s("keydown", "onkeydown", w(function() {
                                    return nt(n)
                                }), document)
                            })
                        }(r, 0, e.player),
                        o = function(e, t) {
                            return g(function() {
                                var n = {
                                    uuid: t,
                                    event: "listenForKeyPress",
                                    keyCode: "27"
                                };
                                q(n, "https://" + U(), e)
                            })
                        }(r, n);
                    Ye.iframeLoaded = s("load", "onload", i, t.container.iframe), Ye.messageHandler = s("message", "onmessage", D(function(t) {
                        var n, r;
                        i(), o(), n = t, r = e.player, "keyPressed" === n.event && 27 === n.params && nt(r)
                    }), window), Ye.overlayClick = s("click", "onclick", function() {
                        return nt(e.player)
                    }, t.lightbox.overlayWrapper), Ye.fixedClick = s("click", "onclick", function() {
                        return nt(e.player)
                    }, t.lightbox.contentFixed), Ye.closeKeyPress = s("keydown", "onkeydown", b(function() {
                        return nt(e.player)
                    }), t.lightbox.closeContainer), Ye.responsivePlayerSize = s("resize", "onresize", tt, window)
                }({
                    container: e.container,
                    iframe: e.iframe,
                    overlayZindex: e.overlayZindex,
                    player: e.player
                })
        }, e.player.hideLightbox = function() {
            return nt(e.player)
        }, s("click", "onclick", e.player.showLightbox, t), s("keydown", "onkeydown", b(function(t) {
            t.preventDefault(), e.player.showLightbox(t)
        }), t)
    }

    function tt() {
        var e = document.getElementById("vidyard-popbox-constraint"),
            t = parseFloat((window.innerHeight / window.innerWidth * 100).toFixed(2)) < parseFloat(h(e)) ? "landscape" : "portrait";
        e.className !== t && (e.className = t)
    }

    function nt(e) {
        var t, n, r, i, o, a;
        n = document.getElementById("vidyard-content-fixed"), r = document.getElementById("vidyard-focusable-element"), i = document.getElementById("vidyard-overlay"), o = document.getElementById("vidyard-overlay-wrapper"), a = document.getElementById("vidyard-popbox"), n && i && o && a && (t && Object.keys(t).forEach(function(e) {
            (0, t[e])()
        }), r && r.parentNode.removeChild(r), Qe.off(o), Xe.a.untrap(o), o.style.opacity = "0", o.style.filter = "alpha(opacity=0)", pe.ios() && fe(), setTimeout(function() {
            o.parentNode.removeChild(o)
        }, 1e3 * j)), X && X.focus(), Object.keys(Ye).forEach(function(e) {
            var t = Ye[e],
                n = t.eventName,
                r = t.handler,
                i = t.element;
            l(n, r, i)
        }), e && e.trigger("lightboxClose")
    }
    var rt = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    };

    function it(e) {
        if (!e || "string" != typeof e || e.length < 20) throw new Error("Invalid UUID given");
        var t = $.setLevel(e),
            n = "https://" + U() + "/player/" + e + ".json?pomo=0";
        return t("fetching metadata"), C({
            endpoint: n
        }).then(JSON.parse).then(function(n) {
            return t("metadata successfully fetched"), rt({
                uuid: e
            }, n.payload.vyContext.metadata)
        }).catch(function(e) {
            throw t("failed to fetch metadata, " + e), new Error("Error parsing player metadata, make sure the UUID is correct")
        })
    }
    var ot = function(e) {
            var t = e.dataParams,
                n = e.player,
                r = $.setLevel(t.uuid);
            r("injecting lighbox embed"), n.placeholder.style.display = "none", t.autoplay = 1;
            var i, o, a, u, c = {
                    ratio: h(n.placeholder)
                },
                s = Z(t, c),
                l = {
                    maxHeight: t.height ? parseInt(t.height, 10) : null,
                    maxWidth: t.width ? parseInt(t.width, 10) : null,
                    ratio: h(n.placeholder)
                };
            i = n.container, o = t, a = l, u = function(e, t, n) {
                return '<div class="vidyard-lightbox-thumbnail vidyard-lightbox-' + t.uuid + '"' + (n.maxWidth ? ' style="max-width: ' + n.maxWidth + 'px;"' : "") + '><div class="vidyard-lightbox-centering" style="padding-bottom: ' + n.ratio + '%;"><img class="vidyard-lightbox-image" src="' + e + '" alt="video thumbnail" /><div type="button" role="button" class="play-button" title="Play video" data-version="1" tabindex="0"><div class="play-button-size"></div><div class="arrow-size"><div class="arrow-size-ratio"></div><div class="arrow"></div></div></div></div></div>'
            }("https://" + U() + "/" + o.uuid + ".jpg", o, a), i.insertAdjacentHTML("afterbegin", u), it(o.uuid).then(function(e) {
                var t = p("play-button", "button", i);
                1 === t.length && t[0].setAttribute("aria-label", "Play video " + e.name + ". Opens in a modal")
            }, function() {}), et({
                container: n.container,
                iframe: s,
                overlayZindex: t.overlayZindex,
                player: n
            }), r("getStyle sent"), ee(n.uuid).then(function(e) {
                r("getStyle received: " + JSON.stringify(e)),
                    function(e, t) {
                        if (1 === e.pb) {
                            var n = p("play-button", "button", t);
                            1 === n.length && (n[0].style.display = "block", n[0].style.backgroundColor = "#" + e.pbc)
                        }
                    }(e, n.container)
            }).catch(function(e) {
                r("getStyle failed, likely a network error")
            })
        },
        at = /(vidyard|vystaging|hubspot)\.com$/,
        ut = function(e, t, n) {
            if (void 0 === n && (n = !1), n || t.hasBacklink && !at.test(document.location.host)) {
                var r = document.createElement("a"),
                    i = document.createElement("span"),
                    o = document.createElement("img");
                o.src = "https://cdn.vidyard.com/client-logos/vidyard.png", o.id = "backlink-icon", o.alt = "Vidyard Logo", i.id = "backlink-text", i.textContent = "Powered by Vidyard", r.id = "backlink", r.appendChild(o), r.appendChild(i), r.href = t.backlinkURL, r.rel = "nofollow", r.target = "_blank", r.setAttribute("aria-label", "Link to Vidyard"), r.dataset.testid = "backlink", s("click", "onclick", function() {
                    var t = {
                        data: {
                            event: "Acquisition - Clicked the Backlink"
                        },
                        event: "sendMetricsEvent",
                        uuid: e.uuid
                    };
                    q(t, "https://" + U(), e.iframe)
                }, r), e.container.appendChild(r)
            }
        };
    var ct = function(e, t) {
            var n = document.createElement("div");
            n.className = "vidyard-player-container", n.setAttribute("uuid", e);
            var r = n.style;
            return r.margin = "auto", r.width = "100%", r.height = "auto", r.overflow = "hidden", r.display = "block", "inline" === t.type && (r.maxWidth = t.width ? t.width + "px" : "", r.maxHeight = t.height ? t.height + "px" : ""), n
        },
        st = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        lt = function() {
            function e(e, t, n) {
                var r = this;
                this._ready = !1, this._previousTime = null, this._onMessageEventHandler = function(e) {
                    if (e.origin === "https://" + U()) {
                        var t;
                        try {
                            t = JSON.parse(e.data)
                        } catch (e) {
                            return
                        }
                        if ((!r.uuid || t.uuid === r.uuid) && "string" == typeof t.event) {
                            r._updateStatus(t), "ready" === t.event && (r._ready = !0, window.VidyardV4.integrations.updatePlayer(r));
                            var n = r._callbackStore[t.event];
                            if (n)
                                for (var i = 0, o = n; i < o.length; i++) {
                                    o[i].call(r, t.params, r)
                                }
                        }
                    }
                }, this._callbackStore = n || {
                    beforeSeek: [],
                    chapterComplete: [],
                    createCta: [],
                    fullScreenChange: [],
                    lightboxClose: [],
                    pause: [],
                    play: [],
                    playerComplete: [],
                    ready: [],
                    seek: [],
                    sidePlaylistOpen: [],
                    status: [],
                    timeupdate: [],
                    volumeChange: []
                }, this.element = e, this.uuid = t, this.status = null, this.metadata = null, this.progressEventsUnsubscribe = [], s("message", "onmessage", this._onMessageEventHandler)
            }
            return e.prototype.on = function(e, t) {
                var n = this;
                if ("ready" !== e || !this.ready()) return void 0 === this._callbackStore[e] ? (this._callbackStore[e] = [t], void v("The event name: " + e + " is not supported, your handler was setup regardless", "warn")) : void this._callbackStore[e].push(t);
                setTimeout(function() {
                    return t.call(n, void 0, n)
                }, 0)
            }, e.prototype.trigger = function(e) {
                for (var t = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                for (var i = function(r) {
                        "ready" === e && o.ready() ? setTimeout(function() {
                            return r.call(t, n, t)
                        }, 0) : r.call(o, n, o)
                    }, o = this, a = 0, u = this._callbackStore[e]; a < u.length; a++) {
                    i(u[a])
                }
            }, e.prototype.off = function(e, t) {
                if (void 0 !== e) {
                    if (this._callbackStore[e])
                        if (t) {
                            var n = f(t, this._callbackStore[e]);
                            n > -1 && this._callbackStore[e].splice(n, 1)
                        } else this._callbackStore[e] = []
                } else
                    for (var r in this._callbackStore) this._callbackStore.hasOwnProperty(r) && (this._callbackStore[r] = [])
            }, e.prototype.ready = function() {
                return this._ready
            }, e.prototype.play = function() {
                this._message({
                    event: "play"
                })
            }, e.prototype.pause = function() {
                this._message({
                    event: "pause"
                })
            }, e.prototype.resume = function() {
                this._message({
                    event: "resume"
                })
            }, e.prototype.seek = function(e) {
                this._message({
                    event: "seek",
                    position: e
                })
            }, e.prototype.setVolume = function(e) {
                this._message({
                    event: "setVolume",
                    newVolume: e
                })
            }, e.prototype.setPlaybackSpeed = function(e) {
                this._message({
                    event: "setPlaybackSpeed",
                    speed: e
                })
            }, e.prototype.playChapter = function(e) {
                this._message({
                    chapter_index: e,
                    event: "playChapter"
                })
            }, e.prototype.setAudioTrack = function(e) {
                this._message({
                    audioTrackId: e,
                    event: "setAudioTrack"
                })
            }, e.prototype.enableCaption = function(e, t) {
                this._message({
                    event: "enableCaption",
                    label: e,
                    language: t
                })
            }, e.prototype.disableCaption = function(e, t) {
                this._message({
                    event: "disableCaption",
                    label: e,
                    language: t
                })
            }, e.prototype.consentToGDPR = function(e) {
                this._message({
                    consent: e,
                    event: "consentToGDPR"
                })
            }, e.prototype.createCta = function(e) {
                this._message({
                    attributes: function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        return e
                    }({
                        display_once: !1,
                        duration: 10,
                        fullscreen: !1,
                        html: "",
                        opacity: 1,
                        start: 0,
                        width: 300
                    }, e),
                    event: "createCta"
                })
            }, e.prototype.updateCta = function(e, t) {
                this._message({
                    attributes: t,
                    event: "updateCta",
                    id: e
                })
            }, e.prototype.addEvent = function(e) {
                var t = e.start,
                    n = void 0 === t ? 0 : t,
                    r = e.duration,
                    i = void 0 === r ? 1 : r,
                    o = e.chapterIndex,
                    a = void 0 === o ? 0 : o,
                    u = e.eventId;
                u ? this._message({
                    chapterIndex: a,
                    duration: i,
                    event: "addEvent",
                    id: u,
                    start: n
                }) : v("Missing arguments. Need eventId")
            }, e.prototype.getCurrentChapter = function() {
                return null === this.status ? null : this.status.chapterIndex
            }, e.prototype.currentTime = function() {
                return null === this.status ? null : this.status.currentTime
            }, e.prototype.scrubbing = function() {
                return null === this.status ? null : this.status.scrubbing
            }, e.prototype.toggleFullscreen = function() {
                var e = this,
                    t = function() {
                        for (var e = [
                                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenchange"],
                                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitfullscreenchange"],
                                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozfullscreenchange"],
                                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "MSFullscreenChange"]
                            ], t = [], n = {}, r = 0, i = e; r < i.length; r++) {
                            var o = i[r];
                            if (o[1] in document) {
                                t = o;
                                break
                            }
                        }
                        if (t && t.length) {
                            for (var a = 0; a < t.length; a++) n[e[0][a]] = t[a];
                            return n
                        }
                        return null
                    }();
                if (t) {
                    var n = this.iframe[t.requestFullscreen]();
                    n ? n.then(function() {
                        e._message({
                            event: "toggleFullscreen"
                        })
                    }) : this._message({
                        event: "toggleFullscreen"
                    }), s(t.fullscreenchange, "MSFullscreenChange", function() {
                        document[t.fullscreenElement] || e._message({
                            event: "exitFullscreen"
                        })
                    }), s("message", "onmessage", D(function(e) {
                        "fullScreenChange" === e.event && !1 === e.params && document[t.fullscreenElement] && document[t.exitFullscreen]()
                    }))
                } else this._message({
                    event: "toggleFullscreen"
                })
            }, e.prototype.resetPlayer = function() {
                this._message({
                    event: "resetPlayer"
                })
            }, e.prototype._message = function(e) {
                !0 === this.ready() ? q(st({}, e, {
                    uuid: this.uuid
                }), "https://" + U(), this.iframe) : v("Player is not ready yet! No messages can be recieved.", "error")
            }, e.prototype._updateStatus = function(e) {
                if ("object" == typeof e.status && (this.status = e.status), "object" == typeof e.metadata && (this.metadata = e.metadata), this.status) {
                    if (this.status.currentTime !== this._previousTime && this._callbackStore.timeupdate)
                        for (var t = 0, n = this._callbackStore.timeupdate; t < n.length; t++) {
                            n[t].call(this, this.status.currentTime, this)
                        }
                    this._previousTime = this.status.currentTime
                }
            }, e
        }(),
        dt = function(e) {
            var t = window.VidyardV4,
                n = (t.integrations, t.api, t.players),
                r = (t.playerReadyListeners, new R(e)),
                i = r.uuid,
                o = $.setLevel(i);
            if (o("rendering"), void 0 !== i) {
                if ("true" === r.rendered) return o("Already rendered"), y(n, function(t) {
                    return t.placeholder === e
                });
                var a = ct(i, r),
                    u = new lt(a, i);
                return e.setAttribute("data-rendered", "true"), e.parentNode.insertBefore(a, e), u.placeholder = e, u.container = a, n.push(u),
                    function(e) {
                        var t = window.VidyardV4.playerReadyListeners,
                            n = e.uuid,
                            r = $.setLevel(e.uuid);
                        t[n] = t[n] || [];
                        var i = t[n].concat(t[void 0]);
                        Object.keys(i).forEach(function(t) {
                            var n = i[t];
                            e.on("ready", n), r("attaching ready callbacks")
                        })
                    }(u), "inline" === r.type ? le({
                        dataParams: r,
                        player: u
                    }) : "lightbox" === r.type && ot({
                        dataParams: r,
                        player: u
                    }),
                    function(e) {
                        var t = window.VidyardV4.integrations,
                            n = $.setLevel(e.uuid),
                            r = t.getCookie("marketo");
                        r && (n("getMarketoLead sent"), re(e.uuid, r).then(_).then(function(r) {
                            n("getMarketoLead received: " + r), e.on("ready", function() {
                                t.addKnownVisitor("marketo", r, e.org)
                            })
                        }).catch(function() {
                            $.warn("Invalid Marketo cookie")
                        })), n("getIntegrations"), te(e.uuid).then(function(r) {
                            n("getIntegrations received: " + JSON.stringify(r)), e.on("ready", function() {
                                e._tmpOrg = r, t.updatePlayer(e)
                            })
                        }).catch(function(e) {
                            n("getIntegrations failed, likely a network error")
                        })
                    }(u),
                    function(e) {
                        var t = $.setLevel(e);
                        return t("getSEO sent"), ne(e).then(function(e) {
                            if (t("getSEO: " + JSON.stringify(e)), !d(e)) {
                                var n = Y(e);
                                document.getElementsByTagName("head")[0].appendChild(n)
                            }
                            return e
                        }).catch(function(e) {
                            t("getSEO failed, likely a network error")
                        })
                    }(u.uuid).then(function(e) {
                        "inline" === r.type && ut(u, e, r.backlink && 1 === r.backlink)
                    }), window.Vidyard._players[u.uuid] = u, u
            }
            v('Embed without a UUID detected, it is impossible to insert a player without a UUID. Add "data-uuid=some_uuid" to the offending element.' + e)
        };
    var ft = function(e) {
            return window.VidyardV4.players.filter(function(t) {
                return t.uuid === e
            })
        },
        pt = function(e) {
            e.sort(function(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            });
            for (var t = 0; t < e.length;) e[t] === e[t + 1] ? e.splice(t + 1, 1) : t += 1;
            return e
        };

    function ht() {
        this._compare = function(e, t) {
            return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : e[1] < t[1] ? -1 : e[1] > t[1] ? 1 : 0
        }
    }

    function vt(e, t, n) {
        var r = [],
            i = !1,
            o = e.getCurrentChapter();

        function a() {
            var t = e.getCurrentChapter();
            return r[t] = {
                interval: [0, 0],
                intervals: ht.create(),
                thresholds: n.slice()
            }, r[t]
        }
        var u = function(n) {
                var u = e.getCurrentChapter();
                o === u ? function(t, n) {
                    var o, u, c, s = 0,
                        l = e.getCurrentChapter();
                    if (void 0 === r[l] && a(), !(i || "object" != typeof e.metadata || t <= r[l].interval[1])) {
                        if (r[l].interval[1] = t, u = r[l].intervals.insertOne(r[l].interval), (o = function(e) {
                                var t, n = null,
                                    r = [];
                                for (t = 0; t < e.length; ++t) !n || n[1] < e[t][0] ? (n && r.push(n), n = [e[t][0], e[t][1]]) : e[t][1] > n[1] && (n[1] = e[t][1]);
                                return n && r.push(n), r
                            }(r[l].intervals)).length + 1 < r[l].intervals.length)
                            for (r[l].intervals = ht.create(), c = 0; c < o.length; ++c) s += o[c][1] - o[c][0], r[l].intervals.insertOne(o[c]);
                        else {
                            for (c = 0; c < o.length; ++c) s += o[c][1] - o[c][0];
                            r[l].intervals.remove(u)
                        }
                        s = "number" == typeof e.metadata.chapters_attributes[l].video_attributes.length_in_milliseconds ? s / e.metadata.chapters_attributes[l].video_attributes.length_in_milliseconds * 1e5 : s / e.metadata.chapters_attributes[l].video_attributes.length_in_seconds * 100, Math.round(s) >= r[l].thresholds[0] && n({
                            chapter: l,
                            event: r[l].thresholds.shift(),
                            player: e
                        })
                    }
                }(n, t) : o = u
            },
            c = function(t) {
                var n = e.getCurrentChapter();
                void 0 !== r[n] && (!1 === i && (r[n].interval[1] = t.start), i = !0)
            },
            s = function(t) {
                var n = t,
                    o = e.getCurrentChapter();
                void 0 === r[o] && a(), r[o].intervals.insertOne(r[o].interval.slice(0)), r[o].interval[0] = n, r[o].interval[1] = n, i = !1
            },
            l = function(e) {
                r[e].interval = [0, 0], i = !1
            };
        return e.on("timeupdate", u), e.on("beforeSeek", c), e.on("play", s), e.on("chapterComplete", l), {
            player: e,
            removeEventListeners: function() {
                e.off("beforeSeek", c), e.off("chapterComplete", l), e.off("play", s), e.off("timeupdate", u), e = null, r = []
            }
        }
    }

    function yt(e, t, n) {
        var r;
        void 0 === t && (t = [1, 25, 50, 75, 90]);
        var i = [],
            o = n ? ((r = {})[n.uuid] = n, r) : function() {
                try {
                    return window.Vidyard.players()
                } catch (e) {
                    return v(function() {
                        return console.error("The Vidyard Player API must be loaded before this script can execute")
                    }), {}
                }
            }(),
            a = pt(t),
            u = function(t) {
                if (o.hasOwnProperty(t) && t.length > 0 && "" !== o[t]) {
                    var n = vt(o[t], e, a);
                    i.push(n)
                } else v(function() {
                    return console.error("Could not attach Progress Events to player " + t + ", make sure to load the Vidyard Player API")
                })
            };
        for (var c in o) u(c);
        return 0 === i.length && v(function() {
            return console.warn("No Vidyard Players found. (include this script below player embed codes)")
        }), i
    }
    ht.create = function() {
        return new ht
    }, ht.prototype = new Array, ht.prototype.constructor = Array.prototype.constructor, ht.prototype.insertOne = function(e) {
        var t = this.bsearch(e);
        return this.splice(t + 1, 0, e), t + 1
    }, ht.prototype.remove = function(e) {
        return this.splice(e, 1), this
    }, ht.prototype.bsearch = function(e) {
        if (!this.length) return -1;
        for (var t, n, r, i = 0, o = this.length; o - i > 1;) {
            if (n = this[t = Math.floor((i + o) / 2)], 0 === (r = this._compare(e, n))) return t;
            r > 0 ? i = t : o = t
        }
        return 0 === i && this._compare(this[0], e) > 0 ? -1 : i
    };
    var mt = function(e) {
        $.setLevel("placeholder")("rendering player from placeholder image");
        var t = dt(e);
        return new c(function(e) {
            t.showLightbox ? e(t) : t.on("ready", function() {
                return e(t)
            })
        })
    };
    var gt = {
            _debug: K,
            api: {
                GDPR: {
                    consent: function(e) {
                        if (void 0 !== e)
                            for (var t = function(t) {
                                    t.on("ready", function() {
                                        t.consentToGDPR(e)
                                    })
                                }, n = 0, r = window.VidyardV4.players; n < r.length; n++) t(r[n])
                    },
                    hasConsentOnReady: function(e) {
                        var t = 0,
                            n = window.VidyardV4.api.GDPR,
                            r = window.VidyardV4.players;
                        if (0 === r.length) return e(!1);
                        if (void 0 !== n._readyConsent) return e(n._readyConsent);
                        for (var i = 0, o = r; i < o.length; i++) o[i].on("ready", function() {
                            if (t !== r.length && (t += 1), t === r.length) return n._readyConsent = r.reduce(function(e, t) {
                                return t.status.consent && e
                            }, !0), e(n._readyConsent)
                        })
                    }
                },
                addReadyListener: function(e, t) {
                    var n = window.VidyardV4.playerReadyListeners;
                    n[t] = n[t] || [], n[t].push(e);
                    for (var r = 0, i = window.VidyardV4.players; r < i.length; r++) {
                        var o = i[r];
                        void 0 !== t && o.uuid !== t || o.on("ready", e)
                    }
                },
                destroyPlayer: function(e) {
                    var t = window.VidyardV4.players;
                    m(t, e) ? (function(e) {
                        e.progressEventsUnsubscribe.forEach(function(e) {
                            return e()
                        }), e.progressEventsUnsubscribe = []
                    }(e), e.off(), e.container.parentNode.removeChild(e.container), e.placeholder.parentNode.removeChild(e.placeholder), t.splice(f(e, t))) : v("Cannot destroy an unknown player", "warn")
                },
                getPlayerMetadata: it,
                getPlayersByUUID: ft,
                progressEvents: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = yt.apply(void 0, e);
                    Object.keys(n).forEach(function(e) {
                        var t = n[e],
                            r = t.player,
                            i = t.removeEventListeners;
                        r.progressEventsUnsubscribe && r.progressEventsUnsubscribe.push(i)
                    })
                },
                renderDOMPlayers: function(e) {
                    void 0 === e && (e = document);
                    var t = p("vidyard-player-embed", "img", e);
                    M(t), E(t).forEach(dt), G()
                },
                renderPlayer: function(e) {
                    var t = e instanceof HTMLImageElement ? e : se(e);
                    return ce(t).then(mt).catch(function(e) {
                        return v(ae.errors.placeholder, "warn")
                    })
                }
            },
            integrations: new function() {
                var e = this,
                    t = !1,
                    n = {};
                this.updatePlayer = function(e) {
                    if (e._tmpOrg && e.iframe) {
                        var t = e._tmpOrg.orgId;
                        n[t] || (n[t] = {
                            foundIntegrations: {},
                            id: t,
                            integrations: e._tmpOrg,
                            players: []
                        }), e.org = n[t];
                        for (var r = 0, i = n[t].players; r < i.length; r++)
                            if (i[r].iframe === e.iframe) return;
                        n[t].players.push(e);
                        var o = e.org.integrations,
                            a = o.eloqua,
                            u = o.eloquaFirstPartyDomain;
                        a && (null !== e.status && e.status.consent ? m(a, u) : e.on("status", function t() {
                            e.status.consent && (m(a, u), e.off("status", t))
                        })), p()
                    }
                }, this.safelyCommunicateIntegration = function(e, t, n) {
                    void 0 !== e.org && void 0 !== n && null !== n && !r(e, t) && u(e, t, n) && (e.org = o(e.org, t, e.uuid))
                }, this.addKnownVisitor = function(e, t, n) {
                    if (n)
                        for (var r = 0, i = n.players; r < i.length; r++) {
                            var o = i[r];
                            d(o, e, t)
                        }
                }, this.getCookie = function(e, t) {
                    var n = document.cookie.split(";");
                    if ("eloqua" === e && "function" == typeof window.GetElqCustomerGUID) return window.GetElqCustomerGUID();
                    for (var r = h(z[H.indexOf(e)], t), i = 0, o = n; i < o.length; i++) {
                        var a = o[i],
                            u = a.indexOf("="),
                            c = a.substr(0, u).replace(/^\s+|\s+$/g, ""),
                            s = a.substr(u + 1);
                        if (c === r) return decodeURIComponent(s)
                    }
                };
                var r = function(e, t) {
                        return e.org && e.org.foundIntegrations && e.org.foundIntegrations[t] && e.org.foundIntegrations[t].sentPlayers && -1 !== f(e.uuid, e.org.foundIntegrations[t].sentPlayers)
                    },
                    i = function(e, t) {
                        return e.foundIntegrations[t] || (e.foundIntegrations[t] = {
                            externalIdentifier: null,
                            sentPlayers: []
                        }), e
                    },
                    o = function(e, t, n) {
                        return (e = i(e, t)).foundIntegrations[t].sentPlayers.push(n), e
                    },
                    a = function(e, t, n) {
                        return (e = i(e, t)).foundIntegrations[t].externalIdentifier = n, e
                    },
                    u = function(e, t, n) {
                        if (!e.ready()) return !1;
                        var r = {
                            data: {
                                type: t,
                                value: n
                            },
                            event: "associateVisitor",
                            uuid: e.uuid
                        };
                        return v("IntegrationsWatcher.communicateIntegration " + r, "debug"), q(r, "https://" + U(), e.iframe), !0
                    },
                    c = function(t, n, r) {
                        if (void 0 !== t && void 0 !== r && null !== r)
                            for (var i = 0, o = t; i < o.length; i++) {
                                var a = o[i];
                                e.safelyCommunicateIntegration(a, n, r)
                            }
                    },
                    l = function(e, t, n) {
                        var r = {
                            data: {
                                type: t,
                                value: n
                            },
                            event: "identifyVisitor",
                            uuid: e.uuid
                        };
                        q(r, "https://" + U(), e.iframe)
                    },
                    d = function(e, t, n) {
                        e.ready() ? l(e, t, n) : e.on("ready", function() {
                            l(e, t, n)
                        })
                    },
                    p = function() {
                        for (var t = 0, r = H; t < r.length; t++) {
                            var i = r[t];
                            for (var o in n)
                                if (n.hasOwnProperty(o)) {
                                    var u = n[o];
                                    if (!u.integrations[i]) continue;
                                    var s = e.getCookie(i, u);
                                    if (!s) continue;
                                    if (!(s = y(i, s, u))) continue;
                                    u = a(u, i, s), c(u.players, i, s)
                                }
                        }
                    },
                    h = function(e, t) {
                        return "pardot" === e && t && t.integrations.pardot ? "visitor_id" + t.integrations.pardot : e
                    },
                    y = function(e, t, n) {
                        if ("marketo" === e) {
                            if (!n.integrations.marketo || -1 === t.toLowerCase().indexOf(n.integrations.marketo.toLowerCase())) return null;
                            t = encodeURIComponent(t)
                        }
                        return t
                    },
                    m = function(e, n) {
                        if (!t) {
                            t = !0;
                            var r = function() {
                                if (!document.getElementById("vidyard-eloqua-include")) {
                                    window._elqQ = window._elqQ || [], window._elqQ.push(["elqSetSiteId", e]), n && window._elqQ.push(["elqUseFirstPartyCookie", n]), window._elqQ.push(["elqTrackPageView"]), window._elqQ.push(["elqGetCustomerGUID"]);
                                    var t = document.createElement("script");
                                    t.id = "vidyard-eloqua-include", t.type = "text/javascript", t.async = !0, t.src = "https://img.en25.com/i/elqCfg.min.js";
                                    var r = document.getElementsByTagName("script")[0];
                                    r.parentNode.insertBefore(t, r)
                                }
                            };
                            "complete" === document.readyState ? r() : s("DOMContentLoaded", "onload", r)
                        }
                    };
                setInterval(function() {
                    p()
                }, 1e3)
            },
            jsonp: {},
            playerReadyListeners: {
                undefined: []
            },
            players: [],
            preloadLinks: []
        },
        bt = {
            _players: {},
            players: function() {
                return window.VidyardV4.players.reduce(function(e, t) {
                    return e[t.uuid] = t, e
                }, {})
            }
        },
        wt = (n(12), n(2));
    var xt = function(e) {
            return void 0 === e && (e = ""), e.match(T)
        },
        kt = function(e) {
            var t = e.error,
                n = e.filename,
                r = e.message,
                i = e.timeStamp,
                o = e.type;
            if (xt(n)) {
                var a = function(e) {
                    var t = e.error,
                        n = e.location,
                        r = e.message,
                        i = e.navigator,
                        o = e.timeStamp,
                        a = e.type,
                        u = e.vyGlobal;
                    return {
                        data: {
                            body: {
                                trace: {
                                    exception: {
                                        class: t.name,
                                        message: r
                                    },
                                    frames: wt.parse(t).map(function(e) {
                                        return {
                                            code: e.source,
                                            colno: e.columnNumber,
                                            filename: e.fileName,
                                            lineno: e.lineNumber,
                                            method: e.functionName
                                        }
                                    })
                                }
                            },
                            client: {
                                cpu: i.platform,
                                javascript: {
                                    browser: i.userAgent,
                                    guess_uncaught_frames: !0,
                                    source_map_enabled: !0
                                }
                            },
                            code_version: L,
                            custom: {
                                jsonpRequests: Object.keys(u.jsonp),
                                playbackUrlOverride: window.VIDYARD_PLAYBACK_URL,
                                players: u.players.map(function(e) {
                                    return {
                                        iframe: e.iframe ? {
                                            src: e.iframe.src
                                        } : {},
                                        metadata: e.metadata,
                                        org: e.org ? {
                                            id: e.org.id,
                                            foundIntegrations: e.org.foundIntegrations
                                        } : {},
                                        uuid: e.uuid
                                    }
                                }),
                                preloadLinks: u.preloadLinks
                            },
                            environment: U(),
                            fingerprint: t.name,
                            language: "javascript",
                            level: a,
                            platform: "browser",
                            request: {
                                query_string: n.search,
                                url: n.href
                            },
                            timestamp: o
                        }
                    }
                }({
                    error: t,
                    location: window.location,
                    message: r,
                    navigator: window.navigator,
                    timeStamp: i,
                    type: o,
                    vyGlobal: window.VidyardV4
                });
                C({
                    endpoint: "https://" + U() + "/v4/error",
                    method: "POST",
                    payload: a
                }).then(function(e) {
                    return v("Error logged " + e)
                }, function(e) {
                    return v("Error log failed " + e)
                })
            }
        };
    n.d(t, "_debug", function() {
        return Et
    }), n.d(t, "api", function() {
        return _t
    }), n.d(t, "players", function() {
        return Ct
    }), s("error", "onerror", kt, window), s("unhandledrejection", "", function(e) {
        var t = e.reason,
            n = e.timeStamp,
            r = e.type;
        e.reason instanceof Error && xt(t.stack) && (e.preventDefault(), kt({
            error: t,
            filename: t.stack,
            message: t.message,
            timeStamp: n,
            type: r
        }))
    });
    var Et = gt._debug,
        _t = gt.api,
        Ct = gt.players;
    switch (window.VidyardV4 = window.VidyardV4 || gt, window.Vidyard = window.Vidyard || bt, document.readyState) {
        case "complete":
            _t.renderDOMPlayers();
            break;
        case "interactive":
            M(), s("load", "onload", function() {
                return _t.renderDOMPlayers()
            }, window);
            break;
        default:
            s("load", "onload", function() {
                return _t.renderDOMPlayers()
            }, window)
    }
    t.default = gt
}, function(e, t, n) {
    var r, i, o;
    ! function(n, a) {
        "use strict";
        i = [], void 0 === (o = "function" == typeof(r = function() {
            function e(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }

            function t(e) {
                return e.charAt(0).toUpperCase() + e.substring(1)
            }

            function n(e) {
                return function() {
                    return this[e]
                }
            }
            var r = ["isConstructor", "isEval", "isNative", "isToplevel"],
                i = ["columnNumber", "lineNumber"],
                o = ["fileName", "functionName", "source"],
                a = r.concat(i, o, ["args"]);

            function u(e) {
                if (e instanceof Object)
                    for (var n = 0; n < a.length; n++) e.hasOwnProperty(a[n]) && void 0 !== e[a[n]] && this["set" + t(a[n])](e[a[n]])
            }
            u.prototype = {
                getArgs: function() {
                    return this.args
                },
                setArgs: function(e) {
                    if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                    this.args = e
                },
                getEvalOrigin: function() {
                    return this.evalOrigin
                },
                setEvalOrigin: function(e) {
                    if (e instanceof u) this.evalOrigin = e;
                    else {
                        if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                        this.evalOrigin = new u(e)
                    }
                },
                toString: function() {
                    var t = this.getFunctionName() || "{anonymous}",
                        n = "(" + (this.getArgs() || []).join(",") + ")",
                        r = this.getFileName() ? "@" + this.getFileName() : "",
                        i = e(this.getLineNumber()) ? ":" + this.getLineNumber() : "",
                        o = e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "";
                    return t + n + r + i + o
                }
            };
            for (var c = 0; c < r.length; c++) u.prototype["get" + t(r[c])] = n(r[c]), u.prototype["set" + t(r[c])] = function(e) {
                return function(t) {
                    this[e] = Boolean(t)
                }
            }(r[c]);
            for (var s = 0; s < i.length; s++) u.prototype["get" + t(i[s])] = n(i[s]), u.prototype["set" + t(i[s])] = function(t) {
                return function(n) {
                    if (!e(n)) throw new TypeError(t + " must be a Number");
                    this[t] = Number(n)
                }
            }(i[s]);
            for (var l = 0; l < o.length; l++) u.prototype["get" + t(o[l])] = n(o[l]), u.prototype["set" + t(o[l])] = function(e) {
                return function(t) {
                    this[e] = String(t)
                }
            }(o[l]);
            return u
        }) ? r.apply(t, i) : r) || (e.exports = o)
    }()
}, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var i, o = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t
            }).replace(/^'(.*)'$/, function(e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
}, function(e, t, n) {
    var r, i, o = {},
        a = (r = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === i && (i = r.apply(this, arguments)), i
        }),
        u = function(e) {
            var t = {};
            return function(e) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var n = function(e) {
                        return document.querySelector(e)
                    }.call(this, e);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (e) {
                        n = null
                    }
                    t[e] = n
                }
                return t[e]
            }
        }(),
        c = null,
        s = 0,
        l = [],
        d = n(8);

    function f(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = o[r.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) i.parts.push(g(r.parts[a], t))
            } else {
                var u = [];
                for (a = 0; a < r.parts.length; a++) u.push(g(r.parts[a], t));
                o[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: u
                }
            }
        }
    }

    function p(e, t) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
            var o = e[i],
                a = t.base ? o[0] + t.base : o[0],
                u = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
            r[a] ? r[a].parts.push(u) : n.push(r[a] = {
                id: a,
                parts: [u]
            })
        }
        return n
    }

    function h(e, t) {
        var n = u(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = l[l.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), l.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = u(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, i)
        }
    }

    function v(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = l.indexOf(e);
        t >= 0 && l.splice(t, 1)
    }

    function y(e) {
        var t = document.createElement("style");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), m(t, e.attrs), h(e, t), t
    }

    function m(e, t) {
        Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n])
        })
    }

    function g(e, t) {
        var n, r, i, o;
        if (t.transform && e.css) {
            if (!(o = t.transform(e.css))) return function() {};
            e.css = o
        }
        if (t.singleton) {
            var a = s++;
            n = c || (c = y(t)), r = x.bind(null, n, a, !1), i = x.bind(null, n, a, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), h(e, t), t
        }(t), r = function(e, t, n) {
            var r = n.css,
                i = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && i;
            (t.convertToAbsoluteUrls || o) && (r = d(r));
            i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                u = e.href;
            e.href = URL.createObjectURL(a), u && URL.revokeObjectURL(u)
        }.bind(null, n, t), i = function() {
            v(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = y(t), r = function(e, t) {
            var n = t.css,
                r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), i = function() {
            v(n)
        });
        return r(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else i()
            }
    }
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = p(e, t);
        return f(n, t),
            function(e) {
                for (var r = [], i = 0; i < n.length; i++) {
                    var a = n[i];
                    (u = o[a.id]).refs--, r.push(u)
                }
                e && f(p(e, t), t);
                for (i = 0; i < r.length; i++) {
                    var u;
                    if (0 === (u = r[i]).refs) {
                        for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                        delete o[u.id]
                    }
                }
            }
    };
    var b, w = (b = [], function(e, t) {
        return b[e] = t, b.filter(Boolean).join("\n")
    });

    function x(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = w(t, i);
        else {
            var o = document.createTextNode(i),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var n = function(e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var i = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            o = r.sources.map(function(e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            });
                        return [n].concat(o).concat([i]).join("\n")
                    }
                    var a;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
            }).join("")
        }, t.i = function(e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var a = e[i];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
            }
        }, t
    }
}, function(e, t, n) {
    (e.exports = n(10)(!1)).push([e.i, '.vidyard-player-container .play-button{position:absolute;width:16%;height:auto;border-radius:50%;border:none;cursor:pointer;opacity:.65;filter:alpha(opacity = 65);transition:opacity .2s linear;overflow:hidden;font-size:0;padding:0;min-width:20px;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-appearance:initial!important;-moz-appearance:initial!important;appearance:initial!important}.vidyard-player-container .play-button .play-button-size{padding-top:100%;width:100%}.vidyard-player-container .play-button .arrow-size{position:absolute;top:50%;left:50%;width:35%;height:auto;margin:-25% 0 0 -12%;overflow:hidden}.vidyard-player-container .play-button .arrow-size-ratio{padding-top:150%;width:100%}.vidyard-player-container .play-button .arrow{position:absolute;top:50%;left:auto;right:0;bottom:auto;width:0;height:0;margin:-200px 0 -200px -300px;border:200px solid transparent;border-left:300px solid #fff;border-right:none}.vidyard-lightbox-thumbnail:hover .play-button{opacity:1;filter:alpha(opacity = 100);zoom:1}.vidyard-player-container{position:relative;height:100%;text-align:center}.vidyard-player-container img{height:100%}.vidyard-player-container .play-button{display:none}.vidyard-close-container{position:fixed;right:20px;top:20px;height:34px;width:34px;cursor:pointer;z-index:1000}.vidyard-close-container:focus{outline:1px dotted grey}.vidyard-close-x{position:absolute;height:100%;width:100%;color:#fff;font-size:2em;text-align:center;line-height:34px}.vidyard-close-x:hover{color:#ddd}.vidyard-close-x:hover:after,.vidyard-close-x:hover:before{background:#ddd}.vidyard-close-x:after,.vidyard-close-x:before{content:"";position:absolute;background:#fff;display:block;left:50%;top:50%;height:65%;width:2px;transition:all .2s;-ms-high-contrast-adjust:none}.vidyard-close-x:before{transform:translate(-50%,-50%) rotate(45deg);-ms-transform:translate(-50%,-50%) rotate(45deg)}.vidyard-close-x:after{transform:translate(-50%,-50%) rotate(-45deg);-ms-transform:translate(-50%,-50%) rotate(-45deg)}.vidyard-close-x.simple-close:after,.vidyard-close-x.simple-close:before{display:none}.vidyard-lightbox-thumbnail{width:100%;height:100%;margin:auto}.vidyard-lightbox-image{height:100%;left:0;position:absolute;top:0;width:100%}.vidyard-lightbox-centering{cursor:pointer;height:0;max-width:100%;overflow:hidden;padding-bottom:56.25%;position:relative}.vidyard-lightbox-content-backer{-webkit-transform:opacity 1s,filter 1s;-ms-transform:opacity 1s,filter 1s;transition:opacity 1s,filter 1s;background-color:#000;height:100%;width:100%;position:absolute}#vidyard-overlay-wrapper,.vidyard-lightbox-content-backer{filter:alpha(opacity = 0);opacity:0;top:0;right:0;bottom:0;left:0}#vidyard-overlay-wrapper{position:relative;box-sizing:border-box;display:none;transition:opacity .5s,filter .5s}#vidyard-overlay{top:0;right:0;bottom:0;left:0;opacity:.9;filter:alpha(opacity = 90);width:100%;height:100%;background-color:#000;z-index:800}#vidyard-content-fixed,#vidyard-overlay{position:fixed;box-sizing:border-box;display:none}#vidyard-content-fixed{opacity:1;z-index:900;text-align:center;top:5%;right:5%;bottom:5%;left:5%;width:90%}#vidyard-popbox{display:inline-block;position:absolute;left:50%;top:50%;-webit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#vidyard-popbox-constraint{opacity:0;filter:alpha(opacity = 0);display:block;visibility:hidden}#vidyard-popbox-constraint.landscape{height:90vh}#vidyard-popbox-constraint.portrait{width:90vw}.vidyard-player-container div[class^=vidyard-iframe-]{z-index:1}.vidyard-player-container div[class^=vidyard-div-]{background-repeat:no-repeat;background-position:0 50%;background-size:100%}img.vidyard-player-embed{width:100%}img.vidyard-player-embed.inserted{position:absolute;top:0;left:0;z-index:0;max-width:100%!important}.vidyard-player-container.playlist-open{padding-right:319px;width:auto!important}.vidyard-player-container.playlist-open div[class^=vidyard-div-]{width:calc(100% + 319px);max-width:calc(100% + 319px)!important;background-size:calc(100% - 319px);background-color:#f5f9ff}.vidyard-player-container.playlist-open div[class^=vidyard-div-] img.vidyard-player-embed{width:calc(100% - 319px)!important}#backlink-icon{height:15px;width:15px;margin-right:6px;transition:.3s}#backlink{align-items:center;border-radius:4px;border:3px solid #ebeeff;display:inline-block;float:left;line-height:18px;margin:8px 0 0;outline:none;padding:1px 8px 1px 5px;position:relative;*zoom:1;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;font-weight:400;font-size:12px;text-decoration:none}#backlink:after,#backlink:before{content:" ";display:table}#backlink:after{clear:both}#backlink:link,#backlink:visited{background:#ebeeff;border-color:#ebeeff;color:#414dd4}#backlink:hover{background:#bfc2ff;color:#1b1a82;cursor:pointer}#backlink:focus,#backlink:hover{border-color:#bfc2ff}#backlink:active{background:#8f97ff;border-color:#8f97ff;color:#0c084d}#backlink-icon{float:left;height:18px;margin-right:5px;position:relative;width:18px}#backlink-text{float:left}', ""])
}, function(e, t, n) {
    var r = n(11);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(9)(r, i);
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    "use strict";
    var r = function(e) {
            return 1 === e.nodeType && "body" !== e.tagName.toLowerCase() && "html" !== e.tagName.toLowerCase()
        },
        i = function(e) {
            return 1 === e.nodeType && "script" !== e.tagName.toLowerCase()
        },
        o = function(e, t) {
            return e.concat(t)
        };

    function a(e) {
        return function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                r = t.previousSibling;
            return r ? (n.push(r), e(r, n)) : n
        }(e).concat(function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                r = t.nextSibling;
            return r ? (n.push(r), e(r, n)) : n
        }(e)).filter(i)
    }

    function u(e) {
        return function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                r = t.parentNode;
            return r ? (n.push(r), e(r, n)) : n
        }(e).filter(r)
    }
    e.exports = {
        getSiblings: a,
        getAncestors: u,
        getSiblingsOfAncestors: function(e) {
            return u(e).map(function(e) {
                return a(e)
            }).reduce(o, [])
        }
    }
}, function(e, t, n) {
    (function(t) {
        var n = t.CustomEvent;
        e.exports = function() {
            try {
                var e = new n("cat", {
                    detail: {
                        foo: "bar"
                    }
                });
                return "cat" === e.type && "bar" === e.detail.foo
            } catch (e) {}
            return !1
        }() ? n : "undefined" != typeof document && "function" == typeof document.createEvent ? function(e, t) {
            var n = document.createEvent("CustomEvent");
            return t ? n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail) : n.initCustomEvent(e, !1, !1, void 0), n
        } : function(e, t) {
            var n = document.createEventObject();
            return n.type = e, t ? (n.bubbles = Boolean(t.bubbles), n.cancelable = Boolean(t.cancelable), n.detail = t.detail) : (n.bubbles = !1, n.cancelable = !1, n.detail = void 0), n
        }
    }).call(this, n(0))
}, , function(e, t) {
    var n, r, i = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function u(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var c, s = [],
        l = !1,
        d = -1;

    function f() {
        l && c && (l = !1, c.length ? s = c.concat(s) : d = -1, s.length && p())
    }

    function p() {
        if (!l) {
            var e = u(f);
            l = !0;
            for (var t = s.length; t;) {
                for (c = s, s = []; ++d < t;) c && c[d].run();
                d = -1, t = s.length
            }
            c = null, l = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function v() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new h(e, t)), 1 !== s.length || l || u(p)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(e) {
        return []
    }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, n) {
            "use strict";
            if (!e.setImmediate) {
                var r, i, o, a, u, c = 1,
                    s = {},
                    l = !1,
                    d = e.document,
                    f = Object.getPrototypeOf && Object.getPrototypeOf(e);
                f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                    t.nextTick(function() {
                        h(e)
                    })
                } : ! function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            n = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
                    h(e.data)
                }, r = function(e) {
                    o.port2.postMessage(e)
                }) : d && "onreadystatechange" in d.createElement("script") ? (i = d.documentElement, r = function(e) {
                    var t = d.createElement("script");
                    t.onreadystatechange = function() {
                        h(e), t.onreadystatechange = null, i.removeChild(t), t = null
                    }, i.appendChild(t)
                }) : r = function(e) {
                    setTimeout(h, 0, e)
                } : (a = "setImmediate$" + Math.random() + "$", u = function(t) {
                    t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && h(+t.data.slice(a.length))
                }, e.addEventListener ? e.addEventListener("message", u, !1) : e.attachEvent("onmessage", u), r = function(t) {
                    e.postMessage(a + t, "*")
                }), f.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var i = {
                        callback: e,
                        args: t
                    };
                    return s[c] = i, r(c), c++
                }, f.clearImmediate = p
            }

            function p(e) {
                delete s[e]
            }

            function h(e) {
                if (l) setTimeout(h, 0, e);
                else {
                    var t = s[e];
                    if (t) {
                        l = !0;
                        try {
                            ! function(e) {
                                var t = e.callback,
                                    r = e.args;
                                switch (r.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(r[0]);
                                        break;
                                    case 2:
                                        t(r[0], r[1]);
                                        break;
                                    case 3:
                                        t(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        t.apply(n, r)
                                }
                            }(t)
                        } finally {
                            p(e), l = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, n(0), n(16))
}, function(e, t, n) {
    (function(e) {
        var r = void 0 !== e && e || "undefined" != typeof self && self || window,
            i = Function.prototype.apply;

        function o(e, t) {
            this._id = e, this._clearFn = t
        }
        t.setTimeout = function() {
            return new o(i.call(setTimeout, r, arguments), clearTimeout)
        }, t.setInterval = function() {
            return new o(i.call(setInterval, r, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
            this._clearFn.call(r, this._id)
        }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }, n(17), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(this, n(0))
}]);
//# sourceMappingURL=https://play.vidyard.com/embed/v4.js.map