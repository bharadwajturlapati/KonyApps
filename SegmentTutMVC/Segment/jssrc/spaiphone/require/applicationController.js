define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("FBox0b6e3a843dada4f", "FBox0b6e3a843dada4f", "FBox0b6e3a843dada4fController");
        kony.mvc.registry.add("frmHome", "frmHome", "frmHomeController");
        kony.mvc.registry.add("frmone", "frmone", "frmoneController");
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmHome").navigate();
    }
});