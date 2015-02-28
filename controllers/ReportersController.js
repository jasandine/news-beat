newsBeat.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.beats = BeatsFactory.beats;

  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName,
      birthday: $scope.reporterBirthday,
      experience: $scope.reporterExperience,
      profile: [] });
      $scope.reporterName = null;
      $scope.reporterBirthday = null;
      $scope.reporterExperience = null;
    };
  });
