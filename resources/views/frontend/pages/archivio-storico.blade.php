@extends('frontend.layout.app')


@section('scripts')

  <script src="{{asset('/js/frontend/archivio-storico.js')}}" charset="utf-8"></script>

@endsection

@section('content')

<div class='container ' id='archivio-storico'>

  <div class='title'>{!! ($lang == 'it') ? 'Archivio Storico' : 'Archive' !!}

    <div class='sotto_title'>

    </div>

  </div>

  <div class='row mt-5'id='archivio-storico-list'>

  </div>

</div>

@endsection
