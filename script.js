const passwordInput = document.querySelector(".pasw-field input")
const eyeIcon = document.querySelector(".pasw-field i")
const requirementList = document.querySelectorAll(".requirement-list li")

eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    eyeIcon.className = `${passwordInput.type === "password" ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}`;
});

const requirements = [
    {regex: /.{8,}/, index: 0 },
    {regex: /[0-9]/, index: 1},
    {regex: /[a-z]/, index: 2},
    {regex: /[^A-Za-z0-9]/, index: 3},
    {regex: /[A-Z]/, index: 4}
];

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {

        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        if(isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    });

});