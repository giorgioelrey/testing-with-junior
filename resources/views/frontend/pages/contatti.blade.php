@extends('frontend.layout.app')
@section('content')

  <div class='container-fluid' id='contatti'>
    <div class='row'>

      <div class='col-md-6 bg-dark vh-100'>

      </div>

      <div class='col-md-6'>
        <div  class='title'>Contatti

          <div class='sotto_title'>

          </div>
        </div>
        <div class='pl-5 rif-contatti'>

          <p>Address:<br>
            {{$contents->address->data}}</p>

            <p>Email:<br>
              <a href='mailto:{{$contents->address->data}}'>{{$contents->email->data}}</a>
            </p>

            <p>Telefono:<br>
              {{$contents->phone->data}}
            </p>
          </div>

        </div>

        <div class='col-md-6 d-flex align-items-center'>
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Nome</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome">

            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Cognome</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Cognome">
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Messaggio</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="50"></textarea>
            </div>
            <button type="submit" class="btn btn-primary invia">Invia</button>
          </form>


        </div>

        <div class='col-md-6 bg-dark vh-100'>

        </div>

      </div>
    </div>

  @endsection
