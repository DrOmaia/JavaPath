JP.unit({
  course: 'cs102',
  key: 9,
  n: 6,
  title: 'Exceptions and Testing',
  titleAr: 'الاستثناءات واختبار البرامج',
  intro: "A program can compile with no errors and still stop suddenly while it runs: a division by zero, an index that does not exist, a user who types letters instead of a number. In this unit you learn to read crash messages, catch exceptions with try and catch, clean up with finally, make keyboard input safe, protect your objects by throwing exceptions, write your own exception classes, and test your code with normal, boundary and invalid cases. At the end, your programs stay calm when something goes wrong, and you can prove that they work.",
  introAr: "قد يُترجَم البرنامج بلا أخطاء ثم يتوقف فجأة أثناء التشغيل. في هذه الوحدة تتعلم{{g:|ين}} قراءة رسائل الأخطاء، والتقاط الاستثناءات، ورميها لحماية الكائنات، وكتابة استثناءاتك الخاصة، واختبار برامجك لتتأكد{{g:|ي}} أنها تعمل.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'When programs crash',
      titleAr: 'عندما يتوقف البرنامج فجأة',
      minutes: 30,
      body: [
        { type: 'h', en: 'A program that compiles can still crash' },
        { type: 'p', en: "You press Run. The code compiles and NetBeans shows no red lines. But in the middle of the run, the program suddenly stops and prints a long red message. What happened? Some problems only appear <b>while the program runs</b>, with real data: a café bill shared between 0 friends, mark number 4 in a list of 3 marks, a user who types <code>12a</code> instead of <code>12</code>. The compiler cannot see these problems, because the data does not exist yet when it checks your code.",
          ar: 'بعض الأخطاء لا تظهر إلا أثناء تشغيل البرنامج مع بيانات حقيقية، ولا يستطيع المترجم اكتشافها مسبقاً.' },
        { type: 'h', en: 'What is an exception?' },
        { type: 'p', en: "When Java meets a problem that it cannot solve while running, it creates an <b>exception</b>. An exception is an <b>object</b> that describes the problem: what kind of problem it is and where it happened. Java then <b>throws</b> the exception. This means it stops the normal work and looks for code that can handle the problem. If no code handles it, the program <b>crashes</b>: it stops and prints a message about the exception.",
          ar: 'الاستثناء كائن يصف مشكلة حدثت أثناء التشغيل. إذا لم يعالجه أحد يتوقف البرنامج ويطبع رسالة.' },
        { type: 'analogy', title: 'A fire alarm', en: "In a school, smoke starts the fire alarm. Lessons stop at once. A trained person, the safety officer, must deal with the problem. If nobody deals with it, everyone leaves the building and the school day ends. An exception is the alarm: it stops the normal work and asks \"who will handle this?\" In this lesson nobody handles it, so the program ends. From Lesson 2 on, <b>you</b> will be the safety officer.",
          ar: 'الاستثناء مثل جرس الإنذار: يوقف العمل العادي ويبحث عمّن يعالج المشكلة.' },
        { type: 'h', en: 'Three kinds of errors' },
        { type: 'p', en: "It helps to know which kind of error you are looking at, because each kind is found in a different way." },
        { type: 'table', head: ['Kind', 'When you find it', 'Example'], rows: [
          ['Compile error', 'Before the program runs. NetBeans underlines the line in red.', 'A missing <code>;</code> or a misspelled variable name'],
          ['Run-time error (exception)', 'While the program runs, with certain data', 'Dividing an <code>int</code> by zero'],
          ['Logic error', 'Java never tells you. The output is simply wrong.', 'An average that adds the marks but forgets to divide']
        ] },
        { type: 'check', q: 'A program compiles, then stops with <code>ArithmeticException</code> while it runs. What kind of error is this?', options: ['A compile error', 'A run-time error (an exception)', 'A logic error', 'Not an error'], answer: 1, explain: 'It compiled, so it is not a compile error. It stopped while running, with an exception: that is a run-time error.' },
        { type: 'h', en: 'Your first crash' },
        { type: 'p', en: "This program splits a café bill of 300 riyals between some friends. By mistake, the number of friends is 0." },
        { type: 'code', code: J`
          public class Main {
              public static void main(String[] args) {
                  int total = 300;
                  int friends = 0;
                  int share = total / friends;
                  System.out.println("Each friend pays " + share);
              }
          }
        ` },
        { type: 'p', en: "Line 6 never prints. Instead, Java prints this message (NetBeans shows it in red in the Output window). Do not be afraid of it: it is a report that helps you." },
        { type: 'lines', title: 'Read the crash message like a programmer', rows: [
          ['Exception in thread "main" java.lang.ArithmeticException: / by zero', 'The first line tells you <b>what</b> went wrong. We read it in parts below.'],
          ['Exception in thread "main"', 'The problem happened while running <code>main</code>. (A <b>thread</b> is one running path of a program. Your programs have one, called main.)'],
          ['java.lang.ArithmeticException', 'The <b>type</b> of exception. It is a class name: <code>ArithmeticException</code> (arithmetic = maths), in the package <code>java.lang</code>.'],
          [': / by zero', 'The <b>message</b>: a short description of the problem.'],
          ['    at Main.main(Main.java:5)', 'The <b>place</b>: class <code>Main</code>, method <code>main</code>, file <code>Main.java</code>, line 5. Line 5 is <code>int share = total / friends;</code>.']
        ], ar: 'اقرأ{{g:|ي}} الرسالة بالترتيب: نوع الاستثناء، ثم الرسالة، ثم مكان الخطأ ورقم السطر.' },
        { type: 'note', kind: 'exam', en: "Only <b>int</b> division by zero throws <code>ArithmeticException</code>. With <code>double</code>, Java does not crash: <code>10.0 / 0</code> gives <code>Infinity</code>, and <code>0.0 / 0</code> gives <code>NaN</code> (\"not a number\").",
          ar: 'القسمة على صفر في الأعداد الصحيحة فقط تسبب استثناء، أما مع double فالنتيجة Infinity.' },
        { type: 'check', q: 'In <code>at Main.main(Main.java:5)</code>, what does <code>5</code> tell you?', options: ['The program ran 5 times', 'The line number where the problem happened', 'There are 5 errors', 'The value of a variable'], answer: 1, explain: 'The number after the file name is the line number. Go to that line first.' },
        { type: 'h', en: 'The call chain: reading a stack trace' },
        { type: 'p', en: "Your programs call methods, and those methods can call other methods. When an exception happens deep inside, Java lists <b>every method that was running</b> at that moment, from the newest to the oldest. This list is called the <b>stack trace</b>. (A <b>stack</b> is a pile: the newest method call is on top, like the top plate on a pile of plates.)" },
        { type: 'analogy', title: 'A parcel tracking page', en: "When you track a parcel online, the page shows the newest event first: \"Arrived in Riyadh\". Older events are below it: \"Left Jeddah\", \"Picked up from the seller\". A stack trace works the same way. The top line is where the problem happened. Each line below it shows who called that method.",
          ar: 'مثل صفحة تتبع الشحنة: أحدث حدث في الأعلى، والأقدم في الأسفل.' },
        { type: 'code', code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println("Start");
                  printAverage(450, 0);
                  System.out.println("End");
              }

              static void printAverage(int sum, int count) {
                  int avg = sum / count;
                  System.out.println("Average: " + avg);
              }
          }
        ` },
        { type: 'p', en: "When you run it, you see this:" },
        { type: 'lines', rows: [
          ['Start', 'Printed normally. Line 3 ran before any problem.'],
          ['Exception in thread "main" java.lang.ArithmeticException: / by zero', 'The type and the message, as before.'],
          ['    at Main.printAverage(Main.java:9)', '<b>Top line: start reading here.</b> The exception happened at line 9, inside <code>printAverage</code>.'],
          ['    at Main.main(Main.java:4)', 'Who called <code>printAverage</code>? <code>main</code>, at line 4.'],
          ['(End is never printed)', 'The program stopped. Line 5 never ran.']
        ], ar: 'السطر الأول بعد الرسالة هو مكان حدوث الخطأ، والأسطر تحته تبيّن من استدعى الدالة.' },
        { type: 'memory', title: 'An exception is an object', en: "Follow what happens in memory when line 9 runs. The variables on the left belong to <code>printAverage</code>.", frames: [
          { label: '<code>main</code> calls <code>printAverage(450, 0)</code>', vars: [{ name: 'sum', type: 'int', value: '450' }, { name: 'count', type: 'int', value: '0' }], objects: [] },
          { label: 'Line 9: <code>sum / count</code> divides by zero. Java creates an exception object.', vars: [{ name: 'sum', type: 'int', value: '450' }, { name: 'count', type: 'int', value: '0' }], objects: [
            { id: 'E', cls: 'ArithmeticException', fields: [{ name: 'message', value: '"/ by zero"' }, { name: 'stack trace', value: 'printAverage:9, main:4' }] }
          ] },
          { label: 'Nobody handles it. Both methods stop, and Java prints the type, the message and the stack trace of object E.', vars: [], objects: [
            { id: 'E', cls: 'ArithmeticException', fields: [{ name: 'message', value: '"/ by zero"' }, { name: 'stack trace', value: 'printAverage:9, main:4' }] }
          ] }
        ], ar: 'عند حدوث المشكلة ينشئ Java كائناً يحمل نوع الخطأ والرسالة ومكان حدوثه.' },
        { type: 'check', q: 'In a stack trace, which line shows where the exception was created?', options: ['The last line', 'The top <code>at</code> line that names your file', 'The line that mentions main', 'Any line, they are all the same'], answer: 1, explain: 'The top line is the newest method call: the place where the problem happened. The lines below are the callers.' },
        { type: 'h', en: 'The five exceptions you will meet most' },
        { type: 'p', en: "Learn these names. When you see one, you will already know where to look. <b>1. ArithmeticException</b>: an <code>int</code> is divided by zero. You saw it above. <b>2. ArrayIndexOutOfBoundsException</b>: you use an index that does not exist. An array of 3 elements has the indexes 0, 1 and 2 only." },
        { type: 'code', code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] marks = {85, 90, 78};
                  System.out.println(marks[3]);
              }
          }
        ` },
        { type: 'lines', title: 'What Java prints', rows: [
          ['Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3', 'Index 3 was used, but the length is 3, so the last index is 2.'],
          ['    at Main.main(Main.java:4)', 'Line 4: <code>marks[3]</code>.']
        ] },
        { type: 'p', en: "<b>3. NullPointerException</b>: you use a variable that holds <code>null</code> (no object) as if it held an object, for example you call a method on it. Remember from Unit 3: a new array of objects is full of <code>null</code> until you put objects in it." },
        { type: 'code', code: J`
          public class Main {
              public static void main(String[] args) {
                  String name = null;
                  System.out.println(name.length());
              }
          }
        ` },
        { type: 'lines', title: 'What Java prints', rows: [
          ['Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.length()" because "name" is null', 'Java even says which variable was null: <code>name</code>. (Some online tools show a code such as <code>&lt;local1&gt;</code> instead of the name.)'],
          ['    at Main.main(Main.java:4)', 'Line 4: <code>name.length()</code>.']
        ] },
        { type: 'p', en: "<b>4. NumberFormatException</b>: you try to turn a text into a number, but the text is not a number. The method <code>Integer.parseInt(text)</code> changes a text such as <code>\"25\"</code> into the int <code>25</code>. With <code>\"12a\"</code> it cannot." },
        { type: 'code', code: J`
          public class Main {
              public static void main(String[] args) {
                  String text = "12a";
                  int qty = Integer.parseInt(text);
                  System.out.println(qty * 2);
              }
          }
        ` },
        { type: 'lines', title: 'What Java prints', rows: [
          ['Exception in thread "main" java.lang.NumberFormatException: For input string: "12a"', 'The message shows the bad text.'],
          ['    at java.base/java.lang.NumberFormatException.forInputString(NumberFormatException.java:67)', 'Lines that start with <code>java.base</code> are inside Java\'s own classes. Skip them.'],
          ['    at java.base/java.lang.Integer.parseInt(Integer.java:662)', 'Skip.'],
          ['    at java.base/java.lang.Integer.parseInt(Integer.java:778)', 'Skip.'],
          ['    at Main.main(Main.java:4)', 'The <b>first line with your file name</b>. Look here: line 4.']
        ], ar: 'تجاهل{{g:|ي}} الأسطر التي تبدأ بـ java.base وابحث{{g:|ي}} عن أول سطر فيه اسم ملفك.' },
        { type: 'p', en: "<b>5. InputMismatchException</b>: <code>nextInt()</code> of a <code>Scanner</code> expects a whole number, but the user types something else. Below, the user typed <code>abc</code>." },
        { type: 'code', code: J`
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int age = in.nextInt();
                  System.out.println("Next year: " + (age + 1));
              }
          }
        ` },
        { type: 'lines', title: 'What Java prints (input: abc)', rows: [
          ['Exception in thread "main" java.util.InputMismatchException', 'No message this time, only the type. It is in the package <code>java.util</code>, like Scanner.'],
          ['    at java.base/java.util.Scanner.throwFor(Scanner.java:947)', 'Inside Scanner: skip the java.base lines.'],
          ['    at java.base/java.util.Scanner.nextInt(Scanner.java:2221)', '(There are a few more java.base lines.)'],
          ['    at Main.main(Main.java:6)', 'Your line: <code>in.nextInt()</code> on line 6.']
        ] },
        { type: 'table', head: ['Exception', 'Typical cause', 'Example'], rows: [
          ['<code>ArithmeticException</code>', 'int division by zero', '<code>300 / 0</code>'],
          ['<code>ArrayIndexOutOfBoundsException</code>', 'index &lt; 0 or index &gt;= length', '<code>marks[3]</code> when the length is 3'],
          ['<code>NullPointerException</code>', 'using a variable that holds null', '<code>name.length()</code> when name is null'],
          ['<code>NumberFormatException</code>', 'text is not a number', '<code>Integer.parseInt("12a")</code>'],
          ['<code>InputMismatchException</code>', 'Scanner reads the wrong kind of input', '<code>nextInt()</code> when the user types abc']
        ] },
        { type: 'check', q: 'Which exception does <code>Integer.parseInt("3.5")</code> throw?', options: ['ArithmeticException', 'NumberFormatException', 'InputMismatchException', 'None: it returns 3'], answer: 1, explain: 'A whole number (int) cannot contain a dot, so the text "3.5" is not a valid int. parseInt throws NumberFormatException.' },
        { type: 'note', kind: 'tip', en: "When you can, <b>fix the cause</b>: check a number before you divide by it, and check an index before you use it. For problems you cannot check in advance, Lesson 2 teaches <code>try</code> and <code>catch</code>." },
        { type: 'steps', title: 'Worked example: fix the bill-splitting crash', problem: 'The café program above crashes with <code>ArithmeticException: / by zero</code> at line 5. Change it so that it never crashes: when there are 0 friends, it prints <code>No friends to split with.</code> Test it with 3 friends and with 0 friends.',
          steps: [
            { en: '<b>Read the type:</b> <code>ArithmeticException</code> with the message <code>/ by zero</code>. So an int was divided by zero.' },
            { en: '<b>Read the place:</b> line 5 is <code>int share = total / friends;</code>. The divisor is <code>friends</code>, so <code>friends</code> was 0.' },
            { en: '<b>Fix the cause:</b> check <code>friends</code> before dividing. We move the work into a method so that we can test two cases.', code: J`
              static void split(int total, int friends) {
                  if (friends == 0) {
                      System.out.println("No friends to split with.");
                  } else {
                      System.out.println("Each friend pays " + (total / friends) + " SAR");
                  }
              }
            ` },
            { en: '<b>Test both cases</b> from <code>main</code>: a normal one and the one that crashed before.', code: J`
              split(300, 3);
              split(300, 0);
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    split(300, 3);
                    split(300, 0);
                }

                static void split(int total, int friends) {
                    if (friends == 0) {
                        System.out.println("No friends to split with.");
                    } else {
                        System.out.println("Each friend pays " + (total / friends) + " SAR");
                    }
                }
            }
          `, out: J`
            Each friend pays 100 SAR
            No friends to split with.
          `, ar: 'قرأنا نوع الخطأ ومكانه، ثم أصلحنا السبب بفحص عدد الأصدقاء قبل القسمة.' }
      ],
      mistakes: [
        { title: 'Reading only the last line of the stack trace', en: "The last line is usually <code>main</code>, the oldest call. Start at the <b>top</b>: the first <code>at</code> line that names your file is where the problem happened.", ar: 'ابدأ{{g:|ي}} القراءة من الأعلى وليس من آخر سطر.' },
        { title: 'Thinking that a program with no red lines cannot crash', en: "The compiler checks the grammar of your code, not your data. Division by zero, a wrong index or bad input only appear when the program runs." },
        { title: 'Using an empty element of an array of objects', en: "A new array of objects holds only <code>null</code>. Create the objects first, for example <code>list[0] = new Student(\"Huda\");</code>.", code: J`
          Student[] list = new Student[3];   // three nulls
          list[0].getName();                 // NullPointerException
        ` },
        { title: 'Using &lt;= with length in a loop', en: "The last valid index is <code>length - 1</code>. With <code>&lt;=</code> the loop visits one index too many.", code: J`
          for (int i = 0; i <= marks.length; i++)   // wrong: use <
        `, ar: 'آخر فهرس صالح هو length - 1، فاستخدم{{g:|ي}} &lt; وليس &lt;=.' }
      ],
      remember: [
        "An <b>exception</b> is an object that describes a problem that happened while the program was running.",
        "If no code handles it, the program crashes and prints the type, the message and the stack trace.",
        "Read a stack trace from the <b>top</b>: the first line with your file name and line number is where it happened.",
        "Know the five common ones: ArithmeticException, ArrayIndexOutOfBoundsException, NullPointerException, NumberFormatException, InputMismatchException.",
        "Only <code>int</code> division by zero throws; <code>double</code> division gives Infinity."
      ],
      rememberAr: 'الاستثناء كائن يصف مشكلة أثناء التشغيل. إذا لم يعالجه أحد يتوقف البرنامج. اقرأ{{g:|ي}} رسالة الخطأ من الأعلى لتعرف{{g:|ي}} النوع والرسالة ورقم السطر.',
      practice: [
        { t: 'mcq', q: "What is an <b>exception</b> in Java?", options: ['A spelling mistake that stops the program from compiling', 'An object that describes a problem that happened while the program was running', 'A special kind of loop', 'A comment that the compiler ignores'], answer: 1, explain: "An exception is created while the program runs. Spelling mistakes are compile errors, found before running.", qAr: 'ما هو الاستثناء؟' },
        { t: 'output', q: "Careful: these are <code>double</code> values. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  double a = 10.0 / 4;
                  double b = 10.0 / 0;
                  System.out.println(a);
                  System.out.println(b);
              }
          }
        `, answer: J`
          2.5
          Infinity
        `, explain: "With <code>double</code>, dividing by zero does not throw an exception. The result is the special value <code>Infinity</code>. Only <code>int</code> division by zero throws ArithmeticException.", explainAr: 'القسمة على صفر مع double لا تسبب استثناء.' },
        { t: 'mcq', q: "Which exception does this code throw?", code: J`
          int[] trips = new int[5];
          trips[5] = 2;
        `, options: ['ArithmeticException', 'ArrayIndexOutOfBoundsException', 'NullPointerException', 'NumberFormatException'], answer: 1, explain: "An array of length 5 has the indexes 0 to 4. Index 5 does not exist." },
        { t: 'mcq', q: "A program stops with this message. On which line of <code>Main.java</code> should you look first?<br><code>Exception in thread \"main\" java.lang.NullPointerException<br>&nbsp;&nbsp;&nbsp;&nbsp;at Main.printName(Main.java:12)<br>&nbsp;&nbsp;&nbsp;&nbsp;at Main.main(Main.java:5)</code>", options: ['Line 5', 'Line 12', 'Line 1', 'The last line of the file'], answer: 1, explain: "The top <code>at</code> line is where the exception happened: line 12, inside printName. Line 5 is only the place where main called printName." },
        { t: 'fill', q: "Read this crash message and fill in the three facts.", code: J`
          Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.length()" because "city" is null
              at Main.main(Main.java:6)

          Type of exception: ___
          Line number: ___
          Variable that was null: ___
        `, answers: [['NullPointerException', 'java.lang.NullPointerException'], '6', 'city'], explain: "The type comes right after the word thread \"main\". The line number is after <code>Main.java:</code>. The message names the null variable." },
        { t: 'order', q: "<code>main</code> calls <code>showPatient</code>, and <code>showPatient</code> calls <code>printName</code>. The exception happens inside <code>printName</code>. Put the lines of the crash message in the order Java prints them.", lines: [
          'Exception in thread "main" java.lang.NullPointerException',
          '    at Main.printName(Main.java:14)',
          '    at Main.showPatient(Main.java:9)',
          '    at Main.main(Main.java:4)'
        ], explain: "First the type. Then the newest method call (where it happened), then its caller, and main, the oldest, at the bottom." },
        { t: 'bug', q: "This pharmacy program crashes with <code>ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3</code>. Tap the line with the bug.", code: J`
          public class Main {
              public static void main(String[] args) {
                  double[] prices = {12.5, 30.0, 7.25};
                  double total = 0;
                  for (int i = 0; i <= prices.length; i++) {
                      total += prices[i];
                  }
                  System.out.println("Total: " + total + " SAR");
              }
          }
        `, bug: 5, fix: J`
          public class Main {
              public static void main(String[] args) {
                  double[] prices = {12.5, 30.0, 7.25};
                  double total = 0;
                  for (int i = 0; i < prices.length; i++) {
                      total += prices[i];
                  }
                  System.out.println("Total: " + total + " SAR");
              }
          }
        `, hint: 'Which values does <code>i</code> take? Which indexes exist?', explain: "With <code>i &lt;= prices.length</code>, <code>i</code> takes the values 0, 1, 2 and 3. Index 3 does not exist, so <code>prices[3]</code> throws. With <code>&lt;</code> the loop stops after index 2.", explainAr: 'الشرط &lt;= يجعل الحلقة تصل إلى فهرس غير موجود.' },
        { t: 'bug', q: "This program crashes with a <code>NullPointerException</code> in the loop. Tap the line that causes it.", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] names = new String[2];
                  names[0] = "Ahmed";
                  names[0] = "Huda";
                  for (String n : names) {
                      System.out.println(n.length());
                  }
              }
          }
        `, bug: 5, fix: J`
          public class Main {
              public static void main(String[] args) {
                  String[] names = new String[2];
                  names[0] = "Ahmed";
                  names[1] = "Huda";
                  for (String n : names) {
                      System.out.println(n.length());
                  }
              }
          }
        `, hint: 'Which element of the array never gets a value?', explain: "Line 5 writes into index 0 again, so <code>names[1]</code> stays <code>null</code>. In the second turn of the loop, <code>n.length()</code> is called on null. The fix puts \"Huda\" in index 1." },
        { t: 'code', q: "The array <code>days</code> holds the five study days. Read one whole number <code>i</code>. If <code>i</code> is a valid index, print <code>days[i]</code>. Otherwise print <code>No such day</code>. The program must never crash. No prompts.", qAr: 'اقرأ{{g:|ي}} رقماً واطبع{{g:|ي}} اليوم المقابل، أو No such day إذا كان الفهرس غير صالح.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    String[] days = {"Sun", "Mon", "Tue", "Wed", "Thu"};
                    int i = in.nextInt();
                    // print days[i] only if i is a valid index
                }
            }
          `,
          tests: [{ stdin: '2', expected: 'Tue' }, { stdin: '5', expected: 'No such day' }, { stdin: '-1', expected: 'No such day' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    String[] days = {"Sun", "Mon", "Tue", "Wed", "Thu"};
                    int i = in.nextInt();
                    if (i >= 0 && i < days.length) {
                        System.out.println(days[i]);
                    } else {
                        System.out.println("No such day");
                    }
                }
            }
          `,
          hint: "A valid index is at least 0 and less than <code>days.length</code>.",
          explain: "Checking <code>i &gt;= 0 &amp;&amp; i &lt; days.length</code> before using the index removes the cause of ArrayIndexOutOfBoundsException." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'try and catch',
      titleAr: 'التقاط الاستثناء: try و catch',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why catch an exception?' },
        { type: 'p', en: "A crash is bad news for the user. Imagine a clinic booking app that closes every time someone types a wrong number. People would stop using it. In CS101 Unit 8 you used <code>try</code> and <code>catch</code> for a missing file. In fact, they work for <b>every</b> kind of exception. In this lesson you learn exactly which lines run, and how to find out what went wrong.",
          ar: 'try و catch تعملان مع كل أنواع الاستثناءات، وليس فقط مع الملف المفقود.' },
        { type: 'analogy', title: 'A goalkeeper', en: "In football, the ball flies towards the goal. If the goalkeeper catches it, the match goes on. If there is no goalkeeper, it is a goal. The <code>catch</code> block is your goalkeeper: it catches the exception, so the program can go on instead of crashing.",
          ar: 'catch مثل حارس المرمى: يمسك الاستثناء فيستمر البرنامج.' },
        { type: 'h', en: 'The shape of try-catch' },
        { type: 'code', code: J`
          try {
              // code that might throw an exception
          } catch (ArithmeticException e) {
              // what to do if it happens
          }
        ` },
        { type: 'lines', rows: [
          ['try {', 'Start of the <b>risky</b> part: code that might throw an exception.'],
          ['} catch (ArithmeticException e) {', 'The <b>handler</b>. It runs only if an <code>ArithmeticException</code> is thrown inside try.'],
          ['ArithmeticException e', 'Like a method parameter: a type and a name. <code>e</code> will refer to the exception object.'],
          ['}', 'After the closing brace, the program continues normally.']
        ] },
        { type: 'p', en: "Here is the café program from Lesson 1 again. This time the risky division is inside <code>try</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int total = 300;
                  int friends = 0;
                  try {
                      int share = total / friends;
                      System.out.println("Each pays " + share);
                  } catch (ArithmeticException e) {
                      System.out.println("Cannot split between 0 friends.");
                  }
                  System.out.println("Bye");
              }
          }
        `, out: J`
          Cannot split between 0 friends.
          Bye
        ` },
        { type: 'lines', rows: [
          ['int share = total / friends;', '<code>friends</code> is 0, so Java throws an ArithmeticException on this line.'],
          ['System.out.println("Each pays " + share);', '<b>Skipped!</b> Java left the try block at the line above.'],
          ['catch (ArithmeticException e)', 'The type matches, so this block runs.'],
          ['System.out.println("Bye");', 'After the catch block, the program continues. No crash.']
        ], ar: 'بعد حدوث الاستثناء يُترك باقي try، وتعمل catch، ثم يكمل البرنامج.' },
        { type: 'check', q: 'In the program above, what is printed if <code>friends</code> is 3?', options: ['Cannot split between 0 friends.<br>Bye', 'Each pays 100<br>Bye', 'Each pays 100<br>Cannot split between 0 friends.<br>Bye', 'Bye'], answer: 1, explain: 'No exception is thrown, so try runs to the end and catch is skipped. Then Bye is printed.' },
        { type: 'h', en: 'The flow: follow the numbers' },
        { type: 'p', en: "The rule is simple, but you should see it with your own eyes. In the next program, each print shows a number. Watch which numbers appear and which do not." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println("1");
                  try {
                      System.out.println("2");
                      int x = 10 / 0;
                      System.out.println("3");
                  } catch (ArithmeticException e) {
                      System.out.println("4");
                  }
                  System.out.println("5");
              }
          }
        `, out: J`
          1
          2
          4
          5
        ` },
        { type: 'table', head: ['Line', 'What happens', 'Printed'], rows: [
          ['3', 'Normal code before try', '1'],
          ['5', 'First line of try', '2'],
          ['6', '<code>10 / 0</code> throws an ArithmeticException. Java leaves try at once.', '-'],
          ['7', 'Skipped', '-'],
          ['8–9', 'The catch type matches, so the block runs', '4'],
          ['11', 'The program continues after the try-catch', '5']
        ] },
        { type: 'analogy', title: 'Cooking with a recipe', en: "You follow a recipe step by step. At step 3 you find that the milk has gone bad. You do not continue with steps 4, 5 and 6. You switch to plan B and order food. Then your evening continues as usual. An exception inside try is the bad milk: the rest of try is skipped, catch is plan B, and the program continues after it." },
        { type: 'p', en: "<b>The rule.</b> When an exception is thrown inside <code>try</code>: (1) the rest of <code>try</code> is skipped, (2) the matching <code>catch</code> block runs, (3) the program continues after the whole try-catch. When there is <b>no</b> exception, <code>try</code> runs to the end and <code>catch</code> is skipped.",
          ar: 'عند حدوث استثناء: يُتجاوز باقي try، ثم تعمل catch، ثم يكمل البرنامج. وبدون استثناء لا تعمل catch أبداً.' },
        { type: 'check', q: 'In the numbered program, line 6 becomes <code>int x = 10 / 2;</code>. What is printed now?', options: ['1 2 4 5', '1 2 3 5', '1 2 3 4 5', '1 5'], answer: 1, explain: 'There is no exception, so 3 is printed and the catch block (4) is skipped.' },
        { type: 'h', en: 'What went wrong? getMessage()' },
        { type: 'p', en: "Inside the catch block, <code>e</code> refers to the exception object. Every exception object can carry a <b>message</b>, and the method <code>e.getMessage()</code> returns it as a String. It is the same message you saw in the crash reports of Lesson 1." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] seats = new int[4];
                  try {
                      seats[4] = 1;
                  } catch (ArrayIndexOutOfBoundsException e) {
                      System.out.println("Problem: " + e.getMessage());
                  }
              }
          }
        `, out: J`
          Problem: Index 4 out of bounds for length 4
        ` },
        { type: 'memory', title: 'The exception object and e', en: "Step through the program above. Watch where the exception object comes from and when <code>e</code> refers to it.", frames: [
          { label: 'After <code>int[] seats = new int[4];</code>', vars: [{ name: 'seats', type: 'int[]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[4]', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] }
          ] },
          { label: '<code>seats[4] = 1;</code> Index 4 does not exist. Java creates an exception object and throws it.', vars: [{ name: 'seats', type: 'int[]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[4]', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] },
            { id: 'E', cls: 'ArrayIndexOutOfBoundsException', fields: [{ name: 'message', value: '"Index 4 out of bounds for length 4"' }] }
          ] },
          { label: 'The catch type matches. <code>e</code> now refers to the exception object, so <code>e.getMessage()</code> can read its message.', vars: [{ name: 'seats', type: 'int[]', ref: 'A' }, { name: 'e', type: 'ArrayIndexOutOfBoundsException', ref: 'E' }], objects: [
            { id: 'A', cls: 'int[4]', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] },
            { id: 'E', cls: 'ArrayIndexOutOfBoundsException', fields: [{ name: 'message', value: '"Index 4 out of bounds for length 4"' }] }
          ] },
          { label: 'After the catch block, <code>e</code> no longer exists. Nothing refers to the exception object, so it becomes garbage.', vars: [{ name: 'seats', type: 'int[]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[4]', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] },
            { id: 'E', cls: 'ArrayIndexOutOfBoundsException', fields: [{ name: 'message', value: '"Index 4 out of bounds for length 4"' }], gone: true }
          ] }
        ], ar: 'المتغير e يشير إلى كائن الاستثناء، و getMessage تعيد الرسالة المخزنة فيه.' },
        { type: 'note', kind: 'tip', en: "<code>System.out.println(e);</code> prints the type and the message together, for example <code>java.lang.ArithmeticException: / by zero</code>. Some exceptions, such as InputMismatchException, have no message: then <code>getMessage()</code> returns <code>null</code>." },
        { type: 'check', q: 'In <code>catch (ArithmeticException e)</code> after <code>10 / 0</code>, what does <code>e.getMessage()</code> return?', options: ['"ArithmeticException"', '"/ by zero"', '"10 / 0"', 'null'], answer: 1, explain: 'The message of an int division by zero is "/ by zero", the same text as in the crash report.' },
        { type: 'h', en: 'A catch block catches only its own type' },
        { type: 'p', en: "A catch block is not a net for everything. It catches only the type you write (and its child classes, as you will see in Lesson 3). If a different type is thrown, the catch does not match, and the program still crashes." },
        { type: 'code', code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] seats = new int[2];
                  try {
                      seats[5] = 10;
                  } catch (ArithmeticException e) {
                      System.out.println("Maths problem");
                  }
                  System.out.println("Done");
              }
          }
        ` },
        { type: 'lines', title: 'What Java prints', rows: [
          ['Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 2', 'Not "Maths problem", and not "Done": the program crashed.'],
          ['    at Main.main(Main.java:5)', 'The catch was waiting for an ArithmeticException, but a different type came.']
        ], ar: 'كتلة catch تلتقط نوعها فقط، فإذا جاء نوع آخر يتوقف البرنامج.' },
        { type: 'note', kind: 'warn', en: "A variable declared inside <code>try { }</code> exists only inside those braces (scope). If you need it after the try-catch, declare it <b>before</b> the <code>try</code>." },
        { type: 'steps', title: 'Worked example: adding prices typed by a cashier', problem: 'A cashier typed four prices as text. One of them has a typing mistake. Add up the good prices, report the bad one, and do not stop at it.',
          steps: [
            { en: 'The prices arrive as texts in an array. Visit them one by one with a loop.', code: J`
              String[] typed = {"15", "20", "x5", "10"};
              int total = 0;
              for (String t : typed) {
                  // ...
              }
            ` },
            { en: 'Inside the loop, the risky line is <code>Integer.parseInt(t)</code>. Put it in <code>try</code>, with the lines that need its result.', code: J`
              try {
                  int price = Integer.parseInt(t);
                  total += price;
                  System.out.println("Added " + price);
              }
            ` },
            { en: 'Catch <code>NumberFormatException</code> and report the bad text with its message.', code: J`
              catch (NumberFormatException e) {
                  System.out.println("Skipped " + t + ": " + e.getMessage());
              }
            ` },
            { en: 'After the loop, print the total. Because try is <b>inside</b> the loop, one bad price skips only itself, and the loop goes on.' }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    String[] typed = {"15", "20", "x5", "10"};
                    int total = 0;
                    for (String t : typed) {
                        try {
                            int price = Integer.parseInt(t);
                            total += price;
                            System.out.println("Added " + price);
                        } catch (NumberFormatException e) {
                            System.out.println("Skipped " + t + ": " + e.getMessage());
                        }
                    }
                    System.out.println("Total: " + total + " SAR");
                }
            }
          `, out: J`
            Added 15
            Added 20
            Skipped x5: For input string: "x5"
            Added 10
            Total: 45 SAR
          `, ar: 'وضعنا try داخل الحلقة، فالسعر الخاطئ يُتجاوز وحده وتكمل الحلقة.' }
      ],
      mistakes: [
        { title: 'Putting the risky line before try', en: "The exception happens outside try, so no catch can help. The program crashes on the first line.", code: J`
          int share = total / friends;   // crashes here, outside try
          try {
              System.out.println(share);
          } catch (ArithmeticException e) { ... }
        `, ar: 'ضع{{g:|ي}} السطر الخطِر داخل try.' },
        { title: 'Expecting the rest of try to run', en: "After the exception, Java leaves the try block at once. The lines below the failing line are skipped." },
        { title: 'Using a variable from inside try after the block', en: "The compiler says <code>cannot find symbol</code>. Declare the variable before the try.", code: J`
          try {
              int share = 300 / 3;
          } catch (ArithmeticException e) { ... }
          System.out.println(share);   // compile error: share is unknown here
        ` },
        { title: 'An empty catch block', en: "<code>catch (NumberFormatException e) { }</code> makes the problem disappear silently, and nobody knows that something went wrong. At least print a clear message." }
      ],
      remember: [
        "Put the risky code in <code>try</code> and the plan B in <code>catch</code>.",
        "When an exception is thrown, the rest of try is skipped, the matching catch runs, and the program continues after it.",
        "When there is no exception, the catch block is skipped.",
        "<code>e.getMessage()</code> returns the message of the exception object.",
        "A catch block catches only its own type (and its children)."
      ],
      rememberAr: 'الكود الخطِر في try والخطة البديلة في catch. عند الاستثناء يُتجاوز باقي try وتعمل catch ثم يكمل البرنامج. getMessage تعيد رسالة الخطأ.',
      practice: [
        { t: 'mcq', q: "When does the code inside a <code>catch</code> block run?", options: ['Always, after try', 'Only when an exception of a matching type is thrown in the try block', 'Before the try block', 'Only when the program has no errors'], answer: 1, explain: "catch is plan B. It runs only when a matching exception is thrown inside try.", qAr: 'متى تعمل كتلة catch؟' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println("A");
                  try {
                      int[] seats = new int[3];
                      seats[3] = 1;
                      System.out.println("B");
                  } catch (ArrayIndexOutOfBoundsException e) {
                      System.out.println("C");
                  }
                  System.out.println("D");
              }
          }
        `, answer: J`
          A
          C
          D
        `, explain: "<code>seats[3]</code> throws, so B is skipped. The catch prints C, and the program continues with D." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int bill = 90;
                  int people = 3;
                  try {
                      System.out.println("Each: " + bill / people);
                      System.out.println("Thanks");
                  } catch (ArithmeticException e) {
                      System.out.println("Error: " + e.getMessage());
                  }
                  System.out.println("Next customer");
              }
          }
        `, answer: J`
          Each: 30
          Thanks
          Next customer
        `, explain: "<code>people</code> is 3, so no exception is thrown. try runs to the end and the catch block is skipped.", explainAr: 'لا يوجد استثناء، لذلك لا تعمل catch.' },
        { t: 'fill', q: "Complete the program. It must print <code>Problem: / by zero</code>.", code: J`
          public class Main {
              public static void main(String[] args) {
                  int sum = 240;
                  int count = 0;
                  ___ {
                      System.out.println(sum / count);
                  } ___ (ArithmeticException e) {
                      System.out.println("Problem: " + e.___());
                  }
              }
          }
        `, answers: ['try', 'catch', 'getMessage'], explain: "The risky division goes in <code>try</code>, the handler starts with <code>catch</code>, and <code>getMessage()</code> returns \"/ by zero\"." },
        { t: 'order', q: "Put the lines in order. The program tries to read the number in the text <code>\"7x\"</code>, prints <code>Not a number</code>, then <code>Done</code>.", lines: [
          'try {',
          '    int n = Integer.parseInt("7x");',
          '    System.out.println(n);',
          '} catch (NumberFormatException e) {',
          '    System.out.println("Not a number");',
          '}',
          'System.out.println("Done");'
        ], explain: "The risky lines are inside try. The catch block comes right after the try block. Done is after the whole try-catch, so it always runs." },
        { t: 'bug', q: "The program should print <code>No such mark</code> instead of crashing, but it crashes. Tap the line with the bug.", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] marks = {80, 95};
                  int m = marks[2];
                  try {
                      System.out.println(m);
                  } catch (ArrayIndexOutOfBoundsException e) {
                      System.out.println("No such mark");
                  }
              }
          }
        `, bug: 4, fix: J`
          public class Main {
              public static void main(String[] args) {
                  int[] marks = {80, 95};
                  try {
                      int m = marks[2];
                      System.out.println(m);
                  } catch (ArrayIndexOutOfBoundsException e) {
                      System.out.println("No such mark");
                  }
              }
          }
        `, hint: 'Which line throws the exception? Is it inside try?', explain: "<code>marks[2]</code> throws on line 4, which is <b>before</b> the try. A catch only protects the lines inside its try. The fix moves the risky line into the try block." },
        { t: 'bug', q: "The text is not a number, so the program should print <code>Not a number</code>. Instead it crashes. Tap the line with the bug.", code: J`
          public class Main {
              public static void main(String[] args) {
                  String code = "A12";
                  try {
                      int n = Integer.parseInt(code);
                      System.out.println(n);
                  } catch (ArithmeticException e) {
                      System.out.println("Not a number");
                  }
              }
          }
        `, bug: 7, fix: J`
          public class Main {
              public static void main(String[] args) {
                  String code = "A12";
                  try {
                      int n = Integer.parseInt(code);
                      System.out.println(n);
                  } catch (NumberFormatException e) {
                      System.out.println("Not a number");
                  }
              }
          }
        `, hint: 'Which exception does <code>Integer.parseInt</code> throw?', explain: "<code>Integer.parseInt(\"A12\")</code> throws a NumberFormatException. The catch waits for an ArithmeticException, so it does not match and the program crashes. Catch the right type." },
        { t: 'code', q: "Read two whole numbers <code>a</code> and <code>b</code>. Print <code>a / b</code> (integer division). If an exception happens, print <code>Error: </code> followed by its message. In both cases, print <code>Done</code> at the end. No prompts.<br>Example: <code>7 0</code> prints <code>Error: / by zero</code> and <code>Done</code>.", qAr: 'اقسم{{g:|ي}} a على b، وعند الاستثناء اطبع{{g:|ي}} رسالة الخطأ، ثم اطبع{{g:|ي}} Done دائماً.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int a = in.nextInt();
                    int b = in.nextInt();
                    // print a / b, or "Error: " + the message
                    // then always print Done
                }
            }
          `,
          tests: [{ stdin: '10 2', expected: '5\nDone' }, { stdin: '7 0', expected: 'Error: / by zero\nDone' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int a = in.nextInt();
                    int b = in.nextInt();
                    try {
                        System.out.println(a / b);
                    } catch (ArithmeticException e) {
                        System.out.println("Error: " + e.getMessage());
                    }
                    System.out.println("Done");
                }
            }
          `,
          hint: "Put <code>System.out.println(a / b);</code> in try. Print Done after the whole try-catch.",
          explain: "When b is 0 the division throws, the catch prints the message, and Done still runs because it is after the try-catch." },
        { t: 'code', q: "Read a whole number <code>n</code>, then <code>n</code> words. Each word should be a price in riyals. Add up the words that are whole numbers. For every word that is not, print <code>Bad: </code> and the word. At the end print <code>Total: </code> and the sum. No prompts.", qAr: 'اجمع{{g:|ي}} الأسعار الصحيحة واطبع{{g:|ي}} Bad مع كل كلمة ليست عدداً.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int n = in.nextInt();
                    int total = 0;
                    for (int i = 0; i < n; i++) {
                        String word = in.next();
                        // add the price, or print Bad: word
                    }
                    System.out.println("Total: " + total);
                }
            }
          `,
          tests: [{ stdin: '4\n12 abc 8 5', expected: 'Bad: abc\nTotal: 25' }, { stdin: '3\n1.5 two 40', expected: 'Bad: 1.5\nBad: two\nTotal: 40' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int n = in.nextInt();
                    int total = 0;
                    for (int i = 0; i < n; i++) {
                        String word = in.next();
                        try {
                            total += Integer.parseInt(word);
                        } catch (NumberFormatException e) {
                            System.out.println("Bad: " + word);
                        }
                    }
                    System.out.println("Total: " + total);
                }
            }
          `,
          hint: "Put <code>total += Integer.parseInt(word);</code> in a try inside the loop.",
          explain: "Because the try is inside the loop, a bad word only skips itself. <code>1.5</code> is bad too: an int cannot have a dot." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Several catch blocks and the exception family',
      titleAr: 'عدة كتل catch وشجرة عائلة الاستثناءات',
      minutes: 30,
      body: [
        { type: 'h', en: 'One try, several problems' },
        { type: 'p', en: "One piece of code can fail in more than one way. A shop program reads a price from a list of typed texts: the text may not be a number, or the position may be outside the list. Each problem needs its own message. You can write <b>several catch blocks</b> after one try.",
          ar: 'يمكن أن نكتب عدة كتل catch بعد try واحدة، لكل مشكلة رسالتها.' },
        { type: 'analogy', title: 'A hospital reception', en: "At a hospital, the receptionist listens to your problem and sends you to the right clinic: eye problems to the eye clinic, tooth pain to the dentist. Several catch blocks work like several clinics. Java checks them from top to bottom and sends the exception to the <b>first</b> one that matches.",
          ar: 'مثل موظف الاستقبال الذي يرسلك إلى العيادة المناسبة.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] prices = {"25", "40", "x"};
                  int index = 2;
                  try {
                      int p = Integer.parseInt(prices[index]);
                      System.out.println("Price: " + p);
                  } catch (NumberFormatException e) {
                      System.out.println("Not a number");
                  } catch (ArrayIndexOutOfBoundsException e) {
                      System.out.println("No item at " + index);
                  }
              }
          }
        `, out: J`
          Not a number
        ` },
        { type: 'lines', rows: [
          ['prices[index]', '<code>index</code> is 2, so the text is <code>"x"</code>. This part works.'],
          ['Integer.parseInt("x")', 'Throws a NumberFormatException.'],
          ['catch (NumberFormatException e)', 'First catch: the type matches, so this block runs.'],
          ['catch (ArrayIndexOutOfBoundsException e)', 'Skipped. Only <b>one</b> catch block runs.']
        ], ar: 'يفحص Java كتل catch من الأعلى إلى الأسفل وينفذ أول كتلة مناسبة فقط.' },
        { type: 'check', q: 'In the program above, <code>index</code> becomes 5. What is printed?', options: ['Not a number', 'No item at 5', 'Price: 5', 'Both messages'], answer: 1, explain: '<code>prices[5]</code> throws ArrayIndexOutOfBoundsException before parseInt even runs. The first catch does not match, the second one does.' },
        { type: 'h', en: 'Exceptions are classes in a family' },
        { type: 'p', en: "Exception types are <b>classes</b>, and they use inheritance, exactly as in Unit 4. At the top is the class <code>Throwable</code> (\"something that can be thrown\"). It has two children: <code>Error</code> for serious problems of the Java machine itself, and <code>Exception</code> for problems that a program can handle. Most exceptions you have met are children of <code>RuntimeException</code>." },
        { type: 'code', code: J`
          Throwable
          ├── Error                       serious problems: do not catch
          │     └── OutOfMemoryError
          └── Exception
                ├── IOException           Lesson 7
                │     └── FileNotFoundException
                └── RuntimeException
                      ├── ArithmeticException
                      ├── NullPointerException
                      ├── IndexOutOfBoundsException
                      │     └── ArrayIndexOutOfBoundsException
                      ├── IllegalArgumentException
                      │     └── NumberFormatException
                      └── NoSuchElementException
                            └── InputMismatchException
        ` },
        { type: 'p', en: "<code>Error</code> means things such as the computer running out of memory. Your program cannot repair them, so you do not catch them. Look again at the tree: a NumberFormatException <i>is an</i> IllegalArgumentException, which <i>is a</i> RuntimeException, which <i>is an</i> Exception.",
          ar: 'أعلى الشجرة Throwable، ثم Error للمشكلات الخطيرة و Exception للمشكلات التي يمكن معالجتها.' },
        { type: 'analogy', title: 'A parking sign', en: "A sign says \"Vehicles only\". Cars, taxis and buses may all park there, because each of them <i>is a</i> vehicle. A catch for a parent class is like that sign: it accepts the parent and all of its children. <code>catch (RuntimeException e)</code> accepts ArithmeticException, NullPointerException, NumberFormatException and every other class below it." },
        { type: 'h', en: 'The catch parameter is a superclass reference' },
        { type: 'p', en: "Remember Units 4 and 5: a superclass variable can refer to a subclass object (<code>Animal a = new Dog();</code>). A catch parameter works the same way. In <code>catch (RuntimeException e)</code>, the variable <code>e</code> has the type RuntimeException, but the real object can be any of its children." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      int[] a = new int[3];
                      a[3] = 7;
                  } catch (RuntimeException e) {
                      System.out.println("Caught: " + e.getClass().getSimpleName());
                  }
              }
          }
        `, out: J`
          Caught: ArrayIndexOutOfBoundsException
        ` },
        { type: 'lines', rows: [
          ['a[3] = 7;', 'Throws an ArrayIndexOutOfBoundsException object.'],
          ['catch (RuntimeException e)', 'Matches: an ArrayIndexOutOfBoundsException <i>is a</i> RuntimeException (upcasting).'],
          ['e.getClass().getSimpleName()', 'Asks the <b>real object</b> for its class name, as in Unit 5.']
        ], ar: 'المتغير e من نوع الأب، لكن الكائن الحقيقي من نوع الابن.' },
        { type: 'memory', title: 'A parent type, a child object', en: "The variable type and the object type are different, just like <code>Animal a = new Dog();</code>.", frames: [
          { label: '<code>a[3] = 7;</code> Java creates and throws the exception object.', vars: [{ name: 'a', type: 'int[]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[3]', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] },
            { id: 'E', cls: 'ArrayIndexOutOfBoundsException', fields: [{ name: 'message', value: '"Index 3 out of bounds for length 3"' }] }
          ] },
          { label: '<code>catch (RuntimeException e)</code> matches. The variable has the parent type; the object keeps its own class.', vars: [{ name: 'e', type: 'RuntimeException', ref: 'E' }], objects: [
            { id: 'E', cls: 'ArrayIndexOutOfBoundsException', fields: [{ name: 'message', value: '"Index 3 out of bounds for length 3"' }] }
          ] }
        ], ar: 'نوع المتغير RuntimeException، ونوع الكائن ArrayIndexOutOfBoundsException.' },
        { type: 'check', q: 'Which catch block can catch a <code>NumberFormatException</code>?', options: ['<code>catch (ArithmeticException e)</code>', '<code>catch (IllegalArgumentException e)</code>', '<code>catch (NullPointerException e)</code>', '<code>catch (IndexOutOfBoundsException e)</code>'], answer: 1, explain: 'NumberFormatException is a child of IllegalArgumentException, so a catch for the parent also catches it.' },
        { type: 'h', en: 'Specific before general' },
        { type: 'p', en: "When you have several catch blocks, put the <b>children first</b> and the parents after them. If a parent came first, it would catch everything, and the child's block could never run. Java sees this and refuses to compile." },
        { type: 'code', code: J`
          try {
              int n = Integer.parseInt("abc");
          } catch (Exception e) {
              System.out.println("Something went wrong");
          } catch (NumberFormatException e) {      // compile error
              System.out.println("Not a number");
          }
        ` },
        { type: 'p', en: "The compiler says: <code>error: exception NumberFormatException has already been caught</code>. The fix is to swap the two catch blocks, so that NumberFormatException comes first.",
          ar: 'ضع{{g:|ي}} الاستثناء الأخص أولاً ثم الأعم، وإلا ظهر خطأ ترجمة.' },
        { type: 'note', kind: 'exam', en: "A favourite exam question: \"Which order of catch blocks compiles?\" Always go from the most specific class (lowest in the tree) to the most general one (highest in the tree)." },
        { type: 'h', en: 'Multi-catch: one block for two types' },
        { type: 'p', en: "Sometimes two different exceptions need the same handling. Instead of writing the same catch block twice, write both types in one catch, separated by <code>|</code> (read it as \"or\"). This is called <b>multi-catch</b>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] codes = {"101", "abc"};
                  for (int i = 0; i <= 2; i++) {
                      try {
                          int c = Integer.parseInt(codes[i]);
                          System.out.println("Course " + c);
                      } catch (NumberFormatException | ArrayIndexOutOfBoundsException e) {
                          System.out.println("Bad entry " + i);
                      }
                  }
              }
          }
        `, out: J`
          Course 101
          Bad entry 1
          Bad entry 2
        ` },
        { type: 'lines', rows: [
          ['i = 0', '<code>"101"</code> is a number: Course 101.'],
          ['i = 1', '<code>"abc"</code> throws NumberFormatException: the multi-catch matches.'],
          ['i = 2', '<code>codes[2]</code> throws ArrayIndexOutOfBoundsException: the same block matches.']
        ], ar: 'الرمز | يعني "أو": كتلة واحدة لنوعين من الاستثناءات.' },
        { type: 'note', kind: 'warn', en: "The types in a multi-catch must not be parent and child. <code>catch (NumberFormatException | IllegalArgumentException e)</code> does not compile, because a NumberFormatException already <i>is an</i> IllegalArgumentException. Write only the parent." },
        { type: 'h', en: 'Catching Exception as a last resort' },
        { type: 'p', en: "<code>catch (Exception e)</code> catches almost every exception. It is useful as the <b>last</b> catch block, after the specific ones, to stay safe from surprises. Do not use it as your only plan: one general message such as \"Something went wrong\" does not help the user fix the problem." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] names = {"Sara", null};
                  for (int i = 0; i < 3; i++) {
                      try {
                          System.out.println(names[i].length());
                      } catch (ArrayIndexOutOfBoundsException e) {
                          System.out.println("No name at " + i);
                      } catch (Exception e) {
                          System.out.println("Other problem: " + e.getClass().getSimpleName());
                      }
                  }
              }
          }
        `, out: J`
          4
          Other problem: NullPointerException
          No name at 2
        ` },
        { type: 'check', q: 'Which order of catch blocks compiles?', options: ['Exception, then NumberFormatException', 'NumberFormatException, then RuntimeException, then Exception', 'RuntimeException, then ArithmeticException', 'Exception, then RuntimeException'], answer: 1, explain: 'From specific to general: NumberFormatException is below RuntimeException, which is below Exception.' },
        { type: 'steps', title: 'Worked example: clinic appointment slots', problem: 'A clinic has four appointment times. Patients ask for a slot by typing its number. Answer three requests: <code>"2"</code>, <code>"9"</code> and <code>"one"</code>. Each problem gets its own clear message.',
          steps: [
            { en: 'Store the times and the requests in two arrays, and loop over the requests.', code: J`
              String[] times = {"09:00", "09:30", "10:00", "10:30"};
              String[] requests = {"2", "9", "one"};
              for (String r : requests) {
                  // ...
              }
            ` },
            { en: 'Two lines can fail: <code>parseInt</code> (not a number) and <code>times[slot]</code> (no such slot). Put both in one try.', code: J`
              try {
                  int slot = Integer.parseInt(r);
                  System.out.println("Slot " + slot + ": " + times[slot]);
              }
            ` },
            { en: 'Add one catch block for each problem. These two types are not parent and child, so their order does not matter here.', code: J`
              catch (NumberFormatException e) {
                  System.out.println("\"" + r + "\" is not a slot number");
              } catch (ArrayIndexOutOfBoundsException e) {
                  System.out.println("Slot " + r + " does not exist");
              }
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    String[] times = {"09:00", "09:30", "10:00", "10:30"};
                    String[] requests = {"2", "9", "one"};
                    for (String r : requests) {
                        try {
                            int slot = Integer.parseInt(r);
                            System.out.println("Slot " + slot + ": " + times[slot]);
                        } catch (NumberFormatException e) {
                            System.out.println("\"" + r + "\" is not a slot number");
                        } catch (ArrayIndexOutOfBoundsException e) {
                            System.out.println("Slot " + r + " does not exist");
                        }
                    }
                }
            }
          `, out: J`
            Slot 2: 10:00
            Slot 9 does not exist
            "one" is not a slot number
          `, ar: 'كل مشكلة لها كتلة catch خاصة ورسالة واضحة.' }
      ],
      mistakes: [
        { title: 'Putting a general catch before a specific one', en: "The specific block could never run, so the compiler stops with <code>has already been caught</code>.", code: J`
          } catch (RuntimeException e) { ... }
          } catch (ArithmeticException e) { ... }   // compile error
        `, ar: 'الأخص أولاً، ثم الأعم.' },
        { title: 'Expecting several catch blocks to run', en: "Only the first matching block runs. The others are skipped, even if they would also match." },
        { title: 'Multi-catch with a parent and its child', en: "<code>catch (NumberFormatException | IllegalArgumentException e)</code> is a compile error. Keep only the parent." },
        { title: 'Catching Error or Throwable', en: "These include problems such as running out of memory, which your program cannot repair. Catch Exception or, better, more specific types." }
      ],
      remember: [
        "One try can have several catch blocks; Java runs the <b>first</b> one that matches, and only that one.",
        "The family: Throwable → Error and Exception; Exception → RuntimeException (and others).",
        "A catch for a parent class also catches all of its children: the parameter is a superclass reference.",
        "Order: specific (child) first, general (parent) last, or the code does not compile.",
        "Multi-catch <code>catch (A | B e)</code> handles two unrelated types in the same way."
      ],
      rememberAr: 'يعمل أول catch مناسب فقط. الاستثناءات أصناف في شجرة وراثة، و catch للأب يلتقط الأبناء. رتّب{{g:|ي}} من الأخص إلى الأعم.',
      practice: [
        { t: 'mcq', q: "Which class is at the top of the exception family tree?", options: ['Exception', 'RuntimeException', 'Throwable', 'Error'], answer: 2, explain: "Throwable is the parent of both Error and Exception.", qAr: 'ما الصنف الموجود في أعلى شجرة الاستثناءات؟' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] stock = {"12", "seven"};
                  try {
                      int a = Integer.parseInt(stock[0]);
                      int b = Integer.parseInt(stock[1]);
                      System.out.println(a + b);
                  } catch (ArrayIndexOutOfBoundsException e) {
                      System.out.println("No such item");
                  } catch (NumberFormatException e) {
                      System.out.println("Bad number");
                  }
                  System.out.println("End");
              }
          }
        `, answer: J`
          Bad number
          End
        `, explain: "<code>\"seven\"</code> is not made of digits, so the second parseInt throws NumberFormatException. The first catch does not match; the second one does. Then End." },
        { t: 'mcq', q: "Which exception is <b>not</b> caught by <code>catch (RuntimeException e)</code>?", options: ['ArithmeticException', 'NullPointerException', 'FileNotFoundException', 'NumberFormatException'], answer: 2, explain: "FileNotFoundException is a child of IOException. IOException is an Exception, but not a RuntimeException. You will see why this matters in Lesson 7." },
        { t: 'fill', q: "Complete the multi-catch so that both problems print <code>Cannot compute</code>.", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] counts = {4, 0};
                  try {
                      System.out.println(100 / counts[1]);
                  } catch (ArithmeticException ___ ArrayIndexOutOfBoundsException e) {
                      System.out.println("Cannot compute");
                  }
              }
          }
        `, answers: ['|'], explain: "In a multi-catch, the types are separated by a single vertical bar <code>|</code>." },
        { t: 'order', q: "Put the lines in an order that compiles. The catch blocks must go from specific to general.", lines: [
          'try {',
          '    int n = Integer.parseInt(text);',
          '} catch (NumberFormatException e) {',
          '    System.out.println("Not a number");',
          '} catch (RuntimeException e) {',
          '    System.out.println("Other run-time problem");',
          '} catch (Exception e) {',
          '    System.out.println("Something else");',
          '}'
        ], explain: "NumberFormatException is a child of RuntimeException, which is a child of Exception. Children first." },
        { t: 'bug', q: "This program does not compile. Tap a line that causes the problem.", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] stock = {5, 0, 3};
                  try {
                      System.out.println(stock[3]);
                  } catch (RuntimeException e) {
                      System.out.println("Some problem");
                  } catch (ArrayIndexOutOfBoundsException e) {
                      System.out.println("No such item");
                  }
              }
          }
        `, bug: [6, 8], fix: J`
          public class Main {
              public static void main(String[] args) {
                  int[] stock = {5, 0, 3};
                  try {
                      System.out.println(stock[3]);
                  } catch (ArrayIndexOutOfBoundsException e) {
                      System.out.println("No such item");
                  } catch (RuntimeException e) {
                      System.out.println("Some problem");
                  }
              }
          }
        `, hint: 'Is ArrayIndexOutOfBoundsException a child of RuntimeException?', explain: "The general <code>RuntimeException</code> block comes first, so the ArrayIndexOutOfBoundsException block could never run. The compiler reports <code>has already been caught</code>. Swap the two blocks.", explainAr: 'الكتلة العامة جاءت قبل الخاصة.' },
        { t: 'bug', q: "This program does not compile. Tap the line with the bug.", code: J`
          public class Main {
              public static void main(String[] args) {
                  String qty = "3 boxes";
                  try {
                      int n = Integer.parseInt(qty);
                      System.out.println(n * 2);
                  } catch (NumberFormatException | IllegalArgumentException e) {
                      System.out.println("Bad quantity");
                  }
              }
          }
        `, bug: 7, fix: J`
          public class Main {
              public static void main(String[] args) {
                  String qty = "3 boxes";
                  try {
                      int n = Integer.parseInt(qty);
                      System.out.println(n * 2);
                  } catch (NumberFormatException e) {
                      System.out.println("Bad quantity");
                  }
              }
          }
        `, hint: 'Look at the family tree: what is the parent of NumberFormatException?', explain: "NumberFormatException is a child of IllegalArgumentException. The types of a multi-catch must not be related, so this does not compile. One type is enough." },
        { t: 'code', q: "A bus has four trips a day: <code>06:30</code>, <code>07:15</code>, <code>08:00</code> and <code>09:45</code> (indexes 0 to 3). Read one word: the trip number. Print the time of that trip. If the word is not a whole number, print <code>Not a number</code>. If there is no such trip, print <code>No such trip</code>. Use two catch blocks. No prompts.", qAr: 'اطبع{{g:|ي}} وقت الرحلة، أو رسالة مناسبة لكل خطأ باستخدام كتلتي catch.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    String[] times = {"06:30", "07:15", "08:00", "09:45"};
                    String word = in.next();
                    // parse word, print times[trip], catch two exceptions
                }
            }
          `,
          tests: [{ stdin: '1', expected: '07:15' }, { stdin: '9', expected: 'No such trip' }, { stdin: 'two', expected: 'Not a number' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    String[] times = {"06:30", "07:15", "08:00", "09:45"};
                    String word = in.next();
                    try {
                        int trip = Integer.parseInt(word);
                        System.out.println(times[trip]);
                    } catch (NumberFormatException e) {
                        System.out.println("Not a number");
                    } catch (ArrayIndexOutOfBoundsException e) {
                        System.out.println("No such trip");
                    }
                }
            }
          `,
          hint: "Inside try: <code>int trip = Integer.parseInt(word);</code> then print <code>times[trip]</code>.",
          explain: "parseInt fails for <code>two</code> (NumberFormatException); <code>times[9]</code> fails because the last index is 3 (ArrayIndexOutOfBoundsException)." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'finally and try-with-resources',
      titleAr: 'الكتلة finally و try مع الموارد',
      minutes: 30,
      body: [
        { type: 'h', en: 'Code that must always run' },
        { type: 'p', en: "Some work must happen whether things go well or badly: closing a file, logging out of a banking app, printing a receipt. If you put this work at the end of <code>try</code>, an exception can skip it. If you put it in <code>catch</code>, it runs only when something goes wrong. Java has a third block for this job: <code>finally</code>.",
          ar: 'finally كتلة تعمل دائماً، سواء حدث استثناء أم لم يحدث.' },
        { type: 'analogy', title: 'Closing the shop', en: "Whether it was a good day with many customers or a bad day with none, at night the shop owner locks the door. Locking the door does not depend on how the day went. <code>finally</code> is locking the door.",
          ar: 'مثل صاحب المحل الذي يغلق الباب كل ليلة مهما كان اليوم.' },
        { type: 'code', code: J`
          try {
              // risky work
          } catch (ArithmeticException e) {
              // plan B
          } finally {
              // always runs
          }
        ` },
        { type: 'p', en: "Follow the numbers again. This time there is a finally block." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      System.out.println("1 start of try");
                      int x = 5 / 0;
                      System.out.println("2 end of try");
                  } catch (ArithmeticException e) {
                      System.out.println("3 catch");
                  } finally {
                      System.out.println("4 finally");
                  }
                  System.out.println("5 after");
              }
          }
        `, out: J`
          1 start of try
          3 catch
          4 finally
          5 after
        ` },
        { type: 'lines', rows: [
          ['int x = 5 / 0;', 'Throws. The rest of try (line 6) is skipped.'],
          ['catch (ArithmeticException e)', 'The type matches, so it prints "3 catch".'],
          ['finally', 'Runs after the catch: "4 finally".'],
          ['System.out.println("5 after");', 'The program continues as usual.']
        ] },
        { type: 'table', head: ['Situation', 'What runs, in order'], rows: [
          ['No exception', 'all of try → finally → code after'],
          ['Exception, caught', 'part of try → matching catch → finally → code after'],
          ['Exception, not caught', 'part of try → finally → the program crashes']
        ] },
        { type: 'p', en: "Look at the last row: finally runs even when <b>no</b> catch matches, just before the program crashes. In the program below there is no catch at all. It prints <code>1 try</code> and <code>2 finally</code>, and then the crash report <code>Exception in thread \"main\" java.lang.ArithmeticException: / by zero</code> appears. Line 9 never runs.",
          ar: 'تعمل finally في الحالات الثلاث، حتى قبل توقف البرنامج.' },
        { type: 'code', code: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      System.out.println("1 try");
                      int x = 5 / 0;
                  } finally {
                      System.out.println("2 finally");
                  }
                  System.out.println("3 after");
              }
          }
        ` },
        { type: 'check', q: 'In the first numbered program, line 5 becomes <code>int x = 5 / 1;</code>. What is printed?', options: ['1, 3, 4, 5', '1, 2, 4, 5', '1, 2, 3, 4, 5', '1, 2, 5'], answer: 1, explain: 'No exception: try runs to the end (1, 2), catch is skipped, finally runs (4), then 5.' },
        { type: 'h', en: 'finally runs even after return' },
        { type: 'p', en: "A <code>return</code> statement leaves a method at once. But if the return is inside a try that has a finally block, Java first runs the finally block, and only then leaves the method." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println(check(80));
                  System.out.println(check(-5));
              }

              static String check(int mark) {
                  try {
                      if (mark < 0) {
                          return "invalid";
                      }
                      return "ok";
                  } finally {
                      System.out.println("checked " + mark);
                  }
              }
          }
        `, out: J`
          checked 80
          ok
          checked -5
          invalid
        ` },
        { type: 'lines', rows: [
          ['System.out.println(check(80));', '<code>main</code> calls <code>check(80)</code> and waits for the result.'],
          ['return "ok";', 'The method wants to leave with "ok", but finally comes first.'],
          ['System.out.println("checked " + mark);', 'finally prints <code>checked 80</code>.'],
          ['ok', 'Now <code>check</code> really returns, and main prints <code>ok</code>.']
        ], ar: 'حتى مع return تعمل finally قبل الخروج من الدالة.' },
        { type: 'analogy', title: 'Returning the hotel key', en: "Whether you leave a hotel early or late, happy or angry, you give the room key back at reception before you go. finally is giving the key back: it happens on <b>every</b> way out of the try block." },
        { type: 'note', kind: 'exam', en: "A try must be followed by at least one catch or a finally (or both). <code>try { ... } finally { ... }</code> with no catch is legal. A try alone is a compile error: <code>'try' without 'catch', 'finally' or resource declarations</code>." },
        { type: 'check', q: 'Which sentence about <code>finally</code> is true?', options: ['It runs only when an exception is thrown', 'It runs only when no exception is thrown', 'It runs in both cases, even after a return in try', 'It runs before the try block'], answer: 2, explain: 'finally runs on every way out of the try block: normal end, caught exception, uncaught exception, and return.' },
        { type: 'h', en: 'Closing files: why it matters' },
        { type: 'p', en: "A Scanner that reads a file, or a PrintWriter that writes one, keeps the file open. A PrintWriter even keeps your text in memory (in a <b>buffer</b>) and writes it into the file only when you close it. If an exception skips <code>close()</code>, the file may stay empty. Before Java 7, programmers closed files in finally, like this:" },
        { type: 'code', code: J`
          PrintWriter out = null;
          try {
              out = new PrintWriter("order.txt");
              out.println("1 coffee");
          } catch (FileNotFoundException e) {
              System.out.println("Cannot write");
          } finally {
              if (out != null) {
                  out.close();
              }
          }
        ` },
        { type: 'lines', rows: [
          ['PrintWriter out = null;', 'Declared <b>before</b> try, so that finally can see it.'],
          ['if (out != null)', 'If the file could not be opened, <code>out</code> is still null. Calling <code>close()</code> on null would throw a NullPointerException!'],
          ['out.close();', 'Runs in every case.']
        ] },
        { type: 'p', en: "It works, but it is long and easy to get wrong. In CS101 Unit 8 you met the short way: <b>try-with-resources</b>. Now you know what it really does for you: it writes this finally block automatically.",
          ar: 'try مع الموارد تكتب عنّا كتلة finally التي تغلق الملف.' },
        { type: 'h', en: 'try-with-resources with catch' },
        { type: 'p', en: "A <b>resource</b> is something that must be closed after use, such as a Scanner on a file or a PrintWriter. Open it in parentheses right after <code>try</code>. Java closes it automatically at the end of the block, even when an exception happens. You can still add catch blocks. Here we write an order to a file and read it back in the same program." },
        { type: 'code', run: true, code: J`
          import java.io.*;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) {
                  try (PrintWriter out = new PrintWriter("order.txt")) {
                      out.println("Latte 14");
                      out.println("Water 2");
                  } catch (FileNotFoundException e) {
                      System.out.println("Cannot write the order");
                  }

                  try (Scanner in = new Scanner(new File("order.txt"))) {
                      while (in.hasNextLine()) {
                          System.out.println(in.nextLine());
                      }
                  } catch (FileNotFoundException e) {
                      System.out.println("Cannot read the order");
                  }
              }
          }
        `, out: J`
          Latte 14
          Water 2
        ` },
        { type: 'lines', rows: [
          ['try (PrintWriter out = new PrintWriter("order.txt"))', 'Open the resource. The constructor may throw FileNotFoundException, so we catch it.'],
          ['}', 'End of the block: Java calls <code>out.close()</code>, and the text goes into the file.'],
          ['try (Scanner in = new Scanner(new File("order.txt")))', 'A second resource, for reading. It is closed automatically too.']
        ] },
        { type: 'h', en: 'In which order? Resource, catch, finally' },
        { type: 'p', en: "Any class that implements the interface <code>AutoCloseable</code> can be a resource. This interface (remember Unit 5) has one method: <code>close()</code>. Scanner and PrintWriter implement it. Let us write our own tiny resource to see exactly when <code>close()</code> runs." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  try (Door d = new Door()) {
                      System.out.println("inside");
                      int x = 1 / 0;
                  } catch (ArithmeticException e) {
                      System.out.println("catch");
                  } finally {
                      System.out.println("finally");
                  }
              }
          }

          class Door implements AutoCloseable {
              public void close() {
                  System.out.println("door closed");
              }
          }
        `, out: J`
          inside
          door closed
          catch
          finally
        ` },
        { type: 'lines', rows: [
          ['class Door implements AutoCloseable', 'Door promises a <code>close()</code> method, so it can be a resource.'],
          ['int x = 1 / 0;', 'Throws inside the try block.'],
          ['door closed', 'Java closes the resource <b>first</b>...'],
          ['catch', '...then the catch block runs...'],
          ['finally', '...and finally runs last.']
        ], ar: 'يُغلق المورد أولاً، ثم تعمل catch، ثم finally.' },
        { type: 'check', q: 'Which interface must a class implement so that it can be used in try-with-resources?', options: ['Comparable', 'AutoCloseable', 'Exception', 'Scanner'], answer: 1, explain: 'try-with-resources calls close() at the end, so the class must implement AutoCloseable.' },
        { type: 'steps', title: 'Worked example: a pharmacy receipt', problem: 'Write three items with their prices into <code>receipt.txt</code>. Then read the file back, print each item, and add up the prices. The total must be printed even if reading fails.',
          steps: [
            { en: 'Write the file with try-with-resources. Catch FileNotFoundException in case the file cannot be created.', code: J`
              try (PrintWriter out = new PrintWriter("receipt.txt")) {
                  out.println("Vitamins 25");
                  out.println("Syrup 18");
                  out.println("Bandages 7");
              } catch (FileNotFoundException e) {
                  System.out.println("Cannot write the receipt");
              }
            ` },
            { en: 'Read it back word by word: first the item name with <code>next()</code>, then its price with <code>nextInt()</code>. <code>total</code> is declared before the try, so finally can use it.', code: J`
              int total = 0;
              try (Scanner in = new Scanner(new File("receipt.txt"))) {
                  while (in.hasNext()) {
                      String item = in.next();
                      int price = in.nextInt();
                      total += price;
                      System.out.println(item + " " + price + " SAR");
                  }
              }
            ` },
            { en: 'Add a catch for a missing file and a finally that always prints the total.', code: J`
              catch (FileNotFoundException e) {
                  System.out.println("Cannot read the receipt");
              } finally {
                  System.out.println("Total: " + total + " SAR");
              }
            ` }
          ],
          code: J`
            import java.io.*;
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    try (PrintWriter out = new PrintWriter("receipt.txt")) {
                        out.println("Vitamins 25");
                        out.println("Syrup 18");
                        out.println("Bandages 7");
                    } catch (FileNotFoundException e) {
                        System.out.println("Cannot write the receipt");
                    }

                    int total = 0;
                    try (Scanner in = new Scanner(new File("receipt.txt"))) {
                        while (in.hasNext()) {
                            String item = in.next();
                            int price = in.nextInt();
                            total += price;
                            System.out.println(item + " " + price + " SAR");
                        }
                    } catch (FileNotFoundException e) {
                        System.out.println("Cannot read the receipt");
                    } finally {
                        System.out.println("Total: " + total + " SAR");
                    }
                }
            }
          `, out: J`
            Vitamins 25 SAR
            Syrup 18 SAR
            Bandages 7 SAR
            Total: 50 SAR
          `, ar: 'كتبنا الإيصال ثم قرأناه، و finally تطبع المجموع في كل الحالات.' }
      ],
      mistakes: [
        { title: 'Thinking finally runs only after an exception', en: "finally runs in every case: no exception, a caught exception, an uncaught exception, and even after a return.", ar: 'finally تعمل دائماً.' },
        { title: 'Forgetting to close a PrintWriter', en: "The text stays in the buffer and the file can be empty. Use try-with-resources, and the file is closed for you." },
        { title: 'Using the resource variable after the block', en: "The variable in the parentheses lives only inside the try block (scope).", code: J`
          try (Scanner in = new Scanner(new File("menu.txt"))) {
              System.out.println(in.nextLine());
          }
          in.nextLine();   // compile error: in is unknown here
        ` },
        { title: 'A resource class that is not AutoCloseable', en: "The compiler says <code>try-with-resources not applicable to variable type</code>. Add <code>implements AutoCloseable</code> to the class." }
      ],
      remember: [
        "<code>finally</code> runs in every case: no exception, a caught exception, an uncaught exception, and even after return.",
        "Use finally for clean-up work that must always happen.",
        "A try needs at least one catch or a finally (try-with-resources may have neither).",
        "try-with-resources closes the resource automatically, before catch and finally run.",
        "A resource must implement <code>AutoCloseable</code>; Scanner and PrintWriter do."
      ],
      rememberAr: 'finally تعمل في كل الحالات حتى بعد return. try مع الموارد تغلق المورد تلقائياً قبل catch و finally، والمورد يجب أن يطبق AutoCloseable.',
      practice: [
        { t: 'mcq', q: "When does a <code>finally</code> block run?", options: ['Only when an exception is thrown', 'Only when no exception is thrown', 'Always, whether or not an exception is thrown', 'Never, unless you call it'], answer: 2, explain: "finally is for work that must always happen.", qAr: 'متى تعمل finally؟' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      System.out.println("Pay 20 SAR");
                  } catch (ArithmeticException e) {
                      System.out.println("Error");
                  } finally {
                      System.out.println("Print receipt");
                  }
                  System.out.println("Next");
              }
          }
        `, answer: J`
          Pay 20 SAR
          Print receipt
          Next
        `, explain: "No exception: try runs, catch is skipped, finally runs, then the program continues." },
        { t: 'output', q: "Be careful with the order. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println(price(3));
              }

              static int price(int cups) {
                  try {
                      return cups * 12;
                  } finally {
                      System.out.println("Order closed");
                  }
              }
          }
        `, answer: J`
          Order closed
          36
        `, explain: "The method wants to return 36, but finally runs first and prints <code>Order closed</code>. Only then does main receive 36 and print it.", explainAr: 'finally تعمل قبل أن تعود الدالة بالقيمة.' },
        { t: 'fill', q: "Complete the program: open a PrintWriter as a resource, and print <code>Finished</code> in every case.", code: J`
          import java.io.*;

          public class Main {
              public static void main(String[] args) {
                  try (___ out = new PrintWriter("plan.txt")) {
                      out.println("Study Unit 6");
                  } catch (FileNotFoundException e) {
                      System.out.println("Cannot write");
                  } ___ {
                      System.out.println("Finished");
                  }
              }
          }
        `, answers: ['PrintWriter', 'finally'], explain: "The resource is declared like a variable: type, name, =, new object. The block that always runs is <code>finally</code>." },
        { t: 'order', q: "Put the lines in order: try a division, handle a zero, and always print <code>Done</code>.", lines: [
          'try {',
          '    System.out.println(100 / n);',
          '} catch (ArithmeticException e) {',
          '    System.out.println("n is zero");',
          '} finally {',
          '    System.out.println("Done");',
          '}'
        ], explain: "The order of the blocks is always try, then catch, then finally." },
        { t: 'bug', q: "This program does not compile. Tap the line with the bug.", code: J`
          public class Main {
              public static void main(String[] args) {
                  try (Locker l = new Locker()) {
                      System.out.println("Using the locker");
                  }
              }
          }

          class Locker {
              public void close() {
                  System.out.println("Locker closed");
              }
          }
        `, bug: 9, fix: J`
          public class Main {
              public static void main(String[] args) {
                  try (Locker l = new Locker()) {
                      System.out.println("Using the locker");
                  }
              }
          }

          class Locker implements AutoCloseable {
              public void close() {
                  System.out.println("Locker closed");
              }
          }
        `, hint: 'What must a class promise before it can be a resource?', explain: "Having a method called close() is not enough. The class must <b>implement AutoCloseable</b>, or the compiler says <code>try-with-resources not applicable to variable type</code>." },
        { t: 'bug', q: "This program does not compile. Tap a line that causes the problem.", code: J`
          import java.io.*;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  try (PrintWriter out = new PrintWriter("menu.txt")) {
                      out.println("Tea 5");
                  }
                  try (Scanner in = new Scanner(new File("menu.txt"))) {
                      String first = in.nextLine();
                  }
                  System.out.println(first);
              }
          }
        `, bug: [10, 12], fix: J`
          import java.io.*;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  try (PrintWriter out = new PrintWriter("menu.txt")) {
                      out.println("Tea 5");
                  }
                  String first = "";
                  try (Scanner in = new Scanner(new File("menu.txt"))) {
                      first = in.nextLine();
                  }
                  System.out.println(first);
              }
          }
        `, hint: 'Where does the variable <code>first</code> live?', explain: "<code>first</code> is declared inside the try block, so it does not exist on line 12 (<code>cannot find symbol</code>). Declare it before the try and only assign it inside." },
        { t: 'code', q: "Read two whole numbers <code>a</code> and <code>b</code>. Print <code>Result: </code> followed by <code>a / b</code>. If <code>b</code> is 0, print <code>Cannot divide by zero</code> instead. In every case, finish with <code>Calculation finished</code>, printed from a finally block. No prompts.", qAr: 'اطبع{{g:|ي}} ناتج القسمة أو رسالة الخطأ، ثم Calculation finished من داخل finally.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int a = in.nextInt();
                    int b = in.nextInt();
                    // try, catch, finally
                }
            }
          `,
          tests: [{ stdin: '20 4', expected: 'Result: 5\nCalculation finished' }, { stdin: '5 0', expected: 'Cannot divide by zero\nCalculation finished' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int a = in.nextInt();
                    int b = in.nextInt();
                    try {
                        System.out.println("Result: " + a / b);
                    } catch (ArithmeticException e) {
                        System.out.println("Cannot divide by zero");
                    } finally {
                        System.out.println("Calculation finished");
                    }
                }
            }
          `,
          hint: "Three blocks: try (the division), catch (ArithmeticException), finally (the last message).",
          explain: "finally prints its message after try in the first test and after catch in the second." },
        { t: 'code', q: "Read a whole number <code>n</code>, then <code>n</code> words. Write the words into the file <code>words.txt</code>, one per line, using try-with-resources. Then read the file back and print each line with its number: <code>1: Sara</code>, <code>2: Omar</code>... Catch FileNotFoundException in both parts. No prompts.", qAr: 'اكتب{{g:|ي}} الكلمات في ملف ثم {{g:اقرأه|اقرئيه}} واطبع{{g:|ي}} كل سطر مع رقمه.',
          starter: J`
            import java.io.*;
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int n = in.nextInt();
                    // 1) write n words into words.txt
                    // 2) read words.txt and print "1: word", "2: word", ...
                }
            }
          `,
          tests: [{ stdin: '3\nSara Omar Lina', expected: '1: Sara\n2: Omar\n3: Lina' }, { stdin: '1\nRiyadh', expected: '1: Riyadh' }],
          solution: J`
            import java.io.*;
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int n = in.nextInt();
                    try (PrintWriter out = new PrintWriter("words.txt")) {
                        for (int i = 0; i < n; i++) {
                            out.println(in.next());
                        }
                    } catch (FileNotFoundException e) {
                        System.out.println("Cannot write");
                    }

                    try (Scanner file = new Scanner(new File("words.txt"))) {
                        int line = 1;
                        while (file.hasNextLine()) {
                            System.out.println(line + ": " + file.nextLine());
                            line++;
                        }
                    } catch (FileNotFoundException e) {
                        System.out.println("Cannot read");
                    }
                }
            }
          `,
          hint: "The writer must be closed before you read, so use two separate try-with-resources blocks, one after the other.",
          explain: "When the first try block ends, the PrintWriter is closed and the words are really in the file. Then the second block can read them." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 5
    {
      title: 'Making input safe',
      titleAr: 'إدخال آمن لا يوقف البرنامج',
      minutes: 30,
      body: [
        { type: 'h', en: 'Users make typing mistakes' },
        { type: 'p', en: "Real users press the wrong key. They type <code>twenty</code> instead of <code>20</code>, or <code>5.5</code> where you expect a whole number. With a plain <code>nextInt()</code>, that one mistake throws an InputMismatchException and the whole program dies. A good program explains the problem and asks again. In this lesson you learn three ways to read input safely.",
          ar: 'قد يكتب المستخدم خطأً. البرنامج الجيد يشرح المشكلة ويطلب الإدخال من جديد بدل أن يتوقف.' },
        { type: 'analogy', title: 'A patient receptionist', en: "At a clinic, if you write your phone number wrongly on a form, the receptionist does not send you home. She gives the form back and asks you to fix it, again and again, until it is correct. A safe input loop does the same thing." },
        { type: 'h', en: 'Way 1: look before you read, with hasNextInt()' },
        { type: 'p', en: "You met <code>hasNextInt()</code> when reading files in CS101 Unit 8. It looks at the next word of the input and answers <code>true</code> if the word can be read as an int. It does <b>not</b> remove the word. If the answer is false, read the bad word with <code>next()</code> to throw it away, and look again. In this example the user typed <code>abc</code>, then <code>12.5</code>, then <code>25</code>." },
        { type: 'code', run: true, stdin: 'abc 12.5 25', code: J`
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  while (!in.hasNextInt()) {
                      String bad = in.next();
                      System.out.println(bad + " is not a whole number. Try again.");
                  }
                  int age = in.nextInt();
                  System.out.println("Age: " + age);
              }
          }
        `, out: J`
          abc is not a whole number. Try again.
          12.5 is not a whole number. Try again.
          Age: 25
        ` },
        { type: 'lines', rows: [
          ['while (!in.hasNextInt())', 'Repeat while the next word is <b>not</b> a whole number.'],
          ['String bad = in.next();', 'Read the bad word. This removes it from the input.'],
          ['int age = in.nextInt();', 'We only get here when the next word is a whole number, so this line is safe.']
        ], ar: 'hasNextInt تفحص الكلمة التالية دون أن تقرأها. إذا كانت خاطئة نقرؤها بـ next لنتخلص منها.' },
        { type: 'check', q: 'The input is <code>7</code>. What does <code>in.hasNextInt()</code> do?', options: ['Returns true and removes 7 from the input', 'Returns true and leaves 7 in the input', 'Returns false', 'Throws InputMismatchException'], answer: 1, explain: 'hasNextInt() only looks. The 7 is still waiting, so the next nextInt() reads it.' },
        { type: 'h', en: 'Way 2: try nextInt(), catch InputMismatchException' },
        { type: 'p', en: "The second way is to call <code>nextInt()</code> inside try and catch <code>InputMismatchException</code> (import it from <code>java.util</code>). There is one trap: when <code>nextInt()</code> fails, the bad word <b>stays in the input</b>. If you do not remove it, the next <code>nextInt()</code> finds the same bad word and fails again, forever. So in the catch block, call <code>in.nextLine()</code> to throw away the rest of the bad line." },
        { type: 'analogy', title: 'A stuck coin', en: "A ticket machine rejects a fake coin, but the coin stays stuck in the slot. Every new try fails, because the same coin is still there. You must take the bad coin out before you try again. <code>in.nextLine()</code> takes the bad input out.",
          ar: 'مثل عملة عالقة في آلة التذاكر: يجب إخراجها قبل المحاولة من جديد.' },
        { type: 'code', run: true, stdin: 'two\n3', code: J`
          import java.util.InputMismatchException;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int tickets = 0;
                  boolean ok = false;
                  while (!ok) {
                      try {
                          tickets = in.nextInt();
                          ok = true;
                      } catch (InputMismatchException e) {
                          String bad = in.nextLine();
                          System.out.println("Not a number: " + bad);
                      }
                  }
                  System.out.println("Tickets: " + tickets);
              }
          }
        `, out: J`
          Not a number: two
          Tickets: 3
        ` },
        { type: 'lines', rows: [
          ['boolean ok = false;', 'A <b>flag</b>: a true/false variable. We keep asking until it becomes true.'],
          ['tickets = in.nextInt();', 'Throws InputMismatchException for "two". The next line is skipped.'],
          ['ok = true;', 'Runs only if nextInt() worked.'],
          ['String bad = in.nextLine();', 'Throws away the bad line, so the next try reads new input.']
        ] },
        { type: 'note', kind: 'warn', en: "If you forget <code>in.nextLine()</code> in the catch block, the loop never ends: it prints the message again and again, because the same bad word is still waiting.",
          ar: 'إذا نسيت nextLine في catch تدور الحلقة إلى الأبد.' },
        { type: 'check', q: 'Why do we call <code>in.nextLine()</code> in the catch block?', options: ['To read the next good number', 'To remove the bad input that nextInt() left behind', 'To close the Scanner', 'To print an empty line'], answer: 1, explain: 'nextInt() does not remove a word it cannot read. nextLine() removes it, so the loop can read new input.' },
        { type: 'h', en: 'Way 3: read whole lines, then Integer.parseInt' },
        { type: 'p', en: "The third way reads a whole line with <code>nextLine()</code> and then converts it with <code>Integer.parseInt</code>. If the line is not a number, you get a NumberFormatException. Nothing stays stuck in the input, because the bad line has already been read. This way is very good for menus, where the user types one answer per line." },
        { type: 'code', run: true, stdin: '5 riyals\n5', code: J`
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int amount = 0;
                  boolean done = false;
                  while (!done) {
                      String line = in.nextLine();
                      try {
                          amount = Integer.parseInt(line);
                          done = true;
                      } catch (NumberFormatException e) {
                          System.out.println("Digits only, please: " + line);
                      }
                  }
                  System.out.println("Amount: " + amount);
              }
          }
        `, out: J`
          Digits only, please: 5 riyals
          Amount: 5
        ` },
        { type: 'lines', rows: [
          ['String line = in.nextLine();', 'Read the whole line, spaces included.'],
          ['Integer.parseInt(line)', '"5 riyals" is not a number: NumberFormatException.'],
          ['done = true;', 'Only reached when parseInt worked.']
        ] },
        { type: 'table', head: ['Way', 'How', 'Exception', 'Watch out'], rows: [
          ['1', '<code>hasNextInt()</code>, then <code>nextInt()</code>', 'none', 'remove a bad word with <code>next()</code>'],
          ['2', '<code>nextInt()</code> inside try', '<code>InputMismatchException</code>', 'call <code>nextLine()</code> in the catch'],
          ['3', '<code>nextLine()</code> + <code>Integer.parseInt</code>', '<code>NumberFormatException</code>', 'one answer per line']
        ] },
        { type: 'p', en: "All three are correct. Choose one and use it the same way in the whole program.", ar: 'nextInt ترمي InputMismatchException، أما parseInt فترمي NumberFormatException.' },
        { type: 'check', q: 'Which exception does <code>Integer.parseInt("ten")</code> throw?', options: ['InputMismatchException', 'NumberFormatException', 'ArithmeticException', 'None'], answer: 1, explain: 'parseInt works on Strings and throws NumberFormatException. InputMismatchException comes from Scanner methods such as nextInt().' },
        { type: 'h', en: 'A menu that never crashes' },
        { type: 'p', en: "Now combine everything into a small café menu. The user types one choice per line. Letters and wrong numbers get a clear message, and the program continues. It also stops safely when there is no more input." },
        { type: 'steps', title: 'Worked example: a café menu', problem: 'Menu: <code>1</code> adds a coffee (12 SAR), <code>2</code> adds a tea (8 SAR), <code>3</code> shows the total, <code>0</code> exits. Any other input gets a message. Test it with the lines <code>1</code>, <code>x</code>, <code>2</code>, <code>7</code>, <code>3</code>, <code>0</code>.',
          steps: [
            { en: 'Read one line at a time while the user has not chosen 0 and there is still input.', code: J`
              boolean running = true;
              while (running && in.hasNextLine()) {
                  String line = in.nextLine();
                  // ...
              }
            ` },
            { en: 'Convert the line inside try. If it is not a number, print a message and <code>continue</code> (go back to the top of the loop).', code: J`
              int choice;
              try {
                  choice = Integer.parseInt(line);
              } catch (NumberFormatException e) {
                  System.out.println("Please type a number from the menu");
                  continue;
              }
            ` },
            { en: 'Handle the choices with if-else. The last <code>else</code> catches numbers that are not on the menu, such as 7.', code: J`
              if (choice == 1) {
                  total += 12;
                  System.out.println("Coffee added");
              } else if (choice == 2) {
                  total += 8;
                  System.out.println("Tea added");
              } else if (choice == 3) {
                  System.out.println("Total: " + total + " SAR");
              } else if (choice == 0) {
                  running = false;
                  System.out.println("Goodbye");
              } else {
                  System.out.println("No such option: " + choice);
              }
            ` }
          ],
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int total = 0;
                    boolean running = true;
                    while (running && in.hasNextLine()) {
                        String line = in.nextLine();
                        int choice;
                        try {
                            choice = Integer.parseInt(line);
                        } catch (NumberFormatException e) {
                            System.out.println("Please type a number from the menu");
                            continue;
                        }
                        if (choice == 1) {
                            total += 12;
                            System.out.println("Coffee added");
                        } else if (choice == 2) {
                            total += 8;
                            System.out.println("Tea added");
                        } else if (choice == 3) {
                            System.out.println("Total: " + total + " SAR");
                        } else if (choice == 0) {
                            running = false;
                            System.out.println("Goodbye");
                        } else {
                            System.out.println("No such option: " + choice);
                        }
                    }
                }
            }
          `, stdin: '1\nx\n2\n7\n3\n0', out: J`
            Coffee added
            Please type a number from the menu
            Tea added
            No such option: 7
            Total: 20 SAR
            Goodbye
          `, ar: 'قائمة لا تتوقف أبداً: الحروف والأرقام الخاطئة تحصل على رسالة ويستمر البرنامج.' }
      ],
      mistakes: [
        { title: 'Forgetting to remove the bad input', en: "After a failed <code>nextInt()</code>, the bad word is still there. Without <code>in.nextLine()</code> in the catch, the loop repeats forever.", ar: 'تخلّص{{g:|ي}} من الإدخال الخاطئ بـ nextLine.' },
        { title: 'Mixing nextInt() and nextLine()', en: "After <code>nextInt()</code>, the end of the line (the Enter key) is still waiting. A <code>nextLine()</code> right after it returns an empty text <code>\"\"</code>. Read whole lines everywhere, or call one extra <code>nextLine()</code> after nextInt()." },
        { title: 'Catching the wrong exception', en: "<code>nextInt()</code> throws InputMismatchException. <code>Integer.parseInt</code> throws NumberFormatException. Catch the one that your line really throws." },
        { title: 'Forgetting the import', en: "InputMismatchException is in <code>java.util</code>, not in java.lang. Write <code>import java.util.InputMismatchException;</code> or <code>import java.util.*;</code>." }
      ],
      remember: [
        "Never trust input: a user can type anything.",
        "<code>hasNextInt()</code> checks without reading; remove a bad word with <code>next()</code>.",
        "<code>nextInt()</code> throws InputMismatchException; remove the bad line with <code>nextLine()</code> in the catch, or the loop never ends.",
        "<code>nextLine()</code> + <code>Integer.parseInt</code> throws NumberFormatException, and nothing stays stuck.",
        "Use a loop to ask again until the input is valid."
      ],
      rememberAr: 'لا {{g:تثق|تثقي}} بالإدخال. استخدم{{g:|ي}} hasNextInt أو try مع nextInt (ولا {{g:تنسَ|تنسي}} nextLine في catch) أو nextLine مع parseInt، وكرر{{g:|ي}} حتى يصبح الإدخال صحيحاً.',
      practice: [
        { t: 'mcq', q: "The user types <code>abc</code>. Which exception does <code>in.nextInt()</code> throw?", options: ['NumberFormatException', 'InputMismatchException', 'ArithmeticException', 'NullPointerException'], answer: 1, explain: "Scanner's nextInt() throws InputMismatchException when the next word is not a whole number.", qAr: 'ماذا ترمي nextInt إذا كتب المستخدم حروفاً؟' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] inputs = {"4", "four", "-2", "7.0"};
                  int good = 0;
                  for (String s : inputs) {
                      try {
                          Integer.parseInt(s);
                          good++;
                      } catch (NumberFormatException e) {
                          System.out.println("bad: " + s);
                      }
                  }
                  System.out.println(good + " good");
              }
          }
        `, answer: J`
          bad: four
          bad: 7.0
          2 good
        `, explain: "<code>\"-2\"</code> is a valid int (a minus sign is allowed). <code>\"7.0\"</code> has a dot, so it is not an int." },
        { t: 'mcq', q: "Which method checks the next word of the input <b>without</b> reading it?", options: ['<code>nextInt()</code>', '<code>hasNextInt()</code>', '<code>nextLine()</code>', '<code>Integer.parseInt()</code>'], answer: 1, explain: "Methods that start with <code>has</code> only look and answer true or false." },
        { t: 'fill', q: "Complete the loop: skip every word that is not a whole number, then read the number.", code: J`
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  while (!in.___()) {
                      System.out.println("Skipped " + in.___());
                  }
                  int seats = in.nextInt();
                  System.out.println("Seats: " + seats);
              }
          }
        `, answers: ['hasNextInt', ['next', 'nextLine']], explain: "<code>hasNextInt()</code> looks at the next word. <code>next()</code> reads (removes) the bad word so that the loop can look at the following one." },
        { t: 'order', q: "Put the lines in order: keep reading until <code>nextInt()</code> works, and remove bad input in the catch.", lines: [
          'boolean ok = false;',
          'while (!ok) {',
          '    try {',
          '        n = in.nextInt();',
          '        ok = true;',
          '    } catch (InputMismatchException e) {',
          '        in.nextLine();',
          '    }',
          '}'
        ], explain: "<code>ok = true</code> comes right after nextInt(), so it only runs when reading worked. The catch removes the bad line." },
        { t: 'bug', q: "When the user types a letter, this code crashes instead of asking again. Tap the line with the bug.", code: J`
          Scanner in = new Scanner(System.in);
          int n = 0;
          boolean ok = false;
          while (!ok) {
              try {
                  n = in.nextInt();
                  ok = true;
              } catch (InputMismatchException e) {
                  in.nextInt();
                  System.out.println("Try again");
              }
          }
        `, bug: 9, fix: J`
          Scanner in = new Scanner(System.in);
          int n = 0;
          boolean ok = false;
          while (!ok) {
              try {
                  n = in.nextInt();
                  ok = true;
              } catch (InputMismatchException e) {
                  in.nextLine();
                  System.out.println("Try again");
              }
          }
        `, hint: 'What should the catch block do with the bad input?', explain: "Inside the catch, <code>in.nextInt()</code> tries to read the same bad word again. It throws a new InputMismatchException, and this one is outside any try, so the program crashes. <code>in.nextLine()</code> removes the bad line instead." },
        { t: 'bug', q: "The user types <code>two</code>. The program should print <code>Digits only</code>, but it crashes. Tap the line with the bug.", code: J`
          Scanner in = new Scanner(System.in);
          String line = in.nextLine();
          try {
              int choice = Integer.parseInt(line);
              System.out.println("Choice " + choice);
          } catch (InputMismatchException e) {
              System.out.println("Digits only");
          }
        `, bug: 6, fix: J`
          Scanner in = new Scanner(System.in);
          String line = in.nextLine();
          try {
              int choice = Integer.parseInt(line);
              System.out.println("Choice " + choice);
          } catch (NumberFormatException e) {
              System.out.println("Digits only");
          }
        `, hint: 'Which exception does parseInt throw?', explain: "<code>Integer.parseInt</code> throws NumberFormatException, not InputMismatchException. The catch does not match, so the program crashes." },
        { t: 'code', q: "Read words from the input. Skip every word that is not a whole number: for each one print <code>Skipped: </code> and the word. When a whole number comes, print <code>Number: </code> and the number, and stop. Use <code>hasNextInt()</code>. No prompts.", qAr: 'تجاوز{{g:|ي}} الكلمات التي ليست أعداداً صحيحة ثم اطبع{{g:|ي}} أول عدد صحيح.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    // skip bad words, then read and print the number
                }
            }
          `,
          tests: [{ stdin: 'hello 3.5 42', expected: 'Skipped: hello\nSkipped: 3.5\nNumber: 42' }, { stdin: '7', expected: 'Number: 7' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    while (!in.hasNextInt()) {
                        System.out.println("Skipped: " + in.next());
                    }
                    int n = in.nextInt();
                    System.out.println("Number: " + n);
                }
            }
          `,
          hint: "<code>while (!in.hasNextInt())</code> { print and remove the bad word with <code>in.next()</code> }",
          explain: "The loop removes bad words one by one. When it stops, the next word is surely an int." },
        { t: 'code', q: "A menu has the options 1, 2 and 3. Read the input <b>line by line</b> until a valid choice comes. For a line that is not a whole number, print <code>Not a number: </code> and the line. For a number outside 1 to 3, print <code>Out of range: </code> and the number. For a valid choice, print <code>You chose </code> and the number, and stop. No prompts.", qAr: 'اقرأ{{g:|ي}} سطراً سطراً حتى يأتي اختيار صحيح من 1 إلى 3.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    // read lines until a choice from 1 to 3 comes
                }
            }
          `,
          tests: [{ stdin: 'abc\n5\n2', expected: 'Not a number: abc\nOut of range: 5\nYou chose 2' }, { stdin: '3', expected: 'You chose 3' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    boolean done = false;
                    while (!done && in.hasNextLine()) {
                        String line = in.nextLine();
                        try {
                            int choice = Integer.parseInt(line);
                            if (choice >= 1 && choice <= 3) {
                                System.out.println("You chose " + choice);
                                done = true;
                            } else {
                                System.out.println("Out of range: " + choice);
                            }
                        } catch (NumberFormatException e) {
                            System.out.println("Not a number: " + line);
                        }
                    }
                }
            }
          `,
          hint: "Use <code>nextLine()</code> and <code>Integer.parseInt</code> in a loop. Check the range only when parseInt worked.",
          explain: "Two different problems, two different messages: parseInt fails for text (NumberFormatException), and the if checks the range of a real number." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 6
    {
      title: 'Throwing your own exceptions',
      titleAr: 'رمي الاستثناءات بنفسك: throw',
      minutes: 30,
      body: [
        { type: 'h', en: 'Protecting an object' },
        { type: 'p', en: "In Unit 2 you made fields <code>private</code> and wrote setters to protect them. But what should <code>setMark(150)</code> do? Printing a message is weak: the method still ends normally, and the code that called it believes that everything is fine. A better answer is to <b>refuse loudly</b>: the method throws an exception, and the caller must deal with it.",
          ar: 'بدلاً من طباعة رسالة، ترمي الدالة استثناءً عندما تصلها قيمة غير صحيحة.' },
        { type: 'analogy', title: "A referee's whistle", en: "When a player breaks a rule, the referee blows the whistle and the game stops. The referee does not fix the problem himself: he signals it, and the team must respond. <code>throw</code> is the whistle. The code that called the method is the team.",
          ar: 'throw مثل صافرة الحكم: توقف اللعب وتعلن المشكلة.' },
        { type: 'h', en: 'The throw statement' },
        { type: 'code', code: J`
          throw new IllegalArgumentException("mark must be 0-100");
        ` },
        { type: 'lines', rows: [
          ['throw', 'A keyword that throws an exception <b>now</b>. The method stops at this line.'],
          ['new IllegalArgumentException(...)', 'Creates the exception object with <code>new</code>, like any other object.'],
          ['"mark must be 0-100"', 'The message. Later, the caller can read it with <code>getMessage()</code>.']
        ] },
        { type: 'p', en: "<code>IllegalArgumentException</code> means \"you gave me an argument (a parameter value) that is not allowed\". It is in java.lang, so you need no import. Here is a Student class whose setter refuses bad marks." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Student s = new Student("Lama");
                  s.setMark(88);
                  System.out.println(s.getName() + ": " + s.getMark());
                  try {
                      s.setMark(150);
                  } catch (IllegalArgumentException e) {
                      System.out.println("Refused: " + e.getMessage());
                  }
                  System.out.println(s.getName() + ": " + s.getMark());
              }
          }

          class Student {
              private String name;
              private int mark;

              public Student(String name) {
                  this.name = name;
              }

              public void setMark(int mark) {
                  if (mark < 0 || mark > 100) {
                      throw new IllegalArgumentException("mark must be 0-100, got " + mark);
                  }
                  this.mark = mark;
              }

              public String getName() { return name; }
              public int getMark() { return mark; }
          }
        `, out: J`
          Lama: 88
          Refused: mark must be 0-100, got 150
          Lama: 88
        ` },
        { type: 'lines', rows: [
          ['if (mark < 0 || mark > 100)', 'Check the value <b>first</b>.'],
          ['throw new IllegalArgumentException(...)', 'For 150, the method stops here. The next line does not run.'],
          ['this.mark = mark;', 'Only reached when the mark is valid. So the field keeps 88.'],
          ['catch (IllegalArgumentException e)', '<code>main</code> catches the exception and prints its message.']
        ], ar: 'عند تنفيذ throw تتوقف الدالة فوراً، فلا تتغير قيمة الحقل.' },
        { type: 'check', q: 'After <code>s.setMark(150)</code> fails, what does <code>s.getMark()</code> return?', options: ['150', '0', '88', '100'], answer: 2, explain: 'The throw happens before <code>this.mark = mark;</code>, so the old value 88 stays.' },
        { type: 'h', en: 'In the constructor: no bad objects at all' },
        { type: 'p', en: "A setter protects an object that already exists. A constructor can stop a bad object from <b>being made</b>. If the constructor throws, the <code>new</code> expression never gives back an object, so the variable gets nothing." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Product p = null;
                  try {
                      p = new Product("Juice", -3);
                  } catch (IllegalArgumentException e) {
                      System.out.println("Error: " + e.getMessage());
                  }
                  System.out.println(p);
              }
          }

          class Product {
              private String name;
              private double price;

              public Product(String name, double price) {
                  if (price <= 0) {
                      throw new IllegalArgumentException("price must be positive");
                  }
                  this.name = name;
                  this.price = price;
              }
          }
        `, out: J`
          Error: price must be positive
          null
        ` },
        { type: 'memory', title: 'A constructor that refuses', en: "Step through line 5 of the program above. Watch the variable <code>p</code>.", frames: [
          { label: 'Before the try: <code>p</code> is null.', vars: [{ name: 'p', type: 'Product', value: 'null' }], objects: [] },
          { label: '<code>new Product("Juice", -3)</code> starts: Java makes an empty object and runs the constructor.', vars: [{ name: 'p', type: 'Product', value: 'null' }], objects: [
            { id: 'A', cls: 'Product', fields: [{ name: 'name', value: 'null' }, { name: 'price', value: '0.0' }] }
          ] },
          { label: '<code>price &lt;= 0</code>, so the constructor throws. The assignment <code>p = ...</code> never happens.', vars: [{ name: 'p', type: 'Product', value: 'null' }], objects: [
            { id: 'A', cls: 'Product', fields: [{ name: 'name', value: 'null' }, { name: 'price', value: '0.0' }] },
            { id: 'E', cls: 'IllegalArgumentException', fields: [{ name: 'message', value: '"price must be positive"' }] }
          ] },
          { label: 'The catch runs: <code>e</code> refers to the exception. <code>p</code> is still null, and the half-made Product is garbage.', vars: [{ name: 'p', type: 'Product', value: 'null' }, { name: 'e', type: 'IllegalArgumentException', ref: 'E' }], objects: [
            { id: 'A', cls: 'Product', fields: [{ name: 'name', value: 'null' }, { name: 'price', value: '0.0' }], gone: true },
            { id: 'E', cls: 'IllegalArgumentException', fields: [{ name: 'message', value: '"price must be positive"' }] }
          ] }
        ], ar: 'إذا رمى المُنشئ استثناءً فلا يحصل المتغير على أي كائن ويبقى null.' },
        { type: 'check', q: 'Why does the program print <code>null</code> at the end?', options: ['Because Product has no toString()', 'Because the constructor threw, so nothing was assigned to p', 'Because the price is negative', 'Because catch sets p to null'], answer: 1, explain: 'The exception stopped the constructor before <code>new</code> could give back an object. <code>p</code> keeps its old value, null.' },
        { type: 'h', en: 'Which exception should you throw?' },
        { type: 'table', head: ['Exception', 'Use it when...', 'Example'], rows: [
          ['<code>IllegalArgumentException</code>', 'a parameter has a value that is not allowed', 'a mark of 150, a price of -3'],
          ['<code>IllegalStateException</code>', 'the object is not ready for this action right now', 'booking a seat on a full bus']
        ] },
        { type: 'p', en: "Both are children of RuntimeException. Always write a clear message: it is the first thing a programmer reads when something goes wrong." },
        { type: 'h', en: 'Propagation: the exception travels up' },
        { type: 'p', en: "What happens when a method throws and does not catch the exception itself? The method stops at once, and the exception goes to the method that <b>called</b> it. If that method does not catch it either, it stops too, and the exception goes one more step up. This continues until a matching catch block is found. If even <code>main</code> does not catch it, the program crashes. This travelling is called <b>propagation</b>.",
          ar: 'إذا لم تلتقط الدالة الاستثناء، تتوقف وينتقل الاستثناء إلى الدالة التي استدعتها، وهكذا حتى يجد catch مناسبة.' },
        { type: 'analogy', title: 'A complaint going up', en: "A customer complains to a cashier. The cashier cannot solve it, so he passes it to the supervisor. The supervisor passes it to the manager. The first person who can solve it handles it. If nobody can, the customer leaves angry: the program crashes." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println("main starts");
                  try {
                      a(5);
                  } catch (IllegalArgumentException e) {
                      System.out.println("main caught: " + e.getMessage());
                  }
                  System.out.println("main ends");
              }

              static void a(int n) {
                  System.out.println("a starts");
                  b(n - 10);
                  System.out.println("a ends");
              }

              static void b(int x) {
                  System.out.println("b starts");
                  if (x < 0) {
                      throw new IllegalArgumentException("x is negative: " + x);
                  }
                  System.out.println("b ends");
              }
          }
        `, out: J`
          main starts
          a starts
          b starts
          main caught: x is negative: -5
          main ends
        ` },
        { type: 'lines', rows: [
          ['a(5);', '<code>main</code> calls a(5) inside its try.'],
          ['b(n - 10);', '<code>a</code> calls b(-5).'],
          ['throw new IllegalArgumentException(...)', '<code>b</code> throws. b has no catch, so b stops: "b ends" is never printed.'],
          ['System.out.println("a ends");', 'Skipped: a has no catch either, so a stops too.'],
          ['catch (IllegalArgumentException e)', 'main has a matching catch. The exception stops here.'],
          ['System.out.println("main ends");', 'main continues normally after its try-catch.']
        ] },
        { type: 'memory', title: 'The call stack during propagation', en: "The left side is the <b>call stack</b>: one group of variables for each method that is running, the newest on top. Watch the methods disappear as the exception travels up.", frames: [
          { label: '<code>main</code> calls <code>a(5)</code>', vars: [{ name: 'a(): n', type: 'int', value: '5' }, { name: 'main()', value: 'waiting at a(5)' }], objects: [] },
          { label: '<code>a</code> calls <code>b(-5)</code>', vars: [{ name: 'b(): x', type: 'int', value: '-5' }, { name: 'a(): n', type: 'int', value: '5' }, { name: 'main()', value: 'waiting at a(5)' }], objects: [] },
          { label: '<code>b</code> throws: Java creates the exception object.', vars: [{ name: 'b(): x', type: 'int', value: '-5' }, { name: 'a(): n', type: 'int', value: '5' }, { name: 'main()', value: 'waiting at a(5)' }], objects: [
            { id: 'E', cls: 'IllegalArgumentException', fields: [{ name: 'message', value: '"x is negative: -5"' }] }
          ] },
          { label: '<code>b</code> has no catch: b is removed. <code>a</code> has no catch: a is removed too.', vars: [{ name: 'main()', value: 'has a matching catch' }], objects: [
            { id: 'E', cls: 'IllegalArgumentException', fields: [{ name: 'message', value: '"x is negative: -5"' }] }
          ] },
          { label: '<code>main</code> catches it: <code>e</code> refers to the exception object.', vars: [{ name: 'main(): e', type: 'IllegalArgumentException', ref: 'E' }], objects: [
            { id: 'E', cls: 'IllegalArgumentException', fields: [{ name: 'message', value: '"x is negative: -5"' }] }
          ] }
        ], ar: 'كل دالة لا تلتقط الاستثناء تُزال من المكدس، حتى نصل إلى main التي تلتقطه.' },
        { type: 'p', en: "Without the try-catch in <code>main</code>, the program would crash, and its stack trace would list <code>b</code>, then <code>a</code>, then <code>main</code>: the same journey, from the newest call to the oldest. This is the call chain you learned to read in Lesson 1." },
        { type: 'check', q: 'In the program above, why is "a ends" never printed?', options: ['Because a has a bug', 'Because the exception passes through a, which has no catch, so a stops', 'Because main catches it before a runs', 'Because b returns normally'], answer: 1, explain: 'A method without a matching catch stops at once when an exception passes through it. The rest of a is skipped.' },
        { type: 'note', kind: 'tip', en: "Throw where the problem is <b>found</b> (inside the class that knows the rules). Catch where you can <b>do something useful</b> about it (often main, which can print a message or ask again)." },
        { type: 'steps', title: 'Worked example: booking clinic appointments', problem: 'A clinic opens from 8:00 to 16:00. An appointment needs a patient name that is not empty and an hour in that range. Try to book three appointments: Faisal at 9, an empty name at 10, and Reem at 18. Print what happened to each.',
          steps: [
            { en: 'Write the class <code>Appointment</code>. The constructor checks both rules <b>before</b> setting the fields.', code: J`
              public Appointment(String patient, int hour) {
                  if (patient.length() == 0) {
                      throw new IllegalArgumentException("patient name is empty");
                  }
                  if (hour < 8 || hour > 16) {
                      throw new IllegalArgumentException("clinic is closed at " + hour);
                  }
                  this.patient = patient;
                  this.hour = hour;
              }
            ` },
            { en: 'Add a <code>toString()</code> (Unit 2) so that a booked appointment prints nicely.', code: J`
              @Override
              public String toString() {
                  return patient + " at " + hour + ":00";
              }
            ` },
            { en: 'In <code>main</code>, keep the requests in two arrays. Create each appointment inside try, and catch IllegalArgumentException.', code: J`
              try {
                  Appointment a = new Appointment(names[i], hours[i]);
                  System.out.println("Booked: " + a);
              } catch (IllegalArgumentException e) {
                  System.out.println("Not booked: " + e.getMessage());
              }
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    String[] names = {"Faisal", "", "Reem"};
                    int[] hours = {9, 10, 18};
                    for (int i = 0; i < names.length; i++) {
                        try {
                            Appointment a = new Appointment(names[i], hours[i]);
                            System.out.println("Booked: " + a);
                        } catch (IllegalArgumentException e) {
                            System.out.println("Not booked: " + e.getMessage());
                        }
                    }
                }
            }

            class Appointment {
                private String patient;
                private int hour;

                public Appointment(String patient, int hour) {
                    if (patient.length() == 0) {
                        throw new IllegalArgumentException("patient name is empty");
                    }
                    if (hour < 8 || hour > 16) {
                        throw new IllegalArgumentException("clinic is closed at " + hour);
                    }
                    this.patient = patient;
                    this.hour = hour;
                }

                @Override
                public String toString() {
                    return patient + " at " + hour + ":00";
                }
            }
          `, out: J`
            Booked: Faisal at 9:00
            Not booked: patient name is empty
            Not booked: clinic is closed at 18
          `, ar: 'المُنشئ يرفض البيانات الخاطئة، و main تلتقط الاستثناء وتطبع السبب.' }
      ],
      mistakes: [
        { title: 'Forgetting new', en: "An exception is an object, so you must create it with <code>new</code>. Without it, the compiler looks for a method and says <code>cannot find symbol</code>.", code: J`
          throw IllegalArgumentException("bad price");       // compile error
          throw new IllegalArgumentException("bad price");   // correct
        `, ar: 'لا {{g:تنسَ|تنسي}} new عند رمي الاستثناء.' },
        { title: 'Mixing up throw and throws', en: "<code>throw</code> (no s) is a statement that throws an exception now. <code>throws</code> (with s) belongs in a method header. You will meet it in Lesson 7." },
        { title: 'Changing the field before checking', en: "If you assign first, the bad value is already inside the object when the exception is thrown.", code: J`
          public void setPrice(double price) {
              this.price = price;     // too early!
              if (price <= 0) {
                  throw new IllegalArgumentException("bad price");
              }
          }
        ` },
        { title: 'Writing code after throw in the same block', en: "The line after <code>throw</code> can never run, so the compiler reports <code>unreachable statement</code>." }
      ],
      remember: [
        "<code>throw new SomeException(\"message\");</code> throws an exception now; the method stops at that line.",
        "Check values in constructors and setters, and throw <code>IllegalArgumentException</code> for bad ones.",
        "Check first, then assign: a refused value must not change the object.",
        "If a method does not catch an exception, it stops and the exception goes to its caller (propagation).",
        "The first matching catch on the way up handles it; if there is none, the program crashes."
      ],
      rememberAr: 'throw ترمي استثناءً فوراً وتوقف الدالة. افحص{{g:|ي}} القيم في المُنشئ والدوال المُعدِّلة قبل الإسناد. الاستثناء غير الملتقط ينتقل إلى الدالة المستدعية.',
      practice: [
        { t: 'mcq', q: "Which line throws an exception correctly?", options: ['<code>throw IllegalArgumentException("bad");</code>', '<code>throw new IllegalArgumentException("bad");</code>', '<code>throws new IllegalArgumentException("bad");</code>', '<code>new throw IllegalArgumentException("bad");</code>'], answer: 1, explain: "The statement is <code>throw</code>, followed by a new exception object.", qAr: 'أي سطر يرمي الاستثناء بشكل صحيح؟' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Ticket t = new Ticket();
                  t.setSeats(2);
                  try {
                      t.setSeats(0);
                      System.out.println("changed");
                  } catch (IllegalArgumentException e) {
                      System.out.println(e.getMessage());
                  }
                  System.out.println(t.getSeats());
              }
          }

          class Ticket {
              private int seats = 1;

              public void setSeats(int seats) {
                  if (seats < 1) {
                      throw new IllegalArgumentException("at least 1 seat");
                  }
                  this.seats = seats;
              }

              public int getSeats() { return seats; }
          }
        `, answer: J`
          at least 1 seat
          2
        `, explain: "<code>setSeats(2)</code> works. <code>setSeats(0)</code> throws before the field changes, so \"changed\" is skipped and the seats stay 2." },
        { t: 'output', q: "Follow the exception. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      System.out.println("1");
                      first();
                      System.out.println("2");
                  } catch (IllegalStateException e) {
                      System.out.println("3 " + e.getMessage());
                  }
                  System.out.println("4");
              }

              static void first() {
                  System.out.println("5");
                  second();
                  System.out.println("6");
              }

              static void second() {
                  throw new IllegalStateException("bus is full");
              }
          }
        `, answer: J`
          1
          5
          3 bus is full
          4
        `, explain: "second() throws. first() has no catch, so 6 is skipped. Back in main, 2 is skipped too, the catch prints 3, and then 4.", explainAr: 'الاستثناء ينتقل من second إلى first ثم إلى main.' },
        { t: 'fill', q: "Complete the method so that a price of zero or less is refused with an exception.", code: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      setPrice(-5);
                  } catch (IllegalArgumentException e) {
                      System.out.println("Refused: " + e.getMessage());
                  }
              }

              static void setPrice(double price) {
                  if (price ___ 0) {
                      ___ new IllegalArgumentException("price must be positive");
                  }
                  System.out.println("Price set to " + price);
              }
          }
        `, answers: ['<=', 'throw'], explain: "Positive means greater than 0, so 0 itself must be refused too: <code>price &lt;= 0</code>. The keyword that throws is <code>throw</code>." },
        { t: 'order', q: "Put the lines of this setter in order. A negative age must be refused, and a good age is stored.", lines: [
          'public void setAge(int age) {',
          '    if (age < 0) {',
          '        throw new IllegalArgumentException("age cannot be negative");',
          '    }',
          '    this.age = age;',
          '}'
        ], explain: "Check first, then assign. The assignment is after the if, so it only runs for a good age." },
        { t: 'bug', q: "When <code>setBalance(-20)</code> is called, the exception is thrown, but the card still ends up with a balance of -20. Tap the line with the bug.", code: J`
          class BusCard {
              private int balance;

              public void setBalance(int balance) {
                  this.balance = balance;
                  if (balance < 0) {
                      throw new IllegalArgumentException("negative balance");
                  }
              }
          }
        `, bug: 5, fix: J`
          class BusCard {
              private int balance;

              public void setBalance(int balance) {
                  if (balance < 0) {
                      throw new IllegalArgumentException("negative balance");
                  }
                  this.balance = balance;
              }
          }
        `, hint: 'When does the field change: before or after the check?', explain: "The field is changed on line 5, before the check. When the exception comes, the bad value is already stored. Move the assignment after the if." },
        { t: 'bug', q: "This program does not compile. Tap the line with the bug.", code: J`
          public class Main {
              public static void main(String[] args) {
                  int age = -4;
                  if (age < 0) {
                      throw IllegalArgumentException("age must not be negative");
                  }
                  System.out.println("Age: " + age);
              }
          }
        `, bug: 5, fix: J`
          public class Main {
              public static void main(String[] args) {
                  int age = -4;
                  if (age < 0) {
                      throw new IllegalArgumentException("age must not be negative");
                  }
                  System.out.println("Age: " + age);
              }
          }
        `, hint: 'How do you create an object?', explain: "Without <code>new</code>, Java thinks <code>IllegalArgumentException(...)</code> is a method call and reports <code>cannot find symbol</code>. An exception is an object: create it with new." },
        { t: 'code', q: "Complete the class <code>Product</code>: its constructor must throw an <code>IllegalArgumentException</code> with the message <code>price must be positive</code> when the price is 0 or less. In <code>main</code>, read <code>n</code>, then <code>n</code> lines with a name and a whole-number price. For each one, try to create a Product: print <code>OK </code> and the name, or <code>Error: </code> and the message. No prompts.", qAr: 'المُنشئ يرفض السعر غير الموجب، و main تطبع OK أو رسالة الخطأ.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int n = in.nextInt();
                    for (int i = 0; i < n; i++) {
                        String name = in.next();
                        int price = in.nextInt();
                        // try to create the Product, print OK or Error
                    }
                }
            }

            class Product {
                private String name;
                private int price;

                public Product(String name, int price) {
                    // refuse a price of 0 or less
                    this.name = name;
                    this.price = price;
                }

                public String getName() { return name; }
            }
          `,
          tests: [{ stdin: '3\nJuice 5\nCake 0\nWater -2', expected: 'OK Juice\nError: price must be positive\nError: price must be positive' }, { stdin: '2\nTea 3\nCoffee 12', expected: 'OK Tea\nOK Coffee' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int n = in.nextInt();
                    for (int i = 0; i < n; i++) {
                        String name = in.next();
                        int price = in.nextInt();
                        try {
                            Product p = new Product(name, price);
                            System.out.println("OK " + p.getName());
                        } catch (IllegalArgumentException e) {
                            System.out.println("Error: " + e.getMessage());
                        }
                    }
                }
            }

            class Product {
                private String name;
                private int price;

                public Product(String name, int price) {
                    if (price <= 0) {
                        throw new IllegalArgumentException("price must be positive");
                    }
                    this.name = name;
                    this.price = price;
                }

                public String getName() { return name; }
            }
          `,
          hint: "In the constructor: <code>if (price &lt;= 0) throw new IllegalArgumentException(\"price must be positive\");</code>. In main: try to create the Product, catch the exception.",
          explain: "The rule lives in the class, so no bad Product can ever exist. main decides what to tell the user." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 7
    {
      title: 'Checked and unchecked exceptions',
      titleAr: 'الاستثناءات المفحوصة وغير المفحوصة',
      minutes: 30,
      body: [
        { type: 'h', en: 'Two kinds of exceptions' },
        { type: 'p', en: "In CS101 Unit 8, Java forced you to write <code>throws Exception</code> on <code>main</code> before you could use a PrintWriter. But it never asked for anything before a division or <code>Integer.parseInt</code>, which can also throw. Why the difference? Java puts exceptions into two groups. <b>Checked</b> exceptions are checked by the compiler: you must deal with them in your code, or it does not compile. <b>Unchecked</b> exceptions are not checked: the compiler lets you decide.",
          ar: 'الاستثناءات المفحوصة يجبرك المترجم على معالجتها، وغير المفحوصة لا يجبرك عليها.' },
        { type: 'analogy', title: 'Required and optional insurance', en: "To drive a car, the law requires insurance: no insurance, no driving. That is a checked exception: the compiler will not let your code \"drive\" without a plan. Nobody forces you to have a plan for dropping your phone; you simply try to be careful. That is an unchecked exception.",
          ar: 'مثل التأمين الإلزامي للسيارة: لا قيادة بدونه، أما الحذر من سقوط الهاتف فاختياري.' },
        { type: 'h', en: 'Which group is which?' },
        { type: 'p', en: "It all depends on the family tree from Lesson 3. <code>RuntimeException</code> and its children are unchecked. <code>Error</code> is unchecked too. Every other Exception is checked." },
        { type: 'table', head: ['', 'Checked', 'Unchecked'], rows: [
          ['Family', 'Exception and its children, <b>except</b> RuntimeException', 'RuntimeException and its children (and Error)'],
          ['Compiler', 'catch or declare is <b>required</b>', 'nothing is required'],
          ['Usual cause', 'something outside your program: a missing file, a full disk, the network', 'a bug in your program: a bad index, null, division by zero, a bad argument'],
          ['Examples', '<code>IOException</code>, <code>FileNotFoundException</code>', '<code>ArithmeticException</code>, <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>, <code>NumberFormatException</code>, <code>IllegalArgumentException</code>, <code>InputMismatchException</code>']
        ] },
        { type: 'check', q: 'Which exception is <b>checked</b>?', options: ['ArithmeticException', 'FileNotFoundException', 'NullPointerException', 'NumberFormatException'], answer: 1, explain: 'FileNotFoundException is a child of IOException, which is not a RuntimeException. The other three are RuntimeExceptions.' },
        { type: 'h', en: 'The catch-or-declare rule' },
        { type: 'p', en: "If a method contains code that may throw a checked exception, the method has two choices: <b>catch</b> it with try-catch, or <b>declare</b> it with <code>throws</code> in its header. If it does neither, the compiler stops." },
        { type: 'code', code: J`
          static void save(String text) {
              PrintWriter out = new PrintWriter("notes.txt");   // compile error
              out.println(text);
              out.close();
          }
        ` },
        { type: 'p', en: "The compiler says: <code>error: unreported exception FileNotFoundException; must be caught or declared to be thrown</code>. \"Unreported\" means that you did not say what should happen. <b>Choice 1</b> is to catch it inside the method:" },
        { type: 'code', run: true, code: J`
          import java.io.*;

          public class Main {
              public static void main(String[] args) {
                  save("Meeting at 10");
              }

              static void save(String text) {
                  try (PrintWriter out = new PrintWriter("notes.txt")) {
                      out.println(text);
                      System.out.println("Saved");
                  } catch (FileNotFoundException e) {
                      System.out.println("Could not save");
                  }
              }
          }
        `, out: J`
          Saved
        ` },
        { type: 'p', en: "<b>Choice 2</b> is to declare it with <code>throws</code> and let the caller decide what to do:" },
        { type: 'code', run: true, code: J`
          import java.io.*;

          public class Main {
              public static void main(String[] args) {
                  try {
                      save("Meeting at 10");
                      System.out.println("Saved");
                  } catch (FileNotFoundException e) {
                      System.out.println("Could not save");
                  }
              }

              static void save(String text) throws FileNotFoundException {
                  PrintWriter out = new PrintWriter("notes.txt");
                  out.println(text);
                  out.close();
              }
          }
        `, out: J`
          Saved
        ` },
        { type: 'lines', rows: [
          ['static void save(String text) throws FileNotFoundException', 'The header <b>declares</b>: "this method may throw FileNotFoundException". save does not catch it.'],
          ['save("Meeting at 10");', 'Now the <b>caller</b> must deal with it. main calls save inside try...'],
          ['catch (FileNotFoundException e)', '...and catches it. The rule moved one step up.']
        ], ar: 'إما أن تلتقط الدالة الاستثناء المفحوص، أو تعلنه بـ throws فتنتقل المسؤولية إلى من يستدعيها.' },
        { type: 'analogy', title: 'A parcel marked FRAGILE', en: "The <code>throws</code> clause is like a label on a box: \"FRAGILE, handle with care\". Whoever receives the box is warned and must decide how to handle it. A method with <code>throws FileNotFoundException</code> warns every method that calls it." },
        { type: 'h', en: 'throw and throws: one letter, a big difference' },
        { type: 'table', head: ['', '<code>throw</code>', '<code>throws</code>'], rows: [
          ['Where', 'inside a method body', 'in a method header'],
          ['Followed by', 'one exception <b>object</b>: <code>throw new ...</code>', 'one or more exception <b>class names</b>'],
          ['Meaning', 'throw this exception now', 'this method may throw these exceptions'],
          ['Example', '<code>throw new IOException("bad file");</code>', '<code>void load() throws IOException</code>']
        ] },
        { type: 'check', q: 'Which method header declares a checked exception correctly?', options: ['<code>void load() throw IOException</code>', '<code>void load() throws IOException</code>', '<code>void load() throws new IOException()</code>', '<code>void load(throws IOException)</code>'], answer: 1, explain: 'In a header you write <code>throws</code> and the class name, after the parameter list.' },
        { type: 'h', en: 'Unchecked: no rule, but still important' },
        { type: 'p', en: "For RuntimeException and its children, the compiler forces nothing. You may catch them, as in Lessons 2 to 5, but often the better fix is to remove the bug: check the index, check for null. You may also write an unchecked exception in a throws clause, as a note for other programmers, but it is optional." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println(average(270, 3));
              }

              static int average(int sum, int count) {
                  if (count <= 0) {
                      throw new IllegalArgumentException("count must be positive");
                  }
                  return sum / count;
              }
          }
        `, out: J`
          90
        ` },
        { type: 'lines', rows: [
          ['throw new IllegalArgumentException(...)', 'An unchecked exception: the header needs no throws.'],
          ['System.out.println(average(270, 3));', 'No try-catch in main, and it still compiles.']
        ] },
        { type: 'h', en: 'What "main throws Exception" really means' },
        { type: 'p', en: "Now you understand the <code>throws Exception</code> on <code>main</code> from CS101. It declares: \"main may throw any exception\". Nobody calls main except Java itself, so nobody catches it. If the file is missing, the program crashes with a stack trace. For example, this program tries to read a file that does not exist:" },
        { type: 'code', code: J`
          import java.io.*;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  Scanner in = new Scanner(new File("prices.txt"));
                  System.out.println(in.nextLine());
              }
          }
        ` },
        { type: 'lines', title: 'What Java prints', rows: [
          ['Exception in thread "main" java.io.FileNotFoundException: prices.txt (No such file or directory)', 'A checked exception, declared but never caught. (On Windows, the text in brackets is different.)'],
          ['    at java.base/java.io.FileInputStream.open0(Native Method)', 'Inside Java (three more java.base lines follow): skip them.'],
          ['    at Main.main(Main.java:6)', 'Your line: opening the Scanner.']
        ] },
        { type: 'p', en: "That is fine for a quick test. A real program should catch the exception and show a friendly message.", ar: 'throws Exception على main تعني أن الاستثناء لن يلتقطه أحد، فيتوقف البرنامج.' },
        { type: 'h', en: 'When should you use which?' },
        { type: 'list', items: [
          "Use a <b>checked</b> exception when the problem is outside the programmer's control and the caller can reasonably recover: a missing file, an account without enough money. The compiler then reminds every caller to plan for it.",
          "Use an <b>unchecked</b> exception for programming mistakes and bad arguments: a negative price, a null name. The caller should fix the code, not catch the problem every time."
        ], ar: 'المفحوص لمشكلات خارج سيطرة المبرمج، وغير المفحوص لأخطاء البرمجة والقيم الخاطئة.' },
        { type: 'note', kind: 'exam', en: "A catch for a checked exception that the try can never throw is a compile error: <code>exception FileNotFoundException is never thrown in body of corresponding try statement</code>. This does not happen with unchecked exceptions." },
        { type: 'steps', title: 'Worked example: totals from price files', problem: 'Write a method <code>readTotal(fileName)</code> that adds up all the whole numbers in a file. The method should not decide what to print when the file is missing: the caller decides. Test it with an existing file and a missing one.',
          steps: [
            { en: 'The method cannot know what the caller wants when the file is missing (a message? another file?). So it does not catch FileNotFoundException: it <b>declares</b> it.', code: J`
              static int readTotal(String fileName) throws FileNotFoundException {
                  int total = 0;
                  try (Scanner in = new Scanner(new File(fileName))) {
                      while (in.hasNextInt()) {
                          total += in.nextInt();
                      }
                  }
                  return total;
              }
            ` },
            { en: 'In <code>main</code>, first write a test file with three prices.', code: J`
              try (PrintWriter out = new PrintWriter("prices.txt")) {
                  out.println("12 30 15");
              } catch (FileNotFoundException e) {
                  System.out.println("Cannot write");
              }
            ` },
            { en: 'Call <code>readTotal</code> for two file names. The caller must catch, because the method declares a checked exception.', code: J`
              String[] files = {"prices.txt", "nothing.txt"};
              for (String f : files) {
                  try {
                      System.out.println("Total of " + f + ": " + readTotal(f));
                  } catch (FileNotFoundException e) {
                      System.out.println("Missing file: " + f);
                  }
              }
            ` }
          ],
          code: J`
            import java.io.*;
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    try (PrintWriter out = new PrintWriter("prices.txt")) {
                        out.println("12 30 15");
                    } catch (FileNotFoundException e) {
                        System.out.println("Cannot write");
                    }

                    String[] files = {"prices.txt", "nothing.txt"};
                    for (String f : files) {
                        try {
                            System.out.println("Total of " + f + ": " + readTotal(f));
                        } catch (FileNotFoundException e) {
                            System.out.println("Missing file: " + f);
                        }
                    }
                }

                static int readTotal(String fileName) throws FileNotFoundException {
                    int total = 0;
                    try (Scanner in = new Scanner(new File(fileName))) {
                        while (in.hasNextInt()) {
                            total += in.nextInt();
                        }
                    }
                    return total;
                }
            }
          `, out: J`
            Total of prices.txt: 57
            Missing file: nothing.txt
          `, ar: 'الدالة تعلن الاستثناء بـ throws، و main تقرر ماذا تطبع.' }
      ],
      mistakes: [
        { title: 'Forgetting to catch or declare a checked exception', en: "The compiler says <code>unreported exception ...; must be caught or declared to be thrown</code>. Add a try-catch, or add <code>throws</code> to the header.", ar: 'المفحوص: {{g:التقطه|التقطيه}} أو {{g:أعلنه|أعلنيه}}.' },
        { title: 'Writing throw in the header or throws in the body', en: "<code>void load() throw IOException</code> and <code>throws new IOException()</code> are both compile errors. Header: throws. Body: throw." },
        { title: 'Thinking that RuntimeExceptions must be declared', en: "Unchecked exceptions may appear in a throws clause, but they do not have to. The compiler does not check them." },
        { title: 'Catching a checked exception that cannot happen', en: "If nothing in the try can throw FileNotFoundException, <code>catch (FileNotFoundException e)</code> is a compile error: <code>is never thrown in body of corresponding try statement</code>." }
      ],
      remember: [
        "<b>Checked</b> = Exception and its children, except RuntimeException; the compiler requires catch or declare.",
        "<b>Unchecked</b> = RuntimeException and its children (and Error); nothing is required.",
        "Catch-or-declare: handle a checked exception with try-catch, or add <code>throws</code> to the header and let the caller handle it.",
        "<code>throw</code> throws an object now; <code>throws</code> in a header warns the callers.",
        "Checked for problems outside your control; unchecked for programming mistakes and bad arguments."
      ],
      rememberAr: 'المفحوصة (مثل IOException) يجب التقاطها أو إعلانها بـ throws. غير المفحوصة (RuntimeException وأبناؤها) لا يفرض المترجم شيئاً عليها. throw ترمي، و throws تُعلن.',
      practice: [
        { t: 'mcq', q: "What does the compiler require for an <b>unchecked</b> exception?", options: ['You must catch it', 'You must declare it with throws', 'Nothing: catching or declaring it is your choice', 'You must extend it'], answer: 2, explain: "The compiler does not check RuntimeException and its children.", qAr: 'ماذا يفرض المترجم على الاستثناء غير المفحوص؟' },
        { t: 'output', q: "What does this program print?", code: J`
          import java.io.*;

          public class Main {
              public static void main(String[] args) {
                  try {
                      System.out.println(load(3));
                      System.out.println("loaded");
                  } catch (IOException e) {
                      System.out.println("failed");
                  }
              }

              static int load(int n) throws IOException {
                  if (n < 0) {
                      throw new IOException("bad file");
                  }
                  return n * 10;
              }
          }
        `, answer: J`
          30
          loaded
        `, explain: "<code>throws IOException</code> only says that the method <i>may</i> throw. With n = 3 nothing is thrown, so load returns 30 and the catch is skipped." },
        { t: 'mcq', q: "A method creates <code>new PrintWriter(\"a.txt\")</code> and has no try-catch. What must its header contain?", options: ['Nothing', '<code>throws FileNotFoundException</code> (or a parent class such as IOException or Exception)', '<code>throw FileNotFoundException</code>', '<code>catch FileNotFoundException</code>'], answer: 1, explain: "FileNotFoundException is checked. Without a try-catch, the method must declare it, or a parent class of it." },
        { t: 'fill', q: "Complete the method: it declares a checked IOException and throws one for a negative id.", code: J`
          import java.io.*;

          public class Main {
              public static void main(String[] args) {
                  try {
                      open(-1);
                  } catch (IOException e) {
                      System.out.println("Error: " + e.getMessage());
                  }
              }

              static void open(int id) ___ IOException {
                  if (id < 0) {
                      ___ new IOException("no such record");
                  }
                  System.out.println("Opened " + id);
              }
          }
        `, answers: ['throws', 'throw'], explain: "The header declares with <code>throws</code>; the body throws an object with <code>throw</code>." },
        { t: 'order', q: "Put the lines in order: a method that writes a line to a file and passes FileNotFoundException to its caller.", lines: [
          'static void write(String text) throws FileNotFoundException {',
          '    PrintWriter out = new PrintWriter("log.txt");',
          '    out.println(text);',
          '    out.close();',
          '}'
        ], explain: "The throws clause is part of the header. Inside: open, write, close." },
        { t: 'bug', q: "This program does not compile. Tap a line that causes the problem.", code: J`
          import java.io.*;
          public class Main {
              public static void main(String[] args) {
                  try {
                      write("Order 15");
                  } catch (FileNotFoundException e) {
                      System.out.println("Cannot write");
                  }
              }
              static void write(String line) {
                  PrintWriter out = new PrintWriter("log.txt");
                  out.println(line);
                  out.close();
              }
          }
        `, bug: [10, 11], fix: J`
          import java.io.*;
          public class Main {
              public static void main(String[] args) {
                  try {
                      write("Order 15");
                  } catch (FileNotFoundException e) {
                      System.out.println("Cannot write");
                  }
              }
              static void write(String line) throws FileNotFoundException {
                  PrintWriter out = new PrintWriter("log.txt");
                  out.println(line);
                  out.close();
              }
          }
        `, hint: 'Which method has the checked exception inside it? Does it catch or declare it?', explain: "<code>write</code> creates a PrintWriter (checked FileNotFoundException) but neither catches nor declares it: <code>unreported exception</code>. Adding <code>throws FileNotFoundException</code> to its header passes it to main, which already catches it.", explainAr: 'الدالة write لم تعلن الاستثناء المفحوص.' },
        { t: 'bug', q: "This program does not compile. Tap the line with the bug.", code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println(fare(-3));
              }

              static int fare(int km) {
                  if (km < 0) {
                      throws new IllegalArgumentException("km cannot be negative");
                  }
                  return km * 2;
              }
          }
        `, bug: 8, fix: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println(fare(-3));
              }

              static int fare(int km) {
                  if (km < 0) {
                      throw new IllegalArgumentException("km cannot be negative");
                  }
                  return km * 2;
              }
          }
        `, hint: 'Is this line in a header or in a body?', explain: "Inside a method body, the statement is <code>throw</code> (no s). <code>throws</code> only belongs in a method header." },
        { t: 'code', q: "The starter writes <code>menu.txt</code> with three lines. Complete the method <code>countLines(fileName)</code>: it returns the number of lines in the file, and it must <b>declare</b> FileNotFoundException (no try-catch inside it). In <code>main</code>, read a file name and print <code>Lines: </code> and the count, or <code>No file: </code> and the name when the file does not exist. No prompts.", qAr: 'الدالة تعلن الاستثناء بـ throws، و main تلتقطه وتطبع الرسالة.',
          starter: J`
            import java.io.*;
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    try (PrintWriter out = new PrintWriter("menu.txt")) {
                        out.println("Coffee 12");
                        out.println("Tea 8");
                        out.println("Juice 10");
                    } catch (FileNotFoundException e) {
                        System.out.println("Cannot write");
                    }
                    Scanner in = new Scanner(System.in);
                    String name = in.next();
                    // call countLines(name) and catch FileNotFoundException
                }

                static int countLines(String fileName) {
                    // add a throws clause, then count the lines
                    return 0;
                }
            }
          `,
          tests: [{ stdin: 'menu.txt', expected: 'Lines: 3' }, { stdin: 'x.txt', expected: 'No file: x.txt' }],
          solution: J`
            import java.io.*;
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    try (PrintWriter out = new PrintWriter("menu.txt")) {
                        out.println("Coffee 12");
                        out.println("Tea 8");
                        out.println("Juice 10");
                    } catch (FileNotFoundException e) {
                        System.out.println("Cannot write");
                    }
                    Scanner in = new Scanner(System.in);
                    String name = in.next();
                    try {
                        System.out.println("Lines: " + countLines(name));
                    } catch (FileNotFoundException e) {
                        System.out.println("No file: " + name);
                    }
                }

                static int countLines(String fileName) throws FileNotFoundException {
                    int count = 0;
                    try (Scanner file = new Scanner(new File(fileName))) {
                        while (file.hasNextLine()) {
                            file.nextLine();
                            count++;
                        }
                    }
                    return count;
                }
            }
          `,
          hint: "Header: <code>static int countLines(String fileName) throws FileNotFoundException</code>. In main, put the call inside try.",
          explain: "countLines only reports the problem; main, the caller, decides what to print. This is the catch-or-declare rule in action." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 8
    {
      title: 'Your own exception classes',
      titleAr: 'أصناف الاستثناءات الخاصة بك',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why make your own exception?' },
        { type: 'p', en: "IllegalArgumentException is very general. In a bank program, \"not enough money\" is a special situation. It has its own meaning, and it can come with useful data: how much money is missing. If you write your own exception class, the problem gets a clear name, it can carry extra information, and the caller can catch exactly that problem and nothing else.",
          ar: 'الاستثناء الخاص يعطي المشكلة اسماً واضحاً ويمكن أن يحمل معلومات إضافية.' },
        { type: 'analogy', title: 'Special forms at a government office', en: "An office has a general complaint form. But for a lost ID card there is a special form, with boxes for the card number and the date it was lost. The staff know at once what the problem is, and they have all the details. A custom exception is a special form.",
          ar: 'مثل النموذج الخاص بفقدان البطاقة بدل نموذج الشكوى العام.' },
        { type: 'h', en: 'The smallest custom exception' },
        { type: 'code', code: J`
          class InsufficientFundsException extends Exception {
              public InsufficientFundsException(String message) {
                  super(message);
              }
          }
        ` },
        { type: 'lines', rows: [
          ['class InsufficientFundsException', 'The name says exactly what went wrong (insufficient funds = not enough money). It ends with <b>Exception</b>.'],
          ['extends Exception', 'Inheritance (Unit 4): our class <i>is an</i> Exception, so it can be thrown and caught. Its parent is Exception, not RuntimeException, so it is a <b>checked</b> exception (Lesson 7).'],
          ['public InsufficientFundsException(String message)', 'A constructor that receives the message.'],
          ['super(message);', 'Passes the message to the parent constructor (Unit 4). Exception stores it, so <code>getMessage()</code> works.']
        ], ar: 'نرث من Exception ونمرر الرسالة إلى الأب بـ super(message).' },
        { type: 'check', q: 'Why does the constructor call <code>super(message)</code>?', options: ['To create a second exception', 'So that the parent class stores the message and getMessage() can return it', 'Because every constructor must print something', 'To make the exception unchecked'], answer: 1, explain: 'The message is stored by the Exception class. super(message) hands it over, and getMessage(), inherited from the parent, returns it.' },
        { type: 'h', en: 'Throwing and catching it' },
        { type: 'p', en: "Use it like any other exception. Because it is checked, the method that throws it must declare it with <code>throws</code>, and the caller must catch it (or declare it too)." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Account acc = new Account(500);
                  try {
                      acc.withdraw(200);
                      System.out.println("Balance: " + acc.getBalance());
                      acc.withdraw(400);
                      System.out.println("Balance: " + acc.getBalance());
                  } catch (InsufficientFundsException e) {
                      System.out.println("Refused: " + e.getMessage());
                  }
              }
          }

          class InsufficientFundsException extends Exception {
              public InsufficientFundsException(String message) {
                  super(message);
              }
          }

          class Account {
              private double balance;

              public Account(double balance) {
                  this.balance = balance;
              }

              public void withdraw(double amount) throws InsufficientFundsException {
                  if (amount > balance) {
                      throw new InsufficientFundsException("balance is only " + balance);
                  }
                  balance -= amount;
              }

              public double getBalance() { return balance; }
          }
        `, out: J`
          Balance: 300.0
          Refused: balance is only 300.0
        ` },
        { type: 'lines', rows: [
          ['public void withdraw(double amount) throws InsufficientFundsException', 'Checked exception: the header must declare it.'],
          ['throw new InsufficientFundsException("balance is only " + balance);', 'Create and throw our own exception object.'],
          ['balance -= amount;', 'Only reached when there is enough money.'],
          ['catch (InsufficientFundsException e)', 'main catches exactly this problem. The second withdraw is refused, and the second Balance line is skipped.']
        ], ar: 'نرمي الاستثناء الخاص مثل أي استثناء، ونعلنه بـ throws لأنه مفحوص.' },
        { type: 'h', en: 'Carrying extra information' },
        { type: 'p', en: "Your exception class is a normal class, so it can have fields and getters, like the classes in Unit 2. Let us store the amount of money that is missing. The caller can then use it, for example to say how many riyals the customer needs." },
        { type: 'analogy', title: 'A delivery note', en: "When a delivery is short, the driver does not just say \"something is wrong\". He gives you a note: \"3 boxes missing\". You can act on that number. A field in an exception is that note." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Account acc = new Account(100);
                  try {
                      acc.withdraw(250);
                  } catch (InsufficientFundsException e) {
                      System.out.println(e.getMessage());
                      System.out.println("Missing: " + e.getMissing() + " SAR");
                  }
              }
          }

          class InsufficientFundsException extends Exception {
              private double missing;

              public InsufficientFundsException(String message, double missing) {
                  super(message);
                  this.missing = missing;
              }

              public double getMissing() {
                  return missing;
              }
          }

          class Account {
              private double balance;

              public Account(double balance) {
                  this.balance = balance;
              }

              public void withdraw(double amount) throws InsufficientFundsException {
                  if (amount > balance) {
                      throw new InsufficientFundsException("Not enough money", amount - balance);
                  }
                  balance -= amount;
              }
          }
        `, out: J`
          Not enough money
          Missing: 150.0 SAR
        ` },
        { type: 'memory', title: 'An exception object with an extra field', en: "Step through <code>acc.withdraw(250)</code>. The left side shows the variables of withdraw and of main.", frames: [
          { label: '<code>acc.withdraw(250)</code> runs. The balance is 100.0.', vars: [{ name: 'withdraw(): amount', type: 'double', value: '250.0' }, { name: 'main(): acc', type: 'Account', ref: 'A' }], objects: [
            { id: 'A', cls: 'Account', fields: [{ name: 'balance', value: '100.0' }] }
          ] },
          { label: '<code>throw new InsufficientFundsException("Not enough money", amount - balance)</code>: the new object holds the message and the missing amount.', vars: [{ name: 'withdraw(): amount', type: 'double', value: '250.0' }, { name: 'main(): acc', type: 'Account', ref: 'A' }], objects: [
            { id: 'A', cls: 'Account', fields: [{ name: 'balance', value: '100.0' }] },
            { id: 'E', cls: 'InsufficientFundsException', fields: [{ name: 'message', value: '"Not enough money"' }, { name: 'missing', value: '150.0' }] }
          ] },
          { label: 'withdraw has no catch, so it stops. main catches: <code>e</code> refers to the object, and <code>e.getMissing()</code> returns 150.0. The balance did not change.', vars: [{ name: 'main(): acc', type: 'Account', ref: 'A' }, { name: 'main(): e', type: 'InsufficientFundsException', ref: 'E' }], objects: [
            { id: 'A', cls: 'Account', fields: [{ name: 'balance', value: '100.0' }] },
            { id: 'E', cls: 'InsufficientFundsException', fields: [{ name: 'message', value: '"Not enough money"' }, { name: 'missing', value: '150.0' }] }
          ] }
        ], ar: 'كائن الاستثناء يحمل الرسالة والمبلغ الناقص، و main تقرؤهما عبر e.' },
        { type: 'check', q: 'The balance is 100 and you withdraw 250. What does <code>e.getMissing()</code> return?', options: ['250.0', '100.0', '150.0', '-150.0'], answer: 2, explain: 'The exception was created with <code>amount - balance</code> = 250 - 100 = 150.0.' },
        { type: 'h', en: 'Checked or unchecked? You choose the parent' },
        { type: 'table', head: ['Parent class', 'Kind', 'Rule'], rows: [
          ['<code>extends Exception</code>', 'checked', 'methods must declare <code>throws</code>; callers must catch or declare'],
          ['<code>extends RuntimeException</code>', 'unchecked', 'no rule; catching is optional']
        ] },
        { type: 'p', en: "Choose <b>checked</b> when the caller must think about this case: not enough money is a normal situation in a bank, and every caller should plan for it. Choose <b>unchecked</b> for mistakes in how a class is used, such as an invalid mark.",
          ar: 'اختر{{g:|ي}} Exception لاستثناء مفحوص، و RuntimeException لاستثناء غير مفحوص.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Exam exam = new Exam();
                  exam.setMark(95);
                  try {
                      exam.setMark(-7);
                  } catch (InvalidMarkException e) {
                      System.out.println("Invalid: " + e.getMessage());
                  }
                  System.out.println("Mark: " + exam.getMark());
              }
          }

          class InvalidMarkException extends RuntimeException {
              public InvalidMarkException(String message) {
                  super(message);
              }
          }

          class Exam {
              private int mark;

              public void setMark(int mark) {
                  if (mark < 0 || mark > 100) {
                      throw new InvalidMarkException(mark + " is not between 0 and 100");
                  }
                  this.mark = mark;
              }

              public int getMark() { return mark; }
          }
        `, out: J`
          Invalid: -7 is not between 0 and 100
          Mark: 95
        ` },
        { type: 'lines', rows: [
          ['class InvalidMarkException extends RuntimeException', 'Unchecked custom exception.'],
          ['public void setMark(int mark)', 'No throws clause needed.'],
          ['exam.setMark(95);', 'Called without try: allowed, because the exception is unchecked.']
        ] },
        { type: 'h', en: 'Naming rules' },
        { type: 'list', items: [
          "End the name with <b>Exception</b>: InsufficientFundsException, CourseFullException.",
          "Describe the <b>problem</b>, not the place: OutOfStockException, not PharmacyError2.",
          "Give it a constructor with a String message that calls <code>super(message)</code>.",
          "Add fields only for information the caller really needs (the missing amount, the stock that is left)."
        ] },
        { type: 'note', kind: 'exam', en: "A class that does not extend Exception (or another Throwable class) cannot be thrown. The compiler says <code>incompatible types: X cannot be converted to Throwable</code>." },
        { type: 'steps', title: 'Worked example: pharmacy stock', problem: 'A pharmacy has 5 bottles of syrup. Three customers order 3, 5 and 2 bottles. If an order is bigger than the stock, refuse it and say how many bottles are left. Use a custom checked exception with a field.',
          steps: [
            { en: 'Write <code>OutOfStockException</code>: a checked exception with a field <code>available</code> and a getter.', code: J`
              class OutOfStockException extends Exception {
                  private int available;

                  public OutOfStockException(String message, int available) {
                      super(message);
                      this.available = available;
                  }

                  public int getAvailable() {
                      return available;
                  }
              }
            ` },
            { en: 'In <code>Medicine</code>, the method <code>sell</code> declares the exception and throws it when the order is too big.', code: J`
              public void sell(int qty) throws OutOfStockException {
                  if (qty > stock) {
                      throw new OutOfStockException(name + " is out of stock", stock);
                  }
                  stock -= qty;
              }
            ` },
            { en: 'In <code>main</code>, loop over the orders. Inside the catch, use <code>e.getAvailable()</code> in the message.', code: J`
              try {
                  m.sell(qty);
                  System.out.println("Sold " + qty + ", left " + m.getStock());
              } catch (OutOfStockException e) {
                  System.out.println("Cannot sell " + qty + ": only " + e.getAvailable() + " left");
              }
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Medicine m = new Medicine("Syrup", 5);
                    int[] orders = {3, 5, 2};
                    for (int qty : orders) {
                        try {
                            m.sell(qty);
                            System.out.println("Sold " + qty + ", left " + m.getStock());
                        } catch (OutOfStockException e) {
                            System.out.println("Cannot sell " + qty + ": only " + e.getAvailable() + " left");
                        }
                    }
                }
            }

            class OutOfStockException extends Exception {
                private int available;

                public OutOfStockException(String message, int available) {
                    super(message);
                    this.available = available;
                }

                public int getAvailable() {
                    return available;
                }
            }

            class Medicine {
                private String name;
                private int stock;

                public Medicine(String name, int stock) {
                    this.name = name;
                    this.stock = stock;
                }

                public void sell(int qty) throws OutOfStockException {
                    if (qty > stock) {
                        throw new OutOfStockException(name + " is out of stock", stock);
                    }
                    stock -= qty;
                }

                public int getStock() {
                    return stock;
                }
            }
          `, out: J`
            Sold 3, left 2
            Cannot sell 5: only 2 left
            Sold 2, left 0
          `, ar: 'الاستثناء الخاص يحمل الكمية المتبقية، فتستطيع main أن تطبع رسالة دقيقة.' }
      ],
      mistakes: [
        { title: 'Forgetting super(message)', en: "If the constructor does not pass the message to the parent, Exception never receives it, and <code>getMessage()</code> returns <code>null</code>.", ar: 'بدون super(message) تعيد getMessage القيمة null.' },
        { title: 'Forgetting throws for a checked custom exception', en: "If your class extends Exception, every method that throws it (and does not catch it) must say <code>throws YourException</code> in its header, or you get <code>unreported exception</code>." },
        { title: 'Not extending Exception', en: "<code>class FullException { }</code> is just a normal class. <code>throw new FullException()</code> gives <code>cannot be converted to Throwable</code>." },
        { title: 'A vague name', en: "<code>ErrorX</code> or <code>MyException</code> tells the reader nothing. The name should say what went wrong: <code>SeatTakenException</code>." }
      ],
      remember: [
        "A custom exception is a class that extends <code>Exception</code> (checked) or <code>RuntimeException</code> (unchecked).",
        "Its constructor calls <code>super(message)</code>, so that getMessage() works.",
        "It can have extra fields and getters, such as the missing amount.",
        "Throw it with <code>throw new ...</code>; if it is checked, declare it with <code>throws</code>.",
        "Name it after the problem, and end the name with Exception."
      ],
      rememberAr: 'الاستثناء الخاص صنف يرث من Exception (مفحوص) أو RuntimeException (غير مفحوص)، ويستدعي super(message)، ويمكن أن يحمل حقولاً إضافية.',
      practice: [
        { t: 'mcq', q: "Which class header makes a <b>checked</b> custom exception?", options: ['<code>class LateException extends RuntimeException</code>', '<code>class LateException extends Exception</code>', '<code>class LateException</code>', '<code>class LateException implements Exception</code>'], answer: 1, explain: "Exception (but not RuntimeException) as the parent makes it checked. Exception is a class, so we use extends, not implements.", qAr: 'أي ترويسة تنشئ استثناءً مفحوصاً؟' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      book(0);
                      System.out.println("booked");
                  } catch (NoSeatsException e) {
                      System.out.println("Sorry: " + e.getMessage());
                  }
              }

              static void book(int freeSeats) throws NoSeatsException {
                  if (freeSeats == 0) {
                      throw new NoSeatsException("the bus is full");
                  }
              }
          }

          class NoSeatsException extends Exception {
              public NoSeatsException(String message) {
                  super(message);
              }
          }
        `, answer: J`
          Sorry: the bus is full
        `, explain: "book(0) throws our exception, so \"booked\" is skipped. The catch prints the message that super(message) stored." },
        { t: 'mcq', q: "You write <code>class CardBlockedException extends RuntimeException</code>. Which sentence is true?", options: ['Methods that throw it must declare throws', 'It is unchecked: throws and catch are optional', 'It cannot have fields', 'It cannot be caught'], answer: 1, explain: "Its parent is RuntimeException, so it is unchecked. You can still catch it, and it can have fields like any class." },
        { t: 'fill', q: "Complete the custom exception class so that the program prints <code>submitted after the deadline</code>.", code: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      throw new LateException("submitted after the deadline");
                  } catch (LateException e) {
                      System.out.println(e.getMessage());
                  }
              }
          }

          class LateException ___ Exception {
              public LateException(String message) {
                  ___(message);
              }
          }
        `, answers: ['extends', 'super'], explain: "<code>extends Exception</code> puts the class in the exception family. <code>super(message)</code> hands the message to the parent." },
        { t: 'order', q: "Put the lines of this custom exception class in order. Remember: <code>super(...)</code> must be the first line of a constructor.", lines: [
          'class OutOfStockException extends Exception {',
          '    private int available;',
          '    public OutOfStockException(String message, int available) {',
          '        super(message);',
          '        this.available = available;',
          '    }',
          '}'
        ], explain: "Class header, field, constructor header, then super(message) first, then the field assignment." },
        { t: 'bug', q: "The program should print <code>Bus 7 is full</code>, but it prints <code>null</code>. Tap the line with the bug.", code: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      throw new FullBusException("Bus 7 is full");
                  } catch (FullBusException e) {
                      System.out.println(e.getMessage());
                  }
              }
          }
          class FullBusException extends Exception {
              public FullBusException(String message) {
                  super();
              }
          }
        `, bug: 12, fix: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      throw new FullBusException("Bus 7 is full");
                  } catch (FullBusException e) {
                      System.out.println(e.getMessage());
                  }
              }
          }
          class FullBusException extends Exception {
              public FullBusException(String message) {
                  super(message);
              }
          }
        `, hint: 'Where does Exception get the message from?', explain: "<code>super()</code> calls the parent constructor without a message, so the parent stores nothing and getMessage() returns null. <code>super(message)</code> passes it on." },
        { t: 'bug', q: "<code>LowBalanceException</code> extends <code>Exception</code>. The class <code>Card</code> does not compile. Tap a line that causes the problem.", code: J`
          class LowBalanceException extends Exception {
              public LowBalanceException(String message) { super(message); }
          }

          class Card {
              private int balance = 10;

              public void pay(int fare) {
                  if (fare > balance) {
                      throw new LowBalanceException("need " + (fare - balance) + " more");
                  }
                  balance -= fare;
              }
          }
        `, bug: [8, 10], fix: J`
          class LowBalanceException extends Exception {
              public LowBalanceException(String message) { super(message); }
          }

          class Card {
              private int balance = 10;

              public void pay(int fare) throws LowBalanceException {
                  if (fare > balance) {
                      throw new LowBalanceException("need " + (fare - balance) + " more");
                  }
                  balance -= fare;
              }
          }
        `, hint: 'Is LowBalanceException checked or unchecked?', explain: "LowBalanceException is checked, so <code>pay</code> must catch it or declare it. It does neither: <code>unreported exception</code>. Add <code>throws LowBalanceException</code> to the header." },
        { t: 'code', q: "Complete <code>OutOfStockException</code> (checked, with a field <code>available</code> and the getter <code>getAvailable()</code>) and the method <code>sell</code> of <code>Stock</code>, which throws it when <code>qty</code> is more than the stock. In <code>main</code>: read the starting stock, then read orders until the input ends. For each order, print <code>Sold Q, left S</code> or <code>Cannot sell Q, only S left</code> (use <code>getAvailable()</code>). No prompts.", qAr: 'أكمل{{g:|ي}} الاستثناء الخاص ودالة البيع، واطبع{{g:|ي}} نتيجة كل طلب.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    Stock s = new Stock(in.nextInt());
                    while (in.hasNextInt()) {
                        int qty = in.nextInt();
                        // try to sell, print the result
                    }
                }
            }

            class OutOfStockException extends Exception {
                // field available, constructor (message, available), getAvailable()
            }

            class Stock {
                private int stock;

                public Stock(int stock) {
                    this.stock = stock;
                }

                public void sell(int qty) {
                    // throw OutOfStockException if qty > stock
                    stock -= qty;
                }

                public int getStock() { return stock; }
            }
          `,
          tests: [{ stdin: '5\n3 4 2', expected: 'Sold 3, left 2\nCannot sell 4, only 2 left\nSold 2, left 0' }, { stdin: '1\n2', expected: 'Cannot sell 2, only 1 left' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    Stock s = new Stock(in.nextInt());
                    while (in.hasNextInt()) {
                        int qty = in.nextInt();
                        try {
                            s.sell(qty);
                            System.out.println("Sold " + qty + ", left " + s.getStock());
                        } catch (OutOfStockException e) {
                            System.out.println("Cannot sell " + qty + ", only " + e.getAvailable() + " left");
                        }
                    }
                }
            }

            class OutOfStockException extends Exception {
                private int available;

                public OutOfStockException(String message, int available) {
                    super(message);
                    this.available = available;
                }

                public int getAvailable() {
                    return available;
                }
            }

            class Stock {
                private int stock;

                public Stock(int stock) {
                    this.stock = stock;
                }

                public void sell(int qty) throws OutOfStockException {
                    if (qty > stock) {
                        throw new OutOfStockException("not enough stock", stock);
                    }
                    stock -= qty;
                }

                public int getStock() { return stock; }
            }
          `,
          hint: "sell needs <code>throws OutOfStockException</code> in its header. Create the exception with the current stock as <code>available</code>.",
          explain: "The exception carries the number the caller needs, so main can print an exact message without asking the Stock object again." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 9
    {
      title: 'Testing your code',
      titleAr: 'اختبار البرنامج وتتبع الأخطاء',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why test?' },
        { type: 'p', en: "A program that compiles and runs once is not finished. Maybe it works for a mark of 75 but gives the wrong answer for 90, or crashes for -5. <b>Testing</b> means running your code with chosen inputs and comparing what it does with what it <b>should</b> do. A bug that you find yourself costs you a few minutes. A bug that your users (or your instructor's tests) find costs much more.",
          ar: 'الاختبار يعني تشغيل الكود بمدخلات مختارة ومقارنة النتيجة بالنتيجة المتوقعة.' },
        { type: 'analogy', title: 'A car inspection', en: "Before a car may drive on the road, the inspection centre checks the brakes, the lights and the tyres from a fixed list. Nobody says \"it drove to the centre, so it is fine\". A test plan is that list for your program." },
        { type: 'h', en: 'Three kinds of test cases' },
        { type: 'p', en: "A <b>test case</b> is one input together with the result you expect. Choose three kinds: <b>normal</b> cases (typical values), <b>boundary</b> cases (values exactly at the edges of a rule, where <code>&lt;</code> and <code>&lt;=</code> make a difference), and <b>invalid</b> cases (values that must be refused)." },
        { type: 'p', en: "Example: a method <code>grade(mark)</code> returns <code>A</code> for 90–100, <code>B</code> for 80–89, <code>C</code> for 70–79, <code>D</code> for 60–69 and <code>F</code> below 60. A mark below 0 or above 100 must throw an IllegalArgumentException. Here are good test cases:" },
        { type: 'table', head: ['Kind', 'Input', 'Expected'], rows: [
          ['normal', '75', 'C'],
          ['normal', '85', 'B'],
          ['boundary', '90', 'A'],
          ['boundary', '89', 'B'],
          ['boundary', '0', 'F'],
          ['boundary', '100', 'A'],
          ['invalid', '-1', 'IllegalArgumentException'],
          ['invalid', '101', 'IllegalArgumentException']
        ] },
        { type: 'analogy', title: 'An age limit at a ride', en: "An amusement park ride is for children aged 12 or more. The guard does not worry about a child of 5 or an adult of 30: the answer is obvious. He must be careful with children who are exactly 11, 12 or 13. Bugs hide at the edges in the same way.",
          ar: 'الأخطاء تختبئ عند الحدود، فاختبر{{g:|ي}} القيم الحدّية دائماً.' },
        { type: 'check', q: 'A shop gives a discount for 10 items or more. Which inputs are the best boundary tests?', options: ['1 and 100', '9 and 10', '0 and -5', '50 and 51'], answer: 1, explain: '9 is the last value without a discount and 10 is the first value with one. A wrong <code>&gt;</code> or <code>&gt;=</code> shows up exactly there.' },
        { type: 'h', en: 'A test plan table' },
        { type: 'p', en: "Before you write any test code, write the tests in a table. Fill in <b>Expected</b> from the rules, <b>before</b> you run the program. Then run it, write down what really happened (<b>Actual</b>), and compare." },
        { type: 'table', head: ['Test', 'Input', 'Expected', 'Actual', 'Pass?'], rows: [
          ['1', '75', 'C', 'C', 'yes'],
          ['2', '90', 'A', 'B', '<b>no</b>'],
          ['3', '89', 'B', 'B', 'yes'],
          ['4', '-1', 'exception', 'exception', 'yes']
        ] },
        { type: 'p', en: "Test 2 fails. The boundary 90 gives B, so the code probably says <code>mark &gt; 90</code> where the rule says \"90 or more\". One boundary test found a real bug.",
          ar: 'نكتب النتيجة المتوقعة من القواعد قبل التشغيل، ثم نقارنها بالنتيجة الفعلية.' },
        { type: 'note', kind: 'exam', en: "Exam questions often say: \"Write test cases for this method.\" Give at least one normal case, a boundary case on each side of every edge, and one invalid case, and write the expected result for each one." },
        { type: 'h', en: 'A tiny test helper: check(name, ok)' },
        { type: 'p', en: "Writing PASS or FAIL by hand is slow. A small helper method does it for you. It receives a name for the test and a boolean: <code>true</code> if the result was right. Here it finds the bug from the table." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  check("75 is C", grade(75).equals("C"));
                  check("90 is A", grade(90).equals("A"));
                  check("89 is B", grade(89).equals("B"));
                  check("0 is F", grade(0).equals("F"));
              }

              static void check(String name, boolean ok) {
                  if (ok) {
                      System.out.println("PASS " + name);
                  } else {
                      System.out.println("FAIL " + name);
                  }
              }

              static String grade(int mark) {
                  if (mark > 90) {
                      return "A";
                  } else if (mark >= 80) {
                      return "B";
                  } else if (mark >= 70) {
                      return "C";
                  } else if (mark >= 60) {
                      return "D";
                  }
                  return "F";
              }
          }
        `, out: J`
          PASS 75 is C
          FAIL 90 is A
          PASS 89 is B
          PASS 0 is F
        ` },
        { type: 'lines', rows: [
          ['check("90 is A", grade(90).equals("A"));', 'Compute the actual result, compare it with the expected "A", and pass the true/false answer to check.'],
          ['static void check(String name, boolean ok)', 'Prints PASS when ok is true, FAIL otherwise.'],
          ['if (mark > 90)', 'The bug that the test found: 90 itself is not included. It should be <code>mark &gt;= 90</code>.']
        ], ar: 'الدالة check تطبع PASS أو FAIL حسب نتيجة المقارنة.' },
        { type: 'check', q: 'You change <code>mark &gt; 90</code> to <code>mark &gt;= 90</code> and run again. What does the second test print?', options: ['FAIL 90 is A', 'PASS 90 is A', 'Nothing', 'An exception'], answer: 1, explain: 'Now 90 returns "A", the comparison is true, and check prints PASS. Keep the tests: run them again after every change.' },
        { type: 'h', en: 'Testing that an exception is thrown' },
        { type: 'p', en: "For an invalid input, the <b>expected result is an exception</b>. Use this pattern: call the method inside try. If the next line runs, no exception came, so the test fails. If the catch runs, the exception came, so the test passes." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      grade(-1);
                      check("-1 is refused", false);
                  } catch (IllegalArgumentException e) {
                      check("-1 is refused", true);
                  }
                  try {
                      grade(100);
                      check("100 is accepted", true);
                  } catch (IllegalArgumentException e) {
                      check("100 is accepted", false);
                  }
              }

              static void check(String name, boolean ok) {
                  if (ok) {
                      System.out.println("PASS " + name);
                  } else {
                      System.out.println("FAIL " + name);
                  }
              }

              static String grade(int mark) {
                  if (mark < 0 || mark > 100) {
                      throw new IllegalArgumentException("mark must be 0-100");
                  }
                  if (mark >= 90) {
                      return "A";
                  } else if (mark >= 80) {
                      return "B";
                  } else if (mark >= 70) {
                      return "C";
                  } else if (mark >= 60) {
                      return "D";
                  }
                  return "F";
              }
          }
        `, out: J`
          PASS -1 is refused
          PASS 100 is accepted
        ` },
        { type: 'lines', rows: [
          ['grade(-1);', 'Should throw. If it does, Java jumps to the catch.'],
          ['check("-1 is refused", false);', 'Only reached if <b>no</b> exception came: that is a failure.'],
          ['check("-1 is refused", true);', 'In the catch: the exception came, as expected. PASS.'],
          ['grade(100);', 'The opposite test: 100 is a valid boundary, so here the exception must <b>not</b> come.']
        ], ar: 'إذا وصلنا إلى السطر التالي داخل try فالاختبار فشل، وإذا عملت catch فالاختبار نجح.' },
        { type: 'h', en: 'Debugging: finding the cause' },
        { type: 'p', en: "A failing test tells you <b>that</b> something is wrong. <b>Debugging</b> means finding <b>why</b>. Two habits help. <b>1. Print tracing:</b> add temporary <code>println</code> lines that show the values of variables while the program runs. Start them with a word such as <code>DEBUG</code>, so that you can find and remove them later." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] marks = {70, 80, 90};
                  int total = 0;
                  for (int i = 1; i < marks.length; i++) {
                      total += marks[i];
                      System.out.println("DEBUG i=" + i + " total=" + total);
                  }
                  System.out.println("Average: " + total / marks.length);
              }
          }
        `, out: J`
          DEBUG i=1 total=80
          DEBUG i=2 total=170
          Average: 56
        ` },
        { type: 'p', en: "The average should be 80. The trace shows that <code>i</code> starts at 1, so the first mark (70) is never added. Change <code>i = 1</code> to <code>i = 0</code>, run again, and then delete the DEBUG line." },
        { type: 'analogy', title: 'A slow-motion replay', en: "In a football match, a goal can happen too fast to see who touched the ball. The slow-motion replay shows it frame by frame. A debugger is a slow-motion replay of your program: it pauses and lets you look at every variable." },
        { type: 'p', en: "<b>2. The NetBeans debugger:</b> NetBeans can pause your program and show every variable, without any println lines." },
        { type: 'table', head: ['Action', 'What it does', 'In NetBeans'], rows: [
          ['Breakpoint', 'marks a line where the program will pause', 'click the line number in the left margin: a red square appears'],
          ['Debug', 'runs the program until the first breakpoint', '<b>Debug → Debug File</b> (Ctrl+Shift+F5)'],
          ['Step Over', 'runs the current line and pauses at the next line', 'F8'],
          ['Step Into', 'if the line calls one of your methods, goes inside it', 'F7'],
          ['Continue', 'runs on until the next breakpoint', 'F5'],
          ['Variables / Watches', 'show the current values; a watch shows any expression you choose, such as <code>total / marks.length</code>', 'windows at the bottom of the screen']
        ] },
        { type: 'p', en: "For the average bug: put a breakpoint on <code>total += marks[i];</code>, start Debug File, and press F8 a few times. In the Variables window you see <code>i</code> start at 1. You find the bug without printing anything. The <b>Call Stack</b> window shows the same chain of methods as a stack trace.",
          ar: 'نقطة التوقف توقف البرنامج، و Step Over ينفذ سطراً واحداً، و Step Into يدخل إلى الدالة.' },
        { type: 'check', q: 'The debugger is paused on <code>int g = grade(75);</code>. You want to see what happens inside <code>grade</code>. Which button do you press?', options: ['Step Over (F8)', 'Step Into (F7)', 'Continue (F5)', 'Finish the session'], answer: 1, explain: 'Step Into goes inside the method that the line calls. Step Over would run the whole call and stop at the next line of main.' },
        { type: 'steps', title: 'Worked example: testing a ticket price method', problem: 'Bus tickets cost 5 SAR for children under 12, 10 SAR from 12 to 59, and 6 SAR from 60. A negative age must throw IllegalArgumentException. Write the method and a set of tests that covers normal, boundary and invalid ages, with a count of passed tests.',
          steps: [
            { en: 'Write the rules as a method. Check the invalid case first.', code: J`
              static int price(int age) {
                  if (age < 0) {
                      throw new IllegalArgumentException("age cannot be negative");
                  }
                  if (age < 12) {
                      return 5;
                  } else if (age < 60) {
                      return 10;
                  }
                  return 6;
              }
            ` },
            { en: 'Choose test cases from the rules: normal (30), boundaries on both sides of each edge (11 and 12, 59 and 60, and 0), and invalid (-1).' },
            { en: 'Write a <code>check</code> helper that also counts. <code>passed</code> and <code>total</code> are static fields (Unit 2), so check can change them.', code: J`
              static int passed = 0;
              static int total = 0;

              static void check(String name, boolean ok) {
                  total++;
                  if (ok) {
                      passed++;
                      System.out.println("PASS " + name);
                  } else {
                      System.out.println("FAIL " + name);
                  }
              }
            ` },
            { en: 'Write the tests in main, including the exception test, and print the summary.', code: J`
              check("age 11 pays 5", price(11) == 5);
              check("age 12 pays 10", price(12) == 10);
              try {
                  price(-1);
                  check("age -1 is refused", false);
              } catch (IllegalArgumentException e) {
                  check("age -1 is refused", true);
              }
              System.out.println(passed + " of " + total + " tests passed");
            ` }
          ],
          code: J`
            public class Main {
                static int passed = 0;
                static int total = 0;

                public static void main(String[] args) {
                    check("age 30 pays 10", price(30) == 10);
                    check("age 11 pays 5", price(11) == 5);
                    check("age 12 pays 10", price(12) == 10);
                    check("age 59 pays 10", price(59) == 10);
                    check("age 60 pays 6", price(60) == 6);
                    check("age 0 pays 5", price(0) == 5);
                    try {
                        price(-1);
                        check("age -1 is refused", false);
                    } catch (IllegalArgumentException e) {
                        check("age -1 is refused", true);
                    }
                    System.out.println(passed + " of " + total + " tests passed");
                }

                static void check(String name, boolean ok) {
                    total++;
                    if (ok) {
                        passed++;
                        System.out.println("PASS " + name);
                    } else {
                        System.out.println("FAIL " + name);
                    }
                }

                static int price(int age) {
                    if (age < 0) {
                        throw new IllegalArgumentException("age cannot be negative");
                    }
                    if (age < 12) {
                        return 5;
                    } else if (age < 60) {
                        return 10;
                    }
                    return 6;
                }
            }
          `, out: J`
            PASS age 30 pays 10
            PASS age 11 pays 5
            PASS age 12 pays 10
            PASS age 59 pays 10
            PASS age 60 pays 6
            PASS age 0 pays 5
            PASS age -1 is refused
            7 of 7 tests passed
          `, ar: 'اخترنا اختبارات عادية وحدّية وغير صالحة، وعددنا الاختبارات الناجحة.' }
      ],
      mistakes: [
        { title: 'Testing only normal values', en: "75 and 85 work, but the bug was at 90. Always add boundary and invalid cases.", ar: 'لا {{g:تكتفِ|تكتفي}} بالقيم العادية.' },
        { title: 'Copying the actual output into the expected column', en: "Expected values must come from the <b>rules</b>, not from running your program. Otherwise a bug becomes the \"expected\" answer." },
        { title: 'Forgetting the FAIL line in an exception test', en: "Without <code>check(..., false)</code> right after the call, a missing exception prints nothing at all, and you do not notice that the test failed." },
        { title: 'Leaving DEBUG prints in the final program', en: "They change the output, so automatic tests (like the ones on this site) fail. Remove them when the bug is fixed." }
      ],
      remember: [
        "A test case = an input + the expected result, decided from the rules <b>before</b> running.",
        "Test normal, boundary and invalid cases. Bugs like to hide at the boundaries.",
        "A helper <code>check(name, ok)</code> prints PASS or FAIL for each test.",
        "To test an exception: call inside try, FAIL on the next line, PASS in the catch.",
        "Debug with print tracing (remove it afterwards), or with breakpoints, Step Over (F8) and Step Into (F7) in NetBeans."
      ],
      rememberAr: 'اختبر{{g:|ي}} الحالات العادية والحدّية وغير الصالحة، واكتب{{g:|ي}} النتيجة المتوقعة من القواعد. استخدم{{g:|ي}} check لطباعة PASS أو FAIL، وتتبّع{{g:|ي}} الأخطاء بالطباعة أو بمنقّح NetBeans.',
      practice: [
        { t: 'mcq', q: "The rule is \"pass if the mark is 60 or more\". Which input is a <b>boundary</b> test?", options: ['30', '60', '95', '-10'], answer: 1, explain: "60 is exactly at the edge of the rule. 59 would be a good second boundary test.", qAr: 'أي مدخل يمثل اختباراً حدّياً؟' },
        { t: 'output', q: "The method <code>twice</code> has a bug. What do the tests print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  check("double of 2", twice(2) == 4);
                  check("double of 0", twice(0) == 0);
                  check("double of 5", twice(5) == 10);
              }

              static int twice(int x) {
                  return x + 2;
              }

              static void check(String name, boolean ok) {
                  if (ok) {
                      System.out.println("PASS " + name);
                  } else {
                      System.out.println("FAIL " + name);
                  }
              }
          }
        `, answer: J`
          PASS double of 2
          FAIL double of 0
          FAIL double of 5
        `, explain: "2 + 2 happens to equal 2 * 2, so the first test passes by luck. 0 + 2 = 2 and 5 + 2 = 7 are wrong. One passing test does not prove that a method is correct.", explainAr: 'نجاح اختبار واحد لا يثبت صحة الدالة.' },
        { t: 'mcq', q: "In the NetBeans debugger, what does <b>Step Over</b> (F8) do?", options: ['Runs the program to the end', 'Runs the current line and pauses at the next one', 'Goes inside the method called on the current line', 'Removes a breakpoint'], answer: 1, explain: "Step Over runs one line (including any method it calls) and pauses again. Step Into (F7) would go inside the method." },
        { t: 'fill', q: "Complete the exception test: <code>setAge(-5)</code> must throw, so the test passes only in the catch.", code: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      setAge(-5);
                      check("refuse -5", ___);
                  } catch (IllegalArgumentException e) {
                      check("refuse -5", ___);
                  }
              }

              static void setAge(int age) {
                  if (age < 0) {
                      throw new IllegalArgumentException("negative age");
                  }
              }

              static void check(String name, boolean ok) {
                  System.out.println((ok ? "PASS " : "FAIL ") + name);
              }
          }
        `, answers: ['false', 'true'], explain: "If the line after the call runs, no exception came: false (FAIL). If the catch runs, the exception came: true (PASS)." },
        { t: 'order', q: "Put the lines of the test helper in order.", lines: [
          'static void check(String name, boolean ok) {',
          '    if (ok) {',
          '        System.out.println("PASS " + name);',
          '    } else {',
          '        System.out.println("FAIL " + name);',
          '    }',
          '}'
        ], explain: "PASS belongs to the true branch, FAIL to the else branch." },
        { t: 'bug', q: "<code>discount(-5)</code> should be refused. The test below prints PASS even when the method forgets to throw. Tap the line with the bug.", code: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      discount(-5);
                      System.out.println("PASS -5 refused");
                  } catch (IllegalArgumentException e) {
                      System.out.println("PASS -5 refused");
                  }
              }
              static int discount(int percent) {
                  if (percent < 0) throw new IllegalArgumentException("negative");
                  return percent;
              }
          }
        `, bug: 5, fix: J`
          public class Main {
              public static void main(String[] args) {
                  try {
                      discount(-5);
                      System.out.println("FAIL -5 refused");
                  } catch (IllegalArgumentException e) {
                      System.out.println("PASS -5 refused");
                  }
              }
              static int discount(int percent) {
                  if (percent < 0) throw new IllegalArgumentException("negative");
                  return percent;
              }
          }
        `, hint: 'When does line 5 run: when the exception came, or when it did not come?', explain: "Line 5 runs only when <b>no</b> exception was thrown, which means the method is wrong. It must print FAIL. A test that prints PASS in both cases can never find a bug." },
        { t: 'bug', q: "The rule says \"60 or more passes\". The test for 60 prints FAIL. Tap the line with the bug.", code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println(result(75));
                  System.out.println(result(60));
                  System.out.println(result(59));
              }
              static String result(int mark) {
                  if (mark > 60) {
                      return "PASS";
                  }
                  return "FAIL";
              }
          }
        `, bug: 8, fix: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println(result(75));
                  System.out.println(result(60));
                  System.out.println(result(59));
              }
              static String result(int mark) {
                  if (mark >= 60) {
                      return "PASS";
                  }
                  return "FAIL";
              }
          }
        `, hint: 'Is 60 included in the condition?', explain: "<code>mark &gt; 60</code> is false for 60, so 60 gets FAIL. The rule says 60 or more: <code>mark &gt;= 60</code>. Only a boundary test can find this bug." },
        { t: 'code', q: "Write a small <b>test runner</b>. The starter has a correct <code>grade(mark)</code> method. Read <code>n</code>, then <code>n</code> lines, each with a mark and the expected result (a letter, or <code>ERROR</code> when an exception is expected). For each line, compute the actual result: <code>grade(mark)</code>, or <code>ERROR</code> if it throws. Print <code>PASS mark</code> or <code>FAIL mark: expected X, got Y</code>. At the end print <code>P of N passed</code>. No prompts.", qAr: 'اكتب{{g:|ي}} برنامجاً يشغل الاختبارات ويطبع PASS أو FAIL ثم عدد الاختبارات الناجحة.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int n = in.nextInt();
                    int passed = 0;
                    for (int i = 0; i < n; i++) {
                        int mark = in.nextInt();
                        String expected = in.next();
                        // actual = grade(mark), or "ERROR" if it throws
                        // print PASS mark, or FAIL mark: expected X, got Y
                    }
                    System.out.println(passed + " of " + n + " passed");
                }

                static String grade(int mark) {
                    if (mark < 0 || mark > 100) {
                        throw new IllegalArgumentException("mark must be 0-100");
                    }
                    if (mark >= 90) {
                        return "A";
                    } else if (mark >= 80) {
                        return "B";
                    } else if (mark >= 70) {
                        return "C";
                    } else if (mark >= 60) {
                        return "D";
                    }
                    return "F";
                }
            }
          `,
          tests: [{ stdin: '4\n75 C\n90 A\n59 F\n-3 ERROR', expected: 'PASS 75\nPASS 90\nPASS 59\nPASS -3\n4 of 4 passed' }, { stdin: '2\n80 A\n101 ERROR', expected: 'FAIL 80: expected A, got B\nPASS 101\n1 of 2 passed' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    int n = in.nextInt();
                    int passed = 0;
                    for (int i = 0; i < n; i++) {
                        int mark = in.nextInt();
                        String expected = in.next();
                        String actual;
                        try {
                            actual = grade(mark);
                        } catch (IllegalArgumentException e) {
                            actual = "ERROR";
                        }
                        if (actual.equals(expected)) {
                            passed++;
                            System.out.println("PASS " + mark);
                        } else {
                            System.out.println("FAIL " + mark + ": expected " + expected + ", got " + actual);
                        }
                    }
                    System.out.println(passed + " of " + n + " passed");
                }

                static String grade(int mark) {
                    if (mark < 0 || mark > 100) {
                        throw new IllegalArgumentException("mark must be 0-100");
                    }
                    if (mark >= 90) {
                        return "A";
                    } else if (mark >= 80) {
                        return "B";
                    } else if (mark >= 70) {
                        return "C";
                    } else if (mark >= 60) {
                        return "D";
                    }
                    return "F";
                }
            }
          `,
          hint: "Declare <code>String actual;</code> before a try. In the try: <code>actual = grade(mark);</code>. In the catch: <code>actual = \"ERROR\";</code>. Then compare with <code>equals</code>.",
          explain: "Turning an exception into the text ERROR lets one comparison handle valid and invalid cases. In the second test the expected A is wrong (80 is a B): a test runner also helps you find mistakes in a test plan." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 10
    {
      title: 'Putting it together: a robust registration program',
      titleAr: 'نجمع كل شيء: برنامج تسجيل متين مع اختباراته',
      minutes: 30,
      body: [
        { type: 'h', en: 'The plan' },
        { type: 'p', en: "Real programs combine everything from this unit: classes that protect themselves, exceptions with clear names, input that cannot crash the program, and tests that prove that it all works. In this lesson we build a small course-registration program for one section, in four parts. Take it slowly: each part is short, and each one uses ideas you already know.",
          ar: 'نبني برنامج تسجيل صغيراً على أربع مراحل، ونستخدم فيه كل أفكار الوحدة.' },
        { type: 'analogy', title: 'Building a house', en: "First the foundations (a class with rules), then the walls (exceptions that report problems), then the doors (safe input from the user), and at the end the inspection (tests). You do not test a house before it has walls, and you do not move in before the inspection.",
          ar: 'الأساس هو الصنف وقواعده، والجدران هي الاستثناءات، والأبواب هي الإدخال الآمن، والفحص هو الاختبارات.' },
        { type: 'list', items: [
          "A <code>Section</code> has a course code and a capacity from 1 to 40. Any other capacity throws <code>IllegalArgumentException</code>.",
          "<code>register(id)</code> adds a student id. An id that is not positive throws <code>IllegalArgumentException</code>. An id that is already registered throws <code>IllegalStateException</code>.",
          "When the section is full, <code>register</code> throws our own checked exception, <code>SectionFullException</code>, which remembers the capacity.",
          "The user types commands: <code>REG id</code>, <code>COUNT</code> and <code>END</code>. Every bad input gets a message, and the program never crashes."
        ] },
        { type: 'h', en: 'Part 1: the custom exception' },
        { type: 'code', code: J`
          class SectionFullException extends Exception {
              private int capacity;

              public SectionFullException(String message, int capacity) {
                  super(message);
                  this.capacity = capacity;
              }

              public int getCapacity() {
                  return capacity;
              }
          }
        ` },
        { type: 'lines', rows: [
          ['extends Exception', 'Checked: a full section is a normal situation, and the compiler will remind every caller to plan for it (Lessons 7 and 8).'],
          ['super(message);', 'The parent stores the message, so getMessage() works.'],
          ['private int capacity;', 'Extra information for the caller: how big the section is.']
        ] },
        { type: 'h', en: 'Part 2: a class that protects itself' },
        { type: 'p', en: "The rules live <b>inside</b> the class, so no other part of the program can break them. The ids are kept in an array with a counter, as in Unit 3. Look at the order of the checks in <code>register</code>: every rule is checked first, and only then is the id stored." },
        { type: 'code', code: J`
          class Section {
              private String code;
              private int[] ids;
              private int count;

              public Section(String code, int capacity) {
                  if (capacity < 1 || capacity > 40) {
                      throw new IllegalArgumentException("capacity must be 1-40");
                  }
                  this.code = code;
                  ids = new int[capacity];
              }

              public void register(int id) throws SectionFullException {
                  if (id <= 0) {
                      throw new IllegalArgumentException("invalid id " + id);
                  }
                  if (isRegistered(id)) {
                      throw new IllegalStateException(id + " is already registered");
                  }
                  if (count == ids.length) {
                      throw new SectionFullException(code + " is full", ids.length);
                  }
                  ids[count] = id;
                  count++;
              }

              public boolean isRegistered(int id) {
                  for (int i = 0; i < count; i++) {
                      if (ids[i] == id) {
                          return true;
                      }
                  }
                  return false;
              }

              public int getCount() {
                  return count;
              }
          }
        ` },
        { type: 'lines', rows: [
          ['throw new IllegalArgumentException("capacity must be 1-40");', 'The constructor refuses a bad section: no such object can ever exist (Lesson 6).'],
          ['public void register(int id) throws SectionFullException', 'The checked exception is declared (Lesson 7). The two unchecked ones need no declaration.'],
          ['throw new IllegalStateException(id + " is already registered");', 'The id is fine, but the object is not ready for it: it already has this student.'],
          ['ids[count] = id;', 'Reached only when all three rules passed.']
        ], ar: 'نفحص كل القواعد أولاً، ولا نخزن الرقم إلا إذا نجحت جميعها.' },
        { type: 'memory', title: 'Inside a Section object', en: "Follow a section with capacity 2. The Section object has a reference to its own array (objects inside objects, Unit 3).", frames: [
          { label: 'After <code>Section s = new Section("CS102", 2);</code>', vars: [{ name: 's', type: 'Section', ref: 'S' }], objects: [
            { id: 'S', cls: 'Section', fields: [{ name: 'code', value: '"CS102"' }, { name: 'ids', ref: 'A' }, { name: 'count', value: '0' }] },
            { id: 'A', cls: 'int[2]', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }] }
          ] },
          { label: 'After <code>s.register(1001);</code> and <code>s.register(1002);</code>', vars: [{ name: 's', type: 'Section', ref: 'S' }], objects: [
            { id: 'S', cls: 'Section', fields: [{ name: 'code', value: '"CS102"' }, { name: 'ids', ref: 'A' }, { name: 'count', value: '2' }] },
            { id: 'A', cls: 'int[2]', fields: [{ name: '[0]', value: '1001' }, { name: '[1]', value: '1002' }] }
          ] },
          { label: '<code>s.register(1003);</code> The id is valid and new, but <code>count == ids.length</code>. Java throws a SectionFullException. Nothing in the section changes.', vars: [{ name: 's', type: 'Section', ref: 'S' }], objects: [
            { id: 'S', cls: 'Section', fields: [{ name: 'code', value: '"CS102"' }, { name: 'ids', ref: 'A' }, { name: 'count', value: '2' }] },
            { id: 'A', cls: 'int[2]', fields: [{ name: '[0]', value: '1001' }, { name: '[1]', value: '1002' }] },
            { id: 'E', cls: 'SectionFullException', fields: [{ name: 'message', value: '"CS102 is full"' }, { name: 'capacity', value: '2' }] }
          ] }
        ], ar: 'عند امتلاء الشعبة يُرمى الاستثناء ولا يتغير شيء داخل الكائن.' },
        { type: 'check', q: 'Why is <code>count == ids.length</code> checked <b>before</b> <code>ids[count] = id;</code>?', options: ['To make the code shorter', 'Otherwise ids[count] would throw ArrayIndexOutOfBoundsException, an unclear error, when the section is full', 'Because Java requires every if to come first', 'It does not matter'], answer: 1, explain: 'When count equals the length, ids[count] is outside the array. Checking first lets us throw a clear SectionFullException instead.' },
        { type: 'h', en: 'Part 3: tests first' },
        { type: 'p', en: "Before we write the user part, we test the class, using the <code>check</code> helper and the exception pattern from Lesson 9. If a test fails, we fix the class now, while the program is still small. Notice the duplicate test: the section is already full, but we expect IllegalStateException, because that rule is checked before the full rule." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Section s = new Section("CS102", 2);
                  try {
                      s.register(1001);
                      check("first student is registered", s.isRegistered(1001));
                      s.register(1002);
                      check("count is 2", s.getCount() == 2);
                  } catch (SectionFullException e) {
                      check("section is not full yet", false);
                  }
                  try {
                      s.register(1003);
                      check("third student is refused", false);
                  } catch (SectionFullException e) {
                      check("third student is refused", e.getCapacity() == 2);
                  }
                  try {
                      s.register(1001);
                      check("duplicate is refused", false);
                  } catch (IllegalStateException e) {
                      check("duplicate is refused", true);
                  } catch (SectionFullException e) {
                      check("duplicate is refused", false);
                  }
                  try {
                      s.register(-5);
                      check("negative id is refused", false);
                  } catch (IllegalArgumentException e) {
                      check("negative id is refused", true);
                  } catch (SectionFullException e) {
                      check("negative id is refused", false);
                  }
                  try {
                      new Section("MATH101", 0);
                      check("capacity 0 is refused", false);
                  } catch (IllegalArgumentException e) {
                      check("capacity 0 is refused", true);
                  }
              }

              static void check(String name, boolean ok) {
                  if (ok) {
                      System.out.println("PASS " + name);
                  } else {
                      System.out.println("FAIL " + name);
                  }
              }
          }

          class SectionFullException extends Exception {
              private int capacity;

              public SectionFullException(String message, int capacity) {
                  super(message);
                  this.capacity = capacity;
              }

              public int getCapacity() {
                  return capacity;
              }
          }

          class Section {
              private String code;
              private int[] ids;
              private int count;

              public Section(String code, int capacity) {
                  if (capacity < 1 || capacity > 40) {
                      throw new IllegalArgumentException("capacity must be 1-40");
                  }
                  this.code = code;
                  ids = new int[capacity];
              }

              public void register(int id) throws SectionFullException {
                  if (id <= 0) {
                      throw new IllegalArgumentException("invalid id " + id);
                  }
                  if (isRegistered(id)) {
                      throw new IllegalStateException(id + " is already registered");
                  }
                  if (count == ids.length) {
                      throw new SectionFullException(code + " is full", ids.length);
                  }
                  ids[count] = id;
                  count++;
              }

              public boolean isRegistered(int id) {
                  for (int i = 0; i < count; i++) {
                      if (ids[i] == id) {
                          return true;
                      }
                  }
                  return false;
              }

              public int getCount() {
                  return count;
              }
          }
        `, out: J`
          PASS first student is registered
          PASS count is 2
          PASS third student is refused
          PASS duplicate is refused
          PASS negative id is refused
          PASS capacity 0 is refused
        ` },
        { type: 'p', en: "Every call to <code>register</code> needs a catch for SectionFullException, even when we expect another exception: the compiler insists, because it is checked. All six tests pass, so the class is ready.",
          ar: 'نختبر الصنف قبل بناء جزء المستخدم، فإذا فشل اختبار نصلحه مبكراً.' },
        { type: 'analogy', title: "A pilot's checklist", en: "Before every flight, a pilot goes through the same checklist, even after a thousand flights. Your tests are that checklist. Keep them, and run them again before every new version of your program: a change in one place can break something in another place." },
        { type: 'h', en: 'Part 4: safe commands from the user' },
        { type: 'p', en: "Now the user part. Commands are read word by word with <code>next()</code>: the command, and for <code>REG</code> one more word, the id. Every risky step has its own catch, ordered from specific to general. The loop stops at <code>END</code> or when the input ends." },
        { type: 'steps', title: 'Worked example: the command loop', problem: 'Read commands for a CS102 section with 2 seats. Test with this input: <code>REG 1001</code>, <code>REG abc</code>, <code>REG -4</code>, <code>REG 1001</code>, <code>REG 1002</code>, <code>REG 1003</code>, <code>COUNT</code>, <code>HELLO</code>, <code>END</code>.',
          steps: [
            { en: 'Create the section and a loop that reads one command word at a time.', code: J`
              Section s = new Section("CS102", 2);
              boolean running = true;
              while (running && in.hasNext()) {
                  String cmd = in.next();
                  // ...
              }
              System.out.println("Bye");
            ` },
            { en: 'For <code>REG</code>, read the next word. Put <code>parseInt</code> and <code>register</code> in one try.', code: J`
              String text = in.next();
              try {
                  int id = Integer.parseInt(text);
                  s.register(id);
                  System.out.println("Registered " + id);
              }
            ` },
            { en: 'Add the catch blocks. NumberFormatException must come <b>before</b> IllegalArgumentException, because it is its child. IllegalArgumentException and IllegalStateException are not related, so they can share a multi-catch.', code: J`
              catch (NumberFormatException e) {
                  System.out.println("Error: not a number: " + text);
              } catch (IllegalArgumentException | IllegalStateException e) {
                  System.out.println("Error: " + e.getMessage());
              } catch (SectionFullException e) {
                  System.out.println("Error: " + e.getMessage() + " (capacity " + e.getCapacity() + ")");
              }
            ` },
            { en: 'Handle <code>COUNT</code>, <code>END</code> and unknown commands with if-else.' }
          ],
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    Section s = new Section("CS102", 2);
                    boolean running = true;
                    while (running && in.hasNext()) {
                        String cmd = in.next();
                        if (cmd.equals("REG")) {
                            String text = in.next();
                            try {
                                int id = Integer.parseInt(text);
                                s.register(id);
                                System.out.println("Registered " + id);
                            } catch (NumberFormatException e) {
                                System.out.println("Error: not a number: " + text);
                            } catch (IllegalArgumentException | IllegalStateException e) {
                                System.out.println("Error: " + e.getMessage());
                            } catch (SectionFullException e) {
                                System.out.println("Error: " + e.getMessage() + " (capacity " + e.getCapacity() + ")");
                            }
                        } else if (cmd.equals("COUNT")) {
                            System.out.println("Students: " + s.getCount());
                        } else if (cmd.equals("END")) {
                            running = false;
                        } else {
                            System.out.println("Error: unknown command " + cmd);
                        }
                    }
                    System.out.println("Bye");
                }
            }

            class SectionFullException extends Exception {
                private int capacity;

                public SectionFullException(String message, int capacity) {
                    super(message);
                    this.capacity = capacity;
                }

                public int getCapacity() {
                    return capacity;
                }
            }

            class Section {
                private String code;
                private int[] ids;
                private int count;

                public Section(String code, int capacity) {
                    if (capacity < 1 || capacity > 40) {
                        throw new IllegalArgumentException("capacity must be 1-40");
                    }
                    this.code = code;
                    ids = new int[capacity];
                }

                public void register(int id) throws SectionFullException {
                    if (id <= 0) {
                        throw new IllegalArgumentException("invalid id " + id);
                    }
                    if (isRegistered(id)) {
                        throw new IllegalStateException(id + " is already registered");
                    }
                    if (count == ids.length) {
                        throw new SectionFullException(code + " is full", ids.length);
                    }
                    ids[count] = id;
                    count++;
                }

                public boolean isRegistered(int id) {
                    for (int i = 0; i < count; i++) {
                        if (ids[i] == id) {
                            return true;
                        }
                    }
                    return false;
                }

                public int getCount() {
                    return count;
                }
            }
          `, stdin: 'REG 1001\nREG abc\nREG -4\nREG 1001\nREG 1002\nREG 1003\nCOUNT\nHELLO\nEND', out: J`
            Registered 1001
            Error: not a number: abc
            Error: invalid id -4
            Error: 1001 is already registered
            Registered 1002
            Error: CS102 is full (capacity 2)
            Students: 2
            Error: unknown command HELLO
            Bye
          `, ar: 'كل خطأ في الإدخال يحصل على رسالة واضحة، والبرنامج لا يتوقف أبداً.' },
        { type: 'table', head: ['Idea', 'Where in the program', 'Lesson'], rows: [
          ['reading a crash report', 'when a test or a run fails', '1'],
          ['several catches, specific first, multi-catch', 'the REG command in main', '2, 3'],
          ['safe input', '<code>Integer.parseInt</code> + NumberFormatException', '5'],
          ['throw in a constructor and a method', '<code>Section</code>', '6'],
          ['catch or declare', '<code>register(...) throws SectionFullException</code>', '7'],
          ['custom checked exception with a field', '<code>SectionFullException</code>', '8'],
          ['tests with check', 'Part 3', '9']
        ] },
        { type: 'note', kind: 'tip', en: "Work in this order in your own projects too: rules in the classes, exceptions for broken rules, tests for the classes, and only then the input and output for the user." }
      ],
      mistakes: [
        { title: 'Catching Exception for everything', en: "One <code>catch (Exception e)</code> that prints \"Error\" hides which rule was broken. Keep separate, specific catch blocks with clear messages.", ar: 'لا {{g:تلتقط|تلتقطي}} كل شيء بكتلة واحدة عامة.' },
        { title: 'Checking the rules in main instead of in the class', en: "If main checks the id but another method forgets to, a bad object can appear. The rules belong in the class; main only reports problems to the user." },
        { title: 'Printing inside the class instead of throwing', en: "A class that prints \"Section full\" cannot be reused in another program, for example one with windows and buttons. Throw an exception, and let the caller decide what to show." },
        { title: 'Putting NumberFormatException after IllegalArgumentException', en: "NumberFormatException is a child of IllegalArgumentException, so it must come first, or the code does not compile (<code>has already been caught</code>)." }
      ],
      remember: [
        "Rules live in the class: constructors and methods throw when a rule is broken.",
        "Use a custom checked exception for a normal situation that every caller must plan for, such as a full section.",
        "main reads input safely and turns every exception into a clear message, so the program never crashes.",
        "Order catch blocks from specific to general (NumberFormatException before IllegalArgumentException).",
        "Test the class before you build the user part, and run the tests again after every change."
      ],
      rememberAr: 'القواعد داخل الصنف والاستثناءات تعلن مخالفتها. main تقرأ الإدخال بأمان وتحوّل كل استثناء إلى رسالة واضحة. اختبر{{g:|ي}} الصنف قبل بناء واجهة المستخدم.',
      practice: [
        { t: 'mcq', q: "In the registration program, why is <code>SectionFullException</code> a <b>checked</b> exception?", options: ['Because all custom exceptions must be checked', 'Because a full section is a normal situation, and the compiler should remind every caller to handle it', 'Because it has a field', 'Because it is thrown in a constructor'], answer: 1, explain: "Custom exceptions can be checked or unchecked. We chose checked because every caller of register must plan for a full section.", qAr: 'لماذا جعلنا SectionFullException استثناءً مفحوصاً؟' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] inputs = {"12", "x", "-3", "40"};
                  for (String t : inputs) {
                      try {
                          int seats = Integer.parseInt(t);
                          if (seats <= 0) {
                              throw new IllegalArgumentException("seats must be positive");
                          }
                          System.out.println("OK " + seats);
                      } catch (NumberFormatException e) {
                          System.out.println("not a number");
                      } catch (IllegalArgumentException e) {
                          System.out.println(e.getMessage());
                      }
                  }
              }
          }
        `, answer: J`
          OK 12
          not a number
          seats must be positive
          OK 40
        `, explain: "For \"x\", the first catch matches (a NumberFormatException is also an IllegalArgumentException, but only the first matching block runs). For -3, our own throw is caught by the second block." },
        { t: 'mcq', q: "Which order of catch blocks compiles?", options: ['IllegalArgumentException, then NumberFormatException', 'NumberFormatException, then IllegalArgumentException', 'Exception, then NumberFormatException', 'RuntimeException, then IllegalStateException'], answer: 1, explain: "NumberFormatException is the child, so it must come before its parent IllegalArgumentException." },
        { t: 'fill', q: "Complete the method <code>board</code>: it declares the checked <code>BusFullException</code> and throws it when there are no seats left.", code: J`
          public class Main {
              public static void main(String[] args) {
                  Bus bus = new Bus(1);
                  try {
                      bus.board("Ali");
                      bus.board("Omar");
                  } catch (BusFullException e) {
                      System.out.println(e.getMessage());
                  }
              }
          }

          class BusFullException extends Exception {
              public BusFullException(String message) {
                  super(message);
              }
          }

          class Bus {
              private int seats;
              private int used;

              public Bus(int seats) {
                  this.seats = seats;
              }

              public void board(String name) ___ BusFullException {
                  if (used == seats) {
                      ___ new BusFullException("no seat for " + name);
                  }
                  used++;
                  System.out.println(name + " boarded");
              }
          }
        `, answers: ['throws', 'throw'], explain: "The header declares the checked exception with <code>throws</code>; the body throws it with <code>throw</code>. The program prints \"Ali boarded\" and then \"no seat for Omar\"." },
        { t: 'order', q: "Put the lines in order: register a typed id, with NumberFormatException handled before its parent.", lines: [
          'try {',
          '    int id = Integer.parseInt(text);',
          '    s.register(id);',
          '} catch (NumberFormatException e) {',
          '    System.out.println("Not a number");',
          '} catch (IllegalArgumentException e) {',
          '    System.out.println("Invalid id");',
          '}'
        ], explain: "First convert the text, then register the id. The child NumberFormatException is caught before its parent IllegalArgumentException." },
        { t: 'bug', q: "This program does not compile. Tap a line that causes the problem.", code: J`
          public class Main {
              public static void main(String[] args) {
                  String text = "12b";
                  try {
                      int id = Integer.parseInt(text);
                      if (id <= 0) throw new IllegalArgumentException("invalid id");
                      System.out.println("Registered " + id);
                  } catch (IllegalArgumentException e) {
                      System.out.println("Error: " + e.getMessage());
                  } catch (NumberFormatException e) {
                      System.out.println("Error: not a number");
                  }
              }
          }
        `, bug: [8, 10], fix: J`
          public class Main {
              public static void main(String[] args) {
                  String text = "12b";
                  try {
                      int id = Integer.parseInt(text);
                      if (id <= 0) throw new IllegalArgumentException("invalid id");
                      System.out.println("Registered " + id);
                  } catch (NumberFormatException e) {
                      System.out.println("Error: not a number");
                  } catch (IllegalArgumentException e) {
                      System.out.println("Error: " + e.getMessage());
                  }
              }
          }
        `, hint: 'Who is the parent of NumberFormatException?', explain: "IllegalArgumentException is the parent of NumberFormatException. With the parent first, the child's block could never run, so the compiler reports <code>has already been caught</code>. Swap the two catch blocks." },
        { t: 'bug', q: "A section has 2 seats. Registering a third student should throw <code>SectionFullException</code>, but the program crashes with <code>ArrayIndexOutOfBoundsException</code>. Tap the line with the bug.", code: J`
          public void register(int id) throws SectionFullException {
              ids[count] = id;
              if (count == ids.length) {
                  throw new SectionFullException("section is full");
              }
              count++;
          }
        `, bug: 2, fix: J`
          public void register(int id) throws SectionFullException {
              if (count == ids.length) {
                  throw new SectionFullException("section is full");
              }
              ids[count] = id;
              count++;
          }
        `, hint: 'What is the value of count when the section is full? Which line uses it first?', explain: "When the section is full, count is 2 and <code>ids[2]</code> is outside the array, so line 2 throws before the check is reached. Check the rule first, then store." },
        { t: 'code', q: "A small hall has 5 seats, numbered 1 to 5. Complete <code>SeatTakenException</code> (checked, with a message) and <code>Hall.book(seat)</code>: a seat outside 1–5 throws <code>IllegalArgumentException(\"no seat \" + seat)</code>; a seat that is already booked throws <code>SeatTakenException(\"seat \" + seat + \" is taken\")</code>. In <code>main</code>, handle <code>BOOK x</code>: print <code>Booked seat x</code>, or <code>Error: not a number: x</code>, or <code>Error: </code> followed by the exception message. <code>FREE</code> and <code>END</code> are already done. No prompts.", qAr: 'أكمل{{g:|ي}} حجز المقاعد مع استثناء خاص، ولا {{g:تسمح|تسمحي}} للبرنامج بالتوقف.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    Hall hall = new Hall(5);
                    boolean running = true;
                    while (running && in.hasNext()) {
                        String cmd = in.next();
                        if (cmd.equals("BOOK")) {
                            String text = in.next();
                            // parse, book, and catch three kinds of problems
                        } else if (cmd.equals("FREE")) {
                            System.out.println("Free seats: " + hall.freeSeats());
                        } else if (cmd.equals("END")) {
                            running = false;
                        }
                    }
                    System.out.println("Bye");
                }
            }

            class SeatTakenException extends Exception {
                // constructor with a message
            }

            class Hall {
                private boolean[] taken;

                public Hall(int seats) {
                    taken = new boolean[seats];
                }

                public void book(int seat) {
                    // seat outside 1..length: IllegalArgumentException
                    // seat already taken: SeatTakenException
                    taken[seat - 1] = true;
                }

                public int freeSeats() {
                    int free = 0;
                    for (boolean t : taken) {
                        if (!t) {
                            free++;
                        }
                    }
                    return free;
                }
            }
          `,
          tests: [
            { stdin: 'BOOK 2\nBOOK 2\nBOOK 9\nBOOK x\nFREE\nEND', expected: 'Booked seat 2\nError: seat 2 is taken\nError: no seat 9\nError: not a number: x\nFree seats: 4\nBye' },
            { stdin: 'BOOK 1\nBOOK 5\nFREE\nEND', expected: 'Booked seat 1\nBooked seat 5\nFree seats: 3\nBye' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    Hall hall = new Hall(5);
                    boolean running = true;
                    while (running && in.hasNext()) {
                        String cmd = in.next();
                        if (cmd.equals("BOOK")) {
                            String text = in.next();
                            try {
                                int seat = Integer.parseInt(text);
                                hall.book(seat);
                                System.out.println("Booked seat " + seat);
                            } catch (NumberFormatException e) {
                                System.out.println("Error: not a number: " + text);
                            } catch (IllegalArgumentException e) {
                                System.out.println("Error: " + e.getMessage());
                            } catch (SeatTakenException e) {
                                System.out.println("Error: " + e.getMessage());
                            }
                        } else if (cmd.equals("FREE")) {
                            System.out.println("Free seats: " + hall.freeSeats());
                        } else if (cmd.equals("END")) {
                            running = false;
                        }
                    }
                    System.out.println("Bye");
                }
            }

            class SeatTakenException extends Exception {
                public SeatTakenException(String message) {
                    super(message);
                }
            }

            class Hall {
                private boolean[] taken;

                public Hall(int seats) {
                    taken = new boolean[seats];
                }

                public void book(int seat) throws SeatTakenException {
                    if (seat < 1 || seat > taken.length) {
                        throw new IllegalArgumentException("no seat " + seat);
                    }
                    if (taken[seat - 1]) {
                        throw new SeatTakenException("seat " + seat + " is taken");
                    }
                    taken[seat - 1] = true;
                }

                public int freeSeats() {
                    int free = 0;
                    for (boolean t : taken) {
                        if (!t) {
                            free++;
                        }
                    }
                    return free;
                }
            }
          `,
          hint: "book needs <code>throws SeatTakenException</code>. In main, catch NumberFormatException first, then IllegalArgumentException, then SeatTakenException.",
          explain: "Seat x is stored at index x - 1. The range check comes first, so <code>taken[seat - 1]</code> is never outside the array." }
      ]
    }
  ],

  quiz: [
    { t: 'mcq', q: "An exception is thrown and no method catches it. What happens?", options: ['Java ignores it and continues', 'The program stops and prints the exception type, the message and the stack trace', 'The compiler shows an error', 'The method starts again'], answer: 1, explain: "An uncaught exception travels up to main and beyond: the program crashes and prints the crash report." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              int[] a = {5, 10};
              try {
                  System.out.println(a[0]);
                  System.out.println(a[2]);
                  System.out.println("x");
              } catch (ArrayIndexOutOfBoundsException e) {
                  System.out.println("index");
              } finally {
                  System.out.println("end");
              }
          }
      }
    `, answer: J`
      5
      index
      end
    `, explain: "a[0] prints 5. a[2] throws, so \"x\" is skipped. The catch prints index, and finally always prints end." },
    { t: 'mcq', q: "Which of these exceptions is <b>checked</b>?", options: ['NullPointerException', 'IOException', 'ArithmeticException', 'IllegalArgumentException'], answer: 1, explain: "IOException is an Exception but not a RuntimeException, so the compiler requires catch or declare. The others are RuntimeExceptions." },
    { t: 'output', q: "Follow the exception and the finally block. What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              try {
                  step(0);
              } catch (ArithmeticException e) {
                  System.out.println("main: " + e.getMessage());
              }
          }

          static void step(int n) {
              try {
                  System.out.println("before");
                  System.out.println(10 / n);
              } finally {
                  System.out.println("step finally");
              }
          }
      }
    `, answer: J`
      before
      step finally
      main: / by zero
    `, explain: "10 / 0 throws inside step. step has no catch, but its finally still runs before the exception goes up to main, which catches it." },
    { t: 'mcq', q: "Which order of catch blocks compiles?", options: ['<code>catch (Exception e)</code>, then <code>catch (ArithmeticException e)</code>', '<code>catch (RuntimeException e)</code>, then <code>catch (NullPointerException e)</code>', '<code>catch (NumberFormatException e)</code>, then <code>catch (RuntimeException e)</code>', '<code>catch (IllegalArgumentException e)</code>, then <code>catch (NumberFormatException e)</code>'], answer: 2, explain: "Specific before general. NumberFormatException is below RuntimeException in the family tree. The other three put a parent before its child." },
    { t: 'bug', q: "<code>setMark(150)</code> should throw an exception, but it stores 150 without any error. Tap the line with the bug.", code: J`
      class Student {
          private int mark;

          public void setMark(int mark) {
              if (mark < 0 && mark > 100) {
                  throw new IllegalArgumentException("mark must be 0-100");
              }
              this.mark = mark;
          }
      }
    `, bug: 5, fix: J`
      class Student {
          private int mark;

          public void setMark(int mark) {
              if (mark < 0 || mark > 100) {
                  throw new IllegalArgumentException("mark must be 0-100");
              }
              this.mark = mark;
          }
      }
    `, hint: 'Can a number be less than 0 and greater than 100 at the same time?', explain: "No number is both below 0 <b>and</b> above 100, so the condition is always false and nothing is ever thrown. A bad mark is below 0 <b>or</b> above 100: use <code>||</code>." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Wallet w = new Wallet(30);
              int[] prices = {12, 25, 10};
              for (int p : prices) {
                  try {
                      w.pay(p);
                      System.out.println("paid " + p);
                  } catch (NotEnoughException e) {
                      System.out.println("short by " + e.getShort());
                  }
              }
          }
      }

      class NotEnoughException extends Exception {
          private int shortBy;

          public NotEnoughException(int shortBy) {
              super("not enough money");
              this.shortBy = shortBy;
          }

          public int getShort() { return shortBy; }
      }

      class Wallet {
          private int money;

          public Wallet(int money) { this.money = money; }

          public void pay(int price) throws NotEnoughException {
              if (price > money) {
                  throw new NotEnoughException(price - money);
              }
              money -= price;
          }
      }
    `, answer: J`
      paid 12
      short by 7
      paid 10
    `, explain: "30 - 12 = 18 left. 25 is more than 18, so the exception carries 25 - 18 = 7 and nothing is paid. 10 is less than 18, so it is paid." },
    { t: 'mcq', q: "What is the difference between <code>throw</code> and <code>throws</code>?", options: ['They are the same', '<code>throw</code> throws an exception object now; <code>throws</code> in a method header declares exceptions the method may throw', '<code>throws</code> throws an object; <code>throw</code> is written in the header', '<code>throw</code> is only for checked exceptions'], answer: 1, explain: "Body: <code>throw new X(...)</code>. Header: <code>void m() throws X</code>." },
    { t: 'mcq', q: "Delivery is free for orders of <b>100 SAR or more</b>. Which pair of inputs is the best boundary test?", options: ['50 and 150', '99 and 100', '0 and 1000', '-1 and 1'], answer: 1, explain: "99 is the last value that pays for delivery, 100 is the first free one. A mistake between <code>&gt;</code> and <code>&gt;=</code> shows up exactly there." },
    { t: 'bug', q: "This program does not compile. Tap a line that causes the problem.", code: J`
      public class Main {
          public static void main(String[] args) {
              System.out.println(seats(3));
          }

          static int seats(int n) {
              if (n < 1) {
                  throw new Exception("at least one seat");
              }
              return n;
          }
      }
    `, bug: [6, 8], fix: J`
      public class Main {
          public static void main(String[] args) {
              System.out.println(seats(3));
          }

          static int seats(int n) {
              if (n < 1) {
                  throw new IllegalArgumentException("at least one seat");
              }
              return n;
          }
      }
    `, hint: 'Is Exception checked or unchecked?', explain: "<code>Exception</code> is checked, and <code>seats</code> neither catches nor declares it: <code>unreported exception</code>. For a bad argument, throw the unchecked <code>IllegalArgumentException</code> instead (adding <code>throws Exception</code> would also compile, but then main would have to catch it)." },
    { t: 'mcq', q: "In NetBeans, how do you make the program pause at a chosen line so that you can look at the variables?", options: ['Add a comment on that line', 'Click the line number to set a breakpoint, then use Debug File', 'Press Run (F6) twice', 'Write throws on that line'], answer: 1, explain: "A breakpoint pauses the program in the debugger. Then Step Over (F8) and Step Into (F7) move on line by line." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              String[] data = {"8", null, "4"};
              int i = 0;
              while (i <= 3) {
                  try {
                      System.out.println(data[i].length());
                  } catch (NullPointerException | ArrayIndexOutOfBoundsException e) {
                      System.out.println(e.getClass().getSimpleName());
                  }
                  i++;
              }
          }
      }
    `, answer: J`
      1
      NullPointerException
      1
      ArrayIndexOutOfBoundsException
    `, explain: "\"8\" and \"4\" have length 1. data[1] is null, so length() throws NullPointerException. data[3] does not exist. The multi-catch handles both, and getSimpleName() shows the real class of each exception object." }
  ],

  lab: {
    t: 'code',
    title: 'Safe bank account',
    q: "<b>Mini project: a safe bank account.</b> Read commands from the input and apply them to one bank account. The balance starts at 0. All amounts are whole riyals (int).<br><b>Classes:</b> <code>InsufficientFundsException</code> extends <code>Exception</code>, with a constructor <code>(String message, int missing)</code> and <code>getMissing()</code>. <code>Account</code> has <code>deposit(int amount)</code>, <code>withdraw(int amount)</code> and <code>getBalance()</code>. Both deposit and withdraw throw <code>IllegalArgumentException(\"amount must be positive\")</code> when the amount is 0 or less. <code>withdraw</code> throws <code>InsufficientFundsException</code> when the amount is more than the balance (missing = amount - balance).<br><b>Input:</b> words separated by spaces or new lines. The commands are <code>DEPOSIT x</code>, <code>WITHDRAW x</code> (x is always the next word), <code>BALANCE</code> and <code>END</code>.<br><b>Output:</b> exactly one line for each command:<ul><li><code>Deposited x. Balance: B</code> or <code>Withdrew x. Balance: B</code></li><li><code>Balance: B</code> for BALANCE</li><li><code>Error: not a number: x</code> when x is not a whole number</li><li><code>Error: amount must be positive</code> when x is 0 or less</li><li><code>Error: insufficient funds, missing M</code> when there is not enough money</li><li><code>Error: unknown command W</code> for any other word W</li></ul>Stop at <code>END</code> or at the end of the input, and then print <code>Goodbye</code>. The program must never crash. No prompts.<br><b>Tip:</b> work in small steps: (1) the exception class, (2) the Account class, (3) the command loop, (4) the catch blocks, from specific to general.",
    qAr: "مشروع مصغر: حساب بنكي آمن يقرأ الأوامر وينفذها، ويطبع سطراً واحداً لكل أمر، ولا يتوقف أبداً مهما كان الإدخال.",
    starter: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Scanner in = new Scanner(System.in);
              Account acc = new Account();
              boolean running = true;
              while (running && in.hasNext()) {
                  String cmd = in.next();
                  // DEPOSIT x, WITHDRAW x, BALANCE, END, unknown command
              }
              System.out.println("Goodbye");
          }
      }

      class InsufficientFundsException extends Exception {
          // field missing, constructor (message, missing), getMissing()
      }

      class Account {
          private int balance;

          public void deposit(int amount) {
              // refuse amount <= 0
          }

          public void withdraw(int amount) {
              // refuse amount <= 0, then refuse amount > balance
          }

          public int getBalance() {
              return balance;
          }
      }
    `,
    tests: [
      { stdin: J`
        DEPOSIT 100
        WITHDRAW 30
        BALANCE
        WITHDRAW 500
        END
      `, expected: J`
        Deposited 100. Balance: 100
        Withdrew 30. Balance: 70
        Balance: 70
        Error: insufficient funds, missing 430
        Goodbye
      ` },
      { stdin: J`
        DEPOSIT abc
        DEPOSIT -20
        WITHDRAW 0
        HELLO
        DEPOSIT 50
        BALANCE
        END
      `, expected: J`
        Error: not a number: abc
        Error: amount must be positive
        Error: amount must be positive
        Error: unknown command HELLO
        Deposited 50. Balance: 50
        Balance: 50
        Goodbye
      ` },
      { stdin: J`
        DEPOSIT 40
        WITHDRAW 40
        WITHDRAW 1
      `, expected: J`
        Deposited 40. Balance: 40
        Withdrew 40. Balance: 0
        Error: insufficient funds, missing 1
        Goodbye
      ` }
    ],
    solution: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Scanner in = new Scanner(System.in);
              Account acc = new Account();
              boolean running = true;
              while (running && in.hasNext()) {
                  String cmd = in.next();
                  if (cmd.equals("DEPOSIT") || cmd.equals("WITHDRAW")) {
                      String text = in.next();
                      try {
                          int amount = Integer.parseInt(text);
                          if (cmd.equals("DEPOSIT")) {
                              acc.deposit(amount);
                              System.out.println("Deposited " + amount + ". Balance: " + acc.getBalance());
                          } else {
                              acc.withdraw(amount);
                              System.out.println("Withdrew " + amount + ". Balance: " + acc.getBalance());
                          }
                      } catch (NumberFormatException e) {
                          System.out.println("Error: not a number: " + text);
                      } catch (IllegalArgumentException e) {
                          System.out.println("Error: " + e.getMessage());
                      } catch (InsufficientFundsException e) {
                          System.out.println("Error: insufficient funds, missing " + e.getMissing());
                      }
                  } else if (cmd.equals("BALANCE")) {
                      System.out.println("Balance: " + acc.getBalance());
                  } else if (cmd.equals("END")) {
                      running = false;
                  } else {
                      System.out.println("Error: unknown command " + cmd);
                  }
              }
              System.out.println("Goodbye");
          }
      }

      class InsufficientFundsException extends Exception {
          private int missing;

          public InsufficientFundsException(String message, int missing) {
              super(message);
              this.missing = missing;
          }

          public int getMissing() {
              return missing;
          }
      }

      class Account {
          private int balance;

          public void deposit(int amount) {
              if (amount <= 0) {
                  throw new IllegalArgumentException("amount must be positive");
              }
              balance += amount;
          }

          public void withdraw(int amount) throws InsufficientFundsException {
              if (amount <= 0) {
                  throw new IllegalArgumentException("amount must be positive");
              }
              if (amount > balance) {
                  throw new InsufficientFundsException("insufficient funds", amount - balance);
              }
              balance -= amount;
          }

          public int getBalance() {
              return balance;
          }
      }
    `,
    hint: "Read the amount as a word with <code>in.next()</code>, then convert it with <code>Integer.parseInt</code> inside try. Catch NumberFormatException <b>before</b> IllegalArgumentException (it is its child). <code>withdraw</code> needs <code>throws InsufficientFundsException</code>.",
    explain: "The rules live in Account: it refuses bad amounts with IllegalArgumentException and a too-large withdrawal with the custom checked InsufficientFundsException, which carries the missing amount. main only turns each exception into one exact line, so no input can crash the program. Test 3 checks the boundary: withdrawing exactly the whole balance is allowed."
  },

  cheats: [
    { code: J`
      try {
          int share = total / friends;
      } catch (ArithmeticException e) {
          System.out.println("Problem: " + e.getMessage());
      }
    `, note: 'Run risky code; catch runs only if that exception is thrown; then the program continues' },
    { code: J`e.getMessage()`, note: 'The message stored in the exception object (may be null)' },
    { code: J`
      } catch (NumberFormatException e) { ...
      } catch (IllegalArgumentException e) { ...
      } catch (Exception e) { ... }
    `, note: 'Several catches: only the first match runs; order them from specific to general' },
    { code: J`catch (NumberFormatException | ArithmeticException e)`, note: 'Multi-catch: one block for two unrelated types' },
    { code: J`finally { System.out.println("Done"); }`, note: 'Always runs: after try, after catch, before a crash, even after return' },
    { code: J`try (Scanner in = new Scanner(new File("a.txt"))) { ... }`, note: 'try-with-resources: the resource (AutoCloseable) is closed automatically' },
    { code: J`throw new IllegalArgumentException("price must be positive");`, note: 'Refuse a bad value; the method stops at this line' },
    { code: J`static void load() throws FileNotFoundException`, note: 'Declare a checked exception; the caller must catch or declare it' },
    { code: J`
      class SeatTakenException extends Exception {
          public SeatTakenException(String message) { super(message); }
      }
    `, note: 'Custom checked exception (extend RuntimeException for an unchecked one)' },
    { code: J`int n = Integer.parseInt(text);`, note: 'Text to int; throws NumberFormatException for "12a" or "3.5"' },
    { code: J`while (!in.hasNextInt()) { in.next(); }`, note: 'Skip words that are not whole numbers before nextInt()' },
    { code: J`catch (InputMismatchException e) { in.nextLine(); }`, note: 'After a failed nextInt(), remove the bad input or the loop never ends' },
    { code: J`
      try {
          grade(-1);
          check("-1 refused", false);
      } catch (IllegalArgumentException e) {
          check("-1 refused", true);
      }
    `, note: 'Test that an exception is thrown' }
  ],

  glossary: [
    { term: 'Exception', ar: 'استثناء', def: 'An object that describes a problem that happened while a program was running.' },
    { term: 'Run-time error', ar: 'خطأ وقت التشغيل', def: 'An error that appears only while the program runs, with certain data; in Java it is reported as an exception.' },
    { term: 'Stack trace', ar: 'أثر المكدس (سلسلة الاستدعاءات)', def: 'The list of method calls printed with an uncaught exception, newest first, with file names and line numbers.' },
    { term: 'Call stack', ar: 'مكدس الاستدعاءات', def: 'The pile of methods that are running at a moment; the newest call is on top.' },
    { term: 'try block', ar: 'كتلة try', def: 'A block of code that might throw an exception; it is followed by catch and/or finally.' },
    { term: 'catch block', ar: 'كتلة catch', def: 'A block that runs only when an exception of its type (or a child type) is thrown in the try block.' },
    { term: 'finally block', ar: 'كتلة finally', def: 'A block that always runs after try (and catch), even after an exception or a return.' },
    { term: 'try-with-resources', ar: 'try مع الموارد', def: 'A try that opens resources in parentheses and closes them automatically at the end of the block.' },
    { term: 'throw', ar: 'رمي (throw)', def: 'The statement that throws an exception object now, for example throw new IllegalArgumentException("...").' },
    { term: 'throws clause', ar: 'عبارة throws', def: 'The part of a method header that declares which checked exceptions the method may throw.' },
    { term: 'Propagation', ar: 'انتشار الاستثناء', def: 'The way an uncaught exception travels from a method to its caller, up the call stack, until a matching catch is found.' },
    { term: 'Checked exception', ar: 'استثناء مفحوص', def: 'An Exception that is not a RuntimeException; the compiler requires the code to catch it or declare it.' },
    { term: 'Unchecked exception', ar: 'استثناء غير مفحوص', def: 'A RuntimeException (or Error) and its children; the compiler does not require catch or declare.' },
    { term: 'Custom exception', ar: 'استثناء مخصص', def: 'An exception class you write yourself by extending Exception or RuntimeException.' },
    { term: 'Multi-catch', ar: 'الالتقاط المتعدد', def: 'One catch block for several unrelated exception types, written with |.' },
    { term: 'Test case', ar: 'حالة اختبار', def: 'One input together with the result you expect, decided from the rules.' },
    { term: 'Boundary case', ar: 'حالة حدّية', def: 'A test value exactly at the edge of a rule, such as 59 and 60 for "60 or more".' },
    { term: 'Debugging', ar: 'تتبع الأخطاء وإصلاحها', def: 'Finding and fixing the cause of a bug, for example with print tracing or a debugger.' },
    { term: 'Breakpoint', ar: 'نقطة توقف', def: 'A marked line where the debugger pauses the program so that you can inspect the variables.' }
  ]
});
