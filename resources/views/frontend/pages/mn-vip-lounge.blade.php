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

      <div  class='title'>
          mnlounge
        <div class='sotto_title'>

        </div>
      </div>

      <div class='col-md-6 order-1 p-0' >

        <div id="demo" class="carousel slide" data-ride="carousel">


          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
          </ul>


          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="{{$contents->carousel_top_image_1->data}}" alt="Los Angeles" max-width="100" height="auto">
            </div>
            <div class="carousel-item">
              <img src="{{$contents->carousel_top_image_2->data}}" alt="Chicago" max-width="100" height="auto">
            </div>
            <div class="carousel-item">
              <img src="{{$contents->carousel_top_image_3->data}}" alt="New York" max-width="100" height="auto">
            </div>
            <div class="carousel-item">
              <img src="{{$contents->carousel_top_image_4->data}}" alt="image4" max-width="100" height="auto">
            </div>
          </div>

        </div>

      </div>

      <div class='col-md-6 order-2 d-flex align-items-center text-center p-0'>

        <div class='px-5'>{!! ($lang == 'it') ? $contents->content_top->data->it : $contents->content_top->data->en !!}</div>

      </div>



      <div class='col-md-6 order-4 p-0 d-flex align-items-center aria'>

        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">{!! ($lang == 'it') ? 'Nome' : 'First Name' !!}</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="{!! ($lang == 'it') ? 'Nome' : 'First Name' !!}">

          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">{!! ($lang == 'it') ? 'Cognome' : 'Last Name' !!}</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="{!! ($lang == 'it') ? 'Cognome' : 'Last Name' !!}">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">{!! ($lang == 'it') ? 'Messaggio' : 'Message' !!}</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="50"></textarea>
          </div>
          <button type="submit" class="btn btn-primary invia">{!! ($lang == 'it') ? 'Invia' : 'Submit' !!}</button>
        </form>

      </div>

      <div class='col-md-6 order-3 order-md-4 p-0'>

                <div id="demo2" class="carousel slide" data-ride="carousel">

                  <ul class="carousel-indicators">
                    <li data-target="#demo2" data-slide-to="0" class="active"></li>
                    <li data-target="#demo2" data-slide-to="1"></li>
                    <li data-target="#demo2" data-slide-to="2"></li>
                    <li data-target="#demo2" data-slide-to="3"></li>
                  </ul>


                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="{{$contents->carousel_bottom_image_1->data}}" alt="Los Angeles" max-width="100" height="auto">
                    </div>
                    <div class="carousel-item">
                      <img src="{{$contents->carousel_bottom_image_2->data}}" alt="Chicago" max-width="100" height="auto">
                    </div>
                    <div class="carousel-item">
                      <img src="{{$contents->carousel_bottom_image_3->data}}" alt="New York" max-width="100" height="auto">
                    </div>
                    <div class="carousel-item">
                      <img src="{{$contents->carousel_bottom_image_4->data}}" alt="image4" max-width="100" height="auto">
                    </div>
                  </div>




    </div>
  </div>
</div>
</div>




















@endsection
