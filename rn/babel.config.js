module.exports = {
  presets: ['module:@react-native/babel-preset','nativewind/babel'],
  plugins: [
    ['module-resolver',
      {
        alias: {
          '@thankrain/cross-core': '../core',
        },
      },
    ],
  ],
};
