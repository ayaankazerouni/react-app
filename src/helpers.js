var helpers = {
  slugToDisplay(slug) {
    slug = slug.replace(new RegExp('_', 'g'), ' ');
    return slug.replace(/(^| )(\w)/g, (x) => {
      return x.toUpperCase();
    });
  },
  initSmoothScroll() {
    $('#top').on('click', function(e) {
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

      });
    })
  },
  initImagePicker() {
    $('select').imagepicker({
      show_label: true
    });
  },
  initFormEvents() {
    $.support.placeholder = false;
    test = document.createElement('input');
    if('placeholder' in test) $.support.placeholder = true;

    if ($.support.placeholder) {
      $('form li.form-input').each(function() {
        $(this).addClass('js-hide-label');
      });
    }

    $('form li.form-input').find('input').on('keyup blur focus', function(e) {
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
        } else {
          parent.toggleClass('js-hide-label');
        }
      }
    });

    $('ul.thumbnails li').on('click tap', function() {
      $('ul.thumbnails .thumbnail').removeClass('selected');
      $(this).find('div').addClass('selected');
    })
  }
}

module.exports = helpers;
