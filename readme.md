# ensure-object


If given value is not an object, returns an object with one entry.

## Installation
<a href='https://npmjs.com/package/ensure-object'><img alt='npm logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/npm.png'/></a>
```bash
npm install --save ensure-object@^1.0.1
```
<a href='https://yarnpkg.com/package/ensure-object'><img alt='Yarn logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/yarn.png'/></a>
```bash
yarn add ensure-object@^1.0.1
```


## Try it out
<img alt='Chromium logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/browser.png'/>
Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type","text/javascript");
scriptElement.setAttribute("src","https://unpkg.com/ensure-object@1.0.1");
document.querySelector("head").appendChild(scriptElement);
```

This module is now loaded in a variable that can be accessed in any scope.

```javascript
typeof ensureObject.default
```

## Documentation
Returns `value`, or `{key: value}` if `value` is not an object

**Kind**: Exported function  
**Returns**: <code>Object.&lt;string, \*&gt;</code> - An object  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value that will be converted to an array |
| key | <code>string</code> | The key of the object entry that might be created on a new object |

**Example**  
```javascript
import ensureObject from "ensure-object"
ensureObject("abc", "importantKey")
// { importantKey: "abc" }
```


## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
