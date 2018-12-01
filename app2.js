

function Rover (direction, position) {
    this.direction = direction;
    this.position = position;
    this.travelLog = [];
}



  Rover.prototype.sayPosition = function (){
    console.log('position x: ' + this.position.x + ', position y : ' + this.position.y);
  };

   // ============    TURN LEFT FUNCTION  ==========

  Rover.prototype.turnLeft = function (){
  
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
  };

  // ============    TURN RIGHT FUNCTION  ==========

  Rover.prototype.turnRight = function (){

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
  };

  // ============    MOVE FORWARD FUNCTION  ==========

  Rover.prototype.moveForward = function (){

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

    console.log("moveForward was called" + "." + " New position: " + this.position.x + ", " + this.position.y + "." + " Direction: " + this.direction);
  };

  // ============    MOVE BACKWARD FUNCTION  ==========

  Rover.prototype.moveBackwards  = function (){

    if (this.direction ==="N"){
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
  
  };
  
    // ============    REGISTER LOG FUNCTION  ==========

  Rover.prototype.registerLog = function (){
    this.travelLog.push(this.position);
    console.log(this.position);
  };


  // ===========================  Boundaries Function FORWARD ===============================


  Rover.prototype.checkBoundariesF = function () {
    if (this.position.x + 1 === 10 && this.direction === 'S'){
      console.log("You are approaching unknown territory, we can't continue");
      return true;
     

    } else if (this.position.x - 1 === -1 && this.direction === 'N'){
      console.log("You are approaching unknown territory, we can't continue");
      return true;
      
  
    } else if (this.position.y - 1 === -1 && this.direction === 'W'){
      console.log("You are approaching unknown territory, we can't continue");
      return true;
      
  
    } else if (this.position.y + 1 === 10 && this.direction === 'E'){
      console.log("You are approaching unknown territory, we can't continue");
      return true;

    } else {
      return false;
    }
  };

// ===========================  Boundaries Function BACKWARD ===============================

Rover.prototype.checkBoundariesB = function () {
  if (this.position.x + 1 === 10 && this.direction === 'N'){
    console.log("You are approaching unknown territory, we can't continue");
    return true;
   

  } else if (this.position.x - 1 === -1 && this.direction === 'S'){
    console.log("You are approaching unknown territory, we can't continue");
    return true;
    

  } else if (this.position.y - 1 === -1 && this.direction === 'E'){
    console.log("You are approaching unknown territory, we can't continue");
    return true;
    

  } else if (this.position.y + 1 === 10 && this.direction === 'W'){
    console.log("You are approaching unknown territory, we can't continue");
    return true;

  } else {
    return false;
  }
};


// ======================= DIRECTIONS FUNCTION =======================
// var commands = '';

function directions (commands, rover){

  for (var i = 0; i <= commands.length; i++){

  // the functions takes a string of commands. Everytime the a command
  // is executed, the function runs the boundary function and checks 
  // the rover's position to keep it inside the grid.
    
    switch (commands[i]) {
      case 'r':
        rover.turnRight();
        break;
      
        case 'l':
        rover.turnLeft();
        break;

        case 'f':
          if (rover.checkBoundariesF () == true){
            return;
          } else if (rover.checkBoundariesF () == false) {
          rover.moveForward();
          rover.registerLog();
          }
        break;

        case 'b':
          if (rover.checkBoundariesB () == true){
            return;
          } else if (rover.checkBoundariesB() == false) {
          rover.moveBackwards();
          rover.registerLog();
          }
        break;
    
      default:
        break;
    }
  }
  console.log(rover.travelLog);
}  



