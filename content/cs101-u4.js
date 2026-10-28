JP.unit({
  course: 'cs101',
  n: 4,
  title: 'Math Library, Characters and Strings',
  titleAr: 'مكتبة الرياضيات والحروف والنصوص',
  intro: "Real programs compute square roots, round prices, inspect single characters and process names and messages. In this unit you will use Java's built-in Math methods, learn how characters are stored as Unicode numbers, print neatly formatted output with printf, and work with the String type and its most useful methods.",
  introAr: 'تحتاج البرامج الحقيقية إلى حساب الجذور وتقريب الأسعار وفحص الحروف ومعالجة الأسماء والرسائل. في هذه الوحدة ستستخدم دوال الصنف Math، وتتعرف على تخزين الحروف كأرقام يونيكود، وتطبع مخرجات منسقة باستخدام printf، وتتعامل مع النصوص String وأهم دوالها.',
  lessons: [
    {
      title: 'The Math class and formatted output',
      titleAr: 'الصنف Math والمخرجات المنسقة',
      minutes: 45,
      body: [
        { type: 'p', en: "Java ships with a class called <code>Math</code> (in <code>java.lang</code>, so no import is needed). It contains ready-made methods for common calculations. You call them with the class name: <code>Math.sqrt(25)</code>.",
          ar: 'الصنف Math جاهز في جافا ولا يحتاج import، ونستدعي دواله باسم الصنف مثل Math.sqrt(25).' },
        { type: 'table', head: ['Method', 'Meaning', 'Example', 'Result'], rows: [
          ['<code>Math.pow(a, b)</code>', 'a raised to the power b', '<code>Math.pow(2, 3)</code>', '<code>8.0</code>'],
          ['<code>Math.sqrt(x)</code>', 'square root', '<code>Math.sqrt(25)</code>', '<code>5.0</code>'],
          ['<code>Math.abs(x)</code>', 'absolute value', '<code>Math.abs(-7)</code>', '<code>7</code>'],
          ['<code>Math.max(a, b)</code>', 'larger of two values', '<code>Math.max(4, 9)</code>', '<code>9</code>'],
          ['<code>Math.min(a, b)</code>', 'smaller of two values', '<code>Math.min(2.5, 1.5)</code>', '<code>1.5</code>'],
          ['<code>Math.round(x)</code>', 'nearest whole number', '<code>Math.round(2.6)</code>', '<code>3</code>'],
          ['<code>Math.ceil(x)</code>', 'round up', '<code>Math.ceil(2.1)</code>', '<code>3.0</code>'],
          ['<code>Math.floor(x)</code>', 'round down', '<code>Math.floor(2.9)</code>', '<code>2.0</code>'],
          ['<code>Math.random()</code>', 'random double, 0.0 &lt;= r &lt; 1.0', '<code>Math.random()</code>', 'e.g. <code>0.7316...</code>'],
          ['<code>Math.PI</code>', 'the constant pi', '<code>Math.PI</code>', '<code>3.141592653589793</code>']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(Math.pow(2, 10));
        System.out.println(Math.sqrt(81));
        System.out.println(Math.abs(-15));
        System.out.println(Math.max(12, 7));
        System.out.println(Math.min(3.5, 8));
        System.out.println(Math.round(4.5));
        System.out.println(Math.ceil(4.1));
        System.out.println(Math.floor(4.9));
    }
}`, out: "1024.0\n9.0\n15\n12\n3.5\n5\n5.0\n4.0" },
        { type: 'note', kind: 'warn', en: "Watch the return types. <code>pow</code>, <code>sqrt</code>, <code>ceil</code> and <code>floor</code> always return a <code>double</code> (so <code>Math.pow(2, 10)</code> prints <code>1024.0</code>). <code>round</code> of a double returns a <code>long</code>. <code>abs</code>, <code>max</code> and <code>min</code> return the same type as their arguments.",
          ar: 'انتبه لنوع القيمة المرجعة: pow و sqrt و ceil و floor ترجع double دائماً.' },
        { type: 'h', en: 'Rounding: round, ceil and floor' },
        { type: 'table', head: ['x', 'Math.round(x)', 'Math.ceil(x)', 'Math.floor(x)'], rows: [
          ['2.3', '2', '3.0', '2.0'],
          ['2.5', '3', '3.0', '2.0'],
          ['-2.3', '-2', '-2.0', '-3.0'],
          ['-2.5', '-2', '-2.0', '-3.0'],
          ['-2.7', '-3', '-2.0', '-3.0']
        ] },
        { type: 'note', kind: 'exam', en: "<code>Math.round(x)</code> works like <code>Math.floor(x + 0.5)</code>. That is why <code>Math.round(-2.5)</code> is <code>-2</code>, not <code>-3</code>. Also remember: <code>ceil</code> moves toward positive infinity, so <code>Math.ceil(-2.3)</code> is <code>-2.0</code>.",
          ar: 'Math.round(-2.5) تساوي -2 وليس -3، وهذا سؤال متكرر في الاختبارات.' },
        { type: 'h', en: 'Random numbers' },
        { type: 'p', en: "<code>Math.random()</code> returns a double <code>r</code> with <code>0.0 &lt;= r &lt; 1.0</code>. To get a random integer in the range <code>a</code> to <code>b</code> (inclusive), use <code>a + (int)(Math.random() * (b - a + 1))</code>.",
          ar: 'للحصول على عدد صحيح عشوائي بين a و b نستخدم a + (int)(Math.random() * (b - a + 1)).' },
        { type: 'code', code: J`
int die = 1 + (int) (Math.random() * 6);        // 1 to 6
int mark = 50 + (int) (Math.random() * 51);     // 50 to 100
double r = Math.random();                       // 0.0 up to (not including) 1.0` },
        { type: 'h', en: 'Formatted output with printf and String.format' },
        { type: 'p', en: "<code>System.out.printf(format, values...)</code> prints values using <b>format specifiers</b>. <code>String.format(...)</code> uses the same rules but returns the text as a String instead of printing it. A number between <code>%</code> and the letter is the <b>width</b> (right-aligned); a minus sign makes it left-aligned.",
          ar: 'printf تطبع حسب محددات التنسيق، و String.format تعيد النص بدلاً من طباعته. الرقم بعد % هو عرض الحقل.' },
        { type: 'table', head: ['Specifier', 'Meaning', 'Example', 'Output'], rows: [
          ['<code>%d</code>', 'integer', '<code>printf("%d", 42)</code>', '<code>42</code>'],
          ['<code>%f</code>', 'floating point (6 decimals)', '<code>printf("%f", 3.5)</code>', '<code>3.500000</code>'],
          ['<code>%.2f</code>', '2 decimal places (rounded)', '<code>printf("%.2f", 3.14159)</code>', '<code>3.14</code>'],
          ['<code>%s</code>', 'string', '<code>printf("%s", "Riyadh")</code>', '<code>Riyadh</code>'],
          ['<code>%c</code>', 'character', "<code>printf(\"%c\", 'A')</code>", '<code>A</code>'],
          ['<code>%n</code>', 'new line', '<code>printf("Hi%n")</code>', 'Hi then a line break'],
          ['<code>%5d</code>', 'width 5, right-aligned', '<code>printf("[%5d]", 42)</code>', '<code>[   42]</code>'],
          ['<code>%-8s</code>', 'width 8, left-aligned', '<code>printf("[%-8s]", "Ali")</code>', '<code>[Ali     ]</code>'],
          ['<code>%8.2f</code>', 'width 8, 2 decimals', '<code>printf("[%8.2f]", 7.5)</code>', '<code>[    7.50]</code>']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String item = "Notebook";
        int qty = 3;
        double price = 12.5;
        double total = qty * price;
        System.out.printf("%-10s%5d%10.2f%n", item, qty, total);
        System.out.printf("%-10s%5d%10.2f%n", "Pen", 12, 18.0);
        String line = String.format("Total items: %d", qty + 12);
        System.out.println(line);
    }
}`, out: "Notebook      3     37.50\nPen          12     18.00\nTotal items: 15" },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        double radius = 2.5;
        double area = Math.PI * Math.pow(radius, 2);
        System.out.printf("Radius: %.1f%n", radius);
        System.out.printf("Area: %.2f%n", area);
        System.out.printf("Area: %.3f%n", area);
    }
}`, out: "Radius: 2.5\nArea: 19.63\nArea: 19.635" },
        { type: 'note', kind: 'tip', en: "<code>printf</code> does not move to a new line by itself. End the format with <code>%n</code> (or <code>\\n</code>) when you want a line break.",
          ar: 'printf لا تنتقل لسطر جديد تلقائياً، أضف %n في نهاية التنسيق.' },
        { type: 'note', kind: 'warn', en: "The specifier must match the value type. <code>printf(\"%d\", 3.5)</code> compiles but crashes at run time with an <code>IllegalFormatConversionException</code>. Use <code>%f</code> for doubles and <code>%d</code> for int and long." }
      ],
      practice: [
        { t: 'mcq', q: 'What does <code>System.out.println(Math.pow(3, 2));</code> print?',
          options: ['<code>9</code>', '<code>9.0</code>', '<code>6</code>', '<code>6.0</code>'], answer: 1,
          explain: '<code>Math.pow</code> always returns a <code>double</code>, so 3 squared is printed as <code>9.0</code>.',
          explainAr: 'الدالة pow ترجع double دائماً.' },
        { t: 'output', q: 'What is the output?', code: J`
System.out.println(Math.ceil(7.2));
System.out.println(Math.floor(-7.2));
System.out.println(Math.round(7.5));
System.out.println(Math.abs(-3.5));`,
          answer: "8.0\n-8.0\n8\n3.5",
          explain: '<code>ceil</code> rounds up to 8.0; <code>floor</code> of -7.2 goes down to -8.0; <code>round(7.5)</code> gives the long 8; <code>abs</code> of a double is a double, 3.5.' },
        { t: 'fill', q: 'Complete the statement so that <code>die</code> is a random integer from 1 to 6.',
          code: J`
int die = ___ + (int) (Math.random() * ___);`,
          answers: ['1', '6'],
          explain: '<code>Math.random() * 6</code> is in [0, 6), casting gives 0..5, and adding 1 gives 1..6.' },
        { t: 'output', q: 'What is the output? (Brackets show the field width.)', code: J`
double gpa = 3.456;
System.out.printf("GPA: %.2f%n", gpa);
System.out.printf("[%6.1f]%n", gpa);
System.out.printf("[%-6d]%n", 42);`,
          answer: "GPA: 3.46\n[   3.5]\n[42    ]",
          explain: '3.456 rounded to 2 decimals is 3.46. <code>%6.1f</code> gives "3.5" padded on the left to width 6. <code>%-6d</code> pads 42 on the right to width 6.' },
        { t: 'mcq', q: 'Which expression gives a random integer between 10 and 20 <b>inclusive</b>?',
          options: ['<code>10 + (int) (Math.random() * 10)</code>', '<code>10 + (int) (Math.random() * 11)</code>', '<code>(int) (Math.random() * 20)</code>', '<code>10 + Math.random() * 11</code>'], answer: 1,
          explain: 'There are 20 - 10 + 1 = 11 possible values, so multiply by 11 and add 10. The last option is not cast to int, so it is a double.' },
        { t: 'code', q: 'Read the radius of a circle (a double) and print its area and circumference with 2 decimal places, exactly in the format shown. Do not print any prompt.<br>Example: input <code>3</code> prints<br><code>Area: 28.27</code><br><code>Circumference: 18.85</code>',
          qAr: 'اقرأ نصف القطر واطبع المساحة والمحيط بمنزلتين عشريتين.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // your code here
    }
}`,
          tests: [ { stdin: '3', expected: "Area: 28.27\nCircumference: 18.85" }, { stdin: '1.5', expected: "Area: 7.07\nCircumference: 9.42" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double r = input.nextDouble();
        double area = Math.PI * Math.pow(r, 2);
        double circumference = 2 * Math.PI * r;
        System.out.printf("Area: %.2f%n", area);
        System.out.printf("Circumference: %.2f%n", circumference);
    }
}`,
          hint: 'Area = PI * r^2 and circumference = 2 * PI * r. Use <code>%.2f%n</code>.',
          explain: 'Use <code>Math.PI</code> and <code>Math.pow</code>, then <code>printf</code> with <code>%.2f</code> to round the output to two decimals.' }
      ]
    },
    {
      title: 'Characters, Unicode and escape sequences',
      titleAr: 'الحروف ويونيكود وتسلسلات الهروب',
      minutes: 40,
      body: [
        { type: 'p', en: "The <code>char</code> type stores <b>one</b> character, written between single quotes: <code>'A'</code>, <code>'7'</code>, <code>' '</code>. A char uses 16 bits and holds a <b>Unicode</b> code, so Java can represent English, Arabic and many other alphabets.",
          ar: 'النوع char يخزن حرفاً واحداً بين علامتي اقتباس مفردتين، ويُخزن كرقم يونيكود.' },
        { type: 'code', code: J`
char grade = 'A';
char digit = '7';
char space = ' ';
char letter = '\u0041';   // Unicode escape for 'A'` },
        { type: 'h', en: 'ASCII and Unicode codes' },
        { type: 'p', en: "Every character is stored as a number. The first 128 Unicode codes are the same as <b>ASCII</b>. You do not need to memorize the table, but these ranges are worth knowing: digits come before uppercase letters, and uppercase letters come before lowercase letters.",
          ar: 'كل حرف له رقم، والأرقام 0-9 قبل الحروف الكبيرة، والكبيرة قبل الصغيرة.' },
        { type: 'table', head: ['Character', 'Code', 'Character', 'Code'], rows: [
          ["<code>'0'</code>", '48', "<code>'9'</code>", '57'],
          ["<code>'A'</code>", '65', "<code>'Z'</code>", '90'],
          ["<code>'a'</code>", '97', "<code>'z'</code>", '122'],
          ["<code>' '</code> (space)", '32', "<code>'\\n'</code> (new line)", '10']
        ] },
        { type: 'h', en: 'Character arithmetic and casting' },
        { type: 'p', en: "Because a char is a number, you can do arithmetic with it. The result of <code>char + int</code> (or <code>char + char</code>) is an <code>int</code>. Cast it back with <code>(char)</code> to see a character again. Assigning a char to an int variable is automatic (widening).",
          ar: 'ناتج جمع char مع int هو int، ونستخدم (char) للتحويل إلى حرف.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        char c = 'A';
        int code = c;
        System.out.println(code);
        System.out.println(c + 1);
        System.out.println((char) (c + 1));
        char next = c;
        next++;
        System.out.println(next);
        System.out.println((char) 100);
        System.out.println('7' - '0');
    }
}`, out: "65\n66\nB\nB\nd\n7" },
        { type: 'note', kind: 'exam', en: "<code>System.out.println('a' + 'b');</code> prints <code>195</code> (97 + 98), not <code>ab</code>. Adding two chars gives an int. But <code>\"\" + 'a' + 'b'</code> gives the String <code>ab</code>.",
          ar: "جمع حرفين يعطي عدداً صحيحاً وليس نصاً." },
        { type: 'p', en: "Useful tricks: <code>ch - '0'</code> turns a digit character into its numeric value, and <code>(char) (ch - 'a' + 'A')</code> converts a lowercase letter to uppercase." },
        { type: 'h', en: 'The Character class' },
        { type: 'table', head: ['Method', 'Returns true / result when...'], rows: [
          ['<code>Character.isDigit(ch)</code>', 'ch is <code>0</code> to <code>9</code>'],
          ['<code>Character.isLetter(ch)</code>', 'ch is a letter'],
          ['<code>Character.isLetterOrDigit(ch)</code>', 'ch is a letter or a digit'],
          ['<code>Character.isUpperCase(ch)</code> / <code>isLowerCase(ch)</code>', 'ch is an uppercase / lowercase letter'],
          ['<code>Character.isWhitespace(ch)</code>', 'ch is a space, tab or new line'],
          ['<code>Character.toUpperCase(ch)</code> / <code>toLowerCase(ch)</code>', 'returns the converted char']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        char ch = 'g';
        System.out.println(Character.isLetter(ch));
        System.out.println(Character.isDigit(ch));
        System.out.println(Character.isUpperCase(ch));
        System.out.println(Character.toUpperCase(ch));
        System.out.println(Character.isDigit('5'));
        System.out.println(Character.isWhitespace(' '));
    }
}`, out: "true\nfalse\nfalse\nG\ntrue\ntrue" },
        { type: 'h', en: 'Escape sequences' },
        { type: 'p', en: 'Some characters cannot be typed directly inside a string or char literal. Java uses an <b>escape sequence</b>: a backslash followed by a code.',
          ar: 'تسلسل الهروب يبدأ بشرطة مائلة عكسية لكتابة حروف خاصة مثل السطر الجديد وعلامة الاقتباس.' },
        { type: 'table', head: ['Escape', 'Meaning'], rows: [
          ['<code>\\n</code>', 'new line'],
          ['<code>\\t</code>', 'tab'],
          ['<code>\\"</code>', 'double quote'],
          ["<code>\\'</code>", 'single quote'],
          ['<code>\\\\</code>', 'backslash'],
          ['<code>\\u0041</code>', 'Unicode character with hex code 0041 (A)']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Name:\tSara");
        System.out.println("She said \"Salam\"");
        System.out.println("Path: C:\\java\\lab1");
        System.out.println("Line 1\nLine 2");
        System.out.println('\u0041');
    }
}`, out: "Name:\tSara\nShe said \"Salam\"\nPath: C:\\java\\lab1\nLine 1\nLine 2\nA" },
        { type: 'note', kind: 'warn', en: "Use single quotes for a char and double quotes for a String. <code>'AB'</code> is a compile error (a char holds only one character), and <code>char c = \"A\";</code> is also an error because <code>\"A\"</code> is a String." }
      ],
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
char ch = 'C';
System.out.println(ch + 2);
System.out.println((char) (ch + 2));
System.out.println((int) 'a');`,
          answer: "69\nE\n97",
          explain: "'C' is 67, so <code>ch + 2</code> is the int 69. Casting 69 back to char gives 'E'. The code of 'a' is 97." },
        { t: 'mcq', q: "What does <code>System.out.println('1' + '2');</code> print?",
          options: ['<code>12</code>', '<code>3</code>', '<code>99</code>', 'Compile error'], answer: 2,
          explain: "Both operands are chars, so their codes are added: '1' is 49 and '2' is 50, giving 99.",
          explainAr: 'الحرف 1 قيمته 49 والحرف 2 قيمته 50 فالناتج 99.' },
        { t: 'fill', q: 'Complete the code using methods of the <code>Character</code> class.',
          code: J`
char ch = input.next().charAt(0);
if (Character.___(ch)) {
    System.out.println("You typed a digit");
}
char up = Character.___(ch);`,
          answers: ['isDigit', 'toUpperCase'],
          explain: '<code>isDigit</code> tests for 0-9 and <code>toUpperCase</code> returns the uppercase version of a letter (other characters are returned unchanged).' },
        { t: 'output', q: 'What is the output?', code: J`
System.out.println("A\\B");
System.out.println("\"Hi\"");
System.out.print("x\ny");`,
          answer: "A\\B\n\"Hi\"\nx\ny",
          explain: '<code>\\\\</code> prints one backslash, <code>\\"</code> prints a double quote, and <code>\\n</code> starts a new line.' },
        { t: 'mcq', q: "What is the value of <code>'a' - 'A'</code>?",
          options: ['26', '32', '0', '-32'], answer: 1,
          explain: "'a' is 97 and 'A' is 65, so the difference is 32. This is the distance between any lowercase letter and its uppercase form." },
        { t: 'order', q: "Put the lines in order so the program prints <code>M = 77</code>.",
          lines: [
            "char ch = 'm';",
            "char upper = Character.toUpperCase(ch);",
            "int code = upper;",
            "System.out.println(upper + \" = \" + code);"
          ],
          explain: "First store the letter, then convert it, then widen the char to an int, and finally print. Note that <code>upper + \" = \"</code> is char + String, which gives a String." }
      ]
    },
    {
      title: 'The String type and its methods',
      titleAr: 'النوع String ودواله',
      minutes: 50,
      body: [
        { type: 'p', en: 'A <code>String</code> is a sequence of characters, written in double quotes. Unlike <code>int</code> or <code>char</code>, String is a <b>class</b> (a reference type), so it comes with many methods you call with a dot: <code>name.length()</code>. Strings are <b>immutable</b>: a method never changes the original string, it returns a new one.',
          ar: 'String صنف وليس نوعاً بدائياً، وهو غير قابل للتغيير: الدوال ترجع نصاً جديداً ولا تغير الأصلي.' },
        { type: 'code', code: J`
String name = "Noura";
String empty = "";
String message = "Welcome to " + name;   // concatenation with +` },
        { type: 'h', en: 'Common String methods' },
        { type: 'p', en: 'Characters in a string are numbered from <b>index 0</b>. For <code>s = "Purple Sunset"</code>, <code>P</code> is at index 0, the space is at index 6 and <code>S</code> is at index 7.' },
        { type: 'table', head: ['Call (s = "Purple Sunset")', 'Meaning', 'Result'], rows: [
          ['<code>s.length()</code>', 'number of characters', '<code>13</code>'],
          ['<code>s.charAt(7)</code>', 'character at an index', "<code>'S'</code>"],
          ['<code>s.substring(7)</code>', 'from index 7 to the end', '<code>"Sunset"</code>'],
          ['<code>s.substring(0, 6)</code>', 'from index 0 up to (not including) 6', '<code>"Purple"</code>'],
          ["<code>s.indexOf('S')</code>", 'first index of a char', '<code>7</code>'],
          ['<code>s.indexOf("set")</code>', 'first index of a substring', '<code>10</code>'],
          ["<code>s.indexOf('z')</code>", 'not found', '<code>-1</code>'],
          ['<code>s.toUpperCase()</code>', 'all capitals', '<code>"PURPLE SUNSET"</code>'],
          ['<code>s.toLowerCase()</code>', 'all small letters', '<code>"purple sunset"</code>'],
          ['<code>s.concat(" Sky")</code>', 'joins two strings (same as +)', '<code>"Purple Sunset Sky"</code>'],
          ['<code>"  hi  ".trim()</code>', 'removes spaces at both ends', '<code>"hi"</code>']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String s = "Purple Sunset";
        System.out.println(s.length());
        System.out.println(s.charAt(0));
        System.out.println(s.substring(7));
        System.out.println(s.substring(0, 6));
        System.out.println(s.indexOf("set"));
        System.out.println(s.toUpperCase());
        System.out.println(s.charAt(s.length() - 1));
    }
}`, out: "13\nP\nSunset\nPurple\n10\nPURPLE SUNSET\nt" },
        { type: 'note', kind: 'exam', en: 'The last index is <code>length() - 1</code>. <code>s.charAt(s.length())</code> throws a <code>StringIndexOutOfBoundsException</code>. In <code>substring(a, b)</code> the character at index <code>b</code> is <b>not</b> included, and the result has <code>b - a</code> characters.',
          ar: 'آخر فهرس هو length() - 1، و substring(a, b) لا تشمل الحرف عند b.' },
        { type: 'note', kind: 'tip', en: 'Because strings are immutable, <code>s.toUpperCase();</code> alone does nothing useful. Store the result: <code>s = s.toUpperCase();</code>' },
        { type: 'h', en: 'Comparing strings: equals vs ==' },
        { type: 'p', en: "<code>==</code> checks whether two variables refer to the <b>same object</b> in memory. <code>equals</code> checks whether two strings have the <b>same characters</b>. <code>compareTo</code> compares in dictionary (lexicographic) order and returns a negative number, zero, or a positive number.",
          ar: 'استخدم equals لمقارنة محتوى النصوص، أما == فتقارن المراجع فقط.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String a = "java";
        String b = new String("java");
        String c = "JAVA";
        System.out.println(a.equals(b));
        System.out.println(a == b);
        System.out.println(a.equalsIgnoreCase(c));
        System.out.println("apple".compareTo("banana"));
        System.out.println("cat".compareTo("car"));
        System.out.println("abc".compareTo("abc"));
    }
}`, out: "true\nfalse\ntrue\n-1\n2\n0" },
        { type: 'p', en: "<code>compareTo</code> looks for the first position where the strings differ and returns the difference of the two character codes: <code>'t' - 'r'</code> is 2. If one string is a prefix of the other, it returns the difference in lengths." },
        { type: 'note', kind: 'warn', en: 'Never compare string contents with <code>==</code>. It may seem to work for literals, but it fails for strings that are read from the keyboard or built at run time. Always use <code>equals</code> (or <code>equalsIgnoreCase</code>).' },
        { type: 'h', en: 'Reading strings from the keyboard' },
        { type: 'p', en: "<code>input.next()</code> reads one <b>word</b> (it stops at a space). <code>input.nextLine()</code> reads the <b>rest of the current line</b>. To read a single character, read a word and take its first character: <code>input.next().charAt(0)</code>.",
          ar: 'next تقرأ كلمة واحدة، و nextLine تقرأ بقية السطر كاملاً.' },
        { type: 'code', run: true, stdin: "Sara Al Harbi\nRiyadh", code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String first = input.next();
        String rest = input.nextLine();
        String city = input.nextLine();
        System.out.println("First word: " + first);
        System.out.println("Rest: [" + rest + "]");
        System.out.println("City: " + city);
    }
}`, out: "First word: Sara\nRest: [ Al Harbi]\nCity: Riyadh" },
        { type: 'note', kind: 'exam', en: 'After <code>nextInt()</code> or <code>nextDouble()</code>, the Enter key is still waiting in the input. A following <code>nextLine()</code> returns an empty string. Fix: call an extra <code>input.nextLine();</code> to skip the rest of the line before reading the full line.',
          ar: 'بعد nextInt تُرجع nextLine نصاً فارغاً، لذا أضف nextLine إضافية.' }
      ],
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
String w = "Computer";
System.out.println(w.length());
System.out.println(w.charAt(3));
System.out.println(w.substring(3, 6));
System.out.println(w.indexOf('t'));`,
          answer: "8\np\nput\n5",
          explain: 'C=0, o=1, m=2, p=3, u=4, t=5, e=6, r=7. So the length is 8, index 3 is p, indexes 3..5 give "put", and t is at index 5.' },
        { t: 'mcq', q: 'Which expression correctly checks whether the strings <code>s1</code> and <code>s2</code> contain the same text?',
          options: ['<code>s1 == s2</code>', '<code>s1.equals(s2)</code>', '<code>s1 = s2</code>', '<code>s1.compareTo(s2) == 1</code>'], answer: 1,
          explain: '<code>equals</code> compares the characters. <code>==</code> compares references, <code>=</code> is assignment, and compareTo returns 0 (not 1) for equal strings.' },
        { t: 'output', q: 'What is the output?', code: J`
System.out.println("Ali".compareTo("Amal"));
System.out.println("Zed".compareTo("apple"));
System.out.println("hello".compareTo("hello world"));`,
          answer: "-1\n-7\n-6",
          explain: "First difference: 'l' (108) - 'm' (109) = -1. 'Z' (90) - 'a' (97) = -7. \"hello\" is a prefix of \"hello world\", so the result is 5 - 11 = -6." },
        { t: 'fill', q: 'Complete the code so <code>initials</code> becomes <code>"OK"</code>.',
          code: J`
String first = "Omar";
String last = "Khalid";
String initials = "" + first.___(0) + last.charAt(___);`,
          answers: ['charAt', '0'],
          explain: 'The first letter of each name is at index 0. Starting with "" makes the + operators join text instead of adding char codes.' },
        { t: 'mcq', q: 'The user types <code>King Fahd Road</code> and presses Enter. What does <code>String s = input.next();</code> store?',
          options: ['<code>"King Fahd Road"</code>', '<code>"King"</code>', '<code>"K"</code>', '<code>""</code>'], answer: 1,
          explain: '<code>next()</code> reads one token and stops at whitespace. Use <code>nextLine()</code> to read the whole line.' },
        { t: 'code', q: 'Read one line containing a first name and a last name separated by a single space. Print the last name in uppercase on the first line, and the initials (each followed by a dot) on the second line. Do not print any prompt.<br>Example: <code>Sara Alqahtani</code> prints <code>ALQAHTANI</code> then <code>S.A.</code>',
          qAr: 'اقرأ الاسم الكامل واطبع اسم العائلة بحروف كبيرة ثم الأحرف الأولى.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine();
        // your code here
    }
}`,
          tests: [ { stdin: 'Sara Alqahtani', expected: "ALQAHTANI\nS.A." }, { stdin: 'Omar Ali', expected: "ALI\nO.A." } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine().trim();
        int space = name.indexOf(' ');
        String first = name.substring(0, space);
        String last = name.substring(space + 1);
        System.out.println(last.toUpperCase());
        System.out.println(first.charAt(0) + "." + last.charAt(0) + ".");
    }
}`,
          hint: 'Find the space with <code>indexOf</code>, then split the name with <code>substring</code>.',
          explain: 'The space index separates the two parts: <code>substring(0, space)</code> is the first name and <code>substring(space + 1)</code> is the last name.' }
      ]
    }
  ],
  quiz: [
    { t: 'output', q: 'What is the output?', code: J`
System.out.println(Math.max(Math.abs(-9), 4));
System.out.println(Math.sqrt(49) + 1);`,
      answer: "9\n8.0",
      explain: '<code>Math.abs(-9)</code> is 9, and the max of 9 and 4 is the int 9. <code>Math.sqrt</code> returns the double 7.0, plus 1 is 8.0.' },
    { t: 'mcq', q: 'What is the value of <code>Math.round(-3.5)</code>?',
      options: ['<code>-4</code>', '<code>-3</code>', '<code>-3.0</code>', '<code>-4.0</code>'], answer: 1,
      explain: 'round(x) is floor(x + 0.5) = floor(-3.0) = -3, and round returns a long, not a double.' },
    { t: 'output', q: 'What is the output?', code: J`
char c = 'x';
c += 2;
System.out.println(c);
System.out.println((int) c);`,
      answer: "z\n122",
      explain: "'x' is 120. The compound assignment <code>+=</code> keeps the type char, so c becomes 'z' (122)." },
    { t: 'mcq', q: 'Which statement prints <code>7.5</code> as <code>    7.50</code> (width 8, two decimals)?',
      options: ['<code>printf("%2.8f", 7.5)</code>', '<code>printf("%8.2f", 7.5)</code>', '<code>printf("%8d", 7.5)</code>', '<code>printf("%-8.2f", 7.5)</code>'], answer: 1,
      explain: 'In <code>%8.2f</code>, 8 is the total width and 2 is the number of decimals. A minus sign would left-align, and %d does not accept a double.' },
    { t: 'output', q: 'What is the output?', code: J`
String s = "Riyadh";
System.out.println(s.substring(2));
System.out.println(s.indexOf("ad"));
System.out.println(s.toUpperCase().charAt(1));`,
      answer: "yadh\n3\nI",
      explain: 'R=0, i=1, y=2, a=3, d=4, h=5. substring(2) is "yadh", "ad" starts at 3, and "RIYADH".charAt(1) is I.' },
    { t: 'mcq', q: 'What does <code>System.out.println("5" + 3 + 2);</code> print?',
      options: ['<code>10</code>', '<code>532</code>', '<code>55</code>', 'Compile error'], answer: 1,
      explain: 'Evaluation is left to right. "5" + 3 is the String "53", then "53" + 2 is "532".' },
    { t: 'output', q: 'What is the output?', code: J`
System.out.println(3 + 4 + "ab" + 3 + 4);`,
      answer: '7ab34',
      explain: 'Left to right: 3 + 4 = 7 (numbers), then 7 + "ab" = "7ab", then "7ab3", then "7ab34".' },
    { t: 'mcq', q: "What does <code>Character.isLetterOrDigit('_')</code> return?",
      options: ['<code>true</code>', '<code>false</code>', "<code>'_'</code>", 'Compile error'], answer: 1,
      explain: 'The underscore is neither a letter nor a digit.' },
    { t: 'output', q: 'What is the output?', code: J`
System.out.printf("%s is %d years old%n", "Huda", 19);
System.out.printf("%c%c%n", 'O', 'K');`,
      answer: "Huda is 19 years old\nOK",
      explain: 'Each specifier is replaced by the next value in order: %s by "Huda", %d by 19, and the two %c by O and K.' },
    { t: 'mcq', q: 'Which condition is <code>true</code> exactly when the String <code>s</code> is empty?',
      options: ['<code>s.length() == 0</code>', '<code>s == 0</code>', '<code>s.charAt(0) == \' \'</code>', '<code>s.length() == 1</code>'], answer: 0,
      explain: 'An empty string has length 0. Calling <code>charAt(0)</code> on it would throw an exception.' }
  ],
  lab: {
    t: 'code',
    q: 'Mini project: <b>Student card formatter</b>. Read three lines: a full name (first and last name separated by one space), a student ID (digits), and a GPA (double). Print exactly:<br><code>Card for: NAME IN UPPERCASE</code><br><code>Username: </code>first letter of the first name in lowercase, a dot, then the last name in lowercase<br><code>ID ends with: </code>the last 3 characters of the ID<br><code>GPA: </code>the GPA with 2 decimals<br>Do not print any prompts.',
    qAr: 'اقرأ الاسم والرقم الجامعي والمعدل واطبع بطاقة الطالب بالتنسيق المطلوب.',
    starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine();
        String id = input.next();
        double gpa = input.nextDouble();
        // your code here
    }
}`,
    tests: [
      { stdin: "Sara Alqahtani\n221100345\n3.8", expected: "Card for: SARA ALQAHTANI\nUsername: s.alqahtani\nID ends with: 345\nGPA: 3.80" },
      { stdin: "Omar Ali\n219876512\n2.456", expected: "Card for: OMAR ALI\nUsername: o.ali\nID ends with: 512\nGPA: 2.46" }
    ],
    solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine().trim();
        String id = input.next();
        double gpa = input.nextDouble();
        int space = name.indexOf(' ');
        String first = name.substring(0, space);
        String last = name.substring(space + 1);
        System.out.println("Card for: " + name.toUpperCase());
        String user = Character.toLowerCase(first.charAt(0)) + "." + last.toLowerCase();
        System.out.println("Username: " + user);
        System.out.println("ID ends with: " + id.substring(id.length() - 3));
        System.out.printf("GPA: %.2f%n", gpa);
    }
}`,
    hint: 'Use <code>indexOf(\' \')</code> and <code>substring</code> to split the name, <code>id.length() - 3</code> for the last three characters, and <code>%.2f</code> for the GPA.',
    explain: 'This lab combines String methods (indexOf, substring, toUpperCase, toLowerCase, length), a Character method, and printf formatting.'
  },
  cheats: [
    { code: J`Math.pow(2, 3)   Math.sqrt(16)   Math.abs(-5)`, note: 'pow and sqrt return double: 8.0 and 4.0; abs keeps the argument type' },
    { code: J`Math.round(2.5)  Math.ceil(2.1)  Math.floor(2.9)`, note: '3 (long), 3.0, 2.0' },
    { code: J`int r = a + (int) (Math.random() * (b - a + 1));`, note: 'Random integer from a to b inclusive' },
    { code: J`System.out.printf("%-10s%6.2f%n", name, price);`, note: 'Left-aligned name (width 10), price with width 6 and 2 decimals, new line' },
    { code: J`String s = String.format("%d items", n);`, note: 'Same rules as printf, but returns a String' },
    { code: J`(char) ('a' + 1)   'c' - 'a'   ch - '0'`, note: "'b', 2, and the numeric value of a digit char" },
    { code: J`Character.isDigit(ch)  Character.toUpperCase(ch)`, note: 'Test and convert single characters' },
    { code: J`"\n  \t  \"  \\  \u0041"`, note: 'Escape sequences: new line, tab, quote, backslash, Unicode' },
    { code: J`s.length()  s.charAt(i)  s.substring(a, b)  s.indexOf("x")`, note: 'Indexes start at 0; substring excludes index b; indexOf returns -1 if not found' },
    { code: J`s1.equals(s2)   s1.compareTo(s2)`, note: 'Compare contents (never with ==); compareTo gives negative, 0 or positive' },
    { code: J`String w = input.next();  String line = input.nextLine();`, note: 'next reads one word; nextLine reads the rest of the line' }
  ],
  glossary: [
    { term: 'Math class', ar: 'الصنف Math', def: 'A built-in Java class with static methods for common mathematical operations such as pow, sqrt and round.' },
    { term: 'char', ar: 'حرف', def: 'A primitive type that stores a single 16-bit Unicode character, written in single quotes.' },
    { term: 'ASCII', ar: 'آسكي', def: 'A 7-bit character code for 128 characters (English letters, digits, symbols); it forms the first part of Unicode.' },
    { term: 'Unicode', ar: 'يونيكود', def: 'A character encoding standard that gives a unique number to characters of most of the world\'s writing systems.' },
    { term: 'Casting', ar: 'التحويل الصريح للنوع', def: 'Converting a value to another type explicitly, for example (char) 66 or (int) 3.7.' },
    { term: 'Escape sequence', ar: 'تسلسل هروب', def: 'A backslash followed by a character, such as \\n or \\", used to represent special characters in literals.' },
    { term: 'Format specifier', ar: 'محدد التنسيق', def: 'A placeholder such as %d, %.2f or %s in a printf format string that controls how a value is printed.' },
    { term: 'String', ar: 'سلسلة نصية', def: 'A class representing a sequence of characters; String objects are immutable.' },
    { term: 'Index', ar: 'فهرس', def: 'The position of a character in a string, starting from 0.' },
    { term: 'Immutable', ar: 'غير قابل للتغيير', def: 'Cannot be changed after creation; String methods return new strings instead of modifying the original.' },
    { term: 'Lexicographic order', ar: 'الترتيب المعجمي', def: 'Dictionary-like ordering based on the Unicode codes of characters; used by compareTo.' }
  ]
});
