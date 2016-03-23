(function(){
  function AlbumCtrl(){
    this.albumData = albumPicasso;
  }

  angular
    .module('rockJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();
