var readLineSync = require('readLine-sync');
var filer = require('fs')

// var score = 0;
// console.log("test press 0 to exit");
// var answer = readLineSync.question("tel me some unique names");
// function uniqueNames(){
//     var answer = readLineSync.question("tel me some unique names");
//     while (answer != '0'){
//     var answer = readLineSync.question("tel me some unique names");
//     console.log(answer);
//     score=score+1;
// }
// }
// uniqueNames();
// console.log(score + "  unique names")

////Paterns
var n=5;
// var tempString = "*";
// for (var i=0;i<5;i++){
//     console.log(tempString);
//     tempString += "*";
// }


// for(var i=0;i<5;i++){
//     var tempString = "";
//     if(i==0 || i==4){
//         for(var j=0;j<5;j++){
//         tempString+="*";        
//     }
//     }
//     else{
//         for(var j=0;j<5;j++){
//             if(j==0 || j==4){
//                 tempString+="*";
//             }
//             else{
//                 tempString=tempString+" ";
//             }
//         }
//     }
//     console.log(tempString);
// }


// for(var i=0;i<5;i++){
//     var tempString="";
//     for(var j=5;j>i;j--){
//         tempString=tempString+' ';

//     }
//     for(var j=0;i>j-1;j++){
//         tempString=tempString+'*';
//     }
//     console.log(tempString);
// }

// for(var i=5;i>0;i--){
//     var tempString = "";
//     for(var j=0;j<i;j++){
//         tempString+="*";
//     }
//     console.log(tempString);
// }

// for(var i=0;i<n;i++){
//     var tempString="";
//     for(var j=0;j<=i;j++){
//         if(j==0){
//            tempString+="*"; 
//         }
//         if(j==i && j!=0 && j!=(n-1)){
//             tempString+="*";
//         }
//         if(i == (n-1) && j!=0){
//             tempString+="*";
//         }
//         if(j!=0 && j!=(n-1) && i != (n-1)){
//             tempString = tempString + ' ';
//         }
//         continue;
//     }
//     console.log(tempString); 
// }


// for(var i=0;i<n;i++){
//     var tempString = ""; 
//     var mid = n;
//     for(var j=0;j<(2*n);j++){
//         if((j==mid && i!=0) || (j>(mid-i) && j<(mid+i))){
//             tempString = tempString + "*";
//         }
//         else{
//             tempString = tempString + " ";
//         }
//     }
//     console.log(tempString);
// }


// for(var i=n;i>0;i--){
//     var tempString = ""; 
//     for(var j=0;j<(2*n)-1;j++){
//         var mid = n-1;
//         if( j>(mid-i)&&j<(mid+i)){
//             tempString = tempString + "*";
//         }
//         else{
//             tempString = tempString + " ";
//         }
//     }
//     console.log(tempString);
// }


// for(var i=0;i<=n;i++){
//     var tempString = ""; 
//     var mid = n;
// if(i>0){    
//    for(var j=0;j<(2*n);j++){
//     if(i<n){
//         if((j>(mid-(i)) && j<(mid+(i))) && !(j>(mid-(i-1)) && j<(mid+(i-1)))){
//             tempString = tempString + "*";
//         }       
//         else{
//             tempString = tempString + " ";
//         }
//     }
//     else{
//         if(j==0){
//             tempString = tempString + " ";
//         }
//         else{
//             tempString = tempString + "*";
//         }
//     }
//     }
//     console.log(tempString);
// }
// }

// var fourthquad = 2*n-3; 
// for(var i=0;i<(2*n)-1;i++){
//     var tempString = "";
//     var horizmid = n-1;
//     var vertmid = n-1;   
//     for(var j=0;j<(2*n)-1;j++){
//         if(i<horizmid ){
//             if((j>=(vertmid-(i)) && j<=(vertmid+(i)))){
//                 tempString = tempString + "*";
//             }
//             else{
//                 tempString = tempString + " ";
//             }
//         }
//         if(i==horizmid){
//             tempString = tempString + "*";
//         }
//         if(i>horizmid){
//             if((j>=Math.abs(vertmid-(i)) && j<=fourthquad)){
//                 tempString = tempString + "*";
//             }
//             else{
//                 tempString = tempString + " ";
//             }          
//         }
//     }
//     if(i>horizmid){
//         fourthquad--;
//     }
//     console.log(tempString);
// }


// var fourthquad = 2*n-3;
// for(var i=0;i<(2*n-1);i++){
//     var tempString = "";
//     mid = n-1;
//     for(var j=0;j<(2*n-1);j++){
//     if(i<=mid){    
//         if((j>=(mid-(i)) && j<=(mid+(i))) && !(j>=(mid-(i-1)) && j<=(mid+(i-1))) ){
//              tempString = tempString + "*";
//         }
//         else{
//             tempString = tempString + " ";
//         }
//     }
//     if(i>mid){
//         if(((j>=Math.abs(mid-(i)) && j<=fourthquad)) && !((j>=Math.abs(mid-(i+1)) && j<=fourthquad-1))) {
//             tempString = tempString + "*";
//         }
//         else{
//             tempString = tempString + " ";
//         }
//     }   
//     }
//     if(i>mid){
//         fourthquad--;
//     }
//     console.log(tempString);
// }



// var lowerhalf=n-1;
// for(var i=0;i<(2*n-1);i++){
//     var tempString = "";
//     mid = n-1;
//     for(var j=(2*n-1);j>0;j--){
//         if(i<=mid){
//             if(j>(i) && j<=(2*mid-i+1)){
//                 tempString = tempString + "*";
//             }
//             else{
//                 tempString = tempString + " ";
//             }
//         }
//         if(i>mid){
//             if(j<i+2 && j>lowerhalf-1)  {
//                 tempString = tempString + "*";
//             }
//             else{
//                 tempString = tempString + " ";
//             }   
//     }
//     }
//     if(i>mid){
//         lowerhalf--;
//     }
//     console.log(tempString);
// }

// var lowerhalf=n;
// for(var i=1;i<(2*n);i++){
//     var tempString = "";
//     mid = n-1;
//     for(var j=1;j<n+1;j++){
//         if(i<=mid+1){
//             if(j<i+1 ){
//                 tempString = tempString + "*";
//             }   
//             else{
//              tempString = tempString + " ";
//              }
//         }
//         if(i>mid+1){
//              if(j<lowerhalf+1){
//                  tempString = tempString + "*";
//              }
//              else{
//                  tempString = tempString + " ";
//              }
//         }
//     }
//     if(i>mid){
//         lowerhalf--;
//     } 
//     console.log(tempString);
// }

// var count=n;
// for(var i=1;i<(2*n);i++){
//     var tempString = "";
//     mid = n-1;
//     for(var j=1;j<n+1;j++){
//         if(i<=mid+1){
//             if(j>count-1 ){
//                 tempString = tempString + "*";
//             }   
//             else{
//                 tempString = tempString + " ";
//             }
//         }
//         if(i>mid+1){
//              if(j>i-mid-1){
//                  tempString = tempString + "*";
//              }
//              else{
//                  tempString = tempString + " ";
//              }
//         }
//     }
//     if(i<=mid+1){
//         count--;
//     } 
//     console.log(tempString);
// }


// //upper half
// for(var i=0;i<n/2-1;i++){
//     var tempString = "";
//     for(var j=0;j<2*n+1;j++){
//         if((j>n/4-i && j<(3*n)/4+i)  ||  (j>(3*n)/2-i-n/4 && j<(2*n)+i-n/4)){
//             tempString = tempString + "*";
//         }
//         else{
//             tempString = tempString + " ";
//         }
//     }
//     console.log(tempString);
// }
// //lower half
// for(var i=0;i<n+1;i++){
//     var tempString = "";
//     for(var j=0;j<2*n+1;j++){
//         if(j>=i && j<=(2*n)-i){
//             tempString = tempString + "*";
//         }
//         else{
//             tempString = tempString + " ";
//         }
//     }
//     console.log(tempString);
// }