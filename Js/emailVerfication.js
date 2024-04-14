const input = document.querySelectorAll("input"),
button = document.querySelectorAll("button"),
email = document.getElementById("email"),
expire = document.getElementById("expire");

let OTP ="";
function generateOTPs()
{
    console.log(
        Math.floor(Math.random() * 10)  + " " +
        Math.floor(Math.random() * 10)   + " " +
        Math.floor(Math.random() * 10)   + " " +
        Math.floor(Math.random() * 10)
    );

    input[0].focus();
    expire.innerText= 10;
    const expireInterval = setInterval(()=>
    {
        expire.innerText--;
        if (expire.innerText == 0)
        {
            clearInterval(expireInterval);
        }

    },1000);
    alert("Your OTP is: " + OTP);
}

function clearOTPs()
{
    input.forEach((input, index)=>{
        input.addEventListener("keyup",(e)=>{
            const currentInput = input,
            nextInput = input.nextElementSibling,
            prevInput = input.previousElementSibling;

            if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value != "")
            {
                nextInput.removeAttribute("disabled",true);
                nextInput.focus();
            }

            if(e.key === "Backspace")
            {
                inputs.forEach((input, index1)=>{
                    if(index <= index1 && prevInput)
                   {
                    input.setAttribute("disabled",true);
                    prevInput.focus();
                    prevInput.value="";
                   }
                });
            }

            if(!inputs[3].disabled && inputs[3].value !== "")
            {
                inputs[3].blur();
                button.classList.add("active");
                return;
            }
        });
    });

    window.addEventListener("load",()=>{
        let x = "chayeshanaeem856@gmail.com";
        if(x){
            email.innerText=x;
            generateOTPs();
        }
    });
      
}

const nextButton = document.getElementsByTagName("button");
// Add a click event listener to the button
nextButton.addEventListener("click", function() {
    // Navigate to the next page by setting the new URL
    window.location.href = "PasswordPage.html"; // Change "next_page.html" to the URL of your next page
});
