(this["webpackJsonpsport-summary"]=this["webpackJsonpsport-summary"]||[]).push([[0],{205:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),c=a.n(i),s=a(151),o=a(50),l=a(13),d=a(51),p=a(22),b=a(108),j=a(153),x=a.n(j),h=a(4),u=a(29),g=a.n(u),m=a(47),f=a(87),O=a.n(f);function y(){return v.apply(this,arguments)}function v(){return(v=Object(m.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/teams");case 2:return t=e.sent,a=t.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return P.apply(this,arguments)}function P(){return(P=Object(m.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/players");case 2:return t=e.sent,a=t.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O.a.defaults.baseURL="https://www.balldontlie.io/api/v1";var C,k=Object(d.b)("teams/getTeamsList",Object(m.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),E=Object(d.c)({name:"teams",initialState:{items:[],error:null,isLoading:!1},extraReducers:(C={},Object(h.a)(C,k.pending,(function(e,t){e.error=null,e.isLoading=!0})),Object(h.a)(C,k.fulfilled,(function(e,t){var a=t.payload;e.items=[].concat(Object(l.a)(e.items),Object(l.a)(a)),e.isLoading=!1})),Object(h.a)(C,k.rejected,(function(e,t){console.log(t),e.error=t.error.message,e.isLoading=!1})),C),reducers:{addTeam:function(e,t){var a=t.payload;console.log(a),e.items=[a].concat(Object(l.a)(e.items))}}}),z=E.actions.addTeam,S=E.reducer,M={key:"teams",storage:x.a},q=Object(l.a)(Object(d.d)({serializableCheck:!1})),I=Object(p.b)({teams:Object(b.a)(M,S)}),R=Object(d.a)({reducer:I,middleware:q,devTools:!1}),T=Object(b.b)(R),N=(a(205),a(12)),A=a(14);var L=Object(A.a)("div",{target:"e1jy4c4j0"})({name:"1xzx5po",styles:"max-width:1440px;padding:80px 78px 146px;margin:0 auto"}),B=a(1);var F=function(e){var t=e.children;return Object(B.jsx)(L,{children:t})},D=a(34),U=a(358),W=a(69),J=W.a({name:W.b().required("Please enter team name"),city:W.b().required("Please enter the city").matches(/[a-zA-Z]/,"Only letters"),abbreviation:W.b().transform((function(e,t){return this.isType(e),"Only uppercase"})).required("Only uppercase")});var V=Object(A.a)("h2",{target:"e1lzmn2i0"})({name:"48wx2g",styles:"font-weight:700;font-size:32px;line-height:1.25;margin-bottom:24px;color:#14141e"});var _=function(e){var t=e.title;return Object(B.jsx)(V,{children:t})},G=a.p+"static/media/Icon.1238bbad.svg";var Y=Object(A.a)("div",{target:"eon9qld9"})({name:"1fgdcyd",styles:"margin-bottom:24px"}),Z=Object(A.a)(D.c,{target:"eon9qld8"})({name:"y0vkzp",styles:"display:flex;flex-wrap:nowrap;align-items:end;padding:24px 240px 41px 24px;border:1px solid #eeeeee;border-radius:24px;box-shadow:0px 2px 10px 0px rgba(20, 20, 30, 0.05),0px 1px 4px 0px rgba(20, 20, 30, 0.05)"}),H=Object(A.a)("label",{target:"eon9qld7"})({name:"e3ubha",styles:"position:relative;display:flex;flex-wrap:wrap;font-size:12px;line-height:1.3;color:#757575"}),K=Object(A.a)("span",{target:"eon9qld6"})({name:"5bhc30",styles:"margin-bottom:8px"}),Q=Object(A.a)(D.b,{target:"eon9qld5"})({name:"i6clsp",styles:"display:block;margin:0;padding:0;padding-left:16px;width:194px;height:48px;margin-right:24px;border:1px solid #bdbdbd;border-radius:4px;&::placeholder{font-size:16px;font-weight:400;line-height:1.5;color:#9e9e9e;}&:placeholder-shown{padding-left:16px;color:#757575;}&:hover,&:focus{outline:none;border:1px solid #757575;}"}),X=Object(A.a)(D.b,{target:"eon9qld4"})("display:block;margin:0;padding:0;padding-left:16px;width:194px;height:48px;margin-right:24px;border:1px solid #bdbdbd;border-radius:4px;appearance:none;background:url(",G,");background-repeat:no-repeat;background-position:center right calc(0.375em + 0.55rem);padding-right:16px;cursor:pointer;&::placeholder{font-size:16px;font-weight:400;line-height:1.5;color:#9e9e9e;}&:placeholder-shown{padding-left:16px;color:#757575;}&:hover,&:focus{outline:none;border:1px solid #757575;}"),$=(Object(A.a)("div",{target:"eon9qld3"})(""),Object(A.a)("option",{target:"eon9qld2"})({name:"c0o9fp",styles:"padding-left:16px"})),ee=Object(A.a)("button",{target:"eon9qld1"})({name:"1nv454u",styles:"display:inline-block;min-width:194px;height:48px;background-color:#652ad3;border:none;border-radius:4px;outline:none;padding:12px 36px;color:#ffffff;font-weight:700;font-size:16px;line-height:1.5px;cursor:pointer;margin:0 auto;transition:all 200ms linear;&:hover,&:focus{transform:scale(1.03);}"}),te=Object(A.a)("span",{target:"eon9qld0"})({name:"17zcf2h",styles:"position:absolute;bottom:-25%;font-size:12px;line-height:1.3;font-weight:400;color:#f44336"});function ae(e,t){if(Object(D.e)(e,t))return{border:"1px solid red"}}var ne=function(){var e=Object(o.b)();return Object(B.jsxs)(Y,{children:[Object(B.jsx)(_,{title:"Teams"}),Object(B.jsx)(D.d,{initialValues:{id:"",name:"",city:"",abbreviation:"",conference:"east"},validationSchema:J,onSubmit:function(t,a){var n=a.setSubmitting,r=a.resetForm,i=t.name,c=t.city,s=t.abbreviation,o=t.conference;e(z({id:Object(U.a)(),name:i,city:c,abbreviation:s,conference:o})),console.log(i),r(),n(!1)},children:function(e){var t=e.errors,a=e.setFieldValue;return Object(B.jsxs)(Z,{autoComplete:"off",children:[Object(B.jsxs)(H,{htmlFor:"name",children:[Object(B.jsx)(K,{children:"Name"}),Object(B.jsx)(Q,{type:"text",name:"name",placeholder:"Chandler Bing",style:ae(t,"name")}),Object(B.jsx)(D.a,{name:"name",component:te})]}),Object(B.jsxs)(H,{htmlFor:"city",children:[Object(B.jsx)(K,{children:"City"}),Object(B.jsx)(Q,{type:"text",name:"city",placeholder:"Yemen",style:ae(t,"city")}),Object(B.jsx)(D.a,{name:"city",component:te})]}),Object(B.jsxs)(H,{htmlFor:"abbreviation",children:[Object(B.jsx)(K,{children:"Abbreviation"}),Object(B.jsx)(Q,{type:"text",name:"abbreviation",placeholder:"Only uppercase",style:ae(t,"abbreviation"),onChange:function(e){var t=e.target.value||"";a("abbreviation",t.toUpperCase())}}),Object(B.jsx)(D.a,{name:"abbreviation",component:te})]}),Object(B.jsxs)(H,{htmlFor:"conference",children:[Object(B.jsx)(K,{children:"Conference"}),Object(B.jsxs)(X,{as:"select",name:"conference",children:[Object(B.jsx)($,{value:"east",children:"EAST"}),Object(B.jsx)($,{value:"west",children:"WEST"})]})]}),Object(B.jsx)(ee,{type:"submit",children:"Add team"})]})}})]})},re=a(36),ie=a(360),ce=a(361),se=a(364),oe=a(365),le=a(368),de=a(367),pe=a(362),be=a(369),je=a(366),xe=a(355),he=a(363),ue=a(56),ge=a.n(ue),me=a(55),fe=a.n(me),Oe=a(356),ye=Object(A.a)("span",{target:"e1gdxyef0"})("display:inline-block;border-radius:21px;padding:6px 16px;font-size:12px;font-weight:700;line-height:1.3;text-transform:uppercase;color:",(function(e){return"west"===e.conf?"#E64A18":"#1fad87"}),";background-color:",(function(e){return"west"===e.conf?"#FFEAE3":"#daf5ee"}),";");function ve(e){var t=e.count,a=e.page,n=e.rowsPerPage,r=e.onPageChange,i=e.labelPage,c=Object(re.a)();return Object(B.jsxs)(ie.a,{sx:{flexShrink:0,ml:2.5},children:[Object(B.jsx)("div",{children:i}),Object(B.jsx)(ce.a,{onClick:function(e){r(e,a-1)},disabled:0===a,"aria-label":"previous page",children:"rtl"===c.direction?Object(B.jsx)(fe.a,{}):Object(B.jsx)(ge.a,{})}),Object(B.jsx)(ce.a,{onClick:function(e){r(e,a+1)},disabled:a>=Math.ceil(t/n)-1,"aria-label":"next page",children:"rtl"===c.direction?Object(B.jsx)(ge.a,{}):Object(B.jsx)(fe.a,{})})]})}var we=Object(Oe.a)((function(e){return{root:{"& .MuiInputBase-root-MuiTablePagination-select":{border:"1px solid red"}},footer:{"& tr ":{height:"68px"}},pagination:{borderBottom:"none","& div.MuiInputBase-root":{width:"77px",height:"40px",border:"1px solid #EEEEEE",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},"& p.MuiTablePagination-displayedRows":{width:"900px",display:"flex",justifyContent:"space-between"}}}}));var Pe=function(e){var t=e.teams,a=n.useState(0),r=Object(N.a)(a,2),i=r[0],c=r[1],s=n.useState(5),o=Object(N.a)(s,2),l=o[0],d=o[1],p=we(),b=i>0?Math.max(0,(1+i)*l-t.length):0;return Object(B.jsx)(pe.a,{component:he.a,className:p.root,style:{width:"100%",overflow:"hidden",paddingLeft:"0px",boxShadow:"none",borderRadius:"6px"},children:Object(B.jsxs)(se.a,{sx:{minWidth:500},"aria-label":"custom pagination table",style:{width:"100%",tableLayout:"auto"},children:[Object(B.jsx)(oe.a,{children:Object(B.jsxs)(je.a,{children:[Object(B.jsx)(de.a,{style:{width:110},children:"Name"}),Object(B.jsx)(de.a,{style:{width:131},children:"City"}),Object(B.jsx)(de.a,{style:{width:134},children:"Abbreviations"}),Object(B.jsx)(de.a,{style:{width:124},children:"Conference"}),Object(B.jsx)(de.a,{style:{width:"61%"}})]})}),Object(B.jsxs)(le.a,{children:[(l>0?t.slice(i*l,i*l+l):t).map((function(e){var t=e.name,a=e.city,n=e.abbreviation,r=e.conference,i=e.id;return Object(B.jsxs)(je.a,{children:[Object(B.jsx)(de.a,{style:{width:110},align:"left",children:t}),Object(B.jsx)(de.a,{style:{width:131},children:a}),Object(B.jsx)(de.a,{style:{width:134},align:"left",children:n}),Object(B.jsx)(de.a,{style:{width:124},align:"left",children:Object(B.jsx)(ye,{conf:r.toLowerCase(),children:r})}),Object(B.jsx)(de.a,{style:{width:"61%"},align:"left"})]},i)})),b>0&&Object(B.jsx)(je.a,{style:{height:53*b},children:Object(B.jsx)(de.a,{colSpan:6})})]}),Object(B.jsx)(be.a,{className:p.footer,children:Object(B.jsx)(je.a,{children:Object(B.jsx)(xe.a,{className:p.pagination,rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],labelRowsPerPage:"Items per page",count:t.length,rowsPerPage:l,page:i,onPageChange:function(e,t){c(t)},onRowsPerPageChange:function(e){d(parseInt(e.target.value,10)),c(0)},ActionsComponent:ve,labelDisplayedRows:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("span",{className:p.displayItems,children:"Displaying ".concat(e.from,"-").concat(-1===e.to?e.count/l:e.to,"\n                     of ").concat(e.count," items")}),Object(B.jsx)("span",{className:p.displayPages,children:"".concat(i+1," of ").concat(Math.ceil(e.count/l)," pages")})]})}})})})]})})};var Ce=Object(A.a)("div",{target:"eez77631"})({name:"d11srq",styles:"margin-top:80px"});Object(A.a)("ul",{target:"eez77630"})({name:"1hpsasf",styles:"display:grid;max-width:100vw;grid-template-columns:repeat(auto-fill, minmax(303px, 1fr));grid-gap:24px;margin-top:20px;margin:0 auto;list-style:none"});var ke=Object(A.a)("div",{target:"e1eyouh94"})({name:"15nsv1s",styles:"display:flex;justify-content:center;align-items:center;width:80px;height:80px;border-radius:50%;background-color:#ede6fb"}),Ee=Object(A.a)("span",{target:"e1eyouh93"})({name:"10frjnj",styles:"text-align:center;color:#1d0053;font-weight:700;font-size:32px;line-height:1.25;text-transform:uppercase"}),ze=Object(A.a)("div",{target:"e1eyouh92"})({name:"879ic9",styles:"margin-left:20px"}),Se=Object(A.a)("p",{target:"e1eyouh91"})({name:"urthpn",styles:"max-width:160px;font-weight:500;font-size:20px;line-height:1.4;color:#14141e;transition:all 300ms linear"}),Me=Object(A.a)("td",{target:"e1eyouh90"})("display:flex;align-items:center;width:303px;border-radius:24px;border:1px solid #eeeeee;padding:20px;cursor:pointer;box-shadow:0px 2px 10px 0px rgba(20, 20, 30, 0.05),0px 1px 4px 0px rgba(20, 20, 30, 0.05);transition:all 300ms linear;&:hover,&:focus{box-shadow:0px 6px 15px 0px rgba(20, 20, 30, 0.05),0px 3px 18px 0px rgba(20, 20, 30, 0.05);",Se,"{color:#652ad3;}}");var qe=function(e){var t=e.firstname,a=e.lastname,n="".concat(t[0].toUpperCase()).concat(a[0].toUpperCase());return Object(B.jsxs)(Me,{children:[Object(B.jsx)(ke,{children:Object(B.jsx)(Ee,{children:n})}),Object(B.jsxs)(ze,{children:[Object(B.jsxs)(Se,{children:[t," "]}),Object(B.jsxs)(Se,{children:[" ",a]})]})]})};function Ie(e){var t=e.count,a=e.page,n=e.rowsPerPage,r=e.onPageChange,i=e.labelPage,c=Object(re.a)();return Object(B.jsxs)(ie.a,{sx:{flexShrink:0,ml:2.5},children:[Object(B.jsx)("div",{children:i}),Object(B.jsx)(ce.a,{onClick:function(e){r(e,a-1)},disabled:0===a,"aria-label":"previous page",children:"rtl"===c.direction?Object(B.jsx)(fe.a,{}):Object(B.jsx)(ge.a,{})}),Object(B.jsx)(ce.a,{onClick:function(e){r(e,a+1)},disabled:a>=Math.ceil(t/n)-1,"aria-label":"next page",children:"rtl"===c.direction?Object(B.jsx)(ge.a,{}):Object(B.jsx)(fe.a,{})})]})}var Re=Object(Oe.a)((function(e){return{root:{"& .MuiInputBase-root-MuiTablePagination-select":{border:"1px solid red"},"& tbody.MuiTableBody-root":{display:"grid",maxWidth:"100vw",gridTemplateColumns:"repeat(auto-fill, minmax(303px, 1fr))",gridGap:"24px",margin:"0 auto"}},footer:{"& tr ":{height:"68px"}},pagination:{borderBottom:"none","& div.MuiInputBase-root":{width:"77px",height:"40px",border:"1px solid #EEEEEE",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},"& p.MuiTablePagination-displayedRows":{width:"900px",display:"flex",justifyContent:"space-between"}}}}));function Te(e){var t=e.players,a=n.useState(0),r=Object(N.a)(a,2),i=r[0],c=r[1],s=n.useState(8),o=Object(N.a)(s,2),l=o[0],d=o[1],p=Re(),b=i>0?Math.max(0,(1+i)*l-t.length):0;return Object(B.jsxs)(Ce,{children:[Object(B.jsx)(_,{title:"Players"}),Object(B.jsx)(pe.a,{component:he.a,className:p.root,style:{width:"100%",overflow:"hidden",paddingLeft:"0px",boxShadow:"none",borderRadius:"6px"},children:Object(B.jsxs)(se.a,{sx:{minWidth:500},"aria-label":"custom pagination table",style:{width:"100%",tableLayout:"auto"},children:[Object(B.jsxs)(le.a,{children:[(l>0?t.slice(i*l,i*l+l):t).map((function(e){return Object(B.jsx)(je.a,{children:Object(B.jsx)(qe,{firstname:e.first_name,lastname:e.last_name,id:e.id},e.id)},e.id)})),b>0&&Object(B.jsx)(je.a,{style:{height:53*b},children:Object(B.jsx)(de.a,{colSpan:6})})]}),Object(B.jsx)(be.a,{className:p.footer,children:Object(B.jsx)(je.a,{children:Object(B.jsx)(xe.a,{className:p.pagination,rowsPerPageOptions:[8,16,32,{label:"All",value:-1}],labelRowsPerPage:"Items per page",count:t.length,rowsPerPage:l,page:i,onPageChange:function(e,t){c(t)},onRowsPerPageChange:function(e){d(parseInt(e.target.value,10)),c(0)},ActionsComponent:Ie,labelDisplayedRows:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("span",{className:p.displayItems,children:"Displaying ".concat(e.from,"-").concat(-1===e.to?e.count/l:e.to,"\n                     of ").concat(e.count," items")}),Object(B.jsx)("span",{className:p.displayPages,children:"".concat(i+1," of ").concat(Math.ceil(e.count/l)," pages")})]})}})})})]})})]})}var Ne=Object(A.a)("h1",{target:"e1o6ewqb0"})({name:"155hk3z",styles:"font-weight:700;font-size:72px;line-height:1.22;color:#14141e;margin-bottom:40px"});var Ae=function(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],r=t[1],i=Object(o.c)((function(e){return e.teams.items})),c=Object(o.b)();return Object(n.useEffect)((function(){function e(){return e=Object(m.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,r((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))}));case 4:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){c(k())}),[c]),Object(B.jsxs)(F,{children:[Object(B.jsx)(Ne,{children:"NBA profile"}),Object(B.jsx)(ne,{}),i.length>0&&Object(B.jsx)(Pe,{teams:i}),a.length>0&&Object(B.jsx)(Te,{players:a})]})};c.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(o.a,{store:R,children:Object(B.jsx)(s.a,{loading:null,persistor:T,children:Object(B.jsx)(Ae,{})})})}),document.getElementById("root"))}},[[306,1,2]]]);
//# sourceMappingURL=main.083e105b.chunk.js.map