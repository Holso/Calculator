// var c1;
// c1 = document.querySelector("#unu");
// console.log(c1);
// c1.addEventListener("click", function(){
//     var ecran = document.querySelector(".ecran");
//     ecran.innerHTML = "1";
//     console.log(ecran.className);
// })
// function paritate(nr){
//     if( nr % 2 === 0){
//        console.log("numarul ", nr, " este par");
//     }
//     else {
//         console.log("numarul ", nr, " este impar");
//     }
// }
// paritate(21);
// paritate(22);

var rezultat = 0;

function afiseaza_ecran(a){
    var ecran = document.querySelector(".ecran");
    ecran.innerHTML = ecran.innerHTML + a;
}
// afiseaza_ecran("asdaq");
function stergere(){
    var ecran = document.querySelector(".ecran");
    ecran.innerHTML ='';
}
function egal(){
    var ecran = document.querySelector(".ecran");
    ecran.innerHTML=eval(ecran.innerHTML);
    
}
function stergere_cifra(){
    var ecran = document.querySelector(".ecran");
    var exp = ecran.innerHTML;
    ecran.innerHTML = exp.substring(0, exp.length-1 );

}