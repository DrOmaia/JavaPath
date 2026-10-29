JP.unit({
  course: 'cs101',
  n: 2,
  title: 'Input, Variables and Data Types',
  titleAr: 'الإدخال والمتغيرات وأنواع البيانات',
  intro: 'Real programs work with data that changes: marks, prices, ages, balances. In this unit you learn, slowly and one idea at a time, how to store data in variables, choose the right data type, do arithmetic, read input from the keyboard with Scanner, and convert between whole numbers and decimals.',
  introAr: 'البرامج الحقيقية تتعامل مع بيانات متغيرة مثل الدرجات والأسعار. في هذه الوحدة نتعلم خطوة خطوة كيف نخزن البيانات في متغيرات ونختار نوعها ونجري العمليات الحسابية ونقرأ المدخلات ونحوّل بين الأنواع.',
  lessons: [
    {
      title: 'Variables: boxes that hold values',
      titleAr: 'المتغيرات: صناديق تحمل القيم',
      minutes: 25,
      body: [
        { type: 'h', en: 'Why do we need variables?' },
        { type: 'p', en: 'Imagine a program that shows a student\'s mark many times. If you type <code>85</code> everywhere and the mark changes, you must fix every place. A <b>variable</b> solves this: you store the value once, give it a name, and use the name.',
          ar: 'المتغير مكان في الذاكرة له اسم يحمل قيمة، فنكتب القيمة مرة واحدة ونستخدم الاسم.' },
        { type: 'analogy', title: 'A variable is a labelled box', en: 'Think of a box with a label on it, for example "mark". You put a number inside the box. Whenever you need the number, you look at the label and take what is in the box. You can also take it out and put a different number in.' },
        { type: 'h', en: 'Declaring a variable' },
        { type: 'p', en: 'Before you use a variable, you must <b>declare</b> it: tell Java the <b>type</b> of value it will hold and the <b>name</b> you choose. Then you can give it a first value with <code>=</code>. Giving the first value is called <b>initializing</b>.' },
        { type: 'code', code: J`
int mark = 85;
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int', 'The <b>type</b>: this box holds a whole number (no decimal point).'],
          ['mark', 'The <b>name</b> of the box.'],
          ['=', 'Put the value on the right <i>into</i> the box on the left.'],
          ['85', 'The value stored in the box.'],
          [';', 'The end of the statement.']
        ], ar: 'النوع ثم الاسم ثم = ثم القيمة ثم فاصلة منقوطة.' },
        { type: 'check', q: 'In <code>int age = 19;</code>, what is <code>age</code>?', options: ['The name of the variable', 'The type', 'The value', 'A comment'], answer: 0, explain: 'int is the type, age is the name and 19 is the value.', ar: 'اسم المتغير.' },
        { type: 'h', en: 'Three types to start with' },
        { type: 'p', en: 'For now, learn three types. You will meet the others in Lesson 4.' },
        { type: 'table', head: ['Type', 'Holds', 'Example'], rows: [
          ['<code>int</code>', 'a whole number', '<code>int students = 30;</code>'],
          ['<code>double</code>', 'a number with a decimal point', '<code>double price = 12.5;</code>'],
          ['<code>String</code>', 'text, in double quotes', '<code>String course = "CS101";</code>']
        ] },
        { type: 'analogy', title: 'Different boxes for different things', en: 'You do not keep soup in an envelope or a letter in a bottle. The type tells Java what shape of box to prepare: a whole-number box, a decimal box or a text box.' },
        { type: 'check', q: 'Which type should hold the price 12.5?', options: ['int', 'double', 'String', 'None'], answer: 1, explain: '12.5 has a decimal point, so double.', ar: 'double' },
        { type: 'h', en: 'Using a variable' },
        { type: 'p', en: 'Write the name (without quotes) to use the value. In <code>println</code>, a name without quotes prints the value inside the box. A name with quotes prints the word itself.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int students = 30;
        System.out.println(students);
        System.out.println("students");
    }
}
`, out: J`
30
students
` },
        { type: 'lines', rows: [
          ['int students = 30;', 'Make a box named <code>students</code> and put 30 in it.'],
          ['System.out.println(students);', 'No quotes: print what is inside the box: <code>30</code>.'],
          ['System.out.println("students");', 'Quotes: print the word <code>students</code>.']
        ], ar: 'بدون اقتباس تُطبع القيمة، ومع الاقتباس تُطبع الكلمة.' },
        { type: 'check', q: 'What does <code>System.out.println("mark");</code> print if <code>int mark = 85;</code> exists?', options: ['mark', '85', 'An error', 'Nothing'], answer: 0, explain: 'Quotes make it plain text, so the word mark is printed.', ar: 'mark' },
        { type: 'steps', title: 'Store and print a student record', problem: 'Store a student name and mark in variables and print a sentence.',
          steps: [
            { en: 'Declare a text variable for the name.', code: 'String name = "Sara";' },
            { en: 'Declare a whole-number variable for the mark.', code: 'int mark = 85;' },
            { en: 'Join the variables with text using <code>+</code>.', code: 'System.out.println(name + " got " + mark);' },
            { en: 'Check: the quotes are only around real text. The names have no quotes.' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        String name = "Sara";
        int mark = 85;
        System.out.println(name + " got " + mark);
    }
}
`, out: 'Sara got 85', ar: 'نعرّف المتغيرات ثم نستخدم أسماءها بدون اقتباس.' },
        { type: 'note', kind: 'warn', en: 'A variable must have a value before you use it. <code>int total; System.out.println(total);</code> gives the error <i>variable total might not have been initialized</i>.' }
      ],
      mistakes: [
        { title: 'Forgetting the type', en: 'Java needs to know the type when the variable is created.', code: 'mark = 85;   // no type, the variable was never declared' },
        { title: 'Putting quotes around a variable name', en: 'This prints the word, not the value.', code: 'System.out.println("mark");' },
        { title: 'Wrong type for the value', en: 'A text value cannot go in an int box.', code: 'int mark = "eighty";' },
        { title: 'Using a variable before giving it a value', en: 'Always initialize before you use.', code: 'int total;\nSystem.out.println(total);' }
      ],
      remember: ['A <b>variable</b> is a named box that holds a value.', 'Declare it with a <b>type</b> and a <b>name</b>: <code>int mark = 85;</code>.', '<code>int</code> = whole number, <code>double</code> = decimal, <code>String</code> = text.', 'No quotes: use the value. Quotes: plain text.', 'Give a variable a value before using it.'],
      rememberAr: 'المتغير صندوق له اسم ونوع وقيمة. int للأعداد الصحيحة، double للعشرية، String للنص.',
      practice: [
        { t: 'mcq', q: 'In <code>int students = 30;</code>, what is <code>int</code>?', options: ['The type', 'The name', 'The value', 'A comment'], answer: 0, explain: 'int is the type of the box.' },
        { t: 'output', q: 'What is printed?', code: J`
int cups = 3;
System.out.println(cups);
`, answer: '3', explain: 'The variable holds 3.' },
        { t: 'output', q: 'What is printed?', code: J`
int cups = 3;
System.out.println("cups");
`, answer: 'cups', explain: 'Quotes print the word.' },
        { t: 'mcq', q: 'Which type is best for the price 7.25?', options: ['<code>int</code>', '<code>double</code>', '<code>String</code>', '<code>char</code>'], answer: 1, explain: 'It has a decimal point.' },
        { t: 'fill', q: 'Complete the declarations.', code: J`
___ age = 19;
___ city = "Riyadh";
`, answers: ['int', 'String'], explain: 'int for a whole number, String for text.' },
        { t: 'output', q: 'What is printed?', code: J`
String name = "Omar";
int mark = 90;
System.out.println(name + ": " + mark);
`, answer: 'Omar: 90', explain: 'The variables are joined to the text with +.' },
        { t: 'order', q: 'Order the statements so the program prints <code>Price: 12.5</code>.', lines: ['double price = 12.5;', 'System.out.println("Price: " + price);'], explain: 'Declare first, use after.' },
        { t: 'code', q: 'Declare a <code>String</code> named <code>city</code> with the value <code>Riyadh</code> and an <code>int</code> named <code>temp</code> with the value <code>41</code>. Print <code>Riyadh: 41</code> using the variables. No input.', qAr: 'استخدم المتغيرين في الطباعة.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // declare city and temp, then print
    }
}
`, tests: [{ stdin: '', expected: 'Riyadh: 41' }], solution: J`
public class Main {
    public static void main(String[] args) {
        String city = "Riyadh";
        int temp = 41;
        System.out.println(city + ": " + temp);
    }
}
`, hint: 'Join the variables with <code>+ ": " +</code>.', explain: 'Declare the two variables, then print them with +.' }
      ]
    },
    {
      title: 'Assignment: changing the value in a variable',
      titleAr: 'الإسناد: تغيير القيمة في المتغير',
      minutes: 25,
      body: [
        { type: 'h', en: 'The word "variable" means it can vary' },
        { type: 'p', en: 'The value in a box can change. To put a new value in, use the <b>assignment</b> operator <code>=</code>. This time you do not write the type again, because the box already exists.',
          ar: 'نغيّر القيمة بالإسناد = دون إعادة كتابة النوع.' },
        { type: 'analogy', title: 'A wallet', en: 'Your wallet holds 50 riyals. You buy a coffee for 8 riyals. Now the wallet holds 42. The wallet is the same; only the money inside changed.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int wallet = 50;
        System.out.println(wallet);
        wallet = 42;
        System.out.println(wallet);
    }
}
`, out: J`
50
42
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int wallet = 50;', 'Create the box and put 50 in it.'],
          ['wallet = 42;', 'Throw away 50 and put 42 in the same box. No <code>int</code> this time.'],
          ['System.out.println(wallet);', 'Prints whatever is in the box now.']
        ], ar: 'القيمة القديمة تُستبدل بالجديدة.' },
        { type: 'check', q: 'After <code>int x = 5; x = 9;</code> what is in x?', options: ['9', '5', '14', '59'], answer: 0, explain: 'The new value replaces the old one.', ar: '9' },
        { type: 'h', en: '= does not mean "equals"' },
        { type: 'p', en: 'In maths, <code>=</code> says two sides are equal. In Java, <code>=</code> is an <b>order</b>: work out the right side, then store the result in the variable on the left. So the right side is calculated <b>first</b>.' },
        { type: 'analogy', title: 'An instruction on a note', en: 'Read <code>wallet = wallet - 8;</code> as a note to yourself: "take what is in the wallet, subtract 8, and put the answer back in the wallet". It is not a maths equation.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int wallet = 50;
        wallet = wallet - 8;
        System.out.println(wallet);
    }
}
`, out: '42' },
        { type: 'lines', rows: [
          ['int wallet = 50;', 'wallet is 50.'],
          ['wallet = wallet - 8;', 'Right side first: 50 - 8 = 42. Then store 42 in wallet.'],
          ['System.out.println(wallet);', 'Prints 42.']
        ], ar: 'يُحسب الطرف الأيمن أولاً ثم يُخزن في اليسار.' },
        { type: 'check', q: 'After <code>int n = 4; n = n + 3;</code> what is n?', options: ['7', '4', '3', '43'], answer: 0, explain: 'The right side 4 + 3 is 7, which is stored in n.', ar: '7' },
        { type: 'h', en: 'One variable can use another' },
        { type: 'p', en: 'The right side can use other variables. Java looks up their current values. When you change <code>a</code> later, a variable that already copied the value does <b>not</b> change by itself.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = a * 2;
        a = a + 5;
        b = a + b;
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}
`, out: J`
a = 15
b = 35
` },
        { type: 'lines', title: 'Trace it, line by line', rows: [
          ['int a = 10;', 'a = 10'],
          ['int b = a * 2;', 'b = 10 * 2 = 20'],
          ['a = a + 5;', 'a = 10 + 5 = 15'],
          ['b = a + b;', 'b = 15 + 20 = 35']
        ], ar: 'نتتبع القيم سطراً سطراً.' },
        { type: 'check', q: 'After <code>int a = 2; int b = a; a = 7;</code> what is b?', options: ['2', '7', '9', '0'], answer: 0, explain: 'b copied the value 2 when it was created. Changing a later does not change b.', ar: '2' },
        { type: 'steps', title: 'Track a coffee budget', problem: 'You have 50 riyals. You buy a coffee (8) and a sandwich (12). How much is left?',
          steps: [
            { en: 'Start with the money in a variable.', code: 'int money = 50;' },
            { en: 'Buy the coffee: subtract 8 and store the result back.', code: 'money = money - 8;' },
            { en: 'Buy the sandwich.', code: 'money = money - 12;' },
            { en: 'Print the result with a label.', code: 'System.out.println("Left: " + money);' },
            { en: 'Check by hand: 50 - 8 = 42, 42 - 12 = 30. We expect <code>Left: 30</code>.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int money = 50;
        money = money - 8;
        money = money - 12;
        System.out.println("Left: " + money);
    }
}
`, out: 'Left: 30', ar: 'نخزن الناتج الجديد في المتغير نفسه.' },
        { type: 'note', kind: 'tip', en: 'When you trace a program, write a small table of the variables and update it after every line. It is the best way to find mistakes.' }
      ],
      mistakes: [
        { title: 'Declaring the same variable twice', en: 'Write the type only the first time.', code: 'int x = 5;\nint x = 8;   // error: already defined' },
        { title: 'Putting a value on the left', en: 'The left side must be a variable.', code: '10 = x;' },
        { title: 'Reading = as a maths equation', en: '<code>x = x + 1;</code> is not impossible. It means: new x = old x + 1.' },
        { title: 'Thinking b changes when a changes', en: 'A copy stays the same unless you assign again.' }
      ],
      remember: ['<code>=</code> means: calculate the right side, store it on the left.', 'The new value replaces the old value.', 'Do not repeat the type when you only change the value.', '<code>x = x + 1;</code> is valid.', 'Trace programs with a table of values.'],
      rememberAr: 'العلامة = تعني احسب اليمين ثم خزّن في اليسار، والقيمة الجديدة تحل مكان القديمة.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
int n = 5;
n = 8;
System.out.println(n);
`, answer: '8', explain: 'The new value 8 replaces 5.' },
        { t: 'output', q: 'What is printed?', code: J`
int n = 5;
n = n + 2;
System.out.println(n);
`, answer: '7', explain: '5 + 2 = 7 is stored in n.' },
        { t: 'mcq', q: 'Which statement is a valid assignment (assume <code>int x, y;</code> exist)?', options: ['<code>x + 1 = y;</code>', '<code>5 = x;</code>', '<code>x = x + 1;</code>', '<code>int = 5;</code>'], answer: 2, explain: 'The left side must be a single variable.' },
        { t: 'output', q: 'What is printed?', code: J`
int x = 4;
int y = x + 3;
x = y * 2;
y = y - x;
System.out.println(x + " " + y);
`, answer: '14 -7', explain: 'y = 7, x = 14, then y = 7 - 14 = -7.' },
        { t: 'fill', q: 'You had 100 riyals and spent 35. Complete the code.', code: J`
int money = 100;
money = money ___ 35;
System.out.println(money);   // 65
`, answers: ['-'], explain: '100 - 35 = 65.' },
        { t: 'order', q: 'Order the statements so the program prints <code>12</code>.', lines: ['int a = 5;', 'a = a + 7;', 'System.out.println(a);'], explain: 'Declare, change, print.' },
        { t: 'output', q: 'What is printed?', code: J`
int a = 2;
int b = a;
a = 7;
System.out.println(a + " " + b);
`, answer: '7 2', explain: 'b kept the old value 2.' },
        { t: 'code', q: 'Start with <code>int stock = 20;</code>. Sell 6 items, then 4 more (subtract each time). Print only the final stock number. No input.', qAr: 'اطرح مرتين ثم اطبع الناتج.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        int stock = 20;
        // sell 6, then sell 4
    }
}
`, tests: [{ stdin: '', expected: '10' }], solution: J`
public class Main {
    public static void main(String[] args) {
        int stock = 20;
        stock = stock - 6;
        stock = stock - 4;
        System.out.println(stock);
    }
}
`, hint: 'Use <code>stock = stock - 6;</code>.', explain: '20 - 6 - 4 = 10.' }
      ]
    },
    {
      title: 'Choosing names and using constants',
      titleAr: 'اختيار الأسماء واستخدام الثوابت',
      minutes: 25,
      body: [
        { type: 'h', en: 'Names (identifiers)' },
        { type: 'p', en: 'You choose the names of your variables. A name for a variable, method or class is called an <b>identifier</b>. Java has strict rules, and programmers also follow friendly habits so code is easy to read.',
          ar: 'المعرّف هو اسم المتغير أو الصنف أو الدالة.' },
        { type: 'analogy', title: 'Names on student cards', en: 'Every student card has a name that is clear and different. If two cards had the same name or an unreadable name, the library would be confused. Variable names need to be clear and unique too.' },
        { type: 'h', en: 'The rules' },
        { type: 'list', items: [
          'Use letters, digits, underscore <code>_</code> and dollar <code>$</code>.',
          'Do <b>not</b> start with a digit.',
          'No spaces and no symbols such as <code>-</code> or <code>@</code>.',
          'Do not use a <b>reserved word</b>: a word Java already uses, such as <code>int</code>, <code>class</code>, <code>public</code>, <code>final</code>.',
          'Capital letters matter: <code>total</code> and <code>Total</code> are different.'
        ], ar: 'لا يبدأ الاسم برقم ولا يحتوي مسافات أو رموزاً ولا يكون كلمة محجوزة.' },
        { type: 'table', head: ['Name', 'Valid?', 'Why'], rows: [
          ['<code>totalPrice</code>', 'Yes', 'Letters only'],
          ['<code>grade2</code>', 'Yes', 'A digit after the first character is fine'],
          ['<code>2ndPlace</code>', 'No', 'Starts with a digit'],
          ['<code>my-score</code>', 'No', 'The hyphen is the minus sign'],
          ['<code>my score</code>', 'No', 'Spaces are not allowed'],
          ['<code>class</code>', 'No', 'Reserved word']
        ] },
        { type: 'check', q: 'Which name is valid?', options: ['totalMark', '2marks', 'total mark', 'int'], answer: 0, explain: '2marks starts with a digit, total mark has a space, int is reserved.', ar: 'totalMark' },
        { type: 'h', en: 'Naming habits' },
        { type: 'list', items: [
          'Variables: <b>camelCase</b>. Start small, new words start big: <code>studentName</code>.',
          'Classes: start with a capital: <code>BankAccount</code>.',
          'Choose meaningful names: <code>radius</code> is better than <code>r</code>.'
        ] },
        { type: 'analogy', title: 'A camel with humps', en: 'In <code>studentName</code>, the capital N is a hump in the middle of the word. That is why we call this style camelCase.' },
        { type: 'check', q: 'Which name follows the camelCase habit?', options: ['studentAge', 'StudentAge', 'student_age_', 'STUDENTAGE'], answer: 0, explain: 'Start with a small letter, then capital for each new word.', ar: 'studentAge' },
        { type: 'h', en: 'Constants with final' },
        { type: 'p', en: 'Some values never change, such as the number of seconds in a minute. Mark them with the keyword <code>final</code>. Then Java stops you from changing them by mistake. Write constant names in ALL_CAPITALS with underscores.',
          ar: 'الثابت يُعرّف بالكلمة final ولا يتغير ويُكتب اسمه بأحرف كبيرة.' },
        { type: 'analogy', title: 'A price tag stuck on the wall', en: 'A fixed price list on the wall of the café is not changed by every customer. <code>final</code> works like that: set once, read many times.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        final int SECONDS_PER_MINUTE = 60;
        int minutes = 5;
        System.out.println(minutes * SECONDS_PER_MINUTE);
    }
}
`, out: '300' },
        { type: 'lines', rows: [
          ['final int SECONDS_PER_MINUTE = 60;', '<code>final</code>: this box can never change. ALL_CAPITALS shows it is a constant.'],
          ['int minutes = 5;', 'A normal variable.'],
          ['minutes * SECONDS_PER_MINUTE', '5 times 60 = 300 (<code>*</code> means multiply).']
        ], ar: 'final تمنع تغيير القيمة.' },
        { type: 'check', q: 'What happens if you assign a new value to a <code>final</code> variable?', options: ['A compile error', 'It works', 'A runtime crash', 'It prints a warning'], answer: 0, explain: 'The compiler refuses.', ar: 'خطأ ترجمة.' },
        { type: 'steps', title: 'Price list with a constant', problem: 'A coffee costs 8 riyals. Print the cost of 4 coffees. Use a constant for the price.',
          steps: [
            { en: 'Make the price a constant because it does not change.', code: 'final int PRICE_PER_COFFEE = 8;' },
            { en: 'Store the number of coffees in a normal variable.', code: 'int cups = 4;' },
            { en: 'Calculate the total.', code: 'int total = cups * PRICE_PER_COFFEE;' },
            { en: 'Print it with a label.', code: 'System.out.println("Total: " + total + " riyals");' },
            { en: 'Check by hand: 4 x 8 = 32.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        final int PRICE_PER_COFFEE = 8;
        int cups = 4;
        int total = cups * PRICE_PER_COFFEE;
        System.out.println("Total: " + total + " riyals");
    }
}
`, out: 'Total: 32 riyals', ar: 'الثابت يسهل التعديل: نغيّر القيمة في مكان واحد.' },
        { type: 'note', kind: 'exam', en: 'Assigning to a <code>final</code> variable is a <b>compile</b> error, not a runtime error.' }
      ],
      mistakes: [
        { title: 'Starting a name with a digit', en: 'Names cannot start with a number.', code: 'int 1stMark = 80;' },
        { title: 'Using a space or hyphen', en: 'These are not allowed in a name.', code: 'int my-mark = 80;' },
        { title: 'Using a reserved word', en: 'Words like <code>class</code> and <code>int</code> are taken.', code: 'int class = 5;' },
        { title: 'Changing a final variable', en: 'It is a compile error.', code: 'final int MAX = 10;\nMAX = 20;' }
      ],
      remember: ['An <b>identifier</b> is a name you choose.', 'Names: letters, digits, <code>_</code>, <code>$</code>; not starting with a digit; no spaces; no reserved words.', 'Java is case-sensitive.', 'Variables use camelCase; classes start with a capital.', 'Constants use <code>final</code> and ALL_CAPITALS.'],
      rememberAr: 'اختر أسماء واضحة بأسلوب camelCase، والثوابت final بأحرف كبيرة ولا تتغير.',
      practice: [
        { t: 'mcq', q: 'Which of these is a valid Java identifier?', options: ['<code>totalPrice</code>', '<code>2ndPlace</code>', '<code>class</code>', '<code>my-score</code>'], answer: 0, explain: 'The others start with a digit, are reserved or contain a hyphen.' },
        { t: 'mcq', q: 'Which name is best for a constant holding the highest grade?', options: ['<code>maxGrade</code>', '<code>MaxGrade</code>', '<code>MAX_GRADE</code>', '<code>max grade</code>'], answer: 2, explain: 'Constants use capitals with underscores.' },
        { t: 'mcq', q: 'Are <code>total</code> and <code>Total</code> the same name?', options: ['No, they are different', 'Yes', 'Only in classes', 'Only for constants'], answer: 0, explain: 'Java is case-sensitive.' },
        { t: 'fill', q: 'Make <code>DAYS_PER_WEEK</code> a constant and compute the days in 3 weeks.', code: J`
___ int DAYS_PER_WEEK = 7;
int weeks = 3;
int days = weeks ___ DAYS_PER_WEEK;
`, answers: ['final', '*'], explain: 'final makes it constant; days = weeks times 7.' },
        { t: 'output', q: 'What is printed?', code: J`
final int RATE = 5;
int hours = 4;
System.out.println(hours * RATE);
`, answer: '20', explain: '4 times 5 is 20.' },
        { t: 'mcq', q: 'Which line gives a compile error?', options: ['<code>final int MAX = 5;</code>', '<code>int max = 5; max = 6;</code>', '<code>final int MAX = 5; MAX = 6;</code>', '<code>int myMax = 5;</code>'], answer: 2, explain: 'You cannot assign to a final variable.' },
        { t: 'order', q: 'Order the lines to print the cost of 3 books at 25 riyals.', lines: ['final int BOOK_PRICE = 25;', 'int books = 3;', 'System.out.println(books * BOOK_PRICE);'], explain: 'Declare both first, then use them.' },
        { t: 'code', q: 'Use a constant <code>final int HOURS_PER_DAY = 24;</code> and print the number of hours in 7 days. Print only the number. No input.', qAr: 'استخدم الثابت في الحساب.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        final int HOURS_PER_DAY = 24;
        // print hours in 7 days
    }
}
`, tests: [{ stdin: '', expected: '168' }], solution: J`
public class Main {
    public static void main(String[] args) {
        final int HOURS_PER_DAY = 24;
        System.out.println(7 * HOURS_PER_DAY);
    }
}
`, hint: 'Multiply 7 by the constant.', explain: '7 times 24 is 168.' }
      ]
    },
    {
      title: 'Data types: choosing the right box',
      titleAr: 'أنواع البيانات: اختيار الصندوق المناسب',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why does the type matter?' },
        { type: 'p', en: 'Different data needs different boxes. A mark is a whole number, a GPA has decimals, a name is text, and "passed or not" is yes or no. The <b>data type</b> tells Java what kind of value a variable holds and how much memory to give it.',
          ar: 'نوع البيانات يحدد نوع القيمة وحجم الذاكرة.' },
        { type: 'analogy', title: 'Containers in a kitchen', en: 'You use a glass for water, a plate for rice, a small spoon for salt. Each is the right size for its job. Java has types of different sizes for the same reason.' },
        { type: 'h', en: 'The eight primitive types' },
        { type: 'p', en: 'Java has eight built-in <b>primitive</b> types. You will use four of them most: <code>int</code>, <code>double</code>, <code>char</code> and <code>boolean</code>.' },
        { type: 'table', head: ['Type', 'Holds', 'Example'], rows: [
          ['<code>byte</code>, <code>short</code>', 'small whole numbers', '<code>byte level = 5;</code>'],
          ['<code>int</code>', 'whole numbers (the usual choice)', '<code>int students = 450;</code>'],
          ['<code>long</code>', 'very big whole numbers (end with L)', '<code>long people = 8000000000L;</code>'],
          ['<code>float</code>, <code>double</code>', 'decimal numbers (double is the usual choice)', '<code>double gpa = 3.75;</code>'],
          ['<code>char</code>', 'one character, in single quotes', '<code>char grade = \'A\';</code>'],
          ['<code>boolean</code>', '<code>true</code> or <code>false</code>', '<code>boolean passed = true;</code>']
        ] },
        { type: 'check', q: 'Which type should hold the value <code>true</code>?', options: ['boolean', 'int', 'char', 'double'], answer: 0, explain: 'A boolean is true or false.', ar: 'boolean' },
        { type: 'h', en: 'char and String: single or double quotes' },
        { type: 'p', en: 'A <code>char</code> is exactly <b>one</b> character in <b>single</b> quotes: <code>\'A\'</code>. A <code>String</code> is text of any length in <b>double</b> quotes: <code>"Ali"</code>. String starts with a capital S because it is not primitive.',
          ar: 'char حرف واحد بين اقتباس مفرد، وString نص بين اقتباس مزدوج.' },
        { type: 'analogy', title: 'A single seat and a whole row', en: 'A char is one seat. A String is a whole row of seats. One seat uses single quotes; a row uses double quotes.' },
        { type: 'check', q: 'Which declaration is correct?', options: ['char grade = \'B\';', 'char grade = "B";', 'String grade = \'B\';', 'int grade = \'B\' \'C\';'], answer: 0, explain: 'A char uses single quotes.', ar: 'اقتباس مفرد.' },
        { type: 'p', en: 'A number with a decimal point, such as <code>2.5</code>, is a <code>double</code>. A whole number such as <code>25</code> is an <code>int</code>. Put them all in one program:' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int students = 450;
        double gpa = 3.75;
        char grade = 'A';
        boolean passed = true;
        long people = 8000000000L;
        System.out.println(students);
        System.out.println(gpa);
        System.out.println(grade);
        System.out.println(passed);
        System.out.println(people);
    }
}
`, out: J`
450
3.75
A
true
8000000000
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int students = 450;', 'A whole number.'],
          ['double gpa = 3.75;', 'A decimal number.'],
          ['char grade = \'A\';', 'One character, single quotes.'],
          ['boolean passed = true;', 'Only <code>true</code> or <code>false</code>, no quotes.'],
          ['long people = 8000000000L;', 'Too big for int, so use <code>long</code> and write <code>L</code> at the end.']
        ] },
        { type: 'h', en: 'Every type has limits' },
        { type: 'p', en: 'An <code>int</code> can hold numbers from about -2.1 billion to 2.1 billion. Go past the largest value and the number <b>wraps around</b> to the smallest. This is called <b>overflow</b>. Java does not warn you.' },
        { type: 'analogy', title: 'A car odometer', en: 'When an old odometer shows 99999 and the car drives one more kilometre, it shows 00000. The number wrapped around. An int does the same at its limit.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int big = 2147483647;
        big = big + 1;
        System.out.println(big);
    }
}
`, out: '-2147483648' },
        { type: 'check', q: 'What happens when an int goes past 2147483647?', options: ['It wraps around to a negative number', 'A message appears', 'It becomes a double', 'It stays the same'], answer: 0, explain: 'Overflow wraps around silently.', ar: 'ينقلب إلى سالب.' },
        { type: 'steps', title: 'A student profile', problem: 'Store a student\'s details with the right type for each, and print them.',
          steps: [
            { en: 'The name is text, so use <code>String</code>.', code: 'String name = "Sara";' },
            { en: 'The age is a whole number.', code: 'int age = 19;' },
            { en: 'The GPA has decimals.', code: 'double gpa = 3.9;' },
            { en: 'The letter grade is one character.', code: 'char grade = \'A\';' },
            { en: 'Passed or not is yes/no.', code: 'boolean passed = true;' },
            { en: 'Print each one with a label. The full program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        String name = "Sara";
        int age = 19;
        double gpa = 3.9;
        char grade = 'A';
        boolean passed = true;
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        System.out.println("Grade: " + grade);
        System.out.println("Passed: " + passed);
    }
}
`, out: J`
Name: Sara
Age: 19
GPA: 3.9
Grade: A
Passed: true
`, ar: 'نختار النوع حسب نوع البيانات.' },
        { type: 'note', kind: 'tip', en: 'Rule of thumb: whole number = <code>int</code>, decimal = <code>double</code>, text = <code>String</code>, one letter = <code>char</code>, yes/no = <code>boolean</code>.', ar: 'int للصحيح، double للعشري، String للنص.' }
      ],
      mistakes: [
        { title: 'Double quotes for a char', en: 'A char needs single quotes.', code: 'char grade = "A";' },
        { title: 'Quotes around true', en: 'A boolean value has no quotes.', code: 'boolean passed = "true";' },
        { title: 'Decimal value in an int', en: 'An int cannot store a decimal.', code: 'int price = 12.5;' },
        { title: 'Forgetting L on a very big number', en: 'Big numbers need <code>L</code> and the type <code>long</code>.', code: 'long people = 8000000000;' }
      ],
      remember: ['<code>int</code> whole, <code>double</code> decimal, <code>char</code> one character, <code>boolean</code> true/false.', '<code>char</code> uses single quotes; <code>String</code> uses double quotes.', '<code>String</code> is not primitive.', '<code>long</code> is for numbers too big for int; end the number with <code>L</code>.', 'Going past a limit causes <b>overflow</b> (wraps around).'],
      rememberAr: 'int للأعداد الصحيحة، double للعشرية، char لحرف واحد، boolean لصح أو خطأ. وعند تجاوز الحد يحدث فيضان.',
      practice: [
        { t: 'mcq', q: 'Which type is best for a price such as 19.99?', options: ['<code>int</code>', '<code>double</code>', '<code>char</code>', '<code>boolean</code>'], answer: 1, explain: 'Prices have decimals.' },
        { t: 'mcq', q: 'Which type is best for a single letter grade such as <code>\'A\'</code>?', options: ['<code>char</code>', '<code>int</code>', '<code>boolean</code>', '<code>double</code>'], answer: 0, explain: 'One character is a char.' },
        { t: 'mcq', q: 'Which value can a <code>boolean</code> hold?', options: ['<code>true</code>', '<code>"yes"</code>', '<code>5</code>', '<code>\'T\'</code>'], answer: 0, explain: 'Only true or false.' },
        { t: 'fill', q: 'Choose the correct types.', code: J`
___ students = 30;
___ average = 82.5;
___ passed = false;
___ initial = 'M';
`, answers: ['int', 'double', 'boolean', 'char'], explain: 'Whole number, decimal, yes/no and one character.' },
        { t: 'output', q: 'What is printed?', code: J`
char c = 'Z';
boolean ok = false;
System.out.println(c);
System.out.println(ok);
`, answer: 'Z\nfalse', explain: 'Each value is printed as it is.' },
        { t: 'output', q: 'What is printed?', code: J`
int big = 2147483647;
System.out.println(big + 1);
`, answer: '-2147483648', explain: 'Overflow wraps to the smallest int.' },
        { t: 'mcq', q: 'What is the range of the <code>byte</code> type?', options: ['0 to 255', '-128 to 127', '-32,768 to 32,767', '-256 to 255'], answer: 1, explain: 'A byte has 8 bits: 256 values from -128 to 127.' },
        { t: 'code', q: 'Declare <code>String city = "Riyadh"</code>, <code>int temp = 41</code> and <code>double rain = 0.5</code>, then print three lines: <code>City: Riyadh</code>, <code>Temp: 41</code>, <code>Rain: 0.5</code>. No input.', qAr: 'اختر النوع الصحيح لكل قيمة.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // declare and print
    }
}
`, tests: [{ stdin: '', expected: 'City: Riyadh\nTemp: 41\nRain: 0.5' }], solution: J`
public class Main {
    public static void main(String[] args) {
        String city = "Riyadh";
        int temp = 41;
        double rain = 0.5;
        System.out.println("City: " + city);
        System.out.println("Temp: " + temp);
        System.out.println("Rain: " + rain);
    }
}
`, hint: 'Use one println for each variable.', explain: 'Right types, then three prints.' }
      ]
    },
    {
      title: 'Arithmetic: +, -, *, / and %',
      titleAr: 'العمليات الحسابية',
      minutes: 30,
      body: [
        { type: 'h', en: 'Java as a calculator' },
        { type: 'p', en: 'Programs calculate all the time: totals, change, averages. Java has five arithmetic operators. An <b>operator</b> is a symbol that does an operation.',
          ar: 'المعامل رمز يجري عملية.' },
        { type: 'table', head: ['Operator', 'Meaning', 'Example', 'Result'], rows: [
          ['<code>+</code>', 'add', '<code>34 + 1</code>', '35'],
          ['<code>-</code>', 'subtract', '<code>34.0 - 0.5</code>', '33.5'],
          ['<code>*</code>', 'multiply', '<code>300 * 30</code>', '9000'],
          ['<code>/</code>', 'divide', '<code>17 / 5</code>', '3 (both are int!)'],
          ['<code>%</code>', 'remainder', '<code>17 % 5</code>', '2']
        ] },
        { type: 'h', en: 'Division of whole numbers' },
        { type: 'p', en: 'When <b>both</b> numbers are whole numbers (<code>int</code>), the result is a whole number. The decimal part is simply dropped (not rounded). If at least one number is a <code>double</code>, the result keeps decimals.',
          ar: 'قسمة عددين صحيحين تعطي عدداً صحيحاً وتُهمل الكسور.' },
        { type: 'analogy', title: 'Sharing sweets between children', en: 'You have 17 sweets and 5 children. Each child gets 3 whole sweets. You cannot give a half-sweet if you only count whole ones. The leftover 2 sweets are the <b>remainder</b>.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(17 / 5);
        System.out.println(17 % 5);
        System.out.println(17.0 / 5);
    }
}
`, out: J`
3
2
3.4
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['17 / 5', 'Both are int, so the answer is the whole part: <b>3</b>.'],
          ['17 % 5', 'The leftover after sharing: <b>2</b>.'],
          ['17.0 / 5', '17.0 is a double, so the decimals are kept: <b>3.4</b>.']
        ], ar: '/ للقسمة و % لباقي القسمة.' },
        { type: 'check', q: 'What is <code>9 / 2</code> in Java?', options: ['4', '4.5', '5', '4.0'], answer: 0, explain: 'Both numbers are int, so the decimal is dropped.', ar: '4' },
        { type: 'check', q: 'What is <code>9 % 2</code>?', options: ['1', '4', '0', '4.5'], answer: 0, explain: '9 = 4 x 2 + 1, so the remainder is 1.', ar: '1' },
        { type: 'h', en: 'Using / and % together' },
        { type: 'p', en: 'The pair is very useful. Use <code>/</code> to count the full groups, and <code>%</code> to find what is left. For example, change 500 seconds into minutes and seconds. Also, <code>n % 2</code> is 0 when n is even.' },
        { type: 'analogy', title: 'Minutes on a clock', en: 'After 135 minutes you can say "2 full hours and 15 minutes left over". The full hours come from <code>/</code> and the leftover comes from <code>%</code>.' },
        { type: 'steps', title: 'Seconds to minutes and seconds', problem: 'Convert 500 seconds to minutes and seconds.',
          steps: [
            { en: 'One minute has 60 seconds. Store the total.', code: 'int totalSeconds = 500;' },
            { en: 'The full minutes: divide by 60 (whole division).', code: 'int minutes = totalSeconds / 60;' },
            { en: 'The seconds left over: use the remainder.', code: 'int seconds = totalSeconds % 60;' },
            { en: 'Print them. Check by hand: 8 x 60 = 480, and 500 - 480 = 20.', code: 'System.out.println(totalSeconds + " seconds = " + minutes + " min " + seconds + " sec");' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int totalSeconds = 500;
        int minutes = totalSeconds / 60;
        int seconds = totalSeconds % 60;
        System.out.println(totalSeconds + " seconds = " + minutes + " min " + seconds + " sec");
    }
}
`, out: '500 seconds = 8 min 20 sec', ar: '/ للأجزاء الكاملة و % للباقي.' },
        { type: 'note', kind: 'exam', en: 'The remainder of a negative number keeps the sign of the <b>left</b> number: <code>-17 % 5</code> is <code>-2</code>.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(-17 % 5);
        System.out.println(20 % 4);
    }
}
`, out: J`
-2
0
` }
      ],
      mistakes: [
        { title: 'Expecting 17 / 5 to be 3.4', en: 'Both are int, so you get 3. Write <code>17.0 / 5</code> for 3.4.' },
        { title: 'Using ^ for power', en: 'There is no power operator. The sign <code>^</code> means something else.', code: '2 ^ 3' },
        { title: 'Dividing by zero', en: 'An int divided by zero crashes the program at run time.', code: '10 / 0' },
        { title: 'Mixing up / and %', en: '<code>/</code> gives the whole part; <code>%</code> gives the leftover.' }
      ],
      remember: ['Operators: <code>+ - * / %</code>.', 'int / int gives an int (the decimal is dropped).', 'If one side is a double, the result is a double.', '<code>%</code> gives the remainder (<code>n % 2</code> is 0 for even numbers).', 'Use <code>/</code> and <code>%</code> together to split a total into groups.'],
      rememberAr: 'قسمة int على int تعطي int، و % تعطي الباقي، واستخدم / و % معاً لتقسيم المجموع.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(10 + 5);
`, answer: '15', explain: '10 + 5.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(7 / 2);
`, answer: '3', explain: 'int division drops the decimal.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(23 / 4);
System.out.println(23 % 4);
System.out.println(23 / 4.0);
`, answer: '5\n3\n5.75', explain: '23 / 4 = 5, remainder 3, and with 4.0 the result keeps decimals.' },
        { t: 'mcq', q: 'What is the value of <code>-7 % 3</code>?', options: ['1', '-1', '2', '-2'], answer: 1, explain: '-7 / 3 is -2, and -7 - (-2 x 3) = -1.' },
        { t: 'fill', q: 'Split <code>347</code> into the last digit (7) and the rest (34).', code: J`
int number = 347;
int lastDigit = number ___ 10;
int rest = number ___ 10;
System.out.println(lastDigit + " " + rest);
`, answers: ['%', '/'], explain: '347 % 10 is 7; 347 / 10 is 34.' },
        { t: 'order', q: 'Order the lines to print how many full hours are in 200 minutes (3).', lines: ['int minutes = 200;', 'int hours = minutes / 60;', 'System.out.println(hours);'], explain: '200 / 60 = 3.' },
        { t: 'mcq', q: 'Which type is the result of <code>8 / 2.0</code>?', options: ['<code>int</code>', '<code>double</code>', '<code>char</code>', '<code>boolean</code>'], answer: 1, explain: 'One side is double, so the result is double (4.0).' },
        { t: 'code', q: 'Declare <code>int totalDays = 45;</code>. Print the number of full weeks and the days left, as <code>6 weeks 3 days</code>. No input.', qAr: 'استخدم / ثم %.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        int totalDays = 45;
        // compute weeks and days, then print
    }
}
`, tests: [{ stdin: '', expected: '6 weeks 3 days' }], solution: J`
public class Main {
    public static void main(String[] args) {
        int totalDays = 45;
        int weeks = totalDays / 7;
        int days = totalDays % 7;
        System.out.println(weeks + " weeks " + days + " days");
    }
}
`, hint: 'weeks = totalDays / 7; days = totalDays % 7.', explain: '45 / 7 = 6, 45 % 7 = 3.' }
      ]
    },
    {
      title: 'Operator precedence: what is calculated first?',
      titleAr: 'أولوية العمليات',
      minutes: 25,
      body: [
        { type: 'h', en: 'Why does order matter?' },
        { type: 'p', en: 'When an expression has several operators, Java needs to know which to do first. Just like in maths, multiplication and division come before addition and subtraction. This rule is called <b>operator precedence</b>.',
          ar: 'الضرب والقسمة والباقي قبل الجمع والطرح.' },
        { type: 'analogy', title: 'Order of tasks at a café', en: 'The barista first makes the drinks that were ordered first. The rule "who goes first" decides the result. Operators also have a "who goes first" order.' },
        { type: 'table', head: ['Order', 'Operators', 'Direction'], rows: [
          ['1 (first)', '<code>( )</code> parentheses', 'inside first'],
          ['2', '<code>*</code> <code>/</code> <code>%</code>', 'left to right'],
          ['3', '<code>+</code> <code>-</code>', 'left to right'],
          ['4 (last)', '<code>=</code> (assignment)', 'right to left']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(2 + 3 * 4);
        System.out.println((2 + 3) * 4);
    }
}
`, out: J`
14
20
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['2 + 3 * 4', 'Multiply first: 3 * 4 = 12. Then 2 + 12 = <b>14</b>.'],
          ['(2 + 3) * 4', 'Parentheses first: 5. Then 5 * 4 = <b>20</b>.']
        ], ar: 'الأقواس أولاً ثم الضرب ثم الجمع.' },
        { type: 'check', q: 'What is <code>10 - 2 * 3</code>?', options: ['4', '24', '16', '6'], answer: 0, explain: '2 * 3 = 6 first, then 10 - 6 = 4.', ar: '4' },
        { type: 'h', en: 'Same level: left to right' },
        { type: 'p', en: 'When two operators have the same level, Java goes from left to right. This matters for subtraction and for mixing <code>/</code> and <code>*</code>.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(20 - 6 - 4);
        System.out.println(20 / 4 * 2);
        System.out.println(7 + 10 % 3);
    }
}
`, out: J`
10
10
8
` },
        { type: 'lines', rows: [
          ['20 - 6 - 4', 'Left to right: 20 - 6 = 14, then 14 - 4 = <b>10</b>.'],
          ['20 / 4 * 2', 'Left to right: 20 / 4 = 5, then 5 * 2 = <b>10</b>.'],
          ['7 + 10 % 3', '% first: 10 % 3 = 1. Then 7 + 1 = <b>8</b>.']
        ] },
        { type: 'check', q: 'What is <code>24 / 4 / 2</code>?', options: ['3', '12', '48', '0'], answer: 0, explain: 'Left to right: 24 / 4 = 6, then 6 / 2 = 3.', ar: '3' },
        { type: 'h', en: 'The average trap' },
        { type: 'p', en: 'A very common logic error is to forget parentheses. To find the average of 80 and 90 you need <code>(80 + 90) / 2</code>, not <code>80 + 90 / 2</code>. Also, if the numbers are all int, the average loses its decimals, so divide by <code>2.0</code> when you need them.' },
        { type: 'analogy', title: 'Brackets are a gift', en: 'Parentheses are free. When in doubt, add them. They also make your code easier to read for you and for others.' },
        { type: 'steps', title: 'Average of three marks', problem: 'Marks: 80, 90 and 100. Print the average as a decimal.',
          steps: [
            { en: 'Add the three marks. They must be added <b>before</b> dividing, so use parentheses.', code: '(80 + 90 + 100)' },
            { en: 'Divide by 3.0 to keep the decimals.', code: '(80 + 90 + 100) / 3.0' },
            { en: 'Store the result in a <code>double</code>.', code: 'double average = (80 + 90 + 100) / 3.0;' },
            { en: 'Print it. Check by hand: 270 / 3 = 90, so we expect <code>90.0</code>.', code: 'System.out.println("Average: " + average);' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        double average = (80 + 90 + 100) / 3.0;
        System.out.println("Average: " + average);
    }
}
`, out: 'Average: 90.0', ar: 'نجمع بين الأقواس ثم نقسم على 3.0.' },
        { type: 'note', kind: 'exam', en: '<code>5 / 9 * 32</code> is <code>0</code>, because <code>5 / 9</code> is an int division and gives 0. Write <code>5.0 / 9</code> instead.', ar: '5 / 9 تساوي صفراً لأن الطرفين صحيحان.' }
      ],
      mistakes: [
        { title: 'Forgetting parentheses in an average', en: 'This is wrong: <code>80 + 90 / 2</code>. Write <code>(80 + 90) / 2</code>.' },
        { title: 'Doing + before *', en: 'Multiplication comes first.', code: '2 + 3 * 4   // 14, not 20' },
        { title: 'Dividing everything as int', en: 'Use a decimal like <code>3.0</code> when you need decimals.' },
        { title: 'Going right to left for - and /', en: 'Same-level operators go from left to right.' }
      ],
      remember: ['Parentheses first.', '<code>* / %</code> before <code>+ -</code>.', 'Same level: left to right.', 'Add parentheses when unsure.', 'Divide by a double (<code>3.0</code>) to keep the decimals.'],
      rememberAr: 'الأقواس أولاً، ثم * / %، ثم + -، وعند التساوي من اليسار إلى اليمين.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(3 + 4 * 2);
`, answer: '11', explain: '4 * 2 = 8, then 3 + 8 = 11.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println((3 + 4) * 2);
`, answer: '14', explain: 'Parentheses first.' },
        { t: 'output', q: 'Apply precedence. What is printed?', code: J`
System.out.println(10 + 6 / 4 * 3 - 1);
System.out.println((10 + 6) / (4 * 2));
`, answer: '12\n2', explain: 'First line: 6 / 4 = 1, 1 * 3 = 3, 10 + 3 - 1 = 12. Second: 16 / 8 = 2.' },
        { t: 'mcq', q: 'What is the value of <code>2 + 3 * 4 % 5</code>?', options: ['0', '4', '14', '5'], answer: 1, explain: '3 * 4 = 12, 12 % 5 = 2, then 2 + 2 = 4.' },
        { t: 'fill', q: 'Add parentheses so the line prints the average 85 of the marks 80 and 90.', code: J`
System.out.println(___80 + 90___ / 2);
`, answers: ['(', ')'], explain: 'The sum must be calculated first.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(1 / 2 * 10.0);
System.out.println(1.0 / 2 * 10);
`, answer: '0.0\n5.0', explain: 'First: 1 / 2 is 0 (int division), 0 * 10.0 = 0.0. Second: 0.5 * 10 = 5.0.' },
        { t: 'order', q: 'Order the lines to print the average of 70 and 90 as a decimal (80.0).', lines: ['double average = (70 + 90) / 2.0;', 'System.out.println(average);'], explain: 'Calculate and store, then print.' },
        { t: 'code', q: 'Print the average of the three marks 70, 85 and 100 as a decimal. Print only the number. No input.', qAr: 'استخدم أقواساً وقسمة على 3.0.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // print the average of 70, 85 and 100
    }
}
`, tests: [{ stdin: '', expected: '85.0' }], solution: J`
public class Main {
    public static void main(String[] args) {
        double average = (70 + 85 + 100) / 3.0;
        System.out.println(average);
    }
}
`, hint: '(70 + 85 + 100) / 3.0', explain: '255 / 3.0 = 85.0.' }
      ]
    },
    {
      title: 'Reading input with Scanner',
      titleAr: 'قراءة المدخلات باستخدام Scanner',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why read input?' },
        { type: 'p', en: 'So far your programs always use the same numbers. Real programs ask the user: "What is your mark?" Then the same program works for every student. In Java, a tool called <b>Scanner</b> reads what the user types on the keyboard.',
          ar: 'Scanner أداة تقرأ ما يكتبه المستخدم على لوحة المفاتيح.' },
        { type: 'analogy', title: 'A waiter taking your order', en: 'The waiter listens and writes what you say. The Scanner listens to the keyboard and gives your program what you typed.' },
        { type: 'h', en: 'Setting up a Scanner' },
        { type: 'p', en: 'You need two lines. The first is an <b>import</b> at the very top of the file: it tells Java where the Scanner tool lives. The second creates a Scanner connected to the keyboard (<code>System.in</code>).' },
        { type: 'code', code: J`
import java.util.Scanner;

Scanner input = new Scanner(System.in);
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['import java.util.Scanner;', 'Bring the Scanner tool into the program. Write it <b>above</b> <code>public class Main</code>.'],
          ['Scanner input = new Scanner(System.in);', 'Create a Scanner named <code>input</code> that reads from the keyboard. Write it inside <code>main</code>.']
        ], ar: 'نستورد Scanner ثم ننشئه داخل main.' },
        { type: 'check', q: 'Where does the <code>import</code> line go?', options: ['At the top, above the class', 'Inside main', 'At the very end', 'It is optional'], answer: 0, explain: 'Imports come before the class.', ar: 'في أعلى الملف.' },
        { type: 'h', en: 'Reading values' },
        { type: 'p', en: 'Each type of value has its own read method. The method returns the value, and you store it in a variable of the right type.' },
        { type: 'table', head: ['Method', 'Reads', 'Typed', 'Value'], rows: [
          ['<code>nextInt()</code>', 'a whole number', '<code>42</code>', '42'],
          ['<code>nextDouble()</code>', 'a decimal number', '<code>3.75</code>', '3.75'],
          ['<code>next()</code>', 'one word (stops at a space)', '<code>Sara Ali</code>', '"Sara"']
        ] },
        { type: 'code', run: true, stdin: '12 30', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        System.out.println(a + b);
    }
}
`, out: '42' },
        { type: 'lines', rows: [
          ['int a = input.nextInt();', 'Wait for a whole number, store it in <code>a</code> (here 12).'],
          ['int b = input.nextInt();', 'Read the next whole number into <code>b</code> (here 30).'],
          ['System.out.println(a + b);', 'Both are numbers, so + adds: 42.']
        ], ar: 'نقرأ كل قيمة ونخزنها في متغير من النوع المناسب.' },
        { type: 'check', q: 'Which method reads a price such as 7.5?', options: ['nextDouble()', 'nextInt()', 'next()', 'nextPrice()'], answer: 0, explain: 'A decimal number is read by nextDouble.', ar: 'nextDouble' },
        { type: 'p', en: 'You can type values on one line separated by spaces or on separate lines. <code>nextInt</code>, <code>nextDouble</code> and <code>next</code> skip the spaces and line breaks between values. Press Run with the sample input <code>Sara 19 3.5</code>.' },
        { type: 'code', run: true, stdin: 'Sara 19 3.5', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter your first name, age and GPA:");
        String name = input.next();
        int age = input.nextInt();
        double gpa = input.nextDouble();
        System.out.println(name + " is " + age + " years old, GPA " + gpa);
    }
}
`, out: J`
Enter your first name, age and GPA:
Sara is 19 years old, GPA 3.5
` },
        { type: 'note', kind: 'tip', en: 'In NetBeans, print a <b>prompt</b> (a question) before each read so the user knows what to type. In the auto-checked exercises on this site, do <b>not</b> print prompts: only the requested output is compared.', ar: 'في التمارين المصححة آلياً لا تطبع{{g:|ي}} رسائل طلب الإدخال.' },
        { type: 'steps', title: 'Total price of coffee cups', problem: 'Read the price of one coffee (a decimal) and the number of cups (a whole number). Print the total.',
          steps: [
            { en: 'Add the import above the class.', code: 'import java.util.Scanner;' },
            { en: 'Inside <code>main</code>, create the Scanner.', code: 'Scanner input = new Scanner(System.in);' },
            { en: 'Read the price as a double and the cups as an int.', code: 'double price = input.nextDouble();\nint cups = input.nextInt();' },
            { en: 'Calculate and print. Sample input: <code>7.5 4</code>. Check: 7.5 x 4 = 30.0.', code: 'System.out.println("Total: " + price * cups);' },
            { en: 'The whole program (the sample input is filled in for you):' }
          ],
          stdin: '7.5 4',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double price = input.nextDouble();
        int cups = input.nextInt();
        System.out.println("Total: " + price * cups);
    }
}
`, out: 'Total: 30.0', ar: 'نقرأ القيم بالترتيب الذي كُتبت به.' },
        { type: 'note', kind: 'exam', en: 'If the user types <code>abc</code> but the program calls <code>nextInt()</code>, Java crashes with <code>InputMismatchException</code>. That is a runtime error.' }
      ],
      mistakes: [
        { title: 'Forgetting the import', en: 'Without it, Java says it cannot find Scanner.', code: 'Scanner input = new Scanner(System.in);   // no import line' },
        { title: 'Putting the import inside main', en: 'It must be at the top, outside the class.' },
        { title: 'Wrong read method for the type', en: 'Reading a decimal with <code>nextInt()</code> crashes.', code: 'int price = input.nextInt();   // user types 7.5' },
        { title: 'Reading in the wrong order', en: 'The first value typed goes to the first read.' }
      ],
      remember: ['Add <code>import java.util.Scanner;</code> at the top.', 'Create it: <code>Scanner input = new Scanner(System.in);</code>.', '<code>nextInt()</code> whole, <code>nextDouble()</code> decimal, <code>next()</code> one word.', 'Values are read in the order they are typed.', 'No prompts in auto-checked exercises.'],
      rememberAr: 'نستورد Scanner وننشئه ثم نقرأ بالدالة المناسبة للنوع بالترتيب نفسه.',
      practice: [
        { t: 'mcq', q: 'Which statement must appear before <code>public class Main</code> to use Scanner?', options: ['<code>import java.util.Scanner;</code>', '<code>import java.io.Scanner;</code>', '<code>include Scanner;</code>', '<code>use Scanner;</code>'], answer: 0, explain: 'Scanner is in java.util.' },
        { t: 'mcq', q: 'Which method reads a whole number?', options: ['<code>nextInt()</code>', '<code>nextDouble()</code>', '<code>next()</code>', '<code>nextLine()</code>'], answer: 0, explain: 'nextInt reads int values.' },
        { t: 'output', q: 'The user types <code>17 5</code>. What is printed?', code: J`
Scanner input = new Scanner(System.in);
int a = input.nextInt();
int b = input.nextInt();
System.out.println(a + b);
System.out.println(a / b);
System.out.println(a % b);
`, answer: '22\n3\n2', explain: 'a = 17, b = 5: sum 22, whole division 3, remainder 2.' },
        { t: 'fill', q: 'Complete the code that reads a price with a decimal point.', code: J`
import java.util.___;

Scanner input = new Scanner(System.___);
double price = input.___();
`, answers: ['Scanner', 'in', 'nextDouble'], explain: 'Import Scanner, connect it to System.in, read with nextDouble.' },
        { t: 'output', q: 'The user types <code>Ali 20</code>. What is printed?', code: J`
Scanner input = new Scanner(System.in);
String name = input.next();
int age = input.nextInt();
System.out.println(age + 1);
System.out.println(name);
`, answer: '21\nAli', explain: 'name = Ali, age = 20. age + 1 = 21.' },
        { t: 'order', q: 'Order the lines to read one whole number and print double of it.', lines: ['import java.util.Scanner;', 'public class Main {', '    public static void main(String[] args) {', '        Scanner input = new Scanner(System.in);', '        int n = input.nextInt();', '        System.out.println(n * 2);', '    }', '}'], explain: 'Import first, then class, main, scanner, read, print.' },
        { t: 'code', q: 'Read two whole numbers (width and height) and print the area. Print only the number. No prompts.', qAr: 'اقرأ العرض والارتفاع واطبع المساحة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // read width and height, print the area
    }
}
`, tests: [{ stdin: '5 3', expected: '15' }, { stdin: '10\n4', expected: '40' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int width = input.nextInt();
        int height = input.nextInt();
        System.out.println(width * height);
    }
}
`, hint: 'Read two ints, then multiply.', explain: 'Area = width * height.' },
        { t: 'code', q: 'Read the number of minutes and print <code>M minutes = H h R min</code>. For <code>135</code> print <code>135 minutes = 2 h 15 min</code>. No prompts.', qAr: 'استخدم / و %.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // read minutes, compute hours and remaining minutes
    }
}
`, tests: [{ stdin: '135', expected: '135 minutes = 2 h 15 min' }, { stdin: '59', expected: '59 minutes = 0 h 59 min' }, { stdin: '600', expected: '600 minutes = 10 h 0 min' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int minutes = input.nextInt();
        int hours = minutes / 60;
        int rest = minutes % 60;
        System.out.println(minutes + " minutes = " + hours + " h " + rest + " min");
    }
}
`, hint: 'hours = minutes / 60; rest = minutes % 60.', explain: 'Whole division counts hours; remainder gives minutes.' }
      ]
    },
    {
      title: 'Reading text lines: next() and nextLine()',
      titleAr: 'قراءة النصوص: next() وnextLine()',
      minutes: 25,
      body: [
        { type: 'h', en: 'One word or the whole line?' },
        { type: 'p', en: 'Names can have several words: "Sara Ali". The method <code>next()</code> reads only one word and stops at the first space. The method <code>nextLine()</code> reads everything until the end of the line, spaces included.',
          ar: 'next() تقرأ كلمة واحدة، و nextLine() تقرأ السطر كاملاً.' },
        { type: 'analogy', title: 'Taking one bite or a whole plate', en: '<code>next()</code> takes one bite (a word). <code>nextLine()</code> takes the whole plate (the line).' },
        { type: 'code', run: true, stdin: 'Computer Science\nRiyadh Saudi Arabia', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String major = input.nextLine();
        String city = input.next();
        System.out.println("Major: " + major);
        System.out.println("City: " + city);
    }
}
`, out: J`
Major: Computer Science
City: Riyadh
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['String major = input.nextLine();', 'Reads the whole first line: <code>Computer Science</code>.'],
          ['String city = input.next();', 'Reads just one word from the second line: <code>Riyadh</code>.']
        ], ar: 'سطر كامل ثم كلمة واحدة.' },
        { type: 'check', q: 'The user types <code>Ali Hassan</code>. Which method reads the full name?', options: ['nextLine()', 'next()', 'nextInt()', 'nextName()'], answer: 0, explain: 'nextLine reads the whole line.', ar: 'nextLine' },
        { type: 'h', en: 'The line-break trap' },
        { type: 'p', en: 'When the user types <code>20</code> and presses Enter, the keyboard sends the number <b>and</b> an invisible line break. <code>nextInt()</code> takes the 20 but leaves the line break behind. If <code>nextLine()</code> comes next, it reads that leftover break and returns an <b>empty</b> text.',
          ar: 'بعد nextInt يبقى سطر جديد، فتقرأ nextLine بعده نصاً فارغاً.' },
        { type: 'analogy', title: 'A crumb left on the plate', en: 'You eat the main dish (the number) but leave a crumb (the line break). The next "eat the whole plate" command finds only the crumb and finishes at once with nothing useful.' },
        { type: 'code', run: true, stdin: '20\nSara Ali', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        String name = input.nextLine();
        System.out.println("Age: " + age);
        System.out.println("Name: [" + name + "]");
    }
}
`, out: J`
Age: 20
Name: []
` },
        { type: 'lines', rows: [
          ['int age = input.nextInt();', 'Reads 20, but the line break after it stays.'],
          ['String name = input.nextLine();', 'Reads the leftover line break only, so <code>name</code> is empty.'],
          ['"Name: [" + name + "]"', 'The square brackets show that the text is really empty.']
        ] },
        { type: 'check', q: 'After <code>nextInt()</code>, a <code>nextLine()</code> returns...', options: ['An empty text', 'The next line of text', 'The number', 'An error'], answer: 0, explain: 'It reads the leftover line break.', ar: 'نصاً فارغاً.' },
        { type: 'h', en: 'The fix' },
        { type: 'p', en: 'Call <code>input.nextLine();</code> once and throw the answer away. It removes the leftover break. Then the next <code>nextLine()</code> reads the real line.' },
        { type: 'code', run: true, stdin: '20\nSara Ali', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        input.nextLine();
        String name = input.nextLine();
        System.out.println("Age: " + age);
        System.out.println("Name: [" + name + "]");
    }
}
`, out: J`
Age: 20
Name: [Sara Ali]
` },
        { type: 'lines', rows: [
          ['input.nextLine();', 'Reads and discards the leftover line break. We do not store it.'],
          ['String name = input.nextLine();', 'Now reads the real line: <code>Sara Ali</code>.']
        ], ar: 'نستدعي nextLine مرة إضافية لنتخلص من السطر المتبقي.' },
        { type: 'steps', title: 'Read an age and a full name', problem: 'The first input line is an age. The second line is a full name. Print them in one sentence.',
          steps: [
            { en: 'Read the age with <code>nextInt()</code>.', code: 'int age = input.nextInt();' },
            { en: 'Remove the leftover line break.', code: 'input.nextLine();' },
            { en: 'Read the whole name line.', code: 'String name = input.nextLine();' },
            { en: 'Print. Sample input: <code>19</code> then <code>Noura Saleh</code>.', code: 'System.out.println(name + " is " + age);' },
            { en: 'The complete program:' }
          ],
          stdin: '19\nNoura Saleh',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        input.nextLine();
        String name = input.nextLine();
        System.out.println(name + " is " + age);
    }
}
`, out: 'Noura Saleh is 19', ar: 'ننظف السطر المتبقي قبل قراءة النص.' },
        { type: 'note', kind: 'tip', en: 'If you read the full name <b>first</b> (before any number), there is no leftover and no trap. That is a simple way to avoid the problem.' }
      ],
      mistakes: [
        { title: 'Using next() for a full name', en: 'It reads only the first word.', code: 'String name = input.next();   // "Sara Ali" gives "Sara"' },
        { title: 'nextLine() right after nextInt()', en: 'It returns an empty text.', code: 'int age = input.nextInt();\nString name = input.nextLine();' },
        { title: 'Storing the extra nextLine()', en: 'It is only for cleaning; you do not need a variable.' },
        { title: 'Expecting nextLine() to skip empty lines', en: 'It reads exactly one line, even an empty one.' }
      ],
      remember: ['<code>next()</code> = one word; <code>nextLine()</code> = whole line.', 'After <code>nextInt()</code> or <code>nextDouble()</code>, a line break stays behind.', 'Fix: call <code>input.nextLine();</code> once to remove it.', 'Or read the text line first.'],
      rememberAr: 'next() كلمة، nextLine() سطر. بعد nextInt استدعِ nextLine مرة لتنظيف السطر المتبقي.',
      practice: [
        { t: 'mcq', q: 'The user types <code>Ali Hassan</code>. What does <code>next()</code> return?', options: ['Ali', 'Ali Hassan', 'Hassan', 'Nothing'], answer: 0, explain: 'next stops at the first space.' },
        { t: 'mcq', q: 'Which method reads the whole line, spaces included?', options: ['<code>nextLine()</code>', '<code>next()</code>', '<code>nextInt()</code>', '<code>nextWord()</code>'], answer: 0, explain: 'nextLine reads to the end of the line.' },
        { t: 'output', q: 'The user types <code>Sara Ali</code> and Enter. What is printed?', code: J`
Scanner input = new Scanner(System.in);
String a = input.next();
String b = input.next();
System.out.println(b + " " + a);
`, answer: 'Ali Sara', explain: 'a = Sara, b = Ali, printed in reverse.' },
        { t: 'output', q: 'The user types <code>21</code>, Enter, then <code>Noura Saleh</code>, Enter. What is printed?', code: J`
Scanner input = new Scanner(System.in);
int age = input.nextInt();
String name = input.nextLine();
System.out.println("Name=" + name + ";");
System.out.println("Age=" + age);
`, answer: 'Name=;\nAge=21', explain: 'nextLine reads the leftover line break, so name is empty.' },
        { t: 'fill', q: 'Fix the trap by filling the missing statement.', code: J`
int age = input.nextInt();
input.___();
String name = input.nextLine();
`, answers: ['nextLine'], explain: 'An extra nextLine removes the leftover line break.' },
        { t: 'order', q: 'Order the statements to read an age, then a full name, correctly.', lines: ['int age = input.nextInt();', 'input.nextLine();', 'String name = input.nextLine();'], explain: 'Clean the line break between them.' },
        { t: 'mcq', q: 'The user types <code>3</code>, Enter, <code>Riyadh</code>. What is in <code>city</code>?', code: J`
int n = input.nextInt();
String city = input.nextLine();
`, options: ['"Riyadh"', '"3"', 'An empty text', 'An error'], answer: 2, explain: 'nextLine reads only the leftover line break.' },
        { t: 'code', q: 'The first line is a full name and the second line is a whole number (an age). Print <code>Name: ... Age: ...</code> on one line, like <code>Name: Sara Ali Age: 19</code>. No prompts.', qAr: 'اقرأ الاسم أولاً ثم العمر.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // read the name line, then the age
    }
}
`, tests: [{ stdin: 'Sara Ali\n19', expected: 'Name: Sara Ali Age: 19' }, { stdin: 'Omar\n22', expected: 'Name: Omar Age: 22' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine();
        int age = input.nextInt();
        System.out.println("Name: " + name + " Age: " + age);
    }
}
`, hint: 'Read the name with nextLine() first; no trap because nothing was read before.', explain: 'Reading the text first avoids the trap.' }
      ]
    },
    {
      title: 'Shortcuts: ++, -- and +=',
      titleAr: 'العمليات المختصرة',
      minutes: 25,
      body: [
        { type: 'h', en: 'Adding 1 is very common' },
        { type: 'p', en: 'Programs often count things: visitors, points, cups sold. Writing <code>count = count + 1;</code> again and again is long. Java gives a shorter way: <code>count++;</code>.',
          ar: 'count++ تزيد المتغير بمقدار 1، و count-- تنقصه 1.' },
        { type: 'analogy', title: 'A tally counter at the gym door', en: 'The guard presses a button every time a person enters. The number goes up by one. <code>++</code> is that button. <code>--</code> is the button for someone leaving.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int visits = 10;
        visits++;
        System.out.println(visits);
        visits--;
        System.out.println(visits);
    }
}
`, out: J`
11
10
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int visits = 10;', 'Start at 10.'],
          ['visits++;', 'Same as <code>visits = visits + 1;</code>. Now 11.'],
          ['visits--;', 'Same as <code>visits = visits - 1;</code>. Back to 10.']
        ], ar: 'نستخدم ++ و -- للعد.' },
        { type: 'check', q: 'After <code>int n = 7; n++;</code> what is n?', options: ['8', '7', '6', '77'], answer: 0, explain: 'n++ adds 1.', ar: '8' },
        { type: 'h', en: 'Compound assignment: +=, -=, *=, /=, %=' },
        { type: 'p', en: 'To add other numbers, use <code>+=</code>. The statement <code>points += 5;</code> means <code>points = points + 5;</code>. The same shortcut exists for <code>-</code>, <code>*</code>, <code>/</code> and <code>%</code>.' },
        { type: 'table', head: ['Shortcut', 'Same as'], rows: [
          ['<code>total += 5;</code>', '<code>total = total + 5;</code>'],
          ['<code>total -= 5;</code>', '<code>total = total - 5;</code>'],
          ['<code>total *= 5;</code>', '<code>total = total * 5;</code>'],
          ['<code>total /= 5;</code>', '<code>total = total / 5;</code>'],
          ['<code>total %= 5;</code>', '<code>total = total % 5;</code>']
        ] },
        { type: 'analogy', title: 'Adding to your savings', en: '"Put 5 riyals into my savings" is shorter than "take my savings, add 5, and store the new total". <code>+=</code> is the short sentence.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int points = 10;
        points += 5;
        System.out.println(points);
        points -= 3;
        System.out.println(points);
        points *= 2;
        System.out.println(points);
        points /= 5;
        System.out.println(points);
        points %= 3;
        System.out.println(points);
    }
}
`, out: J`
15
12
24
4
1
` },
        { type: 'lines', rows: [
          ['points += 5;', '10 + 5 = 15'],
          ['points -= 3;', '15 - 3 = 12'],
          ['points *= 2;', '12 * 2 = 24'],
          ['points /= 5;', '24 / 5 = 4 (int division)'],
          ['points %= 3;', '4 % 3 = 1']
        ] },
        { type: 'check', q: 'After <code>int x = 10; x -= 4;</code> what is x?', options: ['6', '14', '4', '10'], answer: 0, explain: 'x = x - 4 = 6.', ar: '6' },
        { type: 'h', en: 'Prefix and postfix' },
        { type: 'p', en: '<code>++</code> can go before the name (<code>++x</code>, <b>prefix</b>) or after it (<code>x++</code>, <b>postfix</b>). When it stands alone they do the same thing. The difference appears when you use the result in the same statement. Prefix: change first, then use. Postfix: use the old value, then change.',
          ar: 'القبلية تغيّر ثم تستخدم، والبعدية تستخدم القديم ثم تغيّر.' },
        { type: 'analogy', title: 'Ticket numbers', en: 'Postfix is like taking ticket number 5 and then the counter moves to 6. Prefix is like the counter moving to 6 first, and you take ticket 6.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = a++;
        System.out.println("a = " + a + ", b = " + b);
        int c = ++a;
        System.out.println("a = " + a + ", c = " + c);
    }
}
`, out: J`
a = 6, b = 5
a = 7, c = 7
` },
        { type: 'lines', rows: [
          ['int b = a++;', 'Postfix: b gets the old 5, then a becomes 6.'],
          ['int c = ++a;', 'Prefix: a becomes 7 first, then c gets 7.']
        ] },
        { type: 'check', q: 'After <code>int x = 3; int y = x++;</code>, what are x and y?', options: ['x = 4, y = 3', 'x = 3, y = 4', 'x = 4, y = 4', 'x = 3, y = 3'], answer: 0, explain: 'y gets the old 3; then x becomes 4.', ar: 'x = 4, y = 3' },
        { type: 'steps', title: 'A cafe counter', problem: 'A cafe has 10 customers. Two more arrive, then 5 leave. Show the final count.',
          steps: [
            { en: 'Start with the count.', code: 'int customers = 10;' },
            { en: 'Two arrive: use the shortcut twice (or <code>+= 2</code>).', code: 'customers += 2;' },
            { en: 'Five leave.', code: 'customers -= 5;' },
            { en: 'One more person enters: use <code>++</code>.', code: 'customers++;' },
            { en: 'Print it. Check: 10 + 2 = 12, 12 - 5 = 7, 7 + 1 = 8.', code: 'System.out.println("Customers: " + customers);' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int customers = 10;
        customers += 2;
        customers -= 5;
        customers++;
        System.out.println("Customers: " + customers);
    }
}
`, out: 'Customers: 8', ar: 'نستخدم += و -= و ++ لتحديث العدد.' },
        { type: 'note', kind: 'exam', en: 'When <code>count++;</code> or <code>++count;</code> stands alone as a statement, both do the same thing. The difference only matters inside a bigger expression.' }
      ],
      mistakes: [
        { title: 'Writing =+ instead of +=', en: 'The order matters: <code>x =+ 5</code> just assigns +5.', code: 'x =+ 5;' },
        { title: 'Mixing up prefix and postfix', en: '<code>y = x++</code> gives the old x; <code>y = ++x</code> gives the new x.' },
        { title: 'Forgetting that /= on int drops decimals', en: '<code>24 /= 5</code> style gives 4, not 4.8.' },
        { title: 'Using ++ on a number directly', en: 'It works only on variables.', code: '5++;' }
      ],
      remember: ['<code>x++</code> adds 1; <code>x--</code> subtracts 1.', '<code>x += n</code> means <code>x = x + n</code>; same for <code>-= *= /= %=</code>.', 'Prefix: change then use. Postfix: use then change.', 'Alone, both forms do the same.'],
      rememberAr: 'x++ تزيد 1، و x += n تعني x = x + n. القبلية تغيّر ثم تستخدم والبعدية العكس.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
int n = 5;
n++;
System.out.println(n);
`, answer: '6', explain: 'n++ adds 1.' },
        { t: 'output', q: 'What is printed?', code: J`
int n = 10;
n += 4;
System.out.println(n);
`, answer: '14', explain: '10 + 4.' },
        { t: 'output', q: 'What is printed?', code: J`
int n = 20;
n -= 4;
n /= 3;
n *= 2;
n %= 7;
System.out.println(n);
`, answer: '3', explain: '20-4=16; 16/3=5; 5*2=10; 10%7=3.' },
        { t: 'output', q: 'What is printed?', code: J`
int x = 3;
int y = x++ + ++x;
System.out.println(x);
System.out.println(y);
`, answer: '5\n8', explain: 'x++ gives 3 and makes x 4. Then ++x makes x 5 and gives 5. y = 3 + 5 = 8.' },
        { t: 'fill', q: 'Complete the code using the comments.', code: J`
int count = 0;
count___;      // count becomes 1
count ___ 4;   // count becomes 5
`, answers: [['++', '+= 1', '+=1'], ['+=']], explain: 'count++ adds 1, then += 4 adds 4.' },
        { t: 'mcq', q: 'After these statements, what are k and m?', code: J`
int k = 5;
int m = --k * 2;
`, options: ['k = 4, m = 8', 'k = 4, m = 10', 'k = 5, m = 8', 'k = 5, m = 10'], answer: 0, explain: 'Pre-decrement makes k 4 first. m = 4 * 2 = 8.' },
        { t: 'order', q: 'Order the lines so the program prints <code>7</code>.', lines: ['int score = 5;', 'score++;', 'score++;', 'System.out.println(score);'], explain: 'Start 5, add 1 twice: 7.' },
        { t: 'code', q: 'Start with <code>int money = 100;</code>. Add 50 using <code>+=</code>, then subtract 30 using <code>-=</code>, then print the result only. No input.', qAr: 'استخدم += ثم -=.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        int money = 100;
        // add 50, subtract 30, print
    }
}
`, tests: [{ stdin: '', expected: '120' }], solution: J`
public class Main {
    public static void main(String[] args) {
        int money = 100;
        money += 50;
        money -= 30;
        System.out.println(money);
    }
}
`, hint: '100 + 50 - 30.', explain: '150 - 30 = 120.' }
      ]
    },
    {
      title: 'Type conversion and casting',
      titleAr: 'تحويل الأنواع',
      minutes: 30,
      body: [
        { type: 'h', en: 'Mixing int and double' },
        { type: 'p', en: 'Sometimes you hold a whole number but need a decimal, or the other way. Java can convert between types. There are two directions: from a small box to a bigger box (safe) and from a big box to a smaller box (risky).',
          ar: 'التحويل من نوع صغير إلى كبير آمن وتلقائي، ومن كبير إلى صغير يحتاج cast.' },
        { type: 'analogy', title: 'Pouring water between bottles', en: 'Pouring a small glass of water into a big bottle is safe. Pouring a big bottle into a small glass may spill. Java lets you do the safe one automatically; for the risky one you must say so clearly.' },
        { type: 'h', en: 'Widening: automatic and safe' },
        { type: 'p', en: 'An <code>int</code> fits into a <code>double</code> without losing anything. Java does it for you. This is called <b>widening</b>. It also happens inside calculations: in <code>7 / 2.0</code>, the 7 becomes 7.0 first.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        double d = 5;
        System.out.println(d);
        System.out.println(7 / 2.0);
    }
}
`, out: J`
5.0
3.5
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['double d = 5;', 'The int 5 is automatically turned into 5.0.'],
          ['7 / 2.0', 'One side is a double, so 7 becomes 7.0 and the answer is 3.5.']
        ], ar: 'int إلى double تلقائي.' },
        { type: 'check', q: 'What does <code>double d = 8;</code> store?', options: ['8.0', '8', 'An error', '0.8'], answer: 0, explain: 'The int is widened to a double.', ar: '8.0' },
        { type: 'h', en: 'Narrowing: you must write a cast' },
        { type: 'p', en: 'Going from <code>double</code> to <code>int</code> can lose the decimal part, so Java refuses unless you say it clearly. A <b>cast</b> is the target type in parentheses before the value: <code>(int) 3.99</code>. The decimal part is <b>cut off</b>, not rounded.',
          ar: 'cast مثل (int) يحذف الكسر دون تقريب.' },
        { type: 'analogy', title: 'Cutting the cake with a knife', en: 'A cast to <code>int</code> cuts off the part after the decimal point, like cutting away a slice of cake. 3.99 becomes 3, not 4.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        double price = 19.99;
        int riyals = (int) price;
        System.out.println(riyals);
        System.out.println(price);
    }
}
`, out: J`
19
19.99
` },
        { type: 'lines', rows: [
          ['double price = 19.99;', 'A decimal.'],
          ['int riyals = (int) price;', 'Cast: take the whole part only: 19.'],
          ['System.out.println(price);', 'price itself is unchanged: 19.99.']
        ] },
        { type: 'check', q: 'What is <code>(int) 9.7</code>?', options: ['9', '10', '9.7', '8'], answer: 0, explain: 'The decimal part is cut off.', ar: '9' },
        { type: 'note', kind: 'warn', en: '<code>int x = 5.5;</code> does not compile: <i>possible lossy conversion from double to int</i>. Write <code>int x = (int) 5.5;</code> if you really want 5.' },
        { type: 'h', en: 'Casting to fix integer division' },
        { type: 'p', en: 'Remember that <code>7 / 2</code> is 3. To get 3.5, make one side a double <b>before</b> the division happens.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int total = 7;
        int count = 2;
        System.out.println(total / count);
        System.out.println((double) total / count);
        System.out.println((double) (total / count));
    }
}
`, out: J`
3
3.5
3.0
` },
        { type: 'lines', rows: [
          ['total / count', 'int / int: 3.'],
          ['(double) total / count', 'The cast applies to <code>total</code> only: 7.0 / 2 = 3.5.'],
          ['(double) (total / count)', 'The division happens first (3), then 3 is turned into 3.0. Too late!']
        ], ar: 'نحوّل قبل القسمة وليس بعدها.' },
        { type: 'check', q: 'What is <code>(double) 9 / 2</code>?', options: ['4.5', '4', '4.0', '5'], answer: 0, explain: 'The cast gives 9.0 first. Then 9.0 / 2 = 4.5.', ar: '4.5' },
        { type: 'steps', title: 'Average of two integer marks', problem: 'Two marks are stored in int variables: 85 and 90. Print the exact average.',
          steps: [
            { en: 'Store the marks.', code: 'int first = 85;\nint second = 90;' },
            { en: 'Add them. The sum is 175, an int.', code: 'int sum = first + second;' },
            { en: 'If you write <code>sum / 2</code>, you get 87. Cast the sum to a double before dividing.', code: 'double average = (double) sum / 2;' },
            { en: 'Print. Check: 175 / 2 = 87.5.', code: 'System.out.println("Average: " + average);' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int first = 85;
        int second = 90;
        int sum = first + second;
        double average = (double) sum / 2;
        System.out.println("Average: " + average);
    }
}
`, out: 'Average: 87.5', ar: 'نحوّل المجموع إلى double ثم نقسم.' },
        { type: 'note', kind: 'exam', en: 'Casting never changes the original variable. It produces a new value for that expression only.' }
      ],
      mistakes: [
        { title: 'Casting after the division', en: 'The decimal is already lost.', code: '(double) (7 / 2)   // 3.0' },
        { title: 'Expecting a cast to round', en: '<code>(int) 3.99</code> is 3, not 4.' },
        { title: 'Storing a double in an int without a cast', en: 'It does not compile.', code: 'int x = 5.5;' },
        { title: 'Forgetting that the cast applies to the next value only', en: '<code>(double) a / b</code> casts just <code>a</code>.' }
      ],
      remember: ['Small to big (int to double) is <b>automatic</b>.', 'Big to small needs a <b>cast</b>: <code>(int) 3.99</code>.', 'A cast to int <b>cuts off</b> the decimals.', 'Cast before dividing to keep the decimals.', 'A cast does not change the variable.'],
      rememberAr: 'int إلى double تلقائي، و double إلى int يحتاج (int) ويحذف الكسر، ويجب التحويل قبل القسمة.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
System.out.println((int) 9.7);
`, answer: '9', explain: 'The decimal is cut off.' },
        { t: 'output', q: 'What is printed?', code: J`
double d = 6;
System.out.println(d);
`, answer: '6.0', explain: 'The int 6 is widened to 6.0.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(9 / 2);
System.out.println(9 / 2.0);
System.out.println((int) 9.7);
System.out.println((double) 9 / 2);
`, answer: '4\n4.5\n9\n4.5', explain: '9 / 2 = 4 (int division). With 2.0: 4.5. The cast truncates. (double) 9 gives 9.0, then 9.0 / 2 = 4.5.' },
        { t: 'mcq', q: 'Which declaration does <b>not</b> compile without a cast?', options: ['<code>double d = 10;</code>', '<code>long n = 10;</code>', '<code>int i = 10.0;</code>', '<code>float f = 10;</code>'], answer: 2, explain: '10.0 is a double; storing it in an int is narrowing.' },
        { t: 'fill', q: 'Complete the cast so the result is 8.5.', code: J`
double avg = (___) 17 / 2;
`, answers: ['double'], explain: '17.0 / 2 = 8.5.' },
        { t: 'output', q: 'What is printed?', code: J`
double x = 7.9;
int y = (int) x;
System.out.println(y + 1);
System.out.println(x);
`, answer: '8\n7.9', explain: 'y = 7, so y + 1 = 8. x is unchanged.' },
        { t: 'order', q: 'Order the lines to print the exact average of 3 and 4 (3.5).', lines: ['int a = 3;', 'int b = 4;', 'double avg = (double) (a + b) / 2;', 'System.out.println(avg);'], explain: 'Declare, calculate with a cast, print.' },
        { t: 'code', q: 'Read two whole numbers, a and b. Print their exact average as a decimal (for example <code>3 4</code> prints <code>3.5</code>). No prompts.', qAr: 'حوّل المجموع إلى double قبل القسمة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // read a and b, print the average
    }
}
`, tests: [{ stdin: '3 4', expected: '3.5' }, { stdin: '10 20', expected: '15.0' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        double avg = (a + b) / 2.0;
        System.out.println(avg);
    }
}
`, hint: 'Divide by 2.0 or cast the sum to double first.', explain: '(3 + 4) / 2.0 = 3.5.' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'What is a variable?', options: ['A named box that holds a value', 'A kind of error', 'A keyboard key', 'A comment'], answer: 0, explain: 'A variable stores a value under a name.' },
    { t: 'output', q: 'What is printed?', code: J`
System.out.println(25 / 7 + 25 % 7);
`, answer: '7', explain: '25 / 7 = 3 and 25 % 7 = 4.' },
    { t: 'mcq', q: 'Which identifier is <b>invalid</b>?', options: ['<code>$total</code>', '<code>_count</code>', '<code>final</code>', '<code>studentName2</code>'], answer: 2, explain: '<code>final</code> is a reserved word.' },
    { t: 'output', q: 'What is printed?', code: J`
int a = 8;
int b = a-- - 2;
System.out.println(a + " " + b);
`, answer: '7 6', explain: 'Postfix uses the old 8: b = 6; then a is 7.' },
    { t: 'output', q: 'What is printed?', code: J`
System.out.println(1 / 2 * 10.0);
System.out.println(1.0 / 2 * 10);
`, answer: '0.0\n5.0', explain: '1 / 2 is 0 in the first line; 1.0 / 2 is 0.5 in the second.' },
    { t: 'output', q: 'What is printed?', code: J`
int max = 2147483647;
System.out.println(max + 1);
`, answer: '-2147483648', explain: 'Overflow wraps around.' },
    { t: 'mcq', q: 'The user types <code>3</code>, presses Enter, then types <code>Riyadh</code>. What is stored in <code>city</code>?', code: J`
int n = input.nextInt();
String city = input.nextLine();
`, options: ['"Riyadh"', '"3"', 'An empty string ""', 'A runtime error'], answer: 2, explain: 'nextInt leaves the line break, and nextLine reads just that.' },
    { t: 'mcq', q: 'Which line correctly declares a constant?', options: ['<code>constant double PI = 3.14159;</code>', '<code>final double PI = 3.14159;</code>', '<code>double final = 3.14159;</code>', '<code>static PI = 3.14159;</code>'], answer: 1, explain: 'Use final before the type.' },
    { t: 'output', q: 'What is printed?', code: J`
double x = 7.9;
int y = (int) x;
System.out.println(y + 1);
System.out.println(x);
`, answer: '8\n7.9', explain: 'The cast truncates; x is unchanged.' },
    { t: 'mcq', q: 'What is the value of <code>2 + 3 * 4 % 5</code>?', options: ['0', '4', '14', '5'], answer: 1, explain: '3 * 4 = 12, 12 % 5 = 2, 2 + 2 = 4.' },
    { t: 'mcq', q: 'Which type should store a single letter grade such as <code>\'A\'</code>?', options: ['<code>String</code> only', '<code>char</code>', '<code>int</code>', '<code>boolean</code>'], answer: 1, explain: 'A char holds one character in single quotes.' },
    { t: 'mcq', q: 'Which method reads a decimal number such as 3.75?', options: ['<code>nextInt()</code>', '<code>nextDouble()</code>', '<code>next()</code>', '<code>nextLine()</code>'], answer: 1, explain: 'nextDouble reads a double.' }
  ],
  lab: {
    t: 'code',
    q: 'Mini project: <b>Grade report</b>. The first input line is the student full name (it may contain spaces). The second line has three whole-number marks: quiz, midterm and final. Print the name, the total of the three marks, and the average as a <code>double</code> (for example <code>90.0</code>), exactly in this format:<br><code>Student: Sara Ali</code><br><code>Total: 270</code><br><code>Average: 90.0</code><br>Do not print any prompts.<br><br><b>Plan:</b> (1) read the full name with <code>nextLine()</code>, (2) read three ints with <code>nextInt()</code>, (3) add them in an int variable, (4) divide by <code>3.0</code> to get a double, (5) print three lines.',
    qAr: 'اقرأ الاسم كاملاً ثم ثلاث درجات، واطبع المجموع والمتوسط كعدد عشري.',
    starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // 1. read the full name
        // 2. read three marks
        // 3. compute total and average
        // 4. print the report
    }
}
`,
    tests: [
      { stdin: 'Sara Ali\n80 90 100', expected: 'Student: Sara Ali\nTotal: 270\nAverage: 90.0' },
      { stdin: 'Omar Khalid\n70 86 90', expected: 'Student: Omar Khalid\nTotal: 246\nAverage: 82.0' },
      { stdin: 'Lina\n60 61 62', expected: 'Student: Lina\nTotal: 183\nAverage: 61.0' }
    ],
    solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine();
        int quiz = input.nextInt();
        int midterm = input.nextInt();
        int finalExam = input.nextInt();
        int total = quiz + midterm + finalExam;
        double average = total / 3.0;
        System.out.println("Student: " + name);
        System.out.println("Total: " + total);
        System.out.println("Average: " + average);
    }
}
`,
    hint: 'Read the name with <code>nextLine()</code> first (no trap, because nothing was read before it). Divide by <code>3.0</code>, not 3. Note that <code>final</code> cannot be a variable name.',
    explain: 'Reading the name before the numbers avoids the nextLine trap. Dividing the int total by 3.0 gives a double.'
  },
  cheats: [
    { code: J`int count = 0;  double price = 9.5;`, note: 'Declare and initialize variables' },
    { code: J`final double VAT_RATE = 0.15;`, note: 'A named constant; cannot be reassigned' },
    { code: J`
import java.util.Scanner;
Scanner input = new Scanner(System.in);
`, note: 'Set up keyboard input' },
    { code: J`input.nextInt()  input.nextDouble()  input.next()  input.nextLine()`, note: 'Read an int, a double, one word, a whole line' },
    { code: J`input.nextLine();   // after nextInt`, note: 'Consume the leftover line break before reading a line' },
    { code: J`17 / 5 is 3     17 % 5 is 2     17.0 / 5 is 3.4`, note: 'int division drops decimals; % is the remainder' },
    { code: J`x++  ++x  x--  --x`, note: 'Postfix uses the old value; prefix uses the new value' },
    { code: J`x += 3;  x -= 3;  x *= 3;  x /= 3;  x %= 3;`, note: 'Compound assignment' },
    { code: J`(int) 3.99  is 3     (double) 7 / 2  is 3.5`, note: 'Casting: narrowing cuts decimals; cast before dividing' }
  ],
  glossary: [
    { term: 'Variable', ar: 'متغير', def: 'A named box in memory whose value can change.' },
    { term: 'Data type', ar: 'نوع البيانات', def: 'Tells Java what kind of value a variable holds.' },
    { term: 'Declaration', ar: 'تعريف/إعلان', def: 'A statement that creates a variable with its type and name.' },
    { term: 'Initialization', ar: 'تهيئة', def: 'Giving a variable its first value.' },
    { term: 'Assignment', ar: 'إسناد', def: 'Storing a value in a variable with the = operator.' },
    { term: 'Identifier', ar: 'معرّف', def: 'A name for a variable, constant, method or class.' },
    { term: 'Reserved word', ar: 'كلمة محجوزة', def: 'A word with special meaning in Java, such as int or class.' },
    { term: 'camelCase', ar: 'أسلوب الجمل', def: 'Naming style: first word small, next words start with a capital, e.g. studentName.' },
    { term: 'Constant', ar: 'ثابت', def: 'A variable declared final whose value cannot change.' },
    { term: 'Primitive data type', ar: 'نوع بيانات أولي', def: 'One of the eight built-in types: byte, short, int, long, float, double, char, boolean.' },
    { term: 'String', ar: 'سلسلة نصية', def: 'Text in double quotes; it is a class, not a primitive type.' },
    { term: 'Literal', ar: 'قيمة حرفية', def: 'A value written directly in code, such as 25, 3.5 or \'A\'.' },
    { term: 'Overflow', ar: 'فيضان', def: 'When a result is too large for its type and wraps around.' },
    { term: 'Operator', ar: 'معامل', def: 'A symbol that does an operation, such as + or %.' },
    { term: 'Integer division', ar: 'القسمة الصحيحة', def: 'Division of two ints; the decimal part is dropped.' },
    { term: 'Remainder (modulus)', ar: 'باقي القسمة', def: 'The value left over after integer division, computed with %.' },
    { term: 'Operator precedence', ar: 'أولوية العمليات', def: 'The rules that decide which operator is evaluated first.' },
    { term: 'Scanner', ar: 'الماسح (Scanner)', def: 'A class in java.util used to read input from the keyboard.' },
    { term: 'Import', ar: 'استيراد', def: 'A statement at the top of a file that brings in a tool such as Scanner.' },
    { term: 'Prompt', ar: 'رسالة طلب الإدخال', def: 'A message that tells the user what to type.' },
    { term: 'Increment / decrement', ar: 'الزيادة / النقصان', def: 'The ++ and -- operators that add or subtract 1.' },
    { term: 'Compound assignment', ar: 'الإسناد المركب', def: 'Operators such as += that combine an operation with assignment.' },
    { term: 'Widening conversion', ar: 'تحويل توسيعي', def: 'Automatic conversion to a bigger type, e.g. int to double.' },
    { term: 'Casting', ar: 'التحويل الصريح', def: 'Explicitly converting a value to another type, e.g. (int) 3.7.' }
  ]
});
