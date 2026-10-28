JP.unit({
  course: 'cs101',
  n: 8,
  title: 'Text Files Input/Output',
  titleAr: 'إدخال وإخراج الملفات النصية',
  intro: "Data in variables and arrays disappears when a program ends. Text files let a program save results permanently and read data prepared by people or by other programs. In this unit you will use the File class, write text with PrintWriter, read it back with Scanner, loop with hasNext methods, handle FileNotFoundException, and process data files to compute totals and averages.",
  introAr: "البيانات في المتغيرات تضيع عند انتهاء البرنامج، أما الملفات النصية فتحفظها بشكل دائم. ستتعلم الصنف File والكتابة بـ PrintWriter والقراءة بـ Scanner ومعالجة الاستثناءات وحساب المجاميع والمتوسطات من ملفات البيانات.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'The File class and writing with PrintWriter',
      titleAr: 'الصنف File والكتابة باستخدام PrintWriter',
      minutes: 45,
      body: [
        { type: 'h', en: 'Why use files?' },
        { type: 'p', en: "Keyboard input and screen output are temporary. A <b>text file</b> stored on disk keeps data after the program ends: student marks, a sales log, a configuration. Java's text-file tools live in the <code>java.io</code> package, and reading uses the familiar <code>Scanner</code> from <code>java.util</code>.",
          ar: "الملف النصي يحفظ البيانات على القرص بعد انتهاء البرنامج." },
        { type: 'h', en: 'The File class' },
        { type: 'p', en: "A <code>File</code> object represents a <b>file name or path</b>, such as <code>new File(\"grades.txt\")</code>. Creating a <code>File</code> object does <b>not</b> create a file on disk and does not open it; it only lets you ask questions about it or pass it to a reader or writer. A relative name like <code>\"grades.txt\"</code> refers to the program's current working directory.",
          ar: "كائن File يمثل اسم الملف ومساره فقط، ولا ينشئ ملفًا على القرص." },
        { type: 'table', head: ['Method', 'Returns'], rows: [
          ['<code>exists()</code>', 'true if the file or directory exists'],
          ['<code>getName()</code>', 'the name, e.g. <code>grades.txt</code>'],
          ['<code>getAbsolutePath()</code>', 'the full path on this computer'],
          ['<code>length()</code>', 'size in bytes (0 if it does not exist)'],
          ['<code>isDirectory()</code>', 'true if it is a folder'],
          ['<code>delete()</code>', 'deletes the file; true if it succeeded']
        ] },
        { type: 'code', run: true, code: J`
          import java.io.File;
          import java.io.PrintWriter;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  File file = new File("grades.txt");
                  if (file.exists()) {
                      file.delete();                 // start from a clean state
                  }
                  System.out.println("Before writing: " + file.exists());

                  PrintWriter output = new PrintWriter(file);
                  output.println("CS101 Grades");
                  output.println("Ali 85");
                  output.println("Sara 92");
                  output.close();

                  System.out.println("After writing: " + file.exists());
                  System.out.println("Name: " + file.getName());
                  System.out.println("Is a directory? " + file.isDirectory());

                  Scanner input = new Scanner(file);
                  System.out.println("Contents:");
                  while (input.hasNextLine()) {
                      System.out.println(input.nextLine());
                  }
                  input.close();
              }
          }
        `, out: J`
          Before writing: false
          After writing: true
          Name: grades.txt
          Is a directory? false
          Contents:
          CS101 Grades
          Ali 85
          Sara 92
        ` },
        { type: 'note', kind: 'tip', en: "On Windows, a backslash in a Java string must be doubled: <code>new File(\"C:\\\\cs101\\\\grades.txt\")</code>. A forward slash (<code>\"C:/cs101/grades.txt\"</code>) also works and is easier. In labs, prefer a relative name such as <code>\"grades.txt\"</code>." },
        { type: 'h', en: 'Writing with PrintWriter' },
        { type: 'p', en: "<code>PrintWriter</code> (in <code>java.io</code>) writes text to a file using the same methods you already know from <code>System.out</code>: <code>print</code>, <code>println</code> and <code>printf</code>. You can create it from a <code>File</code> object or directly from a file name. If the file does not exist it is created; if it exists, its old contents are <b>erased</b>.",
          ar: "PrintWriter يكتب في الملف بالدوال print وprintln وprintf، ويمسح محتوى الملف القديم إن وُجد." },
        { type: 'code', run: true, code: J`
          import java.io.File;
          import java.io.PrintWriter;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  String[] items = {"Coffee", "Sandwich", "Water"};
                  double[] prices = {12.5, 18.25, 2.0};

                  PrintWriter output = new PrintWriter("receipt.txt");
                  for (int i = 0; i < items.length; i++) {
                      output.printf("%-10s%7.2f%n", items[i], prices[i]);
                  }
                  output.close();

                  Scanner input = new Scanner(new File("receipt.txt"));
                  while (input.hasNextLine()) {
                      System.out.println(input.nextLine());
                  }
                  input.close();
              }
          }
        `, out: J`
          Coffee      12.50
          Sandwich    18.25
          Water        2.00
        ` },
        { type: 'p', en: "Why <code>throws Exception</code> in the header of <code>main</code>? The <code>PrintWriter</code> and <code>Scanner(File)</code> constructors may throw a <code>FileNotFoundException</code> (for example, the folder does not exist or the file is read-only). This is a <b>checked exception</b>: Java refuses to compile unless you either declare it with <code>throws</code> or catch it with <code>try-catch</code> (next lesson)." },
        { type: 'note', kind: 'warn', en: "Always call <code>close()</code> when you finish writing. PrintWriter keeps text in a memory buffer; if the program ends without closing, some or all of the text may never reach the file.",
          ar: "لا تنسَ close() وإلا قد لا تُحفظ البيانات في الملف." },
        { type: 'h', en: 'Writing again erases the old contents' },
        { type: 'code', run: true, code: J`
          import java.io.File;
          import java.io.PrintWriter;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  PrintWriter out = new PrintWriter("notes.txt");
                  out.println("first version");
                  out.close();

                  out = new PrintWriter("notes.txt");   // opens the same file again
                  out.println("second version");
                  out.close();

                  Scanner in = new Scanner(new File("notes.txt"));
                  while (in.hasNextLine()) {
                      System.out.println(in.nextLine());
                  }
                  in.close();
              }
          }
        `, out: J`
          second version
        ` },
        { type: 'note', kind: 'exam', en: "<code>new PrintWriter(\"notes.txt\")</code> <b>overwrites</b> an existing file. To <b>append</b> to the end instead, use <code>new PrintWriter(new FileWriter(\"notes.txt\", true))</code> (import <code>java.io.FileWriter</code>)." },
        { type: 'list', items: [
          "<code>import java.io.*;</code> for <code>File</code>, <code>PrintWriter</code>, <code>FileNotFoundException</code>.",
          "Create: <code>PrintWriter out = new PrintWriter(\"name.txt\");</code>",
          "Write: <code>out.print(...)</code>, <code>out.println(...)</code>, <code>out.printf(...)</code>.",
          "Finish: <code>out.close();</code>",
          "Add <code>throws Exception</code> to the method header (or use try-catch)."
        ] }
      ],
      practice: [
        { t: 'mcq', q: "What does <code>File f = new File(\"data.txt\");</code> do?",
          options: ['Creates an empty file named data.txt on disk', 'Creates an object that represents the name data.txt; no file is created', 'Opens data.txt for reading', 'Throws an exception if data.txt does not exist'], answer: 1,
          explain: "A File object is only a name/path. Files are created by writers such as PrintWriter." },
        { t: 'mcq', q: "A file <code>log.txt</code> already contains 50 lines. A program runs <code>PrintWriter p = new PrintWriter(\"log.txt\"); p.println(\"new\"); p.close();</code>. What does the file contain now?",
          options: ['51 lines: the old 50 plus \"new\"', 'Only the line \"new\"', 'The 50 old lines (unchanged)', 'Nothing — an exception is thrown'], answer: 1,
          explain: "Opening a PrintWriter on an existing file erases its contents. Use FileWriter with <code>true</code> to append." },
        { t: 'fill', q: "Complete the code that writes a city name to a file and saves it.", code: J`
          PrintWriter out = new ___("cities.txt");
          out.println("Riyadh");
          out.___();
        `, answers: ['PrintWriter', 'close'],
          explain: "Create a PrintWriter for the file and close it so the buffered text is written to disk." },
        { t: 'output', q: "What is the output?", code: J`
          import java.io.File;
          import java.io.PrintWriter;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  PrintWriter out = new PrintWriter("data.txt");
                  out.print("Java");
                  out.print(" is");
                  out.println(" fun");
                  out.println(2025);
                  out.close();

                  Scanner in = new Scanner(new File("data.txt"));
                  while (in.hasNextLine()) {
                      System.out.println("> " + in.nextLine());
                  }
                  in.close();
              }
          }
        `, answer: J`
          > Java is fun
          > 2025
        `, explain: "<code>print</code> does not end the line, so the first line of the file is \"Java is fun\". The second line is \"2025\". Each line read is printed after \"> \"." },
        { t: 'mcq', q: "Why does <code>main</code> need <code>throws Exception</code> (or a try-catch) when it creates a <code>PrintWriter</code>?",
          options: ['Because every method that prints needs it', 'Because the constructor may throw FileNotFoundException, which is a checked exception', 'Because PrintWriter is in java.util', 'It is not needed; it only makes the program faster'], answer: 1,
          explain: "Checked exceptions must be either declared or caught; otherwise the program does not compile." },
        { t: 'order', q: "Arrange the statements so the program saves a line to <code>log.txt</code> and then displays it.", lines: [
          'PrintWriter out = new PrintWriter("log.txt");',
          'out.println("Login: Ali");',
          'out.close();',
          'Scanner in = new Scanner(new File("log.txt"));',
          'System.out.println(in.nextLine());',
          'in.close();'
        ], explain: "Write, then close (so the data is saved), then open the file for reading, read, and close the Scanner." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Reading files with Scanner and processing data',
      titleAr: 'قراءة الملفات بـ Scanner ومعالجة البيانات',
      minutes: 55,
      body: [
        { type: 'h', en: 'Reading with Scanner' },
        { type: 'p', en: "To read a text file, create a <code>Scanner</code> from a <code>File</code> object: <code>new Scanner(new File(\"temps.txt\"))</code>. After that, everything works as with keyboard input: <code>next()</code>, <code>nextInt()</code>, <code>nextDouble()</code>, <code>nextLine()</code>. Tokens are separated by spaces and line breaks.",
          ar: "للقراءة من ملف: new Scanner(new File(\"name.txt\")) ثم نستخدم الدوال المعتادة مثل nextInt." },
        { type: 'code', run: true, code: J`
          import java.io.File;
          import java.io.PrintWriter;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  PrintWriter out = new PrintWriter("temps.txt");
                  out.println("31.5 29.0 35.5");
                  out.println("33.0 28.5");
                  out.close();

                  Scanner in = new Scanner(new File("temps.txt"));
                  double sum = 0;
                  int count = 0;
                  while (in.hasNextDouble()) {
                      sum += in.nextDouble();
                      count++;
                  }
                  in.close();

                  System.out.println("Readings: " + count);
                  System.out.println("Sum: " + sum);
                  System.out.printf("Average: %.2f%n", sum / count);
              }
          }
        `, out: J`
          Readings: 5
          Sum: 157.5
          Average: 31.50
        ` },
        { type: 'note', kind: 'exam', en: "<code>new Scanner(\"temps.txt\")</code> (without <code>new File</code>) does <b>not</b> open the file — it scans the 9-character string <code>temps.txt</code> itself. This compiles, so it is a classic exam trap.",
          ar: "Scanner(\"name.txt\") يقرأ النص نفسه وليس الملف؛ يجب استخدام new File." },
        { type: 'h', en: 'Loops with hasNext methods' },
        { type: 'p', en: "You usually do not know how much data a file contains, so you read in a <code>while</code> loop that asks first whether more data is available:" },
        { type: 'table', head: ['Method', 'true when…', 'Typical loop'], rows: [
          ['<code>hasNext()</code>', 'another token (word) exists', '<code>while (in.hasNext()) { String w = in.next(); }</code>'],
          ['<code>hasNextInt()</code>', 'the next token is a valid int', '<code>while (in.hasNextInt()) { sum += in.nextInt(); }</code>'],
          ['<code>hasNextDouble()</code>', 'the next token is a valid double', '<code>while (in.hasNextDouble()) { ... }</code>'],
          ['<code>hasNextLine()</code>', 'another line exists', '<code>while (in.hasNextLine()) { String line = in.nextLine(); }</code>']
        ] },
        { type: 'p', en: "When each line holds a record (a name followed by a score), read the fields of one record per loop iteration:" },
        { type: 'code', run: true, code: J`
          import java.io.File;
          import java.io.PrintWriter;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  PrintWriter out = new PrintWriter("students.txt");
                  out.println("Ali 85");
                  out.println("Sara 92");
                  out.println("Omar 67");
                  out.println("Lina 74");
                  out.close();

                  Scanner in = new Scanner(new File("students.txt"));
                  int total = 0;
                  int count = 0;
                  String best = "";
                  int bestScore = -1;
                  while (in.hasNext()) {
                      String name = in.next();
                      int score = in.nextInt();
                      total += score;
                      count++;
                      if (score > bestScore) {
                          bestScore = score;
                          best = name;
                      }
                  }
                  in.close();

                  System.out.println("Students: " + count);
                  System.out.println("Average: " + (double) total / count);
                  System.out.println("Top: " + best + " (" + bestScore + ")");
              }
          }
        `, out: J`
          Students: 4
          Average: 79.5
          Top: Sara (92)
        ` },
        { type: 'note', kind: 'warn', en: "<code>hasNextInt()</code> stops the loop at the first token that is not an int (for example the word <code>abc</code> or the value <code>7.5</code>). Make sure the loop test matches the data in the file." },
        { type: 'h', en: 'Handling FileNotFoundException with try-catch' },
        { type: 'p', en: "Instead of <code>throws Exception</code>, you can catch the exception and react gracefully, for example by showing a friendly message. Below, the program writes <code>grades.txt</code> but then mistypes the name when reading." },
        { type: 'code', run: true, code: J`
          import java.io.File;
          import java.io.FileNotFoundException;
          import java.io.PrintWriter;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) {
                  try {
                      PrintWriter out = new PrintWriter("grades.txt");
                      out.println("Ali 85");
                      out.close();
                      System.out.println("File saved.");

                      Scanner in = new Scanner(new File("grade.txt"));   // typo!
                      System.out.println(in.nextLine());
                      in.close();
                  } catch (FileNotFoundException e) {
                      System.out.println("Sorry, the file was not found.");
                  }
                  System.out.println("Program continues.");
              }
          }
        `, out: J`
          File saved.
          Sorry, the file was not found.
          Program continues.
        ` },
        { type: 'p', en: "When the exception is thrown, the rest of the <code>try</code> block is skipped, the <code>catch</code> block runs, and execution continues after the try-catch statement.",
          ar: "عند حدوث الاستثناء يُترك باقي try وينفَّذ catch ثم يكمل البرنامج." },
        { type: 'h', en: 'try-with-resources (brief)' },
        { type: 'p', en: "Java can close files for you. Declare the writer or scanner in parentheses after <code>try</code>; it is closed automatically when the block ends, even if an exception occurs." },
        { type: 'code', run: true, code: J`
          import java.io.File;
          import java.io.PrintWriter;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  try (PrintWriter out = new PrintWriter("prices.txt")) {
                      out.println(12);
                      out.println(30);
                      out.println(8);
                  }   // out.close() is called automatically here

                  int max = 0;
                  try (Scanner in = new Scanner(new File("prices.txt"))) {
                      while (in.hasNextInt()) {
                          int p = in.nextInt();
                          if (p > max) max = p;
                      }
                  }
                  System.out.println("Most expensive: " + max);
              }
          }
        `, out: J`
          Most expensive: 30
        ` },
        { type: 'h', en: 'Processing a data file: reading one file, writing another' },
        { type: 'code', run: true, code: J`
          import java.io.File;
          import java.io.PrintWriter;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  // 1) create the input data file: student id and mark
                  PrintWriter data = new PrintWriter("marks.txt");
                  data.println("201 78");
                  data.println("202 45");
                  data.println("203 91");
                  data.close();

                  // 2) read it and write a report file
                  Scanner in = new Scanner(new File("marks.txt"));
                  PrintWriter report = new PrintWriter("report.txt");
                  while (in.hasNextInt()) {
                      int id = in.nextInt();
                      int mark = in.nextInt();
                      if (mark >= 60) {
                          report.println(id + " PASS");
                      } else {
                          report.println(id + " FAIL");
                      }
                  }
                  in.close();
                  report.close();

                  // 3) display the report
                  Scanner show = new Scanner(new File("report.txt"));
                  while (show.hasNextLine()) {
                      System.out.println(show.nextLine());
                  }
                  show.close();
              }
          }
        `, out: J`
          201 PASS
          202 FAIL
          203 PASS
        ` }
      ],
      practice: [
        { t: 'output', q: "What is the output?", code: J`
          import java.io.File;
          import java.io.PrintWriter;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  PrintWriter out = new PrintWriter("nums.txt");
                  out.println("10 20 abc 30");
                  out.close();

                  Scanner in = new Scanner(new File("nums.txt"));
                  int sum = 0;
                  while (in.hasNextInt()) {
                      sum += in.nextInt();
                  }
                  in.close();
                  System.out.println("Sum = " + sum);
              }
          }
        `, answer: 'Sum = 30',
          explain: "The loop adds 10 and 20, then <code>hasNextInt()</code> is false at <code>abc</code>, so the loop stops before reaching 30.",
          explainAr: "تتوقف الحلقة عند أول كلمة ليست عددًا صحيحًا." },
        { t: 'mcq', q: "Assume <code>scores.txt</code> exists. What does this print?", code: J`
          Scanner in = new Scanner("scores.txt");
          System.out.println(in.next());
        `, options: ['The first word of the file', 'scores.txt', 'A FileNotFoundException', 'Nothing'], answer: 1,
          explain: "Without <code>new File(...)</code>, the Scanner reads the string itself, whose first token is <code>scores.txt</code>." },
        { t: 'fill', q: "Complete the code that reads the first line of <code>data.txt</code> and handles a missing file.", code: J`
          try {
              Scanner in = new Scanner(new ___("data.txt"));
              System.out.println(in.nextLine());
              in.close();
          } ___ (FileNotFoundException e) {
              System.out.println("Missing file");
          }
        `, answers: ['File', 'catch'],
          explain: "A file Scanner needs a File object, and the handler block starts with <code>catch</code>." },
        { t: 'output', q: "What is the output?", code: J`
          import java.io.File;
          import java.io.PrintWriter;
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) throws Exception {
                  PrintWriter out = new PrintWriter("poem.txt");
                  out.println("Code every day");
                  out.println("Learn Java");
                  out.println("Have fun");
                  out.close();

                  Scanner in = new Scanner(new File("poem.txt"));
                  int lines = 0;
                  while (in.hasNextLine()) {
                      String line = in.nextLine();
                      lines++;
                      System.out.println(lines + ": " + line.length());
                  }
                  in.close();
              }
          }
        `, answer: J`
          1: 14
          2: 10
          3: 8
        `, explain: "Each line is read whole (spaces included): \"Code every day\" has 14 characters, \"Learn Java\" 10, \"Have fun\" 8." },
        { t: 'mcq', q: "What is the main benefit of <code>try (Scanner in = new Scanner(new File(\"a.txt\"))) { ... }</code>?",
          options: ['It makes reading faster', 'The Scanner is closed automatically when the block ends', 'It creates a.txt if it is missing', 'It removes the need to import java.io.File'], answer: 1,
          explain: "try-with-resources closes the resource automatically, even if an exception happens." },
        { t: 'code', q: "Read an integer <code>n</code> and then <code>n</code> integers from the keyboard. Write them to a file <code>numbers.txt</code>, one per line, and close it. Then open <code>numbers.txt</code> with a Scanner, read all the numbers back, and print two lines: <code>Even: E</code> (how many are even) and <code>Sum: S</code>. No prompts.",
          qAr: "اكتب الأعداد في ملف ثم اقرأها منه واطبع عدد الأعداد الزوجية ومجموعها.",
          starter: J`
            import java.io.File;
            import java.io.PrintWriter;
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) throws Exception {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    // 1) write n numbers to numbers.txt
                    // 2) read numbers.txt and compute even count and sum
                }
            }
          `,
          solution: J`
            import java.io.File;
            import java.io.PrintWriter;
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) throws Exception {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    PrintWriter out = new PrintWriter("numbers.txt");
                    for (int i = 0; i < n; i++) {
                        out.println(input.nextInt());
                    }
                    out.close();

                    Scanner file = new Scanner(new File("numbers.txt"));
                    int even = 0;
                    int sum = 0;
                    while (file.hasNextInt()) {
                        int x = file.nextInt();
                        if (x % 2 == 0) even++;
                        sum += x;
                    }
                    file.close();
                    System.out.println("Even: " + even);
                    System.out.println("Sum: " + sum);
                }
            }
          `,
          tests: [
            { stdin: '5\n4 7 10 3 6', expected: 'Even: 3\nSum: 30' },
            { stdin: '3\n1 3 5', expected: 'Even: 0\nSum: 9' },
            { stdin: '4\n-2 0 8 11', expected: 'Even: 3\nSum: 17' }
          ],
          hint: "Use two different Scanner variables: one for System.in and one for the file. Close the PrintWriter before you open the file for reading.",
          explain: "The file must be closed after writing, otherwise the reader may find it empty. A hasNextInt loop then reads however many numbers are in the file." }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: "Which class is used to <b>write</b> text to a file in this unit?",
      options: ['Scanner', 'PrintWriter', 'File', 'System.out'], answer: 1,
      explain: "PrintWriter writes text with print/println/printf; Scanner reads." },
    { t: 'mcq', q: "Which import is needed to use the <code>File</code> class?",
      options: ['<code>import java.util.File;</code>', '<code>import java.io.File;</code>', '<code>import java.lang.File;</code>', 'No import is needed'], answer: 1,
      explain: "File, PrintWriter and FileNotFoundException are in java.io; Scanner is in java.util." },
    { t: 'output', q: "What is the output?", code: J`
      import java.io.File;
      import java.io.PrintWriter;
      import java.util.Scanner;

      public class Main {
          public static void main(String[] args) throws Exception {
              PrintWriter out = new PrintWriter("values.txt");
              out.println("5 8");
              out.println("2");
              out.close();

              Scanner in = new Scanner(new File("values.txt"));
              int total = 0;
              while (in.hasNextInt()) {
                  int v = in.nextInt();
                  total += v * v;
              }
              in.close();
              System.out.println(total);
          }
      }
    `, answer: '93', explain: "The tokens 5, 8 and 2 are read regardless of line breaks: 25 + 64 + 4 = 93." },
    { t: 'mcq', q: "Which Scanner method returns true if there is another <b>line</b> to read?",
      options: ['<code>hasNext()</code>', '<code>hasNextLine()</code>', '<code>nextLine()</code>', '<code>hasLine()</code>'], answer: 1,
      explain: "hasNextLine() tests for a line; nextLine() actually reads it." },
    { t: 'output', q: "What is the output?", code: J`
      import java.io.File;
      import java.io.PrintWriter;
      import java.util.Scanner;

      public class Main {
          public static void main(String[] args) throws Exception {
              PrintWriter out = new PrintWriter("names.txt");
              out.println("Ali Ahmed 90");
              out.println("Nora 85");
              out.close();

              Scanner in = new Scanner(new File("names.txt"));
              int tokens = 0;
              while (in.hasNext()) {
                  in.next();
                  tokens++;
              }
              in.close();
              System.out.println("Tokens: " + tokens);
          }
      }
    `, answer: 'Tokens: 5', explain: "next() reads tokens separated by whitespace: Ali, Ahmed, 90, Nora, 85." },
    { t: 'mcq', q: "FileNotFoundException is a <b>checked</b> exception. What does that mean?",
      options: ['It can never happen at run time', 'The compiler requires it to be caught or declared with throws', 'It is checked by the operating system only', 'It is automatically ignored'], answer: 1,
      explain: "For checked exceptions the code does not compile unless they are handled (try-catch) or declared (throws)." },
    { t: 'output', q: "What is the output?", code: J`
      import java.io.File;
      import java.io.PrintWriter;
      import java.util.Scanner;

      public class Main {
          public static void main(String[] args) throws Exception {
              PrintWriter out = new PrintWriter("list.txt");
              out.println("A");
              out.close();
              out = new PrintWriter("list.txt");
              out.println("B");
              out.println("C");
              out.close();

              Scanner in = new Scanner(new File("list.txt"));
              while (in.hasNextLine()) {
                  System.out.println(in.nextLine());
              }
              in.close();
          }
      }
    `, answer: J`
      B
      C
    `, explain: "The second PrintWriter erases the file, so line A is gone." },
    { t: 'mcq', q: "A program writes 3 lines with PrintWriter but never calls <code>close()</code>. What is the most likely result?",
      options: ['The lines are always saved correctly', 'Some or all of the text may be missing from the file', 'A compile error', 'The file is deleted'], answer: 1,
      explain: "PrintWriter buffers output; close() flushes the buffer to the file." },
    { t: 'output', q: "Assume no file named <code>not_there.txt</code> exists. What is the output?", code: J`
      import java.io.File;
      import java.io.FileNotFoundException;
      import java.io.PrintWriter;
      import java.util.Scanner;

      public class Main {
          public static void main(String[] args) {
              try {
                  PrintWriter out = new PrintWriter("ok.txt");
                  out.println("saved");
                  out.close();
                  System.out.println("A");
                  Scanner in = new Scanner(new File("not_there.txt"));
                  System.out.println("B");
              } catch (FileNotFoundException e) {
                  System.out.println("C");
              }
              System.out.println("D");
          }
      }
    `, answer: J`
      A
      C
      D
    `, explain: "Writing ok.txt succeeds (A). Opening the missing file throws, so B is skipped, the catch prints C, and the program continues with D." }
  ],
  lab: {
    t: 'code',
    q: "<b>Daily sales file.</b> Read <code>n</code> and then <code>n</code> daily sales amounts (integers) from the keyboard. Write them to <code>sales.txt</code>, one line per day in the form <code>Day 1 250</code> (the word Day, the day number starting at 1, the amount). Close the file. Then <b>read sales.txt back</b> and print exactly three lines (no prompts):<br><code>Total: T</code><br><code>Average: A</code> — two decimals with <code>printf</code><br><code>Best day: D</code> — the day number with the highest sales (the earliest day if there is a tie).",
    qAr: "اكتب مبيعات كل يوم في ملف ثم اقرأ الملف واطبع المجموع والمتوسط وأفضل يوم.",
    starter: J`
      import java.io.File;
      import java.io.PrintWriter;
      import java.util.Scanner;

      public class Main {
          public static void main(String[] args) throws Exception {
              Scanner input = new Scanner(System.in);
              int n = input.nextInt();
              // 1) write "Day i amount" lines to sales.txt
              // 2) read sales.txt: skip the word, read the day number and the amount
              // 3) print Total, Average and Best day
          }
      }
    `,
    solution: J`
      import java.io.File;
      import java.io.PrintWriter;
      import java.util.Scanner;

      public class Main {
          public static void main(String[] args) throws Exception {
              Scanner input = new Scanner(System.in);
              int n = input.nextInt();
              PrintWriter out = new PrintWriter("sales.txt");
              for (int day = 1; day <= n; day++) {
                  out.println("Day " + day + " " + input.nextInt());
              }
              out.close();

              Scanner file = new Scanner(new File("sales.txt"));
              int total = 0;
              int count = 0;
              int bestDay = 0;
              int bestAmount = Integer.MIN_VALUE;
              while (file.hasNext()) {
                  file.next();                 // the word "Day"
                  int day = file.nextInt();
                  int amount = file.nextInt();
                  total += amount;
                  count++;
                  if (amount > bestAmount) {
                      bestAmount = amount;
                      bestDay = day;
                  }
              }
              file.close();

              System.out.println("Total: " + total);
              System.out.printf("Average: %.2f%n", (double) total / count);
              System.out.println("Best day: " + bestDay);
          }
      }
    `,
    tests: [
      { stdin: '5\n200 180 320 150 300', expected: 'Total: 1150\nAverage: 230.00\nBest day: 3' },
      { stdin: '3\n100 100 50', expected: 'Total: 250\nAverage: 83.33\nBest day: 1' },
      { stdin: '1\n75', expected: 'Total: 75\nAverage: 75.00\nBest day: 1' }
    ],
    hint: "When reading, each record has three tokens: call next() for the word Day, then nextInt() twice. Use > (not >=) so the earliest best day is kept.",
    explain: "This is the complete file workflow: produce a data file, close it, then process it record by record to compute a total, an average and a maximum."
  },
  cheats: [
    { code: J`import java.io.*;  import java.util.Scanner;`, note: 'File, PrintWriter, FileNotFoundException / Scanner' },
    { code: J`File f = new File("data.txt");`, note: 'Represents a file name; does not create the file' },
    { code: J`f.exists()  f.getName()  f.length()  f.delete()`, note: 'Useful File methods' },
    { code: J`PrintWriter out = new PrintWriter("data.txt");`, note: 'Create/overwrite a file for writing' },
    { code: J`out.println(x);  out.printf("%.2f%n", v);  out.close();`, note: 'Write, format, and always close' },
    { code: J`Scanner in = new Scanner(new File("data.txt"));`, note: 'Open a file for reading (do not forget new File)' },
    { code: J`while (in.hasNextInt()) { sum += in.nextInt(); }`, note: 'Read numbers until the data ends' },
    { code: J`while (in.hasNextLine()) { String line = in.nextLine(); }`, note: 'Read line by line' },
    { code: J`public static void main(String[] args) throws Exception`, note: 'Declare checked exceptions' },
    { code: J`try { ... } catch (FileNotFoundException e) { ... }`, note: 'Handle a missing file' },
    { code: J`try (PrintWriter out = new PrintWriter("a.txt")) { ... }`, note: 'try-with-resources: closes automatically' }
  ],
  glossary: [
    { term: 'Text file', ar: 'ملف نصي', def: 'A file that stores characters that people can read in a text editor.' },
    { term: 'File class', ar: 'الصنف File', def: 'java.io class that represents a file or directory path name.' },
    { term: 'PrintWriter', ar: 'PrintWriter', def: 'java.io class that writes text to a file with print, println and printf.' },
    { term: 'Token', ar: 'وحدة نصية', def: 'A piece of input separated by whitespace, read by next(), nextInt() and similar methods.' },
    { term: 'Checked exception', ar: 'استثناء مُتحقَّق منه', def: 'An exception the compiler forces you to catch or declare, such as FileNotFoundException.' },
    { term: 'FileNotFoundException', ar: 'استثناء عدم وجود الملف', def: 'Thrown when a file cannot be opened for reading or writing.' },
    { term: 'throws clause', ar: 'عبارة throws', def: 'Part of a method header that declares exceptions the method may pass to its caller.' },
    { term: 'try-catch', ar: 'جملة try-catch', def: 'Runs code in try; if a matching exception occurs, the catch block handles it.' },
    { term: 'try-with-resources', ar: 'try مع الموارد', def: 'A try statement that automatically closes the resources declared in its parentheses.' },
    { term: 'Buffer', ar: 'ذاكرة مؤقتة', def: 'Memory where output is collected before being written to the file; close() empties it to disk.' }
  ]
});
