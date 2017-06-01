/**
 * Created by Michael W on 01.06.2017.
 */
function showWinBeliver() {
    var link = "http://www.diegilde2-browsergame.de/measure.php?ms=WinBeliver";
    $("#responselink").html('Gläubige gewinnen');
    $("#response").html('<object data=' + link + ' />');
    $("#action").html('');
}

function showPrey() {
    var link = "http://www.diegilde2-browsergame.de/measure.php?ms=Prey";
    $("#responselink").html('Predigt abhalten');
    $("#response").html('<object data=' + link + ' />');
    $("#action").html('');
}

function showTrain() {
    var link = "http://www.diegilde2-browsergame.de/measure.php?ms=Train";
    $("#responselink").html('Gruppenmitglied trainieren');
    $("#response").html('<object data=' + link + ' />');
    $("#action").html('');
}

function showOrderCollectEvidence() {
    var link = "http://www.diegilde2-browsergame.de/measure.php?ms=OrderCollectEvidence";
    $("#responselink").html('Sich umhören');
    $("#response").html('<object data=' + link + ' />');
    $("#action").html('');
}

function showQuack() {
    var link = "http://www.diegilde2-browsergame.de/measure.php?ms=Quacksalver";
    $("#responselink").html('Quacksalben');
    $("#response").html('<object data=' + link + ' />');
    $("#action").html('');
}

function showZuber() {
    var link = "http://www.diegilde2-browsergame.de/measure.php?ms=TakeABath";
    $("#responselink").html('In den Zuber steigen');
    $("#response").html('<object data=' + link + ' />');
    $("#action").html('');
}

function showDicegame() {
    var link = "http://www.diegilde2-browsergame.de/measure.php?ms=PlayTheGame";

    $("#responselink").text("Beim Würfelspiel betrügen!");
    $("#response").html('<object data=' + link + ' />');
    $("#action").html('<a href="http://www.diegilde2-browsergame.de/scripts/msPlayTheGame.php?step=6&startgold=794868&roundgold=48737&r1me=3&r2me=4&r3me=6&r4me=2&r5me=3&r1ai=3&r2ai=6&r3ai=1&r4ai=1&r5ai=5&mefinal=1&aifinal=1">Betrug starten</a><br/> http://www.diegilde2-browsergame.de/assets/css/dicegame.css?v=1495756510');
}

function moveItem369() {
    $.ajax({
        type: "GET",
        url: "./scripts/doSmuggel.php?item=369&id=225&chance=100",
        data: {"iv": document.getElementById("itemvalue369").value},
        success: function (data) {
            $("#errorbox2225").html(data);
        }
    });
}

$(document).ready(function () {
    $("#jutebeutelbutton").click(function () {
        $("#responselink").text("Jutebeutel-Farm gestartet!");
        juteLoop();
    });
});

var i = 1;

function juteLoop() {
    setTimeout(function () {

        var link = "http://www.diegilde2-browsergame.de/scripts/foundItem.php?i=" + i;
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text("Jutebeutel Nummer: " + i);

        i++;
        if (i <= 26) {
            juteLoop();
        } else {
            $("#response").text("Alle abgefarmt!");
            $("#responselink").text("");
        }
    }, document.getElementById('jutesekunden').value)
}

function msAcceptQuest12() {
    $.ajax({
        type: "POST",
        url: "http://www.diegilde2-browsergame.de/scripts/doQuest.php?m=1&qid=12",
        crossDomain: true,
        success: function (data) {
            $("#response").html(data);
        }
    });
};

function test() {
    var obj = {m: 1, qid: 12};
    postIframe('http://www.diegilde2-browsergame.de/scripts/doQuest.php', 'POST', obj)
}


function postIframe(target_url, method, params) {
    //Add iframe
    var iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    iframe.style.display = "none";

    //Give the frame a name
    var frame_name = "frame_name" + (new Date).getTime();
    iframe.contentWindow.name = frame_name;
    //build the form
    var form = document.createElement("form");
    form.target = frame_name;
    form.action = target_url;
    form.method = method;
    //loop through all parameters
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = params[key];
            form.appendChild(input);
        }
    }
    document.body.appendChild(form);
    form.submit();
}

$(document).ready(function () {
    $("#quests").click(function () {
        $("#responselink").text("Quest-Annahme gestartet!");
        quest1Loop();
    });
});

var i = 1;
function quest1Loop() {
    setTimeout(function () {

        var link = "http://www.diegilde2-browsergame.de/scripts/doQuest.php?m=1&qid=" + i;
        $("#response").html('<object data=' + link + ' />');
        $("#responselink").text("Quest Nummer: " + i);

        i++;
        if (i <= 26) {
            quest1Loop();
        } else {
            $("#response").text("Alle angenommen!");
            $("#responselink").text("");
        }
    }, 50)
}

$(document).ready(function () {
    $("#quests2").click(function () {
        $("#responselink").text("Quest-Erfüllung gestartet!");
        quest2Loop();
    });
});

var i = 1;
var j = 1;
function quest2Loop() {
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
            quest2Loop();
        } else {
            $("#response").text("Alle erfüllt!");
            $("#responselink").text("");
        }
    }, 300)
}

$(document).ready(function () {
    $("#epitems").click(function () {
        var i = 1;

        var ids = [23, 27, 45, 47, 82, 67, 101, 106, 135, 133, 132, 126];

        function myLoop() {
            setTimeout(function () {

                var link = "http://www.diegilde2-browsergame.de/scripts/buyItem.php?item=" + ids[i] + "&target=CHILD&iv=1";
                $("#response").html('<object data=' + link + ' />');
                $("#responselink").text(link);

                i++;
                if (i < ids.length) {
                    myLoop();
                }
            }, 1000)
        }

        myLoop();
    });
    $("#epitems2").click(function () {
        var i = 1;

        var ids = [129, 127, 48, 168, 167, 390];

        function myLoop() {
            setTimeout(function () {

                var link = "http://www.diegilde2-browsergame.de/scripts/buyItem.php?item=" + ids[i] + "&target=CHILD&iv=1";
                $("#response").html('<object data=' + link + ' />');
                $("#responselink").text(link);

                i++;
                if (i < ids.length) {
                    myLoop();
                }
            }, 1000)
        }

        myLoop();
    });
});

$(document).ready(function () {
    $("#epabziehen").click(function () {

        var link = "http://www.diegilde2-browsergame.de/scripts/buyDealerItem.php?&item=1033&target=" + document.getElementById("spyopfer").value;
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