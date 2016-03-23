(function(){
  function LandingCtrl(){
    this.heroTitle = "Turn the music up!";
  }

  angular
    .module('rockJams')
    .controller('LandingCtrl', LandingCtrl);
})();
