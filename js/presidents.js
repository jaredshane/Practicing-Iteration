/* Create an array that contains the names of
American Presidents. Loop over that array with
a for loop, and use string concatenation with
console.log() to output the order and name of
each President (see example below). */

var presidents =
["George Washington",
"John Adams",
"Thomas Jefferson",
"James Madison",
"James Monroe",
"John Quincy Adams",
"Andrew Jackson",
"Martin Van Buren",
"William Henry Harrison",
"John Tyler",
"James Knox Polk",
"Zachary Taylor",
"Millard Fillmore",
"Franklin Pierce",
"James Buchanan",
"Abraham Lincoln",
"Andrew Johnson",
"Ulysses S. Grant",
"Rutherford Birchard Hayes",
"James Abram Garfield",
"Chester Alan Arthur",
"Grover Cleveland",
"Benjamin Harrison",
"Grover Cleveland",
"William McKinley",
"Theodore Roosevelt",
"William Howard Taft",
"Woodrow Wilson",
"Warren Gamaliel Harding",
"Calvin Coolidge",
"Herbert Clark Hoover",
"Franklin Delano Roosevelt",
"Harry S. Truman",
"Dwight David Eisenhower",
"John Fitzgerald Kennedy",
"Lyndon Baines Johnson",
"Richard Milhous Nixon",
"Gerald Rudolph Ford",
"James Earl Carter, Jr.",
"Ronald Wilson Reagan",
"George Herbert Walker Bush",
"William Jefferson Clinton",
"George Walker Bush",
"Barack Hussein Obama",
]
for (var i = 0; i < presidents.length; i++) {
console.log("President #" + [i + 1] + " is " + presidents[i]);
}
