//Start with creating a function
function checkAge(){

    let ageVal = new Promise((resoleve,reject) => {

        let ageNum = document.getElementById("ageInput").value;

        if(ageNum >= 18){
            resoleve("Adult");
        }
        else{
            reject("Only ADULTS can visit this page.");

        }

    });

    let confirm = document.getElementById("confirmationPara");

    ageVal
    .then((message) =>{
        confirm.innerHTML = message;
    })

    .catch((errorMessage) =>{
        confirm.innerHTML = errorMessage;
    })
}

let checkBtn = document.getElementById("check");

checkBtn.addEventListener("click", function() { setTimeout(checkAge,3000);
});