// sanity check
console.log("app.js linked.");
function myFunction() {
    document.getElementById("myForm").submit();
}
submitBtn.click(function () {
    if ($("#valueText").val() === "ENTER VALUE")
    {
        alert("please insert a valid value");
        return false;
    }
});

valueText.blur(function () {
    if(this.value == ''){
        this.value = 'ENTER VALUE';
    }
});

 valueText.focus(function () {
    if (this.value == 'ENTER VALUE') {
        this.value = '';
    }
});
