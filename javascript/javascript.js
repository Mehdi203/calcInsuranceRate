
//validating form function


function validateForm1() {
    let fname = document.forms["form1"]["fname"].value;
    let lname = document.forms["form1"]["lname"].value;
    let address1 = document.forms["form1"]["address1"].value;
    let postcode = document.forms["form1"]["postcode"].value;
    let email = document.forms["form1"]["email"].value;

    if (fname == "" || lname == "" || address1 == "" || address1 == "" || postcode == "" || email == "") {
        alert("All fields must be filled out");
        // document.getElementById("submit").disabled = true

        return false;
    }

}



// Function to calculate rate
function calcrate() {
    let age = parseFloat(document.getElementById("age").value);
    let ticket = parseInt(document.getElementById("ticket").value);
    let carv = parseFloat(document.getElementById("carValue").value);

    let base_rate = carv * 0.05;
    var ticket_premium;

    //calculating age premium


    if (age < 25) {
        var age_premium = base_rate * 0.15;

    }
    else {
        age_premium = 0;

    }

    //calculating ticket premium if number of tickets are less than or equal to 3

    if (ticket < 4) {

        if (ticket == 0) {

            ticket_premium = 0

        }

        else if (ticket == 1 || ticket == 2) {

            ticket_premium = base_rate * 0.10
        }

        else {

            ticket_premium = base_rate * 0.25
        }

        //calculate final rate
        final_rate = base_rate + age_premium + ticket_premium;
        final_rate = final_rate.toFixed(2);

        //output results to the document

        document.getElementById("frate").innerHTML = "Your total car insurance is: $" + final_rate;
        document.getElementById("breakdown").innerHTML = "Breakdown of your insurance cost:";
        document.getElementById("base_rate").innerHTML = "Base Rate: $" + base_rate;
        document.getElementById("age_perm").innerHTML = "Age Premium: $" + age_premium.toFixed(2);
        document.getElementById("tick_perm").innerHTML = "Ticket Premium: $" + ticket_premium.toFixed(2);


    }

    // if number of tickets are 4 or more
    else {
        document.getElementById("frate").innerHTML = "Sorry! We are unable to provide you any service!. Please refer to our "+ '<a href="policy.com">Policy</a>';
        document.getElementById("breakdown").innerHTML = "";
        document.getElementById("base_rate").innerHTML = "";
        document.getElementById("age_perm").innerHTML = "";
        document.getElementById("tick_perm").innerHTML = "";


    }




}





