// do not change lines 2 - 6:
var twitter = {
  countCharacters: function(string) {
    return string.length;
  }
};

// 1. Dot notation:
twitter.stockPrice = 18


// 2. Bracket notation:
twitter['CEO'] = "Jac Dorsey"

// 3. Practice on your own:
var twittersAddress = "1355 Market St #900, San Francisco, CA 94103";

twitter.address = "1355 Market St #900, San Francisco, CA 94103"
// 4. Array:

stringArray = [ { foo: "hi", bar: "bye"}, { foo: "see", bar: "you"}];

// 5. Loop through array:

for( var key in obj ) {
  var value = obj[key];
  console.log(value);
};

// 5. Invoke countCharacters:

countCharacters("bye");
// I think this will return the number 3

// 6. Loop through twitter object:

for( var key in obj ) {
  console.log(key);
};
