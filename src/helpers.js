var helpers = {
  slugToDisplay(slug) {
    slug = slug.replace(new RegExp('_', 'g'), ' ');
    return slug.replace(/(^| )(\w)/g, function(x) {
      return x.toUpperCase();
    });
  }
};

module.exports = helpers;
