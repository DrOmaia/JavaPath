JP.unit({
  course: 'cs101',
  n: 6,
  title: 'Methods',
  titleAr: 'الدوال (الطرق)',
  intro: "As programs grow, putting everything in main becomes hard to read and full of repeated code. Methods let you name a task, write it once, and call it whenever you need it. In this unit you will define and call void and value-returning methods, pass arguments to parameters, understand pass-by-value and variable scope, overload methods, and design programs step by step from small, testable pieces.",
  introAr: 'عندما يكبر البرنامج يصبح وضع كل شيء في main صعب القراءة ومليئاً بالتكرار. الدوال تتيح لك تسمية مهمة وكتابتها مرة واحدة واستدعاءها عند الحاجة. ستتعلم تعريف الدوال واستدعاءها، والمعاملات، والتمرير بالقيمة، ونطاق المتغيرات، والتحميل الزائد، والتصميم التدريجي.',
  lessons: [
    {
      title: 'Defining and calling methods',
      titleAr: 'تعريف الدوال واستدعاؤها',
      minutes: 45,
      body: [
        { type: 'p', en: 'A <b>method</b> is a named group of statements that performs one task. You have already <b>called</b> methods written by others, such as <code>System.out.println</code> and <code>Math.sqrt</code>. Now you will <b>define</b> your own. Methods help you avoid repeating code, make programs easier to read, and let you test one piece at a time.',
          ar: 'الدالة مجموعة أوامر لها اسم وتؤدي مهمة واحدة، وتساعد على تجنب التكرار وتسهيل القراءة.' },
        { type: 'code', code: J`
modifiers  returnType  methodName(parameter list) {
    // method body
}

public static void printBanner() {          // method header
    System.out.println("==========");      // method body
}` },
        { type: 'list', items: [
          '<b>Modifiers</b>: for now always <code>public static</code>.',
          '<b>Return type</b>: the type of value the method gives back, or <code>void</code> if it returns nothing.',
          '<b>Method name</b>: a verb in camelCase, such as <code>printBanner</code> or <code>computeTotal</code>.',
          '<b>Parameter list</b>: the inputs, in parentheses (may be empty).',
          'The <b>method signature</b> is the method name together with its parameter list.'
        ], ar: 'رأس الدالة يتكون من المعدِّلات ونوع القيمة المرجعة والاسم وقائمة المعاملات.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void printBanner() {
        System.out.println("==========");
        System.out.println(" CS101 Lab");
        System.out.println("==========");
    }

    public static void main(String[] args) {
        printBanner();
        System.out.println("Welcome!");
        printBanner();
    }
}`, out: "==========\n CS101 Lab\n==========\nWelcome!\n==========\n CS101 Lab\n==========" },
        { type: 'p', en: 'When a method is <b>called</b>, control jumps to the method, its body runs, and then control <b>returns</b> to the statement right after the call. A method body does nothing until the method is called.',
          ar: 'عند استدعاء الدالة ينتقل التنفيذ إليها ثم يعود إلى ما بعد الاستدعاء.' },
        { type: 'note', kind: 'tip', en: 'Methods can be written in any order inside the class: above or below <code>main</code>. Execution always starts at <code>main</code>.' },
        { type: 'h', en: 'void methods with a parameter' },
        { type: 'p', en: 'A <code>void</code> method performs an action (such as printing) and returns no value. Giving it a <b>parameter</b> makes it more flexible: the caller decides the value each time.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static void printStars(int n) {
        for (int i = 1; i <= n; i++) {
            System.out.print("*");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        printStars(3);
        printStars(6);
        printStars(1);
    }
}`, out: "***\n******\n*" },
        { type: 'note', kind: 'warn', en: 'A call to a void method is a statement on its own. <code>System.out.println(printStars(3));</code> is a compile error because <code>printStars</code> does not return a value to print.',
          ar: 'لا يمكن طباعة نتيجة دالة void لأنها لا ترجع قيمة.' },
        { type: 'h', en: 'The call stack' },
        { type: 'p', en: 'Each time a method is called, Java creates an <b>activation record</b> (stack frame) that holds its parameters and local variables. The frames are kept on the <b>call stack</b>. When the method finishes, its frame is removed and control returns to the caller.' },
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
        { type: 'note', kind: 'exam', en: 'In tracing questions, follow the calls exactly: when a method calls another, the caller pauses until the called method finishes. Write the output in the order the statements actually run, not the order they appear in the file.',
          ar: 'تتبع ترتيب التنفيذ الفعلي وليس ترتيب كتابة الدوال في الملف.' }
      ],
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
}`,
          answer: "A\n--\n--\nB",
          explain: 'main prints A, calls line twice, then prints B.' },
        { t: 'mcq', q: 'Which is a valid header for a method that prints a menu and returns nothing?',
          options: ['<code>public static showMenu()</code>', '<code>public static void showMenu()</code>', '<code>public void static showMenu</code>', '<code>public static void showMenu;</code>'], answer: 1,
          explain: 'A header needs a return type (void here) before the name, and parentheses after it. It is not followed by a semicolon.' },
        { t: 'fill', q: 'Complete the method definition and the call.',
          code: J`
public class Main {
    public ___ void sayHi() {
        System.out.println("Hi!");
    }

    public static void main(String[] args) {
        ___();
    }
}`,
          answers: ['static', 'sayHi'],
          explain: 'Methods called directly from <code>main</code> must be <code>static</code> (for now), and you call a method by its name followed by parentheses.' },
        { t: 'order', q: 'Order the lines to make a complete program that prints <code>Welcome, Lama</code>.',
          lines: [
            'public class Main {',
            '    public static void welcome(String name) {',
            '        System.out.println("Welcome, " + name);',
            '    }',
            '    public static void main(String[] args) {',
            '        welcome("Lama");',
            '    }',
            '}'
          ],
          explain: 'Both methods are inside the class. welcome is defined with a String parameter and called from main with the argument "Lama".' },
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
}`,
          answer: 'abAb',
          explain: 'a prints "a", calls b (prints "b"), then prints "A". Back in main, b is called again and prints "b".' },
        { t: 'code', q: 'Write a void method <code>printRow(int width)</code> that prints <code>width</code> hash signs (<code>#</code>) followed by a new line. In <code>main</code>, read a width and a height and call <code>printRow</code> to print a rectangle. Do not print any prompt.<br>Example: input <code>4 2</code> prints<br><code>####</code><br><code>####</code>',
          qAr: 'اكتب دالة printRow تطبع صفاً من # واستخدمها لرسم مستطيل.',
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
}`,
          tests: [ { stdin: '4 2', expected: "####\n####" }, { stdin: '1 3', expected: "#\n#\n#" } ],
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
}`,
          hint: 'The method contains one loop for the columns; main contains a loop that calls the method once per row.',
          explain: 'Moving the inner loop into a method makes main shorter and the row-printing code reusable.' }
      ]
    },
    {
      title: 'Parameters, arguments and pass-by-value',
      titleAr: 'المعاملات والوسائط والتمرير بالقيمة',
      minutes: 45,
      body: [
        { type: 'p', en: 'The variables in a method header are called <b>parameters</b> (formal parameters). The values you supply in a call are called <b>arguments</b> (actual parameters). When the method is called, each argument is assigned to the matching parameter.',
          ar: 'المعاملات هي المتغيرات في رأس الدالة، والوسائط هي القيم المرسلة عند الاستدعاء.' },
        { type: 'table', head: ['Term', 'Where it appears', 'Example'], rows: [
          ['Parameter', 'in the method header', '<code>void printGrade(String name, double score)</code>'],
          ['Argument', 'in the method call', '<code>printGrade("Reem", 93.5)</code>']
        ] },
        { type: 'code', run: true, code: J`
public class Main {
    public static void printGrade(String name, double score) {
        char grade;
        if (score >= 90) {
            grade = 'A';
        } else if (score >= 80) {
            grade = 'B';
        } else if (score >= 70) {
            grade = 'C';
        } else {
            grade = 'F';
        }
        System.out.println(name + ": " + grade);
    }

    public static void main(String[] args) {
        printGrade("Reem", 93.5);
        printGrade("Fahad", 78);
        printGrade("Nora", 81);
    }
}`, out: "Reem: A\nFahad: C\nNora: B" },
        { type: 'note', kind: 'exam', en: 'Arguments must match the parameters in <b>number</b>, <b>order</b> and <b>compatible type</b>. <code>printGrade(93.5, "Reem")</code> is a compile error (wrong order). <code>printGrade("Fahad", 78)</code> is fine: the int 78 is widened to the double 78.0.',
          ar: 'يجب أن تتطابق الوسائط مع المعاملات في العدد والترتيب والنوع.' },
        { type: 'p', en: 'An argument can be any expression of a compatible type: a literal, a variable, or a calculation such as <code>printStars(2 * k + 1)</code>. The expression is evaluated first, then its value is passed.' },
        { type: 'h', en: 'Pass-by-value' },
        { type: 'p', en: 'Java passes arguments <b>by value</b>: the parameter receives a <b>copy</b> of the argument value. Changing the parameter inside the method does <b>not</b> change the caller\'s variable.',
          ar: 'جافا تمرر نسخة من القيمة، فتغيير المعامل داخل الدالة لا يغير متغير المستدعي.' },
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
        { type: 'p', en: 'Even if the parameter has the <b>same name</b> as the caller\'s variable, they are two different variables. This is why a simple swap method cannot swap the caller\'s variables:' },
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
        { type: 'note', kind: 'warn', en: 'A method cannot change the caller\'s primitive variables. If you need a result back, <b>return</b> it (next lesson) and assign it in the caller: <code>x = addBonus(x);</code>' },
        { type: 'note', kind: 'tip', en: 'Strings are passed the same way (a copy of the reference), and since Strings are immutable, a method cannot change the caller\'s String either.' }
      ],
      practice: [
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
}`,
          answer: '7',
          explain: 'Only the copy v becomes 70. The variable score in main is unchanged.',
          explainAr: 'التمرير بالقيمة: تغيير v لا يؤثر على score.' },
        { t: 'mcq', q: 'In <code>public static void area(double w, double h)</code>, what are <code>w</code> and <code>h</code> called?',
          options: ['Arguments', 'Parameters', 'Return values', 'Global variables'], answer: 1,
          explain: 'Variables declared in the method header are (formal) parameters. The values passed in a call are arguments.' },
        { t: 'mcq', q: 'Which call is valid for <code>public static void report(String name, int age)</code>?',
          options: ['<code>report(20, "Ali");</code>', '<code>report("Ali");</code>', '<code>report("Ali", 20);</code>', '<code>report("Ali", 20.5);</code>'], answer: 2,
          explain: 'The arguments must match in number, order and type. 20.5 is a double and cannot be passed to an int parameter.' },
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
}`,
          answer: "10 - 3 = 7\n3 - 10 = -7",
          explain: 'Arguments are matched by position, not by name. In the first call a gets 10 and b gets 3.' },
        { t: 'fill', q: 'Complete the parameter type, and give the argument so the call prints <code>Tea: 4.50</code>.',
          code: J`
public static void printPrice(String item, ___ price) {
    System.out.printf("%s: %.2f%n", item, price);
}

// in main:
printPrice("Tea", ___);`,
          answers: ['double', ['4.5', '4.50']],
          explain: 'The price is printed with <code>%.2f</code>, so it is a double; 4.5 prints as 4.50.' },
        { t: 'code', q: 'Write a void method <code>printTable(int n, int k)</code> that prints the first <code>k</code> lines of the multiplication table of <code>n</code> in the form <code>n x i = product</code>. In main, read <code>n</code> and <code>k</code> and call the method. Do not print any prompt.<br>Example: <code>7 3</code> prints<br><code>7 x 1 = 7</code><br><code>7 x 2 = 14</code><br><code>7 x 3 = 21</code>',
          qAr: 'اكتب دالة تطبع أول k سطراً من جدول ضرب العدد n.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write printTable here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int k = input.nextInt();
        // call printTable
    }
}`,
          tests: [ { stdin: '7 3', expected: "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21" }, { stdin: '12 2', expected: "12 x 1 = 12\n12 x 2 = 24" } ],
          solution: J`
import java.util.Scanner;

public class Main {
    public static void printTable(int n, int k) {
        for (int i = 1; i <= k; i++) {
            System.out.println(n + " x " + i + " = " + n * i);
        }
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int k = input.nextInt();
        printTable(n, k);
    }
}`,
          hint: 'Inside the method, loop i from 1 to k.',
          explain: 'The two arguments are copied into the parameters n and k; the loop uses them to print each line. <code>n * i</code> is evaluated before joining because * has higher precedence than +.' }
      ]
    },
    {
      title: 'Returning values and method overloading',
      titleAr: 'إرجاع القيم والتحميل الزائد للدوال',
      minutes: 45,
      body: [
        { type: 'p', en: 'A <b>value-returning method</b> computes a result and sends it back to the caller with a <code>return</code> statement. Its header declares the <b>return type</b> instead of <code>void</code>. The call itself becomes a value that you can store, print or use in an expression.',
          ar: 'الدالة التي ترجع قيمة تستخدم return، ويصبح الاستدعاء نفسه قيمة يمكن تخزينها أو طباعتها.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static int max(int a, int b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    public static double average(int a, int b, int c) {
        return (a + b + c) / 3.0;
    }

    public static void main(String[] args) {
        int bigger = max(17, 42);
        System.out.println("Max: " + bigger);
        System.out.println("Average: " + average(70, 80, 93));
        System.out.println("Max of three: " + max(max(5, 19), 11));
    }
}`, out: "Max: 42\nAverage: 81.0\nMax of three: 19" },
        { type: 'p', en: '<code>return</code> ends the method immediately. The returned value must be compatible with the return type: a method declared <code>int</code> cannot return <code>3.5</code>.' },
        { type: 'note', kind: 'exam', en: 'A non-void method must return a value on <b>every</b> possible path. The compiler rejects this with "missing return statement", even though one of the conditions is always true:<br><code>if (a &gt; b) return a; else if (a &lt;= b) return b;</code><br>Use a plain <code>else</code> or a final <code>return</code>.',
          ar: 'يجب أن ترجع الدالة قيمة في كل المسارات وإلا يظهر خطأ missing return statement.' },
        { type: 'code', run: true, code: J`
public class Main {
    public static boolean isLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    }

    public static void main(String[] args) {
        System.out.println("2024: " + isLeapYear(2024));
        System.out.println("1900: " + isLeapYear(1900));
        System.out.println("2000: " + isLeapYear(2000));
        System.out.println("2023: " + isLeapYear(2023));
    }
}`, out: "2024: true\n1900: false\n2000: true\n2023: false" },
        { type: 'note', kind: 'tip', en: 'Prefer value-returning methods for calculations and let the caller decide what to do with the result (print it, store it, compare it). A method that only prints its result cannot be reused in another calculation.' },
        { type: 'table', head: ['', 'void method', 'value-returning method'], rows: [
          ['Header', '<code>static void printAvg(int a, int b)</code>', '<code>static double avg(int a, int b)</code>'],
          ['return statement', 'optional, without a value: <code>return;</code>', 'required, with a value: <code>return x;</code>'],
          ['Typical call', '<code>printAvg(3, 4);</code>', '<code>double r = avg(3, 4);</code>']
        ] },
        { type: 'h', en: 'Method overloading' },
        { type: 'p', en: '<b>Overloading</b> means defining several methods with the <b>same name</b> but <b>different parameter lists</b> (different number, types or order of parameters). Java chooses the method whose parameters best match the arguments.',
          ar: 'التحميل الزائد: دوال بنفس الاسم وقوائم معاملات مختلفة، وتختار جافا الأنسب للوسائط.' },
        { type: 'code', run: true, code: J`
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
}`, out: "16\n15\n3.14" },
        { type: 'table', head: ['Call', 'Method chosen', 'Why'], rows: [
          ['<code>area(4)</code>', '<code>area(int)</code>', 'exact match'],
          ['<code>area(3, 5)</code>', '<code>area(int, int)</code>', 'two arguments'],
          ['<code>area(1.0)</code>', '<code>area(double)</code>', 'exact match'],
          ['<code>area(2.5f)</code>', '<code>area(double)</code>', 'float is widened to double']
        ] },
        { type: 'note', kind: 'exam', en: 'Methods cannot be overloaded by <b>return type alone</b>. <code>int f(int x)</code> and <code>double f(int x)</code> in the same class is a compile error, because a call <code>f(5)</code> could not tell them apart.',
          ar: 'لا يكفي اختلاف نوع القيمة المرجعة فقط للتحميل الزائد.' }
      ],
      practice: [
        { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int square(int n) {
        return n * n;
    }

    public static void main(String[] args) {
        System.out.println(square(3) + square(4));
        System.out.println(square(square(2)));
    }
}`,
          answer: "25\n16",
          explain: '9 + 16 = 25. square(2) is 4, and square(4) is 16.' },
        { t: 'mcq', q: 'Why does this method not compile?', code: J`
public static int sign(int n) {
    if (n > 0) {
        return 1;
    } else if (n < 0) {
        return -1;
    }
}`,
          options: ['The return type should be void', 'Missing return statement when n is 0', 'A method cannot have two return statements', 'return -1 is not an int'], answer: 1,
          explain: 'When n is 0 neither branch runs and the method reaches its end without returning a value. Add <code>return 0;</code> at the end.' },
        { t: 'output', q: 'What is the output?', code: J`
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
        System.out.println(describe('A'));
    }
}`,
          answer: "int 5\ndouble 5.0\nString 5\nint 65",
          explain: "Each call picks the best match. There is no char version, so 'A' is widened; int is the closest match, and 'A' becomes 65." },
        { t: 'mcq', q: 'Which pair of methods is <b>not</b> a valid overload when placed in the same class?',
          options: ['<code>int f(int x)</code> and <code>int f(int x, int y)</code>', '<code>int f(int x)</code> and <code>int f(double x)</code>', '<code>int f(int x)</code> and <code>double f(int x)</code>', '<code>void f(String s, int n)</code> and <code>void f(int n, String s)</code>'], answer: 2,
          explain: 'They differ only in return type, so their signatures are identical.' },
        { t: 'fill', q: 'Complete the method that returns the larger of two doubles.',
          code: J`
public static ___ larger(double a, double b) {
    if (a > b) {
        ___ a;
    }
    return b;
}`,
          answers: ['double', 'return'],
          explain: 'The method gives back a double, and <code>return a;</code> ends the method early when a is larger.' },
        { t: 'code', q: 'Write <code>public static int sumDigits(int n)</code> that returns the sum of the digits of a non-negative integer, and <code>public static boolean isDivisibleBy3(int n)</code> that uses <code>sumDigits</code> (a number is divisible by 3 when its digit sum is). In main, read <code>n</code> and print exactly:<br><code>Sum of digits: 6</code><br><code>Divisible by 3: true</code><br>Do not print any prompt.',
          qAr: 'اكتب دالة ترجع مجموع الأرقام ودالة منطقية تستخدمها لاختبار القسمة على 3.',
          starter: J`
import java.util.Scanner;

public class Main {
    // write sumDigits and isDivisibleBy3 here

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // print the results
    }
}`,
          tests: [ { stdin: '123', expected: "Sum of digits: 6\nDivisible by 3: true" }, { stdin: '4721', expected: "Sum of digits: 14\nDivisible by 3: false" }, { stdin: '999', expected: "Sum of digits: 27\nDivisible by 3: true" } ],
          solution: J`
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
    }
}`,
          hint: 'Use the digit loop from the Loops unit inside sumDigits, then <code>return sumDigits(n) % 3 == 0;</code>',
          explain: 'One method can call another. Because n is passed by value, the loop in sumDigits can change its own copy of n without affecting main.' }
      ]
    },
    {
      title: 'Variable scope and modular design',
      titleAr: 'نطاق المتغيرات والتصميم المعياري',
      minutes: 45,
      body: [
        { type: 'h', en: 'Scope of local variables' },
        { type: 'p', en: 'A <b>local variable</b> is declared inside a method. Its <b>scope</b> (where it can be used) starts at its declaration and ends at the closing brace of the block that contains it. Parameters are local variables whose scope is the whole method body.',
          ar: 'نطاق المتغير المحلي يبدأ من تعريفه وينتهي عند نهاية الكتلة التي عُرِّف فيها.' },
        { type: 'code', code: J`
public static void demo() {
    int x = 1;
    if (x > 0) {
        int y = 2;
        System.out.println(x + y);   // OK: x and y are both in scope
    }
    System.out.println(y);           // ERROR: y is out of scope here
}` },
        { type: 'p', en: 'Variables in different methods are completely separate, even if they have the same name. Each method call gets its own fresh set of local variables.' },
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
        { type: 'note', kind: 'exam', en: 'You cannot declare the same variable name twice in nested blocks of one method. But two loops that come one after the other may each declare their own <code>i</code>, because the first <code>i</code> is out of scope when the second loop starts.',
          ar: 'لا يجوز تعريف نفس الاسم مرتين في كتل متداخلة، لكن يجوز في حلقتين متتاليتين.' },
        { type: 'code', code: J`
for (int i = 0; i < 3; i++) { ... }
for (int i = 0; i < 5; i++) { ... }    // OK: separate scopes

int k = 0;
for (int k = 0; k < 3; k++) { ... }    // ERROR: k is already defined` },
        { type: 'h', en: 'Modular design and stepwise refinement' },
        { type: 'p', en: '<b>Stepwise refinement</b> (top-down design) means breaking a large problem into smaller subproblems, then breaking those into even smaller ones until each piece is simple enough to write as one method. <code>main</code> then reads like an outline of the solution.',
          ar: 'التصميم التدريجي: تقسيم المشكلة الكبيرة إلى مشكلات أصغر، كل منها دالة بسيطة.' },
        { type: 'list', items: [
          '<b>Reuse</b>: write a method once, call it many times.',
          '<b>Readability</b>: a good method name explains what a block of code does.',
          '<b>Testing</b>: each method can be checked on its own.',
          '<b>Teamwork</b>: different people can write different methods.'
        ] },
        { type: 'p', en: 'Example problem: an electricity bill. The first 200 kWh cost 0.18 SAR each, every extra kWh costs 0.30 SAR, and 15% VAT is added. Refinement: <b>read usage</b> &rarr; <b>compute energy cost</b> &rarr; <b>add VAT</b> &rarr; <b>print the bill</b>. Each step becomes a method.' },
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
        { type: 'note', kind: 'tip', en: 'Build and test one method at a time. You can first write a <b>stub</b> (a method with a simple temporary body, such as <code>return 0;</code>) so that main compiles, then fill in each method and test it.',
          ar: 'اكتب الدوال واحدة تلو الأخرى واختبر كل واحدة، ويمكن البدء بدوال مؤقتة.' },
        { type: 'note', kind: 'warn', en: 'Keep each method focused on <b>one</b> task. A method called <code>energyCost</code> should compute and return the cost, not also read input and print. Mixing tasks makes methods hard to reuse.' }
      ],
      practice: [
        { t: 'mcq', q: 'Which line causes a compile error?', code: J`
public static void main(String[] args) {
    int total = 0;                      // line A
    for (int i = 1; i <= 3; i++) {
        int bonus = 5;                  // line B
        total += i + bonus;             // line C
    }
    System.out.println(total + i);      // line D
}`,
          options: ['Line A', 'Line B', 'Line C', 'Line D'], answer: 3,
          explain: 'The scope of i is the for loop only. After the loop, i no longer exists.' },
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
}`,
          answer: '4 8',
          explain: 'The parameter value in twice is a separate copy. main\'s value stays 4; the returned 8 is stored in result.' },
        { t: 'mcq', q: 'What does <b>stepwise refinement</b> mean?',
          options: ['Running a program step by step in a debugger', 'Breaking a large problem into smaller subproblems, each solved by a method', 'Making a loop run one step at a time', 'Rewriting a program to make it run faster'], answer: 1,
          explain: 'Stepwise (top-down) refinement decomposes a problem into smaller and smaller parts until each part is easy to implement.' },
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
}`,
          answer: '60',
          explain: 'bonus is created fresh in each iteration: 10 + 20 + 30 = 60. total is declared outside the loop, so it keeps its value and can be printed after the loop.' },
        { t: 'fill', q: 'Complete the method that converts Fahrenheit to Celsius.',
          code: J`
public static ___ toCelsius(double f) {
    ___ (f - 32) * 5 / 9;
}`,
          answers: ['double', 'return'],
          explain: 'The result is a double and must be sent back with return.' },
        { t: 'code', q: 'Write <code>public static int gcd(int a, int b)</code> (greatest common divisor) and <code>public static int lcm(int a, int b)</code> (least common multiple, use <code>a / gcd(a, b) * b</code>). In main, read two positive integers and print exactly:<br><code>GCD: 6</code><br><code>LCM: 36</code><br>Do not print any prompt.',
          qAr: 'اكتب دالتين للقاسم المشترك الأكبر والمضاعف المشترك الأصغر.',
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
}`,
          tests: [ { stdin: '12 18', expected: "GCD: 6\nLCM: 36" }, { stdin: '7 5', expected: "GCD: 1\nLCM: 35" }, { stdin: '20 30', expected: "GCD: 10\nLCM: 60" } ],
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
}`,
          hint: 'Euclid\'s algorithm: while b is not 0, replace (a, b) with (b, a % b). Then a is the GCD.',
          explain: 'gcd changes only its own copies of a and b, so main can still pass the original values to lcm. lcm reuses gcd instead of repeating the loop.' }
      ]
    }
  ],
  quiz: [
    { t: 'output', q: 'What is the output?', code: J`
public class Main {
    public static int f(int x) {
        return x * 2 + 1;
    }

    public static void main(String[] args) {
        System.out.println(f(f(3)));
    }
}`,
      answer: '15',
      explain: 'The inner call f(3) returns 7, then f(7) returns 15.' },
    { t: 'mcq', q: 'What is the return type of a method that does not return a value?',
      options: ['<code>null</code>', '<code>int</code>', '<code>void</code>', 'No return type is written'], answer: 2,
      explain: 'The keyword void means the method returns nothing.' },
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
}`,
      answer: '9',
      explain: 'Pass-by-value: reset changes only its copy n.' },
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
}`,
      answer: "5\n5.5",
      explain: 'add(2, 3) matches the int version. add(2.5, 3) needs the double version; 3 is widened to 3.0.' },
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
}`,
      answer: "3 2 1 Go!\n3",
      explain: 'countdown decreases its own copy of n. The n in main is still 3.' },
    { t: 'mcq', q: 'What is wrong with this method?', code: J`
public static String level(int score) {
    if (score >= 50) {
        return "Pass";
    }
    if (score < 50) {
        return "Fail";
    }
}`,
      options: ['Nothing, it compiles', 'Compile error: missing return statement', 'It always returns "Pass"', 'A String method cannot use if'], answer: 1,
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
}`,
      answer: '5',
      explain: 'The vowels are E, u, a, i, o. toLowerCase makes the uppercase E count as well.' },
    { t: 'mcq', q: 'Given <code>public static double avg(int a, int b)</code>, which statement does <b>not</b> compile?',
      options: ['<code>avg(3, 4);</code>', '<code>double r = avg(10, 20);</code>', '<code>System.out.println(avg(1, 2) + 1);</code>', '<code>int r = avg(3, 4);</code>'], answer: 3,
      explain: 'avg returns a double, which cannot be assigned to an int without a cast. Ignoring a returned value (the first option) is allowed.' }
  ],
  lab: {
    t: 'code',
    q: 'Mini project: <b>Number analyzer</b>. Write three methods: <code>countDigits(int n)</code> returns the number of digits, <code>sumDigits(int n)</code> returns the sum of the digits, and <code>isPrime(int n)</code> returns true if n is prime (1 is not prime). In main, read positive integers until <code>0</code> and for each number print one line exactly like:<br><code>12: digits=2, sum=3, prime=no</code><br>Do not print any prompts.',
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
    explain: 'main only handles input and output; each calculation lives in its own method. A return inside a loop ends the method immediately, which acts like break.'
  },
  cheats: [
    { code: J`public static void name(int p) { ... }`, note: 'void method: performs an action, returns nothing' },
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
    { term: 'Method header', ar: 'رأس الدالة', def: 'The first line of a method definition: modifiers, return type, name and parameter list.' },
    { term: 'Method signature', ar: 'توقيع الدالة', def: 'The method name together with its parameter list.' },
    { term: 'void method', ar: 'دالة لا ترجع قيمة', def: 'A method whose return type is void; it performs an action but returns no value.' },
    { term: 'Return value', ar: 'القيمة المرجعة', def: 'The value a method sends back to its caller using a return statement.' },
    { term: 'Parameter', ar: 'معامل', def: 'A variable declared in a method header that receives a value when the method is called.' },
    { term: 'Argument', ar: 'وسيط', def: 'A value passed to a method in a call.' },
    { term: 'Pass-by-value', ar: 'التمرير بالقيمة', def: 'Passing a copy of the argument value to the parameter, so the caller\'s variable is not changed.' },
    { term: 'Method overloading', ar: 'التحميل الزائد للدوال', def: 'Defining methods with the same name but different parameter lists in the same class.' },
    { term: 'Local variable', ar: 'متغير محلي', def: 'A variable declared inside a method; it exists only while that method runs.' },
    { term: 'Scope', ar: 'النطاق', def: 'The part of a program where a variable can be referenced.' },
    { term: 'Call stack', ar: 'مكدس الاستدعاءات', def: 'The memory area that stores an activation record for each active method call.' },
    { term: 'Stepwise refinement', ar: 'التحسين التدريجي', def: 'A design approach that breaks a problem into smaller subproblems until each is easy to implement.' }
  ]
});
