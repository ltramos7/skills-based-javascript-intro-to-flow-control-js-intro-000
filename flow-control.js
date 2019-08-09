function basicTeenager(age) {
  if (age>=13 && age<=19){
      return("You are a teenager!");
      }
}


function teenager(age) {
  if (age>= 13 && age<=19){
        return("You are a teenager!");
        
  } else{
    return("You are not a teenager");
  }
}

// "else if" is like another if statement if the first one isn't true(isn't good)

function ageChecker(age) {
  if (age>=13 && age<=19) {
        return ("You are a teenager!");
  } 
  
  else if (age<=12) {
        return ("You are a kid");
  }
  
  else {
    return ("You are a grownup");
  }
}

function ternaryTeenager(age) {
    return age>=13 && age<=19 ? "You are a teenager" : "You are not a teenager";
}


function switchAge(age) {
<<<<<<< HEAD
  
  var myAge = age;
  
  switch(age) {
    
    case 13:
      myAge = "You are a teenager";
      break;
      
    case 14:
      myAge = "You are a teenager";
      break;
    
    case 15:
    myAge = "You are a teenager";
      break;
      
    case 16:
    myAge = "You are a teenager";
      break;
      
    case 17:
      myAge = "You are a teenager";
      break;
      
    case 18:
      myAge = "You are a teenager";
      break;
      
    case 19:
      myAge = "You are a teenager";
      break;
=======
  var theAge = age;
  switch(age) {
    
    case 13:
      console.log("You are a teenager");
      break;
      
    case 14:
      console.log("You are a teenager");
      break;
    
    case 15:
      console.log("You are a teenager");
      break;
      
    case 16:
      console.log("You are a teenager");
      break;
      
    case 17:
      console.log("You are a teenager");
      break;
      
    case 18:
      console.log("You are a teenager");
      break;
      
    case 19:
      console.log("You are a teenager");
      return;
>>>>>>> 92c7630fb618a81654467734ba3df708332c39af
      
    default:
      return ("You have an age");
    
  }
<<<<<<< HEAD
  return myAge;
}



// function switchAge(age){

//   var theAge = age;
//   switch(age){
//     case 13-19:
//       theAge = "You are a teenager"
//       break;
      
//       default:
//       return ("You have an age");
//   }
  
//   return theAge;
=======
  
}

// function switchAge(age){
//   var age = '';
//   switch(age){
//     case 13-19:
//       console.log("You are a teenager");
//       break;
      
//     default:
//       console.log ("You have an age");
//   }
>>>>>>> 92c7630fb618a81654467734ba3df708332c39af
// }





