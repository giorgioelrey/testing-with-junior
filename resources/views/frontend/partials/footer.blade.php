
    <!-- Footer -->
    <footer class="" id='footer'>
<div id="top"></div>
      <!-- Copyright -->
      <div class="footer-copyright text-right mr-5">
        <a href="https://www.google.com"><i class="fab fa-weixin"></i></a>
          <a href="https://www.google.com"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.google.com">  <i class="fab fa-instagram"></i></a>
      </div>
      <!-- Copyright -->

    </footer>
    <script>
    $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
});

$("#top").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 800);
});
    </script>
    <!-- Footer -->
