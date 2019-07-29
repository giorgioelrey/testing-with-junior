@extends('frontend.layout.app')

@section('meta-description')
  <meta name="description" content="{{$lang == 'it' ? $contents->metadescription->data->it : $contents->metadescription->data->en }}">{{-- max 160 caratteri --}}
@endsection

@section('title')
  <title>{{$lang == 'it' ? 'Contatti' : 'Contacts'}}</title>
@endsection


@section('content')

  <div class='container-fluid' id='contatti'>
    <div class='row'>

      <div class='col-md-6 bg-dark vh-100' style="height: 100vh;overflow: hidden;background-size: cover;background-repeat: no-repeat;background-image: url('{{$contents->image_top_url->data}}')">

      </div>

      <div class='col-md-6 '>
        <div  class='title'>
          {!! ($lang == 'it') ? 'Contatti' : 'Contacts' !!}

          <div class='sotto_title'>

          </div>
        </div>
        <div class='pl-5 rif-contatti'>

          <p>{!! ($lang == 'it') ? 'Indirizzo' : 'Address' !!}:<br>
            {{$contents->address->data}}</p>

            <p>Email:<br>
              <a href='mailto:{{$contents->address->data}}'>{{$contents->email->data}}</a>
            </p>

            <p>{!! ($lang == 'it') ? 'Telefono' : 'Phone' !!}:<br>
              {{$contents->phone->data}}
            </p>
          </div>

        </div>

        <div class='col-md-6 d-flex align-items-center px-5'>
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

        <div class='col-md-6 bg-dark vh-100' style="height: 100vh;overflow: hidden;background-size:cover;background-repeat: no-repeat;background-image: url('{{$contents->image_bottom_url->data}}')">

        </div>

      </div>
    </div>

  @endsection
