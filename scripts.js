const txtUInput = document.querySelector(".inputs input");
checkBtn = document.querySelector(".inputs button");
infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
    // Splitting user input character, reversing them
    // and joining them in a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if (filterInput != reverseInput) {
       return (infoTxt.innerHTML = `No, <span>'${txtUInput.value}'</span> is not a palindrome!`);
    }
      infoTxt.innerHTML = `Yes, <span>'${txtUInput.value}'</span> is a palindrome!`;
})
txtUInput.addEventListener("keyup", () => {
    //removing spaces & all special characters from entered value
    filterInput = txtUInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
    if (filterInput) {
         return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active")
})