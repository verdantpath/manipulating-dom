function say(something) {
  console.log(something);
}

function exec(func, arg) {
  func(arg);
}

exec(say, 'Hi there');
