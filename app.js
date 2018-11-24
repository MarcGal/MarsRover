// Rover Object Goes Here

var rover = {
  direction: "N",
  position: {
    x: 0,
    y: 0,
  },
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
    rover.position.x --;

  } else if (rover.direction === "E"){
    rover.position.y ++;

  } else if (rover.direction === "S"){
    rover.position.x ++;

  } else if (rover.direction === "W"){
    rover.position.y --;
  }

  rover.travelLog.push(rover.position.x + "," + rover.position.y);

  console.log("moveForward was called" + "." + " New position: " + rover.position.x + ", " + rover.position.y + "." + " Direction: " + rover.direction);
  
}

// ============    MOVEBACKWARD FUNCTION  ==========

function moveBackwards(rover){

  if (rover.direction==="N"){
    rover.position.x ++;

  } else if (rover.direction === "E"){
    rover.position.y --;

  } else if (rover.direction === "S"){
    rover.position.x --;

  } else if (rover.direction === "W"){
    rover.position.y ++;
  }

    rover.travelLog.push(rover.position.x + "," + rover.position.y);

    console.log("moveBackwards was called" + "." + " New position: " + rover.position.x + ", " + rover.position.y + "." + " Direction: " + rover.direction);
  
}



// ===================   Obstacles Function ========================



// ===========================  Boundaries Function ===============================

function checkBoundaries (rover){
    if (rover.position.x + 1 === 10){
      console.log("You are approaching unknown territory, we can't continue");
      return;

    } else if (rover.position.x - 1 === -1){
      console.log("You are approaching unknown territory, we can't continue");
      return;

    } else if (rover.position.y - 1 === -1){
      console.log("You are approaching unknown territory, we can't continue");
      return;

    } else if (rover.position.y + 1 === 10){
      console.log("You are approaching unknown territory, we can't continue");
      return;

    } else {
      return false;
    }
  }
  



  function registerLog (rover, position){
    rover.travelLog.push(position);
    console.log(rover.position);
  }
  

// ============    TAKE DIRECTIONS  FUNCTION  ==========

var commands = '';

function directions (commands, rover){

  for (var i = 0; i <= commands.length; i++){

  // the functions takes a string of commands. Everytime the a command
  // is executed, the function runs the boundary function and checks 
  // the rover's position to keep it inside the grid.
    
    switch (commands[i]) {
      case 'r':
        turnRight(rover);
        break;
      
        case 'l':
        turnLeft(rover);
        break;

        case 'f':
        // if (checkBoundaries(rover) === false){
          checkBoundaries(rover);
          moveForward(rover);
          registerLog(rover, rover.position);
        // } else {
        //   return;
        // }
        break;

        case 'b':
        moveBackwards(rover);
        registerLog(rover, rover.position);
        break;
    
      default:
        break;
    }
  }
  console.log(rover.travelLog);
}  






