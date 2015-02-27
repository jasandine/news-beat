newsBeat.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)

  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName,
                                 birthday: $scope.reporterBirthday,
                                 experience: $scope.reporterExperience });
    $scope.reporterName = null;
    $scope.reporterBirthday = null;
    $scope.reporterExperience = null;
  }
});
