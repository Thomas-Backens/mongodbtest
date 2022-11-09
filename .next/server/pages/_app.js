(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__);





var html = {
  WebkitFontSmoothing: 'antialiased',
  // Antialiasing.
  MozOsxFontSmoothing: 'grayscale',
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box'
};
var body = function body(theme) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    color: theme.palette.text.primary
  }, theme.typography.body2, {
    backgroundColor: theme.palette.background.default,
    '@media print': {
      // Save printer ink.
      backgroundColor: theme.palette.common.white
    }
  });
};
var styles = function styles(theme) {
  return {
    '@global': {
      html: html,
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      'strong, b': {
        fontWeight: theme.typography.fontWeightBold
      },
      body: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        margin: 0
      }, body(theme), {
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        '&::backdrop': {
          backgroundColor: theme.palette.background.default
        }
      })
    }
  };
};
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

function CssBaseline(props) {
  /* eslint-disable no-unused-vars */
  var _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children,
      classes = props.classes;
  /* eslint-enable no-unused-vars */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
}

 true ? CssBaseline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * You can wrap a node.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
} : 0;

if (true) {
  // eslint-disable-next-line
  CssBaseline['propTypes' + ''] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__.exactProp)(CssBaseline.propTypes);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__.default)(styles, {
  name: 'MuiCssBaseline'
})(CssBaseline));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CssBaseline/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CssBaseline/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CssBaseline__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _CssBaseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/green.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (green);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/orange.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToRgb": () => (/* binding */ hexToRgb),
/* harmony export */   "rgbToHex": () => (/* binding */ rgbToHex),
/* harmony export */   "hslToRgb": () => (/* binding */ hslToRgb),
/* harmony export */   "decomposeColor": () => (/* binding */ decomposeColor),
/* harmony export */   "recomposeColor": () => (/* binding */ recomposeColor),
/* harmony export */   "getContrastRatio": () => (/* binding */ getContrastRatio),
/* harmony export */   "getLuminance": () => (/* binding */ getLuminance),
/* harmony export */   "emphasize": () => (/* binding */ emphasize),
/* harmony export */   "fade": () => (/* binding */ fade),
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "darken": () => (/* binding */ darken),
/* harmony export */   "lighten": () => (/* binding */ lighten)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : 0);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
var warnedOnce = false;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 *
 * @deprecated
 * Use `import { alpha } from '@material-ui/core/styles'` instead.
 */

function fade(color, value) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.', '', "You should use `import { alpha } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return alpha(color, value);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha value is overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0-1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "default": () => (/* binding */ createBreakpoints)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  var warnedOnce = false;

  function width(key) {
    if (true) {
      if (!warnedOnce) {
        warnedOnce = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", 'Use the `theme.breakpoints.values` instead.'].join('\n'));
      }
    }

    return values[key];
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMixins)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.warn(['Material-UI: theme.mixins.gutters() is deprecated.', 'You can use the source of the mixin directly:', "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join('\n'));
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, breakpoints.up('sm'), (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMuiStrictModeTheme)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");


function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _createTheme__WEBPACK_IMPORTED_MODULE_1__.default.apply(void 0, [(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)({
    unstable_strictMode: true
  }, options)].concat(args));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "light": () => (/* binding */ light),
/* harmony export */   "dark": () => (/* binding */ dark),
/* harmony export */   "default": () => (/* binding */ createPalette)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[300],
    main: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[500],
    dark: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[300],
    main: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[500],
    dark: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[300],
    main: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[500],
    dark: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : 0);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });") : 0);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSpacing)
/* harmony export */ });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__);

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.createUnarySpacing)({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createStyles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)(styles);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTheme.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTheme.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMuiTheme": () => (/* binding */ createMuiTheme),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = (0,_createPalette__WEBPACK_IMPORTED_MODULE_3__.default)(paletteInput);
  var breakpoints = (0,_createBreakpoints__WEBPACK_IMPORTED_MODULE_4__.default)(breakpointsInput);
  var spacing = (0,_createSpacing__WEBPACK_IMPORTED_MODULE_5__.default)(spacingInput);
  var muiTheme = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0,_createMixins__WEBPACK_IMPORTED_MODULE_6__.default)(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__.default,
    typography: (0,_createTypography__WEBPACK_IMPORTED_MODULE_8__.default)(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_9__.default,
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__.default,
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__.default
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "&$".concat(key), child)
            }, null, 2), '', 'https://mui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

var warnedOnce = false;
function createMuiTheme() {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: the createMuiTheme function was renamed to createTheme.', '', "You should use `import { createTheme } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return createTheme.apply(void 0, arguments);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTypography)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var warnedOnce = false;

function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce) {
      console.warn(['Material-UI: The `theme.typography.round` helper is deprecated.', 'Head to https://mui.com/r/migration-v4/#theme for a migration path.'].join('\n'));
      warnedOnce = true;
    }
  }

  return round(value);
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/cssUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/cssUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnitless": () => (/* binding */ isUnitless),
/* harmony export */   "getUnit": () => (/* binding */ getUnit),
/* harmony export */   "toUnitless": () => (/* binding */ toUnitless),
/* harmony export */   "convertLength": () => (/* binding */ convertLength),
/* harmony export */   "alignProperty": () => (/* binding */ alignProperty),
/* harmony export */   "fontGrid": () => (/* binding */ fontGrid),
/* harmony export */   "responsiveProperty": () => (/* binding */ responsiveProperty)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return function (length, toUnit) {
    var fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    var pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    } // Convert length in pixels to the output unit


    var outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size,
      grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight,
      pixels = _ref2.pixels,
      htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$unit = _ref3.unit,
      unit = _ref3$unit === void 0 ? 'rem' : _ref3$unit,
      _ref3$breakpoints = _ref3.breakpoints,
      breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints,
      _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? null : _ref3$transform;

  var output = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(min).concat(unit));

  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function (breakpoint) {
    var value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output["@media (min-width:".concat(breakpoint, "px)")] = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(Math.round(value * 10000) / 10000).concat(unit));
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");

var defaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTheme": () => (/* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "createMuiTheme": () => (/* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_1__.createMuiTheme),
/* harmony export */   "unstable_createMuiStrictModeTheme": () => (/* reexport safe */ _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "createStyles": () => (/* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "makeStyles": () => (/* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "responsiveFontSizes": () => (/* reexport safe */ _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "styled": () => (/* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "useTheme": () => (/* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "withStyles": () => (/* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "withTheme": () => (/* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "createGenerateClassName": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.createGenerateClassName),
/* harmony export */   "jssPreset": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.jssPreset),
/* harmony export */   "ServerStyleSheets": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ServerStyleSheets),
/* harmony export */   "StylesProvider": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.StylesProvider),
/* harmony export */   "MuiThemeProvider": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider),
/* harmony export */   "ThemeProvider": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider)
/* harmony export */ });
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _colorManipulator__WEBPACK_IMPORTED_MODULE_0__) if(["default","createTheme","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _colorManipulator__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js");
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _transitions__WEBPACK_IMPORTED_MODULE_7__) if(["default","createTheme","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _transitions__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/esm/styles/withTheme.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__);

 // eslint-disable-next-line camelcase












/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/makeStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/makeStyles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ responsiveFontSizes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@material-ui/core/esm/styles/cssUtils.js");



function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints,
      breakpoints = _options$breakpoints === void 0 ? ['sm', 'md', 'lg'] : _options$breakpoints,
      _options$disableAlign = options.disableAlign,
      disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign,
      _options$factor = options.factor,
      factor = _options$factor === void 0 ? 2 : _options$factor,
      _options$variants = options.variants,
      variants = _options$variants === void 0 ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'] : _options$variants;

  var theme = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, themeInput);

  theme.typography = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, theme.typography);
  var typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  var convert = (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.convertLength)(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function (x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function (variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.isUnitless)(lineHeight) && !disableAlign) {
      throw new Error( true ? "Material-UI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead." : 0);
    }

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.isUnitless)(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    var transform = null;

    if (!disableAlign) {
      transform = function transform(value) {
        return (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.alignProperty)({
          size: value,
          grid: (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.fontGrid)({
            pixels: 4,
            lineHeight: lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }

    typography[variant] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, style, (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.responsiveProperty)({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform: transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shape = {
  borderRadius: 4
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/styled.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/styled.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




var styled = function styled(Component) {
  var componentCreator = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(Component);
  return function (style, options) {
    return componentCreator(style, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
    }, options));
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easing": () => (/* binding */ easing),
/* harmony export */   "duration": () => (/* binding */ duration),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1___default().useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withTheme.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");


var withTheme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.withThemeCreator)({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__.default
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zIndex);

/***/ }),

/***/ "./src/Utils/fetcher.js":
/*!******************************!*\
  !*** ./src/Utils/fetcher.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetcher = (...args) => fetch(...args).then(async r => {
  if (r.ok) return r.json();
  return [];
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.js");
/* harmony import */ var _Utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utils/fetcher */ "./src/Utils/fetcher.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Dan\\Desktop\\React Projects\\mongodbtest\\src\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("title", {
        children: "MongoDB Test"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.ThemeProvider, {
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_5__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_4__.SWRConfig, {
        value: {
          refreshInterval: 5000,
          fetcher: _Utils_fetcher__WEBPACK_IMPORTED_MODULE_6__.default
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType.isRequired),
  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
 // declare module "@material-ui/core/styles/createPalette" {
//   interface Palette {
//     surface: {
//       white: string;
//       semiWhite: string;
//       black: string;
//       lightGrey: string;
//     };
//   }
//   interface PaletteOptions {
//     surface?: {
//       white: string;
//       semiWhite: string;
//       black: string;
//       lightGrey: string;
//     };
//   }
// }
// declare module "@material-ui/core/styles/createTypography" {
//   interface TypographyOptions {
//     bodyXSmall: TypographyStyle;
//   }
//   interface TypographyOptions {
//     bodyXXSmall: TypographyStyle;
//   }
//   interface Typography {
//     bodyXSmall: TypographyOptions;
//   }
//   interface Typography {
//     bodyXXSmall: TypographyOptions;
//   }
// }

const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  palette: {
    primary: {
      main: "#3AD076"
    },
    secondary: {
      main: "#F85050"
    },
    surface: {
      white: "#FFFFFF",
      semiWhite: "#FAFAFA",
      black: "#393939",
      lightGrey: "#6A6A6A"
    },
    background: {
      default: "#2A2A2A"
    }
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "48.83px"
    },
    h2: {
      fontSize: "39.06px"
    },
    h3: {
      fontSize: "31.25px"
    },
    h4: {
      fontSize: "25px"
    },
    h5: {
      fontSize: "22px"
    },
    h6: {
      fontSize: "18px"
    },
    body1: {
      fontSize: "16px"
    },
    bodyXSmall: {
      fontSize: "13px"
    },
    bodyXXSmall: {
      fontSize: "10px"
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/system");

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("swr");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2QkFBNkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Dc3NCYXNlbGluZS9Dc3NCYXNlbGluZS5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2JsdWUuanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ncmVlbi5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2dyZXkuanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9pbmRpZ28uanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9vcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9waW5rLmpzIiwid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvcmVkLmpzIiwid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzLmpzIiwid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlTWl4aW5zLmpzIiwid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lLmpzIiwid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlUGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVNwYWNpbmcuanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVUaGVtZS5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVR5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jc3NVdGlscy5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2RlZmF1bHRUaGVtZS5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvbWFrZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3Jlc3BvbnNpdmVGb250U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zaGFkb3dzLmpzIiwid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy90cmFuc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3VzZVRoZW1lLmpzIiwid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvd2l0aFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3dpdGhUaGVtZS5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3pJbmRleC5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL3NyYy9VdGlscy9mZXRjaGVyLmpzIiwid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vc3JjL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vc3JjL3N0eWxlcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL21vbmdvZGJ0ZXN0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiIiwid2VicGFjazovL21vbmdvZGJ0ZXN0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL21vbmdvZGJ0ZXN0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC9leHRlcm5hbCBcInN3clwiIiwid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL21vbmdvZGJ0ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vbW9uZ29kYnRlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgeyBleGFjdFByb3AgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuZXhwb3J0IHZhciBodG1sID0ge1xuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICAvLyBBbnRpYWxpYXNpbmcuXG4gIE1vek9zeEZvbnRTbW9vdGhpbmc6ICdncmF5c2NhbGUnLFxuICAvLyBBbnRpYWxpYXNpbmcuXG4gIC8vIENoYW5nZSBmcm9tIGBib3gtc2l6aW5nOiBjb250ZW50LWJveGAgc28gdGhhdCBgd2lkdGhgXG4gIC8vIGlzIG5vdCBhZmZlY3RlZCBieSBgcGFkZGluZ2Agb3IgYGJvcmRlcmAuXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG59O1xuZXhwb3J0IHZhciBib2R5ID0gZnVuY3Rpb24gYm9keSh0aGVtZSkge1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxuICB9LCB0aGVtZS50eXBvZ3JhcGh5LmJvZHkyLCB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICAnQG1lZGlhIHByaW50Jzoge1xuICAgICAgLy8gU2F2ZSBwcmludGVyIGluay5cbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgJ0BnbG9iYWwnOiB7XG4gICAgICBodG1sOiBodG1sLFxuICAgICAgJyosICo6OmJlZm9yZSwgKjo6YWZ0ZXInOiB7XG4gICAgICAgIGJveFNpemluZzogJ2luaGVyaXQnXG4gICAgICB9LFxuICAgICAgJ3N0cm9uZywgYic6IHtcbiAgICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZFxuICAgICAgfSxcbiAgICAgIGJvZHk6IF9leHRlbmRzKHtcbiAgICAgICAgbWFyZ2luOiAwXG4gICAgICB9LCBib2R5KHRoZW1lKSwge1xuICAgICAgICAvLyBBZGQgc3VwcG9ydCBmb3IgZG9jdW1lbnQuYm9keS5yZXF1ZXN0RnVsbFNjcmVlbigpLlxuICAgICAgICAvLyBPdGhlciBlbGVtZW50cywgaWYgYmFja2dyb3VuZCB0cmFuc3BhcmVudCwgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgICcmOjpiYWNrZHJvcCc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogS2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi5cbiAqL1xuXG5mdW5jdGlvbiBDc3NCYXNlbGluZShwcm9wcykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICB2YXIgX3Byb3BzJGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjaGlsZHJlbiA9IF9wcm9wcyRjaGlsZHJlbiA9PT0gdm9pZCAwID8gbnVsbCA6IF9wcm9wcyRjaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbik7XG59XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENzc0Jhc2VsaW5lLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gd3JhcCBhIG5vZGUuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIENzc0Jhc2VsaW5lWydwcm9wVHlwZXMnICsgJyddID0gZXhhY3RQcm9wKENzc0Jhc2VsaW5lLnByb3BUeXBlcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlDc3NCYXNlbGluZSdcbn0pKENzc0Jhc2VsaW5lKTsiLCJ2YXIgYmx1ZSA9IHtcbiAgNTA6ICcjZTNmMmZkJyxcbiAgMTAwOiAnI2JiZGVmYicsXG4gIDIwMDogJyM5MGNhZjknLFxuICAzMDA6ICcjNjRiNWY2JyxcbiAgNDAwOiAnIzQyYTVmNScsXG4gIDUwMDogJyMyMTk2ZjMnLFxuICA2MDA6ICcjMWU4OGU1JyxcbiAgNzAwOiAnIzE5NzZkMicsXG4gIDgwMDogJyMxNTY1YzAnLFxuICA5MDA6ICcjMGQ0N2ExJyxcbiAgQTEwMDogJyM4MmIxZmYnLFxuICBBMjAwOiAnIzQ0OGFmZicsXG4gIEE0MDA6ICcjMjk3OWZmJyxcbiAgQTcwMDogJyMyOTYyZmYnXG59O1xuZXhwb3J0IGRlZmF1bHQgYmx1ZTsiLCJ2YXIgY29tbW9uID0ge1xuICBibGFjazogJyMwMDAnLFxuICB3aGl0ZTogJyNmZmYnXG59O1xuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsInZhciBncmVlbiA9IHtcbiAgNTA6ICcjZThmNWU5JyxcbiAgMTAwOiAnI2M4ZTZjOScsXG4gIDIwMDogJyNhNWQ2YTcnLFxuICAzMDA6ICcjODFjNzg0JyxcbiAgNDAwOiAnIzY2YmI2YScsXG4gIDUwMDogJyM0Y2FmNTAnLFxuICA2MDA6ICcjNDNhMDQ3JyxcbiAgNzAwOiAnIzM4OGUzYycsXG4gIDgwMDogJyMyZTdkMzInLFxuICA5MDA6ICcjMWI1ZTIwJyxcbiAgQTEwMDogJyNiOWY2Y2EnLFxuICBBMjAwOiAnIzY5ZjBhZScsXG4gIEE0MDA6ICcjMDBlNjc2JyxcbiAgQTcwMDogJyMwMGM4NTMnXG59O1xuZXhwb3J0IGRlZmF1bHQgZ3JlZW47IiwidmFyIGdyZXkgPSB7XG4gIDUwOiAnI2ZhZmFmYScsXG4gIDEwMDogJyNmNWY1ZjUnLFxuICAyMDA6ICcjZWVlZWVlJyxcbiAgMzAwOiAnI2UwZTBlMCcsXG4gIDQwMDogJyNiZGJkYmQnLFxuICA1MDA6ICcjOWU5ZTllJyxcbiAgNjAwOiAnIzc1NzU3NScsXG4gIDcwMDogJyM2MTYxNjEnLFxuICA4MDA6ICcjNDI0MjQyJyxcbiAgOTAwOiAnIzIxMjEyMScsXG4gIEExMDA6ICcjZDVkNWQ1JyxcbiAgQTIwMDogJyNhYWFhYWEnLFxuICBBNDAwOiAnIzMwMzAzMCcsXG4gIEE3MDA6ICcjNjE2MTYxJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGdyZXk7IiwidmFyIGluZGlnbyA9IHtcbiAgNTA6ICcjZThlYWY2JyxcbiAgMTAwOiAnI2M1Y2FlOScsXG4gIDIwMDogJyM5ZmE4ZGEnLFxuICAzMDA6ICcjNzk4NmNiJyxcbiAgNDAwOiAnIzVjNmJjMCcsXG4gIDUwMDogJyMzZjUxYjUnLFxuICA2MDA6ICcjMzk0OWFiJyxcbiAgNzAwOiAnIzMwM2Y5ZicsXG4gIDgwMDogJyMyODM1OTMnLFxuICA5MDA6ICcjMWEyMzdlJyxcbiAgQTEwMDogJyM4YzllZmYnLFxuICBBMjAwOiAnIzUzNmRmZScsXG4gIEE0MDA6ICcjM2Q1YWZlJyxcbiAgQTcwMDogJyMzMDRmZmUnXG59O1xuZXhwb3J0IGRlZmF1bHQgaW5kaWdvOyIsInZhciBvcmFuZ2UgPSB7XG4gIDUwOiAnI2ZmZjNlMCcsXG4gIDEwMDogJyNmZmUwYjInLFxuICAyMDA6ICcjZmZjYzgwJyxcbiAgMzAwOiAnI2ZmYjc0ZCcsXG4gIDQwMDogJyNmZmE3MjYnLFxuICA1MDA6ICcjZmY5ODAwJyxcbiAgNjAwOiAnI2ZiOGMwMCcsXG4gIDcwMDogJyNmNTdjMDAnLFxuICA4MDA6ICcjZWY2YzAwJyxcbiAgOTAwOiAnI2U2NTEwMCcsXG4gIEExMDA6ICcjZmZkMTgwJyxcbiAgQTIwMDogJyNmZmFiNDAnLFxuICBBNDAwOiAnI2ZmOTEwMCcsXG4gIEE3MDA6ICcjZmY2ZDAwJ1xufTtcbmV4cG9ydCBkZWZhdWx0IG9yYW5nZTsiLCJ2YXIgcGluayA9IHtcbiAgNTA6ICcjZmNlNGVjJyxcbiAgMTAwOiAnI2Y4YmJkMCcsXG4gIDIwMDogJyNmNDhmYjEnLFxuICAzMDA6ICcjZjA2MjkyJyxcbiAgNDAwOiAnI2VjNDA3YScsXG4gIDUwMDogJyNlOTFlNjMnLFxuICA2MDA6ICcjZDgxYjYwJyxcbiAgNzAwOiAnI2MyMTg1YicsXG4gIDgwMDogJyNhZDE0NTcnLFxuICA5MDA6ICcjODgwZTRmJyxcbiAgQTEwMDogJyNmZjgwYWInLFxuICBBMjAwOiAnI2ZmNDA4MScsXG4gIEE0MDA6ICcjZjUwMDU3JyxcbiAgQTcwMDogJyNjNTExNjInXG59O1xuZXhwb3J0IGRlZmF1bHQgcGluazsiLCJ2YXIgcmVkID0ge1xuICA1MDogJyNmZmViZWUnLFxuICAxMDA6ICcjZmZjZGQyJyxcbiAgMjAwOiAnI2VmOWE5YScsXG4gIDMwMDogJyNlNTczNzMnLFxuICA0MDA6ICcjZWY1MzUwJyxcbiAgNTAwOiAnI2Y0NDMzNicsXG4gIDYwMDogJyNlNTM5MzUnLFxuICA3MDA6ICcjZDMyZjJmJyxcbiAgODAwOiAnI2M2MjgyOCcsXG4gIDkwMDogJyNiNzFjMWMnLFxuICBBMTAwOiAnI2ZmOGE4MCcsXG4gIEEyMDA6ICcjZmY1MjUyJyxcbiAgQTQwMDogJyNmZjE3NDQnLFxuICBBNzAwOiAnI2Q1MDAwMCdcbn07XG5leHBvcnQgZGVmYXVsdCByZWQ7IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbi8qKlxuICogUmV0dXJucyBhIG51bWJlciB3aG9zZSB2YWx1ZSBpcyBsaW1pdGVkIHRvIHRoZSBnaXZlbiByYW5nZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNsYW1wZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gVGhlIGxvd2VyIGJvdW5kYXJ5IG9mIHRoZSBvdXRwdXQgcmFuZ2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggVGhlIHVwcGVyIGJvdW5kYXJ5IG9mIHRoZSBvdXRwdXQgcmFuZ2VcbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgbnVtYmVyIGluIHRoZSByYW5nZSBbbWluLCBtYXhdXG4gKi9cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlKSB7XG4gIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDE7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodmFsdWUgPCBtaW4gfHwgdmFsdWUgPiBtYXgpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVGhlIHZhbHVlIHByb3ZpZGVkIFwiLmNvbmNhdCh2YWx1ZSwgXCIgaXMgb3V0IG9mIHJhbmdlIFtcIikuY29uY2F0KG1pbiwgXCIsIFwiKS5jb25jYXQobWF4LCBcIl0uXCIpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCB2YWx1ZSksIG1heCk7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3IgZnJvbSBDU1MgaGV4IGZvcm1hdCB0byBDU1MgcmdiIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBIZXggY29sb3IsIGkuZS4gI25ubiBvciAjbm5ubm5uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyByZ2IgY29sb3Igc3RyaW5nXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoY29sb3IpIHtcbiAgY29sb3IgPSBjb2xvci5zdWJzdHIoMSk7XG4gIHZhciByZSA9IG5ldyBSZWdFeHAoXCIuezEsXCIuY29uY2F0KGNvbG9yLmxlbmd0aCA+PSA2ID8gMiA6IDEsIFwifVwiKSwgJ2cnKTtcbiAgdmFyIGNvbG9ycyA9IGNvbG9yLm1hdGNoKHJlKTtcblxuICBpZiAoY29sb3JzICYmIGNvbG9yc1swXS5sZW5ndGggPT09IDEpIHtcbiAgICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gbiArIG47XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29sb3JzID8gXCJyZ2JcIi5jb25jYXQoY29sb3JzLmxlbmd0aCA9PT0gNCA/ICdhJyA6ICcnLCBcIihcIikuY29uY2F0KGNvbG9ycy5tYXAoZnVuY3Rpb24gKG4sIGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4IDwgMyA/IHBhcnNlSW50KG4sIDE2KSA6IE1hdGgucm91bmQocGFyc2VJbnQobiwgMTYpIC8gMjU1ICogMTAwMCkgLyAxMDAwO1xuICB9KS5qb2luKCcsICcpLCBcIilcIikgOiAnJztcbn1cblxuZnVuY3Rpb24gaW50VG9IZXgoaW50KSB7XG4gIHZhciBoZXggPSBpbnQudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiLmNvbmNhdChoZXgpIDogaGV4O1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gQ1NTIHJnYiBmb3JtYXQgdG8gQ1NTIGhleCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gUkdCIGNvbG9yLCBpLmUuIHJnYihuLCBuLCBuKVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgcmdiIGNvbG9yIHN0cmluZywgaS5lLiAjbm5ubm5uXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9IZXgoY29sb3IpIHtcbiAgLy8gSWRlbXBvdGVudFxuICBpZiAoY29sb3IuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgdmFyIF9kZWNvbXBvc2VDb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKSxcbiAgICAgIHZhbHVlcyA9IF9kZWNvbXBvc2VDb2xvci52YWx1ZXM7XG5cbiAgcmV0dXJuIFwiI1wiLmNvbmNhdCh2YWx1ZXMubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIGludFRvSGV4KG4pO1xuICB9KS5qb2luKCcnKSk7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3IgZnJvbSBoc2wgZm9ybWF0IHRvIHJnYiBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gSFNMIGNvbG9yIHZhbHVlc1xuICogQHJldHVybnMge3N0cmluZ30gcmdiIGNvbG9yIHZhbHVlc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoc2xUb1JnYihjb2xvcikge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFyIF9jb2xvciA9IGNvbG9yLFxuICAgICAgdmFsdWVzID0gX2NvbG9yLnZhbHVlcztcbiAgdmFyIGggPSB2YWx1ZXNbMF07XG4gIHZhciBzID0gdmFsdWVzWzFdIC8gMTAwO1xuICB2YXIgbCA9IHZhbHVlc1syXSAvIDEwMDtcbiAgdmFyIGEgPSBzICogTWF0aC5taW4obCwgMSAtIGwpO1xuXG4gIHZhciBmID0gZnVuY3Rpb24gZihuKSB7XG4gICAgdmFyIGsgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IChuICsgaCAvIDMwKSAlIDEyO1xuICAgIHJldHVybiBsIC0gYSAqIE1hdGgubWF4KE1hdGgubWluKGsgLSAzLCA5IC0gaywgMSksIC0xKTtcbiAgfTtcblxuICB2YXIgdHlwZSA9ICdyZ2InO1xuICB2YXIgcmdiID0gW01hdGgucm91bmQoZigwKSAqIDI1NSksIE1hdGgucm91bmQoZig4KSAqIDI1NSksIE1hdGgucm91bmQoZig0KSAqIDI1NSldO1xuXG4gIGlmIChjb2xvci50eXBlID09PSAnaHNsYScpIHtcbiAgICB0eXBlICs9ICdhJztcbiAgICByZ2IucHVzaCh2YWx1ZXNbM10pO1xuICB9XG5cbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHZhbHVlczogcmdiXG4gIH0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSB0eXBlIGFuZCB2YWx1ZXMgb2YgYSBjb2xvci5cbiAqXG4gKiBOb3RlOiBEb2VzIG5vdCBzdXBwb3J0IHJnYiAlIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7b2JqZWN0fSAtIEEgTVVJIGNvbG9yIG9iamVjdDoge3R5cGU6IHN0cmluZywgdmFsdWVzOiBudW1iZXJbXX1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVjb21wb3NlQ29sb3IoY29sb3IpIHtcbiAgLy8gSWRlbXBvdGVudFxuICBpZiAoY29sb3IudHlwZSkge1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIGlmIChjb2xvci5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIHJldHVybiBkZWNvbXBvc2VDb2xvcihoZXhUb1JnYihjb2xvcikpO1xuICB9XG5cbiAgdmFyIG1hcmtlciA9IGNvbG9yLmluZGV4T2YoJygnKTtcbiAgdmFyIHR5cGUgPSBjb2xvci5zdWJzdHJpbmcoMCwgbWFya2VyKTtcblxuICBpZiAoWydyZ2InLCAncmdiYScsICdoc2wnLCAnaHNsYSddLmluZGV4T2YodHlwZSkgPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFVuc3VwcG9ydGVkIGBcIi5jb25jYXQoY29sb3IsIFwiYCBjb2xvci5cXG5XZSBzdXBwb3J0IHRoZSBmb2xsb3dpbmcgZm9ybWF0czogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKS5cIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDMsIGNvbG9yKSk7XG4gIH1cblxuICB2YXIgdmFsdWVzID0gY29sb3Iuc3Vic3RyaW5nKG1hcmtlciArIDEsIGNvbG9yLmxlbmd0aCAtIDEpLnNwbGl0KCcsJyk7XG4gIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHZhbHVlczogdmFsdWVzXG4gIH07XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3Igb2JqZWN0IHdpdGggdHlwZSBhbmQgdmFsdWVzIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb2xvciAtIERlY29tcG9zZWQgY29sb3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci50eXBlIC0gT25lIG9mOiAncmdiJywgJ3JnYmEnLCAnaHNsJywgJ2hzbGEnXG4gKiBAcGFyYW0ge2FycmF5fSBjb2xvci52YWx1ZXMgLSBbbixuLG5dIG9yIFtuLG4sbixuXVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29tcG9zZUNvbG9yKGNvbG9yKSB7XG4gIHZhciB0eXBlID0gY29sb3IudHlwZTtcbiAgdmFyIHZhbHVlcyA9IGNvbG9yLnZhbHVlcztcblxuICBpZiAodHlwZS5pbmRleE9mKCdyZ2InKSAhPT0gLTEpIHtcbiAgICAvLyBPbmx5IGNvbnZlcnQgdGhlIGZpcnN0IDMgdmFsdWVzIHRvIGludCAoaS5lLiBub3QgYWxwaGEpXG4gICAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAobiwgaSkge1xuICAgICAgcmV0dXJuIGkgPCAzID8gcGFyc2VJbnQobiwgMTApIDogbjtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2hzbCcpICE9PSAtMSkge1xuICAgIHZhbHVlc1sxXSA9IFwiXCIuY29uY2F0KHZhbHVlc1sxXSwgXCIlXCIpO1xuICAgIHZhbHVlc1syXSA9IFwiXCIuY29uY2F0KHZhbHVlc1syXSwgXCIlXCIpO1xuICB9XG5cbiAgcmV0dXJuIFwiXCIuY29uY2F0KHR5cGUsIFwiKFwiKS5jb25jYXQodmFsdWVzLmpvaW4oJywgJyksIFwiKVwiKTtcbn1cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgY29udHJhc3QgcmF0aW8gYmV0d2VlbiB0d28gY29sb3JzLlxuICpcbiAqIEZvcm11bGE6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAtVEVDSFMvRzE3Lmh0bWwjRzE3LXRlc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcmVncm91bmQgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFja2dyb3VuZCAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgY29udHJhc3QgcmF0aW8gdmFsdWUgaW4gdGhlIHJhbmdlIDAgLSAyMS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJhc3RSYXRpbyhmb3JlZ3JvdW5kLCBiYWNrZ3JvdW5kKSB7XG4gIHZhciBsdW1BID0gZ2V0THVtaW5hbmNlKGZvcmVncm91bmQpO1xuICB2YXIgbHVtQiA9IGdldEx1bWluYW5jZShiYWNrZ3JvdW5kKTtcbiAgcmV0dXJuIChNYXRoLm1heChsdW1BLCBsdW1CKSArIDAuMDUpIC8gKE1hdGgubWluKGx1bUEsIGx1bUIpICsgMC4wNSk7XG59XG4vKipcbiAqIFRoZSByZWxhdGl2ZSBicmlnaHRuZXNzIG9mIGFueSBwb2ludCBpbiBhIGNvbG9yIHNwYWNlLFxuICogbm9ybWFsaXplZCB0byAwIGZvciBkYXJrZXN0IGJsYWNrIGFuZCAxIGZvciBsaWdodGVzdCB3aGl0ZS5cbiAqXG4gKiBGb3JtdWxhOiBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLVRFQ0hTL0cxNy5odG1sI0cxNy10ZXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZWxhdGl2ZSBicmlnaHRuZXNzIG9mIHRoZSBjb2xvciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0THVtaW5hbmNlKGNvbG9yKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YXIgcmdiID0gY29sb3IudHlwZSA9PT0gJ2hzbCcgPyBkZWNvbXBvc2VDb2xvcihoc2xUb1JnYihjb2xvcikpLnZhbHVlcyA6IGNvbG9yLnZhbHVlcztcbiAgcmdiID0gcmdiLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFsIC89IDI1NTsgLy8gbm9ybWFsaXplZFxuXG4gICAgcmV0dXJuIHZhbCA8PSAwLjAzOTI4ID8gdmFsIC8gMTIuOTIgOiBNYXRoLnBvdygodmFsICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gIH0pOyAvLyBUcnVuY2F0ZSBhdCAzIGRpZ2l0c1xuXG4gIHJldHVybiBOdW1iZXIoKDAuMjEyNiAqIHJnYlswXSArIDAuNzE1MiAqIHJnYlsxXSArIDAuMDcyMiAqIHJnYlsyXSkudG9GaXhlZCgzKSk7XG59XG4vKipcbiAqIERhcmtlbiBvciBsaWdodGVuIGEgY29sb3IsIGRlcGVuZGluZyBvbiBpdHMgbHVtaW5hbmNlLlxuICogTGlnaHQgY29sb3JzIGFyZSBkYXJrZW5lZCwgZGFyayBjb2xvcnMgYXJlIGxpZ2h0ZW5lZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQ9MC4xNSAtIG11bHRpcGxpZXIgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbXBoYXNpemUoY29sb3IpIHtcbiAgdmFyIGNvZWZmaWNpZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwLjE1O1xuICByZXR1cm4gZ2V0THVtaW5hbmNlKGNvbG9yKSA+IDAuNSA/IGRhcmtlbihjb2xvciwgY29lZmZpY2llbnQpIDogbGlnaHRlbihjb2xvciwgY29lZmZpY2llbnQpO1xufVxudmFyIHdhcm5lZE9uY2UgPSBmYWxzZTtcbi8qKlxuICogU2V0IHRoZSBhYnNvbHV0ZSB0cmFuc3BhcmVuY3kgb2YgYSBjb2xvci5cbiAqIEFueSBleGlzdGluZyBhbHBoYSB2YWx1ZXMgYXJlIG92ZXJ3cml0dGVuLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIHNldCB0aGUgYWxwaGEgY2hhbm5lbCB0byBpbiB0aGUgcmFuZ2UgMCAtMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogVXNlIGBpbXBvcnQgeyBhbHBoYSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydgIGluc3RlYWQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGUoY29sb3IsIHZhbHVlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIGBmYWRlYCBjb2xvciB1dGlsaXR5IHdhcyByZW5hbWVkIHRvIGBhbHBoYWAgdG8gYmV0dGVyIGRlc2NyaWJlIGl0cyBmdW5jdGlvbmFsaXR5LicsICcnLCBcIllvdSBzaG91bGQgdXNlIGBpbXBvcnQgeyBhbHBoYSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydgXCJdLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWxwaGEoY29sb3IsIHZhbHVlKTtcbn1cbi8qKlxuICogU2V0IHRoZSBhYnNvbHV0ZSB0cmFuc3BhcmVuY3kgb2YgYSBjb2xvci5cbiAqIEFueSBleGlzdGluZyBhbHBoYSB2YWx1ZSBpcyBvdmVyd3JpdHRlbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSB2YWx1ZSB0byBzZXQgdGhlIGFscGhhIGNoYW5uZWwgdG8gaW4gdGhlIHJhbmdlIDAtMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWxwaGEoY29sb3IsIHZhbHVlKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YWx1ZSA9IGNsYW1wKHZhbHVlKTtcblxuICBpZiAoY29sb3IudHlwZSA9PT0gJ3JnYicgfHwgY29sb3IudHlwZSA9PT0gJ2hzbCcpIHtcbiAgICBjb2xvci50eXBlICs9ICdhJztcbiAgfVxuXG4gIGNvbG9yLnZhbHVlc1szXSA9IHZhbHVlO1xuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufVxuLyoqXG4gKiBEYXJrZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRhcmtlbihjb2xvciwgY29lZmZpY2llbnQpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIGNvZWZmaWNpZW50ID0gY2xhbXAoY29lZmZpY2llbnQpO1xuXG4gIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ2hzbCcpICE9PSAtMSkge1xuICAgIGNvbG9yLnZhbHVlc1syXSAqPSAxIC0gY29lZmZpY2llbnQ7XG4gIH0gZWxzZSBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdyZ2InKSAhPT0gLTEpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgY29sb3IudmFsdWVzW2ldICo9IDEgLSBjb2VmZmljaWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufVxuLyoqXG4gKiBMaWdodGVucyBhIGNvbG9yLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudCAtIG11bHRpcGxpZXIgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsaWdodGVuKGNvbG9yLCBjb2VmZmljaWVudCkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgY29lZmZpY2llbnQgPSBjbGFtcChjb2VmZmljaWVudCk7XG5cbiAgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgY29sb3IudmFsdWVzWzJdICs9ICgxMDAgLSBjb2xvci52YWx1ZXNbMl0pICogY29lZmZpY2llbnQ7XG4gIH0gZWxzZSBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdyZ2InKSAhPT0gLTEpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgY29sb3IudmFsdWVzW2ldICs9ICgyNTUgLSBjb2xvci52YWx1ZXNbaV0pICogY29lZmZpY2llbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKGNvbG9yKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG4vLyBTb3J0ZWQgQVNDIGJ5IHNpemUuIFRoYXQncyBpbXBvcnRhbnQuXG4vLyBJdCBjYW4ndCBiZSBjb25maWd1cmVkIGFzIGl0J3MgdXNlZCBzdGF0aWNhbGx5IGZvciBwcm9wVHlwZXMuXG5leHBvcnQgdmFyIGtleXMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ107IC8vIEtlZXAgaW4gbWluZCB0aGF0IEBtZWRpYSBpcyBpbmNsdXNpdmUgYnkgdGhlIENTUyBzcGVjaWZpY2F0aW9uLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCcmVha3BvaW50cyhicmVha3BvaW50cykge1xuICB2YXIgX2JyZWFrcG9pbnRzJHZhbHVlcyA9IGJyZWFrcG9pbnRzLnZhbHVlcyxcbiAgICAgIHZhbHVlcyA9IF9icmVha3BvaW50cyR2YWx1ZXMgPT09IHZvaWQgMCA/IHtcbiAgICB4czogMCxcbiAgICBzbTogNjAwLFxuICAgIG1kOiA5NjAsXG4gICAgbGc6IDEyODAsXG4gICAgeGw6IDE5MjBcbiAgfSA6IF9icmVha3BvaW50cyR2YWx1ZXMsXG4gICAgICBfYnJlYWtwb2ludHMkdW5pdCA9IGJyZWFrcG9pbnRzLnVuaXQsXG4gICAgICB1bml0ID0gX2JyZWFrcG9pbnRzJHVuaXQgPT09IHZvaWQgMCA/ICdweCcgOiBfYnJlYWtwb2ludHMkdW5pdCxcbiAgICAgIF9icmVha3BvaW50cyRzdGVwID0gYnJlYWtwb2ludHMuc3RlcCxcbiAgICAgIHN0ZXAgPSBfYnJlYWtwb2ludHMkc3RlcCA9PT0gdm9pZCAwID8gNSA6IF9icmVha3BvaW50cyRzdGVwLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoYnJlYWtwb2ludHMsIFtcInZhbHVlc1wiLCBcInVuaXRcIiwgXCJzdGVwXCJdKTtcblxuICBmdW5jdGlvbiB1cChrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSB0eXBlb2YgdmFsdWVzW2tleV0gPT09ICdudW1iZXInID8gdmFsdWVzW2tleV0gOiBrZXk7XG4gICAgcmV0dXJuIFwiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KHZhbHVlKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bihrZXkpIHtcbiAgICB2YXIgZW5kSW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KSArIDE7XG4gICAgdmFyIHVwcGVyYm91bmQgPSB2YWx1ZXNba2V5c1tlbmRJbmRleF1dO1xuXG4gICAgaWYgKGVuZEluZGV4ID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgLy8geGwgZG93biBhcHBsaWVzIHRvIGFsbCBzaXplc1xuICAgICAgcmV0dXJuIHVwKCd4cycpO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB1cHBlcmJvdW5kID09PSAnbnVtYmVyJyAmJiBlbmRJbmRleCA+IDAgPyB1cHBlcmJvdW5kIDoga2V5O1xuICAgIHJldHVybiBcIkBtZWRpYSAobWF4LXdpZHRoOlwiLmNvbmNhdCh2YWx1ZSAtIHN0ZXAgLyAxMDApLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBiZXR3ZWVuKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgZW5kSW5kZXggPSBrZXlzLmluZGV4T2YoZW5kKTtcblxuICAgIGlmIChlbmRJbmRleCA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gdXAoc3RhcnQpO1xuICAgIH1cblxuICAgIHJldHVybiBcIkBtZWRpYSAobWluLXdpZHRoOlwiLmNvbmNhdCh0eXBlb2YgdmFsdWVzW3N0YXJ0XSA9PT0gJ251bWJlcicgPyB2YWx1ZXNbc3RhcnRdIDogc3RhcnQpLmNvbmNhdCh1bml0LCBcIikgYW5kIFwiKSArIFwiKG1heC13aWR0aDpcIi5jb25jYXQoKGVuZEluZGV4ICE9PSAtMSAmJiB0eXBlb2YgdmFsdWVzW2tleXNbZW5kSW5kZXggKyAxXV0gPT09ICdudW1iZXInID8gdmFsdWVzW2tleXNbZW5kSW5kZXggKyAxXV0gOiBlbmQpIC0gc3RlcCAvIDEwMCkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ubHkoa2V5KSB7XG4gICAgcmV0dXJuIGJldHdlZW4oa2V5LCBrZXkpO1xuICB9XG5cbiAgdmFyIHdhcm5lZE9uY2UgPSBmYWxzZTtcblxuICBmdW5jdGlvbiB3aWR0aChrZXkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLndhcm4oW1wiTWF0ZXJpYWwtVUk6IFRoZSBgdGhlbWUuYnJlYWtwb2ludHMud2lkdGhgIHV0aWxpdHkgaXMgZGVwcmVjYXRlZCBiZWNhdXNlIGl0J3MgcmVkdW5kYW50LlwiLCAnVXNlIHRoZSBgdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzYCBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzW2tleV07XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGtleXM6IGtleXMsXG4gICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgdXA6IHVwLFxuICAgIGRvd246IGRvd24sXG4gICAgYmV0d2VlbjogYmV0d2VlbixcbiAgICBvbmx5OiBvbmx5LFxuICAgIHdpZHRoOiB3aWR0aFxuICB9LCBvdGhlcik7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWl4aW5zKGJyZWFrcG9pbnRzLCBzcGFjaW5nLCBtaXhpbnMpIHtcbiAgdmFyIF90b29sYmFyO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgZ3V0dGVyczogZnVuY3Rpb24gZ3V0dGVycygpIHtcbiAgICAgIHZhciBzdHlsZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IHRoZW1lLm1peGlucy5ndXR0ZXJzKCkgaXMgZGVwcmVjYXRlZC4nLCAnWW91IGNhbiB1c2UgdGhlIHNvdXJjZSBvZiB0aGUgbWl4aW4gZGlyZWN0bHk6JywgXCJcXG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXFxuICAgICAgfSxcXG4gICAgICBcIl0uam9pbignXFxuJykpO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMiksXG4gICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygyKVxuICAgICAgfSwgc3R5bGVzLCBfZGVmaW5lUHJvcGVydHkoe30sIGJyZWFrcG9pbnRzLnVwKCdzbScpLCBfZXh0ZW5kcyh7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDMpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMylcbiAgICAgIH0sIHN0eWxlc1ticmVha3BvaW50cy51cCgnc20nKV0pKSk7XG4gICAgfSxcbiAgICB0b29sYmFyOiAoX3Rvb2xiYXIgPSB7XG4gICAgICBtaW5IZWlnaHQ6IDU2XG4gICAgfSwgX2RlZmluZVByb3BlcnR5KF90b29sYmFyLCBcIlwiLmNvbmNhdChicmVha3BvaW50cy51cCgneHMnKSwgXCIgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKSwge1xuICAgICAgbWluSGVpZ2h0OiA0OFxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Rvb2xiYXIsIGJyZWFrcG9pbnRzLnVwKCdzbScpLCB7XG4gICAgICBtaW5IZWlnaHQ6IDY0XG4gICAgfSksIF90b29sYmFyKVxuICB9LCBtaXhpbnMpO1xufSIsImltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY3JlYXRlVGhlbWUgZnJvbSAnLi9jcmVhdGVUaGVtZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUob3B0aW9ucykge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVGhlbWUuYXBwbHkodm9pZCAwLCBbZGVlcG1lcmdlKHtcbiAgICB1bnN0YWJsZV9zdHJpY3RNb2RlOiB0cnVlXG4gIH0sIG9wdGlvbnMpXS5jb25jYXQoYXJncykpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjb21tb24gZnJvbSAnLi4vY29sb3JzL2NvbW1vbic7XG5pbXBvcnQgZ3JleSBmcm9tICcuLi9jb2xvcnMvZ3JleSc7XG5pbXBvcnQgaW5kaWdvIGZyb20gJy4uL2NvbG9ycy9pbmRpZ28nO1xuaW1wb3J0IHBpbmsgZnJvbSAnLi4vY29sb3JzL3BpbmsnO1xuaW1wb3J0IHJlZCBmcm9tICcuLi9jb2xvcnMvcmVkJztcbmltcG9ydCBvcmFuZ2UgZnJvbSAnLi4vY29sb3JzL29yYW5nZSc7XG5pbXBvcnQgYmx1ZSBmcm9tICcuLi9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgZ3JlZW4gZnJvbSAnLi4vY29sb3JzL2dyZWVuJztcbmltcG9ydCB7IGRhcmtlbiwgZ2V0Q29udHJhc3RSYXRpbywgbGlnaHRlbiB9IGZyb20gJy4vY29sb3JNYW5pcHVsYXRvcic7XG5leHBvcnQgdmFyIGxpZ2h0ID0ge1xuICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIHRleHQuXG4gIHRleHQ6IHtcbiAgICAvLyBUaGUgbW9zdCBpbXBvcnRhbnQgdGV4dC5cbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgLy8gU2Vjb25kYXJ5IHRleHQuXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgLy8gRGlzYWJsZWQgdGV4dCBoYXZlIGV2ZW4gbG93ZXIgdmlzdWFsIHByb21pbmVuY2UuXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICAvLyBUZXh0IGhpbnRzLlxuICAgIGhpbnQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJ1xuICB9LFxuICAvLyBUaGUgY29sb3IgdXNlZCB0byBkaXZpZGUgZGlmZmVyZW50IGVsZW1lbnRzLlxuICBkaXZpZGVyOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gIC8vIFRoZSBiYWNrZ3JvdW5kIGNvbG9ycyB1c2VkIHRvIHN0eWxlIHRoZSBzdXJmYWNlcy5cbiAgLy8gQ29uc2lzdGVuY3kgYmV0d2VlbiB0aGVzZSB2YWx1ZXMgaXMgaW1wb3J0YW50LlxuICBiYWNrZ3JvdW5kOiB7XG4gICAgcGFwZXI6IGNvbW1vbi53aGl0ZSxcbiAgICBkZWZhdWx0OiBncmV5WzUwXVxuICB9LFxuICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIGFjdGlvbiBlbGVtZW50cy5cbiAgYWN0aW9uOiB7XG4gICAgLy8gVGhlIGNvbG9yIG9mIGFuIGFjdGl2ZSBhY3Rpb24gbGlrZSBhbiBpY29uIGJ1dHRvbi5cbiAgICBhY3RpdmU6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICAvLyBUaGUgY29sb3Igb2YgYW4gaG92ZXJlZCBhY3Rpb24uXG4gICAgaG92ZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICBob3Zlck9wYWNpdHk6IDAuMDQsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGEgc2VsZWN0ZWQgYWN0aW9uLlxuICAgIHNlbGVjdGVkOiAncmdiYSgwLCAwLCAwLCAwLjA4KScsXG4gICAgc2VsZWN0ZWRPcGFjaXR5OiAwLjA4LFxuICAgIC8vIFRoZSBjb2xvciBvZiBhIGRpc2FibGVkIGFjdGlvbi5cbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4yNiknLFxuICAgIC8vIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGEgZGlzYWJsZWQgYWN0aW9uLlxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGRpc2FibGVkT3BhY2l0eTogMC4zOCxcbiAgICBmb2N1czogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGZvY3VzT3BhY2l0eTogMC4xMixcbiAgICBhY3RpdmF0ZWRPcGFjaXR5OiAwLjEyXG4gIH1cbn07XG5leHBvcnQgdmFyIGRhcmsgPSB7XG4gIHRleHQ6IHtcbiAgICBwcmltYXJ5OiBjb21tb24ud2hpdGUsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXG4gICAgaGludDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXG4gICAgaWNvbjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSdcbiAgfSxcbiAgZGl2aWRlcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgcGFwZXI6IGdyZXlbODAwXSxcbiAgICBkZWZhdWx0OiAnIzMwMzAzMCdcbiAgfSxcbiAgYWN0aW9uOiB7XG4gICAgYWN0aXZlOiBjb21tb24ud2hpdGUsXG4gICAgaG92ZXI6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpJyxcbiAgICBob3Zlck9wYWNpdHk6IDAuMDgsXG4gICAgc2VsZWN0ZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpJyxcbiAgICBzZWxlY3RlZE9wYWNpdHk6IDAuMTYsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyknLFxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICAgIGRpc2FibGVkT3BhY2l0eTogMC4zOCxcbiAgICBmb2N1czogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICAgIGZvY3VzT3BhY2l0eTogMC4xMixcbiAgICBhY3RpdmF0ZWRPcGFjaXR5OiAwLjI0XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFkZExpZ2h0T3JEYXJrKGludGVudCwgZGlyZWN0aW9uLCBzaGFkZSwgdG9uYWxPZmZzZXQpIHtcbiAgdmFyIHRvbmFsT2Zmc2V0TGlnaHQgPSB0b25hbE9mZnNldC5saWdodCB8fCB0b25hbE9mZnNldDtcbiAgdmFyIHRvbmFsT2Zmc2V0RGFyayA9IHRvbmFsT2Zmc2V0LmRhcmsgfHwgdG9uYWxPZmZzZXQgKiAxLjU7XG5cbiAgaWYgKCFpbnRlbnRbZGlyZWN0aW9uXSkge1xuICAgIGlmIChpbnRlbnQuaGFzT3duUHJvcGVydHkoc2hhZGUpKSB7XG4gICAgICBpbnRlbnRbZGlyZWN0aW9uXSA9IGludGVudFtzaGFkZV07XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsaWdodCcpIHtcbiAgICAgIGludGVudC5saWdodCA9IGxpZ2h0ZW4oaW50ZW50Lm1haW4sIHRvbmFsT2Zmc2V0TGlnaHQpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZGFyaycpIHtcbiAgICAgIGludGVudC5kYXJrID0gZGFya2VuKGludGVudC5tYWluLCB0b25hbE9mZnNldERhcmspO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQYWxldHRlKHBhbGV0dGUpIHtcbiAgdmFyIF9wYWxldHRlJHByaW1hcnkgPSBwYWxldHRlLnByaW1hcnksXG4gICAgICBwcmltYXJ5ID0gX3BhbGV0dGUkcHJpbWFyeSA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBpbmRpZ29bMzAwXSxcbiAgICBtYWluOiBpbmRpZ29bNTAwXSxcbiAgICBkYXJrOiBpbmRpZ29bNzAwXVxuICB9IDogX3BhbGV0dGUkcHJpbWFyeSxcbiAgICAgIF9wYWxldHRlJHNlY29uZGFyeSA9IHBhbGV0dGUuc2Vjb25kYXJ5LFxuICAgICAgc2Vjb25kYXJ5ID0gX3BhbGV0dGUkc2Vjb25kYXJ5ID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IHBpbmsuQTIwMCxcbiAgICBtYWluOiBwaW5rLkE0MDAsXG4gICAgZGFyazogcGluay5BNzAwXG4gIH0gOiBfcGFsZXR0ZSRzZWNvbmRhcnksXG4gICAgICBfcGFsZXR0ZSRlcnJvciA9IHBhbGV0dGUuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wYWxldHRlJGVycm9yID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IHJlZFszMDBdLFxuICAgIG1haW46IHJlZFs1MDBdLFxuICAgIGRhcms6IHJlZFs3MDBdXG4gIH0gOiBfcGFsZXR0ZSRlcnJvcixcbiAgICAgIF9wYWxldHRlJHdhcm5pbmcgPSBwYWxldHRlLndhcm5pbmcsXG4gICAgICB3YXJuaW5nID0gX3BhbGV0dGUkd2FybmluZyA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBvcmFuZ2VbMzAwXSxcbiAgICBtYWluOiBvcmFuZ2VbNTAwXSxcbiAgICBkYXJrOiBvcmFuZ2VbNzAwXVxuICB9IDogX3BhbGV0dGUkd2FybmluZyxcbiAgICAgIF9wYWxldHRlJGluZm8gPSBwYWxldHRlLmluZm8sXG4gICAgICBpbmZvID0gX3BhbGV0dGUkaW5mbyA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBibHVlWzMwMF0sXG4gICAgbWFpbjogYmx1ZVs1MDBdLFxuICAgIGRhcms6IGJsdWVbNzAwXVxuICB9IDogX3BhbGV0dGUkaW5mbyxcbiAgICAgIF9wYWxldHRlJHN1Y2Nlc3MgPSBwYWxldHRlLnN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzID0gX3BhbGV0dGUkc3VjY2VzcyA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBncmVlblszMDBdLFxuICAgIG1haW46IGdyZWVuWzUwMF0sXG4gICAgZGFyazogZ3JlZW5bNzAwXVxuICB9IDogX3BhbGV0dGUkc3VjY2VzcyxcbiAgICAgIF9wYWxldHRlJHR5cGUgPSBwYWxldHRlLnR5cGUsXG4gICAgICB0eXBlID0gX3BhbGV0dGUkdHlwZSA9PT0gdm9pZCAwID8gJ2xpZ2h0JyA6IF9wYWxldHRlJHR5cGUsXG4gICAgICBfcGFsZXR0ZSRjb250cmFzdFRocmUgPSBwYWxldHRlLmNvbnRyYXN0VGhyZXNob2xkLFxuICAgICAgY29udHJhc3RUaHJlc2hvbGQgPSBfcGFsZXR0ZSRjb250cmFzdFRocmUgPT09IHZvaWQgMCA/IDMgOiBfcGFsZXR0ZSRjb250cmFzdFRocmUsXG4gICAgICBfcGFsZXR0ZSR0b25hbE9mZnNldCA9IHBhbGV0dGUudG9uYWxPZmZzZXQsXG4gICAgICB0b25hbE9mZnNldCA9IF9wYWxldHRlJHRvbmFsT2Zmc2V0ID09PSB2b2lkIDAgPyAwLjIgOiBfcGFsZXR0ZSR0b25hbE9mZnNldCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHBhbGV0dGUsIFtcInByaW1hcnlcIiwgXCJzZWNvbmRhcnlcIiwgXCJlcnJvclwiLCBcIndhcm5pbmdcIiwgXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcInR5cGVcIiwgXCJjb250cmFzdFRocmVzaG9sZFwiLCBcInRvbmFsT2Zmc2V0XCJdKTsgLy8gVXNlIHRoZSBzYW1lIGxvZ2ljIGFzXG4gIC8vIEJvb3RzdHJhcDogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvMWQ2ZTM3MTBkZDQ0N2RlMWEyMDBmMjllOGZhNTIxZjhhMDkwOGY3MC9zY3NzL19mdW5jdGlvbnMuc2NzcyNMNTlcbiAgLy8gYW5kIG1hdGVyaWFsLWNvbXBvbmVudHMtd2ViIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvYWM0NmI4ODYzYzRkYWI5ZmMyMmM0YzY2MmRjNmJkMWI2NWRkNjUyZi9wYWNrYWdlcy9tZGMtdGhlbWUvX2Z1bmN0aW9ucy5zY3NzI0w1NFxuXG5cbiAgZnVuY3Rpb24gZ2V0Q29udHJhc3RUZXh0KGJhY2tncm91bmQpIHtcbiAgICB2YXIgY29udHJhc3RUZXh0ID0gZ2V0Q29udHJhc3RSYXRpbyhiYWNrZ3JvdW5kLCBkYXJrLnRleHQucHJpbWFyeSkgPj0gY29udHJhc3RUaHJlc2hvbGQgPyBkYXJrLnRleHQucHJpbWFyeSA6IGxpZ2h0LnRleHQucHJpbWFyeTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgY29udHJhc3QgPSBnZXRDb250cmFzdFJhdGlvKGJhY2tncm91bmQsIGNvbnRyYXN0VGV4dCk7XG5cbiAgICAgIGlmIChjb250cmFzdCA8IDMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGNvbnRyYXN0IHJhdGlvIG9mIFwiLmNvbmNhdChjb250cmFzdCwgXCI6MSBmb3IgXCIpLmNvbmNhdChjb250cmFzdFRleHQsIFwiIG9uIFwiKS5jb25jYXQoYmFja2dyb3VuZCksICdmYWxscyBiZWxvdyB0aGUgV0NBRyByZWNvbW1lbmRlZCBhYnNvbHV0ZSBtaW5pbXVtIGNvbnRyYXN0IHJhdGlvIG9mIDM6MS4nLCAnaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jdmlzdWFsLWF1ZGlvLWNvbnRyYXN0LWNvbnRyYXN0J10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250cmFzdFRleHQ7XG4gIH1cblxuICB2YXIgYXVnbWVudENvbG9yID0gZnVuY3Rpb24gYXVnbWVudENvbG9yKGNvbG9yKSB7XG4gICAgdmFyIG1haW5TaGFkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogNTAwO1xuICAgIHZhciBsaWdodFNoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAzMDA7XG4gICAgdmFyIGRhcmtTaGFkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogNzAwO1xuICAgIGNvbG9yID0gX2V4dGVuZHMoe30sIGNvbG9yKTtcblxuICAgIGlmICghY29sb3IubWFpbiAmJiBjb2xvclttYWluU2hhZGVdKSB7XG4gICAgICBjb2xvci5tYWluID0gY29sb3JbbWFpblNoYWRlXTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbG9yLm1haW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBUaGUgY29sb3IgcHJvdmlkZWQgdG8gYXVnbWVudENvbG9yKGNvbG9yKSBpcyBpbnZhbGlkLlxcblRoZSBjb2xvciBvYmplY3QgbmVlZHMgdG8gaGF2ZSBhIGBtYWluYCBwcm9wZXJ0eSBvciBhIGBcIi5jb25jYXQobWFpblNoYWRlLCBcImAgcHJvcGVydHkuXCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg0LCBtYWluU2hhZGUpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yLm1haW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVGhlIGNvbG9yIHByb3ZpZGVkIHRvIGF1Z21lbnRDb2xvcihjb2xvcikgaXMgaW52YWxpZC5cXG5gY29sb3IubWFpbmAgc2hvdWxkIGJlIGEgc3RyaW5nLCBidXQgYFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShjb2xvci5tYWluKSwgXCJgIHdhcyBwcm92aWRlZCBpbnN0ZWFkLlxcblxcbkRpZCB5b3UgaW50ZW5kIHRvIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhcHByb2FjaGVzP1xcblxcbmltcG9ydCB7XFx4QTBncmVlbiB9IGZyb20gXFxcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1xcXCI7XFxuXFxuY29uc3QgdGhlbWUxID0gY3JlYXRlVGhlbWUoeyBwYWxldHRlOiB7XFxuICBwcmltYXJ5OiBncmVlbixcXG59IH0pO1xcblxcbmNvbnN0IHRoZW1lMiA9IGNyZWF0ZVRoZW1lKHsgcGFsZXR0ZToge1xcbiAgcHJpbWFyeTogeyBtYWluOiBncmVlbls1MDBdIH0sXFxufSB9KTtcIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDUsIEpTT04uc3RyaW5naWZ5KGNvbG9yLm1haW4pKSk7XG4gICAgfVxuXG4gICAgYWRkTGlnaHRPckRhcmsoY29sb3IsICdsaWdodCcsIGxpZ2h0U2hhZGUsIHRvbmFsT2Zmc2V0KTtcbiAgICBhZGRMaWdodE9yRGFyayhjb2xvciwgJ2RhcmsnLCBkYXJrU2hhZGUsIHRvbmFsT2Zmc2V0KTtcblxuICAgIGlmICghY29sb3IuY29udHJhc3RUZXh0KSB7XG4gICAgICBjb2xvci5jb250cmFzdFRleHQgPSBnZXRDb250cmFzdFRleHQoY29sb3IubWFpbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9O1xuXG4gIHZhciB0eXBlcyA9IHtcbiAgICBkYXJrOiBkYXJrLFxuICAgIGxpZ2h0OiBsaWdodFxuICB9O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF0eXBlc1t0eXBlXSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUaGUgcGFsZXR0ZSB0eXBlIGBcIi5jb25jYXQodHlwZSwgXCJgIGlzIG5vdCBzdXBwb3J0ZWQuXCIpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGFsZXR0ZU91dHB1dCA9IGRlZXBtZXJnZShfZXh0ZW5kcyh7XG4gICAgLy8gQSBjb2xsZWN0aW9uIG9mIGNvbW1vbiBjb2xvcnMuXG4gICAgY29tbW9uOiBjb21tb24sXG4gICAgLy8gVGhlIHBhbGV0dGUgdHlwZSwgY2FuIGJlIGxpZ2h0IG9yIGRhcmsuXG4gICAgdHlwZTogdHlwZSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IHByaW1hcnkgaW50ZXJmYWNlIGVsZW1lbnRzIGZvciBhIHVzZXIuXG4gICAgcHJpbWFyeTogYXVnbWVudENvbG9yKHByaW1hcnkpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgc2Vjb25kYXJ5IGludGVyZmFjZSBlbGVtZW50cyBmb3IgYSB1c2VyLlxuICAgIHNlY29uZGFyeTogYXVnbWVudENvbG9yKHNlY29uZGFyeSwgJ0E0MDAnLCAnQTIwMCcsICdBNzAwJyksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBpbnRlcmZhY2UgZWxlbWVudHMgdGhhdCB0aGUgdXNlciBzaG91bGQgYmUgbWFkZSBhd2FyZSBvZi5cbiAgICBlcnJvcjogYXVnbWVudENvbG9yKGVycm9yKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IHBvdGVudGlhbGx5IGRhbmdlcm91cyBhY3Rpb25zIG9yIGltcG9ydGFudCBtZXNzYWdlcy5cbiAgICB3YXJuaW5nOiBhdWdtZW50Q29sb3Iod2FybmluZyksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHByZXNlbnQgaW5mb3JtYXRpb24gdG8gdGhlIHVzZXIgdGhhdCBpcyBuZXV0cmFsIGFuZCBub3QgbmVjZXNzYXJpbHkgaW1wb3J0YW50LlxuICAgIGluZm86IGF1Z21lbnRDb2xvcihpbmZvKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gaW5kaWNhdGUgdGhlIHN1Y2Nlc3NmdWwgY29tcGxldGlvbiBvZiBhbiBhY3Rpb24gdGhhdCB1c2VyIHRyaWdnZXJlZC5cbiAgICBzdWNjZXNzOiBhdWdtZW50Q29sb3Ioc3VjY2VzcyksXG4gICAgLy8gVGhlIGdyZXkgY29sb3JzLlxuICAgIGdyZXk6IGdyZXksXG4gICAgLy8gVXNlZCBieSBgZ2V0Q29udHJhc3RUZXh0KClgIHRvIG1heGltaXplIHRoZSBjb250cmFzdCBiZXR3ZWVuXG4gICAgLy8gdGhlIGJhY2tncm91bmQgYW5kIHRoZSB0ZXh0LlxuICAgIGNvbnRyYXN0VGhyZXNob2xkOiBjb250cmFzdFRocmVzaG9sZCxcbiAgICAvLyBUYWtlcyBhIGJhY2tncm91bmQgY29sb3IgYW5kIHJldHVybnMgdGhlIHRleHQgY29sb3IgdGhhdCBtYXhpbWl6ZXMgdGhlIGNvbnRyYXN0LlxuICAgIGdldENvbnRyYXN0VGV4dDogZ2V0Q29udHJhc3RUZXh0LFxuICAgIC8vIEdlbmVyYXRlIGEgcmljaCBjb2xvciBvYmplY3QuXG4gICAgYXVnbWVudENvbG9yOiBhdWdtZW50Q29sb3IsXG4gICAgLy8gVXNlZCBieSB0aGUgZnVuY3Rpb25zIGJlbG93IHRvIHNoaWZ0IGEgY29sb3IncyBsdW1pbmFuY2UgYnkgYXBwcm94aW1hdGVseVxuICAgIC8vIHR3byBpbmRleGVzIHdpdGhpbiBpdHMgdG9uYWwgcGFsZXR0ZS5cbiAgICAvLyBFLmcuLCBzaGlmdCBmcm9tIFJlZCA1MDAgdG8gUmVkIDMwMCBvciBSZWQgNzAwLlxuICAgIHRvbmFsT2Zmc2V0OiB0b25hbE9mZnNldFxuICB9LCB0eXBlc1t0eXBlXSksIG90aGVyKTtcbiAgcmV0dXJuIHBhbGV0dGVPdXRwdXQ7XG59IiwiaW1wb3J0IHsgY3JlYXRlVW5hcnlTcGFjaW5nIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N5c3RlbSc7XG52YXIgd2Fybk9uY2U7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTcGFjaW5nKCkge1xuICB2YXIgc3BhY2luZ0lucHV0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiA4O1xuXG4gIC8vIEFscmVhZHkgdHJhbnNmb3JtZWQuXG4gIGlmIChzcGFjaW5nSW5wdXQubXVpKSB7XG4gICAgcmV0dXJuIHNwYWNpbmdJbnB1dDtcbiAgfSAvLyBNYXRlcmlhbCBEZXNpZ24gbGF5b3V0cyBhcmUgdmlzdWFsbHkgYmFsYW5jZWQuIE1vc3QgbWVhc3VyZW1lbnRzIGFsaWduIHRvIGFuIDhkcCBncmlkIGFwcGxpZWQsIHdoaWNoIGFsaWducyBib3RoIHNwYWNpbmcgYW5kIHRoZSBvdmVyYWxsIGxheW91dC5cbiAgLy8gU21hbGxlciBjb21wb25lbnRzLCBzdWNoIGFzIGljb25zIGFuZCB0eXBlLCBjYW4gYWxpZ24gdG8gYSA0ZHAgZ3JpZC5cbiAgLy8gaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vbGF5b3V0L3VuZGVyc3RhbmRpbmctbGF5b3V0Lmh0bWwjdXNhZ2VcblxuXG4gIHZhciB0cmFuc2Zvcm0gPSBjcmVhdGVVbmFyeVNwYWNpbmcoe1xuICAgIHNwYWNpbmc6IHNwYWNpbmdJbnB1dFxuICB9KTtcblxuICB2YXIgc3BhY2luZyA9IGZ1bmN0aW9uIHNwYWNpbmcoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIShhcmdzLmxlbmd0aCA8PSA0KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRvbyBtYW55IGFyZ3VtZW50cyBwcm92aWRlZCwgZXhwZWN0ZWQgYmV0d2VlbiAwIGFuZCA0LCBnb3QgXCIuY29uY2F0KGFyZ3MubGVuZ3RoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKDEpO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybShhcmdzWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJncy5tYXAoZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYXJndW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBvdXRwdXQgPSB0cmFuc2Zvcm0oYXJndW1lbnQpO1xuICAgICAgcmV0dXJuIHR5cGVvZiBvdXRwdXQgPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQob3V0cHV0LCBcInB4XCIpIDogb3V0cHV0O1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfTsgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdG8gcmVtb3ZlIGluIHY1LlxuXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwYWNpbmcsICd1bml0Jywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCF3YXJuT25jZSB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiB0aGVtZS5zcGFjaW5nLnVuaXQgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4nLCAnSXQgd2lsbCBiZSByZW1vdmVkIGluIHY1LicsICdZb3UgY2FuIHJlcGxhY2UgYHRoZW1lLnNwYWNpbmcudW5pdCAqIHlgIHdpdGggYHRoZW1lLnNwYWNpbmcoeSlgLicsICcnLCAnWW91IGNhbiB1c2UgdGhlIGBodHRwczovL2dpdGh1Yi5jb20vbXVpLW9yZy9tYXRlcmlhbC11aS90cmVlL21hc3Rlci9wYWNrYWdlcy9tYXRlcmlhbC11aS1jb2RlbW9kL1JFQURNRS5tZCN0aGVtZS1zcGFjaW5nLWFwaWAgbWlncmF0aW9uIGhlbHBlciB0byBtYWtlIHRoZSBwcm9jZXNzIHNtb290aGVyLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhcm5PbmNlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwYWNpbmdJbnB1dDtcbiAgICB9XG4gIH0pO1xuICBzcGFjaW5nLm11aSA9IHRydWU7XG4gIHJldHVybiBzcGFjaW5nO1xufSIsImltcG9ydCB7IGNyZWF0ZVN0eWxlcyBhcyBjcmVhdGVTdHlsZXNPcmlnaW5hbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnOyAvLyBsZXQgd2Fybk9uY2UgPSBmYWxzZTtcbi8vIFRvIHJlbW92ZSBpbiB2NVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XG4gIC8vIHdhcm5pbmcoXG4gIC8vICAgd2Fybk9uY2UsXG4gIC8vICAgW1xuICAvLyAgICAgJ01hdGVyaWFsLVVJOiBjcmVhdGVTdHlsZXMgZnJvbSBAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMgaXMgZGVwcmVjYXRlZC4nLFxuICAvLyAgICAgJ1BsZWFzZSB1c2UgQG1hdGVyaWFsLXVpL3N0eWxlcy9jcmVhdGVTdHlsZXMnLFxuICAvLyAgIF0uam9pbignXFxuJyksXG4gIC8vICk7XG4gIC8vIHdhcm5PbmNlID0gdHJ1ZTtcbiAgcmV0dXJuIGNyZWF0ZVN0eWxlc09yaWdpbmFsKHN0eWxlcyk7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZUJyZWFrcG9pbnRzIGZyb20gJy4vY3JlYXRlQnJlYWtwb2ludHMnO1xuaW1wb3J0IGNyZWF0ZU1peGlucyBmcm9tICcuL2NyZWF0ZU1peGlucyc7XG5pbXBvcnQgY3JlYXRlUGFsZXR0ZSBmcm9tICcuL2NyZWF0ZVBhbGV0dGUnO1xuaW1wb3J0IGNyZWF0ZVR5cG9ncmFwaHkgZnJvbSAnLi9jcmVhdGVUeXBvZ3JhcGh5JztcbmltcG9ydCBzaGFkb3dzIGZyb20gJy4vc2hhZG93cyc7XG5pbXBvcnQgc2hhcGUgZnJvbSAnLi9zaGFwZSc7XG5pbXBvcnQgY3JlYXRlU3BhY2luZyBmcm9tICcuL2NyZWF0ZVNwYWNpbmcnO1xuaW1wb3J0IHRyYW5zaXRpb25zIGZyb20gJy4vdHJhbnNpdGlvbnMnO1xuaW1wb3J0IHpJbmRleCBmcm9tICcuL3pJbmRleCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIF9vcHRpb25zJGJyZWFrcG9pbnRzID0gb3B0aW9ucy5icmVha3BvaW50cyxcbiAgICAgIGJyZWFrcG9pbnRzSW5wdXQgPSBfb3B0aW9ucyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRicmVha3BvaW50cyxcbiAgICAgIF9vcHRpb25zJG1peGlucyA9IG9wdGlvbnMubWl4aW5zLFxuICAgICAgbWl4aW5zSW5wdXQgPSBfb3B0aW9ucyRtaXhpbnMgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkbWl4aW5zLFxuICAgICAgX29wdGlvbnMkcGFsZXR0ZSA9IG9wdGlvbnMucGFsZXR0ZSxcbiAgICAgIHBhbGV0dGVJbnB1dCA9IF9vcHRpb25zJHBhbGV0dGUgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkcGFsZXR0ZSxcbiAgICAgIHNwYWNpbmdJbnB1dCA9IG9wdGlvbnMuc3BhY2luZyxcbiAgICAgIF9vcHRpb25zJHR5cG9ncmFwaHkgPSBvcHRpb25zLnR5cG9ncmFwaHksXG4gICAgICB0eXBvZ3JhcGh5SW5wdXQgPSBfb3B0aW9ucyR0eXBvZ3JhcGh5ID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJHR5cG9ncmFwaHksXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJicmVha3BvaW50c1wiLCBcIm1peGluc1wiLCBcInBhbGV0dGVcIiwgXCJzcGFjaW5nXCIsIFwidHlwb2dyYXBoeVwiXSk7XG5cbiAgdmFyIHBhbGV0dGUgPSBjcmVhdGVQYWxldHRlKHBhbGV0dGVJbnB1dCk7XG4gIHZhciBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzSW5wdXQpO1xuICB2YXIgc3BhY2luZyA9IGNyZWF0ZVNwYWNpbmcoc3BhY2luZ0lucHV0KTtcbiAgdmFyIG11aVRoZW1lID0gZGVlcG1lcmdlKHtcbiAgICBicmVha3BvaW50czogYnJlYWtwb2ludHMsXG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICBtaXhpbnM6IGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zSW5wdXQpLFxuICAgIG92ZXJyaWRlczoge30sXG4gICAgLy8gSW5qZWN0IGN1c3RvbSBzdHlsZXNcbiAgICBwYWxldHRlOiBwYWxldHRlLFxuICAgIHByb3BzOiB7fSxcbiAgICAvLyBQcm92aWRlIGRlZmF1bHQgcHJvcHNcbiAgICBzaGFkb3dzOiBzaGFkb3dzLFxuICAgIHR5cG9ncmFwaHk6IGNyZWF0ZVR5cG9ncmFwaHkocGFsZXR0ZSwgdHlwb2dyYXBoeUlucHV0KSxcbiAgICBzcGFjaW5nOiBzcGFjaW5nLFxuICAgIHNoYXBlOiBzaGFwZSxcbiAgICB0cmFuc2l0aW9uczogdHJhbnNpdGlvbnMsXG4gICAgekluZGV4OiB6SW5kZXhcbiAgfSwgb3RoZXIpO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIG11aVRoZW1lID0gYXJncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXJndW1lbnQpIHtcbiAgICByZXR1cm4gZGVlcG1lcmdlKGFjYywgYXJndW1lbnQpO1xuICB9LCBtdWlUaGVtZSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgcHNldWRvQ2xhc3NlcyA9IFsnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdlcnJvcicsICdmb2N1c2VkJywgJ2ZvY3VzVmlzaWJsZScsICdyZXF1aXJlZCcsICdleHBhbmRlZCcsICdzZWxlY3RlZCddO1xuXG4gICAgdmFyIHRyYXZlcnNlID0gZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSwgcGFyZW50S2V5KSB7XG4gICAgICB2YXIgZGVwdGggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDE7XG4gICAgICB2YXIga2V5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluLCBuby1yZXN0cmljdGVkLXN5bnRheFxuXG4gICAgICBmb3IgKGtleSBpbiBub2RlKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVba2V5XTtcblxuICAgICAgICBpZiAoZGVwdGggPT09IDEpIHtcbiAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ011aScpID09PSAwICYmIGNoaWxkKSB7XG4gICAgICAgICAgICB0cmF2ZXJzZShjaGlsZCwga2V5LCBkZXB0aCArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwc2V1ZG9DbGFzc2VzLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgT2JqZWN0LmtleXMoY2hpbGQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGBcIi5jb25jYXQocGFyZW50S2V5LCBcImAgY29tcG9uZW50IGluY3JlYXNlcyBcIikgKyBcInRoZSBDU1Mgc3BlY2lmaWNpdHkgb2YgdGhlIGBcIi5jb25jYXQoa2V5LCBcImAgaW50ZXJuYWwgc3RhdGUuXCIpLCAnWW91IGNhbiBub3Qgb3ZlcnJpZGUgaXQgbGlrZSB0aGlzOiAnLCBKU09OLnN0cmluZ2lmeShub2RlLCBudWxsLCAyKSwgJycsICdJbnN0ZWFkLCB5b3UgbmVlZCB0byB1c2UgdGhlICRydWxlTmFtZSBzeW50YXg6JywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICByb290OiBfZGVmaW5lUHJvcGVydHkoe30sIFwiJiRcIi5jb25jYXQoa2V5KSwgY2hpbGQpXG4gICAgICAgICAgICB9LCBudWxsLCAyKSwgJycsICdodHRwczovL211aS5jb20vci9wc2V1ZG8tY2xhc3Nlcy1ndWlkZSddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICB9IC8vIFJlbW92ZSB0aGUgc3R5bGUgdG8gcHJldmVudCBnbG9iYWwgY29uZmxpY3RzLlxuXG5cbiAgICAgICAgICBub2RlW2tleV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0cmF2ZXJzZShtdWlUaGVtZS5vdmVycmlkZXMpO1xuICB9XG5cbiAgcmV0dXJuIG11aVRoZW1lO1xufVxuXG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11aVRoZW1lKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghd2FybmVkT25jZSkge1xuICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IHRoZSBjcmVhdGVNdWlUaGVtZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCB0byBjcmVhdGVUaGVtZS4nLCAnJywgXCJZb3Ugc2hvdWxkIHVzZSBgaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnYFwiXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVRoZW1lLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRoZW1lOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5cbmZ1bmN0aW9uIHJvdW5kKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMWU1KSAvIDFlNTtcbn1cblxudmFyIHdhcm5lZE9uY2UgPSBmYWxzZTtcblxuZnVuY3Rpb24gcm91bmRXaXRoRGVwcmVjYXRpb25XYXJuaW5nKHZhbHVlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydNYXRlcmlhbC1VSTogVGhlIGB0aGVtZS50eXBvZ3JhcGh5LnJvdW5kYCBoZWxwZXIgaXMgZGVwcmVjYXRlZC4nLCAnSGVhZCB0byBodHRwczovL211aS5jb20vci9taWdyYXRpb24tdjQvI3RoZW1lIGZvciBhIG1pZ3JhdGlvbiBwYXRoLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByb3VuZCh2YWx1ZSk7XG59XG5cbnZhciBjYXNlQWxsQ2FwcyA9IHtcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbn07XG52YXIgZGVmYXVsdEZvbnRGYW1pbHkgPSAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJztcbi8qKlxuICogQHNlZSBAbGlua3todHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi90eXBvZ3JhcGh5L3RoZS10eXBlLXN5c3RlbS5odG1sfVxuICogQHNlZSBAbGlua3todHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi90eXBvZ3JhcGh5L3VuZGVyc3RhbmRpbmctdHlwb2dyYXBoeS5odG1sfVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVR5cG9ncmFwaHkocGFsZXR0ZSwgdHlwb2dyYXBoeSkge1xuICB2YXIgX3JlZiA9IHR5cGVvZiB0eXBvZ3JhcGh5ID09PSAnZnVuY3Rpb24nID8gdHlwb2dyYXBoeShwYWxldHRlKSA6IHR5cG9ncmFwaHksXG4gICAgICBfcmVmJGZvbnRGYW1pbHkgPSBfcmVmLmZvbnRGYW1pbHksXG4gICAgICBmb250RmFtaWx5ID0gX3JlZiRmb250RmFtaWx5ID09PSB2b2lkIDAgPyBkZWZhdWx0Rm9udEZhbWlseSA6IF9yZWYkZm9udEZhbWlseSxcbiAgICAgIF9yZWYkZm9udFNpemUgPSBfcmVmLmZvbnRTaXplLFxuICAgICAgZm9udFNpemUgPSBfcmVmJGZvbnRTaXplID09PSB2b2lkIDAgPyAxNCA6IF9yZWYkZm9udFNpemUsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRMaWdodCA9IF9yZWYuZm9udFdlaWdodExpZ2h0LFxuICAgICAgZm9udFdlaWdodExpZ2h0ID0gX3JlZiRmb250V2VpZ2h0TGlnaHQgPT09IHZvaWQgMCA/IDMwMCA6IF9yZWYkZm9udFdlaWdodExpZ2h0LFxuICAgICAgX3JlZiRmb250V2VpZ2h0UmVndWxhID0gX3JlZi5mb250V2VpZ2h0UmVndWxhcixcbiAgICAgIGZvbnRXZWlnaHRSZWd1bGFyID0gX3JlZiRmb250V2VpZ2h0UmVndWxhID09PSB2b2lkIDAgPyA0MDAgOiBfcmVmJGZvbnRXZWlnaHRSZWd1bGEsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRNZWRpdW0gPSBfcmVmLmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBmb250V2VpZ2h0TWVkaXVtID0gX3JlZiRmb250V2VpZ2h0TWVkaXVtID09PSB2b2lkIDAgPyA1MDAgOiBfcmVmJGZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBfcmVmJGZvbnRXZWlnaHRCb2xkID0gX3JlZi5mb250V2VpZ2h0Qm9sZCxcbiAgICAgIGZvbnRXZWlnaHRCb2xkID0gX3JlZiRmb250V2VpZ2h0Qm9sZCA9PT0gdm9pZCAwID8gNzAwIDogX3JlZiRmb250V2VpZ2h0Qm9sZCxcbiAgICAgIF9yZWYkaHRtbEZvbnRTaXplID0gX3JlZi5odG1sRm9udFNpemUsXG4gICAgICBodG1sRm9udFNpemUgPSBfcmVmJGh0bWxGb250U2l6ZSA9PT0gdm9pZCAwID8gMTYgOiBfcmVmJGh0bWxGb250U2l6ZSxcbiAgICAgIGFsbFZhcmlhbnRzID0gX3JlZi5hbGxWYXJpYW50cyxcbiAgICAgIHB4VG9SZW0yID0gX3JlZi5weFRvUmVtLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwiZm9udFdlaWdodExpZ2h0XCIsIFwiZm9udFdlaWdodFJlZ3VsYXJcIiwgXCJmb250V2VpZ2h0TWVkaXVtXCIsIFwiZm9udFdlaWdodEJvbGRcIiwgXCJodG1sRm9udFNpemVcIiwgXCJhbGxWYXJpYW50c1wiLCBcInB4VG9SZW1cIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBmb250U2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBgZm9udFNpemVgIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaHRtbEZvbnRTaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBodG1sRm9udFNpemVgIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyLicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb2VmID0gZm9udFNpemUgLyAxNDtcblxuICB2YXIgcHhUb1JlbSA9IHB4VG9SZW0yIHx8IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHNpemUgLyBodG1sRm9udFNpemUgKiBjb2VmLCBcInJlbVwiKTtcbiAgfTtcblxuICB2YXIgYnVpbGRWYXJpYW50ID0gZnVuY3Rpb24gYnVpbGRWYXJpYW50KGZvbnRXZWlnaHQsIHNpemUsIGxpbmVIZWlnaHQsIGxldHRlclNwYWNpbmcsIGNhc2luZykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodCxcbiAgICAgIGZvbnRTaXplOiBweFRvUmVtKHNpemUpLFxuICAgICAgLy8gVW5pdGxlc3MgZm9sbG93aW5nIGh0dHBzOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdGhvdWdodHMvMjAwNi8wMi8wOC91bml0bGVzcy1saW5lLWhlaWdodHMvXG4gICAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0XG4gICAgfSwgZm9udEZhbWlseSA9PT0gZGVmYXVsdEZvbnRGYW1pbHkgPyB7XG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIlwiLmNvbmNhdChyb3VuZChsZXR0ZXJTcGFjaW5nIC8gc2l6ZSksIFwiZW1cIilcbiAgICB9IDoge30sIGNhc2luZywgYWxsVmFyaWFudHMpO1xuICB9O1xuXG4gIHZhciB2YXJpYW50cyA9IHtcbiAgICBoMTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRMaWdodCwgOTYsIDEuMTY3LCAtMS41KSxcbiAgICBoMjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRMaWdodCwgNjAsIDEuMiwgLTAuNSksXG4gICAgaDM6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgNDgsIDEuMTY3LCAwKSxcbiAgICBoNDogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAzNCwgMS4yMzUsIDAuMjUpLFxuICAgIGg1OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDI0LCAxLjMzNCwgMCksXG4gICAgaDY6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAyMCwgMS42LCAwLjE1KSxcbiAgICBzdWJ0aXRsZTE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTYsIDEuNzUsIDAuMTUpLFxuICAgIHN1YnRpdGxlMjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDE0LCAxLjU3LCAwLjEpLFxuICAgIGJvZHkxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE2LCAxLjUsIDAuMTUpLFxuICAgIGJvZHkyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE0LCAxLjQzLCAwLjE1KSxcbiAgICBidXR0b246IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAxNCwgMS43NSwgMC40LCBjYXNlQWxsQ2FwcyksXG4gICAgY2FwdGlvbjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxMiwgMS42NiwgMC40KSxcbiAgICBvdmVybGluZTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxMiwgMi42NiwgMSwgY2FzZUFsbENhcHMpXG4gIH07XG4gIHJldHVybiBkZWVwbWVyZ2UoX2V4dGVuZHMoe1xuICAgIGh0bWxGb250U2l6ZTogaHRtbEZvbnRTaXplLFxuICAgIHB4VG9SZW06IHB4VG9SZW0sXG4gICAgcm91bmQ6IHJvdW5kV2l0aERlcHJlY2F0aW9uV2FybmluZyxcbiAgICAvLyBUT0RPIHY1OiByZW1vdmVcbiAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiBmb250U2l6ZSxcbiAgICBmb250V2VpZ2h0TGlnaHQ6IGZvbnRXZWlnaHRMaWdodCxcbiAgICBmb250V2VpZ2h0UmVndWxhcjogZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgZm9udFdlaWdodE1lZGl1bTogZm9udFdlaWdodE1lZGl1bSxcbiAgICBmb250V2VpZ2h0Qm9sZDogZm9udFdlaWdodEJvbGRcbiAgfSwgdmFyaWFudHMpLCBvdGhlciwge1xuICAgIGNsb25lOiBmYWxzZSAvLyBObyBuZWVkIHRvIGNsb25lIGRlZXBcblxuICB9KTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzVW5pdGxlc3ModmFsdWUpIHtcbiAgcmV0dXJuIFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlKSkubGVuZ3RoID09PSBTdHJpbmcodmFsdWUpLmxlbmd0aDtcbn0gLy8gUG9ydGVkIGZyb20gQ29tcGFzc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL0NvbXBhc3MvY29tcGFzcy9ibG9iL21hc3Rlci9jb3JlL3N0eWxlc2hlZXRzL2NvbXBhc3MvdHlwb2dyYXBoeS9fdW5pdHMuc2Nzc1xuLy8gRW11bGF0ZSB0aGUgc2FzcyBmdW5jdGlvbiBcInVuaXRcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pdChpbnB1dCkge1xuICByZXR1cm4gU3RyaW5nKGlucHV0KS5tYXRjaCgvW1xcZC5cXC0rXSpcXHMqKC4qKS8pWzFdIHx8ICcnO1xufSAvLyBFbXVsYXRlIHRoZSBzYXNzIGZ1bmN0aW9uIFwidW5pdGxlc3NcIlxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml0bGVzcyhsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQobGVuZ3RoKTtcbn0gLy8gQ29udmVydCBhbnkgQ1NTIDxsZW5ndGg+IG9yIDxwZXJjZW50YWdlPiB2YWx1ZSB0byBhbnkgYW5vdGhlci5cbi8vIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL0t5bGVBTWF0aGV3cy9jb252ZXJ0LWNzcy1sZW5ndGhcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRMZW5ndGgoYmFzZUZvbnRTaXplKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobGVuZ3RoLCB0b1VuaXQpIHtcbiAgICB2YXIgZnJvbVVuaXQgPSBnZXRVbml0KGxlbmd0aCk7IC8vIE9wdGltaXplIGZvciBjYXNlcyB3aGVyZSBgZnJvbWAgYW5kIGB0b2AgdW5pdHMgYXJlIGFjY2lkZW50YWxseSB0aGUgc2FtZS5cblxuICAgIGlmIChmcm9tVW5pdCA9PT0gdG9Vbml0KSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0gLy8gQ29udmVydCBpbnB1dCBsZW5ndGggdG8gcGl4ZWxzLlxuXG5cbiAgICB2YXIgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCk7XG5cbiAgICBpZiAoZnJvbVVuaXQgIT09ICdweCcpIHtcbiAgICAgIGlmIChmcm9tVW5pdCA9PT0gJ2VtJykge1xuICAgICAgICBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKSAqIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSBpZiAoZnJvbVVuaXQgPT09ICdyZW0nKSB7XG4gICAgICAgIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpICogdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfVxuICAgIH0gLy8gQ29udmVydCBsZW5ndGggaW4gcGl4ZWxzIHRvIHRoZSBvdXRwdXQgdW5pdFxuXG5cbiAgICB2YXIgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGg7XG5cbiAgICBpZiAodG9Vbml0ICE9PSAncHgnKSB7XG4gICAgICBpZiAodG9Vbml0ID09PSAnZW0nKSB7XG4gICAgICAgIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoIC8gdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmICh0b1VuaXQgPT09ICdyZW0nKSB7XG4gICAgICAgIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoIC8gdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VGbG9hdChvdXRwdXRMZW5ndGgudG9GaXhlZCg1KSkgKyB0b1VuaXQ7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gYWxpZ25Qcm9wZXJ0eShfcmVmKSB7XG4gIHZhciBzaXplID0gX3JlZi5zaXplLFxuICAgICAgZ3JpZCA9IF9yZWYuZ3JpZDtcbiAgdmFyIHNpemVCZWxvdyA9IHNpemUgLSBzaXplICUgZ3JpZDtcbiAgdmFyIHNpemVBYm92ZSA9IHNpemVCZWxvdyArIGdyaWQ7XG4gIHJldHVybiBzaXplIC0gc2l6ZUJlbG93IDwgc2l6ZUFib3ZlIC0gc2l6ZSA/IHNpemVCZWxvdyA6IHNpemVBYm92ZTtcbn0gLy8gZm9udEdyaWQgZmluZHMgYSBtaW5pbWFsIGdyaWQgKGluIHJlbSkgZm9yIHRoZSBmb250U2l6ZSB2YWx1ZXMgc28gdGhhdCB0aGVcbi8vIGxpbmVIZWlnaHQgZmFsbHMgdW5kZXIgYSB4IHBpeGVscyBncmlkLCA0cHggaW4gdGhlIGNhc2Ugb2YgTWF0ZXJpYWwgRGVzaWduLFxuLy8gd2l0aG91dCBjaGFuZ2luZyB0aGUgcmVsYXRpdmUgbGluZSBoZWlnaHRcblxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRHcmlkKF9yZWYyKSB7XG4gIHZhciBsaW5lSGVpZ2h0ID0gX3JlZjIubGluZUhlaWdodCxcbiAgICAgIHBpeGVscyA9IF9yZWYyLnBpeGVscyxcbiAgICAgIGh0bWxGb250U2l6ZSA9IF9yZWYyLmh0bWxGb250U2l6ZTtcbiAgcmV0dXJuIHBpeGVscyAvIChsaW5lSGVpZ2h0ICogaHRtbEZvbnRTaXplKTtcbn1cbi8qKlxuICogZ2VuZXJhdGUgYSByZXNwb25zaXZlIHZlcnNpb24gb2YgYSBnaXZlbiBDU1MgcHJvcGVydHlcbiAqIEBleGFtcGxlXG4gKiByZXNwb25zaXZlUHJvcGVydHkoe1xuICogICBjc3NQcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAqICAgbWluOiAxNSxcbiAqICAgbWF4OiAyMCxcbiAqICAgdW5pdDogJ3B4JyxcbiAqICAgYnJlYWtwb2ludHM6IFszMDAsIDYwMF0sXG4gKiB9KVxuICpcbiAqIC8vIHRoaXMgcmV0dXJuc1xuICpcbiAqIHtcbiAqICAgZm9udFNpemU6ICcxNXB4JyxcbiAqICAgJ0BtZWRpYSAobWluLXdpZHRoOjMwMHB4KSc6IHtcbiAqICAgICBmb250U2l6ZTogJzE3LjVweCcsXG4gKiAgIH0sXG4gKiAgICdAbWVkaWEgKG1pbi13aWR0aDo2MDBweCknOiB7XG4gKiAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAqICAgfSxcbiAqIH1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNzc1Byb3BlcnR5IC0gVGhlIENTUyBwcm9wZXJ0eSB0byBiZSBtYWRlIHJlc3BvbnNpdmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMubWluIC0gVGhlIHNtYWxsZXN0IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMubWF4IC0gVGhlIGxhcmdlc3QgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eVxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMudW5pdF0gLSBUaGUgdW5pdCB0byBiZSB1c2VkIGZvciB0aGUgQ1NTIHByb3BlcnR5XG4gKiBAcGFyYW0ge0FycmF5Lm51bWJlcn0gW3BhcmFtcy5icmVha3BvaW50c10gIC0gQW4gYXJyYXkgb2YgYnJlYWtwb2ludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcGFyYW1zLmFsaWduU3RlcF0gLSBSb3VuZCBzY2FsZWQgdmFsdWUgdG8gZmFsbCB1bmRlciB0aGlzIGdyaWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IHJlc3BvbnNpdmUgc3R5bGVzIGZvciB7cGFyYW1zLmNzc1Byb3BlcnR5fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXNwb25zaXZlUHJvcGVydHkoX3JlZjMpIHtcbiAgdmFyIGNzc1Byb3BlcnR5ID0gX3JlZjMuY3NzUHJvcGVydHksXG4gICAgICBtaW4gPSBfcmVmMy5taW4sXG4gICAgICBtYXggPSBfcmVmMy5tYXgsXG4gICAgICBfcmVmMyR1bml0ID0gX3JlZjMudW5pdCxcbiAgICAgIHVuaXQgPSBfcmVmMyR1bml0ID09PSB2b2lkIDAgPyAncmVtJyA6IF9yZWYzJHVuaXQsXG4gICAgICBfcmVmMyRicmVha3BvaW50cyA9IF9yZWYzLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHMgPSBfcmVmMyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8gWzYwMCwgOTYwLCAxMjgwXSA6IF9yZWYzJGJyZWFrcG9pbnRzLFxuICAgICAgX3JlZjMkdHJhbnNmb3JtID0gX3JlZjMudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZjMkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjMkdHJhbnNmb3JtO1xuXG4gIHZhciBvdXRwdXQgPSBfZGVmaW5lUHJvcGVydHkoe30sIGNzc1Byb3BlcnR5LCBcIlwiLmNvbmNhdChtaW4pLmNvbmNhdCh1bml0KSk7XG5cbiAgdmFyIGZhY3RvciA9IChtYXggLSBtaW4pIC8gYnJlYWtwb2ludHNbYnJlYWtwb2ludHMubGVuZ3RoIC0gMV07XG4gIGJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGJyZWFrcG9pbnQpIHtcbiAgICB2YXIgdmFsdWUgPSBtaW4gKyBmYWN0b3IgKiBicmVha3BvaW50O1xuXG4gICAgaWYgKHRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIG91dHB1dFtcIkBtZWRpYSAobWluLXdpZHRoOlwiLmNvbmNhdChicmVha3BvaW50LCBcInB4KVwiKV0gPSBfZGVmaW5lUHJvcGVydHkoe30sIGNzc1Byb3BlcnR5LCBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKHZhbHVlICogMTAwMDApIC8gMTAwMDApLmNvbmNhdCh1bml0KSk7XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufSIsImltcG9ydCBjcmVhdGVUaGVtZSBmcm9tICcuL2NyZWF0ZVRoZW1lJztcbnZhciBkZWZhdWx0VGhlbWUgPSBjcmVhdGVUaGVtZSgpO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFRoZW1lOyIsImV4cG9ydCAqIGZyb20gJy4vY29sb3JNYW5pcHVsYXRvcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVRoZW1lLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJy4vY3JlYXRlVGhlbWUnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5zdGFibGVfY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lIH0gZnJvbSAnLi9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVTdHlsZXMgfSBmcm9tICcuL2NyZWF0ZVN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ha2VTdHlsZXMgfSBmcm9tICcuL21ha2VTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZXNwb25zaXZlRm9udFNpemVzIH0gZnJvbSAnLi9yZXNwb25zaXZlRm9udFNpemVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3R5bGVkIH0gZnJvbSAnLi9zdHlsZWQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0aW9ucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVRoZW1lIH0gZnJvbSAnLi91c2VUaGVtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhTdHlsZXMgfSBmcm9tICcuL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL3dpdGhUaGVtZSc7XG5leHBvcnQgeyBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSwganNzUHJlc2V0LCBTZXJ2ZXJTdHlsZVNoZWV0cywgU3R5bGVzUHJvdmlkZXIsIFRoZW1lUHJvdmlkZXIgYXMgTXVpVGhlbWVQcm92aWRlciwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyBhcyBtYWtlU3R5bGVzV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuXG5mdW5jdGlvbiBtYWtlU3R5bGVzKHN0eWxlc09yQ3JlYXRvcikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHJldHVybiBtYWtlU3R5bGVzV2l0aG91dERlZmF1bHQoc3R5bGVzT3JDcmVhdG9yLCBfZXh0ZW5kcyh7XG4gICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgfSwgb3B0aW9ucykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5pbXBvcnQgeyBpc1VuaXRsZXNzLCBjb252ZXJ0TGVuZ3RoLCByZXNwb25zaXZlUHJvcGVydHksIGFsaWduUHJvcGVydHksIGZvbnRHcmlkIH0gZnJvbSAnLi9jc3NVdGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNwb25zaXZlRm9udFNpemVzKHRoZW1lSW5wdXQpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX29wdGlvbnMkYnJlYWtwb2ludHMgPSBvcHRpb25zLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHMgPSBfb3B0aW9ucyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8gWydzbScsICdtZCcsICdsZyddIDogX29wdGlvbnMkYnJlYWtwb2ludHMsXG4gICAgICBfb3B0aW9ucyRkaXNhYmxlQWxpZ24gPSBvcHRpb25zLmRpc2FibGVBbGlnbixcbiAgICAgIGRpc2FibGVBbGlnbiA9IF9vcHRpb25zJGRpc2FibGVBbGlnbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRkaXNhYmxlQWxpZ24sXG4gICAgICBfb3B0aW9ucyRmYWN0b3IgPSBvcHRpb25zLmZhY3RvcixcbiAgICAgIGZhY3RvciA9IF9vcHRpb25zJGZhY3RvciA9PT0gdm9pZCAwID8gMiA6IF9vcHRpb25zJGZhY3RvcixcbiAgICAgIF9vcHRpb25zJHZhcmlhbnRzID0gb3B0aW9ucy52YXJpYW50cyxcbiAgICAgIHZhcmlhbnRzID0gX29wdGlvbnMkdmFyaWFudHMgPT09IHZvaWQgMCA/IFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnc3VidGl0bGUxJywgJ3N1YnRpdGxlMicsICdib2R5MScsICdib2R5MicsICdjYXB0aW9uJywgJ2J1dHRvbicsICdvdmVybGluZSddIDogX29wdGlvbnMkdmFyaWFudHM7XG5cbiAgdmFyIHRoZW1lID0gX2V4dGVuZHMoe30sIHRoZW1lSW5wdXQpO1xuXG4gIHRoZW1lLnR5cG9ncmFwaHkgPSBfZXh0ZW5kcyh7fSwgdGhlbWUudHlwb2dyYXBoeSk7XG4gIHZhciB0eXBvZ3JhcGh5ID0gdGhlbWUudHlwb2dyYXBoeTsgLy8gQ29udmVydCBiZXR3ZWVuIGNzcyBsZW5ndGhzIGUuZy4gZW0tPnB4IG9yIHB4LT5yZW1cbiAgLy8gU2V0IHRoZSBiYXNlRm9udFNpemUgZm9yIHlvdXIgcHJvamVjdC4gRGVmYXVsdHMgdG8gMTZweCAoYWxzbyB0aGUgYnJvd3NlciBkZWZhdWx0KS5cblxuICB2YXIgY29udmVydCA9IGNvbnZlcnRMZW5ndGgodHlwb2dyYXBoeS5odG1sRm9udFNpemUpO1xuICB2YXIgYnJlYWtwb2ludFZhbHVlcyA9IGJyZWFrcG9pbnRzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXNbeF07XG4gIH0pO1xuICB2YXJpYW50cy5mb3JFYWNoKGZ1bmN0aW9uICh2YXJpYW50KSB7XG4gICAgdmFyIHN0eWxlID0gdHlwb2dyYXBoeVt2YXJpYW50XTtcbiAgICB2YXIgcmVtRm9udFNpemUgPSBwYXJzZUZsb2F0KGNvbnZlcnQoc3R5bGUuZm9udFNpemUsICdyZW0nKSk7XG5cbiAgICBpZiAocmVtRm9udFNpemUgPD0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtYXhGb250U2l6ZSA9IHJlbUZvbnRTaXplO1xuICAgIHZhciBtaW5Gb250U2l6ZSA9IDEgKyAobWF4Rm9udFNpemUgLSAxKSAvIGZhY3RvcjtcbiAgICB2YXIgbGluZUhlaWdodCA9IHN0eWxlLmxpbmVIZWlnaHQ7XG5cbiAgICBpZiAoIWlzVW5pdGxlc3MobGluZUhlaWdodCkgJiYgIWRpc2FibGVBbGlnbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFVuc3VwcG9ydGVkIG5vbi11bml0bGVzcyBsaW5lIGhlaWdodCB3aXRoIGdyaWQgYWxpZ25tZW50LlxcblVzZSB1bml0bGVzcyBsaW5lIGhlaWdodHMgaW5zdGVhZC5cIiA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNikpO1xuICAgIH1cblxuICAgIGlmICghaXNVbml0bGVzcyhsaW5lSGVpZ2h0KSkge1xuICAgICAgLy8gbWFrZSBpdCB1bml0bGVzc1xuICAgICAgbGluZUhlaWdodCA9IHBhcnNlRmxvYXQoY29udmVydChsaW5lSGVpZ2h0LCAncmVtJykpIC8gcGFyc2VGbG9hdChyZW1Gb250U2l6ZSk7XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBpZiAoIWRpc2FibGVBbGlnbikge1xuICAgICAgdHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhbGlnblByb3BlcnR5KHtcbiAgICAgICAgICBzaXplOiB2YWx1ZSxcbiAgICAgICAgICBncmlkOiBmb250R3JpZCh7XG4gICAgICAgICAgICBwaXhlbHM6IDQsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0LFxuICAgICAgICAgICAgaHRtbEZvbnRTaXplOiB0eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0eXBvZ3JhcGh5W3ZhcmlhbnRdID0gX2V4dGVuZHMoe30sIHN0eWxlLCByZXNwb25zaXZlUHJvcGVydHkoe1xuICAgICAgY3NzUHJvcGVydHk6ICdmb250U2l6ZScsXG4gICAgICBtaW46IG1pbkZvbnRTaXplLFxuICAgICAgbWF4OiBtYXhGb250U2l6ZSxcbiAgICAgIHVuaXQ6ICdyZW0nLFxuICAgICAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRWYWx1ZXMsXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiB0aGVtZTtcbn0iLCJ2YXIgc2hhZG93S2V5VW1icmFPcGFjaXR5ID0gMC4yO1xudmFyIHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSA9IDAuMTQ7XG52YXIgc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkgPSAwLjEyO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkb3coKSB7XG4gIHJldHVybiBbXCJcIi5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzJdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAzID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzNdLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dLZXlVbWJyYU9wYWNpdHksIFwiKVwiKSwgXCJcIi5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA0ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzRdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA1ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzVdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA2ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzZdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA3ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzddLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHksIFwiKVwiKSwgXCJcIi5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA4ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzhdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA5ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzldLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAxMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxMF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDExID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzExXSwgXCJweCByZ2JhKDAsMCwwLFwiKS5jb25jYXQoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHksIFwiKVwiKV0uam9pbignLCcpO1xufSAvLyBWYWx1ZXMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL2JlODc0N2Y5NDU3NDY2OWNiNWU3YWRkMWE3YzU0ZmE0MWE4OWNlYzcvcGFja2FnZXMvbWRjLWVsZXZhdGlvbi9fdmFyaWFibGVzLnNjc3NcblxuXG52YXIgc2hhZG93cyA9IFsnbm9uZScsIGNyZWF0ZVNoYWRvdygwLCAyLCAxLCAtMSwgMCwgMSwgMSwgMCwgMCwgMSwgMywgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCAxLCAtMiwgMCwgMiwgMiwgMCwgMCwgMSwgNSwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCAzLCAtMiwgMCwgMywgNCwgMCwgMCwgMSwgOCwgMCksIGNyZWF0ZVNoYWRvdygwLCAyLCA0LCAtMSwgMCwgNCwgNSwgMCwgMCwgMSwgMTAsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgNSwgLTEsIDAsIDUsIDgsIDAsIDAsIDEsIDE0LCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDUsIC0xLCAwLCA2LCAxMCwgMCwgMCwgMSwgMTgsIDApLCBjcmVhdGVTaGFkb3coMCwgNCwgNSwgLTIsIDAsIDcsIDEwLCAxLCAwLCAyLCAxNiwgMSksIGNyZWF0ZVNoYWRvdygwLCA1LCA1LCAtMywgMCwgOCwgMTAsIDEsIDAsIDMsIDE0LCAyKSwgY3JlYXRlU2hhZG93KDAsIDUsIDYsIC0zLCAwLCA5LCAxMiwgMSwgMCwgMywgMTYsIDIpLCBjcmVhdGVTaGFkb3coMCwgNiwgNiwgLTMsIDAsIDEwLCAxNCwgMSwgMCwgNCwgMTgsIDMpLCBjcmVhdGVTaGFkb3coMCwgNiwgNywgLTQsIDAsIDExLCAxNSwgMSwgMCwgNCwgMjAsIDMpLCBjcmVhdGVTaGFkb3coMCwgNywgOCwgLTQsIDAsIDEyLCAxNywgMiwgMCwgNSwgMjIsIDQpLCBjcmVhdGVTaGFkb3coMCwgNywgOCwgLTQsIDAsIDEzLCAxOSwgMiwgMCwgNSwgMjQsIDQpLCBjcmVhdGVTaGFkb3coMCwgNywgOSwgLTQsIDAsIDE0LCAyMSwgMiwgMCwgNSwgMjYsIDQpLCBjcmVhdGVTaGFkb3coMCwgOCwgOSwgLTUsIDAsIDE1LCAyMiwgMiwgMCwgNiwgMjgsIDUpLCBjcmVhdGVTaGFkb3coMCwgOCwgMTAsIC01LCAwLCAxNiwgMjQsIDIsIDAsIDYsIDMwLCA1KSwgY3JlYXRlU2hhZG93KDAsIDgsIDExLCAtNSwgMCwgMTcsIDI2LCAyLCAwLCA2LCAzMiwgNSksIGNyZWF0ZVNoYWRvdygwLCA5LCAxMSwgLTUsIDAsIDE4LCAyOCwgMiwgMCwgNywgMzQsIDYpLCBjcmVhdGVTaGFkb3coMCwgOSwgMTIsIC02LCAwLCAxOSwgMjksIDIsIDAsIDcsIDM2LCA2KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxMywgLTYsIDAsIDIwLCAzMSwgMywgMCwgOCwgMzgsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDEzLCAtNiwgMCwgMjEsIDMzLCAzLCAwLCA4LCA0MCwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTQsIC02LCAwLCAyMiwgMzUsIDMsIDAsIDgsIDQyLCA3KSwgY3JlYXRlU2hhZG93KDAsIDExLCAxNCwgLTcsIDAsIDIzLCAzNiwgMywgMCwgOSwgNDQsIDgpLCBjcmVhdGVTaGFkb3coMCwgMTEsIDE1LCAtNywgMCwgMjQsIDM4LCAzLCAwLCA5LCA0NiwgOCldO1xuZXhwb3J0IGRlZmF1bHQgc2hhZG93czsiLCJ2YXIgc2hhcGUgPSB7XG4gIGJvcmRlclJhZGl1czogNFxufTtcbmV4cG9ydCBkZWZhdWx0IHNoYXBlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgc3R5bGVkIGFzIHN0eWxlZFdpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxudmFyIHN0eWxlZCA9IGZ1bmN0aW9uIHN0eWxlZChDb21wb25lbnQpIHtcbiAgdmFyIGNvbXBvbmVudENyZWF0b3IgPSBzdHlsZWRXaXRob3V0RGVmYXVsdChDb21wb25lbnQpO1xuICByZXR1cm4gZnVuY3Rpb24gKHN0eWxlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudENyZWF0b3Ioc3R5bGUsIF9leHRlbmRzKHtcbiAgICAgIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lXG4gICAgfSwgb3B0aW9ucykpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG4vLyBGb2xsb3cgaHR0cHM6Ly9tYXRlcmlhbC5nb29nbGUuY29tL21vdGlvbi9kdXJhdGlvbi1lYXNpbmcuaHRtbCNkdXJhdGlvbi1lYXNpbmctbmF0dXJhbC1lYXNpbmctY3VydmVzXG4vLyB0byBsZWFybiB0aGUgY29udGV4dCBpbiB3aGljaCBlYWNoIGVhc2luZyBzaG91bGQgYmUgdXNlZC5cbmV4cG9ydCB2YXIgZWFzaW5nID0ge1xuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGNvbW1vbiBlYXNpbmcgY3VydmUuXG4gIGVhc2VJbk91dDogJ2N1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSknLFxuICAvLyBPYmplY3RzIGVudGVyIHRoZSBzY3JlZW4gYXQgZnVsbCB2ZWxvY2l0eSBmcm9tIG9mZi1zY3JlZW4gYW5kXG4gIC8vIHNsb3dseSBkZWNlbGVyYXRlIHRvIGEgcmVzdGluZyBwb2ludC5cbiAgZWFzZU91dDogJ2N1YmljLWJlemllcigwLjAsIDAsIDAuMiwgMSknLFxuICAvLyBPYmplY3RzIGxlYXZlIHRoZSBzY3JlZW4gYXQgZnVsbCB2ZWxvY2l0eS4gVGhleSBkbyBub3QgZGVjZWxlcmF0ZSB3aGVuIG9mZi1zY3JlZW4uXG4gIGVhc2VJbjogJ2N1YmljLWJlemllcigwLjQsIDAsIDEsIDEpJyxcbiAgLy8gVGhlIHNoYXJwIGN1cnZlIGlzIHVzZWQgYnkgb2JqZWN0cyB0aGF0IG1heSByZXR1cm4gdG8gdGhlIHNjcmVlbiBhdCBhbnkgdGltZS5cbiAgc2hhcnA6ICdjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpJ1xufTsgLy8gRm9sbG93IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tb3Rpb24vZHVyYXRpb24tZWFzaW5nLmh0bWwjZHVyYXRpb24tZWFzaW5nLWNvbW1vbi1kdXJhdGlvbnNcbi8vIHRvIGxlYXJuIHdoZW4gdXNlIHdoYXQgdGltaW5nXG5cbmV4cG9ydCB2YXIgZHVyYXRpb24gPSB7XG4gIHNob3J0ZXN0OiAxNTAsXG4gIHNob3J0ZXI6IDIwMCxcbiAgc2hvcnQ6IDI1MCxcbiAgLy8gbW9zdCBiYXNpYyByZWNvbW1lbmRlZCB0aW1pbmdcbiAgc3RhbmRhcmQ6IDMwMCxcbiAgLy8gdGhpcyBpcyB0byBiZSB1c2VkIGluIGNvbXBsZXggYW5pbWF0aW9uc1xuICBjb21wbGV4OiAzNzUsXG4gIC8vIHJlY29tbWVuZGVkIHdoZW4gc29tZXRoaW5nIGlzIGVudGVyaW5nIHNjcmVlblxuICBlbnRlcmluZ1NjcmVlbjogMjI1LFxuICAvLyByZWNvbW1lbmRlZCB3aGVuIHNvbWV0aGluZyBpcyBsZWF2aW5nIHNjcmVlblxuICBsZWF2aW5nU2NyZWVuOiAxOTVcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdE1zKG1pbGxpc2Vjb25kcykge1xuICByZXR1cm4gXCJcIi5jb25jYXQoTWF0aC5yb3VuZChtaWxsaXNlY29uZHMpLCBcIm1zXCIpO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbVxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtLnByb3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbS5kdXJhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtLmVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLmRlbGF5XG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGVhc2luZzogZWFzaW5nLFxuICBkdXJhdGlvbjogZHVyYXRpb24sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWydhbGwnXTtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICB2YXIgX29wdGlvbnMkZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uLFxuICAgICAgICBkdXJhdGlvbk9wdGlvbiA9IF9vcHRpb25zJGR1cmF0aW9uID09PSB2b2lkIDAgPyBkdXJhdGlvbi5zdGFuZGFyZCA6IF9vcHRpb25zJGR1cmF0aW9uLFxuICAgICAgICBfb3B0aW9ucyRlYXNpbmcgPSBvcHRpb25zLmVhc2luZyxcbiAgICAgICAgZWFzaW5nT3B0aW9uID0gX29wdGlvbnMkZWFzaW5nID09PSB2b2lkIDAgPyBlYXNpbmcuZWFzZUluT3V0IDogX29wdGlvbnMkZWFzaW5nLFxuICAgICAgICBfb3B0aW9ucyRkZWxheSA9IG9wdGlvbnMuZGVsYXksXG4gICAgICAgIGRlbGF5ID0gX29wdGlvbnMkZGVsYXkgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRkZWxheSxcbiAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgW1wiZHVyYXRpb25cIiwgXCJlYXNpbmdcIiwgXCJkZWxheVwiXSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gICAgICB9O1xuXG4gICAgICB2YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghaXNTdHJpbmcocHJvcHMpICYmICFBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJwcm9wc1wiIG11c3QgYmUgYSBzdHJpbmcgb3IgQXJyYXkuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOdW1iZXIoZHVyYXRpb25PcHRpb24pICYmICFpc1N0cmluZyhkdXJhdGlvbk9wdGlvbikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBBcmd1bWVudCBcXFwiZHVyYXRpb25cXFwiIG11c3QgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcgYnV0IGZvdW5kIFwiLmNvbmNhdChkdXJhdGlvbk9wdGlvbiwgXCIuXCIpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1N0cmluZyhlYXNpbmdPcHRpb24pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcImVhc2luZ1wiIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOdW1iZXIoZGVsYXkpICYmICFpc1N0cmluZyhkZWxheSkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwiZGVsYXlcIiBtdXN0IGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMob3RoZXIpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFVucmVjb2duaXplZCBhcmd1bWVudChzKSBbXCIuY29uY2F0KE9iamVjdC5rZXlzKG90aGVyKS5qb2luKCcsJyksIFwiXS5cIikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoQXJyYXkuaXNBcnJheShwcm9wcykgPyBwcm9wcyA6IFtwcm9wc10pLm1hcChmdW5jdGlvbiAoYW5pbWF0ZWRQcm9wKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoYW5pbWF0ZWRQcm9wLCBcIiBcIikuY29uY2F0KHR5cGVvZiBkdXJhdGlvbk9wdGlvbiA9PT0gJ3N0cmluZycgPyBkdXJhdGlvbk9wdGlvbiA6IGZvcm1hdE1zKGR1cmF0aW9uT3B0aW9uKSwgXCIgXCIpLmNvbmNhdChlYXNpbmdPcHRpb24sIFwiIFwiKS5jb25jYXQodHlwZW9mIGRlbGF5ID09PSAnc3RyaW5nJyA/IGRlbGF5IDogZm9ybWF0TXMoZGVsYXkpKTtcbiAgICB9KS5qb2luKCcsJyk7XG4gIH0sXG4gIGdldEF1dG9IZWlnaHREdXJhdGlvbjogZnVuY3Rpb24gZ2V0QXV0b0hlaWdodER1cmF0aW9uKGhlaWdodCkge1xuICAgIGlmICghaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgY29uc3RhbnQgPSBoZWlnaHQgLyAzNjsgLy8gaHR0cHM6Ly93d3cud29sZnJhbWFscGhhLmNvbS9pbnB1dC8/aT0oNCslMkIrMTUrKisoeCslMkYrMzYrKSsqKiswLjI1KyUyQisoeCslMkYrMzYpKyUyRis1KSsqKzEwXG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoNCArIDE1ICogTWF0aC5wb3coY29uc3RhbnQsIDAuMjUpICsgY29uc3RhbnQgLyA1KSAqIDEwKTtcbiAgfVxufTsiLCJpbXBvcnQgeyB1c2VUaGVtZSBhcyB1c2VUaGVtZVdpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgdmFyIHRoZW1lID0gdXNlVGhlbWVXaXRob3V0RGVmYXVsdCgpIHx8IGRlZmF1bHRUaGVtZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUodGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW1lO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyBhcyB3aXRoU3R5bGVzV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGVzKHN0eWxlc09yQ3JlYXRvciwgb3B0aW9ucykge1xuICByZXR1cm4gd2l0aFN0eWxlc1dpdGhvdXREZWZhdWx0KHN0eWxlc09yQ3JlYXRvciwgX2V4dGVuZHMoe1xuICAgIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lXG4gIH0sIG9wdGlvbnMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlczsiLCJpbXBvcnQgeyB3aXRoVGhlbWVDcmVhdG9yIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcbnZhciB3aXRoVGhlbWUgPSB3aXRoVGhlbWVDcmVhdG9yKHtcbiAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lOyIsIi8vIFdlIG5lZWQgdG8gY2VudHJhbGl6ZSB0aGUgekluZGV4IGRlZmluaXRpb25zIGFzIHRoZXkgd29ya1xuLy8gbGlrZSBnbG9iYWwgdmFsdWVzIGluIHRoZSBicm93c2VyLlxudmFyIHpJbmRleCA9IHtcbiAgbW9iaWxlU3RlcHBlcjogMTAwMCxcbiAgc3BlZWREaWFsOiAxMDUwLFxuICBhcHBCYXI6IDExMDAsXG4gIGRyYXdlcjogMTIwMCxcbiAgbW9kYWw6IDEzMDAsXG4gIHNuYWNrYmFyOiAxNDAwLFxuICB0b29sdGlwOiAxNTAwXG59O1xuZXhwb3J0IGRlZmF1bHQgekluZGV4OyIsImNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT5cclxuICBmZXRjaCguLi5hcmdzKS50aGVuKGFzeW5jIChyKSA9PiB7XHJcbiAgICBpZiAoci5vaykgcmV0dXJuIHIuanNvbigpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCB7IFNXUkNvbmZpZyB9IGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcclxuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uL1V0aWxzL2ZldGNoZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XHJcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzcy1zZXJ2ZXItc2lkZVwiKTtcclxuICAgIGlmIChqc3NTdHlsZXMpIHtcclxuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TW9uZ29EQiBUZXN0PC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPFNXUkNvbmZpZyB2YWx1ZT17eyByZWZyZXNoSW50ZXJ2YWw6IDUwMDAsIGZldGNoZXIgfX0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9TV1JDb25maWc+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbk15QXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbi8vIGRlY2xhcmUgbW9kdWxlIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZVBhbGV0dGVcIiB7XHJcbi8vICAgaW50ZXJmYWNlIFBhbGV0dGUge1xyXG4vLyAgICAgc3VyZmFjZToge1xyXG4vLyAgICAgICB3aGl0ZTogc3RyaW5nO1xyXG4vLyAgICAgICBzZW1pV2hpdGU6IHN0cmluZztcclxuLy8gICAgICAgYmxhY2s6IHN0cmluZztcclxuLy8gICAgICAgbGlnaHRHcmV5OiBzdHJpbmc7XHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuLy8gICBpbnRlcmZhY2UgUGFsZXR0ZU9wdGlvbnMge1xyXG4vLyAgICAgc3VyZmFjZT86IHtcclxuLy8gICAgICAgd2hpdGU6IHN0cmluZztcclxuLy8gICAgICAgc2VtaVdoaXRlOiBzdHJpbmc7XHJcbi8vICAgICAgIGJsYWNrOiBzdHJpbmc7XHJcbi8vICAgICAgIGxpZ2h0R3JleTogc3RyaW5nO1xyXG4vLyAgICAgfTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGRlY2xhcmUgbW9kdWxlIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZVR5cG9ncmFwaHlcIiB7XHJcbi8vICAgaW50ZXJmYWNlIFR5cG9ncmFwaHlPcHRpb25zIHtcclxuLy8gICAgIGJvZHlYU21hbGw6IFR5cG9ncmFwaHlTdHlsZTtcclxuLy8gICB9XHJcbi8vICAgaW50ZXJmYWNlIFR5cG9ncmFwaHlPcHRpb25zIHtcclxuLy8gICAgIGJvZHlYWFNtYWxsOiBUeXBvZ3JhcGh5U3R5bGU7XHJcbi8vICAgfVxyXG4vLyAgIGludGVyZmFjZSBUeXBvZ3JhcGh5IHtcclxuLy8gICAgIGJvZHlYU21hbGw6IFR5cG9ncmFwaHlPcHRpb25zO1xyXG4vLyAgIH1cclxuLy8gICBpbnRlcmZhY2UgVHlwb2dyYXBoeSB7XHJcbi8vICAgICBib2R5WFhTbWFsbDogVHlwb2dyYXBoeU9wdGlvbnM7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46IFwiIzNBRDA3NlwiLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiBcIiNGODUwNTBcIixcclxuICAgIH0sXHJcbiAgICBzdXJmYWNlOiB7XHJcbiAgICAgIHdoaXRlOiBcIiNGRkZGRkZcIixcclxuICAgICAgc2VtaVdoaXRlOiBcIiNGQUZBRkFcIixcclxuICAgICAgYmxhY2s6IFwiIzM5MzkzOVwiLFxyXG4gICAgICBsaWdodEdyZXk6IFwiIzZBNkE2QVwiLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogXCIjMkEyQTJBXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcclxuICAgIGgxOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjQ4LjgzcHhcIixcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250U2l6ZTogXCIzOS4wNnB4XCIsXHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFNpemU6IFwiMzEuMjVweFwiLFxyXG4gICAgfSxcclxuICAgIGg0OiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjI1cHhcIixcclxuICAgIH0sXHJcbiAgICBoNToge1xyXG4gICAgICBmb250U2l6ZTogXCIyMnB4XCIsXHJcbiAgICB9LFxyXG4gICAgaDY6IHtcclxuICAgICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgfSxcclxuICAgIGJvZHkxOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgIH0sXHJcbiAgICBib2R5WFNtYWxsOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcclxuICAgIH0sXHJcbiAgICBib2R5WFhTbWFsbDoge1xyXG4gICAgICBmb250U2l6ZTogXCIxMHB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59Il0sIm5hbWVzIjpbImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwiciIsIm9rIiwianNvbiIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiSGVhZCIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIlNXUkNvbmZpZyIsInRoZW1lIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInJlZnJlc2hJbnRlcnZhbCIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImNyZWF0ZVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5Iiwic3VyZmFjZSIsIndoaXRlIiwic2VtaVdoaXRlIiwiYmxhY2siLCJsaWdodEdyZXkiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwiaDEiLCJmb250U2l6ZSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJib2R5MSIsImJvZHlYU21hbGwiLCJib2R5WFhTbWFsbCJdLCJzb3VyY2VSb290IjoiIn0=