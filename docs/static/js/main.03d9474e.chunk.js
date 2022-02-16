(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),r=c(4),a=c.n(r),i=(c(14),c(6)),s=c(2);var l=c(1),d=o.a.createContext();function u(e){var t=function(e,t){var c=Object(n.useState)(t),o=Object(s.a)(c,2),r=o[0],a=o[1],i=Object(n.useState)(!0),l=Object(s.a)(i,2),d=l[0],u=l[1],j=Object(n.useState)(""),b=Object(s.a)(j,2),O=b[0],x=b[1];return Object(n.useEffect)((function(){setTimeout((function(){try{var c,n=localStorage.getItem(e);n?c=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),c=t),a(c),u(!1)}catch(o){x(o)}}),1e3)}),[t,e]),{item:r,loading:d,error:O,saveItem:function(t){try{var c=JSON.stringify(t);localStorage.setItem(e,c),a(t)}catch(n){x(n)}}}}("TODOS_V1",[]),c=t.item,r=t.saveItem,a=t.loading,u=t.error,j=o.a.useState(""),b=Object(s.a)(j,2),O=b[0],x=b[1],h=o.a.useState(!1),m=Object(s.a)(h,2),f=m[0],p=m[1],v=c.filter((function(e){return!!e.completed})).length,g=c.length,T=[];T=!O.length>=1?c:c.filter((function(e){var t=e.text.toLowerCase(),c=O.toLowerCase();return t.includes(c)}));return Object(l.jsx)(d.Provider,{value:{loading:a,error:u,totalTodos:g,completedTodos:v,searchValue:O,setSearchValue:x,searchedTodos:T,completeTodo:function(e,t){var n=c.findIndex((function(c){return c.id===e&&c.text===t})),o=Object(i.a)(c);o[n].completed=!0,r(o)},addTodo:function(e){var t=Object(i.a)(c);t.push({id:t.length+1,completed:!1,text:e}),r(t)},deleteTodo:function(e,t){var n=c.findIndex((function(c){return c.id===e&&c.text===t})),o=Object(i.a)(c);o.splice(n,1),r(o)},openModal:f,setOpenModal:p},children:e.children})}c(16);var j=function(){var e=Object(n.useContext)(d),t=e.totalTodos,c=e.completedTodos;return Object(l.jsx)("div",{children:Object(l.jsxs)("h1",{className:"TodoCounter",children:["Has completado ",c," de ",t," tareas"]})})};c(17);var b=function(){var e=Object(n.useContext)(d),t=e.searchValue,c=e.setSearchValue;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"TodoSearch",onChange:function(e){return function(e){c(e.target.value)}(e)},placeholder:"Cebolla",value:t})})};c(18);var O=function(e){return Object(l.jsx)("section",{children:e.children})};c(19);var x=function(e){return Object(l.jsxs)("li",{className:"TodoItem",children:[Object(l.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u2714\ufe0f"}),Object(l.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(l.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"\u274c"})]})};c(20);var h=function(e){var t=e.setOpenModal;return Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"CreateTodoButton",onClick:function(){return t((function(e){return!e}))},children:Object(l.jsx)("span",{children:"\u2795"})})})};c(21);var m=function(e){var t=e.children;return a.a.createPortal(Object(l.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))};c(22);var f=function(e){var t=e.setOpenModal,c=Object(n.useState)(""),o=Object(s.a)(c,2),r=o[0],a=o[1],i=Object(n.useContext)(d).addTodo;return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(r),a("")},children:[Object(l.jsx)("label",{children:"Escribe tu nuevo To Do"}),Object(l.jsx)("textarea",{value:r,onChange:function(e){a(e.target.value)},placeholder:"Escribe una nueva tarea"}),Object(l.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(l.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:function(){t((function(e){return!e}))},children:"Cancelar"}),Object(l.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})},p=c(8),v=c(9),g=function(e){return Object(l.jsxs)(v.a,Object(p.a)(Object(p.a)({speed:2,width:"100%",height:"100%",viewBox:"0 0 400 150 ",backgroundColor:"#707070",foregroundColor:"#9670db"},e),{},{children:[Object(l.jsx)("circle",{cx:"10",cy:"20",r:"8"}),Object(l.jsx)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"90%",height:"10"}),Object(l.jsx)("circle",{cx:"10",cy:"50",r:"8"}),Object(l.jsx)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"90%",height:"10"}),Object(l.jsx)("circle",{cx:"10",cy:"80",r:"8"}),Object(l.jsx)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"90%",height:"10"}),Object(l.jsx)("circle",{cx:"10",cy:"110",r:"8"}),Object(l.jsx)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"90%",height:"10"})]}))};g.metadata={name:"Abraham Calsin",github:"abrahamcalsin",description:"Loading a list of tasks.",filename:"TaskList"};var T=g;function C(){var e=Object(n.useContext)(d),t=e.error,c=e.loading,r=e.searchedTodos,a=e.completeTodo,i=e.deleteTodo,s=e.openModal,u=e.setOpenModal;return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(b,{}),Object(l.jsxs)(O,{children:[t&&Object(l.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."}),c&&Object(l.jsx)(T,{}),!c&&!(null===r||void 0===r?void 0:r.length)&&Object(l.jsx)("p",{children:"\xa1Crea tu primer TODO!"}),null===r||void 0===r?void 0:r.map((function(e){return Object(l.jsx)(x,{text:e.text,completed:e.completed,onComplete:function(){return a(e.id,e.text)},onDelete:function(){return i(e.id,e.text)}},e.text)}))]}),!!s&&Object(l.jsx)(m,{children:Object(l.jsx)(f,{setOpenModal:u})}),Object(l.jsx)(h,{setOpenModal:u})]})}var y=function(){return Object(l.jsx)(u,{children:Object(l.jsx)(C,{})})};a.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.03d9474e.chunk.js.map