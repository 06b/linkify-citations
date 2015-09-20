// Load minified citation.js
// from: https://github.com/unitedstates/citation
!function e(t,n,s){function r(o,c){if(!n[o]){if(!t[o]){var u="function"==typeof require&&require;if(!c&&u)return u(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var a=n[o]={exports:{}};t[o][0].call(a.exports,function(e){var n=t[o][1][e];return r(n?n:e)},a,a.exports,e,t,n,s)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<s.length;o++)r(s[o]);return r}({1:[function(e,t,n){t.exports={type:"regex",id:function(e){return["cfr",e.title,e.section||e.part].concat(e.subsections||[]).join("/")},patterns:[{regex:"(\\d+)\\s?C\\.?\\s?F\\.?\\s?R\\.?(?:[\\s,]+(?:§+|parts?))?\\s*((?:\\d+\\.?\\d*(?:\\s*\\((?:[a-zA-Z\\d]{1,2}|[ixvIXV]+)\\))*)+)",fields:["title","sections"],processor:function(e){var t,n,s,r=e.title,i=e.sections.split(/[\(\)]+/).filter(function(e){return e});return n=i[0].trim(),s=i.splice(1),n.indexOf(".")>0?t=n.split(".")[0]:(t=n,n=null,s=null),{title:r,part:t,section:n,subsections:s}}}]}},{}],2:[function(e,t,n){function s(e){return e?e.split(/[\(\)]+/).filter(function(e){return e}):[]}var r="(\\d+A?)\\s?\\-\\s?([\\w\\d]+(?:\\.?[\\w\\d]+)?)((?:\\([^\\)]+\\))*)";t.exports={type:"regex",id:function(e){return["dc-code",e.title,e.section].concat(e.subsections).join("/")},parents_by:"subsections",patterns:function(e){var t="",n="(?:sections?|§+)\\s+",i="(?:sections|§§)\\s+";return"dc_code"!=e.source&&(t="D\\.?C\\.? (?:Official )?Code\\s+",n="(?:"+n+")?",i="(?:"+i+")?"),[{regex:"("+t+i+")("+r+"(?:(?:,|, and|\\s+and|\\s+through|\\s+to)\\s+"+r+")+)",fields:["prefix","multicite","title1","section1","subsections1","title2","section2","subsections2"],processor:function(e){for(var t,n=new RegExp(r,"g"),i=new Array;null!==(t=n.exec(e.multicite));)i.push({_submatch:{text:t[0],offset:e.prefix.length+t.index},title:t[1],section:t[2],subsections:s(t[3])});return i}},{regex:t+n+r,fields:["title","section","subsections"],processor:function(e){var t=e.title,n=e.section,r=s(e.subsections);return{title:t,section:n,subsections:r}}}]}}},{}],3:[function(e,t,n){t.exports={type:"regex",id:function(e){return["dc-law",e.period,e.number].join("/")},patterns:function(e){var t="D\\.?\\s*C\\.?\\s+";return"dc_code"==e.source&&(t="(?:"+t+")?"),[{regex:t+"Law\\s+(\\d+)\\s?[-–]+\\s?(\\d+\\w?)",fields:["period","number"],processor:function(e){return{period:e.period,number:e.number}}}]}}},{}],4:[function(e,t,n){t.exports={type:"regex",id:function(e){return["dc-register",e.volume,e.page].join("/")},patterns:[{regex:"(\\d+)\\s+DCR\\s+(\\d+)",fields:["volume","page"],processor:function(e){return{volume:e.volume,page:e.page}}}]}},{}],5:[function(e,t,n){t.exports={type:"regex",id:function(e){return["dcstat",e.volume,e.page].join("/")},patterns:[{regex:"(\\d+)\\s+DCSTAT\\s+(\\d+)",fields:["volume","page"],processor:function(e){return{volume:e.volume,page:e.page}}}]}},{}],6:[function(e,t,n){t.exports={type:"regex",id:function(e){return["fedreg",e.volume,e.page].join("/")},patterns:[{regex:"(\\d+)\\s+(?:Fed\\.?\\sReg?\\.?|F\\.?R\\.?)\\s+(\\d+)",fields:["volume","page"],processor:function(e){return{volume:e.volume,page:e.page}}}]}},{}],7:[function(e,t,n){t.exports={type:"regex",id:function(e){return["us-law",e.type,e.congress,e.number].concat(e.sections||[]).join("/")},parents_by:"sections",patterns:[{regex:"(?:section (\\d+[\\w\\d-]*)((?:\\([^\\)]+\\))*) of )?(pub(?:lic)?|priv(?:ate)?)\\.?\\s*l(?:aw)?\\.?(?:\\s*No\\.?)? +(\\d+)[-–]+(\\d+)",fields:["section","subsections","type","congress","number"],processor:function(e){var t=[];return e.section&&t.push(e.section),e.subsections&&(t=t.concat(e.subsections.split(/[\(\)]+/).filter(function(e){return e}))),{type:e.type.match(/^priv/i)?"private":"public",congress:e.congress,number:e.number,sections:t}}},{regex:"(?:section (\\d+[\\w\\d-]*)((?:\\([^\\)]+\\))*) of )?P\\.?L\\.? +(\\d+)[-–](\\d+)",fields:["section","subsections","congress","number"],processor:function(e){return sections=[],e.section&&sections.push(e.section),e.subsections&&(sections=sections.concat(e.subsections.split(/[\(\)]+/).filter(function(e){return e}))),{type:"public",congress:e.congress,number:e.number,sections:sections}}}]}},{}],8:[function(e,t,n){t.exports={type:"regex",id:function(e){return["reporter",e.volume,e.reporter,e.page].join("/")},patterns:[{regex:"(\\d{1,3})\\s(\\w+(?:\\.\\w+(?:\\.)?)?(?:\\.\\dd)?|U\\.?\\s?S\\.?|F\\. Supp\\.(?:\\s\\dd)?)\\s(\\d{1,4})",fields:["volume","reporter","page"],processor:function(e){return{volume:e.volume,reporter:e.reporter,page:e.page}}}]}},{}],9:[function(e,t,n){t.exports={type:"regex",id:function(e){return["stat",e.volume,e.page].join("/")},patterns:[{regex:"(\\d+[\\w]*)\\s+Stat\\.?\\s+(\\d+)",fields:["volume","page"],processor:function(e){return{volume:e.volume,page:e.page}}}]}},{}],10:[function(e,t,n){t.exports={type:"regex",id:function(e){return["usc",e.title,e.section].concat(e.subsections||[]).join("/")},parents_by:"subsections",patterns:[{regex:"(\\d+)\\s+U\\.?\\s?S\\.?\\s?C\\.?(?:\\s+(App).?)?(?:\\s+(§+))?\\s+((?:\\-*\\d+[\\w\\d\\-]*(?:\\([^\\)]+\\))*)+)(?:\\s+(note|et\\s+seq))?",fields:["title","appendix","symbol","sections","note"],processor:function(e){var t=e.title;e.appendix&&(t+="-app");var n=e.sections.split(/-+/),s=!1;if("§§"==e.symbol)s=!0;else{var r=e.sections.indexOf("-"),i=e.sections.indexOf("(");r>0&&i>0&&r>i&&(s=!0)}return n.length>1&&!s&&n.unshift(e.sections),n.map(function(n){var s=n.split(/[\(\)]+/).filter(function(e){return e});return n=s[0],subsections=s.splice(1),e.note&&subsections.push(e.note.replace(" ","-")),{title:t,section:n,subsections:subsections}})}},{regex:"section (\\d+[\\w\\d-]*)((?:\\([^\\)]+\\))*)(?:\\s+of|\\,) title (\\d+)",fields:["section","subsections","title"],processor:function(e){return{title:e.title,section:e.section,subsections:e.subsections.split(/[\(\)]+/).filter(function(e){return e})}}}]}},{}],11:[function(e,t,n){t.exports={type:"regex",id:function(e){return["va-code",data.title,data.section].join("/")},patterns:[{regex:"Va\\.? Code\\.?(?:\\s+Ann\\.?)?(?:\\s+§+)?\\s+([\\d\\.]+)\\-([\\d\\.:]+)(?:\\s+\\((?:West )?([12]\\d{3})\\))?",fields:["title","section","year"],processor:function(e){return{title:e.title,section:e.section,year:e.year}}}]}},{}],12:[function(e,t,n){t.exports=function(t){return t={types:{},filters:{},find:function(e,n){if(n||(n={}),"string"==typeof e){return n.filter&&t.filters[n.filter]?t.filtered(n.filter,e,n):t.extract(e,n)}},filtered:function(e,n,s){var r=[],i=t.filters[e];return i.from(n,s[e],function(e,n){var i=t.extract(e,s),o=i.citations.map(function(e){return Object.keys(n).forEach(function(t){e[t]=n[t]}),e});r=r.concat(o)}),{citations:r}},extract:function(e,n){n||(n={});var s=n.excerpt?parseInt(n.excerpt,10):0,r=n.parents||!1,i=t.selectedTypes(n);if(0===i.length)return null;var o=n.replace,c=[],u={},a=0;i.forEach(function(e){if("regex"==t.types[e].type){var s=t.types[e].patterns;"function"==typeof s&&(s=s(n[e]||{})),s.forEach(function(t){t.type=e,u[a]=t,a+=t.fields.length+1})}});var p=Object.keys(u).map(function(e){return u[e].regex});if(p.length>0)var f=new RegExp("("+p.join(")|(")+")","ig"),l=e.replace(f,function(){var n,i=arguments[0],a=arguments[arguments.length-2],p=Array.prototype.slice.call(arguments,1,-2);for(n=0;n<p.length&&!p[n];n++);var f=u[n];if(!f)return null;var l=f.type,d=Array.prototype.slice.call(p,n+1),g=t.matchFor(d,f),y=f.processor(g);Array.isArray(y)||(y=[y]);var x={type:f.type};if(x.match=i.toString(),x.index=a,s>0){var v=a-s,m=v>0?v:0,b=a+x.match.length+s,h=b<=e.length?b:e.length;x.excerpt=e.substring(m,h)}r&&t.types[l].parents_by&&(y=t._.flatten(y.map(function(e){return t.citeParents(e,l)}))),y=y.map(function(e){var n={};return t._.extend(n,x),e._submatch&&(n.match=e._submatch.text,n.index+=e._submatch.offset,delete e._submatch),n[l]=e,n[l].id=t.types[l].id(e),c.push(n),n});var _=x.match,w=null;if(w="function"==typeof o?o:"object"==typeof o&&"function"==typeof o[l]?o[l]:null)for(var j=0,A=0,C=0;C<y.length;C++){if(y[C].index>=j){var E=w(y[C]);E&&(_=_.substring(0,y[C].index-a+A)+E+_.substring(y[C].index-a+y[C].match.length+A),A+=E.length-y[C].match.length,j=y[C].index+y[C].match.length)}delete y[C].index}return _});-1!=i.indexOf("judicial")&&(c=c.concat(t.types.judicial.extract(e)));var d={citations:c};return n.replace&&(d.text=l),d},citeParents:function(e,n){for(var s=t.types[n].parents_by,r=[],i=e[s].length;i>=0;i--){var o=t._.extend({},e);o[s]=o[s].slice(0,i),r.push(o)}return r},matchFor:function(e,t){for(var n={},s=0;s<e.length;s++)n[t.fields[s]]=e[s];return n},selectedTypes:function(e){var n;return e.types&&(Array.isArray(e.types)?e.types.length>0&&(n=e.types):n=[e.types]),n=n?n.filter(function(e){return-1!=Object.keys(t.types).indexOf(e)}):Object.keys(t.types)},_:{extend:function(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t)for(var n in t)e[n]=t[n]}),e},flatten:function(e){var t=function(e,n){return e.forEach(function(e){Array.isArray(e)?t(e,n):n.push(e)}),n};return t(e,[])}}},"undefined"!=typeof e&&(t.types.usc=e("./citations/usc"),t.types.law=e("./citations/law"),t.types.cfr=e("./citations/cfr"),t.types.va_code=e("./citations/va_code"),t.types.dc_code=e("./citations/dc_code"),t.types.dc_register=e("./citations/dc_register"),t.types.dc_law=e("./citations/dc_law"),t.types.dc_stat=e("./citations/dc_stat"),t.types.stat=e("./citations/stat"),t.types.reporter=e("./citations/reporter"),t.types.fedreg=e("./citations/fedreg"),t.filters.lines=e("./filters/lines")),"undefined"!=typeof window&&(window.Citation=t),t}()},{"./citations/cfr":1,"./citations/dc_code":2,"./citations/dc_law":3,"./citations/dc_register":4,"./citations/dc_stat":5,"./citations/fedreg":6,"./citations/law":7,"./citations/reporter":8,"./citations/stat":9,"./citations/usc":10,"./citations/va_code":11,"./filters/lines":13}],13:[function(e,t,n){t.exports={from:function(e,t,n){var s=t&&t.delimiter||/[\n\r]+/,r=e.split(new RegExp(s));r.forEach(function(e,t){n(e,{line:t+1})})}}},{}]},{},[12]);

document.addEventListener("DOMContentLoaded", function() {
  var citationToURL = function(citation) {
    // var url = "/" + citation.reporter.volume + "/" + citation.reporter.reporter + "/" + citation.reporter.page;
    var url = getURLfromCitation(citation)
    if (url) return "<a class='citation' href='" + url + "'>" + citation.match + "</a>";
    else return citation.match;
  };
  //
  var doc = document.documentElement;
  var thePage = doc;
  // find the citations
  var citations = Citation.find(doc.innerHTML).citations;
              
  // loop through each citation
  for (i = 0; i < citations.length; i++) {
    // generate a link
    var link = citationToURL(citations[i]);
    // stick the link onto the DOM
    thePage.innerHTML = thePage.innerHTML.replace(citations[i].match, link);
  }
});

var getURLfromCitation = function (citation) {

  var url = "http://api.fdsys.gov/link?collection=",
      law_type = citation.type,
      cite     = citation[law_type]; // Put cite's data in a consistently-named object

  switch (law_type) {
    case "usc":
      return url + "uscode&title=" + cite.title + "&year=mostrecent&section=" + cite.section + "&type=usc"
    case "law":
      return url + "plaw&congress=" + cite.congress + "&lawtype=" + cite.type + "&lawnum=" + cite.number;
    case "cfr":
      return url + "cfr&titlenum=" + cite.title + "&partnum=" + cite.part +
        "&sectionnum=" + cite.section + "&year=mostrecent"
    case "stat":
      return url + "statute&volume=" + cite.volume + "&page=" + cite.page
    case "fedreg":
      return url + "fr&volume=" + cite.volume + "&page=" + cite.page
    default:
      return false;
  }
}
