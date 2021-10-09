<<<<<<< HEAD
$(document).ready(function () {
  var key = 'AIzaSyDolGhoaPsFSYHDaT93tYWbJPhSKfQNiGM'
=======

$(document).ready(function () {
  var key = 'key here'
>>>>>>> b79d9f2a1bcbf61fbd04d7ad7e14e96fd0630034
  var playlistId = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB'
  var URL = 'https://www.googleapis.com/youtube/v3/playlistItems'

  var options = {
    part: 'snippet',
    key: key,
    maxResults: 11,
    playlistId: playlistId,
  }

  loadVids()

  function loadVids() {
    $.getJSON(URL, options, function (data) {
      var id = data.items[0].snippet.resourceId.videoId
      mainVid(id)
      resultsLoop(data)
    })
  }

  function mainVid(id) {
    $('#video').html(`
					<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`)
  }

  function resultsLoop(data) {
    $.each(data.items, function (i, item) {
      var thumb = item.snippet.thumbnails.medium.url
      var title = item.snippet.title
      var desc = item.snippet.description.substring(0, 100)
      var vid = item.snippet.resourceId.videoId

      $('.main').append(`
        <article data-key="${vid}">

            <img src="${thumb}" alt="" class="thumb">
            <div class="details">
                <h4>${title}</h4>
                <p>${desc}</p>
            </div>

        </article>
    `)
    })
  }

  // CLICK EVENT
  $('main').on('click', 'article', function () {
    var id = $(this).attr('data-key')
    mainVid(id)
  })
})
