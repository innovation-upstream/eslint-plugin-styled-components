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
      TemplateElement: (node) => {
        if (!node.value.raw.includes('@media')) {
          return
        }
        const taggedTemplate = node.parent.parent
        if (taggedTemplate.type === "TaggedTemplateExpression") {
          if (isStyledComponent(taggedTemplate)) {
            context.report({
              node,
              message: errors.noMediaQuery,
            });
          }
        }
      },
    };
  },
};
