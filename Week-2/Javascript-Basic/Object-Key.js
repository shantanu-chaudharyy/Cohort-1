function isLegal(user) {
  if (user.age >= 18) {
    console.log(user.name + " is allowed to vote");
  } else {
    console.log(user.name + " is not allowed to vote");
  }
}

var user1 = {
  name: "harkirat",
  age: 17,
  password: "e65t5t563",
  address: {
    city: "chd"
  },
  metadata: {
    likes: "girls"
  }
};

var user2 = {
  name: "ramanjeet",
  age: 32,
  password: "e65t5t563"
};

isLegal(user1);
isLegal(user2);

console.log(user1.address.city);