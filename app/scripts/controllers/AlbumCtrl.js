(function(){
  function AlbumCtrl(Fixtures){
    this.albumData = Fixtures.getAlbum();
  }

  angular
    .module('rockJams')
    .controller('AlbumCtrl', ["Fixtures", AlbumCtrl]); //dependency injection!
})();
