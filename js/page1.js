var Workwell = require("workwell");
var $ = require("jquery");

function renderUI() {
    /**
     * A button to open the date time picker
     */
    let button = Workwell.ui.createButton("open date time picker");
    button.onClick(function (el) {
        Workwell.showDateTimePicker({
            success: function (res) {
                Workwell.showMessage(JSON.stringify(res));
            }
        });
    });

    $("body").append(button.toHTMLElement());
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
     * A button to open the action sheet
     */
    button = Workwell.ui.createButton("open action sheet");
    button.onClick(function (el) {
        Workwell.showActionSheet({
            title: "Please choose your favorite mobile platform",
            actions: [
                {
                    id: "iosId",
                    title: "iOS"
                },
                {
                    id: "androidId",
                    title: "Android",
                    type: "default"
                },
                {
                    id: "defaultId",
                    title: "Remove",
                    type: "destructive"
                }
            ],
            success: function (res) {
                Workwell.showMessage(JSON.stringify(res));
            }
        })
    });

    $("body").append(button.toHTMLElement());
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
     * A button to show a native message (toaster)
     */
    button = Workwell.ui.createButton("show message (toaster)");
    button.onClick(function (el) {
        Workwell.showMessage("This is a message !");
    });

    $("body").append(button.toHTMLElement());
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
     * A button to open the camera
     */
    button = Workwell.ui.createButton("open camera");
    button.onClick(function (el) {
        Workwell.chooseImage({
            success: function (res) {
                var url = "data:image/png;base64," + res.base64;
                url = url.replace(/(\r\n|\n|\r)/gm, "");
                $("#image").attr('src', url);
            }
        });
    });

    $("body").append(button.toHTMLElement());
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
     * A button to go to the page 2
     */
    button = Workwell.ui.createButton("go to page 2");
    button.onClick(function (el) {
        Workwell.openWebPage(window.location.href + "../../page_2");
    });

    $("body").append(button.toHTMLElement());
    /**
     * End
     */
}

$(document).ready(function () {
    Workwell.setServiceToken(window.localStorage.serviceToken);
    renderUI();
});