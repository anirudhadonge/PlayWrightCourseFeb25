// Conditional statements help in validating some set of rules.
/**
 * if
 * nest if 
 * else
 * ternary operator ?
 * switch
 */

// if statment
// if(<Condition>){<Body>}

// let flag = false;
// if(flag == true){
// console.log("Condition met")
// } 


// function getData(data){
//     if(data == null){
//         console.log("Regret to inform you that there was some issue with the system, Please try after sometime");
//     }else{
//         console.log('Processing the Data..... Please Wait...')
//     }
// }


// getData(5);

// let  value= false;
// console.log(typeof(value));
// if(typeof(value)=="number"){
//     console.log(value+5)
// } else if(typeof(value)=="string"){
//     console.log(value+" adding a string");
// } else if (typeof(value)== "boolean"){
//     console.log("Boolean value "+value);
// } else {
//     console.log("non of the condition was satasified");
// }

/// ternary operator in If  (<Condition>)?<Action if condition satasified>:<Action if the condition is not satasified>


// let value = 'Anirudha';
// (typeof(value)=="number")?console.log(value+5):console.log("non of the condition was satasified");


/**
 * switch(<value>){
 * case "someValue":
 *  executing your code;
 *  break;
 * case "someValue1":
 *  executing your code;
 *  break;
 *  case "someValue2":
 *  executing your code;
 *  break;
 * }
 * 
 * 
 * 
 */


let month = "Dec";

switch(month){
    case "Jan":
        console.log('its January');
        break;
    case "Feb":
        console.log('its February');
        break;
    case "Apr":
        console.log('its April');
        break;
    case "May":
        console.log('its May');
        break;
    case "Jun":
        console.log('its Jun');
        break;
    default:
        console.log("Month Name did not match");
}