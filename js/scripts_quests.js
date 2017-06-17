/**
 * Created by Michael W on 17.06.2017.
 */
$(document).ready(function () {
    $("#quests").click(function () {
        $("#responselink").text("Quest-Annahme gestartet!");
        quest1Loop(1);
    });
});

function quest1Loop(i) {
    setTimeout(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/doQuest.php?m=1&qid=" + i;
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text("Quest Nummer: " + i);

        i++;
        if (i <= 26) {
            quest1Loop(i);
        } else {
            $("#response").text("Alle angenommen!");
            $("#responselink").text("");
        }
    }, 50)
}

$(document).ready(function () {
    $("#quests2").click(function () {
        $("#responselink").text("Quest-Erfüllung gestartet!");
        quest2Loop(1, 1);
    });
});

function quest2Loop(i, j) {
    setTimeout(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/doQuestitem.php?qp=" + i + "&q=" + j;
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text("Quest Nummer: " + "qp=" + i + "&q=" + j);

        if (j >= 3) {
            j = 1;
            i++;
        } else {
            j++;
        }
        if (i <= 26) {
            quest2Loop(i, j);
        } else {
            $("#response").text("Alle erfüllt!");
            $("#responselink").text("");
        }
    }, 800)
}