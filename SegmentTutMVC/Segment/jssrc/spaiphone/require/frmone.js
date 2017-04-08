define("frmone", function() {
    return function(controller) {
        function addWidgetsfrmone() {
            this.setDefaultUnit(kony.flex.DP);
            var Button0j4284dbf6b6d4f = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "50dp",
                "id": "Button0j4284dbf6b6d4f",
                "isVisible": true,
                "left": "40dp",
                "onClick": controller.AS_Button_de51336881694b09b3b497c2cc9452de,
                "skin": "slButtonGlossBlue",
                "text": "Button",
                "top": "483dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexScrollContainer0f0832030eaab4f = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "75%",
                "horizontalScrollIndicator": true,
                "id": "FlexScrollContainer0f0832030eaab4f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-1dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "15dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexScrollContainer0f0832030eaab4f.setDefaultUnit(kony.flex.DP);
            var Segment0b542cfda5f1c46 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "groupCells": false,
                "height": "100%",
                "id": "Segment0b542cfda5f1c46",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "64646400",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexScrollContainer0f0832030eaab4f.add(Segment0b542cfda5f1c46);
            this.add(Button0j4284dbf6b6d4f, FlexScrollContainer0f0832030eaab4f);
        };
        return [{
            "addWidgets": addWidgetsfrmone,
            "enabledForIdleTimeout": false,
            "id": "frmone",
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