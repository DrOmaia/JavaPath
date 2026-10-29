JP.unit({
  course: 'cs101',
  n: 3,
  title: 'Selection Statements',
  titleAr: 'جمل الاختيار',
  intro: 'Until now your programs ran every line, one after the other. Real programs must decide: pass or fail, enough money or not, which day of the week. In this unit you will learn true/false values, how to compare numbers, how to combine questions, and every way Java chooses what to do: if, if-else, chains of choices, switch, and the short ?: choice. We go slowly, one small idea at a time.',
  introAr: 'حتى الآن كانت برامجك تنفذ كل سطر بالترتيب. البرامج الحقيقية تحتاج إلى اتخاذ قرارات: نجاح أو رسوب، رصيد كافٍ أو لا. في هذه الوحدة ستتعلم قيم صح/خطأ، ومقارنة الأعداد، ودمج الأسئلة، وجمل if و if-else و switch والعامل ?: خطوة بخطوة.',
  lessons: [
    {
      title: 'True or false: boolean values',
      titleAr: 'صح أو خطأ: القيم المنطقية',
      minutes: 25,
      body: [
        { type: 'h', en: 'Yes/no questions in a program' },
        { type: 'p', en: 'Many questions in life have only two answers: "Did you pass?" Yes or no. "Is the library open?" Yes or no. A program needs a way to store such an answer. Java has a special type for it, called <code>boolean</code>.',
          ar: 'كثير من الأسئلة لها جوابان فقط: نعم أو لا. النوع boolean يخزن هذا الجواب.' },
        { type: 'analogy', title: 'A light switch', en: 'A light switch is either ON or OFF. There is nothing in between. A <code>boolean</code> variable is like that switch: it holds <code>true</code> (on) or <code>false</code> (off), and nothing else.', ar: 'المتغير boolean مثل مفتاح الإضاءة: إما مفتوح true أو مغلق false.' },
        { type: 'code', code: J`
boolean libraryOpen = true;
boolean examToday = false;
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['boolean libraryOpen = true;', 'Make a box named <code>libraryOpen</code> that can only hold true or false. Put <code>true</code> inside.'],
          ['boolean examToday = false;', 'Make another box. Put <code>false</code> inside.']
        ], ar: 'كلمتا true و false تُكتبان بحروف صغيرة وبدون علامات اقتباس.' },
        { type: 'check', q: 'Which of these is a correct boolean value?', options: ['<code>true</code>', '<code>"true"</code>', '<code>yes</code>', '<code>1</code>'], answer: 0, explain: 'Only <code>true</code> and <code>false</code> (small letters, no quotes) are boolean values. <code>"true"</code> is text.', hint: 'There are only two boolean values.' },
        { type: 'h', en: 'Comparing two numbers' },
        { type: 'p', en: 'Most of the time we do not type true or false ourselves. The computer works it out when we <b>compare</b> two values. For example, is a mark at least 60? We use a <b>relational operator</b> (an operator that compares). The answer is always true or false.',
          ar: 'عادةً لا نكتب true أو false بأنفسنا؛ الحاسوب يحسبها عندما نقارن قيمتين بعامل مقارنة.' },
        { type: 'analogy', title: 'A referee', en: 'A referee looks at two scores and says who is ahead. The referee never says "maybe". The answer is only yes or no. A comparison in Java is the same.' },
        { type: 'table', head: ['Operator', 'Meaning', 'Example (mark is 75)', 'Result'], rows: [
          ['<code>&gt;</code>', 'greater than', '<code>mark &gt; 60</code>', 'true'],
          ['<code>&lt;</code>', 'less than', '<code>mark &lt; 60</code>', 'false'],
          ['<code>&gt;=</code>', 'greater than or equal to', '<code>mark &gt;= 75</code>', 'true'],
          ['<code>&lt;=</code>', 'less than or equal to', '<code>mark &lt;= 70</code>', 'false'],
          ['<code>==</code>', 'equal to', '<code>mark == 75</code>', 'true'],
          ['<code>!=</code>', 'not equal to', '<code>mark != 75</code>', 'false']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int mark = 75;
        boolean passed = mark >= 60;
        System.out.println(passed);
        System.out.println(mark == 100);
    }
}
`, out: J`
true
false
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int mark = 75;', 'Store the number 75 in <code>mark</code>.'],
          ['boolean passed = mark >= 60;', 'Ask: is 75 at least 60? Yes, so <code>passed</code> gets <code>true</code>.'],
          ['System.out.println(passed);', 'Print what is inside <code>passed</code>: <code>true</code>.'],
          ['System.out.println(mark == 100);', 'Ask: is 75 equal to 100? No, so print <code>false</code>.']
        ], ar: 'الناتج من أي مقارنة هو دائماً true أو false.' },
        { type: 'check', q: 'With <code>int mark = 75;</code> what is the value of <code>mark &lt; 60</code>?', options: ['true', 'false', '75', 'An error'], answer: 1, explain: '75 is not less than 60, so the answer is false.' },
        { type: 'h', en: 'One equals sign or two?' },
        { type: 'p', en: 'This is the most common beginner mistake, so we look at it slowly. <code>=</code> means <b>put a value into a box</b>. <code>==</code> means <b>ask if two values are equal</b>. They look similar but do very different jobs.',
          ar: 'العلامة = تضع قيمة في متغير، أما == فتسأل: هل القيمتان متساويتان؟' },
        { type: 'analogy', title: 'Giving vs asking', en: '<code>x = 5</code> is like saying "Put 5 in the box." <code>x == 5</code> is like asking "Is there a 5 in the box?" One gives an order, the other asks a question.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int cups = 3;
        System.out.println(cups == 3);
        cups = 5;
        System.out.println(cups == 3);
    }
}
`, out: J`
true
false
` },
        { type: 'note', kind: 'exam', en: 'Exam trap: <code>==</code> compares, <code>=</code> assigns. Never write a single <code>=</code> when you want to ask a question.', ar: 'فخ في الاختبار: == للمقارنة و = للإسناد.' },
        { type: 'check', q: 'Which line asks "is price equal to 20?"', options: ['<code>price = 20</code>', '<code>price == 20</code>', '<code>price =! 20</code>', '<code>price := 20</code>'], answer: 1, explain: 'Two equals signs ask the question. A single one stores a value.' },
        { type: 'steps', title: 'Worked example: can I buy the coffee?', problem: 'You have some riyals and a coffee has a price. Read both numbers and print true if you have enough money, otherwise false.',
          steps: [
            { en: 'We need to read two whole numbers: first your money, then the price.', code: J`
Scanner input = new Scanner(System.in);
int money = input.nextInt();
int price = input.nextInt();
` },
            { en: 'You can buy the coffee when your money is greater than or equal to the price. That is a comparison, so it gives a boolean.', code: J`
boolean canBuy = money >= price;
` },
            { en: 'Print the boolean.', code: J`
System.out.println(canBuy);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int money = input.nextInt();
        int price = input.nextInt();
        boolean canBuy = money >= price;
        System.out.println(canBuy);
    }
}
`, stdin: '20 15', out: 'true', ar: 'قارنّا المال بالسعر باستخدام >= فحصلنا على قيمة منطقية.' }
      ],
      mistakes: [
        { title: 'Using = instead of ==', en: 'A single equals sign stores a value. To ask a question you need two.', code: J`
boolean same = (a = 5);   // wrong: this is an assignment
boolean same = (a == 5);  // right
`, ar: 'لا تستخدم = للسؤال.' },
        { title: 'Writing true or false in quotes', en: 'With quotes it becomes text, not a boolean. This does not compile.', code: J`
boolean open = "true";   // wrong
boolean open = true;     // right
` },
        { title: 'Writing =&lt; or =&gt;', en: 'The equals sign always comes second: <code>&lt;=</code> and <code>&gt;=</code>.', code: J`
mark => 60   // wrong
mark >= 60   // right
` },
        { title: 'Capital letters', en: '<code>True</code> and <code>FALSE</code> do not work. Java is case sensitive: write <code>true</code> and <code>false</code>.' }
      ],
      remember: [
        'A <code>boolean</code> holds only <code>true</code> or <code>false</code>.',
        'A comparison (<code>&gt; &lt; &gt;= &lt;= == !=</code>) always gives true or false.',
        '<code>=</code> stores a value. <code>==</code> asks if two values are equal.',
        'The "or equal" sign comes second: <code>&gt;=</code>, <code>&lt;=</code>.'
      ],
      rememberAr: 'boolean يحمل true أو false فقط. المقارنات تعطي دائماً true أو false. العلامة = للتخزين و == للسؤال.',
      practice: [
        { t: 'mcq', q: 'Which values can a <code>boolean</code> variable hold?', options: ['Any whole number', 'Only <code>true</code> and <code>false</code>', 'Any text', 'Only 0 and 1'], answer: 1, explain: 'A boolean is a two-value type: true or false.', qAr: 'ما القيم التي يحملها boolean؟' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(5 > 2);
System.out.println(5 < 2);
`, answer: J`
true
false
`, explain: '5 is greater than 2 (true) and 5 is not less than 2 (false).' },
        { t: 'output', q: 'What is printed?', code: J`
int a = 10;
int b = 4;
System.out.println(a - b == 6);
System.out.println(a != 10);
System.out.println(a >= b * 2);
`, answer: J`
true
false
true
`, explain: '10 - 4 is 6, so the first is true. a is 10, so "a != 10" is false. b * 2 is 8 and 10 >= 8 is true.' },
        { t: 'mcq', q: 'Which line is a comparison (a question), not a command?', options: ['<code>score = 90;</code>', '<code>score == 90</code>', '<code>int score;</code>', '<code>score++;</code>'], answer: 1, explain: '<code>==</code> asks whether score equals 90 and gives true or false.' },
        { t: 'fill', q: 'A person is an adult at age 18 or more. Complete the code.', code: J`
boolean isAdult = age ___ 18;
`, answers: ['>='], explain: '"18 or more" means greater than or equal to: <code>&gt;=</code>.' },
        { t: 'order', q: 'Put the lines in order: store age 20, find out if it is 18 or more, then print the answer.', lines: ['int age = 20;', 'boolean isAdult = age >= 18;', 'System.out.println(isAdult);'], explain: 'A variable must be created before it is used, and printing comes last.' },
        { t: 'code', q: 'Read two whole numbers: a mark and the pass mark. Print <code>true</code> if the mark is at least the pass mark, otherwise <code>false</code>. Do not print any prompt.', qAr: 'اقرأ الدرجة ودرجة النجاح واطبع true إذا كانت الدرجة أكبر أو تساوي.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();
        int passMark = input.nextInt();
        // compare and print
    }
}
`, tests: [{ stdin: '70 60', expected: 'true' }, { stdin: '50 60', expected: 'false' }, { stdin: '60 60', expected: 'true' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();
        int passMark = input.nextInt();
        System.out.println(mark >= passMark);
    }
}
`, hint: 'Print the comparison directly: <code>System.out.println(mark &gt;= passMark);</code>', explain: 'A comparison is an expression with a boolean value, so println can print it.' }
      ]
    },
    {
      title: 'Combining questions: and, or, not',
      titleAr: 'دمج الأسئلة: and و or و not',
      minutes: 25,
      body: [
        { type: 'h', en: 'Why combine questions?' },
        { type: 'p', en: 'One comparison is often not enough. To enter the gym you need a membership <b>and</b> the gym must be open. To pay for coffee you can use cash <b>or</b> a card. Java has <b>logical operators</b> to join small true/false questions into one bigger question.',
          ar: 'العوامل المنطقية تربط عدة أسئلة صغيرة (صح/خطأ) في سؤال واحد أكبر.' },
        { type: 'h', en: 'AND: both must be true' },
        { type: 'analogy', title: 'Two locks on one door', en: 'Imagine a door with two locks. You need <b>both</b> keys to open it. If one key is missing, the door stays closed. In Java, AND is written <code>&amp;&amp;</code> (two ampersands).', ar: 'الباب بقفلين يحتاج مفتاحين معاً. هذا هو &&.' },
        { type: 'code', code: J`
boolean hasCard = true;
boolean hasMoney = false;
boolean canPay = hasCard && hasMoney;
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['boolean hasCard = true;', 'Yes, you have a card.'],
          ['boolean hasMoney = false;', 'No, there is no money in the account.'],
          ['boolean canPay = hasCard && hasMoney;', 'true AND false. Both must be true, so <code>canPay</code> is <code>false</code>.']
        ] },
        { type: 'table', head: ['A', 'B', 'A &amp;&amp; B'], rows: [['true', 'true', 'true'], ['true', 'false', 'false'], ['false', 'true', 'false'], ['false', 'false', 'false']] },
        { type: 'check', q: 'What is <code>true &amp;&amp; true</code>?', options: ['true', 'false'], answer: 0, explain: 'Both sides are true, so AND is true. It is only false when at least one side is false.' },
        { type: 'h', en: 'OR: one is enough' },
        { type: 'analogy', title: 'Two ways to pay', en: 'At a coffee shop you can pay with cash <b>or</b> with a card. If you have at least one of them, you can pay. OR is written <code>||</code> (two vertical bars).', ar: 'ندفع نقداً أو بالبطاقة: واحد منهما يكفي. هذا هو ||.' },
        { type: 'code', code: J`
boolean cash = false;
boolean card = true;
boolean canPay = cash || card;
` },
        { type: 'lines', rows: [
          ['boolean canPay = cash || card;', 'false OR true. At least one is true, so <code>canPay</code> is <code>true</code>.']
        ] },
        { type: 'table', head: ['A', 'B', 'A || B'], rows: [['true', 'true', 'true'], ['true', 'false', 'true'], ['false', 'true', 'true'], ['false', 'false', 'false']] },
        { type: 'check', q: 'What is <code>false || false</code>?', options: ['true', 'false'], answer: 1, explain: 'OR is false only when both sides are false.' },
        { type: 'h', en: 'NOT: flip the answer' },
        { type: 'analogy', title: 'Opposite day', en: 'NOT turns yes into no and no into yes. Written <code>!</code> (an exclamation mark). It goes in front of the value.', ar: 'علامة ! تعكس القيمة.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        boolean hasCard = true;
        boolean hasCash = false;
        System.out.println(hasCard && hasCash);
        System.out.println(hasCard || hasCash);
        System.out.println(!hasCash);
    }
}
`, out: J`
false
true
true
` },
        { type: 'lines', rows: [
          ['System.out.println(hasCard && hasCash);', 'true AND false is <code>false</code>.'],
          ['System.out.println(hasCard || hasCash);', 'true OR false is <code>true</code>.'],
          ['System.out.println(!hasCash);', 'NOT false is <code>true</code>.']
        ] },
        { type: 'note', kind: 'tip', en: 'Join <b>comparisons</b>, not numbers. Write <code>age &gt; 10 &amp;&amp; age &lt; 20</code>, not <code>age &gt; 10 &amp;&amp; &lt; 20</code>. Each side of <code>&amp;&amp;</code> must be a full question.', ar: 'كل طرف من && يجب أن يكون سؤالاً كاملاً.' },
        { type: 'steps', title: 'Worked example: two subjects', problem: 'Read the marks of Math and Java (pass mark is 60). Print three lines: did you pass both, did you pass at least one, and did you fail Math?',
          steps: [
            { en: 'Read the two marks.', code: J`
int math = input.nextInt();
int java = input.nextInt();
` },
            { en: 'Make two boolean boxes. Each one answers a small question.', code: J`
boolean passMath = math >= 60;
boolean passJava = java >= 60;
` },
            { en: 'Pass both: use AND. Pass at least one: use OR. Failed Math: use NOT.', code: J`
System.out.println(passMath && passJava);
System.out.println(passMath || passJava);
System.out.println(!passMath);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int math = input.nextInt();
        int java = input.nextInt();
        boolean passMath = math >= 60;
        boolean passJava = java >= 60;
        System.out.println(passMath && passJava);
        System.out.println(passMath || passJava);
        System.out.println(!passMath);
    }
}
`, stdin: '70 50', out: J`
false
true
false
`, ar: 'قسّمنا المسألة إلى أسئلة صغيرة ثم دمجناها.' }
      ],
      mistakes: [
        { title: 'Using one symbol', en: 'A single <code>&amp;</code> or <code>|</code> is a different operator. For decisions use two: <code>&amp;&amp;</code> and <code>||</code>.', code: J`
a & b   // not what we want now
a && b  // right
` },
        { title: 'Half a question', en: 'Each side must be a complete comparison.', code: J`
age > 10 && < 20      // wrong
age > 10 && age < 20  // right
` },
        { title: 'Mixing up AND and OR', en: 'Say the sentence in English first. "Both" means AND. "Either" means OR. Free entry for children under 12 <b>or</b> seniors 60+ is OR, not AND (nobody is both).' },
        { title: 'NOT without parentheses', en: 'To flip a whole comparison, put it in parentheses: <code>!(x &gt; 5)</code>. Writing <code>!x &gt; 5</code> is an error.' }
      ],
      remember: [
        '<code>&amp;&amp;</code> (AND) is true only when <b>both</b> sides are true.',
        '<code>||</code> (OR) is true when <b>at least one</b> side is true.',
        '<code>!</code> (NOT) flips true to false and false to true.',
        'Each side of <code>&amp;&amp;</code> or <code>||</code> must be a complete true/false question.'
      ],
      rememberAr: '&& يحتاج الطرفين صحيحين، و || يكفي أحدهما، و ! يعكس القيمة. كل طرف يجب أن يكون سؤالاً كاملاً.',
      practice: [
        { t: 'mcq', q: 'What is <code>true &amp;&amp; false</code>?', options: ['true', 'false'], answer: 1, explain: 'AND needs both sides true.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(true || false);
System.out.println(!true);
`, answer: J`
true
false
`, explain: 'OR needs only one true side. NOT true is false.' },
        { t: 'output', q: 'What is printed?', code: J`
int age = 16;
boolean hasPermit = true;
System.out.println(age >= 18 || hasPermit);
System.out.println(age >= 18 && hasPermit);
System.out.println(!(age >= 18));
`, answer: J`
true
false
true
`, explain: 'age >= 18 is false. false OR true is true. false AND true is false. NOT false is true.' },
        { t: 'mcq', q: 'A student gets a prize only if attendance is high <b>and</b> marks are high. Which operator joins the two questions?', options: ['<code>&amp;&amp;</code>', '<code>||</code>', '<code>!</code>', '<code>==</code>'], answer: 0, explain: '"Both must be true" is AND.' },
        { t: 'fill', q: 'Shipping is free if the total is 200 or more, <b>or</b> the customer is a member. Then <code>pays</code> is the opposite of free shipping.', code: J`
boolean freeShipping = total >= 200 ___ isMember;
boolean pays = ___ freeShipping;
`, answers: ['||', '!'], explain: 'Either reason is enough, so OR. The opposite of a boolean is NOT.' },
        { t: 'order', q: 'Put the lines in order so the program prints whether the student passed both subjects.', lines: ['int math = 80;', 'int java = 55;', 'boolean both = math >= 60 && java >= 60;', 'System.out.println(both);'], explain: 'Create the values, then combine them, then print.' },
        { t: 'code', q: 'Read one whole number: the temperature in Riyadh. Print three lines: <code>true</code>/<code>false</code> for "hot" (above 35), then "cold" (below 10), then "mild" (not hot and not cold). Do not print any prompt.', qAr: 'اقرأ درجة الحرارة واطبع ثلاثة أسطر: حار، بارد، معتدل.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int temp = input.nextInt();
        boolean hot = temp > 35;
        boolean cold = temp < 10;
        // print hot, cold, then mild
    }
}
`, tests: [{ stdin: '40', expected: 'true\nfalse\nfalse' }, { stdin: '5', expected: 'false\ntrue\nfalse' }, { stdin: '25', expected: 'false\nfalse\ntrue' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int temp = input.nextInt();
        boolean hot = temp > 35;
        boolean cold = temp < 10;
        System.out.println(hot);
        System.out.println(cold);
        System.out.println(!hot && !cold);
    }
}
`, hint: 'Mild means: NOT hot AND NOT cold.', explain: 'Mild is true only when both hot and cold are false.' }
      ]
    },
    {
      title: 'Ranges, precedence and short-circuit',
      titleAr: 'المدى والأولوية والتقييم المختصر',
      minutes: 30,
      body: [
        { type: 'h', en: 'Is a number inside a range?' },
        { type: 'p', en: 'A common question: is a value between two limits? The gym is open from hour 6 to hour 22. Is 14 inside? In maths you write 6 &le; hour &le; 22, but Java cannot read that. You must ask two questions and join them with AND.',
          ar: 'لاختبار أن العدد داخل مدى نكتب سؤالين ونربطهما بـ &&.' },
        { type: 'analogy', title: 'A fence with two ends', en: 'To be inside a field you must be past the left fence <b>and</b> before the right fence. Two checks, one for each end.' },
        { type: 'code', code: J`
boolean open = hour >= 6 && hour <= 22;
` },
        { type: 'lines', rows: [
          ['hour >= 6', 'Is the hour at least 6? (left fence)'],
          ['&&', 'and also'],
          ['hour <= 22', 'Is the hour at most 22? (right fence)']
        ], ar: 'السؤال الأول للحد الأدنى والثاني للحد الأعلى.' },
        { type: 'note', kind: 'warn', en: 'Do not write <code>6 &lt;= hour &lt;= 22</code>. It does not compile. Always repeat the variable on both sides of <code>&amp;&amp;</code>.' },
        { type: 'check', q: 'Which condition is true when <code>x</code> is between 1 and 10, including 1 and 10?', options: ['<code>x &gt;= 1 || x &lt;= 10</code>', '<code>x &gt;= 1 &amp;&amp; x &lt;= 10</code>', '<code>x &gt; 1 &amp;&amp; x &lt; 10</code>', '<code>1 &lt;= x &lt;= 10</code>'], answer: 1, explain: 'AND with the inclusive signs. OR is true for every number. The third excludes 1 and 10. The last does not compile.' },
        { type: 'h', en: 'Which operator goes first? (precedence)' },
        { type: 'p', en: 'When a line has several operators, Java needs a rule for which to do first. In maths, multiplication goes before addition. In conditions: <code>!</code> first, then arithmetic, then comparisons, then <code>&amp;&amp;</code>, and <code>||</code> last. So <code>a || b &amp;&amp; c</code> means <code>a || (b &amp;&amp; c)</code>.',
          ar: 'ترتيب التنفيذ: ! ثم الحساب ثم المقارنة ثم && ثم ||. استخدم الأقواس عند الشك.' },
        { type: 'analogy', title: 'Maths class', en: 'In <code>2 + 3 * 4</code> you multiply first. In conditions, AND is like multiplication and OR is like addition: AND goes first. Parentheses always win.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(true || false && false);
        System.out.println((true || false) && false);
    }
}
`, out: J`
true
false
` },
        { type: 'lines', rows: [
          ['true || false && false', 'AND first: <code>false &amp;&amp; false</code> is false. Then <code>true || false</code> is <code>true</code>.'],
          ['(true || false) && false', 'Parentheses first: <code>true</code>. Then <code>true &amp;&amp; false</code> is <code>false</code>.']
        ] },
        { type: 'check', q: 'What is <code>false &amp;&amp; true || true</code>?', options: ['true', 'false'], answer: 0, explain: 'AND first: false && true is false. Then false || true is true.' },
        { type: 'h', en: 'Short-circuit: stop as soon as you know' },
        { type: 'p', en: 'Java reads <code>&amp;&amp;</code> and <code>||</code> from left to right and <b>stops as soon as the answer is known</b>. If the left side of AND is false, the whole answer is false, so Java does not look at the right side. This is useful to avoid dividing by zero.',
          ar: 'يتوقف جافا عند معرفة الجواب: إذا كان الطرف الأيسر في && خاطئاً لا يُفحص الأيمن.' },
        { type: 'analogy', title: 'Two keys again', en: 'With two locks, if the first lock is broken you do not even try the second key. The door will not open anyway.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int people = 0;
        int total = 300;
        boolean costly = people != 0 && total / people > 50;
        System.out.println(costly);
    }
}
`, out: 'false' },
        { type: 'lines', rows: [
          ['people != 0', 'People is 0, so this is <code>false</code>.'],
          ['&& total / people > 50', 'Skipped! Dividing 300 by 0 would crash the program, but Java never gets there.']
        ], ar: 'بسبب التقييم المختصر لم تحدث القسمة على صفر.' },
        { type: 'note', kind: 'exam', en: 'Exam trap: if the skipped side has <code>++n</code>, then n does not change. In <code>n &lt; 5 &amp;&amp; ++n &gt; 0</code> with n = 10 the left side is false, so n stays 10.' },
        { type: 'h', en: 'A rare one: exclusive or' },
        { type: 'p', en: 'The operator <code>^</code> is true when <b>exactly one</b> side is true. Like "tea or coffee, but not both". You will rarely need it, but the exam may ask: <code>true ^ true</code> is <code>false</code>, and <code>true ^ false</code> is <code>true</code>.' },
        { type: 'steps', title: 'Worked example: open and safe', problem: 'Read the hour, the number of people and the total cost. Print whether the gym is open (6 to 22), and whether each person pays more than 50 riyals. Do not divide by zero.',
          steps: [
            { en: 'Read the three whole numbers.', code: J`
int hour = input.nextInt();
int people = input.nextInt();
int total = input.nextInt();
` },
            { en: 'Open: inside the range 6 to 22.', code: J`
boolean open = hour >= 6 && hour <= 22;
` },
            { en: 'Costly: check people is not zero first, so the division is safe.', code: J`
boolean costly = people != 0 && total / people > 50;
` },
            { en: 'Print both answers.', code: J`
System.out.println(open);
System.out.println(costly);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int hour = input.nextInt();
        int people = input.nextInt();
        int total = input.nextInt();
        boolean open = hour >= 6 && hour <= 22;
        boolean costly = people != 0 && total / people > 50;
        System.out.println(open);
        System.out.println(costly);
    }
}
`, stdin: '7 0 300', out: J`
true
false
`, ar: 'فحصنا people != 0 أولاً لنتجنب القسمة على صفر.' }
      ],
      mistakes: [
        { title: 'Chained comparison', en: 'Maths style does not compile.', code: J`
6 <= hour <= 22          // wrong
hour >= 6 && hour <= 22  // right
` },
        { title: 'Using OR for a range', en: 'With OR every number passes, because every number is at least 6 or at most 22.', code: J`
hour >= 6 || hour <= 22  // always true!
` },
        { title: 'Wrong order for safety checks', en: 'Put the safe check on the left.', code: J`
total / people > 50 && people != 0   // crashes when people is 0
people != 0 && total / people > 50   // safe
` },
        { title: 'Forgetting parentheses', en: 'If you mean "(a or b) and c", write the parentheses. Without them AND goes first.' }
      ],
      remember: [
        'A range needs two questions joined by AND: <code>x &gt;= low &amp;&amp; x &lt;= high</code>.',
        'Order: <code>!</code>, arithmetic, comparisons, <code>&amp;&amp;</code>, then <code>||</code>. Parentheses win.',
        'Java stops as soon as the answer is known (short-circuit).',
        'Put the safe check on the left of <code>&amp;&amp;</code>.',
        '<code>^</code> is true when exactly one side is true.'
      ],
      rememberAr: 'المدى يحتاج سؤالين مع &&. الأولوية: ! ثم المقارنات ثم && ثم ||. يتوقف جافا عند معرفة الجواب، فضع الفحص الآمن على اليسار.',
      practice: [
        { t: 'mcq', q: 'Which condition tests that <code>x</code> is between 1 and 10, including both ends?', options: ['<code>x &gt;= 1 &amp;&amp; x &lt;= 10</code>', '<code>x &gt;= 1 || x &lt;= 10</code>', '<code>1 &lt;= x &lt;= 10</code>', '<code>x &gt; 1 &amp;&amp; x &lt; 10</code>'], answer: 0, explain: 'Both limits must hold, with inclusive signs.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(5 >= 1 && 5 <= 10);
System.out.println(11 >= 1 && 11 <= 10);
`, answer: J`
true
false
`, explain: '5 is inside the range. 11 passes the first test but fails the second.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(true || false && false);
System.out.println((true || false) && false);
`, answer: J`
true
false
`, explain: 'AND goes before OR in the first line. Parentheses change the order in the second line.' },
        { t: 'output', q: 'What is printed?', code: J`
int n = 10;
boolean ok = n < 5 && ++n > 0;
System.out.println(ok);
System.out.println(n);
`, answer: J`
false
10
`, explain: 'n &lt; 5 is false, so Java skips <code>++n</code>. n stays 10.' },
        { t: 'mcq', q: 'What is the value of this expression?', code: J`
!(5 > 3) || (2 == 2) && false
`, options: ['true', 'false', 'It does not compile'], answer: 1, explain: 'AND first: (2 == 2) && false is false. !(5 &gt; 3) is false. false || false is false.' },
        { t: 'fill', q: 'A teenager is 13 to 19 years old (including both). Complete the code.', code: J`
boolean isTeen = age ___ 13 ___ age <= 19;
`, answers: ['>=', '&&'], explain: 'At least 13 <b>and</b> at most 19.' },
        { t: 'order', q: 'Put the lines in order so the program prints whether the gym is open at hour 23.', lines: ['int hour = 23;', 'boolean open = hour >= 6 && hour <= 22;', 'System.out.println(open);'], explain: 'Create the variable, ask the question, print the answer.' },
        { t: 'code', q: 'Read the hour (a whole number). Print <code>true</code> if the gym is open (from 6 to 22, including both), otherwise <code>false</code>. Do not print any prompt.', qAr: 'اقرأ الساعة واطبع true إذا كان النادي مفتوحاً من 6 إلى 22.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int hour = input.nextInt();
        // print the answer
    }
}
`, tests: [{ stdin: '6', expected: 'true' }, { stdin: '22', expected: 'true' }, { stdin: '23', expected: 'false' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int hour = input.nextInt();
        System.out.println(hour >= 6 && hour <= 22);
    }
}
`, hint: 'Two questions joined by AND, with inclusive signs.', explain: 'Both ends are included, so use &gt;= and &lt;=.' }
      ]
    },
    {
      title: 'The if statement',
      titleAr: 'جملة if',
      minutes: 30,
      body: [
        { type: 'h', en: 'Running code only sometimes' },
        { type: 'p', en: 'So far every line of your program runs, always. But a real program must sometimes skip things. Print "Stay inside" only when the weather is very hot. Give a discount only when the bill is big. The <code>if</code> statement does this: it runs some code <b>only when a condition is true</b>.',
          ar: 'جملة if تنفذ جزءاً من الكود فقط عندما يكون الشرط صحيحاً.' },
        { type: 'analogy', title: 'The umbrella rule', en: '"If it is raining, take an umbrella." When it rains you do the extra action. When it does not rain you simply carry on with your day. You do not do anything special.', ar: 'إذا أمطرت خذ المظلة، وإلا تابع يومك.' },
        { type: 'code', code: J`
if (temp > 40) {
    System.out.println("Stay inside");
}
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['if (temp > 40)', 'Ask: is the temperature more than 40? This question is the <b>condition</b>. It must be inside parentheses.'],
          ['{', 'Start of the block: the lines that belong to the if.'],
          ['    System.out.println("Stay inside");', 'Runs <b>only if</b> the answer was true. (The 4 spaces are indentation, to help humans read.)'],
          ['}', 'End of the block. After this, the program continues normally.']
        ], ar: 'الشرط بين قوسين، والكود الذي ينفذ عند تحققه بين { }.' },
        { type: 'check', q: 'If <code>temp</code> is 30, what does the code above do?', options: ['Prints "Stay inside"', 'Prints nothing', 'Gives an error'], answer: 1, explain: '30 &gt; 40 is false, so the block is skipped.' },
        { type: 'h', en: 'A full program' },
        { type: 'p', en: 'Let us read a mark and print a message only when the student passed. The last line is outside the block, so it always runs.' },
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
        { type: 'lines', rows: [
          ['int grade = input.nextInt();', 'Read the mark. Imagine the user typed 85.'],
          ['if (grade >= 60) {', '85 is at least 60: true. Enter the block.'],
          ['System.out.println("You passed.");', 'Print the message.'],
          ['System.out.println("Grade recorded: " + grade);', 'Outside the block: always runs, even if the mark was 40.']
        ] },
        { type: 'check', q: 'The user types 40. What is printed?', options: ['You passed.<br>Grade recorded: 40', 'Grade recorded: 40', 'Nothing'], answer: 1, explain: '40 &gt;= 60 is false, so only the line outside the block runs.' },
        { type: 'h', en: 'Braces: the box around the if' },
        { type: 'p', en: 'The braces <code>{ }</code> make a box. Everything inside the box belongs to the if. You may leave the braces out when you have <b>only one</b> line, but then only the <b>first</b> line after the if belongs to it. The indentation does not matter to Java. Beginners often get hurt here, so we always use braces.',
          ar: 'بدون الأقواس { } تتبع الجملة الأولى فقط جملة if، ولا تهتم جافا بالمسافات.' },
        { type: 'analogy', title: 'The shopping bag', en: 'Braces are a shopping bag. Only the items in the bag go home with the if. Without a bag you can carry only one item. The other items stay behind, even if you put them next to the first one.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int temp = 15;
        if (temp > 30)
            System.out.println("Hot day");
            System.out.println("Drink water");
    }
}
`, out: 'Drink water' },
        { type: 'lines', rows: [
          ['if (temp > 30)', '15 &gt; 30 is false.'],
          ['    System.out.println("Hot day");', 'This is the only line that belongs to the if. Skipped.'],
          ['    System.out.println("Drink water");', 'Looks indented, but it is <b>not</b> part of the if. It always runs.']
        ] },
        { type: 'note', kind: 'warn', en: 'Never put a semicolon right after the condition. <code>if (grade &gt;= 60);</code> ends the if with an empty statement, so the block after it <b>always</b> runs.', ar: 'لا تضع فاصلة منقوطة بعد شرط if.' },
        { type: 'check', q: 'What is wrong with <code>if (x &gt; 5);</code> followed by a block?', options: ['The semicolon makes the if do nothing, so the block always runs', 'Nothing is wrong', 'The block never runs'], answer: 0, explain: 'The semicolon is an empty statement that becomes the whole body of the if.' },
        { type: 'steps', title: 'Worked example: a discount', problem: 'A shop gives 20 riyals off when the bill is 200 riyals or more. Read the bill and print the amount to pay.',
          steps: [
            { en: 'Read the bill as a whole number.', code: J`
int total = input.nextInt();
` },
            { en: 'Ask the question: is the total 200 or more?', code: J`
if (total >= 200) {
` },
            { en: 'Only inside the block take 20 away.', code: J`
    total = total - 20;
}
` },
            { en: 'Outside the block, print the result. It runs for everyone.', code: J`
System.out.println("Pay: " + total);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = input.nextInt();
        if (total >= 200) {
            total = total - 20;
        }
        System.out.println("Pay: " + total);
    }
}
`, stdin: '250', out: 'Pay: 230', ar: 'الخصم يُطبق فقط داخل الكتلة، والطباعة خارجها.' }
      ],
      mistakes: [
        { title: 'Semicolon after the condition', en: 'The block then always runs.', code: J`
if (grade >= 60);   // wrong
{
    System.out.println("Pass");
}
` },
        { title: 'Forgetting the parentheses', en: 'The condition must be inside parentheses.', code: J`
if grade >= 60 { ... }     // wrong
if (grade >= 60) { ... }   // right
` },
        { title: 'Two lines without braces', en: 'Only the first line belongs to the if, even if both are indented.', code: J`
if (temp > 30)
    System.out.println("Hot");
    System.out.println("Drink");  // always runs
` },
        { title: 'Using = in the condition', en: '<code>if (x = 5)</code> is a compile error, because the condition must be true/false. Use <code>==</code>.' }
      ],
      remember: [
        '<code>if (condition) { ... }</code> runs the block only when the condition is true.',
        'The condition goes in parentheses and must be true or false.',
        'When the condition is false the block is skipped and the program continues.',
        'Always use braces, and never put <code>;</code> after the condition.',
        'Java ignores indentation. Braces decide what belongs to the if.'
      ],
      rememberAr: 'if تنفذ الكتلة فقط عند صحة الشرط. الشرط بين قوسين. استخدم { } دائماً ولا تضع ; بعد الشرط. جافا لا تهتم بالمسافات.',
      practice: [
        { t: 'mcq', q: 'What does an <code>if</code> do when its condition is false?', options: ['Runs the block anyway', 'Skips the block', 'Stops the program', 'Gives an error'], answer: 1, explain: 'It skips the block and continues with the next line.' },
        { t: 'output', q: 'What is printed?', code: J`
int x = 8;
if (x > 5) {
    System.out.println("big");
}
System.out.println("end");
`, answer: J`
big
end
`, explain: '8 &gt; 5 is true, so "big" is printed. "end" is outside the block.' },
        { t: 'output', q: 'What is printed?', code: J`
int x = 4;
if (x > 5)
    System.out.println("A");
    System.out.println("B");
System.out.println("C");
`, answer: J`
B
C
`, explain: 'Without braces only the A line belongs to the if. It is skipped. B and C always run.' },
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
`, explain: 'The semicolon ends the if. The block with "Big" is a separate block that always runs.' },
        { t: 'mcq', q: 'Assume <code>int x = 3;</code>. What happens with <code>if (x = 5) { ... }</code>?', options: ['The block runs', 'The block is skipped', 'Compile error', 'Runtime error'], answer: 2, explain: '<code>x = 5</code> is an assignment and gives an int, but the condition must be boolean. Use <code>==</code>.' },
        { t: 'fill', q: 'Print "Overdrawn" only when the balance is below zero.', code: J`
___ (balance ___ 0) {
    System.out.println("Overdrawn");
}
`, answers: ['if', '<'], explain: 'Start with <code>if</code> and ask whether the balance is less than 0.' },
        { t: 'order', q: 'Put the lines in order: if the mark is 60 or more print Pass, then always print Done.', lines: ['if (mark >= 60) {', '    System.out.println("Pass");', '}', 'System.out.println("Done");'], explain: 'The closing brace ends the if. "Done" comes after it.' },
        { t: 'code', q: 'Read a whole number. If it is negative print <code>Negative</code>. After that, always print <code>Done</code>. Do not print any prompt.', qAr: 'اقرأ عدداً. إذا كان سالباً اطبع Negative، ثم اطبع Done دائماً.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your if here
        System.out.println("Done");
    }
}
`, tests: [{ stdin: '-5', expected: 'Negative\nDone' }, { stdin: '7', expected: 'Done' }, { stdin: '0', expected: 'Done' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        if (n < 0) {
            System.out.println("Negative");
        }
        System.out.println("Done");
    }
}
`, hint: 'The condition is <code>n &lt; 0</code>. Zero is not negative.', explain: 'Negative means less than zero.' }
      ]
    },
    {
      title: 'The if-else statement',
      titleAr: 'جملة if-else',
      minutes: 30,
      body: [
        { type: 'h', en: 'Two roads, one choice' },
        { type: 'p', en: 'Often you want to do <b>one thing</b> when the answer is yes and <b>another thing</b> when the answer is no. With only <code>if</code> you can do something extra, but you cannot say "otherwise". The word <code>else</code> gives you the second road.',
          ar: 'else تعطيك الطريق الثاني: ماذا نفعل إذا لم يتحقق الشرط.' },
        { type: 'analogy', title: 'A fork in the road', en: 'You reach a fork. If the left road is open, go left. Otherwise go right. You always take <b>exactly one</b> road. You never take both, and you never take none.', ar: 'تأخذ دائماً طريقاً واحداً فقط.' },
        { type: 'code', code: J`
if (n % 2 == 0) {
    System.out.println("even");
} else {
    System.out.println("odd");
}
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['if (n % 2 == 0) {', 'Is the remainder after dividing by 2 equal to 0? (An even number.)'],
          ['    System.out.println("even");', 'If yes: print "even".'],
          ['} else {', 'Otherwise (the answer was no):'],
          ['    System.out.println("odd");', 'print "odd".']
        ], ar: 'يُنفذ بلوك واحد فقط: إما if أو else.' },
        { type: 'check', q: 'In an if-else, how many of the two blocks run each time?', options: ['Both', 'Exactly one', 'None', 'It depends on the indentation'], answer: 1, explain: 'One road is always taken: the if block when true, the else block when false.' },
        { type: 'h', en: 'A full program' },
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
        { type: 'p', en: 'Remember <code>%</code>? It gives the remainder of a division. 7 divided by 2 leaves remainder 1, which is not 0, so the else road runs.' },
        { type: 'h', en: 'Another example: the bank' },
        { type: 'p', en: 'A bank account must check the balance before a withdrawal. If there is enough money, take it. Otherwise refuse.' },
        { type: 'analogy', title: 'The cashier', en: 'The cashier looks at your balance. Enough money? Hand over the cash. Not enough? Say "sorry". The cashier never does both.' },
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
        { type: 'lines', rows: [
          ['if (amount <= balance) {', '650 &lt;= 500 is false, so skip this block.'],
          ['} else {', 'Take the else road.'],
          ['System.out.println("Insufficient funds.");', 'Print the refusal. The balance did not change.'],
          ['System.out.println("Balance: " + balance);', 'After the if-else, always print the balance.']
        ] },
        { type: 'check', q: 'If amount is 100 and balance is 500, what is printed first?', options: ['Withdrawal done.', 'Insufficient funds.'], answer: 0, explain: '100 &lt;= 500 is true, so the if block runs.' },
        { type: 'note', kind: 'tip', en: 'For a boolean variable write <code>if (isMember)</code>, not <code>if (isMember == true)</code>. And write <code>if (!isMember)</code> for the opposite. It is shorter and cannot have the <code>=</code> mistake.', ar: 'للمتغير المنطقي اكتب if (isMember) مباشرة.' },
        { type: 'note', kind: 'exam', en: 'The compiler ignores indentation. To know what belongs to an if or an else, look only at the braces.' },
        { type: 'steps', title: 'Worked example: cinema ticket', problem: 'A cinema ticket costs 10 riyals for children under 12 and 25 riyals for everyone else. Read the age and print the ticket price.',
          steps: [
            { en: 'Read the age and prepare a box for the price. We do not know its value yet.', code: J`
int age = input.nextInt();
int price;
` },
            { en: 'Ask: is the age less than 12? If yes, the price is 10.', code: J`
if (age < 12) {
    price = 10;
` },
            { en: 'Otherwise the price is 25.', code: J`
} else {
    price = 25;
}
` },
            { en: 'Now price always has a value. Print it.', code: J`
System.out.println("Ticket: " + price + " SAR");
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        int price;
        if (age < 12) {
            price = 10;
        } else {
            price = 25;
        }
        System.out.println("Ticket: " + price + " SAR");
    }
}
`, stdin: '8', out: 'Ticket: 10 SAR', ar: 'في كل حالة يأخذ price قيمة واحدة فقط.' }
      ],
      mistakes: [
        { title: 'A condition after else', en: '<code>else</code> never has a condition. It means "in every other case".', code: J`
} else (n % 2 == 1) {   // wrong
} else {                // right
` },
        { title: 'Testing odd with % 2 == 1', en: 'For negative numbers, <code>-3 % 2</code> is <code>-1</code>, not 1. So the test fails. Test <code>n % 2 == 0</code> for even, and use else for odd.' },
        { title: 'else without a matching if', en: 'An <code>else</code> must come right after the closing brace of an if. A statement in between causes a compile error.' },
        { title: 'A semicolon before else', en: '<code>if (x &gt; 0) a = 1;</code> is fine, but a semicolon after the condition (<code>if (x &gt; 0);</code>) breaks the if-else.' }
      ],
      remember: [
        '<code>if (...) { A } else { B }</code> runs exactly one of A and B.',
        '<code>else</code> has no condition of its own.',
        'Even test: <code>n % 2 == 0</code>. Everything else is odd.',
        'Code after the closing brace of the else runs in every case.'
      ],
      rememberAr: 'if-else ينفذ بلوكاً واحداً فقط. else لا تحتاج شرطاً. العدد زوجي إذا كان n % 2 == 0.',
      practice: [
        { t: 'mcq', q: 'In an if-else, when does the else block run?', options: ['When the condition is true', 'When the condition is false', 'Always', 'Never'], answer: 1, explain: 'else means "otherwise": the condition was false.' },
        { t: 'output', q: 'What is printed?', code: J`
int n = 4;
if (n % 2 == 0) {
    System.out.println("even");
} else {
    System.out.println("odd");
}
`, answer: 'even', explain: '4 divided by 2 has remainder 0.' },
        { t: 'output', q: 'What is printed?', code: J`
double balance = 100;
double price = 130;
if (price <= balance) {
    System.out.println("Buy");
} else {
    System.out.println("No money");
}
`, answer: 'No money', explain: '130 &lt;= 100 is false, so the else block runs.' },
        { t: 'output', q: 'What is printed?', code: J`
int a = 5;
int b = 9;
if (a > b) {
    System.out.println(a);
} else {
    System.out.println(b);
}
System.out.println("Done");
`, answer: J`
9
Done
`, explain: '5 &gt; 9 is false, so b is printed. "Done" is outside and always runs.' },
        { t: 'fill', q: 'Complete the code so <code>max</code> holds the larger of <code>a</code> and <code>b</code>.', code: J`
if (a ___ b) {
    max = a;
} ___ {
    max = b;
}
`, answers: [['>', '>='], 'else'], explain: 'If a is larger, max is a. Otherwise max is b.' },
        { t: 'order', q: 'Arrange the lines: if the balance covers the price, subtract the price and print Purchased; otherwise print Not enough money.', lines: ['if (balance >= price) {', '    balance = balance - price;', '    System.out.println("Purchased");', '} else {', '    System.out.println("Not enough money");', '}'], explain: 'True block first, then <code>} else {</code>, then the false block.' },
        { t: 'code', q: 'Read one whole number and print <code>Even</code> if it is even or <code>Odd</code> if it is odd. Negative numbers are possible. Do not print any prompt.', qAr: 'اقرأ عدداً واطبع Even أو Odd. انتبه للأعداد السالبة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // your if-else here
    }
}
`, tests: [{ stdin: '8', expected: 'Even' }, { stdin: '-3', expected: 'Odd' }, { stdin: '0', expected: 'Even' }],
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
`, hint: 'Test <code>n % 2 == 0</code>. Testing for 1 fails for negative odd numbers.', explain: 'A number is even when the remainder after dividing by 2 is zero; every other number is odd.' },
        { t: 'code', q: 'Read an age. Print <code>Child</code> if the age is below 12, otherwise print <code>Adult</code>. Do not print any prompt.', qAr: 'اقرأ العمر. اطبع Child إذا كان أقل من 12 وإلا Adult.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        // your if-else here
    }
}
`, tests: [{ stdin: '8', expected: 'Child' }, { stdin: '12', expected: 'Adult' }, { stdin: '30', expected: 'Adult' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        if (age < 12) {
            System.out.println("Child");
        } else {
            System.out.println("Adult");
        }
    }
}
`, hint: 'Age 12 is already an Adult, so use <code>age &lt; 12</code>.', explain: 'Exactly 12 is not below 12, so it goes to else.' }
      ]
    },
    {
      title: 'Nested if: a decision inside a decision',
      titleAr: 'if متداخلة: قرار داخل قرار',
      minutes: 30,
      body: [
        { type: 'h', en: 'Questions that depend on earlier answers' },
        { type: 'p', en: 'Sometimes the second question only makes sense after the first answer. You ask "Is the person 18 or older?" first. Only if yes, you ask "Do they have a license?". We do this by placing one <code>if</code> inside another. This is called a <b>nested if</b> ("nested" means "put inside", like a bird in a nest).',
          ar: 'if المتداخلة هي جملة if داخل جملة if أخرى؛ السؤال الثاني يُطرح فقط بعد جواب الأول.' },
        { type: 'analogy', title: 'Airport check', en: 'At the airport, first a guard checks your passport. Only if the passport is fine do you go to the second guard, who checks your ticket. If the passport fails, you never meet the second guard.', ar: 'لا تصل إلى الحارس الثاني إلا إذا نجحت مع الأول.' },
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
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['if (age >= 18) {', 'First question. 20 is at least 18: true. Go inside.'],
          ['    if (hasLicense) {', 'Second question, asked only because the first was true. <code>hasLicense</code> is false.'],
          ['    } else {', 'The inner else: the license is missing.'],
          ['        System.out.println("Get a license first.");', 'This line runs.'],
          ['} else {', 'The outer else belongs to the first question (age). It would run if the person were under 18.']
        ], ar: 'لكل else كتلة if خاصة بها حسب الأقواس.' },
        { type: 'check', q: 'Using the code above with <code>age = 15</code>, what is printed?', options: ['You may drive.', 'Get a license first.', 'Too young to drive.'], answer: 2, explain: '15 &gt;= 18 is false, so the outer else runs. The inner question is never asked.' },
        { type: 'note', kind: 'tip', en: 'A nested if with no else can often be written with <code>&amp;&amp;</code>: <code>if (age &gt;= 18 &amp;&amp; hasLicense)</code>. Use nested ifs when each branch needs its own message.', ar: 'عند غياب else يمكن استبدال التداخل بـ &&.' },
        { type: 'h', en: 'The dangling else' },
        { type: 'p', en: 'With nested ifs there is a famous trap. If you leave out the braces, which if does an <code>else</code> belong to? The rule: <b>an else belongs to the nearest if above it that has no else yet</b>. The indentation does not change this.',
          ar: 'القاعدة: else تتبع أقرب if قبلها لا تملك else، مهما كانت المسافات.' },
        { type: 'analogy', title: 'A child and the nearest parent', en: 'A lost child holds the hand of the <b>nearest</b> adult, not the adult standing further away. An <code>else</code> does the same: it attaches itself to the nearest <code>if</code>.' },
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
        { type: 'lines', rows: [
          ['if (a > 0)', 'Outer if. 5 &gt; 0 is true.'],
          ['    if (b > 0)', 'Inner if. -3 &gt; 0 is false.'],
          ['else', 'Looks like it belongs to the outer if. In truth it belongs to the <b>inner</b> if, the nearest one.'],
          ['System.out.println("a is not positive");', 'The inner if was false, so its else runs. The message is wrong! a is positive.']
        ] },
        { type: 'p', en: 'The cure is simple: use braces, and the else goes where you want it.' },
        { type: 'code', code: J`
if (a > 0) {
    if (b > 0)
        System.out.println("Both positive");
} else
    System.out.println("a is not positive");
` },
        { type: 'check', q: 'An <code>else</code> without braces belongs to...', options: ['the first if in the program', 'the nearest previous if that has no else', 'the if with the same indentation'], answer: 1, explain: 'Java ignores indentation and matches else with the nearest if.' },
        { type: 'steps', title: 'Worked example: exam eligibility', problem: 'A student may sit the exam if the mark is at least 60. But a good mark is not enough: attendance must be at least 75 percent. Read the mark and the attendance, and print one of three messages.',
          steps: [
            { en: 'Read the two numbers.', code: J`
int mark = input.nextInt();
int attendance = input.nextInt();
` },
            { en: 'First question: is the mark good enough?', code: J`
if (mark >= 60) {
` },
            { en: 'Only then ask the second question about attendance, with a message for each answer.', code: J`
    if (attendance >= 75) {
        System.out.println("Allowed");
    } else {
        System.out.println("Attendance too low");
    }
` },
            { en: 'If the first question fails, the outer else gives its own message.', code: J`
} else {
    System.out.println("Mark too low");
}
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();
        int attendance = input.nextInt();
        if (mark >= 60) {
            if (attendance >= 75) {
                System.out.println("Allowed");
            } else {
                System.out.println("Attendance too low");
            }
        } else {
            System.out.println("Mark too low");
        }
    }
}
`, stdin: '70 60', out: 'Attendance too low', ar: 'السؤال الداخلي لا يُطرح إلا إذا نجح السؤال الخارجي.' }
      ],
      mistakes: [
        { title: 'Trusting the indentation', en: 'The compiler does not read indentation. The else below belongs to the inner if.', code: J`
if (a > 0)
    if (b > 0)
        System.out.println("X");
else
    System.out.println("Y");
` },
        { title: 'A missing closing brace', en: 'Every <code>{</code> needs its own <code>}</code>. Count them. A missing one gives an error at the end of the file.' },
        { title: 'Nesting when AND is simpler', en: 'If you only print when both conditions are true, <code>if (a &amp;&amp; b)</code> is shorter and clearer.' },
        { title: 'Putting the else in the wrong place', en: 'Check which if each else belongs to by matching the braces from the inside out.' }
      ],
      remember: [
        'A nested if is an if inside another if or else block.',
        'The inner question is only asked when the outer branch is reached.',
        'An else belongs to the <b>nearest</b> if without an else (dangling else).',
        'Use braces everywhere to avoid the dangling else.'
      ],
      rememberAr: 'if المتداخلة تعني if داخل if. else تتبع أقرب if. استخدم الأقواس دائماً لتجنب الخطأ.',
      practice: [
        { t: 'mcq', q: 'What is a nested if?', options: ['An if with no else', 'An if inside another if or else block', 'Two ifs in a row', 'An if with two conditions'], answer: 1, explain: 'Nested means placed inside.' },
        { t: 'output', q: 'What is printed?', code: J`
int age = 20;
if (age >= 18) {
    if (age >= 60) {
        System.out.println("Senior");
    } else {
        System.out.println("Adult");
    }
} else {
    System.out.println("Minor");
}
`, answer: 'Adult', explain: '20 &gt;= 18 is true, then 20 &gt;= 60 is false, so the inner else prints Adult.' },
        { t: 'output', q: 'What is printed?', code: J`
int a = 5;
int b = -3;
if (a > 0) {
    if (b > 0) {
        System.out.println("Both");
    }
} else {
    System.out.println("a is not positive");
}
System.out.println("End");
`, answer: 'End', explain: 'a &gt; 0 is true, b &gt; 0 is false and the inner if has no else. Only "End" is printed.' },
        { t: 'output', q: 'What is printed?', code: J`
int x = -2, y = 4;
if (x > 0)
    if (y > 0)
        System.out.println("P");
else
    System.out.println("Q");
System.out.println("R");
`, answer: 'R', explain: 'The else belongs to the inner if. Since x &gt; 0 is false, the whole inner if-else is skipped. Only R is printed.' },
        { t: 'mcq', q: 'Which if does an <code>else</code> belong to when there are no braces?', options: ['The first if', 'The nearest previous if without an else', 'The one with the same indentation', 'The last if'], answer: 1, explain: 'This is the dangling else rule.' },
        { t: 'fill', q: 'Complete the code: people with a ticket enter, others must buy one. Children (under 18) are handled by the outer else.', code: J`
if (age >= 18) {
    ___ (hasTicket) {
        System.out.println("Enter");
    } ___ {
        System.out.println("Buy a ticket");
    }
}
`, answers: ['if', 'else'], explain: 'The inner decision is a normal if-else.' },
        { t: 'code', q: 'Read the temperature and then a number for rain (1 means raining, 0 means not raining). If the temperature is above 30: print <code>Hot and wet</code> when it rains, otherwise <code>Hot and dry</code>. If the temperature is 30 or less, print <code>Not hot</code>. Do not print any prompt.', qAr: 'اقرأ الحرارة ثم المطر (1 أو 0) واطبع الرسالة المناسبة باستخدام if متداخلة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int temp = input.nextInt();
        int rain = input.nextInt();
        // nested if here
    }
}
`, tests: [{ stdin: '35 1', expected: 'Hot and wet' }, { stdin: '35 0', expected: 'Hot and dry' }, { stdin: '20 1', expected: 'Not hot' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int temp = input.nextInt();
        int rain = input.nextInt();
        if (temp > 30) {
            if (rain == 1) {
                System.out.println("Hot and wet");
            } else {
                System.out.println("Hot and dry");
            }
        } else {
            System.out.println("Not hot");
        }
    }
}
`, hint: 'Outer question: temp &gt; 30. Inner question: rain == 1.', explain: 'The rain question is asked only for hot days.' }
      ]
    },
    {
      title: 'Many choices: the else-if chain',
      titleAr: 'خيارات متعددة: سلسلة else if',
      minutes: 30,
      body: [
        { type: 'h', en: 'More than two roads' },
        { type: 'p', en: 'if-else gives two roads. But marks become letter grades A, B, C, D or F: five roads! We chain the questions with <code>else if</code>. Java asks them from top to bottom and the <b>first true one wins</b>. The rest are skipped.',
          ar: 'سلسلة else if تختار بين عدة احتمالات؛ يُنفذ أول شرط صحيح فقط.' },
        { type: 'analogy', title: 'Going down a staircase', en: 'You walk down a staircase and stop at the first step that you can stand on. You never go further. In an else-if chain, the first condition that is true is where Java stops.', ar: 'تتوقف عند أول درجة تصلح.' },
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
        { type: 'lines', title: 'Read it like a programmer (score is 83)', rows: [
          ['if (score >= 90) {', '83 &gt;= 90? No. Go to the next question.'],
          ['} else if (score >= 80) {', '83 &gt;= 80? Yes! Run this block.'],
          ['    letter = "B";', 'Store B.'],
          ['} else if (score >= 70) {', 'Never asked: Java already stopped above.'],
          ['} else {', 'The last road: when every question above was no.']
        ], ar: 'عند 83 يتحقق الشرط الثاني فقط وتُهمل بقية الفروع.' },
        { type: 'check', q: 'What grade is printed for a score of 70?', options: ['B', 'C', 'D', 'F'], answer: 1, explain: '70 &gt;= 90 no, 70 &gt;= 80 no, 70 &gt;= 70 yes: C.' },
        { type: 'h', en: 'The order matters' },
        { type: 'p', en: 'Because the first true condition wins, you must put the strictest question first. In the second branch we already know the score is below 90, so <code>score &gt;= 80</code> is enough. The next program has the questions in the wrong order. It compiles, but gives wrong answers!' },
        { type: 'analogy', title: 'Sorting coins', en: 'A machine that sorts coins must check the biggest hole first. If it checks the smallest hole first, every coin falls in the small hole.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int score = 95;
        if (score >= 60) {
            System.out.println("D");
        } else if (score >= 70) {
            System.out.println("C");
        } else if (score >= 90) {
            System.out.println("A");
        }
    }
}
`, out: 'D' },
        { type: 'lines', rows: [
          ['if (score >= 60) {', '95 &gt;= 60 is true, so Java stops here.'],
          ['System.out.println("D");', 'Prints D. The questions for C and A can never be reached.']
        ] },
        { type: 'check', q: 'How can we fix the program above?', options: ['Start with the largest limit (90) and go down', 'Remove all braces', 'Use == instead of &gt;='], answer: 0, explain: 'Test 90 first, then 70, then 60.' },
        { type: 'h', en: 'A chain is not the same as separate ifs' },
        { type: 'p', en: 'In a chain, only one block runs. If you write separate <code>if</code> statements, <b>each one is asked</b>, so several can run.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 50;
        if (n > 10) {
            System.out.println("big");
        }
        if (n > 40) {
            System.out.println("bigger");
        } else {
            System.out.println("small");
        }
    }
}
`, out: J`
big
bigger
` },
        { type: 'note', kind: 'exam', en: 'Exam trap: separate ifs are all tested. An <code>else if</code> chain stops at the first true condition. Look at where each <code>else</code> belongs.', ar: 'if المنفصلة تُفحص كلها، أما else if فتتوقف عند أول شرط صحيح.' },
        { type: 'steps', title: 'Worked example: ticket price by age', problem: 'A museum charges: free for children under 5, 10 riyals under 18, 25 riyals under 60, and 15 riyals for seniors (60 and above). Read the age and print the price.',
          steps: [
            { en: 'Read the age and prepare a box for the price.', code: J`
int age = input.nextInt();
int price;
` },
            { en: 'Start with the smallest group. If the age is under 5, the price is 0.', code: J`
if (age < 5) {
    price = 0;
` },
            { en: 'Next: under 18. We already know the age is 5 or more, so no need to check that again.', code: J`
} else if (age < 18) {
    price = 10;
} else if (age < 60) {
    price = 25;
` },
            { en: 'The last road catches everybody left: seniors.', code: J`
} else {
    price = 15;
}
` },
            { en: 'Print the price.', code: J`
System.out.println("Price: " + price);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        int price;
        if (age < 5) {
            price = 0;
        } else if (age < 18) {
            price = 10;
        } else if (age < 60) {
            price = 25;
        } else {
            price = 15;
        }
        System.out.println("Price: " + price);
    }
}
`, stdin: '30', out: 'Price: 25', ar: 'كل شرط يعتمد على أن الشروط السابقة كانت خاطئة.' }
      ],
      mistakes: [
        { title: 'Wrong order of conditions', en: 'The broad condition catches everything first.', code: J`
if (score >= 60) { ... }
else if (score >= 90) { ... }   // never reached
` },
        { title: 'Writing elseif or else with a condition', en: 'It is two words: <code>else if (condition)</code>. A plain <code>else</code> has no condition.' },
        { title: 'Separate ifs by mistake', en: 'If you forget <code>else</code> the second if is asked again and two messages may print.' },
        { title: 'No final else', en: 'If a variable gets its value only inside the branches and there is no final else, the compiler says it "might not have been initialized".', code: J`
String letter;
if (score >= 50) { letter = "P"; }
System.out.println(letter);   // error
` }
      ],
      remember: [
        'Use <code>else if</code> to choose among many roads.',
        'Java tests from top to bottom and the first true condition wins.',
        'Put the strictest (or the smallest range) condition first.',
        'The last <code>else</code> catches everything that is left.',
        'Separate ifs are all tested; an else-if chain runs only one block.'
      ],
      rememberAr: 'else if تختار بين عدة فروع، وأول شرط صحيح يُنفذ فقط. رتّب الشروط من الأضيق إلى الأوسع، و else الأخيرة تلتقط الباقي.',
      practice: [
        { t: 'mcq', q: 'In an else-if chain, which block runs?', options: ['All blocks', 'The first block whose condition is true', 'The last block', 'Every block with a true condition'], answer: 1, explain: 'Java stops at the first true condition.' },
        { t: 'output', q: 'What is printed?', code: J`
int t = 38;
if (t >= 40) {
    System.out.println("Very hot");
} else if (t >= 30) {
    System.out.println("Hot");
} else {
    System.out.println("Cool");
}
`, answer: 'Hot', explain: '38 &gt;= 40 is false; 38 &gt;= 30 is true, so Hot.' },
        { t: 'output', q: 'What is printed?', code: J`
int score = 75;
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}
`, answer: 'C', explain: '75 fails 90 and 80, then passes 70.' },
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
`, explain: 'These are two separate ifs. Both are tested. The else belongs to the second if.' },
        { t: 'output', q: 'This chain has its conditions in the wrong order. What is printed?', code: J`
int score = 95;
if (score >= 60)
    System.out.println("D");
else if (score >= 70)
    System.out.println("C");
else if (score >= 90)
    System.out.println("A");
`, answer: 'D', explain: '95 &gt;= 60 is true first, so D is printed and the chain stops.' },
        { t: 'fill', q: 'Speeds above 120 get a 900 fine, above 100 get 300, otherwise no fine.', code: J`
if (speed > 120) {
    System.out.println("Fine: 900");
} ___ (speed > 100) {
    System.out.println("Fine: 300");
} ___ {
    System.out.println("No fine");
}
`, answers: ['else if', 'else'], explain: 'The middle road has its own condition. The last road is a plain else.' },
        { t: 'order', q: 'Arrange the lines to print A for 90 or more, B for 75 or more, and C otherwise.', lines: ['if (mark >= 90) {', '    System.out.println("A");', '} else if (mark >= 75) {', '    System.out.println("B");', '} else {', '    System.out.println("C");', '}'], explain: 'The strictest question is first and the plain else is last.' },
        { t: 'code', q: 'Read a score from 0 to 100 and print its letter grade: 90 and above <code>A</code>, 80 to 89 <code>B</code>, 70 to 79 <code>C</code>, 60 to 69 <code>D</code>, below 60 <code>F</code>. Print only the letter. Do not print any prompt.', qAr: 'اقرأ الدرجة واطبع التقدير باستخدام if-else متعددة الفروع.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int score = input.nextInt();
        // else-if chain here
    }
}
`, tests: [{ stdin: '95', expected: 'A' }, { stdin: '80', expected: 'B' }, { stdin: '59', expected: 'F' }],
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
`, hint: 'Start with the highest range and go down.', explain: 'Testing from the top down means each later question can be a single comparison.' }
      ]
    },
    {
      title: 'The switch statement',
      titleAr: 'جملة switch',
      minutes: 30,
      body: [
        { type: 'h', en: 'A menu of choices' },
        { type: 'p', en: 'Imagine a coffee machine with buttons 1, 2 and 3. Each button does something different. You could write a long if / else if chain, but when you compare <b>one value</b> with many fixed choices, Java offers a cleaner tool: <code>switch</code>.',
          ar: 'عندما نقارن قيمة واحدة بعدة خيارات ثابتة نستخدم switch بدلاً من سلسلة if طويلة.' },
        { type: 'analogy', title: 'Lift buttons', en: 'In a lift you press a number and the lift goes to that floor. Each number leads to one place. A <code>switch</code> works in the same way: the value picks one <code>case</code>.' },
        { type: 'code', run: true, stdin: '2', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int choice = input.nextInt();
        switch (choice) {
            case 1:
                System.out.println("Espresso");
                break;
            case 2:
                System.out.println("Latte");
                break;
            default:
                System.out.println("Unknown");
        }
    }
}
`, out: 'Latte' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['switch (choice) {', 'Look at the value of <code>choice</code>. It is 2.'],
          ['case 1:', 'Is it 1? No. Skip to the next case. (Note the <b>colon</b> <code>:</code>, not a semicolon.)'],
          ['case 2:', 'Is it 2? Yes! Start running from here.'],
          ['System.out.println("Latte");', 'Print Latte.'],
          ['break;', 'Leave the switch. Without it, Java would keep going into the next case.'],
          ['default:', 'Runs only if no case matched.']
        ], ar: 'break تُخرجنا من switch، و default للحالة التي لا يتطابق فيها أي case.' },
        { type: 'check', q: 'What is printed if <code>choice</code> is 5?', options: ['Espresso', 'Latte', 'Unknown', 'Nothing'], answer: 2, explain: 'No case matches 5, so default runs.' },
        { type: 'h', en: 'break and default in detail' },
        { type: 'analogy', title: 'Rooms in a corridor', en: 'The cases are rooms along a corridor. Java walks in at the matching room. <code>break</code> is the door out of the building. <code>default</code> is the room at the end of the corridor for anyone who matched no number.' },
        { type: 'table', head: ['Part', 'What it does'], rows: [
          ['<code>switch (value)</code>', 'The value to look at'],
          ['<code>case 3:</code>', 'A fixed value to compare with. Must be a constant like 3, \'A\' or "tea"'],
          ['<code>break;</code>', 'Leave the switch after this case'],
          ['<code>default:</code>', 'Optional. Runs when no case matched']
        ] },
        { type: 'p', en: 'The value inside <code>switch ( )</code> can be an <code>int</code>, a <code>char</code> or a <code>String</code>. It cannot be a <code>double</code> or a <code>boolean</code>. Here the value is a String:' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        String drink = "tea";
        switch (drink) {
            case "coffee":
                System.out.println("Strong");
                break;
            case "tea":
                System.out.println("Light");
                break;
            default:
                System.out.println("Unknown drink");
        }
    }
}
`, out: 'Light' },
        { type: 'check', q: 'Which type can <b>not</b> be used in <code>switch ( )</code>?', options: ['<code>int</code>', '<code>char</code>', '<code>String</code>', '<code>double</code>'], answer: 3, explain: 'switch works with int, char and String (and a few others) but not with double or boolean.' },
        { type: 'note', kind: 'warn', en: 'A case must be a fixed value. You cannot write ranges: <code>case score &gt;= 90:</code> is an error. For ranges use an else-if chain.', ar: 'لا يمكن استخدام مدى في case؛ استخدم else if للمدى.' },
        { type: 'note', kind: 'exam', en: 'Two case labels in the same switch cannot have the same value.' },
        { type: 'steps', title: 'Worked example: the weekday name', problem: 'Read a number from 1 to 3 and print Sunday, Monday or Tuesday. Print Invalid day for any other number.',
          steps: [
            { en: 'Read the number.', code: J`
int day = input.nextInt();
` },
            { en: 'Open the switch on <code>day</code>. Write one case for each name.', code: J`
switch (day) {
    case 1:
        System.out.println("Sunday");
        break;
` },
            { en: 'Add the other cases in the same way. Each one ends with break.', code: J`
    case 2:
        System.out.println("Monday");
        break;
    case 3:
        System.out.println("Tuesday");
        break;
` },
            { en: 'Add default for every other number, then close the switch.', code: J`
    default:
        System.out.println("Invalid day");
}
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int day = input.nextInt();
        switch (day) {
            case 1:
                System.out.println("Sunday");
                break;
            case 2:
                System.out.println("Monday");
                break;
            case 3:
                System.out.println("Tuesday");
                break;
            default:
                System.out.println("Invalid day");
        }
    }
}
`, stdin: '3', out: 'Tuesday', ar: 'كل case تنتهي بـ break، و default للقيم الأخرى.' }
      ],
      mistakes: [
        { title: 'A semicolon instead of a colon', en: 'A case label ends with a colon.', code: J`
case 1;    // wrong
case 1:    // right
` },
        { title: 'A range in a case', en: 'Cases must be fixed values.', code: J`
case x > 5:   // wrong
` },
        { title: 'Switching on a double', en: 'The value must be int, char or String.', code: J`
double price = 2.5;
switch (price) { ... }   // error
` },
        { title: 'Mixing types', en: 'A char case uses single quotes: <code>case \'A\':</code>. A String case uses double quotes: <code>case "A":</code>.' }
      ],
      remember: [
        '<code>switch (value)</code> jumps to the <code>case</code> with the same value.',
        'Each case label ends with a colon <code>:</code>.',
        '<code>break;</code> leaves the switch. <code>default:</code> runs when nothing matched.',
        'The value can be int, char or String, not double or boolean.',
        'Cases are fixed values, not ranges.'
      ],
      rememberAr: 'switch تقفز إلى case المطابقة. تنتهي case بنقطتين رأسيتين. break تخرج من switch و default عند عدم التطابق. القيمة int أو char أو String.',
      practice: [
        { t: 'mcq', q: 'Which keyword runs when no case matches?', options: ['<code>else</code>', '<code>default</code>', '<code>break</code>', '<code>other</code>'], answer: 1, explain: '<code>default</code> is the "everything else" case of a switch.' },
        { t: 'output', q: 'What is printed?', code: J`
int day = 2;
switch (day) {
    case 1:
        System.out.println("Sun");
        break;
    case 2:
        System.out.println("Mon");
        break;
    default:
        System.out.println("Other");
}
`, answer: 'Mon', explain: 'The value 2 matches case 2.' },
        { t: 'output', q: 'What is printed?', code: J`
String drink = "tea";
switch (drink) {
    case "coffee":
        System.out.println("Strong");
        break;
    case "tea":
        System.out.println("Light");
        break;
    default:
        System.out.println("?");
}
`, answer: 'Light', explain: 'The String "tea" matches the second case.' },
        { t: 'mcq', q: 'Which type can <b>not</b> be used as the value of a switch?', options: ['<code>int</code>', '<code>char</code>', '<code>String</code>', '<code>double</code>'], answer: 3, explain: 'double and boolean are not allowed.' },
        { t: 'mcq', q: 'Which case label is <b>not</b> allowed?', options: ['<code>case 1:</code>', '<code>case \'A\':</code>', '<code>case "Riyadh":</code>', '<code>case score &gt; 90:</code>'], answer: 3, explain: 'A case must be a fixed value, not a comparison.' },
        { t: 'fill', q: 'Complete the switch.', code: J`
int choice = input.nextInt();
switch (___) {
    case 1:
        System.out.println("One");
        ___;
    default:
        System.out.println("Other");
}
`, answers: ['choice', 'break'], explain: 'The switch looks at the variable <code>choice</code>. Each case ends with <code>break</code>.' },
        { t: 'order', q: 'Arrange the lines to print Friday for day 6 and Other for everything else.', lines: ['switch (day) {', '    case 6:', '        System.out.println("Friday");', '        break;', '    default:', '        System.out.println("Other");', '}'], explain: 'The case comes before default, and break ends the case.' },
        { t: 'code', q: 'Read a number. Print <code>Small</code> for 1, <code>Medium</code> for 2, <code>Large</code> for 3 and <code>Unknown</code> for any other number. Use a switch. Do not print any prompt.', qAr: 'اقرأ رقماً واطبع الحجم باستخدام switch.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int size = input.nextInt();
        // switch here
    }
}
`, tests: [{ stdin: '1', expected: 'Small' }, { stdin: '3', expected: 'Large' }, { stdin: '9', expected: 'Unknown' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int size = input.nextInt();
        switch (size) {
            case 1:
                System.out.println("Small");
                break;
            case 2:
                System.out.println("Medium");
                break;
            case 3:
                System.out.println("Large");
                break;
            default:
                System.out.println("Unknown");
        }
    }
}
`, hint: 'Three cases, each with a break, and a default.', explain: 'default catches every number that is not 1, 2 or 3.' }
      ]
    },
    {
      title: 'switch: fall-through and grouped cases',
      titleAr: 'switch: الانسياب وتجميع الحالات',
      minutes: 25,
      body: [
        { type: 'h', en: 'What happens without break?' },
        { type: 'p', en: 'In the last lesson every case ended with <code>break</code>. What if you forget it? Java does not stop. It keeps running the lines of the <b>next cases too</b>, until it finds a <code>break</code> or reaches the end of the switch. This is called <b>fall-through</b>.',
          ar: 'بدون break يستمر التنفيذ إلى الحالات التالية، وهذا هو fall-through.' },
        { type: 'analogy', title: 'Dominoes', en: 'When the first domino falls it knocks the next one, and the next. They stop only when something blocks the way. <code>break</code> is the blocker.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int day = 2;
        switch (day) {
            case 1:
                System.out.println("Sun");
            case 2:
                System.out.println("Mon");
            case 3:
                System.out.println("Tue");
                break;
            default:
                System.out.println("Other");
        }
    }
}
`, out: J`
Mon
Tue
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['case 2:', 'The value 2 matches here. Start running.'],
          ['System.out.println("Mon");', 'Prints Mon. There is no break after it!'],
          ['case 3:', 'Not tested again. Java just keeps falling down.'],
          ['System.out.println("Tue");', 'Prints Tue.'],
          ['break;', 'Finally the blocker. The switch ends.']
        ] },
        { type: 'check', q: 'With the code above, what is printed when <code>day</code> is 1?', options: ['Sun', 'Sun and Mon', 'Sun, Mon and Tue', 'Other'], answer: 2, explain: 'Case 1 falls into case 2, which falls into case 3, which has the break.' },
        { type: 'h', en: 'Using fall-through on purpose' },
        { type: 'p', en: 'Sometimes several values should do the same thing. Then you stack the case labels, one above the other, with no break between them. All of them share one block.',
          ar: 'نكدّس عدة case لتشترك في كتلة واحدة.' },
        { type: 'analogy', title: 'Two doors, one room', en: 'Grades A and B both open the room named "Great". Grades C and D open the room named "Pass". Stacked labels are several doors that lead to one room.' },
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
        { type: 'lines', rows: [
          ['case \'A\':', 'No code here, so Java falls to the next line.'],
          ['case \'B\':', 'grade is B: start here.'],
          ['System.out.println("Excellent or very good");', 'Shared by A and B.'],
          ['break;', 'Leave the switch.']
        ], ar: 'الحرف يوضع بين علامتي اقتباس مفردتين: \'B\'.' },
        { type: 'check', q: 'With <code>grade = \'C\'</code>, what is printed?', options: ['Excellent or very good', 'Passed', 'Failed', 'Invalid grade'], answer: 1, explain: 'C is stacked with D, and they share the "Passed" block.' },
        { type: 'note', kind: 'exam', en: 'Even <code>default</code> falls through if it is not the last label and has no break. Look for the break first when you trace a switch.' },
        { type: 'steps', title: 'Worked example: days in a month', problem: 'Read a month number (1 to 12) and print how many days it has (ignore leap years: February has 28). Print 0 for an invalid month.',
          steps: [
            { en: 'Read the month and make a box for the number of days.', code: J`
int month = input.nextInt();
int days;
` },
            { en: 'Months with 31 days: stack their numbers so they all share one line.', code: J`
switch (month) {
    case 1: case 3: case 5: case 7:
    case 8: case 10: case 12:
        days = 31;
        break;
` },
            { en: 'Months with 30 days and February.', code: J`
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = 28;
        break;
` },
            { en: 'Anything else is invalid. Then print.', code: J`
    default:
        days = 0;
}
System.out.println("Days: " + days);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int month = input.nextInt();
        int days;
        switch (month) {
            case 1: case 3: case 5: case 7:
            case 8: case 10: case 12:
                days = 31;
                break;
            case 4: case 6: case 9: case 11:
                days = 30;
                break;
            case 2:
                days = 28;
                break;
            default:
                days = 0;
        }
        System.out.println("Days: " + days);
    }
}
`, stdin: '4', out: 'Days: 30', ar: 'جمعنا الأشهر التي لها نفس عدد الأيام تحت كتلة واحدة.' }
      ],
      mistakes: [
        { title: 'Forgetting break by accident', en: 'Two messages print instead of one.', code: J`
case 1: System.out.println("A");   // no break: falls through!
case 2: System.out.println("B"); break;
` },
        { title: 'Putting break only in the last case', en: 'Every case that should stop needs its own break.' },
        { title: 'Duplicate labels', en: 'Writing <code>case 3:</code> twice is a compile error.' },
        { title: 'Wrong quotes', en: 'A char uses single quotes and a String uses double quotes. <code>case "A":</code> in a char switch is an error.' }
      ],
      remember: [
        'Without <code>break</code> Java falls through into the next case.',
        'Fall-through stops at a <code>break</code> or at the end of the switch.',
        'Stack case labels to share one block.',
        'When tracing a switch, find the matching case, then follow the lines until a break.'
      ],
      rememberAr: 'بدون break ينتقل التنفيذ إلى الحالة التالية. نكدّس الحالات لنشاركها كتلة واحدة. عند التتبع ابحث عن الحالة المطابقة ثم اتبع حتى break.',
      practice: [
        { t: 'mcq', q: 'What happens when a matching case has no <code>break</code>?', options: ['A compile error', 'The switch ends anyway', 'Execution continues into the next case', 'The default case runs first'], answer: 2, explain: 'This is fall-through.' },
        { t: 'output', q: 'What is printed?', code: J`
int code = 1;
switch (code) {
    case 1:
        System.out.println("One");
    case 2:
        System.out.println("Two");
        break;
    case 3:
        System.out.println("Three");
}
`, answer: J`
One
Two
`, explain: 'Case 1 has no break, so it falls into case 2, which prints Two and breaks.' },
        { t: 'output', q: 'What is printed? (Look at where <code>default</code> is.)', code: J`
int x = 4;
switch (x) {
    case 3:
        System.out.println("three");
    default:
        System.out.println("other");
    case 5:
        System.out.println("five");
}
`, answer: J`
other
five
`, explain: 'No case equals 4, so Java jumps to default. It has no break, so it falls into case 5 too.' },
        { t: 'output', q: 'What is printed?', code: J`
char g = 'D';
switch (g) {
    case 'A':
    case 'B':
        System.out.println("Great");
        break;
    case 'C':
    case 'D':
        System.out.println("Pass");
        break;
    default:
        System.out.println("Fail");
}
`, answer: 'Pass', explain: 'D shares the block with C.' },
        { t: 'mcq', q: 'Why do we stack <code>case 6: case 7:</code> without a break between them?', options: ['It is a mistake', 'So both values run the same code', 'To make the program faster', 'To skip the default'], answer: 1, explain: 'Stacked labels share one block of code.' },
        { t: 'fill', q: 'Friday (6) and Saturday (7) are the weekend. Complete the code.', code: J`
switch (day) {
    case 6:
    ___ 7:
        System.out.println("Weekend");
        ___;
    default:
        System.out.println("Weekday");
}
`, answers: ['case', 'break'], explain: 'Stack another case label, and end the shared block with break.' },
        { t: 'order', q: 'Arrange the lines so that 1 and 2 print Low, and 3 prints High.', lines: ['switch (level) {', '    case 1:', '    case 2:', '        System.out.println("Low");', '        break;', '    case 3:', '        System.out.println("High");', '}'], explain: 'Stack 1 and 2 above the shared line.' },
        { t: 'code', q: 'Days are numbered 1 (Sunday) to 7 (Saturday). Read a day number. Print <code>Weekend</code> for 6 and 7 (Friday and Saturday) and <code>Weekday</code> for every other number. Use a switch with stacked labels. Do not print any prompt.', qAr: 'اقرأ رقم اليوم واطبع Weekend ليومي الجمعة والسبت وإلا Weekday.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int day = input.nextInt();
        // switch with stacked labels
    }
}
`, tests: [{ stdin: '6', expected: 'Weekend' }, { stdin: '7', expected: 'Weekend' }, { stdin: '3', expected: 'Weekday' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int day = input.nextInt();
        switch (day) {
            case 6:
            case 7:
                System.out.println("Weekend");
                break;
            default:
                System.out.println("Weekday");
        }
    }
}
`, hint: 'Put <code>case 6:</code> and <code>case 7:</code> one above the other.', explain: 'Both days share one print line.' }
      ]
    },
    {
      title: 'The conditional operator ?:',
      titleAr: 'العامل الشرطي ?:',
      minutes: 25,
      body: [
        { type: 'h', en: 'A short way to choose a value' },
        { type: 'p', en: 'Many if-else statements only choose between two <b>values</b>. For example: the result is "Pass" or "Fail". Writing five lines for that is long. The <b>conditional operator</b> <code>? :</code> does it in one line. It is the only Java operator with three parts, so it is also called the <b>ternary</b> operator.',
          ar: 'العامل ?: يختار بين قيمتين في سطر واحد.' },
        { type: 'analogy', title: 'A price tag', en: 'A shop says: "If you are a student the price is 10, otherwise 15." The tag does not do an action. It just <b>gives a price</b>. The ? : operator gives a value in the same way.' },
        { type: 'code', code: J`
String result = (mark >= 60) ? "Pass" : "Fail";
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['(mark >= 60)', 'The question. Is the mark at least 60?'],
          ['?', 'Read it as "then".'],
          ['"Pass"', 'The value if the answer is yes.'],
          [':', 'Read it as "otherwise".'],
          ['"Fail"', 'The value if the answer is no.']
        ], ar: 'الشرط ? قيمة-إذا-صح : قيمة-إذا-خطأ' },
        { type: 'check', q: 'With <code>mark = 45</code>, what is the value of <code>(mark &gt;= 60) ? "Pass" : "Fail"</code>?', options: ['"Pass"', '"Fail"', 'true', 'false'], answer: 1, explain: '45 &gt;= 60 is false, so the value after the colon is chosen.' },
        { type: 'h', en: 'Using it in a program' },
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
        { type: 'lines', rows: [
          ['int max = (a > b) ? a : b;', '12 &gt; 9 is true, so max gets <code>a</code>, which is 12.'],
          ['System.out.println(score >= 60 ? "Pass" : "Fail");', 'The whole ?: can be placed inside println. 55 is below 60, so it prints Fail.'],
          ['String type = (n % 2 == 0) ? "even" : "odd";', '7 % 2 is 1, not 0, so type gets "odd".']
        ] },
        { type: 'analogy', title: 'A short note', en: 'An if-else is a full letter. The ? : operator is a short text message. Use it when the message is short and simple.' },
        { type: 'table', head: ['if-else', 'Same with ?:'], rows: [
          ['<code>if (a &gt; b) max = a; else max = b;</code>', '<code>max = (a &gt; b) ? a : b;</code>'],
          ['<code>if (n &lt; 0) sign = -1; else sign = 1;</code>', '<code>sign = (n &lt; 0) ? -1 : 1;</code>']
        ] },
        { type: 'check', q: 'Which statement stores the absolute value of <code>n</code> in <code>abs</code>?', options: ['<code>abs = (n &lt; 0) ? -n : n;</code>', '<code>abs = (n &lt; 0) : -n ? n;</code>', '<code>abs = if (n &lt; 0) -n else n;</code>'], answer: 0, explain: 'For a negative n we want -n, otherwise n. The question mark comes first, the colon second.' },
        { type: 'note', kind: 'tip', en: 'Use <code>?:</code> for a short choice between two values. For actions, or for more than two alternatives, an if statement is clearer.' },
        { type: 'steps', title: 'Worked example: the bigger of two numbers', problem: 'Read the prices of two items in riyals. Print the larger price and then the word cheap or expensive for it (expensive if it is above 100).',
          steps: [
            { en: 'Read two numbers.', code: J`
int a = input.nextInt();
int b = input.nextInt();
` },
            { en: 'Choose the larger value with ?:.', code: J`
int max = (a > b) ? a : b;
` },
            { en: 'Choose the word with another ?:.', code: J`
String word = (max > 100) ? "expensive" : "cheap";
` },
            { en: 'Print both.', code: J`
System.out.println(max + " is " + word);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        int max = (a > b) ? a : b;
        String word = (max > 100) ? "expensive" : "cheap";
        System.out.println(max + " is " + word);
    }
}
`, stdin: '40 120', out: '120 is expensive', ar: 'استخدمنا ?: مرتين لاختيار قيمتين.' }
      ],
      mistakes: [
        { title: 'Swapping ? and :', en: 'The question mark comes first, then the colon.', code: J`
x = (a > b) : a ? b;   // wrong
x = (a > b) ? a : b;   // right
` },
        { title: 'Mixing very different types', en: 'Both choices should be the same kind of value.', code: J`
int x = (a > b) ? 1 : "no";   // error
` },
        { title: 'Forgetting parentheses with +', en: 'In <code>"Max: " + a &gt; b ? a : b</code> the + goes first and the comparison becomes text &gt; number, an error. Write <code>"Max: " + ((a &gt; b) ? a : b)</code>.' },
        { title: 'Using it for actions', en: 'You cannot write <code>(a &gt; b) ? System.out.println("x") : System.out.println("y");</code> as a statement. Use if-else.' }
      ],
      remember: [
        'Form: <code>condition ? valueIfTrue : valueIfFalse</code>.',
        'It chooses a <b>value</b>, so you use it where a value is needed.',
        'It is shorter than if-else, but only for simple choices.',
        'Put parentheses around it when you mix it with <code>+</code>.'
      ],
      rememberAr: 'الصيغة: الشرط ? قيمة-صح : قيمة-خطأ. يختار قيمة وليس عملاً. ضع أقواساً عند خلطه مع +.',
      practice: [
        { t: 'mcq', q: 'How many parts (operands) does the operator <code>? :</code> have?', options: ['One', 'Two', 'Three', 'Four'], answer: 2, explain: 'A condition and two values: it is the ternary operator.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(5 > 3 ? "yes" : "no");
`, answer: 'yes', explain: '5 &gt; 3 is true, so the first value is chosen.' },
        { t: 'output', q: 'What is printed?', code: J`
int a = 4, b = 10;
int m = (a > b) ? a - b : b - a;
System.out.println(m);
System.out.println(a % 2 == 0 ? "even" : "odd");
`, answer: J`
6
even
`, explain: '4 &gt; 10 is false, so m = b - a = 6. 4 % 2 == 0 is true, so "even".' },
        { t: 'mcq', q: 'Which statement stores the absolute value of <code>n</code> in <code>abs</code>?', options: ['<code>abs = (n &lt; 0) ? -n : n;</code>', '<code>abs = (n &lt; 0) ? n : -n;</code>', '<code>abs = (n &gt; 0) ? -n : n;</code>', '<code>abs = n ? -n : n;</code>'], answer: 0, explain: 'If n is negative we take -n, otherwise n.' },
        { t: 'fill', q: 'Rewrite with the conditional operator: status is "Overdrawn" when the balance is negative, otherwise "OK".', code: J`
String status = (balance < 0) ___ "Overdrawn" ___ "OK";
`, answers: ['?', ':'], explain: 'Question mark first, then the colon.' },
        { t: 'order', q: 'Arrange the lines to print the larger of 12 and 9.', lines: ['int a = 12;', 'int b = 9;', 'int max = (a > b) ? a : b;', 'System.out.println(max);'], explain: 'Create a and b, choose the maximum, print it.' },
        { t: 'code', q: 'Read a mark. Print <code>Pass</code> if it is 60 or more, otherwise <code>Fail</code>. Use the conditional operator. Do not print any prompt.', qAr: 'اقرأ الدرجة واطبع Pass أو Fail باستخدام ?:.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();
        // use ?: here
    }
}
`, tests: [{ stdin: '60', expected: 'Pass' }, { stdin: '59', expected: 'Fail' }, { stdin: '100', expected: 'Pass' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();
        System.out.println(mark >= 60 ? "Pass" : "Fail");
    }
}
`, hint: 'Put the whole <code>?:</code> inside println.', explain: 'The conditional operator gives either "Pass" or "Fail", and println prints it.' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'What is the value of <code>8 &gt; 3</code>?', options: ['true', 'false', '8', 'An error'], answer: 0, explain: '8 is greater than 3, so the comparison is true.' },
    { t: 'mcq', q: 'Which operator asks "are these two values equal?"', options: ['<code>=</code>', '<code>==</code>', '<code>!=</code>', '<code>&amp;&amp;</code>'], answer: 1, explain: '<code>==</code> compares. A single <code>=</code> stores a value.' },
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
`, options: ['3', '4', '100', '101'], answer: 0, explain: 'x &gt; 5 is false, so <code>&amp;&amp;</code> short-circuits: <code>++x</code> never runs and the block is skipped.' },
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
`, answer: 'A', explain: 't &gt; 10 is already true, so A is printed and the rest of the chain is skipped.' },
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
`, answer: '30', explain: '15 &gt; 10 is true, so the value is p * 2 = 30.' },
    { t: 'mcq', q: 'Which expression is equivalent to <code>!(x &gt; 5 &amp;&amp; y &lt; 3)</code>?', options: ['<code>x &lt;= 5 || y &gt;= 3</code>', '<code>x &lt;= 5 &amp;&amp; y &gt;= 3</code>', '<code>x &lt; 5 || y &gt; 3</code>', '<code>!x &gt; 5 &amp;&amp; !y &lt; 3</code>'], answer: 0, explain: 'By De Morgan\'s law, not (A and B) equals (not A) or (not B). The opposite of <code>x &gt; 5</code> is <code>x &lt;= 5</code>, and of <code>y &lt; 3</code> is <code>y &gt;= 3</code>.' },
    { t: 'mcq', q: 'Which case label is <b>not</b> allowed in a switch statement?', options: ['<code>case 1:</code>', '<code>case \'A\':</code>', '<code>case "Riyadh":</code>', '<code>case score &gt; 90:</code>'], answer: 3, explain: 'Case labels must be fixed values. A comparison such as <code>score &gt; 90</code> is not.' }
  ],
  lab: {
    t: 'code',
    q: 'Mini project: <b>Days in a month</b>. Read a year and a month number (1 to 12) on one line, for example <code>2000 2</code>.<br>1. If the month is not between 1 and 12, print <code>Invalid month</code>.<br>2. Otherwise print <code>Days: N</code>, where N is the number of days in that month.<br>Use a <code>switch</code> on the month. February has 29 days in a leap year and 28 otherwise. A year is a leap year if it is divisible by 4 but not by 100, or if it is divisible by 400. Example: <code>2000 2</code> prints <code>Days: 29</code>. Do not print any prompt.',
    qAr: 'اقرأ السنة ورقم الشهر واطبع عدد أيام الشهر باستخدام switch، مع مراعاة السنة الكبيسة.',
    starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int year = input.nextInt();
        int month = input.nextInt();
        // step 1: boolean isLeap
        // step 2: switch on month
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
    hint: 'First compute a boolean <code>isLeap</code>. Stack the case labels of months with the same length. Use <code>?:</code> for February. Use default for invalid months.',
    explain: 'Stacked case labels share one block, the leap-year rule combines <code>&amp;&amp;</code> and <code>||</code>, and default catches invalid months.'
  },
  cheats: [
    { code: J`<  <=  >  >=  ==  !=`, note: 'Relational operators; the result is true or false' },
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
`, note: 'Many roads: the first true condition wins' },
    { code: J`
switch (day) {
    case 1: ...; break;
    case 2: ...; break;
    default: ...;
}
`, note: 'switch on char, int or String; remember break' },
    { code: J`max = (a > b) ? a : b;`, note: 'Conditional operator chooses a value' }
  ],
  glossary: [
    { term: 'Boolean expression', ar: 'تعبير منطقي', def: 'An expression whose value is true or false.' },
    { term: 'boolean', ar: 'النوع المنطقي', def: 'The type with the two values true and false.' },
    { term: 'Condition', ar: 'شرط', def: 'The true/false question inside the parentheses of an if.' },
    { term: 'Block', ar: 'كتلة', def: 'Lines of code grouped between { and }.' },
    { term: 'Relational operator', ar: 'عامل مقارنة', def: 'An operator such as &lt;, &gt;= or == that compares two values.' },
    { term: 'Logical operator', ar: 'عامل منطقي', def: 'An operator (!, &amp;&amp;, ||, ^) that combines true/false values.' },
    { term: 'Precedence', ar: 'أولوية العمليات', def: 'The rule that says which operator is done first.' },
    { term: 'Short-circuit evaluation', ar: 'التقييم المختصر', def: 'Skipping the right side of &amp;&amp; or || when the left side already decides the result.' },
    { term: 'Selection statement', ar: 'جملة اختيار', def: 'A statement that chooses which code to run based on a condition.' },
    { term: 'if statement', ar: 'جملة if', def: 'Runs a block only when its condition is true.' },
    { term: 'if-else statement', ar: 'جملة if-else', def: 'Runs one of two blocks depending on a condition.' },
    { term: 'Nested if', ar: 'if متداخلة', def: 'An if statement placed inside another if or else block.' },
    { term: 'Multi-way if-else', ar: 'if-else متعددة الفروع', def: 'A chain of else if clauses that picks the first true alternative.' },
    { term: 'Dangling else', ar: 'else المعلقة', def: 'The ambiguity of an else after nested ifs; Java matches it with the nearest unmatched if.' },
    { term: 'switch statement', ar: 'جملة switch', def: 'Selects a branch by matching a value against fixed case labels.' },
    { term: 'case label', ar: 'تسمية الحالة', def: 'A fixed value that a switch compares with, written case value:.' },
    { term: 'default', ar: 'الحالة الافتراضية', def: 'The part of a switch that runs when no case matches.' },
    { term: 'break', ar: 'كلمة الخروج', def: 'Leaves the switch (or a loop) immediately.' },
    { term: 'Fall-through', ar: 'الانسياب إلى الحالة التالية', def: 'Continuing into the next case of a switch because no break was reached.' },
    { term: 'Conditional operator', ar: 'العامل الشرطي', def: 'The ternary operator condition ? value1 : value2.' },
    { term: 'De Morgan\'s law', ar: 'قانون دي مورغان', def: 'not (A and B) equals (not A) or (not B); not (A or B) equals (not A) and (not B).' }
  ]
});
