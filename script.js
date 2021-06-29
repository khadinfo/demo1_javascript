'use strict';


console.log('Bisextile ');
const nb=parseInt(prompt("Entrez un année"));
const paraBisextile=document.getElementById("bisextile");
const bisextile=(nb%4===0 && nb%100!=0) || (nb%400===0) ? paraBisextile.innerHTML= `l\'année ${nb} est bisextile`:`paraBisextile.innerHTML='${nb} n\'est pas bisextile`;

const grade=parseInt(prompt("entrez une note entre 0 et 20"));
const paraGrade=document.getElementById("grade")

 

 switch(grade){
     case 20:paraGrade.innerHTML="Excellent";
      break;
     case 17,18,19:paraGrade.innerHTML="Très bien";
     break;
     case 13,14,15,16:paraGrade.innerHTML="Bien";
     break;
     case 10,11,12:paraGrade.innerHTML="Suffisant";
     break;
     case 8, 9:paraGrade.innerHTML="Insuffisant ";
     break;
     case 0,1,2,3,4,5,6,7:paraGrade.innerHTML="Echec" ;
     break;
    default: if(isNaN(grade)) paraGrade.innerHTML="ce n'est pas un nombre";
   
 }