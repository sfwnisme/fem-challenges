/*
  Regular Expression
  Ranges
  - Part 1
    (X|Y) => X Or Y
    [0-9] => 0 To 9
    [^0-9] => Any Character not 0 To 9
    Practice
  - Part 2
    [a-z]
    [^a-z]
    [A-Z]
    [^A-Z]
    [abc]
    [^abc]

==================================

  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.

  ===============================

  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.
  Test Method
  pattern.test(input)

  ==========================

  Quantifiers 2
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x

  =================================

    Quantifiers 3
  $ => End With Something
  ^ => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

export default function validation() {
  "use strict";
  let nam = document.querySelector("[name=username]");
  let email = document.querySelector("[name=email]");
  let phone = document.querySelector("[name=phone-number]");
  console.log();
  namValidation(nam);
  // emailValidation()
  // phoneValidation()
}

function err(element, msg) {
  msg = `your ${element} is not currect`;
}
function namValidation(e) {
  let namValue = e.value;
  if (namValue == "") {
  }
}
