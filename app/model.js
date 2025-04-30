export function getPageStuff (pageName) {
    $.get(`../pages/${pageName}.html`, (data) => {
        console.log(`Content loaded for ${pageName}`);
    })

    .done(function (data) {
        $("#app").html(data);
    })

    .fail(function () {
        console.error(`Failed to load content for ${pageName}`);
        $("#app").html("<p>Error loading content</p>");
    });

    $(document).on("click", ".gallery-picture-holder a", function(e) {
    e.preventDefault();
    let href = $(this).attr("href");

    $.get(href, function(data) {
        $("#app").html(data);
    })
    .fail(function() {
        $("#app").html("<p>Error loading gallery page.</p>");
    });
    });
    
    $(document).on("click", ".blog-link", function(e) {
    e.preventDefault();

    let href = $(this).attr("href");

    $.get(href, function(data) {
        $("#app").hide().html(data).fadeIn(300);
    })
    .fail(function() {
        $("#app").html("<p>Error loading blog post.</p>");
    });
});
}