(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e,t,a){e.exports={overlay:"Drawer_overlay__3kPTp",overlayVisible:"Drawer_overlayVisible__3IJpy",drawer:"Drawer_drawer__1pivs",items:"Drawer_items__3JQre"}},20:function(e,t,a){e.exports={card:"Card_card__38elP",plus:"Card_plus__1f188",favourite:"Card_favourite__1pd9r"}},41:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(34),s=a.n(n),i=(a(41),a(14)),l=a(5),o=a.n(l),u=a(11),d=a(4),j=a(6),b=a.n(j),x=a(2),m=a(13),f=a(1),h=function(e){var t=r.a.useContext(A).basketItems.reduce((function(e,t){return e+t.price}),0);return Object(f.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(f.jsx)(m.b,{to:"/react-sneakers",children:Object(f.jsxs)("div",{className:"d-flex align-center m-0",children:[Object(f.jsx)("img",{className:"mr-15",width:40,height:40,src:"img/logo.png",alt:"Logo"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{className:"text-uppercase",children:"React Sneakers SUKA"}),Object(f.jsx)("span",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(f.jsxs)("ul",{className:"d-flex",children:[Object(f.jsxs)("li",{className:"mr-30 cu-p",onClick:e.onClickBasket,children:[Object(f.jsx)("img",{src:"img/basket.svg",alt:"cart",className:"mr-10"}),Object(f.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)(m.b,{to:"/react-sneakers/favourites",children:Object(f.jsx)("img",{src:"img/favourite.svg",alt:"Favourite",className:"cu-p mr-30"})}),Object(f.jsx)(m.b,{to:"/react-sneakers/user",children:Object(f.jsx)("img",{src:"img/profile.svg",alt:"User",className:"cu-p"})})]})]})]})},p=function(e){var t=e.image,a=e.title,c=e.description,n=r.a.useContext(A).setBasketOpen;return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"basketEmpty d-flex justify-center align-center flex-column flex",children:[Object(f.jsx)("img",{className:"mb-20",width:120,src:t,alt:"Empty Basket"}),Object(f.jsx)("h2",{children:a}),Object(f.jsx)("p",{className:"text-center opacity-6",children:c}),Object(f.jsxs)("button",{onClick:function(){return n(!1)},className:"confirmBtn",children:[Object(f.jsx)("img",{src:"img/leftArrow.svg",alt:"left"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})})},v=a(19),O=a.n(v),g=function(e){return new Promise((function(t){return setTimeout(t,e)}))},k=function(e){var t=e.onCloseCart,a=e.onRemove,c=e.items,n=void 0===c?[]:c,s=e.opened,i=r.a.useContext(A),l=i.basketItems,j=i.setBasketItems,x=r.a.useState(null),m=Object(d.a)(x,2),h=m[0],v=m[1],k=r.a.useState(!1),N=Object(d.a)(k,2),w=N[0],y=N[1],C=r.a.useState(!1),B=Object(d.a)(C,2),S=B[0],I=B[1],_=l.reduce((function(e,t){return e+t.price}),0),F=Math.floor(_-.8*_),R=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),e.next=4,b.a.post("https://60ec458ae9647b0017cde13f.mockapi.io/orders",{items:l});case 4:t=e.sent,a=t.data,v(a.id),y(!0),j([]),c=0;case 10:if(!(c<l.length)){e.next=19;break}return r=l[c],e.next=14,b.a.delete("https://60ec458ae9647b0017cde13f.mockapi.io/cart/"+r.id);case 14:return e.next=16,g(1e3);case 16:c++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert(e.t0);case 24:I(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"".concat(O.a.overlay," ").concat(s?O.a.overlayVisible:""),children:Object(f.jsxs)("div",{className:"".concat(O.a.drawer," d-flex flex flex-column p-30"),children:[Object(f.jsxs)("h2",{className:"mb-30 d-flex justify-between",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(f.jsx)("img",{onClick:t,className:"btnRemove cu-p",src:"img/btnRemove.svg",alt:"Remove"})]}),n.length>0?Object(f.jsx)("div",{className:" d-flex flex-column flex",children:Object(f.jsxs)("div",{className:"items flex",children:[n.map((function(e){return Object(f.jsxs)("div",{className:"basketItem mb-20 d-flex align-center",children:[Object(f.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"basketItemImg"}),Object(f.jsxs)("div",{className:"mr-20 flex",children:[Object(f.jsx)("p",{className:"mb-5",children:e.title}),Object(f.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(f.jsx)("img",{onClick:function(){return a(e.id)},className:"btnRemove",src:"img/btnRemove.svg",alt:"Remove"})]},e.id)})),Object(f.jsxs)("div",{className:"basketTotalBlock",children:[Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{className:"d-flex",children:[Object(f.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[_," \u0440\u0443\u0431."]})]}),Object(f.jsxs)("li",{className:"d-flex",children:[Object(f.jsx)("span",{children:"\u0412 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u043d\u0430\u043b\u043e\u0433 20% (\u041d\u0414\u0421):"}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[F," \u0440\u0443\u0431."]})]})]}),Object(f.jsxs)("button",{disabled:S,onClick:R,className:"confirmBtn",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(f.jsx)("img",{src:"img/arrow.svg",alt:"->"})]})]})]})}):Object(f.jsx)(p,{title:w?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",image:w?"img/offer.svg":"img/emptyBasket.png",description:w?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(h," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c\u0437\u0430\u043a\u0430\u0437."})]})})},N=a(12),w=a(20),y=a.n(w),C=a(36),B=function(e){var t=e.id,a=e.onClickAddBasket,c=e.price,n=e.title,s=e.imageUrl,i=e.onClickFavourite,l=e.Favourite,o=(e.added,e.loading),u=void 0!==o&&o,j=r.a.useContext(A).isItemAdded,b=r.a.useState(l),x=Object(d.a)(b,2),m=x[0],h=x[1],p={id:t,parentId:t,title:n,imageUrl:s,price:c};return Object(f.jsx)("div",{className:y.a.card,children:u?Object(f.jsxs)(C.a,{speed:2,width:150,height:240,viewBox:"0 0 150 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(f.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"130"}),Object(f.jsx)("rect",{x:"0",y:"150",rx:"10",ry:"10",width:"150",height:"15"}),Object(f.jsx)("rect",{x:"0",y:"174",rx:"10",ry:"10",width:"100",height:"15"}),Object(f.jsx)("rect",{x:"0",y:"210",rx:"10",ry:"10",width:"80",height:"24"}),Object(f.jsx)("rect",{x:"118",y:"205",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{onClick:function(){i(p),h(!m)},className:y.a.favourite,children:Object(f.jsx)("img",{src:m?"img/favouriteSelected.svg":"img/favouriteNone.svg",alt:"favouriteNone"})}),Object(f.jsx)("div",{className:"d-flex align-center justify-center",children:Object(f.jsx)("img",{width:133,height:112,src:s,alt:"Sneakers"})}),Object(f.jsx)("h5",{children:n}),Object(f.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(f.jsxs)("div",{className:"d-flex flex-column",children:[Object(f.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(f.jsxs)("b",{children:[c," \u0440\u0443\u0431."]})]}),a&&Object(f.jsx)("img",{className:y.a.plus,onClick:function(){a(p)},src:j(t)?"img/inBasket.svg":"img/notInBasket.png",alt:"Add"})]})]})})};var S=function(e){var t=e.items,a=e.searchValue,c=e.setSearchValue,r=e.onChangeSearchInput,n=e.onAddBasket,s=e.onAddFavourite,l=e.isLoading;return Object(f.jsxs)("section",{className:"content p-40",children:[Object(f.jsxs)("div",{className:"mb-30 d-flex justify-between align-center",children:[Object(f.jsx)("h1",{children:a?'\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(a,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(f.jsxs)("div",{className:"searchBlock d-flex",children:[Object(f.jsx)("img",{src:"img/search.svg",alt:"Search"}),a&&Object(f.jsx)("img",{onClick:function(){return c("")},className:"btnSearchClear btnRemove cu-p",src:"img/btnRemove.svg",alt:"Clear"}),Object(f.jsx)("input",{onChange:r,value:a,type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(f.jsx)("div",{className:"catalog d-flex justify-around flex-wrap",children:function(){var e=t&&t.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));return(l?Object(i.a)(Array(4)):e).map((function(e,t){return Object(f.jsx)(B,Object(N.a)(Object(N.a)({onClickAddBasket:function(e){return n(e)},onClickFavourite:function(e){return s(e)}},e),{},{loading:l}),t)}))}()})]})};var I=function(){var e=r.a.useContext(A),t=e.favourites,a=e.onAddFavourite,c=e.onAddBasket;return Object(f.jsxs)("section",{className:"content p-40",children:[Object(f.jsx)("div",{className:"mb-30 d-flex justify-between align-center",children:Object(f.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(f.jsx)("div",{className:"catalog d-flex justify-around flex-wrap",children:t.map((function(e,t){return Object(f.jsx)(B,Object(N.a)({onClickAddBasket:function(e){return c(e)},onClickFavourite:function(e){return a(e)},Favourite:!0},e),t)}))})]})};var _=function(){var e=r.a.useContext(A).onAddFavourite,t=r.a.useState([]),a=Object(d.a)(t,2),c=a[0],n=a[1],s=r.a.useState(!0),l=Object(d.a)(s,2),j=l[0],x=l[1];return r.a.useEffect((function(){Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://60ec458ae9647b0017cde13f.mockapi.io/orders");case 3:t=e.sent,a=t.data,n(a.map((function(e){return e.items})).flat()),x(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(f.jsxs)("section",{className:"content p-40",children:[Object(f.jsx)("div",{className:"mb-30 d-flex justify-between align-center",children:Object(f.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(f.jsx)("div",{className:"catalog d-flex justify-center flex-wrap",children:(j?Object(i.a)(Array(4)):c).map((function(t,a){return Object(f.jsx)(B,Object(N.a)(Object(N.a)({onClickFavourite:function(t){return e(t)}},t),{},{loading:j}),a)}))})]})},A=r.a.createContext({});var F=function(){var e=r.a.useState([]),t=Object(d.a)(e,2),a=t[0],c=t[1],n=r.a.useState([]),s=Object(d.a)(n,2),l=s[0],j=s[1],m=r.a.useState([]),p=Object(d.a)(m,2),v=p[0],O=p[1],g=r.a.useState(""),N=Object(d.a)(g,2),w=N[0],y=N[1],C=r.a.useState(!1),B=Object(d.a)(C,2),F=B[0],R=B[1],V=r.a.useState(!0),E=Object(d.a)(V,2),L=E[0],U=E[1];r.a.useEffect((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,U(!0),e.next=4,b.a.get("https://60ec458ae9647b0017cde13f.mockapi.io/cart");case 4:return t=e.sent,e.next=7,b.a.get("https://60ec458ae9647b0017cde13f.mockapi.io/favorites");case 7:return a=e.sent,e.next=10,b.a.get("https://60ec458ae9647b0017cde13f.mockapi.io/items");case 10:r=e.sent,U(!1),O(a.data),j(t.data),c(r.data),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),alert(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var D=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.find((function(e){return Number(e.parentId)===Number(t.id)})),e.prev=1,!a){e.next=8;break}return e.next=5,b.a.delete("https://60ec458ae9647b0017cde13f.mockapi.io/cart/".concat(a.id)).then();case 5:j((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=13;break;case 8:return e.next=10,b.a.post("https://60ec458ae9647b0017cde13f.mockapi.io/cart",t).then();case 10:c=e.sent,r=c.data,j((function(e){return[].concat(Object(i.a)(e),[r])}));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("https://60ec458ae9647b0017cde13f.mockapi.io/cart/".concat(t)).then();case 3:j((function(e){return e.filter((function(e){return Number(e.id)!==Number(t)}))})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!v.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}b.a.delete("https://60ec458ae9647b0017cde13f.mockapi.io/favorites/".concat(t.id)).then(),O((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,b.a.post("https://60ec458ae9647b0017cde13f.mockapi.io/favorites",t).then();case 8:a=e.sent,c=a.data,O((function(e){return[].concat(Object(i.a)(e),[c])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(A.Provider,{value:{basketItems:l,favourites:v,items:a,isItemAdded:function(e){return l.some((function(t){return Number(t.parentId)===Number(e)}))},onAddFavourite:P,onAddBasket:D,setBasketOpen:R,setBasketItems:j},children:Object(f.jsxs)("div",{className:"wrapper clear",children:[Object(f.jsx)(k,{items:l,onRemove:J,onCloseCart:function(){return R(!1)},opened:F}),Object(f.jsx)(h,{onClickBasket:function(){return R(!0)}}),Object(f.jsx)(x.a,{path:"react-sneakers",exact:!0,children:Object(f.jsx)(S,{items:a,basketItems:l,searchValue:w,setSearchValue:y,onChangeSearchInput:function(e){y(e.target.value)},onAddBasket:D,onAddFavourite:P,isLoading:L})}),Object(f.jsx)(x.a,{path:"react-sneakers/favourites",exact:!0,children:Object(f.jsx)(I,{})}),Object(f.jsx)(x.a,{path:"react-sneakers/user",exact:!0,children:Object(f.jsx)(_,{})})]})})};a(67);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(m.a,{children:Object(f.jsx)(F,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.23135d20.chunk.js.map