let peso2=document.getElementById("peso");
let buton=document.getElementById("buton");
var parrafo=document.getElementById("volumen");
let  mantenimiento=document.getElementById("mantenimiento");
let mm=document.getElementById("mm");
let complemento=document.getElementById("plus");
function alerta(){
    
}
function holliday(){
    let diferencia=0;
let pesoBasal;

    
       if(peso2.value<=10){
           pesoBasal=peso2.value*100;
            
            return pesoBasal;
            
            
        }
        else if(peso2.value<=20){
            diferencia=peso2.value-10;
            pesoBasal=diferencia*50+1000;

        return pesoBasal;
        }
        else if(peso2.value<=30){
            diferencia=peso2.value-20;
            pesoBasal=diferencia*20+1500;

           return pesoBasal
            
        }
       
        
    parrafo.style.display="block";
   
   complemento.style.display="block";
   
    

}
function pesoCorporal(){
     if(peso2.value>30){
       let pesoBasal2=(( (peso2.value * 4) + 7) / (+peso2.value + 90))
        pesoBasal2=pesoBasal2.toFixed(2);
        return pesoBasal2;
        
       }
       parrafo.style.display="inline";
     complemento.style.display="none";
     mm.style.display="inline"
     mantenimiento.style.display="inline";


}
buton.addEventListener('mouseover', () => {
    buton.style.backgroundColor = '#ff0066';
  });
  
  buton.addEventListener('mouseout', () => {
    buton.style.backgroundColor = '#007bff';
  });

buton.addEventListener("click",function(){
if(peso2.value!=0){
   parrafo.textContent="Volumen diario : " + holliday() + " CC";
 if(peso2.value>30){
mantenimiento.style.display="none";
mm.style.display="none";
parrafo.textContent="Volumen diario (1500): " + (pesoCorporal()*1500).toFixed() + " CC";
complemento.textContent="Volumen diario (2000) : " + pesoCorporal()*2000+ " CC";
}
if(peso2.value<=30){
    mantenimiento.style.display="block";
    mm.style.display="block";
    complemento.style.display="none";
}
           mantenimiento.textContent="Mantenimiento: " + (holliday()/24).toFixed(2) + "  cc/hr";
           mm.textContent="m+m/2: " + (holliday()/24).toFixed(2)*1.5 + "  cc/hr";
 
}
if(peso2.value<=0){
    alert("Debe ingresar un peso válido");

}
 });





