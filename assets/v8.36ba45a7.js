import{_ as s,r as a,o,c as i,a as e,b as r,w as n,F as c,d as t}from"./index.27a4d073.js";var d="/images/v8CodeSeptembre.png",u="/images/v8CodeSeptembre2.png",m="/images/v8CodeSeptembre3.png",p="/images/v8codeNovembre.png",g="/images/v8CodeJanvier.png";const v={emits:["top"],mounted(){this.$emit("top")}},b=e("header",{id:"head",class:"secondary"},null,-1),h={class:"container"},f={class:"breadcrumb"},_=t("Home"),x=t("Mes veilles"),y=e("li",{class:"active"},"V8",-1),w=e("div",{class:"row"},[e("article",{class:"col-md-8 maincontent"},[e("header",{class:"page-header"},[e("h1",{class:"page-title"},"Mes veilles")]),e("p",null,"Ici vous trouverez les veilles technologiques que j'ai effectu\xE9 tout au long de cette ann\xE9e"),e("p",null,"Nous nous int\xE9ressons ici \xE0 V8"),e("p",null,[e("i",null,"Je r\xE9alise moi-m\xEAme absolument tous les codes que vous voyez dans cette page")]),e("a",{name:"node"}),e("h2",null,"V8"),e("h4",null," Qu'est-ce que V8"),e("p",null," V8 est un moteur JavaScript(utilis\xE9 par Node.js, Chrome et d'autre) permettant de convertir directement votre code JavaScript en langage machine avant d'\xE9x\xE9cuter celui-ci, ce qui r\xE9sulte en une optimisation maximale lors de l'\xE9x\xE9cution du code."),e("table",{class:"table table-bordered table-hover col-md-4"},[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"},scope:"col"},"Date"),e("th",{style:{"text-align":"center"},scope:"col"},"Changements")])]),e("tbody",null,[e("tr",null,[e("th",{scope:"row"}),e("td",null,[e("p",{style:{"text-align":"center"}},[e("b",null,"2021")])])]),e("tr",{style:{"text-align":"center"}},[e("th",{style:{"vertical-align":"middle"},scope:"row"},"Septembre"),e("td",null,[e("p",{style:{"text-align":"center"}},[e("b",null,"Version : 9.4")]),t(" Ajouts : - La classe d'initialisation 'static { }' qui permet d'initialiser du code \xE0 \xE9x\xE9cuter une seule fois."),e("br"),t(" - Il y a aussi eu des changements au niveau de l'API v8 mais je n'ai pas r\xE9ussi \xE0 comprendre les changements op\xE9r\xE9s."),e("br"),e("p",null,'La premi\xE8re image de septembre montre la classe "static { }" en action.'),e("br"),e("br"),e("p",{style:{"text-align":"center"}},[e("b",null,"Version : 9.5")]),t(" Ajouts : - Lors de la version 8.1 de V8, l'API "),e("i",null,"Intl.DisplayNames"),t(" avait \xE9t\xE9 ajout\xE9, dans cette nouvelle version, cette API \xE0 \xE9t\xE9 am\xE9lior\xE9e rajoutant deux nouveaux types : calendar et dateTimeField(vous pouvez les voir dans la deuxi\xE8meimage d'exemple."),e("br"),t(" -Une am\xE9lioration du type 'language' a \xE9t\xE9 fournie o\xF9 ce type supporte les dialectes(comme l'anglais Australien, am\xE9ricain, anglais, ...). ")])]),e("tr",{style:{"text-align":"center"}},[e("th",{style:{"vertical-align":"middle","text-align":"center"},scope:"row"},"Octobre"),e("td",null,[e("p",{style:{"text-align":"center"}},[e("b",null,"Version : 9.6")]),t(" Ajouts : - La version 9.6 ajoute un support pour type de variable interne \xE0 WebAssembly : anyref ou externref(le vrai nom)."),e("br"),t(" Cette nouvelle variable interne permet de faire le lien plus facilement entre les objets JavaScript(fonctions, classes) et le module WebAssembly. - Pour plus d'informations \xE0 propos de cette variable, je vous recommande ces explications(en anglais), elles m' permises de mieux comprendre la variable externref"),e("br"),t(" Le lien : "),e("a",{class:"marronColor",href:"https://rustwasm.github.io/wasm-bindgen/reference/reference-types.html",target:"_blank",noopener:"",noreferrer:"",nofollow:""},"https://rustwasm.github.io/wasm-bindgen/reference/reference-types.html")])]),e("tr",{style:{"text-align":"center"}},[e("th",{style:{"vertical-align":"middle","text-align":"center"},scope:"row"},"Novembre"),e("td",null,[e("p",{style:{"text-align":"center"}},[e("b",null,"Version : 9.7")]),t(' Ajouts : - De nouvelles m\xE9thodes ont \xE9t\xE9 ajout\xE9es comme la m\xE9thode "findLast" et la m\xE9thode "findLastIndex".'),e("br"),t(" Ces m\xE9thodes permettent de rechercher le dernier index ou le dernier \xE9l\xE9ment qui correspond avec le test fourni. ")])]),e("tr",{style:{"text-align":"center"}},[e("th",{style:{"vertical-align":"middle","text-align":"center"},scope:"row"},"D\xE9cembre"),e("td",null,[e("p",{style:{"text-align":"center"}},[e("b",null,"Rien \xC0 Signaler")]),t(" Aucun ajout ni modification pour le mois de D\xE9cembre malheureusement. ")])]),e("tr",null,[e("th",{scope:"row"}),e("td",null,[e("p",{style:{"text-align":"center"}},[e("b",null,"2022")])])]),e("tr",{style:{"text-align":"center"}},[e("th",{style:{"vertical-align":"middle","text-align":"center"},scope:"row"},"Janvier"),e("td",null,[e("p",{style:{"text-align":"center"}},[e("b",null,"Version 9.9")]),t(" De nouvelle fonctionnalit\xE9s pour l'APi Intl.Locale ont \xE9t\xE9 rajout\xE9es comme la possibilit\xE9 de voir tous les calendriers, le cycle horaire et plus encore, pour l'enti\xE8ret\xE9, voir l'image correspondante. ")])])])])]),e("aside",{class:"col-md-4 sidebar sidebar-right"},[e("div",{class:"row widget"},[e("div",{class:"col-xs-12"},[e("h4",null,"Code V8 Septembre 2021"),e("p",null,"V8 9.4 exemple"),e("a",{href:"/images/v8CodeSeptembre.png",target:"blank",noreferer:"",noopener:""},[e("img",{src:d})]),e("p",null,"V8 9.5 exemples"),e("a",{href:"/images/v8CodeSeptembre2.png",target:"blank",noreferer:"",noopener:""},[e("img",{src:u})]),e("p",{class:"invisible"},"lespace"),e("p",{class:"invisible"},"lespace"),e("a",{href:"/images/v8CodeSeptembre3.png",target:"blank",noreferer:"",noopener:""},[e("img",{src:m})])])]),e("div",{class:"row widget"},[e("div",{class:"col-xs-12"},[e("h4",null,"Code V8 Novembre 2021"),e("a",{href:"/images/v8CodeNovembre.png",target:"blank",noreferer:"",noopener:""},[e("img",{src:p})])])]),e("div",{class:"row widget"},[e("div",{class:"col-xs-12"},[e("h4",null,"Code V8 Janvier 2022"),e("a",{href:"/images/v8CodeJanvier.png",target:"blank",noreferer:"",noopener:""},[e("img",{src:g})])])])])],-1),C=e("p",null,"Liens utilis\xE9s : ",-1),k=e("ul",null,[e("li",null,[e("a",{class:"marronColor",href:"https://v8.dev/blog/tags/release",target:"_blank",noopener:"",noreferrer:"",nofollow:""},"https://v8.dev/blog/tags/release")]),e("li",null,[e("a",{class:"marronColor",href:"https://rustwasm.github.io/wasm-bindgen/reference/reference-types.html",target:"_blank",noopener:"",noreferrer:"",nofollow:""},"https://rustwasm.github.io/wasm-bindgen/reference/reference-types.html")]),e("li",null,[e("a",{class:"marronColor",href:"https://v8.dev/features/class-static-initializer-blocks",target:"_blank",noopener:"",noreferrer:"",nofollow:""},"https://v8.dev/features/class-static-initializer-blocks")]),e("li",null,[e("a",{class:"marronColor",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames",target:"_blank",noopener:"",noreferrer:"",nofollow:""},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames")]),e("li",null,[e("a",{class:"marronColor",href:"https://v8.dev/features/finding-in-arrays#finding-elements-from-the-end",target:"_blank",noopener:"",noreferrer:"",nofollow:""},"https://v8.dev/features/finding-in-arrays#finding-elements-from-the-end")]),e("li",null,[e("a",{class:"marronColor",href:"https://www.blank.org",target:"_blank",noopener:"",noreferrer:"",nofollow:""},"https://www.blank.org")]),e("li",{class:"active"},"Et des liens GitHub")],-1);function V(j,S,N,A,D,I){const l=a("router-link");return o(),i(c,null,[b,e("div",h,[e("ol",f,[e("li",null,[r(l,{class:"marronColor",to:"/"},{default:n(()=>[_]),_:1})]),e("li",null,[r(l,{class:"marronColor",to:"/#veilles"},{default:n(()=>[x]),_:1})]),y]),w,C,k])],64)}var L=s(v,[["render",V]]);export{L as default};
