(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{LTI8:function(t,n,e){"use strict";e.d(n,"a",function(){return p});var a=e("ofXK"),o=e("vvyD"),r=e("yGOH"),s=e("tyNb"),i=e("fXoL");let p=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(n){return new(n||t)},imports:[[a.c,o.a,r.a,s.d]]}),t})()},Y58K:function(t,n,e){"use strict";e.d(n,"a",function(){return g});var a=e("/uUt"),o=e("lJxs"),r=e("vkgz"),s=e("IzEk"),i=e("v8Ou"),p=e("fXoL"),c=e("tk/3");let l=(()=>{class t{constructor(t){this.http=t,this.endpoint="https://pokeapi.co/api/v2/pokedex/?limit=20&offset=0"}getRegionList(t){return this.http.get(t||this.endpoint)}}return t.\u0275fac=function(n){return new(n||t)(p.Xb(c.b))},t.\u0275prov=p.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=e("l7P3");let g=(()=>{class t{constructor(t,n){this.regionHttpService=t,this.store=n,this.images={kanto:"https://cdn.bulbagarden.net/upload/2/25/LGPE_Kanto_Map.png","original-johto":"https://cdn.bulbagarden.net/upload/6/64/JohtoMap.png",hoenn:"https://cdn.bulbagarden.net/upload/8/85/Hoenn_ORAS.png","original-sinnoh":"https://cdn.bulbagarden.net/upload/7/74/Pt_Sinnoh.png","original-unova":"https://cdn.bulbagarden.net/upload/thumb/f/fc/Unova_B2W2_alt.png/800px-Unova_B2W2_alt.png","kalos-central":"https://cdn.bulbagarden.net/upload/thumb/8/8a/Kalos_alt.png/800px-Kalos_alt.png","original-alola":"https://cdn.bulbagarden.net/upload/thumb/0/0b/Alola_USUM_artwork.png/800px-Alola_USUM_artwork.png"}}getImages(){return this.images}wrapImages(t){return t.results.forEach(t=>{this.images[t.name]&&(t.image=this.images[t.name])}),t}selectRegion(t){this.store.dispatch(i.e({region:t}))}callRegionsList(t){this.regionHttpService.getRegionList(t).pipe(Object(a.a)(),Object(o.a)(t=>this.wrapImages(t)),Object(r.a)(t=>this.store.dispatch(i.f({responseRegions:t}))),Object(r.a)(t=>this.store.dispatch(i.e({region:t.results[1]}))),Object(s.a)(1)).subscribe(t=>console.log("[SERVICE] Call region list"))}}return t.\u0275fac=function(n){return new(n||t)(p.Xb(l),p.Xb(u.h))},t.\u0275prov=p.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);