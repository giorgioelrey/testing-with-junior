@extends('frontend.layout.app')

@section('meta-description')
  <meta name="description" content="{{$lang == 'it' ? $contents->metadescription->data->it : $contents->metadescription->data->en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Servizi-MN-Lounge' : 'MN-Lounge-Services'}}</title>
@endsection

@section('content')
  <div class='container-fluid' id='servizi-mnlounge'>

    <div class='row'>

      <div  class='title'>
          mnlounge
        <div class='sotto_title'>

        </div>
      </div>

      <div class='col-md-6' >

        <div id="demo" class="carousel slide" data-ride="carousel">


          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>


          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://lorempixel.com/640/480/city/?11540" alt="Los Angeles" max-width="100" height="auto">
            </div>
            <div class="carousel-item">
              <img src="https://lorempixel.com/640/480/city/?11540" alt="Chicago" max-width="100" height="auto">
            </div>
            <div class="carousel-item">
              <img src="https://lorempixel.com/640/480/city/?11540" alt="New York" max-width="100" height="auto">
            </div>
          </div>



        </div>












      </div>

      <div class='col-md-6 d-flex align-items-center'>

        <div>{!! ($lang == 'it') ? $contents->content->data->it : $contents->content->data->en !!}</div>

      </div>

    </div>
  </div>






















@endsection
