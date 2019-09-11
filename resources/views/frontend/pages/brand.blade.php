@extends('frontend.layout.app')

@section('meta-description')
<?php
  $content_it = '';
  $content_en = '';
  ?>

  <meta name="description" content="{{$lang == 'it' ? $content_it : $content_en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Soci' : 'Associates'}}</title>
@endsection

@section('scripts')
    <script type="text/javascript">
        const closeModalImg = "{{asset('/images/X.png')}}";
        const streets = @json($streets);
    </script>

    <script src="{{asset('/js/frontend/brand.js')}}" charset="utf-8"></script>

@endsection

@section('content')


  <div class='container-fluid' id='soci'>
  <div class='row d-flex justify-content-center'>



  <div class='col-lg-6 bg-gold order-1 d-flex align-items-center mobile_place'>
    <div  class='title'>Boutiques

    <div class='sotto_title'>


    </div>
    </div>

      <div id="brand-location-picker">

      </div>


  </div>

    <div class='quadrato contatti col-lg-6 order-2  bg-dark p-0' style="overflow:hidden;">
      <img class="" src="{{$contents->image_top_url->data}}" alt="">
  </div>

  </div>
  </div>



  <div class='container-fluid' id='soci'>
  <div class='row d-flex justify-content-center'>











<div class='col-lg-6 d-flex bg-green order-lg-4 align-items-center mobile_place'>
  <div  class='title'>Hotels

  <div class='sotto_title'>
</div>
  </div>

  <div id='hotel-picker'></div>

{{--
  <ul class='hotel'>
    <li><a href='#'>ARMANI HOTEL </a></li>
    <li><a href='#'>BULGARI </a></li>
    <li><a href='#'>FOUR SEASON </a></li>
<li><a href='#'> GRAND HOTEL ET DE MILAN </a></li>
<li><a href='#'>HOTEL BAGLIONI </a></li>
<li><a href='#'> HOTEL GALLIA </a></li>
<li><a href='#'>  HOTEL MANZONI</a></li>
<li><a href='#'>  HOTEL PRINCIPE DI SAVOIA </a></li>
<li><a href='#'>  MANDARIN ORIENTAL MILAN </a></li>
<li><a href='#'>  PARKHYATT </a></li>
<li><a href='#'>  THE WESTIN </a></li>
</ul>
--}}



</div>

<div class='quadrato contatti col-lg-6 order-lg-3 bg-dark p-0' style="overflow:hidden;">
  <img class="" src="{{$contents->image_bottom_url->data}}" alt="">
</div>





</div>
</div>










@endsection
