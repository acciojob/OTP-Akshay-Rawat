const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) => {

    code.addEventListener("input", () => {
        code.value = code.value.replace(/[^0-9]/g, "");

        if (code.value && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {

            // if current has value → clear only
            if (code.value) {
                code.value = "";
            }
            // if empty → move focus back
            else if (idx > 0) {
                codes[idx - 1].focus();
            }
        }
    });
});