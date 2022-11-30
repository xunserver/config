const { resolve } = require('path');
const c = (file) => resolve(__dirname, './config', file);

module.exports = {
  config: {
    recommended: c('recommended'),
    base: c('base'),
    vue3: c('vue3'),
    typescript: c('typescript'),
  },
};
