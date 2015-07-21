var Datastore = require('nedb');
var path = require('path');
var app = require('app'); // Module to control application life.
var BrowserWindow = require('browser-window'); // Module to create native browser window.
var ipc = require('ipc');
// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('will-finish-launching', function(){
  console.log('update check');
})

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  var db = new Datastore({ filename: process.cwd() + '/app.db',   autoload: true});


  //   // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: true
  });

  // // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  ipc.on('machin', function(event, arg) {
    console.log(arg); // prints "ping"
    event.returnValue = 'azer'
  });


  // Open the devtools.
  // mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
