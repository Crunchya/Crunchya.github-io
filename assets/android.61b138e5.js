import{_,r as u,o as t,c as a,a as e,b as n,w as r,F as l,d as m,t as d,e as i}from"./index.e689a2b4.js";const p=[{name:"GSB",image:"gsbAndroidResult",description:"Le projet GSB est une application mobile destin\xE9e aux visiteurs d'un laboratoire et a \xE9t\xE9 cr\xE9\xE9e pour mon BTS lors de l'ann\xE9e 2021-2022.",url:"GSBApplication"},{name:"GogMeteo",image:"gogmeteoResult",description:"Ce projet a \xE9t\xE9 fait en collaboration avec un ami de ma classe de BTS et est pr\xE9vu pour \xEAtre une sorte de Geoguessr mais o\xF9 l'on doit retrouver une ville gr\xE2ce \xE0 sa temp\xE9rature.",url:"gogmeteo"}];var h={data:p};const g={data(){return{datas:h}},emits:["top"],mounted(){this.$emit("top")}},f=e("header",{id:"head",class:"secondary"},null,-1),v={class:"container"},b={class:"breadcrumb"},B=i("Home"),$=i("Mes projets"),S=e("li",{class:"active"},"Android",-1),k={class:"jumbotron top-space col-sm-12"},x={class:"container"},A={class:"row"},C={class:"col-sm-12 highlight"},G=e("header",{class:"page-header"},[e("h1",{class:"page-title"},"Mes projets Android")],-1),w=e("p",null,"Ici sont mes projets Android faits avec Android Studio pour la plupart.",-1),y=i("Plus d'infos"),L=["href"],M=["src"],N=e("p",{class:"invisible"},"lespace",-1),T=["href"],V=e("b",null,[e("u",null,"Le t\xE9l\xE9charger")],-1),j=[V];function F(P,R,z,D,c,E){const s=u("router-link");return t(),a(l,null,[f,e("div",v,[e("ol",b,[e("li",null,[n(s,{class:"marronColor",to:"/"},{default:r(()=>[B]),_:1})]),e("li",null,[n(s,{class:"marronColor",to:"/#projects"},{default:r(()=>[$]),_:1})]),S]),e("div",k,[e("div",x,[e("div",A,[e("div",C,[G,w,(t(!0),a(l,null,m(c.datas.data,o=>(t(),a("div",{key:o.name},[e("div",null,[e("h2",null,"Projet "+d(o.name),1),e("p",null,d(o.description),1),n(s,{to:`/android/${o.name}`},{default:r(()=>[y]),_:2},1032,["to"]),e("a",{href:`/images/${o.image}.png`,target:"blank",noreferrer:"",noopener:"",nofollow:""},[e("img",{src:`/images/${o.image}.png`},null,8,M)],8,L)]),N,e("a",{class:"normalColor",href:`/files/${o.url}.7z`},j,8,T)]))),128))])])])])])],64)}var I=_(g,[["render",F]]);export{I as default};
