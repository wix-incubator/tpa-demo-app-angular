var app = angular.module('settings', ['WixControls']);

app.controller('controller', ['$scope', function($scope, myservice) {
    console.log('setup');
    $scope.a = 'my text';
    this.defaultTabIndex = 0;
    this.onUpdate = function(key) {
        return function(value) {
            const data = {
                key: key,
                value: value
            };
            Wix.Settings.triggerSettingsUpdatedEvent(data);
        }
    };
    this.onButtonClicked = function() {
        console.log("Main button clicked - switch to tab #1");
        $scope.refs.panelTabs.setActiveTab(1);
    };
    var a = function ()
    {
      $scope.b = [
       {value: '1', label: 'Enter expand mode'},
       {value: '2', label: 'Show on full screen'},
       {value: '3', label: 'Do nothing'}
     ];
      Wix.getSitePages(function(data) {
        $scope.b = [
         {value: '1', label: 'Enter expand mode'},
         {value: '2', label: 'Show on full screen'},
         {value: '3', label: 'Do nothing'}
       ];
      })
    }
    a();
}]);
