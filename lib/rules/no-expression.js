"use strict";

const { isStyledComponent } = require("../../functions")
const { errors } = require("../../constants")

module.exports = {
  meta: {
    type: "suggestion",
    schema: []
  },
  create: (context) => {
    return {
      Identifier: (node) => {
        if (node.parent.type == "TemplateLiteral") {
          const taggedTemplate = node.parent.parent
          if (taggedTemplate.type === "TaggedTemplateExpression") {
            if (isStyledComponent(taggedTemplate)) {
              context.report({
                node,
                message: errors.noExpression,
              });
            }
          }
        }
      },
      ArrowFunctionExpression: (node) => {
        if (node.parent.type == "TemplateLiteral") {
          const taggedTemplate = node.parent.parent
          if (taggedTemplate.type === "TaggedTemplateExpression") {
            if (isStyledComponent(taggedTemplate)) {
              context.report({
                node,
                message: errors.noExpression,
              });
            }
          }
        }
      },
    };
  },
};
