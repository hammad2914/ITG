// checks the browser localization and redirects the user to a translated home page which is available
/*
  Try to initialize it as early as possible to prevent loading of other files.
  This function may be removed if we have another caching solution.
 */

  const redirCookie = {
    set: function () {
      let d = new Date();
      d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
  
      document.cookie = 'langRedirect=1;domain=' + location.host + ';path=/;expires=' + d.toUTCString();
    },
    get: function () {
      let name = 'langRedirect=';
      let ca = document.cookie.split(';');
  
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ')
          c = c.substring(1);
        if (c.indexOf(name) == 0)
          return c.substring(name.length, c.length);
      }
    }
  };
  
  const htmlTag = document.getElementsByTagName('html')[0];
  const currentLang = htmlTag.getAttribute('lang');
  
  // check if the current language is en
  if (currentLang === 'en') {
    let lang = navigator.language;
    let availableLang = ['de', 'fr'];
  
    // check if the user hasn't been redirected recently - currently set to 1 day
    if (typeof redirCookie.get() === 'undefined') {
  
      // iterate through all available languages
      availableLang.forEach(function (currentValue) {
  
        // check if the user lang matches our available languages
        // also check against lang codes like de-CH, de-AT, fr-BE, fr-CA, ...
        if (lang === currentValue || lang.indexOf(currentValue + '-') === 0) {
          let redirElement = document.querySelector('head link[rel=alternate][hreflang=' + currentValue + ']');
  
          // check if alternate link element exists
          if(redirElement !==  null){
            let redirLink = redirElement.href;
  
            // check if href of the found element is set
            if (redirLink !== null) {
              // set the redirect Cookie to prevent infinite redirects
              redirCookie.set();
  
              window.stop();
              window.location.href = redirLink;
            }
          }
        }
      });
  
    }
  }
  ;
  if (window.innerWidth >= 1100) {
          document.write('<style>.anti-flicker { visibility: hidden !important} </style>' +
            '<script>(function(e,t,p){var n=document.documentElement,s={p:[],r:[]},u={p:s.p,r:s.r,push:function(e){s.p.push(e)},ready:function(e){s.r.push(e)}};e.intellimize=u,n.className+=" "+p,setTimeout(function(){n.className=n.className.replace(RegExp(" ?"+p),"")},t)})(window, 4000, \'anti-flicker\')</script>' +
            '<link rel="preload" href="https://cdn.intellimize.co/snippet/117756657.js" as="script">' +
            '<script src="https://cdn.intellimize.co/snippet/117756657.js" async onerror="document.documentElement.className = document.documentElement.className.replace(RegExp(\' ?anti-flicker\'), \'\');"></script>' +
            '<link rel="preconnect" href="https://api.intellimize.co" crossorigin>' +
            '<link rel="preconnect" href="https://117756657.intellimizeio.com">' +
            '<link rel="preconnect" href="https://log.intellimize.co" crossorigin>');
          } else {
            // viewportWidth width < 1100
          };