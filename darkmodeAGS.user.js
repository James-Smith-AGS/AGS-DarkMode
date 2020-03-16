// ==UserScript==
// @name         AGS-Dark-Mode
// @version      0.1
// @description  Dark-Mode für's AGS
// @author       James-Smith
// @match        https://www.ag-spiel.de/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

// Schwarz
GM_addStyle("#bg_head {background-color: #2b2b2b}");
GM_addStyle("#chat {background-color: #2b2b2b}");
GM_addStyle("body {background-color: #2b2b2b}");
GM_addStyle("#contentside {background-color: #2b2b2b}");
GM_addStyle("#footer {background-color: #2b2b2b}");

// Grau
GM_addStyle("#bg_menu {background-color: #424242}");
GM_addStyle(".menu {background: #424242}");
GM_addStyle("#nav li li a {background: #424242 !important}");
GM_addStyle("#nav ul ul {border: 3px solid #424242}");
GM_addStyle("#kurs {background: linear-gradient(to bottom, #585858, #333) !important}");


// cyan
GM_addStyle("#content {color: #34acc7}");
GM_addStyle("#ticker {color: #34acc7}");
GM_addStyle("td.menu2 {color: #34acc7}");
GM_addStyle("table.menu2 {color: #34acc7}");

// Lila
GM_addStyle("a {color: #b46aec}");
GM_addStyle("a:visited {color: #b46aec}");
GM_addStyle("button {color: #b46aec}");
GM_addStyle("a.button {color: #b46aec}");
GM_addStyle("#nav li a {color: #b46aec}");

// Hidden
GM_addStyle("#banner {display: none}");

// Chat
GM_addStyle("#chat div {color: #34acc7}");
GM_addStyle("#chat a {color: #b46aec}");

// Ticker
GM_addStyle("#ticker a {color: #b46aec}");


// Zeitung
GM_addStyle("div.artikel {background-color: #2b2b2b !important; color: #34acc7;}");
GM_addStyle("div.artikeltext h2 {color: #b46aec !important}");
GM_addStyle("span.autor a {color: #b46aec !important}");
GM_addStyle("span.showcomments {color: #b46aec !important}");
GM_addStyle(".zeitung-like, .zeitung-dislike {color: #b46aec !important;}");
GM_addStyle(".likelist a {background-color: #666 !important;}");
GM_addStyle("div.kommentar {background-color: #666 !important;}");
GM_addStyle("div.artikel.official .artikeltext {background-color: #666 !important;}");

// Inputs
GM_addStyle("textarea {background-color: #666; color: #34acc7}");
GM_addStyle("input {background-color: #666; color: #34acc7}");
GM_addStyle("select {background-color: #666; color: #34acc7}");

// Tabellen
GM_addStyle("table.dataTable tbody tr {background-color: #424242}");
GM_addStyle("table.dataTable.stripe tbody tr.odd, table.dataTable.display tbody tr.odd {background-color: #000000 !important}");
GM_addStyle("table.normalborder th {background-color: #000; color: #34acc7}");
GM_addStyle("table.normalborder tr.odd td {background-color: #000000}");
GM_addStyle(".thread .posttext div.quote {background-color: #585858}");
