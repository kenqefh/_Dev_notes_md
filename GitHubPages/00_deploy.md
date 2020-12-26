```sh
npm install gh-pages --save-dev
```

### For react Apps

- Add in `package.json` the following:

```shell
{
  "homepage": "http://kenqefh.github.io/fb-home",
  ...
},
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  # When make changes use the folowing instead the last one:
  "deploy": "gh-pages -b master -d build",
  ...
},

```

- Make your commits..

## Deploy

```shell
# maybe we need to run: yarn install
npm run deploy
```
