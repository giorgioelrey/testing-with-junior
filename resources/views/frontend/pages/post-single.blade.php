@extends('frontend.layout.app')

@section('meta-description')

  <meta name="description" content="{{$post['metadescription_'.$lang] }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Post-singolo' : 'Single-Post'}}</title>
@endsection

@section('content')


<div class='container ' id='post-single'>
  <div class="image text-center">
      <img class="img-fluid" src="{{$post['image_url']}}" alt="no image">
  </div>


  <div  class='title'>
    {!! ($lang == 'it') ? 'Post singolo' : 'Single Post' !!}

    <div class='sotto_title'>

    </div>
  </div>

  <h1>{{$post['title_'.$lang]}}</h1>




  </div>
</div>






@endsection
