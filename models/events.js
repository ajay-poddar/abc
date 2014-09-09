var Event = function(){
 /* Module Dependecies*/
  var mongoose = require('mongoose');
  var Schema   = mongoose.Schema;
  var ObjectId = mongoose.Schema.ObjectId;
  var path = require('path');
  var fs = require('fs');

  //Schema Defination
  eventsSchema = mongoose.Schema({
  	"event_id" : {type:String, unique:true},
  	"event_name" : String,
  	"event_desc" : String,
  	"event_detail" : String,
  	"event_organiser_name" : String,
	"event_organiser_email" : String,
	"event_organiser_contact" : String,
	"event_logo" : String,
	"event_prizemoney" : String
  });

  mongoose.connect('mongodb://localhost/techfest');

  _eventsModel = mongoose.model("event",eventsSchema);

  


 var showEvent = function(_id, _callback) {
	
	_eventsModel.findOne({ event_id: _id}, function (err, result){
		if(err) {
			_callback(err, null);
		}
		else {
			_callback(null, result);
		}
	});

};

var deleteEvent = function(_id, _callback) {
	
	_eventsModel.remove({ event_id: _id}, function (err, result){
		if(err) {
			_callback(err, null);
		}
		else {
			_callback(null, {event_id : _id});
		}
	});

};

var insertEvent = function(_id, _name,_desc,_detail,_organiser_name,_organiser_email,_organiser_contact,_logo,_prizemoney, _callback) {
	
	
		_eventsModel.find({"user-id" : _id},function(err,obj){
  		if(obj){
  			console.log("User Exists!");
  			callback(null,"User Already Exists!");
  		}else{
  			var m = new _eventsModel({event_id: _id, event_name: _name,event_desc: _desc,event_detail: _detail,event_organiser_name: _organiser_name,event_organiser_email: _organiser_email,event_organiser_contact: _organiser_contact,event_logo: _logo, event_prizemoney: _prizemoney});
  			console.log("New User!");
  			m.save(function (err, result) {
		if (err) {
			_callback(err, null);
		}
		else {
			_callback(null, { event_id: _id, event_name: _name,event_desc: _desc,event_detail: _detail,event_organiser_name: _organiser_name,event_organiser_email: _organiser_email,event_organiser_contact: _organiser_contact,event_logo: _logo, event_prizemoney: _prizemoney});
		}
	});
  		}
  	});
	

};

var updateEvent = function(_id, _name,_desc,_detail,_organiser_name,_organiser_email,_organiser_contact,_logo,_prizemoney, _callback) {
	
	_eventsModel.findOne({ event_id: _id}, function (err, result){
		if(err) {
			_callback(err, null);
		}
		else {
			result.event_id = _id;
			result.event_name = _name;
			result.event_desc = _desc;
			result.event_detail = _detail;
			result.event_organiser_name = _organiser_name;
			result.event_organiser_email = _organiser_email;
			result.event_organiser_contact = _organiser_contact;
			result.event_logo = _logo;
			result.event_prizemoney = _prizemoney;
			result.save();
			_callback(null, result);
		}
	});

};



};
exports.insertEvent = insertEvent;
exports.showEvent = showEvent;
exports.deleteEvent = deleteEvent;
exports.updateEvent = updateEvent;

module.exports = Event();