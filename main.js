var source = $('#tracks-template').html();
var template = Handlebars.compile(source);
var searchUrl = "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj";
var $results = $('#results');

$(document).on('ready', function() {

  $.get(searchUrl, function (data) {

    // track results are in an array called `items`
    // which is nested in the `tracks` object
    var trackResults = data.tracks.items;

    // pass in data to render in the template
    var trackHtml = template({ tracks: trackResults });

    // append html to the view
    $results.append(trackHtml);
  });

})
