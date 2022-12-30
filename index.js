const calcy = () => {
    let wp = document.querySelector("#wp").value;
    let mts = document.querySelector("#mts").value;
    let comp = document.querySelector("#comp").value;
    let phy = document.querySelector("#phy").value;
    let grade = "";
    console.log(wp);
    
        let total = parseFloat(wp) + parseFloat(mts) + parseFloat(comp) + parseFloat(phy);
        //    alert(total);

        let percent = (total / 400) * 100;
        // alert(percent);

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

        if (percent > 40 ) {
            
            document.querySelector('.showdata h6').innerHTML = ` Your total out of 400 is ${total} and percentage is ${percent}.
     <br>Your grade is ${grade}. Congratulations You are Passed &#128522 `;
        } else {
            document.querySelector('.showdata h6').innerHTML = ` Your total out of 400 is ${total} and percentage is <span class="text-danger font-weight-bold">${percent}</span>.
     <br>Your grade is ${grade}. Oops you are failed &#128528 `;
            }
        
    


}
