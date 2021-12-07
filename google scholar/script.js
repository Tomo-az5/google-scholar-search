const init = () => {
    chrome.contextMenus.create({
        "id": "search_GoogleScholar",
        "title": "Search with google scholar",
        "contexts": ["selection"]
    })

    chrome.contextMenus.onClicked.addListener((info) => {
        if (info.menuItemId == "search_GoogleScholar") {
            const text = info.selectionText;
            const url = `https://scholar.google.com/scholar?q=`+text;
            chrome.tabs.create({
                url
            });
        }
    });
}

init();