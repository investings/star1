if(typeof deconcept=="undefined"){var deconcept=new Object()}if(typeof deconcept.util=="undefined"){deconcept.util=new Object()}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object()}deconcept.SWFObject=function(h,w,c,u,q,p,s,t,v,o){if(!document.getElementById){return}this.DETECT_KEY=o?o:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(h){this.setAttribute("swf",h)}if(w){this.setAttribute("id",w)}if(c){this.setAttribute("width",c)}if(u){this.setAttribute("height",u)}if(q){this.setAttribute("version",new deconcept.PlayerVersion(q.toString().split(".")))}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true}if(p){this.addParam("bgcolor",p)}var x=s?s:"high";this.addParam("quality",x);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var r=(t)?t:window.location;this.setAttribute("xiRedirectUrl",r);this.setAttribute("redirectUrl","");if(v){this.setAttribute("redirectUrl",v)}};deconcept.SWFObject.prototype={useExpressInstall:function(b){this.xiSWFPath=!b?"expressinstall.swf":b;this.setAttribute("useExpressInstall",true)},setAttribute:function(d,c){this.attributes[d]=c},getAttribute:function(b){return this.attributes[b]},addParam:function(c,d){this.params[c]=d},getParams:function(){return this.params},addVariable:function(c,d){this.variables[c]=d},getVariable:function(b){return this.variables[b]},getVariables:function(){return this.variables},getVariablePairs:function(){var f=new Array();var d;var e=this.getVariables();for(d in e){f[f.length]=d+"="+e[d]}return f},getSWFHTML:function(){var g="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath)}g='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'"';g+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ';var i=this.getParams();for(var j in i){g+=[j]+'="'+i[j]+'" '}var k=this.getVariablePairs().join("&");if(k.length>0){g+='flashvars="'+k+'"'}g+="/>"}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath)}g='<object id="'+this.getAttribute("id")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'">';g+='<param name="movie" value="'+this.getAttribute("swf")+'" />';var l=this.getParams();for(var j in l){g+='<param name="'+j+'" value="'+l[j]+'" />'}var h=this.getVariablePairs().join("&");if(h.length>0){g+='<param name="flashvars" value="'+h+'" />'}g+="</object>"}return g},write:function(d){if(this.getAttribute("useExpressInstall")){var e=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(e)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title)}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var f=(typeof d=="string")?document.getElementById(d):d;f.innerHTML=this.getSWFHTML();return true}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"))}}return false}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var h=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var g=navigator.plugins["Shockwave Flash"];if(g&&g.description){h=new deconcept.PlayerVersion(g.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."))}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var e=1;var j=3;while(e){try{j++;e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+j);h=new deconcept.PlayerVersion([j,0,0])}catch(i){e=null}}}else{try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(i){try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");h=new deconcept.PlayerVersion([6,0,21]);e.AllowScriptAccess="always"}catch(i){if(h.major==6){return h}}try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(i){}}if(e!=null){h=new deconcept.PlayerVersion(e.GetVariable("$version").split(" ")[1].split(","))}}}return h};deconcept.PlayerVersion=function(b){this.major=b[0]!=null?parseInt(b[0]):0;this.minor=b[1]!=null?parseInt(b[1]):0;this.rev=b[2]!=null?parseInt(b[2]):0};deconcept.PlayerVersion.prototype.versionIsValid=function(b){if(this.major<b.major){return false}if(this.major>b.major){return true}if(this.minor<b.minor){return false}if(this.minor>b.minor){return true}if(this.rev<b.rev){return false}return true};deconcept.util={getRequestParameter:function(h){var g=document.location.search||document.location.hash;if(h==null){return g}if(g){var e=g.substring(1).split("&");for(var f=0;f<e.length;f++){if(e[f].substring(0,e[f].indexOf("="))==h){return e[f].substring((e[f].indexOf("=")+1))}}}return""}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var d=document.getElementsByTagName("OBJECT");for(var f=d.length-1;f>=0;f--){d[f].style.display="none";for(var e in d[f]){if(typeof d[f][e]=="function"){d[f][e]=function(){}}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs)};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true}}if(!document.getElementById&&document.all){document.getElementById=function(b){return document.all[b]}}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;