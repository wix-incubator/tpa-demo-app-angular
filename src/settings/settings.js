require('./css/settings.scss');
var app = angular.module('StarterApp', ['WixControls']);

app.controller('AppCtrl', ['$scope', function($scope) {
  console.log('setup');

  $scope.defaultTabIndex = 0;
  $scope.msgIsValid = false;
  $scope.emailIsValid = false;
  $scope.buttonDisabled = true;

  $scope.onUpdate = function (key) { //setup a callback function for components to use when changed
    return function (value) {
      const data = {key: key, value: value};
      Wix.Settings.triggerSettingsUpdatedEvent(data);
      console.log(data);
    }
  };

  $scope.dropDownOptions = [
    {value: '1', label: 'Enter expand mode'},
    {value: '2', label: 'Show on full screen'},
    {value: '3', label: 'Do nothing'}
  ];

  $scope.alignmentOptions = [
    {value: '0', label: 'A title and a description'},
    {value: '1', label: 'Just a title'},
    {value: '2', label: 'Just a description'}
  ];

  $scope.onRateUs = function() {
      console.log('Thanks for rating us, you rock!');
      Wix.Settings.openReviewInfo();
  }

  $scope.clickUpgrade = function () {
    Wix.Settings.openBillingPage();
  }

  $scope.onButtonClicked = function () {
    console.log("Main button clicked - switch to tab #1");
    $scope.refs.panelTabs.setActiveTab(1);
  }

  $scope.validateMessage = function (msg) {
    return msg.length > 4;
  }

  $scope.emailChanged = function (email) {
    $scope.emailIsValid = $scope.validateEmail(email);
  }

  $scope.msgChanged = function(msg) {
    $scope.msgIsValid = $scope.validateMessage(msg);
  }

  $scope.validateEmail = function (email) {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  }
}]);
