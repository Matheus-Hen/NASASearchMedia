$('#submit').click(function (e) { 
    e.preventDefault();
    var data = '&date='+$('#dataDesejada').val();
    console.log(data)
    $.ajax({
        type: "GET",
        url: "https://api.nasa.gov/planetary/apod?api_key=CpFdlhOjhGTw5cC8gvoP6NqGCQ3efe50nEzFv2Ft" + data,
        success: function (response) {
            Select(response);
        },
        error: function(response){
            console.log(response);
        } 
    });
});


function Select(nasa){
    CriaTitulo(nasa)
    var verify = nasa.url.split('')
    var i = verify.length
    console.log(verify[i-1], verify[i-2], verify[i-3])
    if(verify[i-1] == 'g' && verify[i-2] == 'p' && verify[i-3] == 'j')CriaImg(nasa)
    else if(verify[i-1] == 'f' && verify[i-2] == 'i' && verify[i-3] == 'g')CriaImg(nasa)
    else CriaVideo(nasa)
    CriaDescri(nasa)
}

function CriaTitulo(nasa){
    $('h1').remove();
    var Tit = document.createElement('h1')
    $('#text').append(Tit);
    $('h1').text(nasa.title);
    $('h1').css('text-decoration', 'white');
}

function CriaImg(nasa) {
    $('video').remove();
    $('img').remove();
    var Img = document.createElement('img')
    $('#text').append(Img);
    Img.src = nasa.url
}
function CriaVideo(nasa){
    $('img').remove();
    $('video').remove();
    var vid = document.createElement('iframe')
    $('#text').append(vid);
    vid.src = nasa.url
}
function CriaDescri(nasa) {
    $('p').remove();
    var descri = document.createElement('p')
    $('#text').append(descri);
    $('p').text(nasa.explanation);
}

