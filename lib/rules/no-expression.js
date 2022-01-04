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
      TaggedTemplateExpression: (node) => {
        if (isStyledComponent(node)) {
          if (node.quasi.expressions.length > 0) {
            context.report({
              node,
              message: errors.noExpression,
            });
          }
        }
      }
    };
  },
};
