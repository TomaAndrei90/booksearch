(this.webpackJsonpbooksearch=this.webpackJsonpbooksearch||[]).push([[0],{146:function(e,t,a){e.exports=a.p+"static/media/book.9382b83f.svg"},176:function(e,t,a){e.exports=a(315)},181:function(e,t,a){},183:function(e,t,a){},315:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(34),c=a.n(r),i=(a(181),a(182),a(183),a(100)),l=a.n(i),s=a(145),m=a(44),u=a(45),h=a(46),d=a(48),p=a(50),f=a(326),g=a(164),v=a(327),E=a(324),b=a(325),w=a(323),k=function(e){return o.a.createElement(w.a,{active:!0,inline:"centered",size:"large"},e.text)},y=a(146),x=a.n(y),I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!1,books:void 0,search:""},a.fetchBooks=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,o,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({loading:!0}),n=a.state.search,e.next=5,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(n));case 5:return o=e.sent,e.next=8,o.json();case 8:r=e.sent,a.setState({loading:!1,books:r});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.changeInputHandler=function(e){a.setState({search:e.target.value})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.books,a=e.search,n=e.loading,r=t&&t.items?o.a.createElement(f.a.Group,{centered:!0,itemsPerRow:5,stackable:!0,style:{margin:"0 1rem",paddingTop:"6rem"}},t.items.map((function(e){var t=e.volumeInfo,a=t.title,n=void 0===a?"No title data.":a,r=t.authors,c=void 0===r?["No author data."]:r,i=t.description,l=void 0===i?"":i,s=t.imageLinks,m=void 0===s?"":s,u=t.infoLink,h=void 0===u?"":u,d=t.publishedDate,p=t.publisher;return o.a.createElement(f.a,{href:h,color:"brown"},o.a.createElement(g.a,{wrapped:!0,src:m.thumbnail}),o.a.createElement(f.a.Content,null,o.a.createElement(f.a.Header,null,n),o.a.createElement(f.a.Meta,null,c.join(" / ")),o.a.createElement(f.a.Description,null,l)),o.a.createElement(f.a.Content,{extra:!0},d&&p&&o.a.createElement("p",null,"Published ".concat(d&&"on ".concat(d)," ").concat(p&&"on ".concat(p)))))}))):o.a.createElement("div",{style:{paddingTop:"6rem",minHeight:"90vh",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}},o.a.createElement("h2",{style:{alignSelf:"center"}},"No results to show."));return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{borderless:!0,fixed:"top"},o.a.createElement(E.a,null,o.a.createElement(v.a.Item,null,o.a.createElement(g.a,{size:"mini",src:x.a})),o.a.createElement(v.a.Item,{header:!0},"BookSearch"),o.a.createElement(v.a.Item,{position:"right"},o.a.createElement(b.a,{onSubmit:this.fetchBooks},o.a.createElement(b.a.Group,null,o.a.createElement(b.a.Input,{placeholder:"Search for...",type:"search",name:"search",action:{color:"brown",content:"Search",icon:"search"},value:a,onChange:this.changeInputHandler})))))),n?o.a.createElement("div",{style:{paddingTop:"6rem",minHeight:"90vh",display:"flex",alignItems:"center"}},o.a.createElement(k,{text:"Loading..."})):r,o.a.createElement("div",{style:{textAlign:"right",paddingRight:"1rem"}},"Icons made by ",o.a.createElement("a",{href:"https://www.flaticon.com/authors/dinosoftlabs",title:"DinosoftLabs"},"DinosoftLabs")," from ",o.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))}}]),t}(n.Component);var j=function(){return o.a.createElement(I,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[176,1,2]]]);
//# sourceMappingURL=main.cfba7b6d.chunk.js.map