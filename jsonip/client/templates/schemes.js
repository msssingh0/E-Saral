var fetchedData;

Template.schemes.onRendered = function(){
	console.log(bhamAckID);
	console.log(clientID);
	fetchedData = Meteor.call('bhamService',bhamAckID,clientID,function(err,res){
		// fetchedData=res;
		console.log(res);
		// console.log("break");
		// console.log(fetchedData);
		return res;
	});
		console.log(fetchedData);
};



Template.editScheme.helpers({
	data:function(){
		return AllSchemes.find().fetch();
	}
});