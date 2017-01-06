webpackJsonp([1,2],{

/***/ 1135:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },

/***/ 1138:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(531);


/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(851);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1135)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js?sourcemap!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?sourcemap!./styles.scss", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js?sourcemap!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?sourcemap!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 851:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(852)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n.md-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n[md-ripple] {\n  overflow: hidden; }\n\n[md-ripple].mdRippleUnbounded {\n  overflow: visible; }\n\n.md-ripple-background {\n  background-color: rgba(0, 0, 0, 0.0588);\n  opacity: 0;\n  -webkit-transition: opacity 300ms linear;\n  transition: opacity 300ms linear;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.mdRippleUnbounded .md-ripple-background {\n  display: none; }\n\n.md-ripple-background.md-ripple-active {\n  opacity: 1; }\n\n.mdRippleFocused .md-ripple-background {\n  opacity: 1; }\n\n.md-ripple-foreground {\n  background-color: rgba(0, 0, 0, 0.0588);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.25;\n  position: absolute;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.md-ripple-foreground.md-ripple-fade-in {\n  opacity: 1; }\n\n.md-ripple-foreground.md-ripple-fade-out {\n  opacity: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.mdRippleFocused .md-ripple-background {\n  background-color: rgba(255, 171, 64, 0.1); }\n\n[md-button].md-button-focus.md-primary .md-button-focus-overlay, [md-icon-button].md-button-focus.md-primary .md-button-focus-overlay, [md-raised-button].md-button-focus.md-primary .md-button-focus-overlay, [md-fab].md-button-focus.md-primary .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-primary .md-button-focus-overlay {\n  background-color: rgba(33, 150, 243, 0.12); }\n\n[md-button].md-button-focus.md-accent .md-button-focus-overlay, [md-icon-button].md-button-focus.md-accent .md-button-focus-overlay, [md-raised-button].md-button-focus.md-accent .md-button-focus-overlay, [md-fab].md-button-focus.md-accent .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-accent .md-button-focus-overlay {\n  background-color: rgba(255, 171, 64, 0.12); }\n\n[md-button].md-button-focus.md-warn .md-button-focus-overlay, [md-icon-button].md-button-focus.md-warn .md-button-focus-overlay, [md-raised-button].md-button-focus.md-warn .md-button-focus-overlay, [md-fab].md-button-focus.md-warn .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-warn .md-button-focus-overlay {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n[md-button], [md-icon-button] {\n  background: transparent; }\n  [md-button].md-primary, [md-icon-button].md-primary {\n    color: #2196f3; }\n  [md-button].md-accent, [md-icon-button].md-accent {\n    color: #ffab40; }\n  [md-button].md-warn, [md-icon-button].md-warn {\n    color: #f44336; }\n  [md-button].md-primary[disabled], [md-button].md-accent[disabled], [md-button].md-warn[disabled], [md-button][disabled][disabled], [md-icon-button].md-primary[disabled], [md-icon-button].md-accent[disabled], [md-icon-button].md-warn[disabled], [md-icon-button][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  [md-button]:hover.md-primary .md-button-focus-overlay, [md-icon-button]:hover.md-primary .md-button-focus-overlay {\n    background-color: rgba(33, 150, 243, 0.12); }\n  [md-button]:hover.md-accent .md-button-focus-overlay, [md-icon-button]:hover.md-accent .md-button-focus-overlay {\n    background-color: rgba(255, 171, 64, 0.12); }\n  [md-button]:hover.md-warn .md-button-focus-overlay, [md-icon-button]:hover.md-warn .md-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n\n[md-raised-button], [md-fab], [md-mini-fab] {\n  background-color: #fafafa; }\n  [md-raised-button].md-primary, [md-fab].md-primary, [md-mini-fab].md-primary {\n    color: white; }\n  [md-raised-button].md-accent, [md-fab].md-accent, [md-mini-fab].md-accent {\n    color: rgba(0, 0, 0, 0.87); }\n  [md-raised-button].md-warn, [md-fab].md-warn, [md-mini-fab].md-warn {\n    color: white; }\n  [md-raised-button].md-primary[disabled], [md-raised-button].md-accent[disabled], [md-raised-button].md-warn[disabled], [md-raised-button][disabled][disabled], [md-fab].md-primary[disabled], [md-fab].md-accent[disabled], [md-fab].md-warn[disabled], [md-fab][disabled][disabled], [md-mini-fab].md-primary[disabled], [md-mini-fab].md-accent[disabled], [md-mini-fab].md-warn[disabled], [md-mini-fab][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  [md-raised-button].md-primary, [md-fab].md-primary, [md-mini-fab].md-primary {\n    background-color: #2196f3; }\n  [md-raised-button].md-accent, [md-fab].md-accent, [md-mini-fab].md-accent {\n    background-color: #ffab40; }\n  [md-raised-button].md-warn, [md-fab].md-warn, [md-mini-fab].md-warn {\n    background-color: #f44336; }\n  [md-raised-button].md-primary[disabled], [md-raised-button].md-accent[disabled], [md-raised-button].md-warn[disabled], [md-raised-button][disabled][disabled], [md-fab].md-primary[disabled], [md-fab].md-accent[disabled], [md-fab].md-warn[disabled], [md-fab][disabled][disabled], [md-mini-fab].md-primary[disabled], [md-mini-fab].md-accent[disabled], [md-mini-fab].md-warn[disabled], [md-mini-fab][disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n\n[md-fab], [md-mini-fab] {\n  background-color: #ffab40;\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-button-toggle-checked .md-button-toggle-label-content {\n  background-color: #e0e0e0; }\n\n.md-button-toggle-disabled .md-button-toggle-label-content {\n  background-color: rgba(0, 0, 0, 0.38); }\n\nmd-card {\n  background: white;\n  color: black; }\n\nmd-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.md-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.md-checkbox-checkmark {\n  fill: #fafafa; }\n\n.md-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.md-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.md-checkbox-indeterminate.md-primary .md-checkbox-background, .md-checkbox-checked.md-primary .md-checkbox-background {\n  background-color: #2196f3; }\n\n.md-checkbox-indeterminate.md-accent .md-checkbox-background, .md-checkbox-checked.md-accent .md-checkbox-background {\n  background-color: #ff9800; }\n\n.md-checkbox-indeterminate.md-warn .md-checkbox-background, .md-checkbox-checked.md-warn .md-checkbox-background {\n  background-color: #f44336; }\n\n.md-checkbox-disabled.md-checkbox-checked .md-checkbox-background, .md-checkbox-disabled.md-checkbox-indeterminate .md-checkbox-background {\n  background-color: #b0b0b0; }\n\n.md-checkbox-disabled:not(.md-checkbox-checked) .md-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.md-checkbox:not(.md-checkbox-disabled).md-primary .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(33, 150, 243, 0.26); }\n\n.md-checkbox:not(.md-checkbox-disabled).md-accent .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(255, 171, 64, 0.26); }\n\n.md-checkbox:not(.md-checkbox-disabled).md-warn .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.md-chip:not(.md-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-chip.md-chip-selected:not(.md-basic-chip) {\n  background-color: #808080;\n  color: rgba(255, 255, 255, 0.87); }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-primary {\n    background-color: #2196f3;\n    color: white; }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-accent {\n    background-color: #ff9800;\n    color: rgba(0, 0, 0, 0.87); }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-warn {\n    background-color: #f44336;\n    color: white; }\n\nmd-dialog-container {\n  background: white; }\n\nmd-icon.md-primary {\n  color: #2196f3; }\n\nmd-icon.md-accent {\n  color: #ffab40; }\n\nmd-icon.md-warn {\n  color: #f44336; }\n\n.md-input-placeholder {\n  color: rgba(0, 0, 0, 0.38); }\n  .md-input-placeholder.md-focused {\n    color: #2196f3; }\n    .md-input-placeholder.md-focused.md-accent {\n      color: #ffab40; }\n    .md-input-placeholder.md-focused.md-warn {\n      color: #f44336; }\n\ninput.md-input-element:-webkit-autofill + .md-input-placeholder .md-placeholder-required,\n.md-input-placeholder.md-float.md-focused .md-placeholder-required {\n  color: #ffab40; }\n\n.md-input-underline {\n  border-color: rgba(0, 0, 0, 0.12); }\n  .md-input-underline .md-input-ripple {\n    background-color: #2196f3; }\n    .md-input-underline .md-input-ripple.md-accent {\n      background-color: #ffab40; }\n    .md-input-underline .md-input-ripple.md-warn {\n      background-color: #f44336; }\n\nmd-list md-list-item, md-list a[md-list-item], md-nav-list md-list-item, md-nav-list a[md-list-item] {\n  color: black; }\n\nmd-list [md-subheader], md-nav-list [md-subheader] {\n  color: rgba(0, 0, 0, 0.54); }\n\nmd-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\nmd-nav-list .md-list-item:hover, md-nav-list .md-list-item.md-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n\n.md-menu-content {\n  background: white; }\n\n[md-menu-item] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  [md-menu-item][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  [md-menu-item] md-icon {\n    color: rgba(0, 0, 0, 0.54); }\n  [md-menu-item]:hover:not([disabled]), [md-menu-item]:focus:not([disabled]) {\n    background: rgba(0, 0, 0, 0.04); }\n\n.md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#bbdefb%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.md-progress-bar-buffer {\n  background-color: #bbdefb; }\n\n.md-progress-bar-fill::after {\n  background-color: #1e88e5; }\n\nmd-progress-bar.md-accent .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffe0b2%27%2F%3E%3C%2Fsvg%3E\"); }\n\nmd-progress-bar.md-accent .md-progress-bar-buffer {\n  background-color: #ffe0b2; }\n\nmd-progress-bar.md-accent .md-progress-bar-fill::after {\n  background-color: #fb8c00; }\n\nmd-progress-bar.md-warn .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\nmd-progress-bar.md-warn .md-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\nmd-progress-bar.md-warn .md-progress-bar-fill::after {\n  background-color: #e53935; }\n\nmd-progress-spinner path, md-progress-circle path, md-spinner path {\n  stroke: #1e88e5; }\n\nmd-progress-spinner.md-accent path, md-progress-circle.md-accent path, md-spinner.md-accent path {\n  stroke: #fb8c00; }\n\nmd-progress-spinner.md-warn path, md-progress-circle.md-warn path, md-spinner.md-warn path {\n  stroke: #e53935; }\n\n.md-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n  .md-radio-checked .md-radio-outer-circle {\n    border-color: #ffab40; }\n  .md-radio-disabled .md-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.38); }\n\n.md-radio-inner-circle {\n  background-color: #ffab40; }\n  .md-radio-disabled .md-radio-inner-circle {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.md-radio-ripple .md-ripple-foreground {\n  background-color: rgba(255, 171, 64, 0.26); }\n  .md-radio-disabled .md-radio-ripple .md-ripple-foreground {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.md-select-trigger {\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  md-select:focus:not(.md-select-disabled) .md-select-trigger {\n    color: #2196f3;\n    border-bottom: 1px solid #2196f3; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .md-select-trigger {\n    color: #f44336;\n    border-bottom: 1px solid #f44336; }\n\n.md-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n  md-select:focus:not(.md-select-disabled) .md-select-arrow {\n    color: #2196f3; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .md-select-arrow {\n    color: #f44336; }\n\n.md-select-content {\n  background: white; }\n\n.md-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n  .md-select-disabled .md-select-value {\n    color: rgba(0, 0, 0, 0.38); }\n\nmd-option:hover:not(.md-option-disabled), md-option:focus:not(.md-option-disabled) {\n  background: rgba(0, 0, 0, 0.04); }\n\nmd-option.md-selected {\n  background: rgba(0, 0, 0, 0.04);\n  color: #2196f3; }\n\nmd-option.md-option-disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.md-sidenav-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\nmd-sidenav {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  md-sidenav.md-sidenav-push {\n    background-color: white; }\n\n.md-sidenav-backdrop.md-sidenav-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\nmd-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #ff9800; }\n\nmd-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(255, 152, 0, 0.5); }\n\nmd-slide-toggle.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\nmd-slide-toggle.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(255, 152, 0, 0.26); }\n\nmd-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #2196f3; }\n\nmd-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(33, 150, 243, 0.5); }\n\nmd-slide-toggle.md-primary.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\nmd-slide-toggle.md-primary.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(33, 150, 243, 0.26); }\n\nmd-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #f44336; }\n\nmd-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\nmd-slide-toggle.md-warn.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\nmd-slide-toggle.md-warn.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.md-disabled .md-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.md-disabled .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.md-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.md-slider-track {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.md-slider-track-fill {\n  background-color: #ffab40; }\n\n.md-slider-thumb {\n  background-color: #ffab40; }\n\n.md-slider-thumb-label {\n  background-color: #ffab40; }\n\n.md-slider-thumb-label-text {\n  color: rgba(0, 0, 0, 0.87); }\n\n[md-tab-nav-bar],\n.md-tab-header {\n  border-bottom: 1px solid #e0e0e0; }\n\n.md-tab-label:focus {\n  background-color: rgba(187, 222, 251, 0.3); }\n\nmd-ink-bar {\n  background-color: #2196f3; }\n\nmd-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  md-toolbar.md-primary {\n    background: #2196f3;\n    color: white; }\n  md-toolbar.md-accent {\n    background: #ffab40;\n    color: rgba(0, 0, 0, 0.87); }\n  md-toolbar.md-warn {\n    background: #f44336;\n    color: white; }\n\n.md-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\nbody {\n  font-family: \"Trebuchet MS\", helvetica, arial, verdana, sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  overflow: auto;\n  margin: 0;\n  padding: 0; }\n\nh1 {\n  font: 24px \"Trebuchet MS\", helvetica, arial, verdana, sans-serif;\n  font-weight: 600; }\n\nh2 {\n  font: 20px \"Trebuchet MS\", helvetica, arial, verdana, sans-serif;\n  font-weight: 600; }\n\nh3 {\n  font: 18px \"Trebuchet MS\", helvetica, arial, verdana, sans-serif;\n  font-weight: 600; }\n\nh4 {\n  font: 16px \"Trebuchet MS\", helvetica, arial, verdana, sans-serif;\n  font-weight: 600; }\n\nh5 {\n  font: 14px \"Trebuchet MS\", helvetica, arial, verdana, sans-serif;\n  font-weight: 600; }\n\nh6 {\n  font: 12px \"Trebuchet MS\", helvetica, arial, verdana, sans-serif;\n  font-weight: 600; }\n\n.s-f {\n  font-family: \"Trebuchet MS\", helvetica, arial, verdana, sans-serif; }\n\n.s-f1 {\n  font: 24px; }\n\n.s-f2 {\n  font: 20px; }\n\n.s-f3 {\n  font: 18px; }\n\n.s-f4 {\n  font: 16px; }\n\n.s-f5 {\n  font: 14px; }\n\n.s-f6 {\n  font: 12px; }\n\n.s-f-tiny {\n  font-size: 10px; }\n\n.s-f-body {\n  font-size: 12px; }\n\n.s-f-small {\n  font-size: 16px; }\n\n.s-f-medium {\n  font-size: 24px; }\n\n.s-f-large {\n  font-size: 32px; }\n\n.s-bold-500 {\n  font-weight: 500; }\n\n.s-bold-600 {\n  font-weight: 600; }\n\n.s-bold {\n  font-weight: bold; }\n\n.s-c-text {\n  color: #333; }\n\n.s-c-opposite-text {\n  color: #eee; }\n\n.s-c-disable-text {\n  color: gray; }\n\n.s-c-ghost-text {\n  color: #777; }\n\n.s-c-dark-text {\n  color: #333; }\n\n.s-c-light-text {\n  color: #eee; }\n\n.s-c-white {\n  color: #ffffff; }\n\n.s-c-gray {\n  color: #AAAAAA; }\n\n.s-c-primary {\n  color: #E3642B; }\n\n.s-c-info {\n  color: #2eadf5; }\n\n.s-c-error {\n  color: #CE1126; }\n\n.s-c-warning {\n  color: #F2AF00; }\n\n.s-c-good {\n  color: #6EA204; }\n\n.s-bg-main {\n  background-color: #ffffff; }\n\n.s-bg-alt {\n  background-color: whitesmoke; }\n\n.s-bg-opposite {\n  background-color: #32404e; }\n\n.s-bg-accent {\n  background-color: #E3642B; }\n\n.s-bg-white {\n  background-color: #fff; }\n\n.s-bg-gray {\n  background-color: #E2E2E2; }\n\n.s-bg-info {\n  background-color: #2eadf5; }\n\n.s-bg-error {\n  background-color: #CE1126; }\n\n.s-bg-warning {\n  background-color: #F2AF00; }\n\n.s-bg-good {\n  background-color: #6EA204; }\n\n.s-shadow-1 {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n\n.s-shadow-2 {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.s-shadow-3 {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n\n.s-shadow-4 {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n\n.s-shadow-5 {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n\n.s-hidden {\n  display: none; }\n\n.s-ellipses {\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.s-nowrap {\n  white-space: nowrap; }\n\n.s-err-msg {\n  color: #CE1126; }\n\n.s-link {\n  color: #0000ee;\n  cursor: pointer;\n  text-decoration: none; }\n\n.s-link:hover {\n  text-decoration: underline; }\n\n.s-hbox-align-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.s-hbox-align-left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.s-hbox-align-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.s-m-16 {\n  margin: 16px; }\n\n.s-m-0-16-0-0 {\n  margin: 0 16px 0 0; }\n\n.s-m-0-0-0-16 {\n  margin: 0 0 0 16px; }\n\n.s-m-0-16-0-16 {\n  margin: 0 16px; }\n\n.s-m-16-0-16-0 {\n  margin: 16px 0; }\n\n.s-p-16 {\n  padding: 16px; }\n\n.s-p-0-16-0-0 {\n  padding: 0 16px 0 0; }\n\n.s-p-0-0-0-16 {\n  padding: 0 0 0 16px; }\n\n.s-p-0-16-0-16 {\n  padding: 0 16px; }\n\n.s-p-16-0-16-0 {\n  padding: 16px 0; }\n\n.s-m-8 {\n  margin: 8px; }\n\n.s-m-0-8-0-0 {\n  margin: 0 8px 0 0; }\n\n.s-m-0-0-0-8 {\n  margin: 0 0 0 8px; }\n\n.s-m-0-8-0-8 {\n  margin: 0 8px; }\n\n.s-m-8-0-8-0 {\n  margin: 8px 0; }\n\n.s-p-8 {\n  padding: 8px; }\n\n.s-p-0-8-0-0 {\n  padding: 0 8px 0 0; }\n\n.s-p-0-0-0-8 {\n  padding: 0 0 0 8px; }\n\n.s-p-0-8-0-8 {\n  padding: 0 8px; }\n\n.s-p-8-0-8-0 {\n  padding: 8px 0; }\n\n.s-child-items-left-m-16 > button {\n  margin-left: 16px; }\n\n.s-child-items-left-m-16 > div {\n  margin-left: 16px; }\n\n.s-child-items-left-m-16 > span {\n  margin-left: 16px; }\n\n.s-child-items-left-p-16 > button {\n  padding-left: 16px; }\n\n.s-child-items-left-p-16 > div {\n  padding-left: 16px; }\n\n.s-child-items-left-p-16 > span {\n  padding-left: 16px; }\n\n.s-child-items-left-m-8 > button {\n  margin-left: 8px; }\n\n.s-child-items-left-m-8 > div {\n  margin-left: 8px; }\n\n.s-child-items-left-m-8 > span {\n  margin-left: 8px; }\n\n.s-child-items-left-p-8 > button {\n  padding-left: 8px; }\n\n.s-child-items-left-p-8 > div {\n  padding-left: 8px; }\n\n.s-child-items-left-p-8 > span {\n  padding-left: 8px; }\n\nmd-input {\n  font-size: 16px; }\n\nfieldset {\n  border: 0; }\n\n/*\ns-pill{\n  margin:0 7px;\n  color:white;\n}\n.s-pill-wrap{\n    overflow: hidden;\n    display : inline-block;\n    background-color: $sw-color-white;\n    cursor: pointer;\n}\n\n.s-hnav{\n  height:100%;\n  position:relative;\n  .s-hnav-wrap{\n    display:flex;\n    height:100%;\n      .s-nav-item {\n        display:flex;\n        align-items: center;\n        padding :0 5px;\n        .s-nav-label{\n          align-self: flex-end;\n          padding: 10px 5px;\n          cursor: pointer;\n        }\n      }\n  }\n\n  .s-hnav-inkbar{\n    position:absolute;\n    border:1px solid $sw-color-primary;\n    background-color: $sw-color-primary;\n    height:1px;\n    bottom:0;\n    transition: width 0.3s, left 0.3s;\n  }\n}\n\n.s-new-flex-row {\n  flex-flow: row wrap;\n}\n\n //Sidebar Styles\n.s-sidebar {\n  overflow: auto;\n  pointer-events: none;\n  position: fixed;\n  z-index: 99999999;\n  background:$sw-color-soft-white;\n}\n.s-sidebar--left {\n  bottom: 0;\n  left: 0;\n  top: 0;\n}\n.s-sidebar--right {\n  bottom: 0;\n  right: 0;\n  top: 0;\n}\n.s-sidebar--top {\n  left: 0;\n  right: 0;\n  top: 0;\n}\n.s-sidebar--bottom {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.s-sidebar--style {\n  background: #fff;\n  box-shadow: 0 0 2.5em rgba(85, 85, 85, 0.5);\n}\n.s-sidebar__overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n  z-index: 99999998;\n}\n.s-sidebar__overlay--style {\n  background: #000;\n  opacity: 0.75;\n}\n\n\n//Alerts Page\n.s-alerts{\n  box-sizing:border-box;\n  height:100%;\n  width:100%;\n  display:flex;\n  flex-direction: column;\n  flex-wrap:nowrap;\n  justify-content: flex-start;\n  overflow:hidden;\n  \n  .s-alerts-hbar, .s-alerts-fbar{\n    display:flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items:center;\n    justify-content:start;\n    border: 1px solid black;\n    background:#333;\n    color:#fff;\n    height:40px;\n  }\n  .s-alerts-left-icon, .s-alerts-right-icon{\n    margin:5px 10px;\n    overflow:hidden;\n    cursor:pointer;\n    transition: width 0.3s;\n  }\n  .s-alerts-text{\n    flex:1;\n    line-height:40px;\n    overflow:hidden;\n  }\n  .s-alerts-body{\n    display:flex;\n    flex-direction:row;\n    flex:1;\n    position:relative;\n    align-items: stretch;\n  }\n  \n  .s-alerts-page1, .s-alerts-page2{\n    position:absolute;\n    width:100%;\n    padding:5px;\n    border: 1px solid blue;\n    transition: left 0.3s;\n  }\n  \n}\n*/\n", ""]);

// exports


/***/ },

/***/ 852:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }

},[1138]);
//# sourceMappingURL=styles.bundle.map