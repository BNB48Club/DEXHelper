var input = document.createElement("textarea");
input.cols = "40";
input.rows = "20";

var body = document.getElementsByTagName("body")[0];
body.appendChild(input);


var button = document.createElement("button");
button.innerHTML = "GO";


body.appendChild(button);
button.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var val = input.value
        var splitted = new Array();
        splitted = val.split("\n"); 
        chrome.tabs.executeScript(tabs[0].id,{
            code: "var address = '"+splitted+ "';"
        });
        chrome.tabs.executeScript(tabs[0].id, {file: "jquery.min.js"});
        chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
        });
  });

