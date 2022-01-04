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
          if (node.quasi.quasis.some(template => template.value.raw.includes('@media'))) {
            context.report({
              node,
              message: errors.noMediaQuery,
            });
          }
        }
      }
    };
  },
};
