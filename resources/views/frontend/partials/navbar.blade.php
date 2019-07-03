<div class='container-fluid' id='nav'>


<nav class="navbar navbar-expand-xl navbar-light  bg-light">

  <a class="navbar-brand" href="{{route('frontend.pages.home', ['lang' => $lang])}}"><img src='{{ asset('images/logo.jpg')   }}'></a>

  <div class='d-flex flex-column justify-content-end ml-auto'>
  <ul class='list-inline lingua text-right'>
  <li class='list-inline-item '>
    <a class="" href="{{route('frontend.pages.search', ['lang' => $lang])}}">
  <i class="fas fa-search"></i></a>
</li>
    <li class='list-inline-item {{$detectedLocaleIsIt ? 'active' : ''}}'>
      <a href="{{route($currentRouteName,['lang' => 'it'])}}">ita/</a>
    <li class='list-inline-item {{$detectedLocaleIsIt ? '' : 'active'}}'>
      <a href="{{route($currentRouteName,['lang' => 'en'])}}">eng</a>
    </li>
  </ul>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto mt-2">
      <li class="nav-item active">
        <a class="nav-link" href="{{route('frontend.pages.chi-siamo', ['lang' => $lang])}}">chi siamo <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('frontend.pages.soci', ['lang' => $lang])}}">brand</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('frontend.pages.eventi', ['lang' => $lang])}}">eventi</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('frontend.pages.mn-vip-lounge', ['lang' => $lang])}}">mn vip lounge</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('frontend.pages.press', ['lang' => $lang])}}">press</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('frontend.pages.archivio-storico', ['lang' => $lang])}}">archivio storico</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{route('frontend.pages.contatti', ['lang' => $lang])}}">contatti</a>
      </li>

    </ul>

  </div>

</div>
</nav>


</div>
