(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(27),o=n.n(s),l=n(28),r=n(29),c=n(37),p=n(30),d=n(39),v=n(31),u=n.n(v),f=n(38),g=n(34),m=n.n(g),b=n(35),E=n.n(b),h=n(36),y=new(n.n(h).a)({storage:"session",defaultExpiration:120}),w=E()(y),L=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={isLoading:!0,liveEvents:[]},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("//api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a").use(w).end(function(t,n){if(t)console.error(t.message);else{var a=JSON.parse(n.text);e.setState({isLoading:!1,liveEvents:a.liveEvents})}})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.liveEvents;return t?i.a.createElement("div",{style:{position:"relative"}},i.a.createElement("div",{style:{textAlign:"center",position:"absolute",left:"35%",transform:"translate(0, 50%)"}},i.a.createElement(u.a,{type:"Ball-Triangle",color:"#2e7423",height:"100",width:"100"}))):i.a.createElement("div",{style:{position:"relative"}},i.a.createElement("div",{style:{position:"absolute",width:"570px",top:"110px",transform:"translate(0, 50%)"}},i.a.createElement(f.a,{data:n,iconPaths:{BASKETBALL:"images/icons/basketball.png",DEFAULT:"images/icons/default.png",FOOTBALL:"images/icons/football.png",TENNIS:"images/icons/tennis.png"}})))}}]),t}(a.Component);L.styles={},L.loaderStyles={};var O=L;o.a.render(i.a.createElement(O,null),document.getElementById("live-matches"))},40:function(e,t,n){e.exports=n(122)}},[[40,2,1]]]);
//# sourceMappingURL=main.4f306c9d.chunk.js.map