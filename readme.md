# get-module-name [![Build Status](https://travis-ci.org/chinanf-boy/get-module-name.svg?branch=master)](https://travis-ci.org/chinanf-boy/get-module-name)

> just get module name

## Install



```
npm install get-module-name
```

```
yarn add get-module-name
```




## Usage

```js
const getname = require('get-module-name');
// process.cwd() package.json name

await getname() // Promise
getname.sync() // sync
```


## API

### getname

 name: | getname
---------|----------
Type: | `function:Promise`
Desc: | return package.json name

##### sync

 name: | sync
---------|----------
Type: | `function`
Desc: | return package.json name

## With

- [pkg-conf](https://github.com/sindresorhus/pkg-conf)

> pkg name return Object, so ,i change String Type

## License

MIT © [chinanf-boy](http://llever.com)
