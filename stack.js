//Stack() implementation using constructor method
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.clear = clear;
  this.length = length;
  this.pop = pop;
  this.peek = peek;
}

//push() element to the top of the stack and increment the top variable
function push(element) {
  this.dataStore[this.top++] = element;
}

//pop() return the element at the top of the stack and decrement the top variable
function pop() {
  return this.dataStore[--this.top]
}

//peek() peek at the top element in the stack
function peek() {
  return this.dataStore[this.top-1];
}

//length() returns the length of the stack element
function length() { 
  return this.top;
}

//clear() clears the stack elements
function clear () {
  this.top = 0;
  this.dataStore = [];
}

//test program
var s = new Stack();
s.push("David");
s.push("Mary");
s.push("Clement");
s.push("Joseph");
s.push("Lomolo");
s.push("Edwin");
s.push("Moses");

console.log(s.length());

console.log(s.peek());

var popped = s.pop();
console.log(popped);

//Stack algorithm application in number convertion to base 2 through 9
function mulBase(num, base) {
  var s = new Stack();
  do {
    s.push(num% base);
    num = Math.floor(num /= base);
  } while(num > 0);
  var converted = "";
  while(s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}

//test program
var num = 32; 
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " to base " + base + " is " + newNum);

//stack application in palindrome algorithms
function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  var revWord = "";
  while(s.length() > 0) {
    revWord += s.pop();
  }
  if(revWord == word) {
    return true;
  } else {
    return false;
  }
}

//test proram for isPalindrome()
var word = "racecar";
console.log(isPalindrome(word));