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

      <div class='col-md-6 bg-gold '>

      </div>

      <div class='col-md-6 d-flex align-items-center'>

        <div>{!! ($lang == 'it') ? $contents->content->data->it : $contents->content->data->en !!}</div>

      </div>

    </div>
  </div>






















@endsection
