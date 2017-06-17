/**
 * Created by Michael W on 17.06.2017.
 */
$(document).ready(function () {
    $("#jutebeutelbutton").click(function () {
        $("#responselink").text("Jutebeutel-Farm gestartet!");
        juteLoop(1);
    });
});

function juteLoop(i) {
    setTimeout(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/foundItem.php?i=" + i;
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text("Jutebeutel Nummer: " + i);

        i++;
        if (i <= 26) {
            juteLoop(i);
        } else {
            $("#response").text("Alle abgefarmt!");
            $("#responselink").text("");
        }
    }, document.getElementById('jutesekunden').value)
}