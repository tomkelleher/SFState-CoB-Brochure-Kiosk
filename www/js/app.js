// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

var app = angular.module('ionicApp', ['ionic', 'ngCordova'])

app.run(function($cordovaStatusbar) {
  $cordovaStatusbar.overlaysWebView(true)

  $cordovaStatusBar.style(1) //Light
  // $cordovaStatusBar.style(2) //Black, transulcent
  // $cordovaStatusBar.style(3) //Black, opaque
})

var app = angular.module('ionicApp', ['ionic'])

app.controller('MainCtrl', function($scope, $ionicModal, $q) {
  var init = function() {
    if($scope.modal) {
      return $q.when();
    }
    else {
      return $ionicModal.fromTemplateUrl('mba-modal.html', {
          scope: $scope,
          backdropClickToClose: false,
          animation: 'slide-in-up'
        })
      .then(function(modal) {
        $scope.modal = modal;
      })
    }
  };

  $scope.openModal = function() {
    // $scope.modal.show()
    init().then(function() {
      $scope.modal.show();
        });
  }

  $scope.closeModal = function() {
    // $scope.modal.hide();
    $scope.modal.remove()
    .then(function() {
      $scope.modal = null;
    });
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  // // Execute action on hide modal
  // $scope.$on('modal.hidden', function() {
  //   $scope.modal.remove();
  // });
})

app.controller('MSACtrl', function($scope, $ionicModal, $q) {
  var init = function() {
    if($scope.modal) {
      return $q.when();
    }
    else {
      return $ionicModal.fromTemplateUrl('msa-modal.html', {
          scope: $scope,
          backdropClickToClose: false,
          animation: 'slide-in-up'
        })
      .then(function(modal) {
        $scope.modal = modal;
      })
    }
  };

  $scope.openModal = function() {
    // $scope.modal.show()
    init().then(function() {
      $scope.modal.show();
        });
  }

  $scope.closeModal = function() {
    // $scope.modal.hide();
    $scope.modal.remove()
    .then(function() {
      $scope.modal = null;
    });
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  // // Execute action on hide modal
  // $scope.$on('modal.hidden', function() {
  //   $scope.modal.remove();
  // });
})

app.controller('MBASustainableCtrl', function($scope, $ionicModal, $q) {
  var init = function() {
    if($scope.modal) {
      return $q.when();
    }
    else {
      return $ionicModal.fromTemplateUrl('mba-sustinable-modal.html', {
          scope: $scope,
          backdropClickToClose: false,
          animation: 'slide-in-up'
        })
      .then(function(modal) {
        $scope.modal = modal;
      })
    }
  };

  $scope.openModal = function() {
    // $scope.modal.show()
    init().then(function() {
      $scope.modal.show();
        });
  }

  $scope.closeModal = function() {
    // $scope.modal.hide();
    $scope.modal.remove()
    .then(function() {
      $scope.modal = null;
    });
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  // // Execute action on hide modal
  // $scope.$on('modal.hidden', function() {
  //   $scope.modal.remove();
  // });
})