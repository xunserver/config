## 功能

添加了 commitlint 配置，通过 husky 配合实现 pre-commit 时检查 commit message 是否按照格式编写

## 安装

> npm i -D @xunserver/commitlint-config

或者使用@xunserver/cli 包提供的`xs add lint` 引导安装

## 使用

```js
// .commitlintrc.js
module.exports = {
  extends: ['@xunserver/commitlint-config'],
};
```

## 说明

- build : 改变了 build 工具 如 webpack
- ci : 持续集成新增
- chore : 构建过程或辅助工具的变动
- feat : 新功能
- docs : 文档改变
- fix : 修复 bug
- perf : 性能优化
- refactor : 某个已有功能重构
- revert : 撤销上一次的 commit
- style : 代码格式改变
- test : 增加测试
- anno: 增加注释
