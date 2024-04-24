
$(function(){
    const id = window.location.search.substring(1);
    const url = "/hentBilett?" + id;
    $.get(url, function(kunde){
        $('#id').val(kunde.id);
        $('#fornavn').val(kunde.fornavn);
        $('#etternavn').val(kunde.etternavn);
        $('#epost').val(kunde.epost);
        $('#antall').val(kunde.antall);
        $('#film').val(kunde.film);
    });
});
function endreBiletten() {
    console.log("hei");
    const kunde = {
        id: $('#id').val(),
        film: $('#film').val(),
        antall: $('#antall').val(),
        fornavn: $('#fornavn').val(),
        etternavn: $('#etternavn').val(),
        telefonnr: $('#telefonnr').val(),
        epost: $('#epost').val()
    };

    $.ajax({
        url: "/oppdater",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(kunde),
        success: function (){
            window.location.href='index.html';
        }
    })
        .done(function(data) {
            // Handle successful response
            console.log('Update successful!', data);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            // Handle error situation
            console.error('Error updating:', textStatus, errorThrown);
        });
}