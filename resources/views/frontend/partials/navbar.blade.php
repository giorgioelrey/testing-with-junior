

<div id='nav'>
  <nav class="navbar navbar-expand-xl navbar-light fixed-top align-items-end  bg-light px-5 pb-0">

    <a class="navbar-brand" href="{{route('fe.home')}}"><img src='{{ asset('images/logo.jpg')   }}'></a>

    {{-- <div class='d-flex flex-column justify-content-end ml-auto mobile-tap'> --}}
      <ul class='list-inline lingua text-right'>
        <li class='list-inline-item '>
          <a class="" href="{{route('fe.search')}}">
            <i class="fas fa-search"></i></a>
          </li>

    @if($currentRouteName != "fe.post-single" &&
        $currentRouteName != "fe.archivio-storico-single" &&
        $currentRouteName != "fe.evento-single")
          {{-- ciclo li lingue vicino search da sistemare --}}
          @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
            <li class='list-inline-item {{LaravelLocalization::getCurrentLocale() == $localeCode ? 'active' : ''}}'>
              <a rel="alternate" hreflang="{{ $localeCode }}" href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">

                {{ $localeCode }}
              </a>
            </li>
          @endforeach
        
      @else

        <li class='list-inline-item {{LaravelLocalization::getCurrentLocale() == 'it' ? 'active' : ''}}'>
          <a rel="alternate" hreflang="it" href="{{LaravelLocalization::getCurrentLocale() == 'it' ? \Request::fullUrl() : $otherLangUrl}}">
            it
          </a>
        </li>
        <li class='list-inline-item {{LaravelLocalization::getCurrentLocale() == 'en' ? 'active' : ''}}'>
          <a rel="alternate" hreflang="en" href="{{LaravelLocalization::getCurrentLocale() == 'en' ? \Request::fullUrl() : $otherLangUrl}}">
            en
          </a>
        </li>

      @endif
        </ul>
{{-- </div> --}}

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto mt-2">
            <li class="nav-item pb-3 vendemmia {{ $currentRouteName == 'fe.vendemmia' ? 'active' : '' }} ">
              <a class="nav-link" href="{{route('fe.vendemmia')}}">vendemmia<span class="sr-only">(current)</span></a>
              <div class="underline"></div>
            </li>
            <li class="nav-item pb-3 {{ $currentRouteName == 'fe.chi-siamo' ? 'active' : '' }} ">
              <a class="nav-link" href="{{route('fe.chi-siamo')}}">chi siamo <span class="sr-only">(current)</span></a>
              <div class="underline"></div>
            </li>
            <li class="nav-item pb-3 {{ $currentRouteName == 'fe.brand' ? 'active' : '' }}">
              <a class="nav-link" href="{{route('fe.brand')}}">brand</a>
              <div class="underline"></div>
            </li>
            <li class="nav-item pb-3 {{ $currentRouteName == 'fe.eventi' ? 'active' : '' }}">
              <a class="nav-link" href="{{route('fe.eventi')}}">eventi</a>
              <div class="underline"></div>
            </li>
            <li class="nav-item pb-3 {{ $currentRouteName == 'fe.mn-vip-lounge' ? 'active' : '' }}">
              <a class="nav-link" href="{{route('fe.mn-vip-lounge')}}">mn vip lounge</a>
              <div class="underline"></div>
            </li>
            <li class="nav-item pb-3 {{ $currentRouteName == 'fe.press' ? 'active' : '' }}">
              <a class="nav-link" href="{{route('fe.press')}}">press</a>
              <div class="underline"></div>
            </li>
            <li class="nav-item pb-3 {{ $currentRouteName == 'fe.archivio-storico' ? 'active' : '' }}">
              <a class="nav-link" href="{{route('fe.archivio-storico')}}">archivio storico</a>
              <div class="underline"></div>
            </li>
            <li class="nav-item pb-3 {{ $currentRouteName == 'fe.contatti' ? 'active' : '' }}">
              <a class="nav-link" href="{{route('fe.contatti')}}">contatti</a>
              <div class="underline"></div>
            </li>

          </ul>

        </div>



    </nav>
  </div>
