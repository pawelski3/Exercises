function AddInput(){
    var nod = document.querySelector("#task");
    var element = document.createElement('input');
    element.id = "Input1";

    nod.appendChild(element);
    //var nod = document.querySelector("#task");
    // var wynik = document.createElement('div');
    // wynik.id = "Wynik";
    // wynik.innerHTML = "Wynik";

    // nod.appendChild(wynik);

}

function AddDiv(){
    var nod = document.querySelector("#task");
    var wynik = document.createElement('div');
    wynik.id = "Wynik";
 
    //wynik.innerHTML = "Wynik";

    nod.appendChild(wynik);

}