JP.unit({
  course: 'cs101',
  n: 2,
  title: 'Input, Variables and Data Types',
  titleAr: 'الإدخال والمتغيرات وأنواع البيانات',
  intro: 'Real programs work with data that changes: marks, prices, ages, balances. In this unit you learn, slowly and one idea at a time, how to store data in variables, choose the right data type, do arithmetic, read input from the keyboard with Scanner, and convert between whole numbers and decimals. Memory pictures show what happens inside the computer. At the end you join text and numbers, meet the limits of numbers, solve real problems with input → process → output, and practise the most common traps.',
  introAr: 'البرامج الحقيقية تتعامل مع بيانات متغيرة مثل الدرجات والأسعار. في هذه الوحدة نتعلم خطوة خطوة كيف نخزن البيانات في متغيرات ونختار نوعها ونجري العمليات الحسابية ونقرأ المدخلات ونحوّل بين الأنواع، ثم نحل مسائل حقيقية ونتدرب على الأخطاء الشائعة.',
  lessons: [
    {
      title: 'Variables: boxes that hold values',
      titleAr: 'المتغيرات: صناديق تحمل القيم',
      minutes: 35,
      body: [
        { type: 'h', en: 'Why do we need variables?' },
        { type: 'p', en: 'Imagine a program that shows a student\'s mark many times. If you type <code>85</code> everywhere and the mark changes, you must fix every place. A <b>variable</b> solves this: you store the value once, give it a name, and use the name.',
          ar: 'المتغير مكان في الذاكرة له اسم يحمل قيمة، فنكتب القيمة مرة واحدة ونستخدم الاسم.' },
        { type: 'analogy', title: 'A variable is a labelled box', en: 'Think of a box with a label on it, for example "mark". You put a number inside the box. Whenever you need the number, you look at the label and take what is in the box. You can also take it out and put a different number in.' },
        { type: 'p', en: 'Where are these boxes? They live in the computer\'s <b>memory</b> (RAM). Memory is like a huge wall of small lockers. When you create a variable, Java takes one free locker, sticks your name on it and keeps your value inside. The value stays there while the program runs. When the program ends, the lockers are emptied.' },
        { type: 'analogy', title: 'Contacts on your phone', en: 'You do not remember the phone numbers of your family. You save each number under a name, such as "Dad", and then you just tap the name. A variable works the same way: you save a value under a name and then use the name. If the number changes, you edit it in one place and every call uses the new number.' },
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
        { type: 'memory', title: 'A variable is a named box in memory', en: 'On the left you see the variables. Each one is a box with a type, a name and a value inside. Press Next to watch the boxes appear one by one, one box for each line.', code: J`
int mark = 85;
int absences = 2;
double gpa = 3.4;
`, frames: [
          { label: 'After <code>int mark = 85;</code>', vars: [{ name: 'mark', type: 'int', value: '85' }] },
          { label: 'After <code>int absences = 2;</code>', vars: [{ name: 'mark', type: 'int', value: '85' }, { name: 'absences', type: 'int', value: '2' }] },
          { label: 'After <code>double gpa = 3.4;</code>', vars: [{ name: 'mark', type: 'int', value: '85' }, { name: 'absences', type: 'int', value: '2' }, { name: 'gpa', type: 'double', value: '3.4' }] }
        ], ar: 'كل سطر ينشئ صندوقاً جديداً له نوع واسم وقيمة.' },
        { type: 'check', q: 'In <code>int age = 19;</code>, what is <code>age</code>?', options: ['The name of the variable', 'The type', 'The value', 'A comment'], answer: 0, explain: 'int is the type, age is the name and 19 is the value.', ar: 'اسم المتغير.' },
        { type: 'h', en: 'Declare first, fill the box later' },
        { type: 'p', en: 'You can also make the box first and put the value in later, on another line. This is useful when you do not know the value yet. But until you put a value in, the box is <b>empty</b>, and Java will not let you read it.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int age;
        age = 19;
        System.out.println(age);
    }
}
`, out: '19' },
        { type: 'memory', title: 'An empty box, then a full box', en: 'A question mark means: this box has no value yet.', frames: [
          { label: 'After <code>int age;</code>: the box exists but is empty', vars: [{ name: 'age', type: 'int', value: '?' }] },
          { label: 'After <code>age = 19;</code>: now it holds 19', vars: [{ name: 'age', type: 'int', value: '19' }] }
        ], ar: 'يمكن إنشاء المتغير أولاً ثم إعطاؤه قيمة لاحقاً، لكن لا تقرأ{{g:|ي}} قيمته قبل ذلك.' },
        { type: 'check', q: 'Which line puts the first value into <code>age</code>?', options: ['<code>int age;</code>', '<code>age = 19;</code>', '<code>System.out.println(age);</code>'], answer: 1, explain: '<code>int age;</code> only makes an empty box. <code>age = 19;</code> puts the first value in it.', ar: 'السطر الثاني يضع أول قيمة.' },
        { type: 'h', en: 'Three types to start with' },
        { type: 'p', en: 'For now, learn three types. You will meet the others in Lesson 4.' },
        { type: 'table', head: ['Type', 'Holds', 'Example'], rows: [
          ['<code>int</code>', 'a whole number', '<code>int students = 30;</code>'],
          ['<code>double</code>', 'a number with a decimal point', '<code>double price = 12.5;</code>'],
          ['<code>String</code>', 'text, in double quotes', '<code>String course = "CS101";</code>']
        ] },
        { type: 'analogy', title: 'Different boxes for different things', en: 'You do not keep soup in an envelope or a letter in a bottle. The type tells Java what shape of box to prepare: a whole-number box, a decimal box or a text box.' },
        { type: 'check', q: 'Which type should hold the price 12.5?', options: ['int', 'double', 'String', 'None'], answer: 1, explain: '12.5 has a decimal point, so double.', ar: 'double' },
        { type: 'p', en: 'To choose a type, ask two simple questions. Is it text? Then use <code>String</code>. Is it a number that can have a part after the decimal point (like riyals and halalas)? Then use <code>double</code>. A number that is always whole, like a count of people, uses <code>int</code>.' },
        { type: 'table', head: ['Value from daily life', 'Type', 'Why'], rows: [
          ['Students in your class: 32', '<code>int</code>', 'You cannot have half a student.'],
          ['Your phone battery: 76%', '<code>int</code>', 'The phone shows whole percents.'],
          ['Temperature in Riyadh: 43.5', '<code>double</code>', 'It can have a decimal part.'],
          ['A juice costs 3.50 riyals', '<code>double</code>', '50 halalas is the part after the point.'],
          ['Your city: Jeddah', '<code>String</code>', 'It is text, so it goes in double quotes.']
        ] },
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
        { type: 'h', en: 'Trace tables: check a program by hand' },
        { type: 'p', en: 'Programmers check a program with a <b>trace table</b>. It has one row for each line and one column for each variable. Each row shows what is in every box <b>after</b> that line runs. A dash means the box does not exist yet. Here is the trace table of the program above.' },
        { type: 'table', head: ['After the line', 'name', 'mark', 'Screen'], rows: [
          ['<code>String name = "Sara";</code>', '"Sara"', '—', ''],
          ['<code>int mark = 85;</code>', '"Sara"', '85', ''],
          ['<code>System.out.println(name + " got " + mark);</code>', '"Sara"', '85', '<code>Sara got 85</code>']
        ] },
        { type: 'p', en: 'Printing does not change any box. It only reads the values and shows them on the screen.', ar: 'جدول التتبع يبيّن قيمة كل متغير بعد كل سطر، والطباعة لا تغيّر القيم.' },
        { type: 'steps', title: 'Information about a metro trip', problem: 'Store the start station, the number of stops and the ticket price of a metro trip. Print three lines with labels.',
          steps: [
            { en: 'The station name is text, so it needs a <code>String</code>.', code: 'String station = "Olaya";' },
            { en: 'The number of stops is always whole, so use <code>int</code>.', code: 'int stops = 6;' },
            { en: 'A price can have halalas, so use <code>double</code>.', code: 'double fare = 4.0;' },
            { en: 'Print each value with a label. A <code>double</code> is printed with its decimal point, so we expect <code>4.0</code>, not <code>4</code>.', code: 'System.out.println("Fare: " + fare + " riyals");' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        String station = "Olaya";
        int stops = 6;
        double fare = 4.0;
        System.out.println("From: " + station);
        System.out.println("Stops: " + stops);
        System.out.println("Fare: " + fare + " riyals");
    }
}
`, out: J`
From: Olaya
Stops: 6
Fare: 4.0 riyals
`, ar: 'نختار نوعاً مناسباً لكل قيمة ثم نطبعها مع عنوان واضح.' },
        { type: 'note', kind: 'warn', en: 'A variable must have a value before you use it. <code>int total; System.out.println(total);</code> gives the error <i>variable total might not have been initialized</i>.' }
      ],
      mistakes: [
        { title: 'Forgetting the type', en: 'Java needs to know the type when the variable is created.', code: 'mark = 85;   // no type, the variable was never declared' },
        { title: 'Putting quotes around a variable name', en: 'This prints the word, not the value.', code: 'System.out.println("mark");' },
        { title: 'Wrong type for the value', en: 'A text value cannot go in an int box.', code: 'int mark = "eighty";' },
        { title: 'Using a variable before giving it a value', en: 'Always initialize before you use.', code: 'int total;\nSystem.out.println(total);' }
      ],
      remember: ['A <b>variable</b> is a named box in memory that holds a value.', 'Declare it with a <b>type</b> and a <b>name</b>: <code>int mark = 85;</code>.', '<code>int</code> = whole number, <code>double</code> = decimal, <code>String</code> = text.', 'No quotes: use the value. Quotes: plain text.', 'You may declare first (<code>int age;</code>) and fill it later, but never read an empty box.', 'A <b>trace table</b> shows every variable after every line.'],
      rememberAr: 'المتغير صندوق له اسم ونوع وقيمة. int للأعداد الصحيحة، double للعشرية، String للنص.',
      practice: [
        { t: 'mcq', q: 'In <code>int students = 30;</code>, what is <code>int</code>?', options: ['The type', 'The name', 'The value', 'A comment'], answer: 0, explain: 'int is the type of the box.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int cups = 3;
        System.out.println(cups);
    }
}
`, answer: '3', explain: 'The variable holds 3.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int cups = 3;
        System.out.println("cups");
    }
}
`, answer: 'cups', explain: 'Quotes print the word.' },
        { t: 'mcq', q: 'Which type is best for the price 7.25?', options: ['<code>int</code>', '<code>double</code>', '<code>String</code>', '<code>char</code>'], answer: 1, explain: 'It has a decimal point.' },
        { t: 'fill', q: 'Complete the declarations.', code: J`
___ age = 19;
___ city = "Riyadh";
`, answers: ['int', 'String'], explain: 'int for a whole number, String for text.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        String name = "Omar";
        int mark = 90;
        System.out.println(name + ": " + mark);
    }
}
`, answer: 'Omar: 90', explain: 'The variables are joined to the text with +.' },
        { t: 'order', q: 'Order the lines so the program prints <code>Price: 12.5</code>.', lines: ['public class Main {', '    public static void main(String[] args) {', '        double price = 12.5;', '        System.out.println("Price: " + price);', '    }', '}'], explain: 'The class and main come first. Inside main, declare the variable first and use it after.' },
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
`, hint: 'Join the variables with <code>+ ": " +</code>.', explain: 'Declare the two variables, then print them with +.' },
        { t: 'bug', q: 'This program should print <code>Huda got 92</code>, but it does not compile. Tap the line with the bug.', qAr: 'ابحث{{g:|ي}} عن الصندوق الفارغ.',
          code: J`
public class Main {
    public static void main(String[] args) {
        String name = "Huda";
        int mark;
        System.out.println(name + " got " + mark);
    }
}
`, bug: [4, 5], fix: J`
public class Main {
    public static void main(String[] args) {
        String name = "Huda";
        int mark = 92;
        System.out.println(name + " got " + mark);
    }
}
`, hint: 'Which box is still empty when the program tries to print it?', explain: 'Line 4 makes the box <code>mark</code> but puts nothing in it. Line 5 then tries to read the empty box, so Java stops with <i>variable mark might not have been initialized</i>. Give the box a value when you declare it: <code>int mark = 92;</code>.', explainAr: 'لا يجوز قراءة متغير لم يأخذ قيمة بعد.' },
        { t: 'bug', q: 'A juice costs 3 riyals and 50 halalas. The program does not compile. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        String item = "Juice";
        int price = 3.50;
        System.out.println(item + ": " + price);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        String item = "Juice";
        double price = 3.50;
        System.out.println(item + ": " + price);
    }
}
`, hint: 'Look at the type of the price.', explain: 'An <code>int</code> box holds only whole numbers, so <code>3.50</code> cannot go in it (<i>possible lossy conversion from double to int</i>). A price with halalas needs a <code>double</code>. The fixed program prints <code>Juice: 3.5</code>.', explainAr: 'السعر الذي فيه هللات يحتاج double.' },
        { t: 'code', q: 'Declare <code>String name = "Faisal"</code>, <code>int age = 18</code> and <code>double height = 1.75</code>. Print exactly two lines: <code>Faisal is 18 years old</code> and <code>Height: 1.75 m</code>. Use the variables, not the values. No input.', qAr: 'استخدم{{g:|ي}} أسماء المتغيرات في الطباعة.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // declare name, age and height
        // print the two lines
    }
}
`, tests: [{ stdin: '', expected: 'Faisal is 18 years old\nHeight: 1.75 m' }], solution: J`
public class Main {
    public static void main(String[] args) {
        String name = "Faisal";
        int age = 18;
        double height = 1.75;
        System.out.println(name + " is " + age + " years old");
        System.out.println("Height: " + height + " m");
    }
}
`, hint: 'Remember the spaces inside the quotes: <code>" is "</code> and <code>" years old"</code>.', explain: 'Each value has its own box with the right type, and the text around it is in quotes.' }
      ]
    },
    {
      title: 'Assignment: changing the value in a variable',
      titleAr: 'الإسناد: تغيير القيمة في المتغير',
      minutes: 35,
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
        { type: 'memory', title: 'Assignment replaces the old value', en: 'A box holds only <b>one</b> value at a time. When a new value goes in, the old one is thrown away. Nothing keeps the 50.', frames: [
          { label: 'After <code>int wallet = 50;</code>', vars: [{ name: 'wallet', type: 'int', value: '50' }] },
          { label: 'After <code>wallet = 42;</code>: 50 is gone', vars: [{ name: 'wallet', type: 'int', value: '42' }] }
        ], ar: 'الصندوق يحمل قيمة واحدة فقط، والقيمة الجديدة تمحو القديمة.' },
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
        { type: 'h', en: 'Counting: x = x + 1' },
        { type: 'p', en: 'Counting is one of the most common jobs in programs: visitors to a shop, steps you walk, goals in a match. Each time something happens, the count goes up by one. In Java you write <code>visitors = visitors + 1;</code>. Read it as: "the new visitors is the old visitors plus one".' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int visitors = 0;
        visitors = visitors + 1;
        visitors = visitors + 1;
        visitors = visitors + 1;
        System.out.println(visitors);
    }
}
`, out: '3' },
        { type: 'memory', title: 'visitors = visitors + 1, step by step', en: 'Watch the box. Java first <b>reads</b> the old value, then adds 1, then <b>writes</b> the answer back into the same box.', frames: [
          { label: 'After <code>int visitors = 0;</code>', vars: [{ name: 'visitors', type: 'int', value: '0' }] },
          { label: 'First <code>visitors = visitors + 1;</code>: the right side is 0 + 1 = 1, and 1 goes into the box', vars: [{ name: 'visitors', type: 'int', value: '1' }] },
          { label: 'Second time: 1 + 1 = 2', vars: [{ name: 'visitors', type: 'int', value: '2' }] },
          { label: 'Third time: 2 + 1 = 3', vars: [{ name: 'visitors', type: 'int', value: '3' }] }
        ], ar: 'نقرأ القيمة القديمة ونضيف واحداً ثم نكتب الناتج في الصندوق نفسه.' },
        { type: 'check', q: 'After <code>int goals = 2; goals = goals + 1; goals = goals + 1;</code> what is goals?', options: ['4', '3', '2', '1'], answer: 0, explain: '2 + 1 = 3, then 3 + 1 = 4.', ar: '4' },
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
        { type: 'memory', title: 'b keeps its own copy', en: '<code>int b = a;</code> copies the <b>value</b> that is in a right now. After that, a and b are two separate boxes.', code: J`
int a = 2;
int b = a;
a = 7;
`, frames: [
          { label: 'After <code>int a = 2;</code>', vars: [{ name: 'a', type: 'int', value: '2' }] },
          { label: 'After <code>int b = a;</code>: the 2 is copied into b', vars: [{ name: 'a', type: 'int', value: '2' }, { name: 'b', type: 'int', value: '2' }] },
          { label: 'After <code>a = 7;</code>: only a changes', vars: [{ name: 'a', type: 'int', value: '7' }, { name: 'b', type: 'int', value: '2' }] }
        ], ar: 'b أخذ نسخة من القيمة، فلا يتغير عندما يتغير a.' },
        { type: 'check', q: 'After <code>int a = 2; int b = a; a = 7;</code> what is b?', options: ['2', '7', '9', '0'], answer: 0, explain: 'b copied the value 2 when it was created. Changing a later does not change b.', ar: '2' },
        { type: 'h', en: 'Swapping two values' },
        { type: 'p', en: 'Sometimes two values are in the wrong boxes. For example, a teacher typed the quiz mark in the midterm box and the midterm mark in the quiz box. You need to <b>swap</b> them: exchange the values of two variables. This looks easy, but there is a trap.' },
        { type: 'analogy', title: 'Two cups and an empty cup', en: 'You have juice in cup A and water in cup B, and you want to exchange them. If you pour B into A, the juice is lost! You need a third, empty cup: pour A into the empty cup, pour B into A, then pour the third cup into B. In Java the third cup is a <b>temporary variable</b>, often called <code>temp</code>.' },
        { type: 'p', en: 'First, look at the wrong way. Try to predict the output before you read it.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int quiz = 95;
        int midterm = 70;
        quiz = midterm;
        midterm = quiz;
        System.out.println(quiz + " " + midterm);
    }
}
`, out: '70 70' },
        { type: 'lines', title: 'Why both are 70', rows: [
          ['quiz = midterm;', 'quiz becomes 70. The old 95 is thrown away and lost.'],
          ['midterm = quiz;', 'quiz is already 70, so midterm gets 70 again.']
        ] },
        { type: 'p', en: 'The right way: save the first value in <code>temp</code> <b>before</b> you write over it.' },
        { type: 'memory', title: 'Swapping with a temporary variable', code: J`
int temp = quiz;
quiz = midterm;
midterm = temp;
`, frames: [
          { label: 'At the start', vars: [{ name: 'quiz', type: 'int', value: '95' }, { name: 'midterm', type: 'int', value: '70' }] },
          { label: 'After <code>int temp = quiz;</code>: 95 is safe in temp', vars: [{ name: 'quiz', type: 'int', value: '95' }, { name: 'midterm', type: 'int', value: '70' }, { name: 'temp', type: 'int', value: '95' }] },
          { label: 'After <code>quiz = midterm;</code>', vars: [{ name: 'quiz', type: 'int', value: '70' }, { name: 'midterm', type: 'int', value: '70' }, { name: 'temp', type: 'int', value: '95' }] },
          { label: 'After <code>midterm = temp;</code>: swapped!', vars: [{ name: 'quiz', type: 'int', value: '70' }, { name: 'midterm', type: 'int', value: '95' }, { name: 'temp', type: 'int', value: '95' }] }
        ], ar: 'نحفظ القيمة الأولى في temp قبل أن نكتب فوقها، ثم نكمل التبديل.' },
        { type: 'check', q: 'You want to swap <code>a</code> and <code>b</code>. Which line must come first?', options: ['<code>int temp = a;</code>', '<code>a = b;</code>', '<code>b = temp;</code>'], answer: 0, explain: 'Save a in temp first. If you start with <code>a = b;</code>, the old value of a is lost.', ar: 'نبدأ بحفظ a في temp.' },
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
        { type: 'table', head: ['After the line', 'money'], rows: [
          ['<code>int money = 50;</code>', '50'],
          ['<code>money = money - 8;</code>', '42'],
          ['<code>money = money - 12;</code>', '30'],
          ['<code>System.out.println("Left: " + money);</code>', '30 (prints <code>Left: 30</code>)']
        ] },
        { type: 'steps', title: 'Two classes in the wrong rooms', problem: 'Class A is in room 105 and class B is in room 210, but the rooms must be exchanged. Swap the two values and print the new rooms.',
          steps: [
            { en: 'Store the two rooms.', code: 'int roomA = 105;\nint roomB = 210;' },
            { en: 'Save room A in a temporary variable, so it is not lost.', code: 'int temp = roomA;' },
            { en: 'Copy room B into room A.', code: 'roomA = roomB;' },
            { en: 'Copy the saved value into room B.', code: 'roomB = temp;' },
            { en: 'Print. Check by hand: roomA should be 210 and roomB should be 105.', code: 'System.out.println("Class A: " + roomA);\nSystem.out.println("Class B: " + roomB);' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int roomA = 105;
        int roomB = 210;
        int temp = roomA;
        roomA = roomB;
        roomB = temp;
        System.out.println("Class A: " + roomA);
        System.out.println("Class B: " + roomB);
    }
}
`, out: J`
Class A: 210
Class B: 105
`, ar: 'التبديل يحتاج ثلاث خطوات ومتغيراً مؤقتاً.' },
        { type: 'note', kind: 'warn', en: 'Do not write <code>==</code> when you want to store a value. <code>==</code> is a different operator that <b>compares</b> two values (you will use it in Unit 3). The line <code>score == 10;</code> is an error: <i>not a statement</i>.', ar: 'للتخزين نستخدم = واحدة فقط.' },
        { type: 'note', kind: 'tip', en: 'When you trace a program, write a small table of the variables and update it after every line. It is the best way to find mistakes.' }
      ],
      mistakes: [
        { title: 'Declaring the same variable twice', en: 'Write the type only the first time.', code: 'int x = 5;\nint x = 8;   // error: already defined' },
        { title: 'Putting a value on the left', en: 'The left side must be a variable.', code: '10 = x;' },
        { title: 'Reading = as a maths equation', en: '<code>x = x + 1;</code> is not impossible. It means: new x = old x + 1.' },
        { title: 'Swapping without a temporary variable', en: 'The first value is lost, so both variables end with the same value. Save it in <code>temp</code> first.', code: 'a = b;\nb = a;   // both now hold the old b' }
      ],
      remember: ['<code>=</code> means: calculate the right side, store it on the left.', 'The new value replaces the old value; a box holds one value.', 'Do not repeat the type when you only change the value.', '<code>x = x + 1;</code> is valid: it adds one to x.', '<code>b = a;</code> copies the value; b does not follow a later.', 'Swap with a third variable: <code>temp = a; a = b; b = temp;</code>.'],
      rememberAr: 'العلامة = تعني احسب اليمين ثم خزّن في اليسار، والقيمة الجديدة تحل مكان القديمة.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 5;
        n = 8;
        System.out.println(n);
    }
}
`, answer: '8', explain: 'The new value 8 replaces 5.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 5;
        n = n + 2;
        System.out.println(n);
    }
}
`, answer: '7', explain: '5 + 2 = 7 is stored in n.' },
        { t: 'mcq', q: 'Which statement is a valid assignment (assume <code>int x, y;</code> exist)?', options: ['<code>x + 1 = y;</code>', '<code>5 = x;</code>', '<code>x = x + 1;</code>', '<code>int = 5;</code>'], answer: 2, explain: 'The left side must be a single variable.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int x = 4;
        int y = x + 3;
        x = y * 2;
        y = y - x;
        System.out.println(x + " " + y);
    }
}
`, answer: '14 -7', explain: 'y = 7, x = 14, then y = 7 - 14 = -7.' },
        { t: 'fill', q: 'You had 100 riyals and spent 35. Complete the code.', code: J`
int money = 100;
money = money ___ 35;
System.out.println(money);   // 65
`, answers: ['-'], explain: '100 - 35 = 65.' },
        { t: 'order', q: 'Order the statements so the program prints <code>12</code>.', lines: ['int a = 5;', 'a = a + 7;', 'System.out.println(a);'], explain: 'Declare, change, print.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int a = 2;
        int b = a;
        a = 7;
        System.out.println(a + " " + b);
    }
}
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
`, hint: 'Use <code>stock = stock - 6;</code>.', explain: '20 - 6 - 4 = 10.' },
        { t: 'bug', q: 'This program should swap the two marks and print <code>70 95</code>, but it prints <code>70 70</code>. Tap the line with the bug.', qAr: 'أين ضاعت القيمة 95؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        int first = 95;
        int second = 70;
        first = second;
        second = first;
        System.out.println(first + " " + second);
    }
}
`, bug: [5, 6], fix: J`
public class Main {
    public static void main(String[] args) {
        int first = 95;
        int second = 70;
        int temp = first;
        first = second;
        second = temp;
        System.out.println(first + " " + second);
    }
}
`, hint: 'After line 5, where is the value 95?', explain: 'Line 5 writes 70 over 95 before 95 was saved anywhere, so line 6 copies 70 back. Save the first value in a temporary variable before you replace it: <code>int temp = first; first = second; second = temp;</code>.', explainAr: 'يجب حفظ القيمة الأولى في متغير مؤقت قبل الكتابة فوقها.' },
        { t: 'bug', q: 'This program should add 5 bonus points and print <code>15</code>. It does not compile. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int score = 10;
        score == score + 5;
        System.out.println(score);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int score = 10;
        score = score + 5;
        System.out.println(score);
    }
}
`, hint: 'How many = signs does an assignment have?', explain: '<code>==</code> compares two values; it does not store anything, so Java says <i>not a statement</i>. To store a new value, use one <code>=</code>: <code>score = score + 5;</code>.', explainAr: 'الإسناد بعلامة = واحدة.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int left = 3;
        int right = 8;
        int temp = left;
        left = right;
        right = temp;
        System.out.println(left + " " + right);
    }
}
`, answer: '8 3', explain: 'temp saves 3, left becomes 8, then right gets the saved 3. The values are swapped.' },
        { t: 'code', q: 'Start with <code>int morning = 4;</code> and <code>int evening = 9;</code> (the hours of two classes, typed the wrong way round). Swap them using a third variable, then print <code>morning evening</code> with one space, so the output is <code>9 4</code>. No input.', qAr: 'استخدم{{g:|ي}} متغيراً مؤقتاً للتبديل.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        int morning = 4;
        int evening = 9;
        // swap the two values
        System.out.println(morning + " " + evening);
    }
}
`, tests: [{ stdin: '', expected: '9 4' }], solution: J`
public class Main {
    public static void main(String[] args) {
        int morning = 4;
        int evening = 9;
        int temp = morning;
        morning = evening;
        evening = temp;
        System.out.println(morning + " " + evening);
    }
}
`, hint: 'Three lines: <code>int temp = morning;</code>, then <code>morning = evening;</code>, then <code>evening = temp;</code>.', explain: 'The temporary variable keeps the first value safe while the other value is copied over it.' }
      ]
    },
    {
      title: 'Choosing names and using constants',
      titleAr: 'اختيار الأسماء واستخدام الثوابت',
      minutes: 30,
      body: [
        { type: 'h', en: 'Names (identifiers)' },
        { type: 'p', en: 'You choose the names of your variables. A name for a variable, method or class is called an <b>identifier</b>. Java has strict rules, and programmers also follow friendly habits so code is easy to read.',
          ar: 'المعرّف هو اسم المتغير أو الصنف أو الدالة.' },
        { type: 'analogy', title: 'Names on student cards', en: 'Every student card has a name that is clear and different. If two cards had the same name or an unreadable name, the library would be confused. Variable names need to be clear and unique too.' },
        { type: 'p', en: 'Why does a good name matter? Java does not care: <code>a</code> works as well as <code>students</code>. But people read code too, and that includes you next week. Compare these two pieces of code. They do the same work. Which one can you understand at once?' },
        { type: 'code', code: J`
// Hard to read: what are a, b and c?
int a = 30;
int b = 8;
int c = a * b;

// Easy to read: the names tell the story
int students = 30;
int pensEach = 8;
int totalPens = students * pensEach;
` },
        { type: 'p', en: 'The second version explains itself: 30 students, 8 pens each, so <code>totalPens</code> is the number of pens to buy. Good names are like good labels on boxes in a store room.', ar: 'الاسم الواضح يشرح الكود دون حاجة إلى تعليق.' },
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
        { type: 'p', en: 'You already know some reserved words from your first programs: <code>public</code>, <code>class</code>, <code>static</code>, <code>void</code>. In this unit you meet more: <code>int</code>, <code>double</code>, <code>final</code>, <code>new</code>, <code>import</code>. The words <code>true</code>, <code>false</code> and <code>null</code> cannot be names either. Editors such as NetBeans show reserved words in a special colour, which helps you notice them.' },
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
        { type: 'h', en: 'Why constants help: change one line' },
        { type: 'p', en: 'In Saudi Arabia, VAT (value added tax) is 15%. A shop program may use this rate in twenty places. If you type <code>0.15</code> twenty times and the rate changes one day, you must find and fix every copy, and you will probably miss one. With a constant you change <b>one</b> line, and the whole program follows.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        final double VAT_RATE = 0.15;
        double price = 100.0;
        double vat = price * VAT_RATE;
        double total = price + vat;
        System.out.println("VAT: " + vat);
        System.out.println("Total: " + total);
    }
}
`, out: J`
VAT: 15.0
Total: 115.0
` },
        { type: 'memory', title: 'A constant stays, a variable changes', en: 'The constant box is marked <code>final</code>. Variables around it may change many times, but the constant keeps its first value for the whole program.', code: J`
final double VAT_RATE = 0.15;
double price = 100.0;
double vat = price * VAT_RATE;
price = 200.0;
vat = price * VAT_RATE;
`, frames: [
          { label: 'After <code>final double VAT_RATE = 0.15;</code>', vars: [{ name: 'VAT_RATE', type: 'final double', value: '0.15' }] },
          { label: 'After <code>double price = 100.0;</code>', vars: [{ name: 'VAT_RATE', type: 'final double', value: '0.15' }, { name: 'price', type: 'double', value: '100.0' }] },
          { label: 'After <code>double vat = price * VAT_RATE;</code>', vars: [{ name: 'VAT_RATE', type: 'final double', value: '0.15' }, { name: 'price', type: 'double', value: '100.0' }, { name: 'vat', type: 'double', value: '15.0' }] },
          { label: 'After <code>price = 200.0;</code>', vars: [{ name: 'VAT_RATE', type: 'final double', value: '0.15' }, { name: 'price', type: 'double', value: '200.0' }, { name: 'vat', type: 'double', value: '15.0' }] },
          { label: 'After <code>vat = price * VAT_RATE;</code>: VAT_RATE never changed', vars: [{ name: 'VAT_RATE', type: 'final double', value: '0.15' }, { name: 'price', type: 'double', value: '200.0' }, { name: 'vat', type: 'double', value: '30.0' }] }
        ], ar: 'الثابت يبقى كما هو بينما تتغير المتغيرات حوله.' },
        { type: 'check', q: 'A café raises the price of all coffees. The program uses <code>final int PRICE_PER_COFFEE = 8;</code> in ten places. How many lines must you change?', options: ['One', 'Ten', 'Eleven', 'None: constants cannot change'], answer: 0, explain: 'Change the number in the declaration only. Every place that uses the name gets the new value the next time you run the program.', ar: 'سطر واحد فقط.' },
        { type: 'steps', title: 'Weekly metro cost', problem: 'A student takes the metro 2 times a day, 5 days a week. One trip costs 4.0 riyals. Print the cost of one week. Use constants for the values that do not change.',
          steps: [
            { en: 'Trips per day and the fare are fixed, so make them constants.', code: 'final int TRIPS_PER_DAY = 2;\nfinal double FARE = 4.0;' },
            { en: 'The number of days can change from week to week, so it is a normal variable.', code: 'int days = 5;' },
            { en: 'Multiply: trips per day, times days, times the fare.', code: 'double weekCost = TRIPS_PER_DAY * days * FARE;' },
            { en: 'Print with a label. Check by hand: 2 x 5 = 10 trips, 10 x 4.0 = 40.0.', code: 'System.out.println("Weekly cost: " + weekCost + " riyals");' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        final int TRIPS_PER_DAY = 2;
        final double FARE = 4.0;
        int days = 5;
        double weekCost = TRIPS_PER_DAY * days * FARE;
        System.out.println("Weekly cost: " + weekCost + " riyals");
    }
}
`, out: 'Weekly cost: 40.0 riyals', ar: 'القيم الثابتة نجعلها final، والقيم التي قد تتغير متغيرات عادية.' },
        { type: 'note', kind: 'exam', en: 'Assigning to a <code>final</code> variable is a <b>compile</b> error, not a runtime error.' }
      ],
      mistakes: [
        { title: 'Starting a name with a digit', en: 'Names cannot start with a number.', code: 'int 1stMark = 80;' },
        { title: 'Using a space or hyphen', en: 'These are not allowed in a name.', code: 'int my-mark = 80;' },
        { title: 'Using a reserved word', en: 'Words like <code>class</code> and <code>int</code> are taken.', code: 'int class = 5;' },
        { title: 'Changing a final variable', en: 'It is a compile error.', code: 'final int MAX = 10;\nMAX = 20;' }
      ],
      remember: ['An <b>identifier</b> is a name you choose; choose names that tell the story.', 'Names: letters, digits, <code>_</code>, <code>$</code>; not starting with a digit; no spaces; no reserved words.', 'Java is case-sensitive: <code>total</code> and <code>Total</code> are different.', 'Variables use camelCase; classes start with a capital.', 'Constants use <code>final</code> and ALL_CAPITALS.', 'A constant lets you change a fixed value (like VAT) in one place.'],
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
public class Main {
    public static void main(String[] args) {
        final int RATE = 5;
        int hours = 4;
        System.out.println(hours * RATE);
    }
}
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
`, hint: 'Multiply 7 by the constant.', explain: '7 times 24 is 168.' },
        { t: 'bug', q: 'This program does not compile. Tap the line with the bug.', qAr: 'هل يمكن تغيير قيمة الثابت؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        final double VAT_RATE = 0.15;
        double price = 100.0;
        VAT_RATE = 0.2;
        double vat = price * VAT_RATE;
        System.out.println(vat);
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        final double VAT_RATE = 0.15;
        double price = 100.0;
        double vat = price * VAT_RATE;
        System.out.println(vat);
    }
}
`, hint: 'Which variable is marked final?', explain: 'Line 5 tries to give the constant <code>VAT_RATE</code> a new value. Java refuses: <i>cannot assign a value to final variable VAT_RATE</i>. If the rate really changes, edit the number in line 3 instead. The fixed program prints <code>15.0</code>.', explainAr: 'لا يجوز إسناد قيمة جديدة إلى متغير final.' },
        { t: 'bug', q: 'This program does not compile: Java says <i>cannot find symbol</i>. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int totalMarks = 85;
        System.out.println("Total: " + TotalMarks);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int totalMarks = 85;
        System.out.println("Total: " + totalMarks);
    }
}
`, hint: 'Compare the two names letter by letter, small and capital.', explain: 'Java is case-sensitive. The variable is <code>totalMarks</code> with a small t, but line 4 uses <code>TotalMarks</code>, which does not exist. Use exactly the same spelling.', explainAr: 'الحروف الكبيرة والصغيرة مختلفة في جافا.' },
        { t: 'code', q: 'Use a constant <code>final double VAT_RATE = 0.15;</code> and a variable <code>double price = 80.0;</code>. Calculate the VAT and the total, then print exactly <code>VAT: 12.0</code> and <code>Total: 92.0</code> on two lines. No input.', qAr: 'احسب{{g:|ي}} الضريبة ثم المجموع.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        final double VAT_RATE = 0.15;
        double price = 80.0;
        // calculate vat and total, then print
    }
}
`, tests: [{ stdin: '', expected: 'VAT: 12.0\nTotal: 92.0' }], solution: J`
public class Main {
    public static void main(String[] args) {
        final double VAT_RATE = 0.15;
        double price = 80.0;
        double vat = price * VAT_RATE;
        double total = price + vat;
        System.out.println("VAT: " + vat);
        System.out.println("Total: " + total);
    }
}
`, hint: '<code>double vat = price * VAT_RATE;</code> then <code>double total = price + vat;</code>', explain: '80.0 x 0.15 = 12.0 and 80.0 + 12.0 = 92.0.' }
      ]
    },
    {
      title: 'Data types: choosing the right box',
      titleAr: 'أنواع البيانات: اختيار الصندوق المناسب',
      minutes: 35,
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
        { type: 'p', en: 'Why are there so many number types? Because each box has a fixed <b>size</b> in memory. Size is measured in <b>bits</b>; a bit is the smallest piece of memory and holds only 0 or 1. More bits make a bigger box, and a bigger box can hold bigger numbers. You do not need to learn the exact numbers by heart; know that <code>int</code> is about 2 billion and <code>long</code> is much bigger.' },
        { type: 'table', head: ['Type', 'Size', 'What fits (about)'], rows: [
          ['<code>byte</code>', '8 bits', '-128 to 127'],
          ['<code>short</code>', '16 bits', '-32,768 to 32,767'],
          ['<code>int</code>', '32 bits', '-2.1 billion to 2.1 billion'],
          ['<code>long</code>', '64 bits', 'about 9 followed by 18 zeros (both signs)'],
          ['<code>float</code>', '32 bits', 'decimals with about 7 correct digits'],
          ['<code>double</code>', '64 bits', 'decimals with about 15 to 16 correct digits'],
          ['<code>char</code>', '16 bits', 'one character'],
          ['<code>boolean</code>', '—', '<code>true</code> or <code>false</code>']
        ] },
        { type: 'h', en: 'boolean: only two values' },
        { type: 'p', en: 'Many things in life have only two states: the phone is charging or not, the Wi-Fi is on or off, the student passed or not. A <code>boolean</code> holds exactly one of two values: <code>true</code> or <code>false</code>. They are written without quotes. In Unit 3 you will use booleans to make decisions.', ar: 'boolean يحمل true أو false فقط، دون علامات اقتباس.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        boolean charging = false;
        boolean wifiOn = true;
        System.out.println("Charging: " + charging);
        System.out.println("Wi-Fi on: " + wifiOn);
    }
}
`, out: J`
Charging: false
Wi-Fi on: true
` },
        { type: 'check', q: 'Which line is correct?', options: ['<code>boolean open = true;</code>', '<code>boolean open = "true";</code>', '<code>boolean open = yes;</code>', '<code>boolean open = 1;</code>'], answer: 0, explain: 'A boolean takes only <code>true</code> or <code>false</code>, without quotes. Java does not use 1 or yes for booleans.', ar: 'true بدون اقتباس.' },
        { type: 'h', en: 'char and String: single or double quotes' },
        { type: 'p', en: 'A <code>char</code> is exactly <b>one</b> character in <b>single</b> quotes: <code>\'A\'</code>. A <code>String</code> is text of any length in <b>double</b> quotes: <code>"Ali"</code>. String starts with a capital S because it is not primitive.',
          ar: 'char حرف واحد بين اقتباس مفرد، وString نص بين اقتباس مزدوج.' },
        { type: 'analogy', title: 'A single seat and a whole row', en: 'A char is one seat. A String is a whole row of seats. One seat uses single quotes; a row uses double quotes.' },
        { type: 'check', q: 'Which declaration is correct?', options: ['char grade = \'B\';', 'char grade = "B";', 'String grade = \'B\';', 'int grade = \'B\' \'C\';'], answer: 0, explain: 'A char uses single quotes.', ar: 'اقتباس مفرد.' },
        { type: 'h', en: 'Where does a String live?' },
        { type: 'p', en: 'A primitive box keeps its value <b>inside</b> the box. A String is different: it is an <b>object</b>. Objects live in another part of memory called the <b>heap</b>, and the variable keeps only an <b>arrow</b> that points to the object. This arrow is called a <b>reference</b>. Keep it light for now: you will use this picture much more in later units.' },
        { type: 'memory', title: 'Primitive boxes and a String', code: J`
int students = 450;
char grade = 'A';
String name = "Sara";
`, frames: [
          { label: 'After <code>int students = 450;</code>: the value is inside the box', vars: [{ name: 'students', type: 'int', value: '450' }] },
          { label: 'After <code>char grade = \'A\';</code>', vars: [{ name: 'students', type: 'int', value: '450' }, { name: 'grade', type: 'char', value: "'A'" }] },
          { label: 'After <code>String name = "Sara";</code>: name holds an arrow to a String object', vars: [{ name: 'students', type: 'int', value: '450' }, { name: 'grade', type: 'char', value: "'A'" }, { name: 'name', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"Sara"' }] }] }
        ], ar: 'المتغير الأولي يحمل القيمة نفسها، أما متغير String فيحمل سهماً يشير إلى كائن النص.' },
        { type: 'p', en: 'In the rest of this unit, some memory pictures draw the text directly inside the box, like <code>"Sara"</code>, to keep them simple. Remember that behind it there is an arrow to an object.' },
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
        { type: 'steps', title: 'A weather report for Riyadh', problem: 'Store today\'s weather in Riyadh: the city, the temperature 43.5, the humidity 12 (a whole percent), the unit letter C and whether it is dusty (yes). Print three neat lines.',
          steps: [
            { en: 'Choose a type for each value: text, decimal, whole number, one letter, yes/no.', code: 'String city = "Riyadh";\ndouble temp = 43.5;\nint humidity = 12;\nchar unit = \'C\';\nboolean dusty = true;' },
            { en: 'Join the city, the temperature and the unit in one line. A space in quotes goes between the number and the letter.', code: 'System.out.println(city + ": " + temp + " " + unit);' },
            { en: 'Print the humidity with a % sign after it. Inside quotes, % is a normal character.', code: 'System.out.println("Humidity: " + humidity + "%");' },
            { en: 'Print the boolean. It is shown as the word <code>true</code>.', code: 'System.out.println("Dusty: " + dusty);' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        String city = "Riyadh";
        double temp = 43.5;
        int humidity = 12;
        char unit = 'C';
        boolean dusty = true;
        System.out.println(city + ": " + temp + " " + unit);
        System.out.println("Humidity: " + humidity + "%");
        System.out.println("Dusty: " + dusty);
    }
}
`, out: J`
Riyadh: 43.5 C
Humidity: 12%
Dusty: true
`, ar: 'كل قيمة لها نوع مناسب، ثم نجمعها مع النص في الطباعة.' },
        { type: 'note', kind: 'tip', en: 'A decimal number typed in code, like <code>2.5</code>, is a <code>double</code>. If you ever need a <code>float</code>, add <code>f</code>: <code>float f = 2.5f;</code>. In this course, use <code>double</code> for decimals.' },
        { type: 'note', kind: 'tip', en: 'Rule of thumb: whole number = <code>int</code>, decimal = <code>double</code>, text = <code>String</code>, one letter = <code>char</code>, yes/no = <code>boolean</code>.', ar: 'int للصحيح، double للعشري، String للنص.' }
      ],
      mistakes: [
        { title: 'Double quotes for a char', en: 'A char needs single quotes.', code: 'char grade = "A";' },
        { title: 'Quotes around true', en: 'A boolean value has no quotes.', code: 'boolean passed = "true";' },
        { title: 'Decimal value in an int', en: 'An int cannot store a decimal.', code: 'int price = 12.5;' },
        { title: 'Forgetting L on a very big number', en: 'Big numbers need <code>L</code> and the type <code>long</code>.', code: 'long people = 8000000000;' }
      ],
      remember: ['<code>int</code> whole, <code>double</code> decimal, <code>char</code> one character, <code>boolean</code> true/false.', '<code>char</code> uses single quotes; <code>String</code> uses double quotes; <code>true</code>/<code>false</code> use no quotes.', '<code>String</code> is not primitive: the variable holds a <b>reference</b> (an arrow) to a String object.', 'Each type has a fixed size in bits, so each has limits.', '<code>long</code> is for numbers too big for int; end the number with <code>L</code>.', 'Going past a limit causes <b>overflow</b> (wraps around).'],
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
public class Main {
    public static void main(String[] args) {
        char c = 'Z';
        boolean ok = false;
        System.out.println(c);
        System.out.println(ok);
    }
}
`, answer: 'Z\nfalse', explain: 'Each value is printed as it is.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int big = 2147483647;
        System.out.println(big + 1);
    }
}
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
`, hint: 'Use one println for each variable.', explain: 'Right types, then three prints.' },
        { t: 'bug', q: 'A video was watched 3 billion times. This program does not compile. Tap the line with the bug.', qAr: 'العدد أكبر من حد int.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int students = 450;
        long views = 3000000000;
        System.out.println(students);
        System.out.println(views);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int students = 450;
        long views = 3000000000L;
        System.out.println(students);
        System.out.println(views);
    }
}
`, hint: 'A whole number typed in code is an int unless it ends with a letter.', explain: 'Java reads <code>3000000000</code> as an <code>int</code> literal, and it is bigger than the int limit (about 2.1 billion), so Java says <i>integer number too large</i>. Add <code>L</code> at the end to make it a long literal: <code>3000000000L</code>.', explainAr: 'العدد الكبير يحتاج L في آخره.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int battery = 76;
        boolean charging = true;
        char size = 'M';
        double price = 25.0;
        System.out.println(battery + "% " + charging);
        System.out.println(size + " " + price);
    }
}
`, answer: '76% true\nM 25.0', explain: 'Each value is printed as stored: the int 76, the boolean true, the char M and the double 25.0 (a double always shows its decimal point).' },
        { t: 'mcq', q: 'Look at <code>String city = "Abha";</code>. What does the variable <code>city</code> hold?', options: ['An arrow (reference) to a String object that holds the text', 'The four letters inside a primitive box', 'The number 4', 'A char'], answer: 0, explain: 'String is not a primitive type. The text lives in a String object, and the variable holds a reference to it.', explainAr: 'متغير String يحمل مرجعاً إلى الكائن.' }
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
        { type: 'h', en: 'Calculating with variables' },
        { type: 'p', en: 'The operators work on variables as well as on numbers. Java uses the value that is in each box at that moment. You usually store the result in a new box, so you can print it or use it again later. Here a student buys 3 sandwiches at 12 riyals each and pays with a 50-riyal note.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int price = 12;
        int quantity = 3;
        int total = price * quantity;
        int paid = 50;
        int change = paid - total;
        System.out.println("Total: " + total);
        System.out.println("Change: " + change);
    }
}
`, out: J`
Total: 36
Change: 14
` },
        { type: 'memory', title: 'Each result goes into its own box', frames: [
          { label: 'After <code>int quantity = 3;</code>', vars: [{ name: 'price', type: 'int', value: '12' }, { name: 'quantity', type: 'int', value: '3' }] },
          { label: 'After <code>int total = price * quantity;</code>: 12 * 3', vars: [{ name: 'price', type: 'int', value: '12' }, { name: 'quantity', type: 'int', value: '3' }, { name: 'total', type: 'int', value: '36' }] },
          { label: 'After <code>int paid = 50;</code>', vars: [{ name: 'price', type: 'int', value: '12' }, { name: 'quantity', type: 'int', value: '3' }, { name: 'total', type: 'int', value: '36' }, { name: 'paid', type: 'int', value: '50' }] },
          { label: 'After <code>int change = paid - total;</code>: 50 - 36', vars: [{ name: 'price', type: 'int', value: '12' }, { name: 'quantity', type: 'int', value: '3' }, { name: 'total', type: 'int', value: '36' }, { name: 'paid', type: 'int', value: '50' }, { name: 'change', type: 'int', value: '14' }] }
        ], ar: 'نحسب بالقيم الموجودة في الصناديق ونخزن الناتج في صندوق جديد.' },
        { type: 'check', q: 'After <code>int a = 7; int b = a * 2 - 4;</code> what is b?', options: ['10', '6', '14', '-14'], answer: 0, explain: 'a is 7, so 7 * 2 = 14, and 14 - 4 = 10.', ar: '10' },
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
        { type: 'p', en: 'The type of the answer depends on the types of the two sides. Two ints give an int. If <b>one</b> side is a double, the answer is a double, and a double always prints with a decimal point.', ar: 'إذا كان أحد الطرفين double فالناتج double.' },
        { type: 'table', head: ['Expression', 'Left, right', 'Result'], rows: [
          ['<code>7 + 2</code>', 'int, int', '<code>9</code>'],
          ['<code>7 + 2.0</code>', 'int, double', '<code>9.0</code>'],
          ['<code>7 / 2</code>', 'int, int', '<code>3</code>'],
          ['<code>7 / 2.0</code>', 'int, double', '<code>3.5</code>'],
          ['<code>7.0 * 2</code>', 'double, int', '<code>14.0</code>']
        ] },
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
        { type: 'h', en: 'Three famous uses of %' },
        { type: 'p', en: 'The remainder looks like a small thing, but programmers use it every day. <b>Even or odd:</b> <code>n % 2</code> is 0 for an even number and 1 for an odd number. <b>Last digit:</b> <code>n % 10</code> gives the last digit of a number. <b>Remove the last digit:</b> <code>n / 10</code> drops it.' },
        { type: 'analogy', title: 'Pairs of shoes', en: 'Put shoes in pairs. If one shoe is left alone, the number was odd (remainder 1). If nothing is left, it was even (remainder 0). That is exactly what <code>n % 2</code> tells you.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 347;
        System.out.println(n % 2);
        System.out.println(n % 10);
        System.out.println(n / 10);
    }
}
`, out: J`
1
7
34
` },
        { type: 'lines', rows: [
          ['n % 2', '347 = 173 x 2 + 1, so the remainder is <b>1</b>: 347 is odd.'],
          ['n % 10', '347 = 34 x 10 + 7, so the remainder is the last digit <b>7</b>.'],
          ['n / 10', 'Whole division by 10 drops the last digit: <b>34</b>.']
        ], ar: 'n % 2 يكشف الزوجي والفردي، و n % 10 يعطي آخر رقم، و n / 10 يحذفه.' },
        { type: 'check', q: 'What is <code>2026 % 10</code>?', options: ['6', '202', '0', '2'], answer: 0, explain: 'The remainder after dividing by 10 is the last digit: 6.', ar: '6' },
        { type: 'steps', title: 'Halalas to riyals', problem: 'A shopping app stores money in halalas (100 halalas = 1 riyal). Change 1275 halalas into riyals and halalas.',
          steps: [
            { en: 'Store the amount in halalas.', code: 'int halalas = 1275;' },
            { en: 'Full riyals: how many groups of 100? Use whole division.', code: 'int riyals = halalas / 100;' },
            { en: 'The halalas left over: use the remainder.', code: 'int rest = halalas % 100;' },
            { en: 'Print. Check by hand: 12 x 100 = 1200, and 1275 - 1200 = 75.', code: 'System.out.println(riyals + " riyals and " + rest + " halalas");' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int halalas = 1275;
        int riyals = halalas / 100;
        int rest = halalas % 100;
        System.out.println(riyals + " riyals and " + rest + " halalas");
    }
}
`, out: '12 riyals and 75 halalas', ar: 'القسمة على 100 تعطي الريالات، والباقي يعطي الهللات.' },
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
        { title: 'Expecting 17 / 5 to be 3.4', en: 'Both are int, so you get 3, even if you store it in a double. Write <code>17.0 / 5</code> for 3.4.', code: 'double share = 17 / 5;   // 3.0, not 3.4' },
        { title: 'Using ^ for power', en: 'There is no power operator. The sign <code>^</code> means something else.', code: '2 ^ 3' },
        { title: 'Dividing by zero', en: 'An int divided by zero crashes the program at run time.', code: '10 / 0' },
        { title: 'Mixing up / and %', en: '<code>/</code> gives the whole part; <code>%</code> gives the leftover.' }
      ],
      remember: ['Operators: <code>+ - * / %</code>; they work on numbers and on variables.', 'int / int gives an int (the decimal is dropped, not rounded).', 'If one side is a double, the result is a double.', '<code>%</code> gives the remainder: <code>n % 2</code> is 0 for even numbers, <code>n % 10</code> is the last digit.', 'Use <code>/</code> and <code>%</code> together to split a total into groups (minutes, riyals and halalas).'],
      rememberAr: 'قسمة int على int تعطي int، و % تعطي الباقي، واستخدم / و % معاً لتقسيم المجموع.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(10 + 5);
    }
}
`, answer: '15', explain: '10 + 5.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(7 / 2);
    }
}
`, answer: '3', explain: 'int division drops the decimal.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(23 / 4);
        System.out.println(23 % 4);
        System.out.println(23 / 4.0);
    }
}
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
`, hint: 'weeks = totalDays / 7; days = totalDays % 7.', explain: '45 / 7 = 6, 45 % 7 = 3.' },
        { t: 'bug', q: 'This program should print the last digit of 2589, which is <code>9</code>. It prints <code>Last digit: 258</code>. Tap the line with the bug.', qAr: 'أي معامل يعطي الباقي؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        int number = 2589;
        int lastDigit = number / 10;
        System.out.println("Last digit: " + lastDigit);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int number = 2589;
        int lastDigit = number % 10;
        System.out.println("Last digit: " + lastDigit);
    }
}
`, hint: 'One operator gives the full groups, the other gives what is left.', explain: '<code>/ 10</code> removes the last digit (258). The last digit is the <b>remainder</b> after dividing by 10, so use <code>number % 10</code>, which is 9.', explainAr: 'آخر رقم هو باقي القسمة على 10.' },
        { t: 'bug', q: 'Eight friends share a 100-riyal bill. Each should pay <code>12.5</code>, but the program prints <code>12.0</code>. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int friends = 8;
        double each = 100 / friends;
        System.out.println(each);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int friends = 8;
        double each = 100.0 / friends;
        System.out.println(each);
    }
}
`, hint: 'What are the types of the two sides of the division?', explain: '<code>100 / friends</code> is int / int, so Java does a whole division first and gets 12. Only then is 12 stored in the double box as 12.0. The decimal part was already lost. Make one side a double: <code>100.0 / friends</code> gives 12.5. (In Lesson 10 you will learn another way: a cast.)', explainAr: 'قسمة int على int تحذف الكسر قبل التخزين في double.' },
        { t: 'code', q: 'A shopping app keeps a price in halalas: <code>int halalas = 2350;</code>. Print it as <code>23 riyals 50 halalas</code>. Use <code>/</code> and <code>%</code>; do not type 23 or 50 yourself. No input.', qAr: 'القسمة على 100 والباقي.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        int halalas = 2350;
        // compute riyals and the halalas left, then print
    }
}
`, tests: [{ stdin: '', expected: '23 riyals 50 halalas' }], solution: J`
public class Main {
    public static void main(String[] args) {
        int halalas = 2350;
        int riyals = halalas / 100;
        int rest = halalas % 100;
        System.out.println(riyals + " riyals " + rest + " halalas");
    }
}
`, hint: '<code>halalas / 100</code> gives the riyals and <code>halalas % 100</code> gives the halalas left.', explain: '2350 / 100 = 23 and 2350 % 100 = 50.' }
      ]
    },
    {
      title: 'Operator precedence: what is calculated first?',
      titleAr: 'أولوية العمليات',
      minutes: 30,
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
        { type: 'analogy', title: 'The rule from your maths class', en: 'At school you learned that multiplication and division come before addition and subtraction, and brackets come first of all. Java follows the same rule. The only new thing is <code>%</code>, which sits on the same level as <code>*</code> and <code>/</code>.' },
        { type: 'p', en: 'Precedence matters in real programs. A delivery order costs 15 riyals per meal, you order 2 meals, and delivery is 7 riyals. The total is <code>price * meals + delivery</code>. Java multiplies first, which is exactly what you want.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int price = 15;
        int meals = 2;
        int delivery = 7;
        int total = price * meals + delivery;
        System.out.println("Total: " + total);
    }
}
`, out: 'Total: 37' },
        { type: 'memory', title: 'The right side first, the box last', en: 'Assignment has the lowest precedence. Java finishes the whole right side, and only then puts the answer into the box.', frames: [
          { label: 'Before the line: three boxes are ready', vars: [{ name: 'price', type: 'int', value: '15' }, { name: 'meals', type: 'int', value: '2' }, { name: 'delivery', type: 'int', value: '7' }] },
          { label: 'Java works out <code>price * meals</code> = 30, then 30 + 7 = 37 (no box changes yet)', vars: [{ name: 'price', type: 'int', value: '15' }, { name: 'meals', type: 'int', value: '2' }, { name: 'delivery', type: 'int', value: '7' }] },
          { label: 'After <code>int total = price * meals + delivery;</code>', vars: [{ name: 'price', type: 'int', value: '15' }, { name: 'meals', type: 'int', value: '2' }, { name: 'delivery', type: 'int', value: '7' }, { name: 'total', type: 'int', value: '37' }] }
        ], ar: 'يُحسب الطرف الأيمن كاملاً ثم يُخزن الناتج في المتغير.' },
        { type: 'check', q: 'With the same boxes, what is <code>price * (meals + delivery)</code>?', options: ['135', '37', '24', '105'], answer: 0, explain: 'The brackets come first: 2 + 7 = 9. Then 15 * 9 = 135. That is the wrong formula for this order, which shows how much brackets change the answer.', ar: '135' },
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
        { type: 'p', en: 'For a long expression, work like Java: find the operator that goes first, calculate it, and write the shorter expression again. Repeat until one number is left. Here is <code>20 - 8 / 2 * 3 + 1</code>, one step per row.', ar: 'نحسب خطوة واحدة في كل مرة ونعيد كتابة التعبير.' },
        { type: 'table', head: ['Step', 'What Java does', 'The expression now'], rows: [
          ['0', 'Start', '<code>20 - 8 / 2 * 3 + 1</code>'],
          ['1', '<code>/</code> and <code>*</code> first; the left one first: 8 / 2 = 4', '<code>20 - 4 * 3 + 1</code>'],
          ['2', '4 * 3 = 12', '<code>20 - 12 + 1</code>'],
          ['3', '<code>-</code> and <code>+</code>, left to right: 20 - 12 = 8', '<code>8 + 1</code>'],
          ['4', '8 + 1 = 9', '<code>9</code>']
        ] },
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
        { type: 'steps', title: 'Riyadh temperature in Fahrenheit', problem: 'It is 45 degrees Celsius in Riyadh. A visitor understands Fahrenheit. The formula is F = C x 9 / 5 + 32. Print the temperature in Fahrenheit.',
          steps: [
            { en: 'Store the Celsius value.', code: 'int celsius = 45;' },
            { en: 'Write the formula in the same order: multiply by 9 first, then divide by 5, then add 32. Left to right, 45 * 9 = 405, then 405 / 5 = 81 (exact), then 81 + 32 = 113.', code: 'int fahrenheit = celsius * 9 / 5 + 32;' },
            { en: 'Careful: <code>9 / 5 * celsius + 32</code> looks the same in maths, but in Java <code>9 / 5</code> is an int division and gives 1. The answer would be 1 * 45 + 32 = 77, which is wrong.' },
            { en: 'Print the result.', code: 'System.out.println(celsius + " C = " + fahrenheit + " F");' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int celsius = 45;
        int fahrenheit = celsius * 9 / 5 + 32;
        System.out.println(celsius + " C = " + fahrenheit + " F");
    }
}
`, out: '45 C = 113 F', ar: 'ترتيب الحساب مهم: نضرب في 9 أولاً ثم نقسم على 5.' },
        { type: 'note', kind: 'exam', en: '<code>5 / 9 * 32</code> is <code>0</code>, because <code>5 / 9</code> is an int division and gives 0. Write <code>5.0 / 9</code> instead.', ar: '5 / 9 تساوي صفراً لأن الطرفين صحيحان.' }
      ],
      mistakes: [
        { title: 'Forgetting parentheses in an average', en: 'This is wrong: <code>80 + 90 / 2</code>. Write <code>(80 + 90) / 2</code>.' },
        { title: 'Doing + before *', en: 'Multiplication comes first.', code: '2 + 3 * 4   // 14, not 20' },
        { title: 'Dividing everything as int', en: 'Use a decimal like <code>3.0</code> when you need decimals.' },
        { title: 'Going right to left for - and /', en: 'Same-level operators go from left to right.' }
      ],
      remember: ['Parentheses first.', '<code>* / %</code> before <code>+ -</code>.', 'Same level: left to right.', 'Assignment <code>=</code> is last: the whole right side is calculated first.', 'Add parentheses when unsure, especially in an average.', 'Divide by a double (<code>3.0</code>) to keep the decimals.'],
      rememberAr: 'الأقواس أولاً، ثم * / %، ثم + -، وعند التساوي من اليسار إلى اليمين.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(3 + 4 * 2);
    }
}
`, answer: '11', explain: '4 * 2 = 8, then 3 + 8 = 11.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println((3 + 4) * 2);
    }
}
`, answer: '14', explain: 'Parentheses first.' },
        { t: 'output', q: 'Apply precedence. What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(10 + 6 / 4 * 3 - 1);
        System.out.println((10 + 6) / (4 * 2));
    }
}
`, answer: '12\n2', explain: 'First line: 6 / 4 = 1, 1 * 3 = 3, 10 + 3 - 1 = 12. Second: 16 / 8 = 2.' },
        { t: 'mcq', q: 'What is the value of <code>2 + 3 * 4 % 5</code>?', options: ['0', '4', '14', '5'], answer: 1, explain: '3 * 4 = 12, 12 % 5 = 2, then 2 + 2 = 4.' },
        { t: 'fill', q: 'Add parentheses so the line prints the average 85 of the marks 80 and 90.', code: J`
System.out.println(___80 + 90___ / 2);
`, answers: ['(', ')'], explain: 'The sum must be calculated first.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(1 / 2 * 10.0);
        System.out.println(1.0 / 2 * 10);
    }
}
`, answer: '0.0\n5.0', explain: 'First: 1 / 2 is 0 (int division), 0 * 10.0 = 0.0. Second: 0.5 * 10 = 5.0.' },
        { t: 'order', q: 'Order the lines to print the average of 70 and 90 as a decimal (80.0).', lines: ['int sum = 70 + 90;', 'double average = sum / 2.0;', 'System.out.println(average);'], explain: 'Add first and store the sum, then divide by 2.0, then print.' },
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
`, hint: '(70 + 85 + 100) / 3.0', explain: '255 / 3.0 = 85.0.' },
        { t: 'bug', q: 'This program should print the average of two quiz marks, <code>85.0</code>. It prints <code>125.0</code>. Tap the line with the bug.', qAr: 'ما الذي يُحسب أولاً؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        int quiz1 = 80;
        int quiz2 = 90;
        double average = quiz1 + quiz2 / 2.0;
        System.out.println(average);
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        int quiz1 = 80;
        int quiz2 = 90;
        double average = (quiz1 + quiz2) / 2.0;
        System.out.println(average);
    }
}
`, hint: 'Which runs first: the + or the / ?', explain: 'Division comes before addition, so Java calculates 90 / 2.0 = 45.0 and then 80 + 45.0 = 125.0. Put the sum in parentheses so it is calculated first: <code>(quiz1 + quiz2) / 2.0</code> gives 85.0.', explainAr: 'نضع المجموع بين قوسين قبل القسمة.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int a = 6;
        int b = 4;
        System.out.println(a + b * 2);
        System.out.println((a + b) * 2);
        System.out.println(a - b - 1);
        System.out.println(a * b % 5);
    }
}
`, answer: '14\n20\n1\n4', explain: '4 * 2 = 8, 6 + 8 = 14. Brackets: 10 * 2 = 20. Left to right: 6 - 4 = 2, 2 - 1 = 1. Left to right: 6 * 4 = 24, 24 % 5 = 4.' },
        { t: 'code', q: 'Declare <code>int celsius = 30;</code> and print the temperature in Fahrenheit using <code>celsius * 9 / 5 + 32</code>. Print only the number (86). No input.', qAr: 'اضرب{{g:|ي}} في 9 أولاً ثم اقسم{{g:|ي}} على 5.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        int celsius = 30;
        // calculate and print fahrenheit
    }
}
`, tests: [{ stdin: '', expected: '86' }], solution: J`
public class Main {
    public static void main(String[] args) {
        int celsius = 30;
        int fahrenheit = celsius * 9 / 5 + 32;
        System.out.println(fahrenheit);
    }
}
`, hint: 'Do not start with <code>9 / 5</code>: it is 1 in int division.', explain: '30 * 9 = 270, 270 / 5 = 54, 54 + 32 = 86.' }
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
        { type: 'p', en: 'Almost every program follows three steps: <b>input</b> (get the data), <b>process</b> (calculate), and <b>output</b> (show the result). Until now your programs had only process and output, because the data was typed inside the code. Scanner gives you the input step.' },
        { type: 'analogy', title: 'A juice machine', en: 'You put oranges in (input), the machine squeezes them (process), and juice comes out (output). Different oranges give different juice, but the machine stays the same. A program with input is one machine that works for every user and every value.' },
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
        { type: 'memory', title: 'The Scanner and the boxes it fills', en: 'The word <code>new</code> creates a Scanner <b>object</b>, and <code>input</code> holds an arrow to it, like a String variable. Each read takes the next value from the keyboard and puts it in a normal box. The input here is <code>12 30</code>.', frames: [
          { label: 'After <code>Scanner input = new Scanner(System.in);</code>', vars: [{ name: 'input', type: 'Scanner', ref: 'A' }], objects: [{ id: 'A', cls: 'Scanner', fields: [{ name: 'reads from', value: 'keyboard' }] }] },
          { label: 'After <code>int a = input.nextInt();</code>', vars: [{ name: 'input', type: 'Scanner', ref: 'A' }, { name: 'a', type: 'int', value: '12' }], objects: [{ id: 'A', cls: 'Scanner', fields: [{ name: 'reads from', value: 'keyboard' }] }] },
          { label: 'After <code>int b = input.nextInt();</code>', vars: [{ name: 'input', type: 'Scanner', ref: 'A' }, { name: 'a', type: 'int', value: '12' }, { name: 'b', type: 'int', value: '30' }], objects: [{ id: 'A', cls: 'Scanner', fields: [{ name: 'reads from', value: 'keyboard' }] }] }
        ], ar: 'new ينشئ كائن Scanner، وكل قراءة تضع قيمة جديدة في صندوق عادي.' },
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
        { type: 'p', en: 'How does Scanner know where one value ends? It cuts the input into pieces at spaces and line breaks. Each piece is called a <b>token</b>. Every read takes the <b>next</b> token from the front, like people leaving a queue one by one.', ar: 'المدخلات تُقسم إلى قطع عند المسافات، وكل قراءة تأخذ القطعة التالية.' },
        { type: 'table', head: ['The read', 'It takes', 'Still waiting in the input'], rows: [
          ['(start)', '—', '<code>Sara 19 3.5</code>'],
          ['<code>input.next()</code>', '<code>"Sara"</code>', '<code>19 3.5</code>'],
          ['<code>input.nextInt()</code>', '<code>19</code>', '<code>3.5</code>'],
          ['<code>input.nextDouble()</code>', '<code>3.5</code>', '(nothing)']
        ] },
        { type: 'check', q: 'The input is <code>5 8 2</code>. The program calls <code>nextInt()</code> two times. What is still waiting?', options: ['<code>2</code>', '<code>5</code>', '<code>8 2</code>', 'Nothing'], answer: 0, explain: 'The first read takes 5, the second takes 8, so 2 is still waiting for the next read.', ar: 'يبقى 2.' },
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
        { type: 'steps', title: 'Phone battery after a video', problem: 'Read the phone battery (a whole percent) and the minutes of video you watched. Every full 10 minutes of video uses 3% of the battery. Print the battery that is left.',
          steps: [
            { en: '<b>Input:</b> two whole numbers, so two <code>nextInt()</code> calls. Sample input: <code>80 45</code>.', code: 'int battery = input.nextInt();\nint minutes = input.nextInt();' },
            { en: '<b>Process:</b> count the full blocks of 10 minutes. Whole division is perfect: 45 / 10 = 4.', code: 'int blocks = minutes / 10;' },
            { en: 'Each block uses 3%, then subtract from the battery. Check by hand: 4 x 3 = 12, and 80 - 12 = 68.', code: 'int used = blocks * 3;\nint left = battery - used;' },
            { en: '<b>Output:</b> print with a label and a % sign.', code: 'System.out.println("Battery left: " + left + "%");' },
            { en: 'The complete program (the sample input is filled in for you):' }
          ],
          stdin: '80 45',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int battery = input.nextInt();
        int minutes = input.nextInt();
        int blocks = minutes / 10;
        int used = blocks * 3;
        int left = battery - used;
        System.out.println("Battery left: " + left + "%");
    }
}
`, out: 'Battery left: 68%', ar: 'إدخال ثم معالجة ثم إخراج.' },
        { type: 'note', kind: 'exam', en: 'If the user types <code>abc</code> but the program calls <code>nextInt()</code>, Java crashes with <code>InputMismatchException</code>. That is a runtime error.' }
      ],
      mistakes: [
        { title: 'Forgetting the import', en: 'Without it, Java says it cannot find Scanner.', code: 'Scanner input = new Scanner(System.in);   // no import line' },
        { title: 'Putting the import inside main', en: 'It must be at the top, outside the class.' },
        { title: 'Wrong read method for the type', en: 'Reading a decimal with <code>nextInt()</code> crashes.', code: 'int price = input.nextInt();   // user types 7.5' },
        { title: 'Reading in the wrong order', en: 'The first value typed goes to the first read. If the user types a name and then an age, read the name first.', code: 'int age = input.nextInt();   // user types: Sara 19  (crash: Sara is not a number)' }
      ],
      remember: ['Programs follow <b>input → process → output</b>.', 'Add <code>import java.util.Scanner;</code> at the top; create it with <code>Scanner input = new Scanner(System.in);</code>.', '<code>nextInt()</code> whole, <code>nextDouble()</code> decimal, <code>next()</code> one word.', 'Scanner cuts the input into tokens at spaces and line breaks; each read takes the next token.', 'Values are read in the order they are typed.', 'No prompts in auto-checked exercises.'],
      rememberAr: 'نستورد Scanner وننشئه ثم نقرأ بالدالة المناسبة للنوع بالترتيب نفسه.',
      practice: [
        { t: 'mcq', q: 'Which statement must appear before <code>public class Main</code> to use Scanner?', options: ['<code>import java.util.Scanner;</code>', '<code>import java.io.Scanner;</code>', '<code>include Scanner;</code>', '<code>use Scanner;</code>'], answer: 0, explain: 'Scanner is in java.util.' },
        { t: 'mcq', q: 'Which method reads a whole number?', options: ['<code>nextInt()</code>', '<code>nextDouble()</code>', '<code>next()</code>', '<code>nextLine()</code>'], answer: 0, explain: 'nextInt reads int values.' },
        { t: 'output', q: 'The user types <code>17 5</code>. What is printed?', stdin: '17 5', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        System.out.println(a + b);
        System.out.println(a / b);
        System.out.println(a % b);
    }
}
`, answer: '22\n3\n2', explain: 'a = 17, b = 5: sum 22, whole division 3, remainder 2.' },
        { t: 'fill', q: 'Complete the code that reads a price with a decimal point.', code: J`
import java.util.___;

Scanner input = new Scanner(System.___);
double price = input.___();
`, answers: ['Scanner', 'in', 'nextDouble'], explain: 'Import Scanner, connect it to System.in, read with nextDouble.' },
        { t: 'output', q: 'The user types <code>Ali 20</code>. What is printed?', stdin: 'Ali 20', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.next();
        int age = input.nextInt();
        System.out.println(age + 1);
        System.out.println(name);
    }
}
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
`, hint: 'hours = minutes / 60; rest = minutes % 60.', explain: 'Whole division counts hours; remainder gives minutes.' },
        { t: 'bug', q: 'The user types <code>Tea 2.5</code>. The program crashes with <code>InputMismatchException</code>. Tap the line with the bug.', qAr: 'السعر فيه كسر عشري.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String item = input.next();
        int price = input.nextInt();
        System.out.println(item + " costs " + price);
    }
}
`, bug: 7, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String item = input.next();
        double price = input.nextDouble();
        System.out.println(item + " costs " + price);
    }
}
`, hint: 'Which token is <code>2.5</code>, and which method reads it?', explain: '<code>next()</code> reads <code>Tea</code> correctly. Then <code>nextInt()</code> finds <code>2.5</code>, which is not a whole number, so the program crashes. A price with halalas must be read with <code>nextDouble()</code> into a <code>double</code>. The fixed program prints <code>Tea costs 2.5</code>.', explainAr: 'نقرأ العدد العشري بـ nextDouble.' },
        { t: 'output', q: 'The user types <code>3 12.5</code>. What is printed?', stdin: '3 12.5', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int count = input.nextInt();
        double price = input.nextDouble();
        double total = count * price;
        System.out.println(count + " x " + price + " = " + total);
    }
}
`, answer: '3 x 12.5 = 37.5', explain: 'count = 3 and price = 12.5. 3 * 12.5 = 37.5, a double.' },
        { t: 'code', q: 'Read today\'s highest and lowest temperature in Riyadh (two whole numbers, highest first). Print <code>Difference: D</code>, for example <code>45 27</code> prints <code>Difference: 18</code>. No prompts.', qAr: 'اقرأ{{g:|ي}} العددين ثم اطرح{{g:|ي}}.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // read high and low, print the difference
    }
}
`, tests: [{ stdin: '45 27', expected: 'Difference: 18' }, { stdin: '38\n30', expected: 'Difference: 8' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int high = input.nextInt();
        int low = input.nextInt();
        int difference = high - low;
        System.out.println("Difference: " + difference);
    }
}
`, hint: 'Two <code>nextInt()</code> calls, then <code>high - low</code>.', explain: 'Input: two ints. Process: subtract. Output: one labelled line.' }
      ]
    },
    {
      title: 'Reading text lines: next() and nextLine()',
      titleAr: 'قراءة النصوص: next() وnextLine()',
      minutes: 30,
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
        { type: 'p', en: 'Many real values contain spaces: a full name (<i>Noura Al Saleh</i>), a city (<i>Al Khobar</i>), a course title (<i>Introduction to Programming</i>). For these, <code>next()</code> is not enough. Compare what each method gives for the same line:' },
        { type: 'table', head: ['The user types', '<code>next()</code> gives', '<code>nextLine()</code> gives'], rows: [
          ['<code>Al Khobar</code>', '<code>"Al"</code>', '<code>"Al Khobar"</code>'],
          ['<code>Sara Ali</code>', '<code>"Sara"</code>', '<code>"Sara Ali"</code>'],
          ['<code>Riyadh</code>', '<code>"Riyadh"</code>', '<code>"Riyadh"</code>']
        ] },
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
        { type: 'p', en: 'You met the line break in Unit 1: it is the escape sequence <code>\\n</code>. When the user types 20, presses Enter, types Sara Ali and presses Enter, the program really receives <code>20\\nSara Ali\\n</code>. Follow what each read takes:' },
        { type: 'table', head: ['The read', 'It takes', 'Still waiting in the input'], rows: [
          ['(start)', '—', '<code>20\\nSara Ali\\n</code>'],
          ['<code>nextInt()</code>', '<code>20</code>', '<code>\\nSara Ali\\n</code>'],
          ['<code>nextLine()</code>', 'everything before the first <code>\\n</code>: nothing! So <code>""</code>', '<code>Sara Ali\\n</code>']
        ] },
        { type: 'memory', title: 'The empty String', en: 'In this picture the text is drawn inside the box to keep it simple. Two quotes with nothing between them, <code>""</code>, is an <b>empty String</b>: text with no characters.', frames: [
          { label: 'After <code>int age = input.nextInt();</code>', vars: [{ name: 'age', type: 'int', value: '20' }] },
          { label: 'After <code>String name = input.nextLine();</code>: only the leftover line break was read', vars: [{ name: 'age', type: 'int', value: '20' }, { name: 'name', type: 'String', value: '""' }] }
        ], ar: 'الاسم أصبح نصاً فارغاً لأن nextLine قرأت بقية السطر الأول فقط.' },
        { type: 'check', q: 'After <code>nextInt()</code>, a <code>nextLine()</code> returns...', options: ['An empty text', 'The next line of text', 'The number', 'An error'], answer: 0, explain: 'It reads the leftover line break.', ar: 'نصاً فارغاً.' },
        { type: 'note', kind: 'exam', en: 'The same trap happens after <code>nextDouble()</code> and after <code>next()</code>: they also leave the rest of the line, including the line break, in the input.', ar: 'المشكلة نفسها بعد nextDouble و next.' },
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
        { type: 'analogy', title: 'Sweeping the crumb away', en: 'The extra <code>input.nextLine();</code> is like wiping the plate before the next dish. You do not eat the crumb or keep it; you just throw it away, so the next "whole plate" command gets real food.' },
        { type: 'check', q: 'The input is <code>3</code>, Enter, <code>Red Sea</code>, Enter. Which code puts <code>"Red Sea"</code> in <code>place</code>?', options: ['<code>int n = input.nextInt(); input.nextLine(); String place = input.nextLine();</code>', '<code>int n = input.nextInt(); String place = input.nextLine();</code>', '<code>int n = input.nextInt(); String place = input.next();</code>'], answer: 0, explain: 'The second one gives an empty text (the trap). The third gives only <code>"Red"</code>, because next() stops at the space. The first one cleans the line break and then reads the whole line.', ar: 'الخيار الأول.' },
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
        { type: 'steps', title: 'A course card', problem: 'Line 1 is a course title, line 2 is the number of credit hours, line 3 is the instructor\'s full name. Print one line like <code>Introduction to Programming (3 hours) - Dr. Huda Saleh</code>.',
          steps: [
            { en: 'The title has spaces, so read the whole line. Nothing was read before it, so there is no trap here.', code: 'String course = input.nextLine();' },
            { en: 'The hours are a whole number.', code: 'int hours = input.nextInt();' },
            { en: '<code>nextInt()</code> left a line break behind. Remove it before reading the next line.', code: 'input.nextLine();' },
            { en: 'Now read the instructor\'s full name.', code: 'String teacher = input.nextLine();' },
            { en: 'Print everything in one line. Note the spaces inside the quotes.', code: 'System.out.println(course + " (" + hours + " hours) - " + teacher);' }
          ],
          stdin: 'Introduction to Programming\n3\nDr. Huda Saleh',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String course = input.nextLine();
        int hours = input.nextInt();
        input.nextLine();
        String teacher = input.nextLine();
        System.out.println(course + " (" + hours + " hours) - " + teacher);
    }
}
`, out: 'Introduction to Programming (3 hours) - Dr. Huda Saleh', ar: 'نستدعي nextLine إضافية بعد العدد وقبل السطر النصي التالي.' },
        { type: 'note', kind: 'tip', en: 'If you read the full name <b>first</b> (before any number), there is no leftover and no trap. That is a simple way to avoid the problem.' }
      ],
      mistakes: [
        { title: 'Using next() for a full name', en: 'It reads only the first word.', code: 'String name = input.next();   // "Sara Ali" gives "Sara"' },
        { title: 'nextLine() right after nextInt()', en: 'It returns an empty text.', code: 'int age = input.nextInt();\nString name = input.nextLine();' },
        { title: 'Storing the extra nextLine()', en: 'It is only for cleaning; you do not need a variable.' },
        { title: 'Expecting nextLine() to skip empty lines', en: 'It reads exactly one line, even an empty one.' }
      ],
      remember: ['<code>next()</code> = one word; <code>nextLine()</code> = whole line, spaces included.', 'Pressing Enter sends a line break <code>\\n</code>.', 'After <code>nextInt()</code>, <code>nextDouble()</code> or <code>next()</code>, the rest of the line (with its line break) stays behind.', 'Fix: call <code>input.nextLine();</code> once to remove it, before reading a text line.', 'Or read the text line first.'],
      rememberAr: 'next() كلمة، nextLine() سطر. بعد nextInt استدعِ nextLine مرة لتنظيف السطر المتبقي.',
      practice: [
        { t: 'mcq', q: 'The user types <code>Ali Hassan</code>. What does <code>next()</code> return?', options: ['Ali', 'Ali Hassan', 'Hassan', 'Nothing'], answer: 0, explain: 'next stops at the first space.' },
        { t: 'mcq', q: 'Which method reads the whole line, spaces included?', options: ['<code>nextLine()</code>', '<code>next()</code>', '<code>nextInt()</code>', '<code>nextWord()</code>'], answer: 0, explain: 'nextLine reads to the end of the line.' },
        { t: 'output', q: 'The user types <code>Sara Ali</code> and Enter. What is printed?', stdin: 'Sara Ali\n', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String a = input.next();
        String b = input.next();
        System.out.println(b + " " + a);
    }
}
`, answer: 'Ali Sara', explain: 'a = Sara, b = Ali, printed in reverse.' },
        { t: 'output', q: 'The user types <code>21</code>, Enter, then <code>Noura Saleh</code>, Enter. What is printed?', stdin: '21\nNoura Saleh\n', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        String name = input.nextLine();
        System.out.println("Name=" + name + ";");
        System.out.println("Age=" + age);
    }
}
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
`, hint: 'Read the name with nextLine() first; no trap because nothing was read before.', explain: 'Reading the text first avoids the trap.' },
        { t: 'bug', q: 'The user types <code>1042</code>, Enter, <code>Sara Ali</code>, Enter. The program should print <code>1042: Sara Ali</code> but prints <code>1042: </code>. Tap the line with the bug.', qAr: 'ماذا قرأت nextLine؟',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int id = input.nextInt();
        String name = input.nextLine();
        System.out.println(id + ": " + name);
    }
}
`, bug: 7, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int id = input.nextInt();
        input.nextLine();
        String name = input.nextLine();
        System.out.println(id + ": " + name);
    }
}
`, hint: 'What is left in the input right after <code>nextInt()</code>?', explain: '<code>nextInt()</code> takes 1042 but leaves the line break. Line 7 reads only that leftover, so <code>name</code> is empty. Add <code>input.nextLine();</code> before it to remove the line break.', explainAr: 'نضيف nextLine فارغة قبل قراءة الاسم.' },
        { t: 'bug', q: 'The user types <code>Al Khobar</code>. The program prints <code>City: Al</code>. Tap the line with the bug.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String city = input.next();
        System.out.println("City: " + city);
    }
}
`, bug: 6, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String city = input.nextLine();
        System.out.println("City: " + city);
    }
}
`, hint: 'The city name has a space in it.', explain: '<code>next()</code> stops at the first space, so it reads only <code>Al</code>. Use <code>nextLine()</code> to read the whole line <code>Al Khobar</code>.', explainAr: 'next تقف عند المسافة.' },
        { t: 'output', q: 'Challenge. The user types <code>Sara Ali</code> and Enter. What is printed? (The square brackets show exactly where the text starts and ends.)', stdin: 'Sara Ali\n', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String first = input.next();
        String rest = input.nextLine();
        System.out.println("[" + first + "]");
        System.out.println("[" + rest + "]");
    }
}
`, answer: '[Sara]\n[ Ali]', explain: '<code>next()</code> takes <code>Sara</code> and stops at the space. <code>nextLine()</code> takes the rest of the line, starting with that space: <code>" Ali"</code>.' },
        { t: 'code', q: 'Line 1 is a room number (a whole number). Line 2 is a course title (it may contain spaces). Print <code>Room R: TITLE</code>, for example <code>Room 105: Introduction to Programming</code>. No prompts.', qAr: 'انتبه{{g:|ي}} للسطر المتبقي بعد nextInt.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // read the room, then the title line
    }
}
`, tests: [{ stdin: '105\nIntroduction to Programming', expected: 'Room 105: Introduction to Programming' }, { stdin: '7\nMaths', expected: 'Room 7: Maths' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int room = input.nextInt();
        input.nextLine();
        String title = input.nextLine();
        System.out.println("Room " + room + ": " + title);
    }
}
`, hint: 'After <code>nextInt()</code>, call <code>input.nextLine();</code> once before reading the title.', explain: 'The extra nextLine removes the line break after the number, so the next nextLine reads the real title.' }
      ]
    },
    {
      title: 'Shortcuts: ++, -- and +=',
      titleAr: 'العمليات المختصرة',
      minutes: 30,
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
        { type: 'memory', title: 'The same box goes up and down', en: '<code>++</code> and <code>--</code> do not make a new box. They change the value in the same box, exactly like <code>visits = visits + 1;</code>.', frames: [
          { label: 'After <code>int visits = 10;</code>', vars: [{ name: 'visits', type: 'int', value: '10' }] },
          { label: 'After <code>visits++;</code>', vars: [{ name: 'visits', type: 'int', value: '11' }] },
          { label: 'After <code>visits--;</code>', vars: [{ name: 'visits', type: 'int', value: '10' }] }
        ], ar: 'الزيادة والنقصان تغيّران القيمة في الصندوق نفسه.' },
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
        { type: 'p', en: 'The shortcuts work with <code>double</code> variables too. This is handy for money. A metro card has 50.0 riyals, and a trip costs 4.0 riyals:', ar: 'الاختصارات تعمل مع double أيضاً.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        double balance = 50.0;
        balance -= 4.0;
        balance -= 4.0;
        balance += 20.0;
        System.out.println(balance);
    }
}
`, out: '62.0' },
        { type: 'table', head: ['After the line', 'balance'], rows: [
          ['<code>double balance = 50.0;</code>', '50.0'],
          ['<code>balance -= 4.0;</code>', '46.0'],
          ['<code>balance -= 4.0;</code>', '42.0'],
          ['<code>balance += 20.0;</code>', '62.0']
        ] },
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
        { type: 'memory', title: 'Postfix and prefix in memory', frames: [
          { label: 'After <code>int a = 5;</code>', vars: [{ name: 'a', type: 'int', value: '5' }] },
          { label: 'After <code>int b = a++;</code>: b got the OLD value 5, then a went up', vars: [{ name: 'a', type: 'int', value: '6' }, { name: 'b', type: 'int', value: '5' }] },
          { label: 'After <code>int c = ++a;</code>: a went up FIRST, then c got the new 7', vars: [{ name: 'a', type: 'int', value: '7' }, { name: 'b', type: 'int', value: '5' }, { name: 'c', type: 'int', value: '7' }] }
        ], ar: 'البعدية تعطي القيمة القديمة، والقبلية تعطي القيمة الجديدة.' },
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
        { type: 'table', head: ['After the line', 'customers'], rows: [
          ['<code>int customers = 10;</code>', '10'],
          ['<code>customers += 2;</code>', '12'],
          ['<code>customers -= 5;</code>', '7'],
          ['<code>customers++;</code>', '8']
        ] },
        { type: 'steps', title: 'Count your steps', problem: 'A fitness app counts steps. In the morning you walk 1200 steps, in the afternoon 850 steps, and then you climb 3 stairs, one step at a time. Today is a bonus day, so your points are double your steps. Print the steps and the points.',
          steps: [
            { en: 'Start from zero.', code: 'int steps = 0;' },
            { en: 'Add the walks with <code>+=</code>.', code: 'steps += 1200;\nsteps += 850;' },
            { en: 'Three single steps: <code>++</code> three times, each on its own line.', code: 'steps++;\nsteps++;\nsteps++;' },
            { en: 'The points start equal to the steps and are doubled with <code>*=</code>. Check by hand: 1200 + 850 + 3 = 2053, and 2053 x 2 = 4106.', code: 'int points = steps;\npoints *= 2;' },
            { en: 'Print both. The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int steps = 0;
        steps += 1200;
        steps += 850;
        steps++;
        steps++;
        steps++;
        int points = steps;
        points *= 2;
        System.out.println("Steps: " + steps);
        System.out.println("Points: " + points);
    }
}
`, out: J`
Steps: 2053
Points: 4106
`, ar: 'نجمع بـ += ونعد بـ ++ ونضاعف بـ *=.' },
        { type: 'note', kind: 'tip', en: 'Good habit: write <code>count++;</code> on its own line. Code like <code>y = x++ + ++x;</code> is legal, but it is hard to read, so avoid it in your own programs. You only need to trace it in exam questions.', ar: 'اكتب{{g:|ي}} ++ في سطر مستقل لتكون القراءة أسهل.' },
        { type: 'note', kind: 'exam', en: 'When <code>count++;</code> or <code>++count;</code> stands alone as a statement, both do the same thing. The difference only matters inside a bigger expression.' }
      ],
      mistakes: [
        { title: 'Writing =+ instead of +=', en: 'The order matters: <code>x =+ 5</code> just assigns +5.', code: 'x =+ 5;' },
        { title: 'Mixing up prefix and postfix', en: '<code>y = x++</code> gives the old x; <code>y = ++x</code> gives the new x.' },
        { title: 'Forgetting that /= on int drops decimals', en: '<code>24 /= 5</code> style gives 4, not 4.8.' },
        { title: 'Using ++ on a number directly', en: 'It works only on variables.', code: '5++;' }
      ],
      remember: ['<code>x++</code> adds 1; <code>x--</code> subtracts 1 (same box, no new box).', '<code>x += n</code> means <code>x = x + n</code>; same for <code>-= *= /= %=</code>.', 'The shortcuts work for <code>double</code> too; <code>/=</code> on an int still drops decimals.', 'Prefix: change then use. Postfix: use then change.', 'Alone, both forms do the same; keep <code>++</code> on its own line.'],
      rememberAr: 'x++ تزيد 1، و x += n تعني x = x + n. القبلية تغيّر ثم تستخدم والبعدية العكس.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 5;
        n++;
        System.out.println(n);
    }
}
`, answer: '6', explain: 'n++ adds 1.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 10;
        n += 4;
        System.out.println(n);
    }
}
`, answer: '14', explain: '10 + 4.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 20;
        n -= 4;
        n /= 3;
        n *= 2;
        n %= 7;
        System.out.println(n);
    }
}
`, answer: '3', explain: '20-4=16; 16/3=5; 5*2=10; 10%7=3.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int x = 3;
        int y = x++ + ++x;
        System.out.println(x);
        System.out.println(y);
    }
}
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
`, hint: '100 + 50 - 30.', explain: '150 - 30 = 120.' },
        { t: 'bug', q: 'A player has 50 points and wins 10 more. The program should print <code>60</code>, but it prints <code>10</code>. Tap the line with the bug.', qAr: 'انظر{{g:|ي}} إلى ترتيب الرمزين.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int points = 50;
        points =+ 10;
        System.out.println(points);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int points = 50;
        points += 10;
        System.out.println(points);
    }
}
`, hint: 'Is it <code>+=</code> or <code>=+</code>?', explain: '<code>points =+ 10;</code> is read as <code>points = +10;</code>: it simply stores 10. The shortcut is written <code>+=</code>, with the plus first: <code>points += 10;</code> gives 60.', explainAr: 'الصحيح += وليس =+.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 5;
        System.out.println(n++);
        System.out.println(n);
        System.out.println(++n);
    }
}
`, answer: '5\n6\n7', explain: '<code>n++</code> prints the old value 5 and then n becomes 6. The next line prints 6. <code>++n</code> makes n 7 first and prints 7.' },
        { t: 'code', q: 'A water bottle holds <code>double water = 1.5;</code> litres. You drink 0.25 litres two times (use <code>-=</code> twice), then add 0.75 litres (use <code>+=</code>). Print only the final amount. No input.', qAr: 'استخدم{{g:|ي}} -= مرتين ثم +=.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        double water = 1.5;
        // drink twice, then add water, then print
    }
}
`, tests: [{ stdin: '', expected: '1.75' }], solution: J`
public class Main {
    public static void main(String[] args) {
        double water = 1.5;
        water -= 0.25;
        water -= 0.25;
        water += 0.75;
        System.out.println(water);
    }
}
`, hint: '1.5 - 0.25 - 0.25 + 0.75', explain: '1.5 - 0.25 = 1.25, 1.25 - 0.25 = 1.0, 1.0 + 0.75 = 1.75. These numbers are exact in a double, so the answer prints as 1.75.' }
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
        { type: 'p', en: 'Widening is allowed along this line, from the smaller box to the bigger one: <code>byte</code> → <code>short</code> → <code>int</code> → <code>long</code> → <code>float</code> → <code>double</code>. Any type can go to a type on its right automatically. Going to the left needs a cast, which you will see next.', ar: 'التحويل نحو اليمين تلقائي، ونحو اليسار يحتاج cast.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int students = 32;
        long bigCount = students;
        double average = students;
        System.out.println(bigCount);
        System.out.println(average);
    }
}
`, out: J`
32
32.0
` },
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
        { type: 'memory', title: 'A cast makes a new value; the old box stays the same', frames: [
          { label: 'After <code>double price = 19.99;</code>', vars: [{ name: 'price', type: 'double', value: '19.99' }] },
          { label: 'After <code>int riyals = (int) price;</code>: 19 is copied into a new box', vars: [{ name: 'price', type: 'double', value: '19.99' }, { name: 'riyals', type: 'int', value: '19' }] }
        ], ar: 'التحويل لا يغيّر price، بل ينتج قيمة جديدة نخزنها في riyals.' },
        { type: 'check', q: 'What is <code>(int) 9.7</code>?', options: ['9', '10', '9.7', '8'], answer: 0, explain: 'The decimal part is cut off.', ar: '9' },
        { type: 'note', kind: 'warn', en: '<code>int x = 5.5;</code> does not compile: <i>possible lossy conversion from double to int</i>. Write <code>int x = (int) 5.5;</code> if you really want 5.' },
        { type: 'analogy', title: 'Moving to a smaller room', en: 'When you move to a bigger room, all your things fit, so nobody asks you anything (widening). When you move to a smaller room, something must be left behind. The cast is you saying: "Yes, I know, leave the decimals behind."' },
        { type: 'table', head: ['From → to', 'Automatic?', 'Example'], rows: [
          ['<code>int</code> → <code>double</code>', 'Yes (widening)', '<code>double d = 7;</code> stores 7.0'],
          ['<code>int</code> → <code>long</code>', 'Yes (widening)', '<code>long n = 7;</code> stores 7'],
          ['<code>double</code> → <code>int</code>', 'No: write a cast', '<code>int n = (int) 7.8;</code> stores 7'],
          ['<code>long</code> → <code>int</code>', 'No: write a cast', '<code>int n = (int) 7L;</code> stores 7']
        ] },
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
        { type: 'memory', title: 'Where the cast happens', en: 'The cast makes a double copy of <code>sum</code> (175.0) just for this calculation. The box <code>sum</code> still holds the int 175.', frames: [
          { label: 'After <code>int sum = first + second;</code>', vars: [{ name: 'first', type: 'int', value: '85' }, { name: 'second', type: 'int', value: '90' }, { name: 'sum', type: 'int', value: '175' }] },
          { label: 'After <code>double average = (double) sum / 2;</code>: 175.0 / 2 = 87.5', vars: [{ name: 'first', type: 'int', value: '85' }, { name: 'second', type: 'int', value: '90' }, { name: 'sum', type: 'int', value: '175' }, { name: 'average', type: 'double', value: '87.5' }] }
        ], ar: 'sum يبقى int، والتحويل يحدث داخل الحساب فقط.' },
        { type: 'steps', title: 'Quiz percentage', problem: 'You got 37 out of 40 in a quiz. Print the exact percentage, and also the whole percentage without the decimal part.',
          steps: [
            { en: 'Store the two whole numbers.', code: 'int score = 37;\nint outOf = 40;' },
            { en: 'Multiply by <code>100.0</code> first: this makes the calculation a double. Then divide. Check by hand: 3700 / 40 = 92.5.', code: 'double percent = score * 100.0 / outOf;' },
            { en: 'For the whole percentage, cast the double to an int. The decimal part is cut off.', code: 'int whole = (int) percent;' },
            { en: 'Print both values with labels.', code: 'System.out.println("Percent: " + percent);\nSystem.out.println("Whole percent: " + whole);' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int score = 37;
        int outOf = 40;
        double percent = score * 100.0 / outOf;
        int whole = (int) percent;
        System.out.println("Percent: " + percent);
        System.out.println("Whole percent: " + whole);
    }
}
`, out: J`
Percent: 92.5
Whole percent: 92
`, ar: 'نضرب في 100.0 لنحصل على double، ثم (int) يحذف الكسر.' },
        { type: 'note', kind: 'exam', en: 'Casting never changes the original variable. It produces a new value for that expression only.' }
      ],
      mistakes: [
        { title: 'Casting after the division', en: 'The decimal is already lost.', code: '(double) (7 / 2)   // 3.0' },
        { title: 'Expecting a cast to round', en: '<code>(int) 3.99</code> is 3, not 4.' },
        { title: 'Storing a double in an int without a cast', en: 'It does not compile.', code: 'int x = 5.5;' },
        { title: 'Forgetting that the cast applies to the next value only', en: '<code>(double) a / b</code> casts just <code>a</code>.' }
      ],
      remember: ['Small to big (int to double) is <b>automatic</b> (widening).', 'Big to small needs a <b>cast</b>: <code>(int) 3.99</code>.', 'A cast to int <b>cuts off</b> the decimals; it does not round.', 'Cast before dividing to keep the decimals: <code>(double) sum / 2</code>.', 'A cast applies to the value right after it, and it does not change the variable.'],
      rememberAr: 'int إلى double تلقائي، و double إلى int يحتاج (int) ويحذف الكسر، ويجب التحويل قبل القسمة.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println((int) 9.7);
    }
}
`, answer: '9', explain: 'The decimal is cut off.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        double d = 6;
        System.out.println(d);
    }
}
`, answer: '6.0', explain: 'The int 6 is widened to 6.0.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(9 / 2);
        System.out.println(9 / 2.0);
        System.out.println((int) 9.7);
        System.out.println((double) 9 / 2);
    }
}
`, answer: '4\n4.5\n9\n4.5', explain: '9 / 2 = 4 (int division). With 2.0: 4.5. The cast truncates. (double) 9 gives 9.0, then 9.0 / 2 = 4.5.' },
        { t: 'mcq', q: 'Which declaration does <b>not</b> compile without a cast?', options: ['<code>double d = 10;</code>', '<code>long n = 10;</code>', '<code>int i = 10.0;</code>', '<code>float f = 10;</code>'], answer: 2, explain: '10.0 is a double; storing it in an int is narrowing.' },
        { t: 'fill', q: 'Complete the cast so the result is 8.5.', code: J`
double avg = (___) 17 / 2;
`, answers: ['double'], explain: '17.0 / 2 = 8.5.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        double x = 7.9;
        int y = (int) x;
        System.out.println(y + 1);
        System.out.println(x);
    }
}
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
`, hint: 'Divide by 2.0 or cast the sum to double first.', explain: '(3 + 4) / 2.0 = 3.5.' },
        { t: 'bug', q: 'This program should print the whole riyals of a price, <code>Riyals: 24</code>. It does not compile. Tap the line with the bug.', qAr: 'من double إلى int نحتاج cast.',
          code: J`
public class Main {
    public static void main(String[] args) {
        double price = 24.75;
        int riyals = price;
        System.out.println("Riyals: " + riyals);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        double price = 24.75;
        int riyals = (int) price;
        System.out.println("Riyals: " + riyals);
    }
}
`, hint: 'Is double to int widening or narrowing?', explain: 'A double does not fit into an int without losing the decimal part, so Java refuses: <i>possible lossy conversion from double to int</i>. Write the cast to say that you accept the loss: <code>int riyals = (int) price;</code> gives 24.', explainAr: 'نكتب (int) قبل القيمة.' },
        { t: 'bug', q: 'Nine riyals are shared by two people. Each should get <code>4.5</code>, but the program prints <code>4.0</code>. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int total = 9;
        int people = 2;
        double each = (double) (total / people);
        System.out.println(each);
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        int total = 9;
        int people = 2;
        double each = (double) total / people;
        System.out.println(each);
    }
}
`, hint: 'What is calculated inside the brackets before the cast?', explain: 'The brackets make Java divide first: 9 / 2 is an int division and gives 4. The cast then turns 4 into 4.0, too late. Cast <code>total</code> before the division: <code>(double) total / people</code> gives 9.0 / 2 = 4.5.', explainAr: 'نحوّل قبل القسمة لا بعدها.' },
        { t: 'code', q: 'Read a price as a decimal number. Print only the whole riyals, using a cast. For example <code>37.5</code> prints <code>37</code>. No prompts.', qAr: 'اقرأ{{g:|ي}} double ثم حوّل{{g:|ي}} إلى int.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // read the price, print the whole riyals
    }
}
`, tests: [{ stdin: '37.5', expected: '37' }, { stdin: '9.99', expected: '9' }, { stdin: '120.0', expected: '120' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double price = input.nextDouble();
        int riyals = (int) price;
        System.out.println(riyals);
    }
}
`, hint: '<code>int riyals = (int) price;</code>', explain: 'The cast cuts off the halalas: 9.99 becomes 9, not 10.' }
      ]
    },
    {
      title: 'Joining text and numbers',
      titleAr: 'ربط النصوص بالأعداد',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why join text and numbers?' },
        { type: 'p', en: 'Users do not want to see a bare number like <code>36</code>. They want a sentence: <i>Total: 36 riyals</i>. You have already used <code>+</code> to join text and values. In this lesson you learn exactly how Java decides whether <code>+</code> <b>adds</b> or <b>joins</b>, so your sentences always come out right.',
          ar: 'الإشارة + تجمع الأعداد أو تربط النصوص حسب نوع القيم على جانبيها.' },
        { type: 'analogy', title: 'Train carriages', en: 'Joining texts is like hooking train carriages together: <code>"Sara" + " got " + "85"</code> makes one long train, <code>"Sara got 85"</code>. The carriages are joined in order with nothing added between them, so you must put the spaces inside the quotes yourself.' },
        { type: 'h', en: 'One sign, two jobs' },
        { type: 'p', en: '<code>+</code> has two jobs. Between two numbers it <b>adds</b>. If at least one side is a String, it <b>joins</b>. Joining texts is called <b>concatenation</b>. Before joining, Java turns the number into text, then glues it on.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(5 + 3);
        System.out.println("5" + "3");
        System.out.println("Mark: " + 85);
    }
}
`, out: J`
8
53
Mark: 85
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['5 + 3', 'Two numbers: add. <b>8</b>.'],
          ['"5" + "3"', 'Two Strings: join. <b>53</b>, as text (not the number fifty-three).'],
          ['"Mark: " + 85', 'String + number: 85 becomes the text <code>"85"</code> and is joined.']
        ], ar: 'عدد + عدد = جمع، ونص + أي قيمة = ربط.' },
        { type: 'check', q: 'What does <code>System.out.println("7" + "2");</code> print?', options: ['72', '9', '7 2', 'An error'], answer: 0, explain: 'Both sides are Strings (in quotes), so + joins them: 72.', ar: '72' },
        { type: 'h', en: 'Left to right, one + at a time' },
        { type: 'p', en: 'When there are several <code>+</code> signs, Java works <b>left to right</b>, one pair at a time (Lesson 6). Each step looks at its two sides: if one side is already text, it joins; if both are numbers, it adds. Once the result is text, every <code>+</code> after it joins. That is why the place of the text changes the answer.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("" + 1 + 2);
        System.out.println(1 + 2 + "");
        System.out.println("Sum: " + 1 + 2);
        System.out.println(1 + 2 + " is the sum");
    }
}
`, out: J`
12
3
Sum: 12
3 is the sum
` },
        { type: 'table', head: ['Expression', 'Step 1', 'Step 2', 'Printed'], rows: [
          ['<code>"" + 1 + 2</code>', '<code>"" + 1</code> → <code>"1"</code>', '<code>"1" + 2</code> → <code>"12"</code>', '<code>12</code>'],
          ['<code>1 + 2 + ""</code>', '<code>1 + 2</code> → <code>3</code>', '<code>3 + ""</code> → <code>"3"</code>', '<code>3</code>'],
          ['<code>"Sum: " + 1 + 2</code>', '<code>"Sum: 1"</code>', '<code>"Sum: 12"</code>', '<code>Sum: 12</code>'],
          ['<code>1 + 2 + " is the sum"</code>', '<code>3</code>', '<code>"3 is the sum"</code>', '<code>3 is the sum</code>']
        ] },
        { type: 'p', en: 'The empty String <code>""</code> has no characters, but it is still a String. Putting it first makes every <code>+</code> after it a join.', ar: 'بمجرد أن يصبح الناتج نصاً تتحول كل + بعده إلى ربط.' },
        { type: 'check', q: 'What does <code>System.out.println(4 + 5 + "kg");</code> print?', options: ['9kg', '45kg', '9 kg', 'An error'], answer: 0, explain: 'Left to right: 4 + 5 = 9 (two numbers), then 9 + "kg" joins: 9kg. There is no space because none is in the quotes.', ar: '9kg' },
        { type: 'memory', title: 'Joining makes a new String', en: 'A String object never changes. <code>msg + " Sara"</code> builds a <b>new</b> String object, and the arrow in <code>msg</code> moves to it. The old object has no arrow left, so Java will clean it away.', code: J`
String msg = "Hello";
msg = msg + " Sara";
`, frames: [
          { label: 'After <code>String msg = "Hello";</code>', vars: [{ name: 'msg', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"Hello"' }] }] },
          { label: 'After <code>msg = msg + " Sara";</code>: a new object B', vars: [{ name: 'msg', type: 'String', ref: 'B' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"Hello"' }], gone: true }, { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"Hello Sara"' }] }] }
        ], ar: 'الربط ينشئ كائن نص جديداً، ويشير المتغير إليه.' },
        { type: 'h', en: 'Brackets: add first, then join' },
        { type: 'p', en: 'To print a real sum inside a sentence, put the sum in <b>brackets</b>. Brackets are calculated first, so the numbers are added before any joining happens.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int a = 7;
        int b = 5;
        System.out.println("Sum: " + a + b);
        System.out.println("Sum: " + (a + b));
        System.out.println(a + " + " + b + " = " + (a + b));
    }
}
`, out: J`
Sum: 75
Sum: 12
7 + 5 = 12
` },
        { type: 'lines', rows: [
          ['"Sum: " + a + b', 'Left to right: <code>"Sum: 7"</code>, then <code>"Sum: 75"</code>. Wrong!'],
          ['"Sum: " + (a + b)', 'Brackets first: 12. Then <code>"Sum: 12"</code>. Right.'],
          ['a + " + " + b + " = " + (a + b)', 'The + inside quotes is just a character to print, like a letter.']
        ], ar: 'ضع{{g:|ي}} الجمع بين قوسين داخل الجملة.' },
        { type: 'note', kind: 'exam', en: '<code>*</code>, <code>/</code> and <code>%</code> come before <code>+</code>, so they work without brackets: <code>"Total: " + 3 * 12</code> prints <code>Total: 36</code>. But <code>"Left: " + 50 - 8</code> does not compile: Java first makes the text <code>"Left: 50"</code>, and you cannot subtract 8 from text (<i>bad operand types for binary operator \'-\'</i>). Write <code>"Left: " + (50 - 8)</code>.', ar: 'الطرح داخل الجملة يحتاج قوسين دائماً.' },
        { type: 'check', q: '<code>int x = 10; int y = 20;</code> Which line prints <code>Total: 30</code>?', options: ['<code>System.out.println("Total: " + (x + y));</code>', '<code>System.out.println("Total: " + x + y);</code>', '<code>System.out.println("Total: " + x - y);</code>'], answer: 0, explain: 'The second prints Total: 1020. The third does not compile. Only the brackets give 30.', ar: 'الخيار الأول.' },
        { type: 'h', en: 'Building neat sentences' },
        { type: 'analogy', title: 'A printed form', en: 'A sentence with values is like a printed form: <i>Name: ____ Mark: ____</i>. The text in quotes is the printed part, and the variables fill the blanks. Check that each printed part has its spaces and punctuation.' },
        { type: 'list', items: [
          '<b>Spaces</b> go inside the quotes, before and after a value: <code>" got "</code>.',
          '<b>Punctuation</b> such as <code>:</code> <code>,</code> <code>.</code> <code>!</code> also goes inside the quotes.',
          '<b>Units</b> come after the number: <code>" riyals"</code>, <code>"%"</code>, <code>" km"</code>.',
          'You can grow a String with <code>+=</code>: <code>msg += "!";</code> adds an exclamation mark at the end.'
        ], ar: 'المسافات وعلامات الترقيم والوحدات تكتب داخل علامات الاقتباس.' },
        { type: 'steps', title: 'A receipt line', problem: 'A customer buys 3 coffees at 8 riyals each. Print a receipt line exactly like <code>3 x Coffee = 24 riyals</code>.',
          steps: [
            { en: 'Store the item, the quantity and the price.', code: 'String item = "Coffee";\nint qty = 3;\nint price = 8;' },
            { en: 'Plan the sentence as a form: <i>qty</i> + <code>" x "</code> + <i>item</i> + <code>" = "</code> + <i>total</i> + <code>" riyals"</code>.' },
            { en: 'The total is a multiplication. <code>*</code> runs before <code>+</code>, but brackets make it clearer to read.', code: 'System.out.println(qty + " x " + item + " = " + (qty * price) + " riyals");' },
            { en: 'Check the first <code>+</code>: <code>qty + " x "</code> has a String on the right, so it joins (it does not add). Good.' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        String item = "Coffee";
        int qty = 3;
        int price = 8;
        System.out.println(qty + " x " + item + " = " + (qty * price) + " riyals");
    }
}
`, out: '3 x Coffee = 24 riyals', ar: 'نخطط الجملة كنموذج ثم نملأ الفراغات بالمتغيرات.' },
        { type: 'steps', title: 'A friendly message from input', problem: 'Read a first name and a mark out of 100. Print <code>Well done, Sara! Your mark is 92/100.</code> for the input <code>Sara 92</code>.',
          steps: [
            { en: 'Read one word and one whole number.', code: 'String name = input.next();\nint mark = input.nextInt();' },
            { en: 'Write the fixed parts in quotes: <code>"Well done, "</code>, <code>"! Your mark is "</code>, <code>"/100."</code>.' },
            { en: 'Join them with the variables in order.', code: 'System.out.println("Well done, " + name + "! Your mark is " + mark + "/100.");' },
            { en: 'Check the spaces: one after the comma, one after "is". The / inside quotes is just a character, not a division.' },
            { en: 'The complete program:' }
          ],
          stdin: 'Sara 92',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.next();
        int mark = input.nextInt();
        System.out.println("Well done, " + name + "! Your mark is " + mark + "/100.");
    }
}
`, out: 'Well done, Sara! Your mark is 92/100.', ar: 'الرموز داخل الاقتباس تُطبع كما هي.' }
      ],
      mistakes: [
        { title: 'Forgetting the spaces', en: 'Java adds nothing between the parts.', code: 'System.out.println(name + "got" + mark);   // Saragot85' },
        { title: 'Adding inside a sentence without brackets', en: 'After the text, + joins.', code: 'System.out.println("Sum: " + a + b);   // Sum: 75' },
        { title: 'Subtracting inside a sentence without brackets', en: 'It does not compile: you cannot subtract from text.', code: 'System.out.println("Left: " + 50 - 8);' },
        { title: 'Putting numbers in quotes', en: 'A number in quotes is text, so it joins instead of adding.', code: 'System.out.println("5" + 3);   // 53, not 8' }
      ],
      remember: ['<code>+</code> adds two numbers; with a String on either side it joins (<b>concatenation</b>).', 'Java works left to right: <code>"" + 1 + 2</code> is <code>12</code>, <code>1 + 2 + ""</code> is <code>3</code>.', 'Put a sum in brackets inside a sentence: <code>"Sum: " + (a + b)</code>.', '<code>*</code> <code>/</code> <code>%</code> work without brackets; <code>-</code> needs them.', 'Spaces, punctuation and units go inside the quotes.', 'Joining makes a new String object.'],
      rememberAr: 'الإشارة + تربط إذا وُجد نص، وتُنفذ من اليسار إلى اليمين، لذلك نضع الجمع بين قوسين داخل الجملة.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(2 + 3);
        System.out.println("2" + 3);
    }
}
`, answer: '5\n23', explain: 'Two numbers add to 5. A String and a number join to "23".' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(1 + 2 + "3");
        System.out.println("1" + 2 + 3);
        System.out.println("1" + (2 + 3));
    }
}
`, answer: '33\n123\n15', explain: 'Line 1: 1 + 2 = 3, then "3" joined: 33. Line 2: text first, so everything joins: 123. Line 3: brackets first, 2 + 3 = 5, then "1" + 5 = 15.' },
        { t: 'fill', q: 'Add brackets so the program prints <code>Sum: 12</code>.', code: J`
int a = 7;
int b = 5;
System.out.println("Sum: " + ___a + b___);
`, answers: ['(', ')'], explain: 'The brackets make Java add 7 + 5 first, then join the 12.' },
        { t: 'bug', q: 'You had 50 riyals and spent 18. The program should print <code>Left: 32</code>, but it does not compile. Tap the line with the bug.', qAr: 'الطرح بعد النص يحتاج قوسين.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int money = 50;
        int spent = 18;
        System.out.println("Left: " + money - spent);
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        int money = 50;
        int spent = 18;
        System.out.println("Left: " + (money - spent));
    }
}
`, hint: 'What is <code>"Left: " + money</code>: a number or text?', explain: 'Left to right, <code>"Left: " + money</code> becomes the text <code>"Left: 50"</code>. Then Java tries text minus 18, which is not allowed. Brackets make the subtraction happen first: <code>"Left: " + (money - spent)</code>.', explainAr: 'نضع الطرح بين قوسين.' },
        { t: 'bug', q: 'The program should print <code>Sara got 85</code>, but it prints <code>Saragot85</code>. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        String name = "Sara";
        int mark = 85;
        System.out.println(name + "got" + mark);
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        String name = "Sara";
        int mark = 85;
        System.out.println(name + " got " + mark);
    }
}
`, hint: 'Where do the spaces come from?', explain: 'Concatenation adds nothing between the parts. The spaces must be inside the quotes: <code>" got "</code>.', explainAr: 'المسافات توضع داخل علامات الاقتباس.' },
        { t: 'code', q: 'Read two whole numbers and print a full sum sentence. For <code>7 5</code> print <code>7 + 5 = 12</code>. No prompts.', qAr: 'استخدم{{g:|ي}} القوسين للجمع داخل الجملة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // read a and b, print the sentence
    }
}
`, tests: [{ stdin: '7 5', expected: '7 + 5 = 12' }, { stdin: '40 60', expected: '40 + 60 = 100' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        System.out.println(a + " + " + b + " = " + (a + b));
    }
}
`, hint: 'The middle <code>" + "</code> is text to print; the real sum needs brackets: <code>(a + b)</code>.', explain: 'Without the brackets you would print <code>7 + 5 = 75</code>.' }
      ]
    },
    {
      title: 'Limits of numbers: overflow and decimals',
      titleAr: 'حدود الأعداد: الفيضان والكسور العشرية',
      minutes: 30,
      body: [
        { type: 'h', en: 'Numbers in a computer are not endless' },
        { type: 'p', en: 'In maths, numbers go on forever. In a computer, each type is a box of fixed size (Lesson 4), so there is a biggest and a smallest value. Decimals have a second limit: most of them are stored as a very close copy, not the exact number. If you do not know these limits, a program can give a wrong answer with <b>no error message</b>. That is worse than a crash, because nobody notices.',
          ar: 'لكل نوع حد أعلى، والأعداد العشرية تُخزن بقيمة قريبة جداً لا بالقيمة الدقيقة.' },
        { type: 'h', en: 'int overflow: the number wraps around' },
        { type: 'p', en: 'The biggest int is 2147483647 (about 2.1 billion). Add 1 and you get the smallest int, -2147483648. You saw this in Lesson 4. The danger is that it also happens in the middle of a normal calculation, where you do not expect it.' },
        { type: 'analogy', title: 'A wall clock', en: 'After 12 o\'clock a wall clock does not show 13; it goes back to 1. An int is like a clock with about 4.3 billion positions: after the biggest positive number, it jumps to the most negative one.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int days = 30;
        int ms = days * 24 * 60 * 60 * 1000;
        System.out.println(ms);
    }
}
`, out: '-1702967296' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int ms = days * 24 * 60 * 60 * 1000;', 'The milliseconds in 30 days. The true answer is 2,592,000,000, which is bigger than 2,147,483,647.'],
          ['System.out.println(ms);', 'Java prints a negative number. No error, no warning: just a wrong answer.']
        ], ar: 'الناتج تجاوز حد int فانقلب إلى عدد سالب دون أي رسالة خطأ.' },
        { type: 'check', q: 'Which value is too big for an int?', options: ['3,000,000,000', '2,000,000,000', '-5', '2,147,483,647'], answer: 0, explain: 'The biggest int is 2,147,483,647. Three billion is past it.', ar: 'ثلاثة مليارات.' },
        { type: 'h', en: 'long: a much bigger box' },
        { type: 'p', en: 'A <code>long</code> has 64 bits and holds numbers up to 9223372036854775807 (about 9.2 quintillion). Two rules: the variable must be <code>long</code>, <b>and</b> the calculation must happen in long. Put <code>L</code> on the first number, so the whole calculation is done in long from the start.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        long ms1 = 30 * 24 * 60 * 60 * 1000;
        long ms2 = 30L * 24 * 60 * 60 * 1000;
        System.out.println(ms1);
        System.out.println(ms2);
    }
}
`, out: J`
-1702967296
2592000000
` },
        { type: 'lines', rows: [
          ['long ms1 = 30 * 24 * 60 * 60 * 1000;', 'All the numbers are int, so Java multiplies in int, overflows, and only then puts the wrong answer into the long box.'],
          ['long ms2 = 30L * 24 * 60 * 60 * 1000;', '<code>30L</code> is a long, so every multiplication is done in long. Correct.']
        ], ar: 'يجب أن يكون الحساب نفسه من نوع long، لذلك نضع L على أول عدد.' },
        { type: 'memory', title: 'Two long boxes, two different answers', en: 'Both boxes are long and both are big enough. The difference is only <b>how</b> the value was calculated before it was stored.', frames: [
          { label: 'After <code>long ms1 = 30 * 24 * 60 * 60 * 1000;</code>: calculated in int, already wrong', vars: [{ name: 'ms1', type: 'long', value: '-1702967296' }] },
          { label: 'After <code>long ms2 = 30L * 24 * 60 * 60 * 1000;</code>: calculated in long', vars: [{ name: 'ms1', type: 'long', value: '-1702967296' }, { name: 'ms2', type: 'long', value: '2592000000' }] }
        ], ar: 'الصندوق الكبير لا يصلح خطأً وقع أثناء الحساب.' },
        { type: 'check', q: 'Which line stores 4000000000 correctly?', options: ['<code>long n = 2000000000L * 2;</code>', '<code>long n = 2000000000 * 2;</code>', '<code>int n = 2000000000 * 2;</code>'], answer: 0, explain: 'Only the first does the multiplication in long. The second overflows in int before it is stored.', ar: 'الخيار الأول.' },
        { type: 'h', en: 'Decimals are close, not exact' },
        { type: 'p', en: 'A <code>double</code> stores most decimals as a very close copy. Computers count in <b>binary</b> (only 0 and 1), and a number like 0.1 cannot be written exactly in binary, just as 1/3 cannot be written exactly in our decimal system. The tiny error is usually hidden when you print, but sometimes it shows.' },
        { type: 'analogy', title: 'One third of a riyal', en: 'Try to write one third of a riyal as a decimal: 0.33, 0.333, 0.3333… You must stop somewhere, so you always lose a little. The computer has the same problem with 0.1, because it writes numbers in binary.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(0.1 + 0.2);
        System.out.println(1.10 + 2.20);
        System.out.println(0.5 + 0.25);
    }
}
`, out: J`
0.30000000000000004
3.3000000000000003
0.75
` },
        { type: 'lines', rows: [
          ['0.1 + 0.2', 'Not exactly 0.3: a tiny error appears in the 17th digit.'],
          ['1.10 + 2.20', 'Two prices give 3.3000000000000003, not 3.3.'],
          ['0.5 + 0.25', 'Halves and quarters are exact in binary, so 0.75 is exact.']
        ], ar: 'معظم الكسور العشرية لا تُخزن بدقة تامة، فقد يظهر خطأ صغير جداً.' },
        { type: 'check', q: 'What does <code>System.out.println(0.1 + 0.2);</code> print?', options: ['0.30000000000000004', '0.3', '0.30', 'An error'], answer: 0, explain: '0.1 and 0.2 are stored as close copies, and the tiny errors show in the sum.', ar: '0.30000000000000004' },
        { type: 'note', kind: 'tip', en: 'A double keeps only about 16 correct digits. Very big doubles are printed with <code>E</code>: <code>12345678901234567890.0</code> prints <code>1.2345678901234567E19</code>, which means 1.2345678901234567 × 10<sup>19</sup>. The last digits were lost.' },
        { type: 'h', en: 'Money: count halalas with int' },
        { type: 'p', en: 'For money, many programmers avoid <code>double</code>. They store whole <b>halalas</b> in an <code>int</code> (or a <code>long</code>): 1.10 riyals is 110 halalas. Whole numbers are always exact. When you print, split them into riyals and halalas with <code>/</code> and <code>%</code> (Lesson 5).', ar: 'نخزن المال بالهللات في int لأن الأعداد الصحيحة دقيقة.' },
        { type: 'steps', title: 'Adding two prices exactly', problem: 'A juice costs 1.10 riyals and a sandwich costs 2.20 riyals. Print the exact total as riyals and halalas.',
          steps: [
            { en: 'Store each price in halalas, as whole numbers.', code: 'int juice = 110;\nint sandwich = 220;' },
            { en: 'Add them. Whole numbers are exact: 110 + 220 = 330.', code: 'int total = juice + sandwich;' },
            { en: 'Split into riyals and halalas.', code: 'int riyals = total / 100;\nint halalas = total % 100;' },
            { en: 'Print. No 3.3000000000000003 this time.', code: 'System.out.println(riyals + " riyals and " + halalas + " halalas");' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int juice = 110;
        int sandwich = 220;
        int total = juice + sandwich;
        int riyals = total / 100;
        int halalas = total % 100;
        System.out.println(riyals + " riyals and " + halalas + " halalas");
    }
}
`, out: '3 riyals and 30 halalas', ar: 'الحساب بالهللات يعطي نتيجة دقيقة.' },
        { type: 'steps', title: 'Water used in one year', problem: 'About 35,000,000 people each drink about 2 litres of water a day. How many litres is that in 365 days?',
          steps: [
            { en: 'Store the three values as ints: each one alone is small enough.', code: 'int people = 35000000;\nint litresEach = 2;\nint days = 365;' },
            { en: 'Estimate first: 35 million x 2 x 365 is about 25 billion. That is far past the int limit, so the answer needs a long.' },
            { en: 'Cast the first value to long (Lesson 10), so the whole multiplication is done in long. Without the cast you would get -219803776.', code: 'long total = (long) people * litresEach * days;' },
            { en: 'Print the result.', code: 'System.out.println("Litres in one year: " + total);' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int people = 35000000;
        int litresEach = 2;
        int days = 365;
        long total = (long) people * litresEach * days;
        System.out.println("Litres in one year: " + total);
    }
}
`, out: 'Litres in one year: 25550000000', ar: 'نقدّر الناتج أولاً، فإن تجاوز حد int نستخدم long.' },
        { type: 'note', kind: 'exam', en: 'A big box does not help if the calculation overflows before the value is stored. The <code>L</code> (or the cast to long) must be <b>inside</b> the calculation, on the first number.' }
      ],
      mistakes: [
        { title: 'Thinking a long box fixes any overflow', en: 'The calculation is still done in int.', code: 'long ms = 30 * 24 * 60 * 60 * 1000;   // -1702967296' },
        { title: 'Forgetting L on a big number', en: 'A number past the int limit does not compile without L.', code: 'long views = 3000000000;   // integer number too large' },
        { title: 'Expecting 0.1 + 0.2 to be exactly 0.3', en: 'Most decimals are close copies; small errors can appear.' },
        { title: 'Using double for money that must be exact', en: 'Count halalas in an int or a long, and split them with / and % when you print.', code: 'double total = 1.10 + 2.20;   // 3.3000000000000003' }
      ],
      remember: ['An int holds up to 2147483647; going past it wraps around (<b>overflow</b>) with no error.', 'Use <code>long</code> for very big whole numbers, and put <code>L</code> on a number in the calculation: <code>30L * 24 * ...</code>.', 'A long variable does not help if the calculation was done in int.', 'A double is a close copy: <code>0.1 + 0.2</code> prints <code>0.30000000000000004</code>.', 'For exact money, count halalas in an int or long.', 'Estimate the size of a result before you choose the type.'],
      rememberAr: 'int له حد أعلى، و long للأعداد الكبيرة مع L داخل الحساب، و double ليس دقيقاً تماماً، والمال يُحسب بالهللات.',
      practice: [
        { t: 'mcq', q: 'The number of people in the world is about 8,000,000,000. Which type should hold it?', options: ['<code>long</code>', '<code>int</code>', '<code>short</code>', '<code>char</code>'], answer: 0, explain: '8 billion is past the int limit of about 2.1 billion, so use long.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(0.1 + 0.2);
        System.out.println(0.25 + 0.5);
    }
}
`, answer: '0.30000000000000004\n0.75', explain: '0.1 and 0.2 are close copies, so a tiny error shows. Quarters and halves are exact.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(2147483647 + 1);
        System.out.println(2147483647L + 1);
    }
}
`, answer: '-2147483648\n2147483648', explain: 'The first sum is done in int and wraps around. With L, the sum is done in long, which has plenty of room.' },
        { t: 'bug', q: 'This program should print the milliseconds in 30 days, <code>2592000000</code>. It prints a negative number. Tap the line with the bug.', qAr: 'الناتج أكبر من حد int.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int days = 30;
        int ms = days * 24 * 60 * 60 * 1000;
        System.out.println(ms);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int days = 30;
        long ms = days * 24L * 60 * 60 * 1000;
        System.out.println(ms);
    }
}
`, hint: 'How big is the true answer, and how big can an int be?', explain: 'The true answer, 2,592,000,000, is past the int limit, so the int calculation overflows. Use a long box <b>and</b> make the calculation long by writing <code>24L</code> early in it.', explainAr: 'نستخدم long ونضع L داخل الحساب.' },
        { t: 'fill', q: 'Complete the code so the seconds in 100 years (3153600000) are calculated without overflow.', code: J`
long seconds = 100___ * 365 * 24 * 60 * 60;
System.out.println(seconds);
`, answers: ['L'], explain: '<code>100L</code> makes the first number a long, so every multiplication is done in long.' },
        { t: 'code', q: 'Read a number of days (a whole number) and print the number of milliseconds in those days. One day has 24 x 60 x 60 x 1000 milliseconds. For <code>30</code> print <code>2592000000</code>. No prompts.', qAr: 'استخدم{{g:|ي}} long وضع{{g:|ي}} L داخل الحساب.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // read days, print the milliseconds
    }
}
`, tests: [{ stdin: '1', expected: '86400000' }, { stdin: '30', expected: '2592000000' }, { stdin: '365', expected: '31536000000' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int days = input.nextInt();
        long ms = days * 24L * 60 * 60 * 1000;
        System.out.println(ms);
    }
}
`, hint: 'Store the answer in a long and write <code>24L</code> instead of <code>24</code>.', explain: 'For 30 or 365 days the answer is past the int limit, so the calculation must be done in long.' }
      ]
    },
    {
      title: 'Problem solving: input → process → output',
      titleAr: 'حل المسائل: إدخال ثم معالجة ثم إخراج',
      minutes: 30,
      body: [
        { type: 'h', en: 'Plan before you type' },
        { type: 'p', en: 'Many students open the editor and start typing at once. Soon they are lost. Good programmers <b>plan first</b>, in plain words. The plan for most CS101 problems has the same three parts: <b>input</b> (what the user gives), <b>process</b> (the calculations), and <b>output</b> (what you print). This lesson solves three real problems in this way.',
          ar: 'نخطط أولاً: ما المدخلات؟ ما الحسابات؟ ما المخرجات؟ ثم نكتب الكود.' },
        { type: 'analogy', title: 'A recipe', en: 'A recipe lists the ingredients (input), the steps (process) and the dish you get (output). You read the whole recipe before you start cooking. Do the same with a programming problem: understand all of it before the first line of code.' },
        { type: 'h', en: 'Five steps for every problem' },
        { type: 'list', items: [
          '1. <b>Understand</b>: read the problem twice. Underline the numbers and the words <i>read</i> and <i>print</i>.',
          '2. <b>Solve one example by hand</b>, with paper or a calculator.',
          '3. <b>Fill an IPO table</b>: Input, Process, Output.',
          '4. <b>Code</b>: one or two lines for each row of the table. Choose a type for every variable.',
          '5. <b>Test</b> with your hand example. The outputs must match exactly. Then try another example.'
        ], ar: 'افهم، حل مثالاً باليد، املأ الجدول، اكتب الكود، ثم اختبر.' },
        { type: 'check', q: 'What should you do before you write any code?', options: ['Solve one example by hand', 'Print a prompt', 'Choose a long class name', 'Nothing: start typing'], answer: 0, explain: 'A hand example shows you the steps of the process, and later it becomes your test.', ar: 'حل مثالاً باليد.' },
        { type: 'h', en: 'Problem 1: change in riyals and halalas' },
        { type: 'p', en: '<b>The problem.</b> A student buys a meal that costs 37 riyals and 75 halalas and pays with 50 riyals. Write a program that reads the price (riyals, then halalas) and the riyals paid, and prints the change in riyals and halalas. <b>By hand:</b> 50.00 - 37.75 = 12.25, so the change is 12 riyals and 25 halalas.' },
        { type: 'table', head: ['Part', 'Plan'], rows: [
          ['Input', 'three whole numbers: <code>priceRiyals</code>, <code>priceHalalas</code>, <code>paid</code>'],
          ['Process', 'turn everything into halalas: <code>price = priceRiyals * 100 + priceHalalas</code>, <code>paidHalalas = paid * 100</code>, <code>change = paidHalalas - price</code>; then <code>change / 100</code> riyals and <code>change % 100</code> halalas'],
          ['Output', '<code>Change: 12 riyals and 25 halalas</code>']
        ] },
        { type: 'p', en: 'Why halalas? Whole numbers are exact (Lesson 12), and <code>/</code> and <code>%</code> split them easily. With doubles, <code>50 - 37.65</code> gives <code>12.350000000000001</code>.', ar: 'نحوّل كل شيء إلى هللات لتكون الحسابات دقيقة.' },
        { type: 'steps', title: 'The change program', problem: 'Read the price in riyals and halalas, then the riyals paid. Print the change.',
          steps: [
            { en: '<b>Input:</b> three ints. Sample input: <code>37 75 50</code>.', code: 'int priceRiyals = input.nextInt();\nint priceHalalas = input.nextInt();\nint paid = input.nextInt();' },
            { en: '<b>Process 1:</b> everything in halalas. 37 x 100 + 75 = 3775, and 50 x 100 = 5000.', code: 'int price = priceRiyals * 100 + priceHalalas;\nint paidHalalas = paid * 100;' },
            { en: '<b>Process 2:</b> the change in halalas: 5000 - 3775 = 1225.', code: 'int change = paidHalalas - price;' },
            { en: '<b>Process 3:</b> split it: 1225 / 100 = 12 riyals, 1225 % 100 = 25 halalas.', code: 'int riyals = change / 100;\nint halalas = change % 100;' },
            { en: '<b>Output:</b> one neat sentence. Compare with the hand example: 12 and 25. They match.', code: 'System.out.println("Change: " + riyals + " riyals and " + halalas + " halalas");' }
          ],
          stdin: '37 75 50',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int priceRiyals = input.nextInt();
        int priceHalalas = input.nextInt();
        int paid = input.nextInt();
        int price = priceRiyals * 100 + priceHalalas;
        int paidHalalas = paid * 100;
        int change = paidHalalas - price;
        int riyals = change / 100;
        int halalas = change % 100;
        System.out.println("Change: " + riyals + " riyals and " + halalas + " halalas");
    }
}
`, out: 'Change: 12 riyals and 25 halalas', ar: 'كل سطر في الكود يقابل سطراً في الخطة.' },
        { type: 'memory', title: 'The process part in memory', en: 'After the three reads, each line of the process makes one new box. The input boxes are not shown here.', frames: [
          { label: 'After <code>int price = priceRiyals * 100 + priceHalalas;</code>', vars: [{ name: 'price', type: 'int', value: '3775' }] },
          { label: 'After <code>int paidHalalas = paid * 100;</code>', vars: [{ name: 'price', type: 'int', value: '3775' }, { name: 'paidHalalas', type: 'int', value: '5000' }] },
          { label: 'After <code>int change = paidHalalas - price;</code>', vars: [{ name: 'price', type: 'int', value: '3775' }, { name: 'paidHalalas', type: 'int', value: '5000' }, { name: 'change', type: 'int', value: '1225' }] },
          { label: 'After the two split lines', vars: [{ name: 'price', type: 'int', value: '3775' }, { name: 'paidHalalas', type: 'int', value: '5000' }, { name: 'change', type: 'int', value: '1225' }, { name: 'riyals', type: 'int', value: '12' }, { name: 'halalas', type: 'int', value: '25' }] }
        ], ar: 'كل خطوة من المعالجة تنشئ صندوقاً جديداً.' },
        { type: 'check', q: 'The price is 9 riyals and 50 halalas, and you pay 10 riyals. What is <code>change</code> (in halalas)?', options: ['50', '150', '5', '0.5'], answer: 0, explain: '10 x 100 = 1000 and 9 x 100 + 50 = 950, so the change is 1000 - 950 = 50 halalas.', ar: '50' },
        { type: 'h', en: 'Problem 2: seconds to hours, minutes and seconds' },
        { type: 'p', en: '<b>The problem.</b> A phone shows how long a call took in seconds, for example 3725. People prefer hours, minutes and seconds. <b>By hand:</b> one hour is 3600 seconds. 3725 / 3600 = 1 full hour, and 3725 % 3600 = 125 seconds are left. Then 125 / 60 = 2 minutes, and 125 % 60 = 5 seconds. Answer: 1 h 2 min 5 s.' },
        { type: 'analogy', title: 'Big boxes, then small boxes', en: 'You pack 3725 pens. First fill big boxes of 3600 (hours). Then put the pens that are left into small boxes of 60 (minutes). The pens still left over are the seconds. Always pack the <b>leftover</b>, not the full amount, into the small boxes.' },
        { type: 'table', head: ['Part', 'Plan'], rows: [
          ['Input', 'one whole number: <code>total</code> seconds'],
          ['Process', '<code>hours = total / 3600</code>; <code>rest = total % 3600</code>; <code>minutes = rest / 60</code>; <code>seconds = rest % 60</code>'],
          ['Output', '<code>1 h 2 min 5 s</code>']
        ] },
        { type: 'steps', title: 'The time program', problem: 'Read a number of seconds and print it as hours, minutes and seconds.',
          steps: [
            { en: '<b>Input:</b> one int. Sample input: <code>3725</code>.', code: 'int total = input.nextInt();' },
            { en: '<b>Process:</b> full hours, and the seconds left after them.', code: 'int hours = total / 3600;\nint rest = total % 3600;' },
            { en: 'Full minutes and seconds come from the <b>rest</b>, not from the total.', code: 'int minutes = rest / 60;\nint seconds = rest % 60;' },
            { en: '<b>Output:</b> join everything with the units.', code: 'System.out.println(hours + " h " + minutes + " min " + seconds + " s");' },
            { en: 'The complete program:' }
          ],
          stdin: '3725',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = input.nextInt();
        int hours = total / 3600;
        int rest = total % 3600;
        int minutes = rest / 60;
        int seconds = rest % 60;
        System.out.println(hours + " h " + minutes + " min " + seconds + " s");
    }
}
`, out: '1 h 2 min 5 s', ar: 'نقسم على 3600 ثم نستخدم الباقي للدقائق والثواني.' },
        { type: 'check', q: 'For 7300 seconds, how many full hours are there?', options: ['2', '3', '121', '20'], answer: 0, explain: '7300 / 3600 = 2 (whole division). 2 x 3600 = 7200, and 100 seconds are left.', ar: '2' },
        { type: 'h', en: 'Problem 3: splitting a bill between friends' },
        { type: 'p', en: '<b>The problem.</b> Four friends eat together and the bill is 250 riyals. They split it equally. <b>By hand:</b> 250 / 4 = 62.5 riyals each. But if they pay only with whole riyals, each pays 62 and 2 riyals are left over, which one friend adds. The program prints both answers.' },
        { type: 'table', head: ['Part', 'Plan'], rows: [
          ['Input', 'two whole numbers: <code>bill</code> and <code>friends</code>'],
          ['Process', 'exact share: <code>(double) bill / friends</code>; whole riyals: <code>bill / friends</code>; left over: <code>bill % friends</code>'],
          ['Output', '<code>Each pays 62.5 riyals</code> and <code>Whole riyals: 62 each, 2 left over</code>']
        ] },
        { type: 'steps', title: 'The bill program', problem: 'Read the bill (whole riyals) and the number of friends. Print the exact share, then the whole-riyal share and the riyals left over.',
          steps: [
            { en: '<b>Input:</b> two ints. Sample input: <code>250 4</code>.', code: 'int bill = input.nextInt();\nint friends = input.nextInt();' },
            { en: '<b>Process 1:</b> the exact share needs decimals, so cast before dividing (Lesson 10).', code: 'double exact = (double) bill / friends;' },
            { en: '<b>Process 2:</b> whole riyals with <code>/</code>, the leftover with <code>%</code>.', code: 'int each = bill / friends;\nint left = bill % friends;' },
            { en: '<b>Output:</b> two lines. Check by hand: 62.5, then 62 each and 2 left over.', code: 'System.out.println("Each pays " + exact + " riyals");\nSystem.out.println("Whole riyals: " + each + " each, " + left + " left over");' },
            { en: 'The complete program:' }
          ],
          stdin: '250 4',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int bill = input.nextInt();
        int friends = input.nextInt();
        double exact = (double) bill / friends;
        int each = bill / friends;
        int left = bill % friends;
        System.out.println("Each pays " + exact + " riyals");
        System.out.println("Whole riyals: " + each + " each, " + left + " left over");
    }
}
`, out: J`
Each pays 62.5 riyals
Whole riyals: 62 each, 2 left over
`, ar: 'القسمة العشرية للمبلغ الدقيق، و / و % للريالات الكاملة والباقي.' },
        { type: 'note', kind: 'exam', en: 'Test with more than one example, including an <b>exact</b> case. For <code>300 3</code> the bill program should print <code>100.0</code> and <code>0 left over</code>. For the change program, try a payment with no change at all.', ar: 'اختبر{{g:|ي}} بأكثر من مثال، ومنها حالة دقيقة بلا باقٍ.' },
        { type: 'note', kind: 'tip', en: 'In the auto-checked exercises below, do not print prompts. Print only the lines that the question asks for, exactly.' }
      ],
      mistakes: [
        { title: 'Coding before solving one example by hand', en: 'Without a hand example you do not know the steps, and you cannot check the output.' },
        { title: 'Using the total instead of the rest', en: 'After taking the hours out, use the leftover for the minutes.', code: 'int minutes = total / 60;   // 62 for 3725, but we want 2' },
        { title: 'Using double for money', en: 'Tiny errors appear. Work in halalas with int.', code: 'double change = 50 - 37.65;   // 12.350000000000001' },
        { title: 'Swapping / and %', en: '<code>/</code> counts full groups; <code>%</code> gives what is left.', code: 'int riyals = change % 100;   // 25, not 12' }
      ],
      remember: ['Plan with <b>input → process → output</b> before typing.', 'Solve one example by hand first; it becomes your test.', 'Change money to halalas and time to seconds: one small unit makes <code>/</code> and <code>%</code> easy.', 'Use <code>/</code> for full groups and <code>%</code> for what is left; use the leftover for the next step.', 'Test with more than one input, including an exact case.'],
      rememberAr: 'خطط{{g:|ي}} بالإدخال والمعالجة والإخراج، وحل{{g:|ي}} مثالاً باليد، واستخدم{{g:|ي}} الوحدة الصغرى مع / و %.',
      practice: [
        { t: 'mcq', q: 'A problem says: "Read the length and the width of a room and print its area." What is the <b>input</b>?', options: ['The length and the width', 'The area', 'The word "room"', 'Nothing'], answer: 0, explain: 'The input is what the user gives: the length and the width. The area is the output.' },
        { t: 'mcq', q: 'In the time problem, <code>total</code> holds seconds. Which expression gives the minutes after the full hours are taken out?', options: ['<code>total % 3600 / 60</code>', '<code>total / 60</code>', '<code>total % 60</code>', '<code>total / 3600</code>'], answer: 0, explain: '<code>total % 3600</code> is the rest after the hours; dividing it by 60 gives the full minutes. (<code>%</code> and <code>/</code> are on the same level, so they run left to right.)' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int price = 1550;
        int paid = 2000;
        int change = paid - price;
        System.out.println(change / 100 + " riyals " + change % 100 + " halalas");
    }
}
`, answer: '4 riyals 50 halalas', explain: 'change = 450 halalas. 450 / 100 = 4 and 450 % 100 = 50. (<code>/</code> and <code>%</code> run before the joining +.)' },
        { t: 'fill', q: 'Complete the process part of the time program.', code: J`
int hours = total ___ 3600;
int rest = total ___ 3600;
int minutes = rest ___ 60;
int seconds = rest ___ 60;
`, answers: ['/', '%', '/', '%'], explain: 'Full groups with /, what is left with %. First hours, then minutes from the rest.' },
        { t: 'bug', q: 'For the input <code>37 75 50</code> the program should print <code>Change: 12 riyals and 25 halalas</code>, but it prints <code>Change: 25 riyals and 25 halalas</code>. Tap the line with the bug.', qAr: 'أي معامل يعد المجموعات الكاملة؟',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int price = input.nextInt() * 100 + input.nextInt();
        int paid = input.nextInt() * 100;
        int change = paid - price;
        int riyals = change % 100;
        int halalas = change % 100;
        System.out.println("Change: " + riyals + " riyals and " + halalas + " halalas");
    }
}
`, bug: 9, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int price = input.nextInt() * 100 + input.nextInt();
        int paid = input.nextInt() * 100;
        int change = paid - price;
        int riyals = change / 100;
        int halalas = change % 100;
        System.out.println("Change: " + riyals + " riyals and " + halalas + " halalas");
    }
}
`, hint: 'Riyals are full groups of 100 halalas.', explain: 'The change is 1225 halalas. The riyals are the full groups of 100, so they need <code>/</code> (12). Line 9 uses <code>%</code>, which gives what is left (25) — that is the halalas, already on line 10.', explainAr: 'الريالات بالقسمة على 100، والهللات بالباقي.' },
        { t: 'code', q: 'Read a number of seconds and print it as <code>H h M min S s</code>. For <code>3725</code> print <code>1 h 2 min 5 s</code>. No prompts.', qAr: 'استخدم{{g:|ي}} الباقي بعد الساعات لحساب الدقائق.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // input, process, output
    }
}
`, tests: [{ stdin: '3725', expected: '1 h 2 min 5 s' }, { stdin: '59', expected: '0 h 0 min 59 s' }, { stdin: '7322', expected: '2 h 2 min 2 s' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = input.nextInt();
        int hours = total / 3600;
        int rest = total % 3600;
        int minutes = rest / 60;
        int seconds = rest % 60;
        System.out.println(hours + " h " + minutes + " min " + seconds + " s");
    }
}
`, hint: '<code>hours = total / 3600</code>, <code>rest = total % 3600</code>, then <code>rest / 60</code> and <code>rest % 60</code>.', explain: '7322 / 3600 = 2, rest 122; 122 / 60 = 2, 122 % 60 = 2.' },
        { t: 'code', q: 'Read the price in riyals and halalas, then the riyals paid (three whole numbers). Print <code>Change: R riyals and H halalas</code>. For <code>37 75 50</code> print <code>Change: 12 riyals and 25 halalas</code>. No prompts.', qAr: 'حوّل{{g:|ي}} كل شيء إلى هللات أولاً.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // input, process, output
    }
}
`, tests: [{ stdin: '37 75 50', expected: 'Change: 12 riyals and 25 halalas' }, { stdin: '9 50 10', expected: 'Change: 0 riyals and 50 halalas' }, { stdin: '20 0 20', expected: 'Change: 0 riyals and 0 halalas' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int priceRiyals = input.nextInt();
        int priceHalalas = input.nextInt();
        int paid = input.nextInt();
        int change = paid * 100 - (priceRiyals * 100 + priceHalalas);
        int riyals = change / 100;
        int halalas = change % 100;
        System.out.println("Change: " + riyals + " riyals and " + halalas + " halalas");
    }
}
`, hint: 'change = paid * 100 - (priceRiyals * 100 + priceHalalas)', explain: 'Working in halalas keeps every number whole and exact.' },
        { t: 'code', q: 'Read the bill (whole riyals) and the number of friends. Print two lines: <code>Each pays X riyals</code> (the exact share as a double) and <code>Whole riyals: E each, L left over</code>. For <code>250 4</code> print <code>Each pays 62.5 riyals</code> and <code>Whole riyals: 62 each, 2 left over</code>. No prompts.', qAr: 'قسمة عشرية للمبلغ الدقيق، ثم / و %.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // input, process, output
    }
}
`, tests: [{ stdin: '250 4', expected: 'Each pays 62.5 riyals\nWhole riyals: 62 each, 2 left over' }, { stdin: '300 3', expected: 'Each pays 100.0 riyals\nWhole riyals: 100 each, 0 left over' }, { stdin: '100 8', expected: 'Each pays 12.5 riyals\nWhole riyals: 12 each, 4 left over' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int bill = input.nextInt();
        int friends = input.nextInt();
        double exact = (double) bill / friends;
        int each = bill / friends;
        int left = bill % friends;
        System.out.println("Each pays " + exact + " riyals");
        System.out.println("Whole riyals: " + each + " each, " + left + " left over");
    }
}
`, hint: 'Cast before dividing for the exact share: <code>(double) bill / friends</code>.', explain: '100 / 8.0 = 12.5; 100 / 8 = 12 and 100 % 8 = 4.' }
      ]
    },
    {
      title: 'Common pitfalls: a review with drills',
      titleAr: 'أخطاء شائعة: مراجعة وتدريب',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why a lesson about traps?' },
        { type: 'p', en: 'In this unit, most lost marks in CS101 exams come from the same few traps. None of them is hard once you have seen it. In this lesson each trap gets a short reminder, a small program and a quick drill. Try every question <b>before</b> you read the answer, and write a trace table when you are not sure.',
          ar: 'معظم الأخطاء في هذه الوحدة تتكرر، ومعرفتها تجعل تجنبها سهلاً.' },
        { type: 'analogy', title: 'Holes in the road', en: 'When you know where the holes are on your street, you drive around them without thinking. These traps are the holes in the Java road. After this lesson you will see them coming.' },
        { type: 'h', en: 'Trap 1: integer division' },
        { type: 'p', en: 'int / int always gives an int. This happens even when you store the answer in a <code>double</code>, because the division is done first and the decimals are already gone. Fix it by making one side a double (<code>3.0</code>) or by a cast <b>before</b> the division.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int total = 256;
        double wrong = total / 3;
        double right = total / 3.0;
        System.out.println(wrong);
        System.out.println(right);
    }
}
`, out: J`
85.0
85.33333333333333
` },
        { type: 'check', q: 'What is stored by <code>double half = 1 / 2;</code>?', options: ['0.0', '0.5', '1.0', 'An error'], answer: 0, explain: '1 / 2 is an int division: 0. Then 0 is widened to 0.0.', ar: '0.0' },
        { type: 'h', en: 'Trap 2: what % really gives' },
        { type: 'p', en: '<code>%</code> is the <b>remainder</b>, not a percentage! <code>n % 2</code> is 0 for even and 1 for odd numbers. <code>n % 10</code> is the last digit. <code>n / 10 % 10</code> is the digit before it (the tens). <code>n % 100</code> is the last two digits.', ar: '% هو باقي القسمة وليس نسبة مئوية.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int year = 2026;
        System.out.println(year % 2);
        System.out.println(year % 10);
        System.out.println(year / 10 % 10);
        System.out.println(year % 100);
    }
}
`, out: J`
0
6
2
26
` },
        { type: 'lines', rows: [
          ['year % 2', '2026 is even, so the remainder is <b>0</b>.'],
          ['year % 10', 'The last digit: <b>6</b>.'],
          ['year / 10 % 10', 'Left to right: 2026 / 10 = 202, then 202 % 10 = <b>2</b> (the tens digit).'],
          ['year % 100', 'The last two digits: <b>26</b>.']
        ] },
        { type: 'check', q: 'What is <code>57 % 2</code>, and what does it tell you?', options: ['1: 57 is odd', '0: 57 is even', '28: half of 57', '57%: a percentage'], answer: 0, explain: '57 = 28 x 2 + 1. A remainder of 1 means odd.', ar: '1: فردي' },
        { type: 'h', en: 'Trap 3: mixing int and double' },
        { type: 'table', head: ['You write', 'What happens', 'Fix'], rows: [
          ['<code>int x = 7.5;</code>', 'Compile error: possible lossy conversion', '<code>double x = 7.5;</code> or <code>(int) 7.5</code>'],
          ['<code>double d = 7 / 2;</code>', '<code>3.0</code>: int division first', '<code>7 / 2.0</code>'],
          ['<code>int n = (int) 9.99;</code>', '<code>9</code>: a cast cuts, it never rounds', 'Expect 9, not 10'],
          ['<code>double d = 5;</code>', '<code>5.0</code>: automatic widening', 'Nothing to fix']
        ] },
        { type: 'check', q: 'Which line compiles?', options: ['<code>double d = 10;</code>', '<code>int n = 2.5;</code>', '<code>int n = 10.0;</code>', '<code>long m = 1.5;</code>'], answer: 0, explain: 'An int fits into a double (widening). The others try to put a decimal into a whole-number box without a cast.', ar: 'double d = 10;' },
        { type: 'h', en: 'Trap 4: Scanner with mixed input' },
        { type: 'p', en: 'Two rules. <b>Order:</b> read the values in the same order as they are typed, each with the right method (<code>nextInt</code>, <code>nextDouble</code>, <code>next</code>, <code>nextLine</code>). <b>Clean the line:</b> after <code>nextInt</code>, <code>nextDouble</code> or <code>next</code>, call <code>input.nextLine();</code> once before you read a whole line.' },
        { type: 'steps', title: 'A student card from mixed input', problem: 'Line 1: a full name. Line 2: an age and a GPA. Line 3: a favourite place (it may have spaces). Print one line like <code>Huda Saleh, 19, GPA 3.6, likes Wadi Hanifa</code>.',
          steps: [
            { en: 'Line 1 is a whole line and nothing was read before it: <code>nextLine()</code>.', code: 'String name = input.nextLine();' },
            { en: 'Line 2 has an int and a double, in this order.', code: 'int age = input.nextInt();\ndouble gpa = input.nextDouble();' },
            { en: 'The line break after 3.6 is still waiting. Clean it.', code: 'input.nextLine();' },
            { en: 'Now read line 3 as a whole line.', code: 'String place = input.nextLine();' },
            { en: 'Print the card. The complete program:' }
          ],
          stdin: 'Huda Saleh\n19 3.6\nWadi Hanifa',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine();
        int age = input.nextInt();
        double gpa = input.nextDouble();
        input.nextLine();
        String place = input.nextLine();
        System.out.println(name + ", " + age + ", GPA " + gpa + ", likes " + place);
    }
}
`, out: 'Huda Saleh, 19, GPA 3.6, likes Wadi Hanifa', ar: 'نقرأ بالترتيب، وننظف السطر قبل nextLine.' },
        { type: 'memory', title: 'The boxes after each read', en: 'Text is drawn inside the boxes to keep the picture simple. Notice that the cleaning line makes no box.', frames: [
          { label: 'After <code>String name = input.nextLine();</code>', vars: [{ name: 'name', type: 'String', value: '"Huda Saleh"' }] },
          { label: 'After the <code>nextInt()</code> and <code>nextDouble()</code> lines', vars: [{ name: 'name', type: 'String', value: '"Huda Saleh"' }, { name: 'age', type: 'int', value: '19' }, { name: 'gpa', type: 'double', value: '3.6' }] },
          { label: 'After <code>input.nextLine();</code>: the leftover line break is thrown away, no new box', vars: [{ name: 'name', type: 'String', value: '"Huda Saleh"' }, { name: 'age', type: 'int', value: '19' }, { name: 'gpa', type: 'double', value: '3.6' }] },
          { label: 'After <code>String place = input.nextLine();</code>', vars: [{ name: 'name', type: 'String', value: '"Huda Saleh"' }, { name: 'age', type: 'int', value: '19' }, { name: 'gpa', type: 'double', value: '3.6' }, { name: 'place', type: 'String', value: '"Wadi Hanifa"' }] }
        ], ar: 'سطر التنظيف لا ينشئ متغيراً، بل يرمي بقية السطر.' },
        { type: 'h', en: 'Trap 5: + inside a sentence' },
        { type: 'p', en: 'After a String, every <code>+</code> joins. To add numbers inside a sentence, use brackets (Lesson 11).' },
        { type: 'check', q: 'What is printed?', code: J`
int a = 2;
int b = 3;
System.out.println("Total " + a + b);
`, options: ['Total 23', 'Total 5', 'Total 2 3', 'An error'], answer: 0, explain: '"Total " + 2 is "Total 2", then + 3 joins: "Total 23". Write <code>"Total " + (a + b)</code> for 5.', ar: 'Total 23' },
        { type: 'h', en: 'Your debugging checklist' },
        { type: 'analogy', title: 'A visit to the doctor', en: 'A doctor does not guess. She listens to the symptoms ("I have a fever"), thinks of the usual causes, and then gives the treatment. Debugging works the same way: look at what the program does wrong (the symptom), think of the usual cause, then fix it.' },
        { type: 'p', en: 'When a program gives a strange answer, find the symptom in the left column. The table tells you where to look.', ar: 'ابحث{{g:|ي}} عن العَرَض في الجدول لتعرف{{g:|ي}} السبب.' },
        { type: 'table', head: ['Symptom', 'Likely cause', 'Fix'], rows: [
          ['An average ends in <code>.0</code> and is too small', 'int / int', 'divide by <code>3.0</code> or cast first'],
          ['A sum prints as two numbers glued together (75, not 12)', '+ after text joins', 'brackets: <code>(a + b)</code>'],
          ['A text variable is empty', '<code>nextLine()</code> after <code>nextInt()</code>', 'an extra <code>input.nextLine();</code>'],
          ['<code>InputMismatchException</code>', 'wrong read method or wrong order', '<code>nextDouble()</code> for decimals; check the order'],
          ['A big number becomes negative', 'int overflow', '<code>long</code> and <code>L</code>'],
          ['<code>0.30000000000000004</code>', 'a double is a close copy', 'count halalas in an int'],
          ['<i>variable might not have been initialized</i>', 'an empty box', 'give it a value first'],
          ['<i>cannot assign a value to final variable</i>', 'a constant was changed', 'change the declaration instead']
        ] },
        { type: 'note', kind: 'exam', en: 'When you trace code in an exam, check every <code>/</code> (are both sides int?), every <code>+</code> (is there text on the left?), and every <code>nextLine()</code> (is there a leftover line break?).' }
      ],
      mistakes: [
        { title: 'Dividing ints to get an average', en: 'The decimals are lost before the value is stored.', code: 'double avg = (a + b + c) / 3;' },
        { title: 'Reading % as a percentage', en: '<code>%</code> is the remainder after division.', code: 'System.out.println(50 % 100);   // 50, not 0.5' },
        { title: 'nextLine() right after nextInt()', en: 'It reads only the leftover line break.', code: 'int id = input.nextInt();\nString name = input.nextLine();   // ""' },
        { title: 'Adding in a sentence without brackets', en: 'The numbers are joined, not added.', code: 'System.out.println("Sum: " + a + b);' }
      ],
      remember: ['Check every <code>/</code>: if both sides are int, the decimals are lost.', '<code>%</code> is the remainder: even/odd with <code>% 2</code>, last digit with <code>% 10</code>.', 'A cast cuts the decimals; an int cannot take a decimal without one.', 'Read input in order with the right method; clean the line before <code>nextLine()</code>.', 'Use brackets for arithmetic inside a sentence.', 'Trace with a table when unsure.'],
      rememberAr: 'انتبه{{g:|ي}} للقسمة الصحيحة، و% للباقي، والتحويل بين الأنواع، وتنظيف السطر، والأقواس داخل الجملة.',
      practice: [
        { t: 'output', q: 'Drill 1. What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(7 / 2);
        System.out.println(7 % 2);
        System.out.println(7 / 2.0);
    }
}
`, answer: '3\n1\n3.5', explain: 'Whole division 3, remainder 1, and with 2.0 the decimals stay: 3.5.' },
        { t: 'output', q: 'Drill 2. What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("" + 7 + 3);
        System.out.println(7 + 3 + "");
    }
}
`, answer: '73\n10', explain: 'Text first: everything joins (73). Numbers first: 7 + 3 = 10, then it becomes text.' },
        { t: 'output', q: 'Drill 3. What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 1234;
        System.out.println(n % 10);
        System.out.println(n / 10 % 10);
        System.out.println(n / 100);
    }
}
`, answer: '4\n3\n12', explain: 'Last digit 4; 1234 / 10 = 123 and 123 % 10 = 3; 1234 / 100 = 12.' },
        { t: 'bug', q: 'Drill 4. The marks are 80, 85 and 91. The average should be <code>85.33333333333333</code>, but the program prints <code>85.0</code>. Tap the line with the bug.', qAr: 'قسمة int على int.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int a = 80;
        int b = 85;
        int c = 91;
        double average = (a + b + c) / 3;
        System.out.println(average);
    }
}
`, bug: 6, fix: J`
public class Main {
    public static void main(String[] args) {
        int a = 80;
        int b = 85;
        int c = 91;
        double average = (a + b + c) / 3.0;
        System.out.println(average);
    }
}
`, hint: 'What are the types on both sides of the <code>/</code>?', explain: '256 / 3 is an int division and gives 85, which becomes 85.0. Divide by <code>3.0</code> so the division keeps its decimals.', explainAr: 'نقسم على 3.0.' },
        { t: 'bug', q: 'Drill 5. Two prices, 15 and 25. The program should print <code>Total: 40</code>, but it prints <code>Total: 1525</code>. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int first = 15;
        int second = 25;
        System.out.println("Total: " + first + second);
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        int first = 15;
        int second = 25;
        System.out.println("Total: " + (first + second));
    }
}
`, hint: 'After the text, what does + do?', explain: 'Left to right, "Total: " + 15 is text, so + 25 joins it: "Total: 1525". Brackets make the addition happen first.', explainAr: 'نضع الجمع بين قوسين.' },
        { t: 'bug', q: 'Drill 6. The user types <code>12.5</code>, Enter, <code>Mango juice</code>, Enter. The program should print <code>Mango juice: 12.5</code> but prints <code>: 12.5</code>. Tap the line with the bug.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double price = input.nextDouble();
        String item = input.nextLine();
        System.out.println(item + ": " + price);
    }
}
`, bug: 7, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double price = input.nextDouble();
        input.nextLine();
        String item = input.nextLine();
        System.out.println(item + ": " + price);
    }
}
`, hint: 'Does <code>nextDouble()</code> take the line break?', explain: '<code>nextDouble()</code> leaves the line break, just like <code>nextInt()</code>. Line 7 reads only that leftover, so <code>item</code> is empty. Clean the line with <code>input.nextLine();</code> first.', explainAr: 'nextDouble تترك السطر الجديد أيضاً.' },
        { t: 'output', q: 'Drill 7. What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int a = 5;
        double b = a / 2;
        double c = a / 2.0;
        int d = (int) 7.9;
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
    }
}
`, answer: '2.0\n2.5\n7', explain: 'a / 2 is int division (2), stored as 2.0. With 2.0: 2.5. The cast cuts 7.9 to 7.' },
        { t: 'bug', q: 'Drill 8. The program should print the remainder when 7 is divided by 2, which is <code>1</code> (odd). It prints <code>3</code>. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int n = 7;
        int remainder = n / 2;
        System.out.println(remainder);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int n = 7;
        int remainder = n % 2;
        System.out.println(remainder);
    }
}
`, hint: 'Which operator gives the remainder?', explain: '<code>/</code> gives the full groups (3). The remainder comes from <code>%</code>: 7 % 2 = 1.', explainAr: 'الباقي بالمعامل %.' },
        { t: 'output', q: 'Drill 9. The user types <code>4 2.5</code>. What is printed?', stdin: '4 2.5', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int count = input.nextInt();
        double price = input.nextDouble();
        System.out.println("Total: " + count * price);
        System.out.println("Count: " + (count + 1));
    }
}
`, answer: 'Total: 10.0\nCount: 5', explain: '<code>*</code> runs before the joining +: 4 * 2.5 = 10.0 (a double). The brackets add 4 + 1 = 5 before joining.' },
        { t: 'code', q: 'Read one whole number. Print two lines: <code>Last digit: D</code> and <code>Remainder by 2: R</code>. For <code>2589</code> print <code>Last digit: 9</code> and <code>Remainder by 2: 1</code>. No prompts.', qAr: 'استخدم{{g:|ي}} % 10 و % 2.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // read n, print the two lines
    }
}
`, tests: [{ stdin: '2589', expected: 'Last digit: 9\nRemainder by 2: 1' }, { stdin: '1440', expected: 'Last digit: 0\nRemainder by 2: 0' }], solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        System.out.println("Last digit: " + n % 10);
        System.out.println("Remainder by 2: " + n % 2);
    }
}
`, hint: '<code>%</code> runs before the joining <code>+</code>, so no brackets are needed (but they are allowed).', explain: '2589 % 10 = 9 and 2589 % 2 = 1 (odd). 1440 % 10 = 0 and 1440 % 2 = 0 (even).' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'What is a variable?', options: ['A named box that holds a value', 'A kind of error', 'A keyboard key', 'A comment'], answer: 0, explain: 'A variable stores a value under a name.' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(25 / 7 + 25 % 7);
    }
}
`, answer: '7', explain: '25 / 7 = 3 and 25 % 7 = 4.' },
    { t: 'mcq', q: 'Which identifier is <b>invalid</b>?', options: ['<code>$total</code>', '<code>_count</code>', '<code>final</code>', '<code>studentName2</code>'], answer: 2, explain: '<code>final</code> is a reserved word.' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int a = 8;
        int b = a-- - 2;
        System.out.println(a + " " + b);
    }
}
`, answer: '7 6', explain: 'Postfix uses the old 8: b = 6; then a is 7.' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int a = 4;
        int b = 6;
        System.out.println("" + a + b);
        System.out.println(a + b + "");
        System.out.println("Sum: " + (a + b));
    }
}
`, answer: '46\n10\nSum: 10', explain: 'Text first: the numbers are joined (46). Numbers first: 4 + 6 = 10, then joined. Brackets add first: Sum: 10.' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int max = 2147483647;
        System.out.println(max + 1);
    }
}
`, answer: '-2147483648', explain: 'Overflow wraps around.' },
    { t: 'mcq', q: 'The user types <code>3</code>, presses Enter, then types <code>Riyadh</code>. What is stored in <code>city</code>?', code: J`
int n = input.nextInt();
String city = input.nextLine();
`, options: ['"Riyadh"', '"3"', 'An empty string ""', 'A runtime error'], answer: 2, explain: 'nextInt leaves the line break, and nextLine reads just that.' },
    { t: 'mcq', q: 'Which line correctly declares a constant?', options: ['<code>constant double PI = 3.14159;</code>', '<code>final double PI = 3.14159;</code>', '<code>double final = 3.14159;</code>', '<code>static PI = 3.14159;</code>'], answer: 1, explain: 'Use final before the type.' },
    { t: 'bug', q: 'The marks are 70, 80 and 82. The average should be <code>77.33333333333333</code>, but the program prints <code>77.0</code>. Tap the line with the bug.',
      code: J`
public class Main {
    public static void main(String[] args) {
        int quiz = 70;
        int midterm = 80;
        int finalExam = 82;
        int total = quiz + midterm + finalExam;
        double average = total / 3;
        System.out.println(average);
    }
}
`, bug: 7, fix: J`
public class Main {
    public static void main(String[] args) {
        int quiz = 70;
        int midterm = 80;
        int finalExam = 82;
        int total = quiz + midterm + finalExam;
        double average = total / 3.0;
        System.out.println(average);
    }
}
`, explain: '<code>total / 3</code> is int / int, so 232 / 3 gives 77 and the decimals are lost before the value reaches the double box. Divide by <code>3.0</code> (or cast: <code>(double) total / 3</code>).' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(0.1 + 0.2);
        System.out.println(110 + 220);
    }
}
`, answer: '0.30000000000000004\n330', explain: '0.1 and 0.2 are stored as close copies, so a tiny error appears. Whole numbers (like prices in halalas) are exact.' },
    { t: 'bug', q: 'Two cups hold 200 ml and 350 ml. The program should swap the values and print <code>350 200</code>, but it prints <code>350 350</code>. Tap the line with the bug.',
      code: J`
public class Main {
    public static void main(String[] args) {
        int cupA = 200;
        int cupB = 350;
        int temp = cupA;
        cupA = cupB;
        cupB = cupA;
        System.out.println(cupA + " " + cupB);
    }
}
`, bug: 7, fix: J`
public class Main {
    public static void main(String[] args) {
        int cupA = 200;
        int cupB = 350;
        int temp = cupA;
        cupA = cupB;
        cupB = temp;
        System.out.println(cupA + " " + cupB);
    }
}
`, explain: 'The old value 200 was saved in <code>temp</code>, but line 7 copies <code>cupA</code>, which is already 350. The last step of a swap must use the saved value: <code>cupB = temp;</code>.' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 2589;
        System.out.println(n % 10);
        System.out.println(n / 10 % 10);
        System.out.println(n % 2);
    }
}
`, answer: '9\n8\n1', explain: 'The last digit is 9. 2589 / 10 = 258, and 258 % 10 = 8. 2589 % 2 = 1, so the number is odd.' }
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
    { code: J`(int) 3.99  is 3     (double) 7 / 2  is 3.5`, note: 'Casting: narrowing cuts decimals; cast before dividing' },
    { code: J`char grade = 'A';  boolean ok = true;  long big = 8000000000L;`, note: 'One character, true/false, and a very big whole number (with L)' },
    { code: J`int temp = a;  a = b;  b = temp;`, note: 'Swap two variables with a temporary variable' },
    { code: J`"" + 1 + 2  is "12"     1 + 2 + ""  is "3"`, note: 'Concatenation works left to right; text on the left makes + join' },
    { code: J`"Sum: " + (a + b)     "Left: " + (x - y)`, note: 'Brackets: calculate first, then join into the sentence' },
    { code: J`n % 2   n % 10   n / 10`, note: '0 = even / 1 = odd; the last digit; drop the last digit' },
    { code: J`halalas / 100   halalas % 100`, note: 'Riyals and the halalas left over (count money in int halalas)' },
    { code: J`
int hours = total / 3600;
int rest = total % 3600;
int minutes = rest / 60;
int seconds = rest % 60;
`, note: 'Seconds to hours, minutes and seconds: use the leftover for the next step' },
    { code: J`long ms = 30L * 24 * 60 * 60 * 1000;`, note: 'Put L inside the calculation to avoid int overflow' },
    { code: J`0.1 + 0.2   is 0.30000000000000004`, note: 'A double is a close copy, not always exact' }
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
    { term: 'Casting', ar: 'التحويل الصريح', def: 'Explicitly converting a value to another type, e.g. (int) 3.7.' },
    { term: 'Truncation', ar: 'حذف الكسر', def: 'Cutting off the decimal part without rounding, as (int) 9.7 gives 9.' },
    { term: 'Memory (RAM)', ar: 'الذاكرة', def: 'The part of the computer where variables and objects are kept while a program runs.' },
    { term: 'Bit', ar: 'بت', def: 'The smallest piece of memory; it holds 0 or 1. Each type has a fixed number of bits.' },
    { term: 'Trace table', ar: 'جدول التتبع', def: 'A table that shows the value of every variable after each line of a program.' },
    { term: 'Temporary variable', ar: 'متغير مؤقت', def: 'A variable that keeps a value safe for a short time, for example while swapping two values.' },
    { term: 'Swap', ar: 'تبديل', def: 'Exchanging the values of two variables, usually with a temporary variable.' },
    { term: 'Object', ar: 'كائن', def: 'A thing in memory (the heap), such as a String or a Scanner. A variable reaches it through a reference.' },
    { term: 'Reference', ar: 'مرجع', def: 'An arrow from a variable to an object. A String variable holds a reference, not the text itself.' },
    { term: 'Token', ar: 'وحدة إدخال', def: 'One piece of input between spaces or line breaks; each Scanner read takes the next token.' },
    { term: 'Empty String', ar: 'نص فارغ', def: 'The String "" with no characters, for example what nextLine() returns after nextInt().' },
    { term: 'Concatenation', ar: 'ربط النصوص', def: 'Joining Strings with +. A number joined to a String becomes text.' },
    { term: 'long literal', ar: 'قيمة long حرفية', def: 'A whole number written with L at the end, such as 3000000000L.' },
    { term: 'Floating-point error', ar: 'خطأ الأعداد العشرية', def: 'The tiny error in double values, for example 0.1 + 0.2 printing 0.30000000000000004.' },
    { term: 'Input → process → output (IPO)', ar: 'إدخال، معالجة، إخراج', def: 'A plan for a program: what it reads, what it calculates, and what it prints.' },
    { term: 'Bug / debugging', ar: 'خطأ برمجي / تصحيح الأخطاء', def: 'A bug is a mistake in a program; debugging is finding and fixing it.' }
  ]
});
