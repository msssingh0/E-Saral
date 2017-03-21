Meteor.methods({
  // The method expects a valid IPv4 address
  'bhamService': function (bhamAckID,client_id) {
    console.log('Method.bhamService for', bhamAckID,client_id);
    // Construct the API URL
    var apiUrl = 'https://apitest.sewadwaar.rajasthan.gov.in/app/live/Service/hofAndMember/ForApp/'+bhamAckID+'?client_id='+client_id;
    console.log(apiUrl);
    // query the API
    var response = HTTP.get(apiUrl).data;
    console.log(response);
    return response;
  }
});

Meteor.methods({
  'addScheme':function(obj){
    AllSchemes.insert(obj);
  }
});

Meteor.methods({
  'deleteScheme':function(obj){
    AllSchemes.remove(obj);
  }
});
