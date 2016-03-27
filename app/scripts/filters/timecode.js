(function(){
  function timecode(){
    return function(seconds){
      return buzz.toTimer(seconds);
    };
  }

  angular
    .module('rockJams')
    .filter('timecode', timecode);
})();
