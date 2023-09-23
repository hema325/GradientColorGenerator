window.onload = () => {

    const palette = document.getElementById("palette");
    const result = document.querySelector(".result");
    const cpyBtn = document.getElementById("copyBtn");
    const randomBtn = document.getElementById("randomBtn");
    const colorInputs = document.querySelectorAll(".color-input");
    const gradientDirectionSelect = document.getElementById("direction-gradient")


    const generateGradient = isRandom => {
        if (isRandom) {
            colorInputs[0].value = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
            colorInputs[1].value = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
        }

        palette.style.backgroundImage = `linear-gradient(to ${gradientDirectionSelect.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
        result.textContent = "background: " + palette.style.backgroundImage;
    }

    randomBtn.onclick = () => generateGradient(true);
    colorInputs.forEach(input => input.oninput = () => generateGradient(false));
    gradientDirectionSelect.onchange = () => generateGradient(false);

    cpyBtn.onclick = () => {
        let codeCopied = "Code Copied";
        let originalText = cpyBtn.textContent;

        if (originalText == codeCopied)
            return;

        cpyBtn.textContent = codeCopied;
        navigator.clipboard.writeText(result.textContent);
        let time = setTimeout(() => {
            cpyBtn.textContent = originalText;
        }, 2000);
    };

}

