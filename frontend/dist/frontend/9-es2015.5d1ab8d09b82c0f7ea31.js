(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Xr9Q:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var a=e("pMnS"),s=e("SVse"),o=e("bujt"),r=e("Fwaw"),i=e("5GAg"),c=e("omvX");class b{constructor(l,n,e,t){this.cookieService=l,this.dataTransferService=n,this.stateService=e,this.router=t,this.qstTypeHours="hours",this.qstTypeScale="scale",this.qstTypeResponse="response",this.currentPageIndex=0,this.questionPages=[{title:"Learning from Labs",questions:[{label:"q_1a",type:"scale",text:"The labs helped me understand the lecture material.",answer:null},{label:"q_1b",type:"scale",text:"The labs taught me new skills.",answer:null},{label:"q_1c",type:"scale",text:"The labs taught me to think creatively.",answer:null},{label:"q_1d",type:"scale",text:"I would be able to repeat the labs without help.",answer:null},{label:"q_1e",type:"response",text:"What was your favorite aspect of the lab?",answer:null},{label:"q_1f",type:"response",text:"What about the lab would you like to see improved?",answer:null}]},{title:"Lab Instructor",questions:[{label:"q_2a",type:"scale",text:"The lab instructor was supportive.",answer:null},{label:"q_2b",type:"scale",text:"The lab instructor was approachable.",answer:null},{label:"q_2c",type:"scale",text:"The lab instructor was able to answer my questions.",answer:null},{label:"q_2d",type:"scale",text:"The lab instructor helped me reach a clear understanding of key concepts.",answer:null},{label:"q_2e",type:"scale",text:"The lab instructor fostered a mutually respectful learning environment.",answer:null},{label:"q_2f",type:"response",text:"What, if anything, could the lab instructor do to improve the experience?",answer:null}]},{title:"Lab Space and Equipment",questions:[{label:"q_3a",type:"scale",text:"The amount of lab equipment was sufficient.",answer:null},{label:"q_3b",type:"scale",text:"The available space was sufficient for the lab activities.",answer:null},{label:"q_3c",type:"scale",text:"If lab equipment or setups were not functioning properly, adequate support was available to rectify the situation.",answer:null},{label:"q_3d",type:"response",text:"What, if anything, could improve lab space and equipment?",answer:null}]},{title:"Time Required to Complete Labs",questions:[{label:"q_4a",type:"hours",text:"On average, the approximate number of hours completing a lab was",answer:null},{label:"q_4b",type:"hours",text:"How many hours did you spend preparing for the lab?",answer:null},{label:"q_4c",type:"hours",text:"How many hours did you spend writing lab reports outside the designated lab period?",answer:null}]},{title:"Lecture Section Instructor",questions:[{label:"q_5a",type:"response",text:"What feedback would you give the lecture section instructor (not the lab TA) about the labs?",answer:null}]}],this.surveyData=null}ngOnInit(){this.dataTransferService.getResults().subscribe(l=>{this.surveyData=l,console.log(this.surveyData)})}changePage(l){(this.currentPageIndex<this.questionPages.length-1&&l>0||this.currentPageIndex>0&&l<0)&&(this.currentPageIndex+=l)}getAverage(l){let n=0;return this.surveyData.forEach(e=>{n+=e[l.label]}),n/this.surveyData.length}clickBack(){this.router.navigate(["/sections-page"])}clickLogout(){this.stateService.logout(),this.router.navigate(["login"])}}var p=e("ZNab"),g=e("YhYe"),d=e("Ebwu"),m=e("iInd"),h=t.pb({encapsulation:0,styles:[[".question-answer[_ngcontent-%COMP%]{margin-top:.4rem}.survey-question[_ngcontent-%COMP%]{margin-top:1rem}"]],data:{}});function f(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"div",[["class","question-answer Scale-Question"]],null,null,null,null,null)),(l()(),t.Kb(1,null,[" Average: "," "]))],null,(function(l,n){l(n,1,0,n.component.getAverage(n.parent.context.$implicit))}))}function v(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(1,null,[" Response ",": "," "]))],null,(function(l,n){l(n,1,0,n.context.index+1,n.context.$implicit[n.parent.parent.context.$implicit.label])}))}function q(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","question-answer Response_Question"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,v)),t.qb(2,278528,null,0,s.j,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.surveyData)}),null)}function y(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"div",[["class","question-answer Hours_Question"]],null,null,null,null,null)),(l()(),t.Kb(1,null,[" Average: "," "]))],null,(function(l,n){l(n,1,0,n.component.getAverage(n.parent.context.$implicit))}))}function w(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,8,"div",[["class","survey-question"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"label",[["class","Question-Title"]],null,null,null,null,null)),(l()(),t.Kb(2,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,f)),t.qb(4,16384,null,0,s.k,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,q)),t.qb(6,16384,null,0,s.k,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,y)),t.qb(8,16384,null,0,s.k,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,4,0,n.context.$implicit.type==e.qstTypeScale),l(n,6,0,n.context.$implicit.type==e.qstTypeResponse),l(n,8,0,n.context.$implicit.type==e.qstTypeHours)}),(function(l,n){l(n,2,0,n.context.$implicit.text)}))}function k(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,7,null,null,null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["class","admin-title"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Kb(3,null,["",". ",""])),(l()(),t.rb(4,0,null,null,1,":svg:svg",[["class","Line_2"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,0,":svg:path",[["d","M 0 0 L 4000 0"],["fill","transparent"],["shape-rendering","auto"],["stroke","rgba(112,112,112,1)"],["stroke-linecap","butt"],["stroke-linejoin","miter"],["stroke-miterlimit","4"],["stroke-width",".5rem"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,w)),t.qb(7,278528,null,0,s.j,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.gb(0,null,null,0))],(function(l,n){var e=n.component;l(n,7,0,e.questionPages[e.currentPageIndex].questions)}),(function(l,n){var e=n.component;l(n,3,0,e.currentPageIndex+1,e.questionPages[e.currentPageIndex].title)}))}function _(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,4,"button",[["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.changePage(-1)&&t),t}),o.b,o.a)),t.qb(1,180224,null,0,r.b,[t.k,i.e,[2,c.a]],null,null),(l()(),t.rb(2,0,null,0,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["keyboard_arrow_left"])),(l()(),t.Kb(-1,0,[" Previous "]))],null,(function(l,n){l(n,0,0,t.Db(n,1).disabled||null,"NoopAnimations"===t.Db(n,1)._animationMode)}))}function x(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,4,"button",[["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.changePage(1)&&t),t}),o.b,o.a)),t.qb(1,180224,null,0,r.b,[t.k,i.e,[2,c.a]],null,null),(l()(),t.Kb(-1,0,[" Next "])),(l()(),t.rb(3,0,null,0,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["keyboard_arrow_right"]))],null,(function(l,n){l(n,0,0,t.Db(n,1).disabled||null,"NoopAnimations"===t.Db(n,1)._animationMode)}))}function I(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,25,"div",[["class","Upload_Page_Class "],["id","Upload_Page"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,14,"div",[["class","left-column"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,1,":svg:svg",[["class","Line_1"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,0,":svg:path",[["class","Line_1_Class"],["d","M 0 0 L 0 4000"],["fill","transparent"],["shape-rendering","auto"],["stroke","rgba(112,112,112,1)"],["stroke-linecap","butt"],["stroke-linejoin","miter"],["stroke-miterlimit","4"],["stroke-width","5px"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,2,"div",[["class","Welcome_Admin__Class"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Kb(6,null,["",": "," "," Survey Results"])),(l()(),t.rb(7,0,null,null,4,"button",[["class","back-button"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.clickBack()&&t),t}),o.b,o.a)),t.qb(8,180224,null,0,r.b,[t.k,i.e,[2,c.a]],null,null),(l()(),t.rb(9,0,null,0,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["keyboard_arrow_left"])),(l()(),t.Kb(-1,0,[" Back "])),(l()(),t.rb(12,0,null,null,3,"div",[["class","logout-button"]],null,null,null,null,null)),(l()(),t.rb(13,0,null,null,2,"button",[["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.clickLogout()&&t),t}),o.b,o.a)),t.qb(14,180224,null,0,r.b,[t.k,i.e,[2,c.a]],null,null),(l()(),t.Kb(-1,0,[" Logout "])),(l()(),t.rb(16,0,null,null,9,"div",[["class","right-column"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,k)),t.qb(18,16384,null,0,s.k,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(19,0,null,null,6,"div",[["class","bottom-buttons"]],null,null,null,null,null)),(l()(),t.rb(20,0,null,null,2,"div",[["class","bottom-button"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,_)),t.qb(22,16384,null,0,s.k,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(23,0,null,null,2,"div",[["class","bottom-button"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,x)),t.qb(25,16384,null,0,s.k,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,18,0,e.surveyData),l(n,22,0,e.currentPageIndex>0),l(n,25,0,e.currentPageIndex<e.questionPages.length-1)}),(function(l,n){var e=n.component;l(n,6,0,e.cookieService.get("selectedSectionID"),e.cookieService.get("selectedSectionSubject"),e.cookieService.get("selectedCatalogNum")),l(n,7,0,t.Db(n,8).disabled||null,"NoopAnimations"===t.Db(n,8)._animationMode),l(n,13,0,t.Db(n,14).disabled||null,"NoopAnimations"===t.Db(n,14)._animationMode)}))}function P(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"app-results-homepage",[],null,null,null,I,h)),t.qb(1,114688,null,0,b,[p.a,g.a,d.a,m.k],null,null)],(function(l,n){l(n,1,0)}),null)}var K=t.nb("app-results-homepage",b,P,{},{},[]);class T{}var M=e("IP0z"),S=e("Xd0L"),D=e("cUpR"),N=e("/HVE");e.d(n,"ResultsPageModuleNgFactory",(function(){return B}));var B=t.ob(u,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[a.a,K]],[3,t.j],t.v]),t.Bb(4608,s.m,s.l,[t.s,[2,s.x]]),t.Bb(1073742336,s.b,s.b,[]),t.Bb(1073742336,m.l,m.l,[[2,m.q],[2,m.k]]),t.Bb(1073742336,T,T,[]),t.Bb(1073742336,M.a,M.a,[]),t.Bb(1073742336,S.i,S.i,[[2,S.c],[2,D.f]]),t.Bb(1073742336,N.b,N.b,[]),t.Bb(1073742336,S.l,S.l,[]),t.Bb(1073742336,r.c,r.c,[]),t.Bb(1073742336,u,u,[]),t.Bb(1024,m.i,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);