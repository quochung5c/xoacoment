(this["webpackJsonpxoa-comment"]=this["webpackJsonpxoa-comment"]||[]).push([[0],{184:function(e,t,a){e.exports=a(371)},189:function(e,t,a){},190:function(e,t,a){},371:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),i=a.n(o);a(189),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(78),r=a(79),s=a(91),u=a(80),m=a(93),d=a(49),h=a(34),g=a(20),f=(a(190),a(156)),p=a.n(f),b=a(16),k=a.n(b),v=a(37),E=a.n(v),y=(a(101),a(102),a(374)),O=function(e){var t=e.data,a=e.token,n=[{title:"M\xe3 b\xe0i vi\u1ebft",dataIndex:"id",key:"id"},{title:"Th\u1eddi gian t\u1ea1o",key:"created_time",render:function(e,t){return c.a.createElement("span",null,E()(t.created_time).format("LLLL"))}},{title:"Thao t\xe1c",key:"action",render:function(e,t){return c.a.createElement(d.b,{onClick:function(){return console.log("Token c\u1ee7a t\xf4i l\xe0 "+a)},to:{pathname:"/post/".concat(t.id),state:{id:t.id,access_token:a}}},"Ch\u1ea1y")}}];return c.a.createElement("div",null,c.a.createElement(y.a,{style:{margin:20},size:"middle",footer:function(){return"Danh s\xe1ch bao g\u1ed3m ".concat(t.length," b\xe0i vi\u1ebft")},dataSource:t,columns:n,rowKey:"id"}))},j=a(64);E.a.locale("vi");var w=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(null),l=Object(g.a)(i,2),r=l[0],s=l[1],u=Object(n.useState)([]),m=Object(g.a)(u,2),d=m[0],h=m[1],f=function(e){k.a.get("https://graph.facebook.com/v6.0/me/accounts?access_token=".concat(e)).then((function(e){return o(e.data.data),console.log("Good"),k.a.get("https://graph.facebook.com/v6.0/".concat(e.data.data[0].id,"/feed/?access_token=").concat(e.data.data[0].access_token))})).then((function(e){}))};return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Tool x\xf3a comment"),a.length>0?c.a.createElement("div",null,c.a.createElement("h3",null,"Fanpage:"," ",c.a.createElement(j.a,{onChange:function(e){var t=e.split(" ");s(t[1]),console.log(r),console.log(t),k.a.get("https://graph.facebook.com/v6.0/".concat(t[0],"/feed/?access_token=").concat(t[1])).then((function(e){h(e.data.data)})).catch((function(e){console.log(e)}))},style:{width:500}},a.map((function(e){return c.a.createElement(j.a.Option,{key:e.id,value:e.id+" "+e.access_token},e.name)})))),c.a.createElement(O,{data:d,token:r})):c.a.createElement(p.a,{appId:"2623573851104227",autoLoad:!0,size:"small",fields:"name,email,picture,pages_show_list,manage_pages,publish_pages",callback:function(e){f(e.accessToken)}}))},_=a(182),S=a(183),C=a(375),x=a(372),L=a(96),T=a(373),z=function(e){var t=e.id,a=e.token,o=Object(n.useState)(!0),i=Object(g.a)(o,2),l=i[0],r=i[1],s=Object(n.useState)([]),u=Object(g.a)(s,2),m=u[0],h=u[1],f=Object(n.useState)(null),p=Object(g.a)(f,2),b=p[0],v=p[1],O=Object(n.useState)([]),w=Object(g.a)(O,2),z=w[0],I=w[1],X=Object(n.useState)([]),B=Object(g.a)(X,2),K=B[0],D=B[1],R=C.a.useForm(),M=Object(g.a)(R,1)[0];Object(n.useEffect)((function(){k.a.get("https://graph.facebook.com/v6.0/".concat(t,"/comments?access_token=").concat(a)).then((function(e){D(e.data.data)}))}));var N=function(e){for(var t=Object(S.a)(e).slice(0),n=function(e){k.a.delete("https://graph.facebook.com/v6.0/".concat(t[e].id,"?access_token=").concat(a)).then((function(a){!function(e){D(K.filter((function(t){return t.id!==e})))}(t[e].id),alert("X\xf3a th\xe0nh c\xf4ng")})).catch((function(e){console.log("X\xf3a th\u1ea5t b\u1ea1i"),console.log(e)}))},c=0;c<t.length;c++)n(c)},W={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t,"Number of Selected Rows: ",t.length),t.length>0?(r(!1),h(t)):r(!0)},getCheckboxProps:function(e){return{name:e.name}}},A=function(){r(!0),console.log("Chu\u1ea9n b\u1ecb ch\u1ea1y t\u1ef1 \u0111\u1ed9ng..."),setInterval((function(){console.log("B\u1eaft \u0111\u1ea7u"),k.a.get("https://graph.facebook.com/v6.0/".concat(t,"/comments?access_token=").concat(a)).then((function(e){if(D(e.data.data),e.data.data.length===z.length)console.log("Kh\xf4ng c\xf3 g\xec \u0111\u1ec3 x\xf3a");else{for(var t=[],n=function(e){z.includes(z.find((function(t){return t.id===K[e].id})))||t.push(K[e])},c=0;c<K.length;c++)n(c);t.forEach((function(t){k.a.delete("https://graph.facebook.com/v6.0/".concat(t.id,"?access_token=").concat(a)).then((function(t){console.log("X\xf3a th\xe0nh c\xf4ng"),D(e.data.data)})).catch((function(e){console.log("X\xf3a th\u1ea5t b\u1ea1i")}))}))}}))}),b)},F=c.a.createElement(C.a,{form:M},c.a.createElement(C.a.Item,{label:"Th\u1eddi gian"},c.a.createElement(j.a,{onChange:function(e){v(e),console.log(e),console.log(b)},style:{width:100}},c.a.createElement(j.a.Option,{value:"5000"},"5 gi\xe2y"),c.a.createElement(j.a.Option,{selected:!0,value:"10000"},"10 gi\xe2y"),c.a.createElement(j.a.Option,{value:"30000"},"30 gi\xe2y"),c.a.createElement(j.a.Option,{value:"60000"},"1 ph\xfat"),c.a.createElement(j.a.Option,{value:"300000"},"5 ph\xfat"))),c.a.createElement(x.a,null),c.a.createElement(L.a,{type:"danger",size:"middle",style:{marginRight:10},onClick:function(){return A()}},"B\u1eaft \u0111\u1ea7u"),c.a.createElement(L.a,{type:"ghost",size:"middle",onClick:function(){return alert("H\u1ee7y Auto th\xe0nh c\xf4ng"),void window.location.reload()}},"H\u1ee7y")),G=c.a.createElement("h2",null,"C\xe0i \u0111\u1eb7t t\u1ef1 \u0111\u1ed9ng"),H=[{title:"M\xe3 b\xecnh lu\u1eadn",dataIndex:"id",key:"id"},{title:"Th\u1eddi gian t\u1ea1o",key:"created_time",render:function(e,t){return c.a.createElement("span",null,E()(t.created_time).format("LLLL"))}},{title:"Th\xf4ng tin b\xecnh lu\u1eadn",key:"message",dataIndex:"message"}];return c.a.createElement("div",null,c.a.createElement(L.a,{style:{margin:12},type:"primary",size:"large",disabled:l,onClick:function(){return N(m)}},"X\xf3a"),c.a.createElement(L.a,{style:{margin:12,backgroundColor:l?"#f7f7f7":"green",color:l?"#cccccc":"white"},type:"primary",size:"large",disabled:l,onClick:function(){I(m),h([]),r(!0)}},"Gi\u1eef"),c.a.createElement(T.a,{title:G,content:F,trigger:"click",placement:"bottom"},c.a.createElement(L.a,{style:{margin:10},type:"danger",size:"large"},"X\xf3a t\u1ef1 \u0111\u1ed9ng")),c.a.createElement(d.b,{style:{fontSize:20,fontWeight:400,marginLeft:10},to:"/"},"Tr\u1edf v\u1ec1 trang ch\u1ee7"),c.a.createElement(y.a,{rowSelection:Object(_.a)({type:"checkbox"},W),dataSource:K,columns:H,rowKey:"id",title:function(){return"Qu\u1ea3n l\xfd b\xe0i vi\u1ebft ".concat(t)},footer:function(){return"Danh s\xe1ch bao g\u1ed3m ".concat(K.length," comments")}}),c.a.createElement("div",{class:"auto-section"},c.a.createElement("div",{className:"keep-id"},z.length>0?c.a.createElement("div",{style:{margin:20}},c.a.createElement(y.a,{dataSource:z,columns:H,rowKey:"id",title:function(){return"Danh s\xe1ch c\xe1c comment gi\u1eef l\u1ea1i"},footer:function(){return"Bao g\u1ed3m ".concat(z.length," comments")}})):c.a.createElement("p",null))))},I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChangeState=function(e){var t=a.state.data.filter((function(t){return t.id!==e}));a.setState({data:t})},a.showCommentList=function(){var e=a.props.location.state.id,t=a.props.location.state.access_token;k.a.get("https://graph.facebook.com/v6.0/".concat(e,"/comments?access_token=").concat(t)).then((function(e){a.setState({data:e.data.data}),console.log(a.state.data)}))},a.state={data:[]},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state.id,a=this.props.location.state.access_token;console.log(this.props.location.state),k.a.get("https://graph.facebook.com/v6.0/".concat(t,"/comments?access_token=").concat(a)).then((function(t){e.setState({data:t.data.data})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(z,{id:this.props.location.state.id,token:this.props.location.state.access_token}))}}]),t}(n.Component),X=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,{basename:window.location.pathname||""},c.a.createElement(h.c,null,c.a.createElement(h.a,{path:"/",exact:!0,component:w}),c.a.createElement(h.a,{path:"/post/:id",component:I})))}}]),t}(n.Component);i.a.render(c.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[184,1,2]]]);
//# sourceMappingURL=main.b30644f1.chunk.js.map