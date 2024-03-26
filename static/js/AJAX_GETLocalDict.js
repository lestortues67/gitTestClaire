// Source : 
// Date : 4/06/2019
// Auteur : Christian Doriath
// Dossier : /Python34/MesDEv/Flask/ajax_BASE
// Fichier : AJAX_GETFlask.js
// Description : AJAX avec une requête GET sur localhost 
// qui retourne les data en JSON
// Source video youtube : "Apprendre le JavaScript : Chapitre 17, Ajax"
//source : https://developer.mozilla.org/fr/docs/Web/Guide/AJAX/Premiers_pas

// Mot cles : ajax

//Commentaires : AJAX établi une communication de type asynchrone. 
// Ce qui veut dire : 
// - la requete est faite au serveur à l'heure 'h'. 
// - sa reponse n'est pas synchronisee avec la demande. 
//
// Il n'est pas possible d'obtenir immédiatement, 
// dans ce meme fichier js, la reponse du serveur. 
// L'execution de ce fichier js prend quelques millisecondes 
// mais la réponse du serveur est asynchrone et bien plus longue.

//Pour obtenir la liste qui contient les 'Map' il suffit d'executer 
//dans la console de 'web application' de FireFox ceci : returnListOfMaps();










// JS crée un pointeur vers la DIV qui va recevoir la 'table' : 
var myDiv = document.getElementById("divForTable");
myDiv.className="container";

//JS crée une table
var myTable = document.createElement('table');
myTable.className="table table-striped"
// myTable.caption = "List of users";
//JS crée un thead
var myThead = document.createElement('thead');
myThead.id = "visibleThead";
//JS crée un tbody
var myTbody = document.createElement('tbody');
myTbody.id = "visibleTbody";
//Ajouter à l'élément 'table' un thead et un tbody
myTable.appendChild(myThead);
myTable.appendChild(myTbody);
//Ajouter à l'élément 'div' (qui se trouve sur la page HTML) la table
document.getElementById("divForTable").appendChild(myTable);

var xTbody = new myNewTbody();
var xThead = new myNewThead();

var mydata = new listOfDictsManager(); 

var listHeaders1 = ["id","name","username"];
var listKeys = ["id","name","username"];

var httpRequest = false;
//On declare une connexion 'XMLHttpRequest' 
httpRequest = new XMLHttpRequest();

if (!httpRequest) {
    alert('Abandon : Impossible de créer une instance XMLHTTP');
}

// function whenChange() : 
// Voici la liste complète des valeurs de readyState :
//     0 (non initialisée) ou (requête non initialisée)
//     1 (en cours de chargement) ou (connexion établie avec le serveur)
//     2 (chargée) ou (requête reçue)
//     3 (en cours d’interaction) ou (traitement de la requête)
//     4 (terminée) ou (requête est terminée et la réponse est prête)

function whenChange() {
    if (httpRequest.readyState === 1){
        var TEXTresults1 = httpRequest.responseText;
        console.log("httpRequest.readyState === 1 "); 
        console.log(" "); 
    }
    if (httpRequest.readyState === 2){
        var TEXTresults2 = httpRequest.responseText;
        console.log("httpRequest.readyState === 2 "+TEXTresults2); 
        console.log(" "); 
    }
    if (httpRequest.readyState === 3){
        var TEXTresults3 = httpRequest.responseText;
        console.log("httpRequest.readyState === 3 "+TEXTresults3); 
        console.log(" "); 
    }
    if (httpRequest.readyState === 4){
        // alert('Data est disponible ! ');
        //Ici on informe quand les datas sont reçus. 
        //il est maintenant possible d'utiliser la fonction returnListOfMaps
        //pour obtenir en retour une liste de Map. 
        //ou bien la fonction 'returnTextData' pour un format texte.
    }
    var stopHere = 100; // pour point d'arret debuger
    return (100);
}
var listTest = [{"id":0,"name":"maurice","username":"emile"},
{"id":1,"name":"MoivieStar","username":"coralie"},
{"id":2,"name":"k2000","username":"elandra"}]


//Cette fonction sert à convertir la reponse du serveur qui est au format JSON 
//en une liste (array) constituee d'objets (dictionnaires).
function returnListOfObjects(){
    if (httpRequest.readyState == XMLHttpRequest.DONE) {
        if (httpRequest.status == 200) {
            return JSON.parse(httpRequest.responseText);
            }
        }
        else {
            alert('Un problème est survenu avec la requête. Status : '+httpRequest.status);
            return false;
        }
    {alert('Les datas ne sont pas encore disponibles. Ré-essayez plus tard.');
        return false;
        }
}
// La valeur retournée est un array si plusieurs elements sont renvoyes du serveur
// La valeur retournée est un 'object' si un seul element est renvoye du serveur


function f_btn_showdata(){        
    //Faire une requête vers : /AJAX_GETLocalSetRequestHeaderResponse

    //Créer un 2em whenChange() qui affiche les datas dans la DIV <div id="divForData"></div>
        console.log(Date.now());
        
        var myDiv = document.getElementById("divForData");
        var aaappp = document.getElementById("ppp");
        var pp = document.createElement('p');
        pp.innerHTML='id : '+returnListOfObjects().id;
        myDiv.appendChild(pp);
        var pp = document.createElement('p');
        pp.innerHTML='prix : '+returnListOfObjects().prix;
        myDiv.appendChild(pp);
        var pp = document.createElement('p');
        pp.innerHTML='prixn : '+returnListOfObjects().prixn;
        myDiv.appendChild(pp);
        var pp = document.createElement('p');
        pp.innerHTML='ref : '+returnListOfObjects().ref;
        myDiv.appendChild(pp);
        var pp = document.createElement('p');
        pp.innerHTML='title : '+returnListOfObjects().title;
        myDiv.appendChild(pp);

        
        }







// On declare a la connexion 'XMLHttpRequest' qu'elle doit executer 
// du code situe dans la fonction whenChange() lorsque sa propriete 'readyState' change de valeur
var aaz = httpRequest.onreadystatechange = whenChange;

//On ouvre une connexion 'XMLHttpRequest' de type GET sur le serveur 'jsonplaceholder.typicode.com'
httpRequest.open('GET',"/ResponseJSON_AJAX_GETFlask", true);

    httpRequest.setRequestHeader("secretAccessCode", "21092019");
    httpRequest.setRequestHeader("macAddress", "0x6cf049756738");

//On envoie la requete
httpRequest.send(null);

var stophere = 1; // pour point d'arret debuger

//Pour obtenir la liste qui contient les 'Map' il suffit d'executer 
//dans la console de 'web application' de FireFox ceci : returnListOfMaps();



var fd = document.getElementById('btn_showdata')
fd.addEventListener('click',f_btn_showdata,false);



