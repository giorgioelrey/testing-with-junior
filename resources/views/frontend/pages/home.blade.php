@extends('frontend.layout.app')

@section('meta-description')
  {{$content_it = 'MonteNapoleone District oggi rappresenta oltre 150 associati tra Global Luxury Brands e proprietari immobiliari, situati nel Quadrilatero della Moda di Milano.'}}
  {{$content_en = ''}}
  <meta name="description" content="{{$lang == 'it' ? $content_it : $content_en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Home' : 'Home'}}</title>
@endsection

@section('scripts')

  <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script type="text/javascript">

  const locations = @json($locations);
  console.log('locations from db', locations);

  //$('#carouselExampleCaptions').carousel({ interval: 500 });

  </script>
  <script src="{{asset('/js/frontend/homeCalendar.js')}}" charset="utf-8"></script>
  <script src="{{asset('/js/frontend/gmaps.js')}}" charset="utf-8"></script>

@endsection




@section('content')

<div class='container-fluid' id='home'>
<div class='row'>
<div class="col-12">
  <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="http://lorempixel.com/400/200/sports/1/Dummy-Text/" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="http://lorempixel.com/400/200/sports/1/Dummy-Text/" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="http://lorempixel.com/400/200/sports/1/Dummy-Text/" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
<div class='col-md-5'>

  <div id="react-calendar">


  </div>

</div>

<div class='col-md-7'>

  <div id="map" style="width: 100%; height:800px;">


  </div>

</div>




</div>
</div>



@endsection


@section('css')
<style>


  </style>

@endsection
