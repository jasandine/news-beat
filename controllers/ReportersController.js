newsBeat.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)

  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName,
                                 age: $scope.reporterAge,
                                 experience: $scope.reporterExperience });
    $scope.reporterName = null;
  }
});
