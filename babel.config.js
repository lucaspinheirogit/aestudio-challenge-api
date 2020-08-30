module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': './src/config',
          '@modules': './src/modules',
          '@services': './src/services'
        }
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }]
  ],
  ignore: ['**/*.spec.ts']
}
