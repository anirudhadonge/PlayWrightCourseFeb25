/// javascript number type : integer, decimal value, 
/// let a  = 12345/10 = 1234.5
let n1 = 123456;
let n2 =0;

while(n1>0){

    n2 = n2*10 +n1%10;
    n1 = n1/10-(n1%10)/10; // 12345.6 - 0.6 = 0
    //console.log(n1);
}

console.log(n2);


// 0,1,1,2,3,5,8,13,21,34

// userInput = 50 ,   