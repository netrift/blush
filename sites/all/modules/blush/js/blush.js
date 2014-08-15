(function ($) {

  $(document).ready(function() {
    /* Front page logo centering, and fade in at 1.5sec */
    
    if (Drupal.settings.blush) {
      var image_url = Drupal.settings.blush['splash'];
    
      /* first hide the logo block */
      $('#outter-logo-block').center().hide();

      /* now fade in the background image */
      jQuery.backstretch(image_url, {fade: 2000});
      $(window).on("backstretch.after", function (e, instance, index) {
        /* once background image is done fading in, fad in the logo block */
        $('#outter-logo-block').fadeIn(1000);
      });
    };

  });



  /* Centering function */
  jQuery.fn.center = function() {
    this.css({
        'position': 'fixed',
        'left': '50%',
        'top': '50%'
    });
    this.css({
        'margin-left': -this.outerWidth() / 2 + 'px',
        'margin-top': -this.outerHeight() / 2 + 'px'
    });

    return this;
  }

})(jQuery);
