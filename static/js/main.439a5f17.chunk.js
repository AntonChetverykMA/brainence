(this.webpackJsonpbrainence=this.webpackJsonpbrainence||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var A=c(1),i=c(0),n=c.n(i),a=c(14),s=c.n(a),r=(c(34),c(35),c(36),c(10)),l=c(3);c(37);var d=function(){return Object(A.jsxs)("ul",{className:"nav justify-content-center",children:[Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(r.b,{exact:!0,to:"/",className:"nav-link",activeClassName:"selected",children:"Products"})}),Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(r.b,{to:"/add-product",className:"nav-link",activeClassName:"selected",children:"Add product"})})]})};var o=function(e){return Object(A.jsxs)("div",{className:"Layout",children:[Object(A.jsx)(d,{}),e.children]})},u=c(8),j=c(17),m=c(7),b=c(6),p="ADD_PRODUCT",x="DELETE_PRODUCT",h=c(24),O=c(26);var g={deleteProduct:function(e){return{type:x,payload:e}}},y=Object(b.b)((function(e){return{}}),g)((function(e){var t=e.img,c=e.name,i=e.description,n=e.price,a=e.id,s=e.pinned,r=e.setPinned;return Object(A.jsxs)("div",{className:"card mt-4",children:[Object(A.jsx)("div",{className:"ml-2 mt-2",onClick:function(){return r(s===a?"":a)},children:a!==s?Object(A.jsx)(h.a,{icon:O.b}):Object(A.jsx)(h.a,{icon:O.a})}),Object(A.jsx)("div",{className:"img-container",children:Object(A.jsx)("img",{className:"card-img",src:t,alt:"img"})}),Object(A.jsxs)("div",{className:"card-body",children:[Object(A.jsx)("p",{className:"card-title",children:c}),Object(A.jsxs)("div",{className:"card-text",children:["Descirption: ",i]}),Object(A.jsxs)("div",{className:"card-text",children:["Price: ",n]})]}),Object(A.jsx)("button",{type:"button",onClick:function(){return e.deleteProduct(a)},className:"delete",children:"Delete"})]})}));var E=Object(b.b)((function(e){return{products:e.products.products}}),{})((function(e){var t=e.products,c=Object(i.useState)(""),n=Object(m.a)(c,2),a=n[0],s=n[1],r=Object(i.useState)(""),l=Object(m.a)(r,2),d=l[0],o=l[1],b=Object(j.a)(t.sort((function(e){return e.id===a?-1:1}))).filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())||e.description.toLowerCase().includes(d.toLowerCase())}));return Object(A.jsxs)("div",{className:"products-container",children:[Object(A.jsx)("form",{className:"mt-4",children:Object(A.jsxs)("div",{className:"form-group row",children:[Object(A.jsx)("label",{htmlFor:"search",className:"col-sm-2 col-form-label",children:"Search"}),Object(A.jsx)("div",{className:"col-sm-10",children:Object(A.jsx)("input",{type:"text",className:"form-control-plaintext",id:"search",value:d,onChange:function(e){return o(e.target.value)}})})]})}),Object(A.jsx)("div",{className:"products-list-container",children:b.length?b.map((function(e){return Object(i.createElement)(y,Object(u.a)(Object(u.a)({},e),{},{key:e.id,pinned:a,setPinned:s}))})):Object(A.jsx)("div",{children:"No items"})})]})})),N=c(48);var S={addProduct:function(e){return{type:p,payload:e}}},I=Object(b.b)((function(e){return{}}),S)((function(e){var t=Object(i.useState)(""),c=Object(m.a)(t,2),n=c[0],a=c[1],s=Object(i.useState)(""),r=Object(m.a)(s,2),d=r[0],o=r[1],u=Object(i.useState)(""),j=Object(m.a)(u,2),b=j[0],p=j[1],x=Object(i.useState)(0),h=Object(m.a)(x,2),O=h[0],g=h[1],y=Object(l.f)();return Object(A.jsx)("div",{className:"d-flex justify-content-center mt-4",children:Object(A.jsxs)("form",{children:[Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("label",{htmlFor:"name",children:"Name of product"}),Object(A.jsx)("input",{type:"text",className:"form-control mb-4",id:"name",placeholder:"name",value:n,onChange:function(e){return a(e.target.value)}}),Object(A.jsx)("label",{htmlFor:"description",children:"Description"}),Object(A.jsx)("input",{type:"text",className:"form-control mb-4",id:"description",placeholder:"description",value:d,onChange:function(e){return o(e.target.value)}}),Object(A.jsx)("label",{htmlFor:"img",children:"Add link to img"}),Object(A.jsx)("input",{type:"text",className:"form-control mb-4",id:"img",placeholder:"img",value:b,onChange:function(e){return p(e.target.value)}}),Object(A.jsx)("label",{htmlFor:"price",children:"Price"}),Object(A.jsx)("input",{type:"number",className:"form-control",id:"price",placeholder:"price",value:O,onChange:function(e){return g(e.target.value)}})]}),Object(A.jsx)("button",{type:"button",className:"btn add",onClick:function(){O?(e.addProduct({name:n,description:d,img:b,id:Object(N.a)(),price:O}),y.push("/")):alert("Fill in all the gaps")},children:"Add"})]})})}));var C=function(){return Object(A.jsx)(r.a,{basename:"brainence",children:Object(A.jsx)(l.c,{children:Object(A.jsxs)(o,{children:[Object(A.jsx)(l.a,{exact:!0,path:"/",component:E}),Object(A.jsx)(l.a,{path:"/add-product",component:I})]})})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,A=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),A(e),i(e),n(e),a(e)}))},F=c(9),R={products:[{name:"Iphone X",price:1e3,img:"https://lunafon.ru/image/cache/catalog/Telephones/Apple/apple-iphone-x-silver-1000x1000.jpg",description:"new",id:"1"},{name:"Meizu M8",price:500,img:"https://i.citrus.ua/uploads/shop/8/2/8200a116bef8fd0ebe8e8f0f82ad708e.jpg",description:"new",id:"2"},{name:"Samsung",price:900,img:"data:image/jpeg;base64,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",description:"new",id:"3"},{name:"Huawei P40",price:300,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJIl8GSa2VDzknPyWSKtlQZ_JHs1Nus_4p32vuddJQ-0In9kV0kQ0OfJl0Hw&usqp=CAc",description:"new",id:"4"}]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(u.a)(Object(u.a)({},e),{},{products:[].concat(Object(j.a)(e.products),[t.payload])});case x:return Object(u.a)(Object(u.a)({},e),{},{products:e.products.filter((function(e){return e.id!==t.payload}))});default:return e}},B=Object(F.combineReducers)({products:X}),k=c(28),U=Object(F.createStore)(B,Object(k.composeWithDevTools)());s.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(b.a,{store:U,children:Object(A.jsx)(C,{})})}),document.getElementById("root")),K()}},[[46,1,2]]]);
//# sourceMappingURL=main.439a5f17.chunk.js.map