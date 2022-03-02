const mainTextarea = document.getElementById('main-textarea');
const containerElement = document.getElementsByClassName('container')[0];

const rowContainerElement = document.querySelector(".shadow .row-container");
const elementElement = document.querySelector(".shadow .element");

mainTextarea.value = localStorage.getItem("mainTextarea") || "Generate\nOwn\nGenius";

function generate(text) {
    while (containerElement.firstChild)
        containerElement.removeChild(containerElement.firstChild);
        
    const lines = text.split('\n');
    lines.forEach(line => {
        const curRowContElem = containerElement.appendChild(rowContainerElement.cloneNode(true));

        let chars = line.split('');
        for (let i = 0; i < chars.length; i++) {
            if (chars[i + 1] && Elements.findSymbol(chars[i] + chars[i + 1])) {
                chars[i] = chars[i] + chars[i + 1];
                chars.splice(i + 1, 1);
            } else if (chars[i - 1] && Elements.findSymbol(chars[i - 1][0]) && Elements.findSymbol(chars[i - 1][1] + chars[i])) {
                chars[i] = chars[i - 1][1] + chars[i];
                chars[i - 1] = chars[i - 1][0];
            }
        }
        console.log(chars)

        chars.forEach(char => {
            const foundElement = Elements.findSymbol(char);
            if (foundElement) {
                const curElementElem = curRowContElem.appendChild(elementElement.cloneNode(true));
                curElementElem.getElementsByClassName("symbol")[0].textContent = foundElement.symbol;
                curElementElem.getElementsByClassName("number")[0].textContent = foundElement.number;
                curElementElem.getElementsByClassName("weight")[0].textContent = foundElement.weight.toFixed(2);
                curElementElem.getElementsByClassName("name")[0].textContent = foundElement.name.toUpperCase();
                if (foundElement.symbol.length == 1)
                    curElementElem.classList.add("singleletter");
            }
        })
    })
}

generate(mainTextarea.value);

mainTextarea.addEventListener("input", event => {
    localStorage.setItem("mainTextarea", mainTextarea.value);
    generate(event.target.value)
});