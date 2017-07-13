require('./widget.scss');
var app = angular.module('StarterApp', []);

app.controller('WidgetCtrl', ['$scope', '$document', function($scope, $document) {

  Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, onSettingsUpdate);
  // You can get the style params programmatically, un-comment the following snippet to see how it works:
  /*Wix.Styles.getStyleParams(style => {
  console.log(style);
  });*/

  // You can also get the style every time it changes, try this:
  /*Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, style => {
  console.log(style);
  });*/
  $scope.navToHome = () => {
    Wix.getSiteMap(pages => {
      Wix.navigateToPage(pages[0].pageId.substring(1));
    });
  }

  $scope.showBox = false;

  function onSettingsUpdate(update) {
    $scope.showBox = true;
    update = stringify(update);
    $scope.settingsUpdate = update;
    $scope.$apply();
    console.log('SETTINGS UPDATED')
    updateCompHeight();
  }
  function updateCompHeight(height) {
    const desiredHeight = height || $document[0].documentElement.scrollHeight;
    Wix.setHeight(desiredHeight);
  }
  function stringify(input) {
    try {
      return JSON.stringify(input, null, 4);
    } catch (err) {
      return input;
    }
  }
}]);
