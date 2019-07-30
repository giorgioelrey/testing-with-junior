@extends('frontend.layout.app')

@section('meta-description')

  <meta name="description" content="{{$post['metadescription_'.$lang] }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Post-singolo' : 'Single-Post'}}</title>
@endsection

@section('content')


<div class='container ' id='post-single'>
  <div class='col-md-6 bg-dark vh-100' style="height: 100vh;overflow: hidden;background-size:cover;background-repeat: no-repeat;background-image: url('{{$post['image_url']}}')">

  </div>


  <div  class='title'>
  {{$post['title_'.$lang]}}

    <div class='sotto_title'>

    </div>
  </div>

  <h1></h1>




  </div>
</div>






@endsection
