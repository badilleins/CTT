$(document).ready(function () {
    $('.clasess .nav-link[category="all"]')
    $('.nav-link').click(function () {
        var catproduct = $(this).attr('category');
        console.log(catproduct);
        $('.categorias_item').hide();
        $('.categorias_item[category="' + catproduct + '"').show();

    });
    $('.nav-link[category="all"]').click(function () {
        $('.categorias_item').show();
    });
});