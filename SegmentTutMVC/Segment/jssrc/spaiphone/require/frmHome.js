define("frmHome", function() {
    return function(controller) {
        function addWidgetsfrmHome() {
            this.setDefaultUnit(kony.flex.DP);
            var btnLoadData = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "50dp",
                "id": "btnLoadData",
                "isVisible": true,
                "left": "45dp",
                "onClick": controller.AS_Button_j397d56c35a34d6e94d61dc816db8d41,
                "skin": "slButtonGlossBlue",
                "text": "Button",
                "top": "470dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexScrollContainer0bef6c6709b2344 = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "430dp",
                "horizontalScrollIndicator": true,
                "id": "FlexScrollContainer0bef6c6709b2344",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "30dp",
                "verticalScrollIndicator": true,
                "width": "100.00%",
                "zIndex": 1
            }, {}, {});
            FlexScrollContainer0bef6c6709b2344.setDefaultUnit(kony.flex.DP);
            var Segment0aab3c31c34fd40 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "Image0c8490e8937a945": "imagedrag.png",
                    "Label0a683920c384d4d": "one"
                }, {
                    "Image0c8490e8937a945": "imagedrag.png",
                    "Label0a683920c384d4d": "two"
                }, {
                    "Image0c8490e8937a945": "imagedrag.png",
                    "Label0a683920c384d4d": "three"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "Segment0aab3c31c34fd40",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "FBox0b6e3a843dada4f",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "64646400",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "Image0c8490e8937a945": "Image0c8490e8937a945",
                    "Label0a683920c384d4d": "Label0a683920c384d4d"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexScrollContainer0bef6c6709b2344.add(Segment0aab3c31c34fd40);
            this.add(btnLoadData, FlexScrollContainer0bef6c6709b2344);
        };
        return [{
            "addWidgets": addWidgetsfrmHome,
            "enabledForIdleTimeout": false,
            "id": "frmHome",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});