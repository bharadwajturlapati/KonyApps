//Type your code here
var lblSeg = new kony.ui.Label({
            "id": "lblSeg",
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

var imgSeg = new kony.ui.Image2({
            "height": "150dp",
            "id": "imgSeg",
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


var loadDataInSegment = function(){
  $KG.allforms.frmone.Segment0b542cfda5f1c46.setData([{
                    "imgSeg": "imagedrag.png",
                    "lblSeg": "one"
                }, {
                    "imgSeg": "imagedrag.png",
                    "lblSeg": "two"
                }, {
                    "imgSeg": "imagedrag.png",
                    "lblSeg": "three"
                }]);
};