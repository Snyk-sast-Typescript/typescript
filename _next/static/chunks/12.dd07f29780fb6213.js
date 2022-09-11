"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{5562:function(a,b,c){c.r(b),c.d(b,{Graph:function(){return L}});var d=c(6042),e=c(9396),f=c(828),g=c(7297),h=c(5893),i=c(7294),j=c(6126),k=c(8188),l=c(9189),m=c(2125),n=c(1440);function o(){var a=(0,g.Z)(["\n  text-decoration: underline;\n  pointer-events: all;\n"]);return o=function(){return a},a}function p(){var a=(0,g.Z)(["\n  text-align: ",";\n  font-size: 12px;\n  overflow: hidden;\n  color: ",";\n  pointer-events: none;\n  padding: ",';\n\n  * {\n    font-family: "Roboto Mono", monospace;\n  }\n\n  &.searched {\n    border: 2px solid ',";\n    border-radius: 2px;\n  }\n\n  .highlight {\n    border: 2px dashed #FF2970;\n    background: rgba(255, 214, 0, 0.3);\n  }\n\n  .renderVisible {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    cursor: pointer;\n  }\n"]);return p=function(){return a},a}function q(){var a=(0,g.Z)(["\n  display: inline;\n  flex: 1;\n  font-weight: 500;\n  color: ",";\n  font-size: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: ",";\n"]);return q=function(){return a},a}function r(){var a=(0,g.Z)(["\n  display: block;\n  height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n"]);return r=function(){return a},a}var s=(0,m.ZP)(n.Ld)(o()),t=m.ZP.foreignObject(p(),function(a){return!a.isObject&&"center"},function(a){return a.theme.TEXT_NORMAL},function(a){return a.isObject&&"10px"},function(a){return a.theme.TEXT_POSITIVE}),u=m.ZP.span(q(),function(a){var b,c,d,e=a.theme,f=a.objectKey,g=a.parent;return b=e,c=void 0!==g&&g,d=void 0!==f&&f,c?b.NODE_KEY:d?b.OBJECT_KEY:b.TEXT_POSITIVE},function(a){return a.parent&&"14px"},function(a){return a.parent&&"10px"}),v=m.ZP.span.attrs(function(a){var b,c;return{style:{color:(b=a["data-key"],c=a.theme,Number.isNaN(+b)?"true"===b?c.TEXT_POSITIVE:"false"===b?c.TEXT_DANGER:void 0:"#FD0079")}}})(r()),w=function(a){var b=a.width,c=a.height,d=a.value,e=a.x,f=a.y,g=i.useRef(null);return(0,l.Z)(function(a){return a.performanceMode}),(0,h.jsx)(t,{width:b,height:c,x:0,y:0,ref:g,isObject:!0,children:d.map(function(a,b){return(0,h.jsxs)(v,{"data-key":JSON.stringify(a[1]),"data-x":e,"data-y":f,children:[(0,h.jsxs)(u,{objectKey:!0,children:[JSON.stringify(a[0]).replaceAll('"',""),":"," "]}),(0,h.jsx)(s,{children:JSON.stringify(a[1])})]},b)})})},x=i.memo(w,function(a,b){return String(a.value)===String(b.value)}),y=c(5434),z=c(3719),A=c(9577);function B(){var a=(0,g.Z)(["\n  pointer-events: all;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  background: rgba(0, 0, 0, 0.1);\n  height: 100%;\n  width: 40px;\n  border-left: 1px solid ",";\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n"]);return B=function(){return a},a}function C(){var a=(0,g.Z)(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"]);return C=function(){return a},a}var D=m.ZP.button(B(),function(a){return a.theme.TEXT_NORMAL},function(a){return a.theme.BACKGROUND_MODIFIER_ACCENT}),E=m.ZP.div(C(),function(a){return a.hasCollapse?"space-between":"center"}),F=function(a){var b=a.node,c=a.width,d=a.height,e=a.value,g=a.isParent,j=void 0!==g&&g,k=a.hasCollapse,m=void 0!==k&&k,n=a.x,o=a.y,p=i.useRef(null),q=((0,l.Z)(function(a){return a.performanceMode}),(0,A.Z)(function(a){return a.hideCollapse})),r=(0,z.Z)(function(a){return a.expandNodes}),v=(0,z.Z)(function(a){return a.collapseNodes}),w=(0,f.Z)(i.useState(!0),2),x=w[0],B=w[1],C=function(a){a.stopPropagation(),B(!x),x?v(b.id):r(b.id)};return(0,h.jsx)(t,{width:c,height:d,x:0,y:0,"data-nodeid":b.id,ref:p,hideCollapse:q,hasCollapse:j&&m,children:(0,h.jsxs)(E,{hasCollapse:j&&!q,children:[(0,h.jsx)(u,{"data-x":n,"data-y":o,"data-key":JSON.stringify(e),parent:j,children:(0,h.jsx)(s,{children:JSON.stringify(e).replaceAll('"',"")})}),j&&m&&!q&&(0,h.jsx)(D,{onClick:C,children:(0,h.jsx)(y.GKy,{size:18})})]})})},G=i.memo(F,function(a,b){return a.value===b.value}),H=function(a){var b=a.properties;return(0,h.jsx)(k.Node,(0,e.Z)((0,d.Z)({},a),{label:(0,h.jsx)(i.Fragment,{}),children:function(a){var c=a.width,d=a.height,e=a.x,f=a.y,g=a.node;return Array.isArray(b.text)?(0,h.jsx)(x,{value:b.text,width:c,height:d,x:e,y:f}):(0,h.jsx)(G,{node:g,isParent:b.data.isParent,value:b.text,width:c,height:d,hasCollapse:b.data.hasChild,x:e,y:f})}}))};function I(){var a=(0,g.Z)(["\n  position: absolute;\n  width: 100%;\n  height: ",";\n  background: ",";\n  background-image: ",";\n  background-size: 15px 15px;\n\n  :active {\n    cursor: move;\n  }\n\n  .dragging {\n    pointer-events: none;\n  }\n\n  rect {\n    fill: ",";\n  }\n"]);return I=function(){return a},a}var J=m.ZP.div(I(),function(a){return a.isWidget?"100vh":"calc(100vh - 36px)"},function(a){return a.theme.BACKGROUND_SECONDARY},function(a){var b=a.theme;return"radial-gradient(#505050 0.5px, ".concat(b.BACKGROUND_SECONDARY," 0.5px)")},function(a){return a.theme.BACKGROUND_NODE}),K=function(a){var b=a.isWidget,c=a.openModal,g=a.setSelectedNode,m=(0,l.Z)(function(a){return a.setConfig}),n=(0,l.Z)(function(a){return a.layout}),o=(0,z.Z)(function(a){return a.nodes}),p=(0,z.Z)(function(a){return a.edges}),q=(0,f.Z)(i.useState({width:2e3,height:2e3}),2),r=q[0],s=q[1],t=i.useCallback(function(a,b){g(b.text),c()},[c,g]),u=i.useCallback(function(a){m("zoomPanPinch",a)},[m]),v=i.useCallback(function(a){a.width&&a.height&&s({width:a.width+400,height:a.height+400})},[]),w=i.useCallback(function(){var a=document.querySelector("input:focus");a&&a.blur()},[]);return(0,h.jsx)(J,{isWidget:b,children:(0,h.jsx)(j.d$,{maxScale:2,minScale:.5,initialScale:.7,wheel:{step:.05},zoomAnimation:{animationType:"linear"},doubleClick:{disabled:!0},onInit:u,onPanning:function(a){var b;return null===(b=a.instance.wrapperComponent)|| void 0===b?void 0:b.classList.add("dragging")},onPanningStop:function(a){var b;return null===(b=a.instance.wrapperComponent)|| void 0===b?void 0:b.classList.remove("dragging")},children:(0,h.jsx)(j.Uv,{wrapperStyle:{width:"100%",height:"100%",overflow:"hidden"},children:(0,h.jsx)(k.Canvas,{nodes:o,edges:p,maxWidth:r.width,maxHeight:r.height,direction:n,onLayoutChange:v,onCanvasClick:w,zoomable:!1,animated:!1,readonly:!0,dragEdge:null,dragNode:null,fit:!0,node:function(a){return(0,h.jsx)(H,(0,e.Z)((0,d.Z)({},a),{onClick:t}))},edge:function(a){return(0,h.jsx)(k.Edge,(0,e.Z)((0,d.Z)({},a),{containerClassName:"edge-".concat(a.id)}))}},n)})})})},L=i.memo(K)},8357:function(a,b,c){c.d(b,{w_:function(){return j}});var d=c(7294),e={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=d.createContext&&d.createContext(e),g=function(){return(g=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},h=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c};function i(a){return a&&a.map(function(a,b){return d.createElement(a.tag,g({key:b},a.attr),i(a.child))})}function j(a){return function(b){return d.createElement(k,g({attr:g({},a.attr)},b),i(a.child))}}function k(a){var b=function(b){var c,e=a.attr,f=a.size,i=a.title,j=h(a,["attr","size","title"]),k=f||b.size||"1em";return b.className&&(c=b.className),a.className&&(c=(c?c+" ":"")+a.className),d.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,e,j,{className:c,style:g(g({color:a.color||b.color},b.style),a.style),height:k,width:k,xmlns:"http://www.w3.org/2000/svg"}),i&&d.createElement("title",null,i),a.children)};return void 0!==f?d.createElement(f.Consumer,null,function(a){return b(a)}):b(e)}}}])