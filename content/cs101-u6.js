JP.unit({
  course: 'cs101',
  n: 6,
  title: 'Methods',
  titleAr: 'الدوال (الطرق)',
  intro: "Until now, all your code lived in main. When a program grows, main becomes long and you copy and paste the same lines again and again. A method is a small named piece of code that does one job. You write it once and use it as often as you like. In this unit you will write and call methods step by step, give them inputs (parameters), get answers back (return values), and learn how to plan a bigger program in small pieces.",
  introAr: 'حتى الآن كان كل الكود داخل main. عندما يكبر البرنامج نكرر الأسطر نفسها كثيراً. الدالة قطعة صغيرة لها اسم تؤدي عملاً واحداً، نكتبها مرة واحدة ونستخدمها متى شئنا. ستتعلم كتابة الدوال واستدعاءها، وإعطاءها مدخلات (معاملات)، واسترجاع نتيجة منها، وتقسيم البرنامج الكبير إلى أجزاء صغيرة.',
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
        { type: 'analogy', title: 'A vending machine', en: 'You press one button, for example "Water", and the machine does many steps for you. You do not need to know how it works inside. A method is the same: one name (the button) hides several steps (the machine inside). Pressing the button is called <b>calling</b> the method.', ar: 'الدالة مثل آلة البيع: تضغط زراً واحداً فتنفذ الآلة عدة خطوات. الضغط على الزر يسمى استدعاء.' },
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
}`, out: "=== Riyadh Cafe ===\nLatte 14 SAR\nCake 12 SAR\nThank you!", ar: 'قسمنا العمل إلى دالتين صغيرتين، وصار main سهل القراءة.' }
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
        'Call it with its name and parentheses: <code>name();</code>',
        'The program always starts at <code>main</code>.'
      ],
      rememberAr: 'الدالة لها اسم وتؤدي عملاً واحداً. نعرّفها مرة ونستدعيها كثيراً. نستدعيها بالاسم مع أقواس. البرنامج يبدأ دائماً من main.',
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
}`, hint: 'The header is public static void printStars(). Call it with printStars();', explain: 'One definition, three calls.' }
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
}`, out: "Wake up\nCoffee\nGo to class\nDone", ar: 'الترتيب: Wake up ثم Coffee ثم Go to class ثم Done.' }
      ],
      mistakes: [
        { title: 'Reading the file from top to bottom', en: 'Do not read methods in the order they are written. Start at main and follow the calls.' },
        { title: 'Forgetting to return to the caller', en: 'After a called method finishes, the caller continues on the line after the call. Students often forget the lines that come after the call.', code: J`
a();
System.out.print("X");   // runs after a() is completely finished` },
        { title: 'Thinking a call replaces the rest of the method', en: 'Calling another method does not stop the first method forever. It only pauses it.' }
      ],
      remember: [
        'A method can call another method.',
        'The caller <b>waits</b> until the called method finishes.',
        'The <b>call stack</b> is a pile of running methods. The top one is running now.',
        'When a method finishes, it is removed and we continue after the call.',
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
}`, hint: 'stepTwo prints 2 first, then calls stepOne.', explain: 'stepTwo prints 2, calls stepOne (prints 1), then main calls stepOne again (prints 1).' }
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
        { type: 'table', head: ['Word', 'Where', 'Example'], rows: [
          ['Parameter', 'in the method header (definition)', '<code>String name</code>'],
          ['Argument', 'in the call', '<code>"Lama"</code>']
        ] },
        { type: 'check', q: 'In the call <code>welcome("Lama");</code>, what is <code>"Lama"</code>?', options: ['A parameter', 'An argument', 'A method', 'A return type'], answer: 1, explain: 'The value you give in the call is an argument.', ar: 'القيمة في الاستدعاء = وسيط.' },
        { type: 'h', en: 'Two parameters' },
        { type: 'p', en: 'A method can have several parameters. Separate them with commas. Each one needs its own type.' },
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
}`, out: "Reem: 93.5\nFahad: 78.0", ar: 'الدالة تستقبل اسماً وعلامة وتطبعهما في سطر واحد.' }
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
}`, hint: 'The method has one loop for the columns. main has a loop that calls the method once per row.', explain: 'Moving the inner loop into a method makes main short and the row code reusable.' }
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
        { type: 'note', kind: 'warn', en: 'A method cannot change the caller\'s <code>int</code>, <code>double</code> or <code>char</code> variables. Do not expect it to.' },
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
}`, out: "With bonus: 75\nOriginal: 70", ar: 'العلامة الأصلية بقيت 70 لأن الدالة غيّرت النسخة فقط.' }
      ],
      mistakes: [
        { title: 'Expecting the caller\'s variable to change', en: 'After calling a void method that changes its parameter, the original variable has the same value as before.', code: J`
reset(count);        // reset does n = 0;
// count is still the old value` },
        { title: 'Thinking the same name means the same box', en: 'A parameter named <code>a</code> and a variable named <code>a</code> in main are different variables.' },
        { title: 'Trying to swap with a void method', en: 'A void method with two int parameters cannot swap the caller\'s two variables.' }
      ],
      remember: [
        'Java passes <b>a copy of the value</b> to the parameter: pass-by-value.',
        'Changing the parameter does not change the caller\'s variable.',
        'A parameter and a variable with the same name are different boxes.',
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
}`, hint: 'Call showDouble(number); then print number.', explain: 'The method doubles its copy; the original stays the same.' }
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
        { type: 'note', kind: 'warn', en: 'If you call a value-returning method and do not use the result, the answer is thrown away. Write <code>int a = square(5);</code> or print it. Just writing <code>square(5);</code> compiles but does nothing useful.', ar: 'إذا لم تخزّن النتيجة أو تطبعها فستضيع.' },
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
}`, stdin: '3', out: 'Cost: 360 SAR', ar: 'الدالة تحسب وترجع فقط، وmain هو الذي يطبع.' }
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
}`, hint: 'The method only returns. main prints the text and the call.', explain: 'The call totalPrice(price, quantity) becomes a number that we join into the text.' }
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
}`, stdin: '123', out: "Sum of digits: 6\nDivisible by 3: true\nNumber: 123", ar: 'دالة تستخدم دالة أخرى، والرقم الأصلي لم يتغير.' }
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
}`, hint: 'return age >= 18; then use the call as the condition of an if.', explain: 'The boolean method keeps the rule in one place; main only decides what to print.' }
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
}`, out: "16\n15\n3.14", ar: 'ثلاث دوال باسم area، وتختار جافا المناسبة.' }
      ],
      mistakes: [
        { title: 'Same parameters, different return type', en: 'This is not overloading. The compiler reports a duplicate method.', code: J`
static int f(int x) { return x; }
static double f(int x) { return x; }   // error` },
        { title: 'Same parameter types with different names', en: 'Only the types and their order matter, not the names. <code>f(int a)</code> and <code>f(int b)</code> are the same signature.' },
        { title: 'Expecting a call that matches nothing to work', en: 'If no version fits the arguments (for example <code>area("x")</code>), you get a compile error.' }
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
}`, hint: 'Two methods with the same name add but different parameter lists.', explain: 'Java picks the version by the number of arguments.' }
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
}`, out: '6', ar: 'نعرّف total قبل الحلقة لأننا نحتاجه بعدها.' }
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
        'Need a value after a loop? Declare it before the loop.'
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
}`, hint: 'while (n > 0) { print n; n--; }', explain: 'countdown changes its own copy of n. main\'s n is still the value that was read.' }
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
}`, stdin: '12 18', out: "GCD: 6\nLCM: 36", ar: 'lcm تستخدم gcd، ولا نكرر الكود.' }
      ],
      mistakes: [
        { title: 'One giant main', en: 'Putting everything in main makes it long and hard to test.' },
        { title: 'A method that does too many things', en: 'A method that reads, calculates and prints cannot be reused. Split it.' },
        { title: 'Writing all methods before testing any', en: 'Write and test one small method at a time, or use stubs.' }
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
}`, hint: 'Euclid: while b is not 0, replace (a, b) with (b, a % b). Then a is the GCD.', explain: 'gcd changes only its own copies, so main can still pass the original values to lcm. lcm reuses gcd.' }
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
}`, answer: "3 2 1 Go!\n3", explain: 'countdown decreases its own copy of n. The n in main is still 3.' },
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
      explain: 'avg returns a double, which cannot be assigned to an int without a cast. Ignoring a returned value (the first option) is allowed.' }
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
    { code: J`main -> readData() -> compute() -> printReport()`, note: 'Stepwise refinement: one small method per task' }
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
    { term: 'Stepwise refinement', ar: 'التحسين التدريجي', def: 'A design approach that breaks a problem into smaller subproblems until each is easy to implement.' }
  ]
});
