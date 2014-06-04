$(document).on("pagecreate", "body", function () {
    $(document).on("swipeleft swiperight", "body", function (event) {
        if ($(".ui-page-active").jqmData("panel") !== "open") {
            if (event.type === "swipeleft") {
                $("#right-panel").panel("open");
            }
            else if (event.type === "swiperight") {
                $("#left-panel").panel("open");
            }
        }
    });
});