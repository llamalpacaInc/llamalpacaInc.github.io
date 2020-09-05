var ordreDInsersion = 0; //Permet de compter combien d'input ont été générés et les remets dans l'ordre

function addInputP() {
    var newP = document.createElement("p"); //Créé une nouvelle ligne
    var newInput = document.createElement("textarea"); //Créé un champ de texte
    newInput.setAttribute("class","InputP"); //Définit un ID pour le champ de texte
    newInput.setAttribute("id", ordreDInsersion); //Définit un ID pour l'ordre d'insersion
    newInput.setAttribute("style","width:99.5%"); //Définit la taille du champ de texte
    newInput.setAttribute("placeholder","Écrivez votre paragraphe ici"); //Hint qui dit quoi écrire
    newP.appendChild(newInput); //Place le champ de texte dans la nouvelle ligne à la suite du texte
  
    document.getElementById("inputTD").appendChild(newP); //Affiche tout dans la page
    ordreDInsersion++; //Pour générer un ID différent la fois suivante
    generateHTML(); //Met à jour les output
    document.getElementById(ordreDInsersion-1).focus();
}

function addInputH1() {
    var newP = document.createElement("p"); 
    var newInput = document.createElement("textarea"); 
    newInput.setAttribute("class","Inputh1"); 
    newInput.setAttribute("id", ordreDInsersion); 
    newInput.setAttribute("style","width:99.5%"); 
    newInput.setAttribute("placeholder","Écrivez votre titre H1 ici");
    newP.appendChild(newInput);
  
    document.getElementById("inputTD").appendChild(newP);
    ordreDInsersion++; 
    generateHTML();
    document.getElementById(ordreDInsersion-1).focus();
}

function addInputH2(isUsingTopReduction) {
    var newP = document.createElement("p");  
    var newInput = document.createElement("textarea"); 
    if (isUsingTopReduction) {
        newInput.setAttribute("class","Inputh2B"); 
    } else {
        newInput.setAttribute("class","Inputh2"); 
    }
    newInput.setAttribute("id", ordreDInsersion); 
    newInput.setAttribute("style","width:99.5%"); 
    newInput.setAttribute("placeholder","Écrivez votre titre H2 ici");
    newP.appendChild(newInput);
  
    document.getElementById("inputTD").appendChild(newP);
    ordreDInsersion++; 
    generateHTML();
    document.getElementById(ordreDInsersion-1).focus();
}

function addInputH3() {
    var newP = document.createElement("p"); 
    var newInput = document.createElement("textarea"); 
    newInput.setAttribute("class","Inputh3"); 
    newInput.setAttribute("id", ordreDInsersion); 
    newInput.setAttribute("style","width:99.5%"); 
    newInput.setAttribute("placeholder","Écrivez votre titre H3 ici");
    newP.appendChild(newInput);
  
    document.getElementById("inputTD").appendChild(newP);
    ordreDInsersion++; 
    generateHTML();
    document.getElementById(ordreDInsersion-1).focus();
}

function addInputDate(isUsingBottomReduction) {
    var newP = document.createElement("p"); 
    var newInput = document.createElement("input"); 
    if (isUsingBottomReduction) {
        newInput.setAttribute("class","InputDateB"); 
    } else {
        newInput.setAttribute("class","InputDate"); 
    }
    newInput.setAttribute("id", ordreDInsersion); 
    newInput.setAttribute("style","width:99.5%"); 
    newInput.setAttribute("placeholder","Écrivez la date ici");
    newP.appendChild(newInput);
  
    document.getElementById("inputTD").appendChild(newP);
    ordreDInsersion++; 
    generateHTML();
    document.getElementById(ordreDInsersion-1).focus();
}

function addLine() {
    var newP = document.createElement("p"); 
    var newInfoText = document.createTextNode("Ligne insérée"); 
    var newInput = document.createElement("hidden"); 
    newInput.value = 750;
    newInput.setAttribute("class","InputLine"); 
    newInput.setAttribute("id", ordreDInsersion); 
    newInput.setAttribute("style","width:99.5%"); 
    newP.appendChild(newInfoText);
    newP.appendChild(newInput);
  
    document.getElementById("inputTD").appendChild(newP);
    ordreDInsersion++; 
    generateHTML();
}

function addIntro() {
    addInputDate(true);
    addLine();
    addInputH2(true);
}

var isBold = false;
function addBold() {
    if (!isBold && document.getElementById(ordreDInsersion-1).className != "InputLine") {
        document.getElementById(ordreDInsersion-1).value += "<b>" ;
        document.getElementById(ordreDInsersion-1).focus();
        isBold = true;
    } else if (document.getElementById(ordreDInsersion-1).className != "InputLine") {
        document.getElementById(ordreDInsersion-1).value += "</b>" ;
        document.getElementById(ordreDInsersion-1).focus();
        isBold = false;
    }   
    generateHTML();
}

var isItalic = false;
function addItalic() {
    if (!isItalic && document.getElementById(ordreDInsersion-1).className != "InputLine") {
        document.getElementById(ordreDInsersion-1).value += "<i>" ;
        document.getElementById(ordreDInsersion-1).focus();
        isItalic = true;
    } else if (document.getElementById(ordreDInsersion-1).className != "InputLine") {
        document.getElementById(ordreDInsersion-1).value += "</i>" ;
        document.getElementById(ordreDInsersion-1).focus();
        isItalic = false;
    }   
    generateHTML();
}

var isUnderline = false;
function addUnderline() {
    if (!isUnderline && document.getElementById(ordreDInsersion-1).className != "InputLine") {
        document.getElementById(ordreDInsersion-1).value += "<u>" ;
        document.getElementById(ordreDInsersion-1).focus();
        isUnderline = true;
    } else if (document.getElementById(ordreDInsersion-1).className != "InputLine") {
        document.getElementById(ordreDInsersion-1).value += "</u>" ;
        document.getElementById(ordreDInsersion-1).focus();
        isUnderline = false;
    }   
    generateHTML();
}

function addEnter() {
    if (document.getElementById(ordreDInsersion-1).className != "InputLine") {
        document.getElementById(ordreDInsersion-1).value += "<br/>" ;
        document.getElementById(ordreDInsersion-1).focus();
    }
    generateHTML();
}

function removeLast() {
    if(ordreDInsersion>0) {
        ordreDInsersion--; //Décrémente ordreDInsersion
        var inputToRemove = document.getElementById(ordreDInsersion).parentNode; //Récupère le parent du dernier élément ajouté (la balise <p> dans laquelle il est)
        inputToRemove.remove(); //Supprime le champ à supprimer
        generateHTML();
        document.getElementById(ordreDInsersion-1).focus();
    } 
}

isHTMLshown = true;
function showHTML() {
    if (isHTMLshown) {
        document.getElementById("toPrintRaw").style.visibility = "hidden";
        isHTMLshown = false;
    } else {
        document.getElementById("toPrintRaw").style.visibility = "visible";
        isHTMLshown = true;
    }
}

function generateHTML() {
    if(ordreDInsersion==0) {
        document.getElementById("toPrintRaw").innerText = "Ajoutez un champ pour voir l'HTML";
        document.getElementById("toPrintPreview").innerText = "Ajoutez un champ et commencez à écrire pour voir la prévisualisation";
    } else {
        var finalOutput = ""; //Setup de finalOutput (se reset à chaque fois que la fonction est appelée)
        for (i = 0; i < ordreDInsersion; i++) { //Boucle qui se répète pour chaque champ d'entrée ajouté
            //Current input correspond au champ de texte qui se fait traiter dans cette itération de la boucle
            var currentInput = document.getElementById(i); //Facilite juste la lecture car évite de répéter en permanence : document.getElementById(i)
            var currentInputClass = currentInput.className; //Récupère la class de currentInput
            switch (currentInputClass) { //Si la classe de current input est ...
                case "InputP" : //...InputP
                    //output sert à ajouter les balises sans se compliquer la lecture car évite de répéter : currentInput.value
                    var output = currentInput.value; //Setup de output
                    output = "<p>"+output+"</p>"; //Ajout des balises
                    finalOutput = finalOutput+output+"\n"; //Ajout de output à finalOutput, la string finale qui contient tout le code
                    break; //fin
                case "Inputh1" :
                    var output = currentInput.value;
                    output = "<h1>"+output+"</h1>";
                    finalOutput = finalOutput+output+"\n";
                    break;
                case "Inputh2" :
                    var output = currentInput.value;
                    output = "<h2>"+output+"</h2>";
                    finalOutput = finalOutput+output+"\n";
                    break;
                case "Inputh2B" :
                    var output = currentInput.value;
                    output = "<h2 class='newsTitle'>"+output+"</h2>";
                    finalOutput = finalOutput+output+"\n";
                    break;
                case "Inputh3" :
                    var output = currentInput.value;
                    output = "<h3>"+output+"</h3>";
                    finalOutput = finalOutput+output+"\n";
                    break;
                case "InputDate" :
                    var output = currentInput.value;
                    output = "<p>"+output+"</h1>";
                    finalOutput = finalOutput+output+"\n";
                    break;
                case "InputDateB" :
                    var output = currentInput.value;
                    output = "<p class='date'>"+output+"</h1>";
                    finalOutput = finalOutput+output+"\n";
                    break;
                case "InputLine" :
                    var output = currentInput.value;
                    finalOutput = finalOutput+"<hr color='#505050' width="+output+" align='left'> \n";
                    break;
            }
            if (i+1 == ordreDInsersion) { //Si c'est la dernière itération
                document.getElementById("toPrintRaw").innerText = finalOutput; //écrire le code
                document.getElementById("toPrintPreview").innerHTML = finalOutput; //écrire la preview
            }
        }
    }
}
isCTRL = false;
isB = false;
isI = false;

document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 17 :
            isCTRL = true;
            break;
        case 66 :
            isB = true;
            break;
        case 73 :
            isI = true;
            break;
        case 46 :
            removeLast();
            break;
        case 13 :
            addEnter();
            break;
    }

    if (isCTRL && isB) {
        addBold();
    }

    if (isCTRL && isI) {
        addItalic();
    }

}

document.onkeyup = function(event) { //A chaque nouveau caractère entré
    switch (event.keyCode) {
        case 17 :
            isCTRL = false;
            break;
        case 66 :
            isB = false;
            break;
        case 73 :
            isI = false;
            break;
    }


    generateHTML(); //mettre à jour l'affichage
}

window.onload = function() {
    showHTML();
}