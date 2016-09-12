var app = angular.module('widget', []);

app.controller('controller', ['$scope', function($scope) {

    Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, onSettingsUpdate);

    // You can get the style params programmatically, un-comment the following snippet to see how it works:
    /*Wix.Styles.getStyleParams(style => {
     console.log(style);
     });*/

    // You can also get the style every time it changes, try this:
    /*Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, style => {
     console.log(style);
     });*/

    $scope.lastUpdate = {};

    function onSettingsUpdate(update) {
        $scope.lastUpdate = update;
        $scope.$apply();
        updateCompHeight();
    };

    function updateCompHeight(height) {
        const desiredHeight = height || document.documentElement.scrollHeight;
        Wix.setHeight(desiredHeight);
    }
}]);
