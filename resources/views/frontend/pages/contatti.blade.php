@extends('frontend.layout.app')
@section('content')


<div class='container-fluid  ' id='contatti'>
<div class='row'>

<div class='col-md-6 bg-dark'>



</div>







<div class='col-md-6'>
<h1 class='title text-center'>contatti</h1>
<div class='pl-5'>
<p>Address</p>
<p>Via dei Billighi 26, 20100 Milano</p>



<p>Email</p>
<p><a href='mailto:segreteria@montenapoleonedistrict.it'> segreteria@montenapoleonedistrict.it</a>
</p>



<p>Telefono</p>
<p>02 2035445566
</p>
</div>


</div>







<div class='col-md-6 '>
  <form>
    <div class="form-group">
      <label for="formGroupExampleInput">Nome</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Cognome</label>
     <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
    </div>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Messaggio</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>


</div>







<div class='col-md-6 bg-dark'>

</div>













</div>
</div>



@endsection
