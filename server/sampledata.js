if (Articles.find().count() === 0) {

	Articles.insert({
		title: 'Title',
		content: 'Content',
		date: new Date().getTime()
	});

};

Meteor.publish('articles', function() {
  return Articles.find();
});