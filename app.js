// Rover Object Goes Here

var rover = {
  direction: "N",
};



// ======================

// ============    TURN LEFT FUNCTION  ==========
function turnLeft(rover){
  
  switch(rover.direction){
    case "N":
    rover.direction = "W";
    break;
    
    case "W":
    rover.direction = "S";
    break;

    case "S":
    rover.direction = "E";
    break;

    case "E":
    rover.direction = "N";
    break;
  } 
  
  console.log("turnLeft was called!");
}

// ============    TURN RIGHT FUNCTION  ==========

function turnRight(rover){

  switch(rover.direction){
    case "N":
    rover.direction = "E";
    break;
    
    case "E":
    rover.direction = "S";
    break;

    case "S":
    rover.direction = "W";
    break;

    case "W":
    rover.direction = "N";
    break;
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called");
}

