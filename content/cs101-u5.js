JP.unit({
  course: 'cs101',
  n: 5,
  title: 'Loops',
  titleAr: 'الحلقات التكرارية',
  intro: "Loops let a program repeat work: read 40 grades, add up a bill, keep asking until the input is valid, or draw a table. In this unit you will master the while, do-while and for loops, counter- and sentinel-controlled repetition, accumulators, nested loops, break and continue, and learn how to avoid the classic off-by-one mistakes.",
  introAr: 'الحلقات تجعل البرنامج يكرر العمل: قراءة الدرجات، جمع الفواتير، التحقق من المدخلات، ورسم الجداول. ستتعلم حلقات while و do-while و for، والتكرار بعداد أو بقيمة حارسة، والمجمّعات، والحلقات المتداخلة، و break و continue، وتجنب أخطاء الفرق بواحد.',
  lessons: [
    {
      title: 'Your first while loop',
      titleAr: 'أول حلقة while',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why do we need loops?' },
        { type: 'p', en: 'Imagine you must print the word "Hello" 100 times. You could write 100 lines of <code>System.out.println</code>. That is slow and boring. A <b>loop</b> lets you write the instruction once and tell Java: "repeat this". Programs use loops all the time: to read 40 marks, to add up a shopping bill, or to keep asking until a password is correct.',
          ar: 'الحلقة تجعل Java تكرر التعليمات بدل أن تكتبها مرات كثيرة.' },
        { type: 'analogy', title: 'Running laps', en: 'A coach says: "Run around the track <b>while</b> you have done fewer than 4 laps." After every lap you ask yourself: "Have I done 4 laps yet?" If not, you run again. If yes, you stop. A <code>while</code> loop works in exactly the same way.',
          ar: 'مثل الجري حول الملعب: تستمر{{g:|ين}} ما دام عدد اللفات أقل من 4.' },
        { type: 'h', en: 'The shape of a while loop' },
        { type: 'p', en: 'Here is the smallest useful loop. It prints "Hello" three times. Read it slowly. Do not worry about the details yet; we will go line by line.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int count = 1;
        while (count <= 3) {
            System.out.println("Hello");
            count++;
        }
    }
}`, out: "Hello\nHello\nHello" },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int count = 1;', 'Make a counter. It starts at 1. It counts the laps we have started.'],
          ['while (count <= 3) {', 'The <b>question</b> (condition). "Is count less than or equal to 3?" If yes, run the lines inside <code>{ }</code>.'],
          ['System.out.println("Hello");', 'The <b>body</b>: the work we want to repeat.'],
          ['count++;', 'Add 1 to the counter. Without this line the answer would never change.'],
          ['}', 'End of the body. Java goes back up and asks the question again.']
        ], ar: 'الشرط يُفحص قبل كل تكرار. إذا كان صحيحاً يُنفَّذ الجسم ثم نعود لفحص الشرط.' },
        { type: 'check', q: 'In the loop above, what happens when count becomes 4?', options: ['Hello is printed a fourth time', 'The condition is false, so the loop stops', 'Java shows an error', 'count goes back to 1'], answer: 1,
          explain: '4 &lt;= 3 is false, so Java skips the body and continues after the closing brace.', hint: 'Ask the question: is 4 &lt;= 3?' },
        { type: 'h', en: 'Three parts: start, question, change' },
        { type: 'p', en: 'Almost every while loop has three parts. Remember them as <b>start, question, change</b>. If one part is missing, the loop usually breaks.' },
        { type: 'table', head: ['Part', 'Name', 'In our loop'], rows: [
          ['Start', 'Initialize the control variable', '<code>int count = 1;</code>'],
          ['Question', 'Test (condition)', '<code>count &lt;= 3</code>'],
          ['Change', 'Update the control variable', '<code>count++;</code>']
        ] },
        { type: 'analogy', title: 'A door guard', en: 'A guard at a gym door asks every person: "Is there still space inside?" He asks <b>before</b> letting each person in. If the answer is no, nobody enters. A while loop also asks <b>first</b>. That is why a while loop can run zero times.',
          ar: 'مثل حارس الباب: يسأل أولاً ثم يسمح بالدخول.' },
        { type: 'h', en: 'Showing the counter' },
        { type: 'p', en: 'The counter is a normal variable, so we can print it. Here the loop prints the numbers 1 to 3. Below the code you can see a <b>trace table</b>: one row each time Java asks the question.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int count = 1;
        while (count <= 3) {
            System.out.println("Lap " + count);
            count++;
        }
        System.out.println("Finished");
    }
}`, out: "Lap 1\nLap 2\nLap 3\nFinished" },
        { type: 'table', head: ['Check', 'count', 'count &lt;= 3 ?', 'Printed', 'count after'], rows: [
          ['1st', '1', 'true', 'Lap 1', '2'],
          ['2nd', '2', 'true', 'Lap 2', '3'],
          ['3rd', '3', 'true', 'Lap 3', '4'],
          ['4th', '4', 'false', '(loop ends)', '4']
        ] },
        { type: 'p', en: 'Notice: the question is asked <b>4 times</b>, but the body runs only <b>3 times</b>. The last question is the one that says "stop".',
          ar: 'نسأل الشرط 4 مرات لكن الجسم يعمل 3 مرات فقط.' },
        { type: 'check', q: 'What is the last number printed by this loop?', code: J`
int n = 1;
while (n <= 4) {
    System.out.println(n);
    n++;
}`, options: ['3', '4', '5', 'Nothing'], answer: 1,
          explain: 'n prints 1, 2, 3, 4. When n is 5 the question 5 &lt;= 4 is false.', hint: 'Does 4 &lt;= 4 hold?' },
        { type: 'steps', title: 'Worked example: price of coffee cups', problem: 'A cup of coffee costs 12 riyals. Print the price of 1, 2, 3 and 4 cups.',
          steps: [
            { en: 'Decide the counter. We count cups, starting at 1.', code: 'int cups = 1;' },
            { en: 'Decide when to stop. We want up to 4 cups, so the question is "cups &lt;= 4".', code: 'while (cups <= 4) {' },
            { en: 'The body prints the number of cups and the price. The price is cups times 12.', code: 'System.out.println("Cups: " + cups + " Price: " + cups * 12);' },
            { en: 'Change the counter by 1, or the loop never ends. Then close the brace.', code: 'cups++;\n}' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int cups = 1;
        while (cups <= 4) {
            System.out.println("Cups: " + cups + " Price: " + cups * 12);
            cups++;
        }
    }
}`, out: "Cups: 1 Price: 12\nCups: 2 Price: 24\nCups: 3 Price: 36\nCups: 4 Price: 48",
          ar: 'ابدأ بالعداد، ثم الشرط، ثم الجسم، ثم تغيير العداد.' },
        { type: 'note', kind: 'warn', en: 'If you forget <code>count++</code>, the counter never changes, the question is always "true", and the loop runs forever. This is called an <b>infinite loop</b>. If it happens, stop the program with the Stop button or Ctrl+C.',
          ar: 'نسيان تحديث العداد يسبب حلقة لا تنتهي.' }
      ],
      mistakes: [
        { title: 'Forgetting the change', en: 'Nothing changes <code>count</code>, so the loop never ends.', code: J`
int count = 1;
while (count <= 3) {
    System.out.println("Hello");
}`, ar: 'لا يوجد تحديث للعداد فالحلقة لا نهائية.' },
        { title: 'A semicolon after the condition', en: 'The semicolon is an empty body. Java repeats "nothing" forever, and the real body is never reached.', code: J`
while (count <= 3); {
    count++;
}`, ar: 'الفاصلة المنقوطة بعد الشرط تجعل الجسم فارغاً.' },
        { title: 'Using the counter before giving it a value', en: 'Java reports an error: variable might not have been initialized.', code: J`
int count;
while (count <= 3) {
    count++;
}` },
        { title: 'Wrong comparison', en: 'With <code>&lt;</code> instead of <code>&lt;=</code> the loop runs one time too few. To print 1 to 3 you need <code>count &lt;= 3</code>.', code: J`
int count = 1;
while (count < 3) {      // prints only 1 and 2
    System.out.println(count);
    count++;
}` }
      ],
      remember: [
        'A <b>loop</b> repeats a block of code; <code>while</code> checks the condition <b>before</b> each repeat.',
        'Every loop needs <b>start, question, change</b>.',
        'The body is inside <code>{ }</code>. Do not put <code>;</code> after the condition.',
        'The question is asked one more time than the body runs.',
        'No change to the variable means an infinite loop.'
      ],
      rememberAr: 'الحلقة تكرر الكود. تذكّر{{g:|ي}} ثلاثة أشياء: البداية، الشرط، التغيير. ولا تضع{{g:|ي}} فاصلة منقوطة بعد الشرط.',
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
int i = 1;
while (i <= 3) {
    System.out.println(i);
    i++;
}`, answer: "1\n2\n3", explain: 'i is 1, 2 and 3. When i is 4 the condition is false.' },
        { t: 'mcq', q: 'How many times is "Hi" printed?', code: J`
int c = 1;
while (c <= 4) {
    System.out.println("Hi");
    c++;
}`, options: ['3', '4', '5', 'Forever'], answer: 1, explain: 'c is 1, 2, 3, 4: four times. When c is 5 the loop stops.' },
        { t: 'output', q: 'What is the output? (print adds no new line.)', code: J`
int n = 3;
while (n > 0) {
    System.out.print(n + " ");
    n--;
}
System.out.println("Go");`, answer: '3 2 1 Go', explain: 'n goes 3, 2, 1. At 0 the condition n &gt; 0 is false. Then "Go" is printed on the same line.' },
        { t: 'fill', q: 'Complete the loop so it prints the numbers 1 to 5.', code: J`
int n = 1;
while (n ___ 5) {
    System.out.println(n);
    ___;
}`, answers: ['<=', 'n++'], explain: 'Use <code>&lt;=</code> so that 5 is included, and <code>n++</code> to change the counter.' },
        { t: 'order', q: 'Put the lines in the right order to print "Hello" 3 times.', lines: [
          'int count = 1;',
          'while (count <= 3) {',
          '    System.out.println("Hello");',
          '    count++;',
          '}'
        ], explain: 'Start first, then the question, then the body, then the change, then the closing brace.' },
        { t: 'mcq', q: 'Why is this loop infinite?', code: J`
int x = 5;
while (x > 0) {
    System.out.println(x);
    x++;
}`, options: ['x starts at 5', 'x increases, so x &gt; 0 stays true', 'There is no println', 'while cannot use &gt;'], answer: 1,
          explain: 'x gets bigger every time, so x &gt; 0 is always true. It should be <code>x--</code>.' },
        { t: 'code', q: 'Read an integer <code>n</code> and print the numbers from 1 to <code>n</code>, one per line, using a while loop. Do not print any prompt.<br>Example for <code>3</code>: <code>1</code>, <code>2</code>, <code>3</code> (on three lines).',
          qAr: 'اقرأ n واطبع الأعداد من 1 إلى n، كل عدد في سطر، باستخدام while.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '3', expected: "1\n2\n3" }, { stdin: '1', expected: '1' }, { stdin: '5', expected: "1\n2\n3\n4\n5" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int i = 1;
        while (i <= n) {
            System.out.println(i);
            i++;
        }
    }
}`, hint: 'Start a counter at 1. The question is <code>i &lt;= n</code>. Do not forget <code>i++</code>.',
          explain: 'The counter i starts at 1 and the loop continues while i is not bigger than n.' }
      ]
    },
    {
      title: 'Tracing while loops by hand',
      titleAr: 'تتبع حلقة while بخطوات يدوية',
      minutes: 30,
      body: [
        { type: 'h', en: 'Be the computer' },
        { type: 'p', en: 'When a loop gives a strange answer, the best tool is <b>tracing</b>: you act like the computer and write down every variable after every step. A pencil and a table are enough. If you can trace a loop, you can understand any loop.',
          ar: 'التتبع: تتصرف{{g:|ين}} كالحاسوب وتكتب{{g:|ين}} قيم المتغيرات في جدول.' },
        { type: 'analogy', title: 'Your finger on the page', en: 'When you read a timetable you put your finger on one row at a time. A trace table is your finger: one row for each time Java asks the question. You write what each variable is, and what changes.',
          ar: 'جدول التتبع مثل إصبعك على الصفحة: صف واحد في كل مرة.' },
        { type: 'p', en: 'Let us trace a loop that adds numbers. The variable <code>total</code> keeps a running sum.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int x = 1;
        int total = 0;
        while (x <= 3) {
            total = total + x;
            x++;
        }
        System.out.println(total);
    }
}`, out: '6' },
        { type: 'table', head: ['Check', 'x', 'x &lt;= 3 ?', 'total after body', 'x after body'], rows: [
          ['start', '1', '', '0', ''],
          ['1st', '1', 'true', '0 + 1 = 1', '2'],
          ['2nd', '2', 'true', '1 + 2 = 3', '3'],
          ['3rd', '3', 'true', '3 + 3 = 6', '4'],
          ['4th', '4', 'false', 'loop ends', '']
        ] },
        { type: 'lines', title: 'How to read the table', rows: [
          ['start row', 'Before the loop: x is 1 and total is 0.'],
          ['1st check', 'x is 1. Is 1 &lt;= 3? Yes. total becomes 0 + 1 = 1. Then x becomes 2.'],
          ['4th check', 'x is 4. Is 4 &lt;= 3? No. Jump out. The program prints total, which is 6.']
        ], ar: 'اكتب{{g:|ي}} صفاً لكل فحص للشرط، ثم قيم المتغيرات بعد الجسم.' },
        { type: 'check', q: 'After the loop ends, what is the value of x?', options: ['3', '4', '6', '0'], answer: 1,
          explain: 'The loop stops when x is 4 (the first value that makes x &lt;= 3 false). x is still 4 after the loop.', hint: 'Look at the last row of the table.' },
        { type: 'h', en: 'Counting down and jumping' },
        { type: 'p', en: 'The change does not have to be <code>++</code>. You can count down with <code>--</code> or jump with <code>-= 3</code> or <code>+= 2</code>. This helps with countdowns and with every second number.' },
        { type: 'analogy', title: 'Walking down stairs', en: 'You are on step 10 and take 3 steps down each time. You land on 10, 7, 4, 1. At the next jump you would go below 0, so you stop. The loop stops in the same way.',
          ar: 'مثل النزول على الدرج بخطوات ثلاث درجات في كل مرة.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 10;
        while (n > 0) {
            System.out.print(n + " ");
            n -= 3;
        }
        System.out.println("Liftoff");
    }
}`, out: "10 7 4 1 Liftoff" },
        { type: 'table', head: ['Check', 'n', 'n &gt; 0 ?', 'Printed'], rows: [
          ['1st', '10', 'true', '10'],
          ['2nd', '7', 'true', '7'],
          ['3rd', '4', 'true', '4'],
          ['4th', '1', 'true', '1'],
          ['5th', '-2', 'false', '(stop)']
        ] },
        { type: 'check', q: 'What does <code>n -= 3;</code> mean?', options: ['Set n to 3', 'Subtract 3 from n', 'Compare n with 3', 'Print n minus 3'], answer: 1,
          explain: '<code>n -= 3</code> is short for <code>n = n - 3</code>.', hint: 'Compare with <code>sum += x</code> from earlier units.' },
        { type: 'h', en: 'A loop that may run zero times' },
        { type: 'p', en: 'Because the question comes first, the body may never run. This is correct behaviour, not an error.' },
        { type: 'code', code: J`
int i = 10;
while (i < 10) {
    System.out.println("never printed");
    i++;
}` },
        { type: 'note', kind: 'exam', en: 'Exam trap: <code>10 &lt; 10</code> is false at the very first check, so the body runs <b>0</b> times.',
          ar: 'قد يعمل جسم while صفر مرة.' },
        { type: 'steps', title: 'Worked example: saving for a gift', problem: 'You save 15 riyals every week. How many weeks until you have at least 100 riyals?',
          steps: [
            { en: 'Two variables: the money saved and the number of weeks.', code: 'int saved = 0;\nint weeks = 0;' },
            { en: 'Keep going while we have less than 100.', code: 'while (saved < 100) {' },
            { en: 'Each week: add 15 riyals and count the week.', code: '    saved += 15;\n    weeks++;\n}' },
            { en: 'Trace: after week 1 saved is 15, after week 2 it is 30, ... after week 6 it is 90 (still &lt; 100), after week 7 it is 105. Now 105 &lt; 100 is false.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int saved = 0;
        int weeks = 0;
        while (saved < 100) {
            saved += 15;
            weeks++;
        }
        System.out.println("Weeks: " + weeks);
        System.out.println("Saved: " + saved);
    }
}`, out: "Weeks: 7\nSaved: 105", ar: 'نكرر ما دام المبلغ أقل من 100.' },
        { type: 'h', en: 'Taking digits off a number' },
        { type: 'p', en: 'Use <code>% 10</code> to get the last digit and <code>/ 10</code> to remove it (integer division). Repeat until the number becomes 0. We do not know in advance how many digits there are, so a while loop is perfect.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int number = 482;
        int sum = 0;
        while (number > 0) {
            sum += number % 10;
            number /= 10;
        }
        System.out.println("Sum of digits: " + sum);
    }
}`, out: 'Sum of digits: 14' },
        { type: 'table', head: ['Check', 'number', 'number % 10', 'sum after', 'number after'], rows: [
          ['1st', '482', '2', '2', '48'],
          ['2nd', '48', '8', '10', '4'],
          ['3rd', '4', '4', '14', '0'],
          ['4th', '0', '', 'stop (0 &gt; 0 is false)', '']
        ] }
      ],
      mistakes: [
        { title: 'Changing in the wrong direction', en: 'n gets bigger, so n &gt; 0 is always true and the loop never stops.', code: J`
int n = 10;
while (n > 0) {
    System.out.println(n);
    n++;      // should be n--
}` },
        { title: 'Forgetting the braces', en: 'Without <code>{ }</code> only the first statement belongs to the loop. <code>n--</code> is outside, so the loop is infinite.', code: J`
while (n > 0)
    System.out.println(n);
    n--;` },
        { title: 'Changing the wrong variable', en: 'The question uses <code>x</code> but the body changes <code>y</code>.', code: J`
while (x < 5) {
    y++;
}` },
        { title: 'Wrong starting value', en: 'Starting <code>total</code> at 1 instead of 0 makes every answer one too big.', code: J`
int total = 1;   // should be 0
` }
      ],
      remember: [
        'To <b>trace</b>: one row per check; write the variables after each body.',
        'The change can be <code>++</code>, <code>--</code>, <code>+= 2</code>, <code>-= 3</code> and more.',
        'The loop stops at the first value that makes the condition false.',
        'A while loop can run <b>zero</b> times.',
        '<code>% 10</code> gives the last digit; <code>/ 10</code> removes it.'
      ],
      rememberAr: 'تتبّع{{g:|ي}} الحلقة بجدول. الحلقة قد لا تعمل أبداً. و %10 تعطي آخر رقم و /10 تحذفه.',
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
int k = 2;
while (k <= 8) {
    System.out.print(k + " ");
    k += 2;
}`, answer: '2 4 6 8', explain: 'k is 2, 4, 6, 8, then 10. 10 &lt;= 8 is false.' },
        { t: 'mcq', q: 'How many times does the body run?', code: J`
int i = 10;
while (i < 10) {
    System.out.println(i);
    i++;
}`, options: ['0', '1', '10', 'Forever'], answer: 0, explain: 'The first check 10 &lt; 10 is false, so the body never runs.' },
        { t: 'output', q: 'What is the output?', code: J`
int k = 1;
while (k < 20) {
    System.out.print(k + " ");
    k *= 3;
}`, answer: '1 3 9', explain: 'k takes 1, 3, 9 and then 27. 27 &lt; 20 is false, so 27 is not printed.' },
        { t: 'fill', q: 'Complete the loop so it prints the even numbers 2, 4, 6, ..., 20 (one per line).', code: J`
int n = 2;
while (n ___ 20) {
    System.out.println(n);
    n ___ 2;
}`, answers: ['<=', '+='], explain: 'Use <code>&lt;=</code> so 20 is included and add 2 each time.' },
        { t: 'output', q: 'What is the output?', code: J`
int x = 5;
int f = 1;
while (x > 1) {
    f *= x;
    x--;
}
System.out.println(f);`, answer: '120', explain: 'f = 5 * 4 * 3 * 2 = 120. The loop stops when x is 1.' },
        { t: 'mcq', q: 'What happens when this code runs?', code: J`
int count = 1;
while (count <= 5); {
    count++;
}`, options: ['The block runs 5 times', 'The block runs once', 'Infinite loop', 'Compile error'], answer: 2,
          explain: 'The semicolon after the condition is an empty body. count stays 1 forever.', explainAr: 'الفاصلة المنقوطة تجعل الجسم فارغاً فلا يتغير العداد.' },
        { t: 'order', q: 'Order the lines to count how many digits the number 905 has.', lines: [
          'int n = 905;',
          'int digits = 0;',
          'while (n > 0) {',
          '    digits++;',
          '    n /= 10;',
          '}',
          'System.out.println(digits);'
        ], explain: 'Each time we remove one digit with / 10 and count it. After 3 rounds n is 0.' },
        { t: 'code', q: 'Read an integer <code>n</code> and print a countdown from <code>n</code> down to 1, one number per line, then the word <code>Go</code>. Do not print any prompt.<br>Example for <code>3</code>: <code>3</code>, <code>2</code>, <code>1</code>, <code>Go</code> on four lines.',
          qAr: 'اقرأ n واطبع عداً تنازلياً من n إلى 1 ثم كلمة Go.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '3', expected: "3\n2\n1\nGo" }, { stdin: '1', expected: "1\nGo" }, { stdin: '5', expected: "5\n4\n3\n2\n1\nGo" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        while (n >= 1) {
            System.out.println(n);
            n--;
        }
        System.out.println("Go");
    }
}`, hint: 'Count down with <code>n--</code> while <code>n &gt;= 1</code>. Print "Go" after the loop.',
          explain: 'The loop prints n and makes it smaller until it reaches 0. "Go" is printed once, after the loop.' }
      ]
    },
    {
      title: 'Sentinel loops: stop when the user says stop',
      titleAr: 'القيمة الحارسة: التوقف عند إشارة المستخدم',
      minutes: 30,
      body: [
        { type: 'h', en: 'When we do not know how many values' },
        { type: 'p', en: 'A teacher wants to enter exam marks. Today there are 12 students, tomorrow 40. The program cannot know the number in advance. Solution: the teacher types a special value, such as <code>-1</code>, to say "no more marks". This special value is called a <b>sentinel</b>.',
          ar: 'القيمة الحارسة قيمة خاصة تعني: توقف، مثل -1 عند إدخال الدرجات.' },
        { type: 'analogy', title: 'The "THE END" card', en: 'A pile of exam papers has a red card at the bottom. You mark paper after paper. When you see the red card you know the pile is finished. The red card is not an exam paper; it is only a signal. The sentinel is that red card.',
          ar: 'البطاقة الحمراء في نهاية الأوراق هي القيمة الحارسة.' },
        { type: 'h', en: 'The priming read pattern' },
        { type: 'p', en: 'We must read a value <b>before</b> the first check, and read the next value at the <b>end</b> of every round. The first read is called the <b>priming read</b>.' },
        { type: 'code', run: true, stdin: '80 95 -1', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();
        while (mark != -1) {
            System.out.println("Got " + mark);
            mark = input.nextInt();
        }
        System.out.println("Done");
    }
}`, out: "Got 80\nGot 95\nDone" },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int mark = input.nextInt();', 'Priming read: take the first number from the keyboard.'],
          ['while (mark != -1) {', 'Question: "Is this number <b>not</b> the stop signal?" If it is -1 we skip the loop.'],
          ['System.out.println("Got " + mark);', 'Use the number (here we only print it).'],
          ['mark = input.nextInt();', 'Read the <b>next</b> number. This is the "change" part. Without it, the loop is infinite.']
        ], ar: 'اقرأ{{g:|ي}} القيمة الأولى قبل الحلقة والقيمة التالية في آخر جسم الحلقة.' },
        { type: 'table', head: ['Check', 'mark', 'mark != -1 ?', 'Printed'], rows: [
          ['1st', '80', 'true', 'Got 80'],
          ['2nd', '95', 'true', 'Got 95'],
          ['3rd', '-1', 'false', '(stop)']
        ] },
        { type: 'check', q: 'What does the loop do with the value -1?', options: ['Prints "Got -1"', 'Stops without printing it', 'Skips it and keeps reading', 'Shows an error'], answer: 1,
          explain: 'The question mark != -1 is false for -1, so the loop ends and -1 is never used as data.', hint: 'Look at the third row of the table.' },
        { type: 'note', kind: 'tip', en: 'Remember the order inside the loop: <b>use</b> the value first, <b>then</b> read the next one. If you swap them, you will use the sentinel by mistake.',
          ar: 'أولاً استخدم{{g:|ي}} القيمة ثم اقرأ{{g:|ي}} التالية.' },
        { type: 'h', en: 'Adding up the marks' },
        { type: 'p', en: 'Now we do something useful: count the marks, add them, and compute the average. Two accumulators: <code>sum</code> and <code>count</code>, both start at 0.' },
        { type: 'analogy', title: 'The cashier', en: 'A cashier adds each item to a running total on the screen and counts how many items there are. When the last item is scanned, the total and the count are ready. Your <code>sum</code> and <code>count</code> are the cashier\'s screen.',
          ar: 'المجمّعان sum و count مثل شاشة الكاشير.' },
        { type: 'code', run: true, stdin: '80 95 77 -1', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int sum = 0;
        int count = 0;
        int score = input.nextInt();
        while (score != -1) {
            sum += score;
            count++;
            score = input.nextInt();
        }
        if (count > 0) {
            System.out.println("Count: " + count);
            System.out.println("Average: " + (double) sum / count);
        } else {
            System.out.println("No scores");
        }
    }
}`, out: "Count: 3\nAverage: 84.0" },
        { type: 'table', head: ['Check', 'score', 'sum after', 'count after'], rows: [
          ['start', '80', '0', '0'],
          ['1st', '80', '80', '1'],
          ['2nd', '95', '175', '2'],
          ['3rd', '77', '252', '3'],
          ['4th', '-1', 'stop', '']
        ] },
        { type: 'p', en: 'After the loop: 252 / 3 = 84.0. We write <code>(double) sum / count</code> so Java does not cut off the decimals. The <code>if (count &gt; 0)</code> protects us when the first number is -1 (no marks): dividing by zero would be a problem.' },
        { type: 'note', kind: 'warn', en: 'The sentinel must be a value that can never be real data, and it must never be added to the sum. Marks are never -1, so -1 is a good sentinel for marks. It would be a bad one for temperatures in winter.',
          ar: 'القيمة الحارسة يجب ألا تكون قيمة صالحة للبيانات.' },
        { type: 'steps', title: 'Worked example: daily expenses', problem: 'Read your daily expenses in riyals until you type 0. Print the total.',
          steps: [
            { en: 'We need a total that starts at 0.', code: 'int total = 0;' },
            { en: 'Priming read: read the first expense.', code: 'int expense = input.nextInt();' },
            { en: 'Loop while the expense is not 0 (the sentinel).', code: 'while (expense != 0) {' },
            { en: 'Add it to the total, then read the next one.', code: '    total += expense;\n    expense = input.nextInt();\n}' },
            { en: 'After the loop print the total. With input 12 30 8 0 the total is 12 + 30 + 8 = 50.', code: 'System.out.println("Total: " + total);' }
          ],
          stdin: '12 30 8 0',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = 0;
        int expense = input.nextInt();
        while (expense != 0) {
            total += expense;
            expense = input.nextInt();
        }
        System.out.println("Total: " + total);
    }
}`, out: 'Total: 50', ar: 'اقرأ أولاً، ثم كرر: أضف ثم اقرأ التالي.' }
      ],
      mistakes: [
        { title: 'No second read', en: 'The value never changes, so the loop is infinite (it prints the first number forever).', code: J`
int mark = input.nextInt();
while (mark != -1) {
    System.out.println(mark);
}` },
        { title: 'Reading first, using later', en: 'Here the sentinel is read and added to the sum before the question is asked. The total will be 1 too small for every -1.', code: J`
while (mark != -1) {
    mark = input.nextInt();
    sum += mark;      // may add -1!
}` },
        { title: 'Integer division in the average', en: '<code>sum / count</code> cuts the decimals. Cast one side: <code>(double) sum / count</code>.', code: J`
System.out.println(sum / count);   // 252 / 3 fine, but 253 / 3 gives 84, not 84.33` },
        { title: 'Dividing by zero', en: 'If the first value is the sentinel, <code>count</code> is 0 and the average has no meaning. Check <code>count &gt; 0</code> first.' }
      ],
      remember: [
        'A <b>sentinel</b> is a special value that means "stop". It is not real data.',
        'Pattern: <b>read, while (not sentinel) { use, read }</b>.',
        'The first read before the loop is the <b>priming read</b>.',
        'Never add the sentinel to your sum or count.',
        'Check <code>count &gt; 0</code> before dividing for an average.'
      ],
      rememberAr: 'اقرأ{{g:|ي}} أولاً، ثم داخل الحلقة: استخدم{{g:|ي}} القيمة ثم اقرأ{{g:|ي}} التالية. لا تُدخل{{g:|ي}} القيمة الحارسة في المجموع.',
      practice: [
        { t: 'mcq', q: 'What is a sentinel value?', options: ['A variable that counts', 'A special input value that tells the loop to stop', 'The first value in a list', 'A kind of loop'], answer: 1,
          explain: 'It is a signal such as -1 or 0 that means "end of data".' },
        { t: 'mcq', q: 'What happens if the user types 5 first? (The second read is missing.)', code: J`
int x = input.nextInt();
while (x != 0) {
    total += x;
}`, options: ['It stops after one round', 'x never changes, so it is an infinite loop', 'The program prints 0', 'Compile error'], answer: 1,
          explain: 'Without reading again, x stays 5 and 5 != 0 is always true, so the loop never ends.' },
        { t: 'mcq', q: 'Marks can be from -10 to 100 (penalties are allowed). Which value is a <b>bad</b> sentinel?',
          options: ['<code>-1</code>', '<code>-999</code>', '<code>101</code>', '<code>1000</code>'], answer: 0,
          explain: 'A sentinel must be outside the range of valid data. -1 can be a valid mark here.' },
        { t: 'fill', q: 'Complete the sentinel loop. It adds numbers until the user types 0.', code: J`
int total = 0;
int x = input.nextInt();
while (x ___ 0) {
    total += x;
    x = ___.nextInt();
}`, answers: ['!=', 'input'], explain: 'The loop continues while x is not 0, and the last line reads the next value from the Scanner called input.' },
        { t: 'order', q: 'Order the lines to add numbers until the user enters 0, then print the total.', lines: [
          'int total = 0;',
          'int value = input.nextInt();',
          'while (value != 0) {',
          '    total += value;',
          '    value = input.nextInt();',
          '}',
          'System.out.println(total);'
        ], explain: 'Priming read before the loop; inside use the value then read the next; print after the loop.' },
        { t: 'code', q: 'Read integers until <code>0</code> is entered (0 is the sentinel). Print their sum. Do not print any prompt.<br>Example: input <code>4 6 10 0</code> prints <code>20</code>.',
          qAr: 'اقرأ أعداداً حتى الصفر واطبع مجموعها.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // your code here
    }
}`, tests: [ { stdin: '4 6 10 0', expected: '20' }, { stdin: '0', expected: '0' }, { stdin: '5 -2 0', expected: '3' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int sum = 0;
        int x = input.nextInt();
        while (x != 0) {
            sum += x;
            x = input.nextInt();
        }
        System.out.println(sum);
    }
}`, hint: 'Priming read, then <code>while (x != 0)</code>, add, read again.', explain: 'If the first number is 0 the loop never runs and the sum stays 0.' },
        { t: 'code', q: 'Read integers until <code>0</code> is entered (0 is not counted). Print how many were positive and how many were negative, exactly as:<br><code>Positives: 3</code><br><code>Negatives: 2</code><br>Do not print any prompt.',
          qAr: 'اقرأ أعداداً حتى الصفر واطبع عدد الموجبة وعدد السالبة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // your code here
    }
}`, tests: [ { stdin: '5 -3 8 -1 2 0', expected: "Positives: 3\nNegatives: 2" }, { stdin: '0', expected: "Positives: 0\nNegatives: 0" }, { stdin: '-4 -9 0', expected: "Positives: 0\nNegatives: 2" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int positives = 0;
        int negatives = 0;
        int value = input.nextInt();
        while (value != 0) {
            if (value > 0) {
                positives++;
            } else {
                negatives++;
            }
            value = input.nextInt();
        }
        System.out.println("Positives: " + positives);
        System.out.println("Negatives: " + negatives);
    }
}`, hint: 'Use the priming read pattern with two counters.', explain: 'Each value inside the loop is not 0, so it is either positive or negative. The sentinel stops the loop before it is counted.' }
      ]
    },
    {
      title: 'do-while and input validation',
      titleAr: 'حلقة do-while والتحقق من المدخلات',
      minutes: 30,
      body: [
        { type: 'h', en: 'Do first, ask later' },
        { type: 'p', en: 'Sometimes you must do something <b>at least once</b>. For example, a program must ask for a PIN code before it can decide if the PIN is right. A <code>while</code> loop asks the question first, so it is not perfect here. The <code>do-while</code> loop does the body first and asks the question <b>after</b>.',
          ar: 'حلقة do-while تنفذ الجسم أولاً ثم تفحص الشرط، فتعمل مرة واحدة على الأقل.' },
        { type: 'analogy', title: 'Tasting the soup', en: 'A cook tastes the soup first, and only then decides if more salt is needed. He cannot decide before the first taste. A do-while loop is the same: act first, decide after.',
          ar: 'الطباخ يتذوق الحساء أولاً ثم يقرر.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int x = 5;
        do {
            System.out.println("x is " + x);
            x++;
        } while (x < 5);
        System.out.println("End");
    }
}`, out: "x is 5\nEnd" },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['do {', 'Start the body. No question yet!'],
          ['System.out.println("x is " + x);', 'Runs once, even though x is not less than 5.'],
          ['x++;', 'x becomes 6.'],
          ['} while (x < 5);', 'Now ask: is 6 &lt; 5? No, so stop. <b>Note the semicolon at the end.</b>']
        ], ar: 'لا تنس{{g:|ي}} الفاصلة المنقوطة بعد while في do-while.' },
        { type: 'table', head: ['', 'while', 'do-while'], rows: [
          ['Question asked', 'before the body', 'after the body'],
          ['Smallest number of runs', '0', '1'],
          ['Ends with ;', 'no', 'yes, after <code>while (...)</code>']
        ] },
        { type: 'check', q: 'Which loop always runs its body at least once?', options: ['while', 'do-while', 'both', 'neither'], answer: 1,
          explain: 'do-while asks the question after the body, so the body runs at least once.' },
        { type: 'h', en: 'Input validation' },
        { type: 'p', en: 'People type wrong things: a mark of 150, a negative age. <b>Input validation</b> means refusing bad input and asking again, until the value is acceptable. Because we must ask at least once, do-while is the natural choice.',
          ar: 'التحقق: نرفض القيمة الخاطئة ونطلب القيمة مرة أخرى.' },
        { type: 'analogy', title: 'The vending machine', en: 'A drink machine accepts only valid coins. If you insert a wrong coin it gives it back and waits. It repeats until you insert a good coin.',
          ar: 'آلة المشروبات تعيد العملة الخاطئة وتنتظر.' },
        { type: 'code', run: true, stdin: '120 -5 88', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int grade;
        do {
            System.out.println("Enter a grade (0-100):");
            grade = input.nextInt();
            if (grade < 0 || grade > 100) {
                System.out.println("Invalid, try again.");
            }
        } while (grade < 0 || grade > 100);
        System.out.println("Accepted: " + grade);
    }
}`, out: "Enter a grade (0-100):\nInvalid, try again.\nEnter a grade (0-100):\nInvalid, try again.\nEnter a grade (0-100):\nAccepted: 88" },
        { type: 'table', head: ['Round', 'grade read', 'Invalid? (grade &lt; 0 or &gt; 100)', 'Loop continues?'], rows: [
          ['1', '120', 'yes', 'yes'],
          ['2', '-5', 'yes', 'yes'],
          ['3', '88', 'no', 'no, stop']
        ] },
        { type: 'lines', title: 'Key points', rows: [
          ['int grade;', 'Declare <b>before</b> the loop, so the condition after the loop can see it.'],
          ['grade < 0 || grade > 100', '"bad" means too small <b>or</b> too big. We repeat while the grade is bad.'],
          ['} while (...);', 'Repeat while bad. Stop when good.']
        ], ar: 'نكرر ما دام الإدخال خاطئاً.' },
        { type: 'note', kind: 'exam', en: 'The condition after <code>while</code> says when to <b>repeat</b>, not when the input is good. For a valid range 0 to 100, repeat when <code>grade &lt; 0 || grade &gt; 100</code>. Using <code>&amp;&amp;</code> here would never be true.',
          ar: 'الشرط يصف متى نكرر، أي الحالة الخاطئة.' },
        { type: 'check', q: 'A seat number must be from 1 to 10. When should the loop repeat?', options: ['seat &gt;= 1 &amp;&amp; seat &lt;= 10', 'seat &lt; 1 || seat &gt; 10', 'seat == 10', 'seat &gt; 1'], answer: 1,
          explain: 'Repeat when the seat is outside the range: less than 1 or more than 10.', hint: 'Repeat means the input was bad.' },
        { type: 'h', en: 'A simple menu' },
        { type: 'p', en: 'Menus also use do-while: show the menu at least once, and repeat until the user chooses Exit (0).' },
        { type: 'code', run: true, stdin: '1 2 0', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int choice;
        do {
            System.out.println("1) Coffee  2) Tea  0) Exit");
            choice = input.nextInt();
            if (choice == 1) {
                System.out.println("Coffee: 10 riyals");
            } else if (choice == 2) {
                System.out.println("Tea: 5 riyals");
            }
        } while (choice != 0);
        System.out.println("Bye");
    }
}`, out: "1) Coffee  2) Tea  0) Exit\nCoffee: 10 riyals\n1) Coffee  2) Tea  0) Exit\nTea: 5 riyals\n1) Coffee  2) Tea  0) Exit\nBye" },
        { type: 'steps', title: 'Worked example: gym days', problem: 'A gym card allows 1 to 7 days a week. Ask for the number of days and repeat until it is valid.',
          steps: [
            { en: 'Declare the variable before the loop.', code: 'int days;' },
            { en: 'Open the do block and read a value.', code: 'do {\n    days = input.nextInt();' },
            { en: 'If it is bad, tell the user.', code: '    if (days < 1 || days > 7) {\n        System.out.println("Try again");\n    }' },
            { en: 'Repeat while it is bad. Do not forget the semicolon.', code: '} while (days < 1 || days > 7);' },
            { en: 'With input 9 0 3: 9 is bad, 0 is bad, 3 is good. Two messages are printed, then the result.' }
          ],
          stdin: '9 0 3',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int days;
        do {
            days = input.nextInt();
            if (days < 1 || days > 7) {
                System.out.println("Try again");
            }
        } while (days < 1 || days > 7);
        System.out.println("Days: " + days);
    }
}`, out: "Try again\nTry again\nDays: 3", ar: 'اقرأ ثم افحص ثم كرر إذا كانت القيمة خاطئة.' }
      ],
      mistakes: [
        { title: 'Missing semicolon after while', en: 'This is a compile error. A do-while ends with a semicolon.', code: J`
do {
    x++;
} while (x < 5)      // missing ;` },
        { title: 'Declaring the variable inside the do block', en: 'The condition cannot see a variable that lives only inside the braces. Declare it before <code>do</code>.', code: J`
do {
    int grade = input.nextInt();
} while (grade < 0);   // error: cannot find symbol` },
        { title: 'Using && for a range check', en: 'A number cannot be both below 0 and above 100, so the loop would never repeat.', code: J`
} while (grade < 0 && grade > 100);` },
        { title: 'Using while when you must ask first', en: 'With a plain while, the variable has no value at the first check (compile error), or you have to copy the read twice.', code: J`
int grade;
while (grade < 0 || grade > 100) {   // error
    grade = input.nextInt();
}` }
      ],
      remember: [
        '<code>do-while</code> runs the body first, then asks the question.',
        'The body runs <b>at least once</b>.',
        'There is a <b>semicolon</b> after <code>while (...)</code>.',
        'Declare the variable <b>before</b> the loop.',
        'For validation: repeat while the input is <b>bad</b>.'
      ],
      rememberAr: 'do-while تعمل مرة على الأقل، وتنتهي بفاصلة منقوطة. نكرر ما دام الإدخال خاطئاً.',
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
int n = 10;
do {
    System.out.println(n);
    n += 5;
} while (n < 10);`, answer: '10', explain: 'The body runs once. Then n is 15 and 15 &lt; 10 is false.' },
        { t: 'mcq', q: 'Which loop always executes its body at least once?', options: ['<code>while</code>', '<code>for</code>', '<code>do-while</code>', 'None of them'], answer: 2,
          explain: 'do-while checks the condition after the body.' },
        { t: 'output', q: 'What is the output?', code: J`
int n = 1;
do {
    System.out.print(n + " ");
    n++;
} while (n <= 3);`, answer: '1 2 3', explain: 'n is 1, 2, 3. After the third round n is 4 and 4 &lt;= 3 is false.' },
        { t: 'fill', q: 'Complete the input validation loop: keep reading until the age is between 0 and 120.', code: J`
int age;
___ {
    age = input.nextInt();
} ___ (age < 0 || age > 120);`, answers: ['do', 'while'], explain: 'A do-while loop reads at least once and repeats while the age is invalid.' },
        { t: 'mcq', q: 'A mark must be from 0 to 100. Which condition makes the loop repeat when the mark is bad?', options: ['<code>mark &gt;= 0 &amp;&amp; mark &lt;= 100</code>', '<code>mark &lt; 0 || mark &gt; 100</code>', '<code>mark &lt; 0 &amp;&amp; mark &gt; 100</code>', '<code>mark == 100</code>'], answer: 1,
          explain: 'Bad means below 0 <b>or</b> above 100.' },
        { t: 'order', q: 'Order the lines to read an age from 0 to 120 and print it.', lines: [
          'int age;',
          'do {',
          '    age = input.nextInt();',
          '} while (age < 0 || age > 120);',
          'System.out.println(age);'
        ], explain: 'Declare, do, read, repeat while bad, then print the good value.' },
        { t: 'code', q: 'Read integers until a valid mark (0 to 100) is typed. Ignore the bad ones. Then print <code>Mark: </code> followed by the valid mark. Do not print any prompt.<br>Example: input <code>150 -3 77</code> prints <code>Mark: 77</code>.',
          qAr: 'اقرأ حتى تُدخل درجة صحيحة من 0 إلى 100 ثم اطبعها.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark;
        // your code here
    }
}`, tests: [ { stdin: '150 -3 77', expected: 'Mark: 77' }, { stdin: '50', expected: 'Mark: 50' }, { stdin: '101 100', expected: 'Mark: 100' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark;
        do {
            mark = input.nextInt();
        } while (mark < 0 || mark > 100);
        System.out.println("Mark: " + mark);
    }
}`, hint: 'do { mark = input.nextInt(); } while (mark is bad);', explain: 'The loop repeats while the mark is below 0 or above 100, then the good mark is printed after the loop.' }
      ]
    },
    {
      title: 'The for loop',
      titleAr: 'حلقة for',
      minutes: 30,
      body: [
        { type: 'h', en: 'Start, question, change in one line' },
        { type: 'p', en: 'In a while loop the three parts (start, question, change) are in different places. It is easy to forget one. When you know how many times to repeat, the <code>for</code> loop is safer: it puts all three parts together in one line, called the <b>header</b>.',
          ar: 'حلقة for تجمع البداية والشرط والتغيير في سطر واحد.' },
        { type: 'analogy', title: 'A recipe card', en: 'A recipe card says at the top: "Start at egg 1, stop after egg 3, add one egg each time." All the rules are in one line at the top, then the steps below. The for header is the top line of the card.',
          ar: 'رأس for مثل السطر الأول في بطاقة الوصفة.' },
        { type: 'p', en: 'Here is the same job done twice: first with while, then with for. Both print "Hello" 3 times.' },
        { type: 'code', code: J`
int count = 1;
while (count <= 3) {
    System.out.println("Hello");
    count++;
}` },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int count = 1; count <= 3; count++) {
            System.out.println("Hello");
        }
    }
}`, out: "Hello\nHello\nHello" },
        { type: 'lines', title: 'Read the header like a programmer', rows: [
          ['for (', 'Start of the loop header.'],
          ['int count = 1;', '<b>Start</b>: runs only once, at the very beginning.'],
          ['count <= 3;', '<b>Question</b>: asked before every round.'],
          ['count++', '<b>Change</b>: runs at the end of every round.'],
          [') {  ...  }', 'The body is between the braces. Note: two semicolons in the header, none at the end.']
        ], ar: 'في الرأس فاصلتان منقوطتان فقط، وليس بعد القوس الأخير.' },
        { type: 'table', head: ['Step', 'What Java does'], rows: [
          ['1', 'Start part runs <b>once</b>'],
          ['2', 'Ask the question. If false, the loop ends.'],
          ['3', 'Run the body'],
          ['4', 'Run the change part, then go back to step 2']
        ] },
        { type: 'check', q: 'How many times does the start part <code>int count = 1</code> run?', options: ['Every round', 'Once', 'Never', 'Three times'], answer: 1,
          explain: 'The start part runs only once, before the first question.', hint: 'Look at the table above.' },
        { type: 'h', en: 'Using the counter' },
        { type: 'p', en: 'The counter variable (often called <code>i</code>) is a normal variable. Use it inside the body.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i + " squared is " + i * i);
        }
    }
}`, out: "1 squared is 1\n2 squared is 4\n3 squared is 9\n4 squared is 16\n5 squared is 25" },
        { type: 'table', head: ['Round', 'i', 'i &lt;= 5 ?', 'Printed'], rows: [
          ['1', '1', 'true', '1 squared is 1'],
          ['2', '2', 'true', '2 squared is 4'],
          ['3', '3', 'true', '3 squared is 9'],
          ['4', '4', 'true', '4 squared is 16'],
          ['5', '5', 'true', '5 squared is 25'],
          ['', '6', 'false', '(stop)']
        ] },
        { type: 'h', en: 'Counting down and jumping' },
        { type: 'p', en: 'Change the start, the question and the change to go down or to jump. The pattern is the same.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 10; i >= 0; i -= 5) {
            System.out.println(i);
        }
    }
}`, out: "10\n5\n0" },
        { type: 'analogy', title: 'A bus line', en: 'A bus stops at stop 1, stop 2, stop 3... The driver knows the first stop, the last stop and how to move to the next one. For "every second stop" he changes only the jump: <code>i += 2</code>.',
          ar: 'مثل خط الحافلة: أول محطة، آخر محطة، والقفزة بين المحطات.' },
        { type: 'check', q: 'What does <code>for (int i = 2; i &lt;= 10; i += 4)</code> print for i?', options: ['2 6 10', '2 4 6 8 10', '2 6', '6 10'], answer: 0,
          explain: 'i is 2, then 6, then 10. The next value 14 is bigger than 10.', hint: 'Add 4 each time: 2, 6, ...' },
        { type: 'note', kind: 'tip', en: 'A variable declared in the for header (like <code>int i</code>) lives only inside the loop. After the closing brace it does not exist.',
          ar: 'المتغير المعرّف في رأس for لا يُرى بعد الحلقة.' },
        { type: 'h', en: 'Repeating a known number of times with input' },
        { type: 'p', en: 'The user types how many numbers will follow. Then a for loop reads exactly that many.' },
        { type: 'code', run: true, stdin: "3\n5 10 20", code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        for (int i = 1; i <= n; i++) {
            int x = input.nextInt();
            System.out.println("Double: " + x * 2);
        }
    }
}`, out: "Double: 10\nDouble: 20\nDouble: 40" },
        { type: 'steps', title: 'Worked example: price of dates', problem: 'Dates cost 30 riyals per kilogram. Print the price of 1 to 5 kg.',
          steps: [
            { en: 'We know the count (5 rows), so use for. The counter is the kilograms.', code: 'for (int kg = 1; kg <= 5; kg++) {' },
            { en: 'Inside the body, compute and print the price.', code: '    System.out.println(kg + " kg = " + kg * 30 + " riyals");' },
            { en: 'Close the brace. There is no counter update line: it is in the header.', code: '}' },
            { en: 'Trace: kg = 1 prints 30, kg = 2 prints 60, ..., kg = 5 prints 150. Then kg = 6 stops the loop.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        for (int kg = 1; kg <= 5; kg++) {
            System.out.println(kg + " kg = " + kg * 30 + " riyals");
        }
    }
}`, out: "1 kg = 30 riyals\n2 kg = 60 riyals\n3 kg = 90 riyals\n4 kg = 120 riyals\n5 kg = 150 riyals", ar: 'نعرف عدد التكرارات فنستخدم for.' }
      ],
      mistakes: [
        { title: 'A semicolon after the header', en: 'The semicolon is the whole body. The loop runs silently and then your block runs only once.', code: J`
for (int i = 1; i <= 3; i++);
{
    System.out.println("Hi");   // prints only once
}` },
        { title: 'Commas instead of semicolons', en: 'The header parts are separated by <b>semicolons</b>. Commas give a compile error.', code: J`
for (int i = 1, i <= 3, i++) { }   // error` },
        { title: 'Using the counter after the loop', en: '<code>i</code> was declared inside the header, so it does not exist after the loop.', code: J`
for (int i = 1; i <= 3; i++) { }
System.out.println(i);     // error: cannot find symbol` },
        { title: 'Wrong direction', en: 'Counting up with <code>i--</code> never reaches the end, so the loop is infinite.', code: J`
for (int i = 1; i <= 5; i--) {
    System.out.println(i);
}` }
      ],
      remember: [
        'for header: <code>for (start; question; change)</code>.',
        'The start runs once; the question runs before every round; the change runs after every round.',
        'Use <code>for</code> when you know how many times to repeat.',
        'Semicolons separate the three parts. Never put one after the closing bracket.',
        'The counter declared in the header is gone after the loop.'
      ],
      rememberAr: 'for: بداية؛ شرط؛ تغيير. نستخدمها عندما نعرف عدد التكرارات. لا تضع{{g:|ي}} فاصلة منقوطة بعد القوس.',
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
for (int i = 1; i <= 4; i++) {
    System.out.print(i + " ");
}`, answer: '1 2 3 4', explain: 'i is 1, 2, 3, 4. When i is 5 the question is false.' },
        { t: 'mcq', q: 'How many times does "Hi" print?', code: J`
for (int i = 0; i < 5; i++) {
    System.out.println("Hi");
}`, options: ['4', '5', '6', 'Forever'], answer: 1, explain: 'i is 0, 1, 2, 3, 4: five values.' },
        { t: 'output', q: 'What is the output?', code: J`
for (int i = 10; i > 0; i -= 4) {
    System.out.print(i + " ");
}`, answer: '10 6 2', explain: 'i is 10, 6, 2, then -2. -2 &gt; 0 is false.' },
        { t: 'fill', q: 'Complete the loop so it prints 1 to 5.', code: J`
for (int i = 1; i ___ 5; ___) {
    System.out.println(i);
}`, answers: ['<=', 'i++'], explain: 'The question uses <code>&lt;=</code> so 5 is included, and <code>i++</code> adds 1 each round.' },
        { t: 'mcq', q: 'What is the value of <code>i</code> after this code?', code: J`
int i;
for (i = 0; i < 5; i++) {
}`, options: ['4', '5', '6', '0'], answer: 1, explain: 'The loop stops when i &lt; 5 first becomes false, which is when i is 5.' },
        { t: 'order', q: 'Order the lines to print "Hello" 3 times with a for loop.', lines: [
          'for (int i = 1; i <= 3; i++) {',
          '    System.out.println("Hello");',
          '}'
        ], explain: 'The header comes first, then the body, then the closing brace.' },
        { t: 'code', q: 'Read an integer <code>n</code> and print the first <code>n</code> lines of the 5 times table, in this form (for n = 3):<br><code>5 x 1 = 5</code><br><code>5 x 2 = 10</code><br><code>5 x 3 = 15</code><br>Do not print any prompt.',
          qAr: 'اطبع أول n سطر من جدول ضرب 5.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '3', expected: "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15" }, { stdin: '1', expected: '5 x 1 = 5' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        for (int i = 1; i <= n; i++) {
            System.out.println("5 x " + i + " = " + 5 * i);
        }
    }
}`, hint: 'Loop i from 1 to n and print <code>"5 x " + i + " = " + 5 * i</code>.', explain: 'The counter i is both the second factor and the row number.' }
      ]
    },
    {
      title: 'Accumulators: sum, average, maximum and minimum',
      titleAr: 'المجمّعات: المجموع والمتوسط والأكبر والأصغر',
      minutes: 30,
      body: [
        { type: 'h', en: 'A variable that collects a result' },
        { type: 'p', en: 'Loops are most useful when they build one answer from many values: the total of a bill, the average of marks, the highest temperature. The variable that collects the answer is called an <b>accumulator</b>.',
          ar: 'المجمّع متغير يجمع النتيجة عبر التكرارات.' },
        { type: 'analogy', title: 'A piggy bank', en: 'You put coins in a piggy bank one by one. The money inside keeps growing. At the start it is empty (0 riyals). Your <code>sum</code> variable is the piggy bank: it starts at 0 and you add to it in each round.',
          ar: 'متغير المجموع مثل الحصالة: يبدأ فارغاً ثم نضيف إليه.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 4; i++) {
            sum += i;
        }
        System.out.println(sum);
    }
}`, out: '10' },
        { type: 'table', head: ['Round', 'i', 'sum before', 'sum after (sum += i)'], rows: [
          ['1', '1', '0', '1'],
          ['2', '2', '1', '3'],
          ['3', '3', '3', '6'],
          ['4', '4', '6', '10']
        ] },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int sum = 0;', 'The empty piggy bank. It must be declared <b>before</b> the loop and start at 0.'],
          ['for (int i = 1; i <= 4; i++)', 'Four rounds: 1, 2, 3, 4.'],
          ['sum += i;', 'Add the current number to the bank. Same as <code>sum = sum + i</code>.'],
          ['System.out.println(sum);', 'Print the final answer <b>after</b> the loop.']
        ], ar: 'المجموع يبدأ بصفر قبل الحلقة، ونطبع النتيجة بعد الحلقة.' },
        { type: 'check', q: 'Where must <code>int sum = 0;</code> be written?', options: ['Inside the loop body', 'Before the loop', 'After the loop', 'Inside the for header only'], answer: 1,
          explain: 'If it is inside the body, sum is set to 0 again in every round and the answer is lost.', hint: 'Think of the piggy bank: do you empty it every day?' },
        { type: 'h', en: 'Total and average of marks' },
        { type: 'p', en: 'The average is the total divided by the number of values. Calculate it <b>after</b> the loop. Cast to <code>double</code> so the division keeps decimals.' },
        { type: 'code', run: true, stdin: "4\n70 85 90 75", code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += input.nextInt();
        }
        System.out.println("Total: " + sum);
        System.out.println("Average: " + (double) sum / n);
    }
}`, out: "Total: 320\nAverage: 80.0" },
        { type: 'p', en: 'Different accumulators start at different values: a sum starts at <b>0</b>, a counter starts at <b>0</b>, and a product (multiplying) starts at <b>1</b>, because multiplying by 0 would always give 0.',
          ar: 'المجموع والعداد يبدآن بصفر، وحاصل الضرب يبدأ بواحد.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        long fact = 1;
        for (int i = 1; i <= 15; i++) {
            fact *= i;
        }
        System.out.println("15! = " + fact);
    }
}`, out: "15! = 1307674368000" },
        { type: 'note', kind: 'warn', en: 'An <code>int</code> can hold values up to about 2 billion. Products grow very fast (13! is more than 6 billion), so use <code>long</code> for big products. Otherwise the answer is silently wrong (overflow).',
          ar: 'استخدم long للأعداد الكبيرة حتى لا يحدث تجاوز.' },
        { type: 'h', en: 'Finding the highest and lowest' },
        { type: 'analogy', title: 'The champion\'s chair', en: 'In a competition, the chair holds the best score so far. A new player sits down only if his score is higher. After the last player, the chair holds the winner. Your <code>max</code> variable is that chair. The first player always sits down first.',
          ar: 'المتغير max مثل كرسي البطل: يتغير فقط عندما تظهر قيمة أكبر.' },
        { type: 'code', run: true, stdin: "5\n31 38 27 44 35", code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int first = input.nextInt();
        int max = first;
        int min = first;
        for (int i = 2; i <= n; i++) {
            int t = input.nextInt();
            if (t > max) {
                max = t;
            }
            if (t < min) {
                min = t;
            }
        }
        System.out.println("Max: " + max);
        System.out.println("Min: " + min);
    }
}`, out: "Max: 44\nMin: 27" },
        { type: 'table', head: ['t read', 'max after', 'min after'], rows: [
          ['31 (first)', '31', '31'],
          ['38', '38', '31'],
          ['27', '38', '27'],
          ['44', '44', '27'],
          ['35', '44', '27']
        ] },
        { type: 'note', kind: 'exam', en: 'Do not start <code>max</code> at 0. If all values are negative (winter temperatures below zero), the answer would wrongly be 0. Start with the <b>first value</b>. Also note the loop starts at 2 because the first value was already read.',
          ar: 'ابدأ{{g:|ي}} بأول قيمة مقروءة وليس بصفر.' },
        { type: 'check', q: 'The values are -5, -9, -2. If <code>max</code> starts at 0, what is the final max?', options: ['-2', '-5', '0', '-9'], answer: 2,
          explain: 'No value is bigger than 0, so max stays 0, which is not even in the data. That is why we start with the first value.', hint: 'Is any of the values bigger than 0?' },
        { type: 'steps', title: 'Worked example: highest mark', problem: 'Read n marks and print the highest.',
          steps: [
            { en: 'Read how many marks there are, then read the first mark and make it the highest so far.', code: 'int n = input.nextInt();\nint max = input.nextInt();' },
            { en: 'We have read one mark already, so loop from 2 to n.', code: 'for (int i = 2; i <= n; i++) {' },
            { en: 'Read the next mark. If it beats the champion, replace max.', code: '    int mark = input.nextInt();\n    if (mark > max) {\n        max = mark;\n    }\n}' },
            { en: 'Print after the loop. With 4 marks 67 88 54 91: max is 67, then 88, stays 88, then 91.', code: 'System.out.println("Highest: " + max);' }
          ],
          stdin: "4\n67 88 54 91",
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int max = input.nextInt();
        for (int i = 2; i <= n; i++) {
            int mark = input.nextInt();
            if (mark > max) {
                max = mark;
            }
        }
        System.out.println("Highest: " + max);
    }
}`, out: 'Highest: 91', ar: 'ابدأ{{g:|ي}} بأول قيمة، ثم استبدلها كلما ظهرت قيمة أكبر.' }
      ],
      mistakes: [
        { title: 'Putting the accumulator inside the loop', en: 'The sum is reset to 0 in every round. At the end it holds only the last value.', code: J`
for (int i = 1; i <= 4; i++) {
    int sum = 0;        // wrong place
    sum += i;
}` },
        { title: 'Forgetting to give the sum a start value', en: 'Java says: variable sum might not have been initialized.', code: J`
int sum;
sum += 5;` },
        { title: 'Integer division for the average', en: 'Both sides are int, so decimals are cut. 7 / 2 gives 3.', code: J`
double avg = sum / n;           // wrong
double avg2 = (double) sum / n; // right` },
        { title: 'Starting max at 0', en: 'It fails when all values are negative.', code: J`
int max = 0;     // wrong for -5, -9, -2` }
      ],
      remember: [
        'An <b>accumulator</b> collects a result: sum, count, product, max, min.',
        'Declare and start it <b>before</b> the loop. Sum and count start at 0; a product starts at 1.',
        'Compute the average <b>after</b> the loop, with <code>(double) sum / n</code>.',
        'For max and min, start with the <b>first value</b>.',
        'Use <code>long</code> when a product can be very big.'
      ],
      rememberAr: 'المجمّع يُعرَّف قبل الحلقة. المجموع يبدأ بصفر والضرب بواحد. والمتوسط يُحسب بعد الحلقة. وللأكبر والأصغر نبدأ بأول قيمة.',
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
int s = 0;
for (int i = 1; i <= 4; i++) {
    s += i * i;
}
System.out.println(s);`, answer: '30', explain: '1 + 4 + 9 + 16 = 30.' },
        { t: 'output', q: 'What is the output?', code: J`
int p = 1;
for (int i = 1; i <= 4; i++) {
    p *= i;
}
System.out.println(p);`, answer: '24', explain: 'p is 1, 2, 6, 24. This is 4 factorial.' },
        { t: 'mcq', q: 'Where should <code>int total = 0;</code> be placed?', options: ['Before the loop', 'Inside the loop', 'After the loop', 'It does not matter'], answer: 0,
          explain: 'It must be set once before the loop. Inside the loop it would reset every round.' },
        { t: 'fill', q: 'Complete the code that reads <code>n</code> integers and computes their average as a double.', code: J`
int sum = 0;
for (int i = ___; i <= n; i++) {
    sum ___ input.nextInt();
}
double avg = (___) sum / n;`, answers: ['1', '+=', 'double'], explain: 'Count from 1 to n (n rounds), add each value, and cast before dividing to avoid integer division.' },
        { t: 'mcq', q: 'The temperatures may be negative. What is the best starting value for <code>max</code>?', options: ['0', 'The first temperature read', '100', '-1'], answer: 1,
          explain: 'The first real value works for any data. 0 or -1 could be bigger than every real value.' },
        { t: 'order', q: 'Order the lines to print the sum of 1 to 5.', lines: [
          'int sum = 0;',
          'for (int i = 1; i <= 5; i++) {',
          '    sum += i;',
          '}',
          'System.out.println(sum);'
        ], explain: 'Start the sum, loop and add, then print after the loop.' },
        { t: 'code', q: 'Read an integer <code>n</code>, then <code>n</code> integers. Print the highest, like <code>Highest: 9</code>. Values may be negative. Do not print any prompt.',
          qAr: 'اقرأ n ثم n عدداً واطبع أكبرها.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: "3\n5 9 2", expected: 'Highest: 9' }, { stdin: "3\n-5 -9 -2", expected: 'Highest: -2' }, { stdin: "1\n7", expected: 'Highest: 7' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int max = input.nextInt();
        for (int i = 2; i <= n; i++) {
            int x = input.nextInt();
            if (x > max) {
                max = x;
            }
        }
        System.out.println("Highest: " + max);
    }
}`, hint: 'Read the first number into <code>max</code>, then loop from 2 to n.', explain: 'Starting from the first value works even when every value is negative.' },
        { t: 'code', q: 'Read an integer <code>n</code>, then <code>n</code> prices (doubles). Print the total and the average with 2 decimals, exactly as:<br><code>Total: 35.25</code><br><code>Average: 11.75</code><br>Do not print any prompt.',
          qAr: 'اقرأ n ثم n من الأسعار واطبع المجموع والمتوسط بمنزلتين عشريتين.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: "3\n10.5 20 4.75", expected: "Total: 35.25\nAverage: 11.75" }, { stdin: "4\n2.5 2.5 2.5 2.5", expected: "Total: 10.00\nAverage: 2.50" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        double total = 0;
        for (int i = 1; i <= n; i++) {
            total += input.nextDouble();
        }
        System.out.printf("Total: %.2f%n", total);
        System.out.printf("Average: %.2f%n", total / n);
    }
}`, hint: 'Use a double accumulator that starts at 0 and <code>printf("%.2f")</code>.', explain: 'The loop runs n times; the sum is accumulated, then divided by n after the loop.' }
      ]
    },
    {
      title: 'Nested loops: patterns and tables',
      titleAr: 'الحلقات المتداخلة: الأشكال والجداول',
      minutes: 30,
      body: [
        { type: 'h', en: 'A loop inside a loop' },
        { type: 'p', en: 'Some jobs have two directions: rows and columns, days and lectures, shelves and books. For these we put one loop <b>inside</b> another. This is called a <b>nested loop</b>.',
          ar: 'الحلقة المتداخلة هي حلقة داخل حلقة أخرى.' },
        { type: 'analogy', title: 'A clock', en: 'The minute hand goes around the whole clock face for <b>every single step</b> of the hour hand. The hour hand is the outer loop (slow). The minute hand is the inner loop (fast): it finishes a full round before the hour hand moves once.',
          ar: 'عقرب الدقائق يكمل دورة كاملة مقابل كل خطوة لعقرب الساعات.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int row = 1; row <= 2; row++) {
            for (int col = 1; col <= 3; col++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`, out: "***\n***" },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['for (int row = 1; row <= 2; row++)', 'Outer loop: 2 rows.'],
          ['for (int col = 1; col <= 3; col++)', 'Inner loop: for <b>each</b> row, do 3 columns.'],
          ['System.out.print("*");', 'Print one star, stay on the same line.'],
          ['System.out.println();', 'After the inner loop ends, go to a new line. It is inside the outer loop but outside the inner loop.']
        ], ar: 'الخارجية للصفوف والداخلية للأعمدة. println() بعد الداخلية لسطر جديد.' },
        { type: 'table', head: ['row', 'col', 'Printed'], rows: [
          ['1', '1', '*'],
          ['1', '2', '*'],
          ['1', '3', '* then new line'],
          ['2', '1', '*'],
          ['2', '2', '*'],
          ['2', '3', '* then new line']
        ] },
        { type: 'p', en: 'The inner body runs 2 x 3 = <b>6</b> times. In general: outer times inner.' },
        { type: 'check', q: 'An outer loop runs 4 times and the inner loop runs 5 times for each. How many times does the inner body run in total?', options: ['9', '20', '4', '5'], answer: 1,
          explain: '4 x 5 = 20.', hint: 'Multiply.' },
        { type: 'h', en: 'Triangles' },
        { type: 'p', en: 'If the inner limit uses the outer variable, every row has a different length. Here row 1 has 1 star, row 2 has 2 stars, and so on.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int row = 1; row <= 4; row++) {
            for (int col = 1; col <= row; col++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`, out: "*\n**\n***\n****" },
        { type: 'table', head: ['row', 'inner runs (col from 1 to row)', 'Line printed'], rows: [
          ['1', '1 time', '*'],
          ['2', '2 times', '**'],
          ['3', '3 times', '***'],
          ['4', '4 times', '****']
        ] },
        { type: 'check', q: 'What changes if we print <code>col</code> instead of <code>"*"</code> in this triangle?', options: ['Row 3 shows 123', 'Row 3 shows 333', 'Row 3 shows ***', 'An error'], answer: 0,
          explain: 'In row 3, col goes 1, 2, 3, so the line is 123.', hint: 'col counts 1 up to row.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int row = 1; row <= 4; row++) {
            for (int col = 1; col <= row; col++) {
                System.out.print(col);
            }
            System.out.println();
        }
    }
}`, out: "1\n12\n123\n1234" },
        { type: 'p', en: 'A right-aligned triangle needs two inner loops in each row: first the spaces, then the stars. With n = 4, row 1 has 3 spaces and 1 star.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 4;
        for (int row = 1; row <= n; row++) {
            for (int s = 1; s <= n - row; s++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= row; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`, out: "   *\n  **\n ***\n****" },
        { type: 'h', en: 'Tables' },
        { type: 'p', en: 'A multiplication table is a grid: rows i, columns j, value i * j. <code>%4d</code> in printf prints a number in a field 4 characters wide so columns line up.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 4; j++) {
                System.out.printf("%4d", i * j);
            }
            System.out.println();
        }
    }
}`, out: "   1   2   3   4\n   2   4   6   8\n   3   6   9  12" },
        { type: 'note', kind: 'exam', en: 'Counting trap: inner loop <code>1..i</code> inside outer <code>1..n</code> runs 1 + 2 + ... + n times. For n = 5 that is 15, not 25.',
          ar: 'عدد التكرارات: 1+2+...+n وليس n×n عندما يعتمد حد الداخلية على الخارجية.' },
        { type: 'steps', title: 'Worked example: a timetable', problem: 'Print the lectures for 2 days with 3 lectures each, like "Day 1 Lecture 1".',
          steps: [
            { en: 'Days are the slow loop (outer).', code: 'for (int day = 1; day <= 2; day++) {' },
            { en: 'For every day we list 3 lectures: that is the inner loop.', code: '    for (int lec = 1; lec <= 3; lec++) {' },
            { en: 'The body prints one line for each (day, lecture) pair.', code: '        System.out.println("Day " + day + " Lecture " + lec);\n    }\n}' },
            { en: 'Trace: day 1 prints lectures 1, 2, 3. Then day 2 prints lectures 1, 2, 3. Total 6 lines.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        for (int day = 1; day <= 2; day++) {
            for (int lec = 1; lec <= 3; lec++) {
                System.out.println("Day " + day + " Lecture " + lec);
            }
        }
    }
}`, out: "Day 1 Lecture 1\nDay 1 Lecture 2\nDay 1 Lecture 3\nDay 2 Lecture 1\nDay 2 Lecture 2\nDay 2 Lecture 3", ar: 'لكل يوم نمر على كل المحاضرات.' }
      ],
      mistakes: [
        { title: 'Forgetting println() after the inner loop', en: 'All stars appear on one line.', code: J`
for (int row = 1; row <= 3; row++) {
    for (int col = 1; col <= 3; col++) {
        System.out.print("*");
    }
}` },
        { title: 'Putting println() inside the inner loop', en: 'Every star goes on its own line.', code: J`
for (int col = 1; col <= 3; col++) {
    System.out.print("*");
    System.out.println();
}` },
        { title: 'Using the same variable name', en: 'Both loops use <code>i</code>: compile error ("already defined").', code: J`
for (int i = 1; i <= 3; i++) {
    for (int i = 1; i <= 3; i++) { }
}` },
        { title: 'Wrong inner limit', en: 'For a triangle the inner limit must be <code>row</code>, not <code>n</code>. Otherwise you get a rectangle.', code: J`
for (int col = 1; col <= n; col++)   // rectangle, not triangle` }
      ],
      remember: [
        'For every round of the <b>outer</b> loop, the <b>inner</b> loop runs completely.',
        'Outer = rows, inner = columns.',
        '<code>println()</code> goes after the inner loop, inside the outer loop.',
        'Use different names for the two counters.',
        'A triangle: the inner limit uses the outer counter.'
      ],
      rememberAr: 'الحلقة الداخلية تكتمل في كل دورة للخارجية. استخدم{{g:|ي}} أسماء مختلفة للعدادين، وضع{{g:|ي}} println() بعد الداخلية.',
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
for (int i = 1; i <= 2; i++) {
    for (int j = 1; j <= 2; j++) {
        System.out.print(i * j + " ");
    }
    System.out.println();
}`, answer: "1 2\n2 4", explain: 'Row 1: 1*1 and 1*2. Row 2: 2*1 and 2*2.' },
        { t: 'mcq', q: 'How many times is <code>print</code> executed?', code: J`
for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 3; j++) {
        System.out.print("#");
    }
}`, options: ['7', '12', '16', '9'], answer: 1, explain: '4 x 3 = 12.' },
        { t: 'output', q: 'What is the output?', code: J`
for (int i = 4; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
        System.out.print("#");
    }
    System.out.println();
}`, answer: "####\n###\n##\n#", explain: 'Row lengths follow i: 4, 3, 2, 1.' },
        { t: 'fill', q: 'Complete the code to print a triangle where row <code>r</code> has <code>r</code> stars.', code: J`
for (int row = 1; row <= n; row++) {
    for (int col = 1; col <= ___; col++) {
        System.out.print("*");
    }
    System.out.___();
}`, answers: ['row', 'println'], explain: 'The inner limit is the row number; <code>println()</code> starts a new line after each row.' },
        { t: 'mcq', q: 'For <code>n = 5</code>, how many stars does this print?', code: J`
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
}`, options: ['5', '10', '15', '25'], answer: 2, explain: '1 + 2 + 3 + 4 + 5 = 15.' },
        { t: 'order', q: 'Order the lines to print a rectangle of # with 2 rows and 4 columns.', lines: [
          'for (int row = 1; row <= 2; row++) {',
          '    for (int col = 1; col <= 4; col++) {',
          '        System.out.print("#");',
          '    }',
          '    System.out.println();',
          '}'
        ], explain: 'Outer loop, inner loop, print one #, close the inner loop, then println, then close the outer loop.' },
        { t: 'code', q: 'Read two integers <code>r</code> and <code>c</code>. Print a rectangle of <code>*</code> with <code>r</code> rows and <code>c</code> columns. Do not print any prompt.<br>Example: <code>2 3</code> prints <code>***</code> twice.',
          qAr: 'اقرأ r و c واطبع مستطيلاً من النجوم.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int r = input.nextInt();
        int c = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '2 3', expected: "***\n***" }, { stdin: '1 4', expected: '****' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int r = input.nextInt();
        int c = input.nextInt();
        for (int i = 1; i <= r; i++) {
            for (int j = 1; j <= c; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`, hint: 'Outer loop runs r times, inner loop runs c times, then <code>println()</code>.', explain: 'Each outer round prints one row of c stars.' },
        { t: 'code', q: 'Read an integer <code>n</code> (1 to 9). Print <code>n</code> lines: line <code>i</code> has the digit <code>i</code> repeated <code>i</code> times. Do not print any prompt.<br>Example for <code>3</code>: <code>1</code>, <code>22</code>, <code>333</code>.',
          qAr: 'السطر i يحتوي الرقم i مكرراً i مرة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '3', expected: "1\n22\n333" }, { stdin: '5', expected: "1\n22\n333\n4444\n55555" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(i);
            }
            System.out.println();
        }
    }
}`, hint: 'The outer loop chooses the digit; the inner loop prints it that many times.', explain: 'In row i the inner loop runs i times and prints i each time.' }
      ]
    },
    {
      title: 'break and continue',
      titleAr: 'break و continue',
      minutes: 30,
      body: [
        { type: 'h', en: 'break: leave the loop now' },
        { type: 'p', en: 'Sometimes you find what you were looking for and there is no reason to continue. <code>break</code> ends the loop immediately. Java jumps to the first line after the loop.',
          ar: 'break تُنهي الحلقة فوراً.' },
        { type: 'analogy', title: 'Looking for your keys', en: 'You search the drawers one by one. When you find your keys in the third drawer, do you open the fourth and fifth? No. You stop searching. That is <code>break</code>.',
          ar: 'عندما تجد{{g:|ين}} مفاتيحك تتوقف{{g:|ين}} عن البحث.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int n = 50; n <= 100; n++) {
            if (n % 7 == 0) {
                System.out.println("First multiple of 7: " + n);
                break;
            }
        }
        System.out.println("Done");
    }
}`, out: "First multiple of 7: 56\nDone" },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['for (int n = 50; n <= 100; n++)', 'Look at the numbers from 50 to 100.'],
          ['if (n % 7 == 0)', 'Is n a multiple of 7? (remainder 0). This is true for 56 (7 x 8).'],
          ['break;', 'Leave the loop. 57, 58, ... are never checked.'],
          ['System.out.println("Done");', 'The program continues here, after the loop.']
        ], ar: 'عند 56 يتحقق الشرط فنخرج من الحلقة.' },
        { type: 'check', q: 'Which statement is true about <code>break</code>?', options: ['It skips one round only', 'It ends the loop completely', 'It ends the whole program', 'It restarts the loop'], answer: 1,
          explain: 'break leaves the loop. The program continues with the statement after the loop.', hint: 'Think about the keys.' },
        { type: 'h', en: 'continue: skip this round only' },
        { type: 'p', en: '<code>continue</code> skips the rest of the <b>current</b> round and goes to the next round. The loop does not end.',
          ar: 'continue تتخطى بقية الدورة الحالية فقط.' },
        { type: 'analogy', title: 'Skipping a song', en: 'You play a playlist. When a song is bad you press "next". You do not turn off the music; you only skip that one song.',
          ar: 'مثل تخطي أغنية في قائمة التشغيل.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 6; i++) {
            if (i % 3 == 0) {
                continue;
            }
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`, out: "1 2 4 5" },
        { type: 'table', head: ['i', 'i % 3 == 0 ?', 'What happens'], rows: [
          ['1', 'false', 'printed'],
          ['2', 'false', 'printed'],
          ['3', 'true', 'continue: skip the print'],
          ['4', 'false', 'printed'],
          ['5', 'false', 'printed'],
          ['6', 'true', 'continue: skip the print']
        ] },
        { type: 'check', q: 'What does this print?', code: J`
for (int i = 1; i <= 4; i++) {
    if (i == 2) {
        continue;
    }
    System.out.print(i);
}`, options: ['1234', '134', '1', '14'], answer: 1,
          explain: 'Only the round with i = 2 is skipped. The output is 134.', hint: 'Which round is skipped?' },
        { type: 'note', kind: 'warn', en: 'In a <b>for</b> loop, <code>continue</code> still runs the change part (<code>i++</code>). In a <b>while</b> loop, <code>continue</code> jumps straight to the question, so if the change is below it, the change is skipped and the loop may never end.',
          ar: 'في while قد تتجاوز continue سطر التغيير فتصبح الحلقة لانهائية.' },
        { type: 'code', code: J`
int i = 0;
while (i < 10) {
    if (i == 5) {
        continue;    // BUG: i++ is skipped, i stays 5 forever
    }
    i++;
}` },
        { type: 'h', en: 'A classic use: is it prime?' },
        { type: 'p', en: 'A <b>prime</b> number has no divisor other than 1 and itself. We test divisors from 2 upwards. As soon as one divides the number, we know the answer and use <code>break</code>. We only need to test while <code>d * d &lt;= n</code>, because a divisor bigger than the square root has a partner smaller than it.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 91;
        boolean prime = true;
        for (int d = 2; d * d <= n; d++) {
            if (n % d == 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            System.out.println(n + " is prime");
        } else {
            System.out.println(n + " is not prime");
        }
    }
}`, out: "91 is not prime" },
        { type: 'table', head: ['d', 'd * d &lt;= 91 ?', '91 % d', 'Action'], rows: [
          ['2', 'true (4)', '1', 'continue looping'],
          ['3', 'true (9)', '1', 'continue looping'],
          ['4', 'true (16)', '3', 'continue looping'],
          ['5', 'true (25)', '1', 'continue looping'],
          ['6', 'true (36)', '1', 'continue looping'],
          ['7', 'true (49)', '0', 'prime = false, break']
        ] },
        { type: 'steps', title: 'Worked example: first failing mark', problem: 'Read marks until 0. Print the position of the first mark below 50, or "All passed" if there is none.',
          steps: [
            { en: 'Keep the position number and a flag that says whether we found a failing mark.', code: 'int position = 0;\nint failedAt = 0;' },
            { en: 'Read marks in a loop. Count the position.', code: 'int mark = input.nextInt();\nwhile (mark != 0) {\n    position++;' },
            { en: 'If the mark is below 50, remember the position and leave the loop with break.', code: '    if (mark < 50) {\n        failedAt = position;\n        break;\n    }\n    mark = input.nextInt();\n}' },
            { en: 'After the loop decide what to print. With input 80 65 40 90 0: the third mark is 40, so failedAt is 3.', code: 'if (failedAt > 0) { ... } else { ... }' }
          ],
          stdin: '80 65 40 90 0',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int position = 0;
        int failedAt = 0;
        int mark = input.nextInt();
        while (mark != 0) {
            position++;
            if (mark < 50) {
                failedAt = position;
                break;
            }
            mark = input.nextInt();
        }
        if (failedAt > 0) {
            System.out.println("First fail at position " + failedAt);
        } else {
            System.out.println("All passed");
        }
    }
}`, out: 'First fail at position 3', ar: 'break توقف الحلقة بمجرد العثور على الدرجة الراسبة.' }
      ],
      mistakes: [
        { title: 'continue before the change in a while loop', en: 'The change is skipped and the loop never ends.', code: J`
while (i < 10) {
    if (i == 5) continue;
    i++;
}` },
        { title: 'Thinking break ends the program', en: '<code>break</code> only leaves the <b>innermost</b> loop. The code after the loop still runs.' },
        { title: 'Using break when you need continue', en: 'You wanted to skip one value but the whole loop stops.', code: J`
for (int i = 1; i <= 6; i++) {
    if (i == 3) break;     // stops at 3: use continue to skip only 3
    System.out.print(i);
}` },
        { title: 'Printing before the skip', en: 'The statement above <code>continue</code> still runs for the skipped value.', code: J`
System.out.print(i);       // runs for every i
if (i % 2 == 0) continue;` }
      ],
      remember: [
        '<code>break</code> leaves the (innermost) loop completely.',
        '<code>continue</code> skips the rest of this round only.',
        'In <code>for</code>, continue still runs the change part; in <code>while</code>, be careful.',
        'Use break when you have found the answer.',
        'Put code you want to skip <b>after</b> the continue.'
      ],
      rememberAr: 'break تُنهي الحلقة، وcontinue تتخطى الدورة الحالية فقط.',
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    System.out.print(i + " ");
}`, answer: '1 2', explain: 'When i is 3 the loop ends. 3 is not printed.' },
        { t: 'output', q: 'What is the output?', code: J`
for (int i = 1; i <= 6; i++) {
    if (i % 2 == 0) {
        continue;
    }
    System.out.print(i + " ");
}`, answer: '1 3 5', explain: 'continue skips the print for even numbers.' },
        { t: 'output', q: 'What is the output?', code: J`
int total = 0;
for (int i = 1; i <= 10; i++) {
    if (i == 6) {
        break;
    }
    total += i;
}
System.out.println(total);`, answer: '15', explain: '1 + 2 + 3 + 4 + 5 = 15. The loop stops at 6 before adding it.' },
        { t: 'mcq', q: 'Which keyword skips only the current round?', options: ['<code>break</code>', '<code>continue</code>', '<code>stop</code>', '<code>return</code>'], answer: 1,
          explain: '<code>continue</code> goes on to the next round.' },
        { t: 'fill', q: 'Print the numbers 1 to 10 but skip 5.', code: J`
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        ___;
    }
    System.out.println(i);
}`, answers: ['continue'], explain: 'continue skips the println for i = 5 only.' },
        { t: 'order', q: 'Order the lines to find and print the first multiple of 4 above 10.', lines: [
          'for (int n = 11; n <= 100; n++) {',
          '    if (n % 4 == 0) {',
          '        System.out.println(n);',
          '        break;',
          '    }',
          '}'
        ], explain: 'Loop over the numbers, test, print, and break so we stop at the first one (12).' },
        { t: 'code', q: 'Read an integer <code>n</code> (n &gt;= 2) and print <code>Prime</code> if it is prime, or <code>Not prime</code> otherwise. Use a loop with <code>break</code>. Do not print any prompt.',
          qAr: 'اقرأ عدداً واطبع Prime إذا كان أولياً وإلا Not prime.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '13', expected: 'Prime' }, { stdin: '21', expected: 'Not prime' }, { stdin: '2', expected: 'Prime' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        boolean prime = true;
        for (int d = 2; d * d <= n; d++) {
            if (n % d == 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            System.out.println("Prime");
        } else {
            System.out.println("Not prime");
        }
    }
}`, hint: 'Assume it is prime, then look for a divisor d from 2 while <code>d * d &lt;= n</code>.', explain: 'If n has a divisor, one of them is at most the square root of n. break stops at the first divisor.' }
      ]
    },
    {
      title: 'Choosing the right loop and off-by-one errors',
      titleAr: 'اختيار الحلقة المناسبة وخطأ الفرق بواحد',
      minutes: 30,
      body: [
        { type: 'h', en: 'Which loop should I use?' },
        { type: 'p', en: 'You now know three loops. Any loop can do the job of the others, but the right choice makes your program easier to read. Ask yourself one question: <b>do I know how many times to repeat?</b>',
          ar: 'اسأل{{g:|ي}} نفسك: هل أعرف عدد التكرارات؟' },
        { type: 'analogy', title: 'Three tools in a kit', en: 'A screwdriver, a hammer and a saw can all change a piece of wood, but each is best for one job. Loops are the same: pick the tool that fits the job.',
          ar: 'كل أداة مناسبة لعمل معين.' },
        { type: 'table', head: ['Loop', 'Use it when...', 'Example'], rows: [
          ['<code>for</code>', 'you know how many times (counting)', 'print 1 to n; read 30 marks'],
          ['<code>while</code>', 'you repeat while something is true; it may run 0 times', 'read until the sentinel -1; remove digits'],
          ['<code>do-while</code>', 'the body must run at least once', 'menus; input validation']
        ] },
        { type: 'check', q: 'You must ask the user for a PIN at least once and repeat while it is wrong. Which loop fits best?', options: ['for', 'while', 'do-while', 'none'], answer: 2,
          explain: 'You must ask at least once, so do-while is the natural choice.', hint: 'At least once.' },
        { type: 'check', q: 'You want to read exactly 30 marks. Which loop fits best?', options: ['for', 'do-while', 'while with a sentinel', 'none'], answer: 0,
          explain: 'The number of repeats (30) is known, so a counting for loop is clearest.', hint: 'Is the count known?' },
        { type: 'h', en: 'Off-by-one errors' },
        { type: 'p', en: 'The most common loop bug is repeating <b>one time too many</b> or <b>one time too few</b>. It happens when you choose <code>&lt;</code> instead of <code>&lt;=</code>, or start at 0 instead of 1. Programmers call it an <b>off-by-one error</b>.',
          ar: 'خطأ الفرق بواحد: تكرار زائد أو ناقص بسبب &lt; أو &lt;= أو بداية خاطئة.' },
        { type: 'analogy', title: 'Fence posts', en: 'A fence of 10 meters with a post every meter needs <b>11</b> posts, not 10. Counting the gaps and counting the posts give different numbers by one. Loops have the same trap: counting from 0 to 10 gives 11 values.',
          ar: 'سياج بطول 10 أمتار يحتاج 11 عموداً: الفرق بواحد.' },
        { type: 'table', head: ['Loop header', 'First value', 'Last value', 'Number of rounds'], rows: [
          ['<code>for (int i = 0; i &lt; n; i++)</code>', '0', 'n - 1', 'n'],
          ['<code>for (int i = 1; i &lt;= n; i++)</code>', '1', 'n', 'n'],
          ['<code>for (int i = 0; i &lt;= n; i++)</code>', '0', 'n', 'n + 1'],
          ['<code>for (int i = 1; i &lt; n; i++)</code>', '1', 'n - 1', 'n - 1']
        ] },
        { type: 'p', en: 'Now test with real numbers. For n = 3, the first header gives 0, 1, 2 (3 rounds). The third header gives 0, 1, 2, 3 (4 rounds).' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i <= 10; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`, out: "0 2 4 6 8 10" },
        { type: 'table', head: ['Round', 'i', 'i &lt;= 10 ?'], rows: [
          ['1', '0', 'true'],
          ['2', '2', 'true'],
          ['3', '4', 'true'],
          ['4', '6', 'true'],
          ['5', '8', 'true'],
          ['6', '10', 'true'],
          ['', '12', 'false']
        ] },
        { type: 'note', kind: 'exam', en: 'Check the <b>boundaries</b>: the first value, the last value, and how many rounds. Six rounds here: 0, 2, 4, 6, 8, 10. A loop from <code>a</code> to <code>b</code> (step 1) runs <code>b - a + 1</code> times.',
          ar: 'افحص{{g:|ي}} القيمة الأولى والأخيرة وعدد التكرارات.' },
        { type: 'check', q: 'How many times does <code>for (int i = 5; i &lt;= 9; i++)</code> run?', options: ['4', '5', '9', '10'], answer: 1,
          explain: 'The values are 5, 6, 7, 8, 9: five values = 9 - 5 + 1.', hint: 'List the values.' },
        { type: 'steps', title: 'Worked example: fixing an off-by-one bug', problem: 'The loop should print the numbers 1 to 5, but it prints only 1 to 4. Find the bug.',
          steps: [
            { en: 'Here is the buggy loop.', code: 'for (int i = 1; i < 5; i++) {' },
            { en: 'Check the last value: when i is 5, is 5 &lt; 5 true? No. So 5 is never printed.' },
            { en: 'Fix the question so 5 is included: use &lt;=.', code: 'for (int i = 1; i <= 5; i++) {' },
            { en: 'Check again: values 1, 2, 3, 4, 5 = 5 - 1 + 1 = 5 rounds. Correct!' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`, out: '1 2 3 4 5', ar: 'جرّب{{g:|ي}} القيمة الأخيرة بنفسك لتكتشف{{g:|ي}} الخطأ.' }
      ],
      mistakes: [
        { title: 'Using < when you need <=', en: 'The last number is missed.', code: J`
for (int i = 1; i < 10; i++)    // prints 1..9, not 1..10` },
        { title: 'Starting at 0 when you want 1', en: 'You get an extra first value.', code: J`
for (int i = 0; i <= 5; i++)    // 6 rounds, not 5` },
        { title: 'Using for when a sentinel is needed', en: 'If the number of values is not known, a counting loop does not fit. Use while with a sentinel.' },
        { title: 'Not testing the boundaries', en: 'Always try the smallest case (for example n = 1 or n = 0) and write the values on paper.' }
      ],
      remember: [
        '<code>for</code> = known count; <code>while</code> = repeat while true; <code>do-while</code> = at least once.',
        'Off-by-one: one round too many or too few.',
        'From a to b with step 1: <code>b - a + 1</code> rounds.',
        '<code>&lt; n</code> from 0 gives n rounds; <code>&lt;= n</code> from 1 gives n rounds.',
        'Check the first value, the last value and the count.'
      ],
      rememberAr: 'for للعدد المعروف، while للشرط، do-while لمرة على الأقل. وافحص{{g:|ي}} أول قيمة وآخر قيمة وعدد المرات.',
      practice: [
        { t: 'mcq', q: 'How many times does this loop run?', code: J`
for (int i = 0; i < 6; i++) {
    System.out.println(i);
}`, options: ['5', '6', '7', 'Forever'], answer: 1, explain: 'i is 0, 1, 2, 3, 4, 5: six values.' },
        { t: 'mcq', q: 'How many times does this loop run?', code: J`
for (int i = 0; i <= 10; i += 2) {
    System.out.println(i);
}`, options: ['5', '6', '10', '11'], answer: 1, explain: 'i is 0, 2, 4, 6, 8, 10: six values.' },
        { t: 'mcq', q: 'Which loop prints the numbers 1 to 100 exactly once each?', options: ['<code>for (int i = 0; i &lt;= 100; i++)</code>', '<code>for (int i = 1; i &lt; 100; i++)</code>', '<code>for (int i = 1; i &lt;= 100; i++)</code>', '<code>for (int i = 0; i &lt; 100; i++)</code>'], answer: 2,
          explain: 'Start at 1 and include 100 with <code>&lt;=</code>.' },
        { t: 'fill', q: 'Fix the loops: the first must print "Hi" exactly 10 times, and the second must print the numbers 1 to 10.', code: J`
for (int i = 0; i ___ 10; i++) {
    System.out.println("Hi");
}
for (int k = 1; k ___ 10; k++) {
    System.out.println(k);
}`, answers: ['<', '<='], explain: 'From 0 with <code>&lt; 10</code> gives 10 rounds. From 1 with <code>&lt;= 10</code> gives 1..10.' },
        { t: 'mcq', q: 'A program must show a menu, read the choice, and repeat until the user chooses Exit. The menu must appear at least once. Which loop fits best?', options: ['<code>for</code>', '<code>do-while</code>', 'nested <code>for</code>', 'No loop is needed'], answer: 1,
          explain: 'do-while guarantees one execution and repeats while the choice is not Exit.' },
        { t: 'output', q: 'What is the output?', code: J`
int count = 0;
for (int i = 3; i <= 9; i++) {
    count++;
}
System.out.println(count);`, answer: '7', explain: 'The values are 3, 4, 5, 6, 7, 8, 9: seven values = 9 - 3 + 1.' },
        { t: 'code', q: 'Read two integers <code>a</code> and <code>b</code> (a &lt;= b). Print how many integers are from <code>a</code> to <code>b</code> (both included) <b>and</b> their sum, like <code>Count: 5</code> and <code>Sum: 35</code> (for 5 and 9). Use a loop. Do not print any prompt.',
          qAr: 'اقرأ a و b واطبع عدد الأعداد بينهما (شاملة) ومجموعها.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '5 9', expected: "Count: 5\nSum: 35" }, { stdin: '3 3', expected: "Count: 1\nSum: 3" }, { stdin: '1 10', expected: "Count: 10\nSum: 55" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        int count = 0;
        int sum = 0;
        for (int i = a; i <= b; i++) {
            count++;
            sum += i;
        }
        System.out.println("Count: " + count);
        System.out.println("Sum: " + sum);
    }
}`, hint: 'Loop i from a to b with <code>&lt;=</code> so b is included.', explain: 'The loop includes both ends, so the count equals b - a + 1.' }
      ]
    }
  ],
  quiz: [
    { t: 'output', q: 'What is the output?', code: J`
int i = 0;
while (i < 3) {
    System.out.println(i);
    i++;
}
System.out.println("i = " + i);`,
      answer: "0\n1\n2\ni = 3",
      explain: 'The body prints 0, 1, 2. The loop stops when i becomes 3.' },
    { t: 'mcq', q: 'What is the minimum number of times the body of a do-while loop executes?',
      options: ['0', '1', '2', 'It depends on the condition'], answer: 1,
      explain: 'The condition is checked after the body, so the body always runs at least once.' },
    { t: 'output', q: 'What is the output?', code: J`
int sum = 0;
for (int k = 2; k <= 8; k += 2) {
    sum += k;
}
System.out.println(sum);`,
      answer: '20',
      explain: '2 + 4 + 6 + 8 = 20.' },
    { t: 'mcq', q: 'How many times is the inner body executed?', code: J`
for (int i = 0; i < 3; i++) {
    for (int j = 0; j <= i; j++) {
        System.out.print("*");
    }
}`,
      options: ['3', '6', '9', '4'], answer: 1,
      explain: 'For i = 0, 1, 2 the inner loop runs 1, 2 and 3 times: 6 in total.' },
    { t: 'output', q: 'What is the output?', code: J`
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) {
            continue;
        }
        System.out.print(i * j + " ");
    }
    System.out.println();
}`,
      answer: "1 3\n2 6\n3 9",
      explain: 'For each row, j = 2 is skipped, so only i * 1 and i * 3 are printed.' },
    { t: 'mcq', q: 'Which loop prints the numbers 1 to 100 exactly once each?',
      options: ['<code>for (int i = 0; i &lt;= 100; i++)</code>', '<code>for (int i = 1; i &lt; 100; i++)</code>', '<code>for (int i = 1; i &lt;= 100; i++)</code>', '<code>for (int i = 0; i &lt; 100; i++)</code>'], answer: 2,
      explain: 'Start at 1 and include 100 with <code>&lt;=</code>. The others print 0 or miss 100 (off-by-one).' },
    { t: 'output', q: 'What is the output?', code: J`
int n = 1;
do {
    n *= 2;
} while (n < 50);
System.out.println(n);`,
      answer: '64',
      explain: 'n becomes 2, 4, 8, 16, 32, 64. After 64 the condition 64 &lt; 50 is false.' },
    { t: 'output', q: 'What is the output?', code: J`
int count = 0;
for (int i = 1; i <= 20; i++) {
    if (i % 4 == 0) {
        count++;
    }
    if (i == 13) {
        break;
    }
}
System.out.println(count);`,
      answer: '3',
      explain: 'Multiples of 4 found before the break at 13 are 4, 8 and 12.' },
    { t: 'mcq', q: 'Which of these is an infinite loop?',
      options: [
        '<code>for (int i = 1; i &lt;= 5; i++) { System.out.println(i); }</code>',
        '<code>int i = 1; while (i &lt;= 5) { System.out.println(i); i++; }</code>',
        '<code>int i = 1; while (i &lt;= 5) { System.out.println(i); }</code>',
        '<code>int i = 1; do { i++; } while (i &lt;= 5);</code>'
      ], answer: 2,
      explain: 'The third loop never updates i, so i &lt;= 5 stays true forever.' },
    { t: 'output', q: 'What is the output?', code: J`
String s = "loops";
for (int i = s.length() - 1; i >= 0; i--) {
    System.out.print(s.charAt(i));
}`,
      answer: 'spool',
      explain: 'The loop visits indexes 4, 3, 2, 1, 0, printing the characters in reverse order.' }
  ],
  lab: {
    t: 'code',
    q: 'Mini project: <b>Exam statistics</b>. Plan: priming read, a while loop, an if for valid/invalid, then the report after the loop. Example input <code>85 92 -5 70 101 64 -1</code> has 4 valid and 2 invalid scores. Read integer scores until <code>-1</code> (the sentinel, not a score). A score is valid if it is from 0 to 100; any other value (except -1) is invalid and is skipped. Print exactly:<br><code>Valid: </code>number of valid scores<br><code>Invalid: </code>number of invalid values<br>then, if there was at least one valid score:<br><code>Average: </code>average of valid scores with 2 decimals<br><code>Highest: </code>highest valid score<br><code>Lowest: </code>lowest valid score<br>otherwise the single line <code>No valid scores</code>. Do not print any prompts.',
    qAr: 'اقرأ الدرجات حتى -1، وتجاهل غير الصالحة، واطبع العدد والمتوسط وأعلى وأقل درجة.',
    starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // your code here
    }
}`,
    tests: [
      { stdin: '85 92 -5 70 101 64 -1', expected: "Valid: 4\nInvalid: 2\nAverage: 77.75\nHighest: 92\nLowest: 64" },
      { stdin: '100 90 -1', expected: "Valid: 2\nInvalid: 0\nAverage: 95.00\nHighest: 100\nLowest: 90" },
      { stdin: '-1', expected: "Valid: 0\nInvalid: 0\nNo valid scores" }
    ],
    solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int valid = 0;
        int invalid = 0;
        int sum = 0;
        int max = 0;
        int min = 100;
        int score = input.nextInt();
        while (score != -1) {
            if (score >= 0 && score <= 100) {
                valid++;
                sum += score;
                if (score > max) {
                    max = score;
                }
                if (score < min) {
                    min = score;
                }
            } else {
                invalid++;
            }
            score = input.nextInt();
        }
        System.out.println("Valid: " + valid);
        System.out.println("Invalid: " + invalid);
        if (valid > 0) {
            System.out.printf("Average: %.2f%n", (double) sum / valid);
            System.out.println("Highest: " + max);
            System.out.println("Lowest: " + min);
        } else {
            System.out.println("No valid scores");
        }
    }
}`,
    hint: 'Use the priming read pattern. Keep counters for valid and invalid values, a sum, and max/min that are updated only for valid scores.',
    explain: 'Because valid scores are always between 0 and 100, starting max at 0 and min at 100 is safe here. The average is computed after the loop and only when there is at least one valid score.'
  },
  cheats: [
    { code: J`while (cond) { ...; update; }`, note: 'Checks first; may run 0 times' },
    { code: J`do { ... } while (cond);`, note: 'Runs at least once; semicolon at the end' },
    { code: J`for (int i = 1; i <= n; i++) { ... }`, note: 'Counter-controlled: runs n times' },
    { code: J`int x = in.nextInt(); while (x != -1) { ...; x = in.nextInt(); }`, note: 'Sentinel loop with priming read' },
    { code: J`sum += x;  count++;  if (x > max) max = x;`, note: 'Accumulators: sum, count, maximum' },
    { code: J`(double) sum / count`, note: 'Average without integer division' },
    { code: J`for (r...) { for (c...) { print } println(); }`, note: 'Nested loops: rows and columns' },
    { code: J`break;   continue;`, note: 'Exit the innermost loop / skip to the next iteration' },
    { code: J`for (int i = a; i <= b; i++)`, note: 'Runs b - a + 1 times; check boundaries for off-by-one errors' }
  ],
  glossary: [
    { term: 'Loop', ar: 'حلقة تكرارية', def: 'A control structure that repeats a block of statements.' },
    { term: 'Iteration', ar: 'تكرار', def: 'One execution of the loop body.' },
    { term: 'Loop-continuation condition', ar: 'شرط الاستمرار', def: 'The Boolean expression that decides whether the loop body runs again.' },
    { term: 'Counter-controlled loop', ar: 'حلقة يتحكم بها عداد', def: 'A loop that repeats a known number of times using a counter variable.' },
    { term: 'Sentinel value', ar: 'قيمة حارسة', def: 'A special input value that signals the end of the data.' },
    { term: 'Input validation', ar: 'التحقق من المدخلات', def: 'Checking input and asking again until an acceptable value is entered.' },
    { term: 'Accumulator', ar: 'مجمّع', def: 'A variable that collects a running total, count, or product across loop iterations.' },
    { term: 'Nested loop', ar: 'حلقة متداخلة', def: 'A loop placed inside the body of another loop.' },
    { term: 'Infinite loop', ar: 'حلقة لانهائية', def: 'A loop whose condition never becomes false, so it never stops.' },
    { term: 'Off-by-one error', ar: 'خطأ الفرق بواحد', def: 'A logic error where a loop runs one time too many or too few.' },
    { term: 'Loop body', ar: 'جسم الحلقة', def: 'The statements between the braces that are repeated.' },
    { term: 'Control variable', ar: 'متغير التحكم', def: 'The variable (counter) that the loop condition checks and the loop changes.' },
    { term: 'Trace table', ar: 'جدول التتبع', def: 'A table where you write the values of the variables after each round of a loop.' },
    { term: 'Priming read', ar: 'القراءة الأولية', def: 'The first read before a sentinel loop, so the first value can be checked.' },
    { term: 'break / continue', ar: 'break / continue', def: 'break exits the innermost loop; continue skips to the next iteration.' }
  ]
});
