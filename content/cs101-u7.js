JP.unit({
  course: 'cs101',
  n: 7,
  title: 'Arrays',
  titleAr: 'المصفوفات',
  intro: "Until now, one variable held one value. But a class has 30 marks, and a shop has 100 prices. An array lets you keep many values of the same type under one name, and a loop can then handle all of them. In small, slow steps you will learn to create arrays, use indexes, loop over arrays, copy them, pass them to methods, search them and sort them.",
  introAr: "المصفوفة تخزّن قيمًا كثيرة من النوع نفسه تحت اسم واحد، فنعالج 30 درجة أو 100 سعر بحلقة واحدة. ستتعلم بخطوات صغيرة إنشاء المصفوفات والفهارس والحلقات والنسخ والدوال والبحث والترتيب.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'Your first array',
      titleAr: 'مصفوفتك الأولى',
      minutes: 30,
      body: [
        { type: 'h', en: 'Many values, one name' },
        { type: 'p', en: "Imagine you want to keep the marks of 30 students. With what you know, you would need 30 variables: <code>mark1</code>, <code>mark2</code>, <code>mark3</code> ... That is long, boring and easy to get wrong. An <b>array</b> solves this problem: it is one variable that holds many values of the same type.",
          ar: "المصفوفة متغير واحد يحمل قيمًا كثيرة من النوع نفسه، بدل عشرات المتغيرات." },
        { type: 'analogy', title: 'A row of lockers', en: "Think of a row of lockers in a gym. The whole row has one name, for example &quot;Gym lockers&quot;. Each locker holds one thing, and every locker has its own number. An array is the same: one name, many boxes, and a number for each box.",
          ar: "المصفوفة مثل صف خزائن: اسم واحد للصف، وكل خزانة لها رقم وتحمل شيئًا واحدًا." },
        { type: 'h', en: 'Creating an array' },
        { type: 'p', en: "To make an array you must say two things: the <b>type</b> of the values, and <b>how many</b> boxes you want. Here is an array with room for 3 whole numbers:" },
        { type: 'code', code: J`
          int[] marks = new int[3];
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int[] marks', 'Make a variable called <code>marks</code>. The <code>[]</code> means: it is an array. <code>int</code> means: every box holds an <code>int</code>.'],
          ['=', 'Store the following in it.'],
          ['new int[3]', '<code>new</code> asks Java to build a new array with <b>3</b> boxes. The size is written in square brackets.']
        ], ar: "int[] يعني مصفوفة أعداد صحيحة، و new int[3] تنشئ 3 صناديق." },
        { type: 'p', en: "In memory you can draw it as a row of boxes. The numbers above the boxes are the <b>indexes</b> (we explain them next). A new <code>int</code> array starts with 0 in every box." },
        { type: 'code', code: J`
          index:    0    1    2
                +----+----+----+
          marks | 0  | 0  | 0  |
                +----+----+----+
        ` },
        { type: 'check', q: "How many boxes does <code>new double[5]</code> create?", options: ['4', '5', '6', 'It depends on the values'], answer: 1,
          explain: "The number in the brackets is the number of boxes: 5.", hint: "Look at the number between [ and ]." },
        { type: 'h', en: 'Index: the number of a box' },
        { type: 'p', en: "To use one box you need its number. This number is called the <b>index</b>. You write the array name and then the index in square brackets: <code>marks[1]</code>." },
        { type: 'analogy', title: 'Counting starts at zero', en: "In Java, counting starts from <b>0</b>, not 1. Imagine floors in some buildings: the ground floor is 0, then 1, then 2. The first locker is number 0, the second is number 1, the third is number 2.",
          ar: "العد في جافا يبدأ من 0 وليس 1: أول صندوق رقمه 0." },
        { type: 'code', code: J`
          marks[0] = 70;
          marks[1] = 85;
          marks[2] = 60;
        ` },
        { type: 'code', code: J`
          index:    0     1     2
                +-----+-----+-----+
          marks | 70  | 85  | 60  |
                +-----+-----+-----+
        ` },
        { type: 'lines', rows: [
          ['marks[0] = 70;', 'Put 70 in the <b>first</b> box (index 0).'],
          ['marks[1] = 85;', 'Put 85 in the <b>second</b> box (index 1).'],
          ['marks[2] = 60;', 'Put 60 in the <b>third</b> box (index 2).']
        ], ar: "marks[0] هو العنصر الأول، وmarks[2] هو الثالث." },
        { type: 'p', en: "You read a box the same way: <code>marks[1]</code> is the value 85. The size of an array is always available as <code>marks.length</code>. Notice: there are <b>no brackets ( )</b> after <code>length</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] marks = new int[3];
                  marks[0] = 70;
                  marks[1] = 85;
                  marks[2] = 60;
                  System.out.println(marks[1]);
                  System.out.println(marks.length);
              }
          }
        `, out: J`
          85
          3
        ` },
        { type: 'check', q: "An array has 10 boxes. What is the index of the <b>last</b> box?", options: ['10', '9', '11', '1'], answer: 1,
          explain: "Indexes go 0, 1, 2, ... 9. That is 10 numbers, so the last index is 9.", hint: "The first index is 0." },
        { type: 'h', en: 'Boxes start with a default value' },
        { type: 'p', en: "When Java builds an array, it fills every box for you. You do not need to set them first." },
        { type: 'table', head: ['Type of the boxes', 'Starting value'], rows: [
          ['<code>int</code>', '<code>0</code>'],
          ['<code>double</code>', '<code>0.0</code>'],
          ['<code>boolean</code>', '<code>false</code>'],
          ['<code>String</code>', '<code>null</code> (means: nothing here yet)']
        ] },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] counts = new int[3];
                  double[] rates = new double[2];
                  boolean[] passed = new boolean[2];
                  String[] names = new String[2];
                  System.out.println(counts[0] + " " + rates[1] + " " + passed[0] + " " + names[1]);
              }
          }
        `, out: J`
          0 0.0 false null
        ` },
        { type: 'steps', title: 'Worked example: coffee prices', problem: "Store the prices of 3 drinks in riyals. Then print the price of the second drink and how many drinks there are.",
          steps: [
            { en: "We need 3 prices that can have decimals, so the type is <code>double</code>. Create an array with 3 boxes.", code: "double[] prices = new double[3];" },
            { en: "Put a price in each box. Remember: the first box is index 0.", code: J`
              prices[0] = 12.5;
              prices[1] = 9.0;
              prices[2] = 15.0;
            ` },
            { en: "Print the second drink. The second box has index <b>1</b>.", code: J`System.out.println("Second drink: " + prices[1] + " riyals");` },
            { en: "Print how many drinks there are with <code>length</code>.", code: J`System.out.println("Drinks: " + prices.length);` },
            { en: "Put everything inside <code>main</code> and run it." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    double[] prices = new double[3];
                    prices[0] = 12.5;
                    prices[1] = 9.0;
                    prices[2] = 15.0;
                    System.out.println("Second drink: " + prices[1] + " riyals");
                    System.out.println("Drinks: " + prices.length);
                }
            }
          `, out: J`
            Second drink: 9.0 riyals
            Drinks: 3
          `, ar: "الصندوق الثاني رقمه 1، وprices.length يعطي عدد الصناديق." },
        { type: 'note', kind: 'exam', en: "An array has a <b>fixed size</b>. After <code>new int[3]</code> it will always have 3 boxes. You cannot add a fourth box later." }
      ],
      mistakes: [
        { title: 'Counting from 1', en: "The array has 3 boxes, but there is no box number 3. The program stops with an <code>ArrayIndexOutOfBoundsException</code>. The last index is <code>length - 1</code>.", code: J`
          int[] m = new int[3];
          m[3] = 50;   // WRONG: valid indexes are 0, 1, 2
        `, ar: "الفهرس الأخير هو الحجم ناقص 1." },
        { title: 'Forgetting new', en: "Writing the variable is not enough. Without <code>new</code> there are no boxes, so Java refuses to compile.", code: J`
          int[] a;
          a[0] = 5;    // WRONG: no array was created
        ` },
        { title: 'Writing length() with brackets', en: "For arrays, <code>length</code> is not a method. Do not write ( ).", code: J`
          System.out.println(marks.length());   // WRONG
          System.out.println(marks.length);     // correct
        ` },
        { title: 'Mixing types', en: "An array holds one type only. The type on the left and the type after <code>new</code> must match.", code: J`
          int[] a = new double[3];   // WRONG
        ` }
      ],
      remember: [
        "An array is <b>one name, many boxes</b> of the same type.",
        "Create it with <code>new type[size]</code>, for example <code>new int[3]</code>.",
        "The boxes are numbered from <b>0</b>. These numbers are called indexes.",
        "<code>a.length</code> is the number of boxes (no brackets).",
        "The last index is <code>a.length - 1</code>.",
        "New boxes start with 0, 0.0, false or null."
      ],
      rememberAr: "المصفوفة اسم واحد وصناديق كثيرة من نوع واحد. العد يبدأ من 0، وآخر فهرس هو الطول ناقص 1، والطول يُكتب length بدون أقواس.",
      practice: [
        { t: 'mcq', q: "How many boxes does <code>int[] a = new int[4];</code> create?", options: ['3', '4', '5', '1'], answer: 1,
          explain: "The number in the brackets is the size: 4 boxes.", explainAr: "الرقم بين الأقواس هو عدد الصناديق." },
        { t: 'mcq', q: "What is the index of the <b>first</b> box of an array?", options: ['0', '1', '-1', 'It depends on the size'], answer: 0,
          explain: "Java counts from 0. The first box is index 0." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = new int[3];
                  a[0] = 4;
                  a[2] = 6;
                  System.out.println(a[0] + a[1] + a[2]);
              }
          }
        `, answer: '10', explain: "a[1] was never set, so it is 0. The sum is 4 + 0 + 6 = 10." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  double[] prices = new double[4];
                  prices[1] = 2.5;
                  prices[3] = prices[1] * 2;
                  System.out.println(prices[0] + " " + prices[1] + " " + prices[3]);
                  System.out.println(prices.length);
              }
          }
        `, answer: J`
          0.0 2.5 5.0
          4
        `, explain: "prices[0] keeps its default 0.0. prices[3] = 2.5 * 2 = 5.0. The array has 4 boxes." },
        { t: 'fill', q: "Complete the code that creates an array for the seven days of the week and prints its size.", code: J`
          String[] days = ___ String[7];
          days[0] = "Sunday";
          System.out.println("Number of days: " + days.___);
        `, answers: ['new', 'length'],
          explain: "Arrays are created with <code>new</code>, and the size is read from <code>length</code> (no brackets)." },
        { t: 'mcq', q: "Which line creates an array of 5 decimal numbers?",
          options: ['<code>double a = new double[5];</code>', '<code>double[] a = new double[5];</code>', '<code>double[] a = new int[5];</code>', '<code>double[5] a;</code>'], answer: 1,
          explain: "You need <code>double[]</code> on the left and <code>new double[5]</code> on the right." },
        { t: 'order', q: "Arrange the lines into a program that prints <code>80</code>.", lines: [
          'public class Main {',
          '    public static void main(String[] args) {',
          '        int[] scores = new int[3];',
          '        scores[0] = 70;',
          '        scores[1] = scores[0] + 10;',
          '        System.out.println(scores[1]);',
          '    }',
          '}'
        ], explain: "Create the array first, set <code>scores[0]</code>, and only then use it to compute <code>scores[1]</code>." },
        { t: 'code', q: "Read three whole numbers. Store them in an array of size 3 and print them in <b>reverse</b> order, separated by single spaces. No prompts.",
          qAr: "اقرأ ثلاثة أعداد، خزّنها في مصفوفة، ثم اطبعها بترتيب معكوس.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int[] n = new int[3];
                    // read into n[0], n[1], n[2], then print n[2] n[1] n[0]
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int[] n = new int[3];
                    n[0] = input.nextInt();
                    n[1] = input.nextInt();
                    n[2] = input.nextInt();
                    System.out.println(n[2] + " " + n[1] + " " + n[0]);
                }
            }
          `,
          tests: [ { stdin: '1 2 3', expected: '3 2 1' }, { stdin: '10 -4 7', expected: '7 -4 10' } ],
          hint: "Read with n[0] = input.nextInt(); then n[1], then n[2].",
          explain: "Each box is a variable: you can assign to it with <code>n[0] = input.nextInt();</code>." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Filling arrays with values you know',
      titleAr: 'تعبئة المصفوفة بقيم معروفة',
      minutes: 25,
      body: [
        { type: 'h', en: 'The curly-brace shortcut' },
        { type: 'p', en: "Sometimes you already know all the values, for example the temperatures of five days in Riyadh. Writing five lines <code>t[0] = ...</code> is slow. Java has a shortcut: put the values inside curly braces <code>{ }</code>. Java counts them and makes the array the right size.",
          ar: "إذا كنت تعرف القيم مسبقًا فاكتبها بين { } وجافا تحسب الحجم." },
        { type: 'analogy', title: 'A packed egg tray', en: "Compare an empty egg tray with a tray that you buy already full. Before: you place eggs one by one. After: the tray is full from the start, and you can count the eggs. The curly braces give you the &quot;full tray&quot;.",
          ar: "مثل طبق بيض جاهز ممتلئ بدل أن تضع البيض واحدة واحدة." },
        { type: 'code', code: J`
          int[] temps = {31, 35, 29, 40, 38};
        ` },
        { type: 'code', code: J`
          index:     0    1    2    3    4
                 +----+----+----+----+----+
          temps  | 31 | 35 | 29 | 40 | 38 |
                 +----+----+----+----+----+
        ` },
        { type: 'lines', rows: [
          ['int[] temps', 'A variable for an array of <code>int</code>.'],
          ['= { ... }', 'Fill it with the values between the braces, separated by commas.'],
          ['31, 35, 29, 40, 38', 'Five values, so Java makes <b>5 boxes</b>. 31 goes to index 0, 35 to index 1, and so on.']
        ] },
        { type: 'check', q: "How many boxes are in <code>int[] a = {4, 8, 15};</code>?", options: ['2', '3', '4', '15'], answer: 1,
          explain: "Three values, three boxes.", hint: "Count the values." },
        { type: 'h', en: 'Reading and changing a box' },
        { type: 'p', en: "A box works like a normal variable. You can print it, and you can put a new value in it. The old value is replaced." },
        { type: 'code', code: J`
          temps[2] = 30;                 // replace 29 with 30
          System.out.println(temps[2]);  // prints 30
        ` },
        { type: 'p', en: "Other types work the same way. Words go into a <code>String</code> array, and single letters go into a <code>char</code> array:" },
        { type: 'code', code: J`
          String[] cities = {"Riyadh", "Jeddah", "Dammam"};
          char[] grades = {'A', 'B', 'C'};
        ` },
        { type: 'h', en: 'The last box' },
        { type: 'p', en: "How do you reach the last box when you do not remember the size? Use <code>length - 1</code>. The size is 5, but the last index is 4." },
        { type: 'analogy', title: 'House numbers on a street', en: "A street has 5 houses numbered 0 to 4. The number of houses is 5, but the last house is number 4. So <code>temps[temps.length - 1]</code> is always the last box.",
          ar: "عدد البيوت 5 لكن رقم آخر بيت 4." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] temps = {31, 35, 29, 40, 38};
                  System.out.println("Days: " + temps.length);
                  System.out.println("First: " + temps[0]);
                  System.out.println("Last: " + temps[temps.length - 1]);
                  temps[2] = 30;
                  System.out.println("Day 3 corrected: " + temps[2]);
              }
          }
        `, out: J`
          Days: 5
          First: 31
          Last: 38
          Day 3 corrected: 30
        ` },
        { type: 'lines', rows: [
          ['temps.length', 'The number of boxes: 5.'],
          ['temps[0]', 'The first box: 31.'],
          ['temps[temps.length - 1]', '5 - 1 = 4, so this is <code>temps[4]</code>: 38.'],
          ['temps[2] = 30;', 'Replace the third value (29) with 30.']
        ], ar: "temps[temps.length - 1] هو العنصر الأخير دائمًا." },
        { type: 'check', q: "What does <code>temps[temps.length - 1]</code> give for an array with 8 values?", options: ['The 8th value (the last)', 'The 7th value', 'An error', 'The 9th value'], answer: 0,
          explain: "length - 1 = 7, and index 7 is the 8th box, the last one." },
        { type: 'h', en: 'Going outside the array' },
        { type: 'p', en: "What happens if you ask for a box that does not exist? Java checks every index <b>when the program runs</b>. If the index is below 0 or equal to or bigger than <code>length</code>, the program stops with an error called <code>ArrayIndexOutOfBoundsException</code>. The word &quot;exception&quot; means: an error that happens while the program is running." },
        { type: 'code', code: J`
          int[] marks = {90, 75, 88};
          System.out.println(marks[2]);   // OK: prints 88
          System.out.println(marks[3]);   // ERROR: there is no box 3
        ` },
        { type: 'note', kind: 'warn', en: "The compiler does <b>not</b> warn you about a wrong index. The program compiles and starts, then it crashes at that line. Always check: index must be from 0 to <code>length - 1</code>.",
          ar: "انتبه{{g:|ي}}: الخطأ يظهر أثناء التشغيل وليس عند الترجمة." },
        { type: 'check', q: "Which line crashes?", code: J`
          int[] a = {5, 6, 7};
        `, options: ['<code>a[0]</code>', '<code>a[2]</code>', '<code>a[3]</code>', '<code>a[a.length - 1]</code>'], answer: 2,
          explain: "The valid indexes are 0, 1, 2. Index 3 does not exist." },
        { type: 'steps', title: 'Worked example: the first and last day', problem: "A week of five temperatures is known. Print the first and last temperature, and say how many days there are.",
          steps: [
            { en: "The values are known, so use the curly-brace shortcut.", code: "int[] temps = {31, 35, 29, 40, 38};" },
            { en: "The first box is index 0.", code: J`System.out.println("First: " + temps[0]);` },
            { en: "The last box is index <code>length - 1</code>.", code: J`System.out.println("Last: " + temps[temps.length - 1]);` },
            { en: "Print the size.", code: J`System.out.println("Days: " + temps.length);` },
            { en: "Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] temps = {31, 35, 29, 40, 38};
                    System.out.println("First: " + temps[0]);
                    System.out.println("Last: " + temps[temps.length - 1]);
                    System.out.println("Days: " + temps.length);
                }
            }
          `, out: J`
            First: 31
            Last: 38
            Days: 5
          ` },
        { type: 'note', kind: 'exam', en: "The curly-brace shortcut works <b>only</b> in the line where you declare the variable. <code>int[] a; a = {1, 2, 3};</code> does not compile. If you must do it later, write <code>a = new int[]{1, 2, 3};</code>.",
          ar: "الاختصار { } يعمل فقط في سطر التعريف." }
      ],
      mistakes: [
        { title: 'Using the braces after the declaration', en: "The braces can only be used in the declaration line.", code: J`
          int[] a;
          a = {1, 2, 3};   // WRONG
        ` },
        { title: 'Using the size as the last index', en: "With 3 values the last index is 2, not 3.", code: J`
          int[] a = {5, 6, 7};
          System.out.println(a[3]);   // WRONG: crashes
        ` },
        { title: 'Putting the size inside as well', en: "When you use braces, do not write a size. Java counts for you.", code: J`
          int[] a = new int[3]{1, 2, 3};   // WRONG
          int[] b = {1, 2, 3};             // correct
        ` },
        { title: 'Wrong quotes', en: "Words need double quotes, single letters need single quotes.", code: J`
          String[] s = {'Riyadh'};   // WRONG: use double quotes
          char[] c = {"A"};          // WRONG: use single quotes
        ` }
      ],
      remember: [
        "<code>int[] a = {1, 2, 3};</code> creates and fills an array in one line.",
        "The size is the number of values in the braces.",
        "<code>a[i] = value;</code> replaces the value in box <code>i</code>.",
        "The last box is <code>a[a.length - 1]</code>.",
        "A bad index gives <code>ArrayIndexOutOfBoundsException</code> while the program runs.",
        "The braces shortcut works only in the declaration line."
      ],
      rememberAr: "الاختصار {1,2,3} ينشئ المصفوفة ويملؤها في سطر واحد. آخر عنصر هو a[a.length - 1]. فهرس خارج الحدود يوقف البرنامج أثناء التشغيل.",
      practice: [
        { t: 'mcq', q: "What is the size of <code>String[] names = {&quot;Ali&quot;, &quot;Sara&quot;, &quot;Nora&quot;, &quot;Omar&quot;};</code>?", options: ['3', '4', '5', '0'], answer: 1,
          explain: "Four names, so four boxes." },
        { t: 'mcq', q: "For <code>int[] a = {10, 20, 30};</code>, what is <code>a[1]</code>?", options: ['10', '20', '30', 'An error'], answer: 1,
          explain: "Index 0 is 10, index 1 is 20." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {4, 8, 15, 16};
                  a[0] = 1;
                  System.out.println(a[0] + a[3]);
                  System.out.println(a[a.length - 1]);
              }
          }
        `, answer: J`
          17
          16
        `, explain: "a[0] is now 1, so 1 + 16 = 17. The last box is 16." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] days = {"Sat", "Sun", "Mon"};
                  days[1] = "Fri";
                  System.out.println(days[0] + " " + days[1] + " " + days.length);
              }
          }
        `, answer: 'Sat Fri 3', explain: "The second box is replaced with Fri. The size is still 3." },
        { t: 'fill', q: "Complete the shortcut that creates an array with three prices.", code: J`
          double[] prices = ___ 2.5, 3.0, 4.75 ___;
        `, answers: ['{', '}'], explain: "Curly braces hold the values." },
        { t: 'mcq', q: "Which statement causes a <b>compile error</b>?",
          options: ['<code>int[] a = {1, 2, 3};</code>', '<code>int[] a = new int[]{1, 2, 3};</code>', '<code>int[] a; a = {1, 2, 3};</code>', '<code>int[] a = new int[3];</code>'], answer: 2,
          explain: "The short braces form is allowed only in the declaration line." },
        { t: 'mcq', q: "What happens when this code runs?", code: J`
          int[] n = {4, 5, 6};
          System.out.println(n[n.length]);
        `, options: ['It prints 6', 'It prints 0', 'Compile error', 'ArrayIndexOutOfBoundsException at run time'], answer: 3,
          explain: "<code>n.length</code> is 3 and index 3 does not exist (valid: 0 to 2). The error happens when the program runs." },
        { t: 'code', q: "Read one whole number <code>x</code> (0 to 4). The array <code>{10, 20, 30, 40, 50}</code> is given in the starter. Print the value in box <code>x</code>. No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int x = input.nextInt();
                    int[] a = {10, 20, 30, 40, 50};
                    // print the value in box x
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int x = input.nextInt();
                    int[] a = {10, 20, 30, 40, 50};
                    System.out.println(a[x]);
                }
            }
          `,
          tests: [ { stdin: '0', expected: '10' }, { stdin: '2', expected: '30' }, { stdin: '4', expected: '50' } ],
          hint: "The index can be a variable: a[x].", explain: "An index can be any int expression, including a variable." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Visiting every box with a loop',
      titleAr: 'المرور على كل الصناديق بحلقة',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why loops and arrays are friends' },
        { type: 'p', en: "Suppose you want to print 30 marks. You would not write 30 lines. The indexes are numbers 0, 1, 2, 3 ... and a <code>for</code> loop is very good at counting numbers. So a loop and an array work together: the loop counter <b>is</b> the index.",
          ar: "عدّاد الحلقة هو الفهرس، فنمرّ على كل عنصر بحلقة واحدة." },
        { type: 'analogy', title: 'The cleaner and the lockers', en: "A cleaner walks along the row of lockers and opens each one, from the first to the last. He does not need 30 different plans. He repeats the same action and moves one step. The loop is the cleaner; the counter <code>i</code> is the locker number he is standing at.",
          ar: "الحلقة مثل عامل ينتقل من خزانة إلى التي بعدها ويكرر العمل نفسه." },
        { type: 'code', code: J`
          int[] temps = {31, 35, 29};
          for (int i = 0; i < temps.length; i++) {
              System.out.println(temps[i]);
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int i = 0', 'Start at index 0, the first box.'],
          ['i < temps.length', 'Keep going while <code>i</code> is smaller than the size (3). So <code>i</code> will be 0, 1, 2.'],
          ['i++', 'After each round, move to the next box.'],
          ['temps[i]', 'The box number <code>i</code>. Its value changes in every round.']
        ], ar: "الشرط i &lt; temps.length يجعل i يأخذ القيم 0 و1 و2 فقط." },
        { type: 'p', en: "Let us follow the loop round by round. This is called a <b>trace</b>." },
        { type: 'table', head: ['Round', 'i', 'Is i &lt; 3?', 'temps[i]', 'Printed'], rows: [
          ['1', '0', 'yes', '31', '31'],
          ['2', '1', 'yes', '35', '35'],
          ['3', '2', 'yes', '29', '29'],
          ['4', '3', 'no', '-', 'the loop stops']
        ] },
        { type: 'check', q: "How many times does the loop body run for an array of 6 boxes?", options: ['5', '6', '7', 'Once'], answer: 1,
          explain: "i takes the values 0, 1, 2, 3, 4, 5: six times." },
        { type: 'note', kind: 'warn', en: "Write <code>i &lt; a.length</code>, <b>not</b> <code>i &lt;= a.length</code>. With <code>&lt;=</code> the loop also uses index <code>length</code>, which does not exist, and the program crashes. This mistake is called an <i>off-by-one</i> error.",
          ar: "استخدم &lt; وليس &lt;= حتى لا يتجاوز الفهرس الحدود." },
        { type: 'h', en: 'Changing every box' },
        { type: 'p', en: "A loop can also <b>write</b> into the boxes. Here the teacher gives 5 bonus marks to everybody." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] scores = {70, 82, 95};
                  for (int i = 0; i < scores.length; i++) {
                      scores[i] = scores[i] + 5;
                  }
                  for (int i = 0; i < scores.length; i++) {
                      System.out.println(scores[i]);
                  }
              }
          }
        `, out: J`
          75
          87
          100
        ` },
        { type: 'lines', rows: [
          ['scores[i] = scores[i] + 5;', 'Read the old value from box <code>i</code>, add 5, and store the result back in the same box.'],
          ['second for loop', 'A separate loop prints the new values.']
        ] },
        { type: 'h', en: 'The for-each loop' },
        { type: 'p', en: "When you only want to <b>read</b> every value, and you do not care about the index, Java has a shorter loop called <b>for-each</b>. Read it as: &quot;for each city in cities&quot;." },
        { type: 'analogy', title: 'Calling the names', en: "A teacher calls the students one by one: &quot;for each student in the class, say hello&quot;. She does not count the seat numbers. Each student comes in turn.",
          ar: "مثل معلم ينادي كل طالب بدوره دون أن يهتم برقم المقعد." },
        { type: 'code', code: J`
          String[] cities = {"Riyadh", "Jeddah", "Dammam"};
          for (String city : cities) {
              System.out.println(city);
          }
        ` },
        { type: 'lines', rows: [
          ['for (String city : cities)', 'Take the boxes of <code>cities</code> one by one. In each round, <code>city</code> is a copy of the value in the current box. The <code>:</code> reads as &quot;in&quot;.'],
          ['System.out.println(city);', 'Use the copy. This prints Riyadh, then Jeddah, then Dammam.']
        ], ar: "for (String city : cities) تعني: لكل city داخل cities." },
        { type: 'note', kind: 'warn', en: "In for-each the variable is only a <b>copy</b>. Writing <code>x = x * 2;</code> inside does not change the array. To change values, or to know the position, use the normal <code>for</code> with an index.",
          ar: "for-each للقراءة فقط." },
        { type: 'check', q: "Which loop can change the values inside the array?", options: ['for-each loop', 'for loop with an index <code>i</code>', 'Both', 'Neither'], answer: 1,
          explain: "Only <code>a[i] = ...</code> changes a box. for-each gives you a copy." },
        { type: 'steps', title: 'Worked example: a daily report', problem: "Print one line for every day: &quot;Day 1: 31&quot;, &quot;Day 2: 35&quot;, ... for the temperatures {31, 35, 29, 40}.",
          steps: [
            { en: "Make the array.", code: "int[] temps = {31, 35, 29, 40};" },
            { en: "We want the position (day number), so use a normal <code>for</code> loop with <code>i</code>.", code: "for (int i = 0; i < temps.length; i++) {" },
            { en: "Day numbers start at 1, but indexes start at 0. So print <code>i + 1</code>.", code: J`System.out.println("Day " + (i + 1) + ": " + temps[i]);` },
            { en: "Close the loop with <code>}</code>. Here is the complete program." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] temps = {31, 35, 29, 40};
                    for (int i = 0; i < temps.length; i++) {
                        System.out.println("Day " + (i + 1) + ": " + temps[i]);
                    }
                }
            }
          `, out: J`
            Day 1: 31
            Day 2: 35
            Day 3: 29
            Day 4: 40
          `, ar: "رقم اليوم = i + 1 لأن الفهرس يبدأ من 0." }
      ],
      mistakes: [
        { title: 'Using <= with length', en: "The loop tries index 3 for an array of size 3 and crashes.", code: J`
          for (int i = 0; i <= a.length; i++) {   // WRONG
              System.out.println(a[i]);
          }
        ` },
        { title: 'Starting at 1', en: "The first box is index 0. Starting at 1 skips it.", code: J`
          for (int i = 1; i < a.length; i++) {   // skips a[0]
        ` },
        { title: 'Trying to change values with for-each', en: "The variable is only a copy, so the array stays the same.", code: J`
          for (int x : a) {
              x = x + 5;   // does NOT change the array
          }
        ` },
        { title: 'Printing the array name', en: "Printing the array itself does not show the values. It prints something strange like <code>[I@1b6d3586</code>. Use a loop.", code: J`
          System.out.println(a);   // not the values
        ` }
      ],
      remember: [
        "The loop counter can be used as the index: <code>a[i]</code>.",
        "Standard loop: <code>for (int i = 0; i &lt; a.length; i++)</code>.",
        "Use <code>&lt;</code>, never <code>&lt;=</code>, with <code>length</code>.",
        "for-each: <code>for (type x : a)</code> reads every value, but cannot change the array.",
        "Use a normal for loop when you need the index or want to change values."
      ],
      rememberAr: "الصيغة المعتادة: for (int i = 0; i &lt; a.length; i++). حلقة for-each للقراءة فقط، أما التعديل أو معرفة الموضع فيحتاج حلقة for العادية.",
      practice: [
        { t: 'mcq', q: "Which condition visits every box of the array <code>a</code> exactly once?", options: ['<code>i &lt;= a.length</code>', '<code>i &lt; a.length</code>', '<code>i &lt; a.length - 1</code>', '<code>i &lt; 1</code>'], answer: 1,
          explain: "<code>i &lt; a.length</code> gives the indexes 0 to length - 1." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {2, 4, 6};
                  for (int i = 0; i < a.length; i++) {
                      System.out.print(a[i] + " ");
                  }
                  System.out.println();
              }
          }
        `, answer: '2 4 6', explain: "The loop prints each value followed by a space." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] fruits = {"Date", "Fig", "Lime"};
                  for (String f : fruits) {
                      System.out.println(f.length());
                  }
              }
          }
        `, answer: J`
          4
          3
          4
        `, explain: "<code>f.length()</code> is the number of letters of each word (for a String, with brackets)." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {1, 2, 3};
                  for (int i = 0; i < a.length; i++) {
                      a[i] = a[i] * 10;
                  }
                  System.out.println(a[0] + " " + a[2]);
              }
          }
        `, answer: '10 30', explain: "Every box is multiplied by 10: {10, 20, 30}." },
        { t: 'fill', q: "Complete the loop that prints every price.", code: J`
          double[] prices = {5.5, 7.0, 3.25};
          for (int i = 0; i < prices.___; ___) {
              System.out.println(prices[i]);
          }
        `, answers: ['length', 'i++'], explain: "The loop runs while <code>i</code> is below the size, and <code>i++</code> moves to the next box." },
        { t: 'mcq', q: "What is the effect of this loop on <code>a = {1, 2, 3}</code>?", code: J`
          for (int x : a) {
              x = x * 2;
          }
        `, options: ['Every element is doubled', 'Compile error', 'The array is unchanged', 'Run-time error'], answer: 2,
          explain: "<code>x</code> is a copy of each value. Changing it does not change the array." },
        { t: 'order', q: "Arrange the lines so that the program prints the three numbers, one per line.", lines: [
          'public class Main {',
          '    public static void main(String[] args) {',
          '        int[] a = {7, 8, 9};',
          '        for (int i = 0; i < a.length; i++) {',
          '            System.out.println(a[i]);',
          '        }',
          '    }',
          '}'
        ], explain: "The array must exist before the loop. The print line goes inside the loop." },
        { t: 'code', q: "Read a whole number <code>k</code> (from 1 to 5). The array <code>{5, 10, 15, 20, 25}</code> is given. Print its <b>first k values</b>, one per line. No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int k = input.nextInt();
                    int[] a = {5, 10, 15, 20, 25};
                    // loop from 0 up to k - 1
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int k = input.nextInt();
                    int[] a = {5, 10, 15, 20, 25};
                    for (int i = 0; i < k; i++) {
                        System.out.println(a[i]);
                    }
                }
            }
          `,
          tests: [ { stdin: '2', expected: '5\n10' }, { stdin: '5', expected: '5\n10\n15\n20\n25' } ],
          hint: "Use i < k as the loop condition.", explain: "The loop does not have to go to the end of the array: here it stops at k." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'Sum, average, largest and smallest',
      titleAr: 'المجموع والمتوسط وأكبر وأصغر قيمة',
      minutes: 35,
      body: [
        { type: 'h', en: 'Why do we need these patterns?' },
        { type: 'p', en: "Most array programs ask the same questions: What is the total? What is the average? Which is the biggest? How many are above 60? Once you know a pattern for each question, you can answer them for any array. The loop is always the same; only the middle changes.",
          ar: "أغلب برامج المصفوفات تسأل: المجموع؟ المتوسط؟ الأكبر؟ كم عدد...؟" },
        { type: 'h', en: 'Pattern 1: the sum' },
        { type: 'analogy', title: 'The cashier', en: "A cashier starts with an empty total (0). For each item she adds the price to the total. At the end, the total is the bill. The variable <code>sum</code> is the cashier's total.",
          ar: "المجموع مثل الكاشير: يبدأ من صفر ويضيف سعر كل غرض." },
        { type: 'code', code: J`
          int[] scores = {72, 95, 60};
          int sum = 0;
          for (int i = 0; i < scores.length; i++) {
              sum += scores[i];
          }
        ` },
        { type: 'lines', rows: [
          ['int sum = 0;', 'Start with an empty total. <b>Before</b> the loop, not inside it.'],
          ['sum += scores[i];', 'Add the current box to the total. It is a short form of <code>sum = sum + scores[i];</code>.']
        ] },
        { type: 'table', head: ['i', 'scores[i]', 'sum after the round'], rows: [
          ['0', '72', '72'], ['1', '95', '167'], ['2', '60', '227']
        ] },
        { type: 'check', q: "Where must <code>int sum = 0;</code> be written?", options: ['Inside the loop', 'Before the loop', 'After the loop', 'It is not needed'], answer: 1,
          explain: "If it were inside the loop, the total would restart from 0 in every round." },
        { type: 'h', en: 'Pattern 2: the average' },
        { type: 'p', en: "Average = sum divided by the number of values. Remember that dividing two <code>int</code> values cuts the decimals (<code>7 / 2</code> is <code>3</code>). To keep decimals, turn one number into a <code>double</code> first with <code>(double)</code>.",
          ar: "المتوسط = المجموع ÷ العدد، ونحوّل أحدهما إلى double حتى لا تضيع الكسور." },
        { type: 'code', code: J`
          double average = (double) sum / scores.length;
        ` },
        { type: 'check', q: "<code>sum = 7</code> and <code>length = 2</code> (both int). What does <code>sum / length</code> give?", options: ['3.5', '3', '4', '3.0'], answer: 1,
          explain: "Integer division throws away the decimals: 7 / 2 = 3. Use <code>(double) sum / length</code> to get 3.5." },
        { type: 'h', en: 'Pattern 3: the largest value' },
        { type: 'analogy', title: 'King of the hill', en: "The first student stands on the hill: he is the champion for now. Then each next student challenges him. If the challenger is taller, he becomes the new champion. At the end, the champion is the tallest.",
          ar: "الأول هو البطل مؤقتًا، وكل عنصر جديد يتحدّاه، فإن كان أكبر أصبح هو البطل." },
        { type: 'code', code: J`
          int max = scores[0];
          for (int i = 1; i < scores.length; i++) {
              if (scores[i] > max) {
                  max = scores[i];
              }
          }
        ` },
        { type: 'lines', rows: [
          ['int max = scores[0];', 'The first value is the champion at the start. We do <b>not</b> start from 0, because all values may be negative.'],
          ['for (int i = 1; ...)', 'Start from box 1: box 0 is already the champion.'],
          ['if (scores[i] > max)', 'A challenger bigger than the champion?'],
          ['max = scores[i];', 'Yes: it is the new champion.']
        ], ar: "نبدأ max من العنصر الأول لا من 0." },
        { type: 'p', en: "For the smallest value, use exactly the same code but change <code>&gt;</code> to <code>&lt;</code>." },
        { type: 'table', head: ['i', 'scores[i]', 'bigger than max?', 'max after'], rows: [
          ['start', '-', '-', '72'], ['1', '95', 'yes', '95'], ['2', '60', 'no', '95']
        ] },
        { type: 'check', q: "To find the <b>smallest</b> value, what changes in the largest-value code?", options: ['Nothing', '<code>&gt;</code> becomes <code>&lt;</code>', 'The loop goes backwards', 'Start from 0'], answer: 1,
          explain: "A challenger replaces the champion when it is smaller." },
        { type: 'h', en: 'Pattern 4: counting' },
        { type: 'p', en: "To count how many values pass a test, use a counter that starts at 0 and goes up by one each time the test is true." },
        { type: 'code', code: J`
          int passed = 0;
          for (int i = 0; i < scores.length; i++) {
              if (scores[i] >= 60) {
                  passed++;
              }
          }
        ` },
        { type: 'steps', title: 'Worked example: class statistics', problem: "For the marks {72, 95, 60, 88, 85}, print the sum, the average, the largest, the smallest and how many marks are 85 or more.",
          steps: [
            { en: "Create the array and four starting variables. Champions start at the first value.", code: J`
              int[] scores = {72, 95, 60, 88, 85};
              int sum = 0;
              int max = scores[0];
              int min = scores[0];
              int good = 0;
            ` },
            { en: "One loop does all four jobs. Add to the sum.", code: "sum += scores[i];" },
            { en: "Two <code>if</code> statements update the champions.", code: J`
              if (scores[i] > max) max = scores[i];
              if (scores[i] < min) min = scores[i];
            ` },
            { en: "Count the good marks.", code: J`if (scores[i] >= 85) good++;` },
            { en: "After the loop compute the average with <code>(double)</code> and print. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] scores = {72, 95, 60, 88, 85};
                    int sum = 0;
                    int max = scores[0];
                    int min = scores[0];
                    int good = 0;
                    for (int i = 0; i < scores.length; i++) {
                        sum += scores[i];
                        if (scores[i] > max) max = scores[i];
                        if (scores[i] < min) min = scores[i];
                        if (scores[i] >= 85) good++;
                    }
                    double average = (double) sum / scores.length;
                    System.out.println("Sum: " + sum);
                    System.out.println("Average: " + average);
                    System.out.println("Max: " + max + ", Min: " + min);
                    System.out.println("85 or more: " + good);
                }
            }
          `, out: J`
            Sum: 400
            Average: 80.0
            Max: 95, Min: 60
            85 or more: 3
          `, ar: "حلقة واحدة تحسب المجموع وأكبر وأصغر قيمة والعدد." },
        { type: 'note', kind: 'tip', en: "Sometimes you need the <b>position</b> of the largest value, not the value. Then remember the index: <code>maxIndex = i;</code> and compare with <code>scores[maxIndex]</code>. The value is then <code>scores[maxIndex]</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  double[] grades = {55.5, 90.0, 47.0, 73.5, 60.0};
                  int maxIndex = 0;
                  for (int i = 1; i < grades.length; i++) {
                      if (grades[i] > grades[maxIndex]) {
                          maxIndex = i;
                      }
                  }
                  System.out.println("Top grade " + grades[maxIndex] + " at index " + maxIndex);
              }
          }
        `, out: J`
          Top grade 90.0 at index 1
        ` }
      ],
      mistakes: [
        { title: 'Starting the sum inside the loop', en: "The total restarts at 0 in every round, so it ends as the last value only.", code: J`
          for (int i = 0; i < a.length; i++) {
              int sum = 0;     // WRONG place
              sum += a[i];
          }
        ` },
        { title: 'Starting max at 0', en: "If all values are negative, 0 stays the &quot;largest&quot;, which is wrong.", code: J`
          int max = 0;          // WRONG for {-5, -2, -9}
          int max2 = a[0];      // correct
        ` },
        { title: 'Integer division in the average', en: "Both numbers are int, so the decimals are lost.", code: J`
          double avg = sum / a.length;           // WRONG: 3 instead of 3.5
          double avg2 = (double) sum / a.length; // correct
        ` },
        { title: 'Dividing by the wrong number', en: "Divide by <code>a.length</code>, not by the last index.", code: J`
          double avg = (double) sum / (a.length - 1);   // WRONG
        ` }
      ],
      remember: [
        "Sum: <code>int sum = 0;</code> before the loop, then <code>sum += a[i];</code>.",
        "Average: <code>(double) sum / a.length</code>.",
        "Largest: start with <code>a[0]</code>, replace when a value is bigger.",
        "Smallest: the same, but with <code>&lt;</code>.",
        "Counting: a counter starts at 0 and <code>count++</code> when the test is true."
      ],
      rememberAr: "المجموع يبدأ من صفر قبل الحلقة. المتوسط = (double) المجموع / الطول. الأكبر نبدأه من a[0]. العدّ: عدّاد يبدأ من 0 ويزيد عند تحقق الشرط.",
      practice: [
        { t: 'mcq', q: "What should the starting value of <code>sum</code> be?", options: ['0', '1', 'a[0]', 'a.length'], answer: 0, explain: "An empty total is 0." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {3, 8, 5};
                  int sum = 0;
                  for (int i = 0; i < a.length; i++) {
                      sum += a[i];
                  }
                  System.out.println(sum);
              }
          }
        `, answer: '16', explain: "3 + 8 + 5 = 16." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] nums = {3, 8, 5, 10, 7};
                  int total = 0;
                  for (int n : nums) {
                      if (n % 2 == 1) total += n;
                  }
                  System.out.println(total);
              }
          }
        `, answer: '15', explain: "Only the odd values 3, 5 and 7 are added: 15." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {-4, -9, -2};
                  int max = a[0];
                  for (int i = 1; i < a.length; i++) {
                      if (a[i] > max) max = a[i];
                  }
                  System.out.println(max);
              }
          }
        `, answer: '-2', explain: "-2 is bigger than -4 and -9." },
        { t: 'fill', q: "Complete the average calculation.", code: J`
          int sum = 90;
          int[] a = new int[4];
          double avg = (___) sum / a.___;
        `, answers: ['double', 'length'], explain: "Casting one side to <code>double</code> keeps the decimals; the number of values is <code>a.length</code>." },
        { t: 'mcq', q: "How can you find the <b>smallest</b> value?", options: ['Start min at 0 and use &gt;', 'Start min at a[0] and replace when a[i] &lt; min', 'Start min at a.length', 'Sort the array backwards'], answer: 1,
          explain: "Start with the first value and replace it whenever you see a smaller one." },
        { t: 'order', q: "Arrange the lines that count how many marks are 50 or more.", lines: [
          'int count = 0;',
          'for (int i = 0; i < marks.length; i++) {',
          '    if (marks[i] >= 50) {',
          '        count++;',
          '    }',
          '}'
        ], explain: "The counter starts before the loop; the test and increase are inside." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> integers (use an array). Print the largest value and how many times it appears as <code>Max: M, Count: C</code>. No prompts.",
          qAr: "اقرأ n ثم n عددًا، واطبع أكبر قيمة وعدد مرات ظهورها.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] values = new int[n];
                    // read n values with a loop
                    // find the maximum, then count it
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] values = new int[n];
                    for (int i = 0; i < n; i++) {
                        values[i] = input.nextInt();
                    }
                    int max = values[0];
                    for (int v : values) {
                        if (v > max) max = v;
                    }
                    int count = 0;
                    for (int v : values) {
                        if (v == max) count++;
                    }
                    System.out.println("Max: " + max + ", Count: " + count);
                }
            }
          `,
          tests: [
            { stdin: '6\n4 9 2 9 7 9', expected: 'Max: 9, Count: 3' },
            { stdin: '1\n-5', expected: 'Max: -5, Count: 1' },
            { stdin: '5\n-3 -1 -7 -1 -2', expected: 'Max: -1, Count: 2' }
          ],
          hint: "Two passes: the first finds the maximum (start from values[0]); the second counts values equal to it. Fill the array with values[i] = input.nextInt();",
          explain: "Because the values are in an array, you can go over them twice." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 5
    {
      title: 'Reading input into an array; copying arrays',
      titleAr: 'قراءة المدخلات في مصفوفة ونسخ المصفوفات',
      minutes: 30,
      body: [
        { type: 'h', en: 'Filling an array from the keyboard' },
        { type: 'p', en: "Often you do not know the values when you write the program: the user types them. First read how many values there are (<code>n</code>), build an array with <code>n</code> boxes, and then fill the boxes with a loop.",
          ar: "نقرأ العدد n أولًا، ننشئ مصفوفة بحجم n، ثم نملؤها بحلقة." },
        { type: 'analogy', title: 'Preparing the exam papers', en: "Before an exam the teacher asks: &quot;How many students?&quot; Then she prepares exactly that many papers, and hands one paper to each student. First the count, then the papers, then the filling.",
          ar: "المعلمة تسأل أولًا عن عدد الطلاب ثم تجهّز الأوراق بالعدد نفسه." },
        { type: 'code', code: J`
          int n = input.nextInt();
          double[] temps = new double[n];
          for (int i = 0; i < n; i++) {
              temps[i] = input.nextDouble();
          }
        ` },
        { type: 'lines', rows: [
          ['int n = input.nextInt();', 'Read the number of values.'],
          ['new double[n]', 'The size can be a variable. The array gets exactly <code>n</code> boxes.'],
          ['temps[i] = input.nextDouble();', 'In round <code>i</code>, read one number and store it in box <code>i</code>.']
        ], ar: "الحجم يمكن أن يكون متغيرًا مثل n." },
        { type: 'check', q: "In <code>new double[n]</code>, what is <code>n</code>?", options: ['The index of the last box', 'The number of boxes', 'The first value', 'A type'], answer: 1, explain: "The number between the brackets is the number of boxes." },
        { type: 'steps', title: 'Worked example: print the temperatures backwards', problem: "Read n, then n temperatures. Print them in reverse order. Example input: 4 then 30.5 28 33.25 31.",
          steps: [
            { en: "Read <code>n</code> and create the array.", code: J`
              int n = input.nextInt();
              double[] temps = new double[n];
            ` },
            { en: "Fill the array with a loop.", code: J`
              for (int i = 0; i < n; i++) {
                  temps[i] = input.nextDouble();
              }
            ` },
            { en: "Go backwards: start at the last index <code>n - 1</code> and count down to 0.", code: "for (int i = n - 1; i >= 0; i--) {" },
            { en: "Print each value. Complete program:" }
          ],
          stdin: '4\n30.5 28 33.25 31',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    double[] temps = new double[n];
                    for (int i = 0; i < n; i++) {
                        temps[i] = input.nextDouble();
                    }
                    System.out.print("Reversed:");
                    for (int i = n - 1; i >= 0; i--) {
                        System.out.print(" " + temps[i]);
                    }
                    System.out.println();
                }
            }
          `, out: J`
            Reversed: 31.0 33.25 28.0 30.5
          `, ar: "للمرور بالعكس نبدأ من n - 1 وننزل حتى 0." },
        { type: 'h', en: 'Copying an array: the surprise' },
        { type: 'p', en: "You might think that <code>b = a;</code> makes a copy of the array. It does <b>not</b>. An array variable does not contain the boxes. It contains the <b>address</b> of the boxes. So <code>b = a;</code> copies only the address, and now two names point to the same boxes." },
        { type: 'analogy', title: 'Two keys, one flat', en: "If you give your friend a copy of your flat key, you now have two keys but only one flat. If he paints the wall red, your wall is red too. A real copy would be building a second flat.",
          ar: "نسخ المفتاح لا ينسخ الشقة: الاسمان يشيران إلى المصفوفة نفسها." },
        { type: 'code', code: J`
          int[] a = {1, 2, 3};
          int[] b = a;      // NOT a copy: same boxes
          b[0] = 99;
          System.out.println(a[0]);   // prints 99
        ` },
        { type: 'code', code: J`
          a --->  +----+----+----+
          b --->  | 99 |  2 |  3 |      one array, two names
                  +----+----+----+
        ` },
        { type: 'check', q: "After <code>b = a;</code> and <code>b[1] = 7;</code>, what is <code>a[1]</code>?", options: ['The old value', '7', '0', 'An error'], answer: 1,
          explain: "a and b are the same array, so the change is seen through both names." },
        { type: 'h', en: 'Making a real copy' },
        { type: 'p', en: "For a real copy, build a new array of the same size and copy the values one by one with a loop. Now the two arrays are independent." },
        { type: 'code', code: J`
          int[] copy = new int[original.length];
          for (int i = 0; i < original.length; i++) {
              copy[i] = original[i];
          }
        ` },
        { type: 'p', en: "Java also has a ready-made command: <code>System.arraycopy(source, sourceStart, target, targetStart, count)</code>. It copies <code>count</code> values. The target array must already exist." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] original = {1, 2, 3};
                  int[] alias = original;
                  alias[0] = 99;
                  System.out.println(original[0]);

                  int[] copy = new int[original.length];
                  for (int i = 0; i < original.length; i++) {
                      copy[i] = original[i];
                  }
                  copy[1] = 50;
                  System.out.println(original[1] + " " + copy[1]);

                  int[] copy2 = new int[5];
                  System.arraycopy(original, 0, copy2, 1, 3);
                  for (int x : copy2) {
                      System.out.print(x + " ");
                  }
                  System.out.println();
              }
          }
        `, out: J`
          99
          2 50
          0 99 2 3 0
        ` },
        { type: 'lines', rows: [
          ['int[] alias = original;', 'Only a second name. Changing <code>alias[0]</code> changes <code>original[0]</code> too, so it prints 99.'],
          ['copy[i] = original[i];', 'A real copy. Changing <code>copy[1]</code> does not change <code>original</code>: it prints <code>2 50</code>.'],
          ['System.arraycopy(original, 0, copy2, 1, 3)', 'Take 3 values from <code>original</code> starting at index 0, and put them in <code>copy2</code> starting at index 1. The other boxes stay 0.']
        ], ar: "b = a لا ينسخ. للنسخ الحقيقي أنشئ مصفوفة جديدة وانسخ العناصر." },
        { type: 'note', kind: 'exam', en: "<code>a == b</code> compares the <b>addresses</b>, not the values. Two different arrays with the same values are <b>not</b> <code>==</code>." }
      ],
      mistakes: [
        { title: 'Thinking b = a is a copy', en: "Both names share the same boxes.", code: J`
          int[] b = a;     // not a copy!
        ` },
        { title: 'Reading before creating the array', en: "You need <code>n</code> before <code>new double[n]</code>.", code: J`
          double[] t = new double[n];   // WRONG if n was not read yet
          int n = input.nextInt();
        ` },
        { title: 'Wrong loop limit for reading', en: "Use <code>i &lt; n</code>. With <code>i &lt;= n</code> the program crashes.", code: J`
          for (int i = 0; i <= n; i++) {   // WRONG
              t[i] = input.nextDouble();
          }
        ` },
        { title: 'A target array that is too small', en: "arraycopy needs room in the target; otherwise it crashes.", code: J`
          int[] small = new int[2];
          System.arraycopy(a, 0, small, 0, 3);   // WRONG: 3 values, 2 boxes
        ` }
      ],
      remember: [
        "Read <code>n</code> first, then <code>new type[n]</code>, then fill with a loop.",
        "An array variable holds an <b>address</b>, not the boxes.",
        "<code>b = a;</code> makes two names for one array.",
        "A real copy: new array + loop (or <code>System.arraycopy</code>).",
        "<code>a == b</code> compares addresses, not contents."
      ],
      rememberAr: "نقرأ n ثم ننشئ المصفوفة ثم نملؤها بحلقة. b = a لا ينسخ بل يجعل اسمين لمصفوفة واحدة. النسخ الحقيقي يحتاج مصفوفة جديدة. == تقارن العناوين لا القيم.",
      practice: [
        { t: 'mcq', q: "After <code>int[] b = a;</code>, how many arrays exist?", options: ['One', 'Two', 'Zero', 'It depends'], answer: 0, explain: "Only one array; <code>a</code> and <code>b</code> are two names for it." },
        { t: 'mcq', q: "Which code reads <code>n</code> numbers into an array correctly?", options: ['<code>for (int i = 0; i &lt;= n; i++)</code>', '<code>for (int i = 0; i &lt; n; i++)</code>', '<code>for (int i = 1; i &lt; n; i++)</code>', '<code>for (int i = n; i &gt; 0; i++)</code>'], answer: 1, explain: "Indexes 0 to n - 1 are right." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {10, 20, 30};
                  int[] b = a;
                  b[2] = 5;
                  System.out.println(a[2]);
              }
          }
        `, answer: '5', explain: "Same array, so a[2] is also 5." },
        { t: 'output', q: "What is the output? (Think about references.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {10, 20, 30};
                  int[] b = a;
                  b[2] = 5;
                  a = new int[]{1, 2, 3};
                  System.out.println(a[2] + " " + b[2]);
              }
          }
        `, answer: '3 5', explain: "<code>b</code> still points to the old array, while <code>a</code> now points to a new one." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {1, 2, 3};
                  int[] c = new int[3];
                  for (int i = 0; i < a.length; i++) {
                      c[i] = a[i];
                  }
                  c[0] = 100;
                  System.out.println(a[0] + " " + c[0]);
              }
          }
        `, answer: '1 100', explain: "c is a real copy, so changing it does not change a." },
        { t: 'fill', q: "Complete the call so that <b>all</b> of <code>src</code> is copied into <code>dest</code>.", code: J`
          double[] src = {1.5, 2.5, 3.5};
          double[] dest = new double[src.length];
          System.arraycopy(src, ___, dest, ___, src.length);
        `, answers: ['0', '0'], explain: "Copy from index 0 of the source into index 0 of the target." },
        { t: 'mcq', q: "What does this print?", code: J`
          int[] a = {1, 2, 3};
          int[] b = {1, 2, 3};
          System.out.println(a == b);
        `, options: ['true', 'false', 'Compile error', '1 2 3'], answer: 1, explain: "<code>==</code> compares addresses; these are two different arrays." },
        { t: 'code', q: "Read <code>n</code> and then <code>n</code> integers. Print them in <b>reverse</b> order, separated by single spaces (no space at the end). No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n];
                    // fill the array, then print from the last box to the first
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    for (int i = n - 1; i >= 0; i--) {
                        System.out.print(a[i]);
                        if (i > 0) System.out.print(" ");
                    }
                    System.out.println();
                }
            }
          `,
          tests: [ { stdin: '4\n1 2 3 4', expected: '4 3 2 1' }, { stdin: '1\n9', expected: '9' }, { stdin: '3\n5 -1 0', expected: '0 -1 5' } ],
          hint: "Second loop: start at n - 1 and count down while i >= 0. Print a space only when i > 0.", explain: "Counting downwards from the last index visits the boxes in reverse." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 6
    {
      title: 'Arrays and methods',
      titleAr: 'المصفوفات والدوال',
      minutes: 35,
      body: [
        { type: 'h', en: 'Giving an array to a method' },
        { type: 'p', en: "In unit 6 you wrote methods that receive numbers. A method can also receive a whole array. This is useful: you write &quot;sum of an array&quot; once, and use it for any array in your program.",
          ar: "الدالة يمكن أن تستقبل مصفوفة كاملة، فنكتب العملية مرة واحدة ونستخدمها لأي مصفوفة." },
        { type: 'analogy', title: 'Lending a notebook', en: "You lend your friend your notebook (not a photocopy). If he writes in it, you see his writing when you get it back. When you give an array to a method, the method gets the same &quot;notebook&quot;, so it can read it and also change it.",
          ar: "عند تمرير المصفوفة تُمرَّر نفسها لا نسخة منها، فتغيير الدالة يظهر عند المستدعي." },
        { type: 'code', code: J`
          public static double sum(double[] list) {
              double total = 0;
              for (double x : list) {
                  total += x;
              }
              return total;
          }
        ` },
        { type: 'lines', rows: [
          ['public static double sum(', 'A method that gives back (returns) a <code>double</code>.'],
          ['double[] list', 'The parameter is an array of doubles. Inside the method it is called <code>list</code>.'],
          ['for (double x : list)', 'Visit each value with for-each.'],
          ['return total;', 'Give back the answer.']
        ], ar: "المعامل double[] list يعني أن الدالة تستقبل مصفوفة." },
        { type: 'p', en: "To call it, write only the <b>name</b> of the array (no brackets): <code>sum(prices)</code>." },
        { type: 'check', q: "How do you call <code>sum</code> for the array <code>prices</code>?", options: ['<code>sum(prices[])</code>', '<code>sum(prices)</code>', '<code>sum(double[] prices)</code>', '<code>sum[prices]</code>'], answer: 1,
          explain: "In a call you write just the name of the array." },
        { type: 'h', en: 'A method that changes the array' },
        { type: 'p', en: "Because the method works on the same array, it can change the values. Here a shop gives a discount to all prices." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  double[] prices = {10.0, 25.0, 40.0};
                  applyDiscount(prices, 0.5);
                  printArray(prices);
                  System.out.println("Total: " + sum(prices));
              }

              public static void applyDiscount(double[] list, double rate) {
                  for (int i = 0; i < list.length; i++) {
                      list[i] = list[i] * rate;
                  }
              }

              public static double sum(double[] list) {
                  double total = 0;
                  for (double x : list) {
                      total += x;
                  }
                  return total;
              }

              public static void printArray(double[] list) {
                  for (int i = 0; i < list.length; i++) {
                      System.out.print(list[i] + " ");
                  }
                  System.out.println();
              }
          }
        `, out: J`
          5.0 12.5 20.0
          Total: 37.5
        ` },
        { type: 'lines', rows: [
          ['applyDiscount(prices, 0.5);', 'The method receives the same array. It does not return anything, yet <code>prices</code> changes.'],
          ['list[i] = list[i] * rate;', 'Each price is replaced by half of itself.'],
          ['printArray(prices);', 'Shows the changed values: 5.0 12.5 20.0.']
        ] },
        { type: 'p', en: "A normal number is different. The method gets a <b>copy</b> of the number, so changing it does not change the caller's variable." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int x = 1;
                  int[] y = {1, 1};
                  change(x, y);
                  System.out.println("x = " + x + ", y[0] = " + y[0]);
              }

              public static void change(int number, int[] numbers) {
                  number = 100;
                  numbers[0] = 100;
              }
          }
        `, out: J`
          x = 1, y[0] = 100
        ` },
        { type: 'check', q: "Why did <code>x</code> stay 1 but <code>y[0]</code> become 100?", options: ['The method got a copy of x, but the same array y', 'Arrays are bigger', 'x is not an int', 'It is a compiler bug'], answer: 0,
          explain: "A number is copied. An array is shared." },
        { type: 'note', kind: 'exam', en: "Inside a method, <code>list = new int[5];</code> only points the local name at a new array. The caller's array does not change. Changing the <i>boxes</i> (<code>list[0] = 5</code>) does.",
          ar: "تغيير عناصر المصفوفة داخل الدالة يظهر خارجها، أما إسناد مصفوفة جديدة للمعامل فلا." },
        { type: 'h', en: 'A method that returns an array' },
        { type: 'p', en: "A method can build a new array and give it back. The return type has brackets: <code>int[]</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] ids = {101, 102, 103, 104};
                  int[] rev = reverse(ids);
                  for (int id : rev) {
                      System.out.print(id + " ");
                  }
                  System.out.println();
              }

              public static int[] reverse(int[] list) {
                  int[] result = new int[list.length];
                  for (int i = 0; i < list.length; i++) {
                      result[list.length - 1 - i] = list[i];
                  }
                  return result;
              }
          }
        `, out: J`
          104 103 102 101
        ` },
        { type: 'lines', rows: [
          ['public static int[] reverse(int[] list)', 'Takes an <code>int</code> array and returns a new <code>int</code> array.'],
          ['new int[list.length]', 'A new array with the same size.'],
          ['result[list.length - 1 - i] = list[i];', 'Box 0 goes to the last place, box 1 to the one before it, and so on.'],
          ['return result;', 'Give the new array back to <code>main</code>.']
        ], ar: "نوع الإرجاع int[] يعني أن الدالة تُرجع مصفوفة." },
        { type: 'steps', title: 'Worked example: count the passed students', problem: "Write a method <code>countPassed</code> that receives an array of marks and returns how many are 60 or more. Test it in main.",
          steps: [
            { en: "The header: it receives <code>int[]</code> and returns an <code>int</code>.", code: "public static int countPassed(int[] marks) {" },
            { en: "A counter starts at 0.", code: "int count = 0;" },
            { en: "Loop over the marks. Count the good ones.", code: J`
              for (int m : marks) {
                  if (m >= 60) count++;
              }
            ` },
            { en: "Return the counter.", code: "return count;" },
            { en: "In <code>main</code> call it with an array name. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] marks = {55, 72, 60, 48, 91};
                    System.out.println("Passed: " + countPassed(marks));
                }

                public static int countPassed(int[] marks) {
                    int count = 0;
                    for (int m : marks) {
                        if (m >= 60) count++;
                    }
                    return count;
                }
            }
          `, out: J`
            Passed: 3
          ` }
      ],
      mistakes: [
        { title: 'Writing brackets in the call', en: "Brackets belong to the declaration, not to the call.", code: J`
          sum(prices[]);    // WRONG
          sum(prices);      // correct
        ` },
        { title: 'Forgetting [] in the return type', en: "Then the method returns one number, not an array.", code: J`
          public static int reverse(int[] list)   // WRONG return type
        ` },
        { title: 'Expecting a new array to be seen by the caller', en: "Assigning a new array to the parameter does not change the caller's variable.", code: J`
          public static void reset(int[] list) {
              list = new int[list.length];   // caller does not see this
          }
        ` },
        { title: 'Forgetting to return', en: "A method with a return type must end with <code>return</code>.", code: J`
          public static int[] make() {
              int[] r = new int[3];
          }   // WRONG: no return r;
        ` }
      ],
      remember: [
        "A parameter can be an array: <code>double[] list</code>.",
        "In the call, write only the array name: <code>sum(prices)</code>.",
        "The method gets the <b>same</b> array, so it can change the values.",
        "A number parameter is a copy; the caller's variable does not change.",
        "A method can return an array: <code>public static int[] name(...)</code>."
      ],
      rememberAr: "الدالة تستقبل المصفوفة نفسها فيمكنها تعديل عناصرها. الأعداد العادية تُنسخ. للإرجاع نكتب النوع مع الأقواس مثل int[].",
      practice: [
        { t: 'mcq', q: "Which header receives an array of ints and returns one int?", options: ['<code>public static int f(int a)</code>', '<code>public static int f(int[] a)</code>', '<code>public static int[] f(int a)</code>', '<code>public static void f(int a[])</code>'], answer: 1, explain: "The parameter is <code>int[] a</code> and the return type is <code>int</code>." },
        { t: 'mcq', q: "A method changes <code>list[0]</code>. Does the caller see the change?", options: ['Yes', 'No', 'Only if the method returns the array', 'Only for double arrays'], answer: 0, explain: "The method works on the same array." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] stock = {5, 0, 12};
                  restock(stock);
                  System.out.println(stock[0] + " " + stock[1] + " " + stock[2]);
              }

              public static void restock(int[] items) {
                  for (int i = 0; i < items.length; i++) {
                      if (items[i] == 0) {
                          items[i] = 10;
                      }
                  }
                  items = new int[3];
              }
          }
        `, answer: '5 10 12', explain: "The loop changes the shared array. The last line only changes the local name <code>items</code>." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {1, 2, 3};
                  int n = 5;
                  update(a, n);
                  System.out.println(a[0] + " " + n);
              }

              public static void update(int[] arr, int k) {
                  arr[0] = 7;
                  k = 9;
              }
          }
        `, answer: '7 5', explain: "The array change is visible; the number is only a copy." },
        { t: 'fill', q: "Complete the method that counts how many elements equal <code>target</code>.", code: J`
          public static int countOf(int[] list, int target) {
              int count = 0;
              for (int ___ : list) {
                  if (value == target) count++;
              }
              ___ count;
          }
        `, answers: ['value', 'return'], explain: "The loop variable must be named <code>value</code> (the body uses it), and the method must <code>return</code> the count." },
        { t: 'mcq', q: "Which is a correct header for a method that returns an array of doubles?", options: ['<code>public static double getMarks()</code>', '<code>public static double[] getMarks()</code>', '<code>public static []double getMarks()</code>', '<code>public static double getMarks[]()</code>'], answer: 1, explain: "The return type of an array is written <code>double[]</code>." },
        { t: 'order', q: "Arrange the lines of a method that returns the sum of an int array.", lines: [
          'public static int sum(int[] a) {',
          '    int total = 0;',
          '    for (int x : a) {',
          '        total += x;',
          '    }',
          '    return total;',
          '}'
        ], explain: "Start the total, loop, then return after the loop." },
        { t: 'code', q: "Read <code>n</code> and then <code>n</code> integers. Write a method <code>public static int[] getEvens(int[] list)</code> that returns a <b>new</b> array with only the even numbers, in the same order. Print the result with a loop: values separated by single spaces, and print <code>none</code> if there are no even numbers. No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] numbers = new int[n];
                    for (int i = 0; i < n; i++) {
                        numbers[i] = input.nextInt();
                    }
                    int[] evens = getEvens(numbers);
                    // print the evens, or none
                }

                public static int[] getEvens(int[] list) {
                    // 1) count the evens  2) create the result array  3) fill it
                    return null;
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] numbers = new int[n];
                    for (int i = 0; i < n; i++) {
                        numbers[i] = input.nextInt();
                    }
                    int[] evens = getEvens(numbers);
                    if (evens.length == 0) {
                        System.out.println("none");
                    } else {
                        for (int i = 0; i < evens.length; i++) {
                            if (i > 0) System.out.print(" ");
                            System.out.print(evens[i]);
                        }
                        System.out.println();
                    }
                }

                public static int[] getEvens(int[] list) {
                    int count = 0;
                    for (int x : list) {
                        if (x % 2 == 0) count++;
                    }
                    int[] result = new int[count];
                    int k = 0;
                    for (int x : list) {
                        if (x % 2 == 0) {
                            result[k] = x;
                            k++;
                        }
                    }
                    return result;
                }
            }
          `,
          tests: [ { stdin: '6\n3 8 10 7 2 5', expected: '8 10 2' }, { stdin: '3\n1 3 5', expected: 'none' }, { stdin: '4\n0 -4 6 9', expected: '0 -4 6' } ],
          hint: "The size of an array cannot change, so first count the evens, then create the result array with exactly that size. Use a second index k for the next free box.",
          explain: "Counting first lets you create an array of the exact size." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 7
    {
      title: 'The Arrays helper class',
      titleAr: 'الصنف Arrays المساعد',
      minutes: 25,
      body: [
        { type: 'h', en: 'Ready-made tools' },
        { type: 'p', en: "Printing, sorting, filling and comparing arrays are so common that Java already has methods for them. They live in a toolbox called <code>Arrays</code>. To use it, write <code>import java.util.Arrays;</code> at the top of the file, above <code>public class Main</code>.",
          ar: "Arrays صندوق أدوات جاهز للطباعة والترتيب والتعبئة والمقارنة. نكتب import java.util.Arrays; في أعلى الملف." },
        { type: 'analogy', title: 'A toolbox', en: "You can cut wood with a knife, but a saw is better. You can print an array with a loop, but <code>Arrays.toString</code> does it in one line. A toolbox saves your time.",
          ar: "الصندوق يوفر وقتك: بدل الحلقة تستخدم أداة جاهزة." },
        { type: 'h', en: 'Printing an array: Arrays.toString' },
        { type: 'p', en: "Remember that <code>System.out.println(a)</code> does not show the values. <code>Arrays.toString(a)</code> turns the array into text such as <code>[3, 1, 2]</code>." },
        { type: 'code', code: J`
          int[] a = {3, 1, 2};
          System.out.println(Arrays.toString(a));   // [3, 1, 2]
        ` },
        { type: 'check', q: "What does <code>Arrays.toString(new int[]{4, 5})</code> give?", options: ['4 5', '[4, 5]', '(4, 5)', '45'], answer: 1, explain: "Square brackets, and a comma plus a space between the values." },
        { type: 'h', en: 'Sorting: Arrays.sort' },
        { type: 'p', en: "<code>Arrays.sort(a)</code> puts the values in order from the smallest to the largest. The array itself is changed. It also sorts words alphabetically." },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] ages = {21, 18, 25, 19, 30};
                  System.out.println(Arrays.toString(ages));
                  Arrays.sort(ages);
                  System.out.println(Arrays.toString(ages));

                  String[] names = {"Sara", "Ali", "Nora", "Fahad"};
                  Arrays.sort(names);
                  System.out.println(Arrays.toString(names));
              }
          }
        `, out: J`
          [21, 18, 25, 19, 30]
          [18, 19, 21, 25, 30]
          [Ali, Fahad, Nora, Sara]
        ` },
        { type: 'lines', rows: [
          ['import java.util.Arrays;', 'Allows us to use the toolbox.'],
          ['Arrays.sort(ages);', 'Reorders the boxes of <code>ages</code>. The old order is gone.'],
          ['Arrays.sort(names);', 'Words are put in alphabetical order.']
        ], ar: "Arrays.sort ترتب المصفوفة نفسها تصاعديًا." },
        { type: 'h', en: 'Fill, copy and compare' },
        { type: 'table', head: ['Tool', 'What it does'], rows: [
          ['<code>Arrays.fill(a, v)</code>', 'Puts the value <code>v</code> in every box'],
          ['<code>Arrays.copyOf(a, n)</code>', 'Gives a <b>new</b> array with the first <code>n</code> values of <code>a</code>'],
          ['<code>Arrays.equals(a, b)</code>', '<code>true</code> if both arrays have the same values in the same order']
        ] },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] seats = new int[4];
                  Arrays.fill(seats, 7);
                  System.out.println(Arrays.toString(seats));

                  int[] marks = {77, 64, 91, 64};
                  int[] copy = Arrays.copyOf(marks, marks.length);
                  Arrays.sort(copy);
                  System.out.println(Arrays.toString(marks));
                  System.out.println(Arrays.toString(copy));

                  int[] x = {1, 2};
                  int[] y = {1, 2};
                  System.out.println(Arrays.equals(x, y) + " " + (x == y));
              }
          }
        `, out: J`
          [7, 7, 7, 7]
          [77, 64, 91, 64]
          [64, 64, 77, 91]
          true false
        ` },
        { type: 'lines', rows: [
          ['Arrays.fill(seats, 7);', 'All four boxes become 7.'],
          ['Arrays.copyOf(marks, marks.length)', 'A real copy. Sorting the copy does not touch <code>marks</code>.'],
          ['Arrays.equals(x, y)', '<code>true</code>: same values.'],
          ['x == y', '<code>false</code>: they are two different arrays.']
        ], ar: "equals تقارن القيم، أما == فتقارن العناوين." },
        { type: 'check', q: "You want the sorted marks but also need the original order later. What do you do?", options: ['Sort the array, then forget the old order', 'Copy with <code>Arrays.copyOf</code>, then sort the copy', 'Use <code>==</code>', 'Use <code>Arrays.fill</code>'], answer: 1, explain: "Sorting changes the array, so sort a copy." },
        { type: 'steps', title: 'Worked example: sorted student marks', problem: "Read n marks. Print them as they were typed, and then sorted.",
          steps: [
            { en: "Import the toolbox. Read <code>n</code> and fill the array with a loop.", code: J`
              int n = input.nextInt();
              int[] marks = new int[n];
              for (int i = 0; i < n; i++) {
                  marks[i] = input.nextInt();
              }
            ` },
            { en: "Print the original with <code>Arrays.toString</code>.", code: J`System.out.println(Arrays.toString(marks));` },
            { en: "Sort and print again.", code: J`
              Arrays.sort(marks);
              System.out.println(Arrays.toString(marks));
            ` },
            { en: "Complete program:" }
          ],
          stdin: '5\n70 85 90 60 95',
          code: J`
            import java.util.Arrays;
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] marks = new int[n];
                    for (int i = 0; i < n; i++) {
                        marks[i] = input.nextInt();
                    }
                    System.out.println(Arrays.toString(marks));
                    Arrays.sort(marks);
                    System.out.println(Arrays.toString(marks));
                }
            }
          `, out: J`
            [70, 85, 90, 60, 95]
            [60, 70, 85, 90, 95]
          ` },
        { type: 'note', kind: 'tip', en: "Many students forget the import line. If you see &quot;cannot find symbol Arrays&quot;, check that <code>import java.util.Arrays;</code> is at the top." }
      ],
      mistakes: [
        { title: 'Forgetting the import', en: "Without it Java does not know <code>Arrays</code>.", code: J`
          public class Main {         // no import line above
              ... Arrays.sort(a); ... // error
        ` },
        { title: 'Printing with println(a)', en: "That prints an address like <code>[I@1b6d3586</code>.", code: J`
          System.out.println(a);                    // WRONG
          System.out.println(Arrays.toString(a));   // correct
        ` },
        { title: 'Expecting sort to return a new array', en: "<code>Arrays.sort</code> changes the array itself and returns nothing.", code: J`
          int[] s = Arrays.sort(a);   // WRONG
        ` },
        { title: 'Comparing arrays with ==', en: "<code>==</code> compares addresses.", code: J`
          if (a == b) ...                // usually false
          if (Arrays.equals(a, b)) ...   // compares values
        ` }
      ],
      remember: [
        "Write <code>import java.util.Arrays;</code> at the top.",
        "<code>Arrays.toString(a)</code> prints the values like <code>[1, 2, 3]</code>.",
        "<code>Arrays.sort(a)</code> sorts the array itself (smallest first).",
        "<code>Arrays.fill</code>, <code>Arrays.copyOf</code> and <code>Arrays.equals</code> save you a loop.",
        "Sort a copy when you must keep the original order."
      ],
      rememberAr: "لا تنسَ import java.util.Arrays;. toString للطباعة، sort للترتيب (تغيّر المصفوفة نفسها)، copyOf للنسخ، equals لمقارنة القيم.",
      practice: [
        { t: 'mcq', q: "What does <code>Arrays.toString</code> return?", options: ['An int', 'A String such as [1, 2, 3]', 'A new array', 'Nothing'], answer: 1, explain: "It returns text." },
        { t: 'mcq', q: "Which line is needed at the top to use <code>Arrays</code>?", options: ['<code>import java.util.Arrays;</code>', '<code>import Arrays;</code>', '<code>use java.util.Arrays;</code>', 'None'], answer: 0, explain: "The class lives in the package java.util." },
        { t: 'output', q: "What is the output?", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] a = {9, 4, 7};
                  Arrays.sort(a);
                  System.out.println(Arrays.toString(a));
              }
          }
        `, answer: '[4, 7, 9]', explain: "Sorted from smallest to largest." },
        { t: 'output', q: "What is the output?", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  double[] t = {3.5, -1.0, 2.0};
                  Arrays.sort(t);
                  System.out.println(Arrays.toString(t));
                  System.out.println(t[0] + t[2]);
              }
          }
        `, answer: J`
          [-1.0, 2.0, 3.5]
          2.5
        `, explain: "After sorting, t[0] = -1.0 and t[2] = 3.5, and their sum is 2.5." },
        { t: 'output', q: "What is the output?", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] a = new int[3];
                  Arrays.fill(a, 4);
                  a[1] = 0;
                  System.out.println(Arrays.toString(a));
              }
          }
        `, answer: '[4, 0, 4]', explain: "fill puts 4 everywhere; then box 1 becomes 0." },
        { t: 'fill', q: "Complete the code to sort a copy and keep the original.", code: J`
          int[] sorted = Arrays.___(marks, marks.length);
          Arrays.___(sorted);
        `, answers: ['copyOf', 'sort'], explain: "copyOf makes the copy, sort sorts it." },
        { t: 'mcq', q: "What does this print?", code: J`
          int[] a = {1, 2};
          int[] b = {1, 2};
          System.out.println(Arrays.equals(a, b) + " " + (a == b));
        `, options: ['true true', 'true false', 'false true', 'false false'], answer: 1, explain: "Same values (true), but different arrays (false)." },
        { t: 'code', q: "Read <code>n</code> and then <code>n</code> integers. Print the numbers sorted from smallest to largest using <code>Arrays.toString</code>. No prompts.",
          starter: J`
            import java.util.Arrays;
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    // create the array, fill it, sort it, print it
                }
            }
          `,
          solution: J`
            import java.util.Arrays;
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    Arrays.sort(a);
                    System.out.println(Arrays.toString(a));
                }
            }
          `,
          tests: [ { stdin: '4\n9 2 7 2', expected: '[2, 2, 7, 9]' }, { stdin: '1\n5', expected: '[5]' } ],
          hint: "Fill with a loop, then Arrays.sort(a), then print Arrays.toString(a).", explain: "Three steps: read, sort, print." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 8
    {
      title: 'Linear search',
      titleAr: 'البحث الخطي',
      minutes: 25,
      body: [
        { type: 'h', en: 'Is it in the array?' },
        { type: 'p', en: "A common question: &quot;Is this student ID in the list? Where?&quot; Searching means looking for a value, called the <b>key</b>, inside an array. The simplest way is to check the boxes one by one from the first to the last. This is <b>linear search</b>.",
          ar: "البحث الخطي: نفحص الصناديق واحدًا بعد الآخر حتى نجد المفتاح." },
        { type: 'analogy', title: 'Looking for your keys', en: "You lost your car keys in a row of drawers. You open the first drawer: no. The second: no. The third: yes! You stop immediately. If you open every drawer and find nothing, the keys are not there.",
          ar: "نفتح الأدراج بالترتيب ونتوقف عند أول مرة نجد فيها المفتاح." },
        { type: 'p', en: "We write the search as a method. It gives back the <b>index</b> where the key was found. If the key is not in the array, it gives back <code>-1</code>. Why -1? Because -1 can never be a real index, so it clearly means &quot;not found&quot;." },
        { type: 'code', code: J`
          public static int linearSearch(int[] list, int key) {
              for (int i = 0; i < list.length; i++) {
                  if (list[i] == key) {
                      return i;
                  }
              }
              return -1;
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['for (int i = 0; i < list.length; i++)', 'Open the boxes one by one.'],
          ['if (list[i] == key)', 'Is this box the one we want?'],
          ['return i;', 'Yes: give back its index and <b>stop at once</b> (return leaves the method).'],
          ['return -1;', 'This line is after the loop. We reach it only if no box matched.']
        ], ar: "return -1 خارج الحلقة: لا نصل إليها إلا إذا لم نجد المفتاح." },
        { type: 'check', q: "Where is <code>return -1;</code> written?", options: ['Inside the if', 'Inside the loop, after the if', 'After the loop', 'Before the loop'], answer: 2,
          explain: "If it were inside the loop, the method would stop after checking only the first box." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] ids = {4021, 3310, 5874, 1200, 3310};
                  System.out.println(linearSearch(ids, 3310));
                  System.out.println(linearSearch(ids, 1200));
                  System.out.println(linearSearch(ids, 9999));
              }

              public static int linearSearch(int[] list, int key) {
                  for (int i = 0; i < list.length; i++) {
                      if (list[i] == key) {
                          return i;
                      }
                  }
                  return -1;
              }
          }
        `, out: J`
          1
          3
          -1
        ` },
        { type: 'p', en: "The ID 3310 appears twice (index 1 and 4). The method returns 1, the <b>first</b> match, and never looks at the second one." },
        { type: 'code', code: J`
          index:      0     1     2     3     4
                  +------+------+------+------+------+
          ids     | 4021 | 3310 | 5874 | 1200 | 3310 |
                  +------+------+------+------+------+
          search 1200:  no -> no -> no -> YES (index 3)
        ` },
        { type: 'h', en: 'Searching words' },
        { type: 'p', en: "For numbers we use <code>==</code>. For <code>String</code> values we must use <code>.equals(...)</code>, because <code>==</code> on Strings checks the address, not the letters." },
        { type: 'code', code: J`
          if (names[i].equals(key)) {
              return i;
          }
        ` },
        { type: 'check', q: "How do you compare two Strings for the same letters?", options: ['<code>a == b</code>', '<code>a.equals(b)</code>', '<code>a = b</code>', '<code>a.length(b)</code>'], answer: 1, explain: "Use equals for Strings." },
        { type: 'steps', title: 'Worked example: find a student', problem: "Read n IDs and then a key. Print the index of the first ID equal to the key, or -1.",
          steps: [
            { en: "Read <code>n</code>, create the array and fill it.", code: J`
              int n = input.nextInt();
              int[] ids = new int[n];
              for (int i = 0; i < n; i++) {
                  ids[i] = input.nextInt();
              }
            ` },
            { en: "Read the key.", code: "int key = input.nextInt();" },
            { en: "Call a search method and print its answer.", code: "System.out.println(linearSearch(ids, key));" },
            { en: "The method is the one you just learned. Complete program:" }
          ],
          stdin: '5\n4021 3310 5874 1200 3310\n5874',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] ids = new int[n];
                    for (int i = 0; i < n; i++) {
                        ids[i] = input.nextInt();
                    }
                    int key = input.nextInt();
                    System.out.println(linearSearch(ids, key));
                }

                public static int linearSearch(int[] list, int key) {
                    for (int i = 0; i < list.length; i++) {
                        if (list[i] == key) {
                            return i;
                        }
                    }
                    return -1;
                }
            }
          `, out: J`
            2
          ` },
        { type: 'note', kind: 'tip', en: "Linear search works on any array, sorted or not. In the worst case (the key is last or missing) it checks all <i>n</i> boxes." }
      ],
      mistakes: [
        { title: 'return -1 inside the loop', en: "The method stops after the first box.", code: J`
          for (int i = 0; i < list.length; i++) {
              if (list[i] == key) return i;
              else return -1;     // WRONG
          }
        ` },
        { title: 'Returning the value instead of the index', en: "The question asks &quot;where?&quot;, so return <code>i</code>, not <code>list[i]</code>.", code: J`
          return list[i];   // WRONG: this is the key itself
        ` },
        { title: 'Using == for Strings', en: "It may give <code>false</code> even for the same letters.", code: J`
          if (names[i] == key)          // WRONG
          if (names[i].equals(key))     // correct
        ` },
        { title: 'Forgetting the final return', en: "If the loop finishes, the method still needs a return.", code: J`
          // no "return -1;" after the loop -> compile error
        ` }
      ],
      remember: [
        "Linear search checks the boxes one by one from the first.",
        "It returns the index of the <b>first</b> match, or <code>-1</code> if there is none.",
        "<code>return i;</code> inside the loop; <code>return -1;</code> after the loop.",
        "Use <code>.equals</code> for Strings.",
        "It works on unsorted arrays."
      ],
      rememberAr: "البحث الخطي يفحص من الأول، يرجع فهرس أول تطابق أو ‎-1. return i داخل الحلقة وreturn -1 بعدها. للنصوص نستخدم equals.",
      practice: [
        { t: 'mcq', q: "A linear search method returns <code>-1</code>. What does it mean?", options: ['The key is the last element', 'The key is not in the array', 'The array is sorted', 'The key is at index 0'], answer: 1, explain: "-1 is never a valid index, so it means &quot;not found&quot;." },
        { t: 'mcq', q: "Linear search must have a sorted array.", options: ['True', 'False'], answer: 1, explain: "Linear search works on any array." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] names = {"Ali", "Sara", "Nora"};
                  System.out.println(find(names, "Nora"));
                  System.out.println(find(names, "Omar"));
              }

              public static int find(String[] list, String key) {
                  for (int i = 0; i < list.length; i++) {
                      if (list[i].equals(key)) return i;
                  }
                  return -1;
              }
          }
        `, answer: J`
          2
          -1
        `, explain: "Nora is at index 2. Omar is not in the array." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {7, 3, 7, 9};
                  int count = 0;
                  for (int x : a) {
                      if (x == 7) count++;
                  }
                  System.out.println(count);
                  for (int i = 0; i < a.length; i++) {
                      if (a[i] == 7) {
                          System.out.println(i);
                          break;
                      }
                  }
              }
          }
        `, answer: J`
          2
          0
        `, explain: "7 appears twice. The loop with break prints only the first index, 0." },
        { t: 'fill', q: "Complete the search method.", code: J`
          public static int search(int[] list, int key) {
              for (int i = 0; i < list.length; i++) {
                  if (list[i] == ___) {
                      return ___;
                  }
              }
              return -1;
          }
        `, answers: ['key', 'i'], explain: "Compare the box with the key and return the index <code>i</code>." },
        { t: 'order', q: "Arrange the lines of a linear search over an array of names.", lines: [
          'public static int linearSearch(String[] names, String key) {',
          '    for (int i = 0; i < names.length; i++) {',
          '        if (names[i].equals(key)) {',
          '            return i;',
          '        }',
          '    }',
          '    return -1;',
          '}'
        ], explain: "<code>return -1</code> comes after the loop: only then we know every box was checked." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> integers, then a key. Print the index of the <b>first</b> box equal to the key, or <code>-1</code>. Write a method <code>linearSearch</code>. No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    int key = input.nextInt();
                    System.out.println(linearSearch(a, key));
                }

                public static int linearSearch(int[] list, int key) {
                    // your code
                    return -1;
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    int key = input.nextInt();
                    System.out.println(linearSearch(a, key));
                }

                public static int linearSearch(int[] list, int key) {
                    for (int i = 0; i < list.length; i++) {
                        if (list[i] == key) {
                            return i;
                        }
                    }
                    return -1;
                }
            }
          `,
          tests: [ { stdin: '5\n4 8 15 16 23\n15', expected: '2' }, { stdin: '4\n3 3 3 3\n3', expected: '0' }, { stdin: '3\n1 2 3\n99', expected: '-1' } ],
          hint: "Loop over the boxes; when list[i] == key return i; after the loop return -1.", explain: "This is exactly the linear search pattern." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 9
    {
      title: 'Binary search',
      titleAr: 'البحث الثنائي',
      minutes: 30,
      body: [
        { type: 'h', en: 'A faster way, if the array is sorted' },
        { type: 'p', en: "Linear search is slow for big arrays: with 1,000,000 boxes it may check all of them. If the array is <b>sorted</b>, we can be much cleverer. <b>Binary search</b> needs at most about 20 checks for a million boxes! But remember: it works <b>only on a sorted array</b>.",
          ar: "البحث الثنائي أسرع بكثير لكنه يتطلب مصفوفة مرتبة." },
        { type: 'analogy', title: 'The guessing game', en: "Think of the game &quot;I am thinking of a number from 1 to 100&quot;. You say 50. Your friend says &quot;higher&quot;. Now you know the number is between 51 and 100, so half of the numbers are gone with one question. You say 75, and so on. Also, in a dictionary you open the middle and decide: left or right?",
          ar: "مثل لعبة تخمين الرقم: كل سؤال يحذف نصف الاحتمالات." },
        { type: 'p', en: "The idea: look at the <b>middle</b> box.<br>• If it is the key, done.<br>• If the key is smaller, the key can only be in the <b>left half</b>.<br>• If the key is bigger, it can only be in the <b>right half</b>.<br>Repeat with the half that is left." },
        { type: 'p', en: "We keep two markers: <code>low</code> (the first box still possible) and <code>high</code> (the last box still possible). The middle is <code>mid = (low + high) / 2</code> (integer division)." },
        { type: 'code', code: J`
          int low = 0;
          int high = list.length - 1;
          while (low <= high) {
              int mid = (low + high) / 2;
              if (key < list[mid]) {
                  high = mid - 1;      // go left
              } else if (key == list[mid]) {
                  return mid;          // found
              } else {
                  low = mid + 1;       // go right
              }
          }
          return -1;                   // low passed high: not found
        ` },
        { type: 'lines', rows: [
          ['low = 0; high = list.length - 1', 'At the start, all boxes are possible.'],
          ['while (low <= high)', 'Continue while at least one box is still possible.'],
          ['mid = (low + high) / 2', 'The middle box of the range.'],
          ['high = mid - 1', 'The key is smaller: throw away <code>mid</code> and everything on its right.'],
          ['low = mid + 1', 'The key is bigger: throw away <code>mid</code> and everything on its left.'],
          ['return -1', 'The range became empty: the key is not there.']
        ], ar: "نحذف نصف النطاق في كل خطوة بتحريك low أو high." },
        { type: 'p', en: "Let us trace a search for <b>26</b> in a sorted array of 10 numbers." },
        { type: 'code', code: J`
          index:   0   1    2    3    4    5    6    7    8    9
                +---+---+----+----+----+----+----+----+----+----+
          list  | 3 | 8 | 12 | 17 | 21 | 26 | 30 | 35 | 41 | 48 |
                +---+---+----+----+----+----+----+----+----+----+
        ` },
        { type: 'table', head: ['Step', 'low', 'high', 'mid', 'list[mid]', 'Action (key = 26)'], rows: [
          ['1', '0', '9', '4', '21', '26 &gt; 21, go right: low = 5'],
          ['2', '5', '9', '7', '35', '26 &lt; 35, go left: high = 6'],
          ['3', '5', '6', '5', '26', 'found! return 5']
        ] },
        { type: 'check', q: "In step 2 the array range is boxes 5 to 9. Which is <code>mid</code>?", options: ['6', '7', '8', '5'], answer: 1, explain: "(5 + 9) / 2 = 7." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] list = {3, 8, 12, 17, 21, 26, 30, 35, 41, 48};
                  System.out.println(binarySearch(list, 26));
                  System.out.println(binarySearch(list, 9));
                  System.out.println(binarySearch(list, 48));
              }

              public static int binarySearch(int[] list, int key) {
                  int low = 0;
                  int high = list.length - 1;
                  while (low <= high) {
                      int mid = (low + high) / 2;
                      if (key < list[mid]) {
                          high = mid - 1;
                      } else if (key == list[mid]) {
                          return mid;
                      } else {
                          low = mid + 1;
                      }
                  }
                  return -1;
              }
          }
        `, out: J`
          5
          -1
          9
        ` },
        { type: 'note', kind: 'exam', en: "Binary search on an <b>unsorted</b> array can miss values that are really there. Sort first (for example with <code>Arrays.sort</code>). Also <code>(low + high) / 2</code> uses integer division, so the decimals are cut.",
          ar: "لا تستخدم{{g:|ي}} البحث الثنائي على مصفوفة غير مرتبة." },
        { type: 'check', q: "Why can binary search skip half of the array?", options: ['Because the array is sorted', 'Because Java is fast', 'Because the key is always in the middle', 'Because the array has even length'], answer: 0, explain: "In a sorted array, if the key is smaller than the middle, it cannot be on the right side." },
        { type: 'steps', title: 'Worked example: search a sorted list', problem: "Read n sorted numbers and a key. Print the index of the key (binary search) or -1.",
          steps: [
            { en: "Read and fill the array as before. Read the key.", code: J`
              int n = input.nextInt();
              int[] a = new int[n];
              for (int i = 0; i < n; i++) a[i] = input.nextInt();
              int key = input.nextInt();
            ` },
            { en: "Set the two markers.", code: J`
              int low = 0;
              int high = n - 1;
            ` },
            { en: "Loop while the range is not empty. Compute the middle and compare.", code: J`
              while (low <= high) {
                  int mid = (low + high) / 2;
            ` },
            { en: "Three cases: smaller, equal, bigger. Print and stop when found.", code: "if (key == a[mid]) { ... }  else if (key < a[mid]) high = mid - 1;  else low = mid + 1;" },
            { en: "If the loop ends without finding, print -1. Complete program (using a method):" }
          ],
          stdin: '7\n2 5 9 14 20 31 40\n20',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    int key = input.nextInt();
                    System.out.println(binarySearch(a, key));
                }

                public static int binarySearch(int[] list, int key) {
                    int low = 0;
                    int high = list.length - 1;
                    while (low <= high) {
                        int mid = (low + high) / 2;
                        if (key == list[mid]) {
                            return mid;
                        } else if (key < list[mid]) {
                            high = mid - 1;
                        } else {
                            low = mid + 1;
                        }
                    }
                    return -1;
                }
            }
          `, out: J`
            4
          ` }
      ],
      mistakes: [
        { title: 'Using it on an unsorted array', en: "The answer may be wrong. Sort first.", code: J`
          int[] a = {9, 2, 7};   // not sorted: binary search may fail
        ` },
        { title: 'high = mid instead of mid - 1', en: "The loop can run forever because the range does not get smaller.", code: J`
          high = mid;      // WRONG
          high = mid - 1;  // correct
        ` },
        { title: 'Using < instead of <= in the loop', en: "The last possible box is never checked.", code: J`
          while (low < high)    // WRONG
          while (low <= high)   // correct
        ` },
        { title: 'Swapping the two moves', en: "If the key is smaller, you must move <code>high</code> (left), not <code>low</code>.", code: J`
          if (key < list[mid]) low = mid + 1;   // WRONG direction
        ` }
      ],
      remember: [
        "Binary search needs a <b>sorted</b> array.",
        "Check the middle: <code>mid = (low + high) / 2</code>.",
        "Key smaller: <code>high = mid - 1</code>. Key bigger: <code>low = mid + 1</code>.",
        "Loop while <code>low &lt;= high</code>; return <code>-1</code> after the loop.",
        "Each step halves the range: 1000 boxes need only about 10 checks."
      ],
      rememberAr: "البحث الثنائي يتطلب مصفوفة مرتبة. نفحص العنصر الأوسط، فإن كان المفتاح أصغر ننقل high وإن كان أكبر ننقل low. كل خطوة تحذف نصف النطاق.",
      practice: [
        { t: 'mcq', q: "Binary search requires the array to be…", options: ['of type int', 'sorted', 'without duplicates', 'of even length'], answer: 1, explain: "Halving only works if smaller values are on the left and bigger on the right." },
        { t: 'mcq', q: "<code>low = 0</code>, <code>high = 8</code>. What is <code>mid</code>?", options: ['3', '4', '5', '8'], answer: 1, explain: "(0 + 8) / 2 = 4." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] list = {5, 9, 14, 20, 27, 33, 40};
                  int key = 33;
                  int low = 0, high = list.length - 1;
                  while (low <= high) {
                      int mid = (low + high) / 2;
                      System.out.println("mid = " + mid);
                      if (key == list[mid]) {
                          System.out.println("Found at " + mid);
                          break;
                      } else if (key < list[mid]) {
                          high = mid - 1;
                      } else {
                          low = mid + 1;
                      }
                  }
              }
          }
        `, answer: J`
          mid = 3
          mid = 5
          Found at 5
        `, explain: "low=0, high=6: mid=3 (value 20); 33 is bigger, so low=4. Then mid=(4+6)/2=5 (value 33): found." },
        { t: 'mcq', q: "Binary search for key 4 in <code>{1, 4, 9, 16, 25, 36, 49}</code>. Which elements are compared with the key, in order?", options: ['16, then 4', '1, then 4', '16, 9, then 4', '49, 36, 25, 16, 9, 4'], answer: 0, explain: "mid = 3 gives 16; 4 is smaller, so high = 2; mid = 1 gives 4: found." },
        { t: 'fill', q: "Complete the two moves.", code: J`
          if (key < list[mid]) {
              high = ___;
          } else {
              low = ___;
          }
        `, answers: ['mid - 1', 'mid + 1'], explain: "Throw away the middle box and the wrong half." },
        { t: 'mcq', q: "For a <b>sorted</b> array of 1,000 elements, the worst-case number of checks is about:", options: ['Linear: 1000, Binary: 10', 'Linear: 500, Binary: 500', 'Linear: 10, Binary: 1000', 'Both: 1000'], answer: 0, explain: "Binary search halves the range each time: 2 to the power 10 is 1024." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> numbers in <b>increasing order</b>, then a key. Use binary search to print the index of the key, or <code>-1</code>. No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    int key = input.nextInt();
                    int low = 0;
                    int high = n - 1;
                    // loop while low <= high ...
                    System.out.println(-1);
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    int key = input.nextInt();
                    int low = 0;
                    int high = n - 1;
                    int answer = -1;
                    while (low <= high) {
                        int mid = (low + high) / 2;
                        if (key == a[mid]) {
                            answer = mid;
                            break;
                        } else if (key < a[mid]) {
                            high = mid - 1;
                        } else {
                            low = mid + 1;
                        }
                    }
                    System.out.println(answer);
                }
            }
          `,
          tests: [ { stdin: '5\n2 4 6 8 10\n8', expected: '3' }, { stdin: '5\n2 4 6 8 10\n5', expected: '-1' }, { stdin: '1\n7\n7', expected: '0' } ],
          hint: "Keep an answer variable starting at -1. When key == a[mid], set answer = mid and break.", explain: "The same loop as in the lesson, but it prints the result." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 10
    {
      title: 'Selection sort',
      titleAr: 'الترتيب بالاختيار',
      minutes: 35,
      body: [
        { type: 'h', en: 'Putting values in order' },
        { type: 'p', en: "You can use <code>Arrays.sort</code>, but it is important to understand how sorting works. Sorting is used everywhere: a list of students by mark, products by price. Here is a simple way, called <b>selection sort</b>.",
          ar: "الترتيب بالاختيار: في كل جولة نختار أصغر عنصر ونضعه في مكانه." },
        { type: 'analogy', title: 'Lining up by height', en: "A teacher wants students to line up from the shortest to the tallest. She looks at the whole group and <i>selects</i> the shortest student, who goes to place 1. Then she looks at the rest and selects the shortest again for place 2. She repeats until everybody is in place.",
          ar: "المعلمة تختار الأقصر وتضعه أولًا، ثم الأقصر بين الباقين، وهكذا." },
        { type: 'h', en: 'First, learn to swap' },
        { type: 'p', en: "Sorting moves values around, so we need to <b>swap</b> two boxes. You cannot write <code>a = b; b = a;</code> because the first line destroys the old <code>a</code>. You need a helper box, called <code>temp</code>." },
        { type: 'analogy', title: 'Two glasses', en: "You want to swap the juice in two glasses. You need a third empty glass: pour A into the empty glass, pour B into A, then pour the third into B.",
          ar: "لتبديل محتوى كأسين نحتاج كأسًا ثالثًا فارغًا." },
        { type: 'code', code: J`
          int temp = a[i];
          a[i] = a[j];
          a[j] = temp;
        ` },
        { type: 'check', q: "<code>a = {5, 9}</code>. After the three swap lines with <code>i = 0, j = 1</code>, what is the array?", options: ['{5, 9}', '{9, 5}', '{9, 9}', '{5, 5}'], answer: 1, explain: "temp = 5; a[0] = 9; a[1] = 5." },
        { type: 'h', en: 'The selection sort idea' },
        { type: 'p', en: "For each position <code>i</code> from the left: find the smallest value in the part from <code>i</code> to the end, then swap it into box <code>i</code>. After pass <code>i</code>, boxes 0 to <code>i</code> are final." },
        { type: 'table', head: ['Pass', 'Smallest of the rest', 'Array after the pass'], rows: [
          ['start', '-', '[29, 10, 14, 37, 13]'],
          ['i = 0', '10 (index 1)', '[10, 29, 14, 37, 13]'],
          ['i = 1', '13 (index 4)', '[10, 13, 14, 37, 29]'],
          ['i = 2', '14 (index 2, already there)', '[10, 13, 14, 37, 29]'],
          ['i = 3', '29 (index 4)', '[10, 13, 14, 29, 37]']
        ] },
        { type: 'code', code: J`
          after i = 0:   [10] 29  14  37  13        10 is final
          after i = 1:   [10  13] 14  37  29        10 13 are final
          after i = 2:   [10  13  14] 37  29
          after i = 3:   [10  13  14  29  37]       done
        ` },
        { type: 'code', code: J`
          for (int i = 0; i < list.length - 1; i++) {
              int minIndex = i;
              for (int j = i + 1; j < list.length; j++) {
                  if (list[j] < list[minIndex]) {
                      minIndex = j;
                  }
              }
              int temp = list[i];
              list[i] = list[minIndex];
              list[minIndex] = temp;
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['for (int i = 0; i < list.length - 1; i++)', 'The outer loop: pass number <code>i</code>. The last box needs no pass because it is already in place.'],
          ['int minIndex = i;', 'Guess that the smallest is at <code>i</code>.'],
          ['for (int j = i + 1; ...)', 'The inner loop looks at all the boxes to the right of <code>i</code>.'],
          ['if (list[j] < list[minIndex]) minIndex = j;', 'Found a smaller one? Remember its position (like king of the hill).'],
          ['the three swap lines', 'Put the smallest into box <code>i</code>.']
        ], ar: "الحلقة الخارجية تحدد الموضع، والداخلية تبحث عن الأصغر في الباقي." },
        { type: 'check', q: "What does <code>minIndex</code> store?", options: ['The smallest value', 'The position of the smallest value so far', 'The size of the array', 'The number of swaps'], answer: 1, explain: "It stores a position (index), not the value itself." },
        { type: 'steps', title: 'Worked example: sort the marks', problem: "Sort {29, 10, 14, 37, 13} from the smallest to the largest with selection sort and print the result.",
          steps: [
            { en: "Write a method <code>selectionSort</code> that receives the array. It changes the array in place.", code: "public static void selectionSort(int[] list) {" },
            { en: "Outer loop: one pass for each position except the last.", code: "for (int i = 0; i < list.length - 1; i++) {" },
            { en: "Find the position of the smallest value from <code>i</code> to the end.", code: J`
              int minIndex = i;
              for (int j = i + 1; j < list.length; j++) {
                  if (list[j] < list[minIndex]) minIndex = j;
              }
            ` },
            { en: "Swap it into place with <code>temp</code>.", code: J`
              int temp = list[i];
              list[i] = list[minIndex];
              list[minIndex] = temp;
            ` },
            { en: "In <code>main</code>, call the method and print with <code>Arrays.toString</code>. Complete program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[] list = {29, 10, 14, 37, 13};
                    selectionSort(list);
                    System.out.println(Arrays.toString(list));
                }

                public static void selectionSort(int[] list) {
                    for (int i = 0; i < list.length - 1; i++) {
                        int minIndex = i;
                        for (int j = i + 1; j < list.length; j++) {
                            if (list[j] < list[minIndex]) {
                                minIndex = j;
                            }
                        }
                        int temp = list[i];
                        list[i] = list[minIndex];
                        list[minIndex] = temp;
                    }
                }
            }
          `, out: J`
            [10, 13, 14, 29, 37]
          `, ar: "التبديل يحتاج متغيرًا مؤقتًا temp." }
      ],
      mistakes: [
        { title: 'Swapping without temp', en: "The first line destroys the old value.", code: J`
          a[i] = a[j];
          a[j] = a[i];   // WRONG: both are now a[j]
        ` },
        { title: 'Starting the inner loop at 0', en: "The inner loop must look only at the unsorted part: start at <code>i + 1</code>.", code: J`
          for (int j = 0; j < list.length; j++)   // WRONG start
        ` },
        { title: 'Swapping values instead of positions', en: "Remember <code>minIndex</code> (position), not the value, or you cannot swap.", code: J`
          int min = list[j];   // you lose the position
        ` },
        { title: 'Outer loop runs one time too many', en: "<code>i &lt; list.length</code> is not wrong, but wastes a pass; <code>i &lt;= list.length</code> is wrong and crashes.", code: J`
          for (int i = 0; i <= list.length; i++)   // WRONG
        ` }
      ],
      remember: [
        "To swap you need a helper: <code>temp = a[i]; a[i] = a[j]; a[j] = temp;</code>.",
        "Selection sort: find the smallest of the rest, swap it to the front, repeat.",
        "The outer loop chooses the position; the inner loop finds the smallest.",
        "The inner loop starts at <code>i + 1</code>.",
        "The sorted part grows from the left."
      ],
      rememberAr: "التبديل يحتاج temp. الترتيب بالاختيار: نبحث عن أصغر عنصر في الجزء غير المرتب ونبدله مع الموضع i، والحلقة الداخلية تبدأ من i + 1.",
      practice: [
        { t: 'mcq', q: "What do you need to swap two boxes safely?", options: ['A temporary variable', 'Another array', 'Arrays.fill', 'Nothing'], answer: 0, explain: "Without temp, one value is lost." },
        { t: 'mcq', q: "Selection sort (ascending) is applied to <code>{8, 3, 6, 1, 7}</code>. What does the array look like after the <b>first</b> pass?", options: ['<code>{1, 3, 6, 8, 7}</code>', '<code>{3, 8, 6, 1, 7}</code>', '<code>{1, 8, 3, 6, 7}</code>', '<code>{3, 6, 1, 7, 8}</code>'], answer: 0, explain: "The smallest is 1 (index 3); it swaps with the value at index 0 (8)." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {4, 9, 2};
                  int temp = a[0];
                  a[0] = a[2];
                  a[2] = temp;
                  System.out.println(a[0] + " " + a[1] + " " + a[2]);
              }
          }
        `, answer: '2 9 4', explain: "Boxes 0 and 2 are swapped." },
        { t: 'output', q: "What is the output? (This is only the first pass.)", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] list = {8, 3, 6, 1, 7};
                  int minIndex = 0;
                  for (int j = 1; j < list.length; j++) {
                      if (list[j] < list[minIndex]) minIndex = j;
                  }
                  int temp = list[0];
                  list[0] = list[minIndex];
                  list[minIndex] = temp;
                  System.out.println(minIndex);
                  System.out.println(Arrays.toString(list));
              }
          }
        `, answer: J`
          3
          [1, 3, 6, 8, 7]
        `, explain: "The smallest, 1, is at index 3. After the swap the array is [1, 3, 6, 8, 7]." },
        { t: 'fill', q: "Complete the swap step of selection sort.", code: J`
          int temp = list[i];
          list[i] = ___;
          list[minIndex] = ___;
        `, answers: ['list[minIndex]', 'temp'], explain: "Save list[i] in temp, move the smallest into box i, then put the saved value where the smallest was." },
        { t: 'order', q: "Arrange the swap of <code>a[i]</code> and <code>a[j]</code>.", lines: [
          'int temp = a[i];',
          'a[i] = a[j];',
          'a[j] = temp;'
        ], explain: "Save first, then overwrite, then restore." },
        { t: 'code', q: "Read <code>n</code> and then <code>n</code> integers. Sort them with <b>your own selection sort</b> (do not use <code>Arrays.sort</code>) and print them separated by single spaces. No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    // selection sort here, then print
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    for (int i = 0; i < n - 1; i++) {
                        int minIndex = i;
                        for (int j = i + 1; j < n; j++) {
                            if (a[j] < a[minIndex]) minIndex = j;
                        }
                        int temp = a[i];
                        a[i] = a[minIndex];
                        a[minIndex] = temp;
                    }
                    for (int i = 0; i < n; i++) {
                        if (i > 0) System.out.print(" ");
                        System.out.print(a[i]);
                    }
                    System.out.println();
                }
            }
          `,
          tests: [ { stdin: '5\n29 10 14 37 13', expected: '10 13 14 29 37' }, { stdin: '3\n3 2 1', expected: '1 2 3' }, { stdin: '1\n4', expected: '4' } ],
          hint: "Outer loop i from 0 to n - 2; inner loop j from i + 1; remember minIndex; swap with temp.", explain: "The same three parts as in the lesson: minIndex search, then swap." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 11
    {
      title: 'Insertion sort',
      titleAr: 'الترتيب بالإدراج',
      minutes: 30,
      body: [
        { type: 'h', en: 'Sorting like playing cards' },
        { type: 'p', en: "There is another way to sort, called <b>insertion sort</b>. It is the way many people sort playing cards in their hand. It is a nice second example of how to think about arrays.",
          ar: "الترتيب بالإدراج: نأخذ عنصرًا جديدًا ونُدخله في مكانه الصحيح داخل الجزء المرتب." },
        { type: 'analogy', title: 'Cards in your hand', en: "You hold some cards that are already in order. You pick a new card. You slide the bigger cards one place to the right to make a gap, and you put the new card in the gap. Now one more card is in order. Repeat for each card.",
          ar: "نزيح الأوراق الأكبر إلى اليمين لنفتح فجوة ثم نضع الورقة الجديدة فيها." },
        { type: 'p', en: "The left part of the array is the &quot;hand&quot; (already sorted). We start with just box 0 (one card is always sorted). Then we take box 1, then box 2, and so on." },
        { type: 'table', head: ['Step', 'Card taken', 'What happens', 'Array after the step'], rows: [
          ['start', '-', 'box 0 is the sorted part', '[29, 10, 14, 37, 13]'],
          ['i = 1', '10', '29 moves right, 10 goes first', '[10, 29, 14, 37, 13]'],
          ['i = 2', '14', '29 moves right, 14 goes after 10', '[10, 14, 29, 37, 13]'],
          ['i = 3', '37', 'nothing is bigger: stays', '[10, 14, 29, 37, 13]'],
          ['i = 4', '13', '37, 29, 14 move right, 13 goes after 10', '[10, 13, 14, 29, 37]']
        ] },
        { type: 'code', code: J`
          for (int i = 1; i < list.length; i++) {
              int current = list[i];
              int k = i - 1;
              while (k >= 0 && list[k] > current) {
                  list[k + 1] = list[k];
                  k--;
              }
              list[k + 1] = current;
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['for (int i = 1; ...)', 'Take the cards one by one, starting from box 1.'],
          ['int current = list[i];', 'Hold the new card in your hand (save it, because its box will be overwritten).'],
          ['int k = i - 1;', '<code>k</code> looks at the sorted part, starting from its last box.'],
          ['while (k >= 0 && list[k] > current)', 'While there is a box to look at <b>and</b> it is bigger than the card:'],
          ['list[k + 1] = list[k]; k--;', 'Slide that bigger value one place right, then look one place left.'],
          ['list[k + 1] = current;', 'The gap is now at <code>k + 1</code>. Put the card there.']
        ], ar: "نزيح الأكبر لليمين ثم نضع current في الفجوة." },
        { type: 'check', q: "Why do we save <code>list[i]</code> in <code>current</code> first?", options: ['Because shifting values to the right will overwrite box i', 'To make the program shorter', 'Because arrays cannot be read twice', 'No reason'], answer: 0, explain: "The first shift writes into box i, so the original value must be saved." },
        { type: 'p', en: "Follow the last step (<b>i = 4</b>, card 13) in detail. The array is <code>[10, 14, 29, 37, 13]</code>:" },
        { type: 'table', head: ['k', 'list[k]', 'list[k] &gt; 13?', 'Action', 'Array'], rows: [
          ['3', '37', 'yes', 'list[4] = 37', '[10, 14, 29, 37, 37]'],
          ['2', '29', 'yes', 'list[3] = 29', '[10, 14, 29, 29, 37]'],
          ['1', '14', 'yes', 'list[2] = 14', '[10, 14, 14, 29, 37]'],
          ['0', '10', 'no', 'stop', 'insert at k + 1 = 1: [10, 13, 14, 29, 37]']
        ] },
        { type: 'steps', title: 'Worked example: insertion sort of marks', problem: "Sort {29, 10, 14, 37, 13} using insertion sort and print the result.",
          steps: [
            { en: "Method header; it sorts the array in place.", code: "public static void insertionSort(int[] list) {" },
            { en: "Take each card from box 1 and save it.", code: J`
              for (int i = 1; i < list.length; i++) {
                  int current = list[i];
                  int k = i - 1;
            ` },
            { en: "Shift the bigger values to the right.", code: J`
              while (k >= 0 && list[k] > current) {
                  list[k + 1] = list[k];
                  k--;
              }
            ` },
            { en: "Insert the card into the gap.", code: "list[k + 1] = current;" },
            { en: "Complete program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[] list = {29, 10, 14, 37, 13};
                    insertionSort(list);
                    System.out.println(Arrays.toString(list));
                }

                public static void insertionSort(int[] list) {
                    for (int i = 1; i < list.length; i++) {
                        int current = list[i];
                        int k = i - 1;
                        while (k >= 0 && list[k] > current) {
                            list[k + 1] = list[k];
                            k--;
                        }
                        list[k + 1] = current;
                    }
                }
            }
          `, out: J`
            [10, 13, 14, 29, 37]
          ` },
        { type: 'note', kind: 'tip', en: "Both sorts give the same result. Selection sort <i>chooses</i> the smallest and swaps. Insertion sort <i>slides</i> bigger values to make a gap. In real programs we use <code>Arrays.sort</code>.",
          ar: "الخوارزميتان تعطيان النتيجة نفسها بطريقتين مختلفتين." },
        { type: 'check', q: "Which sort slides bigger values to the right to make a gap?", options: ['Selection sort', 'Insertion sort', 'Binary search', 'Linear search'], answer: 1, explain: "That is insertion sort." }
      ],
      mistakes: [
        { title: 'Forgetting to save the current value', en: "It is overwritten by the first shift.", code: J`
          // no "int current = list[i];"
        ` },
        { title: 'Writing the condition in the wrong order', en: "Check <code>k &gt;= 0</code> first, otherwise <code>list[-1]</code> crashes.", code: J`
          while (list[k] > current && k >= 0)   // WRONG order
        ` },
        { title: 'Inserting at k instead of k + 1', en: "After the loop <code>k</code> is the box <i>before</i> the gap.", code: J`
          list[k] = current;       // WRONG
          list[k + 1] = current;   // correct
        ` },
        { title: 'Starting from 0', en: "The first card is already a sorted hand. Start at <code>i = 1</code>.", code: J`
          for (int i = 0; ...)   // k = -1 at first: wasteful and confusing
        ` }
      ],
      remember: [
        "Insertion sort keeps a sorted part on the left and grows it by one card each time.",
        "Save the new card in <code>current</code>.",
        "Shift bigger values right: <code>list[k + 1] = list[k]; k--;</code>.",
        "Insert at <code>list[k + 1]</code>.",
        "Check <code>k &gt;= 0</code> before <code>list[k]</code>."
      ],
      rememberAr: "الترتيب بالإدراج يحافظ على جزء مرتب على اليسار. نحفظ العنصر الجديد في current، نزيح الأكبر لليمين، ثم نضع current في list[k + 1].",
      practice: [
        { t: 'mcq', q: "Insertion sort starts the outer loop at…", options: ['0', '1', '2', 'list.length'], answer: 1, explain: "Box 0 alone is already sorted." },
        { t: 'mcq', q: "In insertion sort, what happens to values bigger than the new card?", options: ['They are deleted', 'They move one place to the right', 'They move to the end', 'They are swapped with the smallest'], answer: 1, explain: "They slide right to make a gap." },
        { t: 'output', q: "What is the output? (One insertion step.)", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] list = {10, 29, 14};
                  int current = list[2];
                  int k = 1;
                  while (k >= 0 && list[k] > current) {
                      list[k + 1] = list[k];
                      k--;
                  }
                  list[k + 1] = current;
                  System.out.println(Arrays.toString(list));
              }
          }
        `, answer: '[10, 14, 29]', explain: "29 is bigger than 14, so it moves right. 10 is not bigger, so 14 goes after 10." },
        { t: 'output', q: "What is the output?", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] list = {5, 3, 4};
                  for (int i = 1; i < list.length; i++) {
                      int current = list[i];
                      int k = i - 1;
                      while (k >= 0 && list[k] > current) {
                          list[k + 1] = list[k];
                          k--;
                      }
                      list[k + 1] = current;
                  }
                  System.out.println(Arrays.toString(list));
              }
          }
        `, answer: '[3, 4, 5]', explain: "i=1: [3, 5, 4]. i=2: 5 moves right, 4 goes in the gap: [3, 4, 5]." },
        { t: 'fill', q: "Complete the shifting loop.", code: J`
          while (k >= 0 && list[k] > ___) {
              list[k + 1] = ___;
              k--;
          }
        `, answers: ['current', 'list[k]'], explain: "Compare with the saved card, and copy the value at k one place to the right." },
        { t: 'order', q: "Arrange the lines inside the outer loop of insertion sort.", lines: [
          'int current = list[i];',
          'int k = i - 1;',
          'while (k >= 0 && list[k] > current) {',
          '    list[k + 1] = list[k];',
          '    k--;',
          '}',
          'list[k + 1] = current;'
        ], explain: "Save, set k, shift, then insert." },
        { t: 'code', q: "Read <code>n</code> and then <code>n</code> integers. Sort them from the <b>largest to the smallest</b> with insertion sort (hint: change one comparison) and print them separated by single spaces. No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    // insertion sort, biggest first, then print
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    for (int i = 1; i < n; i++) {
                        int current = a[i];
                        int k = i - 1;
                        while (k >= 0 && a[k] < current) {
                            a[k + 1] = a[k];
                            k--;
                        }
                        a[k + 1] = current;
                    }
                    for (int i = 0; i < n; i++) {
                        if (i > 0) System.out.print(" ");
                        System.out.print(a[i]);
                    }
                    System.out.println();
                }
            }
          `,
          tests: [ { stdin: '5\n3 9 1 7 5', expected: '9 7 5 3 1' }, { stdin: '3\n1 2 3', expected: '3 2 1' }, { stdin: '1\n8', expected: '8' } ],
          hint: "In the while condition, shift while the value at k is SMALLER than current (a[k] < current).", explain: "Reversing the comparison reverses the order of the result." }
      ]
    },
  ],
  quiz: [
    { t: 'mcq', q: "After <code>int[] a = new int[5];</code>, what is the value of <code>a[4]</code>?",
      options: ['0', 'null', 'undefined (garbage)', 'ArrayIndexOutOfBoundsException'], answer: 0,
      explain: "Elements of a new int array are 0 by default, and index 4 is the last valid index." },
    { t: 'mcq', q: "What is the index of the first element of an array?", options: ['0', '1', '-1', 'length'], answer: 0, explain: "Java counts from 0." },
    { t: 'output', q: "What is the output?", code: J`
      public class Main {
          public static void main(String[] args) {
              int[] a = {2, 4, 6, 8};
              for (int i = 1; i < a.length; i++) {
                  a[i] = a[i] + a[i - 1];
              }
              System.out.println(a[3]);
          }
      }
    `, answer: '20', explain: "The array becomes running totals: [2, 6, 12, 20]." },
    { t: 'mcq', q: "Which expression gives the last element of the array <code>values</code>?",
      options: ['<code>values[values.length]</code>', '<code>values[values.length - 1]</code>', '<code>values[length - 1]</code>', '<code>values.last()</code>'], answer: 1,
      explain: "Valid indexes are 0 to length - 1." },
    { t: 'output', q: "What is the output?", code: J`
      public class Main {
          public static void main(String[] args) {
              char[] letters = {'J', 'a', 'v', 'a'};
              String s = "";
              for (int i = letters.length - 1; i >= 0; i--) {
                  s += letters[i];
              }
              System.out.println(s);
          }
      }
    `, answer: 'avaJ', explain: "The loop reads the characters from the last index down to 0, building the reversed word." },
    { t: 'mcq', q: "What does <code>dest</code> contain after this code?", code: J`
      int[] src = {5, 6, 7, 8};
      int[] dest = new int[3];
      System.arraycopy(src, 1, dest, 0, 2);
    `, options: ['[5, 6, 0]', '[6, 7, 0]', '[0, 6, 7]', '[6, 7, 8]'], answer: 1,
      explain: "Two elements starting at src[1] (6 and 7) go into dest starting at index 0; dest[2] stays 0." },
    { t: 'output', q: "What is the output?", code: J`
      public class Main {
          public static void main(String[] args) {
              int[] counts = {1, 2, 3};
              int n = 3;
              update(counts, n);
              System.out.println(counts[0] + counts[2] + n);
          }

          public static void update(int[] arr, int k) {
              arr[0] = arr[0] * 10;
              k = k * 10;
          }
      }
    `, answer: '16', explain: "The array change is visible (counts[0] = 10) but n stays 3. 10 + 3 + 3 = 16." },
    { t: 'mcq', q: "In ascending selection sort, what happens in each pass of the outer loop?",
      options: ['Adjacent elements are swapped if they are out of order', 'The smallest remaining element is swapped into the next position', 'The next element is inserted into the sorted left part', 'The array is split into two halves'], answer: 1,
      explain: "Selection sort selects the minimum of the unsorted part." },
    { t: 'output', q: "What is the output?", code: J`
      import java.util.Arrays;

      public class Main {
          public static void main(String[] args) {
              int[] marks = {77, 64, 91, 64};
              int[] copy = Arrays.copyOf(marks, marks.length);
              Arrays.sort(copy);
              System.out.println(Arrays.toString(marks));
              System.out.println(Arrays.toString(copy));
          }
      }
    `, answer: J`
      [77, 64, 91, 64]
      [64, 64, 77, 91]
    `, explain: "<code>Arrays.copyOf</code> creates a separate array, so sorting the copy leaves <code>marks</code> unchanged." },
    { t: 'mcq', q: "Binary search needs the array to be…", options: ['Sorted', 'Of even length', 'Full of positive numbers', 'Copied first'], answer: 0, explain: "Only a sorted array can be halved." }
  ],
  lab: {
    t: 'code',
    q: "<b>Class grade report.</b> Read an integer <code>n</code>, then <code>n</code> integer scores. Print exactly these five lines (no prompts):<br><code>Scores: [...]</code> — the scores in the original order (use <code>Arrays.toString</code>)<br><code>Sorted: [...]</code> — the scores in ascending order (sort a <b>copy</b>)<br><code>Average: X.XX</code> — two decimals with <code>printf</code><br><code>Above average: K</code> — how many scores are strictly greater than the average<br><code>Highest: H at index I</code> — the highest score and the index of its first occurrence in the <b>original</b> array.<br><b>Plan:</b> 1) read the scores into an array; 2) copy and sort; 3) one loop for the sum; 4) a loop to count above average; 5) a loop for the highest.",
    qAr: "برنامج تقرير درجات: اطبع الدرجات الأصلية، ثم نسخة مرتبة، ثم المتوسط، وعدد من فوق المتوسط، وأعلى درجة وموقعها.",
    starter: J`
      import java.util.Scanner;
      import java.util.Arrays;

      public class Main {
          public static void main(String[] args) {
              Scanner input = new Scanner(System.in);
              int n = input.nextInt();
              int[] scores = new int[n];
              // 1) read the scores
              // 2) print original and sorted copy
              // 3) average, count above average, highest and its index
          }
      }
    `,
    solution: J`
      import java.util.Scanner;
      import java.util.Arrays;

      public class Main {
          public static void main(String[] args) {
              Scanner input = new Scanner(System.in);
              int n = input.nextInt();
              int[] scores = new int[n];
              for (int i = 0; i < n; i++) {
                  scores[i] = input.nextInt();
              }

              int[] sorted = Arrays.copyOf(scores, n);
              Arrays.sort(sorted);
              System.out.println("Scores: " + Arrays.toString(scores));
              System.out.println("Sorted: " + Arrays.toString(sorted));

              int sum = 0;
              for (int s : scores) {
                  sum += s;
              }
              double average = (double) sum / n;
              System.out.printf("Average: %.2f%n", average);

              int above = 0;
              for (int s : scores) {
                  if (s > average) above++;
              }
              System.out.println("Above average: " + above);

              int maxIndex = 0;
              for (int i = 1; i < n; i++) {
                  if (scores[i] > scores[maxIndex]) maxIndex = i;
              }
              System.out.println("Highest: " + scores[maxIndex] + " at index " + maxIndex);
          }
      }
    `,
    tests: [
      { stdin: '5\n70 85 90 60 95', expected: 'Scores: [70, 85, 90, 60, 95]\nSorted: [60, 70, 85, 90, 95]\nAverage: 80.00\nAbove average: 3\nHighest: 95 at index 4' },
      { stdin: '4\n50 50 75 100', expected: 'Scores: [50, 50, 75, 100]\nSorted: [50, 50, 75, 100]\nAverage: 68.75\nAbove average: 2\nHighest: 100 at index 3' },
      { stdin: '3\n88 92 79', expected: 'Scores: [88, 92, 79]\nSorted: [79, 88, 92]\nAverage: 86.33\nAbove average: 2\nHighest: 92 at index 1' }
    ],
    hint: "Sort a copy made with Arrays.copyOf so the original order (and the index of the highest score) is kept. Use (double) sum / n for the average.",
    explain: "Keeping the original array untouched while sorting a copy is a very common pattern."
  },
  cheats: [
    { code: J`int[] a = new int[5];`, note: 'Create an array of 5 ints (all 0)' },
    { code: J`double[] p = {1.5, 2.0, 3.25};`, note: 'Braces shortcut: declare, create and fill' },
    { code: J`a.length`, note: 'Number of elements (no brackets)' },
    { code: J`a[a.length - 1]`, note: 'Last element' },
    { code: J`for (int i = 0; i < a.length; i++) { ... a[i] ... }`, note: 'Indexed loop: read or change elements' },
    { code: J`for (int x : a) { ... }`, note: 'for-each loop: read only' },
    { code: J`System.arraycopy(src, 0, dest, 0, src.length);`, note: 'Copy values into an existing array' },
    { code: J`int[] b = Arrays.copyOf(a, a.length);`, note: 'New independent copy (b = a only copies the address)' },
    { code: J`public static int[] reverse(int[] list)`, note: 'Method that takes and returns an array' },
    { code: J`Arrays.toString(a)  Arrays.sort(a)  Arrays.fill(a, v)`, note: 'Print, sort, fill (import java.util.Arrays)' },
    { code: J`int mid = (low + high) / 2;`, note: 'Binary search middle (sorted arrays only)' },
    { code: J`int t = a[i]; a[i] = a[j]; a[j] = t;`, note: 'Swap two elements' }
  ],
  glossary: [
    { term: 'Array', ar: 'مصفوفة', def: 'A fixed-size, ordered collection of values of the same type, reached by index.' },
    { term: 'Element', ar: 'عنصر', def: 'One value (one box) in an array.' },
    { term: 'Index', ar: 'فهرس', def: 'The number of a box; starts at 0 and ends at length - 1.' },
    { term: 'Length', ar: 'الطول', def: 'The number of boxes in an array: a.length.' },
    { term: 'Default value', ar: 'القيمة الافتراضية', def: 'The value a new box gets automatically: 0, 0.0, false or null.' },
    { term: 'Exception', ar: 'استثناء', def: 'An error that happens while the program is running.' },
    { term: 'ArrayIndexOutOfBoundsException', ar: 'استثناء تجاوز حدود المصفوفة', def: 'Run-time error when an index is negative or not less than length.' },
    { term: 'for-each loop', ar: 'حلقة for المحسّنة', def: 'A loop that visits each element in order without an index.' },
    { term: 'Reference (address)', ar: 'مرجع', def: 'Where an array lives in memory; an array variable holds this, not the boxes.' },
    { term: 'Trace', ar: 'تتبع', def: 'Following a program step by step on paper, writing the values of variables.' },
    { term: 'Key', ar: 'مفتاح البحث', def: 'The value we look for in a search.' },
    { term: 'Linear search', ar: 'البحث الخطي', def: 'Checks elements one by one until the key is found or the array ends.' },
    { term: 'Binary search', ar: 'البحث الثنائي', def: 'Searches a sorted array by repeatedly halving the search range.' },
    { term: 'Swap', ar: 'تبديل', def: 'Exchange two values, using a temporary variable.' },
    { term: 'Selection sort', ar: 'الترتيب بالاختيار', def: 'Repeatedly selects the smallest remaining element and swaps it into place.' },
    { term: 'Insertion sort', ar: 'الترتيب بالإدراج', def: 'Builds a sorted part by inserting each new element into its correct place.' }
  ]
});
