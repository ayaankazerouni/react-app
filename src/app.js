(($, window, document) => {
  $(document).ready(() => {
    $.support.placeholder = false;
    test = document.createElement('input');
    if('placeholder' in test) $.support.placeholder = true;

    if ($.support.placeholder) {
      $('form li').each(function() {
        $(this).addClass('js-hide-label');
      });
    }

    $('form li').find('input').on('keyup blur focus', function(e) {
      var self = $(this);
      var parent = self.parent();

      if (e.type == 'keyup') {
        parent.toggleClass('js-hide-label', self.val() === '');
      } else if (e.type == 'blur') {
        parent.toggleClass('js-hide-label', self.val() === '');
        if (self.val() !== '') {
          parent.addClass('js-unhighlight-label');
        }
      } else if (e.type == 'focus') {
        if (self.val() !== '') {
          parent.removeClass('js-unhighlight-label');
        }
      }
    });
  });
})(window.jQuery, window, window.document);
