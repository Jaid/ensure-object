# ensure-object


<a href="https://raw.githubusercontent.com/Jaid/ensure-object/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/ensure-object?style=flat-square" alt="License"/></a>  
<a href="https://actions-badge.atrox.dev/Jaid/ensure-object/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2FJaid%2Fensure-object%2Fbadge" alt="Build status"/></a> <a href="https://github.com/Jaid/ensure-object/commits"><img src="https://img.shields.io/github/commits-since/Jaid/ensure-object/v1.0.1?style=flat-square&logo=github" alt="Commits since v1.0.1"/></a> <a href="https://github.com/Jaid/ensure-object/commits"><img src="https://img.shields.io/github/last-commit/Jaid/ensure-object?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/Jaid/ensure-object/issues"><img src="https://img.shields.io/github/issues/Jaid/ensure-object?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/ensure-object"><img src="https://img.shields.io/npm/v/ensure-object?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/ensure-object/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/ensure-object?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/ensure-object"><img src="https://img.shields.io/npm/dm/ensure-object?style=flat-square&logo=npm" alt="Downloads"/></a>

**If given value is not an object, returns an object with one entry.**















## Installation
<a href="https://npmjs.com/package/ensure-object"><img src="https://img.shields.io/badge/npm-ensure--object-C23039?style=flat-square&logo=npm" alt="ensure-object on npm"/></a>
```bash
npm install --save ensure-object@^1.0.1
```
<a href="https://yarnpkg.com/package/ensure-object"><img src="https://img.shields.io/badge/Yarn-ensure--object-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="ensure-object on Yarn"/></a>
```bash
yarn add ensure-object@^1.0.1
```
<a href="https://jsdelivr.com/package/npm/ensure-object/"><img src="https://img.shields.io/badge/jsDelivr-ensure--object-orange?style=flat-square&logo=html5&logoColor=white" alt="ensure-object on jsDelivr"/></a> <a href="https://unpkg.com/browse/ensure-object/"><img src="https://img.shields.io/badge/UNPKG-ensure--object-orange?style=flat-square&logo=html5&logoColor=white" alt="ensure-object on UNPKG"/></a>
```html
<script src="https://cdn.jsdelivr.net/npm/ensure-object@1.0.1/index.js"/>
```


## Try it out



Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type", "text/javascript");
scriptElement.setAttribute("src", "https://cdn.jsdelivr.net/npm/ensure-object@1.0.1/index.js");
document.querySelector("head").appendChild(scriptElement);
```

ensure-object is now stored in the global variable `ensureObject`. The following console expression should return something other than `"undefined"`.

```javascript
typeof ensureObject.default
```






## Development



Setting up:
```bash
git clone git@github.com:Jaid/ensure-object.git
cd ensure-object
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

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
