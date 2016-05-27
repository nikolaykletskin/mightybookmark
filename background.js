chrome.browserAction.onClicked.addListener(function () {
    chrome.storage.sync.get('sites', function(options) {
        var sitesLength,
            i,
            sites;

        sites = options.sites.split("\n").filter(function(item) {
            return item !== '';
        });
        sitesLength = sites.length;
        for (i = 0; i < sitesLength; i += 1) {
            chrome.tabs.create({url: sites[i]});
        }
    });
});

