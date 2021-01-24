function header(rootDir){
    $.ajax({
        url: rootDir + "header.html",
        cache: false,
        async: false,
        dataType: "html",
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}

function fooder(rootDir){
    $.ajax({
        url: rootDir + "fooder.html",
        cache: false,
        async: false,
        dataType: "html",
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}