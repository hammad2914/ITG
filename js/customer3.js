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
     //Using exception to Bluma widescreen breakpoint width (1216), using 1100 instead for break-3
    const bp_mobile_desktop = 1100;
  
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
        if (window.innerWidth < (bp_mobile_desktop + 1)) {
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
  
          if (window.innerWidth < bp_mobile_desktop) {
            clickedElement.parent().prev().show();
          }
        } else {
  
          if (window.innerWidth < bp_mobile_desktop) {
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
  
    let prevWidth = window.innerWidth;
  
    window.addEventListener('resize', (event) => {
  
      let curWidth = window.innerWidth;
  
      if ((prevWidth > bp_mobile_desktop && curWidth < (bp_mobile_desktop + 1)) || (prevWidth < (bp_mobile_desktop + 1) && curWidth > bp_mobile_desktop)) {
        updateNavTop();
        scrollToggle();
        $('.mobile-nav__wrapper.is-active').click();
        $('.menu-item__has-submenu.menu-item__is-open').click();
        prevWidth = window.innerWidth;
      }
    });
  
    /*let orientation = window.matchMedia("(orientation: portrait)");
    orientation.addEventListener('change', (event) => {
      if(event.matches) {
        // Portrait mode
      } else {
        // Landscape
      }
    })*/
  
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
  
      if (hasMultiColumn && window.innerWidth > bp_mobile_desktop) {
        sideMenu.addClass('is-multi-column-container');
        if (isThreeColumn) {
          sideMenu.addClass('is-three-column-container');
        }
      } else if (!hasMultiColumn && window.innerWidth > bp_mobile_desktop) {
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
  
      if ((window.scrollY > 0 || $('body').hasClass('menu-overlay')) && curWidth > bp_mobile_desktop) {
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
  /*!
   * jQuery Form Plugin
   * version: 4.3.0
   * Requires jQuery v1.7.2 or later
   * Project repository: https://github.com/jquery-form/form
  
   * Copyright 2017 Kevin Morris
   * Copyright 2006 M. Alsup
  
   * Dual licensed under the LGPL-2.1+ or MIT licenses
   * https://github.com/jquery-form/form#license
  
   * This library is free software; you can redistribute it and/or
   * modify it under the terms of the GNU Lesser General Public
   * License as published by the Free Software Foundation; either
   * version 2.1 of the License, or (at your option) any later version.
   * This library is distributed in the hope that it will be useful,
   * but WITHOUT ANY WARRANTY; without even the implied warranty of
   * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
   * Lesser General Public License for more details.
   */
  !function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(q){"use strict";var m=/\r?\n/g,S={};S.fileapi=void 0!==q('<input type="file">').get(0).files,S.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=t.form;"image"===(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof q.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function N(){var e;q.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,o,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],o=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:o},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var s=M.traditional;void 0===s&&(s=q.ajaxSettings.traditional);var u,c,C=[],l=this.formToArray(M.semantic,C,M.filtering);if(M.data&&(c=q.isFunction(M.data)?M.data(l):M.data,M.extraData=c,u=q.param(c,s)),M.beforeSubmit&&!1===M.beforeSubmit(l,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=q.param(l,s);u&&(f=f?f+"&"+u:u),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+f,M.data=null):M.data=f;var d,m,p,h=[];M.resetForm&&h.push(function(){X.resetForm()}),M.clearForm&&h.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target?(d=M.success||function(){},h.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})):M.success&&(q.isArray(M.success)?q.merge(h,M.success):h.push(M.success)),M.success=function(e,t,r){for(var a=M.context||this,n=0,o=h.length;n<o;n++)h[n].apply(a,[e,t,r||X,X])},M.error&&(m=M.error,M.error=function(e,t,r){var a=M.context||this;m.apply(a,[e,t,r,X])}),M.complete&&(p=M.complete,M.complete=function(e,t){var r=M.context||this;p.apply(r,[e,t,X])});var v=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,g="multipart/form-data",x=X.attr("enctype")===g||X.attr("encoding")===g,y=S.fileapi&&S.formdata;N("fileAPI :"+y);var b,T=(v||x)&&!y;!1!==M.iframe&&(M.iframe||T)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){b=w(l)}):b=w(l):b=(v||x)&&y?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,o&&o.call(this,e,t)},q.ajax(n)}(l):q.ajax(M),X.removeData("jqxhr").data("jqxhr",b);for(var j=0;j<C.length;j++)C[j]=null;return this.trigger("form-submit-notify",[this,M]),this;function w(e){var t,r,l,f,o,d,m,p,a,n,h,v,i=X[0],g=q.Deferred();if(g.abort=function(e){p.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,o="jqFormIO"+(new Date).getTime();var s=i.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?o=n:d.attr2("name",o):(d=q('<iframe name="'+o+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),m=d[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{m.contentWindow.document.execCommand&&m.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&q.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&q.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),O&&!/post/i.test(O)||i.setAttribute("method","POST"),t!==l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(i)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||d.appendTo(u),m.attachEvent?m.attachEvent("onload",A):m.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(m).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!p.aborted&&!k){if((S=b(m))||(N("cannot access response document"),e=y),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e===y&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){m.detachEvent?m.detachEvent("onload",A):m.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=S.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=S.getElementsByTagName("pre")[0],s=S.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"===u&&!p.responseXML&&p.responseText&&(p.responseXML=F(p.responseText));try{w=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){N("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(N("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",p),g.resolve(p.responseText,"success",p),f&&q.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&q.event.trigger("ajaxError",[p,l,t])),f&&q.event.trigger("ajaxComplete",[p,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),p.responseXML=null},100)}}}var F=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},L=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&(("json"===t||!t)&&0<=a.indexOf("json")?o=L(o):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(o)),o};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i));var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d,m,p=this[0],h=this.attr("id"),v=(v=e||void 0===p.elements?p.getElementsByTagName("*"):p.elements)&&q.makeArray(v);if(h&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(n)),!v||!v.length)return a;for(q.isFunction(r)&&(v=q.map(v,r)),o=0,c=v.length;o<c;o++)if((m=(u=v[o]).name)&&!u.disabled)if(e&&p.clk&&"image"===u.type)p.clk===u&&(a.push({name:m,value:q(u).val(),type:u.type}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((s=q.fieldValue(u,!0))&&s.constructor===Array)for(t&&t.push(u),i=0,l=s.length;i<l;i++)a.push({name:m,value:s[i]});else if(S.fileapi&&"file"===u.type){t&&t.push(u);var g=u.files;if(g.length)for(i=0;i<g.length;i++)a.push({name:m,value:g[i],type:u.type});else a.push({name:m,value:"",type:u.type})}else null!=s&&(t&&t.push(u),a.push({name:m,value:s,type:u.type,required:u.required}));return e||!p.clk||(m=(d=(f=q(p.clk))[0]).name)&&!d.disabled&&"image"===d.type&&(a.push({name:m,value:f.val()}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),q.param(o)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=q.fieldValue(n,e);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?q.merge(t,o):t.push(o))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(m,"\r\n");var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"===a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=(d=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return d;i.push(d)}}return i},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"===t||"radio"===t?this.checked=r:"option"===this.tagName.toLowerCase()&&(e=q(this).parent("select"),r&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=r)})},q.fn.ajaxSubmit.debug=!1});
  
  ;
  /**
  * DO NOT EDIT THIS FILE.
  * See the following change record for more information,
  * https://www.drupal.org/node/2815083
  * @preserve
  **/
  (function ($, Drupal, drupalSettings) {
    Drupal.Views = {};
    Drupal.Views.parseQueryString = function (query) {
      var args = {};
      var pos = query.indexOf('?');
      if (pos !== -1) {
        query = query.substring(pos + 1);
      }
      var pair;
      var pairs = query.split('&');
      for (var i = 0; i < pairs.length; i++) {
        pair = pairs[i].split('=');
        if (pair[0] !== 'q' && pair[1]) {
          args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
        }
      }
      return args;
    };
    Drupal.Views.parseViewArgs = function (href, viewPath) {
      var returnObj = {};
      var path = Drupal.Views.getPath(href);
      var viewHref = Drupal.url(viewPath).substring(drupalSettings.path.baseUrl.length);
      if (viewHref && path.substring(0, viewHref.length + 1) === "".concat(viewHref, "/")) {
        returnObj.view_args = decodeURIComponent(path.substring(viewHref.length + 1, path.length));
        returnObj.view_path = path;
      }
      return returnObj;
    };
    Drupal.Views.pathPortion = function (href) {
      var protocol = window.location.protocol;
      if (href.substring(0, protocol.length) === protocol) {
        href = href.substring(href.indexOf('/', protocol.length + 2));
      }
      return href;
    };
    Drupal.Views.getPath = function (href) {
      href = Drupal.Views.pathPortion(href);
      href = href.substring(drupalSettings.path.baseUrl.length, href.length);
      if (href.substring(0, 3) === '?q=') {
        href = href.substring(3, href.length);
      }
      var chars = ['#', '?', '&'];
      for (var i = 0; i < chars.length; i++) {
        if (href.indexOf(chars[i]) > -1) {
          href = href.substr(0, href.indexOf(chars[i]));
        }
      }
      return href;
    };
  })(jQuery, Drupal, drupalSettings);;
  /**
  * DO NOT EDIT THIS FILE.
  * See the following change record for more information,
  * https://www.drupal.org/node/2815083
  * @preserve
  **/
  (function ($, Drupal, drupalSettings) {
    Drupal.behaviors.ViewsAjaxView = {};
    Drupal.behaviors.ViewsAjaxView.attach = function (context, settings) {
      if (settings && settings.views && settings.views.ajaxViews) {
        var ajaxViews = settings.views.ajaxViews;
        Object.keys(ajaxViews || {}).forEach(function (i) {
          Drupal.views.instances[i] = new Drupal.views.ajaxView(ajaxViews[i]);
        });
      }
    };
    Drupal.behaviors.ViewsAjaxView.detach = function (context, settings, trigger) {
      if (trigger === 'unload') {
        if (settings && settings.views && settings.views.ajaxViews) {
          var ajaxViews = settings.views.ajaxViews;
          Object.keys(ajaxViews || {}).forEach(function (i) {
            var selector = ".js-view-dom-id-".concat(ajaxViews[i].view_dom_id);
            if ($(selector, context).length) {
              delete Drupal.views.instances[i];
              delete settings.views.ajaxViews[i];
            }
          });
        }
      }
    };
    Drupal.views = {};
    Drupal.views.instances = {};
    Drupal.views.ajaxView = function (settings) {
      var selector = ".js-view-dom-id-".concat(settings.view_dom_id);
      this.$view = $(selector);
      var ajaxPath = drupalSettings.views.ajax_path;
      if (ajaxPath.constructor.toString().indexOf('Array') !== -1) {
        ajaxPath = ajaxPath[0];
      }
      var queryString = window.location.search || '';
      if (queryString !== '') {
        queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
        if (queryString !== '') {
          queryString = (/\?/.test(ajaxPath) ? '&' : '?') + queryString;
        }
      }
      this.element_settings = {
        url: ajaxPath + queryString,
        submit: settings,
        setClick: true,
        event: 'click',
        selector: selector,
        progress: {
          type: 'fullscreen'
        }
      };
      this.settings = settings;
      this.$exposed_form = $("form#views-exposed-form-".concat(settings.view_name.replace(/_/g, '-'), "-").concat(settings.view_display_id.replace(/_/g, '-')));
      once('exposed-form', this.$exposed_form).forEach($.proxy(this.attachExposedFormAjax, this));
      once('ajax-pager', this.$view.filter($.proxy(this.filterNestedViews, this))).forEach($.proxy(this.attachPagerAjax, this));
      var selfSettings = $.extend({}, this.element_settings, {
        event: 'RefreshView',
        base: this.selector,
        element: this.$view.get(0)
      });
      this.refreshViewAjax = Drupal.ajax(selfSettings);
    };
    Drupal.views.ajaxView.prototype.attachExposedFormAjax = function () {
      var that = this;
      this.exposedFormAjax = [];
      $('input[type=submit], button[type=submit], input[type=image]', this.$exposed_form).not('[data-drupal-selector=edit-reset]').each(function (index) {
        var selfSettings = $.extend({}, that.element_settings, {
          base: $(this).attr('id'),
          element: this
        });
        that.exposedFormAjax[index] = Drupal.ajax(selfSettings);
      });
    };
    Drupal.views.ajaxView.prototype.filterNestedViews = function () {
      return !this.$view.parents('.view').length;
    };
    Drupal.views.ajaxView.prototype.attachPagerAjax = function () {
      this.$view.find('ul.js-pager__items > li > a, th.views-field a, .attachment .views-summary a').each($.proxy(this.attachPagerLinkAjax, this));
    };
    Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function (id, link) {
      var $link = $(link);
      var viewData = {};
      var href = $link.attr('href');
      $.extend(viewData, this.settings, Drupal.Views.parseQueryString(href), Drupal.Views.parseViewArgs(href, this.settings.view_base_path));
      var selfSettings = $.extend({}, this.element_settings, {
        submit: viewData,
        base: false,
        element: link
      });
      this.pagerAjax = Drupal.ajax(selfSettings);
    };
    Drupal.AjaxCommands.prototype.viewsScrollTop = function (ajax, response) {
      var offset = $(response.selector).offset();
      var scrollTarget = response.selector;
      while ($(scrollTarget).scrollTop() === 0 && $(scrollTarget).parent()) {
        scrollTarget = $(scrollTarget).parent();
      }
      if (offset.top - 10 < $(scrollTarget).scrollTop()) {
        $(scrollTarget).animate({
          scrollTop: offset.top - 10
        }, 500);
      }
    };
  })(jQuery, Drupal, drupalSettings);;
  /**
   * @file
   * better_exposed_filters.js
   *
   * Provides some client-side functionality for the Better Exposed Filters module.
   */
  
  (function ($, Drupal, drupalSettings) {
    Drupal.behaviors.betterExposedFilters = {
      attach: function (context, settings) {
        // Add highlight class to checked checkboxes for better theming.
        $('.bef-tree input[type=checkbox], .bef-checkboxes input[type=checkbox]')
          // Highlight newly selected checkboxes.
          .change(function () {
            _bef_highlight(this, context);
          })
          .filter(':checked').closest('.form-item', context).addClass('highlight');
      }
    };
  
    /*
     * Helper functions
     */
  
    /**
     * Adds/Removes the highlight class from the form-item div as appropriate.
     */
    function _bef_highlight(elem, context) {
      $elem = $(elem, context);
      $elem.attr('checked')
        ? $elem.closest('.form-item', context).addClass('highlight')
        : $elem.closest('.form-item', context).removeClass('highlight');
    }
  
  })(jQuery, Drupal, drupalSettings);
  ;
  /**
  * DO NOT EDIT THIS FILE.
  * See the following change record for more information,
  * https://www.drupal.org/node/2815083
  * @preserve
  **/
  Drupal.debounce = function (func, wait, immediate) {
    var timeout;
    var result;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var context = this;
      var later = function later() {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
      }
      return result;
    };
  };;
  /**
   * @file
   * auto_submit.js
   *
   * Provides a "form auto-submit" feature for the Better Exposed Filters module.
   */
  
  (function ($, Drupal) {
  
    /**
     * To make a form auto submit, all you have to do is 3 things:.
     *
     * Use the "better_exposed_filters/auto_submit" js library.
     *
     * On gadgets you want to auto-submit when changed, add the
     * data-bef-auto-submit attribute. With FAPI, add:
     * @code
     *  '#attributes' => array('data-bef-auto-submit' => ''),
     * @endcode
     *
     * If you want to have auto-submit for every form element, add the
     * data-bef-auto-submit-full-form to the form. With FAPI, add:
     * @code
     *   '#attributes' => array('data-bef-auto-submit-full-form' => ''),
     * @endcode
     *
     * If you want to exclude a field from the bef-auto-submit-full-form auto
     * submission, add an attribute of data-bef-auto-submit-exclude to the form
     * element. With FAPI, add:
     * @code
     *   '#attributes' => array('data-bef-auto-submit-exclude' => ''),
     * @endcode
     *
     * Finally, you have to identify which button you want clicked for autosubmit.
     * The behavior of this button will be honored if it's ajaxy or not:
     * @code
     *  '#attributes' => array('data-bef-auto-submit-click' => ''),
     * @endcode
     *
     * Currently only 'select', 'radio', 'checkbox' and 'textfield' types are
     * supported. We probably could use additional support for HTML5 input types.
     */
    Drupal.behaviors.betterExposedFiltersAutoSubmit = {
      attach: function (context) {
        // When exposed as a block, the form #attributes are moved from the form
        // to the block element, thus the second selector.
        // @see \Drupal\block\BlockViewBuilder::preRender
        var selectors = 'form[data-bef-auto-submit-full-form], [data-bef-auto-submit-full-form] form, [data-bef-auto-submit]';
  
        // The change event bubbles so we only need to bind it to the outer form
        // in case of a full form, or a single element when specified explicitly.
        $(selectors, context).addBack(selectors).each(function (i, e) {
          // Store the current form.
          var $form = $(e);
  
          // Retrieve the autosubmit delay for this particular form.
          var autoSubmitDelay = $form.data('bef-auto-submit-delay') || 500;
  
          // Attach event listeners.
          $form.once('bef-auto-submit')
            // On change, trigger the submit immediately.
            .on('change', triggerSubmit)
            // On keyup, wait for a specified number of milliseconds before
            // triggering autosubmit. Each new keyup event resets the timer.
            .on('keyup', Drupal.debounce(triggerSubmit, autoSubmitDelay));
        });
  
        /**
         * Triggers form autosubmit when conditions are right.
         *
         * - Checks first that the element that was the target of the triggering
         *   event is `:text` or `textarea`, but is not `.hasDatePicker`.
         * - Checks that the keycode of the keyup was not in the list of ignored
         *   keys (navigation keys etc).
         *
         * @param {object} e - The triggering event.
         */
        function triggerSubmit(e) {
          // e.keyCode: key.
          var ignoredKeyCodes = [
            16, // Shift.
            17, // Ctrl.
            18, // Alt.
            20, // Caps lock.
            33, // Page up.
            34, // Page down.
            35, // End.
            36, // Home.
            37, // Left arrow.
            38, // Up arrow.
            39, // Right arrow.
            40, // Down arrow.
            9, // Tab.
            13, // Enter.
            27  // Esc.
          ];
  
          // Triggering element.
          var $target = $(e.target);
          var $submit = $target.closest('form').find('[data-bef-auto-submit-click]');
  
          // Don't submit on changes to excluded elements or a submit element.
          if ($target.is('[data-bef-auto-submit-exclude], :submit') || ($target.attr('autocomplete') == 'off' && !$target.hasClass('bef-datepicker'))) {
            return true;
          }
  
          // Submit only if this is a non-datepicker textfield and if the
          // incoming keycode is not one of the excluded values.
          if (
            $target.is(':text:not(.hasDatepicker), textarea')
            && $.inArray(e.keyCode, ignoredKeyCodes) === -1
          ) {
            $submit.click();
          }
          // Only trigger submit if a change was the trigger (no keyup).
          else if (e.type === 'change') {
            $submit.click();
          }
        }
      }
    }
  
  }(jQuery, Drupal));
  ;
  /*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
  
  !function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var n=e.input.length-e.maximum,r="Please delete "+n+" character";return 1!=n&&(r+="s"),r},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more resultsâ€¦"},maximumSelected:function(e){var n="You can only select "+e.maximum+" item";return 1!=e.maximum&&(n+="s"),n},noResults:function(){return"No results found"},searching:function(){return"Searchingâ€¦"},removeAllItems:function(){return"Remove all items"}}}),e.define,e.require}();;