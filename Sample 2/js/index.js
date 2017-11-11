
var WIDTH = 1800; //px

//data line styling
var LINE_WIDTH = 2; //px
var POINT_SPACING = 100; //number of points in the graph. less = more. not pixels(?)

//intro stuff
var DATA_SWIPE_RIGHT = 1000; //ms 

var DATA_FADE_OPACITY = 0; //0 = 100% opacity
var DATA_FADE_START_TIME = 1000; //ms

//grid stuff
var GRIDLINE_COLOR = "200, 200, 200"; //rgb string
var GRIDLINE_OPACITY = .65; //0 = 0% opacity
var GRIDLINES = 9;
var GRIDLINE_FADE_START = 500; //ms
var GRIDLINE_FADE = 500; //ms
var GRIDLINE_FADE_DIFF = 0; //0 = 100% opacity
var GRIDLINE_SPACING = 70; //ms
var GRIDLINE_FULL_WIDTH = 2500; //ms
 function lg(e) {

 }! function(e, t) {
     "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
         if (!e.document) throw new Error("jQuery requires a window with a document");
         return t(e)
     } : t(e)
 }("undefined" != typeof window ? window : this, function(e, t) {
     function n(e) {
         var t = e.length,
             n = rt.type(e);
         return "function" === n || rt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
     }

     function r(e, t) {
         do e = e[t]; while (e && 1 !== e.nodeType);
         return e
     }

     function o(e) {
         var t = wt[e] = {};
         return rt.each(e.match(bt) || [], function(e, n) {
             t[n] = !0
         }), t
     }

     function s() {
         ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (ft.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
     }

     function a() {
         (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (s(), rt.ready())
     }

     function c(e, t, n, i) {
         if (rt.acceptData(e)) {
             var r, o, s = rt.expando,
                 a = e.nodeType,
                 l = a ? rt.cache : e,
                 u = a ? e[s] : e[s] && s;
             if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = a ? e[s] = $.pop() || rt.guid++ : s), l[u] || (l[u] = a ? {} : {
                 "toJSON": rt.noop
             }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = rt.extend(l[u], t) : l[u].data = rt.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[rt.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[rt.camelCase(t)])) : r = o, r
         }
     }

     function d(e, t, n) {
         if (s[a]) {
             if (t && (i = n ? s[a] : s[a].data)) {
                 rt.isArray(t) ? t = t.concat(rt.map(t, rt.camelCase)) : t in i ? t = [t] : (t = rt.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                 for (; r--;) delete i[t[r]];
                 if (n ? !u(i) : !rt.isEmptyObject(i)) return
             }(n || (delete s[a].data, u(s[a]))) && (o ? rt.cleanData([e], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
         }
     }

     function h() {
         return !1
     }

     function k(e, t) {
         return {
             "get": function() {
                 var n = e();
                 if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
             }
         }
     }

     function C(e, t) {
         if (t in e) return t;
         for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = hn.length; r--;)
             if (t = hn[r] + n, t in e) return t;
         return i
     }

     function _(e, t, n) {
         var i = un.exec(t);
         return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
     }

     function D(e, t, n, i, r) {
         return new D.prototype.init(e, t, n, i, r)
     }


     function P(e, t, n) {
         var i, r, o, s, a, l, u, c, d = this,
             p = {},
             h = e.style,
             f = e.nodeType && Nt(e),
             m = rt._data(e, "fxshow");
         n.queue || (a = rt._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
             a.unqueued || l()
         }), a.unqueued++, d.always(function() {
             d.always(function() {
                 a.unqueued--, rt.queue(e, "fx").length || a.empty.fire()
             })
         })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = rt.css(e, "display"), c = "none" === u ? rt._data(e, "olddisplay") || A(e.nodeName) : u, "inline" === c && "none" === rt.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
             h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
         }));
     }

     function X(e) {
         return rt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
     }
     var $ = [],
         V = $.slice,
         Z = $.concat,
         Q = $.push,
         J = $.indexOf,
         K = {},
         et = K.toString,
         tt = K.hasOwnProperty,
         nt = {},
         it = "1.11.2",
         rt = function(e, t) {
             return new rt.fn.init(e, t)
         },
         ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
         st = /^-ms-/,
         at = /-([\da-z])/gi,
         lt = function(e, t) {
             return t.toUpperCase()
         };
     rt.fn = rt.prototype = {
         "jquery": it,
         "constructor": rt,
         "pushStack": function(e) {
             var t = rt.merge(this.constructor(), e);
             return t.prevObject = this, t.context = this.context, t
         },
         "each": function(e, t) {
             return rt.each(this, e, t)
         }
     }, rt.extend = rt.fn.extend = function() {
         var e, t, n, i, r, o, s = arguments[0] || {},
             a = 1,
             l = arguments.length,
             u = !1;
         for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
             if (null != (r = arguments[a]))
                 for (i in r) e = s[i], n = r[i], s !== n && (u && n && (rt.isPlainObject(n) || (t = rt.isArray(n))) ? (t ? (t = !1, o = e && rt.isArray(e) ? e : []) : o = e && rt.isPlainObject(e) ? e : {}, s[i] = rt.extend(u, o, n)) : void 0 !== n && (s[i] = n));
         return s
     }, rt.extend({
         "isFunction": function(e) {
             return "function" === rt.type(e)
         },
         "isArray": Array.isArray || function(e) {
             return "array" === rt.type(e)
         },
         "isWindow": function(e) {
             return null != e && e == e.window
         },
         "isNumeric": function(e) {
             return !rt.isArray(e) && e - parseFloat(e) + 1 >= 0
         },
         "isPlainObject": function(e) {
             var t;
             if (!e || "object" !== rt.type(e) || e.nodeType || rt.isWindow(e)) return !1;
             try {
                 if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
             } catch (n) {
                 return !1
             }
             if (nt.ownLast)
                 for (t in e) return tt.call(e, t);
             for (t in e);
             return void 0 === t || tt.call(e, t)
         },
         "type": function(e) {
             return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[et.call(e)] || "object" : typeof e
         },
         "camelCase": function(e) {
             return e.replace(st, "ms-").replace(at, lt)
         },
         "each": function(e, t, i) {
             var r, o = 0,
                 s = e.length,
                 a = n(e);
             if (i) {
                 if (a)
                     for (; s > o && (r = t.apply(e[o], i), r !== !1); o++);
                 else
                     for (o in e)
                         if (r = t.apply(e[o], i), r === !1) break
             } else if (a)
                 for (; s > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
             else
                 for (o in e)
                     if (r = t.call(e[o], o, e[o]), r === !1) break; return e
         },
         "makeArray": function(e, t) {
             var i = t || [];
             return null != e && (n(Object(e)) ? rt.merge(i, "string" == typeof e ? [e] : e) : Q.call(i, e)), i
         },
         "merge": function(e, t) {
             for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
             if (n !== n)
                 for (; void 0 !== t[i];) e[r++] = t[i++];
             return e.length = r, e
         },
         "guid": 1
     }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
         K["[object " + t + "]"] = t.toLowerCase()
     });
     var ut = /*! * Sizzle CSS Selector Engine v2.2.0-pre * http://sizzlejs.com/ * * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors * Released under the MIT license * http://jquery.org/license * * Date: 2014-12-16 */ function(e) {
         function t(e, t, n, i) {
             var r, o, s, a, l, u, d, h, f, m;
         }

         function o(e, t) {
             for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t
         }

         var w, T, x, E, S, A, k, C, N, _, I, L, D, M, R, O, P, H, F, j = "sizzle" + 1 * new Date,
             ft = {
                 "bool": new RegExp("^(?:" + tt + ")$", "i"),
             },
             vt = /^[^{]+\{\s*\[native \w/,
             yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;

         T = t.support = {}, S = t.isXML = function(e) {
             var t = e && (e.ownerDocument || e).documentElement;
             return t ? "HTML" !== t.nodeName : !1
         }, L = t.setDocument = function(e) {
             var t, n, i = e ? e.ownerDocument || e : B;
             return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, M = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Et, !1) : n.attachEvent && n.attachEvent("onunload", Et)), R = !S(i), T.attributes = r(function(e) {
                 return e.className = "i", !e.getAttribute("className")
             }), x.find.TAG = T.getElementsByTagName ? function(e, t) {
                 return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
             } : function(e, t) {
                 var n, i = [],
                     r = 0,
                     o = t.getElementsByTagName(e);
                 if ("*" === e) {
                     for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                     return i
                 }
                 return o
             }, P = [], O = [], (T.qsa = vt.test(i.querySelectorAll)) && (r(function(e) {
                 M.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + j + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + j + "+*").length || O.push(".#.+[+~]")
             })), (T.matchesSelector = vt.test(H = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(e) {
                 T.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), P.push("!=", st)
             }), O = O.length && new RegExp(O.join("|")), P = P.length && new RegExp(P.join("|")), t = vt.test(M.compareDocumentPosition), F = t || vt.test(M.contains) ? function(e, t) {
                 var n = 9 === e.nodeType ? e.documentElement : e,
                     i = t && t.parentNode;
                 return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
             } : function(e, t) {
                 if (t)
                     for (; t = t.parentNode;)
                         if (t === e) return !0;
                 return !1
             }, Y = t ? function(e, t) {
                 if (e === t) return I = !0, 0;
                 var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                 return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === B && F(B, e) ? -1 : t === i || t.ownerDocument === B && F(B, t) ? 1 : _ ? et(_, e) - et(_, t) : 0 : 4 & n ? -1 : 1)
             } : function(e, t) {
                 if (e === t) return I = !0, 0;
                 var n, r = 0,
                     o = e.parentNode,
                     a = t.parentNode,
                     l = [e],
                     u = [t];
                 if (!o || !a) return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : _ ? et(_, e) - et(_, t) : 0;
                 if (o === a) return s(e, t);
                 for (n = e; n = n.parentNode;) l.unshift(n);
                 for (n = t; n = n.parentNode;) u.unshift(n);
                 for (; l[r] === u[r];) r++;
                 return r ? s(l[r], u[r]) : l[r] === B ? -1 : u[r] === B ? 1 : 0
             }, i) : D
         }, x = t.selectors = {
             "match": ft,
             "attrHandle": {},
             "find": {}
         };

         return d.prototype = x.filters = x.pseudos, x.setFilters = new d, A = t.tokenize = function(e, n) {}, T.attributes && r(function(e) {
             return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
         }) || o("value", function(e, t, n) {
             return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
         }), r(function(e) {
             return null == e.getAttribute("disabled");
             return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
         }), t
     }(e);
     rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;

     rt.filter = function(e, t, n) {
         var i = t[0];
     }, rt.fn.extend({
         "find": function(e) {
             var t, n = [],
                 i = this,
                 r = i.length;
             if ("string" != typeof e) return this.pushStack(rt(e).filter(function() {
                 for (t = 0; r > t; t++)
                     if (rt.contains(i[t], this)) return !0
             }));
             for (t = 0; r > t; t++) rt.find(e, i[t], n);
             return n = this.pushStack(r > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
         }
     });
     var ht, ft = e.document,
         mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
         gt = rt.fn.init = function(e, t) {
             var n, i;
             if (!e) return this;
             if ("string" == typeof e) {
                 if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
                 if (i = ft.getElementById(n[2]), i && i.parentNode) {
                     if (i.id !== n[2]) return ht.find(e);
                     this.length = 1, this[0] = i
                 }
                 return this.context = ft, this.selector = e, this
             }
             return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : rt.isFunction(e) ? "undefined" != typeof ht.ready ? ht.ready(e) : e(rt) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), rt.makeArray(e, this))
         };
     gt.prototype = rt.fn, ht = rt(ft);
     rt.extend({
         "dir": function(e, t, n) {
             for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
             return i
         },
         "sibling": function(e, t) {
             for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
             return n
         }
     }, function(e, t) {
         rt.fn[e] = function(n, i) {
             var r = rt.map(this, t, n);
             return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = rt.filter(i, r)), this.length > 1 && (yt[e] || (r = rt.unique(r)), vt.test(e) && (r = r.reverse())), this.pushStack(r)
         }
     });
     var bt = /\S+/g,
         wt = {};
     rt.Callbacks = function(e) {
         e = "string" == typeof e ? wt[e] || o(e) : rt.extend({}, e);
         var t, n, i, r, s, a, l = [],
             u = !e.once && [],
             c = function(o) {
                 for (n = e.memory && o, i = !0, s = a || 0, a = 0, r = l.length, t = !0; l && r > s; s++)
                     if (l[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                         n = !1;
                         break
                     }
                 t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
             },
             d = {
                 "add": function() {
                     if (l) {
                         var i = l.length;
                         ! function o(t) {
                             rt.each(t, function(t, n) {
                                 var i = rt.type(n);
                                 "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                             })
                         }(arguments), t ? r = l.length : n && (a = i, c(n))
                     }
                     return this
                 },
                 "fireWith": function(e, n) {
                     return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                 }
             };
         return d
     }, rt.extend({
         "Deferred": function(e) {
             var t = [
                     ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                     ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                     ["notify", "progress", rt.Callbacks("memory")]
                 ],
                 n = "pending",
                 i = {
                     "state": function() {
                         return n
                     },
                     "always": function() {
                         return r.done(arguments).fail(arguments), this
                     },
                     "then": function() {
                         var e = arguments;
                         return rt.Deferred(function(n) {
                             rt.each(t, function(t, o) {
                                 var s = rt.isFunction(e[t]) && e[t];
                                 r[o[1]](function() {
                                     var e = s && s.apply(this, arguments);
                                     e && rt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                 })
                             }), e = null
                         }).promise()
                     },
                     "promise": function(e) {
                         return null != e ? rt.extend(e, i) : i
                     }
                 },
                 r = {};
             return i.pipe = i.then, rt.each(t, function(e, o) {
                 var s = o[2],
                     a = o[3];
                 i[o[1]] = s.add, a && s.add(function() {
                     n = a
                 }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                     return r[o[0] + "With"](this === r ? i : this, arguments), this
                 }, r[o[0] + "With"] = s.fireWith
             }), i.promise(r), e && e.call(r, r), r
         }
     });
     var Tt;
     rt.fn.ready = function(e) {
         return rt.ready.promise().done(e), this
     }, rt.extend({
         "isReady": !1,
         "readyWait": 1,
         "holdReady": function(e) {
             e ? rt.readyWait++ : rt.ready(!0)
         },
         "ready": function(e) {
             if (e === !0 ? !--rt.readyWait : !rt.isReady) {
                 if (!ft.body) return setTimeout(rt.ready);
                 rt.isReady = !0, e !== !0 && --rt.readyWait > 0 || (Tt.resolveWith(ft, [rt]), rt.fn.triggerHandler && (rt(ft).triggerHandler("ready"), rt(ft).off("ready")))
             }
         }
     }), rt.ready.promise = function(t) {
         if (!Tt)
             if (Tt = rt.Deferred(), "complete" === ft.readyState) setTimeout(rt.ready);
             else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1);
         else {
             ft.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
             var n = !1;
             try {
                 n = null == e.frameElement && ft.documentElement
             } catch (i) {}
             n && n.doScroll && ! function r() {
                 if (!rt.isReady) {
                     try {
                         n.doScroll("left")
                     } catch (e) {
                         return setTimeout(r, 50)
                     }
                     s(), rt.ready()
                 }
             }()
         }
         return Tt.promise(t)
     };
     var xt, Et = "undefined";
     nt.ownLast = "0" !== xt, nt.inlineBlockNeedsLayout = !1, rt(function() {
             var e, t, n, i;
             n = ft.getElementsByTagName("body")[0], n && n.style && (t = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Et && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
         }),
         function() {
             var e = ft.createElement("div");
             if (null == nt.deleteExpando) {
                 nt.deleteExpando = !0;
                 try {
                     delete e.test
                 } catch (t) {
                     nt.deleteExpando = !1
                 }
             }
             e = null
         }(), rt.acceptData = function(e) {
             var t = rt.noData[(e.nodeName + " ").toLowerCase()],
                 n = +e.nodeType || 1;
             return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
         };
     rt.extend({
         "cache": {},
         "noData": {
             "applet ": !0,
             "embed ": !0
         },
         "_data": function(e, t, n) {
             return c(e, t, n, !0)
         }
     });
     var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
         Ct = ["Top", "Right", "Bottom", "Left"],
         Nt = function(e, t) {
             return e = t || e, "none" === rt.css(e, "display") || !rt.contains(e.ownerDocument, e)
         },
         _t = rt.access = function(e, t, n, i, r, o, s) {
             var a = 0,
                 l = e.length,
                 u = null == n;
             if ("object" === rt.type(n)) {
                 r = !0;
                 for (a in n) rt.access(e, t, a, n[a], !0, o, s)
             } else if (void 0 !== i && (r = !0, rt.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                     return u.call(rt(e), n)
                 })), t))
                 for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
             return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
         },
         It = /^(?:checkbox|radio)$/i;
     var Lt = /^(?:input|select|textarea)$/i,
         Dt = /^key/,
         Mt = /^(?:mouse|pointer|contextmenu)|click/,
         Rt = /^(?:focusinfocus|focusoutblur)$/,
         Ot = /^([^.]*)(?:\.(.+)|)$/;
     rt.event = {
         "global": {},
         "add": function(e, t, n, i, r) {
             var o, s, a, l, u, c, d, p, h, f, m, g = rt._data(e);
             if (g) {
                 for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = rt.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                         return typeof rt === Et || e && rt.event.triggered === e.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
                     }, c.elem = e), t = (t || "").match(bt) || [""], a = t.length; a--;) o = Ot.exec(t[a]) || [], h = m = o[1], f = (o[2] || "").split(".").sort(), h && (u = rt.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = rt.event.special[h] || {}, d = rt.extend({
                     "type": h,
                     "origType": m,
                     "data": i,
                     "handler": n,
                     "guid": n.guid,
                     "selector": r,
                     "needsContext": r && rt.expr.match.needsContext.test(r),
                     "namespace": f.join(".")
                 }, l), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, f, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), rt.event.global[h] = !0);
                 e = null
             }
         },
         "dispatch": function(e) {
             e = rt.event.fix(e);
             var t, n, i, r, o, s = [],
                 a = V.call(arguments),
                 l = (rt._data(this, "events") || {})[e.type] || [],
                 u = rt.event.special[e.type] || {};
             if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                 for (s = rt.event.handlers.call(this, e, l), t = 0;
                     (r = s[t++]);)
                     for (e.currentTarget = r.elem, o = 0;
                         (i = r.handlers[o++]);)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                 return u.postDispatch && u.postDispatch.call(this, e), e.result
             }
         },
         "handlers": function(e, t) {
             var n, i, r, o, s = [],
                 a = t.delegateCount,
                 l = e.target;
             if (a && l.nodeType && (!e.button || "click" !== e.type))
                 for (; l != this; l = l.parentNode || this)
                     if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                         for (r = [], o = 0; a > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [l]).length), r[n] && r.push(i);
                         r.length && s.push({
                             "elem": l,
                             "handlers": r
                         })
                     }
             return a < t.length && s.push({
                 "elem": this,
                 "handlers": t.slice(a)
             }), s
         },
         "fix": function(e) {
             if (e[rt.expando]) return e;
             var t, n, i, r = e.type,
                 o = e,
                 s = this.fixHooks[r];
             for (s || (this.fixHooks[r] = s = Mt.test(r) ? this.mouseHooks : Dt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new rt.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
             return e.target || (e.target = o.srcElement || ft), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
         },
         "props": "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
         "fixHooks": {},
         "mouseHooks": {
             "props": "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
             "filter": function(e, t) {
                 var n, i, r, o = t.button,
                     s = t.fromElement;
                 return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ft, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
             }
         },
         "special": {
             "focus": {
                 "trigger": function() {
                     if (this !== f() && this.focus) try {
                         return this.focus(), !1
                     } catch (e) {}
                 },
             }
         }
     }, rt.removeEvent = ft.removeEventListener ? function(e, t, n) {
         e.removeEventListener && e.removeEventListener(t, n, !1)
     } : function(e, t, n) {
         var i = "on" + t;
         e.detachEvent && (typeof e[i] === Et && (e[i] = null), e.detachEvent(i, n))
     }, rt.Event = function(e, t) {
         return this instanceof rt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && rt.extend(this, t), this.timeStamp = e && e.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(e, t)
     }, rt.each({
         "mouseenter": "mouseover",
         "mouseleave": "mouseout",
         "pointerenter": "pointerover",
         "pointerleave": "pointerout"
     }, function(e, t) {
         rt.event.special[e] = {
             "delegateType": t,
             "bindType": t,
             "handle": function(e) {
                 var n, i = this,
                     r = e.relatedTarget,
                     o = e.handleObj;
                 return (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
             }
         }
     }), nt.changeBubbles || (rt.event.special.change = {
         "setup": function() {
             return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function(e) {
                 "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
             }), rt.event.add(this, "click._change", function(e) {
                 this._just_changed && !e.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, e, !0)
             })), !1) : void rt.event.add(this, "beforeactivate._change", function(e) {
                 var t = e.target;
                 Lt.test(t.nodeName) && !rt._data(t, "changeBubbles") && (rt.event.add(t, "change._change", function(e) {
                     !this.parentNode || e.isSimulated || e.isTrigger || rt.event.simulate("change", this.parentNode, e, !0)
                 }), rt._data(t, "changeBubbles", !0))
             })
         },
         "handle": function(e) {
             var t = e.target;
             return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
         },
         "teardown": function() {
             return rt.event.remove(this, "._change"), !Lt.test(this.nodeName)
         }
     }, function(e, t) {
         var n = function(e) {
             rt.event.simulate(t, e.target, rt.event.fix(e), !0)
         };
         rt.event.special[t] = {
             "setup": function() {
                 var i = this.ownerDocument || this,
                     r = rt._data(i, t);
                 r || i.addEventListener(e, n, !0), rt._data(i, t, (r || 0) + 1)
             },
             "teardown": function() {
                 var i = this.ownerDocument || this,
                     r = rt._data(i, t) - 1;
                 r ? rt._data(i, t, r) : (i.removeEventListener(e, n, !0), rt._removeData(i, t))
             }
         }
     }), rt.fn.extend({
         "on": function(e, t, n, i, r) {
             var o, s;
             if ("object" == typeof e) {
                 "string" != typeof t && (n = n || t, t = void 0);
                 for (o in e) this.on(o, t, n, e[o], r);
                 return this
             }
             if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = h;
             else if (!i) return this;
             return 1 === r && (s = i, i = function(e) {
                 return rt().off(e), s.apply(this, arguments)
             }, i.guid = s.guid || (s.guid = rt.guid++)), this.each(function() {
                 rt.event.add(this, e, i, n, t)
             })
         },
     });

     var en, tn, nn = /^margin/,
         rn = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"),
         on = /^(top|right|bottom|left)$/;
     e.getComputedStyle ? (en = function(t) {
             return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
         }, tn = function(e, t, n) {
             var i, r, o, s, a = e.style;
             return n = n || en(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== s || rt.contains(e.ownerDocument, e) || (s = rt.style(e, t)), rn.test(s) && nn.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
         }) : ft.documentElement.currentStyle && (en = function(e) {
             return e.currentStyle
         }),
         rt.extend({
             "cssHooks": {},
             "cssNumber": {},
             "cssProps": {
                 "float": nt.cssFloat ? "cssFloat" : "styleFloat"
             },
             "style": function(e, t, n, i) {
                 if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                     var r, o, s, a = rt.camelCase(t),
                         l = e.style;
                     if (t = rt.cssProps[a] || (rt.cssProps[a] = C(l, a)), s = rt.cssHooks[t] || rt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
                     if (o = typeof n, "string" === o && (r = cn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || rt.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                         l[t] = n
                     } catch (u) {}
                 }
             },
             "css": function(e, t, n, i) {
                 var r, o, s, a = rt.camelCase(t);
                 return t = rt.cssProps[a] || (rt.cssProps[a] = C(e.style, a)), s = rt.cssHooks[t] || rt.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = tn(e, t, i)), "normal" === o && t in pn && (o = pn[t]), "" === n || n ? (r = parseFloat(o), n === !0 || rt.isNumeric(r) ? r || 0 : o) : o
             }
         }), rt.each({
             "margin": "",
             "padding": "",
             "border": "Width"
         }, function(e, t) {
             rt.cssHooks[e + t] = {
                 "expand": function(n) {
                     for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Ct[i] + t] = o[i] || o[i - 2] || o[0];
                     return r
                 }
             }, nn.test(e) || (rt.cssHooks[e + t].set = _)
         }), rt.fn.extend({
             "css": function(e, t) {
                 return _t(this, function(e, t, n) {
                     var i, r, o = {},
                         s = 0;
                     if (rt.isArray(t)) {
                         for (i = en(e), r = t.length; r > s; s++) o[t[s]] = rt.css(e, t[s], !1, i);
                         return o
                     }
                     return void 0 !== n ? rt.style(e, t, n) : rt.css(e, t)
                 }, e, t, arguments.length > 1)
             }
         }), rt.Tween = D, D.prototype = {
             "constructor": D,
             "init": function(e, t, n, i, r, o) {
                 this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (rt.cssNumber[n] ? "" : "px")
             }
         }, rt.easing = {
             "linear": function(e) {
                 return e
             },
             "swing": function(e) {
                 return .5 - Math.cos(e * Math.PI) / 2
             }
         }, rt.fx = D.prototype.init, rt.fx.step = {};
     var fn, mn, gn = /^(?:toggle|show|hide)$/,
         vn = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
         yn = /queueHooks$/,
         bn = [P],
         wn = {
             "*": [function(e, t) {
                 var n = this.createTween(e, t),
                     i = n.cur(),
                     r = vn.exec(t),
                     o = r && r[3] || (rt.cssNumber[e] ? "" : "px"),
                     s = (rt.cssNumber[e] || "px" !== o && +i) && vn.exec(rt.css(n.elem, e)),
                     a = 1,
                     l = 20;
                 if (s && s[3] !== o) {
                     o = o || s[3], r = r || [], s = +i || 1;
                     do a = a || ".5", s /= a, rt.style(n.elem, e, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                 }
                 return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
             }]
         };
     var xn, En, Sn = rt.expr.attrHandle,
         An = /^(?:checked|selected)$/i,
         kn = nt.getSetAttribute,
         Cn = nt.input;
     rt.fn.extend({}), rt.extend({
         "attrHooks": {}
     }), En = {
         "set": function(e, t, n) {
             return t === !1 ? rt.removeAttr(e, n) : Cn && kn || !An.test(n) ? e.setAttribute(!kn && rt.propFix[n] || n, n) : e[rt.camelCase("default-" + n)] = e[n] = !0, n
         }
     }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(e, t) {
         var n = Sn[t] || rt.find.attr;
         Sn[t] = Cn && kn || !An.test(t) ? function(e, t, i) {
             var r, o;
             return i || (o = Sn[t], Sn[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Sn[t] = o), r
         } : function(e, t, n) {
             return n ? void 0 : e[rt.camelCase("default-" + t)] ? t.toLowerCase() : null
         }
     }), kn || (xn = {
         "set": function(e, t, n) {
             var i = e.getAttributeNode(n);
             return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
         }
     }, Sn.id = Sn.name = Sn.coords = function(e, t, n) {
         var i;
         return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
     }, rt.attrHooks.contenteditable = {
         "set": function(e, t, n) {
             xn.set(e, "" === t ? !1 : t, n)
         }
     }, rt.each(["width", "height"], function(e, t) {
         rt.attrHooks[t] = {
             "set": function(e, n) {
                 return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
             }
         }
     })), nt.style || (rt.attrHooks.style = {});
     rt.fn.extend({}), rt.extend({
         "propFix": {
             "for": "htmlFor",
             "class": "className"
         },
         "propHooks": {
             "tabIndex": {
                 "get": function(e) {
                     var t = rt.find.attr(e, "tabindex");
                     return t ? parseInt(t, 10) : Nn.test(e.nodeName) || _n.test(e.nodeName) && e.href ? 0 : -1
                 }
             }
         }
     }), nt.optSelected || (rt.propHooks.selected = {
         "get": function(e) {
             var t = e.parentNode;
             return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
         }
     }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
         rt.propFix[this.toLowerCase()] = this
     }), nt.enctype || (rt.propFix.enctype = "encoding");
     rt.fn.extend({}), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
         rt.fn[t] = function(e, n) {
             return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
         }
     });

     rt.offset = {
         "setOffset": function(e, t, n) {
             var i, r, o, s, a, l, u, c = rt.css(e, "position"),
                 d = rt(e),
                 p = {};
             "static" === c && (e.style.position = "relative"), a = d.offset(), o = rt.css(e, "top"), l = rt.css(e, "left"), u = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [o, l]) > -1, u ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), rt.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
         }
     }, rt.fn.extend({
         "offset": function(e) {
             if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                 rt.offset.setOffset(this, e, t)
             });
             var t, n, i = {
                     "top": 0,
                     "left": 0
                 },
                 r = this[0],
                 o = r && r.ownerDocument;
             if (o) return t = o.documentElement, (i = r.getBoundingClientRect()), n = X(o), {
                 "top": i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                 "left": i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
             }
         },
     }), rt.each({
         "scrollLeft": "pageXOffset",
         "scrollTop": "pageYOffset"
     }, function(e, t) {
         var n = /Y/.test(t);
         rt.fn[e] = function(i) {
             return _t(this, function(e, i, r) {
                 var o = X(e);
                 return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r : rt(o).scrollTop()) : e[i] = r)
             }, e, i, arguments.length, null)
         }
     }), rt.each(["top", "left"], function(e, t) {
         rt.cssHooks[t] = k(nt.pixelPosition, function(e, n) {
             return n ? (n = tn(e, t), rn.test(n) ? rt(e).position()[t] + "px" : n) : void 0
         })
     }), rt.each({
         "Height": "height",
         "Width": "width"
     }, function(e, t) {
         rt.each({
             "padding": "inner" + e,
             "content": t,
             "": "outer" + e
         }, function(n, i) {
             rt.fn[i] = function(i, r) {
                 var o = arguments.length && (n || "boolean" != typeof i),
                     s = n || (i === !0 || r === !0 ? "margin" : "border");
                 return _t(this, function(t, n, i) {
                     var r;
                     return rt.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? rt.css(t, n, s) : rt.style(t, n, i, s)
                 }, t, o ? i : void 0, o, null)
             }
         })
     }), rt.fn.size = function() {
         return this.length
     }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
         return rt
     });
     var oi = e.jQuery,
         si = e.$;
     return rt.noConflict = function(t) {
         return e.$ === rt && (e.$ = si), t && e.jQuery === rt && (e.jQuery = oi), rt
     }, typeof t === Et && (e.jQuery = e.$ = rt), rt
 }),
 window.isArray = function(e) {
         return "[object Array]" === Object.prototype.toString.call(e)
     }, window.periscopePing = function(e) {}, "/app/" == window.location.pathname.substring(0, 5) ? setTimeout(function() {
         periscopePing("pageview")
     }, 5e3) : "/api/" == window.location.pathname.substring(0, 5),
     function() {
         var e, t = function(e, t) {
             return function() {
                 return e.apply(t, arguments)
             }
         };
         e = function() {
             function e(e, n) {
                 var i;
                 null == n && (n = null), this.validateType = t(this.validateType, this), this.mousemove = t(this.mousemove, this), this.mouseleave = t(this.mouseleave, this), this.requestAnimationFrame = t(this.requestAnimationFrame, this), this.draw = t(this.draw, this), this.canvasEl = $(e), this.canvasEl.length > 0 && (this.type = this.validateType(n), this.canvas = this.canvasEl[0], this.currentBuffer = 0, this.allSeries = [], this.width = this.canvasEl.width(), this.maxWidth = this.width, this.height = this.canvasEl.height(), this.lastMousePosition = null, i = 60, this.ctx = this.canvas.getContext("2d"), this.canvasEl.mousemove(this.mousemove), this.canvasEl.mouseleave(this.mouseleave)),
                    //initialize a new graph line:           r, g, b  minSpeed, maxSpeed, minValue, maxValue (value starts from the top)
                    this.allSeries.push(new LineotronSeries("111, 184, 255", 1, 42, this.width, i + 105, i + 210)), 
                    this.allSeries.push(new LineotronSeries("255, 117, 85", .9, 33, this.width, i + 55, i + 255)), 
                    this.allSeries.push(new LineotronSeries("89, 206, 197", .8, 25, this.width, i + 30, i + 260)), 
                    this.allSeries.push(new LineotronSeries("136, 73, 165", .7, 18, this.width, i + 10, i + 300))

             }
             return e.DATA_WIDTH_TIME_MS = DATA_SWIPE_RIGHT, 
                    e.DATA_FADE_START_TIME_MS = DATA_FADE_START_TIME, 
                    e.DATA_FADE_MS = 500, 
                    e.DATA_FADE_OPACITY_CHANGE = DATA_FADE_OPACITY, 
                    e.NUM_GRIDLINES = GRIDLINES, 
                    e.GRIDLINE_FADE_START_MS = GRIDLINE_FADE_START,
                    e.GRIDLINE_FADE_MS = GRIDLINE_FADE, 
                    e.GRIDLINE_SPACING_MS = GRIDLINE_SPACING, 
                    e.GRIDLINE_FULL_WIDTH_MS = GRIDLINE_FULL_WIDTH, 
                    e.GRIDLINE_BASE_COLOR = GRIDLINE_COLOR, 
                    e.GRIDLINE_BASE_OPACITY = GRIDLINE_OPACITY, 
                    e.GRIDLINE_FADE_CHANGE = GRIDLINE_FADE_DIFF, 
                    e.GRIDLINE_FADE_LOW_LINES_MS = 1e3, 
                    e.GRIDLINE_FADE_LOW_THRESHOLD = 7, 
                    e.WRAP_WIDTH = 1e6, 
                    e.prototype.draw = function(e) {
                 return null == this.startTime && (this.startTime = e), this.updateLinePosition(e - this.startTime), this.drawBackground(this.ctx), this.drawGrid(this.ctx, e - this.startTime), this.drawSeries(this.ctx, e - this.startTime), this.requestAnimationFrame(this.draw)
             }, e.prototype.requestAnimationFrame = function(e) {
                 var t;
                 return (t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)(e)
             }, e.prototype.updateWidth = function(e) {
                 var t, n, i, r, o;
                 for (this.canvasEl.css("width", Math.round(WIDTH)), this.canvas.width !== WIDTH && (this.canvas.width = WIDTH), this.width = WIDTH, i = this.allSeries, r = [], t = 0, n = i.length; n > t; t++) o = i[t], r.push(o.width = WIDTH);
                 return r
             }, e.prototype.updateLinePosition = function(e) {
                 var t, n, i, r, o;
                 for (i = this.allSeries, r = [], t = 0, n = i.length; n > t; t++) o = i[t], r.push(o.scroll(e, this.lastMousePosition));
                 return r
             }, e.prototype.drawBackground = function(e) {
                 return e.clearRect(0, 0, this.width, this.height)
             }, e.prototype.drawSeries = function(t, n) {
                 var i, r, o, s, a, l, u, c, d, p, h, f, m, g, v, y, b;
                 for (c = this.width + LineotronSeries.STRIDE, n < e.DATA_WIDTH_TIME_MS && (c *= n / e.DATA_WIDTH_TIME_MS), n < e.DATA_FADE_START_TIME_MS ? i = 1 : n < e.DATA_FADE_START_TIME_MS + e.DATA_FADE_MS ? (g = n - e.DATA_FADE_START_TIME_MS, i = 1 - this.easeOutQuad(g, 0, 1, e.DATA_FADE_MS) * e.DATA_FADE_OPACITY_CHANGE) : i = 1 - e.DATA_FADE_OPACITY_CHANGE, p = this.allSeries, f = [], o = 0, l = p.length; l > o; o++) {
                     for (m = p[o], t.beginPath(), t.strokeStyle = m.getColor(i), t.lineWidth = LINE_WIDTH, t.moveTo(0, m.points[0]), a = m.points[0], h = m.points, r = s = 0, u = h.length; u > s; r = ++s) {
                         if (d = h[r], !(d[0] < c || n > e.DATA_WIDTH_TIME_MS)) {
                             b = d[1] - a[1], v = c - a[0], y = d[0] - a[0], t.lineTo(Math.round(c), Math.round(a[1] + b * v / y));
                             break
                         }
                         t.lineTo(Math.round(d[0]), Math.round(d[1])), a = d
                     }
                     f.push(t.stroke())
                 }
                 return f
             }, e.prototype.getGridlineColor = function(t, n) {
                 var i, r, o;
                 return n < e.GRIDLINE_FADE_START_MS ? r = 1 : n < e.GRIDLINE_FADE_START_MS + e.GRIDLINE_FADE_MS ? (o = n - e.GRIDLINE_FADE_START_MS, r = 1 - this.easeOutQuad(o, 0, 1, e.GRIDLINE_FADE_MS) * e.GRIDLINE_FADE_CHANGE) : r = 1 - e.GRIDLINE_FADE_CHANGE, t >= e.GRIDLINE_FADE_LOW_THRESHOLD && (i = (t - e.GRIDLINE_FADE_LOW_THRESHOLD) / (e.NUM_GRIDLINES - e.GRIDLINE_FADE_LOW_THRESHOLD), n < e.GRIDLINE_FADE_LOW_LINES_MS || (n < e.GRIDLINE_FADE_LOW_LINES_MS + e.GRIDLINE_FADE_MS ? (o = n - e.GRIDLINE_FADE_LOW_LINES_MS, r *= 1 - o / e.GRIDLINE_FADE_MS * i) : r *= 1 - i)), "rgba(" + e.GRIDLINE_BASE_COLOR + ", " + e.GRIDLINE_BASE_OPACITY * r + ")"
             }, e.prototype.getGridlineWidthPercent = function(t, n) {
                 var i, r, o, s;
                 return r = t * e.GRIDLINE_SPACING_MS, i = t * e.GRIDLINE_SPACING_MS + e.GRIDLINE_FULL_WIDTH_MS, r > n ? s = 0 : i > n ? (o = n - r, s = this.easeOutQuad(o, 0, 1, e.GRIDLINE_FULL_WIDTH_MS)) : s = 1, s
             }, e.prototype.drawGrid = function(t, n) {
                 var i, r, o, s, a;
                 for (t.lineWidth = .55, s = [], i = r = 0, o = e.NUM_GRIDLINES; o >= 0 ? o >= r : r >= o; i = o >= 0 ? ++r : --r) t.beginPath(), t.strokeStyle = this.getGridlineColor(i, n), a = this.height / e.NUM_GRIDLINES * i, t.moveTo(0, a), t.lineTo(this.width * this.getGridlineWidthPercent(i, n), a), s.push(t.stroke());
                 return s
             }, e.prototype.easeOutQuad = function(e, t, n, i) {
                 return -n * (e /= i) * (e - 2) + t
             }, e.prototype.availableWidth = function(t) {
                 return WIDTH
             }, e.prototype.conditionalTextLeftIndent = function(e, t, n, i) {
                 var r;
                 return i ? (r = e.measureText(n).width, this.leftIndentIfCentered(r)) : t
             }, e.prototype.mouseleave = function() {
                 return this.lastMousePosition = null
             }, e.prototype.mousemove = function(e) {
                 var t, n, i;
                 return n = this.canvasEl.offset(), t = e.clientX - n.left, i = e.clientY - n.top, this.lastMousePosition = [t, i]
             }, e.prototype.validateType = function(e) {
                 return "string" != typeof e ? "periscope" : "segment" === e.trim().toLowerCase() ? "segment" : "periscope"
             }, e.getWindowWidth = function() {
                 return WIDTH
             }, e
         }(), window.Lineotron = e
     }.call(this),
     function() {
         var e;
         e = function() {
             function e(e, t, n, i, r, o) {
                 this.baseColor = e, this.baseOpacity = t, this.scrollRate = n, this.width = i, this.minY = r, this.maxY = o, this.points = [], this.totalScroll = 0, this.lastOpacity = null, this.lastColor = null, this.totalPoints = 0, this.addPoint()
             }
             return e.STRIDE = POINT_SPACING, e.prototype.getColor = function(e) {
                 return e !== this.lastOpacity && (this.lastColor = "rgba(" + this.baseColor + "," + this.baseOpacity * e + ")", this.lastOpacity = e), this.lastColor
             }, e.prototype.scroll = function(t, n) {
                 var i, r, o, s, a, l, u, c;
                 for (i = null == this.lastTime || isNaN(this.lastTime) ? 1 : (t - this.lastTime) / 1e3 * this.scrollRate, a = this.points, r = 0, o = a.length; o > r; r++) s = a[r], s[0] -= i, null != n && (u = Math.abs(n[0] - s[0])), null != n && (c = Math.abs(n[1] - s[1])), null != n && 100 > u && 100 > c ? s[1] = s[1] + (n[1] - s[1]) / (u + 30) : s[1] !== s[2] && (s[1] = Math.round(s[1] + (s[2] - s[1]) / 50));
                 for (this.totalScroll -= i; this.points[this.points.length - 1][0] <= this.width + e.STRIDE;) this.addPoint();
                 for (this.lastTime = t, l = []; this.points[0][0] < -1 * e.STRIDE;) l.push(this.points.shift());
                 return l
             }, e.prototype.addPoint = function() {
                 var t, n;
                 return t = this.totalPoints * e.STRIDE + this.totalScroll, n = Math.round(Math.random() * (this.maxY - this.minY) + this.minY), this.points.push([t, n, n]), this.totalPoints++
             }, e
         }(), window.LineotronSeries = e
     }.call(this),
     function() {
         var e;
         e = function() {
             function e() {}
             return e.LINES_SCROLL_BUFFER = 100, e.SPLASH_SIZE_CHECK_INTERVAL = 100, e.MAIN_TITLE_DELAY_MS = 500, e.WINDOW_MAX_HEIGHT_FOR_FULLSCREEN_SPLASH = 1110, e.SPLASH_HEIGHT_FOR_TALL_WINDOW = 950, e.GRAPH_START_DELAY_MS = 100, e.ready = function(t) {
                 return null == t && (t = null), e.animate = !0, e.readyCommon(), e.lineotron = new Lineotron("#canvastron", t), window.newMobileUI ? void 0 : e.startAnimations()
             }, e.readyCommon = function() {
                 return e.mainBlock = $(".splash-block"), e.header = $(".splash-header")
             }, e.startAnimations = function() {
                 return this.mainTitle = setInterval(this.setSplashSize, this.SPLASH_SIZE_CHECK_INTERVAL), setTimeout(this.lineotron.draw, this.GRAPH_START_DELAY_MS)
             }, e.setSplashSize = function() {
                 var t, n, i, r, o;
                 return o = jQuery(window).width(), r = jQuery(window).height(), e.mainBlock.css({
                     "height": Math.max(r, e.SPLASH_MIN_HEIGHT) + "px"
                 }), i = r > e.WINDOW_MAX_HEIGHT_FOR_FULLSCREEN_SPLASH ? e.SPLASH_HEIGHT_FOR_TALL_WINDOW : Math.max(r, e.SPLASH_MIN_HEIGHT), e.mainBlock.css({
                     "height": i + "px"
                 }), t = e.lineotron.availableWidth(), n = o - e.LINES_SCROLL_BUFFER < e.PAGE_MIN_WIDTH ? o : o - (o - t) / 2, e.lineotron.updateWidth(Math.round(n))
             }, e
         }(), window.PeriscopePage = e
     }.call(this);

$(document).ready(PeriscopePage.ready)