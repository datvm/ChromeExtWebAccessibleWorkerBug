(async () => {
    try {
        const file = await fetch(chrome.runtime.getURL("/worker.js"));
        const fileContent = await file.text();
        console.log("File loaded: " + fileContent);

        new Worker(chrome.runtime.getURL("/worker.js"));
    } catch (e) {
        console.error(e);
    }
})();