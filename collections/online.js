Online = new Meteor.Collection('online');

Online.allow({
  insert: function(userId, doc) {
    return 1;
  },
  update: function(userId, doc) {
    return 1;
  }
});