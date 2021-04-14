


 $('body').on('click', '.animated-arrow', function() {
    if($(this).hasClass('goback')) {
        $('#modal-container').addClass('out');
        $('body').removeClass('modal-active');
        $('.modals').css('background-color', '#5C5C5C');
    } else if ($(this).hasClass('goskills'))  {
        $('#skills').click();
    } else if ($(this).hasClass('gotimeline')) {
        $('#timeline').click();
    }
});



 function modalshow(projeto) {
    $('#modal-container').removeAttr('class').addClass('one');
    $('body').addClass('modal-active');

    setTimeout(function(){ 
        $('.modals').css('background-color', '#efefef');
     }, 500);

     if (projeto == 'alias') {
        $('.modals').html(`
        <span class='animated-arrow goback'>
            <span class='the-arrow -left'>
                <span class='shaft'></span>
            </span>
            <span class='main'>
                <span class='text'>
                    Go back
                </span>
                <span class='the-arrow -right'>
                    <span class='shaft'></span>
                </span>
            </span>
        </span>
        <div class="col-lg-8 offset-lg-2">
            <h2>Project Alias</h2>
            <h3>Indie game prototype I worked as a 2D artist</h3>
        </div>
        <div class="col-lg-9 offset-lg-2 row space">
            <div class="col-lg-5">

                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="img/projects/671311516.gif">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="img/projeto3/02-min.png">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="img/projeto3/03-min.png">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="img/projeto3/04-min.png">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="img/projeto3/05-min.png">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="img/projeto3/06-min.png">
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>
            <div class="col-lg-6 offset-lg-1">
                <span>
                    "Alias" or "Project Alias" was an idea of a game I worked in a group project during my Game Design course in Restart in 2015.
                    <br>
                    <br>
                    My focus was to work on the environment art of the game. Our idea was to be a pixel art game in a post apocalyptic world.
                    <br>
                    <br>
                    Here you can see most of the environments I worked on.
                    <br>
                    <br>
                    Click here to see my Behance page about this project.
                </span>
            </div>
        </div>
        `);

     } else if (projeto == 'videos') {
        $('.modals').html(`
        <span class='animated-arrow goback'>
            <span class='the-arrow -left'>
                <span class='shaft'></span>
            </span>
            <span class='main'>
                <span class='text'>
                    Go back
                </span>
                <span class='the-arrow -right'>
                    <span class='shaft'></span>
                </span>
            </span>
        </span>
        <div class="col-lg-8 offset-lg-2">
            <h2>Youtube</h2>
            <h3>Speed Drawings</h3>
        </div>
        <div class="col-lg-9 offset-lg-2 row space">
            <div class="col-lg-5">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <iframe class="d-block w-100" width="560" height="235" src="https://www.youtube.com/embed/sY29Tsj7fXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="carousel-item">
                        <iframe class="d-block w-100" width="560" height="235" src="https://www.youtube.com/embed/bzIuJjcbvP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="carousel-item">
                        <iframe class="d-block w-100" width="560" height="235" src="https://www.youtube.com/embed/EbCD6GeL3oE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="carousel-item">
                        <iframe class="d-block w-100" width="560" height="235" src="https://www.youtube.com/embed/LOWJtNZyaw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="carousel-item">
                        <iframe class="d-block w-100"  width="560" height="235" src="https://www.youtube.com/embed/MTtTuFgnTLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>
            <div class="col-lg-6 offset-lg-1 center">
                <span>
                    When I started my journey in becoming better at drawing portraits, I opened a Youtube channel
                    where I posted some speed drawing videos of some works I did as a hobbie of all my favorite games,
                    and movies and anything I wanted to fangirl about.
                </span>
            </div>
        </div>
        `);
     }
  
 }



 