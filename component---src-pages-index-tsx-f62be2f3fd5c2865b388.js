"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[691],{5277:function(e,t,r){r.r(t),r.d(t,{default:function(){return W}});var n=r(5861),a=r(7757),o=r.n(a),i=r(3442),s=r(2543),u=r(6511),c=r(4667),l=r(7294);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}var f=(0,s.G)((function(e,t){var r=e.direction,n=e.align,a=e.justify,o=e.wrap,i=e.basis,s=e.grow,c=e.shrink,f=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["direction","align","justify","wrap","basis","grow","shrink"]),p={display:"flex",flexDirection:r,alignItems:n,justifyContent:a,flexWrap:o,flexBasis:i,flexGrow:s,flexShrink:c};return l.createElement(u.m$.div,m({ref:t,__css:p},f))}));c.Ts&&(f.displayName="Flex");var p=r(8399),d=r(7487),g=r(5587);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}var v=(0,s.G)((function(e,t){var r=(0,p.m)("Badge",e),n=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}((0,d.Lr)(e),["className"]);return l.createElement(u.m$.span,h({ref:t,className:(0,g.cx)("chakra-badge",e.className)},n,{__css:h({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},r)}))}));c.Ts&&(v.displayName="Badge");var w=r(7690),x=r(4762),y=r(7317),E=r(9900),b=r(2677),k=r(7618),C=r(2310);function O(){var e=!1,t=[],r=new Set,n={subscribe:function(e){return r.add(e),function(){r.delete(e)}},start:function(n,a){if(e){var o=[];return r.forEach((function(e){o.push((0,k.d5)(e,n,{transitionOverride:a}))})),Promise.all(o)}return new Promise((function(e){t.push({animation:[n,a],resolve:e})}))},set:function(t){return(0,b.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),r.forEach((function(e){(0,C.gg)(e,t)}))},stop:function(){r.forEach((function(e){(0,k.p_)(e)}))},mount:function(){return e=!0,t.forEach((function(e){var t=e.animation,r=e.resolve;n.start.apply(n,(0,E.ev)([],(0,E.CR)(t))).then(r)})),function(){e=!1,n.stop()}}};return n}var G=r(9179);function j(){var e=(0,G.h)(O);return(0,l.useEffect)(e.mount,[]),e}var R=r(4292),A=r(5444);function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)}function _(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var S=(0,s.G)((function(e,t){var r=e.area,n=e.templateAreas,a=e.gap,o=e.rowGap,i=e.columnGap,s=e.column,c=e.row,m=e.autoFlow,f=e.autoRows,p=e.templateRows,d=e.autoColumns,g=e.templateColumns,h=_(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),v={display:"grid",gridArea:r,gridTemplateAreas:n,gridGap:a,gridRowGap:o,gridColumnGap:i,gridAutoColumns:d,gridColumn:s,gridRow:c,gridAutoFlow:m,gridAutoRows:f,gridTemplateRows:p,gridTemplateColumns:g};return l.createElement(u.m$.div,I({ref:t,__css:v},h))}));c.Ts&&(S.displayName="Grid");var N=r(2359);var T=function(){return l.createElement(A.i1,{query:"149325488",render:function(e){return l.createElement(S,{templateColumns:"repeat(3, 1fr)",gap:4},e.allInstagramImages.nodes.map((function(e){return l.createElement(A.rU,{key:e.imageId,to:e.link},l.createElement(N.G,{style:{borderRadius:"8px"},image:(0,N.d)(e.localImage),alt:e.imageId}))})))}})},$=r(4861),F=r(9629),P=r(409);var W=function(){var e=(0,F.G)(P.k),t=(0,$.V)(e.names$),r=(0,$.V)(e.i$),a=j(),s=j(),c=j();return l.createElement(l.Fragment,null,l.createElement(w.xu,{shadow:"2xl",borderRadius:"lg",p:"8",minW:"400",mt:"8",mb:"8"},l.createElement(f,{flexDir:"column",alignItems:"center",justifyContent:"center"},l.createElement(R.E.div,{animate:a,transition:{duration:.05}},l.createElement(x.X,{fontSize:"6xl"},"Hi,"," ",l.createElement(u.m$.span,{fontWeight:"extrabold"},t[r]))),l.createElement(y.Ug,{mt:4,mb:6},[["red","She's cute"],["purple","And girly"]].map((function(e,t){return l.createElement(R.E.span,{key:t,custom:t%2==0?-1:1,animate:s,transition:{duration:.1}},l.createElement(v,{colorScheme:e[0]},e[1]))}))),l.createElement(R.E.div,{animate:c,transition:{duration:.1}},l.createElement(i.z,{onClick:function(){(0,n.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.start({y:-5});case 2:return e.incrementIndex(),t.next=5,a.start({y:5});case 5:return t.next=7,a.start({y:0});case 7:case"end":return t.stop()}}),t)})))(),(0,n.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.start((function(e){return{y:2*e}}));case 2:return e.next=4,s.start((function(e){return{y:-2*e}}));case 4:return e.next=6,s.start({y:0});case 6:case"end":return e.stop()}}),e)})))(),(0,n.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.start({rotate:5});case 2:return e.next=4,c.start({rotate:-5});case 4:return e.next=6,c.start({rotate:0});case 6:case"end":return e.stop()}}),e)})))()},shadow:"lg",colorScheme:"pink"},"Who else!?")))),l.createElement(w.xu,{shadow:"2xl",borderRadius:"lg",p:"8",pt:"4",mt:"8",mb:"24",textAlign:"center"},l.createElement(A.rU,{to:"https://www.instagram.com/makixx_/"},l.createElement(x.X,{mb:"4"},"Instagram")),l.createElement(T,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f62be2f3fd5c2865b388.js.map