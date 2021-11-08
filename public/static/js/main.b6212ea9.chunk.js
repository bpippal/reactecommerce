(this.webpackJsonpekart=this.webpackJsonpekart||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),r=c.n(a),i=(c(12),c(3)),o=c(5),d=c(0);var l=function(e){var t=e.eachVal,c=e.handleDeleteItem,n=e.handleAddToCart,s=e.deleteItemByOne;return Object(d.jsxs)("div",{className:"cart-item box",children:[Object(d.jsx)("p",{children:t.name}),Object(d.jsx)("p",{children:t.count}),Object(d.jsx)("p",{children:t.cost}),Object(d.jsx)("p",{children:t.cost*t.count}),Object(d.jsxs)("div",{className:"change-quantity",children:[Object(d.jsx)("button",{onClick:function(){return c(t.name)},children:Object(d.jsx)("i",{className:"far fa-trash-alt fa-2x"})}),Object(d.jsxs)("div",{className:"up-down",children:[Object(d.jsx)("button",{onClick:function(){return n(t)},children:Object(d.jsx)("i",{className:"fas fa-sort-up"})}),Object(d.jsx)("button",{onClick:function(){return s(t.name)},children:Object(d.jsx)("i",{className:"fas fa-sort-down"})})]})]})]})};function j(e){var t,c=e.cartArr,n=e.handleDeleteItem,s=e.handleAddToCart,a=e.deleteItemByOne;(t=Array.from(new Set(c.map((function(e){return e.name})))).map((function(e){return c.find((function(t){return t.name===e}))}))).forEach((function(e){e.count=0,c.forEach((function(t){e.name===t.name&&(e.count+=1)}))}));var r=0;return t.forEach((function(e){var t=parseInt(e.cost)*e.count;r+=t})),Object(d.jsxs)("div",{className:"box cart",children:[Object(d.jsxs)("div",{className:"cart-top",children:[Object(d.jsx)("img",{src:"https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-eps-trolley-logo-web-icons-shop-button-182252657.jpg",alt:"cart-logo"}),Object(d.jsx)("h2",{children:"Shopping Cart"})]}),Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Item Name"})}),Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Quantity"})}),Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Unit Cost"})}),Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Cost"})}),Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Change"})})]}),Object(d.jsx)("div",{className:"cart-item-container",children:t.length>0?t.map((function(e,t){return Object(d.jsx)(l,{eachVal:e,deleteItemByOne:a,handleDeleteItem:n,handleAddToCart:s},t)})):Object(d.jsx)("h3",{children:"Your cart is empty!"})}),Object(d.jsx)("div",{className:"total-cost",children:Object(d.jsx)("p",{children:Object(d.jsxs)("strong",{children:["Total Cost - ",r]})})})]})}var b=s.a.memo(j);var u=function(e){var t=e.eachVal,c=e.handleAddToCart;return Object(d.jsxs)("div",{className:"box product-item",children:[Object(d.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mB1OYIkW0teagunRxpunMTLoyJp0pRsbrg&usqp=CAU",alt:"product"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Name - "}),t.name]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Cost (INR) - "}),t.cost]}),Object(d.jsx)("button",{onClick:function(){return c(t)},children:"Add to cart"})]})};var h=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!1),l=Object(o.a)(r,2),j=l[0],h=l[1],m=Object(n.useState)([]),O=Object(o.a)(m,2),x=O[0],p=O[1];function f(e){p([].concat(Object(i.a)(x),[e]))}return Object(d.jsxs)("div",{className:"box first-product",children:[Object(d.jsxs)("div",{className:"product-container",children:[Object(d.jsxs)("div",{className:"product-add box",children:[Object(d.jsxs)("div",{className:"add-button",children:[Object(d.jsx)("img",{src:"https://booster.io/wp-content/uploads/product-add-to-cart-e1438362099361.png",alt:""}),Object(d.jsx)("button",{onClick:function(){h(!0)},className:"product-add",children:"Add a Product"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Product name should be unique"}),Object(d.jsx)("li",{children:"Product cost should be a number"})]})]}),Object(d.jsx)("div",{className:"modal-bg ".concat(j?"bg-active":""," "),children:Object(d.jsxs)("div",{className:"modal box",children:[Object(d.jsxs)("div",{className:"modal-item",children:[Object(d.jsx)("label",{children:"Product name"}),Object(d.jsx)("input",{id:"name",className:"name",placeholder:"Enter Product name"})]}),Object(d.jsxs)("div",{className:"modal-item",children:[Object(d.jsx)("label",{children:"Product cost"}),Object(d.jsx)("input",{id:"cost",className:"cost",placeholder:"Enter Product cost"})]}),Object(d.jsxs)("div",{className:"modal-button",children:[Object(d.jsx)("button",{onClick:function(){var e=document.querySelector("input.name"),t=document.querySelector("input.cost"),c={name:e.value,cost:t.value};a([].concat(Object(i.a)(s),[c])),t.value="",e.value="",h(!1)},children:"Add to List"}),Object(d.jsx)("button",{onClick:function(){h(!1)},children:"Close"})]})]})})]}),Object(d.jsxs)("div",{className:"product-list box",children:["Product List-",Object(d.jsx)("div",{className:"item-container",children:s.length>0?s.map((function(e,t){return Object(d.jsx)(u,{eachVal:e,handleAddToCart:f},t)})):Object(d.jsx)("h3",{children:'Product List is Empty. Click on "Add a Product" to add Product\'s'})})]})]}),Object(d.jsx)(b,{cartArr:x,handleDeleteItem:function(e){for(var t=0;t<x.length;)x[t].name===e?x.splice(t,1):++t;p(Object(i.a)(x))},deleteItemByOne:function(e){for(var t=0;t<x.length;t++)if(x[t].name===e){x.splice(t,1);break}p(Object(i.a)(x))},handleAddToCart:f})]})};var m=function(e){return Object(d.jsx)("div",{className:"main-content",children:Object(d.jsx)(h,{})})};var O=function(e){return Object(d.jsxs)("div",{className:"top-nav make-flex",children:[Object(d.jsx)("p",{children:"Welcome to myE-Commerce Website"}),Object(d.jsx)("img",{src:"https://i.pinimg.com/originals/ca/9a/43/ca9a4373d7ef157b1d302211d2a1f6a6.jpg",alt:"logo"})]})};var x=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{}),Object(d.jsx)(m,{})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.b6212ea9.chunk.js.map