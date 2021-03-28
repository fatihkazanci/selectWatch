# selectWatch.js

jQuery plug-in gives an opportunity to monitor changes of DOM element's CSS styles, attributes, properties, input element or select element. It also gives a call-back when there is a change in the monitored styles or attributes.
You will be notified if there is any change of CSS properties attribute or property names monitoring on the screen. With function delegate, which gets an object with names and current values, it will be shown the cause of changes.

# Usage
To use the plugin add a reference to jQuery and a reference to this plugin to your page:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="selectWatch.min.js"></script>

<input id="myWatch" />
```

> Make sure to include selectWatch.js script file after jquery.js
```javascript
function callBack(oldValue, newValue, currentElement) {
            alert("Old: " + oldValue + " New: " + newValue);
            console.log(currentElement);
        }
var settings = {
            watchType: "input",
            timeOut: 1000
        };
$("#myWatch").selectWatch(callBack, settings);
```

# Options
selectWatch plugin comes with options to configure how it works. All options below are optional. Default values are presented below.

Example:
```javascript
var options = {
            watchType: "attr",
            attr: "myAttribute",
            ......
        };
```

<b>watchType:</b> \<string\> <small>(required)</small> | <i>Options: element,attr,prop,input,select</i><br>
<b>timeOut:</b> \<int\> <small>(Optimal)<small> | <i>Default:100</i> | <i></i><br>
<b>attr:</b> \<string\> <small>(If you are <i>attr</i> using watchType)</small> | <i>Your custom Attribute name</i><br>
<b>prop:</b> \<string\> <small>(If you are <i>prop</i> using watchType)</small> | <i>Your element's css Style name is...</i><br>
# Method
<b>selectRemove():</b> A method to remove an Element,CSS Style, Attribute, Input or Select monitoring.<br>
   <i>Example: $("#myWatch").selectRemove();</i><br>
