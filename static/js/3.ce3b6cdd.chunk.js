(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[3],{100:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__29qNK"}},107:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),o=a(14),i=a(13),c=a(15),l=a(0),s=a.n(l),u=a(17),d=a(98),p=a(89),m=a(99),h=a.n(m),g=function(e){return s.a.createElement("div",{className:h.a.CheckoutSummary},s.a.createElement("h1",null,"We hope it tastes good"),s.a.createElement("div",{style:{width:"100%",margin:"auto"}},s.a.createElement(d.a,{ingredients:e.ingredients})),s.a.createElement(p.a,{btnType:"Danger",clicked:e.checkoutCancelled},"Cancel"),s.a.createElement(p.a,{btnType:"Success",clicked:e.checkoutContinued},"Continue"))},v=a(3),f=a(100),b=a.n(f),_=a(29),y=a(87),C=a(96),E=a(16),k=a(24),j=a(92),I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ings,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.inputChangedHandler=function(e,t){var n=Object(v.a)({},a.state.orderForm),r=Object(v.a)({},n[t]);r.value=e.target.value,r.valid=a.checkValidity(r.value,r.validation),r.touched=!0,n[t]=r;var o=!0;for(var i in n)o=n[i].valid&&o;a.setState({orderForm:n,formIsValid:o})},a.state={errorMessage:null,orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},validation:{required:!0},valid:!1,value:"",touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},validation:{required:!0},valid:!1,value:"",touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},validation:{required:!0,minLength:4,maxLength:6},valid:!1,value:"",touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},validation:{required:!0},valid:!1,value:"",touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},validation:{required:!0,isEmail:!0},valid:!1,value:"",touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0,validation:{}}},formIsValid:!1},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"checkValidity",value:function(e,t){var a=!0;if(t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),t.isEmail){a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())&&a}return a}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=s.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return s.a.createElement(C.a,{key:t.id,touched:t.config.touched,shouldValidate:t.config.validation,invalid:!t.config.valid,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(a){return e.inputChangedHandler(a,t.id)}})})),s.a.createElement(p.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(n=s.a.createElement(y.a,null)),s.a.createElement("div",{className:b.a.ContactData},s.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),t}(l.Component),O=Object(E.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(k.g(t,a))}}}))(Object(j.a)(I,_.a)),B=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=s.a.createElement(u.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?s.a.createElement(u.a,{to:"/"}):null;e=s.a.createElement("div",null,t,s.a.createElement(g,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),s.a.createElement(u.b,{path:this.props.match.path+"/contact-data",component:O}))}return e}}]),t}(l.Component);t.default=Object(E.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(B)},87:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(88),i=a.n(o);t.a=function(){return r.a.createElement("div",{className:i.a.Loader},"Loading..")}},88:function(e,t,a){e.exports={Loader:"Spinner_Loader__3lUvp",load2:"Spinner_load2__2Ao1I"}},89:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(91),i=a.n(o);t.a=function(e){return r.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},90:function(e,t,a){"use strict";var n=a(11),r=a(12),o=a(14),i=a(13),c=a(15),l=a(0),s=a.n(l),u=a(93),d=a.n(u),p=a(23),m=a(35),h=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(m.a,{show:this.props.show,clicked:this.props.modalClosed}),s.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(s.a.Component);t.a=h},91:function(e,t,a){e.exports={Button:"Button_Button__3bMLs",Success:"Button_Success__274aK",Danger:"Button_Danger__2LNAf"}},92:function(e,t,a){"use strict";var n=a(11),r=a(12),o=a(14),i=a(13),c=a(15),l=a(0),s=a.n(l),u=a(90),d=a(23);t.a=function(e,t){return function(a){function l(e){var a;return Object(n.a)(this,l),(a=Object(o.a)(this,Object(i.a)(l).call(this,e))).errorConfirmedHandler=function(){a.setState({error:null})},a.state={error:null},a.requestInterceptor=t.interceptors.request.use((function(e){return a.setState({error:null}),e})),a.responseInterceptor=t.interceptors.response.use((function(e){return e}),(function(e){a.setState({error:e})})),a}return Object(c.a)(l,a),Object(r.a)(l,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.requestInterceptor),t.interceptors.response.eject(this.responseInterceptor)}},{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(u.a,{show:null!==this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),s.a.createElement(e,this.props))}}]),l}(l.Component)}},93:function(e,t,a){e.exports={Modal:"Modal_Modal__VYISq"}},94:function(e,t,a){e.exports={Burger:"Burger_Burger__2YaBr"}},95:function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__IliSG",BreadTop:"BurgerIngredient_BreadTop__1zCto",Seeds1:"BurgerIngredient_Seeds1__1FZML",Seeds2:"BurgerIngredient_Seeds2__2LMlb",Meat:"BurgerIngredient_Meat__2qZ7s",Cheese:"BurgerIngredient_Cheese__PR_g0",Salad:"BurgerIngredient_Salad__8LqPb",Bacon:"BurgerIngredient_Bacon__sCM6W"}},96:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(97),i=a.n(o);t.a=function(e){var t=null,a=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(i.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{onChange:e.changed,className:a.join(" "),value:e.value},e.elementConfig.options.map((function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({onChange:e.changed,className:a.join(" ")},e.elementConfig,{value:e.value}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label},e.label),t)}},97:function(e,t,a){e.exports={Input:"Input_Input__3y9dP",Label:"Input_Label__1mc4o",InputElement:"Input_InputElement__L7XII",Invalid:"Input_Invalid__1RGfb",ValidationError:"Input_ValidationError__1sFzt"}},98:function(e,t,a){"use strict";var n=a(36),r=a(0),o=a.n(r),i=a(94),c=a.n(i),l=a(11),s=a(12),u=a(14),d=a(13),p=a(15),m=a(95),h=a.n(m),g=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:h.a.BreadBottom}," ");break;case"bread-top":e=o.a.createElement("div",{className:h.a.BreadTop},o.a.createElement("div",{className:h.a.Seeds1}),o.a.createElement("div",{className:h.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:h.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:h.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:h.a.Salad});break;case"bacon":e=o.a.createElement("div",{className:h.a.Bacon});break;default:e=null}return e}}]),t}(r.Component),v=a(17);t.a=Object(v.g)((function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(n.a)(Array(e.ingredients[t])).map((function(e,a){return o.a.createElement(g,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(g,{type:"bread-top"}),t,o.a.createElement(g,{type:"bread-bottom"}))}))},99:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__1oPzm"}}}]);
//# sourceMappingURL=3.ce3b6cdd.chunk.js.map