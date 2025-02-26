/**
 *  Commonjs
 *  Esmodule
 */

// Commonjs

export class MathsOperation {

    constructor(){
        console.log("Its a constructor");
    }
 add(a,b){
    return a+b;
}

 multiply(a,b){
    return a*b;
}

 substract(a,b){
    return a-b;
}
}

//module.exports = {MathsOperation}; /// We are specifying what all modules do I need to exports



/// ESModule  --- Export and Import



// export class MathsOperation {

//     constructor(){
//         console.log("Its a constructor");
//     }
//  add(a,b){
//     return a+b;
// }

//  multiply(a,b){
//     return a*b;
// }

//  substract(a,b){
//     return a-b;
// }
// }
