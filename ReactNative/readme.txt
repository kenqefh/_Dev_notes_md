$ react-native init nameProject

├── src
│   ├── assets
│   │  ├── fonts
│   │  ├── images
│   ├── components
│   │  ├── atoms
│   │  ├── molecules
│   │  ├── organisms
│   ├── navigations
│   ├── scenes
│   ├── services
│   ├── styles
│   ├── utils
│   ├── index.js

yarn add -D eslint-import-resolver-babel-module eslint-plugin-import babel-plugin-module-resolver

install icons
npm install --save react-native-vector-icons
react-native link


If you are sure the module exists, try these steps:
1. Clear watchman watches: watchman watch-del-all
2. Delete node_modules: rm -rf node_modules and run yarn install
3. Reset Metro's cache: yarn start --reset-cache
4. Remove the cache: rm -rf /tmp/metro-* 