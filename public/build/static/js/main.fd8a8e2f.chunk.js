(this["webpackJsonpcode-jar"]=this["webpackJsonpcode-jar"]||[]).push([[0],{233:function(e,n,t){},241:function(e,n,t){e.exports=t.p+"static/media/logo_transparent_hori.b395bcdd.png"},244:function(e,n,t){e.exports=t.p+"static/media/logo_transparent.a949cc59.png"},246:function(e,n,t){e.exports=t.p+"static/media/logo_transparent_small.d37c4c7e.png"},247:function(e,n,t){e.exports=t(411)},252:function(e,n,t){},257:function(e,n,t){},258:function(e,n,t){},281:function(e,n,t){},282:function(e,n,t){},382:function(e,n,t){},383:function(e,n,t){},384:function(e,n,t){},385:function(e,n,t){},390:function(e,n,t){},391:function(e,n,t){},392:function(e,n,t){},393:function(e,n,t){},403:function(e,n,t){},404:function(e,n,t){},405:function(e,n,t){},410:function(e,n,t){},411:function(e,n,t){"use strict";t.r(n);var a=t(8),r=t.n(a),c=t(179),i=t.n(c),o=(t(252),t(180)),l=t(81),s=t(55),u=(t(257),t(258),t(82)),d=Object(a.createContext)([!1,function(){}]);function m(e){var n=Object(a.useContext)(d),t=Object(u.a)(n,2),c=(t[0],t[1]);return r.a.createElement("li",{className:"WindowBarListItem"},r.a.createElement("button",{className:"WindowBarListItemButton",onClick:function(){return c(!0)}},"Share"))}function f(e){return r.a.createElement("li",{className:"WindowBarListItem"},r.a.createElement("button",{className:"WindowBarListItemButton"},"New Workspace"))}function p(e){return r.a.createElement("div",{className:"WindowBarListContainer"},r.a.createElement("ul",{className:"WindowBarList"},r.a.createElement(f,null),r.a.createElement(m,null),r.a.createElement("li",{className:"WindowBarListItem"},r.a.createElement("button",{className:"WindowBarListItemButton"},"Download"))))}var v=t(239);function g(e){return r.a.createElement(v.a,{icon:e.icon,size:e.size?e.size:"sm",spin:e.spin})}var E=t(64);function b(e){return r.a.createElement("li",{className:"controlListItem",onClick:e.saveClickHandler},r.a.createElement("a",null,r.a.createElement(g,{icon:E.i,size:"lg"})))}var h=function(e){var n=0;if(0==e.length)return n;for(var t=0;t<e.length;t++){n=(n<<5)-n+e.charCodeAt(t),n&=n}return n},j=t(78),w=t(120),O=t.n(w),C=Object(j.b)("workspace/postContent",(function(e){var n=e.nanoId,t=e.content,a=e.workspaceId;return O.a.post("".concat("https://codejar-live.herokuapp.com/","ws/content"),{nanoid:n,content:t,workspaceid:a})})),k=function(){var e=Object(s.b)(),n=Object(s.c)((function(e){return e.files.currentFile})),t=Object(s.c)((function(e){return e.workspace.workspaceId}));return function(){n.id&&(h(n.content)!==n.savedHash&&e(C({nanoId:n.id,content:n.content,workspaceId:t})))}};function N(e){var n=k();return r.a.createElement(b,{saveClickHandler:function(e){e.preventDefault(),n()}})}var F=t(240),x=t.n(F);t(280);function S(e){return r.a.createElement("div",{className:"controls"},r.a.createElement("ul",{className:"controlsList"},r.a.createElement("li",{className:"controlListItem"},r.a.createElement(x.a,{defaultChecked:!0,icons:{checked:r.a.createElement(g,{icon:E.b,size:"xs"}),unchecked:r.a.createElement(g,{icon:E.b,size:"xs"})}})),r.a.createElement(N,null)))}function I(e){return r.a.createElement("div",{className:"windowbar"},r.a.createElement(p,null),r.a.createElement(S,null))}var y=t(71),L=Object(j.b)("files/fetchFiles",(function(e){return O.a.get("".concat("https://codejar-live.herokuapp.com/","ws/files"),{params:{wsid:e}})})),M=Object(j.b)("files/fetchContent",(function(e){return O.a.get("".concat("https://codejar-live.herokuapp.com/","ws/content"),{params:{nanoid:e}})})),B=Object(j.b)("workspace/postFile",(function(e){var n=e.nanoId,t=e.extention,a=e.name,r=e.workspaceId,c=e.content;return O.a.post("".concat("https://codejar-live.herokuapp.com/","ws/file"),{nanoid:n,name:a,extention:t,workspaceid:r,content:c})}));var A,W=function(e){return e.reduce((function(e,n){return e+"."+n}))},P=function(e){var n=e.name,t=e.extention,a=e.id,r=e.content;if(!t){var c=function(e){var n=e.split("."),t=n.length>1?n.pop():"";return{name:W(n),extention:t}}(n);n=c.name,t=c.extention}var i=new Date;return{id:a,name:n,extention:t,lang:function(e,n){var t={js:"javascript",css:"css",cs:"csharp",html:"html",json:"json",ini:"ini",ts:"typescript",php:"php",gitignore:"plaintext",py:"python",java:"java",md:"markdown",sql:"sql"},a={dockerfile:"dockerfile"};return t[n]?t[n]:a[e]?a[e]:"plaintext"}(n,t),content:r,timeCreated:i,lastUpdated:i,current:!1,saved:!1,syncing:!1,error:!1,savedHash:""}},R=Object(j.c)({name:"files",initialState:{allFiles:[],currentFile:{id:"",name:"",extention:"",lang:"",timeCreated:"",content:"",lastUpdated:"",current:!1,saved:!1,syncing:!1,error:!1,savedHash:""},loadingFilesStatus:"idle",error:null},reducers:{addFile:function(e,n){e.allFiles.map((function(e){return e.current=!1})),e.allFiles.unshift(n.payload)},changeCurrentFileContent:function(e,n){e.currentFile.content=n.payload.content,e.allFiles.map((function(t){return t.id===e.currentFile.id?t.content=n.payload.content:null}))},changeCurrentFile:function(e,n){e.allFiles.map((function(e){e.current=e.id===n.payload.id})),e.currentFile=e.allFiles.find((function(e){return e.id===n.payload.id}))}},extraReducers:(A={},Object(y.a)(A,L.pending,(function(e,n){e.loadingFilesStatus="pending"})),Object(y.a)(A,L.fulfilled,(function(e,n){e.loadingFilesStatus="fulfilled";var t=n.payload.data;e.allFiles=e.allFiles.concat(t.map((function(e){return P({name:e.name,extention:e.extention,id:e.nano_id})})))})),Object(y.a)(A,L.rejected,(function(e,n){e.loadingFilesStatus="failed",e.error=n.error})),Object(y.a)(A,M.pending,(function(e,n){e.allFiles.map((function(e){e.id===n.meta.arg&&(e.syncing=!0)}))})),Object(y.a)(A,M.fulfilled,(function(e,n){e.allFiles.map((function(e){e.id===n.meta.arg&&(e.syncing=!1,e.content=n.payload.data.content)}))})),Object(y.a)(A,M.rejected,(function(e,n){e.allFiles.map((function(e){e.id===n.meta.arg&&(e.syncing=!1,e.error=!0)}))})),Object(y.a)(A,C.pending,(function(e,n){e.allFiles.map((function(e){e.id===n.meta.arg.nanoId&&(e.syncing=!0)}))})),Object(y.a)(A,C.fulfilled,(function(e,n){var t=new Date,a=h(n.meta.arg.content);e.allFiles.map((function(e){e.id===n.meta.arg.nanoId&&(e.syncing=!1,e.lastUpdated=t,e.error=!1,e.saved=!0,e.savedHash=a)})),e.currentFile.savedHash=e.currentFile.id===n.meta.arg.nanoId&&a})),Object(y.a)(A,C.rejected,(function(e,n){e.allFiles.map((function(e){e.id===n.meta.arg.nanoId&&(e.syncing=!1,e.error=!0)}))})),Object(y.a)(A,B.pending,(function(e,n){e.allFiles.map((function(e){e.id===n.meta.arg.nanoId&&(e.syncing=!0)}))})),Object(y.a)(A,B.fulfilled,(function(e,n){var t=new Date;e.allFiles.map((function(e){e.id===n.meta.arg.nanoId&&(e.syncing=!1,e.lastUpdated=t,e.error=!1)}))})),Object(y.a)(A,B.rejected,(function(e,n){e.allFiles.map((function(e){e.id===n.meta.arg.nanoId&&(e.syncing=!1,e.error=!0)}))})),A)}),T=R.actions,D=T.addFile,H=T.changeCurrentFileContent,z=T.changeCurrentFile,_=R.reducer;function U(e){return r.a.createElement("a",{_id:e.file.id,className:"".concat(e.current," ").concat(e.save," ").concat(e.extention),onClick:e.menuItemClickHandler},r.a.createElement("div",{className:"MenuItemPanes"},r.a.createElement("div",{className:"MenuItemFilePane"},r.a.createElement(g,{icon:e.icon}),"\xa0\xa0\xa0",e.file.name,r.a.createElement("b",null,".",e.file.extention)),r.a.createElement("div",{className:"MenuItemIconPane"},e.syncing&&r.a.createElement(g,{icon:E.j,spin:!0}),e.error&&r.a.createElement(g,{icon:E.e}))))}var q=t(166);function J(e){var n=function(){var e=Object(s.b)();return function(n){e(M(n))}}(),t=Object(s.b)(),c=e.current?"current":"",i=e.saved?"save":"css",o=e.file.extention,l=function(e){var n={css:q.a,html:q.b,js:q.d,py:q.f,java:q.c,md:q.e,other:E.d};return n[e]?n[e]:n.other}(o);return Object(a.useEffect)((function(){n(e.file.id)}),[]),r.a.createElement(U,{file:e.file,error:e.file.error,syncing:e.file.syncing,current:c,save:i,extention:o,icon:l,menuItemClickHandler:function(n){var a=n.currentTarget.getAttribute("_id");!e.file.syncing&&t(z({id:a}))}})}var K=Object(a.createContext)([!1,function(){}]);function Z(e){return r.a.createElement("a",{href:"#",className:"addFile",onClick:function(n){return e.setIsOpen(!0)}}," +")}function $(e){var n=Object(a.useContext)(K),t=Object(u.a)(n,2),c=(t[0],t[1]);return r.a.createElement(Z,{setIsOpen:c})}t(281);function G(e){return r.a.createElement("div",{className:"MenuLoading"},r.a.createElement(g,{icon:E.a,spin:!0}))}var Q=t(241),V=t.n(Q);function X(e){return r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"MenuLogo"},r.a.createElement("img",{src:V.a,alt:"Logo"})),r.a.createElement("div",{className:"MenuFilesContainer"},e.loading&&r.a.createElement(G,null),e.allFiles.map((function(e){var n;return r.a.createElement(J,{current:e.current,saved:e.saved,file:(n={extention:e.extention,name:e.name,id:e.id,syncing:e.syncing},Object(y.a)(n,"id",e.id),Object(y.a)(n,"error",e.error),n)})})),r.a.createElement($,null)))}function Y(){var e=Object(s.c)((function(e){return e.files.allFiles})),n="pending"===Object(s.c)((function(e){return e.files.loadingFilesStatus})),t=function(){var e=Object(s.c)((function(e){return e.workspace.workspaceId})),n=Object(s.b)();return function(){n(L(e))}}();return Object(a.useEffect)((function(e){return t()}),[]),r.a.createElement(X,{allFiles:e,loading:n})}t(282);function ee(e){return r.a.createElement("div",{className:"SideBar"},r.a.createElement(Y,null))}var ne=t(242);function te(e){return r.a.createElement(ne.default,{width:e.width,height:e.height,language:e.lang,value:e.value,onChange:function(n){return e.onChange(n)},theme:"vs-dark"})}t(382);function ae(e){return r.a.createElement("div",{className:"code"},r.a.createElement(te,{width:"100%",height:"100%",lang:e.currentFile.lang||"javascript",value:e.currentFile.content||"",onChange:e.onChange}))}function re(e){var n=Object(s.b)(),t=Object(s.c)((function(e){return e.files.currentFile}));return r.a.createElement(ae,{currentFile:t,onChange:function(e){n(H({content:e}))}})}t(383),t(384);function ce(e){return r.a.createElement("div",{className:"RightSideBarDownload"},r.a.createElement(g,{size:"lg",icon:E.f}),r.a.createElement("p",{className:"RightSideBarDownloadText"},"Download Files"))}function ie(e){return r.a.createElement("div",Object.assign({className:"DragZone ".concat(e.isDraggedClass)},e),e.children,"pending"===e.status?r.a.createElement(g,{icon:E.j,spin:!0}):"error"===e.status?r.a.createElement(g,{icon:E.e}):null)}t(385);var oe=t(386),le=function(e){return oe(e)};function se(e){return/^[0-9a-zA-Z\.]*$/.test(e)}function ue(e){var n=Object(a.useState)(!1),t=Object(u.a)(n,2),c=t[0],i=t[1],o=Object(a.useState)("idle"),l=Object(u.a)(o,2),d=l[0],m=l[1],f=Object(s.b)(),p=Object(s.c)((function(e){return e.workspace.workspaceId})),v=c?"dragged":"";return r.a.createElement(ie,{onDragOver:function(e){e.preventDefault()},onDragEnter:function(e){e.preventDefault(),i(!0)},onDragLeave:function(e){e.preventDefault(),i(!1)},onDrop:function(e){e.preventDefault();var n=e.dataTransfer.files[0];n&&(!0===function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.maxSize?n.maxSize:16e3,a=n.allowedExtentions||[],r=n.preventedExtentions||[],c=le(e.name),i=se(c),o=e.size<=t,l=(!a.length||a.indexOf(e.type)>=0)&&(!r.length||r.indexOf(e.type)<0),s=[];return!!(i&&o&&l)||(!i&&s.push("name"),!o&&s.push("size"),!l&&s.push("extention"),s)}(n,{maxSize:16e3})?(m((function(){return"pending"})),function(e){return new Promise((function(n,t){var a=new FileReader;a.readAsText(e),console.log("File Reader : ",a),a.onerror=function(e){a.abort(),t(a.error)},a.onload=function(e){n(e.target.result)}}))}(n).then((function(e){var t=P({name:n.name,id:Object(j.d)(),content:e});f(D(t)),f(B({name:t.name,extention:t.extention,nanoId:t.id,workspaceId:p,content:t.content})),m((function(){return"idle"})),i(!1)})).catch(m((function(){return"error"})))):m((function(){return"error"})))},isDraggedClass:v,status:d},e.children)}t(390);function de(e){return r.a.createElement("div",{className:"RightSideBarUpload"},r.a.createElement(ue,null,r.a.createElement(g,{size:"lg",icon:E.g}),r.a.createElement("p",{className:"RightSideBarUploadText"},"Upload Files ",r.a.createElement("br",null)," (Drag files here)")))}function me(e){return r.a.createElement("div",{className:"RightSideBarContainer"},r.a.createElement("div",{className:"RightSideBarSub RightSideBarTop"},r.a.createElement(ce,null)),r.a.createElement("div",{className:"RightSideBarSub RightSideBarBottom"},r.a.createElement(de,null)))}t(391);function fe(e){return r.a.createElement("div",{className:"MiddleRow"},r.a.createElement(ee,null),r.a.createElement(re,null),r.a.createElement(me,null))}t(392);var pe=t(213),ve=Object(a.createContext)([{},function(){}]);t(393);function ge(e){return e.visible?r.a.createElement("div",{className:"StatusBarContainer"},r.a.createElement("span",{className:"StatusBarTex"},e.text)):r.a.createElement("span",null)}function Ee(e){var n=Object(a.useContext)(ve),t=Object(u.a)(n,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){setTimeout((function(){return i(Object(pe.a)(Object(pe.a)({},c),{},{text:"",visible:!1}))}),6e3)}),[c,i]),r.a.createElement(ge,{visible:c.visible,text:c.text})}function be(e){var n=Object(a.useState)({visible:!1,text:""}),t=Object(u.a)(n,2),c=t[0],i=t[1];return r.a.createElement(ve.Provider,{value:[c,i]},e.children)}t(233);function he(e){var n=this;return r.a.createElement("div",{className:"ShareModalContantContainer"},r.a.createElement("div",{className:"ShareModalContantSub"},r.a.createElement("span",{className:"ShareModalContentText"},"Public Link:"),r.a.createElement("div",{className:"ShareModalContentSubLink"},r.a.createElement("span",{id:"ShareModalContentPublic"},e.publicLink),r.a.createElement("button",{onClick:function(n){return e.CopyCodeHandler(n,"ShareModalContentPublic")},className:"ShareModalContentSubCopy"},r.a.createElement(g,{onClick:function(){return n.parentElement.click()},icon:E.c})))),e.isAdmin&&r.a.createElement("div",{className:"ShareModalContantSub"},r.a.createElement("span",{className:"ShareModalContentText"},"Admin Link:"),r.a.createElement("div",{className:"ShareModalContentSubLink"},r.a.createElement("span",{id:"ShareModalContentAdmin"},e.adminLink),r.a.createElement("button",{onClick:function(n){return e.CopyCodeHandler(n,"ShareModalContentAdmin")},className:"ShareModalContentSubCopy"},r.a.createElement(g,{icon:E.c})))))}var je=t(243),we=t.n(je);t(403);function Oe(e){return r.a.createElement(we.a,{isOpen:e.open,onAfterOpen:e.onAfterOpen&&e.onAfterOpen,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:0}},contentLabel:e.title?e.title:""},r.a.createElement("div",{className:"ModalInner"},r.a.createElement("div",{className:"ModalInnerHeader"},r.a.createElement("div",{className:"ModalInnerHeaderTitle"},r.a.createElement("h2",{className:"ModalInnerHeaderTitleText"},e.title&&e.title)),r.a.createElement("div",{className:"ModalInnerHeaderCloseContainer"},r.a.createElement("button",{className:"ModalInnerHeaderCloseButton",onClick:function(){return e.setIsOpen(!1)}},r.a.createElement(g,{icon:E.k,size:"lg"})))),r.a.createElement("div",{className:"ModalInnerContent"},e.children)))}function Ce(e){var n=Object(a.useContext)(ve),t=Object(u.a)(n,2)[1],c=Object(a.useContext)(d),i=Object(u.a)(c,2),o=i[0],l=i[1],m="https://codejar-live.herokuapp.com/",f=Object(s.c)((function(e){return e.workspace})),p=f.publicCode,v=f.adminCode,g="".concat(m,"ws/").concat(p),E="".concat(m,"ws/").concat(v);return r.a.createElement(Oe,{open:o,setIsOpen:l,title:"Share this workspace"},r.a.createElement(he,{publicLink:g,adminLink:E,isAdmin:!!v,CopyCodeHandler:function(e,n){var a=document.getElementById(n).innerText;navigator.clipboard.writeText(a).then((function(e){return t({visible:!0,text:"Copied to the clipboard"})})).catch((function(e){return t({visible:!0,text:"Error copying the data"})}))}}))}function ke(e){var n=Object(a.useState)(!1),t=Object(u.a)(n,2),c=t[0],i=t[1];return r.a.createElement(d.Provider,{value:[c,i]},e.children)}function Ne(e){var n=Object(a.useState)(!1),t=Object(u.a)(n,2),c=t[0],i=t[1];return r.a.createElement(K.Provider,{value:[c,i]},e.children)}t(404);function Fe(e){return r.a.createElement("div",{className:"AddFileModalContainer"},r.a.createElement("div",{className:"AddFileModalInputs"},r.a.createElement("input",{type:"text",className:"AddFileModalInput",id:"AddFileModalInput"}),r.a.createElement("button",{className:"AddFileModalButton",onClick:function(n){return e.addToFiles(document.querySelector("#AddFileModalInput").value)}},r.a.createElement(g,{icon:E.h}))),e.validationError&&r.a.createElement("div",{className:"AddFileModalErrors"},r.a.createElement("p",null,"Please enter a valid file name.")))}function xe(e){var n=Object(a.useContext)(K),t=Object(u.a)(n,2),c=t[0],i=t[1],o=Object(a.useState)(!1),l=Object(u.a)(o,2),d=l[0],m=l[1],f=Object(s.b)(),p=Object(s.c)((function(e){return e.files.allFiles})).map((function(e){return e.name+"."+e.extention})),v=Object(s.c)((function(e){return e.workspace.workspaceId}));return r.a.createElement(Oe,{open:c,setIsOpen:i,title:"Create a file"},r.a.createElement(Fe,{validationError:d,addToFiles:function(e){if(se(e=le(e))){var n=P({name:e,id:Object(j.d)()});!function(e,n,t){var a=e+"."+n;return t.filter((function(e){return e===a})).length>0}(n.name,n.extention,p)?(m(!1),f(D(n)),f(z({id:n.id})),f(B({name:n.name,extention:n.extention,nanoId:n.id,workspaceId:v,content:""})),i((function(e){return!1}))):m(!0)}else m(!0)}}))}function Se(e){return r.a.createElement("div",{className:"EditorContainer"},r.a.createElement(be,null,r.a.createElement(ke,null,r.a.createElement(Ne,null,r.a.createElement(I,null),r.a.createElement(fe,null),r.a.createElement(Ee,null),r.a.createElement(xe,null),r.a.createElement(Ce,null)))))}function Ie(e){return r.a.createElement(Se,null)}var ye=Object(j.b)("workspace/fetchCodes",(function(e){return O.a.get("".concat("https://codejar-live.herokuapp.com/","ws/exists"),{params:{wsid:e}})})),Le=(t(405),t(244)),Me=t.n(Le);function Be(){return r.a.createElement("div",{className:"LoadingWorkspace"},r.a.createElement("img",{className:"LoadingWorkspaceLogo",src:Me.a}),r.a.createElement("div",{className:"LoadingWorkspaceLoader"},r.a.createElement(g,{icon:E.j,spin:!0})))}function Ae(e){var n=Object(s.c)((function(e){return e.workspace.codeFetchStatus})),t=Object(s.b)(),c=(Object(s.c)((function(e){return e.workspace.workspaceId})),Object(l.g)().ws_id);switch(Object(a.useEffect)((function(){t(ye(c))}),[]),n){case"idle":case"pending":return r.a.createElement(Be,null);case"fulfilled":return r.a.createElement(Ie,null);default:return r.a.createElement(l.a,null)}}function We(e){return r.a.createElement(Ae,null)}var Pe=t(246),Re=t.n(Pe);t(410);function Te(e){return r.a.createElement("div",{className:"LandingPageContainer"},r.a.createElement("div",{className:"LandingPageLogoContainer"},r.a.createElement("img",{className:"LandingPageLogo",src:Re.a,alt:"Code Jar Logo"})),r.a.createElement("div",{className:"LandingPageButtonsContainer"},r.a.createElement("button",{className:"LandingPageButton",onClick:e.newWorkspaceHandler}," CREATE A WORKSPACE "),r.a.createElement("button",{className:"LandingPageButton"}," GO TO A WORKSPACE ")))}var De,He=Object(j.b)("workspace/create",(function(){return O.a.get("".concat("https://codejar-live.herokuapp.com/","ws/create"))}));function ze(e){var n=Object(s.b)();var t=Object(s.c)((function(e){return e.workspace.workspaceId}));return t&&window.location.replace("/ws/".concat(t)),r.a.createElement(Te,{newWorkspaceHandler:function(){n(He())}})}var _e=Object(j.c)({name:"workspace",initialState:{workspaceId:"",ownerEmail:"",publicCode:"",adminCode:"",codeFetchStatus:"idle",error:null},reducers:{setworkspaceId:function(e,n){e.workspaceId=n.payload.id}},extraReducers:(De={},Object(y.a)(De,ye.pending,(function(e,n){e.codeFetchStatus="pending"})),Object(y.a)(De,ye.fulfilled,(function(e,n){e.codeFetchStatus="fulfilled",e.adminCode=n.payload.data.admin_code,e.publicCode=n.payload.data.public_code,e.workspaceId=n.payload.data.admin_code?n.payload.data.admin_code:n.payload.data.public_code})),Object(y.a)(De,ye.rejected,(function(e,n){e.codeFetchStatus="error",e.error=n.error.message})),Object(y.a)(De,He.pending,(function(e,n){e.codeFetchStatus="pending"})),Object(y.a)(De,He.fulfilled,(function(e,n){e.codeFetchStatus="fulfilled",e.workspaceId=n.payload.data.adminCode})),Object(y.a)(De,He.rejected,(function(e,n){e.codeFetchStatus="error",e.error=n.error.message})),De)}),Ue=(_e.actions.setworkspaceId,_e.reducer),qe=Object(j.a)({reducer:{files:_,workspace:Ue}});function Je(e){return r.a.createElement(s.a,{store:qe},r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/ws/:ws_id",component:We}),r.a.createElement(l.b,{path:"/",component:ze})))))}var Ke=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ze(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Je,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");Ke?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ze(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ze(n,e)}))}}()}},[[247,1,2]]]);
//# sourceMappingURL=main.fd8a8e2f.chunk.js.map