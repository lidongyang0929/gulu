// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"wFXB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  props: ['name']
};
exports.default = _default;
        var $2a07ee = exports.default || module.exports;
      
      if (typeof $2a07ee === 'function') {
        $2a07ee = $2a07ee.options;
      }
    
        /* template */
        Object.assign($2a07ee, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"g-icon"},[_c('use',{attrs:{"xlink:href":("#icon-" + _vm.name)}})])}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"iM1m":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _icon = _interopRequireDefault(require("./icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  components: {
    'g-icon': _icon.default
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return value === 'left' || value === 'right';
      }
    }
  }
};
exports.default = _default;
        var $5df371 = exports.default || module.exports;
      
      if (typeof $5df371 === 'function') {
        $5df371 = $5df371.options;
      }
    
        /* template */
        Object.assign($5df371, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"g-button",class:("icon-" + _vm.iconPosition),on:{"click":function($event){return _vm.$emit('click')}}},[(_vm.icon && !_vm.loading)?_c('g-icon',{staticClass:"icon",attrs:{"name":_vm.icon}}):_vm._e(),_vm._v(" "),(_vm.loading)?_c('g-icon',{staticClass:"loading icon",attrs:{"name":"loading"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"wrapper"},[_vm._t("default")],2)],1)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./icon":"wFXB"}],"h0wh":[function(require,module,exports) {
//
//
//
//
//
        var $dfec5f = exports.default || module.exports;
      
      if (typeof $dfec5f === 'function') {
        $dfec5f = $dfec5f.options;
      }
    
        /* template */
        Object.assign($dfec5f, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"g-button-group"},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _button.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function () {
    return _icon.default;
  }
});
Object.defineProperty(exports, "ButtonGroup", {
  enumerable: true,
  get: function () {
    return _buttonGroup.default;
  }
});

var _button = _interopRequireDefault(require("./src/button"));

var _icon = _interopRequireDefault(require("./src/icon"));

var _buttonGroup = _interopRequireDefault(require("./src/button-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./src/button":"iM1m","./src/icon":"wFXB","./src/button-group":"h0wh"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map