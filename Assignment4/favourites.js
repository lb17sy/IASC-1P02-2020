function load(){
  var id =0;
  var e;
  var b;
  while(id<6){
    if(localStorage.getItem(""+id) != null){
      if(localStorage.getItem(""+id) == 'true'){
        e = document.createElement("p");
        e.innerHTML = "<em>"+localStorage.getItem("content"+id)+"<em>";
        b = document.createElement("p");
        b.innerHTML = "<button onclick='remove(`"+id+"`)'>Remove</button>";
        document.getElementById("area").appendChild(e);
        document.getElementById("area").appendChild(b);
      }
    }
    id++;
  }
}

function remove(s){
  localStorage.setItem(s,false);
  location.reload();
}
