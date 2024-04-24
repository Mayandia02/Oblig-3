$(function(){
   hentBilletter();
});
function lagreBillett(){
    const kunde ={
        film : $('#film').val(),
        antall : $('#antall').val(),
        fornavn : $('#fornavn').val(),
        etternavn : $('#etternavn').val(),
        telefonnr : $('#telefonnr').val(),
        epost : $('#epost').val()
    }
    const url = "/lagre";
    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(kunde),
        success: function(){
            hentBilletter();
            window.location.href = 'index.html';
        }
    });
    return false;
}
    function visBilletter(kunder){


        let ut = "<table class='table table-striped'><tr><th>Navn</th>" +
            "<th>Telefonnummer</th><th>Epost</th>" +
            "<th>Antall Billetter</th><th>Film</th></tr>";

        for (let i = 0; i < kunder.length; i++) {
            ut += "<tr>";
            ut += "<td>" + kunder[i].fornavn + " " + kunder[i].etternavn + "</td>";
            ut += "<td>" + kunder[i].telefonnr + "</td>";
            ut += "<td>" + kunder[i].epost + "</td>";
            ut += "<td>" + kunder[i].antall + "</td>";
            ut += "<td>" + kunder[i].film + "</td>";
            ut += "<td><a class = 'btn btn-primary' href = 'endreKunde.html?id=" + kunder[i].id+"'>Endre</a></td>";
            ut += "<td><button class ='btn btn-danger' onclick='slettEnkeltBillett(" + kunder[i].id + ")'>Slett</button></td>";
            ut += "</tr>"
        }
        $('#utInfo').html(ut);
    }
    function hentBilletter(){
    $.get("/visBilletter", function (kunder){
        visBilletter(kunder)
    })
    }

function slettBilletter(){
    const url = "/slettAlle"
    $.ajax({
        url: url,
        type: 'DELETE',
        success: function(response) {
            console.log('Billettene slettet', response);
            window.location.href='index.html';
            hentBilletter();
        },
        error: function(error) {
            alert("Feil oppsto");
        }
    });
}

function slettEnkeltBillett(id) {
    $.get("slettEnkelt?id=" + id, function(data) {
        console.log(data)
        console.log("Gikk i javascript")
        hentBilletter();
    })
}

function sjekkEpost(inputElement) {
    const epost = inputElement.value;
    const at = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!epost.match(at)) {
        document.getElementById("uglydigEpost").innerHTML = "<p>Ugyldig email</p>";
        return false;
    } else {
        document.getElementById("uglydigEpost").innerHTML = "";
        return true;
    }
}

function sjekkNavn(name) {
    if (name.trim().length === 0) {
        document.getElementById("feilmeldingFornavn").innerHTML = "<p>Ugyldig navn</p>"; // Adjust this ID for etternavn validation if needed
        return false;
    } else {
        document.getElementById("feilmeldingFornavn").innerHTML = ""; // Clear the error message
        return true;
    }
}

function sjekkTnr(phonenmbr) {
    const tall = Number(phonenmbr);
    if (isNaN(tall) || phonenmbr.length !== 8) {
        document.getElementById("ugyldigNr").innerHTML = "<p>Ugyldig telefonnr</p>";
        return false;
    } else {
        document.getElementById("ugyldigNr").innerHTML = "";
        return true;
    }
}
