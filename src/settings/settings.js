require('./css/main.scss');
var app = angular.module('StarterApp', ['WixControls']);

app.controller('AppCtrl', ['$scope', function($scope) {
  console.log('setup');

  this.defaultTabIndex = 0;

  this.onUpdate = function (key) {
    return function (value) {
      const data = {key: key, value: value};
      Wix.Settings.triggerSettingsUpdatedEvent(data);
      console.log(data);
    }
  };

  this.onButtonClicked = function () {
    console.log("Main button clicked - switch to tab #1");
    $scope.refs.panelTabs.setActiveTab(1);
  };

}]);
