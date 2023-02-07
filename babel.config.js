module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString('process');
          },
        },
      };
    },
  ],
};
