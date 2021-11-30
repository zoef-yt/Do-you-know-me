var readlineSync = require('readline-sync');
var username=readlineSync.question("What is your Name? ");
var score =0

var questions1={
question:"where do i live? ",
answer:"mumbai",}
var questions2={
question:"My favorite superhero would be? ",
answer : "wanda"}
var questions3={
question:"where do i work? ",
answer:"at home"
}

console.log("Welcome " + username+" to Do YOU KNOW Zoef")



function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log("Correct")
    score++
  }else{
    console.log("Wrong")
  }
  console.log("Current Score is : ",score )
}
var allQuestions=[questions1,questions2,questions3]
for(i=0;i<allQuestions.length;i++){
  play(allQuestions[i].question,allQuestions[i].answer)
}


console.log('Your final Score is: ', score)
