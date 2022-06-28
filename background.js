const defaultFilters = [
	"*://*.bild.de/*",
	"*://*.welt.de/*",
	"*://*.finanzen.net/*",
	"*://*.sportbild.de/*",
	"*://*.rollingstone.de/*",
	"*://*.welt.de/*",
	"*://*.Politico.eu/*",
	"*://*.Gründerszene.de/*",
	"*://*.idealo.de/*",
	"*://*.Transfermarkt.de/*",
	"*://*.immowelt.de.de/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)