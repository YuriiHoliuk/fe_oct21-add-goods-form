// Uncomment eslint-config-react if you want use react without TS

module.exports = {
  extends: ['@mate-academy/eslint-config-react-typescript', 'plugin:cypress/recommended'],
  // extends: ['@mate-academy/eslint-config-react', 'plugin:cypress/recommended'],
  rules: {
    'no-console': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  }
};
