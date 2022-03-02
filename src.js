const mainTextarea = document.getElementById('main-textarea');
const containerElement = document.getElementsByClassName('container')[0];

const rowContainerElement = document.querySelector(".shadow .row-container");
const elementElement = document.querySelector(".shadow .element");

mainTextarea.value = localStorage.getItem("mainTextarea") || "Generate\nOwn\nGenius";

function getElementsText(text, symbolsArr = [], nonSymbolsCount = 0) {
    if (text.length == 0)
        return {symbolsArr: symbolsArr, nonSymbolsCount: nonSymbolsCount};
    let oneLetterSymbolResult, twoLetterSymbolResult;
    if (Elements.findSymbol(text[0] + text[1])) 
        twoLetterSymbolResult = getElementsText(text.slice(2), [...symbolsArr, text[0] + text[1]], nonSymbolsCount);
    oneLetterSymbolResult = getElementsText(text.slice(1), [...symbolsArr, text[0]], nonSymbolsCount + !Elements.findSymbol(text[0]));
    return twoLetterSymbolResult && twoLetterSymbolResult.nonSymbolsCount <= oneLetterSymbolResult.nonSymbolsCount ? twoLetterSymbolResult : oneLetterSymbolResult;
}

function generate(text) {
    while (containerElement.firstChild)
        containerElement.removeChild(containerElement.firstChild);
        
    const lines = text.split('\n');
    lines.forEach(line => {
        const curRowContElem = containerElement.appendChild(rowContainerElement.cloneNode(true));

        getElementsText(line).symbolsArr.forEach(char => {
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