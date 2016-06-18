module.exports = function(app) {
  app.directive('photoAlbum', function() {
    return {
      replace: true,
      templateUrl: './templates/photos/photo_album.html',
      scope: {
        photos: '=',
        mode: '=',
        title: '@'
      }
    };
  });
};
