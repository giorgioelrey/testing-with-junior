<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="format-detection" content="telephone=no">
  @yield('meta-description')
  @yield('head-css')
</head>

<body>

  <main>

    @yield('content')

  </main>
  @yield('scripts')

</body>
</html>
