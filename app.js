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
function turnLeft(){
  
  switch(this.direction){
    case "N":
    this.direction = "W";
    break;
    
    case "W":
    this.direction = "S";
    break;

    case "S":
    this.direction = "E";
    break;

    case "E":
    this.direction = "N";
    break;
  } 
  
  console.log("turnLeft was called!");
}

// ============    TURN RIGHT FUNCTION  ==========

function turnRight(){

  switch(this.direction){
    case "N":
    this.direction = "E";
    break;
    
    case "E":
    this.direction = "S";
    break;

    case "S":
    this.direction = "W";
    break;

    case "W":
    this.direction = "N";
    break;
  }
  console.log("turnRight was called!");
}

// ============    MOVEFORWARD FUNCTION  ==========

function moveForward(){

  if (this.direction==="N"){
    this.position.x --;

  } else if (this.direction === "E"){
    this.position.y ++;

  } else if (this.direction === "S"){
    this.position.x ++;

  } else if (this.direction === "W"){
    this.position.y --;
  }

  this.travelLog.push(this.position.x + "," + this.position.y);

  console.log("moveForward was called" + "." + " New position: " + this.position.x + ", " + this.position.y + "." + " Direction: " + rover.direction);
  
}

// ============    MOVEBACKWARD FUNCTION  ==========

function moveBackwards(this){

  if (this.direction==="N"){
    this.position.x ++;

  } else if (this.direction === "E"){
    this.position.y --;

  } else if (this.direction === "S"){
    this.position.x --;

  } else if (this.direction === "W"){
    this.position.y ++;
  }

    this.travelLog.push(this.position.x + "," + this.position.y);

    console.log("moveBackwards was called" + "." + " New position: " + this.position.x + ", " + this.position.y + "." + " Direction: " + this.direction);

}



// ===================   Obstacles Function ========================



// ===========================  Boundaries Function ===============================

function checkBoundaries (){
    if (this.position.x + 1 === 10){
      console.log("You are approaching unknown territory, we can't continue");
      return;

    } else if (this.position.x - 1 === -1){
      console.log("You are approaching unknown territory, we can't continue");
      return;

    } else if (this.position.y - 1 === -1){
      console.log("You are approaching unknown territory, we can't continue");
      return;

    } else if (this.position.y + 1 === 10){
      console.log("You are approaching unknown territory, we can't continue");
      return;

    } else {
      return false;
    }
  }
  



  function registerLog (position){
    this.travelLog.push(position);
    console.log(this.position);
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






