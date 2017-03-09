//Biographical information
var bio = {
  "name": "Dean Davis",
  "role": "Mechanical Engineer & Web Developer",
  "welcomeMessage": "Bringing creative solutions to both hardware and software engineering",
  "bioPic": "images/Dean1.jpg",
  "contacts": {
    "mobile": "801-372-9251",
    "email": "ddavis@windwardengineering.com",
    "github": "deanadavis",
    "location": "Spanish Fork, UT"
  },
  "skills": ["Mechanical Engineering (20+ years)",
    "Wind Turbine Engineering",
    "Wind Turbine Testing", "Data Collection & Processing",
    "Web Development"
  ]
};

//This adds the Name and Role to the header.
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var gear =
  "<iframe src='gears2.html' align='right' scrolling='no' frameborder='0'></iframe>";

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(gear);

//Build the contact list.
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);

//Build the bio pic section.
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#bioStuff").append(formattedbioPic);
$("#bioStuff").append(formattedwelcomeMsg);
$("#bioStuff").append(HTMLskillsStart);

function displaySkills() {
  for (skillsCount = 0; skillsCount < bio.skills.length; ++
    skillsCount) {
    var formattedskills = HTMLskills.replace("%data%", bio.skills[
      skillsCount]);
    $("#bioStuff").append(formattedskills);
  }
}

displaySkills();

//Educational information (traditional institutions and online courses)
var education = {
  "schools": [{
      "name": "University of Utah",
      "location": "Salt lake City, UT",
      "degree": "Masters of Science",
      "major": "Mechanical Engineering",
      "dates": 1992,
      "url": "http://uofu.com"
    },
    {
      "name": "Cal Poly",
      "location": "San Luis Obispo, CA",
      "degree": "Bachelors of Science",
      "major": "Mechanical Engineering",
      "dates": 1990,
      "url": "http://calpoly.com"
    },
    {
      "name": "Utah Valley University",
      "location": "Orem, UT",
      "degree": "Not completed",
      "major": "Business",
      "dates": 2016,
      "url": "http://uvu.com"
    },
  ],
  "onLineCourses": [{
      "title": "Front-End Wed Developer Nanodegree",
      "school": "Udacity",
      "dates": 2017,
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Full Stack Web Developer Nanodegree",
      "school": "Udacity",
      "dates": 2018,
      "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    }
  ]
};

//Build school data.
function displaySchools() {
  for (schoolsCount = 0; schoolsCount < education.schools.length; ++
    schoolsCount) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%",
      education.schools[schoolsCount].name);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%",
      education.schools[schoolsCount].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",
      education.schools[schoolsCount].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",
      education.schools[schoolsCount].major);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",
      education.schools[schoolsCount].degree);

    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);
    $(".education-entry:last").append(formattedSchoolDegree);
  }
}

displaySchools();

$("#education").append(HTMLonlineClasses);
$("#education").append(HTMLschoolStart);

//Build on-line school data.
function displayOnlineSchools() {
  for (onlineCount = 0; onlineCount < education.onLineCourses.length; ++
    onlineCount) {
    $("#education").append(HTMLschoolStart);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",
      education.onLineCourses[onlineCount].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",
      education.onLineCourses[onlineCount].school);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%",
      education.onLineCourses[onlineCount].dates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%",
      education.onLineCourses[onlineCount].url);

    $(".education-entry:last").append(formattedOnlineTitle +
      formattedOnlineSchool);
    /*    $(".education-entry:last").append(formattedOnlineSchool);*/
    $(".education-entry:last").append(formattedOnlineDates);
    $(".education-entry:last").append(formattedOnlineURL);

    /*I can't understand why the following 4 lines
     can't be used instead of the above 3 lines
        $(".education-entry:last").append(formattedOnlineTitle);
        $(".education-entry:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);*/
  }
}

displayOnlineSchools();

//Work information
var work = {
  "jobs": [{
      "employer": "Endurance Wind Power",
      "title": "Test Site Manager",
      "location": "3815 E. U.S. Highway-6, Spanish Fork, UT",
      "dates": "2007-2016",
      "description": "Ran test facility to test, evaluate and certify wind turbines"
    },
    {
      "employer": "Windward Engineering",
      "title": "President",
      "location": "Spanish Fork, UT",
      "dates": "1994-present",
      "description": "Perform engineering design, computer modeling, and testing of over a dozen wind turbines."
    }
  ]
};

//Build work display
function displayWork() {
  for (jobCount = 0; jobCount < work.jobs.length; ++jobCount) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[
      jobCount].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[
      jobCount].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[
      jobCount].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",
      work.jobs[jobCount].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

//Project information
//Must have images array be an "empty array" for projects.projects.images even if there are zero images
// zero images otherwise causes error.
var projects = {
  "projects": [{
      "title": "Certification testing",
      "dates": "2007-2016",
      "description": "Performed tests and submitted tests for certification.  Tests were in accorande with IEC standards and included Power Performance, Acoustic, and Loads.",
      "images": ["images/CT_Xacoustic-360_small.jpg",
        "images/CT_4660Acoustic-360_small.jpg",
        "images/CT_Windspire-360_small.jpg",
        "images/CT_XbladeClean-740x480_medium_crop.jpg",
        "images/CT_Whispter-360_small.jpg"
      ]
    },
    {
      "title": "Component fatigue testing",
      "dates": "2012-2015",
      "description": "Designed, built and tested components in accelerated fatige tests to evaluate fatigue life.",
      "images": ["images/CFT_4660Overspeed-360_small.jpg",
        "images/CFT_4660shaft-360_small.jpg",
        "images/CFT_yawDrive-360_small.jpg",
        "images/PT_Xinstrumentation-360_small.jpg",
        "images/CFT_YawMotorBench-360_small.jpg",
        "images/CFT_hubTester-360_small.jpg"
      ]
    },
    {
      "title": "Prototype testing",
      "dates": "1995-2006",
      "description": "Tested prototype wind turbines for performance and loads.",
      "images": ["images/PT_3120-360_small.jpg",
        "images/PT_Vyrid-360_small.jpg",
        "images/PT_Ssundog-360_small.jpg",
        "images/PT_Albatross-360_small.jpg",
        "images/PT_Synergy35-360_small.jpg",
        "images/PT_SynergySK-360_small.jpg",
        "images/PT_Synergy25-360x535_small_crop.jpg",
        "images/PT_Synergy6-360x535_small_crop.jpg",
        "images/PT_Dean-360x535_small_crop.jpg"
      ]
    },
    {
      "title": "Web Responsive Design Project",
      "dates": "2017",
      "description": "Designed a responsive web.",
      "images": ["images/Web_full-805_fixed.jpg",
        "images/WebMobil-297_fixed.jpg"
      ]
    }
  ]
};

//Build project display
projects.display = function() {
  for (i = 0; i < projects.projects.length; ++i) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",
      projects.projects[i].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%",
      projects.projects[i].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace(
      "%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[i].images.length > 0) {
      for (j = 0; j < projects.projects[i].images.length; ++j) {
        var formattedImage = HTMLprojectImage.replace("%data%",
          projects.projects[i].images[j]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

projects.display();

$("#mapDiv").append(googleMap);

$('.iframe-full-height').on('load', function() {
  this.style.height = this.contentDocument.body.scrollHeight +
    'px';
});

/*$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
*/