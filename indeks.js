
let billettene = [];

function kjop() {
    const billett = {
        fornavn: $("#fname").val(),
        etternavn: $("#ename").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val(),
        antall: $("#antall").val(),
        film: $("#film").val()
    }


    let teller = 0;

    if ($("#film").val() === "velg") {
        $("#filmfeil").html("du må velge en film!");
    } else {
        $("#filmfeil").html(" ");
        teller++;
    }

    if ($("#fname").val() === "") {
        $("#fnamefeil").html("du må skrive noe inn i fornavnet!");
    } else {
        $("#fnamefeil").html("");
        teller++;
    }

    if ($("#ename").val() === "") {
        $("#enamefeil").html("du må skrive noe inn i etternavnet!");
    } else {
        $("#enamefeil").html("");
        teller++;
    }
    if ($("#telefonnr").val() === "") {
        $("#telefonnrfeil").html("du må skrive noe inn i telefonnr!");

    } else {
        $("#telefonnrfeil").html(" ");
        teller++;
    }
    if ($("#epost").val() === "") {
        $("#epostfeil").html("du må skrive noe inn i epost!");

    } else {
        $("#epostfeil").html(" ");
        teller++;
    }

    if ($("#antall").val() === "") {
        $("#antallfeil").html("du må skrive noe inn i antall!");
    } else {
        $("#antallfeil").html(" ");
        teller++;
    }

    if (teller === 6) {
        billettene.push(billett);
        $.post("/lagbillett", billett,function() {
            visallebilletter();

            $("#fname").val(" "),
                $("#ename").val(" "),
                $("#telefonnr").val(" "),
                $("#epost").val(" "),
                $("#antall").val(" "),
                $("#film").val("velg");
        })
    }
}

function visallebilletter() {
    $.get("/hentbillett",billett, function () {
        hentalle(billett);
    })
}
function hentalle() {
    let ut = "<table><tr><th>film</th><th>antall</th>";
    ut += "<th>fornavn</th><th>etternavn</th><th>telefonnr</th><th>epost</th></tr>";
    for (let i = 0; i < billettene.length; i++) {
        ut += "<tr><td>" + billettene[i].film + "</td><td>" + billettene[i].antall;
        ut += "<td>" + billettene[i].fornavn + "</td><td>" + billettene[i].etternavn + "</td><td>" +
            billettene[i].telefonnr + "</td><td>" + billettene[i].epost;
        ut += "</td></tr>";
        $("#allebillettene").html(ut);
    }
}

function slettbillett() {
    $.post("/slettbillett", function () {
        slettbillett();
    })

}
