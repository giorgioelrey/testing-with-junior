@extends('frontend.layout.app')

@section('meta-description')
  {{$content_it = 'MonteNapoleone District oggi rappresenta oltre 150 associati tra Global Luxury Brands e proprietari immobiliari, situati nel Quadrilatero della Moda di Milano.'}}
  {{$content_en = ''}}
  <meta name="description" content="{{$lang == 'it' ? $content_it : $content_en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Home' : 'Home'}}</title>
@endsection

@section('scripts')

  <script src="{{asset('/js/frontend/homeCalendar.js')}}" charset="utf-8"></script>

@endsection




@section('content')

<div class='container-fluid' id='home'>
<div class='row'>
<div class='col-4'>

  <div id="react-calendar">


  </div>

</div>

<div class='col-8'>

  <div id="maps-api-google">


  </div>

</div>




</div>
</div>



@endsection


@section('css')
<style>


  </style>

@endsection
