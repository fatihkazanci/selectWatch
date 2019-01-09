# selectWatch.js

jQuery plug-in gives an opportunity to monitor changes of DOM element's CSS styles, attributes or properties. It also gives a call-back when there is a change in the monitored styles or attributes.
You will be notified if there is any change of CSS properties attribute or property names monitoring on the screen. With function delegate, which gets an object with names and current values, it will be shown the cause of changes.

# Usage
To use the plugin add a reference to jQuery and a reference to this plugin to your page:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="/selectWatch.js"></script>

<input id="myWatch" value="test" />
```

> Make sure to include selectWatch.js script file after jquery.js
```javascript
function callBack(oldValue,newValue) {
   alert("Old: " + oldValue + " New: " + newValue);
}

$("#myWatch").selectWatch(callBack);
```

# Options
selectWatch plugin comes with options to configure how it works. All options below are optional. Default values are presented below.
```javascript
function callBack(oldValue, newValue) {
  alert("Old: " + oldValue + " New: " + newValue);
}

var options = {
            watchType: "attr",
            attr: "value",
            timeOut: 100,
            prop: null
        };
        
$("#myWatch").selectWatch(callBack, options);
```

<b>watchType</b>
