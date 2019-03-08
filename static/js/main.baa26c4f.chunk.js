(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(30),c=a.n(r),l=a(117),s=a(119),o=a(118),d=a(8),u=a(9),p=a(12),m=a(11),h=a(13),E=(a(42),a(10)),v=a(33),b=a.n(v);a(67),a(69);function f(){return i.a.createElement("div",{className:"cart-element-img"})}a(71);function N(e){return i.a.createElement("h2",{className:"cart-element-header"},e.text)}a(73);function g(e){return i.a.createElement("div",{className:"cart-element-description"},e.text)}a(75);function O(){return i.a.createElement("div",{className:"cart-element-separator"})}a(77);var T=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{onClick:this.props.incrementAmount,className:"cart-element-amount-increment"+(this.props.isDisabled?" disabled":"")},"+")}}]),t}(n.Component),j=Object(E.b)(null,function(e,t){return{incrementAmount:function(){return e({type:"INCREMENT_AMOUNT",payload:{id:t.id}})}}})(T),y=(a(79),function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{onClick:this.props.decrementAmount,className:"cart-element-amount-decrement"+(this.props.isDisabled?" disabled":"")},"-")}}]),t}(n.Component)),A=Object(E.b)(null,function(e,t){return{decrementAmount:function(){return e({type:"DECREMENT_AMOUNT",payload:{id:t.id}})}}})(y);a(81);function k(e){return i.a.createElement("div",{className:"cart-element-amount-number"},e.number)}a(83);var C=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{onClick:this.props.removeCartElement,className:"cart-element-remove"})}}]),t}(n.Component),P=Object(E.b)(null,function(e,t){return{removeCartElement:function(){return e({type:"REMOVE_CART_ELEMENT",payload:{id:t.id}})}}})(C);a(85);function D(e){return i.a.createElement("div",{className:"cart-element-price"},e.totalPrice)}function _(e){return i.a.createElement("div",{className:"cart-element"},i.a.createElement(f,null),i.a.createElement("div",{className:"cart-element-header-description-wrapper"},i.a.createElement(N,{text:e.header}),i.a.createElement(g,{text:e.description})),i.a.createElement(O,null),i.a.createElement("div",{className:"cart-element-amount"},i.a.createElement(A,{id:e.id,isDisabled:e.isMinusDisabled}),i.a.createElement(k,{id:e.id,number:e.amount}),i.a.createElement(j,{id:e.id,isDisabled:e.isPlusDisabled})),i.a.createElement("div",{className:"cart-element-total"},i.a.createElement(P,{id:e.id}),i.a.createElement(D,{totalPrice:"".concat(Number(e.amount*e.price).toFixed(2)," \u20ac")})))}var I=a(115);a(87);function S(e){return i.a.createElement("button",{onClick:e.onClick?e.onClick:function(){},className:e.disabled?"disabled":""},e.text)}a(89);function L(e){return i.a.createElement("div",{id:"cart-finish"},i.a.createElement("div",{id:"cart-total"},"".concat(e.totalAmount)),i.a.createElement(I.a,{to:"/shipping"},i.a.createElement(S,{text:"buy"})))}a(91);function M(){return i.a.createElement("div",{className:"sk-circle"},i.a.createElement("div",{className:"sk-circle1 sk-child"}),i.a.createElement("div",{className:"sk-circle2 sk-child"}),i.a.createElement("div",{className:"sk-circle3 sk-child"}),i.a.createElement("div",{className:"sk-circle4 sk-child"}),i.a.createElement("div",{className:"sk-circle5 sk-child"}),i.a.createElement("div",{className:"sk-circle6 sk-child"}),i.a.createElement("div",{className:"sk-circle7 sk-child"}),i.a.createElement("div",{className:"sk-circle8 sk-child"}),i.a.createElement("div",{className:"sk-circle9 sk-child"}),i.a.createElement("div",{className:"sk-circle10 sk-child"}),i.a.createElement("div",{className:"sk-circle11 sk-child"}),i.a.createElement("div",{className:"sk-circle12 sk-child"}))}var V=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.cartElements.length||this.props.dispatch(function(e){e({type:"FETCH_CART_ELEMENTS"}),b.a.get("http://demo2375941.mockable.io/cart-elements").then(function(t){e({type:"FETCH_CART_ELEMENTS_FULFILLED",payload:t.data.elements})}).catch(function(t){e({type:"FETCH_CART_ELEMENTS_REJECTED",payload:t})})})}},{key:"render",value:function(){var e,t=0;return this.props.fetched&&!this.props.fetching?(e=this.props.cartElements.map(function(e,a){return t+=e.price*e.amount,i.a.createElement(_,{id:e.id,key:a,header:e.header,description:e.description,amount:e.amount,price:e.price,isMinusDisabled:e.isMinusDisabled,isPlusDisabled:e.isPlusDisabled})})).push(i.a.createElement(L,{key:e.length,totalAmount:"".concat(Number(t).toFixed(2)," \u20ac")})):this.props.fetching?e=i.a.createElement(M,null):this.props.error&&(console.log(this.props.error),e=i.a.createElement("div",{id:"error"},"Oops! Something went wrong! ",i.a.createElement("span",{id:"reload-button",onClick:function(){window.location.reload()}},"Click here")," to try again.")),i.a.createElement("div",{id:"cart",className:"container"},e)}}]),t}(n.Component),w=Object(E.b)(function(e){return{cartElements:e.cart.cartElements,fetched:e.cart.fetched,fetching:e.cart.fetching,error:e.cart.error}})(V),x=a(3),R=a(6),H=a(14);a(93);function F(e){return i.a.createElement("div",{className:"shipping-form-element"},i.a.createElement("div",{className:"label-input-wrapper"},i.a.createElement("label",null,e.labelText),i.a.createElement("input",{onChange:e.onInputChange,onBlur:e.onInputBlur,name:e.inputName,type:"text"})),i.a.createElement("div",{className:"error"},e.valid?"":e.errorText))}a(95);function B(e){return i.a.createElement("div",{className:"shipping-form-element"},i.a.createElement("div",{id:"select-wrapper",className:"label-select-wrapper"},i.a.createElement("label",null,e.labelText),i.a.createElement("select",{onChange:e.onSelectChange,name:"shipping"},e.freeShippingOption,i.a.createElement("option",null,"D7L"),i.a.createElement("option",null,"7post")),i.a.createElement("span",null,e.shippingPrice)))}function U(){return{type:"VALIDATE_NAME"}}function q(){return{type:"VALIDATE_ADDRESS"}}function G(){return{type:"VALIDATE_PHONE"}}function J(){return{type:"VALIDATE_EMAIL"}}function $(e){return{type:"CHANGE_SHIPPING_PRICE",payload:{carrier:e}}}a(97);var z=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).setName=e.setName.bind(Object(R.a)(Object(R.a)(e))),e.setAddress=e.setAddress.bind(Object(R.a)(Object(R.a)(e))),e.setPhoneNumber=e.setPhoneNumber.bind(Object(R.a)(Object(R.a)(e))),e.setEmail=e.setEmail.bind(Object(R.a)(Object(R.a)(e))),e.changeShippingPrice=e.changeShippingPrice.bind(Object(R.a)(Object(R.a)(e))),e.handlePayClick=e.handlePayClick.bind(Object(R.a)(Object(R.a)(e))),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"setName",value:function(e){this.props.dispatch({type:"SET_NAME",payload:{name:e.target.value}})}},{key:"setAddress",value:function(e){this.props.dispatch({type:"SET_ADDRESS",payload:{address:e.target.value}})}},{key:"setPhoneNumber",value:function(e){this.props.dispatch({type:"SET_PHONE",payload:{phone:e.target.value}})}},{key:"setEmail",value:function(e){this.props.dispatch({type:"SET_EMAIL",payload:{email:e.target.value}})}},{key:"changeShippingPrice",value:function(e){this.props.dispatch($(e.target.value))}},{key:"componentDidMount",value:function(){this.props.dispatch($(document.querySelector("select").value))}},{key:"handlePayClick",value:function(e,t){e.preventDefault(),t||(this.props.validateName(),this.props.validateAddress(),this.props.validatePhoneNumber(),this.props.validateEmail())}},{key:"render",value:function(){var e=this,t=!1,a=i.a.createElement("option",{disabled:!0},"ninjPost"),n=0;return this.props.cartElements.forEach(function(e){n+=e.price*e.amount}),n>200&&(a=i.a.createElement("option",null,"ninjPost")),this.props.nameTouched&&this.props.addressTouched&&this.props.emailTouched&&this.props.nameValid&&this.props.addressValid&&this.props.phoneValid&&this.props.emailValid||(t=!0),i.a.createElement("div",{id:"shipping"},i.a.createElement("form",{id:"shipping-form"},i.a.createElement(F,{labelText:"Name*",inputName:"name",onInputChange:this.setName,onInputBlur:this.props.validateName,valid:!this.props.nameTouched||this.props.nameValid,errorText:"Invalid name"}),i.a.createElement(F,{labelText:"Address*",inputName:"address",onInputChange:this.setAddress,onInputBlur:this.props.validateAddress,valid:!this.props.addressTouched||this.props.addressValid,errorText:"Invalid address"}),i.a.createElement(F,{labelText:"Phone",inputName:"phone",onInputChange:this.setPhoneNumber,onInputBlur:this.props.validatePhoneNumber,valid:this.props.phoneValid,errorText:"Invalid phone number"}),i.a.createElement(F,{labelText:"E-mail*",inputName:"email",onInputChange:this.setEmail,onInputBlur:this.props.validateEmail,valid:!this.props.emailTouched||this.props.emailValid,errorText:"Invalid e-mail"}),i.a.createElement(B,{labelText:"Shipping options",onSelectChange:this.changeShippingPrice,freeShippingOption:a,shippingPrice:this.props.shippingPrice}),i.a.createElement("div",{id:"form-button-wrapper"},i.a.createElement(S,{onClick:function(a){return e.handlePayClick(a,t)},text:"pay",disabled:t}))))}}]),t}(n.Component),W=Object(E.b)(function(e){return{nameValid:e.shipping.nameValid,addressValid:e.shipping.addressValid,phoneValid:e.shipping.phoneValid,emailValid:e.shipping.emailValid,nameTouched:e.shipping.nameTouched,addressTouched:e.shipping.addressTouched,emailTouched:e.shipping.emailTouched,shippingPrice:e.shipping.shippingPrice,cartElements:e.cart.cartElements}},function(e){var t=Object(H.b)({validateAddress:q,validateEmail:J,validateName:U,validatePhoneNumber:G},e);return Object(x.a)({},t,{dispatch:e})})(z),Z=a(116);function K(){return i.a.createElement("div",null,i.a.createElement(Z.a,{to:"/cart"}))}var Q=a(34),X=a.n(Q);a(100),a(102),a(104),a(106),a(108),a(110),a(112);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(35),ee=a(36),te=a(16),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartElements:[],fetching:!1,fetched:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CART_ELEMENTS":return Object(x.a)({},e,{fetching:!0});case"FETCH_CART_ELEMENTS_FULFILLED":return Object(x.a)({},e,{fetching:!1,fetched:!0,cartElements:t.payload});case"FETCH_CART_ELEMENTS_REJECTED":return Object(x.a)({},e,{fetching:!1,error:t.payload});case"INCREMENT_AMOUNT":var a=t.payload.id,n=Object(te.a)(e.cartElements),i=n.findIndex(function(e){return e.id===a});return n[i].amount<100&&n[i].amount++,100===n[i].amount&&(n[i].isPlusDisabled=!0),n[i].isMinusDisabled&&(n[i].isMinusDisabled=!1),Object(x.a)({},e,{cartElements:n});case"DECREMENT_AMOUNT":var r=t.payload.id,c=Object(te.a)(e.cartElements),l=c.findIndex(function(e){return e.id===r});return c[l].amount>0?c[l].amount--:0===c[l].amount&&(c[l].isMinusDisabled=!0),c[l].isPlusDisabled&&(c[l].isPlusDisabled=!1),Object(x.a)({},e,{cartElements:c});case"REMOVE_CART_ELEMENT":return Object(x.a)({},e,{cartElements:e.cartElements.filter(function(e){return e.id!==t.payload.id})});default:return e}},ne=function(){function e(t,a,n,i){Object(d.a)(this,e),this.value=t,this.validated=!0,this.validations=Object(te.a)(a),this.minLength=n||0,this.maxLength=i||9999}return Object(u.a)(e,[{key:"validate",value:function(){var e=this;return!(!this.validations.find(function(e){return"optional"===e})||""!==this.value)||(this.validations.map(function(t){var a,n,i,r,c;return"email"===t?e.validated=(c=e.value,!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(c).toLowerCase())):"length"===t?e.validated=(n=e.value,i=e.minLength,r=e.maxLength,n.length>=i&&n.length<=r):"phoneNumber"===t?e.validated=(a=e.value,!!/^\d{9}$/.test(String(a))):"isRequired"===t&&(e.validated=function(e){return e.length>0}(e.value)),t}),this.validated)}}]),e}(),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"",address:"",phone:"",email:"",nameValid:!1,addressValid:!1,phoneValid:!0,emailValid:!1,nameTouched:!1,addressTouched:!1,phoneTouched:!1,emailTouched:!1,shippingPrice:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NAME":return Object(x.a)({},e,{name:t.payload.name});case"VALIDATE_NAME":var a=new ne(e.name,["isRequired","length"],3);return Object(x.a)({},e,{nameValid:a.validate(),nameTouched:!0});case"SET_ADDRESS":return Object(x.a)({},e,{address:t.payload.address});case"VALIDATE_ADDRESS":var n=new ne(e.address,["isRequired"]);return Object(x.a)({},e,{addressValid:n.validate(),addressTouched:!0});case"SET_PHONE":return Object(x.a)({},e,{phone:t.payload.phone});case"VALIDATE_PHONE":var i=new ne(e.phone,["optional","phoneNumber"]);return Object(x.a)({},e,{phoneValid:i.validate(),phoneTouched:!0});case"SET_EMAIL":return Object(x.a)({},e,{email:t.payload.email});case"VALIDATE_EMAIL":var r=new ne(e.email,["isRequired","email"]);return Object(x.a)({},e,{emailValid:r.validate(),emailTouched:!0});case"CHANGE_SHIPPING_PRICE":var c="FREE SHIPPING";return"D7L"===t.payload.carrier?c="Additional 15.99 PLN":"7post"===t.payload.carrier&&(c="Additional 7.99 PLN"),Object(x.a)({},e,{shippingPrice:c});default:return e}},re=Object(H.c)({cart:ae,shipping:ie}),ce=Object(H.a)(ee.a,Object(Y.createLogger)()),le=Object(H.d)(re,ce);c.a.render(i.a.createElement(E.a,{store:le},i.a.createElement(function(){return i.a.createElement(l.a,null,i.a.createElement("div",{id:"main-wrapper"},i.a.createElement("header",{className:"header"},i.a.createElement("img",{id:"logo",alt:"Logo",src:X.a})),i.a.createElement("h1",null,"Front-end Developer"),i.a.createElement("div",{id:"content-wrapper"},i.a.createElement("div",{id:"content-container"},i.a.createElement(s.a,null,i.a.createElement(o.a,{path:"/",exact:!0,component:K}),i.a.createElement(o.a,{path:"/cart",component:w}),i.a.createElement(o.a,{path:"/shipping",component:W}))),i.a.createElement("div",{id:"red-placeholder"}))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t,a){e.exports=a.p+"static/media/logo.e4c0b2ec.jpg"},37:function(e,t,a){e.exports=a(114)},42:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){}},[[37,2,1]]]);
//# sourceMappingURL=main.baa26c4f.chunk.js.map