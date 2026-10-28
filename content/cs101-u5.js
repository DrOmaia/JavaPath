JP.unit({
  course: 'cs101',
  n: 5,
  title: 'Loops',
  titleAr: 'الحلقات التكرارية',
  intro: "Loops let a program repeat work: read 40 grades, add up a bill, keep asking until the input is valid, or draw a table. In this unit you will master the while, do-while and for loops, counter- and sentinel-controlled repetition, accumulators, nested loops, break and continue, and learn how to avoid the classic off-by-one mistakes.",
  introAr: 'الحلقات تجعل البرنامج يكرر العمل: قراءة الدرجات، جمع الفواتير، التحقق من المدخلات، ورسم الجداول. ستتعلم حلقات while و do-while و for، والتكرار بعداد أو بقيمة حارسة، والمجمّعات، والحلقات المتداخلة، و break و continue، وتجنب أخطاء الفرق بواحد.',
  lessons: [
    {
      title: 'The while loop',
      titleAr: 'حلقة while',
      minutes: 45,
      body: [
        { type: 'p', en: 'A <b>loop</b> repeats a block of statements. The <code>while</code> loop checks a condition <b>before</b> each repetition (iteration). If the condition is true, the body runs and the condition is checked again; when it becomes false, the loop ends and the program continues after it.',
          ar: 'حلقة while تفحص الشرط قبل كل تكرار، وتتوقف عندما يصبح الشرط خاطئاً.' },
        { type: 'code', code: J`
while (condition) {
    // loop body: statements to repeat
}` },
        { type: 'p', en: 'Most loops have three parts: <b>initialize</b> a control variable, <b>test</b> it in the condition, and <b>update</b> it inside the body. A loop that repeats a known number of times using a counter is called <b>counter-controlled</b>.',
          ar: 'لكل حلقة ثلاثة أجزاء: التهيئة والاختبار والتحديث.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int count = 1;                       // initialize
        while (count <= 5) {                 // test
            System.out.println("Welcome to Java " + count);
            count++;                         // update
        }
        System.out.println("Done");
    }
}`, out: "Welcome to Java 1\nWelcome to Java 2\nWelcome to Java 3\nWelcome to Java 4\nWelcome to Java 5\nDone" },
        { type: 'h', en: 'Tracing a loop' },
        { type: 'p', en: 'To understand (or debug) a loop, trace it in a table: one row per check of the condition.' },
        { type: 'table', head: ['count', 'count &lt;= 5 ?', 'Printed'], rows: [
          ['1', 'true', 'Welcome to Java 1'],
          ['2', 'true', 'Welcome to Java 2'],
          ['3', 'true', 'Welcome to Java 3'],
          ['4', 'true', 'Welcome to Java 4'],
          ['5', 'true', 'Welcome to Java 5'],
          ['6', 'false', '(loop ends)']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int i = 1;
        int sum = 0;
        while (i <= 10) {
            sum += i;
            i++;
        }
        System.out.println("Sum = " + sum);
        System.out.println("i after loop = " + i);
    }
}`, out: "Sum = 55\ni after loop = 11" },
        { type: 'note', kind: 'warn', en: 'An <b>infinite loop</b> never stops. Common causes: forgetting the update (<code>count++</code>), updating in the wrong direction, or a semicolon right after the condition: <code>while (count &lt;= 5);</code> makes an empty body that repeats forever.',
          ar: 'الحلقة اللانهائية تحدث عند نسيان التحديث أو وضع فاصلة منقوطة بعد الشرط.' },
        { type: 'h', en: 'Other steps and conditions' },
        { type: 'p', en: 'The update does not have to be <code>++</code>. You can count down, jump by any step, or change the variable in other ways.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 10;
        while (n > 0) {
            System.out.print(n + " ");
            n -= 3;
        }
        System.out.println();
        System.out.println("Liftoff");
    }
}`, out: "10 7 4 1\nLiftoff" },
        { type: 'p', en: 'When you do not know how many repetitions are needed, a while loop is natural. This example takes digits off a number with <code>% 10</code> and <code>/ 10</code> until nothing is left.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int number = 4729;
        int sum = 0;
        int digits = 0;
        while (number > 0) {
            sum += number % 10;   // last digit
            number /= 10;         // remove last digit
            digits++;
        }
        System.out.println("Digits: " + digits);
        System.out.println("Sum of digits: " + sum);
    }
}`, out: "Digits: 4\nSum of digits: 22" },
        { type: 'note', kind: 'exam', en: 'Because the condition is checked first, the body of a while loop may run <b>zero</b> times. For example, <code>int i = 10; while (i &lt; 10) { ... }</code> never enters the body.',
          ar: 'قد لا يُنفذ جسم while ولا مرة واحدة إذا كان الشرط خاطئاً من البداية.' }
      ],
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
int k = 1;
while (k < 20) {
    System.out.print(k + " ");
    k *= 3;
}`,
          answer: '1 3 9',
          explain: 'k takes the values 1, 3, 9 and then 27. When k is 27 the condition k &lt; 20 is false, so 27 is not printed.' },
        { t: 'mcq', q: 'How many times does the body run?', code: J`
int i = 10;
while (i < 10) {
    System.out.println(i);
    i++;
}`,
          options: ['0', '1', '10', 'Infinitely many'], answer: 0,
          explain: 'The condition 10 &lt; 10 is false on the very first check, so the body never runs.' },
        { t: 'fill', q: 'Complete the loop so it prints the even numbers 2, 4, 6, ..., 20.',
          code: J`
int n = 2;
while (n ___ 20) {
    System.out.println(n);
    n ___ 2;
}`,
          answers: ['<=', '+='],
          explain: 'Use <code>&lt;=</code> so that 20 is included, and add 2 each time.' },
        { t: 'output', q: 'What is the output?', code: J`
int x = 5;
int f = 1;
while (x > 1) {
    f *= x;
    x--;
}
System.out.println(f);`,
          answer: '120',
          explain: 'f = 5 * 4 * 3 * 2 = 120. The loop stops when x becomes 1.' },
        { t: 'mcq', q: 'What happens when this code runs?', code: J`
int count = 1;
while (count <= 5); {
    count++;
}`,
          options: ['The block runs 5 times', 'The block runs once', 'Infinite loop', 'Compile error'], answer: 2,
          explain: 'The semicolon after the condition is an empty loop body. count stays 1 forever, so the loop never ends.',
          explainAr: 'الفاصلة المنقوطة بعد الشرط تجعل جسم الحلقة فارغاً فلا يتغير العداد.' },
        { t: 'code', q: 'Read a positive integer (with no zeros at the end) and print its digits in reverse order as one number. Use a while loop. Do not print any prompt.<br>Example: <code>1234</code> prints <code>4321</code>.',
          qAr: 'اقرأ عدداً موجباً واطبعه معكوساً باستخدام while.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`,
          tests: [ { stdin: '1234', expected: '4321' }, { stdin: '905', expected: '509' }, { stdin: '7', expected: '7' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int reversed = 0;
        while (n > 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        System.out.println(reversed);
    }
}`,
          hint: 'Each step: <code>reversed = reversed * 10 + n % 10;</code> then <code>n /= 10;</code>',
          explain: '<code>n % 10</code> gives the last digit and <code>n / 10</code> removes it. Multiplying <code>reversed</code> by 10 shifts its digits left to make room for the new one.' }
      ]
    },
    {
      title: 'Sentinel loops, do-while and input validation',
      titleAr: 'القيمة الحارسة وحلقة do-while والتحقق من المدخلات',
      minutes: 45,
      body: [
        { type: 'p', en: 'Sometimes we do not know in advance how many values the user will enter. A <b>sentinel</b> is a special value that means "stop", for example <code>-1</code> for exam scores. A loop that stops when it reads the sentinel is <b>sentinel-controlled</b>.',
          ar: 'القيمة الحارسة قيمة خاصة تعني التوقف مثل -1 عند إدخال الدرجات.' },
        { type: 'code', run: true, stdin: '80 95 77 -1', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int sum = 0;
        int count = 0;
        int score = input.nextInt();      // priming read
        while (score != -1) {
            sum += score;
            count++;
            score = input.nextInt();      // read the next value
        }
        if (count > 0) {
            System.out.println("Count: " + count);
            System.out.println("Average: " + (double) sum / count);
        } else {
            System.out.println("No scores");
        }
    }
}`, out: "Count: 3\nAverage: 84.0" },
        { type: 'note', kind: 'tip', en: 'This is the <b>priming read</b> pattern: read the first value before the loop, and read the next value at the <b>end</b> of the body. Then the sentinel is checked before it can be processed.',
          ar: 'اقرأ القيمة الأولى قبل الحلقة، والقيمة التالية في آخر جسم الحلقة.' },
        { type: 'note', kind: 'warn', en: 'The sentinel must not be a valid data value, and it must never be added to the total. Also guard the average with <code>count &gt; 0</code> to avoid dividing by zero when the first value is the sentinel.' },
        { type: 'h', en: 'The do-while loop' },
        { type: 'code', code: J`
do {
    // loop body
} while (condition);   // note the semicolon` },
        { type: 'p', en: 'A <code>do-while</code> loop runs its body <b>first</b> and checks the condition <b>after</b>. So the body always runs at least once. This is perfect for input validation and menus, where you must ask at least one time.',
          ar: 'حلقة do-while تنفذ الجسم أولاً ثم تفحص الشرط، لذا تُنفذ مرة واحدة على الأقل.' },
        { type: 'h', en: 'Input validation' },
        { type: 'p', en: 'Input validation means refusing bad input and asking again until the value is acceptable.' },
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
        { type: 'table', head: ['', 'while', 'do-while'], rows: [
          ['Condition checked', 'before the body', 'after the body'],
          ['Minimum number of runs', '0', '1'],
          ['Typical use', 'sentinel input, unknown repetitions', 'menus, input validation'],
          ['Ends with ;', 'no', 'yes, after <code>while (...)</code>']
        ] },
        { type: 'note', kind: 'exam', en: 'Forgetting the semicolon after <code>} while (condition)</code> is a compile error. Also, a variable declared <b>inside</b> the do block cannot be used in the condition: declare it before the loop.',
          ar: 'لا تنس الفاصلة المنقوطة بعد while في do-while، وعرّف المتغير قبل الحلقة.' },
        { type: 'h', en: 'A simple menu' },
        { type: 'code', code: J`
int choice;
do {
    System.out.println("1) Deposit  2) Withdraw  0) Exit");
    choice = input.nextInt();
    if (choice == 1) {
        balance += input.nextDouble();
    } else if (choice == 2) {
        balance -= input.nextDouble();
    }
} while (choice != 0);` }
      ],
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
int n = 10;
do {
    System.out.println(n);
    n += 5;
} while (n < 10);`,
          answer: '10',
          explain: 'The body runs once before the condition is checked. Then n is 15 and 15 &lt; 10 is false, so the loop stops.' },
        { t: 'mcq', q: 'Which loop always executes its body at least once?',
          options: ['<code>while</code>', '<code>for</code>', '<code>do-while</code>', 'None of them'], answer: 2,
          explain: 'do-while checks its condition after the body, so the body runs at least once.' },
        { t: 'fill', q: 'Complete the input validation loop: keep reading until the age is between 0 and 120.',
          code: J`
int age;
___ {
    age = input.nextInt();
} ___ (age < 0 || age > 120);`,
          answers: ['do', 'while'],
          explain: 'A do-while loop reads at least once and repeats while the value is invalid.' },
        { t: 'order', q: 'Order the lines to add numbers until the user enters 0, then print the total.',
          lines: [
            'int total = 0;',
            'int value = input.nextInt();',
            'while (value != 0) {',
            '    total += value;',
            '    value = input.nextInt();',
            '}',
            'System.out.println(total);'
          ],
          explain: 'Priming read before the loop, process then read the next value inside the loop, print after the loop.' },
        { t: 'mcq', q: 'Scores are entered and <code>-1</code> ends the input. Which value is a <b>bad</b> choice of sentinel if valid scores can be from -10 to 100 (penalties allowed)?',
          options: ['<code>-1</code>', '<code>-999</code>', '<code>101</code>', '<code>1000</code>'], answer: 0,
          explain: 'A sentinel must be outside the range of valid data. -1 is a possible valid score here.' },
        { t: 'code', q: 'Read integers until <code>0</code> is entered (0 is the sentinel and is not counted). Print how many were positive and how many were negative, exactly as:<br><code>Positives: 3</code><br><code>Negatives: 2</code><br>Do not print any prompt.',
          qAr: 'اقرأ أعداداً حتى الصفر واطبع عدد الموجبة وعدد السالبة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // your code here
    }
}`,
          tests: [ { stdin: '5 -3 8 -1 2 0', expected: "Positives: 3\nNegatives: 2" }, { stdin: '0', expected: "Positives: 0\nNegatives: 0" }, { stdin: '-4 -9 0', expected: "Positives: 0\nNegatives: 2" } ],
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
}`,
          hint: 'Use the priming read pattern with two counters.',
          explain: 'Each value read inside the loop is non-zero, so it is either positive or negative. The sentinel stops the loop before it is counted.' }
      ]
    },
    {
      title: 'The for loop and accumulators',
      titleAr: 'حلقة for والمجمّعات',
      minutes: 45,
      body: [
        { type: 'p', en: 'The <code>for</code> loop puts initialization, condition and update in one line. It is the natural choice for <b>counter-controlled</b> loops where the number of repetitions is known.',
          ar: 'حلقة for تجمع التهيئة والشرط والتحديث في سطر واحد، وتناسب التكرار بعدد معروف.' },
        { type: 'code', code: J`
for (initialization; condition; update) {
    // body
}` },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i + " squared is " + i * i);
        }
    }
}`, out: "1 squared is 1\n2 squared is 4\n3 squared is 9\n4 squared is 16\n5 squared is 25" },
        { type: 'table', head: ['Step', 'What happens'], rows: [
          ['1', 'Initialization runs <b>once</b>: <code>int i = 1</code>'],
          ['2', 'Condition is tested; if false, the loop ends'],
          ['3', 'Body runs'],
          ['4', 'Update runs: <code>i++</code>, then go back to step 2']
        ] },
        { type: 'note', kind: 'tip', en: 'A variable declared in the for header (like <code>int i</code>) exists only inside the loop. If you need its value after the loop, declare it before the loop.',
          ar: 'المتغير المعرف داخل رأس for لا يمكن استخدامه بعد الحلقة.' },
        { type: 'h', en: 'Accumulators: sum, count and average' },
        { type: 'p', en: 'An <b>accumulator</b> is a variable that collects a result across iterations. Start a sum at 0, a product at 1, and a counter at 0. Compute the average <b>after</b> the loop.',
          ar: 'المجمّع متغير يجمع النتيجة عبر التكرارات: المجموع يبدأ بصفر والضرب يبدأ بواحد.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        int count = 0;
        for (int n = 1; n <= 15; n += 2) {
            sum += n;
            count++;
        }
        System.out.println("Sum of odd numbers: " + sum);
        System.out.println("Count: " + count);
        System.out.println("Average: " + (double) sum / count);
    }
}`, out: "Sum of odd numbers: 64\nCount: 8\nAverage: 8.0" },
        { type: 'h', en: 'Finding the maximum and minimum' },
        { type: 'p', en: 'To find the largest value, keep a variable <code>max</code> and replace it whenever a bigger value appears. Initialize it with the <b>first</b> value read.' },
        { type: 'code', run: true, stdin: "5\n31 38 27 44 35", code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();          // how many temperatures
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
        { type: 'note', kind: 'exam', en: 'Do not start <code>max</code> at 0: if all values are negative (winter temperatures in degrees below zero), the answer would wrongly be 0. Start with the first value instead.',
          ar: 'لا تبدأ القيمة العظمى بصفر، بل بأول قيمة مقروءة.' },
        { type: 'h', en: 'Products and overflow' },
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
        { type: 'note', kind: 'warn', en: 'An <code>int</code> can hold values up to 2147483647. 13! is 6227020800, which is too large, so an int factorial silently gives a wrong answer (overflow). Use <code>long</code> for large products.' }
      ],
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
for (int i = 10; i > 0; i -= 4) {
    System.out.print(i + " ");
}`,
          answer: '10 6 2',
          explain: 'i takes 10, 6, 2, then -2. -2 &gt; 0 is false, so the loop ends.' },
        { t: 'output', q: 'What is the output?', code: J`
int s = 0;
for (int i = 1; i <= 4; i++) {
    s += i * i;
}
System.out.println(s);`,
          answer: '30',
          explain: '1 + 4 + 9 + 16 = 30.' },
        { t: 'fill', q: 'Complete the code that reads <code>n</code> integers and computes their average as a double.',
          code: J`
int sum = 0;
for (int i = ___; i <= n; i++) {
    sum ___ input.nextInt();
}
double avg = (___) sum / n;`,
          answers: ['1', '+=', 'double'],
          explain: 'Count from 1 to n (n iterations), add each value to the accumulator, and cast before dividing to avoid integer division.' },
        { t: 'mcq', q: 'What is the value of <code>i</code> after this code?', code: J`
int i;
for (i = 0; i < 5; i++) {
}`,
          options: ['4', '5', '6', '0'], answer: 1,
          explain: 'The loop stops when the condition i &lt; 5 first becomes false, which happens when i is 5.' },
        { t: 'mcq', q: 'A program finds the highest of several temperatures that may be negative. What is the best initial value for <code>max</code>?',
          options: ['0', 'The first temperature read', '100', '-1'], answer: 1,
          explain: 'Starting with the first actual value works for any data. 0 or -1 could be larger than every real value.' },
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
}`,
          tests: [ { stdin: "3\n10.5 20 4.75", expected: "Total: 35.25\nAverage: 11.75" }, { stdin: "4\n2.5 2.5 2.5 2.5", expected: "Total: 10.00\nAverage: 2.50" } ],
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
}`,
          hint: 'Use a double accumulator that starts at 0 and <code>printf("%.2f")</code>.',
          explain: 'The for loop runs exactly n times; the sum is accumulated, then divided by n after the loop.' }
      ]
    },
    {
      title: 'Nested loops: patterns and tables',
      titleAr: 'الحلقات المتداخلة: الأشكال والجداول',
      minutes: 45,
      body: [
        { type: 'p', en: 'A <b>nested loop</b> is a loop inside another loop. For each single iteration of the outer loop, the inner loop runs <b>completely</b>. If the outer loop runs 3 times and the inner loop 5 times, the inner body runs 3 x 5 = 15 times.',
          ar: 'في الحلقات المتداخلة تُنفذ الحلقة الداخلية بالكامل في كل تكرار للحلقة الخارجية.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int row = 1; row <= 3; row++) {
            for (int col = 1; col <= 5; col++) {
                System.out.print("*");
            }
            System.out.println();   // end of the row
        }
    }
}`, out: "*****\n*****\n*****" },
        { type: 'note', kind: 'tip', en: 'Think of the outer loop as <b>rows</b> and the inner loop as <b>columns</b>. The <code>println()</code> after the inner loop ends each row.',
          ar: 'الحلقة الخارجية للصفوف والداخلية للأعمدة.' },
        { type: 'h', en: 'Triangle patterns' },
        { type: 'p', en: 'If the inner loop limit depends on the outer variable, each row can have a different length.' },
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
        { type: 'p', en: 'A right-aligned triangle needs two inner loops in each row: one for the spaces and one for the stars.' },
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
        { type: 'p', en: 'Combine nested loops with <code>printf</code> widths to line up columns neatly.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 4; i++) {
            for (int j = 1; j <= 4; j++) {
                System.out.printf("%4d", i * j);
            }
            System.out.println();
        }
    }
}`, out: "   1   2   3   4\n   2   4   6   8\n   3   6   9  12\n   4   8  12  16" },
        { type: 'note', kind: 'exam', en: 'Counting iterations: outer <code>n</code> times with inner <code>m</code> times gives <code>n * m</code>. When the inner loop runs <code>j = 1..i</code> for <code>i = 1..n</code>, the total is 1 + 2 + ... + n = n(n + 1) / 2.',
          ar: 'عدد التكرارات الكلي = عدد تكرارات الخارجية × الداخلية.' },
        { type: 'note', kind: 'warn', en: 'Use different variable names for the outer and inner counters. Reusing <code>i</code> in both loops is a compile error when both are declared in the headers, and a logic error if you change the outer counter inside the inner loop.' }
      ],
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 2; j++) {
        System.out.print(i + "" + j + " ");
    }
    System.out.println();
}`,
          answer: "11 12\n21 22\n31 32",
          explain: 'For each i, j goes 1 then 2. <code>i + "" + j</code> joins the digits as text.' },
        { t: 'mcq', q: 'How many times is the <code>print</code> statement executed?', code: J`
for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 3; j++) {
        System.out.print("#");
    }
}`,
          options: ['7', '12', '16', '9'], answer: 1,
          explain: 'The outer loop runs 4 times, and each time the inner loop runs 3 times: 4 x 3 = 12.' },
        { t: 'output', q: 'What is the output?', code: J`
for (int i = 4; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
        System.out.print("#");
    }
    System.out.println();
}`,
          answer: "####\n###\n##\n#",
          explain: 'Row lengths follow i: 4, 3, 2, 1.' },
        { t: 'fill', q: 'Complete the code to print a triangle where row <code>r</code> has <code>r</code> stars.',
          code: J`
for (int row = 1; row <= n; row++) {
    for (int col = 1; col <= ___; col++) {
        System.out.print("*");
    }
    System.out.___();
}`,
          answers: ['row', 'println'],
          explain: 'The inner limit is the row number, and <code>println()</code> moves to the next line after each row.' },
        { t: 'mcq', q: 'For <code>n = 5</code>, how many stars does this print?', code: J`
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
}`,
          options: ['5', '10', '15', '25'], answer: 2,
          explain: '1 + 2 + 3 + 4 + 5 = 15 = 5 x 6 / 2.' },
        { t: 'code', q: 'Read an integer <code>n</code> and print <code>n</code> lines. Line <code>i</code> contains the digit <code>i</code> repeated <code>i</code> times (no spaces). Assume 1 &lt;= n &lt;= 9. Do not print any prompt.<br>Example for <code>3</code>:<br><code>1</code><br><code>22</code><br><code>333</code>',
          qAr: 'اطبع n من الأسطر، السطر i يحتوي الرقم i مكرراً i مرة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`,
          tests: [ { stdin: '3', expected: "1\n22\n333" }, { stdin: '5', expected: "1\n22\n333\n4444\n55555" } ],
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
}`,
          hint: 'The outer loop chooses the digit; the inner loop prints it that many times.',
          explain: 'In row i the inner loop runs i times and prints i each time, then println ends the row.' }
      ]
    },
    {
      title: 'break, continue and choosing the right loop',
      titleAr: 'break و continue واختيار الحلقة المناسبة',
      minutes: 45,
      body: [
        { type: 'h', en: 'break' },
        { type: 'p', en: '<code>break</code> immediately exits the <b>innermost</b> loop that contains it. Execution continues with the first statement after that loop. It is useful when the answer has been found and there is no need to keep looping.',
          ar: 'break تخرج فوراً من أقرب حلقة تحتويها.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int n = 50; n <= 100; n++) {
            if (n % 7 == 0) {
                System.out.println("First multiple of 7: " + n);
                break;
            }
        }
    }
}`, out: "First multiple of 7: 56" },
        { type: 'h', en: 'continue' },
        { type: 'p', en: '<code>continue</code> skips the rest of the <b>current</b> iteration and moves to the next one. In a for loop, the update still runs.',
          ar: 'continue تتخطى بقية التكرار الحالي وتنتقل إلى التكرار التالي.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            if (i % 3 == 0) {
                continue;            // skip multiples of 3
            }
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`, out: "1 2 4 5 7 8 10" },
        { type: 'note', kind: 'warn', en: 'In a <code>while</code> loop, <code>continue</code> jumps straight to the condition. If the update is below the <code>continue</code>, it is skipped and the loop can become infinite.' },
        { type: 'code', code: J`
int i = 0;
while (i < 10) {
    if (i == 5) {
        continue;    // BUG: i++ is skipped, i stays 5 forever
    }
    i++;
}` },
        { type: 'p', en: 'A classic use of break: testing whether a number is prime. As soon as a divisor is found, there is no reason to keep testing.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 91;
        boolean prime = true;
        for (int d = 2; d * d <= n; d++) {
            if (n % d == 0) {
                prime = false;
                System.out.println(n + " is divisible by " + d);
                break;
            }
        }
        if (prime) {
            System.out.println(n + " is prime");
        } else {
            System.out.println(n + " is not prime");
        }
    }
}`, out: "91 is divisible by 7\n91 is not prime" },
        { type: 'h', en: 'Choosing the right loop' },
        { type: 'table', head: ['Loop', 'Use it when...', 'Example'], rows: [
          ['<code>for</code>', 'the number of repetitions is known (counter-controlled)', 'process 30 students, print 1 to n'],
          ['<code>while</code>', 'you repeat while a condition holds; it may run 0 times', 'sentinel input, processing digits'],
          ['<code>do-while</code>', 'the body must run at least once', 'menus, input validation']
        ] },
        { type: 'p', en: 'Any loop can be rewritten as either of the others, so this is about clarity, not power. Pick the one that makes your intention obvious.' },
        { type: 'h', en: 'Off-by-one errors' },
        { type: 'p', en: 'An <b>off-by-one error</b> happens when a loop runs one time too many or one time too few, usually because of <code>&lt;</code> versus <code>&lt;=</code> or a wrong starting value.',
          ar: 'خطأ الفرق بواحد: تنفيذ الحلقة مرة زائدة أو ناقصة بسبب &lt; أو &lt;= أو قيمة البداية.' },
        { type: 'table', head: ['Loop header', 'Number of iterations'], rows: [
          ['<code>for (int i = 0; i &lt; n; i++)</code>', 'n'],
          ['<code>for (int i = 1; i &lt;= n; i++)</code>', 'n'],
          ['<code>for (int i = 0; i &lt;= n; i++)</code>', 'n + 1'],
          ['<code>for (int i = 1; i &lt; n; i++)</code>', 'n - 1'],
          ['<code>for (int i = a; i &lt;= b; i++)</code>', 'b - a + 1']
        ] },
        { type: 'note', kind: 'exam', en: 'To check a loop, test its <b>boundaries</b>: what is the first value, the last value, and how many values in total? For <code>for (int i = 0; i &lt;= 10; i += 2)</code> the values are 0, 2, 4, 6, 8, 10: six iterations.',
          ar: 'افحص القيمة الأولى والأخيرة وعدد التكرارات لكل حلقة.' }
      ],
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
int total = 0;
for (int i = 1; i <= 10; i++) {
    if (i == 6) {
        break;
    }
    total += i;
}
System.out.println(total);`,
          answer: '15',
          explain: 'The loop adds 1 + 2 + 3 + 4 + 5 = 15, then break exits when i is 6 (before 6 is added).' },
        { t: 'output', q: 'What is the output?', code: J`
for (int i = 1; i <= 6; i++) {
    if (i % 2 == 0) {
        continue;
    }
    System.out.print(i + " ");
}`,
          answer: '1 3 5',
          explain: 'continue skips the print for even values of i.' },
        { t: 'mcq', q: 'How many times does this loop run?', code: J`
for (int i = 0; i <= 10; i += 2) {
    System.out.println(i);
}`,
          options: ['5', '6', '10', '11'], answer: 1,
          explain: 'i takes 0, 2, 4, 6, 8, 10: six values.' },
        { t: 'mcq', q: 'A program must show a menu, read the choice, and repeat until the user chooses Exit. The menu must appear at least once. Which loop fits best?',
          options: ['<code>for</code>', '<code>do-while</code>', 'nested <code>for</code>', 'No loop is needed'], answer: 1,
          explain: 'do-while guarantees one execution and repeats while the choice is not Exit.' },
        { t: 'fill', q: 'Fix the off-by-one errors: the first loop must print "Hi" exactly 10 times, and the second must print the numbers 1 to 10.',
          code: J`
for (int i = 0; i ___ 10; i++) {
    System.out.println("Hi");
}
for (int k = 1; k ___ 10; k++) {
    System.out.println(k);
}`,
          answers: ['<', '<='],
          explain: 'Starting at 0 with <code>&lt; 10</code> gives 0..9 (10 times). Starting at 1 with <code>&lt;= 10</code> gives 1..10.' },
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
}`,
          tests: [ { stdin: '13', expected: 'Prime' }, { stdin: '21', expected: 'Not prime' }, { stdin: '2', expected: 'Prime' } ],
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
}`,
          hint: 'Assume it is prime, then look for a divisor d from 2 while d * d &lt;= n.',
          explain: 'If n has a divisor, one of them is at most the square root of n, so testing d * d &lt;= n is enough. break stops at the first divisor found.' }
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
    q: 'Mini project: <b>Exam statistics</b>. Read integer scores until <code>-1</code> (the sentinel). A score is valid if it is from 0 to 100; any other value (except -1) is invalid and is skipped. Print exactly:<br><code>Valid: </code>number of valid scores<br><code>Invalid: </code>number of invalid values<br>then, if there was at least one valid score:<br><code>Average: </code>average of valid scores with 2 decimals<br><code>Highest: </code>highest valid score<br><code>Lowest: </code>lowest valid score<br>otherwise the single line <code>No valid scores</code>. Do not print any prompts.',
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
    { term: 'break / continue', ar: 'break / continue', def: 'break exits the innermost loop; continue skips to the next iteration.' }
  ]
});
