(function ($, Drupal) {
    'use strict';

    $(document).once("key78").ready(function () {

        var accordion = (function () {
            return {
                init: function () {

                    $('.twocolumn-accordion .trigger').on('click', function () {

                        $('.accordion-menu li.active').removeClass('active');
                        $(this).parent('li').toggleClass('active');

                        var slideindex = $(this).parent().index();

                        $('.accordion-slideshow ul li.slide-active').removeClass('slide-active');
                        $('.accordion-slideshow ul').find('li:eq(' + slideindex + ')').addClass('slide-active');

                    });

                },
            }
        })();
        accordion.init({});
    });

    $('#tabs li').on('click', function() {
        var tab = $(this).data('tab');
				$(this).siblings('li.is-active').removeClass("is-active");
        $(this).addClass('is-active');
				$(this).parents(".tabs").siblings().children().removeClass("is-active");
				$(this).parents(".tabs").siblings().children('div[data-content="' + tab + '"]').addClass("is-active");
    });

    $('document').ready(function() {
        $('.discoverDropDownButton').click( function() {
            $('.discoverResourceMenu').slideToggle();
            $('span.discoverToggleArrow').toggleClass('flipped');
        });
    });

    $('.current-partners li.tab').on('click', function(){
      $('li.tab').removeClass('is-active');
      $(this).addClass('is-active');
      var dataId = $(this).attr("data-id");
      $(".tabContent").addClass('display-none');
      $("#" + dataId).removeClass('display-none');
      console.log("#" + dataId);
    });


    $(document).ready(function() {
        $(".exec-connects .burger").click(function (event) {
        event.stopPropagation();
          $(".exec-connects .popup-menu").slideToggle("fast");
        })
        $(document).click(function () {
          if ($(".exec-connects .popup-menu").is(":visible")) {
            $(".exec-connects .popup-menu").slideUp("fast");
          }
        });
        $('.exec-connects .fa-times-circle').click(function() {
          $('.exec-connects .popup-menu').slideUp("fast");
        });
        $('.exec-connects .popup-menu a').click(function() {
          $('.exec-connects .popup-menu').slideUp("fast");
        });
        $('.exec-connects .header a').click(function() {
          $('.exec-connects .header a').removeClass('active');
          $(this).toggleClass('active');
        });
        $(window).scroll(function(){
          var fromTopPx = 50;
          var scrolledFromtop = $(window).scrollTop();
          if(scrolledFromtop > fromTopPx){
            $('.exec-connects .header').addClass('scrolled');
          } else {
            $('.exec-connects .header').removeClass('scrolled');
          }
        });
        var sections = $("section");
        $(window).scroll(function() {
            var st = $(window).scrollTop();
            var window_top = st+100;
            var active_section;
            sections.each(function(index, el) {
              var section_top = $(el).offset().top;
              var section_bottom = $(el).offset().top+$(el).height();
              if (window_top > section_top) {
                active_section = $(el).prop('id');
                if (st > last_st) {
                  return false;
                }
              }
            });
            var active_link = $(".exec-connects #immainNavBar a[href='#"+active_section+"-section']");
            if (active_link.length > 1) {
              //$(".exec-connects #immainNavBar a").removeClass('active');
              return false;
            }
            if (!active_link.hasClass('active')) {
              //$(".exec-connects #immainNavBar a").removeClass('active');
              active_link.addClass('active');
            }
            var last_st = st;
        });
      });
})(jQuery, Drupal);
;
    (function(win, doc, src, name, accountId) {
    win[name] = win[name] || {whenReady: function() { (win[name].queue = win[name].queue || []).push(arguments) }};
    win['__hly_embed_object'] = {name:name}; win[name].accountId = accountId;
    var hws = doc.createElement('script'); hws.type  = 'text/javascript'; hws.async = true;  hws.src = src;
    var node = doc.getElementsByTagName('script')[0];  node.parentNode.insertBefore(hws, node);
})(window, document, 'https://hubfront.hushly.com/embed.js', 'HushlyEmbed', '149');;
var e,t;e=function(){return(new function(){var e=this,t="undefined"!=typeof window;if(t)var n=window,o=document,r=o.documentElement,i=o.createElement("a");if(this.polyfill=function(r){if(r=r||{},t){var l=n.__forceSmoothscrollAnchorPolyfill__,a="boolean"==typeof r.force?r.force:l;if("scrollBehavior"in i.style&&!a)return e;e.destroy(),o.addEventListener("click",p,!1),o.addEventListener("scroll",S),n.addEventListener("hashchange",b)}return e},this.destroy=function(r){return r=r||{},t&&(o.removeEventListener("click",p,!1),o.removeEventListener("scroll",S),n.removeEventListener("hashchange",b)),e},t){var l=!1;try{var a=Object.defineProperty({},"preventScroll",{get:function(){l=!0}});i.focus(a)}catch(e){}var c,s=/scroll-behavior:[\s]*([^;"`'\s]+)/,u=getComputedStyle(r),f=[]}function h(){for(var e=[r.style.scrollBehavior,(s.exec(r.getAttribute("style"))||[])[1],u.getPropertyValue("--scroll-behavior"),(s.exec(u.fontFamily)||[])[1]],t=0;t<e.length;t++){var n=(i=void 0,i=null,o=(o=e[t])&&o.trim(),/^smooth$/.test(o)&&(i=!0),/^(initial|inherit|auto|unset)$/.test(o)&&(i=!1),i);if(null!==n)return n}var o,i;return!1}function v(e){if(!/^a$/i.test(e.tagName)||!/#/.test(e.href))return!1;var t=e.pathname;return"/"!==t[0]&&(t="/"+t),e.hostname===location.hostname&&t===location.pathname&&(!e.search||e.search===location.search)}function d(e){if(e.focus({preventScroll:!0}),o.activeElement!==e){var t=e.getAttribute("tabindex");if(e.setAttribute("tabindex","-1"),"none"===getComputedStyle(e).outlineStyle){var n=e.style.outlineStyle;e.style.outlineStyle="none",e.addEventListener("blur",function o(){e.style.outlineStyle=n,e.setAttribute("tabindex",t),e.removeEventListener("blur",o)})}e.focus({preventScroll:!0})}}function y(e){if("string"!=typeof e)return null;var t=(e=function(e){try{e=decodeURIComponent(e)}catch(e){}return e}(e))?o.getElementById(e.slice(1)):o.body;return"#top"!==e||t||(t=o.body),t}function m(e){l||clearTimeout(c),e===o.body?n.scroll({top:0,left:0,behavior:"smooth"}):e.scrollIntoView({behavior:"smooth",block:"start"}),l?d(e):c=setTimeout(d.bind(null,e),450)}function p(e){var t=e.metaKey||e.ctrlKey||e.shiftKey||0!==e.button;if(!e.defaultPrevented&&!t&&h()){var r=function e(t,n){return n(t)?t:t.parentElement?e(t.parentElement,n):null}(function(e){return(e=e||n.event).target||e.srcElement}(e),v);if(r){var i=r.hash,l=y(i);l&&(e.preventDefault(),m(l),history.pushState&&history.pushState(null,o.title,i||"#"))}}}function b(){if(o.body&&h()){var e=y(location.hash);if(e){var t=E(),r=f[f[1]===t?0:1];n.scroll({top:r,behavior:"instant"}),m(e)}}}function E(){return r.scrollTop||o.body.scrollTop}function S(){o.body&&(f[0]=f[1],f[1]=E())}}).polyfill()},!(t=this&&this.__sap_ES_MODULE__)&&"function"==typeof define&&define.amd?define([],e):!t&&"object"==typeof module&&module.exports?module.exports=e():this.SmoothscrollAnchorPolyfill=e();
;
!(function () {
  "use strict";
  function o() {
    var o = window,
      t = document;
    if (
      !(
        "scrollBehavior" in t.documentElement.style &&
        !0 !== o.__forceSmoothScrollPolyfill__
      )
    ) {
      var l,
        e = o.HTMLElement || o.Element,
        r = 468,
        i = {
          scroll: o.scroll || o.scrollTo,
          scrollBy: o.scrollBy,
          elementScroll: e.prototype.scroll || n,
          scrollIntoView: e.prototype.scrollIntoView,
        },
        s =
          o.performance && o.performance.now
            ? o.performance.now.bind(o.performance)
            : Date.now,
        c =
          ((l = o.navigator.userAgent),
          new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0);
      (o.scroll = o.scrollTo =
        function () {
          void 0 !== arguments[0] &&
            (!0 !== f(arguments[0])
              ? h.call(
                  o,
                  t.body,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left
                    : o.scrollX || o.pageXOffset,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top
                    : o.scrollY || o.pageYOffset
                )
              : i.scroll.call(
                  o,
                  void 0 !== arguments[0].left
                    ? arguments[0].left
                    : "object" != typeof arguments[0]
                    ? arguments[0]
                    : o.scrollX || o.pageXOffset,
                  void 0 !== arguments[0].top
                    ? arguments[0].top
                    : void 0 !== arguments[1]
                    ? arguments[1]
                    : o.scrollY || o.pageYOffset
                ));
        }),
        (o.scrollBy = function () {
          void 0 !== arguments[0] &&
            (f(arguments[0])
              ? i.scrollBy.call(
                  o,
                  void 0 !== arguments[0].left
                    ? arguments[0].left
                    : "object" != typeof arguments[0]
                    ? arguments[0]
                    : 0,
                  void 0 !== arguments[0].top
                    ? arguments[0].top
                    : void 0 !== arguments[1]
                    ? arguments[1]
                    : 0
                )
              : h.call(
                  o,
                  t.body,
                  ~~arguments[0].left + (o.scrollX || o.pageXOffset),
                  ~~arguments[0].top + (o.scrollY || o.pageYOffset)
                ));
        }),
        (e.prototype.scroll = e.prototype.scrollTo =
          function () {
            if (void 0 !== arguments[0])
              if (!0 !== f(arguments[0])) {
                var o = arguments[0].left,
                  t = arguments[0].top;
                h.call(
                  this,
                  this,
                  void 0 === o ? this.scrollLeft : ~~o,
                  void 0 === t ? this.scrollTop : ~~t
                );
              } else {
                if ("number" == typeof arguments[0] && void 0 === arguments[1])
                  throw new SyntaxError("Value could not be converted");
                i.elementScroll.call(
                  this,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left
                    : "object" != typeof arguments[0]
                    ? ~~arguments[0]
                    : this.scrollLeft,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top
                    : void 0 !== arguments[1]
                    ? ~~arguments[1]
                    : this.scrollTop
                );
              }
          }),
        (e.prototype.scrollBy = function () {
          void 0 !== arguments[0] &&
            (!0 !== f(arguments[0])
              ? this.scroll({
                  left: ~~arguments[0].left + this.scrollLeft,
                  top: ~~arguments[0].top + this.scrollTop,
                  behavior: arguments[0].behavior,
                })
              : i.elementScroll.call(
                  this,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left + this.scrollLeft
                    : ~~arguments[0] + this.scrollLeft,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top + this.scrollTop
                    : ~~arguments[1] + this.scrollTop
                ));
        }),
        (e.prototype.scrollIntoView = function () {
          if (!0 !== f(arguments[0])) {
            var l = (function (o) {
                for (
                  ;
                  o !== t.body &&
                  !1 ===
                    ((e = p((l = o), "Y") && a(l, "Y")),
                    (r = p(l, "X") && a(l, "X")),
                    e || r);

                )
                  o = o.parentNode || o.host;
                var l, e, r;
                return o;
              })(this),
              e = l.getBoundingClientRect(),
              r = this.getBoundingClientRect();
            l !== t.body
              ? (h.call(
                  this,
                  l,
                  l.scrollLeft + r.left - e.left,
                  l.scrollTop + r.top - e.top
                ),
                "fixed" !== o.getComputedStyle(l).position &&
                  o.scrollBy({
                    left: e.left,
                    top: e.top,
                    behavior: "smooth",
                  }))
              : o.scrollBy({
                  left: r.left,
                  top: r.top,
                  behavior: "smooth",
                });
          } else
            i.scrollIntoView.call(
              this,
              void 0 === arguments[0] || arguments[0]
            );
        });
    }
    function n(o, t) {
      (this.scrollLeft = o), (this.scrollTop = t);
    }
    function f(o) {
      if (
        null === o ||
        "object" != typeof o ||
        void 0 === o.behavior ||
        "auto" === o.behavior ||
        "instant" === o.behavior
      )
        return !0;
      if ("object" == typeof o && "smooth" === o.behavior) return !1;
      throw new TypeError(
        "behavior member of ScrollOptions " +
          o.behavior +
          " is not a valid value for enumeration ScrollBehavior."
      );
    }
    function p(o, t) {
      return "Y" === t
        ? o.clientHeight + c < o.scrollHeight
        : "X" === t
        ? o.clientWidth + c < o.scrollWidth
        : void 0;
    }
    function a(t, l) {
      var e = o.getComputedStyle(t, null)["overflow" + l];
      return "auto" === e || "scroll" === e;
    }
    function d(t) {
      var l,
        e,
        i,
        c,
        n = (s() - t.startTime) / r;
      (c = n = n > 1 ? 1 : n),
        (l = 0.5 * (1 - Math.cos(Math.PI * c))),
        (e = t.startX + (t.x - t.startX) * l),
        (i = t.startY + (t.y - t.startY) * l),
        t.method.call(t.scrollable, e, i),
        (e === t.x && i === t.y) || o.requestAnimationFrame(d.bind(o, t));
    }
    function h(l, e, r) {
      var c,
        f,
        p,
        a,
        h = s();
      l === t.body
        ? ((c = o),
          (f = o.scrollX || o.pageXOffset),
          (p = o.scrollY || o.pageYOffset),
          (a = i.scroll))
        : ((c = l), (f = l.scrollLeft), (p = l.scrollTop), (a = n)),
        d({
          scrollable: c,
          method: a,
          startTime: h,
          startX: f,
          startY: p,
          x: e,
          y: r,
        });
    }
  }
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = {
        polyfill: o,
      })
    : o();
})();
;
/*! js-cookie v3.0.1 | MIT */
;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, (function () {
    var current = global.Cookies;
    var exports = global.Cookies = factory();
    exports.noConflict = function () { global.Cookies = current; return exports; };
  }()));
}(this, (function () { 'use strict';

  /* eslint-disable no-var */
  function assign (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function (value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function (value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      )
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init (converter, defaultAttributes) {
    function set (key, value, attributes) {
      if (typeof document === 'undefined') {
        return
      }

      attributes = assign({}, defaultAttributes, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }

      key = encodeURIComponent(key)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);

      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return (document.cookie =
        key + '=' + converter.write(value, key) + stringifiedAttributes)
    }

    function get (key) {
      if (typeof document === 'undefined' || (arguments.length && !key)) {
        return
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');

        try {
          var foundKey = decodeURIComponent(parts[0]);
          jar[foundKey] = converter.read(value, foundKey);

          if (key === foundKey) {
            break
          }
        } catch (e) {}
      }

      return key ? jar[key] : jar
    }

    return Object.create(
      {
        set: set,
        get: get,
        remove: function (key, attributes) {
          set(
            key,
            '',
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function (attributes) {
          return init(this.converter, assign({}, this.attributes, attributes))
        },
        withConverter: function (converter) {
          return init(assign({}, this.converter, converter), this.attributes)
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    )
  }

  var api = init(defaultConverter, { path: '/' });
  /* eslint-enable no-var */

  return api;

})));
;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bulmaAccordion=t():e.bulmaAccordion=t()}("undefined"!=typeof self?self:this,function(){return function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var a=Symbol("onBulmaAccordionClick"),r=function(e){function r(e){1<arguments.length&&void 0!==arguments[1]&&arguments[1];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));if(t.element="string"==typeof e?document.querySelector(e):e,!t.element)throw new Error("An invalid selector or non-DOM node has been provided.");return t._clickEvents=["click"],t[a]=t[a].bind(t),t.init(),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,i["a"]),o(r,[{key:"init",value:function(){this.items=this.element.querySelectorAll(".accordion .toggle")||[],this._bindEvents()}},{key:"destroy",value:function(){var n=this;this.items.forEach(function(t){n._clickEvents.forEach(function(e){t.removeEventListener(e,n[a],!1)})})}},{key:"_bindEvents",value:function(){var n=this;this.items.forEach(function(t){n._clickEvents.forEach(function(e){t.addEventListener(e,n[a],!1)})})}},{key:a,value:function(e){e.preventDefault();var t=e.currentTarget.closest(".accordion")||e.currentTarget;if(t.classList.contains("is-active"))t.classList.remove("is-active");else{var n=this.element.querySelector(".accordion.is-active");n&&n.classList.remove("is-active"),t.classList.add("is-active")}}}],[{key:"attach",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".accordions",t=new Array,n=document.querySelectorAll(e);return[].forEach.call(n,function(e){setTimeout(function(){t.push(new r(e))},100)}),t}}]),r}();t.default=r},function(e,t,n){"use strict";var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var i=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._listeners=new Map(e),this._middlewares=new Map}return r(t,[{key:"listenerCount",value:function(e){return this._listeners.has(e)?this._listeners.get(e).length:0}},{key:"removeListeners",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];null!==e?Array.isArray(e)?name.forEach(function(e){return t.removeListeners(e,n)}):(this._listeners.delete(e),n&&this.removeMiddleware(e)):this._listeners=new Map}},{key:"middleware",value:function(e,t){var n=this;Array.isArray(e)?name.forEach(function(e){return n.middleware(e,t)}):(Array.isArray(this._middlewares.get(e))||this._middlewares.set(e,[]),this._middlewares.get(e).push(t))}},{key:"removeMiddleware",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e?Array.isArray(e)?name.forEach(function(e){return t.removeMiddleware(e)}):this._middlewares.delete(e):this._middlewares=new Map}},{key:"on",value:function(e,t){var n=this,r=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(Array.isArray(e))e.forEach(function(e){return n.on(e,t)});else{var i=(e=e.toString()).split(/,|, | /);1<i.length?i.forEach(function(e){return n.on(e,t)}):(Array.isArray(this._listeners.get(e))||this._listeners.set(e,[]),this._listeners.get(e).push({once:r,callback:t}))}}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"emit",value:function(n,r){var i=this,o=2<arguments.length&&void 0!==arguments[2]&&arguments[2];n=n.toString();var a=this._listeners.get(n),l=null,s=0,c=o;if(Array.isArray(a))for(a.forEach(function(e,t){o||(l=i._middlewares.get(n),Array.isArray(l)?(l.forEach(function(e){e(r,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e&&(r=e),s++},n)}),s>=l.length&&(c=!0)):c=!0),c&&(e.once&&(a[t]=null),e.callback(r))});-1!==a.indexOf(null);)a.splice(a.indexOf(null),1)}}]),t}();t.a=i}]).default});;
 jQuery(document).ready(function() {
    // Add click event for <span> element inside .footer-twenty-three__menu-item
    jQuery('.footer-twenty-three__menu > li > ul > .footer-twenty-three__menu-item > span').click(function() {
        // Find the .footer-twenty-three__submenu element and slide it down
        let subMenu = jQuery(this).siblings('.footer-twenty-three__submenu');
        jQuery('.footer-twenty-three__submenu').slideUp();
        if (!subMenu.is(':visible')) {
            subMenu.slideDown();
        }
    });
});
;
/**
 * @file
 * Provides client-side functionality for the third party script addsearch.
 */

(function ($, Drupal, once) {

  // Initialize default settings for the AddSearch script/plugin
  window.addsearch_settings = {
    "addsearch-input": {
      "hide_logo": true,
      "automatic_filter_results_by_site_language": true
    }
  };

  function loadAddSearchScript() {
    if (document.getElementById('addsearch-script') === null) {
      let script = document.createElement('script');
      script.id = 'addsearch-script';
      script.src = 'https://cdn.addsearch.com/v5/addsearch-ui.min.js?key=09c8ae51b3fa13496a843ff25a0edc59&id=addsearch-input';
      script.type = 'text/javascript';
      document.body.append(script);

      initializeAddSearchObserver();
    }
  }

  function initializeAddSearchObserver() {
    // Select the node that will be observed for mutations
    const targetNode = document.body;

    // Options for the observer (which mutations to observe)
    const config = {subtree: true, attributeFilter: ['class']};

    // Callback function to execute when mutations are observed
    const observerCallback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        let addsScrollNoteClass = '.addsWg-scroll-notification';

        if ($(addsScrollNoteClass).length < 1) {
          let view_more_text = Drupal.t('Scroll to view more');
          $(`<div class="addsWg-scroll-notification">${view_more_text}</div>`).prependTo('.addsWg--footer');

        } else if (mutation.type === 'attributes' && !$(addsScrollNoteClass).hasClass('animate')) {
          observer.disconnect();
          $(addsScrollNoteClass).addClass('animate');
          $(addsScrollNoteClass).animate({left: '50%'}, 4000, 'linear', () => {
            $(addsScrollNoteClass).animate({opacity: 0}, 400, 'linear', () => {
              $(addsScrollNoteClass).addClass('hidden');
            });
          });
        }
      }
    };

    // Create an observer instance linked to the callback function
    const addSearchObserver = new MutationObserver(observerCallback);

    // Start observing the target node for configured mutations
    addSearchObserver.observe(targetNode, config);
  }

  function attach(context) {
    $(once('AddSearchLoad', '.menu-item__search', context))
      .on('click.AddSearchLoad', loadAddSearchScript);
  }

  function detach(context) {
    $(once.remove('AddSearchLoad', '.menu-item__search', context))
      .off('click.AddSearchLoad');
  }

  /**
   * Behaviors for the AddSearch script/plugin.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behaviors.
   * @prop {Drupal~behaviorDetach} detach
   *   Detaches the behaviors.
   */
  Drupal.behaviors.AddSearch = {
    attach,
    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        detach(context);
      }
    }
  };

})(jQuery, Drupal, once);

;
(function ($) {

  // Hacky way to copy the contact us menu item into the logo wrapper to show on mobile and keep the links if updated in DRUPAL
  let lastMenuItem = $('.menu-item__right').last();
  $('.mobile-nav__wrapper').before(lastMenuItem.html());

  // Add event listener to close the menu if a click happens on an element other than the menu
  $('#page').on('click', (event) => {
    if ($('body').hasClass('menu-overlay')) {
      closeMenu();
    }
  });

  // Add event listener to add new class/state for zero/main level menu items with submenu
  $('.menu-item__has-submenu').on('click', (event) => {
    event.stopPropagation();

    let clickedElement = $(event.currentTarget);
    let hideFeatured = clickedElement.hasClass('menu-item__hide-featured');
    let preOpenItem = clickedElement.find('.menu-item__pre-open');
    let isSubmenuClick = $(event.target).parents('.submenu-container').length > 0 ||
      $(event.target).hasClass('search-container') || $(event.target).parents('.search-container').length > 0;
    let isSearchClick = $(event.target).hasClass('search-container');

    if(!isSearchClick) {
      // Prevent addsearch popup to show if clicked on container
      $('.adds-components-widget-results').addClass('addsWg-hidden');
    }

    if (clickedElement.hasClass('menu-item__is-open') && !isSubmenuClick) {
      event.preventDefault();
      if (window.innerWidth < 1101) {
        $('.menu-item__has-submenu.menu-item__is-open').removeClass('menu-item__is-open');
      } else {
        closeMenu();
      }
    } else if (!isSubmenuClick) {
      event.preventDefault();

      openMenu();

      // Remove open state from previous clicked menu item
      $('.menu-item__has-submenu.menu-item__is-open').removeClass('menu-item__is-open');

      loadFeaturedItems(clickedElement, false, hideFeatured);

      if (preOpenItem.length > 0 && !clickedElement.parents('ul.menu').hasClass('is-active')) {
        preOpenItem.removeClass('menu-item__is-open');
        preOpenItem.click();
      }

      // Add open new state to clicked menu item
      clickedElement.addClass('menu-item__is-open');
    }
  });

  // Add event listener to second level menu items which will show the submenu of the clicked item
  $('.level-2>.menu-item').on('click', (event) => {

    let clickedElement = $(event.currentTarget);
    let hideFeatured = clickedElement.hasClass('menu-item__hide-featured');
    let columns = clickedElement.hasClass('menu-item__two-columns');
    let isSubmenuClick = $(event.target).parents('.level-3').length > 0;

    if (clickedElement.children('.submenu').length < 1 && clickedElement.children('a').length > 0) {
      //let href = clickedElement.children('a').prop('href');
      //window.location = href;
    } else {
      //event.preventDefault();

      if (isSubmenuClick) {
        //let element = $(event.target);
        //let href = element.is('a') ? element.prop('href') : element.find('a').prop('href');
        //window.location = href;
      } else if (clickedElement.hasClass('menu-item__is-open')) {
        clickedElement.removeClass('menu-item__is-open');

        if (window.innerWidth < 1100) {
          clickedElement.parent().prev().show();
        }
      } else {

        if (window.innerWidth < 1100) {
          clickedElement.parent().prev().hide();
        }

        // Remove open state from previous clicked menu item
        $('.level-2>.menu-item.menu-item__is-open').removeClass('menu-item__is-open');

        // Add open new state to clicked menu item
        loadSubmenuItems(clickedElement, columns);
        loadFeaturedItems(clickedElement, true, hideFeatured);
        clickedElement.addClass('menu-item__is-open');
      }
    }
  });

  $('.side-menu-container, .submenu.level-2 ').on('click', '.level-3>.menu-item', function (event) {
    //let clickedElement = $(event.currentTarget);
    //let href = clickedElement.children('a').prop('href');

    //window.location = href;
  });

  $('.mobile-nav__wrapper').on('click', (event) => {
    let clickedElement = $(event.currentTarget);
    let activeState = 'is-active';

    if (clickedElement.hasClass(activeState)) {
      clickedElement.parents('.main-menu > .menu').removeClass('full-height');
      clickedElement.parents('ul.menu').removeClass(activeState);
      clickedElement.removeClass(activeState);
      closeMenu();
    } else {
      clickedElement.parents('.main-menu > .menu').addClass('full-height');
      clickedElement.parents('ul.menu').addClass(activeState);
      clickedElement.addClass(activeState);
      openMenu();
    }
  });

  $('.menu-item__contact').click((event) => {
    let clickedElement = $(event.currentTarget);
    let href = clickedElement.children('a').prop('href');

    window.location = href;
  });

  // Add scroll event listener to add/remove a class in the menu
  $(window).on('scroll', (event) => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);

    let navContainer = $('.main-menu');

    if (window.scrollY > 0 && !navContainer.hasClass('scroll-overlay')) {
      navContainer.addClass('scroll-overlay');
    } else if (window.scrollY < 1) {
      navContainer.removeClass('scroll-overlay');
    }

    updateNavTop();
  });

  const loadSubmenuItems = (element) => {
    let level_3_items_html = element.html();
    let container = element.parents('.submenu-container');
    let sideMenu = container.find('.side-menu-container');
    let hasMultiColumn = element.find('.two-columns').length > 0 ||
      element.find('.three-columns').length > 0 ||
      element.find('.four-columns').length > 0;
    let isThreeColumn = element.find('.three-columns').length > 0;

    sideMenu.removeClass('is-multi-column-container');
    sideMenu.removeClass('is-three-column-container');
    sideMenu.removeClass('is-single-column-container');

    if (hasMultiColumn && window.innerWidth > 1100) {
      sideMenu.addClass('is-multi-column-container');
      if (isThreeColumn) {
        sideMenu.addClass('is-three-column-container');
      }
    } else if (!hasMultiColumn && window.innerWidth > 1100) {
      sideMenu.addClass('is-single-column-container');
    }

    sideMenu.html(level_3_items_html);
  }

  const loadFeaturedItems = (element, isSubItem, hideFeatured) => {
    let featuredItems = element.children('.featured-items');
    let featuredContainer = element.find('.featured-container');

    if (isSubItem) {
      let container = element.parents('.submenu-container');
      featuredContainer = container.find('.featured-container');
    }

    if (hideFeatured) {
      featuredContainer.parent().addClass('featured-hidden');
    } else {
      featuredContainer.parent().removeClass('featured-hidden');
    }

    if (featuredItems.length > 0 && featuredItems.children().length > 0) {

      if (featuredItems.find('.field__item').length > 1) {
        featuredContainer.addClass('multiple-items');
      } else {
        featuredContainer.removeClass('multiple-items');
      }

      let featured_txt = Drupal.t('Featured Resources');

      featuredContainer.html('<span>' + featured_txt + '</span>' + featuredItems.html());
    } else if (!isSubItem && featuredItems.length > 0 && featuredItems.children().length < 1) {
      featuredContainer.parent().addClass('featured-hidden');
    } else if (featuredItems.length < 1 && featuredItems.children().length < 1) {
      //featuredContainer.parent().addClass('featured-hidden');
    }
  }

  const openMenu = () => {
    $('body').addClass('menu-overlay');
    scrollToggle(true);
  }

  const closeMenu = () => {
    $('.menu-item__has-submenu.menu-item__is-open').removeClass('menu-item__is-open');
    $('body').removeClass('menu-overlay');
    scrollToggle();
    $('ul.menu').find('.is-hidden').not('.featured-items').removeClass('is-hidden');
    $(window).scroll();
  }

  // Fixes the position to prevent scrolling of content in the back
  const scrollToggle = (fixed = false) => {
    if (fixed) {
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
      body.style.width = '100%';
    } else {
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  };

  const updateNavTop = () => {
    let curWidth = window.innerWidth;

    if ((window.scrollY > 0 || $('body').hasClass('menu-overlay')) && curWidth > 1100) {
      const scrollSpace = document.documentElement.style.getPropertyValue('scroll-padding-top');
      $('div.main-menu .full-span').css('top', parseInt(scrollSpace || 0) + 'px');
    } else {
      $('div.main-menu .full-span').css('top', 'auto');
    }
  }

  // Create a condition that targets viewports
  const breakpoint = Coupa.getCssVar('break-3-px');
  const mediaQuery = window.matchMedia(`(min-width: ${breakpoint})`);

  function handleTabletChange(e) {
    // Trigger the following functions once the mediaQuery is triggered
    updateNavTop();
    scrollToggle();
    $('.mobile-nav__wrapper.is-active').click();
    $('.menu-item__has-submenu.menu-item__is-open').click();

    // Check if the media query is true
    if (e.matches) {
    } else {
    }
  }

  // Register event listener
  mediaQuery.addListener(handleTabletChange);

  // Initial check
  handleTabletChange(mediaQuery);
})(jQuery);
;