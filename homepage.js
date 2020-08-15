// INFO: Search function
function StartSearch() {
    var content = document.getElementById("search_input").value;
    if (content) {
        var DirHerf = "https://www.google.com/search?q=" + content;
        document.location.href = DirHerf;
    }
}
// 輸入欄按下 Enter 觸發
var search_input = document.getElementById("search_input");
search_input.onkeypress = function(event) {
    if (event.which == 13) {
        StartSearch();
    }
}
// 搜尋按鈕按下觸發
document.getElementById("search_button").onclick = StartSearch;
