"1"
const focimElem=document.getElementById("focim")
focimElem.textContent="Mátrix rendszer"
"2"
const statuszElemek = document.getElementsByClassName('statusz-szoveg');
"3"
console.log(statuszElemek.length);
"4"
statuszElemek[0].textContent = 'Rendszer ellenőrzése folyamatban...';
"5"
statuszElemek[1].textContent = 'Kapcsolódás a hálózathoz...';
"6"
const listaElemek = document.querySelectorAll()('.lista-elem');
"7"
console.log(listaElemek[0].textContent)
"8"
listaElemek[1].textContent = 'Szerver állapot: ONLINE';
"9"
const nevInput = document.querySelector('#jatekos-nev-input');
"10"
const inditoGomb
"11"
const eredmenyDiv = document.getElementById("eredmeny")

"13"
inditoGomb.addEventListener("click", function(){
    const gombSzovege = inditoGomb.textContent;
    const jatekosNev = nevInput.Value;
    eredmenyDiv.textContent = `Üdvözlünk, ${jatekosNev}! Végrehajtott akció: ${gombSzovege}`;
})
