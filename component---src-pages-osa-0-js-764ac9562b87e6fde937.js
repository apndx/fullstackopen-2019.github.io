(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{132:function(e,a,t){"use strict";t.r(a);var n=t(159),r=t(144),l=t(0),o=t.n(l),s=t(147),c=t(148),i=t(150),u=t(146),d=t(143),m=t(157),p=t(155),g=t(158),b=t(240),E=t.n(b);a.default=function(){return o.a.createElement(m.a,null,o.a.createElement(g.a,{title:"Home",keywords:["gatsby","application","react"]}),o.a.createElement(r.StaticQuery,{query:"2478981477",render:function(e){var a=e.allOsa5Json.edges[0].node,t=a.arrowTitle,n=a.intro;return o.a.createElement(i.a,{style:{backgroundImage:"url("+E.a+")",backgroundPosition:"center right",backgroundSize:"80%",backgroundRepeat:"no-repeat",backgroundColor:s.blue},className:"spacing spacing--after"},o.a.createElement(d.a,{className:"container"},o.a.createElement(c.a,{upperCase:!0,content:[{backgroundColor:s.blue,text:"Yleistä"},{backgroundColor:"black",text:t}]}),o.a.createElement(u.a,{className:"col-7",text:n}),o.a.createElement(c.a,{stack:!0,content:[{letter:"a",text:"Web-sovelluksen toimintaperiaatteita",path:"/osa0/perusteet"}]})))},data:n}),o.a.createElement(p.a,{next:1}))}},146:function(e,a,t){"use strict";t.d(a,"a",function(){return E});t(28),t(149);var n=t(145),r=t.n(n),l=(t(153),t(161)),o=t.n(l),s=t(160),c=t.n(s),i=t(4),u=t.n(i),d=t(0),m=t.n(d),p=t(154),g=t.n(p),b=t(143),E=function(e){var a=e.text,t=e.className,n=e.heading,l=e.headingFontSize,s=e.bold,i=e.centered,u=e.noPadding,d=r()(e,["text","className","heading","headingFontSize","bold","centered","noPadding"]),p=[];i&&p.push("centered"),s&&p.push("bold"),u&&p.push("body-text--no-padding");var E={replace:function(e){var a=e.type,t=e.attribs,n=e.children;if("tag"===a&&"github-logo"===t.class)return m.a.createElement(b.a,{flex:!0,autoBottomMargin:!0,className:"github-logo__container"},m.a.createElement("img",{style:{maxWidth:"1rem",maxHeight:"1rem",margin:"auto 0"},alt:"github-logo",src:g.a}),m.a.createElement("p",{style:{marginLeft:"0.611rem"}},c()(n,E)))}};return m.a.createElement("div",Object.assign({className:"body-text "+t},d),n.title&&function(){if(n){var e=n.level;return m.a.createElement(e,{className:"body-text__title",style:l?{fontSize:l}:{}},n.title)}return null}(),a&&"string"==typeof a?m.a.createElement("p",{className:"body-text__content "+p.join(" ")},a):a&&a.map(function(e){return m.a.createElement("div",{key:e,className:"body-text__content "+p.join(" ")},o()(e,E))}))};E.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1},E.propTypes={heading:u.a.shape({text:u.a.string,level:u.a.string}),headingFontSize:u.a.string,text:u.a.oneOfType([u.a.string,u.a.array]),className:u.a.string,centered:u.a.bool,bold:u.a.bool,noPadding:u.a.bool}},147:function(e){e.exports={white:"#ffffff",black:"#000000",main:"#e1e1e1",violet:"#B795F3",turquoise:"#a5fee1",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7"}},148:function(e,a,t){"use strict";t(28),t(149);var n=t(145),r=t.n(n),l=(t(151),t(144)),o=t(4),s=t.n(o),c=t(0),i=t.n(c),u=t(143),d=function(e){var a=e.className,t=e.content,n=e.stack,o=e.bold,s=e.thickBorder,c=e.upperCase,d=r()(e,["className","content","stack","bold","thickBorder","upperCase"]);return n?i.a.createElement("div",{className:"col-10 spacing--after"},i.a.createElement("div",{className:"arrow__container",style:{display:"flex",flexDirection:"column"}},t.map(function(e){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:"black"===e.backgroundColor?"white":"black"};return i.a.createElement(l.Link,Object.assign({key:e,to:e.path,className:"arrow__wrapper--stacked "+a},d),i.a.createElement(u.a,{flex:!0,className:"arrow__rectangle",style:t},i.a.createElement("p",{className:"arrow--stacked-letter"},e.letter),i.a.createElement("p",{className:"arrow--stacked-title"},e.text)),i.a.createElement("div",{className:"arrow__point",style:t}))}))):i.a.createElement("div",{className:"col-10 spacing spacing--after"},i.a.createElement("div",{className:"arrow__container arrows--horizontal"},t.map(function(e,t){var n={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:"black"===e.backgroundColor?"white":"black"};return i.a.createElement("div",Object.assign({key:"arrow"+t,className:"arrow__wrapper "+a},d),i.a.createElement("div",{className:"arrow__rectangle "+(o?"bold":"")+" "+(s?"arrow__rectangle--thick-border":""),style:n},c?e.text.toUpperCase():e.text),i.a.createElement("div",{className:"arrow__point "+(s?"arrow__point--thick-border":""),style:n}))})))};d.propTypes={className:s.a.string,content:s.a.array.isRequired,stack:s.a.bool,upperCase:s.a.bool,bold:s.a.bool,thickBorder:s.a.bool},d.defaultProps={className:""},a.a=d},150:function(e,a,t){"use strict";t.d(a,"a",function(){return i});t(28);var n=t(145),r=t.n(n),l=(t(152),t(4)),o=t.n(l),s=t(0),c=t.n(s),i=function(e){var a=e.className,t=e.backgroundColor,n=r()(e,["className","backgroundColor"]),l=t?{backgroundColor:t}:null;return c.a.createElement("div",Object.assign({className:"banner "+a,style:l},n))};i.defaultProps={className:""},i.propTypes={className:o.a.string}},151:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},154:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},155:function(e,a,t){"use strict";var n=t(144),r=t(4),l=t(0),o=t.n(l),s=t(143),c=function(e){var a=e.prev,t=e.next;return o.a.createElement(s.a,{className:"container spacing spacing--after-large"},void 0!==a?o.a.createElement(n.Link,{to:"/osa"+a,className:"push-right-1"},o.a.createElement(s.a,{flex:!0,dirColumn:!0},o.a.createElement("p",{style:{textAlign:"right"}},"Osa ",a),o.a.createElement("b",null,"Edellinen osa"))):o.a.createElement(s.a,{className:"push-right-1"}),void 0!==t?o.a.createElement(n.Link,{to:"/osa"+t,className:"push-left-1"},o.a.createElement(s.a,{flex:!0,dirColumn:!0},o.a.createElement("p",null,"Osa ",t),o.a.createElement("b",null,"Seuraava osa"))):o.a.createElement(s.a,{className:"push-left-1"}))};c.defaultProps={prev:void 0,next:void 0},c.propTypes={prev:r.PropTypes.number,next:r.PropTypes.number},a.a=c},159:function(e){e.exports={data:{allOsa5Json:{edges:[{node:{arrowTitle:"Osa 5 yleistä",intro:["Kurssilla tutustutaan JavaScriptilla tapahtuvaan moderniin websovelluskehitykseen. Pääpaino on React-kirjaston avulla toteutettavissa single page -sovelluksissa, ja niitä tukevissa Node.js:llä toteutetuissa REST-rajapinnoissa.","Kurssilla käsitellään myös sovellusten testaamista, konfigurointia ja suoritusympäristöjen hallintaa sekä NoSQL-tietokantoja."]}}]}}}},240:function(e,a,t){e.exports=t.p+"static/osa0-6604cf9e42b433a590fd08c9fe748a01.png"}}]);
//# sourceMappingURL=component---src-pages-osa-0-js-764ac9562b87e6fde937.js.map