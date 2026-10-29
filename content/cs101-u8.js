JP.unit({
  course: 'cs101',
  n: 8,
  title: 'Text Files Input/Output',
  titleAr: 'إدخال وإخراج الملفات النصية',
  intro: "When a program ends, everything in its variables is lost. A text file keeps your data on the disk, so you can use it again tomorrow. In this unit you will save text into a file, read it back, and process the data (totals, averages, the best value). You will also learn what to do when a file is missing. In every program, we first write the file and then read it back, so you can see the whole story in one run.",
  introAr: 'عند انتهاء البرنامج تضيع كل البيانات في المتغيرات. الملف النصي يحفظ بياناتك على القرص لتستخدمها لاحقاً. ستتعلم حفظ النص في ملف وقراءته ومعالجة البيانات (مجاميع ومتوسطات)، وماذا تفعل عندما يكون الملف مفقوداً. في كل برنامج نكتب الملف أولاً ثم نقرؤه.',
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
        { type: 'h', en: 'print, println and printf' },
        { type: 'p', en: 'With <code>print</code> the text stays on the same line. With <code>println</code> the line ends. With <code>printf</code> you can align columns, for example for a receipt.' },
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
}`, out: "- Milk\n- Bread\n- Dates", ar: 'كتبنا ثلاثة أسطر في الملف ثم قرأناها وطبعناها مع شرطة.' }
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
}`, hint: 'Use two different Scanner variables: one for the keyboard (input) and one for the file (in).', explain: 'We write, close, then open the same file for reading.' }
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
        { type: 'h', en: 'Why "throws Exception"?' },
        { type: 'p', en: 'Writing a file can fail: the disk may be full, the folder may not exist, or the file may be locked. When something goes wrong in a Java program, Java creates an <b>exception</b> (an error object). Some exceptions are <b>checked</b>: Java makes you promise that you have thought about them. Creating a <code>PrintWriter</code> can throw one, so the compiler says: "Handle this, or declare it."' },
        { type: 'analogy', title: 'A warning sign', en: 'A teacher says: "This lab can be dangerous. Either wear gloves, or sign that you accept the risk." In Java, <code>throws Exception</code> is signing. Later (Lesson 5) you will learn the other choice, <code>try-catch</code>, which is wearing gloves.', ar: 'throws Exception = نصرّح بأن الخطأ قد يحدث ونمرره. try-catch = نتعامل معه (الدرس 5).' },
        { type: 'code', code: J`
public static void main(String[] args) throws Exception {
    PrintWriter out = new PrintWriter("a.txt");   // OK
}` },
        { type: 'check', q: 'What happens if you create a <code>PrintWriter</code> in <code>main</code> without <code>throws Exception</code> and without try-catch?', options: ['It runs, but slowly', 'Compile error: unreported exception', 'The file is created empty', 'Nothing special'], answer: 1, explain: 'The compiler insists that checked exceptions are handled or declared.' },
        { type: 'note', kind: 'exam', en: 'The error message looks like: <code>unreported exception FileNotFoundException; must be caught or declared to be thrown</code>. The fix is <code>throws Exception</code> on the method header.', ar: 'عند ظهور هذه الرسالة أضف throws Exception.' },
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
}`, out: "Exists: true\nExists: false", ar: 'أنشأنا الملف ثم حذفناه وتحققنا من وجوده.' }
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
}`, hint: 'A for loop writes the lines; a while (in.hasNextLine()) loop counts them.', explain: 'We write with a loop, then read with another loop and count how many times it runs.' }
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
        { type: 'check', q: 'What does <code>in.hasNextLine()</code> return when all lines have been read?', options: ['true', 'false', '0', 'It throws an error'], answer: 1, explain: 'No more lines, so false, and the loop stops.' },
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
}`, out: "Sun 08:00 Java (14)\nMon 10:00 Maths (15)\nTue 12:00 English (17)", ar: 'نقرأ كل سطر كاملاً بما فيه المسافات.' }
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
}`, hint: 'Keep a counter that goes up by one for each line you read.', explain: 'One loop writes the words; another loop reads the lines and numbers them.' }
      ]
    },
    // ===================================================== Lesson 4
    {
      title: 'Reading numbers and records from a file',
      titleAr: 'قراءة الأعداد والسجلات من ملف',
      minutes: 30,
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
}`, out: "Count: 5\nSum: 400\nAverage: 80.00\nHighest: 95", ar: 'جمعنا العلامات وعددناها وأوجدنا الأكبر.' }
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
        'A <b>token</b> is a piece of input separated by spaces or line breaks.',
        'Ask first (<code>hasNext...</code>), then read (<code>next...</code>).',
        '<code>hasNextInt()</code> and <code>hasNextDouble()</code> stop at a token of the wrong kind.',
        'For records, read all the parts of one record in each loop turn.',
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
          ], hint: 'Use two different Scanner variables: one for System.in and one for the file. Close the PrintWriter before you open the file for reading.', explain: 'The file must be closed after writing. A hasNextInt loop then reads however many numbers are in the file.' }
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
}`, out: "Found: Riyadh 42", ar: 'الملف موجود فلا يعمل catch.' }
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
        'With try-catch you do not need <code>throws Exception</code>.'
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
}`, hint: 'Put new Scanner(new File(name)) inside try and the message inside catch.', explain: 'If the file exists, try completes normally. Otherwise catch prints the message.' }
      ]
    },
    // ===================================================== Lesson 6
    {
      title: 'try-with-resources and processing one file into another',
      titleAr: 'try مع الموارد ومعالجة ملف إلى ملف آخر',
      minutes: 30,
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
        { type: 'h', en: 'Data in, report out' },
        { type: 'p', en: 'Real programs often read one file, think about the data, and write a new file with the results. You need two things open at the same time: a Scanner for the input and a PrintWriter for the output. The plan has three steps: (1) create the input file, (2) read it and write the report, (3) read the report and show it.' },
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
        { type: 'check', q: 'Why do we close <code>report</code> before we open <code>report.txt</code> for reading?', options: ['To save the memory buffer into the file', 'Because Java allows only one file', 'To rename the file', 'It is not necessary'], answer: 0, explain: 'Closing writes the waiting text into the file.' }
      ],
      mistakes: [
        { title: 'Reading the report before closing the writer', en: 'The report may still be empty. Close first.' },
        { title: 'Using the resource variable after the try block', en: '<code>out</code> does not exist after the closing brace.' },
        { title: 'Using the same file for input and output at the same time', en: 'Opening a PrintWriter on a file erases it. Do not write into the file you are reading.' },
        { title: 'Forgetting that two records have two values', en: 'If a record has an id and a mark, read both with two reads in each loop turn.' }
      ],
      remember: [
        '<code>try (PrintWriter out = ...) { ... }</code> closes the file automatically.',
        'Works also for Scanner: <code>try (Scanner in = new Scanner(new File("a.txt")))</code>.',
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
}`, hint: 'Three Scanners and two PrintWriters in total: keyboard, marks file, report file, and the two writers. Close the writers before reading their files.', explain: 'This is the complete workflow: write input, process it into a report, read the report.' }
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
}`, answer: "A\nC\nD", explain: "Writing ok.txt succeeds (A). Opening the missing file throws, so B is skipped, the catch prints C, and the program continues with D." }
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
    { code: J`try (PrintWriter out = new PrintWriter("a.txt")) { ... }`, note: 'try-with-resources: closes automatically' }
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
    { term: 'Buffer', ar: 'ذاكرة مؤقتة', def: 'Memory where output is collected before being written to the file; close() empties it to disk.' }
  ]
});
