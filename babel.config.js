module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    ['react-native-reanimated/plugin'],
    ['transform-remove-console', { exclude: ['error', 'warn'] }],
    ['@babel/plugin-transform-react-constant-elements'],
    ['@babel/plugin-transform-react-inline-elements'],
    ['babel-plugin-transform-inline-environment-variables'],
    ['@babel/plugin-transform-react-pure-annotations'],
    ['babel-plugin-dev-expression'],
  ],
  env: {
    production: {
      plugins: [
        ['transform-remove-console', { exclude: ['error', 'warn'] }],
        ['@babel/plugin-transform-react-constant-elements'],
        ['@babel/plugin-transform-react-inline-elements'],
      ],
    },
  },
};
