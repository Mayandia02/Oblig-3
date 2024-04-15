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
            window.location.href = 'index.html';
        }
    });
    hentBilletter();



}
    function visBilletter(kunder){


        let ut = "<table class='table table-striped'><tr><th>Navn</th>" +
            "<th>Telefonnummer</th><th>Epost</th>" +
            "<th>Antall Billetter</th><th>Film</th></tr>";

        for (let i = 0; i < kunder.length; i++) {
            ut += "<tr>";
            ut += "<td>" + kunder[i].film + "</td>";
            ut += "<td>" + kunder[i].antall+ "</td>";
            ut += "<td>" + kunder[i].fornavn + "</td>";
            ut += "<td>" + kunder[i].etternavn + "</td>";
            ut += "<td>" + kunder[i].telefonnr + "</td>";
            ut += "<td>" + kunder[i].epost + "</td>";
            ut += "<td><button class='btn btn-danger' onclick='slettEnkeltBillett(" + i + ")'>Slett</button></td>";
            ut += "</tr>"
        }
        $('#utInfo').html(ut);
    }
    function hentBilletter(){
    $.get("/visBilletter", function (kunder){
        visBilletter(kunder)
    })
    }

function slettBillett(){
    document.getElementById("utInfo").innerHTML = "";
    ticketArray = [];
}
function slettEnkeltBillett(index) {
    ticketArray.pop(index, 1); 
    visBilletter();
}


function sjekkEpost(epost){
    const at = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (epost.value.match(at)){
        return true;
    }else {
        document.getElementById("uglydigEpost").innerHTML="<p>Ugyldig email</p>";
        return false;
    }
}

function sjekkNavn(name){
    if (name === ""||name==null){
        document.getElementById("feilmeldingFornavn").innerHTML="<p>Ugyldig navn</p>";
        return false;
    }
    return true;
}

function sjekkTnr(phonenmbr){
    const tall = Number(phonenmbr);
    if (isNaN(tall) && phonenmbr.length !== 8){
        document.getElementById("telefonnr").innerHTML="<p>Ugyldig telefonnr</p>";
        return false;
    }
}