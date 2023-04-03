/*
function dashboardView () {
    $('#dashboard').html('');
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : '51e78951',
            's' : $('#dashboard').val()
        },
    })
}
*/

function searchMovie () {
    $('#movie-list').html('');
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : '51e78951',
            's' : $('#search-input').val()
        },
        success: function(result) {
            if (result.Response == "True") 
            {let movies = result.Search;

                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                    <div class="col-sm-3" >
                        <div class="card mb-3">
                        <img src="`+ data.Poster +`" class="card-img-top" >
                            <div class="card-body">
                            <h5 class="card-title see-detail">`+ data.Title +`</h5>
                            <h6 class="card-subtitle mb-2 text-muted"> `+ data.Year +` </h6>
                            <li class="list-group-item" >Genre : `+ movies.Genre +` </li>
                            <a href="#" class="card-link" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.imdbID +`">See detail</a>
                            </div>
                        </div>
                    </div>
                    `)
                })

                $('#search-input').val('');

            } else {
                $('#movie-list').html(`
                <div class="col">
                <h2 class="text-center">` + result.Error + `</h2>
                </div>
                `)
            }
        }

    });
}

    $('#search-button').on('click', function(){
        searchMovie();
    });

    $('#search-input').on('keyup', function(e) {
        if(e.keyCode === 13) {
            searchMovie();
        }
    })


$('.movie-list').on('click','.see-detail', function(){
    console.log($(this).data('id'))
})