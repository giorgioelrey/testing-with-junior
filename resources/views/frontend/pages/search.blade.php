@extends('frontend.layout.app')

@section('title')
  <title>{{$lang == 'it' ? 'Ricerca' : 'Search'}}</title>
@endsection

@section('scripts')

  <script src="{{asset('/js/frontend/search.js')}}" charset="utf-8"></script>

@endsection


@section('content')


<div class='container ' id='search'>

  <div  class='title'>
    {!! ($lang == 'it') ? 'Ricerca' : 'Search' !!}

    <div class='sotto_title'>

    </div>
  </div>

  <div class='row mt-5' id='search'>
    

  </div>
</div>






@endsection
