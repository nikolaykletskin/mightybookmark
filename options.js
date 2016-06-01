(function () {
    var saveButton = document.getElementById('save');

    document.title = chrome.i18n.getMessage("extName") + chrome.i18n.getMessage("options");
    saveButton.innerHTML = chrome.i18n.getMessage("save");
    document.addEventListener('DOMContentLoaded', restoreOptions);
    saveButton.addEventListener('click', saveOptions);

    function saveOptions() {
        var sites = document.getElementById('sites').value;
        chrome.storage.sync.set({
            sites: sites
        }, function() {
            var status = document.getElementById('status');
            status.textContent = 'Options saved.';
            setTimeout(function() {
                status.textContent = '';
            }, 750);
        });
    }

    function restoreOptions() {
        chrome.storage.sync.get('sites', function(items) {
            document.getElementById('sites').value = items.sites || '';
        });
    }
})();

