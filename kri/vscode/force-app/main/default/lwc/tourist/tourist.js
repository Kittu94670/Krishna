// Function to show results
function showResults() {
    // 1. All checkboxes ni teesukuntunnam
    var allCheckboxes = document.getElementsByClassName("myJob");
    var selectedCircles = "";
    var count = 0;

    // 2. Loop vadi check chestunnam edi select ayyindo
    for (var i = 0; i < allCheckboxes.length; i++) {
        if (allCheckboxes[i].checked == true) {
            selectedCircles = selectedCircles + allCheckboxes[i].value + " ";
            count = count + 1;
        }
    }

    // 3. Results ni screen paina chupistunnam
    if (count > 0) {
        document.getElementById("report").innerHTML = 
            "Selected: " + selectedCircles + "<br>Total: " + count;
    } else {
        alert("Please select at least one circle, bhai!");
    }
}