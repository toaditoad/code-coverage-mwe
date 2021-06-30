module.exports = {
    root: true,
    env: {
        node: true,
    },
    plugins: ['prettier'],
    extends: [
        'plugin:vue/recommended',
        'plugin:cypress/recommended',
        'eslint:recommended',
        '@vue/airbnb',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'import/no-extraneous-dependencies': 'off',
        'no-param-reassign': [2, {props: false}],
        'no-shadow': 'off',
        'vue/attribute-hyphenation': 'off',
    },

    overrides: [
        {
            files: ['**/src/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};
