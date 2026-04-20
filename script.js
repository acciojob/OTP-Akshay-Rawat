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

            // If current field has value → clear it AND move back
            if (code.value) {
                code.value = "";
                if (idx > 0) {
                    codes[idx - 1].focus();
                }
            }
            // If already empty → just move back
            else if (idx > 0) {
                codes[idx - 1].focus();
            }
        }
    });
});