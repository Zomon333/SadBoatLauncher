const {app} = require('electron');
const {platform} = require('node:process');
const fs = require('fs');
const { execFile, exec } = require('node:child_process');

// import {platform} from 'node:process';

app.whenReady().then( ()=>{
    // Read a JSON describing executable name and version
    const defaultData = {
        name:"SadBoatEngine",
        version:"*",
        directory:"./output/"
    };

    const jsonFile = "config.json";
    const jsonContents = JSON.parse(fs.readFileSync(jsonFile));

    // Concactenate to get the appropriate title of the engine
    const exe = jsonContents.directory + jsonContents.name + jsonContents.version + "-" + platform;

    // Launch the engine
    execFile(exe);
    process.exit(0);
});