/*! @webxl/accessibility v0.1.0 | UNLICENSED | WebXL Digital Solutions */
"use strict";(()=>{var h={lang:"he",position:"left",primary:"#14b8a6",buttonColor:null,statementUrl:null,nonce:null,fontUrl:null};function te(e){if(!e)return null;let t=e.trim().toLowerCase();return t.startsWith("he")||t==="iw"?"he":t.startsWith("en")?"en":null}function We(e){if(!e)return null;let t=e.trim().toLowerCase();return t==="left"||t==="right"?t:null}function ne(e,t=null){let n=te(e.lang)??te(t)??h.lang,o=We(e.position)??h.position,a=e.primary?.trim()||h.primary,r=e.buttonColor?.trim()||h.buttonColor,s=e.statementUrl?.trim()||h.statementUrl,l=e.nonce?.trim()||h.nonce,x=e.fontUrl?.trim()||h.fontUrl;return{lang:n,position:o,primary:a,buttonColor:r,statementUrl:s,nonce:l,fontUrl:x}}var oe="webxl-a11y-effects",ie="webxl-a11y-reading-guide",ae="webxl-a11y-dyslexia-font",He=`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><path d='M6 2l30 20-13 2 8 16-6 3-8-16-11 8z' fill='black' stroke='white' stroke-width='2'/></svg>") 4 2, auto`,Ne=`
html[data-webxl-a11y-font] {
  font-size: calc(100% * var(--webxl-a11y-font-scale, 1)) !important;
}
html[data-webxl-a11y-line] body * {
  line-height: var(--webxl-a11y-line-height, 1.5) !important;
}
html[data-webxl-a11y-letter] body * {
  letter-spacing: var(--webxl-a11y-letter-spacing, 0) !important;
}
html[data-webxl-a11y-word] body * {
  word-spacing: var(--webxl-a11y-word-spacing, 0) !important;
}
html[data-webxl-a11y-filter] {
  filter: var(--webxl-a11y-filter, none) !important;
}
html[data-webxl-a11y-contrast] body,
html[data-webxl-a11y-contrast] body * {
  background-color: #000 !important;
  color: #fff !important;
  border-color: #fff !important;
}
html[data-webxl-a11y-contrast] body a,
html[data-webxl-a11y-contrast] body a * {
  color: #ffff00 !important;
}
html[data-webxl-a11y-links] body a {
  text-decoration: underline !important;
  outline: 2px solid #ffbf00 !important;
  background-color: #fff8d0 !important;
  color: #00309a !important;
}
html[data-webxl-a11y-headings] body :is(h1, h2, h3, h4, h5, h6) {
  outline: 2px dashed #14b8a6 !important;
  outline-offset: 2px !important;
}
html[data-webxl-a11y-hide-images] body :is(img, picture, svg, video) {
  visibility: hidden !important;
}
html[data-webxl-a11y-cursor] body,
html[data-webxl-a11y-cursor] body * {
  cursor: ${He} !important;
}
html[data-webxl-a11y-dyslexia] body * {
  font-family: "OpenDyslexic", "Comic Sans MS", sans-serif !important;
}
html[data-webxl-a11y-readable] body * {
  font-family: Arial, Helvetica, system-ui, sans-serif !important;
}
html[data-webxl-a11y-stop-anim] *,
html[data-webxl-a11y-stop-anim] *::before,
html[data-webxl-a11y-stop-anim] *::after {
  animation-duration: 0s !important;
  animation-play-state: paused !important;
  transition-duration: 0s !important;
  scroll-behavior: auto !important;
}
html[data-webxl-a11y-reading] body {
  max-width: 70ch !important;
  margin-inline: auto !important;
  line-height: 1.8 !important;
  background: #fbfbf8 !important;
}
html[data-webxl-a11y-reading] body :is(aside, nav, [role="banner"], [role="complementary"]) {
  opacity: 0.25 !important;
}
.${ie} {
  position: fixed !important;
  left: 0 !important;
  top: var(--webxl-a11y-guide-top, -9999px) !important;
  width: 100% !important;
  height: 28px !important;
  background: rgba(20, 184, 166, 0.18) !important;
  border-top: 2px solid rgba(20, 184, 166, 0.9) !important;
  border-bottom: 2px solid rgba(20, 184, 166, 0.9) !important;
  pointer-events: none !important;
  z-index: 2147483640 !important;
  transform: translateY(-50%) !important;
}
`,E=null,$=null;function De(e,t){let n=e.getElementById(oe);if(n?t&&n.getAttribute("nonce")!==t&&n.setAttribute("nonce",t):(n=e.createElement("style"),n.id=oe,t&&n.setAttribute("nonce",t),n.textContent=Ne,e.head.appendChild(n),E=null,$=null),E&&$===n)return;let o=n.sheet;if(o){let a=o.insertRule(":root {}",o.cssRules.length);E=o.cssRules[a].style,$=n}}function y(e,t,n){E&&(t&&n!==void 0?E.setProperty(e,n):E.removeProperty(e))}function d(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}function Fe(e){let t=[];return e.invert&&t.push("invert(1) hue-rotate(180deg)"),e.monochrome&&t.push("grayscale(1)"),t.join(" ")}var w=null,W=null;function Ie(e){w||(w=e.createElement("div"),w.className=ie,w.setAttribute("aria-hidden","true"),e.body.appendChild(w),W=t=>y("--webxl-a11y-guide-top",!0,`${t.clientY}px`),e.addEventListener("pointermove",W))}function Re(e){W&&e.removeEventListener("pointermove",W),W=null,w?.remove(),w=null,y("--webxl-a11y-guide-top",!1)}var V=null;function re(e){V=e&&e.trim()?e.trim():null}function Me(e,t){if(e.getElementById(ae))return;let n=e.createElement("style");n.id=ae,t&&n.setAttribute("nonce",t);let o=V?`url("${V}") format("woff2"), local("OpenDyslexic")`:'local("OpenDyslexic")';n.textContent=`@font-face { font-family: "OpenDyslexic"; font-display: swap; src: ${o}; }`,e.head.appendChild(n)}function j(e,t,n){De(e,n);let o=e.documentElement;d(o,"data-webxl-a11y-font",t.fontScale>1),y("--webxl-a11y-font-scale",t.fontScale>1,String(t.fontScale)),d(o,"data-webxl-a11y-line",t.lineHeight>1),y("--webxl-a11y-line-height",t.lineHeight>1,String(t.lineHeight)),d(o,"data-webxl-a11y-letter",t.letterSpacing>0),y("--webxl-a11y-letter-spacing",t.letterSpacing>0,`${t.letterSpacing}em`),d(o,"data-webxl-a11y-word",t.wordSpacing>0),y("--webxl-a11y-word-spacing",t.wordSpacing>0,`${t.wordSpacing}em`);let a=Fe(t);d(o,"data-webxl-a11y-filter",a.length>0),y("--webxl-a11y-filter",a.length>0,a),d(o,"data-webxl-a11y-contrast",t.contrast),d(o,"data-webxl-a11y-links",t.highlightLinks),d(o,"data-webxl-a11y-headings",t.highlightHeadings),d(o,"data-webxl-a11y-hide-images",t.hideImages),d(o,"data-webxl-a11y-cursor",t.bigCursor),d(o,"data-webxl-a11y-readable",t.readableFont),d(o,"data-webxl-a11y-stop-anim",t.stopAnimations),d(o,"data-webxl-a11y-reading",t.readingMode),t.dyslexiaFont&&Me(e,n),d(o,"data-webxl-a11y-dyslexia",t.dyslexiaFont),t.readingGuide?Ie(e):Re(e)}var H={fontScale:1,lineHeight:1,letterSpacing:0,wordSpacing:0,contrast:!1,invert:!1,monochrome:!1,highlightLinks:!1,highlightHeadings:!1,hideImages:!1,bigCursor:!1,dyslexiaFont:!1,readableFont:!1,stopAnimations:!1,readingGuide:!1,readingMode:!1},Y={fontScale:{min:1,max:1.6,step:.1},lineHeight:{min:1,max:2,step:.25},letterSpacing:{min:0,max:.3,step:.05},wordSpacing:{min:0,max:.5,step:.1}},le="webxl-a11y:v1";function Oe(e,t,n){return Math.min(n,Math.max(t,e))}function Ke(e){return Math.round(e*100)/100}function Be(e,t){let n=typeof e[t]=="number"?e[t]:H[t],o=Y[t];return Ke(Oe(n,o.min,o.max))}function Ge(e,t){return typeof e[t]=="boolean"?e[t]:H[t]}var Ue=["contrast","invert","monochrome","highlightLinks","highlightHeadings","hideImages","bigCursor","dyslexiaFont","readableFont","stopAnimations","readingGuide","readingMode"],_e=["fontScale","lineHeight","letterSpacing","wordSpacing"];function se(e){let t=e&&typeof e=="object"?e:{},n={...H};for(let o of _e)n[o]=Be(t,o);for(let o of Ue)n[o]=Ge(t,o);return n}function de(e){let t=ze(e),n=new Set;function o(){for(let r of n)r(t)}function a(){try{e?.setItem(le,JSON.stringify(t))}catch{}}return{get:()=>t,set:r=>{t=se({...t,...r}),a(),o()},reset:()=>{t=H,a(),o()},subscribe:r=>(n.add(r),()=>n.delete(r))}}function ze(e){try{let t=e?.getItem(le);return se(t?JSON.parse(t):null)}catch{return H}}var N="0.1.0",ce="v1";function pe(e){let t=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());if(!t)return null;let n=t[1];n.length===3&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);let o=parseInt(n.slice(0,2),16),a=parseInt(n.slice(2,4),16),r=parseInt(n.slice(4,6),16);return[o,a,r]}function Pe([e,t,n]){let o=a=>{let r=a/255;return r<=.03928?r/12.92:((r+.055)/1.055)**2.4};return .2126*o(e)+.7152*o(t)+.0722*o(n)}function ge(e){let t=pe(e);if(!t)return"#ffffff";let n=Pe(t),o=1.05/(n+.05);return(n+.05)/.05>=o?"#000000":"#ffffff"}function ue(e,t){if(pe(t))return t;let n=e.createElement("canvas").getContext("2d");return n?(n.fillStyle="#000",n.fillStyle=t,n.fillStyle):t}function me(e){let{doc:t}=e,n=t.createElement("div");n.className="wx-control wx-stepper";let o=t.createElement("span");o.className="wx-control-label",o.textContent=e.label;let a=t.createElement("div");a.className="wx-stepper-controls";let r=t.createElement("button");r.type="button",r.className="wx-stepper-btn",r.setAttribute("aria-label",e.decreaseLabel),r.textContent="\u2212";let s=t.createElement("span");s.className="wx-stepper-value",s.setAttribute("aria-live","polite");let l=t.createElement("button");l.type="button",l.className="wx-stepper-btn",l.setAttribute("aria-label",e.increaseLabel),l.textContent="+",a.append(r,s,l),n.append(o,a);function x(b){return Math.round(b*10)/10}function C(){let b=e.get();s.textContent=e.format(b),r.disabled=b<=e.min+1e-9,l.disabled=b>=e.max-1e-9}return r.addEventListener("click",()=>{e.set(x(Math.max(e.min,e.get()-e.step)))}),l.addEventListener("click",()=>{e.set(x(Math.min(e.max,e.get()+e.step)))}),C(),{el:n,update:C}}function xe(e){let{doc:t}=e,n=t.createElement("button");n.type="button",n.className="wx-toggle",n.setAttribute("role","switch");let o=t.createElement("span");o.className="wx-toggle-label",o.textContent=e.label;let a=t.createElement("span");a.className="wx-toggle-track",a.setAttribute("aria-hidden","true");let r=t.createElement("span");r.className="wx-toggle-knob",a.appendChild(r),n.append(o,a);function s(){let l=e.get();n.setAttribute("aria-checked",l?"true":"false"),n.dataset.on=l?"true":"false"}return n.addEventListener("click",()=>e.set(!e.get())),s(),{el:n,update:s}}function be(e,t){let n=e.createElement("section");n.className="wx-section";let o=e.createElement("h3");return o.className="wx-section-title",o.textContent=t,n.appendChild(o),{el:n,add:a=>n.appendChild(a.el)}}var $e={buttonLabel:"\u05E4\u05EA\u05D9\u05D7\u05EA \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",panelTitle:"\u05DB\u05DC\u05D9 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",close:"\u05E1\u05D2\u05D9\u05E8\u05D4",reset:"\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA",statementLink:"\u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",poweredBy:"\u05DE\u05D5\u05E4\u05E2\u05DC \u05E2\u05DC \u05D9\u05D3\u05D9 WebXL",langToggle:"EN",resetAnnounce:"\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D0\u05D5\u05E4\u05E1\u05D5",secText:"\u05D4\u05EA\u05D0\u05DE\u05D5\u05EA \u05D8\u05E7\u05E1\u05D8",secVisual:"\u05D4\u05EA\u05D0\u05DE\u05D5\u05EA \u05EA\u05E6\u05D5\u05D2\u05D4",secBehaviour:"\u05DB\u05DC\u05D9 \u05E7\u05E8\u05D9\u05D0\u05D4",fontScale:"\u05D2\u05D5\u05D3\u05DC \u05D2\u05D5\u05E4\u05DF",lineHeight:"\u05D2\u05D5\u05D1\u05D4 \u05E9\u05D5\u05E8\u05D4",letterSpacing:"\u05E8\u05D9\u05D5\u05D5\u05D7 \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA",wordSpacing:"\u05E8\u05D9\u05D5\u05D5\u05D7 \u05DE\u05D9\u05DC\u05D9\u05DD",decrease:"\u05D4\u05E7\u05D8\u05E0\u05D4",increase:"\u05D4\u05D2\u05D3\u05DC\u05D4",contrast:"\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4",invert:"\u05D4\u05D9\u05E4\u05D5\u05DA \u05E6\u05D1\u05E2\u05D9\u05DD",monochrome:"\u05D2\u05D5\u05D5\u05E0\u05D9 \u05D0\u05E4\u05D5\u05E8",highlightLinks:"\u05D4\u05D3\u05D2\u05E9\u05EA \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",highlightHeadings:"\u05D4\u05D3\u05D2\u05E9\u05EA \u05DB\u05D5\u05EA\u05E8\u05D5\u05EA",hideImages:"\u05D4\u05E1\u05EA\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",bigCursor:"\u05E1\u05DE\u05DF \u05D2\u05D3\u05D5\u05DC",dyslexiaFont:"\u05D2\u05D5\u05E4\u05DF \u05D3\u05D9\u05E1\u05DC\u05E7\u05E6\u05D9\u05D4",readableFont:"\u05D2\u05D5\u05E4\u05DF \u05E7\u05E8\u05D9\u05D0",stopAnimations:"\u05E2\u05E6\u05D9\u05E8\u05EA \u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D5\u05EA",readingGuide:"\u05DE\u05D3\u05E8\u05D9\u05DA \u05E7\u05E8\u05D9\u05D0\u05D4",readingMode:"\u05DE\u05E6\u05D1 \u05E7\u05E8\u05D9\u05D0\u05D4"},Ve={buttonLabel:"Open accessibility menu",panelTitle:"Accessibility tools",close:"Close",reset:"Reset settings",statementLink:"Accessibility statement",poweredBy:"Powered by WebXL",langToggle:"\u05E2\u05D1",resetAnnounce:"Accessibility settings reset",secText:"Text adjustments",secVisual:"Display adjustments",secBehaviour:"Reading tools",fontScale:"Font size",lineHeight:"Line height",letterSpacing:"Letter spacing",wordSpacing:"Word spacing",decrease:"Decrease",increase:"Increase",contrast:"High contrast",invert:"Invert colours",monochrome:"Greyscale",highlightLinks:"Highlight links",highlightHeadings:"Highlight headings",hideImages:"Hide images",bigCursor:"Big cursor",dyslexiaFont:"Dyslexia font",readableFont:"Readable font",stopAnimations:"Stop animations",readingGuide:"Reading guide",readingMode:"Reading mode"},je={he:$e,en:Ve};function fe(e){return e==="he"?"rtl":"ltr"}function he(e){let t=je[e];return n=>t[n]??n}var ye=`
:host {
  --wx-primary: #14b8a6;
  --wx-ink: #0f172a;
  --wx-paper: #ffffff;
  --wx-line: #e2e8f0;
  --wx-muted: #64748b;
  all: initial;
}
* { box-sizing: border-box; }

.wx-button {
  position: fixed;
  bottom: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  /* Background defaults to the accent; icon colour is auto-contrasted. */
  background: var(--wx-button-bg, var(--wx-primary));
  color: var(--wx-button-fg, #fff);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  z-index: 2147483646;
  transition: transform 0.15s ease;
}
/* Physical corner placement (class-based so no inline styles hit a strict CSP). */
.wx-button.wx-pos-left, .wx-panel.wx-pos-left { left: 20px; right: auto; }
.wx-button.wx-pos-right, .wx-panel.wx-pos-right { right: 20px; left: auto; }

.wx-button:hover { transform: scale(1.06); }
.wx-button:focus-visible { outline: 3px solid var(--wx-button-fg, #fff); outline-offset: 2px; }
.wx-button svg { width: 30px; height: 30px; }

.wx-panel {
  position: fixed;
  bottom: 88px;
  width: 340px;
  max-width: calc(100vw - 40px);
  /* dvh tracks the visible viewport (mobile browser chrome included), so the
     panel never grows taller than the screen and pushes its header \u2014 and the
     close button \u2014 off the top. vh is the fallback for old engines. */
  max-height: calc(100vh - 120px);
  max-height: calc(100dvh - 120px);
  overflow-y: auto;
  background: var(--wx-paper);
  color: var(--wx-ink);
  border: 1px solid var(--wx-line);
  border-radius: 14px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
  z-index: 2147483647;
  font-family: system-ui, -apple-system, "Segoe UI", Arial, sans-serif;
  font-size: 15px;
}
.wx-panel[hidden] { display: none; }

.wx-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 14px 16px;
  /* Pinned to the top of the scrolling panel so the close button is always
     reachable, however tall the content. */
  position: sticky;
  top: 0;
  z-index: 1;
  /* Dark surface (not the accent) so white text always clears AA contrast,
     regardless of the client's configured --wx-primary. The accent shows as
     the bottom border. */
  background: var(--wx-ink);
  color: #fff;
  border-bottom: 3px solid var(--wx-primary);
  border-radius: 14px 14px 0 0;
}
.wx-panel-title { font-size: 16px; font-weight: 700; margin: 0; }
.wx-panel-header button {
  background: rgba(255, 255, 255, 0.18);
  border: none;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 15px;
}
.wx-panel-header button:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }

.wx-panel-body { padding: 14px 16px; }

.wx-panel-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid var(--wx-line);
  font-size: 12px;
  color: var(--wx-muted);
}
.wx-panel-footer a { color: var(--wx-primary); text-decoration: none; }
.wx-panel-footer a:hover { text-decoration: underline; }

/* Header language toggle + reset live next to the title. */
.wx-header-actions { display: flex; align-items: center; gap: 8px; }
.wx-lang-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.18);
  border: none;
  color: #fff;
  height: 30px;
  padding: 0 12px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  line-height: 1;
}
.wx-lang-toggle:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }

/* Sections + controls. */
.wx-section { margin-bottom: 16px; }
.wx-section-title {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--wx-muted);
}
.wx-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 0;
}
.wx-control-label { font-size: 14px; }

.wx-stepper-controls { display: flex; align-items: center; gap: 4px; }
.wx-stepper-btn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--wx-line);
  background: var(--wx-paper);
  color: var(--wx-ink);
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
}
.wx-stepper-btn:hover:not(:disabled) { border-color: var(--wx-primary); color: var(--wx-primary); }
.wx-stepper-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.wx-stepper-btn:focus-visible { outline: 2px solid var(--wx-primary); outline-offset: 1px; }
.wx-stepper-value { min-width: 48px; text-align: center; font-variant-numeric: tabular-nums; font-size: 14px; }

/* Toggle switch. */
.wx-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  padding: 8px 0;
  border: none;
  background: none;
  color: var(--wx-ink);
  cursor: pointer;
  font: inherit;
  text-align: start;
}
.wx-toggle-label { font-size: 14px; }
.wx-toggle-track {
  flex: 0 0 auto;
  width: 40px;
  height: 22px;
  border-radius: 11px;
  background: #cbd5e1;
  position: relative;
  transition: background 0.15s ease;
}
.wx-toggle-knob {
  position: absolute;
  top: 2px;
  inset-inline-start: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: inset-inline-start 0.15s ease;
}
.wx-toggle[data-on='true'] .wx-toggle-track { background: var(--wx-primary); }
.wx-toggle[data-on='true'] .wx-toggle-knob { inset-inline-start: 20px; }
.wx-toggle:focus-visible { outline: 2px solid var(--wx-primary); outline-offset: 2px; border-radius: 6px; }

.wx-reset {
  width: 100%;
  margin-top: 4px;
  padding: 10px;
  border: 1px solid var(--wx-line);
  background: var(--wx-paper);
  color: var(--wx-ink);
  border-radius: 9px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}
.wx-reset:hover { border-color: var(--wx-primary); color: var(--wx-primary); }
.wx-reset:focus-visible { outline: 2px solid var(--wx-primary); outline-offset: 1px; }

/* Visually-hidden live region for announcements. */
.wx-sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ---- Mobile (phones) ---- */
@media (max-width: 480px) {
  /* Smaller, less obtrusive button. */
  .wx-button { width: 46px; height: 46px; bottom: 14px; }
  .wx-button.wx-pos-left { left: 14px; }
  .wx-button.wx-pos-right { right: 14px; }
  .wx-button svg { width: 24px; height: 24px; }

  /* Full-width bottom sheet that always fits the visible viewport, with the
     sticky header (and close button) guaranteed on-screen. */
  .wx-panel {
    width: auto;
    max-width: none;
    left: 8px;
    right: 8px;
    bottom: 68px;
    max-height: calc(100dvh - 88px);
  }
  .wx-panel.wx-pos-left,
  .wx-panel.wx-pos-right { left: 8px; right: 8px; }
}
`;var Ye=`
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
  <circle cx="12" cy="3.5" r="2.2"/>
  <path d="M21 7.5c0 .7-.5 1.2-1.2 1.3L15 9.6V20a1.2 1.2 0 1 1-2.4 0v-5.4h-1.2V20A1.2 1.2 0 1 1 9 20V9.6L4.2 8.8A1.25 1.25 0 0 1 4.6 6.3L9.9 7.2c1.4.24 2.8.24 4.2 0l5.3-.9c.8-.14 1.6.4 1.6 1.2z"/>
</svg>`,Xe='button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';function ve(e,t,n,o={}){let a=he(t.lang),r=fe(t.lang),s=e.createElement("div");s.setAttribute("data-webxl-a11y",N);let l=s.attachShadow({mode:"open"}),x=e.createElement("style");t.nonce&&x.setAttribute("nonce",t.nonce),x.textContent=ye,l.appendChild(x);let C=ue(e,t.buttonColor??t.primary),b=ge(C),M=e.createElement("style");t.nonce&&M.setAttribute("nonce",t.nonce),M.textContent=`:host { --wx-primary: ${t.primary}; --wx-button-bg: ${C}; --wx-button-fg: ${b}; }`,l.appendChild(M);let p=e.createElement("button");p.className="wx-button",p.type="button",p.setAttribute("aria-label",a("buttonLabel")),p.setAttribute("aria-haspopup","dialog"),p.setAttribute("aria-expanded","false"),p.innerHTML=Ye,we(p,t.position),l.appendChild(p);let g=e.createElement("div");g.className="wx-panel",g.setAttribute("role","dialog"),g.setAttribute("aria-modal","false"),g.setAttribute("aria-label",a("panelTitle")),g.setAttribute("dir",r),g.hidden=!0,we(g,t.position);let O=e.createElement("div");O.className="wx-panel-header";let K=e.createElement("h2");K.className="wx-panel-title",K.textContent=a("panelTitle");let B=e.createElement("div");B.className="wx-header-actions";let v=e.createElement("button");v.type="button",v.className="wx-lang-toggle",v.textContent=a("langToggle"),v.setAttribute("aria-label",a("langToggle"));let f=e.createElement("button");f.type="button",f.className="wx-close",f.setAttribute("aria-label",a("close")),f.textContent="\u2715",B.append(v,f),O.append(K,B);let D=e.createElement("div");D.className="wx-panel-body";let F=e.createElement("div");F.className="wx-sr-only",F.setAttribute("aria-live","polite");let J=[],G=null;function U(i){G=be(e,a(i)),D.appendChild(G.el)}function Q(i){J.push(i),G?.add(i)}function I(i,u,z){let P=Y[i];Q(me({doc:e,label:a(u),decreaseLabel:a("decrease"),increaseLabel:a("increase"),min:P.min,max:P.max,step:P.step,get:()=>n.get()[i],set:Te=>n.set({[i]:Te}),format:z}))}function c(i,u){Q(xe({doc:e,label:a(u),get:()=>n.get()[i],set:z=>n.set({[i]:z})}))}let Le=i=>`${Math.round(i*100)}%`,Z=i=>i===0?"0":`${i.toFixed(2)}em`;U("secText"),I("fontScale","fontScale",Le),I("lineHeight","lineHeight",i=>`${i.toFixed(2)}\xD7`),I("letterSpacing","letterSpacing",Z),I("wordSpacing","wordSpacing",Z),U("secVisual"),c("contrast","contrast"),c("invert","invert"),c("monochrome","monochrome"),c("highlightLinks","highlightLinks"),c("highlightHeadings","highlightHeadings"),c("hideImages","hideImages"),c("bigCursor","bigCursor"),c("dyslexiaFont","dyslexiaFont"),c("readableFont","readableFont"),U("secBehaviour"),c("stopAnimations","stopAnimations"),c("readingGuide","readingGuide"),c("readingMode","readingMode");let L=e.createElement("button");L.type="button",L.className="wx-reset",L.textContent=a("reset"),L.addEventListener("click",()=>{n.reset(),qe(F,a("resetAnnounce"))}),D.append(L,F);let A=e.createElement("div");if(A.className="wx-panel-footer",t.statementUrl){let i=e.createElement("a");i.href=t.statementUrl,i.textContent=a("statementLink"),A.appendChild(i)}else A.appendChild(e.createElement("span"));let k=e.createElement("span"),ee=a("poweredBy"),[Ae,_]=ee.split("WebXL");if(_!==void 0){k.appendChild(e.createTextNode(Ae??""));let i=e.createElement("a");i.href="https://web-xl.com",i.target="_blank",i.rel="noopener noreferrer",i.textContent="WebXL",k.appendChild(i),_&&k.appendChild(e.createTextNode(_))}else k.textContent=ee;A.appendChild(k),g.append(O,D,A),l.appendChild(g);let ke=n.subscribe(i=>{j(e,i,t.nonce);for(let u of J)u.update()});j(e,n.get(),t.nonce);let T=!1;function S(i){T=i,g.hidden=!i,p.setAttribute("aria-expanded",i?"true":"false"),i?f.focus():p.focus()}return p.addEventListener("click",()=>S(!T)),f.addEventListener("click",()=>S(!1)),v.addEventListener("click",()=>{let i=t.lang==="he"?"en":"he";o.onLangChange?.(i)}),l.addEventListener("keydown",i=>{let u=i;T&&(u.key==="Escape"?(u.stopPropagation(),S(!1)):u.key==="Tab"&&Je(g,u))}),e.body.appendChild(s),{host:s,open:()=>S(!0),close:()=>S(!1),toggle:()=>S(!T),isOpen:()=>T,destroy:()=>{ke(),s.remove()}}}function qe(e,t){e.textContent="",e.textContent=t}function Je(e,t){let n=Array.from(e.querySelectorAll(Xe));if(n.length===0)return;t.preventDefault();let o=e.getRootNode(),a=o instanceof ShadowRoot?o.activeElement:e.ownerDocument.activeElement,r=a instanceof HTMLElement?n.indexOf(a):-1,s=n.length,l;r===-1?l=0:t.shiftKey?l=(r-1+s)%s:l=(r+1)%s,n[l].focus()}function we(e,t){e.classList.add(t==="left"?"wx-pos-left":"wx-pos-right")}var Qe="WebXLAccessibility",R="data-webxl-a11y-mounted",Ce="webxl-a11y:lang";function Ze(){try{return window.localStorage}catch{return null}}function et(e){let t=e?.getItem(Ce);return t==="he"||t==="en"?t:null}function tt(){return document.currentScript instanceof HTMLScriptElement?document.currentScript:Array.from(document.querySelectorAll('script[src*="webxl-a11y"]')).at(-1)??null}function nt(e,t){let n=tt(),o=n?{...n.dataset}:{},a=document.documentElement.getAttribute("lang"),r=ne(o,a),s=et(e)??r.lang;return{...r,lang:s,...t}}var X=Ze(),Se=null,m=null;function q(e){if(document.documentElement.hasAttribute(R))return m;document.documentElement.setAttribute(R,N),Se??(Se=de(X));let t=nt(X,e);return re(t.fontUrl),m=ve(document,t,Se,{onLangChange:n=>{try{X?.setItem(Ce,n)}catch{}let o=m?.isOpen()??!1;ot({...e,lang:n}),o&&m?.open()}}),m}function ot(e){m?.destroy(),m=null,document.documentElement.removeAttribute(R),q(e)}function at(){m?.destroy(),m=null,document.documentElement.removeAttribute(R)}var it={version:N,channel:ce,mount:q,destroy:at};window[Qe]=it;function Ee(){q()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ee,{once:!0}):Ee();})();
