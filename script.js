function clearscreen(){
    document.getElementById("result").value="";

}
function display(value){
    document.getElementById("result").value+=value

}
function calculate(){
  var cal=document.getElementById("result").value
  var res=eval(cal)
  document.getElementById("result").value=res


}