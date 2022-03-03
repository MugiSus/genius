const mainTextarea = document.getElementById('main-textarea');
const containerElement = document.getElementsByClassName('container')[0];

const rowContainerElement = document.querySelector(".shadow .row-container");
const elementElement = document.querySelector(".shadow .element");

mainTextarea.value = localStorage.getItem("mainTextarea") || "Generate\nOwn\nGenius";

// Dynamic Programming
function getElementsTextDP(text) {
    const dp = new Map();
    const getElementsText = (text) => {
        if (dp.has(text))
            return dp.get(text);
        if (text.length == 0)
            return dp.set(text, {
                symbols: [],
                nonSymbolsCtr: 0
            }).get(text);
        const twoLetters = text[1] && Elements.findSymbol(text[0] + text[1]) && getElementsText(text.slice(2));
        const oneLetter = getElementsText(text.slice(1));
        return dp.set(text, 
            twoLetters && oneLetter.nonSymbolsCtr >= twoLetters.nonSymbolsCtr ? {
                symbols: [text[0] + text[1], ...twoLetters.symbols],
                nonSymbolsCtr: twoLetters.nonSymbolsCtr
            } : {
                symbols: [text[0], ...oneLetter.symbols],
                nonSymbolsCtr: oneLetter.nonSymbolsCtr
            }
        ).get(text);
    }
    return getElementsText(text);
}

function generate(text) {
    while (containerElement.firstChild)
        containerElement.removeChild(containerElement.firstChild);
        
    const lines = text.split('\n');
    lines.forEach(line => {
        const curRowContElem = containerElement.appendChild(rowContainerElement.cloneNode(true));

        getElementsTextDP(line).symbols.forEach(char => {
            const foundElement = Elements.findSymbol(char);
            if (foundElement) {
                const curElementElem = curRowContElem.appendChild(elementElement.cloneNode(true));
                if (foundElement.symbol.length == 1)
                    curElementElem.classList.add("singleletter");
                curElementElem.getElementsByClassName("symbol")[0].textContent = foundElement.symbol;
                curElementElem.getElementsByClassName("number")[0].textContent = foundElement.number;
                curElementElem.getElementsByClassName("weight")[0].textContent = foundElement.weight.toFixed(2);
                curElementElem.getElementsByClassName("name")[0].textContent = foundElement.name.toUpperCase();
            }
        })
    })
}

generate(mainTextarea.value);

mainTextarea.addEventListener("input", event => {
    localStorage.setItem("mainTextarea", mainTextarea.value);
    generate(event.target.value)
});