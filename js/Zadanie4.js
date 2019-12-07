function Zadanie4() {
    document.querySelector("#taskName").innerHTML = "Zadanie 4";
    document.querySelector("#task").innerHTML = "";
    document.querySelector("#task").style.backgroundImage = 'url("")';
    const Tablica = ['sto', 123, 'Agnieszka',4,-23,'WSB','das Aufbaustudium','false',12312254,0.234];
    for (let i=0;i<=Tablica.length-1;i++){
    AddDiv();
    document.querySelector("#Wynik").id = "Wynik"+i;
    if (isNaN(Tablica[i])){document.querySelector("#Wynik"+i).style.color = "green";}
    else {document.querySelector("#Wynik"+i).style.color = "blue";}
    document.querySelector("#Wynik"+i).innerHTML = Tablica[i];

    }

    //document.getElementById("taskName").innerHTML="2";
    
}