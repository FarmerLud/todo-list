# eslint + prettier
> npm init @eslint/config
> npm install -D eslint-plugin-jsx-a11y
> npm install -D prettier eslint-plugin-prettier eslint-config-prettier

* instalar estensiones de Vscode ESLint y Prettier
* Agregar en .eslintrc.json
```
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "prettier",
        "jsx-a11y",
        "react-hooks",
        "@typescript-eslint"
    ],
    "rules": {
        "eqeqeq": "error",
        "no-undef": "off",
        "no-unused-vars": "off",
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": "off"
    }
}
```

* Verificar en las configuraciones de Vscode
```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true 
},
```

## Para @aliasses
npm i -D @types/node

vite.config.ts:
// also don't forget to `npm i -D @types/node`, so __dirname won't complain
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})