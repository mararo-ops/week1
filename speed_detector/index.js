// Function to check speed and assign demerit points
function detectingSpeed(speed) {
    const speedLimit = 70;// Speed limit constant
    
    const kmPerPoint = 5;// KM per demerit point
    
    if (speed < speedLimit) {
        console.log('Ok');
    }// If speed is less than speed limit, print "Ok"
    const points = (speed - speedLimit) / kmPerPoint; // Calculate the number of demerit points

    if (points > 12) {
        console.log('License suspended');// If points are more than 12, print "License suspended"
    } else {
        console.log("Points:", points);
    }
}
checkSpeed(80);// Testing the function with a speed of 80



