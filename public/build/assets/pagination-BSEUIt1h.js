import{j as s,r as o}from"./app-d87wUG6n.js";import{c as r,a as n,b as c}from"./GuestLayout-xHgmO_Y8.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=r("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),g=({className:e,...a})=>s.jsx("nav",{role:"navigation","aria-label":"pagination",className:n("mx-auto flex w-full justify-center",e),...a});g.displayName="Pagination";const x=o.forwardRef(({className:e,...a},i)=>s.jsx("ul",{ref:i,className:n("flex flex-row items-center gap-1",e),...a}));x.displayName="PaginationContent";const d=o.forwardRef(({className:e,...a},i)=>s.jsx("li",{ref:i,className:n("",e),...a}));d.displayName="PaginationItem";const t=({className:e,isActive:a,size:i="icon",...l})=>s.jsx("a",{"aria-current":a?"page":void 0,className:n(c({variant:a?"outline":"ghost",size:i}),e),...l});t.displayName="PaginationLink";const h=({className:e,...a})=>s.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:n("gap-1 pl-2.5",e),...a,children:[s.jsx(m,{className:"h-4 w-4"}),s.jsx("span",{children:"Previous"})]});h.displayName="PaginationPrevious";const N=({className:e,...a})=>s.jsxs(t,{"aria-label":"Go to next page",size:"default",className:n("gap-1 pr-2.5",e),...a,children:[s.jsx("span",{children:"Next"}),s.jsx(p,{className:"h-4 w-4"})]});N.displayName="PaginationNext";export{g as P,x as a,d as b,h as c,t as d,N as e};
