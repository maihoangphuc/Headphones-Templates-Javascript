//tải phần header và footer

$(function () {
    $(".load-html").each(function () {
        $(this).load(this.dataset.source);
    });
});