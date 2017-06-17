/**
 * Created by Michael W on 17.06.2017.
 */
$(document).ready(function () {
    $("#faustusbtn").click(function () {
        setTimeout(function () {
            var link = "http://www.diegilde2-browsergame.de/scripts/moveItem.php?bp=bp2&item=129&id=226&menu=prod&iv=1&target=MAIN";
            $("#response").html('<object data=' + link + ' />');
            $("#responselink").text(link);
        }, 1000);
        setTimeout(function () {
            link = "http://www.diegilde2-browsergame.de/scripts/moveItem.php?bp=bp2&item=129&id=226&menu=prod&iv=1&target=COURT";
            $("#response").html('<object data=' + link + ' />');
            $("#responselink").text(link);
        }, 2000);
        setTimeout(function () {
            link = "http://www.diegilde2-browsergame.de/scripts/moveItem.php?bp=bp2&item=129&id=226&menu=prod&iv=1&target=CHILD";
            $("#response").html('<object data=' + link + ' />');
            $("#responselink").text(link);
        }, 3000);
        setTimeout(function () {
            var link = "http://www.diegilde2-browsergame.de/measure/measure_129.php?item=129&ct=MAIN";
            $("#response").html('<object data=' + link + ' />');
            $("#responselink").text(link);
        }, 4000);
        setTimeout(function () {
            link = "http://www.diegilde2-browsergame.de/measure/measure_129.php?item=129&ct=COURT";
            $("#response").html('<object data=' + link + ' />');
            $("#responselink").text(link);
        }, 5000);
        setTimeout(function () {
            link = "http://www.diegilde2-browsergame.de/measure/measure_129.php?item=129&ct=CHILD";
            $("#response").html('<object data=' + link + ' />');
            $("#responselink").text(link);
        }, 6000);
    });
});