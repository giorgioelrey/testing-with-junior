/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 if (window.location.pathname === '/'){

  require('./calendar/homeCalendar.js')

} else if (window.location.pathname === '/eventi'){

 require('./events/events.js')

} else if (window.location.pathname === '/press'){

 require('./press/press.js')

} else if (window.location.pathname === '/archivio-storico'){

  require('./archivio-storico/archivio-storico.js')

  }
