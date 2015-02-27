newsBeat.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  factory.beats = [];

  factory.addBeat = function() {
    factory.beats.push({ name: factory.beatName, id: factory.beats.length + 1, students: [] });
    factory.beatName = null;
  };

  return factory;
});
