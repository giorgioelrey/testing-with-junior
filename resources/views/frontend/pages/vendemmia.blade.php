@extends('frontend.layout.app')

@section('meta-description')
  <meta name="description" content="{{$lang == 'it' ? $contents->metadescription->data->it : $contents->metadescription->data->en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Vendemmia' : 'Vendemmia'}}</title>
@endsection

@section('content')
 @if ($contents->select_vendemmia->data == 'false')
<div class='container-fluid p-0 m-0 text-center'>
<img src='{{ asset('images/slide_home_page_vendemmia.jpg')   }}' style='max-width:100%;'>
</div>

@else



  <div class='container-fluid p-0 m-0' id='home'>
    <div class='row m-0'id='vendemmia'>
      <div class="col-12 p-0">
        <div class="bd-example">

          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner">
              <div class="carousel-item position-relative active">
                <img src="{{$contents->carousel_image_1->data}}" class="d-block " alt="...">
                <div class="carousel-caption d-flex h-100 align-items-center justify-content-center">

                  <a href="{{$lang == 'it' ? $contents->carousel_image_1_link->data->it : $contents->carousel_image_1_link->data->en}}"><h5>{{$lang == 'it' ? $contents->carousel_image_1_text->data : $contents->carousel_image_text_en_1->data}}</h5></a>
                </div>
              </div>
              <div class="carousel-item position-relative">
                <img src="{{$contents->carousel_image_2->data}}" class="d-block " alt="...">
                <div class="carousel-caption  d-flex h-100 align-items-center justify-content-center">

                  <a href="{{$lang == 'it' ? $contents->carousel_image_2_link->data->it : $contents->carousel_image_2_link->data->en}}"><h5>{{$lang == 'it' ? $contents->carousel_image_2_text->data : $contents->carousel_image_text_en_2->data}}</h5></a>
                </div>
              </div>
              <div class="carousel-item position-relative">
                <img src="{{$contents->carousel_image_3->data}}" class="d-block " alt="...">
                <div class="carousel-caption  d-flex h-100 align-items-center justify-content-center">
                    <a href="{{$lang == 'it' ? $contents->carousel_image_3_link->data->it : $contents->carousel_image_3_link->data->en}}"><h5>{{$lang == 'it' ? $contents->carousel_image_3_text->data : $contents->carousel_image_text_en_3->data}}</h5></a>
                </div>

              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>

            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>

            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {{-- RIGA 1 -2 --}}
  <div class='container-fluid m-0 p-0'>
    <div class='row m-0'id='vendemmia'>

      <div class='col-md-6 p-0 bg-dark vh-100 order-2' style="height: 100vh;overflow: hidden;background-size: cover;background-repeat: no-repeat;background-image: url('{{$contents->image_riga_1_url->data}}')">

      </div>

      <div class='col-md-6 order-1 p-0 order-md-2 colore_1'>
        <div  class='title '>
          {{$lang == 'it' ? $contents->titolo_riga_1->data->it : $contents->titolo_riga_1->data->en }}

          <div class='sotto_title'>

          </div>
        </div>
        <div class='px-5 rif-contatti'>

          <p>{!!$lang == 'it' ? $contents->content_riga_1->data->it : $contents->content_riga_1->data->en !!}

        </div>

      </div>

      <div class='col-md-6 p-0 order-3 aria colore_2'>
        <div  class='title'>
          {{$lang == 'it' ? $contents->titolo_riga_2->data->it : $contents->titolo_riga_2->data->en }}

          <div class='sotto_title'>

          </div>
        </div>
        <div class='px-5 rif-contatti'>

          <p>{!!$lang == 'it' ? $contents->content_riga_2->data->it : $contents->content_riga_2->data->en !!}

        </div>


      </div>

      <div class='col-md-6 p-0 order-4 bg-dark vh-100' style="height: 100vh;overflow: hidden;background-size:cover;background-repeat: no-repeat;background-image: url('{{$contents->image_riga_2_url->data}}')">

      </div>

    </div>
  </div>

  {{-- RIGA 3 - 4 --}}
  <div class='container-fluid m-0 p-0'>
    <div class='row m-0'id='vendemmia'>

      <div class='col-md-6 p-0 bg-dark vh-100 order-2' style="height: 100vh;overflow: hidden;background-size: cover;background-repeat: no-repeat;background-image: url('{{$contents->image_riga_3_url->data}}')">

      </div>

      <div class='col-md-6 order-1 p-0 order-md-2 colore_1'>
        <div  class='title '>
          {{$lang == 'it' ? $contents->titolo_riga_3->data->it : $contents->titolo_riga_3->data->en }}

          <div class='sotto_title'>

          </div>
        </div>
        <div class='px-5 rif-contatti'>

          <p>{!!$lang == 'it' ? $contents->content_riga_3->data->it : $contents->content_riga_3->data->en !!}

        </div>

      </div>

      <div class='col-md-6 p-0 order-3 aria colore_2'>
        <div  class='title'>
          {{$lang == 'it' ? $contents->titolo_riga_4->data->it : $contents->titolo_riga_4->data->en }}

          <div class='sotto_title'>

          </div>
        </div>
        <div class='px-5 rif-contatti'>

          <p>{!!$lang == 'it' ? $contents->content_riga_4->data->it : $contents->content_riga_4->data->en !!}

        </div>


      </div>

      <div class='col-md-6 p-0 order-4 bg-dark vh-100' style="height: 100vh;overflow: hidden;background-size:cover;background-repeat: no-repeat;background-image: url('{{$contents->image_riga_4_url->data}}')">

      </div>

    </div>
  </div>

  {{-- RIGA 5 - 6 --}}
  <div class='container-fluid m-0 p-0'>
    <div class='row m-0'id='vendemmia'>

      <div class='col-md-6 p-0 bg-dark vh-100 order-2' style="height: 100vh;overflow: hidden;background-size: cover;background-repeat: no-repeat;background-image: url('{{$contents->image_riga_5_url->data}}')">

      </div>

      <div class='col-md-6 order-1 p-0 order-md-2 colore_1'>
        <div  class='title '>
          {{$lang == 'it' ? $contents->titolo_riga_5->data->it : $contents->titolo_riga_5->data->en }}

          <div class='sotto_title'>

          </div>
        </div>
        <div class='px-5 rif-contatti'>

          <p>{!!$lang == 'it' ? $contents->content_riga_5->data->it : $contents->content_riga_5->data->en !!}

        </div>

      </div>

      <div class='col-md-6 p-0 order-3 aria colore_2'>
        <div  class='title'>
          {{$lang == 'it' ? $contents->titolo_riga_6->data->it : $contents->titolo_riga_6->data->en }}

          <div class='sotto_title'>

          </div>
        </div>
        <div class='px-5 rif-contatti'>

          <p>{!!$lang == 'it' ? $contents->content_riga_6->data->it : $contents->content_riga_6->data->en !!}

        </div>


      </div>

      <div class='col-md-6 p-0 order-4 bg-dark vh-100' style="height: 100vh;overflow: hidden;background-size:cover;background-repeat: no-repeat;background-image: url('{{$contents->image_riga_6_url->data}}')">

      </div>

    </div>
  </div>

  {{-- RIGA 7 - 8 --}}
  <div class='container-fluid m-0 p-0'>
    <div class='row m-0'id='vendemmia'>

      <div class='col-md-6 p-0 bg-dark vh-100 order-2' style="height: 100vh;overflow: hidden;background-size: cover;background-repeat: no-repeat;background-image: url('{{$contents->image_riga_7_url->data}}')">

      </div>

      <div class='col-md-6 order-1 p-0 order-md-2 colore_1'>
        <div  class='title '>
          {{$lang == 'it' ? $contents->titolo_riga_7->data->it : $contents->titolo_riga_7->data->en }}

          <div class='sotto_title'>

          </div>
        </div>
        <div class='px-5 rif-contatti'>

          <p>{!!$lang == 'it' ? $contents->content_riga_7->data->it : $contents->content_riga_7->data->en !!}

        </div>

      </div>

      <div class='col-md-6 p-0 order-3 aria colore_2'>
        <div  class='title'>
          {{$lang == 'it' ? $contents->titolo_riga_8->data->it : $contents->titolo_riga_8->data->en }}

          <div class='sotto_title'>

          </div>
        </div>
        <div class='px-5 rif-contatti'>

          <p>{!!$lang == 'it' ? $contents->content_riga_8->data->it : $contents->content_riga_8->data->en !!}

        </div>


      </div>

      <div class='col-md-6 p-0 order-4 bg-dark vh-100' style="height: 100vh;overflow: hidden;background-size:cover;background-repeat: no-repeat;background-image: url('{{$contents->image_riga_8_url->data}}')">

      </div>

    </div>
  </div>

  {{-- RIGA 9 - 10 --}}
  <div class='container-fluid m-0 p-0'>
    <div class='row m-0'id='vendemmia'>

      <div class='col-md-6 p-0 bg-dark vh-100 order-2' style="height: 100vh;overflow: hidden;background-size: cover;background-repeat: no-repeat;background-image: url('{{$contents->image_riga_9_url->data}}')">

      </div>

      <div class='col-md-6 order-1 p-0 order-md-2 colore_1'>
        <div  class='title '>
          {{$lang == 'it' ? $contents->titolo_riga_9->data->it : $contents->titolo_riga_9->data->en }}

          <div class='sotto_title'>

          </div>
        </div>
        <div class='px-5 rif-contatti'>

          <p>{!!$lang == 'it' ? $contents->content_riga_9->data->it : $contents->content_riga_9->data->en !!}

        </div>

      </div>

      <div class='col-md-6 p-0 order-3 aria colore_2'>
        <div  class='title'>
          {{$lang == 'it' ? $contents->titolo_riga_10->data->it : $contents->titolo_riga_10->data->en }}

          <div class='sotto_title'>

          </div>
        </div>
        <div class='px-5 rif-contatti'>

          <p>{!!$lang == 'it' ? $contents->content_riga_10->data->it : $contents->content_riga_10->data->en !!}

        </div>


      </div>

      <div class='col-md-6 p-0 order-4 bg-dark vh-100' style="height: 100vh;overflow: hidden;background-size:cover;background-repeat: no-repeat;background-image: url('{{$contents->image_riga_10_url->data}}')">

      </div>

    </div>
  </div>










<div class='loghi'>

  <img src='{{$contents->logo_vendemmia->data}}'>
</div>
@endif
@endsection
