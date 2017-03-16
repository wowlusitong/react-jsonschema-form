"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
function processValue(_ref, value) {
  var type = _ref.type,
      items = _ref.items;

  if (value === "") {
    return undefined;
  } else if (type === "array" && items && ["number", "integer"].includes(items.type)) {
    return value.map(_utils.asNumber);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return (0, _utils.asNumber)(value);
  }
  return value;
}

function getValue(event, multiple) {
  if (multiple) {
    return [].slice.call(event.target.options).filter(function (o) {
      return o.selected;
    }).map(function (o) {
      return o.value;
    });
  } else {
    return event.target.value;
  }
}

function SelectWidget(props) {
  var schema = props.schema,
      id = props.id,
      options = props.options,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      multiple = props.multiple,
      autofocus = props.autofocus,
      _onChange = props.onChange,
      onBlur = props.onBlur,
      placeholder = props.placeholder;
  var enumOptions = options.enumOptions;

  var emptyValue = multiple ? [] : "";
  return _react2.default.createElement(
    "select",
    {
      id: id,
      multiple: multiple,
      className: "form-control",
      value: typeof value === "undefined" ? emptyValue : value,
      required: required,
      disabled: disabled,
      readOnly: readonly,
      autoFocus: autofocus,
      onBlur: onBlur && function (event) {
        var newValue = getValue(event, multiple);
        onBlur(id, processValue(schema, newValue));
      },
      onChange: function onChange(event) {
        var newValue = getValue(event, multiple);
        _onChange(processValue(schema, newValue));
      } },
    !multiple && !schema.default && _react2.default.createElement(
      "option",
      { value: "" },
      placeholder
    ),
    enumOptions.map(function (_ref2, i) {
      var value = _ref2.value,
          label = _ref2.label;

      return _react2.default.createElement(
        "option",
        { key: i, value: value },
        label
      );
    })
  );
}

SelectWidget.defaultProps = {
  autofocus: false
};

if (process.env.NODE_ENV !== "production") {
  SelectWidget.propTypes = {
    schema: _react.PropTypes.object.isRequired,
    id: _react.PropTypes.string.isRequired,
    options: _react.PropTypes.shape({
      enumOptions: _react.PropTypes.array
    }).isRequired,
    value: _react.PropTypes.any,
    required: _react.PropTypes.bool,
    multiple: _react.PropTypes.bool,
    autofocus: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    onBlur: _react.PropTypes.func
  };
}

exports.default = SelectWidget;