import{r as G,j as d}from"./app-DWJvxgIo.js";var A={};function H(r){if(typeof window>"u")return;const a=document.createElement("style");return a.setAttribute("type","text/css"),a.innerHTML=r,document.head.appendChild(a),r}Object.defineProperty(A,"__esModule",{value:!0});var e=G;function J(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var i=J(e);H(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const K=e.forwardRef(function({style:a={},className:w="",autoFill:u=!1,play:c=!0,pauseOnHover:x=!1,pauseOnClick:b=!1,direction:n="left",speed:h=50,delay:_=0,loop:E=0,gradient:W=!1,gradientColor:j="white",gradientWidth:v=200,onFinish:B,onCycleComplete:I,onMount:S,children:y},L){const[q,O]=e.useState(0),[g,X]=e.useState(0),[p,C]=e.useState(1),[R,D]=e.useState(!1),P=e.useRef(null),o=L||P,f=e.useRef(null),m=e.useCallback(()=>{if(f.current&&o.current){const t=o.current.getBoundingClientRect(),N=f.current.getBoundingClientRect();let s=t.width,l=N.width;(n==="up"||n==="down")&&(s=t.height,l=N.height),C(u&&s&&l&&l<s?Math.ceil(s/l):1),O(s),X(l)}},[u,o,n]);e.useEffect(()=>{if(R&&(m(),f.current&&o.current)){const t=new ResizeObserver(()=>m());return t.observe(o.current),t.observe(f.current),()=>{t&&t.disconnect()}}},[m,o,R]),e.useEffect(()=>{m()},[m,y]),e.useEffect(()=>{D(!0)},[]),e.useEffect(()=>{typeof S=="function"&&S()},[]);const $=e.useMemo(()=>u?g*p/h:g<q?q/h:g/h,[u,q,g,p,h]),T=e.useMemo(()=>Object.assign(Object.assign({},a),{"--pause-on-hover":!c||x?"paused":"running","--pause-on-click":!c||x&&!b||b?"paused":"running","--width":n==="up"||n==="down"?"100vh":"100%","--transform":n==="up"?"rotate(-90deg)":n==="down"?"rotate(90deg)":"none"}),[a,c,x,b,n]),Z=e.useMemo(()=>({"--gradient-color":j,"--gradient-width":typeof v=="number"?`${v}px`:v}),[j,v]),k=e.useMemo(()=>({"--play":c?"running":"paused","--direction":n==="left"?"normal":"reverse","--duration":`${$}s`,"--delay":`${_}s`,"--iteration-count":E?`${E}`:"infinite","--min-width":u?"auto":"100%"}),[c,n,$,_,E,u]),M=e.useMemo(()=>({"--transform":n==="up"?"rotate(90deg)":n==="down"?"rotate(-90deg)":"none"}),[n]),z=e.useCallback(t=>[...Array(Number.isFinite(t)&&t>=0?t:0)].map((N,s)=>i.default.createElement(e.Fragment,{key:s},e.Children.map(y,l=>i.default.createElement("div",{style:M,className:"rfm-child"},l)))),[M,y]);return R?i.default.createElement("div",{ref:o,style:T,className:"rfm-marquee-container "+w},W&&i.default.createElement("div",{style:Z,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:k,onAnimationIteration:I,onAnimationEnd:B},i.default.createElement("div",{className:"rfm-initial-child-container",ref:f},e.Children.map(y,t=>i.default.createElement("div",{style:M,className:"rfm-child"},t))),z(p-1)),i.default.createElement("div",{className:"rfm-marquee",style:k},z(p))):null});var Q=A.default=K;function V({clients:r}){return d.jsx(d.Fragment,{children:r.length>0?d.jsx(Q,{autoFill:!0,pauseOnHover:!0,className:"grid overflow-hidden",children:r.map((a,w)=>d.jsx("img",{src:`/storage/${a.image}`,alt:a.name,loading:"lazy",className:"mr-10 opacity-30 transition duration-200 hover:opacity-100",height:20},w))}):d.jsx("p",{className:"text-center",children:"Belum ada data client yang ditambah."})})}export{V as C,Q as _};
