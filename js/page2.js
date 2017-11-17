var Workwell = require("workwell");
var $ = require("jquery");

function renderUI() {

}

$(document).ready(function () {
    Workwell.setServiceToken(window.localStorage.serviceToken);
    renderUI();
});