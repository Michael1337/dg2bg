/**
 * Created by Michael W on 22.06.2017.
 */
$(document).ready(function () {
    $("#evidencebtn").click(function () {
        $("#responselink").text("Suche Beweise!");
        evidenceLoop(1);
    });
});

function evidenceLoop(i) {
    var time = 2000;
    var end = document.getElementById("collectEvidence").value;
    setTimeout(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/doOrderCollectEvidence.php";
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text("Beweis Nummer: " + i);

        i++;
        if (i <= end) {
            evidenceLoop(i);
        } else {
            $("#response").text(end + " Beweise gesammelt!");
            $("#responselink").text("");
        }
    }, time)
}