function isMobile(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}if(!isMobile()){let e=navigator.userAgent;(e.indexOf("Firefox")>-1||e.indexOf("Chrome")>-1)&&$("body").append('<script async src="js/smooth-scrolling-chrome.js"><\/script>')}$(window).scroll((function(){$("body").hasClass("is-home")&&(this.scrollY>$(".l-header").outerHeight()/2?$(".c-navbar").addClass("is-fixed"):$(".c-navbar").removeClass("is-fixed"));const e=$(".l-news").offset().top-60,s=e+$(".l-news").outerHeight()/1.6;this.scrollY>e&&this.scrollY<s?$("body").addClass("is-news-active"):$("body").removeClass("is-news-active")})),$("body").hasClass("is-home")||$(".c-navbar").addClass("is-fixed");let isOpened=!1;function handleBurger(){!1===isOpened?($(".o-burger").addClass("is-opened"),$(".c-navbar").addClass("is-opened"),setTimeout((function(){$(".c-navbar__body").css({overflow:"auto"})}),1e3),isOpened=!0):!0===isOpened&&($(".o-burger").removeClass("is-opened"),$(".c-navbar").removeClass("is-opened"),setTimeout((function(){$(".c-navbar__body").css({overflow:"hidden"})}),1e3),isOpened=!1)}let isGotop=!1;$(".o-gotop").click((function(){isGotop||($("html,body").animate({scrollTop:0},1e3),isGotop=!0,setTimeout((function(){isGotop=!1}),1e3))}));const scene=document.querySelectorAll(".js-parallax");scene.forEach((function(e){new Parallax(e,{relativeInput:!0,hoverOnly:!0})}));const headerSwiper=new Swiper(".l-header__swiper",{effect:"fade",loop:!0,longSwipesRatio:.1,speed:1600,autoplay:{delay:3e3,disableOnInteraction:!1}}),newsSwiper=new Swiper(".l-news__swiper",{loop:!0,longSwipesRatio:.1,slidesPerView:1,spaceBetween:4,speed:1600,breakpoints:{1366:{slidesPerView:4,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:20},576:{slidesPerView:2,spaceBetween:15}},navigation:{nextEl:".l-news__btn-swiper.--next",prevEl:".l-news__btn-swiper.--prev"}});