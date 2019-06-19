<div class='container-fluid' id='nav'>


<nav class="navbar navbar-expand-xl navbar-light  bg-light">

  <a class="navbar-brand" href="#"><img src='{{ asset('images/logo.jpg')   }}'></a>


  <div class='d-flex flex-column justify-content-end ml-auto'>
  <ul class='list-inline lingua text-right'>
    <li class='list-inline-item'>
      <a href='#'>ita/</a>
    <li class='list-inline-item'>
      <a href='#'>eng</a>
    </li>
  </ul>



  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto mt-2">
      <li class="nav-item active">
        <a class="nav-link" href="{{route('fe.chi-siamo')}}">chi siamo <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('fe.soci')}}">soci</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('fe.eventi')}}">eventi</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('fe.servizi-mnlounge')}}">servizi mnlounge</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('fe.press')}}">press</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('fe.archivio-storico')}}">archivio storico</a>
      </li>





      <li class="nav-item">
        <a class="nav-link" href="{{route('fe.contatti')}}">contatti</a>
      </li>

    </ul>

  </div>

</div>
</nav>


</div>
