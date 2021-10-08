// $(document).ready(function () {
//   var key = [your api key here]
//   var playlistId = 'n3QgYksdIRQ&t=5s'
//   var URL = 'https://www.googleapis.com/youtube/v3/playlistItems'

//   var options = {
//     part: 'snippet',
//     key: key,
//     maxResults: 20,
//     playlistId: playlistId,
//   }
//   loadVids()

//   function loadVids() {
//     $.getJSON(URL, options, function (data) {
//       var id = data.items[0].snippet.resourceId.videoId
//       mainVid(id)
//       resultsLoop(data)
//     })
//   }

//   function mainVid(id) {
//     $('#video').html(`
//     <iframe
//           src="https://www.youtube.com/embed/n3QgYksdIRQ?list=RDCMUCcPGGA2RWx6C5o1xl18vUWA"
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
// `)
//   }

//   function resultsLoop(data) {
//     $.each(data.items, function (i, item) {
//       var thumb = item.snippet.thumbnails.medium.url
//       var title = item.snippet.title
//       var desc = item.snippet.description.substring(0, 100)
//       var vid = item.snippet.resourceId.videoId

//       $('main').append(`
//         <article class="item" data-key="${vid}">

//             <img src="${thumb}" alt="" class="thumb">
//             <div class="details">
//                 <h4>${title}</h4>
//                 <p>${desc}</p>
//             </div>

//         </article>
//     `)
//     })
//   }

//   // CLICK EVENT
//   $('main').on('click', 'article', function () {
//     var id = $(this).attr('data-key')
//     mainVid(id)
//   })
// })

$(document).ready(function () {
  var key = 'AIzaSyBEpfdZ_evli-nlznCKYMUY_d6FFL0-p08'
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
