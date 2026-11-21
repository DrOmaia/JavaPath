JP.unit({
  course: 'cs101',
  n: 6,
  title: 'Methods',
  titleAr: 'الدوال (الطرق)',
  intro: "Until now, all your code lived in main. When a program grows, main becomes long and you copy and paste the same lines again and again. A method is a small named piece of code that does one job. You write it once and use it as often as you like. In this unit you will write and call methods step by step, give them inputs (parameters), get answers back (return values), and learn how to plan a bigger program in small pieces. Then you will build your own text and number tools, test them with PASS/FAIL checks, document them, and finish with a menu-driven converter.",
  introAr: 'حتى الآن كان كل الكود داخل main. عندما يكبر البرنامج نكرر الأسطر نفسها كثيراً. الدالة قطعة صغيرة لها اسم تؤدي عملاً واحداً، نكتبها مرة واحدة ونستخدمها متى شئنا. ستتعلم كتابة الدوال واستدعاءها، وإعطاءها مدخلات (معاملات)، واسترجاع نتيجة منها، وتقسيم البرنامج الكبير إلى أجزاء صغيرة. ثم تبني أدوات للنصوص والأعداد، وتختبرها، وتوثقها، وتنهي الوحدة بمشروع محوّل وحدات بقائمة.',
  lessons: [
    // ===================================================== Lesson 1
    {
      title: 'What is a method? Writing and calling your first one',
      titleAr: 'ما هي الدالة؟ كتابتها واستدعاؤها',
      minutes: 25,
      body: [
        { type: 'h', en: 'Why do we need methods?' },
        { type: 'p', en: 'Imagine you print a line of dashes above and below a title in five places. If you copy the same <code>println</code> five times, a small change (for example, a different line style) means five edits. A <b>method</b> solves this: you write the lines once, give them a name, and then use the name.',
          ar: 'الدالة (method) مجموعة أوامر لها اسم. نكتبها مرة واحدة ثم نستخدم اسمها كلما احتجنا إليها.' },
        { type: 'code', code: J`
System.out.println("--------");
System.out.println("Coffee menu");
System.out.println("--------");
System.out.println("Latte 14 SAR");
System.out.println("--------");` },
        { type: 'p', en: 'Look at the code above. The same line of dashes is written three times. Now your teacher says: "Use <code>========</code> instead." You must find and change all three lines. In a long program you will forget one. With a method, the dashes are written in <b>one</b> place, so one change fixes every use.' },
        { type: 'analogy', title: 'A vending machine', en: 'You press one button, for example "Water", and the machine does many steps for you. You do not need to know how it works inside. A method is the same: one name (the button) hides several steps (the machine inside). Pressing the button is called <b>calling</b> the method.', ar: 'الدالة مثل آلة البيع: تضغط زراً واحداً فتنفذ الآلة عدة خطوات. الضغط على الزر يسمى استدعاء.' },
        { type: 'p', en: 'Methods also make <code>main</code> short and easy to read. When <code>main</code> says <code>printReceipt();</code>, you understand the plan without reading twenty lines. Good programmers keep <code>main</code> like a table of contents: a list of jobs, each job done by a method.' },
        { type: 'h', en: 'You have already used methods' },
        { type: 'p', en: 'You did not know it, but you have called methods since Unit 1. Other programmers wrote them for you, and you only used their names. You never saw the code inside <code>println</code>, and you did not need to. In this unit you will write your <b>own</b> methods.' },
        { type: 'table', head: ['You wrote', 'Method name', 'What it does'], rows: [
          ['<code>System.out.println("Hi")</code>', '<code>println</code>', 'prints a line'],
          ['<code>input.nextInt()</code>', '<code>nextInt</code>', 'reads a whole number from the keyboard'],
          ['<code>Math.sqrt(25)</code>', '<code>sqrt</code>', 'gives back the square root: 5.0'],
          ['<code>name.length()</code>', '<code>length</code>', 'gives back the number of characters']
        ] },
        { type: 'p', en: 'Notice that every method name is followed by parentheses <code>( )</code>. This is how you can spot a method call in Java code: a name, then <code>(</code>.', ar: 'استخدمت دوالاً كثيرة من قبل مثل println وnextInt وMath.sqrt. الآن ستكتب{{g:|ين}} دوالك الخاصة.' },
        { type: 'h', en: 'Step 1: define a method' },
        { type: 'p', en: 'To <b>define</b> a method means to write its steps. This is like writing a recipe. Writing the recipe does not cook anything yet.' },
        { type: 'code', code: J`
public static void printLine() {
    System.out.println("--------");
}` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['public static', 'Two words we always write for now. Just copy them.'],
          ['void', '"Nothing comes back." This method only does an action (it prints). It gives no answer back.'],
          ['printLine', 'The name. Use a verb and camelCase: first word small, next words start with a capital.'],
          ['()', 'Empty parentheses: this method needs no input.'],
          ['{ ... }', 'The braces hold the body: the steps the method performs.']
        ], ar: 'نكتب public static void ثم الاسم ثم أقواس فارغة ثم الأوامر بين { }. كلمة void تعني أن الدالة لا ترجع قيمة.' },
        { type: 'check', q: 'In <code>public static void printLine()</code>, what does <code>void</code> mean?', options: ['The method has no name', 'The method gives no answer back', 'The method cannot be used', 'The method needs an input'], answer: 1, explain: 'void means "returns nothing". The method just performs an action.', ar: 'void = لا ترجع شيئاً.' },
        { type: 'p', en: 'The first line, <code>public static void printLine()</code>, is called the <b>method header</b>. The part inside the braces is the <b>method body</b>. The header tells Java (and other people) how to use the method. The body says what the method really does.' },
        { type: 'h', en: 'Choosing a good method name' },
        { type: 'p', en: 'A method name follows the same rules as a variable name: letters, digits and <code>_</code> only, no spaces, and it cannot start with a digit. By habit, a method name is a <b>verb</b> (an action word), because a method <b>does</b> something: <code>printLine</code>, <code>showMenu</code>, <code>printReceipt</code>. Like variables, method names use camelCase and start with a small letter.' },
        { type: 'table', head: ['Name', 'Good?', 'Why'], rows: [
          ['<code>printLine</code>', 'Yes', 'a verb, camelCase'],
          ['<code>showMenu</code>', 'Yes', 'says exactly what it does'],
          ['<code>line</code>', 'Not great', 'not a verb: print a line? count lines?'],
          ['<code>print line</code>', 'Error', 'a name cannot have a space'],
          ['<code>2print</code>', 'Error', 'a name cannot start with a digit'],
          ['<code>PrintLine</code>', 'Works, but bad style', 'method names start with a small letter']
        ] },
        { type: 'check', q: 'Which is the best name for a method that prints the cafe menu?', options: ['<code>Menu</code>', '<code>printMenu</code>', '<code>print menu</code>', '<code>pm</code>'], answer: 1, explain: 'printMenu is a verb in camelCase and says exactly what the method does. "print menu" has a space, which is not allowed, and "pm" tells the reader nothing.', ar: 'اختر{{g:|ي}} اسماً على شكل فعل يصف عمل الدالة.' },
        { type: 'h', en: 'Step 2: call the method' },
        { type: 'p', en: 'To <b>call</b> a method, write its name followed by parentheses and a semicolon. This is like cooking with the recipe. Now the steps really run.' },
        { type: 'analogy', title: 'A recipe', en: 'A recipe card for "tea" lists the steps. The card alone makes no tea. Only when someone says "make tea" do the steps happen. Defining = writing the card. Calling = making the tea. You can make tea ten times with one card.', ar: 'تعريف الدالة = كتابة الوصفة. الاستدعاء = تنفيذ الوصفة فعلاً.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void printLine() {
        System.out.println("--------");
    }

    public static void main(String[] args) {
        printLine();
        System.out.println("Coffee menu");
        printLine();
    }
}`, out: "--------\nCoffee menu\n--------" },
        { type: 'lines', title: 'What happens, in order', rows: [
          ['main starts', 'Java always starts at main, never at another method.'],
          ['printLine();', 'Java jumps up to printLine, prints the dashes, then comes back.'],
          ['System.out.println("Coffee menu");', 'Runs next, because the call has finished.'],
          ['printLine();', 'The same method runs again. We wrote it only once.']
        ], ar: 'يبدأ البرنامج من main. عند الاستدعاء ينتقل إلى الدالة ثم يعود إلى السطر التالي.' },
        { type: 'check', q: 'Where does a Java program start running?', options: ['At the first method in the file', 'At the method with the longest name', 'At main', 'At printLine'], answer: 2, explain: 'Execution always starts at main. Other methods run only when they are called.' },
        { type: 'note', kind: 'tip', en: 'Both methods sit inside <code>public class Main { ... }</code>. Their order in the file does not matter: you may write printLine above or below main.', ar: 'ترتيب كتابة الدوال في الملف لا يهم.' },
        { type: 'note', kind: 'warn', en: 'Defining a method does not run it. If you write <code>printLine</code> but never call it, nothing is printed.' },
        { type: 'h', en: 'A method can have its own variables' },
        { type: 'p', en: 'Inside a method you can create variables, just like in main. These variables belong to the method. They are created when the method is called, and they disappear when the method reaches its closing brace. Java keeps them in a part of memory called the <b>stack</b>.' },
        { type: 'p', en: 'In the memory pictures of this unit, each box name starts with the method it belongs to. For example, <code>main: items</code> is the variable <code>items</code> of main, and <code>showVat: vat</code> is the variable <code>vat</code> of showVat. In this unit the right side of the picture (objects) stays empty.' },
        { type: 'memory', title: 'A method\'s variable appears and disappears', en: 'Press Next. Watch the left side: the box <code>showVat: vat</code> appears during the call and is gone after it.',
          code: J`
public static void showVat() {
    double vat = 0.15;
    System.out.println("VAT is " + vat);
}

public static void main(String[] args) {
    int items = 3;
    showVat();
    System.out.println(items + " items");
}`,
          frames: [
            { label: 'main starts. After <code>int items = 3;</code>', vars: [{ name: 'main: items', type: 'int', value: '3' }] },
            { label: '<code>showVat();</code> runs: Java jumps into showVat. After <code>double vat = 0.15;</code>', vars: [{ name: 'main: items', type: 'int', value: '3' }, { name: 'showVat: vat', type: 'double', value: '0.15' }] },
            { label: 'showVat printed <code>VAT is 0.15</code> and reached its closing brace. Its box is gone. Java is back in main', vars: [{ name: 'main: items', type: 'int', value: '3' }] },
            { label: 'main prints <code>3 items</code> and ends', vars: [{ name: 'main: items', type: 'int', value: '3' }] }
          ], ar: 'متغيرات الدالة تُنشأ عند استدعائها وتختفي عند انتهائها، أما متغيرات main فتبقى.' },
        { type: 'check', q: 'In the memory picture, when does the box <code>showVat: vat</code> disappear?', options: ['Never', 'When showVat reaches its closing brace', 'When main starts', 'When the program prints 3 items'], answer: 1, explain: 'A method\'s own variables live only while the method runs. When it finishes, its boxes are removed.' },
        { type: 'steps', title: 'Worked example: a cafe receipt', problem: 'Print a receipt with a header and a footer. The header and footer should be written once, in their own methods.',
          steps: [
            { en: 'Plan: we need two jobs, a header and a footer. Each job gets its own method.' },
            { en: 'Write the header method. It only prints, so it is void.', code: J`
public static void header() {
    System.out.println("=== Riyadh Cafe ===");
}` },
            { en: 'Write the footer method in the same way.', code: J`
public static void footer() {
    System.out.println("Thank you!");
}` },
            { en: 'In main, call header first, print the items, then call footer.', code: J`
header();
System.out.println("Latte 14 SAR");
System.out.println("Cake 12 SAR");
footer();` },
            { en: 'Put everything inside one class and run it.' }
          ],
          code: J`
public class Main {
    public static void header() {
        System.out.println("=== Riyadh Cafe ===");
    }

    public static void footer() {
        System.out.println("Thank you!");
    }

    public static void main(String[] args) {
        header();
        System.out.println("Latte 14 SAR");
        System.out.println("Cake 12 SAR");
        footer();
    }
}`, out: "=== Riyadh Cafe ===\nLatte 14 SAR\nCake 12 SAR\nThank you!", ar: 'قسمنا العمل إلى دالتين صغيرتين، وصار main سهل القراءة.' },
        { type: 'p', en: 'A method can contain any statement you know: <code>if</code>, loops, variables, <code>Scanner</code> input. And a call can be written anywhere a statement can be written, even inside a loop. The next example uses both ideas.' },
        { type: 'steps', title: 'Worked example: a weekly walking plan', problem: 'Print a walking plan for 3 days. Put a line of 20 dashes above the plan and after every day. The dashes must be printed by one method.',
          steps: [
            { en: 'The job "print 20 dashes" happens many times, so it becomes a method. Inside, a for loop prints 20 dashes on one line. Then <code>println()</code> ends the line.', code: J`
public static void printDashes() {
    for (int i = 1; i <= 20; i++) {
        System.out.print("-");
    }
    System.out.println();
}` },
            { en: 'In main, print the first line of dashes before the plan.', code: 'printDashes();' },
            { en: 'A loop in main prints each day and then calls the method again. A call inside a loop runs once in every turn of the loop.', code: J`
for (int day = 1; day <= 3; day++) {
    System.out.println("Day " + day + ": walk 30 minutes");
    printDashes();
}` },
            { en: 'Count the calls: 1 before the loop and 3 inside it. So printDashes runs 4 times, but its loop is written only once.' }
          ],
          code: J`
public class Main {
    public static void printDashes() {
        for (int i = 1; i <= 20; i++) {
            System.out.print("-");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        printDashes();
        for (int day = 1; day <= 3; day++) {
            System.out.println("Day " + day + ": walk 30 minutes");
            printDashes();
        }
    }
}`, out: "--------------------\nDay 1: walk 30 minutes\n--------------------\nDay 2: walk 30 minutes\n--------------------\nDay 3: walk 30 minutes\n--------------------", ar: 'يمكن استدعاء الدالة داخل حلقة، فتُنفذ في كل دورة.' },
        { type: 'check', q: 'In the walking plan, how many times does <code>printDashes</code> run?', options: ['1', '3', '4', '20'], answer: 2, explain: 'Once before the loop and once in each of the 3 turns of the loop: 1 + 3 = 4.', hint: 'Count the call before the loop, then the calls inside it.' }
      ],
      mistakes: [
        { title: 'Forgetting the parentheses in the call', en: 'Without <code>()</code> Java thinks you wrote a variable name, and the compiler gives an error.', code: J`
printLine;      // wrong
printLine();    // correct`, ar: 'لا تنسَ الأقواس عند الاستدعاء.' },
        { title: 'Forgetting void', en: 'Every method header needs a return type. For a method that returns nothing, write <code>void</code>.', code: J`
public static printLine() { ... }        // wrong
public static void printLine() { ... }   // correct` },
        { title: 'Writing a method inside main', en: 'A method must be written inside the class but outside every other method.', code: J`
public static void main(String[] args) {
    public static void hi() { }   // wrong: inside main
}` },
        { title: 'Expecting the method to run by itself', en: 'A method runs only when it is called. Defining it is not enough.' }
      ],
      remember: [
        'A <b>method</b> is a named group of steps that does one job.',
        '<b>Define</b> it once (write the recipe), <b>call</b> it as many times as you like.',
        'Header: <code>public static void name()</code>. The steps go inside <code>{ }</code>.',
        'Call it with its name and parentheses: <code>name();</code> A call may be inside a loop.',
        'The program always starts at <code>main</code>.',
        'A method\'s own variables are created when it is called and removed when it ends.'
      ],
      rememberAr: 'الدالة لها اسم وتؤدي عملاً واحداً. نعرّفها مرة ونستدعيها كثيراً. نستدعيها بالاسم مع أقواس. البرنامج يبدأ دائماً من main. متغيرات الدالة تختفي عند انتهائها.',
      practice: [
        { t: 'mcq', q: 'What is the main reason to write a method?', options: ['To make the computer faster', 'To write a task once and reuse it by name', 'To avoid using main', 'To hide errors'], answer: 1, explain: 'A method lets you write a job once and call it whenever you need it.', qAr: 'لماذا نكتب دالة؟' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void hello() {
        System.out.println("Hello");
    }

    public static void main(String[] args) {
        hello();
        System.out.println("Ali");
        hello();
    }
}`, answer: "Hello\nAli\nHello", explain: 'main calls hello (prints Hello), prints Ali, then calls hello again.' },
        { t: 'mcq', q: 'Which is a correct header for a method named <code>showMenu</code> that returns nothing?', options: ['<code>public static showMenu()</code>', '<code>public static void showMenu()</code>', '<code>public void static showMenu</code>', '<code>public static void showMenu;</code>'], answer: 1, explain: 'We need the return type (void) before the name, and parentheses after it. No semicolon after the header.' },
        { t: 'fill', q: 'Complete the method and the call.', code: J`
public class Main {
    public ___ void sayHi() {
        System.out.println("Hi!");
    }

    public static void main(String[] args) {
        ___();
    }
}`, answers: ['static', 'sayHi'], explain: 'The header uses <code>public static void</code>, and you call a method by its name followed by parentheses.' },
        { t: 'order', q: 'Put the lines in order to print <code>Welcome to the gym</code>.', lines: [
          'public class Main {',
          '    public static void welcome() {',
          '        System.out.println("Welcome to the gym");',
          '    }',
          '    public static void main(String[] args) {',
          '        welcome();',
          '    }',
          '}'
        ], explain: 'The method is defined inside the class, and main calls it.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void stars() {
        System.out.print("**");
    }

    public static void main(String[] args) {
        stars();
        stars();
        stars();
        System.out.println();
    }
}`, answer: '******', explain: 'Each call prints two stars with print (no new line). Three calls give six stars.' },
        { t: 'code', q: 'Write a void method <code>printStars()</code> that prints <code>*****</code> (five stars) and a new line. In <code>main</code>, call it three times. No input is needed.', qAr: 'اكتب دالة تطبع خمس نجوم واستدعها ثلاث مرات.',
          starter: J`
public class Main {
    // write printStars here

    public static void main(String[] args) {
        // call printStars three times
    }
}`,
          tests: [ { stdin: '', expected: "*****\n*****\n*****" } ],
          solution: J`
public class Main {
    public static void printStars() {
        System.out.println("*****");
    }

    public static void main(String[] args) {
        printStars();
        printStars();
        printStars();
    }
}`, hint: 'The header is public static void printStars(). Call it with printStars();', explain: 'One definition, three calls.' },
        { t: 'output', q: 'What is the output? (A call can be inside a loop.)', code: J`
public class Main {
    public static void beep() {
        System.out.print("beep ");
    }

    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            beep();
        }
        System.out.println("done");
    }
}`, answer: 'beep beep beep done', explain: 'The loop turns 3 times, and each turn calls beep once. beep uses print, so everything stays on one line until println("done").', explainAr: 'الحلقة تستدعي الدالة ثلاث مرات.' },
        { t: 'bug', q: 'This program should print <code>Unit 6: Methods</code>, but it does not compile. Tap the line with the bug.', qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
public class Main {
    public static printTitle() {
        System.out.println("Unit 6: Methods");
    }

    public static void main(String[] args) {
        printTitle();
    }
}`, bug: 2,
          fix: J`
public class Main {
    public static void printTitle() {
        System.out.println("Unit 6: Methods");
    }

    public static void main(String[] args) {
        printTitle();
    }
}`, hint: 'Look at each method header. Is anything missing before the name?', explain: 'Every method header needs a return type before the name. printTitle gives nothing back, so the return type is <code>void</code>. Without it the compiler stops with an error.', explainAr: 'نسينا كلمة void في رأس الدالة.' },
        { t: 'bug', q: 'This program does not compile. Tap the line where the real mistake starts.', qAr: 'أين بدأ الخطأ الحقيقي؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        sayHello();
        public static void sayHello() {
            System.out.println("Hello");
        }
    }
}`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        sayHello();
    }

    public static void sayHello() {
        System.out.println("Hello");
    }
}`, hint: 'Where must a method be written: inside main, or inside the class next to main?', explain: 'The method sayHello is written inside main. A method must be inside the class but outside every other method. Close main first, then write sayHello next to it.', explainAr: 'لا نكتب دالة داخل دالة أخرى.' },
        { t: 'code', q: 'Write a void method <code>cheer()</code> that prints <code>Keep going!</code> on its own line. In <code>main</code>, read an integer n and call <code>cheer()</code> n times with a loop. No prompts.<br>Example: input <code>2</code> prints <code>Keep going!</code> two times.', qAr: 'اقرأ n واستدع الدالة n مرة باستخدام حلقة.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write cheer here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // call cheer n times
    }
}`,
          tests: [ { stdin: '3', expected: "Keep going!\nKeep going!\nKeep going!" }, { stdin: '1', expected: 'Keep going!' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void cheer() {
        System.out.println("Keep going!");
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        for (int i = 1; i <= n; i++) {
            cheer();
        }
    }
}`, hint: 'Put the call cheer(); inside a for loop that turns n times.', explain: 'The method holds the job; the loop in main decides how many times the job runs.' }
      ]
    },
    // ===================================================== Lesson 2
    {
      title: 'Methods that call methods: the call stack',
      titleAr: 'دوال تستدعي دوال: مكدس الاستدعاءات',
      minutes: 25,
      body: [
        { type: 'h', en: 'A method can call another method' },
        { type: 'p', en: 'Real jobs have smaller jobs inside them. "Open the shop" includes "turn on the lights" and "start the coffee machine". In Java, one method can call another method. This is normal and very useful. But you must be able to follow the order in which things run.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("main starts");
        greet();
        System.out.println("main ends");
    }

    public static void greet() {
        System.out.println("  greet starts");
        helper();
        System.out.println("  greet ends");
    }

    public static void helper() {
        System.out.println("    helper runs");
    }
}`, out: "main starts\n  greet starts\n    helper runs\n  greet ends\nmain ends" },
        { type: 'p', en: 'Notice that "greet ends" comes <b>after</b> "helper runs". When <code>greet</code> calls <code>helper</code>, <code>greet</code> waits (pauses). Only when <code>helper</code> finishes does <code>greet</code> continue from the very next line.',
          ar: 'عندما تستدعي دالةٌ دالةً أخرى فإنها تنتظر حتى تنتهي الأخرى ثم تكمل من السطر التالي.' },
        { type: 'analogy', title: 'A stack of plates', en: 'Imagine a stack of plates. You can only put a plate on top and take a plate from the top. Java keeps track of running methods like this. When a method is called, a new plate goes on top. When it finishes, its plate is removed and the plate below becomes the top again. This pile is called the <b>call stack</b>. The method on the top plate is the one that is running now.', ar: 'مكدس الاستدعاءات مثل أطباق فوق بعضها: آخر دالة استُدعيت هي التي تعمل الآن، وعندما تنتهي نزيلها ونعود إلى التي تحتها.' },
        { type: 'h', en: 'How does Java know where to come back?' },
        { type: 'p', en: 'When <code>greet</code> calls <code>helper</code>, Java writes a small note on greet\'s plate: "continue from the line after the call". When helper finishes, Java reads the note and continues exactly there. The method that makes the call is called the <b>caller</b>. A finished method always goes back to <b>its own caller</b>, not always to main.' },
        { type: 'analogy', title: 'A bookmark', en: 'You are reading a story book. A word is new, so you put a bookmark in the page and open the dictionary. When you have found the word, you go back to the bookmark and continue reading from the same line. The bookmark is the note Java keeps for the caller.', ar: 'مثل العلامة في الكتاب: تترك{{g:|ين}} الصفحة لتبحث{{g:|ي}} عن كلمة ثم تعود{{g:|ين}} إلى المكان نفسه.' },
        { type: 'h', en: 'Trace the stack step by step' },
        { type: 'p', en: 'Let us trace the program above. Read the table from top to bottom. The last name in each stack is the plate on top.' },
        { type: 'table', head: ['Step', 'What happens', 'Stack (bottom to top)', 'Printed'], rows: [
          ['1', 'Program starts, main runs', 'main', '"main starts"'],
          ['2', 'main calls greet', 'main, greet', '"  greet starts"'],
          ['3', 'greet calls helper', 'main, greet, helper', '"    helper runs"'],
          ['4', 'helper finishes, its plate is removed', 'main, greet', '(nothing)'],
          ['5', 'greet continues after the call', 'main, greet', '"  greet ends"'],
          ['6', 'greet finishes', 'main', '(nothing)'],
          ['7', 'main continues, then finishes', '(empty)', '"main ends"']
        ] },
        { type: 'check', q: 'At step 3 of the table, which method is on the top of the stack?', options: ['main', 'greet', 'helper', 'none'], answer: 2, explain: 'helper was called last, so it is on top and it is the one running.' },
        { type: 'note', kind: 'exam', en: 'In tracing questions, write the output in the order the statements really run, not in the order the methods appear in the file. Draw the stack if you are not sure.', ar: 'تتبّع الأوامر حسب ترتيب التنفيذ وليس حسب ترتيب كتابتها.' },
        { type: 'h', en: 'Each plate has its own variables' },
        { type: 'p', en: 'A plate on the stack is not empty. It holds the variables of that method. This plate is called a <b>frame</b>. When a method is called, a new frame with its variables goes on top. When the method ends, the whole frame is removed, with all its variables. Here is a cafe example where each method has one variable.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int cups = 2;
        serve();
        System.out.println("main: cups = " + cups);
    }

    public static void serve() {
        int sugar = 1;
        stir();
        System.out.println("serve: sugar = " + sugar);
    }

    public static void stir() {
        int turns = 3;
        System.out.println("stir: turns = " + turns);
    }
}`, out: "stir: turns = 3\nserve: sugar = 1\nmain: cups = 2" },
        { type: 'memory', title: 'The call stack, frame by frame', en: 'Press Next. Each name starts with its method. New boxes appear on top when a method is called; they are removed when it ends.',
          frames: [
            { label: 'main starts. After <code>int cups = 2;</code>', vars: [{ name: 'main: cups', type: 'int', value: '2' }] },
            { label: 'main called <code>serve()</code>. After <code>int sugar = 1;</code>', vars: [{ name: 'main: cups', type: 'int', value: '2' }, { name: 'serve: sugar', type: 'int', value: '1' }] },
            { label: 'serve called <code>stir()</code>. After <code>int turns = 3;</code> (stir is on top: it is running)', vars: [{ name: 'main: cups', type: 'int', value: '2' }, { name: 'serve: sugar', type: 'int', value: '1' }, { name: 'stir: turns', type: 'int', value: '3' }] },
            { label: 'stir printed its line and ended. Its frame is removed. serve continues after the call', vars: [{ name: 'main: cups', type: 'int', value: '2' }, { name: 'serve: sugar', type: 'int', value: '1' }] },
            { label: 'serve printed its line and ended. main continues and prints <code>main: cups = 2</code>', vars: [{ name: 'main: cups', type: 'int', value: '2' }] }
          ], ar: 'لكل دالة إطار فيه متغيراتها. يوضع الإطار عند الاستدعاء ويُزال عند الانتهاء.' },
        { type: 'check', q: 'In frame 3 of the picture, which variables exist?', options: ['Only <code>turns</code>', '<code>cups</code>, <code>sugar</code> and <code>turns</code>', 'Only <code>cups</code>', 'None'], answer: 1, explain: 'main and serve are waiting, so their frames are still on the stack. stir is on top. All three variables exist, but only stir can use turns.' },
        { type: 'h', en: 'One method, called from two places' },
        { type: 'p', en: 'The same method can be called by different callers. Each time it finishes, it goes back to the caller of <b>that</b> call. In the program below, <code>line()</code> is called twice by <code>title</code> and once by <code>main</code>.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void line() {
        System.out.println("~~~~~~");
    }

    public static void title() {
        line();
        System.out.println("Exam Timetable");
        line();
    }

    public static void main(String[] args) {
        title();
        System.out.println("CS101 Sunday 9:00");
        line();
    }
}`, out: "~~~~~~\nExam Timetable\n~~~~~~\nCS101 Sunday 9:00\n~~~~~~" },
        { type: 'lines', title: 'Who is the caller?', rows: [
          ['title();', 'main calls title. Stack: main, title.'],
          ['line();   (inside title)', 'title is the caller. Stack: main, title, line. After the dashes, line goes back to <b>title</b>.'],
          ['System.out.println("Exam Timetable");', 'title continues, then calls line again. Again line goes back to title.'],
          ['line();   (inside main)', 'Now main is the caller. When line ends, Java goes back to <b>main</b>.']
        ], ar: 'الدالة تعود دائماً إلى من استدعاها، وليس بالضرورة إلى main.' },
        { type: 'note', kind: 'tip', en: 'The stack is not only a picture for tests. When a program crashes, Java prints the call stack in the error message, for example <code>at Main.helper</code>, then <code>at Main.greet</code>, then <code>at Main.main</code>. The first line is the method that was running when the problem happened, so start looking there.', ar: 'عند حدوث خطأ تطبع جافا المكدس، وأول سطر فيه هو الدالة التي حدث فيها الخطأ.' },
        { type: 'analogy', title: 'A phone call that is put on hold', en: 'You are talking to your friend (greet). You press "add call" and phone a taxi (helper). Your friend waits on hold. When the taxi call ends, you return to your friend. The first call never ended; it just waited.' },
        { type: 'steps', title: 'Worked example: morning routine', problem: 'Predict the output of a program in which one method calls another, and check with the stack.',
          steps: [
            { en: 'Start at main. It calls <code>getUp()</code>.', code: 'getUp();' },
            { en: 'Inside getUp, first it prints "Wake up". Then it calls <code>drinkCoffee()</code>. getUp now waits.', code: J`
System.out.println("Wake up");
drinkCoffee();` },
            { en: 'drinkCoffee prints "Coffee" and finishes. Stack: main, getUp.' },
            { en: 'Back in getUp, the next line prints "Go to class". Then getUp finishes.' },
            { en: 'Back in main, the next line prints "Done". So the order is: Wake up, Coffee, Go to class, Done.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        getUp();
        System.out.println("Done");
    }

    public static void getUp() {
        System.out.println("Wake up");
        drinkCoffee();
        System.out.println("Go to class");
    }

    public static void drinkCoffee() {
        System.out.println("Coffee");
    }
}`, out: "Wake up\nCoffee\nGo to class\nDone", ar: 'الترتيب: Wake up ثم Coffee ثم Go to class ثم Done.' },
        { type: 'steps', title: 'Worked example: the school bell', problem: 'Predict the output. Here the method <code>bell</code> is called by two different methods. Follow the stack carefully.',
          steps: [
            { en: 'Start at main. It prints "Start" and calls <code>first()</code>. Stack: main, first.', code: J`
System.out.println("Start");
first();` },
            { en: 'first prints "first", then calls <code>bell()</code>. Stack: main, first, bell. bell prints "ring" and ends. Back in <b>first</b>, there are no more lines, so first ends too.' },
            { en: 'Back in main, the next line calls <code>second()</code>. Stack: main, second.', code: 'second();' },
            { en: 'second calls <code>bell()</code> <b>first</b>, so "ring" comes before "second". Then bell goes back to second, which prints "second" and ends.' },
            { en: 'Back in main, the last line prints "End". The whole output: Start, first, ring, ring, second, End.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Start");
        first();
        second();
        System.out.println("End");
    }

    public static void first() {
        System.out.println("first");
        bell();
    }

    public static void second() {
        bell();
        System.out.println("second");
    }

    public static void bell() {
        System.out.println("ring");
    }
}`, out: "Start\nfirst\nring\nring\nsecond\nEnd", ar: 'bell تعود مرة إلى first ومرة إلى second، حسب من استدعاها.' }
      ],
      mistakes: [
        { title: 'Reading the file from top to bottom', en: 'Do not read methods in the order they are written. Start at main and follow the calls.' },
        { title: 'Forgetting to return to the caller', en: 'After a called method finishes, the caller continues on the line after the call. Students often forget the lines that come after the call.', code: J`
a();
System.out.print("X");   // runs after a() is completely finished` },
        { title: 'Thinking a call replaces the rest of the method', en: 'Calling another method does not stop the first method forever. It only pauses it.' },
        { title: 'Thinking every method goes back to main', en: 'A method goes back to <b>its caller</b>. If <code>title</code> calls <code>line</code>, then line goes back to title, not to main.', code: J`
public static void title() {
    line();                      // line goes back HERE, inside title
    System.out.println("Menu");  // so this runs next
}`, ar: 'الدالة تعود إلى من استدعاها.' }
      ],
      remember: [
        'A method can call another method.',
        'The caller <b>waits</b> until the called method finishes.',
        'The <b>call stack</b> is a pile of frames. Each frame holds one method\'s variables. The top one is running now.',
        'When a method finishes, its frame is removed and its <b>caller</b> continues after the call.',
        'Trace programs from <code>main</code>, one call at a time.'
      ],
      rememberAr: 'الدالة تستطيع استدعاء دالة أخرى. المستدعي ينتظر. المكدس يحفظ الدوال الجارية والأعلى هي التي تعمل. ابدأ التتبع دائماً من main.',
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void line() {
        System.out.println("--");
    }

    public static void main(String[] args) {
        System.out.println("A");
        line();
        line();
        System.out.println("B");
    }
}`, answer: "A\n--\n--\nB", explain: 'main prints A, calls line twice, then prints B.' },
        { t: 'mcq', q: 'When method <code>a</code> calls method <code>b</code>, what does <code>a</code> do?', options: ['It stops forever', 'It waits until b finishes, then continues', 'It runs at the same time as b', 'It restarts'], answer: 1, explain: 'The caller pauses and continues after the call when the called method ends.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void a() {
        System.out.print("a");
        b();
        System.out.print("A");
    }

    public static void b() {
        System.out.print("b");
    }

    public static void main(String[] args) {
        a();
        b();
        System.out.println();
    }
}`, answer: 'abAb', explain: 'a prints "a", calls b (prints "b"), then prints "A". Back in main, b is called again and prints "b".' },
        { t: 'mcq', q: 'Here is a stack from bottom to top: <code>main, x, y</code>. Which method is running now?', options: ['main', 'x', 'y', 'none'], answer: 2, explain: 'The top of the stack is the running method.' },
        { t: 'order', q: 'Put the lines in order so that the program prints <code>1</code> then <code>2</code> (method <code>two</code> calls method <code>one</code> first).', lines: [
          'public class Main {',
          '    public static void one() {',
          '        System.out.println("1");',
          '    }',
          '    public static void two() {',
          '        one();',
          '        System.out.println("2");',
          '    }',
          '    public static void main(String[] args) {',
          '        two();',
          '    }',
          '}'
        ], explain: 'two() calls one() first (prints 1) and then prints 2.' },
        { t: 'fill', q: 'Method <code>open</code> must call <code>lightsOn</code> first and then print "Open". Complete the code.', code: J`
public static void lightsOn() {
    System.out.println("Lights on");
}

public static void open() {
    ___();
    System.out.println(___);
}`, answers: ['lightsOn', '"Open"'], explain: 'Call lightsOn() by name, then print the text "Open" (with quotes).' },
        { t: 'code', q: 'Write <code>stepOne()</code> that prints <code>1</code> and <code>stepTwo()</code> that prints <code>2</code> and then calls <code>stepOne()</code>. In main, call <code>stepTwo()</code> and then <code>stepOne()</code>. Each prints on its own line.', qAr: 'اكتب دالتين تطبعان 1 و2 واستدعِ الثانية ثم الأولى.',
          starter: J`
public class Main {
    // write stepOne and stepTwo

    public static void main(String[] args) {
        // your calls
    }
}`, tests: [ { stdin: '', expected: "2\n1\n1" } ],
          solution: J`
public class Main {
    public static void stepOne() {
        System.out.println("1");
    }

    public static void stepTwo() {
        System.out.println("2");
        stepOne();
    }

    public static void main(String[] args) {
        stepTwo();
        stepOne();
    }
}`, hint: 'stepTwo prints 2 first, then calls stepOne.', explain: 'stepTwo prints 2, calls stepOne (prints 1), then main calls stepOne again (prints 1).' },
        { t: 'mcq', q: 'The stack, from bottom to top, is <code>main, report, line</code>. Now <code>line</code> finishes. What is the stack?', options: ['<code>main</code>', '<code>main, report</code>', '<code>main, line</code>', 'empty'], answer: 1, explain: 'Only the top frame (line) is removed. report was the caller, so report is on top again and continues after its call.', explainAr: 'نزيل الإطار العلوي فقط ونعود إلى المستدعي.' },
        { t: 'output', q: 'What is the output? (bell is called from two places.)', code: J`
public class Main {
    public static void bell() {
        System.out.print("ring ");
    }

    public static void lesson() {
        bell();
        System.out.print("study ");
        bell();
    }

    public static void main(String[] args) {
        lesson();
        lesson();
        System.out.println("home");
    }
}`, answer: 'ring study ring ring study ring home', explain: 'Each call to lesson prints "ring study ring ". main calls lesson twice, then prints home. Everything uses print, so it is all on one line.' },
        { t: 'bug', q: 'The shop must turn the lights on <b>before</b> it opens. Expected output: <code>Lights on</code> then <code>Shop is open</code>. The program prints them in the opposite order. Tap the line that is in the wrong place.', qAr: 'الترتيب معكوس. أي سطر في المكان الخطأ؟',
          code: J`
public class Main {
    public static void lightsOn() {
        System.out.println("Lights on");
    }

    public static void openShop() {
        System.out.println("Shop is open");
        lightsOn();
    }

    public static void main(String[] args) {
        openShop();
    }
}`, bug: [7, 8],
          fix: J`
public class Main {
    public static void lightsOn() {
        System.out.println("Lights on");
    }

    public static void openShop() {
        lightsOn();
        System.out.println("Shop is open");
    }

    public static void main(String[] args) {
        openShop();
    }
}`, hint: 'Inside openShop, which line runs first?', explain: 'Statements in a method run from top to bottom. openShop prints "Shop is open" first and only then calls lightsOn. Put the call <code>lightsOn();</code> before the println.', explainAr: 'يجب أن يأتي الاستدعاء قبل الطباعة.' }
      ]
    },
    // ===================================================== Lesson 3
    {
      title: 'Parameters and arguments: giving a method its input',
      titleAr: 'المعاملات والوسائط: إعطاء الدالة مدخلات',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why do methods need input?' },
        { type: 'p', en: 'The method <code>printLine()</code> always prints the same thing. But a cafe wants to print "Latte" today and "Tea" tomorrow. We do not want one method for each drink. Instead, the method should <b>ask for the drink</b> every time it is called.',
          ar: 'نريد دالة واحدة تعمل بقيم مختلفة، لذلك نعطيها مدخلات تسمى معاملات.' },
        { type: 'analogy', title: 'A coffee order', en: 'The barista follows the same recipe for every customer, but each customer says what they want: "one Latte" or "two Teas". The recipe has empty spaces (drink, number of cups). The customer fills them. In a method, the empty spaces are <b>parameters</b> and the things you say are <b>arguments</b>.', ar: 'المعامل هو الفراغ في الوصفة، والوسيط هو القيمة التي نملأ بها الفراغ.' },
        { type: 'h', en: 'One parameter' },
        { type: 'code', code: J`
public static void welcome(String name) {
    System.out.println("Welcome, " + name);
}` },
        { type: 'lines', rows: [
          ['welcome(String name)', 'Inside the parentheses we declare a variable: its type (String) and its name (name). This is the <b>parameter</b>.'],
          ['System.out.println("Welcome, " + name);', 'Inside the method we can use name like any variable.']
        ], ar: 'المعامل متغير نعرّفه داخل أقواس رأس الدالة بنوعه واسمه.' },
        { type: 'p', en: 'Now we call it and put a value in the parentheses. The value is the <b>argument</b>.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void welcome(String name) {
        System.out.println("Welcome, " + name);
    }

    public static void main(String[] args) {
        welcome("Lama");
        welcome("Faisal");
    }
}`, out: "Welcome, Lama\nWelcome, Faisal" },
        { type: 'p', en: 'In the first call, the argument <code>"Lama"</code> is copied into the parameter <code>name</code>. In the second call, <code>name</code> becomes <code>"Faisal"</code>.' },
        { type: 'p', en: 'Think of a parameter as a normal variable of the method, with one difference: you do not give it a value inside the method. The <b>caller</b> gives it its first value, every time it calls. So the same method can print a different name on every call.', ar: 'المعامل متغير عادي داخل الدالة، لكن قيمته الأولى يحددها المستدعي في كل استدعاء.' },
        { type: 'table', head: ['Word', 'Where', 'Example'], rows: [
          ['Parameter', 'in the method header (definition)', '<code>String name</code>'],
          ['Argument', 'in the call', '<code>"Lama"</code>']
        ] },
        { type: 'check', q: 'In the call <code>welcome("Lama");</code>, what is <code>"Lama"</code>?', options: ['A parameter', 'An argument', 'A method', 'A return type'], answer: 1, explain: 'The value you give in the call is an argument.', ar: 'القيمة في الاستدعاء = وسيط.' },
        { type: 'h', en: 'Two parameters' },
        { type: 'p', en: 'A method can have several parameters. Separate them with commas. Each one needs its own type.' },
        { type: 'analogy', title: 'A form with empty boxes', en: 'A university form says: <i>Name: ____ &nbsp; Age: ____</i>. The form is the method header: it decides how many boxes there are, their order, and what kind of answer goes in each. Filling the form is the call. If you write your age in the name box, the form is wrong, even if your writing is neat. Arguments work the same way: the first value goes in the first box.', ar: 'رأس الدالة مثل استمارة فيها خانات مرتبة، والاستدعاء هو تعبئة الخانات بالترتيب نفسه.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void orderCoffee(String drink, int cups) {
        System.out.println(cups + " x " + drink);
    }

    public static void main(String[] args) {
        orderCoffee("Latte", 2);
        orderCoffee("Tea", 1);
    }
}`, out: "2 x Latte\n1 x Tea" },
        { type: 'lines', rows: [
          ['orderCoffee("Latte", 2);', 'The first argument "Latte" goes to the first parameter drink. The second argument 2 goes to the second parameter cups.'],
          ['System.out.println(cups + " x " + drink);', 'cups is an int, so cups + " x " first turns the number into text and joins it.']
        ], ar: 'الوسائط تُطابق المعاملات بالترتيب: الأول للأول والثاني للثاني.' },
        { type: 'note', kind: 'exam', en: 'Arguments must match the parameters in <b>number</b>, <b>order</b> and <b>type</b>. <code>orderCoffee(2, "Latte")</code> is an error because the order is wrong. <code>orderCoffee("Tea")</code> is an error because one argument is missing.', ar: 'يجب أن تتطابق الوسائط مع المعاملات في العدد والترتيب والنوع.' },
        { type: 'check', q: 'Which call is correct for <code>static void report(String name, int age)</code>?', options: ['<code>report(20, "Ali");</code>', '<code>report("Ali");</code>', '<code>report("Ali", 20);</code>', '<code>report("Ali", 20.5);</code>'], answer: 2, explain: 'The order must be String then int. 20.5 is a double and does not fit an int.' },
        { type: 'h', en: 'Watch the values travel' },
        { type: 'p', en: 'Let us see the copying in memory. The arguments in this program are variables of main. Their <b>names</b> are different from the parameter names, and that is fine: only the <b>position</b> decides where each value goes.' },
        { type: 'memory', title: 'Arguments are copied into parameters', en: 'Press Next. When the method is called, new boxes appear for its parameters, filled with copies of the argument values. When the method ends, those boxes are removed.',
          code: J`
public static void orderCoffee(String drink, int cups) {
    System.out.println(cups + " x " + drink);
}

public static void main(String[] args) {
    String choice = "Latte";
    int n = 2;
    orderCoffee(choice, n);
    orderCoffee("Tea", n + 1);
}`,
          frames: [
            { label: 'After <code>String choice = "Latte";</code> and <code>int n = 2;</code>', vars: [{ name: 'main: choice', type: 'String', value: '"Latte"' }, { name: 'main: n', type: 'int', value: '2' }] },
            { label: 'First call <code>orderCoffee(choice, n)</code>: the 1st value goes to drink, the 2nd to cups. It prints <code>2 x Latte</code>', vars: [{ name: 'main: choice', type: 'String', value: '"Latte"' }, { name: 'main: n', type: 'int', value: '2' }, { name: 'orderCoffee: drink', type: 'String', value: '"Latte"' }, { name: 'orderCoffee: cups', type: 'int', value: '2' }] },
            { label: 'The first call ended. Its boxes are removed', vars: [{ name: 'main: choice', type: 'String', value: '"Latte"' }, { name: 'main: n', type: 'int', value: '2' }] },
            { label: 'Second call <code>orderCoffee("Tea", n + 1)</code>: Java first works out n + 1 = 3, then copies. It prints <code>3 x Tea</code>', vars: [{ name: 'main: choice', type: 'String', value: '"Latte"' }, { name: 'main: n', type: 'int', value: '2' }, { name: 'orderCoffee: drink', type: 'String', value: '"Tea"' }, { name: 'orderCoffee: cups', type: 'int', value: '3' }] },
            { label: 'The second call ended. main\'s boxes did not change: n is still 2', vars: [{ name: 'main: choice', type: 'String', value: '"Latte"' }, { name: 'main: n', type: 'int', value: '2' }] }
          ], ar: 'عند الاستدعاء تُنسخ قيم الوسائط في صناديق المعاملات حسب الترتيب، ثم تُزال الصناديق عند انتهاء الدالة.' },
        { type: 'check', q: 'In frame 4, what value does <code>cups</code> have, and why?', options: ['2, because n is 2', '3, because Java works out n + 1 before the call', '"n + 1", as text', 'It has no value'], answer: 1, explain: 'An argument can be a calculation. Java works it out first (2 + 1 = 3) and copies the result into the parameter.' },
        { type: 'h', en: 'An argument can be a variable or a calculation' },
        { type: 'p', en: 'You do not have to write a fixed value. Java first works out the value of the argument, then copies it.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void printStars(int n) {
        for (int i = 1; i <= n; i++) {
            System.out.print("*");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int level = 2;
        printStars(3);
        printStars(level);
        printStars(level * 2 + 1);
    }
}`, out: "***\n**\n*****" },
        { type: 'note', kind: 'tip', en: 'An <code>int</code> argument can go into a <code>double</code> parameter: <code>78</code> becomes <code>78.0</code>. The other way round (double into int) is not allowed.', ar: 'يمكن إرسال int إلى معامل double ولا يمكن العكس.' },
        { type: 'h', en: 'A parameter can be used in calculations' },
        { type: 'p', en: 'Inside the method, a parameter works like any variable: you can calculate with it and store the result in a new variable. In Saudi Arabia a cafe adds 15% VAT (value added tax) to every price. This method receives the item and the price, works out the price with VAT, and prints it with two decimals.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void printWithVat(String item, double price) {
        double total = price * 1.15;
        System.out.printf("%s: %.2f SAR with VAT%n", item, total);
    }

    public static void main(String[] args) {
        printWithVat("Latte", 14);
        printWithVat("Cake", 12);
    }
}`, out: "Latte: 16.10 SAR with VAT\nCake: 13.80 SAR with VAT" },
        { type: 'lines', rows: [
          ['printWithVat("Latte", 14);', '"Latte" goes to item. 14 is an int, but the parameter is a double, so price becomes 14.0.'],
          ['double total = price * 1.15;', 'A new variable of the method. Multiplying by 1.15 adds 15%.'],
          ['System.out.printf("%s: %.2f SAR with VAT%n", item, total);', '%s is replaced by the text item; %.2f prints total with 2 decimals.']
        ], ar: 'نستخدم المعامل في الحساب مثل أي متغير.' },
        { type: 'steps', title: 'Worked example: a grade report line', problem: 'Write a method that prints a student name and a mark as one line, for example <code>Reem: 93.5</code>.',
          steps: [
            { en: 'What does the method need to know? A name (text) and a mark (decimal number). So it needs two parameters.' },
            { en: 'Write the header with the two parameters.', code: 'public static void printMark(String name, double mark) {' },
            { en: 'Write the body: join the name, a colon and the mark.', code: '    System.out.println(name + ": " + mark);' },
            { en: 'Call it from main with different arguments.', code: J`
printMark("Reem", 93.5);
printMark("Fahad", 78);` },
            { en: 'Notice that 78 becomes 78.0 because the parameter is a double.' }
          ],
          code: J`
public class Main {
    public static void printMark(String name, double mark) {
        System.out.println(name + ": " + mark);
    }

    public static void main(String[] args) {
        printMark("Reem", 93.5);
        printMark("Fahad", 78);
    }
}`, out: "Reem: 93.5\nFahad: 78.0", ar: 'الدالة تستقبل اسماً وعلامة وتطبعهما في سطر واحد.' },
        { type: 'steps', title: 'Worked example: a temperature table', problem: 'Print a table that changes Celsius to Fahrenheit for 0, 10, 20, 30 and 40 degrees. The formula is F = C × 9 / 5 + 32. One method must print one row of the table.',
          steps: [
            { en: 'What does one row need to know? Only the Celsius value. So the method has one parameter. We choose double, because temperatures can have decimals.', code: 'public static void printRow(double c) {' },
            { en: 'Inside, work out the Fahrenheit value in a new variable and print the row.', code: J`
    double f = c * 9 / 5 + 32;
    System.out.println(c + " C = " + f + " F");
}` },
            { en: 'In main, a for loop goes from 0 to 40 in steps of 10. Each turn calls the method with the loop variable as the argument.', code: J`
for (int c = 0; c <= 40; c += 10) {
    printRow(c);
}` },
            { en: 'The loop variable c is an int, but the parameter is a double, so 10 arrives as 10.0. That is why the output shows 10.0, not 10. Also notice: main\'s c and printRow\'s c are two different boxes with the same name.' }
          ],
          code: J`
public class Main {
    public static void printRow(double c) {
        double f = c * 9 / 5 + 32;
        System.out.println(c + " C = " + f + " F");
    }

    public static void main(String[] args) {
        for (int c = 0; c <= 40; c += 10) {
            printRow(c);
        }
    }
}`, out: "0.0 C = 32.0 F\n10.0 C = 50.0 F\n20.0 C = 68.0 F\n30.0 C = 86.0 F\n40.0 C = 104.0 F", ar: 'الحلقة في main ترسل قيمة مختلفة في كل دورة، والدالة تطبع سطراً واحداً.' },
        { type: 'check', q: 'In the temperature table, why does the first row print <code>0.0</code> and not <code>0</code>?', options: ['Because printRow adds .0 by hand', 'Because the int argument 0 is copied into a double parameter', 'Because the loop variable is a double', 'Because of %.1f'], answer: 1, explain: 'The parameter c is a double. When the int 0 is copied into it, it becomes 0.0, and a double always prints with a decimal point.' }
      ],
      mistakes: [
        { title: 'Arguments in the wrong order', en: 'The first argument goes to the first parameter. Mixing the order gives an error or a wrong result.', code: J`
orderCoffee(2, "Latte");     // wrong
orderCoffee("Latte", 2);     // correct` },
        { title: 'Writing the type in the call', en: 'In a call you write only the value, never the type.', code: J`
welcome(String "Lama");   // wrong
welcome("Lama");          // correct` },
        { title: 'Sharing one type for two parameters', en: 'Each parameter needs its own type.', code: J`
static void f(int a, b) { }       // wrong
static void f(int a, int b) { }   // correct` },
        { title: 'Wrong number of arguments', en: 'If the method has two parameters, the call needs exactly two arguments.' }
      ],
      remember: [
        'A <b>parameter</b> is a variable in the method header. It receives a value.',
        'An <b>argument</b> is the value you give in the call.',
        'Arguments are matched to parameters by position: first to first, second to second.',
        'Number, order and type must match.',
        'An argument can be a value, a variable or a calculation.'
      ],
      rememberAr: 'المعامل في رأس الدالة والوسيط في الاستدعاء. تُطابق الوسائط المعاملات بالترتيب. يجب تطابق العدد والترتيب والنوع.',
      practice: [
        { t: 'mcq', q: 'In <code>public static void area(double w, double h)</code>, what are <code>w</code> and <code>h</code>?', options: ['Arguments', 'Parameters', 'Return values', 'Methods'], answer: 1, explain: 'Variables declared in the method header are parameters.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void hi(String name) {
        System.out.println("Hi " + name);
    }

    public static void main(String[] args) {
        hi("Noor");
        hi("Sami");
    }
}`, answer: "Hi Noor\nHi Sami", explain: 'Each call copies its argument into name.' },
        { t: 'mcq', q: 'Which call is valid for <code>static void show(int a, int b)</code>?', options: ['<code>show(5);</code>', '<code>show(5, 6);</code>', '<code>show("5", 6);</code>', '<code>show(int 5, int 6);</code>'], answer: 1, explain: 'You need exactly two int values.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void show(int a, int b) {
        System.out.println(a + " - " + b + " = " + (a - b));
    }

    public static void main(String[] args) {
        int x = 3;
        int y = 10;
        show(y, x);
        show(x, y);
    }
}`, answer: "10 - 3 = 7\n3 - 10 = -7", explain: 'Arguments are matched by position, not by name. In the first call a is 10 and b is 3.' },
        { t: 'fill', q: 'Complete the parameter type and give an argument so the call prints <code>Tea: 4.50</code>.', code: J`
public static void printPrice(String item, ___ price) {
    System.out.printf("%s: %.2f%n", item, price);
}

// in main:
printPrice("Tea", ___);`, answers: ['double', ['4.5', '4.50']], explain: 'A price with decimals is a double. %.2f prints two decimals, so 4.5 prints as 4.50.' },
        { t: 'order', q: 'Put the lines in order. The program should print <code>3 x Tea</code>.', lines: [
          'public class Main {',
          '    public static void order(String drink, int cups) {',
          '        System.out.println(cups + " x " + drink);',
          '    }',
          '    public static void main(String[] args) {',
          '        order("Tea", 3);',
          '    }',
          '}'
        ], explain: 'The method is defined with two parameters; main calls it with "Tea" and 3.' },
        { t: 'code', q: 'Write a void method <code>printRow(int width)</code> that prints <code>width</code> hash signs (<code>#</code>) followed by a new line. In <code>main</code>, read a width and a height and call <code>printRow</code> once per row. No prompts.<br>Example: input <code>4 2</code> prints<br><code>####</code><br><code>####</code>', qAr: 'اكتب دالة تطبع صفاً من # واستخدمها لرسم مستطيل.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write printRow here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int width = input.nextInt();
        int height = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '4 2', expected: "####\n####" }, { stdin: '1 3', expected: "#\n#\n#" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void printRow(int width) {
        for (int i = 1; i <= width; i++) {
            System.out.print("#");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int width = input.nextInt();
        int height = input.nextInt();
        for (int r = 1; r <= height; r++) {
            printRow(width);
        }
    }
}`, hint: 'The method has one loop for the columns. main has a loop that calls the method once per row.', explain: 'Moving the inner loop into a method makes main short and the row code reusable.' },
        { t: 'output', q: 'What is the output? (Look at the positions, not the names.)', code: J`
public class Main {
    public static void showRoom(String building, int room) {
        System.out.println("Building " + building + ", room " + room);
    }

    public static void main(String[] args) {
        int room = 101;
        String building = "B";
        showRoom("A", room + 1);
        showRoom(building, 7);
    }
}`, answer: "Building A, room 102\nBuilding B, room 7", explain: 'First call: "A" goes to building and 101 + 1 = 102 goes to room. Second call: main\'s building ("B") goes to building and 7 goes to room.' },
        { t: 'bug', q: 'Huda\'s marks add up to 270 in 3 tests, so the program should print <code>Huda: 90</code>. It prints <code>Huda: 0</code>. Tap the line with the bug.', qAr: 'النتيجة 0 بدلاً من 90. أين الخطأ؟',
          code: J`
public class Main {
    public static void printAverage(String name, int total, int count) {
        System.out.println(name + ": " + (total / count));
    }

    public static void main(String[] args) {
        int total = 270;
        int count = 3;
        printAverage("Huda", count, total);
    }
}`, bug: 9,
          fix: J`
public class Main {
    public static void printAverage(String name, int total, int count) {
        System.out.println(name + ": " + (total / count));
    }

    public static void main(String[] args) {
        int total = 270;
        int count = 3;
        printAverage("Huda", total, count);
    }
}`, hint: 'Compare the order of the arguments in the call with the order of the parameters in the header.', explain: 'The arguments are in the wrong order. 3 goes to total and 270 goes to count, so the method works out 3 / 270, which is 0 in integer division. Both are int, so the compiler cannot see the mistake. Swap them: <code>printAverage("Huda", total, count);</code>', explainAr: 'الوسائط بترتيب خاطئ، والمترجم لا يكتشف ذلك لأن النوعين int.' },
        { t: 'code', q: 'Write a void method <code>printItem(String item, int qty, double price)</code> that prints one receipt line: <code>qty x item = total SAR</code>, where total is qty times price with 2 decimals. In main, read the item (one word), the quantity and the price, and call the method. No prompts.<br>Example: input <code>Latte 2 14.5</code> prints <code>2 x Latte = 29.00 SAR</code>', qAr: 'اكتب دالة بثلاثة معاملات تطبع سطراً من الفاتورة.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write printItem here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String item = input.next();
        int qty = input.nextInt();
        double price = input.nextDouble();
        // call printItem
    }
}`,
          tests: [ { stdin: 'Latte 2 14.5', expected: '2 x Latte = 29.00 SAR' }, { stdin: 'Water 3 1.5', expected: '3 x Water = 4.50 SAR' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void printItem(String item, int qty, double price) {
        double total = qty * price;
        System.out.printf("%d x %s = %.2f SAR%n", qty, item, total);
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String item = input.next();
        int qty = input.nextInt();
        double price = input.nextDouble();
        printItem(item, qty, price);
    }
}`, hint: 'Each parameter needs its own type. Use printf with %d, %s and %.2f.', explain: 'Three parameters, three arguments in the same order: String, int, double.' }
      ]
    },
    // ===================================================== Lesson 4
    {
      title: 'Pass-by-value: methods work on copies',
      titleAr: 'التمرير بالقيمة: الدوال تعمل على نسخ',
      minutes: 25,
      body: [
        { type: 'h', en: 'What really happens to an argument?' },
        { type: 'p', en: 'When you call a method, Java does not give the method your variable. It gives the method a <b>copy of the value</b>. This rule is called <b>pass-by-value</b>. It protects your variables: a method cannot damage them by accident.',
          ar: 'جافا ترسل إلى الدالة نسخة من القيمة، وليس المتغير نفسه. تسمى هذه القاعدة التمرير بالقيمة.' },
        { type: 'analogy', title: 'A photocopy of your mark sheet', en: 'You give your teacher a <b>photocopy</b> of your mark sheet. The teacher writes on it and crosses things out. Your original sheet at home is not changed. The parameter is the photocopy. Your variable is the original.', ar: 'المعامل مثل صورة الورقة، والمتغير الأصلي هو الورقة الأصلية التي لا تتغير.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void increment(int n) {
        n++;
        System.out.println("Inside: n = " + n);
    }

    public static void main(String[] args) {
        int x = 5;
        increment(x);
        System.out.println("After: x = " + x);
    }
}`, out: "Inside: n = 6\nAfter: x = 5" },
        { type: 'lines', title: 'Follow the values', rows: [
          ['int x = 5;', 'main has a variable x with value 5.'],
          ['increment(x);', 'Java copies 5 into the parameter n. Now there are two separate boxes: x and n.'],
          ['n++;', 'Only the box n changes: it becomes 6. The box x is still 5.'],
          ['println("After: x = " + x);', 'Back in main, x is still 5.']
        ], ar: 'n نسخة من x. تغيير n لا يغيّر x.' },
        { type: 'memory', title: 'Two boxes: x and its copy n', en: 'Press Next and watch the two boxes. Only the box of increment changes.',
          frames: [
            { label: 'After <code>int x = 5;</code>', vars: [{ name: 'main: x', type: 'int', value: '5' }] },
            { label: '<code>increment(x);</code> is called: the value 5 is <b>copied</b> into a new box n', vars: [{ name: 'main: x', type: 'int', value: '5' }, { name: 'increment: n', type: 'int', value: '5' }] },
            { label: 'After <code>n++;</code> only n changes. It prints <code>Inside: n = 6</code>', vars: [{ name: 'main: x', type: 'int', value: '5' }, { name: 'increment: n', type: 'int', value: '6' }] },
            { label: 'increment ended: the box n is removed, and the 6 is lost. main prints <code>After: x = 5</code>', vars: [{ name: 'main: x', type: 'int', value: '5' }] }
          ], ar: 'الدالة غيّرت صندوقها n فقط، ثم اختفى الصندوق، وبقي x كما هو.' },
        { type: 'analogy', title: 'Your phone number in a friend\'s notebook', en: 'You tell a friend your phone number, and she writes it in her notebook. Later she crosses out one digit in her notebook. Does your real phone number change? No. She only changed her copy. A method receives the value of your variable in the same way: it writes it in its own box, and whatever it does to that box stays inside the method.', ar: 'صديقتك كتبت رقمك في دفترها. إذا غيّرت ما في دفترها فرقمك الحقيقي لا يتغير.' },
        { type: 'check', q: 'After this code, what is the value of <code>x</code>?', code: J`
int x = 10;
change(x);   // change does: n = n + 100;`, options: ['10', '110', '100', 'It is an error'], answer: 0, explain: 'The method changes only its own copy n.' },
        { type: 'h', en: 'Same name, different boxes' },
        { type: 'p', en: 'Even when the parameter has the <b>same name</b> as the caller\'s variable, they are two different boxes. This is why a simple "swap" method cannot swap the caller\'s variables.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
        System.out.println("In swap: a=" + a + ", b=" + b);
    }

    public static void main(String[] args) {
        int a = 1;
        int b = 2;
        System.out.println("Before: a=" + a + ", b=" + b);
        swap(a, b);
        System.out.println("After: a=" + a + ", b=" + b);
    }
}`, out: "Before: a=1, b=2\nIn swap: a=2, b=1\nAfter: a=1, b=2" },
        { type: 'p', en: 'Inside <code>swap</code>, the copies are swapped. Back in <code>main</code>, the originals are untouched. If you want a changed value back, the method must <b>return</b> it. You will learn that in the next lesson.',
          ar: 'التبديل تم على النسخ فقط. إذا أردنا نتيجة فعلينا إرجاعها (الدرس التالي).' },
        { type: 'memory', title: 'Why swap does not swap main\'s variables', en: 'There are two boxes called a and two boxes called b: one pair in main and one pair in swap. Press Next.',
          frames: [
            { label: 'After <code>int a = 1;</code> and <code>int b = 2;</code> in main', vars: [{ name: 'main: a', type: 'int', value: '1' }, { name: 'main: b', type: 'int', value: '2' }] },
            { label: '<code>swap(a, b);</code> is called: 1 and 2 are copied into swap\'s own a and b', vars: [{ name: 'main: a', type: 'int', value: '1' }, { name: 'main: b', type: 'int', value: '2' }, { name: 'swap: a', type: 'int', value: '1' }, { name: 'swap: b', type: 'int', value: '2' }] },
            { label: 'After <code>temp = a; a = b; b = temp;</code> the copies are swapped. It prints <code>In swap: a=2, b=1</code>', vars: [{ name: 'main: a', type: 'int', value: '1' }, { name: 'main: b', type: 'int', value: '2' }, { name: 'swap: a', type: 'int', value: '2' }, { name: 'swap: b', type: 'int', value: '1' }, { name: 'swap: temp', type: 'int', value: '1' }] },
            { label: 'swap ended: its three boxes are removed. main\'s a and b were never touched', vars: [{ name: 'main: a', type: 'int', value: '1' }, { name: 'main: b', type: 'int', value: '2' }] }
          ], ar: 'يوجد صندوقان باسم a وصندوقان باسم b. التبديل حدث في صناديق swap فقط.' },
        { type: 'note', kind: 'warn', en: 'A method cannot change the caller\'s <code>int</code>, <code>double</code> or <code>char</code> variables. Do not expect it to.' },
        { type: 'h', en: 'The same rule for String parameters' },
        { type: 'p', en: 'You may think: "A String is different, maybe the method can change my text." Try it. In this course, a String parameter follows the same rule: if the method gives its parameter a new value, the caller\'s variable keeps the old text.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void shout(String word) {
        word = word.toUpperCase();
        System.out.println("In shout: " + word);
    }

    public static void main(String[] args) {
        String word = "salam";
        shout(word);
        System.out.println("In main: " + word);
    }
}`, out: "In shout: SALAM\nIn main: salam" },
        { type: 'lines', rows: [
          ['shout(word);', 'The text "salam" is copied into shout\'s parameter word.'],
          ['word = word.toUpperCase();', 'shout puts a new text, "SALAM", in its own box.'],
          ['"In main: " + word', 'main\'s box still holds "salam".']
        ], ar: 'حتى مع النصوص: تغيير المعامل داخل الدالة لا يغيّر متغير main.' },
        { type: 'check', q: 'After <code>String w = "salam"; shout(w);</code> (shout is the method above), what does <code>w</code> hold?', options: ['"SALAM"', '"salam"', '"SALAM!"', 'null'], answer: 1, explain: 'shout changed only its own parameter. main\'s variable w still holds "salam".' },
        { type: 'h', en: 'Why does Java work like this?' },
        { type: 'p', en: 'Pass-by-value makes programs <b>safe</b> and <b>easy to read</b>. When you call <code>printReceipt(total)</code>, you know for sure that <code>total</code> has the same value after the call. You do not need to read the method to check. In a big program with hundreds of methods, this is a big help.' },
        { type: 'steps', title: 'Worked example: add a bonus', problem: 'A method adds a 5-mark bonus to a mark and prints it. Does the student\'s own mark change in main?',
          steps: [
            { en: 'main creates a variable with the mark 70.', code: 'int mark = 70;' },
            { en: 'main calls the method. Java copies 70 into the parameter m.', code: 'showWithBonus(mark);' },
            { en: 'Inside the method, we add 5 to the copy and print it: 75.', code: J`
m = m + 5;
System.out.println("With bonus: " + m);` },
            { en: 'The method ends and its copy disappears.' },
            { en: 'Back in main, we print mark. It is still 70.' }
          ],
          code: J`
public class Main {
    public static void showWithBonus(int m) {
        m = m + 5;
        System.out.println("With bonus: " + m);
    }

    public static void main(String[] args) {
        int mark = 70;
        showWithBonus(mark);
        System.out.println("Original: " + mark);
    }
}`, out: "With bonus: 75\nOriginal: 70", ar: 'العلامة الأصلية بقيت 70 لأن الدالة غيّرت النسخة فقط.' },
        { type: 'steps', title: 'Worked example: same names, two calls', problem: 'Predict the output. The parameters have the <b>same names</b> as main\'s variables. Does that change anything?',
          steps: [
            { en: 'main has two boxes: score = 80 and bonus = 5.', code: J`
int score = 80;
int bonus = 5;` },
            { en: 'First call <code>update(score, bonus)</code>: update gets its own score = 80 and bonus = 5. It changes its score to 85 and its bonus to 0, and prints "In update: 85 0".', code: J`
score = score + bonus;
bonus = 0;` },
            { en: 'The first call ends. update\'s boxes are removed. main still has score = 80 and bonus = 5.' },
            { en: 'Second call <code>update(score, 10)</code>: update gets score = 80 and bonus = 10. It prints "In update: 90 0".' },
            { en: 'Last line of main: main\'s own boxes were never changed, so it prints "In main: 80 5".' }
          ],
          code: J`
public class Main {
    public static void update(int score, int bonus) {
        score = score + bonus;
        bonus = 0;
        System.out.println("In update: " + score + " " + bonus);
    }

    public static void main(String[] args) {
        int score = 80;
        int bonus = 5;
        update(score, bonus);
        update(score, 10);
        System.out.println("In main: " + score + " " + bonus);
    }
}`, out: "In update: 85 0\nIn update: 90 0\nIn main: 80 5", ar: 'الأسماء متشابهة لكن الصناديق مختلفة، لذلك بقيت قيم main كما هي.' },
        { type: 'check', q: 'In the example above, why does the second call print 90 and not 95?', options: ['Because bonus became 0 in main', 'Because main\'s score is still 80, and 80 + 10 = 90', 'Because update remembers the old score 85', 'Because of integer division'], answer: 1, explain: 'The first call changed only its own copy. Each call starts with fresh copies of the arguments: 80 and 10.' }
      ],
      mistakes: [
        { title: 'Expecting the caller\'s variable to change', en: 'After calling a void method that changes its parameter, the original variable has the same value as before.', code: J`
reset(count);        // reset does n = 0;
// count is still the old value` },
        { title: 'Thinking the same name means the same box', en: 'A parameter named <code>a</code> and a variable named <code>a</code> in main are different variables.' },
        { title: 'Trying to swap with a void method', en: 'A void method with two int parameters cannot swap the caller\'s two variables.' },
        { title: 'Trying to send a result back through a parameter', en: 'Changing a parameter is not a way to give an answer to the caller. The change is lost when the method ends. To give an answer back, use <code>return</code> (next lesson).', code: J`
public static void addVat(double price) {
    price = price * 1.15;   // lost when the method ends
}`, ar: 'تغيير المعامل لا يرسل النتيجة إلى المستدعي.' }
      ],
      remember: [
        'Java passes <b>a copy of the value</b> to the parameter: pass-by-value.',
        'Changing the parameter does not change the caller\'s variable.',
        'A parameter and a variable with the same name are different boxes.',
        'The method\'s copy is removed when the method ends. The same is true for String parameters.',
        'To get a changed value back, use <code>return</code> (next lesson).'
      ],
      rememberAr: 'جافا ترسل نسخة من القيمة. تغيير المعامل لا يغير متغير المستدعي. للحصول على القيمة الجديدة نستخدم return.',
      practice: [
        { t: 'mcq', q: 'What does pass-by-value mean?', options: ['The method receives the variable itself', 'The method receives a copy of the value', 'The method receives the name of the variable', 'The method receives nothing'], answer: 1, explain: 'The parameter gets a copy, so the original variable is safe.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void change(int v) {
        v = v * 10;
    }

    public static void main(String[] args) {
        int score = 7;
        change(score);
        System.out.println(score);
    }
}`, answer: '7', explain: 'Only the copy v becomes 70. The variable score is unchanged.', explainAr: 'التمرير بالقيمة: تغيير v لا يؤثر على score.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void countdown(int n) {
        while (n > 0) {
            System.out.print(n + " ");
            n--;
        }
        System.out.println("Go!");
    }

    public static void main(String[] args) {
        int n = 3;
        countdown(n);
        System.out.println(n);
    }
}`, answer: "3 2 1 Go!\n3", explain: 'countdown decreases its own copy. The n in main is still 3.' },
        { t: 'mcq', q: 'After <code>swap(a, b)</code> (a void method that swaps its two parameters), what happens to <code>a</code> and <code>b</code> in main?', options: ['They are swapped', 'They stay the same', 'Both become 0', 'There is an error'], answer: 1, explain: 'swap works on copies only.' },
        { t: 'fill', q: 'Complete the code. The method changes its parameter, but main keeps the old value, so the last line prints <code>4</code>.', code: J`
public static void triple(int n) {
    n = n * 3;
}

// in main:
int a = 4;
triple(___);
System.out.println(___);`, answers: ['a', 'a'], explain: 'We pass a, the method triples a copy, and main still has a = 4.' },
        { t: 'order', q: 'Order the lines so the output is <code>Inside: 12</code> then <code>Outside: 4</code>.', lines: [
          'public class Main {',
          '    public static void triple(int n) {',
          '        n = n * 3;',
          '        System.out.println("Inside: " + n);',
          '    }',
          '    public static void main(String[] args) {',
          '        int a = 4;',
          '        triple(a);',
          '        System.out.println("Outside: " + a);',
          '    }',
          '}'
        ], explain: 'The copy becomes 12 inside the method; a stays 4 in main.' },
        { t: 'code', q: 'Write a void method <code>showDouble(int n)</code> that changes <code>n</code> to <code>n * 2</code> and prints <code>Double: </code> followed by the new value. In main, read an integer, call the method, then print <code>Original: </code> followed by the integer. No prompts.<br>Example: input <code>5</code> prints<br><code>Double: 10</code><br><code>Original: 5</code>', qAr: 'اطبع الضعف داخل الدالة ثم القيمة الأصلية في main.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write showDouble here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int number = input.nextInt();
        // your code here
    }
}`, tests: [ { stdin: '5', expected: "Double: 10\nOriginal: 5" }, { stdin: '21', expected: "Double: 42\nOriginal: 21" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void showDouble(int n) {
        n = n * 2;
        System.out.println("Double: " + n);
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int number = input.nextInt();
        showDouble(number);
        System.out.println("Original: " + number);
    }
}`, hint: 'Call showDouble(number); then print number.', explain: 'The method doubles its copy; the original stays the same.' },
        { t: 'mcq', q: 'main has <code>int steps = 4000;</code> and calls <code>walk(steps);</code>. Inside walk, the parameter is <code>int s</code> and the method runs <code>s = s + 1000;</code>. Just <b>before walk ends</b>, which boxes exist and what do they hold?', options: ['Only <code>main: steps = 5000</code>', '<code>main: steps = 4000</code> and <code>walk: s = 5000</code>', '<code>main: steps = 5000</code> and <code>walk: s = 5000</code>', 'Only <code>walk: s = 5000</code>'], answer: 1, explain: 'Both frames are on the stack: main waits while walk runs. walk changed only its own box s. When walk ends, s is removed and steps is still 4000.', explainAr: 'إطار main ينتظر، والدالة غيّرت صندوقها فقط.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void fix(String name) {
        name = name.trim().toUpperCase();
        System.out.println("[" + name + "]");
    }

    public static void main(String[] args) {
        String name = "  noura ";
        fix(name);
        System.out.println("[" + name + "]");
    }
}`, answer: "[NOURA]\n[  noura ]", explain: 'fix puts a new text in its own parameter. main\'s name still holds the old text, with its spaces.' },
        { t: 'bug', q: 'The program should swap the two values and print <code>20 10</code>. It prints <code>10 20</code>. Tap the line with the bug.', qAr: 'المطلوب تبديل القيمتين لكن الناتج لم يتغير. أين الخطأ؟',
          code: J`
public class Main {
    public static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
    }

    public static void main(String[] args) {
        int first = 10;
        int second = 20;
        swap(first, second);
        System.out.println(first + " " + second);
    }
}`, bug: 11,
          fix: J`
public class Main {
    public static void main(String[] args) {
        int first = 10;
        int second = 20;
        int temp = first;
        first = second;
        second = temp;
        System.out.println(first + " " + second);
    }
}`, hint: 'Can a void method change main\'s int variables?', explain: 'The call <code>swap(first, second)</code> sends copies. swap swaps its copies, and they are removed when it ends, so first and second do not change. One correct fix is to do the three swap lines in main itself, where the variables live.', explainAr: 'الدالة بدّلت النسخ فقط. نجري التبديل داخل main.' }
      ]
    },
    // ===================================================== Lesson 5
    {
      title: 'Return values: methods that give an answer back',
      titleAr: 'القيم المرجعة: دوال تعطي جواباً',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why return a value?' },
        { type: 'p', en: 'A void method prints its result and the result is gone. But often you want the answer to <b>use later</b>: to add it to a total, compare it, or print it in a different way. For this, a method can <b>return</b> a value to the place that called it.',
          ar: 'الدالة التي ترجع قيمة تعطي النتيجة لمن استدعاها ليستخدمها كما يشاء.' },
        { type: 'analogy', title: 'A vending machine again', en: 'You put in coins (arguments) and press a button (the call). The machine gives you a can (the return value). You can drink it, share it, or put it in your bag. A void method is like a machine that only shows a light but gives you nothing.', ar: 'آلة البيع: تدخل نقوداً (وسائط) فتعطيك علبة (قيمة مرجعة).' },
        { type: 'h', en: 'Your first value-returning method' },
        { type: 'code', code: J`
public static int square(int n) {
    return n * n;
}` },
        { type: 'lines', rows: [
          ['int', 'Instead of void we write the <b>type of the answer</b>. Here the answer is an int.'],
          ['square(int n)', 'The method has one input, n.'],
          ['return n * n;', 'Works out n times n and sends it back. The method stops here.']
        ], ar: 'بدل void نكتب نوع الجواب. وجملة return ترسل الجواب وتنهي الدالة.' },
        { type: 'p', en: 'When you call <code>square(5)</code>, the call becomes the value <code>25</code>. You can use it anywhere a number can be used.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static int square(int n) {
        return n * n;
    }

    public static void main(String[] args) {
        int a = square(5);
        System.out.println(a);
        System.out.println(square(3) + square(4));
        System.out.println(square(square(2)));
    }
}`, out: "25\n25\n16" },
        { type: 'lines', rows: [
          ['int a = square(5);', 'The call gives 25, and we store it in a.'],
          ['square(3) + square(4)', '9 + 16 = 25. Each call becomes a number first.'],
          ['square(square(2))', 'The inner call gives 4. Then square(4) gives 16.']
        ], ar: 'الاستدعاء يتحول إلى قيمة نخزنها أو نطبعها أو نستخدمها في عملية.' },
        { type: 'check', q: 'What does <code>System.out.println(square(6));</code> print?', options: ['square(6)', '36', '12', 'Nothing'], answer: 1, explain: 'The call returns 36 and println prints it.' },
        { type: 'analogy', title: 'Asking a friend a question', en: 'In class you whisper to a friend: "What is 15 times 4?" Your friend thinks and says "60". You write 60 in your notebook. You do not write the question; you write the <b>answer</b>. A call to a value-returning method is a question, and when the method finishes, the call is replaced by the answer.', ar: 'الاستدعاء سؤال، والقيمة المرجعة هي الجواب الذي يحل محل السؤال.' },
        { type: 'h', en: 'What happens at return, in memory' },
        { type: 'p', en: 'This version of square stores the answer in a variable first and then returns it. Watch how the value 16 leaves the method just before its frame is removed, and lands in main\'s variable.' },
        { type: 'memory', title: 'The answer travels back to main', en: 'Press Next. The frame of square has two boxes: the parameter n and the local variable result. At return, the value goes back to main and the frame disappears.',
          code: J`
public static int square(int n) {
    int result = n * n;
    return result;
}

public static void main(String[] args) {
    int side = 4;
    int total = square(side);
    System.out.println(total);
}`,
          frames: [
            { label: 'After <code>int side = 4;</code>', vars: [{ name: 'main: side', type: 'int', value: '4' }] },
            { label: '<code>square(side)</code> is called: 4 is copied into n', vars: [{ name: 'main: side', type: 'int', value: '4' }, { name: 'square: n', type: 'int', value: '4' }] },
            { label: 'After <code>int result = n * n;</code>', vars: [{ name: 'main: side', type: 'int', value: '4' }, { name: 'square: n', type: 'int', value: '4' }, { name: 'square: result', type: 'int', value: '16' }] },
            { label: '<code>return result;</code> sends 16 back. The frame of square is removed, and main stores 16 in <code>total</code>', vars: [{ name: 'main: side', type: 'int', value: '4' }, { name: 'main: total', type: 'int', value: '16' }] }
          ], ar: 'return ترسل القيمة إلى main قبل أن يختفي إطار الدالة، ثم نخزنها في total.' },
        { type: 'p', en: 'Notice: <code>result</code> is gone after the call, but its <b>value</b> is safe in <code>total</code>. The variable dies, the answer lives on in the caller.' },
        { type: 'note', kind: 'warn', en: 'If you call a value-returning method and do not use the result, the answer is thrown away. Write <code>int a = square(5);</code> or print it. Just writing <code>square(5);</code> compiles but does nothing useful.', ar: 'إذا لم تخزّن النتيجة أو تطبعها فستضيع.' },
        { type: 'h', en: 'Fixing the problem from Lesson 4' },
        { type: 'p', en: 'In the last lesson, a method could not change main\'s variable. Now we have the answer: the method <b>returns</b> the new value, and main <b>stores</b> it in its own variable. A fitness app counts your steps. Every walk adds more steps, and the goal is 8000 steps a day.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static int addSteps(int steps, int more) {
        return steps + more;
    }

    public static void main(String[] args) {
        int steps = 5000;
        steps = addSteps(steps, 2000);
        steps = addSteps(steps, 1500);
        System.out.println("Steps today: " + steps);
        System.out.println("Goal 8000 reached: " + (steps >= 8000));
    }
}`, out: "Steps today: 8500\nGoal 8000 reached: true" },
        { type: 'lines', rows: [
          ['steps = addSteps(steps, 2000);', 'Right side first: the method gets copies 5000 and 2000 and returns 7000. Then main puts 7000 in its own steps.'],
          ['steps = addSteps(steps, 1500);', 'Now the copies are 7000 and 1500. The method returns 8500, and main stores it.'],
          ['(steps >= 8000)', 'A comparison gives true or false; 8500 >= 8000 is true.']
        ], ar: 'الطريقة الصحيحة: الدالة ترجع القيمة الجديدة، وmain يخزنها في متغيره.' },
        { type: 'check', q: 'main has <code>int steps = 5000;</code>. Which line really changes main\'s steps to 7000?', options: ['<code>addSteps(steps, 2000);</code>', '<code>steps = addSteps(steps, 2000);</code>', '<code>addSteps(steps = 2000);</code>', '<code>return steps + 2000;</code> written in main'], answer: 1, explain: 'The method only returns a value. main must store that value with an assignment. The first option throws the answer away.' },
        { type: 'h', en: 'Choosing the return type' },
        { type: 'p', en: 'The return type must match the kind of answer. Whole number: <code>int</code>. Decimal number: <code>double</code>. Text: <code>String</code>. True or false: <code>boolean</code>.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static double average(int a, int b, int c) {
        return (a + b + c) / 3.0;
    }

    public static int totalPrice(int price, int quantity) {
        return price * quantity;
    }

    public static void main(String[] args) {
        System.out.println("Average: " + average(70, 80, 93));
        System.out.println("Total: " + totalPrice(15, 4) + " SAR");
    }
}`, out: "Average: 81.0\nTotal: 60 SAR" },
        { type: 'p', en: 'The average is a double because we divide by <code>3.0</code> to keep the decimals. A method declared <code>int</code> cannot return <code>3.5</code>.' },
        { type: 'h', en: 'Three ways to use a returned value' },
        { type: 'p', en: 'A returned value is just a value. You can store it, print it inside a longer text, or use it in a condition. This method changes Celsius to Fahrenheit and returns a double.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static double toFahrenheit(double c) {
        return c * 9 / 5 + 32;
    }

    public static void main(String[] args) {
        double today = toFahrenheit(25);
        System.out.println("Today: " + today + " F");
        System.out.println("Fever line: " + toFahrenheit(37.5) + " F");
        if (toFahrenheit(45) > 100) {
            System.out.println("Very hot!");
        }
    }
}`, out: "Today: 77.0 F\nFever line: 99.5 F\nVery hot!" },
        { type: 'lines', rows: [
          ['double today = toFahrenheit(25);', '1. Store it: the call returns 77.0, and we keep it in today.'],
          ['"Fever line: " + toFahrenheit(37.5) + " F"', '2. Use it in an expression: the call becomes 99.5, then the text is joined.'],
          ['if (toFahrenheit(45) > 100)', '3. Use it in a condition: 113.0 > 100 is true.']
        ], ar: 'نخزن القيمة المرجعة، أو نطبعها، أو نستخدمها في شرط.' },
        { type: 'table', head: ['', 'void method', 'value-returning method'], rows: [
          ['Header', '<code>static void printAvg(int a, int b)</code>', '<code>static double avg(int a, int b)</code>'],
          ['Gives back', 'nothing', 'one value'],
          ['Typical call', '<code>printAvg(3, 4);</code>', '<code>double r = avg(3, 4);</code>']
        ] },
        { type: 'check', q: 'Which header is right for a method that returns the price with 2 decimals, like 12.5?', options: ['<code>static int price()</code>', '<code>static double price()</code>', '<code>static String price()</code>', '<code>static void price()</code>'], answer: 1, explain: 'A number with decimals needs double.' },
        { type: 'steps', title: 'Worked example: the cost of a gym month', problem: 'A gym costs 120 SAR per month. Write a method that returns the cost for a number of months, and use it in main. Read the months from the keyboard.',
          steps: [
            { en: 'Input: the number of months (int). Answer: the cost (int). So the method takes an int and returns an int.' },
            { en: 'Write the header.', code: 'public static int gymCost(int months) {' },
            { en: 'The body only calculates and returns.', code: J`
    return months * 120;
}` },
            { en: 'In main, read the months, call the method and store the answer.', code: J`
int months = input.nextInt();
int cost = gymCost(months);` },
            { en: 'Print the answer in main. The method itself prints nothing.', code: 'System.out.println("Cost: " + cost + " SAR");' }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static int gymCost(int months) {
        return months * 120;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int months = input.nextInt();
        int cost = gymCost(months);
        System.out.println("Cost: " + cost + " SAR");
    }
}`, stdin: '3', out: 'Cost: 360 SAR', ar: 'الدالة تحسب وترجع فقط، وmain هو الذي يطبع.' },
        { type: 'note', kind: 'tip', en: '<code>return</code> is the end of the method. When it runs, the method stops at once, even if more lines follow. If you write a statement directly after a <code>return</code> in the same block, the compiler says <i>unreachable statement</i>, because that line can never run.', ar: 'بعد return تنتهي الدالة فوراً، ولا يُنفذ أي سطر بعدها.' },
        { type: 'steps', title: 'Worked example: a cafe bill with VAT', problem: 'Read the price of one item (whole riyals) and the quantity. Print the subtotal, then the total with 15% VAT with 2 decimals. Use one method for each calculation.',
          steps: [
            { en: 'Two calculations, so two methods. subtotal: price times quantity. Both are ints, so the answer is an int.', code: J`
public static int subtotal(int price, int qty) {
    return price * qty;
}` },
            { en: 'withVat: the amount times 1.15. The answer has decimals, so the return type is double.', code: J`
public static double withVat(double amount) {
    return amount * 1.15;
}` },
            { en: 'In main, read the input and call subtotal. Store the answer.', code: J`
int price = input.nextInt();
int qty = input.nextInt();
int sub = subtotal(price, qty);` },
            { en: 'Pass the answer of the first method to the second one. The int sub goes into a double parameter; that is allowed.', code: 'double total = withVat(sub);' },
            { en: 'main prints both values. For 14 SAR × 3: subtotal 42, total 42 × 1.15 = 48.30.' }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static int subtotal(int price, int qty) {
        return price * qty;
    }

    public static double withVat(double amount) {
        return amount * 1.15;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int price = input.nextInt();
        int qty = input.nextInt();
        int sub = subtotal(price, qty);
        double total = withVat(sub);
        System.out.println("Subtotal: " + sub + " SAR");
        System.out.printf("Total with VAT: %.2f SAR%n", total);
    }
}`, stdin: '14 3', out: "Subtotal: 42 SAR\nTotal with VAT: 48.30 SAR", ar: 'نتيجة الدالة الأولى تصبح وسيطاً للدالة الثانية.' },
        { type: 'check', q: 'Could we write the two calls in one line, like <code>double total = withVat(subtotal(price, qty));</code>?', options: ['No, a call cannot be an argument', 'Yes: the inner call runs first, and its answer becomes the argument of the outer call', 'Yes, but the outer call runs first', 'Only if both methods return double'], answer: 1, explain: 'A call is a value, so it can be an argument. Java always works out the inner call first, just like square(square(2)).' }
      ],
      mistakes: [
        { title: 'Forgetting to use the result', en: 'The returned value must be stored or printed.', code: J`
totalPrice(15, 4);                 // the answer is lost
int t = totalPrice(15, 4);         // good` },
        { title: 'Printing inside instead of returning', en: 'If a method prints its answer, you cannot use it in another calculation. Return the answer and let main print it.' },
        { title: 'Wrong return type', en: 'An int method cannot return a decimal number.', code: J`
public static int half(int n) {
    return n / 2.0;    // error: double cannot become int
}` },
        { title: 'Using println with a void method', en: '<code>System.out.println(printLine());</code> is an error because a void method gives no value to print.' }
      ],
      remember: [
        'Put the <b>type of the answer</b> in the header instead of <code>void</code>.',
        '<code>return value;</code> sends the answer back and ends the method.',
        'The call becomes a value: store it, print it, or use it in a calculation.',
        'The type of the returned value must match the return type.',
        'Good style: calculating methods return; <code>main</code> prints.'
      ],
      rememberAr: 'نكتب نوع الجواب بدل void. return ترسل الجواب وتنهي الدالة. الاستدعاء يصبح قيمة نخزنها أو نطبعها. الأفضل أن تحسب الدالة وترجع وmain يطبع.',
      practice: [
        { t: 'mcq', q: 'Which keyword sends an answer back to the caller?', options: ['<code>void</code>', '<code>return</code>', '<code>static</code>', '<code>call</code>'], answer: 1, explain: 'return sends a value back and ends the method.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int square(int n) {
        return n * n;
    }

    public static void main(String[] args) {
        System.out.println(square(3) + square(4));
        System.out.println(square(square(2)));
    }
}`, answer: "25\n16", explain: '9 + 16 = 25. square(2) is 4, and square(4) is 16.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int f(int x) {
        return x * 2 + 1;
    }

    public static void main(String[] args) {
        int a = f(3);
        System.out.println(a);
        System.out.println(f(a));
    }
}`, answer: "7\n15", explain: 'f(3) = 3*2+1 = 7. Then f(7) = 15.' },
        { t: 'mcq', q: 'What should the return type be for a method that returns the average of three marks, such as 81.5?', options: ['int', 'double', 'void', 'boolean'], answer: 1, explain: 'The answer can have decimals, so use double.' },
        { t: 'fill', q: 'Complete the method that returns the larger of two doubles.', code: J`
public static ___ larger(double a, double b) {
    if (a > b) {
        ___ a;
    }
    return b;
}`, answers: ['double', 'return'], explain: 'The method gives back a double, and return a; sends a back when it is larger.' },
        { t: 'order', q: 'Order the lines to make a method that returns the total of price and tax.', lines: [
          'public static int withTax(int price, int tax) {',
          '    int total = price + tax;',
          '    return total;',
          '}'
        ], explain: 'Header, calculation, then return. The closing brace ends the method.' },
        { t: 'code', q: 'Write <code>public static int totalPrice(int price, int quantity)</code> that returns <code>price * quantity</code>. In main, read the price and the quantity and print <code>Total: X SAR</code>. No prompts.<br>Example: input <code>15 4</code> prints <code>Total: 60 SAR</code>', qAr: 'اكتب دالة ترجع الإجمالي واطبعه في main.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write totalPrice here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int price = input.nextInt();
        int quantity = input.nextInt();
        // print the total
    }
}`, tests: [ { stdin: '15 4', expected: 'Total: 60 SAR' }, { stdin: '7 0', expected: 'Total: 0 SAR' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static int totalPrice(int price, int quantity) {
        return price * quantity;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int price = input.nextInt();
        int quantity = input.nextInt();
        System.out.println("Total: " + totalPrice(price, quantity) + " SAR");
    }
}`, hint: 'The method only returns. main prints the text and the call.', explain: 'The call totalPrice(price, quantity) becomes a number that we join into the text.' },
        { t: 'bug', q: 'After two walks the app should print <code>Steps today: 7000</code>. It prints <code>Steps today: 5000</code>. There is no compile error. Tap the line with the bug.', qAr: 'النتيجة لم تتغير. أين الخطأ؟',
          code: J`
public class Main {
    public static int addSteps(int steps, int more) {
        return steps + more;
    }

    public static void main(String[] args) {
        int steps = 5000;
        addSteps(steps, 2000);
        System.out.println("Steps today: " + steps);
    }
}`, bug: 8,
          fix: J`
public class Main {
    public static int addSteps(int steps, int more) {
        return steps + more;
    }

    public static void main(String[] args) {
        int steps = 5000;
        steps = addSteps(steps, 2000);
        System.out.println("Steps today: " + steps);
    }
}`, hint: 'The method returns 7000. Where does that answer go?', explain: 'Line 8 calls the method but ignores its return value, so 7000 is thrown away. The method cannot change main\'s steps by itself (pass-by-value). Store the answer: <code>steps = addSteps(steps, 2000);</code>', explainAr: 'تجاهلنا القيمة المرجعة. يجب تخزينها في steps.' },
        { t: 'bug', q: 'This program should print the average <code>87.5</code>, but it does not compile. Tap the line with the bug.', qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
public class Main {
    public static int average(int a, int b) {
        return (a + b) / 2.0;
    }

    public static void main(String[] args) {
        System.out.println(average(90, 85));
    }
}`, bug: [2, 3],
          fix: J`
public class Main {
    public static double average(int a, int b) {
        return (a + b) / 2.0;
    }

    public static void main(String[] args) {
        System.out.println(average(90, 85));
    }
}`, hint: 'What type is (a + b) / 2.0? What type does the header promise?', explain: 'Dividing by 2.0 gives a double (87.5), but the header promises an int. A double cannot be returned as an int, so the compiler reports <i>possible lossy conversion</i>. The return type must match: change <code>int</code> to <code>double</code> in the header.', explainAr: 'نوع القيمة المرجعة لا يطابق رأس الدالة.' },
        { t: 'code', q: 'Write <code>public static double toFahrenheit(double c)</code> that returns <code>c * 9 / 5 + 32</code>. In main, read a Celsius value (it may have decimals) and print <code>c C = f F</code> using the call. Do not print inside the method. No prompts.<br>Example: input <code>25</code> prints <code>25.0 C = 77.0 F</code>', qAr: 'اكتب دالة ترجع درجة الحرارة بالفهرنهايت، واطبع في main.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write toFahrenheit here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double c = input.nextDouble();
        // print the line
    }
}`,
          tests: [ { stdin: '25', expected: '25.0 C = 77.0 F' }, { stdin: '-40', expected: '-40.0 C = -40.0 F' }, { stdin: '37.5', expected: '37.5 C = 99.5 F' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static double toFahrenheit(double c) {
        return c * 9 / 5 + 32;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double c = input.nextDouble();
        System.out.println(c + " C = " + toFahrenheit(c) + " F");
    }
}`, hint: 'The method has one line: return c * 9 / 5 + 32; main joins c, the call and the texts.', explain: 'The method only calculates. main decides how the answer is shown.' }
      ]
    },
    // ===================================================== Lesson 6
    {
      title: 'Boolean methods and "missing return"',
      titleAr: 'الدوال المنطقية وخطأ missing return',
      minutes: 30,
      body: [
        { type: 'h', en: 'Methods that answer yes or no' },
        { type: 'p', en: 'Many questions have a yes/no answer: Is the mark a pass? Is the year a leap year? Is the number even? A method that answers such a question returns a <code>boolean</code> (<code>true</code> or <code>false</code>). By habit, its name starts with <code>is</code> or <code>has</code>.',
          ar: 'الدالة المنطقية ترجع true أو false وتُسمّى عادة بكلمة تبدأ بـ is.' },
        { type: 'analogy', title: 'A door guard', en: 'A guard at the gym door checks your card and says only "yes" or "no". He does not talk about anything else. A boolean method is a guard: it checks the input and answers true or false.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static boolean isPass(int mark) {
        return mark >= 50;
    }

    public static void main(String[] args) {
        System.out.println(isPass(75));
        System.out.println(isPass(40));
        if (isPass(50)) {
            System.out.println("Well done");
        }
    }
}`, out: "true\nfalse\nWell done" },
        { type: 'lines', rows: [
          ['boolean isPass(int mark)', 'Returns true or false.'],
          ['return mark >= 50;', 'The comparison itself is true or false, so we can return it directly. No if is needed.'],
          ['if (isPass(50))', 'The call is a boolean, so it can be the condition of an if.']
        ], ar: 'المقارنة نفسها قيمة منطقية فنرجعها مباشرة.' },
        { type: 'check', q: 'What does <code>isPass(49)</code> return when <code>isPass</code> is <code>return mark &gt;= 50;</code>?', options: ['true', 'false', '49', 'An error'], answer: 1, explain: '49 is not at least 50, so the answer is false.' },
        { type: 'h', en: 'A shorter way to write it' },
        { type: 'p', en: 'Many beginners write a boolean method with an <code>if</code> that returns <code>true</code> or <code>false</code>. It works, but it is long. A comparison such as <code>n % 2 == 0</code> is <b>already</b> true or false, so you can return it directly. Both methods below give exactly the same answers.' },
        { type: 'code', code: J`
// long version: works, but not needed
public static boolean isEven(int n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// short version: the comparison is the answer
public static boolean isEven(int n) {
    return n % 2 == 0;
}` },
        { type: 'p', en: 'In the same way, do not write <code>if (isPass(mark) == true)</code>. The call is already true or false, so write <code>if (isPass(mark))</code>. For "not", use <code>!</code>: <code>if (!isPass(mark))</code> means "if the mark is not a pass".', ar: 'المقارنة نفسها true أو false فنرجعها مباشرة، ولا نكتب == true.' },
        { type: 'h', en: 'A boolean method as a loop condition' },
        { type: 'p', en: 'A boolean method can also control a loop. A common job: the teacher types a mark, and the program must refuse anything outside 0 to 100 and read again. The rule "a valid mark" lives in one method, and the loop asks it again and again.' },
        { type: 'code', run: true, stdin: '120 -5 88', code: J`
import java.util.Scanner;

public class Main {
    public static boolean isValidMark(int mark) {
        return mark >= 0 && mark <= 100;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();
        while (!isValidMark(mark)) {
            System.out.println("Not valid: " + mark);
            mark = input.nextInt();
        }
        System.out.println("Mark saved: " + mark);
    }
}`, out: "Not valid: 120\nNot valid: -5\nMark saved: 88" },
        { type: 'lines', rows: [
          ['return mark >= 0 && mark <= 100;', 'Both parts must be true: at least 0 <b>and</b> at most 100.'],
          ['while (!isValidMark(mark))', 'Read it as "while the mark is <b>not</b> valid". The loop body runs for 120 and for -5.'],
          ['mark = input.nextInt();', 'Read again inside the loop, or the loop would never end.']
        ], ar: 'الدالة المنطقية يمكن أن تكون شرطاً لحلقة: نكرر القراءة ما دامت القيمة غير صحيحة.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static boolean isLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    }

    public static void main(String[] args) {
        System.out.println("2024: " + isLeapYear(2024));
        System.out.println("1900: " + isLeapYear(1900));
        System.out.println("2000: " + isLeapYear(2000));
    }
}`, out: "2024: true\n1900: false\n2000: true" },
        { type: 'h', en: 'Returning inside if / else' },
        { type: 'p', en: 'Sometimes the answer depends on a choice. You may put <code>return</code> inside <code>if</code> and <code>else</code>. As soon as a <code>return</code> runs, the method ends.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static int max(int a, int b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    public static void main(String[] args) {
        System.out.println(max(17, 42));
        System.out.println(max(max(5, 19), 11));
    }
}`, out: "42\n19" },
        { type: 'p', en: 'The second line uses a call inside a call: <code>max(5, 19)</code> is 19, then <code>max(19, 11)</code> is 19.' },
        { type: 'h', en: 'The "missing return statement" error' },
        { type: 'p', en: 'A method with a return type must return a value on <b>every possible path</b>. The compiler checks the paths. If one path can reach the closing brace without a return, you get the error <code>missing return statement</code>.' },
        { type: 'analogy', title: 'Roads in a car park', en: 'Think of the method as a car park with several roads inside. Every road must end at an exit gate (a <code>return</code>). If even one road ends at a wall, a car can get stuck there. The compiler is the guard who checks every road before the car park opens. It does not care that "nobody will drive that way"; if the road exists, it needs a gate.', ar: 'كل طريق داخل الدالة يجب أن ينتهي ببوابة خروج (return)، وإلا يرفض المترجم البرنامج.' },
        { type: 'code', code: J`
public static int sign(int n) {
    if (n > 0) {
        return 1;
    } else if (n < 0) {
        return -1;
    }
    // what if n is 0? no return -> compile error
}` },
        { type: 'p', en: 'Fix it by adding a final return, so every path ends in a return:' },
        { type: 'code', code: J`
public static int sign(int n) {
    if (n > 0) {
        return 1;
    } else if (n < 0) {
        return -1;
    }
    return 0;
}` },
        { type: 'note', kind: 'exam', en: 'The compiler does not "think" that two conditions cover everything. <code>if (a &gt; b) return a; else if (a &lt;= b) return b;</code> still gives "missing return statement". Use a plain <code>else</code> or a final return.', ar: 'استخدم else أو return أخيراً لتغطية كل المسارات.' },
        { type: 'check', q: 'Why does the first <code>sign</code> method not compile?', options: ['int methods cannot use if', 'When n is 0, no return runs', 'return -1 is not allowed', 'The method has no parameter'], answer: 1, explain: 'If n is 0 both conditions are false and the method reaches the end without returning.' },
        { type: 'steps', title: 'Worked example: digits and divisibility', problem: 'Write a method that returns the sum of the digits of a number, and a boolean method that uses it to test if the number is divisible by 3.',
          steps: [
            { en: 'Digit sum idea: <code>n % 10</code> is the last digit and <code>n / 10</code> removes it. Repeat while n is bigger than 0.' },
            { en: 'Write sumDigits with a loop and return the total at the end.', code: J`
int sum = 0;
while (n > 0) {
    sum += n % 10;
    n /= 10;
}
return sum;` },
            { en: 'A number is divisible by 3 when its digit sum is. The second method calls the first.', code: 'return sumDigits(n) % 3 == 0;' },
            { en: 'Because of pass-by-value, changing n inside sumDigits does not change the number in main. Run the whole program with input 123.' }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static int sumDigits(int n) {
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }

    public static boolean isDivisibleBy3(int n) {
        return sumDigits(n) % 3 == 0;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        System.out.println("Sum of digits: " + sumDigits(n));
        System.out.println("Divisible by 3: " + isDivisibleBy3(n));
        System.out.println("Number: " + n);
    }
}`, stdin: '123', out: "Sum of digits: 6\nDivisible by 3: true\nNumber: 123", ar: 'دالة تستخدم دالة أخرى، والرقم الأصلي لم يتغير.' },
        { type: 'memory', title: 'Inside sumDigits(123)', en: 'sumDigits changes its own n in every turn of the loop. Watch main\'s n: it stays 123 the whole time.',
          frames: [
            { label: 'main calls <code>sumDigits(n)</code>: 123 is copied, and <code>sum</code> starts at 0', vars: [{ name: 'main: n', type: 'int', value: '123' }, { name: 'sumDigits: n', type: 'int', value: '123' }, { name: 'sumDigits: sum', type: 'int', value: '0' }] },
            { label: 'Turn 1: <code>sum += 123 % 10</code> adds 3, then <code>n /= 10</code>', vars: [{ name: 'main: n', type: 'int', value: '123' }, { name: 'sumDigits: n', type: 'int', value: '12' }, { name: 'sumDigits: sum', type: 'int', value: '3' }] },
            { label: 'Turn 2: adds 2, then n becomes 1', vars: [{ name: 'main: n', type: 'int', value: '123' }, { name: 'sumDigits: n', type: 'int', value: '1' }, { name: 'sumDigits: sum', type: 'int', value: '5' }] },
            { label: 'Turn 3: adds 1, then n becomes 0. Now <code>n &gt; 0</code> is false: the loop ends', vars: [{ name: 'main: n', type: 'int', value: '123' }, { name: 'sumDigits: n', type: 'int', value: '0' }, { name: 'sumDigits: sum', type: 'int', value: '6' }] },
            { label: '<code>return sum;</code> sends 6 back and the frame is removed. main prints <code>Sum of digits: 6</code>', vars: [{ name: 'main: n', type: 'int', value: '123' }] }
          ], ar: 'الدالة غيّرت نسختها من n حتى أصبحت 0، أما n في main فبقي 123.' },
        { type: 'steps', title: 'Worked example: marks to letter grades', problem: 'Read three marks and print the letter grade of each: A (90 or more), B (80 or more), C (70 or more), D (60 or more), otherwise F. Every path of the method must return.',
          steps: [
            { en: 'The answer is a letter, so the return type is String. The input is a mark (int).', code: 'public static String letterGrade(int mark) {' },
            { en: 'Check from the highest grade down. The first condition that is true returns, and the method ends at once, so a mark of 95 never reaches the B test.', code: J`
    if (mark >= 90) {
        return "A";
    } else if (mark >= 80) {
        return "B";
    } else if (mark >= 70) {
        return "C";
    } else if (mark >= 60) {
        return "D";` },
            { en: 'End with a plain <code>else</code>. Now every path has a return, and the compiler is happy.', code: J`
    } else {
        return "F";
    }
}` },
            { en: 'In main, a loop reads three marks. Each turn calls the method and prints the answer next to the mark.', code: J`
for (int i = 1; i <= 3; i++) {
    int mark = input.nextInt();
    System.out.println(mark + ": " + letterGrade(mark));
}` }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static String letterGrade(int mark) {
        if (mark >= 90) {
            return "A";
        } else if (mark >= 80) {
            return "B";
        } else if (mark >= 70) {
            return "C";
        } else if (mark >= 60) {
            return "D";
        } else {
            return "F";
        }
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        for (int i = 1; i <= 3; i++) {
            int mark = input.nextInt();
            System.out.println(mark + ": " + letterGrade(mark));
        }
    }
}`, stdin: '95 72 40', out: "95: A\n72: C\n40: F", ar: 'نبدأ من أعلى درجة، وننهي بـ else حتى يكون لكل مسار return.' },
        { type: 'check', q: 'In letterGrade, what is returned for a mark of exactly 80?', options: ['"A"', '"B"', '"C"', 'Nothing: missing return'], answer: 1, explain: '80 &gt;= 90 is false, then 80 &gt;= 80 is true, so the method returns "B" and stops.' }
      ],
      mistakes: [
        { title: 'A path without return', en: 'Every path in a non-void method must end with a return.', code: J`
if (x > 0) { return 1; }
// nothing here -> missing return` },
        { title: 'Using = instead of == inside the method', en: '<code>return n % 2 = 0;</code> is an error. Use <code>==</code> to compare.' },
        { title: 'Writing code after return', en: 'Lines after a <code>return</code> in the same block can never run, and the compiler complains (unreachable code).' },
        { title: 'Returning the wrong type', en: 'A boolean method must return true or false, not a number or text.' }
      ],
      remember: [
        'A <code>boolean</code> method answers yes/no with <code>true</code> or <code>false</code>.',
        'You can return a comparison directly: <code>return mark &gt;= 50;</code>',
        '<code>return</code> ends the method immediately.',
        'Every path of a non-void method must return a value, otherwise: <i>missing return statement</i>.',
        'One method can call another method.'
      ],
      rememberAr: 'الدالة المنطقية ترجع true أو false. return تنهي الدالة فوراً. يجب أن ترجع الدالة قيمة في كل المسارات وإلا يظهر missing return statement.',
      practice: [
        { t: 'mcq', q: 'What does a method with return type <code>boolean</code> return?', options: ['Any number', 'true or false', 'Text', 'Nothing'], answer: 1, explain: 'A boolean value is either true or false.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static boolean isEven(int n) {
        return n % 2 == 0;
    }

    public static void main(String[] args) {
        System.out.println(isEven(10));
        System.out.println(isEven(7));
    }
}`, answer: "true\nfalse", explain: '10 % 2 is 0 (even). 7 % 2 is 1 (not even).' },
        { t: 'mcq', q: 'Why does this method not compile?', code: J`
public static int sign(int n) {
    if (n > 0) {
        return 1;
    } else if (n < 0) {
        return -1;
    }
}`, options: ['The return type should be void', 'Missing return statement when n is 0', 'A method cannot have two return statements', 'return -1 is not an int'], answer: 1, explain: 'When n is 0 neither branch runs. Add return 0; at the end.' },
        { t: 'fill', q: 'Complete the method so it returns true when the age is 18 or more.', code: J`
public static ___ isAdult(int age) {
    return age ___ 18;
}`, answers: ['boolean', '>='], explain: 'The answer is true/false, so the type is boolean. "18 or more" is >=.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int max(int a, int b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    public static void main(String[] args) {
        System.out.println(max(8, 3) + max(2, 9));
    }
}`, answer: '17', explain: 'max(8, 3) is 8 and max(2, 9) is 9. 8 + 9 = 17.' },
        { t: 'order', q: 'Order the lines of a method that returns "Pass" or "Fail".', lines: [
          'public static String result(int mark) {',
          '    if (mark >= 50) {',
          '        return "Pass";',
          '    }',
          '    return "Fail";',
          '}'
        ], explain: 'If the condition is true we return Pass. Otherwise we reach the final return and give Fail. Every path returns.' },
        { t: 'code', q: 'Write <code>public static boolean isAdult(int age)</code> (true when age is 18 or more). In main, read an age and print <code>Adult</code> or <code>Minor</code>. No prompts.', qAr: 'اكتب دالة منطقية لتحديد البالغ.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write isAdult here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        // print Adult or Minor
    }
}`, tests: [ { stdin: '20', expected: 'Adult' }, { stdin: '17', expected: 'Minor' }, { stdin: '18', expected: 'Adult' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static boolean isAdult(int age) {
        return age >= 18;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int age = input.nextInt();
        if (isAdult(age)) {
            System.out.println("Adult");
        } else {
            System.out.println("Minor");
        }
    }
}`, hint: 'return age >= 18; then use the call as the condition of an if.', explain: 'The boolean method keeps the rule in one place; main only decides what to print.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static boolean isPass(int mark) {
        return mark >= 50;
    }

    public static void main(String[] args) {
        int passed = 0;
        for (int mark = 30; mark <= 70; mark += 20) {
            if (isPass(mark)) {
                passed++;
                System.out.println(mark + " pass");
            } else {
                System.out.println(mark + " fail");
            }
        }
        System.out.println("Passed: " + passed);
    }
}`, answer: "30 fail\n50 pass\n70 pass\nPassed: 2", explain: 'The loop tries 30, 50 and 70. isPass(50) is true because 50 &gt;= 50. Two marks pass.' },
        { t: 'bug', q: 'This method does not compile: <i>missing return statement</i>. Tap the line you should change to fix it.', qAr: 'خطأ missing return. أي سطر نغيّر؟',
          code: J`
public class Main {
    public static String letter(int mark) {
        if (mark >= 90) {
            return "A";
        } else if (mark >= 80) {
            return "B";
        } else if (mark < 80) {
            return "C or lower";
        }
    }

    public static void main(String[] args) {
        System.out.println(letter(85));
    }
}`, bug: [7, 10],
          fix: J`
public class Main {
    public static String letter(int mark) {
        if (mark >= 90) {
            return "A";
        } else if (mark >= 80) {
            return "B";
        } else {
            return "C or lower";
        }
    }

    public static void main(String[] args) {
        System.out.println(letter(85));
    }
}`, hint: 'We know the three conditions cover every mark. Does the compiler know it?', explain: 'The compiler does not work out that <code>mark &lt; 80</code> is always true at that point. It sees a path where all three conditions are false and the method reaches the end with no return. Replace <code>else if (mark &lt; 80)</code> with a plain <code>else</code>.', explainAr: 'استبدل{{g:|ي}} else if الأخيرة بـ else.' },
        { t: 'code', q: 'In Saudi Arabia the weekend is Friday and Saturday. Write <code>public static boolean isWeekend(String day)</code> that returns true when day is <code>"Fri"</code> or <code>"Sat"</code>. In main, read a day (one word) and print <code>Weekend</code> or <code>Work day</code>. No prompts.', qAr: 'اكتب دالة منطقية تحدد هل اليوم عطلة نهاية الأسبوع.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write isWeekend here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String day = input.next();
        // print Weekend or Work day
    }
}`,
          tests: [ { stdin: 'Fri', expected: 'Weekend' }, { stdin: 'Sun', expected: 'Work day' }, { stdin: 'Sat', expected: 'Weekend' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static boolean isWeekend(String day) {
        return day.equals("Fri") || day.equals("Sat");
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String day = input.next();
        if (isWeekend(day)) {
            System.out.println("Weekend");
        } else {
            System.out.println("Work day");
        }
    }
}`, hint: 'Compare Strings with equals, not ==. Join the two tests with ||.', explain: 'The whole condition is true or false, so it can be returned directly.' }
      ]
    },
    // ===================================================== Lesson 7
    {
      title: 'Method overloading: one name, several versions',
      titleAr: 'التحميل الزائد: اسم واحد وعدة نسخ',
      minutes: 25,
      body: [
        { type: 'h', en: 'Why overloading?' },
        { type: 'p', en: 'Sometimes one job can be done with different kinds of input. To find an area, you may have one side (a square) or a width and a height (a rectangle). It is natural to call both jobs <code>area</code>. Java allows this. Writing several methods with the <b>same name</b> but <b>different parameters</b> is called <b>overloading</b>.',
          ar: 'التحميل الزائد: عدة دوال بنفس الاسم وقوائم معاملات مختلفة.' },
        { type: 'analogy', title: 'The word "open"', en: 'You "open" a door, "open" a bottle and "open" a bank account. It is one word, but what you do depends on what you open. Java looks at the arguments you give and picks the version that fits.', ar: 'كلمة "افتح" واحدة، لكن الفعل يختلف حسب الشيء الذي تفتحه.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static int area(int side) {
        return side * side;
    }

    public static int area(int width, int height) {
        return width * height;
    }

    public static void main(String[] args) {
        System.out.println(area(4));
        System.out.println(area(3, 5));
    }
}`, out: "16\n15" },
        { type: 'lines', rows: [
          ['area(int side)', 'Version 1: one int parameter.'],
          ['area(int width, int height)', 'Version 2: two int parameters. Same name, different parameter list.'],
          ['area(4)', 'One argument, so Java picks version 1.'],
          ['area(3, 5)', 'Two arguments, so Java picks version 2.']
        ], ar: 'تختار جافا النسخة حسب عدد الوسائط ونوعها.' },
        { type: 'check', q: 'Which call uses the version <code>area(int width, int height)</code>?', options: ['<code>area(7)</code>', '<code>area(7, 2)</code>', '<code>area()</code>', '<code>area("7")</code>'], answer: 1, explain: 'Two int arguments match two int parameters.' },
        { type: 'memory', title: 'Two versions, two different frames', en: 'Both methods are called area, but their frames look different: one has a box for side, the other has boxes for width and height.',
          code: J`
int a = area(4);
int b = area(3, 5);`,
          frames: [
            { label: '<code>area(4)</code>: one int argument, so Java runs <code>area(int side)</code>', vars: [{ name: 'area: side', type: 'int', value: '4' }] },
            { label: 'It returns 16. Its frame is removed and main stores 16 in a', vars: [{ name: 'main: a', type: 'int', value: '16' }] },
            { label: '<code>area(3, 5)</code>: two int arguments, so Java runs <code>area(int width, int height)</code>', vars: [{ name: 'main: a', type: 'int', value: '16' }, { name: 'area: width', type: 'int', value: '3' }, { name: 'area: height', type: 'int', value: '5' }] },
            { label: 'It returns 15. Its frame is removed and main stores 15 in b', vars: [{ name: 'main: a', type: 'int', value: '16' }, { name: 'main: b', type: 'int', value: '15' }] }
          ], ar: 'كل نسخة من area لها معاملاتها الخاصة، وجافا تختار حسب الوسائط.' },
        { type: 'analogy', title: 'Two students called Ahmed', en: 'In one class there are two students called Ahmed. The teacher does not get confused, because she uses the full name: "Ahmed Alharbi" and "Ahmed Alzahrani". For Java, the parameter list is like the family name. The method name plus its parameter list is called the <b>signature</b>, and every method in a class needs a different signature.', ar: 'اسم الدالة مع قائمة معاملاتها يسمى التوقيع، مثل الاسم الكامل للطالب.' },
        { type: 'h', en: 'Different types also work' },
        { type: 'code', run: true, code: J`
public class Main {
    public static String describe(int x) {
        return "int " + x;
    }

    public static String describe(double x) {
        return "double " + x;
    }

    public static String describe(String x) {
        return "String " + x;
    }

    public static void main(String[] args) {
        System.out.println(describe(5));
        System.out.println(describe(5.0));
        System.out.println(describe("5"));
    }
}`, out: "int 5\ndouble 5.0\nString 5" },
        { type: 'p', en: 'You have already used overloading: <code>System.out.println</code> has a version for int, double, String, char and more. That is why one name works for everything.', ar: 'println نفسها محمّلة تحميلاً زائداً.' },
        { type: 'table', head: ['Call', 'Version chosen', 'Why'], rows: [
          ['<code>area(4)</code>', '<code>area(int)</code>', 'exact match'],
          ['<code>area(3, 5)</code>', '<code>area(int, int)</code>', 'two arguments'],
          ['<code>area(1.0)</code>', '<code>area(double)</code> if it exists', 'exact match']
        ] },
        { type: 'note', kind: 'exam', en: 'You cannot overload by the <b>return type</b> alone. <code>int f(int x)</code> and <code>double f(int x)</code> in the same class give a compile error, because the call <code>f(5)</code> cannot tell which one you mean. The parameter lists must differ.', ar: 'لا يكفي اختلاف نوع القيمة المرجعة فقط.' },
        { type: 'check', q: 'Which pair is NOT a valid overload?', options: ['<code>int f(int x)</code> and <code>int f(int x, int y)</code>', '<code>int f(int x)</code> and <code>int f(double x)</code>', '<code>int f(int x)</code> and <code>double f(int x)</code>', '<code>void f(String s, int n)</code> and <code>void f(int n, String s)</code>'], answer: 2, explain: 'The third pair has identical parameters and differs only in return type.' },
        { type: 'h', en: 'How Java picks a version' },
        { type: 'p', en: 'Java looks at the arguments of the call. First it looks for a version whose parameters match <b>exactly</b>. If there is none, it tries to widen the arguments, for example an int into a double (the same rule you saw in Lesson 3). If still nothing fits, the program does not compile.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static double half(double x) {
        return x / 2;
    }

    public static void main(String[] args) {
        System.out.println(half(7));
        System.out.println(half(7.0));
    }
}`, out: "3.5\n3.5" },
        { type: 'p', en: 'Here there is only a double version. The call <code>half(7)</code> has an int, so Java widens 7 to 7.0 and runs the double version. If we also wrote <code>half(int x)</code>, then <code>half(7)</code> would choose the int version, because it matches exactly.', ar: 'جافا تبحث أولاً عن تطابق تام، ثم تحاول تحويل int إلى double.' },
        { type: 'h', en: 'One version can call another' },
        { type: 'p', en: 'Overloading is often used to give a <b>default value</b>. Most customers order one cup, so <code>order("Tea")</code> should mean one cup. Instead of copying the printing code, the short version simply calls the full version with 1.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void order(String drink, int cups) {
        System.out.println(cups + " x " + drink);
    }

    public static void order(String drink) {
        order(drink, 1);
    }

    public static void main(String[] args) {
        order("Latte", 3);
        order("Tea");
    }
}`, out: "3 x Latte\n1 x Tea" },
        { type: 'lines', rows: [
          ['order("Latte", 3);', 'Two arguments: Java runs the full version directly.'],
          ['order("Tea");', 'One argument: Java runs the short version.'],
          ['order(drink, 1);', 'The short version calls the full version with 1 cup. The printing code is written only once.']
        ], ar: 'النسخة القصيرة تستدعي النسخة الكاملة بقيمة افتراضية، فلا نكرر الكود.' },
        { type: 'check', q: 'In the program above, how many methods actually print something when <code>order("Tea")</code> runs?', options: ['None', 'Only the short version', 'Only the full version (called by the short one)', 'Both versions print'], answer: 2, explain: 'The short version has no println. It only calls the full version, which prints "1 x Tea".' },
        { type: 'steps', title: 'Worked example: three areas, one name', problem: 'Write area for a square (int side), a rectangle (int width, int height) and a circle (double radius).',
          steps: [
            { en: 'The square needs one int.', code: J`
public static int area(int side) {
    return side * side;
}` },
            { en: 'The rectangle needs two ints. Same name, different parameter list.', code: J`
public static int area(int width, int height) {
    return width * height;
}` },
            { en: 'The circle needs a double radius. The formula is pi times radius times radius.', code: J`
public static double area(double radius) {
    return Math.PI * radius * radius;
}` },
            { en: 'In main, call all three. <code>area(1.0)</code> has a decimal point, so it picks the double version. We print it with two decimals.' }
          ],
          code: J`
public class Main {
    public static int area(int side) {
        return side * side;
    }

    public static int area(int width, int height) {
        return width * height;
    }

    public static double area(double radius) {
        return Math.PI * radius * radius;
    }

    public static void main(String[] args) {
        System.out.println(area(4));
        System.out.println(area(3, 5));
        System.out.printf("%.2f%n", area(1.0));
    }
}`, out: "16\n15\n3.14", ar: 'ثلاث دوال باسم area، وتختار جافا المناسبة.' },
        { type: 'steps', title: 'Worked example: the biggest of two or three', problem: 'Write <code>max</code> for two ints and for three ints. The three-number version must reuse the two-number version instead of repeating the if.',
          steps: [
            { en: 'The two-number version: if a is bigger return a, otherwise return b. Every path returns.', code: J`
public static int max(int a, int b) {
    if (a > b) {
        return a;
    }
    return b;
}` },
            { en: 'The three-number version has the same name and three parameters. The idea: the biggest of a, b, c is the biggest of (the biggest of a and b) and c.', code: J`
public static int max(int a, int b, int c) {
    return max(max(a, b), c);
}` },
            { en: 'Inside it, both calls have two arguments, so both run the two-number version. For max(4, 9, 7): max(4, 9) is 9, then max(9, 7) is 9.' },
            { en: 'In main, try a few calls. For max(12, 3, 8): max(12, 3) is 12, then max(12, 8) is 12.' }
          ],
          code: J`
public class Main {
    public static int max(int a, int b) {
        if (a > b) {
            return a;
        }
        return b;
    }

    public static int max(int a, int b, int c) {
        return max(max(a, b), c);
    }

    public static void main(String[] args) {
        System.out.println(max(4, 9));
        System.out.println(max(4, 9, 7));
        System.out.println(max(12, 3, 8));
    }
}`, out: "9\n9\n12", ar: 'نسخة الثلاثة أعداد تعيد استخدام نسخة العددين.' }
      ],
      mistakes: [
        { title: 'Same parameters, different return type', en: 'This is not overloading. The compiler reports a duplicate method.', code: J`
static int f(int x) { return x; }
static double f(int x) { return x; }   // error` },
        { title: 'Same parameter types with different names', en: 'Only the types and their order matter, not the names. <code>f(int a)</code> and <code>f(int b)</code> are the same signature.' },
        { title: 'Expecting a call that matches nothing to work', en: 'If no version fits the arguments (for example <code>area("x")</code>), you get a compile error.' },
        { title: 'Copying the same code into every version', en: 'If two versions do almost the same work, let the shorter one call the fuller one. Then a later change is made in one place only.', code: J`
static void order(String drink) {
    order(drink, 1);   // reuse, do not copy the println
}`, ar: 'لا تنسخ{{g:|ي}} الكود في كل نسخة؛ اجعل{{g:|ي}} نسخة تستدعي الأخرى.' }
      ],
      remember: [
        '<b>Overloading</b>: same name, different parameter lists.',
        'The lists differ in number, types or order of parameters.',
        'Java chooses the version that matches the arguments.',
        'Return type alone is not enough to overload.',
        '<code>println</code> is an overloaded method.'
      ],
      rememberAr: 'التحميل الزائد: نفس الاسم وقوائم معاملات مختلفة في العدد أو النوع أو الترتيب. جافا تختار المناسب. اختلاف نوع القيمة المرجعة وحده لا يكفي.',
      practice: [
        { t: 'mcq', q: 'What is method overloading?', options: ['Calling a method too many times', 'Methods with the same name but different parameter lists', 'A method that is too long', 'Two methods with identical headers'], answer: 1, explain: 'Same name, different parameters.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int add(int a, int b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println(add(1, 2));
        System.out.println(add(1, 2, 3));
    }
}`, answer: "3\n6", explain: 'Two arguments call the first version (3). Three arguments call the second (6).' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int add(int a, int b) {
        return a + b;
    }

    public static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(2, 3));
        System.out.println(add(2.5, 3));
    }
}`, answer: "5\n5.5", explain: 'add(2, 3) matches the int version. add(2.5, 3) needs the double version; 3 becomes 3.0.' },
        { t: 'mcq', q: 'Which pair is NOT a valid overload in the same class?', options: ['<code>int f(int x)</code> and <code>int f(int x, int y)</code>', '<code>int f(int x)</code> and <code>int f(double x)</code>', '<code>int f(int x)</code> and <code>double f(int x)</code>', '<code>void f(String s, int n)</code> and <code>void f(int n, String s)</code>'], answer: 2, explain: 'They differ only in return type, so the signatures are identical.' },
        { t: 'fill', q: 'Complete the second version of <code>show</code> so that both calls compile.', code: J`
public static void show(int x) {
    System.out.println("number " + x);
}

public static void show(___ s) {
    System.out.println("text " + s);
}

// in main: show(5); show("Hi");`, answers: ['String'], explain: 'A call with "Hi" needs a version whose parameter is a String.' },
        { t: 'output', q: 'What is the output? (There is no char version; a char can be widened to int.)', code: J`
public class Main {
    public static String describe(int x) {
        return "int " + x;
    }

    public static String describe(double x) {
        return "double " + x;
    }

    public static void main(String[] args) {
        System.out.println(describe(7));
        System.out.println(describe(7.0));
        System.out.println(describe('A'));
    }
}`, answer: "int 7\ndouble 7.0\nint 65", explain: "'A' has the code 65. Java widens char to int (the closest match), so the int version runs." },
        { t: 'code', q: 'Write two methods named <code>add</code>: <code>add(int a, int b)</code> and <code>add(int a, int b, int c)</code>, both returning the sum. In main, read three integers and print <code>add(a, b)</code> on one line and <code>add(a, b, c)</code> on the next. No prompts.', qAr: 'اكتب نسختين من add بمعاملين وثلاثة.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write the two add methods

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        int c = input.nextInt();
        // print the two sums
    }
}`, tests: [ { stdin: '1 2 3', expected: "3\n6" }, { stdin: '10 20 30', expected: "30\n60" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static int add(int a, int b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        int c = input.nextInt();
        System.out.println(add(a, b));
        System.out.println(add(a, b, c));
    }
}`, hint: 'Two methods with the same name add but different parameter lists.', explain: 'Java picks the version by the number of arguments.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void greet(String name, String time) {
        System.out.println("Good " + time + ", " + name);
    }

    public static void greet(String name) {
        greet(name, "morning");
    }

    public static void main(String[] args) {
        greet("Rana");
        greet("Majed", "evening");
    }
}`, answer: "Good morning, Rana\nGood evening, Majed", explain: 'greet("Rana") has one argument, so the short version runs. It calls the full version with "morning". The second call matches the full version directly.' },
        { t: 'bug', q: 'This program does not compile. Tap the line with the bug.', qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
public class Main {
    public static int half(int n) {
        return n / 2;
    }

    public static double half(int n) {
        return n / 2.0;
    }

    public static void main(String[] args) {
        System.out.println(half(7));
    }
}`, bug: 6,
          fix: J`
public class Main {
    public static int half(int n) {
        return n / 2;
    }

    public static double half(double n) {
        return n / 2.0;
    }

    public static void main(String[] args) {
        System.out.println(half(7));
        System.out.println(half(7.0));
    }
}`, hint: 'Compare the two parameter lists. Is the return type enough to make two versions different?', explain: 'Both versions have the parameter list <code>(int n)</code>; only the return type is different. Java could not know which one <code>half(7)</code> means, so it reports that the method is already defined. Give the second version a different parameter list, for example <code>(double n)</code>.', explainAr: 'لا يكفي اختلاف نوع القيمة المرجعة. يجب أن تختلف المعاملات.' },
        { t: 'code', q: 'Write two methods named <code>line</code>: <code>line(int n)</code> prints n stars (<code>*</code>) and a new line, and <code>line(int n, char c)</code> prints n copies of c and a new line. In main, read n and a character, call <code>line(n)</code> and then <code>line(n, c)</code>. No prompts.<br>Example: input <code>3 #</code> prints <code>***</code> then <code>###</code>', qAr: 'اكتب نسختين من line: واحدة بالنجوم وأخرى بالرمز المعطى.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write the two line methods

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        char c = input.next().charAt(0);
        // call both versions
    }
}`,
          tests: [ { stdin: '3 #', expected: "***\n###" }, { stdin: '5 =', expected: "*****\n=====" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void line(int n, char c) {
        for (int i = 1; i <= n; i++) {
            System.out.print(c);
        }
        System.out.println();
    }

    public static void line(int n) {
        line(n, '*');
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        char c = input.next().charAt(0);
        line(n);
        line(n, c);
    }
}`, hint: 'Write the version with the char first. The one-parameter version can call it with \'*\'.', explain: 'Same name, different parameter lists. The short version reuses the full one with a default character.' }
      ]
    },
    // ===================================================== Lesson 8
    {
      title: 'Variable scope: where a variable lives',
      titleAr: 'نطاق المتغيرات: أين يعيش المتغير؟',
      minutes: 25,
      body: [
        { type: 'h', en: 'What is scope?' },
        { type: 'p', en: 'A variable is not available everywhere. It can be used only in a certain part of the program. That part is called its <b>scope</b>. Scope protects your code: another method cannot change your variable by mistake. A variable declared inside a method is a <b>local variable</b>.',
          ar: 'نطاق المتغير هو الجزء من البرنامج الذي يمكن استخدامه فيه. المتغير المحلي يُعرَّف داخل الدالة.' },
        { type: 'analogy', title: 'Rooms in a house', en: 'Each method is a room. Things inside a room belong to that room. If your sister has a book in her room, you cannot read it from your room. Two rooms can both have a "lamp" and they are different lamps.', ar: 'كل دالة غرفة. ما بداخل الغرفة لا يراه من هو في غرفة أخرى.' },
        { type: 'h', en: 'Same name in two methods' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void setScore() {
        int score = 100;
        System.out.println("In setScore: " + score);
    }

    public static void main(String[] args) {
        int score = 50;
        setScore();
        System.out.println("In main: " + score);
    }
}`, out: "In setScore: 100\nIn main: 50" },
        { type: 'lines', rows: [
          ['int score = 100;', 'A variable in the room setScore.'],
          ['int score = 50;', 'A different variable in the room main. Same name, different box.'],
          ['"In main: " + score', 'main sees its own score: 50.']
        ], ar: 'المتغيران لهما الاسم نفسه لكنهما مختلفان لأن كل واحد في دالة.' },
        { type: 'check', q: 'Can method <code>main</code> use the variable <code>score</code> that is declared inside <code>setScore</code>?', options: ['Yes, always', 'No, it is local to setScore', 'Yes, if main is written first', 'Only if it is int'], answer: 1, explain: 'A local variable exists only inside its own method.' },
        { type: 'h', en: 'A method cannot see main\'s variables either' },
        { type: 'p', en: 'The wall works in both directions. A method cannot use a variable of main, even if main calls it. If you try, the compiler says <code>cannot find symbol</code>: "I do not know any variable with this name here".' },
        { type: 'code', code: J`
public static void showBill() {
    System.out.println("Pay " + price + " SAR");   // ERROR: cannot find symbol
}

public static void main(String[] args) {
    int price = 45;
    showBill();
}` },
        { type: 'p', en: 'The fix is what you learned in Lesson 3: send the value through a <b>parameter</b>. The parameter is a door in the wall. main pushes a copy of the value through the door.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void showBill(int price) {
        System.out.println("Pay " + price + " SAR");
    }

    public static void main(String[] args) {
        int price = 45;
        showBill(price);
    }
}`, out: 'Pay 45 SAR' },
        { type: 'p', en: 'To send information <b>into</b> a method, use parameters. To get information <b>out of</b> a method, use <code>return</code>. Those are the only two doors.', ar: 'الدالة لا ترى متغيرات main. ندخل القيم بالمعاملات ونخرج النتيجة بـ return.' },
        { type: 'analogy', title: 'The classroom whiteboard', en: 'During a lecture the teacher writes on the whiteboard. When the lecture ends, the board is wiped for the next class. The next teacher cannot read what was written before. A method\'s local variables are like that board: written during the call, wiped when the method ends. If you need something later, take it with you (return it) before the board is wiped.', ar: 'متغيرات الدالة مثل السبورة: تُمسح عند انتهاء المحاضرة.' },
        { type: 'h', en: 'Scope inside blocks' },
        { type: 'p', en: 'A block is the code between <code>{</code> and <code>}</code>. A variable lives from the line where it is declared until the closing brace of its block. Parameters live in the whole method. A loop variable lives only inside its loop.' },
        { type: 'code', code: J`
public static void demo() {
    int x = 1;
    if (x > 0) {
        int y = 2;
        System.out.println(x + y);   // OK: x and y are alive
    }
    System.out.println(y);           // ERROR: y is gone after }
}` },
        { type: 'lines', rows: [
          ['int x = 1;', 'x lives until the end of demo.'],
          ['int y = 2;', 'y lives only inside the if block.'],
          ['System.out.println(y);', 'The block has ended, so y no longer exists. Compile error.']
        ], ar: 'المتغير ينتهي عند القوس } الذي يغلق كتلته.' },
        { type: 'check', q: 'A variable is declared inside a for loop. Can you print it after the loop?', options: ['Yes', 'No, it is out of scope after the loop', 'Only if it is int', 'Only inside main'], answer: 1, explain: 'A variable declared in the loop disappears when the loop ends.' },
        { type: 'memory', title: 'Boxes inside a loop', en: 'Press Next. <code>total</code> lives in the whole method. <code>i</code> lives only in the loop. <code>bonus</code> lives only in one turn of the loop: a new bonus box is made in every turn.',
          code: J`
int total = 0;
for (int i = 1; i <= 2; i++) {
    int bonus = i * 10;
    total += bonus;
}
System.out.println(total);`,
          frames: [
            { label: 'After <code>int total = 0;</code>', vars: [{ name: 'main: total', type: 'int', value: '0' }] },
            { label: 'Turn 1: i is created. After <code>total += bonus;</code>', vars: [{ name: 'main: total', type: 'int', value: '10' }, { name: 'main: i', type: 'int', value: '1' }, { name: 'main: bonus', type: 'int', value: '10' }] },
            { label: 'End of turn 1: at the <code>}</code> the box bonus is gone. Then <code>i++</code> makes i 2', vars: [{ name: 'main: total', type: 'int', value: '10' }, { name: 'main: i', type: 'int', value: '2' }] },
            { label: 'Turn 2: a <b>new</b> bonus box. After <code>total += bonus;</code>', vars: [{ name: 'main: total', type: 'int', value: '30' }, { name: 'main: i', type: 'int', value: '2' }, { name: 'main: bonus', type: 'int', value: '20' }] },
            { label: 'i becomes 3, and 3 &lt;= 2 is false: the loop ends. i and bonus are out of scope. Only total is left, and it prints 30', vars: [{ name: 'main: total', type: 'int', value: '30' }] }
          ], ar: 'المتغير الذي يُعرَّف داخل الحلقة يختفي عند نهايتها، ويبقى total لأنه عُرّف قبلها.' },
        { type: 'h', en: 'Declare first, give the value later' },
        { type: 'p', en: 'Sometimes the value of a variable is decided inside an <code>if</code> or an <code>else</code>, but you need the variable after them. Declare it <b>before</b> the if, without a value, and give it a value in each branch.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        int mark = 72;
        String result;
        if (mark >= 50) {
            result = "Pass";
        } else {
            result = "Fail";
        }
        System.out.println(mark + ": " + result);
    }
}`, out: '72: Pass' },
        { type: 'p', en: 'If you wrote <code>String result = "Pass";</code> inside the if block, the variable would die at the closing brace of the if, and the last line could not see it.', ar: 'عرّف{{g:|ي}} المتغير قبل if إذا احتجت{{g:|ِ}} إليه بعدها.' },
        { type: 'note', kind: 'exam', en: 'You cannot declare the same name twice in nested blocks of one method. But two loops that come one after the other may each declare their own <code>i</code>, because the first <code>i</code> is gone when the second loop starts.', ar: 'يجوز تكرار الاسم في حلقتين متتاليتين، ولا يجوز داخل كتل متداخلة.' },
        { type: 'code', code: J`
for (int i = 0; i < 3; i++) { ... }
for (int i = 0; i < 5; i++) { ... }    // OK: separate scopes

int k = 0;
for (int k = 0; k < 3; k++) { ... }    // ERROR: k already exists` },
        { type: 'steps', title: 'Worked example: a variable that must live longer', problem: 'We want to add the numbers 1, 2 and 3 in a loop and print the total after the loop. Where must the variable total be declared?',
          steps: [
            { en: 'If we declare total inside the loop, it is created again each time and disappears after the loop. We could not print it.', code: J`
for (int i = 1; i <= 3; i++) {
    int total = 0;     // wrong place
}` },
            { en: 'So we declare it <b>before</b> the loop, in the outer block.', code: 'int total = 0;' },
            { en: 'The loop adds to it. The loop variable i is only needed inside the loop.', code: J`
for (int i = 1; i <= 3; i++) {
    total += i;
}` },
            { en: 'After the loop, total is still alive, so we can print it: 1 + 2 + 3 = 6.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        int total = 0;
        for (int i = 1; i <= 3; i++) {
            total += i;
        }
        System.out.println(total);
    }
}`, out: '6', ar: 'نعرّف total قبل الحلقة لأننا نحتاجه بعدها.' },
        { type: 'steps', title: 'Worked example: how many students passed?', problem: 'Read 4 marks and print how many are a pass (50 or more). Use a boolean method for the pass rule, and put every variable in the right scope.',
          steps: [
            { en: 'The rule "50 or more" goes in its own method. Its parameter mark lives only inside isPass.', code: J`
public static boolean isPass(int mark) {
    return mark >= 50;
}` },
            { en: 'The counter <code>passed</code> is needed <b>after</b> the loop, so it is declared before the loop.', code: 'int passed = 0;' },
            { en: 'Each mark is needed only inside one turn of the loop, so <code>mark</code> is declared inside the loop. main\'s mark and isPass\'s mark are different boxes.', code: J`
for (int i = 1; i <= 4; i++) {
    int mark = input.nextInt();
    if (isPass(mark)) {
        passed++;
    }
}` },
            { en: 'After the loop, i and mark are gone, but passed is still alive. Print it. For 75, 40, 90, 50 the answer is 3 (40 is the only fail).' }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static boolean isPass(int mark) {
        return mark >= 50;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int passed = 0;
        for (int i = 1; i <= 4; i++) {
            int mark = input.nextInt();
            if (isPass(mark)) {
                passed++;
            }
        }
        System.out.println("Passed: " + passed + " of 4");
    }
}`, stdin: '75 40 90 50', out: 'Passed: 3 of 4', ar: 'العداد قبل الحلقة، والعلامة داخلها، والقاعدة في دالة مستقلة.' },
        { type: 'check', q: 'In the example above, could we print <code>mark</code> after the loop?', options: ['Yes, it holds the last mark', 'No, mark is declared inside the loop, so it is out of scope after it', 'Yes, because isPass has a parameter called mark', 'Only if passed is 4'], answer: 1, explain: 'mark lives from its declaration to the closing brace of the loop body. After the loop it does not exist. The mark in isPass is a different variable.' }
      ],
      mistakes: [
        { title: 'Using a variable after its block ended', en: 'The loop variable <code>i</code> is gone after the loop.', code: J`
for (int i = 0; i < 3; i++) { }
System.out.println(i);   // error` },
        { title: 'Declaring a variable inside the loop when you need it after', en: 'Declare it before the loop.' },
        { title: 'Declaring the same name twice in nested blocks', en: 'A variable already in scope cannot be declared again inside an inner block.' },
        { title: 'Thinking a method can see another method\'s variables', en: 'Send values with parameters and get them back with return.' }
      ],
      remember: [
        'A <b>local variable</b> is declared inside a method.',
        '<b>Scope</b> = from the declaration to the closing brace of its block.',
        'Parameters live in the whole method; loop variables only in the loop.',
        'Variables in different methods are different, even with the same name.',
        'Need a value after a loop or an if? Declare it before.',
        'A method cannot see main\'s variables: values go in through parameters and come out with <code>return</code>.'
      ],
      rememberAr: 'المتغير المحلي يُعرَّف داخل دالة. نطاقه من التعريف حتى نهاية الكتلة. متغيرات الدوال المختلفة منفصلة. إذا احتجت القيمة بعد الحلقة فعرّف المتغير قبلها.',
      practice: [
        { t: 'mcq', q: 'Where can a local variable be used?', options: ['Anywhere in the class', 'In any method', 'From its declaration to the end of its block', 'Only on the line where it is declared'], answer: 2, explain: 'This is the definition of scope.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        int total = 0;
        for (int i = 1; i <= 3; i++) {
            int bonus = i * 10;
            total += bonus;
        }
        System.out.println(total);
    }
}`, answer: '60', explain: 'bonus is created fresh each time: 10 + 20 + 30 = 60. total lives outside the loop.' },
        { t: 'mcq', q: 'Which line causes a compile error?', code: J`
public static void main(String[] args) {
    int total = 0;                      // line A
    for (int i = 1; i <= 3; i++) {
        int bonus = 5;                  // line B
        total += i + bonus;             // line C
    }
    System.out.println(total + i);      // line D
}`, options: ['Line A', 'Line B', 'Line C', 'Line D'], answer: 3, explain: 'The scope of i is the for loop only. After the loop, i does not exist.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int twice(int value) {
        value = value * 2;
        return value;
    }

    public static void main(String[] args) {
        int value = 4;
        int result = twice(value);
        System.out.println(value + " " + result);
    }
}`, answer: '4 8', explain: 'The parameter is a separate copy. main\'s value stays 4; the returned 8 is stored in result.' },
        { t: 'fill', q: 'Fill the blank so the program prints <code>50</code>.', code: J`
public static void setScore() {
    int score = 100;
}

public static void main(String[] args) {
    int score = 50;
    setScore();
    System.out.println(___);
}`, answers: ['score'], explain: 'main prints its own score, which is 50. The score in setScore is a different variable.' },
        { t: 'order', q: 'Order the lines so the total is declared where the last line can use it.', lines: [
          'int total = 0;',
          'for (int i = 1; i <= 4; i++) {',
          '    total += i;',
          '}',
          'System.out.println(total);'
        ], explain: 'total is declared before the loop, so it is alive after it.' },
        { t: 'code', q: 'Write a void method <code>countdown(int n)</code> that prints the numbers from n down to 1, each on its own line, using a while loop that decreases <code>n</code>, and then prints <code>Go!</code>. In main, read n, call countdown, then print <code>Back in main: n = </code> and the value of n. No prompts.<br>Example: input <code>3</code> prints 3, 2, 1, Go! and then <code>Back in main: n = 3</code> (each on its own line).', qAr: 'العد التنازلي داخل الدالة ثم طباعة القيمة الأصلية في main.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write countdown here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // call countdown, then print n
    }
}`, tests: [ { stdin: '3', expected: "3\n2\n1\nGo!\nBack in main: n = 3" }, { stdin: '1', expected: "1\nGo!\nBack in main: n = 1" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void countdown(int n) {
        while (n > 0) {
            System.out.println(n);
            n--;
        }
        System.out.println("Go!");
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        countdown(n);
        System.out.println("Back in main: n = " + n);
    }
}`, hint: 'while (n > 0) { print n; n--; }', explain: 'countdown changes its own copy of n. main\'s n is still the value that was read.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int addTen(int n) {
        int result = n + 10;
        return result;
    }

    public static void main(String[] args) {
        int result = 5;
        int n = addTen(result);
        System.out.println(result + " " + n);
    }
}`, answer: '5 15', explain: 'addTen has its own n (5) and its own result (15). It returns 15, which main stores in its n. main\'s result is still 5.' },
        { t: 'bug', q: 'This program should print <code>Last day: 7000</code> and <code>Week: 28000</code>, but it does not compile. Tap the line with the bug.', qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int day = 1; day <= 7; day++) {
            int steps = day * 1000;
            sum += steps;
        }
        System.out.println("Last day: " + steps);
        System.out.println("Week: " + sum);
    }
}`, bug: 8,
          fix: J`
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        int steps = 0;
        for (int day = 1; day <= 7; day++) {
            steps = day * 1000;
            sum += steps;
        }
        System.out.println("Last day: " + steps);
        System.out.println("Week: " + sum);
    }
}`, hint: 'Where does the variable steps start and end?', explain: 'steps is declared inside the loop, so it is out of scope after the closing brace. Line 8 cannot see it (<i>cannot find symbol</i>). Declare steps before the loop and only assign it inside.', explainAr: 'المتغير steps انتهى نطاقه بعد الحلقة.' },
        { t: 'bug', q: 'This program does not compile: <i>cannot find symbol</i>. Tap the line where the error is reported.', qAr: 'الدالة تستخدم متغيراً من main. أين الخطأ؟',
          code: J`
public class Main {
    public static void printTotal() {
        System.out.println("Total: " + total);
    }

    public static void main(String[] args) {
        int total = 45;
        printTotal();
    }
}`, bug: 3,
          fix: J`
public class Main {
    public static void printTotal(int total) {
        System.out.println("Total: " + total);
    }

    public static void main(String[] args) {
        int total = 45;
        printTotal(total);
    }
}`, hint: 'Can printTotal see a variable that belongs to main?', explain: 'total is a local variable of main. printTotal is another method, so it cannot see it. Give printTotal a parameter <code>int total</code> and pass the value in the call: <code>printTotal(total);</code>', explainAr: 'نمرر القيمة إلى الدالة عن طريق معامل.' }
      ]
    },
    // ===================================================== Lesson 9
    {
      title: 'Designing with small methods (stepwise refinement)',
      titleAr: 'التصميم بدوال صغيرة (التحسين التدريجي)',
      minutes: 30,
      body: [
        { type: 'h', en: 'Big problems, small pieces' },
        { type: 'p', en: 'A big problem is scary. A small problem is easy. <b>Stepwise refinement</b> means: split the big problem into smaller steps, and split those steps again until each step is simple enough to be one method. Then <code>main</code> reads like a short plan.',
          ar: 'التحسين التدريجي: نقسم المشكلة الكبيرة إلى خطوات أصغر حتى تصبح كل خطوة دالة بسيطة.' },
        { type: 'analogy', title: 'Planning a trip', en: 'You do not plan "a trip" in one go. You split it: book the ticket, pack the bag, go to the airport. Then you split again: packing = clothes, charger, passport. Each small task is easy to do and to check.', ar: 'نخطط للرحلة بخطوات صغيرة، وكل خطوة سهلة.' },
        { type: 'list', items: [
          '<b>Reuse</b>: write once, call many times.',
          '<b>Readability</b>: a good name explains what the code does.',
          '<b>Testing</b>: check one small method at a time.',
          '<b>Teamwork</b>: friends can write different methods.'
        ] },
        { type: 'h', en: 'How do I find the methods?' },
        { type: 'p', en: 'Read the problem slowly and underline the <b>actions</b>: "read the usage", "work out the cost", "add VAT", "print the bill". Each action is a good candidate for a method. The <b>things</b> in the problem (the usage, the cost, the total) usually become variables in main or parameters. If an action is still big ("make the report"), split it again until each piece is a few lines.', ar: 'الأفعال في نص المسألة تصبح دوالاً، والأشياء تصبح متغيرات أو معاملات.' },
        { type: 'h', en: 'An example: the electricity bill' },
        { type: 'p', en: 'The first 200 kWh cost 0.18 SAR each. Every extra kWh costs 0.30 SAR. Then 15% VAT is added. Let us refine the plan:' },
        { type: 'table', head: ['Big step', 'Small steps (methods)'], rows: [
          ['Make the bill', 'read the usage, then <code>energyCost</code>, then <code>addVat</code>, then <code>printBill</code>']
        ] },
        { type: 'check', q: 'In stepwise refinement, what do we do with a big problem?', options: ['Solve it in one long main', 'Split it into smaller steps, one method each', 'Skip the hard parts', 'Copy code from another program'], answer: 1, explain: 'We keep splitting until each step is easy to write as a method.' },
        { type: 'code', run: true, stdin: '350', code: J`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int kwh = input.nextInt();
        double cost = energyCost(kwh);
        double total = addVat(cost);
        printBill(kwh, cost, total);
    }

    public static double energyCost(int kwh) {
        if (kwh <= 200) {
            return kwh * 0.18;
        }
        return 200 * 0.18 + (kwh - 200) * 0.30;
    }

    public static double addVat(double amount) {
        return amount * 1.15;
    }

    public static void printBill(int kwh, double cost, double total) {
        System.out.println("Usage: " + kwh + " kWh");
        System.out.printf("Energy cost: %.2f SAR%n", cost);
        System.out.printf("Total with VAT: %.2f SAR%n", total);
    }
}`, out: "Usage: 350 kWh\nEnergy cost: 81.00 SAR\nTotal with VAT: 93.15 SAR" },
        { type: 'lines', title: 'Read main like a plan', rows: [
          ['int kwh = input.nextInt();', 'Step 1: read the usage.'],
          ['double cost = energyCost(kwh);', 'Step 2: ask a method for the energy cost. It returns the answer.'],
          ['double total = addVat(cost);', 'Step 3: ask another method to add VAT.'],
          ['printBill(kwh, cost, total);', 'Step 4: a void method prints everything.']
        ], ar: 'main يقرأ كخطة: اقرأ، احسب، أضف الضريبة، اطبع.' },
        { type: 'memory', title: 'The bill program, one call at a time', en: 'Input 350. Each method gets its frame, does one job, returns, and disappears. main keeps the answers in its own boxes.',
          frames: [
            { label: 'After <code>int kwh = input.nextInt();</code>', vars: [{ name: 'main: kwh', type: 'int', value: '350' }] },
            { label: '<code>energyCost(kwh)</code> is running with its own copy of kwh', vars: [{ name: 'main: kwh', type: 'int', value: '350' }, { name: 'energyCost: kwh', type: 'int', value: '350' }] },
            { label: 'It returned 36.0 + 45.0 = 81.0. main stores it in cost', vars: [{ name: 'main: kwh', type: 'int', value: '350' }, { name: 'main: cost', type: 'double', value: '81.0' }] },
            { label: '<code>addVat(cost)</code> is running with amount = 81.0', vars: [{ name: 'main: kwh', type: 'int', value: '350' }, { name: 'main: cost', type: 'double', value: '81.0' }, { name: 'addVat: amount', type: 'double', value: '81.0' }] },
            { label: 'It returned 81.0 × 1.15. main stores it in total; printBill shows it as 93.15', vars: [{ name: 'main: kwh', type: 'int', value: '350' }, { name: 'main: cost', type: 'double', value: '81.0' }, { name: 'main: total', type: 'double', value: '≈ 93.15' }] }
          ], ar: 'كل دالة تؤدي عملاً واحداً وترجع النتيجة، وmain يحتفظ بالنتائج.' },
        { type: 'h', en: 'Top-down: write main first' },
        { type: 'p', en: 'Many programmers write <code>main</code> <b>first</b>, as a plan, using method names that do not exist yet. Then they write each method. This is called <b>top-down design</b>. But a program with missing methods does not compile, so you cannot run it. The solution is a <b>stub</b>.' },
        { type: 'analogy', title: 'A house with empty rooms', en: 'A builder first builds the walls and doors of every room, so the house stands. The rooms are still empty: no furniture, no paint. Then he finishes one room at a time and checks it. Stubs are the empty rooms: the program "stands" (compiles and runs) while you finish the methods one by one.', ar: 'الدوال المؤقتة مثل غرف فارغة في بيت مبني: البيت قائم ونكمل الغرف واحدة بعد الأخرى.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static double energyCost(int kwh) {
        return 0;          // stub: fill in later
    }

    public static double addVat(double amount) {
        return amount;     // stub: fill in later
    }

    public static void main(String[] args) {
        int kwh = 350;
        double cost = energyCost(kwh);
        double total = addVat(cost);
        System.out.println("Cost: " + cost + ", total: " + total);
    }
}`, out: 'Cost: 0.0, total: 0.0' },
        { type: 'p', en: 'The answers are wrong, of course, but the program compiles and the plan in main runs. Now fill in <code>energyCost</code>, run again, and check its answer. Then fill in <code>addVat</code>. You always have a working program, and when something breaks, you know it is in the method you just wrote.', ar: 'الدالة المؤقتة ترجع قيمة بسيطة حتى يعمل البرنامج، ثم نكملها ونختبرها.' },
        { type: 'note', kind: 'tip', en: 'Build one method at a time. First write a <b>stub</b>: a method with a temporary body such as <code>return 0;</code>, so that the program compiles. Then fill in and test each method.', ar: 'ابدأ بدوال مؤقتة ثم أكملها واختبرها واحدة واحدة.' },
        { type: 'note', kind: 'warn', en: 'Keep each method focused on <b>one</b> job. <code>energyCost</code> should calculate and return. It should not also read input and print. Then you can reuse it.' },
        { type: 'analogy', title: 'A kitchen team', en: 'One cook chops, one cooks, one serves. Nobody does everything. If the soup is bad, you know which cook to ask. Small methods work like this: when something is wrong, you check one small method.' },
        { type: 'steps', title: 'Worked example: GCD and LCM', problem: 'Read two positive numbers and print their greatest common divisor (GCD) and least common multiple (LCM). Plan with methods.',
          steps: [
            { en: 'Split: first find the GCD, then use the GCD to find the LCM, then print. Two methods: <code>gcd</code> and <code>lcm</code>.' },
            { en: 'gcd uses Euclid\'s idea: while b is not 0, replace (a, b) by (b, a % b). At the end a is the GCD.', code: J`
while (b != 0) {
    int r = a % b;
    a = b;
    b = r;
}
return a;` },
            { en: 'lcm reuses gcd. The formula is a / gcd(a, b) * b.', code: 'return a / gcd(a, b) * b;' },
            { en: 'main reads the numbers, calls the two methods and prints. For 12 and 18: GCD 6, LCM 36.' }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static int gcd(int a, int b) {
        while (b != 0) {
            int r = a % b;
            a = b;
            b = r;
        }
        return a;
    }

    public static int lcm(int a, int b) {
        return a / gcd(a, b) * b;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        System.out.println("GCD: " + gcd(a, b));
        System.out.println("LCM: " + lcm(a, b));
    }
}`, stdin: '12 18', out: "GCD: 6\nLCM: 36", ar: 'lcm تستخدم gcd، ولا نكرر الكود.' },
        { type: 'steps', title: 'Worked example: a 3-day step report', problem: 'A fitness app reads the steps of 3 days. For each day it prints the steps, the distance in km (one step is 0.75 m) and whether the goal of 8000 steps was reached. At the end it prints on how many days the goal was reached.',
          steps: [
            { en: 'Refine the problem into small jobs: (1) is the goal reached? (2) what is the distance? (3) print one day. (4) main: loop over the days and count. Each job becomes one method.' },
            { en: 'Job 1 is a yes/no question, so a boolean method.', code: J`
public static boolean reachedGoal(int steps) {
    return steps >= 8000;
}` },
            { en: 'Job 2 returns a double: steps × 0.75 metres, divided by 1000 to get km.', code: J`
public static double distanceKm(int steps) {
    return steps * 0.75 / 1000;
}` },
            { en: 'Job 3 prints one line. It does not calculate by itself: it <b>calls</b> jobs 1 and 2.', code: J`
public static void printDay(int day, int steps) {
    System.out.printf("Day %d: %d steps, %.2f km", day, steps, distanceKm(steps));
    if (reachedGoal(steps)) {
        System.out.println(" - goal reached");
    } else {
        System.out.println(" - keep going");
    }
}` },
            { en: 'Job 4, main: read each day, call printDay, and count the goal days with reachedGoal again. The goal rule is written once and used in two places.' }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static boolean reachedGoal(int steps) {
        return steps >= 8000;
    }

    public static double distanceKm(int steps) {
        return steps * 0.75 / 1000;
    }

    public static void printDay(int day, int steps) {
        System.out.printf("Day %d: %d steps, %.2f km", day, steps, distanceKm(steps));
        if (reachedGoal(steps)) {
            System.out.println(" - goal reached");
        } else {
            System.out.println(" - keep going");
        }
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int goalDays = 0;
        for (int day = 1; day <= 3; day++) {
            int steps = input.nextInt();
            printDay(day, steps);
            if (reachedGoal(steps)) {
                goalDays++;
            }
        }
        System.out.println("Goal reached on " + goalDays + " of 3 days");
    }
}`, stdin: '9000 4000 8000', out: "Day 1: 9000 steps, 6.75 km - goal reached\nDay 2: 4000 steps, 3.00 km - keep going\nDay 3: 8000 steps, 6.00 km - goal reached\nGoal reached on 2 of 3 days", ar: 'قسمنا المشكلة إلى أربع دوال صغيرة، وقاعدة الهدف مكتوبة مرة واحدة.' },
        { type: 'check', q: 'The goal changes from 8000 to 10000 steps. How many lines must you change in the step report?', options: ['One: the comparison inside reachedGoal', 'Two: in printDay and in main', 'Three', 'Every line that mentions steps'], answer: 0, explain: 'The rule lives in one method, and both printDay and main call it. Change it once and every use is updated. This is the power of small methods.' }
      ],
      mistakes: [
        { title: 'One giant main', en: 'Putting everything in main makes it long and hard to test.' },
        { title: 'A method that does too many things', en: 'A method that reads, calculates and prints cannot be reused. Split it.' },
        { title: 'Writing all methods before testing any', en: 'Write and test one small method at a time, or use stubs.' },
        { title: 'Copying a calculation instead of calling the method', en: 'If a rule (like <code>steps &gt;= 8000</code>) is written in two places, one day you will change one and forget the other. Write it in one method and call it.', code: J`
if (steps >= 8000) { ... }        // copy 1 in printDay
if (steps >= 8000) { goalDays++; } // copy 2 in main: risky
if (reachedGoal(steps)) { ... }    // better: one rule, many calls`, ar: 'لا تكرر{{g:|ي}} القاعدة؛ اكتبها في دالة واستدعها.' }
      ],
      remember: [
        '<b>Stepwise refinement</b>: split a big problem into small steps, one method each.',
        'main should read like a short plan.',
        'One method = one job.',
        'Calculating methods return values; printing methods are void.',
        'Test each small method alone; use stubs while building.'
      ],
      rememberAr: 'نقسم المشكلة الكبيرة إلى دوال صغيرة، لكل دالة عمل واحد. main يشبه خطة قصيرة. نختبر كل دالة على حدة.',
      practice: [
        { t: 'mcq', q: 'What does <b>stepwise refinement</b> mean?', options: ['Running a program step by step', 'Splitting a big problem into smaller subproblems, each solved by a method', 'Making a loop run slowly', 'Making a program faster'], answer: 1, explain: 'We decompose the problem until every piece is easy.' },
        { t: 'mcq', q: 'Which method follows the rule "one job"?', options: ['A method that reads a number, calculates tax and prints a receipt', 'A method that only calculates the tax and returns it', 'A method that prints and also changes the screen colour', 'None of them'], answer: 1, explain: 'Calculating and returning is one clear job.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int plusTax(int price) {
        return price + 5;
    }

    public static void show(int amount) {
        System.out.println("Pay " + amount);
    }

    public static void main(String[] args) {
        int p = 20;
        show(plusTax(p));
        show(p);
    }
}`, answer: "Pay 25\nPay 20", explain: 'plusTax(20) returns 25 and show prints it. p itself is unchanged, so the second line shows 20.' },
        { t: 'fill', q: 'Complete this stub and the call so the program compiles and prints <code>0</code>.', code: J`
public static int bonus(int mark) {
    ___ 0;
}

// in main:
System.out.println(___(80));`, answers: ['return', 'bonus'], explain: 'A stub is a temporary body. It returns 0 for now. We call the method by name.' },
        { t: 'order', q: 'Order the lines of main so that it reads like a plan: read, calculate, print.', lines: [
          'int kwh = input.nextInt();',
          'double cost = energyCost(kwh);',
          'double total = addVat(cost);',
          'printBill(kwh, cost, total);'
        ], explain: 'total needs cost, and cost needs kwh, so the order is fixed.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int half(int n) {
        return n / 2;
    }

    public static int quarter(int n) {
        return half(half(n));
    }

    public static void main(String[] args) {
        System.out.println(quarter(40));
        System.out.println(quarter(10));
    }
}`, answer: "10\n2", explain: 'quarter(40): half(40) is 20, half(20) is 10. quarter(10): half(10) is 5, half(5) is 2 (integer division).' },
        { t: 'code', q: 'Write <code>public static int gcd(int a, int b)</code> and <code>public static int lcm(int a, int b)</code> (use <code>a / gcd(a, b) * b</code>). In main, read two positive integers and print <code>GCD: x</code> and <code>LCM: y</code>, each on its own line. No prompts.', qAr: 'اكتب دالتين للقاسم المشترك الأكبر والمضاعف المشترك الأصغر.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write gcd and lcm here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        // print the results
    }
}`, tests: [ { stdin: '12 18', expected: "GCD: 6\nLCM: 36" }, { stdin: '7 5', expected: "GCD: 1\nLCM: 35" }, { stdin: '20 30', expected: "GCD: 10\nLCM: 60" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static int gcd(int a, int b) {
        while (b != 0) {
            int r = a % b;
            a = b;
            b = r;
        }
        return a;
    }

    public static int lcm(int a, int b) {
        return a / gcd(a, b) * b;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        System.out.println("GCD: " + gcd(a, b));
        System.out.println("LCM: " + lcm(a, b));
    }
}`, hint: 'Euclid: while b is not 0, replace (a, b) with (b, a % b). Then a is the GCD.', explain: 'gcd changes only its own copies, so main can still pass the original values to lcm. lcm reuses gcd.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int bonus(int mark) {
        if (mark >= 90) {
            return 5;
        }
        return 0;
    }

    public static int finalMark(int mark) {
        int total = mark + bonus(mark);
        if (total > 100) {
            return 100;
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(finalMark(80));
        System.out.println(finalMark(92));
        System.out.println(finalMark(98));
    }
}`, answer: "80\n97\n100", explain: '80 gets no bonus: 80. 92 gets 5: 97. 98 gets 5: 103, which is more than 100, so finalMark returns 100.' },
        { t: 'bug', q: 'This program should print the total with VAT plus 5 SAR delivery, but it does not compile. The error is reported on line 7, but the real mistake is in the method. Tap the line where the real mistake is.', qAr: 'الخطأ يظهر في السطر 7 لكن سببه في الدالة. أين هو؟',
          code: J`
public class Main {
    public static void addVat(double amount) {
        System.out.println(amount * 1.15);
    }

    public static void main(String[] args) {
        double total = addVat(100.0) + 5.0;
        System.out.printf("Total with delivery: %.2f%n", total);
    }
}`, bug: [2, 3],
          fix: J`
public class Main {
    public static double addVat(double amount) {
        return amount * 1.15;
    }

    public static void main(String[] args) {
        double total = addVat(100.0) + 5.0;
        System.out.printf("Total with delivery: %.2f%n", total);
    }
}`, hint: 'main wants to use the answer in a calculation. Does addVat give an answer back?', explain: 'addVat is void and only prints, so it gives no value back, and <code>addVat(100.0) + 5.0</code> is impossible. A calculating method should <b>return</b> its answer: change the header to <code>double</code> and the println to <code>return amount * 1.15;</code>. Then main can use the value.', explainAr: 'الدالة تطبع بدلاً من أن ترجع القيمة.' },
        { t: 'code', q: 'Cafe bill, designed with small methods. Write <code>public static double subtotal(double price, int qty)</code> (price times qty) and <code>public static double vat(double amount)</code> (15% of amount). In main, read the price and the quantity and print three lines with 2 decimals: <code>Subtotal: x</code>, <code>VAT: y</code>, <code>Total: z</code>. The methods must not print. No prompts.<br>Example: input <code>14 3</code> prints <code>Subtotal: 42.00</code>, <code>VAT: 6.30</code>, <code>Total: 48.30</code>', qAr: 'صمم{{g:|ي}} الفاتورة بدالتين صغيرتين ترجعان القيم، وmain يطبع.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write subtotal and vat here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double price = input.nextDouble();
        int qty = input.nextInt();
        // print the three lines
    }
}`,
          tests: [ { stdin: '14 3', expected: "Subtotal: 42.00\nVAT: 6.30\nTotal: 48.30" }, { stdin: '10 1', expected: "Subtotal: 10.00\nVAT: 1.50\nTotal: 11.50" }, { stdin: '4.5 4', expected: "Subtotal: 18.00\nVAT: 2.70\nTotal: 20.70" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static double subtotal(double price, int qty) {
        return price * qty;
    }

    public static double vat(double amount) {
        return amount * 0.15;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double price = input.nextDouble();
        int qty = input.nextInt();
        double sub = subtotal(price, qty);
        double tax = vat(sub);
        System.out.printf("Subtotal: %.2f%n", sub);
        System.out.printf("VAT: %.2f%n", tax);
        System.out.printf("Total: %.2f%n", sub + tax);
    }
}`, hint: 'Store each answer in a variable in main: sub, then tax. The total is sub + tax.', explain: 'Each method has one job and returns its answer; main reads, calls and prints, like a short plan.' }
      ]
    },
    // ===================================================== Lesson 10
    {
      title: 'Methods that work on text',
      titleAr: 'دوال تعمل على النصوص',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why write text methods?' },
        { type: 'p', en: 'Many programs work with words: names on a certificate, usernames for the university system, a check that a password has digits. Java\'s String already has useful methods that you know from Unit 4: <code>length</code>, <code>charAt</code>, <code>toUpperCase</code>, <code>substring</code>, <code>equals</code>. But there is no method "count the vowels" or "make the initials". You can write these methods yourself, once, and then use them in every program.',
          ar: 'نكتب دوالاً خاصة بالنصوص مرة واحدة ونستخدمها في كل برنامج، مثل عدّ أحرف العلة أو استخراج الأحرف الأولى.' },
        { type: 'analogy', title: 'A juice machine', en: 'You put any fruit into a juice machine: an orange, an apple, a mango. Every time, juice comes out. A text method is the same: you give it any String (the parameter), and it gives you an answer back (the return value). The answer can be a number (how many vowels), true or false (is it a palindrome?), or a new String (the name with a capital letter).', ar: 'دالة النص مثل آلة العصير: تعطيها أي نص فتعطيك جواباً: عدداً أو true/false أو نصاً جديداً.' },
        { type: 'h', en: 'Count the vowels: a helper and a loop' },
        { type: 'p', en: 'Counting vowels has two small jobs. Job 1: is <b>one</b> character a vowel? Job 2: go through the whole text and count the characters that are vowels. We write job 1 as its own small method. A small method that is used by another method is called a <b>helper method</b>.' },
        { type: 'code', code: J`
public static boolean isVowel(char c) {
    c = Character.toLowerCase(c);
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}` },
        { type: 'analogy', title: 'A chef and a helper', en: 'A chef must count the ripe tomatoes in a box. A helper in the kitchen knows one thing only: she looks at <b>one</b> tomato and says "ripe" or "not ripe". The chef takes the tomatoes one by one, asks the helper, and counts the "ripe" answers. <code>isVowel</code> is the helper; <code>countVowels</code> is the chef.', ar: 'الدالة المساعدة تفحص حرفاً واحداً، والدالة الرئيسية تمر على كل الأحرف وتسألها.' },
        { type: 'p', en: 'First the helper makes the character small, so <code>\'E\'</code> and <code>\'e\'</code> both count. Changing <code>c</code> is safe: it is only the method\'s copy. Then it returns the answer of the comparison. Now job 2 can use the helper inside a loop.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static boolean isVowel(char c) {
        c = Character.toLowerCase(c);
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }

    public static int countVowels(String text) {
        int count = 0;
        for (int i = 0; i < text.length(); i++) {
            if (isVowel(text.charAt(i))) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(countVowels("Riyadh"));
        System.out.println(countVowels("EDUCATION"));
    }
}`, out: "2\n5" },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int countVowels(String text)', 'Input: a String. Answer: an int (how many).'],
          ['for (int i = 0; i < text.length(); i++)', 'i goes over every position, from 0 to the last one, length() - 1.'],
          ['if (isVowel(text.charAt(i)))', 'Take the character at position i and ask the helper. Its answer (true/false) is the condition.'],
          ['return count;', 'After the loop, send the number back. "Riyadh" has i and a (y is not counted): 2.']
        ], ar: 'الدالة المساعدة تجيب عن حرف واحد، والحلقة تمر على كل الأحرف وتعدّ.' },
        { type: 'check', q: 'What does <code>countVowels("Sara")</code> return?', options: ['1', '2', '3', '4'], answer: 1, explain: 'S is not a vowel, a is, r is not, a is. The answer is 2.' },
        { type: 'memory', title: 'countVowels("Ali") step by step', en: 'main has <code>String name = "Ali";</code> and runs <code>int v = countVowels(name);</code>. (Each call to isVowel also gets a small frame for a moment; we leave it out to keep the picture simple.)',
          frames: [
            { label: 'countVowels is called: "Ali" is copied into text, and count starts at 0', vars: [{ name: 'main: name', type: 'String', value: '"Ali"' }, { name: 'countVowels: text', type: 'String', value: '"Ali"' }, { name: 'countVowels: count', type: 'int', value: '0' }] },
            { label: 'i = 0: <code>charAt(0)</code> is A, a vowel, so <code>count++</code>', vars: [{ name: 'main: name', type: 'String', value: '"Ali"' }, { name: 'countVowels: text', type: 'String', value: '"Ali"' }, { name: 'countVowels: count', type: 'int', value: '1' }, { name: 'countVowels: i', type: 'int', value: '0' }] },
            { label: 'i = 1: <code>charAt(1)</code> is l, not a vowel. count stays 1', vars: [{ name: 'main: name', type: 'String', value: '"Ali"' }, { name: 'countVowels: text', type: 'String', value: '"Ali"' }, { name: 'countVowels: count', type: 'int', value: '1' }, { name: 'countVowels: i', type: 'int', value: '1' }] },
            { label: 'i = 2: <code>charAt(2)</code> is i, a vowel, so <code>count++</code>', vars: [{ name: 'main: name', type: 'String', value: '"Ali"' }, { name: 'countVowels: text', type: 'String', value: '"Ali"' }, { name: 'countVowels: count', type: 'int', value: '2' }, { name: 'countVowels: i', type: 'int', value: '2' }] },
            { label: 'i = 3: 3 &lt; 3 is false, the loop ends. <code>return count;</code> sends 2 back, and main stores it in v', vars: [{ name: 'main: name', type: 'String', value: '"Ali"' }, { name: 'main: v', type: 'int', value: '2' }] }
          ], ar: 'العداد count يزيد عند كل حرف علة، ثم تُرجع الدالة قيمته إلى main.' },
        { type: 'h', en: 'capitalize: return a new String' },
        { type: 'p', en: 'Users type names in many styles: "rEEM", "REEM", "reem". On a certificate we want "Reem": the first letter capital, the rest small. Remember from Unit 4: a String never changes. <code>toUpperCase()</code> does not change the text; it <b>returns a new</b> String. So our method also builds a new String and returns it.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static String capitalize(String word) {
        if (word.length() == 0) {
            return word;
        }
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    }

    public static void main(String[] args) {
        System.out.println(capitalize("rEEM"));
        System.out.println(capitalize("FAISAL"));
        System.out.println(capitalize("a"));
    }
}`, out: "Reem\nFaisal\nA" },
        { type: 'lines', rows: [
          ['if (word.length() == 0)', 'An empty String "" has no first letter. Asking for it would crash the program, so we return it as it is.'],
          ['word.substring(0, 1).toUpperCase()', 'The first letter only (positions 0 up to, not including, 1), as a capital.'],
          ['word.substring(1).toLowerCase()', 'Everything from position 1 to the end, small. For "a" this part is the empty String "".']
        ], ar: 'النص لا يتغير، لذلك تبني الدالة نصاً جديداً وترجعه.' },
        { type: 'check', q: 'What does <code>capitalize("sALAM")</code> return?', options: ['"sALAM"', '"SALAM"', '"Salam"', '"salam"'], answer: 2, explain: 'The first letter becomes S and the rest, "ALAM", becomes "alam".' },
        { type: 'h', en: 'initials: look for the spaces' },
        { type: 'p', en: 'The initials of "mohammed abdullah alqahtani" are "MAA". How do we find them? The first letter is always one. After that, every letter that comes right after a space starts a new word. So the loop looks for spaces and takes the next character.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static String initials(String fullName) {
        String result = "" + Character.toUpperCase(fullName.charAt(0));
        for (int i = 0; i < fullName.length() - 1; i++) {
            if (fullName.charAt(i) == ' ') {
                result = result + Character.toUpperCase(fullName.charAt(i + 1));
            }
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(initials("mohammed abdullah alqahtani"));
        System.out.println(initials("Noura Alsaud"));
    }
}`, out: "MAA\nNA" },
        { type: 'lines', rows: [
          ['String result = "" + Character.toUpperCase(fullName.charAt(0));', 'Start with the first letter as a capital. <code>"" +</code> turns the char into a String.'],
          ['i < fullName.length() - 1', 'Stop one place early. We read <code>charAt(i + 1)</code>, so i + 1 must still be a real position.'],
          ['if (fullName.charAt(i) == \' \')', 'A char is compared with <code>==</code> and single quotes. A space starts a new word.'],
          ['result = result + ...charAt(i + 1)', 'Add the letter after the space to the answer.']
        ], ar: 'الحرف الذي يأتي بعد المسافة هو أول حرف في كلمة جديدة.' },
        { type: 'check', q: 'Why does the loop stop at <code>fullName.length() - 1</code> and not at <code>fullName.length()</code>?', options: ['To skip the last word', 'Because the loop reads charAt(i + 1), which must be a real position', 'Because the last character is always a space', 'It makes no difference'], answer: 1, explain: 'If i were the last position, i + 1 would be past the end, and charAt would crash the program.' },
        { type: 'h', en: 'isPalindrome: reuse another method' },
        { type: 'p', en: 'A <b>palindrome</b> is a word that reads the same from both ends: "level", "noon", "radar". The plan: write a method <code>reverse</code> that returns the text backwards. Then <code>isPalindrome</code> only has to compare the word with its reverse. We use <code>equalsIgnoreCase</code>, so "Anna" also counts.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static String reverse(String s) {
        String result = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            result = result + s.charAt(i);
        }
        return result;
    }

    public static boolean isPalindrome(String word) {
        return word.equalsIgnoreCase(reverse(word));
    }

    public static void main(String[] args) {
        System.out.println("level: " + isPalindrome("level"));
        System.out.println("Anna: " + isPalindrome("Anna"));
        System.out.println("Salam: " + isPalindrome("Salam"));
    }
}`, out: "level: true\nAnna: true\nSalam: false" },
        { type: 'lines', rows: [
          ['for (int i = s.length() - 1; i >= 0; i--)', 'The loop starts at the <b>last</b> position and walks back to 0.'],
          ['result = result + s.charAt(i);', 'Each character is added to the end of result, so the text comes out backwards.'],
          ['word.equalsIgnoreCase(reverse(word))', 'The inner call runs first. "Anna" reversed is "annA"; ignoring capitals, they are equal.']
        ], ar: 'نكتب دالة تعكس النص، ثم نقارن الكلمة بعكسها. هكذا تستخدم دالةٌ دالةً أخرى.' },
        { type: 'note', kind: 'exam', en: 'Compare Strings with <code>equals</code> or <code>equalsIgnoreCase</code>, never with <code>==</code>. Compare single characters (char) with <code>==</code>. Exams like to mix the two.', ar: 'النصوص تُقارن بـ equals، والحروف المفردة بـ ==.' },
        { type: 'steps', title: 'Worked example: a username maker', problem: 'A student types a first name and a last name in any style, for example <code>reem ALHARBI</code>. Print the name nicely, the initials, the number of vowels and a username (first letter + last name, all small). Reuse the methods of this lesson.',
          steps: [
            { en: 'List the jobs: tidy each name (capitalize), find initials, count vowels, build the username. Three of these methods already exist above; we copy them into the program.' },
            { en: 'The only new method is username. It returns a new String and prints nothing.', code: J`
public static String username(String first, String last) {
    return first.substring(0, 1).toLowerCase() + last.toLowerCase();
}` },
            { en: 'In main, read the two words and build the tidy full name with two calls to capitalize.', code: J`
String first = input.next();
String last = input.next();
String fullName = capitalize(first) + " " + capitalize(last);` },
            { en: 'Print each answer by calling one method. main reads like a list of jobs.', code: J`
System.out.println("Name: " + fullName);
System.out.println("Initials: " + initials(fullName));
System.out.println("Vowels: " + countVowels(fullName));
System.out.println("Username: " + username(first, last));` },
            { en: 'Check by hand: "Reem Alharbi" has the vowels e, e, A, a, i: 5. The initials are R and A.' }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static boolean isVowel(char c) {
        c = Character.toLowerCase(c);
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }

    public static int countVowels(String text) {
        int count = 0;
        for (int i = 0; i < text.length(); i++) {
            if (isVowel(text.charAt(i))) {
                count++;
            }
        }
        return count;
    }

    public static String capitalize(String word) {
        if (word.length() == 0) {
            return word;
        }
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    }

    public static String initials(String fullName) {
        String result = "" + Character.toUpperCase(fullName.charAt(0));
        for (int i = 0; i < fullName.length() - 1; i++) {
            if (fullName.charAt(i) == ' ') {
                result = result + Character.toUpperCase(fullName.charAt(i + 1));
            }
        }
        return result;
    }

    public static String username(String first, String last) {
        return first.substring(0, 1).toLowerCase() + last.toLowerCase();
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String first = input.next();
        String last = input.next();
        String fullName = capitalize(first) + " " + capitalize(last);
        System.out.println("Name: " + fullName);
        System.out.println("Initials: " + initials(fullName));
        System.out.println("Vowels: " + countVowels(fullName));
        System.out.println("Username: " + username(first, last));
    }
}`, stdin: 'reem ALHARBI', out: "Name: Reem Alharbi\nInitials: RA\nVowels: 5\nUsername: ralharbi", ar: 'أعدنا استخدام دوال الدرس، فصار main قائمة قصيرة من المهام.' },
        { type: 'check', q: 'In the username maker, why does <code>username</code> receive <code>first</code> and <code>last</code> and not <code>fullName</code>?', options: ['Because methods cannot receive a String with a space', 'Because it needs the two parts separately: the first letter of one and the whole of the other', 'Because fullName is out of scope in main', 'There is no reason'], answer: 1, explain: 'The username uses the first letter of the first name and the whole last name. Passing the two parts makes the method simple.' }
      ],
      mistakes: [
        { title: 'Ignoring the new String', en: 'String methods never change the text. They return a new String, and you must store or return it.', code: J`
word.toUpperCase();          // the answer is thrown away
word = word.toUpperCase();   // correct`, ar: 'النص لا يتغير؛ خزّن{{g:|ي}} النتيجة الجديدة.' },
        { title: 'Going one position too far', en: 'The last position is <code>length() - 1</code>. <code>charAt(text.length())</code> crashes the program with <i>StringIndexOutOfBoundsException</i>.', code: J`
for (int i = 0; i <= text.length(); i++)   // wrong: one too many
for (int i = 0; i < text.length(); i++)    // correct` },
        { title: 'Comparing Strings with ==', en: '<code>==</code> does not compare the letters of two Strings. Use <code>equals</code> or <code>equalsIgnoreCase</code>.', code: J`
if (word == reverse(word))          // wrong
if (word.equals(reverse(word)))     // correct` },
        { title: 'Forgetting the empty String', en: 'The empty String <code>""</code> has length 0 and no first character. <code>charAt(0)</code> or <code>substring(0, 1)</code> on it crashes. Check the length first, as capitalize does.' }
      ],
      remember: [
        'A text method takes a String parameter and returns a number, a boolean or a new String.',
        'Go through a String with <code>for (int i = 0; i &lt; s.length(); i++)</code> and <code>s.charAt(i)</code>.',
        'A <b>helper method</b> (like <code>isVowel</code>) does a small job for another method.',
        'Strings never change: store or return the new String.',
        'Strings: <code>equals</code>. Single chars: <code>==</code>.',
        'Think about special inputs: the empty String, one letter, capitals.'
      ],
      rememberAr: 'دالة النص تستقبل String وترجع عدداً أو منطقياً أو نصاً جديداً. نمر على الأحرف بحلقة وcharAt. الدالة المساعدة تؤدي عملاً صغيراً. النص لا يتغير فنخزن النتيجة. نقارن النصوص بـ equals.',
      practice: [
        { t: 'mcq', q: 'A method returns the initials of a name, such as <code>"RA"</code>. What is its return type?', options: ['<code>char</code>', '<code>int</code>', '<code>String</code>', '<code>void</code>'], answer: 2, explain: 'Initials can be more than one character, so the answer is a String.', qAr: 'ما نوع القيمة المرجعة؟' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int countChar(String s, char c) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == c) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(countChar("banana", 'a'));
        System.out.println(countChar("Riyadh", 'z'));
    }
}`, answer: "3\n0", explain: '"banana" has three a\'s. "Riyadh" has no z, so the count stays 0.' },
        { t: 'fill', q: 'Complete capitalize so that <code>capitalize("hESSA")</code> returns <code>"Hessa"</code>.', code: J`
public static String capitalize(String word) {
    return word.substring(0, 1).___() + word.substring(___).toLowerCase();
}`, answers: ['toUpperCase', '1'], explain: 'The first letter becomes a capital with toUpperCase. substring(1) is everything from position 1 to the end.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static String reverse(String s) {
        String result = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            result = result + s.charAt(i);
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(reverse("Jeddah"));
        System.out.println(reverse("12321").equals("12321"));
    }
}`, answer: "haddeJ\ntrue", explain: 'reverse reads the text from the last character to the first. "12321" reversed is the same text, so equals gives true.' },
        { t: 'bug', q: 'This method should return <code>GOAL!</code> for <code>"goal"</code>, but the program prints <code>goal!</code>. Tap the line with the bug.', qAr: 'النتيجة ليست بأحرف كبيرة. أين الخطأ؟',
          code: J`
public class Main {
    public static String shout(String text) {
        text.toUpperCase();
        return text + "!";
    }

    public static void main(String[] args) {
        System.out.println(shout("goal"));
    }
}`, bug: 3,
          fix: J`
public class Main {
    public static String shout(String text) {
        text = text.toUpperCase();
        return text + "!";
    }

    public static void main(String[] args) {
        System.out.println(shout("goal"));
    }
}`, hint: 'Does toUpperCase change text, or does it return something?', explain: '<code>toUpperCase()</code> returns a new String, but line 3 ignores the returned value, so text is still "goal". Store the answer: <code>text = text.toUpperCase();</code>', explainAr: 'تجاهلنا القيمة المرجعة من toUpperCase.' },
        { t: 'code', q: 'A password must contain digits. Write <code>public static int countDigits(String s)</code> that returns how many characters of s are digits (use <code>Character.isDigit</code>). In main, read one word and print <code>Digits: n</code>. No prompts.<br>Example: input <code>abc123</code> prints <code>Digits: 3</code>', qAr: 'اكتب دالة تعدّ الأرقام في النص.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write countDigits here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String word = input.next();
        // print the number of digits
    }
}`,
          tests: [ { stdin: 'abc123', expected: 'Digits: 3' }, { stdin: 'Riyadh2030', expected: 'Digits: 4' }, { stdin: 'hello', expected: 'Digits: 0' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static int countDigits(String s) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            if (Character.isDigit(s.charAt(i))) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String word = input.next();
        System.out.println("Digits: " + countDigits(word));
    }
}`, hint: 'Same pattern as countVowels: a counter, a loop over the positions, and an if with Character.isDigit(s.charAt(i)).', explain: 'The loop pattern "count the characters that match a rule" works for vowels, digits, spaces and more.' }
      ]
    },
    // ===================================================== Lesson 11
    {
      title: 'A toolbox of number methods',
      titleAr: 'صندوق أدوات من دوال الأعداد',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why build a toolbox?' },
        { type: 'p', en: 'Some number jobs come back again and again, in exams and in real programs: the digits of a student ID, prime numbers, simplifying a fraction. If you write each job as a small method and test it well, you can copy it into any new program and trust it. In this lesson you build four tools: <code>sumOfDigits</code>, <code>reverseNumber</code>, <code>isPrime</code> and <code>gcd</code>, and then use them together.',
          ar: 'نكتب أدوات صغيرة للأعداد مرة واحدة ونختبرها، ثم نستخدمها معاً في أي برنامج.' },
        { type: 'analogy', title: 'A toolbox at home', en: 'At home you have a toolbox: a hammer, a screwdriver, a tape measure. Each tool does one job well. To hang a picture you take the tape measure and the hammer; to fix a chair you take the screwdriver. You do not build a new hammer every time. Number methods are your programming tools: pick the ones the problem needs.', ar: 'كل دالة أداة تؤدي عملاً واحداً، ونختار الأدوات التي تحتاجها المسألة.' },
        { type: 'h', en: 'Taking a number apart' },
        { type: 'p', en: 'Two operators from Unit 2 open every number: <code>n % 10</code> gives the <b>last digit</b>, and <code>n / 10</code> (integer division) <b>removes</b> the last digit. Repeat them in a loop until n becomes 0, and you visit every digit from right to left.' },
        { type: 'table', head: ['n', 'n % 10 (last digit)', 'n / 10 (the rest)'], rows: [
          ['472', '2', '47'],
          ['47', '7', '4'],
          ['4', '4', '0 (stop)']
        ] },
        { type: 'code', code: J`
public static int sumOfDigits(int n) {
    int sum = 0;
    while (n > 0) {
        sum = sum + n % 10;
        n = n / 10;
    }
    return sum;
}` },
        { type: 'p', en: 'You met this method in Lesson 6. For 472 it returns 2 + 7 + 4 = 13. It changes n, but only its own copy, so the caller\'s number is safe.', ar: 'باقي القسمة على 10 يعطي آخر رقم، والقسمة على 10 تحذفه.' },
        { type: 'h', en: 'reverseNumber: build a new number' },
        { type: 'p', en: 'To turn 472 into 274, take the digits from the right, one by one, and add each one to the <b>end</b> of a new number. How do you add a digit to the end of a number? Multiply the number by 10 (this makes room: 27 becomes 270) and add the digit (270 + 4 = 274).' },
        { type: 'code', run: true, code: J`
public class Main {
    public static int reverseNumber(int n) {
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n = n / 10;
        }
        return rev;
    }

    public static void main(String[] args) {
        System.out.println(reverseNumber(472));
        System.out.println(reverseNumber(1200));
        System.out.println(reverseNumber(7));
    }
}`, out: "274\n21\n7" },
        { type: 'lines', rows: [
          ['int rev = 0;', 'The new number starts empty (0).'],
          ['rev = rev * 10 + n % 10;', 'Make room at the end of rev, then put the last digit of n there.'],
          ['n = n / 10;', 'Remove the digit we just used.'],
          ['reverseNumber(1200)', 'Gives 21, not 0021: a number cannot start with zeros.']
        ], ar: 'نضرب الناتج في 10 لنترك مكاناً، ثم نضيف آخر رقم من n.' },
        { type: 'memory', title: 'reverseNumber(472), turn by turn', en: 'main runs <code>int x = 472;</code> and <code>int r = reverseNumber(x);</code>. Watch rev grow and the method\'s n shrink, while main\'s x stays 472.',
          frames: [
            { label: 'The call starts: 472 is copied into n, and rev is 0', vars: [{ name: 'main: x', type: 'int', value: '472' }, { name: 'reverseNumber: n', type: 'int', value: '472' }, { name: 'reverseNumber: rev', type: 'int', value: '0' }] },
            { label: 'Turn 1: rev = 0 × 10 + 2 = 2, then n = 47', vars: [{ name: 'main: x', type: 'int', value: '472' }, { name: 'reverseNumber: n', type: 'int', value: '47' }, { name: 'reverseNumber: rev', type: 'int', value: '2' }] },
            { label: 'Turn 2: rev = 2 × 10 + 7 = 27, then n = 4', vars: [{ name: 'main: x', type: 'int', value: '472' }, { name: 'reverseNumber: n', type: 'int', value: '4' }, { name: 'reverseNumber: rev', type: 'int', value: '27' }] },
            { label: 'Turn 3: rev = 27 × 10 + 4 = 274, then n = 0, so the loop ends', vars: [{ name: 'main: x', type: 'int', value: '472' }, { name: 'reverseNumber: n', type: 'int', value: '0' }, { name: 'reverseNumber: rev', type: 'int', value: '274' }] },
            { label: '<code>return rev;</code> sends 274 back. The frame is removed; main stores 274 in r', vars: [{ name: 'main: x', type: 'int', value: '472' }, { name: 'main: r', type: 'int', value: '274' }] }
          ], ar: 'rev يكبر في كل دورة وn يصغر، أما x في main فيبقى 472.' },
        { type: 'check', q: 'What does <code>reverseNumber(305)</code> return?', options: ['305', '53', '503', '350'], answer: 2, explain: 'The digits from the right are 5, 0, 3. rev becomes 5, then 50, then 503.' },
        { type: 'h', en: 'isPrime: return as soon as you know' },
        { type: 'p', en: 'A <b>prime number</b> has exactly two divisors: 1 and itself. 2, 3, 5, 7, 11 and 13 are prime. 9 is not (3 × 3), and 1 is not prime either. The plan: numbers below 2 are not prime. Otherwise, try every d from 2 to n - 1. If one d divides n, we know the answer at once: not prime. If the loop finishes without finding a divisor, the number is prime.' },
        { type: 'analogy', title: 'Checking a box of eggs', en: 'You check a box of eggs for broken ones. The moment you find <b>one</b> broken egg, you can say "this box is not perfect"; there is no need to look at the rest. But to say "the box is perfect", you must check <b>every</b> egg first. In isPrime, <code>return false</code> is inside the loop (one divisor is enough), and <code>return true</code> comes after the loop (only when every d was checked).', ar: 'يكفي قاسم واحد لنقول "ليس أولياً"، أما "أولي" فلا نقولها إلا بعد فحص كل القواسم.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static boolean isPrime(int n) {
        if (n < 2) {
            return false;
        }
        for (int d = 2; d < n; d++) {
            if (n % d == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        for (int k = 1; k <= 20; k++) {
            if (isPrime(k)) {
                System.out.print(k + " ");
            }
        }
        System.out.println();
    }
}`, out: '2 3 5 7 11 13 17 19' },
        { type: 'lines', rows: [
          ['if (n < 2) { return false; }', '0, 1 and negative numbers are not prime. The method ends here for them.'],
          ['if (n % d == 0) { return false; }', 'd divides n with no remainder: a divisor is found. return ends the method <b>and</b> the loop at once.'],
          ['return true;', 'Reached only if no d divided n. Its place after the loop is important.'],
          ['if (isPrime(k))', 'main asks the question for every k from 1 to 20 and prints only the primes.']
        ], ar: 'return داخل الحلقة تنهي الدالة فوراً. ونضع return true بعد الحلقة.' },
        { type: 'note', kind: 'tip', en: 'A faster loop is <code>for (int d = 2; d * d &lt;= n; d++)</code>: if n has a divisor, it has one that is not bigger than its square root. For 97 that is 9 tries instead of 95. The answers are the same; only the speed changes.', ar: 'يمكن التوقف عند الجذر التربيعي للعدد، والنتيجة نفسها.' },
        { type: 'check', q: 'Why is <code>return true;</code> written <b>after</b> the loop and not in an <code>else</code> inside it?', options: ['Because Java does not allow else inside a loop', 'Because one d that does not divide n proves nothing; we must try every d first', 'Because return true must always be the last line of a file', 'It makes no difference'], answer: 1, explain: '9 % 2 is not 0, but 9 is not prime (9 % 3 is 0). An else inside the loop would return true after trying only d = 2.' },
        { type: 'h', en: 'gcd: one header, two possible bodies' },
        { type: 'p', en: 'The <b>greatest common divisor</b> (GCD) of two numbers is the biggest number that divides both. For 12 and 18 it is 6. The easiest idea: start at the smaller number and go down until you find a number that divides both. The GCD is useful to simplify fractions: 12/18 becomes 2/3 when you divide both by 6.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static int gcd(int a, int b) {
        int d = Math.min(a, b);
        while (a % d != 0 || b % d != 0) {
            d--;
        }
        return d;
    }

    public static void main(String[] args) {
        int g = gcd(12, 18);
        System.out.println("12/18 = " + (12 / g) + "/" + (18 / g));
        g = gcd(35, 49);
        System.out.println("35/49 = " + (35 / g) + "/" + (49 / g));
    }
}`, out: "12/18 = 2/3\n35/49 = 5/7" },
        { type: 'p', en: 'In Lesson 9 you saw Euclid\'s method, which is much faster for big numbers. Both versions have the <b>same header</b>: <code>public static int gcd(int a, int b)</code>. So you can replace one body with the other and <b>no call has to change</b>. The people who call a method only need its header and what it promises, not how it works inside.', ar: 'يمكن تغيير جسم الدالة دون تغيير أي استدعاء، ما دام الرأس والنتيجة كما هما.' },
        { type: 'check', q: 'You replace the body of <code>gcd</code> with Euclid\'s faster version. What must change in main?', options: ['Every call to gcd', 'The names of the arguments', 'Nothing, because the header and the answers stay the same', 'The return type'], answer: 2, explain: 'Callers depend only on the header (name, parameters, return type) and on getting correct answers.' },
        { type: 'steps', title: 'Worked example: a number report', problem: 'Read two numbers n and m. Using the toolbox, print the sum of the digits of n, its reverse, whether it is a palindrome number, whether it is prime, whether it is "prime both ways" (n and its reverse are both prime) and the GCD of n and m.',
          steps: [
            { en: 'Copy the four tools into the program. Do not change them: they are already tested.' },
            { en: 'A palindrome number is the same as its reverse. No new method is needed: compare.', code: 'reverseNumber(n) == n' },
            { en: '"Prime both ways" combines two calls with <code>&amp;&amp;</code>. The inner call reverseNumber(n) runs first.', code: 'isPrime(n) && isPrime(reverseNumber(n))' },
            { en: 'main reads the input and prints one line per tool. Each line is one call.', code: J`
System.out.println("Sum of digits: " + sumOfDigits(n));
System.out.println("Reverse: " + reverseNumber(n));` },
            { en: 'Check by hand for 13 and 39: digits 1 + 3 = 4, reverse 31, not a palindrome, 13 and 31 are both prime, and 13 divides 39, so the GCD is 13.' }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static int sumOfDigits(int n) {
        int sum = 0;
        while (n > 0) {
            sum = sum + n % 10;
            n = n / 10;
        }
        return sum;
    }

    public static int reverseNumber(int n) {
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n = n / 10;
        }
        return rev;
    }

    public static boolean isPrime(int n) {
        if (n < 2) {
            return false;
        }
        for (int d = 2; d < n; d++) {
            if (n % d == 0) {
                return false;
            }
        }
        return true;
    }

    public static int gcd(int a, int b) {
        int d = Math.min(a, b);
        while (a % d != 0 || b % d != 0) {
            d--;
        }
        return d;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int m = input.nextInt();
        System.out.println("Sum of digits: " + sumOfDigits(n));
        System.out.println("Reverse: " + reverseNumber(n));
        System.out.println("Palindrome: " + (reverseNumber(n) == n));
        System.out.println("Prime: " + isPrime(n));
        System.out.println("Prime both ways: " + (isPrime(n) && isPrime(reverseNumber(n))));
        System.out.println("GCD(" + n + ", " + m + "): " + gcd(n, m));
    }
}`, stdin: '13 39', out: "Sum of digits: 4\nReverse: 31\nPalindrome: false\nPrime: true\nPrime both ways: true\nGCD(13, 39): 13", ar: 'استخدمنا أدوات الصندوق معاً، ولم نكتب أي حساب داخل main.' }
      ],
      mistakes: [
        { title: 'Returning true too early', en: 'An <code>else return true;</code> inside the loop decides after trying only one divisor. Put <code>return true;</code> after the loop.', code: J`
for (int d = 2; d < n; d++) {
    if (n % d == 0) { return false; }
    else { return true; }     // wrong: 9 would be "prime"
}`, ar: 'لا تضع{{g:|ي}} return true داخل الحلقة.' },
        { title: 'Forgetting that 1 is not prime', en: 'Without the test <code>if (n &lt; 2) return false;</code>, the loop does not run for 1, and the method returns true.' },
        { title: 'Using n after you destroyed it', en: 'The loop makes n smaller until it is 0. If the same method then compares with n, it compares with 0. Keep a copy first, or call a separate method (pass-by-value protects the caller\'s number).', code: J`
int original = n;      // keep a copy before the loop
while (n > 0) { ... n = n / 10; }
return rev == original;` },
        { title: 'Expecting zeros at the start of a number', en: '<code>reverseNumber(120)</code> is 21. An int cannot hold "021". If you need the zeros, work with a String instead.' }
      ],
      remember: [
        '<code>n % 10</code> is the last digit; <code>n / 10</code> removes it.',
        'To add a digit at the end of a number: <code>rev = rev * 10 + digit</code>.',
        'In isPrime: <code>return false</code> inside the loop, <code>return true</code> after it; numbers below 2 are not prime.',
        'The GCD simplifies fractions; the header stays the same whichever body you use.',
        'Copy tested tools into new programs and combine their calls in main.'
      ],
      rememberAr: 'باقي القسمة على 10 هو آخر رقم والقسمة تحذفه. لعكس العدد: rev * 10 + الرقم. في isPrime نرجع false داخل الحلقة وtrue بعدها. الأدوات المختبرة نجمعها في main.',
      practice: [
        { t: 'mcq', q: 'Which list contains <b>only</b> prime numbers?', options: ['1, 2, 3', '2, 9, 11', '2, 13, 17', '5, 15, 25'], answer: 2, explain: '1 is not prime, 9 = 3 × 3, 15 = 3 × 5 and 25 = 5 × 5. 2, 13 and 17 have only two divisors each.', qAr: 'أي قائمة كلها أعداد أولية؟' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int sumOfDigits(int n) {
        int sum = 0;
        while (n > 0) {
            sum = sum + n % 10;
            n = n / 10;
        }
        return sum;
    }

    public static void main(String[] args) {
        int id = 2041;
        System.out.println(sumOfDigits(id));
        System.out.println(id);
    }
}`, answer: "7\n2041", explain: '2 + 0 + 4 + 1 = 7. The method changed only its copy of the number, so id is still 2041.' },
        { t: 'fill', q: 'Complete reverseNumber.', code: J`
public static int reverseNumber(int n) {
    int rev = 0;
    while (n > 0) {
        rev = rev * ___ + n % 10;
        n = n ___ 10;
    }
    return rev;
}`, answers: ['10', '/'], explain: 'rev * 10 makes room for the next digit, and n / 10 removes the digit we used.' },
        { t: 'bug', q: 'This program prints <code>true</code>, but 9 is not prime. (To keep it short, the test for numbers below 2 is left out.) Tap the line with the bug.', qAr: 'البرنامج يقول إن 9 عدد أولي. أين الخطأ؟',
          code: J`
public class Main {
    public static boolean isPrime(int n) {
        for (int d = 2; d < n; d++) {
            if (n % d == 0) {
                return false;
            } else {
                return true;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        System.out.println(isPrime(9));
    }
}`, bug: [6, 7],
          fix: J`
public class Main {
    public static boolean isPrime(int n) {
        for (int d = 2; d < n; d++) {
            if (n % d == 0) {
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        System.out.println(isPrime(9));
    }
}`, hint: 'How many values of d does the loop try before the method returns?', explain: 'For 9, d = 2 does not divide 9, so the else returns true at once. The loop never tries d = 3. Remove the else: return true only after the loop has tried every d.', explainAr: 'else داخل الحلقة تجعل الدالة تقرر بعد قاسم واحد فقط.' },
        { t: 'bug', q: '121 is a palindrome number, so the program should print <code>true</code>. It prints <code>false</code>. Tap the line with the bug.', qAr: 'المفروض true لكن الناتج false. أين الخطأ؟',
          code: J`
public class Main {
    public static boolean isPalindromeNumber(int n) {
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n = n / 10;
        }
        return rev == n;
    }

    public static void main(String[] args) {
        System.out.println(isPalindromeNumber(121));
    }
}`, bug: 8,
          fix: J`
public class Main {
    public static boolean isPalindromeNumber(int n) {
        int original = n;
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n = n / 10;
        }
        return rev == original;
    }

    public static void main(String[] args) {
        System.out.println(isPalindromeNumber(121));
    }
}`, hint: 'What is the value of n when the loop has finished?', explain: 'The loop ends only when n is 0, so line 8 compares 121 with 0. Save the number before the loop (<code>int original = n;</code>) and compare rev with original.', explainAr: 'بعد الحلقة أصبحت n صفراً. احفظ{{g:|ي}} نسخة قبل الحلقة.' },
        { t: 'code', q: 'The <b>digital root</b> of a number: add its digits, and repeat until one digit is left. 9875 → 29 → 11 → 2. Write <code>sumOfDigits(int n)</code> and <code>public static int digitalRoot(int n)</code>, which calls sumOfDigits in a loop while n has two or more digits (n &gt;= 10). In main, read n and print <code>Digital root: x</code>. No prompts.', qAr: 'اجمع{{g:|ي}} أرقام العدد وكرر حتى يبقى رقم واحد.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write sumOfDigits and digitalRoot here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // print the digital root
    }
}`,
          tests: [ { stdin: '9875', expected: 'Digital root: 2' }, { stdin: '7', expected: 'Digital root: 7' }, { stdin: '99', expected: 'Digital root: 9' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static int sumOfDigits(int n) {
        int sum = 0;
        while (n > 0) {
            sum = sum + n % 10;
            n = n / 10;
        }
        return sum;
    }

    public static int digitalRoot(int n) {
        while (n >= 10) {
            n = sumOfDigits(n);
        }
        return n;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        System.out.println("Digital root: " + digitalRoot(n));
    }
}`, hint: 'In digitalRoot: while (n >= 10) { n = sumOfDigits(n); } then return n.', explain: 'digitalRoot reuses the tool sumOfDigits again and again. A one-digit number is already its own digital root.' }
      ]
    },
    // ===================================================== Lesson 12
    {
      title: 'Testing a method: PASS or FAIL',
      titleAr: 'اختبار الدالة: نجاح أو فشل',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why test a method?' },
        { type: 'p', en: 'A program that compiles is not always correct. The compiler checks the grammar of your code, not its meaning. If you write <code>return mark &gt; 50;</code> instead of <code>return mark &gt;= 50;</code>, the program compiles and runs, but a student with exactly 50 fails. <b>Testing</b> means calling a method with inputs where you already know the right answer, and comparing its answer with yours.',
          ar: 'المترجم يفحص قواعد الكتابة لا المعنى. الاختبار: نستدعي الدالة بقيم نعرف جوابها الصحيح ونقارن.' },
        { type: 'analogy', title: 'Tasting before serving', en: 'A good cook tastes the soup before it goes to the guests. If it needs salt, it is easy to fix now, in the kitchen. If a guest finds the problem, it is too late and embarrassing. Testing a method is tasting: you find the problem while the method is small and you still remember how it works.', ar: 'الاختبار مثل تذوق الطعام قبل تقديمه: نكتشف المشكلة مبكراً ونصلحها بسهولة.' },
        { type: 'h', en: 'A test = a call + the expected result' },
        { type: 'p', en: 'Each test has two parts: the <b>call</b> (the input) and the <b>expected result</b> (the answer you worked out by hand). The easiest test prints both, side by side.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static int square(int n) {
        return n * n;
    }

    public static void main(String[] args) {
        System.out.println("square(4) = " + square(4) + ", expected 16");
        System.out.println("square(0) = " + square(0) + ", expected 0");
        System.out.println("square(-3) = " + square(-3) + ", expected 9");
    }
}`, out: "square(4) = 16, expected 16\nsquare(0) = 0, expected 0\nsquare(-3) = 9, expected 9" },
        { type: 'p', en: 'This works, but you must read every line and compare the numbers in your head. With 20 tests, you will miss a wrong one. Computers are better at comparing, so let the program do it.', ar: 'كل اختبار فيه استدعاء وجواب متوقع.' },
        { type: 'h', en: 'Let the program say PASS or FAIL' },
        { type: 'p', en: 'We write a small helper method, <code>check</code>. It receives a name for the test, the actual answer and the expected answer. If they are equal it prints <code>PASS</code>; if not, it prints <code>FAIL</code> with both values, so you can see what went wrong.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static int square(int n) {
        return n * n;
    }

    public static void check(String name, int actual, int expected) {
        if (actual == expected) {
            System.out.println("PASS " + name);
        } else {
            System.out.println("FAIL " + name + ": got " + actual + ", expected " + expected);
        }
    }

    public static void main(String[] args) {
        check("square(4)", square(4), 16);
        check("square(0)", square(0), 0);
        check("square(-3)", square(-3), 9);
    }
}`, out: "PASS square(4)\nPASS square(0)\nPASS square(-3)" },
        { type: 'lines', rows: [
          ['check("square(4)", square(4), 16);', 'Three arguments: a name (text), the actual answer, the expected answer.'],
          ['square(4)', 'An argument that is a call: Java runs square(4) <b>first</b>. check receives 16, not the call.'],
          ['if (actual == expected)', 'Two ints are compared with ==. Equal means the method passed this test.'],
          ['"FAIL " + name + ": got " + actual + ...', 'On a fail, show both values. This tells you where to look.']
        ], ar: 'الدالة المساعدة check تقارن وتطبع PASS أو FAIL، فلا نقارن بأعيننا.' },
        { type: 'memory', title: 'What happens in one check call', en: 'The line is <code>check("square(4)", square(4), 16);</code>. Watch the order: square runs and disappears before check even starts.',
          frames: [
            { label: 'Java works out the arguments first. square(4) runs', vars: [{ name: 'square: n', type: 'int', value: '4' }] },
            { label: 'square returned 16 and is gone. Now check runs with the three values', vars: [{ name: 'check: name', type: 'String', value: '"square(4)"' }, { name: 'check: actual', type: 'int', value: '16' }, { name: 'check: expected', type: 'int', value: '16' }] },
            { label: '16 == 16, so check prints <code>PASS square(4)</code> and ends. The stack is back to main alone', vars: [] }
          ], ar: 'تُحسب الوسائط أولاً: تعمل square وتنتهي، ثم تبدأ check.' },
        { type: 'check', q: 'In <code>check("square(5)", square(5), 25);</code>, which method runs first?', options: ['check', 'square', 'Both at the same time', 'main is paused forever'], answer: 1, explain: 'Before Java can call check, it must know the values of all its arguments, so square(5) runs first and returns 25.' },
        { type: 'h', en: 'Choosing good test values' },
        { type: 'p', en: 'Bugs like to hide at the <b>edges</b>. If you test isPass only with 75 and 20, you will never see the <code>&gt;</code> versus <code>&gt;=</code> bug. Good testers choose three kinds of values:' },
        { type: 'list', items: [
          '<b>Normal values</b>: ordinary inputs, such as 75 and 20 for isPass.',
          '<b>Boundary values</b>: the exact place where the answer changes, and its neighbours. For "50 or more passes": 49, 50 and 51.',
          '<b>Special values</b>: 0, 1, negative numbers, the biggest allowed value, the empty String "".'
        ], ar: 'نختبر قيماً عادية، وقيماً حدّية عند نقطة تغيّر الجواب، وقيماً خاصة مثل الصفر والنص الفارغ.' },
        { type: 'analogy', title: 'The height sign at a theme park', en: 'A ride says: "You must be 120 cm or taller." The worker who checks it should think about a child of 119 cm (no), 120 cm (yes!) and 121 cm (yes). The child of exactly 120 cm is the one where a careless worker makes a mistake. 119, 120 and 121 are the boundary values.', ar: 'عند لوحة الطول في الملاهي نجرب 119 و120 و121 سم، فهنا يقع الخطأ عادة.' },
        { type: 'table', head: ['Method', 'Normal', 'Boundary', 'Special'], rows: [
          ['<code>isPass(mark)</code> (50 or more)', '75, 20', '49, 50, 51', '0, 100'],
          ['<code>isPrime(n)</code>', '7, 9', '2 (the smallest prime)', '1, 0, -5'],
          ['<code>letterGrade(mark)</code>', '95, 72', '89, 90, 59, 60', '0, 100'],
          ['<code>countVowels(text)</code>', '"Riyadh"', '"a" (one letter)', '"" (empty), "xyz" (no vowels)']
        ] },
        { type: 'check', q: '<code>isAdult(age)</code> should be true for 18 or more. Which pair of tests checks the boundary?', options: ['5 and 60', '17 and 18', '30 and 31', '0 and 100'], answer: 1, explain: '17 is the last "false" and 18 is the first "true". A wrong &gt; instead of &gt;= shows up only with 18.' },
        { type: 'steps', title: 'Worked example: a test catches a bug', problem: 'A friend wrote <code>isPass</code> and says it is correct. Test it with normal, boundary and special values, find the bug, fix it and test again.',
          steps: [
            { en: 'Here is the friend\'s method. It compiles.', code: J`
public static boolean isPass(int mark) {
    return mark > 50;
}` },
            { en: 'isPass returns a boolean, so we need a check for booleans. We <b>overload</b> check (Lesson 7): same name, different parameter types.', code: J`
public static void check(String name, boolean actual, boolean expected) {
    if (actual == expected) {
        System.out.println("PASS " + name);
    } else {
        System.out.println("FAIL " + name + ": got " + actual + ", expected " + expected);
    }
}` },
            { en: 'Write the tests: 75 (normal), 49 and 50 (boundary), 0 and 100 (special). The expected answers come from the rule, worked out by hand.', code: J`
check("isPass(75)", isPass(75), true);
check("isPass(49)", isPass(49), false);
check("isPass(50)", isPass(50), true);` },
            { en: 'Run with the friend\'s version. Four tests pass, but one line says <code>FAIL isPass(50): got false, expected true</code>. The boundary test found the bug.' },
            { en: 'Fix the method: <code>return mark &gt;= 50;</code>. Run <b>all</b> the tests again: now every line says PASS.' }
          ],
          code: J`
public class Main {
    public static boolean isPass(int mark) {
        return mark >= 50;
    }

    public static void check(String name, boolean actual, boolean expected) {
        if (actual == expected) {
            System.out.println("PASS " + name);
        } else {
            System.out.println("FAIL " + name + ": got " + actual + ", expected " + expected);
        }
    }

    public static void main(String[] args) {
        check("isPass(75)", isPass(75), true);
        check("isPass(49)", isPass(49), false);
        check("isPass(50)", isPass(50), true);
        check("isPass(0)", isPass(0), false);
        check("isPass(100)", isPass(100), true);
    }
}`, out: "PASS isPass(75)\nPASS isPass(49)\nPASS isPass(50)\nPASS isPass(0)\nPASS isPass(100)", ar: 'اختبار القيمة الحدّية 50 كشف الخطأ، وبعد الإصلاح نعيد كل الاختبارات.' },
        { type: 'h', en: 'Testing a String method' },
        { type: 'p', en: 'For Strings we overload check once more and compare with <code>equals</code>. The special values matter even more here: one letter, and the empty String.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static String capitalize(String word) {
        if (word.length() == 0) {
            return word;
        }
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    }

    public static void check(String name, String actual, String expected) {
        if (actual.equals(expected)) {
            System.out.println("PASS " + name);
        } else {
            System.out.println("FAIL " + name + ": got " + actual + ", expected " + expected);
        }
    }

    public static void main(String[] args) {
        check("normal", capitalize("rEEM"), "Reem");
        check("one letter", capitalize("a"), "A");
        check("empty", capitalize(""), "");
    }
}`, out: "PASS normal\nPASS one letter\nPASS empty" },
        { type: 'h', en: 'Why small methods are easy to test' },
        { type: 'p', en: 'A method that takes parameters and returns an answer is easy to test: you give it a value and check the value that comes back. Nothing to type, nothing to read on the screen. A method that reads from the keyboard and prints is hard to test: for every test you must type the input and read the output yourself. This is one more reason for the rule from Lesson 9: <b>calculating methods return; main does the input and output.</b>', ar: 'الدالة التي تستقبل معاملات وترجع جواباً سهلة الاختبار، أما التي تقرأ وتطبع فصعبة.' },
        { type: 'note', kind: 'warn', en: 'Do not compare two doubles with <code>==</code>. Calculations like <code>0.1 + 0.2</code> give 0.30000000000000004, not 0.3. Instead, check that they are very close: <code>Math.abs(actual - expected) &lt; 0.001</code>.', ar: 'لا نقارن أعداد double بـ ==، بل نتحقق أن الفرق صغير جداً.' },
        { type: 'note', kind: 'tip', en: 'Keep your tests in main while you build a program, and run them again after <b>every</b> change. A fix for one case can break another case, and the old tests will tell you at once.' }
      ],
      mistakes: [
        { title: 'Testing only easy values', en: 'Tests with 75 and 20 cannot find a mistake at 50. Always include boundary and special values.' },
        { title: 'Working out the expected value with the same code', en: 'The expected answer must come from your head, a calculator or the rule, not from the method you are testing. If the method is wrong, it would "agree" with itself.', code: J`
check("isPass(50)", isPass(50), isPass(50));   // useless: always PASS
check("isPass(50)", isPass(50), true);         // correct: true comes from the rule`, ar: 'الجواب المتوقع نحسبه بأنفسنا، لا بالدالة نفسها.' },
        { title: 'Comparing doubles with ==', en: 'Tiny rounding differences make <code>==</code> fail. Compare with <code>Math.abs(a - b) &lt; 0.001</code>.' },
        { title: 'Not running the tests again after a fix', en: 'After every change, run <b>all</b> the tests, not only the one that failed.' }
      ],
      remember: [
        'A test = a call + the <b>expected result</b> worked out by hand.',
        'A helper <code>check(name, actual, expected)</code> prints PASS or FAIL; overload it for int, boolean and String.',
        'Choose normal, <b>boundary</b> (where the answer changes) and special values (0, 1, negative, "").',
        'Methods with parameters and a return value are the easiest to test.',
        'Compare doubles with a small difference, not with <code>==</code>.',
        'Run all the tests again after every change.'
      ],
      rememberAr: 'الاختبار استدعاء مع جواب متوقع. الدالة check تطبع PASS أو FAIL. نختار قيماً عادية وحدّية وخاصة. الدوال الصغيرة التي ترجع قيمة سهلة الاختبار. نعيد كل الاختبارات بعد أي تعديل.',
      practice: [
        { t: 'mcq', q: 'Delivery is free for orders of <b>100 SAR or more</b>. Which pair of values are the boundary tests for <code>isFreeDelivery(total)</code>?', options: ['10 and 500', '99 and 100', '100 and 200', '0 and 1'], answer: 1, explain: '99 is the last value with a delivery fee and 100 is the first free one. This is where &gt; and &gt;= give different answers.', qAr: 'ما القيمتان الحدّيتان؟' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int doubleIt(int n) {
        return n + 2;
    }

    public static void check(String name, int actual, int expected) {
        if (actual == expected) {
            System.out.println("PASS " + name);
        } else {
            System.out.println("FAIL " + name + ": got " + actual + ", expected " + expected);
        }
    }

    public static void main(String[] args) {
        check("doubleIt(2)", doubleIt(2), 4);
        check("doubleIt(5)", doubleIt(5), 10);
    }
}`, answer: "PASS doubleIt(2)\nFAIL doubleIt(5): got 7, expected 10", explain: 'The method adds 2 instead of multiplying by 2. For 2 both give 4, so the first test passes by luck. The second test shows the bug. One passing test does not prove a method is correct.', explainAr: 'نجاح اختبار واحد لا يثبت صحة الدالة.' },
        { t: 'mcq', q: 'Why is a method that reads from the keyboard and prints its answer <b>hard</b> to test?', options: ['Because it cannot be called from main', 'Because every test needs someone to type the input and read the screen', 'Because it has no name', 'Because Java does not allow print inside methods'], answer: 1, explain: 'A method with parameters and a return value can be tested by the program itself; one that reads and prints needs a person for every test.' },
        { t: 'fill', q: 'Complete the overloaded check for boolean answers.', code: J`
public static void check(String name, ___ actual, boolean expected) {
    if (actual ___ expected) {
        System.out.println("PASS " + name);
    } else {
        System.out.println("FAIL " + name);
    }
}`, answers: ['boolean', '=='], explain: 'The actual answer of a boolean method is a boolean. Two booleans can be compared with ==.' },
        { t: 'bug', q: 'triple is correct, but the test prints <code>FAIL triple(4)</code>. The bug is in the test helper. Tap the line with the bug.', qAr: 'الدالة صحيحة لكن الاختبار يقول FAIL. أين الخطأ؟',
          code: J`
public class Main {
    public static int triple(int n) {
        return n * 3;
    }
    public static void check(String name, int actual, int expected) {
        if (actual != expected) {
            System.out.println("PASS " + name);
        } else {
            System.out.println("FAIL " + name);
        }
    }
    public static void main(String[] args) {
        check("triple(4)", triple(4), 12);
    }
}`, bug: 6,
          fix: J`
public class Main {
    public static int triple(int n) {
        return n * 3;
    }
    public static void check(String name, int actual, int expected) {
        if (actual == expected) {
            System.out.println("PASS " + name);
        } else {
            System.out.println("FAIL " + name);
        }
    }
    public static void main(String[] args) {
        check("triple(4)", triple(4), 12);
    }
}`, hint: 'When should the helper print PASS: when the two values are equal, or different?', explain: 'The condition is upside down: it prints PASS when the values are <b>different</b>. A broken test is dangerous because it hides real bugs. Use <code>actual == expected</code>.', explainAr: 'الشرط معكوس: يجب أن يكون ==.' },
        { t: 'code', q: 'Write <code>public static int max(int a, int b)</code> and <code>public static void check(String name, int actual, int expected)</code>. check prints <code>PASS name</code> or <code>FAIL name: got X, expected Y</code>. In main, read a, b and the expected answer, and call <code>check("max", max(a, b), expected)</code>. No prompts.<br>Example: input <code>3 9 9</code> prints <code>PASS max</code>; input <code>3 9 3</code> prints <code>FAIL max: got 9, expected 3</code>', qAr: 'اكتب{{g:|ي}} دالة max ودالة check التي تطبع PASS أو FAIL.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write max and check here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        int expected = input.nextInt();
        // call check
    }
}`,
          tests: [ { stdin: '3 9 9', expected: 'PASS max' }, { stdin: '3 9 3', expected: 'FAIL max: got 9, expected 3' }, { stdin: '7 7 7', expected: 'PASS max' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static int max(int a, int b) {
        if (a > b) {
            return a;
        }
        return b;
    }

    public static void check(String name, int actual, int expected) {
        if (actual == expected) {
            System.out.println("PASS " + name);
        } else {
            System.out.println("FAIL " + name + ": got " + actual + ", expected " + expected);
        }
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        int expected = input.nextInt();
        check("max", max(a, b), expected);
    }
}`, hint: 'check has an if/else with ==. The call max(a, b) is the second argument of check.', explain: 'The test (7, 7) is a boundary case: the two numbers are equal. A good max must still return 7.' }
      ]
    },
    // ===================================================== Lesson 13
    {
      title: 'Documenting methods: names, comments and headers',
      titleAr: 'توثيق الدوال: الأسماء والتعليقات ورأس الدالة',
      minutes: 25,
      body: [
        { type: 'h', en: 'Code is read more often than it is written' },
        { type: 'p', en: 'You write a method once, but you, your teammates and your teacher read it many times. In two weeks you will not remember what <code>calc(a, b)</code> does. <b>Documenting</b> a method means making it easy to understand <b>without reading its body</b>: a clear name, clear parameter names, and a short comment above it.',
          ar: 'التوثيق يجعل الدالة مفهومة دون قراءة جسمها: اسم واضح ومعاملات واضحة وتعليق قصير.' },
        { type: 'analogy', title: 'The label on a medicine box', en: 'A medicine box has a label: what it is for, how much to take, and what to expect. You do not need to know the chemistry inside to use it safely. A documented method is the same: the name and the comment are the label. Another student can use your method correctly without opening it.', ar: 'التعليق والاسم مثل الملصق على علبة الدواء: نستخدمها بأمان دون معرفة ما بداخلها.' },
        { type: 'h', en: 'Step 1: names that say what the method does' },
        { type: 'p', en: 'A few simple habits make names clear:' },
        { type: 'list', items: [
          'A method that <b>does an action</b> (usually void): a verb. <code>printReceipt</code>, <code>showMenu</code>.',
          'A method that <b>returns a value</b>: name the answer. <code>totalPrice</code>, <code>average</code>, <code>toFahrenheit</code>, <code>countVowels</code>.',
          'A method that returns a <b>boolean</b>: a yes/no question. <code>isPrime</code>, <code>isWeekend</code>, <code>hasDigit</code>.',
          '<b>Parameters</b> deserve good names too: <code>price</code>, not <code>p</code>; <code>mark</code>, not <code>x</code>.'
        ] },
        { type: 'table', head: ['Unclear', 'Clear', 'Why it is better'], rows: [
          ['<code>calc(int a, int b)</code>', '<code>totalPrice(int price, int qty)</code>', 'says what is calculated and what each input is'],
          ['<code>f(int n)</code>', '<code>isPrime(int n)</code>', 'a yes/no question for a boolean answer'],
          ['<code>doIt()</code>', '<code>printMenu()</code>', 'says which action'],
          ['<code>check2(double t)</code>', '<code>isFever(double temp)</code>', 'no numbers in names; full words']
        ] },
        { type: 'check', q: 'Which is the best name for a method that returns whether a year is a leap year?', options: ['<code>leap</code>', '<code>year2</code>', '<code>isLeapYear</code>', '<code>LeapYearMethod</code>'], answer: 2, explain: 'It returns true or false, so a yes/no question starting with "is" is clearest. It also starts with a small letter.', ar: 'الدالة المنطقية اسمها سؤال يبدأ بـ is.' },
        { type: 'h', en: 'Step 2: a comment above the method' },
        { type: 'p', en: 'Above each method, write a short comment with three facts: <b>what</b> the method does (one sentence), what each <b>parameter</b> means (with units: riyals or dollars? km or miles?), and what it <b>returns</b>. Java ignores comments; they are only for people.' },
        { type: 'code', code: J`
// Returns the price after adding 15% VAT.
// price: the price before VAT, in riyals
// returns: the price with VAT, in riyals
public static double withVat(double price) {
    return price * 1.15;
}` },
        { type: 'lines', rows: [
          ['// Returns the price after adding 15% VAT.', 'What the method does, in one sentence.'],
          ['// price: the price before VAT, in riyals', 'What the parameter means, and its unit.'],
          ['// returns: the price with VAT, in riyals', 'What the caller gets back.']
        ], ar: 'التعليق يذكر ماذا تفعل الدالة، ومعنى كل معامل، وماذا ترجع.' },
        { type: 'h', en: 'The professional form: Javadoc comments' },
        { type: 'p', en: 'In books and in Java\'s own help pages, you will see a special comment that starts with <code>/**</code>. It is called a <b>Javadoc comment</b>. It holds the same three facts in a standard form: <code>@param</code> for each parameter and <code>@return</code> for the answer. Tools can turn these comments into help web pages; the official help page for <code>String.length()</code> was made this way.' },
        { type: 'code', code: J`
/**
 * Changes a distance from kilometres to miles.
 * @param km the distance in kilometres
 * @return the same distance in miles
 */
public static double kmToMiles(double km) {
    return km * 0.621371;
}` },
        { type: 'lines', rows: [
          ['/**', 'Starts a Javadoc comment (two stars). It ends with */.'],
          ['* Changes a distance from kilometres to miles.', 'The first sentence: what the method does.'],
          ['* @param km the distance in kilometres', '@param, then the parameter name, then its meaning. One line per parameter.'],
          ['* @return the same distance in miles', 'What comes back. A void method has no @return line.']
        ], ar: 'تعليق Javadoc يبدأ بـ /** ويستخدم @param لكل معامل و@return للقيمة المرجعة.' },
        { type: 'check', q: 'In a Javadoc comment, which tag describes what the method gives back?', options: ['<code>@param</code>', '<code>@return</code>', '<code>@void</code>', '<code>@result</code>'], answer: 1, explain: '@return describes the returned value. @param describes one parameter. A void method has no @return.' },
        { type: 'h', en: 'Step 3: read a header to know how to call it' },
        { type: 'p', en: 'The header is like a promise. It tells you everything you need to <b>call</b> the method: its name, what you must give (how many arguments, their types and their order) and what you get back (the return type). With the header and the comment, you can use a method that someone else wrote without reading its body.' },
        { type: 'analogy', title: 'The shape of a plug', en: 'You do not open a phone charger to know where it fits. You look at the plug: its shape tells you which socket it needs. A method header is the plug: <code>(double riyals, double rate)</code> tells you that it needs two doubles in that order, and <code>double</code> before the name tells you that a double comes out.', ar: 'رأس الدالة مثل شكل القابس: يخبرك بما تحتاجه دون فتح الجهاز.' },
        { type: 'table', head: ['Header part', 'In <code>public static double toDollars(double riyals, double rate)</code>', 'What it tells you'], rows: [
          ['return type', '<code>double</code>', 'you get a double back: store it in a double variable'],
          ['name', '<code>toDollars</code>', 'what you write in the call'],
          ['parameters', '<code>(double riyals, double rate)</code>', 'give 2 numbers: the riyals first, then the rate'],
          ['a correct call', '<code>double d = toDollars(375, 3.75);</code>', 'two arguments in the right order, result stored']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    /**
     * Changes riyals to US dollars.
     * @param riyals the amount in Saudi riyals
     * @param rate how many riyals one dollar costs
     * @return the amount in dollars
     */
    public static double toDollars(double riyals, double rate) {
        return riyals / rate;
    }

    /**
     * Prints a line made of one character.
     * @param c the character to print
     * @param n how many times to print it
     */
    public static void printLine(char c, int n) {
        for (int i = 1; i <= n; i++) {
            System.out.print(c);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        printLine('=', 19);
        double usd = toDollars(375, 3.75);
        System.out.println("375 SAR = " + usd + " USD");
        printLine('=', 19);
    }
}`, out: "===================\n375 SAR = 100.0 USD\n===================" },
        { type: 'p', en: 'Read main without looking at the bodies: the comments and headers are enough to understand every call. Notice that <code>printLine</code> is void, so its comment has no <code>@return</code>, and its call stands alone on a line.', ar: 'من الرأس والتعليق نعرف كيف نستدعي الدالة دون قراءة جسمها.' },
        { type: 'check', q: 'The header is <code>public static int toMinutes(int hours, int minutes)</code>. Which line is correct?', options: ['<code>toMinutes(2, 30);</code> (and nothing else)', '<code>String m = toMinutes(2, 30);</code>', '<code>int m = toMinutes(2, 30);</code>', '<code>int m = toMinutes(2.5);</code>'], answer: 2, explain: 'It needs two ints and returns an int, so we store the answer in an int. The first option throws the answer away; the second stores it in the wrong type; the last gives one double.' },
        { type: 'steps', title: 'Worked example: making a mystery method readable', problem: 'A classmate wrote this method for a road trip program. Make it readable: understand it, rename it, document it, and add a second documented method. Then use both.',
          steps: [
            { en: 'Here is the method. What does it do? The names say nothing.', code: J`
public static double f(double a, double b, double c) {
    return a * b / 100 * c;
}` },
            { en: 'Ask your classmate, or test it: it is the fuel cost of a trip. a is the distance in km, b is the litres the car uses per 100 km, and c is the price of one litre.' },
            { en: 'Rename the method and the parameters. The body does not change at all, so the answers do not change.', code: J`
public static double fuelCost(double km, double litresPer100, double pricePerLitre) {
    return km * litresPer100 / 100 * pricePerLitre;
}` },
            { en: 'Add a Javadoc comment above it with @param for each parameter and @return. Then write a second method, <code>costPerPerson</code>, and document it the same way.' },
            { en: 'main reads the trip data and calls both methods. For 400 km, 8 litres per 100 km, 2.33 SAR per litre and 4 friends: 32 litres cost 74.56 SAR, so each pays 18.64 SAR.' }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    /**
     * Works out the fuel cost of a trip.
     * @param km the distance in kilometres
     * @param litresPer100 the litres the car uses for every 100 km
     * @param pricePerLitre the price of one litre, in riyals
     * @return the cost of the fuel, in riyals
     */
    public static double fuelCost(double km, double litresPer100, double pricePerLitre) {
        return km * litresPer100 / 100 * pricePerLitre;
    }

    /**
     * Shares a cost equally between people.
     * @param total the whole cost, in riyals
     * @param people how many people share it (at least 1)
     * @return the part each person pays, in riyals
     */
    public static double costPerPerson(double total, int people) {
        return total / people;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double km = input.nextDouble();
        double litres = input.nextDouble();
        double price = input.nextDouble();
        int friends = input.nextInt();
        double cost = fuelCost(km, litres, price);
        System.out.printf("Fuel: %.2f SAR%n", cost);
        System.out.printf("Each of %d pays: %.2f SAR%n", friends, costPerPerson(cost, friends));
    }
}`, stdin: '400 8 2.33 4', out: "Fuel: 74.56 SAR\nEach of 4 pays: 18.64 SAR", ar: 'غيّرنا الأسماء وأضفنا التعليقات فقط، والنتيجة لم تتغير، لكن الكود صار مفهوماً.' },
        { type: 'note', kind: 'exam', en: 'Exam questions often give only a header and ask you to write a correct call, or ask what type the result variable must have. Read the header from left to right: return type, name, then each parameter type in order.', ar: 'في الاختبار اقرأ{{g:|ي}} رأس الدالة: نوع القيمة المرجعة، ثم الاسم، ثم أنواع المعاملات بالترتيب.' }
      ],
      mistakes: [
        { title: 'A comment that repeats the code', en: 'A comment should say <b>what</b> and <b>why</b>, not repeat each operation.', code: J`
total = total + price;   // add price to total   (useless)
// Keep a running total of the whole order       (useful)`, ar: 'التعليق يشرح الهدف، لا يكرر الكود.' },
        { title: 'A comment that is out of date', en: 'The code changed from 10% to 15% VAT, but the comment still says 10%. A wrong comment is worse than no comment. Update comments when you change code.' },
        { title: 'A name that lies', en: 'A method called <code>isPrime</code> that prints instead of returning a boolean, or <code>totalPrice</code> that returns the VAT only, will trick every reader. The name must match what the method really does.' },
        { title: 'Forgetting units', en: '"@param distance the distance" does not say km or miles. "@param km the distance in kilometres" does. Many real disasters started with mixed-up units.' }
      ],
      remember: [
        'Action methods: verbs (<code>printMenu</code>). Value methods: name the answer (<code>totalPrice</code>). Boolean methods: questions (<code>isPrime</code>).',
        'Give parameters meaningful names, with units in the comment.',
        'Above each method: what it does, each parameter, what it returns.',
        'Javadoc: <code>/** ... */</code> with <code>@param</code> and <code>@return</code> (no @return for void).',
        'The header tells you how to call: return type, name, parameter types in order.'
      ],
      rememberAr: 'الاسم الجيد يصف عمل الدالة. نكتب فوق كل دالة ماذا تفعل ومعنى معاملاتها وماذا ترجع. Javadoc يستخدم @param و@return. رأس الدالة يخبرنا كيف نستدعيها.',
      practice: [
        { t: 'mcq', q: 'Which name is best for a method that returns <code>true</code> when a password has at least 8 characters?', options: ['<code>pw</code>', '<code>checkPassword</code>', '<code>isLongEnough</code>', '<code>Password8</code>'], answer: 2, explain: 'The method answers a yes/no question, so a name like isLongEnough tells the reader exactly what true means. "checkPassword" does not say what is checked or what the answer means.', qAr: 'ما أفضل اسم للدالة المنطقية؟' },
        { t: 'mcq', q: 'The header is <code>public static String grade(int mark, boolean late)</code>. Which line compiles and keeps the answer?', options: ['<code>int g = grade(85, false);</code>', '<code>String g = grade(false, 85);</code>', '<code>String g = grade(85, false);</code>', '<code>String g = grade(85);</code>'], answer: 2, explain: 'Two arguments, int first and boolean second, and the answer is a String.' },
        { t: 'fill', q: 'Complete the Javadoc comment.', code: J`
/**
 * Changes a distance from kilometres to miles.
 * @___ km the distance in kilometres
 * @___ the same distance in miles
 */
public static double kmToMiles(double km) {
    return km * 0.621371;
}`, answers: ['param', 'return'], explain: '@param describes a parameter (followed by its name). @return describes the value the method gives back.' },
        { t: 'output', q: 'What is the output? (Read the comments; they tell you what each method does.)', code: J`
public class Main {
    /**
     * Changes hours and minutes into minutes only.
     * @param hours whole hours
     * @param minutes extra minutes
     * @return the total number of minutes
     */
    public static int toMinutes(int hours, int minutes) {
        return hours * 60 + minutes;
    }

    public static void main(String[] args) {
        int lecture = toMinutes(1, 15);
        int lab = toMinutes(2, 0);
        System.out.println("Lecture: " + lecture);
        System.out.println("Together: " + (lecture + lab));
    }
}`, answer: "Lecture: 75\nTogether: 195", explain: '1 hour and 15 minutes is 75 minutes. 2 hours is 120 minutes. 75 + 120 = 195.' },
        { t: 'bug', q: 'A car drives 240 km in 2 hours, so the speed should be <code>120.0</code>. The program prints a tiny number. The comment tells you how to call the method. Tap the line with the bug.', qAr: 'السرعة غير صحيحة. اقرأ{{g:|ي}} التعليق ثم حدد{{g:|ي}} الخطأ.',
          code: J`
public class Main {
    /**
     * Works out the average speed.
     * @param km the distance in kilometres
     * @param hours the time in hours
     * @return the speed in km per hour
     */
    public static double speed(double km, double hours) {
        return km / hours;
    }

    public static void main(String[] args) {
        System.out.println(speed(2, 240));
    }
}`, bug: 13,
          fix: J`
public class Main {
    /**
     * Works out the average speed.
     * @param km the distance in kilometres
     * @param hours the time in hours
     * @return the speed in km per hour
     */
    public static double speed(double km, double hours) {
        return km / hours;
    }

    public static void main(String[] args) {
        System.out.println(speed(240, 2));
    }
}`, hint: 'Which parameter comes first in the header: km or hours?', explain: 'The header and the @param lines say: distance first, then time. The call gives 2 as the distance and 240 as the time, so it works out 2 / 240. Both are doubles, so the compiler cannot help. Call <code>speed(240, 2)</code>.', explainAr: 'الوسائط بترتيب خاطئ. التعليق يوضح الترتيب الصحيح.' },
        { t: 'code', q: 'Here is a header with its comment. Write the body, then use it.<br><code>/** Changes hours and minutes into minutes only. @param hours whole hours @param minutes extra minutes @return the total number of minutes */</code><br><code>public static int toMinutes(int hours, int minutes)</code><br>In main, read the hours and the minutes and print <code>Total: x minutes</code>. No prompts.<br>Example: input <code>2 30</code> prints <code>Total: 150 minutes</code>', qAr: 'اكتب{{g:|ي}} جسم الدالة حسب الرأس والتعليق.',
          starter: J`
import java.util.Scanner;

public class Main {
    /**
     * Changes hours and minutes into minutes only.
     * @param hours whole hours
     * @param minutes extra minutes
     * @return the total number of minutes
     */
    public static int toMinutes(int hours, int minutes) {
        // write the body
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int h = input.nextInt();
        int m = input.nextInt();
        // print the total
    }
}`,
          tests: [ { stdin: '2 30', expected: 'Total: 150 minutes' }, { stdin: '0 45', expected: 'Total: 45 minutes' }, { stdin: '1 0', expected: 'Total: 60 minutes' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    /**
     * Changes hours and minutes into minutes only.
     * @param hours whole hours
     * @param minutes extra minutes
     * @return the total number of minutes
     */
    public static int toMinutes(int hours, int minutes) {
        return hours * 60 + minutes;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int h = input.nextInt();
        int m = input.nextInt();
        System.out.println("Total: " + toMinutes(h, m) + " minutes");
    }
}`, hint: 'One hour is 60 minutes: return hours * 60 + minutes;', explain: 'The header and comment told you everything: two ints in, one int out. You did not need anything else to write and use it.' }
      ]
    },
    // ===================================================== Lesson 14
    {
      title: 'Project: a menu-driven unit converter',
      titleAr: 'مشروع: محوّل وحدات بقائمة اختيارات',
      minutes: 30,
      body: [
        { type: 'h', en: 'Programs that keep asking' },
        { type: 'p', en: 'A bank machine, a ticket machine, the self-order screen in a cafe: they all show a <b>menu</b>, do what you choose, and then show the menu again, until you choose "Exit". This kind of program is called <b>menu-driven</b>. You already know every part you need: methods (this unit), <code>switch</code> (Unit 3) and loops (Unit 5). In this lesson you put them together in one project.',
          ar: 'البرنامج ذو القائمة يعرض الخيارات وينفذ اختيارك ثم يعود إلى القائمة حتى تختار الخروج.' },
        { type: 'analogy', title: 'A self-order screen', en: 'At a cafe screen you press "Coffee", choose the size, and the screen goes back to the main menu. You press "Juice", and again it returns to the menu. Only when you press "Finish" does it stop. Our converter works the same way: the menu is shown, one job is done by one method, and the loop brings the menu back.', ar: 'مثل شاشة الطلب في المقهى: تختار، فتنفذ، ثم تعود إلى القائمة حتى تضغط إنهاء.' },
        { type: 'h', en: 'The plan: one method per job' },
        { type: 'p', en: 'We use stepwise refinement (Lesson 9). The converter changes Saudi riyals to US dollars (1 dollar = 3.75 riyals), kilometres to miles (1 km = 0.621371 miles) and Celsius to Fahrenheit.' },
        { type: 'table', head: ['Job', 'Where', 'Kind'], rows: [
          ['show the menu', '<code>printMenu()</code>', 'void, only prints'],
          ['riyals to dollars', '<code>riyalsToDollars(double sar)</code>', 'returns a double'],
          ['km to miles', '<code>kmToMiles(double km)</code>', 'returns a double'],
          ['Celsius to Fahrenheit', '<code>toFahrenheit(double c)</code>', 'returns a double'],
          ['choose the job', '<code>switch</code> in main', 'calls the right method'],
          ['repeat until 0', 'a <code>do-while</code> loop in main', 'brings the menu back']
        ] },
        { type: 'h', en: 'Piece 1: the menu' },
        { type: 'code', code: J`
public static void printMenu() {
    System.out.println("Menu: 1=SAR to USD, 2=km to miles, 3=C to F, 0=Exit");
}` },
        { type: 'p', en: 'A void method that only prints. It is called at the start of every round. If you want to change the menu text later, there is one place to change.', ar: 'دالة القائمة void تطبع فقط، ونستدعيها في بداية كل دورة.' },
        { type: 'h', en: 'Piece 2: the conversion methods, tested first' },
        { type: 'p', en: 'Each conversion is a small method that receives a number and returns the answer. Before we build the loop, we test them with values we can check by hand (Lesson 12). Then, if the full program gives a strange answer, we know the problem is not in these methods.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static double riyalsToDollars(double sar) {
        return sar / 3.75;
    }

    public static double kmToMiles(double km) {
        return km * 0.621371;
    }

    public static double toFahrenheit(double c) {
        return c * 9 / 5 + 32;
    }

    public static void main(String[] args) {
        System.out.printf("375 SAR = %.2f USD%n", riyalsToDollars(375));
        System.out.printf("100 km = %.2f miles%n", kmToMiles(100));
        System.out.printf("40 C = %.1f F%n", toFahrenheit(40));
    }
}`, out: "375 SAR = 100.00 USD\n100 km = 62.14 miles\n40 C = 104.0 F" },
        { type: 'lines', rows: [
          ['return sar / 3.75;', 'One dollar costs 3.75 riyals, so divide. 375 / 3.75 = 100.'],
          ['return km * 0.621371;', '100 km is 62.1371 miles; %.2f shows 62.14.'],
          ['System.out.printf("40 C = %.1f F%n", toFahrenheit(40));', 'The call is an argument of printf. 40 × 9 / 5 + 32 = 104.']
        ], ar: 'نختبر دوال التحويل أولاً بقيم نعرف جوابها.' },
        { type: 'check', q: 'Why do we test the three conversion methods <b>before</b> writing the menu loop?', options: ['Because Java needs it to compile', 'So that later problems can only be in the new part (the loop), not in tested methods', 'Because a loop cannot call methods', 'There is no reason'], answer: 1, explain: 'Building and testing one piece at a time means you always know where a new bug comes from.' },
        { type: 'h', en: 'Piece 3: the loop and the switch' },
        { type: 'p', en: 'main repeats the same round: show the menu, read the choice, do the job, and check if the user chose 0. The menu must be shown at least once, so a <code>do-while</code> loop fits well. Inside the round, a <code>switch</code> sends each choice to its method.' },
        { type: 'code', code: J`
int choice;
do {
    printMenu();
    choice = input.nextInt();
    double value;
    switch (choice) {
        case 1:
            value = input.nextDouble();
            System.out.printf("%.2f SAR = %.2f USD%n", value, riyalsToDollars(value));
            break;
        // case 2 and case 3 look the same, with their own method
        case 0:
            System.out.println("Goodbye!");
            break;
        default:
            System.out.println("Unknown choice: " + choice);
    }
} while (choice != 0);` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int choice;', 'Declared <b>before</b> the loop, because the condition <code>while (choice != 0)</code> is outside the braces (scope, Lesson 8).'],
          ['printMenu();', 'Every round starts by showing the menu.'],
          ['double value;', 'Declared here, given a value inside a case (declare first, give the value later).'],
          ['case 1: ... break;', 'Read the amount, call the method inside printf, and <code>break</code> to leave the switch.'],
          ['default:', 'Any other number: tell the user, and the loop shows the menu again.'],
          ['while (choice != 0);', 'Repeat while the choice is not 0. Choosing 0 ends the program.']
        ], ar: 'نعرّف choice قبل الحلقة لأن شرط while خارج الأقواس. وكل case ينتهي بـ break.' },
        { type: 'analogy', title: 'The front desk of a clinic', en: 'At the front desk, the receptionist does not treat anyone. She listens to what you need and sends you to the right room: "Eyes? Room 1. Teeth? Room 2." Then the next person comes. The <code>switch</code> is the receptionist, the methods are the rooms, and the loop brings the next person. Keep the receptionist simple: the real work happens in the rooms.', ar: 'switch مثل موظف الاستقبال: يوجّهك إلى الغرفة المناسبة (الدالة)، والعمل الحقيقي يتم داخل الغرفة.' },
        { type: 'memory', title: 'One round of the menu', en: 'The input starts with <code>1 375</code>. Watch one round: the choice, the amount, the call, and the end of the round.',
          frames: [
            { label: 'After <code>choice = input.nextInt();</code>', vars: [{ name: 'main: choice', type: 'int', value: '1' }] },
            { label: 'case 1: after <code>value = input.nextDouble();</code>', vars: [{ name: 'main: choice', type: 'int', value: '1' }, { name: 'main: value', type: 'double', value: '375.0' }] },
            { label: '<code>riyalsToDollars(value)</code> is running with its own copy', vars: [{ name: 'main: choice', type: 'int', value: '1' }, { name: 'main: value', type: 'double', value: '375.0' }, { name: 'riyalsToDollars: sar', type: 'double', value: '375.0' }] },
            { label: 'It returned 100.0, and printf printed <code>375.00 SAR = 100.00 USD</code>. <code>break</code> leaves the switch', vars: [{ name: 'main: choice', type: 'int', value: '1' }, { name: 'main: value', type: 'double', value: '375.0' }] },
            { label: 'End of the round: value is out of scope. 1 != 0 is true, so the loop starts again with the menu', vars: [{ name: 'main: choice', type: 'int', value: '1' }] }
          ], ar: 'في كل دورة: نقرأ الاختيار، ثم القيمة، ثم نستدعي الدالة، ثم نعود إلى القائمة.' },
        { type: 'note', kind: 'exam', en: 'Every <code>case</code> needs a <code>break</code>. Without it, Java "falls through" and also runs the next case. A converter without a break after case 1 prints a dollar answer <b>and</b> a miles answer.', ar: 'بدون break ينفذ البرنامج الحالة التالية أيضاً.' },
        { type: 'steps', title: 'Worked example: the whole converter', problem: 'Join the pieces into one program. Test it with this input: convert 375 SAR, then 100 km, then 40 C, then type a wrong choice (7), then exit (0).',
          steps: [
            { en: 'Put printMenu and the three tested conversion methods in the class. Their bodies do not change.' },
            { en: 'In main, create the Scanner and declare <code>choice</code> before the loop.', code: J`
Scanner input = new Scanner(System.in);
int choice;` },
            { en: 'Write the do-while with the menu, the reading of the choice, and the switch. Cases 2 and 3 are copies of case 1 with their own method and their own text.', code: J`
case 2:
    value = input.nextDouble();
    System.out.printf("%.2f km = %.2f miles%n", value, kmToMiles(value));
    break;` },
            { en: 'Add <code>case 0</code> (Goodbye) and <code>default</code> (unknown choice).' },
            { en: 'Trace the input <code>1 375 2 100 3 40 7 0</code>: five rounds, so the menu is printed five times. The last round prints Goodbye, and 0 != 0 is false, so the loop ends.' }
          ],
          code: J`
import java.util.Scanner;

public class Main {
    public static void printMenu() {
        System.out.println("Menu: 1=SAR to USD, 2=km to miles, 3=C to F, 0=Exit");
    }

    public static double riyalsToDollars(double sar) {
        return sar / 3.75;
    }

    public static double kmToMiles(double km) {
        return km * 0.621371;
    }

    public static double toFahrenheit(double c) {
        return c * 9 / 5 + 32;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int choice;
        do {
            printMenu();
            choice = input.nextInt();
            double value;
            switch (choice) {
                case 1:
                    value = input.nextDouble();
                    System.out.printf("%.2f SAR = %.2f USD%n", value, riyalsToDollars(value));
                    break;
                case 2:
                    value = input.nextDouble();
                    System.out.printf("%.2f km = %.2f miles%n", value, kmToMiles(value));
                    break;
                case 3:
                    value = input.nextDouble();
                    System.out.printf("%.1f C = %.1f F%n", value, toFahrenheit(value));
                    break;
                case 0:
                    System.out.println("Goodbye!");
                    break;
                default:
                    System.out.println("Unknown choice: " + choice);
            }
        } while (choice != 0);
    }
}`, stdin: '1 375 2 100 3 40 7 0', out: "Menu: 1=SAR to USD, 2=km to miles, 3=C to F, 0=Exit\n375.00 SAR = 100.00 USD\nMenu: 1=SAR to USD, 2=km to miles, 3=C to F, 0=Exit\n100.00 km = 62.14 miles\nMenu: 1=SAR to USD, 2=km to miles, 3=C to F, 0=Exit\n40.0 C = 104.0 F\nMenu: 1=SAR to USD, 2=km to miles, 3=C to F, 0=Exit\nUnknown choice: 7\nMenu: 1=SAR to USD, 2=km to miles, 3=C to F, 0=Exit\nGoodbye!", ar: 'جمعنا القطع المختبرة في برنامج واحد: قائمة، ودوال تحويل، وحلقة مع switch.' },
        { type: 'check', q: 'What does the converter print if the very first choice is 0?', options: ['Nothing at all', 'The menu once, then Goodbye!', 'Goodbye! many times', 'An error'], answer: 1, explain: 'A do-while runs its body at least once: the menu is printed, 0 is read, case 0 prints Goodbye!, and 0 != 0 is false, so the loop ends.' },
        { type: 'note', kind: 'tip', en: 'In a real program you would print a prompt such as <code>Your choice: </code> before each <code>nextInt()</code>. We leave the prompts out here, so the output is short and easy to check.' },
        { type: 'h', en: 'The same pattern: a calculator' },
        { type: 'p', en: 'Change the methods and the menu text, and the same program becomes a calculator: 1 = add, 2 = subtract, 3 = multiply, 4 = divide. Each operation is a method that takes two numbers and returns the answer. One extra rule: before calling <code>divide(a, b)</code>, check that b is not 0, and print a message instead. The loop, the switch and the break stay exactly the same. Once you know this pattern, you can build many small apps: a grade calculator, a cafe order screen, a quiz game.', ar: 'النمط نفسه يصنع آلة حاسبة: قائمة، ودالة لكل عملية، وحلقة مع switch.' }
      ],
      mistakes: [
        { title: 'Forgetting break', en: 'Without <code>break</code> the next case also runs.', code: J`
case 1:
    System.out.println(riyalsToDollars(value));
    // missing break: case 2 runs too!
case 2:
    System.out.println(kmToMiles(value));
    break;`, ar: 'لا تنسَ{{g:|ي}} break في نهاية كل case.' },
        { title: 'Declaring choice inside the loop', en: 'If <code>int choice</code> is declared inside the braces, the condition <code>while (choice != 0)</code> cannot see it: <i>cannot find symbol</i>. Declare it before <code>do</code>.' },
        { title: 'Doing every calculation inside the switch', en: 'If all formulas live inside main\'s switch, main becomes very long and nothing can be tested alone. Keep one method per job; the switch only calls them.' },
        { title: 'Not reading the choice again', en: 'If the choice is read once before a <code>while</code> loop and never again inside it, the loop never ends. In each round, read a new choice.' }
      ],
      remember: [
        'A menu-driven program repeats: show the menu, read a choice, do the job, until the user exits.',
        'One method per job: <code>printMenu</code> (void) and one returning method per conversion.',
        'Test the small methods first, then build the loop.',
        '<code>do-while</code> shows the menu at least once; declare <code>choice</code> before the loop.',
        'Every <code>case</code> ends with <code>break</code>; <code>default</code> handles wrong choices.'
      ],
      rememberAr: 'البرنامج ذو القائمة يكرر: اعرض القائمة، اقرأ الاختيار، نفّذ، حتى الخروج. لكل عمل دالة. نختبر الدوال أولاً. نستخدم do-while ونعرّف choice قبلها. كل case ينتهي بـ break.',
      practice: [
        { t: 'mcq', q: 'Which loop is the best fit for a menu that must be shown <b>at least once</b>?', options: ['<code>for</code>', '<code>do-while</code>', 'No loop is needed', 'A loop inside every method'], answer: 1, explain: 'A do-while checks its condition at the end, so the body (show the menu, read a choice) always runs at least once.', qAr: 'أي حلقة تعرض القائمة مرة واحدة على الأقل؟' },
        { t: 'output', q: 'What is the output? (Here the "choices" come from a counter instead of the keyboard.)', code: J`
public class Main {
    public static int square(int n) {
        return n * n;
    }

    public static int cube(int n) {
        return n * n * n;
    }

    public static void main(String[] args) {
        int choice = 1;
        while (choice <= 3) {
            switch (choice) {
                case 1:
                    System.out.println("square: " + square(3));
                    break;
                case 2:
                    System.out.println("cube: " + cube(2));
                    break;
                default:
                    System.out.println("exit");
            }
            choice++;
        }
    }
}`, answer: "square: 9\ncube: 8\nexit", explain: 'choice is 1, then 2, then 3. Case 1 calls square(3) = 9, case 2 calls cube(2) = 8, and 3 goes to default.' },
        { t: 'fill', q: 'Complete the switch: choice 1 must print only the miles, and choice 2 must use the Celsius method.', code: J`
switch (choice) {
    case 1:
        System.out.println(kmToMiles(value));
        ___;
    case 2:
        System.out.println(___(value));
        break;
}`, answers: ['break', 'toFahrenheit'], explain: 'break stops case 1 from falling into case 2. Case 2 calls the Celsius-to-Fahrenheit method.' },
        { t: 'order', q: 'Put the lines of the menu loop in order.', lines: [
          'int choice;',
          'do {',
          '    printMenu();',
          '    choice = input.nextInt();',
          '    if (choice == 1) {',
          '        System.out.println(riyalsToDollars(input.nextDouble()));',
          '    }',
          '} while (choice != 0);'
        ], explain: 'choice is declared before the loop. Each round shows the menu, reads the choice and does the job. The condition at the end decides if another round starts.' },
        { t: 'bug', q: 'With choice 1 the program should print only <code>20.0</code>. It also prints <code>km to miles</code>. Tap the line after which something is missing.', qAr: 'البرنامج يطبع سطراً زائداً. أين الخطأ؟',
          code: J`
public class Main {
    public static double toDollars(double sar) {
        return sar / 3.75;
    }
    public static void main(String[] args) {
        int choice = 1;
        switch (choice) {
            case 1:
                System.out.println(toDollars(75));
            case 2:
                System.out.println("km to miles");
                break;
        }
    }
}`, bug: [9, 10],
          fix: J`
public class Main {
    public static double toDollars(double sar) {
        return sar / 3.75;
    }
    public static void main(String[] args) {
        int choice = 1;
        switch (choice) {
            case 1:
                System.out.println(toDollars(75));
                break;
            case 2:
                System.out.println("km to miles");
                break;
        }
    }
}`, hint: 'How does a case end?', explain: 'Case 1 has no <code>break</code>, so after printing 20.0 Java falls through into case 2 and prints its line too. Add <code>break;</code> after line 9.', explainAr: 'ينقص break بعد السطر 9.' },
        { t: 'code', q: 'A small calculator. Write <code>public static int add(int a, int b)</code> and <code>public static int multiply(int a, int b)</code>. In main, repeat: read a choice; 1 = read two ints and print <code>Sum: x</code>; 2 = read two ints and print <code>Product: x</code>; 0 = print <code>Bye</code> and stop; any other choice prints <code>Unknown</code>. Do not print a menu or prompts.<br>Example: input <code>1 3 4 2 5 6 0</code> prints <code>Sum: 7</code>, <code>Product: 30</code>, <code>Bye</code>', qAr: 'آلة حاسبة صغيرة بقائمة: دالة لكل عملية وحلقة مع switch.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write add and multiply here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // the menu loop
    }
}`,
          tests: [ { stdin: '1 3 4 2 5 6 0', expected: "Sum: 7\nProduct: 30\nBye" }, { stdin: '9 0', expected: "Unknown\nBye" }, { stdin: '0', expected: 'Bye' } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static int add(int a, int b) {
        return a + b;
    }

    public static int multiply(int a, int b) {
        return a * b;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int choice;
        do {
            choice = input.nextInt();
            switch (choice) {
                case 1:
                    System.out.println("Sum: " + add(input.nextInt(), input.nextInt()));
                    break;
                case 2:
                    System.out.println("Product: " + multiply(input.nextInt(), input.nextInt()));
                    break;
                case 0:
                    System.out.println("Bye");
                    break;
                default:
                    System.out.println("Unknown");
            }
        } while (choice != 0);
    }
}`, hint: 'Declare int choice before do. Use a switch with case 1, case 2, case 0 and default, each with break.', explain: 'The same menu pattern as the converter: a loop, a switch, and one small method per job.' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'What is a method?', options: ['A variable that stores a number', 'A named group of statements that does one job', 'A kind of loop', 'A comment'], answer: 1, explain: 'A method is a named group of statements; you call it by name.' },
    { t: 'mcq', q: 'What is the return type of a method that does not return a value?',
      options: ['<code>null</code>', '<code>int</code>', '<code>void</code>', 'No return type is written'], answer: 2,
      explain: 'The keyword void means the method returns nothing.' },
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int f(int x) {
        return x * 2 + 1;
    }

    public static void main(String[] args) {
        System.out.println(f(f(3)));
    }
}`, answer: '15', explain: 'The inner call f(3) returns 7, then f(7) returns 15.' },
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void reset(int n) {
        n = 0;
    }

    public static void main(String[] args) {
        int count = 9;
        reset(count);
        System.out.println(count);
    }
}`, answer: '9', explain: 'Pass-by-value: reset changes only its copy n.' },
    { t: 'mcq', q: 'A method signature consists of:',
      options: ['the return type and the method name', 'the method name and the parameter list', 'the modifiers and the return type', 'the whole method body'], answer: 1,
      explain: 'The signature is the name plus the parameter list. The return type is not part of it, which is why it cannot be used alone for overloading.' },
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int add(int a, int b) {
        return a + b;
    }

    public static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(2, 3));
        System.out.println(add(2.5, 3));
    }
}`, answer: "5\n5.5", explain: 'add(2, 3) matches the int version. add(2.5, 3) needs the double version; 3 is widened to 3.0.' },
    { t: 'mcq', q: 'Where can a local variable be used?',
      options: ['Anywhere in the class', 'In any method that is called after it is declared', 'From its declaration to the end of the block that contains it', 'Only on the line where it is declared'], answer: 2,
      explain: 'This is the definition of the scope of a local variable.' },
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int reverseNumber(int n) {
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n = n / 10;
        }
        return rev;
    }

    public static void main(String[] args) {
        int x = 1230;
        int r = reverseNumber(x);
        System.out.println(r + " " + x);
        System.out.println(reverseNumber(r));
    }
}`, answer: "321 1230\n123", explain: 'The digits of 1230 from the right are 0, 3, 2, 1, so rev becomes 0, 3, 32, 321. x is not changed (pass-by-value). Reversing 321 gives 123: the zero is lost, because an int cannot start with 0.' },
    { t: 'mcq', q: 'What is wrong with this method?', code: J`
public static String level(int score) {
    if (score >= 50) {
        return "Pass";
    }
    if (score < 50) {
        return "Fail";
    }
}`, options: ['Nothing, it compiles', 'Compile error: missing return statement', 'It always returns "Pass"', 'A String method cannot use if'], answer: 1,
      explain: 'The compiler does not reason that the two conditions cover all cases. It sees a path that reaches the end without return. Use else instead of the second if.' },
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static boolean isVowel(char c) {
        c = Character.toLowerCase(c);
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }

    public static void main(String[] args) {
        String w = "Education";
        int count = 0;
        for (int i = 0; i < w.length(); i++) {
            if (isVowel(w.charAt(i))) {
                count++;
            }
        }
        System.out.println(count);
    }
}`, answer: '5', explain: 'The vowels are E, u, a, i, o. toLowerCase makes the uppercase E count as well.' },
    { t: 'mcq', q: 'Given <code>public static double avg(int a, int b)</code>, which statement does <b>not</b> compile?',
      options: ['<code>avg(3, 4);</code>', '<code>double r = avg(10, 20);</code>', '<code>System.out.println(avg(1, 2) + 1);</code>', '<code>int r = avg(3, 4);</code>'], answer: 3,
      explain: 'avg returns a double, which cannot be assigned to an int without a cast. Ignoring a returned value (the first option) is allowed.' },
    { t: 'bug', q: 'The program should print <code>Final mark: 75</code>, but it prints <code>Final mark: 70</code>. Tap a line that must change.', qAr: 'العلامة لم تتغير. أي سطر يجب تغييره؟',
      code: J`
public class Main {
    public static void addBonus(int mark) {
        mark = mark + 5;
    }

    public static void main(String[] args) {
        int mark = 70;
        addBonus(mark);
        System.out.println("Final mark: " + mark);
    }
}`, bug: [2, 3, 8],
      fix: J`
public class Main {
    public static int addBonus(int mark) {
        return mark + 5;
    }

    public static void main(String[] args) {
        int mark = 70;
        mark = addBonus(mark);
        System.out.println("Final mark: " + mark);
    }
}`, hint: 'The parameter has the same name as main\'s variable. Is it the same box?', explain: 'The parameter mark is a copy, even though it has the same name as main\'s mark. Line 3 changes only the copy, which disappears when the method ends. The method must <b>return</b> the new mark (lines 2 and 3), and main must <b>store</b> it (line 8).', explainAr: 'المعامل نسخة. يجب أن ترجع الدالة القيمة وأن يخزنها main.' }
  ],
  lab: {
    t: 'code',
    q: 'Mini project: <b>Number analyzer</b>. Write three methods:<br>1. <code>countDigits(int n)</code> returns how many digits n has.<br>2. <code>sumDigits(int n)</code> returns the sum of the digits.<br>3. <code>isPrime(int n)</code> returns true if n is prime (1 is not prime).<br>In main, read positive integers until you read <code>0</code>. For each number print one line exactly like:<br><code>12: digits=2, sum=3, prime=no</code><br>Do not print any prompts. Tip: write and test one method at a time.',
    qAr: 'اكتب ثلاث دوال لعد الأرقام وجمعها واختبار العدد الأولي، ثم حلل الأعداد حتى الصفر.',
    starter: J`
import java.util.Scanner;

public class Main {
    // write countDigits, sumDigits and isPrime here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // your code here
    }
}`,
    tests: [
      { stdin: '7 12 101 0', expected: "7: digits=1, sum=7, prime=yes\n12: digits=2, sum=3, prime=no\n101: digits=3, sum=2, prime=yes" },
      { stdin: '1 49 0', expected: "1: digits=1, sum=1, prime=no\n49: digits=2, sum=13, prime=no" }
    ],
    solution: J`
import java.util.Scanner;

public class Main {
    public static int countDigits(int n) {
        int count = 0;
        do {
            count++;
            n /= 10;
        } while (n > 0);
        return count;
    }

    public static int sumDigits(int n) {
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }

    public static boolean isPrime(int n) {
        if (n < 2) {
            return false;
        }
        for (int d = 2; d * d <= n; d++) {
            if (n % d == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        while (n != 0) {
            String prime;
            if (isPrime(n)) {
                prime = "yes";
            } else {
                prime = "no";
            }
            System.out.println(n + ": digits=" + countDigits(n) + ", sum=" + sumDigits(n) + ", prime=" + prime);
            n = input.nextInt();
        }
    }
}`,
    hint: 'Write and test each method separately. In isPrime, return false as soon as a divisor is found.',
    explain: 'main only handles input and output; each calculation lives in its own method. A return inside a loop ends the method immediately.'
  },
  cheats: [
    { code: J`public static void name(int p) { ... }`, note: 'void method: performs an action, returns nothing' },
    { code: J`name(5);`, note: 'Call a method: name plus parentheses' },
    { code: J`public static double avg(int a, int b) { return (a + b) / 2.0; }`, note: 'Value-returning method: must return on every path' },
    { code: J`double r = avg(3, 4);`, note: 'Use the returned value: store, print or compute with it' },
    { code: J`printGrade("Reem", 93.5);`, note: 'Arguments match parameters by number, order and type' },
    { code: J`static void inc(int n) { n++; }`, note: 'Pass-by-value: the caller\'s variable is not changed' },
    { code: J`int area(int s)   int area(int w, int h)`, note: 'Overloading: same name, different parameter lists' },
    { code: J`{ int y = 2; }  // y is gone after }`, note: 'Scope: from declaration to the end of its block' },
    { code: J`main -> readData() -> compute() -> printReport()`, note: 'Stepwise refinement: one small method per task' },
    { code: J`steps = addSteps(steps, 2000);`, note: 'To change a variable with a method: return the new value and store it' },
    { code: J`for (int i = 0; i < s.length(); i++) { char c = s.charAt(i); ... }`, note: 'Text method: visit every character of a String' },
    { code: J`word = word.toUpperCase();`, note: 'Strings never change: store or return the new String' },
    { code: J`rev = rev * 10 + n % 10;  n = n / 10;`, note: 'Number tools: n % 10 is the last digit, n / 10 removes it' },
    { code: J`if (n % d == 0) { return false; }  ...  return true;`, note: 'isPrime: return false inside the loop, return true after it' },
    { code: J`check("isPass(50)", isPass(50), true);`, note: 'A test: a call and its expected result; print PASS or FAIL' },
    { code: J`/** What it does. @param km distance in km @return distance in miles */`, note: 'Javadoc comment above a method' },
    { code: J`do { printMenu(); choice = input.nextInt(); switch (choice) { ... } } while (choice != 0);`, note: 'Menu-driven program: repeat until the user chooses 0' }
  ],
  glossary: [
    { term: 'Method', ar: 'دالة / طريقة', def: 'A named block of statements that performs a task and may return a value.' },
    { term: 'Define a method', ar: 'تعريف الدالة', def: 'Writing the header and body of a method (like writing a recipe).' },
    { term: 'Call a method', ar: 'استدعاء الدالة', def: 'Using a method by its name so that its statements run.' },
    { term: 'Method header', ar: 'رأس الدالة', def: 'The first line of a method definition: modifiers, return type, name and parameter list.' },
    { term: 'Method signature', ar: 'توقيع الدالة', def: 'The method name together with its parameter list.' },
    { term: 'void method', ar: 'دالة لا ترجع قيمة', def: 'A method whose return type is void; it performs an action but returns no value.' },
    { term: 'Return value', ar: 'القيمة المرجعة', def: 'The value a method sends back to its caller using a return statement.' },
    { term: 'Parameter', ar: 'معامل', def: 'A variable declared in a method header that receives a value when the method is called.' },
    { term: 'Argument', ar: 'وسيط', def: 'A value passed to a method in a call.' },
    { term: 'Pass-by-value', ar: 'التمرير بالقيمة', def: 'Passing a copy of the argument value to the parameter, so the caller\'s variable is not changed.' },
    { term: 'Method overloading', ar: 'التحميل الزائد للدوال', def: 'Defining methods with the same name but different parameter lists in the same class.' },
    { term: 'Local variable', ar: 'متغير محلي', def: 'A variable declared inside a method; it exists only while that method runs.' },
    { term: 'Scope', ar: 'النطاق', def: 'The part of a program where a variable can be used.' },
    { term: 'Call stack', ar: 'مكدس الاستدعاءات', def: 'A pile that keeps track of the running methods; the top one is running now.' },
    { term: 'Stub', ar: 'دالة مؤقتة', def: 'A method with a simple temporary body (such as return 0;) used so the program compiles while you build the rest.' },
    { term: 'Stepwise refinement', ar: 'التحسين التدريجي', def: 'A design approach that breaks a problem into smaller subproblems until each is easy to implement.' },
    { term: 'Method body', ar: 'جسم الدالة', def: 'The statements between the braces of a method: what the method really does.' },
    { term: 'Caller', ar: 'المستدعي', def: 'The method that makes a call. When the called method finishes, Java goes back to its caller.' },
    { term: 'Frame (stack frame)', ar: 'إطار الاستدعاء', def: 'The part of the call stack that holds the parameters and local variables of one running method. It is removed when the method ends.' },
    { term: 'Helper method', ar: 'دالة مساعدة', def: 'A small method that does one part of the job for another method, such as isVowel for countVowels.' },
    { term: 'Palindrome', ar: 'كلمة أو عدد متناظر', def: 'A word or number that reads the same from both ends, such as "level" or 121.' },
    { term: 'Prime number', ar: 'عدد أولي', def: 'A whole number greater than 1 whose only divisors are 1 and itself.' },
    { term: 'Greatest common divisor (GCD)', ar: 'القاسم المشترك الأكبر', def: 'The biggest whole number that divides two numbers with no remainder.' },
    { term: 'Test case', ar: 'حالة اختبار', def: 'A call with a chosen input together with the result you expect.' },
    { term: 'Expected result', ar: 'النتيجة المتوقعة', def: 'The correct answer for a test, worked out by hand or from the rule, not by the method being tested.' },
    { term: 'Boundary value', ar: 'قيمة حدّية', def: 'An input at the exact point where the answer changes, such as 49 and 50 for "50 or more passes".' },
    { term: 'Javadoc comment', ar: 'تعليق Javadoc', def: 'A comment that starts with /** and describes a method, using @param for each parameter and @return for the result.' },
    { term: 'Top-down design', ar: 'التصميم من الأعلى إلى الأسفل', def: 'Writing main first as a plan of method calls, then writing each method (often starting with stubs).' },
    { term: 'Menu-driven program', ar: 'برنامج يعمل بقائمة', def: 'A program that shows a menu, does the chosen job, and repeats until the user chooses to exit.' }
  ]
});
