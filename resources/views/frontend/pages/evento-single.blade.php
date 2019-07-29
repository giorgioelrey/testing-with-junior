@extends('frontend.layout.app')

@section('meta-description')
  <meta name="description" content="{{$event['metadescription_'.$lang] }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Evento' : 'Event'}}</title>
@endsection

@section('scripts')

@endsection


@section('content')







<div class='container-fluid ' id='evento-single'>
<div class='row'>
  <div class='col-md-6 bg-dark vh-100' style="height: 100vh;overflow: hidden;background-size:cover;background-repeat: no-repeat;background-image: url('{{$event['image_url']}}')">

  </div>




  <div class='col-md-6'>

  <div  class='title'>
    {{$event['title_'.$lang]}}

    <div class='sotto_title'>

    </div>
  </div>

<p>{{$event['description_'.$lang]}}</p>





  </div>






  </div>
</div>






@endsection
