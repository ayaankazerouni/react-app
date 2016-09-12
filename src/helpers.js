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
  },
  getLlamaBio(llama) {
    if (llama === 'sherriff_llama') {
      return "A long time ago in the quiet, western town of LLamaton, Madam Rosmerta LLama gave birth to the one we all came to know as Sheriff Llama. Sheriff Llama is a brooder that can often be found at ‘Hay Down’, the town’s local watering hole. When he is not in a hay-coma he is out and about fighting crime. Because he's basically Batman.";
    } else if (llama === 'photogenic_llama') {
      return "Even though it looks like Photogenic Llama has everything. She doesn’t. Photogenic Llama has spent many years trying to convince people that she is not just another pretty face. She has beliefs and ideals and wants to do a lot with her life but ever since someone managed to get that one picture of her and it turned into a viral internet meme, her life has been about nothing but this photograph. She is here to use the Bahama Llama platform as the stage needed to show her fans that she is so much more.";
    } else if (llama === 'happy_llama') {
      return "What can you say about Happy Llama. Just look at that smile. Happy Llama doesn’t even know he is in the competition, and somehow is still a strong contender to win.";
    } else if (llama === 'unhappy_llama') {
      return "Happy llama forced Unhappy Llama to go on this trip with him, so he can turn that frown upside down and then there can be two Happy Llamas! Unhappy Llama is hoping that the dark underbelly of competitive Llama-ing will destroy Happy Llama's child-like innocence. Unhappy Llama was tired of his shit, anyway.";
    } else if (llama === 'surfer_dude_llama') {
      return "Surfer Dude Llama doesn’t even care man. He’s just here because he is. There were some cool waves up in Bahama Llama town and he decided to come along because Photogenic Llama was going. He noticed that Sherriff Llama, his rival in love, was going to be participating in the Bahama Llama competition and decided to participate with him. You may not like him. But that’s just like, your opinion, man.";
    } else if (llama === 'canadian_llama') {
      return "Canadian Llama eh. A lover of maple syrup and ice hockey. Canadian Llama moved to America a long while ago. This year was a big year for Canadian Llama. He finally got his US citizenship after working as a Software Engineer on an H1 Visa for a long LONG time. Canadian Llama decided that the first thing he would do as an American citizen would be become Bahama Llama. All those years ago he lied on his citizen application form. He never wanted to be a software engineer. This was his dream, his passion, his calling. TO BE THE FIRST CANADIAN BAHAMA LLAMA EVER.";
    } else if (llama === 'deep_llama') {
      return "Renowned author of, ‘The Llama Who Sold Her Ferrari’, Deep Llama needs no introduction. Many years ago, Deep Llama ran away to the Himalayas and was not heard from for 3 years. Suddenly she emerged from the Himalayas with a manuscript. At first everyone thought it was hay. But it wasn’t hay. It was the first copy of, ‘The Llama Who Sold Her Ferrari’. Deep Llama is here researching her new book. ‘The Secret Llama (working title)’.";
    } else if (llama === 'suspicious_llama') {
      return "If you met suspicious Llama a mere 2 years ago he would have just been any old Llama. One horrible night, a young lad walked up to the Llama with a fist full of hay in his hand. The Llama pranced forward to get a nibble in. Just as his mouth was clamping shut, the boy pulled his hand back and watched as the Llamas mouth closed around nothing. Suspicion filled the Llama as his eyes narrowed with curiosity. They say his eyes have been stuck that way ever since. Forever wary of everything, he believes that the Bahama Llama competition is rigged and is here to prove that fact."
    }
  }
}

module.exports = helpers;
