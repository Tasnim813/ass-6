1.What is the difference between var, let, and const?
Ans:var → function-scoped, hoisted হয়ে undefined হয়, একই scope-এ বারবার declare করা যায়।

let → block-scoped, hoisted হলেও initialize হয় না, re-declare করা যায় না, reassign করা যায়।

const → block-scoped, hoisted হলেও initialize হয় না, re-declare বা reassign করা যায় না।
2.What is the difference between map(), forEach(), and filter()? Ans:forEach() → শুধু loop চালায় এবং প্রত্যেক element-এর জন্য callback execute করে। কিছু return করে না।

map() → প্রত্যেক element-এর জন্য callback চালায় এবং তার return value গুলো নিয়ে একটি নতুন array return করে।

filter() → প্রত্যেক element check করে এবং যেগুলো callback condition true হয়, শুধু সেই element গুলো নিয়ে একটি নতুন array return করে।

3.What are arrow functions in ES6? 
Ans:ChatGPT said:

Arrow functions হলো ES6-এর নতুন ধরনের function syntax, যা ছোট এবং concise ভাবে function লেখার সুবিধা দেয়।

মূল বৈশিষ্ট্য:

function keyword ব্যবহার করতে হয় না।

এক লাইনের function হলে {} এবং return বাদ দেওয়া যায়।

নিজের this, arguments, super, বা new.target binding থাকে না; parent scope থেকে নেয়।

সাধারণত object method বা constructor হিসেবে ব্যবহার করা হয় না।
4. How does destructuring assignment work in ES6? 

Ans:ChatGPT said:

Destructuring assignment হলো ES6-এর একটি ফিচার, যা দিয়ে array বা object-এর ভিতরের মানগুলো সহজে আলাদা ভেরিয়েবলে assign করা যায়।

কাজ করার নিয়ম:

Array Destructuring → index অনুযায়ী মান বের করা হয়।

Object Destructuring → key নাম অনুযায়ী মান বের করা হয়।

চাইলে default value দেওয়া যায়।

Nested object বা array থেকেও destructure করা যায়।
5.Explain template literals in ES6. How are they different from string concatenation? 

Ans:Template Literals (ES6) হলো নতুন ধরনের string syntax, যা backtick ` দিয়ে লেখা হয়।

বৈশিষ্ট্য:

String Interpolation: ${expression} ব্যবহার করে সরাসরি ভেরিয়েবল বা এক্সপ্রেশন string-এর মধ্যে embed করা যায়।

Multi-line Support: একাধিক লাইনের string সহজে লেখা যায়, \n escape ছাড়া।

Embedded Expressions: string-এর ভিতরে calculation বা function call করা যায়।

পার্থক্য String Concatenation থেকে:

Syntax সহজ → + ব্যবহার করতে হয় না।

কোড clean এবং readable হয়।

Multi-line string লেখা সহজ → Concatenation-এ newline escape করতে হয়।