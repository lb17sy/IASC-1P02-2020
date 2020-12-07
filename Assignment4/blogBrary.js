function load(){
  var id =0;
  while(id<6){
    id = ""+id;
    if(localStorage.getItem(""+id) == null) document.getElementById(""+id).innerHTML = "Favourite";
    else if(localStorage.getItem(""+id) == 'false') document.getElementById("c"+id).innerHTML = "Favourite";
    else document.getElementById("c"+id).innerHTML = "Unfavourite";
    id++;
  }
}

function favourite(s){
  if(localStorage.getItem(s) != null){
    if(localStorage.getItem(s) == 'false'){
      localStorage.setItem(s,true);
      document.getElementById("c"+s).innerHTML = "Unfavourite";
    }
    else{
      localStorage.setItem(s,false);
      document.getElementById("c"+s).innerHTML = "Favourite";
    }
  }
  else{
    localStorage.setItem(s,true);
    document.getElementById("c"+s).innerHTML = "Unfavourite";
  }
}
