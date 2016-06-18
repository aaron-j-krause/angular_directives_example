module.exports = function(app) {
  app.directive('thumbnailWidget', function() {
    return {
      replace: true,
      templateUrl: './templates/photos/thumbnail_widget.html',
      scope: {
        url: '='
      }
    };
  });
};