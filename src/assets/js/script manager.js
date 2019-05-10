

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
function setWorkersList(list) {
    workersList = list;
    console.log(workersList);
    fillWorkersDataList();
}
function getWorkersList(){
  return workersList;
}
function fillWorkersDataList(){
  var list=getWorkersList();
  for(var i=0;i<list.length;i++)
{
  
      var node=document.createElement('option')
      
    
      node.value=list[i];
      document.getElementById('workers').appendChild(node);
  
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
}

function removeWorker(id)
{
 if(id!=null && id!="undefined"){
  document.getElementById(id).remove();
}
}

