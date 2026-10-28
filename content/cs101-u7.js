JP.unit({
  course: 'cs101',
  n: 7,
  title: 'Arrays',
  titleAr: 'المصفوفات',
  intro: "An array stores many values of the same type under one name, so a program can handle 30 grades or 1,000 prices with a single loop instead of 1,000 variables. In this unit you will create and initialize one-dimensional arrays, process them with loops, copy them correctly, pass them to and return them from methods, and implement the classic searching (linear, binary) and sorting (selection, insertion) algorithms.",
  introAr: "المصفوفة تخزّن قيمًا كثيرة من النوع نفسه تحت اسم واحد، فنعالج 30 درجة أو 1000 سعر بحلقة واحدة. ستتعلم إنشاء المصفوفات وتهيئتها ومعالجتها بالحلقات ونسخها وتمريرها للدوال، ثم خوارزميات البحث والترتيب الأساسية.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'Creating arrays, indexes and length',
      titleAr: 'إنشاء المصفوفات والفهارس والطول',
      minutes: 45,
      body: [
        { type: 'h', en: 'What is an array?' },
        { type: 'p', en: "An <b>array</b> is a fixed-size, ordered collection of values that all have the same type. Each value is called an <b>element</b>, and each element is reached by its position, called the <b>index</b>. Instead of declaring <code>score1</code>, <code>score2</code>, … <code>score30</code>, you declare one array <code>scores</code> that holds all 30.",
          ar: "المصفوفة مجموعة مرتبة ثابتة الحجم من قيم لها النوع نفسه، ونصل إلى كل عنصر برقمه (الفهرس)." },
        { type: 'h', en: 'Declaring and creating an array' },
        { type: 'p', en: "Creating an array takes two steps: <b>declare</b> a reference variable (<code>elementType[] name;</code>) and <b>create</b> the array with <code>new elementType[size]</code>. You can do both in one statement. Once created, the size cannot change." },
        { type: 'code', code: J`
          double[] prices;              // 1) declare a reference variable
          prices = new double[5];       // 2) create an array of 5 doubles

          int[] scores = new int[30];   // declare and create in one step
          String[] names = new String[4];
          char[] grades = new char[10];
        ` },
        { type: 'p', en: "When an array is created with <code>new</code>, every element gets a <b>default value</b> automatically:" },
        { type: 'table', head: ['Element type', 'Default value'], rows: [
          ['<code>int</code>, <code>long</code>, <code>short</code>, <code>byte</code>', '<code>0</code>'],
          ['<code>double</code>, <code>float</code>', '<code>0.0</code>'],
          ['<code>boolean</code>', '<code>false</code>'],
          ['<code>char</code>', "<code>'\\u0000'</code> (the null character)"],
          ['<code>String</code> and other objects', '<code>null</code>']
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
        { type: 'h', en: 'Array initializers' },
        { type: 'p', en: "If you already know the values, an <b>array initializer</b> declares, creates and fills the array in one statement: <code>int[] temps = {31, 35, 29, 40, 38};</code>. The size is the number of values listed.",
          ar: "المُهيِّئ { ... } ينشئ المصفوفة ويملؤها في جملة واحدة، وحجمها هو عدد القيم." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] temps = {31, 35, 29, 40, 38};
                  System.out.println("Days recorded: " + temps.length);
                  System.out.println("First day: " + temps[0]);
                  System.out.println("Last day: " + temps[temps.length - 1]);
                  temps[2] = 30;
                  System.out.println("Day 3 corrected: " + temps[2]);
              }
          }
        `, out: J`
          Days recorded: 5
          First day: 31
          Last day: 38
          Day 3 corrected: 30
        ` },
        { type: 'note', kind: 'exam', en: "An initializer is allowed <b>only</b> in the declaration statement. <code>int[] a; a = {1, 2, 3};</code> is a compile error. Write <code>a = new int[]{1, 2, 3};</code> instead.",
          ar: "لا يُسمح بالمهيئ { } إلا في جملة التعريف نفسها." },
        { type: 'h', en: 'Indexes and the length field' },
        { type: 'p', en: "Indexes start at <b>0</b>. An array of size <code>n</code> has valid indexes <code>0</code> to <code>n - 1</code>. The size is stored in the field <code>arrayName.length</code> — note there are <b>no parentheses</b>, unlike <code>String</code>'s <code>length()</code> method. The last element is always <code>a[a.length - 1]</code>." },
        { type: 'h', en: 'ArrayIndexOutOfBoundsException' },
        { type: 'p', en: "Java checks every index at run time. Using an index below 0 or greater than or equal to <code>length</code> compiles fine but crashes the program with an <code>ArrayIndexOutOfBoundsException</code>." },
        { type: 'code', code: J`
          int[] marks = {90, 75, 88};
          System.out.println(marks[2]);   // OK: 88
          System.out.println(marks[3]);   // run-time error: index 3, length 3
          // Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException ...
        ` },
        { type: 'note', kind: 'warn', en: "The most common cause is a loop written as <code>i &lt;= a.length</code>. The correct condition is <code>i &lt; a.length</code> (an <i>off-by-one</i> error).",
          ar: "استخدم i &lt; a.length وليس i &lt;= a.length لتجنب الخروج عن حدود المصفوفة." },
        { type: 'list', items: [
          "Declare: <code>type[] name;</code> — create: <code>new type[size]</code>.",
          "Initializer: <code>type[] name = {v1, v2, ...};</code>",
          "Valid indexes: <code>0</code> … <code>length - 1</code>.",
          "<code>length</code> is a field: <code>a.length</code>, not <code>a.length()</code>."
        ] }
      ],
      practice: [
        { t: 'mcq', q: "Given <code>int[] a = new int[10];</code>, which indexes are valid?",
          options: ['0 to 10', '1 to 10', '0 to 9', '1 to 9'], answer: 2,
          explain: "An array of size 10 has indexes 0 through 9 (size − 1).",
          explainAr: "الفهارس تبدأ من 0 وتنتهي عند الحجم ناقص واحد." },
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
        `, explain: "prices[0] keeps its default value 0.0, prices[3] = 2.5 * 2 = 5.0, and the array was created with 4 elements." },
        { t: 'fill', q: "Complete the code that creates an array for the seven days of the week and prints its size.", code: J`
          String[] days = ___ String[7];
          days[0] = "Sunday";
          System.out.println("Number of days: " + days.___);
        `, answers: ['new', 'length'],
          explain: "Arrays are created with <code>new</code>, and their size is read from the <code>length</code> field (no parentheses)." },
        { t: 'mcq', q: "Which statement causes a <b>compile error</b>?",
          options: ['<code>int[] a = {1, 2, 3};</code>', '<code>int[] a = new int[]{1, 2, 3};</code>', '<code>int[] a; a = {1, 2, 3};</code>', '<code>int a[] = new int[3];</code>'],
          answer: 2,
          explain: "The short initializer <code>{...}</code> may appear only in a declaration. <code>int a[]</code> is legal (C-style) although <code>int[] a</code> is preferred." },
        { t: 'mcq', q: "What happens when this code runs?", code: J`
          int[] n = {4, 5, 6};
          System.out.println(n[n.length]);
        `, options: ['It prints 6', 'It prints 0', 'Compile error', 'ArrayIndexOutOfBoundsException at run time'], answer: 3,
          explain: "<code>n.length</code> is 3, and index 3 does not exist (valid: 0–2). The compiler does not check index values, so the error happens at run time." },
        { t: 'order', q: "Arrange the lines into a program that prints <code>80</code>.", lines: [
          'public class Main {',
          '    public static void main(String[] args) {',
          '        int[] scores = new int[3];',
          '        scores[0] = 70;',
          '        scores[1] = scores[0] + 10;',
          '        System.out.println(scores[1]);',
          '    }',
          '}'
        ], explain: "The array must be created before use, and <code>scores[0]</code> must be set before <code>scores[1]</code> is computed from it." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Processing and copying arrays',
      titleAr: 'معالجة المصفوفات ونسخها',
      minutes: 50,
      body: [
        { type: 'h', en: 'Looping over an array' },
        { type: 'p', en: "Because indexes run from 0 to <code>length - 1</code>, a <code>for</code> loop with <code>i &lt; a.length</code> visits every element. This one pattern gives you sum, average, maximum and minimum.",
          ar: "حلقة for من 0 إلى أقل من length تمر على كل العناصر." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] scores = {72, 95, 60, 88, 85};
                  int sum = 0;
                  int max = scores[0];
                  int min = scores[0];
                  for (int i = 0; i < scores.length; i++) {
                      sum += scores[i];
                      if (scores[i] > max) max = scores[i];
                      if (scores[i] < min) min = scores[i];
                  }
                  double average = (double) sum / scores.length;
                  System.out.println("Sum: " + sum);
                  System.out.println("Average: " + average);
                  System.out.println("Max: " + max + ", Min: " + min);
              }
          }
        `, out: J`
          Sum: 400
          Average: 80.0
          Max: 95, Min: 60
        ` },
        { type: 'note', kind: 'tip', en: "Start <code>max</code> and <code>min</code> at the first element, not at 0. If all values were negative, starting <code>max</code> at 0 would give a wrong answer." },
        { type: 'h', en: 'Reading values into an array' },
        { type: 'p', en: "A common pattern: read the count <code>n</code>, create an array of size <code>n</code>, then fill it in a loop. After that you can process the data as many times as you like — for example, print it in reverse." },
        { type: 'code', run: true, stdin: '4\n30.5 28 33.25 31', code: J`
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
        ` },
        { type: 'h', en: 'The for-each loop' },
        { type: 'p', en: "The <b>for-each</b> (enhanced for) loop reads every element in order without an index: <code>for (type x : array)</code>. Read it as “for each <code>x</code> in <code>array</code>”." },
        { type: 'code', code: J`
          String[] cities = {"Riyadh", "Jeddah", "Dammam"};
          for (String city : cities) {
              System.out.println(city);
          }
        ` },
        { type: 'note', kind: 'warn', en: "Use for-each only to <b>read</b> elements. The loop variable is a copy, so <code>x = x * 2;</code> does not change the array, and you cannot know the index. To modify elements or to work with positions, use an indexed <code>for</code> loop.",
          ar: "حلقة for-each للقراءة فقط؛ تغيير متغير الحلقة لا يغيّر المصفوفة." },
        { type: 'h', en: 'Counting and remembering positions' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  double[] grades = {55.5, 90.0, 47.0, 73.5, 60.0};
                  int passCount = 0;
                  int maxIndex = 0;
                  for (int i = 0; i < grades.length; i++) {
                      if (grades[i] >= 60) passCount++;
                      if (grades[i] > grades[maxIndex]) maxIndex = i;
                  }
                  System.out.println("Passed: " + passCount);
                  System.out.println("Top grade " + grades[maxIndex] + " at index " + maxIndex);
              }
          }
        `, out: J`
          Passed: 3
          Top grade 90.0 at index 1
        ` },
        { type: 'h', en: 'Copying arrays' },
        { type: 'p', en: "An array variable holds a <b>reference</b> (the address of the array), not the elements. So <code>b = a;</code> does <b>not</b> copy anything: both names now refer to the same array, and a change through one is seen through the other. To get a real copy, create a new array and copy the elements — with a loop or with <code>System.arraycopy(src, srcPos, dest, destPos, count)</code>.",
          ar: "الإسناد b = a لا ينسخ المصفوفة، بل يجعل المتغيرين يشيران إلى المصفوفة نفسها." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] original = {1, 2, 3};
                  int[] alias = original;          // NOT a copy
                  alias[0] = 99;
                  System.out.println(original[0]);

                  int[] copy = new int[original.length];
                  for (int i = 0; i < original.length; i++) {
                      copy[i] = original[i];       // element-by-element copy
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
        { type: 'p', en: "<code>System.arraycopy(original, 0, copy2, 1, 3)</code> copies 3 elements starting at <code>original[0]</code> into <code>copy2</code> starting at index 1. Notice that <code>original</code> is now <code>{99, 2, 3}</code> — the change made through <code>alias</code> is real — and that <code>copy2[0]</code> and <code>copy2[4]</code> keep their default 0. The destination array must already exist and be large enough. <code>java.util.Arrays.copyOf(a, a.length)</code> is another short way to get a full copy." },
        { type: 'note', kind: 'exam', en: "After <code>b = a</code>, the old array that <code>b</code> referred to (if any) is lost and becomes garbage. Also, <code>a == b</code> compares <b>references</b>, not contents: two different arrays with equal elements are not <code>==</code>." }
      ],
      practice: [
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
        `, answer: '15',
          explain: "Only the odd values 3, 5 and 7 are added: 3 + 5 + 7 = 15." },
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
        `, answer: '3 5',
          explain: "<code>b = a</code> shares the first array, so <code>b[2] = 5</code> changes it. Then <code>a</code> is pointed at a brand-new array, while <code>b</code> still refers to the old one. So <code>a[2]</code> is 3 and <code>b[2]</code> is 5.",
          explainAr: "b ما زال يشير إلى المصفوفة القديمة بعد أن أصبح a يشير إلى مصفوفة جديدة." },
        { t: 'fill', q: "Complete the call so that <b>all</b> of <code>src</code> is copied into <code>dest</code>.", code: J`
          double[] src = {1.5, 2.5, 3.5};
          double[] dest = new double[src.length];
          System.arraycopy(src, ___, dest, ___, src.length);
        `, answers: ['0', '0'],
          explain: "Copy from index 0 of the source into index 0 of the destination, <code>src.length</code> elements." },
        { t: 'mcq', q: "What is the effect of this loop on the array <code>a</code>?", code: J`
          int[] a = {1, 2, 3};
          for (int x : a) {
              x = x * 2;
          }
        `, options: ['Every element is doubled', 'Compile error', 'The array is unchanged', 'Run-time error'], answer: 2,
          explain: "<code>x</code> is a copy of each element; changing it does not change the array. Use <code>for (int i = 0; i &lt; a.length; i++) a[i] *= 2;</code> instead." },
        { t: 'mcq', q: "What does this print?", code: J`
          int[] a = {1, 2, 3};
          int[] b = {1, 2, 3};
          System.out.println(a == b);
        `, options: ['true', 'false', 'Compile error', '1 2 3'], answer: 1,
          explain: "<code>==</code> compares references. <code>a</code> and <code>b</code> are two different array objects, even though their contents are equal." },
        { t: 'code', q: "Read an integer <code>n</code>, then <code>n</code> integers into an array. Print the largest value and how many times it appears, in the form <code>Max: M, Count: C</code>. Do not print any prompts.",
          qAr: "اقرأ n ثم n عددًا صحيحًا، واطبع أكبر قيمة وعدد مرات ظهورها.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    // create the array and read n values
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
          hint: "Use two passes: the first finds the maximum (start from values[0]), the second counts elements equal to it.",
          explain: "Storing the values in an array lets you go over the data twice — once to find the maximum and once to count it." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Arrays and methods; the Arrays class',
      titleAr: 'المصفوفات والدوال؛ الصنف Arrays',
      minutes: 50,
      body: [
        { type: 'h', en: 'Passing an array to a method' },
        { type: 'p', en: "A method parameter can be an array: <code>public static double sum(double[] list)</code>. When you call <code>sum(prices)</code>, Java passes a copy of the <b>reference</b>, so the method works on the very same array. If the method changes elements, the caller sees the changes.",
          ar: "عند تمرير مصفوفة إلى دالة يُمرَّر المرجع، فتغيير العناصر داخل الدالة يظهر عند المستدعي." },
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
        { type: 'p', en: "Compare this with a primitive parameter: the method receives a copy of the <b>value</b>, so changing the parameter has no effect on the caller's variable." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int x = 1;
                  int[] y = {1, 1};
                  change(x, y);
                  System.out.println("x = " + x + ", y[0] = " + y[0]);
              }

              public static void change(int number, int[] numbers) {
                  number = 100;       // changes only the local copy
                  numbers[0] = 100;   // changes the shared array
              }
          }
        `, out: J`
          x = 1, y[0] = 100
        ` },
        { type: 'note', kind: 'exam', en: "Java is always <b>pass-by-value</b>. For an array, the value passed is the reference. So the method can change the <i>elements</i>, but if it assigns a new array to the parameter (<code>numbers = new int[5];</code>), the caller's variable is not affected.",
          ar: "جافا تمرّر بالقيمة دائمًا؛ وقيمة متغير المصفوفة هي المرجع." },
        { type: 'h', en: 'Returning an array from a method' },
        { type: 'p', en: "A method can build a new array and return it. The return type is written with brackets, e.g. <code>public static int[] reverse(int[] list)</code>." },
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
        { type: 'p', en: "You can also pass an <b>anonymous array</b> directly: <code>printArray(new double[]{1.5, 2.0, 3.5});</code>." },
        { type: 'h', en: 'The java.util.Arrays class' },
        { type: 'p', en: "The <code>java.util.Arrays</code> class provides ready-made static methods for common array tasks. Import it with <code>import java.util.Arrays;</code>." },
        { type: 'table', head: ['Method', 'What it does'], rows: [
          ['<code>Arrays.toString(a)</code>', 'Returns a string like <code>[3, 1, 2]</code>'],
          ['<code>Arrays.sort(a)</code>', 'Sorts the array in ascending order (numbers, chars, Strings)'],
          ['<code>Arrays.fill(a, v)</code>', 'Sets every element to <code>v</code>'],
          ['<code>Arrays.copyOf(a, n)</code>', 'Returns a new array with the first <code>n</code> elements'],
          ['<code>Arrays.equals(a, b)</code>', 'true if both arrays have the same elements in the same order'],
          ['<code>Arrays.binarySearch(a, key)</code>', 'Searches a <b>sorted</b> array; index, or a negative number if not found']
        ] },
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

                  int[] seats = new int[4];
                  Arrays.fill(seats, 7);
                  System.out.println(Arrays.toString(seats));
              }
          }
        `, out: J`
          [21, 18, 25, 19, 30]
          [18, 19, 21, 25, 30]
          [Ali, Fahad, Nora, Sara]
          [7, 7, 7, 7]
        ` },
        { type: 'note', kind: 'warn', en: "<code>System.out.println(ages);</code> does not print the elements — it prints something like <code>[I@1b6d3586</code> (type code and hash). Use <code>Arrays.toString(ages)</code> or a loop.",
          ar: "طباعة المصفوفة مباشرة لا تعرض عناصرها؛ استخدم Arrays.toString." },
        { type: 'note', kind: 'tip', en: "To compare contents use <code>Arrays.equals(a, b)</code>; <code>a == b</code> only tells you whether both names refer to the same array." }
      ],
      practice: [
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
        `, answer: '5 10 12',
          explain: "The loop changes the shared array (0 becomes 10). The last line only points the local parameter <code>items</code> at a new array; <code>stock</code> in main is unaffected." },
        { t: 'mcq', q: "Which is a correct header for a method that returns an array of doubles?",
          options: ['<code>public static double getMarks()</code>', '<code>public static double[] getMarks()</code>', '<code>public static []double getMarks()</code>', '<code>public static double getMarks[]()</code>'],
          answer: 1, explain: "The return type of an array is written <code>double[]</code>." },
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
        `, explain: "After sorting, t is [-1.0, 2.0, 3.5]. Then t[0] + t[2] = -1.0 + 3.5 = 2.5 (numeric addition, because both are doubles)." },
        { t: 'fill', q: "Complete the method that counts how many elements equal <code>target</code>.", code: J`
          public static int countOf(int[] list, int target) {
              int count = 0;
              for (int ___ : list) {
                  if (value == target) count++;
              }
              ___ count;
          }
        `, answers: ['value', 'return'],
          explain: "The for-each variable must be named <code>value</code> because the body uses it, and the method must <code>return</code> the count." },
        { t: 'mcq', q: "What does this print?", code: J`
          int[] a = {1, 2};
          int[] b = {1, 2};
          System.out.println(Arrays.equals(a, b) + " " + (a == b));
        `, options: ['true true', 'true false', 'false true', 'false false'], answer: 1,
          explain: "<code>Arrays.equals</code> compares contents (equal), while <code>==</code> compares references (two different arrays)." },
        { t: 'code', q: "Read <code>n</code> and then <code>n</code> integers. Write a method <code>public static int[] getEvens(int[] list)</code> that returns a <b>new</b> array containing only the even numbers, in their original order. Print the result with <code>Arrays.toString</code>. No prompts.",
          qAr: "اكتب دالة تُرجع مصفوفة جديدة فيها الأعداد الزوجية فقط.",
          starter: J`
            import java.util.Scanner;
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    // read n and the numbers, then print Arrays.toString(getEvens(numbers))
                }

                public static int[] getEvens(int[] list) {
                    // count the evens, create the result array, fill it, return it
                    return null;
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
                    int[] numbers = new int[n];
                    for (int i = 0; i < n; i++) {
                        numbers[i] = input.nextInt();
                    }
                    System.out.println(Arrays.toString(getEvens(numbers)));
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
          tests: [
            { stdin: '6\n3 8 10 7 2 5', expected: '[8, 10, 2]' },
            { stdin: '3\n1 3 5', expected: '[]' },
            { stdin: '4\n0 -4 6 9', expected: '[0, -4, 6]' }
          ],
          hint: "An array's size is fixed, so first count the even numbers, then create the result array with exactly that size.",
          explain: "Counting first lets you create an array of the exact size; a second index <code>k</code> tracks the next free position in the result." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'Searching and sorting',
      titleAr: 'البحث والترتيب',
      minutes: 55,
      body: [
        { type: 'h', en: 'Linear search' },
        { type: 'p', en: "<b>Linear search</b> compares the key with each element in turn, from the first to the last. It returns the index of the first match, or <code>-1</code> if the key is not in the array. It works on any array, sorted or not.",
          ar: "البحث الخطي يقارن المفتاح بكل عنصر بالترتيب، ويرجع الفهرس أو ‎-1 إن لم يجده." },
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
        { type: 'p', en: "In the worst case (key at the end or missing), linear search checks all <i>n</i> elements." },
        { type: 'h', en: 'Binary search' },
        { type: 'p', en: "<b>Binary search</b> works only on a <b>sorted</b> array. It compares the key with the middle element: if equal, done; if the key is smaller, search the left half; otherwise search the right half. Each step halves the range, so a sorted array of 1,000 elements needs at most about 10 steps.",
          ar: "البحث الثنائي يتطلب مصفوفة مرتبة، ويقسم نطاق البحث إلى النصف في كل خطوة." },
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
        { type: 'table', head: ['Step', 'low', 'high', 'mid', 'list[mid]', 'Action (key = 26)'], rows: [
          ['1', '0', '9', '4', '21', '26 &gt; 21 → low = 5'],
          ['2', '5', '9', '7', '35', '26 &lt; 35 → high = 6'],
          ['3', '5', '6', '5', '26', 'found → return 5']
        ] },
        { type: 'note', kind: 'exam', en: "Binary search on an <b>unsorted</b> array can miss elements that are present. Sort first (e.g. <code>Arrays.sort</code>). Also remember: <code>mid = (low + high) / 2</code> uses integer division." },
        { type: 'h', en: 'Selection sort' },
        { type: 'p', en: "<b>Selection sort</b> repeatedly <i>selects</i> the smallest remaining element and swaps it into place. Pass <code>i</code> finds the minimum of <code>list[i..end]</code> and swaps it with <code>list[i]</code>. After pass <code>i</code>, the first <code>i + 1</code> elements are in their final positions.",
          ar: "الترتيب بالاختيار: في كل جولة نختار أصغر عنصر متبقٍّ ونبدّله مع أول موضع غير مرتب." },
        { type: 'table', head: ['Pass', 'Minimum found', 'Array after the pass'], rows: [
          ['start', '—', '[29, 10, 14, 37, 13]'],
          ['i = 0', '10 (index 1)', '[10, 29, 14, 37, 13]'],
          ['i = 1', '13 (index 4)', '[10, 13, 14, 37, 29]'],
          ['i = 2', '14 (index 2, no swap)', '[10, 13, 14, 37, 29]'],
          ['i = 3', '29 (index 4)', '[10, 13, 14, 29, 37]']
        ] },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  double[] gpas = {3.2, 2.5, 3.9, 1.8, 3.0};
                  selectionSort(gpas);
                  System.out.println(Arrays.toString(gpas));
              }

              public static void selectionSort(double[] list) {
                  for (int i = 0; i < list.length - 1; i++) {
                      int minIndex = i;
                      for (int j = i + 1; j < list.length; j++) {
                          if (list[j] < list[minIndex]) {
                              minIndex = j;
                          }
                      }
                      if (minIndex != i) {
                          double temp = list[i];
                          list[i] = list[minIndex];
                          list[minIndex] = temp;
                      }
                  }
              }
          }
        `, out: J`
          [1.8, 2.5, 3.0, 3.2, 3.9]
        ` },
        { type: 'h', en: 'Insertion sort (optional)' },
        { type: 'p', en: "<b>Insertion sort</b> keeps the left part sorted. It takes the next element, shifts larger elements of the sorted part one place to the right, and inserts the element into the gap — like sorting playing cards in your hand." },
        { type: 'code', run: true, code: J`
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
                          list[k + 1] = list[k];   // shift right
                          k--;
                      }
                      list[k + 1] = current;       // insert
                  }
              }
          }
        `, out: J`
          [10, 13, 14, 29, 37]
        ` },
        { type: 'note', kind: 'tip', en: "To swap two elements you always need a temporary variable: <code>temp = a[i]; a[i] = a[j]; a[j] = temp;</code>. Writing <code>a[i] = a[j]; a[j] = a[i];</code> loses the original <code>a[i]</code>." },
        { type: 'list', items: [
          "Linear search: any array, up to <i>n</i> comparisons.",
          "Binary search: sorted array only, about log<sub>2</sub> <i>n</i> comparisons.",
          "Selection sort: select the minimum, swap it to the front, repeat.",
          "Insertion sort: insert each element into the sorted left part."
        ] }
      ],
      practice: [
        { t: 'mcq', q: "Binary search requires the array to be…",
          options: ['an array of int', 'sorted', 'free of duplicates', 'of even length'], answer: 1,
          explain: "The halving logic only works if smaller values are on the left and larger values on the right." },
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
        `, explain: "low=0, high=6 → mid=3 (20); 33 &gt; 20 so low=4. Then mid=(4+6)/2=5 (33) → found." },
        { t: 'mcq', q: "Selection sort (ascending) is applied to <code>{8, 3, 6, 1, 7}</code>. What does the array look like after the <b>first</b> pass?",
          options: ['<code>{1, 3, 6, 8, 7}</code>', '<code>{3, 8, 6, 1, 7}</code>', '<code>{1, 8, 3, 6, 7}</code>', '<code>{3, 6, 1, 7, 8}</code>'], answer: 0,
          explain: "The first pass finds the minimum (1, at index 3) and swaps it with index 0: 8 and 1 change places." },
        { t: 'order', q: "Arrange the lines of a linear search over an array of names.", lines: [
          'public static int linearSearch(String[] names, String key) {',
          '    for (int i = 0; i < names.length; i++) {',
          '        if (names[i].equals(key)) {',
          '            return i;',
          '        }',
          '    }',
          '    return -1;',
          '}'
        ], explain: "<code>return -1</code> must come after the loop: only when every element has been checked do we know the key is missing. Strings are compared with <code>equals</code>." },
        { t: 'fill', q: "Complete the swap step of selection sort.", code: J`
          double temp = list[i];
          list[i] = ___;
          list[minIndex] = ___;
        `, answers: ['list[minIndex]', 'temp'],
          explain: "Save <code>list[i]</code> in temp, move the minimum into position i, then put the saved value where the minimum was." },
        { t: 'mcq', q: "For a <b>sorted</b> array of 1,000 elements, the worst-case number of comparisons is about:",
          options: ['Linear: 1000, Binary: 10', 'Linear: 500, Binary: 500', 'Linear: 10, Binary: 1000', 'Both: 1000'], answer: 0,
          explain: "Linear search may check every element; binary search halves the range each time, and 2<sup>10</sup> = 1024 ≥ 1000." }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: "After <code>int[] a = new int[5];</code>, what is the value of <code>a[4]</code>?",
      options: ['0', 'null', 'undefined (garbage)', 'ArrayIndexOutOfBoundsException'], answer: 0,
      explain: "Elements of a new int array are 0 by default, and index 4 is the last valid index." },
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
      explain: "Valid indexes are 0 to length − 1." },
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
      explain: "Two elements starting at src[1] (6 and 7) are copied into dest starting at index 0; dest[2] keeps its default 0." },
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
    `, answer: '16', explain: "The array change is visible (counts[0] = 10) but n stays 3. All operands are int, so 10 + 3 + 3 = 16." },
    { t: 'mcq', q: "In ascending selection sort, what happens in each pass of the outer loop?",
      options: ['Adjacent elements are swapped if they are out of order', 'The smallest remaining element is swapped into the next position', 'The next element is inserted into the sorted left part', 'The array is split into two halves'], answer: 1,
      explain: "Selection sort selects the minimum of the unsorted part. Option A describes bubble sort, C insertion sort." },
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
    { t: 'mcq', q: "A linear search method returns <code>-1</code>. What does that mean?",
      options: ['The key is the last element', 'The key is not in the array', 'The array is empty only', 'The key is at index 0'], answer: 1,
      explain: "-1 can never be a valid index, so it is used to signal \"not found\"." },
    { t: 'mcq', q: "Binary search for key 4 in <code>{1, 4, 9, 16, 25, 36, 49}</code>. Which elements are compared with the key, in order?",
      options: ['16, then 4', '1, then 4', '16, 9, then 4', '49, 36, 25, 16, 9, 4'], answer: 0,
      explain: "mid = (0+6)/2 = 3 → 16; 4 &lt; 16 so high = 2; mid = (0+2)/2 = 1 → 4, found." }
  ],
  lab: {
    t: 'code',
    q: "<b>Class grade report.</b> Read an integer <code>n</code>, then <code>n</code> integer scores. Print exactly these five lines (no prompts):<br><code>Scores: [...]</code> — the scores in the original order (use <code>Arrays.toString</code>)<br><code>Sorted: [...]</code> — the scores in ascending order (sort a <b>copy</b>)<br><code>Average: X.XX</code> — two decimals with <code>printf</code><br><code>Above average: K</code> — how many scores are strictly greater than the average<br><code>Highest: H at index I</code> — the highest score and the index of its first occurrence in the <b>original</b> array.",
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
    explain: "Keeping the original array untouched while sorting a copy is a very common pattern: you need the original positions for some answers and the sorted order for others."
  },
  cheats: [
    { code: J`int[] a = new int[5];`, note: 'Create an array of 5 ints (all 0)' },
    { code: J`double[] p = {1.5, 2.0, 3.25};`, note: 'Array initializer: declare, create and fill' },
    { code: J`a.length`, note: 'Number of elements (a field, no parentheses)' },
    { code: J`a[a.length - 1]`, note: 'Last element' },
    { code: J`for (int i = 0; i < a.length; i++) { ... a[i] ... }`, note: 'Indexed loop: read or modify elements' },
    { code: J`for (int x : a) { ... }`, note: 'for-each loop: read elements only' },
    { code: J`System.arraycopy(src, 0, dest, 0, src.length);`, note: 'Copy elements into an existing array' },
    { code: J`int[] b = Arrays.copyOf(a, a.length);`, note: 'New independent copy (b = a only copies the reference)' },
    { code: J`public static int[] reverse(int[] list)`, note: 'Method that takes and returns an array' },
    { code: J`Arrays.toString(a)  Arrays.sort(a)  Arrays.fill(a, v)`, note: 'Print, sort ascending, fill (import java.util.Arrays)' },
    { code: J`int mid = (low + high) / 2;`, note: 'Binary search middle index (sorted arrays only)' },
    { code: J`int t = a[i]; a[i] = a[j]; a[j] = t;`, note: 'Swap two elements' }
  ],
  glossary: [
    { term: 'Array', ar: 'مصفوفة', def: 'A fixed-size, ordered collection of elements of the same type, accessed by index.' },
    { term: 'Element', ar: 'عنصر', def: 'One value stored in an array.' },
    { term: 'Index', ar: 'فهرس', def: 'The position of an element; starts at 0 and ends at length − 1.' },
    { term: 'Array initializer', ar: 'مُهيِّئ المصفوفة', def: 'The {v1, v2, ...} syntax that declares, creates and fills an array in one statement.' },
    { term: 'ArrayIndexOutOfBoundsException', ar: 'استثناء تجاوز حدود المصفوفة', def: 'Run-time error thrown when an index is negative or ≥ length.' },
    { term: 'for-each loop', ar: 'حلقة for المحسّنة', def: 'A loop that visits each element in order without using an index.' },
    { term: 'Reference', ar: 'مرجع', def: 'The address of an object such as an array; array variables hold references.' },
    { term: 'Pass-by-value', ar: 'التمرير بالقيمة', def: 'Java copies the argument value into the parameter; for arrays that value is the reference.' },
    { term: 'Linear search', ar: 'البحث الخطي', def: 'Checks elements one by one until the key is found or the array ends.' },
    { term: 'Binary search', ar: 'البحث الثنائي', def: 'Searches a sorted array by repeatedly halving the search range.' },
    { term: 'Selection sort', ar: 'الترتيب بالاختيار', def: 'Repeatedly selects the smallest remaining element and swaps it into place.' },
    { term: 'Insertion sort', ar: 'الترتيب بالإدراج', def: 'Builds a sorted part by inserting each new element into its correct position.' }
  ]
});
