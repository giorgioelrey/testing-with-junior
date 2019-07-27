@extends('frontend.layout.app')

@section('meta-description')
  <meta name="description" content="{{$lang == 'it' ? $contents->metadescription->data->it : $contents->metadescription->data->en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Home' : 'Home'}}</title>
@endsection

@section('scripts')
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
        <img src="{{$contents->carousel_image_1->data}}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-flex h-100 align-items-center justify-content-center">
          <h5>{{$contents->carousel_image_1_text->data}}</h5>

        </div>
      </div>
      <div class="carousel-item">
        <img src="{{$contents->carousel_image_2->data}}" class="d-block w-100" alt="...">
        <div class="carousel-caption  d-flex h-100 align-items-center justify-content-center">
          <h5>{{$contents->carousel_image_2_text->data}}</h5>

        </div>
      </div>
      <div class="carousel-item">
        <img src="{{$contents->carousel_image_3->data}}" class="d-block w-100" alt="...">
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
