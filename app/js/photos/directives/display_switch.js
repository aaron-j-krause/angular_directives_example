module.exports = function(app) {
  app.directive('displaySwitch', function() {
    return {
      replace: true,
      scope: {},
      require: '^ngController',
      templateUrl: './templates/photos/display_switch.html',
      link: function(scope, attr, elem, controller) {
        scope.switchmode = function() {
          controller.switchmode(scope.mode);
        };
      }
    };
  });
};
