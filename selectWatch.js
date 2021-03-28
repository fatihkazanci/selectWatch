/*
*	SelectWatch v1.0.1
*	Updated On: 07/01/2019
*	By Fatih KAZANCI
*   Licenced By GNU General Public License v3.0
*   https://github.com/fatihkazanci/selectWatch/blob/master/LICENSE
*/
(function ($) {
    var globalWatch = [];
    var globalCallBack = [];
    var globalSetting = [];
    var globalElement = [];
    var globalWatchElements = [];
    function startSelectWatch(callBack, setting, thisElement) {
        var thisId = $(thisElement).attr("id");
        if (!(thisId != undefined && thisId != "" && thisId != "undefined" && thisId != "NaN" && thisId != NaN)) {
            var random = Math.floor(Math.random() * 100);
            $(thisElement).attr("id", "id-" + random);
        }

        var currentId = $(thisElement).attr("id");
        if (globalWatchElements.indexOf(currentId) == -1) {
            globalWatchElements.push(currentId);
            globalCallBack.push(callBack);
            globalSetting.push(setting);
            globalElement.push(thisElement);
        };

        var arrayIndex = globalWatchElements.indexOf(currentId);

        /* Watch Types */
        var typeElement = "element";
        var typeAttr = "attr";
        var typeProp = "prop";
        var typeInput = "input";
        var typeSelect = "select";
        /* Watch Types End */

        if (!(setting != null && setting != undefined && setting != "" && setting != NaN && setting != "NaN")) {
            var defaultSetting = {
                watchType: "null"
            };
            setting = defaultSetting;
        };

        if (!(setting.timeOut != null && setting.timeOut != undefined && setting.timeOut != "undefined" && setting.timeOut != NaN && setting.timeOut != "NaN" && setting.timeOut != "")) {
            setting.timeOut = 100;
        };

        switch (setting.watchType) {
            case typeAttr:
                var currentAttr = setting.attr;
                var oldAttrValue = "";
                if (globalWatch[arrayIndex] == undefined) {
                    globalWatch.push(setInterval(function () {
                        var newValue = $(thisElement).attr(currentAttr);
                        if (oldAttrValue == "") {
                            oldAttrValue = newValue;
                        } else {
                            if (oldAttrValue != newValue) {
                                callBack(oldAttrValue, newValue, thisElement);
                                oldAttrValue = newValue;
                            }
                        }
                    }, setting.timeOut));
                };
                globalWatch[arrayIndex];
                break;
            case typeElement:
                var oldElementValue = "";
                if (globalWatch[arrayIndex] == undefined) {
                    globalWatch.push(setInterval(function () {
                        var newElementValue = $(thisElement).html();
                        if (oldElementValue == "") {
                            oldElementValue = newElementValue;
                        } else {
                            if (oldElementValue != newElementValue) {
                                callBack(oldElementValue, newElementValue, thisElement);
                                oldElementValue = newElementValue;
                            }
                        }
                    }, setting.timeOut));
                };
                globalWatch[arrayIndex];
                break;
            case typeProp:
                var currentProp = setting.prop;
                var oldPropValue = "";
                if (globalWatch[arrayIndex] == undefined) {
                    globalWatch.push(setInterval(function () {
                        var newPropValue = $(thisElement).css(currentProp);
                        if (oldPropValue == "") {
                            oldPropValue = newPropValue;
                        } else {
                            if (oldPropValue != newPropValue) {
                                callBack(oldPropValue, newPropValue, thisElement);
                                oldPropValue = newPropValue;
                            }
                        }
                    }, setting.timeOut));
                };
                globalWatch[arrayIndex];
                break;
            case typeInput:
                var timer;
                var oldValue = "";
                $(thisElement).on("keyup", function () {
                    clearInterval(timer);
                    timer = setInterval(function () {
                        var newValue = $(thisElement).val();
                        callBack(oldValue, newValue, thisElement);
                        if (oldValue != newValue) {
                            oldValue = newValue;
                        }
                        clearInterval(timer);
                    }, setting.timeOut);
                });
                if (globalWatch[arrayIndex] == undefined) {
                    globalWatch.push(arrayIndex);
                };
                break;
            case typeSelect:
                var timerx;
                var oldValuex = "";
                $(thisElement).on("change", function () {
                    clearInterval(timerx);
                    timerx = setInterval(function () {
                        var newValue = $(thisElement).val();
                        callBack(oldValuex, newValue, thisElement);
                        if (oldValuex != newValue) {
                            oldValuex = newValue;
                        }
                        clearInterval(timerx);
                    }, setting.timeOut);
                });
                if (globalWatch[arrayIndex] == undefined) {
                    globalWatch.push(arrayIndex);
                };
                break;
            default:
                console.error("There is a problem with your configuration settings!");
                break;
        }
    };

    $.fn.selectWatch = function (callBack, setting) {
        startSelectWatch(callBack, setting, this);
    };
    $.fn.selectRemove = function () {
        var thisId = this.attr("id");
        var currentIndex = GetIndex(thisId);
        clearInterval(globalWatch[currentIndex]);
        globalWatchElements.splice(currentIndex, 1);
        globalWatch.splice(currentIndex, 1);
        globalElement.splice(currentIndex, 1);
        globalCallBack.splice(currentIndex, 1);
        globalSetting.splice(currentIndex, 1);
    };

    function GetIndex(currentId) {
        for (i = 0; i < globalWatchElements.length; i++) {
            var currentValue = globalWatchElements[i];
            if (currentValue == currentId) {
                return i;
            }
        }
        return -1;
    }
}(jQuery));