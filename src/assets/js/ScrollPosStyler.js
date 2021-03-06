/**
 * @license
 *  ========================================================================
 * ScrollPos-Styler v0.7.0
 * https://github.com/acch/scrollpos-styler
 * ========================================================================
 * Copyright 2015 Achim Christ
 * Licensed under MIT (https://github.com/acch/scrollpos-styler/blob/master/LICENSE)
 * ======================================================================== */
var ScrollPosStyler=function(s,e){"use strict";function t(){n=e.pageYOffset;for(var s=[],t=0;i[t];++t){var a=i[t],l=a.getAttribute(m)||o,r=a.classList.contains(c);r&&n>l?s.push({element:a,addClass:f,removeClass:c}):!r&&n<=l&&s.push({element:a,addClass:c,removeClass:f})}return s}function a(s){for(var e=0;s[e];++e){var t=s[e];t.element.classList.add(t.addClass),t.element.classList.remove(t.removeClass)}l=!1}var n=0,l=!1,o=1,r="sps",i=s.getElementsByClassName(r),c="sps--abv",f="sps--blw",m="data-sps-offset",u={init:function(n){l=!0,n&&(n.spsClass&&(r=n.spsClass,i=s.getElementsByClassName(r)),o=n.scrollOffsetY||o,c=n.classAbove||c,f=n.classBelow||f,m=n.offsetTag||m);var u=t();u.length>0?e.requestAnimationFrame(function(){a(u)}):l=!1}};return s.addEventListener("DOMContentLoaded",function(){e.setTimeout(u.init,1)}),e.addEventListener("scroll",function(){if(!l){var s=t();s.length>0&&(l=!0,e.requestAnimationFrame(function(){a(s)}))}}),u}(document,window);
