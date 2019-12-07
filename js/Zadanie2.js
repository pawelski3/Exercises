function Zadanie2() {
    document.querySelector("#taskName").innerHTML = "Zadanie 2";
    document.querySelector("#task").innerHTML = "Podaj liczbę:";
    document.querySelector("#task").style.backgroundImage = 'url("")';

    AddInput();
    AddDiv();

    document.querySelector("#Input1").addEventListener("change", Write);

    function Write() {
        var liczba = document.getElementById("Input1").value;
        liczba = parseFloat(liczba);
        if (isNaN(liczba)) { document.querySelector("#Wynik").innerHTML = "Podaj liczbę.";
        document.getElementById("Input1").value="";
    }
        else {
            document.querySelector("#Wynik").innerHTML = liczba + 3;
        }
    }
}

