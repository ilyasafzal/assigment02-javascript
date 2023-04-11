// Question 01: Closure.
///*
function addNum (addNumber){
    return function(val){
        console.log(val + addNumber);
    }
}
 let result = addNum(5);
 result(8);
// */
// Question 02: Recursive Function.
///*
 let a = [1,2,3,4,5,6,7,8,9];
 
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
//*/
// Question 03: Add  New Paragraph Element.
///*
let Paragraph = [];
let  para = document.getElementById("my-para");
function paraAdd(arg){
    let data1 = prompt("Enther data");
    Paragraph.push(data1);
 para.innerHTML = "<p><b> " + arg +"</b></p>"
 // Paragraph.shift();
}
//*/
// Question 04: Function That Adds a New Paragraph Element.
///*
let list =document.getElementById("my-list");
function additem(){
    list.innerHTML = "<ol> <li>List item 4</li> </ol>"
}
//*/
// Question 05: changes The background color of an HTML element.
///*
function changeBackgroudColor(ide,val){
let  chg = document.getElementById(ide);
 chg.style.backgroundColor = val;
};
changeBackgroudColor("p2","#FFFF00");
 //*/
// Question 06: Function That Saves an Object To  Local  Storage.
///*
let stdInfo1 = {
    name: "ILYAS",
    rollNo: 1234,
    teacher: "Abdullah",
    className: "martric",
  }; 
function stor(nameSave,obj){

  let stringify = JSON.stringify(obj); // Convert it to String
  localStorage.setItem(nameSave, stringify); // Save it to LocalStorage
}
stor("2023 student Data ", stdInfo1);
//*/
// Question 07: A Function That Retrieves An Object From Local  Storage.
///* 
let stdInfo3 = {
    name: "usman",
    rollNo: 1,
    teacher: "Abdullah",
    className: "martric",
  }; 
  let stdInfo4 = {
    name: "Ali",
    rollNo: 108,
    teacher: "Abdullah",
    className: "martric",
  }; 
  
function stor(nameSave,objName){

  let stringify = JSON.stringify(objName); 
  localStorage.setItem(nameSave, stringify);
}
stor("data1",stdInfo3);
stor("data2",stdInfo4);
// Now we write a function to get this object from storge; Q7 now start:
function getobjt(NameSave){
    let dataObject =localStorage.getItem(NameSave);
    console.log(dataObject);
};
  getobjt("data1");
  getobjt("data2");
 // */
// Question 08:

let stdInfo04 = {
    name: "RASHEED",
    rollNo: 450,
    teacher: "Abdullah",
    className: "2nd year",
  }; 
  let s = JSON.stringify(stdInfo04); 
  localStorage.setItem("data4", s);

  storBypart("data4");

function storBypart(keyName){
  let dataObject =localStorage.getItem(keyName);
  let v = JSON.parse(dataObject);
  let  numKeys = Object.keys(v).length;
  let keys = Object.keys(v); 
  let values = Object.values(v);
  function stor(nameSave,obj){

    let stringify = JSON.stringify(obj); 
    localStorage.setItem(nameSave, stringify);
  }
  for (i=0; i<=numKeys; i++){
    stor(keys[i],values[i]);
  };
};



