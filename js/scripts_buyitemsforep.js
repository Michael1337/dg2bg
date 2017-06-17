/**
 * Created by Michael W on 17.06.2017.
 */
$(document).ready(function () {
    $("#epitems").click(function () {
        $("#responselink").text("Item-Kauf begonnen!");
        var ids = $('#itemsToBuy').val();
        buyLoop(0, ids);
    });
});

function buyLoop(i, ids) {
    setTimeout(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/buyItem.php?item=" + ids[i] + "&target=" + document.getElementById("itemsToBuy2").value + "&iv=1";
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text(link + "" + ids.length);

        i++;
        if (i <= ids.length) {
            buyLoop(i, ids);
        } else {
            $("#response").text("Alles gekauft!");
            $("#responselink").text("");
        }
    }, 1000)
}