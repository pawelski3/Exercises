function Zadanie3() {
    document.querySelector("#taskName").innerHTML = "Zadanie 3";
    document.querySelector("#task").innerHTML = "";
    document.querySelector("#task").style.backgroundImage = 'url("")';
    var liczbaA = prompt('Podaj liczbę A:');
    var liczbaB = prompt('Podaj liczbę B:');
    liczbaA = parseFloat(liczbaA);
    liczbaB = parseFloat(liczbaB);
    if (isNaN(liczbaA) || isNaN(liczbaB)) {
        document.querySelector("#task").innerHTML = "Coś nie tak. Podaj liczby";
    } else {
        sum(liczbaA, liczbaB);
    }

    function sum(X, Y) {
        var suma = X + Y;
        document.querySelector("#task").innerHTML = "Suma wynosi: " + suma;
        console.log(suma);
    }

}