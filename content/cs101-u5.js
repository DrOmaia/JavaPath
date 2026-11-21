JP.unit({
  course: 'cs101',
  n: 5,
  title: 'Loops',
  titleAr: 'الحلقات التكرارية',
  intro: "Loops let a program repeat work: read 40 grades, add up a bill, keep asking until the input is valid, or draw a table. In this unit you will master the while, do-while and for loops, counter- and sentinel-controlled repetition, accumulators, nested loops, break and continue, and learn how to avoid the classic off-by-one mistakes. Then you will use loops on text and on the digits of numbers, solve classic problems (primes, GCD, Fibonacci), build small simulations and games, and learn to plan any loop with four questions.",
  introAr: 'الحلقات تجعل البرنامج يكرر العمل: قراءة الدرجات، جمع الفواتير، التحقق من المدخلات، ورسم الجداول. ستتعلم حلقات while و do-while و for، والتكرار بعداد أو بقيمة حارسة، والمجمّعات، والحلقات المتداخلة، و break و continue، وتجنب أخطاء الفرق بواحد. ثم تستخدم الحلقات على النصوص وأرقام الأعداد، وتحل مسائل مشهورة، وتبني ألعاباً بسيطة، وتخطط لأي حلقة بأربعة أسئلة.',
  lessons: [
    {
      title: 'Your first while loop',
      titleAr: 'أول حلقة while',
      minutes: 40,
      body: [
        { type: 'h', en: 'Why do we need loops?' },
        { type: 'p', en: 'Imagine you must print the word "Hello" 100 times. You could write 100 lines of <code>System.out.println</code>. That is slow and boring. A <b>loop</b> lets you write the instruction once and tell Java: "repeat this". Programs use loops all the time: to read 40 marks, to add up a shopping bill, or to keep asking until a password is correct.',
          ar: 'الحلقة تجعل Java تكرر التعليمات بدل أن تكتبها مرات كثيرة.' },
        { type: 'p', en: 'In this lesson you meet the simplest loop: the <b>while</b> loop. It repeats its work <b>while</b> a condition is true, just like the English word. Each time the work is done once is called one <b>pass</b> (programmers also say one <b>iteration</b>). When the condition becomes false, the loop ends and Java goes on with the next line after the loop.' },
        { type: 'p', en: 'Think of the jobs a computer does for a teacher: print a certificate for each of 35 students, add 35 marks, check 35 attendance records. The work is the same for every student; only the student changes. That is the perfect job for a loop.',
          ar: 'كل مرة يُنفَّذ فيها جسم الحلقة تسمى دورة أو تكراراً.' },
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
        { type: 'p', en: 'The order matters. Java does: question, body, back up; question, body, back up; ... until the answer to the question is "no". Then it jumps over the body to the line after the closing brace <code>}</code>.' },
        { type: 'memory', title: 'Watch the box called count', en: 'A variable is a box with a name. Press Next to see what is in the box <code>count</code> after each pass. The loop stops when the box holds 4.',
          code: J`
int count = 1;
while (count <= 3) {
    System.out.println("Hello");
    count++;
}`,
          frames: [
            { label: 'After <code>int count = 1;</code> (before the loop)', vars: [{ name: 'count', type: 'int', value: '1' }] },
            { label: 'Pass 1: 1 &lt;= 3 is true. Printed Hello, then <code>count++</code>', vars: [{ name: 'count', type: 'int', value: '2' }] },
            { label: 'Pass 2: 2 &lt;= 3 is true. Printed Hello, then <code>count++</code>', vars: [{ name: 'count', type: 'int', value: '3' }] },
            { label: 'Pass 3: 3 &lt;= 3 is true. Printed Hello, then <code>count++</code>', vars: [{ name: 'count', type: 'int', value: '4' }] },
            { label: 'Question again: 4 &lt;= 3 is false. The loop ends; count stays 4', vars: [{ name: 'count', type: 'int', value: '4' }] }
          ], ar: 'لاحظ{{g:|ي}} أن قيمة count تزيد واحداً في كل دورة حتى يصبح الشرط خاطئاً.' },
        { type: 'check', q: 'In the loop above, what happens when count becomes 4?', options: ['Hello is printed a fourth time', 'The condition is false, so the loop stops', 'Java shows an error', 'count goes back to 1'], answer: 1,
          explain: '4 &lt;= 3 is false, so Java skips the body and continues after the closing brace.', hint: 'Ask the question: is 4 &lt;= 3?' },
        { type: 'h', en: 'while is an if that repeats' },
        { type: 'p', en: 'You already know <code>if</code> from Unit 3. An <code>if</code> asks its question <b>once</b>: if the answer is yes, the block runs one time, and that is all. A <code>while</code> asks the <b>same kind of question</b>, but after the block it goes back and asks again. Same condition, same braces; the only new idea is "go back up".' },
        { type: 'code', code: J`
int count = 1;
if (count <= 3) {            // asks once
    System.out.println("Hello");
    count++;
}
// Hello is printed only 1 time` },
        { type: 'table', head: ['', 'if', 'while'], rows: [
          ['How many times is the question asked?', 'once', 'again after every pass'],
          ['How many times can the block run?', '0 or 1', '0, 1, 2, 3, ... many'],
          ['Condition type', 'true / false', 'true / false (the same)']
        ] },
        { type: 'p', en: 'So if you can write an <code>if</code>, you can already write a <code>while</code>: change the word, and make sure something inside the block changes the answer.',
          ar: 'جملة while مثل if لكنها تعود وتسأل الشرط مرة أخرى بعد كل تنفيذ.' },
        { type: 'check', q: 'We change <code>while</code> to <code>if</code> in the Hello program. How many times is Hello printed?', options: ['0', '1', '3', 'Forever'], answer: 1,
          explain: 'An if asks once. 1 &lt;= 3 is true, so the block runs one time and Java never goes back up.', hint: 'Does an if go back up?' },
        { type: 'h', en: 'Three parts: start, question, change' },
        { type: 'p', en: 'Almost every while loop has three parts. Remember them as <b>start, question, change</b>. If one part is missing, the loop usually breaks.' },
        { type: 'table', head: ['Part', 'Name', 'In our loop'], rows: [
          ['Start', 'Initialize the control variable', '<code>int count = 1;</code>'],
          ['Question', 'Test (condition)', '<code>count &lt;= 3</code>'],
          ['Change', 'Update the control variable', '<code>count++;</code>']
        ] },
        { type: 'p', en: 'The variable that the question checks is called the <b>control variable</b>, because it controls when the loop stops. What goes wrong when a part is missing?' },
        { type: 'list', items: [
          '<b>No start</b>: Java refuses to compile, because the question uses a variable that has no value yet.',
          '<b>Wrong question</b>: the loop runs too few times, too many times, or not at all.',
          '<b>No change</b>: the answer to the question never changes, so the loop never stops.'
        ], ar: 'إذا نقص جزء من الأجزاء الثلاثة فسدت الحلقة.' },
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
        { type: 'h', en: 'A loop that remembers a total' },
        { type: 'p', en: 'The body can also change a second variable. Here a runner trains on a 400-metre track. After each lap we want to show how far she has run <b>so far</b>. A variable <code>distance</code> starts at 0 and grows by 400 in every pass. A variable that grows like this is called a <b>running total</b>; you will meet it many times in this unit.',
          ar: 'المتغير distance يبدأ بصفر ويزيد 400 في كل دورة، ويسمى مجموعاً تراكمياً.' },
        { type: 'analogy', title: 'The distance screen', en: 'A treadmill in a gym shows the distance on a small screen. At the start it shows 0. Every time you finish a lap, the number grows. The screen never goes back to 0 in the middle of your run. <code>distance</code> is that screen.' },
        { type: 'steps', title: 'Worked example: laps around the track', problem: 'A runner does 5 laps of a 400-metre track. After every lap print the lap number and the total distance so far. At the end print the total.',
          steps: [
            { en: 'Two variables: the lap counter (starts at 1) and the distance so far (starts at 0, nothing run yet).', code: 'int lap = 1;\nint distance = 0;' },
            { en: 'The question: keep going while the lap number is at most 5.', code: 'while (lap <= 5) {' },
            { en: 'In each pass: add 400 metres, then print the lap and the distance.', code: '    distance += 400;\n    System.out.println("Lap " + lap + ": " + distance + " m");' },
            { en: 'Change the counter, close the loop, and print the total <b>after</b> the loop (so it is printed once).', code: '    lap++;\n}\nSystem.out.println("Total: " + distance + " m");' },
            { en: 'Trace: lap 1 gives 400, lap 2 gives 800, lap 3 gives 1200, lap 4 gives 1600, lap 5 gives 2000. Then lap is 6 and 6 &lt;= 5 is false.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int lap = 1;
        int distance = 0;
        while (lap <= 5) {
            distance += 400;
            System.out.println("Lap " + lap + ": " + distance + " m");
            lap++;
        }
        System.out.println("Total: " + distance + " m");
    }
}`, out: "Lap 1: 400 m\nLap 2: 800 m\nLap 3: 1200 m\nLap 4: 1600 m\nLap 5: 2000 m\nTotal: 2000 m",
          ar: 'ما يُكتب داخل الحلقة يتكرر، وما يُكتب بعدها يُنفَّذ مرة واحدة.' },
        { type: 'memory', title: 'lap and distance, pass by pass', en: 'Two boxes change in every pass: <code>lap</code> goes up by 1 and <code>distance</code> goes up by 400.', frames: [
          { label: 'Before the loop', vars: [{ name: 'lap', type: 'int', value: '1' }, { name: 'distance', type: 'int', value: '0' }] },
          { label: 'After pass 1 (printed "Lap 1: 400 m")', vars: [{ name: 'lap', type: 'int', value: '2' }, { name: 'distance', type: 'int', value: '400' }] },
          { label: 'After pass 2 (printed "Lap 2: 800 m")', vars: [{ name: 'lap', type: 'int', value: '3' }, { name: 'distance', type: 'int', value: '800' }] },
          { label: 'After pass 3 (printed "Lap 3: 1200 m")', vars: [{ name: 'lap', type: 'int', value: '4' }, { name: 'distance', type: 'int', value: '1200' }] },
          { label: 'After pass 5: 6 &lt;= 5 is false, the loop ends', vars: [{ name: 'lap', type: 'int', value: '6' }, { name: 'distance', type: 'int', value: '2000' }] }
        ] },
        { type: 'check', q: 'In the laps program, we move <code>System.out.println("Total: " + distance + " m");</code> <b>inside</b> the loop, just before <code>lap++</code>. How many times is the Total line printed?', options: ['1', '4', '5', '6'], answer: 2,
          explain: 'Everything inside the braces runs once per pass. There are 5 passes, so the Total line is printed 5 times.', hint: 'How many passes are there?' },
        { type: 'note', kind: 'warn', en: 'If you forget <code>count++</code>, the counter never changes, the question is always "true", and the loop runs forever. This is called an <b>infinite loop</b>. If it happens, stop the program with the Stop button or Ctrl+C.',
          ar: 'نسيان تحديث العداد يسبب حلقة لا تنتهي.' },
        { type: 'note', kind: 'tip', en: 'Move the body 4 spaces to the right (indent it). Java does not need this, but your eyes do: one look tells you which lines repeat and which line runs after the loop.' }
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
public class Main {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 3) {
            System.out.println(i);
            i++;
        }
    }
}`, answer: "1\n2\n3", explain: 'i is 1, 2 and 3. When i is 4 the condition is false.' },
        { t: 'mcq', q: 'How many times is "Hi" printed?', code: J`
int c = 1;
while (c <= 4) {
    System.out.println("Hi");
    c++;
}`, options: ['3', '4', '5', 'Forever'], answer: 1, explain: 'c is 1, 2, 3, 4: four times. When c is 5 the loop stops.' },
        { t: 'output', q: 'What is the output? (print adds no new line.)', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 3;
        while (n > 0) {
            System.out.print(n + " ");
            n--;
        }
        System.out.println("Go");
    }
}`, answer: '3 2 1 Go', explain: 'n goes 3, 2, 1. At 0 the condition n &gt; 0 is false. Then "Go" is printed on the same line.' },
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
          explain: 'The counter i starts at 1 and the loop continues while i is not bigger than n.' },
        { t: 'bug', q: 'This program should print Bottle 1, Bottle 2, Bottle 3 and then Done. When it runs, nothing is printed and it never stops. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int bottles = 1;
        while (bottles <= 3); {
            System.out.println("Bottle " + bottles);
            bottles++;
        }
        System.out.println("Done");
    }
}`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        int bottles = 1;
        while (bottles <= 3) {
            System.out.println("Bottle " + bottles);
            bottles++;
        }
        System.out.println("Done");
    }
}`, hint: 'Look at the end of the while line.',
          explain: 'The semicolon after <code>while (bottles &lt;= 3)</code> is an empty body. Java repeats "nothing" again and again. <code>bottles</code> stays 1, so 1 &lt;= 3 is always true and the program hangs. The block below is never reached. Remove the semicolon and the block becomes the body: it prints three bottles, then Done.',
          explainAr: 'الفاصلة المنقوطة بعد الشرط تجعل جسم الحلقة فارغاً فلا يتغير العداد أبداً.' },
        { t: 'bug', q: 'This program should print the price of 1, 2, 3, 4 and 5 cups of tea (4 riyals each). It prints only 4 lines. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int cups = 1;
        while (cups < 5) {
            System.out.println(cups + " cups: " + cups * 4 + " riyals");
            cups++;
        }
    }
}`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        int cups = 1;
        while (cups <= 5) {
            System.out.println(cups + " cups: " + cups * 4 + " riyals");
            cups++;
        }
    }
}`, hint: 'What happens when cups is 5?',
          explain: 'When cups is 5, the question 5 &lt; 5 is false, so the fifth line is never printed. This is an <b>off-by-one</b> error. With <code>cups &lt;= 5</code>, the value 5 is included and the program prints 5 lines (the last one is "5 cups: 20 riyals").',
          explainAr: 'الشرط &lt; يستبعد القيمة 5، والصحيح &lt;= لتدخل 5.' },
        { t: 'output', q: 'What is the output? Watch the value of n after the loop.', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 1;
        int total = 0;
        while (n <= 4) {
            total += 10;
            System.out.println(n + " -> " + total);
            n++;
        }
        System.out.println("n = " + n);
    }
}`, answer: "1 -> 10\n2 -> 20\n3 -> 30\n4 -> 40\nn = 5",
          explain: 'In each pass total grows by 10 and n grows by 1. The loop stops when n is 5 (5 &lt;= 4 is false), and n keeps the value 5 after the loop.' },
        { t: 'code', q: 'Read an integer <code>n</code> and print <code>n</code> stars on <b>one</b> line, using a while loop. Do not print any prompt.<br>Example for <code>5</code>: <code>*****</code>',
          qAr: 'اقرأ n واطبع n نجمة في سطر واحد باستخدام while.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '5', expected: '*****' }, { stdin: '1', expected: '*' }, { stdin: '3', expected: '***' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int count = 1;
        while (count <= n) {
            System.out.print("*");
            count++;
        }
        System.out.println();
    }
}`, hint: 'Use <code>print</code> (not println) inside the loop, and one <code>println()</code> after the loop.',
          explain: '<code>print</code> keeps all the stars on the same line. The loop runs n times, so n stars appear. The last <code>println()</code> ends the line.' }
      ]
    },
    {
      title: 'Tracing while loops by hand',
      titleAr: 'تتبع حلقة while بخطوات يدوية',
      minutes: 40,
      body: [
        { type: 'h', en: 'Be the computer' },
        { type: 'p', en: 'When a loop gives a strange answer, the best tool is <b>tracing</b>: you act like the computer and write down every variable after every step. A pencil and a table are enough. If you can trace a loop, you can understand any loop.',
          ar: 'التتبع: تتصرف{{g:|ين}} كالحاسوب وتكتب{{g:|ين}} قيم المتغيرات في جدول.' },
        { type: 'analogy', title: 'Your finger on the page', en: 'When you read a timetable you put your finger on one row at a time. A trace table is your finger: one row for each time Java asks the question. You write what each variable is, and what changes.',
          ar: 'جدول التتبع مثل إصبعك على الصفحة: صف واحد في كل مرة.' },
        { type: 'p', en: 'Tracing is also the fastest way to answer exam questions such as "What is the output?" or "What is x after the loop?". Students who guess often lose marks by one pass. Students who trace almost never do.' },
        { type: 'list', items: [
          '<b>1.</b> Make one column for each variable, one for the question (true / false), and one for the output.',
          '<b>2.</b> Write a <b>start</b> row with the values before the loop.',
          '<b>3.</b> For each check of the question, write a new row: is it true? If yes, run the body and write the new values.',
          '<b>4.</b> Stop at the <b>first</b> false. Then run the lines after the loop.'
        ], ar: 'أربع خطوات: أعمدة للمتغيرات، صف البداية، صف لكل فحص، والتوقف عند أول false.' },
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
        { type: 'memory', title: 'The same trace as boxes', en: 'The trace table and the memory picture tell the same story. Here you see the two boxes after each pass.', frames: [
          { label: 'Before the loop', vars: [{ name: 'x', type: 'int', value: '1' }, { name: 'total', type: 'int', value: '0' }] },
          { label: 'Pass 1: <code>total = 0 + 1</code>, then <code>x++</code>', vars: [{ name: 'x', type: 'int', value: '2' }, { name: 'total', type: 'int', value: '1' }] },
          { label: 'Pass 2: <code>total = 1 + 2</code>, then <code>x++</code>', vars: [{ name: 'x', type: 'int', value: '3' }, { name: 'total', type: 'int', value: '3' }] },
          { label: 'Pass 3: <code>total = 3 + 3</code>, then <code>x++</code>', vars: [{ name: 'x', type: 'int', value: '4' }, { name: 'total', type: 'int', value: '6' }] },
          { label: '4 &lt;= 3 is false: the loop ends and 6 is printed', vars: [{ name: 'x', type: 'int', value: '4' }, { name: 'total', type: 'int', value: '6' }] }
        ], ar: 'المتغير total يحتفظ بالمجموع ويكبر في كل دورة.' },
        { type: 'check', q: 'After the loop ends, what is the value of x?', options: ['3', '4', '6', '0'], answer: 1,
          explain: 'The loop stops when x is 4 (the first value that makes x &lt;= 3 false). x is still 4 after the loop.', hint: 'Look at the last row of the table.' },
        { type: 'h', en: 'The question can check any variable' },
        { type: 'p', en: 'The variable in the question does not have to be a simple counter. A student walks 2000 steps on day 1 and adds 1000 steps every day. On which day does she reach 5000 steps? Here the question checks <code>steps</code>, and <code>day</code> only counts. Trace it with an output column.',
          ar: 'الشرط قد يفحص أي متغير، وليس العداد فقط.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int day = 1;
        int steps = 2000;
        while (steps < 5000) {
            System.out.println("Day " + day + ": " + steps);
            steps += 1000;
            day++;
        }
        System.out.println("Goal on day " + day);
    }
}`, out: "Day 1: 2000\nDay 2: 3000\nDay 3: 4000\nGoal on day 4" },
        { type: 'table', head: ['Check', 'day', 'steps', 'steps &lt; 5000 ?', 'Output', 'After body'], rows: [
          ['1st', '1', '2000', 'true', 'Day 1: 2000', 'steps 3000, day 2'],
          ['2nd', '2', '3000', 'true', 'Day 2: 3000', 'steps 4000, day 3'],
          ['3rd', '3', '4000', 'true', 'Day 3: 4000', 'steps 5000, day 4'],
          ['4th', '4', '5000', 'false', '(loop ends)', ''],
          ['after', '4', '5000', '', 'Goal on day 4', '']
        ] },
        { type: 'p', en: 'Look at the 4th check: 5000 &lt; 5000 is <b>false</b> (5000 is not smaller than itself). So "Day 4" is never printed inside the loop, but day is already 4 when the last line runs.' },
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
        { type: 'p', en: 'Two things to notice. First, the loop never prints 0: it jumps from 1 straight to -2. A jumping loop does not have to land exactly on the stop value; it stops at the first value that makes the question false. Second, after the loop <code>n</code> is -2, not 1. Exam questions love to ask for this value.',
          ar: 'الحلقة تتوقف عند أول قيمة تجعل الشرط خاطئاً، حتى لو لم تصل إلى الصفر تماماً.' },
        { type: 'check', q: 'What does <code>n -= 3;</code> mean?', options: ['Set n to 3', 'Subtract 3 from n', 'Compare n with 3', 'Print n minus 3'], answer: 1,
          explain: '<code>n -= 3</code> is short for <code>n = n - 3</code>.', hint: 'Compare with <code>sum += x</code> from earlier units.' },
        { type: 'p', en: 'The change can even multiply. A small plant doubles its height every week: 1 cm, 2 cm, 4 cm, ... Which heights do we see while it is still under 100 cm? The change is <code>h *= 2</code> (short for <code>h = h * 2</code>).' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int h = 1;
        while (h < 100) {
            System.out.print(h + " ");
            h *= 2;
        }
        System.out.println();
        System.out.println("Stopped at " + h);
    }
}`, out: "1 2 4 8 16 32 64\nStopped at 128" },
        { type: 'p', en: 'Trace the values of <code>h</code>: 1, 2, 4, 8, 16, 32, 64 (all true), then 128. 128 &lt; 100 is false, so 128 is not printed in the loop, but it is the value of h after the loop.',
          ar: 'التغيير قد يكون ضرباً أيضاً: h *= 2 تضاعف القيمة.' },
        { type: 'check', q: 'With <code>int h = 1; while (h &lt; 20) { h *= 3; }</code>, what is h after the loop?', options: ['9', '20', '27', '3'], answer: 2,
          explain: 'h is 1, then 3, then 9 (all &lt; 20), then 27. 27 &lt; 20 is false, so the loop ends with h = 27.', hint: 'Multiply by 3 until the value is 20 or more.' },
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
        { type: 'p', en: 'Zero passes is often exactly what we want. In the next example, imagine that <code>saved</code> starts at 120 riyals instead of 0. You need 0 weeks of saving. The question 120 &lt; 100 is false at once, the loop does nothing, and the program prints <code>Weeks: 0</code>, which is the right answer.' },
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
        { type: 'analogy', title: 'Two friends in a corridor', en: 'Two friends stand at the two ends of a long corridor and walk towards each other. One takes big steps, the other small steps. When they meet, they stop. The next loop has two variables that move towards each other in the same way.' },
        { type: 'steps', title: 'Worked example: trace a loop with two moving variables', problem: 'Without running it, find the output of this loop. Build the trace table step by step.<br><code>int a = 1; int b = 10; while (a &lt; b) { a += 2; b -= 1; } System.out.println(a + " " + b);</code>',
          steps: [
            { en: 'Columns: a, b, the question <code>a &lt; b</code>. Start row: a = 1, b = 10.' },
            { en: 'Check 1: 1 &lt; 10 is true. Body: a becomes 3, b becomes 9.' },
            { en: 'Check 2: 3 &lt; 9 is true. Body: a becomes 5, b becomes 8.' },
            { en: 'Check 3: 5 &lt; 8 is true. Body: a becomes 7, b becomes 7.' },
            { en: 'Check 4: 7 &lt; 7 is <b>false</b> (equal is not smaller). The loop ends after 3 passes. The output is <code>7 7</code>.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int a = 1;
        int b = 10;
        while (a < b) {
            a += 2;
            b -= 1;
        }
        System.out.println(a + " " + b);
    }
}`, out: '7 7', ar: 'تتبّع{{g:|ي}} المتغيرين معاً في كل دورة، وتوقف{{g:|ي}} عند أول شرط خاطئ.' },
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
        ] },
        { type: 'memory', title: 'number gets shorter, sum gets bigger', en: 'In each pass one digit moves from <code>number</code> into <code>sum</code>.', frames: [
          { label: 'Before the loop', vars: [{ name: 'number', type: 'int', value: '482' }, { name: 'sum', type: 'int', value: '0' }] },
          { label: 'Pass 1: add 482 % 10 = 2, then 482 / 10 = 48', vars: [{ name: 'number', type: 'int', value: '48' }, { name: 'sum', type: 'int', value: '2' }] },
          { label: 'Pass 2: add 48 % 10 = 8, then 48 / 10 = 4', vars: [{ name: 'number', type: 'int', value: '4' }, { name: 'sum', type: 'int', value: '10' }] },
          { label: 'Pass 3: add 4 % 10 = 4, then 4 / 10 = 0', vars: [{ name: 'number', type: 'int', value: '0' }, { name: 'sum', type: 'int', value: '14' }] },
          { label: '0 &gt; 0 is false: the loop ends', vars: [{ name: 'number', type: 'int', value: '0' }, { name: 'sum', type: 'int', value: '14' }] }
        ] },
        { type: 'note', kind: 'tip', en: 'You will practise digit loops much more in the lesson "Loops over the digits of a number" at the end of this unit.' }
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
public class Main {
    public static void main(String[] args) {
        int k = 2;
        while (k <= 8) {
            System.out.print(k + " ");
            k += 2;
        }
    }
}`, answer: '2 4 6 8', explain: 'k is 2, 4, 6, 8, then 10. 10 &lt;= 8 is false.' },
        { t: 'mcq', q: 'How many times does the body run?', code: J`
int i = 10;
while (i < 10) {
    System.out.println(i);
    i++;
}`, options: ['0', '1', '10', 'Forever'], answer: 0, explain: 'The first check 10 &lt; 10 is false, so the body never runs.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int k = 1;
        while (k < 20) {
            System.out.print(k + " ");
            k *= 3;
        }
    }
}`, answer: '1 3 9', explain: 'k takes 1, 3, 9 and then 27. 27 &lt; 20 is false, so 27 is not printed.' },
        { t: 'fill', q: 'Complete the loop so it prints the even numbers 2, 4, 6, ..., 20 (one per line).', code: J`
int n = 2;
while (n ___ 20) {
    System.out.println(n);
    n ___ 2;
}`, answers: ['<=', '+='], explain: 'Use <code>&lt;=</code> so 20 is included and add 2 each time.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int x = 5;
        int f = 1;
        while (x > 1) {
            f *= x;
            x--;
        }
        System.out.println(f);
    }
}`, answer: '120', explain: 'f = 5 * 4 * 3 * 2 = 120. The loop stops when x is 1.' },
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
          explain: 'The loop prints n and makes it smaller until it reaches 0. "Go" is printed once, after the loop.' },
        { t: 'bug', q: 'This countdown should print <code>10 8 6 4 2 Liftoff</code>. Instead it never stops. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int n = 10;
        while (n > 0) {
            System.out.print(n + " ");
            n += 2;
        }
        System.out.println("Liftoff");
    }
}`, bug: 6,
          fix: J`
public class Main {
    public static void main(String[] args) {
        int n = 10;
        while (n > 0) {
            System.out.print(n + " ");
            n -= 2;
        }
        System.out.println("Liftoff");
    }
}`, hint: 'Does n move towards the stop value or away from it?',
          explain: 'With <code>n += 2</code>, n becomes 12, 14, 16, ... It moves <b>away</b> from 0, so <code>n &gt; 0</code> is always true and the loop never ends. With <code>n -= 2</code>, n goes 10, 8, 6, 4, 2, 0, and 0 &gt; 0 is false.',
          explainAr: 'يجب أن يتحرك المتغير نحو قيمة التوقف، أي أن ينقص لا أن يزيد.' },
        { t: 'bug', q: 'This program should print the sum of the digits of 731 (that is 11). It never stops. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int number = 731;
        int sum = 0;
        while (number > 0) {
            sum += number % 10;
            number %= 10;
        }
        System.out.println(sum);
    }
}`, bug: 7,
          fix: J`
public class Main {
    public static void main(String[] args) {
        int number = 731;
        int sum = 0;
        while (number > 0) {
            sum += number % 10;
            number /= 10;
        }
        System.out.println(sum);
    }
}`, hint: 'Which operator removes the last digit: % or / ?',
          explain: '<code>number %= 10</code> keeps only the last digit: 731 becomes 1, then 1 % 10 is still 1, forever. The number never reaches 0. To <b>remove</b> the last digit we divide: <code>number /= 10</code> gives 73, 7, 0. Then the sum is 1 + 3 + 7 = 11.',
          explainAr: 'العملية % تعطي آخر رقم، أما / 10 فهي التي تحذفه.' },
        { t: 'output', q: 'Trace this loop with a table. What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int x = 100;
        int count = 0;
        while (x > 10) {
            x /= 2;
            count++;
        }
        System.out.println(count + " " + x);
    }
}`, answer: '4 6',
          explain: 'x goes 100, 50, 25, 12, 6 (integer division: 25 / 2 = 12, 12 / 2 = 6). That is 4 passes. Then 6 &gt; 10 is false, so the output is <code>4 6</code>.' }
      ]
    },
    {
      title: 'Sentinel loops: stop when the user says stop',
      titleAr: 'القيمة الحارسة: التوقف عند إشارة المستخدم',
      minutes: 40,
      body: [
        { type: 'h', en: 'When we do not know how many values' },
        { type: 'p', en: 'A teacher wants to enter exam marks. Today there are 12 students, tomorrow 40. The program cannot know the number in advance. Solution: the teacher types a special value, such as <code>-1</code>, to say "no more marks". This special value is called a <b>sentinel</b>.',
          ar: 'القيمة الحارسة قيمة خاصة تعني: توقف، مثل -1 عند إدخال الدرجات.' },
        { type: 'analogy', title: 'The "THE END" card', en: 'A pile of exam papers has a red card at the bottom. You mark paper after paper. When you see the red card you know the pile is finished. The red card is not an exam paper; it is only a signal. The sentinel is that red card.',
          ar: 'البطاقة الحمراء في نهاية الأوراق هي القيمة الحارسة.' },
        { type: 'p', en: 'So there are two kinds of repetition. In <b>counter-controlled</b> repetition we know the number of passes before the loop starts ("print 5 lines", "read 30 marks"). In <b>sentinel-controlled</b> repetition we do not know it; the data itself tells us when to stop.' },
        { type: 'table', head: ['', 'Counter-controlled', 'Sentinel-controlled'], rows: [
          ['Do we know the number of passes?', 'yes, before the loop', 'no'],
          ['What stops the loop?', 'the counter reaches its limit', 'a special value is read'],
          ['Example', 'print the price of 1 to 5 kg', 'read marks until -1']
        ] },
        { type: 'p', en: 'In this lesson the loop question is not about a counter any more. It is about the <b>last value read</b>: "Is it the stop signal?"',
          ar: 'في التكرار بقيمة حارسة لا نعرف عدد المرات مسبقاً؛ البيانات نفسها تخبرنا متى نتوقف.' },
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
        { type: 'p', en: 'Why do we need a read <b>before</b> the loop? The question <code>mark != -1</code> must look at a value. Without the priming read, <code>mark</code> has no value at the first check and Java will not compile the program. And why a read at the <b>end</b> of the body? Because that read is the "change" part of this loop. It gives the question a new value to look at, exactly like <code>count++</code> did in a counter loop.' },
        { type: 'memory', title: 'One box, many values', en: 'Input: <code>80 95 -1</code>. The box <code>mark</code> is reused: each read puts a new value in it and the old value is gone.', frames: [
          { label: 'Priming read: <code>mark = input.nextInt();</code>', vars: [{ name: 'mark', type: 'int', value: '80' }] },
          { label: 'Pass 1 printed "Got 80", then the read at the end', vars: [{ name: 'mark', type: 'int', value: '95' }] },
          { label: 'Pass 2 printed "Got 95", then the read at the end', vars: [{ name: 'mark', type: 'int', value: '-1' }] },
          { label: '-1 != -1 is false: the loop ends and "Done" is printed', vars: [{ name: 'mark', type: 'int', value: '-1' }] }
        ] },
        { type: 'table', head: ['Check', 'mark', 'mark != -1 ?', 'Printed'], rows: [
          ['1st', '80', 'true', 'Got 80'],
          ['2nd', '95', 'true', 'Got 95'],
          ['3rd', '-1', 'false', '(stop)']
        ] },
        { type: 'check', q: 'What does the loop do with the value -1?', options: ['Prints "Got -1"', 'Stops without printing it', 'Skips it and keeps reading', 'Shows an error'], answer: 1,
          explain: 'The question mark != -1 is false for -1, so the loop ends and -1 is never used as data.', hint: 'Look at the third row of the table.' },
        { type: 'note', kind: 'tip', en: 'Remember the order inside the loop: <b>use</b> the value first, <b>then</b> read the next one. If you swap them, you will use the sentinel by mistake.',
          ar: 'أولاً استخدم{{g:|ي}} القيمة ثم اقرأ{{g:|ي}} التالية.' },
        { type: 'analogy', title: 'Checking tickets at a gate', en: 'At a stadium gate the guard looks at the <b>first</b> ticket before anyone enters (priming read). Then, for each person: let him in (use), and look at the next ticket (read). When the next "ticket" is a sign that says CLOSED, he stops. The sign never enters the stadium.' },
        { type: 'h', en: 'Adding up the marks' },
        { type: 'p', en: 'Now we do something useful: count the marks, add them, and compute the average. Two accumulators: <code>sum</code> and <code>count</code>, both start at 0. We need <code>count</code> because nobody told us how many marks there are: the loop must count them itself, so that we can divide at the end.' },
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
        { type: 'memory', title: 'Three boxes while the marks arrive', en: 'Input: <code>80 95 77 -1</code>. <code>score</code> holds the last value read; <code>sum</code> and <code>count</code> collect the results.', frames: [
          { label: 'After the priming read', vars: [{ name: 'sum', type: 'int', value: '0' }, { name: 'count', type: 'int', value: '0' }, { name: 'score', type: 'int', value: '80' }] },
          { label: 'Pass 1: added 80, counted it, read 95', vars: [{ name: 'sum', type: 'int', value: '80' }, { name: 'count', type: 'int', value: '1' }, { name: 'score', type: 'int', value: '95' }] },
          { label: 'Pass 2: added 95, counted it, read 77', vars: [{ name: 'sum', type: 'int', value: '175' }, { name: 'count', type: 'int', value: '2' }, { name: 'score', type: 'int', value: '77' }] },
          { label: 'Pass 3: added 77, counted it, read -1', vars: [{ name: 'sum', type: 'int', value: '252' }, { name: 'count', type: 'int', value: '3' }, { name: 'score', type: 'int', value: '-1' }] },
          { label: '-1 != -1 is false: the loop ends. -1 was never added', vars: [{ name: 'sum', type: 'int', value: '252' }, { name: 'count', type: 'int', value: '3' }, { name: 'score', type: 'int', value: '-1' }] }
        ], ar: 'القيمة -1 تدخل المتغير score لكنها لا تدخل المجموع أبداً.' },
        { type: 'p', en: 'After the loop: 252 / 3 = 84.0. We write <code>(double) sum / count</code> so Java does not cut off the decimals. The <code>if (count &gt; 0)</code> protects us when the first number is -1 (no marks): dividing by zero would be a problem.' },
        { type: 'note', kind: 'warn', en: 'The sentinel must be a value that can never be real data, and it must never be added to the sum. Marks are never -1, so -1 is a good sentinel for marks. It would be a bad one for temperatures in winter.',
          ar: 'القيمة الحارسة يجب ألا تكون قيمة صالحة للبيانات.' },
        { type: 'h', en: 'A word as the sentinel' },
        { type: 'p', en: 'The stop signal does not have to be a number. A shopping list app can read item names until the user types <code>done</code>. You know from Unit 4 that Strings are compared with <code>equals</code>, never with <code>==</code>. So the question is "the word is <b>not</b> done": <code>!item.equals("done")</code>.',
          ar: 'القيمة الحارسة قد تكون كلمة، ونقارنها بـ equals وليس بـ ==.' },
        { type: 'code', run: true, stdin: 'milk bread dates done', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int items = 0;
        String item = input.next();
        while (!item.equals("done")) {
            items++;
            System.out.println(items + ". " + item);
            item = input.next();
        }
        System.out.println("Items: " + items);
    }
}`, out: "1. milk\n2. bread\n3. dates\nItems: 3" },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['String item = input.next();', 'Priming read of one word.'],
          ['while (!item.equals("done")) {', '<code>!</code> means "not". Repeat while the word is not "done".'],
          ['items++;', 'Count this item. Then print it with its number.'],
          ['item = input.next();', 'Read the next word: the change part.']
        ] },
        { type: 'check', q: 'With the input <code>tea done sugar done</code>, what does the program print last?', options: ['Items: 1', 'Items: 2', 'Items: 3', 'Nothing'], answer: 0,
          explain: 'The loop stops at the first "done". Only "tea" is counted, so the last line is <code>Items: 1</code>. The words after the first "done" are never read.', hint: 'Where is the first done?' },
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
}`, out: 'Total: 50', ar: 'اقرأ أولاً، ثم كرر: أضف ثم اقرأ التالي.' },
        { type: 'steps', title: 'Worked example: hot days in Riyadh', problem: 'Read the highest temperature of each day until the sentinel <code>999</code>. Print how many readings there were and how many days were hot (45 degrees or more). Temperatures can be 0 or negative in some places, so 0 and -1 are bad sentinels; 999 is safe.',
          steps: [
            { en: 'Two counters, both start at 0.', code: 'int days = 0;\nint hot = 0;' },
            { en: 'Priming read, then loop while the value is not 999.', code: 'int t = input.nextInt();\nwhile (t != 999) {' },
            { en: 'Count every reading. Count it as hot only if it is 45 or more (an if inside the loop).', code: '    days++;\n    if (t >= 45) {\n        hot++;\n    }' },
            { en: 'Read the next value, close the loop, then print both counters.', code: '    t = input.nextInt();\n}\nSystem.out.println("Days: " + days);\nSystem.out.println("Hot days: " + hot);' },
            { en: 'Trace with <code>43 46 45 40 48 999</code>: days counts 5 values; hot counts 46, 45 and 48, so 3.' }
          ],
          stdin: '43 46 45 40 48 999',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int days = 0;
        int hot = 0;
        int t = input.nextInt();
        while (t != 999) {
            days++;
            if (t >= 45) {
                hot++;
            }
            t = input.nextInt();
        }
        System.out.println("Days: " + days);
        System.out.println("Hot days: " + hot);
    }
}`, out: "Days: 5\nHot days: 3", ar: 'يمكن وضع if داخل الحلقة لعدّ القيم التي تحقق شرطاً معيناً.' },
        { type: 'note', kind: 'exam', en: 'In a sentinel loop the number of passes equals the number of real values. With <code>43 46 45 40 48 999</code> the body runs 5 times, but the question is asked 6 times.' }
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
        { title: 'Dividing by zero', en: 'If the first value is the sentinel, <code>count</code> is 0 and the average has no meaning (with doubles Java even prints <code>NaN</code>, "not a number"). Check <code>count &gt; 0</code> first.', code: J`
if (count > 0) {
    System.out.println("Average: " + (double) sum / count);
} else {
    System.out.println("No scores");
}` }
      ],
      remember: [
        'A <b>sentinel</b> is a special value that means "stop". It is not real data.',
        'Pattern: <b>read, while (not sentinel) { use, read }</b>.',
        'The first read before the loop is the <b>priming read</b>.',
        'Never add the sentinel to your sum or count.',
        'Check <code>count &gt; 0</code> before dividing for an average.',
        'A word can be a sentinel too: <code>while (!word.equals("done"))</code>.'
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
}`, hint: 'Use the priming read pattern with two counters.', explain: 'Each value inside the loop is not 0, so it is either positive or negative. The sentinel stops the loop before it is counted.' },
        { t: 'bug', q: 'This program adds prices until 0. With the input <code>10 20 30 0</code> it prints <code>Total: 50</code> instead of 60. Tap a line with the bug.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = 0;
        int price = input.nextInt();
        while (price != 0) {
            price = input.nextInt();
            total += price;
        }
        System.out.println("Total: " + total);
    }
}`, bug: [9, 10],
          fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = 0;
        int price = input.nextInt();
        while (price != 0) {
            total += price;
            price = input.nextInt();
        }
        System.out.println("Total: " + total);
    }
}`, hint: 'Inside the loop: use first, then read. Which comes first here?',
          explain: 'The two lines inside the loop are in the wrong order. The first price (10) is replaced by 20 before it is ever added, so it is lost. At the end the sentinel 0 is added (you cannot see it because it is 0, but a sentinel of -1 would make the total wrong too). Use the value first, then read the next one: the total becomes 60.',
          explainAr: 'داخل الحلقة: استخدم{{g:|ي}} القيمة أولاً ثم اقرأ{{g:|ي}} التالية.' },
        { t: 'bug', q: 'This program counts names until the word <code>end</code>. Even when the user types end, the loop does not stop (the program crashes when the input runs out). Tap the line with the bug.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int count = 0;
        String name = input.next();
        while (name != "end") {
            count++;
            name = input.next();
        }
        System.out.println("Names: " + count);
    }
}`, bug: 8,
          fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int count = 0;
        String name = input.next();
        while (!name.equals("end")) {
            count++;
            name = input.next();
        }
        System.out.println("Names: " + count);
    }
}`, hint: 'How do we compare Strings in Java?',
          explain: '<code>!=</code> does not compare the letters of two Strings. The word that Scanner reads is a new String, so <code>name != "end"</code> stays true even when the letters are e, n, d. The loop keeps reading until there is no input left and the program crashes. Compare the letters with <code>equals</code>: <code>!name.equals("end")</code>.',
          explainAr: 'نقارن النصوص بـ equals وليس بـ == أو !=.' },
        { t: 'code', q: 'Read words until the word <code>stop</code> (stop is not counted). Print how many words have <b>more than 4</b> letters, like <code>Long words: 3</code>. Do not print any prompt.<br>Example: <code>salam ahlan hi riyadh stop</code> prints <code>Long words: 3</code>.',
          qAr: 'اقرأ كلمات حتى كلمة stop واطبع عدد الكلمات التي طولها أكثر من 4 أحرف.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // your code here
    }
}`, tests: [ { stdin: 'salam ahlan hi riyadh stop', expected: 'Long words: 3' }, { stdin: 'stop', expected: 'Long words: 0' }, { stdin: 'cat house stop', expected: 'Long words: 1' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int longWords = 0;
        String word = input.next();
        while (!word.equals("stop")) {
            if (word.length() > 4) {
                longWords++;
            }
            word = input.next();
        }
        System.out.println("Long words: " + longWords);
    }
}`, hint: 'Priming read with <code>input.next()</code>, loop while the word is not "stop", and use <code>word.length() &gt; 4</code> inside.',
          explain: 'The sentinel is a word, so the question uses <code>equals</code>. Inside the loop an if counts only the long words. If the first word is stop, the loop runs 0 times and the answer is 0.' }
      ]
    },
    {
      title: 'do-while and input validation',
      titleAr: 'حلقة do-while والتحقق من المدخلات',
      minutes: 40,
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
        { type: 'p', en: 'Compare with a plain while loop that starts with the same value. The question <code>5 &lt; 5</code> is asked first, it is false, and the body never runs. Only "End" is printed.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int x = 5;
        while (x < 5) {
            System.out.println("x is " + x);
            x++;
        }
        System.out.println("End");
    }
}`, out: 'End' },
        { type: 'p', en: 'Same start, same body, same question. The only difference is <b>when</b> the question is asked. When the question is true at the start, both loops give the same output. They differ only when the question is false at the very first check.',
          ar: 'الفرق الوحيد بين الحلقتين هو وقت فحص الشرط: قبل الجسم أو بعده.' },
        { type: 'table', head: ['', 'while', 'do-while'], rows: [
          ['Question asked', 'before the body', 'after the body'],
          ['Smallest number of runs', '0', '1'],
          ['Ends with ;', 'no', 'yes, after <code>while (...)</code>']
        ] },
        { type: 'check', q: 'Which loop always runs its body at least once?', options: ['while', 'do-while', 'both', 'neither'], answer: 1,
          explain: 'do-while asks the question after the body, so the body runs at least once.' },
        { type: 'h', en: 'Tracing a do-while' },
        { type: 'p', en: 'A do-while can count too. Trace it like any loop, but remember that the question comes at the <b>bottom</b>: write the body first, then the check.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 1;
        do {
            System.out.print(n + " ");
            n++;
        } while (n <= 3);
        System.out.println("| n = " + n);
    }
}`, out: '1 2 3 | n = 4' },
        { type: 'table', head: ['Pass', 'n at start', 'Printed', 'n after n++', 'n &lt;= 3 ? (asked at the bottom)'], rows: [
          ['1', '1', '1', '2', 'true: go back up'],
          ['2', '2', '2', '3', 'true: go back up'],
          ['3', '3', '3', '4', 'false: leave the loop']
        ] },
        { type: 'memory', title: 'n in a do-while', frames: [
          { label: 'Before <code>do</code>', vars: [{ name: 'n', type: 'int', value: '1' }] },
          { label: 'End of pass 1 (printed 1). Bottom check: 2 &lt;= 3 is true', vars: [{ name: 'n', type: 'int', value: '2' }] },
          { label: 'End of pass 2 (printed 2). Bottom check: 3 &lt;= 3 is true', vars: [{ name: 'n', type: 'int', value: '3' }] },
          { label: 'End of pass 3 (printed 3). Bottom check: 4 &lt;= 3 is false, leave', vars: [{ name: 'n', type: 'int', value: '4' }] }
        ], ar: 'في do-while يُسأل الشرط في الأسفل بعد كل دورة.' },
        { type: 'h', en: 'Input validation' },
        { type: 'p', en: 'People type wrong things: a mark of 150, a negative age. <b>Input validation</b> means refusing bad input and asking again, until the value is acceptable. Because we must ask at least once, do-while is the natural choice.',
          ar: 'التحقق: نرفض القيمة الخاطئة ونطلب القيمة مرة أخرى.' },
        { type: 'p', en: 'Why not just an <code>if</code>? An if checks <b>once</b>. If the user types 150, the if can say "Invalid" and read again, but if the second value is also wrong, nobody checks it. A loop keeps checking for as long as the input is wrong: 2 times, 5 times, or 0 extra times if the first value is already good.' },
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
        { type: 'memory', title: 'The grade box in each round', en: 'Input: <code>120 -5 88</code>. Each round puts a new value into <code>grade</code>; the bottom question decides if we go round again.', frames: [
          { label: 'Before <code>do</code>: grade has no value yet', vars: [{ name: 'grade', type: 'int', value: '?' }] },
          { label: 'Round 1 read 120: bad, so repeat', vars: [{ name: 'grade', type: 'int', value: '120' }] },
          { label: 'Round 2 read -5: bad, so repeat', vars: [{ name: 'grade', type: 'int', value: '-5' }] },
          { label: 'Round 3 read 88: good, leave the loop and print "Accepted: 88"', vars: [{ name: 'grade', type: 'int', value: '88' }] }
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
        { type: 'p', en: 'Menus also use do-while: show the menu at least once, and repeat until the user chooses Exit (0). Think of a coffee machine screen: it always shows the choices first, before it knows what you want. The choice is read <b>inside</b> the loop, so the question at the bottom always has a fresh value to test.',
          ar: 'القائمة تظهر مرة على الأقل، ثم تتكرر حتى يختار المستخدم الخروج.' },
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
        { type: 'p', en: 'The menu is shown once for every choice, including the last choice 0. With the input <code>1 2 0</code> there are 3 choices, so the menu appears 3 times.' },
        { type: 'check', q: 'With the input <code>2 2 2 0</code>, how many times is the menu line printed?', options: ['3', '4', '1', '5'], answer: 1,
          explain: 'One menu for each choice read: 2, 2, 2 and 0. That is 4 menus. After the 0, the bottom question 0 != 0 is false and "Bye" is printed.', hint: 'Count the numbers in the input.' },
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
}`, out: "Try again\nTry again\nDays: 3", ar: 'اقرأ ثم افحص ثم كرر إذا كانت القيمة خاطئة.' },
        { type: 'analogy', title: 'The bank card machine', en: 'A cash machine asks for your PIN. If it is wrong, it asks again, but not forever: after 3 wrong tries it keeps the card. So there are <b>two</b> reasons to stop: the PIN is right, or the tries are used up.' },
        { type: 'steps', title: 'Worked example: a PIN with 3 tries', problem: 'The correct PIN is 2580. Read PINs until the PIN is right or 3 tries are used. Print "Wrong PIN" after each wrong try. At the end print "Welcome after N tries" or "Card blocked".',
          steps: [
            { en: 'Declare the PIN before the loop, and a counter for the tries that starts at 0.', code: 'int pin;\nint tries = 0;' },
            { en: 'In the body: read, count the try, and give a message if it is wrong.', code: 'do {\n    pin = input.nextInt();\n    tries++;\n    if (pin != 2580) {\n        System.out.println("Wrong PIN");\n    }' },
            { en: 'Repeat only while the PIN is wrong <b>and</b> there are tries left. Both must be true to go round again.', code: '} while (pin != 2580 && tries < 3);' },
            { en: 'After the loop we do not know which reason stopped it, so we ask with an if.', code: 'if (pin == 2580) {\n    System.out.println("Welcome after " + tries + " tries");\n} else {\n    System.out.println("Card blocked");\n}' },
            { en: 'With <code>1234 2580</code>: try 1 is wrong, try 2 is right. With <code>1111 2222 3333</code> all 3 tries are wrong, so the card is blocked.' }
          ],
          stdin: '1234 2580',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int pin;
        int tries = 0;
        do {
            pin = input.nextInt();
            tries++;
            if (pin != 2580) {
                System.out.println("Wrong PIN");
            }
        } while (pin != 2580 && tries < 3);
        if (pin == 2580) {
            System.out.println("Welcome after " + tries + " tries");
        } else {
            System.out.println("Card blocked");
        }
    }
}`, out: "Wrong PIN\nWelcome after 2 tries", ar: 'نكرر ما دام الرقم خاطئاً والمحاولات لم تنته، وبعد الحلقة نسأل لماذا توقفنا.' },
        { type: 'memory', title: 'pin and tries with the input 1111 2222 3333', frames: [
          { label: 'Before <code>do</code>', vars: [{ name: 'pin', type: 'int', value: '?' }, { name: 'tries', type: 'int', value: '0' }] },
          { label: 'Try 1: wrong. Check: wrong and 1 &lt; 3, so repeat', vars: [{ name: 'pin', type: 'int', value: '1111' }, { name: 'tries', type: 'int', value: '1' }] },
          { label: 'Try 2: wrong. Check: wrong and 2 &lt; 3, so repeat', vars: [{ name: 'pin', type: 'int', value: '2222' }, { name: 'tries', type: 'int', value: '2' }] },
          { label: 'Try 3: wrong. Check: 3 &lt; 3 is false, so stop. "Card blocked"', vars: [{ name: 'pin', type: 'int', value: '3333' }, { name: 'tries', type: 'int', value: '3' }] }
        ] },
        { type: 'note', kind: 'warn', en: 'Here <code>&amp;&amp;</code> is right, because we repeat only when <b>both</b> things are true (wrong PIN <b>and</b> tries left). For a range check of one value we use <code>||</code>. Always ask: "When must the loop go round again?"' }
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
        'For validation: repeat while the input is <b>bad</b>.',
        'Two reasons to stop (right PIN, no tries left): repeat while <b>both</b> reasons to go on are true, with <code>&amp;&amp;</code>.'
      ],
      rememberAr: 'do-while تعمل مرة على الأقل، وتنتهي بفاصلة منقوطة. نكرر ما دام الإدخال خاطئاً.',
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 10;
        do {
            System.out.println(n);
            n += 5;
        } while (n < 10);
    }
}`, answer: '10', explain: 'The body runs once. Then n is 15 and 15 &lt; 10 is false.' },
        { t: 'mcq', q: 'Which loop always executes its body at least once?', options: ['<code>while</code>', '<code>for</code>', '<code>do-while</code>', 'None of them'], answer: 2,
          explain: 'do-while checks the condition after the body.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 1;
        do {
            System.out.print(n + " ");
            n++;
        } while (n <= 3);
    }
}`, answer: '1 2 3', explain: 'n is 1, 2, 3. After the third round n is 4 and 4 &lt;= 3 is false.' },
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
}`, hint: 'do { mark = input.nextInt(); } while (mark is bad);', explain: 'The loop repeats while the mark is below 0 or above 100, then the good mark is printed after the loop.' },
        { t: 'bug', q: 'This program should keep asking until the age is from 0 to 120. With the input <code>150 30</code> it accepts 150 at once. Tap the line with the bug.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age;
        do {
            age = input.nextInt();
        } while (age >= 0 && age <= 120);
        System.out.println("Age: " + age);
    }
}`, bug: 9,
          fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age;
        do {
            age = input.nextInt();
        } while (age < 0 || age > 120);
        System.out.println("Age: " + age);
    }
}`, hint: 'The condition after while says when to <b>repeat</b>. Should we repeat for a good age or a bad age?',
          explain: 'The condition is the wrong way round: it repeats while the age is <b>good</b>. 150 is not good, so the loop stops at once and prints <code>Age: 150</code>. A good age like 30 would make it ask again. The loop must repeat while the age is bad: <code>age &lt; 0 || age &gt; 120</code>.',
          explainAr: 'الشرط معكوس: يجب أن نكرر عندما يكون العمر خاطئاً.' },
        { t: 'bug', q: 'This program does not compile. Tap the line with the bug.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        do {
            int days = input.nextInt();
        } while (days < 1 || days > 7);
        System.out.println("OK");
    }
}`, bug: [7, 8],
          fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int days;
        do {
            days = input.nextInt();
        } while (days < 1 || days > 7);
        System.out.println("OK");
    }
}`, hint: 'Where does the variable days live?',
          explain: '<code>days</code> is declared inside the braces of <code>do</code>, so it exists only there. The condition after <code>while</code> is outside the braces and cannot see it: "cannot find symbol". Declare <code>int days;</code> before <code>do</code> and only give it a value inside.',
          explainAr: 'المتغير المعرّف داخل أقواس do لا يراه الشرط بعدها.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int total = 0;
        int n = 5;
        do {
            total += n;
            n -= 2;
        } while (n > 0);
        System.out.println(total + " " + n);
    }
}`, answer: '9 -1',
          explain: 'Pass 1: total 5, n 3 (3 &gt; 0, repeat). Pass 2: total 8, n 1 (repeat). Pass 3: total 9, n -1. Now -1 &gt; 0 is false, so the output is <code>9 -1</code>.' }
      ]
    },
    {
      title: 'The for loop',
      titleAr: 'حلقة for',
      minutes: 40,
      body: [
        { type: 'h', en: 'Start, question, change in one line' },
        { type: 'p', en: 'In a while loop the three parts (start, question, change) are in different places. It is easy to forget one. When you know how many times to repeat, the <code>for</code> loop is safer: it puts all three parts together in one line, called the <b>header</b>.',
          ar: 'حلقة for تجمع البداية والشرط والتغيير في سطر واحد.' },
        { type: 'analogy', title: 'A recipe card', en: 'A recipe card says at the top: "Start at egg 1, stop after egg 3, add one egg each time." All the rules are in one line at the top, then the steps below. The for header is the top line of the card.',
          ar: 'رأس for مثل السطر الأول في بطاقة الوصفة.' },
        { type: 'p', en: 'Most loops in real programs count something: 30 students, 12 months, 7 days of the week. For all of these, the for loop is the usual choice. Here is the same job done twice: first with while, then with for. Both print "Hello" 3 times.' },
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
        { type: 'p', en: 'Read the table again: the change part is written at the <b>top</b> of the loop, but it runs at the <b>bottom</b>, after the body. This surprises many students. A for loop is really the same machine as a while loop; it only keeps the three parts in one place so you cannot forget one.',
          ar: 'التغيير مكتوب في الأعلى لكنه يُنفَّذ في آخر كل دورة بعد الجسم.' },
        { type: 'table', head: ['Part', 'In a while loop', 'In a for loop'], rows: [
          ['Start', 'a line before <code>while</code>', 'first part of the header'],
          ['Question', 'inside <code>while ( )</code>', 'second part of the header'],
          ['Change', 'last line of the body', 'third part of the header']
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
        { type: 'memory', title: 'The box i in the squares loop', en: 'The box <code>i</code> is made by the start part and removed when the loop ends.', frames: [
          { label: 'Start part: <code>int i = 1</code>', vars: [{ name: 'i', type: 'int', value: '1' }] },
          { label: 'Round 1 printed "1 squared is 1"; change part: <code>i++</code>', vars: [{ name: 'i', type: 'int', value: '2' }] },
          { label: 'Round 2 printed "2 squared is 4"; <code>i++</code>', vars: [{ name: 'i', type: 'int', value: '3' }] },
          { label: 'Rounds 3, 4, 5 printed 9, 16, 25; now i is 6', vars: [{ name: 'i', type: 'int', value: '6' }] },
          { label: '6 &lt;= 5 is false: the loop ends and the box i is gone', vars: [] }
        ], ar: 'المتغير i يُنشأ في بداية الحلقة ويختفي بعد نهايتها.' },
        { type: 'h', en: 'Commas between the numbers' },
        { type: 'p', en: 'A common small task: print <code>1, 2, 3, 4, 5</code> on one line. If we print a comma after every number, the line ends with an extra comma. The trick: an <code>if</code> inside the loop prints the comma only when this is <b>not</b> the last number.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.print(i);
            if (i < 5) {
                System.out.print(", ");
            }
        }
        System.out.println();
    }
}`, out: '1, 2, 3, 4, 5' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['System.out.print(i);', 'Print the number, stay on the same line.'],
          ['if (i < 5)', 'Is there another number after this one? For i = 1 to 4, yes.'],
          ['System.out.print(", ");', 'Print a comma and a space between numbers. For i = 5 this line is skipped.'],
          ['System.out.println();', 'After the loop, end the line once.']
        ], ar: 'نطبع الفاصلة فقط إذا لم يكن هذا آخر عدد.' },
        { type: 'check', q: 'In the program above, we change <code>if (i &lt; 5)</code> to <code>if (i &lt;= 5)</code>. What is printed?', options: ['1, 2, 3, 4, 5', '1, 2, 3, 4, 5, ', '1, 2, 3, 4', '12345'], answer: 1,
          explain: 'Now the comma is also printed after 5, so the line ends with ", ".', hint: 'Is 5 &lt;= 5 true?' },
        { type: 'h', en: 'Counting down and jumping' },
        { type: 'p', en: 'Change the start, the question and the change to go down or to jump. The pattern is the same. When you count <b>down</b>, the question usually uses <code>&gt;</code> or <code>&gt;=</code>: "keep going while i is still big enough". When you count <b>up</b>, it uses <code>&lt;</code> or <code>&lt;=</code>. If the question and the change point in different directions, the loop either never starts or never ends.',
          ar: 'عند العد التنازلي نستخدم &gt; أو &gt;=، وعند العد التصاعدي نستخدم &lt; أو &lt;=.' },
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
        { type: 'p', en: 'Here the counter <code>i</code> is never used inside the body. It only counts the rounds, so that exactly <code>n</code> numbers are read. That is normal: sometimes the counter is part of the answer (the squares), sometimes it only counts.',
          ar: 'أحياناً لا نستخدم العداد داخل الجسم، بل نعدّ به الدورات فقط.' },
        { type: 'check', q: 'The input is <code>4</code> and then four numbers. How many times does <code>input.nextInt()</code> run in total in this program?', options: ['4', '5', '3', '8'], answer: 1,
          explain: 'Once before the loop (to read n = 4) and once in each of the 4 rounds: 5 times.', hint: 'Do not forget the read before the loop.' },
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
}`, out: "1 kg = 30 riyals\n2 kg = 60 riyals\n3 kg = 90 riyals\n4 kg = 120 riyals\n5 kg = 150 riyals", ar: 'نعرف عدد التكرارات فنستخدم for.' },
        { type: 'analogy', title: 'A growing savings jar', en: 'In month 1 you put 100 riyals in a jar, in month 2 you put 200, in month 3 you put 300, and so on. The amount you add changes, and the jar keeps everything from before. The for counter is the month; the jar is a running total.' },
        { type: 'steps', title: 'Worked example: saving more each month', problem: 'In month m you save m x 100 riyals (100, 200, 300, ...). Print the total in the jar after each of the 6 months.',
          steps: [
            { en: 'The jar starts empty, <b>before</b> the loop.', code: 'int total = 0;' },
            { en: 'We know the count: 6 months. The counter is the month.', code: 'for (int month = 1; month <= 6; month++) {' },
            { en: 'Add the saving of this month to the jar, then print.', code: '    total += month * 100;\n    System.out.println("Month " + month + ": " + total + " riyals");\n}' },
            { en: 'Trace the total: 100, 100 + 200 = 300, 300 + 300 = 600, 600 + 400 = 1000, 1000 + 500 = 1500, 1500 + 600 = 2100.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int total = 0;
        for (int month = 1; month <= 6; month++) {
            total += month * 100;
            System.out.println("Month " + month + ": " + total + " riyals");
        }
    }
}`, out: "Month 1: 100 riyals\nMonth 2: 300 riyals\nMonth 3: 600 riyals\nMonth 4: 1000 riyals\nMonth 5: 1500 riyals\nMonth 6: 2100 riyals", ar: 'العداد هو الشهر، والمجموع يتراكم من شهر إلى آخر.' },
        { type: 'memory', title: 'month and total, round by round', frames: [
          { label: 'Before the loop', vars: [{ name: 'total', type: 'int', value: '0' }] },
          { label: 'Round 1: total += 1 * 100', vars: [{ name: 'total', type: 'int', value: '100' }, { name: 'month', type: 'int', value: '1' }] },
          { label: 'Round 2: total += 2 * 100', vars: [{ name: 'total', type: 'int', value: '300' }, { name: 'month', type: 'int', value: '2' }] },
          { label: 'Round 3: total += 3 * 100', vars: [{ name: 'total', type: 'int', value: '600' }, { name: 'month', type: 'int', value: '3' }] },
          { label: 'Round 6: total += 6 * 100. Then month becomes 7, 7 &lt;= 6 is false', vars: [{ name: 'total', type: 'int', value: '2100' }, { name: 'month', type: 'int', value: '6' }] },
          { label: 'After the loop: month is gone, total stays', vars: [{ name: 'total', type: 'int', value: '2100' }] }
        ], ar: 'total معرَّف قبل الحلقة فيبقى بعدها، أما month فيختفي.' }
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
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 4; i++) {
            System.out.print(i + " ");
        }
    }
}`, answer: '1 2 3 4', explain: 'i is 1, 2, 3, 4. When i is 5 the question is false.' },
        { t: 'mcq', q: 'How many times does "Hi" print?', code: J`
for (int i = 0; i < 5; i++) {
    System.out.println("Hi");
}`, options: ['4', '5', '6', 'Forever'], answer: 1, explain: 'i is 0, 1, 2, 3, 4: five values.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 10; i > 0; i -= 4) {
            System.out.print(i + " ");
        }
    }
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
}`, hint: 'Loop i from 1 to n and print <code>"5 x " + i + " = " + 5 * i</code>.', explain: 'The counter i is both the second factor and the row number.' },
        { t: 'bug', q: 'This program should print <code>Welcome</code> 3 times, but it prints it only once. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++); {
            System.out.println("Welcome");
        }
    }
}`, bug: 3,
          fix: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            System.out.println("Welcome");
        }
    }
}`, hint: 'Look at the very end of the for line.',
          explain: 'The semicolon after the header is the whole body of the loop. The loop runs 3 times doing nothing. Then the block <code>{ ... }</code> below is a normal block that runs once. Remove the semicolon so the block becomes the body.',
          explainAr: 'الفاصلة المنقوطة بعد رأس for تجعل الجسم فارغاً، فتُطبع الكلمة مرة واحدة فقط.' },
        { t: 'bug', q: 'This program should read 4 marks and print each one. With the input <code>70 80 90 60</code> it crashes after printing four marks, because it tries to read a fifth one. Tap the line with the bug.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        for (int i = 0; i <= 4; i++) {
            int mark = input.nextInt();
            System.out.println("Mark: " + mark);
        }
    }
}`, bug: 6,
          fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        for (int i = 0; i < 4; i++) {
            int mark = input.nextInt();
            System.out.println("Mark: " + mark);
        }
    }
}`, hint: 'List the values of i: 0, 1, 2, ... How many are there?',
          explain: 'From 0 with <code>&lt;= 4</code> the values are 0, 1, 2, 3, 4: five rounds, so the loop wants a fifth mark that does not exist. Starting at 0, use <code>i &lt; 4</code> (0, 1, 2, 3 = four rounds). Starting at 1 with <code>i &lt;= 4</code> would also be right.',
          explainAr: 'من 0 إلى 4 شاملة خمس دورات، والمطلوب أربع فقط.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i += 3) {
            System.out.print(i);
            if (i < 10) {
                System.out.print("-");
            }
        }
        System.out.println();
    }
}`, answer: '1-4-7-10',
          explain: 'i is 1, 4, 7, 10, then 13 (13 &lt;= 10 is false). A dash is printed after 1, 4 and 7, but not after 10.' },
        { t: 'code', q: 'Read an integer <code>n</code> (n &gt;= 1) and print the numbers from 1 to <code>n</code> on one line, separated by a comma and a space, with no comma at the end. Use a for loop. Do not print any prompt.<br>Example for <code>4</code>: <code>1, 2, 3, 4</code>',
          qAr: 'اطبع الأعداد من 1 إلى n في سطر واحد بينها فاصلة، بلا فاصلة في النهاية.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '4', expected: '1, 2, 3, 4' }, { stdin: '1', expected: '1' }, { stdin: '7', expected: '1, 2, 3, 4, 5, 6, 7' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        for (int i = 1; i <= n; i++) {
            System.out.print(i);
            if (i < n) {
                System.out.print(", ");
            }
        }
        System.out.println();
    }
}`, hint: 'Print i, then print ", " only if <code>i &lt; n</code>.',
          explain: 'The comma goes between numbers, so it is printed after every number except the last one (when i equals n).' }
      ]
    },
    {
      title: 'Accumulators: sum, average, maximum and minimum',
      titleAr: 'المجمّعات: المجموع والمتوسط والأكبر والأصغر',
      minutes: 40,
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
        { type: 'memory', title: 'The piggy bank fills up', en: 'Watch <code>sum</code> grow while <code>i</code> counts 1, 2, 3, 4.', frames: [
          { label: 'Before the loop: the bank is empty', vars: [{ name: 'sum', type: 'int', value: '0' }] },
          { label: 'Round i = 1: sum = 0 + 1', vars: [{ name: 'sum', type: 'int', value: '1' }, { name: 'i', type: 'int', value: '1' }] },
          { label: 'Round i = 2: sum = 1 + 2', vars: [{ name: 'sum', type: 'int', value: '3' }, { name: 'i', type: 'int', value: '2' }] },
          { label: 'Round i = 3: sum = 3 + 3', vars: [{ name: 'sum', type: 'int', value: '6' }, { name: 'i', type: 'int', value: '3' }] },
          { label: 'Round i = 4: sum = 6 + 4', vars: [{ name: 'sum', type: 'int', value: '10' }, { name: 'i', type: 'int', value: '4' }] },
          { label: 'After the loop: i is gone, sum keeps the answer 10', vars: [{ name: 'sum', type: 'int', value: '10' }] }
        ], ar: 'المجموع يكبر في كل دورة ويبقى بعد الحلقة لأنه معرَّف قبلها.' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int sum = 0;', 'The empty piggy bank. It must be declared <b>before</b> the loop and start at 0.'],
          ['for (int i = 1; i <= 4; i++)', 'Four rounds: 1, 2, 3, 4.'],
          ['sum += i;', 'Add the current number to the bank. Same as <code>sum = sum + i</code>.'],
          ['System.out.println(sum);', 'Print the final answer <b>after</b> the loop.']
        ], ar: 'المجموع يبدأ بصفر قبل الحلقة، ونطبع النتيجة بعد الحلقة.' },
        { type: 'check', q: 'Where must <code>int sum = 0;</code> be written?', options: ['Inside the loop body', 'Before the loop', 'After the loop', 'Inside the for header only'], answer: 1,
          explain: 'If it is inside the body, sum is set to 0 again in every round and the answer is lost.', hint: 'Think of the piggy bank: do you empty it every day?' },
        { type: 'h', en: 'Counting only some values' },
        { type: 'p', en: 'A counter is also an accumulator: it adds 1 instead of adding a value. Put it inside an <code>if</code> and it counts only the values you want. For example: how many of the numbers 1 to 20 are multiples of 4?',
          ar: 'العداد داخل if يعدّ فقط القيم التي تحقق الشرط.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int count = 0;
        for (int i = 1; i <= 20; i++) {
            if (i % 4 == 0) {
                count++;
            }
        }
        System.out.println("Multiples of 4: " + count);
    }
}`, out: 'Multiples of 4: 5' },
        { type: 'p', en: 'The loop looks at all 20 numbers, but <code>count++</code> runs only for 4, 8, 12, 16 and 20. In a class this is how a program counts the students who passed, the days above 40 degrees, or the items that cost more than 50 riyals.' },
        { type: 'check', q: 'How many times does <code>count++</code> run in the program above?', options: ['20', '4', '5', '1'], answer: 2,
          explain: 'Only for the multiples of 4: 4, 8, 12, 16, 20. That is 5 times. The loop itself runs 20 times.', hint: 'List the multiples of 4 up to 20.' },
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
        { type: 'p', en: 'Why <b>after</b> the loop? During the loop the total is not finished yet: after two marks it is only 155. If you divide inside the loop, you get a new, wrong "average" in every round. Collect everything first, then compute once. Here 320 / 4 = 80.0.',
          ar: 'نحسب المتوسط بعد الحلقة لأن المجموع لا يكتمل إلا بعد آخر دورة.' },
        { type: 'analogy', title: 'The class register', en: 'A teacher walks along the rows and writes each mark on a sheet, adding as she goes. She does not announce the class average after the second student. Only when the last mark is added does she divide by the number of students.' },
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
        { type: 'table', head: ['i', 'fact before', 'fact after (fact *= i)'], rows: [
          ['1', '1', '1'],
          ['2', '1', '2'],
          ['3', '2', '6'],
          ['4', '6', '24'],
          ['5', '24', '120'],
          ['...', '...', '...'],
          ['15', '87178291200', '1307674368000']
        ] },
        { type: 'p', en: 'The symbol <code>15!</code> is read "15 factorial": 1 x 2 x 3 x ... x 15. If <code>fact</code> started at 0, every row would give 0 x i = 0, and the answer would be 0.' },
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
        { type: 'memory', title: 'The champion and the last place', en: 'Input: <code>5</code>, then <code>31 38 27 44 35</code>. <code>max</code> changes only when a bigger value comes; <code>min</code> only when a smaller one comes.', frames: [
          { label: 'First value read: it is both the highest and the lowest so far', vars: [{ name: 'max', type: 'int', value: '31' }, { name: 'min', type: 'int', value: '31' }] },
          { label: 'i = 2, t = 38: 38 &gt; 31, new max', vars: [{ name: 'max', type: 'int', value: '38' }, { name: 'min', type: 'int', value: '31' }, { name: 'i', type: 'int', value: '2' }, { name: 't', type: 'int', value: '38' }] },
          { label: 'i = 3, t = 27: 27 &lt; 31, new min', vars: [{ name: 'max', type: 'int', value: '38' }, { name: 'min', type: 'int', value: '27' }, { name: 'i', type: 'int', value: '3' }, { name: 't', type: 'int', value: '27' }] },
          { label: 'i = 4, t = 44: 44 &gt; 38, new max', vars: [{ name: 'max', type: 'int', value: '44' }, { name: 'min', type: 'int', value: '27' }, { name: 'i', type: 'int', value: '4' }, { name: 't', type: 'int', value: '44' }] },
          { label: 'i = 5, t = 35: no change. Loop ends: Max 44, Min 27', vars: [{ name: 'max', type: 'int', value: '44' }, { name: 'min', type: 'int', value: '27' }, { name: 'i', type: 'int', value: '5' }, { name: 't', type: 'int', value: '35' }] }
        ], ar: 'max و min يتغيران فقط عند ظهور قيمة أكبر أو أصغر.' },
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
}`, out: 'Highest: 91', ar: 'ابدأ{{g:|ي}} بأول قيمة، ثم استبدلها كلما ظهرت قيمة أكبر.' },
        { type: 'p', en: 'Another way to start max with the first value, without reading it before the loop: inside the loop write <code>if (day == 1 || steps &gt; best)</code>. In the first round <code>day == 1</code> is true, so the first value always sits in the chair. In later rounds only a bigger value can replace it. The next example uses this trick and also remembers <b>where</b> the best value was.',
          ar: 'الشرط day == 1 يجعل القيمة الأولى تدخل max دائماً.' },
        { type: 'steps', title: 'Worked example: a week of steps', problem: 'Read the number of steps you walked on each of the 7 days of a week. Print the total, the average, and the best day.',
          steps: [
            { en: 'Three accumulators before the loop: the total, the best value so far, and the day of the best value.', code: 'int total = 0;\nint best = 0;\nint bestDay = 0;' },
            { en: 'We know the count (7 days), so use for. Read the steps of this day and add them to the total.', code: 'for (int day = 1; day <= 7; day++) {\n    int steps = input.nextInt();\n    total += steps;' },
            { en: 'The first day always becomes the best; later, only a bigger value. Remember the value <b>and</b> the day together.', code: '    if (day == 1 || steps > best) {\n        best = steps;\n        bestDay = day;\n    }\n}' },
            { en: 'After the loop: print the total, the average (cast to double), and the best day.', code: 'System.out.println("Total: " + total);\nSystem.out.println("Average: " + (double) total / 7);\nSystem.out.println("Best day: " + bestDay + " (" + best + " steps)");' },
            { en: 'With <code>6500 8200 4300 9100 7000 3000 8800</code>: the total is 46900, 46900 / 7 = 6700.0, and the best day is day 4 with 9100.' }
          ],
          stdin: '6500 8200 4300 9100 7000 3000 8800',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = 0;
        int best = 0;
        int bestDay = 0;
        for (int day = 1; day <= 7; day++) {
            int steps = input.nextInt();
            total += steps;
            if (day == 1 || steps > best) {
                best = steps;
                bestDay = day;
            }
        }
        System.out.println("Total: " + total);
        System.out.println("Average: " + (double) total / 7);
        System.out.println("Best day: " + bestDay + " (" + best + " steps)");
    }
}`, out: "Total: 46900\nAverage: 6700.0\nBest day: 4 (9100 steps)", ar: 'نحفظ أكبر قيمة ورقم يومها معاً داخل نفس if.' },
        { type: 'table', head: ['day', 'steps', 'total after', 'best after', 'bestDay after'], rows: [
          ['1', '6500', '6500', '6500', '1'],
          ['2', '8200', '14700', '8200', '2'],
          ['3', '4300', '19000', '8200', '2'],
          ['4', '9100', '28100', '9100', '4'],
          ['5', '7000', '35100', '9100', '4'],
          ['6', '3000', '38100', '9100', '4'],
          ['7', '8800', '46900', '9100', '4']
        ] }
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
        'Use <code>long</code> when a product can be very big.',
        'A counter inside an <code>if</code> counts only the values you want.'
      ],
      rememberAr: 'المجمّع يُعرَّف قبل الحلقة. المجموع يبدأ بصفر والضرب بواحد. والمتوسط يُحسب بعد الحلقة. وللأكبر والأصغر نبدأ بأول قيمة.',
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int s = 0;
        for (int i = 1; i <= 4; i++) {
            s += i * i;
        }
        System.out.println(s);
    }
}`, answer: '30', explain: '1 + 4 + 9 + 16 = 30.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int p = 1;
        for (int i = 1; i <= 4; i++) {
            p *= i;
        }
        System.out.println(p);
    }
}`, answer: '24', explain: 'p is 1, 2, 6, 24. This is 4 factorial.' },
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
}`, hint: 'Use a double accumulator that starts at 0 and <code>printf("%.2f")</code>.', explain: 'The loop runs n times; the sum is accumulated, then divided by n after the loop.' },
        { t: 'bug', q: 'This program reads <code>n</code> numbers and should print their sum. With the input <code>3</code> and <code>10 20 30</code> it prints <code>Sum: 30</code> instead of 60. Tap the line with the bug.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum = 0;
            sum += input.nextInt();
        }
        System.out.println("Sum: " + sum);
    }
}`, bug: 9,
          fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += input.nextInt();
        }
        System.out.println("Sum: " + sum);
    }
}`, hint: 'Which line empties the piggy bank?',
          explain: '<code>sum = 0;</code> inside the loop empties the accumulator at the start of every round. After the last round it holds only the last number (30). The sum is already set to 0 once, before the loop; delete the line inside the loop and the answer is 60.',
          explainAr: 'تصفير المجموع داخل الحلقة يمسح ما جمعناه في كل دورة.' },
        { t: 'bug', q: 'Night temperatures in a northern city in January are read. With the input <code>3</code> and <code>-4 -1 -6</code> the program prints <code>Warmest: 0</code>, but 0 is not one of the values. Tap the line with the bug.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int max = 0;
        for (int i = 1; i <= n; i++) {
            int t = input.nextInt();
            if (t > max) {
                max = t;
            }
        }
        System.out.println("Warmest: " + max);
    }
}`, bug: 7,
          fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int max = input.nextInt();
        for (int i = 2; i <= n; i++) {
            int t = input.nextInt();
            if (t > max) {
                max = t;
            }
        }
        System.out.println("Warmest: " + max);
    }
}`, hint: 'Is any of the values bigger than the starting value of max?',
          explain: 'max starts at 0 and no temperature is bigger than 0, so max never changes. Start max with the <b>first value</b> read, and loop from 2 because one value is already read. Then the program prints <code>Warmest: -1</code>.',
          explainAr: 'لا تبدأ{{g:|ي}} max بصفر؛ ابدأ{{g:|ي}} بأول قيمة لأن القيم قد تكون كلها سالبة.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int count = 0;
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            if (i % 3 == 0) {
                count++;
                sum += i;
            }
        }
        System.out.println(count + " " + sum);
    }
}`, answer: '3 18',
          explain: 'Only 3, 6 and 9 are multiples of 3 up to 10. So count is 3 and sum is 3 + 6 + 9 = 18.' },
        { t: 'code', q: 'Read an integer <code>n</code>, then <code>n</code> marks. Print how many passed (mark 60 or more) and the average of all marks with 1 decimal, exactly as:<br><code>Passed: 3</code><br><code>Average: 71.5</code><br>Do not print any prompt.',
          qAr: 'اقرأ n ثم n درجة، واطبع عدد الناجحين (60 فأكثر) ومتوسط الدرجات بمنزلة عشرية واحدة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: "4\n70 55 90 71", expected: "Passed: 3\nAverage: 71.5" }, { stdin: "1\n40", expected: "Passed: 0\nAverage: 40.0" }, { stdin: "3\n60 60 61", expected: "Passed: 3\nAverage: 60.3" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int passed = 0;
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            int mark = input.nextInt();
            sum += mark;
            if (mark >= 60) {
                passed++;
            }
        }
        System.out.println("Passed: " + passed);
        System.out.printf("Average: %.1f%n", (double) sum / n);
    }
}`, hint: 'Two accumulators: a sum for every mark, and a counter inside an if for the passing marks.',
          explain: 'Every mark is added to the sum, but only marks of 60 or more are counted as passed. The average is computed once, after the loop.' }
      ]
    },
    {
      title: 'Nested loops: patterns and tables',
      titleAr: 'الحلقات المتداخلة: الأشكال والجداول',
      minutes: 40,
      body: [
        { type: 'h', en: 'A loop inside a loop' },
        { type: 'p', en: 'Some jobs have two directions: rows and columns, days and lectures, shelves and books. For these we put one loop <b>inside</b> another. This is called a <b>nested loop</b>.',
          ar: 'الحلقة المتداخلة هي حلقة داخل حلقة أخرى.' },
        { type: 'p', en: 'Think of a classroom with 5 rows of 6 seats. To visit every seat you go to row 1 and walk past seats 1 to 6, then to row 2 and walk past seats 1 to 6 again, and so on. "For each row, for each seat" is two loops, one inside the other. The loop outside is the <b>outer loop</b>; the loop inside is the <b>inner loop</b>.' },
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
        { type: 'memory', title: 'row and col in the star rectangle', en: 'Look at <code>col</code>: in every new row it starts again from 1. The inner loop is run from the beginning each time.', frames: [
          { label: 'row = 1, col = 1: print *', vars: [{ name: 'row', type: 'int', value: '1' }, { name: 'col', type: 'int', value: '1' }] },
          { label: 'row = 1, col = 2: print *', vars: [{ name: 'row', type: 'int', value: '1' }, { name: 'col', type: 'int', value: '2' }] },
          { label: 'row = 1, col = 3: print *. Then col is 4, the inner loop ends, println()', vars: [{ name: 'row', type: 'int', value: '1' }, { name: 'col', type: 'int', value: '3' }] },
          { label: 'row++ makes row 2; a new inner loop starts with col = 1', vars: [{ name: 'row', type: 'int', value: '2' }, { name: 'col', type: 'int', value: '1' }] },
          { label: 'row = 2, col = 3: the last star. Then row becomes 3 and 3 &lt;= 2 is false', vars: [{ name: 'row', type: 'int', value: '2' }, { name: 'col', type: 'int', value: '3' }] }
        ], ar: 'العداد col يعود إلى 1 في بداية كل صف جديد.' },
        { type: 'p', en: 'This is the most important fact about nested loops: the inner loop is a complete loop that runs from start to end <b>for each</b> round of the outer loop. Its start part (<code>int col = 1</code>) runs again every time.',
          ar: 'الحلقة الداخلية تبدأ من جديد وتكتمل في كل دورة من دورات الحلقة الخارجية.' },
        { type: 'check', q: 'An outer loop runs 4 times and the inner loop runs 5 times for each. How many times does the inner body run in total?', options: ['9', '20', '4', '5'], answer: 1,
          explain: '4 x 5 = 20.', hint: 'Multiply.' },
        { type: 'h', en: 'Triangles' },
        { type: 'p', en: 'If the inner limit uses the outer variable, every row has a different length. Here row 1 has 1 star, row 2 has 2 stars, and so on.' },
        { type: 'analogy', title: 'A staircase of boxes', en: 'Build a staircase with boxes: put 1 box in the first step, 2 boxes in the second, 3 in the third. The number of boxes in a step equals the step number. In code, the inner loop goes up to <code>row</code>, the step number.' },
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
        { type: 'table', head: ['row', 'spaces (n - row)', 'stars (row)', 'Line (· = one space)'], rows: [
          ['1', '3', '1', '<code>···*</code>'],
          ['2', '2', '2', '<code>··**</code>'],
          ['3', '1', '3', '<code>·***</code>'],
          ['4', '0', '4', '<code>****</code>']
        ] },
        { type: 'p', en: 'Plan a pattern with a small table like this <b>before</b> you write code: for each row, how many spaces and how many stars? Then find the rule (here spaces = n - row, stars = row) and put it in the inner loop limits.',
          ar: 'خطط{{g:|ي}} للشكل بجدول: كم مسافة وكم نجمة في كل صف، ثم اكتب{{g:|ي}} القاعدة.' },
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
}`, out: "Day 1 Lecture 1\nDay 1 Lecture 2\nDay 1 Lecture 3\nDay 2 Lecture 1\nDay 2 Lecture 2\nDay 2 Lecture 3", ar: 'لكل يوم نمر على كل المحاضرات.' },
        { type: 'h', en: 'Totals inside nested loops' },
        { type: 'p', en: 'Nested loops often read data in groups: 3 students, and 3 quiz marks for each student. We want one total <b>per student</b> and one total for the <b>whole class</b>. Where do we set each total to 0? The rule: set an accumulator to 0 just before the loop that fills it. The class total is filled by everything, so it starts before both loops. A student total is filled by the inner loop only, so it starts again inside the outer loop, just before the inner loop.',
          ar: 'صفّر{{g:|ي}} المجمّع قبل الحلقة التي تملؤه مباشرة: مجموع الطالب داخل الحلقة الخارجية، ومجموع الصف قبل الحلقتين.' },
        { type: 'analogy', title: 'Shopping bags and the receipt', en: 'At a checkout each customer gets a new, empty bag, but the cashier keeps one receipt roll for the whole day. The bag is the student total (new for each student); the roll is the class total (never emptied).' },
        { type: 'steps', title: 'Worked example: quiz totals for each student', problem: 'Read 3 quiz marks for each of 3 students. Print the total of each student and then the class total.',
          steps: [
            { en: 'The class total starts before everything.', code: 'int classTotal = 0;' },
            { en: 'Outer loop: one round per student. A new, empty student total at the start of each round.', code: 'for (int s = 1; s <= 3; s++) {\n    int studentTotal = 0;' },
            { en: 'Inner loop: read 3 marks and add each one to <b>both</b> totals.', code: '    for (int q = 1; q <= 3; q++) {\n        int mark = input.nextInt();\n        studentTotal += mark;\n        classTotal += mark;\n    }' },
            { en: 'After the inner loop (still inside the outer loop) the student total is complete: print it.', code: '    System.out.println("Student " + s + ": " + studentTotal);\n}' },
            { en: 'After both loops print the class total. With the marks 8 9 7, 10 6 9, 5 7 8 the student totals are 24, 25, 20 and the class total is 69.', code: 'System.out.println("Class: " + classTotal);' }
          ],
          stdin: "8 9 7\n10 6 9\n5 7 8",
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int classTotal = 0;
        for (int s = 1; s <= 3; s++) {
            int studentTotal = 0;
            for (int q = 1; q <= 3; q++) {
                int mark = input.nextInt();
                studentTotal += mark;
                classTotal += mark;
            }
            System.out.println("Student " + s + ": " + studentTotal);
        }
        System.out.println("Class: " + classTotal);
    }
}`, out: "Student 1: 24\nStudent 2: 25\nStudent 3: 20\nClass: 69", ar: 'مجموع كل طالب يبدأ من صفر، ومجموع الصف يستمر في الزيادة.' },
        { type: 'memory', title: 'Two totals: one restarts, one keeps growing', frames: [
          { label: 'Before the loops', vars: [{ name: 'classTotal', type: 'int', value: '0' }] },
          { label: 'Student 1 finished (8 + 9 + 7)', vars: [{ name: 'classTotal', type: 'int', value: '24' }, { name: 's', type: 'int', value: '1' }, { name: 'studentTotal', type: 'int', value: '24' }] },
          { label: 'Student 2 starts: <code>int studentTotal = 0;</code>', vars: [{ name: 'classTotal', type: 'int', value: '24' }, { name: 's', type: 'int', value: '2' }, { name: 'studentTotal', type: 'int', value: '0' }] },
          { label: 'Student 2 finished (10 + 6 + 9)', vars: [{ name: 'classTotal', type: 'int', value: '49' }, { name: 's', type: 'int', value: '2' }, { name: 'studentTotal', type: 'int', value: '25' }] },
          { label: 'Student 3 finished (5 + 7 + 8)', vars: [{ name: 'classTotal', type: 'int', value: '69' }, { name: 's', type: 'int', value: '3' }, { name: 'studentTotal', type: 'int', value: '20' }] },
          { label: 'After both loops: only classTotal is left', vars: [{ name: 'classTotal', type: 'int', value: '69' }] }
        ] }
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
        'A triangle: the inner limit uses the outer counter.',
        'A total per row starts at 0 inside the outer loop; a grand total starts before both loops.'
      ],
      rememberAr: 'الحلقة الداخلية تكتمل في كل دورة للخارجية. استخدم{{g:|ي}} أسماء مختلفة للعدادين، وضع{{g:|ي}} println() بعد الداخلية.',
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 2; i++) {
            for (int j = 1; j <= 2; j++) {
                System.out.print(i * j + " ");
            }
            System.out.println();
        }
    }
}`, answer: "1 2\n2 4", explain: 'Row 1: 1*1 and 1*2. Row 2: 2*1 and 2*2.' },
        { t: 'mcq', q: 'How many times is <code>print</code> executed?', code: J`
for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 3; j++) {
        System.out.print("#");
    }
}`, options: ['7', '12', '16', '9'], answer: 1, explain: '4 x 3 = 12.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 4; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("#");
            }
            System.out.println();
        }
    }
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
}`, hint: 'The outer loop chooses the digit; the inner loop prints it that many times.', explain: 'In row i the inner loop runs i times and prints i each time.' },
        { t: 'bug', q: 'This program should print 3 rows of 4 stars. It prints stars without end. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        for (int row = 1; row <= 3; row++) {
            for (int col = 1; col <= 4; row++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        for (int row = 1; row <= 3; row++) {
            for (int col = 1; col <= 4; col++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`, hint: 'Which variable does the inner header change?',
          explain: 'The inner loop checks <code>col &lt;= 4</code> but changes <code>row</code>. col stays 1 forever, so the inner loop never ends. Each loop must change its <b>own</b> counter: <code>col++</code> in the inner header.',
          explainAr: 'الحلقة الداخلية يجب أن تغيّر عدادها col وليس row.' },
        { t: 'bug', q: 'This program reads 2 marks for each of 3 students and should print each student’s total. With the input <code>5 5 6 6 7 7</code> it prints 10, 22, 36 instead of 10, 12, 14. Tap the line with the bug.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = 0;
        for (int s = 1; s <= 3; s++) {
            for (int q = 1; q <= 2; q++) {
                total += input.nextInt();
            }
            System.out.println("Student " + s + ": " + total);
        }
    }
}`, bug: 6,
          fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        for (int s = 1; s <= 3; s++) {
            int total = 0;
            for (int q = 1; q <= 2; q++) {
                total += input.nextInt();
            }
            System.out.println("Student " + s + ": " + total);
        }
    }
}`, hint: 'Should each student start with an empty total?',
          explain: '<code>total</code> is set to 0 only once, before the outer loop, so each student’s marks are added on top of the previous students: 10, then 10 + 12 = 22, then 22 + 14 = 36. A per-student total must start again at 0 inside the outer loop, just before the inner loop.',
          explainAr: 'مجموع كل طالب يجب أن يبدأ من صفر داخل الحلقة الخارجية.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int total = 0;
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= i; j++) {
                total += j;
            }
        }
        System.out.println(total);
    }
}`, answer: '10',
          explain: 'For i = 1 the inner loop adds 1. For i = 2 it adds 1 + 2 = 3. For i = 3 it adds 1 + 2 + 3 = 6. Total: 1 + 3 + 6 = 10.' },
        { t: 'code', q: 'Read an integer <code>n</code>. Print <code>n</code> rows: row <code>r</code> shows the numbers 1 to <code>r</code> separated by one space (no space at the end). Do not print any prompt.<br>Example for <code>3</code>:<br><code>1</code><br><code>1 2</code><br><code>1 2 3</code>',
          qAr: 'اطبع n صفاً؛ الصف r يحتوي الأعداد من 1 إلى r بينها مسافة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '3', expected: "1\n1 2\n1 2 3" }, { stdin: '1', expected: '1' }, { stdin: '5', expected: "1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        for (int r = 1; r <= n; r++) {
            for (int c = 1; c <= r; c++) {
                System.out.print(c);
                if (c < r) {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}`, hint: 'The inner loop goes from 1 to r. Print a space only when <code>c &lt; r</code>. Then <code>println()</code> after the inner loop.',
          explain: 'The outer loop makes the rows; the inner loop prints the numbers of one row. The if puts spaces only between numbers.' }
      ]
    },
    {
      title: 'break and continue',
      titleAr: 'break و continue',
      minutes: 40,
      body: [
        { type: 'h', en: 'break: leave the loop now' },
        { type: 'p', en: 'Sometimes you find what you were looking for and there is no reason to continue. <code>break</code> ends the loop immediately. Java jumps to the first line after the loop.',
          ar: 'break تُنهي الحلقة فوراً.' },
        { type: 'p', en: 'A loop with <code>break</code> has two exits: the normal one (the question becomes false) and the early one (the break). <code>break</code> is almost always inside an <code>if</code>, because we want to leave only when something special happens.' },
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
        { type: 'table', head: ['n', 'n % 7', 'n % 7 == 0 ?', 'What happens'], rows: [
          ['50', '1', 'false', 'next round'],
          ['51', '2', 'false', 'next round'],
          ['52', '3', 'false', 'next round'],
          ['53', '4', 'false', 'next round'],
          ['54', '5', 'false', 'next round'],
          ['55', '6', 'false', 'next round'],
          ['56', '0', 'true', 'print, then <b>break</b>: leave the loop']
        ] },
        { type: 'p', en: 'Without <code>break</code> the loop would print every multiple of 7 up to 100 (56, 63, 70, ...). With <code>break</code> it does 7 rounds instead of 51. The question <code>n &lt;= 100</code> is only a safety limit; the real stop comes from inside.' },
        { type: 'memory', title: 'n at the moment of break', frames: [
          { label: 'Start: <code>int n = 50</code>', vars: [{ name: 'n', type: 'int', value: '50' }] },
          { label: 'Rounds 50 to 55: no multiple of 7, n keeps growing', vars: [{ name: 'n', type: 'int', value: '55' }] },
          { label: 'n = 56: 56 % 7 == 0, print it and break', vars: [{ name: 'n', type: 'int', value: '56' }] },
          { label: 'After break: n++ does NOT run, the loop is over. "Done"', vars: [] }
        ], ar: 'بعد break لا يُنفَّذ n++ ولا يُسأل الشرط مرة أخرى.' },
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
        { type: 'p', en: '<code>continue</code> is useful with accumulators: skip the values you do not want, and add all the others. Here we add the numbers 1 to 10 but skip the multiples of 3.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            if (i % 3 == 0) {
                continue;
            }
            sum += i;
        }
        System.out.println("Sum: " + sum);
    }
}`, out: 'Sum: 37' },
        { type: 'memory', title: 'sum skips 3, 6 and 9', frames: [
          { label: 'Before the loop', vars: [{ name: 'sum', type: 'int', value: '0' }] },
          { label: 'i = 1, 2 added: sum = 1 + 2', vars: [{ name: 'sum', type: 'int', value: '3' }, { name: 'i', type: 'int', value: '2' }] },
          { label: 'i = 3: continue, <code>sum += i</code> is skipped', vars: [{ name: 'sum', type: 'int', value: '3' }, { name: 'i', type: 'int', value: '3' }] },
          { label: 'i = 4, 5 added: sum = 3 + 4 + 5', vars: [{ name: 'sum', type: 'int', value: '12' }, { name: 'i', type: 'int', value: '5' }] },
          { label: 'i = 6 skipped; 7, 8 added; 9 skipped; 10 added', vars: [{ name: 'sum', type: 'int', value: '37' }, { name: 'i', type: 'int', value: '10' }] }
        ], ar: 'continue تتخطى سطر الجمع فقط في الدورات المطلوبة.' },
        { type: 'p', en: 'Check: 1 + 2 + ... + 10 = 55, and 3 + 6 + 9 = 18. So 55 - 18 = 37.' },
        { type: 'p', en: 'You could get the same result without continue: put the print inside <code>if (i % 3 != 0) { ... }</code>. Both are correct. <code>continue</code> is handy when the rest of the body is long: you deal with the unwanted case at the top ("skip this one") and the rest of the body stays simple.',
          ar: 'يمكن الاستغناء عن continue باستخدام if، لكنها مفيدة عندما يكون باقي الجسم طويلاً.' },
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
        { type: 'h', en: 'break leaves only one loop' },
        { type: 'p', en: 'In nested loops, <code>break</code> leaves only the loop it is written in (the <b>innermost</b> one). The outer loop goes on with its next round.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int row = 1; row <= 3; row++) {
            for (int col = 1; col <= 5; col++) {
                if (col == 3) {
                    break;
                }
                System.out.print(col + " ");
            }
            System.out.println("| row " + row);
        }
    }
}`, out: "1 2 | row 1\n1 2 | row 2\n1 2 | row 3" },
        { type: 'p', en: 'In each row the inner loop stops at col = 3, but the outer loop still does all 3 rows, and the line after the inner loop still runs every time.',
          ar: 'break في الحلقة الداخلية لا يوقف الحلقة الخارجية.' },
        { type: 'check', q: 'In the program above, how many times is <code>System.out.print(col + " ")</code> executed in total?', options: ['15', '9', '6', '2'], answer: 2,
          explain: 'In each of the 3 rows, it runs for col = 1 and col = 2, then break. 3 x 2 = 6.', hint: 'How many numbers are printed in one row?' },
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
        { type: 'p', en: 'The variable <code>prime</code> is a <b>flag</b>: a boolean that starts with one answer ("yes, prime") and is switched to the other answer when the loop finds a reason. After the loop we look at the flag to know what happened inside. For 97, no divisor is found up to 9 (10 x 10 = 100 &gt; 97), the flag stays true, and the program says "97 is prime".',
          ar: 'المتغير prime علَم منطقي: يبدأ true ويصبح false عند العثور على قاسم.' },
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
}`, out: 'First fail at position 3', ar: 'break توقف الحلقة بمجرد العثور على الدرجة الراسبة.' },
        { type: 'h', en: 'A loop that stops from the inside' },
        { type: 'p', en: 'Sometimes it is easiest to write <code>while (true)</code>: "repeat forever", and to leave with <code>break</code> when the stop value arrives. The read is at the <b>top</b> of the body, so no priming read is needed, and a <code>continue</code> below the read is safe. Use this pattern carefully: a <code>while (true)</code> loop <b>must</b> contain a break that is sure to happen.',
          ar: 'while (true) تتكرر دائماً، ونخرج منها بـ break عند القيمة الحارسة.' },
        { type: 'steps', title: 'Worked example: sales and refunds', problem: 'A small shop types the amounts of the day until 0. A negative amount is a refund: skip it, but count it. Print the total of the sales and the number of refunds skipped.',
          steps: [
            { en: 'Two accumulators before the loop.', code: 'int total = 0;\nint refunds = 0;' },
            { en: 'Repeat forever; read one amount at the top of each round.', code: 'while (true) {\n    int amount = input.nextInt();' },
            { en: 'The sentinel 0: leave the loop at once.', code: '    if (amount == 0) {\n        break;\n    }' },
            { en: 'A refund: count it and skip the rest of this round. The next round reads a new amount, so nothing is stuck.', code: '    if (amount < 0) {\n        refunds++;\n        continue;\n    }' },
            { en: 'A sale: add it. With <code>50 -20 30 -5 40 0</code>: 50 + 30 + 40 = 120, and 2 refunds.', code: '    total += amount;\n}' }
          ],
          stdin: '50 -20 30 -5 40 0',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = 0;
        int refunds = 0;
        while (true) {
            int amount = input.nextInt();
            if (amount == 0) {
                break;
            }
            if (amount < 0) {
                refunds++;
                continue;
            }
            total += amount;
        }
        System.out.println("Sales: " + total);
        System.out.println("Refunds skipped: " + refunds);
    }
}`, out: "Sales: 120\nRefunds skipped: 2", ar: 'break للخروج عند الصفر، و continue لتخطي المبالغ السالبة.' },
        { type: 'table', head: ['amount read', 'What happens', 'total', 'refunds'], rows: [
          ['50', 'added', '50', '0'],
          ['-20', 'refund: count, continue', '50', '1'],
          ['30', 'added', '80', '1'],
          ['-5', 'refund: count, continue', '80', '2'],
          ['40', 'added', '120', '2'],
          ['0', 'break', '120', '2']
        ] }
      ],
      mistakes: [
        { title: 'continue before the change in a while loop', en: 'The change is skipped and the loop never ends.', code: J`
while (i < 10) {
    if (i == 5) continue;
    i++;
}` },
        { title: 'Thinking break ends the program', en: '<code>break</code> only leaves the <b>innermost</b> loop. The code after the loop still runs.', code: J`
for (int i = 1; i <= 5; i++) {
    if (i == 2) break;
}
System.out.println("still printed");   // runs after the break` },
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
        'Put code you want to skip <b>after</b> the continue.',
        '<code>while (true)</code> needs a <code>break</code> that is sure to happen.'
      ],
      rememberAr: 'break تُنهي الحلقة، وcontinue تتخطى الدورة الحالية فقط.',
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                break;
            }
            System.out.print(i + " ");
        }
    }
}`, answer: '1 2', explain: 'When i is 3 the loop ends. 3 is not printed.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 6; i++) {
            if (i % 2 == 0) {
                continue;
            }
            System.out.print(i + " ");
        }
    }
}`, answer: '1 3 5', explain: 'continue skips the print for even numbers.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int total = 0;
        for (int i = 1; i <= 10; i++) {
            if (i == 6) {
                break;
            }
            total += i;
        }
        System.out.println(total);
    }
}`, answer: '15', explain: '1 + 2 + 3 + 4 + 5 = 15. The loop stops at 6 before adding it.' },
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
}`, hint: 'Assume it is prime, then look for a divisor d from 2 while <code>d * d &lt;= n</code>.', explain: 'If n has a divisor, one of them is at most the square root of n. break stops at the first divisor.' },
        { t: 'bug', q: 'This program should print the first multiple of 9 between 20 and 40 (<code>Found 27</code>), then <code>End</code>. It prints only <code>End</code>. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        for (int n = 20; n <= 40; n++) {
            if (n % 9 == 0) {
                System.out.println("Found " + n);
            }
            break;
        }
        System.out.println("End");
    }
}`, bug: 7,
          fix: J`
public class Main {
    public static void main(String[] args) {
        for (int n = 20; n <= 40; n++) {
            if (n % 9 == 0) {
                System.out.println("Found " + n);
                break;
            }
        }
        System.out.println("End");
    }
}`, hint: 'Is the break inside the if or outside it?',
          explain: 'The <code>break</code> is outside the if, so it runs in the very first round (n = 20) whatever the test says. The loop ends before 27 is reached. Put the break <b>inside</b> the if: leave only when a multiple is found.',
          explainAr: 'break خارج if فتخرج الحلقة من الدورة الأولى. ضعها داخل if.' },
        { t: 'bug', q: 'This program should print the odd numbers <code>1 3 5</code>. It prints <code>1</code> and then hangs. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 6) {
            if (i % 2 == 0) {
                continue;
            }
            System.out.print(i + " ");
            i++;
        }
    }
}`, bug: 6,
          fix: J`
public class Main {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 6) {
            if (i % 2 == 0) {
                i++;
                continue;
            }
            System.out.print(i + " ");
            i++;
        }
    }
}`, hint: 'In a while loop, where does continue jump to? Is i++ skipped?',
          explain: 'When i is 2, <code>continue</code> jumps straight back to the question and skips <code>i++</code>. i stays 2 forever, so the loop never ends. In a while loop, change the variable <b>before</b> continue (or use a for loop, where the change part always runs).',
          explainAr: 'في while تتخطى continue سطر i++ فتعلق الحلقة. غيّر{{g:|ي}} العداد قبل continue.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int count = 0;
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (j > i) {
                    break;
                }
                count++;
            }
        }
        System.out.println(count);
    }
}`, answer: '6',
          explain: 'break leaves only the inner loop. For i = 1, j counts 1 (then 2 &gt; 1 breaks). For i = 2, j counts 1, 2. For i = 3, j counts 1, 2, 3. Total 1 + 2 + 3 = 6.' },
        { t: 'code', q: 'Read an integer <code>n</code>, then <code>n</code> integers. Print the position (1, 2, 3, ...) of the <b>first</b> negative number, like <code>First negative at 3</code>, or <code>None</code> if there is no negative number. Use <code>break</code>. Do not print any prompt.',
          qAr: 'اقرأ n ثم n عدداً، واطبع موقع أول عدد سالب أو None.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: "5\n4 7 -2 9 -1", expected: 'First negative at 3' }, { stdin: "3\n1 2 3", expected: 'None' }, { stdin: "1\n-5", expected: 'First negative at 1' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int found = 0;
        for (int i = 1; i <= n; i++) {
            int x = input.nextInt();
            if (x < 0) {
                found = i;
                break;
            }
        }
        if (found > 0) {
            System.out.println("First negative at " + found);
        } else {
            System.out.println("None");
        }
    }
}`, hint: 'Keep a variable <code>found = 0</code>. When you see a negative number, store its position and break. After the loop, test found.',
          explain: 'found stays 0 if no negative number is seen. break stops at the first one, so later negatives (like -1 in test 1) do not change the answer.' }
      ]
    },
    {
      title: 'Choosing the right loop and off-by-one errors',
      titleAr: 'اختيار الحلقة المناسبة وخطأ الفرق بواحد',
      minutes: 40,
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
        { type: 'p', en: 'Some quick examples. "Print the 12 months of the year": the count is known, so <b>for</b>. "Read prices until the cashier types 0": the count is unknown and there may be no prices at all, so <b>while</b> with a sentinel. "Ask for a password until it is right": you must ask at least once, so <b>do-while</b>. "Keep halving a number until it is below 1": unknown count, so <b>while</b>.',
          ar: 'عدد معروف: for. عدد غير معروف وقد يكون صفراً: while. مرة على الأقل: do-while.' },
        { type: 'check', q: 'You must ask the user for a PIN at least once and repeat while it is wrong. Which loop fits best?', options: ['for', 'while', 'do-while', 'none'], answer: 2,
          explain: 'You must ask at least once, so do-while is the natural choice.', hint: 'At least once.' },
        { type: 'check', q: 'You want to read exactly 30 marks. Which loop fits best?', options: ['for', 'do-while', 'while with a sentinel', 'none'], answer: 0,
          explain: 'The number of repeats (30) is known, so a counting for loop is clearest.', hint: 'Is the count known?' },
        { type: 'h', en: 'One job, three loops' },
        { type: 'p', en: 'To see that the three loops are really the same machine, here is one program that prints 1 to 3 three times, once with each loop. Look where the start, the question and the change are in each one.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            System.out.print(i + " ");
        }
        System.out.println("(for)");

        int j = 1;
        while (j <= 3) {
            System.out.print(j + " ");
            j++;
        }
        System.out.println("(while)");

        int k = 1;
        do {
            System.out.print(k + " ");
            k++;
        } while (k <= 3);
        System.out.println("(do-while)");
    }
}`, out: "1 2 3 (for)\n1 2 3 (while)\n1 2 3 (do-while)" },
        { type: 'p', en: 'All three print the same thing. The for loop is the shortest and the safest here, because the count is known. The difference appears only in special cases: with a start value of 4 (the question false at once) the for and the while print nothing, but the do-while still prints 4.',
          ar: 'كل الحلقات تؤدي العمل نفسه، لكن الاختيار الصحيح يجعل البرنامج أوضح وأقل أخطاء.' },
        { type: 'analogy', title: 'Choosing transport', en: 'You could drive to the shop next door, but walking is simpler. You could walk from Riyadh to Jeddah, but a car or a plane fits that trip much better. In the same way, every loop <i>can</i> do every job, but one of them fits the job best and leaves less room for mistakes.' },
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
        { type: 'memory', title: 'Counting the rounds of i = 0; i &lt; 3', en: 'A counter <code>rounds</code> is added to the loop <code>for (int i = 0; i &lt; 3; i++) { rounds++; }</code>. Watch both boxes.', frames: [
          { label: 'Before the loop', vars: [{ name: 'rounds', type: 'int', value: '0' }] },
          { label: 'i = 0: 0 &lt; 3, rounds++', vars: [{ name: 'rounds', type: 'int', value: '1' }, { name: 'i', type: 'int', value: '0' }] },
          { label: 'i = 1: 1 &lt; 3, rounds++', vars: [{ name: 'rounds', type: 'int', value: '2' }, { name: 'i', type: 'int', value: '1' }] },
          { label: 'i = 2: 2 &lt; 3, rounds++', vars: [{ name: 'rounds', type: 'int', value: '3' }, { name: 'i', type: 'int', value: '2' }] },
          { label: 'i = 3: 3 &lt; 3 is false. 3 rounds, and the last value used was 2, not 3', vars: [{ name: 'rounds', type: 'int', value: '3' }] }
        ], ar: 'من 0 مع &lt; 3 نحصل على 3 دورات، وآخر قيمة هي 2.' },
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
        { type: 'p', en: 'There is a quick formula for loops with a step of 1. From <code>a</code> to <code>b</code> with <code>&lt;=</code>, the loop runs <code>b - a + 1</code> times; with <code>&lt;</code> it runs <code>b - a</code> times. The "+ 1" is the fence post from the analogy: it counts the first value too. For other steps, the safest way is to write the values down and count them.' },
        { type: 'note', kind: 'exam', en: 'Check the <b>boundaries</b>: the first value, the last value, and how many rounds. Six rounds here: 0, 2, 4, 6, 8, 10. A loop from <code>a</code> to <code>b</code> (step 1) runs <code>b - a + 1</code> times.',
          ar: 'افحص{{g:|ي}} القيمة الأولى والأخيرة وعدد التكرارات.' },
        { type: 'check', q: 'How many times does <code>for (int i = 5; i &lt;= 9; i++)</code> run?', options: ['4', '5', '9', '10'], answer: 1,
          explain: 'The values are 5, 6, 7, 8, 9: five values = 9 - 5 + 1.', hint: 'List the values.' },
        { type: 'h', en: 'Off-by-one when counting down' },
        { type: 'p', en: 'The same trap waits in countdowns. To print 5 down to 1 you need <code>i &gt;= 1</code> (or <code>i &gt; 0</code>). With <code>i &gt; 1</code> the 1 is missing; with <code>i &gt;= 0</code> an extra 0 appears.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 5; i >= 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println("Go!");
    }
}`, out: '5 4 3 2 1 Go!' },
        { type: 'table', head: ['Header', 'Values', 'Rounds'], rows: [
          ['<code>for (int i = 5; i &gt;= 1; i--)</code>', '5 4 3 2 1', '5'],
          ['<code>for (int i = 5; i &gt; 1; i--)</code>', '5 4 3 2', '4 (1 is missing)'],
          ['<code>for (int i = 5; i &gt;= 0; i--)</code>', '5 4 3 2 1 0', '6 (extra 0)']
        ] },
        { type: 'p', en: 'Professional programmers do not trust their eyes here. They test the <b>boundaries</b>: the first value, the last value, and the smallest possible input (n = 1, or n = 0). Two minutes of testing with pencil and paper saves an hour of searching later.',
          ar: 'اختبر{{g:|ي}} الحدود: أول قيمة وآخر قيمة وأصغر مدخل ممكن.' },
        { type: 'check', q: 'Which header prints <code>10 9 8 7 6 5 4 3 2 1</code> (exactly 10 numbers)?', options: ['<code>for (int i = 10; i &gt; 1; i--)</code>', '<code>for (int i = 10; i &gt;= 0; i--)</code>', '<code>for (int i = 10; i &gt; 0; i--)</code>', '<code>for (int i = 10; i &lt; 1; i--)</code>'], answer: 2,
          explain: 'i &gt; 0 keeps 1 and stops before 0. The first misses 1, the second adds 0, the last never runs (10 &lt; 1 is false).', hint: 'Test the last value: should 1 be printed? Should 0?' },
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
}`, out: '1 2 3 4 5', ar: 'جرّب{{g:|ي}} القيمة الأخيرة بنفسك لتكتشف{{g:|ي}} الخطأ.' },
        { type: 'steps', title: 'Worked example: even numbers from a to b', problem: 'Print all the even numbers from <code>a</code> to <code>b</code>, both included. Test it with a = 3 and b = 10, and check the boundaries.',
          steps: [
            { en: 'Choose the loop: we can count the values, so use <b>for</b>.' },
            { en: 'Start: the first even number that is at least a. If a is odd (3), start at a + 1 (4).', code: 'int start = a;\nif (start % 2 != 0) {\n    start++;\n}' },
            { en: 'Question: b must be included, so use <code>&lt;=</code>. Change: jump by 2.', code: 'for (int i = start; i <= b; i += 2) {\n    System.out.print(i + " ");\n}' },
            { en: 'Test the boundaries. First value: 4 (3 is odd, so not printed: correct). Last value: 10 is even and 10 &lt;= 10 is true, so it is printed: correct. Next would be 12 &gt; 10: stop.' },
            { en: 'Also try a small case in your head: a = 7, b = 7. start becomes 8, and 8 &lt;= 7 is false, so nothing is printed. Correct: there is no even number from 7 to 7.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int a = 3;
        int b = 10;
        int start = a;
        if (start % 2 != 0) {
            start++;
        }
        for (int i = start; i <= b; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`, out: '4 6 8 10', ar: 'افحص{{g:|ي}} أول قيمة وآخر قيمة وحالة صغيرة قبل أن تثق{{g:|ي}} بالحلقة.' }
      ],
      mistakes: [
        { title: 'Using &lt; when you need &lt;=', en: 'The last number is missed.', code: J`
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
public class Main {
    public static void main(String[] args) {
        int count = 0;
        for (int i = 3; i <= 9; i++) {
            count++;
        }
        System.out.println(count);
    }
}`, answer: '7', explain: 'The values are 3, 4, 5, 6, 7, 8, 9: seven values = 9 - 3 + 1.' },
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
}`, hint: 'Loop i from a to b with <code>&lt;=</code> so b is included.', explain: 'The loop includes both ends, so the count equals b - a + 1.' },
        { t: 'bug', q: 'This countdown should print <code>10 9 8 7 6 5 4 3 2 1 Go!</code>. The 1 is missing. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 10; i > 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println("Go!");
    }
}`, bug: 3,
          fix: J`
public class Main {
    public static void main(String[] args) {
        for (int i = 10; i >= 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println("Go!");
    }
}`, hint: 'Test the last value: is 1 &gt; 1 true?',
          explain: 'When i is 1, the question <code>1 &gt; 1</code> is false, so 1 is never printed: an off-by-one error. With <code>i &gt;= 1</code> (or <code>i &gt; 0</code>) the loop includes 1 and prints 10 numbers.',
          explainAr: 'الشرط i &gt; 1 يستبعد الرقم 1؛ الصحيح i &gt;= 1.' },
        { t: 'bug', q: 'This program reads <code>n</code> and prints the numbers 1 to n. It is correct for n = 3, but for <code>0</code> it prints <code>1</code> instead of nothing. The wrong kind of loop was chosen. Tap the line with the bug.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int i = 1;
        do {
            System.out.println(i);
            i++;
        } while (i <= n);
    }
}`, bug: [8, 11],
          fix: J`
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
}`, hint: 'Which loop always runs at least once? Should this loop be able to run 0 times?',
          explain: 'A do-while runs its body before it asks the question, so it always prints at least one number. For n = 0 nothing should be printed, so the loop must ask <b>first</b>: use a while loop (or a for loop). Then <code>1 &lt;= 0</code> is false and the body runs 0 times.',
          explainAr: 'do-while تعمل مرة على الأقل، والمطلوب هنا حلقة قد لا تعمل أبداً، فنستخدم while.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int count = 0;
        for (int i = 10; i > 0; i -= 3) {
            count++;
            System.out.print(i + " ");
        }
        System.out.println("| " + count);
    }
}`, answer: '10 7 4 1 | 4',
          explain: 'i is 10, 7, 4, 1, then -2 (-2 &gt; 0 is false). Four rounds. The count is printed after the loop, on the same line.' }
      ]
    },
    {
      title: 'Loops over text: counting, reversing, palindromes',
      titleAr: 'الحلقات على النصوص: العدّ والعكس والكلمات المتناظرة',
      minutes: 30,
      body: [
        { type: 'h', en: 'Visiting every letter' },
        { type: 'p', en: 'In Unit 4 you used <code>length()</code> and <code>charAt(i)</code> on Strings, but only for one or two letters at a time. Many real tasks need <b>every</b> letter: count the vowels in a name, check a student ID for letters, write a word backwards. A loop can visit the letters one by one.',
          ar: 'الحلقة تمر على أحرف النص حرفاً حرفاً باستخدام length() و charAt(i).' },
        { type: 'analogy', title: 'Houses on a street', en: 'Imagine the letters of a word as houses on a street. The first house has number <b>0</b>, not 1. A word with 4 letters has houses 0, 1, 2, 3. A postman who visits every house starts at 0 and stops after house 3. He never knocks on house 4, because it does not exist.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String city = "Najd";
        for (int i = 0; i < city.length(); i++) {
            System.out.println(i + ": " + city.charAt(i));
        }
    }
}`, out: "0: N\n1: a\n2: j\n3: d" },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['String city = "Najd";', 'A word with 4 letters. Their positions (indexes) are 0, 1, 2, 3.'],
          ['int i = 0;', 'Start at the first index, 0.'],
          ['i < city.length();', '<code>length()</code> is 4. Keep going while i is <b>less than</b> 4, so the last i is 3.'],
          ['city.charAt(i)', 'The letter at position i.'],
          ['i++', 'Move to the next letter.']
        ], ar: 'الفهارس تبدأ من 0 وتنتهي عند length() - 1، لذلك نستخدم &lt; وليس &lt;=.' },
        { type: 'note', kind: 'warn', en: 'With <code>i &lt;= city.length()</code> the loop also tries <code>charAt(4)</code>. That letter does not exist, so the program stops with <code>StringIndexOutOfBoundsException</code>. Remember the pattern <code>for (int i = 0; i &lt; s.length(); i++)</code>.' },
        { type: 'check', q: 'For <code>String s = "Jeddah";</code>, what is the last value of i that the loop uses?', options: ['6', '5', '7', '0'], answer: 1,
          explain: '"Jeddah" has 6 letters, at indexes 0 to 5. With <code>i &lt; 6</code> the last i is 5.', hint: 'The last index is length() - 1.' },
        { type: 'h', en: 'Counting a letter' },
        { type: 'p', en: 'Put a counter and an <code>if</code> inside the loop and you can count anything: a letter, the spaces, the digits. How many times does the letter m appear in "Dammam"? Remember that a <code>char</code> is written in single quotes: <code>\'m\'</code>, and compared with <code>==</code>.',
          ar: 'نضع عداداً و if داخل الحلقة لعدّ حرف معين. الحرف يُكتب بين علامتي اقتباس مفردتين.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String word = "Dammam";
        int count = 0;
        for (int i = 0; i < word.length(); i++) {
            if (word.charAt(i) == 'm') {
                count++;
            }
        }
        System.out.println("m appears " + count + " times");
    }
}`, out: 'm appears 3 times' },
        { type: 'table', head: ['i', 'charAt(i)', "== 'm' ?", 'count after'], rows: [
          ['0', 'D', 'no', '0'],
          ['1', 'a', 'no', '0'],
          ['2', 'm', 'yes', '1'],
          ['3', 'm', 'yes', '2'],
          ['4', 'a', 'no', '2'],
          ['5', 'm', 'yes', '3']
        ] },
        { type: 'memory', title: 'i, the letter, and the counter', frames: [
          { label: 'Before the loop', vars: [{ name: 'word', type: 'String', value: '"Dammam"' }, { name: 'count', type: 'int', value: '0' }] },
          { label: 'i = 2: the letter is m, count++', vars: [{ name: 'word', type: 'String', value: '"Dammam"' }, { name: 'count', type: 'int', value: '1' }, { name: 'i', type: 'int', value: '2' }] },
          { label: 'i = 3: m again, count++', vars: [{ name: 'word', type: 'String', value: '"Dammam"' }, { name: 'count', type: 'int', value: '2' }, { name: 'i', type: 'int', value: '3' }] },
          { label: 'i = 4: a, no change', vars: [{ name: 'word', type: 'String', value: '"Dammam"' }, { name: 'count', type: 'int', value: '2' }, { name: 'i', type: 'int', value: '4' }] },
          { label: 'i = 5: m, count++. Then i = 6 and 6 &lt; 6 is false', vars: [{ name: 'word', type: 'String', value: '"Dammam"' }, { name: 'count', type: 'int', value: '3' }, { name: 'i', type: 'int', value: '5' }] }
        ] },
        { type: 'check', q: 'With <code>word = "Madinah"</code> and the same loop counting <code>\'m\'</code>, what is printed?', options: ['m appears 1 times', 'm appears 0 times', 'm appears 2 times', 'An error'], answer: 1,
          explain: 'The only M in "Madinah" is a capital M, and <code>\'M\' == \'m\'</code> is false. Capital and small letters are different chars. Use <code>toLowerCase()</code> first if you want to count both.', hint: 'Is M the same char as m?' },
        { type: 'h', en: 'Counting vowels' },
        { type: 'p', en: 'The vowels in English are a, e, i, o, u. To count them, store the letter in a <code>char</code> variable and test it with <code>||</code>. We change the text to small letters first with <code>toLowerCase()</code> (from Unit 4), so that capital vowels are counted too.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String text = "Information Systems".toLowerCase();
        int vowels = 0;
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                vowels++;
            }
        }
        System.out.println("Vowels: " + vowels);
    }
}`, out: 'Vowels: 6' },
        { type: 'p', en: 'In "information" the vowels are i, o, a, i, o (5), and in "systems" there is one e. Total 6. A shorter test that does the same job: <code>"aeiou".indexOf(c) &gt;= 0</code>, which is true when c is one of those five letters.',
          ar: 'نحوّل النص إلى أحرف صغيرة أولاً، ثم نفحص كل حرف.' },
        { type: 'h', en: 'Writing a word backwards' },
        { type: 'p', en: 'To reverse a word, walk through it from the <b>last</b> index down to 0 and add each letter to a new String. The new String is an accumulator too: it starts empty (<code>""</code>) and grows by one letter in every pass.' },
        { type: 'analogy', title: 'Threading beads', en: 'You take beads off a string from the right end, one at a time, and put each on a new string. When you are done, the new string has the beads in the opposite order.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String word = "Abha";
        String rev = "";
        for (int i = word.length() - 1; i >= 0; i--) {
            rev += word.charAt(i);
        }
        System.out.println(rev);
    }
}`, out: 'ahbA' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['String rev = "";', 'An empty String: the accumulator for text starts with no letters.'],
          ['int i = word.length() - 1;', 'Start at the last index: 4 - 1 = 3.'],
          ['i >= 0;', 'Go down to index 0 and include it.'],
          ['rev += word.charAt(i);', 'Add the letter to the end of rev.']
        ], ar: 'نبدأ من آخر فهرس length() - 1 وننزل حتى 0، ونضيف كل حرف إلى النص الجديد.' },
        { type: 'memory', title: 'rev grows one letter at a time', frames: [
          { label: 'Before the loop', vars: [{ name: 'word', type: 'String', value: '"Abha"' }, { name: 'rev', type: 'String', value: '""' }] },
          { label: 'i = 3: add a', vars: [{ name: 'word', type: 'String', value: '"Abha"' }, { name: 'rev', type: 'String', value: '"a"' }, { name: 'i', type: 'int', value: '3' }] },
          { label: 'i = 2: add h', vars: [{ name: 'word', type: 'String', value: '"Abha"' }, { name: 'rev', type: 'String', value: '"ah"' }, { name: 'i', type: 'int', value: '2' }] },
          { label: 'i = 1: add b', vars: [{ name: 'word', type: 'String', value: '"Abha"' }, { name: 'rev', type: 'String', value: '"ahb"' }, { name: 'i', type: 'int', value: '1' }] },
          { label: 'i = 0: add A. Then i = -1 and -1 &gt;= 0 is false', vars: [{ name: 'word', type: 'String', value: '"Abha"' }, { name: 'rev', type: 'String', value: '"ahbA"' }, { name: 'i', type: 'int', value: '0' }] }
        ] },
        { type: 'check', q: 'What does the reverse loop give for the word <code>"stop"</code>?', options: ['stop', 'pots', 'tops', 'spot'], answer: 1,
          explain: 'The letters from the last to the first are p, o, t, s: "pots".', hint: 'Read the word from right to left.' },
        { type: 'h', en: 'Palindromes' },
        { type: 'p', en: 'A <b>palindrome</b> is a word that reads the same in both directions: <i>level</i>, <i>radar</i>, <i>racecar</i>. Now that we can reverse a word, the test is easy: reverse it, then compare with <code>equals</code> (never <code>==</code> for Strings).',
          ar: 'الكلمة المتناظرة تُقرأ بالطريقة نفسها من الجهتين، مثل level.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String word = "level";
        String rev = "";
        for (int i = word.length() - 1; i >= 0; i--) {
            rev += word.charAt(i);
        }
        if (word.equals(rev)) {
            System.out.println(word + " is a palindrome");
        } else {
            System.out.println(word + " is not a palindrome");
        }
    }
}`, out: 'level is a palindrome' },
        { type: 'steps', title: 'Worked example: letters and vowels in a name', problem: 'Read a whole line (for example a university name) and print how many letters and how many vowels it has. Spaces are not letters.',
          steps: [
            { en: 'Read the whole line with <code>nextLine()</code> and change it to small letters.', code: 'String line = input.nextLine().toLowerCase();' },
            { en: 'Two counters before the loop.', code: 'int letters = 0;\nint vowels = 0;' },
            { en: 'Visit every char. <code>Character.isLetter(c)</code> (Unit 4) is true for letters only, not for spaces.', code: 'for (int i = 0; i < line.length(); i++) {\n    char c = line.charAt(i);\n    if (Character.isLetter(c)) {\n        letters++;\n    }' },
            { en: 'In the same pass, test for a vowel.', code: '    if ("aeiou".indexOf(c) >= 0) {\n        vowels++;\n    }\n}' },
            { en: 'Print after the loop. "Prince Sultan University" has 6 + 6 + 10 = 22 letters; its vowels are i, e, u, a, u, i, e, i: 8.' }
          ],
          stdin: 'Prince Sultan University',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String line = input.nextLine().toLowerCase();
        int letters = 0;
        int vowels = 0;
        for (int i = 0; i < line.length(); i++) {
            char c = line.charAt(i);
            if (Character.isLetter(c)) {
                letters++;
            }
            if ("aeiou".indexOf(c) >= 0) {
                vowels++;
            }
        }
        System.out.println("Letters: " + letters);
        System.out.println("Vowels: " + vowels);
    }
}`, out: "Letters: 22\nVowels: 8", ar: 'في الدورة نفسها يمكن فحص الحرف بأكثر من شرط وتحديث أكثر من عداد.' },
        { type: 'steps', title: 'Worked example: palindrome with two fingers', problem: 'Check if a word is a palindrome without building the reverse: compare the first and last letters, then the second and the second-last, and so on. Stop at the first difference.',
          steps: [
            { en: 'Read the word in small letters. Two positions: <code>left</code> at the start, <code>right</code> at the end. A flag that says "palindrome so far".', code: 'String word = input.next().toLowerCase();\nint left = 0;\nint right = word.length() - 1;\nboolean pal = true;' },
            { en: 'Repeat while the two fingers have not met. We do not know the number of passes in advance, so we use while.', code: 'while (left < right) {' },
            { en: 'If the two letters are different, it is not a palindrome: switch the flag and leave with break.', code: '    if (word.charAt(left) != word.charAt(right)) {\n        pal = false;\n        break;\n    }' },
            { en: 'Otherwise move both fingers towards the middle.', code: '    left++;\n    right--;\n}' },
            { en: 'For "Racecar" (racecar): r = r, a = a, c = c, then left = right = 3 and the loop stops. The flag is still true.' }
          ],
          stdin: 'Racecar',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String word = input.next().toLowerCase();
        int left = 0;
        int right = word.length() - 1;
        boolean pal = true;
        while (left < right) {
            if (word.charAt(left) != word.charAt(right)) {
                pal = false;
                break;
            }
            left++;
            right--;
        }
        if (pal) {
            System.out.println(word + ": palindrome");
        } else {
            System.out.println(word + ": not a palindrome");
        }
    }
}`, out: 'racecar: palindrome', ar: 'نقارن الحرف الأول بالأخير ثم نتحرك نحو الوسط، ونتوقف عند أول اختلاف.' },
        { type: 'table', head: ['left', 'right', 'charAt(left)', 'charAt(right)', 'Same?'], rows: [
          ['0', '6', 'r', 'r', 'yes, move in'],
          ['1', '5', 'a', 'a', 'yes, move in'],
          ['2', '4', 'c', 'c', 'yes, move in'],
          ['3', '3', '', '', 'left &lt; right is false: stop']
        ] }
      ],
      mistakes: [
        { title: 'Using &lt;= length()', en: 'The last index is <code>length() - 1</code>. With <code>&lt;=</code> the loop asks for one letter too many and the program crashes with <code>StringIndexOutOfBoundsException</code>.', code: J`
for (int i = 0; i <= word.length(); i++) {   // crash at the end
    System.out.print(word.charAt(i));
}`, ar: 'آخر فهرس هو length() - 1.' },
        { title: 'Double quotes for a char', en: 'A char is written in single quotes. <code>charAt(i) == "m"</code> compares a char with a String: compile error.', code: J`
if (word.charAt(i) == "m")   // error
if (word.charAt(i) == 'm')   // right` },
        { title: 'Starting the backwards loop at length()', en: 'There is no letter at index <code>length()</code>. Start at <code>length() - 1</code>.', code: J`
for (int i = word.length(); i >= 0; i--)       // crash
for (int i = word.length() - 1; i >= 0; i--)   // right` },
        { title: 'Comparing Strings with ==', en: 'To check a palindrome, compare the word and its reverse with <code>equals</code>. <code>==</code> does not compare the letters.', code: J`
if (word == rev)        // wrong
if (word.equals(rev))   // right` }
      ],
      remember: [
        'Visit every letter with <code>for (int i = 0; i &lt; s.length(); i++)</code> and <code>s.charAt(i)</code>.',
        'Indexes go from 0 to <code>length() - 1</code>.',
        'A char is in single quotes and compared with <code>==</code>; a String is compared with <code>equals</code>.',
        'To reverse: start at <code>length() - 1</code>, go down to 0, and add each letter to a String that starts as <code>""</code>.',
        'Use <code>toLowerCase()</code> first when capital and small letters should count the same.'
      ],
      rememberAr: 'نمر على النص من الفهرس 0 إلى length() - 1. الحرف بين علامتي اقتباس مفردتين ويُقارن بـ ==، والنص يُقارن بـ equals.',
      practice: [
        { t: 'mcq', q: 'For <code>String s = "Tabuk";</code>, which loop visits every letter exactly once?', options: ['<code>for (int i = 1; i &lt;= s.length(); i++)</code>', '<code>for (int i = 0; i &lt; s.length(); i++)</code>', '<code>for (int i = 0; i &lt;= s.length(); i++)</code>', '<code>for (int i = 1; i &lt; s.length(); i++)</code>'], answer: 1,
          explain: 'Indexes are 0 to 4 for a 5-letter word. Start at 0 and use <code>&lt; s.length()</code>.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        String s = "Tabuk";
        for (int i = 0; i < s.length(); i += 2) {
            System.out.print(s.charAt(i));
        }
        System.out.println();
    }
}`, answer: 'Tbk', explain: 'i is 0, 2, 4 (then 6, which is not &lt; 5). The letters at those indexes are T, b, k.' },
        { t: 'fill', q: 'Complete the loop that builds the reverse of <code>word</code>.', code: J`
String rev = "";
for (int i = word.___() - 1; i ___ 0; i--) {
    rev += word.charAt(i);
}`, answers: ['length', '>='], explain: 'Start at the last index <code>length() - 1</code> and go down to 0 included, with <code>&gt;=</code>.' },
        { t: 'bug', q: 'This program should print the letters of "Hail" with a dash after each one: <code>H-a-i-l-</code>. It prints the dashes and then crashes. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        String city = "Hail";
        for (int i = 0; i <= city.length(); i++) {
            System.out.print(city.charAt(i) + "-");
        }
        System.out.println();
    }
}`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        String city = "Hail";
        for (int i = 0; i < city.length(); i++) {
            System.out.print(city.charAt(i) + "-");
        }
        System.out.println();
    }
}`, hint: 'What is the last index of a 4-letter word?',
          explain: 'With <code>&lt;=</code>, i takes the values 0, 1, 2, 3 and also 4. <code>charAt(4)</code> does not exist, so Java stops with <code>StringIndexOutOfBoundsException</code>. With <code>&lt;</code> the last index is 3 and the program prints <code>H-a-i-l-</code>.',
          explainAr: 'الفهرس 4 غير موجود في كلمة من 4 أحرف؛ استخدم{{g:|ي}} &lt;.' },
        { t: 'code', q: 'Read a word and then a letter. Print how many times the letter appears in the word (capital and small letters are different). Print only the number. Do not print any prompt.<br>Example: <code>banana a</code> prints <code>3</code>.',
          qAr: 'اقرأ كلمة ثم حرفاً، واطبع عدد مرات ظهور الحرف في الكلمة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String word = input.next();
        char letter = input.next().charAt(0);
        // your code here
    }
}`, tests: [ { stdin: 'banana a', expected: '3' }, { stdin: 'Dammam m', expected: '3' }, { stdin: 'Riyadh z', expected: '0' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String word = input.next();
        char letter = input.next().charAt(0);
        int count = 0;
        for (int i = 0; i < word.length(); i++) {
            if (word.charAt(i) == letter) {
                count++;
            }
        }
        System.out.println(count);
    }
}`, hint: 'A counter, a for loop over the indexes, and <code>word.charAt(i) == letter</code>.',
          explain: 'The loop looks at every char and the counter grows only when the char equals the letter.' },
        { t: 'code', q: 'Read one word. Print <code>Palindrome</code> if it reads the same backwards (ignore capital letters), otherwise <code>Not palindrome</code>. Do not print any prompt.<br>Example: <code>Level</code> prints <code>Palindrome</code>.',
          qAr: 'اقرأ كلمة واطبع Palindrome إذا كانت تُقرأ من الجهتين بالطريقة نفسها.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String word = input.next().toLowerCase();
        // your code here
    }
}`, tests: [ { stdin: 'Level', expected: 'Palindrome' }, { stdin: 'riyadh', expected: 'Not palindrome' }, { stdin: 'a', expected: 'Palindrome' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String word = input.next().toLowerCase();
        String rev = "";
        for (int i = word.length() - 1; i >= 0; i--) {
            rev += word.charAt(i);
        }
        if (word.equals(rev)) {
            System.out.println("Palindrome");
        } else {
            System.out.println("Not palindrome");
        }
    }
}`, hint: 'Build the reverse with a loop from <code>length() - 1</code> down to 0, then compare with <code>equals</code>.',
          explain: 'The word is already in small letters, so "Level" becomes "level", whose reverse is also "level". A one-letter word is always a palindrome.' }
      ]
    },
    {
      title: 'Loops over the digits of a number',
      titleAr: 'الحلقات على أرقام العدد',
      minutes: 30,
      body: [
        { type: 'h', en: 'Two tools: % 10 and / 10' },
        { type: 'p', en: 'Numbers hide many small tasks: check a student ID, add the digits of a code, write a number backwards, find out if 12321 reads the same in both directions. For all of these we must take a number apart, digit by digit. You met the two tools in the lesson on tracing: <code>n % 10</code> gives the <b>last digit</b>, and <code>n / 10</code> (integer division) <b>removes</b> the last digit.',
          ar: 'n % 10 تعطي آخر رقم، و n / 10 تحذف آخر رقم.' },
        { type: 'table', head: ['n', 'n % 10 (last digit)', 'n / 10 (the rest)'], rows: [
          ['4071', '1', '407'],
          ['407', '7', '40'],
          ['40', '0', '4'],
          ['4', '4', '0']
        ] },
        { type: 'analogy', title: 'A train leaving the station', en: 'A train with 4 carriages leaves a station, and at each stop the last carriage is uncoupled. At every stop you can read the number on the carriage that leaves (<code>% 10</code>), and the train becomes shorter (<code>/ 10</code>). When no carriages are left (the number is 0), the trip is over.' },
        { type: 'p', en: 'Remember why <code>/ 10</code> works: both numbers are ints, so Java drops the decimals. 4071 / 10 is 407, not 407.1. This is the one place where integer division is exactly what we want.' },
        { type: 'p', en: 'We do not know how many digits a number has, so we use a <b>while</b> loop that repeats while the number is still bigger than 0.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 4071;
        while (n > 0) {
            System.out.println(n % 10);
            n /= 10;
        }
    }
}`, out: "1\n7\n0\n4" },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['while (n > 0) {', 'As long as some digits are left.'],
          ['System.out.println(n % 10);', 'Print the last digit.'],
          ['n /= 10;', 'Remove the last digit. This is the "change": n gets shorter until it is 0.']
        ], ar: 'نكرر ما دام العدد أكبر من صفر، ونأخذ آخر رقم ثم نحذفه.' },
        { type: 'memory', title: 'n loses one digit per pass', frames: [
          { label: 'Before the loop', vars: [{ name: 'n', type: 'int', value: '4071' }] },
          { label: 'Pass 1 printed 1; n /= 10', vars: [{ name: 'n', type: 'int', value: '407' }] },
          { label: 'Pass 2 printed 7; n /= 10', vars: [{ name: 'n', type: 'int', value: '40' }] },
          { label: 'Pass 3 printed 0; n /= 10', vars: [{ name: 'n', type: 'int', value: '4' }] },
          { label: 'Pass 4 printed 4; n /= 10. Now 0 &gt; 0 is false', vars: [{ name: 'n', type: 'int', value: '0' }] }
        ] },
        { type: 'check', q: 'The digits come out in which order?', options: ['From left to right', 'From right to left (last digit first)', 'Smallest first', 'In a random order'], answer: 1,
          explain: '% 10 always gives the <b>last</b> digit, so 4071 gives 1, 7, 0, 4.', hint: 'Look at the output of 4071.' },
        { type: 'note', kind: 'warn', en: 'The loop destroys the number: after it, <code>n</code> is 0. If you need the original number later, copy it <b>before</b> the loop: <code>int original = n;</code>.' },
        { type: 'h', en: 'Counting the digits' },
        { type: 'p', en: 'To count digits, add 1 to a counter each time a digit is removed. 90210 has 5 digits.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 90210;
        int digits = 0;
        while (n > 0) {
            digits++;
            n /= 10;
        }
        System.out.println("Digits: " + digits);
    }
}`, out: 'Digits: 5' },
        { type: 'p', en: 'But try <code>n = 0</code>: the question 0 &gt; 0 is false at once, and the program says <code>Digits: 0</code>. That is wrong: the number 0 is written with one digit. A <b>do-while</b> loop fixes it, because its body always runs at least once.',
          ar: 'العدد 0 له رقم واحد، و do-while تعالج هذه الحالة لأنها تعمل مرة على الأقل.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 0;
        int digits = 0;
        do {
            digits++;
            n /= 10;
        } while (n > 0);
        System.out.println("Digits: " + digits);
    }
}`, out: 'Digits: 1' },
        { type: 'check', q: 'With the do-while version, how many digits are counted for <code>n = 7</code>?', options: ['0', '1', '2', '7'], answer: 1,
          explain: 'The body runs once: digits becomes 1 and n becomes 0. Then 0 &gt; 0 is false.', hint: 'One pass, then the question.' },
        { type: 'h', en: 'Adding the digits' },
        { type: 'p', en: 'The sum of the digits has a nice use: a number can be divided by 3 exactly when the sum of its digits can be divided by 3. 2025 has digit sum 2 + 0 + 2 + 5 = 9, and 9 is divisible by 3, so 2025 is too (2025 = 3 x 675).' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 2025;
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        System.out.println("Sum of digits: " + sum);
        if (sum % 3 == 0) {
            System.out.println("Divisible by 3");
        }
    }
}`, out: "Sum of digits: 9\nDivisible by 3" },
        { type: 'p', en: 'Trace it: sum gets 5 (n becomes 202), then 2 (sum 7, n 20), then 0 (sum 7, n 2), then 2 (sum 9, n 0). The digits are added from right to left, but for a sum the order does not matter. Real systems use digit sums too: many ID and card numbers end with a <b>check digit</b> computed from the other digits, so that a typing mistake can be found at once.',
          ar: 'مجموع الأرقام يُستخدم في الواقع، مثل رقم التحقق في آخر بعض الأرقام التعريفية.' },
        { type: 'h', en: 'Writing a number backwards' },
        { type: 'p', en: 'To reverse 1234 into 4321 we build a new number <code>rev</code>. In each pass we take the last digit of n and "push it in" at the right of rev: <code>rev = rev * 10 + digit</code>. Multiplying by 10 makes room for one more digit on the right.',
          ar: 'لعكس العدد: rev = rev * 10 + digit. الضرب في 10 يفتح مكاناً لرقم جديد على اليمين.' },
        { type: 'analogy', title: 'Moving books between two shelves', en: 'Take the last book from shelf A and put it at the end of shelf B. Repeat until shelf A is empty. Shelf B now has the books in the opposite order. n is shelf A and rev is shelf B.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 1234;
        int rev = 0;
        while (n > 0) {
            int digit = n % 10;
            rev = rev * 10 + digit;
            n /= 10;
        }
        System.out.println(rev);
    }
}`, out: '4321' },
        { type: 'table', head: ['Pass', 'n', 'digit = n % 10', 'rev = rev * 10 + digit', 'n after / 10'], rows: [
          ['1', '1234', '4', '0 * 10 + 4 = 4', '123'],
          ['2', '123', '3', '4 * 10 + 3 = 43', '12'],
          ['3', '12', '2', '43 * 10 + 2 = 432', '1'],
          ['4', '1', '1', '432 * 10 + 1 = 4321', '0']
        ] },
        { type: 'memory', title: 'n gets shorter, rev gets longer', frames: [
          { label: 'Before the loop', vars: [{ name: 'n', type: 'int', value: '1234' }, { name: 'rev', type: 'int', value: '0' }] },
          { label: 'Pass 1: digit 4', vars: [{ name: 'n', type: 'int', value: '123' }, { name: 'rev', type: 'int', value: '4' }] },
          { label: 'Pass 2: digit 3', vars: [{ name: 'n', type: 'int', value: '12' }, { name: 'rev', type: 'int', value: '43' }] },
          { label: 'Pass 3: digit 2', vars: [{ name: 'n', type: 'int', value: '1' }, { name: 'rev', type: 'int', value: '432' }] },
          { label: 'Pass 4: digit 1. n is 0, the loop ends', vars: [{ name: 'n', type: 'int', value: '0' }, { name: 'rev', type: 'int', value: '4321' }] }
        ], ar: 'كل رقم يخرج من n يدخل في rev من جهة اليمين.' },
        { type: 'check', q: 'What does the reverse loop give for <code>n = 120</code>?', options: ['021', '21', '12', '120'], answer: 1,
          explain: 'rev is 0, then 0 * 10 + 2 = 2, then 2 * 10 + 1 = 21. An int has no zeros at the front, so the result is 21.', hint: 'The first digit taken is 0, so rev stays 0 after pass 1.' },
        { type: 'steps', title: 'Worked example: checking a student ID', problem: 'Read a student ID number. Print how many digits it has, the sum of the digits, and the largest digit.',
          steps: [
            { en: 'Three accumulators. The largest digit can start at 0 here, because a digit is never negative (0 to 9).', code: 'int digits = 0;\nint sum = 0;\nint largest = 0;' },
            { en: 'Loop while digits are left. Take the last digit.', code: 'while (id > 0) {\n    int d = id % 10;' },
            { en: 'Update all three accumulators with the same digit.', code: '    digits++;\n    sum += d;\n    if (d > largest) {\n        largest = d;\n    }' },
            { en: 'Remove the digit, close the loop, print. For 2024153 the digits are 3, 5, 1, 4, 2, 0, 2: 7 digits, sum 17, largest 5.', code: '    id /= 10;\n}' }
          ],
          stdin: '2024153',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int id = input.nextInt();
        int digits = 0;
        int sum = 0;
        int largest = 0;
        while (id > 0) {
            int d = id % 10;
            digits++;
            sum += d;
            if (d > largest) {
                largest = d;
            }
            id /= 10;
        }
        System.out.println("Digits: " + digits);
        System.out.println("Sum: " + sum);
        System.out.println("Largest digit: " + largest);
    }
}`, out: "Digits: 7\nSum: 17\nLargest digit: 5", ar: 'في كل دورة نأخذ رقماً واحداً ونحدّث به كل المجمّعات.' },
        { type: 'steps', title: 'Worked example: a palindrome number', problem: 'Read a positive number and say if it is a palindrome (the same backwards), like 12321.',
          steps: [
            { en: 'The loop will destroy n, so first keep a copy.', code: 'int original = n;' },
            { en: 'Reverse the number with the pattern you know.', code: 'int rev = 0;\nwhile (n > 0) {\n    rev = rev * 10 + n % 10;\n    n /= 10;\n}' },
            { en: 'Compare the reverse with the <b>copy</b> (n is 0 now). These are ints, so <code>==</code> is correct here.', code: 'if (rev == original) { ... }' },
            { en: '12321 reversed is 12321: a palindrome. 1231 reversed is 1321: not a palindrome.' }
          ],
          stdin: '12321',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int original = n;
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n /= 10;
        }
        if (rev == original) {
            System.out.println(original + " is a palindrome");
        } else {
            System.out.println(original + " is not a palindrome");
        }
    }
}`, out: '12321 is a palindrome', ar: 'احفظ{{g:|ي}} نسخة من العدد قبل الحلقة لأن الحلقة تجعله صفراً.' },
        { type: 'note', kind: 'tip', en: 'For a negative number, <code>while (n &gt; 0)</code> never runs. Work with <code>Math.abs(n)</code> (Unit 4) if negative input is possible.' }
      ],
      mistakes: [
        { title: 'Swapping % and /', en: '<code>% 10</code> gives the last digit; <code>/ 10</code> removes it. Swapped, the loop never ends or gives nonsense.', code: J`
int d = n / 10;    // wrong: this is the rest, not a digit
n %= 10;           // wrong: n becomes one digit forever` },
        { title: 'Losing the original number', en: 'After the loop n is 0. Printing n then shows 0. Copy it before the loop.', code: J`
int original = n;   // keep a copy first
while (n > 0) { ... n /= 10; }` },
        { title: 'Counting the digits of 0 with while', en: 'The while body never runs for 0, so the count is 0. Use do-while to count at least one digit.' },
        { title: 'The wrong reverse formula', en: 'Each new digit goes on the <b>right</b> of rev: multiply rev by 10, then add the digit.', code: J`
rev = digit * 10 + rev;   // wrong
rev = rev * 10 + digit;   // right` }
      ],
      remember: [
        '<code>n % 10</code> = last digit; <code>n / 10</code> = the number without its last digit.',
        'Use <code>while (n &gt; 0)</code>: the number of digits is not known in advance.',
        'Count: <code>digits++</code>; sum: <code>sum += n % 10</code>; reverse: <code>rev = rev * 10 + n % 10</code>.',
        'The loop makes n equal to 0: copy the number first if you need it later.',
        'The number 0 has one digit: a do-while counts it correctly.'
      ],
      rememberAr: 'n % 10 آخر رقم، و n / 10 يحذفه. للعكس: rev = rev * 10 + الرقم. واحفظ{{g:|ي}} نسخة من العدد قبل الحلقة.',
      practice: [
        { t: 'mcq', q: 'For <code>n = 5826</code>, what are <code>n % 10</code> and <code>n / 10</code>?', options: ['6 and 582', '582 and 6', '5 and 826', '6 and 582.6'], answer: 0,
          explain: '% 10 gives the last digit, 6. Integer division by 10 drops it: 582 (no decimals with ints).' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 305;
        while (n > 0) {
            System.out.print(n % 10);
            n /= 10;
        }
        System.out.println();
    }
}`, answer: '503', explain: 'The digits come out from the right: 5, then 0, then 3, printed on one line.' },
        { t: 'fill', q: 'Complete the loop that reverses <code>n</code> into <code>rev</code>.', code: J`
int rev = 0;
while (n > 0) {
    rev = rev * ___ + n % 10;
    n ___ 10;
}`, answers: ['10', '/='], explain: 'Multiply rev by 10 to make room, add the last digit, then remove that digit from n with <code>/= 10</code>.' },
        { t: 'bug', q: 'This program should print <code>1234 reversed is 4321</code>. It prints <code>0 reversed is 4321</code>. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int n = 1234;
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n /= 10;
        }
        System.out.println(n + " reversed is " + rev);
    }
}`, bug: 9,
          fix: J`
public class Main {
    public static void main(String[] args) {
        int n = 1234;
        int original = n;
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n /= 10;
        }
        System.out.println(original + " reversed is " + rev);
    }
}`, hint: 'What is the value of n after the loop?',
          explain: 'The loop removes every digit, so after it n is 0. The print line uses n and shows 0. Keep a copy before the loop (<code>int original = n;</code>) and print the copy.',
          explainAr: 'بعد الحلقة تصبح n صفراً، فيجب حفظ نسخة منها قبل الحلقة.' },
        { t: 'code', q: 'Read a non-negative integer. Print how many of its digits are even, like <code>Even digits: 4</code>. Note: the number 0 has one digit (0), which is even. Do not print any prompt.<br>Example: <code>2024153</code> prints <code>Even digits: 4</code>.',
          qAr: 'اقرأ عدداً واطبع عدد أرقامه الزوجية. تذكّر{{g:|ي}} أن العدد 0 له رقم واحد زوجي.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '2024153', expected: 'Even digits: 4' }, { stdin: '13579', expected: 'Even digits: 0' }, { stdin: '0', expected: 'Even digits: 1' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int even = 0;
        do {
            int d = n % 10;
            if (d % 2 == 0) {
                even++;
            }
            n /= 10;
        } while (n > 0);
        System.out.println("Even digits: " + even);
    }
}`, hint: 'Take each digit with % 10 and test <code>d % 2 == 0</code>. Use do-while so that 0 is handled.',
          explain: 'The do-while looks at at least one digit, so 0 gives 1 even digit. For 2024153 the even digits are 2, 0, 2, 4.' },
        { t: 'code', q: 'Read a positive integer and print it backwards as a number. Zeros at the end of the input disappear (1200 prints 21). Do not print any prompt.<br>Example: <code>1234</code> prints <code>4321</code>.',
          qAr: 'اقرأ عدداً موجباً واطبعه معكوساً.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '1234', expected: '4321' }, { stdin: '1200', expected: '21' }, { stdin: '7', expected: '7' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n /= 10;
        }
        System.out.println(rev);
    }
}`, hint: 'rev starts at 0. In each pass: <code>rev = rev * 10 + n % 10;</code> then <code>n /= 10;</code>',
          explain: 'Each digit leaves n from the right and enters rev from the right, so the order is reversed. For 1200 the first two digits are 0, so rev is still 0 until the 2 arrives.' }
      ]
    },
    {
      title: 'Classic number loops: primes, GCD, tables, Fibonacci',
      titleAr: 'حلقات الأعداد المشهورة: الأولية والقاسم المشترك والجداول وفيبوناتشي',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why learn these classics?' },
        { type: 'p', en: 'Some loop problems appear in almost every programming course and exam: list the divisors of a number, test if it is prime, find the greatest common divisor, print a multiplication table, and print the Fibonacci numbers. Each one teaches a loop pattern that you will reuse many times. You already know every tool they need.',
          ar: 'هذه المسائل مشهورة في الاختبارات، وكل واحدة منها تعلّم نمطاً مفيداً للحلقات.' },
        { type: 'h', en: 'Divisors and prime numbers' },
        { type: 'p', en: 'A <b>divisor</b> of n is a number d that divides n with no remainder: <code>n % d == 0</code>. To find all divisors, try every d from 1 to n.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 12;
        int count = 0;
        for (int d = 1; d <= n; d++) {
            if (n % d == 0) {
                System.out.print(d + " ");
                count++;
            }
        }
        System.out.println();
        System.out.println("Divisors: " + count);
    }
}`, out: "1 2 3 4 6 12\nDivisors: 6" },
        { type: 'p', en: 'A <b>prime</b> number has exactly <b>two</b> divisors: 1 and itself. 13 is prime (only 1 and 13). 12 is not (it has 6). And 1 is <b>not</b> prime: it has only one divisor. So "count the divisors and check if the count is 2" is a simple, correct prime test.',
          ar: 'العدد الأولي له قاسمان فقط: 1 والعدد نفسه. والعدد 1 ليس أولياً.' },
        { type: 'analogy', title: 'Sharing sweets', en: 'You have 12 sweets and want to share them equally with no sweets left over. You can make groups of 1, 2, 3, 4, 6 or 12. With 13 sweets you can only make 1 group of 13 or 13 groups of 1: 13 is prime.' },
        { type: 'p', en: 'In the lesson on break and continue you saw a faster test: try divisors from 2 while <code>d * d &lt;= n</code>, and <code>break</code> at the first one. Now we put that test <b>inside</b> another loop to list all primes up to 30.' },
        { type: 'steps', title: 'Worked example: all primes up to 30', problem: 'Print every prime number from 2 to 30, then how many there are.',
          steps: [
            { en: 'Outer loop: every candidate n from 2 to 30 (we skip 1, which is not prime). A counter before it.', code: 'int count = 0;\nfor (int n = 2; n <= 30; n++) {' },
            { en: 'For each n, a fresh flag: assume it is prime.', code: '    boolean prime = true;' },
            { en: 'Inner loop: look for a divisor from 2 while d * d &lt;= n. If one is found, the flag becomes false and we break the <b>inner</b> loop only.', code: '    for (int d = 2; d * d <= n; d++) {\n        if (n % d == 0) {\n            prime = false;\n            break;\n        }\n    }' },
            { en: 'After the inner loop, look at the flag.', code: '    if (prime) {\n        System.out.print(n + " ");\n        count++;\n    }\n}' },
            { en: 'For 2 and 3 the inner loop runs 0 times (2 x 2 = 4 is bigger), so the flag stays true: correct. For 25 it finds 5. For 29 it tries 2, 3, 4, 5 and finds nothing.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int count = 0;
        for (int n = 2; n <= 30; n++) {
            boolean prime = true;
            for (int d = 2; d * d <= n; d++) {
                if (n % d == 0) {
                    prime = false;
                    break;
                }
            }
            if (prime) {
                System.out.print(n + " ");
                count++;
            }
        }
        System.out.println();
        System.out.println("Count: " + count);
    }
}`, out: "2 3 5 7 11 13 17 19 23 29\nCount: 10", ar: 'الحلقة الخارجية للأعداد، والداخلية للبحث عن قاسم، والعلَم يُعاد إلى true لكل عدد.' },
        { type: 'check', q: 'Why is <code>boolean prime = true;</code> written <b>inside</b> the outer loop?', options: ['Java requires it', 'Each number needs a fresh start; otherwise one false would stay false for all later numbers', 'To make the loop faster', 'It could be anywhere'], answer: 1,
          explain: 'If the flag were set once before the outer loop, after 4 (not prime) it would stay false and no later prime would be printed.', hint: 'Think of the student totals in the nested loops lesson.' },
        { type: 'h', en: 'The greatest common divisor (GCD)' },
        { type: 'p', en: 'The <b>GCD</b> of two numbers is the biggest number that divides both. You have 48 dates and 18 oranges and want to make identical gift bags with nothing left over. The most bags you can make is GCD(48, 18) = 6.',
          ar: 'القاسم المشترك الأكبر هو أكبر عدد يقسم العددين معاً.' },
        { type: 'p', en: 'The simplest method: try every d from the smaller number <b>down</b> to 1. The first d that divides both is the greatest, so we stop with break.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int a = 48;
        int b = 18;
        int gcd = 1;
        for (int d = Math.min(a, b); d >= 1; d--) {
            if (a % d == 0 && b % d == 0) {
                gcd = d;
                break;
            }
        }
        System.out.println("GCD: " + gcd);
    }
}`, out: 'GCD: 6' },
        { type: 'p', en: 'This tries 18, 17, 16, ... 7, 6: thirteen tries. More than 2000 years ago the Greek mathematician Euclid found a much faster way: replace the pair (a, b) by (b, a % b) until b becomes 0. Then a is the GCD.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int a = 48;
        int b = 18;
        while (b != 0) {
            int r = a % b;
            a = b;
            b = r;
        }
        System.out.println("GCD: " + a);
    }
}`, out: 'GCD: 6' },
        { type: 'table', head: ['Pass', 'a', 'b', 'r = a % b', 'new a', 'new b'], rows: [
          ['1', '48', '18', '12', '18', '12'],
          ['2', '18', '12', '6', '12', '6'],
          ['3', '12', '6', '0', '6', '0'],
          ['check', '6', '0', '', 'b != 0 is false: stop', '']
        ] },
        { type: 'memory', title: 'Euclid: the pair gets smaller', frames: [
          { label: 'Before the loop', vars: [{ name: 'a', type: 'int', value: '48' }, { name: 'b', type: 'int', value: '18' }] },
          { label: 'Pass 1: r = 48 % 18 = 12, a = 18, b = 12', vars: [{ name: 'a', type: 'int', value: '18' }, { name: 'b', type: 'int', value: '12' }, { name: 'r', type: 'int', value: '12' }] },
          { label: 'Pass 2: r = 18 % 12 = 6, a = 12, b = 6', vars: [{ name: 'a', type: 'int', value: '12' }, { name: 'b', type: 'int', value: '6' }, { name: 'r', type: 'int', value: '6' }] },
          { label: 'Pass 3: r = 12 % 6 = 0, a = 6, b = 0', vars: [{ name: 'a', type: 'int', value: '6' }, { name: 'b', type: 'int', value: '0' }, { name: 'r', type: 'int', value: '0' }] },
          { label: 'b is 0: the loop ends. The GCD is a = 6', vars: [{ name: 'a', type: 'int', value: '6' }, { name: 'b', type: 'int', value: '0' }] }
        ], ar: 'في كل دورة يصبح الزوج (a, b) هو (b, a % b) حتى يصبح b صفراً.' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['while (b != 0) {', 'Repeat until the remainder becomes 0. We do not know how many passes, so while.'],
          ['int r = a % b;', 'Save the remainder <b>first</b>.'],
          ['a = b;', 'The old b moves into a.'],
          ['b = r;', 'The remainder moves into b. The order of these three lines matters.']
        ] },
        { type: 'check', q: 'Using Euclid, what is GCD(20, 8)?', options: ['2', '4', '8', '20'], answer: 1,
          explain: '(20, 8): r = 4, so (8, 4). Then r = 0, so (4, 0). b is 0, the GCD is 4.', hint: 'Make a small table: a, b, a % b.' },
        { type: 'steps', title: 'Worked example: gift bags', problem: 'Read the number of dates and the number of oranges. Make the most identical gift bags with nothing left over. Print the number of bags and what each bag contains.',
          steps: [
            { en: 'Read the two numbers. Euclid will change a and b, so keep copies of the originals.', code: 'int dates = input.nextInt();\nint oranges = input.nextInt();\nint a = dates;\nint b = oranges;' },
            { en: 'Run Euclid on the copies.', code: 'while (b != 0) {\n    int r = a % b;\n    a = b;\n    b = r;\n}' },
            { en: 'Now a is the number of bags. Each bag gets dates / a dates and oranges / a oranges.', code: 'System.out.println("Bags: " + a);\nSystem.out.println("Each bag: " + dates / a + " dates and " + oranges / a + " oranges");' },
            { en: 'For 48 and 18: 6 bags, each with 8 dates and 3 oranges.' }
          ],
          stdin: '48 18',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int dates = input.nextInt();
        int oranges = input.nextInt();
        int a = dates;
        int b = oranges;
        while (b != 0) {
            int r = a % b;
            a = b;
            b = r;
        }
        System.out.println("Bags: " + a);
        System.out.println("Each bag: " + dates / a + " dates and " + oranges / a + " oranges");
    }
}`, out: "Bags: 6\nEach bag: 8 dates and 3 oranges", ar: 'نحفظ نسخة من العددين لأن الحلقة تغيّر a و b.' },
        { type: 'h', en: 'Multiplication tables' },
        { type: 'p', en: 'A table for one number is a single for loop. <code>printf</code> with <code>%2d</code> prints a number in 2 places, so 7 and 70 line up neatly.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 7;
        for (int i = 1; i <= 10; i++) {
            System.out.printf("%d x %2d = %2d%n", n, i, n * i);
        }
    }
}`, out: "7 x  1 =  7\n7 x  2 = 14\n7 x  3 = 21\n7 x  4 = 28\n7 x  5 = 35\n7 x  6 = 42\n7 x  7 = 49\n7 x  8 = 56\n7 x  9 = 63\n7 x 10 = 70" },
        { type: 'p', en: 'A full table needs nested loops (as in the nested loops lesson). Here we add a header row and row labels, printed <b>before</b> the inner loop of each row.',
          ar: 'جدول عدد واحد يحتاج حلقة واحدة، والجدول الكامل يحتاج حلقتين متداخلتين.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.print("   |");
        for (int j = 1; j <= 5; j++) {
            System.out.printf("%4d", j);
        }
        System.out.println();
        System.out.println("---+--------------------");
        for (int i = 1; i <= 5; i++) {
            System.out.printf("%2d |", i);
            for (int j = 1; j <= 5; j++) {
                System.out.printf("%4d", i * j);
            }
            System.out.println();
        }
    }
}`, out: "   |   1   2   3   4   5\n---+--------------------\n 1 |   1   2   3   4   5\n 2 |   2   4   6   8  10\n 3 |   3   6   9  12  15\n 4 |   4   8  12  16  20\n 5 |   5  10  15  20  25" },
        { type: 'h', en: 'Fibonacci numbers' },
        { type: 'p', en: 'The <b>Fibonacci</b> numbers start with 1, 1, and each next number is the sum of the two before it: 1, 1, 2, 3, 5, 8, 13, ... They appear in nature (the spirals of a sunflower) and in many exam questions. The new pattern: keep the <b>last two</b> numbers in two variables and <b>shift</b> them in every pass.',
          ar: 'كل عدد في متتالية فيبوناتشي هو مجموع العددين السابقين له.' },
        { type: 'analogy', title: 'Walking with two feet', en: 'When you walk, your back foot moves to the front, and the front foot becomes the back foot. In the loop, <code>b</code> (the front) moves into <code>a</code> (the back), and the new number becomes the front <code>b</code>.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int a = 1;
        int b = 1;
        for (int i = 1; i <= 10; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
        System.out.println();
    }
}`, out: '1 1 2 3 5 8 13 21 34 55' },
        { type: 'table', head: ['i', 'printed a', 'next = a + b', 'a after', 'b after'], rows: [
          ['1', '1', '2', '1', '2'],
          ['2', '1', '3', '2', '3'],
          ['3', '2', '5', '3', '5'],
          ['4', '3', '8', '5', '8'],
          ['5', '5', '13', '8', '13']
        ] },
        { type: 'memory', title: 'Shifting a and b', frames: [
          { label: 'Before the loop', vars: [{ name: 'a', type: 'int', value: '1' }, { name: 'b', type: 'int', value: '1' }] },
          { label: 'i = 1: printed 1, next = 2, shift', vars: [{ name: 'a', type: 'int', value: '1' }, { name: 'b', type: 'int', value: '2' }, { name: 'i', type: 'int', value: '1' }] },
          { label: 'i = 2: printed 1, next = 3, shift', vars: [{ name: 'a', type: 'int', value: '2' }, { name: 'b', type: 'int', value: '3' }, { name: 'i', type: 'int', value: '2' }] },
          { label: 'i = 3: printed 2, next = 5, shift', vars: [{ name: 'a', type: 'int', value: '3' }, { name: 'b', type: 'int', value: '5' }, { name: 'i', type: 'int', value: '3' }] },
          { label: 'i = 4: printed 3, next = 8, shift', vars: [{ name: 'a', type: 'int', value: '5' }, { name: 'b', type: 'int', value: '8' }, { name: 'i', type: 'int', value: '4' }] }
        ] },
        { type: 'check', q: 'Why do we need the variable <code>next</code>?', options: ['To print it', 'Because after <code>a = b;</code> the old a is lost, and we still need it for the sum', 'Java needs three variables in every loop', 'It is not needed'], answer: 1,
          explain: 'The sum a + b must be computed before a changes. Saving it in next first keeps the old values safe.', hint: 'What is in a after <code>a = b;</code>?' },
        { type: 'note', kind: 'warn', en: 'Fibonacci numbers grow fast. The 47th one is bigger than the largest <code>int</code> (about 2.1 billion). For long lists use <code>long</code>.' }
      ],
      mistakes: [
        { title: 'Starting the divisor test at 1', en: 'Every number is divisible by 1, so the prime test would say "not prime" for every number. Start at 2.', code: J`
for (int d = 1; d * d <= n; d++)   // wrong: n % 1 == 0 always
for (int d = 2; d * d <= n; d++)   // right` },
        { title: 'Calling 1 a prime', en: 'With the fast test, n = 1 never enters the loop, so the flag stays true. Handle numbers below 2 first.', code: J`
boolean prime = n >= 2;   // 0 and 1 are not prime` },
        { title: 'Shifting Fibonacci in the wrong order', en: 'After <code>a = b;</code> the old a is lost, so <code>b = a + b</code> doubles b instead. Save the sum first.', code: J`
a = b;
b = a + b;        // wrong: gives 1 1 2 4 8 16 ...` },
        { title: 'Forgetting the copies in Euclid', en: 'Euclid changes a and b. If you need the original numbers later (for example to divide them), copy them before the loop.' }
      ],
      remember: [
        'd is a divisor of n when <code>n % d == 0</code>. A prime has exactly two divisors; 1 is not prime.',
        'Fast prime test: try d from 2 while <code>d * d &lt;= n</code>, with a flag and break.',
        'Euclid GCD: <code>while (b != 0) { int r = a % b; a = b; b = r; }</code>, then a is the GCD.',
        'A table for one number is one loop; a full table is two nested loops.',
        'Fibonacci: save <code>next = a + b</code>, then shift <code>a = b; b = next;</code>.'
      ],
      rememberAr: 'العدد الأولي له قاسمان فقط. القاسم المشترك الأكبر بخوارزمية إقليدس. وفي فيبوناتشي نحفظ المجموع ثم نزيح القيم.',
      practice: [
        { t: 'mcq', q: 'Which of these numbers is prime?', options: ['1', '21', '23', '27'], answer: 2,
          explain: '23 has only the divisors 1 and 23. 1 has only one divisor, 21 = 3 x 7, and 27 = 3 x 9.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int a = 20;
        int b = 8;
        while (b != 0) {
            int r = a % b;
            a = b;
            b = r;
        }
        System.out.println(a);
    }
}`, answer: '4', explain: '(20, 8) becomes (8, 4) because 20 % 8 = 4; then (4, 0) because 8 % 4 = 0. b is 0, so a = 4 is printed.' },
        { t: 'fill', q: 'Complete the Fibonacci shift.', code: J`
int next = a ___ b;
a = ___;
b = next;`, answers: ['+', 'b'], explain: 'The next number is the sum a + b. Then the old b becomes the new a, and next becomes the new b.' },
        { t: 'bug', q: 'This program should print the first 6 Fibonacci numbers <code>1 1 2 3 5 8</code>, but it prints <code>1 1 2 4 8 16</code>. Tap the line with the bug.',
          code: J`
public class Main {
    public static void main(String[] args) {
        int a = 1;
        int b = 1;
        for (int i = 1; i <= 6; i++) {
            System.out.print(a + " ");
            a = b;
            b = a + b;
        }
        System.out.println();
    }
}`, bug: [7, 8],
          fix: J`
public class Main {
    public static void main(String[] args) {
        int a = 1;
        int b = 1;
        for (int i = 1; i <= 6; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
        System.out.println();
    }
}`, hint: 'After <code>a = b;</code>, what does <code>a + b</code> add?',
          explain: 'After <code>a = b;</code> both a and b hold the same value, so <code>b = a + b</code> just doubles b. The old a is lost. Compute the sum first into <code>next</code>, then shift: <code>a = b; b = next;</code>.',
          explainAr: 'يجب حساب المجموع قبل تغيير a، وإلا ضاعت القيمة القديمة.' },
        { t: 'code', q: 'Read an integer <code>n</code> (n &gt;= 1). Print the number of its divisors, then <code>Prime</code> or <code>Not prime</code>, exactly as:<br><code>Divisors: 6</code><br><code>Not prime</code><br>Do not print any prompt.',
          qAr: 'اقرأ n واطبع عدد قواسمه، ثم Prime إذا كان له قاسمان فقط.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '12', expected: "Divisors: 6\nNot prime" }, { stdin: '13', expected: "Divisors: 2\nPrime" }, { stdin: '1', expected: "Divisors: 1\nNot prime" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int count = 0;
        for (int d = 1; d <= n; d++) {
            if (n % d == 0) {
                count++;
            }
        }
        System.out.println("Divisors: " + count);
        if (count == 2) {
            System.out.println("Prime");
        } else {
            System.out.println("Not prime");
        }
    }
}`, hint: 'Count every d from 1 to n with <code>n % d == 0</code>. A prime has exactly 2.',
          explain: 'Counting all divisors also handles 1 correctly: it has 1 divisor, so it is not prime.' },
        { t: 'code', q: 'Read two positive integers and print their greatest common divisor (GCD). Use Euclid’s loop. Do not print any prompt.<br>Example: <code>48 18</code> prints <code>6</code>.',
          qAr: 'اقرأ عددين موجبين واطبع القاسم المشترك الأكبر لهما.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '48 18', expected: '6' }, { stdin: '17 5', expected: '1' }, { stdin: '21 7', expected: '7' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        while (b != 0) {
            int r = a % b;
            a = b;
            b = r;
        }
        System.out.println(a);
    }
}`, hint: '<code>while (b != 0) { int r = a % b; a = b; b = r; }</code> and print a.',
          explain: 'Each pass replaces (a, b) by (b, a % b). The remainder gets smaller every time, so it reaches 0, and then a is the GCD.' }
      ]
    },
    {
      title: 'Simulations and games',
      titleAr: 'المحاكاة والألعاب',
      minutes: 30,
      body: [
        { type: 'h', en: 'Let the computer try it many times' },
        { type: 'p', en: 'A <b>simulation</b> is a program that imitates something from real life: rolling dice, a game, money growing in a savings plan. With a loop, the computer can roll a die 6000 times in less than a second, or show a savings plan month by month for years. People use simulations to test ideas before trying them for real.',
          ar: 'المحاكاة برنامج يقلّد شيئاً من الواقع، والحلقة تجعل الحاسوب يكرره آلاف المرات بسرعة.' },
        { type: 'h', en: 'Random numbers with a seed' },
        { type: 'p', en: 'In Unit 4 you used <code>Math.random()</code>. Java also has a tool called <code>Random</code> in <code>java.util</code>, the same package as Scanner. You create it with <code>new</code>, like a Scanner, and then ask it for numbers: <code>rand.nextInt(6)</code> gives a whole number from 0 to 5, so <code>rand.nextInt(6) + 1</code> is a die from 1 to 6.' },
        { type: 'p', en: 'The number in <code>new Random(42)</code> is called the <b>seed</b>. With the same seed, Java gives the <b>same</b> list of "random" numbers every time you run the program. That is perfect for learning and testing, because we can trace the program and know the output. A real game uses <code>new Random()</code> with no seed, so every game is different.',
          ar: 'البذرة (seed) تجعل الأعداد العشوائية نفسها تتكرر في كل تشغيل، وهذا مفيد للاختبار.' },
        { type: 'analogy', title: 'A recorded match', en: 'A live football match is different every time. A recorded match shows exactly the same goals every time you play it. <code>new Random()</code> is the live match; <code>new Random(42)</code> is the recording: it looks random, but it is the same every time.' },
        { type: 'code', run: true, code: J`
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random rand = new Random(42);
        for (int i = 1; i <= 10; i++) {
            int die = rand.nextInt(6) + 1;
            System.out.print(die + " ");
        }
        System.out.println();
    }
}`, out: '3 4 1 3 1 2 6 3 2 6' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['import java.util.Random;', 'Bring in the Random tool, as you do for Scanner.'],
          ['Random rand = new Random(42);', 'Make one random-number maker with seed 42. Make it <b>once</b>, before the loop.'],
          ['rand.nextInt(6) + 1', '<code>nextInt(6)</code> gives 0, 1, 2, 3, 4 or 5. Adding 1 gives 1 to 6.'],
          ['for (int i = 1; i <= 10; i++)', 'Roll 10 times: a known count, so a for loop.']
        ], ar: 'rand.nextInt(6) تعطي من 0 إلى 5، وبإضافة 1 نحصل على رقم النرد من 1 إلى 6.' },
        { type: 'check', q: 'Which values can <code>rand.nextInt(10) + 1</code> give?', options: ['0 to 10', '1 to 10', '1 to 11', '0 to 9'], answer: 1,
          explain: '<code>nextInt(10)</code> gives 0 to 9; adding 1 gives 1 to 10.', hint: 'nextInt(n) gives 0 up to n - 1.' },
        { type: 'h', en: 'Rolling many times and counting' },
        { type: 'p', en: 'Is the die fair? Each face should come up about one time in six. Roll 6000 times and count the sixes with a counter inside an if. We expect about 6000 / 6 = 1000.' },
        { type: 'code', run: true, code: J`
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random rand = new Random(42);
        int sixes = 0;
        for (int i = 1; i <= 6000; i++) {
            if (rand.nextInt(6) + 1 == 6) {
                sixes++;
            }
        }
        System.out.println("Sixes: " + sixes);
    }
}`, out: 'Sixes: 1001' },
        { type: 'p', en: '1001 is very close to 1000. With only 6 rolls you could easily get no six at all, but with thousands of rolls the count gets close to the expected value. That is why simulations repeat many times.',
          ar: 'كلما زاد عدد المحاولات اقتربت النتيجة من القيمة المتوقعة.' },
        { type: 'h', en: 'Roll until you get a six' },
        { type: 'p', en: 'In many board games you must roll a six to start. How many rolls does it take? We do not know the count, and we must roll at least once, so this is a job for <b>do-while</b>.' },
        { type: 'code', run: true, code: J`
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random rand = new Random(42);
        int die;
        int rolls = 0;
        do {
            die = rand.nextInt(6) + 1;
            rolls++;
            System.out.print(die + " ");
        } while (die != 6);
        System.out.println();
        System.out.println("Rolls: " + rolls);
    }
}`, out: "3 4 1 3 1 2 6\nRolls: 7" },
        { type: 'memory', title: 'die and rolls until the six', frames: [
          { label: 'Before <code>do</code>', vars: [{ name: 'die', type: 'int', value: '?' }, { name: 'rolls', type: 'int', value: '0' }] },
          { label: 'Roll 1: 3. Bottom check: 3 != 6, repeat', vars: [{ name: 'die', type: 'int', value: '3' }, { name: 'rolls', type: 'int', value: '1' }] },
          { label: 'Roll 2: 4. Repeat', vars: [{ name: 'die', type: 'int', value: '4' }, { name: 'rolls', type: 'int', value: '2' }] },
          { label: 'Rolls 3 to 6: 1, 3, 1, 2. Repeat each time', vars: [{ name: 'die', type: 'int', value: '2' }, { name: 'rolls', type: 'int', value: '6' }] },
          { label: 'Roll 7: 6. Bottom check: 6 != 6 is false, stop', vars: [{ name: 'die', type: 'int', value: '6' }, { name: 'rolls', type: 'int', value: '7' }] }
        ], ar: 'نرمي النرد مرة على الأقل، ونكرر حتى يظهر الرقم 6.' },
        { type: 'check', q: 'Why is <code>Random rand = new Random(42);</code> written <b>before</b> the loop and not inside it?', options: ['It is faster to type', 'Inside the loop, a new maker with the same seed would start again and give 3 every time, so the loop would never end', 'Java forbids new inside loops', 'There is no difference'], answer: 1,
          explain: 'A new Random(42) always starts the same list from the beginning. Created inside the loop, every roll would be the first number of the list (3), and 3 is never 6.', hint: 'What is the first number of seed 42?' },
        { type: 'h', en: 'A guessing game' },
        { type: 'p', en: 'The computer chooses a secret number from 1 to 100. The player guesses; after each guess the program says "too high" or "too low", until the guess is right. The player must guess at least once, and we do not know how many guesses it will take: do-while again. The smart strategy is to guess the middle each time, which halves the possible numbers.',
          ar: 'في لعبة التخمين نكرر حتى يصبح التخمين صحيحاً، ونعدّ المحاولات.' },
        { type: 'steps', title: 'Worked example: guess the number', problem: 'Choose a secret number from 1 to 100 with <code>new Random(42)</code>. Read guesses until the guess is right. After each wrong guess print "too high" or "too low". At the end print the secret and the number of tries.',
          steps: [
            { en: 'Two tools: a Scanner for the guesses and a Random for the secret. Choose the secret <b>once</b>, before the loop.', code: 'Random rand = new Random(42);\nint secret = rand.nextInt(100) + 1;' },
            { en: 'Declare the guess before the loop (the bottom question needs it) and a counter for the tries.', code: 'int guess;\nint tries = 0;' },
            { en: 'In the body: read, count, and give a hint for a wrong guess.', code: 'do {\n    guess = input.nextInt();\n    tries++;\n    if (guess > secret) {\n        System.out.println(guess + " is too high");\n    } else if (guess < secret) {\n        System.out.println(guess + " is too low");\n    }' },
            { en: 'Repeat while the guess is wrong; then congratulate.', code: '} while (guess != secret);\nSystem.out.println("Correct! " + secret + " in " + tries + " tries");' },
            { en: 'With seed 42 the secret is 31. The player guesses the middle: 50 (too high), 25 (too low), 37 (too high), 31: correct in 4 tries.' }
          ],
          stdin: '50 25 37 31',
          code: J`
import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Random rand = new Random(42);
        int secret = rand.nextInt(100) + 1;
        int guess;
        int tries = 0;
        do {
            guess = input.nextInt();
            tries++;
            if (guess > secret) {
                System.out.println(guess + " is too high");
            } else if (guess < secret) {
                System.out.println(guess + " is too low");
            }
        } while (guess != secret);
        System.out.println("Correct! " + secret + " in " + tries + " tries");
    }
}`, out: "50 is too high\n25 is too low\n37 is too high\nCorrect! 31 in 4 tries", ar: 'نختار الرقم السري مرة واحدة قبل الحلقة، ثم نكرر التخمين حتى يصبح صحيحاً.' },
        { type: 'note', kind: 'tip', en: 'To play for real, change <code>new Random(42)</code> to <code>new Random()</code>. Then the secret is different in every game. Keep the seed while you test.' },
        { type: 'h', en: 'A savings plan, month by month' },
        { type: 'p', en: 'A simulation does not need random numbers. A student wants a laptop for university that costs 6000 riyals. She saves 750 riyals every month, and every 4th month her family adds a gift of 250 riyals. How many months until she has enough? The loop goes month by month, like a calendar.' },
        { type: 'analogy', title: 'Turning the pages of a calendar', en: 'Each pass of the loop is one page of the calendar: a new month, a new deposit, maybe a gift. You keep turning pages until the money is enough, then you stop and look at the page number.' },
        { type: 'steps', title: 'Worked example: saving for a laptop', problem: 'Goal: 6000 riyals. Each month add 750; in months 4, 8, 12, ... add 250 more. Print the money after each month, then the number of months.',
          steps: [
            { en: 'Money and month both start at 0.', code: 'int saved = 0;\nint month = 0;' },
            { en: 'We do not know the number of months: repeat <b>while</b> the money is less than the goal.', code: 'while (saved < 6000) {' },
            { en: 'A new month: count it and add the saving. The gift comes when the month number is a multiple of 4.', code: '    month++;\n    saved += 750;\n    if (month % 4 == 0) {\n        saved += 250;\n    }' },
            { en: 'Print this month, close the loop, print the answer.', code: '    System.out.println("Month " + month + ": " + saved + " riyals");\n}\nSystem.out.println("Goal reached in " + month + " months");' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int saved = 0;
        int month = 0;
        while (saved < 6000) {
            month++;
            saved += 750;
            if (month % 4 == 0) {
                saved += 250;
            }
            System.out.println("Month " + month + ": " + saved + " riyals");
        }
        System.out.println("Goal reached in " + month + " months");
    }
}`, out: "Month 1: 750 riyals\nMonth 2: 1500 riyals\nMonth 3: 2250 riyals\nMonth 4: 3250 riyals\nMonth 5: 4000 riyals\nMonth 6: 4750 riyals\nMonth 7: 5500 riyals\nMonth 8: 6500 riyals\nGoal reached in 8 months", ar: 'كل دورة شهر جديد، ونتوقف عندما يصل المبلغ إلى الهدف.' },
        { type: 'memory', title: 'month and saved, page by page', frames: [
          { label: 'Before the loop', vars: [{ name: 'saved', type: 'int', value: '0' }, { name: 'month', type: 'int', value: '0' }] },
          { label: 'Month 1: + 750', vars: [{ name: 'saved', type: 'int', value: '750' }, { name: 'month', type: 'int', value: '1' }] },
          { label: 'Month 4: + 750 + 250 gift', vars: [{ name: 'saved', type: 'int', value: '3250' }, { name: 'month', type: 'int', value: '4' }] },
          { label: 'Month 7: + 750 (still under 6000)', vars: [{ name: 'saved', type: 'int', value: '5500' }, { name: 'month', type: 'int', value: '7' }] },
          { label: 'Month 8: + 750 + 250 gift. 6500 &lt; 6000 is false: stop', vars: [{ name: 'saved', type: 'int', value: '6500' }, { name: 'month', type: 'int', value: '8' }] }
        ] },
        { type: 'check', q: 'Without the family gift (only 750 a month), how many months would she need?', options: ['7', '8', '9', '6'], answer: 1,
          explain: '750 x 7 = 5250 is not enough; 750 x 8 = 6000 is enough (6000 &lt; 6000 is false). So 8 months.', hint: 'Multiply 750 by 7 and by 8.' }
      ],
      mistakes: [
        { title: 'Creating the Random inside the loop', en: 'With a seed, a new Random starts the same list again, so every "roll" is the same number. Create it once, before the loop.', code: J`
for (int i = 1; i <= 10; i++) {
    Random rand = new Random(42);   // wrong place
    System.out.print(rand.nextInt(6) + 1);   // 3333333333
}` },
        { title: 'Forgetting the + 1', en: '<code>rand.nextInt(6)</code> gives 0 to 5. A die needs <code>rand.nextInt(6) + 1</code>.' },
        { title: 'Forgetting the import', en: 'Without <code>import java.util.Random;</code> Java says "cannot find symbol: class Random".' },
        { title: 'Keeping the seed in a real game', en: 'With <code>new Random(42)</code> the secret is 31 in every game, and players will soon know it. Use the seed only for testing.' }
      ],
      remember: [
        '<code>import java.util.Random;</code> then <code>Random rand = new Random(42);</code> once, before the loop.',
        '<code>rand.nextInt(n)</code> gives 0 to n - 1; a die is <code>rand.nextInt(6) + 1</code>.',
        'Same seed = same numbers every run: good for testing. No seed = different every run: good for games.',
        'Roll until something happens: do-while. Roll a known number of times: for.',
        'A savings plan is a while loop: one pass per month until the goal is reached.'
      ],
      rememberAr: 'أنشئ{{g:|ي}} Random مرة واحدة قبل الحلقة. nextInt(6) + 1 تعطي رقم نرد. البذرة نفسها تعطي الأعداد نفسها في كل تشغيل.',
      practice: [
        { t: 'mcq', q: 'Which values can <code>rand.nextInt(6) + 1</code> give?', options: ['0 to 6', '1 to 6', '0 to 5', '1 to 7'], answer: 1,
          explain: '<code>nextInt(6)</code> gives 0 to 5, and + 1 shifts it to 1 to 6, like a real die.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int saved = 0;
        int month = 0;
        while (saved < 1000) {
            month++;
            saved += 300;
        }
        System.out.println(month + " " + saved);
    }
}`, answer: '4 1200', explain: 'saved is 300, 600, 900 (all &lt; 1000), then 1200. That is 4 months; 1200 &lt; 1000 is false.' },
        { t: 'fill', q: 'Complete the line so that <code>die</code> is a number from 1 to 6.', code: J`
Random rand = new Random(42);
int die = rand.___(6) + ___;`, answers: ['nextInt', '1'], explain: '<code>nextInt(6)</code> gives 0 to 5; adding 1 gives 1 to 6.' },
        { t: 'bug', q: 'This program should roll a die until it shows 6. It prints <code>3</code> again and again and never stops. Tap the line with the bug.',
          code: J`
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int die;
        do {
            Random rand = new Random(42);
            die = rand.nextInt(6) + 1;
            System.out.println(die);
        } while (die != 6);
    }
}`, bug: 7,
          fix: J`
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random rand = new Random(42);
        int die;
        do {
            die = rand.nextInt(6) + 1;
            System.out.println(die);
        } while (die != 6);
    }
}`, hint: 'How many times is a new Random(42) created?',
          explain: 'A new <code>Random(42)</code> is created in every pass, and each new one starts its list from the beginning, so every roll is the first number of seed 42, which is 3. 3 is never 6, so the loop never ends. Create the Random once, before the loop; then the rolls are 3, 4, 1, 3, 1, 2, 6 and the loop stops.',
          explainAr: 'إنشاء Random داخل الحلقة يعيد الأعداد من البداية في كل دورة.' },
        { t: 'code', q: 'Read the money saved each month and the goal (two integers). Print the number of months needed to reach <b>at least</b> the goal, like <code>Months: 4</code>. If the goal is 0, no months are needed. Do not print any prompt.<br>Example: <code>250 1000</code> prints <code>Months: 4</code>.',
          qAr: 'اقرأ المبلغ الشهري والهدف، واطبع عدد الأشهر اللازمة للوصول إلى الهدف.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int monthly = input.nextInt();
        int goal = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '250 1000', expected: 'Months: 4' }, { stdin: '300 1000', expected: 'Months: 4' }, { stdin: '500 0', expected: 'Months: 0' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int monthly = input.nextInt();
        int goal = input.nextInt();
        int saved = 0;
        int months = 0;
        while (saved < goal) {
            saved += monthly;
            months++;
        }
        System.out.println("Months: " + months);
    }
}`, hint: 'A while loop: <code>while (saved &lt; goal)</code> add the monthly money and count the month.',
          explain: 'A while loop asks first, so a goal of 0 gives 0 months. For 300 and 1000: 300, 600, 900, 1200, so 4 months.' },
        { t: 'code', q: 'Read <code>n</code>. Create <code>Random rand = new Random(42);</code> and roll a die <code>n</code> times with <code>rand.nextInt(6) + 1</code>. Print the sum of the rolls and how many were 6, exactly as:<br><code>Sum: 31</code><br><code>Sixes: 2</code><br>(that is the result for n = 10). Do not print any prompt.',
          qAr: 'ارمِ النرد n مرة باستخدام new Random(42)، واطبع مجموع الرميات وعدد مرات ظهور 6.',
          starter: J`
import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        Random rand = new Random(42);
        // your code here
    }
}`, tests: [ { stdin: '10', expected: "Sum: 31\nSixes: 2" }, { stdin: '5', expected: "Sum: 12\nSixes: 0" }, { stdin: '7', expected: "Sum: 20\nSixes: 1" } ],
          solution: J`
import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        Random rand = new Random(42);
        int sum = 0;
        int sixes = 0;
        for (int i = 1; i <= n; i++) {
            int die = rand.nextInt(6) + 1;
            sum += die;
            if (die == 6) {
                sixes++;
            }
        }
        System.out.println("Sum: " + sum);
        System.out.println("Sixes: " + sixes);
    }
}`, hint: 'Roll once per pass and store the roll in a variable, so you can both add it and test it.',
          explain: 'Each pass calls nextInt once. Saving the roll in <code>die</code> matters: calling nextInt twice (once for the sum, once for the test) would use two different rolls.' }
      ]
    },
    {
      title: 'Planning a loop: the four questions',
      titleAr: 'تخطيط الحلقة: الأسئلة الأربعة',
      minutes: 30,
      body: [
        { type: 'h', en: 'Plan first, type later' },
        { type: 'p', en: 'Many beginners open the editor and start typing <code>for (</code> before they know what the loop must do. Then they get stuck, or the loop runs once too often, or the total is printed ten times. Good programmers spend two minutes planning first. For a loop, the plan is the answer to <b>four questions</b>.',
          ar: 'قبل كتابة الحلقة خطط{{g:|ي}} لها بالإجابة عن أربعة أسئلة.' },
        { type: 'table', head: ['Question', 'It decides...', 'Where it goes in the code'], rows: [
          ['1. What <b>repeats</b>?', 'the work done in every pass', 'the body'],
          ['2. What <b>changes</b> each time?', 'the control variable, the next input, the accumulators (and their start values)', 'start values before the loop; changes inside'],
          ['3. When do we <b>stop</b>?', 'the condition, and which loop to use', 'the loop header'],
          ['4. What do we do <b>after</b>?', 'results: print totals, compute the average', 'the lines after the closing brace']
        ] },
        { type: 'analogy', title: 'Planning a trip', en: 'Before a road trip from Riyadh to Abha you ask: What will we do again and again? (drive, stop for fuel.) What changes? (the distance left.) When do we stop? (when we arrive.) What then? (check in at the hotel.) Nobody starts driving before knowing the destination. A loop is the same.' },
        { type: 'h', en: 'A plan in action: the water tank' },
        { type: 'p', en: 'A house has a water tank with 500 litres. The family uses 70 litres every day. When less than 100 litres are left, they must call for a refill. After which day must they call? Let us answer the four questions before writing any Java.' },
        { type: 'list', items: [
          '<b>What repeats?</b> One day of use: take 70 litres out, count the day.',
          '<b>What changes?</b> <code>water</code> (starts at 500, minus 70 each day) and <code>day</code> (starts at 0, plus 1).',
          '<b>When do we stop?</b> When water is less than 100. So we <b>continue while</b> <code>water &gt;= 100</code>. The number of days is not known, so a <b>while</b> loop.',
          '<b>What after?</b> Print the day and the litres left.'
        ], ar: 'نجيب عن الأسئلة الأربعة أولاً، ثم نترجم الإجابات إلى Java.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int water = 500;
        int day = 0;
        while (water >= 100) {
            water -= 70;
            day++;
        }
        System.out.println("Refill after day " + day + " (" + water + " litres left)");
    }
}`, out: 'Refill after day 6 (80 litres left)' },
        { type: 'memory', title: 'The tank, day by day', frames: [
          { label: 'Before the loop', vars: [{ name: 'water', type: 'int', value: '500' }, { name: 'day', type: 'int', value: '0' }] },
          { label: 'Day 1: 500 - 70', vars: [{ name: 'water', type: 'int', value: '430' }, { name: 'day', type: 'int', value: '1' }] },
          { label: 'Day 3: 360 - 70', vars: [{ name: 'water', type: 'int', value: '290' }, { name: 'day', type: 'int', value: '3' }] },
          { label: 'Day 5: 220 - 70 (150 is still &gt;= 100)', vars: [{ name: 'water', type: 'int', value: '150' }, { name: 'day', type: 'int', value: '5' }] },
          { label: 'Day 6: 150 - 70 = 80. 80 &gt;= 100 is false: stop', vars: [{ name: 'water', type: 'int', value: '80' }, { name: 'day', type: 'int', value: '6' }] }
        ] },
        { type: 'p', en: 'Notice how the answer to "when do we stop?" (less than 100) became the opposite in the code (continue while 100 or more). The loop condition always says when to <b>continue</b>. This turn-around is a common place for mistakes, so write both on paper.',
          ar: 'شرط الحلقة يصف متى نستمر، وهو عكس شرط التوقف.' },
        { type: 'check', q: 'You want to stop when the money reaches 2000 or more. What is the loop condition?', options: ['<code>money &gt;= 2000</code>', '<code>money &lt; 2000</code>', '<code>money == 2000</code>', '<code>money &gt; 2000</code>'], answer: 1,
          explain: 'The condition says when to continue: while the money is still less than 2000. "Stop at 2000 or more" turned around is "continue below 2000".', hint: 'Turn the stop rule around.' },
        { type: 'h', en: 'From the answers to the right loop' },
        { type: 'p', en: 'The answer to question 3 also chooses the loop. Ask these two small questions in this order:' },
        { type: 'analogy', title: 'Three ways to fill a glass', en: 'Add exactly 3 spoons of sugar: you know the count (<b>for</b>). Pour water while the glass is not full; if it is already full, pour nothing (<b>while</b>). Taste the tea first, then decide if it needs more sugar (<b>do-while</b>): you cannot decide before the first taste.' },
        { type: 'list', items: [
          '<b>Do I know the number of passes before the loop starts?</b> (5 days, n students, the length of a word.) Yes: use <b>for</b>.',
          '<b>If not: must the body run at least once before I can test?</b> (a menu, input validation, a game round.) Yes: use <b>do-while</b>.',
          '<b>Otherwise</b> (repeat while something is true, maybe zero times: a sentinel, digits, savings): use <b>while</b>.'
        ], ar: 'العدد معروف: for. يجب التنفيذ مرة على الأقل: do-while. غير ذلك: while.' },
        { type: 'table', head: ['Task', 'Known count?', 'At least once?', 'Loop'], rows: [
          ['Print the price of 1 to 10 kg of rice', 'yes (10)', '', '<code>for</code>'],
          ['Read the marks of n students', 'yes (n)', '', '<code>for</code>'],
          ['Read expenses until 0', 'no', 'no (there may be none)', '<code>while</code>'],
          ['Count the digits of a number', 'no', 'no', '<code>while</code>'],
          ['Ask for a PIN until it is right', 'no', 'yes', '<code>do-while</code>'],
          ['Show a menu until the user picks Exit', 'no', 'yes', '<code>do-while</code>']
        ] },
        { type: 'check', q: 'A program reads the speeds of cars on a road until the sensor sends -1. There may be no cars at all. Which loop?', options: ['for', 'while', 'do-while', 'nested for'], answer: 1,
          explain: 'The count is unknown and there may be zero cars, so the loop must test first: while (with a sentinel).', hint: 'Known count? At least once?' },
        { type: 'h', en: 'Write the plan in plain words' },
        { type: 'p', en: 'Before Java, write the plan in short English lines, as if you were telling a friend what to do. This is called <b>pseudocode</b> (pseudo means "not real"). Then translate each line into Java. Each line of the plan becomes one or two lines of code.' },
        { type: 'lines', title: 'Plan to code: total steps of a week', rows: [
          ['total = 0', 'set up before the loop: <code>int total = 0;</code>'],
          ['for each of the 7 days', 'known count: <code>for (int day = 1; day &lt;= 7; day++) {</code>'],
          ['    read the steps of the day', '<code>int steps = input.nextInt();</code>'],
          ['    add them to the total', '<code>total += steps;</code> then close the loop'],
          ['after: print the total and the average', 'after the brace: <code>println</code> for the total and <code>printf("%.1f")</code> for <code>total / 7.0</code>']
        ], ar: 'اكتب{{g:|ي}} الخطة بكلمات بسيطة أولاً (شبه كود)، ثم ترجم{{g:|ي}} كل سطر إلى Java.' },
        { type: 'code', run: true, stdin: '6000 7500 8000 5000 9000 10000 4500', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = 0;
        for (int day = 1; day <= 7; day++) {
            int steps = input.nextInt();
            total += steps;
        }
        System.out.println("Total: " + total);
        System.out.printf("Average: %.1f%n", total / 7.0);
    }
}`, out: "Total: 50000\nAverage: 7142.9" },
        { type: 'p', en: 'Every line of the plan is in the program, in the same order. If the program had a bug, you would compare it with the plan line by line. Dividing by <code>7.0</code> (a double) keeps the decimals, like the cast <code>(double)</code> you used before.' },
        { type: 'check', q: 'In the plan, the line "print the total and the average" answers which of the four questions?', options: ['What repeats?', 'What changes?', 'When do we stop?', 'What do we do after?'], answer: 3,
          explain: 'Printing the results is the work done once, after the loop: question 4.', hint: 'Does it happen in every pass?' },
        { type: 'h', en: 'Test the plan' },
        { type: 'p', en: 'A plan is not finished until it is tested. Trace it with a tiny input (2 or 3 values) and with the special cases. For the water tank: what if the tank starts with only 90 litres? The question 90 &gt;= 100 is false at once, the loop runs 0 times, and the program says "Refill after day 0". That is the right answer: they must call today. A do-while would have taken out 70 litres first, which is wrong.',
          ar: 'اختبر{{g:|ي}} الخطة بمدخلات صغيرة وبالحالات الخاصة قبل أن تثق{{g:|ي}} بها.' },
        { type: 'note', kind: 'tip', en: 'Test your plan before you trust it: trace it with a tiny input (2 or 3 values), and try the special cases: no data at all, exactly one value, and the stop value as the very first input.' },
        { type: 'steps', title: 'Worked example: attendance warnings', problem: 'Read the number of students n, then the number of absences of each student. Print how many students have more than 4 absences (they get a warning) and the average number of absences with 1 decimal.',
          steps: [
            { en: '<b>What repeats?</b> Read one student’s absences, add them, and check for a warning. <b>What changes?</b> The student number, the total (starts at 0), the warning count (starts at 0).', code: 'int total = 0;\nint warnings = 0;' },
            { en: '<b>When do we stop?</b> After n students: the count is known, so for.', code: 'for (int s = 1; s <= n; s++) {' },
            { en: 'The body, from the answer to question 1.', code: '    int absences = input.nextInt();\n    total += absences;\n    if (absences > 4) {\n        warnings++;\n    }\n}' },
            { en: '<b>What after?</b> Print the warnings and the average, once.', code: 'System.out.println("Warnings: " + warnings);\nSystem.out.printf("Average: %.1f%n", (double) total / n);' },
            { en: 'Test: n = 5 with 2 6 0 5 3. Warnings: 6 and 5, so 2. Total 16, average 16 / 5 = 3.2.' }
          ],
          stdin: "5\n2 6 0 5 3",
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int total = 0;
        int warnings = 0;
        for (int s = 1; s <= n; s++) {
            int absences = input.nextInt();
            total += absences;
            if (absences > 4) {
                warnings++;
            }
        }
        System.out.println("Warnings: " + warnings);
        System.out.printf("Average: %.1f%n", (double) total / n);
    }
}`, out: "Warnings: 2\nAverage: 3.2", ar: 'كل سؤال من الأسئلة الأربعة يحدد جزءاً من البرنامج.' },
        { type: 'steps', title: 'Worked example: a simple cash machine', problem: 'The balance starts at 1000 riyals. Read a choice: 1 = deposit (then read an amount), 2 = withdraw (then read an amount), 0 = exit. Print the balance after each operation, "Not enough money" if a withdrawal is too big, and the final balance at the end. (The menu text is left out to keep the output short.)',
          steps: [
            { en: '<b>What repeats?</b> Read a choice and do it. <b>What changes?</b> The choice (read each pass) and the balance (starts at 1000).', code: 'int balance = 1000;\nint choice;' },
            { en: '<b>When do we stop?</b> When the choice is 0. The count is unknown and we must read a choice at least once: do-while.', code: 'do {\n    choice = input.nextInt();' },
            { en: 'Deposit: read the amount and add it.', code: '    if (choice == 1) {\n        int amount = input.nextInt();\n        balance += amount;\n        System.out.println("Balance: " + balance);' },
            { en: 'Withdraw: only if there is enough money.', code: '    } else if (choice == 2) {\n        int amount = input.nextInt();\n        if (amount <= balance) {\n            balance -= amount;\n            System.out.println("Balance: " + balance);\n        } else {\n            System.out.println("Not enough money");\n        }\n    }\n} while (choice != 0);' },
            { en: '<b>What after?</b> The final balance. Test with <code>1 500 2 300 2 2000 0</code>: 1500, 1200, not enough, final 1200.', code: 'System.out.println("Final balance: " + balance);' }
          ],
          stdin: '1 500 2 300 2 2000 0',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int balance = 1000;
        int choice;
        do {
            choice = input.nextInt();
            if (choice == 1) {
                int amount = input.nextInt();
                balance += amount;
                System.out.println("Balance: " + balance);
            } else if (choice == 2) {
                int amount = input.nextInt();
                if (amount <= balance) {
                    balance -= amount;
                    System.out.println("Balance: " + balance);
                } else {
                    System.out.println("Not enough money");
                }
            }
        } while (choice != 0);
        System.out.println("Final balance: " + balance);
    }
}`, out: "Balance: 1500\nBalance: 1200\nNot enough money\nFinal balance: 1200", ar: 'القائمة تحتاج do-while لأننا نقرأ الاختيار مرة على الأقل.' }
      ],
      mistakes: [
        { title: 'Typing before planning', en: 'Without a plan it is easy to forget a start value, the change, or the work after the loop. Answer the four questions first, even in your head.' },
        { title: 'Doing the "after" work inside the loop', en: 'The result is printed in every pass instead of once at the end.', code: J`
for (int i = 1; i <= n; i++) {
    total += input.nextInt();
    System.out.println("Total: " + total);   // should be after the loop
}` },
        { title: 'Setting up inside the loop', en: 'Start values belong <b>before</b> the loop; inside, they are reset in every pass.', code: J`
while (x != 0) {
    int count = 0;   // reset every pass: wrong place
    count++;
    x = input.nextInt();
}` },
        { title: 'The wrong loop for the data', en: 'A do-while for data that may be empty uses a value that should not be used. A for loop for an unknown count needs a number you do not have. Choose with the two small questions.' }
      ],
      remember: [
        'Four questions: what <b>repeats</b>, what <b>changes</b>, when to <b>stop</b>, what to do <b>after</b>.',
        'The loop condition says when to <b>continue</b>: turn the stop rule around.',
        'Known count: <code>for</code>. At least once: <code>do-while</code>. Otherwise: <code>while</code>.',
        'Start values before the loop; results after the loop.',
        'Write the plan in plain words, then test it with a tiny input and the special cases.'
      ],
      rememberAr: 'الأسئلة الأربعة: ماذا يتكرر؟ ماذا يتغير؟ متى نتوقف؟ ماذا نفعل بعد الحلقة؟ ثم اختر{{g:|ي}} for أو while أو do-while.',
      practice: [
        { t: 'mcq', q: 'Print the names of the 7 days of the week, one per line. Which loop fits best?', options: ['<code>for</code>', '<code>while</code> with a sentinel', '<code>do-while</code>', 'No loop can do it'], answer: 0,
          explain: 'The count (7) is known before the loop starts, so a for loop is the clearest choice.' },
        { t: 'mcq', q: 'Read the prices of items until the cashier types 0. A customer may buy nothing at all. Which loop fits best?', options: ['<code>for</code>', '<code>while</code>', '<code>do-while</code>', 'Two nested for loops'], answer: 1,
          explain: 'The count is unknown, and the body may need to run 0 times (no items). A while loop tests first.' },
        { t: 'mcq', q: 'Ask "Continue? (y/n)" and read the answer, repeating until the user types y or n. Which loop fits best?', options: ['<code>for</code>', '<code>while</code>', '<code>do-while</code>', 'No loop is needed'], answer: 2,
          explain: 'You must ask at least once before you can test the answer, so do-while fits best.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int water = 300;
        int day = 0;
        while (water >= 100) {
            water -= 80;
            day++;
        }
        System.out.println(day + " " + water);
    }
}`, answer: '3 60', explain: 'water goes 300, 220, 140, 60. After 3 days 60 &gt;= 100 is false.' },
        { t: 'order', q: 'Order the lines of this plan: count the days until a 500-litre tank goes below 100 litres when 70 litres are used per day, then print the days.', lines: [
          'int water = 500;',
          'int day = 0;',
          'while (water >= 100) {',
          '    water -= 70;',
          '    day++;',
          '}',
          'System.out.println(day);'
        ], explain: 'Start values first, then the loop with the continue condition, the changes inside, and the result after the loop.' },
        { t: 'bug', q: 'This program should print the average of <code>n</code> marks <b>once</b>. With the input <code>3</code> and <code>80 90 70</code> it prints three lines. Tap the line with the bug.',
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += input.nextInt();
            System.out.println("Average: " + (double) sum / n);
        }
    }
}`, bug: 10,
          fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += input.nextInt();
        }
        System.out.println("Average: " + (double) sum / n);
    }
}`, hint: 'Question 4: what do we do <b>after</b> the loop?',
          explain: 'The print is inside the loop, so it runs in every pass with an unfinished sum (26.66..., 56.66..., 80.0). The average is "after" work: move the print below the closing brace of the loop. Then it prints <code>Average: 80.0</code> once.',
          explainAr: 'طباعة المتوسط عمل يأتي بعد الحلقة، وليس داخلها.' },
        { t: 'code', q: 'Read a daily step goal, then the steps of each day until <code>-1</code> (the sentinel). Print how many days reached the goal (steps &gt;= goal), like <code>Days: 3</code>. Plan with the four questions first. Do not print any prompt.<br>Example: <code>8000 5000 9000 8000 12000 -1</code> prints <code>Days: 3</code>.',
          qAr: 'اقرأ هدف الخطوات اليومي ثم خطوات كل يوم حتى -1، واطبع عدد الأيام التي وصلت إلى الهدف.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int goal = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '8000 5000 9000 8000 12000 -1', expected: 'Days: 3' }, { stdin: '8000 -1', expected: 'Days: 0' }, { stdin: '100 50 100 -1', expected: 'Days: 1' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int goal = input.nextInt();
        int days = 0;
        int steps = input.nextInt();
        while (steps != -1) {
            if (steps >= goal) {
                days++;
            }
            steps = input.nextInt();
        }
        System.out.println("Days: " + days);
    }
}`, hint: 'Repeats: check one day. Changes: the steps read, the counter. Stop: at -1 (unknown count, maybe zero days: while). After: print the counter.',
          explain: 'The plan gives a sentinel while loop with a priming read. The counter grows only when the day reached the goal; 8000 counts because the test is &gt;=.' }
      ]
    }
  ],
  quiz: [
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int i = 0;
        while (i < 3) {
            System.out.println(i);
            i++;
        }
        System.out.println("i = " + i);
    }
}`,
      answer: "0\n1\n2\ni = 3",
      explain: 'The body prints 0, 1, 2. The loop stops when i becomes 3.' },
    { t: 'mcq', q: 'What is the minimum number of times the body of a do-while loop executes?',
      options: ['0', '1', '2', 'It depends on the condition'], answer: 1,
      explain: 'The condition is checked after the body, so the body always runs at least once.' },
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int k = 2; k <= 8; k += 2) {
            sum += k;
        }
        System.out.println(sum);
    }
}`,
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
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (j == 2) {
                    continue;
                }
                System.out.print(i * j + " ");
            }
            System.out.println();
        }
    }
}`,
      answer: "1 3\n2 6\n3 9",
      explain: 'For each row, j = 2 is skipped, so only i * 1 and i * 3 are printed.' },
    { t: 'mcq', q: 'Which loop prints the numbers 1 to 100 exactly once each?',
      options: ['<code>for (int i = 0; i &lt;= 100; i++)</code>', '<code>for (int i = 1; i &lt; 100; i++)</code>', '<code>for (int i = 1; i &lt;= 100; i++)</code>', '<code>for (int i = 0; i &lt; 100; i++)</code>'], answer: 2,
      explain: 'Start at 1 and include 100 with <code>&lt;=</code>. The others print 0 or miss 100 (off-by-one).' },
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 1;
        do {
            n *= 2;
        } while (n < 50);
        System.out.println(n);
    }
}`,
      answer: '64',
      explain: 'n becomes 2, 4, 8, 16, 32, 64. After 64 the condition 64 &lt; 50 is false.' },
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int count = 0;
        for (int i = 1; i <= 20; i++) {
            if (i % 4 == 0) {
                count++;
            }
            if (i == 13) {
                break;
            }
        }
        System.out.println(count);
    }
}`,
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
public class Main {
    public static void main(String[] args) {
        String s = "loops";
        for (int i = s.length() - 1; i >= 0; i--) {
            System.out.print(s.charAt(i));
        }
        System.out.println();
    }
}`,
      answer: 'spool',
      explain: 'The loop visits indexes 4, 3, 2, 1, 0, printing the characters in reverse order.' },
    { t: 'bug', q: 'This program should print the word "Taif" backwards: <code>fiaT</code>. It prints only <code>T</code>. Tap the line with the bug.',
      code: J`
public class Main {
    public static void main(String[] args) {
        String word = "Taif";
        String rev = "";
        for (int i = word.length() - 1; i >= 0; i--) {
            rev = "";
            rev += word.charAt(i);
        }
        System.out.println(rev);
    }
}`, bug: 6,
      fix: J`
public class Main {
    public static void main(String[] args) {
        String word = "Taif";
        String rev = "";
        for (int i = word.length() - 1; i >= 0; i--) {
            rev += word.charAt(i);
        }
        System.out.println(rev);
    }
}`, hint: 'Which line empties the accumulator?',
      explain: '<code>rev = "";</code> inside the loop empties the String at the start of every pass, so only the letter of the last pass (index 0, T) is left. The accumulator must be set up once, before the loop. Delete the line inside the loop and the program prints <code>fiaT</code>.',
      explainAr: 'تصفير المجمّع داخل الحلقة يمسح ما جُمع في الدورات السابقة.' },
    { t: 'bug', q: 'This program should print the average of the marks before the sentinel -1. With the input <code>80 90 -1</code> it prints 56.33... instead of 85.0, because the sentinel is used as a mark. Tap a line with the bug.',
      code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int sum = 0;
        int count = 0;
        int mark = 0;
        while (mark != -1) {
            mark = input.nextInt();
            sum += mark;
            count++;
        }
        System.out.println((double) sum / count);
    }
}`, bug: [10, 11],
      fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int sum = 0;
        int count = 0;
        int mark = input.nextInt();
        while (mark != -1) {
            sum += mark;
            count++;
            mark = input.nextInt();
        }
        System.out.println((double) sum / count);
    }
}`, hint: 'In a sentinel loop: read before the loop, then use, then read the next one.',
      explain: 'The mark is read at the top of the body and used at once, before the question can check it. So -1 is added to the sum and counted: (80 + 90 - 1) / 3 = 56.33... Use the priming read pattern: read before the loop, and inside the loop use the value first, then read the next one. Then the average is (80 + 90) / 2 = 85.0.',
      explainAr: 'القراءة في أول الجسم تجعل القيمة الحارسة تدخل المجموع. استخدم{{g:|ي}} القراءة الأولية.' }
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
    { code: J`for (int i = a; i <= b; i++)`, note: 'Runs b - a + 1 times; check boundaries for off-by-one errors' },
    { code: J`for (int i = 0; i < s.length(); i++) { char c = s.charAt(i); }`, note: 'Visit every letter of a String (indexes 0 to length() - 1)' },
    { code: J`String rev = ""; for (int i = s.length() - 1; i >= 0; i--) rev += s.charAt(i);`, note: 'Reverse a String; compare with equals for a palindrome' },
    { code: J`while (n > 0) { int d = n % 10; n /= 10; }`, note: 'Take the digits of n from the right (d = last digit)' },
    { code: J`rev = rev * 10 + n % 10;`, note: 'Reverse a number, one digit per pass' },
    { code: J`boolean prime = n >= 2; for (int d = 2; d * d <= n; d++) if (n % d == 0) { prime = false; break; }`, note: 'Prime test with a flag and break' },
    { code: J`while (b != 0) { int r = a % b; a = b; b = r; }`, note: 'Euclid: afterwards a is the GCD' },
    { code: J`int next = a + b; a = b; b = next;`, note: 'Fibonacci: save the sum, then shift' },
    { code: J`Random rand = new Random(42); int die = rand.nextInt(6) + 1;`, note: 'Random with a seed (same numbers every run); create it once, before the loop' },
    { code: J`while (true) { x = in.nextInt(); if (x == 0) break; ... }`, note: 'A loop that stops from the inside; it must contain a sure break' },
    { code: J`// repeats? changes? stop? after?`, note: 'The four planning questions; known count = for, at least once = do-while, otherwise while' }
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
    { term: 'break / continue', ar: 'break / continue', def: 'break exits the innermost loop; continue skips to the next iteration.' },
    { term: 'Running total', ar: 'مجموع تراكمي', def: 'An accumulator that grows in every pass, such as the distance run so far.' },
    { term: 'Flag', ar: 'علَم', def: 'A boolean variable that a loop switches when something happens (for example prime = false when a divisor is found).' },
    { term: 'Index', ar: 'فهرس', def: 'The position of a character in a String, from 0 to length() - 1.' },
    { term: 'Palindrome', ar: 'كلمة متناظرة', def: 'A word or number that reads the same forwards and backwards, like level or 12321.' },
    { term: 'Digit', ar: 'رقم (خانة)', def: 'One of 0 to 9 in a number; n % 10 gives the last digit and n / 10 removes it.' },
    { term: 'Prime number', ar: 'عدد أولي', def: 'A whole number with exactly two divisors, 1 and itself. 1 is not prime.' },
    { term: 'Greatest common divisor (GCD)', ar: 'القاسم المشترك الأكبر', def: 'The biggest number that divides two numbers with no remainder; Euclid’s loop finds it fast.' },
    { term: 'Fibonacci numbers', ar: 'متتالية فيبوناتشي', def: '1, 1, 2, 3, 5, 8, ...: each number is the sum of the two before it.' },
    { term: 'Simulation', ar: 'محاكاة', def: 'A program that imitates a real process, often by repeating it many times in a loop.' },
    { term: 'Seed', ar: 'بذرة', def: 'The starting number of a Random object; the same seed gives the same numbers every run.' },
    { term: 'Pseudocode', ar: 'شبه كود', def: 'A plan of a program written in short plain-language lines before writing real code.' },
    { term: 'Boundary test', ar: 'اختبار الحدود', def: 'Trying the first value, the last value and the smallest inputs to catch off-by-one errors.' }
  ]
});
