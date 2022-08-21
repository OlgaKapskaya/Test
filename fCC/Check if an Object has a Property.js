let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
if (("Alan" in userObj) && (userObj.hasOwnProperty("Jeff")) && ("Sarah" in userObj) && ("Ryan" in userObj)) {
  return true;
} else {
  return false;
}
}

console.log(isEveryoneHere(users));