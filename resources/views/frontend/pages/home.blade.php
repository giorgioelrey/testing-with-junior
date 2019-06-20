@extends('frontend.layout.app')

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
