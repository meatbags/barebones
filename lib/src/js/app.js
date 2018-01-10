const App = {
  init: function() {
    App.posts = $('.post');

    App.posts.each(function(i, e){
      var classes = (i == 0) ? 'nav__item active' : 'nav__item';
      var title = $(e).find('.post__title').html();
      var item = $('<div />', {
        class: classes,
        html: title
      });
      item.data('target', $(e).attr('id'));

      $('.content__nav').append(item);
    });

    App.items = $('.nav__item');

    $('.content__nav').on('click', '.nav__item', function(e) {
      App.scrollTo($(this).data('target'));
      $('.nav__item.active').removeClass('active');
      $(this).addClass('active');
    })

    $('.content__body').scroll(function(){ App.onScroll(); });
  },

  onScroll: function() {
    var y = $('.content__body').scrollTop() + window.innerHeight / 5;

    for (var i=0; i<App.items.length; i++) {
      var item = $(App.items[i]);
      var start = document.getElementById(item.data('target')).offsetTop;
      var stop = start + $('#' + item.data('target')).height();

      if (y > start && y < stop) {
        if (!item.hasClass('active')) {
          $('.nav__item.active').removeClass('active');
          item.addClass('active');
        }
        break;
      }
    }
  },

  scrollTo: function(id) {
    $('.content__body').scrollTop(document.getElementById(id).offsetTop);
  }
};

window.onload = App.init;
