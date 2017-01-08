var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    success: function(data) {
      if (callback) {
        callback(data);
      }
    },
    error: function(data) {
      console.log(data);
    },
    data: {
      type: 'video',
      part: 'snippet',
      q: options.query,
      key: options.key,
      maxResults: options.max,
      videoEmbeddable: 'true'
    }
  });
};

window.searchYouTube = searchYouTube;
