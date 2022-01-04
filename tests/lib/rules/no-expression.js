"use strict";

const { errors } = require("../../../constants");

const valid = `
  const styledDiv = styled.div\`
    color: black;
  \`
`;

const case1 = `
  const styledDiv = styled.div\`
    \${({ theme }) => theme.mediaQueries.sm} {
      color: black;
    }
  \`
`;

const case2 = `
  const styledDiv = styled(Card)\`
    \${({ theme: { mediaQueries } }) => css\`
      padding: 20px;
      \${mediaQueries} {
        padding: 50px;
      }\`
    }
  \`
`;

const rule = require("../../../lib/rules/no-expression"),
  RuleTester = require("eslint").RuleTester;
RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

const ruleTester = new RuleTester();

ruleTester.run("no-expression", rule, {
  valid: [valid],

  invalid: [
    {
      code: case1,
      errors: [
        {
          message: errors.noExpression,
        },
      ],
    },
    {
      code: case2,
      errors: [
        {
          message: errors.noExpression,
        },
      ],
    },
  ],
});
