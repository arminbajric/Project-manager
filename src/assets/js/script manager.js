

function loadAutoCompleteScript() {
  let node = document.createElement('script');
  node.id = "autocomplete";
  node.src = 'assets/js/autocomplete.js';
  node.type = 'text/javascript';
  node.async = true;
  node.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(node);

}

function removeAutoCompleteScript() {
  document.getElementById("autocomplete").remove();
}
var workersList;
var selectedProjectWorkers = [];
var taskWorkers = [];
var actionWorkers = [];
function setWorkersList(id, list) {
  workersList = list;
  console.log(workersList);
  fillDataList(id, workersList);
}
function getWorkersList() {
  return workersList;
}
function fillDataList(id, list) {

  for (var i = 0; i < list.length; i++) {
    console.log('filllingggg')
    var node = document.createElement('option')
    node.value = list[i];
    document.getElementById(id).appendChild(node);
  }
}
function addWorkers(id, element) {
  if (id == "selectedAction") {
    actionWorkers.push(element);
    document.getElementById("workersListAction").value = "";
  }
  else if (id == "selectedTask") {
    taskWorkers.push(element);
    document.getElementById("workersListTask").value = "";
  }
  else if (id == "selected") {
    selectedProjectWorkers.push(element)
    document.getElementById("workersListProject").value = "";
  }
  var node = document.getElementById(id);
  var newNode = document.createElement("button");
  newNode.id = "worker" + getWorkersList().indexOf(element);
  newNode.title = "Click to remove";
  newNode.className += "user-card";
  newNode.textContent = element;
  newNode.setAttribute("onclick", "removeWorker(this.id)");
  node.appendChild(newNode);
  

}
function getProjectWorkers() {
  return selectedProjectWorkers;
}
function getTaskWorkers() {
  return taskWorkers;
}
function getActionWorkers() {
  return actionWorkers;
}
function setTaskWorkers(list){
  taskWorkers=list;
}

function removeWorker(id) {
  if (id != null && id != "undefined") {
    document.getElementById(id).remove();
  }
}
function removeProject(id)
{
  var data=id.split(" ");
  console.log(data[0])
  document.getElementById(id).remove();
  if(data[0]=="project")
  {
   
  }
}

function showSavedAction(id) {

  var node = document.getElementById("actions");
  var newNode = document.createElement("button");
  newNode.id = id
  newNode.title = "Click to remove";
  newNode.className += "button";
  newNode.textContent = id;
  newNode.setAttribute("onclick", "removeWorker(this.id)");
  node.appendChild(newNode);

}
function getSelectedProjectWorkers() {
  return selectedProjectWorkers;
}

function showDocumentation(id,list){
 
  document.getElementById(id).innerHTML=""
  var node=document.getElementById(id);
  
  
  console.log("gooooo"+list.length)
  for(var i=0;i<list.length;i++)
  {
    
   
    var newNode=document.createElement("button")
    if(id=="projectDocumentation")
    {
    newNode.id="project "+list[i];
    }
    else if(id== "taskDocumentation"){
      newNode.id="task "+list[i];
    }
    else if(id=="actionDocumentation")
    {
      newNode.id="action "+list[i];
    }
    newNode.textContent=list[i];
    newNode.className="col button"
    
    
    node.appendChild(newNode);
  
 
}

}