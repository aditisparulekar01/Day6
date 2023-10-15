function can(){
    let num1=document.querySelector("#r").value;
    
    let vol;
    if(num1<0){
     
     document.getElementById("opt").innerHTML = "Your radius is invalid" ;
    }
    
    else{
       vol=4/3 * 22/7 * (parseFloat(num1**3));
     document.getElementById("opt").innerHTML = "volume is" + " " + vol ;
    }
   }