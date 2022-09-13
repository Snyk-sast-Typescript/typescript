"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{5562:function(a,b,c){c.r(b),c.d(b,{Graph:function(){return L}});var d=c(6042),e=c(9396),f=c(828),g=c(7297),h=c(5893),i=c(7294),j=c(6126),k=c(8188),l=c(9189),m=c(1440),n=c(2125);function o(){var a=(0,g.Z)(["\n  text-decoration: underline;\n  pointer-events: all;\n"]);return o=function(){return a},a}function p(){var a=(0,g.Z)(["\n  text-align: ",";\n  font-size: 12px;\n  overflow: hidden;\n  color: ",";\n  pointer-events: none;\n  padding: ",';\n\n  * {\n    font-family: "Roboto Mono", monospace;\n  }\n\n  &.searched {\n    border: 2px solid ',";\n    border-radius: 2px;\n    box-sizing: border-box;\n  }\n\n  .highlight {\n    border: 2px dashed #ff2970;\n    background: rgba(255, 214, 0, 0.3);\n  }\n\n  .renderVisible {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    cursor: pointer;\n  }\n"]);return p=function(){return a},a}function q(){var a=(0,g.Z)(["\n  display: inline;\n  flex: 1;\n  font-weight: 500;\n  color: ",";\n  font-size: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: ",";\n  height: 18px;\n"]);return q=function(){return a},a}function r(){var a=(0,g.Z)(["\n  display: block;\n  height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n"]);return r=function(){return a},a}var s=(0,n.ZP)(m.Ld)(o()),t=n.ZP.foreignObject(p(),function(a){return!a.isObject&&"center"},function(a){return a.theme.TEXT_NORMAL},function(a){return a.isObject&&"10px"},function(a){return a.theme.TEXT_POSITIVE}),u=n.ZP.span(q(),function(a){var b,c,d,e=a.theme,f=a.objectKey,g=a.parent;return b=e,c=void 0!==g&&g,d=void 0!==f&&f,c?b.NODE_KEY:d?b.OBJECT_KEY:b.TEXT_POSITIVE},function(a){return a.parent&&"14px"},function(a){return a.parent&&"7px"}),v=n.ZP.span.attrs(function(a){var b,c;return{style:{color:(b=a["data-key"],c=a.theme,Number.isNaN(+b)?"true"===b?c.TEXT_POSITIVE:"false"===b?c.TEXT_DANGER:void 0:"#FD0079")}}})(r()),w=function(a){var b=a.width,c=a.height,d=a.value,e=a.x,f=a.y,g=i.useRef(null);return(0,l.Z)(function(a){return a.performanceMode}),(0,h.jsx)(t,{width:b,height:c,x:0,y:0,ref:g,isObject:!0,children:d.map(function(a,b){return(0,h.jsxs)(v,{"data-key":JSON.stringify(a[1]),"data-x":e,"data-y":f,children:[(0,h.jsxs)(u,{objectKey:!0,children:[JSON.stringify(a[0]).replaceAll('"',""),":"," "]}),(0,h.jsx)(s,{children:JSON.stringify(a[1])})]},b)})})},x=i.memo(w,function(a,b){return String(a.value)===String(b.value)&&a.width===b.width}),y=c(5434),z=c(3719),A=c(9577);function B(){var a=(0,g.Z)(["\n  pointer-events: all;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  background: rgba(0, 0, 0, 0.1);\n  height: 100%;\n  width: 40px;\n  border-left: 1px solid ",";\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n"]);return B=function(){return a},a}function C(){var a=(0,g.Z)(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"]);return C=function(){return a},a}var D=n.ZP.button(B(),function(a){return a.theme.TEXT_NORMAL},function(a){return a.theme.BACKGROUND_MODIFIER_ACCENT}),E=n.ZP.div(C(),function(a){return a.hasCollapse?"space-between":"center"}),F=function(a){var b=a.node,c=a.width,d=a.height,e=a.value,f=a.isParent,g=void 0!==f&&f,j=a.hasCollapse,k=void 0!==j&&j,m=a.x,n=a.y,o=i.useRef(null),p=((0,l.Z)(function(a){return a.performanceMode}),(0,A.Z)(function(a){return a.hideCollapse})),q=(0,z.Z)(function(a){return a.expandNodes}),r=(0,z.Z)(function(a){return a.collapseNodes}),v=(0,z.Z)(function(a){return a.collapsedParents.includes(b.id)}),w=function(a){a.stopPropagation(),v?q(b.id):r(b.id)};return(0,h.jsx)(t,{width:c,height:d,x:0,y:0,"data-nodeid":b.id,ref:o,hideCollapse:p,hasCollapse:g&&k,children:(0,h.jsxs)(E,{hasCollapse:g&&!p,children:[(0,h.jsx)(u,{"data-x":m,"data-y":n,"data-key":JSON.stringify(e),parent:g,children:(0,h.jsx)(s,{children:JSON.stringify(e).replaceAll('"',"")})}),g&&k&&!p&&(0,h.jsx)(D,{onClick:w,children:v?(0,h.jsx)(y.Qw4,{size:18}):(0,h.jsx)(y.$l_,{size:18})})]})})},G=i.memo(F,function(a,b){return a.value===b.value&&a.width===b.width}),H=function(a){var b=a.properties;return(0,h.jsx)(k.Node,(0,e.Z)((0,d.Z)({},a),{label:(0,h.jsx)(i.Fragment,{}),children:function(a){var c=a.width,d=a.height,e=a.x,f=a.y,g=a.node;return Array.isArray(b.text)?(0,h.jsx)(x,{value:b.text,width:c,height:d,x:e,y:f}):(0,h.jsx)(G,{node:g,isParent:b.data.isParent,value:b.text,width:c,height:d,hasCollapse:b.data.hasChild,x:e,y:f})}}))};function I(){var a=(0,g.Z)(["\n  position: absolute;\n  width: 100%;\n  height: ",";\n  background: ",";\n  background-image: ",";\n  background-size: 15px 15px;\n\n  :active {\n    cursor: move;\n  }\n\n  .dragging {\n    pointer-events: none;\n  }\n\n  rect {\n    fill: ",";\n  }\n"]);return I=function(){return a},a}var J=n.ZP.div(I(),function(a){return a.isWidget?"100vh":"calc(100vh - 36px)"},function(a){return a.theme.BACKGROUND_SECONDARY},function(a){var b=a.theme;return"radial-gradient(#505050 0.5px, ".concat(b.BACKGROUND_SECONDARY," 0.5px)")},function(a){return a.theme.BACKGROUND_NODE}),K=function(a){var b=a.isWidget,c=a.openModal,g=a.setSelectedNode,m=(0,l.Z)(function(a){return a.setConfig}),n=(0,l.Z)(function(a){return a.layout}),o=(0,z.Z)(function(a){return a.nodes}),p=(0,z.Z)(function(a){return a.edges}),q=(0,f.Z)(i.useState({width:2e3,height:2e3}),2),r=q[0],s=q[1],t=i.useCallback(function(a,b){g(b.text),c()},[c,g]),u=i.useCallback(function(a){m("zoomPanPinch",a)},[m]),v=i.useCallback(function(a){a.width&&a.height&&s({width:a.width+400,height:a.height+400})},[]),w=i.useCallback(function(){var a=document.querySelector("input:focus");a&&a.blur()},[]);return(0,h.jsx)(J,{isWidget:b,children:(0,h.jsx)(j.d$,{maxScale:2,minScale:.5,initialScale:.7,wheel:{step:.05},zoomAnimation:{animationType:"linear"},doubleClick:{disabled:!0},onInit:u,onPanning:function(a){var b;return null===(b=a.instance.wrapperComponent)|| void 0===b?void 0:b.classList.add("dragging")},onPanningStop:function(a){var b;return null===(b=a.instance.wrapperComponent)|| void 0===b?void 0:b.classList.remove("dragging")},children:(0,h.jsx)(j.Uv,{wrapperStyle:{width:"100%",height:"100%",overflow:"hidden"},children:(0,h.jsx)(k.Canvas,{nodes:o,edges:p,maxWidth:r.width,maxHeight:r.height,direction:n,onLayoutChange:v,onCanvasClick:w,zoomable:!1,animated:!1,readonly:!0,dragEdge:null,dragNode:null,fit:!0,node:function(a){return(0,h.jsx)(H,(0,e.Z)((0,d.Z)({},a),{onClick:t}))},edge:function(a){return(0,h.jsx)(k.Edge,(0,e.Z)((0,d.Z)({},a),{containerClassName:"edge-".concat(a.id)}))}},n)})})})},L=i.memo(K)},1111:function(a,b,c){c.r(b),c.d(b,{default:function(){return ag}});var d=c(7297),e=c(5893),f=c(7294),g=c(828),h=c(5562),i=c(6501),j=c(9647),k=c(3565),l=c(1342),m=c(2125);function n(){var a=(0,d.Z)(["\n  resize: none;\n  width: 100%;\n  min-height: 200px;\n\n  padding: 10px;\n  background: ",";\n  color: ",";\n  outline: none;\n  border-radius: 4px;\n  line-height: 20px;\n  border: none;\n"]);return n=function(){return a},a}var o=m.ZP.textarea(n(),function(a){return a.theme.BACKGROUND_TERTIARY},function(a){return a.theme.INTERACTIVE_NORMAL}),p=function(a){var b=a.selectedNode,c=a.visible,d=a.closeModal,f=Array.isArray(b)?Object.fromEntries(b):b,g=function(){i.ZP.success("Content copied to clipboard!"),navigator.clipboard.writeText(JSON.stringify(f)),d()};return(0,e.jsxs)(l.u,{visible:c,setVisible:d,children:[(0,e.jsx)(l.u.Header,{children:"Node Content"}),(0,e.jsx)(l.u.Content,{children:(0,e.jsx)(o,{defaultValue:JSON.stringify(f,function(a,b){return"string"==typeof b?b.replaceAll('"',""):b},2),readOnly:!0})}),(0,e.jsx)(l.u.Controls,{setVisible:d,children:(0,e.jsxs)(k.z,{status:"SECONDARY",onClick:g,children:[(0,e.jsx)(j.C3L,{size:18})," Clipboard"]})})]})},q=c(3719),r=function(a){var b=a.isWidget,c=void 0!==b&&b,d=(0,g.Z)(f.useState(!1),2),i=d[0],j=d[1],k=(0,g.Z)(f.useState([]),2),l=k[0],m=k[1],n=f.useCallback(function(){return j(!0)},[]),o=(0,q.Z)(function(a){return a.collapsedNodes}),r=(0,q.Z)(function(a){return a.collapsedEdges});return f.useEffect(function(){var a=o.map(function(a){return'[id$="node-'.concat(a,'"]')}),b=r.map(function(a){return'[class$="edge-'.concat(a,'"]')});if(document.querySelectorAll(".hide").forEach(function(a){return a.classList.remove("hide")}),a.length){var c=document.querySelectorAll(a.join(",")),d=document.querySelectorAll(b.join(","));c.forEach(function(a){return a.classList.add("hide")}),d.forEach(function(a){return a.classList.add("hide")})}},[o,r]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(h.Graph,{openModal:n,setSelectedNode:m,isWidget:c}),!c&&(0,e.jsx)(p,{selectedNode:l,visible:i,closeModal:function(){return j(!1)}})]})},s=c(8193),t=c(5434),u=c(7106),v=c(6042),w=c(9396),x=c(155),y=function(){var a=document.querySelectorAll("foreignObject.searched, .highlight");null==a||a.forEach(function(a){a.classList.remove("highlight"),a.classList.remove("searched")})},z=function(a,b){null==a||a.forEach(function(a){var b,c,d;console.log(null===(b=a.parentElement)|| void 0===b?void 0:b.closest("foreignObject")),null===(d=null===(c=a.parentElement)|| void 0===c?void 0:c.closest("foreignObject"))|| void 0===d||d.classList.add("searched")}),a[b].classList.add("highlight")},A=c(9189),B=function(){var a=(0,A.Z)(function(a){return a.setConfig}),b=(0,A.Z)(function(a){return a.zoomPanPinch}),c=(0,g.Z)(f.useState(0),2),d=c[0],e=c[1],h=(0,g.Z)(f.useState({value:"",debounced:""}),2),i=h[0],j=h[1],k=function(){return e(function(a){return a+1})};return f.useEffect(function(){a("performanceMode",!i.value.length);var b=setTimeout(function(){j(function(a){return(0,w.Z)((0,v.Z)({},a),{debounced:i.value})})},800);return function(){return clearTimeout(b)}},[i.value,a]),f.useEffect(function(){if(b){var a,c=b.instance.wrapperComponent,f=(a="span[data-key*='".concat(i.debounced,"' i]"),document.querySelectorAll("".concat(a))),g=f[d]||null;if(y(),c&&g&&g.parentElement){var h=1,j=Number(g.getAttribute("data-x")),k=Number(g.getAttribute("data-y")),l=(c.offsetLeft-j)*h+c.clientWidth/2-g.getBoundingClientRect().width/2,m=(c.offsetLeft-k)*h+c.clientHeight/2-g.getBoundingClientRect().height/2;z(f,d),null==b||b.setTransform(l,m,h)}else e(0);return function(){i.value||e(0)}}},[i.debounced,i.value,d,b]),[i,j,k]};function C(){var a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  border-radius: 4px;\n  height: 25px;\n"]);return C=function(){return a},a}function D(){var a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 4px 6px;\n"]);return D=function(){return a},a}function E(){var a=(0,d.Z)(["\n  background: none;\n  color: ",";\n  outline: none;\n  border: none;\n  width: 112px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: width 0.3s;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  &:focus {\n    width: 208px;\n  }\n"]);return E=function(){return a},a}function F(){var a=(0,d.Z)(["\n  display: grid;\n  background: none;\n  color: ",";\n  padding: 0;\n  min-height: unset;\n\n  &:hover {\n    box-shadow: none;\n  }\n"]);return F=function(){return a},a}var G=m.ZP.div(C(),function(a){return a.theme.BACKGROUND_TERTIARY}),H=m.ZP.form(D()),I=m.ZP.input(E(),function(a){return a.theme.TEXT_NORMAL}),J=m.ZP.button(F(),function(a){return a.theme.INTERACTIVE_NORMAL}),K=function(){var a=(0,g.Z)(B(),3),b=a[0],c=a[1],d=a[2],f=function(a){a.preventDefault(),d()},h=function(a){a.preventDefault(),c({value:"",debounced:""})};return(0,e.jsx)(G,{children:(0,e.jsxs)(H,{onSubmit:f,children:[(0,e.jsx)(I,{type:"text",value:b.value,onChange:function(a){return c(function(b){return(0,w.Z)((0,v.Z)({},b),{value:a.target.value})})},placeholder:"Search Node"}),(0,e.jsx)(J,{type:"reset","aria-label":"search",onClick:h,children:b.value?(0,e.jsx)(x.Lp2,{size:18}):(0,e.jsx)(s.RB5,{size:18})})]})})},L=c(1649);function M(){var a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  width: 100%;\n  gap: 6px;\n"]);return M=function(){return a},a}function N(){var a=(0,d.Z)(["\n  color: ",";\n  font-weight: 500;\n  cursor: pointer;\n"]);return N=function(){return a},a}function O(){var a=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  width: 40px;\n  height: 24px;\n  padding: 2px;\n  border-radius: 14px;\n  background: ",";\n  cursor: pointer;\n\n  input {\n    display: none;\n  }\n"]);return O=function(){return a},a}var P=m.ZP.div(M()),Q=m.ZP.label(N(),function(a){return a.theme.INTERACTIVE_ACTIVE}),R=m.ZP.div(O(),function(a){return a.active?"right":"left"},function(a){return a.active?"#3AA55D":"#72767c"}),S=function(a){var b=a.children,c=a.checked,d=a.onChange,h=(0,g.Z)(f.useState(void 0!==c&&c),2),i=h[0],j=h[1],k=function(){j(!i),d&&d(!i)};return(0,e.jsxs)(P,{children:[(0,e.jsxs)(R,{active:i,onClick:k,children:[i?(0,e.jsx)(L.be3,{size:22,color:"white"}):(0,e.jsx)(L.mpJ,{size:22,color:"white"}),(0,e.jsx)("input",{type:"checkbox",checked:i,onChange:k})]}),(0,e.jsx)(Q,{onClick:k,children:b})]})},T=c(9577),U=c(374);function V(){var a=(0,d.Z)(["\n  flex-flow: row-reverse;\n  background: black;\n"]);return V=function(){return a},a}function W(){var a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]);return W=function(){return a},a}var X=(0,m.ZP)(S)(V()),Y=m.ZP.div(W()),Z=function(a){var b=a.visible,c=a.setVisible,d=(0,T.Z)(function(a){return a.lightmode}),f=(0,T.Z)(function(a){return a.setLightTheme}),h=(0,g.Z)((0,T.Z)(function(a){return[a.toggleHideCollapse,a.hideCollapse]},U.Z),2),i=h[0],j=h[1];return(0,e.jsxs)(l.u,{visible:b,setVisible:c,children:[(0,e.jsx)(l.u.Header,{children:"Settings"}),(0,e.jsx)(l.u.Content,{children:(0,e.jsxs)(Y,{children:[(0,e.jsx)(X,{onChange:i,checked:j,children:"Hide Collapse/Expand Button"}),(0,e.jsx)(X,{onChange:function(){return f(!d)},checked:d,children:"Enable Light Theme"})]})}),(0,e.jsx)(l.u.Controls,{setVisible:c})]})},$=c(7471);function _(){var a=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row-reverse;\n  height: 28px;\n  padding: 4px 16px;\n  background: ",";\n  color: ",";\n  box-shadow: 0 1px 0px ",";\n  z-index: 1;\n\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return _=function(){return a},a}function aa(){var a=(0,d.Z)(["\n  display: grid;\n  place-content: center;\n  font-size: 20px;\n  background: none;\n  color: ",";\n  padding: 6px;\n  border-radius: 3px;\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n\n  &:hover {\n    color: ",";\n    opacity: 1;\n    box-shadow: none;\n  }\n"]);return aa=function(){return a},a}var ab=m.ZP.div(_(),function(a){return a.theme.BACKGROUND_PRIMARY},function(a){return a.theme.SILVER},function(a){return a.theme.BACKGROUND_TERTIARY}),ac=m.ZP.button(aa(),function(a){return a.theme.INTERACTIVE_NORMAL},function(a){return a.theme.INTERACTIVE_HOVER}),ad=function(){var a=(0,g.Z)(f.useState(!1),2),b=a[0],c=a[1],d=(0,g.Z)(f.useState(!1),2),h=d[0],i=d[1],k=(0,A.Z)(function(a){return a.hideEditor}),l=(0,A.Z)(function(a){return a.setConfig}),m=(0,A.Z)(function(a){return a.zoomIn}),n=(0,A.Z)(function(a){return a.zoomOut}),o=(0,A.Z)(function(a){return a.centerView}),p=function(){return l("hideEditor",!k)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(ab,{children:[(0,e.jsx)(ac,{"aria-label":"fullscreen",onClick:p,children:(0,e.jsx)(s.vju,{})}),(0,e.jsx)(ac,{"aria-label":"settings",onClick:function(){return c(!0)},children:(0,e.jsx)(u.sDK,{})}),(0,e.jsx)(K,{}),(0,e.jsx)(ac,{"aria-label":"save",onClick:function(){return i(!0)},children:(0,e.jsx)(j._hL,{})}),(0,e.jsx)(ac,{"aria-label":"center canvas",onClick:o,children:(0,e.jsx)(t.XIv,{})}),(0,e.jsx)(ac,{"aria-label":"zoom out",onClick:n,children:(0,e.jsx)(s.ywL,{})}),(0,e.jsx)(ac,{"aria-label":"zoom in",onClick:m,children:(0,e.jsx)(s.Lfi,{})})]}),(0,e.jsx)($._,{visible:h,setVisible:i}),(0,e.jsx)(Z,{visible:b,setVisible:c})]})};function ae(){var a=(0,d.Z)(["\n  position: relative;\n"]);return ae=function(){return a},a}var af=m.ZP.div(ae()),ag=function(){return(0,e.jsxs)(af,{children:[(0,e.jsx)(ad,{}),(0,e.jsx)(r,{})]})}}}])