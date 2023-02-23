var totp=document.getElementById("pgtotal");
var curp=document.getElementById("curpg");
var endt=document.getElementById("endtime");
var timleft=document.getElementById("timeleft");
var totleft=document.getElementById("totleft");


curp.addEventListener("change",calctime);

function calctime()
{
    tv=totp.value;
    cv=curp.value;
    var now = new Date();
    var end = new Date( now.toDateString()+' '+endt.value);
    
    var dif=new Date((end-now)/(tv-cv));

    console.log(end," - ",now," = ",dif) ;
    timleft.value=dif.getMinutes()+" : "+dif.getSeconds();

}