let  data = $("#data").val();
let url = "https://api.nasa.gov/planetary/apod?" ;
let chave = "https://api.nasa.gov/planetary/apod";


$("#pesquisar").click( function (event) {
    event.preventDefault()
});

function resultado (result) {
    $.ajax ({
        url: `https://api.nasa.gov/planetary/apod? api_key=bcYLQye5tN4bG30NzAiP8Y0OWJSlgEaY1ndxDS3Q=${result}`,
 sucess: function(resposta) {
     $("#nome").text(result.date)
     $("#imagem").attr("src", result.url)

 }
    })
}

