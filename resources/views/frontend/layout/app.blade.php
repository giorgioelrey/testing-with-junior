<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://kit.fontawesome.com/71611066a6.js"></script>
    @php
      $nomePaginaCorrente = Route::current()->getName();
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


            @yield('content')
        </main>

        @include('frontend.partials.footer')

    @yield('scripts')

</body>
</html>
