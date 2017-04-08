define("FBox0b6e3a843dada4f", function() {
    return function(controller) {
        FBox0b6e3a843dada4f = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "250px",
            "id": "FBox0b6e3a843dada4f",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "width": "100%"
        }, {
            "containerWeight": 100
        }, {});
        FBox0b6e3a843dada4f.setDefaultUnit(kony.flex.DP);
        var Image0c8490e8937a945 = new kony.ui.Image2({
            "height": "150dp",
            "id": "Image0c8490e8937a945",
            "isVisible": true,
            "left": "8dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "-5dp",
            "width": "150dp",
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "margin": [0, 0, 0, 0],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {});
        var Label0a683920c384d4d = new kony.ui.Label({
            "id": "Label0a683920c384d4d",
            "isVisible": true,
            "left": "200dp",
            "skin": "slLabel",
            "text": "Label",
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "vExpand": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        FBox0b6e3a843dada4f.add(Image0c8490e8937a945, Label0a683920c384d4d);
        return FBox0b6e3a843dada4f;
    }
})