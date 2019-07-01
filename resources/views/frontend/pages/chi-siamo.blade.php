@extends('frontend.layout.app')
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
