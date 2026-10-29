JP.unit({
  course: 'cs101',
  n: 1,
  title: 'Introduction to Computers, Programming and Java',
  titleAr: 'مقدمة في الحاسب والبرمجة ولغة جافا',
  intro: 'Welcome! You do not need any programming experience. In this unit you will learn, step by step, what a computer is, what a program is, and how Java turns your instructions into something the computer can run. You will write and run your first programs, meet the three kinds of errors, try an editor called NetBeans, and learn to plan a solution with pseudocode and flowcharts before you write any code.',
  introAr: 'أهلاً {{name}}! لا تحتاج{{g:|ين}} إلى أي خبرة سابقة. في هذه الوحدة نتعلم خطوة خطوة ما هو الحاسب وما هو البرنامج وكيف تحوّل جافا تعليماتك إلى شيء يفهمه الحاسب، ثم تكتب{{g:|ين}} أول برامجك وتتعرف{{g:|ين}} على الأخطاء وعلى NetBeans وعلى التخطيط بالخوارزميات والمخططات الانسيابية.',
  lessons: [
    {
      title: 'What is a computer? Hardware and software',
      titleAr: 'ما هو الحاسب؟ المكونات المادية والبرمجيات',
      minutes: 25,
      body: [
        { type: 'h', en: 'A computer follows instructions' },
        { type: 'p', en: 'You use computers every day: your phone, the bank machine, the library system. All of them do the same basic job. A computer takes in <b>data</b> (facts such as your marks), follows <b>instructions</b>, and gives out a result. Programming means writing those instructions.',
          ar: 'الحاسب يستقبل بيانات، وينفذ تعليمات، ثم يعطي نتيجة. والبرمجة هي كتابة هذه التعليمات.' },
        { type: 'analogy', title: 'A computer is like a very fast, very obedient worker', en: 'Imagine a cook who does exactly what the recipe says, never gets tired, and never uses common sense. If the recipe says "add salt" ten times, the cook adds salt ten times. A computer is the same: it follows your instructions exactly, so your instructions must be exact.',
          ar: 'الحاسب كطباخ سريع جداً ينفذ الوصفة حرفياً دون تفكير. لذلك يجب أن تكون تعليماتنا دقيقة.' },
        { type: 'check', q: 'What does a computer do with the instructions it is given?', options: ['It follows them exactly', 'It guesses what you mean', 'It ignores the ones it dislikes', 'It rewrites them'], answer: 0,
          explain: 'A computer has no common sense. It does exactly what the instructions say.', ar: 'ينفذها حرفياً.' },
        { type: 'h', en: 'Two sides: hardware and software' },
        { type: 'p', en: 'Every computer has two sides. <b>Hardware</b> is the physical part: things you can touch. <b>Software</b> is the set of programs that tell the hardware what to do: things you cannot touch.',
          ar: 'المكونات المادية (Hardware) تلمسها، والبرمجيات (Software) لا تلمسها.' },
        { type: 'analogy', title: 'A body and a mind', en: 'Think of a person. The body (hands, eyes, brain) is the hardware. The knowledge and the plans in the head, like "how to make Arabic coffee", are the software. A body without knowledge can do nothing useful, and knowledge without a body cannot act.' },
        { type: 'table', head: ['Hardware (you can touch it)', 'Software (you cannot touch it)'], rows: [
          ['Screen, keyboard, mouse', 'A web browser'],
          ['The phone itself', 'A WhatsApp app'],
          ['A USB drive', 'The files stored on it']
        ] },
        { type: 'check', q: 'Which one is software?', options: ['The keyboard', 'The screen', 'A calculator app', 'The mouse'], answer: 2,
          explain: 'An app is a program, so it is software. The other three are physical parts.', ar: 'التطبيق برنامج، إذن برمجيات.' },
        { type: 'h', en: 'The main parts of the hardware' },
        { type: 'p', en: 'You do not need to know every part. Learn these five. Each one has one job.' },
        { type: 'list', items: [
          '<b>CPU</b> (Central Processing Unit): the brain. It carries out the instructions one after another, very fast.',
          '<b>Memory (RAM)</b>: a fast notepad for what the computer is working on <i>right now</i>. When the power goes off, the notepad is wiped.',
          '<b>Storage</b> (SSD, hard disk, USB drive): a cupboard that keeps your files even when the power is off.',
          '<b>Input devices</b> (keyboard, mouse, microphone): send data <i>into</i> the computer.',
          '<b>Output devices</b> (screen, printer, speakers): show results <i>out</i> of the computer.'
        ], ar: 'المعالج هو العقل، والذاكرة RAM ورقة مؤقتة، والتخزين خزانة دائمة، والإدخال والإخراج أجهزة تدخل البيانات وتعرض النتائج.' },
        { type: 'analogy', title: 'RAM is your desk, storage is your cupboard', en: 'When you study, you put the book you are using on your desk (RAM). It is quick to reach, but at the end of the day you clear the desk. Books you want to keep go into the cupboard (storage). The CPU is you, doing the work.' },
        { type: 'check', q: 'You save a file and switch the computer off. Where is the file kept?', options: ['In RAM', 'In storage (SSD or disk)', 'In the CPU', 'On the screen'], answer: 1,
          explain: 'Storage keeps data when the power is off. RAM is wiped.', ar: 'في التخزين، لأن الذاكرة RAM تُمسح.' },
        { type: 'steps', title: 'Follow one instruction through the computer', problem: 'You type your mark on the keyboard and the screen shows a message. Which part does what? Then see a tiny program that does the output part.',
          steps: [
            { en: '<b>Input:</b> you press keys. The keyboard (input device) sends your data into the computer.' },
            { en: '<b>Memory:</b> the data is placed in RAM, the fast notepad.' },
            { en: '<b>Processing:</b> the CPU reads the instructions from RAM and works on the data.' },
            { en: '<b>Output:</b> the result is sent to the screen (output device). Here is a program whose only job is to produce output.', code: 'System.out.println("Mark saved");' },
            { en: '<b>Storage:</b> if you choose to save, a copy goes to the SSD so it stays after switching off.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Mark saved");
    }
}
`, out: 'Mark saved', ar: 'إدخال ← ذاكرة ← معالج ← إخراج، والحفظ يكون في التخزين.' },
        { type: 'note', kind: 'tip', en: 'Do not memorise long lists. Remember the pictures: CPU = brain, RAM = desk, storage = cupboard.' }
      ],
      mistakes: [
        { title: 'Mixing up RAM and storage', en: 'Many students think RAM keeps files for ever. RAM is only for what you are using now and is wiped when the power goes off. Storage keeps files.' },
        { title: 'Calling the screen "software"', en: 'You can touch a screen, so it is hardware. Software is the programs, which you cannot touch.' },
        { title: 'Thinking the computer understands what you mean', en: 'A computer only follows the exact instructions. If you forget a step, it does not guess.' }
      ],
      remember: ['A computer takes in data, follows instructions and gives out results.', '<b>Hardware</b> = physical parts. <b>Software</b> = programs.', '<b>CPU</b> = brain, <b>RAM</b> = fast temporary memory, <b>storage</b> = permanent memory.', 'Input devices send data in; output devices show results.', 'A computer does exactly what it is told, nothing more.'],
      rememberAr: 'المكونات المادية تُلمس والبرمجيات لا تُلمس. المعالج عقل الحاسب، والذاكرة RAM مؤقتة، والتخزين دائم.',
      practice: [
        { t: 'mcq', q: 'Which one is <b>hardware</b>?', options: ['A game', 'A keyboard', 'A website', 'A photo file'], answer: 1, explain: 'You can touch a keyboard. The others are software or data.' },
        { t: 'mcq', q: 'Which part is called the "brain" of the computer?', options: ['RAM', 'Screen', 'CPU', 'Printer'], answer: 2, explain: 'The CPU carries out the instructions.' },
        { t: 'mcq', q: 'Which part loses its contents when the power is turned off?', options: ['SSD', 'RAM', 'USB drive', 'Hard disk'], answer: 1, explain: 'RAM is temporary. Storage devices keep data.' },
        { t: 'fill', q: 'Complete the sentences.', code: J`
The keyboard is an ___ device.
The screen is an ___ device.
`, answers: ['input', 'output'], explain: 'Input devices send data in; output devices show results.' },
        { t: 'order', q: 'Put these steps in the order they happen.', lines: ['You type data on the keyboard', 'The data is placed in RAM', 'The CPU processes the data', 'The result appears on the screen'], explain: 'Input, memory, processing, output.' },
        { t: 'mcq', q: 'A mobile app is an example of:', options: ['Hardware', 'Software', 'An input device', 'Storage'], answer: 1, explain: 'An app is a program, so it is software.' },
        { t: 'output', q: 'What does this tiny program show on the screen? (<code>println</code> means "print a line".)', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello CPU");
    }
}
`, answer: 'Hello CPU', explain: 'The program prints exactly the text between the quotes.' }
      ]
    },
    {
      title: 'Programs and programming languages',
      titleAr: 'البرامج ولغات البرمجة',
      minutes: 25,
      body: [
        { type: 'h', en: 'What is a program?' },
        { type: 'p', en: 'A <b>program</b> is a list of instructions that tells the computer how to do a task: calculate a GPA, show a timetable, or add up a coffee order. Without a program, the hardware does nothing useful.',
          ar: 'البرنامج قائمة تعليمات تُخبر الحاسب كيف ينفذ مهمة.' },
        { type: 'analogy', title: 'A program is a recipe', en: 'A recipe lists steps in order: boil water, add tea, wait three minutes, pour. A program is the same. The computer follows the steps from the first to the last, in order.' },
        { type: 'check', q: 'A program is most like:', options: ['A recipe with ordered steps', 'A picture', 'A battery', 'A cable'], answer: 0, explain: 'A program is an ordered list of instructions, like a recipe.' },
        { type: 'h', en: 'The computer only understands 0 and 1' },
        { type: 'p', en: 'Inside, a computer works with electricity: on or off. We write "on" as <b>1</b> and "off" as <b>0</b>. The only language the CPU understands directly is <b>machine language</b>, which is made only of 0s and 1s.',
          ar: 'لغة الآلة أصفار وواحدات فقط، وهي اللغة الوحيدة التي يفهمها المعالج مباشرة.' },
        { type: 'code', code: J`
1101101010011010
` },
        { type: 'p', en: 'Writing a program like that is very hard and slow for people. So people invented languages that look more like English.' },
        { type: 'table', head: ['Level', 'What it looks like', 'Who can read it?'], rows: [
          ['Machine language', '<code>1101101010011010</code>', 'Only the CPU'],
          ['Assembly language', '<code>add 2, 3, result</code>', 'Experts. Short words, but still hard.'],
          ['High-level language', '<code>area = 5 * 5 * 3.14159;</code>', 'People like you. Java, Python and C++ are high-level.']
        ] },
        { type: 'analogy', title: 'Languages between you and the CPU', en: 'Imagine you speak Arabic and a worker speaks only a secret code. You write your instructions in Arabic (high-level). A translator turns them into the secret code (machine language). You never need to learn the secret code.' },
        { type: 'p', en: 'What you write in a high-level language is called <b>source code</b>. The CPU cannot run it yet. It must be translated first.', ar: 'الشيفرة المصدرية هي ما نكتبه بلغة عالية المستوى، ويجب ترجمتها قبل التنفيذ.' },
        { type: 'h', en: 'Translators: compiler and interpreter' },
        { type: 'p', en: 'There are two kinds of translators. A <b>compiler</b> translates the <i>whole</i> program first, then you run the result. An <b>interpreter</b> translates and runs the program <i>one line at a time</i>.' },
        { type: 'analogy', title: 'Translating a book or a speech', en: 'A compiler is like translating a whole book before anyone reads it. An interpreter is like a live interpreter at a conference who translates sentence by sentence while the speaker talks.',
          ar: 'المترجم Compiler يترجم الكتاب كاملاً، والمفسر Interpreter يترجم جملة بجملة.' },
        { type: 'check', q: 'Which translator translates the whole program before it runs?', options: ['Compiler', 'Interpreter', 'Keyboard', 'Printer'], answer: 0, explain: 'The compiler translates the whole program first.', ar: 'المترجم Compiler.' },
        { type: 'steps', title: 'From idea to a program', problem: 'You want the computer to greet a student. Think about what you need, then see the program.',
          steps: [
            { en: 'Write the task in plain words: "Show the message Hello Sara on the screen".' },
            { en: 'Choose a high-level language. We use Java.' },
            { en: 'Write the instruction in Java. This one line prints a message:', code: 'System.out.println("Hello Sara");' },
            { en: 'Put the line inside the standard Java frame (you will learn the frame in Lesson 3).' },
            { en: 'A translator turns it into machine language, and the CPU runs it. The result appears on the screen.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Sara");
    }
}
`, out: 'Hello Sara', ar: 'نكتب المهمة بكلمات، ثم بجافا، ثم يترجمها المترجم وينفذها المعالج.' },
        { type: 'note', kind: 'exam', en: 'The CPU understands <b>only machine language</b>. Every other language needs translating first.', ar: 'المعالج يفهم لغة الآلة فقط.' }
      ],
      mistakes: [
        { title: 'Thinking the CPU reads Java directly', en: 'The CPU only understands 0s and 1s. Java source code must be translated first.' },
        { title: 'Mixing up compiler and interpreter', en: 'Compiler = whole program first. Interpreter = line by line while running.' },
        { title: 'Believing "high-level" means "more difficult"', en: 'High-level means <i>closer to human language</i>, so it is easier for people.' }
      ],
      remember: ['A <b>program</b> is an ordered list of instructions.', 'The CPU understands only <b>machine language</b> (0s and 1s).', '<b>High-level languages</b> (Java, Python) are easy for people to read.', 'Code you write is called <b>source code</b>.', 'A <b>compiler</b> translates everything first; an <b>interpreter</b> goes line by line.'],
      rememberAr: 'الحاسب يفهم الأصفار والواحدات فقط، ونكتب بلغة عالية المستوى ثم يترجمها المترجم أو المفسر.',
      practice: [
        { t: 'mcq', q: 'What is a program?', options: ['A list of instructions for the computer', 'A part of the keyboard', 'A kind of memory', 'A cable'], answer: 0, explain: 'A program is a list of instructions.' },
        { t: 'mcq', q: 'Which language can the CPU run directly?', options: ['Java', 'Machine language', 'English', 'Python'], answer: 1, explain: 'Only machine language (0s and 1s).' },
        { t: 'mcq', q: 'Which of these is a high-level language?', options: ['<code>1101101010</code>', 'Java', 'A USB drive', 'RAM'], answer: 1, explain: 'Java is a high-level language.' },
        { t: 'fill', q: 'Complete the sentences.', code: J`
Code written by a programmer is called ___ code.
A ___ translates the whole program before it runs.
`, answers: ['source', 'compiler'], explain: 'Source code is translated by a compiler (or an interpreter).' },
        { t: 'order', q: 'Order the steps to get a program running.', lines: ['Write the task in plain words', 'Write the source code in Java', 'A translator turns it into machine language', 'The CPU runs the program'], explain: 'Idea, source code, translation, execution.' },
        { t: 'mcq', q: 'A live interpreter at a conference translating sentence by sentence is most like:', options: ['A compiler', 'An interpreter', 'A CPU', 'A printer'], answer: 1, explain: 'An interpreter works one piece at a time.' },
        { t: 'output', q: 'What does this program print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("I am source code");
    }
}
`, answer: 'I am source code', explain: 'It prints the text inside the quotes.' }
      ]
    },
    {
      title: 'How Java runs: compiler, bytecode and the JVM',
      titleAr: 'كيف تعمل جافا: المترجم وbytecode وآلة JVM',
      minutes: 25,
      body: [
        { type: 'h', en: 'Why Java is special' },
        { type: 'p', en: 'Different computers (Windows, Mac, Linux) speak different machine languages. It would be tiring to write one program for each. Java solves this with a middle step, so you write your program <b>once</b> and it can run <b>anywhere</b>.',
          ar: 'تكتب البرنامج مرة واحدة ويعمل على أي نظام تشغيل.' },
        { type: 'analogy', title: 'A universal travel plug', en: 'Sockets are different in different countries. A universal adapter lets one plug work everywhere. In Java, the <b>JVM</b> is the adapter: one program, many computers.' },
        { type: 'h', en: 'The three steps' },
        { type: 'list', items: [
          '<b>Write</b> source code in a text file that ends with <code>.java</code>, for example <code>Main.java</code>.',
          '<b>Compile:</b> the Java compiler <code>javac</code> translates it into <b>bytecode</b> and saves a file ending with <code>.class</code>.',
          '<b>Run:</b> the <b>Java Virtual Machine (JVM)</b> reads the bytecode and runs it on your computer.'
        ] },
        { type: 'code', code: J`
javac Main.java
java Main
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['javac Main.java', 'Use the compiler <code>javac</code> on the file <code>Main.java</code>. It creates <code>Main.class</code> (bytecode).'],
          ['java Main', 'Start the JVM. It runs the bytecode in <code>Main.class</code>. Write the name <b>without</b> <code>.class</code>.']
        ], ar: 'javac تترجم إلى ملف class، و java تشغّله.' },
        { type: 'analogy', title: 'A film with subtitles', en: 'The film (your program) is made once. Subtitles in each country (the JVM for each computer) let everyone watch it. Bytecode is the film; the JVM is the subtitle system.' },
        { type: 'check', q: 'Which file does the JVM run?', options: ['Main.java', 'Main.class', 'Main.txt', 'Main.doc'], answer: 1, explain: 'The JVM runs bytecode, stored in the .class file.', ar: 'ملف class.' },
        { type: 'h', en: 'JDK, JRE and IDE' },
        { type: 'list', items: [
          '<b>JDK</b> (Java Development Kit): the toolbox for programmers. It has <code>javac</code>, the JVM and ready-made code.',
          '<b>JRE</b> (Java Runtime Environment): only what is needed to <i>run</i> Java programs.',
          '<b>IDE</b> (Integrated Development Environment), such as NetBeans: one program where you write, run and fix code.'
        ] },
        { type: 'check', q: 'Which one lets a programmer <b>compile</b> Java code?', options: ['JRE only', 'JDK', 'A printer', 'RAM'], answer: 1, explain: 'The JDK contains the compiler javac.', ar: 'JDK تحتوي المترجم.' },
        { type: 'steps', title: 'Compile and run, step by step', problem: 'You wrote a program in a file called Main.java. How does it reach the screen?',
          steps: [
            { en: 'Save the code in <code>Main.java</code>. This is the source code.', code: 'Main.java' },
            { en: 'Open a terminal and compile it.', code: 'javac Main.java' },
            { en: 'If there are no errors, a new file <code>Main.class</code> appears. It holds bytecode.' },
            { en: 'Run it with the JVM.', code: 'java Main' },
            { en: 'The output appears below. Press Run to do all steps at once.' }
          ],
          code: J`
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
`, ar: 'نكتب ملف java، ثم javac تنتج class، ثم java تشغّله.' },
        { type: 'note', kind: 'exam', en: 'Remember the chain: <code>.java</code> is compiled by <code>javac</code> into <code>.class</code> (bytecode), which the JVM runs. Bytecode is <b>not</b> machine code, and the JVM does <b>not</b> read <code>.java</code> files.', ar: 'ملف java ← javac ← ملف class ← JVM.' }
      ],
      mistakes: [
        { title: 'Running the source file', en: 'You cannot run <code>Main.java</code> directly. Compile first, then run the class.', code: 'java Main.java   // wrong order of ideas: compile with javac first' },
        { title: 'Writing the extension when running', en: 'Run with <code>java Main</code>, not <code>java Main.class</code>.', code: 'java Main.class   // wrong' },
        { title: 'Thinking bytecode is machine code', en: 'Bytecode is for the JVM, not for a real CPU. That is why it runs everywhere.' }
      ],
      remember: ['Write <code>.java</code> source, compile with <code>javac</code>, run with <code>java</code>.', '<b>Bytecode</b> lives in a <code>.class</code> file.', 'The <b>JVM</b> runs bytecode on each computer, so Java is "write once, run anywhere".', '<b>JDK</b> = tools to write and compile. <b>IDE</b> = one friendly program to do everything.'],
      rememberAr: 'اكتب ملف java ثم ترجمه إلى class بالأمر javac ثم شغّله بالأمر java عبر آلة JVM.',
      practice: [
        { t: 'mcq', q: 'Which tool translates Java source code into bytecode?', options: ['<code>javac</code>', 'The JVM', 'The CPU', 'The keyboard'], answer: 0, explain: '<code>javac</code> is the Java compiler.' },
        { t: 'mcq', q: 'What is stored in <code>Grades.class</code>?', options: ['Source code', 'Bytecode', 'A photo', 'Nothing'], answer: 1, explain: 'A .class file holds bytecode.' },
        { t: 'mcq', q: 'Why can the same <code>.class</code> file run on Windows and Mac?', options: ['Each system has its own JVM', 'Java is machine language', 'The CPU reads Java', 'It cannot'], answer: 0, explain: 'Each platform has a JVM that understands bytecode.' },
        { t: 'fill', q: 'Fill in the two commands.', code: J`
___ Main.java
___ Main
`, answers: ['javac', 'java'], explain: 'javac compiles; java runs.' },
        { t: 'order', q: 'Put the steps in the correct order.', lines: ['Write the source code in Main.java', 'Compile it with javac', 'The compiler produces Main.class (bytecode)', 'The JVM runs Main.class', 'The output appears on the screen'], explain: 'Source, compile, bytecode, JVM, output.' },
        { t: 'mcq', q: 'What does JDK stand for?', options: ['Java Development Kit', 'Java Data Key', 'Joint Disk Kit', 'Java Display Keyboard'], answer: 0, explain: 'JDK = Java Development Kit.' },
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
`, explain: 'Each println prints text and moves to a new line.' }
      ]
    },
    {
      title: 'Your first Java program, line by line',
      titleAr: 'أول برنامج جافا سطراً سطراً',
      minutes: 30,
      body: [
        { type: 'h', en: 'The frame every program needs' },
        { type: 'p', en: 'Every Java program lives inside the same frame. Do not worry about understanding every word today. First learn what each line is <i>for</i>. The details will become clear later in the course.',
          ar: 'لكل برنامج جافا إطار ثابت. تعلّم وظيفة كل سطر الآن والتفاصيل لاحقاً.' },
        { type: 'analogy', title: 'The frame is like a house', en: 'A house has an outer wall (the class) and a front door where you walk in (the main method). Your instructions are the furniture inside. Java always starts at the front door.' },
        { type: 'code', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello!");
    }
}
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['public class Main {', 'Makes a <b>class</b> named <code>Main</code>. A class is a container for your code. The <code>{</code> opens it.'],
          ['public static void main(String[] args) {', 'The <b>main method</b>: the front door. Java starts running here. Always write this line exactly like this.'],
          ['System.out.println("Hello!");', 'A <b>statement</b>: one instruction. It shows <code>Hello!</code> on the screen.'],
          ['}', 'Closes the main method.'],
          ['}', 'Closes the class.']
        ], ar: 'class هو الحاوية، و main هي نقطة البداية، وكل تعليمة تسمى جملة.' },
        { type: 'check', q: 'Where does Java start running your program?', options: ['In the main method', 'At the last line', 'At a random line', 'In the comments'], answer: 0, explain: 'Execution starts in the main method.', ar: 'تبدأ من الدالة main.' },
        { type: 'h', en: 'Statements end with a semicolon' },
        { type: 'p', en: 'A <b>statement</b> is one complete instruction. In Java, we end each statement with a semicolon <code>;</code>. It is like the full stop at the end of a sentence.',
          ar: 'كل جملة تنتهي بفاصلة منقوطة ; مثل النقطة في نهاية الجملة.' },
        { type: 'analogy', title: 'The semicolon is a full stop', en: 'Without full stops, a paragraph is one long confusing sentence. Without semicolons, the compiler cannot tell where one instruction ends and the next starts.' },
        { type: 'check', q: 'What goes at the end of a statement?', options: ['A semicolon ;', 'A colon :', 'A comma ,', 'Nothing'], answer: 0, explain: 'Statements end with a semicolon.', ar: 'فاصلة منقوطة.' },
        { type: 'h', en: 'Braces make blocks' },
        { type: 'p', en: 'Curly braces <code>{ }</code> group statements into a <b>block</b>. Each <code>{</code> needs its own <code>}</code>. The main block is inside the class block. We indent (move to the right) the lines inside a block so we can see the shape.' },
        { type: 'analogy', title: 'Brackets in a sentence', en: 'When you open a bracket in writing, you must close it. Braces work the same way: every opening brace needs a closing brace.' },
        { type: 'h', en: 'Java is case-sensitive' },
        { type: 'p', en: 'Java treats capital and small letters as different. <code>System</code> is correct. <code>system</code> is wrong. <code>Main</code> and <code>main</code> are different names too.', ar: 'جافا حساسة لحالة الأحرف.' },
        { type: 'check', q: 'Which line is correct?', options: ['System.out.println("Hi");', 'system.out.println("Hi");', 'System.Out.Println("Hi");', 'SYSTEM.out.println("Hi");'], answer: 0, explain: 'Only the first uses the exact capital letters that Java expects.', ar: 'الأحرف الكبيرة والصغيرة مهمة.' },
        { type: 'steps', title: 'Build your first program', problem: 'Write a program that prints your timetable heading: <code>Sunday: CS101</code>.',
          steps: [
            { en: 'Start with the class. The name must match the file name <code>Main.java</code>.', code: 'public class Main {\n}' },
            { en: 'Inside it, add the front door: the main method.', code: 'public class Main {\n    public static void main(String[] args) {\n    }\n}' },
            { en: 'Inside main, add one statement. Put the text in double quotes.', code: '        System.out.println("Sunday: CS101");' },
            { en: 'Check: every <code>{</code> has a <code>}</code>, and the statement ends with <code>;</code>.' },
            { en: 'Here is the complete program. Press Run.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Sunday: CS101");
    }
}
`, out: 'Sunday: CS101', ar: 'الإطار + الدالة main + جملة طباعة تنتهي بفاصلة منقوطة.' },
        { type: 'note', kind: 'tip', en: 'Indent the code inside each block by 4 spaces. The compiler does not need it, but it helps <i>you</i> see which lines belong together.' }
      ],
      mistakes: [
        { title: 'Forgetting the semicolon', en: 'The compiler stops and says <i>\';\' expected</i>.', code: 'System.out.println("Hi")' },
        { title: 'Wrong capital letters', en: '<code>system</code> instead of <code>System</code>.', code: 'system.out.println("Hi");' },
        { title: 'Missing closing brace', en: 'Every <code>{</code> must have a <code>}</code>. Count them.', code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hi");\n    }' },
        { title: 'Forgetting the quotes around text', en: 'Text must be inside double quotes.', code: 'System.out.println(Hi);' }
      ],
      remember: ['Every program has a <b>class</b> and a <b>main</b> method.', 'Java starts running at <code>main</code>.', 'Each statement ends with <code>;</code>.', 'Braces <code>{ }</code> make blocks and must come in pairs.', 'Java is <b>case-sensitive</b>.', 'The file <code>Main.java</code> holds <code>public class Main</code>.'],
      rememberAr: 'الإطار: class ثم main ثم الجمل. كل جملة تنتهي بفاصلة منقوطة، والأقواس يجب أن تُغلق، وجافا حساسة للأحرف.',
      practice: [
        { t: 'mcq', q: 'Where does a Java program start running?', options: ['In the <code>main</code> method', 'At the first comment', 'At the bottom of the file', 'In the file name'], answer: 0, explain: 'main is the starting point.' },
        { t: 'mcq', q: 'How must every statement end?', options: ['With a semicolon', 'With a colon', 'With a full stop', 'With nothing'], answer: 0, explain: 'A semicolon ends a statement.' },
        { t: 'output', q: 'What does this program print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Coffee: 8 riyals");
    }
}
`, answer: 'Coffee: 8 riyals', explain: 'It prints the text exactly as written.' },
        { t: 'fill', q: 'Complete the program so it prints <code>Hello, Java!</code>.', code: J`
public ___ Main {
    public static ___ main(String[] args) {
        System.out.___("Hello, Java!");
    }
}
`, answers: ['class', 'void', 'println'], explain: 'class, void and println complete the frame and the statement.' },
        { t: 'mcq', q: 'Which line is written correctly?', options: ['<code>System.out.println("Hi");</code>', '<code>system.out.println("Hi");</code>', '<code>System.out.println("Hi")</code>', '<code>System.out.println(Hi);</code>'], answer: 0, explain: 'The others have wrong capital letters, a missing semicolon, or missing quotes.' },
        { t: 'order', q: 'Arrange the lines into a program that prints <code>Hello</code>.', lines: ['public class Main {', '    public static void main(String[] args) {', '        System.out.println("Hello");', '    }', '}'], explain: 'Class, then main, then the statement, then close main, then close the class.' },
        { t: 'code', q: 'Write a program that prints exactly: <code>Welcome to JavaPath</code>. No input is needed.', qAr: 'اطبع الجملة كما هي تماماً.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // write your statement here
    }
}
`, tests: [{ stdin: '', expected: 'Welcome to JavaPath' }], solution: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to JavaPath");
    }
}
`, hint: 'Use one <code>System.out.println("...");</code> statement.', explain: 'One println statement prints the line.' }
      ]
    },
    {
      title: 'Printing: print, println and escape sequences',
      titleAr: 'الطباعة: print وprintln ورموز الهروب',
      minutes: 25,
      body: [
        { type: 'h', en: 'println moves to a new line, print does not' },
        { type: 'p', en: 'Programs talk to people by printing. Java has two ways. <code>println</code> prints the text and then goes to the <b>next line</b>. <code>print</code> prints the text and <b>stays</b> on the same line.',
          ar: 'println تطبع ثم تنزل سطراً، أما print فتبقى في السطر نفسه.' },
        { type: 'analogy', title: 'Typing on a keyboard', en: '<code>println</code> is like typing your text and then pressing Enter. <code>print</code> is like typing your text and just continuing to type next to it.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
        System.out.println("World");
    }
}
`, out: J`
Hello
World
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['System.out.println("Hello");', 'Print <code>Hello</code>, then move to a new line.'],
          ['System.out.println("World");', 'Print <code>World</code> on the new line.']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.print("Hello ");
        System.out.print("World");
    }
}
`, out: 'Hello World' },
        { type: 'p', en: 'See how both words are on one line. Also look at the space after <code>Hello</code> inside the quotes. Without it you would see <code>HelloWorld</code>.', ar: 'المسافة داخل علامات الاقتباس تظهر في الناتج.' },
        { type: 'check', q: 'What does this print? <code>System.out.print("A"); System.out.print("B");</code>', options: ['AB on one line', 'A and B on two lines', 'Nothing', 'An error'], answer: 0, explain: 'print does not move to a new line.', ar: 'AB في سطر واحد.' },
        { type: 'h', en: 'An empty println' },
        { type: 'p', en: '<code>System.out.println();</code> with nothing inside just ends the current line. You can use it to finish a line that you started with <code>print</code>, or to leave an empty line.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.print("Riyadh");
        System.out.println();
        System.out.println("Jeddah");
    }
}
`, out: J`
Riyadh
Jeddah
` },
        { type: 'h', en: 'Escape sequences: special characters in text' },
        { type: 'p', en: 'Some characters are hard to type inside quotes. For example, how do you print a double quote? Java uses a backslash <code>\\</code> followed by a letter. This pair is called an <b>escape sequence</b>.' },
        { type: 'table', head: ['Write this', 'You get'], rows: [
          ['<code>\\n</code>', 'A new line'],
          ['<code>\\t</code>', 'A tab (a wide space)'],
          ['<code>\\"</code>', 'A double quote character'],
          ['<code>\\\\</code>', 'One backslash']
        ] },
        { type: 'analogy', title: 'A secret sign inside the text', en: 'Think of <code>\\n</code> as a note to the printer: "press Enter here". The backslash says "the next letter is special, not normal text".' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Line one\nLine two");
        System.out.println("She said \"Hi\"");
    }
}
`, out: J`
Line one
Line two
She said "Hi"
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['"Line one\\nLine two"', 'The <code>\\n</code> breaks the line, so there are two lines on the screen.'],
          ['"She said \\"Hi\\""', 'Each <code>\\"</code> prints a quote mark instead of ending the text.']
        ], ar: 'n\\ سطر جديد، و "\\ تطبع علامة اقتباس.' },
        { type: 'check', q: 'Which escape sequence starts a new line?', options: ['\\n', '\\t', '\\"', '\\\\'], answer: 0, explain: '\\n is the new line sequence.', ar: 'n\\' },
        { type: 'steps', title: 'Print a small menu', problem: 'Print a coffee menu in three lines using one println with escape sequences, then another line.',
          steps: [
            { en: 'Start with the first item.', code: 'System.out.println("Coffee\\t8 riyals");' },
            { en: 'The <code>\\t</code> puts a tab between the name and the price.' },
            { en: 'Add a second item with <code>\\n</code> to start a new line inside the same text.', code: 'System.out.println("Tea\\t5 riyals\\nJuice\\t9 riyals");' },
            { en: 'Finish with a quote mark example: <code>\\"</code>.', code: 'System.out.println("Today: \\"Special\\"");' },
            { en: 'The whole program is below.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Coffee\t8 riyals");
        System.out.println("Tea\t5 riyals\nJuice\t9 riyals");
        System.out.println("Today: \"Special\"");
    }
}
`, out: 'Coffee\t8 riyals\nTea\t5 riyals\nJuice\t9 riyals\nToday: "Special"', ar: 'نستخدم t\\ للمسافة الكبيرة و n\\ لسطر جديد.' },
        { type: 'note', kind: 'warn', en: 'The backslash <code>\\</code> only works inside quotes in a string. A forward slash <code>/</code> is something else and does not make a new line.' }
      ],
      mistakes: [
        { title: 'Using print and expecting a new line', en: '<code>print</code> never moves to the next line.', code: 'System.out.print("A");\nSystem.out.print("B");   // prints AB' },
        { title: 'Using a forward slash for new line', en: 'Use <code>\\n</code> (backslash), not <code>/n</code>.', code: 'System.out.println("A/nB");' },
        { title: 'Typing printIn with a capital i', en: 'The word is <code>println</code> (lowercase L at the end of "print" + "ln").', code: 'System.out.printIn("Hi");' },
        { title: 'Quote mark inside text without escaping', en: 'A plain quote ends the text early. Write <code>\\"</code> instead.', code: 'System.out.println("She said "Hi"");' }
      ],
      remember: ['<code>println</code> prints then goes to a new line.', '<code>print</code> prints and stays on the same line.', '<code>println()</code> alone ends the line.', '<code>\\n</code> new line, <code>\\t</code> tab, <code>\\"</code> quote, <code>\\\\</code> backslash.', 'Text goes inside <b>double quotes</b>.'],
      rememberAr: 'println تنزل سطراً بعد الطباعة، وprint لا تنزل. وn\\ سطر جديد، و"\\ علامة اقتباس.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hi");
        System.out.println("Sara");
    }
}
`, answer: 'Hi\nSara', explain: 'Two println statements make two lines.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.print("Hi ");
        System.out.print("Sara");
    }
}
`, answer: 'Hi Sara', explain: 'print stays on the same line.' },
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
`, answer: 'AB\nCD\nE', explain: 'A and B share a line; C and D share a line (ended by the empty println); E is alone.' },
        { t: 'mcq', q: 'Which statement prints a double quote character inside text?', options: ['<code>System.out.println("\\"");</code>', '<code>System.out.println("/"");</code>', '<code>System.out.println(""");</code>', '<code>System.out.println("quote");</code>'], answer: 0, explain: 'Use \\" inside the quotes.' },
        { t: 'fill', q: 'Complete the code so that <code>Amal</code> is printed and then the cursor moves to the next line.', code: J`
System.out.___("Amal");
`, answers: ['println'], explain: 'println ends the line.' },
        { t: 'output', q: 'What does this code print?', code: J`
System.out.println("Name:\nOmar");
System.out.println("Say \"hi\"");
`, answer: 'Name:\nOmar\nSay "hi"', explain: '\\n breaks the line and \\" prints a quote.' },
        { t: 'order', q: 'Order the statements so the output is <code>Hello</code> then <code>Bye</code> on separate lines.', lines: ['System.out.println("Hello");', 'System.out.println("Bye");'], explain: 'Statements run from top to bottom.' },
        { t: 'code', q: 'Print these three lines exactly (no input):<br><code>Name: Ahmed</code><br><code>Major: Computer Science</code><br><code>Language: Java</code>', qAr: 'اطبع الأسطر الثلاثة كما هي.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // write your statements here
    }
}
`, tests: [{ stdin: '', expected: 'Name: Ahmed\nMajor: Computer Science\nLanguage: Java' }], solution: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Name: Ahmed");
        System.out.println("Major: Computer Science");
        System.out.println("Language: Java");
    }
}
`, hint: 'One println per line.', explain: 'Three println statements print three lines.' }
      ]
    },
    {
      title: 'Text, calculations and comments',
      titleAr: 'النص والحسابات والتعليقات',
      minutes: 25,
      body: [
        { type: 'h', en: 'Text in quotes versus a calculation' },
        { type: 'p', en: 'Java can also be your calculator. The rule is simple: what is inside double quotes is printed <b>exactly as written</b>. What is <b>not</b> in quotes is worked out first, and the answer is printed.',
          ar: 'ما بين علامتي الاقتباس يُطبع كما هو، وما بدونهما يُحسب.' },
        { type: 'analogy', title: 'A sign versus a calculator', en: 'Quotes turn your words into a sign that the printer copies. Without quotes, you are using a calculator: the machine works out the answer first.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("3 + 4");
        System.out.println(3 + 4);
    }
}
`, out: J`
3 + 4
7
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['System.out.println("3 + 4");', 'In quotes: it is text, so it prints <code>3 + 4</code> exactly.'],
          ['System.out.println(3 + 4);', 'No quotes: Java calculates 3 + 4 and prints <code>7</code>.']
        ], ar: 'بين الاقتباس: نص. بدون اقتباس: حساب.' },
        { type: 'check', q: 'What does <code>System.out.println(2 + 5);</code> print?', options: ['7', '2 + 5', '25', 'An error'], answer: 0, explain: 'No quotes, so Java calculates 2 + 5 = 7.', ar: '7' },
        { type: 'h', en: 'Joining text and numbers with +' },
        { type: 'p', en: 'The <code>+</code> sign also joins text to a value. This lets you write a sentence with a calculated number inside it. Put the calculation in <b>parentheses</b> so Java does it first.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Total = " + (3 + 4));
    }
}
`, out: 'Total = 7' },
        { type: 'lines', rows: [
          ['"Total = "', 'A piece of text (note the space at the end).'],
          ['+', 'Join the text to what comes next.'],
          ['(3 + 4)', 'Parentheses: calculate this first, giving 7.']
        ] },
        { type: 'note', kind: 'exam', en: 'Without parentheses, <code>"Total = " + 3 + 4</code> prints <code>Total = 34</code>, because Java goes left to right and keeps joining text. Use parentheses!', ar: 'بدون أقواس يلصق الأرقام كنص: 34.' },
        { type: 'check', q: 'What does <code>System.out.println("Sum: " + (1 + 2));</code> print?', options: ['Sum: 3', 'Sum: 12', 'Sum: 1 + 2', 'An error'], answer: 0, explain: 'The parentheses make Java add first: 3.', ar: '3' },
        { type: 'h', en: 'Comments: notes for people' },
        { type: 'p', en: 'A <b>comment</b> is a note in the code for human readers. The compiler skips it completely. Comments explain <i>why</i> a line exists, which helps you and your friends read the code later.',
          ar: 'التعليق ملاحظة للقارئ يتجاهلها المترجم.' },
        { type: 'analogy', title: 'A sticky note on a recipe', en: 'A sticky note on a recipe saying "use less salt" does not change the dish. It only helps the next cook. A comment does the same for code.' },
        { type: 'code', code: J`
// A line comment: from // to the end of the line

/* A block comment
   can use several lines */
` },
        { type: 'lines', rows: [
          ['// A line comment', 'Everything after <code>//</code> on that line is ignored.'],
          ['/* ... */', 'Everything between <code>/*</code> and <code>*/</code> is ignored, even over many lines.']
        ] },
        { type: 'check', q: 'What does the compiler do with a comment?', options: ['Ignores it', 'Prints it', 'Runs it', 'Reports an error'], answer: 0, explain: 'Comments are only for people.', ar: 'يتجاهلها.' },
        { type: 'steps', title: 'Print a small bill', problem: 'Print the price of 2 coffees at 8 riyals each, with a comment explaining the line.',
          steps: [
            { en: 'Plan the output: <code>Price: 16 riyals</code>. The number should be <b>calculated</b>, not typed.' },
            { en: 'Write the text part, then <code>+</code>.', code: 'System.out.println("Price: " + ' },
            { en: 'Add the calculation in parentheses.', code: 'System.out.println("Price: " + (2 * 8) + " riyals");' },
            { en: 'Add a comment above the line to explain it.', code: '// 2 coffees x 8 riyals' },
            { en: 'The complete program:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        // 2 coffees x 8 riyals
        System.out.println("Price: " + (2 * 8) + " riyals");
    }
}
`, out: 'Price: 16 riyals', ar: 'النص بين اقتباس، والحساب بين أقواس، والتعليق للقارئ.' }
      ],
      mistakes: [
        { title: 'Putting a calculation in quotes', en: 'This prints the words, not the answer.', code: 'System.out.println("3 + 4");   // prints 3 + 4' },
        { title: 'Forgetting parentheses after text', en: 'This prints 34, not 7.', code: 'System.out.println("Sum: " + 3 + 4);' },
        { title: 'Not closing a block comment', en: 'A comment that starts with <code>/*</code> must end with <code>*/</code>.', code: '/* my note' },
        { title: 'Using HTML-style comments', en: 'Java does not use the HTML comment style.', code: '<!-- note -->' }
      ],
      remember: ['In quotes = printed as text. Not in quotes = calculated.', '<code>+</code> joins text to a value.', 'Put calculations in <b>parentheses</b> after text.', '<code>//</code> is a line comment; <code>/* */</code> is a block comment.', 'The compiler ignores comments.'],
      rememberAr: 'بين الاقتباس نص وبدونه حساب. استخدم الأقواس بعد النص، والتعليقات تُتجاهل.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
System.out.println("4 + 6");
`, answer: '4 + 6', explain: 'It is inside quotes, so it is text.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println(4 + 6);
`, answer: '10', explain: 'No quotes, so it is calculated.' },
        { t: 'output', q: 'What is printed?', code: J`
System.out.println("Sum = " + (4 + 6));
`, answer: 'Sum = 10', explain: 'The parentheses add first.' },
        { t: 'mcq', q: 'Which is <b>not</b> a valid Java comment?', options: ['<code>// total price</code>', '<code>/* total price */</code>', '<code>&lt;!-- total price --&gt;</code>', '<code>/** total price */</code>'], answer: 2, explain: 'The HTML style is not valid in Java.' },
        { t: 'fill', q: 'Complete so the line prints <code>Total: 9</code>.', code: J`
System.out.println("Total: " ___ (4 + 5));
`, answers: ['+'], explain: '+ joins the text and the number.' },
        { t: 'output', q: 'Careful! What is printed?', code: J`
System.out.println("5 + 3 = " + 5 + 3);
System.out.println("5 + 3 = " + (5 + 3));
System.out.println(5 + 3 + " apples");
`, answer: '5 + 3 = 53\n5 + 3 = 8\n8 apples', explain: 'Left to right: text joins digits "5" and "3". Parentheses add first. In the last line 5 + 3 happens before the text is reached.' },
        { t: 'code', q: 'Print <code>Total hours: 7</code>, where 7 is <b>calculated</b> as <code>2 + 2 + 3</code>. No input.', qAr: 'احسب المجموع داخل البرنامج.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // print the line here
    }
}
`, tests: [{ stdin: '', expected: 'Total hours: 7' }], solution: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Total hours: " + (2 + 2 + 3));
    }
}
`, hint: 'Use parentheses around the sum.', explain: 'The parentheses make Java add the numbers before joining.' }
      ]
    },
    {
      title: 'The three kinds of errors',
      titleAr: 'أنواع الأخطاء الثلاثة',
      minutes: 25,
      body: [
        { type: 'h', en: 'Errors are normal' },
        { type: 'p', en: 'Every programmer makes mistakes, every day. Mistakes are called <b>errors</b> or <b>bugs</b>. Finding and fixing them is part of the job. If you learn the three kinds, you will know where to look.',
          ar: 'الأخطاء أمر طبيعي. تعلّم أنواعها الثلاثة لتعرف أين تبحث.' },
        { type: 'analogy', title: 'Three problems with a trip', en: 'You plan a trip to Riyadh. (1) You write the wrong address on the ticket, so you cannot even leave. (2) You leave, but the road is closed and you stop. (3) You arrive, but at the wrong place, because your directions were wrong. These are the three kinds of errors.' },
        { type: 'table', head: ['Kind', 'When it appears', 'Trip picture'], rows: [
          ['<b>Syntax error</b>', 'Before the program runs (compile time)', 'Wrong ticket: you cannot leave'],
          ['<b>Runtime error</b>', 'While the program runs; it crashes', 'Road closed: you stop on the way'],
          ['<b>Logic error</b>', 'The program finishes, but the answer is wrong', 'Wrong directions: you arrive at the wrong place']
        ] },
        { type: 'h', en: 'Syntax errors' },
        { type: 'p', en: 'A <b>syntax error</b> breaks the grammar rules of Java: a missing semicolon, a wrong capital letter, a missing brace. The compiler finds it and refuses to make the <code>.class</code> file. The good news: it tells you the line.',
          ar: 'الخطأ النحوي يكسر قواعد اللغة، ويكتشفه المترجم قبل التشغيل.' },
        { type: 'code', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Total: 100")
    }
}
` },
        { type: 'lines', title: 'Find the error', rows: [
          ['System.out.println("Total: 100")', 'There is no <code>;</code> at the end. The compiler says <i>\';\' expected</i>.']
        ] },
        { type: 'check', q: 'A student writes <code>system.out.println("Hi");</code>. What kind of error is it?', options: ['Syntax error', 'Runtime error', 'Logic error', 'No error'], answer: 0, explain: 'Wrong capital letter breaks the grammar. The compiler finds it.', ar: 'خطأ نحوي.' },
        { type: 'h', en: 'Runtime errors' },
        { type: 'p', en: 'A <b>runtime error</b> happens after the program starts. The code is grammatically correct, but it asks the computer to do something impossible, like dividing by zero. The program crashes and Java prints an error message.' },
        { type: 'code', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(10 / 0);
    }
}
` },
        { type: 'p', en: 'This compiles, but when it runs, Java stops with <code>ArithmeticException: / by zero</code>.', ar: 'تُترجم لكنها تتوقف عند التشغيل بسبب القسمة على صفر.' },
        { type: 'check', q: 'A program compiles but crashes with "/ by zero". Which kind of error?', options: ['Syntax', 'Runtime', 'Logic', 'None'], answer: 1, explain: 'It crashes while running.', ar: 'خطأ وقت التشغيل.' },
        { type: 'h', en: 'Logic errors' },
        { type: 'p', en: 'A <b>logic error</b> is the hardest one. The program runs fine, with no message, but the answer is <b>wrong</b>. The computer did exactly what you told it, but you told it the wrong thing. Here we want the average of 90 and 80.',
          ar: 'الخطأ المنطقي لا تظهر له رسالة لكن النتيجة خاطئة.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(90 + 80 / 2);
        System.out.println((90 + 80) / 2);
    }
}
`, out: J`
130
85
` },
        { type: 'lines', rows: [
          ['90 + 80 / 2', 'Division comes before addition, so this is 90 + 40 = 130. <b>Wrong</b> average.'],
          ['(90 + 80) / 2', 'The parentheses add first: 170 / 2 = 85. <b>Correct</b>.']
        ] },
        { type: 'analogy', title: 'The calculator never argues', en: 'If you press the wrong buttons, a calculator happily shows a wrong answer. It cannot know what you meant. Only you can check the answer.' },
        { type: 'check', q: 'A program prints 130 but the correct answer is 85. No messages. Which error?', options: ['Syntax', 'Runtime', 'Logic', 'Compiler'], answer: 2, explain: 'It runs without crashing but gives a wrong result.', ar: 'خطأ منطقي.' },
        { type: 'steps', title: 'Fix a program step by step', problem: 'This program should print the average of 70 and 90, but the result is wrong. Find the kind of error and fix it.',
          steps: [
            { en: 'Run it. It prints <code>115</code>. No message, so it is not syntax or runtime.', code: 'System.out.println(70 + 90 / 2);' },
            { en: 'The correct answer is 80, so it is a <b>logic error</b>.' },
            { en: 'Work through the rules: division first: 90 / 2 = 45, then 70 + 45 = 115.' },
            { en: 'Fix: add parentheses so the addition happens first.', code: 'System.out.println((70 + 90) / 2);' },
            { en: 'The fixed program prints 80.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println((70 + 90) / 2);
    }
}
`, out: '80', ar: 'نقرأ النتيجة ونقارنها بالمتوقع ثم نصلح التعبير.' },
        { type: 'note', kind: 'warn', en: 'Read the <b>first</b> compiler message first. One missing brace can create many messages. Fix the first and run again.' }
      ],
      mistakes: [
        { title: 'Reading the last error first', en: 'Start with the first error message; the later ones are often caused by it.' },
        { title: 'Calling a wrong answer a "syntax error"', en: 'If the program runs and the answer is wrong, it is a <b>logic</b> error.' },
        { title: 'Expecting the compiler to find runtime errors', en: 'Dividing by zero compiles. It only fails when it runs.', code: 'System.out.println(10 / 0);' },
        { title: 'Forgetting the first error often hides others', en: 'After you fix one error, compile again. New messages may appear.' }
      ],
      remember: ['<b>Syntax error</b>: broken grammar, found by the compiler, no <code>.class</code> file.', '<b>Runtime error</b>: crashes while running.', '<b>Logic error</b>: runs, but gives a wrong answer.', 'Read the <b>first</b> error message first.', 'Always compare the output with what you expected.'],
      rememberAr: 'نحوي: يكتشفه المترجم. وقت التشغيل: يتوقف البرنامج. منطقي: النتيجة خاطئة بلا رسالة.',
      practice: [
        { t: 'mcq', q: 'A student forgets the semicolon after a <code>println</code>. Which error?', options: ['Syntax error', 'Runtime error', 'Logic error', 'It is fine'], answer: 0, explain: 'Missing semicolons are syntax errors.' },
        { t: 'mcq', q: 'The program compiles but stops with <code>/ by zero</code>. Which error?', options: ['Syntax error', 'Runtime error', 'Logic error', 'Compile error'], answer: 1, explain: 'It crashed while running.' },
        { t: 'mcq', q: 'The program prints the wrong total with no message. Which error?', options: ['Syntax', 'Runtime', 'Logic', 'None'], answer: 2, explain: 'Wrong result, no crash: logic error.' },
        { t: 'output', q: 'What do these two lines print?', code: J`
System.out.println(70 + 90 / 2);
System.out.println((70 + 90) / 2);
`, answer: '115\n80', explain: 'Division first (45), then 70 + 45 = 115. With parentheses: 160 / 2 = 80.' },
        { t: 'fill', q: 'Fix the two syntax errors so the line prints <code>Fixed!</code>.', code: J`
System.out.___("Fixed!")___
`, answers: ['println', ';'], explain: 'println and a final semicolon.' },
        { t: 'order', q: 'Order the steps for fixing a program that does not compile.', lines: ['Read the first error message', 'Go to the line it points to', 'Fix that one problem', 'Compile again'], explain: 'Always fix one thing and compile again.' },
        { t: 'mcq', q: 'Which kind of error does the compiler <b>not</b> find for you?', options: ['Missing semicolon', 'Misspelled println', 'A wrong formula', 'Missing brace'], answer: 2, explain: 'A wrong formula is a logic error; the compiler cannot know what you meant.' }
      ]
    },
    {
      title: 'Using the NetBeans IDE',
      titleAr: 'استخدام بيئة NetBeans',
      minutes: 25,
      body: [
        { type: 'h', en: 'Why use an IDE?' },
        { type: 'p', en: 'Typing <code>javac</code> and <code>java</code> every time is slow. An <b>IDE</b> (Integrated Development Environment) does it for you with one click. It also underlines your mistakes in red while you type. We use <b>NetBeans</b>.',
          ar: 'بيئة التطوير تجمع المحرر والمترجم والمشغّل في برنامج واحد.' },
        { type: 'analogy', title: 'A kitchen with everything in one place', en: 'You could cook with tools scattered across the house. An IDE is a kitchen where the stove, knives and sink are together, so cooking is faster.' },
        { type: 'h', en: 'Create and run a project' },
        { type: 'list', items: [
          '<b>Create:</b> File &gt; New Project &gt; Java &gt; Java Application. Give it a name. NetBeans makes a class with a <code>main</code> method.',
          '<b>Write:</b> type your statements inside <code>main</code>.',
          '<b>Run:</b> press <b>F6</b> or click the green arrow. Output appears in the <i>Output</i> window at the bottom.'
        ], ar: 'مشروع جديد، ثم اكتب الشيفرة، ثم F6 للتشغيل.' },
        { type: 'check', q: 'Which key runs the project in NetBeans?', options: ['F6', 'F1', 'Esc', 'Tab'], answer: 0, explain: 'F6 runs the project.', ar: 'F6' },
        { type: 'h', en: 'Red underlines' },
        { type: 'p', en: 'If you see a red line under your code, NetBeans found a syntax error. Move the mouse over it and read the message. A red icon in the left margin also shows the line.' },
        { type: 'check', q: 'What does a red underline usually mean?', options: ['A syntax error', 'The program is perfect', 'A comment', 'A slow computer'], answer: 0, explain: 'The IDE found a problem.', ar: 'خطأ نحوي.' },
        { type: 'h', en: 'The debugger: watch the program think' },
        { type: 'p', en: 'For logic errors, no red line appears. A <b>debugger</b> lets you pause the program and run it one line at a time. A <b>breakpoint</b> is a marker where the program pauses.' },
        { type: 'analogy', title: 'Pausing a film', en: 'When you watch a film frame by frame, you can see exactly when something goes wrong. The debugger pauses your program so you can see what happens at each line.' },
        { type: 'list', items: [
          'Click a line number to set a <b>breakpoint</b> (a red dot).',
          'Choose <b>Debug Project</b>. The program stops at the red dot.',
          'Press <b>F8</b> (Step Over) to run one line at a time.',
          'Look at the <i>Variables</i> window to check each value.'
        ], ar: 'نقطة التوقف ثم F8 لتنفيذ سطر سطراً.' },
        { type: 'check', q: 'What is a breakpoint?', options: ['A line where the debugger pauses', 'A syntax error', 'A comment', 'A kind of output'], answer: 0, explain: 'Breakpoints pause the program.', ar: 'سطر يتوقف عنده البرنامج.' },
        { type: 'steps', title: 'Your first NetBeans session', problem: 'Make NetBeans print a greeting.',
          steps: [
            { en: 'Open NetBeans and choose <b>File &gt; New Project</b>. Pick <i>Java Application</i>.' },
            { en: 'Name the project <code>Hello</code> and finish. A <code>main</code> method appears.' },
            { en: 'Inside <code>main</code> type this statement.', code: 'System.out.println("Hello from NetBeans");' },
            { en: 'Press <b>F6</b>. Look at the Output window.' },
            { en: 'The same program on this site:' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from NetBeans");
    }
}
`, out: 'Hello from NetBeans', ar: 'مشروع جديد، اكتب، ثم F6.' },
        { type: 'note', kind: 'tip', en: 'Use the debugger for logic errors. Instead of guessing, pause and check each value.' }
      ],
      mistakes: [
        { title: 'Ignoring red underlines', en: 'Fix red marks before you press Run.' },
        { title: 'Choosing the wrong project type', en: 'Choose <i>Java Application</i>. Other types do not give you a main method.' },
        { title: 'Looking for output in the wrong place', en: 'Output appears in the <i>Output</i> window at the bottom.' }
      ],
      remember: ['An <b>IDE</b> combines editor, compiler, runner and debugger.', '<b>F6</b> runs the project.', 'Red underlines show syntax errors.', 'A <b>breakpoint</b> pauses the program; <b>F8</b> steps one line.'],
      rememberAr: 'F6 للتشغيل، والخط الأحمر يعني خطأ، ونقطة التوقف مع F8 لتتبع البرنامج.',
      practice: [
        { t: 'mcq', q: 'What does IDE stand for?', options: ['Integrated Development Environment', 'Internet Data Engine', 'Input Device Editor', 'Java Data Entry'], answer: 0, explain: 'IDE = Integrated Development Environment.' },
        { t: 'mcq', q: 'Which key runs your project?', options: ['F6', 'F8', 'Tab', 'Esc'], answer: 0, explain: 'F6 runs the project.' },
        { t: 'mcq', q: 'Which tool pauses a program so you can check values?', options: ['Debugger', 'Printer', 'Comment', 'RAM'], answer: 0, explain: 'A debugger pauses and steps.' },
        { t: 'fill', q: 'Complete the sentences.', code: J`
A ___ is a marker where the debugger pauses.
Press ___ to run one line at a time.
`, answers: ['breakpoint', ['F8', 'f8']], explain: 'Breakpoint and F8 (Step Over).' },
        { t: 'order', q: 'Order the steps to run a program in NetBeans.', lines: ['Create a Java Application project', 'Type your code in main', 'Press F6', 'Read the Output window'], explain: 'Create, write, run, read.' },
        { t: 'mcq', q: 'The IDE shows a red underline. What should you do?', options: ['Read the message and fix the syntax error', 'Ignore it', 'Restart the computer', 'Delete the project'], answer: 0, explain: 'Red underlines point to errors.' },
        { t: 'output', q: 'What would the Output window show?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
        System.out.println("NetBeans");
    }
}
`, answer: 'Hello\nNetBeans', explain: 'Two println statements make two lines.' }
      ]
    },
    {
      title: 'Problem solving: algorithms, pseudocode and flowcharts',
      titleAr: 'حل المسائل: الخوارزميات والشيفرة الزائفة والمخططات الانسيابية',
      minutes: 30,
      body: [
        { type: 'h', en: 'Think first, code second' },
        { type: 'p', en: 'Beginners often start typing code immediately and get stuck. Good programmers first make a <b>plan</b>. A plan with clear steps is called an <b>algorithm</b>.',
          ar: 'الخوارزمية خطة بخطوات واضحة، نخطط قبل أن نكتب الشيفرة.' },
        { type: 'analogy', title: 'A route on the map', en: 'Before you drive from Riyadh to Jeddah, you look at the route. An algorithm is the route. The code is the driving.' },
        { type: 'check', q: 'What is an algorithm?', options: ['A clear step-by-step plan', 'A kind of error', 'A hardware part', 'A comment'], answer: 0, explain: 'An algorithm is a plan with steps.', ar: 'خطة بخطوات.' },
        { type: 'h', en: 'Pseudocode: a plan in plain words' },
        { type: 'p', en: '<b>Pseudocode</b> means "almost code". You write the steps in short, clear English. There are no strict rules, but each line should be one small action.' },
        { type: 'code', code: J`
Start
Get the width and the height
area = width * height
Display area
End
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['Start', 'The plan begins.'],
          ['Get the width and the height', '<b>Input</b>: the data we need.'],
          ['area = width * height', '<b>Processing</b>: the calculation.'],
          ['Display area', '<b>Output</b>: show the result.'],
          ['End', 'The plan finishes.']
        ], ar: 'إدخال ثم معالجة ثم إخراج.' },
        { type: 'check', q: 'In the plan above, which step is <b>input</b>?', options: ['Get the width and the height', 'area = width * height', 'Display area', 'End'], answer: 0, explain: 'Getting data is input.', ar: 'الإدخال.' },
        { type: 'h', en: 'Flowcharts: a plan as a picture' },
        { type: 'p', en: 'A <b>flowchart</b> draws the same plan with shapes joined by arrows. Each shape has a meaning.' },
        { type: 'table', head: ['Shape', 'Meaning'], rows: [
          ['Oval', 'Start or End'],
          ['Parallelogram', 'Input or Output (read, display)'],
          ['Rectangle', 'Process (a calculation)'],
          ['Diamond', 'Decision (a yes/no question)'],
          ['Arrow', 'Direction of the flow']
        ] },
        { type: 'analogy', title: 'Road signs', en: 'Road signs use shapes so everyone understands them without reading. Flowchart shapes work the same way: a diamond means a question, like a fork in the road.' },
        { type: 'check', q: 'Which flowchart shape shows a yes/no decision?', options: ['Diamond', 'Oval', 'Rectangle', 'Parallelogram'], answer: 0, explain: 'The diamond is for decisions.', ar: 'المعين.' },
        { type: 'h', en: 'From the plan to a program' },
        { type: 'p', en: 'You have not learned how to read keyboard input yet, so we use fixed numbers to follow the same plan. In Unit 2 you will read the numbers from the user.' },
        { type: 'steps', title: 'Area of a rectangle', problem: 'Find the area of a rectangle with width 5 and height 3.',
          steps: [
            { en: '<b>Understand</b>: the area is width times height.' },
            { en: '<b>Plan</b> in pseudocode: Start, use width 5 and height 3, area = width * height, display area, End.' },
            { en: '<b>Translate</b> the processing line into Java.', code: '5 * 3' },
            { en: '<b>Translate</b> the output line, joining text and the calculation.', code: 'System.out.println("Area = " + (5 * 3));' },
            { en: '<b>Test</b>: 5 x 3 is 15, so we expect <code>Area = 15</code>.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        // width = 5, height = 3
        System.out.println("Width: 5, Height: 3");
        System.out.println("Area = " + (5 * 3));
    }
}
`, out: 'Width: 5, Height: 3\nArea = 15', ar: 'نفهم ثم نخطط ثم نترجم إلى جافا ثم نختبر.' },
        { type: 'note', kind: 'tip', en: 'Always test with an example you can calculate in your head, then compare it with the output.' }
      ],
      mistakes: [
        { title: 'Starting to code without a plan', en: 'Write 4-6 pseudocode lines first.' },
        { title: 'Putting two actions in one pseudocode line', en: 'One line, one action. It is easier to translate.' },
        { title: 'Using the wrong flowchart shape', en: 'A calculation is a rectangle, not a diamond.' },
        { title: 'Forgetting to test', en: 'Check your answer with a simple example.' }
      ],
      remember: ['An <b>algorithm</b> is a step-by-step plan.', '<b>Pseudocode</b> writes the plan in plain words.', '<b>Flowcharts</b> draw it: oval, parallelogram, rectangle, diamond, arrow.', 'Plan: input, process, output.', 'Test with a simple example.'],
      rememberAr: 'خطط بالشيفرة الزائفة أو المخطط الانسيابي، ثم اكتب البرنامج واختبره.',
      practice: [
        { t: 'mcq', q: 'In a flowchart, which shape is used for a decision such as <i>Is the mark at least 60?</i>', options: ['Oval', 'Rectangle', 'Parallelogram', 'Diamond'], answer: 3, explain: 'A diamond has yes/no exits.' },
        { t: 'mcq', q: 'Which shape shows the start of a flowchart?', options: ['Oval', 'Diamond', 'Arrow', 'Rectangle'], answer: 0, explain: 'Ovals mark start and end.' },
        { t: 'mcq', q: 'Which flowchart shape is used for "Display the total"?', options: ['Rectangle', 'Diamond', 'Parallelogram', 'Oval'], answer: 2, explain: 'Input and output use a parallelogram.' },
        { t: 'order', q: 'Order the pseudocode steps for the average of three exam marks.', lines: ['Start', 'Read mark1, mark2, mark3', 'sum = mark1 + mark2 + mark3', 'average = sum / 3', 'Display average', 'End'], explain: 'Input first, then processing, then output.' },
        { t: 'fill', q: 'Complete the pseudocode.', code: J`
Start
Read the price
total = price * 2
___ total
End
`, answers: [['Display', 'display', 'Show', 'Print']], explain: 'The last step shows the result.' },
        { t: 'output', q: 'This plan prints the area of a rectangle with width 4 and height 6. What does the program print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Area = " + (4 * 6));
    }
}
`, answer: 'Area = 24', explain: '4 x 6 = 24.' },
        { t: 'code', q: 'Follow this plan and print the line <code>Total: 24</code>: 3 cups of coffee at 8 riyals each. Calculate the total in the program. No input.', qAr: 'احسب 3 × 8 داخل البرنامج.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // print the total here
    }
}
`, tests: [{ stdin: '', expected: 'Total: 24' }], solution: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Total: " + (3 * 8));
    }
}
`, hint: 'Use text, plus, and the calculation in parentheses.', explain: '3 * 8 = 24, joined to the text.' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'What does the CPU do?', options: ['Carries out instructions', 'Stores files for ever', 'Shows pictures', 'Prints pages'], answer: 0, explain: 'The CPU is the brain: it carries out instructions.' },
    { t: 'mcq', q: 'Which of these is software?', options: ['A mouse', 'A web browser', 'A screen', 'A USB drive'], answer: 1, explain: 'A browser is a program.' },
    { t: 'mcq', q: 'What does the JVM execute?', options: ['Java source code (.java)', 'Bytecode (.class)', 'Pseudocode', 'HTML files'], answer: 1, explain: 'The JVM runs bytecode.' },
    { t: 'mcq', q: 'Which is the correct header of the main method?', options: ['<code>public void static main(String[] args)</code>', '<code>public static void Main(String[] args)</code>', '<code>public static void main(String[] args)</code>', '<code>static public main(String args)</code>'], answer: 2, explain: 'Java is case-sensitive; the exact form is public static void main(String[] args).' },
    { t: 'output', q: 'What is printed?', code: J`
System.out.print("CS");
System.out.println("101");
System.out.print("Java");
System.out.println();
System.out.println("Code");
`, answer: 'CS101\nJava\nCode', explain: 'print stays on the line; println moves to the next.' },
    { t: 'output', q: 'What is printed?', code: J`
System.out.println("Riyadh\nJeddah");
System.out.println("\"Dammam\"");
`, answer: 'Riyadh\nJeddah\n"Dammam"', explain: '\\n breaks the line, \\" prints a quote.' },
    { t: 'output', q: 'Careful with <code>+</code>. What is printed?', code: J`
System.out.println("5 + 3 = " + 5 + 3);
System.out.println("5 + 3 = " + (5 + 3));
System.out.println(5 + 3 + " apples");
`, answer: '5 + 3 = 53\n5 + 3 = 8\n8 apples', explain: 'Left to right; text joins digits. Parentheses add first. In the last line the numbers are added before the text.' },
    { t: 'mcq', q: 'A program runs without any message but prints 130 when the correct total is 85. What kind of error is this?', options: ['Syntax error', 'Runtime error', 'Logic error', 'Compilation error'], answer: 2, explain: 'Wrong result without a crash is a logic error.' },
    { t: 'mcq', q: 'What does the compiler do with comments?', options: ['Prints them', 'Ignores them', 'Turns them into bytecode', 'Reports them as errors'], answer: 1, explain: 'Comments are for people.' },
    { t: 'mcq', q: 'Which of these lines will <b>not</b> compile?', options: ['<code>System.out.println("Hi");</code>', '<code>System.out.print("Hi");</code>', '<code>system.out.println("Hi");</code>', '<code>System.out.println();</code>'], answer: 2, explain: 'system with a small s is wrong.' },
    { t: 'mcq', q: 'Which flowchart shape is used for "Read the price"?', options: ['Rectangle', 'Diamond', 'Parallelogram', 'Oval'], answer: 2, explain: 'Input and output use a parallelogram.' },
    { t: 'mcq', q: 'Which statement about high-level languages is true?', options: ['The CPU runs them directly', 'They must be translated before they run', 'They consist only of 0s and 1s', 'They work on one CPU type only'], answer: 1, explain: 'The CPU only runs machine language.' }
  ],
  lab: {
    t: 'code',
    q: 'Mini project: <b>Weekly plan</b>. Write a program that prints exactly the following (no input). The last number must be <b>calculated</b> in the program with the expression <code>2 + 2 + 3</code>, not typed as 7.<br><code>CS101 Weekly Plan</code><br><code>=================</code><br><code>Sunday: Lecture (2 hours)</code><br><code>Tuesday: Lecture (2 hours)</code><br><code>Thursday: Lab (3 hours)</code><br><code>Total hours: 7</code><br><br><b>Plan:</b> (1) print the heading, (2) print the line of equals signs, (3) print the three days, (4) print the total with the calculation in parentheses.',
    qAr: 'اطبع الجدول كما هو، واحسب مجموع الساعات داخل البرنامج.',
    starter: J`
public class Main {
    public static void main(String[] args) {
        // 1. heading
        // 2. line of equals signs
        // 3. the three days
        // 4. the total
    }
}
`,
    tests: [{ stdin: '', expected: 'CS101 Weekly Plan\n=================\nSunday: Lecture (2 hours)\nTuesday: Lecture (2 hours)\nThursday: Lab (3 hours)\nTotal hours: 7' }],
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
    explain: 'Each line is one println. The parentheses make Java add the numbers before joining.'
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
    { code: J`System.out.println("Sum: " + (3 + 4));`, note: 'Join text and a calculated value; use parentheses' },
    { code: J`// line comment   /* block comment */`, note: 'Comments are ignored by the compiler' },
    { code: J`javac Main.java   then   java Main`, note: 'Compile to bytecode, then run it on the JVM' }
  ],
  glossary: [
    { term: 'Hardware', ar: 'المكونات المادية', def: 'The physical parts of a computer you can touch.' },
    { term: 'Software', ar: 'البرمجيات', def: 'Programs that tell the hardware what to do.' },
    { term: 'CPU', ar: 'وحدة المعالجة المركزية', def: 'The brain of the computer; it carries out instructions.' },
    { term: 'RAM', ar: 'الذاكرة العشوائية', def: 'Fast temporary memory for what the computer is using now.' },
    { term: 'Storage', ar: 'التخزين', def: 'Keeps files permanently, e.g. SSD or hard disk.' },
    { term: 'Input device', ar: 'جهاز إدخال', def: 'Sends data into the computer, e.g. keyboard.' },
    { term: 'Output device', ar: 'جهاز إخراج', def: 'Shows results, e.g. screen or printer.' },
    { term: 'Program', ar: 'برنامج', def: 'A list of instructions that performs a task.' },
    { term: 'Machine language', ar: 'لغة الآلة', def: 'Binary instructions (0s and 1s) that a CPU runs directly.' },
    { term: 'High-level language', ar: 'لغة عالية المستوى', def: 'A language close to English, such as Java.' },
    { term: 'Source code', ar: 'الشيفرة المصدرية', def: 'A program written in a high-level language such as Java.' },
    { term: 'Compiler', ar: 'المترجم', def: 'Translates the whole source code before it runs, e.g. javac.' },
    { term: 'Interpreter', ar: 'المفسر', def: 'Translates and runs code one line at a time.' },
    { term: 'Bytecode', ar: 'الشيفرة الوسيطة', def: 'The code in a .class file, executed by the JVM.' },
    { term: 'JVM', ar: 'آلة جافا الافتراضية', def: 'Java Virtual Machine: runs bytecode on a computer.' },
    { term: 'JDK', ar: 'حزمة تطوير جافا', def: 'Java Development Kit: the compiler, the JVM and ready-made code.' },
    { term: 'IDE', ar: 'بيئة التطوير المتكاملة', def: 'A tool such as NetBeans: editor, compiler, runner and debugger.' },
    { term: 'Class', ar: 'صنف', def: 'A container for code; every Java program has one.' },
    { term: 'Method', ar: 'دالة', def: 'A named block of statements, e.g. main.' },
    { term: 'Statement', ar: 'جملة برمجية', def: 'One complete instruction; it ends with a semicolon.' },
    { term: 'Block', ar: 'كتلة', def: 'A group of statements between braces { }.' },
    { term: 'Escape sequence', ar: 'رمز الهروب', def: 'A backslash plus a letter for a special character, e.g. \\n.' },
    { term: 'Comment', ar: 'تعليق', def: 'A note that the compiler ignores.' },
    { term: 'Syntax error', ar: 'خطأ نحوي', def: 'A grammar mistake found by the compiler.' },
    { term: 'Runtime error', ar: 'خطأ وقت التشغيل', def: 'An error that crashes a running program.' },
    { term: 'Logic error', ar: 'خطأ منطقي', def: 'The program runs but gives a wrong answer.' },
    { term: 'Debugger', ar: 'مصحح الأخطاء', def: 'A tool that pauses and steps through a program.' },
    { term: 'Breakpoint', ar: 'نقطة توقف', def: 'A marked line where the debugger pauses.' },
    { term: 'Algorithm', ar: 'خوارزمية', def: 'A step-by-step plan for solving a problem.' },
    { term: 'Pseudocode', ar: 'الشيفرة الزائفة', def: 'A plan written in plain, structured English.' },
    { term: 'Flowchart', ar: 'مخطط انسيابي', def: 'A diagram of an algorithm using shapes and arrows.' }
  ]
});
