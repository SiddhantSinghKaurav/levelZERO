var readLineSync = require('readLine-sync');

var ans=readLineSync.question("Do you want to enter the quiz (y/n): ");
var score=0;
var namearray = [];
var quesans={
    firstname:"siddhant",
    lastname:"kaurav",
    company:"IBM India"
};

while(ans!="n"){
    var names = readLineSync.question("tell me some names: ");
    if(names=="n"){
        break;
    }
    namearray[score]=names;
    score+=1;
}
var score2 =0;
var ans2=readLineSync.question("Do you want to enter another quiz (y/n): ");
while(ans2!="n"){
    ans2=readLineSync.question("Your name?: ");
    if(ans2==quesans.firstname){
        console.log("you are right ");
        score2++;
    }
    ans2=readLineSync.question("Your company?: ");
    if(ans2==quesans.company){
        console.log("you are right ");
        score2++;
    }
    if(ans2=='n'){
        console.log("okay your score is: ", score2);
        break;
    }

}
console.log(namearray);
console.log(score + " names");

