// Create a webpage object
var page = require('webpage').create();

// Include the File System module for writing to files
var fs = require('fs');

page.open('http://publichealth.lacounty.gov/media/coronavirus/locations.htm', function (status) {
  var content = page.content; // Gets page HTML
  fs.write('Output/lacountycovid.html',content,'w') // (Over)writes
  phantom.exit();
});