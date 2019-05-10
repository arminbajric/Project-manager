function setActive(id){
    console.log(id);
    var nodes=document.getElementsByClassName('menuButton');
   
    for(var i=0;i<5;i++)
    {
        nodes[i].className = nodes[i].className.replace(" active", "");
       
    }
    document.getElementById(id).className +=" active";
  console.log("loadedddd")
  
}