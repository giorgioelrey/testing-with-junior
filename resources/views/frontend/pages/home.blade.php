@extends('frontend.layout.app')

@section('meta-description')
  <meta name="description" content="{{$lang == 'it' ? $contents->metadescription->data->it : $contents->metadescription->data->en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Home' : 'Home'}}</title>
@endsection

@section('scripts')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://www.youtube.com/iframe_api"></script>
  <script type="text/javascript">

  const locations = @json($locations);
  console.log('locations from db', locations);

  const closeModalImg = "{{asset('/images/X.png')}}"
  const reactMarkerImg = "{{asset('/images/MARKER.png')}}"

  //$('#carouselExampleCaptions').carousel({ interval: 500 });

  </script>
  <script src="{{asset('/js/frontend/homeCalendar.js')}}" charset="utf-8"></script>
  <script src="{{asset('/js/frontend/gmaps.js')}}" charset="utf-8"></script>
<script>
$(document).ready(function(){
    var player,
        time_update_interval = 0;

    onYouTubeIframeAPIReady();

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('video-placeholder', {

            height: 800,
            videoId: '73NvZaznyg8',
            playerVars: {

                controls: 0,
                rel: 0,
                color: 'white',
                origin: "{{Request::url()}}"

            },
            events: {
                onReady: initialize
            }
        });
    }

    function initialize(){

        // Update the controls on load
        updateTimerDisplay();
        updateProgressBar();

        // Clear any old interval.
        clearInterval(time_update_interval);

        // Start interval to update elapsed time display and
        // the elapsed part of the progress bar every second.
        time_update_interval = setInterval(function () {
            updateTimerDisplay();
            updateProgressBar();
        }, 1000);


        $('#volume-input').val(Math.round(player.getVolume()));
    }


// This function is called by initialize()
    function updateTimerDisplay(){
        // Update current time text display.
        $('#current-time').text(formatTime( player.getCurrentTime() ));
        $('#duration').text(formatTime( player.getDuration() ));
    }


// This function is called by initialize()
    function updateProgressBar(){
        // Update the value of our progress bar accordingly.
        $('#progress-bar').val((player.getCurrentTime() / player.getDuration()) * 100);
    }


// Progress bar

    $('#progress-bar').on('mouseup touchend', function (e) {

        // Calculate the new time for the video.
        // new time in seconds = total duration in seconds * ( value of range input / 100 )
        var newTime = player.getDuration() * (e.target.value / 100);

        // Skip video to new time.
        player.seekTo(newTime);

    });


// Playback

    $('#play').on('click', function () {
        player.playVideo();
    });


    $('#pause').on('click', function () {
        player.pauseVideo();
    });


// Sound volume


    $('#mute-toggle').on('click', function() {
        var mute_toggle = $(this);

        if(player.isMuted()){
            player.unMute();
            mute_toggle.html('<i class="fas fa-volume-up"></i>');
        }
        else{
            player.mute();
            mute_toggle.html('<i class="fas fa-volume-mute"></i>');
        }
    });

    $('#volume-input').on('change', function () {
        player.setVolume($(this).val());
    });


// Other options


    $('#speed').on('change', function () {
        player.setPlaybackRate($(this).val());
    });

    $('#quality').on('change', function () {
        player.setPlaybackQuality($(this).val());
    });


// Playlist

    $('#next').on('click', function () {
        player.nextVideo()
    });

    $('#prev').on('click', function () {
        player.previousVideo()
    });


// Load video

    $('.thumbnail').on('click', function () {

        var url = $(this).attr('data-video-id');

        player.cueVideoById(url);

    });


// Helper Functions

    function formatTime(time){
        time = Math.round(time);

        var minutes = Math.floor(time / 60),
            seconds = time - minutes * 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        return minutes + ":" + seconds;
    }


    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });


});

</script>
@endsection




@section('content')

  <div class='container-fluid m-0 p-0' id='home'>
    <div class='row m-0'>
      <div class="col-12 p-0">
        <div class="bd-example">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="{{$contents->carousel_image_1->data}}" class="d-block " alt="...">
                <div class="carousel-caption d-flex h-100 align-items-center justify-content-center">
                  <h5>{{$contents->carousel_image_1_text->data}}</h5>

                </div>
              </div>
              <div class="carousel-item">
                <img src="{{$contents->carousel_image_2->data}}" class="d-block " alt="...">
                <div class="carousel-caption  d-flex h-100 align-items-center justify-content-center">
                  <h5>{{$contents->carousel_image_2_text->data}}</h5>

                </div>
              </div>
              <div class="carousel-item">
                <img src="{{$contents->carousel_image_3->data}}" class="d-block " alt="...">
                <div class="carousel-caption  d-flex h-100 align-items-center justify-content-center">
                  <h5>{{$contents->carousel_image_3_text->data}}</h5>

                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>

            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>

            </a>
          </div>
        </div>
      </div>
      <div class='col-lg-6 pr-md-0 '>
        <div class='bordo'>
          <div id="react-calendar">

          </div>
        </div>

      </div>

      <div class='col-lg-6 pr-0 pl-0 pl-lg-3'>

        <div id="map" style="width: 100%; height:800px;">

        </div>


      </div>




    </div>



      <div class=" section-video" style="height: 450px;position: relative;">
        <div class="mbYTP_wrapper" id="wrapper_mbYTP_bgndVideo" style="position: absolute;z-index: 0;min-width: 100%;min-height: 100%;left: 0px;top: 0px;overflow: hidden;opacity: 1;transition-property: opacity;transition-duration: 2000ms;">
          <div id="video-placeholder" style="width:100%;position: absolute;overflow: hidden;
    opacity: 1;
    margin-top: -225.5px;">

          </div>
        <div class="YTPOverlay" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"></div></div>
      						<div style="position: relative;">

      						</div>
      						<div class="section-video-bg-overlay"></div>
      						<div class="video-nav-control">
      							<div class="section-video-controls">
      								<div class="section-video-button">
      									<a class="command command-play"id="play" ><i class="fas fa-play"></i></a>
      									<a class="command command-pause"id="pause"><i class="fas fa-pause"></i></a>
      									<a class="command-vol"id="mute-toggle"><i class="fas fa-volume-up"></i></a>
      								</div>
      							</div>
      						</div>
      					</div>




  </div>










@endsection


@section('css')
  <style>


  </style>

@endsection
