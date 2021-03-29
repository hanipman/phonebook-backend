(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{23:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t(17),o=t.n(c),u=(t(23),t(6)),a=t(18),i=t(3),l=t(5),s=t.n(l),d="/api/persons",f={getAll:function(){return s.a.get(d).then((function(e){return e.data}))},create:function(e){return s.a.post(d,e).then((function(e){return e.data}))},update:function(e,n){return s.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},deletePerson:function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))}},b=t(0),h=function(e){var n=e.filter,t=e.handleFilter;return Object(b.jsxs)("form",{children:["filter shown with",Object(b.jsx)("input",{value:n,onChange:t})]})},j=function(e){var n=e.handleAdd,t=e.handleNameChange,r=e.handleNumberChange,c=e.name,o=e.number;return Object(b.jsxs)("form",{onSubmit:n,children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:c,onChange:t})]}),Object(b.jsxs)("div",{children:["number: ",Object(b.jsx)("input",{value:o,onChange:r})]}),Object(b.jsx)("button",{type:"submit",children:"add"})]})},m=function(e){var n=e.persons,t=e.filter,r=e.handleDelete;return Object(b.jsx)("ul",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e,n){return Object(b.jsx)("div",{children:Object(b.jsxs)("li",{children:[" ",e.name," ",e.number," ",Object(b.jsx)("button",{onClick:function(n){return r(n,e.id,e.name)},children:"Delete"})]},n)},n)}))})},O=function(e){var n=e.notif,t=e.error;return null===n?null:Object(b.jsx)("div",{className:t?"error":"notif",children:n})},p=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)({name:"",number:""}),l=Object(i.a)(o,2),s=l[0],d=l[1],p=Object(r.useState)(""),v=Object(i.a)(p,2),x=v[0],g=v[1],C=Object(r.useState)(null),w=Object(i.a)(C,2),k=w[0],D=w[1],T=Object(r.useState)(!1),N=Object(i.a)(T,2),S=N[0],y=N[1],A=function(){f.getAll().then((function(e){return c(e)})).catch((function(e){e.response?D("Failed to get phonebook"):D("Could not connect to server."),y(!0),setTimeout((function(){D(null),y(!1)}))}))};Object(r.useEffect)((function(){A()}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(O,{notif:k,error:S}),Object(b.jsx)(h,{filter:x,handleFilter:function(e){g(e.target.value)}}),Object(b.jsx)("h2",{children:"add a new"}),Object(b.jsx)(j,{handleAdd:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===s.name}));n.length>0?window.confirm("".concat(s.name," is already added to phonebook, replace the old number with a new one?"))&&f.update(n[0].id,s).then((function(e){var r=Object(a.a)(t),o=r.findIndex((function(e){return e.id===n[0].id}));r[o].number=s.number,c(r),D("Updated ".concat(s.name)),setTimeout((function(){D(null)}),5e3)})).catch((function(e){A(),e.response?(D(e.response.data.error),c(t.filter((function(e){return e.name!==s.name})))):D("Could not connect to server."),y(!0),setTimeout((function(){D(null),y(!1)}),5e3)})):f.create(s).then((function(e){c(t.concat({name:e.name,number:e.number,id:e.id})),D("Created entry for ".concat(e.name)),setTimeout((function(){D(null)}),5e3)})).catch((function(e){A(),e.response?D(e.response.data.error):D("Could not connect to server."),y(!0),setTimeout((function(){D(null),y(!1)}),5e3)}))},handleNameChange:function(e){d(Object(u.a)(Object(u.a)({},s),{},{name:e.target.value}))},handleNumberChange:function(e){d(Object(u.a)(Object(u.a)({},s),{},{number:e.target.value}))},name:s.name,number:s.number}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(m,{persons:t,filter:x,handleDelete:function(e,n,r){e.preventDefault(),window.confirm("Delete ".concat(r,"?"))&&f.deletePerson(n).then((function(){c(t.filter((function(e){return e.id!==n}))),D("Deleted ".concat(r)),setTimeout((function(){D(null)}),5e3)})).catch((function(e){A(),e.response?(D("Information of ".concat(r," has already been removed from server")),c(t.filter((function(e){return e.name!==r})))):D("Could not connect to server."),y(!0),setTimeout((function(){D(null),y(!1)}),5e3)}))}})]})};o.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a96f1b9a.chunk.js.map