//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) => {

    // forward typing
    code.addEventListener("input", () => {
        code.value = code.value.replace(/[^0-9]/g, "");

        if (code.value && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    // backspace behavior
    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (!code.value && idx > 0) {
                codes[idx - 1].focus();
            }
        }
    });
});