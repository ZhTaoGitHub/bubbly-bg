"use strict";window.bubbly=function(t){var o=t||{},r=function(){return Math.random()},e=document.createElement("canvas");e.setAttribute("style","position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;");var a=e.width=window.innerWidth,i=e.height=window.innerHeight;document.body.appendChild(e);var n=e.getContext("2d");n.shadowColor=o.shadowColor||"#fff",n.shadowBlur=o.blur||4;var l=n.createLinearGradient(0,0,a,i);l.addColorStop(0,o.colorStart||"#25A6E1"),l.addColorStop(1,o.colorStop||"#176EB5");for(var h=o.bubbles||Math.floor(.02*(a+i)),d=[],c=0;c<h;c++)d.push({f:(o.bubbleFunc||function(){return"hsla(0, 0%, 100%, "+.1*r()+")"}).call(),x:r()*a,y:r()*i,r:4+r()*a/25,a:r()*Math.PI*2,v:.1+.5*r()});!function t(){!1!==o.animate&&requestAnimationFrame(t),n.globalCompositeOperation="source-over",n.fillStyle=l,n.fillRect(0,0,a,i),n.globalCompositeOperation=o.compose||"lighter",d.forEach(function(t){n.beginPath(),n.arc(t.x,t.y,t.r,0,2*Math.PI),n.fillStyle=t.f,n.fill(),t.x+=Math.cos(t.a)*t.v,t.y+=Math.sin(t.a)*t.v,t.x-t.r>a&&(t.x=-t.r),t.x+t.r<0&&(t.x=a+t.r),t.y-t.r>i&&(t.y=-t.r),t.y+t.r<0&&(t.y=i+t.r)})}()};