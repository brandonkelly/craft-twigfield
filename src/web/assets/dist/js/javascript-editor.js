/*!
 * @project        twigfield
 * @name           javascript-editor.js
 * @author         Andrew Welch
 * @build          Tue Oct 11 2022 20:57:57 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2022 ©2022 nystudio107.com
 *
 */
"use strict";(self.webpackChunkBuildchain=self.webpackChunkBuildchain||[]).push([[339],{5092:function(e,t,n){n(7941),n(2526),n(7327),n(1539),n(5003),n(4747),n(9337);var i=n(4942),o=(n(4916),n(3123),n(3210),n(5306),n(713)),r=n(8152),a=n(1002);n(6699),n(2023),n(6755),n(6992),n(8783),n(3948),n(1637),n(9714),n(9720),n(8309);function l(e){return e[e.length-1]}function s(e,t,n){monaco.languages.registerCompletionItemProvider("twig",{triggerCharacters:[".","("],provideCompletionItems:function(i,o,r){var s=[],u=e,d=i.getValueInRange({startLineNumber:o.lineNumber,startColumn:0,endLineNumber:o.lineNumber,endColumn:o.column}),c=!0;if(-1===d.lastIndexOf("{")&&(c=!1),-1!==d.substring(d.lastIndexOf("{")).indexOf("}")&&(c=!1),!c&&"TwigExpressionAutocomplete"===t)return null;var g=d.replace("\t","").split(" "),m=g[g.length-1];m.includes("{")&&(m=l(m.split("{"))),m.includes("(")&&(m=l(m.split("("))),m.includes(">")&&(m=l(m.split(">")));var p="."===m.charAt(m.length-1);if(p&&"TwigExpressionAutocomplete"!==t)return null;if(c&&"TwigExpressionAutocomplete"===t&&p){if(!n)return null;var f=m.substring(0,m.length-1).split(".");if(void 0!==e[f[0]]){u=e[f[0]];for(var v=1;v<f.length;v++){if(!u.hasOwnProperty(f[v]))return s;u=u[f[v]]}}}if(void 0!==u)for(var h in u)if(u.hasOwnProperty(h)&&!h.startsWith("__")){var w=u[h].__completions;if(void 0!==w){if(delete w.range,"documentation"in w&&"object"!==(0,a.Z)(w.documentation)){var b=w.documentation;w.documentation={value:b,isTrusted:!0,supportsHtml:!0}}s.push(w)}}return{suggestions:s}}})}function u(e,t,n){monaco.languages.registerHoverProvider("twig",{provideHover:function(t,n){var i={},o=t.getValueInRange({startLineNumber:n.lineNumber,startColumn:0,endLineNumber:n.lineNumber,endColumn:t.getLineMaxColumn(n.lineNumber)}),r=t.getWordAtPosition(n);if(null!==r){for(var l=o.substring(0,r.endColumn-1),s=!1,u=e,d=l.length;d>=0;d--)if(" "===l[d]){l=o.substring(d+1,l.length);break}if(l.includes(".")&&(s=!0),s)for(var c=l.substring(0,l.length).split("."),g=0;g<c.length-1;g++){var m=c[g].replace(/[{(<]/,"");if(!u.hasOwnProperty(m))return i;u=u[m]}if(void 0!==u&&void 0!==u[r.word]){var p=u[r.word].__completions;if(void 0!==p){var f=p.documentation;return"object"===(0,a.Z)(p.documentation)&&(f=p.documentation.value),{range:new monaco.Range(n.lineNumber,r.startColumn,n.lineNumber,r.endColum),contents:[{value:"**"+p.detail+"**"},{value:f}]}}}return i}}})}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=".monaco-placeholder";""===n.p&&(n.p=window.twigfieldBaseAssetsUrl);var m={language:"twig",theme:"vs",automaticLayout:!0,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,renderLineHighlight:!1,wordWrap:!0,scrollBeyondLastLine:!1,scrollbar:{vertical:"hidden",horizontal:"auto"},fontSize:14,fontFamily:'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',minimap:{enabled:!1}};function p(e,t,n,i,a,l){var d=document.getElementById(e),p=document.createElement("div"),f=document.createElement("div"),v=JSON.parse(a);if(p.id=e+"-monaco-editor",p.classList.add("p-2","box-content","monaco-editor-twigfield-icon","h-full"),""!==n){var h=p.classList,w=n.trim().split(/\s+/);h.add.apply(h,w)}p.tabIndex=0,f.innerHTML="Placeholder",f.classList.add("monaco-placeholder"),p.appendChild(f),d.parentNode.insertBefore(p,d),d.style.display="none";var b=c(c(c({},m),JSON.parse(i)),{value:d.value}),y=o.editor.create(p,b);if(y.onDidChangeModelContent((function(e){d.value=y.getValue()})),"singleLineEditor"in v&&v.singleLineEditor){var C=y.getModel(),O=C.getValue();C.setValue(O.replace(/\s\s+/g," ")),y.addCommand(o.KeyMod.CtrlCmd|o.KeyCode.KeyF,(function(){})),y.addCommand(o.KeyCode.Enter,(function(){}),"!suggestWidgetVisible"),y.onDidPaste((function(e){for(var t="",n=C.getLineCount(),i=0;i<n;i+=1)t+=C.getLineContent(i+1);t=t.replace(/\s\s+/g," "),C.setValue(t),y.setPosition({column:t.length+1,lineNumber:1})}))}!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Twigfield",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=new URLSearchParams;void 0!==e&&i.set("fieldType",e),void 0!==t&&i.set("twigfieldOptions",t);var o=n.includes("?")?"&":"?";if(void 0===window.twigfieldFieldTypes&&(window.twigfieldFieldTypes={}),!(e in window.twigfieldFieldTypes)){window.twigfieldFieldTypes[e]=e;var a=new XMLHttpRequest;a.open("GET",n+o+i.toString(),!0),a.onload=function(){if(a.status>=200&&a.status<400){var e=JSON.parse(a.responseText);void 0===window.monacoAutocompleteItems&&(window.monacoAutocompleteItems={});for(var t=0,n=Object.entries(e);t<n.length;t++){var i=(0,r.Z)(n[t],2),o=(i[0],i[1]);o.name in window.monacoAutocompleteItems||(window.monacoAutocompleteItems[o.name]=o.name,s(o.__completions,o.type,o.hasSubProperties),u(o.__completions,o.type))}}else console.log("Autocomplete endpoint failed with status "+a.status)},a.send()}}(t,a,l);var L=function(){var e=y.getLayoutInfo().width,t=Math.min(1e3,y.getContentHeight());p.style.height="".concat(t,"px");try{!0,y.layout({width:e,height:t})}finally{!1}};function P(e){""===e&&(document.querySelector(g).style.display="initial")}y.onDidContentSizeChange(L),L(),P(d.value),y.onDidBlurEditorWidget((function(){P(instance.getValue())})),y.onDidFocusEditorWidget((function(){document.querySelector(g).style.display="none"}))}window.makeMonacoEditor=p},9086:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[216,532],(function(){return t(5092),t(9086),t(1828)}));e.O()}]);
//# sourceMappingURL=javascript-editor.js.map