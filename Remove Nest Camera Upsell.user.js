// ==UserScript==
// @name         Remove Nest Camera Upsell
// @version      0.1
// @description  remove upsell
// @author       AEtherSurfer
// @match        https://home.nest.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(()=>{document.querySelectorAll(".player-footer").forEach(e=>{console.log("Removing "+e); e.remove();});}, 5000);
})();