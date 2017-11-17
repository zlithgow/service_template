var Workwell = require("workwell");
var $ = require("jquery");

function getServiceToken() {
    return $.ajax({
        type: 'GET',
        url: './service_token',
        success: function (res) {
            console.log("success fetching service token");
            window.localStorage.serviceToken = res.service_token; // so that we can use it again in other pages
            Workwell.setServiceToken(res.service_token);
            return res;
        },
        error: function (data) {
            return data;
        }
    });
}

function getUserInfo(data_) {
    return new Promise(function (resolve, reject) {
        Workwell.getUserInfo({
            success: function (res) {
                console.log("success get user info");
                resolve(res);
            },
            error: function (data) {
                console.log("error get user info");
                reject(data);
            }
        });
    });
}

function renderUI() {
    /**
     * A list without header and with some tappable items
     */
    let list = Workwell.ui.createList();

    let listItem1 = Workwell.ui.createListItem("item 1");
    listItem1.setTappable(true);
    list.add(listItem1);
    list.add(Workwell.ui.createListItem("item 2"));

    let listItem3 = Workwell.ui.createListItem("item 3");
    listItem3.setTappable(true);
    list.add(listItem3);
    list.add(Workwell.ui.createListItem("item 4"));

    $("body").append(list.toHTMLElement());
    /**
     * End
     */

    /**
     * A BR
     */
    $("body").append("<br>");
    /**
     * End
     */

    /**
     * A list with a header and with only tappable items and some chevron type
     */
    list = Workwell.ui.createList();
    list.setHeader(Workwell.ui.createListHeader("header"));

    listItem1 = Workwell.ui.createListItem("item 1");
    listItem1.setTappable(true);
    list.add(listItem1);

    let listItem2 = Workwell.ui.createListItem("item 2");
    listItem2.setIcon("icon-chevron");
    listItem2.setTappable(true);
    list.add(listItem2);

    listItem3 = Workwell.ui.createListItem("item 3");
    listItem3.setIcon("icon-chevron");
    listItem3.setTappable(true);
    list.add(listItem3);

    let listItem4 = Workwell.ui.createListItem("item 4");
    listItem4.setTappable(true);
    list.add(listItem4);

    $("body").append(list.toHTMLElement());
    /**
     * End
     */

    /**
     * A BR
     */
    $("body").append("<br>");
    /**
     * End
     */

    /**
     * A list with one tappable item that brings you to page1 (onClick)
     */
    list = Workwell.ui.createList();
    list.setHeader(Workwell.ui.createListHeader("header"));

    list.add(Workwell.ui.createListItem("item 1"));

    listItem2 = Workwell.ui.createListItem("go to page 1");
    listItem2.setIcon("icon-chevron");
    listItem2.setTappable(true);
    listItem2.onClick(function (el) {
        Workwell.openWebPage(window.location.href + "./page_1");
    });
    list.add(listItem2);

    list.add(Workwell.ui.createListItem("item 3"));
    list.add(Workwell.ui.createListItem("item 4"));

    $("body").append(list.toHTMLElement());
    /**
     * End
     */

    /**
     * A BR
     */
    $("body").append("<br>");
    /**
     * End
     */

    /**
     * A list with items with thumbnails
     */
    list = Workwell.ui.createList();
    list.setHeader(Workwell.ui.createListHeader("thumbnails"));

    listItem1 = Workwell.ui.createListItem("item 1");
    listItem1.setThumbnail("https://vignette.wikia.nocookie.net/memoryalpha/images/3/3e/Android_icon.png/revision/latest?cb=20140119191312&path-prefix=en");
    list.add(listItem1);

    listItem2 = Workwell.ui.createListItem("item 2");
    listItem2.setThumbnail("https://vignette.wikia.nocookie.net/memoryalpha/images/3/3e/Android_icon.png/revision/latest?cb=20140119191312&path-prefix=en");
    list.add(listItem2);

    listItem3 = Workwell.ui.createListItem("item 3");
    listItem3.setThumbnail("https://vignette.wikia.nocookie.net/memoryalpha/images/3/3e/Android_icon.png/revision/latest?cb=20140119191312&path-prefix=en");
    list.add(listItem3);

    listItem4 = Workwell.ui.createListItem("item 4");
    listItem4.setThumbnail("https://vignette.wikia.nocookie.net/memoryalpha/images/3/3e/Android_icon.png/revision/latest?cb=20140119191312&path-prefix=en");
    list.add(listItem4);

    $("body").append(list.toHTMLElement());
    /**
     * End
     */

    /**
     * A BR
     */
    $("body").append("<br>");
    /**
     * End
     */

    /**
     * A multi-select list
     */
    list = Workwell.ui.createList();
    list.setHeader(Workwell.ui.createListHeader("multi-select list"));
    list.setType("multi-select");

    listItem1 = Workwell.ui.createListItem("item 1");
    list.add(listItem1);

    listItem2 = Workwell.ui.createListItem("item 2");
    list.add(listItem2);

    listItem3 = Workwell.ui.createListItem("item 3");
    list.add(listItem3);

    listItem4 = Workwell.ui.createListItem("item 4");
    list.add(listItem4);

    $("body").append(list.toHTMLElement());
    /**
     * End
     */

    /**
     * A BR
     */
    $("body").append("<br>");
    /**
     * End
     */

    /**
     * A single-select list
     */
    list = Workwell.ui.createList();
    list.setHeader(Workwell.ui.createListHeader("single-select list"));
    list.setType("single-select");

    listItem1 = Workwell.ui.createListItem("item 1");
    list.add(listItem1);

    listItem2 = Workwell.ui.createListItem("item 2");
    list.add(listItem2);

    listItem3 = Workwell.ui.createListItem("item 3");
    list.add(listItem3);

    listItem4 = Workwell.ui.createListItem("item 4");
    list.add(listItem4);

    $("body").append(list.toHTMLElement());
    /**
     * End
     */
}

$(document).ready(function () {
    getServiceToken()
        .then(getUserInfo)
        .then(renderUI)
        .catch(function (error) {
            console.log(error);
        });
});