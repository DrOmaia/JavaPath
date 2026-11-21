JP.unit({
  course: 'cs101',
  n: 1,
  title: 'Introduction to Computers, Programming and Java',
  titleAr: 'مقدمة في الحاسب والبرمجة ولغة جافا',
  intro: 'Welcome! You do not need any programming experience. In this unit you will learn, step by step, what a computer is, what a program is, and how Java turns your instructions into something the computer can run. You will write and run your first programs, meet the three kinds of errors, try an editor called NetBeans, and learn to plan a solution with pseudocode and flowcharts before you write any code. Finally, you will see how computers store numbers and text with bits, learn to write clean code, read error messages calmly, and build a printing project: a receipt, an ID card and a timetable.',
  introAr: 'أهلاً {{name}}! لا تحتاج{{g:|ين}} إلى أي خبرة سابقة. في هذه الوحدة نتعلم خطوة خطوة ما هو الحاسب وما هو البرنامج وكيف تحوّل جافا تعليماتك إلى شيء يفهمه الحاسب، ثم تكتب{{g:|ين}} أول برامجك وتتعرف{{g:|ين}} على الأخطاء وعلى NetBeans وعلى التخطيط بالخوارزميات والمخططات الانسيابية، ثم النظام الثنائي، وأسلوب البرمجة الجيد، وقراءة رسائل الأخطاء، ومشروع طباعة.',
  lessons: [
    {
      title: 'What is a computer? Hardware and software',
      titleAr: 'ما هو الحاسب؟ المكونات المادية والبرمجيات',
      minutes: 30,
      body: [
        { type: 'h', en: 'A computer follows instructions' },
        { type: 'p', en: 'You use computers every day: your phone, the bank machine, the library system. All of them do the same basic job. A computer takes in <b>data</b> (facts such as your marks), follows <b>instructions</b>, and gives out a result. Programming means writing those instructions.',
          ar: 'الحاسب يستقبل بيانات، وينفذ تعليمات، ثم يعطي نتيجة. والبرمجة هي كتابة هذه التعليمات.' },
        { type: 'analogy', title: 'A computer is like a very fast, very obedient worker', en: 'Imagine a cook who does exactly what the recipe says, never gets tired, and never uses common sense. If the recipe says "add salt" ten times, the cook adds salt ten times. A computer is the same: it follows your instructions exactly, so your instructions must be exact.',
          ar: 'الحاسب كطباخ سريع جداً ينفذ الوصفة حرفياً دون تفكير. لذلك يجب أن تكون تعليماتنا دقيقة.' },
        { type: 'check', q: 'What does a computer do with the instructions it is given?', options: ['It follows them exactly', 'It guesses what you mean', 'It ignores the ones it dislikes', 'It rewrites them'], answer: 0,
          explain: 'A computer has no common sense. It does exactly what the instructions say.', ar: 'ينفذها حرفياً.' },
        { type: 'h', en: 'Input, processing, output' },
        { type: 'p', en: 'Almost every job a computer does has the same three parts. <b>Input</b> is the data that goes in. <b>Processing</b> is the work the computer does with that data. <b>Output</b> is the result that comes out. Programmers call this the <b>IPO</b> model (Input, Processing, Output). When you can name the three parts of a job, you are already starting to think like a programmer.',
          ar: 'كل مهمة للحاسب لها ثلاثة أجزاء: إدخال، ثم معالجة، ثم إخراج.' },
        { type: 'analogy', title: 'The metro gate', en: 'You tap your metro card on the gate. The card number is the <b>input</b>. A small computer inside the gate checks your balance and takes the fare: that is the <b>processing</b>. The gate opens and the little screen shows your new balance: that is the <b>output</b>. All three parts happen in less than one second.',
          ar: 'لمس البطاقة إدخال، وخصم الأجرة معالجة، وفتح البوابة وعرض الرصيد إخراج.' },
        { type: 'table', head: ['Everyday job', 'Input', 'Processing', 'Output'], rows: [
          ['Bank machine', 'Your card and PIN', 'Check the PIN and the balance', 'Cash and a receipt'],
          ['Calculator app', 'You type <code>12 + 30</code>', 'Add the two numbers', '<code>42</code> on the screen'],
          ['Café order screen', 'The drinks you touch', 'Add up the prices', 'The total in riyals'],
          ['University portal', 'Your student ID', 'Find your courses', 'Your timetable']
        ] },
        { type: 'check', q: 'You type <code>12 + 30</code> on a calculator app and see <code>42</code>. Which part is the <b>output</b>?', options: ['<code>42</code> on the screen', 'Typing <code>12 + 30</code>', 'Adding the numbers', 'The battery'], answer: 0,
          explain: 'The output is the result that comes out: 42 on the screen. Typing is the input, and adding is the processing.', ar: 'الناتج 42 على الشاشة هو الإخراج.' },
        { type: 'h', en: 'Two sides: hardware and software' },
        { type: 'p', en: 'Every computer has two sides. <b>Hardware</b> is the physical part: things you can touch. <b>Software</b> is the set of programs that tell the hardware what to do: things you cannot touch.',
          ar: 'المكونات المادية (Hardware) تلمسها، والبرمجيات (Software) لا تلمسها.' },
        { type: 'analogy', title: 'A body and a mind', en: 'Think of a person. The body (hands, eyes, brain) is the hardware. The knowledge and the plans in the head, like "how to make Arabic coffee", are the software. A body without knowledge can do nothing useful, and knowledge without a body cannot act.' },
        { type: 'table', head: ['Hardware (you can touch it)', 'Software (you cannot touch it)'], rows: [
          ['Screen, keyboard, mouse', 'A web browser'],
          ['The phone itself', 'A chat app'],
          ['A USB drive', 'The files stored on it']
        ] },
        { type: 'check', q: 'Which one is software?', options: ['The keyboard', 'The screen', 'A calculator app', 'The mouse'], answer: 2,
          explain: 'An app is a program, so it is software. The other three are physical parts.', ar: 'التطبيق برنامج، إذن برمجيات.' },
        { type: 'p', en: 'Software has two big families. <b>System software</b> looks after the machine itself. The most important one is the <b>operating system</b>: it starts first when you switch the device on, and it manages the screen, the memory and the files. <b>Application software</b> (an <b>app</b>) does one job for <i>you</i>: a calculator, a map, a web browser, a game. Apps run on top of the operating system.',
          ar: 'نظام التشغيل يدير الجهاز نفسه، أما التطبيقات فتؤدي مهمة محددة للمستخدم.' },
        { type: 'analogy', title: 'A shopping centre and its shops', en: 'Think of a shopping centre. The building manager keeps the lights, the lifts and the doors working: that is the operating system. The shops inside (a bookshop, a café, a pharmacy) each give you one service: those are the apps. The shops cannot open without the building, but you visit the building for the shops.' },
        { type: 'h', en: 'The main parts of the hardware' },
        { type: 'p', en: 'You do not need to know every part. Learn these five. Each one has one job.' },
        { type: 'list', items: [
          '<b>CPU</b> (Central Processing Unit): the brain. It carries out the instructions one after another, very fast.',
          '<b>Memory (RAM)</b>: a fast notepad for what the computer is working on <i>right now</i>. When the power goes off, the notepad is wiped.',
          '<b>Storage</b> (SSD, hard disk, USB drive): a cupboard that keeps your files even when the power is off.',
          '<b>Input devices</b> (keyboard, mouse, microphone): send data <i>into</i> the computer.',
          '<b>Output devices</b> (screen, printer, speakers): show results <i>out</i> of the computer.'
        ], ar: 'المعالج هو العقل، والذاكرة RAM ورقة مؤقتة، والتخزين خزانة دائمة، والإدخال والإخراج أجهزة تدخل البيانات وتعرض النتائج.' },
        { type: 'p', en: 'Let us watch the parts work together. You open a photo on your phone. The photo file lives in <b>storage</b>. The phone copies it into <b>RAM</b>, because RAM is much faster to work with. The <b>CPU</b> follows the instructions that turn the 0s and 1s of the file into colours. The <b>screen</b> (output) shows the photo. Then you touch the screen to zoom in (input), and the cycle starts again.' },
        { type: 'note', kind: 'tip', en: 'A CPU is not clever, but it is very fast: a modern CPU can do <b>billions</b> of small steps every second. Its power comes from speed and from following instructions perfectly.' },
        { type: 'analogy', title: 'RAM is your desk, storage is your cupboard', en: 'When you study, you put the book you are using on your desk (RAM). It is quick to reach, but at the end of the day you clear the desk. Books you want to keep go into the cupboard (storage). The CPU is you, doing the work.' },
        { type: 'check', q: 'You save a file and switch the computer off. Where is the file kept?', options: ['In RAM', 'In storage (SSD or disk)', 'In the CPU', 'On the screen'], answer: 1,
          explain: 'Storage keeps data when the power is off. RAM is wiped.', ar: 'في التخزين، لأن الذاكرة RAM تُمسح.' },
        { type: 'h', en: 'Where does a program live?' },
        { type: 'p', en: 'A program is software, so it is kept as a file in <b>storage</b>. When you open an app, the program is <b>copied into RAM</b>, and the CPU reads its instructions from RAM, one after another. When you close the app, its space in RAM is freed for other work. Your Java programs will follow exactly the same path: stored in a file, loaded into RAM, carried out by the CPU.',
          ar: 'البرنامج محفوظ في التخزين، وعند تشغيله يُنسخ إلى الذاكرة RAM لينفذه المعالج.' },
        { type: 'check', q: 'You open a calculator app. While it runs, where does the CPU read its instructions from?', options: ['From RAM', 'From the keyboard', 'From the screen', 'From the printer'], answer: 0,
          explain: 'The program is copied from storage into RAM, and the CPU reads the instructions from RAM.', ar: 'من الذاكرة RAM.' },
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
        { type: 'steps', title: 'The parts at a café order screen', problem: 'You order one coffee on a self-service screen in a café and get a printed receipt. Name the part that does each job. Then read a small program that prints the receipt.',
          steps: [
            { en: '<b>Input:</b> you touch "Coffee" on the touch screen. Here the touch screen works as an input device.' },
            { en: '<b>Memory:</b> your order waits in RAM while you are still choosing.' },
            { en: '<b>Processing:</b> the CPU finds the price (12 riyals) and works out the total.' },
            { en: '<b>Storage:</b> the café keeps a record of the sale on its disk, so the daily report is safe after the shop closes.' },
            { en: '<b>Output:</b> the screen shows the total and the printer prints the receipt. These three instructions do the printing part:', code: J`
System.out.println("Order: 1 coffee");
System.out.println("Total: 12 riyals");
System.out.println("Thank you!");
` }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Order: 1 coffee");
        System.out.println("Total: 12 riyals");
        System.out.println("Thank you!");
    }
}
`, out: J`
Order: 1 coffee
Total: 12 riyals
Thank you!
`, ar: 'شاشة اللمس إدخال، والذاكرة تحفظ الطلب مؤقتاً، والمعالج يحسب، والطابعة إخراج.' },
        { type: 'note', kind: 'tip', en: 'Do not memorise long lists. Remember the pictures: CPU = brain, RAM = desk, storage = cupboard.' }
      ],
      mistakes: [
        { title: 'Mixing up RAM and storage', en: 'Many students think RAM keeps files for ever. RAM is only for what you are using now and is wiped when the power goes off. Storage keeps files.' },
        { title: 'Calling the screen "software"', en: 'You can touch a screen, so it is hardware. Software is the programs, which you cannot touch.' },
        { title: 'Thinking the computer understands what you mean', en: 'A computer only follows the exact instructions. If you forget a step, it does not guess.' },
        { title: 'Thinking a touch screen is only output', en: 'A touch screen shows pictures (output) <b>and</b> feels your finger (input). Some devices do both jobs.' }
      ],
      remember: ['Every job has three parts: <b>input</b>, <b>processing</b>, <b>output</b>.', '<b>Hardware</b> = physical parts. <b>Software</b> = programs (the operating system and apps).', '<b>CPU</b> = brain, <b>RAM</b> = fast temporary memory, <b>storage</b> = permanent memory.', 'Input devices send data in; output devices show results.', 'A program is stored in a file, copied into RAM, and carried out by the CPU.', 'A computer does exactly what it is told, nothing more.'],
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
`, answer: 'Hello CPU', explain: 'The program prints exactly the text between the quotes.' },
        { t: 'mcq', q: 'A phone <b>touch screen</b> is:', options: ['Only an input device', 'Only an output device', 'Both an input and an output device', 'Software'], answer: 2,
          explain: 'It shows pictures (output) and feels your finger (input), so it does both jobs.', explainAr: 'شاشة اللمس تعرض وتستقبل، فهي إدخال وإخراج معاً.' },
        { t: 'mcq', q: 'Which one is <b>system software</b>?', options: ['The operating system', 'A calculator app', 'A photo file', 'The keyboard'], answer: 0,
          explain: 'The operating system manages the whole device. A calculator is an app, a photo is data, and a keyboard is hardware.' },
        { t: 'bug', q: 'One of these sentences is <b>wrong</b>. Tap it.', qAr: 'جملة واحدة خاطئة. أين هي؟',
          code: J`
The keyboard is an input device.
The screen is an output device.
RAM keeps your files when the power is off.
The CPU carries out the instructions.
A calculator app is software.
`, bug: 3,
          fix: J`
The keyboard is an input device.
The screen is an output device.
Storage keeps your files when the power is off.
The CPU carries out the instructions.
A calculator app is software.
`, explain: 'RAM is wiped when the power goes off. It is storage (an SSD, a hard disk or a USB drive) that keeps your files.', explainAr: 'الذاكرة RAM تُمسح عند إطفاء الجهاز، والتخزين هو الذي يحفظ الملفات.' },
        { t: 'output', q: 'This program prints a café receipt. What does it show?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Order: 2 teas");
        System.out.println("Total: 10 riyals");
        System.out.println("Thank you!");
    }
}
`, answer: 'Order: 2 teas\nTotal: 10 riyals\nThank you!', explain: 'Each <code>println</code> prints its text on its own line, from top to bottom.' }
      ]
    },
    {
      title: 'Programs and programming languages',
      titleAr: 'البرامج ولغات البرمجة',
      minutes: 30,
      body: [
        { type: 'h', en: 'What is a program?' },
        { type: 'p', en: 'A <b>program</b> is a list of instructions that tells the computer how to do a task: calculate a GPA, show a timetable, or add up a coffee order. Without a program, the hardware does nothing useful.',
          ar: 'البرنامج قائمة تعليمات تُخبر الحاسب كيف ينفذ مهمة.' },
        { type: 'analogy', title: 'A program is a recipe', en: 'A recipe lists steps in order: boil water, add tea, wait three minutes, pour. A program is the same. The computer follows the steps from the first to the last, in order.' },
        { type: 'check', q: 'A program is most like:', options: ['A recipe with ordered steps', 'A picture', 'A battery', 'A cable'], answer: 0, explain: 'A program is an ordered list of instructions, like a recipe.' },
        { type: 'h', en: 'Order matters' },
        { type: 'p', en: 'The computer carries out the instructions <b>in order</b>, from the first to the last. If you swap two steps, you get a different result, even when every single step is correct. Imagine a tea recipe that says "pour into a cup" before "boil the water": each step is fine, but the order makes the tea wrong.',
          ar: 'الحاسب ينفذ التعليمات بالترتيب، وتغيير الترتيب يغيّر النتيجة.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("1. Boil the water");
        System.out.println("2. Add the tea");
        System.out.println("3. Pour into a cup");
    }
}
`, out: J`
1. Boil the water
2. Add the tea
3. Pour into a cup
` },
        { type: 'p', en: 'You do not need to understand every word of this program yet; Lesson 4 explains it. For now, just notice one thing: the three lines appear on the screen in the <b>same order</b> as in the code. Press Run and see.' },
        { type: 'check', q: 'You swap the first two instructions of a program. What happens?', options: ['The output order changes too', 'Nothing changes', 'The computer puts them back in the right order', 'The program deletes one of them'], answer: 0,
          explain: 'The computer follows the instructions exactly in the order you wrote them. It never fixes the order for you.', ar: 'يتغير ترتيب الناتج.' },
        { type: 'h', en: 'The computer only understands 0 and 1' },
        { type: 'p', en: 'Inside, a computer works with electricity: on or off. We write "on" as <b>1</b> and "off" as <b>0</b>. The only language the CPU understands directly is <b>machine language</b>, which is made only of 0s and 1s. Each single 0 or 1 is called a <b>bit</b>. Lesson 10 of this unit shows how numbers and letters are made from bits.',
          ar: 'لغة الآلة أصفار وواحدات فقط، وهي اللغة الوحيدة التي يفهمها المعالج مباشرة.' },
        { type: 'code', code: J`
1101101010011010
` },
        { type: 'p', en: 'Writing a program like that is very hard and slow for people. One wrong digit breaks everything, and nobody can read it. So people invented languages that look more like English.' },
        { type: 'table', head: ['Level', 'What it looks like', 'Who can read it?'], rows: [
          ['Machine language', '<code>1101101010011010</code>', 'Only the CPU'],
          ['Assembly language', '<code>add 2, 3, result</code>', 'Experts. Short words, but still hard.'],
          ['High-level language', '<code>area = 5 * 5 * 3.14159;</code>', 'People like you. Java, Python and C++ are high-level.']
        ] },
        { type: 'p', en: '<b>Assembly language</b> uses short words such as <code>add</code> instead of 0s and 1s. A small program called an <b>assembler</b> turns it into machine language. It is still hard, because you must think about every tiny step inside the CPU. In a <b>high-level language</b>, one line can do the work of many machine instructions, and the words are close to English and maths.' },
        { type: 'analogy', title: 'Languages between you and the CPU', en: 'Imagine you speak Arabic and a worker speaks only a secret code. You write your instructions in Arabic (high-level). A translator turns them into the secret code (machine language). You never need to learn the secret code.' },
        { type: 'p', en: 'What you write in a high-level language is called <b>source code</b>. The CPU cannot run it yet. It must be translated first.', ar: 'الشيفرة المصدرية هي ما نكتبه بلغة عالية المستوى، ويجب ترجمتها قبل التنفيذ.' },
        { type: 'h', en: 'Every language has grammar: syntax' },
        { type: 'p', en: 'Arabic and English have grammar rules. Programming languages have them too, and they are much stricter. The grammar rules of a programming language are called its <b>syntax</b>. A teacher understands "I has a book" and corrects it. A translator program cannot accept even one small mistake, such as a missing semicolon. You will learn the main Java rules from Lesson 4.',
          ar: 'قواعد لغة البرمجة تسمى syntax، وهي صارمة جداً ولا تقبل أي خطأ صغير.' },
        { type: 'check', q: 'What is <b>syntax</b>?', options: ['The grammar rules of a programming language', 'A part of the CPU', 'The output of a program', 'A kind of storage'], answer: 0,
          explain: 'Syntax means the grammar rules: how instructions must be written so the translator accepts them.', ar: 'قواعد كتابة اللغة.' },
        { type: 'h', en: 'Translators: compiler and interpreter' },
        { type: 'p', en: 'There are two kinds of translators. A <b>compiler</b> translates the <i>whole</i> program first, then you run the result. An <b>interpreter</b> translates and runs the program <i>one line at a time</i>.' },
        { type: 'analogy', title: 'Translating a book or a speech', en: 'A compiler is like translating a whole book before anyone reads it. An interpreter is like a live interpreter at a conference who translates sentence by sentence while the speaker talks.',
          ar: 'المترجم Compiler يترجم الكتاب كاملاً، والمفسر Interpreter يترجم جملة بجملة.' },
        { type: 'table', head: ['', 'Compiler', 'Interpreter'], rows: [
          ['How much it translates', 'The whole program, before it runs', 'One line at a time, while it runs'],
          ['When you hear about grammar mistakes', 'Before the program starts', 'Only when the line with the mistake is reached'],
          ['Languages that usually use it', 'C++, and Java (with <code>javac</code>)', 'Python, JavaScript']
        ] },
        { type: 'check', q: 'Which translator translates the whole program before it runs?', options: ['Compiler', 'Interpreter', 'Keyboard', 'Printer'], answer: 0, explain: 'The compiler translates the whole program first.', ar: 'المترجم Compiler.' },
        { type: 'h', en: 'Why do we learn Java?' },
        { type: 'p', en: 'There are hundreds of high-level languages. Java is one of the most used in the world: it runs Android phone apps, bank systems and large websites. It is free. It runs on many kinds of computers (you will see how in the next lesson). And its strict rules help beginners, because the compiler catches many mistakes before the program runs. What you learn in Java also makes other languages easier later.' },
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
        { type: 'steps', title: 'A morning plan for the computer', problem: 'Write a program that prints a student\'s morning plan in the correct order: wake up at 6:00, have breakfast, then take the metro to university.',
          steps: [
            { en: 'Write the plan in plain words, <b>one action per line</b>: wake up, breakfast, metro.' },
            { en: 'Check the order. Breakfast before waking up makes no sense, and the computer would not notice. <i>You</i> must get the order right.' },
            { en: 'Turn each line into one Java print instruction. The first one:', code: J`System.out.println("6:00 Wake up");` },
            { en: 'Write the other two instructions <b>below</b> it, in the same order as the plan.', code: J`
System.out.println("6:30 Have breakfast");
System.out.println("7:15 Take the metro to university");
` },
            { en: 'The compiler translates the program and the CPU runs it. The lines appear in the order you wrote them.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("6:00 Wake up");
        System.out.println("6:30 Have breakfast");
        System.out.println("7:15 Take the metro to university");
    }
}
`, out: J`
6:00 Wake up
6:30 Have breakfast
7:15 Take the metro to university
`, ar: 'نكتب الخطة بكلمات بسيطة، ونتأكد من الترتيب، ثم نحوّل كل خطوة إلى تعليمة.' },
        { type: 'note', kind: 'exam', en: 'The CPU understands <b>only machine language</b>. Every other language needs translating first.', ar: 'المعالج يفهم لغة الآلة فقط.' }
      ],
      mistakes: [
        { title: 'Thinking the CPU reads Java directly', en: 'The CPU only understands 0s and 1s. Java source code must be translated first.' },
        { title: 'Mixing up compiler and interpreter', en: 'Compiler = whole program first. Interpreter = line by line while running.' },
        { title: 'Believing "high-level" means "more difficult"', en: 'High-level means <i>closer to human language</i>, so it is easier for people.' },
        { title: 'Thinking the order of instructions does not matter', en: 'The computer runs the instructions from top to bottom. Swap two lines and the output changes.', code: J`
System.out.println("Pour into a cup");   // runs first
System.out.println("Boil the water");    // runs second: wrong order!
` }
      ],
      remember: ['A <b>program</b> is an ordered list of instructions; the order matters.', 'The CPU understands only <b>machine language</b> (0s and 1s).', '<b>High-level languages</b> (Java, Python) are easy for people to read.', 'Code you write is called <b>source code</b>; its grammar rules are the <b>syntax</b>.', 'A <b>compiler</b> translates everything first; an <b>interpreter</b> goes line by line.'],
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
`, answer: 'I am source code', explain: 'It prints the text inside the quotes.' },
        { t: 'output', q: 'Order matters! What does this program print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Then: Lecture");
        System.out.println("First: Breakfast");
        System.out.println("Last: Lab");
    }
}
`, answer: 'Then: Lecture\nFirst: Breakfast\nLast: Lab', explain: 'The computer does not read the words "First" or "Last". It simply runs the instructions from top to bottom.', explainAr: 'الحاسب ينفذ من الأعلى إلى الأسفل ولا يفهم معنى الكلمات.' },
        { t: 'mcq', q: 'What does <b>syntax</b> mean?', options: ['The grammar rules of a programming language', 'The speed of the CPU', 'A list of files', 'The result of a program'], answer: 0, explain: 'Syntax is the set of grammar rules. The translator refuses code that breaks them.' },
        { t: 'bug', q: 'This plan for making tea has one step in the wrong place. Tap the step that is out of order.', qAr: 'خطوة واحدة في غير مكانها. أين هي؟',
          code: J`
Start
Boil the water
Put a tea bag in the cup
Drink the tea
Pour the hot water into the cup
End
`, bug: [4, 5],
          fix: J`
Start
Boil the water
Put a tea bag in the cup
Pour the hot water into the cup
Drink the tea
End
`, explain: 'You cannot drink the tea before the water is poured. Each step is correct on its own, but the order is wrong. A computer would follow the wrong order without complaining.', explainAr: 'كل خطوة صحيحة لكن الترتيب خاطئ، والحاسب لا ينتبه لذلك.' }
      ]
    },
    {
      title: 'How Java runs: compiler, bytecode and the JVM',
      titleAr: 'كيف تعمل جافا: المترجم وbytecode وآلة JVM',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why Java is special' },
        { type: 'p', en: 'Different computers (Windows, Mac, Linux) speak different machine languages. It would be tiring to write one program for each. Java solves this with a middle step, so you write your program <b>once</b> and it can run <b>anywhere</b>.',
          ar: 'تكتب البرنامج مرة واحدة ويعمل على أي نظام تشغيل.' },
        { type: 'analogy', title: 'A universal travel plug', en: 'Sockets are different in different countries. A universal adapter lets one plug work everywhere. In Java, the <b>JVM</b> is the adapter: one program, many computers.' },
        { type: 'p', en: 'A <b>platform</b> is the kind of computer and operating system a program runs on: a Windows laptop, a Mac, a Linux server. Each platform has its own machine language. In languages such as C++, you must compile the program again for every platform. In Java, you compile <b>once</b> into a middle language called <b>bytecode</b>, and every platform has its own <b>JVM</b> that understands the same bytecode.',
          ar: 'نترجم البرنامج مرة واحدة إلى bytecode، ولكل نظام آلة JVM خاصة به تفهمه.' },
        { type: 'check', q: 'Why can one Java program run on Windows and on a Mac?', options: ['Each platform has a JVM that runs the same bytecode', 'Windows and Mac have the same machine language', 'Java is machine language', 'It cannot'], answer: 0,
          explain: 'The bytecode is the same everywhere. Each platform has its own JVM that understands it.', ar: 'لكل نظام آلة JVM خاصة به.' },
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
        { type: 'table', head: ['Step', 'Tool', 'Reads', 'Produces'], rows: [
          ['1. Write', 'An editor (or NetBeans)', 'Your typing', '<code>Main.java</code> (source code)'],
          ['2. Compile', '<code>javac</code> (the compiler)', '<code>Main.java</code>', '<code>Main.class</code> (bytecode)'],
          ['3. Run', '<code>java</code> (starts the JVM)', '<code>Main.class</code>', 'The output on the screen']
        ] },
        { type: 'analogy', title: 'A film with subtitles', en: 'The film (your program) is made once. Subtitles in each country (the JVM for each computer) let everyone watch it. Bytecode is the film; the JVM is the subtitle system.' },
        { type: 'check', q: 'Which file does the JVM run?', options: ['Main.java', 'Main.class', 'Main.txt', 'Main.doc'], answer: 1, explain: 'The JVM runs bytecode, stored in the .class file.', ar: 'ملف class.' },
        { type: 'h', en: 'The compiler checks your grammar first' },
        { type: 'p', en: 'Before <code>javac</code> makes the <code>.class</code> file, it checks every line against the syntax rules of Java. If it finds even one mistake, it stops, prints an <b>error message</b> with the line number, and makes <b>no</b> <code>.class</code> file. With no <code>.class</code> file, there is nothing to run. You fix the mistake and compile again. This is good news: many mistakes are caught <i>before</i> the program ever runs.',
          ar: 'إذا وجد المترجم خطأً نحوياً يتوقف ولا يُنتج ملف class، فنصلح الخطأ ثم نترجم من جديد.' },
        { type: 'check', q: '<code>javac</code> finds a mistake in <code>Main.java</code>. What happens?', options: ['No .class file is made; you fix the mistake and compile again', 'The JVM runs the program anyway', 'The compiler fixes the mistake for you', 'The file Main.java is deleted'], answer: 0,
          explain: 'The compiler refuses to make bytecode from code with syntax errors. It shows the error, and you fix it.', ar: 'لا يُنتج ملف class.' },
        { type: 'h', en: 'File name = class name' },
        { type: 'p', en: 'Java has one more rule about files. The name of the file must match the name of the <code>public class</code> inside it, with the same capital letters. <code>public class Main</code> must be saved in <code>Main.java</code>. If you save it as <code>main.java</code> or <code>Test.java</code>, <code>javac</code> refuses it. On this website the file is always called <code>Main.java</code>, so your class is always <code>Main</code>.',
          ar: 'اسم الملف يجب أن يطابق اسم الصنف تماماً، بما في ذلك الأحرف الكبيرة.' },
        { type: 'analogy', title: 'A label on a box', en: 'When you move house, you write a label on each box. If the label says "Kitchen" but the box is full of books, the helpers put it in the wrong room. Java checks the label (the file name) against what is inside (the class name), and refuses a box that does not match.' },
        { type: 'code', code: J`
Test.java:1: error: class Main is public, should be declared in a file named Main.java
public class Main {
       ^
1 error
` },
        { type: 'p', en: 'This is the message you get when <code>public class Main</code> is saved in a file called <code>Test.java</code>. Read it slowly: the file, the line number (1), and then the problem in plain English. Lesson 12 teaches you to read messages like this one.' },
        { type: 'h', en: 'JDK, JRE and IDE' },
        { type: 'list', items: [
          '<b>JDK</b> (Java Development Kit): the toolbox for programmers. It has <code>javac</code>, the JVM and ready-made code.',
          '<b>JRE</b> (Java Runtime Environment): only what is needed to <i>run</i> Java programs.',
          '<b>IDE</b> (Integrated Development Environment), such as NetBeans: one program where you write, run and fix code.'
        ] },
        { type: 'p', en: 'NetBeans is not the compiler itself. When you press Run, NetBeans quietly calls <code>javac</code> and the JVM from the JDK for you. That is why a JDK must be installed on your computer before NetBeans can work.' },
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
        { type: 'steps', title: 'When the compiler finds a mistake', problem: 'You compile <code>Main.java</code>, but you forgot a semicolon on line 3. Follow what happens until the program finally runs.',
          steps: [
            { en: 'You type the compile command.', code: J`javac Main.java` },
            { en: 'The compiler finds the problem and prints a message with the file name and the line number. It makes <b>no</b> <code>Main.class</code> file.', code: J`
Main.java:3: error: ';' expected
1 error
` },
            { en: 'You open <code>Main.java</code>, go to line 3 and add the missing <code>;</code>. Then you save the file.' },
            { en: 'You compile again. This time there is no message, and <code>Main.class</code> appears.', code: J`javac Main.java` },
            { en: 'Now you run the bytecode with the JVM, and the output appears.', code: J`java Main` }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Compiled with no errors");
        System.out.println("Main.class is ready");
    }
}
`, out: J`
Compiled with no errors
Main.class is ready
`, ar: 'المترجم يرفض الشيفرة الخاطئة، فنصلحها ونترجم مرة أخرى ثم نشغّل.' },
        { type: 'note', kind: 'exam', en: 'Remember the chain: <code>.java</code> is compiled by <code>javac</code> into <code>.class</code> (bytecode), which the JVM runs. Bytecode is <b>not</b> machine code, and the JVM does <b>not</b> read <code>.java</code> files.', ar: 'ملف java ← javac ← ملف class ← JVM.' }
      ],
      mistakes: [
        { title: 'Skipping the compile step', en: 'The JVM runs bytecode, not source code. Compile with <code>javac</code> first, then run with <code>java Main</code>. (Newer Java versions accept <code>java Main.java</code> as a shortcut, but it secretly compiles first. In exams, show both steps.)', code: J`
javac Main.java   // 1. compile
java Main         // 2. run
` },
        { title: 'Writing the extension when running', en: 'Run with <code>java Main</code>, not <code>java Main.class</code>.', code: 'java Main.class   // wrong' },
        { title: 'Thinking bytecode is machine code', en: 'Bytecode is for the JVM, not for a real CPU. That is why it runs everywhere.' },
        { title: 'File name does not match the class name', en: '<code>public class Main</code> must be saved in <code>Main.java</code>, with a capital M. Any other name gives a compile error.', code: J`
// saved as Hello.java
public class Main {   // error: should be declared in a file named Main.java
` }
      ],
      remember: ['Write <code>.java</code> source, compile with <code>javac</code>, run with <code>java</code>.', '<b>Bytecode</b> lives in a <code>.class</code> file.', 'The <b>JVM</b> runs bytecode on each computer, so Java is "write once, run anywhere".', 'If <code>javac</code> finds a syntax error, no <code>.class</code> file is made.', 'The file name must match the public class name: <code>Main.java</code> holds <code>public class Main</code>.', '<b>JDK</b> = tools to write and compile. <b>IDE</b> = one friendly program to do everything.'],
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
`, explain: 'Each println prints text and moves to a new line.' },
        { t: 'mcq', q: 'What does <code>javac</code> do when it finds a syntax error?', options: ['It stops, shows an error message and makes no .class file', 'It runs the program anyway', 'It makes Main.class anyway', 'It fixes the error by itself'], answer: 0,
          explain: 'No bytecode is made from code with syntax errors. You fix the error and compile again.' },
        { t: 'bug', q: 'A student wrote these commands to compile and run a program. One command is wrong. Tap it.', qAr: 'أحد الأوامر خاطئ. أين هو؟',
          code: J`
// Step 1: save the code as Main.java
// Step 2: compile
javac Main.java
// Step 3: run
java Main.class
`, bug: 5,
          fix: J`
// Step 1: save the code as Main.java
// Step 2: compile
javac Main.java
// Step 3: run
java Main
`, explain: 'When you run a program, write only the class name: <code>java Main</code>. The JVM adds <code>.class</code> by itself.', explainAr: 'عند التشغيل نكتب اسم الصنف فقط دون class.' },
        { t: 'bug', q: 'This code is saved in a file called <code>Main.java</code>. The compiler refuses it. Tap the line with the bug.', qAr: 'الملف اسمه Main.java. أين الخطأ؟',
          code: J`
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
`, bug: 1,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
`, explain: 'The public class name must match the file name. The file is <code>Main.java</code>, so the class must be <code>Main</code>. The compiler says: <i>class Hello is public, should be declared in a file named Hello.java</i>.', explainAr: 'اسم الصنف يجب أن يطابق اسم الملف.' },
        { t: 'output', q: 'What does this program print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("1. Write Main.java");
        System.out.println("2. javac makes Main.class");
        System.out.println("3. The JVM runs it");
    }
}
`, answer: '1. Write Main.java\n2. javac makes Main.class\n3. The JVM runs it', explain: 'Three println statements print three lines, in order.' }
      ]
    },
    {
      title: 'Your first Java program, line by line',
      titleAr: 'أول برنامج جافا سطراً سطراً',
      minutes: 35,
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
        { type: 'p', en: 'The frame has many new words. Here is a simple meaning for each one, so they do not scare you. You do not need more than this today.' },
        { type: 'table', head: ['Word', 'Simple meaning for now'], rows: [
          ['<code>public</code>', 'Anyone can use it.'],
          ['<code>class</code>', 'A container that holds code.'],
          ['<code>Main</code>', 'The name we chose for the class. The file is <code>Main.java</code>.'],
          ['<code>static void</code>', 'Explained in Unit 6 (Methods). For now, just type them.'],
          ['<code>main</code>', 'The special name Java looks for when it starts.'],
          ['<code>String[] args</code>', 'A place for extra information. We do not use it yet.'],
          ['<code>System.out.println</code>', '"Print a line on the screen" (the <b>out</b>put of the <b>System</b>).']
        ] },
        { type: 'h', en: 'Many statements run from top to bottom' },
        { type: 'p', en: 'Inside <code>main</code> you can write as many statements as you like. Java runs them one after another, from the top to the bottom, like you read a page. The first statement runs first, the second runs next, and so on until the closing brace of <code>main</code>. Then the program ends.',
          ar: 'تُنفَّذ الجمل داخل main واحدة تلو الأخرى من الأعلى إلى الأسفل.' },
        { type: 'analogy', title: 'A playlist', en: 'A playlist plays the songs in the order of the list: first song, second song, third song. A program is the same: statement after statement, in the order you wrote them.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Sunday: CS101");
        System.out.println("Monday: MATH101");
        System.out.println("Wednesday: ENGL101");
    }
}
`, out: J`
Sunday: CS101
Monday: MATH101
Wednesday: ENGL101
` },
        { type: 'check', q: 'In the program above, which line is printed <b>second</b>?', options: ['Monday: MATH101', 'Sunday: CS101', 'Wednesday: ENGL101', 'All lines at the same time'], answer: 0,
          explain: 'The statements run from top to bottom, so the second statement prints the second line.', ar: 'الجملة الثانية تطبع السطر الثاني.' },
        { type: 'h', en: 'Statements end with a semicolon' },
        { type: 'p', en: 'A <b>statement</b> is one complete instruction. In Java, we end each statement with a semicolon <code>;</code>. It is like the full stop at the end of a sentence.',
          ar: 'كل جملة تنتهي بفاصلة منقوطة ; مثل النقطة في نهاية الجملة.' },
        { type: 'analogy', title: 'The semicolon is a full stop', en: 'Without full stops, a paragraph is one long confusing sentence. Without semicolons, the compiler cannot tell where one instruction ends and the next starts.' },
        { type: 'p', en: 'Where exactly does it go? At the very end of the statement, <b>after</b> the closing parenthesis: <code>println("Hi");</code>. We do <b>not</b> put a semicolon after a line that opens a brace, such as <code>public class Main {</code>. That line is not a statement; it starts a block.' },
        { type: 'check', q: 'What goes at the end of a statement?', options: ['A semicolon ;', 'A colon :', 'A comma ,', 'Nothing'], answer: 0, explain: 'Statements end with a semicolon.', ar: 'فاصلة منقوطة.' },
        { type: 'h', en: 'Braces make blocks' },
        { type: 'p', en: 'Curly braces <code>{ }</code> group statements into a <b>block</b>. Each <code>{</code> needs its own <code>}</code>. The main block is inside the class block. We indent (move to the right) the lines inside a block so we can see the shape.' },
        { type: 'analogy', title: 'Brackets in a sentence', en: 'When you open a bracket in writing, you must close it. Braces work the same way: every opening brace needs a closing brace.' },
        { type: 'p', en: 'A quick way to check: count the <code>{</code> and the <code>}</code> in your program. In the frame there are two of each. If the numbers are different, a brace is missing somewhere.' },
        { type: 'h', en: 'Java is case-sensitive' },
        { type: 'p', en: 'Java treats capital and small letters as different. <code>System</code> is correct. <code>system</code> is wrong. <code>Main</code> and <code>main</code> are different names too. Three words in the frame start with a capital letter: <code>Main</code>, <code>String</code> and <code>System</code>. Everything else is written in small letters.', ar: 'جافا حساسة لحالة الأحرف: String وSystem وMain تبدأ بحرف كبير.' },
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
        { type: 'steps', title: 'A greeting card in three lines', problem: 'Print this small greeting card. Each part goes on its own line:<br><code>Dear Sara,</code><br><code>Good luck in your first exam!</code><br><code>From: Noura</code>',
          steps: [
            { en: 'Plan: three lines on the screen means three <code>println</code> statements.' },
            { en: 'Write the frame first: the class and the main method, with their braces.' },
            { en: 'Inside <code>main</code>, write the first statement. Copy the text exactly, with the comma.', code: J`System.out.println("Dear Sara,");` },
            { en: 'Add the next two statements below it, in order.', code: J`
System.out.println("Good luck in your first exam!");
System.out.println("From: Noura");
` },
            { en: 'Check before you run: three semicolons, six double quotes, two <code>{</code> and two <code>}</code>, capital S in <code>System</code> and <code>String</code>.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Dear Sara,");
        System.out.println("Good luck in your first exam!");
        System.out.println("From: Noura");
    }
}
`, out: J`
Dear Sara,
Good luck in your first exam!
From: Noura
`, ar: 'ثلاثة أسطر تعني ثلاث جمل println، ثم نراجع الفواصل المنقوطة والأقواس.' },
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
`, hint: 'Use one <code>System.out.println("...");</code> statement.', explain: 'One println statement prints the line.' },
        { t: 'bug', q: 'This program does not compile. The compiler says <code>\';\' expected</code>. Tap the line with the bug.', qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to CS101");
        System.out.println("Room 204")
    }
}
`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to CS101");
        System.out.println("Room 204");
    }
}
`, explain: 'Line 4 has no semicolon after the closing parenthesis. Every statement must end with <code>;</code>.', explainAr: 'السطر 4 ينقصه الفاصلة المنقوطة.' },
        { t: 'bug', q: 'This program does not compile. Look carefully at the capital letters. Tap the line with the bug.', qAr: 'انتبه{{g:|ي}} للأحرف الكبيرة والصغيرة.',
          code: J`
public class Main {
    public static void main(string[] args) {
        System.out.println("Java is case-sensitive");
    }
}
`, bug: 2,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Java is case-sensitive");
    }
}
`, explain: '<code>String</code> must start with a capital S. With a small s, Java does not know the word and says <i>cannot find symbol</i>.', explainAr: 'String تبدأ بحرف S كبير.' },
        { t: 'output', q: 'What does this program print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Breakfast: 7:00");
        System.out.println("Lecture: 8:00");
        System.out.println("Lab: 10:00");
    }
}
`, answer: 'Breakfast: 7:00\nLecture: 8:00\nLab: 10:00', explain: 'The three statements run from top to bottom, one line each.' },
        { t: 'code', q: 'Write a program that prints this small name card, exactly (no input):<br><code>Name: Reem</code><br><code>Major: Information Systems</code><br><code>University: PSU</code>', qAr: 'اطبع{{g:|ي}} الأسطر الثلاثة كما هي.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // three println statements
    }
}
`, tests: [{ stdin: '', expected: 'Name: Reem\nMajor: Information Systems\nUniversity: PSU' }], solution: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Name: Reem");
        System.out.println("Major: Information Systems");
        System.out.println("University: PSU");
    }
}
`, hint: 'Three lines on the screen = three <code>println</code> statements, each ending with <code>;</code>.', explain: 'Each println prints one line, in order from top to bottom.' }
      ]
    },
    {
      title: 'Printing: print, println and escape sequences',
      titleAr: 'الطباعة: print وprintln ورموز الهروب',
      minutes: 35,
      body: [
        { type: 'h', en: 'println moves to a new line, print does not' },
        { type: 'p', en: 'Programs talk to people by printing. Java has two ways. <code>println</code> prints the text and then goes to the <b>next line</b>. <code>print</code> prints the text and <b>stays</b> on the same line.',
          ar: 'println تطبع ثم تنزل سطراً، أما print فتبقى في السطر نفسه.' },
        { type: 'p', en: 'Why spend a whole lesson on printing? Because, for now, printing is the <b>only</b> way your program can talk to people. Later, the same skill prints receipts, report cards and timetables. And in every exam, you will be asked to predict exactly what a program prints, line by line, space by space.' },
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
        { type: 'h', en: 'Building one line from pieces' },
        { type: 'p', en: 'Because <code>print</code> stays on the same line, you can build one line from several pieces. When the line is complete, finish it with <code>println</code>, so the next output starts on a new line.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.print("Riyadh ");
        System.out.print("to ");
        System.out.println("Jeddah");
        System.out.println("The train leaves at 9:00");
    }
}
`, out: J`
Riyadh to Jeddah
The train leaves at 9:00
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['System.out.print("Riyadh ");', 'Print <code>Riyadh </code> (with a space) and stay on the line.'],
          ['System.out.print("to ");', 'Add <code>to </code> to the same line.'],
          ['System.out.println("Jeddah");', 'Add <code>Jeddah</code>, then move to a new line. The first line is complete.'],
          ['System.out.println("The train leaves at 9:00");', 'This text starts on the new line.']
        ], ar: 'نبني السطر بأجزاء باستخدام print، ثم نُنهيه بـ println.' },
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
        { type: 'p', en: 'If you use an empty <code>println</code> when the line is already finished, you get a <b>blank line</b>. Blank lines make your output easier to read, like the space between paragraphs.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Name: Sara");
        System.out.println();
        System.out.println("Course: CS101");
    }
}
`, out: 'Name: Sara\n\nCourse: CS101' },
        { type: 'check', q: 'How many lines does the program above show on the screen, counting the blank one?', options: ['3', '2', '1', '4'], answer: 0,
          explain: 'Line 1: Name: Sara. Line 2: empty. Line 3: Course: CS101.', ar: 'ثلاثة أسطر، أحدها فارغ.' },
        { type: 'h', en: 'Escape sequences: special characters in text' },
        { type: 'p', en: 'Some characters are hard to type inside quotes. For example, how do you print a double quote? Java uses a backslash <code>\\</code> followed by a letter. This pair is called an <b>escape sequence</b>.' },
        { type: 'p', en: 'Why is a quote a problem? The double quote <code>"</code> tells Java where the text <b>starts</b> and where it <b>ends</b>. If you put a plain <code>"</code> in the middle, Java thinks the text has ended, and the rest of the line makes no sense to it. The backslash says: "the next character is special; do not end the text here".',
          ar: 'علامة الاقتباس تحدد بداية النص ونهايته، لذلك نكتب قبلها \\ لتُطبع داخل النص.' },
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
        { type: 'p', en: 'Two more escape sequences are useful. <code>\\t</code> (tab) jumps to the next column, so words line up like a small table. <code>\\\\</code> prints one backslash, for example in a folder name.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Day\tCourse");
        System.out.println("Sun\tCS101");
        System.out.println("Mon\tMATH101");
        System.out.println("Folder: C:\\CS101\\Lab1");
    }
}
`, out: 'Day\tCourse\nSun\tCS101\nMon\tMATH101\nFolder: C:\\CS101\\Lab1' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['"Day\\tCourse"', '<code>Day</code>, then a tab, then <code>Course</code>. The tab moves <code>Course</code> to the next column.'],
          ['"Sun\\tCS101"', 'The tab puts <code>CS101</code> exactly under <code>Course</code>.'],
          ['"Folder: C:\\\\CS101\\\\Lab1"', 'Each <code>\\\\</code> prints one <code>\\</code>, so you see <code>C:\\CS101\\Lab1</code>.']
        ], ar: 't\\ تنقل النص إلى العمود التالي، و\\\\ تطبع شرطة مائلة عكسية واحدة.' },
        { type: 'note', kind: 'warn', en: 'Only certain letters may follow a backslash. <code>"C:\\Users"</code> is a syntax error (<i>illegal escape character</i>), because <code>\\U</code> means nothing to Java. To print a backslash, always write two: <code>"C:\\\\Users"</code>.', ar: 'لطباعة \\ نكتبها مرتين.' },
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
        { type: 'steps', title: 'A metro card message', problem: 'Print this message exactly. Use <code>print</code> to build the second line from two pieces, an empty <code>println</code> for the blank line, and <code>\\"</code> for the quotes:<br><code>METRO CARD</code><br><code>Balance: 25 riyals</code><br><br><code>Message: "Have a nice trip"</code>',
          steps: [
            { en: 'Line 1 is plain text, so use <code>println</code>.', code: J`System.out.println("METRO CARD");` },
            { en: 'Line 2: print the label and <b>stay</b> on the line, then finish the line with the value.', code: J`
System.out.print("Balance: ");
System.out.println("25 riyals");
` },
            { en: 'Line 3 is empty: an empty <code>println</code> does it.', code: J`System.out.println();` },
            { en: 'Line 4 has quote marks inside the text. Write each one as <code>\\"</code>.', code: J`System.out.println("Message: \"Have a nice trip\"");` },
            { en: 'Check the spaces: there is a space after <code>Balance:</code> inside the quotes. Then press Run.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("METRO CARD");
        System.out.print("Balance: ");
        System.out.println("25 riyals");
        System.out.println();
        System.out.println("Message: \"Have a nice trip\"");
    }
}
`, out: 'METRO CARD\nBalance: 25 riyals\n\nMessage: "Have a nice trip"', ar: 'print لبناء السطر، وprintln فارغة لسطر فارغ، و"\\ لعلامة الاقتباس.' },
        { type: 'note', kind: 'warn', en: 'The backslash <code>\\</code> only works inside quotes in a string. A forward slash <code>/</code> is something else and does not make a new line.' }
      ],
      mistakes: [
        { title: 'Using print and expecting a new line', en: '<code>print</code> never moves to the next line.', code: 'System.out.print("A");\nSystem.out.print("B");   // prints AB' },
        { title: 'Using a forward slash for new line', en: 'Use <code>\\n</code> (backslash), not <code>/n</code>.', code: 'System.out.println("A/nB");' },
        { title: 'Typing printIn with a capital i', en: 'The word is <code>println</code> (lowercase L at the end of "print" + "ln").', code: 'System.out.printIn("Hi");' },
        { title: 'Quote mark inside text without escaping', en: 'A plain quote ends the text early. Write <code>\\"</code> instead.', code: 'System.out.println("She said "Hi"");' }
      ],
      remember: ['<code>println</code> prints then goes to a new line.', '<code>print</code> prints and stays on the same line; use it to build a line from pieces.', '<code>println()</code> alone ends the line, or makes a blank line.', '<code>\\n</code> new line, <code>\\t</code> tab, <code>\\"</code> quote, <code>\\\\</code> backslash.', 'Spaces inside the quotes are printed too.', 'Text goes inside <b>double quotes</b>.'],
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
public class Main {
    public static void main(String[] args) {
        System.out.println("Name:\nOmar");
        System.out.println("Say \"hi\"");
    }
}
`, answer: 'Name:\nOmar\nSay "hi"', explain: '\\n breaks the line and \\" prints a quote.' },
        { t: 'order', q: 'Order the statements so the output is <code>Hello</code>, then <code>How are you?</code>, then <code>Bye</code>, each on its own line.', lines: ['System.out.println("Hello");', 'System.out.println("How are you?");', 'System.out.println("Bye");'], explain: 'Statements run from top to bottom, so the first line of output comes from the first statement.' },
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
`, hint: 'One println per line.', explain: 'Three println statements print three lines.' },
        { t: 'bug', q: 'This program should print <code>Name: Sara</code> and <code>Course: CS101</code> on <b>two</b> lines. It runs, but it prints one line: <code>Name: Sara/nCourse: CS101</code>. Tap the line with the bug.', qAr: 'البرنامج يعمل لكن الناتج في سطر واحد. أين الخطأ؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Name: Sara/nCourse: CS101");
    }
}
`, bug: 3,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Name: Sara\nCourse: CS101");
    }
}
`, explain: 'A new line is <code>\\n</code> with a <b>back</b>slash. <code>/n</code> with a forward slash is just two normal characters, so Java prints them as they are.', explainAr: 'السطر الجديد يُكتب n\\ وليس n/.' },
        { t: 'bug', q: 'This program does not compile. The compiler says <i>cannot find symbol</i>. Tap the line with the bug.', qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.print("Coffee ");
        System.out.printIn("12 riyals");
        System.out.println("Thank you");
    }
}
`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.print("Coffee ");
        System.out.println("12 riyals");
        System.out.println("Thank you");
    }
}
`, explain: 'Line 4 says <code>printIn</code> with a capital i. The correct word is <code>println</code>: "print" + "ln" (small L, short for <i>line</i>).', explainAr: 'الكلمة الصحيحة println بحرف l صغير.' },
        { t: 'output', q: 'What does this program print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Path: C:\\CS101");
        System.out.print("He said ");
        System.out.println("\"Yes\"");
    }
}
`, answer: 'Path: C:\\CS101\nHe said "Yes"', explain: '<code>\\\\</code> prints one backslash. <code>print</code> stays on the line, and <code>\\"</code> prints a quote mark.' },
        { t: 'code', q: 'Print these two lines exactly (no input). The first line contains real quote marks:<br><code>The teacher said: "Practice every day"</code><br><code>Done!</code>', qAr: 'استخدم{{g:|ي}} "\\ لطباعة علامة الاقتباس.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // write your statements here
    }
}
`, tests: [{ stdin: '', expected: 'The teacher said: "Practice every day"\nDone!' }], solution: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("The teacher said: \"Practice every day\"");
        System.out.println("Done!");
    }
}
`, hint: 'Inside the text, write each quote mark as <code>\\"</code>.', explain: 'Each <code>\\"</code> prints a quote mark without ending the text.' }
      ]
    },
    {
      title: 'Text, calculations and comments',
      titleAr: 'النص والحسابات والتعليقات',
      minutes: 35,
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
        { type: 'h', en: 'The four arithmetic operators' },
        { type: 'p', en: 'Java uses these signs for arithmetic. They are called <b>operators</b>. Two of them look different from your maths notebook: multiplication is a star <code>*</code> (not the letter x), and division is a slash <code>/</code> (not ÷).',
          ar: 'الضرب في جافا بالنجمة * والقسمة بالشرطة المائلة /.' },
        { type: 'table', head: ['Operator', 'Meaning', 'Example', 'Result'], rows: [
          ['<code>+</code>', 'add', '<code>12 + 8</code>', '20'],
          ['<code>-</code>', 'subtract', '<code>50 - 12</code>', '38'],
          ['<code>*</code>', 'multiply', '<code>3 * 12</code>', '36'],
          ['<code>/</code>', 'divide', '<code>90 / 3</code>', '30']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(12 + 8);
        System.out.println(50 - 12);
        System.out.println(3 * 12);
        System.out.println(90 / 3);
    }
}
`, out: J`
20
38
36
30
` },
        { type: 'check', q: 'Which sign means <b>multiply</b> in Java?', options: ['<code>*</code>', '<code>x</code>', '<code>×</code>', '<code>#</code>'], answer: 0,
          explain: 'Java uses the star <code>*</code> for multiplication. The letter x would be read as a name, not as an operator.', ar: 'النجمة *.' },
        { type: 'h', en: 'Which operation goes first?' },
        { type: 'p', en: 'Java follows the same order as your maths class. First, anything inside <b>parentheses</b> <code>( )</code>. Then <code>*</code> and <code>/</code>. Then <code>+</code> and <code>-</code>. When two operations have the same level, Java goes from <b>left to right</b>.',
          ar: 'الأقواس أولاً، ثم الضرب والقسمة، ثم الجمع والطرح، ومن اليسار إلى اليمين.' },
        { type: 'analogy', title: 'Getting dressed', en: 'You put on socks before shoes, every time. The order is a rule, not a choice. Java has its own fixed order for operators. Parentheses are how you tell Java: "do this part first".' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(2 + 3 * 4);
        System.out.println((2 + 3) * 4);
        System.out.println(20 - 8 - 2);
    }
}
`, out: J`
14
20
10
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['2 + 3 * 4', 'Multiply first: 3 * 4 = 12. Then 2 + 12 = <b>14</b>.'],
          ['(2 + 3) * 4', 'Parentheses first: 2 + 3 = 5. Then 5 * 4 = <b>20</b>.'],
          ['20 - 8 - 2', 'Same level, so left to right: 20 - 8 = 12, then 12 - 2 = <b>10</b>.']
        ] },
        { type: 'check', q: 'What does <code>System.out.println(10 - 2 * 3);</code> print?', options: ['4', '24', '10 - 2 * 3', '6'], answer: 0,
          explain: 'Multiplication first: 2 * 3 = 6. Then 10 - 6 = 4.', ar: '4' },
        { type: 'note', kind: 'warn', en: 'For now, use divisions that come out exactly, such as <code>90 / 3</code>. In Java, <code>7 / 2</code> gives <code>3</code>, not 3.5, because both numbers are whole numbers. Unit 2 explains why and how to get 3.5.', ar: 'قسمة عددين صحيحين تحذف الكسر: 7 / 2 تعطي 3.' },
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
        { type: 'p', en: 'Why does this happen? Java reads <code>+</code> from left to right. When the left side is a <b>number</b> and the right side is a number, <code>+</code> adds. As soon as one side is <b>text</b>, <code>+</code> glues them into longer text. So the position of the text changes the answer.' },
        { type: 'analogy', title: 'Glue and a calculator', en: 'Think of <code>+</code> as a tool with two modes. Between two numbers it is a calculator. Next to text it becomes glue: it sticks the number to the text as characters. Once the line has become text, every next <code>+</code> is glue too.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(5 + 3 + " riyals");
        System.out.println("Price: " + 5 + 3);
    }
}
`, out: J`
8 riyals
Price: 53
` },
        { type: 'lines', rows: [
          ['5 + 3 + " riyals"', 'Left to right: 5 + 3 are both numbers, so 8. Then 8 is glued to the text: <code>8 riyals</code>.'],
          ['"Price: " + 5 + 3', 'Text first, so 5 is glued: <code>Price: 5</code>. Then 3 is glued too: <code>Price: 53</code>. Wrong! Write <code>"Price: " + (5 + 3)</code> instead.']
        ], ar: 'إذا جاء النص أولاً يلصق + الأرقام كنص، فنستخدم الأقواس.' },
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
        { type: 'p', en: 'Good comments say <i>what a part is for</i> or <i>why</i>, for example where a number comes from. Many teachers also ask you to start every program with a short <b>header comment</b>: your name, the course, and what the program does.' },
        { type: 'code', run: true, code: J`
// Name: Sara Ali
// Course: CS101
// Purpose: print the price of 3 books

public class Main {
    public static void main(String[] args) {
        // 3 books at 25 riyals each
        System.out.println("Books: " + (3 * 25) + " riyals");
    }
}
`, out: 'Books: 75 riyals' },
        { type: 'p', en: 'Comments have a second use. If you put <code>//</code> in front of a statement, it becomes a comment and does <b>not</b> run. Programmers call this <b>commenting out</b> a line. It lets you switch a line off for a test without deleting it.',
          ar: 'وضع // قبل جملة يجعلها تعليقاً فلا تُنفَّذ.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Line A");
        // System.out.println("Line B");
        System.out.println("Line C");
    }
}
`, out: J`
Line A
Line C
` },
        { type: 'check', q: 'In the program above, why is <code>Line B</code> not printed?', options: ['Its statement is a comment, so it does not run', 'Java skips every second line', 'It has a syntax error', 'B is not allowed in Java'], answer: 0,
          explain: 'The <code>//</code> at the start turns the whole line into a comment. The compiler ignores it.', ar: 'لأن السطر أصبح تعليقاً.' },
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
`, out: 'Price: 16 riyals', ar: 'النص بين اقتباس، والحساب بين أقواس، والتعليق للقارئ.' },
        { type: 'steps', title: 'Sharing a dinner bill', problem: 'Three friends share a dinner bill of 90 riyals equally. One friend pays her share with a 50-riyal note. Print the bill, each share and her change. Every number except 90 and 50 must be <b>calculated</b>.',
          steps: [
            { en: 'Plan the output on paper:<br><code>Bill: 90 riyals</code><br><code>Each pays: 30 riyals</code><br><code>Change from 50: 20 riyals</code>' },
            { en: 'Line 1 has no calculation. Plain text is enough.', code: J`System.out.println("Bill: 90 riyals");` },
            { en: 'Line 2: each share is <code>90 / 3</code>. Put it in parentheses between two pieces of text.', code: J`System.out.println("Each pays: " + (90 / 3) + " riyals");` },
            { en: 'Line 3: the change is <code>50 - 90 / 3</code>. Division goes first: 90 / 3 = 30, then 50 - 30 = 20. Again, wrap it in parentheses.', code: J`System.out.println("Change from 50: " + (50 - 90 / 3) + " riyals");` },
            { en: 'Add comments that explain the numbers. Check by hand: 30 + 30 + 30 = 90, and 50 - 30 = 20. Correct!' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        // dinner for 3 friends, 90 riyals in total
        System.out.println("Bill: 90 riyals");
        // each share = 90 / 3
        System.out.println("Each pays: " + (90 / 3) + " riyals");
        // she pays with a 50-riyal note
        System.out.println("Change from 50: " + (50 - 90 / 3) + " riyals");
    }
}
`, out: J`
Bill: 90 riyals
Each pays: 30 riyals
Change from 50: 20 riyals
`, ar: 'نخطط للناتج، ونضع كل حساب بين أقواس، ثم نتحقق باليد.' }
      ],
      mistakes: [
        { title: 'Putting a calculation in quotes', en: 'This prints the words, not the answer.', code: 'System.out.println("3 + 4");   // prints 3 + 4' },
        { title: 'Forgetting parentheses after text', en: 'This prints 34, not 7.', code: 'System.out.println("Sum: " + 3 + 4);' },
        { title: 'Not closing a block comment', en: 'A comment that starts with <code>/*</code> must end with <code>*/</code>.', code: '/* my note' },
        { title: 'Writing x for multiplication', en: 'Java does not know the letter x as an operator. The compiler stops with errors. Use the star <code>*</code>.', code: 'System.out.println(3 x 4);   // wrong: write 3 * 4' }
      ],
      remember: ['In quotes = printed as text. Not in quotes = calculated.', 'Operators: <code>+</code> <code>-</code> <code>*</code> <code>/</code>. Parentheses first, then <code>*</code> <code>/</code>, then <code>+</code> <code>-</code>, left to right.', '<code>+</code> joins text to a value; put calculations in <b>parentheses</b> after text.', '<code>//</code> is a line comment; <code>/* */</code> is a block comment.', 'The compiler ignores comments; <code>//</code> in front of a statement switches it off.'],
      rememberAr: 'بين الاقتباس نص وبدونه حساب. استخدم الأقواس بعد النص، والتعليقات تُتجاهل.',
      practice: [
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("4 + 6");
    }
}
`, answer: '4 + 6', explain: 'It is inside quotes, so it is text.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(4 + 6);
    }
}
`, answer: '10', explain: 'No quotes, so it is calculated.' },
        { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Sum = " + (4 + 6));
    }
}
`, answer: 'Sum = 10', explain: 'The parentheses add first.' },
        { t: 'mcq', q: 'Which is <b>not</b> a valid Java comment?', options: ['<code>// total price</code>', '<code>/* total price */</code>', '<code>&lt;!-- total price --&gt;</code>', '<code>/** total price */</code>'], answer: 2, explain: 'The HTML style is not valid in Java.' },
        { t: 'fill', q: 'Complete so the line prints <code>Total: 9</code>.', code: J`
System.out.println("Total: " ___ (4 + 5));
`, answers: ['+'], explain: '+ joins the text and the number.' },
        { t: 'output', q: 'Careful! What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("5 + 3 = " + 5 + 3);
        System.out.println("5 + 3 = " + (5 + 3));
        System.out.println(5 + 3 + " apples");
    }
}
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
`, hint: 'Use parentheses around the sum.', explain: 'The parentheses make Java add the numbers before joining.' },
        { t: 'output', q: 'Remember the order of operations. What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(4 + 6 / 2);
        System.out.println((4 + 6) / 2);
        System.out.println("Change: " + (50 - 2 * 12));
    }
}
`, answer: '7\n5\nChange: 26', explain: 'Line 1: 6 / 2 = 3 first, then 4 + 3 = 7. Line 2: parentheses first, 10 / 2 = 5. Line 3: 2 * 12 = 24, then 50 - 24 = 26.', explainAr: 'الضرب والقسمة قبل الجمع والطرح، إلا إذا وُجدت أقواس.' },
        { t: 'bug', q: 'This program should print <code>Books: 100</code>. It runs, but it prints <code>Books: 4 * 25</code>. Tap the line with the bug.', qAr: 'البرنامج يطبع العملية بدل الناتج. أين الخطأ؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        // 4 books at 25 riyals each
        System.out.println("Books: " + "4 * 25");
    }
}
`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        // 4 books at 25 riyals each
        System.out.println("Books: " + (4 * 25));
    }
}
`, explain: 'The calculation is inside quotes, so Java treats it as text and prints it as it is. Remove the quotes and use parentheses: <code>(4 * 25)</code>.', explainAr: 'الحساب داخل علامات الاقتباس يُطبع كنص.' },
        { t: 'bug', q: 'This program does not compile. Tap the line with the bug.', qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Tickets: 3");
        System.out.println("Total: " + (3 x 4) + " riyals");
    }
}
`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Tickets: 3");
        System.out.println("Total: " + (3 * 4) + " riyals");
    }
}
`, explain: 'Java multiplies with the star <code>*</code>. The letter <code>x</code> is not an operator, so the compiler gets confused and reports errors on line 4.', explainAr: 'الضرب في جافا بالنجمة * وليس بالحرف x.' },
        { t: 'code', q: 'You buy 3 books at 25 riyals each and pay with a 100-riyal note. Print <code>Change: 25 riyals</code>, where 25 is <b>calculated</b> in the program as <code>100 - 3 * 25</code>. No input.', qAr: 'احسب{{g:|ي}} الباقي داخل البرنامج.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // print the change here
    }
}
`, tests: [{ stdin: '', expected: 'Change: 25 riyals' }], solution: J`
public class Main {
    public static void main(String[] args) {
        // 3 books at 25 riyals, paid with 100
        System.out.println("Change: " + (100 - 3 * 25) + " riyals");
    }
}
`, hint: 'Text, then <code>+</code>, then the calculation in parentheses, then <code>+ " riyals"</code>.', explain: 'Inside the parentheses, 3 * 25 = 75 is done first, then 100 - 75 = 25.' }
      ]
    },
    {
      title: 'The three kinds of errors',
      titleAr: 'أنواع الأخطاء الثلاثة',
      minutes: 35,
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
        { type: 'p', en: 'Why learn three kinds? Because each kind is found at a different time, by a different "detective". The <b>compiler</b> finds syntax errors before the program runs. The <b>JVM</b> stops the program at a runtime error and prints a message. Only <b>you</b> can find a logic error, by checking the output. When you know the kind, you know who to ask and where to look.',
          ar: 'المترجم يكتشف الخطأ النحوي، وJVM توقف البرنامج عند خطأ التشغيل، وأنت وحدك تكتشف الخطأ المنطقي.' },
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
        { type: 'p', en: 'The syntax errors you will meet most often in this unit:' },
        { type: 'list', items: [
          'A missing semicolon <code>;</code> at the end of a statement.',
          'A missing double quote <code>"</code> at the end of the text.',
          'A wrong capital letter: <code>system</code>, <code>string</code>, <code>Println</code>.',
          'A misspelled word: <code>printn</code>, <code>printIn</code>, <code>Sytem</code>.',
          'A missing brace <code>}</code> or parenthesis <code>)</code>.'
        ], ar: 'أشهر الأخطاء النحوية: فاصلة منقوطة أو علامة اقتباس أو قوس ناقص، أو حرف كبير في غير مكانه.' },
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
        { type: 'code', code: J`
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at Main.main(Main.java:3)
` },
        { type: 'lines', title: 'Read the crash message', rows: [
          ['Exception in thread "main"', 'An <b>exception</b> is Java\'s name for a runtime error. It happened in <code>main</code>.'],
          ['java.lang.ArithmeticException', 'The kind of problem: an <b>arithmetic</b> (maths) problem.'],
          ['/ by zero', 'The details: something was divided by zero.'],
          ['at Main.main(Main.java:3)', 'Where: in the file <code>Main.java</code>, on <b>line 3</b>.']
        ], ar: 'رسالة الانهيار تذكر نوع المشكلة ورقم السطر.' },
        { type: 'p', en: 'Statements <b>before</b> the crash still run. If line 3 printed <code>Start</code> and line 4 divided by zero, you would see <code>Start</code> on the screen, and then the crash message. Everything after the crash is never reached.' },
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
        { type: 'p', en: 'Here is a surprise: a spelling mistake <b>inside quotes</b> is a logic error, not a syntax error. The compiler never checks the text between quotes. It prints whatever you wrote, so <code>"Totl: 100"</code> compiles, runs and prints <code>Totl: 100</code>. The output is wrong, but there is no message.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Welcom to CS101");
    }
}
`, out: 'Welcom to CS101' },
        { type: 'check', q: 'The program above prints <code>Welcom</code> without an e. Which kind of error is it?', options: ['Logic error', 'Syntax error', 'Runtime error', 'No error at all'], answer: 0,
          explain: 'It compiles and runs, but the output is not what we wanted. Text inside quotes is never checked by the compiler.', ar: 'خطأ منطقي لأن المترجم لا يفحص النص داخل علامات الاقتباس.' },
        { type: 'h', en: 'Testing: compare with what you expect' },
        { type: 'p', en: 'To catch logic errors, decide the correct output <b>before</b> you run the program: work it out by hand or with a calculator. Then run the program and compare the real output with yours, character by character: spelling, spaces, capital letters and numbers. If they are different, there is a logic error to find.',
          ar: 'احسب{{g:|ي}} الناتج المتوقع قبل التشغيل، ثم قارن{{g:|ي}}ه بالناتج الحقيقي حرفاً بحرف.' },
        { type: 'analogy', title: 'Checking your café receipt', en: 'At the café you ordered two coffees at 12 riyals. Before you pay, you think "that should be 24". If the receipt says 36, you know something is wrong, even though the machine printed it without any warning. Testing a program is the same habit.' },
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
        { type: 'steps', title: 'Fix two syntax errors, one at a time', problem: 'This program should print <code>Hello</code>, but it does not compile:<br><code>system.out.println("Hello")</code><br>It has two mistakes. Fix them the calm way: one message, one fix, compile again.',
          steps: [
            { en: 'Compile. The compiler shows only <b>one</b> message, about line 3.', code: J`
Main.java:3: error: ';' expected
        system.out.println("Hello")
                                   ^
` },
            { en: 'The message says a <code>;</code> is expected, and the arrow points to the end of the line. Add the semicolon.', code: J`system.out.println("Hello");` },
            { en: 'Compile again. Now a <b>new</b> message appears. This is normal: the compiler could not see the second mistake before.', code: J`
Main.java:3: error: package system does not exist
        system.out.println("Hello");
              ^
` },
            { en: 'Java does not know <code>system</code> with a small s. Change it to <code>System</code>.', code: J`System.out.println("Hello");` },
            { en: 'Compile again: no messages. Run the program and compare the output with what you expected: <code>Hello</code>. It matches.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
`, out: 'Hello', ar: 'نصلح خطأً واحداً ثم نترجم من جديد، فقد تظهر رسالة جديدة.' },
        { type: 'note', kind: 'warn', en: 'Read the <b>first</b> compiler message first. One missing brace can create many messages. Fix the first and run again.' }
      ],
      mistakes: [
        { title: 'Reading the last error first', en: 'Start with the first error message; the later ones are often caused by it.' },
        { title: 'Calling a wrong answer a "syntax error"', en: 'If the program runs and the answer is wrong, it is a <b>logic</b> error.' },
        { title: 'Expecting the compiler to find runtime errors', en: 'Dividing by zero compiles. It only fails when it runs.', code: 'System.out.println(10 / 0);' },
        { title: 'Stopping after one fix', en: 'After you fix one error, compile again. New messages may appear, because the compiler can now read further.' }
      ],
      remember: ['<b>Syntax error</b>: broken grammar, found by the compiler, no <code>.class</code> file.', '<b>Runtime error</b>: crashes while running; the message names the problem and the line.', '<b>Logic error</b>: runs, but gives a wrong answer (even a typo inside quotes).', 'Read the <b>first</b> error message first, fix one thing, compile again.', 'Decide the expected output first, then compare it with the real output.'],
      rememberAr: 'نحوي: يكتشفه المترجم. وقت التشغيل: يتوقف البرنامج. منطقي: النتيجة خاطئة بلا رسالة.',
      practice: [
        { t: 'mcq', q: 'A student forgets the semicolon after a <code>println</code>. Which error?', options: ['Syntax error', 'Runtime error', 'Logic error', 'It is fine'], answer: 0, explain: 'Missing semicolons are syntax errors.' },
        { t: 'mcq', q: 'The program compiles but stops with <code>/ by zero</code>. Which error?', options: ['Syntax error', 'Runtime error', 'Logic error', 'Compile error'], answer: 1, explain: 'It crashed while running.' },
        { t: 'mcq', q: 'The program prints the wrong total with no message. Which error?', options: ['Syntax', 'Runtime', 'Logic', 'None'], answer: 2, explain: 'Wrong result, no crash: logic error.' },
        { t: 'output', q: 'What do these two lines print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(70 + 90 / 2);
        System.out.println((70 + 90) / 2);
    }
}
`, answer: '115\n80', explain: 'Division first (45), then 70 + 45 = 115. With parentheses: 160 / 2 = 80.' },
        { t: 'fill', q: 'Fix the two syntax errors so the line prints <code>Fixed!</code>.', code: J`
System.out.___("Fixed!")___
`, answers: ['println', ';'], explain: 'println and a final semicolon.' },
        { t: 'order', q: 'Order the steps for fixing a program that does not compile.', lines: ['Read the first error message', 'Go to the line it points to', 'Fix that one problem', 'Compile again'], explain: 'Always fix one thing and compile again.' },
        { t: 'mcq', q: 'Which kind of error does the compiler <b>not</b> find for you?', options: ['Missing semicolon', 'Misspelled println', 'A wrong formula', 'Missing brace'], answer: 2, explain: 'A wrong formula is a logic error; the compiler cannot know what you meant.' },
        { t: 'mcq', q: 'A program contains <code>System.out.println("Exma: Sunday");</code>. It compiles and runs. Which kind of error is the spelling of "Exma"?', options: ['Logic error', 'Syntax error', 'Runtime error', 'Not an error'], answer: 0,
          explain: 'The compiler does not check text inside quotes. The program runs, but the output is wrong: a logic error.', explainAr: 'النص داخل علامات الاقتباس لا يفحصه المترجم.' },
        { t: 'bug', q: 'This program does not compile. The compiler says <i>unclosed string literal</i>. Tap the line with the bug.', qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Exam: Sunday");
        System.out.println("Room: 105);
    }
}
`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Exam: Sunday");
        System.out.println("Room: 105");
    }
}
`, explain: 'The text on line 4 opens with <code>"</code> but never closes. Add the closing double quote before <code>)</code>. This is a <b>syntax</b> error.', explainAr: 'ينقص علامة الاقتباس الختامية في السطر 4.' },
        { t: 'bug', q: 'This program should print the average of two quiz marks, 8 and 10, which is 9. It runs, but it prints <code>Average: 13</code>. Tap the line with the bug.', qAr: 'الناتج خاطئ دون أي رسالة. أين الخطأ؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        // average of two quiz marks: 8 and 10
        System.out.println("Quiz marks: 8 and 10");
        System.out.println("Average: " + (8 + 10 / 2));
    }
}
`, bug: 5,
          fix: J`
public class Main {
    public static void main(String[] args) {
        // average of two quiz marks: 8 and 10
        System.out.println("Quiz marks: 8 and 10");
        System.out.println("Average: " + ((8 + 10) / 2));
    }
}
`, explain: 'Division goes before addition, so Java does 10 / 2 = 5 and then 8 + 5 = 13. This is a <b>logic</b> error. Put the sum in its own parentheses: <code>(8 + 10) / 2</code> = 9.', explainAr: 'خطأ منطقي: يجب جمع العلامتين أولاً بين أقواس.' }
      ]
    },
    {
      title: 'Using the NetBeans IDE',
      titleAr: 'استخدام بيئة NetBeans',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why use an IDE?' },
        { type: 'p', en: 'Typing <code>javac</code> and <code>java</code> every time is slow. An <b>IDE</b> (Integrated Development Environment) does it for you with one click. It also underlines your mistakes in red while you type. We use <b>NetBeans</b>.',
          ar: 'بيئة التطوير تجمع المحرر والمترجم والمشغّل في برنامج واحد.' },
        { type: 'analogy', title: 'A kitchen with everything in one place', en: 'You could cook with tools scattered across the house. An IDE is a kitchen where the stove, knives and sink are together, so cooking is faster.' },
        { type: 'h', en: 'A tour of the NetBeans window' },
        { type: 'p', en: 'The first time you open NetBeans, the window looks busy. You only need four areas:' },
        { type: 'list', items: [
          '<b>Projects</b> window (left): your projects and their files. Double-click a file to open it.',
          '<b>Editor</b> (middle): where you type your code. It shows line numbers and colours the words.',
          '<b>Output</b> window (bottom): what your program prints, and the messages from the compiler.',
          '<b>Toolbar</b> (top): the green <b>Run</b> arrow, the <b>Debug</b> button and <b>Save</b>.'
        ], ar: 'أهم الأجزاء: نافذة المشاريع، والمحرر، ونافذة الإخراج، وشريط الأدوات.' },
        { type: 'h', en: 'Create and run a project' },
        { type: 'list', items: [
          '<b>Create:</b> File &gt; New Project &gt; Java &gt; Java Application. Give it a name. NetBeans makes a class with a <code>main</code> method.',
          '<b>Write:</b> type your statements inside <code>main</code>.',
          '<b>Run:</b> press <b>F6</b> or click the green arrow. Output appears in the <i>Output</i> window at the bottom.'
        ], ar: 'مشروع جديد، ثم اكتب الشيفرة، ثم F6 للتشغيل.' },
        { type: 'note', kind: 'tip', en: 'In newer versions of NetBeans the category may be called <i>Java with Ant</i> or <i>Java with Maven</i> instead of <i>Java</i>. Choose the one your teacher uses, then <i>Java Application</i>. NetBeans saves your projects in a folder called <code>NetBeansProjects</code> (usually inside <i>Documents</i>).' },
        { type: 'check', q: 'Which key runs the project in NetBeans?', options: ['F6', 'F1', 'Esc', 'Tab'], answer: 0, explain: 'F6 runs the project.', ar: 'F6' },
        { type: 'h', en: 'The code NetBeans writes for you' },
        { type: 'p', en: 'NetBeans names the class after your project. For a project called <code>Hello</code> you may see <code>public class Hello</code> in a file called <code>Hello.java</code>, and a line such as <code>package hello;</code> at the top. It may also add comments. Leave these lines as they are. The rule from Lesson 3 still holds: the file name and the class name match.',
          ar: 'NetBeans يسمّي الصنف باسم المشروع وقد يضيف سطر package في الأعلى؛ اتركه كما هو.' },
        { type: 'code', code: J`
package hello;

public class Hello {

    public static void main(String[] args) {
        // TODO code application logic here
    }
}
` },
        { type: 'p', en: 'On this website the class is always <code>Main</code> and there is no <code>package</code> line. When you move code between NetBeans and this site, copy only the statements <b>inside</b> <code>main</code>.' },
        { type: 'h', en: 'Reading the Output window' },
        { type: 'p', en: 'When you press F6, the Output window shows more than your program\'s text. NetBeans adds its own messages before and after it.' },
        { type: 'code', code: J`
run:
Hello from NetBeans
BUILD SUCCESSFUL (total time: 0 seconds)
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['run:', 'A message from NetBeans: "I am starting your program".'],
          ['Hello from NetBeans', 'This is <b>your</b> output, printed by your <code>println</code>.'],
          ['BUILD SUCCESSFUL (total time: 0 seconds)', 'A message from NetBeans: the program finished normally. <code>BUILD FAILED</code> means there were errors; read the red lines above it.']
        ], ar: 'السطر الأوسط هو ناتج برنامجك، والباقي رسائل من NetBeans.' },
        { type: 'h', en: 'Red underlines' },
        { type: 'p', en: 'If you see a red line under your code, NetBeans found a syntax error. Move the mouse over it and read the message. A red icon in the left margin also shows the line.' },
        { type: 'check', q: 'What does a red underline usually mean?', options: ['A syntax error', 'The program is perfect', 'A comment', 'A slow computer'], answer: 0, explain: 'The IDE found a problem.', ar: 'خطأ نحوي.' },
        { type: 'h', en: 'Shortcuts that save time' },
        { type: 'table', head: ['Press', 'What it does'], rows: [
          ['Type <code>sout</code>, then <b>Tab</b>', 'Writes <code>System.out.println("");</code> for you'],
          ['<b>Ctrl + Space</b>', 'Shows suggestions to finish the word you are typing'],
          ['<b>Alt + Shift + F</b>', 'Fixes the indentation of the whole file'],
          ['<b>Ctrl + S</b>', 'Saves the file'],
          ['<b>F6</b>', 'Runs the main project'],
          ['<b>Shift + F6</b>', 'Runs the file that is open now'],
          ['<b>Ctrl + /</b>', 'Turns the selected lines into comments, or back']
        ] },
        { type: 'check', q: 'In the NetBeans editor you type <code>sout</code> and press Tab. What appears?', options: ['<code>System.out.println("");</code>', 'A new project', 'The Output window', 'A breakpoint'], answer: 0,
          explain: '<code>sout</code> + Tab is a shortcut for the print statement. It saves typing and avoids spelling mistakes.', ar: 'تظهر جملة الطباعة جاهزة.' },
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
        { type: 'steps', title: 'Find a logic error with the debugger', problem: 'Your program should print a café bill: 2 coffees at 12 riyals and 1 cake at 9 riyals, total 33. It prints <code>Total: 249</code> instead. Use the debugger to watch it line by line.',
          steps: [
            { en: 'Click the line number of the first <code>println</code>. A red mark (the breakpoint) appears, and the line turns red.' },
            { en: 'Choose <b>Debug Project</b> (Ctrl + F5). The program starts and pauses on the breakpoint, before that line runs. The line turns green.' },
            { en: 'Press <b>F8</b> once. One line runs, and <code>Coffee x2: 24</code> appears in the Output window. Correct.' },
            { en: 'Press <b>F8</b> again: <code>Cake x1: 9</code>. Correct. Press F8 once more and you see <code>Total: 249</code>. The problem is on <b>this</b> line.', code: J`System.out.println("Total: " + 2 * 12 + 9);` },
            { en: 'Read it carefully: 2 * 12 = 24 is joined to the text, then 9 is joined too: <code>249</code>. Add parentheses around the whole sum, then run again.', code: J`System.out.println("Total: " + (2 * 12 + 9));` }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Coffee x2: " + (2 * 12));
        System.out.println("Cake x1: 9");
        System.out.println("Total: " + (2 * 12 + 9));
    }
}
`, out: J`
Coffee x2: 24
Cake x1: 9
Total: 33
`, ar: 'نضع نقطة توقف، ثم ننفذ سطراً سطراً بـ F8 حتى نجد السطر الذي يعطي نتيجة خاطئة.' },
        { type: 'note', kind: 'tip', en: 'Use the debugger for logic errors. Instead of guessing, pause and check each value.' }
      ],
      mistakes: [
        { title: 'Ignoring red underlines', en: 'Fix red marks before you press Run. If NetBeans warns that the project has errors and offers to run it anyway, do not: fix the red lines first.' },
        { title: 'Choosing the wrong project type', en: 'Choose <i>Java Application</i>. Other types do not give you a main method.' },
        { title: 'Looking for output in the wrong place', en: 'Output appears in the <i>Output</i> window at the bottom, between <code>run:</code> and <code>BUILD SUCCESSFUL</code>.' },
        { title: 'Running the wrong project', en: '<b>F6</b> runs the <i>main</i> project. If several projects are open, you may run an old one and wonder why nothing changed. Right-click your project and choose <i>Run</i>, or press <b>Shift + F6</b> to run the file that is open.' }
      ],
      remember: ['An <b>IDE</b> combines editor, compiler, runner and debugger.', '<b>F6</b> runs the project; <code>sout</code> + Tab writes a print statement.', 'The Output window shows <code>run:</code>, your output, then <code>BUILD SUCCESSFUL</code>.', 'Red underlines show syntax errors.', 'NetBeans names the class after the project; on this site it is always <code>Main</code>.', 'A <b>breakpoint</b> pauses the program; <b>F8</b> steps one line.'],
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
`, answer: 'Hello\nNetBeans', explain: 'Two println statements make two lines.' },
        { t: 'mcq', q: 'In the NetBeans editor you type <code>sout</code> and then press <b>Tab</b>. What happens?', options: ['NetBeans writes <code>System.out.println("");</code>', 'The program runs', 'A new project is created', 'The file is deleted'], answer: 0,
          explain: '<code>sout</code> + Tab is a code shortcut. Put your text between the quotes.' },
        { t: 'mcq', q: 'The Output window shows these three lines. Which line did <b>your program</b> print?<br><code>run:</code><br><code>Exam on Sunday</code><br><code>BUILD SUCCESSFUL (total time: 0 seconds)</code>', options: ['<code>Exam on Sunday</code>', '<code>run:</code>', '<code>BUILD SUCCESSFUL (total time: 0 seconds)</code>', 'All three'], answer: 0,
          explain: '<code>run:</code> and <code>BUILD SUCCESSFUL</code> are messages from NetBeans. Your output is in between.', explainAr: 'السطر الأوسط فقط هو ناتج برنامجك.' },
        { t: 'bug', q: 'In NetBeans this file is called <code>Hello.java</code>. The editor shows a red line. Tap the line with the bug.', qAr: 'اسم الملف Hello.java. أين الخطأ؟',
          code: J`
package hello;

public class hello {
    public static void main(String[] args) {
        System.out.println("Hello from NetBeans");
    }
}
`, bug: 3,
          fix: J`
package hello;

public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello from NetBeans");
    }
}
`, explain: 'The class name must match the file name exactly, capital letters included. The file is <code>Hello.java</code>, so the class must be <code>Hello</code>, not <code>hello</code>.', explainAr: 'اسم الصنف يطابق اسم الملف بالأحرف الكبيرة.' },
        { t: 'order', q: 'Order the steps to find a logic error with the debugger.', lines: ['Click a line number to set a breakpoint', 'Choose Debug Project', 'The program pauses at the breakpoint', 'Press F8 to run one line', 'Check the Output window after each step'], explain: 'Set the breakpoint, start debugging, then step one line at a time and watch what happens.' }
      ]
    },
    {
      title: 'Problem solving: algorithms, pseudocode and flowcharts',
      titleAr: 'حل المسائل: الخوارزميات والشيفرة الزائفة والمخططات الانسيابية',
      minutes: 35,
      body: [
        { type: 'h', en: 'Think first, code second' },
        { type: 'p', en: 'Beginners often start typing code immediately and get stuck. Good programmers first make a <b>plan</b>. A plan with clear steps is called an <b>algorithm</b>.',
          ar: 'الخوارزمية خطة بخطوات واضحة، نخطط قبل أن نكتب الشيفرة.' },
        { type: 'analogy', title: 'A route on the map', en: 'Before you drive from Riyadh to Jeddah, you look at the route. An algorithm is the route. The code is the driving.' },
        { type: 'check', q: 'What is an algorithm?', options: ['A clear step-by-step plan', 'A kind of error', 'A hardware part', 'A comment'], answer: 0, explain: 'An algorithm is a plan with steps.', ar: 'خطة بخطوات.' },
        { type: 'h', en: 'What makes a good algorithm?' },
        { type: 'p', en: 'You already follow algorithms every day: the steps to buy a metro ticket, to make Arabic coffee, or to register for a course. A good algorithm, for a person or for a computer, has five qualities:' },
        { type: 'list', items: [
          '<b>Clear:</b> each step has only one meaning. "Add some sugar" is not clear; "add 2 spoons of sugar" is.',
          '<b>Ordered:</b> the steps come in the right order.',
          '<b>Finite:</b> it <b>ends</b> after a number of steps. It does not go on for ever.',
          '<b>Correct:</b> it gives the right result.',
          '<b>Doable:</b> every step is something the worker (or the computer) can really do.'
        ], ar: 'الخوارزمية الجيدة واضحة ومرتبة ولها نهاية وصحيحة وقابلة للتنفيذ.' },
        { type: 'code', code: J`
Start
Go to the ticket machine
Choose "Single trip"
Pay the fare
Take the ticket
End
` },
        { type: 'p', en: 'This plan for buying a metro ticket is clear, ordered and finite: six short lines, one action each, from Start to End.' },
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
        { type: 'p', en: 'A simple way to start any plan is to answer three questions, in this order: <b>What do I have?</b> (input) <b>What must I do?</b> (processing) <b>What must I show?</b> (output). You met these three parts in Lesson 1.' },
        { type: 'table', head: ['Question', 'Café bill example'], rows: [
          ['What do I have? (input)', 'The number of coffees and the price of one coffee'],
          ['What must I do? (processing)', 'total = number * price'],
          ['What must I show? (output)', 'The total in riyals']
        ] },
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
        { type: 'p', en: 'Here is the rectangle plan from above, drawn as a flowchart with text characters. Follow the arrows from top to bottom: oval, parallelogram, rectangle, parallelogram, oval.' },
        { type: 'code', code: J`
        (  Start  )
             |
             v
  / Get width and height /
             |
             v
  [ area = width * height ]
             |
             v
      / Display area /
             |
             v
        (   End   )
` },
        { type: 'p', en: 'In Unit 3 you will add diamonds, when the program must choose between two paths (for example "Is the mark at least 60?"). In this unit, every flowchart is one straight line from Start to End.', ar: 'في هذه الوحدة يسير المخطط في خط مستقيم من البداية إلى النهاية.' },
        { type: 'h', en: 'Test your plan by hand' },
        { type: 'p', en: 'Before you write code, follow your plan with real numbers, exactly like the computer would. Write down the result of every step. This is called <b>tracing</b> (or <b>desk-checking</b>). If the plan gives a wrong answer on paper, the program will give the same wrong answer, so it is much cheaper to find the problem now.',
          ar: 'تتبُّع الخطة بأرقام حقيقية على الورق يكشف الأخطاء قبل كتابة الشيفرة.' },
        { type: 'analogy', title: 'A practice drive', en: 'Before a long trip, you might trace the route on the map with your finger: "exit 5, then left, then 20 km straight". If your finger reaches the sea, you fix the route before you start the car. Tracing a plan is the same.' },
        { type: 'check', q: 'You trace the plan with width 4 and height 6. What result should the plan give?', options: ['24', '10', '46', '2'], answer: 0,
          explain: 'area = width * height = 4 * 6 = 24.', ar: '24' },
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
        { type: 'steps', title: 'Weekly metro cost', problem: 'You take the metro twice a day, 5 days a week. One trip costs 4 riyals. Plan, trace and print the number of trips and the weekly cost.',
          steps: [
            { en: '<b>Understand</b>: trips per week = trips per day × days. Cost = trips per week × price of one trip.' },
            { en: '<b>Plan</b> in pseudocode, one action per line.', code: J`
Start
Use 2 trips a day, 5 days, 4 riyals a trip
trips = 2 * 5
cost = trips * 4
Display trips and cost
End
` },
            { en: '<b>Trace</b> by hand: trips = 2 × 5 = 10, cost = 10 × 4 = 40. So we expect 10 trips and 40 riyals.' },
            { en: '<b>Translate</b> each output into Java. We have no variables yet (Unit 2), so we write the whole calculation inside the parentheses.', code: J`
System.out.println("Trips per week: " + (2 * 5));
System.out.println("Weekly cost: " + (2 * 5 * 4) + " riyals");
` },
            { en: '<b>Test</b>: run the program and compare with the trace: 10 and 40. They match.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        // 2 trips a day, 5 days a week, 4 riyals a trip
        System.out.println("Trips per week: " + (2 * 5));
        System.out.println("Weekly cost: " + (2 * 5 * 4) + " riyals");
    }
}
`, out: J`
Trips per week: 10
Weekly cost: 40 riyals
`, ar: 'نفهم المسألة، ونخطط، ونتتبع باليد، ثم نترجم إلى جافا ونقارن الناتج.' },
        { type: 'note', kind: 'tip', en: 'Always test with an example you can calculate in your head, then compare it with the output.' }
      ],
      mistakes: [
        { title: 'Starting to code without a plan', en: 'Write 4-6 pseudocode lines first.' },
        { title: 'Putting two actions in one pseudocode line', en: 'One line, one action. It is easier to translate.' },
        { title: 'Using the wrong flowchart shape', en: 'A calculation is a rectangle, not a diamond.' },
        { title: 'Forgetting to test', en: 'Check your answer with a simple example.' }
      ],
      remember: ['An <b>algorithm</b> is a step-by-step plan: clear, ordered, finite, correct and doable.', '<b>Pseudocode</b> writes the plan in plain words, one action per line.', '<b>Flowcharts</b> draw it: oval, parallelogram, rectangle, diamond, arrow.', 'Plan: input, process, output.', '<b>Trace</b> the plan by hand with real numbers before you code, and test the program against your trace.'],
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
`, hint: 'Use text, plus, and the calculation in parentheses.', explain: '3 * 8 = 24, joined to the text.' },
        { t: 'mcq', q: 'Which one is <b>not</b> a quality of a good algorithm?', options: ['Each step is clear', 'The steps are in the right order', 'It never ends', 'It gives the correct result'], answer: 2,
          explain: 'A good algorithm is <b>finite</b>: it must end after a number of steps.' },
        { t: 'bug', q: 'This plan should display the total price of some books. One step is in the wrong place. Tap it.', qAr: 'خطوة واحدة في غير مكانها. أين هي؟',
          code: J`
Start
Read the price of one book
Read the number of books
Display total
total = price * number
End
`, bug: [4, 5],
          fix: J`
Start
Read the price of one book
Read the number of books
total = price * number
Display total
End
`, explain: 'You cannot display the total before you calculate it. The order must be input, then processing, then output.', explainAr: 'لا يمكن عرض المجموع قبل حسابه: إدخال ثم معالجة ثم إخراج.' },
        { t: 'output', q: 'A student reads 12 pages a day for 5 days. This program follows the plan. What does it print?', code: J`
public class Main {
    public static void main(String[] args) {
        // 12 pages a day, 5 days
        System.out.println("Days: 5");
        System.out.println("Pages: " + (12 * 5));
    }
}
`, answer: 'Days: 5\nPages: 60', explain: '12 × 5 = 60. The calculation is inside parentheses, so it is done before joining.' },
        { t: 'code', q: 'Plan: 4 notebooks at 6 riyals each and 2 pens at 3 riyals each. Print <code>Total: 30 riyals</code>, where 30 is <b>calculated</b> in the program. Trace it by hand first. No input.', qAr: 'تتبّع{{g:|ي}} الحساب باليد أولاً: 4 × 6 + 2 × 3.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // 4 notebooks x 6 riyals, 2 pens x 3 riyals
    }
}
`, tests: [{ stdin: '', expected: 'Total: 30 riyals' }], solution: J`
public class Main {
    public static void main(String[] args) {
        // 4 notebooks x 6 riyals, 2 pens x 3 riyals
        System.out.println("Total: " + (4 * 6 + 2 * 3) + " riyals");
    }
}
`, hint: 'Inside the parentheses, Java multiplies first: 4 * 6 + 2 * 3 = 24 + 6.', explain: 'Multiplication comes before addition: 24 + 6 = 30. The outer parentheses make Java calculate before joining the text.' }
      ]
    },
    {
      title: 'Bits, bytes and number systems',
      titleAr: 'البتات والبايتات وأنظمة العد',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why computers use only 0 and 1' },
        { type: 'p', en: 'In Lesson 2 you learned that the CPU understands only 0s and 1s. But why? A computer is built from billions of tiny electronic <b>switches</b>. A switch has only two states: <b>on</b> or <b>off</b>. It is very easy and very reliable for a machine to tell "on" from "off", even when it works billions of times a second. So we write on as <b>1</b> and off as <b>0</b>.',
          ar: 'الحاسب مكوَّن من مفاتيح صغيرة جداً لها حالتان فقط: تشغيل (1) وإطفاء (0).' },
        { type: 'analogy', title: 'A row of light switches', en: 'Imagine a row of light switches on a wall. Each switch is on or off. With one switch you can make 2 patterns. With two switches you can make 4 patterns: off-off, off-on, on-off, on-on. Every new switch <b>doubles</b> the number of patterns. A computer stores everything (numbers, letters, photos, songs) as patterns of switches like these.',
          ar: 'كل مفتاح جديد يضاعف عدد الأنماط الممكنة.' },
        { type: 'p', en: 'One 0 or 1 is called a <b>bit</b> (short for <i>binary digit</i>). A group of <b>8 bits</b> is called a <b>byte</b>. Because every bit doubles the patterns, one byte can hold 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = <b>256</b> different patterns, from <code>00000000</code> to <code>11111111</code>.' },
        { type: 'table', head: ['Number of bits', 'Number of patterns'], rows: [
          ['1', '2'],
          ['2', '4'],
          ['3', '8'],
          ['4', '16'],
          ['8 (one byte)', '256']
        ] },
        { type: 'check', q: 'How many bits are in one byte?', options: ['8', '2', '10', '256'], answer: 0,
          explain: 'A byte is a group of 8 bits. (256 is the number of patterns one byte can hold.)', ar: 'البايت = 8 بتات.' },
        { type: 'h', en: 'The numbers you already use: decimal' },
        { type: 'p', en: 'Before binary, look closely at your normal numbers. They are called <b>decimal</b> (base 10), because they use ten digits, 0 to 9. The <b>place</b> of a digit gives its value. Each place is worth 10 times the place on its right: ones, tens, hundreds, thousands.' },
        { type: 'table', head: ['Place', 'Hundreds (100)', 'Tens (10)', 'Ones (1)'], rows: [
          ['Digit in 345', '3', '4', '5'],
          ['Value', '300', '40', '5']
        ] },
        { type: 'p', en: 'So 345 really means 300 + 40 + 5. You do this in your head without thinking. Binary works in exactly the same way, with smaller places.' },
        { type: 'h', en: 'Binary: base 2' },
        { type: 'p', en: '<b>Binary</b> (base 2) uses only two digits, 0 and 1. Each place is worth <b>2 times</b> the place on its right: 1, 2, 4, 8, 16, 32, 64, 128. To find the value of a binary number, write the place values above the digits and <b>add the values that have a 1</b> under them.',
          ar: 'في النظام الثنائي قيمة كل خانة ضعف التي على يمينها: 1، 2، 4، 8، 16... ونجمع الخانات التي تحتها 1.' },
        { type: 'table', head: ['Place value', '8', '4', '2', '1'], rows: [
          ['Binary digit in 1011', '1', '0', '1', '1'],
          ['Value', '8', '0', '2', '1']
        ] },
        { type: 'p', en: 'Add the values: 8 + 0 + 2 + 1 = 11. So binary <code>1011</code> is decimal <b>11</b>. Java can do the adding for you:' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("1011 in binary = " + (8 + 0 + 2 + 1));
    }
}
`, out: '1011 in binary = 11' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['"1011 in binary = "', 'Text in quotes: printed exactly as written.'],
          ['(8 + 0 + 2 + 1)', 'The place values under each 1 (and 0 under the 0). Java adds them: 11.']
        ] },
        { type: 'check', q: 'What is binary <code>110</code> in decimal?', options: ['6', '110', '3', '4'], answer: 0,
          explain: 'The places are 4, 2, 1. The 1s are under 4 and 2: 4 + 2 + 0 = 6.', ar: '4 + 2 = 6' },
        { type: 'h', en: 'Decimal to binary' },
        { type: 'p', en: 'To go the other way, use the place values from the <b>left</b> (the biggest that is not too big). At each place ask: "Does this value fit into what is left?" If yes, write <b>1</b> and subtract it. If no, write <b>0</b>. Continue until you reach the 1s place.' },
        { type: 'analogy', title: 'Paying with special notes', en: 'Imagine you must pay 13 riyals using special notes of 8, 4, 2 and 1 riyal, and you may use each note at most once. Take the 8 (5 left). Take the 4 (1 left). The 2 is too big: skip it. Take the 1 (0 left). The notes you took are 8, 4 and 1, and the one you skipped is 2. Write 1 for "taken" and 0 for "skipped": <code>1101</code>.',
          ar: 'نأخذ أكبر قيمة تناسب الباقي ونكتب 1، ونتخطى ما لا يناسب ونكتب 0.' },
        { type: 'steps', title: 'Convert 25 to binary', problem: 'Write the decimal number 25 in binary, then check the answer with Java.',
          steps: [
            { en: 'Write the place values that are not bigger than 25: <code>16  8  4  2  1</code>. (32 is too big.)' },
            { en: '16 fits into 25: write <b>1</b>, and 25 - 16 = 9 is left.' },
            { en: '8 fits into 9: write <b>1</b>, and 9 - 8 = 1 is left.' },
            { en: '4 does not fit into 1: write <b>0</b>. 2 does not fit: write <b>0</b>. 1 fits: write <b>1</b>, and 0 is left.' },
            { en: 'Read the digits in order: <code>11001</code>. Check by adding the places with a 1: 16 + 8 + 1 = 25.', code: J`System.out.println("Check: " + (16 + 8 + 0 + 0 + 1));` }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("25 = 16 + 8 + 1");
        System.out.println("Binary: 11001");
        System.out.println("Check: " + (16 + 8 + 0 + 0 + 1));
    }
}
`, out: J`
25 = 16 + 8 + 1
Binary: 11001
Check: 25
`, ar: 'نطرح أكبر قيمة مناسبة في كل خطوة، ثم نتحقق بالجمع.' },
        { type: 'note', kind: 'exam', en: 'Another method in many books: <b>divide by 2</b> again and again and write down the remainders, then read them from the <b>bottom up</b>. For 13: 13 ÷ 2 = 6 remainder 1, 6 ÷ 2 = 3 remainder 0, 3 ÷ 2 = 1 remainder 1, 1 ÷ 2 = 0 remainder 1. Bottom up: <code>1101</code>. Both methods give the same answer; use the one you find easier.', ar: 'طريقة أخرى: القسمة على 2 وكتابة البواقي ثم قراءتها من الأسفل إلى الأعلى.' },
        { type: 'check', q: 'What is decimal 5 in binary?', options: ['<code>101</code>', '<code>110</code>', '<code>011</code>', '<code>100</code>'], answer: 0,
          explain: '4 fits (1 left), 2 does not fit (0), 1 fits (1): <code>101</code>. Check: 4 + 1 = 5.', ar: '101' },
        { type: 'p', en: 'A small bonus: Java can read binary numbers too. Start the number with <code>0b</code> (zero and the letter b), and Java prints its decimal value. Use it to check your own answers.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println(0b1101);
        System.out.println(0b11001);
    }
}
`, out: J`
13
25
` },
        { type: 'h', en: 'KB, MB, GB: measuring size' },
        { type: 'p', en: 'The size of a file or a memory is measured in <b>bytes</b>. Files are often large, so we use bigger units, just as we use kilometres instead of metres for long distances. Each unit is about 1,000 times the one before it. (In computing it is often exactly 1,024, but "about a thousand" is enough to remember.)' },
        { type: 'analogy', title: 'Grams and kilograms', en: '1,000 grams make a kilogram, and 1,000 kilograms make a tonne. A bag of rice is measured in kilograms, a truck in tonnes. In the same way, a text file is measured in kilobytes, a photo in megabytes and a film in gigabytes.' },
        { type: 'table', head: ['Unit', 'About', 'Example'], rows: [
          ['Byte (B)', '8 bits', 'One English letter'],
          ['Kilobyte (KB)', '1,000 bytes', 'A page of plain text (a few KB)'],
          ['Megabyte (MB)', '1,000 KB (a million bytes)', 'A phone photo or a song (a few MB)'],
          ['Gigabyte (GB)', '1,000 MB (a billion bytes)', 'A film; the RAM of a phone (for example 8 GB)'],
          ['Terabyte (TB)', '1,000 GB', 'A large hard disk']
        ] },
        { type: 'check', q: 'Which is the <b>largest</b>?', options: ['1 GB', '1 MB', '1 KB', '1 byte'], answer: 0,
          explain: 'From small to large: byte, KB, MB, GB. A gigabyte is about a billion bytes.', ar: 'الجيجابايت هو الأكبر.' },
        { type: 'h', en: 'How text is stored: character codes' },
        { type: 'p', en: 'A computer cannot store a letter as a little picture. Instead, every <b>character</b> (a letter, a digit, a space, a symbol) has a number called its <b>code</b>, and the code is stored in binary. The first well-known table of codes was <b>ASCII</b>, for English letters. Java uses <b>Unicode</b>, a huge table with codes for almost every language in the world, including Arabic.',
          ar: 'لكل حرف رقم (رمز) يُخزَّن بالنظام الثنائي، وجافا تستخدم جدول Unicode الذي يشمل العربية.' },
        { type: 'analogy', title: 'A secret code game', en: 'As a child you may have played a code game with a friend: A = 1, B = 2, C = 3. To send "CAB", you send 3, 1, 2, and your friend turns the numbers back into letters with the same table. Computers do the same, with a table that everyone in the world agrees on.' },
        { type: 'table', head: ['Character', 'Code (decimal)', 'Code (binary)'], rows: [
          ['<code>A</code>', '65', '01000001'],
          ['<code>B</code>', '66', '01000010'],
          ['<code>a</code> (small)', '97', '01100001'],
          ['<code>0</code> (the digit)', '48', '00110000'],
          ['space', '32', '00100000'],
          ['<code>ب</code> (Arabic baa)', '1576', 'needs more than one byte']
        ] },
        { type: 'p', en: 'So the word <code>Hi</code> is stored as two codes: 72 for <code>H</code> and 105 for <code>i</code>. Notice that <code>A</code> (65) and <code>a</code> (97) have <b>different</b> codes. That is one reason why Java sees <code>System</code> and <code>system</code> as two different words!' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("H = 72, i = 105");
        System.out.println("Hi needs " + (2 * 8) + " bits in ASCII");
    }
}
`, out: J`
H = 72, i = 105
Hi needs 16 bits in ASCII
` },
        { type: 'check', q: 'Why does Java treat <code>A</code> and <code>a</code> as different characters?', options: ['They have different codes', 'A is always bigger', 'Java ignores small letters', 'They have the same code'], answer: 0,
          explain: 'Capital A is 65 and small a is 97. To the computer they are different numbers.', ar: 'لأن لكل منهما رمزاً مختلفاً.' },
        { type: 'steps', title: 'Which letter is in this byte?', problem: 'A byte in memory holds <code>01000010</code>. What decimal number is it, and which letter has that code?',
          steps: [
            { en: 'Write the 8 place values: <code>128  64  32  16  8  4  2  1</code>.' },
            { en: 'Put the 8 bits under them: <code>0  1  0  0  0  0  1  0</code>.' },
            { en: 'The 1s are under 64 and 2. Add them: 64 + 2 = 66.' },
            { en: 'Look in the table of codes: 66 is the letter <code>B</code>.' },
            { en: 'Let Java check the sum.', code: J`System.out.println("01000010 = " + (64 + 2));` }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("01000010 = " + (64 + 2));
        System.out.println("Code 66 is the letter B");
    }
}
`, out: J`
01000010 = 66
Code 66 is the letter B
`, ar: 'نكتب قيم الخانات الثماني، ونجمع ما تحته 1، ثم نبحث عن الحرف في جدول الرموز.' },
        { type: 'note', kind: 'tip', en: 'Learn the 8 place values by heart: <b>128, 64, 32, 16, 8, 4, 2, 1</b>. With them you can convert any number from 0 to 255 (one byte) in both directions.' }
      ],
      mistakes: [
        { title: 'Reading the places from the wrong side', en: 'The smallest place (1) is on the <b>right</b>, like in decimal. In <code>100</code>, the 1 is worth 4, not 1.' },
        { title: 'Reading binary 10 as "ten"', en: 'Binary <code>10</code> is decimal 2. Say it as "one zero" so you do not mix it up with ten.' },
        { title: 'Mixing up bit and byte', en: 'A <b>bit</b> is one 0 or 1. A <b>byte</b> is 8 bits.' },
        { title: 'Forgetting the zeros', en: 'Decimal 9 is <code>1001</code>, not <code>11</code>. Every place that does not fit needs a 0, or the other digits move to the wrong places.' }
      ],
      remember: ['A <b>bit</b> is one 0 or 1; a <b>byte</b> is 8 bits and holds 256 patterns.', 'Binary place values: 128, 64, 32, 16, 8, 4, 2, 1 (smallest on the right).', 'Binary to decimal: add the place values that have a 1.', 'Decimal to binary: take the biggest place value that fits, write 1, subtract; write 0 where it does not fit.', 'KB, MB, GB, TB: each is about 1,000 times the one before.', 'Text is stored as character codes (Unicode); <code>A</code> = 65 and <code>a</code> = 97 are different.'],
      rememberAr: 'البت 0 أو 1، والبايت 8 بتات. قيم الخانات الثنائية 1، 2، 4، 8، 16... ولكل حرف رمز رقمي يُخزَّن بالثنائي.',
      practice: [
        { t: 'mcq', q: 'A <b>bit</b> can be:', options: ['0 or 1', 'Any digit from 0 to 9', 'A letter', 'Eight numbers'], answer: 0, explain: 'A bit is one binary digit: 0 or 1.' },
        { t: 'mcq', q: 'What is binary <code>111</code> in decimal?', options: ['7', '111', '3', '6'], answer: 0, explain: 'The places are 4, 2, 1 and all have a 1: 4 + 2 + 1 = 7.', explainAr: '4 + 2 + 1 = 7' },
        { t: 'output', q: 'This program converts two binary numbers by adding place values. What does it print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("101 = " + (4 + 0 + 1));
        System.out.println("1000 = " + (8 + 0 + 0 + 0));
    }
}
`, answer: '101 = 5\n1000 = 8', explain: 'The text is printed as it is; the calculations in parentheses give 5 and 8.' },
        { t: 'fill', q: 'Complete the place values of one byte, from left to right.', code: J`
128   64   ___   16   8   ___   2   1
`, answers: ['32', '4'], explain: 'Each place is 2 times the place on its right: 1, 2, 4, 8, 16, 32, 64, 128.' },
        { t: 'mcq', q: 'What is decimal <b>12</b> in binary?', options: ['<code>1100</code>', '<code>1010</code>', '<code>0011</code>', '<code>1110</code>'], answer: 0, explain: '8 fits (4 left), 4 fits (0 left), 2 does not fit, 1 does not fit: <code>1100</code>. Check: 8 + 4 = 12.' },
        { t: 'mcq', q: 'About how many bytes are in <b>1 MB</b>?', options: ['About one million', 'About one thousand', '8', 'About one billion'], answer: 0, explain: '1 MB is about 1,000 KB, and 1 KB is about 1,000 bytes: about a million bytes.' },
        { t: 'order', q: 'Order these units from the <b>smallest</b> to the <b>largest</b>.', lines: ['bit', 'byte', 'kilobyte (KB)', 'megabyte (MB)', 'gigabyte (GB)'], explain: '8 bits make a byte, and then each unit is about 1,000 times the one before.' },
        { t: 'bug', q: 'Each line converts a decimal number to binary. One line is wrong. Tap it.', qAr: 'سطر واحد فيه تحويل خاطئ. أين هو؟',
          code: J`
1 = 1
2 = 10
3 = 11
4 = 110
5 = 101
`, bug: 4,
          fix: J`
1 = 1
2 = 10
3 = 11
4 = 100
5 = 101
`, explain: 'Binary <code>110</code> is 4 + 2 = 6, not 4. Decimal 4 is <code>100</code>: one 4, no 2, no 1.', explainAr: '4 بالثنائي 100، أما 110 فتساوي 6.' },
        { t: 'code', q: 'Print <code>1101 = 13</code>, where 13 is <b>calculated</b> in the program by adding the place values of binary 1101 (8 + 4 + 0 + 1). No input.', qAr: 'اجمع{{g:|ي}} قيم الخانات داخل البرنامج.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // add the place values of 1101
    }
}
`, tests: [{ stdin: '', expected: '1101 = 13' }], solution: J`
public class Main {
    public static void main(String[] args) {
        // add the place values of 1101
        System.out.println("1101 = " + (8 + 4 + 0 + 1));
    }
}
`, hint: 'Text in quotes, then <code>+</code>, then the sum in parentheses.', explain: 'The places of 1101 are 8, 4, 2, 1; the 1s are under 8, 4 and 1, so 8 + 4 + 0 + 1 = 13.' }
      ]
    },
    {
      title: 'Good programming style',
      titleAr: 'أسلوب البرمجة الجيد',
      minutes: 25,
      body: [
        { type: 'h', en: 'Code is read more often than it is written' },
        { type: 'p', en: 'The compiler does not care how your code looks. People do. Your teacher reads your code to give you marks. Your partner reads it in a group project. And <b>you</b> will read it again next week, when you have forgotten the details. <b>Programming style</b> means writing code so that it is easy for people to read: neat spacing, clear names and helpful comments. Clean code is easier to read, easier to fix, and often earns better marks.',
          ar: 'المترجم لا يهتم بشكل الشيفرة، لكن المعلم والزملاء وأنت{{g:|ِ}} تقرؤونها، فالأسلوب الجيد يسهّل القراءة والإصلاح.' },
        { type: 'analogy', title: 'A tidy notebook', en: 'Two students write the same lecture notes. One uses headings, gaps between topics and neat lines. The other writes everything in one big block. Both notebooks hold the same facts. But the night before the exam, which one would you like to study from? Code is the same.',
          ar: 'دفتر مرتب ودفتر فوضوي يحملان المعلومات نفسها، لكن المرتب أسهل للمذاكرة.' },
        { type: 'p', en: 'Look at this program. It compiles and runs, but it is hard to read: the lines are not lined up, two statements share one line, and the closing braces are lost.' },
        { type: 'code', run: true, code: J`
public class Main {
public static void main(String[] args) {
System.out.println("Name: Sara");System.out.println("Course: CS101");
      System.out.println("Room: 105");
        }
}
`, out: J`
Name: Sara
Course: CS101
Room: 105
` },
        { type: 'p', en: 'Here is the same program in good style. The output is exactly the same, but now you can see its shape at a glance.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Name: Sara");
        System.out.println("Course: CS101");
        System.out.println("Room: 105");
    }
}
`, out: J`
Name: Sara
Course: CS101
Room: 105
` },
        { type: 'h', en: 'Indentation shows the shape' },
        { type: 'p', en: '<b>Indentation</b> means moving lines to the right with spaces. The rule is simple: every time you open a brace <code>{</code>, the lines inside move <b>4 spaces</b> to the right. When you close the brace <code>}</code>, you move back. Each closing brace lines up with the line that opened it.',
          ar: 'بعد كل قوس { نزيح الأسطر 4 مسافات إلى اليمين، وكل قوس } يقع تحت بداية السطر الذي فتحه.' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['public class Main {', 'Level 0: no spaces. Opens the class.'],
          ['    public static void main(String[] args) {', 'Level 1: 4 spaces, because it is inside the class.'],
          ['        System.out.println("Name: Sara");', 'Level 2: 8 spaces, because it is inside <code>main</code>.'],
          ['    }', 'Back to level 1: closes <code>main</code>, exactly under the <code>p</code> of <code>public static</code>.'],
          ['}', 'Back to level 0: closes the class, under the <code>p</code> of <code>public class</code>.']
        ] },
        { type: 'analogy', title: 'Boxes inside boxes', en: 'Think of boxes inside boxes. The class is the big box; <code>main</code> is a smaller box inside it; the statements are items inside <code>main</code>. Indentation lets your eyes see which box each line is in, and whether every box is closed.' },
        { type: 'check', q: 'The class line has 0 spaces. How many spaces should a statement inside <code>main</code> have?', options: ['8', '0', '4', '2'], answer: 0,
          explain: 'The class is level 0, <code>main</code> is level 1 (4 spaces) and the statements inside <code>main</code> are level 2 (8 spaces).', ar: '8 مسافات.' },
        { type: 'note', kind: 'tip', en: 'In NetBeans, press <b>Alt + Shift + F</b> to fix the indentation of the whole file in one go. Do it before you hand in your work.' },
        { type: 'h', en: 'One statement per line, and blank lines between parts' },
        { type: 'p', en: 'Java lets you put two statements on one line, but do not do it. With one statement per line, you can count statements easily, and when an error message says "line 7", you know exactly which statement it means. Use <b>blank lines</b> to separate the parts of a program, like paragraphs in an essay, and start each part with a short comment.' },
        { type: 'code', run: true, code: J`
// Program: Library card
// Author: Lama, CS101
// Prints a short library card.

public class Main {
    public static void main(String[] args) {
        // Heading
        System.out.println("LIBRARY CARD");
        System.out.println("============");

        // Details
        System.out.println("Name: Lama");
        System.out.println("Books allowed: " + (2 + 3));
    }
}
`, out: J`
LIBRARY CARD
============
Name: Lama
Books allowed: 5
` },
        { type: 'p', en: 'Notice the <b>header comment</b> at the top (what the program is, who wrote it, what it does), the comment before each part, and the blank line between the two parts. The blank lines in the code do <b>not</b> appear in the output; only <code>println()</code> makes blank output lines.' },
        { type: 'h', en: 'Comments that really help' },
        { type: 'p', en: 'A good comment tells the reader something the code does not say by itself: what a part is for, or where a number comes from. A weak comment just repeats the code in words.' },
        { type: 'table', head: ['Helpful comment', 'Weak comment'], rows: [
          ['<code>// Heading of the receipt</code>', '<code>// println</code>'],
          ['<code>// 3 coffees at 12 riyals each</code>', '<code>// multiply</code>'],
          ['<code>// Name, course and purpose of the program</code>', '<code>// my program</code>']
        ] },
        { type: 'check', q: 'Which comment is most helpful above <code>System.out.println("Total: " + (3 * 12));</code>?', options: ['<code>// 3 coffees at 12 riyals each</code>', '<code>// println</code>', '<code>// a line</code>', '<code>// Java</code>'], answer: 0,
          explain: 'It explains where the numbers 3 and 12 come from. The others tell the reader nothing new.', ar: 'التعليق المفيد يشرح من أين جاءت الأرقام.' },
        { type: 'h', en: 'Naming your class' },
        { type: 'p', en: 'In NetBeans you choose the name of your project, and the class gets the same name. A class name must follow <b>rules</b> (the compiler checks them) and should follow <b>conventions</b> (good habits that all Java programmers share).',
          ar: 'لاسم الصنف قواعد يفحصها المترجم، وأعراف يتبعها المبرمجون.' },
        { type: 'list', items: [
          '<b>Rules:</b> use letters, digits, <code>_</code> or <code>$</code>; do not start with a digit; no spaces; not a Java word such as <code>class</code> or <code>public</code>.',
          '<b>Convention:</b> start with a capital letter and start every new word with a capital: <code>CafeReceipt</code>, <code>StudentCard</code>, <code>WeeklyPlan</code>. This style is called <b>PascalCase</b> (or upper camel case).',
          '<b>Meaning:</b> the name should say what the program does. <code>CafeReceipt</code> is much better than <code>Test1</code> or <code>Abc</code>.',
          '<b>File:</b> the file name must match: <code>CafeReceipt.java</code>. On this website, it is always <code>Main</code>.'
        ] },
        { type: 'table', head: ['Class name', 'OK?', 'Why'], rows: [
          ['<code>CafeReceipt</code>', 'Good', 'Capital letters, clear meaning'],
          ['<code>cafereceipt</code>', 'Works, but poor style', 'Starts with a small letter; hard to read'],
          ['<code>Test2</code>', 'Works, but poor style', 'Does not say what the program does'],
          ['<code>Cafe Receipt</code>', 'Error', 'Spaces are not allowed'],
          ['<code>1stProgram</code>', 'Error', 'Starts with a digit'],
          ['<code>class</code>', 'Error', 'A Java keyword']
        ] },
        { type: 'analogy', title: 'Labels on moving boxes', en: 'When your family moves house, a box labelled "Kitchen: cups" is found in seconds. A box labelled "Box 7" must be opened to see what is inside. A clear class name is a good label.' },
        { type: 'check', q: 'Which class name follows Java style best?', options: ['<code>StudentCard</code>', '<code>student card</code>', '<code>2Student</code>', '<code>studentcard</code>'], answer: 0,
          explain: '<code>StudentCard</code> starts with a capital, has no spaces and says what it is. <code>student card</code> and <code>2Student</code> are not even allowed.', ar: 'StudentCard' },
        { type: 'steps', title: 'Clean up a messy program', problem: 'This program works, but its style is poor. Clean it up <b>without changing the output</b>.',
          steps: [
            { en: 'Here is the messy program. Read it and find the problems: no indentation, two statements on one line, two braces on one line, no comments.', code: J`
public class Main {
public static void main(String[] args) {
System.out.println("WEEKLY PLAN");System.out.println("Sun: CS101");
System.out.println("Mon: MATH101");
System.out.println("Total hours: " + (2 + 2 + 3));
}}
` },
            { en: 'Fix the indentation: 4 spaces inside the class, 8 inside <code>main</code>. Put each closing brace on its own line, under the line that opened it.' },
            { en: 'Split the line with two statements: one statement per line.' },
            { en: 'Group the lines into parts (heading, courses, total) with a blank line and a short comment before each part.' },
            { en: 'Add a header comment that says what the program does. Run it: the output is the same as before.' }
          ],
          code: J`
// Prints my weekly study plan.
public class Main {
    public static void main(String[] args) {
        // Heading
        System.out.println("WEEKLY PLAN");

        // Courses
        System.out.println("Sun: CS101");
        System.out.println("Mon: MATH101");

        // Total: 2 + 2 + 3 hours
        System.out.println("Total hours: " + (2 + 2 + 3));
    }
}
`, out: J`
WEEKLY PLAN
Sun: CS101
Mon: MATH101
Total hours: 7
`, ar: 'نرتب الإزاحة، ونكتب جملة واحدة في كل سطر، ونفصل الأجزاء بأسطر فارغة وتعليقات، دون تغيير الناتج.' },
        { type: 'note', kind: 'exam', en: 'In labs and exams, clean code helps the grader follow your thinking. When there is a small mistake, neat code makes it easier to see what you meant, and to give you marks for the parts that are right.' }
      ],
      mistakes: [
        { title: 'Closing braces that are not lined up', en: 'When braces do not line up, a missing <code>}</code> is very hard to see. Put each <code>}</code> under the start of the line that opened its block.', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hi");
        }
  }
` },
        { title: 'Several statements on one line', en: 'It works, but it is hard to read, and an error message with a line number does not tell you which statement is wrong.', code: 'System.out.println("A"); System.out.println("B");' },
        { title: 'Comments that only repeat the code', en: 'Write <i>why</i> or <i>what for</i>, not what the code already says.', code: 'System.out.println("Hi");   // prints Hi' },
        { title: 'Spaces in a class name', en: 'A class name is one word. The compiler stops with an error. Use capitals instead of spaces: <code>CafeReceipt</code>.', code: 'public class Cafe Receipt {   // error' }
      ],
      remember: ['Style = code that is easy for <b>people</b> to read; the compiler ignores it.', 'Indent 4 spaces for each <code>{</code>; line up each <code>}</code> with its opening line.', 'One statement per line; blank lines between parts.', 'Start with a header comment; write comments that say why or what for.', 'Class names: start with a capital, no spaces, PascalCase, a clear meaning, same as the file name.', 'NetBeans: <b>Alt + Shift + F</b> fixes the indentation.'],
      rememberAr: 'أزح{{g:|ي}} 4 مسافات بعد كل قوس، واكتب{{g:|ي}} جملة واحدة في كل سطر، وتعليقات مفيدة، واسم صنف يبدأ بحرف كبير بلا مسافات.',
      practice: [
        { t: 'mcq', q: 'Does the compiler care about indentation?', options: ['No, but people reading the code do', 'Yes, the program will not compile without it', 'Only inside <code>main</code>', 'Only for comments'], answer: 0, explain: 'The compiler ignores spaces between words. Indentation is for human readers.' },
        { t: 'mcq', q: 'Which class name follows Java style best?', options: ['<code>MetroCard</code>', '<code>metro card</code>', '<code>3Metro</code>', '<code>metrocard</code>'], answer: 0, explain: 'A capital at the start of each word, no spaces, not starting with a digit.' },
        { t: 'output', q: 'Careful: a blank line in the code is not the same as <code>println()</code>. What does this program print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("MENU");

        System.out.println();
        System.out.println("Tea: 5 riyals");
    }
}
`, answer: 'MENU\n\nTea: 5 riyals', explain: 'The blank line in the code changes nothing. The empty <code>println()</code> prints one blank line between MENU and Tea.', explainAr: 'السطر الفارغ في الشيفرة لا يظهر، أما println() فتطبع سطراً فارغاً.' },
        { t: 'order', q: 'Put the lines in order to make a correct, neatly indented program.', lines: ['// Prints a greeting', 'public class Main {', '    public static void main(String[] args) {', '        System.out.println("Good morning");', '    }', '}'], explain: 'Header comment, class, main, the statement (8 spaces), then close main (4 spaces) and the class (0 spaces).' },
        { t: 'fill', q: 'Complete the rules for class names.', code: J`
A class name must not start with a ___.
A class name must not contain ___.
`, answers: [['digit', 'number'], ['spaces', 'space', 'a space']], explain: '<code>1stProgram</code> and <code>Cafe Receipt</code> are both compile errors.' },
        { t: 'bug', q: 'In NetBeans this project is called <i>LibraryCard</i> and the file is <code>LibraryCard.java</code>. The code does not compile. Tap the line with the bug.', qAr: 'الشيفرة لا تُترجم. أين الخطأ؟',
          code: J`
// Prints a library card
public class Library Card {
    public static void main(String[] args) {
        System.out.println("LIBRARY CARD");
    }
}
`, bug: 2,
          fix: J`
// Prints a library card
public class LibraryCard {
    public static void main(String[] args) {
        System.out.println("LIBRARY CARD");
    }
}
`, explain: 'A class name cannot contain a space. Join the words and start each one with a capital: <code>LibraryCard</code>, the same as the file name.', explainAr: 'اسم الصنف لا يحتوي مسافات.' },
        { t: 'bug', q: 'The compiler says <i>reached end of file while parsing</i>. The good indentation helps you see what is missing. Tap the line where a closing brace should be.', qAr: 'قوس إغلاق ناقص. أين مكانه؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Line 1");
        System.out.println("Line 2");

}
`, bug: 5,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Line 1");
        System.out.println("Line 2");
    }
}
`, explain: 'The brace that closes <code>main</code> is missing. With good indentation it belongs on line 5, with 4 spaces, under <code>public static</code>. The <code>}</code> on line 6 then closes the class.', explainAr: 'ينقص القوس الذي يغلق main في السطر 5.' },
        { t: 'code', q: 'Write a program in good style (header comment, 4-space indentation, one statement per line) that prints exactly these two lines. No input.<br><code>Clean code</code><br><code>is easy to read</code>', qAr: 'اكتب{{g:|ي}} البرنامج بأسلوب مرتب.',
          starter: J`
// Write a header comment here
public class Main {
    public static void main(String[] args) {
        // your statements
    }
}
`, tests: [{ stdin: '', expected: 'Clean code\nis easy to read' }], solution: J`
// Prints a short message about style.
public class Main {
    public static void main(String[] args) {
        System.out.println("Clean code");
        System.out.println("is easy to read");
    }
}
`, hint: 'Two lines of output = two <code>println</code> statements, each on its own line with 8 spaces in front.', explain: 'The tests check only the output, but your teacher will also check the style.' }
      ]
    },
    {
      title: 'Reading and fixing error messages in NetBeans',
      titleAr: 'قراءة رسائل الأخطاء وإصلاحها في NetBeans',
      minutes: 30,
      body: [
        { type: 'h', en: 'Error messages are help, not punishment' },
        { type: 'p', en: 'When your code breaks a syntax rule, the compiler writes an <b>error message</b>. Many beginners see red and panic, or start changing things at random until the code is worse. But an error message is a note from the compiler. It tells you <b>where</b> it got confused and <b>what</b> it expected to see. Once you can read these notes, most errors take less than a minute to fix.',
          ar: 'رسالة الخطأ ليست عقاباً، بل ملاحظة من المترجم تخبرك أين ارتبك وماذا كان يتوقع.' },
        { type: 'analogy', title: 'The teacher\'s red pen', en: 'When a teacher corrects your essay, she draws a red line under the problem and writes a short note in the margin, like "verb?" or "full stop". The note is short, so you must read it carefully and think. Compiler messages work the same way: a mark under the problem and a short note.',
          ar: 'رسالة الخطأ كقلم المعلم الأحمر: خط تحت المشكلة وملاحظة قصيرة.' },
        { type: 'h', en: 'Where NetBeans shows errors' },
        { type: 'list', items: [
          'A <b>red wavy line</b> under the code where the compiler got confused.',
          'A <b>red icon</b> in the left margin, next to the line number. Move the mouse over it (or over the red line) to read the message.',
          'Small <b>red marks</b> on the right edge of the editor. Click one to jump to that line in a long file.',
          'A small <b>red badge</b> on the file name in the Projects window.',
          'When you run, the <b>Output</b> window lists the errors as text, with the file name and the line number.'
        ], ar: 'يظهر الخطأ بخط أحمر متموج، وأيقونة حمراء بجانب رقم السطر، ورسالة في نافذة الإخراج.' },
        { type: 'check', q: 'You see a red icon next to line 6 in NetBeans. What should you do first?', options: ['Move the mouse over it and read the message', 'Delete line 6', 'Restart NetBeans', 'Press F6 again and again'], answer: 0,
          explain: 'The message tells you what is wrong. Read before you change anything.', ar: 'اقرأ{{g:|ي}} الرسالة أولاً.' },
        { type: 'h', en: 'The parts of an error message' },
        { type: 'p', en: 'In the Output window (and on this website), an error message has the same parts every time. Learn to read them in order: <b>file</b>, <b>line</b>, <b>problem</b>, <b>arrow</b>.' },
        { type: 'code', code: J`
Main.java:3: error: ';' expected
        System.out.println("Hi")
                                ^
1 error
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['Main.java', 'The <b>file</b> that has the problem.'],
          [':3:', 'The <b>line number</b>: go to line 3.'],
          ["error: ';' expected", 'The <b>problem</b> in short words: Java expected a semicolon here.'],
          ['^', 'The small <b>arrow</b> points to the exact place in the line: right after the <code>)</code>.'],
          ['1 error', 'How many errors were found in total.']
        ], ar: 'الرسالة: اسم الملف، ثم رقم السطر، ثم وصف المشكلة، ثم سهم يشير إلى المكان.' },
        { type: 'check', q: 'A message starts with <code>Main.java:7: error:</code>. What does the 7 tell you?', options: ['The line number of the problem', 'The number of errors', 'The number of lines in the file', 'The error code'], answer: 0,
          explain: 'The number between the colons after the file name is the line number.', ar: 'رقم السطر.' },
        { type: 'h', en: '"expected" means something is missing' },
        { type: 'p', en: 'When a message says <b>expected</b>, something is <b>missing</b>, and Java tells you what it wanted. <code>\';\' expected</code>: a semicolon is missing. <code>\')\' expected</code>: a closing parenthesis is missing (some Java versions write <code>\')\' or \',\' expected</code>). Look where the arrow points; the missing character usually belongs right there.',
          ar: 'كلمة expected تعني أن شيئاً ناقصاً، والرسالة تذكر ما هو.' },
        { type: 'check', q: 'The message says <code>\')\' expected</code>. What is the most likely fix?', options: ['Add a closing parenthesis', 'Add a semicolon', 'Remove the quotes', 'Change System to system'], answer: 0,
          explain: 'The message names the missing character: a closing parenthesis <code>)</code>.', ar: 'نضيف القوس ).' },
        { type: 'h', en: '"cannot find symbol" means a name is wrong' },
        { type: 'p', en: 'A <b>symbol</b> is a name in your code, such as <code>println</code>, <code>String</code> or <code>System</code>. <b>cannot find symbol</b> means Java does not know a name you used. Almost always the name is misspelled, has a wrong capital letter, or is text that lost its quotes. Under the message, Java shows <b>which</b> name it could not find.',
          ar: 'cannot find symbol تعني أن جافا لا تعرف اسماً كتبته: غالباً خطأ إملائي أو حرف كبير/صغير.' },
        { type: 'code', code: J`
Main.java:3: error: cannot find symbol
        System.out.printn("Hi");
                  ^
  symbol:   method printn(String)
  location: variable out of type PrintStream
1 error
` },
        { type: 'lines', rows: [
          ['symbol:   method printn(String)', 'The name Java does not know: <code>printn</code>. You meant <code>println</code>.'],
          ['location: variable out of type PrintStream', 'Where Java looked for the name. You can ignore this line for now.']
        ] },
        { type: 'p', en: 'The same message appears for <code>string</code> with a small s (<code>symbol: class string</code>) and for text without quotes such as <code>println(Hi)</code> (<code>symbol: variable Hi</code>): without quotes, Java thinks <code>Hi</code> is a name. One exception to remember: a small s in <code>system</code> gives a different message, <code>package system does not exist</code>.' },
        { type: 'check', q: 'NetBeans says <i>cannot find symbol</i> for the line <code>System.out.printline("Hi");</code>. What is the fix?', options: ['Change <code>printline</code> to <code>println</code>', 'Add a semicolon', 'Add a brace', 'Restart NetBeans'], answer: 0,
          explain: 'There is no method called <code>printline</code>. The correct name is <code>println</code>.', ar: 'الاسم الصحيح println.' },
        { type: 'h', en: 'The messages you will meet most' },
        { type: 'table', head: ['Message', 'What it usually means', 'Fix'], rows: [
          ["<code>';' expected</code>", 'A semicolon is missing at the end of a statement', 'Add <code>;</code> where the arrow points'],
          ["<code>')' expected</code>", 'A closing parenthesis is missing', 'Add <code>)</code>'],
          ['<code>cannot find symbol</code>', 'A name is misspelled or has a wrong capital; or text has no quotes', 'Check <code>println</code>, <code>String</code>; add the quotes'],
          ['<code>package system does not exist</code>', '<code>system</code> written with a small s', 'Write <code>System</code>'],
          ['<code>unclosed string literal</code>', 'The text has no closing double quote', 'Add the closing <code>"</code>'],
          ['<code>reached end of file while parsing</code>', 'A closing brace is missing', 'Count the braces; add <code>}</code>'],
          ['<code>class X is public, should be declared in a file named X.java</code>', 'The class name and the file name do not match', 'Make them the same'],
          ['<code>illegal escape character</code>', 'A backslash before a wrong letter, e.g. <code>\\U</code>', 'Use <code>\\\\</code>, <code>\\n</code>, <code>\\t</code> or <code>\\"</code>']
        ] },
        { type: 'h', en: 'A calm fixing routine' },
        { type: 'analogy', title: 'A careful mechanic', en: 'When a car will not start, a good mechanic does not change ten parts at once. She checks one thing, tries the engine, then checks the next. If she changed ten parts together, she would never know which one was the problem. Fix code the same way: one change, then compile again.' },
        { type: 'list', items: [
          '<b>1. Stay calm.</b> Errors are normal, even for experts.',
          '<b>2. Read the first error only.</b> Later errors are often caused by the first one.',
          '<b>3. Go to the line number.</b> Look where the arrow or the red line points. If the line looks fine, check the line just <b>above</b> it.',
          '<b>4. Read the key words.</b> <i>expected</i> = something is missing. <i>cannot find symbol</i> = a name is wrong. <i>unclosed</i> = something was opened but not closed.',
          '<b>5. Fix one thing.</b>',
          '<b>6. Save and run again.</b> Repeat until there are no errors. Then check that the output is what you expected.'
        ], ar: 'اهدأ، اقرأ الخطأ الأول، اذهب إلى السطر، افهم الكلمات المفتاحية، أصلح شيئاً واحداً، ثم شغّل من جديد.' },
        { type: 'note', kind: 'warn', en: 'One small mistake can produce several messages. For example, <code>(3 x 4)</code> gives three errors on the same line: <code>\')\' expected</code>, <code>not a statement</code> and <code>\';\' expected</code>. Fix the first one, run again, and the others often disappear.' },
        { type: 'steps', title: 'Fix a program with two errors', problem: 'This program should print a metro card balance, but it does not compile:<br><code>System.out.println("Metro card")</code><br><code>System.out.printn("Balance: 25 riyals");</code><br>Use the routine.',
          steps: [
            { en: 'Run it. The Output window shows <b>one</b> error.', code: J`
Main.java:3: error: ';' expected
        System.out.println("Metro card")
                                        ^
` },
            { en: 'Line 3, "expected": something is missing. The arrow points after the <code>)</code>. Add the semicolon and save.', code: J`System.out.println("Metro card");` },
            { en: 'Run again. A <b>new</b> error appears on line 4. That is progress: the compiler could not read this far before.', code: J`
Main.java:4: error: cannot find symbol
  symbol:   method printn(String)
` },
            { en: '"cannot find symbol": a name is wrong. The symbol line says <code>printn</code>. Change it to <code>println</code>.', code: J`System.out.println("Balance: 25 riyals");` },
            { en: 'Run again: no errors. Compare the output with what you expected. It matches.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Metro card");
        System.out.println("Balance: 25 riyals");
    }
}
`, out: J`
Metro card
Balance: 25 riyals
`, ar: 'نصلح الخطأ الأول ونشغّل، فتظهر رسالة جديدة، فنصلحها ونشغّل مرة أخرى.' },
        { type: 'steps', title: 'A missing brace', problem: 'NetBeans shows <i>reached end of file while parsing</i> on the <b>last</b> line of the file. But the last line looks fine. Where is the real mistake?',
          steps: [
            { en: 'Read the message: "reached end of file" means the compiler came to the end while it was still waiting for something, almost always a closing brace <code>}</code>.' },
            { en: 'Count the braces: there are 2 <code>{</code> but only 1 <code>}</code>. One is missing.', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Exam: Sunday 8:00");
        System.out.println("Room: 105");
}
` },
            { en: 'Use the indentation: the <code>}</code> on the last line is at 0 spaces, so it closes the class. The brace that closes <code>main</code> (4 spaces) is missing.' },
            { en: 'Add <code>    }</code> after the last statement, then run again.' },
            { en: 'No errors. The lesson: the error line is where the compiler <i>noticed</i> the problem, not always where the problem <i>is</i>.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Exam: Sunday 8:00");
        System.out.println("Room: 105");
    }
}
`, out: J`
Exam: Sunday 8:00
Room: 105
`, ar: 'رسالة نهاية الملف تعني غالباً قوساً ناقصاً، والإزاحة تساعد على معرفة مكانه.' }
      ],
      mistakes: [
        { title: 'Fixing the last error first', en: 'The last messages are often caused by the first mistake. Always start with the <b>first</b> message.' },
        { title: 'Changing many things at once', en: 'If you change five things and the error is still there, you do not know what helped and what made it worse. One fix, then run again.' },
        { title: 'Looking only at the line number', en: 'The compiler reports the place where it <i>noticed</i> the problem. For a missing brace or quote, the real mistake can be higher up. If the line looks fine, look above it.' },
        { title: 'Ignoring the symbol line', en: 'Under <i>cannot find symbol</i>, the <code>symbol:</code> line names the exact word Java does not know. Read it: it often shows the typo directly.', code: J`
  symbol:   method Println(String)   // capital P: should be println
` }
      ],
      remember: ['Read the <b>first</b> error first: file, line, problem, arrow.', '<i>expected</i> = something is missing (<code>;</code> or <code>)</code>).', '<i>cannot find symbol</i> = a name is misspelled or has a wrong capital; read the <code>symbol:</code> line.', '<i>unclosed string literal</i> = a missing <code>"</code>; <i>reached end of file while parsing</i> = a missing <code>}</code>.', 'If the line looks fine, check the line above it.', 'Fix one thing, save, run again; new messages may appear.'],
      rememberAr: 'اقرأ{{g:|ي}} الخطأ الأول: الملف والسطر والمشكلة. expected تعني شيئاً ناقصاً، وcannot find symbol تعني اسماً خاطئاً. أصلح{{g:|ي}} شيئاً واحداً ثم شغّل{{g:|ي}} من جديد.',
      practice: [
        { t: 'mcq', q: 'What does <code>\';\' expected</code> mean?', options: ['A semicolon is missing', 'There are too many semicolons', 'The program is too slow', 'A brace is missing'], answer: 0, explain: '"expected" means Java wanted to see something that is not there: here, a semicolon.' },
        { t: 'mcq', q: 'The message is <code>Main.java:5: error: unclosed string literal</code>. What should you look for on line 5?', options: ['A missing closing double quote', 'A missing semicolon', 'A wrong capital letter', 'A missing brace'], answer: 0, explain: 'A <i>string literal</i> is text in double quotes. <i>Unclosed</i> means the closing quote is missing.' },
        { t: 'mcq', q: 'Which message do you get for <code>system.out.println("Hi");</code> (small s)?', options: ['<code>package system does not exist</code>', "<code>';' expected</code>", '<code>reached end of file while parsing</code>', 'No message: it works'], answer: 0, explain: 'With a small s, Java looks for something called <code>system</code> and cannot find it. Write <code>System</code>.' },
        { t: 'order', q: 'Put the steps of the calm fixing routine in order.', lines: ['Read the first error message', 'Go to the line number it shows', 'Read the key words: what is missing or wrong?', 'Fix one thing', 'Save and run again'], explain: 'One error at a time: read, locate, understand, fix one thing, run again.' },
        { t: 'fill', q: 'Complete the meanings of the two messages.', code: J`
reached end of file while parsing  ->  a closing ___ is missing
cannot find symbol                 ->  a ___ is misspelled or wrong
`, answers: [['brace', '}', 'curly brace'], ['name', 'word', 'symbol']], explain: 'End of file: the compiler is still waiting for a <code>}</code>. Cannot find symbol: Java does not know a name you used.' },
        { t: 'bug', q: 'NetBeans shows <i>cannot find symbol</i> with <code>symbol: method Println(String)</code>. Tap the line with the bug.', qAr: 'اقرأ{{g:|ي}} سطر symbol. أين الخطأ؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Exam: CS101");
        System.out.Println("Day: Sunday");
    }
}
`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Exam: CS101");
        System.out.println("Day: Sunday");
    }
}
`, explain: 'The symbol line names <code>Println</code> with a capital P. Java is case-sensitive: the method is <code>println</code>.', explainAr: 'println تُكتب بحرف p صغير.' },
        { t: 'bug', q: 'The Output window shows <code>error: unclosed string literal</code>. Tap the line with the bug.', qAr: 'علامة اقتباس ناقصة. أين؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Library opens at 8:00");
        System.out.println("Library closes at 10:00);
        System.out.println("Have a nice day");
    }
}
`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Library opens at 8:00");
        System.out.println("Library closes at 10:00");
        System.out.println("Have a nice day");
    }
}
`, explain: 'On line 4 the text starts with <code>"</code> but never ends. Add the closing quote before <code>)</code>.', explainAr: 'السطر 4 ينقصه علامة الاقتباس الختامية.' },
        { t: 'bug', q: 'This code is in <code>Main.java</code>. The message is <code>class Receipt is public, should be declared in a file named Receipt.java</code>. Tap the line with the bug.', qAr: 'الملف اسمه Main.java. أين الخطأ؟',
          code: J`
public class Receipt {
    public static void main(String[] args) {
        System.out.println("Coffee: 12 riyals");
        System.out.println("Thank you!");
    }
}
`, bug: 1,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Coffee: 12 riyals");
        System.out.println("Thank you!");
    }
}
`, explain: 'The class name must match the file name. The file is <code>Main.java</code>, so the class must be <code>Main</code>.', explainAr: 'اسم الصنف يجب أن يطابق اسم الملف.' },
        { t: 'code', q: 'The starter code has <b>four</b> mistakes on lines 3, 4 and 5. Fix them all so the program prints exactly (no input):<br><code>Student card</code><br><code>ID: 2026001</code><br><code>Major: Software Engineering</code>', qAr: 'أصلح{{g:|ي}} الأخطاء الأربعة واحداً تلو الآخر.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Student card);
        system.out.println("ID: 2026001");
        System.out.printn("Major: Software Engineering")
    }
}
`, tests: [{ stdin: '', expected: 'Student card\nID: 2026001\nMajor: Software Engineering' }], solution: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Student card");
        System.out.println("ID: 2026001");
        System.out.println("Major: Software Engineering");
    }
}
`, hint: 'Run it and read the first message. Line 3: a missing quote. Line 4: a capital letter. Line 5: a misspelled word and a missing semicolon.', explain: 'Fix one error at a time and run again after each fix: the closing quote, <code>System</code>, <code>println</code> and the final <code>;</code>.' }
      ]
    },
    {
      title: 'Printing project: a receipt, an ID card and a timetable',
      titleAr: 'مشروع طباعة: فاتورة وبطاقة طالب وجدول',
      minutes: 30,
      body: [
        { type: 'h', en: 'Put everything together' },
        { type: 'p', en: 'You now know <code>print</code>, <code>println</code>, escape sequences, calculations and comments. In this lesson you use them <b>together</b> to build three printouts that look real: a café receipt, a student ID card and a weekly timetable. Real programs do this every day: shops print receipts, universities print cards and timetables. It is also a perfect way to practise for the lab and the exam.',
          ar: 'في هذا الدرس نجمع كل ما تعلمناه لطباعة فاتورة مقهى وبطاقة طالب وجدول دراسي.' },
        { type: 'analogy', title: 'A tailor measures first', en: 'A tailor measures you and draws the pattern on paper <b>before</b> cutting the cloth, because a wrong cut cannot be undone. A programmer does the same with output: plan every line on paper first, then write the code.',
          ar: 'الخيّاط يقيس ويرسم قبل أن يقص، والمبرمج يخطط للناتج قبل أن يكتب الشيفرة.' },
        { type: 'h', en: 'Step 1: plan the output on paper' },
        { type: 'p', en: 'Write the exact lines you want to see, character by character. Mark every number that must be <b>calculated</b> (do not type a total you worked out on a calculator). Count the characters of lines that must line up, such as borders. Here is the plan for a café receipt. <b>SAR</b> is the short form of Saudi riyals used on receipts.' },
        { type: 'code', code: J`
===== CAFE RECEIPT =====    <- heading: 24 characters
Coffee    x2    24 SAR      <- 24 = 2 * 12 (calculate)
Croissant x1     9 SAR
Water     x1     7 SAR
------------------------    <- 24 dashes
Subtotal:       40 SAR      <- 2 * 12 + 9 + 7 (calculate)
VAT 15%:         6 SAR      <- subtotal * 15 / 100 (calculate)
TOTAL:          46 SAR      <- subtotal + VAT (calculate)
========================
Thank you! Come again.
` },
        { type: 'check', q: 'In the plan, why must the subtotal be <b>calculated</b> in the program instead of typed as 40?', options: ['If a price changes, the program still prints the right total', 'Typed numbers are not allowed in Java', 'Calculations print faster', 'Because 40 is too big'], answer: 0,
          explain: 'A typed total stays the same even when the prices change, and a mistake on your calculator would go straight onto the receipt. A calculated total is always right.', ar: 'الحساب داخل البرنامج يبقى صحيحاً إذا تغيّرت الأسعار.' },
        { type: 'h', en: 'Project 1: a café receipt' },
        { type: 'steps', title: 'Print the café receipt', problem: 'Turn the plan above into a program. Use one <code>println</code> per line, and put every calculation in parentheses.',
          steps: [
            { en: 'Heading and border lines are plain text. Copy them exactly, counting the characters.', code: J`System.out.println("===== CAFE RECEIPT =====");` },
            { en: 'The coffee line: text, then the calculation <code>(2 * 12)</code>, then the text <code>" SAR"</code>. The other two items have no calculation.', code: J`System.out.println("Coffee    x2    " + (2 * 12) + " SAR");` },
            { en: 'The subtotal adds everything. Inside the parentheses, Java multiplies first: 24 + 9 + 7 = 40.', code: J`System.out.println("Subtotal:       " + (2 * 12 + 9 + 7) + " SAR");` },
            { en: 'VAT is 15% of the subtotal: multiply by 15, then divide by 100. 40 × 15 = 600, and 600 / 100 = 6. (We chose prices so that the division is exact.)', code: J`System.out.println("VAT 15%:         " + ((2 * 12 + 9 + 7) * 15 / 100) + " SAR");` },
            { en: 'The total is subtotal + VAT = 46. Add the last border and a thank-you line, then run and compare with the plan.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        // Heading
        System.out.println("===== CAFE RECEIPT =====");

        // Items: quantity x price
        System.out.println("Coffee    x2    " + (2 * 12) + " SAR");
        System.out.println("Croissant x1     9 SAR");
        System.out.println("Water     x1     7 SAR");
        System.out.println("------------------------");

        // Subtotal = 2 * 12 + 9 + 7; VAT = 15% of the subtotal
        System.out.println("Subtotal:       " + (2 * 12 + 9 + 7) + " SAR");
        System.out.println("VAT 15%:         " + ((2 * 12 + 9 + 7) * 15 / 100) + " SAR");
        System.out.println("TOTAL:          " + ((2 * 12 + 9 + 7) + (2 * 12 + 9 + 7) * 15 / 100) + " SAR");
        System.out.println("========================");
        System.out.println("Thank you! Come again.");
    }
}
`, out: J`
===== CAFE RECEIPT =====
Coffee    x2    24 SAR
Croissant x1     9 SAR
Water     x1     7 SAR
------------------------
Subtotal:       40 SAR
VAT 15%:         6 SAR
TOTAL:          46 SAR
========================
Thank you! Come again.
`, ar: 'كل سطر println، وكل حساب بين أقواس، ثم نقارن الناتج بالخطة.' },
        { type: 'lines', title: 'Read the key lines like a programmer', rows: [
          ['"Coffee    x2    " + (2 * 12) + " SAR"', 'Text, then 24 (calculated first because of the parentheses), then text.'],
          ['(2 * 12 + 9 + 7) * 15 / 100', 'Inner parentheses first: 40. Then left to right: 40 * 15 = 600, 600 / 100 = 6.'],
          ['(2 * 12 + 9 + 7) + (2 * 12 + 9 + 7) * 15 / 100', 'Subtotal + VAT: 40 + 6 = 46. The outer parentheses keep it a sum, not glued text.']
        ], ar: 'الأقواس تجعل جافا تحسب قبل أن تلصق الرقم بالنص.' },
        { type: 'check', q: 'What would <code>System.out.println("Subtotal: " + 2 * 12 + 9 + 7);</code> print?', options: ['<code>Subtotal: 2497</code>', '<code>Subtotal: 40</code>', '<code>Subtotal: 24</code>', 'An error'], answer: 0,
          explain: '2 * 12 = 24 is done first, but then everything is glued to the text from left to right: "24", "9", "7". Parentheses around the whole sum fix it.', ar: 'بدون أقواس يلصق الأرقام كنص: 2497.' },
        { type: 'note', kind: 'tip', en: 'Did you notice that we typed <code>2 * 12 + 9 + 7</code> three times? That is tiring and easy to get wrong. In Unit 2 you will learn <b>variables</b>, which store the subtotal once so you can use it again and again.' },
        { type: 'h', en: 'Project 2: a student ID card' },
        { type: 'p', en: 'A card has a border on every side, so every line must have <b>exactly the same number of characters</b>, or the right edge will be crooked. Count carefully: the border <code>+------------------------+</code> is 26 characters (2 plus signs and 24 dashes), so every line of the card is 26 characters too. This card also uses <code>print</code> to print a calculated number in the middle of a line.' },
        { type: 'analogy', title: 'A form with boxes', en: 'On a paper form, each answer must fit inside its box. If you write too much, you go past the edge; too little leaves a gap that you fill with spaces. Printing a card is filling a form: count the letters, then add spaces until you reach the edge.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("+------------------------+");
        System.out.println("|    STUDENT ID CARD     |");
        System.out.println("+------------------------+");
        System.out.println("| Name:  Reem Khalid     |");
        System.out.println("| ID:    2026-1234       |");
        System.out.println("| Major: Computer Sci.   |");
        // credit hours this term: 3 + 3 + 4 + 3 + 2
        System.out.print("| Hours: ");
        System.out.print(3 + 3 + 4 + 3 + 2);
        System.out.println("              |");
        System.out.println("+------------------------+");
    }
}
`, out: J`
+------------------------+
|    STUDENT ID CARD     |
+------------------------+
| Name:  Reem Khalid     |
| ID:    2026-1234       |
| Major: Computer Sci.   |
| Hours: 15              |
+------------------------+
` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['System.out.print("| Hours: ");', 'Start the line with the left border and the label. Stay on the line.'],
          ['System.out.print(3 + 3 + 4 + 3 + 2);', 'No quotes, so Java adds: 15. <code>print</code> stays on the same line.'],
          ['System.out.println("              |");', 'Fill the rest with spaces and the right border, then end the line.']
        ], ar: 'نبني السطر بثلاث قطع: النص، ثم الرقم المحسوب، ثم المسافات والحد الأيمن.' },
        { type: 'check', q: 'The top border of the card has 26 characters. How many characters must the line <code>| Name:  Reem Khalid     |</code> have?', options: ['26', '24', '20', 'Any number'], answer: 0,
          explain: 'Every line of the card must be as long as the border, or the right edge will not be straight.', ar: '26 حرفاً مثل الحد.' },
        { type: 'h', en: 'Project 3: a timetable with tabs' },
        { type: 'p', en: 'Counting spaces is slow. For tables, the tab escape <code>\\t</code> is faster: it jumps to the next <b>tab stop</b>. Tab stops are usually every 8 characters, so words shorter than 8 characters line up in neat columns automatically. You can also put <code>\\n</code> inside a text to print two lines with one statement.',
          ar: 't\\ تقفز إلى العمود التالي، فتصطف الكلمات القصيرة في أعمدة مرتبة.' },
        { type: 'steps', title: 'Print a weekly timetable', problem: 'Print a small timetable with three columns (day, 8:00 class, 10:00 class), a blank line, and the number of classes per week, calculated as 3 days × 2 classes.',
          steps: [
            { en: 'Title and underline with one statement: <code>\\n</code> breaks the line in the middle of the text.', code: J`System.out.println("MY TIMETABLE\n============");` },
            { en: 'The heading row: put <code>\\t</code> between the columns.', code: J`System.out.println("Day\t8:00\t10:00");` },
            { en: 'One row per day, with the same tabs. Every word is shorter than 8 characters, so the columns line up.', code: J`
System.out.println("Sun\tCS101\tMATH101");
System.out.println("Mon\tENGL101\tCS101");
System.out.println("Wed\tCS101\tPHYS101");
` },
            { en: 'A blank line with an empty <code>println</code>, then the calculated count.', code: J`
System.out.println();
System.out.println("Classes per week: " + (3 * 2));
` },
            { en: 'Run it and check that each class sits under its time.' }
          ],
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("MY TIMETABLE\n============");
        System.out.println("Day\t8:00\t10:00");
        System.out.println("Sun\tCS101\tMATH101");
        System.out.println("Mon\tENGL101\tCS101");
        System.out.println("Wed\tCS101\tPHYS101");
        System.out.println();
        // 3 days, 2 classes each day
        System.out.println("Classes per week: " + (3 * 2));
    }
}
`, out: 'MY TIMETABLE\n============\nDay\t8:00\t10:00\nSun\tCS101\tMATH101\nMon\tENGL101\tCS101\nWed\tCS101\tPHYS101\n\nClasses per week: 6', ar: 'نستخدم t\\ للأعمدة، وn\\ داخل النص لسطر جديد، وprintln فارغة لسطر فارغ.' },
        { type: 'note', kind: 'warn', en: 'A word with 8 or more characters pushes the next tab stop further, and that row breaks the columns. Keep the words in a tab table short, or use spaces that you count yourself, as on the ID card.' },
        { type: 'check', q: 'Which escape sequence helps you line up columns quickly?', options: ['<code>\\t</code>', '<code>\\n</code>', '<code>\\"</code>', '<code>\\\\</code>'], answer: 0,
          explain: '<code>\\t</code> jumps to the next tab stop, so short words start at the same column.', ar: 't\\' }
      ],
      mistakes: [
        { title: 'Forgetting the parentheses around a total', en: 'After text, every <code>+</code> glues. The numbers are joined like letters.', code: 'System.out.println("Total: " + 18 + 2 * 7);   // prints Total: 1814' },
        { title: 'Border lines with the wrong length', en: 'If one line of a card is shorter or longer than the border, the right edge is crooked. Count the characters, including spaces.' },
        { title: 'Using print where println is needed', en: 'With <code>print</code>, the next text continues on the same line, so two lines of the receipt run together.', code: J`
System.out.print("Name: Faisal");
System.out.println("Major: IS");   // Name: FaisalMajor: IS
` },
        { title: 'Typing the result instead of calculating it', en: 'A typed total does not change when a price changes, and a mistake on your calculator goes straight onto the receipt. Let Java calculate.', code: 'System.out.println("Total: 33 SAR");   // where does 33 come from?' }
      ],
      remember: ['Plan the output on paper first: exact lines, calculated numbers, character counts.', 'One <code>println</code> per output line; <code>print</code> builds a line from pieces.', 'Put every calculation in parentheses after text.', 'Lines inside a border must all have the same number of characters.', '<code>\\t</code> lines up short words in columns; <code>\\n</code> breaks a line inside text; <code>println()</code> makes a blank line.'],
      rememberAr: 'خطط{{g:|ي}} للناتج على الورق، وضع{{g:|ي}} كل حساب بين أقواس، واجعل{{g:|ي}} أسطر البطاقة بطول واحد، واستخدم{{g:|ي}} t\\ للأعمدة.',
      practice: [
        { t: 'output', q: 'A small café receipt. What does this program print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Tea x3: " + (3 * 5) + " SAR");
        System.out.println("Cake x1: 11 SAR");
        System.out.println("Total: " + (3 * 5 + 11) + " SAR");
    }
}
`, answer: 'Tea x3: 15 SAR\nCake x1: 11 SAR\nTotal: 26 SAR', explain: '3 * 5 = 15. The total is 3 * 5 + 11 = 15 + 11 = 26, because multiplication comes first.' },
        { t: 'mcq', q: 'What does <code>System.out.println("Total: " + 3 * 5 + 11);</code> print?', options: ['<code>Total: 1511</code>', '<code>Total: 26</code>', '<code>Total: 3511</code>', 'An error'], answer: 0, explain: '3 * 5 = 15 is calculated first, but then 15 and 11 are glued to the text one after the other. Write <code>"Total: " + (3 * 5 + 11)</code> instead.' },
        { t: 'output', q: 'This program prints two lines of an ID card. What does it print?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.print("Name: ");
        System.out.println("Huda");
        System.out.print("ID: ");
        System.out.println("2026-0007");
    }
}
`, answer: 'Name: Huda\nID: 2026-0007', explain: 'Each line is built from two pieces: <code>print</code> for the label, <code>println</code> for the value and the end of the line.' },
        { t: 'fill', q: 'Complete the receipt line so it prints <code>Coffee x2: 24 SAR</code>.', code: J`
System.out.___("Coffee x2: " ___ (2 * 12) + " SAR");
`, answers: ['println', '+'], explain: '<code>println</code> prints the line; <code>+</code> joins the text and the calculated number.' },
        { t: 'order', q: 'Put the lines in order to make a program that prints a small receipt: <code>RECEIPT</code>, then <code>Juice x2: 18 SAR</code>, then <code>Thank you!</code>', lines: ['public class Main {', '    public static void main(String[] args) {', '        System.out.println("RECEIPT");', '        System.out.println("Juice x2: " + (2 * 9) + " SAR");', '        System.out.println("Thank you!");', '    }', '}'], explain: 'The frame first, then the three statements in the order of the output, then the two closing braces.' },
        { t: 'bug', q: 'This receipt should end with <code>Total: 32 SAR</code>, but it prints <code>Total: 1814 SAR</code>. Tap the line with the bug.', qAr: 'المجموع خاطئ. أين الخطأ؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Burger x1: 18 SAR");
        System.out.println("Juice x2: " + (2 * 7) + " SAR");
        System.out.println("Total: " + 18 + 2 * 7 + " SAR");
    }
}
`, bug: 5,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Burger x1: 18 SAR");
        System.out.println("Juice x2: " + (2 * 7) + " SAR");
        System.out.println("Total: " + (18 + 2 * 7) + " SAR");
    }
}
`, explain: 'Without parentheses, 18 is glued to the text, then 2 * 7 = 14 is glued too: <code>1814</code>. With parentheses Java calculates 18 + 14 = 32 first.', explainAr: 'يجب وضع المجموع كله بين أقواس.' },
        { t: 'bug', q: 'This card should print <b>three</b> lines, but the second and third lines come out together: <code>Name: FaisalMajor: IS</code>. Tap the line with the bug.', qAr: 'سطران التصقا معاً. أين الخطأ؟',
          code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("STUDENT CARD");
        System.out.print("Name: Faisal");
        System.out.println("Major: IS");
    }
}
`, bug: 4,
          fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("STUDENT CARD");
        System.out.println("Name: Faisal");
        System.out.println("Major: IS");
    }
}
`, explain: '<code>print</code> does not move to a new line, so <code>Major: IS</code> continues right after <code>Name: Faisal</code>. Use <code>println</code> on line 4.', explainAr: 'print لا تنزل سطراً، فنستخدم println.' },
        { t: 'code', q: 'Print this juice bar receipt exactly (no input). Both numbers 16 and 26 must be <b>calculated</b> in the program: 2 oranges at 8 SAR and 1 mango at 10 SAR.<br><code>JUICE BAR</code><br><code>Orange x2: 16 SAR</code><br><code>Mango x1: 10 SAR</code><br><code>Total: 26 SAR</code>', qAr: 'احسب{{g:|ي}} 2 × 8 والمجموع داخل البرنامج.',
          starter: J`
public class Main {
    public static void main(String[] args) {
        // 2 oranges at 8 SAR, 1 mango at 10 SAR
    }
}
`, tests: [{ stdin: '', expected: 'JUICE BAR\nOrange x2: 16 SAR\nMango x1: 10 SAR\nTotal: 26 SAR' }], solution: J`
public class Main {
    public static void main(String[] args) {
        // 2 oranges at 8 SAR, 1 mango at 10 SAR
        System.out.println("JUICE BAR");
        System.out.println("Orange x2: " + (2 * 8) + " SAR");
        System.out.println("Mango x1: 10 SAR");
        System.out.println("Total: " + (2 * 8 + 10) + " SAR");
    }
}
`, hint: 'The total is <code>(2 * 8 + 10)</code>. Do not forget the parentheses after the text.', explain: '2 * 8 = 16; the total 2 * 8 + 10 = 26. The parentheses make Java calculate before joining the text.' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'What does the CPU do?', options: ['Carries out instructions', 'Stores files for ever', 'Shows pictures', 'Prints pages'], answer: 0, explain: 'The CPU is the brain: it carries out instructions.' },
    { t: 'mcq', q: 'What is binary <code>1011</code> in decimal?', options: ['11', '1011', '13', '7'], answer: 0, explain: 'The place values are 8, 4, 2, 1. The 1s are under 8, 2 and 1: 8 + 2 + 1 = 11.', explainAr: '8 + 2 + 1 = 11' },
    { t: 'mcq', q: 'What does the JVM execute?', options: ['Java source code (.java)', 'Bytecode (.class)', 'Pseudocode', 'HTML files'], answer: 1, explain: 'The JVM runs bytecode.' },
    { t: 'mcq', q: 'Which is the correct header of the main method?', options: ['<code>public void static main(String[] args)</code>', '<code>public static void Main(String[] args)</code>', '<code>public static void main(String[] args)</code>', '<code>static public main(String args)</code>'], answer: 2, explain: 'Java is case-sensitive; the exact form is public static void main(String[] args).' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.print("CS");
        System.out.println("101");
        System.out.print("Java");
        System.out.println();
        System.out.println("Code");
    }
}
`, answer: 'CS101\nJava\nCode', explain: 'print stays on the line; println moves to the next.' },
    { t: 'output', q: 'What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Riyadh\nJeddah");
        System.out.println("\"Dammam\"");
    }
}
`, answer: 'Riyadh\nJeddah\n"Dammam"', explain: '\\n breaks the line, \\" prints a quote.' },
    { t: 'output', q: 'Careful with <code>+</code>. What is printed?', code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("5 + 3 = " + 5 + 3);
        System.out.println("5 + 3 = " + (5 + 3));
        System.out.println(5 + 3 + " apples");
    }
}
`, answer: '5 + 3 = 53\n5 + 3 = 8\n8 apples', explain: 'Left to right; text joins digits. Parentheses add first. In the last line the numbers are added before the text.' },
    { t: 'mcq', q: 'A program runs without any message but prints 130 when the correct total is 85. What kind of error is this?', options: ['Syntax error', 'Runtime error', 'Logic error', 'Compilation error'], answer: 2, explain: 'Wrong result without a crash is a logic error.' },
    { t: 'bug', q: 'This café receipt should end with <code>Total: 33 riyals</code>. It runs, but it prints <code>Total: 249 riyals</code>. Tap the line with the bug.', qAr: 'المجموع خاطئ دون رسالة خطأ. أين الخطأ؟',
      code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Coffee x2: " + (2 * 12) + " riyals");
        System.out.println("Cake x1: 9 riyals");
        System.out.println("Total: " + 2 * 12 + 9 + " riyals");
    }
}
`, bug: 5,
      fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Coffee x2: " + (2 * 12) + " riyals");
        System.out.println("Cake x1: 9 riyals");
        System.out.println("Total: " + (2 * 12 + 9) + " riyals");
    }
}
`, explain: 'This is a logic error. After the text, <code>+</code> glues: 2 * 12 = 24 is glued, then 9 is glued, giving <code>249</code>. Parentheses around the whole sum make Java add first: 24 + 9 = 33.', explainAr: 'خطأ منطقي: يجب وضع المجموع كله بين أقواس.' },
    { t: 'bug', q: 'This program does not compile. The compiler says <code>package system does not exist</code>. Tap the line with the bug.', qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
      code: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Exam: CS101");
        system.out.println("Room: 105");
        System.out.println("Good luck!");
    }
}
`, bug: 4,
      fix: J`
public class Main {
    public static void main(String[] args) {
        System.out.println("Exam: CS101");
        System.out.println("Room: 105");
        System.out.println("Good luck!");
    }
}
`, explain: 'Java is case-sensitive. <code>system</code> with a small s is not a name Java knows; it must be <code>System</code>. This is a syntax error, found by the compiler.', explainAr: 'System تبدأ بحرف S كبير.' },
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
    { code: J`javac Main.java   then   java Main`, note: 'Compile to bytecode, then run it on the JVM' },
    { code: J`System.out.println(2 + 3 * 4);   // 14`, note: 'Operators + - * /: parentheses first, then * and /, then + and -, left to right' },
    { code: J`System.out.print("Hours: ");
System.out.println(3 + 4);`, note: 'Build one line from pieces: print stays on the line, println ends it' },
    { code: J`128  64  32  16  8  4  2  1`, note: 'Binary place values of one byte; add the places that have a 1 (1011 = 8 + 2 + 1 = 11)' },
    { code: J`1 byte = 8 bits;  KB, MB, GB, TB`, note: 'Each unit is about 1,000 times the one before (often exactly 1,024)' },
    { code: J`public class Main {
    public static void main(String[] args) {
        System.out.println("Hi");
    }
}`, note: 'Style: 4 spaces per level, each } under its opening line, one statement per line' },
    { code: J`Main.java:3: error: ';' expected`, note: 'File : line : problem. "expected" = something missing; "cannot find symbol" = a name is wrong' },
    { code: J`sout + Tab    F6    Alt+Shift+F    F8`, note: 'NetBeans: write println, run, fix indentation, step one line in the debugger' }
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
    { term: 'Flowchart', ar: 'مخطط انسيابي', def: 'A diagram of an algorithm using shapes and arrows.' },
    { term: 'IPO model', ar: 'نموذج الإدخال والمعالجة والإخراج', def: 'Input, Processing, Output: the three parts of almost every computer job.' },
    { term: 'Operating system', ar: 'نظام التشغيل', def: 'System software that starts first and manages the hardware, the memory and the files.' },
    { term: 'Application (app)', ar: 'تطبيق', def: 'Software that does one job for the user, such as a calculator or a browser.' },
    { term: 'Syntax', ar: 'قواعد اللغة', def: 'The grammar rules of a programming language.' },
    { term: 'Platform', ar: 'منصة', def: 'The kind of computer and operating system a program runs on.' },
    { term: 'Operator', ar: 'عامل', def: 'A sign for an operation, such as + - * /.' },
    { term: 'Order of operations', ar: 'أولوية العمليات', def: 'Parentheses first, then * and /, then + and -, from left to right.' },
    { term: 'Exception', ar: 'استثناء', def: 'Java\'s name for a runtime error, e.g. ArithmeticException for / by zero.' },
    { term: 'Testing', ar: 'الاختبار', def: 'Comparing the real output with the output you expected.' },
    { term: 'Tracing', ar: 'التتبع', def: 'Following a plan or a program by hand with real values, step by step.' },
    { term: 'Bit', ar: 'بت', def: 'One binary digit: 0 or 1.' },
    { term: 'Byte', ar: 'بايت', def: 'A group of 8 bits; it can hold 256 different patterns.' },
    { term: 'Binary (base 2)', ar: 'النظام الثنائي', def: 'A number system with only the digits 0 and 1; place values 1, 2, 4, 8, ...' },
    { term: 'Decimal (base 10)', ar: 'النظام العشري', def: 'Our everyday number system with the digits 0 to 9.' },
    { term: 'Kilobyte / Megabyte / Gigabyte', ar: 'كيلوبايت / ميجابايت / جيجابايت', def: 'About a thousand, a million and a billion bytes.' },
    { term: 'Character code', ar: 'رمز الحرف', def: 'The number that stands for a character, e.g. A = 65.' },
    { term: 'Unicode', ar: 'يونيكود', def: 'The table of character codes Java uses; it covers almost every language, including Arabic.' },
    { term: 'Programming style', ar: 'أسلوب البرمجة', def: 'Writing code that is easy for people to read: indentation, names, comments.' },
    { term: 'Indentation', ar: 'الإزاحة', def: 'Spaces at the start of a line that show which block it belongs to (4 per level).' },
    { term: 'PascalCase', ar: 'تسمية باسكال', def: 'Joining words with a capital at the start of each: CafeReceipt.' },
    { term: 'Header comment', ar: 'تعليق الترويسة', def: 'A comment at the top of a program: what it does and who wrote it.' },
    { term: 'Error message', ar: 'رسالة خطأ', def: 'A note from the compiler with the file, the line and the problem.' },
    { term: 'Symbol', ar: 'رمز (اسم)', def: 'A name in the code, such as println or String; "cannot find symbol" means Java does not know it.' },
    { term: 'Tab stop', ar: 'موضع الجدولة', def: 'The column where \\t jumps to, usually every 8 characters.' }
  ]
});
