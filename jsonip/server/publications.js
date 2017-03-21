Meteor.publish('schemes',function(){
	return AllSchemes.find();
});

