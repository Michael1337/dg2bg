/**
 * Created by Michael W on 01.06.2017.
 */
function showChar(page) {
    var link = "http://www.diegilde2-browsergame.de/scripts/showCharakter.php?ct=MAIN&m=" + page;
    $("#response").html('<object data=' + link + ' />');
    $("#responselink").text(link);
    $("#action").html('' +
        '<button onclick="showChar(1)">Talente</button>' +
        '<button onclick="showChar(2)">Berufe</button>' +
        '<button onclick="showChar(3)">Betriebe</button>'
    );
}

$(document).ready(function () {
    $("#epabziehen").click(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/buyDealerItem.php?&item=1033&val=1&target=" + document.getElementById("spyopfer").value;
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text(link);
    });
});

$(document).ready(function () {
    $("#itemcheatbtn").click(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/moveItem.php?bp=bp2&item=" + document.getElementById("itemcheat").value + "&id=226&menu=prod&iv=1&target=" + document.getElementById("itemcheat2").value;
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text(link);
    });
});

$(document).ready(function () {
    $("#hideofficebtn").click(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/doHidefromoffice.php?target=" + document.getElementById("hideoffice").value;
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text(link);
    });
});

$(document).ready(function () {
    $("#setlawbtn").click(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/doSetLaw.php?law=" + document.getElementById("setlaw").value + "&sl=" + document.getElementById("setlaw2").value;
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text(link);
    });
});