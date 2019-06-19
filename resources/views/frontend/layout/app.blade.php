<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  @yield('meta-tags')

  <script src="https://kit.fontawesome.com/71611066a6.js"></script>


  @php
  $currentRouteName =  Route::currentRouteName();

  $detectedLocale = App::getLocale();

  $detectedLocaleIsIt = App::isLocale('it') ? true : false;

  //$lang gets received by route function

  @endphp

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name', 'frontend_test') }}</title>

  <!-- Scripts -->
  <script src="{{ asset('js/frontend/frontend.js') }}" defer></script>

  <!-- Fonts -->
  <link rel="dns-prefetch" href="//fonts.gstatic.com">


  <!-- Styles -->
  <link href="{{ asset('css/frontend.css') }}" rel="stylesheet">

  @yield('css')
</head>
<body>

  @include('frontend.partials.navbar')

  <main class="">
    <p>detectedLocale is {{$detectedLocale}}</p>
    <p>Lang selected by user is {{$lang}}</p>

    @yield('content')

  </main>

  @include('frontend.partials.footer')

  @yield('scripts')

</body>
</html>
