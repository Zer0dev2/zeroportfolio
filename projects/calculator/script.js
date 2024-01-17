

function equal(){
   
var answer = document.ff.field.value;
var aa = eval(answer)
if (answer==""){
    document.ff.field.value="Error";

}
else{
    document.ff.field.value="";
    document.ff.field.value=aa;
}
   


}


function cancle(){
var answer = document.ff.field.value;
document.ff.field.value="";
    
}