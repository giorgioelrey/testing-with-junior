const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/backend/app.js', 'public/js/backend.js')
    .react('resources/js/frontend/calendar/homeCalendar.js', 'public/js/frontend/homeCalendar.js')
    .react('resources/js/frontend/gmaps/gmaps.js', 'public/js/frontend/gmaps.js')
    .react('resources/js/frontend/archivio-storico/archivio-storico.js', 'public/js/frontend/archivio-storico.js')
    .react('resources/js/frontend/events/events.js', 'public/js/frontend/events.js')
    .react('resources/js/frontend/press/press.js', 'public/js/frontend/press.js')
    .react('resources/js/frontend/search/search.js', 'public/js/frontend/search.js')
    .react('resources/js/frontend/app.js', 'public/js/frontend/app.js')
    .sass('resources/sass/frontend/app.scss', 'public/css/frontend.css')
    .sass('resources/sass/backend/app.scss', 'public/css/backend.css');
