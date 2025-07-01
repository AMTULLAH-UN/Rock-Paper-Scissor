//arithmetic Operators
//  let a= 5;
//  let b =2;

// console.log("a = " ,a, "& b=" ,b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a /  b);
// console.log("a % b =", a %  b);
// console.log("a ** b =", a **  b); 

//unary opertors
//  let a = 5;
//  let b =2;
// console.log("a = " ,a, "& b=" ,b);

// console.log("a-- = ",a--);
// console.log("a= ",a);

//assignment operators
// let a = 5;
// let b = 2;

// a ** = 4;
// console.log("a=",a);
 
//Comparision Operators
// let a = 5;
// let b = 3;

// console.log("a>b",a>b);
  

//logical operators
// let a = 5;
// let b = 6;
 
// let cond1 = a>b;
// let cond2 =a===6;

// console.log("cond1 ! cond2",cond1 ! cond2);

//condition statement

 
// let mode = "light";
// let color;

//  if(mode==="dark"){
//     color= "black"
//  }

//  if(mode==="light"){
//     color="white";
//  }
//  console.log(color);
// if(age > 18) {
//     console.log("you can vote");
// }

// if(age < 18){
//     console.log("you cannot vote");
// }

//if-else

// //odd or even
// let num=2;
//  if(num%2 ===0){
//    console.log(num,"is even"); 
//  }
//  else{console.log(num,"is odd")}


//else-if statement

// let mode= "brown"
// let color;

//  if(mode === "dark"){
//    color = "black";
//  }else if(mode === "light"){
//    color="white";
//  }else if(mode==="blue"){
//    color="pink";
//  }else{
//    color="silver";
//  }

//  console.log(color);

//ternary condition

// let age = 12;
 
// let result = age>= 18?"adult" : "not adult";
// console.log(result);

//practise question

// let num = prompt("Enter a number");

// if(num % 5 === 0){
//    console.log(num,"is multiple of 5" )
// }else{
//    console.log (num,"is NOT multiple of 5")
// }

//   let num = prompt("enter your score(0-100):")
//   let grade;
//  if(num >=90 && num<=100){
//     grade = "A";
//  }else if(num>=70 && num<=89){
//     grade= "B";
// }else if(num >=60 && num <=69){  
//      grade = "C";
//  }else if(num>=50 && num <=59){
//     grade = "D";
//  } else if (num>=0 && num<=49){
//     grade = "F";
// }
//  console.log("according to your scpres your grade was:",grade)

//FOR LOOP
// let sum=0;
// let n =5;
// for( let num=1; num<0876; num++){
//  sum=sum+ num;
// }
//    console.log("Sum =",sum);

// for (let i=1; i<=6; i++){
//    console.log("i=",i);
// }

//while loop
// let i =20;
// do{
//    console.log("allah hu akbar");
//    i++;
// }
// while(i<=10);

//for of loop
//  let str="zainabibtaisaam";

//  let size = 0;
// for (let i of str){
//    console.log("i=",i)
//    size++;
// } console.log("string size =",size);

// PQ2
// let gameNum= 10;
  
// let userNum = prompt("Guess the game number:");

// while(userNum != gameNum){
//    userNum = prompt("you entered wrong number. try again:");
// } 

// console.log("mubarak ho aap ne sahi number pehchana hai");

//  let FullName =prompt("Please Enter Your Full Name")
//    let username= "@" + FullName+ FullName.length;
//  console.log(username);
//taking out the sum and factorial after asking user a value
// let n =prompt("enter any number between 1 to 10 : ")

// let arr =[];

// for (let i = 1; i<=n; i++){
//    arr[i-1] =i;
// }

// console.log(arr);

// let sum=arr.reduce((res,curr)=>{
//    return res + curr;
// });
// console.log("sum=",sum);


// let mul=arr.reduce((res,curr)=>{
//    return res * curr;
// });
// console.log("mul=",mul);

//PROJECT CODE

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = [  "rock" , "paper" ,"scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = ()  => {
    msg.innerText ="Game is draw. Play again!";
   msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerrText = userScore;
        msg.innerText =`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Blue";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {

  const compChoice= genCompChoice();
  

  if (userChoice === compChoice) {
    drawGame();
  }else{
     let userWin = true;
     if(userChoice === "rock"){
       userWin = compChoice === "paper" ? false :true ;
    }
     else if(userChoice === "paper"){
       userWin =compChoice === "scissors"? false : true;
    }
    else{
        userWin=compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
     
});
