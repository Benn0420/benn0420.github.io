$(document).ready(function () {
    $(".experience-bar").click(function () {
        var experienceId = $(this).attr("id");
        var dataUrl = "resources/education_data.txt";

        $.get(dataUrl, function (data) {
            var lines = data.split("\n");
            for (var i = 0; i < lines.length; i++) {
                var parts = lines[i].split("|");
                if (parts[0] === experienceId) {
                    var title = parts[1];
                    var duration = parts[2];
                    var description = parts[3];
                    var imageUrl = "resources/" + parts[4] + ".png";

                    // Update education text and image
                    $(".education-title").html("<p><strong>" + title + "</strong> - " + duration + "</p>");
                    $(".education-text").html("<p>" + description + "</p>");
                    $(".education-image img").attr("src", imageUrl);
                    break;
                }
            }
        });
    });
});
