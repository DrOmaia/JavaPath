JP.unit({
  course: 'cs101',
  n: 4,
  title: 'Math Library, Characters and Strings',
  titleAr: 'مكتبة الرياضيات والحروف والنصوص',
  intro: 'Real programs compute square roots, round prices, look at single letters, and work with names and messages. In this unit you will use the ready-made Math tools of Java, learn how letters are stored as numbers, print neat tables with printf, and use the String type to work with words: cut, search, clean, compare, and convert text to numbers. At the end you will build a receipt formatter. We go one small idea at a time.',
  introAr: 'تحتاج البرامج الحقيقية إلى حساب الجذور وتقريب الأسعار وفحص الحروف ومعالجة الأسماء. في هذه الوحدة ستستخدم أدوات Math الجاهزة، وتتعرف على تخزين الحروف كأرقام، وتطبع جداول منسقة بـ printf، وتتعامل مع النصوص String: قصاً وبحثاً وتنظيفاً ومقارنة وتحويلاً إلى أرقام، ثم تبني مشروع إيصال منسق.',
  lessons: [
    {
      title: 'The Math class: pow, sqrt, abs, max, min',
      titleAr: 'الصنف Math: الدوال الأساسية',
      minutes: 35,
      body: [
        { type: 'h', en: 'Ready-made calculator buttons' },
        { type: 'p', en: 'Imagine writing your own code every time you need a square root. That would be slow and hard! Java already has a toolbox called <code>Math</code> with many ready-made calculations. You do not need an import. You just write <code>Math.</code> (with a dot) and the name of the tool.',
          ar: 'الصنف Math صندوق أدوات جاهز في جافا ولا يحتاج import. نكتب Math. ثم اسم الأداة.' },
        { type: 'p', en: 'Engineers, shop owners and game makers use these tools every day: the length of a ramp, the area of a room in square metres, the bigger of two prices. In this lesson you will meet three new words. Learn them well, because every lesson in this unit uses them.' },
        { type: 'list', items: [
          '<b>method</b>: a named tool that does one job, like <code>sqrt</code> (square root).',
          '<b>argument</b>: a value you give to the method inside the parentheses, like the <code>25</code> in <code>Math.sqrt(25)</code>.',
          '<b>return value</b>: the answer that the method gives back to you, like <code>5.0</code>.'
        ], ar: 'الدالة أداة لها اسم، والوسيط قيمة نعطيها لها، والقيمة المرجعة هي الجواب.' },
        { type: 'analogy', title: 'Buttons on a calculator', en: 'A calculator has buttons for square root and power. You give it a number, press the button, and get the answer back. A Math method works in the same way: you give it values in parentheses and it gives you an answer.', ar: 'نعطي الدالة قيماً بين قوسين فتعيد لنا الجواب.' },
        { type: 'code', code: J`
double root = Math.sqrt(25);
System.out.println(root);
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['Math.sqrt(25)', 'Use the <code>sqrt</code> (square root) tool of <code>Math</code>. The number <code>25</code> inside the parentheses is what we give it.'],
          ['double root = ...', 'The answer is <code>5.0</code>. It is a <code>double</code>, so we keep it in a double box.'],
          ['System.out.println(root);', 'Prints <code>5.0</code> (with the decimal point).']
        ], ar: 'sqrt تعطي الجذر التربيعي، والنتيجة من النوع double.' },
        { type: 'check', q: 'What does <code>Math.sqrt(49)</code> give?', options: ['<code>7</code>', '<code>7.0</code>', '<code>24.5</code>'], answer: 1, explain: 'The square root of 49 is 7, but sqrt always returns a double, so it prints 7.0.' },
        { type: 'h', en: 'Three ways to use the answer' },
        { type: 'p', en: 'A return value is just a value, like a number you type. So you can do three things with it: print it at once, keep it in a variable for later, or use it inside a bigger calculation. Look at the three lines below. Each one uses the answer of <code>Math.sqrt(36)</code>, which is <code>6.0</code>, in a different way.' },
        { type: 'code', code: J`
System.out.println(Math.sqrt(36));     // print it: 6.0
double side = Math.sqrt(36);           // keep it: side is 6.0
double half = Math.sqrt(36) / 2;       // use it: half is 3.0
` },
        { type: 'p', en: 'In the third line Java first calls the method and gets <code>6.0</code>. Only then does it divide by 2. A method call is worked out first, like a number in parentheses.', ar: 'يمكن طباعة الجواب أو تخزينه أو استخدامه في عملية حسابية أكبر.' },
        { type: 'h', en: 'The five most useful tools' },
        { type: 'table', head: ['Method', 'Meaning', 'Example', 'Result'], rows: [
          ['<code>Math.pow(a, b)</code>', 'a to the power b', '<code>Math.pow(2, 3)</code>', '<code>8.0</code>'],
          ['<code>Math.sqrt(x)</code>', 'square root', '<code>Math.sqrt(25)</code>', '<code>5.0</code>'],
          ['<code>Math.abs(x)</code>', 'absolute value (remove the minus sign)', '<code>Math.abs(-7)</code>', '<code>7</code>'],
          ['<code>Math.max(a, b)</code>', 'the larger value', '<code>Math.max(4, 9)</code>', '<code>9</code>'],
          ['<code>Math.min(a, b)</code>', 'the smaller value', '<code>Math.min(2.5, 1.5)</code>', '<code>1.5</code>']
        ] },
        { type: 'analogy', title: 'Distance from home', en: 'The absolute value is a distance. A shop 7 km to the left and a shop 7 km to the right are both 7 km away. Distance is never negative. <code>Math.abs(-7)</code> is 7.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(Math.pow(2, 10));
        System.out.println(Math.abs(-15));
        System.out.println(Math.max(12, 7));
        System.out.println(Math.min(3.5, 8));
        System.out.println(Math.PI);
    }
}
`, out: J`
1024.0
15
12
3.5
3.141592653589793
` },
        { type: 'lines', rows: [
          ['Math.pow(2, 10)', '2 multiplied by itself 10 times: 1024. The result is a double: <code>1024.0</code>.'],
          ['Math.abs(-15)', 'Remove the minus sign: <code>15</code>. For an int, the answer is an int.'],
          ['Math.max(12, 7)', 'The larger one: <code>12</code>.'],
          ['Math.min(3.5, 8)', 'The smaller one: <code>3.5</code>.'],
          ['Math.PI', 'Not a method but a ready-made value for pi. No parentheses!']
        ], ar: 'pow و sqrt ترجع double دائماً. abs و max و min ترجع نفس نوع القيم المعطاة.' },
        { type: 'check', q: 'What does <code>System.out.println(Math.pow(3, 2));</code> print?', options: ['<code>9</code>', '<code>9.0</code>', '<code>6</code>', '<code>6.0</code>'], answer: 1, explain: '3 squared is 9, and pow always returns a double, so 9.0.' },
        { type: 'note', kind: 'warn', en: 'Watch the return types. <code>pow</code> and <code>sqrt</code> always return a <code>double</code> (so <code>Math.pow(2, 10)</code> prints <code>1024.0</code>). <code>abs</code>, <code>max</code> and <code>min</code> return the same kind of number you gave them.', ar: 'انتبه لنوع القيمة المرجعة.' },
        { type: 'p', en: 'Here are more calls that students often meet in exams. Read each row slowly and say the answer before you look at the last column. Notice the last two rows: when one argument is a <code>double</code>, the answer of <code>max</code> or <code>min</code> is a double too, even if the bigger value was an int.' },
        { type: 'table', head: ['Call', 'Result', 'Why'], rows: [
          ['<code>Math.pow(5, 0)</code>', '<code>1.0</code>', 'any number to the power 0 is 1'],
          ['<code>Math.pow(10, 3)</code>', '<code>1000.0</code>', '10 × 10 × 10, as a double'],
          ['<code>Math.sqrt(2)</code>', '<code>1.4142135623730951</code>', 'not a whole number, so many digits'],
          ['<code>Math.abs(-2.5)</code>', '<code>2.5</code>', 'a double in, a double out'],
          ['<code>Math.max(-3, -8)</code>', '<code>-3</code>', '-3 is closer to zero, so it is bigger'],
          ['<code>Math.min(7, 7)</code>', '<code>7</code>', 'both are the same'],
          ['<code>Math.max(5, 2.0)</code>', '<code>5.0</code>', 'one argument is a double, so the answer is a double'],
          ['<code>Math.min(3, 4.5)</code>', '<code>3.0</code>', 'the same rule']
        ] },
        { type: 'check', q: 'What does <code>System.out.println(Math.max(5, 2.0));</code> print?', options: ['<code>5</code>', '<code>5.0</code>', '<code>2.0</code>', 'An error'], answer: 1, explain: 'One of the arguments is a double, so Java works with doubles and the answer is 5.0.' },
        { type: 'h', en: 'A call inside a call' },
        { type: 'p', en: 'You took three quizzes and the teacher keeps your best mark. <code>Math.max</code> takes only <b>two</b> values. How can we find the biggest of three? We put one call inside another. The inner call is worked out first, and its answer becomes an argument of the outer call.' },
        { type: 'analogy', title: 'A small football cup', en: 'Three teams play a small cup. Two teams play first and the winner plays the third team. The winner of the second game is the champion. <code>Math.max(a, Math.max(b, c))</code> works the same way: first b plays c, then the winner plays a.', ar: 'الاستدعاء الداخلي يُحسب أولاً ثم يدخل جوابه في الاستدعاء الخارجي.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int quiz1 = 14;
        int quiz2 = 18;
        int quiz3 = 16;
        int best = Math.max(quiz1, Math.max(quiz2, quiz3));
        System.out.println("Best mark: " + best);
    }
}
`, out: 'Best mark: 18' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['Math.max(quiz2, quiz3)', 'The inner call runs first: the larger of 18 and 16 is <code>18</code>.'],
          ['Math.max(quiz1, 18)', 'Now the outer call: the larger of 14 and 18 is <code>18</code>.'],
          ['int best = ...', 'All the values are ints, so the answer is an int and fits in an int box.']
        ], ar: 'لإيجاد الأكبر بين ثلاثة نضع max داخل max.' },
        { type: 'check', q: 'What is <code>Math.min(9, Math.min(4, 6))</code>?', options: ['<code>9</code>', '<code>6</code>', '<code>4</code>', '<code>4.0</code>'], answer: 2, explain: 'The inner call gives 4 (the smaller of 4 and 6). Then the smaller of 9 and 4 is 4. All are ints, so no .0.' },
        { type: 'steps', title: 'Worked example: the long side of a triangle', problem: 'A right-angled triangle has two short sides a and b. The long side is the square root of (a squared plus b squared). Read a and b and print the long side.',
          steps: [
            { en: 'Read the two sides as decimal numbers.', code: J`
double a = input.nextDouble();
double b = input.nextDouble();
` },
            { en: 'Square each side with pow, then add them.', code: J`
double sum = Math.pow(a, 2) + Math.pow(b, 2);
` },
            { en: 'Take the square root of the sum.', code: J`
double longSide = Math.sqrt(sum);
` },
            { en: 'Print the answer.', code: J`
System.out.println(longSide);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double a = input.nextDouble();
        double b = input.nextDouble();
        double sum = Math.pow(a, 2) + Math.pow(b, 2);
        double longSide = Math.sqrt(sum);
        System.out.println(longSide);
    }
}
`, stdin: '3 4', out: '5.0', ar: 'استخدمنا pow ثم sqrt لحساب الوتر.' },
        { type: 'memory', title: 'The triangle program in memory', en: 'Each variable is a box on the left side. The Math methods do not make new boxes. They only give back a value, and the <code>=</code> sign puts that value into a box. Press Next to follow the program with the input <code>3 4</code>.', frames: [
          { label: 'After reading <code>a</code> and <code>b</code>', vars: [{ name: 'a', type: 'double', value: '3.0' }, { name: 'b', type: 'double', value: '4.0' }] },
          { label: 'After <code>double sum = Math.pow(a, 2) + Math.pow(b, 2);</code>', vars: [{ name: 'a', type: 'double', value: '3.0' }, { name: 'b', type: 'double', value: '4.0' }, { name: 'sum', type: 'double', value: '25.0' }] },
          { label: 'After <code>double longSide = Math.sqrt(sum);</code>', vars: [{ name: 'a', type: 'double', value: '3.0' }, { name: 'b', type: 'double', value: '4.0' }, { name: 'sum', type: 'double', value: '25.0' }, { name: 'longSide', type: 'double', value: '5.0' }] }
        ], ar: 'الدالة لا تنشئ صندوقاً؛ هي تعيد قيمة، وعلامة = تضعها في المتغير.' },
        { type: 'steps', title: 'Worked example: best and worst quiz mark', problem: 'Read three whole-number quiz marks. Print the best mark, the worst mark, and the difference between them.',
          steps: [
            { en: 'Read the three marks as ints.', code: J`
int q1 = input.nextInt();
int q2 = input.nextInt();
int q3 = input.nextInt();
` },
            { en: 'The best mark: a max inside a max.', code: J`
int best = Math.max(q1, Math.max(q2, q3));
` },
            { en: 'The worst mark: a min inside a min.', code: J`
int worst = Math.min(q1, Math.min(q2, q3));
` },
            { en: 'Print the three answers with labels. The difference is best minus worst.', code: J`
System.out.println("Best: " + best);
System.out.println("Worst: " + worst);
System.out.println("Difference: " + (best - worst));
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int q1 = input.nextInt();
        int q2 = input.nextInt();
        int q3 = input.nextInt();
        int best = Math.max(q1, Math.max(q2, q3));
        int worst = Math.min(q1, Math.min(q2, q3));
        System.out.println("Best: " + best);
        System.out.println("Worst: " + worst);
        System.out.println("Difference: " + (best - worst));
    }
}
`, stdin: '14 18 9', out: J`
Best: 18
Worst: 9
Difference: 9
`, ar: 'max داخل max يعطي الأكبر، و min داخل min يعطي الأصغر.' }
      ],
      mistakes: [
        { title: 'Forgetting the class name', en: 'You must write <code>Math.</code> before the method name.', code: J`
double r = sqrt(25);        // wrong
double r = Math.sqrt(25);   // right
` },
        { title: 'Storing a double result in an int', en: '<code>pow</code> returns a double. Java will not store it in an int box without a cast.', code: J`
int p = Math.pow(2, 3);          // error
double p = Math.pow(2, 3);       // right
int p = (int) Math.pow(2, 3);    // also right
` },
        { title: 'Wrong capital letters', en: 'It is <code>Math</code> with a capital M and <code>sqrt</code> in small letters. <code>math.sqrt</code> and <code>Math.Sqrt</code> do not work.' },
        { title: 'Swapping the pow numbers', en: '<code>Math.pow(2, 3)</code> is 2 to the power 3 = 8. <code>Math.pow(3, 2)</code> is 9. Order matters.' }
      ],
      remember: [
        'Call Math tools like this: <code>Math.name(values)</code>. No import is needed.',
        '<code>pow</code> and <code>sqrt</code> always give a <code>double</code>.',
        '<code>abs</code> removes the minus sign. <code>max</code> and <code>min</code> pick the larger or smaller value.',
        '<code>Math.PI</code> is a value, so it has no parentheses.',
        'A call can go inside another call: <code>Math.max(a, Math.max(b, c))</code>. The inner one runs first.',
        'If one argument is a double, <code>max</code> and <code>min</code> return a double.'
      ],
      rememberAr: 'نستدعي الدوال هكذا: Math.name(values) دون import. pow و sqrt ترجعان double. Math.PI قيمة جاهزة بدون أقواس. يمكن وضع استدعاء داخل استدعاء.',
      practice: [
        { t: 'mcq', q: 'What does <code>System.out.println(Math.pow(3, 2));</code> print?', options: ['<code>9</code>', '<code>9.0</code>', '<code>6</code>', '<code>6.0</code>'], answer: 1, explain: '<code>Math.pow</code> always returns a double.', explainAr: 'الدالة pow ترجع double دائماً.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(Math.sqrt(81));
        System.out.println(Math.abs(-15));
    }
}
`, answer: J`
9.0
15
`, explain: 'sqrt gives a double (9.0). abs of an int is an int (15).' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(Math.max(12, 7));
        System.out.println(Math.min(3.5, 8));
    }
}
`, answer: J`
12
3.5
`, explain: 'max of two ints is an int. min(3.5, 8) is 3.5.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(Math.max(Math.abs(-9), 4));
        System.out.println(Math.sqrt(49) + 1);
    }
}
`, answer: J`
9
8.0
`, explain: 'abs(-9) is 9 and the larger of 9 and 4 is 9. sqrt(49) is 7.0 and 7.0 + 1 is 8.0.' },
        { t: 'fill', q: 'Complete the code. Use the Math methods for power and square root.', code: J`
double area = Math.___(side, 2);
double back = Math.___(area);
`, answers: ['pow', 'sqrt'], explain: 'pow(side, 2) squares the side; sqrt takes the root back.' },
        { t: 'order', q: 'Arrange the lines to print the area of a square with side 4.', lines: ['double side = 4;', 'double area = Math.pow(side, 2);', 'System.out.println(area);'], explain: 'Create the side, compute the area, then print it. It prints 16.0.' },
        { t: 'code', q: 'Read two whole numbers. Print the distance between them (the absolute value of their difference) on the first line, and the larger number on the second line. Do not print any prompt.', qAr: 'اقرأ عددين واطبع المسافة بينهما ثم العدد الأكبر.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        // print distance, then the larger number
    }
}
`, tests: [{ stdin: '3 10', expected: '7\n10' }, { stdin: '-4 6', expected: '10\n6' }, { stdin: '5 5', expected: '0\n5' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        System.out.println(Math.abs(a - b));
        System.out.println(Math.max(a, b));
    }
}
`, hint: 'Use <code>Math.abs(a - b)</code> and <code>Math.max(a, b)</code>.', explain: 'abs removes the minus sign of the difference; max picks the larger number.' },
        { t: 'output', q: 'What is printed? Watch the types.', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(Math.max(5, 2.0));
        System.out.println(Math.pow(10, 0));
        System.out.println(Math.abs(-2.5));
        System.out.println(Math.min(-3, -8));
    }
}
`, answer: J`
5.0
1.0
2.5
-8
`, explain: 'max(5, 2.0) has a double argument, so it gives 5.0. Any number to the power 0 is 1.0 (pow gives a double). abs(-2.5) is 2.5. The smaller of -3 and -8 is -8, and both are ints.', explainAr: 'إذا كان أحد الوسائط double فالجواب double.' },
        { t: 'bug', q: 'This program should read the side of a square room (whole metres) and print its area. It does not compile. Tap the line with the bug.', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int side = input.nextInt();
        int area = Math.pow(side, 2);
        System.out.println("Area: " + area);
    }
}
`, bug: 7, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int side = input.nextInt();
        int area = (int) Math.pow(side, 2);
        System.out.println("Area: " + area);
    }
}
`, hint: 'What type does <code>Math.pow</code> return?', explain: '<code>Math.pow</code> always returns a double, and Java does not put a double into an int box by itself (it could lose the decimals). The cast <code>(int)</code> tells Java that we accept this. Another fix is <code>int area = side * side;</code>.', explainAr: 'pow ترجع double فلا نخزنها في int بدون تحويل (int).' },
        { t: 'code', q: 'Read three whole-number marks. Print the highest mark on the first line and the lowest mark on the second line. Use <code>Math.max</code> and <code>Math.min</code>. Do not print any prompt.', qAr: 'اقرأ ثلاث درجات واطبع الأعلى ثم الأدنى.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        int c = input.nextInt();
        // print the highest, then the lowest
    }
}
`, tests: [{ stdin: '14 18 9', expected: '18\n9' }, { stdin: '20 3 11', expected: '20\n3' }, { stdin: '7 7 7', expected: '7\n7' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        int c = input.nextInt();
        System.out.println(Math.max(a, Math.max(b, c)));
        System.out.println(Math.min(a, Math.min(b, c)));
    }
}
`, hint: 'Put one call inside another: <code>Math.max(a, Math.max(b, c))</code>.', explain: 'The inner call compares two marks, and the outer call compares the winner with the third mark.' }
      ]
    },
    {
      title: 'Rounding numbers: round, ceil and floor',
      titleAr: 'تقريب الأعداد: round و ceil و floor',
      minutes: 35,
      body: [
        { type: 'h', en: 'Why do we round?' },
        { type: 'p', en: 'Prices, marks and measurements often have long decimals like 12.6789. People want whole numbers: "13 riyals", not "12.6789 riyals". Java gives three tools for this, and each one rounds in a different direction.',
          ar: 'نقرّب الأعداد العشرية إلى أعداد صحيحة بثلاث أدوات، لكل منها اتجاه.' },
        { type: 'analogy', title: 'Floor and ceiling of a room', en: 'A room has a <b>floor</b> below you and a <b>ceiling</b> above you. If you stand in the air at height 2.5 metres: the floor is at 2 (below), the ceiling is at 3 (above). <code>floor</code> goes down, <code>ceil</code> goes up. <code>round</code> goes to the nearest whole number.', ar: 'floor للأسفل، ceil للأعلى، round لأقرب عدد صحيح.' },
        { type: 'table', head: ['Method', 'Direction', 'Math.xxx(2.3)', 'Math.xxx(2.6)'], rows: [
          ['<code>Math.floor</code>', 'down', '<code>2.0</code>', '<code>2.0</code>'],
          ['<code>Math.ceil</code>', 'up', '<code>3.0</code>', '<code>3.0</code>'],
          ['<code>Math.round</code>', 'nearest', '<code>2</code>', '<code>3</code>']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        double price = 12.6;
        System.out.println(Math.floor(price));
        System.out.println(Math.ceil(price));
        System.out.println(Math.round(price));
    }
}
`, out: J`
12.0
13.0
13
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['Math.floor(price)', 'Go down to the whole number below 12.6: <code>12.0</code>. It is a double.'],
          ['Math.ceil(price)', 'Go up to the whole number above: <code>13.0</code>. Also a double.'],
          ['Math.round(price)', 'The nearest whole number is 13. The answer is a whole number, so it prints <code>13</code> with no <code>.0</code>.']
        ], ar: 'floor و ceil ترجعان double، أما round فترجع عدداً صحيحاً (long).' },
        { type: 'check', q: 'What does <code>Math.ceil(4.1)</code> give?', options: ['<code>4.0</code>', '<code>5.0</code>', '<code>4</code>', '<code>5</code>'], answer: 1, explain: 'ceil goes up to the next whole number, and the result is a double.' },
        { type: 'h', en: 'round gives a long' },
        { type: 'p', en: 'Why does <code>Math.round</code> print <code>13</code> and not <code>13.0</code>? Because its answer is a <b>long</b>. A <code>long</code> is a whole-number type like <code>int</code>, but its box is bigger, so it can hold very large numbers. Java will not pour a big box into a smaller box by itself. So if you want the answer in an <code>int</code>, you must add the cast <code>(int)</code>.',
          ar: 'round ترجع long، ولتخزينها في int نحتاج التحويل (int).' },
        { type: 'analogy', title: 'A big jug and a small cup', en: 'A long is a big jug and an int is a small cup. Even if the jug holds only a little water, Java will not pour it into the cup unless you say "I know, it fits". The cast <code>(int)</code> is how you say it.' },
        { type: 'code', code: J`
long a = Math.round(7.6);          // fine: a is 8
int b = (int) Math.round(7.6);     // fine: b is 8
int c = Math.round(7.6);           // error: a long does not go into an int
` },
        { type: 'memory', title: 'Four answers, three types', en: 'Here is the first program of this lesson in memory. Look at the type of each box: <code>floor</code> and <code>ceil</code> give doubles, but <code>round</code> gives a long.', code: J`
double price = 12.6;
double down = Math.floor(price);
double up = Math.ceil(price);
long near = Math.round(price);
`, frames: [
          { label: 'After <code>double price = 12.6;</code>', vars: [{ name: 'price', type: 'double', value: '12.6' }] },
          { label: 'After <code>double down = Math.floor(price);</code>', vars: [{ name: 'price', type: 'double', value: '12.6' }, { name: 'down', type: 'double', value: '12.0' }] },
          { label: 'After <code>double up = Math.ceil(price);</code>', vars: [{ name: 'price', type: 'double', value: '12.6' }, { name: 'down', type: 'double', value: '12.0' }, { name: 'up', type: 'double', value: '13.0' }] },
          { label: 'After <code>long near = Math.round(price);</code>', vars: [{ name: 'price', type: 'double', value: '12.6' }, { name: 'down', type: 'double', value: '12.0' }, { name: 'up', type: 'double', value: '13.0' }, { name: 'near', type: 'long', value: '13' }] }
        ], ar: 'لاحظ أن price لم يتغير، وأن round وحدها تعطي عدداً صحيحاً.' },
        { type: 'check', q: 'Which line compiles?', options: ['<code>int n = Math.round(4.5);</code>', '<code>int n = (int) Math.round(4.5);</code>', '<code>int n = Math.ceil(4.5);</code>'], answer: 1, explain: 'round gives a long and ceil gives a double. Neither goes into an int without the cast <code>(int)</code>.' },
        { type: 'h', en: 'Negative numbers and the half rule' },
        { type: 'p', en: 'With negative numbers, "down" means "more negative". The floor of -2.3 is -3.0, not -2.0. And <code>Math.round</code> sends exactly-half values <b>up</b> (toward the bigger number). So <code>Math.round(2.5)</code> is 3, but <code>Math.round(-2.5)</code> is <b>-2</b>.',
          ar: 'floor(-2.3) تساوي -3.0، و round(-2.5) تساوي -2.' },
        { type: 'analogy', title: 'A number line', en: 'Draw a line with 0 in the middle. Down means going left and up means going right. -3 is to the left of -2, so -3 is lower.' },
        { type: 'table', head: ['x', 'Math.round(x)', 'Math.ceil(x)', 'Math.floor(x)'], rows: [
          ['2.3', '2', '3.0', '2.0'],
          ['2.5', '3', '3.0', '2.0'],
          ['-2.3', '-2', '-2.0', '-3.0'],
          ['-2.5', '-2', '-2.0', '-3.0'],
          ['-2.7', '-3', '-2.0', '-3.0']
        ] },
        { type: 'check', q: 'What is <code>Math.floor(-7.2)</code>?', options: ['<code>-7.0</code>', '<code>-8.0</code>', '<code>7.0</code>', '<code>-7</code>'], answer: 1, explain: 'Down on the number line from -7.2 is -8.0.' },
        { type: 'note', kind: 'exam', en: '<code>Math.round(x)</code> works like <code>Math.floor(x + 0.5)</code>. That is why <code>Math.round(-2.5)</code> is -2 and not -3.', ar: 'سؤال متكرر: round(-2.5) تساوي -2.' },
        { type: 'h', en: 'Rounding money to two decimals' },
        { type: 'p', en: 'A bill of <code>12.678</code> riyals is strange, because the smallest coin is one halala (one riyal is 100 halalas). We want <code>12.68</code>. But <code>Math.round</code> only rounds to a whole number. The trick: turn riyals into halalas (multiply by 100), round, then turn back into riyals (divide by <code>100.0</code>).',
          ar: 'لتقريب المبلغ لمنزلتين: نضرب في 100 ثم round ثم نقسم على 100.0.' },
        { type: 'analogy', title: 'Counting in halalas', en: 'A cashier cannot give you 0.8 of a halala. She counts the bill in halalas, rounds to the nearest halala, and then writes it back in riyals. The program does the same three steps.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        double bill = 12.678;
        double rounded = Math.round(bill * 100) / 100.0;
        System.out.println(rounded);
    }
}
`, out: '12.68' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['bill * 100', '12.678 riyals is <code>1267.8</code> halalas.'],
          ['Math.round(...)', 'Round to the nearest halala: <code>1268</code> (a long).'],
          ['... / 100.0', 'Back to riyals: <code>12.68</code>. We divide by <code>100.0</code>, not <code>100</code>. With 100 Java would do whole-number division and give <code>12</code>.']
        ], ar: 'نقسم على 100.0 وليس 100 حتى لا نفقد الكسور.' },
        { type: 'check', q: 'What is <code>Math.round(3.14159 * 100) / 100.0</code>?', options: ['<code>3.0</code>', '<code>3.14</code>', '<code>3.142</code>', '<code>314</code>'], answer: 1, explain: '3.14159 * 100 is 314.159, round gives 314, and 314 / 100.0 is 3.14.' },
        { type: 'table', head: ['Call', 'Result', 'Why'], rows: [
          ['<code>Math.round(0.49)</code>', '<code>0</code>', 'closer to 0 than to 1'],
          ['<code>Math.round(99.5)</code>', '<code>100</code>', 'a half goes up'],
          ['<code>Math.ceil(5.0)</code>', '<code>5.0</code>', 'already whole, nothing to do'],
          ['<code>Math.floor(5.0)</code>', '<code>5.0</code>', 'already whole'],
          ['<code>(int) 9.99</code>', '<code>9</code>', 'a cast cuts, it does not round'],
          ['<code>Math.round(4.996 * 100) / 100.0</code>', '<code>5.0</code>', '499.6 rounds to 500; println shows 5.0, not 5.00']
        ] },
        { type: 'note', kind: 'tip', en: 'println never prints extra zeros: 5.00 is shown as <code>5.0</code>. To always see two decimals (like a price tag), you will use <code>printf</code> in a later lesson of this unit.' },
        { type: 'steps', title: 'Worked example: how many boxes?', problem: 'A shop packs 10 items in each box. A customer orders 25 items. How many boxes are needed? Two boxes are not enough, and 2.5 boxes does not exist, so we must round up.',
          steps: [
            { en: 'Read the number of items and the box size.', code: J`
int items = input.nextInt();
int perBox = input.nextInt();
` },
            { en: 'Divide as doubles. If both were ints, Java would throw away the decimals (25 / 10 = 2). The cast (double) fixes this.', code: J`
double exact = (double) items / perBox;
` },
            { en: 'Round up with ceil, because a part-filled box is still a box.', code: J`
double boxes = Math.ceil(exact);
` },
            { en: 'Print it as a whole number with the (int) cast.', code: J`
System.out.println((int) boxes);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int items = input.nextInt();
        int perBox = input.nextInt();
        double exact = (double) items / perBox;
        double boxes = Math.ceil(exact);
        System.out.println((int) boxes);
    }
}
`, stdin: '25 10', out: '3', ar: 'استخدمنا ceil لأن الصندوق الجزئي يحتاج صندوقاً كاملاً.' },
        { type: 'steps', title: 'Worked example: campus parking fee', problem: 'The campus car park costs 4 riyals for each <b>started</b> hour. 61 minutes is already 2 hours. Read the minutes a car stayed and print the hours charged and the fee.',
          steps: [
            { en: 'Read the minutes as a whole number.', code: J`
int minutes = input.nextInt();
` },
            { en: 'Turn minutes into hours with a double division (60.0), then round up with ceil. Cast to int because we want a whole number of hours.', code: J`
int hours = (int) Math.ceil(minutes / 60.0);
` },
            { en: 'The fee is 4 riyals per hour.', code: J`
int fee = hours * 4;
` },
            { en: 'Print both answers.', code: J`
System.out.println("Hours: " + hours);
System.out.println("Fee: " + fee + " SAR");
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int minutes = input.nextInt();
        int hours = (int) Math.ceil(minutes / 60.0);
        int fee = hours * 4;
        System.out.println("Hours: " + hours);
        System.out.println("Fee: " + fee + " SAR");
    }
}
`, stdin: '130', out: J`
Hours: 3
Fee: 12 SAR
`, ar: '130 دقيقة تساوي 2.17 ساعة، و ceil ترفعها إلى 3 ساعات.' }
      ],
      mistakes: [
        { title: 'Thinking ceil, floor and round return an int', en: '<code>ceil</code> and <code>floor</code> return a double, and <code>round</code> returns a long. None of them goes into an int box without a cast.', code: J`
int n = Math.ceil(2.1);          // error: double
int m = Math.round(2.6);         // error: long
int n = (int) Math.ceil(2.1);    // right
int m = (int) Math.round(2.6);   // right
` },
        { title: 'Assuming round is the same as casting', en: '<code>(int) 2.9</code> cuts the decimals and gives 2. <code>Math.round(2.9)</code> gives 3.' },
        { title: 'Wrong direction for negatives', en: '<code>Math.ceil(-2.3)</code> is -2.0 (up), and <code>Math.floor(-2.3)</code> is -3.0 (down).' },
        { title: 'Integer division before ceil', en: '<code>Math.ceil(25 / 10)</code> is 2.0, because 25 / 10 is already 2. Make one side a double first.', code: J`
Math.ceil(25 / 10)          // 2.0 (wrong idea)
Math.ceil(25 / 10.0)        // 3.0 (right)
` }
      ],
      remember: [
        '<code>floor</code> goes down, <code>ceil</code> goes up, <code>round</code> goes to the nearest.',
        '<code>floor</code> and <code>ceil</code> return a double. <code>round</code> returns a whole number (long).',
        '"Down" for a negative number means a more negative number.',
        '<code>Math.round(-2.5)</code> is -2, because halves go up.',
        'Use a double in the division before you use <code>ceil</code>.',
        'Two decimals: <code>Math.round(x * 100) / 100.0</code>. To store round in an int: <code>(int) Math.round(x)</code>.'
      ],
      rememberAr: 'floor للأسفل و ceil للأعلى و round لأقرب عدد. round(-2.5) تساوي -2. اجعل القسمة بأعداد عشرية قبل ceil. round ترجع long فنحتاج (int) لتخزينها في int.',
      practice: [
        { t: 'mcq', q: 'What does <code>Math.ceil(2.1)</code> give?', options: ['<code>2.0</code>', '<code>3.0</code>', '<code>2</code>', '<code>3</code>'], answer: 1, explain: 'ceil goes up and returns a double.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(Math.floor(4.9));
        System.out.println(Math.ceil(4.1));
    }
}
`, answer: J`
4.0
5.0
`, explain: 'floor goes down to 4.0 and ceil goes up to 5.0.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(Math.round(2.6));
        System.out.println(Math.round(2.4));
    }
}
`, answer: J`
3
2
`, explain: 'round picks the nearest whole number and prints it without .0.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(Math.ceil(7.2));
        System.out.println(Math.floor(-7.2));
        System.out.println(Math.round(7.5));
        System.out.println(Math.abs(-3.5));
    }
}
`, answer: J`
8.0
-8.0
8
3.5
`, explain: 'ceil(7.2) = 8.0. floor(-7.2) = -8.0. round(7.5) = 8. abs(-3.5) = 3.5.' },
        { t: 'mcq', q: 'What is the value of <code>Math.round(-3.5)</code>?', options: ['<code>-4</code>', '<code>-3</code>', '<code>-3.0</code>', '<code>-4.0</code>'], answer: 1, explain: 'round(x) is floor(x + 0.5) = floor(-3.0) = -3, and round returns a whole number, not a double.' },
        { t: 'fill', q: 'Boxes hold 10 items each. Complete the code to round up.', code: J`
double boxes = Math.___((double) items / 10);
`, answers: ['ceil'], explain: 'A part-filled box still counts as a box, so round up with ceil.' },
        { t: 'order', q: 'Arrange the lines so the program prints the rounded price 13.', lines: ['double price = 12.6;', 'long rounded = Math.round(price);', 'System.out.println(rounded);'], explain: 'Math.round of a double gives a long.' },
        { t: 'code', q: 'Read one decimal number. Print three lines: its <code>Math.round</code>, then its <code>Math.ceil</code>, then its <code>Math.floor</code>. Do not print any prompt.', qAr: 'اقرأ عدداً عشرياً واطبع round ثم ceil ثم floor.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double x = input.nextDouble();
        // print round, ceil, floor
    }
}
`, tests: [{ stdin: '2.3', expected: '2\n3.0\n2.0' }, { stdin: '-2.5', expected: '-2\n-2.0\n-3.0' }, { stdin: '7.5', expected: '8\n8.0\n7.0' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double x = input.nextDouble();
        System.out.println(Math.round(x));
        System.out.println(Math.ceil(x));
        System.out.println(Math.floor(x));
    }
}
`, hint: 'Three println lines, one for each method.', explain: 'Each method rounds in its own direction; round prints as a whole number.' },
        { t: 'bug', q: 'This program should round a price to the nearest riyal and print it. It does not compile. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        double price = 18.75;
        int rounded = Math.round(price);
        System.out.println("About " + rounded + " SAR");
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        double price = 18.75;
        int rounded = (int) Math.round(price);
        System.out.println("About " + rounded + " SAR");
    }
}
`, hint: 'What type does <code>Math.round</code> give back for a double?', explain: '<code>Math.round</code> of a double returns a <code>long</code>, and a long does not go into an int box by itself. Add the cast <code>(int)</code>, or declare <code>long rounded</code>. The program then prints <code>About 19 SAR</code>.', explainAr: 'round ترجع long، فنضيف (int) أو نجعل المتغير long.' },
        { t: 'output', q: 'What is printed? Look carefully at <code>100</code> and <code>100.0</code>.', code: J`
public class Main {
    public static void main(String[] args) {
        double bill = 12.678;
        System.out.println(Math.round(bill * 100) / 100.0);
        System.out.println(Math.round(bill * 100) / 100);
        System.out.println((int) bill);
    }
}
`, answer: J`
12.68
12
12
`, explain: 'bill * 100 is 1267.8 and round gives the long 1268. Divided by 100.0 it is 12.68. Divided by the whole number 100 it is whole-number division: 12. The cast <code>(int)</code> cuts 12.678 to 12.' },
        { t: 'code', q: 'A car park costs 4 riyals for each started hour. Read the number of minutes (a whole number). Print the hours charged on the first line and the fee in riyals on the second line, like the worked example: <code>Hours: 3</code> and <code>Fee: 12 SAR</code>. Do not print any prompt.', qAr: 'اقرأ عدد الدقائق واطبع الساعات المحسوبة والرسوم.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int minutes = input.nextInt();
        // hours: round up minutes / 60.0
    }
}
`, tests: [{ stdin: '130', expected: 'Hours: 3\nFee: 12 SAR' }, { stdin: '60', expected: 'Hours: 1\nFee: 4 SAR' }, { stdin: '61', expected: 'Hours: 2\nFee: 8 SAR' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int minutes = input.nextInt();
        int hours = (int) Math.ceil(minutes / 60.0);
        System.out.println("Hours: " + hours);
        System.out.println("Fee: " + (hours * 4) + " SAR");
    }
}
`, hint: 'Use <code>(int) Math.ceil(minutes / 60.0)</code>. Divide by 60.0, not 60.', explain: 'Exactly 60 minutes is 1.0 hour, so ceil keeps it at 1. 61 minutes is a little more than 1, so ceil makes it 2.' }
      ]
    },
    {
      title: 'Random numbers',
      titleAr: 'الأعداد العشوائية',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why random numbers?' },
        { type: 'p', en: 'Games roll dice. Quiz apps pick a random question. A lottery picks a random winner. Java can make a random number for you with <code>Math.random()</code>.',
          ar: 'Math.random() تعطي عدداً عشوائياً من النوع double.' },
        { type: 'analogy', title: 'A spinning wheel', en: 'Imagine a wheel with a pointer that can stop anywhere from the start (0) up to, but not touching, the end (1). The place where it stops is the random number: maybe 0.2, maybe 0.7316.' },
        { type: 'code', code: J`
double r = Math.random();
` },
        { type: 'lines', rows: [
          ['Math.random()', 'Gives a new random <code>double</code> each time. It is at least 0.0 and always <b>less than</b> 1.0.'],
          ['double r = ...', 'Keep it in a double box. The value changes each time the program runs.']
        ], ar: 'القيمة r تكون 0.0 &lt;= r &lt; 1.0، ولا تساوي 1 أبداً.' },
        { type: 'check', q: 'Which value can <code>Math.random()</code> NEVER give?', options: ['0.0', '0.5', '0.999', '1.0'], answer: 3, explain: 'The number is always less than 1.0.' },
        { type: 'p', en: 'Each call gives a <b>new</b> number. If you call <code>Math.random()</code> two times, you get two different numbers. And if you run the program again tomorrow, you get other numbers again. This is the whole point of "random": nobody, not even the programmer, knows the value before it appears.' },
        { type: 'code', code: J`
double first = Math.random();     // maybe 0.4182...
double second = Math.random();    // maybe 0.9035..., a different number
` },
        { type: 'note', kind: 'tip', en: 'Because the value changes every time, an exam question can never ask "what does this random program print?". It asks about the <b>range</b>: the smallest and the largest value that can appear.', ar: 'لا يمكن توقع العدد العشوائي، لذلك نسأل عن المدى: أصغر قيمة وأكبر قيمة.' },
        { type: 'h', en: 'From 0..1 to a dice number 1..6' },
        { type: 'p', en: 'We want whole numbers like 1 to 6, not decimals between 0 and 1. We do it in three small steps. (1) Multiply by 6: now the number is from 0.0 up to (not including) 6.0. (2) Cut the decimals with <code>(int)</code>: now 0, 1, 2, 3, 4 or 5. (3) Add 1: now 1 to 6.' },
        { type: 'analogy', title: 'Ruler and cutting', en: 'Stretch the rubber ruler from 0..1 to 0..6 (multiply). Cut off the part after the decimal point (cast to int). Move everything up by one (add 1).' },
        { type: 'code', code: J`
int die = 1 + (int) (Math.random() * 6);
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['Math.random() * 6', 'A decimal from 0.0 to 5.999...'],
          ['(int) (...)', 'Cut off the decimals: 0, 1, 2, 3, 4 or 5.'],
          ['1 + ...', 'Move the range up: 1, 2, 3, 4, 5 or 6.']
        ], ar: 'نضرب ثم نقص الكسر ثم نجمع الحد الأدنى.' },
        { type: 'check', q: 'Which one gives a whole number from 1 to 10?', options: ['<code>(int) (Math.random() * 10)</code>', '<code>1 + (int) (Math.random() * 10)</code>', '<code>1 + (int) (Math.random() * 11)</code>'], answer: 1, explain: 'There are 10 values, so multiply by 10 (0 to 9) and add 1 (1 to 10).' },
        { type: 'p', en: 'Let us test the dice formula with some pretend values of <code>r</code> (the random number). Follow each row from left to right. The smallest r gives 1 and the largest r gives 6, so every face of the die can appear.' },
        { type: 'table', head: ['r (pretend)', 'r * 6', '(int) cut', '1 + ...'], rows: [
          ['0.0', '0.0', '0', '<b>1</b>'],
          ['0.25', '1.5', '1', '<b>2</b>'],
          ['0.5', '3.0', '3', '<b>4</b>'],
          ['0.75', '4.5', '4', '<b>5</b>'],
          ['0.99', '5.94', '5', '<b>6</b>']
        ] },
        { type: 'memory', title: 'The dice formula, one step at a time', en: 'We split the formula into small steps and use the pretend number 0.75, so we can watch each box get its value.', code: J`
double r = 0.75;
double stretched = r * 6;
int cut = (int) stretched;
int die = 1 + cut;
`, frames: [
          { label: 'After <code>double r = 0.75;</code>', vars: [{ name: 'r', type: 'double', value: '0.75' }] },
          { label: 'After <code>double stretched = r * 6;</code>', vars: [{ name: 'r', type: 'double', value: '0.75' }, { name: 'stretched', type: 'double', value: '4.5' }] },
          { label: 'After <code>int cut = (int) stretched;</code>', vars: [{ name: 'r', type: 'double', value: '0.75' }, { name: 'stretched', type: 'double', value: '4.5' }, { name: 'cut', type: 'int', value: '4' }] },
          { label: 'After <code>int die = 1 + cut;</code>', vars: [{ name: 'r', type: 'double', value: '0.75' }, { name: 'stretched', type: 'double', value: '4.5' }, { name: 'cut', type: 'int', value: '4' }, { name: 'die', type: 'int', value: '5' }] }
        ], ar: 'الضرب يمدّ المدى، و (int) يقص الكسر، والجمع ينقل البداية.' },
        { type: 'h', en: 'The general formula' },
        { type: 'p', en: 'To get a whole number from <code>a</code> to <code>b</code> (both included): <code>a + (int)(Math.random() * (b - a + 1))</code>. The number of possible values is <code>b - a + 1</code>.' },
        { type: 'table', head: ['What you want', 'Range', 'Count', 'Code'], rows: [
          ['a die', '1 to 6', '6', '<code>1 + (int) (Math.random() * 6)</code>'],
          ['a coin (0 = heads, 1 = tails)', '0 to 1', '2', '<code>(int) (Math.random() * 2)</code>'],
          ['a test mark', '50 to 100', '51', '<code>50 + (int) (Math.random() * 51)</code>'],
          ['a two-digit number', '10 to 99', '90', '<code>10 + (int) (Math.random() * 90)</code>'],
          ['a 4-digit SMS code', '1000 to 9999', '9000', '<code>1000 + (int) (Math.random() * 9000)</code>']
        ] },
        { type: 'check', q: 'You want a random floor number in a building with floors 1 to 20. Which count do you multiply by?', options: ['19', '20', '21', '1'], answer: 1, explain: 'b - a + 1 = 20 - 1 + 1 = 20 values.' },
        { type: 'h', en: 'Random choices with if' },
        { type: 'p', en: 'A random number becomes really useful together with an <code>if</code> from Unit 3. A game can toss a coin: make a random 0 or 1, then print Heads for 0 and Tails for 1. A quiz app can pick one of two questions in the same way. Below we use a pretend value of r again, so the output can be checked.',
          ar: 'نجمع العدد العشوائي مع if لنختار بين أمرين، مثل رمي قطعة نقود.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        double r = 0.7;
        int coin = (int) (r * 2);
        if (coin == 0) {
            System.out.println("Heads");
        } else {
            System.out.println("Tails");
        }
    }
}
`, out: 'Tails' },
        { type: 'lines', rows: [
          ['int coin = (int) (r * 2);', '0.7 * 2 = 1.4, cut to <code>1</code>. Any r below 0.5 gives 0, and any r from 0.5 gives 1: a fair coin.'],
          ['if (coin == 0)', 'coin is 1, so the else part runs and prints <code>Tails</code>.']
        ] },
        { type: 'check', q: 'With the pretend value <code>r = 0.3</code>, what does the coin program print?', options: ['Heads', 'Tails', 'Nothing', '0.6'], answer: 0, explain: '0.3 * 2 = 0.6, cut to 0, so Heads.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int die = 1 + (int) (Math.random() * 6);
        int mark = 50 + (int) (Math.random() * 51);
        System.out.println(die >= 1 && die <= 6);
        System.out.println(mark >= 50 && mark <= 100);
    }
}
`, out: J`
true
true
` },
        { type: 'lines', rows: [
          ['int mark = 50 + (int) (Math.random() * 51);', 'From 50 to 100: that is 100 - 50 + 1 = 51 values.'],
          ['System.out.println(die >= 1 && die <= 6);', 'We cannot print the random number and compare it with a fixed text, so we check the range. It is always true.']
        ] },
        { type: 'note', kind: 'tip', en: 'To understand a random formula, test it with pretend values of r: try r = 0.0 (the smallest) and r = 0.99 (almost the biggest).' },
        { type: 'steps', title: 'Worked example: test the dice formula', problem: 'Instead of a real random number we use a fixed pretend number r, so we can predict the answer. Show the dice number for r = 0.5.',
          steps: [
            { en: 'The pretend random number.', code: J`
double r = 0.5;
` },
            { en: 'Multiply by 6: 0.5 * 6 = 3.0.', code: J`
double stretched = r * 6;
` },
            { en: 'Cut the decimals: 3. Then add 1: 4.', code: J`
int die = 1 + (int) stretched;
` },
            { en: 'Print the die.', code: J`
System.out.println(die);
` }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        double r = 0.5;
        double stretched = r * 6;
        int die = 1 + (int) stretched;
        System.out.println(die);
    }
}
`, out: '4', ar: 'استبدلنا العدد العشوائي بقيمة ثابتة لنتحقق من الصيغة.' },
        { type: 'steps', title: 'Worked example: a 4-digit SMS code', problem: 'An app sends a 4-digit code (1000 to 9999) to your phone when you log in. Build the formula, and test it with the pretend random number r = 0.25.',
          steps: [
            { en: 'Find a, b and the count: a = 1000, b = 9999, count = 9999 - 1000 + 1 = 9000.', code: J`
double r = 0.25;
` },
            { en: 'Stretch and cut: 0.25 * 9000 = 2250.0, the cast gives 2250.', code: J`
int cut = (int) (r * 9000);
` },
            { en: 'Move the start up to 1000: 1000 + 2250 = 3250.', code: J`
int code = 1000 + cut;
` },
            { en: 'Print the code. In the real app, the first line would be <code>double r = Math.random();</code>.', code: J`
System.out.println("Your code: " + code);
` }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        double r = 0.25;
        int cut = (int) (r * 9000);
        int code = 1000 + cut;
        System.out.println("Your code: " + code);
    }
}
`, out: 'Your code: 3250', ar: 'العدد من 1000 إلى 9999 فيه 9000 قيمة.' }
      ],
      mistakes: [
        { title: 'Casting too early', en: '<code>(int) Math.random() * 6</code> casts first: the random number becomes 0, and 0 * 6 is always 0. Put parentheses around everything you want to cast.', code: J`
int d = (int) Math.random() * 6;     // always 0!
int d = (int) (Math.random() * 6);   // right
` },
        { title: 'Wrong count of values', en: 'For 1 to 6 multiply by 6, not by 5 or 7. The count is b - a + 1.' },
        { title: 'Forgetting to add the start value', en: 'Without the <code>1 +</code> the dice would give 0 to 5.' },
        { title: 'Expecting the same number each time', en: 'A random number is different each run, so you cannot predict the printed value. Test the range instead.' }
      ],
      remember: [
        '<code>Math.random()</code> gives a double with <code>0.0 &lt;= r &lt; 1.0</code>.',
        'To get a whole number from a to b: <code>a + (int)(Math.random() * (b - a + 1))</code>.',
        'The number of values is <code>b - a + 1</code>.',
        'Put parentheses around <code>Math.random() * n</code> before the <code>(int)</code> cast.'
      ],
      rememberAr: 'Math.random() تعطي 0.0 &lt;= r &lt; 1.0. الصيغة: a + (int)(Math.random() * (b - a + 1)). ضع أقواساً حول الضرب قبل التحويل إلى int.',
      practice: [
        { t: 'mcq', q: 'What range does <code>Math.random()</code> produce?', options: ['1 to 100', '0.0 up to but not including 1.0', '0 to 10', '-1.0 to 1.0'], answer: 1, explain: 'Always at least 0.0 and less than 1.0.' },
        { t: 'mcq', q: 'Which expression gives a whole number from 1 to 6?', options: ['<code>(int) (Math.random() * 6)</code>', '<code>1 + (int) (Math.random() * 6)</code>', '<code>1 + (int) (Math.random() * 7)</code>', '<code>Math.random() * 6</code>'], answer: 1, explain: 'Multiply by 6 (0 to 5), then add 1 (1 to 6).' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println((int) (0.99 * 10));
        System.out.println((int) (0.05 * 10));
    }
}
`, answer: J`
9
0
`, explain: '0.99 * 10 is 9.9 and the cast cuts it to 9. 0.05 * 10 is 0.5 and the cast gives 0.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        double r = 0.5;
        System.out.println(1 + (int) (r * 6));
    }
}
`, answer: '4', explain: '0.5 * 6 = 3.0, cast gives 3, plus 1 is 4.' },
        { t: 'fill', q: 'Complete the statement so that <code>die</code> is a random whole number from 1 to 6.', code: J`
int die = ___ + (int) (Math.random() * ___);
`, answers: ['1', '6'], explain: 'random * 6 is in [0, 6), the cast gives 0..5, and adding 1 gives 1..6.' },
        { t: 'mcq', q: 'Which expression gives a random whole number between 10 and 20 <b>inclusive</b>?', options: ['<code>10 + (int) (Math.random() * 10)</code>', '<code>10 + (int) (Math.random() * 11)</code>', '<code>(int) (Math.random() * 20)</code>', '<code>10 + Math.random() * 11</code>'], answer: 1, explain: 'There are 20 - 10 + 1 = 11 values. The last option is not cast to int, so it is a double.' },
        { t: 'order', q: 'Arrange the lines so the program prints 7 (using a pretend random number 0.7).', lines: ['double r = 0.7;', 'int pick = 5 + (int) (r * 4);', 'System.out.println(pick);'], explain: '0.7 * 4 = 2.8, cast gives 2, plus 5 is 7.' },
        { t: 'code', q: 'Read a pretend random number r (a decimal from 0.0 to 0.99). Print the dice number from 1 to 6 that the formula gives. Do not print any prompt.', qAr: 'اقرأ عدداً عشوائياً وهمياً r واطبع رقم النرد.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double r = input.nextDouble();
        // print the dice number
    }
}
`, tests: [{ stdin: '0.0', expected: '1' }, { stdin: '0.5', expected: '4' }, { stdin: '0.99', expected: '6' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double r = input.nextDouble();
        int die = 1 + (int) (r * 6);
        System.out.println(die);
    }
}
`, hint: 'Use <code>1 + (int) (r * 6)</code>.', explain: 'The same formula as with Math.random(), but with r typed by the user.' },
        { t: 'bug', q: 'This dice program always prints <code>You rolled 1</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int die = 1 + (int) Math.random() * 6;
        System.out.println("You rolled " + die);
    }
}
`, bug: 3, fix: J`
public class Main {
    public static void main(String[] args) {
        int die = 1 + (int) (Math.random() * 6);
        System.out.println("You rolled " + die);
    }
}
`, hint: 'What does the cast <code>(int)</code> apply to?', explain: 'A cast applies only to the value right after it. <code>(int) Math.random()</code> cuts a number like 0.73 to 0 first, then 0 * 6 is 0, and 1 + 0 is always 1. With parentheses, <code>(int) (Math.random() * 6)</code> multiplies first and then cuts, giving 0 to 5.', explainAr: 'ضع الضرب بين أقواس قبل (int)، وإلا يصبح العدد صفراً دائماً.' },
        { t: 'output', q: 'We test the formula for a whole number from 10 to 20 with three pretend values of r. What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(10 + (int) (0.0 * 11));
        System.out.println(10 + (int) (0.5 * 11));
        System.out.println(10 + (int) (0.99 * 11));
    }
}
`, answer: J`
10
15
20
`, explain: '0.0 * 11 = 0, so 10. 0.5 * 11 = 5.5, cut to 5, so 15. 0.99 * 11 = 10.89, cut to 10, so 20. The smallest and largest values are 10 and 20, as we wanted.' },
        { t: 'code', q: 'Read three numbers: a whole number <code>a</code>, a whole number <code>b</code> (b is bigger), and a pretend random number <code>r</code> (0.0 to 0.99). Print the whole number from a to b that the formula <code>a + (int) (r * (b - a + 1))</code> gives. Do not print any prompt.', qAr: 'اقرأ a و b و r واطبع ناتج صيغة العدد العشوائي.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        double r = input.nextDouble();
        // use the general formula
    }
}
`, tests: [{ stdin: '1 6 0.5', expected: '4' }, { stdin: '50 100 0.99', expected: '100' }, { stdin: '1000 9999 0.25', expected: '3250' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        double r = input.nextDouble();
        int value = a + (int) (r * (b - a + 1));
        System.out.println(value);
    }
}
`, hint: 'The count of values is <code>b - a + 1</code>. Keep the parentheses around <code>r * (b - a + 1)</code>.', explain: 'For 50 to 100 the count is 51, and 0.99 * 51 = 50.49, cut to 50, so 50 + 50 = 100.' }
      ]
    },
    {
      title: 'Neat output with printf',
      titleAr: 'مخرجات منسقة باستخدام printf',
      minutes: 35,
      body: [
        { type: 'h', en: 'Why not just println?' },
        { type: 'p', en: 'Try printing a price: <code>System.out.println(37.5);</code> shows <code>37.5</code>. But a shop shows <code>37.50</code>, always two decimals. With <code>println</code> you cannot control the decimals. The tool <code>System.out.printf</code> can. The letter f means <b>formatted</b>.',
          ar: 'printf تطبع قيمنا بالتنسيق الذي نريده، مثل عدد المنازل العشرية.' },
        { type: 'analogy', title: 'A form with blanks', en: 'Think of a form: "Name: ______  Age: ______". The text is fixed and the blanks are filled later. A printf format is the same. You write the text with <b>placeholders</b> that start with <code>%</code>, and then you give the values that fill them.', ar: 'نكتب نصاً فيه فراغات تبدأ بـ % ثم نعطي القيم.' },
        { type: 'code', code: J`
System.out.printf("Total: %.2f SAR%n", 37.5);
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['System.out.printf(', 'Print using a format.'],
          ['"Total: %.2f SAR%n"', 'The format text. <code>%.2f</code> is a blank for a decimal number with 2 digits after the point. <code>%n</code> means "new line".'],
          ['37.5', 'The value that fills the blank. Java prints <code>37.50</code>.']
        ], ar: 'القيمة تملأ الفراغ %.2f فتظهر 37.50.' },
        { type: 'check', q: 'What does <code>System.out.printf("%.2f%n", 3.14159);</code> print?', options: ['<code>3.14159</code>', '<code>3.14</code>', '<code>3.1</code>', '<code>3</code>'], answer: 1, explain: '<code>.2</code> means two digits after the decimal point, with rounding.' },
        { type: 'p', en: 'There is a second reason to use printf. A computer keeps decimals in binary, so some simple sums give ugly answers. Run this program and look at the first line. The value is almost 0.3, but not exactly. With <code>%.2f</code> the user sees a clean <code>0.30</code>.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        double total = 0.1 + 0.2;
        System.out.println(total);
        System.out.printf("%.2f%n", total);
    }
}
`, out: J`
0.30000000000000004
0.30
` },
        { type: 'p', en: 'Important: printf only changes how the number <b>looks</b> on the screen. The value inside the variable stays exactly the same. The memory picture shows this.', ar: 'printf تغيّر شكل الطباعة فقط، ولا تغيّر القيمة المخزنة في المتغير.' },
        { type: 'memory', title: 'printf does not change the variable', code: J`
double price = 12.5;
System.out.printf("%.2f%n", price);   // shows 12.50
`, frames: [
          { label: 'After <code>double price = 12.5;</code>', vars: [{ name: 'price', type: 'double', value: '12.5' }] },
          { label: 'After the printf line (the screen shows <code>12.50</code>)', vars: [{ name: 'price', type: 'double', value: '12.5' }] }
        ], ar: 'الشاشة تعرض 12.50 لكن المتغير ما زال 12.5.' },
        { type: 'h', en: 'The placeholders' },
        { type: 'table', head: ['Placeholder', 'For', 'Example', 'Output'], rows: [
          ['<code>%d</code>', 'whole number (int, long)', '<code>printf("%d", 42)</code>', '<code>42</code>'],
          ['<code>%f</code>', 'decimal number (6 digits)', '<code>printf("%f", 3.5)</code>', '<code>3.500000</code>'],
          ['<code>%.2f</code>', 'decimal with 2 digits', '<code>printf("%.2f", 3.14159)</code>', '<code>3.14</code>'],
          ['<code>%s</code>', 'text (String)', '<code>printf("%s", "Riyadh")</code>', '<code>Riyadh</code>'],
          ['<code>%c</code>', 'one character', '<code>printf("%c", \'A\')</code>', '<code>A</code>'],
          ['<code>%n</code>', 'new line', '<code>printf("Hi%n")</code>', 'Hi and a line break']
        ] },
        { type: 'analogy', title: 'The right box for the right thing', en: 'Each blank accepts only one kind of thing. A "number" box does not accept text, and a "text" box does not accept decimals. The letter after <code>%</code> tells which box it is: <b>d</b> for whole numbers, <b>f</b> for decimals, <b>s</b> for text.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String item = "Notebook";
        int qty = 3;
        double price = 12.5;
        System.out.printf("Item: %s%n", item);
        System.out.printf("Qty: %d%n", qty);
        System.out.printf("Price: %.2f SAR%n", price);
    }
}
`, out: J`
Item: Notebook
Qty: 3
Price: 12.50 SAR
` },
        { type: 'lines', rows: [
          ['System.out.printf("Item: %s%n", item);', '<code>%s</code> is replaced by the text in <code>item</code>.'],
          ['System.out.printf("Qty: %d%n", qty);', '<code>%d</code> is replaced by the whole number in <code>qty</code>.'],
          ['System.out.printf("Price: %.2f SAR%n", price);', '<code>%.2f</code> is replaced by <code>12.5</code> written as <code>12.50</code>.']
        ], ar: 'القيم تُوضع بنفس ترتيب الفراغات.' },
        { type: 'check', q: 'Which placeholder do you use for an <code>int</code> variable?', options: ['<code>%s</code>', '<code>%d</code>', '<code>%f</code>', '<code>%c</code>'], answer: 1, explain: '<code>d</code> is for whole numbers (like digits).' },
        { type: 'h', en: 'Many blanks in one line' },
        { type: 'p', en: 'One format can have many placeholders. Java fills them from left to right with the values after the format, separated by commas. The first value goes into the first blank, the second value into the second blank, and so on. Count them: the number of blanks and the number of values must be the same.' },
        { type: 'analogy', title: 'Passengers and seats', en: 'The placeholders are seats in a bus and the values are passengers waiting in a line. The first passenger takes the first seat, the second takes the second seat. Each seat has a sign: <b>d</b> seats are for whole numbers, <b>f</b> seats for decimals, <b>s</b> seats for text. A passenger in the wrong seat stops the bus (the program crashes).' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.printf("%s: %d x %.2f = %.2f SAR%n", "Juice", 2, 4.5, 9.0);
    }
}
`, out: 'Juice: 2 x 4.50 = 9.00 SAR' },
        { type: 'lines', rows: [
          ['%s', 'Seat 1, text: <code>Juice</code>.'],
          ['%d', 'Seat 2, whole number: <code>2</code>.'],
          ['%.2f', 'Seat 3, decimal with two digits: <code>4.50</code>.'],
          ['%.2f', 'Seat 4, decimal with two digits: <code>9.00</code>.']
        ], ar: 'أربعة فراغات تحتاج أربع قيم بنفس الترتيب.' },
        { type: 'table', head: ['Call', 'Output'], rows: [
          ['<code>printf("%.3f", Math.PI)</code>', '<code>3.142</code>'],
          ['<code>printf("%.1f", 2.96)</code>', '<code>3.0</code>'],
          ['<code>printf("%d", Math.round(7.6))</code>', '<code>8</code> (round gives a whole number)'],
          ['<code>printf("%s", 3.5)</code>', '<code>3.5</code> (%s also prints numbers as text)'],
          ['<code>printf("Room %s-%d", "F", 101)</code>', '<code>Room F-101</code>']
        ] },
        { type: 'note', kind: 'tip', en: '<code>printf</code> does not go to a new line by itself, unlike <code>println</code>. End the format with <code>%n</code> when you want a new line.', ar: 'printf لا تنتقل لسطر جديد تلقائياً، أضف %n.' },
        { type: 'note', kind: 'warn', en: 'The placeholder must match the value. <code>printf("%d", 3.5)</code> compiles but crashes when it runs (<code>IllegalFormatConversionException</code>). Use <code>%f</code> for decimals.' },
        { type: 'steps', title: 'Worked example: a receipt total', problem: 'Read the number of notebooks and the price of one notebook (with decimals). Print the total price with exactly two decimals, like <code>Total: 37.50 SAR</code>.',
          steps: [
            { en: 'Read the quantity (whole number) and the price (decimal).', code: J`
int qty = input.nextInt();
double price = input.nextDouble();
` },
            { en: 'Multiply to get the total.', code: J`
double total = qty * price;
` },
            { en: 'Print with a placeholder for the decimal total, and a new line at the end.', code: J`
System.out.printf("Total: %.2f SAR%n", total);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int qty = input.nextInt();
        double price = input.nextDouble();
        double total = qty * price;
        System.out.printf("Total: %.2f SAR%n", total);
    }
}
`, stdin: '3 12.5', out: 'Total: 37.50 SAR', ar: 'استخدمنا %.2f لإظهار منزلتين عشريتين.' },
        { type: 'steps', title: 'Worked example: average of three marks', problem: 'Read three whole-number marks. Print their sum, and their average with one decimal, like <code>Sum: 253</code> and <code>Average: 84.3</code>.',
          steps: [
            { en: 'Read the three marks as ints.', code: J`
int m1 = input.nextInt();
int m2 = input.nextInt();
int m3 = input.nextInt();
` },
            { en: 'The sum is a whole number.', code: J`
int sum = m1 + m2 + m3;
` },
            { en: 'Divide by <code>3.0</code> (not 3) so that Java keeps the decimals.', code: J`
double avg = sum / 3.0;
` },
            { en: 'Print the sum with <code>%d</code> and the average with <code>%.1f</code>.', code: J`
System.out.printf("Sum: %d%n", sum);
System.out.printf("Average: %.1f%n", avg);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int m1 = input.nextInt();
        int m2 = input.nextInt();
        int m3 = input.nextInt();
        int sum = m1 + m2 + m3;
        double avg = sum / 3.0;
        System.out.printf("Sum: %d%n", sum);
        System.out.printf("Average: %.1f%n", avg);
    }
}
`, stdin: '85 90 78', out: J`
Sum: 253
Average: 84.3
`, ar: 'المجموع int فنستخدم %d، والمتوسط double فنستخدم %.1f.' }
      ],
      mistakes: [
        { title: 'Wrong placeholder for the value', en: '<code>%d</code> with a decimal crashes the program.', code: J`
System.out.printf("%d", 3.5);    // crashes at run time
System.out.printf("%.1f", 3.5);  // right
` },
        { title: 'Forgetting %n', en: 'The next output stays on the same line.', code: J`
System.out.printf("Hello");
System.out.printf("World");   // prints HelloWorld
` },
        { title: 'Not enough values', en: 'Every placeholder needs a value. Two placeholders and one value is an error at run time.' },
        { title: 'Mixing the order', en: 'Values fill the blanks from left to right. <code>printf("%s is %d", 19, "Huda")</code> crashes because 19 goes into the text box.' }
      ],
      remember: [
        '<code>%d</code> whole number, <code>%f</code> decimal, <code>%s</code> text, <code>%c</code> character, <code>%n</code> new line.',
        '<code>%.2f</code> prints two digits after the decimal point, rounded.',
        'Values fill the blanks in the same order, from left to right.',
        'printf does not add a new line. Add <code>%n</code>.',
        'printf changes only how a value looks. The variable keeps its exact value.'
      ],
      rememberAr: '%d للأعداد الصحيحة و %f للعشرية و %s للنص و %c لحرف و %n لسطر جديد. %.2f تعني منزلتين عشريتين. القيم تملأ الفراغات بالترتيب.',
      practice: [
        { t: 'mcq', q: 'Which placeholder prints a whole number?', options: ['<code>%d</code>', '<code>%f</code>', '<code>%s</code>', '<code>%n</code>'], answer: 0, explain: 'd is for whole numbers.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.printf("%d items%n", 5);
        System.out.printf("%s%n", "Riyadh");
    }
}
`, answer: J`
5 items
Riyadh
`, explain: '%d is replaced by 5 and %s by Riyadh. %n ends each line.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.printf("%.2f%n", 3.14159);
        System.out.printf("%.1f%n", 2.96);
    }
}
`, answer: J`
3.14
3.0
`, explain: '3.14159 rounded to two decimals is 3.14. 2.96 rounded to one decimal is 3.0.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.printf("%s is %d years old%n", "Huda", 19);
        System.out.printf("%c%c%n", 'O', 'K');
    }
}
`, answer: J`
Huda is 19 years old
OK
`, explain: 'Each placeholder is replaced by the next value in order.' },
        { t: 'mcq', q: 'What happens with <code>System.out.printf("%d", 3.5);</code>?', options: ['It prints 3', 'It prints 3.5', 'It crashes when it runs', 'It does not compile'], answer: 2, explain: 'It compiles, but %d cannot print a decimal, so Java throws an exception at run time.' },
        { t: 'fill', q: 'Complete the format so the program prints <code>Total: 37.50 SAR</code> and then a new line.', code: J`
System.out.printf("Total: ___ SAR___", total);
`, answers: ['%.2f', '%n'], explain: '%.2f for the decimal total with two digits, and %n for the new line.' },
        { t: 'order', q: 'Arrange the lines so the program prints the price of two notebooks: <code>Total: 25.00</code>.', lines: ['double price = 12.5;', 'double total = price * 2;', 'System.out.printf("Total: %.2f%n", total);'], explain: 'Create the price first, then compute the total from it, then print the total with two decimals.' },
        { t: 'code', q: 'Read the radius of a circle (a decimal). Print its area with 2 decimals in this format: <code>Area: 28.27</code>. Use <code>Math.PI</code> and <code>Math.pow</code>. Do not print any prompt.', qAr: 'اقرأ نصف القطر واطبع المساحة بمنزلتين عشريتين.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double r = input.nextDouble();
        // area = PI * r squared
    }
}
`, tests: [{ stdin: '3', expected: 'Area: 28.27' }, { stdin: '1.5', expected: 'Area: 7.07' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double r = input.nextDouble();
        double area = Math.PI * Math.pow(r, 2);
        System.out.printf("Area: %.2f%n", area);
    }
}
`, hint: 'Area = PI * r squared. Format with <code>%.2f%n</code>.', explain: 'Compute the area with Math, then format it with printf.' },
        { t: 'bug', q: 'This program should print <code>Total: 37.50 SAR</code>. It compiles, but it crashes when it runs. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int qty = 3;
        double price = 12.5;
        double total = qty * price;
        System.out.printf("Total: %d SAR%n", total);
    }
}
`, bug: 6, fix: J`
public class Main {
    public static void main(String[] args) {
        int qty = 3;
        double price = 12.5;
        double total = qty * price;
        System.out.printf("Total: %.2f SAR%n", total);
    }
}
`, hint: 'Which placeholder matches a double?', explain: '<code>total</code> is a double, but <code>%d</code> is a seat for whole numbers only. Java stops the program with an <code>IllegalFormatConversionException</code>. <code>%.2f</code> is the seat for a decimal with two digits.', explainAr: '%d للأعداد الصحيحة فقط، والمتغير double فنستخدم %.2f.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        double total = 0.1 + 0.2;
        System.out.printf("%.2f%n", total);
        System.out.printf("%s: %d x %.2f%n", "Tea", 4, 2.5);
        System.out.printf("%.3f%n", Math.PI);
    }
}
`, answer: J`
0.30
Tea: 4 x 2.50
3.142
`, explain: '0.1 + 0.2 is 0.30000000000000004, shown as 0.30. The three placeholders take "Tea", 4 and 2.5 in order. Pi with three decimals is 3.142 (3.14159... rounds up).' },
        { t: 'code', q: 'Read three whole-number marks. Print their average with one decimal in this format: <code>Average: 84.3</code>. Do not print any prompt.', qAr: 'اقرأ ثلاث درجات واطبع المتوسط بمنزلة عشرية واحدة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int m1 = input.nextInt();
        int m2 = input.nextInt();
        int m3 = input.nextInt();
        // average with one decimal
    }
}
`, tests: [{ stdin: '85 90 78', expected: 'Average: 84.3' }, { stdin: '100 100 99', expected: 'Average: 99.7' }, { stdin: '60 70 80', expected: 'Average: 70.0' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int m1 = input.nextInt();
        int m2 = input.nextInt();
        int m3 = input.nextInt();
        double avg = (m1 + m2 + m3) / 3.0;
        System.out.printf("Average: %.1f%n", avg);
    }
}
`, hint: 'Divide the sum by <code>3.0</code>, then use <code>%.1f</code>.', explain: '299 / 3.0 is 99.666..., which rounds to 99.7 with one decimal. 210 / 3.0 is exactly 70, shown as 70.0.' }
      ]
    },
    {
      title: 'printf: width, alignment and String.format',
      titleAr: 'printf: العرض والمحاذاة و String.format',
      minutes: 35,
      body: [
        { type: 'h', en: 'Why do we need width?' },
        { type: 'p', en: 'When you print a table, for example a list of products and prices, the columns must line up. A short name and a long name should still push the price to the same place. A number between <code>%</code> and the letter sets the <b>width</b>: the least number of characters the value will take. Java adds spaces to fill it.',
          ar: 'الرقم بعد % يحدد عرض الحقل، وجافا تضيف مسافات لإكماله.' },
        { type: 'analogy', title: 'Seats in a classroom', en: 'Each student has a seat that is 10 characters wide. A short name leaves empty space. A long name fills more. The seats still line up in one neat row.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.printf("[%5d]%n", 42);
        System.out.printf("[%-5d]%n", 42);
        System.out.printf("[%8.2f]%n", 7.5);
    }
}
`, out: J`
[   42]
[42   ]
[    7.50]
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['[%5d]', 'The number goes in a field 5 characters wide. 42 has 2 characters, so 3 spaces are added <b>on the left</b>. (Right-aligned.)'],
          ['[%-5d]', 'The minus sign flips the side: spaces are added <b>on the right</b>. (Left-aligned.)'],
          ['[%8.2f]', 'Total width 8, two decimals. 7.50 has 4 characters, so 4 spaces go on the left.']
        ], ar: 'الرقم الموجب = محاذاة لليمين، والعلامة - = محاذاة لليسار.' },
        { type: 'check', q: 'How many spaces appear inside the brackets in <code>[%6d]</code> when printing 42?', options: ['2', '4', '6', '0'], answer: 1, explain: 'Width 6, and 42 has 2 characters, so 4 spaces are added.' },
        { type: 'table', head: ['Placeholder', 'Meaning', 'Example', 'Output'], rows: [
          ['<code>%5d</code>', 'width 5, right-aligned', '<code>printf("[%5d]", 42)</code>', '<code>[   42]</code>'],
          ['<code>%-8s</code>', 'width 8, left-aligned', '<code>printf("[%-8s]", "Ali")</code>', '<code>[Ali     ]</code>'],
          ['<code>%8.2f</code>', 'width 8, 2 decimals', '<code>printf("[%8.2f]", 7.5)</code>', '<code>[    7.50]</code>']
        ] },
        { type: 'analogy', title: 'Left or right edge of the page', en: 'Text in an English book hugs the left edge. Numbers in a bill hug the right edge so the digits line up. A minus sign in the placeholder means "hug the left edge".' },
        { type: 'h', en: 'How many spaces? A simple rule' },
        { type: 'p', en: 'You can always count the spaces with one subtraction: <b>spaces = width - length of the value</b>. If the value is longer than the width, there are no spaces, and the full value is printed anyway. The width is a minimum, never a maximum. The same rule works for text with <code>%s</code>.',
          ar: 'عدد المسافات = العرض - طول القيمة. والعرض حد أدنى فقط.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.printf("[%6s]%n", "Ali");
        System.out.printf("[%-6s]%n", "Ali");
        System.out.printf("[%3s]%n", "Noura");
    }
}
`, out: J`
[   Ali]
[Ali   ]
[Noura]
` },
        { type: 'lines', rows: [
          ['[%6s] with "Ali"', '6 - 3 = 3 spaces, on the left (right-aligned).'],
          ['[%-6s] with "Ali"', '3 spaces, on the right (left-aligned).'],
          ['[%3s] with "Noura"', 'Noura has 5 letters, more than 3. No spaces, and nothing is cut.']
        ] },
        { type: 'check', q: 'What does <code>printf("[%-7s]", "Huda")</code> print?', options: ['<code>[   Huda]</code>', '<code>[Huda   ]</code>', '<code>[Huda]</code>', '<code>[Huda       ]</code>'], answer: 1, explain: '7 - 4 = 3 spaces. The minus sign puts them on the right.' },
        { type: 'h', en: 'A tidy table' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String item = "Notebook";
        int qty = 3;
        double price = 12.5;
        double total = qty * price;
        System.out.printf("%-10s%5d%10.2f%n", item, qty, total);
        System.out.printf("%-10s%5d%10.2f%n", "Pen", 12, 18.0);
    }
}
`, out: J`
Notebook      3     37.50
Pen          12     18.00
` },
        { type: 'lines', rows: [
          ['%-10s', 'The name, left-aligned in 10 characters.'],
          ['%5d', 'The quantity, right-aligned in 5 characters.'],
          ['%10.2f', 'The total, right-aligned in 10 characters, 2 decimals.']
        ], ar: 'كل عمود له عرض ثابت فتتحاذى الأعمدة.' },
        { type: 'check', q: 'Which placeholder prints a name left-aligned in a column of width 10?', options: ['<code>%10s</code>', '<code>%-10s</code>', '<code>%10d</code>', '<code>%.10s</code>'], answer: 1, explain: 'The minus sign means left-aligned.' },
        { type: 'h', en: 'String.format: the same, but saved' },
        { type: 'p', en: '<code>printf</code> prints right away. Sometimes you want to <b>keep</b> the nice text in a variable. <code>String.format(...)</code> uses exactly the same placeholders but gives you the text back as a String.',
          ar: 'String.format تعيد النص المنسق بدلاً من طباعته.' },
        { type: 'analogy', title: 'Writing vs printing a letter', en: '<code>printf</code> is like printing the letter at once. <code>String.format</code> is like writing the letter and keeping it in your hand. You can print it later, or send it somewhere.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int qty = 15;
        String line = String.format("Total items: %d", qty);
        System.out.println(line);
        System.out.println(String.format("%.1f%%", 45.678));
    }
}
`, out: J`
Total items: 15
45.7%
` },
        { type: 'lines', rows: [
          ['String line = String.format("Total items: %d", qty);', 'Build the text <code>Total items: 15</code> and keep it in <code>line</code>. Nothing is printed yet.'],
          ['System.out.println(line);', 'Now print it. We used println, so we did not need %n.'],
          ['"%.1f%%"', 'Two percent signs <code>%%</code> print one real percent sign.']
        ] },
        { type: 'memory', title: 'String.format makes a String object', en: 'A String is not kept inside the variable box like a number. The text lives in an <b>object</b> on the right side, and the variable holds an <b>arrow</b> (a reference) to it. You will see many pictures like this in the String lessons.', frames: [
          { label: 'After <code>int qty = 15;</code>', vars: [{ name: 'qty', type: 'int', value: '15' }] },
          { label: 'After <code>String line = String.format("Total items: %d", qty);</code>', vars: [{ name: 'qty', type: 'int', value: '15' }, { name: 'line', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"Total items: 15"' }] }] }
        ], ar: 'المتغير line يحمل سهماً إلى كائن نصي، أما qty فيحمل الرقم نفسه.' },
        { type: 'note', kind: 'tip', en: 'To print a real % sign inside a format, write <code>%%</code>.', ar: 'لطباعة علامة % نكتب %%.' },
        { type: 'steps', title: 'Worked example: a price list', problem: 'Print a small price list with a header. Names are left-aligned in 10 characters and prices are right-aligned in 8 characters with two decimals.',
          steps: [
            { en: 'The header: two text columns. Use <code>%-10s</code> for the left one and <code>%8s</code> for the right one.', code: J`
System.out.printf("%-10s%8s%n", "Item", "Price");
` },
            { en: 'Each row has the same widths, but the price is a decimal, so use <code>%8.2f</code>.', code: J`
System.out.printf("%-10s%8.2f%n", "Coffee", 12.0);
System.out.printf("%-10s%8.2f%n", "Tea", 7.5);
` }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.printf("%-10s%8s%n", "Item", "Price");
        System.out.printf("%-10s%8.2f%n", "Coffee", 12.0);
        System.out.printf("%-10s%8.2f%n", "Tea", 7.5);
    }
}
`, out: J`
Item         Price
Coffee       12.00
Tea           7.50
`, ar: 'العرض الثابت يجعل الأعمدة متحاذية.' },
        { type: 'steps', title: 'Worked example: my class timetable', problem: 'Print a small timetable with three columns: the course code (left-aligned, width 8), the room (left-aligned, width 6) and the start time (right-aligned, width 6). Put a line of dashes under the header.',
          steps: [
            { en: 'The header uses the same widths as the rows, all with <code>%s</code>.', code: J`
System.out.printf("%-8s%-6s%6s%n", "Course", "Room", "Time");
` },
            { en: 'A line of dashes as wide as the table: 8 + 6 + 6 = 20 characters.', code: J`
System.out.println("--------------------");
` },
            { en: 'Two rows. The time is text such as "8:00", so it also uses <code>%6s</code>.', code: J`
System.out.printf("%-8s%-6s%6s%n", "IS201", "F101", "8:00");
System.out.printf("%-8s%-6s%6s%n", "CS101", "G12", "10:00");
` }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.printf("%-8s%-6s%6s%n", "Course", "Room", "Time");
        System.out.println("--------------------");
        System.out.printf("%-8s%-6s%6s%n", "IS201", "F101", "8:00");
        System.out.printf("%-8s%-6s%6s%n", "CS101", "G12", "10:00");
    }
}
`, out: J`
Course  Room    Time
--------------------
IS201   F101    8:00
CS101   G12    10:00
`, ar: 'نستخدم نفس العرض في العنوان والصفوف حتى تتحاذى الأعمدة.' }
      ],
      mistakes: [
        { title: 'Forgetting the minus for text', en: 'Without the minus, text is right-aligned. For a left-aligned name write <code>%-10s</code>.' },
        { title: 'A width that is too small', en: 'A width never cuts a value. <code>%2d</code> with 12345 still prints all five digits and the table is not tidy.' },
        { title: 'Printing a String.format result but forgetting println', en: '<code>String.format(...)</code> alone prints nothing. Store the result or put it in println.', code: J`
String.format("%d", 5);               // nothing is printed
System.out.println(String.format("%d", 5));  // prints 5
` },
        { title: 'Writing % for a percent sign', en: 'A single % starts a placeholder. Use <code>%%</code>.' }
      ],
      remember: [
        '<code>%5d</code>: width 5, right-aligned. <code>%-5d</code>: width 5, left-aligned.',
        '<code>%8.2f</code>: width 8, two decimals.',
        'A width only adds spaces; it never cuts a value.',
        '<code>String.format</code> uses the same placeholders but returns the text.',
        '<code>%%</code> prints one percent sign.'
      ],
      rememberAr: 'الرقم بعد % هو العرض. العلامة - تعني محاذاة لليسار. String.format تعيد النص ولا تطبع. %% تطبع علامة النسبة.',
      practice: [
        { t: 'mcq', q: 'What does the minus in <code>%-8s</code> mean?', options: ['A negative number', 'Left-aligned', 'Right-aligned', 'Cut the text'], answer: 1, explain: 'A minus sign means left-aligned.' },
        { t: 'output', q: 'What is printed? (Count the spaces inside the brackets.)', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.printf("[%5d]%n", 42);
        System.out.printf("[%-5d]%n", 42);
    }
}
`, answer: J`
[   42]
[42   ]
`, explain: 'Width 5: three spaces on the left, or three on the right with the minus sign.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        double gpa = 3.456;
        System.out.printf("GPA: %.2f%n", gpa);
        System.out.printf("[%6.1f]%n", gpa);
        System.out.printf("[%-6d]%n", 42);
    }
}
`, answer: J`
GPA: 3.46
[   3.5]
[42    ]
`, explain: '3.456 is 3.46 with two decimals. <code>%6.1f</code> gives "3.5" padded to 6 characters on the left. <code>%-6d</code> pads 42 on the right.' },
        { t: 'mcq', q: 'What is the difference between <code>printf</code> and <code>String.format</code>?', options: ['None', 'printf prints; String.format returns a String', 'String.format prints; printf returns a String', 'printf only works with numbers'], answer: 1, explain: 'String.format builds the text and gives it back. You print it yourself.' },
        { t: 'fill', q: 'Complete the format: the name is left-aligned in 10 characters and the price has width 8 with 2 decimals.', code: J`
System.out.printf("%___s%___f%n", name, price);
`, answers: ['-10', '8.2'], explain: '<code>%-10s</code> for the name and <code>%8.2f</code> for the price.' },
        { t: 'order', q: 'Arrange the lines to build the text <code>3/4</code> and print it.', lines: ['int a = 3;', 'int b = 4;', 'String s = String.format("%d/%d", a, b);', 'System.out.println(s);'], explain: 'Create a and b, build the String, then print it.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        String s = String.format("%d/%d", 3, 4);
        System.out.println(s);
        System.out.println(s.length());
    }
}
`, answer: J`
3/4
3
`, explain: 'The text is "3/4", which has 3 characters.' },
        { t: 'code', q: 'Read a product name (one word) and a price (decimal). Print them on one line: the name left-aligned in 10 characters, followed by the price right-aligned in 8 characters with 2 decimals. Example: <code>Coffee 12</code> prints <code>Coffee       12.00</code>. Do not print any prompt.', qAr: 'اقرأ اسم المنتج وسعره واطبعهما بعرض 10 و 8.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.next();
        double price = input.nextDouble();
        // printf here
    }
}
`, tests: [{ stdin: 'Coffee 12', expected: 'Coffee       12.00' }, { stdin: 'Tea 7.5', expected: 'Tea           7.50' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.next();
        double price = input.nextDouble();
        System.out.printf("%-10s%8.2f%n", name, price);
    }
}
`, hint: 'The format is <code>"%-10s%8.2f%n"</code>.', explain: 'Left-aligned text and right-aligned decimal produce a tidy row.' },
        { t: 'bug', q: 'This program should print one tidy row: <code>Tea           7.50</code>. It prints an empty line instead. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        String item = "Tea";
        double price = 7.5;
        String row = "";
        String.format("%-10s%8.2f", item, price);
        System.out.println(row);
    }
}
`, bug: 6, fix: J`
public class Main {
    public static void main(String[] args) {
        String item = "Tea";
        double price = 7.5;
        String row = "";
        row = String.format("%-10s%8.2f", item, price);
        System.out.println(row);
    }
}
`, hint: 'Where does the text made by <code>String.format</code> go?', explain: '<code>String.format</code> builds the text and gives it back, but line 6 throws the answer away. <code>row</code> is still the empty string, so println prints an empty line. Store the answer: <code>row = String.format(...)</code>.', explainAr: 'String.format تعيد نصاً، ويجب تخزينه في متغير وإلا ضاع.' },
        { t: 'output', q: 'What is printed? Count the spaces inside the brackets.', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.printf("[%6s]%n", "Ali");
        System.out.printf("[%-6s]%n", "Ali");
        System.out.printf("[%3s]%n", "Noura");
        System.out.printf("[%5.1f]%n", 9.87);
    }
}
`, answer: J`
[   Ali]
[Ali   ]
[Noura]
[  9.9]
`, explain: 'Width 6 with 3 letters gives 3 spaces (left, then right with the minus). "Noura" is longer than 3, so it is printed whole. 9.87 with one decimal is 9.9 (3 characters), so 2 spaces go on the left.' },
        { t: 'code', q: 'Read a student name (one word) and a mark (whole number). Print a header line and one row. The header has <code>Name</code> left-aligned in 10 characters and <code>Mark</code> right-aligned in 5. The row uses the same widths. Example: <code>Sara 95</code> prints <code>Name       Mark</code> and <code>Sara         95</code>. Do not print any prompt.', qAr: 'اقرأ الاسم والدرجة واطبع سطر عنوان ثم صفاً بنفس العرض.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.next();
        int mark = input.nextInt();
        // header, then the row
    }
}
`, tests: [{ stdin: 'Sara 95', expected: 'Name       Mark\nSara         95' }, { stdin: 'Abdulrahman 100', expected: 'Name       Mark\nAbdulrahman  100' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.next();
        int mark = input.nextInt();
        System.out.printf("%-10s%5s%n", "Name", "Mark");
        System.out.printf("%-10s%5d%n", name, mark);
    }
}
`, hint: 'Header: <code>"%-10s%5s%n"</code>. Row: <code>"%-10s%5d%n"</code>.', explain: 'Both lines use widths 10 and 5, so the columns line up. A name longer than 10 letters pushes the row to the right, because a width never cuts.' }
      ]
    },
    {
      title: 'The char type and Unicode codes',
      titleAr: 'النوع char وأرقام يونيكود',
      minutes: 35,
      body: [
        { type: 'h', en: 'A box for one letter' },
        { type: 'p', en: 'Sometimes you need to keep just <b>one</b> character: a grade letter like <code>A</code>, a digit, a symbol. Java has a type for this: <code>char</code> (short for character). A char value is written between <b>single quotes</b>.',
          ar: 'النوع char يخزن حرفاً واحداً بين علامتي اقتباس مفردتين.' },
        { type: 'analogy', title: 'A name tag', en: 'A name tag with exactly one letter. A <code>char</code> box holds exactly one letter, never two. Text with many letters is a different thing, called a String, which uses double quotes.' },
        { type: 'code', code: J`
char grade = 'A';
char digit = '7';
char space = ' ';
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['char grade = \'A\';', 'A box named <code>grade</code> holds the letter A. Notice the <b>single</b> quotes.'],
          ['char digit = \'7\';', 'This is the <i>character</i> 7, not the number 7. It is a picture of a digit.'],
          ['char space = \' \';', 'Even a space is a character.']
        ], ar: 'الحرف بين علامتي اقتباس مفردتين، والنص بين مزدوجتين.' },
        { type: 'check', q: 'Which line is correct?', options: ['<code>char c = "A";</code>', '<code>char c = \'A\';</code>', '<code>char c = \'AB\';</code>', '<code>char c = A;</code>'], answer: 1, explain: 'One character in single quotes. "A" is a String, \'AB\' has two characters, and plain A is a variable name.' },
        { type: 'p', en: 'Small marks around a value change its type completely. Beginners mix these up a lot, so study this table. The quotes tell Java what kind of box the value needs.' },
        { type: 'table', head: ['Written as', 'Type', 'What it is'], rows: [
          ['<code>\'A\'</code>', '<code>char</code>', 'one character'],
          ['<code>"A"</code>', '<code>String</code>', 'a text that happens to have one character'],
          ['<code>65</code>', '<code>int</code>', 'a whole number'],
          ['<code>\'7\'</code>', '<code>char</code>', 'the <b>picture</b> of the digit seven, like a key on the keyboard'],
          ['<code>7</code>', '<code>int</code>', 'the <b>number</b> seven, which you can add and multiply'],
          ['<code>\' \'</code>', '<code>char</code>', 'one space']
        ] },
        { type: 'analogy', title: 'A key on the keyboard', en: 'When you press the key 7 on your phone to type a room number, the phone gets the <i>character</i> 7, a small picture. It is not a quantity yet. A <code>char</code> is like one key you pressed.' },
        { type: 'h', en: 'Every character is a number inside' },
        { type: 'p', en: 'A computer only understands numbers. So each character has a secret number, called its <b>code</b>. The standard list is called <b>Unicode</b> (the first 128 codes are the old <b>ASCII</b> list). Java can store English, Arabic and many other alphabets with Unicode. You do not need to memorize the list, but know these starting points.',
          ar: 'لكل حرف رقم (كود) في جدول يونيكود.' },
        { type: 'analogy', title: 'Locker numbers', en: 'Each letter lives in a locker with a number. The letter A is in locker 65, B is in locker 66, and so on. Lowercase letters have their own lockers starting at 97.' },
        { type: 'table', head: ['Character', 'Code', 'Character', 'Code'], rows: [
          ['<code>\'0\'</code>', '48', '<code>\'9\'</code>', '57'],
          ['<code>\'A\'</code>', '65', '<code>\'Z\'</code>', '90'],
          ['<code>\'a\'</code>', '97', '<code>\'z\'</code>', '122'],
          ['<code>\' \'</code> (space)', '32', '<code>\'B\'</code>', '66']
        ] },
        { type: 'p', en: 'Digits come first, then the capital letters, then the small letters. Letters are in alphabet order, so B is one more than A.' },
        { type: 'note', kind: 'tip', en: 'Unicode is not only for English. Arabic letters have codes too: the letter ب has the code 1576. That is why a Java <code>char</code> can hold an Arabic letter as well as an English one.', ar: 'يونيكود يشمل الحروف العربية أيضاً، فلكل حرف عربي كود.' },
        { type: 'h', en: 'Seeing the number: casting' },
        { type: 'p', en: 'To see the number inside a char, put it in an <code>int</code> box, or use the cast <code>(int)</code>. To go the other way, from a number to a letter, use the cast <code>(char)</code>.',
          ar: '(int) تُظهر كود الحرف، و (char) تحوّل الرقم إلى حرف.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        char c = 'A';
        int code = c;
        System.out.println(c);
        System.out.println(code);
        System.out.println((char) 66);
        System.out.println((int) 'a');
    }
}
`, out: J`
A
65
B
97
` },
        { type: 'lines', rows: [
          ['char c = \'A\';', 'Store the letter A.'],
          ['int code = c;', 'Put it into an int box. Java shows the code inside: 65. (This conversion is automatic.)'],
          ['System.out.println(c);', 'Printing a char shows the letter: <code>A</code>.'],
          ['System.out.println((char) 66);', 'The cast turns the number 66 into the letter at locker 66: <code>B</code>.'],
          ['System.out.println((int) \'a\');', 'The cast turns the letter into its number: <code>97</code>.']
        ] },
        { type: 'check', q: 'What does <code>System.out.println((char) 67);</code> print?', options: ['<code>67</code>', '<code>C</code>', '<code>c</code>', '<code>A</code>'], answer: 1, explain: '65 is A, 66 is B, 67 is C.' },
        { type: 'note', kind: 'tip', en: 'Remember just three numbers: <b>48</b> for \'0\', <b>65</b> for \'A\', <b>97</b> for \'a\'. You can find all others by counting.', ar: 'احفظ 48 و 65 و 97 فقط.' },
        { type: 'memory', title: 'One code, two ways to show it', en: 'Inside the computer, the box <code>grade</code> keeps the number 65. Because its type is <code>char</code>, Java shows it as the letter A. The box <code>code</code> keeps the same number, but its type is <code>int</code>, so Java shows 65.', code: J`
char grade = 'A';
int code = grade;
char next = (char) 66;
`, frames: [
          { label: 'After <code>char grade = \'A\';</code>', vars: [{ name: 'grade', type: 'char', value: "'A' (code 65)" }] },
          { label: 'After <code>int code = grade;</code>', vars: [{ name: 'grade', type: 'char', value: "'A' (code 65)" }, { name: 'code', type: 'int', value: '65' }] },
          { label: 'After <code>char next = (char) 66;</code>', vars: [{ name: 'grade', type: 'char', value: "'A' (code 65)" }, { name: 'code', type: 'int', value: '65' }, { name: 'next', type: 'char', value: "'B' (code 66)" }] }
        ], ar: 'نفس الرقم 65 يظهر حرفاً في char ورقماً في int.' },
        { type: 'h', en: 'Comparing characters' },
        { type: 'p', en: 'A char is a simple value, like an int. So you can compare chars with <code>==</code>, <code>&lt;</code> and <code>&gt;</code>, as you did in Unit 3. Java compares their codes. This is useful for grade letters, answer choices (A, B, C, D) and menu keys.',
          ar: 'نقارن الحروف بـ == و &lt; و &gt; لأن جافا تقارن الأكواد.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        char grade = 'B';
        System.out.println(grade == 'B');
        System.out.println('A' < 'a');
        if (grade == 'A' || grade == 'B') {
            System.out.println("Good work");
        }
    }
}
`, out: J`
true
true
Good work
` },
        { type: 'lines', rows: [
          ['grade == \'B\'', 'Same character, same code (66): <code>true</code>.'],
          ["'A' < 'a'", '65 is less than 97: <code>true</code>. Capitals come before small letters.'],
          ['if (grade == \'A\' || grade == \'B\')', 'The grade is A or B, so the message is printed.']
        ] },
        { type: 'check', q: 'What is <code>\'Z\' &lt; \'a\'</code>?', options: ['true', 'false', 'an error'], answer: 0, explain: '\'Z\' is 90 and \'a\' is 97. 90 is less than 97, so it is true.' },
        { type: 'steps', title: 'Worked example: from a code to a letter', problem: 'Read a number (a Unicode code) and print the letter that has this code. For example, 72 is the letter H.',
          steps: [
            { en: 'Read the code as a whole number.', code: J`
int code = input.nextInt();
` },
            { en: 'Cast the number to char to get the letter.', code: J`
char letter = (char) code;
` },
            { en: 'Print the letter.', code: J`
System.out.println(letter);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int code = input.nextInt();
        char letter = (char) code;
        System.out.println(letter);
    }
}
`, stdin: '72', out: 'H', ar: 'حوّلنا الرقم إلى حرف بالتحويل (char).' },
        { type: 'steps', title: 'Worked example: a secret name in codes', problem: 'A friend sends you a name as four codes, for example <code>83 65 82 65</code>. Read the four codes and print the name.',
          steps: [
            { en: 'Read the four codes as whole numbers.', code: J`
int c1 = input.nextInt();
int c2 = input.nextInt();
int c3 = input.nextInt();
int c4 = input.nextInt();
` },
            { en: 'Turn each code into a letter with the cast <code>(char)</code>, and print it with <code>print</code> (no new line), so the letters stay together.', code: J`
System.out.print((char) c1);
System.out.print((char) c2);
System.out.print((char) c3);
System.out.print((char) c4);
` },
            { en: 'End the line with an empty println.', code: J`
System.out.println();
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int c1 = input.nextInt();
        int c2 = input.nextInt();
        int c3 = input.nextInt();
        int c4 = input.nextInt();
        System.out.print((char) c1);
        System.out.print((char) c2);
        System.out.print((char) c3);
        System.out.print((char) c4);
        System.out.println();
    }
}
`, stdin: '83 65 82 65', out: 'SARA', ar: '83 هو S و 65 هو A و 82 هو R.' }
      ],
      mistakes: [
        { title: 'Double quotes for a char', en: 'Double quotes make a String.', code: J`
char c = "A";   // error
char c = 'A';   // right
` },
        { title: 'Two letters in one char', en: 'A char holds exactly one character.', code: J`
char c = 'AB';   // error
` },
        { title: 'Thinking \'7\' is the number 7', en: 'The character \'7\' has code 55. It is not the same as the number 7. Later you will learn how to convert it.' },
        { title: 'Forgetting the cast to char', en: '<code>char c = 66;</code> works for a constant, but a variable needs a cast: <code>char c = (char) code;</code>.' }
      ],
      remember: [
        'A <code>char</code> holds one character in <b>single</b> quotes.',
        'Every character has a Unicode code number: \'0\' is 48, \'A\' is 65, \'a\' is 97.',
        '<code>(int)</code> shows the code. <code>(char)</code> turns a code into a letter.',
        'Letters are in alphabet order, so the codes go up by 1.',
        'Chars can be compared with <code>==</code>, <code>&lt;</code> and <code>&gt;</code>: Java compares their codes.'
      ],
      rememberAr: 'char يحمل حرفاً واحداً بين علامتي اقتباس مفردتين. لكل حرف كود: 0 هو 48، و A هو 65، و a هو 97. (int) تظهر الكود و (char) تحوله لحرف.',
      practice: [
        { t: 'mcq', q: 'Which value can be stored in a <code>char</code> variable?', options: ['<code>"A"</code>', '<code>\'A\'</code>', '<code>\'AB\'</code>', '<code>A</code>'], answer: 1, explain: 'One character in single quotes.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        char grade = 'B';
        System.out.println(grade);
        System.out.println((int) grade);
    }
}
`, answer: J`
B
66
`, explain: 'B is at code 66.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println((char) 67);
        System.out.println((int) '0');
    }
}
`, answer: J`
C
48
`, explain: 'Code 67 is C. The character \'0\' has code 48.' },
        { t: 'mcq', q: 'Which statement is true?', options: ['\'a\' has a smaller code than \'A\'', '\'a\' has a larger code than \'A\'', '\'a\' and \'A\' have the same code', 'A char has no code'], answer: 1, explain: 'Capitals start at 65 and small letters at 97.' },
        { t: 'fill', q: 'Complete the casts to see the code and to make a letter.', code: J`
int code = (___) 'A';
char letter = (___) 70;
`, answers: ['int', 'char'], explain: '(int) turns a character into its code. (char) turns a code into a character.' },
        { t: 'order', q: 'Arrange the lines so the program prints <code>77</code>.', lines: ['char c = \'M\';', 'int code = c;', 'System.out.println(code);'], explain: 'Store the letter, put it into an int, print the number. M is at code 77.' },
        { t: 'mcq', q: 'The Unicode code of \'B\' is 66. What is the code of \'C\'?', options: ['65', '66', '67', '99'], answer: 2, explain: 'Letters follow the alphabet, so each next letter is one more.' },
        { t: 'code', q: 'Read a whole number (a Unicode code) and print the character that has this code. Example: <code>65</code> prints <code>A</code>. Do not print any prompt.', qAr: 'اقرأ كوداً واطبع الحرف المقابل.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int code = input.nextInt();
        // print the character
    }
}
`, tests: [{ stdin: '65', expected: 'A' }, { stdin: '97', expected: 'a' }, { stdin: '90', expected: 'Z' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int code = input.nextInt();
        System.out.println((char) code);
    }
}
`, hint: 'Use the cast <code>(char) code</code>.', explain: 'The cast turns a number into the character with that code.' },
        { t: 'bug', q: 'This program should read a code and print its letter. It does not compile. Tap the line with the bug.', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int code = input.nextInt();
        char letter = code;
        System.out.println(letter);
    }
}
`, bug: 7, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int code = input.nextInt();
        char letter = (char) code;
        System.out.println(letter);
    }
}
`, hint: 'Can an int variable go into a char box by itself?', explain: 'An int box can hold numbers that are much too big for a char, so Java will not move an int <b>variable</b> into a char without a cast. <code>(char) code</code> says "I know, turn it into a character". Then the input 72 prints H.', explainAr: 'نحتاج (char) لتحويل متغير int إلى حرف.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        char answer = 'C';
        int code = answer;
        System.out.println(code);
        System.out.println(answer == 'C');
        System.out.println('a' > 'B');
        System.out.println((char) (code - 2));
    }
}
`, answer: J`
67
true
true
A
`, explain: '\'C\' has code 67. answer is \'C\', so == gives true. \'a\' (97) is greater than \'B\' (66). 67 - 2 = 65, and code 65 is A.' },
        { t: 'code', q: 'Read four codes (whole numbers) and print the word they make, on one line. Example: <code>83 65 82 65</code> prints <code>SARA</code>. Do not print any prompt.', qAr: 'اقرأ أربعة أكواد واطبع الكلمة التي تكوّنها.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int c1 = input.nextInt();
        int c2 = input.nextInt();
        int c3 = input.nextInt();
        int c4 = input.nextInt();
        // print the four letters on one line
    }
}
`, tests: [{ stdin: '83 65 82 65', expected: 'SARA' }, { stdin: '74 65 86 65', expected: 'JAVA' }, { stdin: '79 109 97 114', expected: 'Omar' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int c1 = input.nextInt();
        int c2 = input.nextInt();
        int c3 = input.nextInt();
        int c4 = input.nextInt();
        System.out.print((char) c1);
        System.out.print((char) c2);
        System.out.print((char) c3);
        System.out.print((char) c4);
        System.out.println();
    }
}
`, hint: 'Use <code>System.out.print((char) c1);</code> for each code, then one <code>println()</code>.', explain: 'print keeps the letters on the same line. Small letters work too: 109 is m, 97 is a, 114 is r.' }
      ]
    },
    {
      title: 'Character arithmetic and the Character class',
      titleAr: 'العمليات على الحروف والصنف Character',
      minutes: 35,
      body: [
        { type: 'h', en: 'Moving along the alphabet' },
        { type: 'p', en: 'Since letters are numbers inside, you can add and subtract. Adding 1 to the code of A gives the code of B. This lets a program do things like "what is the next letter?" or "what is the position of the letter in the alphabet?". But one rule is important: <code>char + int</code> gives an <b>int</b> (a number). To see a letter again, cast back with <code>(char)</code>.',
          ar: 'ناتج char + int هو int؛ نحوّله إلى حرف بـ (char).' },
        { type: 'analogy', title: 'Steps on a staircase', en: 'Letters stand on a staircase. A is step 65. "A plus 1" means one step up: step 66, which is B. The step number is a number, until you ask "which letter lives here?" with the cast.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        char c = 'A';
        System.out.println(c + 1);
        System.out.println((char) (c + 1));
    }
}
`, out: J`
66
B
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['System.out.println(c + 1);', '<code>\'A\'</code> is 65, plus 1 is the int 66. It prints a number.'],
          ['System.out.println((char) (c + 1));', 'Make the number 66 a char again. The letter is <code>B</code>. The parentheses make the cast apply to the whole sum.']
        ], ar: 'الأقواس ضرورية: (char)(c + 1).' },
        { type: 'check', q: 'What does <code>System.out.println((char) (\'A\' + 2));</code> print?', options: ['<code>67</code>', '<code>C</code>', '<code>A2</code>', '<code>B</code>'], answer: 1, explain: 'A is 65, +2 is 67, and 67 is C.' },
        { type: 'p', en: 'There is one surprise. <code>c + 2</code> gives an int, but <code>c += 2</code> keeps <code>c</code> a char. The short form <code>+=</code> puts a hidden cast back to the type of the variable. The memory picture shows both.' },
        { type: 'memory', title: 'c + 2 and c += 2 are not the same', code: J`
char c = 'x';
int n = c + 2;
c += 2;
`, frames: [
          { label: 'After <code>char c = \'x\';</code>', vars: [{ name: 'c', type: 'char', value: "'x' (code 120)" }] },
          { label: 'After <code>int n = c + 2;</code> (a new int box; c does not change)', vars: [{ name: 'c', type: 'char', value: "'x' (code 120)" }, { name: 'n', type: 'int', value: '122' }] },
          { label: 'After <code>c += 2;</code> (c itself changes and stays a char)', vars: [{ name: 'c', type: 'char', value: "'z' (code 122)" }, { name: 'n', type: 'int', value: '122' }] }
        ], ar: 'c + 2 تعطي int جديداً، أما c += 2 فتغيّر c وتبقيه char.' },
        { type: 'table', head: ['Expression', 'Result', 'Type'], rows: [
          ['<code>\'A\' + 1</code>', '<code>66</code>', 'int'],
          ['<code>(char) (\'A\' + 1)</code>', '<code>\'B\'</code>', 'char'],
          ['<code>\'a\' - \'A\'</code>', '<code>32</code>', 'int (the gap between small and capital letters)'],
          ['<code>(char) (\'g\' - 32)</code>', '<code>\'G\'</code>', 'char (small to capital by hand)'],
          ['<code>\'9\' - \'0\'</code>', '<code>9</code>', 'int (the value of the digit)']
        ] },
        { type: 'h', en: 'Two handy tricks' },
        { type: 'p', en: '<b>Trick 1.</b> The difference between two characters is how far apart they are. <code>\'7\' - \'0\'</code> is 7, the real value of the digit. <b>Trick 2.</b> <code>letter - \'a\' + 1</code> is the position of a small letter in the alphabet: a is 1, b is 2.' },
        { type: 'analogy', title: 'Counting from the start', en: 'If you want to know which seat a student sits in, subtract the first seat number. Seats 48 (the digit 0) to 57 (the digit 9): subtracting 48 gives the digit value.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        char digit = '7';
        int value = digit - '0';
        System.out.println(value + 1);
        char letter = 'd';
        System.out.println(letter - 'a' + 1);
    }
}
`, out: J`
8
4
` },
        { type: 'lines', rows: [
          ['int value = digit - \'0\';', '55 - 48 = 7. Now <code>value</code> is the real number 7.'],
          ['System.out.println(value + 1);', '7 + 1 = 8.'],
          ['letter - \'a\' + 1', '100 - 97 + 1 = 4. The letter d is the 4th letter.']
        ] },
        { type: 'note', kind: 'exam', en: 'Exam trap: <code>System.out.println(\'a\' + \'b\');</code> prints <code>195</code> (97 + 98), not <code>ab</code>. Adding two chars gives an int.', ar: 'جمع حرفين يعطي رقماً وليس نصاً.' },
        { type: 'check', q: 'What does <code>System.out.println(\'1\' + \'2\');</code> print?', options: ['<code>12</code>', '<code>3</code>', '<code>99</code>', 'An error'], answer: 2, explain: '\'1\' is 49 and \'2\' is 50. The sum is 99.' },
        { type: 'h', en: 'The Character class: ready-made tests' },
        { type: 'p', en: 'You do not have to remember code ranges. The <code>Character</code> class has tools to ask questions about a character. Each one takes a char in the parentheses. Think of a sign-up form that checks your password: does the first character look like a letter? Is it a capital? These tools answer such questions in one line.',
          ar: 'الصنف Character فيه دوال جاهزة لفحص الحرف وتحويله.' },
        { type: 'analogy', title: 'A security guard with questions', en: 'A guard at the gate looks at each visitor and answers yes or no: "Is this a student? Is this a teacher?". The <code>is...</code> methods are guards: they look at one character and answer <code>true</code> or <code>false</code>. The <code>to...</code> methods are not guards; they give you back a changed character.' },
        { type: 'table', head: ['Method', 'Answer', 'Example', 'Result'], rows: [
          ['<code>Character.isDigit(ch)</code>', 'true if ch is 0 to 9', '<code>isDigit(\'5\')</code>', '<code>true</code>'],
          ['<code>Character.isLetter(ch)</code>', 'true if ch is a letter', '<code>isLetter(\'5\')</code>', '<code>false</code>'],
          ['<code>Character.isLetterOrDigit(ch)</code>', 'true if ch is a letter or a digit', '<code>isLetterOrDigit(\'@\')</code>', '<code>false</code>'],
          ['<code>Character.isWhitespace(ch)</code>', 'true if ch is a space, tab or new line', '<code>isWhitespace(\' \')</code>', '<code>true</code>'],
          ['<code>Character.isUpperCase(ch)</code>', 'true if ch is a capital letter', '<code>isUpperCase(\'R\')</code>', '<code>true</code>'],
          ['<code>Character.isLowerCase(ch)</code>', 'true if ch is a small letter', '<code>isLowerCase(\'R\')</code>', '<code>false</code>'],
          ['<code>Character.toUpperCase(ch)</code>', 'the capital version of ch', '<code>toUpperCase(\'r\')</code>', '<code>\'R\'</code>'],
          ['<code>Character.toLowerCase(ch)</code>', 'the small version of ch', '<code>toLowerCase(\'7\')</code>', '<code>\'7\'</code> (no change)']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        char ch = 'g';
        System.out.println(Character.isLetter(ch));
        System.out.println(Character.isDigit(ch));
        System.out.println(Character.isUpperCase(ch));
        System.out.println(Character.toUpperCase(ch));
    }
}
`, out: J`
true
false
false
G
` },
        { type: 'lines', rows: [
          ['Character.isLetter(ch)', 'Is g a letter? <code>true</code>.'],
          ['Character.isDigit(ch)', 'Is g a digit? <code>false</code>.'],
          ['Character.isUpperCase(ch)', 'Is g a capital? <code>false</code>.'],
          ['Character.toUpperCase(ch)', 'Gives the capital letter <code>G</code>. The original <code>ch</code> does not change.']
        ], ar: 'الدوال is... ترجع true أو false، و toUpperCase ترجع حرفاً.' },
        { type: 'check', q: 'What does <code>Character.isDigit(\'5\')</code> return?', options: ['true', 'false', '5', '53'], answer: 0, explain: 'The character 5 is a digit.' },
        { type: 'p', en: 'The <code>is...</code> methods give true or false, so they fit perfectly inside an <code>if</code>. Here a program looks at the first character of a parking area code, such as <code>B</code> in <code>B12</code>, and decides what it is.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        char first = 'b';
        if (Character.isLetter(first)) {
            System.out.println("Area " + Character.toUpperCase(first));
        } else {
            System.out.println("Not a letter");
        }
    }
}
`, out: 'Area B' },
        { type: 'lines', rows: [
          ['if (Character.isLetter(first))', 'b is a letter, so the condition is <code>true</code>.'],
          ['Character.toUpperCase(first)', 'Gives <code>\'B\'</code>. Joined to a String with +, it becomes text: <code>Area B</code>.']
        ], ar: 'دوال is تعطي true أو false فنضعها شرطاً في if.' },
        { type: 'steps', title: 'Worked example: a digit and a letter', problem: 'Show the value of a digit character and the position of a letter in the alphabet.',
          steps: [
            { en: 'A digit character and its real value: subtract the character zero.', code: J`
char digit = '7';
int value = digit - '0';
` },
            { en: 'A letter and its alphabet position: subtract \'a\' and add 1.', code: J`
char letter = 'd';
int position = letter - 'a' + 1;
` },
            { en: 'Print both with a short label.', code: J`
System.out.println("Digit value: " + value);
System.out.println("Position: " + position);
` }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        char digit = '7';
        int value = digit - '0';
        char letter = 'd';
        int position = letter - 'a' + 1;
        System.out.println("Digit value: " + value);
        System.out.println("Position: " + position);
    }
}
`, out: J`
Digit value: 7
Position: 4
`, ar: 'الفرق بين كودين يعطي المسافة بينهما.' },
        { type: 'steps', title: 'Worked example: a secret letter (shift by 3)', problem: 'An old secret code moves every small letter 3 places forward: a becomes d, b becomes e. At the end of the alphabet it goes round to the start: x becomes a, y becomes b, z becomes c. Read one small letter and print its secret letter.',
          steps: [
            { en: 'Read one character (a word, then its first character).', code: J`
char ch = input.next().charAt(0);
` },
            { en: 'Find the position from 0: a is 0, b is 1, … z is 25.', code: J`
int pos = ch - 'a';
` },
            { en: 'Move 3 places. The remainder <code>% 26</code> (from Unit 2) brings 26, 27, 28 back to 0, 1, 2.', code: J`
int newPos = (pos + 3) % 26;
` },
            { en: 'Turn the new position back into a letter and print it.', code: J`
char secret = (char) ('a' + newPos);
System.out.println("Secret: " + secret);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        char ch = input.next().charAt(0);
        int pos = ch - 'a';
        int newPos = (pos + 3) % 26;
        char secret = (char) ('a' + newPos);
        System.out.println("Secret: " + secret);
    }
}
`, stdin: 'y', out: 'Secret: b', ar: 'y موقعها 24، و (24 + 3) % 26 = 1، وهذا هو الحرف b.' }
      ],
      mistakes: [
        { title: 'Printing a char sum', en: '<code>char + int</code> is a number. Cast to see the letter.', code: J`
System.out.println('A' + 1);          // 66
System.out.println((char) ('A' + 1)); // B
` },
        { title: 'Missing parentheses around the sum', en: '<code>(char) \'A\' + 1</code> casts only the A, and the result is still an int.' },
        { title: 'Ignoring the return value', en: '<code>Character.toUpperCase(ch);</code> alone changes nothing. Store the result: <code>ch = Character.toUpperCase(ch);</code>' },
        { title: 'Using a String where a char is needed', en: '<code>Character.isDigit("5")</code> is an error. Use single quotes: <code>\'5\'</code>.' }
      ],
      remember: [
        '<code>char + int</code> gives an int. Cast with <code>(char)</code> to get a letter.',
        '<code>\'7\' - \'0\'</code> is the number 7. <code>ch - \'a\' + 1</code> is the alphabet position.',
        '<code>Character.isDigit / isLetter / isUpperCase / isLowerCase</code> answer true or false.',
        '<code>Character.toUpperCase / toLowerCase</code> return a new char; store the result.',
        '<code>c + 2</code> is an int, but <code>c += 2</code> keeps <code>c</code> a char.'
      ],
      rememberAr: 'char + int يعطي int، نحوله بـ (char). الفرق بين حرفين يعطي المسافة. دوال Character تجيب true/false وتعيد حرفاً جديداً يجب تخزينه.',
      practice: [
        { t: 'mcq', q: 'What does <code>System.out.println(\'1\' + \'2\');</code> print?', options: ['<code>12</code>', '<code>3</code>', '<code>99</code>', 'Compile error'], answer: 2, explain: 'Both operands are chars, so their codes are added: 49 + 50 = 99.', explainAr: 'الحرف 1 قيمته 49 والحرف 2 قيمته 50 فالناتج 99.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        char ch = 'C';
        System.out.println(ch + 2);
        System.out.println((char) (ch + 2));
        System.out.println((int) 'a');
    }
}
`, answer: J`
69
E
97
`, explain: '\'C\' is 67, so ch + 2 is the int 69. The cast gives \'E\'. The code of \'a\' is 97.' },
        { t: 'mcq', q: 'What is the value of <code>\'a\' - \'A\'</code>?', options: ['26', '32', '0', '-32'], answer: 1, explain: '97 - 65 = 32.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        char c = 'x';
        c += 2;
        System.out.println(c);
        System.out.println((int) c);
    }
}
`, answer: J`
z
122
`, explain: '\'x\' is 120. The compound assignment keeps the type char, so c becomes \'z\' (122).' },
        { t: 'fill', q: 'Complete the code using methods of the <code>Character</code> class.', code: J`
char ch = '5';
if (Character.___(ch)) {
    System.out.println("You typed a digit");
}
char up = Character.___(ch);
`, answers: ['isDigit', 'toUpperCase'], explain: '<code>isDigit</code> tests for 0-9. <code>toUpperCase</code> returns the capital version (a digit is returned unchanged).' },
        { t: 'order', q: 'Put the lines in order so the program prints <code>M = 77</code>.', lines: ['char ch = \'m\';', 'char upper = Character.toUpperCase(ch);', 'int code = upper;', 'System.out.println(upper + " = " + code);'], explain: 'Store the letter, convert it, widen to int, print. <code>upper + " = "</code> is char + String, which gives a String.' },
        { t: 'mcq', q: 'What does <code>Character.isLetterOrDigit(\'_\')</code> return?', options: ['true', 'false', 'an error'], answer: 1, explain: 'The underscore is neither a letter nor a digit.' },
        { t: 'code', q: 'The starter reads one character for you (you will learn <code>charAt</code> soon). Print the capital version of the character on the first line and its Unicode code on the second line. Do not print any prompt.<br>Example: <code>g</code> prints <code>G</code> and <code>71</code>.', qAr: 'اطبع الحرف بصيغته الكبيرة ثم كوده.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        char ch = input.next().charAt(0);
        // print the capital letter, then its code
    }
}
`, tests: [{ stdin: 'g', expected: 'G\n71' }, { stdin: 'Z', expected: 'Z\n90' }, { stdin: '5', expected: '5\n53' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        char ch = input.next().charAt(0);
        char up = Character.toUpperCase(ch);
        System.out.println(up);
        System.out.println((int) up);
    }
}
`, hint: 'Store <code>Character.toUpperCase(ch)</code> in a char, then print it and print <code>(int)</code> of it.', explain: 'toUpperCase leaves capitals and digits unchanged.' },
        { t: 'bug', q: 'This program should print <code>One grade lower: C</code>, but it prints <code>One grade lower: 67</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        char grade = 'B';
        System.out.println("Your grade: " + grade);
        System.out.println("One grade lower: " + (grade + 1));
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        char grade = 'B';
        System.out.println("Your grade: " + grade);
        System.out.println("One grade lower: " + (char) (grade + 1));
    }
}
`, hint: 'What type is <code>grade + 1</code>?', explain: '<code>grade + 1</code> is char + int, which gives the int 67. Joined to the text, the number 67 is printed. The cast <code>(char) (grade + 1)</code> turns 67 back into the letter C.', explainAr: 'ناتج char + int رقم، فنحوّله إلى حرف بـ (char).' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        char ch = 'x';
        int pos = ch - 'a';
        System.out.println(pos);
        System.out.println((char) ('a' + (pos + 3) % 26));
        System.out.println((char) ('g' - 32));
        System.out.println(Character.isWhitespace(' '));
    }
}
`, answer: J`
23
a
G
true
`, explain: '\'x\' is 120 and \'a\' is 97, so pos is 23. (23 + 3) % 26 is 0, and \'a\' + 0 is a. \'g\' (103) - 32 is 71, which is G. A space is whitespace.' },
        { t: 'code', q: 'Read one small letter. Print its secret letter, moved 3 places forward and going round after z (x → a, y → b, z → c). Print only the letter. Do not print any prompt.', qAr: 'اقرأ حرفاً صغيراً واطبع الحرف بعد إزاحته 3 مواضع.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        char ch = input.next().charAt(0);
        // position, move 3, back to a letter
    }
}
`, tests: [{ stdin: 'a', expected: 'd' }, { stdin: 'y', expected: 'b' }, { stdin: 'm', expected: 'p' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        char ch = input.next().charAt(0);
        int pos = ch - 'a';
        int newPos = (pos + 3) % 26;
        System.out.println((char) ('a' + newPos));
    }
}
`, hint: 'Position: <code>ch - \'a\'</code>. New position: <code>(pos + 3) % 26</code>. Letter: <code>(char) (\'a\' + newPos)</code>.', explain: 'The remainder by 26 makes the alphabet a circle, so after z we start again at a.' }
      ]
    },
    {
      title: 'Escape sequences',
      titleAr: 'تسلسلات الهروب',
      minutes: 30,
      body: [
        { type: 'h', en: 'Special characters inside text' },
        { type: 'p', en: 'How do you print a quote mark inside a quoted text? <code>"She said "Hi""</code> confuses Java: it thinks the text ends at the second quote. How do you start a new line inside one string? We use an <b>escape sequence</b>: a backslash <code>\\</code> followed by a code letter. The backslash means "the next character is special".',
          ar: 'تسلسل الهروب: شرطة مائلة عكسية \\ تليها رمز، لكتابة حروف خاصة.' },
        { type: 'analogy', title: 'A secret code word', en: 'In a spy film, the code word "open sesame" has a special meaning. The backslash is the code word telling Java: "The next letter is not normal, it is special."' },
        { type: 'table', head: ['Escape', 'Meaning'], rows: [
          ['<code>\\n</code>', 'new line'],
          ['<code>\\t</code>', 'tab (a wide jump)'],
          ['<code>\\"</code>', 'a double quote'],
          ['<code>\\\'</code>', 'a single quote'],
          ['<code>\\\\</code>', 'a backslash']
        ] },
        { type: 'p', en: 'An escape sequence is <b>two</b> characters when you type it, but it becomes <b>one</b> character in memory. The text <code>"C:\\\\java"</code> has 8 characters between the quotes in your code, but the String object keeps only 7: C, :, \\, j, a, v, a. The same is true for a char: <code>\'\\n\'</code> looks like two characters, but it is one character, the new-line character (code 10).',
          ar: 'تسلسل الهروب حرفان في الكود لكنه حرف واحد في الذاكرة.' },
        { type: 'memory', title: 'Two characters in code, one in memory', code: J`
String path = "C:\\java";
char nl = '\n';
`, frames: [
          { label: 'After <code>String path = "C:\\\\java";</code>', vars: [{ name: 'path', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: 'C:\\java' }, { name: 'length()', value: '7' }] }] },
          { label: 'After <code>char nl = \'\\n\';</code>', vars: [{ name: 'path', type: 'String', ref: 'A' }, { name: 'nl', type: 'char', value: 'new line (code 10)' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: 'C:\\java' }, { name: 'length()', value: '7' }] }] }
        ], ar: 'النص المخزن فيه شرطة مائلة واحدة، وطوله 7.' },
        { type: 'check', q: 'What is <code>"A\\tB".length()</code>?', options: ['2', '3', '4', '5'], answer: 1, explain: 'A, the tab character, and B: three characters. <code>\\t</code> is one character in memory.' },
        { type: 'h', en: 'New line and tab' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Line 1\nLine 2");
        System.out.println("Name:\tSara");
    }
}
`, out: "Line 1\nLine 2\nName:\tSara" },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['"Line 1\\nLine 2"', 'The <code>\\n</code> breaks the line. Two lines appear from one println.'],
          ['"Name:\\tSara"', 'The <code>\\t</code> jumps to the next tab stop, leaving a gap before Sara.']
        ], ar: '\\n سطر جديد و \\t مسافة جدولة.' },
        { type: 'check', q: 'How many lines does <code>System.out.println("A\\nB\\nC");</code> print?', options: ['1', '2', '3', '4'], answer: 2, explain: 'Two <code>\\n</code> breaks make three lines: A, B and C.' },
        { type: 'p', en: 'You can use <code>\\n</code> inside printf too, but <code>%n</code> is better there, because it always gives the right line ending on every computer. With println and plain text, use <code>\\n</code>.' },
        { type: 'note', kind: 'tip', en: 'A tab jumps to fixed places (usually every 8 characters). A long word can jump past a stop, and then the columns break. For tidy tables, the printf widths of the last lessons are safer than tabs.', ar: 'للجداول المنظمة استخدم عرض printf بدلاً من \\t.' },
        { type: 'h', en: 'Quotes and backslash' },
        { type: 'analogy', title: 'A coat check', en: 'To put a quote inside a quote, you hand it over with a backslash first: <code>\\"</code>. It passes through as a normal letter without ending the text. To print a real backslash, you need two: <code>\\\\</code>, because one backslash alone starts an escape.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("She said \"Salam\"");
        System.out.println("Path: C:\\java\\lab1");
    }
}
`, out: "She said \"Salam\"\nPath: C:\\java\\lab1" },
        { type: 'lines', rows: [
          ['"She said \\"Salam\\""', 'The two <code>\\"</code> are real quote marks in the output. The outer quotes are the text borders.'],
          ['"Path: C:\\\\java\\\\lab1"', 'Each <code>\\\\</code> prints one backslash: <code>C:\\java\\lab1</code>.']
        ] },
        { type: 'check', q: 'What does <code>System.out.println("A\\\\B");</code> print?', options: ['<code>A\\\\B</code>', '<code>A\\B</code>', '<code>AB</code>', 'It does not compile'], answer: 1, explain: 'Two backslashes in the code mean one backslash in the output.' },
        { type: 'note', kind: 'warn', en: 'Use single quotes for a char and double quotes for a String. In a char the quote itself is written <code>\'\\\'\'</code>.' },
        { type: 'p', en: 'Good news: you escape only the quote that would end the text. Inside a String (double quotes) a single quote is normal. Inside a char (single quotes) a double quote is normal.' },
        { type: 'table', head: ['You want', 'Inside a String', 'Inside a char'], rows: [
          ['a double quote "', '<code>"\\""</code>', '<code>\'"\'</code> (no escape needed)'],
          ['a single quote \'', '<code>"\'"</code> (no escape needed)', '<code>\'\\\'\'</code>'],
          ['a backslash \\', '<code>"\\\\"</code>', '<code>\'\\\\\'</code>'],
          ['a new line', '<code>"\\n"</code>', '<code>\'\\n\'</code>']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("It's my lab");
        char q = '"';
        System.out.println(q);
    }
}
`, out: "It's my lab\n\"" },
        { type: 'note', kind: 'tip', en: 'There is also a Unicode escape: <code>\'\\u0041\'</code> is the letter A (hexadecimal code 0041). You may meet it in exams.', ar: '\\u0041 تمثل الحرف A.' },
        { type: 'p', en: 'A Unicode escape is <code>\\u</code> followed by exactly four hexadecimal digits (0 to 9 and A to F). Hexadecimal 0041 is the number 65, the code of A, and 0053 is 83, the code of S. You will rarely type them yourself, but you should be able to read them.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        char a = '\u0041';
        System.out.println(a);
        System.out.println("\u0053ara");
    }
}
`, out: J`
A
Sara
` },
        { type: 'check', q: 'Which escape gives a <b>tab</b>?', options: ['<code>\\n</code>', '<code>\\t</code>', '<code>\\u0041</code>', '<code>\\\\</code>'], answer: 1, explain: '<code>\\t</code> is the tab. <code>\\n</code> is a new line, <code>\\u0041</code> is the letter A and <code>\\\\</code> is one backslash.' },
        { type: 'steps', title: 'Worked example: a tiny report', problem: 'Print a header, one data row, a quotation and a file path using escape sequences.',
          steps: [
            { en: 'Columns separated by a tab.', code: J`
System.out.println("Item\tPrice");
System.out.println("Tea\t5");
` },
            { en: 'A quotation: escape the inner double quotes.', code: J`
System.out.println("He said \"Welcome\"");
` },
            { en: 'A path: double each backslash.', code: J`
System.out.println("C:\\data\\marks.txt");
` }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Item\tPrice");
        System.out.println("Tea\t5");
        System.out.println("He said \"Welcome\"");
        System.out.println("C:\\data\\marks.txt");
    }
}
`, out: "Item\tPrice\nTea\t5\nHe said \"Welcome\"\nC:\\data\\marks.txt", ar: 'كل شرطة مائلة تُكتب مرتين لتظهر مرة واحدة.' },
        { type: 'steps', title: 'Worked example: one println, two lines', problem: 'Print this message with <b>one</b> println:<br><code>Save "marks.txt" in C:\\IS201</code><br><code>Then press "OK"</code>',
          steps: [
            { en: 'Start with the plain words, and mark the special places: two quotes, one backslash, one line break, two more quotes.', code: J`
Save _marks.txt_ in C:_IS201_Then press _OK_
` },
            { en: 'Each quote inside the text becomes <code>\\"</code>.', code: J`
Save \"marks.txt\" in C:_IS201_Then press \"OK\"
` },
            { en: 'The backslash becomes <code>\\\\</code> and the line break becomes <code>\\n</code>.', code: J`
Save \"marks.txt\" in C:\\IS201\nThen press \"OK\"
` },
            { en: 'Put the text inside double quotes and inside println.', code: J`
System.out.println("Save \"marks.txt\" in C:\\IS201\nThen press \"OK\"");
` }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Save \"marks.txt\" in C:\\IS201\nThen press \"OK\"");
    }
}
`, out: "Save \"marks.txt\" in C:\\IS201\nThen press \"OK\"", ar: 'نكتب النص أولاً ثم نضع الهروب في كل مكان خاص.' }
      ],
      mistakes: [
        { title: 'Using a forward slash', en: 'Escapes use a backslash <code>\\</code>, not <code>/</code>. <code>"/n"</code> prints /n.' },
        { title: 'Forgetting to escape the inner quote', en: '<code>"She said "Hi""</code> does not compile.', code: J`
System.out.println("She said "Hi"");     // error
System.out.println("She said \"Hi\"");   // right
` },
        { title: 'One backslash in a path', en: '<code>"C:\\java"</code> is an error because <code>\\j</code> is not an escape. Write <code>"C:\\\\java"</code>.' },
        { title: 'Spaces inside the escape', en: 'There are no spaces: <code>\\n</code>, not <code>\\ n</code>.' }
      ],
      remember: [
        'An escape sequence starts with a backslash <code>\\</code>.',
        '<code>\\n</code> new line, <code>\\t</code> tab, <code>\\"</code> quote, <code>\\\\</code> backslash.',
        'Two characters in the code, one character in the output.',
        'To print a backslash, write two backslashes.',
        'Inside a String a single quote needs no escape; inside a char a double quote needs no escape.'
      ],
      rememberAr: '\\n سطر جديد و \\t جدولة و \\" علامة اقتباس و \\\\ شرطة مائلة. حرفان في الكود يعطيان حرفاً واحداً في الناتج.',
      practice: [
        { t: 'mcq', q: 'Which escape sequence starts a new line?', options: ['<code>\\t</code>', '<code>\\n</code>', '<code>\\"</code>', '<code>\\\\</code>'], answer: 1, explain: '<code>n</code> stands for new line.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("1\n2\n3");
    }
}
`, answer: J`
1
2
3
`, explain: 'Each \\n starts a new line.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("A\\B");
        System.out.println("\"Hi\"");
        System.out.print("x\ny");
    }
}
`, answer: "A\\B\n\"Hi\"\nx\ny", explain: '<code>\\\\</code> prints one backslash, <code>\\"</code> prints a double quote, and <code>\\n</code> starts a new line.' },
        { t: 'mcq', q: 'How do you print <code>She said "Hi"</code> (with the quotes)?', options: ['<code>System.out.println("She said "Hi"");</code>', '<code>System.out.println("She said \\"Hi\\"");</code>', '<code>System.out.println(\'She said "Hi"\');</code>', '<code>System.out.println("She said /"Hi/"");</code>'], answer: 1, explain: 'Each inner quote needs a backslash in front.' },
        { t: 'mcq', q: 'Which line gives a compile error?', options: ['<code>char c = \'A\';</code>', '<code>char c = \'AB\';</code>', '<code>String s = "AB";</code>', '<code>char c = \'\\n\';</code>'], answer: 1, explain: 'A char holds one character. <code>\'\\n\'</code> is one character (new line).' },
        { t: 'fill', q: 'Complete the code so it prints <code>She said "Salam"</code>.', code: J`
System.out.println("She said ___Salam___");
`, answers: ['\\"', '\\"'], explain: 'A quote inside the text is written as backslash and quote.' },
        { t: 'order', q: 'Arrange the lines to print <code>Total:</code> and then, on the next line, <code>45</code>.', lines: ['int total = 45;', 'String text = "Total:\\n" + total;', 'System.out.println(text);'], explain: 'Create the number, build the text (the \\n inside it moves the number to the next line), then print the text.' },
        { t: 'code', q: 'Print these two lines exactly. Use escape sequences. (The program reads no input.)<br><code>Course: "Java"</code><br><code>Path: C:\\java</code>', qAr: 'اطبع السطرين باستخدام تسلسلات الهروب.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // print two lines
    }
}
`, tests: [{ stdin: '', expected: 'Course: "Java"\nPath: C:\\java' }],
          solution: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Course: \"Java\"");
        System.out.println("Path: C:\\java");
    }
}
`, hint: 'Use <code>\\"</code> for the quotes and <code>\\\\</code> for the backslash.', explain: 'The inner quotes and the backslash both need escaping.' },
        { t: 'bug', q: 'This program should print <code>Path: D:\\notes</code> on one line. Instead it prints <code>Path: D:</code> and then <code>otes</code> on a new line. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Course files:");
        System.out.println("Path: C:\\courses");
        System.out.println("Path: D:\notes");
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Course files:");
        System.out.println("Path: C:\\courses");
        System.out.println("Path: D:\\notes");
    }
}
`, hint: 'Which backslash is alone?', explain: 'In line 5 the backslash and the letter n together make <code>\\n</code>, the new-line escape. So Java breaks the line and prints the rest, <code>otes</code>, on the next line. Line 4 is right: <code>\\\\</code> prints one backslash. Fix line 5 the same way: <code>"Path: D:\\\\notes"</code>.', explainAr: 'الشرطة المائلة مع n تصبح سطراً جديداً، فنكتب شرطتين.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("It's \"free\"");
        System.out.println("C:\\new\\lab");
        System.out.println("A\nB".length());
    }
}
`, answer: "It's \"free\"\nC:\\new\\lab\n3", explain: 'A single quote needs no escape inside a String, and each <code>\\"</code> prints a quote. Each <code>\\\\</code> prints one backslash, so <code>\\n</code> in "new" is not a new line here. "A\\nB" has 3 characters: A, new line, B.' },
        { t: 'code', q: 'Print these three lines using <b>one</b> println and <code>\\n</code>. (The program reads no input.)<br><code>College of Computer</code><br><code>Room "F101"</code><br><code>Riyadh</code>', qAr: 'اطبع ثلاثة أسطر باستخدام println واحدة و \\n.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // one println
    }
}
`, tests: [{ stdin: '', expected: 'College of Computer\nRoom "F101"\nRiyadh' }],
          solution: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("College of Computer\nRoom \"F101\"\nRiyadh");
    }
}
`, hint: 'Put <code>\\n</code> where a new line starts, and <code>\\"</code> around F101.', explain: 'Two <code>\\n</code> make three lines, and the escaped quotes print as real quotes.' }
      ]
    },
    {
      title: 'Strings: your first text',
      titleAr: 'النصوص String: البداية',
      minutes: 35,
      body: [
        { type: 'h', en: 'A String is a row of characters' },
        { type: 'p', en: 'Names, messages, city names: programs work with text all the time. In Java, text is stored in a <code>String</code>. A String is a row of characters, written in <b>double quotes</b>. Careful: <code>String</code> starts with a capital S, because it is a <b>class</b>, a ready-made type with many tools that you call with a dot.',
          ar: 'النص يُخزن في String وتُكتب قيمته بين علامتي اقتباس مزدوجتين، وبها دوال كثيرة نستدعيها بنقطة.' },
        { type: 'analogy', title: 'A train of carriages', en: 'A String is a train. Each carriage holds one character. The carriages are numbered, and the first carriage has the number <b>0</b>, not 1. A train with 6 carriages is numbered 0 to 5.', ar: 'الترقيم يبدأ من 0 وليس من 1.' },
        { type: 'code', code: J`
String name = "Noura";
String empty = "";
String message = "Welcome to " + name;
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['String name = "Noura";', 'A box for text holds the five characters N-o-u-r-a.'],
          ['String empty = "";', 'An empty string: no characters at all.'],
          ['"Welcome to " + name', 'The <code>+</code> joins two strings into one. The result is <code>Welcome to Noura</code>. This joining is called <b>concatenation</b>.']
        ], ar: 'العلامة + تدمج النصوص.' },
        { type: 'check', q: 'What is the first index (number) of a String?', options: ['0', '1', '-1'], answer: 0, explain: 'Indexes start at 0. In "Noura" the letter N is at index 0.' },
        { type: 'h', en: 'Where does a String live?' },
        { type: 'p', en: 'An <code>int</code> box holds the number itself. A String is different: the characters live in an <b>object</b> (a thing in memory with its own data and methods), and the variable holds only an <b>arrow</b> to that object. Programmers call the arrow a <b>reference</b>. This idea will matter a lot later, when we compare Strings and change them.',
          ar: 'متغير int يحمل الرقم نفسه، أما متغير String فيحمل سهماً (مرجعاً) إلى كائن فيه الحروف.' },
        { type: 'analogy', title: 'A locker key', en: 'Your bag is in a locker on campus. You do not carry the bag; you carry the <b>key</b> with the locker number. A String variable is the key, and the String object is the bag in the locker. Two people can even have keys to the same locker.' },
        { type: 'memory', title: 'A number box and a String arrow', code: J`
int age = 19;
String name = "Noura";
String message = "Welcome to " + name;
`, frames: [
          { label: 'After <code>int age = 19;</code>', vars: [{ name: 'age', type: 'int', value: '19' }] },
          { label: 'After <code>String name = "Noura";</code>', vars: [{ name: 'age', type: 'int', value: '19' }, { name: 'name', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"Noura"' }, { name: 'length()', value: '5' }] }] },
          { label: 'After <code>String message = "Welcome to " + name;</code>', vars: [{ name: 'age', type: 'int', value: '19' }, { name: 'name', type: 'String', ref: 'A' }, { name: 'message', type: 'String', ref: 'B' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"Noura"' }, { name: 'length()', value: '5' }] }, { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"Welcome to Noura"' }, { name: 'length()', value: '16' }] }] }
        ], ar: 'الدمج بـ + يصنع كائناً نصياً جديداً، ويبقى "Noura" كما هو.' },
        { type: 'p', en: 'Look at the last step: joining with <code>+</code> made a <b>new</b> object B. The object A, "Noura", is still there and still the same.' },
        { type: 'h', en: 'length and charAt' },
        { type: 'p', en: 'Two tools to learn first. <code>length()</code> tells you how many characters the string has. <code>charAt(i)</code> gives you the character at the index <code>i</code>. Notice the empty parentheses after <code>length</code>: it is a method, even though it needs no argument. Every character counts in the length, also spaces, dots and digits.' },
        { type: 'table', head: ['Index', '0', '1', '2', '3', '4', '5'], rows: [
          ['Character of "Riyadh"', 'R', 'i', 'y', 'a', 'd', 'h']
        ] },
        { type: 'table', head: ['Call (s = "Riyadh")', 'Meaning', 'Result'], rows: [
          ['<code>s.length()</code>', 'number of characters', '<code>6</code>'],
          ['<code>s.charAt(0)</code>', 'first character', '<code>\'R\'</code>'],
          ['<code>s.charAt(5)</code>', 'character at index 5', '<code>\'h\'</code>'],
          ['<code>s.charAt(s.length() - 1)</code>', 'last character', '<code>\'h\'</code>']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String s = "Riyadh";
        System.out.println(s.length());
        System.out.println(s.charAt(0));
        System.out.println(s.charAt(s.length() - 1));
    }
}
`, out: J`
6
R
h
` },
        { type: 'lines', rows: [
          ['s.length()', 'R-i-y-a-d-h: 6 characters.'],
          ['s.charAt(0)', 'The first carriage, number 0: <code>R</code>.'],
          ['s.charAt(s.length() - 1)', 'The last index is always <code>length() - 1</code>, here 5: <code>h</code>.']
        ], ar: 'آخر فهرس هو length() - 1.' },
        { type: 'check', q: 'A string has length 5. What is the index of its last character?', options: ['5', '4', '6', '0'], answer: 1, explain: 'Indexes go from 0 to length - 1, so 0 to 4.' },
        { type: 'note', kind: 'exam', en: 'Asking for an index that does not exist, like <code>s.charAt(s.length())</code>, crashes the program with a <code>StringIndexOutOfBoundsException</code>.' },
        { type: 'h', en: 'Numbers that are really text' },
        { type: 'p', en: 'A mobile number in Saudi Arabia looks like <code>0512345678</code>. Should it be an <code>int</code>? No! As a number, the first 0 would disappear, and we never add or multiply phone numbers. The same is true for student IDs, room codes like <code>F101</code> and parking codes like <code>B12</code>. If you do not do maths with it, keep it in a <b>String</b>.',
          ar: 'أرقام الجوال والهويات ورموز القاعات نخزنها String لأننا لا نجري عليها عمليات حسابية.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String phone = "0512345678";
        System.out.println(phone.length());
        System.out.println(phone.charAt(0));
        System.out.println(phone.charAt(1));
    }
}
`, out: J`
10
0
5
` },
        { type: 'lines', rows: [
          ['String phone = "0512345678";', 'Ten characters, and the first 0 is kept.'],
          ['phone.charAt(0)', 'The first character is the char <code>\'0\'</code>.'],
          ['phone.charAt(1)', 'The second character is <code>\'5\'</code>. Mobile numbers start with 05.']
        ] },
        { type: 'check', q: 'Which type is best for a room code like <code>F101</code> or a phone number like <code>0512345678</code>?', options: ['<code>int</code>', '<code>double</code>', '<code>String</code>', '<code>char</code>'], answer: 2, explain: 'We do not do maths with them, they may start with 0 or contain letters, so a String keeps them exactly.' },
        { type: 'h', en: 'Joining text and numbers with +' },
        { type: 'p', en: 'The <code>+</code> sign adds numbers, but joins text. When there is a string on one side, the other side is turned into text. Java works from left to right.' },
        { type: 'analogy', title: 'The first word decides', en: 'Once Java meets a String in the sum, everything after it is glued as text. Before that, numbers still add up as numbers.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("5" + 3 + 2);
        System.out.println(3 + 4 + "ab" + 3 + 4);
    }
}
`, out: J`
532
7ab34
` },
        { type: 'lines', rows: [
          ['"5" + 3 + 2', '"5" + 3 gives the text "53". Then "53" + 2 gives "532".'],
          ['3 + 4 + "ab" + 3 + 4', '3 + 4 are numbers: 7. Then 7 + "ab" gives "7ab". Then "7ab3", then "7ab34".']
        ] },
        { type: 'p', en: 'Chars follow the same rule. Two chars added together are two numbers (their codes). As soon as a String appears, the chars are glued as letters. A common trick is to start with an empty String <code>""</code>, so that everything after it is glued as text. Use parentheses when you want the numbers added first.' },
        { type: 'table', head: ['Expression', 'Result', 'Why'], rows: [
          ['<code>\'A\' + \'B\'</code>', '<code>131</code>', 'two chars: 65 + 66'],
          ['<code>"" + \'A\' + \'B\'</code>', '<code>"AB"</code>', 'the empty String comes first, so everything is glued'],
          ['<code>\'A\' + \'B\' + ""</code>', '<code>"131"</code>', 'the chars are added first, then glued'],
          ['<code>"Total: " + 2 + 3</code>', '<code>"Total: 23"</code>', 'glued from left to right'],
          ['<code>"Total: " + (2 + 3)</code>', '<code>"Total: 5"</code>', 'parentheses add first']
        ] },
        { type: 'check', q: 'What does <code>System.out.println("" + \'O\' + \'K\');</code> print?', options: ['<code>OK</code>', '<code>154</code>', '<code>O K</code>', 'An error'], answer: 0, explain: 'The empty String comes first, so each char is glued as a letter.' },
        { type: 'steps', title: 'Worked example: first, last and length', problem: 'Read one word. Print its first letter, its last letter and its length, each on its own line with a label.',
          steps: [
            { en: 'Read one word with <code>next()</code>. (It reads until the next space.)', code: J`
String word = input.next();
` },
            { en: 'The first letter is at index 0.', code: J`
System.out.println("First: " + word.charAt(0));
` },
            { en: 'The last letter is at index length - 1.', code: J`
System.out.println("Last: " + word.charAt(word.length() - 1));
` },
            { en: 'The length.', code: J`
System.out.println("Length: " + word.length());
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String word = input.next();
        System.out.println("First: " + word.charAt(0));
        System.out.println("Last: " + word.charAt(word.length() - 1));
        System.out.println("Length: " + word.length());
    }
}
`, stdin: 'Riyadh', out: J`
First: R
Last: h
Length: 6
`, ar: 'الحرف الأول فهرسه 0 والأخير فهرسه length() - 1.' },
        { type: 'steps', title: 'Worked example: is it a mobile number?', problem: 'A sign-up form asks for a mobile number. A good one has 10 characters and starts with <code>05</code>. Read the number as text and print its length, then <code>Valid mobile number</code> or <code>Not a mobile number</code>.',
          steps: [
            { en: 'Read the number as a String, so the first 0 is kept.', code: J`
String phone = input.next();
` },
            { en: 'Print the length.', code: J`
System.out.println("Length: " + phone.length());
` },
            { en: 'Check three things with <code>&&</code>: the length is 10, the first char is <code>\'0\'</code>, the second char is <code>\'5\'</code>. Chars are compared with <code>==</code>.', code: J`
if (phone.length() == 10 && phone.charAt(0) == '0' && phone.charAt(1) == '5') {
    System.out.println("Valid mobile number");
} else {
    System.out.println("Not a mobile number");
}
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String phone = input.next();
        System.out.println("Length: " + phone.length());
        if (phone.length() == 10 && phone.charAt(0) == '0' && phone.charAt(1) == '5') {
            System.out.println("Valid mobile number");
        } else {
            System.out.println("Not a mobile number");
        }
    }
}
`, stdin: '0512345678', out: J`
Length: 10
Valid mobile number
`, ar: 'نفحص الطول ثم أول حرفين بـ charAt.' }
      ],
      mistakes: [
        { title: 'Single quotes for a String', en: 'Single quotes are for one char.', code: J`
String s = 'Riyadh';   // error
String s = "Riyadh";   // right
` },
        { title: 'Starting to count at 1', en: 'The first character is <code>charAt(0)</code>. <code>charAt(1)</code> is the second.' },
        { title: 'Forgetting the parentheses of length()', en: 'It is <code>s.length()</code>. Without the parentheses it does not compile. (For arrays it is different, but you have not learned arrays yet.)' },
        { title: 'Using the length as an index', en: '<code>s.charAt(s.length())</code> is one step too far and crashes. The last index is <code>length() - 1</code>.' }
      ],
      remember: [
        'A <code>String</code> is text in double quotes. Its type name starts with a capital S.',
        'Indexes start at 0. The last index is <code>length() - 1</code>.',
        '<code>s.length()</code> counts characters. <code>s.charAt(i)</code> gets one character.',
        '<code>+</code> joins text with anything. Java works from left to right.',
        'A String variable holds a reference (an arrow) to a String object. Phone numbers and IDs are Strings.'
      ],
      rememberAr: 'String نص بين علامتي اقتباس مزدوجتين. الفهرس يبدأ من 0 وآخر فهرس length() - 1. length() تعد الحروف و charAt(i) تعطي حرفاً. + تدمج النص.',
      practice: [
        { t: 'mcq', q: 'What is the length of the string <code>"Java"</code>?', options: ['3', '4', '5', '0'], answer: 1, explain: 'J-a-v-a is four characters.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        String w = "Computer";
        System.out.println(w.length());
        System.out.println(w.charAt(3));
    }
}
`, answer: J`
8
p
`, explain: 'C=0, o=1, m=2, p=3. The string has 8 characters.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        String name = "Noura";
        System.out.println(name.length());
        System.out.println(name.charAt(0));
        System.out.println(name.charAt(name.length() - 1));
    }
}
`, answer: J`
5
N
a
`, explain: 'The last character is at index 4: a.' },
        { t: 'mcq', q: 'A string has length 5. What happens with <code>s.charAt(5)</code>?', options: ['It returns the last character', 'It returns a space', 'It crashes with an exception', 'It returns 0'], answer: 2, explain: 'Valid indexes are 0 to 4.' },
        { t: 'mcq', q: 'What does <code>System.out.println("5" + 3 + 2);</code> print?', options: ['<code>10</code>', '<code>532</code>', '<code>55</code>', 'Compile error'], answer: 1, explain: 'Left to right: "5" + 3 is "53", then "53" + 2 is "532".' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(3 + 4 + "ab" + 3 + 4);
    }
}
`, answer: '7ab34', explain: '3 + 4 = 7 first, then everything after the string is glued as text.' },
        { t: 'fill', q: 'Complete the code so <code>initials</code> becomes <code>"OK"</code>.', code: J`
String first = "Omar";
String last = "Khalid";
String initials = "" + first.___(0) + last.charAt(___);
`, answers: ['charAt', '0'], explain: 'The first letter of each name is at index 0. Starting with "" makes + join text instead of adding char codes.' },
        { t: 'code', q: 'Read one word. Print its first letter on the first line, its last letter on the second line, and its length on the third line. Do not print any prompt.', qAr: 'اقرأ كلمة واطبع أول حرف وآخر حرف وطولها.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String word = input.next();
        // print first, last, length
    }
}
`, tests: [{ stdin: 'Riyadh', expected: 'R\nh\n6' }, { stdin: 'a', expected: 'a\na\n1' }, { stdin: 'Java', expected: 'J\na\n4' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String word = input.next();
        System.out.println(word.charAt(0));
        System.out.println(word.charAt(word.length() - 1));
        System.out.println(word.length());
    }
}
`, hint: 'The last letter is at index <code>word.length() - 1</code>.', explain: 'A one-letter word has first and last letter equal.' },
        { t: 'bug', q: 'This program should print the last letter of a word. It compiles, but it crashes when it runs. Tap the line with the bug.', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String word = input.next();
        char last = word.charAt(word.length());
        System.out.println("Last letter: " + last);
    }
}
`, bug: 7, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String word = input.next();
        char last = word.charAt(word.length() - 1);
        System.out.println("Last letter: " + last);
    }
}
`, hint: 'For "Riyadh" the length is 6. What is the last index?', explain: 'Indexes go from 0 to <code>length() - 1</code>. For "Riyadh" the length is 6 but the last index is 5, so <code>charAt(6)</code> does not exist and Java throws a <code>StringIndexOutOfBoundsException</code>. Use <code>word.length() - 1</code>.', explainAr: 'آخر فهرس هو length() - 1 وليس length().' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println('A' + 'B');
        System.out.println("" + 'A' + 'B');
        System.out.println("Total: " + 2 + 3);
        System.out.println("Total: " + (2 + 3));
    }
}
`, answer: J`
131
AB
Total: 23
Total: 5
`, explain: 'Two chars are added as codes: 65 + 66 = 131. With "" first, they are glued as letters. Without parentheses, 2 and 3 are glued after the text. With parentheses, 2 + 3 is worked out first.' },
        { t: 'code', q: 'Read a mobile number as text (one word). Print <code>Valid</code> if it has 10 characters and starts with <code>05</code>; otherwise print <code>Invalid</code>. Do not print any prompt.', qAr: 'اقرأ رقم الجوال واطبع Valid إذا كان 10 خانات ويبدأ بـ 05.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String phone = input.next();
        // check the length and the first two characters
    }
}
`, tests: [{ stdin: '0512345678', expected: 'Valid' }, { stdin: '051234567', expected: 'Invalid' }, { stdin: '0612345678', expected: 'Invalid' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String phone = input.next();
        if (phone.length() == 10 && phone.charAt(0) == '0' && phone.charAt(1) == '5') {
            System.out.println("Valid");
        } else {
            System.out.println("Invalid");
        }
    }
}
`, hint: 'Use <code>phone.length() == 10</code> and compare <code>phone.charAt(0)</code> and <code>phone.charAt(1)</code> with the chars <code>\'0\'</code> and <code>\'5\'</code>.', explain: 'Check the length first: with <code>&&</code>, Java stops at the first false part, so a very short text never reaches charAt.' }
      ]
    },
    {
      title: 'Cutting and searching: substring, indexOf, case',
      titleAr: 'القص والبحث: substring و indexOf وحالة الأحرف',
      minutes: 35,
      body: [
        { type: 'h', en: 'Taking a piece of a string' },
        { type: 'p', en: 'Often you need only a <b>part</b> of a text: the first name from a full name, the last 3 digits of an ID, the area code of a phone number. The tool <code>substring</code> cuts a piece out. <code>indexOf</code> finds where something is, so that you know where to cut.',
          ar: 'substring تقص جزءاً من النص و indexOf تجد موضع شيء داخله.' },
        { type: 'analogy', title: 'Cutting a ribbon', en: 'You have a ribbon with numbered marks. You cut from mark 7 to the end, or from mark 0 up to mark 6. The cut at the end mark is not included: the scissors stop <b>just before</b> it.' },
        { type: 'table', head: ['Call (s = "Purple Sunset")', 'Meaning', 'Result'], rows: [
          ['<code>s.substring(7)</code>', 'from index 7 to the end', '<code>"Sunset"</code>'],
          ['<code>s.substring(0, 6)</code>', 'from index 0 up to (not including) 6', '<code>"Purple"</code>'],
          ['<code>s.indexOf(\'S\')</code>', 'first position of a char', '<code>7</code>'],
          ['<code>s.indexOf("set")</code>', 'first position of a piece of text', '<code>10</code>'],
          ['<code>s.indexOf(\'z\')</code>', 'not found', '<code>-1</code>']
        ] },
        { type: 'p', en: 'Count with me: P-u-r-p-l-e are indexes 0 to 5. The space is index 6. S-u-n-s-e-t are indexes 7 to 12. So the string has 13 characters.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String s = "Purple Sunset";
        System.out.println(s.substring(7));
        System.out.println(s.substring(0, 6));
        System.out.println(s.indexOf("set"));
        System.out.println(s.indexOf('z'));
    }
}
`, out: J`
Sunset
Purple
10
-1
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['s.substring(7)', 'Start at index 7 (the S) and take everything to the end: <code>Sunset</code>.'],
          ['s.substring(0, 6)', 'Start at 0, stop before 6. The characters are indexes 0 to 5: <code>Purple</code>. The result has 6 - 0 = 6 characters.'],
          ['s.indexOf("set")', 'Where does "set" begin? S=7, u=8, n=9, s=10. The answer is <code>10</code>.'],
          ['s.indexOf(\'z\')', 'There is no z, so Java answers <code>-1</code>.']
        ], ar: 'substring(a, b) لا تشمل الحرف عند b. و indexOf ترجع -1 إذا لم تجد.' },
        { type: 'check', q: 'What is <code>"Riyadh".substring(2, 4)</code>?', options: ['<code>"iy"</code>', '<code>"yad"</code>', '<code>"ya"</code>', '<code>"yadh"</code>'], answer: 2, explain: 'Indexes 2 and 3 are y and a. Index 4 is not included.' },
        { type: 'note', kind: 'exam', en: 'In <code>substring(a, b)</code> the character at index <code>b</code> is <b>not</b> included, and the result has <code>b - a</code> characters.' },
        { type: 'p', en: 'Let us practise on a mobile number. Write the indexes above the digits first. This small habit prevents most substring mistakes. A very common job is to take the <b>last 4 digits</b>: start at <code>length() - 4</code> and go to the end.',
          ar: 'لأخذ آخر 4 خانات نبدأ من length() - 4 حتى النهاية.' },
        { type: 'table', head: ['Index', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], rows: [
          ['Character of "0512345678"', '0', '5', '1', '2', '3', '4', '5', '6', '7', '8']
        ] },
        { type: 'table', head: ['Call (phone = "0512345678")', 'Result', 'How many characters'], rows: [
          ['<code>phone.substring(0, 3)</code>', '<code>"051"</code>', '3 - 0 = 3'],
          ['<code>phone.substring(3, 6)</code>', '<code>"234"</code>', '6 - 3 = 3'],
          ['<code>phone.substring(phone.length() - 4)</code>', '<code>"5678"</code>', 'the last 4'],
          ['<code>phone.substring(4, 4)</code>', '<code>""</code>', '4 - 4 = 0: an empty String'],
          ['<code>phone.substring(0, phone.length())</code>', '<code>"0512345678"</code>', 'the whole text']
        ] },
        { type: 'check', q: 'For <code>String id = "221100345";</code>, what is <code>id.substring(id.length() - 4)</code>?', options: ['<code>"345"</code>', '<code>"0345"</code>', '<code>"00345"</code>', '<code>"2211"</code>'], answer: 1, explain: 'The length is 9, so we start at index 5 and go to the end: 0, 3, 4, 5.' },
        { type: 'h', en: 'Searching from the end: lastIndexOf' },
        { type: 'p', en: '<code>indexOf</code> searches from the start. Sometimes you need the <b>last</b> place, for example the last space in a name with three parts, to get the family name. <code>lastIndexOf</code> searches from the end. It also returns -1 when nothing is found.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String name = "Sara Ali Alqahtani";
        int lastSpace = name.lastIndexOf(' ');
        System.out.println(lastSpace);
        System.out.println(name.substring(lastSpace + 1));
    }
}
`, out: J`
8
Alqahtani
` },
        { type: 'lines', rows: [
          ['name.lastIndexOf(\' \')', 'The spaces are at 4 and 8. The last one is at <code>8</code>.'],
          ['name.substring(lastSpace + 1)', 'Start one place after the space (index 9) and go to the end: <code>Alqahtani</code>.']
        ], ar: 'lastIndexOf تبحث من النهاية وتعيد آخر موضع.' },
        { type: 'h', en: 'Capital and small letters, and trimming' },
        { type: 'analogy', title: 'A photocopy', en: 'A photocopy is a new paper. The original stays as it was. A String method is like that: it never changes the original text. It gives you a new String (a copy). We say that Strings are <b>immutable</b> (cannot be changed).' },
        { type: 'table', head: ['Call', 'Meaning', 'Result'], rows: [
          ['<code>"Purple".toUpperCase()</code>', 'all capitals', '<code>"PURPLE"</code>'],
          ['<code>"Purple".toLowerCase()</code>', 'all small letters', '<code>"purple"</code>'],
          ['<code>"  hi  ".trim()</code>', 'remove spaces at both ends', '<code>"hi"</code>']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String s = "java";
        s.toUpperCase();
        System.out.println(s);
        s = s.toUpperCase();
        System.out.println(s);
        System.out.println("[" + "  hi  ".trim() + "]");
    }
}
`, out: J`
java
JAVA
[hi]
` },
        { type: 'lines', rows: [
          ['s.toUpperCase();', 'Makes a new string JAVA, but we did not keep it. <code>s</code> is still <code>java</code>.'],
          ['s = s.toUpperCase();', 'Now we store the new string back into <code>s</code>.'],
          ['"  hi  ".trim()', 'Takes away the spaces at both ends. We added brackets so that you can see it.']
        ], ar: 'الدوال لا تغير النص الأصلي، بل تعيد نصاً جديداً يجب تخزينه.' },
        { type: 'check', q: 'After <code>String s = "ali"; s.toUpperCase();</code> what is the value of <code>s</code>?', options: ['<code>"ALI"</code>', '<code>"ali"</code>', '<code>"Ali"</code>'], answer: 1, explain: 'The result was thrown away. Strings never change.' },
        { type: 'memory', title: 'toUpperCase makes a NEW String', en: 'Follow the arrows. The method never paints over object A. It builds a new object. If nobody keeps an arrow to the new object, it is lost (garbage).', code: J`
String s = "java";
s.toUpperCase();
s = s.toUpperCase();
`, frames: [
          { label: 'After <code>String s = "java";</code>', vars: [{ name: 's', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"java"' }] }] },
          { label: 'After <code>s.toUpperCase();</code> (the new object is not kept)', vars: [{ name: 's', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"java"' }] }, { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"JAVA"' }], gone: true }] },
          { label: 'After <code>s = s.toUpperCase();</code> (s now points to the new object)', vars: [{ name: 's', type: 'String', ref: 'C' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"java"' }], gone: true }, { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"JAVA"' }] }] }
        ], ar: 'toUpperCase تصنع كائناً جديداً، و s لا تتغير إلا إذا خزّنا فيها الناتج.' },
        { type: 'steps', title: 'Worked example: split a name', problem: 'Read a full name made of a first name and a last name separated by one space. Print the first name, then the last name in capital letters.',
          steps: [
            { en: 'Read the whole line. (<code>nextLine()</code> reads the full line.)', code: J`
String name = input.nextLine();
` },
            { en: 'Find where the space is.', code: J`
int space = name.indexOf(' ');
` },
            { en: 'The first name is from the start up to the space. The last name starts one place after the space.', code: J`
String first = name.substring(0, space);
String last = name.substring(space + 1);
` },
            { en: 'Print the first name as it is and the last name in capitals.', code: J`
System.out.println(first);
System.out.println(last.toUpperCase());
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine();
        int space = name.indexOf(' ');
        String first = name.substring(0, space);
        String last = name.substring(space + 1);
        System.out.println(first);
        System.out.println(last.toUpperCase());
    }
}
`, stdin: 'Sara Alqahtani', out: J`
Sara
ALQAHTANI
`, ar: 'موضع المسافة يفصل الاسمين.' },
        { type: 'steps', title: 'Worked example: user and domain of an email', problem: 'A university email looks like <code>noura.ali@uni.edu.sa</code>. Read an email and print the user part (before the @) and the domain (after the @).',
          steps: [
            { en: 'Read the email as one word.', code: J`
String email = input.next();
` },
            { en: 'Find the position of the @ sign.', code: J`
int at = email.indexOf('@');
` },
            { en: 'The user part goes from 0 up to (not including) the @. The domain starts one place after the @.', code: J`
String user = email.substring(0, at);
String domain = email.substring(at + 1);
` },
            { en: 'Print both parts with labels.', code: J`
System.out.println("User: " + user);
System.out.println("Domain: " + domain);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String email = input.next();
        int at = email.indexOf('@');
        String user = email.substring(0, at);
        String domain = email.substring(at + 1);
        System.out.println("User: " + user);
        System.out.println("Domain: " + domain);
    }
}
`, stdin: 'noura.ali@uni.edu.sa', out: J`
User: noura.ali
Domain: uni.edu.sa
`, ar: 'موضع @ يفصل اسم المستخدم عن النطاق.' }
      ],
      mistakes: [
        { title: 'Forgetting to keep the result', en: '<code>s.toUpperCase();</code> alone does nothing useful.', code: J`
s.toUpperCase();        // s is unchanged
s = s.toUpperCase();    // right
` },
        { title: 'Thinking substring includes the end index', en: '<code>"Riyadh".substring(0, 3)</code> is <code>"Riy"</code>, 3 characters. The index 3 is not included.' },
        { title: 'Using an index outside the string', en: '<code>"Riyadh".substring(2, 10)</code> crashes. The end index can be at most the length.' },
        { title: 'Single quotes vs double quotes in indexOf', en: 'Both work: <code>indexOf(\'a\')</code> for a char and <code>indexOf("ad")</code> for text. But a char cannot hold two letters.' }
      ],
      remember: [
        '<code>substring(a)</code> goes from a to the end. <code>substring(a, b)</code> stops before b.',
        '<code>indexOf(x)</code> gives the first position, or -1 if not found. <code>lastIndexOf(x)</code> gives the last position.',
        'The last n characters: <code>s.substring(s.length() - n)</code>.',
        '<code>toUpperCase()</code>, <code>toLowerCase()</code> and <code>trim()</code> return a new string.',
        'Strings are immutable: store the result if you want to keep it.'
      ],
      rememberAr: 'substring(a, b) تقص من a وتتوقف قبل b. indexOf ترجع الموضع أو -1. دوال String لا تغير الأصل، بل تعيد نصاً جديداً يجب تخزينه.',
      practice: [
        { t: 'mcq', q: 'What is <code>"Riyadh".substring(0, 3)</code>?', options: ['<code>"Riyad"</code>', '<code>"Riy"</code>', '<code>"iya"</code>', '<code>"Ri"</code>'], answer: 1, explain: 'Indexes 0, 1 and 2.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        String w = "Computer";
        System.out.println(w.substring(3, 6));
        System.out.println(w.indexOf('t'));
        System.out.println(w.substring(5));
    }
}
`, answer: J`
put
5
ter
`, explain: 'C=0, o=1, m=2, p=3, u=4, t=5, e=6, r=7. Indexes 3 to 5 are "put", t is at 5, and from 5 to the end is "ter".' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        String s = "Riyadh";
        System.out.println(s.substring(2));
        System.out.println(s.indexOf("ad"));
        System.out.println(s.toUpperCase().charAt(1));
    }
}
`, answer: J`
yadh
3
I
`, explain: 'R=0, i=1, y=2, a=3, d=4, h=5. substring(2) is "yadh". "ad" starts at 3. "RIYADH".charAt(1) is I.' },
        { t: 'mcq', q: 'What does <code>"Purple".indexOf(\'z\')</code> return?', options: ['<code>0</code>', '<code>-1</code>', '<code>6</code>', 'An exception'], answer: 1, explain: 'indexOf returns -1 when nothing is found.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        String s = "java";
        s.toUpperCase();
        System.out.println(s);
    }
}
`, answer: 'java', explain: 'The new string was not stored, and Strings cannot be changed.' },
        { t: 'fill', q: 'The ID is <code>"221100345"</code>. Complete the code so that <code>part</code> holds the last 3 characters, <code>"345"</code>.', code: J`
String id = "221100345";
String part = id.___(id.length() - ___);
`, answers: ['substring', '3'], explain: 'Start 3 characters before the end and go to the end.' },
        { t: 'order', q: 'Arrange the lines to print the first name of <code>Sara Ali</code>.', lines: ['String name = "Sara Ali";', 'int space = name.indexOf(\' \');', 'String first = name.substring(0, space);', 'System.out.println(first);'], explain: 'Find the space, cut up to it, print.' },
        { t: 'code', q: 'Read one line containing a first name and a last name separated by a single space. Print the last name in capital letters on the first line, and the initials (each followed by a dot) on the second line. Example: <code>Sara Alqahtani</code> prints <code>ALQAHTANI</code> and <code>S.A.</code>. Do not print any prompt.', qAr: 'اقرأ الاسم الكامل واطبع اسم العائلة بحروف كبيرة ثم الأحرف الأولى.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine();
        // your code here
    }
}
`, tests: [{ stdin: 'Sara Alqahtani', expected: 'ALQAHTANI\nS.A.' }, { stdin: 'Omar Ali', expected: 'ALI\nO.A.' }],
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
}
`, hint: 'Find the space with <code>indexOf</code>, then split with <code>substring</code>.', explain: 'The space index separates the two parts.' },
        { t: 'bug', q: 'This program should print the last 4 digits of a phone number: <code>5678</code>. It prints <code>567</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        String phone = "0512345678";
        int n = phone.length();
        String last4 = phone.substring(n - 4, n - 1);
        System.out.println(last4);
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        String phone = "0512345678";
        int n = phone.length();
        String last4 = phone.substring(n - 4, n);
        System.out.println(last4);
    }
}
`, hint: 'The end index of substring is not included.', explain: 'The end index is not included, so <code>substring(6, 9)</code> gives only indexes 6, 7 and 8: three digits. To reach the last digit (index 9) the end must be <code>n</code> (10), or simply use <code>phone.substring(n - 4)</code>.', explainAr: 'نهاية substring لا تُشمل، فنكتب n وليس n - 1.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        String name = "Sara Ali Alqahtani";
        System.out.println(name.indexOf(' '));
        System.out.println(name.lastIndexOf(' '));
        System.out.println(name.substring(5, 8));
        System.out.println(name.substring(4, 4).length());
    }
}
`, answer: J`
4
8
Ali
0
`, explain: 'S-a-r-a are 0 to 3, so the first space is at 4. The second space is at 8. Indexes 5, 6, 7 are "Ali". substring(4, 4) is the empty String, with length 0.' },
        { t: 'code', q: 'Read an email (one word with one @). Print the user part on the first line and the domain on the second line, like the worked example: <code>User: noura.ali</code> and <code>Domain: uni.edu.sa</code>. Do not print any prompt.', qAr: 'اقرأ البريد واطبع اسم المستخدم ثم النطاق.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String email = input.next();
        // find the @ and cut
    }
}
`, tests: [{ stdin: 'noura.ali@uni.edu.sa', expected: 'User: noura.ali\nDomain: uni.edu.sa' }, { stdin: 'omar@lab.org', expected: 'User: omar\nDomain: lab.org' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String email = input.next();
        int at = email.indexOf('@');
        System.out.println("User: " + email.substring(0, at));
        System.out.println("Domain: " + email.substring(at + 1));
    }
}
`, hint: 'Use <code>indexOf(\'@\')</code>, then <code>substring(0, at)</code> and <code>substring(at + 1)</code>.', explain: 'The @ itself is in neither part: the first part stops before it, and the second part starts after it.' }
      ]
    },
    {
      title: 'Comparing strings: equals and compareTo',
      titleAr: 'مقارنة النصوص: equals و compareTo',
      minutes: 30,
      body: [
        { type: 'h', en: 'Are two texts the same?' },
        { type: 'p', en: 'A login program must check if the password typed is the same as the saved one. A quiz must check if the answer is correct. With numbers you used <code>==</code>. With Strings this is a trap! For text, Java gives <code>equals</code>.',
          ar: 'لمقارنة محتوى النصوص نستخدم equals، أما == فتقارن المرجع.' },
        { type: 'analogy', title: 'Two copies of one book', en: 'You and a friend each have a copy of the same book. The words inside are the same (<code>equals</code> says true), but they are two different physical books (<code>==</code> says false). With <code>==</code> Java asks, "Is it the very same object?". With <code>equals</code> Java asks, "Do they say the same thing?".' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String a = "java";
        String b = new String("java");
        String c = "JAVA";
        System.out.println(a.equals(b));
        System.out.println(a == b);
        System.out.println(a.equalsIgnoreCase(c));
    }
}
`, out: J`
true
false
true
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['String b = new String("java");', 'Make a separate copy of the text. (This is only to show the difference. Normally you do not write this.)'],
          ['a.equals(b)', 'Same letters? <code>true</code>.'],
          ['a == b', 'Same object in memory? No, two copies: <code>false</code>.'],
          ['a.equalsIgnoreCase(c)', 'Same letters if we ignore capital vs small? <code>true</code>.']
        ], ar: 'استخدم equals دائماً لمقارنة محتوى النصوص.' },
        { type: 'check', q: 'Which is the right way to test that two strings have the same text?', options: ['<code>s1 == s2</code>', '<code>s1.equals(s2)</code>', '<code>s1 = s2</code>', '<code>s1.compareTo(s2) == 1</code>'], answer: 1, explain: '== compares objects, = is assignment, and compareTo gives 0 (not 1) for equal strings.' },
        { type: 'p', en: 'Why is the answer of <code>==</code> false? Remember: a String variable holds an <b>arrow</b>. <code>==</code> compares the two arrows: do they point to the very same object? <code>equals</code> walks along the arrows and compares the letters inside the objects. The memory picture makes this clear.',
          ar: '== تقارن الأسهم (هل هو نفس الكائن؟)، و equals تقارن الحروف داخل الكائنين.' },
        { type: 'memory', title: 'Same text, different objects', code: J`
String a = "java";
String b = new String("java");
String c = a;
`, frames: [
          { label: 'After <code>String a = "java";</code>', vars: [{ name: 'a', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"java"' }] }] },
          { label: 'After <code>String b = new String("java");</code> (a second object with the same letters)', vars: [{ name: 'a', type: 'String', ref: 'A' }, { name: 'b', type: 'String', ref: 'B' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"java"' }] }, { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"java"' }] }] },
          { label: 'After <code>String c = a;</code> (c copies the arrow of a, no new object)', vars: [{ name: 'a', type: 'String', ref: 'A' }, { name: 'b', type: 'String', ref: 'B' }, { name: 'c', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"java"' }] }, { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"java"' }] }] }
        ], ar: 'a و c يشيران إلى نفس الكائن، أما b فيشير إلى كائن آخر بنفس الحروف.' },
        { type: 'table', head: ['Test', 'Result', 'Why'], rows: [
          ['<code>a == b</code>', '<code>false</code>', 'two different objects (A and B)'],
          ['<code>a == c</code>', '<code>true</code>', 'the same object A'],
          ['<code>a.equals(b)</code>', '<code>true</code>', 'the same letters'],
          ['<code>a.equals(c)</code>', '<code>true</code>', 'the same letters'],
          ['<code>!a.equals("JAVA")</code>', '<code>true</code>', '<code>!</code> means "not": the texts are different']
        ] },
        { type: 'p', en: 'The trap is worst with input. Every String that the Scanner reads is a <b>new</b> object, so <code>==</code> is false even when the user types exactly the right word. Run the program below with the input <code>yes</code>.' },
        { type: 'code', run: true, stdin: 'yes', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String answer = input.next();
        System.out.println(answer == "yes");
        System.out.println(answer.equals("yes"));
    }
}
`, out: J`
false
true
` },
        { type: 'note', kind: 'warn', en: 'Never compare string contents with <code>==</code>. It may seem to work with literals, but it fails for strings read from the keyboard or built while the program runs.' },
        { type: 'h', en: 'Which comes first in the dictionary? compareTo' },
        { type: 'p', en: '<code>a.compareTo(b)</code> compares two strings like a dictionary. It gives a <b>negative</b> number if a comes before b, <b>0</b> if they are equal, and a <b>positive</b> number if a comes after b. How does it get the number? It finds the first position where the letters differ and subtracts their codes.',
          ar: 'compareTo تعطي سالباً أو صفراً أو موجباً حسب الترتيب في القاموس.' },
        { type: 'analogy', title: 'A dictionary', en: '"apple" comes before "banana" in a dictionary, so the answer is negative. Two copies of the same word give 0.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("apple".compareTo("banana"));
        System.out.println("cat".compareTo("car"));
        System.out.println("abc".compareTo("abc"));
    }
}
`, out: J`
-1
2
0
` },
        { type: 'lines', rows: [
          ['"apple".compareTo("banana")', 'First letters differ: \'a\' (97) - \'b\' (98) = <code>-1</code>.'],
          ['"cat".compareTo("car")', 'c and a are equal. Then \'t\' (116) - \'r\' (114) = <code>2</code>.'],
          ['"abc".compareTo("abc")', 'Identical, so <code>0</code>.']
        ] },
        { type: 'check', q: 'What does <code>"Ali".compareTo("Ali")</code> return?', options: ['1', '-1', '0', 'true'], answer: 2, explain: 'For equal strings the result is 0.' },
        { type: 'p', en: 'Special case: if one string is the beginning of the other, the answer is the difference in lengths. For example <code>"hello".compareTo("hello world")</code> is 5 - 11 = -6.' },
        { type: 'p', en: 'In a real program you almost never print the number. You only ask: is it negative, zero or positive? So compareTo usually lives inside an <code>if</code>. There is also <code>compareToIgnoreCase</code>, which treats capital and small letters as the same.' },
        { type: 'table', head: ['Call', 'Result', 'Meaning'], rows: [
          ['<code>"Huda".compareTo("Omar")</code>', '<code>-7</code> (negative)', 'Huda comes first'],
          ['<code>"Omar".compareTo("Huda")</code>', '<code>7</code> (positive)', 'Omar comes after'],
          ['<code>"omar".compareTo("Omar")</code>', '<code>32</code> (positive)', 'small o (111) is after capital O (79)'],
          ['<code>"omar".compareToIgnoreCase("Omar")</code>', '<code>0</code>', 'the same if we ignore case']
        ] },
        { type: 'check', q: 'Which condition is true when <code>name1</code> comes before <code>name2</code> in the dictionary?', options: ['<code>name1.compareTo(name2) &gt; 0</code>', '<code>name1.compareTo(name2) &lt; 0</code>', '<code>name1.compareTo(name2) == 1</code>', '<code>name1 &lt; name2</code>'], answer: 1, explain: 'Negative means "before". Do not test for -1 exactly, and <code>&lt;</code> does not work on Strings.' },
        { type: 'steps', title: 'Worked example: check a password', problem: 'The saved password is <code>riyadh</code>. Read a word. Print Welcome if it matches exactly, or Wrong password. Then print whether it would match if we ignore capital letters.',
          steps: [
            { en: 'Read the word typed by the user.', code: J`
String pass = input.next();
` },
            { en: 'Compare exactly with equals and decide which message to print.', code: J`
if (pass.equals("riyadh")) {
    System.out.println("Welcome");
} else {
    System.out.println("Wrong password");
}
` },
            { en: 'Also print the answer of the ignore-case comparison.', code: J`
System.out.println(pass.equalsIgnoreCase("riyadh"));
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String pass = input.next();
        if (pass.equals("riyadh")) {
            System.out.println("Welcome");
        } else {
            System.out.println("Wrong password");
        }
        System.out.println(pass.equalsIgnoreCase("riyadh"));
    }
}
`, stdin: 'Riyadh', out: J`
Wrong password
true
`, ar: 'equals تفرق بين الحروف الكبيرة والصغيرة، بينما equalsIgnoreCase لا تفرق.' },
        { type: 'steps', title: 'Worked example: who comes first in the class list?', problem: 'A teacher types two names. Print them in dictionary order, one per line.',
          steps: [
            { en: 'Read the two names.', code: J`
String a = input.next();
String b = input.next();
` },
            { en: 'If <code>a.compareTo(b)</code> is negative, a comes first.', code: J`
if (a.compareTo(b) < 0) {
    System.out.println(a);
    System.out.println(b);
}
` },
            { en: 'Otherwise b comes first (or they are equal, and the order does not matter).', code: J`
else {
    System.out.println(b);
    System.out.println(a);
}
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String a = input.next();
        String b = input.next();
        if (a.compareTo(b) < 0) {
            System.out.println(a);
            System.out.println(b);
        } else {
            System.out.println(b);
            System.out.println(a);
        }
    }
}
`, stdin: 'Omar Huda', out: J`
Huda
Omar
`, ar: 'إذا كانت نتيجة compareTo سالبة فالاسم الأول يأتي قبل الثاني.' }
      ],
      mistakes: [
        { title: 'Using == for text', en: 'It compares objects, not letters.', code: J`
if (answer == "yes") { ... }        // unreliable
if (answer.equals("yes")) { ... }   // right
` },
        { title: 'Thinking equals ignores case', en: '<code>"Java".equals("java")</code> is false. Use <code>equalsIgnoreCase</code> if capitals do not matter.' },
        { title: 'Expecting compareTo to return only -1, 0, 1', en: 'It can return any negative or positive number. Only test whether it is &lt; 0, == 0 or &gt; 0.' },
        { title: 'Capital letters sort before small letters', en: '<code>"Zed".compareTo("apple")</code> is negative because \'Z\' (90) is smaller than \'a\' (97).' }
      ],
      remember: [
        'Use <code>equals</code> to compare the text of two strings. Never use <code>==</code>.',
        '<code>equalsIgnoreCase</code> ignores capital and small letters.',
        '<code>compareTo</code>: negative = before, 0 = same, positive = after.',
        'Compare the first different letters by their Unicode codes.',
        '<code>==</code> asks "same object?"; <code>equals</code> asks "same letters?". Strings from the Scanner are always new objects.'
      ],
      rememberAr: 'استخدم equals لمقارنة النصوص ولا تستخدم ==. equalsIgnoreCase تتجاهل حالة الأحرف. compareTo: سالب قبل، صفر متساويان، موجب بعد.',
      practice: [
        { t: 'mcq', q: 'Which method checks if two strings have the same characters, ignoring capital letters?', options: ['<code>equals</code>', '<code>equalsIgnoreCase</code>', '<code>compareTo</code>', '<code>==</code>'], answer: 1, explain: 'equalsIgnoreCase.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        String a = "java";
        String c = "JAVA";
        System.out.println(a.equals(c));
        System.out.println(a.equalsIgnoreCase(c));
    }
}
`, answer: J`
false
true
`, explain: 'equals is exact; equalsIgnoreCase ignores the case.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("apple".compareTo("banana"));
        System.out.println("cat".compareTo("car"));
        System.out.println("abc".compareTo("abc"));
    }
}
`, answer: J`
-1
2
0
`, explain: '\'a\' - \'b\' = -1. \'t\' - \'r\' = 2. Identical strings give 0.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Ali".compareTo("Amal"));
        System.out.println("Zed".compareTo("apple"));
        System.out.println("hello".compareTo("hello world"));
    }
}
`, answer: J`
-1
-7
-6
`, explain: "First difference: 'l' (108) - 'm' (109) = -1. 'Z' (90) - 'a' (97) = -7. \"hello\" is a prefix of \"hello world\", so the result is 5 - 11 = -6." },
        { t: 'mcq', q: 'What does <code>s1.compareTo(s2)</code> return when the two strings are equal?', options: ['1', '-1', '0', 'true'], answer: 2, explain: 'It returns 0.' },
        { t: 'fill', q: 'Complete the code. The first test must be exact; the second ignores capital letters.', code: J`
boolean exact = answer.___("yes");
boolean loose = answer.___("yes");
`, answers: ['equals', 'equalsIgnoreCase'], explain: 'equals is exact; equalsIgnoreCase ignores case.' },
        { t: 'order', q: 'Arrange the lines to print Correct when the answer is "yes".', lines: ['if (answer.equals("yes")) {', '    System.out.println("Correct");', '} else {', '    System.out.println("Try again");', '}'], explain: 'The condition uses equals.' },
        { t: 'code', q: 'Read two words. Print <code>Same</code> if they are the same ignoring capital letters, otherwise print <code>Different</code>. Do not print any prompt.', qAr: 'اقرأ كلمتين واطبع Same إذا تطابقتا بغض النظر عن حالة الأحرف.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String a = input.next();
        String b = input.next();
        // compare and print
    }
}
`, tests: [{ stdin: 'Java java', expected: 'Same' }, { stdin: 'Java Python', expected: 'Different' }, { stdin: 'Ali ALI', expected: 'Same' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String a = input.next();
        String b = input.next();
        if (a.equalsIgnoreCase(b)) {
            System.out.println("Same");
        } else {
            System.out.println("Different");
        }
    }
}
`, hint: 'Use <code>a.equalsIgnoreCase(b)</code> as the condition of an if.', explain: 'equalsIgnoreCase returns true when the texts match ignoring case.' },
        { t: 'bug', q: 'Only cars from parking area <code>B12</code> may enter. The user types <code>B12</code>, but the program prints <code>Wrong area</code>. Tap the line with the bug.', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String code = input.next();
        if (code == "B12") {
            System.out.println("Parking area B12: allowed");
        } else {
            System.out.println("Wrong area");
        }
    }
}
`, bug: 7, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String code = input.next();
        if (code.equals("B12")) {
            System.out.println("Parking area B12: allowed");
        } else {
            System.out.println("Wrong area");
        }
    }
}
`, hint: 'How do we compare the letters of two Strings?', explain: 'The Scanner makes a new String object for the input. <code>==</code> asks whether <code>code</code> and the literal "B12" are the same object, and they are not, so the answer is false. <code>code.equals("B12")</code> compares the letters and gives true.', explainAr: 'لا نقارن النصوص بـ ==، بل بـ equals.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        String a = "Omar";
        String b = new String("Omar");
        String c = a;
        System.out.println(a == b);
        System.out.println(a == c);
        System.out.println(!a.equals(b));
        System.out.println("omar".compareToIgnoreCase(a));
    }
}
`, answer: J`
false
true
false
0
`, explain: 'a and b point to two different objects, so == is false. c copies the arrow of a, so a == c is true. The letters are equal, so equals is true and !equals is false. Ignoring case, "omar" and "Omar" are the same, so 0.' },
        { t: 'code', q: 'Read two names (one word each). Print them in dictionary order, one per line. Use <code>compareTo</code>. Do not print any prompt.', qAr: 'اقرأ اسمين واطبعهما بترتيب القاموس.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String a = input.next();
        String b = input.next();
        // print in dictionary order
    }
}
`, tests: [{ stdin: 'Omar Huda', expected: 'Huda\nOmar' }, { stdin: 'Amal Sara', expected: 'Amal\nSara' }, { stdin: 'Ali Ali', expected: 'Ali\nAli' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String a = input.next();
        String b = input.next();
        if (a.compareTo(b) < 0) {
            System.out.println(a);
            System.out.println(b);
        } else {
            System.out.println(b);
            System.out.println(a);
        }
    }
}
`, hint: 'If <code>a.compareTo(b) &lt; 0</code>, print a first; otherwise print b first.', explain: 'A negative answer means the first name comes before the second in the dictionary.' }
      ]
    },
    {
      title: 'Reading strings: next and nextLine',
      titleAr: 'قراءة النصوص: next و nextLine',
      minutes: 35,
      body: [
        { type: 'h', en: 'One word or the whole line?' },
        { type: 'p', en: 'You already used <code>Scanner</code> to read numbers. To read text there are two tools, and they behave differently. Names often have a space (Sara Alqahtani), so you must choose the right tool.',
          ar: 'next تقرأ كلمة واحدة، و nextLine تقرأ السطر كاملاً.' },
        { type: 'analogy', title: 'A bite or the whole sandwich', en: '<code>next()</code> takes one <b>bite</b>: a single word, up to the next space. <code>nextLine()</code> eats the <b>whole sandwich</b>: everything until the Enter key.' },
        { type: 'code', run: true, stdin: 'Sara Al Harbi\nRiyadh', code: J`
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
}
`, out: J`
First word: Sara
Rest: [ Al Harbi]
City: Riyadh
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['input.next()', 'Reads <code>Sara</code> and stops at the space.'],
          ['input.nextLine()', 'Reads the rest of the same line: <code> Al Harbi</code>, with the space at the start.'],
          ['input.nextLine()', 'Now the next line: <code>Riyadh</code>.']
        ], ar: 'next تتوقف عند أول مسافة، و nextLine تكمل حتى نهاية السطر.' },
        { type: 'check', q: 'The user types <code>King Fahd Road</code> and presses Enter. What does <code>input.next()</code> store?', options: ['<code>"King Fahd Road"</code>', '<code>"King"</code>', '<code>"K"</code>', '<code>""</code>'], answer: 1, explain: 'next reads one word.' },
        { type: 'table', head: ['The user types', 'Call', 'The String you get'], rows: [
          ['<code>King Fahd Road</code>', '<code>input.next()</code>', '<code>"King"</code>'],
          ['<code>King Fahd Road</code>', '<code>input.nextLine()</code>', '<code>"King Fahd Road"</code>'],
          ['<code>&nbsp;&nbsp;&nbsp;Riyadh</code> (spaces first)', '<code>input.next()</code>', '<code>"Riyadh"</code> (next skips spaces before the word)'],
          ['<code>&nbsp;&nbsp;&nbsp;Riyadh</code> (spaces first)', '<code>input.nextLine()</code>', '<code>"&nbsp;&nbsp;&nbsp;Riyadh"</code> (nextLine keeps everything)']
        ] },
        { type: 'p', en: 'So use <code>next()</code> for one-word things: a user name, a course code like IS201, a parking code. Use <code>nextLine()</code> for things that may have spaces: a full name, an address, a course title like "Introduction to Information Systems".',
          ar: 'نستخدم next للكلمة الواحدة و nextLine لما قد يحتوي مسافات.' },
        { type: 'h', en: 'Reading one character' },
        { type: 'p', en: 'There is no <code>nextChar()</code>. To read one character, read a word and take its first character: <code>input.next().charAt(0)</code>. This is what you used in the last lesson.' },
        { type: 'h', en: 'The nextInt then nextLine trap' },
        { type: 'p', en: 'When you type <code>25</code> and press Enter, the scanner takes the 25 but leaves the Enter key waiting in the input. If your next call is <code>nextLine()</code>, it sees that leftover Enter and returns an <b>empty</b> string at once! The cure: call <code>nextLine()</code> one extra time to throw away the leftover.',
          ar: 'بعد nextInt يبقى Enter في الإدخال فتعيد nextLine نصاً فارغاً؛ نضيف nextLine إضافية للتخلص منه.' },
        { type: 'analogy', title: 'The crumb on the table', en: 'After eating the number, a crumb (the Enter key) is left on the table. If you ask for the next sandwich, you pick up the crumb first. Brush the crumb away with an extra <code>nextLine()</code>.' },
        { type: 'p', en: 'Let us look at the input the way the Scanner sees it. The user types 25, presses Enter, types Sara Ali, presses Enter. For the Scanner this is one long row of characters: <code>25\\nSara Ali\\n</code>, where <code>\\n</code> is the Enter key. Each call takes a piece from the front of the row.' },
        { type: 'table', head: ['Call', 'It takes', 'Still waiting in the input'], rows: [
          ['(start)', '', '<code>25\\nSara Ali\\n</code>'],
          ['<code>nextInt()</code>', 'the number <code>25</code>, and stops before the Enter', '<code>\\nSara Ali\\n</code>'],
          ['<code>nextLine()</code>', 'everything up to the Enter: nothing! It returns <code>""</code>', '<code>Sara Ali\\n</code>'],
          ['<code>nextLine()</code>', '<code>"Sara Ali"</code>', '(nothing)']
        ] },
        { type: 'memory', title: 'The empty String trap', en: 'This is the program <b>without</b> the extra nextLine, with the input <code>25</code>, Enter, <code>Sara Ali</code>. The variable <code>name</code> gets an empty String object, and "Sara Ali" is never read.', code: J`
int age = input.nextInt();
String name = input.nextLine();
`, frames: [
          { label: 'After <code>int age = input.nextInt();</code>', vars: [{ name: 'age', type: 'int', value: '25' }] },
          { label: 'After <code>String name = input.nextLine();</code>', vars: [{ name: 'age', type: 'int', value: '25' }, { name: 'name', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '""' }, { name: 'length()', value: '0' }] }] }
        ], ar: 'name يشير إلى نص فارغ طوله 0، والاسم ما زال ينتظر في الإدخال.' },
        { type: 'code', run: true, stdin: '25\nSara Ali', code: J`
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
`, out: 'Sara Ali is 25' },
        { type: 'lines', rows: [
          ['int age = input.nextInt();', 'Reads 25. The Enter key is still waiting.'],
          ['input.nextLine();', 'Brush the crumb away. We ignore the returned value.'],
          ['String name = input.nextLine();', 'Now this reads the real next line: <code>Sara Ali</code>.']
        ] },
        { type: 'check', q: 'You read an <code>int</code>, then a full line. What should you add between them?', options: ['<code>input.nextInt();</code>', '<code>input.nextLine();</code>', 'Nothing', '<code>input.close();</code>'], answer: 1, explain: 'The extra nextLine skips the leftover Enter.' },
        { type: 'note', kind: 'exam', en: 'Exam trap: <code>nextInt()</code> followed directly by <code>nextLine()</code> returns an empty string. The same happens after <code>nextDouble()</code>.' },
        { type: 'p', en: 'The other order has no trap. <code>nextLine()</code> eats its Enter key, so a <code>nextInt()</code> after it works normally. And <code>next()</code> or <code>nextInt()</code> after a <code>nextInt()</code> also work, because they skip spaces and Enter keys before the next word. Only <b>nextLine after nextInt/nextDouble/next</b> needs the extra call.' },
        { type: 'table', head: ['First call', 'Then', 'Extra nextLine needed?'], rows: [
          ['<code>nextInt()</code>', '<code>nextLine()</code>', '<b>Yes</b>'],
          ['<code>nextDouble()</code>', '<code>nextLine()</code>', '<b>Yes</b>'],
          ['<code>next()</code>', '<code>nextLine()</code> (on the next line)', '<b>Yes</b>'],
          ['<code>nextLine()</code>', '<code>nextInt()</code>', 'No'],
          ['<code>nextInt()</code>', '<code>nextInt()</code> or <code>next()</code>', 'No']
        ] },
        { type: 'steps', title: 'Worked example: a student card line', problem: 'Read the age (a whole number) and then the full name on the next line. Print the name and the age in one sentence.',
          steps: [
            { en: 'Read the age.', code: J`
int age = input.nextInt();
` },
            { en: 'Skip the rest of the age line.', code: J`
input.nextLine();
` },
            { en: 'Read the full name (it may contain spaces).', code: J`
String name = input.nextLine();
` },
            { en: 'Print the sentence.', code: J`
System.out.println(name + " is " + age);
` }
          ],
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
`, stdin: '19\nOmar Ali', out: 'Omar Ali is 19', ar: 'السطر الإضافي من nextLine يتخلص من Enter المتبقي.' },
        { type: 'steps', title: 'Worked example: a cafe order', problem: 'A cafe app reads three lines: the number of cups (a whole number), the drink name (it may have spaces), and the size as one letter (S, M or L). Print one line like <code>2 x Arabic coffee (M)</code>.',
          steps: [
            { en: 'Read the number of cups.', code: J`
int cups = input.nextInt();
` },
            { en: 'Brush away the Enter left after the number, then read the full drink name.', code: J`
input.nextLine();
String drink = input.nextLine();
` },
            { en: 'Read the size: one word, then its first character.', code: J`
char size = input.next().charAt(0);
` },
            { en: 'Print the order line.', code: J`
System.out.println(cups + " x " + drink + " (" + size + ")");
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int cups = input.nextInt();
        input.nextLine();
        String drink = input.nextLine();
        char size = input.next().charAt(0);
        System.out.println(cups + " x " + drink + " (" + size + ")");
    }
}
`, stdin: '2\nArabic coffee\nM', out: '2 x Arabic coffee (M)', ar: 'nextLine إضافية بعد العدد، ثم nextLine للاسم، ثم next().charAt(0) للحجم.' }
      ],
      mistakes: [
        { title: 'Using next() for a full name', en: 'You only get the first word.', code: J`
String name = input.next();       // "Sara" only
String name = input.nextLine();   // "Sara Alqahtani"
` },
        { title: 'nextLine right after nextInt', en: 'You get an empty string. Add an extra <code>input.nextLine();</code>.' },
        { title: 'Looking for nextChar()', en: 'It does not exist. Use <code>input.next().charAt(0)</code>.' },
        { title: 'Printing a prompt in a test', en: 'Online tests compare the output exactly. Do not print extra text such as "Enter your name:" unless the task asks for it.' }
      ],
      remember: [
        '<code>next()</code> reads one word. <code>nextLine()</code> reads the rest of the line.',
        'One character: <code>input.next().charAt(0)</code>.',
        'After <code>nextInt()</code> or <code>nextDouble()</code>, an Enter key is left over.',
        'Cure: call <code>input.nextLine();</code> once before reading a full line.',
        'nextLine first and nextInt after it is fine: no extra call is needed.'
      ],
      rememberAr: 'next تقرأ كلمة و nextLine تقرأ بقية السطر. لقراءة حرف: input.next().charAt(0). بعد nextInt أضف nextLine إضافية قبل قراءة سطر كامل.',
      practice: [
        { t: 'mcq', q: 'Which method reads a whole line including spaces?', options: ['<code>next()</code>', '<code>nextLine()</code>', '<code>nextInt()</code>', '<code>nextWord()</code>'], answer: 1, explain: 'nextLine reads until the Enter key.' },
        { t: 'mcq', q: 'The user types <code>King Fahd Road</code>. What does <code>input.next()</code> read?', options: ['<code>King Fahd Road</code>', '<code>King</code>', '<code>Road</code>', 'Nothing'], answer: 1, explain: 'next stops at the first space.' },
        { t: 'mcq', q: 'What does <code>input.nextLine()</code> return if it comes right after <code>input.nextInt()</code>?', options: ['The next line of text', 'An empty string', 'The number', 'An error'], answer: 1, explain: 'The Enter key left over after the number ends the line immediately.' },
        { t: 'mcq', q: 'How do you read a single character from the keyboard?', options: ['<code>input.nextChar()</code>', '<code>input.next().charAt(0)</code>', '<code>input.nextLine().length()</code>', '<code>(char) input.nextInt()</code>'], answer: 1, explain: 'Read a word and take its first character.' },
        { t: 'fill', q: 'Complete the code to read an age and then a full name.', code: J`
int age = input.nextInt();
input.___();
String name = input.___();
`, answers: ['nextLine', 'nextLine'], explain: 'The first nextLine skips the leftover Enter; the second reads the name.' },
        { t: 'order', q: 'Arrange the lines to read a number and a full name correctly, then print the name.', lines: ['Scanner input = new Scanner(System.in);', 'int age = input.nextInt();', 'input.nextLine();', 'String name = input.nextLine();', 'System.out.println(name);'], explain: 'The skipping nextLine goes between the number and the name.' },
        { t: 'code', q: 'Read one full line (a name that may contain spaces). Print <code>Hello, NAME!</code> where NAME is the line you read. Example: <code>Sara Alqahtani</code> prints <code>Hello, Sara Alqahtani!</code>. Do not print any prompt.', qAr: 'اقرأ الاسم كاملاً واطبع تحية.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // read the line and print the greeting
    }
}
`, tests: [{ stdin: 'Sara Alqahtani', expected: 'Hello, Sara Alqahtani!' }, { stdin: 'Omar', expected: 'Hello, Omar!' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine();
        System.out.println("Hello, " + name + "!");
    }
}
`, hint: 'Use <code>nextLine()</code> to keep the space inside the name.', explain: 'nextLine reads the whole line.' },
        { t: 'code', q: 'The first line contains the age (a whole number) and the second line contains a full name. Print the name, then <code> is </code>, then the age on one line. Example: input <code>25</code> then <code>Sara Ali</code> prints <code>Sara Ali is 25</code>. Do not print any prompt.', qAr: 'اقرأ العمر ثم الاسم واطبع جملة واحدة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        // remember the leftover Enter
    }
}
`, tests: [{ stdin: '25\nSara Ali', expected: 'Sara Ali is 25' }, { stdin: '19\nOmar', expected: 'Omar is 19' }],
          solution: J`
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
`, hint: 'Add <code>input.nextLine();</code> before reading the name.', explain: 'The extra nextLine removes the Enter key left after the number.' },
        { t: 'bug', q: 'The input is <code>12</code> on the first line and <code>Introduction to Information Systems</code> on the second line. The program should print <code>Introduction to Information Systems is in room 12</code>, but it prints <code> is in room 12</code>. Tap the line with the bug.', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int room = input.nextInt();
        String course = input.nextLine();
        System.out.println(course + " is in room " + room);
    }
}
`, bug: 7, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int room = input.nextInt();
        input.nextLine();
        String course = input.nextLine();
        System.out.println(course + " is in room " + room);
    }
}
`, hint: 'What is left in the input right after <code>nextInt()</code>?', explain: 'After <code>nextInt()</code> reads 12, the Enter key is still waiting. The <code>nextLine()</code> in line 7 reads up to that Enter, so <code>course</code> is the empty String. Add <code>input.nextLine();</code> before line 7 to throw the Enter away; then the next nextLine reads the course title.', explainAr: 'بعد nextInt يبقى Enter، فنضيف nextLine إضافية قبل قراءة السطر.' },
        { t: 'mcq', q: 'The user types <code>3</code>, Enter, <code>Data Structures</code>, Enter. What is <code>title.length()</code>?', code: J`
int n = input.nextInt();
String title = input.nextLine();
`, options: ['15', '0', '1', 'The program crashes'], answer: 1, explain: 'nextLine reads what is left on the line of the number: nothing. title is the empty String, so its length is 0.' },
        { t: 'code', q: 'Read three lines: the number of cups (whole number), the drink name (may have spaces) and the size (one letter). Print one line like <code>2 x Arabic coffee (M)</code>. Do not print any prompt.', qAr: 'اقرأ عدد الأكواب واسم المشروب والحجم واطبع سطر الطلب.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int cups = input.nextInt();
        // remember the leftover Enter
    }
}
`, tests: [{ stdin: '2\nArabic coffee\nM', expected: '2 x Arabic coffee (M)' }, { stdin: '1\nMint tea\nL', expected: '1 x Mint tea (L)' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int cups = input.nextInt();
        input.nextLine();
        String drink = input.nextLine();
        char size = input.next().charAt(0);
        System.out.println(cups + " x " + drink + " (" + size + ")");
    }
}
`, hint: 'nextInt, an extra nextLine, nextLine for the drink, then <code>input.next().charAt(0)</code> for the size.', explain: 'The extra nextLine removes the Enter after the number. The size is read as a word and its first character is taken.' }
      ]
    },
    {
      title: 'More String tools: trim, replace, contains, startsWith',
      titleAr: 'أدوات نصية أخرى: trim و replace و contains و startsWith',
      minutes: 30,
      body: [
        { type: 'h', en: 'Small tools that save a lot of work' },
        { type: 'p', en: 'People type text in many ways. One student types <code>"  Sara Ali "</code> with extra spaces. Another types a phone number with dashes: <code>051-234-5678</code>. A sign-up page must clean such text and ask simple questions about it: does the email have an @? Does the phone number start with 05? In this lesson you will learn six small String tools that do these jobs in one line each.',
          ar: 'نتعلم أدوات تنظف النص وتجيب عن أسئلة بسيطة عنه.' },
        { type: 'analogy', title: 'The registration office', en: 'Think of the person at the registration office checking forms. First she cleans the form (removes extra marks), then she fixes small things (writes the phone number without dashes), then she asks questions: "Is the email filled in? Does it end with .edu.sa?". Our tools do the same jobs: <code>trim</code> and <code>replace</code> clean, and <code>contains</code>, <code>startsWith</code>, <code>endsWith</code> and <code>isEmpty</code> ask questions.' },
        { type: 'h', en: 'trim: remove the spaces at both ends' },
        { type: 'p', en: 'Users often press the space bar before or after a word. To the computer, <code>"  Sara Ali "</code> and <code>"Sara Ali"</code> are different texts. <code>trim()</code> gives back a new String without the spaces at the start and at the end. The spaces in the middle stay, because they are part of the text.',
          ar: 'trim تحذف المسافات من البداية والنهاية فقط، وتبقى المسافة الوسطى.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String typed = "   Sara Ali  ";
        String clean = typed.trim();
        System.out.println("[" + typed + "]");
        System.out.println("[" + clean + "]");
        System.out.println(clean.length());
    }
}
`, out: J`
[   Sara Ali  ]
[Sara Ali]
8
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['String clean = typed.trim();', 'Make a cleaned copy and keep it in <code>clean</code>. <code>typed</code> is not changed.'],
          ['"[" + typed + "]"', 'The brackets let you see the spaces: three before and two after.'],
          ['clean.length()', 'S-a-r-a, space, A-l-i: 8 characters. The middle space counts.']
        ] },
        { type: 'check', q: 'What is <code>"  IS 201 ".trim()</code>?', options: ['<code>"IS201"</code>', '<code>"IS 201"</code>', '<code>"IS 201 "</code>', '<code>"  IS 201"</code>'], answer: 1, explain: 'trim removes the spaces at both ends only. The space between IS and 201 stays.' },
        { type: 'h', en: 'replace: swap one piece for another' },
        { type: 'p', en: '<code>s.replace(old, new)</code> gives back a new String where <b>every</b> <code>old</code> piece is changed to <code>new</code>. It works with chars (single quotes) or with Strings (double quotes). To <b>delete</b> a piece, replace it with the empty String <code>""</code>.',
          ar: 'replace تستبدل كل ظهور للجزء القديم بالجديد، ولحذف جزء نستبدله بـ "".' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String phone = "051-234-5678";
        System.out.println(phone.replace("-", ""));
        System.out.println("IS 201".replace(' ', '_'));
        System.out.println("banana".replace("a", "o"));
    }
}
`, out: J`
0512345678
IS_201
bonono
` },
        { type: 'lines', rows: [
          ['phone.replace("-", "")', 'Both dashes become nothing: <code>0512345678</code>.'],
          ['"IS 201".replace(\' \', \'_\')', 'The char space becomes the char underscore: <code>IS_201</code>.'],
          ['"banana".replace("a", "o")', 'All three a letters change, not only the first: <code>bonono</code>.']
        ] },
        { type: 'memory', title: 'replace makes a new object', en: 'Like every String method, replace builds a new object. The old phone text is still there, unchanged.', code: J`
String phone = "051-234-5678";
String digits = phone.replace("-", "");
`, frames: [
          { label: 'After <code>String phone = "051-234-5678";</code>', vars: [{ name: 'phone', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"051-234-5678"' }] }] },
          { label: 'After <code>String digits = phone.replace("-", "");</code>', vars: [{ name: 'phone', type: 'String', ref: 'A' }, { name: 'digits', type: 'String', ref: 'B' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"051-234-5678"' }] }, { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"0512345678"' }] }] }
        ], ar: 'phone ما زال كما هو، والنص الجديد في كائن آخر.' },
        { type: 'check', q: 'What is <code>"2026-11-21".replace("-", "/")</code>?', options: ['<code>"2026/11-21"</code>', '<code>"2026/11/21"</code>', '<code>"20261121"</code>', '<code>"2026-11-21"</code>'], answer: 1, explain: 'replace changes every dash, not only the first one.' },
        { type: 'h', en: 'Yes/no questions about a String' },
        { type: 'p', en: 'Four methods answer a question with <code>true</code> or <code>false</code>. Because they give a boolean, they fit straight into an <code>if</code>. Read the table carefully; the method names say exactly what they ask.' },
        { type: 'table', head: ['Method', 'Question', 'Example', 'Result'], rows: [
          ['<code>s.contains(x)</code>', 'Is x somewhere inside s?', '<code>"Sara Ali".contains("Ali")</code>', '<code>true</code>'],
          ['<code>s.startsWith(x)</code>', 'Does s begin with x?', '<code>"0512345678".startsWith("05")</code>', '<code>true</code>'],
          ['<code>s.endsWith(x)</code>', 'Does s finish with x?', '<code>"uni.edu.sa".endsWith(".sa")</code>', '<code>true</code>'],
          ['<code>s.isEmpty()</code>', 'Does s have no characters?', '<code>"".isEmpty()</code>', '<code>true</code>'],
          ['<code>s.isEmpty()</code>', 'the same', '<code>" ".isEmpty()</code>', '<code>false</code> (a space is a character)']
        ] },
        { type: 'analogy', title: 'Questions about a book', en: 'A librarian asks about a book title: Does it <b>contain</b> the word "Java"? Does it <b>start with</b> "Introduction"? Does it <b>end with</b> "Edition"? Is the title box <b>empty</b>? She answers each question with yes or no, and so does Java.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String email = "huda.saad@uni.edu.sa";
        System.out.println(email.contains("@"));
        System.out.println(email.endsWith(".edu.sa"));
        if (email.startsWith("huda")) {
            System.out.println("Hello Huda");
        }
    }
}
`, out: J`
true
true
Hello Huda
` },
        { type: 'lines', rows: [
          ['email.contains("@")', 'There is an @ inside, so <code>true</code>.'],
          ['email.endsWith(".edu.sa")', 'The last 7 characters are .edu.sa, so <code>true</code>.'],
          ['if (email.startsWith("huda"))', 'The text begins with huda, so the message is printed.']
        ], ar: 'هذه الدوال تعيد true أو false فنستخدمها شرطاً في if.' },
        { type: 'note', kind: 'warn', en: 'These questions are <b>case-sensitive</b>: <code>"Sara".contains("sara")</code> is <code>false</code>. If capital letters do not matter, change both sides to small letters first: <code>name.toLowerCase().contains("sara")</code>.', ar: 'هذه الدوال تفرّق بين الحروف الكبيرة والصغيرة.' },
        { type: 'check', q: 'What is <code>"Riyadh".startsWith("r")</code>?', options: ['<code>true</code>', '<code>false</code>', 'An error'], answer: 1, explain: 'The text starts with a capital R, and a small r is a different character.' },
        { type: 'h', en: 'Building a username and an email from a name' },
        { type: 'p', en: 'Many universities make your username from your name: the first letter of your first name and your whole last name, all in small letters. Then the email is the username plus the university address. We already know every tool for this job; now we put them together.' },
        { type: 'steps', title: 'Worked example: username and email', problem: 'Read a full name (first and last name, maybe with extra spaces around it). Print the username (first letter + last name, small letters) and the email (username + <code>@uni.edu.sa</code>).',
          steps: [
            { en: 'Read the whole line and clean the spaces at both ends at once.', code: J`
String name = input.nextLine().trim();
` },
            { en: 'Split the name at the space.', code: J`
int space = name.indexOf(' ');
String first = name.substring(0, space);
String last = name.substring(space + 1);
` },
            { en: 'Join the first letter (a char) and the last name (a String). char + String gives a String. Then make it all small letters.', code: J`
String username = (first.charAt(0) + last).toLowerCase();
` },
            { en: 'Build the email and print both lines.', code: J`
String email = username + "@uni.edu.sa";
System.out.println("Username: " + username);
System.out.println("Email: " + email);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine().trim();
        int space = name.indexOf(' ');
        String first = name.substring(0, space);
        String last = name.substring(space + 1);
        String username = (first.charAt(0) + last).toLowerCase();
        String email = username + "@uni.edu.sa";
        System.out.println("Username: " + username);
        System.out.println("Email: " + email);
    }
}
`, stdin: '  Sara Alqahtani ', out: J`
Username: salqahtani
Email: salqahtani@uni.edu.sa
`, ar: 'نظفنا الاسم بـ trim ثم قسمناه ثم بنينا اسم المستخدم والبريد.' },
        { type: 'note', kind: 'tip', en: 'Look at <code>input.nextLine().trim()</code>: you can call a method on the answer of another method, from left to right. First nextLine gives a String, then trim cleans it. This is called <b>chaining</b>.' }
      ],
      mistakes: [
        { title: 'Expecting trim to remove all spaces', en: 'trim removes spaces only at the two ends. To remove every space, use <code>replace(" ", "")</code>.', code: J`
"Sara  Ali".trim()          // "Sara  Ali" (middle spaces stay)
"Sara  Ali".replace(" ", "") // "SaraAli"
` },
        { title: 'Forgetting to store the result', en: 'trim and replace return a new String. Alone they change nothing.', code: J`
name.trim();            // name is unchanged
name = name.trim();     // right
` },
        { title: 'Forgetting that the questions are case-sensitive', en: '<code>"Sara Ali".contains("ali")</code> is false. Use <code>toLowerCase()</code> on the text first if case does not matter.' },
        { title: 'Thinking a String of spaces is empty', en: '<code>"   ".isEmpty()</code> is false, because spaces are characters. To test for "nothing typed", use <code>s.trim().isEmpty()</code>.' }
      ],
      remember: [
        '<code>trim()</code> removes spaces at both ends; middle spaces stay.',
        '<code>replace(old, new)</code> changes <b>every</b> old piece; replace with <code>""</code> to delete.',
        '<code>contains</code>, <code>startsWith</code>, <code>endsWith</code> and <code>isEmpty</code> answer true or false.',
        'All of them are case-sensitive and none of them changes the original String.',
        'Chaining: <code>input.nextLine().trim()</code> calls methods one after another, left to right.'
      ],
      rememberAr: 'trim تحذف المسافات من الطرفين، و replace تستبدل كل ظهور. contains و startsWith و endsWith و isEmpty تعيد true أو false وتفرق بين حالة الأحرف. لا تغير أي دالة النص الأصلي.',
      practice: [
        { t: 'mcq', q: 'What is <code>"  hi  ".trim()</code>?', options: ['<code>"hi"</code>', '<code>"  hi"</code>', '<code>"hi  "</code>', '<code>"h i"</code>'], answer: 0, explain: 'trim removes the spaces at both ends.', explainAr: 'trim تحذف المسافات من البداية والنهاية.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        String code = "IS-201-M";
        System.out.println(code.replace("-", " "));
        System.out.println(code.contains("201"));
        System.out.println(code.startsWith("is"));
        System.out.println(code.endsWith("M"));
        System.out.println("".isEmpty());
    }
}
`, answer: J`
IS 201 M
true
false
true
true
`, explain: 'Every dash becomes a space. "201" is inside. The text starts with capital IS, not small is, so false. It ends with M. The empty String has no characters.' },
        { t: 'fill', q: 'Complete the code: the first test checks that the phone begins with 05, the second checks that the email has an @ somewhere.', code: J`
boolean mobile = phone.___("05");
boolean hasAt = email.___("@");
`, answers: ['startsWith', 'contains'], explain: 'startsWith looks only at the beginning; contains looks everywhere.' },
        { t: 'bug', q: 'The user types <code>  IS201 </code> (with spaces around it). The program should print <code>Course found</code>, but it prints <code>Not found</code>. Tap the line with the bug.', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String code = input.nextLine();
        code.trim();
        if (code.equals("IS201")) {
            System.out.println("Course found");
        } else {
            System.out.println("Not found");
        }
    }
}
`, bug: 7, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String code = input.nextLine();
        code = code.trim();
        if (code.equals("IS201")) {
            System.out.println("Course found");
        } else {
            System.out.println("Not found");
        }
    }
}
`, hint: 'Does <code>trim()</code> change <code>code</code>?', explain: '<code>code.trim()</code> builds a cleaned String, but line 7 throws it away. <code>code</code> still has the spaces, so equals gives false. Store the result: <code>code = code.trim();</code>.', explainAr: 'يجب تخزين ناتج trim في المتغير.' },
        { t: 'code', q: 'Read a full name (first and last name, maybe with spaces around it). Print the username (first letter of the first name + the last name, all small letters) and the email (username + <code>@uni.edu.sa</code>), like the worked example: <code>Username: salqahtani</code> and <code>Email: salqahtani@uni.edu.sa</code>. Do not print any prompt.', qAr: 'اقرأ الاسم واطبع اسم المستخدم والبريد الجامعي.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine().trim();
        // split, build the username, build the email
    }
}
`, tests: [{ stdin: '  Sara Alqahtani ', expected: 'Username: salqahtani\nEmail: salqahtani@uni.edu.sa' }, { stdin: 'Omar Ali', expected: 'Username: oali\nEmail: oali@uni.edu.sa' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine().trim();
        int space = name.indexOf(' ');
        String first = name.substring(0, space);
        String last = name.substring(space + 1);
        String username = (first.charAt(0) + last).toLowerCase();
        System.out.println("Username: " + username);
        System.out.println("Email: " + username + "@uni.edu.sa");
    }
}
`, hint: 'Split at <code>indexOf(\' \')</code>. Then <code>(first.charAt(0) + last).toLowerCase()</code>.', explain: 'char + String gives a String, and toLowerCase makes every letter small.' },
        { t: 'code', q: 'Read one word. Print <code>University email</code> if it contains <code>@</code> and ends with <code>.edu.sa</code>; else print <code>Other email</code> if it contains <code>@</code>; else print <code>Not an email</code>. Do not print any prompt.', qAr: 'اقرأ كلمة وحدد نوع البريد.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String email = input.next();
        // if / else if / else
    }
}
`, tests: [{ stdin: 'noura@uni.edu.sa', expected: 'University email' }, { stdin: 'omar@mail.com', expected: 'Other email' }, { stdin: 'hello', expected: 'Not an email' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String email = input.next();
        if (email.contains("@") && email.endsWith(".edu.sa")) {
            System.out.println("University email");
        } else if (email.contains("@")) {
            System.out.println("Other email");
        } else {
            System.out.println("Not an email");
        }
    }
}
`, hint: 'The first condition uses <code>&&</code> to join <code>contains("@")</code> and <code>endsWith(".edu.sa")</code>.', explain: 'Test the most special case first. If it fails, the else if checks the wider case.' }
      ]
    },
    {
      title: 'Strings are immutable: new objects, not changes',
      titleAr: 'النصوص غير قابلة للتغيير: كائنات جديدة لا تعديلات',
      minutes: 25,
      body: [
        { type: 'h', en: 'A String never changes' },
        { type: 'p', en: 'You have used <code>toUpperCase</code>, <code>trim</code> and <code>replace</code>. Many students write <code>name.trim();</code> and are surprised that nothing happens. In this lesson you will see the reason with memory pictures, so you never lose a result again. The key word is <b>immutable</b>: it means "cannot be changed after it is made". Every String object in Java is immutable.',
          ar: 'immutable تعني أن الكائن لا يمكن تغييره بعد إنشائه، وكل نص String كذلك.' },
        { type: 'analogy', title: 'A printed receipt', en: 'A shop prints your receipt. If the cashier made a mistake, she cannot erase the ink. She prints a <b>new</b> receipt and gives it to you, and the old one goes to the bin. A String method works the same way: it never erases the old text; it prints a new String.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String s = "  Riyadh  ";
        s.trim();
        System.out.println("[" + s + "]");
        s = s.trim();
        System.out.println("[" + s + "]");
    }
}
`, out: J`
[  Riyadh  ]
[Riyadh]
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['s.trim();', 'A new, cleaned String is made, but no variable keeps it. <code>s</code> still points to the old text.'],
          ['s = s.trim();', 'A new cleaned String is made again, and now the <code>=</code> moves the arrow of <code>s</code> to it.'],
          ['System.out.println("[" + s + "]");', 'Now <code>s</code> points to "Riyadh".']
        ], ar: 'التغيير الحقيقي يحدث في السهم: s = s.trim() تنقل s إلى الكائن الجديد.' },
        { type: 'memory', title: 's = s.trim() moves the arrow', en: 'Watch the arrow of <code>s</code>. The object "  Riyadh  " is never changed. In the end, nobody points to it, so Java throws it away (garbage).', code: J`
String s = "  Riyadh  ";
s.trim();
s = s.trim();
`, frames: [
          { label: 'After <code>String s = "  Riyadh  ";</code>', vars: [{ name: 's', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"  Riyadh  "' }] }] },
          { label: 'After <code>s.trim();</code> (a new object, but nobody keeps it)', vars: [{ name: 's', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"  Riyadh  "' }] }, { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"Riyadh"' }], gone: true }] },
          { label: 'After <code>s = s.trim();</code> (s points to the new object)', vars: [{ name: 's', type: 'String', ref: 'C' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"  Riyadh  "' }], gone: true }, { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"Riyadh"' }] }] }
        ], ar: 'الكائن القديم لم يتغير، والمتغير هو الذي انتقل إلى كائن جديد.' },
        { type: 'check', q: 'After <code>String c = "is201"; c.toUpperCase();</code> what does <code>c</code> point to?', options: ['<code>"IS201"</code>', '<code>"is201"</code>', 'nothing (null)', 'an error'], answer: 1, explain: 'toUpperCase built "IS201", but the answer was not stored, so c still points to "is201".' },
        { type: 'h', en: 'Two variables, one String' },
        { type: 'p', en: 'What happens when two variables point to the same String? <code>String t = s;</code> copies only the <b>arrow</b>, not the text. Then <code>s = s.toUpperCase();</code> moves only the arrow of <code>s</code>. The arrow of <code>t</code> stays on the old object, and that object was not changed by anybody. So <code>t</code> keeps the old text.',
          ar: 't = s تنسخ السهم فقط. وعندما ننقل s إلى كائن جديد يبقى t على القديم.' },
        { type: 'analogy', title: 'Two keys, one locker, nothing changes inside', en: 'You and your friend both have a key to the same locker. Nobody can change what is inside (it is immutable). If you get a key to a <b>new</b> locker, your friend still has the key to the old one, with the same things inside. Your friend never gets a surprise.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String s = "sara";
        String t = s;
        s = s.toUpperCase();
        System.out.println(s);
        System.out.println(t);
    }
}
`, out: J`
SARA
sara
` },
        { type: 'memory', title: 'Only one arrow moves', code: J`
String s = "sara";
String t = s;
s = s.toUpperCase();
`, frames: [
          { label: 'After <code>String s = "sara";</code>', vars: [{ name: 's', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"sara"' }] }] },
          { label: 'After <code>String t = s;</code> (two arrows, one object)', vars: [{ name: 's', type: 'String', ref: 'A' }, { name: 't', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"sara"' }] }] },
          { label: 'After <code>s = s.toUpperCase();</code> (s moves, t stays)', vars: [{ name: 's', type: 'String', ref: 'B' }, { name: 't', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"sara"' }] }, { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"SARA"' }] }] }
        ], ar: 'تحرك سهم s فقط، وبقي t يشير إلى "sara".' },
        { type: 'check', q: 'What does this print?', code: J`
String a = "huda";
String b = a;
a = a + "!";
System.out.println(b);
`, options: ['<code>huda!</code>', '<code>huda</code>', '<code>!</code>', 'an error'], answer: 1, explain: 'b keeps the arrow to the old object "huda". The + made a new object for a only.' },
        { type: 'h', en: 'Joining also makes a new object' },
        { type: 'p', en: '<code>msg = msg + "!"</code> does not stick the ! onto the old object. The <code>+</code> builds a brand-new String with all the characters, and the <code>=</code> moves the arrow to it. The short form <code>msg += "!";</code> does exactly the same.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String msg = "Salam";
        msg = msg + ", Huda";
        msg += "!";
        System.out.println(msg);
    }
}
`, out: 'Salam, Huda!' },
        { type: 'lines', rows: [
          ['msg = msg + ", Huda";', 'A new object "Salam, Huda" is made; msg points to it. "Salam" is left alone.'],
          ['msg += "!";', 'Another new object "Salam, Huda!"; msg moves again.']
        ] },
        { type: 'note', kind: 'exam', en: 'Exam question: "Which statement changes the String object?" The answer is <b>none</b>. No method and no operator can change a String object. Only a <b>variable</b> can be made to point to another object, with <code>=</code>.', ar: 'لا شيء يغيّر كائن String؛ فقط المتغير يُوجَّه إلى كائن آخر.' },
        { type: 'h', en: 'Why did Java make Strings immutable?' },
        { type: 'p', en: 'It may look like extra work, but it makes programs <b>safe</b>. A big program shares the same text in many places: your username is used by the login part, the timetable part and the grades part. If one part could change the letters inside the object, all the other parts would suddenly see a different name. Because nobody can change a String object, it is always safe to share it. A part that wants different text simply makes a new String for itself.',
          ar: 'عدم التغيير يجعل مشاركة النص آمنة: لا يستطيع جزء من البرنامج أن يغيّر النص على الأجزاء الأخرى.' },
        { type: 'check', q: 'Which sentence is true?', options: ['<code>s.toUpperCase()</code> changes the letters inside the object of s', '<code>s = s.toUpperCase();</code> makes a new object and moves the arrow of s to it', '<code>s += "!";</code> adds ! to the end of the old object', 'Two variables can never point to the same String'], answer: 1, explain: 'Methods and + always make new objects. Only the arrow of the variable moves. Two variables can share one object, and that is safe because it cannot change.' },
        { type: 'steps', title: 'Worked example: clean a course code', problem: 'Students type course codes in many ways: <code>  is 201 </code>, <code>Is201</code>, <code>IS 201</code>. Read a line and print it as a clean code like <code>IS201</code>: no spaces at all, capital letters.',
          steps: [
            { en: 'Read the whole line and show it in brackets, so you can see the spaces.', code: J`
String code = input.nextLine();
System.out.println("Before: [" + code + "]");
` },
            { en: 'Remove the spaces at the ends. Store the new String back in <code>code</code>.', code: J`
code = code.trim();
` },
            { en: 'Remove the spaces in the middle, and store again.', code: J`
code = code.replace(" ", "");
` },
            { en: 'Make the letters capital, store, and print.', code: J`
code = code.toUpperCase();
System.out.println("After: [" + code + "]");
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String code = input.nextLine();
        System.out.println("Before: [" + code + "]");
        code = code.trim();
        code = code.replace(" ", "");
        code = code.toUpperCase();
        System.out.println("After: [" + code + "]");
    }
}
`, stdin: '  is 201 ', out: J`
Before: [  is 201 ]
After: [IS201]
`, ar: 'في كل خطوة نخزن النص الجديد في نفس المتغير.' },
        { type: 'p', en: 'The three middle lines can also be written as one chain: <code>code = code.trim().replace(" ", "").toUpperCase();</code>. Each method works on the new String made by the method before it. Use the chain only when you feel safe with the long form.' }
      ],
      mistakes: [
        { title: 'Calling a method and not storing the answer', en: 'The most common String mistake. The new String is lost.', code: J`
name.toUpperCase();          // name is unchanged
name = name.toUpperCase();   // right
` },
        { title: 'Thinking t changes when s changes', en: 'After <code>t = s;</code> and <code>s = s.trim();</code>, <code>t</code> still points to the old text. Only the arrow of s moved.' },
        { title: 'Thinking + adds to the old String', en: '<code>msg + "!"</code> alone makes a new String and loses it. Write <code>msg = msg + "!";</code> or <code>msg += "!";</code>.' },
        { title: 'Comparing a new String with ==', en: '<code>s.trim() == "Riyadh"</code> is false even when the letters match, because trim made a new object. Use <code>s.trim().equals("Riyadh")</code>.' }
      ],
      remember: [
        'A String object can never be changed: it is <b>immutable</b>.',
        'Methods like trim, replace and toUpperCase return a <b>new</b> String.',
        'To keep the new text, store it: <code>s = s.trim();</code>.',
        '<code>t = s</code> copies the arrow; moving s later does not move t.',
        'An object with no arrow left is garbage; Java removes it.'
      ],
      rememberAr: 'كائن String لا يتغير أبداً. الدوال تعيد نصاً جديداً، فخزّنه: s = s.trim(). النسخ t = s ينسخ السهم فقط. الكائن الذي لا يشير إليه أحد يُحذف.',
      practice: [
        { t: 'mcq', q: 'What does <b>immutable</b> mean for a String?', options: ['It can be changed with trim', 'It cannot be changed after it is made', 'It cannot be printed', 'It has no length'], answer: 1, explain: 'A String object never changes. Methods give back new Strings.', explainAr: 'النص لا يتغير بعد إنشائه.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        String c = " java ";
        c.trim();
        c = c.toUpperCase();
        System.out.println("[" + c + "]");
    }
}
`, answer: '[ JAVA ]', explain: 'The trim result was not stored, so the spaces stay. toUpperCase was stored, so the letters are capital.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        String first = "omar";
        String copy = first;
        first = first.replace('o', 'O');
        copy = copy + "!";
        System.out.println(first);
        System.out.println(copy);
    }
}
`, answer: J`
Omar
omar!
`, explain: 'copy points to the old object "omar". replace makes a new object "Omar" for first. Then copy + "!" makes another new object "omar!" for copy.' },
        { t: 'bug', q: 'This program should remove the dashes and print the length <code>10</code>. It prints <code>12</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        String phone = "051-234-5678";
        phone.replace("-", "");
        System.out.println(phone.length());
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        String phone = "051-234-5678";
        phone = phone.replace("-", "");
        System.out.println(phone.length());
    }
}
`, hint: 'Is the new String kept anywhere?', explain: 'replace built "0512345678" but line 4 threw it away. phone still points to the text with two dashes, which has 12 characters. Store it: <code>phone = phone.replace("-", "");</code>.', explainAr: 'replace تعيد نصاً جديداً يجب تخزينه.' },
        { t: 'order', q: 'Arrange the lines so the program prints <code>RIYADH riyadh</code>.', lines: ['String s = "riyadh";', 'String t = s;', 's = s.toUpperCase();', 'System.out.println(s + " " + t);'], explain: 't must copy the arrow <b>before</b> s moves to the new capital object; then t keeps "riyadh".' },
        { t: 'code', q: 'Read one line with a course code typed in any way (spaces, small letters). Print the clean code: no spaces at all and capital letters. Example: <code>  is 201 </code> prints <code>IS201</code>. Do not print any prompt.', qAr: 'اقرأ رمز المقرر واطبعه نظيفاً بلا مسافات وبحروف كبيرة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String code = input.nextLine();
        // clean it, store it, print it
    }
}
`, tests: [{ stdin: '  is 201 ', expected: 'IS201' }, { stdin: 'cs 101', expected: 'CS101' }, { stdin: 'Math101', expected: 'MATH101' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String code = input.nextLine();
        code = code.trim();
        code = code.replace(" ", "");
        code = code.toUpperCase();
        System.out.println(code);
    }
}
`, hint: 'Three steps, each stored back: trim, replace(" ", ""), toUpperCase.', explain: 'Every method returns a new String, so each result is stored back into code.' }
      ]
    },
    {
      title: 'Text and numbers: parseInt, parseDouble, valueOf',
      titleAr: 'التحويل بين النص والأرقام',
      minutes: 30,
      body: [
        { type: 'h', en: 'Text that looks like a number' },
        { type: 'p', en: '<code>"25"</code> and <code>25</code> look the same on the screen, but they are different things. The first is a String (two characters), the second is an int (a quantity). With text, <code>+</code> glues; with numbers, <code>+</code> adds. Programs often get numbers <b>as text</b>: a line read with nextLine, a part cut out with substring, a value in a file. Before doing maths, we must <b>convert</b> the text into a number. Programmers call this <b>parsing</b>.',
          ar: 'النص "25" ليس رقماً. قبل الحساب نحوّله إلى رقم، وتسمى هذه العملية parsing.' },
        { type: 'analogy', title: 'A price on paper and money in your hand', en: 'A paper says "50 SAR". You can read it, but you cannot pay with the paper. You must change it into real money first. <code>Integer.parseInt</code> is the exchange office: you give it text, it gives you a real number.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String a = "25";
        String b = "5";
        System.out.println(a + b);
        int x = Integer.parseInt(a);
        int y = Integer.parseInt(b);
        System.out.println(x + y);
    }
}
`, out: J`
255
30
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['a + b', 'Two Strings: glued together, <code>255</code>.'],
          ['Integer.parseInt(a)', 'The class <code>Integer</code> has a method that reads the text "25" and returns the int 25.'],
          ['x + y', 'Two ints: added, <code>30</code>.']
        ], ar: 'Integer.parseInt تحوّل النص إلى عدد صحيح.' },
        { type: 'check', q: 'What does <code>System.out.println(Integer.parseInt("40") + 2);</code> print?', options: ['<code>402</code>', '<code>42</code>', '<code>40</code>', 'An error'], answer: 1, explain: 'parseInt gives the number 40, and 40 + 2 is 42.' },
        { type: 'memory', title: 'A String and an int with the same digits', code: J`
String text = "25";
int n = Integer.parseInt(text);
`, frames: [
          { label: 'After <code>String text = "25";</code>', vars: [{ name: 'text', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"25"' }, { name: 'length()', value: '2' }] }] },
          { label: 'After <code>int n = Integer.parseInt(text);</code>', vars: [{ name: 'text', type: 'String', ref: 'A' }, { name: 'n', type: 'int', value: '25' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"25"' }, { name: 'length()', value: '2' }] }] }
        ], ar: 'النص ما زال موجوداً، والرقم 25 الآن في صندوق int.' },
        { type: 'h', en: 'Double.parseDouble for decimals' },
        { type: 'p', en: 'For text with a decimal point, such as a price <code>"12.75"</code>, use <code>Double.parseDouble</code>. It returns a double. The pattern is the same: the class name, a dot, the method, and the text in parentheses.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String priceText = "12.75";
        double price = Double.parseDouble(priceText);
        System.out.println(price * 2);
    }
}
`, out: '25.5' },
        { type: 'table', head: ['Call', 'Result', 'Type'], rows: [
          ['<code>Integer.parseInt("2025")</code>', '<code>2025</code>', 'int'],
          ['<code>Integer.parseInt("007")</code>', '<code>7</code>', 'int (zeros in front disappear)'],
          ['<code>Integer.parseInt("-15")</code>', '<code>-15</code>', 'int'],
          ['<code>Double.parseDouble("3.5")</code>', '<code>3.5</code>', 'double'],
          ['<code>Double.parseDouble("10")</code>', '<code>10.0</code>', 'double'],
          ['<code>Integer.parseInt("12.5")</code>', 'crash', 'a decimal point is not allowed in an int'],
          ['<code>Integer.parseInt("12a")</code>', 'crash', 'a letter is not a digit'],
          ['<code>Integer.parseInt(" 12")</code>', 'crash', 'a space is not a digit: trim first']
        ] },
        { type: 'note', kind: 'warn', en: 'The text must be a clean number. <code>Integer.parseInt("12a")</code> compiles, but when it runs the program stops with <code>NumberFormatException: For input string: "12a"</code>. Clean the text with <code>trim()</code> or <code>replace</code> before you parse it.', ar: 'إذا لم يكن النص رقماً نظيفاً يتوقف البرنامج بخطأ NumberFormatException.' },
        { type: 'check', q: 'Which call gives the double <code>4.5</code>?', options: ['<code>Integer.parseInt("4.5")</code>', '<code>Double.parseDouble("4.5")</code>', '<code>"4.5" + 0</code>', '<code>(double) "4.5"</code>'], answer: 1, explain: 'parseInt cannot read a decimal point, "4.5" + 0 is the text "4.50", and a cast cannot turn text into a number.' },
        { type: 'h', en: 'From a number to text: String.valueOf' },
        { type: 'p', en: 'Sometimes we need the opposite: a number as text, so we can use String tools on it. How many digits does a student number have? What is its first digit? <code>String.valueOf(n)</code> gives the text of any number. (The trick <code>"" + n</code> does the same.)',
          ar: 'String.valueOf تحوّل الرقم إلى نص لنستخدم عليه دوال النصوص.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int id = 2210345;
        String text = String.valueOf(id);
        System.out.println(text.length());
        System.out.println(text.charAt(0));
        System.out.println(text.substring(text.length() - 3));
    }
}
`, out: J`
7
2
345
` },
        { type: 'lines', rows: [
          ['String.valueOf(id)', 'The number 2210345 becomes the text "2210345".'],
          ['text.length()', 'Now we can count the digits: <code>7</code>.'],
          ['text.charAt(0)', 'The first digit, as a char: <code>2</code>.'],
          ['text.substring(text.length() - 3)', 'The last three digits: <code>345</code>.']
        ] },
        { type: 'check', q: 'What is <code>String.valueOf(450).length()</code>?', options: ['<code>450</code>', '<code>3</code>', '<code>1</code>', 'An error'], answer: 1, explain: 'The text "450" has three characters.' },
        { type: 'h', en: 'Neat money and time with String.format' },
        { type: 'p', en: 'You know <code>%.2f</code> for money. Time needs a new trick. A clock shows <code>08:05</code>, not <code>8:5</code>. In a placeholder, a <b>0</b> before the width means "fill with zeros instead of spaces". So <code>%02d</code> prints a whole number in 2 places, with a zero in front when needed.',
          ar: '%02d تطبع الرقم في خانتين وتضع صفراً في البداية عند الحاجة.' },
        { type: 'analogy', title: 'A digital clock', en: 'A digital clock always has two places for the hours and two for the minutes. When the number has only one digit, the empty place shows a 0. That is exactly what <code>%02d</code> does.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int total = 135;
        int h = total / 60;
        int m = total % 60;
        String time = String.format("%02d:%02d", h, m);
        System.out.println(time);
        System.out.println(String.format("%.2f SAR", 12.5));
    }
}
`, out: J`
02:15
12.50 SAR
` },
        { type: 'lines', rows: [
          ['total / 60', '135 minutes: whole-number division gives <code>2</code> hours.'],
          ['total % 60', 'The remainder gives <code>15</code> minutes.'],
          ['String.format("%02d:%02d", h, m)', '2 becomes <code>02</code>, 15 stays <code>15</code>: the text "02:15".'],
          ['String.format("%.2f SAR", 12.5)', 'Money with two decimals: "12.50 SAR".']
        ] },
        { type: 'table', head: ['Placeholder', 'Value', 'Output'], rows: [
          ['<code>%02d</code>', '5', '<code>05</code>'],
          ['<code>%02d</code>', '12', '<code>12</code>'],
          ['<code>%03d</code>', '7', '<code>007</code>'],
          ['<code>%3d</code>', '7', '<code>&nbsp;&nbsp;7</code> (spaces, no zeros)']
        ] },
        { type: 'check', q: 'What does <code>String.format("%02d:%02d", 9, 5)</code> give?', options: ['<code>"9:5"</code>', '<code>"09:05"</code>', '<code>"90:50"</code>', '<code>" 9: 5"</code>'], answer: 1, explain: 'Each number gets two places, with a zero in front when it has one digit.' },
        { type: 'steps', title: 'Worked example: an order typed on one line', problem: 'A cashier types an order on one line: the quantity, a space, and the price, for example <code>3 12.75</code>. Read the whole line, convert the two parts to numbers, and print the total with two decimals.',
          steps: [
            { en: 'Read the whole line as text and find the space.', code: J`
String line = input.nextLine().trim();
int space = line.indexOf(' ');
` },
            { en: 'Cut the two pieces of text.', code: J`
String qtyText = line.substring(0, space);
String priceText = line.substring(space + 1);
` },
            { en: 'Convert: the quantity is a whole number, the price is a decimal.', code: J`
int qty = Integer.parseInt(qtyText);
double price = Double.parseDouble(priceText);
` },
            { en: 'Compute and format the total.', code: J`
double total = qty * price;
System.out.println("Total: " + String.format("%.2f", total) + " SAR");
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String line = input.nextLine().trim();
        int space = line.indexOf(' ');
        String qtyText = line.substring(0, space);
        String priceText = line.substring(space + 1);
        int qty = Integer.parseInt(qtyText);
        double price = Double.parseDouble(priceText);
        double total = qty * price;
        System.out.println("Total: " + String.format("%.2f", total) + " SAR");
    }
}
`, stdin: '3 12.75', out: 'Total: 38.25 SAR', ar: 'قصصنا النص ثم حوّلنا كل جزء إلى رقم ثم حسبنا المجموع.' }
      ],
      mistakes: [
        { title: 'Adding numbers that are still text', en: 'Text glues instead of adding.', code: J`
String a = "25";
System.out.println(a + 5);                    // 255
System.out.println(Integer.parseInt(a) + 5);  // 30
` },
        { title: 'Parsing text that is not a clean number', en: '<code>Integer.parseInt("12.5")</code>, <code>Integer.parseInt("12 ")</code> and <code>Integer.parseInt("")</code> all crash with <code>NumberFormatException</code>. Use <code>Double.parseDouble</code> for decimals and <code>trim()</code> for spaces.' },
        { title: 'Forgetting the class name', en: 'It is <code>Integer.parseInt</code> and <code>Double.parseDouble</code>. <code>parseInt("5")</code> alone does not compile.' },
        { title: 'Using %2d for a clock', en: '<code>%2d</code> fills with spaces: <code>" 8: 5"</code>. A clock needs zeros: <code>%02d</code> gives <code>"08:05"</code>.' }
      ],
      remember: [
        '<code>Integer.parseInt(text)</code> turns text into an int; <code>Double.parseDouble(text)</code> into a double.',
        'The text must be a clean number, or the program crashes with <code>NumberFormatException</code>.',
        '<code>String.valueOf(n)</code> (or <code>"" + n</code>) turns a number into text.',
        '<code>%02d</code> fills with zeros: 5 becomes 05. Good for clocks.',
        'Minutes to hours: <code>total / 60</code> hours and <code>total % 60</code> minutes.'
      ],
      rememberAr: 'Integer.parseInt و Double.parseDouble تحوّلان النص إلى رقم، والنص يجب أن يكون رقماً نظيفاً. String.valueOf تحوّل الرقم إلى نص. %02d تضع صفراً في البداية.',
      practice: [
        { t: 'mcq', q: 'What does <code>System.out.println(Integer.parseInt("12") + 3);</code> print?', options: ['<code>123</code>', '<code>15</code>', '<code>12</code>', 'An error'], answer: 1, explain: 'parseInt gives the int 12, and 12 + 3 is 15.', explainAr: 'parseInt تعطي رقماً فيُجمع ولا يُلصق.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        String s = "25";
        System.out.println(s + 5);
        System.out.println(Integer.parseInt(s) + 5);
        System.out.println(Double.parseDouble("2.5") * 2);
        System.out.println(String.valueOf(2026).length());
        System.out.println(String.format("%02d:%02d", 7, 30));
    }
}
`, answer: J`
255
30
5.0
4
07:30
`, explain: 'Text + 5 glues: 255. The parsed int adds: 30. 2.5 * 2 is the double 5.0. "2026" has 4 characters. 7 gets a zero in front: 07:30.' },
        { t: 'fill', q: 'Complete the code to convert the quantity text to an int and the price text to a double.', code: J`
int qty = Integer.___(qtyText);
double price = Double.___(priceText);
`, answers: ['parseInt', 'parseDouble'], explain: 'Integer.parseInt for whole numbers; Double.parseDouble for decimals.' },
        { t: 'bug', q: 'This program should print <code>25.0</code>. It compiles, but it crashes with <code>NumberFormatException</code> when it runs. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        String priceText = "12.5";
        double price = Integer.parseInt(priceText);
        System.out.println(price * 2);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        String priceText = "12.5";
        double price = Double.parseDouble(priceText);
        System.out.println(price * 2);
    }
}
`, hint: 'Can a whole number have a decimal point?', explain: '<code>Integer.parseInt</code> reads whole numbers only. The dot in "12.5" is not a digit, so it throws <code>NumberFormatException</code>. <code>Double.parseDouble</code> reads decimals.', explainAr: 'للأعداد العشرية نستخدم Double.parseDouble.' },
        { t: 'code', q: 'Read a number of minutes (whole number). Print it as a clock time <code>hh:mm</code> with two digits each. Example: <code>135</code> prints <code>02:15</code>. Do not print any prompt.', qAr: 'اقرأ عدد الدقائق واطبعه بصيغة ساعة hh:mm.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = input.nextInt();
        // hours and minutes, then %02d
    }
}
`, tests: [{ stdin: '135', expected: '02:15' }, { stdin: '60', expected: '01:00' }, { stdin: '5', expected: '00:05' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = input.nextInt();
        int h = total / 60;
        int m = total % 60;
        System.out.println(String.format("%02d:%02d", h, m));
    }
}
`, hint: 'Hours: <code>total / 60</code>. Minutes: <code>total % 60</code>. Format: <code>"%02d:%02d"</code>.', explain: '5 minutes is 0 hours and 5 minutes, shown as 00:05 thanks to the zero padding.' },
        { t: 'code', q: 'Read one line with a quantity and a price separated by one space, for example <code>3 12.75</code>. Print <code>Total: 38.25 SAR</code> (two decimals). Use <code>nextLine</code>, <code>substring</code>, <code>Integer.parseInt</code> and <code>Double.parseDouble</code>. Do not print any prompt.', qAr: 'اقرأ سطراً فيه الكمية والسعر واطبع المجموع.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String line = input.nextLine().trim();
        // split, convert, compute, print
    }
}
`, tests: [{ stdin: '3 12.75', expected: 'Total: 38.25 SAR' }, { stdin: '2 7.5', expected: 'Total: 15.00 SAR' }, { stdin: '10 1', expected: 'Total: 10.00 SAR' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String line = input.nextLine().trim();
        int space = line.indexOf(' ');
        int qty = Integer.parseInt(line.substring(0, space));
        double price = Double.parseDouble(line.substring(space + 1));
        System.out.printf("Total: %.2f SAR%n", qty * price);
    }
}
`, hint: 'Find the space with <code>indexOf</code>, cut both parts, then parse each part.', explain: 'parseDouble also reads "1" (no decimal point) as 1.0, so the last test works too.' }
      ]
    },
    {
      title: 'Project: a receipt and ID card formatter',
      titleAr: 'مشروع: منسّق الإيصال وبطاقة الهوية',
      minutes: 30,
      body: [
        { type: 'h', en: 'Putting it all together' },
        { type: 'p', en: 'A cafe on campus prints a receipt for each customer. The receipt shows the name in capitals, the initials, the customer ID with most digits hidden, and the money with VAT (value added tax, 15% in Saudi Arabia) in neat columns. In this project you will build it with the tools of this unit: String methods, simple money maths, and printf. There are no new methods; the skill is to <b>combine</b> small pieces.',
          ar: 'في هذا المشروع نجمع أدوات الوحدة كلها لطباعة إيصال منسق.' },
        { type: 'analogy', title: 'Building with blocks', en: 'Every method you learned is a small building block: <code>indexOf</code>, <code>substring</code>, <code>charAt</code>, <code>toUpperCase</code>, <code>printf</code>. Alone, each block is simple. A house is just many simple blocks put in the right order. A good programmer builds and tests one block at a time.' },
        { type: 'h', en: 'Step 1: plan the input and the output' },
        { type: 'p', en: 'Never start typing code at once. First write down what comes in and what must go out. Our program reads four values. The ID numbers here are <b>invented</b>: 10 digits, in the style of a national ID. Never use a real person\'s ID in practice programs.' },
        { type: 'table', head: ['Input', 'Example', 'Read with'], rows: [
          ['full name (may have 2 or 3 parts)', '<code>Sara Ali Alqahtani</code>', '<code>nextLine()</code> (first, so there is no Enter trap)'],
          ['ID (10 digits, as text)', '<code>1098765432</code>', '<code>next()</code>'],
          ['price of one item', '<code>14</code>', '<code>nextDouble()</code>'],
          ['quantity', '<code>3</code>', '<code>nextInt()</code>']
        ] },
        { type: 'p', en: 'And this is the receipt we want. Each label is left-aligned in 10 characters, and each amount is right-aligned in 10 characters with two decimals.' },
        { type: 'code', code: J`
==============================
Name:     SARA ALI ALQAHTANI
Initials: S.A.
ID:       ******5432
------------------------------
Subtotal:      42.00 SAR
VAT 15%:        6.30 SAR
Total:         48.30 SAR
==============================
` },
        { type: 'check', q: 'Why do we read the name with <code>nextLine()</code> <b>before</b> the numbers?', options: ['Because names are short', 'The name may have spaces, and reading it first avoids the leftover Enter trap', 'Because nextInt cannot read numbers after text', 'There is no reason'], answer: 1, explain: 'nextLine keeps the spaces of the full name. The trap only happens when nextLine comes after nextInt or nextDouble.' },
        { type: 'h', en: 'Step 2: initials from the first and the last word' },
        { type: 'p', en: 'The initials are the first letter of the first name and the first letter of the family name. A name may have two or three parts, so we use <code>indexOf(\' \')</code> to find the <b>first</b> space and <code>lastIndexOf(\' \')</code> to find the <b>last</b> one. Then <code>Character.toUpperCase</code> makes sure each initial is a capital, even if the user typed small letters.',
          ar: 'نستخدم indexOf لأول مسافة و lastIndexOf لآخر مسافة، ثم نأخذ الحرف الأول من كل جزء.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String name = "huda saad alharbi";
        String first = name.substring(0, name.indexOf(' '));
        String last = name.substring(name.lastIndexOf(' ') + 1);
        char a = Character.toUpperCase(first.charAt(0));
        char b = Character.toUpperCase(last.charAt(0));
        System.out.println(a + "." + b + ".");
    }
}
`, out: 'H.A.' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ["name.substring(0, name.indexOf(' '))", 'The first space is at index 4. From the start up to it: <code>huda</code>.'],
          ["name.substring(name.lastIndexOf(' ') + 1)", 'The last space is at index 9 (before "alharbi"). From index 10 to the end: <code>alharbi</code>. The middle name "saad" is skipped.'],
          ['Character.toUpperCase(first.charAt(0))', 'The first letter h becomes <code>H</code>; the same for a, which becomes <code>A</code>.'],
          ['a + "." + b + "."', 'char + String gives a String, so the letters are glued, not added: <code>H.A.</code>']
        ] },
        { type: 'check', q: 'For the name <code>"Huda Saad"</code> (only two parts), what does the same code print?', options: ['<code>H.H.</code>', '<code>H.S.</code>', '<code>S.S.</code>', 'It crashes'], answer: 1, explain: 'With one space, indexOf and lastIndexOf find the same space. first is Huda and last is Saad, so H.S.' },
        { type: 'h', en: 'Step 3: hide the ID number' },
        { type: 'p', en: 'For privacy, a receipt shows only the last 4 digits of an ID, like <code>******5432</code>. We do not need a loop for this. The ID always has 10 digits, so we glue six stars to the last four digits, which we cut with <code>substring(id.length() - 4)</code>. This is called <b>masking</b>.',
          ar: 'نخفي أول 6 أرقام ونُظهر آخر 4 فقط باستخدام substring.' },
        { type: 'analogy', title: 'A card payment slip', en: 'When you pay by card, the paper slip shows only the last digits of the card, with stars in front. The shop can still check it is your card, but a stranger who finds the paper cannot copy your number.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String id = "1098765432";
        String lastFour = id.substring(id.length() - 4);
        String masked = "******" + lastFour;
        System.out.println(masked);
    }
}
`, out: '******5432' },
        { type: 'memory', title: 'Masking makes new Strings', en: 'Nothing happens to the real ID. substring makes a new object with the last four digits, and + makes one more object for the masked text.', code: J`
String id = "1098765432";
String lastFour = id.substring(id.length() - 4);
String masked = "******" + lastFour;
`, frames: [
          { label: 'After <code>String id = "1098765432";</code>', vars: [{ name: 'id', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"1098765432"' }] }] },
          { label: 'After <code>String lastFour = id.substring(id.length() - 4);</code>', vars: [{ name: 'id', type: 'String', ref: 'A' }, { name: 'lastFour', type: 'String', ref: 'B' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"1098765432"' }] }, { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"5432"' }] }] },
          { label: 'After <code>String masked = "******" + lastFour;</code>', vars: [{ name: 'id', type: 'String', ref: 'A' }, { name: 'lastFour', type: 'String', ref: 'B' }, { name: 'masked', type: 'String', ref: 'C' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"1098765432"' }] }, { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"5432"' }] }, { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"******5432"' }] }] }
        ], ar: 'الرقم الأصلي لم يتغير، وصنعنا نصين جديدين.' },
        { type: 'check', q: 'For <code>id = "2034567891"</code>, what is <code>"******" + id.substring(6)</code>?', options: ['<code>******567891</code>', '<code>******7891</code>', '<code>******891</code>', '<code>2034******</code>'], answer: 1, explain: 'The length is 10, so substring(6) is the same as substring(10 - 4): the last four digits 7891.' },
        { type: 'h', en: 'Step 4: money with VAT' },
        { type: 'p', en: 'The subtotal is price times quantity. VAT is 15% of the subtotal. "15 percent" means 15 out of 100, so we multiply by <code>0.15</code>. The total is the subtotal plus the VAT.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        double price = 14;
        int qty = 3;
        double subtotal = price * qty;
        double vat = subtotal * 0.15;
        double total = subtotal + vat;
        System.out.printf("%.2f %.2f %.2f%n", subtotal, vat, total);
    }
}
`, out: '42.00 6.30 48.30' },
        { type: 'lines', rows: [
          ['double subtotal = price * qty;', '14 × 3 = <code>42.0</code>.'],
          ['double vat = subtotal * 0.15;', '15% of 42 is <code>6.3</code>.'],
          ['double total = subtotal + vat;', '42 + 6.3 = <code>48.3</code>; printf shows <code>48.30</code>.']
        ], ar: 'الضريبة 15% تعني الضرب في 0.15.' },
        { type: 'note', kind: 'exam', en: 'Do not write <code>subtotal * (15 / 100)</code>. Both 15 and 100 are ints, so <code>15 / 100</code> is <code>0</code>, and the VAT becomes 0. Write <code>0.15</code>, or <code>15 / 100.0</code>.', ar: '15 / 100 تساوي 0 لأنها قسمة أعداد صحيحة.' },
        { type: 'check', q: 'What is the VAT (15%) on a subtotal of 20.0?', options: ['<code>0.0</code>', '<code>3.0</code>', '<code>15.0</code>', '<code>23.0</code>'], answer: 1, explain: '20 × 0.15 = 3.0. The total would be 23.0.' },
        { type: 'h', en: 'Step 5: neat columns' },
        { type: 'p', en: 'Every line of the receipt uses the same widths: the label is <code>%-10s</code> (left, 10 characters) and the amount is <code>%10.2f</code> (right, 10 characters, two decimals). Because the widths are the same, the decimal points line up under each other. Note: the % inside the <i>value</i> "VAT 15%:" is fine; only the format text needs <code>%%</code>.' },
        { type: 'steps', title: 'Worked example: the whole receipt', problem: 'Read the four inputs (name, ID, price, quantity) and print the receipt exactly as planned in Step 1.',
          steps: [
            { en: 'Read the input: the full name first (nextLine), then the ID, the price and the quantity.', code: J`
String name = input.nextLine().trim();
String id = input.next();
double price = input.nextDouble();
int qty = input.nextInt();
` },
            { en: 'Build the initials and the masked ID (Steps 2 and 3).', code: J`
String first = name.substring(0, name.indexOf(' '));
String last = name.substring(name.lastIndexOf(' ') + 1);
String initials = Character.toUpperCase(first.charAt(0)) + "." + Character.toUpperCase(last.charAt(0)) + ".";
String masked = "******" + id.substring(id.length() - 4);
` },
            { en: 'Compute the money (Step 4).', code: J`
double subtotal = price * qty;
double vat = subtotal * 0.15;
double total = subtotal + vat;
` },
            { en: 'Print the card part: labels in 10 characters, then the text.', code: J`
System.out.println("==============================");
System.out.printf("%-10s%s%n", "Name:", name.toUpperCase());
System.out.printf("%-10s%s%n", "Initials:", initials);
System.out.printf("%-10s%s%n", "ID:", masked);
` },
            { en: 'Print the money part with the same label width and a width of 10 for the amounts.', code: J`
System.out.println("------------------------------");
System.out.printf("%-10s%10.2f SAR%n", "Subtotal:", subtotal);
System.out.printf("%-10s%10.2f SAR%n", "VAT 15%:", vat);
System.out.printf("%-10s%10.2f SAR%n", "Total:", total);
System.out.println("==============================");
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine().trim();
        String id = input.next();
        double price = input.nextDouble();
        int qty = input.nextInt();

        String first = name.substring(0, name.indexOf(' '));
        String last = name.substring(name.lastIndexOf(' ') + 1);
        String initials = Character.toUpperCase(first.charAt(0)) + "." + Character.toUpperCase(last.charAt(0)) + ".";
        String masked = "******" + id.substring(id.length() - 4);

        double subtotal = price * qty;
        double vat = subtotal * 0.15;
        double total = subtotal + vat;

        System.out.println("==============================");
        System.out.printf("%-10s%s%n", "Name:", name.toUpperCase());
        System.out.printf("%-10s%s%n", "Initials:", initials);
        System.out.printf("%-10s%s%n", "ID:", masked);
        System.out.println("------------------------------");
        System.out.printf("%-10s%10.2f SAR%n", "Subtotal:", subtotal);
        System.out.printf("%-10s%10.2f SAR%n", "VAT 15%:", vat);
        System.out.printf("%-10s%10.2f SAR%n", "Total:", total);
        System.out.println("==============================");
    }
}
`, stdin: 'Sara Ali Alqahtani\n1098765432\n14\n3', out: J`
==============================
Name:     SARA ALI ALQAHTANI
Initials: S.A.
ID:       ******5432
------------------------------
Subtotal:      42.00 SAR
VAT 15%:        6.30 SAR
Total:         48.30 SAR
==============================
`, ar: 'بنينا البرنامج خطوة خطوة: القراءة ثم الأحرف الأولى والإخفاء ثم الحساب ثم الطباعة المنسقة.' },
        { type: 'note', kind: 'tip', en: 'Test your program with other inputs too: a name with two parts (<code>omar alharbi</code>), small letters, a decimal price (<code>9.5</code>). A program is finished only when it works for every sensible input, not just one.', ar: 'جرّب البرنامج بمدخلات مختلفة قبل أن تعتبره منتهياً.' }
      ],
      mistakes: [
        { title: 'Cutting the wrong part of the ID', en: '<code>id.substring(4)</code> gives the last <b>six</b> digits of a 10-digit ID. The last four start at <code>id.length() - 4</code>.' },
        { title: 'Integer division in the VAT', en: '<code>15 / 100</code> is 0, so the VAT is lost.', code: J`
double vat = subtotal * (15 / 100);   // always 0.0
double vat = subtotal * 0.15;         // right
` },
        { title: 'Using %d for money', en: 'The subtotal is a double. <code>%d</code> crashes; use <code>%.2f</code> or <code>%10.2f</code>.' },
        { title: 'Reading the name after a number', en: 'If you read the price first and the name with nextLine after it, the name is empty (the leftover Enter). Read the full name first, or add an extra <code>nextLine()</code>.' }
      ],
      remember: [
        'Plan first: write the input and the exact output before the code.',
        'Initials: <code>indexOf(\' \')</code> for the first word, <code>lastIndexOf(\' \')</code> for the last word.',
        'Masking without loops: <code>"******" + id.substring(id.length() - 4)</code>.',
        'VAT 15%: multiply by <code>0.15</code>, never by <code>15 / 100</code>.',
        'Same widths on every line (<code>%-10s</code>, <code>%10.2f</code>) make neat columns.'
      ],
      rememberAr: 'خطط أولاً للمدخلات والمخرجات. الأحرف الأولى بـ indexOf و lastIndexOf. الإخفاء: "******" + آخر 4 أرقام. الضريبة: اضرب في 0.15. نفس العرض في كل سطر يعطي أعمدة منظمة.',
      practice: [
        { t: 'mcq', q: 'An invented ID is <code>"2034567891"</code>. Which expression gives <code>******7891</code>?', options: ['<code>"******" + id.substring(4)</code>', '<code>"******" + id.substring(id.length() - 4)</code>', '<code>"******" + id.substring(0, 4)</code>', '<code>id.substring(6) + "******"</code>'], answer: 1, explain: 'The last four digits start at index length - 4 = 6. substring(4) would give six digits, and substring(0, 4) gives the first four.', explainAr: 'آخر 4 أرقام تبدأ من length() - 4.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        String name = "noura khalid";
        String first = name.substring(0, name.indexOf(' '));
        String last = name.substring(name.lastIndexOf(' ') + 1);
        System.out.println(Character.toUpperCase(first.charAt(0)) + "." + Character.toUpperCase(last.charAt(0)) + ".");
        System.out.println(name.toUpperCase());
    }
}
`, answer: J`
N.K.
NOURA KHALID
`, explain: 'With two parts, the first and the last space are the same space. The initials are N and K, made capital. toUpperCase makes the whole name capital.' },
        { t: 'output', q: 'What is printed? (Count the spaces.)', code: J`
public class Main {
    public static void main(String[] args) {
        double subtotal = 9.5 * 4;
        double vat = subtotal * 0.15;
        System.out.printf("%-10s%8.2f%n", "Subtotal:", subtotal);
        System.out.printf("%-10s%8.2f%n", "VAT:", vat);
        System.out.printf("%-10s%8.2f%n", "Total:", subtotal + vat);
    }
}
`, answer: J`
Subtotal:    38.00
VAT:          5.70
Total:       43.70
`, explain: '9.5 × 4 = 38.0, 15% of 38 is 5.7, and the total is 43.7. Each label takes 10 characters and each amount 8 characters, right-aligned.' },
        { t: 'bug', q: 'The receipt always shows <code>VAT: 0.00</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        double price = 14;
        int qty = 3;
        double subtotal = price * qty;
        double vat = subtotal * (15 / 100);
        System.out.printf("VAT: %.2f%n", vat);
    }
}
`, bug: 6, fix: J`
public class Main {
    public static void main(String[] args) {
        double price = 14;
        int qty = 3;
        double subtotal = price * qty;
        double vat = subtotal * 0.15;
        System.out.printf("VAT: %.2f%n", vat);
    }
}
`, hint: 'What is <code>15 / 100</code> when both numbers are ints?', explain: 'The parentheses are worked out first: 15 / 100 with two ints is whole-number division, which gives 0. Then 42.0 × 0 is 0.0. Use <code>0.15</code> (or <code>15 / 100.0</code>), and the VAT becomes 6.30.', explainAr: '15 / 100 تساوي صفراً، فنكتب 0.15.' },
        { t: 'code', q: 'Read a full name (two or three parts) on the first line and an invented 10-digit ID on the second line. Print the initials (capital letters, each followed by a dot) on the first line. On the second line print the masked ID (six stars and the last four digits), or <code>Invalid ID</code> if the ID does not have exactly 10 characters. Do not print any prompt.', qAr: 'اقرأ الاسم والرقم واطبع الأحرف الأولى ثم الرقم المخفي أو Invalid ID.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine().trim();
        String id = input.next();
        // initials, then the masked ID or Invalid ID
    }
}
`, tests: [{ stdin: 'Sara Ali Alqahtani\n1098765432', expected: 'S.A.\n******5432' }, { stdin: 'omar alharbi\n2034567891', expected: 'O.A.\n******7891' }, { stdin: 'Huda Saad\n12345', expected: 'H.S.\nInvalid ID' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine().trim();
        String id = input.next();
        String first = name.substring(0, name.indexOf(' '));
        String last = name.substring(name.lastIndexOf(' ') + 1);
        System.out.println(Character.toUpperCase(first.charAt(0)) + "." + Character.toUpperCase(last.charAt(0)) + ".");
        if (id.length() == 10) {
            System.out.println("******" + id.substring(id.length() - 4));
        } else {
            System.out.println("Invalid ID");
        }
    }
}
`, hint: 'Use <code>indexOf</code> and <code>lastIndexOf</code> for the two words, <code>Character.toUpperCase</code> for the initials, and an if on <code>id.length() == 10</code>.', explain: 'The if protects the program: a short ID such as "123" would make <code>substring(id.length() - 4)</code> crash, because the start would be negative.' },
        { t: 'code', q: 'Read the price of one item (decimal) and the quantity (whole number). Print three lines with the label left-aligned in 10 characters and the amount right-aligned in 8 characters with 2 decimals: <code>Subtotal:</code>, <code>VAT:</code> (15%) and <code>Total:</code>. Example: <code>9.5 4</code> prints <code>Subtotal:    38.00</code>, <code>VAT:          5.70</code>, <code>Total:       43.70</code>. Do not print any prompt.', qAr: 'اقرأ السعر والكمية واطبع المجموع الفرعي والضريبة والإجمالي في أعمدة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double price = input.nextDouble();
        int qty = input.nextInt();
        // subtotal, VAT 15%, total, then three printf lines
    }
}
`, tests: [{ stdin: '9.5 4', expected: 'Subtotal:    38.00\nVAT:          5.70\nTotal:       43.70' }, { stdin: '14 3', expected: 'Subtotal:    42.00\nVAT:          6.30\nTotal:       48.30' }, { stdin: '100 1', expected: 'Subtotal:   100.00\nVAT:         15.00\nTotal:      115.00' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double price = input.nextDouble();
        int qty = input.nextInt();
        double subtotal = price * qty;
        double vat = subtotal * 0.15;
        double total = subtotal + vat;
        System.out.printf("%-10s%8.2f%n", "Subtotal:", subtotal);
        System.out.printf("%-10s%8.2f%n", "VAT:", vat);
        System.out.printf("%-10s%8.2f%n", "Total:", total);
    }
}
`, hint: 'VAT is <code>subtotal * 0.15</code>. The format of each line is <code>"%-10s%8.2f%n"</code>.', explain: 'The same widths on every line make the decimal points line up.' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'What does <code>Math.sqrt(16)</code> return?', options: ['<code>4</code>', '<code>4.0</code>', '<code>8.0</code>', '<code>256.0</code>'], answer: 1, explain: 'The square root of 16 is 4, returned as a double: 4.0.' },
    { t: 'mcq', q: 'Which characters does a <code>char</code> literal use around the letter?', options: ['Double quotes', 'Single quotes', 'Backticks', 'No quotes'], answer: 1, explain: 'A char uses single quotes: \'A\'. A String uses double quotes.' },
    { t: 'bug', q: 'This program should print the total rounded to the nearest riyal. It does not compile. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        double price = 12.5;
        int qty = 3;
        int total = Math.round(price * qty);
        System.out.println("Total: " + total + " SAR");
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        double price = 12.5;
        int qty = 3;
        int total = (int) Math.round(price * qty);
        System.out.println("Total: " + total + " SAR");
    }
}
`, explain: '<code>Math.round</code> of a double returns a <code>long</code>, which does not fit into an int box without a cast. With <code>(int)</code> the program prints <code>Total: 38 SAR</code> (37.5 rounds up to 38).' },
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(Math.ceil(7.01));
        System.out.println(Math.floor(-1.5));
        System.out.println(Math.round(2.5));
        System.out.println(Math.round(12.678 * 100) / 100.0);
    }
}
`, answer: "8.0\n-2.0\n3\n12.68", explain: 'ceil goes up to 8.0. floor goes down: -2.0 is below -1.5. round sends a half up and returns a whole number: 3. 1267.8 rounds to 1268, and 1268 / 100.0 is 12.68.' },
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        char ch = 'D';
        System.out.println(ch + 1);
        System.out.println((char) (ch + 1));
        System.out.println(ch - 'A' + 1);
        System.out.println(Character.isLetter('7'));
    }
}
`, answer: "69\nE\n4\nfalse", explain: "'D' is 68, so ch + 1 is the int 69, and the cast gives 'E'. 68 - 65 + 1 = 4: D is the 4th letter. The character 7 is a digit, not a letter." },
    { t: 'mcq', q: 'Which statement prints <code>7.5</code> as <code>    7.50</code> (width 8, two decimals)?', options: ['<code>printf("%2.8f", 7.5)</code>', '<code>printf("%8.2f", 7.5)</code>', '<code>printf("%8d", 7.5)</code>', '<code>printf("%-8.2f", 7.5)</code>'], answer: 1, explain: 'In <code>%8.2f</code>, 8 is the total width and 2 is the number of decimals. A minus sign would left-align, and %d does not accept a double.' },
    { t: 'output', q: 'The ID number below is invented. What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        String id = "1098765432";
        System.out.println("******" + id.substring(6));
        System.out.println(id.indexOf('9'));
        System.out.println(id.substring(2, 5));
        System.out.println(id.charAt(id.length() - 1));
    }
}
`, answer: "******5432\n2\n987\n2", explain: 'The indexes are 0 to 9. substring(6) is the last four digits 5432. The digit 9 is at index 2. substring(2, 5) takes indexes 2, 3, 4: 987. The last character (index 9) is 2.' },
    { t: 'mcq', q: 'What is printed?', code: J`
String s = "  hi ";
s.trim();
System.out.println(s.length());
`, options: ['<code>2</code>', '<code>5</code>', '<code>3</code>', '<code>0</code>'], answer: 1, explain: 'Strings are immutable. trim made a new String, but it was not stored, so s still has two spaces, h, i and one space: 5 characters.' },
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("12" + 3);
        System.out.println(Integer.parseInt("12") + 3);
        System.out.println(String.valueOf(450).length());
        System.out.println(String.format("%02d:%02d", 9, 5));
    }
}
`, answer: "123\n15\n3\n09:05", explain: 'Text + 3 glues: 123. The parsed int adds: 15. The text "450" has 3 characters. %02d puts a zero in front of 9 and 5.' },
    { t: 'bug', q: 'The user types <code>yes</code>, but the program prints <code>Cancelled</code>. Tap the line with the bug.', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String answer = input.next();
        if (answer == "yes") {
            System.out.println("Registered");
        } else {
            System.out.println("Cancelled");
        }
    }
}
`, bug: 7, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String answer = input.next();
        if (answer.equals("yes")) {
            System.out.println("Registered");
        } else {
            System.out.println("Cancelled");
        }
    }
}
`, explain: 'The Scanner builds a new String object, so <code>==</code> (same object?) is false. <code>equals</code> compares the letters and gives true.' },
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        String s = " IS 201 ";
        System.out.println(s.trim().replace(" ", ""));
        System.out.println(s.contains("201"));
        System.out.println(s.startsWith("IS"));
        System.out.println(s.trim().length());
    }
}
`, answer: "IS201\ntrue\nfalse\n6", explain: 'trim removes the outer spaces and replace removes the middle one: IS201. "201" is inside. s starts with a space, not with IS, so false. "IS 201" has 6 characters.' },
    { t: 'mcq', q: 'Which condition is <code>true</code> exactly when the String <code>s</code> is empty?', options: ['<code>s.length() == 0</code>', '<code>s == 0</code>', '<code>s.charAt(0) == \' \'</code>', '<code>s.length() == 1</code>'], answer: 0, explain: 'An empty string has length 0. Calling <code>charAt(0)</code> on it would throw an exception.' }
  ],
  lab: {
    t: 'code',
    q: 'Mini project: <b>Student card formatter</b>. Read three lines: a full name (first and last name separated by one space), a student ID (digits), and a GPA (decimal). Print exactly these four lines:<br>1. <code>Card for: </code> followed by the name in capital letters<br>2. <code>Username: </code> followed by the first letter of the first name in lowercase, a dot, and the last name in lowercase<br>3. <code>ID ends with: </code> followed by the last 3 characters of the ID<br>4. <code>GPA: </code> followed by the GPA with 2 decimals<br>Example: <code>Sara Alqahtani</code>, <code>221100345</code>, <code>3.8</code> prints <code>Card for: SARA ALQAHTANI</code>, <code>Username: s.alqahtani</code>, <code>ID ends with: 345</code>, <code>GPA: 3.80</code>. Do not print any prompts.',
    qAr: 'اقرأ الاسم والرقم الجامعي والمعدل واطبع بطاقة الطالب بالتنسيق المطلوب.',
    starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = input.nextLine();
        String id = input.next();
        double gpa = input.nextDouble();
        // step 1: find the space and split the name
        // step 2: print the four lines
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
    { code: J`Math.round(2.5)  Math.ceil(2.1)  Math.floor(2.9)`, note: '3 (whole number), 3.0, 2.0' },
    { code: J`int r = a + (int) (Math.random() * (b - a + 1));`, note: 'Random whole number from a to b inclusive' },
    { code: J`System.out.printf("%-10s%6.2f%n", name, price);`, note: 'Left-aligned name (width 10), price with width 6 and 2 decimals, new line' },
    { code: J`String s = String.format("%d items", n);`, note: 'Same rules as printf, but returns a String' },
    { code: J`(char) ('a' + 1)   'c' - 'a'   ch - '0'`, note: "'b', 2, and the numeric value of a digit char" },
    { code: J`Character.isDigit(ch)  Character.toUpperCase(ch)`, note: 'Test and convert single characters' },
    { code: J`"\n  \t  \"  \\  A"`, note: 'Escape sequences: new line, tab, quote, backslash, Unicode' },
    { code: J`s.length()  s.charAt(i)  s.substring(a, b)  s.indexOf("x")`, note: 'Indexes start at 0; substring excludes index b; indexOf returns -1 if not found' },
    { code: J`s1.equals(s2)   s1.compareTo(s2)`, note: 'Compare contents (never with ==); compareTo gives negative, 0 or positive' },
    { code: J`String w = input.next();  String line = input.nextLine();`, note: 'next reads one word; nextLine reads the rest of the line' },
    { code: J`int r = (int) Math.round(x);   Math.round(x * 100) / 100.0`, note: 'round returns a long (cast to store in an int); round to two decimals' },
    { code: J`Math.max(a, Math.max(b, c))`, note: 'The largest of three values: the inner call runs first' },
    { code: J`s.trim()  s.replace("-", "")  s.lastIndexOf(' ')`, note: 'Remove end spaces; replace every match (with "" to delete); last position' },
    { code: J`s.contains("@")  s.startsWith("05")  s.endsWith(".sa")  s.isEmpty()`, note: 'Yes/no questions about a String (case-sensitive)' },
    { code: J`s = s.trim();`, note: 'Strings are immutable: methods return a new String, so store it' },
    { code: J`Integer.parseInt("25")  Double.parseDouble("12.75")  String.valueOf(450)`, note: 'Text to int, text to double, number to text' },
    { code: J`String.format("%02d:%02d", h, m)`, note: 'Zero padding: 9 and 5 become 09:05' },
    { code: J`"******" + id.substring(id.length() - 4)`, note: 'Mask an ID: show only the last four digits' },
    { code: J`double vat = subtotal * 0.15;`, note: 'VAT 15%: multiply by 0.15 (never 15 / 100, which is 0)' }
  ],
  glossary: [
    { term: 'Math class', ar: 'الصنف Math', def: 'A built-in Java class with ready-made methods for common calculations such as pow, sqrt and round.' },
    { term: 'Method', ar: 'دالة', def: 'A named tool that does a job. You call it with its name and parentheses, for example Math.sqrt(25).' },
    { term: 'Argument', ar: 'وسيط', def: 'A value you give to a method inside its parentheses.' },
    { term: 'Return value', ar: 'القيمة المرجعة', def: 'The answer that a method gives back.' },
    { term: 'Random number', ar: 'عدد عشوائي', def: 'A number chosen by chance; Math.random() gives a double from 0.0 up to but not including 1.0.' },
    { term: 'char', ar: 'حرف', def: 'A type that stores a single Unicode character, written in single quotes.' },
    { term: 'ASCII', ar: 'آسكي', def: 'An old list of 128 characters with code numbers; it forms the first part of Unicode.' },
    { term: 'Unicode', ar: 'يونيكود', def: 'A standard that gives a unique code number to the characters of most writing systems.' },
    { term: 'Casting', ar: 'التحويل الصريح للنوع', def: 'Converting a value to another type explicitly, for example (char) 66 or (int) 3.7.' },
    { term: 'Escape sequence', ar: 'تسلسل هروب', def: 'A backslash followed by a character, such as \\n or \\", used to write special characters in text.' },
    { term: 'Format specifier', ar: 'محدد التنسيق', def: 'A placeholder such as %d, %.2f or %s in a printf format that controls how a value is printed.' },
    { term: 'Width', ar: 'عرض الحقل', def: 'The minimum number of characters a printf placeholder takes; spaces fill the rest.' },
    { term: 'String', ar: 'سلسلة نصية', def: 'A class representing a row of characters; String objects are immutable.' },
    { term: 'Concatenation', ar: 'الدمج', def: 'Joining strings together with the + operator.' },
    { term: 'Index', ar: 'فهرس', def: 'The position of a character in a string, starting from 0.' },
    { term: 'Immutable', ar: 'غير قابل للتغيير', def: 'Cannot be changed after creation; String methods return new strings instead of modifying the original.' },
    { term: 'Lexicographic order', ar: 'الترتيب المعجمي', def: 'Dictionary-like ordering based on the Unicode codes of characters; used by compareTo.' },
    { term: 'long', ar: 'النوع long', def: 'A whole-number type like int but with room for much bigger numbers; Math.round of a double returns a long.' },
    { term: 'Object', ar: 'كائن', def: 'A thing in memory with its own data and methods, for example a String object that holds characters.' },
    { term: 'Reference', ar: 'مرجع', def: 'An arrow stored in a variable that points to an object; a String variable holds a reference, not the characters.' },
    { term: 'Garbage', ar: 'كائن مهمل', def: 'An object that no variable points to any more; Java removes it automatically.' },
    { term: 'Chaining', ar: 'تسلسل الاستدعاءات', def: 'Calling a method on the result of another method, for example input.nextLine().trim().' },
    { term: 'Whitespace', ar: 'المسافات البيضاء', def: 'Characters that show as empty space: the space, the tab and the new line.' },
    { term: 'Parsing', ar: 'تحويل النص إلى رقم', def: 'Reading a number out of text, for example Integer.parseInt("25") gives the int 25.' },
    { term: 'NumberFormatException', ar: 'خطأ صيغة الرقم', def: 'The error that stops a program when parseInt or parseDouble gets text that is not a clean number.' },
    { term: 'Zero padding', ar: 'الحشو بالأصفار', def: 'Filling a printf width with zeros instead of spaces, as in %02d, which prints 5 as 05.' },
    { term: 'Masking', ar: 'الإخفاء', def: 'Hiding part of private text such as an ID with stars, showing only a few characters.' },
    { term: 'VAT', ar: 'ضريبة القيمة المضافة', def: 'Value added tax: in Saudi Arabia 15% of the price is added to the bill.' }
  ]
});
