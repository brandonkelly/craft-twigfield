/*!
 * @project        twigfield
 * @name           javascript-editor.js
 * @author         Andrew Welch
 * @build          Tue Jun 21 2022 13:34:19 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2022 ©2022 nystudio107.com
 *
 */
"use strict";(self.webpackChunkBuildchain=self.webpackChunkBuildchain||[]).push([[339],{5092:function(e,t,n){n(7941),n(2526),n(7327),n(1539),n(5003),n(4747),n(9337);var o=n(4942),i=(n(4916),n(5306),n(713)),r=n(8152),a=n(1002);n(3123),n(6699),n(2023),n(6755),n(9720),n(8309);function l(e){return e[e.length-1]}function s(e,t,n){monaco.languages.registerCompletionItemProvider("twig",{triggerCharacters:[".","("],provideCompletionItems:function(o,i,r){var s=[],u=e,d=o.getValueInRange({startLineNumber:i.lineNumber,startColumn:0,endLineNumber:i.lineNumber,endColumn:i.column}),c=!0;if(-1===d.lastIndexOf("{")&&(c=!1),-1!==d.substring(d.lastIndexOf("{")).indexOf("}")&&(c=!1),!c&&"TwigExpressionAutocomplete"===t)return null;var g=d.replace("\t","").split(" "),m=g[g.length-1];m.includes("{")&&(m=l(m.split("{"))),m.includes("(")&&(m=l(m.split("("))),m.includes(">")&&(m=l(m.split(">")));var f="."===m.charAt(m.length-1);if(f&&"TwigExpressionAutocomplete"!==t)return null;if(c&&"TwigExpressionAutocomplete"===t&&f){if(!n)return null;var p=m.substring(0,m.length-1).split(".");if(void 0!==e[p[0]]){u=e[p[0]];for(var v=1;v<p.length;v++){if(!u.hasOwnProperty(p[v]))return s;u=u[p[v]]}}}if(void 0!==u)for(var w in u)if(u.hasOwnProperty(w)&&!w.startsWith("__")){var h=u[w].__completions;if(void 0!==h){if(delete h.range,"documentation"in h&&"object"!==(0,a.Z)(h.documentation)){var b=h.documentation;h.documentation={value:b,isTrusted:!0,supportsHtml:!0}}s.push(h)}}return{suggestions:s}}})}function u(e,t,n){monaco.languages.registerHoverProvider("twig",{provideHover:function(t,n){var o={},i=t.getValueInRange({startLineNumber:n.lineNumber,startColumn:0,endLineNumber:n.lineNumber,endColumn:t.getLineMaxColumn(n.lineNumber)}),r=t.getWordAtPosition(n);if(null!==r){for(var l=i.substring(0,r.endColumn-1),s=!1,u=e,d=l.length;d>=0;d--)if(" "===l[d]){l=i.substring(d+1,l.length);break}if(l.includes(".")&&(s=!0),s)for(var c=l.substring(0,l.length).split("."),g=0;g<c.length-1;g++){var m=c[g].replace(/[{(<]/,"");if(!u.hasOwnProperty(m))return o;u=u[m]}if(void 0!==u&&void 0!==u[r.word]){var f=u[r.word].__completions;if(void 0!==f){var p=f.documentation;return"object"===(0,a.Z)(f.documentation)&&(p=f.documentation.value),{range:new monaco.Range(n.lineNumber,r.startColumn,n.lineNumber,r.endColum),contents:[{value:"**"+f.detail+"**"},{value:p}]}}}return o}}})}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}""===n.p&&(n.p=window.twigfieldBaseAssetsUrl);var g={language:"twig",theme:"vs",automaticLayout:!0,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,renderLineHighlight:!1,wordWrap:!0,scrollBeyondLastLine:!1,scrollbar:{vertical:"hidden",horizontal:"auto"},fontSize:14,fontFamily:'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',minimap:{enabled:!1}};function m(e,t,n,o,a,l){var d=document.getElementById(e),m=document.createElement("div"),f=JSON.parse(a);m.id=e+"-monaco-editor",m.classList.add("p-2","box-content","monaco-editor-twigfield-icon","h-full"),""!==n&&m.classList.add(n),m.tabIndex=0,d.parentNode.insertBefore(m,d),d.style.display="none";var p=c(c(c({},g),JSON.parse(o)),{value:d.value}),v=i.editor.create(m,p);if(v.onDidChangeModelContent((function(e){d.value=v.getValue()})),"singleLineEditor"in f&&f.singleLineEditor){var w=v.getModel(),h=w.getValue();w.setValue(h.replace(/\s\s+/g," ")),v.addCommand(i.KeyMod.CtrlCmd|i.KeyCode.KeyF,(function(){})),v.addCommand(i.KeyCode.Enter,(function(){}),"!suggestWidgetVisible"),v.onDidPaste((function(e){for(var t="",n=w.getLineCount(),o=0;o<n;o+=1)t+=w.getLineContent(o+1);t=t.replace(/\s\s+/g," "),w.setValue(t),v.setPosition({column:t.length+1,lineNumber:1})}))}!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Twigfield",t=arguments.length>1?arguments[1]:void 0,n="";if(null!=e&&(n="?fieldType="+e),void 0===window.twigfieldFieldTypes&&(window.twigfieldFieldTypes={}),!(e in window.twigfieldFieldTypes)){window.twigfieldFieldTypes[e]=e;var o=new XMLHttpRequest;o.open("GET",t+n,!0),o.onload=function(){if(o.status>=200&&o.status<400){var e=JSON.parse(o.responseText);void 0===window.monacoAutocompleteItems&&(window.monacoAutocompleteItems={});for(var t=0,n=Object.entries(e);t<n.length;t++){var i=(0,r.Z)(n[t],2),a=(i[0],i[1]);a.name in window.monacoAutocompleteItems||(window.monacoAutocompleteItems[a.name]=a.name,s(a.__completions,a.type,a.hasSubProperties),u(a.__completions,a.type))}}else console.log("Autocomplete endpoint failed with status "+o.status)},o.send()}}(t,l);var b=function(){var e=v.getLayoutInfo().width,t=Math.min(1e3,v.getContentHeight());m.style.height="".concat(t,"px");try{!0,v.layout({width:e,height:t})}finally{!1}};v.onDidContentSizeChange(b),b()}window.makeMonacoEditor=m},9086:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[216,532],(function(){return t(5092),t(9086),t(1828)}));e.O()}]);
//# sourceMappingURL=javascript-editor.js.map