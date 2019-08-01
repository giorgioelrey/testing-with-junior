@extends('frontend.layout.app')

@section('meta-description')
  <meta name="description" content="{{$lang == 'it' ? $contents->metadescription->data->it : $contents->metadescription->data->en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Chi-siamo' : 'Who-we-are'}}</title>
@endsection

@section('content')


  <div class='container-fluid p-0 m-0 ' id='chi-siamo'>

    <div class='row m-0 d-flex justify-content-center'>
      <div class='col-md-12 p-0'>

  <img class="img-fluid" src="{{$contents->main_image_url->data}}"/>
      </div>

      <div class='col-md-8 mt-4'>



        <p>{!! ($lang == 'it') ? $contents->content->data->it : $contents->content->data->en !!}</p>

      </div>

    </div>
  </div>
@endsection
