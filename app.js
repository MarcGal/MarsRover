// Rover Object Goes Here

var rover = {
  direction: "N",
  position: [0,0],
  travelLog: [],
};

// crear clase rover con todas la funciones dentro. Asi podemos crear rovers extras 
// con las mismas propiedades

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

// ============    MOVEBACKWARD FUNCTION  ==========

function moveBackwards(rover){

  if (rover.direction==="N"){
    rover.position[1]--;

  } else if (rover.direction === "S"){
    rover.position[1]++;

  } else if (rover.direction === "E"){
    rover.position[0]--;

  } else if (rover.direction === "W"){
    rover.position[0]++;
  }

  rover.travelLog.push(rover.position[0] + "," + rover.position[1]);

  console.log("moveBackwards was called" + "." + " New position: " + rover.position[0] + ", " + rover.position[1] + "." + " Direction: " + rover.direction);
  
}



// ===================   Obstacles Function ========================
//STILL NOT WORKING


// function obstacles(mars){

//   function getRandomNum(){
//     return Math.floor(Math.random() * 10);
//   }

//   for (var i = 0; i < mars.length; i++){
//     var row = getRandomNum();
//     var column = getRandomNum();
//     console.log("Obstacle in Row: " + row + " " + "Column: " + column);
//     var obstacle = mars[row][column];

//   // decirle a la función que reemplace el valor del grid con las coordenadas


//     if (obstacle[0] === rover.position[0] && obstacle[1] === rover.position[1]){
//       console.log("Watch out! obstacle in the way: " + row + ", " + column);
//       // console.log("You have crashed with an obstacle on: " + row + ", " + column);
//       return;
//     }
//   }
// }


// ===================   Boundaries Function =======================

function boundaries (rover){
  //The function checks whether the rover has stepped out of the grid by looking
  // if any of the Y or X values has gone over 9 or under 0
  if (rover.position[0] === -1 && rover.direction === 'W' || rover.position[0] === 10 && rover.direction === 'E'){
    console.log('You are approaching unknown territory, we are going back!');
    moveBackwards(rover);
    moveBackwards(rover);
  
  } else if (rover.position[0] === 10 && rover.direction === 'W' || rover.position[0] === -1 && rover.direction === 'E'){
    console.log('You are approaching unknown territory, we are going back!');
    moveForward(rover);
    moveForward(rover);
    
  } else if (rover.position[1] === -1 && rover.direction === 'S' || rover.position[1] === 10 && rover.direction === 'N'){
    console.log('You are approaching unknown territory, we are going back!');
    moveBackwards(rover);
    moveBackwards(rover);
  
  } else if (rover.position[1] === 10 && rover.direction === 'S' || rover.position[1] === -1 && rover.direction === 'N'){
    console.log('You are approaching unknown territory, we are going back!');
    moveForward(rover);
    moveForward(rover);
  }
}



// ============    TAKE DIRECTIONS  FUNCTION  ==========

var commands = '';

function directions (commands){

  for (var i = 0; i < commands.length; i++){

  // the functions takes a string of commands. Everytime the a command
  // is executed, the function runs the boundary function and checks 
  // the rover's position to keep it inside the grid.
  
    if (commands[i]=== 'r'){
      turnRight(rover);
      boundaries(rover);

    } else if (commands[i] === 'l'){
      turnLeft(rover);
      boundaries(rover);

    } else if (commands[i] === 'f'){
      moveForward (rover);
      boundaries(rover);

    } else if (commands[i] === 'b'){
      if(!boundaries(rover)){; // incluir en la funcion de boundaries el return para parar la funcion si el resultado es true
      moveBackwards(rover);
      }

    } else {
      console.log ('Command not identified, not executed');
    }

  }

  console.log(rover.travelLog);

}





