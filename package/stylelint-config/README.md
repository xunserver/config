## 功能

支持在 html、vue 中 lint css、less、scss 规则。包含 css 属性的排序。

## 安装

> npm i -D @xunserver/stylelint-config

或者使用@xunserver/cli 中提供的 `xs add lint` 引导安装

## 使用

```js
// .stylelintrc.js
module.exports = {
    // 根据条件选择一个
    extends: ['@xunserver/stylelint-config/css'] // css
    extends: ['@xunserver/stylelint-config/less'] // less
    extends: ['@xunserver/stylelint-config/scss'] // scss
    extends: ['@xunserver/stylelint-config/vue'] // vue 默认支持less和scss
}
```
