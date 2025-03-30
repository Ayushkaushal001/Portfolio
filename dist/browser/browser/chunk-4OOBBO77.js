import{e as f,g as I,h as P,i as v,j as G,k as J,l as k,m as U,n as q,o as h}from"./chunk-KQXR5WFB.js";import{$a as D,Ba as x,Ea as s,Fa as b,Nb as V,Ob as B,Pb as M,Ta as y,Va as u,X as F,Y as S,Za as o,_a as n,aa as N,ab as O,bb as m,cb as E,ga as j,ha as w,jb as l,kb as L,lb as R,mb as c,nb as p,oa as T,ob as g,pa as W,qb as C}from"./chunk-W6AFUPH7.js";var z={production:!1,ADMIN_PASSWORD:"admin123"};var K=(()=>{class t{constructor(e){this.router=e,this.password=""}login(){console.log("Entered Password:",this.password);let e=z.ADMIN_PASSWORD;this.password.trim()===e?(localStorage.setItem("isAdmin","true"),this.router.navigate(["/admin/dashboard"])):alert("Wrong password")}static{this.\u0275fac=function(a){return new(a||t)(b(f))}}static{this.\u0275cmp=j({type:t,selectors:[["app-login"]],standalone:!0,features:[C],decls:5,vars:1,consts:[["type","password","placeholder","Enter Admin Password",3,"ngModelChange","ngModel"],[3,"click"]],template:function(a,i){a&1&&(o(0,"h2"),l(1,"Admin Login"),n(),o(2,"input",0),g("ngModelChange",function(r){return p(i.password,r)||(i.password=r),r}),n(),o(3,"button",1),m("click",function(){return i.login()}),l(4,"Login"),n()),a&2&&(s(2),c("ngModel",i.password))},dependencies:[h,P,v,k]})}}return t})();function $(t,_){if(t&1&&D(0,"img",17),t&2){let e=_.$implicit;u("src",e,x)}}function ee(t,_){if(t&1&&(o(0,"div")(1,"h4"),l(2,"Images:"),n(),o(3,"div",15),y(4,$,1,1,"img",16),n()()),t&2){let e=E().$implicit;s(4),u("ngForOf",e.images)}}function te(t,_){if(t&1){let e=O();o(0,"div",11)(1,"h3"),l(2),n(),o(3,"p"),l(4),n(),o(5,"p")(6,"strong"),l(7,"Tech Stack:"),n(),l(8),n(),o(9,"a",12),l(10,"GitHub Link"),n(),y(11,ee,5,1,"div",13),o(12,"button",14),m("click",function(){let i=T(e).index,d=E();return W(d.deleteProject(i))}),l(13,"Delete"),n()()}if(t&2){let e=_.$implicit;s(2),L(e.title),s(2),L(e.description),s(4),R(" ",e.techStack.join(", "),""),s(),u("href",e.githubLink,x),s(2),u("ngIf",e.images.length)}}var Q=(()=>{class t{constructor(e){this.router=e,this.newProject={title:"",description:"",techStack:"",githubLink:"",images:[]},this.projects=[],this.loadProjects()}loadProjects(){this.projects=JSON.parse(localStorage.getItem("projects")||"[]")}onFileSelected(e){if(e.target.files&&e.target.files.length)for(let a of e.target.files){let i=new FileReader;i.readAsDataURL(a),i.onload=()=>{this.newProject.images.push(i.result)}}}addProject(){let e=JSON.parse(localStorage.getItem("projects")||"[]"),a={id:e.length+1,title:this.newProject.title,description:this.newProject.description,techStack:this.newProject.techStack.split(",").map(i=>i.trim()),githubLink:this.newProject.githubLink,images:this.newProject.images};e.push(a),localStorage.setItem("projects",JSON.stringify(e)),this.loadProjects(),alert("Project added successfully!"),this.newProject={title:"",description:"",techStack:"",githubLink:"",images:[]}}deleteProject(e){this.projects.splice(e,1),localStorage.setItem("projects",JSON.stringify(this.projects)),this.loadProjects()}logout(){localStorage.removeItem("isAdmin"),alert("Logged out successfully!"),this.router.navigate(["/admin/login"])}static{this.\u0275fac=function(a){return new(a||t)(b(f))}}static{this.\u0275cmp=j({type:t,selectors:[["app-admin-dashboard"]],standalone:!0,features:[C],decls:32,vars:5,consts:[[1,"btn","btn-danger",2,"justify-content","end",3,"click"],[1,"container","mt-4"],[3,"submit"],[1,"mb-3"],["type","text","name","title","required","",1,"form-control",3,"ngModelChange","ngModel"],["name","description",1,"form-control",3,"ngModelChange","ngModel"],["type","text","name","techStack",1,"form-control",3,"ngModelChange","ngModel"],["type","text","name","githubLink",1,"form-control",3,"ngModelChange","ngModel"],["type","file","multiple","",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary"],["class","project-card",4,"ngFor","ngForOf"],[1,"project-card"],["target","_blank",3,"href"],[4,"ngIf"],[1,"btn","btn-danger",3,"click"],[1,"carousel"],["class","carousel-img",3,"src",4,"ngFor","ngForOf"],[1,"carousel-img",3,"src"]],template:function(a,i){a&1&&(o(0,"button",0),m("click",function(){return i.logout()}),l(1,"Logout"),n(),o(2,"div",1)(3,"h2"),l(4,"Add New Project"),n(),o(5,"form",2),m("submit",function(r){return i.addProject(),r.preventDefault()}),o(6,"div",3)(7,"label"),l(8,"Title:"),n(),o(9,"input",4),g("ngModelChange",function(r){return p(i.newProject.title,r)||(i.newProject.title=r),r}),n()(),o(10,"div",3)(11,"label"),l(12,"Description:"),n(),o(13,"textarea",5),g("ngModelChange",function(r){return p(i.newProject.description,r)||(i.newProject.description=r),r}),n()(),o(14,"div",3)(15,"label"),l(16,"Tech Stack "),n(),o(17,"input",6),g("ngModelChange",function(r){return p(i.newProject.techStack,r)||(i.newProject.techStack=r),r}),n()(),o(18,"div",3)(19,"label"),l(20,"GitHub Link:"),n(),o(21,"input",7),g("ngModelChange",function(r){return p(i.newProject.githubLink,r)||(i.newProject.githubLink=r),r}),n()(),o(22,"div",3)(23,"label"),l(24,"Upload Images:"),n(),o(25,"input",8),m("change",function(r){return i.onFileSelected(r)}),n()(),o(26,"button",9),l(27,"Add Project"),n()(),D(28,"hr"),o(29,"h2"),l(30,"Existing Projects"),n(),y(31,te,14,5,"div",10),n()),a&2&&(s(9),c("ngModel",i.newProject.title),s(4),c("ngModel",i.newProject.description),s(4),c("ngModel",i.newProject.techStack),s(4),c("ngModel",i.newProject.githubLink),s(10),u("ngForOf",i.projects))},dependencies:[h,U,P,v,G,q,k,J,M,V,B],styles:[".project-card[_ngcontent-%COMP%]{border:1px solid #ddd;padding:10px;margin:10px 0;border-radius:5px;background-color:#f9f9f9}.carousel[_ngcontent-%COMP%]{display:flex;overflow-x:auto;gap:10px}.carousel-img[_ngcontent-%COMP%]{width:100px;height:auto;border-radius:5px}"]})}}return t})();var X=(()=>{class t{constructor(e){this.router=e}canActivate(){return localStorage.getItem("isAdmin")==="true"?!0:(this.router.navigate(["/admin/login"]),!1)}static{this.\u0275fac=function(a){return new(a||t)(N(f))}}static{this.\u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var ie=[{path:"login",component:K},{path:"",redirectTo:"login",pathMatch:"full"},{path:"dashboard",component:Q,canActivate:[X]}],Y=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=w({type:t})}static{this.\u0275inj=S({imports:[I.forChild(ie),I]})}}return t})();var we=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=w({type:t})}static{this.\u0275inj=S({imports:[M,Y,h]})}}return t})();export{we as AdminModule};
