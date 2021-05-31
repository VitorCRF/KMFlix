var playId = sessionStorage.getItem("playId");
var content = "";

$(document).ready(function() {

    if (playId === "playButton1" || playId === "modalAssistir1" || playId === "botaoAssistirH1"){
        content = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/FH_Pm-0kuFc?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        $("#divContainer").append(content);
    }
    else if (playId === "playButton2" || playId === "modalAssistir2" || playId === "botaoAssistirH2"){
        content = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/RCzOQmCiWSM?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        $("#divContainer").append(content);
    }
    else if (playId === "playButton3" || playId === "modalAssistir3" || playId === "botaoAssistirH3") {
        content = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/KTu8iDynwNc?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $("#divContainer").append(content);
    }
    else if (playId === "playButton4" || playId === "modalAssistir4" || playId === "botaoAssistirH4") {
        content = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/zSWdZVtXT7E?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $("#divContainer").append(content);
    }
    else if (playId === "playButton5" || playId === "modalAssistir5" || playId === "botaoAssistirH5") {
        content = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/e01NVCveGkg?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $("#divContainer").append(content);
    }
    else if (playId === "playButton6" || playId === "modalAssistir6" || playId === "botaoAssistirH6") {
        content = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/aeVkbNka9HM?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $("#divContainer").append(content);
    }
    else if (playId === "playButton7" || playId === "modalAssistir7" || playId === "botaoAssistirH7") {
        content = '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/BZ5OCIJVErw?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $("#divContainer").append(content);
    }


});

