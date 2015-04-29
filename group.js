
document.getElementById("clear").addEventListener("click",clear);
//shortcut to html list div
var list=document.getElementById('list');
//shortcut to all names
var names=list.getElementsByTagName("p");
//list of students
var students=[];
//list of groups to be made
var groups=[];
//shortcut for table of groups
var groupTable=document.getElementById('groupTable');

// randomizes order of students
// Fisher-Yates shuffle algorithm.
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
     return array;
}
//Makes the Groups
function makeGroup(studentList, numberOfGroups){
    //adds empty groups to list of groups
    while (groups.length<numberOfGroups){
        groups.push([]);
    }
    //adds students to groups
    for(i=0;i<studentList.length;i++){
        groups[i%numberOfGroups].push(studentList[i]);
    }
}
//calling functions
function generate(numberOfGroups){
students=shuffleArray(students);
makeGroup(students,numberOfGroups);
  console.log(groups);
  thisIsGoingToTakeForeverToWrite(groups);
  groups=[];

}
function begin(){
 //this functions checks for a number entry then calls generate appropriately
  var number=document.getElementById('number').value;
  if(!isNaN(number)&& number!==""){
  if(document.getElementById('numberOfGroups').checked){
    generate(number);
  }
  else{
    generate(Math.ceil(students.length/number));
  }
  }
  else{
    console.log("pls");
  }
}
//adds name in text box
function addName(){
  var name=document.getElementById('studentEntry').value;
  var addP=document.createElement("P");
  var addNameNode=document.createTextNode(name);
  addP.appendChild(addNameNode);

  if(name!==""){
    list.appendChild(addP);
    students.push(name);
    document.getElementById('studentEntry').value="";
    console.log(students);
  }
}
//Clears internal and external list of names
function clear(){

  var namesLength=names.length;
  for(i=0;i<namesLength;i++){
    list.removeChild(names[0]);
  }
  console.log("clear");
  
  students=[];
}
function thisIsGoingToTakeForeverToWrite(assignments){
  groupTable.innerHTML="";
  var groupNumber=0;
  for(i=0;i<assignments.length;i++){
    groupNumber=i+1;
    console.log("looping");
    groupTable.insertAdjacentHTML('beforeEnd',"<tr id=row"+i+"><td>Group#"+ groupNumber +":</td></tr>");
    for(j=0;j<assignments[i].length;j++){
      document.getElementById('row'+i).insertAdjacentHTML('beforeEnd',"<td>"+assignments[i][j]+"</td>");
    }
  }
}