var btn = document.getElementById('open_btn');
var div = document.getElementById('background');
var close = document.getElementById('close-button');

btn.onclick = function show() {
    div.style.display = "block";
}

close.onclick = function close() {
    div.style.display = "none";
}

window.onclick = function close(e) {
    if (e.target == div) {
        div.style.display = "none";
    }
}

function checkUserId() {
    var message = document.getElementById("message");

    var userId = document.getElementById("userId").value;

    xmlHttp = new XMLHttpRequest();//创建request对象
    xmlHttp.onreadystatechange = checkId;  // 服务器响应后，谁负责处理服务器响应的数据
    xmlHttp.open("POST", "../user/checkUserId.do?&userId=" + userId );  // 開啟連結
    xmlHttp.send(null);  // 傳送請求

    function checkId() {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                rel = JSON.parse(xmlHttp.responseText);
                console.log(rel)
                if (rel != "null") {
                    message.innerText = 'id已存在'
                    console.log('id已存在')
                } else {
                    message.innerText = '合法id'
                    console.log('合法id')
                }
            }
        }
    }
}