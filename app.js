(function(){"use strict";

/* ============================================================
   STATE & ELEMENT CACHE
   ============================================================ */
var state={chats:[],activeChatId:null,themePref:'dark',userName:'',userPhoto:null,fontScale:false,highContrast:false,ttsAuto:false,appLock:false,isGenerating:false,projects:[],webSearch:false};
var els={};
function $(id){return document.getElementById(id);}
function byId(id){return document.getElementById(id);}