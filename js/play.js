var playId = sessionStorage.getItem("playId");
var content = "";

$(document).ready(function() {

    if (playId === "playButton1" || playId === "botaoAssistir1" || playId === "botaoAssistirH1"){

        content = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/FH_Pm-0kuFc?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        $("#divContainer").append(content);

    }
    else if (playId === "playButton2" || playId === "botaoAssistir2" || playId === "botaoAssistirH2"){

        content = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/RCzOQmCiWSM?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        $("#divContainer").append(content);

    }
    

});

