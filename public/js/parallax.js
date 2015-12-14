$(document).ready(function() {
  $("a[href*=#]").each(function() {
    if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"")
        && location.hostname == this.hostname && this.hash.replace(/#/,"") ) {
          var $targetId = $(this.hash), $targetAnchor = $("[name=" + this.hash.slice(1) + "]");
          var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
          if ($target) {
            var targetOffset = $target.offset().top; // height pixel values

            $(this).click(function() {
              $("#nav li a").removeClass("active"); // remove class 'active' from the current slide
              $(this).addClass('active'); // add class 'active' to the desired slide
              $("html, body").animate({scrollTop: targetOffset}, 1000); // scroll based on offset in 1000ms
              console.log(targetOffset);
              return false;
            });
          }
        }
  });
});
