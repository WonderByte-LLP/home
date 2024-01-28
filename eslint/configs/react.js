module.exports = {
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/no-multi-comp': 0,
    'react/require-default-props': [2, { forbidDefaultForRequired: true }],
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
