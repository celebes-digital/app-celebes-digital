import{j as a}from"./app-CfEurVmR.js";import{H as t}from"./Hero-CJRe5wBT.js";import{D as r,a as l,b as o}from"./dialog-GGnl5nVI.js";import{G as c}from"./GuestLayout-BPj5CPp9.js";import{P as d,a as m,b as i,c as x,d as h,e as j}from"./pagination-BzyMLkDT.js";function y({galeries:e}){return a.jsxs(c,{children:[a.jsx(t,{title:"Galeri Kami",subtitle:"Berikut ini adalah dokumentasi kegiatan kami."}),a.jsx("div",{className:"container space-y-5 px-5 py-20",children:e.data.length>0?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-5",children:e.data.map((s,n)=>a.jsxs(r,{children:[a.jsx(l,{asChild:!0,children:a.jsxs("div",{className:"space-y-3",children:[a.jsx("img",{src:`/storage/${s.thumbnail}`,loading:"lazy",className:"w-full rounded-md hover:scale-105 transition duration-300 cursor-pointer",alt:s.name}),a.jsx("p",{className:"text-gray-600 text-sm",children:s.name})]})}),a.jsxs(o,{className:"gap-2",children:[a.jsx("img",{src:`/storage/${s.image}`,className:"mx-auto",alt:s.name,loading:"lazy"}),a.jsx("h4",{className:"font-bold text-2xl",children:s.name}),a.jsx("p",{children:s.description})]})]},n))}),a.jsx(d,{children:a.jsxs(m,{children:[a.jsx(i,{children:a.jsx(x,{className:"cursor-pointer",href:e.prev_page_url})}),a.jsx(i,{children:e.links.slice(1,e.links.length-1).map(s=>a.jsx(h,{href:s.url,isActive:s.active,children:s.label}))}),a.jsx(i,{children:a.jsx(j,{href:e.next_page_url,className:"cursor-pointer"})})]})})]}):a.jsx("p",{children:"Belum ada konten yang ditambah."})})]})}export{y as default};
