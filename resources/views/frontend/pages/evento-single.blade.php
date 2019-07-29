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


<div class='container ' id='evento-single'>

  <div  class='title'>
    {!! ($lang == 'it') ? 'Evento singolo' : 'Single Event' !!}

    <div class='sotto_title'>

    </div>
  </div>

  <div class="image text-center">
      <img class="img-fluid" src="{{$event['image_url']}}" alt="no image">
  </div>

  <h1>{{$event['title_'.$lang]}}</h1>




  </div>
</div>






@endsection
