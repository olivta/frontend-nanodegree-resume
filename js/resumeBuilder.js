/*
$("#main").append("Olivier Tabusse");

var awesomeThoughts = "I am Olivier Tabusse and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts);

var name = "Olivier Tabusse";
var role = "Deputy Managing Director";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/


var bio = {
	"name": "Olivier Tabusse",
	"role": "Deputy Managing Director",
		"contacts": {
		"mobile": "415-860-9541",
		"email": "olivier@tabusse.com",
		"github": "olivtab",
		"twitter": "Otabusse",
		"location": "San Francisco"
	},
	"welcomeMessage": "Thanks to read my resume!",
	"skills": [
		"proactive", "efficient", "hands-on"
	],
	"biopic": "images/me.jpg",
	"display": function() {		
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedbioPic);
		var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedmobile);
		var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedemail);
		var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedgithub);
		var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedtwitter);
		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedlocation);

		$("#footerContacts").append(formattedmobile);
		$("#footerContacts").append(formattedemail);
		$("#footerContacts").append(formattedgithub);
		$("#footerContacts").append(formattedtwitter);
		$("#footerContacts").append(formattedlocation);

		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i=0; i<bio.skills.length; i++){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#header").append(formattedSkill);
			}
		}
	}
};
bio.display();

var education = {
	"schools": [
	{
		"name": "INP",
		"location": "Grenoble",
		"degree": "MS",
		"majors": ["Industrial engineering"],
		"dates": 1989,
		"url": "www.grenoble-inp.fr/welcome"
	},
	{
		"name": "IEP",
		"location": "Grenoble",
		"degree": "BA",
		"majors": ["Economics", "Finance"],
		"dates": 1989,
		"url": "www.sciencespo-grenoble.fr/en/"
	}
	]
	,
	"onlineCourses": [
	{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates": 2015,
		"url": "www.tabusse.com",
	}
	],
	"display" : function () {
		for (var  i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);
			var formattedschoolname = HTMLschoolName.replace("%data%",education.schools[i].name);
			var formattedschooldegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
			var formattedschoolnamedegree = formattedschoolname + formattedschooldegree;
			$(".education-entry:last").append(formattedschoolnamedegree);
			var formattedschoollocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
			$(".education-entry:last").append(formattedschoollocation);
			var formattedschooldates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
			$(".education-entry:last").append(formattedschooldates);
			for (var j = 0; j < education.schools[i].majors.length; j++) {
				var formattedschoolmajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
				$(".education-entry:last").append(formattedschoolmajor);
			}
		}
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
			var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].Url);

			var formattedonlineData = formattedonlineTitle + formattedonlineSchool + formattedonlineDates;
		    $(".education-entry:last").append(formattedonlineData);
		    $(".education-entry:last").find('a').attr("href", formattedonlineURL);
		}
	}
};
education.display();

// other semantic for object
//education["lastSchoolName"] = "INP";
//education["lastSchoolDuration"] = "1983-1989";
//education["lastSchoolCity"] = "Grenoble, France";

//$("#main").append(work["position"]);
//$("#education").append(education.lastSchoolName);

var work = {
	"jobs": [
	{
	"employer": "Accolade",
	"title": "Deputy Managing Director",
	"location": "Casablanca",
	"dates": "2003-2014",
	"description": "Accolade offers offshore services in CRM, BPO and software development for European customers in e-commerce (Promovacances, Mistergooddeal, Delamaison), insurance (Aegon), banking (Credit Agricole)"
	},
	{
	"employer": "Webhelp",
	"title": "Chief Operating Officer",
	"location": "Paris",
	"dates": "2001-2003",
	"description": "Pioneer company for offshore outsourcing, now major CRM outsourcer in Europe (Rev: $600 M)"
	},
	{
	"employer": "Sopra Steria, Orgaconsultants",
	"title": "Managing consultant",
	"location": "Paris",
	"dates": "1989-2001",
	"description": "Sopra is one of Europe's longest established IT service companies (35,000+ employees, $3,8 bn in 2013)"
	}
	],
	"display": function() {
		for(job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}	
	}
};
work.display();

/*this function was copied in helper.js file.
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
  logClicks(x,y);
});*/

function locationizer(work_obj) {
var locationArray=[];

for (job in work_obj.jobs) {
	var newlocation = work_obj.jobs[job].location;
	locationArray.push(newlocation);
}
return locationArray;
}

var projects = {
	"project": [
	{
	"title": "Staffing calculator for call center",
	"dates": "2010",
	"description": "The project aimed to estimate the workforce required for a inbound call volume forecast",
	"image": [
	"", ""
	]
    }
	],
	"display": function () {
		for(project in projects.project) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLworkDates.replace("%data%", projects.project[project].dates);
			$(".project-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLworkDescription.replace("%data%", projects.project[project].description);
			$(".project-entry:last").append(formattedDescription);
			if (project in projects.project) {
				for (image in projects.project[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].image[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
};
projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
//initializeMap(); // in already in helper.js