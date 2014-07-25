Meteor.publish('dots', function() {
  return Dots.find();
});

Meteor.publish('online', function() {
  return Online.find();
});