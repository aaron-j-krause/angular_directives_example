module.exports = function(app) {
  app.directive('textWidget', function() {
    return {
      templateUrl: './templates/photos/text_widget.html',
      replace: true,
      scope: {
        title: '='
      }
    };
  });
};