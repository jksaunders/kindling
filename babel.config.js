// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  let presets = [];

  if (api.env('production')) {
    presets = [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ];
  } else {
    presets = [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ];
  }

  return {
    plugins: [
      'babel-plugin-styled-components',
      '@babel/plugin-proposal-optional-chaining',
    ],
    presets,
  };
};
