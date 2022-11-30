module.exports = {
  extends: [
    'eslint:recommended', // 官方标准规则
    'standard', // eslint-config-standard 稍微严格的规则
    // "plugin:prettier/recommended",
    'prettier', // 关闭eslint和prettier冲突的选项
  ],
};
