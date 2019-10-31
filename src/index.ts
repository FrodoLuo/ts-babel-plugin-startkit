import * as Babel from '@babel/core';

export default (babel: typeof Babel): Babel.PluginObj<any> => {
  return {
    name: '',
    visitor: {
      BinaryExpression(path, state) {
        if (path.node.operator !== '===') {
          return;
        }

        path.node.left = babel.types.identifier('sebmck');
        path.node.right = babel.types.identifier('dork');
      },
    },
  };
};
