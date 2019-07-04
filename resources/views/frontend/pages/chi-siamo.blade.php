@extends('frontend.layout.app')

@section('meta-description')
  {{$content_it = ''}}
  {{$content_en = ''}}
  <meta name="description" content="{{$lang == 'it' ? $content_it : $content_en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Chi-siamo' : 'Who-we-are'}}</title>
@endsection

@section('content')


  <div class='container-fluid' id='chi-siamo'>

    <div class='row d-flex justify-content-center'>
      <div class='col-md-12'>

        <h1 class='title text-uppercase'>
          {!! ($lang == 'it') ? 'chi siamo' : 'Who we are' !!}
        </h1>

      </div>

      <div class='col-md-8'>

        <p>{!! ($lang == 'it') ? $contents->content->data->it : $contents->content->data->en !!}</p>

      </div>

    </div>
  </div>
@endsection
