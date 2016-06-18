module.exports = function(app) {
  app.directive('fullSizeWidget', function() {
    return {
      templateUrl: './templates/photos/full_size_widget.html',
      replace: true,
      scope: {
        url: '='
      }
    };
  });
};
