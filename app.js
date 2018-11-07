// Rover Object Goes Here

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
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

// ============    MOVEFORWARD FUNCTION  ==========

function moveForward(rover){

  if (rover.direction==="N"){
    rover.y += 1;

  } else if (rover.direction === "S"){
    rover.y -= 1;

  } else if (rover.direction === "E"){
    rover.x += 1;

  } else if (rover.direction === "W"){
    rover.x -= 1;
  }

  rover.travelLog.push(rover.x + "," + rover.y);

  console.log("moveForward was called" + "." + " New position: " + rover.x + ", " + rover.y + "." + " Direction: " + rover.direction);
  
}


// ============    TAKE DIRECTIONS  FUNCTION  ==========

var commands = '';

function directions (commands){
  for (var i = 0; i < commands.length; i++){

    if (commands[i]=== 'r'){
      turnRight(rover);

    } else if (commands[i] === 'l'){
      turnLeft(rover);

    } else if (commands[i] === 'f'){
      moveForward (rover);
    }
  }
  console.log(rover.travelLog);
}

// directions('rfffrfff');


// ===================   Boundaries Function =======================

function boundaries (position){
    
}
