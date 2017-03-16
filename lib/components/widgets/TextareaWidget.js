"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TextareaWidget(props) {
  var id = props.id,
      options = props.options,
      placeholder = props.placeholder,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur;

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;

    return onChange(value === "" ? undefined : value);
  };
  return _react2.default.createElement("textarea", {
    id: id,
    className: "form-control",
    value: typeof value === "undefined" ? "" : value,
    placeholder: placeholder,
    required: required,
    disabled: disabled,
    readOnly: readonly,
    autoFocus: autofocus,
    rows: options.rows,
    onBlur: onBlur && function (event) {
      return onBlur(id, event.target.value);
    },
    onChange: _onChange
  });
}

TextareaWidget.defaultProps = {
  autofocus: false,
  options: {}
};

if (process.env.NODE_ENV !== "production") {
  TextareaWidget.propTypes = {
    schema: _react.PropTypes.object.isRequired,
    id: _react.PropTypes.string.isRequired,
    placeholder: _react.PropTypes.string,
    options: _react.PropTypes.shape({
      rows: _react.PropTypes.number
    }),
    value: _react.PropTypes.string,
    required: _react.PropTypes.bool,
    autofocus: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    onBlur: _react.PropTypes.func
  };
}

exports.default = TextareaWidget;