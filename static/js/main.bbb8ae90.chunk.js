(this.webpackJsonptodotodo=this.webpackJsonptodotodo||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(2),d=c(0),a=c.n(d),o=c(16),i=c.n(o),s=c(4),r=c(11),j=c(5),l="TOGGLE_ADD_MODE",u="ADD_TASK",b="TOGGLE_EDIT_MODE",O="EDIT_TASK",h="TOGGLE_DELETE_MODE",x="DELETE_TASK",f="GET_DATE",p=function(){return{type:l}},m=0,v=function(e,t){return{type:u,payload:{id:m++,text:e,date:t}}},M=function(e){return{type:b,index:e}},D=function(e,t){return{type:O,text:e,index:t}},g=function(){return{type:h}},N=function(e){return{type:x,id:e}},k=c(27),E=(c(37),c(12)),y=c.n(E);var L=function(){var e=Object(j.b)(),t=Object(d.useState)(new Date),c=Object(r.a)(t,2),a=c[0],o=c[1];return Object(n.jsx)(k.a,{onChange:o,value:a,locale:"en-us",onClickDay:function(t){var c=y()(t).format("MMM Do"),n=y()(t).format("dddd");e(function(e,t){return{type:f,date:e,day:t}}(c,n))}})};var T=function(e){var t=e.todo,c=e.index,a=e.deleteMode,o=e.changeAddMode,i=e.changeEditMode,s=e.onClickDelete,j=Object(d.useState)(!1),l=Object(r.a)(j,2),u=l[0],b=l[1],O=function(e){a?s(e):b((function(e){return!e}))};return Object(n.jsx)("div",{className:"task",children:Object(n.jsxs)("li",{className:"task-list",onClick:function(){return O(t.id)},children:[a?Object(n.jsx)("i",{className:"icon-cancel",onClick:function(){return O(t.id)}}):Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{className:"check-box",type:"checkbox",name:"check",checked:u,value:t.id,onChange:function(e){b(e.target.checked)}}),Object(n.jsx)("i",{className:"icon-check"})]}),Object(n.jsx)("span",{className:["todo-text",u&&"done"].join(" "),children:t.text}),Object(n.jsx)("span",{className:"date",children:t.date}),Object(n.jsx)("i",{className:"icon-edit",onClick:function(e){return function(e,t){e.stopPropagation(),i(t),o()}(e,c)}})]})})};var C=function(e){var t=e.todoList,c=e.deleteMode,d=e.changeAddMode,a=e.changeEditMode,o=e.onClickDelete;return Object(n.jsx)("div",{className:"to-do",children:Object(n.jsx)("ul",{children:t.map((function(e,t){return Object(n.jsx)(T,{todo:e,index:t,deleteMode:c,changeAddMode:d,changeEditMode:a,onClickDelete:o},e.id)}))})})};var A=function(){return Object(n.jsxs)("div",{className:"no-task",children:[Object(n.jsx)("i",{className:"icon-smile"}),Object(n.jsx)("span",{children:"\ud560 \uc77c \uc5c6\uc74c"})]})};var S=function(){var e=Object(j.b)(),t=(Object(j.c)((function(e){return e.addInput})),Object(j.c)((function(e){return e.todoList}))),c=Object(j.c)((function(e){return e.delete}));return Object(j.c)((function(e){return e.edit})),Object(n.jsx)("div",{className:"TodoList",children:Object(n.jsx)("div",{className:"template",children:Object(n.jsx)("div",{className:"content",children:t&&t.length>0?Object(n.jsx)(C,{todoList:t,deleteMode:c,changeAddMode:function(){return e(p())},changeEditMode:function(t){return e(M(t))},onClickDelete:function(t){return e(N(t))}}):Object(n.jsx)(A,{})})})})};var _=Object(s.f)((function(e){var t=Object(j.c)((function(e){return e.selected})),c=Object(j.c)((function(e){return e.addInput})),a=Object(d.useState)(!1),o=Object(r.a)(a,2),i=o[0],s=o[1];return Object(d.useEffect)((function(){t&&c?s(!0):e.history.push("/")}),[i,t,c]),console.log(i),Object(n.jsx)("div",{children:i&&t?Object(n.jsxs)("div",{className:"selected",children:[Object(n.jsxs)("span",{className:"selected-day",children:[t.day.toUpperCase(),","]}),Object(n.jsx)("span",{className:"selected-date",children:t.date})]}):Object(n.jsx)("h1",{children:"TODO TODO"})})})),I=c(13);var Y=function(e){var t=e.todoList,c=e.deleteMode,d=e.changeAddMode,a=e.changeDeleteMode;return e.onClickDelete,Object(n.jsxs)("div",{className:"add-todo",children:[Object(n.jsxs)("div",{className:"task",children:[Object(n.jsxs)("span",{style:{fontWeight:"bold"},children:[t.length," "]}),Object(n.jsx)("span",{children:"TASKS"}),t.length>0&&Object(n.jsx)("i",{className:"icon-menu"})]}),Object(n.jsxs)("div",{className:"delete",children:[t&&t.length>0&&Object(n.jsx)("i",{className:"icon-delete",onClick:a}),c&&Object(n.jsx)("div",{className:"delete-all",children:"\uc804\uccb4 \uc0ad\uc81c"})]}),Object(n.jsx)(I.b,{to:"/todolist",children:Object(n.jsxs)("div",{className:"add-new",onClick:function(){d(),c&&a()},children:["ADDNEW",Object(n.jsx)("i",{className:"icon-add"})]})})]})},G=y()().format("YYYY.MM.DD");var w=function(e){var t=e.todoList,c=e.edit,a=e.changeAddMode,o=e.onClickAddTask,i=(e.changeEditMode,e.onClickEditTask),s=Object(d.useState)(c&&c.editMode?t[c.index].text:""),j=Object(r.a)(s,2),l=j[0],u=j[1];return Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),""==l?alert("\ud560\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"):c&&c.editMode?(a(),i(l,c.index)):(o(l,G),a())},children:Object(n.jsxs)("div",{className:"form-wrap",children:[Object(n.jsx)("input",{type:"text",className:"todo-input",value:l,onChange:function(e){u(e.target.value)},placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",maxLength:"50"}),Object(n.jsx)("button",{className:"add-btn",type:"submit",children:c&&c.editMode?"OK":"ADD"})]})})};y()().format("YYYY.MM.DD");var K=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.addInput})),c=Object(j.c)((function(e){return e.todoList})),d=Object(j.c)((function(e){return e.edit})),a=Object(j.c)((function(e){return e.delete})),o=(Object(j.c)((function(e){return e.date})),function(){return e(p())});return Object(n.jsx)("div",{className:"footer",children:t?Object(n.jsx)(w,{todoList:c,edit:d,changeAddMode:o,onClickAddTask:function(t,c){return e(v(t,c))},changeEditMode:function(t){return e(M(t))},onClickEditTask:function(t,c){return e(D(t,c))}}):Object(n.jsx)(Y,{todoList:c,deleteMode:a,changeAddMode:o,changeDeleteMode:function(){return e(g())},onClickDelete:function(t){return e(N(t))}})})};c(40);var W=function(){return Object(n.jsxs)("div",{className:"app-container",children:[Object(n.jsx)("div",{className:"app-header",children:Object(n.jsx)(_,{})}),Object(n.jsx)("div",{className:"app-main-content",children:Object(n.jsxs)(s.c,{children:[Object(n.jsx)(s.a,{exact:!0,path:"/",component:L}),Object(n.jsx)(s.a,{exact:!0,path:"/todolist",component:S})]})}),Object(n.jsx)("div",{className:"app-footer",children:Object(n.jsx)(K,{})})]})},J=(c(41),c(14)),B=c(6),P={addInput:!1,todoList:[],delete:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(B.a)(Object(B.a)({},e),{},{addInput:!e.addInput});case u:return Object(B.a)(Object(B.a)({},e),{},{todoList:e.todoList.concat(t.payload)});case b:return Object(B.a)(Object(B.a)({},e),{},{edit:{editMode:!e.editMode,index:t.index}});case O:return e.todoList[t.index].text=t.text,Object(B.a)(Object(B.a)({},e),{},{edit:{editMode:!1}});case h:return Object(B.a)(Object(B.a)({},e),{},{delete:!e.delete});case x:var c=e.todoList.filter((function(e){return e.id!==t.id}));return Object(B.a)(Object(B.a)({},e),{},{todoList:c});case f:return Object(B.a)(Object(B.a)({},e),{},{selected:{date:t.date,day:t.day}});default:return e}},q=c(26),z=Object(J.createStore)(U,Object(q.composeWithDevTools)());console.log(z.getState()),i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(j.a,{store:z,children:Object(n.jsx)(I.a,{children:Object(n.jsx)(W,{})})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.bbb8ae90.chunk.js.map