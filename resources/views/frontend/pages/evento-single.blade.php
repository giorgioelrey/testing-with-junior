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







<div class='container-fluid' id='evento-single'>
<div class='row'>
  <div class='col-md-6  box-img-single' >
<div class='single-img' style="overflow: hidden;background-size:cover;background-repeat: no-repeat;background-image: url('{{$event['image_url']}}')">

</div>
  </div>




  <div class='col-md-6'>

  <div  class='title single-title'>
    {{$event['title_'.$lang]}}

    <div class='sotto_title'>

    </div>
  </div>

<p class='paragrafo-single'>{!! $event['bodytop_'.$lang]  !!}</p>





  </div>






  </div>

  <div class='divider'></div>
  <div class='row d-flex justify-content-center'>
  <div class='col-md-10'>


  <div class='paragrafo-single'>
      {!! $event['bodybottom_'.$lang] !!}
  </div>



  </div>



  </div>











</div>






@endsection
