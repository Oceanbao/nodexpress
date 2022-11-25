# TS Node Kit

**Installation:**

```sh
# Core
npm i -D typescript
npm i -D @types/node
npm install --save-dev ts-node nodemon

# Linter and Formatter
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

# Git Hooks
npm install husky --save-dev
npm i -D lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"

# Express
npm i -S express
npm i -D @types/express

# Test
npm i -D jest @types/jest ts-jest
npm i -D supertest @types/supertest
```
