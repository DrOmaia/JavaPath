JP.unit({
  course: 'cs101',
  n: 3,
  title: 'Selection Statements',
  titleAr: 'جمل الاختيار',
  intro: 'Programs become useful when they can make decisions: pass or fail, enough balance or not, which day of the week. This unit introduces the boolean type, relational and logical operators, and every way Java chooses between actions: if, if-else, nested and multi-way if statements, the switch statement and the conditional operator. You will also learn the classic traps examiners love, such as the dangling else and switch fall-through.',
  introAr: 'تصبح البرامج مفيدة عندما تتخذ قرارات. تقدم هذه الوحدة النوع المنطقي boolean وعمليات المقارنة والعمليات المنطقية، وجمل if و if-else والمتداخلة ومتعددة الفروع، وجملة switch والعامل الشرطي، مع الأخطاء الشائعة في الاختبارات.',
  lessons: [
    {
      title: 'Boolean expressions and logical operators',
      titleAr: 'التعابير المنطقية والعمليات المنطقية',
      minutes: 50,
      body: [
        { type: 'h', en: 'The boolean type' },
        { type: 'p', en: 'A <code>boolean</code> variable holds one of two values: <code>true</code> or <code>false</code>. Comparing two values with a <b>relational operator</b> produces a boolean value. Such an expression is called a <b>Boolean expression</b>, and it is the heart of every decision.',
          ar: 'المتغير المنطقي يحمل true أو false، وعمليات المقارنة تنتج قيمة منطقية.' },
        { type: 'table', head: ['Operator', 'Meaning', 'Example (radius is 5)', 'Result'], rows: [
          ['<code>&lt;</code>', 'less than', '<code>radius &lt; 0</code>', 'false'],
          ['<code>&lt;=</code>', 'less than or equal to', '<code>radius &lt;= 5</code>', 'true'],
          ['<code>&gt;</code>', 'greater than', '<code>radius &gt; 0</code>', 'true'],
          ['<code>&gt;=</code>', 'greater than or equal to', '<code>radius &gt;= 10</code>', 'false'],
          ['<code>==</code>', 'equal to', '<code>radius == 5</code>', 'true'],
          ['<code>!=</code>', 'not equal to', '<code>radius != 5</code>', 'false']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int grade = 75;
        boolean passed = grade >= 60;
        System.out.println(passed);
        System.out.println(grade == 100);
        System.out.println(grade != 80);
        System.out.println(10 < 3);
    }
}
`, out: J`
true
false
true
false
` },
        { type: 'note', kind: 'exam', en: '<code>=</code> assigns a value; <code>==</code> compares two values. Writing <code>if (x = 5)</code> when x is an int is a compile error, because the condition must be a boolean.',
          ar: 'العلامة = للإسناد، و == للمقارنة.' },
        { type: 'h', en: 'Logical operators' },
        { type: 'p', en: 'Logical operators combine Boolean expressions into a bigger condition.' },
        { type: 'table', head: ['Operator', 'Name', 'True when'], rows: [
          ['<code>!</code>', 'not', 'the operand is false'],
          ['<code>&amp;&amp;</code>', 'and', 'both operands are true'],
          ['<code>||</code>', 'or', 'at least one operand is true'],
          ['<code>^</code>', 'exclusive or', 'exactly one operand is true']
        ] },
        { type: 'table', head: ['A', 'B', 'A &amp;&amp; B', 'A || B', 'A ^ B'], rows: [
          ['true', 'true', 'true', 'true', 'false'],
          ['true', 'false', 'false', 'true', 'true'],
          ['false', 'true', 'false', 'true', 'true'],
          ['false', 'false', 'false', 'false', 'false']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int age = 20;
        double gpa = 3.6;
        boolean honors = gpa >= 3.5 && age < 25;
        boolean discount = age < 12 || age >= 60;
        System.out.println(honors);
        System.out.println(discount);
        System.out.println(!discount);
        System.out.println(age > 18 ^ gpa > 3.0);
    }
}
`, out: J`
true
false
true
false
` },
        { type: 'note', kind: 'warn', en: 'In mathematics you write 1 &le; x &le; 10, but in Java <code>1 &lt;= x &lt;= 10</code> does not compile. Write <code>x &gt;= 1 &amp;&amp; x &lt;= 10</code>.',
          ar: 'لاختبار مدى استخدم && بين مقارنتين.' },
        { type: 'h', en: 'Short-circuit evaluation' },
        { type: 'p', en: 'Java evaluates <code>&amp;&amp;</code> and <code>||</code> from left to right and stops as soon as the answer is known. If the left side of <code>&amp;&amp;</code> is false, the right side is <b>not evaluated</b>; if the left side of <code>||</code> is true, the right side is skipped. This is called <b>short-circuit</b> evaluation, and it can protect you from errors such as division by zero.',
          ar: 'في && إذا كان الطرف الأيسر false لا يُقيَّم الأيمن، وفي || إذا كان الأيسر true لا يُقيَّم الأيمن.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int count = 0;
        boolean safe = (count != 0) && (100 / count > 5);   // no division happens
        System.out.println(safe);
        int x = 5;
        boolean r = (x > 0) || (++x > 0);                   // ++x is skipped
        System.out.println(r + " " + x);
    }
}
`, out: J`
false
true 5
` },
        { type: 'p', en: 'Precedence from highest to lowest: <code>!</code>, arithmetic, relational (<code>&lt; &lt;= &gt; &gt;=</code>), equality (<code>== !=</code>), <code>^</code>, <code>&amp;&amp;</code>, <code>||</code>. So <code>a || b &amp;&amp; c</code> means <code>a || (b &amp;&amp; c)</code>. When in doubt, add parentheses.' }
      ],
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
int a = 7, b = 3;
System.out.println(a > b);
System.out.println(a == b * 2 + 1);
System.out.println(a % 2 == 0);
`, answer: J`
true
true
false
`, explain: '7 &gt; 3 is true. b * 2 + 1 is 7, so the second comparison is true. 7 % 2 is 1, not 0, so the last is false.' },
        { t: 'mcq', q: 'Which condition is true exactly when <code>x</code> is between 1 and 100 inclusive?',
          options: ['<code>1 &lt;= x &lt;= 100</code>', '<code>x &gt;= 1 &amp;&amp; x &lt;= 100</code>', '<code>x &gt;= 1 || x &lt;= 100</code>', '<code>x &gt; 1 &amp;&amp; x &lt; 100</code>'], answer: 1,
          explain: 'Both conditions must hold, so use <code>&amp;&amp;</code> with inclusive operators. The first option does not compile, the third is true for every number, and the fourth excludes 1 and 100.' },
        { t: 'output', q: 'What is printed?', code: J`
int n = 10;
boolean ok = n < 5 && ++n > 0;
System.out.println(ok);
System.out.println(n);
`, answer: J`
false
10
`, explain: '<code>n &lt; 5</code> is false, so <code>&amp;&amp;</code> short-circuits and <code>++n</code> never runs. n stays 10.' },
        { t: 'mcq', q: 'What is the value of this expression?', code: J`
!(5 > 3) || (2 == 2) && false
`, options: ['true', 'false', 'It does not compile', 'It causes a runtime error'], answer: 1,
          explain: '<code>&amp;&amp;</code> is evaluated before <code>||</code>: <code>(2 == 2) &amp;&amp; false</code> is false, and <code>!(5 &gt; 3)</code> is false, so false || false is false.' },
        { t: 'fill', q: 'Complete the condition so <code>isTeen</code> is true for ages 13 to 19 inclusive.', code: J`
boolean isTeen = age ___ 13 ___ age <= 19;
`, answers: ['>=', '&&'],
          explain: 'The age must be at least 13 <b>and</b> at most 19.' }
      ]
    },
    {
      title: 'The if and if-else statements',
      titleAr: 'جملتا if و if-else',
      minutes: 50,
      body: [
        { type: 'h', en: 'One-way if' },
        { type: 'p', en: 'An <code>if</code> statement runs a block only when its condition is true. The condition must be in parentheses and must be a Boolean expression. If it is false, the block is skipped and the program continues with the next statement.',
          ar: 'جملة if تنفذ الكتلة فقط إذا كان الشرط صحيحاً.' },
        { type: 'code', code: J`
if (boolean-expression) {
    statement(s);
}
` },
        { type: 'code', run: true, stdin: '85', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int grade = input.nextInt();
        if (grade >= 60) {
            System.out.println("You passed.");
        }
        System.out.println("Grade recorded: " + grade);
    }
}
`, out: J`
You passed.
Grade recorded: 85
` },
        { type: 'p', en: 'The braces may be left out when the block has only one statement, but then <b>only the first statement</b> belongs to the if, whatever the indentation suggests.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int temp = 15;
        if (temp > 30)
            System.out.println("Hot day");
            System.out.println("Drink water");   // NOT part of the if!
    }
}
`, out: 'Drink water' },
        { type: 'note', kind: 'warn', en: 'Never put a semicolon right after the condition: <code>if (grade &gt;= 60);</code> ends the if with an empty statement, and the block that follows <b>always</b> runs.',
          ar: 'لا تضع فاصلة منقوطة بعد شرط if.' },
        { type: 'h', en: 'Two-way if-else' },
        { type: 'p', en: 'An <code>if-else</code> statement chooses between two blocks: one for true and one for false. Exactly one of them runs.' },
        { type: 'code', run: true, stdin: '7', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        if (n % 2 == 0) {
            System.out.println(n + " is even");
        } else {
            System.out.println(n + " is odd");
        }
    }
}
`, out: '7 is odd' },
        { type: 'p', en: 'Here a bank account checks whether a withdrawal is possible before changing the balance:' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        double balance = 500.0;
        double amount = 650.0;
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawal done.");
        } else {
            System.out.println("Insufficient funds.");
        }
        System.out.println("Balance: " + balance);
    }
}
`, out: J`
Insufficient funds.
Balance: 500.0
` },
        { type: 'note', kind: 'tip', en: 'For a boolean variable write <code>if (isMember)</code> rather than <code>if (isMember == true)</code>, and <code>if (!isMember)</code> rather than <code>if (isMember == false)</code>. It is shorter and avoids the accidental <code>=</code>.' },
        { type: 'note', kind: 'exam', en: 'The compiler ignores indentation. To decide what belongs to an if or else, look only at the braces (or, without braces, at the single next statement).' }
      ],
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
int x = 4;
if (x > 5)
    System.out.println("A");
    System.out.println("B");
System.out.println("C");
`, answer: J`
B
C
`, explain: 'Without braces only <code>println("A")</code> belongs to the if. The condition is false, so A is skipped; B and C always run.' },
        { t: 'output', q: 'What is printed?', code: J`
int y = 2;
if (y > 10);
{
    System.out.println("Big");
}
System.out.println("Done");
`, answer: J`
Big
Done
`, explain: 'The semicolon after the condition is an empty statement, which is the whole body of the if. The block with "Big" is a separate block that always runs.' },
        { t: 'mcq', q: 'Assume <code>int x = 3;</code>. What happens with <code>if (x = 5) { ... }</code>?',
          options: ['The block runs because x becomes 5', 'The block is skipped', 'Compile error: int cannot be converted to boolean', 'Runtime error'], answer: 2,
          explain: '<code>x = 5</code> is an assignment whose value is an int, but an if condition must be boolean. Use <code>==</code> to compare.' },
        { t: 'fill', q: 'Complete the code so <code>max</code> holds the larger of <code>a</code> and <code>b</code>.', code: J`
if (a ___ b) {
    max = a;
} ___ {
    max = b;
}
`, answers: [['>', '>='], 'else'],
          explain: 'If a is larger, max is a; otherwise max is b.' },
        { t: 'order', q: 'Arrange the lines: if the balance covers the price, deduct the price and then print <code>Purchased</code>; otherwise print <code>Not enough money</code>.',
          lines: [
            'if (balance >= price) {',
            '    balance = balance - price;',
            '    System.out.println("Purchased");',
            '} else {',
            '    System.out.println("Not enough money");',
            '}'
          ],
          explain: 'The true block comes first, then <code>} else {</code>, then the false block, and a closing brace.' },
        { t: 'code', q: 'Read one integer and print <code>Even</code> if it is even or <code>Odd</code> if it is odd. Negative numbers are possible. Do not print any prompt.',
          qAr: 'اقرأ عدداً صحيحاً واطبع Even أو Odd. انتبه للأعداد السالبة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your if-else here
    }
}
`,
          tests: [
            { stdin: '8', expected: 'Even' },
            { stdin: '-3', expected: 'Odd' },
            { stdin: '0', expected: 'Even' }
          ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        if (n % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
    }
}
`,
          hint: 'Test <code>n % 2 == 0</code>. Testing <code>n % 2 == 1</code> fails for negative odd numbers, because <code>-3 % 2</code> is -1.',
          explain: 'A number is even when the remainder after dividing by 2 is zero; every other number is odd.' }
      ]
    },
    {
      title: 'Nested and multi-way if statements',
      titleAr: 'جمل if المتداخلة ومتعددة الفروع',
      minutes: 55,
      body: [
        { type: 'h', en: 'Nested if' },
        { type: 'p', en: 'An if statement can be placed inside another if or else block. The inner decision is only made when the outer condition leads to it.',
          ar: 'يمكن وضع جملة if داخل أخرى؛ ولا يُختبر الشرط الداخلي إلا إذا وصل التنفيذ إليه.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int age = 20;
        boolean hasLicense = false;
        if (age >= 18) {
            if (hasLicense) {
                System.out.println("You may drive.");
            } else {
                System.out.println("Get a license first.");
            }
        } else {
            System.out.println("Too young to drive.");
        }
    }
}
`, out: 'Get a license first.' },
        { type: 'h', en: 'Multi-way if-else' },
        { type: 'p', en: 'To choose among many alternatives, chain <code>else if</code> clauses. The conditions are tested from top to bottom; the <b>first</b> true condition runs its block and all the rest are skipped. The final <code>else</code> handles every remaining case.' },
        { type: 'code', run: true, stdin: '83', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int score = input.nextInt();
        String letter;
        if (score >= 90) {
            letter = "A";
        } else if (score >= 80) {
            letter = "B";
        } else if (score >= 70) {
            letter = "C";
        } else if (score >= 60) {
            letter = "D";
        } else {
            letter = "F";
        }
        System.out.println("Grade: " + letter);
    }
}
`, out: 'Grade: B' },
        { type: 'p', en: 'Because the first true condition wins, the order matters. In the second branch we already know that score is less than 90, so <code>score &gt;= 80</code> is enough. If the conditions are written in the wrong order, the program compiles but gives wrong answers:',
          ar: 'الترتيب مهم: يُنفذ أول فرع يتحقق شرطه فقط.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int score = 95;
        if (score >= 60)
            System.out.println("D");
        else if (score >= 70)
            System.out.println("C");
        else if (score >= 90)
            System.out.println("A");
    }
}
`, out: 'D' },
        { type: 'note', kind: 'exam', en: 'A chain of separate <code>if</code> statements is not the same as an <code>if / else if</code> chain: separate ifs are all tested, so several of them can run.' },
        { type: 'h', en: 'The dangling else' },
        { type: 'p', en: 'Rule: an <code>else</code> always matches the <b>nearest</b> previous <code>if</code> in the same block that does not already have an else. Indentation does not change this. Read the program below carefully.',
          ar: 'تتبع else أقرب if قبلها في الكتلة نفسها، بغض النظر عن المسافات البادئة.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int a = 5, b = -3;
        if (a > 0)
            if (b > 0)
                System.out.println("Both positive");
        else
            System.out.println("a is not positive");
    }
}
`, out: 'a is not positive' },
        { type: 'p', en: 'The else is indented as if it belonged to <code>if (a &gt; 0)</code>, but it actually belongs to <code>if (b &gt; 0)</code>. Since a is 5 and b is -3, the inner else runs and prints a misleading message. To attach the else to the outer if, use braces:' },
        { type: 'code', code: J`
if (a > 0) {
    if (b > 0)
        System.out.println("Both positive");
} else
    System.out.println("a is not positive");
` },
        { type: 'note', kind: 'tip', en: 'Always using braces for if and else blocks removes the dangling-else problem completely and makes later changes safer.' }
      ],
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
int x = -2, y = 4;
if (x > 0)
    if (y > 0)
        System.out.println("P");
else
    System.out.println("Q");
System.out.println("R");
`, answer: 'R',
          explain: 'The else belongs to <code>if (y &gt; 0)</code>, which is inside <code>if (x &gt; 0)</code>. Since x &gt; 0 is false, the whole inner if-else is skipped and only R is printed.' },
        { t: 'output', q: 'What is printed?', code: J`
int t = 38;
if (t >= 40)
    System.out.println("Very hot");
else if (t >= 30)
    System.out.println("Hot");
else if (t >= 20)
    System.out.println("Warm");
else
    System.out.println("Cool");
`, answer: 'Hot',
          explain: '38 &gt;= 40 is false; 38 &gt;= 30 is true, so "Hot" is printed and the rest of the chain is skipped.' },
        { t: 'mcq', q: 'What is printed when <code>x</code> is 15?', code: J`
if (x > 10) {
    if (x > 20)
        System.out.println("big");
    else
        System.out.println("medium");
} else {
    System.out.println("small");
}
`, options: ['big', 'medium', 'small', 'medium and small'], answer: 1,
          explain: '15 &gt; 10 is true, so we enter the outer block. 15 &gt; 20 is false, so the inner else prints "medium".' },
        { t: 'fill', q: 'Complete the multi-way if: speeds above 120 get a 900 fine, above 100 get a 300 fine, otherwise no fine.', code: J`
if (speed > 120) {
    System.out.println("Fine: 900");
} ___ (speed > 100) {
    System.out.println("Fine: 300");
} ___ {
    System.out.println("No fine");
}
`, answers: ['else if', 'else'],
          explain: 'The middle alternative is an <code>else if</code> with its own condition; the last one is a plain <code>else</code>.' },
        { t: 'code', q: 'Read an integer score from 0 to 100 and print its letter grade: 90 and above <code>A</code>, 80 to 89 <code>B</code>, 70 to 79 <code>C</code>, 60 to 69 <code>D</code>, below 60 <code>F</code>. Print only the letter. Do not print any prompt.',
          qAr: 'اقرأ الدرجة واطبع التقدير المناسب باستخدام if-else متعددة الفروع.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int score = input.nextInt();
        // multi-way if-else here
    }
}
`,
          tests: [
            { stdin: '95', expected: 'A' },
            { stdin: '80', expected: 'B' },
            { stdin: '59', expected: 'F' }
          ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int score = input.nextInt();
        if (score >= 90) {
            System.out.println("A");
        } else if (score >= 80) {
            System.out.println("B");
        } else if (score >= 70) {
            System.out.println("C");
        } else if (score >= 60) {
            System.out.println("D");
        } else {
            System.out.println("F");
        }
    }
}
`,
          hint: 'Start with the highest range and work down, so each <code>else if</code> only needs one comparison.',
          explain: 'Testing from the top down means that when we reach <code>score &gt;= 80</code> we already know the score is below 90.' }
      ]
    },
    {
      title: 'The switch statement and the conditional operator',
      titleAr: 'جملة switch والعامل الشرطي',
      minutes: 50,
      body: [
        { type: 'h', en: 'switch' },
        { type: 'p', en: 'A <code>switch</code> statement selects a branch by comparing one value with several constant <code>case</code> labels. The switch expression must be of type <code>char</code>, <code>byte</code>, <code>short</code>, <code>int</code> or <code>String</code> (not <code>double</code> or <code>boolean</code>). Each case usually ends with <code>break</code>, and the optional <code>default</code> runs when no case matches.',
          ar: 'تقارن switch قيمة واحدة بعدة ثوابت case، وتنهي break الفرع، وتنفذ default عند عدم التطابق.' },
        { type: 'code', run: true, stdin: '3', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int day = input.nextInt();
        switch (day) {
            case 1: System.out.println("Sunday"); break;
            case 2: System.out.println("Monday"); break;
            case 3: System.out.println("Tuesday"); break;
            case 4: System.out.println("Wednesday"); break;
            case 5: System.out.println("Thursday"); break;
            case 6: System.out.println("Friday"); break;
            case 7: System.out.println("Saturday"); break;
            default: System.out.println("Invalid day");
        }
    }
}
`, out: 'Tuesday' },
        { type: 'h', en: 'Fall-through' },
        { type: 'p', en: 'When a case matches, execution starts there and continues <b>downward through the following cases</b> until it reaches a <code>break</code> or the end of the switch. Forgetting a break is a common logic error:',
          ar: 'بدون break يستمر التنفيذ إلى الحالات التالية (fall-through).' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int day = 2;
        switch (day) {
            case 1: System.out.println("Sun");
            case 2: System.out.println("Mon");
            case 3: System.out.println("Tue"); break;
            default: System.out.println("Other");
        }
    }
}
`, out: J`
Mon
Tue
` },
        { type: 'p', en: 'Fall-through can also be useful: stacking several case labels lets them share one block.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        char grade = 'B';
        switch (grade) {
            case 'A':
            case 'B':
                System.out.println("Excellent or very good");
                break;
            case 'C':
            case 'D':
                System.out.println("Passed");
                break;
            case 'F':
                System.out.println("Failed");
                break;
            default:
                System.out.println("Invalid grade");
        }
    }
}
`, out: 'Excellent or very good' },
        { type: 'note', kind: 'exam', en: 'Case labels must be constants of the same type as the switch value, and no two can be equal. Ranges such as <code>case score &gt;= 90:</code> are not allowed; use a multi-way if for ranges.' },
        { type: 'h', en: 'The conditional operator ?:' },
        { type: 'p', en: 'The conditional operator chooses between two <b>values</b>: <code>condition ? value1 : value2</code>. If the condition is true the whole expression has value1, otherwise value2. It is the only Java operator with three operands, so it is also called the <b>ternary</b> operator.',
          ar: 'العامل الشرطي يختار قيمة: الشرط ? قيمة1 : قيمة2' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int a = 12, b = 9;
        int max = (a > b) ? a : b;
        System.out.println("Max: " + max);
        int score = 55;
        System.out.println(score >= 60 ? "Pass" : "Fail");
        int n = 7;
        String type = (n % 2 == 0) ? "even" : "odd";
        System.out.println(n + " is " + type);
    }
}
`, out: J`
Max: 12
Fail
7 is odd
` },
        { type: 'table', head: ['if-else', 'Same with ?:'], rows: [
          ['<code>if (a &gt; b) max = a; else max = b;</code>', '<code>max = (a &gt; b) ? a : b;</code>'],
          ['<code>if (n &lt; 0) sign = -1; else sign = 1;</code>', '<code>sign = (n &lt; 0) ? -1 : 1;</code>']
        ] },
        { type: 'note', kind: 'tip', en: 'Use <code>?:</code> for a short choice between two values. For actions or more than two alternatives, an if statement is clearer.' }
      ],
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
int code = 1;
switch (code) {
    case 1: System.out.println("One");
    case 2: System.out.println("Two"); break;
    case 3: System.out.println("Three");
    default: System.out.println("Default");
}
`, answer: J`
One
Two
`, explain: 'Case 1 matches and has no break, so execution falls through into case 2, which prints Two and then breaks.' },
        { t: 'output', q: 'What is printed? (Note where <code>default</code> is placed.)', code: J`
int x = 4;
switch (x) {
    case 3: System.out.println("three");
    default: System.out.println("other");
    case 5: System.out.println("five");
}
`, answer: J`
other
five
`, explain: 'No case equals 4, so execution jumps to default. There is no break after it, so it falls through into case 5 as well.' },
        { t: 'output', q: 'What is printed?', code: J`
int a = 4, b = 10;
int m = (a > b) ? a - b : b - a;
System.out.println(m);
System.out.println(a % 2 == 0 ? "even" : "odd");
`, answer: J`
6
even
`, explain: '4 &gt; 10 is false, so m = b - a = 6. 4 % 2 == 0 is true, so "even" is chosen.' },
        { t: 'mcq', q: 'Which type can <b>not</b> be used as the value of a switch statement?',
          options: ['<code>int</code>', '<code>char</code>', '<code>String</code>', '<code>double</code>'], answer: 3,
          explain: 'switch works with char, byte, short, int and String (and enums), but not with floating-point types or boolean.' },
        { t: 'fill', q: 'Rewrite with the conditional operator: <code>status</code> is "Overdrawn" when the balance is negative, otherwise "OK".', code: J`
String status = (balance < 0) ___ "Overdrawn" ___ "OK";
`, answers: ['?', ':'],
          explain: 'The form is <code>condition ? valueIfTrue : valueIfFalse</code>.' },
        { t: 'mcq', q: 'What happens when a matching case has no <code>break</code>?',
          options: ['A compile error', 'The switch ends anyway', 'Execution continues into the next case', 'The default case runs immediately'], answer: 2,
          explain: 'Without break, execution falls through to the statements of the following cases until a break or the end of the switch.' }
      ]
    }
  ],
  quiz: [
    { t: 'output', q: 'What is printed?', code: J`
System.out.println(3 + 4 > 6 && 10 % 3 == 1);
System.out.println(!(2 > 1) || 5 != 5);
`, answer: J`
true
false
`, explain: 'Line 1: 7 &gt; 6 is true and 10 % 3 == 1 is true, so true. Line 2: !(true) is false and 5 != 5 is false, so false.' },
    { t: 'mcq', q: 'Assume <code>int x = 3;</code>. After this code runs, what is the value of x?', code: J`
if (x > 5 && ++x > 0) {
    x = 100;
}
`, options: ['3', '4', '100', '101'], answer: 0,
      explain: 'x &gt; 5 is false, so <code>&amp;&amp;</code> short-circuits: <code>++x</code> is never evaluated and the block is skipped. x stays 3.' },
    { t: 'output', q: 'What is printed?', code: J`
int a = 7, b = 2;
if (a > 5)
    if (b > 5)
        System.out.println("X");
else
    System.out.println("Y");
System.out.println("Z");
`, answer: J`
Y
Z
`, explain: 'The else belongs to the nearest if, <code>if (b &gt; 5)</code>. a &gt; 5 is true and b &gt; 5 is false, so Y is printed, then Z.' },
    { t: 'output', q: 'What is printed?', code: J`
String city = "Jeddah";
switch (city) {
    case "Riyadh": System.out.println("Capital"); break;
    case "Jeddah": System.out.println("Port city");
    case "Dammam": System.out.println("Eastern"); break;
    default: System.out.println("Unknown");
}
`, answer: J`
Port city
Eastern
`, explain: 'The "Jeddah" case has no break, so execution falls through into the "Dammam" case, which then breaks.' },
    { t: 'output', q: 'What is printed?', code: J`
int t = 25;
if (t > 10)
    System.out.println("A");
else if (t > 20)
    System.out.println("B");
else
    System.out.println("C");
`, answer: 'A',
      explain: 't &gt; 10 is already true, so A is printed and the rest of the chain is skipped, even though t &gt; 20 is also true.' },
    { t: 'output', q: 'What is printed?', code: J`
int n = 50;
if (n > 10)
    System.out.println("big");
if (n > 40)
    System.out.println("bigger");
else
    System.out.println("small");
`, answer: J`
big
bigger
`, explain: 'These are two separate if statements, so both are tested. The else belongs only to the second if.' },
    { t: 'output', q: 'What is printed?', code: J`
int p = 15;
System.out.println(p > 10 ? p * 2 : p / 2);
`, answer: '30',
      explain: '15 &gt; 10 is true, so the value is p * 2 = 30.' },
    { t: 'mcq', q: 'Which expression is equivalent to <code>!(x &gt; 5 &amp;&amp; y &lt; 3)</code>?',
      options: ['<code>x &lt;= 5 || y &gt;= 3</code>', '<code>x &lt;= 5 &amp;&amp; y &gt;= 3</code>', '<code>x &lt; 5 || y &gt; 3</code>', '<code>!x &gt; 5 &amp;&amp; !y &lt; 3</code>'], answer: 0,
      explain: 'By De Morgan\'s law, not (A and B) equals (not A) or (not B). The negation of <code>x &gt; 5</code> is <code>x &lt;= 5</code>, and of <code>y &lt; 3</code> is <code>y &gt;= 3</code>.' },
    { t: 'mcq', q: 'Which case label is <b>not</b> allowed in a switch statement?',
      options: ['<code>case 1:</code>', '<code>case \'A\':</code>', '<code>case "Riyadh":</code>', '<code>case score &gt; 90:</code>'], answer: 3,
      explain: 'Case labels must be constant values. A comparison such as <code>score &gt; 90</code> is not a constant.' },
    { t: 'mcq', q: 'Which statement correctly stores the absolute value of <code>n</code> in <code>abs</code>?',
      options: ['<code>abs = (n &lt; 0) ? -n : n;</code>', '<code>abs = (n &lt; 0) : -n ? n;</code>', '<code>abs = (n &lt; 0) ? n : -n;</code>', '<code>abs = if (n &lt; 0) -n else n;</code>'], answer: 0,
      explain: 'The form is <code>condition ? valueIfTrue : valueIfFalse</code>. When n is negative we want -n, otherwise n itself. An if statement cannot be used as a value.' }
  ],
  lab: {
    t: 'code',
    q: 'Mini project: <b>Days in a month</b>. Read a year and a month number (1 to 12) on one line. If the month is not between 1 and 12, print <code>Invalid month</code>. Otherwise print <code>Days: N</code>, where N is the number of days in that month. Use a <code>switch</code> on the month. February has 29 days in a leap year and 28 otherwise; a year is a leap year if it is divisible by 4 but not by 100, or if it is divisible by 400. Do not print any prompt.',
    qAr: 'اقرأ السنة ورقم الشهر واطبع عدد أيام الشهر باستخدام switch، مع مراعاة السنة الكبيسة.',
    starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int year = input.nextInt();
        int month = input.nextInt();
        // use a switch on month
    }
}
`,
    tests: [
      { stdin: '2000 2', expected: 'Days: 29' },
      { stdin: '2025 4', expected: 'Days: 30' },
      { stdin: '2025 13', expected: 'Invalid month' }
    ],
    solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int year = input.nextInt();
        int month = input.nextInt();
        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
        int days = 0;
        switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                days = 31;
                break;
            case 4: case 6: case 9: case 11:
                days = 30;
                break;
            case 2:
                days = isLeap ? 29 : 28;
                break;
            default:
                days = 0;
        }
        if (days == 0) {
            System.out.println("Invalid month");
        } else {
            System.out.println("Days: " + days);
        }
    }
}
`,
    hint: 'Stack the case labels of months with the same length. Compute a boolean <code>isLeap</code> first and use <code>?:</code> for February.',
    explain: 'Grouped case labels share one block thanks to fall-through, the leap-year rule combines <code>&amp;&amp;</code> and <code>||</code>, and default catches invalid months.'
  },
  cheats: [
    { code: J`<  <=  >  >=  ==  !=`, note: 'Relational operators; the result is a boolean' },
    { code: J`!a    a && b    a || b    a ^ b`, note: 'not, and, or, exclusive or' },
    { code: J`x >= 1 && x <= 10`, note: 'Range test (1 <= x <= 10 does not compile)' },
    { code: J`
if (grade >= 60) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}
`, note: 'Two-way decision' },
    { code: J`
if (s >= 90) { ... }
else if (s >= 80) { ... }
else { ... }
`, note: 'Multi-way decision: the first true condition wins' },
    { code: J`
switch (day) {
    case 1: ...; break;
    case 2: ...; break;
    default: ...;
}
`, note: 'switch on char, byte, short, int or String; remember break' },
    { code: J`max = (a > b) ? a : b;`, note: 'Conditional operator chooses a value' }
  ],
  glossary: [
    { term: 'Boolean expression', ar: 'تعبير منطقي', def: 'An expression whose value is true or false.' },
    { term: 'boolean', ar: 'النوع المنطقي', def: 'The primitive type with the two values true and false.' },
    { term: 'Relational operator', ar: 'عامل مقارنة', def: 'An operator such as &lt;, &gt;= or == that compares two values.' },
    { term: 'Logical operator', ar: 'عامل منطقي', def: 'An operator (!, &amp;&amp;, ||, ^) that combines Boolean values.' },
    { term: 'Short-circuit evaluation', ar: 'التقييم المختصر', def: 'Skipping the right operand of &amp;&amp; or || when the left operand already decides the result.' },
    { term: 'Selection statement', ar: 'جملة اختيار', def: 'A statement that chooses which code to run based on a condition.' },
    { term: 'if statement', ar: 'جملة if', def: 'Runs a block only when its condition is true.' },
    { term: 'if-else statement', ar: 'جملة if-else', def: 'Runs one of two blocks depending on a condition.' },
    { term: 'Nested if', ar: 'if متداخلة', def: 'An if statement placed inside another if or else block.' },
    { term: 'Multi-way if-else', ar: 'if-else متعددة الفروع', def: 'A chain of else if clauses that picks the first true alternative.' },
    { term: 'Dangling else', ar: 'else المعلقة', def: 'The ambiguity of an else after nested ifs; Java matches it with the nearest unmatched if.' },
    { term: 'switch statement', ar: 'جملة switch', def: 'Selects a branch by matching a value against constant case labels.' },
    { term: 'Fall-through', ar: 'الانسياب إلى الحالة التالية', def: 'Continuing into the next case of a switch because no break was reached.' },
    { term: 'Conditional operator', ar: 'العامل الشرطي', def: 'The ternary operator condition ? value1 : value2.' },
    { term: 'De Morgan\'s law', ar: 'قانون دي مورغان', def: 'not (A and B) equals (not A) or (not B); not (A or B) equals (not A) and (not B).' }
  ]
});
