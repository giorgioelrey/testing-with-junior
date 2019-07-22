@extends('frontend.layout.app')

@section('meta-description')
  {{$content_it = ''}}
  {{$content_en = ''}}
  <meta name="description" content="{{$lang == 'it' ? $content_it : $content_en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Press' : 'Press'}}</title>
@endsection

@section('scripts')

  <script src="{{asset('/js/frontend/press.js')}}" charset="utf-8"></script>

@endsection


@section('content')


<div class='container ' id='news'>
  <div  class='title'>Press

  <div class='sotto_title'>

  </div>
  </div>
<div class='row mt-5' id='press-list'>





</div>
</div>






@endsection
