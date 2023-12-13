document.addEventListener("click",t=>{let e=document.querySelector(".spider"),i=document.querySelector(".wall");if(!e||!i)return;let l=t.clientX,n=t.clientY,c=i.getBoundingClientRect();if(void 0===e.clientWidth||void 0===e.clientHeight)return;let d=l-c.left,h=n-c.top,o=Math.max(0,Math.min(i.clientWidth-e.clientWidth,d-e.clientWidth/2)),r=Math.max(0,Math.min(i.clientHeight-e.clientHeight,h-e.clientHeight/2));e.style.left=o+"px",e.style.top=r+"px"});//# sourceMappingURL=index.c24eb310.js.map

//# sourceMappingURL=index.c24eb310.js.map
