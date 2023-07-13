let peso2=document.getElementById("peso");
let buton=document.getElementById("buton");
let div=document.getElementById("base");
var parafo=document.getElementById("parrafo");

function mensaje(){
    let diferencia=0;
let pesoBasal;
let pesoBasal2;
if(peso2.value<=0){
    alert("Debe ingresar un peso válido");
}
    
       else if(peso2.value<=10){
           pesoBasal=peso2.value*100 + "cc";
            
            div.textContent="Su volumen diario será de: " + pesoBasal;
            parafo.style.display="none";
            
        }
        else if(peso2.value<=20){
            diferencia=peso2.value-10;
            pesoBasal=diferencia*50+1000;

           div.textContent="Su volumen diario será de:" + pesoBasal + "cc";
           parafo.style.display="none";
        }
        else if(peso2.value<=30){
            diferencia=peso2.value-20;
            pesoBasal=diferencia*20+1500;

            div.textContent="Su volumen diario será de:" + pesoBasal + "cc";
            parafo.style.display="none";
        }
        else if(peso2.value>30){
         pesoBasal=(( (peso2.value * 4) + 7) / (+peso2.value + 90))*2000;
         pesoBasal2=(( (peso2.value * 4) + 7) / (+peso2.value + 90))*1500;
         pesoBasal=parseInt(pesoBasal);
         pesoBasal2=parseInt(pesoBasal2);
         div.textContent="Para 2000 cc su volumen diario será de:" +pesoBasal + "cc " + "y para 1500cc su volumen diario será de:" +pesoBasal2 + "cc";
         parafo.style.display="none";
        }
        
    div.style.display="block";

}
buton.addEventListener("click",mensaje);



