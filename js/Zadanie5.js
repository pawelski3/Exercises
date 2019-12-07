function Zadanie5() {
    document.querySelector("#taskName").innerHTML = "Zadanie 5";
    document.querySelector("#task").innerHTML = "Co przedstawia to zdjęcie?";
    document.querySelector("#task").style.width="80vh";
    document.querySelector("#task").style.height="600px";
    document.querySelector("#task").style.backgroundImage = 'url("js/port.jpg")'; 
    document.querySelector("#task").style.backgroundPosition="center";
    document.querySelector("#task").style.backgroundSize = "cover"; 
    AddInput();
    AddDiv();
    document.querySelector("#Input1").addEventListener("change", Write);

    function Write() {
        var odp = document.getElementById("Input1").value;
        //liczba = parseFloat(liczba);

        if (odp=="Port") { document.querySelector("#Wynik").innerHTML = "Tak. To jest port!";
        document.querySelector("#Wynik").style.color = "green";
        document.getElementById("Input1").value="";
    }
        else {
            document.querySelector("#Wynik").style.color = "red";
            document.querySelector("#Wynik").innerHTML = "To nie to. Próbuj dalej.";
        }
    }

}