Template.page.helpers({
    articles: function() {
    	return Articles.findOne({}, {sort: {date: -1}});
    }
});

Template.form.helpers({
    articles: function() {
    	return Articles.findOne({}, {sort: {date: -1}});
    }
});

Template.article.helpers({
	dateString: function() {

		var date = new Date(this.date);
		return moment(date).calendar();

	}
});

Template.form.helpers({
	dateString: function() {

		var date = new Date(this.date);
		return moment(date).calendar();

	}
});

Meteor.subscribe('articles');

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});

Template.form.events({
	'submit form': function(e) {
	e.preventDefault();

	var article = {
		title: $(e.target).find('[name=title]').val(),
		content: $(e.target).find('[name=content]').val(),
		date: new Date().getTime()
	}

	article._id = Articles.insert(article);
  }
});