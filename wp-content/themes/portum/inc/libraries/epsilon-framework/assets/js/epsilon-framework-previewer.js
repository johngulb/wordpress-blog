!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/js/",n(n.s=75)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){this.args=e}return e.prototype.request=function(){var e=this;jQuery.ajax({type:"POST",data:{action:"epsilon_framework_ajax_action",args:this.args},dataType:"json",url:EpsilonWPUrls.ajaxurl,success:function(t){e.result=t,jQuery(e).trigger("epsilon-received-success")},error:function(e,t,n){console.log(e+" :: "+t+" :: "+n)}})},e}();t.EpsilonAjaxRequest=o},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(76),i=n(77),s=n(78),r=n(79),c=n(80),a=n(81),u=n(82);wp.customize.bind("preview-ready",function(){new o.EpsilonColorSchemesPreviewer,new i.EpsilonTypographyPreviewer,new s.EpsilonSectionEditorPreviewer,new r.EpsilonPartialRefresh,new u.EpsilonSectionFocus,new c.EpsilonZoneFocuser,new a.EpsilonPreviewPageChanger})},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(){return function(){this.index=0,wp.customize.preview.bind("update-inline-color-schemes-css",function(e){var t,n={action:[e.class,e.action],nonce:EpsilonWPUrls.ajax_nonce,args:e.data,id:e.id};(t=new o.EpsilonAjaxRequest(n)).request(),jQuery(t).on("epsilon-received-success",function(n){var o=e.action+e.id,i=jQuery("#epsilon-stylesheet-"+o);i.length||(i=jQuery("body").append('<style type="text/css" id="epsilon-stylesheet-'+o+'" />').find("#epsilon-stylesheet-"+o)),i.html()!==t.result.css&&i.html(t.result.css),wp.customize.preview.send("epsilon-set-color-schemes-loading",!1)})})}}();t.EpsilonColorSchemesPreviewer=i},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(){return function(){wp.customize.preview.bind("update-inline-typography-css",function(e){var t,n,i={action:[e.class,e.action],nonce:EpsilonWPUrls.ajax_nonce,args:e.data,id:e.id};(n=new o.EpsilonAjaxRequest(i)).request(),jQuery(n).on("epsilon-received-success",function(e){(t=jQuery("#"+n.result.stylesheet+"-inline-css")).length||(t=jQuery("body").append('<style type="text/css" id="'+n.result.stylesheet+'-inline-css" />').find("#"+n.result.stylesheet+"-inline-css"));for(var o=0;o<n.result.fonts.length;o++)jQuery('link[href="https://fonts.googleapis.com/css?family='+n.result.fonts[o]+'"]').length||jQuery("head").append('<link href="https://fonts.googleapis.com/css?family='+n.result.fonts[o]+'" rel="stylesheet">');t.html(n.result.css),wp.customize.preview.send("epsilon-set-typography-loading",!1)})})}}();t.EpsilonTypographyPreviewer=i},78:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.normalSectionFocus(),this.advancedSectionFocus(),this.repeaterFieldFocus()}return e.prototype.normalSectionFocus=function(){jQuery(document).on("click",".epsilon-section-editor",function(e){e.preventDefault();var t={section:jQuery(this).parents("[data-section]").attr("data-section"),customizerSection:jQuery(this).parents("[data-section]").attr("data-customizer-section-id")};wp.customize.preview.send("epsilon-section-edit",t)})},e.prototype.repeaterFieldFocus=function(){jQuery(document).on("click",".epsilon-field-repeater-editor",function(e){e.preventDefault();var t={section:jQuery(this).parents("[data-section]").attr("data-section"),doubledSection:jQuery(this).attr("data-doubled-section"),control:jQuery(this).attr("data-control"),field:jQuery(this).attr("data-index"),customizerSection:jQuery(this).parents("[data-section]").attr("data-customizer-section-id")};wp.customize.preview.send("epsilon-field-repeater-edit",t)}),jQuery(document).on("click",".epsilon-field-repeater-delete-item",function(e){e.preventDefault();var t={section:jQuery(this).parents("[data-section]").attr("data-section"),doubledSection:jQuery(this).attr("data-doubled-section"),control:jQuery(this).attr("data-control"),index:jQuery(this).attr("data-index"),customizerSection:jQuery(this).parents("[data-section]").attr("data-customizer-section-id")};wp.customize.preview.send("epsilon-field-repeater-delete",t)})},e.prototype.advancedSectionFocus=function(){jQuery(document).on("click",".epsilon-pencil-button-group > a",function(e){e.preventDefault();var t={section:jQuery(this).parents("[data-section]").attr("data-section"),customizerSection:jQuery(this).parents("[data-section]").attr("data-customizer-section-id"),sectionTab:jQuery(this).attr("data-focus")};wp.customize.preview.send("epsilon-section-edit",t)})},e}();t.EpsilonSectionEditorPreviewer=o},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(){function e(){this.sections=[],this.registerSections(),this.handleEvents()}return e.prototype.registerSections=function(){for(var e=jQuery("[data-customizer-section-id]"),t=0;t<e.length;t++){var n=jQuery(e[t]).attr("data-section"),o={id:parseInt(n),section:jQuery(e[t]),stringId:jQuery(e[t]).attr("data-customizer-section-string-id")};this.sections.push(o)}},e.prototype.handleEvents=function(){var e=this;wp.customize.preview.bind("updated-section-repeater",_.debounce(function(t){e.changeSection(t)},300)),wp.customize.preview.bind("updated-field-repeater",_.debounce(function(t){e.changeSectionDeeper(t)},300))},e.prototype.changeSectionDeeper=function(e){var t=this;if(void 0===this.sections[e.sectionIndex])return wp.customize.preview.send("epsilon-refresh-page");var n,i={action:["Epsilon_Page_Generator","refresh_partial_section"],nonce:EpsilonWPUrls.ajax_nonce,args:{control:e.controlId,postId:e.postId,id:e.sectionIndex,sectionType:this.sections[e.sectionIndex].stringId}};(n=new o.EpsilonAjaxRequest(i)).request(),this.standBySection(this.sections[e.sectionIndex].section),jQuery(n).on("epsilon-received-success",function(o){t.liveSection(e.sectionIndex,t.sections[e.sectionIndex].section,n.result.section),jQuery(document).trigger("epsilon-selective-refresh-ready")})},e.prototype.changeSection=function(e){var t,n=this,i={action:["Epsilon_Page_Generator","generate_partial_section"],nonce:EpsilonWPUrls.ajax_nonce,args:{control:e.control,postId:e.postId,id:e.index,value:e.value}};(t=new o.EpsilonAjaxRequest(i)).request(),this.standBySection(this.sections[e.index].section),jQuery(t).on("epsilon-received-success",function(o){n.liveSection(e.index,n.sections[e.index].section,t.result.section),jQuery(document).trigger("epsilon-selective-refresh-ready")})},e.prototype.standBySection=function(e){e.animate({opacity:.5})},e.prototype.liveSection=function(e,t,n){t.replaceWith(n),this.sections=[],this.registerSections(),t.animate({opacity:1})},e}();t.EpsilonPartialRefresh=i},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){var e=this;wp.customize.preview.bind("epsilon-footer-focused",_.debounce(function(t){e.scrollTo(t)},300)),wp.customize.preview.bind("epsilon-header-focused",_.debounce(function(t){e.scrollTo(t)},300))}return e.prototype.scrollTo=function(e){var t=this.calculateOffsets(jQuery(e));jQuery("html, body").animate({scrollTop:t},500)},e.prototype.calculateOffsets=function(e){var t=e.offset();return void 0!==t&&t.hasOwnProperty("top")?t.top:0},e}();t.EpsilonZoneFocuser=o},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(){wp.customize.preview.bind("epsilon-preview-page-change",function(e){console.log(e)})}}();t.EpsilonPreviewPageChanger=o},82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){var e=this;wp.customize.preview.bind("epsilon-section-focused",_.debounce(function(t){void 0===t&&(t={index:0,closed:!0}),t.closed||e.scrollTo(t.index)},300))}return e.prototype.scrollTo=function(e){void 0===e&&(e=0);var t,n=$('[data-section="'+e+'"]');t=this.calculateOffsets(n),$("html, body").animate({scrollTop:t},500)},e.prototype.calculateOffsets=function(e){var t=e.offset();return void 0!==t&&t.hasOwnProperty("top")?t.top:0},e}();t.EpsilonSectionFocus=o}});
//# sourceMappingURL=epsilon-framework-previewer.js.map