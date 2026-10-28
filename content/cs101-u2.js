JP.unit({
  course: 'cs101',
  n: 2,
  title: 'Input, Variables and Data Types',
  titleAr: 'الإدخال والمتغيرات وأنواع البيانات',
  intro: 'Real programs work with data that changes: prices, grades, ages, balances. In this unit you store values in variables and constants, choose the right primitive data type, read input from the keyboard with Scanner, and compute results with arithmetic operators. You will also learn the shortcut operators (++, +=) and how Java converts between int and double, including the integer-division trap.',
  introAr: 'البرامج الحقيقية تتعامل مع بيانات متغيرة. في هذه الوحدة تخزن القيم في متغيرات وثوابت، وتختار نوع البيانات المناسب، وتقرأ المدخلات باستخدام Scanner، وتحسب النتائج بالعمليات الحسابية، وتتعلم التحويل بين الأنواع.',
  lessons: [
    {
      title: 'Variables, identifiers and constants',
      titleAr: 'المتغيرات والمعرفات والثوابت',
      minutes: 50,
      body: [
        { type: 'h', en: 'What is a variable?' },
        { type: 'p', en: 'A <b>variable</b> is a named location in memory that holds a value. Before using a variable you must <b>declare</b> it by giving its <b>data type</b> and its name. You can give it a first value (<b>initialize</b> it) in the same statement.',
          ar: 'المتغير مكان مسمى في الذاكرة يحمل قيمة، ويجب تعريفه بنوع واسم قبل استخدامه.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int students = 30;          // declare and initialize
        double price = 12.5;
        String course = "CS101";
        System.out.println(course + " has " + students + " students");
        System.out.println("Book price: " + price);
        students = 32;              // assign a new value
        System.out.println("Now: " + students);
    }
}
`, out: J`
CS101 has 30 students
Book price: 12.5
Now: 32
` },
        { type: 'h', en: 'Assignment statements' },
        { type: 'p', en: 'The <b>assignment operator</b> <code>=</code> means "store the value on the right into the variable on the left". The right side is evaluated first, so <code>count = count + 1;</code> is perfectly valid: it takes the old value, adds 1, and stores the result. The left side must be a variable, so <code>10 = x;</code> does not compile.',
          ar: 'العلامة = تعني إسناد القيمة وليست مساواة رياضية؛ يُحسب الطرف الأيمن أولاً ثم يُخزن في المتغير الأيسر.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = a * 2;     // b is 20
        a = a + 5;         // a is 15
        b = a + b;         // b is 15 + 20 = 35
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}
`, out: J`
a = 15
b = 35
` },
        { type: 'note', kind: 'warn', en: 'A local variable must have a value before it is used. <code>int total; System.out.println(total);</code> gives the compile error <i>variable total might not have been initialized</i>. Also, declare each variable only once in the same block.' },
        { type: 'h', en: 'Identifiers: rules and conventions' },
        { type: 'list', items: [
          'An <b>identifier</b> (a name for a variable, constant, method or class) may contain letters, digits, the underscore <code>_</code> and the dollar sign <code>$</code>.',
          'It must <b>not start with a digit</b>.',
          'It cannot be a <b>reserved word</b> such as <code>int</code>, <code>class</code>, <code>public</code>, <code>final</code> or <code>if</code>.',
          'It is case-sensitive: <code>total</code>, <code>Total</code> and <code>TOTAL</code> are three different names.'
        ] },
        { type: 'table', head: ['Name', 'Valid?', 'Reason'], rows: [
          ['<code>totalPrice</code>', 'Yes', 'Letters only, camelCase'],
          ['<code>grade2</code>', 'Yes', 'A digit is fine after the first character'],
          ['<code>_count</code>, <code>$amount</code>', 'Yes', 'May start with _ or $ (allowed, but not recommended)'],
          ['<code>2ndPlace</code>', 'No', 'Starts with a digit'],
          ['<code>my-score</code>', 'No', 'The hyphen is the minus operator'],
          ['<code>class</code>', 'No', 'Reserved word']
        ] },
        { type: 'list', items: [
          'Variables and methods: <b>camelCase</b>, starting lowercase: <code>studentName</code>, <code>accountBalance</code>.',
          'Classes: <b>PascalCase</b>, starting uppercase: <code>BankAccount</code>, <code>Main</code>.',
          'Constants: <b>ALL_CAPS</b> with underscores: <code>MAX_STUDENTS</code>, <code>VAT_RATE</code>.',
          'Choose descriptive names: <code>radius</code> is better than <code>r</code>.'
        ], ar: 'المتغيرات بأسلوب camelCase، والأصناف تبدأ بحرف كبير، والثوابت بأحرف كبيرة مع _' },
        { type: 'h', en: 'Named constants with final' },
        { type: 'p', en: 'A <b>constant</b> is a value that never changes while the program runs, such as the number of seconds in a minute. Declare it with the keyword <code>final</code>. Constants make programs easier to read and to update: change the value in one place and every use changes.',
          ar: 'الثابت يُعرّف بالكلمة final ولا يمكن تغيير قيمته بعد إسنادها.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        final int SECONDS_PER_MINUTE = 60;
        final double DISCOUNT_RATE = 0.25;
        int minutes = 5;
        System.out.println(minutes + " minutes = " + minutes * SECONDS_PER_MINUTE + " seconds");
        double price = 80.0;
        System.out.println("Discount: " + price * DISCOUNT_RATE);
        // DISCOUNT_RATE = 0.30;   // compile error: cannot assign a value to final variable
    }
}
`, out: J`
5 minutes = 300 seconds
Discount: 20.0
` },
        { type: 'note', kind: 'exam', en: 'Assigning a new value to a <code>final</code> variable is a <b>compile</b> error, not a runtime error.' }
      ],
      practice: [
        { t: 'mcq', q: 'Which of these is a valid Java identifier?',
          options: ['<code>totalPrice</code>', '<code>2ndPlace</code>', '<code>class</code>', '<code>my-score</code>'], answer: 0,
          explain: '<code>2ndPlace</code> starts with a digit, <code>class</code> is a reserved word, and <code>my-score</code> contains a hyphen.' },
        { t: 'output', q: 'What is printed?', code: J`
int x = 4;
int y = x + 3;
x = y * 2;
y = y - x;
System.out.println(x + " " + y);
`, answer: '14 -7',
          explain: 'y = 7, then x = 7 * 2 = 14, then y = 7 - 14 = -7. Each assignment uses the current values.' },
        { t: 'mcq', q: 'Following Java naming conventions, which name is best for a constant holding the highest possible grade?',
          options: ['<code>maxGrade</code>', '<code>MaxGrade</code>', '<code>MAX_GRADE</code>', '<code>max_grade</code>'], answer: 2,
          explain: 'Constants are written in capital letters with underscores between words.' },
        { t: 'fill', q: 'Complete the code: make <code>DAYS_PER_WEEK</code> a constant and compute the number of days in 3 weeks.', code: J`
___ int DAYS_PER_WEEK = 7;
int weeks = 3;
int days = weeks ___ DAYS_PER_WEEK;
`, answers: ['final', '*'],
          explain: '<code>final</code> makes the variable a constant, and the number of days is weeks multiplied by 7.' },
        { t: 'mcq', q: 'Which statement is a valid assignment (assume <code>int x, y;</code> are declared)?',
          options: ['<code>x + 1 = y;</code>', '<code>5 = x;</code>', '<code>x = x + 1;</code>', '<code>int = 5;</code>'], answer: 2,
          explain: 'The left side of <code>=</code> must be a single variable. <code>x = x + 1;</code> adds 1 to the old value of x.' }
      ]
    },
    {
      title: 'Primitive data types and arithmetic',
      titleAr: 'أنواع البيانات الأولية والعمليات الحسابية',
      minutes: 55,
      body: [
        { type: 'h', en: 'The eight primitive types' },
        { type: 'p', en: 'Java has eight built-in <b>primitive data types</b>. The type decides how much memory a variable uses and which values it can hold. For whole numbers you will mostly use <code>int</code>; for numbers with a decimal point, <code>double</code>.',
          ar: 'للأعداد الصحيحة نستخدم int غالباً، وللأعداد العشرية double.' },
        { type: 'table', head: ['Type', 'Size', 'Values', 'Example'], rows: [
          ['<code>byte</code>', '8 bits', '-128 to 127', '<code>byte level = 5;</code>'],
          ['<code>short</code>', '16 bits', '-32,768 to 32,767', '<code>short year = 2025;</code>'],
          ['<code>int</code>', '32 bits', '-2,147,483,648 to 2,147,483,647', '<code>int students = 450;</code>'],
          ['<code>long</code>', '64 bits', 'about -9.2 &times; 10<sup>18</sup> to 9.2 &times; 10<sup>18</sup>', '<code>long population = 8000000000L;</code>'],
          ['<code>float</code>', '32 bits', 'about 7 significant digits', '<code>float rate = 2.5F;</code>'],
          ['<code>double</code>', '64 bits', 'about 15 to 17 significant digits', '<code>double gpa = 3.75;</code>'],
          ['<code>char</code>', '16 bits', 'one Unicode character', '<code>char grade = \'A\';</code>'],
          ['<code>boolean</code>', '1 bit of information', '<code>true</code> or <code>false</code>', '<code>boolean passed = true;</code>']
        ] },
        { type: 'p', en: 'A whole-number literal such as <code>25</code> is an <code>int</code>; a literal with a decimal point such as <code>2.5</code> is a <code>double</code>. <code>String</code> is not a primitive type: it is a class, which is why it starts with a capital S.' },
        { type: 'p', en: 'If a calculation goes past the largest value of a type, the result wraps around to the other end. This is called <b>overflow</b>, and Java does not warn you.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int big = 2147483647;      // largest int
        big = big + 1;
        System.out.println(big);
    }
}
`, out: '-2147483648' },
        { type: 'h', en: 'Arithmetic operators' },
        { type: 'table', head: ['Operator', 'Meaning', 'Example', 'Result'], rows: [
          ['<code>+</code>', 'Addition', '<code>34 + 1</code>', '35'],
          ['<code>-</code>', 'Subtraction', '<code>34.0 - 0.5</code>', '33.5'],
          ['<code>*</code>', 'Multiplication', '<code>300 * 30</code>', '9000'],
          ['<code>/</code>', 'Division', '<code>17 / 5</code>', '3 (both int)'],
          ['<code>%</code>', 'Remainder (modulus)', '<code>17 % 5</code>', '2']
        ] },
        { type: 'p', en: 'When <b>both</b> operands of <code>/</code> are integers, the result is an integer: the fractional part is simply dropped (not rounded). If at least one operand is a <code>double</code>, the result is a <code>double</code>. The remainder <code>%</code> gives what is left after integer division; its sign follows the left operand.',
          ar: 'قسمة عدد صحيح على عدد صحيح تعطي عدداً صحيحاً وتُهمل الكسور، و % تعطي باقي القسمة.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(17 / 5);
        System.out.println(17 % 5);
        System.out.println(17.0 / 5);
        System.out.println(-17 % 5);
        System.out.println(20 % 4);
    }
}
`, out: J`
3
2
3.4
-2
0
` },
        { type: 'p', en: 'Integer division and remainder work together for conversions, such as splitting seconds into minutes and seconds, or extracting digits from a number.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int totalSeconds = 500;
        int minutes = totalSeconds / 60;
        int seconds = totalSeconds % 60;
        System.out.println(totalSeconds + " seconds = " + minutes + " min " + seconds + " sec");
    }
}
`, out: '500 seconds = 8 min 20 sec' },
        { type: 'h', en: 'Operator precedence' },
        { type: 'table', head: ['Order', 'Operators', 'Associativity'], rows: [
          ['1 (first)', '<code>( )</code> parentheses', 'innermost first'],
          ['2', 'unary <code>+</code> <code>-</code>, casts', 'right to left'],
          ['3', '<code>*</code> <code>/</code> <code>%</code>', 'left to right'],
          ['4', '<code>+</code> <code>-</code>', 'left to right'],
          ['5 (last)', '<code>=</code> <code>+=</code> <code>-=</code> ...', 'right to left']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(2 + 3 * 4);
        System.out.println((2 + 3) * 4);
        System.out.println(20 - 6 - 4);
        System.out.println(20 / 4 * 2);
        System.out.println(7 + 10 % 3);
    }
}
`, out: J`
14
20
10
10
8
` },
        { type: 'note', kind: 'exam', en: 'Integer division inside a formula is a classic logic error. <code>celsius = 5 / 9 * (f - 32);</code> always gives 0 because <code>5 / 9</code> is 0. Write <code>5.0 / 9</code> instead.',
          ar: 'انتبه: 5 / 9 تساوي صفراً لأن الطرفين صحيحان؛ اكتب 5.0 / 9.' }
      ],
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(23 / 4);
System.out.println(23 % 4);
System.out.println(23 / 4.0);
`, answer: J`
5
3
5.75
`, explain: '23 / 4 with two ints is 5 (the .75 is dropped). The remainder is 23 - 20 = 3. With 4.0 the division is done in double, giving 5.75.' },
        { t: 'mcq', q: 'What is the range of the <code>byte</code> type?',
          options: ['0 to 255', '-128 to 127', '-32,768 to 32,767', '-256 to 255'], answer: 1,
          explain: 'A byte has 8 bits, which give 256 values from -128 to 127.' },
        { t: 'output', q: 'Apply operator precedence. What is printed?', code: J`
System.out.println(10 + 6 / 4 * 3 - 1);
System.out.println((10 + 6) / (4 * 2));
`, answer: J`
12
2
`, explain: 'First line: 6 / 4 = 1 (integer division), 1 * 3 = 3, then 10 + 3 - 1 = 12. Second line: 16 / 8 = 2.' },
        { t: 'fill', q: 'Split <code>347</code> into its last digit (7) and the remaining number (34).', code: J`
int number = 347;
int lastDigit = number ___ 10;
int rest = number ___ 10;
System.out.println(lastDigit + " " + rest);   // 7 34
`, answers: ['%', '/'],
          explain: '<code>347 % 10</code> is the remainder 7; <code>347 / 10</code> is 34 because integer division drops the fraction.' },
        { t: 'mcq', q: 'What is the value of <code>-7 % 3</code> in Java?',
          options: ['1', '-1', '2', '-2'], answer: 1,
          explain: '-7 / 3 is -2 (truncated toward zero), and -7 - (-2 * 3) = -1. The sign of the result follows the left operand.' },
        { t: 'mcq', q: 'Which type is the most suitable for storing a product price such as 19.99?',
          options: ['<code>int</code>', '<code>double</code>', '<code>char</code>', '<code>boolean</code>'], answer: 1,
          explain: 'Prices have a fractional part, so a floating-point type such as <code>double</code> is needed.' }
      ]
    },
    {
      title: 'Reading input with Scanner',
      titleAr: 'قراءة المدخلات باستخدام Scanner',
      minutes: 50,
      body: [
        { type: 'h', en: 'Creating a Scanner' },
        { type: 'p', en: 'To read from the keyboard, import the <code>Scanner</code> class at the top of the file and create one Scanner object connected to <code>System.in</code> (the standard input). Then call its methods to read values.',
          ar: 'نستورد Scanner ثم ننشئ كائناً مرتبطاً بـ System.in ونستدعي دواله للقراءة.' },
        { type: 'code', code: J`
import java.util.Scanner;                    // before the class

Scanner input = new Scanner(System.in);      // inside main
` },
        { type: 'table', head: ['Method', 'Reads', 'Example input', 'Value'], rows: [
          ['<code>nextInt()</code>', 'an <code>int</code>', '<code>42</code>', '42'],
          ['<code>nextDouble()</code>', 'a <code>double</code>', '<code>3.75</code>', '3.75'],
          ['<code>next()</code>', 'one word (stops at a space)', '<code>Sara Ali</code>', '"Sara"'],
          ['<code>nextLine()</code>', 'the rest of the line, spaces included', '<code>Sara Ali</code>', '"Sara Ali"'],
          ['<code>nextLong()</code>, <code>nextBoolean()</code>', 'a <code>long</code>, a <code>boolean</code>', '<code>true</code>', 'true']
        ] },
        { type: 'p', en: 'Values can be typed on one line separated by spaces or on separate lines; <code>nextInt</code>, <code>nextDouble</code> and <code>next</code> skip the whitespace between them. Press Run to try this program with the sample input <code>Sara 19 3.5</code>.' },
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
        { type: 'note', kind: 'tip', en: 'In NetBeans, print a <b>prompt</b> before each read so the user knows what to type. In the auto-checked exercises on this site, do <b>not</b> print prompts: only the requested output is compared.' },
        { type: 'h', en: 'next() vs nextLine()' },
        { type: 'code', run: true, stdin: 'Computer Science\nRiyadh Saudi Arabia', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String major = input.nextLine();   // whole first line
        String city = input.next();        // only the first word of line 2
        System.out.println("Major: " + major);
        System.out.println("City: " + city);
    }
}
`, out: J`
Major: Computer Science
City: Riyadh
` },
        { type: 'h', en: 'The nextLine-after-nextInt trap' },
        { type: 'p', en: 'When the user types <code>20</code> and presses Enter, the input contains <code>20</code> followed by a line break. <code>nextInt()</code> reads the 20 but <b>leaves the line break</b> behind. A following <code>nextLine()</code> reads up to that line break immediately and returns an <b>empty string</b>.',
          ar: 'بعد nextInt يبقى سطر جديد في المدخلات، فتقرأ nextLine التالية نصاً فارغاً. الحل: استدعاء nextLine إضافية لاستهلاكه.' },
        { type: 'code', run: true, stdin: '20\nSara Ali', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        String name = input.nextLine();     // reads the leftover line break!
        System.out.println("Age: " + age);
        System.out.println("Name: [" + name + "]");
    }
}
`, out: J`
Age: 20
Name: []
` },
        { type: 'p', en: 'The fix: call <code>input.nextLine();</code> once, without storing the result, to consume the rest of the number line.' },
        { type: 'code', run: true, stdin: '20\nSara Ali', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        input.nextLine();                   // consume the leftover line break
        String name = input.nextLine();
        System.out.println("Age: " + age);
        System.out.println("Name: [" + name + "]");
    }
}
`, out: J`
Age: 20
Name: [Sara Ali]
` },
        { type: 'note', kind: 'exam', en: 'Exams love this trap: after <code>nextInt()</code> or <code>nextDouble()</code>, a <code>nextLine()</code> returns an empty string. Also remember that typing <code>abc</code> when <code>nextInt()</code> expects a number causes a runtime error (<code>InputMismatchException</code>).' }
      ],
      practice: [
        { t: 'mcq', q: 'The user types <code>Ali Hassan</code>. Which method reads the full name into one String?',
          options: ['<code>next()</code>', '<code>nextLine()</code>', '<code>nextInt()</code>', '<code>nextName()</code>'], answer: 1,
          explain: '<code>next()</code> stops at the first space and would return only "Ali". <code>nextLine()</code> reads the whole line.' },
        { t: 'output', q: 'The user types <code>17 5</code>. What is printed?', code: J`
Scanner input = new Scanner(System.in);
int a = input.nextInt();
int b = input.nextInt();
System.out.println(a + b);
System.out.println(a / b);
System.out.println(a % b);
`, answer: J`
22
3
2
`, explain: 'a = 17 and b = 5. The sum is 22, integer division gives 3, and the remainder is 2.' },
        { t: 'output', q: 'The user types <code>21</code>, presses Enter, then types <code>Noura Saleh</code> and presses Enter. What is printed?', code: J`
Scanner input = new Scanner(System.in);
int age = input.nextInt();
String name = input.nextLine();
System.out.println("Name=" + name + ";");
System.out.println("Age=" + age);
`, answer: J`
Name=;
Age=21
`, explain: '<code>nextInt()</code> leaves the line break after 21, so <code>nextLine()</code> returns an empty string. The name is never read.' },
        { t: 'fill', q: 'Complete the code that reads a price with a decimal point.', code: J`
import java.util.___;

Scanner input = new Scanner(System.___);
double price = input.___();
`, answers: ['Scanner', 'in', 'nextDouble'],
          explain: 'Import <code>java.util.Scanner</code>, connect it to <code>System.in</code>, and use <code>nextDouble()</code> for a double value.' },
        { t: 'code', q: 'Read a whole number of minutes and print it as hours and minutes in the form <code>M minutes = H h R min</code>. For input <code>135</code> print <code>135 minutes = 2 h 15 min</code>. Do not print any prompt.',
          qAr: 'اقرأ عدد الدقائق واطبعه بالساعات والدقائق. استخدم / و %.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // read minutes, compute hours and remaining minutes
    }
}
`,
          tests: [
            { stdin: '135', expected: '135 minutes = 2 h 15 min' },
            { stdin: '59', expected: '59 minutes = 0 h 59 min' },
            { stdin: '600', expected: '600 minutes = 10 h 0 min' }
          ],
          solution: J`
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
`,
          hint: 'Hours are <code>minutes / 60</code>; the minutes left over are <code>minutes % 60</code>.',
          explain: 'Integer division counts the full hours and the remainder gives the minutes that do not make a full hour.' },
        { t: 'mcq', q: 'Which statement must appear before <code>public class Main</code> to use Scanner?',
          options: ['<code>import java.util.Scanner;</code>', '<code>import java.io.Scanner;</code>', '<code>include Scanner;</code>', '<code>Scanner input = new Scanner(System.in);</code>'], answer: 0,
          explain: 'Scanner lives in the <code>java.util</code> package. The object itself is created inside <code>main</code>.' }
      ]
    },
    {
      title: 'Shortcut operators and type casting',
      titleAr: 'العمليات المختصرة وتحويل الأنواع',
      minutes: 50,
      body: [
        { type: 'h', en: 'Increment and decrement' },
        { type: 'p', en: '<code>++</code> adds 1 to a variable and <code>--</code> subtracts 1. Each has two forms. The <b>prefix</b> form (<code>++x</code>) changes the variable first and then uses the new value. The <b>postfix</b> form (<code>x++</code>) uses the old value in the expression and then changes the variable.',
          ar: 'الصيغة القبلية ++x تزيد ثم تستخدم القيمة، والبعدية x++ تستخدم القيمة القديمة ثم تزيد.' },
        { type: 'table', head: ['Expression', 'Name', 'Value of the expression', 'Effect on x'], rows: [
          ['<code>++x</code>', 'pre-increment', 'new value (x + 1)', 'x increases by 1'],
          ['<code>x++</code>', 'post-increment', 'old value (x)', 'x increases by 1'],
          ['<code>--x</code>', 'pre-decrement', 'new value (x - 1)', 'x decreases by 1'],
          ['<code>x--</code>', 'post-decrement', 'old value (x)', 'x decreases by 1']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = a++;   // b gets 5, then a becomes 6
        System.out.println("a = " + a + ", b = " + b);
        int c = ++a;   // a becomes 7, then c gets 7
        System.out.println("a = " + a + ", c = " + c);
        int d = a--;   // d gets 7, then a becomes 6
        System.out.println("a = " + a + ", d = " + d);
    }
}
`, out: J`
a = 6, b = 5
a = 7, c = 7
a = 6, d = 7
` },
        { type: 'note', kind: 'exam', en: 'When <code>count++;</code> or <code>++count;</code> stands alone as a statement, both do the same thing. The difference only matters when the expression is used inside a larger expression or assignment.' },
        { type: 'h', en: 'Compound assignment operators' },
        { type: 'table', head: ['Operator', 'Example', 'Same as'], rows: [
          ['<code>+=</code>', '<code>total += 5;</code>', '<code>total = total + 5;</code>'],
          ['<code>-=</code>', '<code>total -= 5;</code>', '<code>total = total - 5;</code>'],
          ['<code>*=</code>', '<code>total *= 5;</code>', '<code>total = total * 5;</code>'],
          ['<code>/=</code>', '<code>total /= 5;</code>', '<code>total = total / 5;</code>'],
          ['<code>%=</code>', '<code>total %= 5;</code>', '<code>total = total % 5;</code>']
        ] },
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
        { type: 'h', en: 'Type conversion and casting' },
        { type: 'p', en: '<b>Widening</b> conversion (to a type with a larger range) happens automatically: <code>byte</code> &rarr; <code>short</code> &rarr; <code>int</code> &rarr; <code>long</code> &rarr; <code>float</code> &rarr; <code>double</code>. So <code>double d = 5;</code> stores 5.0, and in <code>7 / 2.0</code> the 7 is widened to 7.0 before dividing.' },
        { type: 'p', en: '<b>Narrowing</b> conversion (to a smaller range) can lose information, so Java requires an explicit <b>cast</b>: write the target type in parentheses, as in <code>(int) 3.99</code>. Casting a double to an int <b>truncates</b>: it drops the fraction, giving 3, not 4.',
          ar: 'التوسيع تلقائي، أما التضييق فيحتاج تحويلاً صريحاً مثل (int) ويحذف الكسر دون تقريب.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int total = 7;
        int count = 2;
        System.out.println(total / count);            // int division
        System.out.println(total / (double) count);   // 7 / 2.0
        System.out.println((double) total / count);   // 7.0 / 2
        System.out.println((double) (total / count)); // (double) 3
        double price = 19.99;
        int riyals = (int) price;
        System.out.println(riyals);
    }
}
`, out: J`
3
3.5
3.5
3.0
19
` },
        { type: 'note', kind: 'warn', en: '<code>int x = 5.5;</code> does not compile (<i>possible lossy conversion from double to int</i>). Also note that a cast applies only to the value right after it: <code>(double) (total / count)</code> divides as integers first and then converts 3 to 3.0.' },
        { type: 'p', en: 'Compound assignment includes a hidden cast. If <code>n</code> is an <code>int</code> holding 10, then <code>n += 2.5;</code> compiles and means <code>n = (int) (n + 2.5);</code>, so n becomes 12. Casting never changes the original variable; it produces a new value.' }
      ],
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
int x = 3;
int y = x++ + ++x;
System.out.println(x);
System.out.println(y);
`, answer: J`
5
8
`, explain: '<code>x++</code> gives 3 and makes x 4. Then <code>++x</code> makes x 5 and gives 5. So y = 3 + 5 = 8 and x ends at 5.' },
        { t: 'output', q: 'What is printed?', code: J`
int n = 20;
n -= 4;
n /= 3;
n *= 2;
n %= 7;
System.out.println(n);
`, answer: '3',
          explain: '20 - 4 = 16; 16 / 3 = 5 (integer division); 5 * 2 = 10; 10 % 7 = 3.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(9 / 2);
System.out.println(9 / 2.0);
System.out.println((int) 9.7);
System.out.println((double) 9 / 2);
`, answer: J`
4
4.5
9
4.5
`, explain: '9 / 2 is integer division (4). With 2.0 the result is 4.5. <code>(int) 9.7</code> truncates to 9. The cast applies to 9 first, so 9.0 / 2 = 4.5.' },
        { t: 'mcq', q: 'Which declaration does <b>not</b> compile without an explicit cast?',
          options: ['<code>double d = 10;</code>', '<code>long n = 10;</code>', '<code>int i = 10.0;</code>', '<code>float f = 10;</code>'], answer: 2,
          explain: '<code>10.0</code> is a double; storing it in an int is a narrowing conversion and needs <code>(int)</code>. The other three are widening conversions.' },
        { t: 'fill', q: 'Complete the code using the comments.', code: J`
int count = 0;
count___;                     // count becomes 1
double avg = (___) 17 / 2;    // avg is 8.5
`, answers: [['++', '+= 1', '+=1'], 'double'],
          explain: '<code>count++</code> adds one. Casting 17 to double before dividing gives 17.0 / 2 = 8.5 instead of the integer 8.' },
        { t: 'mcq', q: 'After these statements, what are the values of k and m?', code: J`
int k = 5;
int m = --k * 2;
`, options: ['k = 4, m = 8', 'k = 4, m = 10', 'k = 5, m = 8', 'k = 5, m = 10'], answer: 0,
          explain: 'Pre-decrement changes k to 4 first, and the expression uses 4, so m = 4 * 2 = 8.' }
      ]
    }
  ],
  quiz: [
    { t: 'output', q: 'What is printed?', code: J`
System.out.println(25 / 7 + 25 % 7);
`, answer: '7',
      explain: '25 / 7 = 3 and 25 % 7 = 4, so the sum is 7.' },
    { t: 'mcq', q: 'Which identifier is <b>invalid</b>?',
      options: ['<code>$total</code>', '<code>_count</code>', '<code>final</code>', '<code>studentName2</code>'], answer: 2,
      explain: '<code>final</code> is a reserved word. Names may start with <code>$</code> or <code>_</code> and may contain digits after the first character.' },
    { t: 'output', q: 'What is printed?', code: J`
int a = 8;
int b = a-- - 2;
System.out.println(a + " " + b);
`, answer: '7 6',
      explain: 'Post-decrement uses the old value 8, so b = 8 - 2 = 6; afterwards a is 7.' },
    { t: 'output', q: 'What is printed?', code: J`
System.out.println(1 / 2 * 10.0);
System.out.println(1.0 / 2 * 10);
`, answer: J`
0.0
5.0
`, explain: 'In the first line 1 / 2 is integer division (0), and 0 * 10.0 = 0.0. In the second line 1.0 / 2 = 0.5, and 0.5 * 10 = 5.0.' },
    { t: 'output', q: 'What is printed?', code: J`
int max = 2147483647;
System.out.println(max + 1);
`, answer: '-2147483648',
      explain: '2147483647 is the largest int. Adding 1 overflows and wraps around to the smallest int.' },
    { t: 'mcq', q: 'The user types <code>3</code>, presses Enter, then types <code>Riyadh</code>. What is stored in <code>city</code>?', code: J`
int n = input.nextInt();
String city = input.nextLine();
`, options: ['"Riyadh"', '"3"', 'An empty string ""', 'A runtime error occurs'], answer: 2,
      explain: '<code>nextInt()</code> leaves the line break after 3, and <code>nextLine()</code> reads just that empty remainder.' },
    { t: 'mcq', q: 'Which line correctly declares a constant?',
      options: ['<code>constant double PI = 3.14159;</code>', '<code>final double PI = 3.14159;</code>', '<code>double final = 3.14159;</code>', '<code>static PI = 3.14159;</code>'], answer: 1,
      explain: 'Constants use the keyword <code>final</code> before the type.' },
    { t: 'output', q: 'What is printed?', code: J`
double x = 7.9;
int y = (int) x;
System.out.println(y + 1);
System.out.println(x);
`, answer: J`
8
7.9
`, explain: 'The cast truncates 7.9 to 7, so y + 1 = 8. Casting does not change x, which is still 7.9.' },
    { t: 'mcq', q: 'What is the value of <code>2 + 3 * 4 % 5</code>?',
      options: ['0', '4', '14', '5'], answer: 1,
      explain: '<code>*</code> and <code>%</code> come before <code>+</code> and go left to right: 3 * 4 = 12, 12 % 5 = 2, then 2 + 2 = 4.' },
    { t: 'mcq', q: 'Which type should store a single letter grade such as <code>\'A\'</code>?',
      options: ['<code>String</code> only', '<code>char</code>', '<code>int</code>', '<code>boolean</code>'], answer: 1,
      explain: 'A <code>char</code> holds exactly one character, written in single quotes.' }
  ],
  lab: {
    t: 'code',
    q: 'Mini project: <b>Grade report</b>. The first input line is the student full name (it may contain spaces). The second line has three whole-number marks: quiz, midterm and final. Print the name, the total of the three marks, and the average as a <code>double</code> (for example <code>90.0</code>), exactly in this format:<br><code>Student: Sara Ali</code><br><code>Total: 270</code><br><code>Average: 90.0</code><br>Do not print any prompts.',
    qAr: 'اقرأ الاسم كاملاً ثم ثلاث درجات، واطبع المجموع والمتوسط كعدد عشري.',
    starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // 1. read the full name
        // 2. read three marks
        // 3. print the report
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
    hint: 'Read the name with <code>nextLine()</code> first (no trap, because nothing was read before it). Divide by <code>3.0</code>, not 3, to get a double. Note that <code>final</code> cannot be a variable name.',
    explain: 'Reading the name before the numbers avoids the nextLine trap. Dividing the int total by 3.0 produces a double, so the average prints with a decimal point.'
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
    { code: J`17 / 5 is 3     17 % 5 is 2     17.0 / 5 is 3.4`, note: 'int division truncates; % is the remainder' },
    { code: J`x++  ++x  x--  --x`, note: 'Postfix uses the old value; prefix uses the new value' },
    { code: J`x += 3;  x -= 3;  x *= 3;  x /= 3;  x %= 3;`, note: 'Compound assignment' },
    { code: J`(int) 3.99  is 3     (double) 7 / 2  is 3.5`, note: 'Casting: narrowing truncates; cast before dividing' }
  ],
  glossary: [
    { term: 'Variable', ar: 'متغير', def: 'A named memory location whose value can change.' },
    { term: 'Declaration', ar: 'تعريف/إعلان', def: 'A statement that introduces a variable with its type and name.' },
    { term: 'Initialization', ar: 'تهيئة', def: 'Giving a variable its first value.' },
    { term: 'Assignment', ar: 'إسناد', def: 'Storing a value in a variable with the = operator.' },
    { term: 'Identifier', ar: 'معرّف', def: 'A name for a variable, constant, method or class.' },
    { term: 'Reserved word', ar: 'كلمة محجوزة', def: 'A word with special meaning in Java, such as int or class, that cannot be used as a name.' },
    { term: 'Constant', ar: 'ثابت', def: 'A variable declared final whose value cannot change.' },
    { term: 'Primitive data type', ar: 'نوع بيانات أولي', def: 'One of the eight built-in types: byte, short, int, long, float, double, char, boolean.' },
    { term: 'Literal', ar: 'قيمة حرفية', def: 'A constant value written directly in code, such as 25, 3.5 or \'A\'.' },
    { term: 'Overflow', ar: 'فيضان', def: 'When a result is too large for its type and wraps around.' },
    { term: 'Integer division', ar: 'القسمة الصحيحة', def: 'Division of two integers; the fractional part is discarded.' },
    { term: 'Remainder (modulus)', ar: 'باقي القسمة', def: 'The value left over after integer division, computed with %.' },
    { term: 'Operator precedence', ar: 'أولوية العمليات', def: 'The rules that decide which operator is evaluated first.' },
    { term: 'Scanner', ar: 'الماسح (Scanner)', def: 'A class in java.util used to read input such as numbers and text.' },
    { term: 'Increment / decrement', ar: 'الزيادة / النقصان', def: 'The ++ and -- operators that add or subtract 1.' },
    { term: 'Compound assignment', ar: 'الإسناد المركب', def: 'Operators such as += that combine an operation with assignment.' },
    { term: 'Widening conversion', ar: 'تحويل توسيعي', def: 'Automatic conversion to a type with a larger range, e.g. int to double.' },
    { term: 'Casting', ar: 'التحويل الصريح', def: 'Explicitly converting a value to another type, e.g. (int) 3.7.' }
  ]
});
