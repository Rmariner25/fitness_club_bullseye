(this["webpackJsonpembed-pdf-from-drive"]=this["webpackJsonpembed-pdf-from-drive"]||[]).push([[0],{15:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(7),i=n.n(s),o=(n(15),n(10)),a=n(3),l=n(8),j=n(9),b=n(0),d=function(e){var t=e.books,n=e.deleteBook;return t.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.isbn}),Object(b.jsx)("td",{children:e.title}),Object(b.jsx)("td",{children:e.author}),Object(b.jsx)("td",{className:"delete-btn",onClick:function(){return n(e.isbn)},children:Object(b.jsx)(l.Icon,{icon:j.trash})})]},e.isbn)}))},u=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("books");return e?JSON.parse(e):[]}()),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(a.a)(s,2),l=i[0],j=i[1],u=Object(c.useState)(""),h=Object(a.a)(u,2),O=h[0],x=h[1],m=Object(c.useState)(""),f=Object(a.a)(m,2),v=f[0],p=f[1];return Object(c.useEffect)((function(){localStorage.setItem("books",JSON.stringify(n))}),[n]),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("h1",{style:{color:"white"},children:"BookList Maintenance Form"}),Object(b.jsx)("p",{style:{color:"DeepSkyBlue"},children:"Add and view your books using local storage"}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("div",{className:"form-container",children:Object(b.jsxs)("form",{autoComplete:"off",className:"form-group",onSubmit:function(e){e.preventDefault();var t={title:l,author:O,isbn:v};r([].concat(Object(o.a)(n),[t])),j(""),x(""),p("")},children:[Object(b.jsx)("label",{children:"Title"}),Object(b.jsx)("input",{type:"text",className:"form-control",required:!0,onChange:function(e){return j(e.target.value)},value:l}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Author"}),Object(b.jsx)("input",{type:"text",className:"form-control",required:!0,onChange:function(e){return x(e.target.value)},value:O}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"ISBN#"}),Object(b.jsx)("input",{type:"text",className:"form-control",required:!0,onChange:function(e){return p(e.target.value)},value:v}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success btn-md",children:"ADD"})]})}),Object(b.jsxs)("div",{className:"view-container",children:[n.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ISBN#"}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:"Author"}),Object(b.jsx)("th",{children:"Delete"})]})}),Object(b.jsx)("tbody",{children:Object(b.jsx)(d,{books:n,deleteBook:function(e){var t=n.filter((function(t,n){return t.isbn!==e}));r(t)}})})]})}),Object(b.jsx)("button",{className:"btn btn-danger btn-md",onClick:function(){return r([])},children:"Remove All"})]}),n.length<1&&Object(b.jsx)("div",{children:"No books are added yet"})]})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(29);i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),h()}},[[30,1,2]]]);
//# sourceMappingURL=main.148ccbd3.chunk.js.map