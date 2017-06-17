/**
 * Created by Michael W on 17.06.2017.
 */
$(document).ready(function () {
    function updateGold() {
        var gold1 = parseInt($("#gameGold").val());
        var gold2 = parseInt($("#gameGold2").val());
        var gold3 = (gold1+gold2*5)*2;
        $("#gameGold3").val(gold3);
    }
    $("#gameGold").change(function () {
        updateGold();
    });
    $("#gameGold2").change(function () {
        updateGold();
    });

    $("#gameBtn").click(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/msPlayTheGame.php?step=6" +
            "&startgold=" + document.getElementById("gameGold").value +
            "&roundgold=" + document.getElementById("gameGold2").value +
            "&r1me=" + document.getElementById("gameMe1").value +
            "&r2me=" + document.getElementById("gameMe2").value +
            "&r3me=" + document.getElementById("gameMe3").value +
            "&r4me=" + document.getElementById("gameMe4").value +
            "&r5me=" + document.getElementById("gameMe5").value +
            "&r1ai=" + document.getElementById("gameAi1").value +
            "&r2ai=" + document.getElementById("gameAi2").value +
            "&r3ai=" + document.getElementById("gameAi3").value +
            "&r4ai=" + document.getElementById("gameAi4").value +
            "&r5ai=" + document.getElementById("gameAi5").value +
            "&mefinal=1&aifinal=1";
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text(link);
    });
});