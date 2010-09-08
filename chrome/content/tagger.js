
function ToggleTagBar() {
    document.getElementById("tagger-tags").focus();
    var tagService = Components. classes["@mozilla.org/messenger/tagservice;1"].
                     getService (Components. interfaces. nsIMsgTagService);
    
    /*
    tagService. addTag ("tag", "#33CC00", '');
    alert(tagService.getAllTags({}))
    ToggleMessageTag("", true)
    */
    
}

ToggleTagBar.prototype = {
    getTagsForMessage: function(msg) {
        //gDBView.hdrForFirstSelectedMessage.getStringProperty("keywords")
        return msg.getStringProperty("keywords");
    },
    get inputText() {
        return document.getElementById("tagger-tags").value;
    },
    set inputText(str) {
        document.getElementById("tagger-tags").value = str;
    }
}
