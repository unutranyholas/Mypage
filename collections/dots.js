Dots = new Meteor.Collection('dots');

Dots.allow({
  insert: function(userId, doc) {
    return 1;
  }
});