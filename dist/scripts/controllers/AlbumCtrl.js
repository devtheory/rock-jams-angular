(function(){
  function AlbumCtrl(Fixtures, SongPlayer){
    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
  }

  angular
    .module('rockJams')
    .controller('AlbumCtrl', ["Fixtures", "SongPlayer", AlbumCtrl]); //dependency injection!
})();
