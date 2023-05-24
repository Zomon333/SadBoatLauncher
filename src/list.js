const {app} = require('electron');
const fs = require('fs');

const jsonFile = "config.json";
const jsonContents = JSON.parse(fs.readFileSync(jsonFile));

const exe = jsonContents.directory + jsonContents.name + jsonContents.version + "-";
const platforms = [
    "aix",
    'darwin',
    'freebsd',
    'linux',
    'openbsd',
    'sunos',
    'win32'
];

console.log("The following executables are the currently supported files: ");
platforms.map( (value)=>{
    console.log( exe + value);
});

process.exit(0);