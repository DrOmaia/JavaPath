JP.unit({
  course: 'cs101',
  n: 1,
  title: 'Introduction to Computers, Programming and Java',
  titleAr: 'مقدمة في الحاسب والبرمجة ولغة جافا',
  intro: 'Before writing code you need a clear picture of what a computer does with it. This unit explains hardware, software and programming languages, shows how Java source code becomes bytecode that runs on the Java Virtual Machine, and walks through the parts of a Java program. You will print output, write comments, recognise the three kinds of errors, use NetBeans to run and debug programs, and plan solutions with pseudocode and flowcharts.',
  introAr: 'قبل كتابة الشيفرة تحتاج إلى فهم ما يفعله الحاسب بها. تشرح هذه الوحدة المكونات المادية والبرمجيات ولغات البرمجة، وكيف تتحول شيفرة جافا إلى bytecode يعمل على آلة جافا الافتراضية، ثم بنية برنامج جافا والطباعة والتعليقات وأنواع الأخطاء واستخدام NetBeans والتخطيط بالخوارزميات والمخططات الانسيابية.',
  lessons: [
    {
      title: 'Computers, programs and the Java platform',
      titleAr: 'الحاسب والبرامج ومنصة جافا',
      minutes: 45,
      body: [
        { type: 'h', en: 'What is a computer?' },
        { type: 'p', en: 'A computer is an electronic device that stores and processes data by following instructions. It has two sides: <b>hardware</b> (the physical parts you can touch) and <b>software</b> (the programs that tell the hardware what to do).',
          ar: 'الحاسب = مكونات مادية (Hardware) + برمجيات (Software) تخبرها بما تفعل.' },
        { type: 'list', items: [
          '<b>CPU</b> (Central Processing Unit): the brain; it fetches and executes instructions one after another.',
          '<b>Main memory (RAM)</b>: fast, temporary storage for the program and data currently in use. Its contents are lost when the power is off.',
          '<b>Storage devices</b> (SSD, hard disk, USB drive): keep programs and files permanently.',
          '<b>Input devices</b> (keyboard, mouse, microphone) and <b>output devices</b> (screen, printer, speakers).',
          '<b>Communication devices</b> (Wi-Fi card, network adapter) connect computers together.'
        ] },
        { type: 'h', en: 'Programs and programming languages' },
        { type: 'p', en: 'A <b>program</b> is a sequence of instructions that tells the computer how to perform a task, such as calculating a GPA or showing a web page. Programs are written in a <b>programming language</b>. The CPU itself only understands <b>machine language</b>: binary codes made of 0s and 1s.' },
        { type: 'table', head: ['Level', 'Example', 'Notes'], rows: [
          ['Machine language', '<code>1101101010011010</code>', 'Binary; the only language the CPU runs directly. Very hard for people.'],
          ['Assembly language', '<code>add 2, 3, result</code>', 'Short words (mnemonics); translated by an <i>assembler</i>. Still tied to one CPU type.'],
          ['High-level language', '<code>area = 5 * 5 * 3.14159;</code>', 'English-like and portable: Java, Python, C++, C#.']
        ] },
        { type: 'p', en: 'Code written in a high-level language is called <b>source code</b>. It must be translated before the CPU can use it. A <b>compiler</b> translates the whole program at once into another language; an <b>interpreter</b> reads and executes the program one statement at a time.',
          ar: 'المترجم (Compiler) يترجم البرنامج كاملاً، أما المفسر (Interpreter) فينفذ جملة بجملة.' },
        { type: 'h', en: 'How Java runs: compiler, bytecode and the JVM' },
        { type: 'p', en: 'Java uses both ideas. You write source code in a file ending with <code>.java</code>. The Java compiler <code>javac</code> translates it into <b>bytecode</b>, stored in a <code>.class</code> file. Bytecode is not machine code for any real CPU; it is code for the <b>Java Virtual Machine (JVM)</b>. The JVM, started with the <code>java</code> command, interprets the bytecode on your computer. Because every operating system has its own JVM, the same <code>.class</code> file runs on Windows, macOS and Linux: <i>write once, run anywhere</i>.',
          ar: 'ملف .java ← يترجمه javac ← ملف .class (bytecode) ← تنفذه آلة جافا الافتراضية JVM على أي نظام تشغيل.' },
        { type: 'code', code: J`
javac Main.java     (compile: creates Main.class)
java Main           (run: the JVM executes Main.class)
` },
        { type: 'p', en: 'Here is a complete Java program. Press Run: behind the scenes it is compiled to bytecode and executed by a JVM.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Source code: Main.java");
        System.out.println("Bytecode: Main.class");
        System.out.println("Runs on: any JVM");
    }
}
`, out: J`
Source code: Main.java
Bytecode: Main.class
Runs on: any JVM
` },
        { type: 'list', items: [
          '<b>JDK</b> (Java Development Kit): what programmers install. It contains the compiler <code>javac</code>, the JVM and the standard library.',
          '<b>JRE</b> (Java Runtime Environment): the JVM plus the library; enough to <i>run</i> programs but not to compile them.',
          '<b>IDE</b> (Integrated Development Environment) such as NetBeans: an editor that calls the JDK for you to compile, run and debug.'
        ] },
        { type: 'note', kind: 'exam', en: 'Know the chain: <code>.java</code> (source) is compiled by <code>javac</code> into <code>.class</code> (bytecode), which is run by the JVM. Bytecode is <b>not</b> machine code, and the JVM does <b>not</b> read <code>.java</code> files.',
          ar: 'سؤال شائع: الـ bytecode ليس لغة آلة، وآلة JVM لا تقرأ ملف .java مباشرة.' }
      ],
      practice: [
        { t: 'mcq', q: 'Which tool translates Java source code into bytecode?',
          options: ['<code>javac</code> (the Java compiler)', 'The JVM', 'The CPU', 'The operating system'], answer: 0,
          explain: '<code>javac</code> is the compiler. It reads <code>Main.java</code> and produces <code>Main.class</code>, which contains bytecode. The JVM then runs that bytecode.' },
        { t: 'mcq', q: 'What is stored in a file named <code>Grades.class</code>?',
          options: ['Java source code', 'Bytecode', 'Machine code for an Intel CPU', 'A text document'], answer: 1,
          explain: 'A <code>.class</code> file holds bytecode produced by the compiler. Source code lives in <code>.java</code> files.' },
        { t: 'mcq', q: 'Why can the same Java <code>.class</code> file run on Windows and on macOS?',
          options: ['Because Java is an assembly language', 'Because each operating system has its own JVM that understands bytecode', 'Because the CPU reads Java source directly', 'Because the compiler produces a separate file for every system'], answer: 1,
          explain: 'Bytecode targets the JVM, not a real CPU. Every platform has a JVM, so one <code>.class</code> file runs everywhere.' },
        { t: 'order', q: 'Put the steps of running a Java program in the correct order.',
          lines: ['Write the source code in Main.java', 'Compile it with javac', 'The compiler produces Main.class (bytecode)', 'The JVM loads and executes Main.class', 'The output appears on the screen'],
          explain: 'Source, then compile, then bytecode, then the JVM runs it and produces output.' },
        { t: 'mcq', q: 'Which part of a computer loses its contents when the power is turned off?',
          options: ['Hard disk', 'USB flash drive', 'Main memory (RAM)', 'SSD'], answer: 2,
          explain: 'RAM is volatile: it only holds data while powered. Storage devices keep data permanently.' },
        { t: 'output', q: 'What does this program print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Write once,");
        System.out.println("run anywhere!");
    }
}
`, answer: J`
Write once,
run anywhere!
`, explain: 'Each <code>println</code> prints its text and then moves to a new line, so there are two lines.' }
      ]
    },
    {
      title: 'Anatomy of a Java program: output and comments',
      titleAr: 'بنية برنامج جافا: الطباعة والتعليقات',
      minutes: 50,
      body: [
        { type: 'h', en: 'A first program, piece by piece' },
        { type: 'code', run: true, code: J`
// My first Java program
public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to CS101!");
        System.out.println("Java Academy");
    }
}
`, out: J`
Welcome to CS101!
Java Academy
` },
        { type: 'list', items: [
          '<code>public class Main</code> defines a <b>class</b> named <code>Main</code>. Every Java program has at least one class, and a public class must be saved in a file with the same name (<code>Main.java</code>).',
          '<code>public static void main(String[] args)</code> is the <b>main method</b>: the entry point where execution starts. Write this line exactly.',
          '<code>System.out.println(...)</code> is a <b>statement</b> that displays text. A string is written between double quotes.',
          'Every statement ends with a <b>semicolon</b> <code>;</code>.',
          'Braces <code>{ }</code> form <b>blocks</b>. The class block contains the method block. Every <code>{</code> needs a matching <code>}</code>.',
          'Java is <b>case-sensitive</b>: <code>System</code> is not the same as <code>system</code>, and <code>Main</code> is not <code>main</code>.'
        ], ar: 'كل برنامج = صنف class يحتوي الدالة main، وكل جملة تنتهي بفاصلة منقوطة، والأقواس { } تحدد الكتل.' },
        { type: 'note', kind: 'tip', en: 'Indent the code inside each block (4 spaces is common). The compiler does not need it, but people do: it shows at a glance which statements belong to which block.' },
        { type: 'h', en: 'print vs println' },
        { type: 'p', en: '<code>println</code> prints its text and then moves the cursor to the next line. <code>print</code> prints the text and stays on the same line. <code>System.out.println()</code> with nothing inside just ends the current line.',
          ar: 'println تطبع ثم تنتقل لسطر جديد، أما print فتبقى على السطر نفسه.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.print("Hello ");
        System.out.print("World");
        System.out.println("!");
        System.out.println("Done");
    }
}
`, out: J`
Hello World!
Done
` },
        { type: 'h', en: 'Escape sequences' },
        { type: 'p', en: 'Some characters cannot be typed directly inside a string. Write them with a backslash: <code>\\n</code> (new line), <code>\\t</code> (tab), <code>\\"</code> (a double quote) and <code>\\\\</code> (a backslash).' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Line one\nLine two");
        System.out.println("She said \"Java is fun\"");
        System.out.println("Folder: C:\\Java\\bin");
    }
}
`, out: J`
Line one
Line two
She said "Java is fun"
Folder: C:\Java\bin
` },
        { type: 'h', en: 'Printing text vs printing a calculation' },
        { type: 'p', en: 'Anything inside double quotes is printed exactly as written. Without quotes, Java evaluates the expression first and prints the result. The <code>+</code> operator joins a string with a value.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("3 + 4");
        System.out.println(3 + 4);
        System.out.println("3 + 4 = " + (3 + 4));
    }
}
`, out: J`
3 + 4
7
3 + 4 = 7
` },
        { type: 'h', en: 'Comments' },
        { type: 'p', en: 'Comments are notes for human readers; the compiler ignores them completely. Use them to explain what the program does and why.',
          ar: 'التعليقات ملاحظات للقارئ ويتجاهلها المترجم.' },
        { type: 'code', code: J`
// A line comment: from // to the end of the line

/* A block comment
   can span several lines */

/** A javadoc comment: used to document classes and methods.
    The javadoc tool turns these into web pages. */
` },
        { type: 'note', kind: 'exam', en: 'A common mistake is writing <code>System.out.printIn</code> with a capital i instead of a lowercase L, or forgetting the semicolon. Both are syntax errors and the program will not compile.' }
      ],
      practice: [
        { t: 'output', q: 'What exactly does this code print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.print("A");
        System.out.println("B");
        System.out.print("C");
        System.out.print("D");
        System.out.println();
        System.out.println("E");
    }
}
`, answer: J`
AB
CD
E
`, explain: '<code>print("A")</code> stays on the line, <code>println("B")</code> ends it. <code>C</code> and <code>D</code> share a line, which the empty <code>println()</code> ends. Then <code>E</code> is printed on its own line.' },
        { t: 'fill', q: 'Complete the program so it compiles and prints <code>Hello, Java!</code>.', code: J`
public ___ Main {
    public static ___ main(String[] args) {
        System.out.___("Hello, Java!");
    }
}
`, answers: ['class', 'void', 'println'],
          explain: 'A program starts with a class declaration, the main method header is <code>public static void main(String[] args)</code>, and <code>println</code> prints a line.' },
        { t: 'mcq', q: 'Which of the following is <b>not</b> a valid Java comment?',
          options: ['<code>// total price</code>', '<code>/* total price */</code>', '<code>/** total price */</code>', '<code>&lt;!-- total price --&gt;</code>'], answer: 3,
          explain: 'Java has line comments <code>//</code>, block comments <code>/* */</code> and javadoc comments <code>/** */</code>. <code>&lt;!-- --&gt;</code> is an HTML comment.' },
        { t: 'order', q: 'Arrange the lines into a program that prints <code>Hello</code> and then <code>Bye</code>.',
          lines: [
            'public class Main {',
            '    public static void main(String[] args) {',
            '        System.out.println("Hello");',
            '        System.out.println("Bye");',
            '    }',
            '}'
          ],
          explain: 'The class encloses the main method, which encloses the statements. Close the method brace first, then the class brace.' },
        { t: 'output', q: 'What does this code print?', code: J`
System.out.println("Name:\nOmar");
System.out.println("Say \"hi\"");
`, answer: J`
Name:
Omar
Say "hi"
`, explain: '<code>\\n</code> starts a new line inside the string, and <code>\\"</code> prints a double quote character.' },
        { t: 'code', q: 'Write a program that prints exactly these three lines (no input is needed):<br><code>Name: Ahmed</code><br><code>Major: Computer Science</code><br><code>Language: Java</code>',
          qAr: 'اطبع الأسطر الثلاثة كما هي تماماً.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // write your statements here
    }
}
`,
          tests: [{ stdin: '', expected: J`
Name: Ahmed
Major: Computer Science
Language: Java
` }],
          solution: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Name: Ahmed");
        System.out.println("Major: Computer Science");
        System.out.println("Language: Java");
    }
}
`,
          hint: 'Use one <code>System.out.println</code> statement per line and check spaces after each colon.',
          explain: 'Three <code>println</code> statements print three lines. The text must match exactly, including capital letters and spaces.' }
      ]
    },
    {
      title: 'Errors, the NetBeans IDE and problem solving',
      titleAr: 'الأخطاء وبيئة NetBeans وحل المسائل',
      minutes: 55,
      body: [
        { type: 'h', en: 'Three kinds of errors' },
        { type: 'table', head: ['Kind', 'When it is found', 'Example'], rows: [
          ['<b>Syntax error</b> (compile error)', 'By the compiler, before the program runs', 'Missing <code>;</code>, misspelled <code>println</code>, missing <code>}</code>'],
          ['<b>Runtime error</b>', 'While the program runs; it crashes', 'Dividing an integer by zero'],
          ['<b>Logic error</b>', 'Not found automatically; the output is simply wrong', 'Wrong formula, wrong order of operations']
        ] },
        { type: 'p', en: 'A <b>syntax error</b> breaks the grammar rules of Java, so <code>javac</code> refuses to create the <code>.class</code> file. The program below has two: a missing semicolon and a lowercase <code>system</code>.',
          ar: 'الخطأ النحوي يمنع الترجمة، وخطأ وقت التشغيل يوقف البرنامج، والخطأ المنطقي يعطي نتيجة خاطئة دون رسالة.' },
        { type: 'code', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Total: 100")    // error: ';' expected
        system.out.println("Done");         // error: package system does not exist
    }
}
` },
        { type: 'p', en: 'A <b>runtime error</b> happens when the program compiles but the computer is asked to do something impossible. The statement <code>System.out.println(10 / 0);</code> compiles, but when it runs Java stops with <code>java.lang.ArithmeticException: / by zero</code>.' },
        { type: 'p', en: 'A <b>logic error</b> is the hardest to find: the program runs without any message but gives the wrong answer. Here we want the average of the grades 90 and 80.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(90 + 80 / 2);     // logic error: divides first
        System.out.println((90 + 80) / 2);   // correct average
    }
}
`, out: J`
130
85
` },
        { type: 'note', kind: 'warn', en: 'Read the <b>first</b> compiler error first. One missing brace can produce many confusing messages further down; fixing the first one often removes the rest.' },
        { type: 'h', en: 'Working in NetBeans' },
        { type: 'list', items: [
          '<b>Create a project:</b> File &gt; New Project &gt; Java &gt; Java Application, give it a name, and NetBeans creates a class with a <code>main</code> method.',
          '<b>Edit:</b> type your code. Syntax errors are underlined in red as you type; hover over the red mark to read the message.',
          '<b>Run:</b> press <b>F6</b> (Run Project) or click the green arrow. Output appears in the <i>Output</i> window at the bottom.',
          '<b>Debug:</b> click a line number to set a <b>breakpoint</b>, then choose Debug Project. Execution pauses at the breakpoint.',
          '<b>Step:</b> use <b>Step Over (F8)</b> to run one line at a time and watch the <i>Variables</i> window to see values change.'
        ], ar: 'استخدم نقطة التوقف (Breakpoint) ثم نفذ سطراً سطراً (F8) لتتبع البرنامج واكتشاف الأخطاء المنطقية.' },
        { type: 'note', kind: 'tip', en: 'The debugger is the best tool for logic errors: instead of guessing, pause the program and check whether each value is what you expected.' },
        { type: 'h', en: 'Problem solving: algorithms, pseudocode and flowcharts' },
        { type: 'p', en: 'An <b>algorithm</b> is a clear, step-by-step plan for solving a problem. Plan it before coding. <b>Pseudocode</b> describes the steps in plain, structured English; a <b>flowchart</b> draws them with standard shapes.',
          ar: 'الخوارزمية خطوات مرتبة لحل المسألة؛ نكتبها بالشيفرة الزائفة أو نرسمها بمخطط انسيابي.' },
        { type: 'table', head: ['Flowchart shape', 'Meaning'], rows: [
          ['Oval (terminal)', 'Start or End'],
          ['Parallelogram', 'Input or Output (read, display)'],
          ['Rectangle', 'Process (a calculation or assignment)'],
          ['Diamond', 'Decision (a yes/no question)'],
          ['Arrow', 'Direction of flow']
        ] },
        { type: 'code', code: J`
Algorithm: area of a rectangle
1. Start
2. Get the width and the height
3. area = width * height
4. Display area
5. End
` },
        { type: 'p', en: 'In Unit 2 you will read the width and height from the keyboard. For now, this program uses fixed values to follow the same plan:' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        // width = 5, height = 3
        System.out.println("Width: 5, Height: 3");
        System.out.println("Area = " + 5 * 3);
    }
}
`, out: J`
Width: 5, Height: 3
Area = 15
` }
      ],
      practice: [
        { t: 'mcq', q: 'A student forgets the semicolon at the end of a <code>println</code> statement. What kind of error is this?',
          options: ['Syntax (compile) error', 'Runtime error', 'Logic error', 'It is not an error'], answer: 0,
          explain: 'Every statement must end with <code>;</code>. The compiler detects this and does not produce a <code>.class</code> file.' },
        { t: 'mcq', q: 'A program compiles, but while running it stops with <code>ArithmeticException: / by zero</code>. What kind of error is this?',
          options: ['Syntax error', 'Runtime error', 'Logic error', 'Compiler error'], answer: 1,
          explain: 'The code is grammatically correct, so it compiled. The crash happened during execution, which makes it a runtime error.' },
        { t: 'output', q: 'A student wants to print the average of 70 and 90. What do these two lines print? Which one has a logic error?', code: J`
System.out.println(70 + 90 / 2);
System.out.println((70 + 90) / 2);
`, answer: J`
115
80
`, explain: 'Division is done before addition, so the first line computes 70 + 45 = 115 (a logic error). The parentheses in the second line force 160 / 2 = 80.' },
        { t: 'mcq', q: 'In a flowchart, which shape represents a decision such as <i>Is the grade at least 60?</i>',
          options: ['Oval', 'Rectangle', 'Parallelogram', 'Diamond'], answer: 3,
          explain: 'A diamond has two exits (yes and no), so it is used for decisions.' },
        { t: 'order', q: 'Order the pseudocode steps for computing the average of three exam grades.',
          lines: ['Start', 'Read grade1, grade2, grade3', 'sum = grade1 + grade2 + grade3', 'average = sum / 3', 'Display average', 'End'],
          explain: 'Input comes first, then the processing steps (sum before average), then output.' },
        { t: 'fill', q: 'Fix the two syntax errors so the line prints <code>Fixed!</code>.', code: J`
System.out.___("Fixed!")___
`, answers: ['println', ';'],
          explain: 'The method is <code>println</code> (lowercase L, not capital i) and each statement must end with a semicolon.' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'What does the JVM execute?',
      options: ['Java source code (.java)', 'Bytecode (.class)', 'Pseudocode', 'HTML files'], answer: 1,
      explain: 'The compiler turns <code>.java</code> into <code>.class</code> bytecode; the JVM executes the bytecode.' },
    { t: 'mcq', q: 'Which is the correct header of the main method?',
      options: ['<code>public void static main(String[] args)</code>', '<code>public static void Main(String[] args)</code>', '<code>public static void main(String[] args)</code>', '<code>static public main(String args)</code>'], answer: 2,
      explain: 'The exact form is <code>public static void main(String[] args)</code>. <code>Main</code> with a capital M is a different name because Java is case-sensitive.' },
    { t: 'output', q: 'What is printed?', code: J`
System.out.print("CS");
System.out.println("101");
System.out.print("Java");
System.out.println();
System.out.println("Code");
`, answer: J`
CS101
Java
Code
`, explain: '<code>print</code> keeps the cursor on the same line; <code>println</code> moves to the next line afterwards.' },
    { t: 'output', q: 'What is printed?', code: J`
System.out.println("Riyadh\nJeddah");
System.out.println("\"Dammam\"");
`, answer: J`
Riyadh
Jeddah
"Dammam"
`, explain: '<code>\\n</code> breaks the line, and <code>\\"</code> prints a quote mark.' },
    { t: 'output', q: 'Careful with <code>+</code>. What is printed?', code: J`
System.out.println("5 + 3 = " + 5 + 3);
System.out.println("5 + 3 = " + (5 + 3));
System.out.println(5 + 3 + " apples");
`, answer: J`
5 + 3 = 53
5 + 3 = 8
8 apples
`, explain: '<code>+</code> works left to right. Once a string is on the left, the next <code>+</code> joins text, so 5 and 3 are attached as "53". Parentheses force the addition first. In the last line 5 + 3 is added before the string is reached.' },
    { t: 'mcq', q: 'A program runs without any error message but prints a total of 130 when the correct total is 85. What kind of error is this?',
      options: ['Syntax error', 'Runtime error', 'Logic error', 'Compilation error'], answer: 2,
      explain: 'The program compiles and runs to the end, but the result is wrong: that is a logic error.' },
    { t: 'mcq', q: 'What does the compiler do with comments?',
      options: ['Prints them', 'Ignores them', 'Turns them into bytecode', 'Reports them as errors'], answer: 1,
      explain: 'Comments are for people only; the compiler skips them.' },
    { t: 'mcq', q: 'Which flowchart shape is used for "Read the price" or "Display the total"?',
      options: ['Rectangle', 'Diamond', 'Parallelogram', 'Oval'], answer: 2,
      explain: 'Input and output steps use a parallelogram. Rectangles are for processing, diamonds for decisions, ovals for start and end.' },
    { t: 'mcq', q: 'Which of these lines will <b>not</b> compile?',
      options: ['<code>System.out.println("Hi");</code>', '<code>System.out.print("Hi");</code>', '<code>system.out.println("Hi");</code>', '<code>System.out.println();</code>'], answer: 2,
      explain: 'Java is case-sensitive. <code>system</code> with a lowercase s is not the same as <code>System</code>.' },
    { t: 'mcq', q: 'Which statement about high-level languages is true?',
      options: ['The CPU executes them directly', 'They must be translated before they can run', 'They consist only of 0s and 1s', 'They are specific to one type of CPU'], answer: 1,
      explain: 'The CPU only runs machine language, so high-level source code is translated by a compiler or interpreter first.' }
  ],
  lab: {
    t: 'code',
    q: 'Mini project: <b>Weekly plan</b>. Write a program that prints exactly the following (no input). The last number must be <b>calculated</b> in the program with the expression <code>2 + 2 + 3</code>, not typed as 7.<br><code>CS101 Weekly Plan</code><br><code>=================</code><br><code>Sunday: Lecture (2 hours)</code><br><code>Tuesday: Lecture (2 hours)</code><br><code>Thursday: Lab (3 hours)</code><br><code>Total hours: 7</code>',
    qAr: 'اطبع الجدول كما هو، واحسب مجموع الساعات داخل البرنامج.',
    starter: J`
public class Main {
    public static void main(String[] args) {
        // print the plan here
    }
}
`,
    tests: [{ stdin: '', expected: J`
CS101 Weekly Plan
=================
Sunday: Lecture (2 hours)
Tuesday: Lecture (2 hours)
Thursday: Lab (3 hours)
Total hours: 7
` }],
    solution: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("CS101 Weekly Plan");
        System.out.println("=================");
        System.out.println("Sunday: Lecture (2 hours)");
        System.out.println("Tuesday: Lecture (2 hours)");
        System.out.println("Thursday: Lab (3 hours)");
        System.out.println("Total hours: " + (2 + 2 + 3));
    }
}
`,
    hint: 'Without parentheses, <code>"Total hours: " + 2 + 2 + 3</code> prints <code>Total hours: 223</code>.',
    explain: 'Each line is one <code>println</code>. The parentheses make Java add the numbers before joining the result to the text.'
  },
  cheats: [
    { code: J`
public class Main {
    public static void main(String[] args) {
        // statements go here
    }
}
`, note: 'Skeleton of every program; the file must be named Main.java' },
    { code: J`System.out.println("text");`, note: 'Print text, then move to a new line' },
    { code: J`System.out.print("text");`, note: 'Print text and stay on the same line' },
    { code: J`\n  \t  \"  \\`, note: 'Escape sequences: new line, tab, double quote, backslash' },
    { code: J`// line comment   /* block comment */`, note: 'Comments are ignored by the compiler' },
    { code: J`javac Main.java   then   java Main`, note: 'Compile to bytecode, then run it on the JVM' }
  ],
  glossary: [
    { term: 'Hardware', ar: 'المكونات المادية', def: 'The physical parts of a computer: CPU, memory, storage and input/output devices.' },
    { term: 'Software', ar: 'البرمجيات', def: 'Programs that tell the hardware what to do.' },
    { term: 'CPU', ar: 'وحدة المعالجة المركزية', def: 'The part of the computer that fetches and executes instructions.' },
    { term: 'Program', ar: 'برنامج', def: 'A sequence of instructions that performs a task.' },
    { term: 'Machine language', ar: 'لغة الآلة', def: 'Binary instructions that a CPU executes directly.' },
    { term: 'Source code', ar: 'الشيفرة المصدرية', def: 'A program written in a high-level language such as Java.' },
    { term: 'Compiler', ar: 'المترجم', def: 'A program that translates the whole source code into another language, e.g. javac translates Java into bytecode.' },
    { term: 'Interpreter', ar: 'المفسر', def: 'A program that reads and executes code one statement at a time.' },
    { term: 'Bytecode', ar: 'الشيفرة الوسيطة', def: 'The platform-independent code in a .class file, executed by the JVM.' },
    { term: 'JVM', ar: 'آلة جافا الافتراضية', def: 'Java Virtual Machine: the software that runs Java bytecode on a particular computer.' },
    { term: 'JDK', ar: 'حزمة تطوير جافا', def: 'Java Development Kit: the compiler, the JVM and the standard library needed to write Java programs.' },
    { term: 'IDE', ar: 'بيئة التطوير المتكاملة', def: 'A tool such as NetBeans that combines an editor, compiler, runner and debugger.' },
    { term: 'Statement', ar: 'جملة برمجية', def: 'One complete instruction; in Java it ends with a semicolon.' },
    { term: 'Block', ar: 'كتلة', def: 'A group of statements between braces { }.' },
    { term: 'Comment', ar: 'تعليق', def: 'A note in the code that the compiler ignores.' },
    { term: 'Syntax error', ar: 'خطأ نحوي', def: 'A mistake in the grammar of the language, detected by the compiler.' },
    { term: 'Runtime error', ar: 'خطأ وقت التشغيل', def: 'An error that makes a running program stop abnormally.' },
    { term: 'Logic error', ar: 'خطأ منطقي', def: 'A mistake that makes a program produce wrong results without any error message.' },
    { term: 'Breakpoint', ar: 'نقطة توقف', def: 'A marked line where the debugger pauses the program.' },
    { term: 'Algorithm', ar: 'خوارزمية', def: 'A step-by-step plan for solving a problem.' },
    { term: 'Pseudocode', ar: 'الشيفرة الزائفة', def: 'An informal, structured English description of an algorithm.' },
    { term: 'Flowchart', ar: 'مخطط انسيابي', def: 'A diagram of an algorithm using standard shapes connected by arrows.' }
  ]
});
