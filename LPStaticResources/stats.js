var mousetracker;var pwTracker;var strguid="";var _uv;jQuery(document).ready(function(){pwTracker=new pwTrack();pwTracker.initTracker();strguid=pwTracker.guidstring});function pwTrack(){this.showPixel=a;this.createguid=c;this.initTracker=d;pwTrack.prototype.guidstring=null;var b=c();this.guidstring=b;function d(){var i=MD5(window.location.origin+window.location.pathname);try{if(get_cookie(i)=="visited"){_uv=0}else{_uv=1;var g=new Date();g.setDate(g.getDate()+30);var k=g.getFullYear();var j=g.getMonth();var f=g.getDate();set_cookie(i,"visited",k,j,f)}}catch(h){_uv=1}a()}function c(){return guid()}function a(){var e="<div style='display:none;'><img src='"+tracker_url;e+="?guid="+b;e+="&op=1";e+="&pid="+escape(page_id);e+="&refer="+escape(document.referrer);e+="&href="+escape(window.location.href);e+="&hostname="+escape(window.location.hostname);e+="&referrer="+escape(document.referrer);e+="&appCodeName="+escape(navigator.appCodeName);e+="&appName="+escape(navigator.appName);e+="&appVersion="+escape(navigator.appVersion);e+="&cookieEnabled="+escape(navigator.cookieEnabled);e+="&language="+escape(navigator.appCodeName);e+="&platform="+escape(navigator.platform);e+="&userAgent="+escape(navigator.userAgent);e+="&screenWidth="+escape(window.screen.width);e+="&screenHeight="+escape(window.screen.height);e+="&uv="+escape(_uv);e+="'/>";e+="<img src='https://statdumper.pagewiz.com/counter.aspx?pageid="+escape(page_id)+"&isunique="+_uv+"'/>";e+="</div>";$("body").append(e)}}function set_cookie(b,g,i,f,h,j,e,a){var d=b+"="+escape(g);if(i){var c=new Date(i,f,h);d+="; expires="+c.toGMTString()}if(j){d+="; path="+escape(j)}if(e){d+="; domain="+escape(e)}if(a){d+="; secure"}document.cookie=d}function get_cookie(b){var a=document.cookie.match("(^|;) ?"+b+"=([^;]*)(;|$)");if(a){return(unescape(a[2]))}else{return null}}function MD5(s){function L(b,a){return(b<<a)|(b>>>(32-a))}function K(k,b){var G,a,d,F,c;d=(k&2147483648);F=(b&2147483648);G=(k&1073741824);a=(b&1073741824);c=(k&1073741823)+(b&1073741823);if(G&a){return(c^2147483648^d^F)}if(G|a){if(c&1073741824){return(c^3221225472^d^F)}else{return(c^1073741824^d^F)}}else{return(c^d^F)}}function r(a,c,b){return(a&c)|((~a)&b)}function q(a,c,b){return(a&b)|(c&(~b))}function p(a,c,b){return(a^c^b)}function n(a,c,b){return(c^(a|(~b)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(k){var H;var d=k.length;var c=d+8;var b=(c-(c%64))/64;var G=(b+1)*16;var I=Array(G-1);var a=0;var F=0;while(F<d){H=(F-(F%4))/4;a=(F%4)*8;I[H]=(I[H]|(k.charCodeAt(F)<<a));F++}H=(F-(F%4))/4;a=(F%4)*8;I[H]=I[H]|(128<<a);I[G-2]=d<<3;I[G-1]=d>>>29;return I}function B(c){var b="",d="",k,a;for(a=0;a<=3;a++){k=(c>>>(a*8))&255;d="0"+k.toString(16);b=b+d.substr(d.length-2,2)}return b}function J(b){b=b.replace(/\r\n/g,"\n");var a="";for(var k=0;k<b.length;k++){var d=b.charCodeAt(k);if(d<128){a+=String.fromCharCode(d)}else{if((d>127)&&(d<2048)){a+=String.fromCharCode((d>>6)|192);a+=String.fromCharCode((d&63)|128)}else{a+=String.fromCharCode((d>>12)|224);a+=String.fromCharCode(((d>>6)&63)|128);a+=String.fromCharCode((d&63)|128)}}}return a}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()}function mousetrack(){this.setMilsec=e;this.showTrack=i;this.displayMouseTrack=a;this.generateJsonMouseTracker=l;this.initTracker=j;var g=new Array();var b=new Array();var k=new Array();var c=new Array();var h=0;var m="";var d=0;var f=pages_url+"UBTracker.aspx";function j(){$("html").click(function(n){k[k.length]=new MousePosition(n.pageX,n.pageY,h)});$(document).mousemove(function(n){g[g.length]=new MousePosition(n.pageX,n.pageY,h)});m=setInterval(function(){e()},1);x=setInterval(function(){l()},5000)}function e(){h++}function i(){console.log(b);for(var n=0;n<b.length;n++){if(b[n]!=null){console.log(b[n].y+","+b[n].x);$(".mousepointer").css("top",b[n].y+"px");$(".mousepointer").css("left",b[n].x+"px");$("body").append('<div style="top:'+b[n].y+"px;left:"+b[n].x+'px;" class="pix"></div>')}if(c[n]!=null){$("body").append('<div style="top:'+c[n].y+"px;left:"+c[n].x+'px;position:absolute;width:40px;height:15px;display:block;background-color:yellow;border-radius:30px;" class="pix">click</div>')}}}function a(){h=0;$("body").append('<div style="position:absolute;z-index:11px;" class="mousepointer"></div>');$(".mousepointer").css("display","block");i()}function l(){jsonData=$.toJSON(g);b.length=g[g.length-1].timestamp;c.length=g[g.length-1].timestamp;for(var n=0;n<g.length;n++){b[g[n].timestamp]=g[n]}for(var n=0;n<k.length;n++){c[k[n].timestamp]=k[n]}}}function MousePosition(a,c,b){this.x=a;this.y=c;this.timestamp=b}function S4(){return(((1+Math.random())*65536)|0).toString(16).substring(1)}function guid(){var a=Number(new Date());return(S4()+S4()+"-"+S4()+"-"+S4()+"-"+a+"-"+S4()+S4()+S4())};