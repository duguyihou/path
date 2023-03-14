module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
          components: './src/components',
          routes: './src/routes',
          providers: './src/providers',
          features: './src/features',
          screens: './src/screens',
          types: './src/types',
          shared: './src/shared',
          utils: './src/utils',
        },
      },
    ],
  ],
};
