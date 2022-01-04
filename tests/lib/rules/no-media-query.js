"use strict";

const { errors } = require("../../../constants");

const valid = `
  const styledDiv = styled.div\`
    color: black;
  \`
`;

const case1 = `
  const styledDiv = styled.div\`
    @media screen and (min-width: 450px) {
      color: black;
    }
  \`
`;

const rule = require("../../../lib/rules/no-media-query"),
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

ruleTester.run("no-media-query", rule, {
  valid: [valid],

  invalid: [
    {
      code: case1,
      errors: [
        {
          message: errors.noMediaQuery,
        },
      ],
    },
  ],
});
