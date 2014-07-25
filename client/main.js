Template.page.helpers({
	dots: function() {
		return Dots.find();
	}
});

Template.page.helpers({
	users: function() {
		return Online.find();
	}
});

Template.page.events({
	'mouseup': function(e) {
		e.preventDefault();
		var position = {
			x: e.pageX,
			y: e.pageY
		};
	position._id = Dots.insert(position);
	},
	'dblclick #page': function(e) {
		e.preventDefault();
		var message = prompt("Your message", "Sasai");

		var position = {
			x: e.pageX,
			y: e.pageY,
			text: message
		}
	position._id = Dots.insert(position);
	},
	'mousemove': function(e) {
		
		Deps.autorun(function () {
		if (!Session.get("logged")){
			var cursorPosition = {
				x: e.pageX,
				y: e.pageY,
			}
			cursorPosition._id = Online.insert(cursorPosition);
			Session.set("logged", cursorPosition._id);
		} else {
			Online.update({ 
			    _id: Session.get("logged") 
			}, {
			    $set: { 
			        x: e.pageX,
			        y: e.pageY,
			    }
			});

		};
});


	}
});

Meteor.subscribe('dots');

Meteor.subscribe('online');


