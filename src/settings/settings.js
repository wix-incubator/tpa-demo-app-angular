var app = angular.module('StarterApp', ['WixControls']);

app.controller('AppCtrl', ['$scope', function($scope) {
  console.log('setup');

    this.tabIndex = 0;

    this.onUpdate = function(key){
        return function(value){
            const data = {key: key, value: value};
            Wix.Settings.triggerSettingsUpdatedEvent(data);
            console.log(data);
        }
    }

    this.onButtonClicked = () => {
        console.log("clicked");
        this.tabIndex=2;
    }
}]);
