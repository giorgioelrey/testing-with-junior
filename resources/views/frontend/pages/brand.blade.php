@extends('frontend.layout.app')

@section('meta-description')
  {{$content_it = ''}}
  {{$content_en = ''}}
  <meta name="description" content="{{$lang == 'it' ? $content_it : $content_en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Soci' : 'Associates'}}</title>
@endsection

@section('content')


  <div class='container-fluid' id='soci'>
  <div class='row'>

<div  class='title'>Boutiques

<div class='sotto_title'>


</div>
</div>
  <div class='col-md-6 bg-gold d-flex align-items-center'>
    <div class="form-group m-auto w-50">
       <label for="exampleFormControlSelect1">{!! ($lang == 'it') ? 'Scegli la via' : 'Choose address' !!}</label>
       <select class="form-control" id="exampleFormControlSelect1">
         <option>1</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
         <option>5</option>
       </select>
     </div>


  </div>
  <div class='col-md-6 '>

  </div>
  </div>
  </div>



  <div class='container-fluid' id='soci'>
  <div class='row'>

  <div  class='title'>Hotels

  <div class='sotto_title'>

  </div>
  </div>




  <div class='col-md-6 d-flex align-items-center '>

    <ul class='hotel'>

  <li><a href='#'>LE GRAND HOTEL DE MILAN </a></li>
  <li><a href='#'> SAVOIA </a></li>
<li><a href='#'>  MENDELSON </a></li>
<li><a href='#'>  HACHIVA </a></li>
<li><a href='#'>  MANDARINO </a></li>
<li><a href='#'>  TOLENTINO HOTEL </a></li>
</ul>


  </div>


<div class='col-md-6 bg-green d-flex align-items-center'>

</div>









</div>
</div>










@endsection
