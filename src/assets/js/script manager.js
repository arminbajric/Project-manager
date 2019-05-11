

 function loadAutoCompleteScript() {
    let node = document.createElement('script');
    node.id="autocomplete";
    node.src = 'assets/js/autocomplete.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
   
  }

 function removeAutoCompleteScript(){
     document.getElementById("autocomplete").remove();
}
var workersList;
var selectedProjectWorkers=[];
function setWorkersList(id,list) {
    workersList = list;
    console.log(workersList);
    fillDataList(id,workersList);
}
function getWorkersList(){
  return workersList;
}
function fillDataList(id,list){
 
  for(var i=0;i<list.length;i++)
{
  console.log('filllingggg')
      var node=document.createElement('option')
      node.value=list[i];
      document.getElementById(id).appendChild(node);
}
}
function addToProject(element){
  console.log(element)
 var node=document.getElementById("selected");
 var newNode=document.createElement("button");
 newNode.id="worker"+getWorkersList().indexOf(element);
 newNode.title="Click to remove";
 newNode.className+="user-card";
 newNode.textContent=element;
 newNode.setAttribute("onclick","removeWorker(this.id)");
 node.appendChild(newNode);
 document.getElementById("workersList").value="";
 selectedProjectWorkers.push(element);
}

function removeWorker(id)
{
 if(id!=null && id!="undefined"){
  document.getElementById(id).remove();
}
}

function showSavedAction(id){
  var node=document.getElementById("actions");
  var newNode=document.createElement("button");
  newNode.id=id
  newNode.title="Click to remove";
  newNode.className+="button";
  newNode.textContent=id;
  newNode.setAttribute("onclick","removeWorker(this.id)");
  node.appendChild(newNode);
  
}
function getSelectedProjectWorkers(){
  return selectedProjectWorkers;
}