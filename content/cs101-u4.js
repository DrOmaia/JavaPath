JP.unit({
  course: 'cs101',
  n: 4,
  title: 'Math Library, Characters and Strings',
  titleAr: 'مكتبة الرياضيات والحروف والنصوص',
  intro: 'Real programs compute square roots, round prices, look at single letters, and work with names and messages. In this unit you will use the ready-made Math tools of Java, learn how letters are stored as numbers, print neat tables with printf, and use the String type to work with words. We go one small idea at a time.',
  introAr: 'تحتاج البرامج الحقيقية إلى حساب الجذور وتقريب الأسعار وفحص الحروف ومعالجة الأسماء. في هذه الوحدة ستستخدم أدوات Math الجاهزة، وتتعرف على تخزين الحروف كأرقام، وتطبع جداول منسقة بـ printf، وتتعامل مع النصوص String خطوة بخطوة.',
  lessons: [
    {
      title: 'The Math class: pow, sqrt, abs, max, min',
      titleAr: 'الصنف Math: الدوال الأساسية',
      minutes: 25,
      body: [
        { type: 'h', en: 'Ready-made calculator buttons' },
        { type: 'p', en: 'Imagine writing your own code every time you need a square root. That would be slow and hard! Java already has a toolbox called <code>Math</code> with many ready-made calculations. You do not need an import. You just write <code>Math.</code> (with a dot) and the name of the tool.',
          ar: 'الصنف Math صندوق أدوات جاهز في جافا ولا يحتاج import. نكتب Math. ثم اسم الأداة.' },
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
`, stdin: '3 4', out: '5.0', ar: 'استخدمنا pow ثم sqrt لحساب الوتر.' }
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
        '<code>Math.PI</code> is a value, so it has no parentheses.'
      ],
      rememberAr: 'نستدعي الدوال هكذا: Math.name(values) دون import. pow و sqrt ترجعان double. Math.PI قيمة جاهزة بدون أقواس.',
      practice: [
        { t: 'mcq', q: 'What does <code>System.out.println(Math.pow(3, 2));</code> print?', options: ['<code>9</code>', '<code>9.0</code>', '<code>6</code>', '<code>6.0</code>'], answer: 1, explain: '<code>Math.pow</code> always returns a double.', explainAr: 'الدالة pow ترجع double دائماً.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(Math.sqrt(81));
System.out.println(Math.abs(-15));
`, answer: J`
9.0
15
`, explain: 'sqrt gives a double (9.0). abs of an int is an int (15).' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(Math.max(12, 7));
System.out.println(Math.min(3.5, 8));
`, answer: J`
12
3.5
`, explain: 'max of two ints is an int. min(3.5, 8) is 3.5.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(Math.max(Math.abs(-9), 4));
System.out.println(Math.sqrt(49) + 1);
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
`, hint: 'Use <code>Math.abs(a - b)</code> and <code>Math.max(a, b)</code>.', explain: 'abs removes the minus sign of the difference; max picks the larger number.' }
      ]
    },
    {
      title: 'Rounding numbers: round, ceil and floor',
      titleAr: 'تقريب الأعداد: round و ceil و floor',
      minutes: 25,
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
`, stdin: '25 10', out: '3', ar: 'استخدمنا ceil لأن الصندوق الجزئي يحتاج صندوقاً كاملاً.' }
      ],
      mistakes: [
        { title: 'Thinking ceil and floor return an int', en: 'They return a double. To get a whole number use a cast.', code: J`
int n = Math.ceil(2.1);        // error
int n = (int) Math.ceil(2.1);  // right
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
        'Use a double in the division before you use <code>ceil</code>.'
      ],
      rememberAr: 'floor للأسفل و ceil للأعلى و round لأقرب عدد. round(-2.5) تساوي -2. اجعل القسمة بأعداد عشرية قبل ceil.',
      practice: [
        { t: 'mcq', q: 'What does <code>Math.ceil(2.1)</code> give?', options: ['<code>2.0</code>', '<code>3.0</code>', '<code>2</code>', '<code>3</code>'], answer: 1, explain: 'ceil goes up and returns a double.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(Math.floor(4.9));
System.out.println(Math.ceil(4.1));
`, answer: J`
4.0
5.0
`, explain: 'floor goes down to 4.0 and ceil goes up to 5.0.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(Math.round(2.6));
System.out.println(Math.round(2.4));
`, answer: J`
3
2
`, explain: 'round picks the nearest whole number and prints it without .0.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(Math.ceil(7.2));
System.out.println(Math.floor(-7.2));
System.out.println(Math.round(7.5));
System.out.println(Math.abs(-3.5));
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
`, hint: 'Three println lines, one for each method.', explain: 'Each method rounds in its own direction; round prints as a whole number.' }
      ]
    },
    {
      title: 'Random numbers',
      titleAr: 'الأعداد العشوائية',
      minutes: 25,
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
        ], ar: 'القيمة r تكون 0.0 <= r < 1.0، ولا تساوي 1 أبداً.' },
        { type: 'check', q: 'Which value can <code>Math.random()</code> NEVER give?', options: ['0.0', '0.5', '0.999', '1.0'], answer: 3, explain: 'The number is always less than 1.0.' },
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
        { type: 'h', en: 'The general formula' },
        { type: 'p', en: 'To get a whole number from <code>a</code> to <code>b</code> (both included): <code>a + (int)(Math.random() * (b - a + 1))</code>. The number of possible values is <code>b - a + 1</code>.' },
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
`, out: '4', ar: 'استبدلنا العدد العشوائي بقيمة ثابتة لنتحقق من الصيغة.' }
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
      rememberAr: 'Math.random() تعطي 0.0 <= r < 1.0. الصيغة: a + (int)(Math.random() * (b - a + 1)). ضع أقواساً حول الضرب قبل التحويل إلى int.',
      practice: [
        { t: 'mcq', q: 'What range does <code>Math.random()</code> produce?', options: ['1 to 100', '0.0 up to but not including 1.0', '0 to 10', '-1.0 to 1.0'], answer: 1, explain: 'Always at least 0.0 and less than 1.0.' },
        { t: 'mcq', q: 'Which expression gives a whole number from 1 to 6?', options: ['<code>(int) (Math.random() * 6)</code>', '<code>1 + (int) (Math.random() * 6)</code>', '<code>1 + (int) (Math.random() * 7)</code>', '<code>Math.random() * 6</code>'], answer: 1, explain: 'Multiply by 6 (0 to 5), then add 1 (1 to 6).' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println((int) (0.99 * 10));
System.out.println((int) (0.05 * 10));
`, answer: J`
9
0
`, explain: '0.99 * 10 is 9.9 and the cast cuts it to 9. 0.05 * 10 is 0.5 and the cast gives 0.' },
        { t: 'output', q: 'What is printed?', code: J`
double r = 0.5;
System.out.println(1 + (int) (r * 6));
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
`, hint: 'Use <code>1 + (int) (r * 6)</code>.', explain: 'The same formula as with Math.random(), but with r typed by the user.' }
      ]
    },
    {
      title: 'Neat output with printf',
      titleAr: 'مخرجات منسقة باستخدام printf',
      minutes: 30,
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
`, stdin: '3 12.5', out: 'Total: 37.50 SAR', ar: 'استخدمنا %.2f لإظهار منزلتين عشريتين.' }
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
        'printf does not add a new line. Add <code>%n</code>.'
      ],
      rememberAr: '%d للأعداد الصحيحة و %f للعشرية و %s للنص و %c لحرف و %n لسطر جديد. %.2f تعني منزلتين عشريتين. القيم تملأ الفراغات بالترتيب.',
      practice: [
        { t: 'mcq', q: 'Which placeholder prints a whole number?', options: ['<code>%d</code>', '<code>%f</code>', '<code>%s</code>', '<code>%n</code>'], answer: 0, explain: 'd is for whole numbers.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.printf("%d items%n", 5);
System.out.printf("%s%n", "Riyadh");
`, answer: J`
5 items
Riyadh
`, explain: '%d is replaced by 5 and %s by Riyadh. %n ends each line.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.printf("%.2f%n", 3.14159);
System.out.printf("%.1f%n", 2.96);
`, answer: J`
3.14
3.0
`, explain: '3.14159 rounded to two decimals is 3.14. 2.96 rounded to one decimal is 3.0.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.printf("%s is %d years old%n", "Huda", 19);
System.out.printf("%c%c%n", 'O', 'K');
`, answer: J`
Huda is 19 years old
OK
`, explain: 'Each placeholder is replaced by the next value in order.' },
        { t: 'mcq', q: 'What happens with <code>System.out.printf("%d", 3.5);</code>?', options: ['It prints 3', 'It prints 3.5', 'It crashes when it runs', 'It does not compile'], answer: 2, explain: 'It compiles, but %d cannot print a decimal, so Java throws an exception at run time.' },
        { t: 'fill', q: 'Complete the format so the program prints <code>Total: 37.50 SAR</code> and then a new line.', code: J`
System.out.printf("Total: ___ SAR___", total);
`, answers: ['%.2f', '%n'], explain: '%.2f for the decimal total with two digits, and %n for the new line.' },
        { t: 'order', q: 'Arrange the lines so the program prints <code>Price: 12.50</code>.', lines: ['double price = 12.5;', 'System.out.printf("Price: %.2f%n", price);'], explain: 'Create the variable first, then print it.' },
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
`, hint: 'Area = PI * r squared. Format with <code>%.2f%n</code>.', explain: 'Compute the area with Math, then format it with printf.' }
      ]
    },
    {
      title: 'printf: width, alignment and String.format',
      titleAr: 'printf: العرض والمحاذاة و String.format',
      minutes: 30,
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
`, ar: 'العرض الثابت يجعل الأعمدة متحاذية.' }
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
System.out.printf("[%5d]%n", 42);
System.out.printf("[%-5d]%n", 42);
`, answer: J`
[   42]
[42   ]
`, explain: 'Width 5: three spaces on the left, or three on the right with the minus sign.' },
        { t: 'output', q: 'What is printed?', code: J`
double gpa = 3.456;
System.out.printf("GPA: %.2f%n", gpa);
System.out.printf("[%6.1f]%n", gpa);
System.out.printf("[%-6d]%n", 42);
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
String s = String.format("%d/%d", 3, 4);
System.out.println(s);
System.out.println(s.length());
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
`, hint: 'The format is <code>"%-10s%8.2f%n"</code>.', explain: 'Left-aligned text and right-aligned decimal produce a tidy row.' }
      ]
    },
    {
      title: 'The char type and Unicode codes',
      titleAr: 'النوع char وأرقام يونيكود',
      minutes: 25,
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
`, stdin: '72', out: 'H', ar: 'حوّلنا الرقم إلى حرف بالتحويل (char).' }
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
        'Letters are in alphabet order, so the codes go up by 1.'
      ],
      rememberAr: 'char يحمل حرفاً واحداً بين علامتي اقتباس مفردتين. لكل حرف كود: 0 هو 48، و A هو 65، و a هو 97. (int) تظهر الكود و (char) تحوله لحرف.',
      practice: [
        { t: 'mcq', q: 'Which value can be stored in a <code>char</code> variable?', options: ['<code>"A"</code>', '<code>\'A\'</code>', '<code>\'AB\'</code>', '<code>A</code>'], answer: 1, explain: 'One character in single quotes.' },
        { t: 'output', q: 'What is printed?', code: J`
char grade = 'B';
System.out.println(grade);
System.out.println((int) grade);
`, answer: J`
B
66
`, explain: 'B is at code 66.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println((char) 67);
System.out.println((int) '0');
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
`, hint: 'Use the cast <code>(char) code</code>.', explain: 'The cast turns a number into the character with that code.' }
      ]
    },
    {
      title: 'Character arithmetic and the Character class',
      titleAr: 'العمليات على الحروف والصنف Character',
      minutes: 30,
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
        { type: 'p', en: 'You do not have to remember code ranges. The <code>Character</code> class has tools to ask questions about a character. Each one takes a char in the parentheses.' },
        { type: 'table', head: ['Method', 'Answer'], rows: [
          ['<code>Character.isDigit(ch)</code>', 'true if ch is 0 to 9'],
          ['<code>Character.isLetter(ch)</code>', 'true if ch is a letter'],
          ['<code>Character.isUpperCase(ch)</code>', 'true if ch is a capital letter'],
          ['<code>Character.isLowerCase(ch)</code>', 'true if ch is a small letter'],
          ['<code>Character.toUpperCase(ch)</code>', 'the capital version of ch'],
          ['<code>Character.toLowerCase(ch)</code>', 'the small version of ch']
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
`, ar: 'الفرق بين كودين يعطي المسافة بينهما.' }
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
        '<code>Character.toUpperCase / toLowerCase</code> return a new char; store the result.'
      ],
      rememberAr: 'char + int يعطي int، نحوله بـ (char). الفرق بين حرفين يعطي المسافة. دوال Character تجيب true/false وتعيد حرفاً جديداً يجب تخزينه.',
      practice: [
        { t: 'mcq', q: 'What does <code>System.out.println(\'1\' + \'2\');</code> print?', options: ['<code>12</code>', '<code>3</code>', '<code>99</code>', 'Compile error'], answer: 2, explain: 'Both operands are chars, so their codes are added: 49 + 50 = 99.', explainAr: 'الحرف 1 قيمته 49 والحرف 2 قيمته 50 فالناتج 99.' },
        { t: 'output', q: 'What is printed?', code: J`
char ch = 'C';
System.out.println(ch + 2);
System.out.println((char) (ch + 2));
System.out.println((int) 'a');
`, answer: J`
69
E
97
`, explain: '\'C\' is 67, so ch + 2 is the int 69. The cast gives \'E\'. The code of \'a\' is 97.' },
        { t: 'mcq', q: 'What is the value of <code>\'a\' - \'A\'</code>?', options: ['26', '32', '0', '-32'], answer: 1, explain: '97 - 65 = 32.' },
        { t: 'output', q: 'What is printed?', code: J`
char c = 'x';
c += 2;
System.out.println(c);
System.out.println((int) c);
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
`, hint: 'Store <code>Character.toUpperCase(ch)</code> in a char, then print it and print <code>(int)</code> of it.', explain: 'toUpperCase leaves capitals and digits unchanged.' }
      ]
    },
    {
      title: 'Escape sequences',
      titleAr: 'تسلسلات الهروب',
      minutes: 25,
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
        { type: 'note', kind: 'tip', en: 'There is also a Unicode escape: <code>\'\\u0041\'</code> is the letter A (hexadecimal code 0041). You may meet it in exams.', ar: '\\u0041 تمثل الحرف A.' },
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
`, out: "Item\tPrice\nTea\t5\nHe said \"Welcome\"\nC:\\data\\marks.txt", ar: 'كل شرطة مائلة تُكتب مرتين لتظهر مرة واحدة.' }
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
        'To print a backslash, write two backslashes.'
      ],
      rememberAr: '\\n سطر جديد و \\t جدولة و \\" علامة اقتباس و \\\\ شرطة مائلة. حرفان في الكود يعطيان حرفاً واحداً في الناتج.',
      practice: [
        { t: 'mcq', q: 'Which escape sequence starts a new line?', options: ['<code>\\t</code>', '<code>\\n</code>', '<code>\\"</code>', '<code>\\\\</code>'], answer: 1, explain: '<code>n</code> stands for new line.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println("1\n2\n3");
`, answer: J`
1
2
3
`, explain: 'Each \\n starts a new line.' },
        { t: 'output', q: 'What is the output?', code: J`
System.out.println("A\\B");
System.out.println("\"Hi\"");
System.out.print("x\ny");
`, answer: "A\\B\n\"Hi\"\nx\ny", explain: '<code>\\\\</code> prints one backslash, <code>\\"</code> prints a double quote, and <code>\\n</code> starts a new line.' },
        { t: 'mcq', q: 'How do you print <code>She said "Hi"</code> (with the quotes)?', options: ['<code>System.out.println("She said "Hi"");</code>', '<code>System.out.println("She said \\"Hi\\"");</code>', '<code>System.out.println(\'She said "Hi"\');</code>', '<code>System.out.println("She said /"Hi/"");</code>'], answer: 1, explain: 'Each inner quote needs a backslash in front.' },
        { t: 'mcq', q: 'Which line gives a compile error?', options: ['<code>char c = \'A\';</code>', '<code>char c = \'AB\';</code>', '<code>String s = "AB";</code>', '<code>char c = \'\\n\';</code>'], answer: 1, explain: 'A char holds one character. <code>\'\\n\'</code> is one character (new line).' },
        { t: 'fill', q: 'Complete the code so it prints <code>She said "Salam"</code>.', code: J`
System.out.println("She said ___Salam___");
`, answers: ['\\"', '\\"'], explain: 'A quote inside the text is written as backslash and quote.' },
        { t: 'order', q: 'Arrange the lines to print <code>Total:</code> and then, on the next line, <code>45</code>.', lines: ['int total = 45;', 'System.out.println("Total:\\n" + total);'], explain: 'The \\n inside the text moves the number to the next line.' },
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
`, hint: 'Use <code>\\"</code> for the quotes and <code>\\\\</code> for the backslash.', explain: 'The inner quotes and the backslash both need escaping.' }
      ]
    },
    {
      title: 'Strings: your first text',
      titleAr: 'النصوص String: البداية',
      minutes: 30,
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
        { type: 'h', en: 'length and charAt' },
        { type: 'p', en: 'Two tools to learn first. <code>length()</code> tells you how many characters the string has. <code>charAt(i)</code> gives you the character at the index <code>i</code>. Notice the empty parentheses after <code>length</code>.' },
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
`, ar: 'الحرف الأول فهرسه 0 والأخير فهرسه length() - 1.' }
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
        '<code>+</code> joins text with anything. Java works from left to right.'
      ],
      rememberAr: 'String نص بين علامتي اقتباس مزدوجتين. الفهرس يبدأ من 0 وآخر فهرس length() - 1. length() تعد الحروف و charAt(i) تعطي حرفاً. + تدمج النص.',
      practice: [
        { t: 'mcq', q: 'What is the length of the string <code>"Java"</code>?', options: ['3', '4', '5', '0'], answer: 1, explain: 'J-a-v-a is four characters.' },
        { t: 'output', q: 'What is the output?', code: J`
String w = "Computer";
System.out.println(w.length());
System.out.println(w.charAt(3));
`, answer: J`
8
p
`, explain: 'C=0, o=1, m=2, p=3. The string has 8 characters.' },
        { t: 'output', q: 'What is the output?', code: J`
String name = "Noura";
System.out.println(name.length());
System.out.println(name.charAt(0));
System.out.println(name.charAt(name.length() - 1));
`, answer: J`
5
N
a
`, explain: 'The last character is at index 4: a.' },
        { t: 'mcq', q: 'A string has length 5. What happens with <code>s.charAt(5)</code>?', options: ['It returns the last character', 'It returns a space', 'It crashes with an exception', 'It returns 0'], answer: 2, explain: 'Valid indexes are 0 to 4.' },
        { t: 'mcq', q: 'What does <code>System.out.println("5" + 3 + 2);</code> print?', options: ['<code>10</code>', '<code>532</code>', '<code>55</code>', 'Compile error'], answer: 1, explain: 'Left to right: "5" + 3 is "53", then "53" + 2 is "532".' },
        { t: 'output', q: 'What is the output?', code: J`
System.out.println(3 + 4 + "ab" + 3 + 4);
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
`, hint: 'The last letter is at index <code>word.length() - 1</code>.', explain: 'A one-letter word has first and last letter equal.' }
      ]
    },
    {
      title: 'Cutting and searching: substring, indexOf, case',
      titleAr: 'القص والبحث: substring و indexOf وحالة الأحرف',
      minutes: 30,
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
`, ar: 'موضع المسافة يفصل الاسمين.' }
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
        '<code>indexOf(x)</code> gives the first position, or -1 if not found.',
        '<code>toUpperCase()</code>, <code>toLowerCase()</code> and <code>trim()</code> return a new string.',
        'Strings are immutable: store the result if you want to keep it.'
      ],
      rememberAr: 'substring(a, b) تقص من a وتتوقف قبل b. indexOf ترجع الموضع أو -1. دوال String لا تغير الأصل، بل تعيد نصاً جديداً يجب تخزينه.',
      practice: [
        { t: 'mcq', q: 'What is <code>"Riyadh".substring(0, 3)</code>?', options: ['<code>"Riyad"</code>', '<code>"Riy"</code>', '<code>"iya"</code>', '<code>"Ri"</code>'], answer: 1, explain: 'Indexes 0, 1 and 2.' },
        { t: 'output', q: 'What is the output?', code: J`
String w = "Computer";
System.out.println(w.substring(3, 6));
System.out.println(w.indexOf('t'));
System.out.println(w.substring(5));
`, answer: J`
put
5
ter
`, explain: 'C=0, o=1, m=2, p=3, u=4, t=5, e=6, r=7. Indexes 3 to 5 are "put", t is at 5, and from 5 to the end is "ter".' },
        { t: 'output', q: 'What is the output?', code: J`
String s = "Riyadh";
System.out.println(s.substring(2));
System.out.println(s.indexOf("ad"));
System.out.println(s.toUpperCase().charAt(1));
`, answer: J`
yadh
3
I
`, explain: 'R=0, i=1, y=2, a=3, d=4, h=5. substring(2) is "yadh". "ad" starts at 3. "RIYADH".charAt(1) is I.' },
        { t: 'mcq', q: 'What does <code>"Purple".indexOf(\'z\')</code> return?', options: ['<code>0</code>', '<code>-1</code>', '<code>6</code>', 'An exception'], answer: 1, explain: 'indexOf returns -1 when nothing is found.' },
        { t: 'output', q: 'What is the output?', code: J`
String s = "java";
s.toUpperCase();
System.out.println(s);
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
`, hint: 'Find the space with <code>indexOf</code>, then split with <code>substring</code>.', explain: 'The space index separates the two parts.' }
      ]
    },
    {
      title: 'Comparing strings: equals and compareTo',
      titleAr: 'مقارنة النصوص: equals و compareTo',
      minutes: 25,
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
`, ar: 'equals تفرق بين الحروف الكبيرة والصغيرة، بينما equalsIgnoreCase لا تفرق.' }
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
        'Compare the first different letters by their Unicode codes.'
      ],
      rememberAr: 'استخدم equals لمقارنة النصوص ولا تستخدم ==. equalsIgnoreCase تتجاهل حالة الأحرف. compareTo: سالب قبل، صفر متساويان، موجب بعد.',
      practice: [
        { t: 'mcq', q: 'Which method checks if two strings have the same characters, ignoring capital letters?', options: ['<code>equals</code>', '<code>equalsIgnoreCase</code>', '<code>compareTo</code>', '<code>==</code>'], answer: 1, explain: 'equalsIgnoreCase.' },
        { t: 'output', q: 'What is the output?', code: J`
String a = "java";
String c = "JAVA";
System.out.println(a.equals(c));
System.out.println(a.equalsIgnoreCase(c));
`, answer: J`
false
true
`, explain: 'equals is exact; equalsIgnoreCase ignores the case.' },
        { t: 'output', q: 'What is the output?', code: J`
System.out.println("apple".compareTo("banana"));
System.out.println("cat".compareTo("car"));
System.out.println("abc".compareTo("abc"));
`, answer: J`
-1
2
0
`, explain: '\'a\' - \'b\' = -1. \'t\' - \'r\' = 2. Identical strings give 0.' },
        { t: 'output', q: 'What is the output?', code: J`
System.out.println("Ali".compareTo("Amal"));
System.out.println("Zed".compareTo("apple"));
System.out.println("hello".compareTo("hello world"));
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
`, hint: 'Use <code>a.equalsIgnoreCase(b)</code> as the condition of an if.', explain: 'equalsIgnoreCase returns true when the texts match ignoring case.' }
      ]
    },
    {
      title: 'Reading strings: next and nextLine',
      titleAr: 'قراءة النصوص: next و nextLine',
      minutes: 30,
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
        { type: 'h', en: 'Reading one character' },
        { type: 'p', en: 'There is no <code>nextChar()</code>. To read one character, read a word and take its first character: <code>input.next().charAt(0)</code>. This is what you used in the last lesson.' },
        { type: 'h', en: 'The nextInt then nextLine trap' },
        { type: 'p', en: 'When you type <code>25</code> and press Enter, the scanner takes the 25 but leaves the Enter key waiting in the input. If your next call is <code>nextLine()</code>, it sees that leftover Enter and returns an <b>empty</b> string at once! The cure: call <code>nextLine()</code> one extra time to throw away the leftover.',
          ar: 'بعد nextInt يبقى Enter في الإدخال فتعيد nextLine نصاً فارغاً؛ نضيف nextLine إضافية للتخلص منه.' },
        { type: 'analogy', title: 'The crumb on the table', en: 'After eating the number, a crumb (the Enter key) is left on the table. If you ask for the next sandwich, you pick up the crumb first. Brush the crumb away with an extra <code>nextLine()</code>.' },
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
`, stdin: '19\nOmar Ali', out: 'Omar Ali is 19', ar: 'السطر الإضافي من nextLine يتخلص من Enter المتبقي.' }
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
        'Cure: call <code>input.nextLine();</code> once before reading a full line.'
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
`, hint: 'Add <code>input.nextLine();</code> before reading the name.', explain: 'The extra nextLine removes the Enter key left after the number.' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'What does <code>Math.sqrt(16)</code> return?', options: ['<code>4</code>', '<code>4.0</code>', '<code>8.0</code>', '<code>256.0</code>'], answer: 1, explain: 'The square root of 16 is 4, returned as a double: 4.0.' },
    { t: 'mcq', q: 'Which characters does a <code>char</code> literal use around the letter?', options: ['Double quotes', 'Single quotes', 'Backticks', 'No quotes'], answer: 1, explain: 'A char uses single quotes: \'A\'. A String uses double quotes.' },
    { t: 'output', q: 'What is the output?', code: J`
System.out.println(Math.max(Math.abs(-9), 4));
System.out.println(Math.sqrt(49) + 1);`,
      answer: "9\n8.0", explain: '<code>Math.abs(-9)</code> is 9, and the max of 9 and 4 is the int 9. <code>Math.sqrt</code> returns the double 7.0, plus 1 is 8.0.' },
    { t: 'mcq', q: 'What is the value of <code>Math.round(-3.5)</code>?', options: ['<code>-4</code>', '<code>-3</code>', '<code>-3.0</code>', '<code>-4.0</code>'], answer: 1, explain: 'round(x) is floor(x + 0.5) = floor(-3.0) = -3, and round returns a whole number, not a double.' },
    { t: 'output', q: 'What is the output?', code: J`
char c = 'x';
c += 2;
System.out.println(c);
System.out.println((int) c);`,
      answer: "z\n122", explain: "'x' is 120. The compound assignment <code>+=</code> keeps the type char, so c becomes 'z' (122)." },
    { t: 'mcq', q: 'Which statement prints <code>7.5</code> as <code>    7.50</code> (width 8, two decimals)?', options: ['<code>printf("%2.8f", 7.5)</code>', '<code>printf("%8.2f", 7.5)</code>', '<code>printf("%8d", 7.5)</code>', '<code>printf("%-8.2f", 7.5)</code>'], answer: 1, explain: 'In <code>%8.2f</code>, 8 is the total width and 2 is the number of decimals. A minus sign would left-align, and %d does not accept a double.' },
    { t: 'output', q: 'What is the output?', code: J`
String s = "Riyadh";
System.out.println(s.substring(2));
System.out.println(s.indexOf("ad"));
System.out.println(s.toUpperCase().charAt(1));`,
      answer: "yadh\n3\nI", explain: 'R=0, i=1, y=2, a=3, d=4, h=5. substring(2) is "yadh", "ad" starts at 3, and "RIYADH".charAt(1) is I.' },
    { t: 'mcq', q: 'What does <code>System.out.println("5" + 3 + 2);</code> print?', options: ['<code>10</code>', '<code>532</code>', '<code>55</code>', 'Compile error'], answer: 1, explain: 'Evaluation is left to right. "5" + 3 is the String "53", then "53" + 2 is "532".' },
    { t: 'output', q: 'What is the output?', code: J`
System.out.println(3 + 4 + "ab" + 3 + 4);`, answer: '7ab34', explain: 'Left to right: 3 + 4 = 7 (numbers), then 7 + "ab" = "7ab", then "7ab3", then "7ab34".' },
    { t: 'mcq', q: "What does <code>Character.isLetterOrDigit('_')</code> return?", options: ['<code>true</code>', '<code>false</code>', "<code>'_'</code>", 'Compile error'], answer: 1, explain: 'The underscore is neither a letter nor a digit.' },
    { t: 'output', q: 'What is the output?', code: J`
System.out.printf("%s is %d years old%n", "Huda", 19);
System.out.printf("%c%c%n", 'O', 'K');`,
      answer: "Huda is 19 years old\nOK", explain: 'Each specifier is replaced by the next value in order: %s by "Huda", %d by 19, and the two %c by O and K.' },
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
    { code: J`String w = input.next();  String line = input.nextLine();`, note: 'next reads one word; nextLine reads the rest of the line' }
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
    { term: 'Lexicographic order', ar: 'الترتيب المعجمي', def: 'Dictionary-like ordering based on the Unicode codes of characters; used by compareTo.' }
  ]
});
