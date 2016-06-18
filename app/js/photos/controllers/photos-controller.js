module.exports = function(app) {
  app.controller('PhotosController', PhotosController);

  function PhotosController($scope) {
    this.model = {};
    this.mode = 'full';
    this.switchmode = function(mode) {
      this.mode = mode;
      console.log(this, this.mode, mode);
    };

    $scope.hello = 'controller hello';
    this.photo = {
      title: 'test photo',
      url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
    };
    this.slothPhotos = [
      {
        url: 'https://pbs.twimg.com/profile_images/2987611038/efc6e416e7bccabd14eaa640a60dd891_400x400.jpeg',
        title: 'YOOOOOO'
      },
      {
        url: 'https://pbs.twimg.com/profile_images/3774080612/7d840b52d729e4621f958a0d1880fa02_400x400.jpeg',
        title: 'aw man'
      },
      {
        url: 'https://pbs.twimg.com/profile_images/557719657109794816/cjSThRW7.jpeg',
        title: 'u mad?'
      }
    ];

    this.hyraxPhotos = [
      {
        url: 'http://2.bp.blogspot.com/_xPRJcY91HB4/SrAw9rUJBWI/AAAAAAAAAl4/LmKPE_bb7rY/s400/Dassie.jpg',
        title: 'Elephant or Vampire?'
      },
      {
        url: 'https://s-media-cache-ak0.pinimg.com/736x/1b/f8/4c/1bf84cc6e9544e5602b8802a31857032.jpg',
        title: 'Mah cave'
      }
    ];


    this.logButton = function() {
      console.log('hello from contoller');
    };
  }
};
