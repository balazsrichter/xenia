const xenia = {vezeteknev: "Kniazieva", szulev: 1996, regio: "Ternopil", klub: "Heaven", kiado: "Numen"}

function kviz(a,b,c,d,e)
{
let sa=0
let sb=0
let sc=0
let sd=0
let se=0

if (a == 1) {document.getElementById("v1").innerHTML ="Jó válasz!", sa++, document.getElementById("v1").style.color="lime"}
else {document.getElementById("v1").innerHTML = xenia.vezeteknev, document.getElementById("v1").style.color="red"}	

if (b == 1) {document.getElementById("v2").innerHTML ="Jó válasz!", sb++, document.getElementById("v2").style.color="lime"}
else {document.getElementById("v2").innerHTML = xenia.szulev, document.getElementById("v2").style.color="red"}	

if (c == 1) {document.getElementById("v3").innerHTML ="Jó válasz!", sc++, document.getElementById("v3").style.color="lime"}
else {document.getElementById("v3").innerHTML = xenia.regio, document.getElementById("v3").style.color="red"}
	
if (d == 1) {document.getElementById("v4").innerHTML ="Jó válasz!", sd++, document.getElementById("v4").style.color="lime"}
else {document.getElementById("v4").innerHTML = xenia.klub, document.getElementById("v4").style.color="red"}
	
if (e == 1) {document.getElementById("v5").innerHTML ="Jó válasz!", se++, document.getElementById("v5").style.color="lime"}
else {document.getElementById("v5").innerHTML = xenia.kiado, document.getElementById("v5").style.color="red"}

let s=sa+sb+sc+sd+se

document.getElementById("szamlalo").innerHTML = s +"/5"
	
if (s == 5) {document.getElementById("gratula").innerHTML ="Gratulálunk, igazi Xenia rajongó vagy!", document.getElementById("gratula").style.color="lime", document.getElementById("szamlalo").style.color="lime"}
	
else if (s == 4) {document.getElementById("gratula").innerHTML ="Majdnem hibátlan!", document.getElementById("gratula").style.color="yellow", document.getElementById("szamlalo").style.color="yellow"}
	
else if (s<4 && s>1) {document.getElementById("gratula").innerHTML ="Valamennyire ismered...", document.getElementById("gratula").style.color="orange", document.getElementById("szamlalo").style.color="orange"}
	
else {document.getElementById("gratula").innerHTML ="Ismerd meg jobban!", document.getElementById("gratula").style.color="red", document.getElementById("szamlalo").style.color="red"}
}


function kvizkiir()
{
let vnev = document.getElementById("vezeteknev").checked
let vszulev = document.getElementById("szulev").checked
let vregio = document.getElementById("regio").checked
let vklub = document.getElementById("klub").checked
let vkiado = document.getElementById("kiado").checked
kviz(vnev, vszulev, vregio, vklub, vkiado)	
} 

