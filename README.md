# Angular Rome

An Angular directive wrapping [Rome](http://bevacqua.github.io/rome/).

## Installation

### npm
```
npm i angular-rome --save
```

Then inject it into your Angular module.
```js
require('angular-rome');

angular.module('whatevs', [
  'rome'
]);
```


## Usage

Basic Example
```html
<rome ng-model="vm.whatevs"></rome>
```

All The Things
```html
<rome ng-model="vm.whatevs" rome-time="true" rome-date="true" rome-initial-value="" rome-min="" rome-max="" rome-time-interval="" rome-input-format="" rome-week-start="" rome-before="" rome-before-eq="" rome-after="" rome-after-eq="" rome-months-in-calendar=""></rome>
```

## Properties
* `rome-after`, `rome-after-eq`, `rome-before`, `rome-before-eq` accept an ng-model for a rome object.
* TODO: Add more datas.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

* Nicolas Bevacqua for beautifully crafting [Rome](http://bevacqua.github.io/rome/).

## License

See LICENSE.
