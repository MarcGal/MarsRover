// Rover Object Goes Here

var rover = {
  direction: "N",
  position: [0,0],
  travelLog: [],
};



// ====================== MARS GRID ====================

var mars = [
  [0,1,2,3,4,5,6,7,8,9],
  [1,1,2,3,4,5,6,7,8,9],
  [2,1,2,3,4,5,6,7,8,9],
  [3,1,2,3,4,5,6,7,8,9],
  [4,1,2,3,4,5,6,7,8,9],
  [5,1,2,3,4,5,6,7,8,9],
  [6,1,2,3,4,5,6,7,8,9],
  [7,1,2,3,4,5,6,7,8,9],
  [8,1,2,3,4,5,6,7,8,9],
  [9,1,2,3,4,5,6,7,8,9],
];

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
    rover.position[1]++;

  } else if (rover.direction === "S"){
    rover.position[1]--;

  } else if (rover.direction === "E"){
    rover.position[0]++;

  } else if (rover.direction === "W"){
    rover.position[0]--;
  }

  rover.travelLog.push(rover.position[0] + "," + rover.position[1]);

  console.log("moveForward was called" + "." + " New position: " + rover.position[0] + ", " + rover.position[1] + "." + " Direction: " + rover.direction);
  
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

directions('rfffrfff');


// ===================   Boundaries Function =======================

// function boundaries (position){
    
// }
