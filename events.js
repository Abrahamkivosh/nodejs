// listening to event 
const fs = require("fs")
const fileToRead = "./blogs.txt";
const rs = fs.createReadStream(fileToRead)
rs.on('open',(stream)=>{
    console.log(`The file is open ${stream}`)
})

// event module can create, fire and listen for your events
const events = require('events')
const eventEmitter = new events.EventEmitter();

// Create event handler
var myEventHandler = ()=>{
    console.log("I hear a stream")
}
// Assign the event handler to an event
eventEmitter.on('scream',myEventHandler);
eventEmitter.on('scream',(...args)=>{
    console.log("Event handler with args : "+ args)
})
// Fire the scream event
eventEmitter.emit("scream",[1,2,3])