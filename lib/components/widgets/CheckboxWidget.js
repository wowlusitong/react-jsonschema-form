"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _DescriptionField = require("../fields/DescriptionField.js");

var _DescriptionField2 = _interopRequireDefault(_DescriptionField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckboxWidget(props) {
  var schema = props.schema,
      id = props.id,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      label = props.label,
      autofocus = props.autofocus,
      _onChange = props.onChange;

  return _react2.default.createElement(
    "div",
    { className: "checkbox " + (disabled ? "disabled" : "") },
    schema.description && _react2.default.createElement(_DescriptionField2.default, { description: schema.description }),
    _react2.default.createElement(
      "label",
      null,
      _react2.default.createElement("input", {
        type: "checkbox",
        id: id,
        checked: typeof value === "undefined" ? false : value,
        required: required,
        disabled: disabled,
        autoFocus: autofocus,
        onChange: function onChange(event) {
          return _onChange(event.target.checked);
        }
      }),
      _react2.default.createElement(
        "span",
        null,
        label
      )
    )
  );
}

CheckboxWidget.defaultProps = {
  autofocus: false
};

if (process.env.NODE_ENV !== "production") {
  CheckboxWidget.propTypes = {
    schema: _react.PropTypes.object.isRequired,
    id: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.bool,
    required: _react.PropTypes.bool,
    autofocus: _react.PropTypes.bool,
    onChange: _react.PropTypes.func
  };
}

exports.default = CheckboxWidget;