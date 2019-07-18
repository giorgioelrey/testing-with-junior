<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'IlNostroCMS') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css">
    <link href="{{ asset('css/backend.css') }}" rel="stylesheet">

    <script src="https://maps.googleapis.com/maps/api/js?key={{config('app.gmaps_api_key')}}&libraries=places"></script>

    {{-- Passing to js userLanguage--}}
    <script type="text/javascript">
      const gmapsApiKey = "{{config('app.gmaps_api_key')}}";
    </script>
</head>
<body>

    <!-- REACT DIV -->
    <div id="app"></div>

    <!-- Scripts -->
    <script src="{{ asset('js/backend.js') }}" defer></script>

</body>
</html>
