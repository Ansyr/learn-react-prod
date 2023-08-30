module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        'plugin:@typescript-eslint/recommended',
        "plugin:i18next/recommended"
    ],
    overrides: [
        {
            env: {
                "node": true
            },
            files: [
                ".eslintrc.{js,cjs}",
                '**/src/**/*.test.{ts,tsx}'
            ],
            rules: {
                "i18next/no-literal-string": "off"
            },
            parserOptions: {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    rules: {
        "react/jsx-indent":[2,4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx",".tsx"] }],
        "import/no-unresolved": 'off',
        "indent": [2,4],
        "no-unused-vars": 'warn',
        "i18next/no-literal-string": ['error',{markupOnly: true}],
        "max-len":['error',150,{ignoreComments: true}],
    },
    globals: {
        '__IS_DEV__': true
    },
}

