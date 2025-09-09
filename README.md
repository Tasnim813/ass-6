1.What is the difference between var, let, and const?
Ans:var → function-scoped, hoisted হয়ে undefined হয়, একই scope-এ বারবার declare করা যায়।
let → block-scoped, hoisted হলেও initialize হয় না , re-declare করা যায় না, তবে reassign করা যায়। 
const → block-scoped, hoisted হলেও initialize হয় না , re-declare বা reassign কোনোটাই করা যায় না।

2.What is the difference between map(), forEach(), and filter()? Ans:forEach() → শুধু loop চালায় এবং প্রত্যেক element-এর জন্য callback execute করে। কিছু return করে না। 
map() → প্রত্যেক element-এর জন্য callback চালায় এবং তার return value গুলো নিয়ে একটা নতুন array return করে। 
filter() → প্রত্যেক element check করে এবং যেগুলা callback condition true হয়, শুধু সেই element গুলো নিয়ে একটা নতুন array return করে।

3.What are arrow functions in ES6? 
Ans:Arrow function হলো ES6 এ আসা নতুন ধরনের function syntax, যেটা ছোট এবং concise ভাবে function লেখার সুবিধা দেয়। 
মূল বৈশিষ্ট্যগুলো: function keyword ব্যবহার করতে হয় না। এক লাইনের function হলে {} এবং return বাদ দেওয়া যায়। নিজস্ব this, arguments, super, বা new.target binding থাকে না (মানে এগুলো parent scope থেকে নেয়)। Object method বা constructor হিসেবে সাধারণত ব্যবহার করা হয় না।

4. How does destructuring assignment work in ES6? 

Ans: Destructuring assignment হলো ES6 এর একটি ফিচার, যেটা দিয়ে array বা object এর ভেতরের মানগুলো আলাদা আলাদা ভেরিয়েবলে সহজে assign করা যায়। কাজ করার নিয়ম: Array Destructuring → index অনুসারে মান বের করে আনে। Object Destructuring → key নাম দিয়ে মান বের করে আনে। চাইলে default value দেওয়া যায়। Nested object/array থেকেও destructure করা যায়।
5.Explain template literals in ES6. How are they different from string concatenation? 

Ans:Template Literals (ES6) হলো নতুন ধরনের string সিনট্যাক্স যা backtick () দিয়ে লেখা হয়। 

বৈশিষ্ট্য: String Interpolation: ${expression} এর মাধ্যমে সরাসরি ভ্যারিয়েবল বা এক্সপ্রেশন string এর মধ্যে ব্যবহার করা যায়।

Multi-line Support: নতুন লাইন (\n) না লিখেও অনেক লাইনের string লেখা যায়। Embedded Expressions: string এর ভেতর calculation বা function call করা যায়। 

পার্থক্য (Template Literals বনাম Concatenation): Syntax সহজ → + ব্যবহার করতে হয় না। পাঠযোগ্যতা বেশি → কোড clean হয়। Multi-line string লেখা যায় সহজে → Concatenation এ newline escape করতে হয়।