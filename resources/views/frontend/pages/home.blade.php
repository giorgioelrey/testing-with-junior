@extends('frontend.layout.app')

@section('scripts')

  <script src="{{asset('/js/frontend/homeCalendar.js')}}" charset="utf-8"></script>

@endsection




@section('content')

<div class='container-fluid' id='home'>
<div class='row'>
<div class='col-12'>

  <div id="react-calendar">


  </div>

</div>

</div>
</div>



@endsection


@section('css')
<style>
.Calendar {
      border-collapse: collapse;
      padding: 0;
      margin: 4rem auto 0;
  }

  .Calendar th,
  .Calendar td {
      padding: 1rem;
      text-align: center;
  }

  .Day:hover {
      background: #eee;
      color: #000;
  }

  .Day.today {
      background: #666;
      color: #fff;
  }

  .Day.selected {
      background: #2980b9;
      color: #fff;
  }

  .Day.other-month {
      background: #fafafa;
      color: #aaa;
  }

  </style>

@endsection
