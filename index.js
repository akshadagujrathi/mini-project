const calcy = () => {
    let wp = document.querySelector("#wp").value;
    let mts = document.querySelector("#mts").value;
    let comp = document.querySelector("#comp").value;
    let phy = document.querySelector("#phy").value;
    let grade = "";
    
    if (wp >= 101 || mts >= 101 || comp >= 101 || phy >= 101) {

        // document.querySelectorAll(".input-text").innerHTML = "<button type='button' class='close' data-dismiss='alert'>&times;</button>Total Number of the subject is 100 only!";

        document.querySelector(".showdata h6").innerHTML
            = "Please enter value between 100";
        return false;
    }
    if (wp.value < 40) {
        console.log("40 in wp");
    }
    // let total = parseFloat(wp) + parseFloat(mts) + parseFloat(comp) + parseFloat(phy);
    // let percent = (total / 400) * 100;

    let failCount = 0;
    failCount += wp < 40 ? 1 : 0;
    failCount += mts < 40 ? 1 : 0;
    failCount += comp < 40 ? 1 : 0;
    failCount += phy < 40 ? 1 : 0;


    let failedInSubject = failCount > 0;

    let total = parseFloat(wp) + parseFloat(mts) + parseFloat(comp) + parseFloat(phy);

    let percent = (total / 400 * 100).toFixed(2);

    if (percent >= 80 && percent <= 100) {
        grade = 'O';
    } else if (percent >= 60 && percent < 80) {
        grade = 'A';
    } else if (percent >= 50 && percent < 60) {
        grade = 'B';
    }
    else if (percent >= 40 && percent < 50) {
        grade = 'c';
    } else {
        grade = 'F';

    }

    if (wp == "" || mts == ""
        || comp == "" || phy == "") {

        document.querySelector(".showdata h6").innerHTML
            = "Please enter all the fields";
        // alert("Please enter all the fields");

    } else {

        if (percent >= 40 && wp >= 35 && mts >= 35 && comp >= 35 && phy >= 35) {

            document.querySelector('.showdata h6').innerHTML = ` Your total out of 400 is ${total} and percentage is <span class="text-danger font-weight-bold">${percent}</span>.
     <br>Your grade is ${grade}. Congratulations You are Passed &#128522 `;
        } else {

            document.querySelector('.showdata h6').innerHTML = ` Your total out of 400 is ${total} and 
   Your grade is ${grade}. Oops you are failed in ${failCount} subjects &#128528 `;
            // percentage is <span class="text-danger font-weight-bold">${percent}</span>.
        }
    }
}

// ******************************** Accepting only numbers ********************************

function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

/****************** Enter all input fields then jump on next step using jquery*************
var $input = $('input:text'),
    $register = $('.form-button');    
$register.attr('disabled', true);

$input.keyup(function() {
    var trigger = false;
    $input.each(function() {
        if (!$(this).val()) {
            trigger = true;
        }
    });
    trigger ? $register.attr('disabled', true) : $register.removeAttr('disabled');
});

*/
