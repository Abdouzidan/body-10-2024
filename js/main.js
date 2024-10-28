document.querySelectorAll("button").forEach(function(item){
item.onclick = function(){
    document.querySelector("#demo").style.color = item.dataset.color;
}
})



function getData(){
var works =document.querySelector("#works").value;
var result =document.querySelector("#result");

if(works==""){
    return false;
}else{
    var myli =document.createElement("li");
    myli.innerHTML = works;
    result.appendChild(myli);
    document.querySelector("#works").value= "";
    return false
}


}
   

