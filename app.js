// Question 01: Closure
/*
function addNum (addNumber){
    return function(val){
        console.log(val + addNumber);
    }
}
 let result = addNum(5);
 result(8);
 */
// Question 02:  Recursive Function
/*
 let a = [1,2,3,4,5,6,7];
 
 function searching(arr,val){
    if (arr.length === 0){
       return false;
    }else if(arr[0]=== val){
    return true;
    }else {
        arr.shift();
        return searching(arr,val);
    }
 };
console.log(searching(a, 8)); 
*/
// Question 03:   Add  New Paragraph Element
/*
let Paragraph = [];
let  para = document.getElementById("my-para");
function paraAdd(arg){
    let data1 = prompt("Enther data");
    Paragraph.push(data1);
 para.innerHTML = "<p><b> " + arg +"</b></p>"
 // Paragraph.shift();
}
*/
// Question 04:
/*
let list =document.getElementById("my-list");
function additem(){
    list.innerHTML = "<ol> <li>List item 4</li> </ol>"
}
*/
// Question 05:changes the background color of an HTML element.
/*
function changeBackgroudColor(word,val){
let  chg = document.getElementById("my-second-para");
 chg.innerHTML = "<b>"+word+"</b>";
 chg.style.backgroundColor = val;
};
changeBackgroudColor("My Name is Ilyas","#FFFF00");
 //chg.style.color = "#ff0000";
// FFF00
*/
// Qu