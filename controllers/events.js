var document = require('../models/events.js')



exports.insertEvent = function(request, res) {
	var id = request.body.event_id;
	var name = request.body.event_name;
	var desc = request.body.event_desc;
	var detail = request.body.event_detail;
	var organiser_name = request.body.event_organiser_name;
	var organiser_email = request.body.event_organiser_email;
	var organiser_contact = request.body.event_organiser_contact;
	var logo = request.body.event_logo;
	var prizemoney = request.body.event_prizemoney;
	document.insertEvent(id, name,desc,detail,organiser_name,organiser_email,organiser_contact,logo,prizemoney, function(err, result) {
		if(err) {
			console.log(err);
			res.send(500);
		}
		else {
			
			res.send(200, result);
		}
			
	});

};

exports.showEvent = function(request, res) {
	var id = request.params.id;
	
	document.getEvent(id, function(err, result) {
		if(err) {
			console.log(err);
			res.send(500);
		}
		else {
			console.log(result);
			res.send(200, result);
		}

	});
};

exports.deleteEvent = function(request, res) {
	var id = request.params.id;
	
	document.deleteEvent(id, function(err, result) {
		if(err) {
			console.log(err);
			res.send(500);
		}
		else {
			console.log(result);
			res.send(200, result);
		}

	});
};

exports.updateEvent = function(request, res) {
	var id = request.body.event_id;
	var name = request.body.event_name;
	var desc = request.body.event_desc;
	var detail = request.body.event_detail;
	var organiser_name = request.body.event_organiser_name;
	var organiser_email = request.body.event_organiser_email;
	var organiser_contact = request.body.event_organiser_contact;
	var logo = request.body.event_logo;
	var prizemoney = request.body.event_prizemoney;
	document.updateEvent(id, name,desc,detail,organiser_name,organiser_email,organiser_contact,logo,prizemoney, function(err, result) {
		if(err) {
			console.log(err);
			res.send(500);
		}
		else {
			
			res.send(200, result);
		}
			
	});

};