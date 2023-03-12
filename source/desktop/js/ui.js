// check gif img
var img = $(".story .story__thumb img");
$.each(img, function () {
    var dataSrc = this.dataset.src;
    if (dataSrc.slice(-4) === ".gif") {
        $(this).closest("figure").css(
            "background", "#eee"
        )
    }
});