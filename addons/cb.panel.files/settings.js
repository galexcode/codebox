define([], function() {
    var $ = codebox.require("jQuery");
    var settings = codebox.require("core/settings");

    // Add settings
    return settings.add({
        'namespace': "files-panel",
        'title': "Files Explorer Panel",
        'defaults': {
            'openfiles': true,
            'hiddenfiles': true,
            'gitfolder': false
        },
        'fields': {
            'openfiles': {
                'label': "Show Open Files",
                'type': "checkbox"
            },
            'hiddenfiles': {
                'label': "Show Hidden Files",
                'type': "checkbox"
            },
            'gitfolder': {
                'label': "Show GIT Folder",
                'type': "checkbox"
            }
        }
    });
});