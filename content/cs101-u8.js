JP.unit({
  course: 'cs101',
  n: 8,
  title: 'Text Files Input/Output',
  titleAr: 'إدخال وإخراج الملفات النصية',
  intro: "When a program ends, everything in its variables is lost. A text file keeps your data on the disk, so you can use it again tomorrow. In this unit you will save text into a file, read it back, and process the data (totals, averages, the best value). You will also learn what to do when a file is missing, how to add to a file without erasing it, how to read comma-separated records, how to search a file, and how to write a neat report. The unit ends with a small project. In every program, we first write the file and then read it back, so you can see the whole story in one run.",
  introAr: 'عند انتهاء البرنامج تضيع كل البيانات في المتغيرات. الملف النصي يحفظ بياناتك على القرص لتستخدمها لاحقاً. ستتعلم حفظ النص في ملف وقراءته ومعالجة البيانات (مجاميع ومتوسطات)، وماذا تفعل عندما يكون الملف مفقوداً، والإضافة إلى ملف، وقراءة ملفات CSV، والبحث، وكتابة تقرير مرتب، ثم مشروعاً صغيراً. في كل برنامج نكتب الملف أولاً ثم نقرؤه.',
  lessons: [
    // ===================================================== Lesson 1
    {
      title: 'Saving text in a file with PrintWriter',
      titleAr: 'حفظ النص في ملف باستخدام PrintWriter',
      minutes: 25,
      body: [
        { type: 'h', en: 'Why do we need files?' },
        { type: 'p', en: 'Variables live in the memory of the computer. When the program stops, the memory is cleared and your data is gone. Think of a student who types 30 marks and then closes the program: tomorrow, everything must be typed again. A <b>text file</b> solves this. It is stored on the disk, so the data stays after the program ends.',
          ar: 'المتغيرات تُمسح عند انتهاء البرنامج. الملف النصي يُحفظ على القرص وتبقى بياناته.' },
        { type: 'p', en: 'Files are everywhere in real life. A teacher keeps the mark sheet of a whole class in a file. A small shop keeps its daily sales in riyals. A phone keeps your daily step count. A text file is the simplest kind: it holds only letters, digits and spaces, line after line. You can open it in any text editor (such as Notepad) and read it. Its name usually ends with <code>.txt</code>, for example <code>grades.txt</code>.' },
        { type: 'analogy', title: 'A notebook', en: 'Your memory is like a whiteboard: when you leave the room, someone erases it. A file is like a notebook. You write in it, close it, and next week the words are still there. <code>PrintWriter</code> is the pen you use to write in the notebook.', ar: 'الذاكرة مثل سبورة تُمسح، والملف مثل دفتر تبقى كتابته.' },
        { type: 'h', en: 'The pen: PrintWriter' },
        { type: 'p', en: 'In Java, <code>PrintWriter</code> writes text into a file. The good news: you already know how to use it. It has the same methods as <code>System.out</code>: <code>print</code>, <code>println</code> and <code>printf</code>. The only difference is where the text goes: into the file, not onto the screen.' },
        { type: 'code', code: J`
PrintWriter out = new PrintWriter("grades.txt");
out.println("Ali 85");
out.close();` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['PrintWriter out = new PrintWriter("grades.txt");', 'Open the notebook "grades.txt" and take the pen. If the file does not exist, Java creates it. The name <code>out</code> is our choice.'],
          ['out.println("Ali 85");', 'Write the line <code>Ali 85</code> in the file and go to the next line.'],
          ['out.close();', 'Close the notebook. This saves everything. Never forget it.']
        ], ar: 'ننشئ PrintWriter باسم الملف، نكتب بـ println، ثم نغلق بـ close().' },
        { type: 'p', en: 'The file name is a normal String in double quotes. Java makes the file in the same folder as your program (in the online editor, in its own small folder). Keep names simple: small letters, no spaces, and the ending <code>.txt</code>.' },
        { type: 'memory', title: 'The pen, the waiting area and the file',
          en: 'The variable <code>out</code> does not hold the file. It <b>refers to</b> (points to) a PrintWriter object, and that object is connected to the file <code>grades.txt</code> on the disk. Press Next and watch where the text goes after each line. The text first waits inside the PrintWriter, and reaches the disk only at <code>close()</code>.',
          code: J`
PrintWriter out = new PrintWriter("grades.txt");
out.println("CS101 Grades");
out.println("Ali 85");
out.close();`,
          frames: [
            { label: 'After <code>PrintWriter out = new PrintWriter("grades.txt");</code> The file is created, empty.',
              vars: [{ name: 'out', type: 'PrintWriter', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'PrintWriter', fields: [{ name: 'writes to', ref: 'B' }, { name: 'waiting text', value: '(nothing)' }] },
                { id: 'B', cls: 'grades.txt (on the disk)', fields: [{ name: 'content', value: '(empty)' }] }] },
            { label: 'After <code>out.println("CS101 Grades");</code> The line waits in the PrintWriter.',
              vars: [{ name: 'out', type: 'PrintWriter', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'PrintWriter', fields: [{ name: 'writes to', ref: 'B' }, { name: 'waiting text', value: 'CS101 Grades' }] },
                { id: 'B', cls: 'grades.txt (on the disk)', fields: [{ name: 'content', value: '(empty)' }] }] },
            { label: 'After <code>out.println("Ali 85");</code> Two lines are waiting. The disk file is still empty.',
              vars: [{ name: 'out', type: 'PrintWriter', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'PrintWriter', fields: [{ name: 'writes to', ref: 'B' }, { name: 'waiting text', value: 'CS101 Grades / Ali 85' }] },
                { id: 'B', cls: 'grades.txt (on the disk)', fields: [{ name: 'content', value: '(empty)' }] }] },
            { label: 'After <code>out.close();</code> The waiting text goes to the disk. The pen is closed and cannot write any more.',
              vars: [{ name: 'out', type: 'PrintWriter', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'PrintWriter (closed)', fields: [{ name: 'writes to', ref: 'B' }, { name: 'waiting text', value: '(nothing)' }] },
                { id: 'B', cls: 'grades.txt (on the disk)', fields: [{ name: 'line 1', value: 'CS101 Grades' }, { name: 'line 2', value: 'Ali 85' }] }] }
          ],
          ar: 'المتغير out يشير إلى كائن PrintWriter المتصل بالملف. النص ينتظر داخله، ولا يصل إلى القرص إلا عند close().' },
        { type: 'check', q: 'Where does <code>out.println("Hi");</code> send the text when <code>out</code> is a PrintWriter for <code>grades.txt</code>?', options: ['To the screen', 'Into the file grades.txt', 'To the keyboard', 'Nowhere'], answer: 1, explain: 'A PrintWriter sends text to its file.', ar: 'النص يذهب إلى الملف وليس إلى الشاشة.' },
        { type: 'h', en: 'A complete program: write, then read back' },
        { type: 'p', en: 'To prove that the file really has our text, the program below also reads the file back and prints it on the screen. Do not worry about the reading part now. We will explain it step by step in Lesson 3. For now, focus on the writing part, and just copy the lines <code>throws Exception</code> and the imports.' },
        { type: 'code', run: true, code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("grades.txt");
        out.println("CS101 Grades");
        out.println("Ali 85");
        out.println("Sara 92");
        out.close();

        // reading back (explained in Lesson 3)
        Scanner in = new Scanner(new File("grades.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        in.close();
    }
}`, out: "CS101 Grades\nAli 85\nSara 92" },
        { type: 'note', kind: 'warn', en: 'Always call <code>close()</code> when you finish writing. A PrintWriter first collects text in a small waiting area (a buffer). Closing sends everything to the file. If you forget it, some or all of your text may never reach the file.', ar: 'لا تنسَ close() وإلا قد لا تُحفظ البيانات.' },
        { type: 'check', q: 'What happens if you forget <code>out.close()</code>?', options: ['Nothing, the file is always complete', 'Some text may be missing from the file', 'The computer shuts down', 'The file is renamed'], answer: 1, explain: 'The buffer may not be written to the file.' },
        { type: 'p', en: 'Let us trace the complete program above line by line. A programmer always asks two questions: "What is waiting in the PrintWriter?" and "What is really in the file on the disk?"' },
        { type: 'table', head: ['Line that just ran', 'Waiting in the PrintWriter', 'In grades.txt on the disk'], rows: [
          ['<code>new PrintWriter("grades.txt")</code>', '(nothing)', '(empty file)'],
          ['<code>out.println("CS101 Grades")</code>', 'CS101 Grades', '(empty file)'],
          ['<code>out.println("Ali 85")</code>', 'CS101 Grades, Ali 85', '(empty file)'],
          ['<code>out.println("Sara 92")</code>', 'CS101 Grades, Ali 85, Sara 92', '(empty file)'],
          ['<code>out.close()</code>', '(nothing)', '3 lines: CS101 Grades / Ali 85 / Sara 92'],
          ['<code>new Scanner(new File("grades.txt"))</code>', '-', 'the Scanner starts reading at line 1']
        ] },
        { type: 'p', en: 'This is why the order matters so much: write, then <b>close</b>, then read. If the Scanner opened the file before <code>close()</code>, it would find an empty file.', ar: 'الترتيب مهم: نكتب ثم نغلق ثم نقرأ.' },
        { type: 'h', en: 'print, println and printf' },
        { type: 'p', en: 'With <code>print</code> the text stays on the same line. With <code>println</code> the line ends. With <code>printf</code> you can align columns, for example for a receipt.' },
        { type: 'p', en: 'You can write variables and calculations too, exactly as you do on the screen. The value is turned into text and written into the file.' },
        { type: 'code', code: J`
String name = "Sara";
int mark = 92;
out.println(name + " " + mark);         // the file gets: Sara 92
out.println("Bonus: " + (mark + 5));    // the file gets: Bonus: 97
out.print(10);
out.print(20);                          // the file gets: 1020 (same line!)` },
        { type: 'lines', rows: [
          ['out.println(name + " " + mark);', 'Joins the name, a space and the mark into one String, writes it, and ends the line.'],
          ['out.println("Bonus: " + (mark + 5));', 'The brackets make Java add first (97), then join the number to the text.'],
          ['out.print(10); out.print(20);', '<code>print</code> never ends the line, so the two numbers touch: <code>1020</code>. Add a space or use <code>println</code>.']
        ], ar: 'نكتب المتغيرات في الملف كما نطبعها على الشاشة. print لا تنهي السطر.' },
        { type: 'note', kind: 'exam', en: 'One program can use both: <code>System.out.println</code> writes on the <b>screen</b>, <code>out.println</code> writes into the <b>file</b>. In exam questions, look at the name before the dot to know where the text goes.', ar: 'انظر{{g:|ي}} إلى الاسم قبل النقطة: System.out للشاشة، وout للملف.' },
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
}`, out: "Coffee      12.50\nSandwich    18.25\nWater        2.00" },
        { type: 'p', en: '<code>%-10s</code> means: a text, left-aligned, 10 characters wide. <code>%7.2f</code> means: a decimal number, 7 characters wide, with 2 decimals. <code>%n</code> is a new line.' },
        { type: 'h', en: 'Writing again erases the old text' },
        { type: 'p', en: 'If the file already exists, <code>new PrintWriter("notes.txt")</code> empties it first. It is like a new page: the old words are gone. This is useful when you want a fresh file, but dangerous when you do not expect it.' },
        { type: 'code', run: true, code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("notes.txt");
        out.println("first version");
        out.close();

        out = new PrintWriter("notes.txt");   // same file again
        out.println("second version");
        out.close();

        Scanner in = new Scanner(new File("notes.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        in.close();
    }
}`, out: "second version" },
        { type: 'analogy', title: 'A fresh page', en: 'Each time you open the notebook with <code>new PrintWriter</code>, you tear out all the old pages and start from a blank one.' },
        { type: 'steps', title: 'Worked example: a shopping list', problem: 'Save three items in a file called <code>list.txt</code>, one item per line, and show the file content.',
          steps: [
            { en: 'Open the file for writing.', code: 'PrintWriter out = new PrintWriter("list.txt");' },
            { en: 'Write each item with println (one per line).', code: J`
out.println("Milk");
out.println("Bread");
out.println("Dates");` },
            { en: 'Close the file so the data is saved.', code: 'out.close();' },
            { en: 'Open the file for reading and print every line (explained in Lesson 3).' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("list.txt");
        out.println("Milk");
        out.println("Bread");
        out.println("Dates");
        out.close();

        Scanner in = new Scanner(new File("list.txt"));
        while (in.hasNextLine()) {
            System.out.println("- " + in.nextLine());
        }
        in.close();
    }
}`, out: "- Milk\n- Bread\n- Dates", ar: 'كتبنا ثلاثة أسطر في الملف ثم قرأناها وطبعناها مع شرطة.' },
        { type: 'p', en: 'Writing line by line by hand is fine for three lines. But what about a whole week, or a class of 30 students? You already know the answer from Units 5 and 7: keep the data in an <b>array</b> and write it with a <b>loop</b>. The loop calls <code>println</code> once per value.' },
        { type: 'steps', title: 'Worked example: a week of steps', problem: 'Your phone counted your steps for five days. Save them in <code>steps.txt</code>: a title line first, then one line per day such as <code>Sun 8500</code>. Print how many days were saved, then show the file.',
          steps: [
            { en: 'Keep the data in two arrays of the same length: the day names and the step counts.', code: J`
int[] steps = {8500, 10200, 6400, 12000, 7300};
String[] days = {"Sun", "Mon", "Tue", "Wed", "Thu"};` },
            { en: 'Open the file and write the title line once, before the loop.', code: J`
PrintWriter out = new PrintWriter("steps.txt");
out.println("My steps this week");` },
            { en: 'A for loop writes one line per day: the day name, a space, the steps.', code: J`
for (int i = 0; i < steps.length; i++) {
    out.println(days[i] + " " + steps[i]);
}` },
            { en: 'Close the file. Now it has 1 + 5 = 6 lines. Print a message on the screen with <code>System.out</code>.', code: J`
out.close();
System.out.println("Saved " + steps.length + " days.");` },
            { en: 'Read the file back and print every line, to check it.' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        int[] steps = {8500, 10200, 6400, 12000, 7300};
        String[] days = {"Sun", "Mon", "Tue", "Wed", "Thu"};

        PrintWriter out = new PrintWriter("steps.txt");
        out.println("My steps this week");
        for (int i = 0; i < steps.length; i++) {
            out.println(days[i] + " " + steps[i]);
        }
        out.close();
        System.out.println("Saved " + steps.length + " days.");

        Scanner in = new Scanner(new File("steps.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        in.close();
    }
}`, out: "Saved 5 days.\nMy steps this week\nSun 8500\nMon 10200\nTue 6400\nWed 12000\nThu 7300", ar: 'حلقة for تكتب سطراً لكل يوم من المصفوفة، ثم نغلق الملف ونقرؤه للتأكد.' }
      ],
      mistakes: [
        { title: 'Forgetting close()', en: 'Without <code>close()</code>, the text may not reach the file.', code: J`
PrintWriter out = new PrintWriter("a.txt");
out.println("Hi");
// no out.close();  -> file may be empty` },
        { title: 'Forgetting the import', en: 'Add <code>import java.io.PrintWriter;</code> (and <code>java.io.File</code>, <code>java.util.Scanner</code> when you use them) at the top.' },
        { title: 'Writing a number but forgetting the line break', en: '<code>print</code> does not end the line, so values join together: <code>out.print(5); out.print(6);</code> writes <code>56</code>.' },
        { title: 'Opening the same file twice by mistake', en: 'The second <code>new PrintWriter</code> erases the first text.' }
      ],
      remember: [
        'A <b>text file</b> keeps data after the program ends.',
        '<code>new PrintWriter("name.txt")</code> opens the file for writing (creates it, or empties it).',
        'Use <code>print</code>, <code>println</code>, <code>printf</code> exactly like <code>System.out</code>.',
        '<b>Always</b> finish with <code>out.close();</code>',
        'The order is always: write, <b>close</b>, then read.',
        'For now, add <code>throws Exception</code> to the header of <code>main</code>.'
      ],
      rememberAr: 'الملف النصي يحفظ البيانات. PrintWriter يكتب في الملف بنفس دوال System.out. أغلق الملف دائماً بـ close(). ونضيف throws Exception إلى main.',
      practice: [
        { t: 'mcq', q: 'Why do we save data in a file?', options: ['To make the program shorter', 'So the data stays after the program ends', 'To avoid using variables', 'To make the screen brighter'], answer: 1, explain: 'Files are stored on the disk, so they are kept.' },
        { t: 'output', q: 'What is the output?', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("t.txt");
        out.println("Riyadh");
        out.println("Jeddah");
        out.close();

        Scanner in = new Scanner(new File("t.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        in.close();
    }
}`, answer: "Riyadh\nJeddah", explain: 'Two lines are written, then both are read and printed.' },
        { t: 'mcq', q: 'A file <code>log.txt</code> already contains 50 lines. A program runs <code>PrintWriter p = new PrintWriter("log.txt"); p.println("new"); p.close();</code>. What does the file contain now?', options: ['51 lines: the old 50 plus "new"', 'Only the line "new"', 'The 50 old lines (unchanged)', 'Nothing, an exception is thrown'], answer: 1, explain: 'Opening a PrintWriter on an existing file erases its contents.' },
        { t: 'fill', q: 'Complete the code that writes a city name to a file and saves it.', code: J`
PrintWriter out = new ___("cities.txt");
out.println("Riyadh");
out.___();`, answers: ['PrintWriter', 'close'], explain: 'Create a PrintWriter for the file and close it so the buffered text is written.' },
        { t: 'output', q: 'What is the output?', code: J`
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
}`, answer: "> Java is fun\n> 2025", explain: 'print does not end the line, so the first line is "Java is fun". The second line is 2025.' },
        { t: 'order', q: 'Order the statements so the program saves a line in <code>log.txt</code> and then shows it.', lines: [
          'PrintWriter out = new PrintWriter("log.txt");',
          'out.println("Login: Ali");',
          'out.close();',
          'Scanner in = new Scanner(new File("log.txt"));',
          'System.out.println(in.nextLine());',
          'in.close();'
        ], explain: 'Write, close (so the data is saved), then open for reading, read, close.' },
        { t: 'code', q: 'Read a name and a score from the keyboard (for example <code>Ali 85</code>). Write one line <code>name: score</code> into <code>results.txt</code> and close the file. Then read the file back and print that line. No prompts.<br>Example: input <code>Ali 85</code> prints <code>Ali: 85</code>', qAr: 'اكتب الاسم والعلامة في ملف ثم اقرأ السطر وأظهره.',
          starter: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        String name = input.next();
        int score = input.nextInt();
        // 1) write the line to results.txt and close
        // 2) read it back and print it
    }
}`, tests: [ { stdin: 'Ali 85', expected: 'Ali: 85' }, { stdin: 'Sara 92', expected: 'Sara: 92' } ],
          solution: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        String name = input.next();
        int score = input.nextInt();

        PrintWriter out = new PrintWriter("results.txt");
        out.println(name + ": " + score);
        out.close();

        Scanner in = new Scanner(new File("results.txt"));
        System.out.println(in.nextLine());
        in.close();
    }
}`, hint: 'Use two different Scanner variables: one for the keyboard (input) and one for the file (in).', explain: 'We write, close, then open the same file for reading.' },
        { t: 'bug', q: 'This program should print the two cities it saved, but it prints <b>nothing</b>. Tap the line with the bug.', qAr: 'البرنامج لا يطبع شيئاً. ابحث{{g:|ي}} عن السطر الخطأ.',
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("cities.txt");
        out.println("Riyadh");
        out.println("Abha");
        Scanner in = new Scanner(new File("cities.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        out.close();
    }
}`, bug: 13,
          fix: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("cities.txt");
        out.println("Riyadh");
        out.println("Abha");
        out.close();
        Scanner in = new Scanner(new File("cities.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        in.close();
    }
}`,
          hint: 'When does the waiting text really reach the disk?',
          explain: 'Line 13 closes the writer too late. When the Scanner opens the file (line 9), "Riyadh" and "Abha" are still waiting inside the PrintWriter, so the file on the disk is empty and the loop prints nothing. Move <code>out.close();</code> up, before the Scanner is created. The fixed program prints Riyadh and Abha (and also closes the Scanner).',
          explainAr: 'أُغلق الكاتب بعد القراءة، فكان الملف فارغاً وقت القراءة. يجب إغلاقه قبل فتح Scanner.' },
        { t: 'output', q: 'What is the output? Look carefully at <code>print</code> and <code>println</code>.', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("nums.txt");
        for (int i = 1; i <= 3; i++) {
            out.print(i * 10);
            out.print(" ");
        }
        out.println();
        out.println("done");
        out.close();

        Scanner in = new Scanner(new File("nums.txt"));
        while (in.hasNextLine()) {
            System.out.println("[" + in.nextLine() + "]");
        }
        in.close();
    }
}`, answer: "[10 20 30 ]\n[done]", explain: 'The loop uses <code>print</code>, so 10, 20 and 30 (each with a space after it) stay on the first line: <code>10 20 30 </code>. The empty <code>println()</code> ends that line. Then <code>done</code> is the second line. The brackets show the space at the end of the first line.', explainAr: 'print تبقي النص في السطر نفسه، وprintln() الفارغة تنهي السطر.' },
        { t: 'code', q: 'A small cafe wants a receipt file. Read an integer <code>n</code> and then <code>n</code> prices (decimals). Write into <code>receipt.txt</code> one line per item in the form <code>Item 1: 12.50</code> (two decimals, use <code>printf</code> with <code>%n</code>), and a last line <code>Total: T</code> (two decimals). Close the file, then read it back and print every line. No prompts.<br>Example: input <code>3</code> then <code>12.5 18.25 2</code> prints<br><code>Item 1: 12.50</code><br><code>Item 2: 18.25</code><br><code>Item 3: 2.00</code><br><code>Total: 32.75</code>', qAr: 'اكتب{{g:|ي}} الأسعار في ملف الفاتورة مع المجموع، ثم اقرأ{{g:|ي}} الملف واطبع{{g:|ي}} أسطره.',
          starter: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        PrintWriter out = new PrintWriter("receipt.txt");
        // write one line per item, then the total, then close
        // read receipt.txt back and print every line
    }
}`, tests: [ { stdin: '3\n12.5 18.25 2', expected: "Item 1: 12.50\nItem 2: 18.25\nItem 3: 2.00\nTotal: 32.75" }, { stdin: '1\n5', expected: "Item 1: 5.00\nTotal: 5.00" } ],
          solution: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        PrintWriter out = new PrintWriter("receipt.txt");
        double total = 0;
        for (int i = 1; i <= n; i++) {
            double price = input.nextDouble();
            total += price;
            out.printf("Item %d: %.2f%n", i, price);
        }
        out.printf("Total: %.2f%n", total);
        out.close();

        Scanner in = new Scanner(new File("receipt.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        in.close();
    }
}`, hint: 'Keep a running total inside the loop. <code>out.printf("Item %d: %.2f%n", i, price);</code> writes one line.', explain: 'printf works on a PrintWriter exactly as on System.out. We add each price to the total inside the loop, write the total after the loop, close, and read the file back.' }
      ]
    },
    // ===================================================== Lesson 2
    {
      title: 'The File class and why main says "throws Exception"',
      titleAr: 'الصنف File ولماذا نكتب throws Exception',
      minutes: 25,
      body: [
        { type: 'h', en: 'A File object is only a name' },
        { type: 'p', en: 'Sometimes you want to ask questions about a file: Does it exist? What is its name? Can I delete it? Java has the class <code>File</code> (in <code>java.io</code>) for this. A <code>File</code> object does <b>not</b> create the file and does not open it. It only holds the file name.',
          ar: 'كائن File يحمل اسم الملف فقط، ولا ينشئ الملف ولا يفتحه.' },
        { type: 'analogy', title: 'A label on a folder', en: 'A <code>File</code> object is like a label with a name written on it. The label can exist even if there is no folder behind it. You can ask: "Is there a folder with this label?" That question is <code>exists()</code>.' },
        { type: 'code', code: J`
File file = new File("grades.txt");
System.out.println(file.exists());` },
        { type: 'lines', rows: [
          ['File file = new File("grades.txt");', 'Make a label for the name grades.txt. Nothing is created on the disk.'],
          ['file.exists()', 'Asks the disk: is there really a file with this name? The answer is true or false.']
        ], ar: 'exists() تسأل: هل الملف موجود فعلاً؟' },
        { type: 'table', head: ['Method', 'What it gives'], rows: [
          ['<code>exists()</code>', 'true if the file exists'],
          ['<code>getName()</code>', 'the name, such as <code>grades.txt</code>'],
          ['<code>isDirectory()</code>', 'true if it is a folder'],
          ['<code>delete()</code>', 'deletes the file (true if it worked)']
        ] },
        { type: 'check', q: 'After <code>File f = new File("a.txt");</code> (and no other code), is a file called a.txt created on the disk?', options: ['Yes', 'No, only a File object exists', 'Yes, but empty', 'It depends on the colour'], answer: 1, explain: 'Creating a File object does not create a file.' },
        { type: 'memory', title: 'The label stays, the file comes and goes',
          en: 'Watch the File object (the label) and the answer of <code>exists()</code>. The label is made first. The real file appears only when a PrintWriter opens it, and it disappears after <code>delete()</code>. The label is still there at the end.',
          code: J`
File f = new File("temp.txt");
PrintWriter out = new PrintWriter(f);
out.println("hello");
out.close();
f.delete();`,
          frames: [
            { label: 'After <code>File f = new File("temp.txt");</code> Only a label. No file on the disk.',
              vars: [{ name: 'f', type: 'File', ref: 'A' }],
              objects: [{ id: 'A', cls: 'File', fields: [{ name: 'name', value: '"temp.txt"' }, { name: 'exists()', value: 'false' }] }] },
            { label: 'After <code>PrintWriter out = new PrintWriter(f);</code> The PrintWriter creates an empty file with that name.',
              vars: [{ name: 'f', type: 'File', ref: 'A' }, { name: 'out', type: 'PrintWriter', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'File', fields: [{ name: 'name', value: '"temp.txt"' }, { name: 'exists()', value: 'true' }, { name: 'on the disk', value: '(empty)' }] },
                { id: 'B', cls: 'PrintWriter', fields: [{ name: 'writes to', ref: 'A' }, { name: 'waiting text', value: '(nothing)' }] }] },
            { label: 'After <code>out.println("hello"); out.close();</code> The text reaches the disk.',
              vars: [{ name: 'f', type: 'File', ref: 'A' }, { name: 'out', type: 'PrintWriter', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'File', fields: [{ name: 'name', value: '"temp.txt"' }, { name: 'exists()', value: 'true' }, { name: 'on the disk', value: 'hello' }] },
                { id: 'B', cls: 'PrintWriter (closed)', fields: [{ name: 'writes to', ref: 'A' }] }] },
            { label: 'After <code>f.delete();</code> The file is gone from the disk, but the label <code>f</code> still exists.',
              vars: [{ name: 'f', type: 'File', ref: 'A' }, { name: 'out', type: 'PrintWriter', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'File', fields: [{ name: 'name', value: '"temp.txt"' }, { name: 'exists()', value: 'false' }] },
                { id: 'B', cls: 'PrintWriter (closed)', fields: [{ name: 'writes to', ref: 'A' }] }] }
          ],
          ar: 'كائن File مجرد بطاقة باسم الملف. الملف الحقيقي يُنشأ عند فتح PrintWriter ويختفي بعد delete()، وتبقى البطاقة.' },
        { type: 'code', run: true, code: J`
import java.io.File;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) throws Exception {
        File file = new File("grades.txt");
        if (file.exists()) {
            file.delete();                 // start clean
        }
        System.out.println("Before writing: " + file.exists());

        PrintWriter output = new PrintWriter(file);
        output.println("Ali 85");
        output.close();

        System.out.println("After writing: " + file.exists());
        System.out.println("Name: " + file.getName());
        System.out.println("Is a folder? " + file.isDirectory());
    }
}`, out: "Before writing: false\nAfter writing: true\nName: grades.txt\nIs a folder? false" },
        { type: 'lines', rows: [
          ['if (file.exists()) { file.delete(); }', 'If an old file is there, delete it. Now we start from nothing.'],
          ['new PrintWriter(file)', 'A PrintWriter can also be made from a File object, not only from a name.'],
          ['file.exists()  (second time)', 'Now the file is on the disk, so true.']
        ], ar: 'PrintWriter يقبل اسماً نصياً أو كائن File.' },
        { type: 'note', kind: 'tip', en: 'On Windows, a backslash inside a Java string must be doubled: <code>"C:\\\\cs101\\\\grades.txt"</code>. A forward slash <code>"C:/cs101/grades.txt"</code> also works. In this course, just use a simple name such as <code>"grades.txt"</code>: the file is made next to your program.', ar: 'استخدم اسماً بسيطاً مثل grades.txt.' },
        { type: 'h', en: 'Check before you read' },
        { type: 'p', en: 'Why is <code>exists()</code> useful? Imagine a revision app. The first time you open it, there are no saved notes yet. Every time after that, there are. Before reading the notes file, the program can ask: "Is the file there?" If not, it shows a kind message instead of trying to read nothing.' },
        { type: 'code', code: J`
File notes = new File("notes.txt");
if (notes.exists()) {
    System.out.println("Loading your notes...");
} else {
    System.out.println("No notes yet.");
}` },
        { type: 'lines', rows: [
          ['File notes = new File("notes.txt");', 'Make the label. Nothing happens on the disk.'],
          ['if (notes.exists())', 'An if statement from Unit 3, with a question to the disk as the condition.'],
          ['else { ... "No notes yet." }', 'The friendly message when there is no file yet.']
        ], ar: 'نستخدم exists() داخل if لنتأكد من وجود الملف قبل قراءته.' },
        { type: 'analogy', title: 'Knocking before you enter', en: 'Before you enter an office, you knock and wait for an answer. <code>exists()</code> is the knock: you ask first, and only then do you go in and read.' },
        { type: 'check', q: 'A program runs <code>File f = new File("plan.txt");</code> and the disk has no file with that name. What is <code>f.exists()</code>?', options: ['true, because f was created', 'false, because there is no such file on the disk', 'An error', '"plan.txt"'], answer: 1, explain: 'The File object exists, but the file on the disk does not. exists() asks about the disk.' },
        { type: 'h', en: 'Why "throws Exception"?' },
        { type: 'p', en: 'Writing a file can fail: the disk may be full, the folder may not exist, or the file may be locked. When something goes wrong in a Java program, Java creates an <b>exception</b> (an error object). Some exceptions are <b>checked</b>: Java makes you promise that you have thought about them. Creating a <code>PrintWriter</code> can throw one, so the compiler says: "Handle this, or declare it."' },
        { type: 'analogy', title: 'A warning sign', en: 'A teacher says: "This lab can be dangerous. Either wear gloves, or sign that you accept the risk." In Java, <code>throws Exception</code> is signing. Later (Lesson 5) you will learn the other choice, <code>try-catch</code>, which is wearing gloves.', ar: 'throws Exception = نصرّح بأن الخطأ قد يحدث ونمرره. try-catch = نتعامل معه (الدرس 5).' },
        { type: 'code', code: J`
public static void main(String[] args) throws Exception {
    PrintWriter out = new PrintWriter("a.txt");   // OK
}` },
        { type: 'check', q: 'What happens if you create a <code>PrintWriter</code> in <code>main</code> without <code>throws Exception</code> and without try-catch?', options: ['It runs, but slowly', 'Compile error: unreported exception', 'The file is created empty', 'Nothing special'], answer: 1, explain: 'The compiler insists that checked exceptions are handled or declared.' },
        { type: 'note', kind: 'exam', en: 'The error message looks like: <code>unreported exception FileNotFoundException; must be caught or declared to be thrown</code>. The fix is <code>throws Exception</code> on the method header.', ar: 'عند ظهور هذه الرسالة أضف throws Exception.' },
        { type: 'p', en: 'Which lines are "risky"? Only the lines that really open a file on the disk. Making a label or asking a question is safe. The word <code>Exception</code> in <code>throws Exception</code> is the name of the whole family of errors, so it covers every risky line in <code>main</code> at once.' },
        { type: 'table', head: ['Statement', 'Can it throw a checked exception?'], rows: [
          ['<code>new File("a.txt")</code>', 'No: it only makes a label'],
          ['<code>f.exists()</code>, <code>f.getName()</code>, <code>f.delete()</code>', 'No: they answer true/false or a name'],
          ['<code>new PrintWriter("a.txt")</code>', '<b>Yes</b>: the folder may be missing or locked'],
          ['<code>new Scanner(new File("a.txt"))</code>', '<b>Yes</b>: the file may not exist']
        ] },
        { type: 'p', en: 'So a program that only uses <code>new File</code>, <code>exists()</code> and <code>getName()</code> compiles without <code>throws Exception</code>. As soon as you add a PrintWriter or a file Scanner, you need it.', ar: 'فتح ملف للكتابة أو القراءة يحتاج throws Exception، أما new File و exists فلا.' },
        { type: 'steps', title: 'Worked example: create, check, delete', problem: 'Write a file, check that it exists, delete it, and check again.',
          steps: [
            { en: 'Make the File object and write one line in it.', code: J`
File f = new File("temp.txt");
PrintWriter out = new PrintWriter(f);
out.println("hello");
out.close();` },
            { en: 'Ask <code>exists()</code>. It must be true now.', code: 'System.out.println(f.exists());' },
            { en: 'Delete it, then ask again.', code: J`
f.delete();
System.out.println(f.exists());` },
            { en: 'The answers are true, then false. We add <code>throws Exception</code> to main because of the PrintWriter.' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) throws Exception {
        File f = new File("temp.txt");
        PrintWriter out = new PrintWriter(f);
        out.println("hello");
        out.close();

        System.out.println("Exists: " + f.exists());
        f.delete();
        System.out.println("Exists: " + f.exists());
    }
}`, out: "Exists: true\nExists: false", ar: 'أنشأنا الملف ثم حذفناه وتحققنا من وجوده.' },
        { type: 'steps', title: 'Worked example: load the notes, or create them', problem: 'A revision app keeps your notes in <code>notes.txt</code>. If the file is missing, print <code>No notes yet. Creating the file.</code> and create it with one note. Then, if the file exists, print its first note. (To make the example the same every time, the program deletes any old file first.)',
          steps: [
            { en: 'Make the label and delete any old file, so we start clean.', code: J`
File notes = new File("notes.txt");
notes.delete();` },
            { en: 'Ask <code>exists()</code>. It is false now, so the else part creates the file with one line.', code: J`
if (notes.exists()) {
    System.out.println("Found old notes.");
} else {
    System.out.println("No notes yet. Creating the file.");
    PrintWriter out = new PrintWriter(notes);
    out.println("Revise Unit 7 arrays");
    out.close();
}` },
            { en: 'Ask again. Now the file exists, so we open a Scanner on the same File object and read the first line.', code: J`
if (notes.exists()) {
    Scanner in = new Scanner(notes);
    System.out.println("First note: " + in.nextLine());
    in.close();
}` },
            { en: 'Both a PrintWriter and a Scanner can be made from a File object. Because they can throw, <code>main</code> has <code>throws Exception</code>.' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        File notes = new File("notes.txt");
        notes.delete();                  // start clean for this example

        if (notes.exists()) {
            System.out.println("Found old notes.");
        } else {
            System.out.println("No notes yet. Creating the file.");
            PrintWriter out = new PrintWriter(notes);
            out.println("Revise Unit 7 arrays");
            out.close();
        }

        if (notes.exists()) {
            Scanner in = new Scanner(notes);
            System.out.println("First note: " + in.nextLine());
            in.close();
        }
    }
}`, out: "No notes yet. Creating the file.\nFirst note: Revise Unit 7 arrays", ar: 'نسأل exists() قبل القراءة: إن لم يوجد الملف ننشئه، ثم نقرأ أول سطر.' }
      ],
      mistakes: [
        { title: 'Thinking new File creates the file', en: 'Only a writer such as <code>PrintWriter</code> creates the file.' },
        { title: 'Forgetting throws Exception', en: 'The compiler stops with "unreported exception".' },
        { title: 'Forgetting import java.io.File', en: 'Add <code>import java.io.File;</code> at the top. File lives in <code>java.io</code>, not <code>java.util</code>.', code: J`
import java.io.File;        // correct
import java.util.File;      // wrong package` },
        { title: 'Using a long path with single backslashes', en: 'Use a simple name or double the backslashes.' }
      ],
      remember: [
        '<code>new File("name.txt")</code> only holds a name; it does not create a file.',
        '<code>exists()</code>, <code>getName()</code>, <code>delete()</code> are useful File methods.',
        'A checked exception must be declared (<code>throws</code>) or caught (<code>try-catch</code>).',
        'Writing with <code>PrintWriter</code> needs <code>throws Exception</code> on <code>main</code> for now.',
        '<code>File</code> and <code>PrintWriter</code> are in <code>java.io</code>.'
      ],
      rememberAr: 'File يحمل الاسم فقط. exists تسأل عن وجود الملف. الاستثناء المفحوص يجب التصريح به بـ throws أو معالجته بـ try-catch. File في java.io.',
      practice: [
        { t: 'mcq', q: 'What does <code>File f = new File("data.txt");</code> do?', options: ['Creates an empty file data.txt', 'Creates an object that holds the name data.txt; no file is created', 'Opens data.txt for reading', 'Deletes data.txt'], answer: 1, explain: 'A File object is only a name.' },
        { t: 'output', q: 'What is the output?', code: J`
import java.io.File;

public class Main {
    public static void main(String[] args) {
        File f = new File("name_that_does_not_exist_123.txt");
        System.out.println(f.exists());
        System.out.println(f.getName());
    }
}`, answer: "false\nname_that_does_not_exist_123.txt", explain: 'No such file exists, so exists() is false. getName() just returns the name text.' },
        { t: 'output', q: 'What is the output?', code: J`
import java.io.File;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) throws Exception {
        File f = new File("x.txt");
        PrintWriter out = new PrintWriter(f);
        out.println("a");
        out.close();
        System.out.println(f.exists());
        f.delete();
        System.out.println(f.exists());
    }
}`, answer: "true\nfalse", explain: 'The file exists after writing, and is gone after delete().' },
        { t: 'mcq', q: 'Why does <code>main</code> need <code>throws Exception</code> when it creates a <code>PrintWriter</code>?', options: ['Because every method that prints needs it', 'Because the constructor may throw a checked exception', 'Because PrintWriter is in java.util', 'It is not needed'], answer: 1, explain: 'Checked exceptions must be declared or caught.' },
        { t: 'fill', q: 'Complete the code. It should print <code>true</code> if the file exists.', code: J`
___ file = new File("report.txt");
System.out.println(file.___());`, answers: ['File', 'exists'], explain: 'The class is File, and exists() gives true or false.' },
        { t: 'order', q: 'Order the lines to write one line and then check that the file exists.', lines: [
          'File f = new File("note.txt");',
          'PrintWriter out = new PrintWriter(f);',
          'out.println("Hi");',
          'out.close();',
          'System.out.println(f.exists());'
        ], explain: 'Make the File, open the writer, write, close, then ask exists().' },
        { t: 'code', q: 'Read an integer <code>n</code>. Create the file <code>lines.txt</code> with <code>n</code> lines: <code>Line 1</code>, <code>Line 2</code>, ... Close it. Print <code>file.exists()</code>. Then read the file back and print <code>Lines: </code> followed by the number of lines. No prompts.<br>Example: input <code>3</code> prints<br><code>true</code><br><code>Lines: 3</code>', qAr: 'أنشئ ملفاً بـ n سطراً ثم عُدّ الأسطر.',
          starter: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        File file = new File("lines.txt");
        // write n lines, close, print file.exists()
        // read the file back and count the lines
    }
}`, tests: [ { stdin: '3', expected: "true\nLines: 3" }, { stdin: '1', expected: "true\nLines: 1" } ],
          solution: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        File file = new File("lines.txt");
        PrintWriter out = new PrintWriter(file);
        for (int i = 1; i <= n; i++) {
            out.println("Line " + i);
        }
        out.close();
        System.out.println(file.exists());

        Scanner in = new Scanner(file);
        int count = 0;
        while (in.hasNextLine()) {
            in.nextLine();
            count++;
        }
        in.close();
        System.out.println("Lines: " + count);
    }
}`, hint: 'A for loop writes the lines; a while (in.hasNextLine()) loop counts them.', explain: 'We write with a loop, then read with another loop and count how many times it runs.' },
        { t: 'bug', q: 'This program does not compile. The compiler says: <code>unreported exception FileNotFoundException; must be caught or declared to be thrown</code>. Tap the line that must change. (Two answers are accepted.)', qAr: 'البرنامج لا يُترجم. أين التعديل المطلوب؟',
          code: J`
import java.io.File;
import java.io.PrintWriter;
public class Main {
    public static void main(String[] args) {
        File f = new File("plan.txt");
        PrintWriter out = new PrintWriter(f);
        out.println("Study Java");
        out.close();
        System.out.println(f.exists());
    }
}`, bug: [4, 6],
          fix: J`
import java.io.File;
import java.io.PrintWriter;
public class Main {
    public static void main(String[] args) throws Exception {
        File f = new File("plan.txt");
        PrintWriter out = new PrintWriter(f);
        out.println("Study Java");
        out.close();
        System.out.println(f.exists());
    }
}`,
          hint: 'Which line opens a file, and what must the header of main promise?',
          explain: 'Line 6 creates a PrintWriter, and that can throw a checked exception. The method header on line 4 does not declare it, so the compiler stops. Add <code>throws Exception</code> to the header of <code>main</code> (line 4). The fixed program prints <code>true</code>.',
          explainAr: 'إنشاء PrintWriter قد يرمي استثناءً مفحوصاً، فنضيف throws Exception إلى رأس main.' },
        { t: 'bug', q: 'This program does not compile: <code>cannot find symbol: class File</code>. Tap the line with the bug.',
          code: J`
import java.util.File;
import java.io.PrintWriter;
public class Main {
    public static void main(String[] args) throws Exception {
        File f = new File("marks.txt");
        PrintWriter out = new PrintWriter(f);
        out.println("Huda 88");
        out.close();
        System.out.println(f.getName());
    }
}`, bug: 1,
          fix: J`
import java.io.File;
import java.io.PrintWriter;
public class Main {
    public static void main(String[] args) throws Exception {
        File f = new File("marks.txt");
        PrintWriter out = new PrintWriter(f);
        out.println("Huda 88");
        out.close();
        System.out.println(f.getName());
    }
}`,
          hint: 'In which package do File and PrintWriter live?',
          explain: 'Line 1 imports from the wrong package. There is no <code>File</code> in <code>java.util</code>; it is in <code>java.io</code>, like PrintWriter. Only <code>Scanner</code> comes from <code>java.util</code>. The fixed program prints <code>marks.txt</code>.',
          explainAr: 'الصنف File موجود في java.io وليس في java.util.' },
        { t: 'output', q: 'What is the output? Remember: <code>delete()</code> answers true when it really deleted a file.', code: J`
import java.io.File;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) throws Exception {
        File f = new File("old.txt");
        PrintWriter out = new PrintWriter(f);
        out.println("old data");
        out.close();
        System.out.println(f.delete());
        System.out.println(f.delete());
        System.out.println(f.exists() + " " + f.getName());
    }
}`, answer: "true\nfalse\nfalse old.txt", explain: 'The first <code>delete()</code> removes the file, so it prints true. The second time there is no file to delete, so it prints false. At the end the file does not exist (false), but the label still holds the name old.txt.', explainAr: 'المرة الأولى تحذف الملف فتعيد true، والثانية لا تجد ملفاً فتعيد false.' }
      ]
    },
    // ===================================================== Lesson 3
    {
      title: 'Reading a file line by line with Scanner',
      titleAr: 'قراءة الملف سطراً سطراً باستخدام Scanner',
      minutes: 25,
      body: [
        { type: 'h', en: 'The same Scanner, a new source' },
        { type: 'p', en: 'You already know <code>Scanner</code> for reading from the keyboard. The good news: reading from a file is almost the same. You only change where the Scanner takes its data from: instead of <code>System.in</code> (keyboard), you give it a <code>File</code>.',
          ar: 'Scanner نفسه نستخدمه للملف، لكن نعطيه كائن File بدل System.in.' },
        { type: 'analogy', title: 'Reading a book', en: 'The keyboard is like a friend who dictates words to you. A file is like a book on the table. In both cases you use your eyes (the Scanner) to take the next words. You just point them at a different place.' },
        { type: 'code', code: J`
Scanner in = new Scanner(new File("poem.txt"));` },
        { type: 'lines', rows: [
          ['new File("poem.txt")', 'The label for the file we want to read.'],
          ['new Scanner(...)', 'A Scanner that reads from that file.'],
          ['Scanner in', 'We call the variable <code>in</code> (any name is fine).']
        ], ar: 'new Scanner(new File("name")) يقرأ من الملف.' },
        { type: 'note', kind: 'exam', en: '<code>new Scanner("poem.txt")</code> (without <code>new File</code>) does <b>not</b> open the file! It reads the text <code>poem.txt</code> itself, as if you typed it. It compiles, so it is a classic trap.', ar: 'بدون new File يقرأ Scanner النص نفسه وليس الملف.' },
        { type: 'check', q: 'Which line opens the file <code>scores.txt</code> for reading?', options: ['<code>new Scanner("scores.txt")</code>', '<code>new Scanner(new File("scores.txt"))</code>', '<code>new File(new Scanner("scores.txt"))</code>', '<code>new PrintWriter("scores.txt")</code>'], answer: 1, explain: 'A file Scanner needs a File object.' },
        { type: 'h', en: 'How much is in the file? Ask first' },
        { type: 'p', en: 'You often do not know how many lines a file has. So you ask before every read: "Is there another line?" The method <code>hasNextLine()</code> answers true or false. The method <code>nextLine()</code> then reads the line.' },
        { type: 'code', code: J`
while (in.hasNextLine()) {
    String line = in.nextLine();
    System.out.println(line);
}` },
        { type: 'lines', rows: [
          ['while (in.hasNextLine())', 'Repeat while there is still a line left to read.'],
          ['String line = in.nextLine();', 'Read the whole next line (with spaces) and store it.'],
          ['System.out.println(line);', 'Show it. Then the loop asks again.']
        ], ar: 'نسأل hasNextLine() قبل كل قراءة، ثم نقرأ بـ nextLine().' },
        { type: 'analogy', title: 'A queue at the cafe', en: 'The cashier looks at the queue: "Is there another customer?" If yes, he serves the next one. If no, he stops. <code>hasNextLine()</code> is the look. <code>nextLine()</code> is serving.' },
        { type: 'code', run: true, code: J`
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
            System.out.println(lines + ": " + line);
        }
        in.close();
        System.out.println("Total lines: " + lines);
    }
}`, out: "1: Code every day\n2: Learn Java\n3: Have fun\nTotal lines: 3" },
        { type: 'p', en: 'We also count lines with the variable <code>lines</code>. Remember to close the Scanner with <code>in.close()</code> when you finish. It frees the file.' },
        { type: 'p', en: 'How does the Scanner know which line comes next? It keeps a <b>read position</b>, like a finger on the page. At the start, the finger is before line 1. Every <code>nextLine()</code> gives you one line and moves the finger down by one line. The finger never goes back.' },
        { type: 'memory', title: 'The read position moves down the file',
          en: 'The variable <code>in</code> refers to a Scanner object. The Scanner is connected to <code>poem.txt</code> and remembers which line it will read next. Press Next to run the loop one turn at a time.',
          code: J`
Scanner in = new Scanner(new File("poem.txt"));
while (in.hasNextLine()) {
    String line = in.nextLine();
    ...
}`,
          frames: [
            { label: 'After <code>Scanner in = new Scanner(new File("poem.txt"));</code> The finger is before line 1.',
              vars: [{ name: 'in', type: 'Scanner', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'Scanner', fields: [{ name: 'reads from', ref: 'B' }, { name: 'next to read', value: 'line 1' }, { name: 'hasNextLine()', value: 'true' }] },
                { id: 'B', cls: 'poem.txt (on the disk)', fields: [{ name: 'line 1', value: 'Code every day' }, { name: 'line 2', value: 'Learn Java' }, { name: 'line 3', value: 'Have fun' }] }] },
            { label: 'Turn 1: <code>line = in.nextLine();</code> gives line 1. The finger moves to line 2.',
              vars: [{ name: 'in', type: 'Scanner', ref: 'A' }, { name: 'line', type: 'String', value: '"Code every day"' }],
              objects: [
                { id: 'A', cls: 'Scanner', fields: [{ name: 'reads from', ref: 'B' }, { name: 'next to read', value: 'line 2' }, { name: 'hasNextLine()', value: 'true' }] },
                { id: 'B', cls: 'poem.txt (on the disk)', fields: [{ name: 'line 1', value: 'Code every day' }, { name: 'line 2', value: 'Learn Java' }, { name: 'line 3', value: 'Have fun' }] }] },
            { label: 'Turn 2: <code>line = in.nextLine();</code> gives line 2. The finger moves to line 3.',
              vars: [{ name: 'in', type: 'Scanner', ref: 'A' }, { name: 'line', type: 'String', value: '"Learn Java"' }],
              objects: [
                { id: 'A', cls: 'Scanner', fields: [{ name: 'reads from', ref: 'B' }, { name: 'next to read', value: 'line 3' }, { name: 'hasNextLine()', value: 'true' }] },
                { id: 'B', cls: 'poem.txt (on the disk)', fields: [{ name: 'line 1', value: 'Code every day' }, { name: 'line 2', value: 'Learn Java' }, { name: 'line 3', value: 'Have fun' }] }] },
            { label: 'Turn 3: <code>line = in.nextLine();</code> gives line 3. Nothing is left, so <code>hasNextLine()</code> is now false and the loop stops.',
              vars: [{ name: 'in', type: 'Scanner', ref: 'A' }, { name: 'line', type: 'String', value: '"Have fun"' }],
              objects: [
                { id: 'A', cls: 'Scanner', fields: [{ name: 'reads from', ref: 'B' }, { name: 'next to read', value: '(end of file)' }, { name: 'hasNextLine()', value: 'false' }] },
                { id: 'B', cls: 'poem.txt (on the disk)', fields: [{ name: 'line 1', value: 'Code every day' }, { name: 'line 2', value: 'Learn Java' }, { name: 'line 3', value: 'Have fun' }] }] }
          ],
          ar: 'Scanner يتذكر موضع القراءة. كل nextLine() تعطي سطراً وتنقل الموضع إلى السطر التالي، ولا تعود إلى الخلف.' },
        { type: 'check', q: 'What does <code>in.hasNextLine()</code> return when all lines have been read?', options: ['true', 'false', '0', 'It throws an error'], answer: 1, explain: 'No more lines, so false, and the loop stops.' },
        { type: 'h', en: 'A title line first, then the data' },
        { type: 'p', en: 'Many files start with one special line: a title or a heading, such as <code>Library list</code>. The data comes after it. You can read the first line by itself, <b>before</b> the loop. Then the loop starts at line 2, because the read position has already moved.' },
        { type: 'code', code: J`
String title = in.nextLine();          // reads line 1 only
System.out.println("== " + title + " ==");
while (in.hasNextLine()) {             // starts at line 2
    System.out.println("- " + in.nextLine());
}` },
        { type: 'lines', rows: [
          ['String title = in.nextLine();', 'One read before the loop: it takes the title line and moves the finger to line 2.'],
          ['while (in.hasNextLine())', 'The loop sees only the lines that are left: the data lines.'],
          ['"- " + in.nextLine()', 'Each data line is printed with a dash in front.']
        ], ar: 'نقرأ سطر العنوان مرة واحدة قبل الحلقة، فتبدأ الحلقة من السطر الثاني.' },
        { type: 'check', q: 'A file has 5 lines. The program reads one line before the loop, then counts the lines in the loop. What is the count?', options: ['5', '4', '6', '0'], answer: 1, explain: 'The first line was already read, so the loop sees only the 4 lines that are left.' },
        { type: 'note', kind: 'tip', en: 'An empty line in the middle of a file is still a line. <code>hasNextLine()</code> says true, and <code>nextLine()</code> returns the empty String <code>""</code> (length 0). So it is counted like any other line. If you want to skip empty lines, test <code>if (line.length() &gt; 0)</code> before you use the line.', ar: 'السطر الفارغ يُقرأ نصاً فارغاً ويُعدّ سطراً.' },
        { type: 'note', kind: 'warn', en: 'Never call <code>nextLine()</code> without checking <code>hasNextLine()</code>. If there is no line left, the program crashes with <code>NoSuchElementException</code>.', ar: 'تحقق دائماً من hasNextLine() قبل nextLine().' },
        { type: 'steps', title: 'Worked example: a timetable file', problem: 'Save three lines of a timetable in a file and print each line with its length.',
          steps: [
            { en: 'Write three lines into <code>timetable.txt</code> and close the writer.', code: J`
PrintWriter out = new PrintWriter("timetable.txt");
out.println("Sun 08:00 Java");
out.println("Mon 10:00 Maths");
out.println("Tue 12:00 English");
out.close();` },
            { en: 'Open a Scanner on the file.', code: 'Scanner in = new Scanner(new File("timetable.txt"));' },
            { en: 'Loop: while there is a line, read it, and print it with its length.', code: J`
while (in.hasNextLine()) {
    String line = in.nextLine();
    System.out.println(line + " (" + line.length() + ")");
}` },
            { en: 'Close the Scanner. The lengths include the spaces: "Sun 08:00 Java" has 14 characters.' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("timetable.txt");
        out.println("Sun 08:00 Java");
        out.println("Mon 10:00 Maths");
        out.println("Tue 12:00 English");
        out.close();

        Scanner in = new Scanner(new File("timetable.txt"));
        while (in.hasNextLine()) {
            String line = in.nextLine();
            System.out.println(line + " (" + line.length() + ")");
        }
        in.close();
    }
}`, out: "Sun 08:00 Java (14)\nMon 10:00 Maths (15)\nTue 12:00 English (17)", ar: 'نقرأ كل سطر كاملاً بما فيه المسافات.' },
        { type: 'steps', title: 'Worked example: the school library list', problem: 'The library keeps a file: the first line is the title <code>Library list</code>, and every other line is a book title (book titles have spaces). Print the title between <code>==</code> signs, then every book with a number, then how many books there are and the longest title.',
          steps: [
            { en: 'Write the file: the title line, then three books. Close it.', code: J`
PrintWriter out = new PrintWriter("library.txt");
out.println("Library list");
out.println("Java for Beginners");
out.println("History of Riyadh");
out.println("Easy Maths");
out.close();` },
            { en: 'Open a Scanner. Read the title line once, before the loop.', code: J`
Scanner in = new Scanner(new File("library.txt"));
String title = in.nextLine();
System.out.println("== " + title + " ==");` },
            { en: 'Prepare a counter and the longest title so far (an empty String has length 0).', code: J`
int count = 0;
String longest = "";` },
            { en: 'Loop over the book lines. Use <code>nextLine()</code>, because a title has spaces. Compare lengths to keep the longest.', code: J`
while (in.hasNextLine()) {
    String book = in.nextLine();
    count++;
    System.out.println(count + ". " + book);
    if (book.length() > longest.length()) {
        longest = book;
    }
}` },
            { en: 'Close the Scanner and print the results. "Java for Beginners" has 18 characters, more than the others.' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("library.txt");
        out.println("Library list");
        out.println("Java for Beginners");
        out.println("History of Riyadh");
        out.println("Easy Maths");
        out.close();

        Scanner in = new Scanner(new File("library.txt"));
        String title = in.nextLine();
        System.out.println("== " + title + " ==");
        int count = 0;
        String longest = "";
        while (in.hasNextLine()) {
            String book = in.nextLine();
            count++;
            System.out.println(count + ". " + book);
            if (book.length() > longest.length()) {
                longest = book;
            }
        }
        in.close();
        System.out.println("Books: " + count);
        System.out.println("Longest title: " + longest);
    }
}`, out: "== Library list ==\n1. Java for Beginners\n2. History of Riyadh\n3. Easy Maths\nBooks: 3\nLongest title: Java for Beginners", ar: 'قرأنا سطر العنوان أولاً، ثم عددنا الكتب وأوجدنا أطول عنوان.' }
      ],
      mistakes: [
        { title: 'Scanner without new File', en: 'The Scanner reads the file name as text.', code: J`
Scanner in = new Scanner("poem.txt");               // wrong
Scanner in = new Scanner(new File("poem.txt"));     // correct` },
        { title: 'Calling nextLine() without hasNextLine()', en: 'This crashes at the end of the file.' },
        { title: 'Reading before closing the writer', en: 'Close the PrintWriter first, otherwise the file may still be empty when you read it.' },
        { title: 'Forgetting to close the Scanner', en: 'Add <code>in.close();</code> when you finish.' }
      ],
      remember: [
        '<code>new Scanner(new File("name.txt"))</code> reads from a file.',
        '<code>hasNextLine()</code> asks: is there another line?',
        '<code>nextLine()</code> reads the whole next line.',
        'Always ask before you read, inside a <code>while</code> loop.',
        'Each <code>nextLine()</code> moves the read position one line down; read once and keep the line in a variable.',
        'Close the writer before reading, and close the Scanner after.'
      ],
      rememberAr: 'نقرأ من الملف بـ new Scanner(new File(...)). hasNextLine تسأل هل يوجد سطر، وnextLine تقرأه. نغلق الكاتب قبل القراءة.',
      practice: [
        { t: 'mcq', q: 'Which method tells you that there is another line to read?', options: ['<code>nextLine()</code>', '<code>hasNextLine()</code>', '<code>hasLine()</code>', '<code>readLine()</code>'], answer: 1, explain: 'hasNextLine() tests; nextLine() reads.' },
        { t: 'output', q: 'What is the output?', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("a.txt");
        out.println("one");
        out.println("two");
        out.close();

        Scanner in = new Scanner(new File("a.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine().toUpperCase());
        }
        in.close();
    }
}`, answer: "ONE\nTWO", explain: 'Each line is read and printed in upper case.' },
        { t: 'mcq', q: 'Assume <code>scores.txt</code> exists. What does this print?', code: J`
Scanner in = new Scanner("scores.txt");
System.out.println(in.next());`, options: ['The first word of the file', 'scores.txt', 'A FileNotFoundException', 'Nothing'], answer: 1, explain: 'Without new File, the Scanner reads the text "scores.txt" itself.' },
        { t: 'fill', q: 'Complete the loop that prints every line of the file.', code: J`
Scanner in = new Scanner(new File("data.txt"));
while (in.___()) {
    System.out.println(in.___());
}
in.close();`, answers: ['hasNextLine', 'nextLine'], explain: 'Ask hasNextLine() first, then read with nextLine().' },
        { t: 'output', q: 'What is the output?', code: J`
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
}`, answer: "1: 14\n2: 10\n3: 8", explain: '"Code every day" has 14 characters, "Learn Java" 10, "Have fun" 8 (spaces count).' },
        { t: 'order', q: 'Order the lines so the program writes two lines and prints them.', lines: [
          'PrintWriter out = new PrintWriter("t.txt");',
          'out.println("Hi");',
          'out.println("Bye");',
          'out.close();',
          'Scanner in = new Scanner(new File("t.txt"));',
          'while (in.hasNextLine()) {',
          '    System.out.println(in.nextLine());',
          '}',
          'in.close();'
        ], explain: 'Write and close, then open the Scanner and loop.' },
        { t: 'code', q: 'Read an integer <code>n</code> and then <code>n</code> words (single words, use <code>next()</code>). Write each word on its own line in <code>words.txt</code>, close it, then read the file line by line and print <code>i: word</code> for each line, starting from 1. No prompts.<br>Example: input <code>3</code> then <code>sun moon star</code> prints<br><code>1: sun</code><br><code>2: moon</code><br><code>3: star</code>', qAr: 'اكتب الكلمات في ملف ثم اقرأها ورقّمها.',
          starter: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // 1) write the n words to words.txt, one per line, then close
        // 2) read the lines back and print "i: word"
    }
}`, tests: [ { stdin: '3\nsun moon star', expected: "1: sun\n2: moon\n3: star" }, { stdin: '1\nriyadh', expected: "1: riyadh" } ],
          solution: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        PrintWriter out = new PrintWriter("words.txt");
        for (int i = 0; i < n; i++) {
            out.println(input.next());
        }
        out.close();

        Scanner in = new Scanner(new File("words.txt"));
        int number = 0;
        while (in.hasNextLine()) {
            number++;
            System.out.println(number + ": " + in.nextLine());
        }
        in.close();
    }
}`, hint: 'Keep a counter that goes up by one for each line you read.', explain: 'One loop writes the words; another loop reads the lines and numbers them.' },
        { t: 'bug', q: 'This code should print each name with its number of letters: <code>Ali: 3</code>, <code>Sara: 4</code>, <code>Omar: 4</code>. Instead it prints <code>Ali: 4</code> and then crashes with <code>NoSuchElementException</code>. Tap the line with the bug.', qAr: 'البرنامج يطبع نتيجة خاطئة ثم يتوقف. أين الخطأ؟',
          code: J`
PrintWriter out = new PrintWriter("names.txt");
out.println("Ali");
out.println("Sara");
out.println("Omar");
out.close();
Scanner in = new Scanner(new File("names.txt"));
while (in.hasNextLine()) {
    String name = in.nextLine();
    System.out.println(name + ": " + in.nextLine().length());
}
in.close();`, bug: 9,
          fix: J`
PrintWriter out = new PrintWriter("names.txt");
out.println("Ali");
out.println("Sara");
out.println("Omar");
out.close();
Scanner in = new Scanner(new File("names.txt"));
while (in.hasNextLine()) {
    String name = in.nextLine();
    System.out.println(name + ": " + name.length());
}
in.close();`,
          hint: 'How many times does each loop turn call nextLine()?',
          explain: 'Every call to <code>nextLine()</code> reads a <b>new</b> line and moves the read position. Line 9 calls it a second time, so it reads "Sara" and prints its length next to "Ali". In the next turn, <code>name</code> is "Omar", and the second <code>nextLine()</code> finds no line left: crash. Read once, keep the line in a variable, and use the variable: <code>name.length()</code>.',
          explainAr: 'كل استدعاء لـ nextLine() يقرأ سطراً جديداً. اقرأ{{g:|ي}} السطر مرة واحدة واحفظ{{g:|ي}}ه في متغير.' },
        { t: 'bug', q: 'This program should print <code>Learn Java</code> (the line inside the file), but it prints <code>poem.txt</code>. Tap the line with the bug.',
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("poem.txt");
        out.println("Learn Java");
        out.close();
        Scanner in = new Scanner("poem.txt");
        System.out.println(in.nextLine());
        in.close();
    }
}`, bug: 9,
          fix: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("poem.txt");
        out.println("Learn Java");
        out.close();
        Scanner in = new Scanner(new File("poem.txt"));
        System.out.println(in.nextLine());
        in.close();
    }
}`,
          hint: 'What does a Scanner read when you give it a plain String?',
          explain: 'On line 9 the Scanner gets the String <code>"poem.txt"</code>, so it reads those letters as its input, not the file. It compiles and runs, which makes this bug hard to see. Wrap the name in <code>new File(...)</code> so the Scanner reads the file. The fixed program prints <code>Learn Java</code>.',
          explainAr: 'بدون new File يقرأ Scanner النص "poem.txt" نفسه لا محتوى الملف.' },
        { t: 'output', q: 'What is the output?', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("menu.txt");
        out.println("Cafe menu");
        out.println("Tea");
        out.println("Coffee");
        out.println("Juice");
        out.close();

        Scanner in = new Scanner(new File("menu.txt"));
        String title = in.nextLine();
        int count = 0;
        while (in.hasNextLine()) {
            in.nextLine();
            count++;
        }
        in.close();
        System.out.println(title + ": " + count + " drinks");
    }
}`, answer: "Cafe menu: 3 drinks", explain: 'The first line is read before the loop and kept in <code>title</code>. The loop sees only the 3 lines that are left, so the count is 3.', explainAr: 'السطر الأول قُرئ قبل الحلقة، فعدّت الحلقة ثلاثة أسطر فقط.' },
        { t: 'code', q: 'Read an integer <code>n</code>, then <code>n</code> whole lines of text (they may contain spaces). Write the lines into <code>titles.txt</code> and close it. Then read the file back and print <code>Longest: </code>, the longest line, and its length in brackets. If two lines have the same length, keep the first one. No prompts.<br>Example: input <code>3</code> then the lines <code>Java for Beginners</code>, <code>History of Riyadh</code>, <code>Easy Maths</code> prints <code>Longest: Java for Beginners (18)</code>', qAr: 'اكتب{{g:|ي}} الأسطر في ملف ثم اقرأ{{g:|ي}}ها واطبع{{g:|ي}} أطولها مع طوله.',
          starter: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        input.nextLine();           // finish the first line (after the number)
        // 1) write n lines (input.nextLine()) to titles.txt, then close
        // 2) read titles.txt and find the longest line
    }
}`, tests: [ { stdin: '3\nJava for Beginners\nHistory of Riyadh\nEasy Maths', expected: 'Longest: Java for Beginners (18)' }, { stdin: '2\nabc\nxyz', expected: 'Longest: abc (3)' } ],
          solution: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        input.nextLine();           // finish the first line (after the number)
        PrintWriter out = new PrintWriter("titles.txt");
        for (int i = 0; i < n; i++) {
            out.println(input.nextLine());
        }
        out.close();

        Scanner in = new Scanner(new File("titles.txt"));
        String longest = "";
        while (in.hasNextLine()) {
            String line = in.nextLine();
            if (line.length() > longest.length()) {
                longest = line;
            }
        }
        in.close();
        System.out.println("Longest: " + longest + " (" + longest.length() + ")");
    }
}`, hint: 'Start with <code>String longest = "";</code> and use <code>&gt;</code> (not <code>&gt;=</code>) so the first of two equal lines is kept.', explain: 'We copy whole lines into the file, then compare the length of each line with the longest so far. Using &gt; keeps the earlier line when there is a tie.' }
      ]
    },
    // ===================================================== Lesson 4
    {
      title: 'Reading numbers and records from a file',
      titleAr: 'قراءة الأعداد والسجلات من ملف',
      minutes: 35,
      body: [
        { type: 'h', en: 'Lines or tokens?' },
        { type: 'p', en: 'Sometimes you want a whole line (a sentence). But often a file holds numbers or small pieces of data, like marks: <code>70 85 90</code>. Then you do not care about lines. You want the pieces one by one. A piece of text separated by spaces or line breaks is called a <b>token</b>. <code>"70 85 90"</code> has three tokens.',
          ar: 'الوحدة (token) قطعة نص تفصلها مسافة أو سطر جديد.' },
        { type: 'analogy', title: 'Picking beans from a plate', en: 'Reading by lines is like taking a whole plate at once. Reading by tokens is like picking one bean at a time, no matter how the beans lie on the plate (in one row or in two rows).' },
        { type: 'table', head: ['You want…', 'Ask first', 'Then read'], rows: [
          ['a whole line', '<code>hasNextLine()</code>', '<code>nextLine()</code>'],
          ['a word', '<code>hasNext()</code>', '<code>next()</code>'],
          ['a whole number', '<code>hasNextInt()</code>', '<code>nextInt()</code>'],
          ['a decimal number', '<code>hasNextDouble()</code>', '<code>nextDouble()</code>']
        ], ar: 'نسأل بـ hasNext... ثم نقرأ بـ next... المناسبة للنوع.' },
        { type: 'h', en: 'Reading numbers until the data ends' },
        { type: 'code', code: J`
int sum = 0;
while (in.hasNextInt()) {
    sum += in.nextInt();
}` },
        { type: 'lines', rows: [
          ['int sum = 0;', 'A total that starts at zero.'],
          ['while (in.hasNextInt())', 'Repeat while the next token is a whole number.'],
          ['sum += in.nextInt();', 'Read that number and add it to the total.']
        ], ar: 'نجمع الأعداد ما دام الوحدة التالية عدداً صحيحاً.' },
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
}`, out: "Readings: 5\nSum: 157.5\nAverage: 31.50" },
        { type: 'p', en: 'The numbers are on two lines in the file, but the loop does not mind. It just takes the next token each time. We also count the readings so we can find the average.' },
        { type: 'memory', title: 'Token by token: the read position jumps over spaces and line breaks',
          en: 'Here the file <code>marks.txt</code> holds <code>70 85</code> on line 1 and <code>90</code> on line 2. The Scanner skips spaces and line breaks and stops at the next token. Watch <code>sum</code> grow and the read position move.',
          code: J`
int sum = 0;
while (in.hasNextInt()) {
    sum += in.nextInt();
}`,
          frames: [
            { label: 'Before the loop: <code>sum</code> is 0 and the next token is 70.',
              vars: [{ name: 'in', type: 'Scanner', ref: 'A' }, { name: 'sum', type: 'int', value: '0' }],
              objects: [
                { id: 'A', cls: 'Scanner', fields: [{ name: 'reads from', ref: 'B' }, { name: 'next token', value: '70 (line 1)' }, { name: 'hasNextInt()', value: 'true' }] },
                { id: 'B', cls: 'marks.txt (on the disk)', fields: [{ name: 'line 1', value: '70 85' }, { name: 'line 2', value: '90' }] }] },
            { label: 'Turn 1: <code>nextInt()</code> gives 70. <code>sum</code> = 70.',
              vars: [{ name: 'in', type: 'Scanner', ref: 'A' }, { name: 'sum', type: 'int', value: '70' }],
              objects: [
                { id: 'A', cls: 'Scanner', fields: [{ name: 'reads from', ref: 'B' }, { name: 'next token', value: '85 (line 1)' }, { name: 'hasNextInt()', value: 'true' }] },
                { id: 'B', cls: 'marks.txt (on the disk)', fields: [{ name: 'line 1', value: '70 85' }, { name: 'line 2', value: '90' }] }] },
            { label: 'Turn 2: <code>nextInt()</code> gives 85. <code>sum</code> = 155. The next token is on line 2; the line break is just skipped.',
              vars: [{ name: 'in', type: 'Scanner', ref: 'A' }, { name: 'sum', type: 'int', value: '155' }],
              objects: [
                { id: 'A', cls: 'Scanner', fields: [{ name: 'reads from', ref: 'B' }, { name: 'next token', value: '90 (line 2)' }, { name: 'hasNextInt()', value: 'true' }] },
                { id: 'B', cls: 'marks.txt (on the disk)', fields: [{ name: 'line 1', value: '70 85' }, { name: 'line 2', value: '90' }] }] },
            { label: 'Turn 3: <code>nextInt()</code> gives 90. <code>sum</code> = 245. No token is left, so <code>hasNextInt()</code> is false and the loop ends.',
              vars: [{ name: 'in', type: 'Scanner', ref: 'A' }, { name: 'sum', type: 'int', value: '245' }],
              objects: [
                { id: 'A', cls: 'Scanner', fields: [{ name: 'reads from', ref: 'B' }, { name: 'next token', value: '(end of file)' }, { name: 'hasNextInt()', value: 'false' }] },
                { id: 'B', cls: 'marks.txt (on the disk)', fields: [{ name: 'line 1', value: '70 85' }, { name: 'line 2', value: '90' }] }] }
          ],
          ar: 'Scanner يتخطى المسافات والأسطر الجديدة ويقف عند الوحدة التالية. تنتهي الحلقة عندما لا يبقى عدد.' },
        { type: 'check', q: 'What is the average of the readings, printed with 2 decimals, if the sum is 157.5 and the count is 5?', options: ['31.5', '31.50', '157.50', '5.00'], answer: 1, explain: '157.5 / 5 = 31.5, and %.2f prints 31.50.' },
        { type: 'note', kind: 'warn', en: '<code>hasNextInt()</code> stops the loop at the first token that is not a whole number, for example the word <code>abc</code> or the value <code>7.5</code>. Check that your loop test matches the data in the file.', ar: 'الحلقة تتوقف عند أول وحدة لا تناسب النوع.' },
        { type: 'h', en: 'Records: a name and a number on each line' },
        { type: 'p', en: 'A file often keeps <b>records</b>: a few pieces of data about one thing. For example one line = one student: the name, then the mark. In the loop, you read <b>one whole record</b> every time: first the name with <code>next()</code>, then the mark with <code>nextInt()</code>.' },
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
}`, out: "Students: 4\nAverage: 79.5\nTop: Sara (92)" },
        { type: 'lines', title: 'The record loop', rows: [
          ['while (in.hasNext())', 'Is there another word? If yes, a new record starts.'],
          ['String name = in.next();', 'Read the name (the first token of the line).'],
          ['int score = in.nextInt();', 'Read the mark (the second token).'],
          ['if (score > bestScore)', 'Remember the highest mark and who got it. We start with -1 so any mark is bigger.']
        ], ar: 'في كل دورة نقرأ سجلاً كاملاً: الاسم ثم العلامة.' },
        { type: 'check', q: 'In the record loop, what happens if you read the mark with <code>next()</code> instead of <code>nextInt()</code>?', options: ['Nothing changes, but you get text, not a number', 'The file is deleted', 'An error at the end of the program', 'It reads two tokens'], answer: 0, explain: 'next() returns a String. You could not add it as a number without converting.' },
        { type: 'h', en: 'When the file says how many: read into an array' },
        { type: 'p', en: 'Some files start with a count: the first token says how many values follow. This is very handy, because now you know the size of the array before you read the data. Read the count, make the array, and fill it with a <code>for</code> loop, exactly as you did from the keyboard in Unit 7.' },
        { type: 'code', code: J`
// prices.txt:  4
//              12 30 8 25
int n = in.nextInt();            // the count: 4
int[] prices = new int[n];
for (int i = 0; i < n; i++) {
    prices[i] = in.nextInt();
}` },
        { type: 'lines', rows: [
          ['int n = in.nextInt();', 'The first token is the count, so <code>n</code> = 4.'],
          ['int[] prices = new int[n];', 'An array with exactly 4 boxes.'],
          ['prices[i] = in.nextInt();', 'Each turn reads the next token into the next box: 12, 30, 8, 25.']
        ], ar: 'إذا بدأ الملف بعدد القيم نقرؤه أولاً، ثم ننشئ مصفوفة بهذا الحجم ونملؤها بحلقة for.' },
        { type: 'note', kind: 'tip', en: 'Once the data is in an array, you can use everything from Unit 7: sum, largest, search, sort. The file gives the data; the array keeps it in memory so you can visit it many times.' },
        { type: 'h', en: 'Careful: a number line, then text lines' },
        { type: 'p', en: 'Now imagine the count is followed by full names, one per line. Full names have spaces, so you read them with <code>nextLine()</code>. But there is a trap that you met with the keyboard in Units 2 and 4: <code>nextInt()</code> reads the number and <b>stops right after it</b>. The end of that line is still waiting. The next <code>nextLine()</code> reads what is left of the number line: an empty String.' },
        { type: 'code', run: true, code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("class.txt");
        out.println(2);
        out.println("Sara Ali");
        out.println("Omar Saleh");
        out.close();

        Scanner in = new Scanner(new File("class.txt"));
        int n = in.nextInt();
        String a = in.nextLine();
        String b = in.nextLine();
        in.close();
        System.out.println("n = " + n);
        System.out.println("a = [" + a + "]");
        System.out.println("b = [" + b + "]");
    }
}`, out: "n = 2\na = []\nb = [Sara Ali]" },
        { type: 'lines', rows: [
          ['int n = in.nextInt();', 'Reads 2. The read position stops after the digit 2, still on line 1.'],
          ['String a = in.nextLine();', 'Reads the rest of line 1, which is nothing: <code>a</code> is the empty String.'],
          ['String b = in.nextLine();', 'Only now we get line 2: <code>Sara Ali</code>. Omar Saleh is never read.']
        ], ar: 'بعد nextInt() يبقى باقي السطر، فتقرأ nextLine() التالية نصاً فارغاً.' },
        { type: 'analogy', title: 'Finishing your plate', en: 'After you eat the main dish (the number), there is still a little rice left on that plate (the end of the line). Before you get a new plate (the next line), you must finish the old one. One extra <code>in.nextLine();</code> finishes the plate.' },
        { type: 'code', code: J`
int n = in.nextInt();
in.nextLine();                   // finish the number line
String a = in.nextLine();        // Sara Ali
String b = in.nextLine();        // Omar Saleh` },
        { type: 'check', q: 'A file has the line <code>3</code> and then three lines with full names. After <code>int n = in.nextInt();</code>, what does the next <code>in.nextLine()</code> return?', options: ['The first full name', 'An empty String (the rest of the number line)', 'The number 3 again', 'It crashes'], answer: 1, explain: 'nextInt() stops after the 3. nextLine() returns what is left of that line, which is nothing.' },
        { type: 'steps', title: 'Worked example: total, count and highest of a marks file', problem: 'A file has the marks <code>70 85 90</code> on one line and <code>60 95</code> on the next. Find the count, the sum, the average and the highest mark.',
          steps: [
            { en: 'Write the marks into <code>marks.txt</code> and close the writer.', code: J`
PrintWriter out = new PrintWriter("marks.txt");
out.println("70 85 90");
out.println("60 95");
out.close();` },
            { en: 'Prepare the variables before the loop: sum, count, and max. For the highest mark we start with 0.', code: J`
int sum = 0;
int count = 0;
int max = 0;` },
            { en: 'Loop while the next token is an int. Read it, add it, count it, compare it.', code: J`
while (in.hasNextInt()) {
    int mark = in.nextInt();
    sum += mark;
    count++;
    if (mark > max) {
        max = mark;
    }
}` },
            { en: 'After the loop print the results. The average needs <code>(double)</code> or <code>printf</code> with decimals: 400 / 5 = 80.00.' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("marks.txt");
        out.println("70 85 90");
        out.println("60 95");
        out.close();

        Scanner in = new Scanner(new File("marks.txt"));
        int sum = 0;
        int count = 0;
        int max = 0;
        while (in.hasNextInt()) {
            int mark = in.nextInt();
            sum += mark;
            count++;
            if (mark > max) {
                max = mark;
            }
        }
        in.close();

        System.out.println("Count: " + count);
        System.out.println("Sum: " + sum);
        System.out.printf("Average: %.2f%n", (double) sum / count);
        System.out.println("Highest: " + max);
    }
}`, out: "Count: 5\nSum: 400\nAverage: 80.00\nHighest: 95", ar: 'جمعنا العلامات وعددناها وأوجدنا الأكبر.' },
        { type: 'steps', title: 'Worked example: a shop’s sales in riyals', problem: 'A small shop saves each sale as a record with three parts: the item (one word), the quantity (int) and the price of one piece in riyals (decimal), for example <code>Dates 3 25.50</code>. Print every sale with its line total, then the total sales.',
          steps: [
            { en: 'Write three records into <code>sales.txt</code> and close it.', code: J`
PrintWriter out = new PrintWriter("sales.txt");
out.println("Dates 3 25.50");
out.println("Coffee 2 18.00");
out.println("Water 10 1.50");
out.close();` },
            { en: 'Each record starts with a word, so the loop asks <code>hasNext()</code>. Inside, read the <b>three</b> parts in order, each with the right method.', code: J`
while (in.hasNext()) {
    String item = in.next();
    int qty = in.nextInt();
    double price = in.nextDouble();` },
            { en: 'Work out the line total, add it to the running total, and print the line with <code>printf</code>.', code: J`
    double lineTotal = qty * price;
    total += lineTotal;
    System.out.printf("%s: %d x %.2f = %.2f%n", item, qty, price, lineTotal);
}` },
            { en: 'After the loop, print the total: 76.50 + 36.00 + 15.00 = 127.50 riyals.' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("sales.txt");
        out.println("Dates 3 25.50");
        out.println("Coffee 2 18.00");
        out.println("Water 10 1.50");
        out.close();

        Scanner in = new Scanner(new File("sales.txt"));
        double total = 0;
        while (in.hasNext()) {
            String item = in.next();
            int qty = in.nextInt();
            double price = in.nextDouble();
            double lineTotal = qty * price;
            total += lineTotal;
            System.out.printf("%s: %d x %.2f = %.2f%n", item, qty, price, lineTotal);
        }
        in.close();
        System.out.printf("Total sales: %.2f riyals%n", total);
    }
}`, out: "Dates: 3 x 25.50 = 76.50\nCoffee: 2 x 18.00 = 36.00\nWater: 10 x 1.50 = 15.00\nTotal sales: 127.50 riyals", ar: 'كل سجل فيه ثلاثة أجزاء: نقرؤها كلها في كل دورة، كل جزء بالدالة المناسبة لنوعه.' }
      ],
      mistakes: [
        { title: 'Using the wrong hasNext method', en: 'If the data are decimals, <code>hasNextInt()</code> stops at the first decimal point.', code: J`
// file: 31.5 29.0
while (in.hasNextInt()) { ... }     // stops immediately
while (in.hasNextDouble()) { ... }  // correct` },
        { title: 'Reading half a record', en: 'If a record has two parts, read both parts in each loop, or the next round will be out of step.' },
        { title: 'Integer division for the average', en: '<code>sum / count</code> with two ints cuts the decimals. Use <code>(double) sum / count</code>.', code: J`
System.out.println(400 / 5);             // 80 (int)
System.out.println(401 / 5);             // 80, not 80.2
System.out.println((double) 401 / 5);    // 80.2` },
        { title: 'Starting max with a value that is too big', en: 'If the highest might be small, start with the first value or a very small number, not with 100.' }
      ],
      remember: [
        'A <b>token</b> is a piece of input separated by spaces or line breaks. Ask first (<code>hasNext...</code>), then read (<code>next...</code>).',
        '<code>hasNextInt()</code> and <code>hasNextDouble()</code> stop at a token of the wrong kind.',
        'For records, read all the parts of one record in each loop turn.',
        'If the file starts with a count, read it first and make an array of that size.',
        'After <code>nextInt()</code>, call <code>nextLine()</code> once to finish the line before reading text lines.',
        'Use <code>(double) sum / count</code> for an average with decimals.'
      ],
      rememberAr: 'الوحدة هي قطعة نص تفصلها مسافة. نسأل بـ hasNext ثم نقرأ بـ next. للسجلات نقرأ كل أجزاء السجل في كل دورة. للمتوسط استخدم (double).',
      practice: [
        { t: 'mcq', q: 'How many tokens are in the line <code>Ali Ahmed 90</code>?', options: ['1', '2', '3', '9'], answer: 2, explain: 'The tokens are Ali, Ahmed and 90.' },
        { t: 'output', q: 'What is the output?', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("v.txt");
        out.println("3 4");
        out.println("5");
        out.close();

        Scanner in = new Scanner(new File("v.txt"));
        int total = 0;
        while (in.hasNextInt()) {
            int v = in.nextInt();
            total += v * v;
        }
        in.close();
        System.out.println(total);
    }
}`, answer: '50', explain: 'The tokens 3, 4 and 5 are read, line breaks do not matter: 9 + 16 + 25 = 50.' },
        { t: 'output', q: 'What is the output?', code: J`
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
}`, answer: 'Sum = 30', explain: 'The loop adds 10 and 20. At abc, hasNextInt() is false, so the loop stops before 30.', explainAr: 'تتوقف الحلقة عند أول كلمة ليست عدداً صحيحاً.' },
        { t: 'mcq', q: 'Which loop test is best for a file that contains decimal prices such as <code>12.5 18.25</code>?', options: ['<code>in.hasNextInt()</code>', '<code>in.hasNextDouble()</code>', '<code>in.hasNextLine()</code> with nextInt()', '<code>in.next()</code>'], answer: 1, explain: 'Decimal numbers are doubles.' },
        { t: 'fill', q: 'Complete the record loop. Each line holds a name and a mark.', code: J`
while (in.___()) {
    String name = in.___();
    int mark = in.___();
    System.out.println(name + ": " + mark);
}`, answers: ['hasNext', 'next', 'nextInt'], explain: 'Ask hasNext(), read the name with next(), read the mark with nextInt().' },
        { t: 'output', q: 'What is the output?', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("s.txt");
        out.println("Ali 85");
        out.println("Sara 92");
        out.println("Omar 67");
        out.close();

        Scanner in = new Scanner(new File("s.txt"));
        int total = 0;
        int count = 0;
        String top = "";
        int topMark = -1;
        while (in.hasNext()) {
            String name = in.next();
            int mark = in.nextInt();
            total += mark;
            count++;
            if (mark > topMark) {
                topMark = mark;
                top = name;
            }
        }
        in.close();
        System.out.println("Students: " + count);
        System.out.printf("Average: %.2f%n", (double) total / count);
        System.out.println("Top: " + top);
    }
}`, answer: "Students: 3\nAverage: 81.33\nTop: Sara", explain: '85 + 92 + 67 = 244 and 244 / 3 = 81.333..., printed as 81.33. Sara has the top mark 92.' },
        { t: 'code', q: 'Read an integer <code>n</code> and then <code>n</code> integers from the keyboard. Write them to <code>numbers.txt</code>, one per line, and close it. Then open <code>numbers.txt</code>, read all the numbers back, and print two lines: <code>Even: E</code> (how many are even) and <code>Sum: S</code>. No prompts.', qAr: 'اكتب الأعداد في ملف ثم اقرأها واطبع عدد الزوجية ومجموعها.',
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
}`, solution: J`
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
            if (x % 2 == 0) {
                even++;
            }
            sum += x;
        }
        file.close();
        System.out.println("Even: " + even);
        System.out.println("Sum: " + sum);
    }
}`, tests: [
            { stdin: '5\n4 7 10 3 6', expected: 'Even: 3\nSum: 30' },
            { stdin: '3\n1 3 5', expected: 'Even: 0\nSum: 9' },
            { stdin: '4\n-2 0 8 11', expected: 'Even: 3\nSum: 17' }
          ], hint: 'Use two different Scanner variables: one for System.in and one for the file. Close the PrintWriter before you open the file for reading.', explain: 'The file must be closed after writing. A hasNextInt loop then reads however many numbers are in the file.' },
        { t: 'bug', q: 'This code should print <code>Sum = 60</code>. It adds the numbers, but then crashes with <code>NoSuchElementException</code> and prints nothing. Tap the line with the bug.', qAr: 'البرنامج يتوقف بخطأ قبل الطباعة. أين الخطأ؟',
          code: J`
PrintWriter out = new PrintWriter("nums.txt");
out.println("10 20");
out.println("30");
out.close();
Scanner in = new Scanner(new File("nums.txt"));
int sum = 0;
while (in.hasNextLine()) {
    sum += in.nextInt();
}
in.close();
System.out.println("Sum = " + sum);`, bug: 7,
          fix: J`
PrintWriter out = new PrintWriter("nums.txt");
out.println("10 20");
out.println("30");
out.close();
Scanner in = new Scanner(new File("nums.txt"));
int sum = 0;
while (in.hasNextInt()) {
    sum += in.nextInt();
}
in.close();
System.out.println("Sum = " + sum);`,
          hint: 'The question and the read must be about the same kind of thing.',
          explain: 'Line 7 asks about a <b>line</b>, but line 8 reads an <b>int</b>. After 30 is read, the end of the last line is still there, so <code>hasNextLine()</code> says true. Then <code>nextInt()</code> finds no number and crashes. Ask the matching question: <code>hasNextInt()</code> goes with <code>nextInt()</code>. The fixed code prints <code>Sum = 60</code>.',
          explainAr: 'السؤال يجب أن يطابق القراءة: hasNextInt() مع nextInt().' },
        { t: 'bug', q: 'The file has the count 2 and then two full names. This code should print <code>Student: Sara Ali</code> and <code>Student: Omar Saleh</code>, but it prints <code>Student: </code> (with nothing) and <code>Student: Sara Ali</code>. Tap the line after which a statement is missing.',
          code: J`
PrintWriter out = new PrintWriter("class.txt");
out.println(2);
out.println("Sara Ali");
out.println("Omar Saleh");
out.close();
Scanner in = new Scanner(new File("class.txt"));
int n = in.nextInt();
for (int i = 0; i < n; i++) {
    System.out.println("Student: " + in.nextLine());
}
in.close();`, bug: 7,
          fix: J`
PrintWriter out = new PrintWriter("class.txt");
out.println(2);
out.println("Sara Ali");
out.println("Omar Saleh");
out.close();
Scanner in = new Scanner(new File("class.txt"));
int n = in.nextInt();
in.nextLine();                   // finish the number line
for (int i = 0; i < n; i++) {
    System.out.println("Student: " + in.nextLine());
}
in.close();`,
          hint: 'Where does nextInt() leave the read position?',
          explain: 'Line 7 reads 2 and stops right after it, still on line 1. The first <code>nextLine()</code> in the loop reads the rest of line 1, which is empty, and the loop uses up one of its two turns. Add <code>in.nextLine();</code> after line 7 to finish the number line. Then both names are printed.',
          explainAr: 'بعد nextInt() نضيف nextLine() لننهي سطر العدد قبل قراءة الأسماء.' },
        { t: 'output', q: 'What is the output?', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("prices.txt");
        out.println(4);
        out.println("12 30 8 25");
        out.close();

        Scanner in = new Scanner(new File("prices.txt"));
        int n = in.nextInt();
        int[] prices = new int[n];
        for (int i = 0; i < n; i++) {
            prices[i] = in.nextInt();
        }
        in.close();
        System.out.println("First: " + prices[0]);
        System.out.println("Last: " + prices[n - 1]);
        System.out.println("Count: " + prices.length);
    }
}`, answer: "First: 12\nLast: 25\nCount: 4", explain: 'The first token (4) is the count, so the array has 4 boxes. The loop fills them with 12, 30, 8 and 25. The first box is 12, the last box (index 3) is 25.', explainAr: 'أول وحدة هي عدد القيم، فنُنشئ مصفوفة بأربعة عناصر ونملؤها.' },
        { t: 'code', q: 'Read an integer <code>n</code>, then <code>n</code> records from the keyboard, each one an item (one word) and its price (a decimal). Write them to <code>shop.txt</code>, one record per line, and close it. Then read <code>shop.txt</code> back and print two lines: <code>Total: T</code> (two decimals) and <code>Most expensive: ITEM</code> (the first one if there is a tie). No prompts.<br>Example: input <code>3</code> then <code>Dates 25.5</code>, <code>Coffee 18</code>, <code>Water 1.5</code> prints<br><code>Total: 45.00</code><br><code>Most expensive: Dates</code>', qAr: 'اكتب{{g:|ي}} السجلات في ملف ثم اقرأ{{g:|ي}}ه واطبع{{g:|ي}} المجموع وأغلى صنف.',
          starter: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // 1) write n records "item price" to shop.txt
        // 2) read shop.txt: total and most expensive item
    }
}`, tests: [ { stdin: '3\nDates 25.5\nCoffee 18\nWater 1.5', expected: 'Total: 45.00\nMost expensive: Dates' }, { stdin: '2\nTea 3\nCake 12.75', expected: 'Total: 15.75\nMost expensive: Cake' } ],
          solution: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        PrintWriter out = new PrintWriter("shop.txt");
        for (int i = 0; i < n; i++) {
            String item = input.next();
            double price = input.nextDouble();
            out.println(item + " " + price);
        }
        out.close();

        Scanner in = new Scanner(new File("shop.txt"));
        double total = 0;
        double maxPrice = -1;
        String maxItem = "";
        while (in.hasNext()) {
            String item = in.next();
            double price = in.nextDouble();
            total += price;
            if (price > maxPrice) {
                maxPrice = price;
                maxItem = item;
            }
        }
        in.close();
        System.out.printf("Total: %.2f%n", total);
        System.out.println("Most expensive: " + maxItem);
    }
}`, hint: 'Each record has two parts: read <code>next()</code> then <code>nextDouble()</code> in every loop turn. Start <code>maxPrice</code> at -1 so any price is bigger.', explain: 'One loop writes the records; a record loop reads both parts each turn, adds the price, and remembers the item with the highest price.' }
      ]
    },
    // ===================================================== Lesson 5
    {
      title: 'When the file is missing: try-catch',
      titleAr: 'عندما يكون الملف مفقوداً: try-catch',
      minutes: 25,
      body: [
        { type: 'h', en: 'The problem: a file that is not there' },
        { type: 'p', en: 'What if you try to read <code>grades.txt</code>, but it does not exist (a spelling mistake, or the wrong folder)? Without help, the program crashes and prints a long red error message. A good program should stay calm and tell the user what is wrong. Java gives you <code>try-catch</code> for this.',
          ar: 'إذا كان الملف غير موجود يتوقف البرنامج بخطأ. نستخدم try-catch لنتعامل مع الخطأ بهدوء.' },
        { type: 'analogy', title: 'A safety net', en: 'A circus performer does a risky jump. Under him there is a safety net. If he falls, the net catches him and the show goes on. <code>try</code> is the risky jump. <code>catch</code> is the net.' },
        { type: 'code', code: J`
try {
    Scanner in = new Scanner(new File("grades.txt"));
    System.out.println(in.nextLine());
    in.close();
} catch (FileNotFoundException e) {
    System.out.println("Sorry, the file was not found.");
}` },
        { type: 'lines', rows: [
          ['try {', 'Start of the risky part. Java runs these lines normally.'],
          ['new Scanner(new File("grades.txt"))', 'This line can fail if the file is missing. When it fails, Java jumps out of the try block immediately.'],
          ['} catch (FileNotFoundException e) {', 'The net: this block runs only if a FileNotFoundException happened. The name <code>e</code> holds the error object.'],
          ['System.out.println("Sorry...");', 'Our friendly message.']
        ], ar: 'try فيها الكود المحتمل فشله، وcatch تعمل فقط عند حدوث الخطأ.' },
        { type: 'check', q: 'When does the code inside <code>catch</code> run?', options: ['Always', 'Never', 'Only if the matching exception happens in the try block', 'Before the try block'], answer: 2, explain: 'catch is the safety net for the matching error only.' },
        { type: 'h', en: 'What happens, step by step' },
        { type: 'p', en: 'In the program below we write <code>grades.txt</code> but then spell the name wrongly when we read (<code>grade.txt</code>).' },
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
}`, out: "File saved.\nSorry, the file was not found.\nProgram continues." },
        { type: 'table', head: ['Step', 'What Java does', 'Printed'], rows: [
          ['1', 'Writes grades.txt and closes it', '(nothing)'],
          ['2', 'Prints the message', 'File saved.'],
          ['3', 'Tries to open grade.txt: fails, jumps out of try', '(nothing)'],
          ['4', 'The line with println(in.nextLine()) is skipped', '(nothing)'],
          ['5', 'catch runs', 'Sorry, the file was not found.'],
          ['6', 'After try-catch, the program continues', 'Program continues.']
        ] },
        { type: 'p', en: 'Notice: <code>main</code> has no <code>throws Exception</code> now. The try-catch handles the checked exception, so the compiler is happy.', ar: 'مع try-catch لا نحتاج throws Exception.' },
        { type: 'note', kind: 'tip', en: 'Two ways to handle a checked exception: <b>declare it</b> (<code>throws Exception</code>, quick, the program stops on error) or <b>catch it</b> (<code>try-catch</code>, the program can recover and continue). Use try-catch when you want a friendly message.' },
        { type: 'note', kind: 'exam', en: 'Everything after the failing line inside <code>try</code> is skipped. The statement after the whole try-catch always runs.', ar: 'باقي سطور try تُتجاهل بعد حدوث الخطأ.' },
        { type: 'memory', title: 'What is e? A reference to an error object',
          en: 'When opening the file fails, Java makes an <b>exception object</b> that describes the problem. In the catch block, the variable <code>e</code> refers to it. Press Next to follow the program with the wrong name <code>grade.txt</code>.',
          code: J`
try {
    Scanner in = new Scanner(new File("grade.txt"));
    System.out.println(in.nextLine());
} catch (FileNotFoundException e) {
    System.out.println("Sorry, the file was not found.");
}
System.out.println("Program continues.");`,
          frames: [
            { label: 'Inside try: <code>new File("grade.txt")</code> makes a label. The disk has only grades.txt.',
              vars: [],
              objects: [{ id: 'A', cls: 'File', fields: [{ name: 'name', value: '"grade.txt"' }, { name: 'exists()', value: 'false' }] }] },
            { label: '<code>new Scanner(...)</code> cannot open the file. Java creates an exception object and jumps out of try. The variable <code>in</code> is never made.',
              vars: [],
              objects: [
                { id: 'A', cls: 'File', fields: [{ name: 'name', value: '"grade.txt"' }, { name: 'exists()', value: 'false' }] },
                { id: 'B', cls: 'FileNotFoundException', fields: [{ name: 'message', value: 'grade.txt (file not found)' }] }] },
            { label: 'In catch: <code>e</code> refers to the exception object. We print our friendly message.',
              vars: [{ name: 'e', type: 'FileNotFoundException', ref: 'B' }],
              objects: [{ id: 'B', cls: 'FileNotFoundException', fields: [{ name: 'message', value: 'grade.txt (file not found)' }] }] },
            { label: 'After the catch block: <code>e</code> lives only inside catch, so it is gone. The program continues.',
              vars: [],
              objects: [{ id: 'B', cls: 'FileNotFoundException', gone: true, fields: [{ name: 'message', value: 'grade.txt (file not found)' }] }] }
          ],
          ar: 'عند الفشل ينشئ Java كائن استثناء، والمتغير e داخل catch يشير إليه، ويختفي بعد نهاية catch.' },
        { type: 'h', en: 'A plan B value' },
        { type: 'p', en: 'Often a missing file is not a disaster. A game reads the best score from <code>best.txt</code>. The first time you play, there is no file yet, so the best score should simply be 0. Give the variable its plan B value <b>before</b> the try. If the file can be read, the value is replaced. If not, the plan B value stays.' },
        { type: 'code', code: J`
int best = 0;                          // plan B value
try {
    Scanner in = new Scanner(new File("best.txt"));
    best = in.nextInt();
    in.close();
} catch (FileNotFoundException e) {
    System.out.println("No saved score. Starting from 0.");
}
System.out.println("Best score: " + best);` },
        { type: 'lines', rows: [
          ['int best = 0;', 'Declared <b>outside</b> and before the try, so it still exists after the try-catch. 0 is the plan B value.'],
          ['best = in.nextInt();', 'Runs only if the file was opened. It replaces the 0 with the saved score.'],
          ['catch (...) { ... }', 'If the file is missing, <code>best</code> keeps 0 and we print a short message.'],
          ['System.out.println("Best score: " + best);', 'Works in both cases, because <code>best</code> lives outside the braces of try.']
        ], ar: 'نعطي المتغير قيمة بديلة قبل try، فإن نجحت القراءة تغيّرت القيمة، وإن فشلت بقيت القيمة البديلة.' },
        { type: 'check', q: 'In the code above, the file <code>best.txt</code> does not exist. What is printed last?', options: ['Best score: 0', 'Nothing, the program crashes', 'Best score: null', 'A compile error'], answer: 0, explain: 'The catch block prints its message, best keeps its plan B value 0, and the last line prints Best score: 0.' },
        { type: 'table', head: ['', '<code>throws Exception</code>', '<code>try-catch</code>'], rows: [
          ['Where', 'On the method header', 'Around the risky lines'],
          ['When the file is missing', 'The program stops with a red error', 'Your catch block runs; the program continues'],
          ['Good for', 'Short practice programs', 'Programs for real users: friendly messages, plan B values']
        ] },
        { type: 'steps', title: 'Worked example: a safe file reader', problem: 'Write "Riyadh 42" into <code>weather.txt</code>. Then try to read the file <code>weather.txt</code> and print its first line. If something goes wrong, print a message.',
          steps: [
            { en: 'Everything that can fail goes inside <code>try</code>.' },
            { en: 'Write the file, then open it and read the first line.', code: J`
PrintWriter out = new PrintWriter("weather.txt");
out.println("Riyadh 42");
out.close();
Scanner in = new Scanner(new File("weather.txt"));
System.out.println("Found: " + in.nextLine());
in.close();` },
            { en: 'Add a catch block with a friendly message.', code: J`
} catch (FileNotFoundException e) {
    System.out.println("File not found");
}` },
            { en: 'This time the file exists, so the catch block does not run. Only "Found: Riyadh 42" appears.' }
          ],
          code: J`
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try {
            PrintWriter out = new PrintWriter("weather.txt");
            out.println("Riyadh 42");
            out.close();

            Scanner in = new Scanner(new File("weather.txt"));
            System.out.println("Found: " + in.nextLine());
            in.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        }
    }
}`, out: "Found: Riyadh 42", ar: 'الملف موجود فلا يعمل catch.' },
        { type: 'steps', title: 'Worked example: a game’s best score', problem: 'A game keeps the best score in <code>best.txt</code>. Read it, with 0 as the plan B value when the file is missing. The player just scored 75. If that beats the best score, save it. Finally read the file again to check. (The program deletes any old file first, so the example is the same every time.)',
          steps: [
            { en: 'Make the label and delete any old file, so the first read must fail.', code: J`
File file = new File("best.txt");
file.delete();` },
            { en: 'Read the best score inside try. The plan B value 0 is set before the try.', code: J`
int best = 0;
try {
    Scanner in = new Scanner(file);
    best = in.nextInt();
    in.close();
} catch (FileNotFoundException e) {
    System.out.println("No saved score. Starting from 0.");
}` },
            { en: 'Compare the new score with the best one. If it is bigger, save it with a PrintWriter.', code: J`
int newScore = 75;
if (newScore > best) {
    best = newScore;
    PrintWriter out = new PrintWriter(file);
    out.println(best);
    out.close();
    System.out.println("New best saved: " + best);
}` },
            { en: 'Read the file again to check. The PrintWriter and this last Scanner are outside the try, so <code>main</code> still says <code>throws Exception</code>. We catch only the read that we expect may fail.', code: J`
Scanner check = new Scanner(file);
System.out.println("File says: " + check.nextInt());
check.close();` }
          ],
          code: J`
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        File file = new File("best.txt");
        file.delete();                       // start clean for this example

        int best = 0;
        try {
            Scanner in = new Scanner(file);
            best = in.nextInt();
            in.close();
        } catch (FileNotFoundException e) {
            System.out.println("No saved score. Starting from 0.");
        }

        int newScore = 75;
        if (newScore > best) {
            best = newScore;
            PrintWriter out = new PrintWriter(file);
            out.println(best);
            out.close();
            System.out.println("New best saved: " + best);
        }

        Scanner check = new Scanner(file);
        System.out.println("File says: " + check.nextInt());
        check.close();
    }
}`, out: "No saved score. Starting from 0.\nNew best saved: 75\nFile says: 75", ar: 'القيمة البديلة 0 تُستخدم عند غياب الملف، ثم نحفظ النتيجة الجديدة ونقرؤها للتأكد.' }
      ],
      mistakes: [
        { title: 'Forgetting the import of FileNotFoundException', en: 'Add <code>import java.io.FileNotFoundException;</code> (or <code>import java.io.*;</code>).' },
        { title: 'Putting only the catch without try', en: 'A catch block must come right after a try block.', code: J`
catch (FileNotFoundException e) { ... }   // wrong alone` },
        { title: 'Expecting lines after the failure to run inside try', en: 'After the exception, Java leaves the try block. The remaining lines of try are skipped.' },
        { title: 'Declaring variables inside try and using them after', en: 'A variable declared inside the braces of <code>try</code> is gone after the closing brace (scope!).' }
      ],
      remember: [
        '<code>try</code> holds the risky code; <code>catch</code> holds the plan B.',
        'Catch the right type: <code>FileNotFoundException</code> for a missing file.',
        'When the exception happens, the rest of <code>try</code> is skipped.',
        'The program continues after the whole try-catch.',
        'Declare a variable with its plan B value <b>before</b> the try, so you can use it after the try-catch.',
        'With try-catch you do not need <code>throws Exception</code> for the lines inside it.'
      ],
      rememberAr: 'try للكود المحتمل فشله وcatch للخطة البديلة. عند حدوث الخطأ يُتجاهل باقي try ثم يكمل البرنامج بعد catch.',
      practice: [
        { t: 'mcq', q: 'What is the purpose of try-catch?', options: ['To make code faster', 'To handle an error and let the program continue', 'To create files', 'To format text'], answer: 1, explain: 'try-catch lets us react to errors.' },
        { t: 'output', q: 'Assume no file named <code>not_there.txt</code> exists. What is the output?', code: J`
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
}`, answer: "A\nC\nD", explain: 'Writing succeeds (A). Opening the missing file fails, so B is skipped, catch prints C, and then D.' },
        { t: 'output', q: 'What is the output? (The file exists.)', code: J`
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try {
            PrintWriter out = new PrintWriter("hi.txt");
            out.println("hello");
            out.close();
            Scanner in = new Scanner(new File("hi.txt"));
            System.out.println(in.nextLine());
            in.close();
        } catch (FileNotFoundException e) {
            System.out.println("missing");
        }
        System.out.println("end");
    }
}`, answer: "hello\nend", explain: 'No exception happens, so catch is skipped.' },
        { t: 'fill', q: 'Complete the code. It reads the first line of <code>data.txt</code> and handles a missing file.', code: J`
___ {
    Scanner in = new Scanner(new File("data.txt"));
    System.out.println(in.nextLine());
    in.close();
} ___ (FileNotFoundException e) {
    System.out.println("Missing file");
}`, answers: ['try', 'catch'], explain: 'The risky code goes in try; the handler starts with catch.' },
        { t: 'mcq', q: 'FileNotFoundException is a <b>checked</b> exception. What does that mean?', options: ['It can never happen', 'The compiler requires you to catch it or declare it with throws', 'The operating system checks it', 'It is ignored automatically'], answer: 1, explain: 'The code does not compile unless it is handled or declared.' },
        { t: 'order', q: 'Order the lines to make a correct try-catch for reading a file.', lines: [
          'try {',
          '    Scanner in = new Scanner(new File("a.txt"));',
          '    System.out.println(in.nextLine());',
          '} catch (FileNotFoundException e) {',
          '    System.out.println("No file");',
          '}'
        ], explain: 'try block first, then the catch block with the exception type.' },
        { t: 'code', q: 'First the program writes <code>data.txt</code> containing <code>Hello Riyadh</code> (already done in the starter). Then it reads a file name from the keyboard. If the file can be opened, print <code>Found: </code> followed by its first line; if not, print <code>File not found</code>. No prompts.<br>Example: input <code>data.txt</code> prints <code>Found: Hello Riyadh</code>; input <code>missing.txt</code> prints <code>File not found</code>.', qAr: 'افتح الملف الذي يكتب اسمه المستخدم أو اطبع رسالة عند فقده.',
          starter: J`
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("data.txt");
        out.println("Hello Riyadh");
        out.close();

        Scanner input = new Scanner(System.in);
        String name = input.next();
        // try to open the file called name
    }
}`, tests: [ { stdin: 'data.txt', expected: 'Found: Hello Riyadh' }, { stdin: 'missing.txt', expected: 'File not found' } ],
          solution: J`
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("data.txt");
        out.println("Hello Riyadh");
        out.close();

        Scanner input = new Scanner(System.in);
        String name = input.next();
        try {
            Scanner in = new Scanner(new File(name));
            System.out.println("Found: " + in.nextLine());
            in.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        }
    }
}`, hint: 'Put new Scanner(new File(name)) inside try and the message inside catch.', explain: 'If the file exists, try completes normally. Otherwise catch prints the message.' },
        { t: 'bug', q: 'This code does not compile: <code>cannot find symbol: variable total</code>. Tap the line with the bug. (Two answers are accepted.)', qAr: 'المتغير غير معروف خارج try. أين الخطأ؟',
          code: J`
try {
    PrintWriter out = new PrintWriter("marks.txt");
    out.println("70 85 90");
    out.close();
    Scanner in = new Scanner(new File("marks.txt"));
    int total = 0;
    while (in.hasNextInt()) {
        total += in.nextInt();
    }
    in.close();
} catch (FileNotFoundException e) {
    System.out.println("No file");
}
System.out.println("Total: " + total);`, bug: [6, 14],
          fix: J`
int total = 0;
try {
    PrintWriter out = new PrintWriter("marks.txt");
    out.println("70 85 90");
    out.close();
    Scanner in = new Scanner(new File("marks.txt"));
    while (in.hasNextInt()) {
        total += in.nextInt();
    }
    in.close();
} catch (FileNotFoundException e) {
    System.out.println("No file");
}
System.out.println("Total: " + total);`,
          hint: 'Where does a variable declared inside braces stop existing?',
          explain: '<code>total</code> is declared on line 6, inside the braces of <code>try</code>, so it does not exist after the closing brace. Line 14 cannot use it. Declare <code>int total = 0;</code> before the try (that is also its plan B value). The fixed code prints <code>Total: 245</code>.',
          explainAr: 'المتغير المعرّف داخل try لا يعيش بعدها. عرّف{{g:|ي}}ه قبل try.' },
        { t: 'bug', q: 'This code always prints <code>File not found</code>, but it should print <code>Score: 88</code>. Tap the line with the bug.',
          code: J`
try {
    PrintWriter out = new PrintWriter("scores.txt");
    out.println("88");
    out.close();
    Scanner in = new Scanner(new File("score.txt"));
    System.out.println("Score: " + in.nextInt());
    in.close();
} catch (FileNotFoundException e) {
    System.out.println("File not found");
}`, bug: 5,
          fix: J`
try {
    PrintWriter out = new PrintWriter("scores.txt");
    out.println("88");
    out.close();
    Scanner in = new Scanner(new File("scores.txt"));
    System.out.println("Score: " + in.nextInt());
    in.close();
} catch (FileNotFoundException e) {
    System.out.println("File not found");
}`,
          hint: 'Compare the two file names letter by letter.',
          explain: 'Line 2 writes <code>scores.txt</code>, but line 5 opens <code>score.txt</code> (no s). That file does not exist, so the Scanner throws and the catch block runs. File names must match exactly. A good habit: keep the name in one variable, such as <code>String name = "scores.txt";</code>, and use it in both places.',
          explainAr: 'اسم الملف في القراءة يختلف عن اسمه في الكتابة. يجب أن يتطابق الاسمان تماماً.' },
        { t: 'output', q: 'What is the output? (The first line deletes any old <code>level.txt</code>, so the file is missing.)', code: J`
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        new File("level.txt").delete();
        int level = 1;
        try {
            Scanner in = new Scanner(new File("level.txt"));
            level = in.nextInt();
            System.out.println("Loaded");
            in.close();
        } catch (FileNotFoundException e) {
            System.out.println("Using level " + level);
        }
        level++;
        System.out.println("Next level: " + level);
    }
}`, answer: "Using level 1\nNext level: 2", explain: 'Opening the missing file throws, so "Loaded" is skipped and the catch prints the plan B value 1. After the try-catch, level becomes 2.', explainAr: 'الملف مفقود فيعمل catch وتبقى القيمة البديلة 1، ثم تزيد إلى 2.' },
        { t: 'code', q: 'The starter writes <code>data.txt</code> with the numbers <code>10 20 30</code>. Read a file name from the keyboard. Add up all the whole numbers in that file and print <code>Total: T</code>. If the file cannot be opened, first print <code>File not found</code>, then <code>Total: 0</code>. No prompts.<br>Example: input <code>data.txt</code> prints <code>Total: 60</code>; input <code>other.txt</code> prints <code>File not found</code> and <code>Total: 0</code>.', qAr: 'اجمع{{g:|ي}} الأعداد في الملف، وإن لم يوجد فاطبع{{g:|ي}} رسالة والمجموع 0.',
          starter: J`
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("data.txt");
        out.println("10 20 30");
        out.close();

        Scanner input = new Scanner(System.in);
        String name = input.next();
        // plan B value before the try, then try to read and add
    }
}`, tests: [ { stdin: 'data.txt', expected: 'Total: 60' }, { stdin: 'other.txt', expected: 'File not found\nTotal: 0' } ],
          solution: J`
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("data.txt");
        out.println("10 20 30");
        out.close();

        Scanner input = new Scanner(System.in);
        String name = input.next();
        int total = 0;
        try {
            Scanner in = new Scanner(new File(name));
            while (in.hasNextInt()) {
                total += in.nextInt();
            }
            in.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        }
        System.out.println("Total: " + total);
    }
}`, hint: 'Write <code>int total = 0;</code> before the try. Print the total after the whole try-catch, so it is printed in both cases.', explain: 'The plan B value 0 is kept when the file is missing; otherwise the loop replaces it with the real sum.' }
      ]
    },
    // ===================================================== Lesson 6
    {
      title: 'try-with-resources and processing one file into another',
      titleAr: 'try مع الموارد ومعالجة ملف إلى ملف آخر',
      minutes: 35,
      body: [
        { type: 'h', en: 'Closing files automatically' },
        { type: 'p', en: 'You have seen how easy it is to forget <code>close()</code>. Java has a feature that closes the file for you: <b>try-with-resources</b>. You open the file in parentheses right after <code>try</code>. When the block ends, Java closes it automatically, even if an error happens.',
          ar: 'try مع الموارد تغلق الملف تلقائياً عند نهاية الكتلة.' },
        { type: 'analogy', title: 'An automatic door', en: 'A normal door: you must remember to close it. An automatic door closes by itself after you pass. try-with-resources is the automatic door.' },
        { type: 'code', code: J`
try (PrintWriter out = new PrintWriter("prices.txt")) {
    out.println(12);
    out.println(30);
}   // out.close() happens here by itself` },
        { type: 'lines', rows: [
          ['try (PrintWriter out = new PrintWriter("prices.txt"))', 'Open the file inside the parentheses. This is the resource.'],
          ['out.println(12); ...', 'Use it inside the braces as usual.'],
          ['}', 'At the closing brace Java calls <code>out.close()</code> for you.']
        ], ar: 'نفتح الملف بين الأقواس بعد try ويُغلق عند }.' },
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
        }   // closed automatically

        int max = 0;
        try (Scanner in = new Scanner(new File("prices.txt"))) {
            while (in.hasNextInt()) {
                int p = in.nextInt();
                if (p > max) {
                    max = p;
                }
            }
        }
        System.out.println("Most expensive: " + max);
    }
}`, out: "Most expensive: 30" },
        { type: 'check', q: 'What is the main benefit of try-with-resources?', options: ['It makes reading faster', 'The file is closed automatically', 'It creates missing files', 'It removes the need for imports'], answer: 1, explain: 'No more forgotten close().' },
        { type: 'note', kind: 'tip', en: 'The variable declared in the parentheses (<code>out</code>, <code>in</code>) lives only inside the try block. This is scope again! Use it only inside the braces.', ar: 'المتغير بين الأقواس يعيش داخل كتلة try فقط.' },
        { type: 'p', en: 'Look at the program again: the variable <code>max</code> is declared <b>before</b> the second try. That is on purpose. We need it after the closing brace to print the answer, so it must live outside the braces.' },
        { type: 'h', en: 'Two files in one try' },
        { type: 'p', en: 'When a program reads one file and writes another, it has two resources. You can open both in the same parentheses, separated by a semicolon. At the closing brace Java closes both of them. You cannot forget one.' },
        { type: 'code', code: J`
try (Scanner in = new Scanner(new File("marks.txt"));
     PrintWriter out = new PrintWriter("report.txt")) {
    while (in.hasNextInt()) {
        out.println(in.nextInt() + 5);      // every mark plus a bonus of 5
    }
}   // in.close() and out.close() happen here` },
        { type: 'lines', rows: [
          ['try (Scanner in = ...;', 'The first resource: a Scanner for the input file. Note the semicolon at the end.'],
          ['PrintWriter out = ...)', 'The second resource: a PrintWriter for the output file. The parentheses close here.'],
          ['out.println(in.nextInt() + 5);', 'Read a mark from one file, write the new mark into the other.'],
          ['}', 'Both files are closed automatically.']
        ], ar: 'يمكن فتح موردين بين القوسين بينهما فاصلة منقوطة، ويُغلقان معاً عند }.' },
        { type: 'p', en: 'try-with-resources can also have a catch block, for a missing file. The catch goes after the braces, as usual. Keep this short form in mind; you will use it more in CS102.' },
        { type: 'code', code: J`
try (Scanner in = new Scanner(new File("menu.txt"))) {
    System.out.println(in.nextLine());
} catch (FileNotFoundException e) {
    System.out.println("No menu file");
}` },
        { type: 'check', q: 'How many files are closed automatically at the closing brace of <code>try (Scanner in = ...; PrintWriter out = ...) { ... }</code>?', options: ['None', 'Only the Scanner', 'Only the PrintWriter', 'Both of them'], answer: 3, explain: 'Every resource declared in the parentheses is closed at the end of the block.' },
        { type: 'h', en: 'Data in, report out' },
        { type: 'p', en: 'Real programs often read one file, think about the data, and write a new file with the results. You need two things open at the same time: a Scanner for the input and a PrintWriter for the output. The plan has three steps: (1) create the input file, (2) read it and write the report, (3) read the report and show it.' },
        { type: 'p', en: 'Why not just print the results on the screen? Because the screen forgets. A report file can be opened tomorrow, emailed to the teacher, or printed for the notice board. The input file stays as it was, so you can run the program again if the data changes.', ar: 'نكتب النتائج في ملف تقرير لأنه يبقى ويمكن إرساله أو طباعته، ويبقى ملف الإدخال كما هو.' },
        { type: 'steps', title: 'Worked example: a pass/fail report', problem: 'A file has student ids and marks. Write a report file that says PASS when the mark is 60 or more, FAIL otherwise. Then show the report.',
          steps: [
            { en: 'Step 1: create the data file <code>marks.txt</code> with the lines <code>201 78</code>, <code>202 45</code>, <code>203 91</code>.', code: J`
PrintWriter data = new PrintWriter("marks.txt");
data.println("201 78");
data.println("202 45");
data.println("203 91");
data.close();` },
            { en: 'Step 2: open the data file for reading and the report file for writing.', code: J`
Scanner in = new Scanner(new File("marks.txt"));
PrintWriter report = new PrintWriter("report.txt");` },
            { en: 'Read one record (id, mark) per loop turn. Write PASS or FAIL.', code: J`
while (in.hasNextInt()) {
    int id = in.nextInt();
    int mark = in.nextInt();
    if (mark >= 60) {
        report.println(id + " PASS");
    } else {
        report.println(id + " FAIL");
    }
}` },
            { en: 'Close both. Then step 3: open <code>report.txt</code> and print its lines.', code: J`
in.close();
report.close();` }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        // 1) create the input data file
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
}`, out: "201 PASS\n202 FAIL\n203 PASS", ar: 'قرأنا ملف العلامات وكتبنا ملف تقرير ثم عرضناه.' },
        { type: 'analogy', title: 'A photocopy machine with a stamp', en: 'You take a pile of papers (input file), look at each one, stamp PASS or FAIL, and put it in a new pile (output file). At the end you read the new pile.' },
        { type: 'memory', title: 'Two files open at the same time',
          en: 'During step 2 the program has two objects: a Scanner that reads <code>marks.txt</code> and a PrintWriter that writes <code>report.txt</code>. Watch the read position move in one file while the waiting text grows for the other.',
          frames: [
            { label: 'After opening both: the Scanner is before the first record; nothing is waiting yet.',
              vars: [{ name: 'in', type: 'Scanner', ref: 'A' }, { name: 'report', type: 'PrintWriter', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'Scanner on marks.txt', fields: [{ name: 'next to read', value: '201 78' }] },
                { id: 'B', cls: 'PrintWriter for report.txt', fields: [{ name: 'waiting text', value: '(nothing)' }, { name: 'on the disk', value: '(empty)' }] }] },
            { label: 'Turn 1: read 201 and 78, write <code>201 PASS</code>.',
              vars: [{ name: 'in', type: 'Scanner', ref: 'A' }, { name: 'report', type: 'PrintWriter', ref: 'B' }, { name: 'id', type: 'int', value: '201' }, { name: 'mark', type: 'int', value: '78' }],
              objects: [
                { id: 'A', cls: 'Scanner on marks.txt', fields: [{ name: 'next to read', value: '202 45' }] },
                { id: 'B', cls: 'PrintWriter for report.txt', fields: [{ name: 'waiting text', value: '201 PASS' }, { name: 'on the disk', value: '(empty)' }] }] },
            { label: 'Turn 3 (after turn 2 wrote <code>202 FAIL</code>): read 203 and 91, write <code>203 PASS</code>. The input file is finished.',
              vars: [{ name: 'in', type: 'Scanner', ref: 'A' }, { name: 'report', type: 'PrintWriter', ref: 'B' }, { name: 'id', type: 'int', value: '203' }, { name: 'mark', type: 'int', value: '91' }],
              objects: [
                { id: 'A', cls: 'Scanner on marks.txt', fields: [{ name: 'next to read', value: '(end of file)' }] },
                { id: 'B', cls: 'PrintWriter for report.txt', fields: [{ name: 'waiting text', value: '201 PASS / 202 FAIL / 203 PASS' }, { name: 'on the disk', value: '(empty)' }] }] },
            { label: 'After <code>in.close(); report.close();</code> The report reaches the disk. Now step 3 can read it.',
              vars: [{ name: 'in', type: 'Scanner', ref: 'A' }, { name: 'report', type: 'PrintWriter', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'Scanner on marks.txt (closed)', fields: [] },
                { id: 'B', cls: 'PrintWriter for report.txt (closed)', fields: [{ name: 'waiting text', value: '(nothing)' }, { name: 'on the disk', value: '201 PASS / 202 FAIL / 203 PASS' }] }] }
          ],
          ar: 'أثناء المعالجة يوجد كائنان: Scanner يقرأ ملف العلامات، وPrintWriter يجمع أسطر التقرير حتى نغلقه.' },
        { type: 'check', q: 'Why do we close <code>report</code> before we open <code>report.txt</code> for reading?', options: ['To save the memory buffer into the file', 'Because Java allows only one file', 'To rename the file', 'It is not necessary'], answer: 0, explain: 'Closing writes the waiting text into the file.' },
        { type: 'steps', title: 'Worked example: name badges for a school event', problem: 'A file <code>guests.txt</code> has guest names in small letters, one per line. Make <code>badges.txt</code> with a number and the name in capital letters on each line, such as <code>1. SARA ALI</code>. Use try-with-resources for every file. Print how many badges were written, then show the badges file.',
          steps: [
            { en: 'Create the input file with a try-with-resources block. No <code>close()</code> needed.', code: J`
try (PrintWriter data = new PrintWriter("guests.txt")) {
    data.println("sara ali");
    data.println("omar saleh");
    data.println("huda nasser");
}` },
            { en: 'Declare the counter <b>before</b> the next try, because we print it after the block.', code: 'int count = 0;' },
            { en: 'Open both files in one try. For each line: add 1 to the counter, change the name to capitals, write it.', code: J`
try (Scanner in = new Scanner(new File("guests.txt"));
     PrintWriter out = new PrintWriter("badges.txt")) {
    while (in.hasNextLine()) {
        count++;
        out.println(count + ". " + in.nextLine().toUpperCase());
    }
}` },
            { en: 'Both files are closed now, so the badges are on the disk. Print the count and read the badges file in a third try.' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        try (PrintWriter data = new PrintWriter("guests.txt")) {
            data.println("sara ali");
            data.println("omar saleh");
            data.println("huda nasser");
        }

        int count = 0;
        try (Scanner in = new Scanner(new File("guests.txt"));
             PrintWriter out = new PrintWriter("badges.txt")) {
            while (in.hasNextLine()) {
                count++;
                out.println(count + ". " + in.nextLine().toUpperCase());
            }
        }
        System.out.println("Badges written: " + count);

        try (Scanner show = new Scanner(new File("badges.txt"))) {
            while (show.hasNextLine()) {
                System.out.println(show.nextLine());
            }
        }
    }
}`, out: "Badges written: 3\n1. SARA ALI\n2. OMAR SALEH\n3. HUDA NASSER", ar: 'فتحنا الملفين في try واحدة فأُغلقا تلقائياً، ثم قرأنا ملف البطاقات.' }
      ],
      mistakes: [
        { title: 'Reading the report before closing the writer', en: 'The report may still be empty. Close first.' },
        { title: 'Using the resource variable after the try block', en: '<code>out</code> does not exist after the closing brace.' },
        { title: 'Using the same file for input and output at the same time', en: 'Opening a PrintWriter on a file erases it. Do not write into the file you are reading.' },
        { title: 'Forgetting that two records have two values', en: 'If a record has an id and a mark, read both with two reads in each loop turn.' }
      ],
      remember: [
        '<code>try (PrintWriter out = ...) { ... }</code> closes the file automatically.',
        'Works also for Scanner: <code>try (Scanner in = new Scanner(new File("a.txt")))</code>. Two resources are separated by <code>;</code> and both are closed.',
        'Process: create input file, read it and write output file, read output file.',
        'Close every file you open (by hand or with try-with-resources).',
        'Never write into the same file that you are reading.'
      ],
      rememberAr: 'try مع الموارد تغلق الملف تلقائياً. خطوات المعالجة: ننشئ ملف الإدخال، نقرؤه ونكتب ملف التقرير، ثم نقرأ التقرير. أغلق كل ملف تفتحه.',
      practice: [
        { t: 'mcq', q: 'Where do you open the file in try-with-resources?', options: ['In the braces of try', 'In parentheses right after the word try', 'After the catch block', 'Before the class'], answer: 1, explain: 'try ( resource ) { ... }' },
        { t: 'output', q: 'What is the output?', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        try (PrintWriter out = new PrintWriter("n.txt")) {
            out.println(5);
            out.println(8);
            out.println(3);
        }
        int max = 0;
        try (Scanner in = new Scanner(new File("n.txt"))) {
            while (in.hasNextInt()) {
                int v = in.nextInt();
                if (v > max) {
                    max = v;
                }
            }
        }
        System.out.println("Max: " + max);
    }
}`, answer: 'Max: 8', explain: 'The loop keeps the largest of 5, 8 and 3.' },
        { t: 'fill', q: 'Complete the try-with-resources statement.', code: J`
___ (PrintWriter out = new ___("a.txt")) {
    out.println("Hi");
}`, answers: ['try', 'PrintWriter'], explain: 'try ( PrintWriter out = new PrintWriter(...) ) { }' },
        { t: 'output', q: 'What is the output? (A mark of 60 or more is a PASS.)', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter data = new PrintWriter("m.txt");
        data.println("301 59");
        data.println("302 60");
        data.close();

        Scanner in = new Scanner(new File("m.txt"));
        PrintWriter report = new PrintWriter("r.txt");
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

        Scanner show = new Scanner(new File("r.txt"));
        while (show.hasNextLine()) {
            System.out.println(show.nextLine());
        }
        show.close();
    }
}`, answer: "301 FAIL\n302 PASS", explain: '59 is below 60 (FAIL). 60 is enough (PASS).' },
        { t: 'order', q: 'Order the steps of the pass/fail program.', lines: [
          'create marks.txt with PrintWriter and close it',
          'open marks.txt with a Scanner and report.txt with a PrintWriter',
          'loop: read id and mark, write PASS or FAIL',
          'close the Scanner and the report writer',
          'open report.txt and print its lines'
        ], explain: 'Create the input first, process it, close the output, then read the output.' },
        { t: 'mcq', q: 'What is wrong with writing the report into <code>marks.txt</code> while reading marks.txt?', options: ['Nothing', 'new PrintWriter("marks.txt") erases the data we are reading', 'Scanner cannot read numbers', 'The report will be too long'], answer: 1, explain: 'Opening a PrintWriter empties the file, so the input data is lost.' },
        { t: 'code', q: 'Read an integer <code>n</code> and then <code>n</code> marks. Write the marks to <code>marks.txt</code> (one per line). Then read them and write <code>report.txt</code> with lines like <code>78 PASS</code> or <code>45 FAIL</code> (PASS when the mark is 50 or more). Finally read <code>report.txt</code> and print it. No prompts.<br>Example: input <code>3</code> then <code>78 45 91</code> prints<br><code>78 PASS</code><br><code>45 FAIL</code><br><code>91 PASS</code>', qAr: 'اكتب العلامات في ملف، ثم أنشئ تقريراً ناجح/راسب واعرضه.',
          starter: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // 1) write the marks to marks.txt
        // 2) read marks.txt, write report.txt
        // 3) read report.txt and print it
    }
}`, tests: [ { stdin: '3\n78 45 91', expected: "78 PASS\n45 FAIL\n91 PASS" }, { stdin: '2\n50 49', expected: "50 PASS\n49 FAIL" } ],
          solution: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        PrintWriter data = new PrintWriter("marks.txt");
        for (int i = 0; i < n; i++) {
            data.println(input.nextInt());
        }
        data.close();

        Scanner in = new Scanner(new File("marks.txt"));
        PrintWriter report = new PrintWriter("report.txt");
        while (in.hasNextInt()) {
            int mark = in.nextInt();
            if (mark >= 50) {
                report.println(mark + " PASS");
            } else {
                report.println(mark + " FAIL");
            }
        }
        in.close();
        report.close();

        Scanner show = new Scanner(new File("report.txt"));
        while (show.hasNextLine()) {
            System.out.println(show.nextLine());
        }
        show.close();
    }
}`, hint: 'Three Scanners and two PrintWriters in total: keyboard, marks file, report file, and the two writers. Close the writers before reading their files.', explain: 'This is the complete workflow: write input, process it into a report, read the report.' },
        { t: 'bug', q: 'This code should write PASS or FAIL for each mark into a report. After it runs, there is no report, and even <code>marks.txt</code> is empty! Tap the line with the bug.', qAr: 'بعد التشغيل أصبح ملف العلامات فارغاً. أين الخطأ؟',
          code: J`
PrintWriter data = new PrintWriter("marks.txt");
data.println("78 45 91");
data.close();
Scanner in = new Scanner(new File("marks.txt"));
PrintWriter report = new PrintWriter("marks.txt");
while (in.hasNextInt()) {
    int mark = in.nextInt();
    report.println(mark >= 60 ? "PASS" : "FAIL");
}
in.close();
report.close();`, bug: 5,
          fix: J`
PrintWriter data = new PrintWriter("marks.txt");
data.println("78 45 91");
data.close();
Scanner in = new Scanner(new File("marks.txt"));
PrintWriter report = new PrintWriter("report.txt");
while (in.hasNextInt()) {
    int mark = in.nextInt();
    report.println(mark >= 60 ? "PASS" : "FAIL");
}
in.close();
report.close();`,
          hint: 'What does new PrintWriter do to a file that already exists?',
          explain: 'Line 5 opens a PrintWriter on <code>marks.txt</code>, the same file the Scanner is about to read. A new PrintWriter empties the file at once, so the marks are erased before they are read: the loop runs zero times and nothing is written. Always write the output into a <b>different</b> file, such as <code>report.txt</code>.',
          explainAr: 'فتح PrintWriter على ملف الإدخال نفسه يمسحه قبل قراءته. اكتب{{g:|ي}} الناتج في ملف آخر.' },
        { t: 'bug', q: 'This code does not compile: <code>cannot find symbol: variable out</code>. Tap the line with the bug.',
          code: J`
try (PrintWriter out = new PrintWriter("todo.txt")) {
    out.println("Buy dates");
    out.println("Call grandmother");
}
out.println("Revise Java");
try (Scanner in = new Scanner(new File("todo.txt"))) {
    while (in.hasNextLine()) {
        System.out.println(in.nextLine());
    }
}`, bug: 5,
          fix: J`
try (PrintWriter out = new PrintWriter("todo.txt")) {
    out.println("Buy dates");
    out.println("Call grandmother");
    out.println("Revise Java");
}
try (Scanner in = new Scanner(new File("todo.txt"))) {
    while (in.hasNextLine()) {
        System.out.println(in.nextLine());
    }
}`,
          hint: 'Where does a resource variable stop existing?',
          explain: 'The variable <code>out</code> lives only inside the braces of its try (lines 1 to 4). On line 5 it no longer exists, and the file is already closed anyway. Move the line inside the block. The fixed code prints the three tasks.',
          explainAr: 'متغير المورد يعيش داخل كتلة try فقط، وبعدها يكون الملف قد أُغلق.' },
        { t: 'output', q: 'What is the output? (F = C * 9 / 5 + 32, with whole numbers.)', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        try (PrintWriter data = new PrintWriter("c.txt")) {
            data.println("0 25 40");
        }
        try (Scanner in = new Scanner(new File("c.txt"));
             PrintWriter out = new PrintWriter("f.txt")) {
            while (in.hasNextInt()) {
                int c = in.nextInt();
                out.println(c + " C = " + (c * 9 / 5 + 32) + " F");
            }
        }
        try (Scanner show = new Scanner(new File("f.txt"))) {
            while (show.hasNextLine()) {
                System.out.println(show.nextLine());
            }
        }
    }
}`, answer: "0 C = 32 F\n25 C = 77 F\n40 C = 104 F", explain: 'Each Celsius value is read from c.txt and one line is written to f.txt: 0 * 9 / 5 + 32 = 32, 25 * 9 / 5 + 32 = 45 + 32 = 77, 40 * 9 / 5 + 32 = 72 + 32 = 104. Both files close at the brace, so f.txt is complete when it is read.', explainAr: 'نقرأ كل درجة مئوية ونكتب ما يقابلها بالفهرنهايت في ملف آخر ثم نعرضه.' }
      ]
    },
    // ===================================================== Lesson 7
    {
      title: 'Adding to a file without erasing it',
      titleAr: 'الإضافة إلى ملف دون مسحه',
      minutes: 25,
      body: [
        { type: 'h', en: 'The problem: a new PrintWriter starts a fresh page' },
        { type: 'p', en: 'In Lesson 1 you saw that <code>new PrintWriter("log.txt")</code> empties the file first. That is a problem for a <b>log</b>: a file that grows a little every day, such as your daily steps, the attendance of a class, or the sales of a shop. On Monday you want to add the Monday line <b>under</b> the Sunday line, not erase Sunday. You need a way to add text at the end of a file. This is called <b>appending</b>.',
          ar: 'PrintWriter العادي يمسح الملف. لإضافة أسطر جديدة في آخر الملف دون مسح القديم نحتاج وضع الإلحاق (append).' },
        { type: 'analogy', title: 'A diary', en: 'Nobody starts a diary again from page one every evening. You open it at the first empty line and continue writing. The old days stay. Appending is writing in a diary. A plain <code>new PrintWriter</code> is tearing out all the pages first.', ar: 'الإلحاق مثل الكتابة في دفتر المذكرات: نكمل بعد آخر سطر ولا نمزّق الصفحات القديمة.' },
        { type: 'h', en: 'Open the file in append mode' },
        { type: 'p', en: 'Java has a class <code>FileWriter</code> (in <code>java.io</code>) that can open a file in <b>append mode</b>. You give it the file name and the value <code>true</code>, which means "yes, append". A FileWriter alone has no <code>println</code> or <code>printf</code>, so we put it inside a PrintWriter. Then you write exactly as before.' },
        { type: 'code', code: J`
PrintWriter log = new PrintWriter(new FileWriter("log.txt", true));
log.println("Mon 9200");
log.close();` },
        { type: 'lines', rows: [
          ['new FileWriter("log.txt", true)', 'Opens log.txt for writing at the <b>end</b>. <code>true</code> means append. If the file does not exist yet, it is created.'],
          ['new PrintWriter( ... )', 'Wraps the FileWriter so we can use <code>print</code>, <code>println</code> and <code>printf</code>.'],
          ['log.println("Mon 9200");', 'The line is added after the last line that is already in the file.'],
          ['log.close();', 'Still needed: the waiting text reaches the disk only now.']
        ], ar: 'new FileWriter(الاسم, true) يفتح الملف للإضافة في آخره، ونضعه داخل PrintWriter لنستخدم println.' },
        { type: 'note', kind: 'tip', en: 'Add <code>import java.io.FileWriter;</code> at the top. Opening a FileWriter can also throw a checked exception, so <code>throws Exception</code> on <code>main</code> covers it, as before.' },
        { type: 'check', q: 'Which line lets you add a new line at the end of <code>notes.txt</code> and keep the old lines?', options: ['<code>new PrintWriter("notes.txt")</code>', '<code>new PrintWriter(new FileWriter("notes.txt", true))</code>', '<code>new Scanner(new File("notes.txt"))</code>', '<code>new File("notes.txt", true)</code>'], answer: 1, explain: 'Only a FileWriter with true opens the file in append mode. A plain PrintWriter erases the file.', ar: 'FileWriter مع true هو الذي يضيف دون مسح.' },
        { type: 'h', en: 'Fresh or append? See the difference' },
        { type: 'p', en: 'The program below writes into the same file four times. After each time, a small method counts the lines in the file, so you can see what happened. Watch the count go 1, 2, 3, and then back to 1.' },
        { type: 'code', run: true, code: J`
import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("log.txt");               // fresh file
        out.println("Sun 8500");
        out.close();
        System.out.println("After PrintWriter: " + countLines("log.txt"));

        out = new PrintWriter(new FileWriter("log.txt", true));     // append
        out.println("Mon 9200");
        out.close();
        System.out.println("After 1st append: " + countLines("log.txt"));

        out = new PrintWriter(new FileWriter("log.txt", true));     // append again
        out.println("Tue 7600");
        out.close();
        System.out.println("After 2nd append: " + countLines("log.txt"));

        out = new PrintWriter("log.txt");                           // erases!
        out.println("Wed 10100");
        out.close();
        System.out.println("After PrintWriter again: " + countLines("log.txt"));
    }

    public static int countLines(String name) throws Exception {
        Scanner in = new Scanner(new File(name));
        int count = 0;
        while (in.hasNextLine()) {
            in.nextLine();
            count++;
        }
        in.close();
        return count;
    }
}`, out: "After PrintWriter: 1\nAfter 1st append: 2\nAfter 2nd append: 3\nAfter PrintWriter again: 1" },
        { type: 'lines', rows: [
          ['out = new PrintWriter("log.txt");', 'Fresh start: the file is emptied, then gets one line. Count: 1.'],
          ['out = new PrintWriter(new FileWriter("log.txt", true));', 'Append: the old line stays and a new one is added. Count: 2, then 3.'],
          ['out = new PrintWriter("log.txt");   (the last time)', 'A plain PrintWriter erases all three lines. Only <code>Wed 10100</code> is left. Count: 1.'],
          ['public static int countLines(String name) throws Exception', 'A method (Unit 6) that opens the file, counts its lines and returns the count. A method that opens a file needs <code>throws Exception</code> in its <b>own</b> header, like main.']
        ], ar: 'الإلحاق يحافظ على الأسطر القديمة، أما PrintWriter العادي فيمسحها كلها.' },
        { type: 'table', head: ['How you open it', 'Old lines', 'If the file is missing'], rows: [
          ['<code>new PrintWriter("log.txt")</code>', 'Erased', 'Created'],
          ['<code>new PrintWriter(new FileWriter("log.txt", true))</code>', '<b>Kept</b>; new lines go at the end', 'Created'],
          ['<code>new PrintWriter(new FileWriter("log.txt"))</code> (no true)', 'Erased', 'Created']
        ] },
        { type: 'memory', title: 'Appending: the pen starts after the last line',
          en: 'Here <code>log.txt</code> already holds two days. The PrintWriter is opened in append mode. Press Next and compare with Lesson 1, where the file was emptied first.',
          code: J`
PrintWriter log = new PrintWriter(new FileWriter("log.txt", true));
log.println("Tue 7600");
log.close();`,
          frames: [
            { label: 'Before: <code>log.txt</code> already has two lines.',
              vars: [],
              objects: [{ id: 'B', cls: 'log.txt (on the disk)', fields: [{ name: 'line 1', value: 'Sun 8500' }, { name: 'line 2', value: 'Mon 9200' }] }] },
            { label: 'After opening in append mode: nothing is erased. The pen waits after line 2.',
              vars: [{ name: 'log', type: 'PrintWriter', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'PrintWriter (append mode)', fields: [{ name: 'writes to', ref: 'B' }, { name: 'adds after', value: 'line 2' }, { name: 'waiting text', value: '(nothing)' }] },
                { id: 'B', cls: 'log.txt (on the disk)', fields: [{ name: 'line 1', value: 'Sun 8500' }, { name: 'line 2', value: 'Mon 9200' }] }] },
            { label: 'After <code>log.println("Tue 7600");</code> The new line is waiting.',
              vars: [{ name: 'log', type: 'PrintWriter', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'PrintWriter (append mode)', fields: [{ name: 'writes to', ref: 'B' }, { name: 'adds after', value: 'line 2' }, { name: 'waiting text', value: 'Tue 7600' }] },
                { id: 'B', cls: 'log.txt (on the disk)', fields: [{ name: 'line 1', value: 'Sun 8500' }, { name: 'line 2', value: 'Mon 9200' }] }] },
            { label: 'After <code>log.close();</code> The new line becomes line 3. The old lines are still there.',
              vars: [{ name: 'log', type: 'PrintWriter', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'PrintWriter (closed)', fields: [{ name: 'writes to', ref: 'B' }] },
                { id: 'B', cls: 'log.txt (on the disk)', fields: [{ name: 'line 1', value: 'Sun 8500' }, { name: 'line 2', value: 'Mon 9200' }, { name: 'line 3', value: 'Tue 7600' }] }] }
          ],
          ar: 'في وضع الإلحاق لا يُمسح شيء، ويُضاف السطر الجديد بعد آخر سطر عند الإغلاق.' },
        { type: 'note', kind: 'warn', en: 'If you forget <code>true</code>, or use a plain <code>new PrintWriter("log.txt")</code>, the log is erased every time and only the last entry survives. This mistake is silent: no error message, just lost data.', ar: 'نسيان true يمسح السجل بصمت دون أي رسالة خطأ.' },
        { type: 'check', q: 'A log has 5 lines. A program opens it with <code>new PrintWriter(new FileWriter("log.txt", true))</code>, writes 2 lines and closes it. How many lines does the file have now?', options: ['2', '5', '7', '0'], answer: 2, explain: 'Append mode keeps the 5 old lines and adds 2 new ones: 7.' },
        { type: 'h', en: 'A daily log with a method' },
        { type: 'p', en: 'In a real app, the program runs once a day and adds one line. Put the adding in a small method: it opens the file in append mode, writes one entry, and closes it. Every call adds exactly one line. In our examples we call the method three times to act like three days.' },
        { type: 'code', code: J`
public static void addEntry(String day, int steps) throws Exception {
    PrintWriter log = new PrintWriter(new FileWriter("steps_log.txt", true));
    log.println(day + " " + steps);
    log.close();
}` },
        { type: 'lines', rows: [
          ['public static void addEntry(String day, int steps) throws Exception', 'Two parameters: the day and the steps. The method opens a file, so it says <code>throws Exception</code>.'],
          ['new PrintWriter(new FileWriter("steps_log.txt", true))', 'Append mode: the older days stay in the file.'],
          ['log.close();', 'Each call closes the file, so each entry is safe on the disk at once.']
        ], ar: 'كل استدعاء للدالة يضيف سطراً واحداً في آخر الملف ثم يغلقه.' },
        { type: 'analogy', title: 'A guest book', en: 'At an event, each guest opens the guest book, writes one line under the last name, and closes it. The next guest does the same. Each call of <code>addEntry</code> is one guest.' },
        { type: 'check', q: 'The log file starts empty. Then <code>addEntry</code> is called 4 times. How many lines does the file have?', options: ['1', '4', '0', '8'], answer: 1, explain: 'Each call appends exactly one line and keeps the others, so 4 calls give 4 lines.' },
        { type: 'steps', title: 'Worked example: a daily step log', problem: 'Start a fresh log <code>steps_log.txt</code> with the title line <code>Daily steps</code>. Add three days with a method that appends one line each time. Then read the log: print the title, each day, the total and the average (whole steps).',
          steps: [
            { en: 'Start the log <b>once</b> with a plain PrintWriter. This empties any old log and writes the title.', code: J`
PrintWriter start = new PrintWriter("steps_log.txt");
start.println("Daily steps");
start.close();` },
            { en: 'Write the method that appends one entry.', code: J`
public static void addEntry(String day, int steps) throws Exception {
    PrintWriter log = new PrintWriter(new FileWriter("steps_log.txt", true));
    log.println(day + " " + steps);
    log.close();
}` },
            { en: 'Call it three times, as if three days passed. The file now has 1 + 3 = 4 lines.', code: J`
addEntry("Sun", 8500);
addEntry("Mon", 9200);
addEntry("Tue", 7600);` },
            { en: 'Read the log: the title line first, then one record (day and steps) per loop turn.', code: J`
System.out.println(in.nextLine());
while (in.hasNext()) {
    String day = in.next();
    int steps = in.nextInt();
    System.out.println(day + ": " + steps);
    total += steps;
    days++;
}` },
            { en: 'Print the total (25300) and the average. <code>total / days</code> uses two ints, so it gives whole steps: 25300 / 3 = 8433.' }
          ],
          code: J`
import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter start = new PrintWriter("steps_log.txt");   // fresh log with a title
        start.println("Daily steps");
        start.close();

        addEntry("Sun", 8500);       // day 1
        addEntry("Mon", 9200);       // day 2
        addEntry("Tue", 7600);       // day 3

        Scanner in = new Scanner(new File("steps_log.txt"));
        System.out.println(in.nextLine());
        int total = 0;
        int days = 0;
        while (in.hasNext()) {
            String day = in.next();
            int steps = in.nextInt();
            System.out.println(day + ": " + steps);
            total += steps;
            days++;
        }
        in.close();
        System.out.println("Total: " + total);
        System.out.println("Average: " + total / days);
    }

    public static void addEntry(String day, int steps) throws Exception {
        PrintWriter log = new PrintWriter(new FileWriter("steps_log.txt", true));
        log.println(day + " " + steps);
        log.close();
    }
}`, out: "Daily steps\nSun: 8500\nMon: 9200\nTue: 7600\nTotal: 25300\nAverage: 8433", ar: 'نبدأ السجل مرة واحدة، ثم تضيف الدالة سطراً في كل استدعاء، وأخيراً نقرأ السجل ونحسب المجموع والمتوسط.' }
      ],
      mistakes: [
        { title: 'Forgetting true', en: 'Without <code>true</code>, a FileWriter erases the file just like a plain PrintWriter.', code: J`
new PrintWriter(new FileWriter("log.txt"))         // erases the log
new PrintWriter(new FileWriter("log.txt", true))   // adds at the end` },
        { title: 'Putting true in the wrong place', en: '<code>true</code> belongs to the FileWriter. <code>new PrintWriter("log.txt", true)</code> does not compile.', code: J`
new PrintWriter("log.txt", true)                   // compile error
new PrintWriter(new FileWriter("log.txt", true))   // correct` },
        { title: 'Appending to a file that should start fresh', en: 'If every run of your program appends the same lines, running it twice doubles them. Start a new log once with a plain PrintWriter; append only the new entries.' },
        { title: 'Forgetting the import', en: 'FileWriter needs <code>import java.io.FileWriter;</code>, or the compiler says <code>cannot find symbol</code>.' }
      ],
      remember: [
        '<code>new PrintWriter("f.txt")</code> erases the file; <code>new PrintWriter(new FileWriter("f.txt", true))</code> <b>adds</b> at the end.',
        '<code>true</code> means append. The file is created if it is missing.',
        'A log grows: start it once with a plain PrintWriter, then append each new entry.',
        'Always <code>close()</code> after appending, as with any writer.',
        'A method that opens a file needs <code>throws Exception</code> in its header too.'
      ],
      rememberAr: 'PrintWriter العادي يمسح الملف، أما new PrintWriter(new FileWriter(الاسم, true)) فيضيف في آخره. نبدأ السجل مرة واحدة ثم نضيف إليه. الدالة التي تفتح ملفاً تحتاج throws Exception.',
      practice: [
        { t: 'mcq', q: 'In <code>new FileWriter("log.txt", true)</code>, what does <code>true</code> mean?', options: ['Erase the file first', 'Add new text at the end and keep the old text', 'Open the file for reading', 'Close the file automatically'], answer: 1, explain: 'true switches on append mode: new text goes after the old text.', explainAr: 'true تعني الإضافة في آخر الملف.' },
        { t: 'output', q: 'What is the output?', code: J`
import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("visits.txt");
        out.println("Ahmad");
        out.close();

        out = new PrintWriter(new FileWriter("visits.txt", true));
        out.println("Noura");
        out.close();

        out = new PrintWriter(new FileWriter("visits.txt", true));
        out.println("Khalid");
        out.close();

        Scanner in = new Scanner(new File("visits.txt"));
        int n = 0;
        while (in.hasNextLine()) {
            n++;
            System.out.println(n + ". " + in.nextLine());
        }
        in.close();
    }
}`, answer: "1. Ahmad\n2. Noura\n3. Khalid", explain: 'The first PrintWriter starts the file with Ahmad. The two appends add Noura and Khalid under it.' },
        { t: 'output', q: 'What is the output? Watch which writers append and which ones erase.', code: J`
import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("t.txt");
        out.println("A");
        out.close();
        out = new PrintWriter(new FileWriter("t.txt", true));
        out.println("B");
        out.close();
        out = new PrintWriter("t.txt");
        out.println("C");
        out.close();
        out = new PrintWriter(new FileWriter("t.txt", true));
        out.println("D");
        out.close();

        Scanner in = new Scanner(new File("t.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        in.close();
    }
}`, answer: "C\nD", explain: 'After A and B, the third writer is a plain PrintWriter: it erases A and B and writes C. The last writer appends D after C.', explainAr: 'الكاتب الثالث عادي فمسح A وB، ثم أُضيف D بعد C.' },
        { t: 'fill', q: 'Complete the line so that it adds to <code>attendance.txt</code> without erasing it.', code: J`
PrintWriter log = new PrintWriter(new ___("attendance.txt", ___));`, answers: ['FileWriter', 'true'], explain: 'A FileWriter with true opens the file in append mode; the PrintWriter gives us println.' },
        { t: 'bug', q: 'This code should keep a log of three days, but at the end the file has only <code>Tue 7600</code>. Tap the line with the bug.', qAr: 'السجل يحتفظ بآخر يوم فقط. أين الخطأ؟',
          code: J`
PrintWriter start = new PrintWriter("log.txt");
start.close();
String[] days = {"Sun 8500", "Mon 9200", "Tue 7600"};
for (int i = 0; i < days.length; i++) {
    PrintWriter log = new PrintWriter("log.txt");
    log.println(days[i]);
    log.close();
}
Scanner in = new Scanner(new File("log.txt"));
while (in.hasNextLine()) {
    System.out.println(in.nextLine());
}
in.close();`, bug: 5,
          fix: J`
PrintWriter start = new PrintWriter("log.txt");
start.close();
String[] days = {"Sun 8500", "Mon 9200", "Tue 7600"};
for (int i = 0; i < days.length; i++) {
    PrintWriter log = new PrintWriter(new FileWriter("log.txt", true));
    log.println(days[i]);
    log.close();
}
Scanner in = new Scanner(new File("log.txt"));
while (in.hasNextLine()) {
    System.out.println(in.nextLine());
}
in.close();`,
          hint: 'What does a plain new PrintWriter do to the lines that are already in the file?',
          explain: 'Line 5 opens a plain PrintWriter in every loop turn, so each turn erases the file and writes only one day. After the loop only the last day is left. Open it in append mode: <code>new PrintWriter(new FileWriter("log.txt", true))</code>. Lines 1 and 2 already start the log fresh once, so the fixed code prints all three days.',
          explainAr: 'كل دورة تفتح PrintWriter عادياً فتمسح الملف. استخدم{{g:|ي}} FileWriter مع true.' },
        { t: 'code', q: 'The starter creates <code>attendance.txt</code> with the title line <code>Attendance</code>. Read an integer <code>n</code> and then <code>n</code> names (one word each). For each name, call the method <code>addName(name)</code>, which opens the file in append mode, writes the name on its own line, and closes the file (as if each student arrives at a different time). Then read the file and print every line, and finally <code>Count: </code> and the number of names. No prompts.<br>Example: input <code>3</code> then <code>Ahmad Noura Khalid</code> prints<br><code>Attendance</code><br><code>Ahmad</code><br><code>Noura</code><br><code>Khalid</code><br><code>Count: 3</code>', qAr: 'أضف{{g:|ي}} كل اسم إلى ملف الحضور بدالة تفتح الملف في وضع الإلحاق، ثم اطبع{{g:|ي}} الملف وعدد الأسماء.',
          starter: J`
import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter start = new PrintWriter("attendance.txt");   // fresh file with a title
        start.println("Attendance");
        start.close();

        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // 1) for each of the n names, call addName(name)
        // 2) read attendance.txt: print every line, then "Count: " and the number of names
    }

    public static void addName(String name) throws Exception {
        // open attendance.txt in append mode, write the name, close
    }
}`, tests: [ { stdin: '3\nAhmad Noura Khalid', expected: "Attendance\nAhmad\nNoura\nKhalid\nCount: 3" }, { stdin: '1\nSara', expected: "Attendance\nSara\nCount: 1" } ],
          solution: J`
import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter start = new PrintWriter("attendance.txt");   // fresh file with a title
        start.println("Attendance");
        start.close();

        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        for (int i = 0; i < n; i++) {
            addName(input.next());
        }

        Scanner in = new Scanner(new File("attendance.txt"));
        System.out.println(in.nextLine());       // the title
        int count = 0;
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
            count++;
        }
        in.close();
        System.out.println("Count: " + count);
    }

    public static void addName(String name) throws Exception {
        PrintWriter log = new PrintWriter(new FileWriter("attendance.txt", true));
        log.println(name);
        log.close();
    }
}`, hint: 'Inside addName: <code>new PrintWriter(new FileWriter("attendance.txt", true))</code>, then println and close. When reading, print the title first and count only the lines after it.', explain: 'Each call of addName appends one line and keeps the others. Reading the title before the loop lets the loop count only the names.' }
      ]
    },
    // ===================================================== Lesson 8
    {
      title: 'Records separated by commas: split and parse',
      titleAr: 'سجلات تفصلها فواصل: split والتحويل إلى أعداد',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why commas?' },
        { type: 'p', en: 'Spaces work well until the data itself has spaces. Look at the line <code>Sara Ali 85</code>. Is the name "Sara" or "Sara Ali"? A Scanner cannot know. The common answer is a <b>comma-separated</b> file, or <b>CSV</b> file (Comma-Separated Values). Each line is one record, and a comma stands between the parts: <code>Sara Ali,85</code>. Spreadsheet programs can save any sheet as a CSV file, so a class mark sheet often arrives like this.',
          ar: 'في ملف CSV تفصل الفاصلة بين أجزاء السجل، فيمكن أن يحتوي الاسم على مسافات.' },
        { type: 'analogy', title: 'A table without its lines', en: 'Think of a mark sheet printed as a table. Now remove the lines of the table, and put a comma where each column line was. That is a CSV file. Each line of the file is a row; the commas show where one column ends and the next one starts.' },
        { type: 'table', head: ['Line in the file', 'Part 1', 'Part 2', 'Part 3'], rows: [
          ['<code>name,course,mark</code>', 'name', 'course', 'mark'],
          ['<code>Sara Ali,CS101,85</code>', 'Sara Ali', 'CS101', '85'],
          ['<code>Omar Saleh,CS101,67</code>', 'Omar Saleh', 'CS101', '67']
        ] },
        { type: 'p', en: 'The first line is often a <b>header</b>: it gives the names of the columns. It is not data, so the program must skip it. Read it once before the loop, as you did with the title line in Lesson 3.' },
        { type: 'h', en: 'Cutting a line: split(",")' },
        { type: 'p', en: 'To use the parts, you must cut the line at every comma. The String method <code>split(",")</code> does exactly this. It gives back an <b>array of Strings</b> (Unit 7), one box per part. The commas themselves are thrown away.' },
        { type: 'code', code: J`
String line = "Sara Ali,CS101,85";
String[] parts = line.split(",");
System.out.println(parts[0]);        // Sara Ali
System.out.println(parts[2]);        // 85
System.out.println(parts.length);    // 3` },
        { type: 'lines', rows: [
          ['String[] parts = line.split(",");', 'Cut the line at each comma. The result is a new array with 3 boxes.'],
          ['parts[0]', 'The first part: <code>Sara Ali</code>. The space inside the name is kept.'],
          ['parts[2]', 'The third part: <code>"85"</code>. Careful: it is still <b>text</b>, not a number.'],
          ['parts.length', 'How many parts: 3. Two commas make three parts.']
        ], ar: 'split(",") تقطع السطر عند كل فاصلة وتعيد مصفوفة من النصوص.' },
        { type: 'memory', title: 'split gives a new array of Strings',
          en: 'Press Next. <code>split</code> makes a brand-new array. Every box holds a piece of the line as text. Only <code>parseInt</code> (next section) turns a piece into a real number.',
          code: J`
String line = "Sara Ali,CS101,85";
String[] parts = line.split(",");
int mark = Integer.parseInt(parts[2]);`,
          frames: [
            { label: 'After <code>String line = "Sara Ali,CS101,85";</code>',
              vars: [{ name: 'line', type: 'String', value: '"Sara Ali,CS101,85"' }],
              objects: [] },
            { label: 'After <code>String[] parts = line.split(",");</code> A new array with 3 boxes of text.',
              vars: [{ name: 'line', type: 'String', value: '"Sara Ali,CS101,85"' }, { name: 'parts', type: 'String[]', ref: 'A' }],
              objects: [{ id: 'A', cls: 'String[] (length 3)', fields: [{ name: '[0]', value: '"Sara Ali"' }, { name: '[1]', value: '"CS101"' }, { name: '[2]', value: '"85"' }] }] },
            { label: 'After <code>int mark = Integer.parseInt(parts[2]);</code> <code>mark</code> holds the number 85 (no quotes).',
              vars: [{ name: 'line', type: 'String', value: '"Sara Ali,CS101,85"' }, { name: 'parts', type: 'String[]', ref: 'A' }, { name: 'mark', type: 'int', value: '85' }],
              objects: [{ id: 'A', cls: 'String[] (length 3)', fields: [{ name: '[0]', value: '"Sara Ali"' }, { name: '[1]', value: '"CS101"' }, { name: '[2]', value: '"85"' }] }] }
          ],
          ar: 'split تنشئ مصفوفة جديدة كل عنصر فيها نص. parseInt تحوّل النص "85" إلى العدد 85.' },
        { type: 'check', q: 'What is <code>"Riyadh,Jeddah,Abha".split(",")[1]</code>?', options: ['"Riyadh"', '"Jeddah"', '"Abha"', '","'], answer: 1, explain: 'The parts are Riyadh (index 0), Jeddah (index 1) and Abha (index 2).' },
        { type: 'h', en: 'From text to number: parseInt and parseDouble' },
        { type: 'p', en: 'Every part that <code>split</code> gives you is a String, even <code>"85"</code>. With text, <code>+</code> means <b>join</b>, not add: <code>"85" + 5</code> is <code>"855"</code>. To do maths, turn the text into a number. <code>Integer.parseInt("85")</code> gives the int 85. <code>Double.parseDouble("12.50")</code> gives the double 12.5. To <b>parse</b> means to read the text and understand it as a value.' },
        { type: 'code', code: J`
String text = "85";
System.out.println(text + 5);            // 855  (joined)
int mark = Integer.parseInt(text);
System.out.println(mark + 5);            // 90   (added)
double price = Double.parseDouble("12.50");
System.out.println(price * 2);           // 25.0` },
        { type: 'lines', rows: [
          ['text + 5', 'Text plus a number joins them: <code>855</code>.'],
          ['Integer.parseInt(text)', 'Turns the text "85" into the int 85.'],
          ['mark + 5', 'Now it is a real number, so + adds: 90.'],
          ['Double.parseDouble("12.50")', 'Turns text with a decimal point into a double: 12.5. Times 2 is 25.0.']
        ], ar: 'Integer.parseInt تحوّل النص إلى عدد صحيح، وDouble.parseDouble تحوّله إلى عدد عشري.' },
        { type: 'analogy', title: 'Reading a price tag', en: 'A price tag shows "12.50" in ink. Before you can add it to your bill, your brain reads the ink and understands it as twelve and a half riyals. <code>parseDouble</code> is that reading step.' },
        { type: 'note', kind: 'warn', en: '<code>parseInt</code> accepts only a clean whole number. <code>Integer.parseInt("mark")</code>, <code>Integer.parseInt("8.5")</code> or <code>Integer.parseInt(" 85")</code> (with a space) stop the program with a <code>NumberFormatException</code>. If a file has spaces after the commas, remove them with <code>trim()</code> from Unit 4: <code>Integer.parseInt(parts[1].trim())</code>.', ar: 'parseInt تتوقف بخطأ إذا كان النص ليس عدداً صحيحاً نظيفاً. استخدم{{g:|ي}} trim() لحذف المسافات.' },
        { type: 'check', q: 'What does <code>Integer.parseInt("40") + 2</code> give?', options: ['"402"', '42', '40.2', 'An error'], answer: 1, explain: 'parseInt turns "40" into the number 40, so + adds: 42.' },
        { type: 'h', en: 'Reading a whole CSV file' },
        { type: 'p', en: 'Now put the pieces together. Skip the header line. Then the loop reads one whole line with <code>nextLine()</code>, splits it, and parses the parts that are numbers.' },
        { type: 'code', run: true, code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("marks.csv");
        out.println("name,course,mark");
        out.println("Sara Ali,CS101,85");
        out.println("Omar Saleh,CS101,67");
        out.println("Huda Nasser,CS101,92");
        out.close();

        Scanner in = new Scanner(new File("marks.csv"));
        in.nextLine();                          // skip the header
        int sum = 0;
        int count = 0;
        while (in.hasNextLine()) {
            String[] parts = in.nextLine().split(",");
            String name = parts[0];
            int mark = Integer.parseInt(parts[2]);
            System.out.println(name + ": " + mark);
            sum += mark;
            count++;
        }
        in.close();
        System.out.printf("Average: %.2f%n", (double) sum / count);
    }
}`, out: "Sara Ali: 85\nOmar Saleh: 67\nHuda Nasser: 92\nAverage: 81.33" },
        { type: 'lines', title: 'The CSV loop', rows: [
          ['in.nextLine();', 'Reads the header line and throws it away.'],
          ['String[] parts = in.nextLine().split(",");', 'Read one record and cut it, in one line. A new array for every record.'],
          ['int mark = Integer.parseInt(parts[2]);', 'The mark is the third part (index 2). Parse it so we can add it.'],
          ['sum += mark; count++;', 'The usual total and counter from Unit 5. The average uses <code>(double)</code>.']
        ], ar: 'في كل دورة: نقرأ السطر، نقطعه بـ split، ثم نحوّل الجزء الرقمي بـ parseInt.' },
        { type: 'check', q: 'In the program above, what happens if you delete the line <code>in.nextLine();</code> before the loop?', options: ['Nothing changes', 'parseInt gets the text "mark" and the program crashes', 'The header is printed as a student with mark 0', 'The average becomes 0'], answer: 1, explain: 'The header is split like a record, and parts[2] is "mark". Integer.parseInt("mark") throws a NumberFormatException.' },
        { type: 'steps', title: 'Worked example: exam marks with halves', problem: 'A CSV file holds each student name, the midterm mark (out of 40) and the final mark (out of 60). Marks can have halves, such as <code>38.5</code>. Print each student with the total out of 100 (one decimal), then the top student.',
          steps: [
            { en: 'Write the CSV file: a header and three records. <code>45</code> has no decimal point, but <code>parseDouble</code> accepts it too.', code: J`
PrintWriter out = new PrintWriter("exams.csv");
out.println("name,midterm,final");
out.println("Sara Ali,38.5,45");
out.println("Omar Saleh,30,41.5");
out.println("Huda Nasser,39,52.5");
out.close();` },
            { en: 'Skip the header. Prepare the top student so far; start the top total at -1 so any real total is bigger.', code: J`
in.nextLine();
String topName = "";
double topTotal = -1;` },
            { en: 'In the loop: read, split, and parse both marks with <code>Double.parseDouble</code>. (We cannot name a variable <code>final</code>: it is a Java keyword.)', code: J`
String[] parts = in.nextLine().split(",");
double midMark = Double.parseDouble(parts[1]);
double finalMark = Double.parseDouble(parts[2]);
double total = midMark + finalMark;` },
            { en: 'Print the student with <code>%.1f</code> and keep the highest total and its name.', code: J`
System.out.printf("%s: %.1f%n", parts[0], total);
if (total > topTotal) {
    topTotal = total;
    topName = parts[0];
}` },
            { en: 'After the loop, print the top student: Huda Nasser with 39 + 52.5 = 91.5.' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("exams.csv");
        out.println("name,midterm,final");
        out.println("Sara Ali,38.5,45");
        out.println("Omar Saleh,30,41.5");
        out.println("Huda Nasser,39,52.5");
        out.close();

        Scanner in = new Scanner(new File("exams.csv"));
        in.nextLine();                               // skip the header
        String topName = "";
        double topTotal = -1;
        while (in.hasNextLine()) {
            String[] parts = in.nextLine().split(",");
            double midMark = Double.parseDouble(parts[1]);
            double finalMark = Double.parseDouble(parts[2]);
            double total = midMark + finalMark;
            System.out.printf("%s: %.1f%n", parts[0], total);
            if (total > topTotal) {
                topTotal = total;
                topName = parts[0];
            }
        }
        in.close();
        System.out.printf("Top: %s (%.1f)%n", topName, topTotal);
    }
}`, out: "Sara Ali: 83.5\nOmar Saleh: 71.5\nHuda Nasser: 91.5\nTop: Huda Nasser (91.5)", ar: 'نقطع كل سطر، ونحوّل العلامتين بـ parseDouble، ونجمعهما، ونحتفظ بأعلى مجموع.' }
      ],
      mistakes: [
        { title: 'Forgetting to parse', en: 'A part from <code>split</code> is a String. You cannot store it in an int, and <code>+</code> joins it instead of adding.', code: J`
int mark = parts[2];                      // compile error: String cannot be converted to int
int mark = Integer.parseInt(parts[2]);    // correct` },
        { title: 'Not skipping the header', en: 'The header is split like a record, and <code>Integer.parseInt("mark")</code> crashes with a NumberFormatException. Read the header once before the loop.' },
        { title: 'Using an index that does not exist', en: 'A line with 2 commas has 3 parts: indexes 0, 1 and 2. <code>parts[3]</code> stops the program with an <code>ArrayIndexOutOfBoundsException</code>.' },
        { title: 'Spaces after the commas', en: 'In <code>Sara, 85</code> the second part is <code>" 85"</code> with a space, and parseInt refuses it. Use <code>parts[1].trim()</code>.' }
      ],
      remember: [
        'A <b>CSV</b> line has its parts separated by commas, so names may contain spaces.',
        'Read the whole line with <code>nextLine()</code>, then <code>split(",")</code> it into a String array.',
        'Every part is text: use <code>Integer.parseInt</code> or <code>Double.parseDouble</code> before doing maths.',
        'Skip the header line once, before the loop.',
        'n commas make n + 1 parts; the last index is <code>parts.length - 1</code>.'
      ],
      rememberAr: 'ملف CSV تفصل الفاصلة بين أجزائه. نقرأ السطر بـ nextLine ثم نقطعه بـ split(","). كل جزء نص، فنحوّله بـ parseInt أو parseDouble. نتخطى سطر العناوين قبل الحلقة.',
      practice: [
        { t: 'mcq', q: 'How many parts does <code>"Riyadh,Jeddah,Dammam,Abha".split(",")</code> give?', options: ['3', '4', '5', '1'], answer: 1, explain: 'Three commas make four parts.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static void main(String[] args) {
        String line = "Huda,90,85";
        String[] p = line.split(",");
        int total = Integer.parseInt(p[1]) + Integer.parseInt(p[2]);
        System.out.println(p[0] + " " + total);
        System.out.println(p[1] + p[2]);
    }
}`, answer: "Huda 175\n9085", explain: 'After parsing, 90 + 85 = 175. On the last line p[1] and p[2] are still Strings, so + joins them: "9085".', explainAr: 'بعد التحويل نجمع الأعداد، أما النصوص فتُلصق ببعضها.' },
        { t: 'fill', q: 'Complete the code that cuts a CSV line and turns the second part into an int.', code: J`
String[] parts = line.___(",");
int mark = Integer.___(parts[1]);`, answers: ['split', 'parseInt'], explain: 'split(",") cuts the line; Integer.parseInt turns the text into an int.' },
        { t: 'bug', q: 'This code should print <code>Riyadh is 44 degrees</code> and <code>Abha is 27 degrees</code>, but it crashes with <code>ArrayIndexOutOfBoundsException</code>. Tap the line with the bug.', qAr: 'البرنامج يتوقف بخطأ في رقم العنصر. أين الخطأ؟',
          code: J`
PrintWriter out = new PrintWriter("cities.csv");
out.println("Riyadh,44");
out.println("Abha,27");
out.close();
Scanner in = new Scanner(new File("cities.csv"));
while (in.hasNextLine()) {
    String[] p = in.nextLine().split(",");
    int temp = Integer.parseInt(p[2]);
    System.out.println(p[0] + " is " + temp + " degrees");
}
in.close();`, bug: 8,
          fix: J`
PrintWriter out = new PrintWriter("cities.csv");
out.println("Riyadh,44");
out.println("Abha,27");
out.close();
Scanner in = new Scanner(new File("cities.csv"));
while (in.hasNextLine()) {
    String[] p = in.nextLine().split(",");
    int temp = Integer.parseInt(p[1]);
    System.out.println(p[0] + " is " + temp + " degrees");
}
in.close();`,
          hint: 'How many parts does "Riyadh,44" have, and what is the last index?',
          explain: 'Each line has one comma, so <code>split</code> gives 2 parts: index 0 (the city) and index 1 (the temperature). Line 8 asks for index 2, which does not exist. Use <code>p[1]</code>.',
          explainAr: 'السطر فيه جزءان فقط، فآخر رقم هو 1 وليس 2.' },
        { t: 'bug', q: 'This code should print <code>Sum: 152</code>, but it crashes with <code>NumberFormatException: For input string: "mark"</code>. Tap the line after which a statement is missing. (Two answers are accepted.)',
          code: J`
PrintWriter out = new PrintWriter("marks.csv");
out.println("name,mark");
out.println("Sara,85");
out.println("Omar,67");
out.close();
Scanner in = new Scanner(new File("marks.csv"));
int sum = 0;
while (in.hasNextLine()) {
    String[] parts = in.nextLine().split(",");
    sum += Integer.parseInt(parts[1]);
}
in.close();
System.out.println("Sum: " + sum);`, bug: [6, 7],
          fix: J`
PrintWriter out = new PrintWriter("marks.csv");
out.println("name,mark");
out.println("Sara,85");
out.println("Omar,67");
out.close();
Scanner in = new Scanner(new File("marks.csv"));
in.nextLine();                    // skip the header
int sum = 0;
while (in.hasNextLine()) {
    String[] parts = in.nextLine().split(",");
    sum += Integer.parseInt(parts[1]);
}
in.close();
System.out.println("Sum: " + sum);`,
          hint: 'What is the first line the loop reads?',
          explain: 'The first line of the file is the header <code>name,mark</code>. The loop splits it and tries <code>Integer.parseInt("mark")</code>, which crashes. Read the header once, right after opening the Scanner (before the loop). Then the sum is 85 + 67 = 152.',
          explainAr: 'السطر الأول عناوين وليس بيانات، فنقرؤه ونتخطاه قبل الحلقة.' },
        { t: 'code', q: 'Read an integer <code>n</code>, then <code>n</code> lines in the form <code>name,mark</code> (names may have spaces). Write them into <code>marks.csv</code> after a header line <code>name,mark</code>, and close the file. Then read <code>marks.csv</code>: skip the header, and print <code>name: mark</code> for every student with a mark of 60 or more. At the end print <code>Passed: P of N</code>. No prompts.<br>Example: input <code>3</code> then <code>Sara Ali,85</code>, <code>Omar Saleh,55</code>, <code>Huda Nasser,92</code> prints<br><code>Sara Ali: 85</code><br><code>Huda Nasser: 92</code><br><code>Passed: 2 of 3</code>', qAr: 'اكتب{{g:|ي}} ملف CSV ثم اقرأ{{g:|ي}}ه واطبع{{g:|ي}} الناجحين وعددهم.',
          starter: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        input.nextLine();               // finish the first line
        // 1) write the header and the n lines to marks.csv
        // 2) read marks.csv: skip the header, split, parse, print the passed students
        // 3) print "Passed: P of N"
    }
}`, tests: [ { stdin: '3\nSara Ali,85\nOmar Saleh,55\nHuda Nasser,92', expected: "Sara Ali: 85\nHuda Nasser: 92\nPassed: 2 of 3" }, { stdin: '2\nAli,40\nMona,59', expected: "Passed: 0 of 2" }, { stdin: '1\nKhalid Fahad,60', expected: "Khalid Fahad: 60\nPassed: 1 of 1" } ],
          solution: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        input.nextLine();               // finish the first line
        PrintWriter out = new PrintWriter("marks.csv");
        out.println("name,mark");
        for (int i = 0; i < n; i++) {
            out.println(input.nextLine());
        }
        out.close();

        Scanner in = new Scanner(new File("marks.csv"));
        in.nextLine();                  // skip the header
        int passed = 0;
        int count = 0;
        while (in.hasNextLine()) {
            String[] parts = in.nextLine().split(",");
            int mark = Integer.parseInt(parts[1]);
            count++;
            if (mark >= 60) {
                System.out.println(parts[0] + ": " + mark);
                passed++;
            }
        }
        in.close();
        System.out.println("Passed: " + passed + " of " + count);
    }
}`, hint: 'Copy each input line as it is with <code>out.println(input.nextLine())</code>. When reading: <code>in.nextLine()</code> once for the header, then split each line and parse <code>parts[1]</code>.', explain: 'The header is written first and skipped first. Each record is split at the comma; the mark is parsed so it can be compared with 60.' }
      ]
    },
    // ===================================================== Lesson 9
    {
      title: 'Counting and searching in a file',
      titleAr: 'العدّ والبحث في ملف',
      minutes: 30,
      body: [
        { type: 'h', en: 'Lines, words and characters' },
        { type: 'p', en: 'A teacher asks for an essay of at least 100 words. A word processor counts the lines, words and characters for you. Now you can write that counter yourself. The ideas are simple counters from Unit 5: one counter goes up for each line, another adds the length of each line, and a third goes up for each word.',
          ar: 'نستطيع أن نكتب بأنفسنا برنامجاً يعدّ الأسطر والكلمات والحروف في ملف.' },
        { type: 'analogy', title: 'Checking an essay with a pencil', en: 'Imagine checking an essay by hand. You make a tick for every line, a tick for every word, and you add up the letters. The computer makes the same ticks, only much faster and without mistakes.' },
        { type: 'code', code: J`
while (in.hasNextLine()) {
    String line = in.nextLine();
    lines++;                    // one more line
    chars += line.length();     // add its characters
}` },
        { type: 'lines', rows: [
          ['lines++;', 'Every turn of the loop is one line, even an empty line.'],
          ['chars += line.length();', 'Add the characters of this line. Spaces count; the invisible line break at the end does not.']
        ], ar: 'نعدّ الأسطر بعدّاد، والحروف بجمع طول كل سطر.' },
        { type: 'p', en: 'For words, open a second Scanner on the same file and read token by token with <code>next()</code>: each token is one word (Lesson 4). Two short loops are easier to get right than one clever loop.' },
        { type: 'code', run: true, code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("essay.txt");
        out.println("Java is fun");
        out.println("I practise every day");
        out.println("Files keep my data");
        out.close();

        Scanner in = new Scanner(new File("essay.txt"));
        int lines = 0;
        int chars = 0;
        while (in.hasNextLine()) {
            String line = in.nextLine();
            lines++;
            chars += line.length();
        }
        in.close();

        Scanner words = new Scanner(new File("essay.txt"));
        int count = 0;
        while (words.hasNext()) {
            words.next();
            count++;
        }
        words.close();

        System.out.println("Lines: " + lines);
        System.out.println("Words: " + count);
        System.out.println("Characters: " + chars);
    }
}`, out: "Lines: 3\nWords: 11\nCharacters: 49" },
        { type: 'p', en: 'Check it by hand: the lines have 11, 20 and 18 characters (49 in total) and 3, 4 and 4 words (11 in total).', ar: 'الكلمات نعدّها بقراءة الوحدات بـ next() في حلقة ثانية.' },
        { type: 'check', q: 'A file has two lines: <code>Hi Sara</code> and <code>Bye</code>. How many characters does the program count?', options: ['10', '9', '11', '3'], answer: 0, explain: '"Hi Sara" has 7 characters (the space counts) and "Bye" has 3: 10. Line breaks are not counted.' },
        { type: 'h', en: 'Finding lines that contain a word' },
        { type: 'p', en: 'Searching is one of the most useful things a program does with a file: find the books with "Java" in the title, the lines of a log that say "ERROR", the students from "Riyadh". A new String method helps: <code>line.contains("Java")</code> is true when the text "Java" appears anywhere inside the line. It is a short way to write <code>line.indexOf("Java") &gt;= 0</code> from Unit 4.' },
        { type: 'code', code: J`
String title = "Learning Java Step by Step";
System.out.println(title.contains("Java"));      // true
System.out.println(title.contains("java"));      // false: small j
System.out.println(title.contains("Step by"));   // true: the space is part of the text` },
        { type: 'lines', rows: [
          ['title.contains("Java")', 'Is the text "Java" somewhere inside the title? Yes: true.'],
          ['title.contains("java")', 'Capital and small letters are different characters, so "java" is not found: false.'],
          ['title.contains("Step by")', 'You can search for several words; the text must appear exactly, with its space.']
        ], ar: 'contains تعيد true إذا ظهر النص داخل السطر، مع مراعاة الحروف الكبيرة والصغيرة.' },
        { type: 'analogy', title: 'A highlighter', en: 'Imagine running a highlighter down a printed list and marking every line that has the word you want. The loop is your hand moving down the page; <code>contains</code> is your eye spotting the word.' },
        { type: 'code', run: true, code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("books.txt");
        out.println("Java for Beginners");
        out.println("History of Riyadh");
        out.println("Learning Java Step by Step");
        out.println("Easy Maths");
        out.close();

        String word = "Java";
        Scanner in = new Scanner(new File("books.txt"));
        int lineNo = 0;
        int found = 0;
        while (in.hasNextLine()) {
            String line = in.nextLine();
            lineNo++;
            if (line.contains(word)) {
                System.out.println("Line " + lineNo + ": " + line);
                found++;
            }
        }
        in.close();
        System.out.println("Found: " + found);
    }
}`, out: "Line 1: Java for Beginners\nLine 3: Learning Java Step by Step\nFound: 2" },
        { type: 'lines', rows: [
          ['lineNo++;', 'Counts <b>every</b> line, so we can say where each match is.'],
          ['if (line.contains(word))', 'Only lines with the word go inside the if.'],
          ['found++;', 'Counts only the matching lines.']
        ], ar: 'عدّاد لكل الأسطر لنعرف المكان، وعدّاد آخر للأسطر المطابقة فقط.' },
        { type: 'note', kind: 'tip', en: 'To ignore capital and small letters, change both sides to small letters first: <code>line.toLowerCase().contains(word.toLowerCase())</code>. Then "java", "Java" and "JAVA" all match.' },
        { type: 'check', q: 'What is <code>"History of Riyadh".contains("riyadh")</code>?', options: ['true', 'false', 'An error', '11'], answer: 1, explain: 'contains is case-sensitive: "riyadh" with a small r is not in the text.' },
        { type: 'h', en: 'The largest value in a column' },
        { type: 'p', en: 'In a CSV file each column holds one kind of value: days in one column, temperatures in another. A common question is: "Which row has the largest value in this column?" Combine three things you know: <code>split</code> and <code>parseInt</code> (Lesson 8) and the "largest so far" pattern (Units 5 and 7). Keep the value <b>and</b> the name from the same row.' },
        { type: 'code', run: true, code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("week.csv");
        out.println("day,temp");
        out.println("Sun,41");
        out.println("Mon,44");
        out.println("Tue,39");
        out.println("Wed,46");
        out.println("Thu,43");
        out.close();

        Scanner in = new Scanner(new File("week.csv"));
        in.nextLine();                               // skip the header
        String hottestDay = "";
        int maxTemp = Integer.MIN_VALUE;
        while (in.hasNextLine()) {
            String[] parts = in.nextLine().split(",");
            int temp = Integer.parseInt(parts[1]);
            if (temp > maxTemp) {
                maxTemp = temp;
                hottestDay = parts[0];
            }
        }
        in.close();
        System.out.println("Hottest: " + hottestDay + " (" + maxTemp + ")");
    }
}`, out: "Hottest: Wed (46)" },
        { type: 'lines', rows: [
          ['int maxTemp = Integer.MIN_VALUE;', 'The smallest int in Java (about minus two billion). Any real temperature is bigger, even a cold night below zero.'],
          ['int temp = Integer.parseInt(parts[1]);', 'The temperature column is index 1. Parse it to compare it.'],
          ['if (temp > maxTemp)', 'A new record! Keep the temperature and the day from the <b>same</b> row.']
        ], ar: 'نقطع كل سطر ونحوّل العمود الرقمي، ونحتفظ بأكبر قيمة مع اسم اليوم من السطر نفسه.' },
        { type: 'memory', title: 'A new array for every line',
          en: 'Each turn, <code>split</code> makes a <b>new</b> array for the new line, and <code>parts</code> moves to it. The old array has no reference left (garbage). <code>maxTemp</code> and <code>hottestDay</code> live outside the loop, so they keep the best row so far.',
          frames: [
            { label: 'Turn 1: <code>"Sun,41"</code> is split. 41 is bigger than MIN_VALUE, so the record is Sun with 41.',
              vars: [{ name: 'parts', type: 'String[]', ref: 'A' }, { name: 'temp', type: 'int', value: '41' }, { name: 'maxTemp', type: 'int', value: '41' }, { name: 'hottestDay', type: 'String', value: '"Sun"' }],
              objects: [{ id: 'A', cls: 'String[] (length 2)', fields: [{ name: '[0]', value: '"Sun"' }, { name: '[1]', value: '"41"' }] }] },
            { label: 'Turn 2: a new array for <code>"Mon,44"</code>. 44 &gt; 41, so the record becomes Mon with 44.',
              vars: [{ name: 'parts', type: 'String[]', ref: 'B' }, { name: 'temp', type: 'int', value: '44' }, { name: 'maxTemp', type: 'int', value: '44' }, { name: 'hottestDay', type: 'String', value: '"Mon"' }],
              objects: [
                { id: 'A', cls: 'String[] (length 2)', gone: true, fields: [{ name: '[0]', value: '"Sun"' }, { name: '[1]', value: '"41"' }] },
                { id: 'B', cls: 'String[] (length 2)', fields: [{ name: '[0]', value: '"Mon"' }, { name: '[1]', value: '"44"' }] }] },
            { label: 'Turn 3: a new array for <code>"Tue,39"</code>. 39 is not bigger than 44, so the record stays Mon with 44.',
              vars: [{ name: 'parts', type: 'String[]', ref: 'C' }, { name: 'temp', type: 'int', value: '39' }, { name: 'maxTemp', type: 'int', value: '44' }, { name: 'hottestDay', type: 'String', value: '"Mon"' }],
              objects: [
                { id: 'B', cls: 'String[] (length 2)', gone: true, fields: [{ name: '[0]', value: '"Mon"' }, { name: '[1]', value: '"44"' }] },
                { id: 'C', cls: 'String[] (length 2)', fields: [{ name: '[0]', value: '"Tue"' }, { name: '[1]', value: '"39"' }] }] }
          ],
          ar: 'في كل دورة تنشئ split مصفوفة جديدة، بينما يحتفظ المتغيران خارج الحلقة بأفضل سطر حتى الآن.' },
        { type: 'check', q: 'Why does the program keep <code>hottestDay</code> as well as <code>maxTemp</code>?', options: ['Because Java needs two variables in every loop', 'To answer "which day?", not only "how hot?"', 'To skip the header', 'To count the lines'], answer: 1, explain: 'maxTemp alone tells you the highest temperature. hottestDay remembers which row it came from.' },
        { type: 'steps', title: 'Worked example: searching the sales of one item', problem: 'A shop keeps <code>sales.csv</code> with the columns <code>day,item,amount</code>. For the item <code>Dates</code>, print how many sales there were, their total in riyals, and the biggest single sale with its day.',
          steps: [
            { en: 'Write the CSV file: a header and five sales.', code: J`
PrintWriter out = new PrintWriter("sales.csv");
out.println("day,item,amount");
out.println("Sun,Dates,48.00");
out.println("Sun,Coffee,35.50");
out.println("Mon,Dates,96.00");
out.println("Tue,Water,6.00");
out.println("Tue,Dates,24.00");
out.close();` },
            { en: 'Skip the header and prepare a counter, a total, and the biggest sale so far with its day.', code: J`
in.nextLine();
int count = 0;
double total = 0;
double biggest = 0;
String biggestDay = "";` },
            { en: 'For each line: split it, and look only at rows whose item column is <b>exactly</b> "Dates". Use <code>equals</code> (Unit 4), never <code>==</code>. We use equals, not contains, because the whole column must match.', code: J`
String[] parts = in.nextLine().split(",");
if (parts[1].equals(wanted)) {
    double amount = Double.parseDouble(parts[2]);
    count++;
    total += amount;
    if (amount > biggest) {
        biggest = amount;
        biggestDay = parts[0];
    }
}` },
            { en: 'After the loop, print the three answers: 3 sales, 48 + 96 + 24 = 168.00 riyals, and the biggest is 96.00 on Mon.' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("sales.csv");
        out.println("day,item,amount");
        out.println("Sun,Dates,48.00");
        out.println("Sun,Coffee,35.50");
        out.println("Mon,Dates,96.00");
        out.println("Tue,Water,6.00");
        out.println("Tue,Dates,24.00");
        out.close();

        String wanted = "Dates";
        Scanner in = new Scanner(new File("sales.csv"));
        in.nextLine();                                // skip the header
        int count = 0;
        double total = 0;
        double biggest = 0;
        String biggestDay = "";
        while (in.hasNextLine()) {
            String[] parts = in.nextLine().split(",");
            if (parts[1].equals(wanted)) {
                double amount = Double.parseDouble(parts[2]);
                count++;
                total += amount;
                if (amount > biggest) {
                    biggest = amount;
                    biggestDay = parts[0];
                }
            }
        }
        in.close();
        System.out.println("Sales of " + wanted + ": " + count);
        System.out.printf("Total: %.2f%n", total);
        System.out.printf("Biggest: %.2f on %s%n", biggest, biggestDay);
    }
}`, out: "Sales of Dates: 3\nTotal: 168.00\nBiggest: 96.00 on Mon", ar: 'نبحث في عمود الصنف بـ equals، ونعدّ ونجمع ونحتفظ بأكبر عملية بيع مع يومها.' }
      ],
      mistakes: [
        { title: 'Comparing a column with ==', en: 'Strings must be compared with <code>equals</code> (Unit 4). With <code>==</code> the test is false even when the text looks the same, so nothing is counted.', code: J`
if (parts[1] == "Dates") { ... }        // wrong: compares references
if (parts[1].equals("Dates")) { ... }   // correct` },
        { title: 'Forgetting that contains is case-sensitive', en: '<code>"Java Basics".contains("java")</code> is false. Change both sides with <code>toLowerCase()</code> if case should not matter.' },
        { title: 'Starting the maximum at 0', en: 'If all values can be below zero (night temperatures in the north in winter), a maximum that starts at 0 never changes and no day is found. Start with <code>Integer.MIN_VALUE</code> or with the first value.' },
        { title: 'Printing the answer inside the loop', en: 'A total or a maximum is only ready <b>after</b> the last line. If you print it inside the loop, you get one line of output for every record.' }
      ],
      remember: [
        'Count lines with a counter, characters with <code>chars += line.length()</code>, words with a <code>next()</code> loop.',
        '<code>line.contains("word")</code> is true when the text appears inside the line; capital letters matter.',
        'Keep a line number when you want to say <b>where</b> you found something.',
        'For the largest value in a column: split, parse, compare, and keep the other parts of the same row.',
        'Compare a whole column with <code>equals</code>, never <code>==</code>, and print the answers after the loop.'
      ],
      rememberAr: 'نعدّ الأسطر والحروف والكلمات بعدّادات. contains تبحث عن نص داخل السطر. لأكبر قيمة في عمود: نقطع ونحوّل ونقارن ونحتفظ ببقية السطر. نقارن النصوص بـ equals.',
      practice: [
        { t: 'mcq', q: 'What is <code>"Riyadh is hot in summer".contains("hot")</code>?', options: ['true', 'false', '"hot"', '10'], answer: 0, explain: 'The text "hot" appears inside the sentence, so contains gives true.' },
        { t: 'output', q: 'What is the output? Note the empty line in the middle.', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("note.txt");
        out.println("Good morning");
        out.println("");
        out.println("Riyadh");
        out.close();

        Scanner in = new Scanner(new File("note.txt"));
        int lines = 0;
        int chars = 0;
        while (in.hasNextLine()) {
            lines++;
            chars += in.nextLine().length();
        }
        in.close();
        System.out.println("Lines: " + lines);
        System.out.println("Characters: " + chars);
    }
}`, answer: "Lines: 3\nCharacters: 18", explain: 'An empty line is still a line, so there are 3 lines. "Good morning" has 12 characters, the empty line 0, "Riyadh" 6: 18.', explainAr: 'السطر الفارغ يُعدّ سطراً، وطوله صفر.' },
        { t: 'output', q: 'What is the output?', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("system.log");
        out.println("08:00 login ok");
        out.println("08:05 ERROR disk full");
        out.println("09:10 save ok");
        out.println("09:15 ERROR no network");
        out.close();

        Scanner in = new Scanner(new File("system.log"));
        int n = 0;
        int errors = 0;
        while (in.hasNextLine()) {
            String line = in.nextLine();
            n++;
            if (line.contains("ERROR")) {
                System.out.println(n + ": " + line);
                errors++;
            }
        }
        in.close();
        System.out.println("Errors: " + errors);
    }
}`, answer: "2: 08:05 ERROR disk full\n4: 09:15 ERROR no network\nErrors: 2", explain: 'n counts every line, so the matches are lines 2 and 4. errors counts only the lines that contain "ERROR".' },
        { t: 'fill', q: 'Complete the loop that counts the characters of every line and the lines that contain the word.', code: J`
while (in.hasNextLine()) {
    String line = in.nextLine();
    chars += line.___();
    if (line.___(word)) {
        found++;
    }
}`, answers: ['length', 'contains'], explain: 'length() gives the number of characters of the line; contains(word) tests whether the word is inside it.' },
        { t: 'bug', q: 'This code should print <code>Dates sold: 2</code>, but it prints <code>Dates sold: 0</code>. Tap the line with the bug.', qAr: 'العدّ يعطي صفراً. أين الخطأ؟',
          code: J`
PrintWriter out = new PrintWriter("sales.csv");
out.println("Dates,48");
out.println("Coffee,35");
out.println("Dates,96");
out.close();
Scanner in = new Scanner(new File("sales.csv"));
int count = 0;
while (in.hasNextLine()) {
    String[] p = in.nextLine().split(",");
    if (p[0] == "Dates") {
        count++;
    }
}
in.close();
System.out.println("Dates sold: " + count);`, bug: 10,
          fix: J`
PrintWriter out = new PrintWriter("sales.csv");
out.println("Dates,48");
out.println("Coffee,35");
out.println("Dates,96");
out.close();
Scanner in = new Scanner(new File("sales.csv"));
int count = 0;
while (in.hasNextLine()) {
    String[] p = in.nextLine().split(",");
    if (p[0].equals("Dates")) {
        count++;
    }
}
in.close();
System.out.println("Dates sold: " + count);`,
          hint: 'How must two Strings be compared in Java?',
          explain: 'Line 10 compares Strings with <code>==</code>. The parts made by <code>split</code> are new String objects, so <code>==</code> (same object?) is false every time, and nothing is counted. Use <code>p[0].equals("Dates")</code> to compare the text. Then the count is 2.',
          explainAr: 'النصوص تُقارن بـ equals وليس بـ ==.' },
        { t: 'code', q: 'The starter writes <code>temps.csv</code> with a header and five cities. Read an integer <code>limit</code> from the keyboard. Print the name of every city whose temperature is <b>above</b> the limit (in file order), then <code>Count: C</code>, then <code>Hottest: CITY</code> (the city with the highest temperature in the whole file). No prompts.<br>Example: input <code>40</code> prints<br><code>Riyadh</code><br><code>Dammam</code><br><code>Count: 2</code><br><code>Hottest: Dammam</code>', qAr: 'اطبع{{g:|ي}} المدن الأعلى من الحد، وعددها، وأحرّ مدينة.',
          starter: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("temps.csv");
        out.println("city,temp");
        out.println("Riyadh,44");
        out.println("Jeddah,38");
        out.println("Abha,27");
        out.println("Dammam,45");
        out.println("Tabuk,35");
        out.close();

        Scanner input = new Scanner(System.in);
        int limit = input.nextInt();
        // read temps.csv: skip the header, split, parse,
        // print the cities above the limit, count them, find the hottest
    }
}`, tests: [ { stdin: '40', expected: "Riyadh\nDammam\nCount: 2\nHottest: Dammam" }, { stdin: '50', expected: "Count: 0\nHottest: Dammam" }, { stdin: '30', expected: "Riyadh\nJeddah\nDammam\nTabuk\nCount: 4\nHottest: Dammam" } ],
          solution: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("temps.csv");
        out.println("city,temp");
        out.println("Riyadh,44");
        out.println("Jeddah,38");
        out.println("Abha,27");
        out.println("Dammam,45");
        out.println("Tabuk,35");
        out.close();

        Scanner input = new Scanner(System.in);
        int limit = input.nextInt();
        Scanner in = new Scanner(new File("temps.csv"));
        in.nextLine();                    // skip the header
        int count = 0;
        int maxTemp = Integer.MIN_VALUE;
        String hottest = "";
        while (in.hasNextLine()) {
            String[] parts = in.nextLine().split(",");
            int temp = Integer.parseInt(parts[1]);
            if (temp > limit) {
                System.out.println(parts[0]);
                count++;
            }
            if (temp > maxTemp) {
                maxTemp = temp;
                hottest = parts[0];
            }
        }
        in.close();
        System.out.println("Count: " + count);
        System.out.println("Hottest: " + hottest);
    }
}`, hint: 'Two separate if statements inside the loop: one for "above the limit", one for "hottest so far". Print Count and Hottest after the loop.', explain: 'Searching and finding the maximum can happen in the same loop, as long as each has its own if and its own variables.' }
      ]
    },
    // ===================================================== Lesson 10
    {
      title: 'Writing a neat report file with printf',
      titleAr: 'كتابة ملف تقرير مرتب باستخدام printf',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why a neat report?' },
        { type: 'p', en: 'A report is written for people: the head of the department, parents, a shop owner. People read in columns. If the names and numbers do not line up, the report is hard to read and looks careless. A neat report has a title, column headings, lines of dashes, one row per record, and totals at the bottom. You already know the tool from Unit 4: <code>printf</code>. It works on a PrintWriter exactly as on <code>System.out</code>.',
          ar: 'التقرير يقرؤه الناس، فيجب أن تكون أعمدته مرتبة. نستخدم printf مع PrintWriter كما نستخدمها مع الشاشة.' },
        { type: 'analogy', title: 'A printed restaurant bill', en: 'Look at a printed bill: the item names on the left, the prices on the right with all the decimal points in one column, a line, and the total at the bottom. Your report file should look like that bill.' },
        { type: 'h', en: 'A quick reminder: width and alignment' },
        { type: 'p', en: 'A number between <code>%</code> and the letter is the <b>width</b>: how many characters the value fills. Spaces fill what is left. A minus sign puts the value on the left. In the table, each <code>·</code> shows one space.' },
        { type: 'table', head: ['Format', 'Meaning', 'Example and result'], rows: [
          ['<code>%s</code>', 'a String, no width', '"Sara" gives <code>Sara</code>'],
          ['<code>%-10s</code>', 'a String, 10 wide, on the <b>left</b> (spaces after it)', '"Sara" gives <code>Sara······</code>'],
          ['<code>%6d</code>', 'an int, 6 wide, on the <b>right</b> (spaces before it)', '85 gives <code>····85</code>'],
          ['<code>%8.2f</code>', 'a double, 8 wide, with 2 decimals', '12.5 gives <code>···12.50</code>'],
          ['<code>%n</code>', 'end the line', '']
        ] },
        { type: 'p', en: 'Rule of thumb: text columns on the <b>left</b> (with <code>-</code>), number columns on the <b>right</b>. Then the last digits of all the numbers line up, like on the bill.' },
        { type: 'code', code: J`
report.printf("%-10s%6s%n", "Name", "Mark");     // the heading
report.printf("%-10s%6d%n", "Sara", 85);         // one row` },
        { type: 'lines', rows: [
          ['report.printf("%-10s%6s%n", "Name", "Mark");', 'The heading uses the <b>same widths</b> as the rows: 10 for the name, 6 for the mark. <code>%6s</code> pushes the word Mark to the right.'],
          ['report.printf("%-10s%6d%n", "Sara", 85);', 'Writes <code>Sara</code> and 6 spaces, then 4 spaces and <code>85</code>: 16 characters, exactly as wide as the heading.']
        ], ar: 'نستخدم العرض نفسه في سطر العناوين وفي الصفوف حتى تتراصف الأعمدة.' },
        { type: 'check', q: 'How many spaces does <code>%6d</code> put before the number 85?', options: ['4', '6', '2', '0'], answer: 0, explain: '85 has 2 digits. The width is 6, so 4 spaces come first.' },
        { type: 'h', en: 'Heading, dashes, rows' },
        { type: 'p', en: 'Build the report in the same order every time: (1) a title, (2) the column headings, (3) a line of dashes as wide as the table, (4) one row per record, written in a loop. Writing the heading with the same widths as the rows is the secret of straight columns.' },
        { type: 'code', run: true, code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        String[] names = {"Sara", "Omar", "Huda"};
        int[] marks = {85, 67, 92};

        PrintWriter report = new PrintWriter("report.txt");
        report.println("CS101 Quiz 1");
        report.printf("%-10s%6s%n", "Name", "Mark");
        report.println("----------------");
        for (int i = 0; i < names.length; i++) {
            report.printf("%-10s%6d%n", names[i], marks[i]);
        }
        report.close();

        Scanner in = new Scanner(new File("report.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        in.close();
    }
}`, out: "CS101 Quiz 1\nName        Mark\n----------------\nSara          85\nOmar          67\nHuda          92" },
        { type: 'lines', rows: [
          ['report.println("----------------");', 'A line of 16 dashes: as wide as one row (10 + 6).'],
          ['for (int i = 0; i < names.length; i++)', 'One row per student, from two parallel arrays (Unit 7).'],
          ['report.printf("%-10s%6d%n", names[i], marks[i]);', 'Same widths as the heading, so the marks end exactly under the word Mark.']
        ], ar: 'العنوان، ثم سطر الأعمدة، ثم سطر الشرطات، ثم صف لكل سجل.' },
        { type: 'analogy', title: 'Lines on a page of squared paper', en: 'In a maths notebook with squares, you write one digit per square, and the numbers line up by themselves. A width in printf gives every value its fixed number of squares.' },
        { type: 'h', en: 'Totals and averages at the bottom' },
        { type: 'p', en: 'A report usually ends with a summary: a second line of dashes and the totals. Keep a running total while you write the rows. After the loop, write the summary with the <b>same widths</b>, so the total sits under the numbers.' },
        { type: 'code', code: J`
report.println("----------------");
report.printf("%-10s%6d%n", "Total", total);
report.printf("%-10s%6.2f%n", "Average", (double) total / names.length);` },
        { type: 'lines', rows: [
          ['report.printf("%-10s%6d%n", "Total", total);', 'The word Total takes the place of a name; the total takes the place of a mark.'],
          ['%6.2f', 'The average is a double: still 6 wide, now with 2 decimals, for example <code> 81.33</code>.']
        ], ar: 'نكتب المجموع والمتوسط بعد الحلقة بالعرض نفسه ليكونا تحت الأعداد.' },
        { type: 'p', en: 'A report often needs several lines of dashes. Write a small method for it. You can pass the PrintWriter to a method, as you passed arrays in Unit 7: the method gets a reference to the same object, so it writes into the same file.' },
        { type: 'code', code: J`
public static void dashes(PrintWriter out, int n) {
    for (int i = 0; i < n; i++) {
        out.print("-");
    }
    out.println();
}` },
        { type: 'check', q: 'The rows use <code>%-10s%6d%n</code>. Which line writes the total so that it sits under the marks?', options: ['<code>printf("%-10s%6d%n", "Total", total)</code>', '<code>printf("%6d%-10s%n", total, "Total")</code>', '<code>println("Total " + total)</code>', '<code>printf("%d%n", total)</code>'], answer: 0, explain: 'Same widths, same order: the label in the 10-wide column, the number in the 6-wide column.' },
        { type: 'steps', title: 'Worked example: a weekly sales report for a shop', problem: 'A shop sold three items this week. Write <code>sales_report.txt</code> with a title, the columns Item, Qty, Price and Total, a line of dashes, one row per item, another line of dashes and the grand total. Then read the report back and print it.',
          steps: [
            { en: 'Keep the data in three parallel arrays.', code: J`
String[] items = {"Dates", "Coffee", "Water"};
int[] qty = {3, 2, 10};
double[] price = {25.50, 18.00, 1.50};` },
            { en: 'Choose widths: Item 12 (left), Qty 5, Price 9, Total 10. The whole table is 12 + 5 + 9 + 10 = 36 characters wide. Write the title and the heading with these widths.', code: J`
report.println("Weekly sales report");
report.printf("%-12s%5s%9s%10s%n", "Item", "Qty", "Price", "Total");
dashes(report, 36);` },
            { en: 'In the loop, work out each line total, add it to the grand total, and write the row with the same widths.', code: J`
for (int i = 0; i < items.length; i++) {
    double lineTotal = qty[i] * price[i];
    grandTotal += lineTotal;
    report.printf("%-12s%5d%9.2f%10.2f%n", items[i], qty[i], price[i], lineTotal);
}` },
            { en: 'After the loop: dashes, then the grand total. The label takes 12 + 5 + 9 = 26 characters, so the number lands in the Total column.', code: J`
dashes(report, 36);
report.printf("%-26s%10.2f%n", "Grand total", grandTotal);
report.close();` },
            { en: 'Read the report back and print every line to check it.' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        String[] items = {"Dates", "Coffee", "Water"};
        int[] qty = {3, 2, 10};
        double[] price = {25.50, 18.00, 1.50};

        PrintWriter report = new PrintWriter("sales_report.txt");
        report.println("Weekly sales report");
        report.printf("%-12s%5s%9s%10s%n", "Item", "Qty", "Price", "Total");
        dashes(report, 36);
        double grandTotal = 0;
        for (int i = 0; i < items.length; i++) {
            double lineTotal = qty[i] * price[i];
            grandTotal += lineTotal;
            report.printf("%-12s%5d%9.2f%10.2f%n", items[i], qty[i], price[i], lineTotal);
        }
        dashes(report, 36);
        report.printf("%-26s%10.2f%n", "Grand total", grandTotal);
        report.close();

        Scanner in = new Scanner(new File("sales_report.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        in.close();
    }

    public static void dashes(PrintWriter out, int n) {
        for (int i = 0; i < n; i++) {
            out.print("-");
        }
        out.println();
    }
}`, out: "Weekly sales report\nItem          Qty    Price     Total\n------------------------------------\nDates           3    25.50     76.50\nCoffee          2    18.00     36.00\nWater          10     1.50     15.00\n------------------------------------\nGrand total                   127.50", ar: 'اخترنا عرضاً لكل عمود واستخدمناه في العناوين والصفوف والمجموع، فخرج التقرير مرتباً.' }
      ],
      mistakes: [
        { title: 'Different widths in the heading and the rows', en: 'If the heading uses <code>%-8s</code> and the rows use <code>%-10s</code>, the columns do not line up. Copy the same widths.' },
        { title: 'Using %d for a double', en: '<code>%d</code> is only for whole numbers. Giving it a double stops the program with an <code>IllegalFormatConversionException</code>. Use <code>%f</code>, for example <code>%8.2f</code>.', code: J`
out.printf("%6d%n", 12.75);      // crash
out.printf("%6.2f%n", 12.75);    // correct:  12.75` },
        { title: 'Forgetting %n', en: 'printf does not end the line by itself. Without <code>%n</code> all the rows run together on one long line.' },
        { title: 'A width that is too small', en: 'A width is a minimum. <code>%3d</code> with 12000 still writes all five digits, and the rest of that row moves to the right. Choose widths for your biggest value.' }
      ],
      remember: [
        '<code>printf</code> works on a PrintWriter exactly as on <code>System.out</code>.',
        'The width is the number after <code>%</code>; <code>-</code> puts the value on the left. Text left, numbers right.',
        'Use the same widths for the heading, the rows and the totals.',
        'Order of a report: title, headings, dashes, rows (loop), dashes, totals.',
        'You can pass the PrintWriter to a method, for example to write a line of dashes.'
      ],
      rememberAr: 'printf تعمل مع PrintWriter كما مع الشاشة. العدد بعد % هو العرض، والسالب للمحاذاة يساراً. نستخدم العرض نفسه في العناوين والصفوف والمجاميع.',
      practice: [
        { t: 'mcq', q: 'What does <code>%-8s</code> write for the text "Tea"?', options: ['Tea and then 5 spaces (8 characters, on the left)', '5 spaces and then Tea (on the right)', 'Only the first 8 letters of the text', 'Tea 8 times'], answer: 0, explain: 'The width is 8 and the minus puts the text on the left, so 5 spaces follow the 3 letters.' },
        { t: 'output', q: 'What is the output? The brackets show where each line starts and ends.', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("t.txt");
        out.printf("%-6s%4d%n", "Tea", 3);
        out.printf("%-6s%4d%n", "Cake", 12);
        out.close();

        Scanner in = new Scanner(new File("t.txt"));
        while (in.hasNextLine()) {
            System.out.println("[" + in.nextLine() + "]");
        }
        in.close();
    }
}`, answer: "[Tea      3]\n[Cake    12]", explain: '"Tea" fills 6 characters: Tea and 3 spaces. Then 3 fills 4 characters: 3 spaces and 3. So 6 spaces stand between Tea and 3. For Cake: 2 spaces, then 2 spaces and 12.', explainAr: 'كل قيمة تملأ عرضها المحدد، والمسافات تكمل الباقي.' },
        { t: 'output', q: 'What is the output?', code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        double[] prices = {12.5, 7.25};
        PrintWriter out = new PrintWriter("bill.txt");
        double total = 0;
        for (int i = 0; i < prices.length; i++) {
            out.printf("Item %d:%8.2f%n", i + 1, prices[i]);
            total += prices[i];
        }
        out.printf("Total: %8.2f%n", total);
        out.close();

        Scanner in = new Scanner(new File("bill.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        in.close();
    }
}`, answer: "Item 1:   12.50\nItem 2:    7.25\nTotal:    19.75", explain: '%8.2f writes each price in 8 characters with 2 decimals: "   12.50" and "    7.25". The total 19.75 is written the same way after "Total: ", so all three numbers end in the same column.' },
        { t: 'fill', q: 'Complete the format: the item name 10 wide on the left, the price (a double) 8 wide with 2 decimals.', code: J`
out.printf("%___s%___%n", item, price);`, answers: ['-10', '8.2f'], explain: '%-10s is a left-aligned String 10 wide; %8.2f is a double 8 wide with 2 decimals.' },
        { t: 'bug', q: 'This code should write a small menu with prices, but it crashes with <code>IllegalFormatConversionException: d != java.lang.Double</code>. Tap the line with the bug.', qAr: 'البرنامج يتوقف بسبب تنسيق خاطئ. أين الخطأ؟',
          code: J`
String[] items = {"Tea", "Cake"};
double[] prices = {3.0, 12.75};
PrintWriter out = new PrintWriter("menu.txt");
for (int i = 0; i < items.length; i++) {
    out.printf("%-8s%6d%n", items[i], prices[i]);
}
out.close();
Scanner in = new Scanner(new File("menu.txt"));
while (in.hasNextLine()) {
    System.out.println(in.nextLine());
}
in.close();`, bug: 5,
          fix: J`
String[] items = {"Tea", "Cake"};
double[] prices = {3.0, 12.75};
PrintWriter out = new PrintWriter("menu.txt");
for (int i = 0; i < items.length; i++) {
    out.printf("%-8s%6.2f%n", items[i], prices[i]);
}
out.close();
Scanner in = new Scanner(new File("menu.txt"));
while (in.hasNextLine()) {
    System.out.println(in.nextLine());
}
in.close();`,
          hint: 'Which format letter is for whole numbers, and which for decimals?',
          explain: 'On line 5, <code>%6d</code> is for whole numbers, but <code>prices[i]</code> is a double, so printf stops with an exception. Use <code>%6.2f</code>. The fixed code prints <code>Tea       3.00</code> and <code>Cake     12.75</code>.',
          explainAr: '%d للأعداد الصحيحة فقط، والعدد العشري يحتاج %f.' },
        { t: 'code', q: 'Read an integer <code>n</code>, then <code>n</code> records <code>name mark</code> (one-word names, whole marks). Write <code>report.txt</code> exactly like this: the heading with <code>%-10s%6s%n</code> ("Name", "Mark"), a line of 16 dashes, one row per student with <code>%-10s%6d%n</code>, another line of 16 dashes, and the row <code>Average</code> with <code>%-10s%6.2f%n</code>. Close the file, then read it back and print every line. No prompts.<br>Example: input <code>3</code> then <code>Sara 85</code>, <code>Omar 67</code>, <code>Huda 92</code> prints<br><code>Name        Mark</code><br><code>----------------</code><br><code>Sara          85</code><br><code>Omar          67</code><br><code>Huda          92</code><br><code>----------------</code><br><code>Average    81.33</code>', qAr: 'اكتب{{g:|ي}} تقريراً مرتباً بالأعمدة والمتوسط، ثم اقرأ{{g:|ي}}ه واطبع{{g:|ي}}ه.',
          starter: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        PrintWriter report = new PrintWriter("report.txt");
        // heading, dashes, one row per student, dashes, average
        // close, then read report.txt and print every line
    }
}`, tests: [ { stdin: '3\nSara 85\nOmar 67\nHuda 92', expected: "Name        Mark\n----------------\nSara          85\nOmar          67\nHuda          92\n----------------\nAverage    81.33" }, { stdin: '1\nAli 70', expected: "Name        Mark\n----------------\nAli           70\n----------------\nAverage    70.00" } ],
          solution: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        PrintWriter report = new PrintWriter("report.txt");
        report.printf("%-10s%6s%n", "Name", "Mark");
        report.println("----------------");
        int total = 0;
        for (int i = 0; i < n; i++) {
            String name = input.next();
            int mark = input.nextInt();
            total += mark;
            report.printf("%-10s%6d%n", name, mark);
        }
        report.println("----------------");
        report.printf("%-10s%6.2f%n", "Average", (double) total / n);
        report.close();

        Scanner in = new Scanner(new File("report.txt"));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        in.close();
    }
}`, hint: 'Write each row as soon as you read the record, and keep a running total. The average needs <code>(double) total / n</code>.', explain: 'The same widths (10 and 6) are used for the heading, the rows and the average, so the columns line up.' }
      ]
    },
    // ===================================================== Lesson 11
    {
      title: 'Project: a class results report',
      titleAr: 'مشروع: تقرير نتائج الصف',
      minutes: 30,
      body: [
        { type: 'h', en: 'The task' },
        { type: 'p', en: 'At the end of the term, the course coordinator has a CSV file: one line per student with three marks (quiz, midterm, final), each out of 100. She needs a results file for the department: every student with the average and a letter grade, the class average, and the top student. This project uses almost everything from CS101: Scanner and files, <code>split</code> and <code>parseInt</code>, arrays, methods, if-else and printf.',
          ar: 'في هذا المشروع نقرأ ملف الطلاب، ونحسب المتوسط والتقدير بدوال، ونكتب ملف تقرير ثم نقرؤه للتأكد.' },
        { type: 'analogy', title: 'A factory line', en: 'In a factory, each station does one job: one cuts, one paints, one packs. Nobody does everything. Our program works the same way: each method does one small job, and <code>main</code> just passes the work from station to station. This is the stepwise design you learned in Unit 6.' },
        { type: 'h', en: 'Plan: one method for each job' },
        { type: 'table', head: ['Method', 'Its job', 'Gives back'], rows: [
          ['<code>countLines(fileName)</code>', 'Count the lines of a file (Lesson 7)', 'an int'],
          ['<code>average(a, b, c)</code>', 'The average of three marks', 'a double'],
          ['<code>letter(avg)</code>', 'The letter grade for an average', 'a char'],
          ['<code>writeReport(fileName, names, avgs)</code>', 'Write the neat results file', 'nothing (void)'],
          ['<code>printFile(fileName)</code>', 'Print every line of a file on the screen', 'nothing (void)']
        ] },
        { type: 'p', en: 'With this plan, <code>main</code> reads like a table of contents: write the data, read it into arrays, write the report, print the report. Each method is short, so each one is easy to test on its own.' },
        { type: 'check', q: 'Which method should return a <code>char</code>?', options: ['countLines', 'average', 'letter', 'printFile'], answer: 2, explain: 'A letter grade such as \'A\' or \'B\' is one character, so letter returns a char.' },
        { type: 'h', en: 'The calculating methods' },
        { type: 'p', en: 'Start with the two methods that only calculate. They do not touch any file, so they need no <code>throws Exception</code>. Grades: A from 90, B from 80, C from 70, D from 60, otherwise F.' },
        { type: 'code', code: J`
public static double average(int a, int b, int c) {
    return (a + b + c) / 3.0;
}

public static char letter(double avg) {
    if (avg >= 90) {
        return 'A';
    } else if (avg >= 80) {
        return 'B';
    } else if (avg >= 70) {
        return 'C';
    } else if (avg >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}` },
        { type: 'lines', rows: [
          ['return (a + b + c) / 3.0;', 'Dividing by <code>3.0</code> (a double) keeps the decimals: 268 / 3.0 = 89.33. With <code>3</code> it would be 89.'],
          ['if (avg >= 90) ... else if (avg >= 80)', 'Check from the <b>highest</b> limit down. An average of 85 fails the first test and stops at the second: B.'],
          ['return \'F\';', 'Everything below 60. A char is written in single quotes.']
        ], ar: 'نقسم على 3.0 لنحتفظ بالكسور، ونفحص حدود التقدير من الأعلى إلى الأدنى.' },
        { type: 'check', q: 'What does <code>letter(79.99)</code> return?', options: ["'B'", "'C'", "'D'", "'A'"], answer: 1, explain: '79.99 is not 80 or more, but it is 70 or more, so the answer is C.' },
        { type: 'h', en: 'Reading the file into arrays' },
        { type: 'p', en: 'Why arrays? The report needs the data more than once: to write the rows, to find the class average, to find the top student, and maybe later to sort the students (Unit 7). A file is read from top to bottom only once per Scanner; an array can be visited as often as you like. To make the arrays the right size, count the lines first, and subtract 1 for the header.' },
        { type: 'code', code: J`
int n = countLines("students.csv") - 1;       // minus the header
String[] names = new String[n];
double[] avgs = new double[n];
Scanner in = new Scanner(new File("students.csv"));
in.nextLine();                                 // skip the header
for (int i = 0; i < n; i++) {
    String[] p = in.nextLine().split(",");
    names[i] = p[0];
    avgs[i] = average(Integer.parseInt(p[1]), Integer.parseInt(p[2]), Integer.parseInt(p[3]));
}
in.close();` },
        { type: 'lines', rows: [
          ['int n = countLines("students.csv") - 1;', 'The first pass only counts. 6 lines minus the header = 5 students.'],
          ['String[] names = new String[n]; double[] avgs = new double[n];', 'Two parallel arrays: box i of each array belongs to the same student.'],
          ['in.nextLine();', 'The second pass starts: skip the header.'],
          ['avgs[i] = average(Integer.parseInt(p[1]), ...);', 'Parse the three marks and let the method compute the average.']
        ], ar: 'نعدّ الأسطر أولاً لنعرف حجم المصفوفتين، ثم نقرأ الملف مرة ثانية ونملؤهما.' },
        { type: 'memory', title: 'Two parallel arrays fill up',
          en: '<code>names</code> and <code>avgs</code> refer to two array objects of the same length. The loop fills box 0 of both, then box 1 of both, and so on. Press Next.',
          frames: [
            { label: 'After the arrays are made (n = 5): empty boxes (<code>null</code> for Strings, 0.0 for doubles).',
              vars: [{ name: 'n', type: 'int', value: '5' }, { name: 'names', type: 'String[]', ref: 'A' }, { name: 'avgs', type: 'double[]', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'String[] (length 5)', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }, { name: '[3]', value: 'null' }, { name: '[4]', value: 'null' }] },
                { id: 'B', cls: 'double[] (length 5)', fields: [{ name: '[0]', value: '0.0' }, { name: '[1]', value: '0.0' }, { name: '[2]', value: '0.0' }, { name: '[3]', value: '0.0' }, { name: '[4]', value: '0.0' }] }] },
            { label: 'After turn i = 0 (<code>Sara Ali,85,90,92</code>): box 0 of both arrays is filled.',
              vars: [{ name: 'n', type: 'int', value: '5' }, { name: 'names', type: 'String[]', ref: 'A' }, { name: 'avgs', type: 'double[]', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'String[] (length 5)', fields: [{ name: '[0]', value: '"Sara Ali"' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }, { name: '[3]', value: 'null' }, { name: '[4]', value: 'null' }] },
                { id: 'B', cls: 'double[] (length 5)', fields: [{ name: '[0]', value: '89.0' }, { name: '[1]', value: '0.0' }, { name: '[2]', value: '0.0' }, { name: '[3]', value: '0.0' }, { name: '[4]', value: '0.0' }] }] },
            { label: 'After turn i = 1 (<code>Omar Saleh,70,65,72</code>): box 1 of both arrays.',
              vars: [{ name: 'n', type: 'int', value: '5' }, { name: 'names', type: 'String[]', ref: 'A' }, { name: 'avgs', type: 'double[]', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'String[] (length 5)', fields: [{ name: '[0]', value: '"Sara Ali"' }, { name: '[1]', value: '"Omar Saleh"' }, { name: '[2]', value: 'null' }, { name: '[3]', value: 'null' }, { name: '[4]', value: 'null' }] },
                { id: 'B', cls: 'double[] (length 5)', fields: [{ name: '[0]', value: '89.0' }, { name: '[1]', value: '69.0' }, { name: '[2]', value: '0.0' }, { name: '[3]', value: '0.0' }, { name: '[4]', value: '0.0' }] }] },
            { label: 'After the loop: all five students are in memory. The file is closed; from now on we use the arrays.',
              vars: [{ name: 'n', type: 'int', value: '5' }, { name: 'names', type: 'String[]', ref: 'A' }, { name: 'avgs', type: 'double[]', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'String[] (length 5)', fields: [{ name: '[0]', value: '"Sara Ali"' }, { name: '[1]', value: '"Omar Saleh"' }, { name: '[2]', value: '"Huda Nasser"' }, { name: '[3]', value: '"Khalid Fahad"' }, { name: '[4]', value: '"Noura Saad"' }] },
                { id: 'B', cls: 'double[] (length 5)', fields: [{ name: '[0]', value: '89.0' }, { name: '[1]', value: '69.0' }, { name: '[2]', value: '94.666...' }, { name: '[3]', value: '54.333...' }, { name: '[4]', value: '80.666...' }] }] }
          ],
          ar: 'المصفوفتان متوازيتان: العنصر i في كل منهما يخص الطالب نفسه.' },
        { type: 'check', q: 'The file has a header and 5 student lines. What happens if you forget the <code>- 1</code> and make arrays of size 6?', options: ['Nothing, the last box stays empty', 'The loop tries to read a 6th student line that does not exist, and nextLine() crashes', 'The header becomes a student', 'The program does not compile'], answer: 1, explain: 'The loop runs 6 times, but after the header there are only 5 lines. The 6th nextLine() finds no line: NoSuchElementException.' },
        { type: 'h', en: 'Writing the report and reading it back' },
        { type: 'p', en: 'The method <code>writeReport</code> gets the file name and the two arrays as parameters (arrays are passed as references, Unit 7). It writes the title, the heading, the rows with <code>letter(...)</code>, and the summary. Then <code>printFile</code> reads the report back. Reading it back is a good habit: what you see on the screen is exactly what is in the file, so you can check it before you send it to anyone.' },
        { type: 'analogy', title: 'Tasting before serving', en: 'A good cook tastes the food before it goes to the guests. <code>printFile</code> is the taste: you look at the finished report once, before the department sees it.' },
        { type: 'steps', title: 'Worked example: the whole project', problem: 'Read <code>students.csv</code> (a header and five students with three marks each) into arrays. Write <code>results.txt</code> with each student, the average (2 decimals) and the letter grade, then the class average and the top student. Finally read <code>results.txt</code> back and print it.',
          steps: [
            { en: 'Write the data file. In real life the coordinator exports it from a spreadsheet; here we write it first, so the program can run anywhere.', code: J`
PrintWriter data = new PrintWriter("students.csv");
data.println("name,quiz,midterm,final");
data.println("Sara Ali,85,90,92");
...
data.close();` },
            { en: 'Count the data lines (minus the header), make the two arrays, and fill them in a second pass, as shown above.' },
            { en: 'In <code>writeReport</code>, choose widths: name 14, average 8, grade 7 (29 in total). Write the title, the heading and 29 dashes.', code: J`
out.println("CS101 Results");
out.printf("%-14s%8s%7s%n", "Name", "Average", "Grade");
out.println("-----------------------------");` },
            { en: 'One row per student. <code>%7c</code> writes a char 7 wide. In the same loop, add up the averages and remember the index of the best student.', code: J`
for (int i = 0; i < names.length; i++) {
    out.printf("%-14s%8.2f%7c%n", names[i], avgs[i], letter(avgs[i]));
    sum += avgs[i];
    if (avgs[i] > avgs[best]) {
        best = i;
    }
}` },
            { en: 'Write the summary: dashes, the class average and the top student. Close the file. Then <code>printFile</code> shows it on the screen.' }
          ],
          code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        // 1) the data file (in real life it comes from a spreadsheet)
        PrintWriter data = new PrintWriter("students.csv");
        data.println("name,quiz,midterm,final");
        data.println("Sara Ali,85,90,92");
        data.println("Omar Saleh,70,65,72");
        data.println("Huda Nasser,95,98,91");
        data.println("Khalid Fahad,55,60,48");
        data.println("Noura Saad,78,84,80");
        data.close();

        // 2) read it into two parallel arrays
        int n = countLines("students.csv") - 1;       // minus the header
        String[] names = new String[n];
        double[] avgs = new double[n];
        Scanner in = new Scanner(new File("students.csv"));
        in.nextLine();                                 // skip the header
        for (int i = 0; i < n; i++) {
            String[] p = in.nextLine().split(",");
            names[i] = p[0];
            avgs[i] = average(Integer.parseInt(p[1]), Integer.parseInt(p[2]), Integer.parseInt(p[3]));
        }
        in.close();

        // 3) write the report, 4) read it back to check it
        writeReport("results.txt", names, avgs);
        printFile("results.txt");
    }

    public static int countLines(String fileName) throws Exception {
        Scanner in = new Scanner(new File(fileName));
        int count = 0;
        while (in.hasNextLine()) {
            in.nextLine();
            count++;
        }
        in.close();
        return count;
    }

    public static double average(int a, int b, int c) {
        return (a + b + c) / 3.0;
    }

    public static char letter(double avg) {
        if (avg >= 90) {
            return 'A';
        } else if (avg >= 80) {
            return 'B';
        } else if (avg >= 70) {
            return 'C';
        } else if (avg >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }

    public static void writeReport(String fileName, String[] names, double[] avgs) throws Exception {
        PrintWriter out = new PrintWriter(fileName);
        out.println("CS101 Results");
        out.printf("%-14s%8s%7s%n", "Name", "Average", "Grade");
        out.println("-----------------------------");
        double sum = 0;
        int best = 0;
        for (int i = 0; i < names.length; i++) {
            out.printf("%-14s%8.2f%7c%n", names[i], avgs[i], letter(avgs[i]));
            sum += avgs[i];
            if (avgs[i] > avgs[best]) {
                best = i;
            }
        }
        out.println("-----------------------------");
        out.printf("%-14s%8.2f%n", "Class average", sum / names.length);
        out.println("Top student: " + names[best]);
        out.close();
    }

    public static void printFile(String fileName) throws Exception {
        Scanner in = new Scanner(new File(fileName));
        while (in.hasNextLine()) {
            System.out.println(in.nextLine());
        }
        in.close();
    }
}`, out: "CS101 Results\nName           Average  Grade\n-----------------------------\nSara Ali         89.00      B\nOmar Saleh       69.00      D\nHuda Nasser      94.67      A\nKhalid Fahad     54.33      F\nNoura Saad       80.67      B\n-----------------------------\nClass average    77.53\nTop student: Huda Nasser", ar: 'كل دالة تقوم بعمل واحد، وmain تنظّم الخطوات: البيانات، المصفوفات، التقرير، ثم عرض التقرير.' },
        { type: 'note', kind: 'exam', en: 'Look at Sara: 89.00 is a B, not an A. Exam questions love the edges: 89.99 is still B, 90.00 is A. Always test a method like <code>letter</code> with the limit values (90, 89.99, 60, 59.99).', ar: 'اختبر{{g:|ي}} دالة التقدير بالقيم الحدّية مثل 90 و89.99.' }
      ],
      mistakes: [
        { title: 'Making the arrays one box too big', en: 'If you forget to subtract the header line, the loop tries to read one line more than the file has, and <code>nextLine()</code> crashes with NoSuchElementException.', code: J`
int n = countLines("students.csv");       // 6: includes the header
int n = countLines("students.csv") - 1;   // 5: correct` },
        { title: 'Integer division in the average', en: '<code>(a + b + c) / 3</code> with ints cuts the decimals: 89.33 becomes 89.0. Divide by <code>3.0</code>.' },
        { title: 'Checking the grade limits in the wrong order', en: 'If the first test is <code>avg &gt;= 60</code>, every average of 60 or more gets D, even 95. Test from the highest limit down.' },
        { title: 'Reading the report before it is closed', en: 'If <code>writeReport</code> forgets <code>out.close()</code>, <code>printFile</code> finds an empty file. Close inside the method that writes.' }
      ],
      remember: [
        'Plan first: one small method for each job (count, average, letter, write, print).',
        'Count the data lines first (minus the header), then make arrays of exactly that size.',
        'Read the file again to fill the arrays: skip the header, split, parse.',
        'Write the report with printf and the same widths, and close it.',
        'Read the report back and print it: what you see is exactly what is in the file.'
      ],
      rememberAr: 'نخطط بدالة لكل مهمة. نعدّ الأسطر لنعرف حجم المصفوفات، ثم نملؤها من الملف. نكتب التقرير بـ printf ونغلقه، ثم نقرؤه للتأكد.',
      practice: [
        { t: 'mcq', q: 'The file has a header line and 5 student lines. Why does the project use <code>countLines("students.csv") - 1</code>?', options: ['Because arrays start at index 0', 'Because the header is not a student: there are 5 students, not 6', 'Because the last line of a file is always empty', 'To leave out the last student'], answer: 1, explain: 'countLines counts every line, including the header. The arrays need one box per student.' },
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static char letter(double avg) {
        if (avg >= 90) {
            return 'A';
        } else if (avg >= 80) {
            return 'B';
        } else if (avg >= 70) {
            return 'C';
        } else if (avg >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }

    public static void main(String[] args) {
        System.out.println(letter(90) + " " + letter(89.99) + " " + letter(60) + " " + letter(59.5));
    }
}`, answer: "A B D F", explain: '90 is A (90 or more). 89.99 is below 90 but at least 80: B. 60 is exactly the D limit: D. 59.5 is below 60: F.', explainAr: 'القيم الحدّية: 90 تقدير A، و89.99 تقدير B، و60 تقدير D، و59.5 تقدير F.' },
        { t: 'order', q: 'Put the steps of the project in the right order.', lines: [
          'write students.csv (or get it from a spreadsheet)',
          'count the data lines and make the arrays',
          'read the file again: skip the header, split, parse, fill the arrays',
          'write the report file with headings, rows and totals, then close it',
          'read the report back and print it to check it'
        ], explain: 'Data first; then the size; then the arrays; then the report; and finally a check of the report.' },
        { t: 'bug', q: 'This program should print <code>Average: 89.33</code>, but it prints <code>Average: 89.00</code>. Tap the line with the bug.', qAr: 'المتوسط فقد الكسور. أين الخطأ؟',
          code: J`
public class Main {
    public static double average(int a, int b, int c) {
        return (a + b + c) / 3;
    }

    public static void main(String[] args) {
        double avg = average(85, 90, 93);
        System.out.printf("Average: %.2f%n", avg);
    }
}`, bug: 3,
          fix: J`
public class Main {
    public static double average(int a, int b, int c) {
        return (a + b + c) / 3.0;
    }

    public static void main(String[] args) {
        double avg = average(85, 90, 93);
        System.out.printf("Average: %.2f%n", avg);
    }
}`,
          hint: 'What is int divided by int in Java?',
          explain: 'On line 3, <code>a + b + c</code> is an int (268) and <code>3</code> is an int, so Java does integer division: 89. Only then is it turned into the double 89.0. Divide by <code>3.0</code> to keep the decimals: 89.33.',
          explainAr: 'قسمة عدد صحيح على عدد صحيح تحذف الكسور. اقسم{{g:|ي}} على 3.0.' },
        { t: 'bug', q: 'With this method every student with an average of 60 or more gets <code>D</code>, even with 95. Tap the line with the bug.',
          code: J`
public static char letter(double avg) {
    if (avg >= 60) {
        return 'D';
    } else if (avg >= 70) {
        return 'C';
    } else if (avg >= 80) {
        return 'B';
    } else if (avg >= 90) {
        return 'A';
    } else {
        return 'F';
    }
}`, bug: 2,
          fix: J`
public static char letter(double avg) {
    if (avg >= 90) {
        return 'A';
    } else if (avg >= 80) {
        return 'B';
    } else if (avg >= 70) {
        return 'C';
    } else if (avg >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}`,
          hint: 'In an else-if chain, which test runs first?',
          explain: 'The first test (line 2) is <code>avg &gt;= 60</code>. Any average of 60 or more passes it at once and returns D; the other tests are never reached. Check from the highest limit down: 90, 80, 70, 60.',
          explainAr: 'في سلسلة else-if يُنفَّذ أول شرط صحيح فقط، فنبدأ بالحد الأعلى.' },
        { t: 'code', q: 'Read an integer <code>n</code>, then <code>n</code> lines <code>name,mark1,mark2</code> (names may have spaces). Write them to <code>data.csv</code> (no header). Read <code>data.csv</code> back into two arrays: the names, and the averages computed by a method <code>average(int a, int b)</code>. Then write <code>grades.txt</code> with one line per student in the form <code>name: average grade</code> using <code>printf("%s: %.1f %c%n", ...)</code>, where the grade comes from a method <code>letter(double avg)</code> (A from 90, B from 80, C from 70, D from 60, else F). Finally read <code>grades.txt</code> and print it. No prompts.<br>Example: input <code>3</code> then <code>Sara Ali,85,94</code>, <code>Omar Saleh,70,61</code>, <code>Huda Nasser,59,50</code> prints<br><code>Sara Ali: 89.5 B</code><br><code>Omar Saleh: 65.5 D</code><br><code>Huda Nasser: 54.5 F</code>', qAr: 'مشروع صغير: اقرأ{{g:|ي}} البيانات إلى مصفوفات، احسب{{g:|ي}} المتوسط والتقدير بدوال، اكتب{{g:|ي}} ملف التقديرات ثم اعرضه.',
          starter: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        input.nextLine();               // finish the first line
        // 1) write the n lines to data.csv
        // 2) read data.csv into names[] and avgs[]
        // 3) write grades.txt with printf("%s: %.1f %c%n", ...)
        // 4) read grades.txt and print it
    }

    public static double average(int a, int b) {
        return 0;     // change this
    }

    public static char letter(double avg) {
        return 'F';   // change this
    }
}`, tests: [ { stdin: '3\nSara Ali,85,94\nOmar Saleh,70,61\nHuda Nasser,59,50', expected: "Sara Ali: 89.5 B\nOmar Saleh: 65.5 D\nHuda Nasser: 54.5 F" }, { stdin: '1\nAli,90,90', expected: "Ali: 90.0 A" }, { stdin: '2\nNoura Saad,80,79\nKhalid Fahad,100,95', expected: "Noura Saad: 79.5 C\nKhalid Fahad: 97.5 A" } ],
          solution: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        input.nextLine();               // finish the first line
        PrintWriter data = new PrintWriter("data.csv");
        for (int i = 0; i < n; i++) {
            data.println(input.nextLine());
        }
        data.close();

        String[] names = new String[n];
        double[] avgs = new double[n];
        Scanner in = new Scanner(new File("data.csv"));
        for (int i = 0; i < n; i++) {
            String[] p = in.nextLine().split(",");
            names[i] = p[0];
            avgs[i] = average(Integer.parseInt(p[1]), Integer.parseInt(p[2]));
        }
        in.close();

        PrintWriter out = new PrintWriter("grades.txt");
        for (int i = 0; i < n; i++) {
            out.printf("%s: %.1f %c%n", names[i], avgs[i], letter(avgs[i]));
        }
        out.close();

        Scanner show = new Scanner(new File("grades.txt"));
        while (show.hasNextLine()) {
            System.out.println(show.nextLine());
        }
        show.close();
    }

    public static double average(int a, int b) {
        return (a + b) / 2.0;
    }

    public static char letter(double avg) {
        if (avg >= 90) {
            return 'A';
        } else if (avg >= 80) {
            return 'B';
        } else if (avg >= 70) {
            return 'C';
        } else if (avg >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }
}`, hint: 'Here you already know n, so the arrays can be made with size n. Divide by 2.0 in average. In letter, test 90 first, then 80, 70 and 60.', explain: 'The data travels through the whole chain: keyboard, data.csv, arrays, methods, grades.txt, screen. Each method does one job.' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'Why do we use a text file?', options: ['To keep data after the program ends', 'To make the screen larger', 'To avoid writing loops', 'To speed up the keyboard'], answer: 0, explain: 'A file is stored on the disk, so the data stays.' },
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
}`, answer: '93', explain: "The tokens 5, 8 and 2 are read regardless of line breaks: 25 + 64 + 4 = 93." },
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
}`, answer: 'Tokens: 5', explain: "next() reads tokens separated by whitespace: Ali, Ahmed, 90, Nora, 85." },
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
}`, answer: "B\nC", explain: "The second PrintWriter erases the file, so line A is gone." },
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
}`, answer: "A\nC\nD", explain: "Writing ok.txt succeeds (A). Opening the missing file throws, so B is skipped, the catch prints C, and the program continues with D." },
    { t: 'bug', q: "This code should print <code>Visitors</code> and then <code>Ahmad</code>, but it prints only <code>Ahmad</code>. Tap the line with the bug.",
      code: J`
PrintWriter start = new PrintWriter("visits.txt");
start.println("Visitors");
start.close();
PrintWriter log = new PrintWriter("visits.txt");
log.println("Ahmad");
log.close();
Scanner in = new Scanner(new File("visits.txt"));
while (in.hasNextLine()) {
    System.out.println(in.nextLine());
}
in.close();`, bug: 4,
      fix: J`
PrintWriter start = new PrintWriter("visits.txt");
start.println("Visitors");
start.close();
PrintWriter log = new PrintWriter(new FileWriter("visits.txt", true));
log.println("Ahmad");
log.close();
Scanner in = new Scanner(new File("visits.txt"));
while (in.hasNextLine()) {
    System.out.println(in.nextLine());
}
in.close();`,
      explain: "Line 4 opens a plain PrintWriter on a file that already has the title, so the title is erased. To add a line under it, open the file in append mode: <code>new PrintWriter(new FileWriter(\"visits.txt\", true))</code>.",
      explainAr: 'PrintWriter العادي مسح سطر العنوان. للإضافة نستخدم FileWriter مع true.' },
    { t: 'output', q: "What is the output?", code: J`
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        PrintWriter out = new PrintWriter("prices.csv");
        out.println("item,price");
        out.println("Tea,3.5");
        out.println("Cake,12");
        out.println("Juice,6.5");
        out.close();

        Scanner in = new Scanner(new File("prices.csv"));
        in.nextLine();
        double total = 0;
        while (in.hasNextLine()) {
            String[] p = in.nextLine().split(",");
            total += Double.parseDouble(p[1]);
        }
        in.close();
        System.out.println("Total: " + total);
    }
}`, answer: "Total: 22.0", explain: "The header is skipped. Each line is split at the comma and the price part is parsed: 3.5 + 12 + 6.5 = 22.0. A double always prints with a decimal point, so the answer is 22.0, not 22." }
  ],
  lab: {
    t: 'code',
    q: "<b>Daily sales file.</b> Read <code>n</code> and then <code>n</code> daily sales amounts (integers) from the keyboard.<br>1. Write them to <code>sales.txt</code>, one line per day in the form <code>Day 1 250</code> (the word Day, the day number starting at 1, the amount). Close the file.<br>2. <b>Read sales.txt back</b>. For every line, read the word, the day number and the amount.<br>3. Print exactly three lines (no prompts):<br><code>Total: T</code><br><code>Average: A</code> (two decimals with <code>printf</code>)<br><code>Best day: D</code> (the day number with the highest sales; the earliest day if there is a tie)",
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
}`,
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
}`,
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
    { code: J`f.exists()  f.getName()  f.delete()`, note: 'Useful File methods' },
    { code: J`PrintWriter out = new PrintWriter("data.txt");`, note: 'Create/overwrite a file for writing' },
    { code: J`out.println(x);  out.printf("%.2f%n", v);  out.close();`, note: 'Write, format, and always close' },
    { code: J`Scanner in = new Scanner(new File("data.txt"));`, note: 'Open a file for reading (do not forget new File)' },
    { code: J`while (in.hasNextInt()) { sum += in.nextInt(); }`, note: 'Read numbers until the data ends' },
    { code: J`while (in.hasNextLine()) { String line = in.nextLine(); }`, note: 'Read line by line' },
    { code: J`public static void main(String[] args) throws Exception`, note: 'Declare checked exceptions' },
    { code: J`try { ... } catch (FileNotFoundException e) { ... }`, note: 'Handle a missing file' },
    { code: J`try (PrintWriter out = new PrintWriter("a.txt")) { ... }`, note: 'try-with-resources: closes automatically' },
    { code: J`try (Scanner in = new Scanner(new File("a.txt")); PrintWriter out = new PrintWriter("b.txt")) { ... }`, note: 'Two files in one try: both are closed' },
    { code: J`int n = in.nextInt(); in.nextLine();`, note: 'Finish the number line before reading text lines' },
    { code: J`PrintWriter log = new PrintWriter(new FileWriter("log.txt", true));`, note: 'Append: add at the end, keep the old lines' },
    { code: J`String[] parts = line.split(",");`, note: 'Cut a CSV line into a String array' },
    { code: J`int m = Integer.parseInt(parts[1]);  double p = Double.parseDouble(parts[2]);`, note: 'Text to number' },
    { code: J`if (line.contains("Java")) { found++; }`, note: 'Search inside a line (case-sensitive)' },
    { code: J`out.printf("%-10s%6d%n", name, mark);`, note: 'Aligned report row: text left, number right' },
    { code: J`public static int countLines(String name) throws Exception`, note: 'A method that opens a file needs throws Exception' }
  ],
  glossary: [
    { term: 'Text file', ar: 'ملف نصي', def: 'A file that stores characters that people can read in a text editor.' },
    { term: 'File class', ar: 'الصنف File', def: 'java.io class that represents a file or directory name.' },
    { term: 'PrintWriter', ar: 'PrintWriter', def: 'java.io class that writes text to a file with print, println and printf.' },
    { term: 'Token', ar: 'وحدة نصية', def: 'A piece of input separated by whitespace, read by next(), nextInt() and similar methods.' },
    { term: 'Record', ar: 'سجل', def: 'A group of related values about one thing, such as a name and a mark on one line.' },
    { term: 'Exception', ar: 'استثناء', def: 'An object that Java creates when something goes wrong while the program runs.' },
    { term: 'Checked exception', ar: 'استثناء مُتحقَّق منه', def: 'An exception the compiler forces you to catch or declare, such as FileNotFoundException.' },
    { term: 'FileNotFoundException', ar: 'استثناء عدم وجود الملف', def: 'Thrown when a file cannot be opened for reading or writing.' },
    { term: 'throws clause', ar: 'عبارة throws', def: 'Part of a method header that declares exceptions the method may pass to its caller.' },
    { term: 'try-catch', ar: 'جملة try-catch', def: 'Runs code in try; if a matching exception occurs, the catch block handles it.' },
    { term: 'try-with-resources', ar: 'try مع الموارد', def: 'A try statement that automatically closes the resources declared in its parentheses.' },
    { term: 'Buffer', ar: 'ذاكرة مؤقتة', def: 'Memory where output is collected before being written to the file; close() empties it to disk.' },
    { term: 'Read position', ar: 'موضع القراءة', def: 'The place in the file where a Scanner will read next; every read moves it forward, never back.' },
    { term: 'Header line', ar: 'سطر العناوين', def: 'A first line that names the columns or gives a title; it is not data, so the program skips it.' },
    { term: 'Append mode', ar: 'وضع الإلحاق', def: 'Opening a file so that new text is added at the end and the old text is kept.' },
    { term: 'FileWriter', ar: 'FileWriter', def: 'java.io class that opens a file for writing; new FileWriter(name, true) opens it in append mode.' },
    { term: 'Log', ar: 'سجل يومي', def: 'A file that grows over time, one new entry (line) at a time.' },
    { term: 'CSV file', ar: 'ملف CSV', def: 'Comma-Separated Values: a text file where each line is a record and commas separate its parts.' },
    { term: 'Delimiter', ar: 'فاصل', def: 'The character that separates the parts of a record, such as a comma in a CSV file.' },
    { term: 'split', ar: 'التقسيم split', def: 'String method that cuts a String at a delimiter and returns an array of the parts.' },
    { term: 'Parse', ar: 'تحويل النص', def: 'To read text and turn it into a value, for example Integer.parseInt("85") gives 85.' },
    { term: 'NumberFormatException', ar: 'استثناء صيغة العدد', def: 'Thrown when parseInt or parseDouble gets text that is not a valid number.' },
    { term: 'Report', ar: 'تقرير', def: 'An output file written for people, with a title, aligned columns and totals.' },
    { term: 'Field width', ar: 'عرض الحقل', def: 'The number in a printf format (as in %6d) that sets how many characters a value fills.' }
  ]
});
