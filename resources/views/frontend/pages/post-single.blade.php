@extends('frontend.layout.app')

@section('meta-description')
  {{$content_it = ''}}
  {{$content_en = ''}}
  <meta name="description" content="{{$lang == 'it' ? $content_it : $content_en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Post-singolo' : 'Single-Post'}}</title>
@endsection

@section('content')


<div class='container ' id='post-single'>

  <div  class='title'>
    {!! ($lang == 'it') ? 'Post singolo' : 'Single Post' !!}

    <div class='sotto_title'>

    </div>
  </div>

  <h1>{{$post['title_'.$lang]}}</h1>




  </div>
</div>






@endsection
