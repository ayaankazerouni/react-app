var helpers = {
  slugToDisplay(slug) {
    slug = slug.replace(new RegExp('_', 'g'), ' ');
    return slug.replace(/(^| )(\w)/g, (x) => {
      return x.toUpperCase();
    });
  },
  initImagePicker() {
    $('select').imagepicker({
      show_label: true
    });
  }
};

module.exports = helpers;
