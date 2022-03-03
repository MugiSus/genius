const mainTextarea = document.getElementById('main-textarea');
const containerElement = document.getElementsByClassName('container')[0];

const rowContainerElement = document.querySelector(".shadow .row-container");
const elementElement = document.querySelector(".shadow .element");

mainTextarea.value = localStorage.getItem("mainTextarea") || "Generate\nOwn\nGenius";

function getElementsTextDP(text) { // Dynamic Programming
    let dp = {};
    let getElementsText = (text) => {
        if (dp[text]) 
            return dp[text];
        if (text.length == 0)
            return dp[text] = {
                symbols: [],
                nonSymbolsCtr: 0
            };
        let twoLetters = text[1] && Elements.findSymbol(text[0] + text[1]) && getElementsText(text.slice(2));
        let oneLetter = getElementsText(text.slice(1));
        if (twoLetters && twoLetters.nonSymbolsCtr <= oneLetter.nonSymbolsCtr)
            return dp[text] = {
                symbols: [text[0] + text[1], ...twoLetters.symbols],
                nonSymbolsCtr: twoLetters.nonSymbolsCtr
            };
        else
            return dp[text] = {
                symbols: [text[0], ...oneLetter.symbols],
                nonSymbolsCtr: oneLetter.nonSymbolsCtr + !Elements.findSymbol(text[0])
            };
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