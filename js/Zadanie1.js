function Zadanie1() {
    document.querySelector("#taskName").innerHTML = "Zadanie 1";
    document.querySelector("#task").innerHTML = "";
    document.querySelector("#task").style.backgroundImage = 'url("")';
    //document.getElementById("taskName").innerHTML="2";
    var liczba = prompt('Podaj liczbę:');
    liczba = parseFloat(liczba);
    if (isNaN(liczba)) {
        alert("Podaj liczbę");
    } else {
        alert(liczba);
        //document.querySelector("#task").innerHTML = "";

    }
}