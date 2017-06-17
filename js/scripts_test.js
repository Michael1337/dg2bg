/**
 * Created by Michael W on 17.06.2017.
 */
function msAcceptQuest12() {
    $.ajax({
        type: "POST",
        url: "http://www.diegilde2-browsergame.de/scripts/doQuest.php?m=1&qid=12",
        crossDomain: true,
        success: function (data) {
            $("#response").html(data);
        }
    });
}

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