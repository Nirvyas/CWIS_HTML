//
//	Template JS File - Builds the base template body and head.
//	Created on 02/26/2014 by Corey O'Brien for Deloitte.
//

$(document).ready(function() {
    $(function () {
        $.get("../layout/head.html", function (data) {
            $("head").prepend(data);
        });
        $.get("../layout/body.html", function (data) {
            $("body").prepend(data);
        });
    });

});