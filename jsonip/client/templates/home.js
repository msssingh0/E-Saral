var ip=[{
	name:'Bhamashah Acknowledgement ID',
	id:'bhamAckID',
	type:'text',
	placeholder:'Bhamashah Acknowledgement ID'
},{
// 	name:'Bhamashah Member ID',
// 	id:'bhamMembID',
// 	type:'number',
// 	placeholder:'Bhamashah Member ID'
// },{
	name:'Client ID',
	id:'clientID',
	type:'text',
	placeholder:'Client ID'
}
// ,{
// 	name:'Bank Account No.',
// 	id:'bankAccNo',
// 	type:'number',
// 	placeholder:'Bank Account No.'
// },{
// 	name:'ID number',
// 	id:'IDno',
// 	type:'text',
// 	placeholder:'ID number'
// },{
// 	name:'User ID',
// 	id:'userID',
// 	type:'text',
// 	placeholder:'User ID'
// }
];

var Obj = new Object();
var fetchedData = new Object();
// var dispData = new ReactiveObject();
var searched = new ReactiveVar(0);
searched.set(false);

var searchdone= function(){
	return searched.get();
};


var trim = function(obj){
	console.log(obj);
	for(var i=0;i<obj.length;i++){
		delete obj[i]._id;
		delete obj[i].title;
		delete obj[i].category;
	}
	console.log(obj);
}

Template.home.helpers({
	ip:ip,
	data:function(){
		// Obj = AllSchemes.find().fetch();
		// console.log(AllSchemes.find().fetch());
		// Obj = trim(Obj);
		// console.log(Obj);
		// console.log(AllSchemes.find().fetch());
		return AllSchemes.find().fetch();
	},
	searched:function(){
		return searchdone();
	},
	match:function(){
		// var keynames = Object.keys()
	},
	abc:function(){
		
	}
});

Template.home.events({
	'submit #form':function(event){
		event.preventDefault();
		Meteor.call('bhamService',$('#bhamAckID').val(),$('#clientID').val(),function(err,res){
		// console.log(res);
		fetchedData = res;
		//console.log(fetchedData);
		// var keynames = Object.keys(res);
		// for(var i in keynames){
			// console.log(i);
		// }
		searched.set(true);
		Obj = AllSchemes.find().fetch();
		console.log(Obj);
		for(var j=0;j<Obj.length;j++){
			var flag=true;
		var keynames = Object.keys(Obj[j]);
		for(var i in keynames){
			if(i!='_id' && i!='title' && i!='category'){
				console.log(i);
				console.log(Obj[j]);
				console.log(res.i);
				if(Obj[j].i!=res.i){
					flag=false;;
				}
			}
		}
		if(flag){
			Obj[j].display=true;
		}
		else{
			Obj[j].display=false;
		}
		}
		console.log(Obj);	
	});
	}
});