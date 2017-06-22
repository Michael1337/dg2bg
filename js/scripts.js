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
    $("#trainbtn").click(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/doTrain.php?tar=" + document.getElementById("traintarget").value;
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text(link);
    });
});

$(document).ready(function () {
    $("#plunderbtn").click(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/doPlunderGuild.php";
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text(link);
    });
});

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
    $("#forgivesinsbtn").click(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/doForgivesins.php?target=" + document.getElementById("forgivesins").value;
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text(link);
    });
});

$(document).ready(function () {
    $("#guildtaxbtn").click(function () {
        var link = "http://www.diegilde2-browsergame.de/scripts/doSetGuildtax.php?tax=" + document.getElementById("guildtax").value;
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

//es sollte möglich sein, einen beliebigen Betrieb inspizieren zu lassen (allerdings kenne ich den link leider nicht)

//es sollte möglich sein, die Härte des Gesetzes anzupassen ...

//es sollte möglich sein, jeden beliebigen char anzuklagen, allerdings ist das ohne beweise nicht nur auffällig, sondern auch nutzlos.
///scripts/doSueSomebody.php?st="  + "strafe"  + "angeklagter"
//strafen: GOLD1, GOLD2, KERKER, TITLE1, TITLE2, DEAD
//angeklagter: &uname=twin&ct=MAIN