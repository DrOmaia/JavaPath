JP.unit({
  course: 'cs101',
  n: 3,
  title: 'Selection Statements',
  titleAr: 'جمل الاختيار',
  intro: 'Until now your programs ran every line, one after the other. Real programs must decide: pass or fail, enough money or not, which day of the week. In this unit you will learn true/false values, how to compare numbers, how to combine questions, and every way Java chooses what to do: if, if-else, chains of choices, switch, and the short ?: choice. Then you will store decisions in boolean flags, compare text and decimals safely, test every path of a program, and build a small delivery fee project. We go slowly, one small idea at a time.',
  introAr: 'حتى الآن كانت برامجك تنفذ كل سطر بالترتيب. البرامج الحقيقية تحتاج إلى اتخاذ قرارات: نجاح أو رسوب، رصيد كافٍ أو لا. في هذه الوحدة ستتعلم قيم صح/خطأ، ومقارنة الأعداد، ودمج الأسئلة، وجمل if و if-else و switch والعامل ?:، ثم المتغيرات المنطقية، ومقارنة النصوص والأعداد العشرية، واختبار كل المسارات، ومشروعاً صغيراً، خطوة بخطوة.',
  lessons: [
    {
      title: 'True or false: boolean values',
      titleAr: 'صح أو خطأ: القيم المنطقية',
      minutes: 25,
      body: [
        { type: 'h', en: 'Yes/no questions in a program' },
        { type: 'p', en: 'Many questions in life have only two answers: "Did you pass?" Yes or no. "Is the library open?" Yes or no. A program needs a way to store such an answer. Java has a special type for it, called <code>boolean</code>.',
          ar: 'كثير من الأسئلة لها جوابان فقط: نعم أو لا. النوع boolean يخزن هذا الجواب.' },
        { type: 'p', en: 'Why start here? Every decision in this unit (<code>if</code>, <code>else</code>, <code>switch</code>) begins with a yes/no answer. Think of the questions a real program asks every second: Is the password correct? Is the shop open now? Is the bill more than 200 riyals? Is the temperature above 45? Each answer is one <code>boolean</code>. If you understand this small type well, the rest of the unit becomes easy.' },
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
        { type: 'p', en: 'You can print a boolean like any other variable. Java prints the word <code>true</code> or <code>false</code>. You can also join it to text with <code>+</code>, just like a number.' },
        { type: 'code', code: J`
boolean hasHomework = true;
System.out.println("Homework today: " + hasHomework);
` },
        { type: 'lines', rows: [
          ['boolean hasHomework = true;', 'A box that says: yes, there is homework.'],
          ['System.out.println("Homework today: " + hasHomework);', 'Joins the text and the value. It prints <code>Homework today: true</code>.']
        ] },
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
        { type: 'h', en: 'One comparison, many inputs' },
        { type: 'p', en: 'A program does not run only once. Every student types a different mark. So a good programmer asks: what does this comparison give for <b>each</b> possible value? Look at <code>mark &gt;= 60</code> for five different marks. Pay attention to 59 and 60. These two values sit right on the edge, and that is where mistakes hide.',
          ar: 'جرّب{{g:|ي}} المقارنة بعدة قيم، وانتبه{{g:|ي}} للقيمتين 59 و 60 لأنهما على الحد.' },
        { type: 'table', head: ['mark', '<code>mark &gt;= 60</code>', 'Why'], rows: [
          ['45', 'false', '45 is less than 60'],
          ['59', 'false', 'only one point short, but still less than 60'],
          ['60', 'true', 'equal to 60, and <code>&gt;=</code> includes "equal"'],
          ['75', 'true', 'greater than 60'],
          ['100', 'true', 'greater than 60']
        ] },
        { type: 'p', en: 'Both sides of a comparison can be calculations, and they can be decimals too. Java first works out the arithmetic, then it compares the two results.' },
        { type: 'code', code: J`
int price = 35;
boolean twoFit = price * 2 <= 60;
double temp = 38.5;
boolean fever = temp >= 38.0;
` },
        { type: 'lines', rows: [
          ['boolean twoFit = price * 2 <= 60;', 'First 35 * 2 = 70. Then: is 70 at most 60? No, so <code>twoFit</code> is <code>false</code>. Two items do not fit in a 60-riyal budget.'],
          ['boolean fever = temp >= 38.0;', 'Is 38.5 at least 38.0? Yes, so <code>fever</code> is <code>true</code>.']
        ] },
        { type: 'memory', title: 'A boolean keeps the answer; it does not watch the variable', en: 'A boolean box stores the answer <b>at the moment</b> the comparison runs. If the mark changes later, the boolean does <b>not</b> change by itself. Press Next to see it.',
          code: J`
int mark = 75;
boolean passed = mark >= 60;
mark = 50;
`,
          frames: [
            { label: 'After <code>int mark = 75;</code>', vars: [{ name: 'mark', type: 'int', value: '75' }] },
            { label: 'After <code>boolean passed = mark &gt;= 60;</code> (75 &gt;= 60 is true)', vars: [{ name: 'mark', type: 'int', value: '75' }, { name: 'passed', type: 'boolean', value: 'true' }] },
            { label: 'After <code>mark = 50;</code> (passed is still true!)', vars: [{ name: 'mark', type: 'int', value: '50' }, { name: 'passed', type: 'boolean', value: 'true' }] }
          ],
          ar: 'المتغير passed يحفظ الجواب وقت المقارنة فقط، ولا يتغير وحده عندما تتغير mark.' },
        { type: 'note', kind: 'warn', en: 'To get a fresh answer after the mark changes, compare again: <code>passed = mark &gt;= 60;</code>. A boolean is a photo of the answer, not a live camera.' },
        { type: 'check', q: 'After the three lines in the memory picture, what is in <code>passed</code>?', options: ['true', 'false', 'It is empty', 'An error'], answer: 0, explain: 'The comparison ran when mark was 75, so passed got true. Changing mark to 50 later does not touch passed.' },
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
        { type: 'p', en: 'The opposite question is <code>!=</code>, read as "is not equal to". Think of a bank card: the machine checks if the PIN you typed is <b>different</b> from the real PIN. If it is different, the machine refuses.' },
        { type: 'code', code: J`
int pin = 4821;
int typed = 4812;
boolean wrongPin = typed != pin;
` },
        { type: 'lines', rows: [
          ['boolean wrongPin = typed != pin;', 'Is 4812 different from 4821? Yes (two digits are swapped), so <code>wrongPin</code> is <code>true</code>.']
        ], ar: 'العلامة != تعني: هل القيمتان مختلفتان؟' },
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
`, stdin: '20 15', out: 'true', ar: 'قارنّا المال بالسعر باستخدام >= فحصلنا على قيمة منطقية.' },
        { type: 'steps', title: 'Worked example: pairs for a project', problem: 'A teacher puts students into pairs for a project. Read the number of students. Print whether everyone can be in a pair (the number is even), and whether the class needs a second lab room (more than 30 students).',
          steps: [
            { en: 'Read one whole number: how many students.', code: J`
Scanner input = new Scanner(System.in);
int students = input.nextInt();
` },
            { en: 'Everyone has a partner when the number is even. Remember <code>%</code> from Unit 2: it gives the remainder. An even number leaves remainder 0 when divided by 2.', code: J`
boolean allInPairs = students % 2 == 0;
` },
            { en: 'A second room is needed when there are more than 30 students. "More than" is <code>&gt;</code>, so exactly 30 still fits in one room.', code: J`
boolean needSecondRoom = students > 30;
` },
            { en: 'Print each answer with a short label so the user knows what it means.', code: J`
System.out.println("All in pairs: " + allInPairs);
System.out.println("Second room: " + needSecondRoom);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int students = input.nextInt();
        boolean allInPairs = students % 2 == 0;
        boolean needSecondRoom = students > 30;
        System.out.println("All in pairs: " + allInPairs);
        System.out.println("Second room: " + needSecondRoom);
    }
}
`, stdin: '33', out: J`
All in pairs: false
Second room: true
`, ar: '33 عدد فردي فلا يكتمل الأزواج، وهو أكبر من 30 فنحتاج قاعة ثانية.' }
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
        { title: 'Capital letters', en: '<code>True</code> and <code>FALSE</code> do not work. Java is case sensitive: write <code>true</code> and <code>false</code>.', code: J`
boolean open = True;   // wrong: Java looks for a variable named True
boolean open = true;   // right
` }
      ],
      remember: [
        'A <code>boolean</code> holds only <code>true</code> or <code>false</code>.',
        'A comparison (<code>&gt; &lt; &gt;= &lt;= == !=</code>) always gives true or false.',
        '<code>=</code> stores a value. <code>==</code> asks if two values are equal. <code>!=</code> asks if they are different.',
        'The "or equal" sign comes second: <code>&gt;=</code>, <code>&lt;=</code>.',
        'A boolean keeps the answer from the moment it was computed. It does not update by itself.',
        'Always test the edge values, such as 59 and 60 for <code>mark &gt;= 60</code>.'
      ],
      rememberAr: 'boolean يحمل true أو false فقط. المقارنات تعطي دائماً true أو false. العلامة = للتخزين و == للسؤال. المتغير المنطقي لا يتغير وحده. جرّب القيم على الحد مثل 59 و 60.',
      practice: [
        { t: 'mcq', q: 'Which values can a <code>boolean</code> variable hold?', options: ['Any whole number', 'Only <code>true</code> and <code>false</code>', 'Any text', 'Only 0 and 1'], answer: 1, explain: 'A boolean is a two-value type: true or false.', qAr: 'ما القيم التي يحملها boolean؟' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(5 > 2);
        System.out.println(5 < 2);
    }
}
`, answer: J`
true
false
`, explain: '5 is greater than 2 (true) and 5 is not less than 2 (false).' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 4;
        System.out.println(a - b == 6);
        System.out.println(a != 10);
        System.out.println(a >= b * 2);
    }
}
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
`, hint: 'Print the comparison directly: <code>System.out.println(mark &gt;= passMark);</code>', explain: 'A comparison is an expression with a boolean value, so println can print it.' },
        { t: 'output', q: 'Trace the boxes carefully. What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int mark = 55;
        boolean passed = mark >= 60;
        mark = mark + 10;
        System.out.println(mark);
        System.out.println(passed);
        System.out.println(mark >= 60);
    }
}
`, answer: J`
65
false
true
`, explain: 'passed was computed when mark was 55, so it holds false. Adding 10 makes mark 65, but passed does not change by itself. The last line compares again with the new mark: 65 &gt;= 60 is true.', explainAr: 'passed حُسب عندما كانت الدرجة 55، ولم يتغير بعد ذلك.' },
        { t: 'bug', q: 'This program should print <code>false</code> because the typed PIN is wrong. It does not compile. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int pin = 1234;
        int typed = 1243;
        boolean correct = typed = pin;
        System.out.println(correct);
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        int pin = 1234;
        int typed = 1243;
        boolean correct = typed == pin;
        System.out.println(correct);
    }
}
`, hint: 'Is this line asking a question or giving an order?', explain: '<code>typed = pin</code> is an assignment: it puts 1234 into typed and gives an int. An int cannot go into a boolean box, so the compiler says "incompatible types: int cannot be converted to boolean". The question "are they equal?" needs two equals signs: <code>typed == pin</code>. Then the program prints false.', explainAr: 'للسؤال عن التساوي نكتب == وليس =.' },
        { t: 'code', q: 'Read two whole numbers: your money and the price of a phone case, in riyals. Print two lines: first <code>true</code>/<code>false</code> for "I can buy it" (money is at least the price), then <code>true</code>/<code>false</code> for "I have the exact money" (money equals the price). Do not print any prompt.', qAr: 'اقرأ المال والسعر، واطبع سطرين: هل يمكن الشراء؟ وهل المال يساوي السعر تماماً؟',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int money = input.nextInt();
        int price = input.nextInt();
        // print two comparisons
    }
}
`, tests: [{ stdin: '50 30', expected: 'true\nfalse' }, { stdin: '30 30', expected: 'true\ntrue' }, { stdin: '20 30', expected: 'false\nfalse' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int money = input.nextInt();
        int price = input.nextInt();
        boolean canBuy = money >= price;
        boolean exact = money == price;
        System.out.println(canBuy);
        System.out.println(exact);
    }
}
`, hint: '"At least" is <code>&gt;=</code>. "Exactly equal" is <code>==</code>.', explain: 'Each comparison gives one boolean. With 30 and 30 both are true, because 30 &gt;= 30 and 30 == 30.' }
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
        { type: 'p', en: 'You meet combined questions every day. A website lets you in when the username is right <b>and</b> the password is right. A shop gives a discount to students <b>or</b> to people over 60. A trip is cancelled when the weather is <b>not</b> safe. There are three logical operators: AND, OR and NOT. We learn them one at a time.' },
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
        { type: 'p', en: 'Each side of <code>&amp;&amp;</code> can also be a comparison. Java answers each small question first, then joins the two answers.' },
        { type: 'code', code: J`
int age = 20;
boolean hasTicket = true;
boolean canEnter = age >= 18 && hasTicket;
` },
        { type: 'lines', rows: [
          ['age >= 18', 'First small question: is 20 at least 18? <code>true</code>.'],
          ['hasTicket', 'Second small question: the box holds <code>true</code>.'],
          ['boolean canEnter = age >= 18 && hasTicket;', 'true AND true is <code>true</code>. The person may enter.']
        ], ar: 'كل طرف من && يُحسب أولاً، ثم يُجمع الجوابان.' },
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
        { type: 'p', en: 'A common use of OR: one value can match one of several numbers. Days are numbered 1 (Sunday) to 7 (Saturday). The weekend is Friday (6) or Saturday (7).' },
        { type: 'code', code: J`
int day = 7;
boolean isWeekend = day == 6 || day == 7;
` },
        { type: 'lines', rows: [
          ['day == 6', 'Is 7 equal to 6? <code>false</code>.'],
          ['day == 7', 'Is 7 equal to 7? <code>true</code>.'],
          ['boolean isWeekend = day == 6 || day == 7;', 'false OR true is <code>true</code>. It is the weekend.']
        ], ar: 'نكتب day == 6 || day == 7، ولا يصح أن نكتب day == 6 || 7.' },
        { type: 'memory', title: 'Building a discount answer step by step', en: 'A museum gives a discount to children under 18 <b>or</b> to students. Watch the boxes fill up one line at a time.',
          code: J`
int age = 20;
boolean isStudent = true;
boolean discount = age < 18 || isStudent;
`,
          frames: [
            { label: 'After <code>int age = 20;</code>', vars: [{ name: 'age', type: 'int', value: '20' }] },
            { label: 'After <code>boolean isStudent = true;</code>', vars: [{ name: 'age', type: 'int', value: '20' }, { name: 'isStudent', type: 'boolean', value: 'true' }] },
            { label: 'After <code>boolean discount = age &lt; 18 || isStudent;</code> (false OR true)', vars: [{ name: 'age', type: 'int', value: '20' }, { name: 'isStudent', type: 'boolean', value: 'true' }, { name: 'discount', type: 'boolean', value: 'true' }] }
          ],
          ar: 'العمر 20 ليس أقل من 18، لكنه طالب، فيكفي أحد الشرطين مع ||.' },
        { type: 'h', en: 'NOT: flip the answer' },
        { type: 'analogy', title: 'Opposite day', en: 'NOT turns yes into no and no into yes. Written <code>!</code> (an exclamation mark). It goes in front of the value.', ar: 'علامة ! تعكس القيمة.' },
        { type: 'table', head: ['A', '!A'], rows: [['true', 'false'], ['false', 'true']] },
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
        { type: 'h', en: 'Say it in English first' },
        { type: 'p', en: 'Choosing between AND and OR is the hard part, not the typing. A good habit: say the rule as a sentence first. Listen for the words. "Both", "and also", "all of" mean AND. "Either", "at least one", "any of" mean OR. "Not", "no" mean NOT.',
          ar: 'قل{{g:|ي}} القاعدة بجملة أولاً: "كلاهما" تعني &&، و"أحدهما" تعني ||.' },
        { type: 'table', head: ['Rule in English', 'Java condition'], rows: [
          ['Free entry for children under 6 <b>or</b> people 65 and older', '<code>age &lt; 6 || age &gt;= 65</code>'],
          ['A prize needs a mark of 90 or more <b>and</b> no absences', '<code>mark &gt;= 90 &amp;&amp; absences == 0</code>'],
          ['Cancel the trip when it is <b>not</b> safe', '<code>!isSafe</code>'],
          ['A login works when the PIN is right <b>and</b> the card is not blocked', '<code>pinOk &amp;&amp; !blocked</code>']
        ] },
        { type: 'check', q: 'Rule: "You may park here if you are a resident or you have a visitor card." Which condition is right?', options: ['<code>isResident &amp;&amp; hasCard</code>', '<code>isResident || hasCard</code>', '<code>!isResident || hasCard</code>', '<code>!(isResident || hasCard)</code>'], answer: 1, explain: 'Either reason is enough, so OR. With AND you would need to be a resident <b>and</b> have a card.' },
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
`, ar: 'قسّمنا المسألة إلى أسئلة صغيرة ثم دمجناها.' },
        { type: 'p', en: 'Let us trace the same program for four different students. Read each row from left to right: first the two small answers, then the three printed lines.' },
        { type: 'table', head: ['math', 'java', 'passMath', 'passJava', '&amp;&amp; (both)', '|| (at least one)', '!passMath'], rows: [
          ['70', '50', 'true', 'false', 'false', 'true', 'false'],
          ['80', '90', 'true', 'true', 'true', 'true', 'false'],
          ['55', '65', 'false', 'true', 'false', 'true', 'true'],
          ['40', '30', 'false', 'false', 'false', 'false', 'true']
        ] },
        { type: 'steps', title: 'Worked example: a desert trip', problem: 'A group plans a trip to the desert. They go only on the weekend (day 6 or 7) and only when the temperature is below 35. Read the day number and the temperature. Print three labelled lines: weekend, nice weather, and go.',
          steps: [
            { en: 'Read two whole numbers: the day (1 to 7) and the temperature.', code: J`
int day = input.nextInt();
int temp = input.nextInt();
` },
            { en: 'Weekend means day 6 <b>or</b> day 7. Each side is a full comparison.', code: J`
boolean isWeekend = day == 6 || day == 7;
` },
            { en: 'Nice weather is one simple comparison.', code: J`
boolean niceWeather = temp < 35;
` },
            { en: 'They go when <b>both</b> are true, so AND joins the two boxes.', code: J`
boolean go = isWeekend && niceWeather;
` },
            { en: 'Print the three answers with labels.', code: J`
System.out.println("Weekend: " + isWeekend);
System.out.println("Nice weather: " + niceWeather);
System.out.println("Go: " + go);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int day = input.nextInt();
        int temp = input.nextInt();
        boolean isWeekend = day == 6 || day == 7;
        boolean niceWeather = temp < 35;
        boolean go = isWeekend && niceWeather;
        System.out.println("Weekend: " + isWeekend);
        System.out.println("Nice weather: " + niceWeather);
        System.out.println("Go: " + go);
    }
}
`, stdin: '7 40', out: J`
Weekend: true
Nice weather: false
Go: false
`, ar: 'اليوم 7 عطلة، لكن الحرارة 40 ليست أقل من 35، فلا رحلة لأن && تحتاج الشرطين.' }
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
        'Each side of <code>&amp;&amp;</code> or <code>||</code> must be a complete true/false question: <code>day == 6 || day == 7</code>.',
        'Say the rule in English first: "both" is AND, "either" is OR.'
      ],
      rememberAr: '&& يحتاج الطرفين صحيحين، و || يكفي أحدهما، و ! يعكس القيمة. كل طرف يجب أن يكون سؤالاً كاملاً. قل القاعدة بالكلمات أولاً.',
      practice: [
        { t: 'mcq', q: 'What is <code>true &amp;&amp; false</code>?', options: ['true', 'false'], answer: 1, explain: 'AND needs both sides true.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(true || false);
        System.out.println(!true);
    }
}
`, answer: J`
true
false
`, explain: 'OR needs only one true side. NOT true is false.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int age = 16;
        boolean hasPermit = true;
        System.out.println(age >= 18 || hasPermit);
        System.out.println(age >= 18 && hasPermit);
        System.out.println(!(age >= 18));
    }
}
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
`, hint: 'Mild means: NOT hot AND NOT cold.', explain: 'Mild is true only when both hot and cold are false.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        boolean raining = false;
        boolean cold = true;
        System.out.println(!raining && cold);
        System.out.println(raining || !cold);
        System.out.println(!(raining || cold));
    }
}
`, answer: J`
true
false
false
`, explain: 'Line 1: !false is true, and true AND true is true. Line 2: false OR !true is false OR false, which is false. Line 3: inside the parentheses false OR true is true, then NOT true is false.', explainAr: 'احسب{{g:|ي}} ما بين الأقواس أولاً، ثم طبّق{{g:|ي}} !.' },
        { t: 'bug', q: 'Children under 12 and seniors over 60 get a discount. This program does not compile. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int age = 65;
        boolean discount = age < 12 || > 60;
        System.out.println(discount);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int age = 65;
        boolean discount = age < 12 || age > 60;
        System.out.println(discount);
    }
}
`, hint: 'Look at the right side of <code>||</code>. Is it a full question?', explain: 'The right side <code>&gt; 60</code> has nothing on its left, so the compiler stops with "illegal start of expression". Each side of <code>||</code> must be a complete comparison: <code>age &gt; 60</code>. After the fix the program prints true.', explainAr: 'كل طرف من || يجب أن يكون مقارنة كاملة: age > 60.' },
        { t: 'bug', q: 'Rule: entry is free for children under 6 <b>or</b> people 65 and older. The program runs, but it prints <code>false</code> for a 70-year-old. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int age = 70;
        boolean free = age < 6 && age >= 65;
        System.out.println("Free entry: " + free);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int age = 70;
        boolean free = age < 6 || age >= 65;
        System.out.println("Free entry: " + free);
    }
}
`, hint: 'Can one person be under 6 and also 65 or older?', explain: 'With AND both sides must be true, but nobody is under 6 <b>and</b> 65+ at the same time, so <code>free</code> is always false. The rule says "or": one reason is enough. With <code>||</code> the program prints <code>Free entry: true</code> for age 70.', explainAr: 'لا يمكن أن يكون الشخص أصغر من 6 وأكبر من 65 معاً، فالصحيح ||.' }
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
        { type: 'p', en: 'Let us trace <code>hour &gt;= 6 &amp;&amp; hour &lt;= 22</code> for five hours. The range is only true when <b>both</b> fences say yes. Look closely at 6 and 22: they are inside, because we used <code>&gt;=</code> and <code>&lt;=</code>.' },
        { type: 'table', head: ['hour', '<code>hour &gt;= 6</code>', '<code>hour &lt;= 22</code>', 'open'], rows: [
          ['5', 'false', 'true', 'false'],
          ['6', 'true', 'true', 'true'],
          ['14', 'true', 'true', 'true'],
          ['22', 'true', 'true', 'true'],
          ['23', 'true', 'false', 'false']
        ] },
        { type: 'h', en: 'Outside a range: use OR' },
        { type: 'p', en: 'Sometimes you want the opposite: a value <b>outside</b> the safe range. A weather app gives a warning when the temperature is below 0 <b>or</b> above 45. A value cannot be below 0 and above 45 at the same time, so outside a range always uses OR.',
          ar: 'داخل المدى نستخدم &&، وخارج المدى نستخدم ||.' },
        { type: 'code', code: J`
int temp = 47;
boolean warning = temp < 0 || temp > 45;
` },
        { type: 'lines', rows: [
          ['temp < 0', 'Is 47 below 0? <code>false</code>.'],
          ['temp > 45', 'Is 47 above 45? <code>true</code>.'],
          ['boolean warning = temp < 0 || temp > 45;', 'false OR true: <code>warning</code> is <code>true</code>.']
        ] },
        { type: 'check', q: 'Which condition is true when <code>mark</code> is <b>not</b> a valid mark from 0 to 100?', options: ['<code>mark &lt; 0 &amp;&amp; mark &gt; 100</code>', '<code>mark &lt; 0 || mark &gt; 100</code>', '<code>mark &gt;= 0 &amp;&amp; mark &lt;= 100</code>', '<code>mark &lt;= 0 || mark &gt;= 100</code>'], answer: 1, explain: 'Outside the range means below 0 or above 100. AND can never be true here. The last option wrongly rejects 0 and 100, which are valid.' },
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
        { type: 'table', head: ['Order', 'Operators', 'Example'], rows: [
          ['1 (first)', '<code>!</code> and parentheses', '<code>!done</code>'],
          ['2', '<code>* / %</code>', '<code>price * 2</code>'],
          ['3', '<code>+ -</code>', '<code>total - 20</code>'],
          ['4', '<code>&lt; &lt;= &gt; &gt;=</code>', '<code>age &gt;= 18</code>'],
          ['5', '<code>== !=</code>', '<code>day == 6</code>'],
          ['6', '<code>&amp;&amp;</code>', '<code>a &amp;&amp; b</code>'],
          ['7 (last)', '<code>||</code>', '<code>a || b</code>']
        ] },
        { type: 'p', en: 'Here is the same rule with real names. A VIP guest may always enter. Other guests need to be 18 or older <b>and</b> have a ticket. Because AND goes first, Java reads the line as <code>(age &gt;= 18 &amp;&amp; hasTicket) || isVip</code>. That is exactly what we want, but writing the parentheses yourself makes it clear for every reader.' },
        { type: 'code', code: J`
boolean enter = (age >= 18 && hasTicket) || isVip;
` },
        { type: 'note', kind: 'tip', en: 'You do not need to remember the whole table on day one. Remember two things: AND before OR, and when in doubt, add parentheses.', ar: 'تذكّر{{g:|ي}}: && قبل ||، وعند الشك أضف{{g:|ي}} أقواساً.' },
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
        { type: 'memory', title: 'When does ++n really run?', en: 'Two lines with <code>++n</code> on the right side of <code>&amp;&amp;</code>. In the first line the right side is skipped. In the second line it runs. Watch <code>n</code>.',
          code: J`
int n = 10;
boolean a = n < 5 && ++n > 0;
boolean b = n > 5 && ++n > 0;
`,
          frames: [
            { label: 'After <code>int n = 10;</code>', vars: [{ name: 'n', type: 'int', value: '10' }] },
            { label: 'After line 2: <code>n &lt; 5</code> is false, so <code>++n</code> is skipped. n stays 10.', vars: [{ name: 'n', type: 'int', value: '10' }, { name: 'a', type: 'boolean', value: 'false' }] },
            { label: 'After line 3: <code>n &gt; 5</code> is true, so Java must check the right side. <code>++n</code> runs: n becomes 11, and 11 &gt; 0 is true.', vars: [{ name: 'n', type: 'int', value: '11' }, { name: 'a', type: 'boolean', value: 'false' }, { name: 'b', type: 'boolean', value: 'true' }] }
          ],
          ar: 'الطرف الأيمن من && يُنفّذ فقط إذا كان الطرف الأيسر صحيحاً.' },
        { type: 'p', en: 'OR short-circuits too, but the other way round. If the left side of <code>||</code> is <b>true</b>, the whole answer is already true, so Java skips the right side. In <code>isMember || total &gt;= 200</code>, a member gets free shipping and Java does not even look at the total.' },
        { type: 'table', head: ['Operator', 'Left side', 'Right side'], rows: [
          ['<code>&amp;&amp;</code>', 'false', 'skipped (answer is false)'],
          ['<code>&amp;&amp;</code>', 'true', 'checked'],
          ['<code>||</code>', 'true', 'skipped (answer is true)'],
          ['<code>||</code>', 'false', 'checked']
        ] },
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
`, ar: 'فحصنا people != 0 أولاً لنتجنب القسمة على صفر.' },
        { type: 'steps', title: 'Worked example: who gets the discount?', problem: 'A bookshop gives a discount to young adults aged 18 to 25 (both included) and to seniors aged 60 or more. Read the age and print <code>Discount: true</code> or <code>Discount: false</code>.',
          steps: [
            { en: 'Read the age.', code: J`
int age = input.nextInt();
` },
            { en: 'Young adult: a range, so two questions joined by AND.', code: J`
boolean young = age >= 18 && age <= 25;
` },
            { en: 'Senior: one simple question.', code: J`
boolean senior = age >= 60;
` },
            { en: 'Either group is enough, so join with OR. Writing it in one line needs parentheses to be clear: <code>(age &gt;= 18 &amp;&amp; age &lt;= 25) || age &gt;= 60</code>. Two named boxes are even easier to read.', code: J`
boolean discount = young || senior;
` },
            { en: 'Print the answer.', code: J`
System.out.println("Discount: " + discount);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        boolean young = age >= 18 && age <= 25;
        boolean senior = age >= 60;
        boolean discount = young || senior;
        System.out.println("Discount: " + discount);
    }
}
`, stdin: '22', out: 'Discount: true', ar: 'المدى يحتاج &&، والجمع بين الفئتين يحتاج ||.' }
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
        'Outside a range uses OR: <code>x &lt; low || x &gt; high</code>.',
        'Order: <code>!</code>, arithmetic, comparisons, <code>&amp;&amp;</code>, then <code>||</code>. Parentheses win.',
        'Java stops as soon as the answer is known (short-circuit).',
        'Put the safe check on the left of <code>&amp;&amp;</code>.',
        '<code>^</code> is true when exactly one side is true.'
      ],
      rememberAr: 'المدى يحتاج سؤالين مع &&. الأولوية: ! ثم المقارنات ثم && ثم ||. يتوقف جافا عند معرفة الجواب، فضع الفحص الآمن على اليسار.',
      practice: [
        { t: 'mcq', q: 'Which condition tests that <code>x</code> is between 1 and 10, including both ends?', options: ['<code>x &gt;= 1 &amp;&amp; x &lt;= 10</code>', '<code>x &gt;= 1 || x &lt;= 10</code>', '<code>1 &lt;= x &lt;= 10</code>', '<code>x &gt; 1 &amp;&amp; x &lt; 10</code>'], answer: 0, explain: 'Both limits must hold, with inclusive signs.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(5 >= 1 && 5 <= 10);
        System.out.println(11 >= 1 && 11 <= 10);
    }
}
`, answer: J`
true
false
`, explain: '5 is inside the range. 11 passes the first test but fails the second.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(true || false && false);
        System.out.println((true || false) && false);
    }
}
`, answer: J`
true
false
`, explain: 'AND goes before OR in the first line. Parentheses change the order in the second line.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 10;
        boolean ok = n < 5 && ++n > 0;
        System.out.println(ok);
        System.out.println(n);
    }
}
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
`, hint: 'Two questions joined by AND, with inclusive signs.', explain: 'Both ends are included, so use &gt;= and &lt;=.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int temp = 45;
        System.out.println(temp < 0 || temp > 40);
        System.out.println(temp >= 0 && temp <= 40);
    }
}
`, answer: J`
true
false
`, explain: '45 is above 40, so it is outside the range 0 to 40: the OR line is true. The AND line asks "inside the range?", and 45 &lt;= 40 is false.' },
        { t: 'bug', q: 'The program should print <code>true</code> when the mark is a D (60 to 69). It does not compile. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int mark = 65;
        boolean gradeD = 60 <= mark <= 69;
        System.out.println(gradeD);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int mark = 65;
        boolean gradeD = mark >= 60 && mark <= 69;
        System.out.println(gradeD);
    }
}
`, hint: 'Java cannot read the maths way of writing a range.', explain: 'Java does <code>60 &lt;= mark</code> first and gets <code>true</code>. Then it tries <code>true &lt;= 69</code>, which makes no sense: "bad operand types for binary operator". A range needs two full questions joined by AND: <code>mark &gt;= 60 &amp;&amp; mark &lt;= 69</code>. Then it prints true.', explainAr: 'المدى يُكتب بسؤالين مع &&، ولا يصح 60 &lt;= mark &lt;= 69.' },
        { t: 'bug', q: 'Friends share a restaurant bill. The program crashes with "/ by zero" when nobody came. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int people = 0;
        int bill = 240;
        boolean high = bill / people > 50 && people != 0;
        System.out.println("High: " + high);
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        int people = 0;
        int bill = 240;
        boolean high = people != 0 && bill / people > 50;
        System.out.println("High: " + high);
    }
}
`, hint: 'Java reads <code>&amp;&amp;</code> from left to right. Which check should come first?', explain: 'The division is on the left, so Java does <code>240 / 0</code> before it ever checks <code>people != 0</code>, and the program crashes with ArithmeticException. Put the safety check on the left: when people is 0 the left side is false and Java skips the division. The fixed program prints <code>High: false</code>.', explainAr: 'ضع{{g:|ي}} فحص الأمان people != 0 على يسار &&.' },
        { t: 'code', q: 'A restaurant has a lunch deal from hour 12 to hour 15 (both included) on every day, and all day long on Friday (day 6). Read the day number and the hour. Print <code>true</code> if the deal is available, otherwise <code>false</code>. Do not print any prompt.', qAr: 'العرض من الساعة 12 إلى 15 كل يوم، وطوال يوم الجمعة (6). اطبع true إذا كان العرض متاحاً.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int day = input.nextInt();
        int hour = input.nextInt();
        // print the answer
    }
}
`, tests: [{ stdin: '3 13', expected: 'true' }, { stdin: '3 16', expected: 'false' }, { stdin: '6 20', expected: 'true' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int day = input.nextInt();
        int hour = input.nextInt();
        boolean lunchTime = hour >= 12 && hour <= 15;
        boolean friday = day == 6;
        System.out.println(lunchTime || friday);
    }
}
`, hint: 'Lunch time is a range (AND). Then join it with <code>day == 6</code> using OR.', explain: 'The range 12 to 15 needs AND. Friday is a second reason, and either reason is enough, so OR joins them: <code>(hour &gt;= 12 &amp;&amp; hour &lt;= 15) || day == 6</code>.' }
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
        { type: 'p', en: 'Think of how Java walks through your program. Normally it goes down the lines one by one, like reading a page. At an <code>if</code> the road splits for a moment. When the condition is true, Java walks through the block. When it is false, Java jumps over the block. After the closing brace both roads join again and Java continues with the next line.',
          ar: 'عند if ينقسم الطريق: إما ندخل الكتلة أو نقفز فوقها، ثم يلتقي الطريقان بعد القوس }.' },
        { type: 'analogy', title: 'A side room in a corridor', en: 'You walk along a corridor. There is a side room with a sign: "Enter only if you have an appointment." If you have one, you go in, do your business and come back to the corridor. If not, you walk past. Either way you end up at the same place at the end of the corridor.' },
        { type: 'p', en: 'The condition can also be a boolean variable. Because the variable already holds true or false, you just write its name inside the parentheses.' },
        { type: 'code', code: J`
boolean isRaining = true;
if (isRaining) {
    System.out.println("Take an umbrella");
}
` },
        { type: 'lines', rows: [
          ['boolean isRaining = true;', 'The box holds <code>true</code>.'],
          ['if (isRaining) {', 'The condition is the value in the box: true. Enter the block.'],
          ['    System.out.println("Take an umbrella");', 'This line runs.']
        ] },
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
        { type: 'p', en: 'Here is the same program traced for four different inputs. Notice 60 and 59: one point decides which road Java takes.' },
        { type: 'table', head: ['Input', '<code>grade &gt;= 60</code>', 'Block runs?', 'Output'], rows: [
          ['85', 'true', 'yes', 'You passed.<br>Grade recorded: 85'],
          ['60', 'true', 'yes', 'You passed.<br>Grade recorded: 60'],
          ['59', 'false', 'no', 'Grade recorded: 59'],
          ['40', 'false', 'no', 'Grade recorded: 40']
        ] },
        { type: 'p', en: 'A block can hold as many lines as you need. All of them run together when the condition is true, and all of them are skipped when it is false.' },
        { type: 'code', code: J`
if (minutesLate > 10) {
    System.out.println("You are late.");
    System.out.println("Please see the teacher.");
}
` },
        { type: 'lines', rows: [
          ['if (minutesLate > 10) {', 'More than 10 minutes late?'],
          ['    System.out.println("You are late.");', 'Line 1 of the block.'],
          ['    System.out.println("Please see the teacher.");', 'Line 2 of the block. Both lines run, or neither runs.']
        ], ar: 'كل الأسطر داخل { } تُنفذ معاً أو تُترك معاً.' },
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
`, stdin: '250', out: 'Pay: 230', ar: 'الخصم يُطبق فقط داخل الكتلة، والطباعة خارجها.' },
        { type: 'memory', title: 'The discount program, run twice', en: 'The box <code>total</code> changes only when the if block runs. Here are two runs of the program above: one customer pays 250, another pays 150.',
          code: J`
int total = input.nextInt();
if (total >= 200) {
    total = total - 20;
}
System.out.println("Pay: " + total);
`,
          frames: [
            { label: 'Run 1: after reading the input 250', vars: [{ name: 'total', type: 'int', value: '250' }] },
            { label: 'Run 1: 250 &gt;= 200 is true, so after <code>total = total - 20;</code>', vars: [{ name: 'total', type: 'int', value: '230' }] },
            { label: 'Run 2: after reading the input 150', vars: [{ name: 'total', type: 'int', value: '150' }] },
            { label: 'Run 2: 150 &gt;= 200 is false. The block is skipped, so total is still 150.', vars: [{ name: 'total', type: 'int', value: '150' }] }
          ],
          ar: 'قيمة total تتغير فقط عندما يكون الشرط صحيحاً.' },
        { type: 'steps', title: 'Worked example: a library late fee', problem: 'You may keep a library book for 14 days for free. Each extra day costs 2 riyals. Read the number of days you kept the book and print the fee.',
          steps: [
            { en: 'Read the days. Start the fee at 0, because most students return books on time.', code: J`
int days = input.nextInt();
int fee = 0;
` },
            { en: 'Only when the days are more than 14 is there a fee. "More than" is <code>&gt;</code>: day 14 is still free.', code: J`
if (days > 14) {
` },
            { en: 'Inside the block, count the extra days and multiply by 2.', code: J`
    fee = (days - 14) * 2;
}
` },
            { en: 'Outside the block, print the fee for everyone. A student who was on time sees 0.', code: J`
System.out.println("Fee: " + fee);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int days = input.nextInt();
        int fee = 0;
        if (days > 14) {
            fee = (days - 14) * 2;
        }
        System.out.println("Fee: " + fee);
    }
}
`, stdin: '20', out: 'Fee: 12', ar: 'بدأنا بالرسوم صفراً، وغيّرناها داخل if فقط عند التأخير.' }
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
        'Java ignores indentation. Braces decide what belongs to the if.',
        'Give a variable its normal value before the if, and change it inside the block only when needed.'
      ],
      rememberAr: 'if تنفذ الكتلة فقط عند صحة الشرط. الشرط بين قوسين. استخدم { } دائماً ولا تضع ; بعد الشرط. جافا لا تهتم بالمسافات.',
      practice: [
        { t: 'mcq', q: 'What does an <code>if</code> do when its condition is false?', options: ['Runs the block anyway', 'Skips the block', 'Stops the program', 'Gives an error'], answer: 1, explain: 'It skips the block and continues with the next line.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int x = 8;
        if (x > 5) {
            System.out.println("big");
        }
        System.out.println("end");
    }
}
`, answer: J`
big
end
`, explain: '8 &gt; 5 is true, so "big" is printed. "end" is outside the block.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int x = 4;
        if (x > 5)
            System.out.println("A");
            System.out.println("B");
        System.out.println("C");
    }
}
`, answer: J`
B
C
`, explain: 'Without braces only the A line belongs to the if. It is skipped. B and C always run.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int y = 2;
        if (y > 10);
        {
            System.out.println("Big");
        }
        System.out.println("Done");
    }
}
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
`, hint: 'The condition is <code>n &lt; 0</code>. Zero is not negative.', explain: 'Negative means less than zero.' },
        { t: 'bug', q: 'The heat warning should appear only at 45 degrees or more. With 30 degrees the program still prints <code>Heat warning</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int temp = 30;
        if (temp >= 45); {
            System.out.println("Heat warning");
        }
        System.out.println("Temperature: " + temp);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int temp = 30;
        if (temp >= 45) {
            System.out.println("Heat warning");
        }
        System.out.println("Temperature: " + temp);
    }
}
`, hint: 'Look at the end of the if line, just after the condition.', explain: 'The semicolon right after <code>(temp &gt;= 45)</code> is an empty statement. It becomes the whole body of the if. The block in braces is then a normal block that <b>always</b> runs. Remove the semicolon so the block belongs to the if. Then 30 degrees prints only <code>Temperature: 30</code>.', explainAr: 'الفاصلة المنقوطة بعد الشرط تُنهي if، فتُنفذ الكتلة دائماً.' },
        { t: 'bug', q: 'A bill of 200 riyals or more gets 20 riyals off. This bill is only 150, but the program prints <code>Pay: 130</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int bill = 150;
        int pay = bill;
        if (bill >= 200)
            System.out.println("You get a discount!");
            pay = bill - 20;
        System.out.println("Pay: " + pay);
    }
}
`, bug: [5, 7], fix: J`
public class Main {
    public static void main(String[] args) {
        int bill = 150;
        int pay = bill;
        if (bill >= 200) {
            System.out.println("You get a discount!");
            pay = bill - 20;
        }
        System.out.println("Pay: " + pay);
    }
}
`, hint: 'Which lines really belong to the if? Java does not look at the spaces.', explain: 'Without braces only the first line after the if belongs to it. The line <code>pay = bill - 20;</code> looks inside because of the spaces, but it always runs. Put both lines inside braces. Then a bill of 150 prints <code>Pay: 150</code>.', explainAr: 'بدون { } يتبع if سطر واحد فقط. ضع{{g:|ي}} السطرين داخل الأقواس.' },
        { t: 'code', q: 'Orders under 100 riyals pay a 15-riyal delivery fee. Orders of 100 or more have free delivery. Read the order total and print <code>Total: X</code>, where X includes the fee if there is one. Use one <code>if</code> (no else). Do not print any prompt.', qAr: 'الطلبات أقل من 100 ريال تدفع 15 ريال توصيل. اقرأ المبلغ واطبع الإجمالي.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = input.nextInt();
        // add the fee only when needed
        System.out.println("Total: " + total);
    }
}
`, tests: [{ stdin: '80', expected: 'Total: 95' }, { stdin: '100', expected: 'Total: 100' }, { stdin: '250', expected: 'Total: 250' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int total = input.nextInt();
        if (total < 100) {
            total = total + 15;
        }
        System.out.println("Total: " + total);
    }
}
`, hint: 'Change <code>total</code> inside the if. The print line stays outside.', explain: 'Only small orders enter the block and get 15 added. An order of exactly 100 is not below 100, so it pays no fee.' }
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
        { type: 'p', en: 'Trace the even/odd test for four numbers. Remember that <code>%</code> gives the remainder, and that a negative odd number gives a negative remainder.' },
        { type: 'table', head: ['n', '<code>n % 2</code>', '<code>n % 2 == 0</code>', 'Block that runs', 'Output'], rows: [
          ['7', '1', 'false', 'else', 'odd'],
          ['4', '0', 'true', 'if', 'even'],
          ['0', '0', 'true', 'if', 'even'],
          ['-3', '-1', 'false', 'else', 'odd']
        ] },
        { type: 'h', en: 'if alone or if-else?' },
        { type: 'p', en: 'How do you choose? Ask yourself: "Is there something to do when the answer is no?" If nothing special happens on the no road, a plain <code>if</code> is enough. If the no road has its own job, use <code>if-else</code>.',
          ar: 'إذا كان للجواب "لا" عمل خاص به فاستخدم{{g:|ي}} if-else، وإلا فيكفي if.' },
        { type: 'table', head: ['Situation', 'Use'], rows: [
          ['Print a heat warning only on very hot days', '<code>if</code>'],
          ['Take 20 riyals off big bills; small bills stay the same', '<code>if</code>'],
          ['Print "Pass" or "Fail"', '<code>if-else</code>'],
          ['Choose light or warm clothes', '<code>if-else</code>']
        ] },
        { type: 'code', code: J`
String clothes;
if (temp >= 25) {
    clothes = "light";
} else {
    clothes = "warm";
}
` },
        { type: 'lines', rows: [
          ['String clothes;', 'A text box with no value yet.'],
          ['if (temp >= 25) {', 'Warm day?'],
          ['    clothes = "light";', 'Yes road: store "light".'],
          ['    clothes = "warm";', 'No road: store "warm". After the if-else, clothes always has exactly one of the two values.']
        ] },
        { type: 'check', q: 'Rule: "If the bill is over 500 riyals, give the customer a free bag." What do you need?', options: ['A plain <code>if</code>', 'An <code>if-else</code>', 'Two <code>else</code> blocks'], answer: 0, explain: 'Nothing special happens for smaller bills, so the no road is empty. A plain if is enough.' },
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
`, stdin: '8', out: 'Ticket: 10 SAR', ar: 'في كل حالة يأخذ price قيمة واحدة فقط.' },
        { type: 'memory', title: 'Where does price get its value?', en: 'In the cinema program, <code>price</code> starts with no value. Exactly one of the two branches fills it. Here the user typed 8.',
          code: J`
int age = 8;
int price;
if (age < 12) {
    price = 10;
} else {
    price = 25;
}
`,
          frames: [
            { label: 'After <code>int age = 8;</code>', vars: [{ name: 'age', type: 'int', value: '8' }] },
            { label: 'After <code>int price;</code> (the box exists but is still empty)', vars: [{ name: 'age', type: 'int', value: '8' }, { name: 'price', type: 'int', value: '(no value yet)' }] },
            { label: '8 &lt; 12 is true, so after <code>price = 10;</code>. The line <code>price = 25;</code> never runs.', vars: [{ name: 'age', type: 'int', value: '8' }, { name: 'price', type: 'int', value: '10' }] }
          ],
          ar: 'يأخذ price قيمته من فرع واحد فقط، ولا يُنفذ الفرع الآخر.' },
        { type: 'p', en: 'Java checks that <code>price</code> gets a value on <b>every</b> road. Because there is an if branch and an else branch, and both give a value, Java is happy to print it. If you remove the else, Java refuses: "variable price might not have been initialized".' },
        { type: 'steps', title: 'Worked example: a parking fee', problem: 'A mall car park costs 5 riyals for the first hour (or less). Each extra hour costs 3 riyals. Read the number of hours (a whole number, at least 1) and print the fee.',
          steps: [
            { en: 'Read the hours and prepare a box for the fee.', code: J`
int hours = input.nextInt();
int fee;
` },
            { en: 'Road 1: one hour or less. The fee is just 5.', code: J`
if (hours <= 1) {
    fee = 5;
` },
            { en: 'Road 2: more than one hour. Pay 5 for the first hour, plus 3 for each hour after it.', code: J`
} else {
    fee = 5 + (hours - 1) * 3;
}
` },
            { en: 'Both roads gave <code>fee</code> a value. Print it.', code: J`
System.out.println("Fee: " + fee + " SAR");
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int hours = input.nextInt();
        int fee;
        if (hours <= 1) {
            fee = 5;
        } else {
            fee = 5 + (hours - 1) * 3;
        }
        System.out.println("Fee: " + fee + " SAR");
    }
}
`, stdin: '4', out: 'Fee: 14 SAR', ar: 'أربع ساعات: 5 للساعة الأولى ثم 3 × 3 = 9، فالمجموع 14.' }
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
        'Code after the closing brace of the else runs in every case.',
        'If a variable gets a value in <b>both</b> branches, you can use it after the if-else.'
      ],
      rememberAr: 'if-else ينفذ بلوكاً واحداً فقط. else لا تحتاج شرطاً. العدد زوجي إذا كان n % 2 == 0.',
      practice: [
        { t: 'mcq', q: 'In an if-else, when does the else block run?', options: ['When the condition is true', 'When the condition is false', 'Always', 'Never'], answer: 1, explain: 'else means "otherwise": the condition was false.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 4;
        if (n % 2 == 0) {
            System.out.println("even");
        } else {
            System.out.println("odd");
        }
    }
}
`, answer: 'even', explain: '4 divided by 2 has remainder 0.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        double balance = 100;
        double price = 130;
        if (price <= balance) {
            System.out.println("Buy");
        } else {
            System.out.println("No money");
        }
    }
}
`, answer: 'No money', explain: '130 &lt;= 100 is false, so the else block runs.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 9;
        if (a > b) {
            System.out.println(a);
        } else {
            System.out.println(b);
        }
        System.out.println("Done");
    }
}
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
`, hint: 'Age 12 is already an Adult, so use <code>age &lt; 12</code>.', explain: 'Exactly 12 is not below 12, so it goes to else.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int balance = 300;
        int price = 120;
        if (price <= balance) {
            balance = balance - price;
            System.out.println("Bought");
        } else {
            System.out.println("Not enough");
        }
        System.out.println(balance);
    }
}
`, answer: J`
Bought
180
`, explain: '120 &lt;= 300 is true, so the if block runs: balance becomes 300 - 120 = 180 and "Bought" is printed. The last line is outside the if-else and prints 180.' },
        { t: 'bug', q: 'This program should print <code>Even</code> or <code>Odd</code>. It does not compile. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 7;
        if (n % 2 == 0) {
            System.out.println("Even");
        } else (n % 2 != 0) {
            System.out.println("Odd");
        }
    }
}
`, bug: 6, fix: J`
public class Main {
    public static void main(String[] args) {
        int n = 7;
        if (n % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
    }
}
`, hint: 'Does <code>else</code> ever have its own condition?', explain: '<code>else</code> means "in every other case", so it never takes a condition. Java sees <code>(n % 2 != 0)</code> after else and stops with a syntax error. Write just <code>} else {</code>. Then the program prints Odd.', explainAr: 'else لا تأخذ شرطاً أبداً.' },
        { t: 'bug', q: 'Rule: children <b>under</b> 12 pay 10 riyals, everyone else pays 25. A 12-year-old should pay 25, but this program prints <code>Ticket: 10</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int age = 12;
        int price;
        if (age <= 12) {
            price = 10;
        } else {
            price = 25;
        }
        System.out.println("Ticket: " + price);
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        int age = 12;
        int price;
        if (age < 12) {
            price = 10;
        } else {
            price = 25;
        }
        System.out.println("Ticket: " + price);
    }
}
`, hint: 'Test the edge value 12. Is 12 "under 12"?', explain: '<code>age &lt;= 12</code> is true for 12, so a 12-year-old pays the child price. "Under 12" means <code>age &lt; 12</code>. The program compiles and runs, so only a test with the edge value 12 shows the bug. After the fix it prints <code>Ticket: 25</code>.', explainAr: '"أقل من 12" تعني &lt; وليس &lt;=. جرّب{{g:|ي}} دائماً القيمة على الحد.' },
        { t: 'code', q: 'A mobile plan costs 100 riyals and includes 20 GB. Each extra GB costs 5 riyals. Read the GB used this month (a whole number) and print <code>Bill: X</code>. Use if-else. Do not print any prompt.', qAr: 'الباقة 100 ريال وتشمل 20 جيجابايت، وكل جيجابايت إضافي بـ 5 ريالات. اطبع الفاتورة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int gb = input.nextInt();
        int bill;
        // if-else here
        System.out.println("Bill: " + bill);
    }
}
`, tests: [{ stdin: '15', expected: 'Bill: 100' }, { stdin: '20', expected: 'Bill: 100' }, { stdin: '23', expected: 'Bill: 115' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int gb = input.nextInt();
        int bill;
        if (gb <= 20) {
            bill = 100;
        } else {
            bill = 100 + (gb - 20) * 5;
        }
        System.out.println("Bill: " + bill);
    }
}
`, hint: 'The else road: 100 plus 5 for every GB above 20, that is <code>(gb - 20) * 5</code>.', explain: 'Up to 20 GB the bill is 100. For 23 GB there are 3 extra GB: 100 + 3 * 5 = 115.' }
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
        { type: 'p', en: 'Two questions with two answers each give four possible people. Let us trace all four. Notice the last two rows: when the person is too young, the license does not matter at all, because the inner question is never asked.' },
        { type: 'table', head: ['age', 'hasLicense', 'Outer: <code>age &gt;= 18</code>', 'Inner: <code>hasLicense</code>', 'Output'], rows: [
          ['20', 'true', 'true', 'true', 'You may drive.'],
          ['20', 'false', 'true', 'false', 'Get a license first.'],
          ['15', 'true', 'false', 'not asked', 'Too young to drive.'],
          ['15', 'false', 'false', 'not asked', 'Too young to drive.']
        ] },
        { type: 'analogy', title: 'The clinic reception', en: 'At a clinic the receptionist first asks: "Do you have an appointment?" Only if you say yes does she ask: "Do you have your ID card?" If you have no appointment, she sends you to book one, and she never asks about the ID.', ar: 'السؤال الثاني يأتي فقط بعد الجواب "نعم" على السؤال الأول.' },
        { type: 'note', kind: 'tip', en: 'A nested if with no else can often be written with <code>&amp;&amp;</code>: <code>if (age &gt;= 18 &amp;&amp; hasLicense)</code>. Use nested ifs when each branch needs its own message.', ar: 'عند غياب else يمكن استبدال التداخل بـ &&.' },
        { type: 'p', en: 'Here are two ways to write the same rule. Both print "Welcome" only for a member whose card is active. The second one is shorter. But if you want a different message for "not a member" and for "card expired", you need the nested form with an else in each place.' },
        { type: 'code', code: J`
if (isMember) {
    if (cardActive) {
        System.out.println("Welcome");
    }
}
if (isMember && cardActive) {
    System.out.println("Welcome");
}
` },
        { type: 'memory', title: 'A gym fee chosen by two questions', en: 'Adults (18 or older) pay 50 riyals if they are members and 80 riyals if not. Younger people pay 30. The box <code>fee</code> starts at 0 and is set in exactly one place.',
          code: J`
int age = 25;
boolean isMember = false;
int fee = 0;
if (age >= 18) {
    if (isMember) {
        fee = 50;
    } else {
        fee = 80;
    }
} else {
    fee = 30;
}
`,
          frames: [
            { label: 'After the first three lines', vars: [{ name: 'age', type: 'int', value: '25' }, { name: 'isMember', type: 'boolean', value: 'false' }, { name: 'fee', type: 'int', value: '0' }] },
            { label: 'Outer question: 25 &gt;= 18 is true, so go inside. Nothing changes yet.', vars: [{ name: 'age', type: 'int', value: '25' }, { name: 'isMember', type: 'boolean', value: 'false' }, { name: 'fee', type: 'int', value: '0' }] },
            { label: 'Inner question: isMember is false, so the inner else runs: <code>fee = 80;</code>', vars: [{ name: 'age', type: 'int', value: '25' }, { name: 'isMember', type: 'boolean', value: 'false' }, { name: 'fee', type: 'int', value: '80' }] }
          ],
          ar: 'الشرط الخارجي صحيح، ثم الداخلي خاطئ، فتصبح الرسوم 80.' },
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
`, stdin: '70 60', out: 'Attendance too low', ar: 'السؤال الداخلي لا يُطرح إلا إذا نجح السؤال الخارجي.' },
        { type: 'steps', title: 'Worked example: pass, bonus or resit', problem: 'Read a final mark and a number for the labs (1 = the student attended all labs, 0 = not). If the mark is 60 or more: print <code>Pass with lab bonus</code> when labs is 1, otherwise <code>Pass</code>. If the mark is below 60: print <code>Resit allowed</code> when the mark is at least 50, otherwise <code>Fail</code>. This time there is a nested if inside <b>both</b> branches.',
          steps: [
            { en: 'Read the two whole numbers.', code: J`
int mark = input.nextInt();
int labs = input.nextInt();
` },
            { en: 'The outer question splits the students into two groups: passed and not passed.', code: J`
if (mark >= 60) {
` },
            { en: 'Inside the passed group, ask about the labs.', code: J`
    if (labs == 1) {
        System.out.println("Pass with lab bonus");
    } else {
        System.out.println("Pass");
    }
` },
            { en: 'Inside the else (mark below 60), ask a different question: is the mark at least 50?', code: J`
} else {
    if (mark >= 50) {
        System.out.println("Resit allowed");
    } else {
        System.out.println("Fail");
    }
}
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();
        int labs = input.nextInt();
        if (mark >= 60) {
            if (labs == 1) {
                System.out.println("Pass with lab bonus");
            } else {
                System.out.println("Pass");
            }
        } else {
            if (mark >= 50) {
                System.out.println("Resit allowed");
            } else {
                System.out.println("Fail");
            }
        }
    }
}
`, stdin: '57 1', out: 'Resit allowed', ar: 'الدرجة 57 أقل من 60، فننتقل إلى else، ثم 57 >= 50 صحيح فيُسمح بإعادة الاختبار.' },
        { type: 'table', head: ['mark', 'labs', 'Outer road', 'Inner question', 'Output'], rows: [
          ['75', '1', 'if (mark &gt;= 60)', '<code>labs == 1</code> is true', 'Pass with lab bonus'],
          ['75', '0', 'if (mark &gt;= 60)', '<code>labs == 1</code> is false', 'Pass'],
          ['57', '1', 'else', '<code>mark &gt;= 50</code> is true', 'Resit allowed'],
          ['40', '1', 'else', '<code>mark &gt;= 50</code> is false', 'Fail']
        ] }
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
        'A nested if is an if inside another if or else block. It can sit in the if block, the else block, or both.',
        'The inner question is only asked when the outer branch is reached.',
        'With no else, a nested if is the same as one if with <code>&amp;&amp;</code>.',
        'An else belongs to the <b>nearest</b> if without an else (dangling else).',
        'Use braces everywhere to avoid the dangling else.'
      ],
      rememberAr: 'if المتداخلة تعني if داخل if. else تتبع أقرب if. استخدم الأقواس دائماً لتجنب الخطأ.',
      practice: [
        { t: 'mcq', q: 'What is a nested if?', options: ['An if with no else', 'An if inside another if or else block', 'Two ifs in a row', 'An if with two conditions'], answer: 1, explain: 'Nested means placed inside.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
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
    }
}
`, answer: 'Adult', explain: '20 &gt;= 18 is true, then 20 &gt;= 60 is false, so the inner else prints Adult.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
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
    }
}
`, answer: 'End', explain: 'a &gt; 0 is true, b &gt; 0 is false and the inner if has no else. Only "End" is printed.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int x = -2, y = 4;
        if (x > 0)
            if (y > 0)
                System.out.println("P");
        else
            System.out.println("Q");
        System.out.println("R");
    }
}
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
`, hint: 'Outer question: temp &gt; 30. Inner question: rain == 1.', explain: 'The rain question is asked only for hot days.' },
        { t: 'output', q: 'This time both branches have a nested if. What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int mark = 50;
        int attendance = 90;
        if (mark >= 60) {
            if (attendance >= 75) {
                System.out.println("Allowed");
            } else {
                System.out.println("Attendance too low");
            }
        } else {
            if (attendance >= 75) {
                System.out.println("Mark too low");
            } else {
                System.out.println("Both too low");
            }
        }
    }
}
`, answer: 'Mark too low', explain: '50 &gt;= 60 is false, so Java goes to the outer else. There, 90 &gt;= 75 is true, so it prints "Mark too low". The first inner if-else is never reached.' },
        { t: 'bug', q: 'A 15-year-old should see <code>Too young</code>, then <code>Next</code>. The program prints only <code>Next</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int age = 15;
        boolean hasTicket = true;
        if (age >= 18)
            if (hasTicket)
                System.out.println("Enter");
        else
            System.out.println("Too young");
        System.out.println("Next");
    }
}
`, bug: [5, 8], fix: J`
public class Main {
    public static void main(String[] args) {
        int age = 15;
        boolean hasTicket = true;
        if (age >= 18) {
            if (hasTicket)
                System.out.println("Enter");
        } else
            System.out.println("Too young");
        System.out.println("Next");
    }
}
`, hint: 'Which if does the else really belong to? Java ignores the spaces.', explain: 'This is the dangling else. The else belongs to the nearest if, <code>if (hasTicket)</code>, not to the age question. Since 15 &gt;= 18 is false, the whole inner if-else is skipped and only "Next" is printed. Braces around the inner if give the else to the outer if. Then the program prints "Too young" and "Next".', explainAr: 'else تتبع أقرب if. استخدم{{g:|ي}} الأقواس لتربطها بالشرط الخارجي.' },
        { t: 'code', q: 'Read the balance and the amount to withdraw (two whole numbers). If the amount is not more than the balance: print <code>Needs approval</code> when the amount is above 5000, otherwise <code>Approved</code>. If the amount is more than the balance, print <code>Insufficient funds</code>. Use a nested if. Do not print any prompt.', qAr: 'اقرأ الرصيد والمبلغ. إذا كفى الرصيد: المبلغ فوق 5000 يحتاج موافقة، وإلا يُقبل. وإن لم يكفِ اطبع Insufficient funds.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int balance = input.nextInt();
        int amount = input.nextInt();
        // nested if here
    }
}
`, tests: [{ stdin: '8000 6000', expected: 'Needs approval' }, { stdin: '8000 2000', expected: 'Approved' }, { stdin: '1000 2000', expected: 'Insufficient funds' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int balance = input.nextInt();
        int amount = input.nextInt();
        if (amount <= balance) {
            if (amount > 5000) {
                System.out.println("Needs approval");
            } else {
                System.out.println("Approved");
            }
        } else {
            System.out.println("Insufficient funds");
        }
    }
}
`, hint: 'Outer question: <code>amount &lt;= balance</code>. Inner question: <code>amount &gt; 5000</code>.', explain: 'The approval question only makes sense when there is enough money, so it goes inside the first branch.' }
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
        { type: 'memory', title: 'The chain fills letter only once', en: 'Follow the program above with the input 83. Each frame shows one question. The box <code>letter</code> gets a value only at the first true question.',
          frames: [
            { label: 'After reading 83 and <code>String letter;</code>', vars: [{ name: 'score', type: 'int', value: '83' }, { name: 'letter', type: 'String', value: '(no value yet)' }] },
            { label: '<code>score &gt;= 90</code>? 83 &gt;= 90 is false. Nothing changes. Go to the next question.', vars: [{ name: 'score', type: 'int', value: '83' }, { name: 'letter', type: 'String', value: '(no value yet)' }] },
            { label: '<code>score &gt;= 80</code>? true! After <code>letter = "B";</code>', vars: [{ name: 'score', type: 'int', value: '83' }, { name: 'letter', type: 'String', value: '"B"' }] },
            { label: 'All the other questions are skipped. Java jumps to the println: <code>Grade: B</code>', vars: [{ name: 'score', type: 'int', value: '83' }, { name: 'letter', type: 'String', value: '"B"' }] }
          ],
          ar: 'يتوقف جافا عند أول شرط صحيح، فيأخذ letter قيمة واحدة فقط.' },
        { type: 'p', en: 'Now trace the whole chain for many scores. Look at the boundary pairs 90/89, 80/79 and 60/59: each pair falls on two different roads. A good programmer always checks those pairs.' },
        { type: 'table', head: ['score', 'First true question', 'letter'], rows: [
          ['95', '<code>score &gt;= 90</code>', 'A'],
          ['90', '<code>score &gt;= 90</code>', 'A'],
          ['89', '<code>score &gt;= 80</code>', 'B'],
          ['79', '<code>score &gt;= 70</code>', 'C'],
          ['60', '<code>score &gt;= 60</code>', 'D'],
          ['59', 'none (final else)', 'F'],
          ['0', 'none (final else)', 'F']
        ] },
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
        { type: 'p', en: 'There are two correct orders. With <code>&gt;=</code> start from the <b>highest</b> limit and go down (like the grade program). With <code>&lt;</code> start from the <b>lowest</b> limit and go up. Both work, because each question only catches the values that are left.',
          ar: 'مع >= ابدأ{{g:|ي}} بالحد الأعلى، ومع &lt; ابدأ{{g:|ي}} بالحد الأدنى.' },
        { type: 'code', code: J`
if (temp < 15) {
    System.out.println("Cold");
} else if (temp < 30) {
    System.out.println("Nice");
} else {
    System.out.println("Hot");
}
` },
        { type: 'lines', rows: [
          ['if (temp < 15) {', 'The lowest group first: below 15 is cold.'],
          ['} else if (temp < 30) {', 'We only get here when temp is 15 or more. So this road means 15 to 29.'],
          ['} else {', 'Everything left: 30 or more.']
        ] },
        { type: 'h', en: 'The final else is optional' },
        { type: 'p', en: 'You may end a chain without a plain <code>else</code>. Then, if no question is true, <b>no</b> block runs and the program simply continues. Use this when nothing special should happen for the remaining values.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int speed = 90;
        if (speed > 120) {
            System.out.println("Fine: 900");
        } else if (speed > 100) {
            System.out.println("Fine: 300");
        }
        System.out.println("Speed checked");
    }
}
`, out: 'Speed checked' },
        { type: 'lines', rows: [
          ['if (speed > 120) {', '90 &gt; 120? No.'],
          ['} else if (speed > 100) {', '90 &gt; 100? No. There is no final else, so no fine is printed.'],
          ['System.out.println("Speed checked");', 'After the chain: always runs.']
        ] },
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
`, stdin: '30', out: 'Price: 25', ar: 'كل شرط يعتمد على أن الشروط السابقة كانت خاطئة.' },
        { type: 'steps', title: 'Worked example: a phone battery message', problem: 'Read the battery level (0 to 100). Print <code>Full</code> for exactly 100, <code>Good</code> for 50 or more, <code>Low</code> for 20 or more, <code>Charge now</code> for anything above 0, and <code>Empty</code> for 0.',
          steps: [
            { en: 'Read the level.', code: J`
int battery = input.nextInt();
` },
            { en: 'The strictest question first: exactly 100. A chain can mix <code>==</code> with other comparisons.', code: J`
if (battery == 100) {
    System.out.println("Full");
` },
            { en: 'Then go down: 50 or more, then 20 or more. We already know the level is below 100 here.', code: J`
} else if (battery >= 50) {
    System.out.println("Good");
} else if (battery >= 20) {
    System.out.println("Low");
` },
            { en: 'Anything still above 0 needs charging.', code: J`
} else if (battery > 0) {
    System.out.println("Charge now");
` },
            { en: 'The final else catches the only value left: 0.', code: J`
} else {
    System.out.println("Empty");
}
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int battery = input.nextInt();
        if (battery == 100) {
            System.out.println("Full");
        } else if (battery >= 50) {
            System.out.println("Good");
        } else if (battery >= 20) {
            System.out.println("Low");
        } else if (battery > 0) {
            System.out.println("Charge now");
        } else {
            System.out.println("Empty");
        }
    }
}
`, stdin: '15', out: 'Charge now', ar: '15 ليست 100، وليست ≥ 50، وليست ≥ 20، لكنها أكبر من 0.' }
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
        'The last <code>else</code> catches everything that is left. Without it, maybe no block runs.',
        'Separate ifs are all tested; an else-if chain runs only one block.',
        'Check the boundary pairs (90/89, 60/59) when you test a chain.'
      ],
      rememberAr: 'else if تختار بين عدة فروع، وأول شرط صحيح يُنفذ فقط. رتّب الشروط من الأضيق إلى الأوسع، و else الأخيرة تلتقط الباقي.',
      practice: [
        { t: 'mcq', q: 'In an else-if chain, which block runs?', options: ['All blocks', 'The first block whose condition is true', 'The last block', 'Every block with a true condition'], answer: 1, explain: 'Java stops at the first true condition.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int t = 38;
        if (t >= 40) {
            System.out.println("Very hot");
        } else if (t >= 30) {
            System.out.println("Hot");
        } else {
            System.out.println("Cool");
        }
    }
}
`, answer: 'Hot', explain: '38 &gt;= 40 is false; 38 &gt;= 30 is true, so Hot.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
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
    }
}
`, answer: 'C', explain: '75 fails 90 and 80, then passes 70.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 50;
        if (n > 10)
            System.out.println("big");
        if (n > 40)
            System.out.println("bigger");
        else
            System.out.println("small");
    }
}
`, answer: J`
big
bigger
`, explain: 'These are two separate ifs. Both are tested. The else belongs to the second if.' },
        { t: 'output', q: 'This chain has its conditions in the wrong order. What is printed?', code: J`
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
`, hint: 'Start with the highest range and go down.', explain: 'Testing from the top down means each later question can be a single comparison.' },
        { t: 'output', q: 'This chain has no final else. What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int t = 12;
        if (t >= 40) {
            System.out.println("Very hot");
        } else if (t >= 30) {
            System.out.println("Hot");
        }
        System.out.println("Checked");
    }
}
`, answer: 'Checked', explain: '12 &gt;= 40 is false and 12 &gt;= 30 is false. With no final else, no block of the chain runs. Only the line after the chain prints.' },
        { t: 'bug', q: 'A score of 92 should print <code>A</code>, but this program prints <code>C</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int score = 92;
        if (score >= 70) {
            System.out.println("C");
        } else if (score >= 80) {
            System.out.println("B");
        } else if (score >= 90) {
            System.out.println("A");
        }
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int score = 92;
        if (score >= 90) {
            System.out.println("A");
        } else if (score >= 80) {
            System.out.println("B");
        } else if (score >= 70) {
            System.out.println("C");
        }
    }
}
`, hint: 'The first true question wins. Which question is true first for 92?', explain: 'The widest question, <code>score &gt;= 70</code>, comes first. 92 &gt;= 70 is true, so Java prints C and skips the rest. The B and A roads can never be reached. Put the strictest question first: 90, then 80, then 70.', explainAr: 'رتّب{{g:|ي}} الشروط من الأضيق (90) إلى الأوسع (70).' },
        { t: 'bug', q: 'Speeds above 120 get a 900 fine; speeds above 100 get a 300 fine. A driver at 130 should get only one fine, but the program prints both. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int speed = 130;
        if (speed > 120) {
            System.out.println("Fine: 900");
        }
        if (speed > 100) {
            System.out.println("Fine: 300");
        }
    }
}
`, bug: [6, 7], fix: J`
public class Main {
    public static void main(String[] args) {
        int speed = 130;
        if (speed > 120) {
            System.out.println("Fine: 900");
        } else if (speed > 100) {
            System.out.println("Fine: 300");
        }
    }
}
`, hint: 'Are these one chain or two separate questions?', explain: 'Two separate ifs are both tested. 130 &gt; 120 is true and 130 &gt; 100 is also true, so both fines print. Joining them with <code>} else if</code> makes one chain: the first true question wins and only <code>Fine: 900</code> is printed.', explainAr: 'if المنفصلة تُفحص كلها؛ استخدم{{g:|ي}} else if ليُنفذ فرع واحد.' },
        { t: 'code', q: 'A delivery app charges by distance in km (a whole number): up to 5 km costs 10 riyals, up to 15 km costs 20, up to 30 km costs 35. More than 30 km: print <code>Too far</code>. Otherwise print <code>Fee: X</code>. Do not print any prompt.', qAr: 'رسوم التوصيل حسب المسافة: حتى 5 كم 10 ريالات، حتى 15 كم 20، حتى 30 كم 35، وأكثر من ذلك Too far.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int km = input.nextInt();
        // else-if chain here
    }
}
`, tests: [{ stdin: '5', expected: 'Fee: 10' }, { stdin: '16', expected: 'Fee: 35' }, { stdin: '31', expected: 'Too far' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int km = input.nextInt();
        if (km <= 5) {
            System.out.println("Fee: 10");
        } else if (km <= 15) {
            System.out.println("Fee: 20");
        } else if (km <= 30) {
            System.out.println("Fee: 35");
        } else {
            System.out.println("Too far");
        }
    }
}
`, hint: 'Start from the smallest distance with <code>&lt;=</code> and go up. The final else is "Too far".', explain: 'Each question only sees the distances that are left. 16 is not &lt;= 5 and not &lt;= 15, but it is &lt;= 30, so the fee is 35.' }
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
        { type: 'table', head: ['choice', 'Matching label', 'Output'], rows: [
          ['1', '<code>case 1:</code>', 'Espresso'],
          ['2', '<code>case 2:</code>', 'Latte'],
          ['3', 'none, so <code>default:</code>', 'Unknown'],
          ['0', 'none, so <code>default:</code>', 'Unknown']
        ] },
        { type: 'p', en: 'Why learn a new tool when else-if already works? Look at the same menu written as a chain. Every line repeats <code>choice ==</code>. With 10 buttons the chain becomes long and noisy. A switch names the value <b>once</b> and lists the choices clearly, like a menu card.',
          ar: 'switch تذكر المتغير مرة واحدة ثم تسرد الخيارات، فتكون أوضح من سلسلة طويلة من ==.' },
        { type: 'code', code: J`
if (choice == 1) {
    System.out.println("Espresso");
} else if (choice == 2) {
    System.out.println("Latte");
} else {
    System.out.println("Unknown");
}
` },
        { type: 'note', kind: 'tip', en: 'Use <code>switch</code> when you compare <b>one</b> value with fixed values ("is it 1? is it 2?"). Use an else-if chain for ranges ("is it 90 or more?") or when the questions use different variables.' },
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
        { type: 'p', en: 'A <code>char</code> switch is useful for one-letter answers. A <code>char</code> case uses single quotes.' },
        { type: 'code', code: J`
char answer = 'N';
switch (answer) {
    case 'Y':
        System.out.println("File saved");
        break;
    case 'N':
        System.out.println("Cancelled");
        break;
    default:
        System.out.println("Please press Y or N");
}
` },
        { type: 'lines', rows: [
          ['switch (answer) {', 'The value is the letter N.'],
          ['case \'Y\':', 'Is it Y? No.'],
          ['case \'N\':', 'Is it N? Yes: print Cancelled, then break.']
        ] },
        { type: 'p', en: 'A String case must match <b>exactly</b>, letter by letter, including capital letters. If the user types <code>riyadh</code>, the label <code>case "Riyadh":</code> does not match, and default runs. In a later lesson you will learn how to compare text without caring about capitals.',
          ar: 'في switch على النصوص يجب أن يتطابق النص حرفاً بحرف، والحروف الكبيرة تختلف عن الصغيرة.' },
        { type: 'memory', title: 'A switch that chooses a price', en: 'A switch can also put a value into a box. Here the drink number is 2. Watch <code>price</code>.',
          code: J`
int choice = 2;
int price = 0;
switch (choice) {
    case 1:
        price = 8;
        break;
    case 2:
        price = 12;
        break;
}
`,
          frames: [
            { label: 'After the first two lines', vars: [{ name: 'choice', type: 'int', value: '2' }, { name: 'price', type: 'int', value: '0' }] },
            { label: 'The switch jumps straight to <code>case 2:</code>. After <code>price = 12;</code>', vars: [{ name: 'choice', type: 'int', value: '2' }, { name: 'price', type: 'int', value: '12' }] },
            { label: '<code>break;</code> leaves the switch. The line <code>price = 8;</code> never ran.', vars: [{ name: 'choice', type: 'int', value: '2' }, { name: 'price', type: 'int', value: '12' }] }
          ],
          ar: 'قفزت switch مباشرة إلى case 2، فأصبح السعر 12.' },
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
`, stdin: '3', out: 'Tuesday', ar: 'كل case تنتهي بـ break، و default للقيم الأخرى.' },
        { type: 'steps', title: 'Worked example: a small calculator', problem: 'Read a whole number, an operator (<code>+</code>, <code>-</code> or <code>*</code>) and another whole number, with spaces between them, for example <code>12 * 3</code>. Print the result. For any other operator print <code>Unknown operator</code>.',
          steps: [
            { en: 'Read the three parts. The operator is text, so read it with <code>input.next()</code>, which reads one word.', code: J`
int a = input.nextInt();
String op = input.next();
int b = input.nextInt();
` },
            { en: 'Switch on the operator. Each case is a String in double quotes.', code: J`
switch (op) {
    case "+":
        System.out.println("Result: " + (a + b));
        break;
` },
            { en: 'Add the other operators the same way. The parentheses make Java calculate before joining the text.', code: J`
    case "-":
        System.out.println("Result: " + (a - b));
        break;
    case "*":
        System.out.println("Result: " + (a * b));
        break;
` },
            { en: 'default handles every other operator.', code: J`
    default:
        System.out.println("Unknown operator");
}
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        String op = input.next();
        int b = input.nextInt();
        switch (op) {
            case "+":
                System.out.println("Result: " + (a + b));
                break;
            case "-":
                System.out.println("Result: " + (a - b));
                break;
            case "*":
                System.out.println("Result: " + (a * b));
                break;
            default:
                System.out.println("Unknown operator");
        }
    }
}
`, stdin: '12 * 3', out: 'Result: 36', ar: 'قرأنا العامل نصاً ثم استخدمنا switch على النص.' }
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
        'Cases are fixed values, not ranges. For ranges use an else-if chain.',
        'A String case matches only the exact same text, capitals included.'
      ],
      rememberAr: 'switch تقفز إلى case المطابقة. تنتهي case بنقطتين رأسيتين. break تخرج من switch و default عند عدم التطابق. القيمة int أو char أو String.',
      practice: [
        { t: 'mcq', q: 'Which keyword runs when no case matches?', options: ['<code>else</code>', '<code>default</code>', '<code>break</code>', '<code>other</code>'], answer: 1, explain: '<code>default</code> is the "everything else" case of a switch.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
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
    }
}
`, answer: 'Mon', explain: 'The value 2 matches case 2.' },
        { t: 'output', q: 'What is printed?', code: J`
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
                System.out.println("?");
        }
    }
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
`, hint: 'Three cases, each with a break, and a default.', explain: 'default catches every number that is not 1, 2 or 3.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        String city = "Abha";
        switch (city) {
            case "Riyadh":
                System.out.println("Central region");
                break;
            case "Jeddah":
                System.out.println("Western region");
                break;
            default:
                System.out.println("Other region");
        }
        System.out.println("Done");
    }
}
`, answer: J`
Other region
Done
`, explain: '"Abha" matches no case label, so default runs. After the switch, "Done" always prints.' },
        { t: 'bug', q: 'The user chose drink 1, so only <code>Espresso</code> should be printed. The program prints <code>Espresso</code> and <code>Latte</code>. Tap the line where something is missing.', code: J`
public class Main {
    public static void main(String[] args) {
        int choice = 1;
        switch (choice) {
            case 1:
                System.out.println("Espresso");
            case 2:
                System.out.println("Latte");
                break;
            default:
                System.out.println("Unknown");
        }
    }
}
`, bug: [6, 7], fix: J`
public class Main {
    public static void main(String[] args) {
        int choice = 1;
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
`, hint: 'What should happen right after Espresso is printed?', explain: 'Case 1 has no <code>break</code>, so after printing Espresso Java keeps going into case 2 and prints Latte too (this is called fall-through; the next lesson looks at it closely). Add <code>break;</code> after the Espresso line. Then only Espresso is printed.', explainAr: 'نسيان break يجعل التنفيذ يستمر إلى الحالة التالية.' },
        { t: 'code', q: 'Read an airport code (one word). Print the city: <code>RUH</code> is <code>Riyadh</code>, <code>JED</code> is <code>Jeddah</code>, <code>DMM</code> is <code>Dammam</code>. For any other code print <code>Unknown code</code>. Use a switch on the String. Do not print any prompt.', qAr: 'اقرأ رمز المطار واطبع اسم المدينة باستخدام switch على النص.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String code = input.next();
        // switch on code
    }
}
`, tests: [{ stdin: 'JED', expected: 'Jeddah' }, { stdin: 'RUH', expected: 'Riyadh' }, { stdin: 'XYZ', expected: 'Unknown code' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String code = input.next();
        switch (code) {
            case "RUH":
                System.out.println("Riyadh");
                break;
            case "JED":
                System.out.println("Jeddah");
                break;
            case "DMM":
                System.out.println("Dammam");
                break;
            default:
                System.out.println("Unknown code");
        }
    }
}
`, hint: 'Each case label is text in double quotes, such as <code>case "RUH":</code>.', explain: 'A String switch compares the code with each label, letter by letter. Every case ends with break, and default catches every other code.' }
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
        { type: 'p', en: 'Here is the same switch traced for four values of <code>day</code>. To trace any switch, use two steps: (1) find where Java jumps in, (2) walk down until the first <code>break</code> or the closing brace.',
          ar: 'لتتبع switch: ابحث{{g:|ي}} عن نقطة الدخول، ثم انزل{{g:|ي}} حتى أول break.' },
        { type: 'table', head: ['day', 'Java jumps in at', 'Lines printed', 'Stops at'], rows: [
          ['1', '<code>case 1:</code>', 'Sun, Mon, Tue', 'the break after Tue'],
          ['2', '<code>case 2:</code>', 'Mon, Tue', 'the break after Tue'],
          ['3', '<code>case 3:</code>', 'Tue', 'the break after Tue'],
          ['4', '<code>default:</code>', 'Other', 'the end of the switch']
        ] },
        { type: 'h', en: 'Falling through to collect rewards' },
        { type: 'p', en: 'Fall-through can even be useful when higher levels get everything that lower levels get, <b>plus more</b>. A loyalty card has three levels. Level 1 gets a 5% discount. Level 2 also gets a free gift. Level 3 also gets free delivery. Put the highest level first and leave out the breaks.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int level = 2;
        switch (level) {
            case 3:
                System.out.println("Free delivery");
            case 2:
                System.out.println("Free gift");
            case 1:
                System.out.println("5% discount");
        }
    }
}
`, out: J`
Free gift
5% discount
` },
        { type: 'lines', rows: [
          ['case 3:', 'Level is 2, so Java does not start here.'],
          ['case 2:', 'Start here: print Free gift. No break.'],
          ['case 1:', 'Fall into level 1 too: print 5% discount. The switch ends at the closing brace.']
        ] },
        { type: 'memory', title: 'Counting points with fall-through', en: 'The same idea with numbers: each level adds 10 points, and higher levels fall through to collect the lower levels too. Here <code>level</code> is 2.',
          code: J`
int level = 2;
int points = 0;
switch (level) {
    case 3:
        points = points + 10;
    case 2:
        points = points + 10;
    case 1:
        points = points + 10;
}
`,
          frames: [
            { label: 'Before the switch', vars: [{ name: 'level', type: 'int', value: '2' }, { name: 'points', type: 'int', value: '0' }] },
            { label: 'Jump in at <code>case 2:</code>, after <code>points = points + 10;</code>', vars: [{ name: 'level', type: 'int', value: '2' }, { name: 'points', type: 'int', value: '10' }] },
            { label: 'No break, so fall into <code>case 1:</code>, after <code>points = points + 10;</code>', vars: [{ name: 'level', type: 'int', value: '2' }, { name: 'points', type: 'int', value: '20' }] }
          ],
          ar: 'بدأ التنفيذ عند case 2 ثم انساب إلى case 1، فأصبحت النقاط 20.' },
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
        { type: 'h', en: 'By accident or on purpose?' },
        { type: 'p', en: 'A missing break is the most common switch bug, because the program still compiles and runs. It just prints too much. So professional programmers follow a simple habit: every case ends with <code>break</code>, unless they want fall-through on purpose. When they do want it, they write a short comment such as <code>// no break: falls through</code>, so the next reader knows it is not a mistake.',
          ar: 'اجعل{{g:|ي}} كل case تنتهي بـ break، وإذا أردت{{g:|ِ}} الانسياب عمداً فاكتب{{g:|ي}} تعليقاً يوضح ذلك.' },
        { type: 'check', q: 'A switch prints two messages, but you expected one. What do you look for first?', options: ['A missing <code>break</code> after the matching case', 'A missing <code>default</code>', 'A semicolon after <code>switch (x)</code>', 'Wrong indentation'], answer: 0, explain: 'Without break, Java keeps running the next case too. That is the usual reason for extra output.' },
        { type: 'p', en: 'Stacking is also the way to accept both small and capital letters. A user might type <code>a</code> or <code>A</code>; stack both labels so they share one block.' },
        { type: 'code', code: J`
switch (answer) {
    case 'a':
    case 'A':
        System.out.println("You chose option A");
        break;
    default:
        System.out.println("Another option");
}
` },
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
`, stdin: '4', out: 'Days: 30', ar: 'جمعنا الأشهر التي لها نفس عدد الأيام تحت كتلة واحدة.' },
        { type: 'steps', title: 'Worked example: the season of a month', problem: 'Read a month number. Print <code>Winter</code> for 12, 1 and 2; <code>Spring</code> for 3, 4 and 5; <code>Summer</code> for 6, 7 and 8; <code>Autumn</code> for 9, 10 and 11; and <code>Invalid month</code> for anything else.',
          steps: [
            { en: 'Read the month.', code: J`
int month = input.nextInt();
` },
            { en: 'Winter months are not in order (12, 1, 2), but a switch does not care: stack the three labels.', code: J`
switch (month) {
    case 12: case 1: case 2:
        System.out.println("Winter");
        break;
` },
            { en: 'Each season is one group of three stacked labels with one break.', code: J`
    case 3: case 4: case 5:
        System.out.println("Spring");
        break;
    case 6: case 7: case 8:
        System.out.println("Summer");
        break;
    case 9: case 10: case 11:
        System.out.println("Autumn");
        break;
` },
            { en: 'default for every other number.', code: J`
    default:
        System.out.println("Invalid month");
}
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int month = input.nextInt();
        switch (month) {
            case 12: case 1: case 2:
                System.out.println("Winter");
                break;
            case 3: case 4: case 5:
                System.out.println("Spring");
                break;
            case 6: case 7: case 8:
                System.out.println("Summer");
                break;
            case 9: case 10: case 11:
                System.out.println("Autumn");
                break;
            default:
                System.out.println("Invalid month");
        }
    }
}
`, stdin: '7', out: 'Summer', ar: 'كل فصل مجموعة من ثلاث حالات مكدّسة تنتهي بـ break واحدة.' }
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
        'Stack case labels to share one block (for example small and capital letters).',
        'When tracing a switch, find the matching case, then follow the lines until a break.',
        'Fall-through on purpose can collect rewards: highest level first, no breaks.'
      ],
      rememberAr: 'بدون break ينتقل التنفيذ إلى الحالة التالية. نكدّس الحالات لنشاركها كتلة واحدة. عند التتبع ابحث عن الحالة المطابقة ثم اتبع حتى break.',
      practice: [
        { t: 'mcq', q: 'What happens when a matching case has no <code>break</code>?', options: ['A compile error', 'The switch ends anyway', 'Execution continues into the next case', 'The default case runs first'], answer: 2, explain: 'This is fall-through.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
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
    }
}
`, answer: J`
One
Two
`, explain: 'Case 1 has no break, so it falls into case 2, which prints Two and breaks.' },
        { t: 'output', q: 'What is printed? (Look at where <code>default</code> is.)', code: J`
public class Main {
    public static void main(String[] args) {
        int x = 4;
        switch (x) {
            case 3:
                System.out.println("three");
            default:
                System.out.println("other");
            case 5:
                System.out.println("five");
        }
    }
}
`, answer: J`
other
five
`, explain: 'No case equals 4, so Java jumps to default. It has no break, so it falls into case 5 too.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
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
    }
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
`, hint: 'Put <code>case 6:</code> and <code>case 7:</code> one above the other.', explain: 'Both days share one print line.' },
        { t: 'output', q: 'The loyalty card again. What is printed for level 3?', code: J`
public class Main {
    public static void main(String[] args) {
        int level = 3;
        switch (level) {
            case 3:
                System.out.println("Free delivery");
            case 2:
                System.out.println("Free gift");
            case 1:
                System.out.println("5% discount");
        }
    }
}
`, answer: J`
Free delivery
Free gift
5% discount
`, explain: 'Java jumps in at case 3. There is no break anywhere, so it falls through case 2 and case 1 as well. Level 3 collects all three rewards.' },
        { t: 'bug', q: 'Grades A and B should print only <code>Great</code>. For grade A the program prints <code>Great</code> and then <code>Pass</code>. Tap the line where something is missing.', code: J`
public class Main {
    public static void main(String[] args) {
        char grade = 'A';
        switch (grade) {
            case 'A':
            case 'B':
                System.out.println("Great");
            case 'C':
                System.out.println("Pass");
                break;
            default:
                System.out.println("Fail");
        }
    }
}
`, bug: [7, 8], fix: J`
public class Main {
    public static void main(String[] args) {
        char grade = 'A';
        switch (grade) {
            case 'A':
            case 'B':
                System.out.println("Great");
                break;
            case 'C':
                System.out.println("Pass");
                break;
            default:
                System.out.println("Fail");
        }
    }
}
`, hint: 'Stacking A and B is correct. What is missing at the end of their shared block?', explain: 'A and B are stacked on purpose, and that part is fine. But their shared block has no break, so after "Great" Java falls into case C and prints "Pass" too. Add <code>break;</code> after the Great line.', explainAr: 'تكديس A و B صحيح، لكن الكتلة المشتركة تحتاج break في نهايتها.' },
        { t: 'code', q: 'Read a quiz answer as one word. The correct answer is C. Print <code>Correct</code> for <code>C</code> or <code>c</code>; print <code>Wrong</code> for <code>A</code>, <code>a</code>, <code>B</code>, <code>b</code>, <code>D</code> or <code>d</code>; print <code>Invalid</code> for anything else. Use a String switch with stacked labels. Do not print any prompt.', qAr: 'اقرأ الإجابة. الصحيحة C (كبيرة أو صغيرة). استخدم{{g:|ي}} حالات مكدّسة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String answer = input.next();
        // switch with stacked labels
    }
}
`, tests: [{ stdin: 'c', expected: 'Correct' }, { stdin: 'B', expected: 'Wrong' }, { stdin: 'E', expected: 'Invalid' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String answer = input.next();
        switch (answer) {
            case "C":
            case "c":
                System.out.println("Correct");
                break;
            case "A": case "a":
            case "B": case "b":
            case "D": case "d":
                System.out.println("Wrong");
                break;
            default:
                System.out.println("Invalid");
        }
    }
}
`, hint: 'Stack <code>case "C":</code> and <code>case "c":</code>. Stack the six wrong letters in a second group.', explain: 'Each group of stacked labels shares one block and ends with one break. default catches letters such as E.' }
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
        { type: 'table', head: ['mark', '<code>mark &gt;= 60</code>', 'Value chosen', 'result'], rows: [
          ['45', 'false', 'the one after <code>:</code>', '"Fail"'],
          ['60', 'true', 'the one after <code>?</code>', '"Pass"'],
          ['99', 'true', 'the one after <code>?</code>', '"Pass"']
        ] },
        { type: 'p', en: 'Compare it with the if-else you already know. Both give <code>result</code> the same value. The if-else needs five lines; the conditional operator needs one. The meaning is exactly the same: a condition, a value for yes, a value for no.',
          ar: 'العامل ?: هو if-else قصيرة تختار قيمة.' },
        { type: 'code', code: J`
String result;
if (mark >= 60) {
    result = "Pass";
} else {
    result = "Fail";
}
` },
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
        { type: 'memory', title: 'max gets a value once', en: 'The conditional operator works out a value and puts it in the box. Like any box, <code>max</code> keeps that value even if <code>b</code> changes later.',
          code: J`
int a = 12, b = 9;
int max = (a > b) ? a : b;
b = 20;
`,
          frames: [
            { label: 'After <code>int a = 12, b = 9;</code>', vars: [{ name: 'a', type: 'int', value: '12' }, { name: 'b', type: 'int', value: '9' }] },
            { label: 'After <code>int max = (a &gt; b) ? a : b;</code> (12 &gt; 9 is true, so take a)', vars: [{ name: 'a', type: 'int', value: '12' }, { name: 'b', type: 'int', value: '9' }, { name: 'max', type: 'int', value: '12' }] },
            { label: 'After <code>b = 20;</code> (max is still 12)', vars: [{ name: 'a', type: 'int', value: '12' }, { name: 'b', type: 'int', value: '20' }, { name: 'max', type: 'int', value: '12' }] }
          ],
          ar: 'max يأخذ قيمته مرة واحدة، ولا يتغير عندما يتغير b بعد ذلك.' },
        { type: 'h', en: 'A handy use: one or many' },
        { type: 'p', en: 'Apps print "1 message" but "3 messages". The word changes with the number. The conditional operator chooses the right word right inside the text. Put the whole <code>?:</code> in parentheses so Java works it out before joining the text.',
          ar: 'نستخدم ?: لاختيار المفرد أو الجمع داخل النص، مع الأقواس.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int n = 1;
        System.out.println("You have " + n + (n == 1 ? " message" : " messages"));
        n = 3;
        System.out.println("You have " + n + (n == 1 ? " message" : " messages"));
    }
}
`, out: J`
You have 1 message
You have 3 messages
` },
        { type: 'lines', rows: [
          ['(n == 1 ? " message" : " messages")', 'When n is 1, choose " message". Otherwise choose " messages". The parentheses keep this choice together.'],
          ['n = 3;', 'Now n is 3, so the same line chooses " messages".']
        ] },
        { type: 'p', en: 'A good way to read any <code>?:</code> line is aloud, in three parts: "condition? then this, otherwise that". For example <code>int fee = isMember ? 0 : 25;</code> reads: "Is the person a member? Then the fee is 0, otherwise 25." The condition can be a boolean variable, a comparison, or a combination with <code>&amp;&amp;</code> and <code>||</code>.' },
        { type: 'check', q: 'What is the value of <code>fee</code>?', code: J`
boolean isMember = false;
int fee = isMember ? 0 : 25;
`, options: ['0', '25', 'false', 'An error'], answer: 1, explain: 'isMember is false, so the value after the colon is chosen: 25.' },
        { type: 'note', kind: 'tip', en: 'Use <code>?:</code> for a short choice between two values. For actions, or for more than two alternatives, an if statement is clearer.' },
        { type: 'note', kind: 'warn', en: 'You can put a <code>?:</code> inside another <code>?:</code>, but it quickly becomes hard to read: <code>s &gt;= 90 ? "A" : s &gt;= 80 ? "B" : "C"</code>. For three or more choices, an else-if chain is kinder to the reader.' },
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
`, stdin: '40 120', out: '120 is expensive', ar: 'استخدمنا ?: مرتين لاختيار قيمتين.' },
        { type: 'steps', title: 'Worked example: delivery fee and total', problem: 'An online shop charges a 15-riyal delivery fee for orders under 100 riyals; orders of 100 or more have free delivery. Read the order total and print two lines: the fee and the total to pay.',
          steps: [
            { en: 'Read the order total.', code: J`
int order = input.nextInt();
` },
            { en: 'Choose the fee with one line: 0 for big orders, 15 for small ones.', code: J`
int fee = (order >= 100) ? 0 : 15;
` },
            { en: 'Print the fee and the total. The parentheses around <code>order + fee</code> make Java add the numbers before joining the text.', code: J`
System.out.println("Fee: " + fee);
System.out.println("Total: " + (order + fee));
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int order = input.nextInt();
        int fee = (order >= 100) ? 0 : 15;
        System.out.println("Fee: " + fee);
        System.out.println("Total: " + (order + fee));
    }
}
`, stdin: '80', out: J`
Fee: 15
Total: 95
`, ar: '80 أقل من 100، فالرسوم 15 والإجمالي 95.' }
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
        'Put parentheses around it when you mix it with <code>+</code>, for example to choose "item" or "items".',
        'The value after <code>?</code> is for true, the value after <code>:</code> is for false.'
      ],
      rememberAr: 'الصيغة: الشرط ? قيمة-صح : قيمة-خطأ. يختار قيمة وليس عملاً. ضع أقواساً عند خلطه مع +.',
      practice: [
        { t: 'mcq', q: 'How many parts (operands) does the operator <code>? :</code> have?', options: ['One', 'Two', 'Three', 'Four'], answer: 2, explain: 'A condition and two values: it is the ternary operator.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(5 > 3 ? "yes" : "no");
    }
}
`, answer: 'yes', explain: '5 &gt; 3 is true, so the first value is chosen.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int a = 4, b = 10;
        int m = (a > b) ? a - b : b - a;
        System.out.println(m);
        System.out.println(a % 2 == 0 ? "even" : "odd");
    }
}
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
`, hint: 'Put the whole <code>?:</code> inside println.', explain: 'The conditional operator gives either "Pass" or "Fail", and println prints it.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int days = 1;
        System.out.println(days + (days == 1 ? " day" : " days") + " left");
        days = 0;
        System.out.println(days + (days == 1 ? " day" : " days") + " left");
    }
}
`, answer: J`
1 day left
0 days left
`, explain: 'When days is 1 the word is " day". When days is 0 the condition is false, so the word is " days". In English, zero also takes the plural.' },
        { t: 'bug', q: 'The program should print <code>Max: 12</code>. It does not compile. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int a = 7;
        int b = 12;
        System.out.println("Max: " + a > b ? a : b);
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        int a = 7;
        int b = 12;
        System.out.println("Max: " + ((a > b) ? a : b));
    }
}
`, hint: 'Which operator does Java do first: <code>+</code> or <code>&gt;</code>?', explain: 'Java does <code>+</code> before <code>&gt;</code>, so it first builds the text "Max: 7" and then tries to ask <code>"Max: 7" &gt; 12</code>. Text cannot be compared with a number, so the compiler stops with "bad operand types". Put the whole choice in parentheses: <code>"Max: " + ((a &gt; b) ? a : b)</code>.', explainAr: 'ضع{{g:|ي}} العامل ?: كله بين أقواس عند دمجه مع +.' },
        { t: 'bug', q: 'A mark of 75 should print <code>Pass</code>, but this program prints <code>Fail</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int mark = 75;
        String result = (mark >= 60) ? "Fail" : "Pass";
        System.out.println(result);
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int mark = 75;
        String result = (mark >= 60) ? "Pass" : "Fail";
        System.out.println(result);
    }
}
`, hint: 'Read it aloud: condition, THEN value for yes, OTHERWISE value for no.', explain: 'The value after <code>?</code> is chosen when the condition is true. Here the two values are swapped, so a true condition gives "Fail". Put "Pass" after the question mark and "Fail" after the colon.', explainAr: 'القيمة بعد ? للحالة الصحيحة، والقيمة بعد : للحالة الخاطئة.' },
        { t: 'code', q: 'Read the number of items in a shopping cart. Print <code>Cart: 1 item</code> when there is exactly one, and <code>Cart: N items</code> otherwise (for example <code>Cart: 4 items</code>). Use the conditional operator. Do not print any prompt.', qAr: 'اقرأ عدد المنتجات واطبع item للواحد و items لغير ذلك باستخدام ?:.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // choose the word with ?:
    }
}
`, tests: [{ stdin: '1', expected: 'Cart: 1 item' }, { stdin: '4', expected: 'Cart: 4 items' }, { stdin: '0', expected: 'Cart: 0 items' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        String word = (n == 1) ? "item" : "items";
        System.out.println("Cart: " + n + " " + word);
    }
}
`, hint: 'Choose the word first: <code>String word = (n == 1) ? "item" : "items";</code>', explain: 'Only exactly 1 takes the singular word. Every other number, even 0, takes "items".' }
      ]
    },
    {
      title: 'Boolean variables and flags',
      titleAr: 'المتغيرات المنطقية والأعلام',
      minutes: 30,
      body: [
        { type: 'h', en: 'Store a decision, use it many times' },
        { type: 'p', en: 'Some conditions are long. Imagine you need <code>day == 6 || day == 7</code> in three places in your program. You must type it three times, and every copy is a new chance for a typing mistake. A better way: work out the answer <b>once</b>, store it in a boolean variable with a clear name, and then use the name wherever you need it.',
          ar: 'احسب{{g:|ي}} الشرط مرة واحدة واحفظه في متغير منطقي باسم واضح، ثم استخدم{{g:|ي}} الاسم.' },
        { type: 'analogy', title: 'A note on the fridge', en: 'Your mother checks the fridge and writes a note on the door: "Milk: finished". Now everyone in the family reads the note. Nobody needs to open the fridge and check again. A boolean variable is that note: one check, many readers.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int day = 6;
        boolean isWeekend = day == 6 || day == 7;
        if (isWeekend) {
            System.out.println("No lectures today");
        } else {
            System.out.println("Lectures start at 8");
        }
        int gymOpens = isWeekend ? 10 : 6;
        System.out.println("Gym opens at " + gymOpens);
    }
}
`, out: J`
No lectures today
Gym opens at 10
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['boolean isWeekend = day == 6 || day == 7;', 'Work out the answer once: <code>true</code>. The name says what the answer means.'],
          ['if (isWeekend) {', 'Use the answer. The line reads like English: "if it is the weekend".'],
          ['int gymOpens = isWeekend ? 10 : 6;', 'Use the same answer again, with no new comparison.']
        ], ar: 'المتغير isWeekend يُحسب مرة ويُستخدم مرتين.' },
        { type: 'check', q: 'Why store a condition in a boolean variable?', options: ['The program reads like English and you do not type the same condition again', 'Java can only run an if with a variable', 'It makes the condition always true', 'It is needed for every if'], answer: 0, explain: 'A named boolean is clearer and avoids repeated (and possibly different) copies of the same condition. It is a good habit, not a rule.' },
        { type: 'h', en: 'Good names for booleans' },
        { type: 'p', en: 'A boolean answers a yes/no question, so its name should sound like that question. Start it with <b>is</b>, <b>has</b>, <b>can</b> or <b>should</b>: <code>isMember</code>, <code>hasDiscount</code>, <code>canVote</code>, <code>isOpen</code>. Then <code>if (hasDiscount)</code> reads like a sentence. Names such as <code>flag</code>, <code>check</code> or <code>x</code> tell the reader nothing.',
          ar: 'ابدأ{{g:|ي}} اسم المتغير المنطقي بـ is أو has أو can ليشبه سؤالاً جوابه نعم أو لا.' },
        { type: 'table', head: ['Weak name', 'Better name', 'Question it answers'], rows: [
          ['<code>flag</code>', '<code>hasPaid</code>', 'Has the student paid the fees?'],
          ['<code>check</code>', '<code>isOpen</code>', 'Is the shop open now?'],
          ['<code>x</code>', '<code>canVote</code>', 'Can this person vote?'],
          ['<code>notMember</code>', '<code>isMember</code>', 'Is the customer a member? (Positive names are easier: <code>!isMember</code> is clear, <code>!notMember</code> is confusing.)']
        ] },
        { type: 'check', q: 'Which is the best name for a boolean that says "the customer has a coupon"?', options: ['<code>coupon</code>', '<code>hasCoupon</code>', '<code>c</code>', '<code>notCoupon</code>'], answer: 1, explain: '<code>hasCoupon</code> sounds like a yes/no question, so <code>if (hasCoupon)</code> reads naturally.' },
        { type: 'h', en: 'Flags: a switch that turns on' },
        { type: 'p', en: 'Sometimes you check several things, and if <b>any</b> of them happens you want to remember it. A <b>flag</b> is a boolean that starts with one value (usually <code>false</code>) and is switched to <code>true</code> when something happens. At the end you look at the flag to know if it happened at least once.',
          ar: 'العَلَم متغير منطقي يبدأ بـ false ويصبح true عند حدوث شيء ما.' },
        { type: 'analogy', title: 'The flag on a mailbox', en: 'Some mailboxes have a small red flag. It is down when the box is empty. The postman raises it when he puts a letter inside. Later you only look at the flag: up means there is mail. In code, the flag starts <code>false</code>, and an if raises it to <code>true</code>.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int temp = 47;
        int wind = 20;
        boolean hasWarning = false;
        if (temp >= 45) {
            hasWarning = true;
        }
        if (wind >= 40) {
            hasWarning = true;
        }
        System.out.println("Warning today: " + hasWarning);
    }
}
`, out: 'Warning today: true' },
        { type: 'lines', rows: [
          ['boolean hasWarning = false;', 'The flag starts down: no warning yet.'],
          ['if (temp >= 45) {', '47 &gt;= 45 is true, so the next line raises the flag.'],
          ['if (wind >= 40) {', '20 &gt;= 40 is false, so the flag is not touched. It stays true.'],
          ['System.out.println("Warning today: " + hasWarning);', 'One look at the flag tells us whether <b>any</b> check raised it.']
        ] },
        { type: 'memory', title: 'Watch the flag go up', en: 'The flag changes only when a check is true. A false check never pulls it down again.',
          frames: [
            { label: 'After <code>boolean hasWarning = false;</code>', vars: [{ name: 'temp', type: 'int', value: '47' }, { name: 'wind', type: 'int', value: '20' }, { name: 'hasWarning', type: 'boolean', value: 'false' }] },
            { label: 'After the temperature check (47 &gt;= 45 is true)', vars: [{ name: 'temp', type: 'int', value: '47' }, { name: 'wind', type: 'int', value: '20' }, { name: 'hasWarning', type: 'boolean', value: 'true' }] },
            { label: 'After the wind check (20 &gt;= 40 is false: nothing changes)', vars: [{ name: 'temp', type: 'int', value: '47' }, { name: 'wind', type: 'int', value: '20' }, { name: 'hasWarning', type: 'boolean', value: 'true' }] }
          ],
          ar: 'يرتفع العلم مرة واحدة، ولا ينزل عندما يكون فحص آخر خاطئاً.' },
        { type: 'note', kind: 'warn', en: 'Give the flag its starting value <b>before</b> the checks. A boolean with no value cannot be read: Java says "variable might not have been initialized". Also notice that we use separate ifs here, not else-if, because every check must be done.' },
        { type: 'check', q: 'In the program above, change the values to <code>temp = 30</code> and <code>wind = 50</code>. What is printed?', options: ['Warning today: true', 'Warning today: false'], answer: 0, explain: 'The temperature check is false, but the wind check (50 &gt;= 40) is true, so it raises the flag.' },
        { type: 'h', en: 'Simpler conditions' },
        { type: 'p', en: 'Beginners often write more than needed. The extra words are not wrong, but they make the code longer and give more places for mistakes. Here are three long forms and their short forms. They mean exactly the same.' },
        { type: 'table', head: ['Long form', 'Short form'], rows: [
          ['<code>if (isMember == true)</code>', '<code>if (isMember)</code>'],
          ['<code>if (isMember == false)</code>', '<code>if (!isMember)</code>'],
          ['<code>if (mark &gt;= 60) { passed = true; } else { passed = false; }</code>', '<code>passed = mark &gt;= 60;</code>']
        ] },
        { type: 'p', en: 'The third row is the most useful. A comparison already gives true or false, so you can store it directly. There is no need for an if that says "if true, store true".',
          ar: 'المقارنة تعطي true أو false مباشرة، فخزّنها بدون if.' },
        { type: 'check', q: 'Which line does the same as <code>if (x &gt; 10) { big = true; } else { big = false; }</code>?', options: ['<code>big = x &gt; 10;</code>', '<code>big = true;</code>', '<code>big = x == 10;</code>', '<code>big = !(x &gt; 10);</code>'], answer: 0, explain: 'The comparison <code>x &gt; 10</code> is already true or false. Store it directly.' },
        { type: 'h', en: 'De Morgan\'s rules in plain words' },
        { type: 'p', en: 'Sometimes you need the <b>opposite</b> of a combined condition. "A person may NOT enter when it is not true that (they are 18 or older AND have an ID)." A NOT in front of parentheses is hard to read. Two simple rules, named after the mathematician De Morgan, show how to move the NOT inside.' },
        { type: 'list', items: [
          '<b>not (A and B)</b> is the same as <b>(not A) or (not B)</b>. In words: "not both" means "at least one is missing".',
          '<b>not (A or B)</b> is the same as <b>(not A) and (not B)</b>. In words: "neither" means "not this and not that".',
          'When the NOT moves inside, <b>AND becomes OR</b> and <b>OR becomes AND</b>, and every small question is flipped.'
        ], ar: 'عند إدخال ! داخل الأقواس: && تصبح || و || تصبح &&، وكل سؤال صغير ينعكس.' },
        { type: 'analogy', title: 'Tea and coffee', en: 'Your host asks: "Do you want tea and coffee?" You say: "Not both." That means you refuse at least one of them. Later the host asks: "Do you want tea or coffee?" You say: "Neither." That means no tea <b>and</b> no coffee. The NOT changed the "and" into "or", and the "or" into "and".' },
        { type: 'table', head: ['Comparison', 'Its opposite'], rows: [
          ['<code>a &gt; b</code>', '<code>a &lt;= b</code>'],
          ['<code>a &lt; b</code>', '<code>a &gt;= b</code>'],
          ['<code>a == b</code>', '<code>a != b</code>']
        ] },
        { type: 'code', code: J`
boolean refused1 = !(age >= 18 && hasId);
boolean refused2 = age < 18 || !hasId;
` },
        { type: 'lines', rows: [
          ['boolean refused1 = !(age >= 18 && hasId);', 'Refused = NOT (adult AND has an ID).'],
          ['boolean refused2 = age < 18 || !hasId;', 'The same meaning after De Morgan: too young OR no ID. <code>&gt;=</code> became <code>&lt;</code>, <code>hasId</code> became <code>!hasId</code>, and <code>&amp;&amp;</code> became <code>||</code>.']
        ] },
        { type: 'table', head: ['age', 'hasId', '<code>!(age &gt;= 18 &amp;&amp; hasId)</code>', '<code>age &lt; 18 || !hasId</code>'], rows: [
          ['20', 'true', 'false', 'false'],
          ['20', 'false', 'true', 'true'],
          ['15', 'true', 'true', 'true'],
          ['15', 'false', 'true', 'true']
        ] },
        { type: 'check', q: 'Which condition is the same as <code>!(temp &gt; 40 || wind &gt; 30)</code>?', options: ['<code>temp &lt;= 40 &amp;&amp; wind &lt;= 30</code>', '<code>temp &lt;= 40 || wind &lt;= 30</code>', '<code>temp &lt; 40 &amp;&amp; wind &lt; 30</code>', '<code>!temp &gt; 40 &amp;&amp; !wind &gt; 30</code>'], answer: 0, explain: 'NOT (A or B) = (not A) and (not B). The opposite of <code>&gt;</code> is <code>&lt;=</code>, not <code>&lt;</code>.' },
        { type: 'steps', title: 'Worked example: can the student register?', problem: 'A student wants to add a 3-hour course. Read three whole numbers: the CS101 mark, the hours already registered, and the fees status (1 = paid, 0 = not paid). The student may register when CS101 is passed (60 or more), the new total is at most 18 hours, and the fees are paid. Print <code>Registered</code>, or <code>Not registered</code> followed by every reason.',
          steps: [
            { en: 'Read the three numbers.', code: J`
int mark = input.nextInt();
int hours = input.nextInt();
int fees = input.nextInt();
` },
            { en: 'Turn each rule into a boolean with a clear name.', code: J`
boolean passedPre = mark >= 60;
boolean hasRoom = hours + 3 <= 18;
boolean paid = fees == 1;
` },
            { en: 'The final decision needs all three rules, so AND joins them.', code: J`
boolean canRegister = passedPre && hasRoom && paid;
` },
            { en: 'Use the boxes again to print every reason. Each reason is a separate if, because several reasons can be true at the same time.', code: J`
if (canRegister) {
    System.out.println("Registered");
} else {
    System.out.println("Not registered");
    if (!passedPre) {
        System.out.println("- Pass CS101 first");
    }
    if (!hasRoom) {
        System.out.println("- Too many hours");
    }
    if (!paid) {
        System.out.println("- Pay the fees first");
    }
}
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();
        int hours = input.nextInt();
        int fees = input.nextInt();
        boolean passedPre = mark >= 60;
        boolean hasRoom = hours + 3 <= 18;
        boolean paid = fees == 1;
        boolean canRegister = passedPre && hasRoom && paid;
        if (canRegister) {
            System.out.println("Registered");
        } else {
            System.out.println("Not registered");
            if (!passedPre) {
                System.out.println("- Pass CS101 first");
            }
            if (!hasRoom) {
                System.out.println("- Too many hours");
            }
            if (!paid) {
                System.out.println("- Pay the fees first");
            }
        }
    }
}
`, stdin: '75 17 0', out: J`
Not registered
- Too many hours
- Pay the fees first
`, ar: 'كل قاعدة في متغير باسم واضح، ثم استخدمنا المتغيرات نفسها لطباعة الأسباب.' }
      ],
      mistakes: [
        { title: 'Using = inside the condition', en: 'With a boolean, <code>if (isMember = true)</code> compiles! It <b>puts</b> true into isMember, so the condition is always true. Write <code>if (isMember)</code>.', code: J`
if (isMember = true) { ... }   // wrong: always runs
if (isMember) { ... }          // right
`, ar: 'if (isMember = true) تُسند القيمة فيصبح الشرط صحيحاً دائماً.' },
        { title: 'Flipping only half in De Morgan', en: 'When the NOT moves inside, AND must also become OR (and OR becomes AND).', code: J`
!(a && b)    // is NOT the same as  !a && !b
!(a && b)    // is the same as      !a || !b
` },
        { title: 'A flag with no starting value', en: 'If no check raises the flag, it has no value at all, so Java refuses to print it.', code: J`
boolean found;
if (x > 5) { found = true; }
System.out.println(found);   // error: might not have been initialized
` },
        { title: 'Negative names', en: 'A name like <code>notReady</code> makes conditions hard to read: <code>!notReady</code> means "ready". Use positive names such as <code>isReady</code>.' }
      ],
      remember: [
        'Store a long condition in a boolean with a clear name: <code>boolean isWeekend = day == 6 || day == 7;</code>',
        'Name booleans like yes/no questions: <code>isOpen</code>, <code>hasPaid</code>, <code>canVote</code>.',
        'A flag starts <code>false</code>; an if raises it to <code>true</code> when something happens.',
        'Write <code>if (isMember)</code> and <code>if (!isMember)</code>, never <code>== true</code>. Store comparisons directly: <code>passed = mark &gt;= 60;</code>',
        'De Morgan: <code>!(A &amp;&amp; B)</code> = <code>!A || !B</code> and <code>!(A || B)</code> = <code>!A &amp;&amp; !B</code>.'
      ],
      rememberAr: 'خزّن{{g:|ي}} الشرط الطويل في متغير منطقي باسم مثل isOpen. العلم يبدأ false ويصبح true عند حدوث شيء. اكتب{{g:|ي}} if (isMember) بدون == true. قانون دي مورغان: عند إدخال ! تنقلب && إلى || والعكس.',
      practice: [
        { t: 'mcq', q: 'Which name is best for a boolean that says whether the library is open?', options: ['<code>open1</code>', '<code>isOpen</code>', '<code>libraryFlag</code>', '<code>x</code>'], answer: 1, explain: '<code>isOpen</code> sounds like a yes/no question, so <code>if (isOpen)</code> reads like English.', qAr: 'ما أفضل اسم لمتغير منطقي يبين هل المكتبة مفتوحة؟' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int mark1 = 80;
        int mark2 = 45;
        boolean failedOne = false;
        if (mark1 < 60) {
            failedOne = true;
        }
        if (mark2 < 60) {
            failedOne = true;
        }
        System.out.println(failedOne);
        System.out.println(!failedOne);
    }
}
`, answer: J`
true
false
`, explain: '80 &lt; 60 is false, so the first check does nothing. 45 &lt; 60 is true, so the second check raises the flag. NOT true is false.' },
        { t: 'mcq', q: 'Which condition is the same as <code>!(isHot &amp;&amp; isHumid)</code>?', options: ['<code>!isHot || !isHumid</code>', '<code>!isHot &amp;&amp; !isHumid</code>', '<code>isHot || isHumid</code>', '<code>!isHot &amp;&amp; isHumid</code>'], answer: 0, explain: 'De Morgan: "not both" means at least one is false. AND becomes OR, and each side gets a NOT.' },
        { t: 'fill', q: 'Complete the flag: it starts down and goes up when any reading is above 100.', code: J`
boolean tooHigh = ___;
if (reading1 > 100) {
    tooHigh = ___;
}
if (reading2 > 100) {
    tooHigh = true;
}
`, answers: ['false', 'true'], explain: 'A flag starts <code>false</code> (nothing happened yet) and each check can raise it to <code>true</code>.' },
        { t: 'bug', q: 'Only members pay 80; others pay 100. This customer is not a member, but the program prints <code>Price: 80</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        boolean isMember = false;
        int price = 100;
        if (isMember = true) {
            price = 80;
        }
        System.out.println("Price: " + price);
    }
}
`, bug: 5, fix: J`
public class Main {
    public static void main(String[] args) {
        boolean isMember = false;
        int price = 100;
        if (isMember) {
            price = 80;
        }
        System.out.println("Price: " + price);
    }
}
`, hint: 'How many equals signs are in the condition? What does one equals sign do?', explain: '<code>isMember = true</code> is an assignment, not a question. It stores true in isMember, and the condition becomes true, so every customer gets 80. With a boolean, the compiler cannot catch this. Write simply <code>if (isMember)</code>. Then the program prints <code>Price: 100</code>.', explainAr: 'العلامة = تُسند true فيصبح الشرط صحيحاً دائماً. اكتب{{g:|ي}} if (isMember).' },
        { t: 'code', q: 'Read an age and a number for a student card (1 = has a card, 0 = no card). A person gets a discount if the age is under 12, or 60 or more, or the person has a student card. Store the answer in a boolean named <code>hasDiscount</code>, then print <code>Price: 20</code> with a discount or <code>Price: 40</code> without. Do not print any prompt.', qAr: 'اقرأ العمر وبطاقة الطالب (1 أو 0). خزّن{{g:|ي}} الجواب في hasDiscount ثم اطبع{{g:|ي}} السعر.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        int card = input.nextInt();
        // boolean hasDiscount = ...
    }
}
`, tests: [{ stdin: '10 0', expected: 'Price: 20' }, { stdin: '30 0', expected: 'Price: 40' }, { stdin: '30 1', expected: 'Price: 20' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        int card = input.nextInt();
        boolean hasDiscount = age < 12 || age >= 60 || card == 1;
        if (hasDiscount) {
            System.out.println("Price: 20");
        } else {
            System.out.println("Price: 40");
        }
    }
}
`, hint: 'Three reasons, any one is enough: join them with <code>||</code>.', explain: 'The boolean collects the three reasons with OR. Then <code>if (hasDiscount)</code> reads like a sentence.' }
      ]
    },
    {
      title: 'Comparing text and decimal numbers',
      titleAr: 'مقارنة النصوص والأعداد العشرية',
      minutes: 30,
      body: [
        { type: 'h', en: 'Decisions about text' },
        { type: 'p', en: 'Many decisions are about words, not numbers. Did the user answer "yes"? Is the city "Riyadh"? Is the password right? You already know how to read one word with <code>input.next()</code>. Now you need a safe way to ask: are these two texts the same?',
          ar: 'كثير من القرارات تتعلق بالنصوص: هل الجواب yes؟ هل المدينة الرياض؟' },
        { type: 'analogy', title: 'Two copies of a word', en: 'Two students each write the word "Riyadh" on their own sheet of paper. Are the words the same? Yes. Are the two sheets the same sheet? No. Java can ask both questions about text: "same letters?" and "same sheet of paper?". For decisions you almost always want "same letters?".' },
        { type: 'p', en: 'To ask "same letters?", write the first text, a dot, the word <code>equals</code>, and the second text in parentheses. The answer is true or false, so it fits inside an if. For now, learn it as a pattern: <code>text1.equals(text2)</code>.' },
        { type: 'code', code: J`
String city = input.next();
if (city.equals("Riyadh")) {
    System.out.println("Free delivery");
}
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['String city = input.next();', 'Read one word, for example <code>Riyadh</code>.'],
          ['city.equals("Riyadh")', 'Ask: does <code>city</code> have exactly the same letters as "Riyadh"? The answer is true or false.'],
          ['System.out.println("Free delivery");', 'Runs only when the letters match.']
        ], ar: 'لمقارنة النصوص نكتب city.equals("Riyadh") وليس ==.' },
        { type: 'check', q: 'Which condition checks whether <code>answer</code> is the word yes?', options: ['<code>answer == "yes"</code>', '<code>answer.equals("yes")</code>', '<code>answer = "yes"</code>', '<code>equals(answer, "yes")</code>'], answer: 1, explain: 'Text is compared with <code>equals</code>. <code>==</code> can give false even when the letters match, and a single <code>=</code> is an assignment.' },
        { type: 'h', en: 'Why == fails for text' },
        { type: 'p', en: 'This is a famous trap. For numbers, <code>==</code> compares the values. A <code>String</code> is stored differently: the variable holds an <b>arrow</b> to the place where the letters are kept. <code>==</code> compares the arrows ("same sheet of paper?"), not the letters. Text typed by the user is kept on a new sheet, so <code>==</code> says false even when the letters are the same.' },
        { type: 'code', run: true, stdin: 'Riyadh', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String typed = input.next();
        String city = "Riyadh";
        System.out.println(typed == city);
        System.out.println(typed.equals(city));
    }
}
`, out: J`
false
true
` },
        { type: 'memory', title: 'Two arrows, the same letters', en: 'The user typed Riyadh. The two variables point to two different places (A and B) that hold the same letters.',
          frames: [
            { label: 'After <code>String typed = input.next();</code>', vars: [{ name: 'typed', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'letters', value: '"Riyadh"' }] }] },
            { label: 'After <code>String city = "Riyadh";</code>', vars: [{ name: 'typed', type: 'String', ref: 'A' }, { name: 'city', type: 'String', ref: 'B' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'letters', value: '"Riyadh"' }] }, { id: 'B', cls: 'String', fields: [{ name: 'letters', value: '"Riyadh"' }] }] },
            { label: '<code>typed == city</code> compares arrows: A and B are different, so false. <code>typed.equals(city)</code> compares letters: the same, so true.', vars: [{ name: 'typed', type: 'String', ref: 'A' }, { name: 'city', type: 'String', ref: 'B' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'letters', value: '"Riyadh"' }] }, { id: 'B', cls: 'String', fields: [{ name: 'letters', value: '"Riyadh"' }] }] }
          ],
          ar: 'العلامة == تقارن الأسهم (المكان)، أما equals فتقارن الحروف.' },
        { type: 'note', kind: 'exam', en: 'Sometimes <code>==</code> seems to work, for example when both texts are written inside the program. Do not trust it: it depends on how Java stored the text. Always use <code>equals</code> for text.', ar: 'لا تعتمد{{g:|ي}} على == مع النصوص حتى لو بدت صحيحة أحياناً.' },
        { type: 'p', en: 'For "not equal", put <code>!</code> in front of the whole test:' },
        { type: 'code', code: J`
if (!password.equals("Riyadh2026")) {
    System.out.println("Wrong password");
}
` },
        { type: 'check', q: 'The user types <code>Jeddah</code> into <code>typed = input.next()</code>. What does <code>typed.equals("Jeddah")</code> give?', options: ['true', 'false', 'It depends on the computer', 'An error'], answer: 0, explain: 'equals compares the letters, and they are the same. (With <code>==</code> the answer would be false here, which is why we never use it for text.)' },
        { type: 'h', en: 'Ignoring capital letters' },
        { type: 'p', en: '<code>equals</code> is strict: "Yes", "YES" and "yes" are three different texts for it. But a user does not care about capitals. For answers such as yes/no or city names, use <code>equalsIgnoreCase</code>: the same letters, and capitals do not matter. For passwords keep <code>equals</code>, because capitals matter there.',
          ar: 'equalsIgnoreCase تتجاهل الفرق بين الحروف الكبيرة والصغيرة، و equals لا تتجاهله.' },
        { type: 'analogy', title: 'A teacher reading the class list', en: 'When a teacher reads "SARA" or "Sara" on a list, it is the same student. <code>equalsIgnoreCase</code> reads text like that teacher. <code>equals</code> reads like a strict machine that notices every capital letter.' },
        { type: 'code', code: J`
String answer = input.next();
if (answer.equalsIgnoreCase("yes")) {
    System.out.println("Order confirmed");
}
` },
        { type: 'table', head: ['User types', '<code>equals("yes")</code>', '<code>equalsIgnoreCase("yes")</code>'], rows: [
          ['yes', 'true', 'true'],
          ['Yes', 'false', 'true'],
          ['YES', 'false', 'true'],
          ['yess', 'false', 'false'],
          ['no', 'false', 'false']
        ] },
        { type: 'check', q: 'Which one should you use to check a password?', options: ['<code>equals</code>', '<code>equalsIgnoreCase</code>', '<code>==</code>'], answer: 0, explain: 'In a password, capitals matter: "Riyadh2026" and "riyadh2026" are different passwords. So use the strict <code>equals</code>.' },
        { type: 'h', en: 'Decimals are not exact' },
        { type: 'p', en: 'Now a surprise about <code>double</code>. The computer stores decimals in binary (only 0 and 1), and most decimals, such as 0.1, cannot be stored exactly. It is like writing 1/3 as 0.3333: a tiny piece is always lost. So a calculation can be wrong in the 17th digit, and <code>==</code> sees that tiny difference.',
          ar: 'الأعداد العشرية تُخزن بخطأ صغير جداً، لذلك قد تفشل المقارنة بـ ==.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        double total = 0.1 + 0.2;
        System.out.println(total);
        System.out.println(total == 0.3);
    }
}
`, out: J`
0.30000000000000004
false
` },
        { type: 'lines', rows: [
          ['double total = 0.1 + 0.2;', 'You expect 0.3, but the stored value is a tiny bit more.'],
          ['System.out.println(total);', 'Prints 0.30000000000000004.'],
          ['System.out.println(total == 0.3);', 'The two values differ in the 17th digit, so <code>==</code> says false.']
        ] },
        { type: 'analogy', title: 'Measuring with a ruler', en: 'Two carpenters each cut a 30 cm shelf. One shelf is 30.0001 cm, the other is 29.9999 cm. Nobody says they are different: the difference is much smaller than a millimetre. For doubles we do the same: two values count as equal when they are <b>close enough</b>.' },
        { type: 'h', en: 'Compare doubles with a small tolerance' },
        { type: 'p', en: 'The <b>tolerance</b> is the biggest difference we accept, for example 0.0001. Work out the difference, then check that it is between minus the tolerance and plus the tolerance. That is a range test, so it uses AND. (In Unit 4 you will meet <code>Math.abs</code>, which makes this a little shorter.)' },
        { type: 'code', code: J`
double diff = total - 0.3;
boolean same = diff < 0.0001 && diff > -0.0001;
` },
        { type: 'lines', rows: [
          ['double diff = total - 0.3;', 'The difference is tiny (about 0.00000000000000006).'],
          ['diff < 0.0001 && diff > -0.0001', 'Is the difference inside the range from -0.0001 to 0.0001? Yes, so <code>same</code> is <code>true</code>.']
        ], ar: 'نعتبر العددين متساويين إذا كان الفرق بينهما أصغر من قيمة صغيرة جداً.' },
        { type: 'table', head: ['a', 'b', 'diff = a - b', 'same (tolerance 0.0001)'], rows: [
          ['0.1 + 0.2', '0.3', 'about 0.00000000000000006', 'true'],
          ['10.5', '10.0', '0.5', 'false'],
          ['9.99', '10.0', 'about -0.01', 'false']
        ] },
        { type: 'note', kind: 'warn', en: '<code>&lt;</code> and <code>&gt;</code> are fine with doubles: <code>temp &gt; 38.0</code> works well. The danger is <code>==</code> and <code>!=</code> on decimals that come from a calculation.' },
        { type: 'check', q: 'Why can <code>0.1 + 0.2 == 0.3</code> be false?', options: ['Decimals are stored with tiny errors', 'Java cannot add doubles', '0.3 is not a double', '<code>==</code> is not allowed with doubles'], answer: 0, explain: 'Most decimals cannot be stored exactly in binary, so the sum is a tiny bit different from 0.3. <code>==</code> is allowed, but it sees that tiny difference.' },
        { type: 'steps', title: 'Worked example: a simple login', problem: 'A study app has one user. The username is <code>sara</code> (capitals do not matter) and the password is <code>Riyadh2026</code> (capitals matter). Read a username and a password (one word each) and print <code>Welcome</code> or <code>Wrong username or password</code>.',
          steps: [
            { en: 'Read two words.', code: J`
String user = input.next();
String pass = input.next();
` },
            { en: 'The username ignores capitals: equalsIgnoreCase.', code: J`
boolean userOk = user.equalsIgnoreCase("sara");
` },
            { en: 'The password is strict: equals.', code: J`
boolean passOk = pass.equals("Riyadh2026");
` },
            { en: 'Both must be right: AND.', code: J`
if (userOk && passOk) {
    System.out.println("Welcome");
} else {
    System.out.println("Wrong username or password");
}
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String user = input.next();
        String pass = input.next();
        boolean userOk = user.equalsIgnoreCase("sara");
        boolean passOk = pass.equals("Riyadh2026");
        if (userOk && passOk) {
            System.out.println("Welcome");
        } else {
            System.out.println("Wrong username or password");
        }
    }
}
`, stdin: 'SARA Riyadh2026', out: 'Welcome', ar: 'اسم المستخدم بـ equalsIgnoreCase وكلمة المرور بـ equals.' },
        { type: 'steps', title: 'Worked example: check a card payment', problem: 'A card machine charged a customer for two items. Read the two prices and the amount charged (three decimals). Print the sum, then compare it with the charge in two ways: with <code>==</code> and with a tolerance of 0.001.',
          steps: [
            { en: 'Read three doubles.', code: J`
double p1 = input.nextDouble();
double p2 = input.nextDouble();
double charged = input.nextDouble();
` },
            { en: 'Add the prices and print the sum, so we can see the tiny error.', code: J`
double sum = p1 + p2;
System.out.println("Sum: " + sum);
` },
            { en: 'Compare with <code>==</code> (the unsafe way).', code: J`
System.out.println("Same with ==: " + (sum == charged));
` },
            { en: 'Compare with a tolerance (the safe way).', code: J`
double diff = sum - charged;
boolean same = diff < 0.001 && diff > -0.001;
System.out.println("Same with tolerance: " + same);
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double p1 = input.nextDouble();
        double p2 = input.nextDouble();
        double charged = input.nextDouble();
        double sum = p1 + p2;
        System.out.println("Sum: " + sum);
        System.out.println("Same with ==: " + (sum == charged));
        double diff = sum - charged;
        boolean same = diff < 0.001 && diff > -0.001;
        System.out.println("Same with tolerance: " + same);
    }
}
`, stdin: '10.1 20.2 30.3', out: J`
Sum: 30.299999999999997
Same with ==: false
Same with tolerance: true
`, ar: 'المجموع 30.299999999999997 وليس 30.3 تماماً، لذلك فشلت == ونجحت المقارنة بالتسامح.' }
      ],
      mistakes: [
        { title: 'Comparing text with ==', en: 'It compares arrows, not letters, so it can say false for the same word.', code: J`
if (city == "Riyadh") { ... }        // wrong
if (city.equals("Riyadh")) { ... }   // right
`, ar: 'استخدم{{g:|ي}} equals للنصوص.' },
        { title: 'Spelling the method wrong', en: 'It is exactly <code>equals</code>, all small letters, with an s at the end. <code>equalsIgnoreCase</code> has a capital I and a capital C.', code: J`
city.Equals("Riyadh")            // error
city.equalsignorecase("riyadh")  // error
` },
        { title: 'Using == for calculated decimals', en: 'A tiny error makes the test false.', code: J`
if (0.1 + 0.2 == 0.3) { ... }   // false!
` },
        { title: 'Checking only one side of the tolerance', en: '<code>diff &lt; 0.0001</code> alone is also true for a big negative difference such as -5.0. Check both sides.', code: J`
boolean same = diff < 0.0001;                      // wrong
boolean same = diff < 0.0001 && diff > -0.0001;    // right
` }
      ],
      remember: [
        'Compare text with <code>a.equals(b)</code>, never with <code>==</code>.',
        '<code>==</code> on Strings compares arrows (places), not letters.',
        'Use <code>equalsIgnoreCase</code> when capitals do not matter (yes/no, city names), and <code>equals</code> for passwords.',
        'Decimals carry tiny errors: <code>0.1 + 0.2</code> is <code>0.30000000000000004</code>.',
        'Compare doubles with a tolerance: <code>diff &lt; 0.0001 &amp;&amp; diff &gt; -0.0001</code>.'
      ],
      rememberAr: 'قارن{{g:|ي}} النصوص بـ equals وليس ==. استخدم{{g:|ي}} equalsIgnoreCase عندما لا تهم الحروف الكبيرة. الأعداد العشرية فيها أخطاء صغيرة، فقارنها بفرق صغير مسموح.',
      practice: [
        { t: 'mcq', q: 'Which line compares two Strings <code>a</code> and <code>b</code> correctly?', options: ['<code>a == b</code>', '<code>a.equals(b)</code>', '<code>a = b</code>', '<code>a.equal(b)</code>'], answer: 1, explain: '<code>equals</code> compares the letters. <code>==</code> compares the arrows, <code>=</code> assigns, and <code>equal</code> without s does not exist.', qAr: 'كيف نقارن نصين بشكل صحيح؟' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        String answer = "YES";
        System.out.println(answer.equals("yes"));
        System.out.println(answer.equalsIgnoreCase("yes"));
        System.out.println(!answer.equals("no"));
    }
}
`, answer: J`
false
true
true
`, explain: '"YES" and "yes" differ in capitals, so equals is false but equalsIgnoreCase is true. "YES" is not "no", so equals is false and NOT false is true.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        double a = 0.1 + 0.2;
        double diff = a - 0.3;
        System.out.println(a == 0.3);
        System.out.println(diff < 0.001 && diff > -0.001);
    }
}
`, answer: J`
false
true
`, explain: 'The sum is 0.30000000000000004, so <code>==</code> is false. The difference is tiny, inside the tolerance, so the second line is true.' },
        { t: 'fill', q: 'Free delivery for Riyadh, whatever capitals the user types (riyadh, RIYADH, Riyadh...).', code: J`
if (city.___("Riyadh")) {
    System.out.println("Free delivery");
}
`, answers: ['equalsIgnoreCase'], explain: '<code>equalsIgnoreCase</code> compares the letters and ignores capitals.' },
        { t: 'bug', q: 'The user types <code>yes</code>, but the program prints <code>Cancelled</code>. Tap the line with the bug.', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String answer = input.next();
        if (answer == "yes") {
            System.out.println("Confirmed");
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
            System.out.println("Confirmed");
        } else {
            System.out.println("Cancelled");
        }
    }
}
`, hint: 'How must two texts be compared?', explain: 'The typed word is stored in a new place, so <code>answer == "yes"</code> compares two different arrows and gives false, even though the letters match. <code>answer.equals("yes")</code> compares the letters and gives true, so the program prints Confirmed.', explainAr: 'العلامة == تقارن المكان وليس الحروف. استخدم{{g:|ي}} equals.' },
        { t: 'code', q: 'Read a city name (one word). Print <code>Free delivery</code> if it is Riyadh, whatever the capitals. Otherwise print <code>Delivery: 25 SAR</code>. Do not print any prompt.', qAr: 'اقرأ اسم المدينة. التوصيل مجاني للرياض بأي شكل للحروف، وإلا 25 ريالاً.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String city = input.next();
        // compare the text here
    }
}
`, tests: [{ stdin: 'riyadh', expected: 'Free delivery' }, { stdin: 'RIYADH', expected: 'Free delivery' }, { stdin: 'Jeddah', expected: 'Delivery: 25 SAR' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String city = input.next();
        if (city.equalsIgnoreCase("Riyadh")) {
            System.out.println("Free delivery");
        } else {
            System.out.println("Delivery: 25 SAR");
        }
    }
}
`, hint: 'Capitals do not matter, so use <code>equalsIgnoreCase</code>.', explain: 'equalsIgnoreCase treats riyadh, RIYADH and Riyadh as the same text.' },
        { t: 'code', q: 'Read three decimals: a, b and a claimed total. Print <code>Correct</code> if a + b is equal to the total within a tolerance of 0.0001, otherwise print <code>Wrong</code>. Do not print any prompt.', qAr: 'اقرأ a و b والمجموع المُدّعى. اطبع Correct إذا كان a + b يساوي المجموع ضمن فرق 0.0001.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double a = input.nextDouble();
        double b = input.nextDouble();
        double total = input.nextDouble();
        // compare with a tolerance
    }
}
`, tests: [{ stdin: '0.1 0.2 0.3', expected: 'Correct' }, { stdin: '1.5 2.5 4.0', expected: 'Correct' }, { stdin: '1.5 2.5 5', expected: 'Wrong' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double a = input.nextDouble();
        double b = input.nextDouble();
        double total = input.nextDouble();
        double diff = a + b - total;
        if (diff < 0.0001 && diff > -0.0001) {
            System.out.println("Correct");
        } else {
            System.out.println("Wrong");
        }
    }
}
`, hint: 'Work out <code>diff = a + b - total</code>, then check that it is between -0.0001 and 0.0001.', explain: 'With == the first test (0.1 + 0.2 and 0.3) would print Wrong. The tolerance accepts the tiny error.' }
      ]
    },
    {
      title: 'Testing every path',
      titleAr: 'اختبار كل المسارات',
      minutes: 25,
      body: [
        { type: 'h', en: 'One good run is not enough' },
        { type: 'p', en: 'Your grade program printed the right letter for 95 and for 75. Is it correct? Not yet! A student with exactly 90 might still get a B, because someone typed <code>&gt;</code> instead of <code>&gt;=</code>. A program with decisions has many roads, and each road can hide a mistake. <b>Testing</b> means choosing inputs on purpose, so that every road is walked at least once and every edge is checked.',
          ar: 'الاختبار يعني اختيار مدخلات مقصودة تمر بكل الطرق في البرنامج.' },
        { type: 'analogy', title: 'Checking a new building', en: 'Before a new school opens, an inspector opens <b>every</b> door and tries <b>every</b> light switch, not only the main entrance. A door that nobody tries might be locked on the first day. Each branch of your program is a door.' },
        { type: 'h', en: 'Count the paths' },
        { type: 'p', en: 'A <b>path</b> is one road through the program from start to end. An if with no else has 2 paths: the block runs, or it is skipped. An if-else has 2 paths. A chain with 4 conditions and a final else has 5 paths. You need at least one test input for each path.',
          ar: 'المسار طريق واحد عبر البرنامج. نحتاج مدخلاً واحداً على الأقل لكل مسار.' },
        { type: 'table', head: ['Code shape', 'Paths', 'Example test marks'], rows: [
          ['<code>if</code> (no else)', '2', '75 (block runs), 40 (block skipped)'],
          ['<code>if-else</code>', '2', '75 (if block), 40 (else block)'],
          ['A/B/C/D/F chain: 4 conditions + final else', '5', '95, 85, 75, 65, 30'],
          ['outer if-else with an if-else inside each branch', '4', 'one input for each inner block']
        ] },
        { type: 'code', code: J`
if (mark >= 60) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}
` },
        { type: 'lines', rows: [
          ['if (mark >= 60) {', 'Path 1 goes through the if block. Test it with 75.'],
          ['} else {', 'Path 2 goes through the else block. Test it with 40.']
        ] },
        { type: 'check', q: 'How many paths does an else-if chain with 3 conditions and a final else have?', options: ['3', '4', '5', '1'], answer: 1, explain: 'One path for each condition (3) plus one for the final else: 4.' },
        { type: 'h', en: 'Test the boundaries' },
        { type: 'p', en: 'Most decision bugs are not in the middle; they sit at the edges. Did you write <code>&gt;</code> or <code>&gt;=</code>? <code>&lt;</code> or <code>&lt;=</code>? Testing 75 and 40 never shows the difference. The values right at the edge do. For <code>mark &gt;= 60</code>, test 59 (just below), 60 (exactly) and 61 (just above). Also test the smallest and largest allowed values, such as 0 and 100. These are called <b>boundary values</b>.',
          ar: 'معظم الأخطاء عند الحدود: جرّب{{g:|ي}} 59 و 60 و 61، وكذلك 0 و 100.' },
        { type: 'analogy', title: 'The fence posts', en: 'If you want to know where a garden ends, you walk to the fence, not to the middle of the grass. Boundary tests walk right up to the fence and touch the posts.' },
        { type: 'code', run: true, stdin: '60', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();
        if (mark > 60) {
            System.out.println("Pass");
        } else {
            System.out.println("Fail");
        }
    }
}
`, out: 'Fail' },
        { type: 'p', en: 'The rule says "60 or more passes". With 75 and 40 this program looks perfect. Only the boundary test 60 shows the bug: it prints Fail. Here is the test table that found it.' },
        { type: 'table', head: ['Input', 'Expected (from the rule)', 'Actual (from the program)', 'OK?'], rows: [
          ['75', 'Pass', 'Pass', 'yes'],
          ['40', 'Fail', 'Fail', 'yes'],
          ['61', 'Pass', 'Pass', 'yes'],
          ['60', 'Pass', 'Fail', '<b>NO</b>'],
          ['59', 'Fail', 'Fail', 'yes']
        ] },
        { type: 'memory', title: 'Three boundary runs of the buggy program', en: 'The same program, run three times with the inputs around the edge. Look at the middle run.',
          frames: [
            { label: 'Test 59: 59 &gt; 60 is false, so the else block prints Fail. Expected Fail: OK.', vars: [{ name: 'mark', type: 'int', value: '59' }] },
            { label: 'Test 60: 60 &gt; 60 is false, so the else block prints Fail. Expected Pass: BUG!', vars: [{ name: 'mark', type: 'int', value: '60' }] },
            { label: 'Test 61: 61 &gt; 60 is true, so the if block prints Pass. Expected Pass: OK.', vars: [{ name: 'mark', type: 'int', value: '61' }] }
          ],
          ar: 'القيمة 60 فقط كشفت الخطأ، لأن > لا تشمل 60.' },
        { type: 'check', q: 'Which pair of inputs tests the boundary of <code>age &gt;= 18</code>?', options: ['17 and 18', '5 and 50', '18 and 100', '0 and 30'], answer: 0, explain: '17 is just below the edge and 18 is exactly on it. They fall on two different roads.' },
        { type: 'h', en: 'Write a test table before you run' },
        { type: 'p', en: 'A <b>test table</b> is a plan: the input, the path or edge it tests, and the expected output. Work out the expected output <b>by hand, from the rules</b>, before you run the program. If you look at the program output first, you will just copy its mistakes into your table. Here is a test plan for the A to F grade program.',
          ar: 'اكتب{{g:|ي}} الناتج المتوقع من القاعدة قبل تشغيل البرنامج.' },
        { type: 'table', head: ['Input', 'Why this input?', 'Expected'], rows: [
          ['95', 'middle of the A path', 'A'],
          ['90', 'lowest A (edge)', 'A'],
          ['89', 'highest B, just below 90', 'B'],
          ['80', 'lowest B (edge)', 'B'],
          ['70', 'lowest C (edge)', 'C'],
          ['60', 'lowest D (edge)', 'D'],
          ['59', 'highest F, just below 60', 'F'],
          ['0', 'smallest allowed mark', 'F'],
          ['100', 'largest allowed mark', 'A']
        ] },
        { type: 'note', kind: 'tip', en: 'Keep your test table next to your code. When you change the program later, run the same tests again. Teachers and companies do exactly this.' },
        { type: 'h', en: 'Test bad inputs and combined conditions' },
        { type: 'p', en: 'Users make mistakes: they type -5 or 150 for a mark. A careful program checks the input first and prints a message. Then your test table also needs the values just outside the allowed range: -1 and 101. And a condition with <code>&amp;&amp;</code> or <code>||</code> has its own small paths: each side can be true or false. For <code>a &amp;&amp; b</code> try all four mixes: both true, only a, only b, neither.' },
        { type: 'code', code: J`
if (mark < 0 || mark > 100) {
    System.out.println("Invalid mark");
} else if (mark >= 60) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}
` },
        { type: 'lines', rows: [
          ['if (mark < 0 || mark > 100) {', 'The guard: catch impossible marks first. Test with -1 and 101.'],
          ['} else if (mark >= 60) {', 'Only valid marks reach this question. Test with 60 and 100.'],
          ['} else {', 'Valid marks below 60. Test with 59 and 0.']
        ] },
        { type: 'check', q: 'Marks may be 0 to 100. Which pair tests the <b>invalid</b> edges?', options: ['-1 and 101', '0 and 100', '59 and 60', '-100 and 1000'], answer: 0, explain: '-1 and 101 are the first values outside the range on each side. 0 and 100 are valid edges, which you should test too.' },
        { type: 'steps', title: 'Worked example: plan the tests for the museum price', problem: 'Museum rules (from the else-if lesson): under 5 free, under 18 pays 10, under 60 pays 25, and 60 or older pays 15. Plan the tests, then run the program with one of them.',
          steps: [
            { en: '<b>Count the paths.</b> Three conditions and a final else: 4 paths. Middle values: 3, 10, 30, 70.' },
            { en: '<b>Find the boundaries.</b> Each pair sits on two roads: 4 and 5, 17 and 18, 59 and 60.' },
            { en: '<b>Write the expected prices by hand.</b> 3 → 0, 4 → 0, 5 → 10, 17 → 10, 18 → 25, 59 → 25, 60 → 15, 70 → 15.' },
            { en: '<b>Run each test</b> and compare the actual output with the table. Here is the run for the boundary 60.', code: J`
} else if (age < 60) {
    price = 25;
} else {
    price = 15;
}
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
`, stdin: '60', out: 'Price: 15', ar: 'ثمانية اختبارات تغطي كل المسارات وكل الحدود.' },
        { type: 'steps', title: 'Worked example: a test table finds a bug', problem: 'Rule: a parcel up to 5 kg (5 included) costs 20 riyals; heavier parcels cost 35. A first version of the program used <code>weight &lt; 5</code>. Use a test table to find the bug, then fix it.',
          steps: [
            { en: '<b>Plan:</b> path tests 3 and 8, boundary tests 5 and 6. Expected: 3 → 20, 8 → 35, 5 → 20, 6 → 35.' },
            { en: '<b>Run the first version.</b> 3, 8 and 6 are fine, but 5 prints 35. The table shows exactly where the problem is.', code: J`
if (weight < 5) {     // first version: 5 goes to the else road
` },
            { en: '<b>Fix the line:</b> "up to 5, 5 included" is <code>&lt;=</code>.', code: J`
if (weight <= 5) {
` },
            { en: '<b>Run all four tests again</b>, not only the one that failed. A fix can break something else.' }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int weight = input.nextInt();
        int fee;
        if (weight <= 5) {
            fee = 20;
        } else {
            fee = 35;
        }
        System.out.println("Fee: " + fee);
    }
}
`, stdin: '5', out: 'Fee: 20', ar: 'اختبار الحد 5 كشف أن &lt; يجب أن تكون &lt;=.' }
      ],
      mistakes: [
        { title: 'Testing only easy middle values', en: '75 and 40 rarely find bugs. Always add the boundary values (59, 60) and the smallest and largest values.', ar: 'لا تكتف{{g:|ي}} بالقيم في المنتصف.' },
        { title: 'Writing the expected output after running', en: 'If you copy the expected value from the program, the table will agree with every bug. Work out the expected value from the rule first.' },
        { title: 'Forgetting a path', en: 'A branch that is never tested can hide a typo, such as printing <code>Fial</code> instead of <code>Fail</code>. Each path needs at least one test.' },
        { title: 'Forgetting bad inputs', en: 'Test the values just outside the allowed range (-1, 101). A program without a guard gives strange answers for them, for example a letter grade for a mark of 150.' }
      ],
      remember: [
        'A path is one road through the program; test every path at least once.',
        'Bugs hide at the edges: test just below, exactly on, and just above each limit (59, 60, 61).',
        'Also test the smallest and largest allowed values, and the first invalid values (-1, 101).',
        'Write the expected output from the rule <b>before</b> you run the program.',
        'After a fix, run all the tests again.'
      ],
      rememberAr: 'اختبر{{g:|ي}} كل مسار مرة على الأقل، وجرّب{{g:|ي}} القيم على الحدود وخارجها. اكتب{{g:|ي}} الناتج المتوقع قبل التشغيل، وأعد{{g:|ي}} كل الاختبارات بعد أي إصلاح.',
      practice: [
        { t: 'mcq', q: 'What is the smallest number of tests that walks every path of a simple if-else?', options: ['1', '2', '3', '4'], answer: 1, explain: 'An if-else has two paths: one input for the if block and one for the else block.', qAr: 'ما أقل عدد من الاختبارات يمر بكل مسارات if-else؟' },
        { t: 'mcq', q: 'The rule is "60 or more passes". A program passed the tests 95, 75 and 40. Which test is the most useful to add?', options: ['60', '85', '20', '99'], answer: 0, explain: '60 is the boundary. It shows whether the program uses <code>&gt;=</code> (right) or <code>&gt;</code> (wrong). The other values are in the middle of a path that was already tested.' },
        { t: 'output', q: 'Rule: 18 or older is an adult. Run this test with 18. What is printed? (Then decide if the program follows the rule.)', code: J`
public class Main {
    public static void main(String[] args) {
        int age = 18;
        if (age > 18) {
            System.out.println("Adult");
        } else {
            System.out.println("Child");
        }
    }
}
`, answer: 'Child', explain: '18 &gt; 18 is false, so the else block runs and prints Child. The rule says 18 is an adult, so this boundary test found a bug: the condition should be <code>age &gt;= 18</code>.' },
        { t: 'mcq', q: 'A chain prints A for 90 or more, B for 80 or more, and F otherwise. Which set of tests covers every path <b>and</b> every boundary?', options: ['95, 90, 89, 80, 79', '95, 85, 50', '90, 80', '100, 0'], answer: 0, explain: '90/89 and 80/79 test both edges, and the three paths (A, B, F) are all walked. The other sets miss edges or paths.' },
        { t: 'bug', q: 'A heat warning must appear at 45 degrees <b>or more</b>. The tests 50 and 30 pass, but the boundary test 45 prints <code>Normal</code>. Tap the line with the bug.', code: J`
public class Main {
    public static void main(String[] args) {
        int temp = 45;
        if (temp > 45) {
            System.out.println("Heat warning");
        } else {
            System.out.println("Normal");
        }
    }
}
`, bug: 4, fix: J`
public class Main {
    public static void main(String[] args) {
        int temp = 45;
        if (temp >= 45) {
            System.out.println("Heat warning");
        } else {
            System.out.println("Normal");
        }
    }
}
`, hint: 'Is 45 greater than 45?', explain: '"45 or more" includes 45, so the condition must be <code>temp &gt;= 45</code>. With <code>&gt;</code>, 45 goes to the else road. Only a test right on the edge can find this kind of bug.', explainAr: '"45 أو أكثر" تعني >=. اختبار الحد 45 كشف الخطأ.' },
        { t: 'code', q: 'Read a mark. Print <code>Invalid</code> if it is below 0 or above 100. Otherwise print <code>Pass</code> for 60 or more and <code>Fail</code> for less. Think about your test table: the tests use the edges 59, 60 and 101. Do not print any prompt.', qAr: 'اقرأ الدرجة. اطبع Invalid إذا كانت خارج 0 إلى 100، وإلا Pass أو Fail.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();
        // guard first, then pass or fail
    }
}
`, tests: [{ stdin: '60', expected: 'Pass' }, { stdin: '59', expected: 'Fail' }, { stdin: '101', expected: 'Invalid' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();
        if (mark < 0 || mark > 100) {
            System.out.println("Invalid");
        } else if (mark >= 60) {
            System.out.println("Pass");
        } else {
            System.out.println("Fail");
        }
    }
}
`, hint: 'Start with the guard <code>mark &lt; 0 || mark &gt; 100</code>, then an else-if for passing.', explain: 'The guard catches impossible marks first. Valid marks then go through a normal pass/fail decision. The three tests sit on the three edges.' }
      ]
    },
    {
      title: 'Project: a delivery fee calculator',
      titleAr: 'مشروع: حاسبة رسوم التوصيل',
      minutes: 30,
      body: [
        { type: 'h', en: 'A real problem with many decisions' },
        { type: 'p', en: 'An online shop needs a program that works out the delivery fee of each order. The fee depends on the weight, the city, the delivery speed and the order value. Each rule alone is easy. All together they look scary. In this project you will <b>plan first</b>, then build the program one small step at a time, and finally test it. This is how programmers solve every big problem.',
          ar: 'في هذا المشروع نخطط أولاً، ثم نبني البرنامج خطوة خطوة، ثم نختبره.' },
        { type: 'table', head: ['Rule', 'Details'], rows: [
          ['Weight fee', '1 to 2 kg: 15 SAR · 3 to 5 kg: 25 SAR · 6 to 10 kg: 40 SAR · more than 10 kg: 40 SAR plus 3 SAR for each kg above 10'],
          ['Free basic delivery', 'If the order value is 300 SAR or more, the weight fee becomes 0'],
          ['City extra', 'Riyadh: 0 · any other city: 10 SAR'],
          ['Express', 'If the customer chose express (yes), add 20 SAR'],
          ['Bad weight', 'A weight of 0 or less: print <code>Invalid weight</code> and nothing else']
        ] },
        { type: 'p', en: 'The input is one line: the order value and the weight in kg (whole numbers), the city (one word) and express (<code>yes</code> or <code>no</code>). For example: <code>350 4 Jeddah no</code>.' },
        { type: 'analogy', title: 'Planning a road trip', en: 'Before a long drive from Riyadh to Abha you look at the map and choose your roads. You do not start driving and hope for the best. Programmers do the same: they draw the decisions first, and only then write code.' },
        { type: 'h', en: 'Plan with a flowchart' },
        { type: 'p', en: 'A <b>flowchart</b> is a drawing of the steps. A <b>box</b> is an action (read, calculate, print). A <b>diamond</b> is a yes/no question with two exits. You can draw one on paper in two minutes. Here is our plan, written from top to bottom.',
          ar: 'المخطط الانسيابي رسم للخطوات: المستطيل عمل، والمعيّن سؤال جوابه نعم أو لا.' },
        { type: 'list', items: [
          '<b>Box:</b> read order, weight, city, express.',
          '<b>Diamond:</b> is the weight 0 or less? Yes: print <code>Invalid weight</code> and stop. No: continue.',
          '<b>Diamonds in a row:</b> weight up to 2? up to 5? up to 10? otherwise heavy. Each exit sets <code>weightFee</code>.',
          '<b>Diamond:</b> is the order 300 or more? Yes: set <code>weightFee</code> to 0.',
          '<b>Diamond:</b> is the city Riyadh (any capitals)? Yes: <code>cityFee</code> is 0. No: 10.',
          '<b>Diamond:</b> is express yes? Yes: <code>expressFee</code> is 20. No: 0.',
          '<b>Box:</b> add the three fees and print four lines.'
        ] },
        { type: 'table', head: ['Diamond in the plan', 'Java tool'], rows: [
          ['Invalid weight?', 'if-else around the whole calculation (a guard)'],
          ['Weight groups', 'else-if chain (ranges, so not a switch)'],
          ['Big order?', 'plain if: it changes a value only sometimes'],
          ['Riyadh? Express?', '<code>equalsIgnoreCase</code> inside a <code>?:</code>']
        ] },
        { type: 'check', q: 'Why do we use an else-if chain and not a switch for the weight groups?', options: ['The groups are ranges, and switch cases must be fixed values', 'switch cannot work with int', 'A chain is always faster', 'switch only works with text'], answer: 0, explain: '"3 to 5 kg" is a range. A case label must be one fixed value, so ranges need an else-if chain.' },
        { type: 'h', en: 'Step 1: check the input first' },
        { type: 'p', en: 'If the weight is impossible, every later calculation is nonsense. So the first decision is a <b>guard</b>: it protects the rest of the program. The whole calculation goes inside the else.' },
        { type: 'analogy', title: 'The guard at the gate', en: 'At the gate of a university campus a guard checks your card first. Without a valid card you are stopped at the gate and never reach the library or the labs. Our guard does the same with the weight: a bad weight stops at the gate, and only a good weight walks into the rest of the program.' },
        { type: 'code', code: J`
if (weight <= 0) {
    System.out.println("Invalid weight");
} else {
    // steps 2, 3 and 4 go here
}
` },
        { type: 'lines', rows: [
          ['if (weight <= 0) {', 'The guard catches 0 and negative weights.'],
          ['} else {', 'Only valid weights get here, so the calculations below are safe.']
        ], ar: 'نتحقق من صحة الإدخال أولاً، وبقية الحساب داخل else.' },
        { type: 'h', en: 'Step 2: the weight fee' },
        { type: 'p', en: 'Four groups, so a chain with a final else. We start from the lightest group with <code>&lt;=</code>, so each question only sees the weights that are left.' },
        { type: 'code', code: J`
int weightFee;
if (weight <= 2) {
    weightFee = 15;
} else if (weight <= 5) {
    weightFee = 25;
} else if (weight <= 10) {
    weightFee = 40;
} else {
    weightFee = 40 + (weight - 10) * 3;
}
` },
        { type: 'lines', rows: [
          ['} else if (weight <= 5) {', 'We know the weight is more than 2 here, so this road means 3 to 5 kg.'],
          ['    weightFee = 40 + (weight - 10) * 3;', 'Heavy parcels: 40 plus 3 for every kg above 10.']
        ] },
        { type: 'check', q: 'What is <code>weightFee</code> for a 12 kg parcel?', options: ['40', '43', '46', '36'], answer: 2, explain: '12 is more than 10, so the final else runs: 40 + (12 - 10) * 3 = 40 + 6 = 46.' },
        { type: 'h', en: 'Step 3: the free delivery rule' },
        { type: 'p', en: 'This rule changes the weight fee only for big orders. Nothing special happens for small orders, so a plain if is enough. It must come <b>after</b> the chain; otherwise the chain would overwrite the 0.' },
        { type: 'code', code: J`
if (order >= 300) {
    weightFee = 0;
}
` },
        { type: 'memory', title: 'The weight fee for the input 350 4 Jeddah no', en: 'Watch <code>weightFee</code>: the chain sets it, then the free delivery rule changes it.',
          frames: [
            { label: 'After reading the input', vars: [{ name: 'order', type: 'int', value: '350' }, { name: 'weight', type: 'int', value: '4' }, { name: 'city', type: 'String', value: '"Jeddah"' }, { name: 'express', type: 'String', value: '"no"' }] },
            { label: 'Chain: 4 &lt;= 2 is false, 4 &lt;= 5 is true, so <code>weightFee = 25;</code>', vars: [{ name: 'order', type: 'int', value: '350' }, { name: 'weight', type: 'int', value: '4' }, { name: 'city', type: 'String', value: '"Jeddah"' }, { name: 'express', type: 'String', value: '"no"' }, { name: 'weightFee', type: 'int', value: '25' }] },
            { label: 'Free rule: 350 &gt;= 300 is true, so <code>weightFee = 0;</code>', vars: [{ name: 'order', type: 'int', value: '350' }, { name: 'weight', type: 'int', value: '4' }, { name: 'city', type: 'String', value: '"Jeddah"' }, { name: 'express', type: 'String', value: '"no"' }, { name: 'weightFee', type: 'int', value: '0' }] }
          ],
          ar: 'السلسلة أعطت 25، ثم قاعدة الطلب الكبير جعلتها 0.' },
        { type: 'h', en: 'Step 4: the extras' },
        { type: 'p', en: 'City and express are text, and users may type <code>jeddah</code> or <code>YES</code>. So we compare with <code>equalsIgnoreCase</code>. Each extra is a choice between two values: a perfect job for <code>?:</code>.' },
        { type: 'code', code: J`
int cityFee = city.equalsIgnoreCase("Riyadh") ? 0 : 10;
int expressFee = express.equalsIgnoreCase("yes") ? 20 : 0;
int total = weightFee + cityFee + expressFee;
` },
        { type: 'lines', rows: [
          ['int cityFee = city.equalsIgnoreCase("Riyadh") ? 0 : 10;', '"Jeddah" is not Riyadh, so cityFee is 10.'],
          ['int expressFee = express.equalsIgnoreCase("yes") ? 20 : 0;', '"no" is not yes, so expressFee is 0.'],
          ['int total = weightFee + cityFee + expressFee;', '0 + 10 + 0 = 10.']
        ], ar: 'نستخدم equalsIgnoreCase مع ?: لاختيار الرسوم الإضافية.' },
        { type: 'steps', title: 'The whole program', problem: 'Put the four steps together. Read <code>order weight city express</code> and print the weight fee, the city extra, the express fee and the delivery total, or <code>Invalid weight</code>.',
          steps: [
            { en: 'Read the four values: two numbers with <code>nextInt()</code>, two words with <code>next()</code>.', code: J`
int order = input.nextInt();
int weight = input.nextInt();
String city = input.next();
String express = input.next();
` },
            { en: 'Step 1: the guard. Everything else goes inside its else.', code: J`
if (weight <= 0) {
    System.out.println("Invalid weight");
} else {
` },
            { en: 'Step 2: the chain for the weight fee. Step 3: the free delivery rule, after the chain.', code: J`
    int weightFee;
    if (weight <= 2) {
        weightFee = 15;
    } else if (weight <= 5) {
        weightFee = 25;
    } else if (weight <= 10) {
        weightFee = 40;
    } else {
        weightFee = 40 + (weight - 10) * 3;
    }
    if (order >= 300) {
        weightFee = 0;
    }
` },
            { en: 'Step 4: the extras and the total, then print four lines and close the else.', code: J`
    int cityFee = city.equalsIgnoreCase("Riyadh") ? 0 : 10;
    int expressFee = express.equalsIgnoreCase("yes") ? 20 : 0;
    int total = weightFee + cityFee + expressFee;
    System.out.println("Weight fee: " + weightFee);
    System.out.println("City extra: " + cityFee);
    System.out.println("Express: " + expressFee);
    System.out.println("Delivery: " + total + " SAR");
}
` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int order = input.nextInt();
        int weight = input.nextInt();
        String city = input.next();
        String express = input.next();
        if (weight <= 0) {
            System.out.println("Invalid weight");
        } else {
            int weightFee;
            if (weight <= 2) {
                weightFee = 15;
            } else if (weight <= 5) {
                weightFee = 25;
            } else if (weight <= 10) {
                weightFee = 40;
            } else {
                weightFee = 40 + (weight - 10) * 3;
            }
            if (order >= 300) {
                weightFee = 0;
            }
            int cityFee = city.equalsIgnoreCase("Riyadh") ? 0 : 10;
            int expressFee = express.equalsIgnoreCase("yes") ? 20 : 0;
            int total = weightFee + cityFee + expressFee;
            System.out.println("Weight fee: " + weightFee);
            System.out.println("City extra: " + cityFee);
            System.out.println("Express: " + expressFee);
            System.out.println("Delivery: " + total + " SAR");
        }
    }
}
`, stdin: '350 4 Jeddah no', out: J`
Weight fee: 0
City extra: 10
Express: 0
Delivery: 10 SAR
`, ar: 'جمعنا الخطوات الأربع في برنامج واحد. جرّب{{g:|ي}} مدخلات أخرى بزر التشغيل.' },
        { type: 'h', en: 'Step 5: test every path' },
        { type: 'p', en: 'Now use what you learned in the testing lesson. Each diamond needs a yes and a no, and each weight group needs its edges (2/3, 5/6, 10/11). Here is part of a test table. Work out each expected total by hand first, then press Run above with that input and compare.',
          ar: 'اختبر{{g:|ي}} كل سؤال بجواب نعم وجواب لا، وكل حد من حدود الوزن.' },
        { type: 'table', head: ['Input', 'What it tests', 'Expected delivery'], rows: [
          ['<code>100 2 Riyadh no</code>', 'lightest group (edge 2), small order, Riyadh, normal', '15 SAR'],
          ['<code>100 3 riyadh no</code>', 'second group (edge 3), capitals ignored', '25 SAR'],
          ['<code>100 10 Dammam yes</code>', 'third group (edge 10), other city, express', '40 + 10 + 20 = 70 SAR'],
          ['<code>100 11 Riyadh no</code>', 'heavy group (edge 11): 40 + 3', '43 SAR'],
          ['<code>300 7 Abha YES</code>', 'free rule at its edge (300), express in capitals', '0 + 10 + 20 = 30 SAR'],
          ['<code>50 0 Riyadh no</code>', 'the guard', 'Invalid weight']
        ] },
        { type: 'note', kind: 'tip', en: 'You built a real program from five small decisions. When a problem looks big, do the same: write the rules, draw the diamonds, code one diamond at a time, and test each one.', ar: 'قسّم{{g:|ي}} المسألة الكبيرة إلى قرارات صغيرة، ثم اكتب{{g:|ي}} واختبر{{g:|ي}} كل قرار.' }
      ],
      mistakes: [
        { title: 'Coding before planning', en: 'Starting to type without a plan leads to forgotten rules and tangled ifs. Two minutes with a flowchart saves an hour of fixing.' },
        { title: 'Comparing the city with ==', en: 'Text needs equalsIgnoreCase here (or equals when capitals matter).', code: J`
int cityFee = (city == "Riyadh") ? 0 : 10;                  // wrong
int cityFee = city.equalsIgnoreCase("Riyadh") ? 0 : 10;     // right
`, ar: 'لا تقارن{{g:|ي}} النصوص بـ ==.' },
        { title: 'Putting the free rule before the chain', en: 'The chain runs later and gives weightFee a new value, so the 0 is lost. The order of the steps matters.', code: J`
if (order >= 300) { weightFee = 0; }   // too early
if (weight <= 2) { weightFee = 15; } ...   // overwrites the 0
` },
        { title: 'Forgetting the guard', en: 'Without the first check, a weight of -3 goes into the chain and gets a fee of 15, which makes no sense.' }
      ],
      remember: [
        'Plan first: write the rules, then a flowchart of boxes (actions) and diamonds (questions).',
        'Choose a tool for each diamond: guard if-else, else-if chain for ranges, plain if for "only sometimes", <code>?:</code> for a choice of two values.',
        'Put a guard for bad input first; the rest goes inside its else.',
        'The order of steps matters: a later assignment overwrites an earlier one.',
        'Test every diamond with yes and no, and every boundary.'
      ],
      rememberAr: 'خطّط{{g:|ي}} أولاً بمخطط انسيابي، واختر{{g:|ي}} أداة مناسبة لكل سؤال، وضع{{g:|ي}} فحص الإدخال أولاً، وانتبه{{g:|ي}} لترتيب الخطوات، ثم اختبر{{g:|ي}} كل مسار.',
      practice: [
        { t: 'mcq', q: 'Which Java tool is best for the question "is the city Riyadh, whatever the capitals"?', options: ['<code>city == "Riyadh"</code>', '<code>city.equals("Riyadh")</code>', '<code>city.equalsIgnoreCase("Riyadh")</code>', 'a <code>switch</code> with <code>case "Riyadh":</code>'], answer: 2, explain: 'Only equalsIgnoreCase accepts riyadh, RIYADH and Riyadh. equals and a String switch are strict about capitals, and == compares arrows.', qAr: 'ما الأداة المناسبة لمقارنة اسم المدينة مع تجاهل الحروف الكبيرة؟' },
        { t: 'output', q: 'A small part of the project with fixed values. What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int order = 120;
        int weight = 7;
        String city = "RIYADH";
        int weightFee;
        if (weight <= 2) {
            weightFee = 15;
        } else if (weight <= 5) {
            weightFee = 25;
        } else {
            weightFee = 40;
        }
        if (order >= 300) {
            weightFee = 0;
        }
        int cityFee = city.equalsIgnoreCase("Riyadh") ? 0 : 10;
        System.out.println(weightFee + cityFee);
    }
}
`, answer: '40', explain: '7 is not &lt;= 2 and not &lt;= 5, so weightFee is 40. 120 is below 300, so the free rule does not run. "RIYADH" equals "Riyadh" when capitals are ignored, so cityFee is 0. 40 + 0 = 40.' },
        { t: 'bug', q: 'Orders of 300 or more should have a weight fee of 0. This order is 400, but the program prints <code>Weight fee: 25</code>. Tap the first line of the part that is in the wrong place.', code: J`
public class Main {
    public static void main(String[] args) {
        int order = 400, weight = 4;
        int weightFee = 0;
        if (order >= 300) {
            weightFee = 0;
        }
        if (weight <= 2) {
            weightFee = 15;
        } else {
            weightFee = 25;
        }
        System.out.println("Weight fee: " + weightFee);
    }
}
`, bug: [5, 6], fix: J`
public class Main {
    public static void main(String[] args) {
        int order = 400, weight = 4;
        int weightFee = 0;
        if (weight <= 2) {
            weightFee = 15;
        } else {
            weightFee = 25;
        }
        if (order >= 300) {
            weightFee = 0;
        }
        System.out.println("Weight fee: " + weightFee);
    }
}
`, hint: 'Which step runs last and decides the final value?', explain: 'The free rule sets weightFee to 0 first, but then the if-else runs and puts 25 into the same box, so the 0 is lost. Move the free rule after the weight decision. Then the program prints <code>Weight fee: 0</code>.', explainAr: 'الإسناد المتأخر يمحو المتقدم؛ ضع{{g:|ي}} قاعدة الطلب الكبير بعد حساب الوزن.' },
        { t: 'fill', q: 'Complete the express fee: 20 riyals when the customer typed yes (any capitals), otherwise 0.', code: J`
int expressFee = express.___("yes") ___ 20 : 0;
`, answers: ['equalsIgnoreCase', '?'], explain: 'equalsIgnoreCase gives true or false, and the conditional operator chooses 20 or 0.' },
        { t: 'code', q: 'The shop changed its rules. Read <code>order weight city express</code> as in the lesson and print the same four lines (or <code>Invalid weight</code> for a weight of 0 or less). New rules: 1 to 3 kg: 20 SAR; 4 to 8 kg: 35 SAR; more than 8 kg: 35 plus 5 for each kg above 8. The weight fee is free for orders of 250 or more. Other cities than Riyadh add 15. Express adds 25. Do not print any prompt.', qAr: 'غيّر المتجر القواعد. اكتب{{g:|ي}} الحاسبة بالقواعد الجديدة واطبع{{g:|ي}} الأسطر الأربعة.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int order = input.nextInt();
        int weight = input.nextInt();
        String city = input.next();
        String express = input.next();
        // step 1: guard
        // step 2: weight fee chain
        // step 3: free rule
        // step 4: extras, total and four lines
    }
}
`, tests: [{ stdin: '260 5 Jeddah no', expected: 'Weight fee: 0\nCity extra: 15\nExpress: 0\nDelivery: 15 SAR' }, { stdin: '100 10 RIYADH yes', expected: 'Weight fee: 45\nCity extra: 0\nExpress: 25\nDelivery: 70 SAR' }, { stdin: '80 -2 Abha no', expected: 'Invalid weight' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int order = input.nextInt();
        int weight = input.nextInt();
        String city = input.next();
        String express = input.next();
        if (weight <= 0) {
            System.out.println("Invalid weight");
        } else {
            int weightFee;
            if (weight <= 3) {
                weightFee = 20;
            } else if (weight <= 8) {
                weightFee = 35;
            } else {
                weightFee = 35 + (weight - 8) * 5;
            }
            if (order >= 250) {
                weightFee = 0;
            }
            int cityFee = city.equalsIgnoreCase("Riyadh") ? 0 : 15;
            int expressFee = express.equalsIgnoreCase("yes") ? 25 : 0;
            int total = weightFee + cityFee + expressFee;
            System.out.println("Weight fee: " + weightFee);
            System.out.println("City extra: " + cityFee);
            System.out.println("Express: " + expressFee);
            System.out.println("Delivery: " + total + " SAR");
        }
    }
}
`, hint: 'Follow the same five steps as the lesson; only the numbers and the groups change.', explain: 'For 100 10 RIYADH yes: 10 kg is above 8, so 35 + 2 * 5 = 45; the order is under 250; RIYADH counts as Riyadh, so 0; express adds 25. Total 70.' },
        { t: 'code', q: 'Another small project: a cinema ticket. Read the age and the day number (1 = Sunday ... 7 = Saturday). The base price is 20 riyals for children under 12 and 40 for everyone else. On Tuesday (day 3) every ticket is half price. On the weekend (day 6 or 7) every ticket costs 10 riyals more. Print <code>Price: X</code>. Do not print any prompt.', qAr: 'سعر تذكرة السينما: 20 للأطفال تحت 12 و40 لغيرهم. يوم الثلاثاء بنصف السعر، والعطلة بزيادة 10 ريالات.',
          starter: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        int day = input.nextInt();
        // base price, then the day rules
    }
}
`, tests: [{ stdin: '8 3', expected: 'Price: 10' }, { stdin: '30 6', expected: 'Price: 50' }, { stdin: '30 1', expected: 'Price: 40' }],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        int day = input.nextInt();
        int price = (age < 12) ? 20 : 40;
        boolean isWeekend = day == 6 || day == 7;
        if (day == 3) {
            price = price / 2;
        } else if (isWeekend) {
            price = price + 10;
        }
        System.out.println("Price: " + price);
    }
}
`, hint: 'First choose the base price with <code>?:</code>. Then change it with an if / else-if for Tuesday and the weekend.', explain: 'The base price depends only on the age. The day rules then change it: half on Tuesday, plus 10 on Friday and Saturday, unchanged on other days.' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'What is the value of <code>8 &gt; 3</code>?', options: ['true', 'false', '8', 'An error'], answer: 0, explain: '8 is greater than 3, so the comparison is true.' },
    { t: 'mcq', q: 'Which operator asks "are these two values equal?"', options: ['<code>=</code>', '<code>==</code>', '<code>!=</code>', '<code>&amp;&amp;</code>'], answer: 1, explain: '<code>==</code> compares. A single <code>=</code> stores a value.' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(3 + 4 > 6 && 10 % 3 == 1);
        System.out.println(!(2 > 1) || 5 != 5);
    }
}
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
public class Main {
    public static void main(String[] args) {
        int a = 7, b = 2;
        if (a > 5)
            if (b > 5)
                System.out.println("X");
        else
            System.out.println("Y");
        System.out.println("Z");
    }
}
`, answer: J`
Y
Z
`, explain: 'The else belongs to the nearest if, <code>if (b &gt; 5)</code>. a &gt; 5 is true and b &gt; 5 is false, so Y is printed, then Z.' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        String city = "Jeddah";
        switch (city) {
            case "Riyadh": System.out.println("Capital"); break;
            case "Jeddah": System.out.println("Port city");
            case "Dammam": System.out.println("Eastern"); break;
            default: System.out.println("Unknown");
        }
    }
}
`, answer: J`
Port city
Eastern
`, explain: 'The "Jeddah" case has no break, so execution falls through into the "Dammam" case, which then breaks.' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int t = 25;
        if (t > 10)
            System.out.println("A");
        else if (t > 20)
            System.out.println("B");
        else
            System.out.println("C");
    }
}
`, answer: 'A', explain: 't &gt; 10 is already true, so A is printed and the rest of the chain is skipped.' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int n = 50;
        if (n > 10)
            System.out.println("big");
        if (n > 40)
            System.out.println("bigger");
        else
            System.out.println("small");
    }
}
`, answer: J`
big
bigger
`, explain: 'These are two separate if statements, so both are tested. The else belongs only to the second if.' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        int p = 15;
        System.out.println(p > 10 ? p * 2 : p / 2);
    }
}
`, answer: '30', explain: '15 &gt; 10 is true, so the value is p * 2 = 30.' },
    { t: 'mcq', q: 'Which expression is equivalent to <code>!(x &gt; 5 &amp;&amp; y &lt; 3)</code>?', options: ['<code>x &lt;= 5 || y &gt;= 3</code>', '<code>x &lt;= 5 &amp;&amp; y &gt;= 3</code>', '<code>x &lt; 5 || y &gt; 3</code>', '<code>!x &gt; 5 &amp;&amp; !y &lt; 3</code>'], answer: 0, explain: 'By De Morgan\'s law, not (A and B) equals (not A) or (not B). The opposite of <code>x &gt; 5</code> is <code>x &lt;= 5</code>, and of <code>y &lt; 3</code> is <code>y &gt;= 3</code>.' },
    { t: 'mcq', q: 'Which case label is <b>not</b> allowed in a switch statement?', options: ['<code>case 1:</code>', '<code>case \'A\':</code>', '<code>case "Riyadh":</code>', '<code>case score &gt; 90:</code>'], answer: 3, explain: 'Case labels must be fixed values. A comparison such as <code>score &gt; 90</code> is not.' },
    { t: 'bug', q: 'The user types <code>riyadh</code>. Delivery to Riyadh is free whatever the capitals, but the program prints <code>Delivery: 25 SAR</code>. Tap the line with the bug.', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String city = input.next();
        if (city == "Riyadh") {
            System.out.println("Free delivery");
        } else {
            System.out.println("Delivery: 25 SAR");
        }
    }
}
`, bug: 7, fix: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String city = input.next();
        if (city.equalsIgnoreCase("Riyadh")) {
            System.out.println("Free delivery");
        } else {
            System.out.println("Delivery: 25 SAR");
        }
    }
}
`, hint: 'How do we compare text, and do capitals matter here?', explain: '<code>==</code> compares the arrows of two Strings, not their letters, so it is false for typed text. Even <code>equals</code> would fail here, because "riyadh" and "Riyadh" differ in capitals. <code>city.equalsIgnoreCase("Riyadh")</code> compares the letters and ignores capitals, so the program prints Free delivery.', explainAr: 'لا نقارن النصوص بـ ==، ونستخدم equalsIgnoreCase عندما لا تهم الحروف الكبيرة.' }
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
    { code: J`x >= 1 && x <= 10`, note: 'Range test (1 &lt;= x &lt;= 10 does not compile)' },
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
    { code: J`max = (a > b) ? a : b;`, note: 'Conditional operator chooses a value' },
    { code: J`
boolean isWeekend = day == 6 || day == 7;
if (isWeekend) { ... }
`, note: 'Store a decision in a well-named boolean (is/has/can)' },
    { code: J`
boolean hasWarning = false;
if (temp >= 45) { hasWarning = true; }
if (wind >= 40) { hasWarning = true; }
`, note: 'A flag starts false and is raised when something happens' },
    { code: J`
!(a && b)   is   !a || !b
!(a || b)   is   !a && !b
`, note: 'De Morgan: moving NOT inside swaps AND and OR' },
    { code: J`
city.equals("Riyadh")
answer.equalsIgnoreCase("yes")
`, note: 'Compare text with equals (or equalsIgnoreCase), never with ==' },
    { code: J`
double diff = a - b;
boolean same = diff < 0.0001 && diff > -0.0001;
`, note: 'Compare doubles with a small tolerance, not with ==' },
    { code: J`
mark >= 60  ->  test 59, 60, 61
range 0..100 ->  test 0, 100, -1, 101
`, note: 'Test every path and every boundary; write the expected output first' }
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
    { term: 'De Morgan\'s law', ar: 'قانون دي مورغان', def: 'not (A and B) equals (not A) or (not B); not (A or B) equals (not A) and (not B).' },
    { term: 'Flag', ar: 'عَلَم (متغير منطقي)', def: 'A boolean variable that starts with one value (usually false) and is changed when something happens.' },
    { term: 'equals', ar: 'دالة المساواة للنصوص', def: 'Compares the letters of two Strings: a.equals(b) is true when they have exactly the same letters.' },
    { term: 'equalsIgnoreCase', ar: 'المساواة مع تجاهل حالة الحروف', def: 'Like equals, but capital and small letters count as the same.' },
    { term: 'Tolerance', ar: 'الفرق المسموح', def: 'The biggest difference accepted when two decimal numbers are treated as equal.' },
    { term: 'Path', ar: 'مسار', def: 'One road through a program from start to end, decided by the branches it takes.' },
    { term: 'Test case', ar: 'حالة اختبار', def: 'One input together with the output we expect for it.' },
    { term: 'Boundary value', ar: 'قيمة حدّية', def: 'A value at the edge of a condition, such as 59 and 60 for mark >= 60.' },
    { term: 'Test table', ar: 'جدول الاختبار', def: 'A plan of test inputs, the path each one tests, and the expected and actual outputs.' },
    { term: 'Input validation', ar: 'التحقق من صحة المدخلات', def: 'Checking that an input is allowed (for example a mark from 0 to 100) before using it.' },
    { term: 'Flowchart', ar: 'مخطط انسيابي', def: 'A drawing of a program: boxes for actions and diamonds for yes/no questions.' }
  ]
});
