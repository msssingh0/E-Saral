
Template.editScheme.helpers({
	data:function(){
		return AllSchemes.find().fetch();
	},
	jsondata:function(){
		
	}
});

Template.editScheme.events({
	'click #addNewScheme':function(){
		// var obj = new Object();
		eval('var obj='+$('#schemeJSON').val());
		Meteor.call('addScheme',obj);
	},
	'click #deleteScheme':function(){
		var obj = this.data;
		Meteor.call('deleteScheme',obj);
	}
});