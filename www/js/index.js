//Brent Marohnic
// AVF 1211
// Full Sail University
//
//

document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//


function onDeviceReady (){
    alert("Let's Roll!!");
}

function deviceAttributes (){
    strLong = 'Device Name: ' + device.name + '\n\ Device Cordova: ' + device.cordova + '\n\ Device Platform: ' + device.platform + '\n\ Device UUID: ' + device.uuid + ' \n\ Device Version: '  + device.version;
    navigator.notification.alert(
                                 strLong,                // message
                                 alertDismissed,         // callback
                                 'Device Attributes',    // title
                                 'Done'                  // buttonName
                                 );
    
}

// alert dialog dismissed
function alertDismissed() {
    // do something
    return;
}

// Activated by clicking on Compass Heading button
//
function compassHeading(heading) {
    navigator.compass.getCurrentHeading(compassSuccess, compassError);
}



// onSuccess: Get the current heading
//
function compassSuccess(heading) {
    navigator.notification.alert('Heading: ' + heading.magneticHeading);
}

// onError: Failed to get the heading
//
function compassError(compassError) {
    navigator.notification.alert('Compass Error: ' + compassError.code);
}


// Called if an error is encountered while taking a picture.
//
function pictureFail(message) {
    alert('Failed because: ' + message);
}

// Called when a photo is successfully taken.
//
function pictureSuccess(imageData) {
    alert("Photo saved to photo album.");
}


// The Take Picture button will call this function
//
function takePicture() {
    var pictureSource=navigator.camera.PictureSourceType,
    destinationType=navigator.camera.DestinationType;
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(pictureSuccess, pictureFail, { quality: 50,
                                destinationType: destinationType.DATA_URL,
                                saveToPhotoAlbum: true
                                });
}
