$('#MM-Language-FR').click(function(e){
    e.stopPropagation();
    translate();
  });
  
  function translate(){
    var sourceText = $('.path-frontpage').html();
    var targetLang = 'fr';
    
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + targetLang + "&dt=t&q=" + encodeURIComponent(sourceText);
    
    $.getJSON(url, function(data) {
        var translatedContent = '';
        for (var i=0; i<data[0].length; i++){
            translatedContent += data[0][i][0];
        }
        $('.path-frontpage').html(translatedContent);
    });
  }
  