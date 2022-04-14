$("#imagem").hide()
$("#video").hide()


$("#submit").click(function (event) {
    event.preventDefault()
    const data = $("#data").val();

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?date=${data}&api_key=bcYLQye5tN4bG30NzAiP8Y0OWJSlgEaY1ndxDS3Q`,
        success: function (result) {
            if (result.media_type == "image") {
                $("#nome").text(result.title)
                $("#imagem").attr("src", `${result.hdurl}`)
                $("#imagem").show()
                $("#video").hide()

            } else {
                $("#video").attr("src", `${result.url}`)
                $("#video").show()
                $("#imagem").hide()

            }
        }
    })

})