module.exports = {
  env: {
    node: true
  },
  extends: ['airbnb-base'],
  rules: {
    'arrow-body-style': [2, 'always'],
    'arrow-parens': [2, 'always'],
    'comma-dangle': [2, 'never'],
    'class-methods-use-this': 'off',
    'no-param-reassign': [2, { props: false }], // http://eslint.org/docs/rules/no-param-reassign
    'no-underscore-dangle': 'off',
    'no-useless-escape': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',

    'max-len': [2, 120, 2, { // https://github.com/eslint/eslint/blob/master/docs/rules/max-len.md
      ignoreUrls: true,
      ignoreComments: false
    }],

    complexity: ['error', 20],
    'max-depth': ['error', 4],
    'max-statements-per-line': 2,
    'no-multiple-empty-lines': 2,

    'valid-jsdoc': [2, {
      requireReturn: false,
      requireReturnDescription: false, // Avoid forcing useless descriptions
      requireParamDescription: false, // Avoid forcing useless descriptions
      prefer: {
        return: 'returns'
      },
      preferType: {
        Integer: 'Number',
        string: 'String',
        boolean: 'Boolean',
        bool: 'Boolean',
        object: 'Object',
        array: 'Array'
      }
    }]
  }
};
