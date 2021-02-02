var submitBtnElm = document.getElementById("submit-value");
submitBtnElm.addEventListener('click', getInputValue);
function getInputValue() {
    var store = document.getElementById("user-text").value;
    var btnType = document.getElementById("choose-btn-type").value;
    var btnColor = document.getElementById("choose-color").value;
    var btnSize = document.getElementById("choose-btn-size").value;

    console.log(btnSize);
    document.getElementById('output').innerText = store;
    document.getElementById("output").className = `btn btn-${btnType ? btnType + '-' : ''}${btnColor} ${btnSize}`

}