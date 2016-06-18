module.exports = function(app) {
  app.directive('firstDirective', function() {
    return {
      restrict: 'EAC',
      replace: true,
      template: '<h1>First Directive<h1/>',
      scope: {
        'url': '=',
        'text': '@'
      }
    };
  });
};
