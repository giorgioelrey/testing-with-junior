@extends('frontend.layout.app')
@section('content')
  <div class='container-fluid' id='servizi-mnlounge'>

    <div class='row'>

      <div  class='title'>Mnlounge

        <div class='sotto_title'>

        </div>
      </div>

      <div class='col-md-6 bg-gold '>

      </div>

      <div class='col-md-6 d-flex align-items-center'>

        <p>{!! ($lang == 'it') ? $contents->content->data->it : $contents->content->data->en !!}</p>

      </div>

    </div>
  </div>






















@endsection
