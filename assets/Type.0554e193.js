import{_ as h,r as _,o as a,c as i,a as e,b as l,w as c,t as r,F as p,e as u,f as m,d}from"./index.62d1e244.js";const y=[{type:"Android",value:"Ici sont mes projets Android faits avec Android Studio pour la plupart."},{type:"C#",value:"Ici sont mes gros projets C# faits avec visual studio."},{type:"Symfony",value:"Ici sont mes projets Symfony faits avec Symfony CLI et postman."}],f=[{name:"GSB",type:"Android",image:"gsbAndroidResult",description:"Le projet GSB est une application mobile destin\xE9e aux visiteurs d'un laboratoire et a \xE9t\xE9 cr\xE9\xE9e pour mon BTS lors de l'ann\xE9e 2021-2022.",file:"GSBApplication"},{name:"GogMeteo",type:"Android",image:"gogmeteoResult",description:"Ce projet a \xE9t\xE9 fait en collaboration avec un ami de ma classe de BTS et est pr\xE9vu pour \xEAtre une sorte de Geoguessr mais o\xF9 l'on doit retrouver une ville gr\xE2ce \xE0 sa temp\xE9rature.",file:"gogmeteo"},{name:"GSB_frais",type:"C#",image:"gsbCsharpResult",description:"Le projet GSB_frais est une application windows destin\xE9e aux comptables d'un laboratoire et a \xE9t\xE9 cr\xE9\xE9e pour mon BTS lors de l'ann\xE9e 2021-2022 et est une application console windows de type client lourd.",file:"GSB_frais"},{name:"GSB",type:"Symfony",image:"NIY",description:"Le projet GSB est une application mobile destin\xE9e aux visiteurs d'un laboratoire et a \xE9t\xE9 cr\xE9\xE9e pour mon BTS lors de l'ann\xE9e 2021-2022 et comprends aussi une partie symfony de type API.",file:"GSBApplication"},{name:"Cookle",type:"Symfony",image:"cookleResult",description:"Ce projet est une sorte de marmiton o\xFB l'on peut stocker et regarder les recettes de plusieurs sites internet (dont Marmiton) mais aussi la recette du jour choisie al\xE9atoirement.",url:"cookle"}];var g={types:y,data:f};const v={data(){return{datas:g,type:this.$route.params.types,typeUrl:""}},emits:["top"],mounted(){this.$emit("top"),this.type=="CSharp"?this.typeUrl="C#":this.typeUrl=this.type},watch:{$route(s){(s.path=="Symfony"||s.path=="CSharp"||s.path=="Android")&&(this.$router.push(s.path),this.datas=this.sourcedata,this.type=s.params.types,s.params.types=="CSharp"?this.typeUrl="C#":this.typeUrl=this.type)}}},S=e("header",{id:"head",class:"secondary"},null,-1),C={class:"container"},b={class:"breadcrumb"},B=d("Home"),k=d("Mes projets"),G={class:"active"},A={class:"jumbotron top-space col-sm-12"},x={class:"container"},U={class:"row"},I={class:"col-sm-12 highlight"},L={class:"page-header"},T={class:"page-title"},$={key:0},j={key:0},N=d("Plus d'infos"),w=["href"],M=["src"],V=e("p",{class:"invisible"},"lespace",-1),F=["href"],z=e("b",null,[e("u",null,"Le t\xE9l\xE9charger")],-1),D=[z];function E(s,H,P,Y,o,q){const n=_("router-link");return a(),i(p,null,[S,e("div",C,[e("ol",b,[e("li",null,[l(n,{class:"marronColor",to:"/"},{default:c(()=>[B]),_:1})]),e("li",null,[l(n,{class:"marronColor",to:"/#projects"},{default:c(()=>[k]),_:1})]),e("li",G,r(o.typeUrl),1)]),e("div",A,[e("div",x,[e("div",U,[e("div",I,[e("header",L,[e("h1",T,"Mes projets "+r(o.typeUrl),1)]),(a(!0),i(p,null,u(o.datas.types,t=>(a(),i("div",{key:t},[t.type===o.type?(a(),i("div",$,[e("p",null,r(t.value),1)])):m("",!0)]))),128)),(a(!0),i(p,null,u(o.datas.data,t=>(a(),i("div",{key:t.name},[t.type===o.typeUrl?(a(),i("div",j,[e("div",null,[e("h2",null,"Projet "+r(t.name),1),e("p",null,r(t.description),1),l(n,{to:`/${o.type}/${t.name}`},{default:c(()=>[N]),_:2},1032,["to"]),e("a",{href:`/images/${t.image}.png`,target:"blank",noreferrer:"",noopener:"",nofollow:""},[e("img",{src:`/images/${t.image}.png`},null,8,M)],8,w)]),V,e("a",{class:"normalColor",href:`/files/${t.file}.7z`},D,8,F)])):m("",!0)]))),128))])])])])])],64)}var K=h(v,[["render",E]]);export{K as default};
