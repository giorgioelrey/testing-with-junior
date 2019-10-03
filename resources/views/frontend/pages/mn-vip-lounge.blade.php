@extends('frontend.layout.app')

@section('meta-description')
  <meta name="description" content="{{$lang == 'it' ? $contents->metadescription->data->it : $contents->metadescription->data->en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Servizi-MN-Lounge' : 'MN-Lounge-Services'}}</title>
@endsection

@section('content')

    <div class='container-fluid p-0 m-0 'id='servizi-mnlounge' >

    <div class='row m-0' id='contatti'>




      <div class='quadrato  lounge content col-lg-6 order-1  text-center py-5 p-lg-0'>
        <div  class='title'>
          {!! ($lang == 'it') ? $contents->title_top->data->it : $contents->title_top->data->en !!}
          <div class='sotto_title'>

          </div>
        </div>

        <div class='px-5'>{!! ($lang == 'it') ? $contents->content_top->data->it : $contents->content_top->data->en !!}</div>

      </div>

      <div class='quadrato lounge col-lg-6 order-2 p-0' >

        <div id="demo" class="carousel slide w-100 h-100" data-ride="carousel">


          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
          </ul>


          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="{{$contents->carousel_top_image_1->data}}" alt="Los Angeles" height="100%" height="auto">
            </div>
            <div class="carousel-item">
              <img src="{{$contents->carousel_top_image_2->data}}" alt="Chicago" height="100%" height="auto">
            </div>
            <div class="carousel-item">
              <img src="{{$contents->carousel_top_image_3->data}}" alt="New York" height="100%" height="auto">
            </div>
            <div class="carousel-item">
              <img src="{{$contents->carousel_top_image_4->data}}" alt="image4" height="100%" height="auto">
            </div>
          </div>

        </div>

      </div>






      <div class='quadrato lounge col-lg-6 order-4  p-0'>

                <div id="demo2" class="carousel slide w-100 h-100" data-ride="carousel">

                  <ul class="carousel-indicators">
                    <li data-target="#demo2" data-slide-to="0" class="active"></li>
                    <li data-target="#demo2" data-slide-to="1"></li>
                    <li data-target="#demo2" data-slide-to="2"></li>
                    <li data-target="#demo2" data-slide-to="3"></li>
                  </ul>


                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="{{$contents->carousel_bottom_image_1->data}}" alt="Los Angeles" height="100%" height="auto">
                    </div>
                    <div class="carousel-item">
                      <img src="{{$contents->carousel_bottom_image_2->data}}" alt="Chicago" height="100%" height="auto">
                    </div>
                    <div class="carousel-item">
                      <img src="{{$contents->carousel_bottom_image_3->data}}" alt="New York" height="100%" height="auto">
                    </div>
                    <div class="carousel-item">
                      <img src="{{$contents->carousel_bottom_image_4->data}}" alt="image4" height="100%" height="auto">
                    </div>
                  </div>




    </div>
    </div>

    <div class='quadrato lounge content  d-flex content justify-content-center align-items-center col-lg-6 order-3 order-lg-4 text-center py-5 pb-lg-0'>

        <div class='px-5'>{!! ($lang == 'it') ? $contents->content_bottom->data->it : $contents->content_bottom->data->en !!}</div>

    </div>










    <div class='quadrato lounge  d-flex content justify-content-center align-items-center col-lg-6 order-5 order-lg-5 text-center py-5 pb-lg-0'>

        <div class='px-5'>{!! ($lang == 'it') ? $contents->testo_form->data->it : $contents->testo_form->data->en !!}</div>
  </div>








      <div class='quadrato lounge content col-lg-6 order-5  d-flex align-items-center aria pb-3 pb-lg-0'>

          <form action="{{route('routes.sendmail', ['page' => 'mnlounge'])}}" method="GET">
              @csrf
              <div class="form-group" >
                  <label for="formGroupExampleInput">{!! ($lang == 'it') ? 'Nome' : 'First Name' !!}</label>
                  <input type="text" class="form-control" name="first_name" placeholder="{!! ($lang == 'it') ? 'Nome' : 'First Name' !!}">

              </div>
              <div class="form-group">
                  <label for="formGroupExampleInput2">{!! ($lang == 'it') ? 'Cognome' : 'Last Name' !!}</label>
                  <input type="text" class="form-control" name="last_name"
                         placeholder="{!! ($lang == 'it') ? 'Cognome' : 'Last Name' !!}">
              </div>
              <div class="form-group">
                  <label for="exampleFormControlTextarea1">{!! ($lang == 'it') ? 'Messaggio' : 'Message' !!}</label>
                  <textarea class="form-control" name="message_body" rows="3" cols="50"></textarea>
              </div>
              <button type="submit" class="btn btn-primary invia">{!! ($lang == 'it') ? 'Invia' : 'Submit' !!}</button>
        </form>

      </div>


</div>
</div>




















@endsection
