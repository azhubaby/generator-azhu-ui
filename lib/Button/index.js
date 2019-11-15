"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _default =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(_default, _React$Component);

  function _default() {
    (0, _classCallCheck2["default"])(this, _default);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_default).apply(this, arguments));
  }

  (0, _createClass2["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          disabled = _this$props.disabled,
          size = _this$props.size,
          children = _this$props.children,
          onClick = _this$props.onClick;

      var _classType = "azhu-btn-".concat(type);

      var _classSize = "azhu-btn-".concat(size);

      var _class = "azhu-btn ".concat(_classType, " ").concat(_classSize);

      return _react["default"].createElement("button", {
        onClick: onClick,
        disabled: disabled,
        className: _class
      }, children);
    }
  }]);
  return _default;
}(_react["default"].Component);

exports["default"] = _default;
_default.propTypes = {
  type: _propTypes["default"].oneOf(["primary", "default", "danger"]),
  disabled: _propTypes["default"].oneOf([true, false]),
  size: _propTypes["default"].oneOf(["md", "lg", "sm"])
};
_default.defaultProps = {
  type: "default",
  disabled: false,
  size: "md"
};
module.exports = exports.default;