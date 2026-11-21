JP.unit({
  course: 'cs102',
  key: 6,
  n: 8,
  title: 'Generics',
  titleAr: 'الأنواع العامة (Generics)',
  intro: "Generics let you write a class, interface or method once and use it safely with many types: an ArrayList of String, a Box of Integer, a Pair of String and Double. The compiler checks the types for you, so mistakes are caught before the program runs and you no longer need casts. Step by step you will use generic types, write your own generic methods and classes, restrict them with bounds, and implement generic interfaces such as Comparable. Then you will build generic containers and a toolbox of array methods, master the wildcards ?, ? extends and ? super, see what the compiler does behind the scenes (type erasure), and finish with a mini project that reuses the same generic code in a grade book and a shop.",
  introAr: "تسمح الأنواع العامة بكتابة صنف أو دالة مرة واحدة واستخدامها بأمان مع أنواع مختلفة؛ يكتشف المترجم الأخطاء مبكراً ولا نحتاج إلى التحويل (cast). سنبني حاويات عامة، ونتقن أحرف البدل، ونفهم محو الأنواع، ونختم بمشروع مصغر.",
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      title: 'Why generics?',
      titleAr: 'لماذا الأنواع العامة؟',
      minutes: 35,
      body: [
        { type: 'h', en: 'The problem: a list that accepts anything' },
        { type: 'p', en: "You already use <code>ArrayList&lt;String&gt;</code>. The part in angle brackets, <code>&lt;String&gt;</code>, tells Java what kind of things the list holds. Why is that useful? Imagine a list of student names. If someone accidentally adds the number 42, your program should complain <i>immediately</i>, not later when it crashes in front of the user.",
          ar: 'الجزء بين القوسين الزاويين يخبر Java بنوع العناصر في القائمة.' },
        { type: 'analogy', title: 'Labelled boxes', en: "In a pharmacy, every shelf box has a label: \"Painkillers\". Only painkillers go in. A box with no label can hold anything, so you must open each item and check it before use. A list without a type is the box with no label." },
        { type: 'p', en: "Why does this matter so much? Every program has mistakes. The real question is <i>who</i> finds a mistake and <i>when</i>. If the <b>compiler</b> finds it, you see a red message on your own computer, you fix it in one minute, and nobody else ever knows. If the mistake hides until the program <b>runs</b>, a user may meet it: the registration system crashes in the middle of the morning. Generics move many mistakes to the first, cheap moment: compile time.",
          ar: 'الخطأ الذي يكتشفه المترجم أرخص بكثير من الخطأ الذي يظهر للمستخدم أثناء التشغيل.' },
        { type: 'analogy', title: 'A spelling checker', en: "When you type an essay, a spelling checker draws a red line under a wrong word <i>while you type</i>. Without it, you only find the mistake when the teacher returns your paper with a red mark. Generics are the spelling checker of types: the compiler underlines the wrong type before the program ever runs." },
        { type: 'h', en: 'A list without a type (raw type)' },
        { type: 'p', en: "Before Java 5 there was no <code>&lt;String&gt;</code>. A list simply held <code>Object</code>s (anything). If you leave the type out today, it is called a <b>raw type</b>. It still compiles, but with a warning." },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList raw = new ArrayList();     // no type: raw
                  raw.add("Riyadh");
                  raw.add(42);                         // nothing stops this
                  String city = (String) raw.get(0);   // we must cast
                  System.out.println(city);
              }
          }
        `, out: J`
          Riyadh
        ` },
        { type: 'lines', rows: [
          ['ArrayList raw = new ArrayList();', 'No <code>&lt;...&gt;</code>. Java does not know what the list holds.'],
          ['raw.add(42);', 'A number goes into a list that we meant for cities. No error!'],
          ['(String) raw.get(0)', '<code>get</code> returns an Object, so we must cast it to String ourselves.']
        ], ar: 'بدون النوع لا يتحقق Java من شيء ونحتاج cast.' },
        { type: 'note', kind: 'warn', en: "If we wrote <code>(String) raw.get(1)</code>, the program would compile but crash with <code>ClassCastException</code>, because item 1 is the number 42. The mistake is found too late.", ar: 'الخطأ يظهر وقت التشغيل لا وقت الترجمة.' },
        { type: 'p', en: "Here is the crash. This program compiles without any error, but it stops when it runs. (We do not press Run here; the message is shown below the code.)" },
        { type: 'code', code: J`
          ArrayList raw = new ArrayList();
          raw.add("Riyadh");
          raw.add(42);
          String city = (String) raw.get(1);    // item 1 is 42, not a String
          System.out.println(city.length());
        ` },
        { type: 'lines', title: 'What happens when it runs', rows: [
          ['raw.add(42);', 'Accepted. The list does not know it was meant for city names.'],
          ['(String) raw.get(1)', 'The cast is a promise: "trust me, this is a String". The promise is false.'],
          ['Exception in thread "main" java.lang.ClassCastException', 'Java checks the promise while the program runs and stops it: an Integer cannot be cast to a String.']
        ], ar: 'الـ cast وعد للمترجم بأن العنصر نص؛ إذا كان الوعد كاذبًا يتوقف البرنامج بخطأ ClassCastException.' },
        { type: 'check', q: 'What does a raw list let you do?', options: ['Add only Strings', 'Add anything, with no checking', 'Nothing', 'Add only numbers'], answer: 1, explain: "A raw type accepts any Object, so mistakes are not caught." },
        { type: 'h', en: 'The solution: a type argument' },
        { type: 'p', en: "Write the type in angle brackets. Now the compiler checks every <code>add</code> and every <code>get</code>. This is the idea of <b>generics</b>." },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> safe = new ArrayList<>();
                  safe.add("Jeddah");
                  // safe.add(42);              // compile error: caught early
                  String c2 = safe.get(0);      // no cast needed
                  System.out.println(c2);
              }
          }
        `, out: J`
          Jeddah
        ` },
        { type: 'lines', rows: [
          ['ArrayList<String> safe', 'This list holds only Strings.'],
          ['new ArrayList<>()', 'The empty <code>&lt;&gt;</code> is called the <b>diamond</b>. Java fills in String for you.'],
          ['// safe.add(42);', 'With the line active, the compiler would stop: an int is not a String.'],
          ['safe.get(0)', 'Already a String. No cast.']
        ] },
        { type: 'check', q: 'With <code>ArrayList&lt;String&gt; names</code>, what does <code>names.add(42)</code> do?', options: ['Adds 42', 'A compile error', 'A run-time crash only later', 'Adds the text "42"'], answer: 1, explain: "The compiler refuses, so you find the bug at once." },
        { type: 'h', en: 'Side by side: without and with generics' },
        { type: 'p', en: "Put the two versions next to each other and the benefit is easy to see. The work is the same; only the safety changes." },
        { type: 'table', head: ['', 'Raw list: <code>ArrayList</code>', 'Generic list: <code>ArrayList&lt;String&gt;</code>'], rows: [
          ['What can go in?', 'Anything (any Object)', 'Only Strings'],
          ['<code>add(42)</code>', 'Accepted silently', 'Compile error'],
          ['Getting an item', '<code>(String) list.get(0)</code>: a cast is needed', '<code>list.get(0)</code>: already a String'],
          ['When is a wrong type found?', 'At run time, as a crash', 'At compile time, as a red message'],
          ['Compiler warning', '"unchecked" warning', 'None']
        ] },
        { type: 'memory', title: 'What a typed list holds in memory',
          en: "A list does not keep the Strings inside itself. It keeps <b>references</b> (arrows) to String objects. Press Next to watch the list grow, then see what <code>get</code> gives back.",
          code: J`
            ArrayList<String> cities = new ArrayList<>();
            cities.add("Riyadh");
            cities.add("Jeddah");
            String c = cities.get(0);
          `,
          frames: [
            { label: 'After <code>ArrayList&lt;String&gt; cities = new ArrayList&lt;&gt;();</code>',
              vars: [{ name: 'cities', type: 'ArrayList<String>', ref: 'A' }],
              objects: [{ id: 'A', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '0' }] }] },
            { label: 'After <code>cities.add("Riyadh");</code>',
              vars: [{ name: 'cities', type: 'ArrayList<String>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '1' }, { name: '[0]', ref: 'B' }] },
                { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"Riyadh"' }] }] },
            { label: 'After <code>cities.add("Jeddah");</code>',
              vars: [{ name: 'cities', type: 'ArrayList<String>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '2' }, { name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
                { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"Riyadh"' }] },
                { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"Jeddah"' }] }] },
            { label: 'After <code>String c = cities.get(0);</code>: <code>c</code> points to the same String. No copy, no cast.',
              vars: [{ name: 'cities', type: 'ArrayList<String>', ref: 'A' }, { name: 'c', type: 'String', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '2' }, { name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
                { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"Riyadh"' }] },
                { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"Jeddah"' }] }] }
          ],
          ar: 'القائمة تحفظ مراجع (أسهم) إلى كائنات النص، و get تعيد المرجع نفسه دون نسخ ودون cast.' },
        { type: 'h', en: 'Two new words' },
        { type: 'p', en: "In the library's definition <code>ArrayList&lt;E&gt;</code>, the letter <code>E</code> is a <b>type parameter</b>: a placeholder. When you write <code>ArrayList&lt;String&gt;</code>, <code>String</code> is the <b>type argument</b>: the real type that replaces the placeholder. It is like a parameter and an argument of a method, but for types.",
          ar: 'معامل النوع هو الحرف البديل، ووسيط النوع هو النوع الحقيقي.' },
        { type: 'table', head: ['Letter', 'Usually means'], rows: [
          ['<code>T</code>', 'Type (any type)'],
          ['<code>E</code>', 'Element (of a collection)'],
          ['<code>K</code>, <code>V</code>', 'Key and Value']
        ] },
        { type: 'list', items: [
          "<b>Type safety:</b> mistakes show up when you compile.",
          "<b>No casts:</b> <code>get</code> already returns the right type.",
          "<b>Reuse:</b> one class works for many types."
        ], ar: 'الفوائد: أمان الأنواع، لا cast، وإعادة الاستخدام.' },
        { type: 'h', en: 'Numbers in a generic list: wrapper classes' },
        { type: 'p', en: "A type argument must be a <b>class</b>. But <code>int</code>, <code>double</code>, <code>char</code> and <code>boolean</code> are <b>primitive types</b>, not classes. For each of them Java has a matching class, called a <b>wrapper class</b>, because it wraps the simple value inside an object." },
        { type: 'table', head: ['Primitive (not allowed in &lt;...&gt;)', 'Wrapper class (use this)'], rows: [
          ['<code>int</code>', '<code>Integer</code>'],
          ['<code>double</code>', '<code>Double</code>'],
          ['<code>char</code>', '<code>Character</code>'],
          ['<code>boolean</code>', '<code>Boolean</code>']
        ] },
        { type: 'p', en: "The good news: you can still write normal numbers. Java changes <code>12.5</code> into a <code>Double</code> object when you add it, and back into a <code>double</code> when you take it out. This automatic change is called <b>autoboxing</b> (into the box) and <b>unboxing</b> (out of the box)." },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Double> prices = new ArrayList<>();
                  prices.add(12.5);                 // double -> Double (autoboxing)
                  double first = prices.get(0);     // Double -> double (unboxing)
                  System.out.println(first * 2 + " SAR");
              }
          }
        `, out: J`
          25.0 SAR
        ` },
        { type: 'lines', rows: [
          ['ArrayList<Double> prices', 'A list of prices in riyals. <code>Double</code> with a capital D.'],
          ['prices.add(12.5);', 'The plain number 12.5 is boxed into a Double object for you.'],
          ['double first = prices.get(0);', 'The Double is unboxed back into a plain double.'],
          ['first * 2 + " SAR"', '12.5 * 2 = 25.0, then the text is joined.']
        ], ar: 'نكتب Double في القوس الزاوي، ويحول Java الأعداد العادية تلقائيًا إلى كائنات وبالعكس.' },
        { type: 'check', q: 'Which declaration is correct for a list of letter grades such as \'A\' and \'B\'?', options: ['ArrayList&lt;char&gt; g', 'ArrayList&lt;Character&gt; g', 'ArrayList&lt;Char&gt; g', 'ArrayList&lt;String[]&gt; g'], answer: 1, explain: "The wrapper class of <code>char</code> is <code>Character</code>." },
        { type: 'steps', title: 'Worked example: total of marks', problem: 'Store three marks in an ArrayList and print their total, without any cast.',
          steps: [
            { en: 'Create a list of <code>Integer</code>. We use <code>Integer</code> (not <code>int</code>) because a type argument must be a class.', code: J`
              ArrayList<Integer> marks = new ArrayList<>();
            ` },
            { en: 'Add the marks.', code: J`
              marks.add(90);
              marks.add(75);
              marks.add(60);
            ` },
            { en: 'Loop and add them up. Each item is already an Integer.', code: J`
              int total = 0;
              for (int m : marks) {
                  total += m;
              }
            ` },
            { en: 'Print the result.', code: J`
              System.out.println("Total: " + total);
            ` }
          ],
          code: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    ArrayList<Integer> marks = new ArrayList<>();
                    marks.add(90);
                    marks.add(75);
                    marks.add(60);
                    int total = 0;
                    for (int m : marks) {
                        total += m;
                    }
                    System.out.println("Total: " + total);
                }
            }
          `, out: J`
            Total: 225
          `, ar: 'القائمة من نوع Integer لذلك لا نحتاج إلى cast. 90 + 75 + 60 = 225.' },
        { type: 'steps', title: 'Worked example: prices in a shop', problem: 'A small shop sells four items. Store their prices in riyals in an <code>ArrayList&lt;Double&gt;</code> and print the total, the average and the most expensive price.',
          steps: [
            { en: 'Create a list of <code>Double</code> and add the four prices. Autoboxing turns each number into a Double.', code: J`
              ArrayList<Double> prices = new ArrayList<>();
              prices.add(12.5);
              prices.add(8.0);
              prices.add(29.5);
              prices.add(10.0);
            ` },
            { en: 'Prepare two variables: the running total, and the biggest price so far (start with the first price).', code: J`
              double total = 0;
              double max = prices.get(0);
            ` },
            { en: 'Visit every price once. Each item comes out as a <code>double</code>, so we can add and compare with no cast.', code: J`
              for (double p : prices) {
                  total += p;
                  if (p > max) {
                      max = p;
                  }
              }
            ` },
            { en: 'Print the results. The average is the total divided by <code>prices.size()</code>.', code: J`
              System.out.println("Total: " + total + " SAR");
              System.out.println("Average: " + total / prices.size() + " SAR");
              System.out.println("Most expensive: " + max + " SAR");
            ` }
          ],
          code: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    ArrayList<Double> prices = new ArrayList<>();
                    prices.add(12.5);
                    prices.add(8.0);
                    prices.add(29.5);
                    prices.add(10.0);
                    double total = 0;
                    double max = prices.get(0);
                    for (double p : prices) {
                        total += p;
                        if (p > max) {
                            max = p;
                        }
                    }
                    System.out.println("Total: " + total + " SAR");
                    System.out.println("Average: " + total / prices.size() + " SAR");
                    System.out.println("Most expensive: " + max + " SAR");
                }
            }
          `, out: J`
            Total: 60.0 SAR
            Average: 15.0 SAR
            Most expensive: 29.5 SAR
          `, ar: 'القائمة من نوع Double؛ كل عنصر يخرج عددًا عشريًا جاهزًا للجمع والمقارنة دون cast.' }
      ],
      mistakes: [
        { title: 'Using a primitive as type argument', en: "Use the wrapper class: <code>Integer</code>, <code>Double</code>, <code>Character</code>.", code: J`
          ArrayList<int> marks = new ArrayList<>();   // compile error
        ` },
        { title: 'Leaving out the type', en: "A raw <code>ArrayList</code> compiles but is unsafe and shows an \"unchecked\" warning. Add <code>&lt;String&gt;</code> or the right type." },
        { title: 'Mixing types in a typed list', en: "A list of Strings does not accept numbers.", code: J`
          ArrayList<String> names = new ArrayList<>();
          names.add(7);    // compile error
        ` },
        { title: 'Writing the type twice differently', en: "<code>ArrayList&lt;String&gt; a = new ArrayList&lt;Integer&gt;();</code> is an error. Use the diamond <code>&lt;&gt;</code> on the right." }
      ],
      remember: [
        "Generics put a type in angle brackets: <code>ArrayList&lt;String&gt;</code>.",
        "The compiler checks the type, so mistakes appear early.",
        "No cast is needed when you get items out.",
        "<b>Type parameter</b> = placeholder (T, E). <b>Type argument</b> = real type (String).",
        "A type argument must be a class: <code>Integer</code>, not <code>int</code>. Autoboxing converts between them for you.",
        "A raw type (no <code>&lt;...&gt;</code>) compiles, but a wrong cast crashes later with <code>ClassCastException</code>."
      ],
      rememberAr: 'الأنواع العامة تجعل المترجم يتحقق من النوع مبكرًا، ولا نحتاج cast. نستخدم Integer بدل int.',
      practice: [
        { t: 'mcq', q: "What does <code>&lt;String&gt;</code> in <code>ArrayList&lt;String&gt;</code> tell Java?", options: ['The list holds Strings', 'The list has one item', 'The list is sorted', 'The list is empty'], answer: 0, explain: "It is the type argument: what the list holds." },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> names = new ArrayList<>();
                  names.add("Ali");
                  names.add("Sara");
                  System.out.println(names.get(1));
              }
          }
        `, answer: 'Sara', explain: "Index 1 is the second item: Sara." },
        { t: 'mcq', q: 'What is the main danger of using a raw <code>ArrayList</code> (no type argument)?', options: ['It cannot grow', 'It only stores primitives', 'Wrong types are accepted and fail later with ClassCastException', 'It is slower to print'], answer: 2, explain: "A raw list accepts any Object, so a mistake is only discovered later when a cast fails." },
        { t: 'mcq', q: "Which line does <b>not</b> compile?", options: ['ArrayList&lt;String&gt; a = new ArrayList&lt;&gt;();', 'ArrayList&lt;Integer&gt; b = new ArrayList&lt;&gt;();', 'ArrayList&lt;int&gt; c = new ArrayList&lt;&gt;();', 'ArrayList&lt;Double&gt; d = new ArrayList&lt;&gt;();'], answer: 2, explain: "A type argument must be a class. <code>int</code> is primitive; use <code>Integer</code>." },
        { t: 'fill', q: "Complete the declaration of a list of Strings.", code: J`
          ArrayList___ names = new ArrayList___();
        `, answers: ['<String>', '<>'], explain: "Type argument on the left, diamond on the right." },
        { t: 'order', q: "Put the lines in order.", lines: [
          'ArrayList<String> names = new ArrayList<>();',
          'names.add("Dana");',
          'String first = names.get(0);',
          'System.out.println(first);'
        ], explain: "Create the list, add an item, read it, print it." },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> marks = new ArrayList<>();
                  marks.add(80);
                  marks.add(90);
                  int sum = 0;
                  for (int m : marks) {
                      sum += m;
                  }
                  System.out.println(sum + " " + marks.size());
              }
          }
        `, answer: '170 2', explain: "80 + 90 = 170, and the list has 2 items." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> integers. Store them in an <code>ArrayList&lt;Integer&gt;</code> and print their sum. No prompts.", qAr: 'اقرأ n عددًا وخزنها في ArrayList واطبع مجموعها.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    ArrayList<Integer> list = new ArrayList<>();
                    // read n numbers into the list, then print the sum
                }
            }
          `,
          tests: [{ stdin: '3\n10 20 30', expected: '60' }, { stdin: '1\n5', expected: '5' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    ArrayList<Integer> list = new ArrayList<>();
                    for (int i = 0; i < n; i++) {
                        list.add(sc.nextInt());
                    }
                    int sum = 0;
                    for (int x : list) {
                        sum += x;
                    }
                    System.out.println(sum);
                }
            }
          `,
          hint: "Loop n times and call <code>list.add(sc.nextInt())</code>.",
          explain: "The list is typed, so each item is an Integer and can be added directly." },
        { t: 'bug', q: "This program should print the sum of two marks. Tap the line with the bug.", qAr: 'ابحث{{g:|ي}} عن السطر الذي فيه الخطأ.',
          code: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    ArrayList<int> marks = new ArrayList<>();
                    marks.add(90);
                    marks.add(85);
                    System.out.println(marks.get(0) + marks.get(1));
                }
            }
          `, bug: 5,
          fix: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    ArrayList<Integer> marks = new ArrayList<>();
                    marks.add(90);
                    marks.add(85);
                    System.out.println(marks.get(0) + marks.get(1));
                }
            }
          `,
          hint: "Can a primitive type go inside the angle brackets?",
          explain: "Line 5 does not compile: a type argument must be a class, and <code>int</code> is a primitive type. Use the wrapper class <code>Integer</code>. The other lines stay the same, because autoboxing turns 90 and 85 into Integer objects. The fixed program prints 175.",
          explainAr: 'لا يُسمح بالأنواع الأولية مثل int داخل القوسين الزاويين؛ نستخدم Integer.' },
        { t: 'bug', q: "This program compiles, but it crashes when it runs. Which line is the real cause? (Two answers are accepted.)",
          code: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    ArrayList items = new ArrayList();
                    items.add("Pen");
                    items.add(5);
                    String second = (String) items.get(1);
                    System.out.println(second);
                }
            }
          `, bug: [5, 8],
          fix: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    ArrayList<String> items = new ArrayList<>();
                    items.add("Pen");
                    items.add("Ruler");
                    String second = items.get(1);
                    System.out.println(second);
                }
            }
          `,
          hint: "Which item is at index 1, and what type is it?",
          explain: "Line 8 crashes with <code>ClassCastException</code>: item 1 is the Integer 5, and an Integer cannot become a String. The root cause is line 5: a raw <code>ArrayList</code> accepts anything. With <code>ArrayList&lt;String&gt;</code> the compiler rejects <code>items.add(5)</code> at once, and the cast is no longer needed.",
          explainAr: 'القائمة الخام تقبل أي شيء، فيظهر الخطأ متأخرًا وقت التشغيل. القائمة المحددة النوع تكشفه وقت الترجمة.' },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> cities = new ArrayList<>();
                  cities.add("Dammam");
                  cities.add("Abha");
                  String c = cities.get(0);
                  System.out.println(c.length() + " " + c.toUpperCase());
                  System.out.println(cities.get(1).charAt(0));
              }
          }
        `, answer: J`
          6 DAMMAM
          A
        `, explain: "<code>get</code> returns a String, so String methods work directly with no cast. \"Dammam\" has 6 letters; the first letter of \"Abha\" is A." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> city names. Store them in an <code>ArrayList&lt;String&gt;</code> and print the longest name. If two names have the same length, print the one that came first. No prompts.", qAr: 'اقرأ{{g:|ي}} أسماء المدن واطبع{{g:|ي}} أطولها.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    ArrayList<String> cities = new ArrayList<>();
                    // read n names, then find and print the longest
                }
            }
          `,
          tests: [{ stdin: '4\nAbha Riyadh Tabuk Jeddah', expected: 'Riyadh' }, { stdin: '3\nHail Taif Khobar', expected: 'Khobar' }, { stdin: '1\nMakkah', expected: 'Makkah' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    ArrayList<String> cities = new ArrayList<>();
                    for (int i = 0; i < n; i++) {
                        cities.add(sc.next());
                    }
                    String longest = cities.get(0);
                    for (String c : cities) {
                        if (c.length() > longest.length()) {
                            longest = c;
                        }
                    }
                    System.out.println(longest);
                }
            }
          `,
          hint: "Start with <code>longest = cities.get(0)</code>. Replace it only when a name is strictly longer (<code>&gt;</code>, not <code>&gt;=</code>).",
          explain: "Each item is already a String, so <code>c.length()</code> works with no cast. Using <code>&gt;</code> keeps the first name when two have the same length (Riyadh and Jeddah both have 6 letters)." }
      ]
    },

    // ---------------------------------------------------------------- L2
    {
      title: 'Generic methods',
      titleAr: 'الدوال العامة',
      minutes: 35,
      body: [
        { type: 'h', en: 'One method for many types' },
        { type: 'p', en: "Suppose you want a method that prints an array. You would write one for <code>String[]</code>, another for <code>Integer[]</code>, another for <code>Double[]</code>. The code is the same each time! A <b>generic method</b> lets you write it once.",
          ar: 'الدالة العامة تكتب مرة واحدة وتعمل مع أنواع كثيرة.' },
        { type: 'p', en: "Look at what happens without generics. The three methods below are copies of each other; only the type in the header changes. If you find a bug in the loop, you must fix it three times, and one day you will forget one copy." },
        { type: 'code', code: J`
          public static void printNames(String[] items)   { /* same loop */ }
          public static void printMarks(Integer[] items)  { /* same loop */ }
          public static void printPrices(Double[] items)  { /* same loop */ }
        ` },
        { type: 'analogy', title: 'A photocopier', en: "A photocopier does not care what is on the paper: a timetable, a menu, or a map. It copies any page. A generic method is a photocopier for types." },
        { type: 'p', en: "Here is the generic version: one method replaces all three copies. Read the header slowly; the new part is <code>&lt;T&gt;</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static <T> void printAll(T[] items) {
                  for (int i = 0; i < items.length; i++) {
                      if (i > 0) {
                          System.out.print(", ");
                      }
                      System.out.print(items[i]);
                  }
                  System.out.println();
              }

              public static void main(String[] args) {
                  Integer[] marks = {90, 75, 60};
                  String[] names = {"Dana", "Yousef"};
                  printAll(marks);
                  printAll(names);
              }
          }
        `, out: J`
          90, 75, 60
          Dana, Yousef
        ` },
        { type: 'lines', rows: [
          ['public static <T> void printAll(T[] items)', '<code>&lt;T&gt;</code> declares the placeholder. It goes <b>before the return type</b> (<code>void</code>).'],
          ['T[] items', 'An array of "some type T".'],
          ['printAll(marks)', 'Java sees an <code>Integer[]</code>, so T becomes Integer for this call.'],
          ['printAll(names)', 'Now T becomes String. Same method, different type.']
        ], ar: 'يوضع ‎&lt;T&gt;‎ قبل نوع الإرجاع. تعرف Java قيمة T من الوسيط تلقائيًا.' },
        { type: 'check', q: 'Where is <code>&lt;T&gt;</code> written in a generic method?', options: ['After the method name', 'Before the return type', 'At the end of the line', 'Inside the body'], answer: 1, explain: "After the modifiers, immediately before the return type." },
        { type: 'h', en: 'A generic method that returns T' },
        { type: 'p', en: "First, the old way. Before generics, programmers wrote one method for every array by using <code>Object</code>, the parent of every class. It works, but what comes back is only an <code>Object</code>. To use it as a String, you must cast it yourself." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static Object lastOfOld(Object[] items) {
                  return items[items.length - 1];
              }

              public static void main(String[] args) {
                  String[] names = {"Dana", "Yousef"};
                  Object o = lastOfOld(names);
                  String last = (String) o;      // cast needed
                  System.out.println(last.length());
              }
          }
        `, out: J`
          6
        ` },
        { type: 'lines', rows: [
          ['public static Object lastOfOld(Object[] items)', 'Accepts any array of objects, but promises only an <code>Object</code> back.'],
          ['Object o = lastOfOld(names);', 'We know it is a String; the compiler does not.'],
          ['(String) o', 'A cast: if we are wrong, the program crashes at run time.']
        ], ar: 'الطريقة القديمة بـ Object تعمل، لكنها تحتاج cast وقد تنهار وقت التشغيل.' },
        { type: 'p', en: "Now the generic way. The return type can also be <code>T</code>. The result then has the same type as the array's items, so no cast is needed." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static <T> T lastOf(T[] items) {
                  return items[items.length - 1];
              }

              public static void main(String[] args) {
                  Integer[] marks = {90, 75, 60};
                  String[] names = {"Dana", "Yousef"};
                  System.out.println(lastOf(names));
                  System.out.println(lastOf(names).length());
                  System.out.println(lastOf(marks) + 1);
              }
          }
        `, out: J`
          Yousef
          6
          61
        ` },
        { type: 'lines', rows: [
          ['lastOf(names)', 'T is String, so the result is a String.'],
          ['lastOf(names).length()', 'A String method works directly: "Yousef" has 6 letters.'],
          ['lastOf(marks) + 1', 'T is Integer: 60 + 1 = 61. A number, so + adds.']
        ] },
        { type: 'table', head: ['', 'Old way: <code>Object lastOfOld(Object[] a)</code>', 'Generic: <code>&lt;T&gt; T lastOf(T[] a)</code>'], rows: [
          ['Call with names', '<code>(String) lastOfOld(names)</code>', '<code>lastOf(names)</code>'],
          ['Cast needed?', 'Yes, every time', 'No'],
          ['Wrong cast found', 'At run time (crash)', 'Never happens: no cast']
        ] },
        { type: 'note', kind: 'exam', en: "<code>printAll(new int[]{1, 2})</code> does <b>not</b> compile. T must be a class, and <code>int[]</code> is not an array of objects. Use <code>Integer[]</code>.", ar: 'لا يمكن استخدام int[] مع T[]؛ استخدم Integer[].' },
        { type: 'h', en: 'Generic methods with lists' },
        { type: 'p', en: "A generic method may also take an <code>ArrayList&lt;T&gt;</code> and another parameter of type <code>T</code>. This one counts how many items equal a target. It compares with <code>equals</code> (remember: not <code>==</code> for objects)." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static <T> int countMatches(ArrayList<T> list, T target) {
                  int count = 0;
                  for (T item : list) {
                      if (item.equals(target)) {
                          count++;
                      }
                  }
                  return count;
              }

              public static void main(String[] args) {
                  ArrayList<String> votes = new ArrayList<>(Arrays.asList("yes", "no", "yes", "yes"));
                  ArrayList<Character> grades = new ArrayList<>(Arrays.asList('A', 'B', 'A'));
                  System.out.println(countMatches(votes, "yes"));
                  System.out.println(countMatches(grades, 'A'));
              }
          }
        `, out: J`
          3
          2
        ` },
        { type: 'lines', rows: [
          ['ArrayList<T> list, T target', 'The list items and the target must be the same type T.'],
          ['for (T item : list)', 'Each item has type T.'],
          ['item.equals(target)', 'True when they have the same value.'],
          ['countMatches(votes, "yes")', 'T = String; "yes" appears 3 times.']
        ], ar: 'نقارن الكائنات بـ equals وليس ==.' },
        { type: 'h', en: 'How does Java know what T is?' },
        { type: 'p', en: "You never write <code>T = String</code> yourself. At each call, the compiler looks at the arguments and works out T. This is called <b>type inference</b> (the compiler <i>infers</i>, or guesses correctly, the type). If the arguments do not agree about T, the compiler stops you.",
          ar: 'المترجم يستنتج قيمة T من الوسائط في كل استدعاء، ويرفض الاستدعاء إذا تعارضت الأنواع.' },
        { type: 'analogy', title: 'A recipe for any fruit', en: "A juice recipe says: \"Take 3 pieces of <i>fruit</i>, wash them, press them.\" It does not name the fruit. When you bring oranges, it becomes orange juice; when you bring mangoes, mango juice. But you cannot bring 2 oranges and 1 onion: all three must be the same kind. T works the same way in one call." },
        { type: 'code', code: J`
          ArrayList<String> votes = new ArrayList<>();
          countMatches(votes, "yes");    // OK: T = String
          countMatches(votes, 5);        // compile error: the list says String, 5 is an Integer
        ` },
        { type: 'check', q: 'Given <code>static &lt;T&gt; T lastOf(T[] a)</code> and <code>Double[] p = {2.5, 4.0};</code>, what is the type of <code>lastOf(p)</code>?', options: ['Object', 'T', 'Double', 'double[]'], answer: 2, explain: "The argument is a <code>Double[]</code>, so the compiler infers T = Double and the result is a Double." },
        { type: 'p', en: "<b>When should a method be generic?</b> Ask yourself: \"Do the steps stay exactly the same if I change the type?\" Printing, counting, swapping, finding a position and picking the first or last item do not depend on the type, so they are perfect generic methods. Adding up prices or making a word upper case need a <i>specific</i> type, so a plain T is not enough (in Lesson 5 you will see how a <b>bound</b> helps).",
          ar: 'نكتب دالة عامة عندما تبقى الخطوات نفسها مهما تغير النوع.' },
        { type: 'steps', title: 'Worked example: swap two items', problem: 'Write one method that swaps two elements in any array.',
          steps: [
            { en: 'Header: <code>&lt;T&gt;</code>, return nothing, take an array and two positions.', code: J`
              public static <T> void swap(T[] a, int i, int j) {
            ` },
            { en: 'Save one item in a temporary variable of type <code>T</code>.', code: J`
                  T tmp = a[i];
            ` },
            { en: 'Copy the second item into the first place, then the saved item into the second place.', code: J`
                  a[i] = a[j];
                  a[j] = tmp;
            ` },
            { en: 'Test it on two kinds of arrays.', code: J`
              swap(s, 0, 2);
              swap(n, 1, 2);
            ` }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static <T> void swap(T[] a, int i, int j) {
                    T tmp = a[i];
                    a[i] = a[j];
                    a[j] = tmp;
                }

                public static void main(String[] args) {
                    String[] s = {"x", "y", "z"};
                    Integer[] n = {5, 6, 7};
                    swap(s, 0, 2);
                    swap(n, 1, 2);
                    System.out.println(Arrays.toString(s));
                    System.out.println(Arrays.toString(n));
                }
            }
          `, out: J`
            [z, y, x]
            [5, 7, 6]
          `, ar: 'نحفظ عنصرًا في متغير مؤقت ثم نبدل. نفس الدالة تعمل مع String وInteger.' },
        { type: 'memory', title: 'What swap really moves: references',
          en: "An array of objects holds <b>references</b>. <code>swap</code> never copies or changes the Strings; it only moves the arrows. Inside the method, <code>a</code> refers to the <i>same</i> array as <code>s</code>, so the change is visible in <code>main</code>.",
          code: J`
            String[] s = {"x", "y", "z"};
            swap(s, 0, 2);      // inside: T tmp = a[i]; a[i] = a[j]; a[j] = tmp;
          `,
          frames: [
            { label: 'Before the call: <code>s</code> refers to an array of three references',
              vars: [{ name: 's', type: 'String[]', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'String[3]', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"x"' }] },
                { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"y"' }] },
                { id: 'D', cls: 'String', fields: [{ name: 'text', value: '"z"' }] }] },
            { label: 'Inside <code>swap(s, 0, 2)</code>, after <code>T tmp = a[i];</code> (T is String)',
              vars: [{ name: 's', type: 'String[]', ref: 'A' }, { name: 'a', type: 'T[]', ref: 'A' }, { name: 'i', type: 'int', value: '0' }, { name: 'j', type: 'int', value: '2' }, { name: 'tmp', type: 'T', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'String[3]', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"x"' }] },
                { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"y"' }] },
                { id: 'D', cls: 'String', fields: [{ name: 'text', value: '"z"' }] }] },
            { label: 'After <code>a[i] = a[j];</code>: two places point to "z" for a moment',
              vars: [{ name: 's', type: 'String[]', ref: 'A' }, { name: 'a', type: 'T[]', ref: 'A' }, { name: 'i', type: 'int', value: '0' }, { name: 'j', type: 'int', value: '2' }, { name: 'tmp', type: 'T', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'String[3]', fields: [{ name: '[0]', ref: 'D' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"x"' }] },
                { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"y"' }] },
                { id: 'D', cls: 'String', fields: [{ name: 'text', value: '"z"' }] }] },
            { label: 'After <code>a[j] = tmp;</code> and back in <code>main</code>: the array is [z, y, x]',
              vars: [{ name: 's', type: 'String[]', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'String[3]', fields: [{ name: '[0]', ref: 'D' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'B' }] },
                { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"x"' }] },
                { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"y"' }] },
                { id: 'D', cls: 'String', fields: [{ name: 'text', value: '"z"' }] }] }
          ],
          ar: 'الدالة swap تنقل الأسهم (المراجع) فقط ولا تنسخ النصوص، والمصفوفة نفسها تتغير في main.' },
        { type: 'note', kind: 'tip', en: "Without <code>tmp</code>, the swap fails: after <code>a[i] = a[j];</code> nothing points to \"x\" any more from the array, so it would be lost. Always save one reference first." },
        { type: 'steps', title: 'Worked example: where is it? (indexOf)', problem: 'Write one generic method <code>indexOf(items, target)</code> that returns the position of <code>target</code> in any array, or <code>-1</code> if it is not there. Test it with days of the week and room numbers.',
          steps: [
            { en: 'Header: the array and the target must be the same type T. The answer is a position, so the return type is <code>int</code> (not T).', code: J`
              public static <T> int indexOf(T[] items, T target) {
            ` },
            { en: 'Visit each position. Compare with <code>equals</code>, because T is an object type.', code: J`
                  for (int i = 0; i < items.length; i++) {
                      if (items[i].equals(target)) {
                          return i;
                      }
                  }
            ` },
            { en: 'If the loop ends, the target was not found: return <code>-1</code>.', code: J`
                  return -1;
              }
            ` },
            { en: 'Test it with a <code>String[]</code> and an <code>Integer[]</code>, and with a day that is missing.', code: J`
              System.out.println(indexOf(days, "Tue"));
              System.out.println(indexOf(rooms, 204));
              System.out.println(indexOf(days, "Fri"));
            ` }
          ],
          code: J`
            public class Main {
                public static <T> int indexOf(T[] items, T target) {
                    for (int i = 0; i < items.length; i++) {
                        if (items[i].equals(target)) {
                            return i;
                        }
                    }
                    return -1;
                }

                public static void main(String[] args) {
                    String[] days = {"Sun", "Mon", "Tue", "Wed", "Thu"};
                    Integer[] rooms = {101, 204, 305};
                    System.out.println(indexOf(days, "Tue"));
                    System.out.println(indexOf(rooms, 204));
                    System.out.println(indexOf(days, "Fri"));
                }
            }
          `, out: J`
            2
            1
            -1
          `, ar: 'نقارن بـ equals ونعيد الموقع، وإذا لم نجد الهدف نعيد ‎-1‎. الدالة نفسها تعمل مع الأيام وأرقام القاعات.' }
      ],
      mistakes: [
        { title: 'Writing &lt;T&gt; in the wrong place', en: "It goes before the return type.", code: J`
          public static void <T> show(T x) { }    // wrong
          public static <T> void show(T x) { }    // right
        ` },
        { title: 'Passing a primitive array', en: "<code>int[]</code> does not match <code>T[]</code>. Use <code>Integer[]</code>." },
        { title: 'Comparing T items with ==', en: "<code>item == target</code> compares references. Use <code>item.equals(target)</code>." },
        { title: 'Using a method of String on T', en: "Inside the method T could be anything, so you can only use methods every object has (like <code>equals</code> and <code>toString</code>).", code: J`
          public static <T> int len(T x) {
              return x.length();    // error: T has no length()
          }
        ` }
      ],
      remember: [
        "A generic method declares its own placeholder: <code>public static &lt;T&gt; ...</code>.",
        "<code>&lt;T&gt;</code> comes <b>before the return type</b>.",
        "Java works out T from the arguments of each call.",
        "T can be used as parameter type, return type and variable type.",
        "T must be a class, not a primitive. Compare objects with <code>equals</code>.",
        "Inside the method, only methods every object has (<code>equals</code>, <code>toString</code>) can be called on a plain T."
      ],
      rememberAr: 'الدالة العامة تعلن معامل النوع قبل نوع الإرجاع، وتحدد Java قيمة T من الوسائط. T يجب أن يكون صنفًا.',
      practice: [
        { t: 'mcq', q: 'Where is the type parameter declared in a generic method?', options: ['After the method name', 'Before the return type: <code>static &lt;T&gt; void show(T x)</code>', 'Only in the parameter list', 'At the end of the line'], answer: 1, explain: "For generic methods, <code>&lt;T&gt;</code> is written immediately before the return type.", explainAr: 'يوضع ‎&lt;T&gt;‎ قبل نوع الإرجاع.' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static <T> T firstOf(T[] a) { return a[0]; }
              public static <T> T lastOf(T[] a) { return a[a.length - 1]; }

              public static void main(String[] args) {
                  String[] cities = {"Abha", "Hail", "Tabuk"};
                  System.out.println(firstOf(cities));
                  System.out.println(lastOf(cities));
              }
          }
        `, answer: J`
          Abha
          Tabuk
        `, explain: "First item and last item of the same array." },
        { t: 'mcq', q: "Given <code>public static &lt;T&gt; void printAll(T[] items)</code>, which call does <b>not</b> compile?", options: ['printAll(new String[]{"a", "b"})', 'printAll(new Integer[]{1, 2})', 'printAll(new int[]{1, 2})', 'printAll(new Double[]{1.5})'], answer: 2, explain: "T can only be a class, and <code>int[]</code> is not an array of objects." },
        { t: 'fill', q: 'Complete the header of a generic method that returns the first element of any array.', code: J`
          public static ___ T firstOf(T[] arr) {
              return arr[0];
          }
        `, answers: ['<T>'], explain: "The type parameter list <code>&lt;T&gt;</code> must appear before the return type <code>T</code>." },
        { t: 'order', q: "Put the body of <code>swap</code> in order.", lines: [
          'T tmp = a[i];',
          'a[i] = a[j];',
          'a[j] = tmp;'
        ], explain: "Save the first item, overwrite it with the second, then put the saved one in the second place." },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.Arrays;

          public class Main {
              public static <T> void swap(T[] a, int i, int j) {
                  T tmp = a[i];
                  a[i] = a[j];
                  a[j] = tmp;
              }

              public static void main(String[] args) {
                  String[] s = {"x", "y", "z"};
                  Integer[] n = {1, 2, 3};
                  swap(s, 0, 2);
                  swap(n, 0, 1);
                  System.out.println(Arrays.toString(s));
                  System.out.println(Arrays.toString(n));
              }
          }
        `, answer: J`
          [z, y, x]
          [2, 1, 3]
        `, explain: "The same method swaps in a String array (0 and 2) and an Integer array (0 and 1)." },
        { t: 'mcq', q: "Inside a generic method <code>&lt;T&gt; void f(T x)</code>, which call is allowed?", options: ['x.length()', 'x.toString()', 'x.charAt(0)', 'x + 1'], answer: 1, explain: "T could be any class, so only methods all objects have (like toString and equals) are safe." },
        { t: 'code', q: "Complete the generic method <code>countMatches</code>. The program reads <code>n</code>, then <code>n</code> words, then a target word, and prints how many words equal the target. No prompts.", qAr: 'أكمل الدالة العامة countMatches لعدّ الكلمات المطابقة.',
          starter: J`
            import java.util.*;

            public class Main {
                public static <T> int countMatches(ArrayList<T> list, T target) {
                    // TODO
                    return 0;
                }

                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    ArrayList<String> words = new ArrayList<>();
                    for (int i = 0; i < n; i++) {
                        words.add(sc.next());
                    }
                    String target = sc.next();
                    System.out.println(countMatches(words, target));
                }
            }
          `,
          tests: [{ stdin: '4\nyes no yes yes\nyes', expected: '3' }, { stdin: '2\na b\nc', expected: '0' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static <T> int countMatches(ArrayList<T> list, T target) {
                    int count = 0;
                    for (T item : list) {
                        if (item.equals(target)) {
                            count++;
                        }
                    }
                    return count;
                }

                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    ArrayList<String> words = new ArrayList<>();
                    for (int i = 0; i < n; i++) {
                        words.add(sc.next());
                    }
                    String target = sc.next();
                    System.out.println(countMatches(words, target));
                }
            }
          `,
          hint: "Start <code>count</code> at 0, loop with <code>for (T item : list)</code>, add 1 when <code>item.equals(target)</code>.",
          explain: "T becomes String here, but the method works for any type." },
        { t: 'bug', q: "This program should print three marks with one generic method. It does not compile. Tap the line with the bug.",
          code: J`
            public class Main {
                public static <T> void printAll(T[] items) {
                    for (T item : items) {
                        System.out.print(item + " ");
                    }
                    System.out.println();
                }

                public static void main(String[] args) {
                    int[] marks = {90, 75, 60};
                    printAll(marks);
                }
            }
          `, bug: [10, 11],
          fix: J`
            public class Main {
                public static <T> void printAll(T[] items) {
                    for (T item : items) {
                        System.out.print(item + " ");
                    }
                    System.out.println();
                }

                public static void main(String[] args) {
                    Integer[] marks = {90, 75, 60};
                    printAll(marks);
                }
            }
          `,
          hint: "T must be a class. What kind of array is <code>marks</code>?",
          explain: "<code>printAll</code> needs <code>T[]</code>, an array of objects. <code>int[]</code> is an array of primitive values, so no class can be T and the call on line 11 is rejected. The cause is the declaration on line 10 (both lines are accepted): use <code>Integer[]</code>. Autoboxing turns 90, 75 and 60 into Integer objects.",
          explainAr: 'المصفوفة int[]‎ لا تناسب T[]‎؛ نستخدم Integer[]‎.' },
        { t: 'bug', q: "This generic method should add up the lengths of the words. It does not compile. Tap the line with the bug.",
          code: J`
            public class Main {
                public static <T> int totalLength(T[] items) {
                    int total = 0;
                    for (T item : items) {
                        total += item.length();
                    }
                    return total;
                }

                public static void main(String[] args) {
                    String[] words = {"tea", "cake"};
                    System.out.println(totalLength(words));
                }
            }
          `, bug: 5,
          fix: J`
            public class Main {
                public static <T> int totalLength(T[] items) {
                    int total = 0;
                    for (T item : items) {
                        total += item.toString().length();
                    }
                    return total;
                }

                public static void main(String[] args) {
                    String[] words = {"tea", "cake"};
                    System.out.println(totalLength(words));
                }
            }
          `,
          hint: "Inside the method, what does the compiler know about T?",
          explain: "Inside the method T could be <i>any</i> class, for example Integer, which has no <code>length()</code>. The compiler only allows methods that every object has. <code>item.toString().length()</code> works for any T. The fixed program prints 7 (3 + 4).",
          explainAr: 'داخل الدالة قد يكون T أي صنف، فلا نستدعي إلا الدوال الموجودة في كل كائن مثل toString.' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static <T> T pick(T[] items, int i) {
                  return items[i % items.length];
              }

              public static void main(String[] args) {
                  String[] days = {"Sun", "Mon", "Tue"};
                  Integer[] marks = {70, 85, 90, 65};
                  System.out.println(pick(days, 4));
                  System.out.println(pick(marks, 6) + pick(marks, 1));
              }
          }
        `, answer: J`
          Mon
          175
        `, explain: "4 % 3 = 1, so the first call gives \"Mon\". For marks, 6 % 4 = 2 gives 90 and index 1 gives 85. Both results are Integers, so + adds: 175." },
        { t: 'code', q: "Complete the generic method <code>printReversed(T[] items)</code>: print the items from last to first on one line, separated by one space. The program reads <code>n</code> and <code>n</code> words, then calls your method on the words and on a fixed <code>Integer[]</code>. No prompts.", qAr: 'أكمل{{g:|ي}} الدالة العامة printReversed لطباعة العناصر بالعكس.',
          starter: J`
            import java.util.*;

            public class Main {
                public static <T> void printReversed(T[] items) {
                    // TODO: last item first, one space between items
                }

                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    String[] words = new String[n];
                    for (int i = 0; i < n; i++) {
                        words[i] = sc.next();
                    }
                    Integer[] nums = {1, 2, 3};
                    printReversed(words);
                    printReversed(nums);
                }
            }
          `,
          tests: [{ stdin: '3\nSun Mon Tue', expected: 'Tue Mon Sun\n3 2 1' }, { stdin: '1\nhello', expected: 'hello\n3 2 1' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static <T> void printReversed(T[] items) {
                    for (int i = items.length - 1; i >= 0; i--) {
                        System.out.print(items[i]);
                        if (i > 0) {
                            System.out.print(" ");
                        }
                    }
                    System.out.println();
                }

                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    String[] words = new String[n];
                    for (int i = 0; i < n; i++) {
                        words[i] = sc.next();
                    }
                    Integer[] nums = {1, 2, 3};
                    printReversed(words);
                    printReversed(nums);
                }
            }
          `,
          hint: "Loop with <code>for (int i = items.length - 1; i &gt;= 0; i--)</code>. Print a space only when <code>i &gt; 0</code>.",
          explain: "The same method prints a String array and an Integer array; T is inferred at each call." }
      ]
    },

    // ---------------------------------------------------------------- L3
    {
      title: 'Writing a generic class',
      titleAr: 'كتابة صنف عام',
      minutes: 35,
      body: [
        { type: 'h', en: 'A box that holds anything' },
        { type: 'p', en: "Sometimes a whole <b>class</b> should work for many types. Think of a <code>Box</code> that stores one item. Without generics you would write <code>StringBox</code>, <code>IntegerBox</code>, <code>DoubleBox</code>... A <b>generic class</b> declares a placeholder after its name: <code>class Box&lt;T&gt;</code>. Each time you create a box, you choose what T is.",
          ar: 'الصنف العام يعلن معامل النوع بعد اسمه، ونحدد النوع عند إنشاء الكائن.' },
        { type: 'analogy', title: 'A labelled lunchbox', en: "A lunchbox is the same plastic box for everyone. Today you label it \"sandwich\"; your friend labels hers \"fruit\". The box (the class) is the same. The label (the type argument) decides what goes inside." },
        { type: 'h', en: 'First, the old way: a box of Object' },
        { type: 'p', en: "Before generics, one box for everything was written with a field of type <code>Object</code>. Every class is a kind of Object (Unit 4), so the box accepts anything. The price is paid when you take the item out: you get back only an <code>Object</code>, and you must cast it." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  ObjectBox b = new ObjectBox("Laptop");
                  String s = (String) b.get();         // cast needed
                  System.out.println(s.toUpperCase());
                  // Integer n = (Integer) b.get();    // compiles, but crashes when it runs
              }
          }

          class ObjectBox {
              private Object content;
              public ObjectBox(Object content) { this.content = content; }
              public Object get() { return content; }
          }
        `, out: J`
          LAPTOP
        ` },
        { type: 'lines', rows: [
          ['private Object content;', 'The field can refer to any object at all.'],
          ['(String) b.get()', 'We must remember what we put in, and cast it back.'],
          ['// Integer n = (Integer) b.get();', 'If we remember wrongly, the compiler says nothing and the program stops with <code>ClassCastException</code>.']
        ], ar: 'الصندوق من نوع Object يقبل كل شيء، لكنه يحتاج cast عند الإخراج وقد ينهار البرنامج.' },
        { type: 'h', en: 'The generic version: Box&lt;T&gt;' },
        { type: 'p', en: "Now the same box with a type parameter. The class is written once, and the compiler remembers for you what each box holds." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Box<String> b1 = new Box<>("Laptop");
                  Box<Integer> b2 = new Box<>(250);
                  System.out.println(b1.get().toUpperCase());
                  System.out.println(b2.get() * 2);
                  b2.set(300);
                  System.out.println(b2);
                  // b2.set("three hundred");   // compile error: Box<Integer>
              }
          }

          class Box<T> {
              private T content;

              public Box(T content) {
                  this.content = content;
              }

              public T get() {
                  return content;
              }

              public void set(T content) {
                  this.content = content;
              }

              @Override
              public String toString() {
                  return "Box[" + content + "]";
              }
          }
        `, out: J`
          LAPTOP
          500
          Box[300]
        ` },
        { type: 'lines', title: 'Read the class', rows: [
          ['class Box<T>', 'T is the placeholder for the type of the content.'],
          ['private T content;', 'The field has type T. In a <code>Box&lt;String&gt;</code> it is a String.'],
          ['public Box(T content)', 'The constructor takes a T. Note: no <code>&lt;T&gt;</code> after the constructor name.'],
          ['public T get()', 'Returns a T. For <code>Box&lt;String&gt;</code> that means String.']
        ], ar: 'T يمكن استخدامه كنوع للحقول والمعاملات والقيم المعادة.' },
        { type: 'lines', title: 'Read main', rows: [
          ['Box<String> b1 = new Box<>("Laptop");', 'A box of String. The diamond <code>&lt;&gt;</code> lets Java infer the type.'],
          ['b1.get().toUpperCase()', '<code>get()</code> returns a String, so a String method works. Output LAPTOP.'],
          ['b2.get() * 2', 'Integer 250 times 2 = 500.'],
          ['b2.set(300)', 'Allowed: 300 is an Integer. A String would be a compile error.']
        ] },
        { type: 'p', en: "You have used generic classes for a long time without writing one. <code>ArrayList&lt;E&gt;</code>, <code>HashMap&lt;K, V&gt;</code> and <code>ArrayDeque&lt;E&gt;</code> from Unit 7 are generic classes written in the same way as <code>Box&lt;T&gt;</code>: a placeholder in the header, then fields, parameters and return types that use it. Now you can build your own containers for your own programs.",
          ar: 'الأصناف ArrayList و HashMap في Java مكتوبة بالطريقة نفسها: معامل نوع في رأس الصنف ثم استخدامه في الداخل.' },
        { type: 'check', q: 'In <code>Box&lt;String&gt; b = new Box&lt;&gt;("pen");</code> what does <code>b.get()</code> return?', options: ['Object', 'T', 'String', 'int'], answer: 2, explain: "T is replaced by String, so get() returns a String." },
        { type: 'note', kind: 'tip', en: "The constructor is <code>public Box(T content)</code>, <b>without</b> <code>&lt;T&gt;</code> after the name. The type parameter belongs only to the class header." },
        { type: 'table', head: ['', '<code>ObjectBox</code> (old way)', '<code>Box&lt;T&gt;</code> (generic)'], rows: [
          ['Create', '<code>new ObjectBox("Laptop")</code>', '<code>new Box&lt;&gt;("Laptop")</code>'],
          ['Take out', '<code>(String) b.get()</code>', '<code>b.get()</code>'],
          ['Put a wrong type in', 'Accepted', 'Compile error'],
          ['Who remembers the type?', 'You (and you may forget)', 'The compiler']
        ] },
        { type: 'memory', title: 'A Box&lt;String&gt; holds a reference to a String',
          en: "The box object does not contain the letters of \"Laptop\". Its field <code>content</code> holds a reference to a String object. Watch what <code>get</code> and <code>set</code> do to the arrows.",
          code: J`
            Box<String> b1 = new Box<>("Laptop");
            String s = b1.get();
            b1.set("Tablet");
          `,
          frames: [
            { label: 'After <code>Box&lt;String&gt; b1 = new Box&lt;&gt;("Laptop");</code>',
              vars: [{ name: 'b1', type: 'Box<String>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'Box<String>', fields: [{ name: 'content', ref: 'B' }] },
                { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"Laptop"' }] }] },
            { label: 'After <code>String s = b1.get();</code>: <code>s</code> refers to the same String (no cast)',
              vars: [{ name: 'b1', type: 'Box<String>', ref: 'A' }, { name: 's', type: 'String', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'Box<String>', fields: [{ name: 'content', ref: 'B' }] },
                { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"Laptop"' }] }] },
            { label: 'After <code>b1.set("Tablet");</code>: the box points to a new String; <code>s</code> still points to "Laptop"',
              vars: [{ name: 'b1', type: 'Box<String>', ref: 'A' }, { name: 's', type: 'String', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'Box<String>', fields: [{ name: 'content', ref: 'C' }] },
                { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"Laptop"' }] },
                { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"Tablet"' }] }] }
          ],
          ar: 'الحقل content يحفظ مرجعًا إلى كائن نصي. get تعيد المرجع نفسه، و set تجعل الصندوق يشير إلى كائن جديد.' },
        { type: 'h', en: 'One class, many types' },
        { type: 'p', en: "From one class you get many types: <code>Box&lt;String&gt;</code>, <code>Box&lt;Integer&gt;</code>, <code>Box&lt;Student&gt;</code>... For the compiler they are <b>different</b> types. A box of Strings cannot be stored in a variable for a box of Integers, and the other way round.",
          ar: 'من صنف واحد نحصل على أنواع كثيرة، والمترجم يعدّها أنواعًا مختلفة.' },
        { type: 'analogy', title: 'University lockers', en: "All lockers in the college building are the same model, made in the same factory. But locker 12 has the label \"books\" and locker 13 has the label \"sports kit\". Same design (the class), different labels (the type arguments). You would not put your football boots into the books locker." },
        { type: 'code', code: J`
          Box<String> name = new Box<>("Huda");
          Box<Integer> seats = new Box<>(30);
          // name = seats;          // compile error: Box<Integer> is not Box<String>
          // seats.set("thirty");   // compile error: "thirty" is not an Integer
        ` },
        { type: 'check', q: 'Which line compiles?', options: ['Box&lt;String&gt; a = new Box&lt;Integer&gt;(5);', 'Box&lt;Integer&gt; b = new Box&lt;&gt;(5);', 'Box&lt;Integer&gt; c = new Box&lt;&gt;("5");', 'Box&lt;int&gt; d = new Box&lt;&gt;(5);'], answer: 1, explain: "Only the second one matches: an Integer box with the Integer 5. \"5\" is a String, and <code>int</code> is primitive." },
        { type: 'h', en: 'Which types can T be?' },
        { type: 'p', en: "Any class: String, Integer, Double, Character, or your own classes like Student. Not primitives like <code>int</code>. Use the wrapper classes. Java converts automatically between <code>int</code> and <code>Integer</code> (this is called autoboxing)." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Box<Double> price = new Box<>(12.5);
                  Box<Character> grade = new Box<>('A');
                  System.out.println(price.get() + 1);
                  System.out.println(grade.get());
              }
          }

          class Box<T> {
              private T content;
              public Box(T content) { this.content = content; }
              public T get() { return content; }
          }
        `, out: J`
          13.5
          A
        ` },
        { type: 'lines', rows: [
          ['Box<Double>', 'Use <code>Double</code>, not <code>double</code>.'],
          ['new Box<>(12.5)', 'The decimal 12.5 is boxed automatically into a Double.'],
          ['price.get() + 1', '12.5 + 1 = 13.5.']
        ], ar: 'نستخدم Double وCharacter بدل الأنواع الأولية.' },
        { type: 'note', kind: 'exam', en: "You cannot write <code>new T()</code> or <code>new T[10]</code> inside a generic class, and you cannot use <code>Box&lt;int&gt;</code>.", ar: 'لا يمكن new T()‎ ولا Box&lt;int&gt;‎.' },
        { type: 'steps', title: 'Worked example: a label holder', problem: 'Create a generic class <code>Holder&lt;T&gt;</code> that stores one item and prints it in a sentence.',
          steps: [
            { en: 'Declare the class with a placeholder.', code: J`
              class Holder<T> {
            ` },
            { en: 'Add a private field of type T and a constructor.', code: J`
                  private T item;
                  public Holder(T item) { this.item = item; }
            ` },
            { en: 'Add a getter that returns T.', code: J`
                  public T getItem() { return item; }
              }
            ` },
            { en: 'Use the class twice with different types.', code: J`
              Holder<String> h1 = new Holder<>("pen");
              Holder<Integer> h2 = new Holder<>(3);
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Holder<String> h1 = new Holder<>("pen");
                    Holder<Integer> h2 = new Holder<>(3);
                    System.out.println("I have " + h2.getItem() + " " + h1.getItem() + "s");
                }
            }

            class Holder<T> {
                private T item;
                public Holder(T item) { this.item = item; }
                public T getItem() { return item; }
            }
          `, out: J`
            I have 3 pens
          `, ar: 'نفس الصنف Holder يحمل نصًا مرة وعددًا مرة أخرى.' },
        { type: 'steps', title: 'Worked example: a college locker', problem: 'Write a generic class <code>Locker&lt;T&gt;</code>. A locker has a number and may hold one item. It has <code>isEmpty()</code>, <code>put(T item)</code> and <code>take()</code>, which gives the item back and leaves the locker empty. Use one locker for a book title and one for a pile of 50 papers.',
          steps: [
            { en: 'The class has a type parameter, an <code>int</code> field for the number and a <code>T</code> field for the item. A new locker is empty, so the item starts as <code>null</code> (no object).', code: J`
              class Locker<T> {
                  private int number;
                  private T item;

                  public Locker(int number) {
                      this.number = number;
                      this.item = null;
                  }
            ` },
            { en: 'The locker is empty when <code>item</code> is <code>null</code>. <code>put</code> accepts only a <code>T</code>.', code: J`
                  public boolean isEmpty() {
                      return item == null;
                  }

                  public void put(T item) {
                      this.item = item;
                  }
            ` },
            { en: '<code>take</code> returns a <code>T</code>: save the item in a local variable, empty the locker, then return the saved item.', code: J`
                  public T take() {
                      T result = item;
                      item = null;
                      return result;
                  }
            ` },
            { en: 'Add <code>toString</code>, then use a <code>Locker&lt;String&gt;</code> and a <code>Locker&lt;Integer&gt;</code> in <code>main</code>.', code: J`
              Locker<String> books = new Locker<>(12);
              Locker<Integer> papers = new Locker<>(7);
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Locker<String> books = new Locker<>(12);
                    Locker<Integer> papers = new Locker<>(7);
                    System.out.println(books.isEmpty());
                    books.put("Java textbook");
                    papers.put(50);
                    System.out.println(books);
                    String b = books.take();
                    System.out.println("Took: " + b);
                    System.out.println(books.isEmpty());
                    System.out.println(papers.take() + 25);
                }
            }

            class Locker<T> {
                private int number;
                private T item;

                public Locker(int number) {
                    this.number = number;
                    this.item = null;
                }

                public boolean isEmpty() {
                    return item == null;
                }

                public void put(T item) {
                    this.item = item;
                }

                public T take() {
                    T result = item;
                    item = null;
                    return result;
                }

                @Override
                public String toString() {
                    return "Locker " + number + ": " + item;
                }
            }
          `, out: J`
            true
            Locker 12: Java textbook
            Took: Java textbook
            true
            75
          `, ar: 'take تعيد العنصر من النوع T ثم تفرغ الخزانة. خزانة الكتب تعيد String وخزانة الأوراق تعيد Integer.' }
      ],
      mistakes: [
        { title: 'Primitive type argument', en: "Use the wrapper class.", code: J`
          Box<int> b = new Box<>(5);    // compile error
        ` },
        { title: 'Forgetting &lt;T&gt; in the class header', en: "Without it, T is an unknown type.", code: J`
          class Box {                    // missing <T>
              private T content;         // error: cannot find symbol T
          }
        ` },
        { title: 'Putting the wrong type into a box', en: "A <code>Box&lt;Integer&gt;</code> accepts only Integers.", code: J`
          Box<Integer> b = new Box<>(1);
          b.set("one");                  // compile error
        ` },
        { title: 'Writing &lt;T&gt; after the constructor name', en: "Write <code>public Box(T x)</code>, not <code>public Box&lt;T&gt;(T x)</code>." }
      ],
      remember: [
        "A generic class has a placeholder after its name: <code>class Box&lt;T&gt;</code>.",
        "Inside the class, T is used as a normal type.",
        "You choose T when you create an object: <code>new Box&lt;&gt;(...)</code>.",
        "T must be a class (<code>Integer</code>, not <code>int</code>).",
        "No <code>new T()</code> and no <code>new T[n]</code>.",
        "<code>Box&lt;String&gt;</code> and <code>Box&lt;Integer&gt;</code> are different types; no casts are needed when you take an item out."
      ],
      rememberAr: 'الصنف العام يعلن ‎&lt;T&gt;‎ بعد اسمه، ونختار النوع عند إنشاء الكائن. لا نستخدم الأنواع الأولية.',
      practice: [
        { t: 'mcq', q: "Which is the correct header of a generic class?", options: ['class Box&lt;T&gt;', 'class &lt;T&gt; Box', 'class Box(T)', 'generic class Box'], answer: 0, explain: "The placeholder is written in angle brackets after the class name." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Box<String> b = new Box<>("tea");
                  System.out.println(b.get());
              }
          }

          class Box<T> {
              private T content;
              public Box(T content) { this.content = content; }
              public T get() { return content; }
          }
        `, answer: 'tea', explain: "The box stores \"tea\" and get() returns it." },
        { t: 'mcq', q: 'Which line does <b>not</b> compile?', options: ['Box&lt;Double&gt; d = new Box&lt;&gt;(2.5);', 'Box&lt;int&gt; n = new Box&lt;&gt;(5);', 'Box&lt;Character&gt; c = new Box&lt;&gt;(\'x\');', 'Box&lt;String&gt; s = new Box&lt;&gt;("hi");'], answer: 1, explain: "Type arguments must be classes. Use <code>Box&lt;Integer&gt;</code>." },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void main(String[] args) {
                  Box<Integer> a = new Box<>(7);
                  Box<String> b = new Box<>("7");
                  System.out.println(a.get() + a.get());
                  System.out.println(b.get() + b.get());
                  a.set(a.get() * 3);
                  System.out.println(a.get());
              }
          }

          class Box<T> {
              private T content;
              public Box(T content) { this.content = content; }
              public T get() { return content; }
              public void set(T content) { this.content = content; }
          }
        `, answer: J`
          14
          77
          21
        `, explain: "With Integer, + adds: 14. With String, + joins text: \"77\". Then 7 * 3 = 21.", explainAr: 'مع Integer تكون + جمعًا، ومع String تكون + دمجًا للنصوص.' },
        { t: 'fill', q: 'Complete the generic class header and the object creation.', code: J`
          class Holder___ {
              private T item;
              public Holder(T item) { this.item = item; }
              public T getItem() { return item; }
          }

          Holder<String> h = new Holder___("pen");
        `, answers: ['<T>', '<>'], explain: "The class declares <code>&lt;T&gt;</code>; the diamond <code>&lt;&gt;</code> lets Java infer String." },
        { t: 'order', q: "Put the lines in order to build the class.", lines: [
          'class Box<T> {',
          '    private T content;',
          '    public Box(T content) { this.content = content; }',
          '    public T get() { return content; }',
          '}'
        ], explain: "Header with T, field, constructor, getter, closing brace." },
        { t: 'mcq', q: "In <code>Box&lt;Double&gt; b</code>, what type does <code>b.get()</code> return?", options: ['T', 'double', 'Double', 'Object'], answer: 2, explain: "T is replaced by Double." },
        { t: 'code', q: "Complete the class <code>Box&lt;T&gt;</code> (field, constructor, <code>get()</code>). The program reads a word, puts it in a <code>Box&lt;String&gt;</code> and prints the word in capital letters. No prompts.", qAr: 'أكمل الصنف Box ثم اطبع الكلمة بأحرف كبيرة.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Box<String> b = new Box<>(sc.next());
                    System.out.println(b.get().toUpperCase());
                }
            }

            class Box<T> {
                // field, constructor, get()
            }
          `,
          tests: [{ stdin: 'laptop', expected: 'LAPTOP' }, { stdin: 'Riyadh', expected: 'RIYADH' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Box<String> b = new Box<>(sc.next());
                    System.out.println(b.get().toUpperCase());
                }
            }

            class Box<T> {
                private T content;

                public Box(T content) {
                    this.content = content;
                }

                public T get() {
                    return content;
                }
            }
          `,
          hint: "Field: <code>private T content;</code>. The constructor takes a <code>T</code>. <code>get()</code> returns <code>T</code>.",
          explain: "For Box&lt;String&gt;, get() returns a String, so toUpperCase() is allowed." },
        { t: 'bug', q: "The programmer wants an empty box that is filled later. The code does not compile. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Box<String> b = new Box<>();
                    System.out.println(b.get());
                }
            }

            class Box<T> {
                private T content;
                public Box() { content = new T(); }
                public T get() { return content; }
            }
          `, bug: 10,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Box<String> b = new Box<>();
                    System.out.println(b.get());
                }
            }

            class Box<T> {
                private T content;
                public Box() { content = null; }
                public T get() { return content; }
            }
          `,
          hint: "Can Java build an object when it does not know its class?",
          explain: "<code>new T()</code> is not allowed: T is only a placeholder, and when the program runs Java does not know which class to build (and that class may have no empty constructor). An empty box starts with <code>null</code>; the real object comes from outside, through <code>set</code> or a constructor parameter. The fixed program prints <code>null</code>.",
          explainAr: 'لا يمكن كتابة new T()‎ لأن Java لا تعرف الصنف الحقيقي وقت التشغيل. نبدأ بـ null ونأخذ الكائن من الخارج.' },
        { t: 'bug', q: "This class should be generic, but it does not compile. Tap the line where the real mistake is. (Two answers are accepted.)",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Box<Double> price = new Box<>(12.5);
                    System.out.println(price.get());
                }
            }

            class Box {
                private T content;
                public Box(T content) { this.content = content; }
                public T get() { return content; }
            }
          `, bug: [8, 9],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Box<Double> price = new Box<>(12.5);
                    System.out.println(price.get());
                }
            }

            class Box<T> {
                private T content;
                public Box(T content) { this.content = content; }
                public T get() { return content; }
            }
          `,
          hint: "Where must the placeholder T be declared?",
          explain: "The class header on line 8 forgot <code>&lt;T&gt;</code>. Without it, T is an unknown name, so the compiler reports \"cannot find symbol T\" on line 9 and the next lines. Declare it in the header: <code>class Box&lt;T&gt;</code>. The fixed program prints 12.5.",
          explainAr: 'يجب إعلان ‎&lt;T&gt;‎ بعد اسم الصنف وإلا فلن يعرف المترجم ما هو T.' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Locker<String> l = new Locker<>();
                  l.put("charger");
                  System.out.println(l.isEmpty());
                  String x = l.take();
                  String y = l.take();
                  System.out.println(x + " " + y);
                  System.out.println(l.isEmpty());
              }
          }

          class Locker<T> {
              private T item;
              public boolean isEmpty() { return item == null; }
              public void put(T item) { this.item = item; }
              public T take() {
                  T result = item;
                  item = null;
                  return result;
              }
          }
        `, answer: J`
          false
          charger null
          true
        `, explain: "After <code>put</code> the locker is not empty (false). The first <code>take</code> returns \"charger\" and empties it, so the second <code>take</code> returns <code>null</code>. Joining a null reference to a String prints the word null. At the end the locker is empty (true)." },
        { t: 'code', q: "Complete the generic class <code>Locker&lt;T&gt;</code>: <code>isEmpty()</code>, <code>put(T item)</code>, and <code>take()</code> (returns the item and empties the locker). The program reads a word and an integer, puts them in two lockers and prints three lines. No prompts.", qAr: 'أكمل{{g:|ي}} الصنف العام Locker بالدوال isEmpty و put و take.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Locker<String> a = new Locker<>();
                    Locker<Integer> b = new Locker<>();
                    a.put(sc.next());
                    b.put(sc.nextInt());
                    System.out.println(a.take().toUpperCase());
                    System.out.println(a.isEmpty());
                    System.out.println(b.take() * 2);
                }
            }

            class Locker<T> {
                private T item;

                // isEmpty(), put(T item), take()
            }
          `,
          tests: [{ stdin: 'book 21', expected: 'BOOK\ntrue\n42' }, { stdin: 'pen 5', expected: 'PEN\ntrue\n10' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Locker<String> a = new Locker<>();
                    Locker<Integer> b = new Locker<>();
                    a.put(sc.next());
                    b.put(sc.nextInt());
                    System.out.println(a.take().toUpperCase());
                    System.out.println(a.isEmpty());
                    System.out.println(b.take() * 2);
                }
            }

            class Locker<T> {
                private T item;

                public boolean isEmpty() {
                    return item == null;
                }

                public void put(T item) {
                    this.item = item;
                }

                public T take() {
                    T result = item;
                    item = null;
                    return result;
                }
            }
          `,
          hint: "In <code>take</code>: save <code>item</code> in a local <code>T result</code>, set <code>item = null</code>, then return <code>result</code>.",
          explain: "Because <code>take</code> returns T, <code>a.take()</code> is a String (so <code>toUpperCase</code> works) and <code>b.take()</code> is an Integer (so <code>* 2</code> works)." }
      ]
    },
    // ---------------------------------------------------------------- L4
    {
      title: 'Two type parameters and a generic stack',
      titleAr: 'معاملا نوع ومكدس عام',
      minutes: 35,
      body: [
        { type: 'h', en: 'Pair: two placeholders' },
        { type: 'p', en: "Sometimes you want to store two values of <i>different</i> types together: a room name and its capacity, or a product and its price. A class may have several placeholders, separated by commas: <code>Pair&lt;K, V&gt;</code> (K for key, V for value).",
          ar: 'يمكن للصنف أن يملك أكثر من معامل نوع مفصولة بفواصل.' },
        { type: 'analogy', title: 'A tag on a key', en: "A hotel key has a tag. The key is one thing (a number) and the tag is another (a room name). A Pair is a key with a tag: two parts, each with its own type." },
        { type: 'p', en: "Why not one <code>Object</code> pair for everything? You can, but then <i>both</i> parts come out as <code>Object</code> and need casts. Look at the old way first." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  ObjectPair p = new ObjectPair("Lab A", 30);
                  String room = (String) p.getFirst();     // cast 1
                  int seats = (Integer) p.getSecond();     // cast 2
                  System.out.println(room + " has " + seats + " seats");
              }
          }

          class ObjectPair {
              private Object first;
              private Object second;
              public ObjectPair(Object first, Object second) { this.first = first; this.second = second; }
              public Object getFirst() { return first; }
              public Object getSecond() { return second; }
          }
        `, out: J`
          Lab A has 30 seats
        ` },
        { type: 'p', en: "Two casts, and nothing stops someone from writing <code>new ObjectPair(30, \"Lab A\")</code> by mistake. The generic <code>Pair&lt;K, V&gt;</code> below needs no casts, and the compiler checks the order of the parts.",
          ar: 'الزوج من نوع Object يحتاج cast لكل جزء، أما Pair&lt;K, V&gt;‎ فيتحقق المترجم من نوع كل جزء.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Pair<String, Integer> room = new Pair<>("Lab A", 30);
                  Pair<String, Double> price = new Pair<>("Coffee", 12.5);
                  System.out.println(room);
                  System.out.println(room.swap());
                  System.out.println(price.getKey() + " costs " + price.getValue());
              }
          }

          class Pair<K, V> {
              private K key;
              private V value;

              public Pair(K key, V value) {
                  this.key = key;
                  this.value = value;
              }

              public K getKey() { return key; }

              public V getValue() { return value; }

              public Pair<V, K> swap() {
                  return new Pair<>(value, key);
              }

              @Override
              public String toString() {
                  return "(" + key + ", " + value + ")";
              }
          }
        `, out: J`
          (Lab A, 30)
          (30, Lab A)
          Coffee costs 12.5
        ` },
        { type: 'lines', rows: [
          ['class Pair<K, V>', 'Two placeholders: K for the first part, V for the second.'],
          ['Pair<String, Integer>', 'K = String (the name), V = Integer (the capacity).'],
          ['price.getValue()', 'For <code>Pair&lt;String, Double&gt;</code> this returns a Double: 12.5.'],
          ['public Pair<V, K> swap()', 'Returns a <i>new</i> pair with the parts exchanged, so the types are exchanged too: <code>Pair&lt;Integer, String&gt;</code> for room.'],
          ['new Pair<>(value, key)', 'The value comes first now.']
        ], ar: 'swap تعيد زوجًا جديدًا بعد تبديل الجزأين وتبديل نوعيهما.' },
        { type: 'check', q: 'What is the type of <code>room.swap()</code> when <code>room</code> is <code>Pair&lt;String, Integer&gt;</code>?', options: ['Pair&lt;String, Integer&gt;', 'Pair&lt;Integer, String&gt;', 'Pair&lt;String, String&gt;', 'Object'], answer: 1, explain: "swap returns Pair&lt;V, K&gt;: V is Integer, K is String." },
        { type: 'memory', title: 'A Pair holds two different objects',
          en: "A <code>Pair&lt;String, Integer&gt;</code> object has two fields, and each one refers to an object of its own type. <code>swap()</code> builds a <i>new</i> pair, but it does not copy the parts: both pairs point to the same String and the same Integer.",
          code: J`
            Pair<String, Integer> room = new Pair<>("Lab A", 30);
            Pair<Integer, String> back = room.swap();
          `,
          frames: [
            { label: 'After <code>Pair&lt;String, Integer&gt; room = new Pair&lt;&gt;("Lab A", 30);</code>',
              vars: [{ name: 'room', type: 'Pair<String, Integer>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'Pair<String, Integer>', fields: [{ name: 'key', ref: 'B' }, { name: 'value', ref: 'C' }] },
                { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"Lab A"' }] },
                { id: 'C', cls: 'Integer', fields: [{ name: 'value', value: '30' }] }] },
            { label: 'After <code>Pair&lt;Integer, String&gt; back = room.swap();</code>: a new pair with the arrows exchanged',
              vars: [{ name: 'room', type: 'Pair<String, Integer>', ref: 'A' }, { name: 'back', type: 'Pair<Integer, String>', ref: 'D' }],
              objects: [
                { id: 'A', cls: 'Pair<String, Integer>', fields: [{ name: 'key', ref: 'B' }, { name: 'value', ref: 'C' }] },
                { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"Lab A"' }] },
                { id: 'C', cls: 'Integer', fields: [{ name: 'value', value: '30' }] },
                { id: 'D', cls: 'Pair<Integer, String>', fields: [{ name: 'key', ref: 'C' }, { name: 'value', ref: 'B' }] }] }
          ],
          ar: 'كل حقل في الزوج يشير إلى كائن من نوعه. swap تنشئ زوجًا جديدًا يشير إلى الكائنين نفسيهما بترتيب معكوس.' },
        { type: 'p', en: "A pair can be an item of a list. Notice the double angle brackets: a list whose items are pairs." },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Pair<String, Integer>> labs = new ArrayList<>();
                  labs.add(new Pair<>("Lab A", 30));
                  labs.add(new Pair<>("Lab B", 25));
                  int seats = 0;
                  for (Pair<String, Integer> p : labs) {
                      seats += p.getValue();
                  }
                  System.out.println("Total seats: " + seats);
              }
          }

          class Pair<K, V> {
              private K key;
              private V value;
              public Pair(K key, V value) { this.key = key; this.value = value; }
              public K getKey() { return key; }
              public V getValue() { return value; }
          }
        `, out: J`
          Total seats: 55
        ` },
        { type: 'lines', rows: [
          ['ArrayList<Pair<String, Integer>>', 'A list of pairs. Read from the inside out.'],
          ['for (Pair<String, Integer> p : labs)', 'Each p is one pair.'],
          ['seats += p.getValue();', 'getValue() is an Integer: 30, then 25. Total 55.']
        ] },
        { type: 'h', en: 'Returning two results from one method' },
        { type: 'p', en: "A method can return only <b>one</b> value. What if a teacher wants both the lowest and the highest mark of a class from one method? Return one <code>Pair</code> that carries both. The types in the return type tell the caller exactly what comes back.",
          ar: 'الدالة تعيد قيمة واحدة فقط، لكن هذه القيمة يمكن أن تكون زوجًا يحمل نتيجتين.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static Pair<Integer, Integer> minMax(int[] marks) {
                  int min = marks[0];
                  int max = marks[0];
                  for (int m : marks) {
                      if (m < min) {
                          min = m;
                      }
                      if (m > max) {
                          max = m;
                      }
                  }
                  return new Pair<>(min, max);
              }

              public static void main(String[] args) {
                  int[] marks = {72, 95, 60, 88};
                  Pair<Integer, Integer> r = minMax(marks);
                  System.out.println("Lowest: " + r.getKey() + ", highest: " + r.getValue());
              }
          }

          class Pair<K, V> {
              private K key;
              private V value;
              public Pair(K key, V value) { this.key = key; this.value = value; }
              public K getKey() { return key; }
              public V getValue() { return value; }
          }
        `, out: J`
          Lowest: 60, highest: 95
        ` },
        { type: 'lines', rows: [
          ['public static Pair<Integer, Integer> minMax(int[] marks)', 'The return type says: "I give back a pair of two Integers".'],
          ['return new Pair<>(min, max);', 'The two int values are boxed into Integers and packed into one object.'],
          ['r.getKey() and r.getValue()', 'The caller unpacks the two results: 60 and 95.']
        ] },
        { type: 'check', q: 'A method must return a student\'s name and GPA together. Which return type fits best?', options: ['Pair&lt;String, Double&gt;', 'Pair&lt;String&gt;', 'Pair&lt;double, String&gt;', 'String'], answer: 0, explain: "K = String for the name, V = Double for the GPA. Pair needs two class types." },
        { type: 'h', en: 'A generic data structure: stack' },
        { type: 'p', en: "A <b>stack</b> works like a pile of plates: you add on top (<b>push</b>) and take from the top (<b>pop</b>). A browser's history works like this. Written once with a placeholder <code>E</code> (element), the stack can hold Strings, numbers, or anything.",
          ar: 'المكدس: آخر عنصر يدخل هو أول عنصر يخرج.' },
        { type: 'steps', title: 'Worked example: browser history', problem: 'Build a GenericStack&lt;E&gt; with push, pop, peek and size, and use it for visited pages.',
          steps: [
            { en: 'Store the items inside an <code>ArrayList&lt;E&gt;</code>.', code: J`
              class GenericStack<E> {
                  private ArrayList<E> list = new ArrayList<>();
            ` },
            { en: '<code>push</code> adds to the end of the list (the "top").', code: J`
                  public void push(E item) {
                      list.add(item);
                  }
            ` },
            { en: '<code>pop</code> removes and returns the last item. <code>peek</code> only looks at it.', code: J`
                  public E pop() { return list.remove(list.size() - 1); }
                  public E peek() { return list.get(list.size() - 1); }
            ` },
            { en: 'Use it with Strings: push three pages, pop one, peek, then print the size.', code: J`
              GenericStack<String> history = new GenericStack<>();
              history.push("home");
              history.push("courses");
              history.push("cs102");
            ` }
          ],
          code: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    GenericStack<String> history = new GenericStack<>();
                    history.push("home");
                    history.push("courses");
                    history.push("cs102");
                    System.out.println(history.pop());
                    System.out.println(history.peek());
                    System.out.println(history.size());
                }
            }

            class GenericStack<E> {
                private ArrayList<E> list = new ArrayList<>();

                public void push(E item) {
                    list.add(item);
                }

                public E pop() {
                    return list.remove(list.size() - 1);
                }

                public E peek() {
                    return list.get(list.size() - 1);
                }

                public boolean isEmpty() {
                    return list.isEmpty();
                }

                public int size() {
                    return list.size();
                }
            }
          `, out: J`
            cs102
            courses
            2
          `, ar: 'pop تزيل آخر عنصر وتعيده، وpeek تنظر إليه فقط. بعد pop يبقى عنصران.' },
        { type: 'check', q: 'After pushing 1, 2, 3 and calling <code>pop()</code> once, what does <code>peek()</code> return?', options: ['1', '2', '3', 'nothing'], answer: 1, explain: "pop removed 3. The new top is 2." },
        { type: 'memory', title: 'Inside the stack: a list of references',
          en: "The stack object has one field, <code>list</code>. That ArrayList keeps references to the pages in order; the last one is the top. Watch what happens to the popped page when nobody keeps it.",
          code: J`
            GenericStack<String> history = new GenericStack<>();
            history.push("home");
            history.push("courses");
            history.push("cs102");
            history.pop();
            String top = history.peek();
          `,
          frames: [
            { label: 'After the three <code>push</code> calls: "cs102" is on top (index 2)',
              vars: [{ name: 'history', type: 'GenericStack<String>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'GenericStack<String>', fields: [{ name: 'list', ref: 'B' }] },
                { id: 'B', cls: 'ArrayList<String>', fields: [{ name: '[0]', ref: 'C' }, { name: '[1]', ref: 'D' }, { name: '[2]', ref: 'E' }] },
                { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"home"' }] },
                { id: 'D', cls: 'String', fields: [{ name: 'text', value: '"courses"' }] },
                { id: 'E', cls: 'String', fields: [{ name: 'text', value: '"cs102"' }] }] },
            { label: 'After <code>history.pop();</code>: the last reference is removed. Nothing refers to "cs102" now',
              vars: [{ name: 'history', type: 'GenericStack<String>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'GenericStack<String>', fields: [{ name: 'list', ref: 'B' }] },
                { id: 'B', cls: 'ArrayList<String>', fields: [{ name: '[0]', ref: 'C' }, { name: '[1]', ref: 'D' }] },
                { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"home"' }] },
                { id: 'D', cls: 'String', fields: [{ name: 'text', value: '"courses"' }] },
                { id: 'E', cls: 'String', fields: [{ name: 'text', value: '"cs102"' }], gone: true }] },
            { label: 'After <code>String top = history.peek();</code>: <code>top</code> refers to "courses", which stays in the stack',
              vars: [{ name: 'history', type: 'GenericStack<String>', ref: 'A' }, { name: 'top', type: 'String', ref: 'D' }],
              objects: [
                { id: 'A', cls: 'GenericStack<String>', fields: [{ name: 'list', ref: 'B' }] },
                { id: 'B', cls: 'ArrayList<String>', fields: [{ name: '[0]', ref: 'C' }, { name: '[1]', ref: 'D' }] },
                { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"home"' }] },
                { id: 'D', cls: 'String', fields: [{ name: 'text', value: '"courses"' }] }] }
          ],
          ar: 'المكدس يحفظ قائمة مراجع، والقمة هي آخر عنصر. pop تزيل المرجع الأخير، و peek تنظر فقط دون إزالة.' },
        { type: 'analogy', title: 'The same tray stand for everything', en: "A cafeteria tray stand works the same way whether it holds trays, plates or cups: the last one put on top is the first one taken. <code>GenericStack&lt;E&gt;</code> is that stand. The stack class is written once; <code>E</code> decides whether it holds Strings, Integers or Characters." },
        { type: 'steps', title: 'Worked example: reverse a word with a stack', problem: 'Use the same <code>GenericStack</code>, this time with <code>Character</code>, to print the word "Riyadh" backwards.',
          steps: [
            { en: 'Create a stack of <code>Character</code> (the wrapper class of <code>char</code>).', code: J`
              GenericStack<Character> stack = new GenericStack<>();
            ` },
            { en: 'Push every letter, from the first to the last. The last letter ends on top.', code: J`
              for (int i = 0; i < word.length(); i++) {
                  stack.push(word.charAt(i));
              }
            ` },
            { en: 'Pop until the stack is empty. Letters come out in the opposite order. Joining a Character to a String adds the letter.', code: J`
              String reversed = "";
              while (!stack.isEmpty()) {
                  reversed += stack.pop();
              }
            ` },
            { en: 'Print the result.', code: J`
              System.out.println(reversed);
            ` }
          ],
          code: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    String word = "Riyadh";
                    GenericStack<Character> stack = new GenericStack<>();
                    for (int i = 0; i < word.length(); i++) {
                        stack.push(word.charAt(i));
                    }
                    String reversed = "";
                    while (!stack.isEmpty()) {
                        reversed += stack.pop();
                    }
                    System.out.println(reversed);
                }
            }

            class GenericStack<E> {
                private ArrayList<E> list = new ArrayList<>();

                public void push(E item) {
                    list.add(item);
                }

                public E pop() {
                    return list.remove(list.size() - 1);
                }

                public boolean isEmpty() {
                    return list.isEmpty();
                }
            }
          `, out: J`
            hdayiR
          `, ar: 'نضع الحروف في المكدس ثم نخرجها، فتخرج بترتيب معكوس. المكدس نفسه يعمل مع Character.' },
        { type: 'h', en: 'Static members cannot use the class\'s T' },
        { type: 'p', en: "A <code>static</code> member belongs to the class itself, not to one object. But T is chosen per object: one stack has E = String, another has E = Integer. So inside a static method the class's E has no meaning. If a static method needs a type, it declares its <b>own</b> placeholder, like the generic methods of Lesson 2.",
          ar: 'العضو static يخص الصنف كله، و T يختلف من كائن لآخر؛ لذلك تعلن الدالة الساكنة معامل نوع خاصًا بها.' },
        { type: 'code', code: J`
          class Pair<K, V> {
              public static void show(K item) { }          // compile error: K belongs to objects
              public static <T> void show2(T item) { }     // OK: the method has its own T
          }
        ` },
        { type: 'note', kind: 'exam', en: "A <code>static</code> field or method cannot use the class's T. Also remember: no <code>new T()</code> and no primitives as type arguments.", ar: 'لا يمكن استخدام T في عضو static.' }
      ],
      mistakes: [
        { title: 'Wrong number of type arguments', en: "<code>Pair&lt;String&gt;</code> is an error: Pair needs two (K and V)." },
        { title: 'Mixing the order of K and V', en: "<code>Pair&lt;String, Integer&gt;</code> means key String and value Integer. <code>new Pair&lt;&gt;(30, \"Lab A\")</code> does not fit it." },
        { title: 'Popping an empty stack', en: "<code>pop()</code> on an empty stack crashes with an exception. Check <code>isEmpty()</code> first." },
        { title: 'Forgetting the second &gt;', en: "<code>ArrayList&lt;Pair&lt;String, Integer&gt;&gt;</code> needs two closing brackets." }
      ],
      remember: [
        "Several placeholders are separated by commas: <code>Pair&lt;K, V&gt;</code>.",
        "Each placeholder is replaced by its own type when you create the object.",
        "A method may return a generic type built from the placeholders (<code>Pair&lt;V, K&gt;</code>).",
        "A generic stack: <code>push</code> adds on top, <code>pop</code> removes the top, <code>peek</code> looks at it.",
        "Generic classes can be nested: <code>ArrayList&lt;Pair&lt;String, Integer&gt;&gt;</code>.",
        "A <code>static</code> member cannot use the class's T; a static method declares its own <code>&lt;T&gt;</code>."
      ],
      rememberAr: 'يمكن استعمال أكثر من معامل نوع مثل Pair&lt;K, V&gt;‎. المكدس: push للإضافة وpop للإزالة وpeek للنظر فقط.',
      practice: [
        { t: 'mcq', q: "How many type arguments does <code>Pair&lt;K, V&gt;</code> need?", options: ['One', 'Two', 'Three', 'None'], answer: 1, explain: "K and V: one argument for each." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Pair<String, Integer> p = new Pair<>("Exam", 90);
                  System.out.println(p.getKey());
                  System.out.println(p.getValue() + 5);
              }
          }

          class Pair<K, V> {
              private K key;
              private V value;
              public Pair(K key, V value) { this.key = key; this.value = value; }
              public K getKey() { return key; }
              public V getValue() { return value; }
          }
        `, answer: J`
          Exam
          95
        `, explain: "getKey() is a String; getValue() is an Integer, so 90 + 5 = 95." },
        { t: 'mcq', q: "Which declaration is correct?", options: ['Pair&lt;String&gt; p;', 'Pair&lt;String, Integer&gt; p;', 'Pair&lt;String Integer&gt; p;', 'Pair&lt;int, int&gt; p;'], answer: 1, explain: "Two class types separated by a comma." },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  GenericStack<Integer> s = new GenericStack<>();
                  for (int i = 1; i <= 4; i++) {
                      s.push(i * 10);
                  }
                  int a = s.pop();
                  int b = s.pop();
                  System.out.println(a + " " + b);
                  System.out.println(s.peek() + " " + s.size());
              }
          }

          class GenericStack<E> {
              private ArrayList<E> list = new ArrayList<>();
              public void push(E item) { list.add(item); }
              public E pop() { return list.remove(list.size() - 1); }
              public E peek() { return list.get(list.size() - 1); }
              public int size() { return list.size(); }
          }
        `, answer: J`
          40 30
          20 2
        `, explain: "The stack holds 10, 20, 30, 40 (40 on top). Two pops give 40 then 30. The top is now 20 and two items remain." },
        { t: 'fill', q: "Complete the class header and the object creation.", code: J`
          class Pair___ {
              private K key;
              private V value;
          }

          Pair<String, Double> p = new Pair___();
        `, answers: ['<K, V>', '<>'], explain: "Two placeholders in the header; the diamond infers the types." },
        { t: 'order', q: "Put the lines in order to use the stack.", lines: [
          'GenericStack<String> history = new GenericStack<>();',
          'history.push("home");',
          'history.push("courses");',
          'System.out.println(history.pop());'
        ], explain: "Create, push twice, then pop. The output is courses." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Pair<String, Integer> a = new Pair<>("Exam", 90);
                  Pair<Integer, String> b = a.swap();
                  System.out.println(b.getKey() + 10);
                  System.out.println(b.getValue().length());
              }
          }

          class Pair<K, V> {
              private K key;
              private V value;
              public Pair(K key, V value) { this.key = key; this.value = value; }
              public K getKey() { return key; }
              public V getValue() { return value; }
              public Pair<V, K> swap() { return new Pair<>(value, key); }
          }
        `, answer: J`
          100
          4
        `, explain: "b is (90, \"Exam\"). b.getKey() is the Integer 90, so 90 + 10 = 100. b.getValue() is the String \"Exam\" with length 4." },
        { t: 'code', q: "Complete the generic class <code>Pair&lt;K, V&gt;</code>: add a constructor, <code>toString()</code> returning <code>(key, value)</code>, and <code>swap()</code> that returns a new <code>Pair&lt;V, K&gt;</code>. The program reads a name and an integer and prints the pair and its swapped version. No prompts.", qAr: 'أكمل الصنف العام Pair وأضف الدالة swap.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    String name = in.next();
                    int age = in.nextInt();
                    Pair<String, Integer> p = new Pair<>(name, age);
                    System.out.println(p);
                    System.out.println(p.swap());
                }
            }

            class Pair<K, V> {
                private K key;
                private V value;

                // constructor

                // swap(): returns Pair<V, K>

                // toString(): "(" + key + ", " + value + ")"
            }
          `,
          tests: [{ stdin: 'Mona 21', expected: '(Mona, 21)\n(21, Mona)' }, { stdin: 'Ali 5', expected: '(Ali, 5)\n(5, Ali)' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    String name = in.next();
                    int age = in.nextInt();
                    Pair<String, Integer> p = new Pair<>(name, age);
                    System.out.println(p);
                    System.out.println(p.swap());
                }
            }

            class Pair<K, V> {
                private K key;
                private V value;

                public Pair(K key, V value) {
                    this.key = key;
                    this.value = value;
                }

                public Pair<V, K> swap() {
                    return new Pair<>(value, key);
                }

                @Override
                public String toString() {
                    return "(" + key + ", " + value + ")";
                }
            }
          `,
          hint: "The return type of swap is <code>Pair&lt;V, K&gt;</code>; create it with <code>new Pair&lt;&gt;(value, key)</code>.",
          explain: "Inside the class K and V are ordinary types, so a method can build a Pair with the type arguments in the opposite order." },
        { t: 'bug', q: "The programmer added a static helper to <code>Pair</code>. The code does not compile. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Pair<String, Integer> p = new Pair<>("Abha", 22);
                    Pair.show(p.getKey());
                }
            }

            class Pair<K, V> {
                private K key;
                private V value;
                public Pair(K key, V value) { this.key = key; this.value = value; }
                public K getKey() { return key; }
                public static void show(K item) { System.out.println("[" + item + "]"); }
            }
          `, bug: 13,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Pair<String, Integer> p = new Pair<>("Abha", 22);
                    Pair.show(p.getKey());
                }
            }

            class Pair<K, V> {
                private K key;
                private V value;
                public Pair(K key, V value) { this.key = key; this.value = value; }
                public K getKey() { return key; }
                public static <T> void show(T item) { System.out.println("[" + item + "]"); }
            }
          `,
          hint: "K is chosen per object. Does a static method belong to an object?",
          explain: "Line 13 uses the class's K inside a <code>static</code> method. Static methods belong to the class, not to one pair, so K has no meaning there (\"non-static type variable K cannot be referenced from a static context\"). Give the method its own placeholder: <code>public static &lt;T&gt; void show(T item)</code>. The fixed program prints <code>[Abha]</code>.",
          explainAr: 'لا يمكن استخدام K الخاص بالصنف داخل دالة static؛ نعطي الدالة معامل نوع خاصًا بها.' },
        { t: 'bug', q: "This program should store a lab and its number of seats. It does not compile. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Pair<String, Integer> room = new Pair<>(30, "Lab A");
                    System.out.println(room.getKey());
                }
            }

            class Pair<K, V> {
                private K key;
                private V value;
                public Pair(K key, V value) { this.key = key; this.value = value; }
                public K getKey() { return key; }
            }
          `, bug: 3,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Pair<String, Integer> room = new Pair<>("Lab A", 30);
                    System.out.println(room.getKey());
                }
            }

            class Pair<K, V> {
                private K key;
                private V value;
                public Pair(K key, V value) { this.key = key; this.value = value; }
                public K getKey() { return key; }
            }
          `,
          hint: "In <code>Pair&lt;String, Integer&gt;</code>, which part comes first?",
          explain: "The variable says K = String and V = Integer, so the constructor needs a String first and an Integer second. Line 3 passes them in the wrong order. The compiler catches it; with an <code>Object</code> pair this mistake would hide until run time. The fixed program prints <code>Lab A</code>.",
          explainAr: 'ترتيب الوسائط يجب أن يطابق ترتيب K ثم V.' },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  GenericStack<Character> s = new GenericStack<>();
                  String word = "Abha";
                  for (int i = 0; i < word.length(); i++) {
                      s.push(word.charAt(i));
                  }
                  System.out.println(s.size() + " " + s.peek());
                  String out = "";
                  while (!s.isEmpty()) {
                      out += s.pop();
                  }
                  System.out.println(out);
              }
          }

          class GenericStack<E> {
              private ArrayList<E> list = new ArrayList<>();
              public void push(E item) { list.add(item); }
              public E pop() { return list.remove(list.size() - 1); }
              public E peek() { return list.get(list.size() - 1); }
              public boolean isEmpty() { return list.isEmpty(); }
              public int size() { return list.size(); }
          }
        `, answer: J`
          4 a
          ahbA
        `, explain: "Four letters are pushed; the last one, 'a', is on top. Popping all of them gives the letters in reverse order: a, h, b, A." },
        { t: 'code', q: "Pairs of city and temperature. Read <code>n</code>, then <code>n</code> lines with a city name and a temperature (a decimal number). Store them in an <code>ArrayList&lt;Pair&lt;String, Double&gt;&gt;</code> and print <code>Hottest: </code> followed by the city and its temperature. If two cities have the same temperature, print the first. No prompts.", qAr: 'خزّن{{g:|ي}} أزواج المدينة ودرجة الحرارة واطبع{{g:|ي}} أشد المدن حرارة.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    ArrayList<Pair<String, Double>> list = new ArrayList<>();
                    // read n pairs, find the hottest, print it
                }
            }

            class Pair<K, V> {
                private K key;
                private V value;
                public Pair(K key, V value) { this.key = key; this.value = value; }
                public K getKey() { return key; }
                public V getValue() { return value; }
            }
          `,
          tests: [
            { stdin: '3\nAbha 24.5\nRiyadh 44.0\nJeddah 38.5', expected: 'Hottest: Riyadh 44.0' },
            { stdin: '2\nTabuk 30.0\nHail 31.5', expected: 'Hottest: Hail 31.5' },
            { stdin: '1\nTaif 22.0', expected: 'Hottest: Taif 22.0' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    ArrayList<Pair<String, Double>> list = new ArrayList<>();
                    for (int i = 0; i < n; i++) {
                        String city = sc.next();
                        double temp = sc.nextDouble();
                        list.add(new Pair<>(city, temp));
                    }
                    Pair<String, Double> hottest = list.get(0);
                    for (Pair<String, Double> p : list) {
                        if (p.getValue() > hottest.getValue()) {
                            hottest = p;
                        }
                    }
                    System.out.println("Hottest: " + hottest.getKey() + " " + hottest.getValue());
                }
            }

            class Pair<K, V> {
                private K key;
                private V value;
                public Pair(K key, V value) { this.key = key; this.value = value; }
                public K getKey() { return key; }
                public V getValue() { return value; }
            }
          `,
          hint: "Add each pair with <code>list.add(new Pair&lt;&gt;(city, temp))</code>. Keep the hottest pair so far and compare <code>getValue()</code>.",
          explain: "<code>getValue()</code> returns a Double, so <code>&gt;</code> compares the temperatures with no cast, and <code>getKey()</code> returns the city as a String." }
      ]
    },

    // ---------------------------------------------------------------- L5
    {
      title: 'Bounded types and Comparable',
      titleAr: 'الأنواع المقيَّدة و Comparable',
      minutes: 35,
      body: [
        { type: 'h', en: 'The problem: a plain T knows very little' },
        { type: 'p', en: "Let us write a method that returns the bigger of two values. To find the bigger value we must <i>compare</i>. But a plain <code>T</code> could be anything, even a type that cannot be compared. So the compiler refuses to let you call <code>compareTo</code> on it.",
          ar: 'T العادي قد يكون أي نوع، لذلك لا نستطيع استدعاء compareTo عليه.' },
        { type: 'code', code: J`
          public static <T> T bigger(T a, T b) {
              if (a.compareTo(b) > 0) {    // compile error: T has no compareTo
                  return a;
              }
              return b;
          }
        ` },
        { type: 'p', en: "The compiler is not being difficult; it is protecting you. If someone called <code>bigger</code> with two Scanner objects, what would \"bigger\" even mean? A Scanner has no <code>compareTo</code>. We need a way to say: \"T can be many types, but only types that know how to compare\".",
          ar: 'المترجم يحمينا: ليس كل نوع يعرف المقارنة، لذلك نحتاج طريقة لنقول إن T يجب أن يكون قابلًا للمقارنة.' },
        { type: 'analogy', title: 'A job needs a licence', en: "An advert says: \"Driver wanted. Must have a driving licence.\" The condition filters the people. Only candidates with a licence can apply. A bound is the same: \"T must be comparable\"." },
        { type: 'h', en: 'The fix: a bound' },
        { type: 'p', en: "Write <code>&lt;T extends Comparable&lt;T&gt;&gt;</code>. It means: \"T can be any type that can compare itself with another T\". Integer, Double, String and Character all qualify. Inside the method, <code>compareTo</code> is now allowed." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static <T extends Comparable<T>> T bigger(T a, T b) {
                  if (a.compareTo(b) > 0) {
                      return a;
                  }
                  return b;
              }

              public static void main(String[] args) {
                  System.out.println(bigger(4, 19));
                  System.out.println(bigger("pear", "apple"));
                  System.out.println(bigger(2.5, 1.5));
              }
          }
        `, out: J`
          19
          pear
          2.5
        ` },
        { type: 'lines', rows: [
          ['<T extends Comparable<T>>', 'T must be a type with <code>compareTo</code> (a "bound").'],
          ['a.compareTo(b) > 0', 'Positive means a comes after b, so a is bigger.'],
          ['bigger("pear", "apple")', 'Strings compare alphabetically: "pear" comes after "apple".'],
          ['bigger(2.5, 1.5)', 'Doubles are boxed to Double, which is Comparable.']
        ], ar: 'القيد يضمن أن لكل T دالة compareTo.' },
        { type: 'note', kind: 'exam', en: "In a bound the keyword is always <code>extends</code>, even for an interface like Comparable. <code>&lt;T implements Comparable&lt;T&gt;&gt;</code> is a syntax error.", ar: 'نستخدم extends دائمًا في القيود.' },
        { type: 'check', q: 'What happens with <code>bigger(new Object(), new Object())</code>?', options: ['It works', 'Compile error: Object is not Comparable', 'It returns null', 'ClassCastException'], answer: 1, explain: "Object does not implement Comparable, so it does not satisfy the bound." },
        { type: 'h', en: 'A bound with a class: T extends Number' },
        { type: 'p', en: "A bound can also name a class. Suppose you want the average of an array of marks (Integer) or of prices (Double). With a plain T you cannot do arithmetic, because T might be a String. But Integer, Double, Long and Float all extend the class <code>Number</code>, and every Number has the method <code>doubleValue()</code>. So we write <code>&lt;T extends Number&gt;</code>: \"T is Number or any subclass of it\".",
          ar: 'القيد ‎&lt;T extends Number&gt;‎ يقبل Integer و Double وغيرهما، ويسمح باستدعاء doubleValue.' },
        { type: 'analogy', title: 'A coin machine', en: "A parking machine accepts coins of 1 riyal or 2 riyals, and notes of 5 or 10. It does not care which one you insert, because all of them are <i>money</i> and it can read their value. It refuses a button or a key. <code>&lt;T extends Number&gt;</code> is that machine: any kind of Number is accepted, because every Number can tell its value with <code>doubleValue()</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static <T extends Number> double average(T[] values) {
                  double sum = 0;
                  for (T v : values) {
                      sum += v.doubleValue();
                  }
                  return sum / values.length;
              }

              public static void main(String[] args) {
                  Integer[] marks = {80, 90, 70};
                  Double[] prices = {12.5, 7.5};
                  System.out.println(average(marks));
                  System.out.println(average(prices));
              }
          }
        `, out: J`
          80.0
          10.0
        ` },
        { type: 'lines', rows: [
          ['<T extends Number>', 'T may be Integer, Double, or any other kind of Number. Not String.'],
          ['v.doubleValue()', 'Allowed because the bound promises that every T is a Number.'],
          ['sum / values.length', '240.0 / 3 = 80.0 for the marks; 20.0 / 2 = 10.0 for the prices.']
        ] },
        { type: 'p', en: "So a bound does two jobs at once. Outside the method, it <b>filters</b> the callers: only suitable types are accepted. Inside the method, it <b>unlocks</b> methods: you may call the methods of the bound (<code>compareTo</code> for Comparable, <code>doubleValue</code> for Number)." },
        { type: 'check', q: 'With <code>&lt;T extends Number&gt; double average(T[] values)</code>, which call does <b>not</b> compile?', options: ['average(new Integer[]{1, 2})', 'average(new Double[]{0.5})', 'average(new String[]{"5"})', 'average(new Long[]{3L})'], answer: 2, explain: "String is not a subclass of Number, so it does not satisfy the bound, even if the text looks like a number." },
        { type: 'h', en: 'Your own classes can be Comparable' },
        { type: 'p', en: "From the previous unit you know <code>Comparable&lt;T&gt;</code> is an interface with <code>int compareTo(T other)</code>. It is a <b>generic interface</b>: when your class implements <code>Comparable&lt;Student&gt;</code>, the parameter is already a <code>Student</code> (no cast). Then <code>Collections.sort(list)</code> sorts a list of students, and <code>Collections.max(list)</code> finds the biggest. <code>Collections</code> is a helper class with ready-made methods for lists." },
        { type: 'p', en: "Compare with the old, raw way. Without the type argument, <code>compareTo</code> receives an <code>Object</code>, and you must cast it to Student before you can read its GPA. If someone compares a Student with a String, the cast crashes at run time." },
        { type: 'code', code: J`
          // Old way: raw Comparable
          class Student implements Comparable {
              public int compareTo(Object other) {
                  Student s = (Student) other;              // cast needed
                  return Double.compare(this.gpa, s.gpa);
              }
          }

          // Generic way: Comparable<Student>
          class Student implements Comparable<Student> {
              public int compareTo(Student other) {         // already a Student
                  return Double.compare(this.gpa, other.gpa);
              }
          }
        ` },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Student> list = new ArrayList<>();
                  list.add(new Student("Reem", 3.6));
                  list.add(new Student("Majed", 2.9));
                  list.add(new Student("Tala", 3.9));
                  Collections.sort(list);
                  System.out.println(list);
                  System.out.println(Collections.max(list).getName());
              }
          }

          class Student implements Comparable<Student> {
              private String name;
              private double gpa;

              public Student(String name, double gpa) {
                  this.name = name;
                  this.gpa = gpa;
              }

              public String getName() {
                  return name;
              }

              @Override
              public int compareTo(Student other) {
                  return Double.compare(this.gpa, other.gpa);
              }

              @Override
              public String toString() {
                  return name + "(" + gpa + ")";
              }
          }
        `, out: J`
          [Majed(2.9), Reem(3.6), Tala(3.9)]
          Tala
        ` },
        { type: 'lines', rows: [
          ['implements Comparable<Student>', 'Students now have a natural order.'],
          ['Collections.sort(list)', 'Sorts the list using <code>compareTo</code>: lowest GPA first.'],
          ['System.out.println(list)', 'A list prints like [a, b, c] using each item\'s <code>toString()</code>.'],
          ['Collections.max(list).getName()', 'The student with the highest GPA is Tala.']
        ] },
        { type: 'memory', title: 'Sorting moves references, not students',
          en: "<code>Collections.sort</code> calls <code>compareTo</code> many times and then reorders the <b>references</b> inside the list. The Student objects themselves do not move or change.",
          frames: [
            { label: 'Before <code>Collections.sort(list);</code>: the order in which we added them',
              vars: [{ name: 'list', type: 'ArrayList<Student>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'ArrayList<Student>', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Reem"' }, { name: 'gpa', value: '3.6' }] },
                { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Majed"' }, { name: 'gpa', value: '2.9' }] },
                { id: 'D', cls: 'Student', fields: [{ name: 'name', value: '"Tala"' }, { name: 'gpa', value: '3.9' }] }] },
            { label: 'After <code>Collections.sort(list);</code>: lowest GPA first',
              vars: [{ name: 'list', type: 'ArrayList<Student>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'ArrayList<Student>', fields: [{ name: '[0]', ref: 'C' }, { name: '[1]', ref: 'B' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Reem"' }, { name: 'gpa', value: '3.6' }] },
                { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Majed"' }, { name: 'gpa', value: '2.9' }] },
                { id: 'D', cls: 'Student', fields: [{ name: 'name', value: '"Tala"' }, { name: 'gpa', value: '3.9' }] }] },
            { label: 'After <code>Student top = Collections.max(list);</code>: a reference to Tala, no copy',
              vars: [{ name: 'list', type: 'ArrayList<Student>', ref: 'A' }, { name: 'top', type: 'Student', ref: 'D' }],
              objects: [
                { id: 'A', cls: 'ArrayList<Student>', fields: [{ name: '[0]', ref: 'C' }, { name: '[1]', ref: 'B' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Reem"' }, { name: 'gpa', value: '3.6' }] },
                { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Majed"' }, { name: 'gpa', value: '2.9' }] },
                { id: 'D', cls: 'Student', fields: [{ name: 'name', value: '"Tala"' }, { name: 'gpa', value: '3.9' }] }] }
          ],
          ar: 'الترتيب يغير أماكن المراجع داخل القائمة فقط، أما كائنات الطلاب فتبقى كما هي.' },
        { type: 'steps', title: 'Worked example: biggest of three', problem: 'Write one method <code>maxOf(a, b, c)</code> that works for numbers and words.',
          steps: [
            { en: 'Header with the bound, and three parameters of type T.', code: J`
              public static <T extends Comparable<T>> T maxOf(T a, T b, T c) {
            ` },
            { en: 'Start by assuming <code>a</code> is the best.', code: J`
                  T best = a;
            ` },
            { en: 'If <code>b</code> is bigger, it becomes the best. Do the same for <code>c</code>.', code: J`
                  if (b.compareTo(best) > 0) {
                      best = b;
                  }
                  if (c.compareTo(best) > 0) {
                      best = c;
                  }
            ` },
            { en: 'Return the best and test with three types.', code: J`
                  return best;
              }
            ` }
          ],
          code: J`
            public class Main {
                public static <T extends Comparable<T>> T maxOf(T a, T b, T c) {
                    T best = a;
                    if (b.compareTo(best) > 0) {
                        best = b;
                    }
                    if (c.compareTo(best) > 0) {
                        best = c;
                    }
                    return best;
                }

                public static void main(String[] args) {
                    System.out.println(maxOf(4, 19, 7));
                    System.out.println(maxOf("pear", "apple", "mango"));
                    System.out.println(maxOf(2.5, 1.5, 2.25));
                }
            }
          `, out: J`
            19
            pear
            2.5
          `, ar: 'نفترض أن a الأكبر ثم نستبدلها إذا وجدنا أكبر منها.' },
        { type: 'steps', title: 'Worked example: your own class passes the bound', problem: 'A shop sells tea, dates and water. Make <code>Product</code> comparable by price, then use the <b>same</b> generic method <code>bigger</code> on products, sort the shop list and find the cheapest item.',
          steps: [
            { en: '<code>Product</code> implements <code>Comparable&lt;Product&gt;</code>. Compare prices with <code>Integer.compare</code>.', code: J`
              class Product implements Comparable<Product> {
                  @Override
                  public int compareTo(Product other) {
                      return Integer.compare(this.price, other.price);
                  }
              }
            ` },
            { en: 'Now <code>Product</code> satisfies <code>T extends Comparable&lt;T&gt;</code>, so <code>bigger</code> accepts two products. T becomes Product.', code: J`
              System.out.println(bigger(tea, dates));
            ` },
            { en: 'The same <code>compareTo</code> is used by <code>Collections.sort</code> and <code>Collections.min</code>.', code: J`
              Collections.sort(shop);
              System.out.println(shop);
              System.out.println("Cheapest: " + Collections.min(shop));
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static <T extends Comparable<T>> T bigger(T a, T b) {
                    if (a.compareTo(b) > 0) {
                        return a;
                    }
                    return b;
                }

                public static void main(String[] args) {
                    Product tea = new Product("Tea", 15);
                    Product dates = new Product("Dates", 40);
                    Product water = new Product("Water", 2);
                    System.out.println(bigger(tea, dates));
                    ArrayList<Product> shop = new ArrayList<>();
                    shop.add(tea);
                    shop.add(dates);
                    shop.add(water);
                    Collections.sort(shop);
                    System.out.println(shop);
                    System.out.println("Cheapest: " + Collections.min(shop));
                }
            }

            class Product implements Comparable<Product> {
                private String name;
                private int price;

                public Product(String name, int price) {
                    this.name = name;
                    this.price = price;
                }

                @Override
                public int compareTo(Product other) {
                    return Integer.compare(this.price, other.price);
                }

                @Override
                public String toString() {
                    return name + " " + price + " SAR";
                }
            }
          `, out: J`
            Dates 40 SAR
            [Water 2 SAR, Tea 15 SAR, Dates 40 SAR]
            Cheapest: Water 2 SAR
          `, ar: 'عندما ينفذ صنفك Comparable يصبح مقبولًا في الدوال العامة المقيدة، وفي sort و min و max.' }
      ],
      mistakes: [
        { title: 'Using implements in a bound', en: "Always <code>extends</code>.", code: J`
          <T implements Comparable<T>>    // syntax error
        ` },
        { title: 'Forgetting the bound', en: "Without it, <code>a.compareTo(b)</code> does not compile." },
        { title: 'Using a wrong parameter type in compareTo', en: "With <code>Comparable&lt;Student&gt;</code>, write <code>compareTo(Student other)</code>, not <code>compareTo(Object other)</code>." },
        { title: 'Subtracting for comparison', en: "<code>this.price - other.price</code> can overflow; for doubles it loses decimals. Prefer <code>Integer.compare</code> and <code>Double.compare</code>." }
      ],
      remember: [
        "A plain <code>T</code> only has methods that every object has.",
        "A bound <code>&lt;T extends Comparable&lt;T&gt;&gt;</code> lets you call <code>compareTo</code>.",
        "The bound always uses <code>extends</code>, even for interfaces.",
        "Integer, Double, String and Character are Comparable.",
        "Implement <code>Comparable&lt;YourClass&gt;</code> so <code>Collections.sort</code> and <code>Collections.max</code> work.",
        "<code>&lt;T extends Number&gt;</code> accepts Integer, Double... and unlocks <code>doubleValue()</code>."
      ],
      rememberAr: 'القيد ‎&lt;T extends Comparable&lt;T&gt;&gt;‎ يسمح باستعمال compareTo. نستخدم extends دائمًا في القيود.',
      practice: [
        { t: 'mcq', q: 'Why does <code>bigger</code> declare <code>&lt;T extends Comparable&lt;T&gt;&gt;</code> instead of just <code>&lt;T&gt;</code>?', options: ['To make the method faster', 'So that the compiler allows calling compareTo on T', 'So that primitives like int can be used', 'Because static methods require bounds'], answer: 1, explain: "With a plain T the compiler only knows the methods of Object.", explainAr: 'القيد يضمن وجود compareTo لكل نوع T.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static <T extends Comparable<T>> T smaller(T a, T b) {
                  if (a.compareTo(b) <= 0) {
                      return a;
                  }
                  return b;
              }

              public static void main(String[] args) {
                  System.out.println(smaller(42, 17));
                  System.out.println(smaller("Zain", "Adel"));
                  System.out.println(smaller('q', 'k'));
                  System.out.println(smaller("Java", "java"));
              }
          }
        `, answer: J`
          17
          Adel
          k
          Java
        `, explain: "Numbers compare by value, strings and characters by Unicode order. Uppercase letters come before lowercase ones, so \"Java\" is smaller than \"java\"." },
        { t: 'mcq', q: "Which call does <b>not</b> compile with <code>&lt;T extends Comparable&lt;T&gt;&gt; T bigger(T a, T b)</code>?", options: ['bigger(3, 5)', 'bigger("a", "b")', 'bigger(new Object(), new Object())', 'bigger(1.5, 2.5)'], answer: 2, explain: "Object is not Comparable." },
        { t: 'fill', q: 'Complete the class so that products can be sorted by price.', code: J`
          class Product implements ___<Product> {
              private String name;
              private int price;
              public Product(String name, int price) { this.name = name; this.price = price; }

              @Override
              public int ___(Product other) {
                  return Integer.compare(this.price, other.price);
              }
          }
        `, answers: ['Comparable', 'compareTo'], explain: "Implementing <code>Comparable&lt;Product&gt;</code> requires <code>public int compareTo(Product other)</code>." },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Item> cart = new ArrayList<>();
                  cart.add(new Item("Pen", 5));
                  cart.add(new Item("Bag", 40));
                  cart.add(new Item("Ruler", 3));
                  Collections.sort(cart);
                  for (Item it : cart) {
                      System.out.println(it.getName());
                  }
                  System.out.println(Collections.max(cart).getName());
              }
          }

          class Item implements Comparable<Item> {
              private String name;
              private int price;

              public Item(String name, int price) {
                  this.name = name;
                  this.price = price;
              }

              public String getName() {
                  return name;
              }

              @Override
              public int compareTo(Item other) {
                  return Integer.compare(this.price, other.price);
              }
          }
        `, answer: J`
          Ruler
          Pen
          Bag
          Bag
        `, explain: "Ordered by price ascending: Ruler (3), Pen (5), Bag (40). The maximum is the most expensive, Bag." },
        { t: 'mcq', q: 'Which declaration correctly restricts T to comparable types?', options: ['&lt;T implements Comparable&lt;T&gt;&gt;', '&lt;T extends Comparable&lt;T&gt;&gt;', '&lt;T super Comparable&gt;', '&lt;Comparable T&gt;'], answer: 1, explain: "Bounds always use <code>extends</code>." },
        { t: 'order', q: "Put the lines of the method in order.", lines: [
          'public static <T extends Comparable<T>> T bigger(T a, T b) {',
          '    if (a.compareTo(b) > 0) {',
          '        return a;',
          '    }',
          '    return b;',
          '}'
        ], explain: "Header, test, return a, close the if, return b, close the method." },
        { t: 'code', q: "Complete the generic method <code>bigger</code>. The program reads two words and then two integers, and prints the bigger word and the bigger integer (each on its own line). No prompts.", qAr: 'أكمل الدالة العامة bigger واستخدمها مع الكلمات والأعداد.',
          starter: J`
            import java.util.*;

            public class Main {
                public static <T extends Comparable<T>> T bigger(T a, T b) {
                    // TODO
                    return a;
                }

                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String w1 = sc.next();
                    String w2 = sc.next();
                    int n1 = sc.nextInt();
                    int n2 = sc.nextInt();
                    System.out.println(bigger(w1, w2));
                    System.out.println(bigger(n1, n2));
                }
            }
          `,
          tests: [{ stdin: 'apple pear 3 9', expected: 'pear\n9' }, { stdin: 'zoo ant 10 -2', expected: 'zoo\n10' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static <T extends Comparable<T>> T bigger(T a, T b) {
                    if (a.compareTo(b) > 0) {
                        return a;
                    }
                    return b;
                }

                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String w1 = sc.next();
                    String w2 = sc.next();
                    int n1 = sc.nextInt();
                    int n2 = sc.nextInt();
                    System.out.println(bigger(w1, w2));
                    System.out.println(bigger(n1, n2));
                }
            }
          `,
          hint: "If <code>a.compareTo(b) &gt; 0</code> return a, otherwise return b.",
          explain: "One method works for String and Integer because both are Comparable." },
        { t: 'bug', q: "This method should return the smaller of two values. It does not compile. Tap the line where the real mistake is. (Two answers are accepted.)",
          code: J`
            public class Main {
                public static <T> T smaller(T a, T b) {
                    if (a.compareTo(b) < 0) {
                        return a;
                    }
                    return b;
                }

                public static void main(String[] args) {
                    System.out.println(smaller(42, 17));
                    System.out.println(smaller("Zain", "Adel"));
                }
            }
          `, bug: [2, 3],
          fix: J`
            public class Main {
                public static <T extends Comparable<T>> T smaller(T a, T b) {
                    if (a.compareTo(b) < 0) {
                        return a;
                    }
                    return b;
                }

                public static void main(String[] args) {
                    System.out.println(smaller(42, 17));
                    System.out.println(smaller("Zain", "Adel"));
                }
            }
          `,
          hint: "What does the compiler know about a plain T?",
          explain: "The error appears on line 3 (\"cannot find symbol: method compareTo\"), but the cause is the header on line 2: a plain <code>&lt;T&gt;</code> may be any class, so <code>compareTo</code> is not allowed. Add the bound <code>&lt;T extends Comparable&lt;T&gt;&gt;</code>. The fixed program prints 17 and Adel.",
          explainAr: 'بدون القيد لا يعرف المترجم أن T يملك compareTo؛ نضيف extends Comparable&lt;T&gt;‎.' },
        { t: 'bug', q: "The cart should be sorted by price. The class does not compile. Tap the line with the bug.",
          code: J`
            import java.util.*;
            public class Main {
                public static void main(String[] args) {
                    ArrayList<Item> cart = new ArrayList<>(Arrays.asList(new Item("Bag", 40), new Item("Pen", 5)));
                    Collections.sort(cart);
                    System.out.println(cart.get(0).name);
                }
            }

            class Item implements Comparable<Item> {
                String name;
                int price;
                Item(String name, int price) { this.name = name; this.price = price; }
                public int compareTo(Object other) { return Integer.compare(price, ((Item) other).price); }
            }
          `, bug: 14,
          fix: J`
            import java.util.*;
            public class Main {
                public static void main(String[] args) {
                    ArrayList<Item> cart = new ArrayList<>(Arrays.asList(new Item("Bag", 40), new Item("Pen", 5)));
                    Collections.sort(cart);
                    System.out.println(cart.get(0).name);
                }
            }

            class Item implements Comparable<Item> {
                String name;
                int price;
                Item(String name, int price) { this.name = name; this.price = price; }
                public int compareTo(Item other) { return Integer.compare(price, other.price); }
            }
          `,
          hint: "The class promises <code>Comparable&lt;Item&gt;</code>. What must the parameter type of compareTo be?",
          explain: "<code>implements Comparable&lt;Item&gt;</code> promises a method <code>compareTo(Item other)</code>. Line 14 writes <code>compareTo(Object other)</code>, the old raw style, so the promise is not kept and the class does not compile. With <code>Item other</code> no cast is needed. The fixed program prints Pen (the cheapest).",
          explainAr: 'مع Comparable&lt;Item&gt;‎ يجب أن يكون المعامل من نوع Item وليس Object.' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static <T extends Number> double average(T[] values) {
                  double sum = 0;
                  for (T v : values) {
                      sum += v.doubleValue();
                  }
                  return sum / values.length;
              }

              public static void main(String[] args) {
                  Integer[] a = {7, 8};
                  Double[] b = {1.5, 2.5, 5.0};
                  System.out.println(average(a));
                  System.out.println(average(b));
              }
          }
        `, answer: J`
          7.5
          3.0
        `, explain: "The method returns a double. (7 + 8) / 2 = 15.0 / 2 = 7.5. (1.5 + 2.5 + 5.0) / 3 = 9.0 / 3 = 3.0." },
        { t: 'code', q: "Complete <code>Runner</code> so that it implements <code>Comparable&lt;Runner&gt;</code>: the <b>smaller</b> time (faster runner) comes first. The program reads <code>n</code>, then <code>n</code> lines with a name and a time in seconds, sorts the list and prints the names from fastest to slowest, one per line. No prompts.", qAr: 'اجعل{{g:|ي}} الصنف Runner قابلًا للمقارنة حسب الزمن، ثم رتّب{{g:|ي}} العدائين.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    ArrayList<Runner> race = new ArrayList<>();
                    for (int i = 0; i < n; i++) {
                        race.add(new Runner(sc.next(), sc.nextInt()));
                    }
                    Collections.sort(race);
                    for (Runner r : race) {
                        System.out.println(r.getName());
                    }
                }
            }

            class Runner {   // TODO: implements Comparable<Runner>
                private String name;
                private int seconds;

                public Runner(String name, int seconds) {
                    this.name = name;
                    this.seconds = seconds;
                }

                public String getName() {
                    return name;
                }

                // TODO: compareTo
            }
          `,
          tests: [{ stdin: '3\nHind 58\nSaad 51\nOla 55', expected: 'Saad\nOla\nHind' }, { stdin: '2\nAli 40\nSara 39', expected: 'Sara\nAli' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    ArrayList<Runner> race = new ArrayList<>();
                    for (int i = 0; i < n; i++) {
                        race.add(new Runner(sc.next(), sc.nextInt()));
                    }
                    Collections.sort(race);
                    for (Runner r : race) {
                        System.out.println(r.getName());
                    }
                }
            }

            class Runner implements Comparable<Runner> {
                private String name;
                private int seconds;

                public Runner(String name, int seconds) {
                    this.name = name;
                    this.seconds = seconds;
                }

                public String getName() {
                    return name;
                }

                @Override
                public int compareTo(Runner other) {
                    return Integer.compare(this.seconds, other.seconds);
                }
            }
          `,
          hint: "Header: <code>class Runner implements Comparable&lt;Runner&gt;</code>. In <code>compareTo</code>, return <code>Integer.compare(this.seconds, other.seconds)</code>.",
          explain: "<code>Collections.sort</code> needs the list items to be Comparable. Comparing <code>this.seconds</code> with <code>other.seconds</code> puts the smaller time first." }
      ]
    },

    // ---------------------------------------------------------------- L6
    {
      title: 'Generic interfaces and wildcards',
      titleAr: 'الواجهات العامة وأحرف البدل',
      minutes: 35,
      body: [
        { type: 'h', en: 'Your own generic interface' },
        { type: 'p', en: "You have met a generic interface already: <code>Comparable&lt;T&gt;</code>. You can write your own. Imagine anything that turns an input of type A into a result of type B: Celsius to Fahrenheit, a word to its length, a mark to a grade letter. One interface can describe them all: <code>Converter&lt;A, B&gt;</code>.",
          ar: 'الواجهة العامة تعلن معاملات نوع مثل الصنف العام.' },
        { type: 'analogy', title: 'A machine with a label', en: "A machine has an input slot and an output slot. The label says what goes in and what comes out: \"coffee beans in, coffee out\" or \"paper in, copies out\". The shape of the machine is the interface. The labels are the types." },
        { type: 'p', en: "Without generics, such an interface would talk only about <code>Object</code>: anything in, anything out. Every caller must then cast the result, and the compiler cannot stop someone from passing a number to a converter that expects a word." },
        { type: 'code', code: J`
          interface OldConverter {
              Object convert(Object input);      // anything in, anything out
          }

          Object r = lengthConverter.convert("Generics");
          int n = (Integer) r;                   // cast needed every time
        ` },
        { type: 'p', en: "With two type parameters, the interface says exactly what goes in (A) and what comes out (B). Each class that implements it fills in A and B once, and the casts disappear.",
          ar: 'الواجهة العامة تحدد نوع المدخل A ونوع الناتج B، فلا نحتاج cast.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Converter<Double, Double> temp = new CelsiusToFahrenheit();
                  Converter<String, Integer> len = new WordLength();
                  System.out.println(temp.convert(25.0));
                  System.out.println(temp.convert(100.0));
                  System.out.println(len.convert("Generics"));
              }
          }

          interface Converter<A, B> {
              B convert(A input);
          }

          class CelsiusToFahrenheit implements Converter<Double, Double> {
              @Override
              public Double convert(Double c) {
                  return c * 9 / 5 + 32;
              }
          }

          class WordLength implements Converter<String, Integer> {
              @Override
              public Integer convert(String s) {
                  return s.length();
              }
          }
        `, out: J`
          77.0
          212.0
          8
        ` },
        { type: 'lines', rows: [
          ['interface Converter<A, B>', 'Two placeholders: A is the input type, B is the result type.'],
          ['B convert(A input);', 'The single method uses both.'],
          ['implements Converter<Double, Double>', 'This class chooses A = Double and B = Double. So <code>convert</code> takes a Double and returns a Double.'],
          ['implements Converter<String, Integer>', 'This one turns a String into an Integer.'],
          ['25.0 * 9 / 5 + 32', '225 / 5 = 45, plus 32 = 77.0.']
        ], ar: 'كل صنف ينفذ الواجهة يختار أنواعًا محددة لـ A وB.' },
        { type: 'check', q: 'In <code>implements Converter&lt;String, Integer&gt;</code>, what is the header of <code>convert</code>?', options: ['public Integer convert(String s)', 'public String convert(Integer s)', 'public void convert(Object o)', 'public Integer convert(Integer s)'], answer: 0, explain: "A = String (input), B = Integer (result)." },
        { type: 'p', en: "The real power appears when a <b>generic method</b> works with the interface. The method below does not know <i>which</i> converter it gets; it only knows the converter turns an A into a B. So the same method can turn marks into grade letters, or city names into lengths." },
        { type: 'steps', title: 'Worked example: convert a whole list', problem: 'Write one generic method <code>convertAll(items, c)</code> that applies a converter to every item of a list and returns a new list of results. Use it with a mark-to-grade converter and with <code>WordLength</code>.',
          steps: [
            { en: 'The method has two placeholders of its own, <code>&lt;A, B&gt;</code>. It takes a list of A and a converter from A to B, and returns a list of B.', code: J`
              public static <A, B> ArrayList<B> convertAll(ArrayList<A> items, Converter<A, B> c) {
            ` },
            { en: 'Create the result list, convert each item and add the result.', code: J`
                  ArrayList<B> result = new ArrayList<>();
                  for (A item : items) {
                      result.add(c.convert(item));
                  }
                  return result;
              }
            ` },
            { en: 'Write a converter from <code>Integer</code> (mark) to <code>String</code> (grade letter).', code: J`
              class Grade implements Converter<Integer, String> {
                  @Override
                  public String convert(Integer mark) { ... }
              }
            ` },
            { en: 'Call <code>convertAll</code> twice: here A and B are inferred as Integer/String, then String/Integer.', code: J`
              System.out.println(convertAll(marks, new Grade()));
              System.out.println(convertAll(cities, new WordLength()));
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static <A, B> ArrayList<B> convertAll(ArrayList<A> items, Converter<A, B> c) {
                    ArrayList<B> result = new ArrayList<>();
                    for (A item : items) {
                        result.add(c.convert(item));
                    }
                    return result;
                }

                public static void main(String[] args) {
                    ArrayList<Integer> marks = new ArrayList<>(Arrays.asList(95, 72, 88, 59));
                    ArrayList<String> cities = new ArrayList<>(Arrays.asList("Abha", "Riyadh"));
                    System.out.println(convertAll(marks, new Grade()));
                    System.out.println(convertAll(cities, new WordLength()));
                }
            }

            interface Converter<A, B> {
                B convert(A input);
            }

            class Grade implements Converter<Integer, String> {
                @Override
                public String convert(Integer mark) {
                    if (mark >= 90) {
                        return "A";
                    } else if (mark >= 80) {
                        return "B";
                    } else if (mark >= 60) {
                        return "C";
                    }
                    return "F";
                }
            }

            class WordLength implements Converter<String, Integer> {
                @Override
                public Integer convert(String s) {
                    return s.length();
                }
            }
          `, out: J`
            [A, C, B, F]
            [4, 6]
          `, ar: 'دالة عامة واحدة تطبق أي محوّل على كل عناصر القائمة: العلامات تصبح تقديرات، والمدن تصبح أطوالًا.' },
        { type: 'h', en: 'Wildcards: a surprise' },
        { type: 'p', en: "Integer is a kind of Number. So you might think <code>ArrayList&lt;Integer&gt;</code> is a kind of <code>ArrayList&lt;Number&gt;</code>. It is <b>not</b>! If it were, you could add a Double into your list of Integers by mistake. So a method with the parameter <code>ArrayList&lt;Number&gt;</code> refuses an <code>ArrayList&lt;Integer&gt;</code>.",
          ar: 'ArrayList&lt;Integer&gt;‎ ليست نوعًا فرعيًا من ‎ArrayList&lt;Number&gt;‎.' },
        { type: 'analogy', title: 'A basket of apples', en: "A basket of apples is not a \"basket of fruit\". If it were, someone could put an orange into the apple basket. Apples are fruit, but the basket's label matters." },
        { type: 'p', en: "Here is the same story in Java. Imagine for a moment that line 2 were allowed. Then line 3 could put a Double into the list of Integers, and line 4 would crash. The compiler prevents the whole story by refusing line 2." },
        { type: 'code', code: J`
          ArrayList<Integer> ints = new ArrayList<>();
          ArrayList<Number> nums = ints;    // compile error (imagine it were allowed...)
          nums.add(2.5);                    // ...a Double would enter the list of Integers
          int x = ints.get(0);              // ...and this line would crash
        ` },
        { type: 'p', en: "The fix is the <b>wildcard</b> <code>?</code>, which means \"some unknown type\". With a bound, <code>? extends Number</code> means \"Number or any subclass of Number\". Use it when you only <b>read</b> from the list." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static double sumAll(ArrayList<? extends Number> list) {
                  double s = 0;
                  for (Number n : list) {
                      s += n.doubleValue();
                  }
                  return s;
              }

              public static void main(String[] args) {
                  ArrayList<Integer> ints = new ArrayList<>(Arrays.asList(1, 2, 3));
                  ArrayList<Double> prices = new ArrayList<>(Arrays.asList(1.5, 2.5));
                  System.out.println(sumAll(ints));
                  System.out.println(sumAll(prices));
              }
          }
        `, out: J`
          6.0
          4.0
        ` },
        { type: 'lines', rows: [
          ['ArrayList<? extends Number> list', 'A list of Integer, Double, or any other kind of Number.'],
          ['for (Number n : list)', 'Every item is at least a Number, so this is safe.'],
          ['n.doubleValue()', 'A method every Number has: gives the value as a double.'],
          ['sumAll(ints) and sumAll(prices)', 'One method accepts both lists. 1 + 2 + 3 = 6.0 and 1.5 + 2.5 = 4.0.']
        ], ar: 'حرف البدل ? مع extends يقبل Number وكل أبنائه.' },
        { type: 'table', head: ['Wildcard', 'Meaning', 'Accepts'], rows: [
          ['<code>&lt;?&gt;</code>', 'Any type', 'ArrayList&lt;String&gt;, ArrayList&lt;Student&gt;...'],
          ['<code>&lt;? extends Number&gt;</code>', 'Number or a subclass', 'ArrayList&lt;Integer&gt;, ArrayList&lt;Double&gt;'],
          ['<code>&lt;? super Integer&gt;</code>', 'Integer or a superclass', 'ArrayList&lt;Integer&gt;, ArrayList&lt;Number&gt;, ArrayList&lt;Object&gt;']
        ] },
        { type: 'note', kind: 'tip', en: "Rule of thumb: use <code>? extends T</code> when you only <b>read</b> from a collection, and <code>? super T</code> when you <b>add</b> to it. In this course, <code>? extends</code> is the one you will meet most." },
        { type: 'check', q: 'Which parameter type accepts both <code>ArrayList&lt;Integer&gt;</code> and <code>ArrayList&lt;Double&gt;</code>?', options: ['ArrayList&lt;Number&gt;', 'ArrayList&lt;Object&gt;', 'ArrayList&lt;? extends Number&gt;', 'ArrayList&lt;Integer&gt;'], answer: 2, explain: "Only the wildcard with an upper bound accepts every kind of Number list." },
        { type: 'memory', title: 'The method receives a reference to the same list',
          en: "When <code>sumAll(ints)</code> runs, the parameter <code>list</code> refers to the very same ArrayList as <code>ints</code>. The wildcard only tells the compiler \"some kind of Number\"; the objects are still Integers. Each loop step, <code>n</code> refers to the next item.",
          code: J`
            ArrayList<Integer> ints = new ArrayList<>(Arrays.asList(1, 2, 3));
            System.out.println(sumAll(ints));
          `,
          frames: [
            { label: 'In <code>main</code>, before the call',
              vars: [{ name: 'ints', type: 'ArrayList<Integer>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'ArrayList<Integer>', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Integer', fields: [{ name: 'value', value: '1' }] },
                { id: 'C', cls: 'Integer', fields: [{ name: 'value', value: '2' }] },
                { id: 'D', cls: 'Integer', fields: [{ name: 'value', value: '3' }] }] },
            { label: 'Inside <code>sumAll</code>, after the first loop step: <code>s</code> is 1.0',
              vars: [{ name: 'list', type: 'ArrayList<? extends Number>', ref: 'A' }, { name: 'n', type: 'Number', ref: 'B' }, { name: 's', type: 'double', value: '1.0' }],
              objects: [
                { id: 'A', cls: 'ArrayList<Integer>', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Integer', fields: [{ name: 'value', value: '1' }] },
                { id: 'C', cls: 'Integer', fields: [{ name: 'value', value: '2' }] },
                { id: 'D', cls: 'Integer', fields: [{ name: 'value', value: '3' }] }] },
            { label: 'After the last loop step: <code>s</code> is 6.0, which is returned and printed',
              vars: [{ name: 'list', type: 'ArrayList<? extends Number>', ref: 'A' }, { name: 'n', type: 'Number', ref: 'D' }, { name: 's', type: 'double', value: '6.0' }],
              objects: [
                { id: 'A', cls: 'ArrayList<Integer>', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Integer', fields: [{ name: 'value', value: '1' }] },
                { id: 'C', cls: 'Integer', fields: [{ name: 'value', value: '2' }] },
                { id: 'D', cls: 'Integer', fields: [{ name: 'value', value: '3' }] }] }
          ],
          ar: 'المعامل list يشير إلى القائمة نفسها. حرف البدل يخبر المترجم فقط أن العناصر من نوع ما من Number.' },
        { type: 'note', kind: 'tip', en: "This lesson is your first meeting with wildcards. Lesson 9 of this unit (\"Wildcards in depth\") explains <code>&lt;?&gt;</code>, <code>? extends</code> and <code>? super</code> step by step, with pictures." },
        { type: 'steps', title: 'Worked example: total of marks and prices', problem: 'Use one method to add up a list of integer marks and a list of decimal prices.',
          steps: [
            { en: 'Declare the parameter with a wildcard bound.', code: J`
              public static double sumAll(ArrayList<? extends Number> list) {
            ` },
            { en: 'Loop over the items as <code>Number</code>. Convert each to a double and add.', code: J`
                  double s = 0;
                  for (Number n : list) {
                      s += n.doubleValue();
                  }
                  return s;
            ` },
            { en: 'Call it with an Integer list and a Double list.', code: J`
              System.out.println(sumAll(marks));
              System.out.println(sumAll(prices));
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static double sumAll(ArrayList<? extends Number> list) {
                    double s = 0;
                    for (Number n : list) {
                        s += n.doubleValue();
                    }
                    return s;
                }

                public static void main(String[] args) {
                    ArrayList<Integer> marks = new ArrayList<>(Arrays.asList(80, 90, 70));
                    ArrayList<Double> prices = new ArrayList<>(Arrays.asList(12.5, 7.5));
                    System.out.println(sumAll(marks));
                    System.out.println(sumAll(prices));
                }
            }
          `, out: J`
            240.0
            20.0
          `, ar: 'دالة واحدة تجمع قائمة أعداد صحيحة وقائمة أعداد عشرية.' }
      ],
      mistakes: [
        { title: 'Expecting ArrayList&lt;Integer&gt; to fit ArrayList&lt;Number&gt;', en: "It does not. Use <code>ArrayList&lt;? extends Number&gt;</code>.", code: J`
          static double sum(ArrayList<Number> list) { ... }
          sum(new ArrayList<Integer>());     // compile error
        ` },
        { title: 'Wrong number of type arguments', en: "<code>Converter&lt;String&gt;</code> is an error: Converter has two placeholders." },
        { title: 'Wrong method header in the implementing class', en: "If the class says <code>Converter&lt;String, Integer&gt;</code>, then <code>convert</code> must take a String and return an Integer." },
        { title: 'Trying to add to a ? extends list', en: "Because the exact type is unknown, you cannot safely add items to <code>ArrayList&lt;? extends Number&gt;</code>. It is for reading." }
      ],
      remember: [
        "A generic interface has placeholders: <code>Converter&lt;A, B&gt;</code>.",
        "A class that implements it chooses the real types.",
        "<code>ArrayList&lt;Integer&gt;</code> is <b>not</b> an <code>ArrayList&lt;Number&gt;</code>.",
        "<code>? extends Number</code> accepts Number and all its subclasses (read only).",
        "<code>?</code> alone means any type.",
        "To <b>add</b> Integers to a list, use <code>? super Integer</code> (more in Lesson 9)."
      ],
      rememberAr: 'الواجهة العامة تعلن معاملات نوع ويختار الصنف المنفذ أنواعًا محددة. حرف البدل ? مع extends يقبل قوائم من أي نوع فرعي.',
      practice: [
        { t: 'mcq', q: "In <code>interface Converter&lt;A, B&gt;</code>, what do A and B stand for?", options: ['Two type placeholders', 'Two methods', 'Two objects', 'Two numbers'], answer: 0, explain: "They are type parameters, replaced by real types in the implementing class." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Converter<Integer, String> g = new Grade();
                  System.out.println(g.convert(95));
                  System.out.println(g.convert(70));
              }
          }

          interface Converter<A, B> {
              B convert(A input);
          }

          class Grade implements Converter<Integer, String> {
              public String convert(Integer mark) {
                  if (mark >= 90) {
                      return "A";
                  }
                  return "B";
              }
          }
        `, answer: J`
          A
          B
        `, explain: "95 is at least 90, so A. 70 is not, so B." },
        { t: 'mcq', q: 'A method has the parameter <code>ArrayList&lt;Number&gt; list</code>. What happens if you pass an <code>ArrayList&lt;Integer&gt;</code>?', options: ['It works because Integer extends Number', 'Compilation error', 'ClassCastException at run time', 'The Integers are converted to Doubles'], answer: 1, explain: "ArrayList&lt;Integer&gt; is not a subtype of ArrayList&lt;Number&gt;. Use <code>ArrayList&lt;? extends Number&gt;</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.*;

          public class Main {
              public static double sumAll(ArrayList<? extends Number> list) {
                  double s = 0;
                  for (Number n : list) {
                      s += n.doubleValue();
                  }
                  return s;
              }

              public static void main(String[] args) {
                  ArrayList<Integer> a = new ArrayList<>(Arrays.asList(4, 6));
                  ArrayList<Double> b = new ArrayList<>(Arrays.asList(0.5, 0.25));
                  System.out.println(sumAll(a));
                  System.out.println(sumAll(b));
              }
          }
        `, answer: J`
          10.0
          0.75
        `, explain: "4 + 6 = 10.0 and 0.5 + 0.25 = 0.75." },
        { t: 'fill', q: "Complete the class that implements the generic interface.", code: J`
          class WordLength ___ Converter<String, Integer> {
              public ___ convert(String s) {
                  return s.length();
              }
          }
        `, answers: ['implements', 'Integer'], explain: "A class <code>implements</code> an interface; B is Integer, so the result type is Integer." },
        { t: 'fill', q: "Complete the parameter so that it accepts a list of any kind of Number.", code: J`
          static double sumAll(ArrayList<___> list)
        `, answers: [['? extends Number', '?extends Number']], explain: "The upper-bounded wildcard." },
        { t: 'order', q: "Put the lines in order to declare a generic interface and use it.", lines: [
          'interface Converter<A, B> {',
          '    B convert(A input);',
          '}',
          'Converter<String, Integer> len = new WordLength();'
        ], explain: "Declare the interface first, then use it." },
        { t: 'code', q: "Complete <code>WordLength</code> so it implements <code>Converter&lt;String, Integer&gt;</code> (it returns the number of letters). Read a word and print its length. No prompts.", qAr: 'أكمل WordLength ليعيد طول الكلمة.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Converter<String, Integer> len = new WordLength();
                    System.out.println(len.convert(sc.next()));
                }
            }

            interface Converter<A, B> {
                B convert(A input);
            }

            // TODO: class WordLength implements Converter<String, Integer>
          `,
          tests: [{ stdin: 'Generics', expected: '8' }, { stdin: 'hi', expected: '2' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Converter<String, Integer> len = new WordLength();
                    System.out.println(len.convert(sc.next()));
                }
            }

            interface Converter<A, B> {
                B convert(A input);
            }

            class WordLength implements Converter<String, Integer> {
                @Override
                public Integer convert(String s) {
                    return s.length();
                }
            }
          `,
          hint: "The header is <code>public Integer convert(String s)</code>.",
          explain: "A = String is the input, B = Integer is the result." },
        { t: 'bug', q: "This method should add a bonus mark of 5 to a list of marks. It does not compile. Tap the line where the real mistake is. (Two answers are accepted.)",
          code: J`
            import java.util.*;

            public class Main {
                public static void addBonus(ArrayList<? extends Number> marks) {
                    marks.add(5);
                }

                public static void main(String[] args) {
                    ArrayList<Integer> marks = new ArrayList<>(Arrays.asList(80, 90));
                    addBonus(marks);
                    System.out.println(marks);
                }
            }
          `, bug: [4, 5],
          fix: J`
            import java.util.*;

            public class Main {
                public static void addBonus(ArrayList<? super Integer> marks) {
                    marks.add(5);
                }

                public static void main(String[] args) {
                    ArrayList<Integer> marks = new ArrayList<>(Arrays.asList(80, 90));
                    addBonus(marks);
                    System.out.println(marks);
                }
            }
          `,
          hint: "Which wildcard is for reading, and which one is for adding?",
          explain: "<code>? extends Number</code> means \"some unknown kind of Number\". It might be a list of Doubles, so the compiler cannot allow adding the Integer 5 (line 5). The cause is the parameter type on line 4. To <b>add</b> Integers, use <code>? super Integer</code>: a list of Integer, Number or Object always accepts an Integer. The fixed program prints [80, 90, 5].",
          explainAr: 'القائمة ‎? extends‎ للقراءة فقط. للإضافة نستخدم ‎? super Integer‎.' },
        { t: 'bug', q: "<code>WordLength</code> should implement <code>Converter&lt;String, Integer&gt;</code>. The code does not compile. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Converter<String, Integer> len = new WordLength();
                    System.out.println(len.convert("Tabuk"));
                }
            }

            interface Converter<A, B> {
                B convert(A input);
            }

            class WordLength implements Converter<String, Integer> {
                public String convert(String s) { return "" + s.length(); }
            }
          `, bug: 13,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Converter<String, Integer> len = new WordLength();
                    System.out.println(len.convert("Tabuk"));
                }
            }

            interface Converter<A, B> {
                B convert(A input);
            }

            class WordLength implements Converter<String, Integer> {
                public Integer convert(String s) { return s.length(); }
            }
          `,
          hint: "In <code>Converter&lt;String, Integer&gt;</code>, what is B?",
          explain: "The class chose A = String and B = Integer, so <code>convert</code> must return an <code>Integer</code>. Line 13 returns a String, which does not match the interface, so the compiler refuses it. The fixed program prints 5.",
          explainAr: 'نوع الإرجاع يجب أن يكون B، وهو هنا Integer.' },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.*;

          public class Main {
              public static <A, B> ArrayList<B> convertAll(ArrayList<A> items, Converter<A, B> c) {
                  ArrayList<B> result = new ArrayList<>();
                  for (A item : items) {
                      result.add(c.convert(item));
                  }
                  return result;
              }

              public static void main(String[] args) {
                  ArrayList<Integer> marks = new ArrayList<>(Arrays.asList(91, 60, 85));
                  ArrayList<String> grades = convertAll(marks, new Pass());
                  System.out.println(grades);
                  System.out.println(grades.size());
              }
          }

          interface Converter<A, B> {
              B convert(A input);
          }

          class Pass implements Converter<Integer, String> {
              public String convert(Integer mark) {
                  if (mark >= 70) {
                      return "pass";
                  }
                  return "retake";
              }
          }
        `, answer: J`
          [pass, retake, pass]
          3
        `, explain: "Each mark is converted in order: 91 is at least 70 (pass), 60 is not (retake), 85 is (pass). The result list has the same size as the input: 3." },
        { t: 'fill', q: "Complete the header of the generic method that converts a whole list.", code: J`
          public static <A, B> ArrayList<___> convertAll(ArrayList<A> items, Converter<___> c) {
        `, answers: ['B', ['A, B', 'A,B']], explain: "The method returns a list of results (B), and it needs a converter from A to B: <code>Converter&lt;A, B&gt;</code>." }
      ]
    },

    // ---------------------------------------------------------------- L7 (new)
    {
      title: 'A generic container class with a list inside',
      titleAr: 'صنف حاوية عام بداخله قائمة',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why wrap a list inside your own class?' },
        { type: 'p', en: "An <code>ArrayList</code> can do almost anything: anyone can add at any position, remove any item, or clear the whole list. In a real program you usually want <b>rules</b>. At the registration office, students join a waiting list at the end and are served from the front; nobody jumps the queue. In a shop's store room, items are added and counted, but not thrown away by accident. If you put the list inside your own class and make it <code>private</code>, only your methods can touch it, and your methods follow the rules.",
          ar: 'نضع القائمة داخل صنف خاص بنا ونجعلها private، فلا يستطيع أحد تغييرها إلا عبر دوالنا التي تتبع القواعد.' },
        { type: 'p', en: "Make that class <b>generic</b>, and the same rules work for any kind of item: student names (<code>String</code>), ticket numbers (<code>Integer</code>) or your own <code>Product</code> objects. You write the container once and reuse it everywhere." },
        { type: 'analogy', title: 'A receptionist with a notebook', en: "At a clinic, the receptionist keeps a notebook of waiting patients. Patients cannot write in the notebook themselves; they ask the receptionist, who always writes new names at the bottom and calls names from the top. The notebook is the <code>ArrayList</code>. The receptionist is your class. The rules live in the receptionist, not in the notebook." },
        { type: 'h', en: 'Step 1: the class and its list field' },
        { type: 'p', en: "A container class needs one thing first: a private list whose items have the type T. Create the list right away, in the same line, so it is never <code>null</code>." },
        { type: 'code', code: J`
          class Inventory<T> {
              private ArrayList<T> items = new ArrayList<>();
          }
        ` },
        { type: 'lines', rows: [
          ['class Inventory<T>', 'A generic class. T is the type of the things stored.'],
          ['private ArrayList<T> items', 'The list holds T items. <code>private</code>: only methods of Inventory can use it.'],
          ['= new ArrayList<>();', 'The empty list is created together with each Inventory object.']
        ], ar: 'الحقل items قائمة خاصة عناصرها من النوع T، وننشئها مباشرة حتى لا تكون null.' },
        { type: 'check', q: 'In an <code>Inventory&lt;String&gt;</code> object, what does the field <code>items</code> hold?', options: ['Strings', 'Inventories', 'Only one String', 'int values'], answer: 0, explain: "T is String, so <code>items</code> is an <code>ArrayList&lt;String&gt;</code>." },
        { type: 'h', en: 'Step 2: methods that pass the work to the list' },
        { type: 'p', en: "Each method of the container is short: it passes the job to the list. This is called <b>delegation</b> (giving a job to someone else who knows how to do it). <code>add</code> calls <code>items.add</code>, <code>get</code> calls <code>items.get</code>, and <code>size</code> calls <code>items.size</code>. The types are T everywhere, so the compiler checks them for you." },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  Inventory<String> store = new Inventory<>();
                  store.add("Notebook");
                  store.add("Pen");
                  System.out.println(store.size());
                  System.out.println(store.get(1));
              }
          }

          class Inventory<T> {
              private ArrayList<T> items = new ArrayList<>();

              public void add(T item) {
                  items.add(item);
              }

              public T get(int index) {
                  return items.get(index);
              }

              public int size() {
                  return items.size();
              }
          }
        `, out: J`
          2
          Pen
        ` },
        { type: 'lines', rows: [
          ['public void add(T item)', 'Accepts only a T. For <code>Inventory&lt;String&gt;</code>, only Strings.'],
          ['public T get(int index)', 'Returns a T, so the caller gets a String back with no cast.'],
          ['return items.size();', 'Delegation: the list already knows its size.'],
          ['store.get(1)', 'Index 1 is the second item: Pen.']
        ], ar: 'كل دالة تمرر العمل إلى القائمة (تفويض)، والأنواع كلها T فيتحقق منها المترجم.' },
        { type: 'memory', title: 'An Inventory object holds a list, the list holds references',
          en: "There are three levels: the variable <code>store</code> refers to the Inventory object; its field <code>items</code> refers to an ArrayList; the list refers to the String objects.",
          code: J`
            Inventory<String> store = new Inventory<>();
            store.add("Notebook");
            store.add("Pen");
          `,
          frames: [
            { label: 'After <code>Inventory&lt;String&gt; store = new Inventory&lt;&gt;();</code>: the empty list is created too',
              vars: [{ name: 'store', type: 'Inventory<String>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'Inventory<String>', fields: [{ name: 'items', ref: 'B' }] },
                { id: 'B', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '0' }] }] },
            { label: 'After <code>store.add("Notebook");</code>',
              vars: [{ name: 'store', type: 'Inventory<String>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'Inventory<String>', fields: [{ name: 'items', ref: 'B' }] },
                { id: 'B', cls: 'ArrayList<String>', fields: [{ name: '[0]', ref: 'C' }] },
                { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"Notebook"' }] }] },
            { label: 'After <code>store.add("Pen");</code>',
              vars: [{ name: 'store', type: 'Inventory<String>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'Inventory<String>', fields: [{ name: 'items', ref: 'B' }] },
                { id: 'B', cls: 'ArrayList<String>', fields: [{ name: '[0]', ref: 'C' }, { name: '[1]', ref: 'D' }] },
                { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"Notebook"' }] },
                { id: 'D', cls: 'String', fields: [{ name: 'text', value: '"Pen"' }] }] }
          ],
          ar: 'المتغير يشير إلى كائن Inventory، وحقله items يشير إلى قائمة، والقائمة تشير إلى النصوص.' },
        { type: 'h', en: 'Step 3: find an item' },
        { type: 'analogy', title: 'Asking the librarian', en: "At the college library you do not walk between the shelves yourself. You ask the librarian: \"Do you have the Java textbook? Where is it?\" The librarian checks the catalogue and answers \"Shelf 4\" or \"Sorry, we do not have it\". <code>find</code> and <code>contains</code> are those questions; the container answers them, and you never touch the catalogue (the private list) yourself." },
        { type: 'p', en: "A useful container can also answer \"where is it?\" and \"do we have it?\". <code>find</code> returns the position of an item, or <code>-1</code> when it is missing. It compares with <code>equals</code>, because T is an object type. <code>contains</code> reuses <code>find</code>: we do not write the loop twice." },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  Inventory<Integer> tickets = new Inventory<>();
                  tickets.add(105);
                  tickets.add(230);
                  tickets.add(318);
                  System.out.println(tickets.find(230));
                  System.out.println(tickets.contains(999));
              }
          }

          class Inventory<T> {
              private ArrayList<T> items = new ArrayList<>();

              public void add(T item) {
                  items.add(item);
              }

              public int find(T target) {
                  for (int i = 0; i < items.size(); i++) {
                      if (items.get(i).equals(target)) {
                          return i;
                      }
                  }
                  return -1;
              }

              public boolean contains(T target) {
                  return find(target) != -1;
              }
          }
        `, out: J`
          1
          false
        ` },
        { type: 'lines', rows: [
          ['public int find(T target)', 'The target has the same type as the items. The answer is a position, so <code>int</code>.'],
          ['items.get(i).equals(target)', 'Compare values with <code>equals</code>, never with <code>==</code>.'],
          ['return -1;', 'Reached only when the loop ends without finding the target.'],
          ['return find(target) != -1;', '<code>contains</code> asks <code>find</code> and turns the answer into true or false.']
        ], ar: 'find تعيد موقع العنصر أو ‎-1‎، و contains تستعمل find لتعيد true أو false.' },
        { type: 'check', q: 'With <code>Inventory&lt;String&gt; inv</code> holding "Tea", "Dates", what does <code>inv.find("Coffee")</code> return?', options: ['0', '1', '-1', 'null'], answer: 2, explain: "\"Coffee\" is not in the inventory, so the loop ends and <code>find</code> returns -1." },
        { type: 'note', kind: 'warn', en: "If you write only <code>private ArrayList&lt;T&gt; items;</code> (without <code>= new ArrayList&lt;&gt;()</code>), the field is <code>null</code>. The first <code>add</code> then crashes with <code>NullPointerException</code>. Create the list in the field line or in the constructor.", ar: 'إذا نسينا إنشاء القائمة تبقى null وينهار البرنامج عند أول إضافة.' },
        { type: 'steps', title: 'Worked example: a waiting list at the registration office', problem: 'Write a generic <code>WaitingList&lt;T&gt;</code>: people <code>join</code> at the end, <code>serveNext</code> removes and returns the first person, <code>peekNext</code> only looks, and <code>position</code> says a person\'s place in the line (1, 2, 3...) or -1.',
          steps: [
            { en: 'The class keeps a private list of T. <code>join</code> adds at the end.', code: J`
              class WaitingList<T> {
                  private ArrayList<T> people = new ArrayList<>();

                  public void join(T person) {
                      people.add(person);
                  }
            ` },
            { en: '<code>serveNext</code> removes the person at index 0 (the front) and returns them. <code>peekNext</code> returns the front without removing.', code: J`
                  public T serveNext() {
                      return people.remove(0);
                  }

                  public T peekNext() {
                      return people.get(0);
                  }
            ` },
            { en: '<code>position</code> uses the list\'s own <code>indexOf</code> (Unit 7), which compares with <code>equals</code>. People count from 1, so add 1.', code: J`
                  public int position(T person) {
                      int i = people.indexOf(person);
                      if (i == -1) {
                          return -1;
                      }
                      return i + 1;
                  }
            ` },
            { en: 'Add <code>size</code> and <code>isEmpty</code>, then test with three students.', code: J`
              WaitingList<String> office = new WaitingList<>();
              office.join("Fahad");
              office.join("Noura");
              office.join("Salem");
            ` }
          ],
          code: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    WaitingList<String> office = new WaitingList<>();
                    office.join("Fahad");
                    office.join("Noura");
                    office.join("Salem");
                    System.out.println("Waiting: " + office.size());
                    System.out.println("Noura is number " + office.position("Noura"));
                    System.out.println("Serving " + office.serveNext());
                    System.out.println("Next: " + office.peekNext());
                    System.out.println("Noura is number " + office.position("Noura"));
                }
            }

            class WaitingList<T> {
                private ArrayList<T> people = new ArrayList<>();

                public void join(T person) {
                    people.add(person);
                }

                public T serveNext() {
                    return people.remove(0);
                }

                public T peekNext() {
                    return people.get(0);
                }

                public int size() {
                    return people.size();
                }

                public boolean isEmpty() {
                    return people.isEmpty();
                }

                public int position(T person) {
                    int i = people.indexOf(person);
                    if (i == -1) {
                        return -1;
                    }
                    return i + 1;
                }
            }
          `, out: J`
            Waiting: 3
            Noura is number 2
            Serving Fahad
            Next: Noura
            Noura is number 1
          `, ar: 'من يصل أولًا يُخدم أولًا: نضيف في النهاية ونحذف من البداية. بعد خدمة فهد تصبح نورة الأولى.' },
        { type: 'p', en: "Notice the difference from the stack of Lesson 4. A stack serves the <b>last</b> one who arrived; a waiting list serves the <b>first</b>. Both are generic containers with an ArrayList inside; only the rules in the methods differ.",
          ar: 'المكدس يخدم آخر من وصل، وقائمة الانتظار تخدم أول من وصل؛ الفرق في قواعد الدوال فقط.' },
        { type: 'steps', title: 'Worked example: a shop inventory of Product objects', problem: 'Use the same <code>Inventory&lt;T&gt;</code> with your own class <code>Product</code>. Store three products and print how many there are, the total value of the stock in riyals, and the name of the second product.',
          steps: [
            { en: 'Write a small <code>Product</code> class with a name and a price, and getters.', code: J`
              class Product {
                  private String name;
                  private double price;
                  public Product(String name, double price) { this.name = name; this.price = price; }
                  public String getName() { return name; }
                  public double getPrice() { return price; }
              }
            ` },
            { en: 'Create an <code>Inventory&lt;Product&gt;</code> and add products. The container does not know anything about prices; it only stores T.', code: J`
              Inventory<Product> shop = new Inventory<>();
              shop.add(new Product("Notebook", 12.5));
              shop.add(new Product("Pen", 3.0));
              shop.add(new Product("Bag", 85.0));
            ` },
            { en: '<code>shop.get(i)</code> returns a <code>Product</code>, so <code>getPrice()</code> works directly, with no cast.', code: J`
              double total = 0;
              for (int i = 0; i < shop.size(); i++) {
                  Product p = shop.get(i);
                  total += p.getPrice();
              }
            ` },
            { en: 'Print the three results.', code: J`
              System.out.println("Items: " + shop.size());
              System.out.println("Stock value: " + total + " SAR");
              System.out.println("Second item: " + shop.get(1).getName());
            ` }
          ],
          code: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    Inventory<Product> shop = new Inventory<>();
                    shop.add(new Product("Notebook", 12.5));
                    shop.add(new Product("Pen", 3.0));
                    shop.add(new Product("Bag", 85.0));
                    double total = 0;
                    for (int i = 0; i < shop.size(); i++) {
                        Product p = shop.get(i);
                        total += p.getPrice();
                    }
                    System.out.println("Items: " + shop.size());
                    System.out.println("Stock value: " + total + " SAR");
                    System.out.println("Second item: " + shop.get(1).getName());
                }
            }

            class Inventory<T> {
                private ArrayList<T> items = new ArrayList<>();

                public void add(T item) {
                    items.add(item);
                }

                public T get(int index) {
                    return items.get(index);
                }

                public int size() {
                    return items.size();
                }
            }

            class Product {
                private String name;
                private double price;
                public Product(String name, double price) { this.name = name; this.price = price; }
                public String getName() { return name; }
                public double getPrice() { return price; }
            }
          `, out: J`
            Items: 3
            Stock value: 100.5 SAR
            Second item: Pen
          `, ar: 'الحاوية العامة نفسها تخزن كائنات Product، وget تعيد Product جاهزًا دون cast. ‎12.5 + 3.0 + 85.0 = 100.5‎.' }
      ],
      mistakes: [
        { title: 'Forgetting to create the list', en: "The field is <code>null</code> and the first <code>add</code> crashes with <code>NullPointerException</code>.", code: J`
          private ArrayList<T> items;                       // null!
          private ArrayList<T> items = new ArrayList<>();   // right
        ` },
        { title: 'Making the list public', en: "With <code>public ArrayList&lt;T&gt; items</code>, any code can remove or reorder items and break your rules (for example, jump the queue). Keep it <code>private</code> and offer methods." },
        { title: 'Writing the list type without the class placeholder', en: "<code>class Inventory { private ArrayList&lt;T&gt; items; }</code> does not compile: T was never declared. Write <code>class Inventory&lt;T&gt;</code>." },
        { title: 'Serving from an empty list', en: "<code>people.remove(0)</code> on an empty list throws <code>IndexOutOfBoundsException</code>. Check <code>isEmpty()</code> before <code>serveNext()</code> or <code>peekNext()</code>.", code: J`
          if (!office.isEmpty()) {
              System.out.println(office.serveNext());
          }
        ` }
      ],
      remember: [
        "A generic container keeps a <code>private ArrayList&lt;T&gt;</code> inside and offers its own methods.",
        "Create the list in the field line: <code>= new ArrayList&lt;&gt;()</code>, or it is <code>null</code>.",
        "Methods pass the work to the list (delegation): <code>items.add</code>, <code>items.get</code>, <code>items.size</code>.",
        "Use T for parameters and return types, so callers never need a cast.",
        "Compare items with <code>equals</code> in <code>find</code>; return -1 when the item is missing.",
        "The rules (end or front, stack or queue) live in your methods, not in the list."
      ],
      rememberAr: 'الحاوية العامة تحفظ قائمة خاصة من النوع T وتمرر العمل إليها. ننشئ القائمة مباشرة، ونقارن بـ equals، ونضع القواعد في الدوال.',
      practice: [
        { t: 'mcq', q: "Why is the list field of a container class usually <code>private</code>?", options: ['So that it uses less memory', 'So that only the class\'s own methods can change it and the rules are kept', 'Because generic fields must be private', 'So that it can hold primitives'], answer: 1, explain: "Private fields protect the rules: outside code must use your methods, such as <code>join</code> and <code>serveNext</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  Inventory<String> books = new Inventory<>();
                  books.add("Math");
                  books.add("Physics");
                  books.add("Java");
                  System.out.println(books.find("Java"));
                  System.out.println(books.find("Art"));
                  System.out.println(books.get(0).length() + books.size());
              }
          }

          class Inventory<T> {
              private ArrayList<T> items = new ArrayList<>();
              public void add(T item) { items.add(item); }
              public T get(int index) { return items.get(index); }
              public int size() { return items.size(); }
              public int find(T target) {
                  for (int i = 0; i < items.size(); i++) {
                      if (items.get(i).equals(target)) {
                          return i;
                      }
                  }
                  return -1;
              }
          }
        `, answer: J`
          2
          -1
          7
        `, explain: "\"Java\" is at index 2. \"Art\" is missing, so -1. <code>get(0)</code> is the String \"Math\" with length 4, and the size is 3: 4 + 3 = 7." },
        { t: 'mcq', q: "A waiting list must serve the person who arrived <b>first</b>. Which line belongs in <code>serveNext()</code>?", options: ['return people.remove(people.size() - 1);', 'return people.remove(0);', 'return people.get(0);', 'people.clear();'], answer: 1, explain: "The first person is at index 0. <code>remove(0)</code> takes them out and returns them; <code>get(0)</code> would only look." },
        { t: 'fill', q: "Complete the generic waiting list.", code: J`
          class WaitingList___ {
              private ArrayList___ people = new ArrayList<>();

              public ___ serveNext() {
                  return people.remove(0);
              }
          }
        `, answers: ['<T>', '<T>', 'T'], explain: "The class declares <code>&lt;T&gt;</code>, the list holds T items, and <code>serveNext</code> returns a T." },
        { t: 'order', q: "Put the lines in order to build a tiny container class.", lines: [
          'class Inventory<T> {',
          '    private ArrayList<T> items = new ArrayList<>();',
          '    public void add(T item) {',
          '        items.add(item);',
          '    }',
          '}'
        ], explain: "Class header with T, the private list field, then the add method that passes the item to the list." },
        { t: 'bug', q: "This program crashes when it runs. Tap the line with the bug.",
          code: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    Inventory<String> box = new Inventory<>();
                    box.add("Charger");
                    System.out.println(box.size());
                }
            }

            class Inventory<T> {
                private ArrayList<T> items;
                public void add(T item) { items.add(item); }
                public int size() { return items.size(); }
            }
          `, bug: 12,
          fix: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    Inventory<String> box = new Inventory<>();
                    box.add("Charger");
                    System.out.println(box.size());
                }
            }

            class Inventory<T> {
                private ArrayList<T> items = new ArrayList<>();
                public void add(T item) { items.add(item); }
                public int size() { return items.size(); }
            }
          `,
          hint: "Is the list ever created with <code>new</code>?",
          explain: "Line 12 declares the field but never creates the list, so <code>items</code> is <code>null</code>. When <code>add</code> runs <code>items.add(item)</code>, Java throws <code>NullPointerException</code>. Creating the list in the field line fixes it; the program then prints 1.",
          explainAr: 'القائمة لم تُنشأ بـ new فبقيت null، فينهار البرنامج عند add.' },
        { t: 'code', q: "Complete the generic class <code>WaitingList&lt;T&gt;</code> with <code>join</code>, <code>serveNext</code> and <code>size</code>. The program reads <code>n</code> names and puts them in the line, then reads <code>k</code> and serves <code>k</code> people, printing <code>Serving </code> + name for each. At the end it prints <code>Left: </code> + the number still waiting. No prompts.", qAr: 'أكمل{{g:|ي}} الصنف العام WaitingList: من يصل أولًا يُخدم أولًا.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    WaitingList<String> line = new WaitingList<>();
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        line.join(sc.next());
                    }
                    int k = sc.nextInt();
                    for (int i = 0; i < k; i++) {
                        System.out.println("Serving " + line.serveNext());
                    }
                    System.out.println("Left: " + line.size());
                }
            }

            class WaitingList<T> {
                private ArrayList<T> people = new ArrayList<>();

                // join(T person), serveNext(), size()
            }
          `,
          tests: [
            { stdin: '3\nFahad Noura Salem\n2', expected: 'Serving Fahad\nServing Noura\nLeft: 1' },
            { stdin: '2\nAli Huda\n0', expected: 'Left: 2' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    WaitingList<String> line = new WaitingList<>();
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        line.join(sc.next());
                    }
                    int k = sc.nextInt();
                    for (int i = 0; i < k; i++) {
                        System.out.println("Serving " + line.serveNext());
                    }
                    System.out.println("Left: " + line.size());
                }
            }

            class WaitingList<T> {
                private ArrayList<T> people = new ArrayList<>();

                public void join(T person) {
                    people.add(person);
                }

                public T serveNext() {
                    return people.remove(0);
                }

                public int size() {
                    return people.size();
                }
            }
          `,
          hint: "<code>join</code> calls <code>people.add(person)</code>; <code>serveNext</code> returns <code>people.remove(0)</code>.",
          explain: "Adding at the end and removing from index 0 gives \"first come, first served\". Because <code>serveNext</code> returns T, the caller gets a String with no cast." }
      ]
    },

    // ---------------------------------------------------------------- L8 (new)
    {
      title: 'A toolbox of generic methods for arrays',
      titleAr: 'صندوق أدوات من الدوال العامة للمصفوفات',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why build a toolbox?' },
        { type: 'p', en: "In CS101 you wrote the same array loops again and again: print every item, count how many times something appears, find the biggest, reverse the order. Each time the array type was different: marks, names, prices. With generic methods you can write each tool <b>once</b>, put all of them in one class, and use them for any array of objects. The Java library does exactly this in its <code>Arrays</code> and <code>Collections</code> classes.",
          ar: 'نكتب كل أداة مرة واحدة كدالة عامة، ونجمع الأدوات في صنف واحد نستخدمه مع أي مصفوفة كائنات.' },
        { type: 'analogy', title: 'A real toolbox', en: "A screwdriver does not care whether the screw is in a chair, a desk or a door. You keep it in a toolbox and take it out whenever you need it. Our class <code>ArrayTools</code> is the toolbox; each generic method is one tool that works on any array." },
        { type: 'h', en: 'Tools 1 and 2: printAll and countMatches' },
        { type: 'p', en: "The class <code>ArrayTools</code> is <b>not</b> generic itself. Each method is <code>static</code> and declares its <b>own</b> <code>&lt;T&gt;</code>, like the generic methods of Lesson 2. You call them with the class name: <code>ArrayTools.printAll(answers)</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] answers = {"B", "A", "B", "C", "B"};
                  Integer[] marks = {90, 75, 90};
                  ArrayTools.printAll(answers);
                  System.out.println(ArrayTools.countMatches(answers, "B"));
                  System.out.println(ArrayTools.countMatches(marks, 90));
              }
          }

          class ArrayTools {
              public static <T> void printAll(T[] items) {
                  for (int i = 0; i < items.length; i++) {
                      if (i > 0) {
                          System.out.print(", ");
                      }
                      System.out.print(items[i]);
                  }
                  System.out.println();
              }

              public static <T> int countMatches(T[] items, T target) {
                  int count = 0;
                  for (T item : items) {
                      if (item.equals(target)) {
                          count++;
                      }
                  }
                  return count;
              }
          }
        `, out: J`
          B, A, B, C, B
          3
          2
        ` },
        { type: 'lines', rows: [
          ['class ArrayTools', 'A normal class used as a toolbox. No <code>&lt;T&gt;</code> here.'],
          ['public static <T> int countMatches(T[] items, T target)', 'Each method has its own T. The array and the target must agree.'],
          ['ArrayTools.countMatches(answers, "B")', 'T = String. "B" appears 3 times in the quiz answers.'],
          ['ArrayTools.countMatches(marks, 90)', 'T = Integer. 90 appears twice.']
        ], ar: 'الصنف ArrayTools ليس عامًا، لكن كل دالة فيه تعلن T خاصًا بها، ونستدعيها باسم الصنف.' },
        { type: 'check', q: 'Why does <code>ArrayTools</code> not need <code>&lt;T&gt;</code> after its name?', options: ['Because static generic methods declare their own type parameter', 'Because it has no methods', 'Because T is always String', 'Because arrays cannot be generic'], answer: 0, explain: "Each static method says <code>&lt;T&gt;</code> before its return type, so T is chosen separately at every call." },
        { type: 'h', en: 'Tool 3: swap and reverse' },
        { type: 'p', en: "To reverse an array, swap the first item with the last, the second with the second-last, and so on, until you reach the middle. A tool can use another tool: <code>reverse</code> calls <code>swap</code>. The loop runs only <code>a.length / 2</code> times; going further would swap the pairs back." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] days = {"Sun", "Mon", "Tue", "Wed", "Thu"};
                  ArrayTools.reverse(days);
                  ArrayTools.printAll(days);
              }
          }

          class ArrayTools {
              public static <T> void swap(T[] a, int i, int j) {
                  T tmp = a[i];
                  a[i] = a[j];
                  a[j] = tmp;
              }

              public static <T> void reverse(T[] a) {
                  for (int i = 0; i < a.length / 2; i++) {
                      swap(a, i, a.length - 1 - i);
                  }
              }

              public static <T> void printAll(T[] items) {
                  for (int i = 0; i < items.length; i++) {
                      if (i > 0) {
                          System.out.print(", ");
                      }
                      System.out.print(items[i]);
                  }
                  System.out.println();
              }
          }
        `, out: J`
          Thu, Wed, Tue, Mon, Sun
        ` },
        { type: 'lines', rows: [
          ['i < a.length / 2', '5 / 2 = 2, so i is 0, then 1. The middle item (Tue) stays where it is.'],
          ['swap(a, i, a.length - 1 - i)', 'i = 0 swaps positions 0 and 4; i = 1 swaps positions 1 and 3.'],
          ['ArrayTools.reverse(days)', 'The array itself changes, because the method receives a reference to it.']
        ], ar: 'نبدل الأول مع الأخير والثاني مع ما قبل الأخير حتى المنتصف فقط.' },
        { type: 'analogy', title: 'Students changing places in a line', en: "Five students stand in a line for a photo, and the teacher says: \"Reverse the order!\" The first and the last student change places, then the second and the fourth. The one in the middle does not move. If the teacher kept going, the second and fourth would change back, and the first and last too: the line would be as it started. That is why <code>reverse</code> stops at the middle." },
        { type: 'check', q: 'How many swaps does <code>reverse</code> make for an array of 6 items?', options: ['2', '3', '5', '6'], answer: 1, explain: "6 / 2 = 3: positions (0,5), (1,4) and (2,3)." },
        { type: 'h', en: 'Tool 4: findMax needs a bound' },
        { type: 'p', en: "To find the biggest item we must <b>compare</b>, and a plain T cannot compare. So <code>findMax</code> uses the bound from Lesson 5: <code>&lt;T extends Comparable&lt;T&gt;&gt;</code>. Start with the first item as the best so far, then let every other item challenge it.",
          ar: 'لإيجاد الأكبر نحتاج المقارنة، لذلك نضيف القيد extends Comparable&lt;T&gt;‎.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Integer[] marks = {72, 95, 88};
                  String[] names = {"Lama", "Omar", "Basma"};
                  Double[] prices = {9.5, 3.25};
                  System.out.println(ArrayTools.findMax(marks));
                  System.out.println(ArrayTools.findMax(names));
                  System.out.println(ArrayTools.findMax(prices));
              }
          }

          class ArrayTools {
              public static <T extends Comparable<T>> T findMax(T[] a) {
                  T best = a[0];
                  for (int i = 1; i < a.length; i++) {
                      if (a[i].compareTo(best) > 0) {
                          best = a[i];
                      }
                  }
                  return best;
              }
          }
        `, out: J`
          95
          Omar
          9.5
        ` },
        { type: 'lines', rows: [
          ['<T extends Comparable<T>>', 'Only types that can compare themselves: Integer, String, Double, your Comparable classes.'],
          ['T best = a[0];', 'The first item is the best so far.'],
          ['for (int i = 1; ...)', 'Start at 1: item 0 is already in <code>best</code>.'],
          ['findMax(names)', 'Strings compare alphabetically: O comes after L and B, so "Omar".']
        ] },
        { type: 'memory', title: 'best is a reference that moves to the winner',
          en: "<code>best</code> never copies a number. It is a reference that points at the current winner inside the array. Follow it through the loop for <code>{72, 95, 88}</code>.",
          frames: [
            { label: 'After <code>T best = a[0];</code>: the first mark is the best so far',
              vars: [{ name: 'a', type: 'T[]', ref: 'A' }, { name: 'best', type: 'T', ref: 'B' }],
              objects: [
                { id: 'A', cls: 'Integer[3]', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Integer', fields: [{ name: 'value', value: '72' }] },
                { id: 'C', cls: 'Integer', fields: [{ name: 'value', value: '95' }] },
                { id: 'D', cls: 'Integer', fields: [{ name: 'value', value: '88' }] }] },
            { label: 'i = 1: 95 compared with 72 gives a positive number, so <code>best = a[1];</code>',
              vars: [{ name: 'a', type: 'T[]', ref: 'A' }, { name: 'best', type: 'T', ref: 'C' }, { name: 'i', type: 'int', value: '1' }],
              objects: [
                { id: 'A', cls: 'Integer[3]', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Integer', fields: [{ name: 'value', value: '72' }] },
                { id: 'C', cls: 'Integer', fields: [{ name: 'value', value: '95' }] },
                { id: 'D', cls: 'Integer', fields: [{ name: 'value', value: '88' }] }] },
            { label: 'i = 2: 88 is smaller than 95, so <code>best</code> stays. The method returns 95',
              vars: [{ name: 'a', type: 'T[]', ref: 'A' }, { name: 'best', type: 'T', ref: 'C' }, { name: 'i', type: 'int', value: '2' }],
              objects: [
                { id: 'A', cls: 'Integer[3]', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Integer', fields: [{ name: 'value', value: '72' }] },
                { id: 'C', cls: 'Integer', fields: [{ name: 'value', value: '95' }] },
                { id: 'D', cls: 'Integer', fields: [{ name: 'value', value: '88' }] }] }
          ],
          ar: 'المتغير best مرجع ينتقل إلى العنصر الفائز داخل المصفوفة، ولا ينسخ القيم.' },
        { type: 'h', en: 'Which tool needs what?' },
        { type: 'p', en: "Before you write a generic tool, ask one question: \"Does this tool need to know which item is <i>bigger</i>?\" If not, a plain <code>&lt;T&gt;</code> is enough, because printing, moving and <code>equals</code> work for every object. If yes, add the bound. Keep the bound only where it is needed: a tool with a bound accepts fewer types.",
          ar: 'إذا احتاجت الأداة معرفة الأكبر أو الأصغر نضيف القيد Comparable، وإلا يكفي T عادي.' },
        { type: 'table', head: ['Tool', 'Type parameter', 'Why'], rows: [
          ['<code>printAll</code>', '<code>&lt;T&gt;</code>', 'Uses <code>toString</code>, which every object has'],
          ['<code>countMatches</code>', '<code>&lt;T&gt;</code>', 'Uses <code>equals</code>, which every object has'],
          ['<code>swap</code>, <code>reverse</code>', '<code>&lt;T&gt;</code>', 'Only moves references'],
          ['<code>findMax</code>, <code>isSorted</code>', '<code>&lt;T extends Comparable&lt;T&gt;&gt;</code>', 'Needs <code>compareTo</code> to decide bigger or smaller']
        ] },
        { type: 'note', kind: 'exam', en: "<code>findMax</code> reads <code>a[0]</code> first, so it needs at least one item. With an empty array it crashes with <code>ArrayIndexOutOfBoundsException</code>. In an exam, say this condition (\"the array is not empty\") or check <code>a.length == 0</code> first.", ar: 'إذا كانت المصفوفة فارغة ينهار البرنامج عند a[0]‎.' },
        { type: 'steps', title: 'Worked example: the best mark and how many got it', problem: 'A teacher has the marks of five students. Use two tools from the toolbox to print the best mark and how many students got it.',
          steps: [
            { en: 'Put the marks in an <code>Integer[]</code> (not <code>int[]</code>), so the generic tools accept it.', code: J`
              Integer[] marks = {85, 92, 78, 92, 60};
            ` },
            { en: 'Find the best mark with <code>findMax</code>. T is Integer, so the result is an Integer.', code: J`
              Integer best = ArrayTools.findMax(marks);
            ` },
            { en: 'Count how many times that mark appears with <code>countMatches</code>. <code>equals</code> compares the values.', code: J`
              int howMany = ArrayTools.countMatches(marks, best);
            ` },
            { en: 'Print both results.', code: J`
              System.out.println("Best mark: " + best);
              System.out.println("Students with it: " + howMany);
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Integer[] marks = {85, 92, 78, 92, 60};
                    Integer best = ArrayTools.findMax(marks);
                    int howMany = ArrayTools.countMatches(marks, best);
                    System.out.println("Best mark: " + best);
                    System.out.println("Students with it: " + howMany);
                }
            }

            class ArrayTools {
                public static <T extends Comparable<T>> T findMax(T[] a) {
                    T best = a[0];
                    for (int i = 1; i < a.length; i++) {
                        if (a[i].compareTo(best) > 0) {
                            best = a[i];
                        }
                    }
                    return best;
                }

                public static <T> int countMatches(T[] items, T target) {
                    int count = 0;
                    for (T item : items) {
                        if (item.equals(target)) {
                            count++;
                        }
                    }
                    return count;
                }
            }
          `, out: J`
            Best mark: 92
            Students with it: 2
          `, ar: 'نستعمل أداتين معًا: findMax لإيجاد أعلى علامة، ثم countMatches لعدّ من حصلوا عليها.' },
        { type: 'steps', title: 'Worked example: is the array sorted?', problem: 'Write a tool <code>isSorted(a)</code> that returns <code>true</code> when every item is less than or equal to the next one. Test it with a list of names and a list of marks.',
          steps: [
            { en: 'We compare items, so the method needs the Comparable bound. It returns a <code>boolean</code>.', code: J`
              public static <T extends Comparable<T>> boolean isSorted(T[] a) {
            ` },
            { en: 'Look at each neighbour pair: item <code>i - 1</code> and item <code>i</code>. If the left one is bigger, the array is not sorted: return <code>false</code> at once.', code: J`
                  for (int i = 1; i < a.length; i++) {
                      if (a[i - 1].compareTo(a[i]) > 0) {
                          return false;
                      }
                  }
            ` },
            { en: 'If no pair was in the wrong order, the array is sorted.', code: J`
                  return true;
              }
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    String[] names = {"Amal", "Badr", "Hessa"};
                    Integer[] marks = {60, 85, 70};
                    System.out.println(ArrayTools.isSorted(names));
                    System.out.println(ArrayTools.isSorted(marks));
                }
            }

            class ArrayTools {
                public static <T extends Comparable<T>> boolean isSorted(T[] a) {
                    for (int i = 1; i < a.length; i++) {
                        if (a[i - 1].compareTo(a[i]) > 0) {
                            return false;
                        }
                    }
                    return true;
                }
            }
          `, out: J`
            true
            false
          `, ar: 'نقارن كل عنصر بالذي بعده؛ إذا كان الأيسر أكبر فالمصفوفة غير مرتبة. 85 ثم 70 ليس ترتيبًا تصاعديًا.' }
      ],
      mistakes: [
        { title: 'Forgetting the bound in findMax', en: "Without <code>extends Comparable&lt;T&gt;</code>, the line <code>a[i].compareTo(best)</code> does not compile." },
        { title: 'Reversing all the way to the end', en: "If the loop in <code>reverse</code> runs to <code>a.length</code> instead of <code>a.length / 2</code>, every pair is swapped twice and the array ends exactly as it started.", code: J`
          for (int i = 0; i < a.length; i++)       // wrong: undoes itself
          for (int i = 0; i < a.length / 2; i++)   // right
        ` },
        { title: 'Off by one with &lt;=', en: "<code>i &lt;= items.length</code> reads one position past the end and throws <code>ArrayIndexOutOfBoundsException</code>. The last index is <code>length - 1</code>." },
        { title: 'Passing a primitive array', en: "<code>int[]</code>, <code>double[]</code> and <code>char[]</code> do not fit <code>T[]</code>. Use <code>Integer[]</code>, <code>Double[]</code>, <code>Character[]</code>." }
      ],
      remember: [
        "A toolbox class (not generic itself) can hold many <code>static &lt;T&gt;</code> methods.",
        "Tools that only move or compare with <code>equals</code> need a plain T: printAll, countMatches, swap, reverse.",
        "Tools that compare bigger/smaller need <code>&lt;T extends Comparable&lt;T&gt;&gt;</code>: findMax, isSorted.",
        "<code>reverse</code> swaps pairs only up to the middle: <code>i &lt; a.length / 2</code>.",
        "Generic tools take arrays of objects: <code>Integer[]</code>, not <code>int[]</code>."
      ],
      rememberAr: 'الأدوات التي تنقل أو تقارن بـ equals تحتاج T عاديًا، والأدوات التي تحدد الأكبر والأصغر تحتاج القيد Comparable. نعكس حتى المنتصف فقط.',
      practice: [
        { t: 'mcq', q: "Which of these tools needs the bound <code>&lt;T extends Comparable&lt;T&gt;&gt;</code>?", options: ['printAll', 'swap', 'findMax', 'countMatches'], answer: 2, explain: "Only findMax compares items to decide which is bigger. The others print, move, or use <code>equals</code>, which every object has." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Integer[] marks = {60, 70, 80, 90};
                  ArrayTools.reverse(marks);
                  ArrayTools.printAll(marks);
                  System.out.println(ArrayTools.findMax(marks) - marks[3]);
              }
          }

          class ArrayTools {
              public static <T> void swap(T[] a, int i, int j) {
                  T tmp = a[i];
                  a[i] = a[j];
                  a[j] = tmp;
              }

              public static <T> void reverse(T[] a) {
                  for (int i = 0; i < a.length / 2; i++) {
                      swap(a, i, a.length - 1 - i);
                  }
              }

              public static <T> void printAll(T[] items) {
                  for (int i = 0; i < items.length; i++) {
                      if (i > 0) {
                          System.out.print(", ");
                      }
                      System.out.print(items[i]);
                  }
                  System.out.println();
              }

              public static <T extends Comparable<T>> T findMax(T[] a) {
                  T best = a[0];
                  for (int i = 1; i < a.length; i++) {
                      if (a[i].compareTo(best) > 0) {
                          best = a[i];
                      }
                  }
                  return best;
              }
          }
        `, answer: J`
          90, 80, 70, 60
          30
        `, explain: "After reversing, the array is 90, 80, 70, 60. The maximum is still 90, and <code>marks[3]</code> is now 60: 90 - 60 = 30." },
        { t: 'fill', q: "Complete the header of <code>findMax</code> so that it can call <code>compareTo</code>.", code: J`
          public static <T extends ___<T>> T findMax(T[] a) {
              T best = a[0];
              for (int i = 1; i < a.length; i++) {
                  if (a[i].___(best) > 0) {
                      best = a[i];
                  }
              }
              return best;
          }
        `, answers: ['Comparable', 'compareTo'], explain: "The bound <code>T extends Comparable&lt;T&gt;</code> makes <code>compareTo</code> available on T." },
        { t: 'order', q: "Put the lines of <code>reverse</code> in order.", lines: [
          'public static <T> void reverse(T[] a) {',
          '    for (int i = 0; i < a.length / 2; i++) {',
          '        swap(a, i, a.length - 1 - i);',
          '    }',
          '}'
        ], explain: "The loop goes only to the middle and swaps each item with its partner from the end." },
        { t: 'bug', q: "This program should print the array reversed: <code>[d, c, b, a]</code>. It compiles and runs, but it prints <code>[a, b, c, d]</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static <T> void reverse(T[] a) {
                    for (int i = 0; i < a.length; i++) {
                        T tmp = a[i];
                        a[i] = a[a.length - 1 - i];
                        a[a.length - 1 - i] = tmp;
                    }
                }

                public static void main(String[] args) {
                    String[] s = {"a", "b", "c", "d"};
                    reverse(s);
                    System.out.println(java.util.Arrays.toString(s));
                }
            }
          `, bug: 3,
          fix: J`
            public class Main {
                public static <T> void reverse(T[] a) {
                    for (int i = 0; i < a.length / 2; i++) {
                        T tmp = a[i];
                        a[i] = a[a.length - 1 - i];
                        a[a.length - 1 - i] = tmp;
                    }
                }

                public static void main(String[] args) {
                    String[] s = {"a", "b", "c", "d"};
                    reverse(s);
                    System.out.println(java.util.Arrays.toString(s));
                }
            }
          `,
          hint: "Trace it: after i = 1 the array is reversed. What happens when i = 2 and i = 3?",
          explain: "The loop runs to <code>a.length</code>. For i = 0 and 1 it reverses the array, but for i = 2 and 3 it swaps the same pairs again, putting everything back. Stopping at <code>a.length / 2</code> swaps each pair exactly once, and the program prints [d, c, b, a].",
          explainAr: 'الحلقة تبدل كل زوج مرتين فتعود المصفوفة كما كانت؛ يجب التوقف عند المنتصف.' },
        { t: 'bug', q: "This program crashes when it runs. Tap the line with the bug.",
          code: J`
            public class Main {
                public static <T> int countMatches(T[] items, T target) {
                    int count = 0;
                    for (int i = 0; i <= items.length; i++) {
                        if (items[i].equals(target)) {
                            count++;
                        }
                    }
                    return count;
                }
                public static void main(String[] args) {
                    String[] votes = {"yes", "no", "yes"};
                    System.out.println(countMatches(votes, "yes"));
                }
            }
          `, bug: 4,
          fix: J`
            public class Main {
                public static <T> int countMatches(T[] items, T target) {
                    int count = 0;
                    for (int i = 0; i < items.length; i++) {
                        if (items[i].equals(target)) {
                            count++;
                        }
                    }
                    return count;
                }
                public static void main(String[] args) {
                    String[] votes = {"yes", "no", "yes"};
                    System.out.println(countMatches(votes, "yes"));
                }
            }
          `,
          hint: "What is the last valid index of an array with 3 items?",
          explain: "With <code>&lt;=</code>, the loop also runs for i = 3, but the last index is 2, so <code>items[3]</code> throws <code>ArrayIndexOutOfBoundsException</code>. Use <code>i &lt; items.length</code>; the fixed program prints 2.",
          explainAr: 'آخر فهرس هو length - 1، لذلك نستخدم &lt; وليس &lt;=.' },
        { t: 'code', q: "Write the generic tool <code>findMin</code> that returns the <b>smallest</b> item of any array of Comparable items. The program reads <code>n</code> words, then <code>m</code> integers, and prints the smallest word and the smallest number, each on its own line. No prompts.", qAr: 'اكتب{{g:|ي}} الدالة العامة findMin لإيجاد أصغر عنصر.',
          starter: J`
            import java.util.*;

            public class Main {
                // TODO: public static <T extends Comparable<T>> T findMin(T[] a)

                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    String[] words = new String[n];
                    for (int i = 0; i < n; i++) {
                        words[i] = sc.next();
                    }
                    int m = sc.nextInt();
                    Integer[] nums = new Integer[m];
                    for (int i = 0; i < m; i++) {
                        nums[i] = sc.nextInt();
                    }
                    System.out.println(findMin(words));
                    System.out.println(findMin(nums));
                }
            }
          `,
          tests: [
            { stdin: '3\npear apple mango\n4\n12 -3 7 0', expected: 'apple\n-3' },
            { stdin: '1\nzebra\n1\n5', expected: 'zebra\n5' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static <T extends Comparable<T>> T findMin(T[] a) {
                    T best = a[0];
                    for (int i = 1; i < a.length; i++) {
                        if (a[i].compareTo(best) < 0) {
                            best = a[i];
                        }
                    }
                    return best;
                }

                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    String[] words = new String[n];
                    for (int i = 0; i < n; i++) {
                        words[i] = sc.next();
                    }
                    int m = sc.nextInt();
                    Integer[] nums = new Integer[m];
                    for (int i = 0; i < m; i++) {
                        nums[i] = sc.nextInt();
                    }
                    System.out.println(findMin(words));
                    System.out.println(findMin(nums));
                }
            }
          `,
          hint: "Copy the idea of findMax, but replace <code>&gt; 0</code> with <code>&lt; 0</code>.",
          explain: "A negative result of <code>compareTo</code> means the item comes before the best so far, so it becomes the new smallest. One method serves String[] and Integer[]." }
      ]
    },

    // ---------------------------------------------------------------- L9 (new)
    {
      title: 'Wildcards in depth',
      titleAr: 'أحرف البدل بالتفصيل',
      minutes: 30,
      body: [
        { type: 'h', en: 'A family tree of types' },
        { type: 'p', en: "Often you want <b>one</b> method for many kinds of lists: print any list, add up any list of numbers, or put marks into a list. Lesson 6 showed the surprise: <code>List&lt;Integer&gt;</code> is not a <code>List&lt;Number&gt;</code>. Wildcards are Java's way to say \"a list of <i>some</i> type from this family\". To use them well, first picture the family of number types.",
          ar: 'أحرف البدل تسمح لدالة واحدة بقبول قوائم من أنواع مختلفة داخل عائلة واحدة.' },
        { type: 'code', code: J`
                    Object
                      |
                    Number
                   /      \
              Integer    Double
        ` },
        { type: 'p', en: "Read the picture from top to bottom: Integer and Double are <b>children</b> (subclasses) of Number, and Number is a child of Object. Two words describe a direction in this tree. <code>extends</code> looks <b>down</b>: \"this type or any type below it\". <code>super</code> looks <b>up</b>: \"this type or any type above it\".",
          ar: 'extends تعني النوع نفسه أو ما تحته في الشجرة، و super تعني النوع نفسه أو ما فوقه.' },
        { type: 'table', head: ['Written', 'Means', 'In the tree'], rows: [
          ['<code>List&lt;?&gt;</code>', 'a list of some type, any type', 'the whole tree'],
          ['<code>List&lt;? extends Number&gt;</code>', 'a list of Number, Integer, Double...', 'Number and everything <b>below</b> it'],
          ['<code>List&lt;? super Integer&gt;</code>', 'a list of Integer, Number or Object', 'Integer and everything <b>above</b> it']
        ] },
        { type: 'note', kind: 'tip', en: "In this lesson we write <code>List</code>, the interface from Unit 7 that both <code>ArrayList</code> and <code>LinkedList</code> implement. A parameter of type <code>List&lt;...&gt;</code> accepts either kind of list." },
        { type: 'h', en: 'List&lt;?&gt;: a list of anything' },
        { type: 'p', en: "Suppose you want a method that prints any list: cities, temperatures, students. A parameter <code>List&lt;Object&gt;</code> does not work: <code>List&lt;String&gt;</code> is not a <code>List&lt;Object&gt;</code>, for the same reason as before. The <b>unbounded wildcard</b> <code>List&lt;?&gt;</code> means \"a list of some type I do not know\". You may read the items as <code>Object</code> and ask for the size, but you may not add to it." },
        { type: 'analogy', title: 'A sealed box with "something" inside', en: "A parcel arrives with the label \"contents: something\". You can count the items through the plastic window and read each one, but you would not put your own things into it: you do not know what belongs there. <code>List&lt;?&gt;</code> is that parcel." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void printList(List<?> list) {
                  System.out.println(list.size() + " items:");
                  for (Object item : list) {
                      System.out.println("- " + item);
                  }
              }

              public static void main(String[] args) {
                  List<String> cities = new ArrayList<>(Arrays.asList("Hail", "Jazan"));
                  List<Double> temps = new ArrayList<>(Arrays.asList(31.5, 36.0));
                  printList(cities);
                  printList(temps);
              }
          }
        `, out: J`
          2 items:
          - Hail
          - Jazan
          2 items:
          - 31.5
          - 36.0
        ` },
        { type: 'lines', rows: [
          ['List<?> list', 'Accepts a list of any type: String, Double, Student...'],
          ['for (Object item : list)', 'Every item is at least an Object, so reading as Object is always safe.'],
          ['"- " + item', 'Joining with a String calls the item\'s <code>toString()</code>.'],
          ['list.add("x");', 'Not allowed (not in the code): the list might be a list of Doubles.']
        ], ar: 'List&lt;?&gt;‎ تقبل أي قائمة؛ نقرأ العناصر كـ Object ولا نضيف إليها.' },
        { type: 'check', q: 'Why does <code>printList(List&lt;Object&gt; list)</code> refuse a <code>List&lt;String&gt;</code>?', options: ['Because String is not an Object', 'Because List&lt;String&gt; is not a List&lt;Object&gt;, even though String is an Object', 'Because lists cannot hold Strings', 'Because the method is static'], answer: 1, explain: "A String is an Object, but a <i>list</i> of Strings is not a list of Objects: otherwise someone could add a Double to your list of Strings. <code>List&lt;?&gt;</code> solves this." },
        { type: 'h', en: '? extends Number: safe to read' },
        { type: 'p', en: "Now a method that adds up numbers. The list might be a <code>List&lt;Integer&gt;</code> or a <code>List&lt;Double&gt;</code>. Whatever it is, every item <b>is a Number</b>, so you can read each one as a Number and call <code>doubleValue()</code>. Adding is a different story: the compiler does not know which list it really is, and putting a Double into a List of Integers would break it. So with <code>? extends</code> you may <b>get</b> items, but not <b>put</b> new ones.",
          ar: 'مع ‎? extends Number‎ نستطيع قراءة العناصر كـ Number، لكن لا نستطيع الإضافة.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static double sum(List<? extends Number> list) {
                  double total = 0;
                  for (Number n : list) {
                      total += n.doubleValue();
                  }
                  return total;
              }

              public static void main(String[] args) {
                  List<Integer> marks = new ArrayList<>(Arrays.asList(85, 90, 78));
                  List<Double> prices = new LinkedList<>(Arrays.asList(4.5, 10.0));
                  System.out.println(sum(marks));
                  System.out.println(sum(prices));
              }
          }
        `, out: J`
          253.0
          14.5
        ` },
        { type: 'lines', rows: [
          ['List<? extends Number> list', 'A list of Number or any subclass. It is a <b>producer</b>: it gives items to us.'],
          ['for (Number n : list)', 'Reading is safe: every item is at least a Number.'],
          ['new LinkedList<>(...)', 'Any kind of List works, not only ArrayList.'],
          ['list.add(5);', 'Would not compile: the list might be a List&lt;Double&gt;.']
        ] },
        { type: 'check', q: 'Inside <code>sum(List&lt;? extends Number&gt; list)</code>, which line compiles?', options: ['list.add(5);', 'list.add(2.5);', 'Number first = list.get(0);', 'Integer first = list.get(0);'], answer: 2, explain: "Reading as Number is always safe. Adding anything is refused, and reading as Integer is not safe because the list might hold Doubles." },
        { type: 'h', en: '? super Integer: safe to add Integers' },
        { type: 'p', en: "Now the opposite job: a method that <b>adds</b> marks (Integers) into a list. Which lists can safely receive an Integer? A <code>List&lt;Integer&gt;</code>, of course. A <code>List&lt;Number&gt;</code> too, because an Integer is a Number. And a <code>List&lt;Object&gt;</code>, because an Integer is an Object. That is exactly \"Integer or any type above it\": <code>List&lt;? super Integer&gt;</code>. Reading back is weak: you only get <code>Object</code>, because the list might be a List of Object.",
          ar: 'مع ‎? super Integer‎ نستطيع إضافة Integer بأمان، لكن القراءة تعطينا Object فقط.' },
        { type: 'analogy', title: 'Donation boxes', en: "Three donation boxes stand at the mosque door: one says \"coins\", one says \"money\", one says \"anything\". A 1-riyal coin can go into any of the three. But if you take something out of the \"anything\" box, you cannot be sure it is a coin. <code>? super Integer</code> is the set of boxes that accept your coin." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void addMarks(List<? super Integer> list, int count) {
                  for (int i = 1; i <= count; i++) {
                      list.add(i * 10);
                  }
              }

              public static void main(String[] args) {
                  List<Integer> ints = new ArrayList<>();
                  List<Number> nums = new ArrayList<>();
                  List<Object> things = new ArrayList<>();
                  addMarks(ints, 3);
                  addMarks(nums, 2);
                  things.add("note");
                  addMarks(things, 1);
                  System.out.println(ints);
                  System.out.println(nums);
                  System.out.println(things);
              }
          }
        `, out: J`
          [10, 20, 30]
          [10, 20]
          [note, 10]
        ` },
        { type: 'lines', rows: [
          ['List<? super Integer> list', 'A list of Integer, Number or Object. It is a <b>consumer</b>: it takes items from us.'],
          ['list.add(i * 10);', 'Always safe: each of those lists accepts an Integer.'],
          ['addMarks(things, 1)', 'A List&lt;Object&gt; can hold a String and an Integer side by side.'],
          ['Object x = list.get(0);', 'Reading gives only Object (not in the code).']
        ] },
        { type: 'memory', title: 'A List&lt;Number&gt; can hold different kinds of numbers',
          en: "After <code>addMarks(nums, 2)</code>, the list holds two Integer objects. Because its type is <code>List&lt;Number&gt;</code>, a Double may join them. This is why a List&lt;Number&gt; is a safe target for <code>? super Integer</code>.",
          code: J`
            List<Number> nums = new ArrayList<>();
            addMarks(nums, 2);
            nums.add(2.5);
          `,
          frames: [
            { label: 'After <code>addMarks(nums, 2);</code>',
              vars: [{ name: 'nums', type: 'List<Number>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'ArrayList<Number>', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
                { id: 'B', cls: 'Integer', fields: [{ name: 'value', value: '10' }] },
                { id: 'C', cls: 'Integer', fields: [{ name: 'value', value: '20' }] }] },
            { label: 'After <code>nums.add(2.5);</code>: an Integer, an Integer and a Double in one list',
              vars: [{ name: 'nums', type: 'List<Number>', ref: 'A' }],
              objects: [
                { id: 'A', cls: 'ArrayList<Number>', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
                { id: 'B', cls: 'Integer', fields: [{ name: 'value', value: '10' }] },
                { id: 'C', cls: 'Integer', fields: [{ name: 'value', value: '20' }] },
                { id: 'D', cls: 'Double', fields: [{ name: 'value', value: '2.5' }] }] }
          ],
          ar: 'القائمة من نوع Number تقبل Integer و Double معًا، لذلك هي هدف آمن لـ ‎? super Integer‎.' },
        { type: 'check', q: 'Which list can be passed to <code>addMarks(List&lt;? super Integer&gt; list, int count)</code>?', options: ['List&lt;Double&gt;', 'List&lt;String&gt;', 'List&lt;Number&gt;', 'List&lt;Character&gt;'], answer: 2, explain: "Number is above Integer in the tree, so a List&lt;Number&gt; accepts Integers. Double, String and Character are not above Integer." },
        { type: 'h', en: 'Which one do I use? Get or put' },
        { type: 'p', en: "Ask one plain question: <b>what does my method do with the list?</b> If it only <b>gets</b> items out (reads, sums, prints numbers), use <code>? extends</code>. If it only <b>puts</b> items in, use <code>? super</code>. If it does not care about the type at all (size, print as text), use <code>?</code>. If it must both get and put the same specific type, do not use a wildcard: write <code>List&lt;Integer&gt;</code> or a type parameter <code>List&lt;T&gt;</code>.",
          ar: 'إذا كانت الدالة تقرأ فقط نستخدم extends، وإذا كانت تضيف فقط نستخدم super، وإذا كانت تفعل الأمرين لا نستخدم حرف بدل.' },
        { type: 'table', head: ['The method...', 'Parameter', 'Example'], rows: [
          ['only reads items as numbers', '<code>List&lt;? extends Number&gt;</code>', '<code>sum</code>, <code>average</code>, <code>highest</code>'],
          ['only adds Integers', '<code>List&lt;? super Integer&gt;</code>', '<code>addMarks</code>, <code>addAbsent</code>'],
          ['does not care about the type', '<code>List&lt;?&gt;</code>', '<code>printList</code>, <code>countItems</code>'],
          ['reads and adds the same type', '<code>List&lt;Integer&gt;</code> or <code>List&lt;T&gt;</code>', 'sort a list in place']
        ] },
        { type: 'note', kind: 'exam', en: "Memory hook: <b>Get = Extends, Put = Super.</b> Textbooks call it PECS: \"Producer Extends, Consumer Super\". A list that produces items for you uses extends; a list that consumes your items uses super." },
        { type: 'steps', title: 'Worked example: copy marks and bonus points into one list', problem: 'A teacher has a list of Integer marks and a list of Double bonus points. Copy both into one <code>List&lt;Number&gt;</code> with one method, then print the list and its total.',
          steps: [
            { en: 'The method reads from <code>from</code> (get: extends) and adds to <code>to</code> (put: super). Every item read is a Number, and the target accepts Numbers.', code: J`
              public static void copyAll(List<? extends Number> from, List<? super Number> to) {
                  for (Number n : from) {
                      to.add(n);
                  }
              }
            ` },
            { en: 'Reuse <code>sum</code>, which only reads.', code: J`
              public static double sum(List<? extends Number> list) { ... }
            ` },
            { en: 'Create the two source lists and the target list.', code: J`
              List<Integer> marks = new ArrayList<>(Arrays.asList(80, 70));
              List<Double> bonus = new ArrayList<>(Arrays.asList(2.5, 1.5));
              List<Number> all = new ArrayList<>();
            ` },
            { en: 'Copy twice with the same method, then print.', code: J`
              copyAll(marks, all);
              copyAll(bonus, all);
              System.out.println(all);
              System.out.println("Total: " + sum(all));
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void copyAll(List<? extends Number> from, List<? super Number> to) {
                    for (Number n : from) {
                        to.add(n);
                    }
                }

                public static double sum(List<? extends Number> list) {
                    double total = 0;
                    for (Number n : list) {
                        total += n.doubleValue();
                    }
                    return total;
                }

                public static void main(String[] args) {
                    List<Integer> marks = new ArrayList<>(Arrays.asList(80, 70));
                    List<Double> bonus = new ArrayList<>(Arrays.asList(2.5, 1.5));
                    List<Number> all = new ArrayList<>();
                    copyAll(marks, all);
                    copyAll(bonus, all);
                    System.out.println(all);
                    System.out.println("Total: " + sum(all));
                }
            }
          `, out: J`
            [80, 70, 2.5, 1.5]
            Total: 154.0
          `, ar: 'المصدر نقرأ منه فنستخدم extends، والهدف نضيف إليه فنستخدم super.' },
        { type: 'steps', title: 'Worked example: three methods, three wildcards', problem: 'For a quiz register, write <code>countItems</code> (does not care about the type), <code>addAbsent</code> (adds a 0 for each absent student) and <code>highest</code> (reads numbers). Choose the right wildcard for each.',
          steps: [
            { en: '<code>countItems</code> only asks for the size: any list will do, so <code>List&lt;?&gt;</code>.', code: J`
              public static int countItems(List<?> list) {
                  return list.size();
              }
            ` },
            { en: '<code>addAbsent</code> only <b>puts</b> Integers: <code>List&lt;? super Integer&gt;</code>.', code: J`
              public static void addAbsent(List<? super Integer> list, int students) {
                  for (int i = 0; i < students; i++) {
                      list.add(0);
                  }
              }
            ` },
            { en: '<code>highest</code> only <b>gets</b> numbers: <code>List&lt;? extends Number&gt;</code>.', code: J`
              public static double highest(List<? extends Number> list) {
                  double best = list.get(0).doubleValue();
                  for (Number n : list) {
                      if (n.doubleValue() > best) {
                          best = n.doubleValue();
                      }
                  }
                  return best;
              }
            ` },
            { en: 'One <code>List&lt;Integer&gt;</code> fits all three methods.', code: J`
              addAbsent(quiz, 2);
              System.out.println("Count: " + countItems(quiz));
              System.out.println("Highest: " + highest(quiz));
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static int countItems(List<?> list) {
                    return list.size();
                }

                public static void addAbsent(List<? super Integer> list, int students) {
                    for (int i = 0; i < students; i++) {
                        list.add(0);
                    }
                }

                public static double highest(List<? extends Number> list) {
                    double best = list.get(0).doubleValue();
                    for (Number n : list) {
                        if (n.doubleValue() > best) {
                            best = n.doubleValue();
                        }
                    }
                    return best;
                }

                public static void main(String[] args) {
                    List<Integer> quiz = new ArrayList<>(Arrays.asList(7, 9, 6));
                    addAbsent(quiz, 2);
                    System.out.println(quiz);
                    System.out.println("Count: " + countItems(quiz));
                    System.out.println("Highest: " + highest(quiz));
                }
            }
          `, out: J`
            [7, 9, 6, 0, 0]
            Count: 5
            Highest: 9.0
          `, ar: 'لكل دالة حرف البدل المناسب لعملها: ? للحجم، super للإضافة، extends للقراءة.' }
      ],
      mistakes: [
        { title: 'Adding to a ? extends list', en: "The exact type is unknown, so the compiler refuses every <code>add</code> (except <code>null</code>).", code: J`
          static void f(List<? extends Number> list) {
              list.add(5);      // compile error
          }
        ` },
        { title: 'Expecting List&lt;Object&gt; to accept every list', en: "<code>List&lt;Object&gt;</code> accepts only a List of Object. To accept any list, write <code>List&lt;?&gt;</code>." },
        { title: 'Reading from a ? super list as a specific type', en: "From <code>List&lt;? super Integer&gt;</code> you only get <code>Object</code>.", code: J`
          static void g(List<? super Integer> list) {
              Integer x = list.get(0);   // compile error: it is only an Object
              Object y = list.get(0);    // OK
          }
        ` },
        { title: 'Using a wildcard when you need to read and add', en: "If a method must take items out <i>and</i> put the same type back, a wildcard blocks one of the two. Use <code>List&lt;Integer&gt;</code> or a generic method with <code>List&lt;T&gt;</code>." }
      ],
      remember: [
        "<code>List&lt;?&gt;</code>: any list; read items as Object; no adding.",
        "<code>List&lt;? extends Number&gt;</code>: Number and below; safe to <b>get</b> Numbers; no adding.",
        "<code>List&lt;? super Integer&gt;</code>: Integer and above; safe to <b>put</b> Integers; reading gives Object.",
        "Get = Extends, Put = Super (PECS).",
        "Need to read and add the same type? Use no wildcard: <code>List&lt;Integer&gt;</code> or <code>List&lt;T&gt;</code>."
      ],
      rememberAr: '‎?‎ لأي قائمة، و extends للقراءة، و super للإضافة. إذا احتجنا القراءة والإضافة معًا لا نستخدم حرف بدل.',
      practice: [
        { t: 'mcq', q: "A method only <b>reads</b> numbers from a list to find their average. Which parameter is best?", options: ['List&lt;Number&gt;', 'List&lt;? extends Number&gt;', 'List&lt;? super Number&gt;', 'List&lt;Integer&gt;'], answer: 1, explain: "Reading = get = extends. It accepts List&lt;Integer&gt;, List&lt;Double&gt; and List&lt;Number&gt;." },
        { t: 'mcq', q: "Which lists can be passed to a parameter <code>List&lt;? super Integer&gt;</code>?", options: ['Only List&lt;Integer&gt;', 'List&lt;Integer&gt;, List&lt;Number&gt;, List&lt;Object&gt;', 'List&lt;Integer&gt; and List&lt;Double&gt;', 'Any list at all'], answer: 1, explain: "<code>super</code> means Integer or a type above it in the tree: Number and Object." },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.*;

          public class Main {
              public static void addTwice(List<? super Integer> list, int x) {
                  list.add(x);
                  list.add(x * 2);
              }

              public static double sum(List<? extends Number> list) {
                  double s = 0;
                  for (Number n : list) {
                      s += n.doubleValue();
                  }
                  return s;
              }

              public static void main(String[] args) {
                  List<Number> nums = new ArrayList<>();
                  nums.add(0.5);
                  addTwice(nums, 4);
                  System.out.println(nums);
                  System.out.println(sum(nums));
              }
          }
        `, answer: J`
          [0.5, 4, 8]
          12.5
        `, explain: "The List&lt;Number&gt; holds the Double 0.5, then the Integers 4 and 8. The sum is 0.5 + 4 + 8 = 12.5." },
        { t: 'fill', q: "Choose the right wildcards: the first method only reads numbers, the second only adds Integers.", code: J`
          static double average(List<___> list) { ... }
          static void addZeros(List<___> list, int n) { ... }
        `, answers: [['? extends Number', '?extends Number'], ['? super Integer', '?super Integer']], explain: "Get = Extends (reading numbers), Put = Super (adding Integers)." },
        { t: 'bug', q: "The method can add marks into lists that accept Integers. The program does not compile. Tap the line where the real mistake is. (Two answers are accepted.)",
          code: J`
            import java.util.*;

            public class Main {
                public static void addMarks(List<? super Integer> list) {
                    list.add(90);
                    list.add(75);
                }

                public static void main(String[] args) {
                    List<Double> marks = new ArrayList<>();
                    addMarks(marks);
                    System.out.println(marks);
                }
            }
          `, bug: [10, 11],
          fix: J`
            import java.util.*;

            public class Main {
                public static void addMarks(List<? super Integer> list) {
                    list.add(90);
                    list.add(75);
                }

                public static void main(String[] args) {
                    List<Number> marks = new ArrayList<>();
                    addMarks(marks);
                    System.out.println(marks);
                }
            }
          `,
          hint: "Is Double above Integer in the family tree?",
          explain: "<code>? super Integer</code> accepts lists of Integer, Number or Object. Double is not above Integer (it is a sibling), so the call on line 11 is refused; the cause is the list type on line 10. With <code>List&lt;Number&gt;</code> (or <code>List&lt;Integer&gt;</code>) it works and prints [90, 75].",
          explainAr: 'Double ليس فوق Integer في الشجرة، لذلك لا تقبله ‎? super Integer‎.' },
        { t: 'bug', q: "This method should return the first mark. It does not compile. Tap the line where the real mistake is. (Two answers are accepted.)",
          code: J`
            import java.util.*;

            public class Main {
                public static int firstMark(List<? super Integer> list) {
                    Integer first = list.get(0);
                    return first;
                }

                public static void main(String[] args) {
                    List<Integer> marks = new ArrayList<>(Arrays.asList(88, 92));
                    System.out.println(firstMark(marks));
                }
            }
          `, bug: [4, 5],
          fix: J`
            import java.util.*;

            public class Main {
                public static int firstMark(List<Integer> list) {
                    Integer first = list.get(0);
                    return first;
                }

                public static void main(String[] args) {
                    List<Integer> marks = new ArrayList<>(Arrays.asList(88, 92));
                    System.out.println(firstMark(marks));
                }
            }
          `,
          hint: "What type do you get when you read from a <code>? super</code> list?",
          explain: "A <code>List&lt;? super Integer&gt;</code> might be a List of Object, so <code>get</code> returns only an Object, and line 5 cannot store it in an Integer. The method <b>reads</b>, so <code>super</code> is the wrong choice on line 4. Use <code>List&lt;Integer&gt;</code> (or <code>? extends</code>). The fixed program prints 88.",
          explainAr: 'القراءة من ‎? super‎ تعطي Object فقط؛ الدالة تقرأ فلا نستخدم super.' },
        { t: 'code', q: "Complete <code>countPositive(List&lt;? extends Number&gt; list)</code>: it returns how many items are greater than 0. The program reads <code>n</code> integers into a <code>List&lt;Integer&gt;</code>, then <code>m</code> decimals into a <code>List&lt;Double&gt;</code>, and prints the count for each list on its own line. No prompts.", qAr: 'أكمل{{g:|ي}} الدالة countPositive لتعمل مع أي قائمة أعداد.',
          starter: J`
            import java.util.*;

            public class Main {
                public static int countPositive(List<? extends Number> list) {
                    // TODO
                    return 0;
                }

                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    List<Integer> ints = new ArrayList<>();
                    List<Double> doubles = new ArrayList<>();
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        ints.add(sc.nextInt());
                    }
                    int m = sc.nextInt();
                    for (int i = 0; i < m; i++) {
                        doubles.add(sc.nextDouble());
                    }
                    System.out.println(countPositive(ints));
                    System.out.println(countPositive(doubles));
                }
            }
          `,
          tests: [
            { stdin: '4\n3 -1 0 7\n3\n-2.5 0.5 1.5', expected: '2\n2' },
            { stdin: '1\n-5\n1\n0.0', expected: '0\n0' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static int countPositive(List<? extends Number> list) {
                    int count = 0;
                    for (Number n : list) {
                        if (n.doubleValue() > 0) {
                            count++;
                        }
                    }
                    return count;
                }

                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    List<Integer> ints = new ArrayList<>();
                    List<Double> doubles = new ArrayList<>();
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        ints.add(sc.nextInt());
                    }
                    int m = sc.nextInt();
                    for (int i = 0; i < m; i++) {
                        doubles.add(sc.nextDouble());
                    }
                    System.out.println(countPositive(ints));
                    System.out.println(countPositive(doubles));
                }
            }
          `,
          hint: "Loop with <code>for (Number n : list)</code> and test <code>n.doubleValue() &gt; 0</code>.",
          explain: "The method only reads, so <code>? extends Number</code> lets one method accept both the Integer list and the Double list. Zero is not positive." }
      ]
    },

    // ---------------------------------------------------------------- L10 (new)
    {
      title: 'What the compiler does with generics',
      titleAr: 'ماذا يفعل المترجم بالأنواع العامة؟',
      minutes: 30,
      body: [
        { type: 'h', en: 'Two moments in the life of a program' },
        { type: 'p', en: "Every Java program lives through two moments. At <b>compile time</b>, the compiler (<code>javac</code>) reads your code, checks it and translates it. At <b>run time</b>, the Java machine (<code>java</code>) carries out the translated program. Generics live almost completely in the first moment. Knowing this explains the strange rules you met: why <code>new T()</code> is not allowed, why <code>Box&lt;int&gt;</code> is refused, and why raw types are dangerous.",
          ar: 'للبرنامج لحظتان: وقت الترجمة حيث يتحقق المترجم من الكود، ووقت التشغيل حيث ينفذ. الأنواع العامة تعيش غالبًا في اللحظة الأولى.' },
        { type: 'analogy', title: 'Labels on moving boxes', en: "When a family moves house, they write \"Kitchen\" or \"Bedroom\" on every box, so the movers put each box in the right room. Once every box is in place, the labels are thrown away; the boxes and their contents stay. Generic type arguments are those labels: the compiler uses them to check that everything goes to the right place, then removes them." },
        { type: 'h', en: 'Step 1: checking at compile time' },
        { type: 'p', en: "The compiler checks every <code>add</code>, every <code>get</code> and every method call against the types in angle brackets. Where a value comes out, it quietly adds the cast that you used to write by hand. Because the compiler has already checked the types, that cast can never fail." },
        { type: 'code', code: J`
          // What you write:
          ArrayList<String> names = new ArrayList<>();
          names.add("Lama");
          String s = names.get(0);

          // What the compiler produces after checking (roughly):
          ArrayList names = new ArrayList();
          names.add("Lama");
          String s = (String) names.get(0);   // cast added by the compiler, always safe
        ` },
        { type: 'lines', rows: [
          ['names.add("Lama");', 'Checked: "Lama" is a String, so it is allowed.'],
          ['String s = names.get(0);', 'Checked: the list holds Strings, so the result fits in a String.'],
          ['(String) names.get(0)', 'The compiler writes this cast for you in the translated program.']
        ], ar: 'المترجم يتحقق من الأنواع ثم يضيف cast بنفسه، وهذا الـ cast لا يفشل أبدًا.' },
        { type: 'check', q: 'In a program that uses <code>ArrayList&lt;String&gt;</code>, who writes the cast when you call <code>get</code>?', options: ['You must write it', 'The compiler adds it after checking the types', 'Nobody: there is never a cast', 'The user of the program'], answer: 1, explain: "You write no cast; the compiler inserts a safe one after it has checked every use of the list." },
        { type: 'h', en: 'Step 2: type erasure' },
        { type: 'p', en: "After checking, the compiler <b>erases</b> (rubs out) the type arguments. This is called <b>type erasure</b>. In the translated program, <code>Box&lt;String&gt;</code> and <code>Box&lt;Integer&gt;</code> are both just <code>Box</code>, and inside the class every T becomes <code>Object</code> (or its bound, for example <code>Comparable</code> when the header says <code>T extends Comparable&lt;T&gt;</code>). Java was designed this way in 2004 so that new generic code could work together with older code written without generics.",
          ar: 'بعد التحقق يمحو المترجم وسائط الأنواع؛ وقت التشغيل يصبح Box&lt;String&gt;‎ و Box&lt;Integer&gt;‎ مجرد Box.' },
        { type: 'p', en: "You can see erasure yourself. <code>getClass()</code> asks an object for its class while the program runs, and <code>getSimpleName()</code> gives the short name of that class." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Box<String> a = new Box<>("pen");
                  Box<Integer> b = new Box<>(5);
                  System.out.println(a.getClass().getSimpleName());
                  System.out.println(b.getClass().getSimpleName());
                  System.out.println(a.getClass() == b.getClass());
              }
          }

          class Box<T> {
              private T content;
              public Box(T content) { this.content = content; }
              public T get() { return content; }
          }
        `, out: J`
          Box
          Box
          true
        ` },
        { type: 'lines', rows: [
          ['a.getClass().getSimpleName()', 'At run time the object knows only that it is a <code>Box</code>, not a Box of String.'],
          ['a.getClass() == b.getClass()', 'Both boxes share one class at run time: true.']
        ] },
        { type: 'memory', title: 'At run time both boxes are plain Box objects',
          en: "The <code>&lt;String&gt;</code> and <code>&lt;Integer&gt;</code> live in the <b>variables' types</b>, which the compiler checked. The objects themselves carry no type argument; only their contents differ.",
          vars: [{ name: 'a', type: 'Box<String>', ref: 'A' }, { name: 'b', type: 'Box<Integer>', ref: 'C' }],
          objects: [
            { id: 'A', cls: 'Box', fields: [{ name: 'content', ref: 'B' }] },
            { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"pen"' }] },
            { id: 'C', cls: 'Box', fields: [{ name: 'content', ref: 'D' }] },
            { id: 'D', cls: 'Integer', fields: [{ name: 'value', value: '5' }] }
          ],
          ar: 'الكائنان من الصنف Box نفسه وقت التشغيل؛ نوع المحتوى يعرفه المترجم فقط من نوع المتغير.' },
        { type: 'check', q: 'Because of type erasure, what is true at run time?', options: ['A Box&lt;String&gt; object remembers the word String', 'Box&lt;String&gt; and Box&lt;Integer&gt; objects have the same class, Box', 'Generic code runs slower', 'T becomes String in every class'], answer: 1, explain: "The type arguments were checked and then erased, so both objects are of class Box." },
        { type: 'h', en: 'Step 3: what erasure forbids' },
        { type: 'p', en: "Erasure explains a short list of rules. Each forbidden thing needs to know T <b>while the program runs</b>, but by then T has been erased. Learn the list together with the usual way around each rule." },
        { type: 'table', head: ['Not allowed', 'Why', 'Do this instead'], rows: [
          ['<code>new T()</code>', 'Java does not know which class to build', 'Receive the object from outside: a constructor or method parameter'],
          ['<code>new T[10]</code>', 'An array must know its element type when it is created', 'Use an <code>ArrayList&lt;T&gt;</code>'],
          ['<code>x instanceof T</code>', 'There is no T left to test against', 'Use parameters of type T, so the compiler checks for you'],
          ['<code>static T item;</code>', 'Static belongs to the class; T belongs to each object', 'Make it non-static, or a static method with its own <code>&lt;T&gt;</code>'],
          ['<code>Box&lt;int&gt;</code>', 'After erasure T is Object, and an int is not an object', 'Use <code>Box&lt;Integer&gt;</code>']
        ] },
        { type: 'code', code: J`
          class Shelf<T> {
              private T[] items = new T[10];       // error: generic array creation
              private T spare = new T();           // error: T is not a real class

              public boolean isT(Object x) {
                  return x instanceof T;           // error: T is erased
              }
          }
        ` },
        { type: 'p', en: "The most common case is the array. When you want \"many T items\" in your own class, do not fight the rule: use an <code>ArrayList&lt;T&gt;</code>, as the containers of Lesson 7 did. It grows by itself and needs no casts.",
          ar: 'بدل new T[n]‎ نستخدم ArrayList&lt;T&gt;‎، فهي تكبر وحدها ولا تحتاج cast.' },
        { type: 'note', kind: 'tip', en: "In some textbooks you will see <code>(T[]) new Object[10]</code>. It compiles with an \"unchecked\" warning and needs great care. In this course, use <code>ArrayList&lt;T&gt;</code>." },
        { type: 'steps', title: 'Worked example: fix a shelf that tried new T[]', problem: 'A programmer wrote <code>private T[] items = new T[capacity];</code> for a shelf with a limited number of places. Rewrite <code>Shelf&lt;T&gt;</code> with an ArrayList and keep the limit: <code>put</code> returns <code>false</code> when the shelf is full.',
          steps: [
            { en: 'Replace the array with an <code>ArrayList&lt;T&gt;</code>, and keep the capacity in an <code>int</code> field.', code: J`
              class Shelf<T> {
                  private ArrayList<T> items = new ArrayList<>();
                  private int capacity;

                  public Shelf(int capacity) {
                      this.capacity = capacity;
                  }
            ` },
            { en: '<code>put</code> refuses when the list has reached the capacity, otherwise it adds and returns <code>true</code>.', code: J`
                  public boolean put(T item) {
                      if (items.size() >= capacity) {
                          return false;
                      }
                      items.add(item);
                      return true;
                  }
            ` },
            { en: 'Add <code>get</code> and <code>count</code>, then test with a shelf of 2 places and 3 books.', code: J`
              Shelf<String> books = new Shelf<>(2);
              System.out.println(books.put("Math"));
              System.out.println(books.put("Java"));
              System.out.println(books.put("Art"));
            ` }
          ],
          code: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    Shelf<String> books = new Shelf<>(2);
                    System.out.println(books.put("Math"));
                    System.out.println(books.put("Java"));
                    System.out.println(books.put("Art"));
                    System.out.println(books.count() + " books, first: " + books.get(0));
                }
            }

            class Shelf<T> {
                private ArrayList<T> items = new ArrayList<>();
                private int capacity;

                public Shelf(int capacity) {
                    this.capacity = capacity;
                }

                public boolean put(T item) {
                    if (items.size() >= capacity) {
                        return false;
                    }
                    items.add(item);
                    return true;
                }

                public T get(int i) {
                    return items.get(i);
                }

                public int count() {
                    return items.size();
                }
            }
          `, out: J`
            true
            true
            false
            2 books, first: Math
          `, ar: 'استبدلنا المصفوفة بـ ArrayList&lt;T&gt;‎ واحتفظنا بالحد الأقصى في متغير capacity.' },
        { type: 'h', en: 'Raw types: switching the checks off' },
        { type: 'p', en: "A <b>raw type</b> is a generic class used without angle brackets, like <code>ArrayList</code> alone. It exists only so that very old code (written before Java 5) still compiles. A raw type switches the checks off. Worse, a wrong item can enter a typed list through a raw reference, and the crash happens later, on a line that looks innocent, far from the real mistake. The compiler only gives an \"unchecked\" warning. Never write raw types in new code.",
          ar: 'النوع الخام يوقف التحقق؛ قد يدخل عنصر خاطئ وينهار البرنامج لاحقًا في مكان بعيد عن الخطأ الحقيقي.' },
        { type: 'analogy', title: 'A side door around the security check', en: "At the exam hall, every student passes the gate where phones are collected. If someone opens a side door, a phone can get in without being checked, and the problem only shows up later, in the middle of the exam. A raw type is that side door: it lets an item into a checked list without passing the compiler's gate." },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> names = new ArrayList<>();
                  names.add("Lama");
                  ArrayList raw = names;            // raw type: no checks
                  raw.add(99);                      // slips in with only a warning
                  try {
                      String s = names.get(1);      // the hidden cast fails here
                      System.out.println(s);
                  } catch (ClassCastException e) {
                      System.out.println("Crash: ClassCastException");
                  }
                  System.out.println("Size: " + names.size());
              }
          }
        `, out: J`
          Crash: ClassCastException
          Size: 2
        ` },
        { type: 'lines', rows: [
          ['ArrayList raw = names;', 'A raw reference to the same list. From now on, nothing is checked through <code>raw</code>.'],
          ['raw.add(99);', 'An Integer enters the list of Strings. The compiler only warns.'],
          ['String s = names.get(1);', 'The cast the compiler added fails here: <code>ClassCastException</code>. We catch it (Unit 6) to show the message.'],
          ['names.size()', 'The list really holds 2 items, one of them the wrong type.']
        ] },
        { type: 'note', kind: 'warn', en: "Look where the crash happened: on the line that <i>reads</i>, not on the line that added 99. In a big program these two lines can be in different files. Raw types make bugs travel. Fix every \"unchecked\" warning by adding the type argument.", ar: 'الانهيار يحدث عند القراءة لا عند الإضافة؛ لذلك نصلح كل تحذير unchecked بإضافة نوع.' },
        { type: 'steps', title: 'Worked example: turn old raw code into generic code', problem: 'An old program keeps quiz marks in a raw list and casts every item. Rewrite it with generics so that a wrong item is caught by the compiler.',
          steps: [
            { en: 'The old code: a raw list, and a cast for each mark.', code: J`
              ArrayList quiz = new ArrayList();
              quiz.add(8);
              total += (Integer) quiz.get(i);
            ` },
            { en: 'Add the type argument on the left and the diamond on the right.', code: J`
              ArrayList<Integer> quiz = new ArrayList<>();
            ` },
            { en: 'Remove the casts: <code>get</code> already returns an Integer.', code: J`
              total += quiz.get(i);
            ` },
            { en: 'Now a wrong item is a compile error, not a crash at run time.', code: J`
              // quiz.add("nine");   // compile error
            ` }
          ],
          code: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    ArrayList<Integer> quiz = new ArrayList<>();
                    quiz.add(8);
                    quiz.add(10);
                    quiz.add(7);
                    // quiz.add("nine");   // now a compile error, not a crash
                    int total = 0;
                    for (int i = 0; i < quiz.size(); i++) {
                        total += quiz.get(i);
                    }
                    System.out.println("Total: " + total + "/30");
                }
            }
          `, out: J`
            Total: 25/30
          `, ar: 'نضيف نوع العناصر ونحذف كل cast، فيكتشف المترجم العنصر الخاطئ قبل التشغيل.' }
      ],
      mistakes: [
        { title: 'Creating an array of T', en: "<code>new T[n]</code> does not compile (\"generic array creation\"). Use <code>ArrayList&lt;T&gt;</code>." },
        { title: 'Testing instanceof T', en: "<code>x instanceof T</code> does not compile: T is erased. Give the method a parameter of type T instead, and let the compiler check." },
        { title: 'Mixing raw and generic references', en: "Assigning a typed list to a raw variable lets wrong items in, and the crash comes later.", code: J`
          ArrayList raw = names;    // avoid: the checks are off for raw
        ` },
        { title: 'Overloading on the type argument', en: "Two methods that differ only in the type argument have the same erased form, so they cannot live in one class.", code: J`
          static void show(ArrayList<String> a) { }
          static void show(ArrayList<Integer> b) { }   // error: same erasure
        ` }
      ],
      remember: [
        "Generics are checked at <b>compile time</b>; the compiler adds safe casts for you.",
        "<b>Type erasure</b>: after checking, type arguments are removed; <code>Box&lt;String&gt;</code> and <code>Box&lt;Integer&gt;</code> are one class, Box, at run time.",
        "So anything that needs T at run time is forbidden: <code>new T()</code>, <code>new T[n]</code>, <code>instanceof T</code>.",
        "Instead of an array of T, use <code>ArrayList&lt;T&gt;</code>.",
        "Raw types switch the checks off and make crashes appear far from the mistake. Never use them in new code."
      ],
      rememberAr: 'المترجم يتحقق من الأنواع ثم يمحوها (محو الأنواع)، لذلك لا يمكن new T()‎ ولا new T[n]‎ ولا instanceof T. نستخدم ArrayList&lt;T&gt;‎ ونتجنب الأنواع الخام.',
      practice: [
        { t: 'mcq', q: "What does <b>type erasure</b> mean?", options: ['The compiler deletes unused variables', 'After checking, the compiler removes the type arguments, so they do not exist at run time', 'Generic classes are erased from memory after use', 'The programmer must erase the &lt;&gt; before running'], answer: 1, explain: "The type arguments are used for checking at compile time and then removed from the translated program." },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> a = new ArrayList<>();
                  ArrayList<Integer> b = new ArrayList<>();
                  Pair<String, Double> p = new Pair<>("Abha", 21.5);
                  System.out.println(a.getClass() == b.getClass());
                  System.out.println(p.getClass().getSimpleName());
                  System.out.println(a.getClass().getSimpleName());
              }
          }

          class Pair<K, V> {
              private K key;
              private V value;
              public Pair(K key, V value) { this.key = key; this.value = value; }
          }
        `, answer: J`
          true
          Pair
          ArrayList
        `, explain: "Because of erasure, both lists have the same class at run time (true), and class names carry no type arguments: Pair and ArrayList." },
        { t: 'mcq', q: "Inside <code>class Shelf&lt;T&gt;</code>, which line compiles?", options: ['private T[] items = new T[5];', 'private T spare = new T();', 'private ArrayList&lt;T&gt; items = new ArrayList&lt;&gt;();', 'private static T last;'], answer: 2, explain: "An ArrayList of T is fine. Creating a T, an array of T, or a static T field all need T at run time or at class level, which erasure does not allow." },
        { t: 'bug', q: "This tray should hold up to 4 items. It does not compile. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Tray<String> t = new Tray<>();
                    t.add("cup");
                    System.out.println(t.get(0));
                }
            }

            class Tray<T> {
                private T[] slots = new T[4];
                private int count = 0;
                public void add(T item) { slots[count] = item; count++; }
                public T get(int i) { return slots[i]; }
            }
          `, bug: 10,
          fix: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    Tray<String> t = new Tray<>();
                    t.add("cup");
                    System.out.println(t.get(0));
                }
            }

            class Tray<T> {
                private ArrayList<T> slots = new ArrayList<>();
                public void add(T item) { slots.add(item); }
                public T get(int i) { return slots.get(i); }
            }
          `,
          hint: "Which thing in the list of forbidden rules appears here?",
          explain: "<code>new T[4]</code> is \"generic array creation\": an array must know its element type when it is created, but T is erased. Use an <code>ArrayList&lt;T&gt;</code>; it also removes the need for the <code>count</code> field. The fixed program prints cup.",
          explainAr: 'لا يمكن إنشاء مصفوفة من T؛ نستخدم ArrayList&lt;T&gt;‎ بدلًا منها.' },
        { t: 'bug', q: "The basket should count only items of its own type. The code does not compile. Tap the line where the real mistake is. (Two answers are accepted.)",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Basket<String> b = new Basket<>();
                    b.add("dates");
                    System.out.println(b.size());
                }
            }

            class Basket<T> {
                private int count = 0;
                public void add(Object x) {
                    if (x instanceof T) { count++; }
                }
                public int size() { return count; }
            }
          `, bug: [11, 12],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Basket<String> b = new Basket<>();
                    b.add("dates");
                    System.out.println(b.size());
                }
            }

            class Basket<T> {
                private int count = 0;
                public void add(T x) {
                    count++;
                }
                public int size() { return count; }
            }
          `,
          hint: "Does T still exist when the program runs? Who could check the type instead?",
          explain: "<code>x instanceof T</code> (line 12) cannot work: T is erased, so there is nothing to test at run time. The real fix is on line 11: take a parameter of type <code>T</code>. Then the compiler refuses wrong items before the program runs, and no test is needed. The fixed program prints 1.",
          explainAr: 'لا يمكن استخدام instanceof T؛ نجعل المعامل من النوع T فيتحقق المترجم بنفسه.' },
        { t: 'bug', q: "This program compiles (with a warning) but crashes when it runs. Which line is the real cause? (Two answers are accepted.)",
          code: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    ArrayList<String> names = new ArrayList<>();
                    names.add("Lama");
                    ArrayList raw = names;
                    raw.add(99);
                    String second = names.get(1);
                    System.out.println(second.length());
                }
            }
          `, bug: [7, 8],
          fix: J`
            import java.util.ArrayList;

            public class Main {
                public static void main(String[] args) {
                    ArrayList<String> names = new ArrayList<>();
                    names.add("Lama");
                    names.add("Noura");
                    String second = names.get(1);
                    System.out.println(second.length());
                }
            }
          `,
          hint: "The crash is on line 9. But where did the wrong item come from?",
          explain: "Line 7 makes a raw reference to the typed list, and line 8 uses it to add the Integer 99 with no check. The crash appears later, on line 9, when the hidden cast to String fails (<code>ClassCastException</code>). Remove the raw reference and add through the typed list; the fixed program prints 5.",
          explainAr: 'المرجع الخام أدخل عددًا في قائمة نصوص، والانهيار ظهر لاحقًا عند القراءة.' },
        { t: 'code', q: "Complete <code>Shelf&lt;T&gt;</code> using an <code>ArrayList&lt;T&gt;</code> (not an array): <code>put</code> returns <code>false</code> when the shelf is full, otherwise adds the item and returns <code>true</code>; <code>count</code> returns the number of items. The program reads the capacity, then <code>n</code> words, prints the result of <code>put</code> for each word, and finally the count. No prompts.", qAr: 'أكمل{{g:|ي}} الصنف Shelf باستخدام ArrayList بدل المصفوفة.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Shelf<String> shelf = new Shelf<>(sc.nextInt());
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        System.out.println(shelf.put(sc.next()));
                    }
                    System.out.println(shelf.count());
                }
            }

            class Shelf<T> {
                private ArrayList<T> items = new ArrayList<>();
                private int capacity;

                public Shelf(int capacity) {
                    this.capacity = capacity;
                }

                // put(T item), count()
            }
          `,
          tests: [
            { stdin: '2\n3\nMath Java Art', expected: 'true\ntrue\nfalse\n2' },
            { stdin: '1\n1\nPoetry', expected: 'true\n1' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Shelf<String> shelf = new Shelf<>(sc.nextInt());
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        System.out.println(shelf.put(sc.next()));
                    }
                    System.out.println(shelf.count());
                }
            }

            class Shelf<T> {
                private ArrayList<T> items = new ArrayList<>();
                private int capacity;

                public Shelf(int capacity) {
                    this.capacity = capacity;
                }

                public boolean put(T item) {
                    if (items.size() >= capacity) {
                        return false;
                    }
                    items.add(item);
                    return true;
                }

                public int count() {
                    return items.size();
                }
            }
          `,
          hint: "In <code>put</code>, first check <code>items.size() &gt;= capacity</code>; if so, return false.",
          explain: "The ArrayList replaces the forbidden <code>new T[capacity]</code>; the capacity rule is kept with one <code>if</code>." }
      ]
    },

    // ---------------------------------------------------------------- L11 (new)
    {
      title: 'Mini project: Pair and Result in a grade book and a shop',
      titleAr: 'مشروع مصغر: Pair و Result في دفتر درجات ومتجر',
      minutes: 30,
      body: [
        { type: 'h', en: 'The plan' },
        { type: 'p', en: "Time to put everything together. We will build a small grade book for a CS102 section. It must store each student's name with a mark, look up the mark of a student by name (the name may be missing!), and find the top student. Then we will take the <b>same</b> classes and methods, change nothing, and use them in a shop. That is the promise of generics: write once, check always, reuse everywhere.",
          ar: 'نبني دفتر درجات صغيرًا، ثم نستخدم الأصناف والدوال نفسها في متجر دون أي تغيير.' },
        { type: 'list', items: [
          "<b>Piece 1:</b> <code>Pair&lt;A, B&gt;</code> holds a name with a mark (or an item with a price).",
          "<b>Piece 2:</b> <code>Result&lt;T&gt;</code> holds either a value or the reason why there is no value.",
          "<b>Piece 3:</b> two generic methods, <code>lookup</code> and <code>best</code>, that work on any list of pairs."
        ] },
        { type: 'h', en: 'Piece 1: Pair&lt;A, B&gt;' },
        { type: 'p', en: "You know this class from Lesson 4. This time the parts are called <code>first</code> and <code>second</code>, and <code>toString</code> prints them as <code>Faisal (94)</code>." },
        { type: 'code', code: J`
          class Pair<A, B> {
              private A first;
              private B second;
              public Pair(A first, B second) { this.first = first; this.second = second; }
              public A getFirst() { return first; }
              public B getSecond() { return second; }
              @Override
              public String toString() { return first + " (" + second + ")"; }
          }
        ` },
        { type: 'h', en: 'Piece 2: Result&lt;T&gt;, a value or a reason' },
        { type: 'p', en: "What should <code>lookup(marks, \"Zaid\")</code> return when Zaid is not in the section? Returning <code>-1</code> is confusing (is it a mark?), and it does not work for prices or names. Returning <code>null</code> is dangerous: the caller may forget to check and crash with <code>NullPointerException</code>. A clearer answer is a small object that says either \"OK, here is the value\" or \"failed, here is why\". We call it <code>Result&lt;T&gt;</code>.",
          ar: 'Result&lt;T&gt;‎ يحمل إما قيمة ناجحة أو سبب الفشل، بدل ‎-1‎ أو null.' },
        { type: 'analogy', title: 'A delivery slip', en: "When you order a parcel, the courier always brings a slip. Either the slip says \"Delivered\" and comes with the parcel, or it says \"Not delivered: address not found\". You read the slip first, then you open the parcel. <code>Result&lt;T&gt;</code> is that slip: check <code>isOk()</code> first, then take the value." },
        { type: 'code', code: J`
          class Result<T> {
              private T value;
              private String error;

              private Result(T value, String error) {
                  this.value = value;
                  this.error = error;
              }

              public static <T> Result<T> ok(T value) {
                  return new Result<>(value, null);
              }

              public static <T> Result<T> fail(String error) {
                  return new Result<>(null, error);
              }

              public boolean isOk() { return error == null; }
              public T getValue() { return value; }
              public String getError() { return error; }
          }
        ` },
        { type: 'lines', rows: [
          ['private Result(T value, String error)', 'A <b>private</b> constructor: other classes cannot call <code>new Result</code> directly.'],
          ['public static <T> Result<T> ok(T value)', 'A static method that builds a successful Result. Static, so it declares its <b>own</b> &lt;T&gt; (Lesson 4).'],
          ['public static <T> Result<T> fail(String error)', 'Builds a failed Result: no value, only a message.'],
          ['return error == null;', 'No error message means success.']
        ], ar: 'المنشئ خاص، ونصنع الكائن عبر الدالتين الساكنتين ok و fail، ولكل منهما T خاص بها.' },
        { type: 'p', en: "Methods like <code>ok</code> and <code>fail</code> are called <b>factory methods</b>: they build objects for you and give them clear names. <code>Result.ok(88)</code> reads like English." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Result<Integer> a = Result.ok(88);
                  Result<Integer> b = Result.fail("No such student");
                  System.out.println(a.isOk() + " " + a.getValue());
                  System.out.println(b.isOk() + " " + b.getError());
              }
          }

          class Result<T> {
              private T value;
              private String error;

              private Result(T value, String error) {
                  this.value = value;
                  this.error = error;
              }

              public static <T> Result<T> ok(T value) {
                  return new Result<>(value, null);
              }

              public static <T> Result<T> fail(String error) {
                  return new Result<>(null, error);
              }

              public boolean isOk() { return error == null; }
              public T getValue() { return value; }
              public String getError() { return error; }
          }
        `, out: J`
          true 88
          false No such student
        ` },
        { type: 'memory', title: 'Two Result objects: one with a value, one with a reason',
          en: "Each Result has two fields. In a successful one, <code>value</code> refers to the data and <code>error</code> is null. In a failed one it is the other way round.",
          vars: [{ name: 'a', type: 'Result<Integer>', ref: 'A' }, { name: 'b', type: 'Result<Integer>', ref: 'B' }],
          objects: [
            { id: 'A', cls: 'Result<Integer>', fields: [{ name: 'value', ref: 'C' }, { name: 'error', value: 'null' }] },
            { id: 'C', cls: 'Integer', fields: [{ name: 'value', value: '88' }] },
            { id: 'B', cls: 'Result<Integer>', fields: [{ name: 'value', value: 'null' }, { name: 'error', ref: 'D' }] },
            { id: 'D', cls: 'String', fields: [{ name: 'text', value: '"No such student"' }] }
          ],
          ar: 'في النتيجة الناجحة يشير value إلى البيانات و error فارغ، وفي الفاشلة العكس.' },
        { type: 'check', q: 'For <code>Result&lt;Integer&gt; r = Result.fail("Missing");</code>, what does <code>r.getValue()</code> return?', options: ['0', '-1', 'null', '"Missing"'], answer: 2, explain: "<code>fail</code> stores <code>null</code> as the value and the message as the error. That is why you check <code>isOk()</code> before using the value." },
        { type: 'h', en: 'Piece 3: two generic methods for any list of pairs' },
        { type: 'p', en: "<code>lookup</code> searches a list of pairs for a key (the first part) and returns a <code>Result</code> of the second part. It works for any A and B, so it does not care whether the pairs are names and marks or items and prices. It compares keys with <code>equals</code>.",
          ar: 'lookup تبحث عن المفتاح وتعيد Result للجزء الثاني، وتعمل مع أي نوعين A و B.' },
        { type: 'code', code: J`
          public static <A, B> Result<B> lookup(ArrayList<Pair<A, B>> list, A key) {
              for (Pair<A, B> p : list) {
                  if (p.getFirst().equals(key)) {
                      return Result.ok(p.getSecond());
                  }
              }
              return Result.fail("Not found: " + key);
          }
        ` },
        { type: 'lines', rows: [
          ['<A, B> Result<B> lookup(ArrayList<Pair<A, B>> list, A key)', 'Two placeholders. The key has type A; the answer is a Result of B.'],
          ['p.getFirst().equals(key)', 'Compare keys with <code>equals</code>, never <code>==</code>.'],
          ['return Result.ok(p.getSecond());', 'Found: wrap the second part in a successful Result.'],
          ['return Result.fail("Not found: " + key);', 'Only reached when no pair matched.']
        ] },
        { type: 'p', en: "<code>best</code> finds the pair with the biggest second part. To compare second parts we need a bound, but only on B: <code>&lt;A, B extends Comparable&lt;B&gt;&gt;</code>. The first part (the name) can be anything." },
        { type: 'code', code: J`
          public static <A, B extends Comparable<B>> Pair<A, B> best(ArrayList<Pair<A, B>> list) {
              Pair<A, B> top = list.get(0);
              for (Pair<A, B> p : list) {
                  if (p.getSecond().compareTo(top.getSecond()) > 0) {
                      top = p;
                  }
              }
              return top;
          }
        ` },
        { type: 'check', q: 'Why does <code>best</code> put the bound on B and not on A?', options: ['Because A is always a String', 'Because only the second parts are compared', 'Because bounds are allowed only on the last placeholder', 'Because A is a primitive type'], answer: 1, explain: "The method compares <code>getSecond()</code> values with <code>compareTo</code>, so only B must be Comparable. Keeping A free lets the keys be any type." },
        { type: 'steps', title: 'Worked example: the grade book', problem: 'Store three students with their marks as <code>Pair&lt;String, Integer&gt;</code>. Look up Reem and Zaid with <code>lookup</code>, printing the mark or the error, then print the top student with <code>best</code>.',
          steps: [
            { en: 'Create the list of pairs and add the students.', code: J`
              ArrayList<Pair<String, Integer>> marks = new ArrayList<>();
              marks.add(new Pair<>("Lama", 88));
              marks.add(new Pair<>("Faisal", 94));
              marks.add(new Pair<>("Reem", 79));
            ` },
            { en: 'Look up two names. Here A = String and B = Integer, so each answer is a <code>Result&lt;Integer&gt;</code>.', code: J`
              Result<Integer> r1 = lookup(marks, "Reem");
              Result<Integer> r2 = lookup(marks, "Zaid");
            ` },
            { en: 'Always check <code>isOk()</code> before using the value.', code: J`
              if (r1.isOk()) {
                  System.out.println("Reem: " + r1.getValue());
              }
              if (!r2.isOk()) {
                  System.out.println(r2.getError());
              }
            ` },
            { en: 'Find the top student. Integer is Comparable, so B satisfies the bound.', code: J`
              System.out.println("Top student: " + best(marks));
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static <A, B> Result<B> lookup(ArrayList<Pair<A, B>> list, A key) {
                    for (Pair<A, B> p : list) {
                        if (p.getFirst().equals(key)) {
                            return Result.ok(p.getSecond());
                        }
                    }
                    return Result.fail("Not found: " + key);
                }

                public static <A, B extends Comparable<B>> Pair<A, B> best(ArrayList<Pair<A, B>> list) {
                    Pair<A, B> top = list.get(0);
                    for (Pair<A, B> p : list) {
                        if (p.getSecond().compareTo(top.getSecond()) > 0) {
                            top = p;
                        }
                    }
                    return top;
                }

                public static void main(String[] args) {
                    ArrayList<Pair<String, Integer>> marks = new ArrayList<>();
                    marks.add(new Pair<>("Lama", 88));
                    marks.add(new Pair<>("Faisal", 94));
                    marks.add(new Pair<>("Reem", 79));
                    Result<Integer> r1 = lookup(marks, "Reem");
                    Result<Integer> r2 = lookup(marks, "Zaid");
                    if (r1.isOk()) {
                        System.out.println("Reem: " + r1.getValue());
                    }
                    if (!r2.isOk()) {
                        System.out.println(r2.getError());
                    }
                    System.out.println("Top student: " + best(marks));
                }
            }

            class Pair<A, B> {
                private A first;
                private B second;
                public Pair(A first, B second) { this.first = first; this.second = second; }
                public A getFirst() { return first; }
                public B getSecond() { return second; }
                @Override
                public String toString() { return first + " (" + second + ")"; }
            }

            class Result<T> {
                private T value;
                private String error;

                private Result(T value, String error) {
                    this.value = value;
                    this.error = error;
                }

                public static <T> Result<T> ok(T value) {
                    return new Result<>(value, null);
                }

                public static <T> Result<T> fail(String error) {
                    return new Result<>(null, error);
                }

                public boolean isOk() { return error == null; }
                public T getValue() { return value; }
                public String getError() { return error; }
            }
          `, out: J`
            Reem: 79
            Not found: Zaid
            Top student: Faisal (94)
          `, ar: 'نبحث بـ lookup ونفحص isOk قبل استعمال القيمة، ونجد الأفضل بـ best.' },
        { type: 'steps', title: 'Worked example: the same classes in a shop', problem: 'A small shop has a menu of items with prices in riyals (<code>Pair&lt;String, Double&gt;</code>). A customer orders Tea, Water, Juice and Tea. Use the <b>same</b> <code>lookup</code> and <code>best</code>, without changing them, to compute the bill, report missing items, and name the most expensive item.',
          steps: [
            { en: 'Build the menu. Now A = String and B = Double.', code: J`
              ArrayList<Pair<String, Double>> menu = new ArrayList<>();
              menu.add(new Pair<>("Tea", 3.5));
              menu.add(new Pair<>("Dates", 25.0));
              menu.add(new Pair<>("Water", 1.5));
            ` },
            { en: 'For every ordered item, <code>lookup</code> returns a <code>Result&lt;Double&gt;</code>. Add the price when it is OK; print the error when it is not.', code: J`
              for (String item : order) {
                  Result<Double> r = lookup(menu, item);
                  if (r.isOk()) {
                      bill += r.getValue();
                  } else {
                      System.out.println(r.getError());
                  }
              }
            ` },
            { en: 'Print the bill, and use <code>best</code> to find the most expensive item (Double is Comparable).', code: J`
              System.out.println("Bill: " + bill + " SAR");
              System.out.println("Most expensive: " + best(menu));
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static <A, B> Result<B> lookup(ArrayList<Pair<A, B>> list, A key) {
                    for (Pair<A, B> p : list) {
                        if (p.getFirst().equals(key)) {
                            return Result.ok(p.getSecond());
                        }
                    }
                    return Result.fail("Not found: " + key);
                }

                public static <A, B extends Comparable<B>> Pair<A, B> best(ArrayList<Pair<A, B>> list) {
                    Pair<A, B> top = list.get(0);
                    for (Pair<A, B> p : list) {
                        if (p.getSecond().compareTo(top.getSecond()) > 0) {
                            top = p;
                        }
                    }
                    return top;
                }

                public static void main(String[] args) {
                    ArrayList<Pair<String, Double>> menu = new ArrayList<>();
                    menu.add(new Pair<>("Tea", 3.5));
                    menu.add(new Pair<>("Dates", 25.0));
                    menu.add(new Pair<>("Water", 1.5));
                    String[] order = {"Tea", "Water", "Juice", "Tea"};
                    double bill = 0;
                    for (String item : order) {
                        Result<Double> r = lookup(menu, item);
                        if (r.isOk()) {
                            bill += r.getValue();
                        } else {
                            System.out.println(r.getError());
                        }
                    }
                    System.out.println("Bill: " + bill + " SAR");
                    System.out.println("Most expensive: " + best(menu));
                }
            }

            class Pair<A, B> {
                private A first;
                private B second;
                public Pair(A first, B second) { this.first = first; this.second = second; }
                public A getFirst() { return first; }
                public B getSecond() { return second; }
                @Override
                public String toString() { return first + " (" + second + ")"; }
            }

            class Result<T> {
                private T value;
                private String error;

                private Result(T value, String error) {
                    this.value = value;
                    this.error = error;
                }

                public static <T> Result<T> ok(T value) {
                    return new Result<>(value, null);
                }

                public static <T> Result<T> fail(String error) {
                    return new Result<>(null, error);
                }

                public boolean isOk() { return error == null; }
                public T getValue() { return value; }
                public String getError() { return error; }
            }
          `, out: J`
            Not found: Juice
            Bill: 8.5 SAR
            Most expensive: Dates (25.0)
          `, ar: 'الدالتان نفسهما خدمتا دفتر الدرجات والمتجر دون أي تغيير: هذه فائدة الأنواع العامة.' },
        { type: 'analogy', title: 'One measuring cup, many kitchens', en: "A good measuring cup works for rice, flour or water, in your kitchen or your neighbour's. Nobody makes a special cup for each food. <code>lookup</code> and <code>best</code> are measuring cups for lists of pairs: the grade book filled them with names and marks, the shop with items and prices, and the cups did not change." },
        { type: 'note', kind: 'tip', en: "Look back at what you used in this project: a generic class with two placeholders (Pair), a generic class with static generic factory methods (Result), a generic method with two placeholders (lookup), a bound on one placeholder (best), wrapper classes and autoboxing (Integer, Double), and nested types (<code>ArrayList&lt;Pair&lt;String, Integer&gt;&gt;</code>). That is the whole unit in one program." },
        { type: 'p', en: "<b>Try it yourself:</b> add a third use, a phone book of <code>Pair&lt;String, String&gt;</code> (name and phone number). <code>lookup</code> works at once. Does <code>best</code> work too? Yes: String is Comparable, so it returns the pair whose number comes last alphabetically.",
          ar: 'جرّب{{g:|ي}} دفتر هواتف من Pair&lt;String, String&gt;‎؛ الدالتان تعملان دون تغيير.' }
      ],
      mistakes: [
        { title: 'Using the value without checking isOk()', en: "A failed Result has a <code>null</code> value. Unboxing it into an <code>int</code> or <code>double</code> crashes with <code>NullPointerException</code>.", code: J`
          int mark = lookup(marks, "Zaid").getValue();   // crash if Zaid is missing
        ` },
        { title: 'Forgetting the bound on B in best', en: "Without <code>B extends Comparable&lt;B&gt;</code>, <code>p.getSecond().compareTo(...)</code> does not compile." },
        { title: 'Comparing keys with ==', en: "<code>p.getFirst() == key</code> compares references. Two equal names read from input are different String objects, so the student would not be found. Use <code>equals</code>." },
        { title: 'A static factory method without its own &lt;T&gt;', en: "<code>public static Result&lt;T&gt; ok(T value)</code> does not compile: a static method cannot use the class's T. Write <code>public static &lt;T&gt; Result&lt;T&gt; ok(T value)</code>." }
      ],
      remember: [
        "<code>Pair&lt;A, B&gt;</code> keeps two related values together; a method can return one Pair to give back two results.",
        "<code>Result&lt;T&gt;</code> holds either a value or a reason; check <code>isOk()</code> before <code>getValue()</code>.",
        "Static factory methods (<code>ok</code>, <code>fail</code>) declare their own <code>&lt;T&gt;</code>.",
        "Put a bound only on the placeholder you compare: <code>&lt;A, B extends Comparable&lt;B&gt;&gt;</code>.",
        "Generic classes and methods written once work unchanged in a grade book, a shop, a phone book..."
      ],
      rememberAr: 'Pair يجمع قيمتين، و Result يحمل قيمة أو سبب فشل ونفحص isOk أولًا. الدوال الساكنة تعلن T خاصًا بها، والقيد نضعه على النوع الذي نقارنه فقط.',
      practice: [
        { t: 'mcq', q: "Why is returning a <code>Result&lt;Integer&gt;</code> better than returning <code>-1</code> when a student's mark is not found?", options: ['It is faster', 'It clearly separates "found, here is the value" from "not found, here is why", and works for any type', 'It uses less memory', 'Because -1 is not an int'], answer: 1, explain: "-1 could be confused with data and does not fit Strings or Doubles. A Result says clearly whether there is a value, and carries a message when there is not." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static Result<Integer> safeAverage(int total, int count) {
                  if (count == 0) {
                      return Result.fail("No students");
                  }
                  return Result.ok(total / count);
              }

              public static void main(String[] args) {
                  Result<Integer> a = safeAverage(250, 3);
                  Result<Integer> b = safeAverage(100, 0);
                  System.out.println(a.isOk() + " " + a.getValue());
                  System.out.println(b.isOk() + " " + b.getError());
                  System.out.println(b.getValue());
              }
          }

          class Result<T> {
              private T value;
              private String error;
              private Result(T value, String error) { this.value = value; this.error = error; }
              public static <T> Result<T> ok(T value) { return new Result<>(value, null); }
              public static <T> Result<T> fail(String error) { return new Result<>(null, error); }
              public boolean isOk() { return error == null; }
              public T getValue() { return value; }
              public String getError() { return error; }
          }
        `, answer: J`
          true 83
          false No students
          null
        `, explain: "250 / 3 is integer division: 83. The second call fails, so <code>isOk()</code> is false and the error is \"No students\". Its value is <code>null</code>, and printing a null reference prints the word null." },
        { t: 'fill', q: "Complete the static factory method of <code>Result&lt;T&gt;</code>.", code: J`
          public static ___ Result<T> ok(T value) {
              return new Result<>(value, ___);
          }
        `, answers: ['<T>', 'null'], explain: "A static method declares its own <code>&lt;T&gt;</code>. A successful Result has no error, so the error is <code>null</code>." },
        { t: 'bug', q: "Zaid is not in the grade book. This code crashes when it runs. Tap the line with the bug.",
          code: J`
            ArrayList<Pair<String, Integer>> marks = new ArrayList<>();
            marks.add(new Pair<>("Lama", 88));
            marks.add(new Pair<>("Faisal", 94));
            Result<Integer> r = lookup(marks, "Zaid");
            int mark = r.getValue();
            System.out.println("Mark: " + mark);
          `, bug: 5,
          fix: J`
            ArrayList<Pair<String, Integer>> marks = new ArrayList<>();
            marks.add(new Pair<>("Lama", 88));
            marks.add(new Pair<>("Faisal", 94));
            Result<Integer> r = lookup(marks, "Zaid");
            if (r.isOk()) {
                System.out.println("Mark: " + r.getValue());
            } else {
                System.out.println(r.getError());
            }
          `,
          hint: "What is stored as the value of a failed Result?",
          explain: "<code>lookup</code> returns a failed Result whose value is <code>null</code>. Line 5 unboxes that null Integer into an <code>int</code>, which throws <code>NullPointerException</code>. Check <code>isOk()</code> first; the fixed code prints \"Not found: Zaid\".",
          explainAr: 'قيمة النتيجة الفاشلة null، وتحويلها إلى int يسبب NullPointerException؛ نفحص isOk أولًا.' },
        { t: 'bug', q: "This method should return the pair with the biggest second part. It does not compile. Tap the line where the real mistake is. (Two answers are accepted.)",
          code: J`
            public static <A, B> Pair<A, B> best(ArrayList<Pair<A, B>> list) {
                Pair<A, B> top = list.get(0);
                for (Pair<A, B> p : list) {
                    if (p.getSecond().compareTo(top.getSecond()) > 0) {
                        top = p;
                    }
                }
                return top;
            }
          `, bug: [1, 4],
          fix: J`
            public static <A, B extends Comparable<B>> Pair<A, B> best(ArrayList<Pair<A, B>> list) {
                Pair<A, B> top = list.get(0);
                for (Pair<A, B> p : list) {
                    if (p.getSecond().compareTo(top.getSecond()) > 0) {
                        top = p;
                    }
                }
                return top;
            }
          `,
          hint: "Which placeholder needs <code>compareTo</code>?",
          explain: "The error appears on line 4: a plain B has no <code>compareTo</code>. The cause is the header on line 1, which needs the bound <code>B extends Comparable&lt;B&gt;</code>. A stays free, because names are never compared.",
          explainAr: 'نضيف القيد على B لأننا نقارن الأجزاء الثانية فقط.' },
        { t: 'mcq', q: "With <code>ArrayList&lt;Pair&lt;String, Double&gt;&gt; menu</code>, what is the type of <code>lookup(menu, \"Tea\")</code>?", options: ['Result&lt;String&gt;', 'Result&lt;Double&gt;', 'Pair&lt;String, Double&gt;', 'double'], answer: 1, explain: "A = String and B = Double, and <code>lookup</code> returns <code>Result&lt;B&gt;</code>." },
        { t: 'code', q: "Complete the generic method <code>lookup</code>, then finish the shop program. Input: <code>n</code>, then <code>n</code> lines with an item and a price; then <code>m</code> and <code>m</code> ordered item names. For each missing item print <code>Not found: </code> + the item. At the end print <code>Bill: </code> + the total + <code> SAR</code>. No prompts.", qAr: 'أكمل{{g:|ي}} الدالة العامة lookup واحسب{{g:|ي}} الفاتورة.',
          starter: J`
            import java.util.*;

            public class Main {
                public static <A, B> Result<B> lookup(ArrayList<Pair<A, B>> list, A key) {
                    // TODO: return Result.ok(...) when found, Result.fail("Not found: " + key) otherwise
                    return null;
                }

                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    ArrayList<Pair<String, Double>> menu = new ArrayList<>();
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        String name = sc.next();
                        double price = sc.nextDouble();
                        menu.add(new Pair<>(name, price));
                    }
                    int m = sc.nextInt();
                    double bill = 0;
                    for (int i = 0; i < m; i++) {
                        Result<Double> r = lookup(menu, sc.next());
                        // TODO: add the price, or print the error
                    }
                    System.out.println("Bill: " + bill + " SAR");
                }
            }

            class Pair<A, B> {
                private A first;
                private B second;
                public Pair(A first, B second) { this.first = first; this.second = second; }
                public A getFirst() { return first; }
                public B getSecond() { return second; }
            }

            class Result<T> {
                private T value;
                private String error;
                private Result(T value, String error) { this.value = value; this.error = error; }
                public static <T> Result<T> ok(T value) { return new Result<>(value, null); }
                public static <T> Result<T> fail(String error) { return new Result<>(null, error); }
                public boolean isOk() { return error == null; }
                public T getValue() { return value; }
                public String getError() { return error; }
            }
          `,
          tests: [
            { stdin: '3\nTea 3.5\nDates 25.0\nWater 1.5\n4\nTea Water Juice Tea', expected: 'Not found: Juice\nBill: 8.5 SAR' },
            { stdin: '1\nPen 2.0\n2\nPen Pen', expected: 'Bill: 4.0 SAR' },
            { stdin: '2\nBag 85.0\nCap 20.0\n1\nShoes', expected: 'Not found: Shoes\nBill: 0.0 SAR' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static <A, B> Result<B> lookup(ArrayList<Pair<A, B>> list, A key) {
                    for (Pair<A, B> p : list) {
                        if (p.getFirst().equals(key)) {
                            return Result.ok(p.getSecond());
                        }
                    }
                    return Result.fail("Not found: " + key);
                }

                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    ArrayList<Pair<String, Double>> menu = new ArrayList<>();
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        String name = sc.next();
                        double price = sc.nextDouble();
                        menu.add(new Pair<>(name, price));
                    }
                    int m = sc.nextInt();
                    double bill = 0;
                    for (int i = 0; i < m; i++) {
                        Result<Double> r = lookup(menu, sc.next());
                        if (r.isOk()) {
                            bill += r.getValue();
                        } else {
                            System.out.println(r.getError());
                        }
                    }
                    System.out.println("Bill: " + bill + " SAR");
                }
            }

            class Pair<A, B> {
                private A first;
                private B second;
                public Pair(A first, B second) { this.first = first; this.second = second; }
                public A getFirst() { return first; }
                public B getSecond() { return second; }
            }

            class Result<T> {
                private T value;
                private String error;
                private Result(T value, String error) { this.value = value; this.error = error; }
                public static <T> Result<T> ok(T value) { return new Result<>(value, null); }
                public static <T> Result<T> fail(String error) { return new Result<>(null, error); }
                public boolean isOk() { return error == null; }
                public T getValue() { return value; }
                public String getError() { return error; }
            }
          `,
          hint: "In <code>lookup</code>, loop over the pairs and compare <code>p.getFirst().equals(key)</code>. In <code>main</code>, use <code>if (r.isOk())</code>.",
          explain: "The names come from the Scanner, so they are new String objects: <code>equals</code> finds them, <code>==</code> would not. The Result tells main whether to add a price or report the missing item." }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'What does <code>&lt;String&gt;</code> mean in <code>ArrayList&lt;String&gt;</code>?', options: ['The list holds Strings', 'The list is sorted', 'The list has one item', 'The list is raw'], answer: 0, explain: "It is the type argument." },
    { t: 'mcq', q: 'Which is the main advantage of generics?', options: ['Programs use less memory', 'Type errors are detected at compile time and casts are not needed', 'Primitive types can be stored in collections directly', 'Methods run faster'], answer: 1, explain: "Generics move type checking to the compiler and remove explicit casts. They do not allow primitives as type arguments." },
    { t: 'mcq', q: 'Which method header is a correct generic method?', options: ['public static void &lt;T&gt; show(T x)', 'public static &lt;T&gt; void show(T x)', 'public &lt;T&gt; static void show(T x)', 'public static void show&lt;T&gt;(T x)'], answer: 1, explain: "The type parameter list comes after all modifiers and immediately before the return type." },
    { t: 'output', q: 'What does this program print?', code: J`
      public class Main {
          public static <T> T middle(T[] a) {
              return a[a.length / 2];
          }

          public static void main(String[] args) {
              String[] cities = {"Abha", "Hail", "Tabuk", "Najran"};
              Integer[] years = {2019, 2021, 2023};
              System.out.println(middle(cities));
              System.out.println(middle(years) + 1);
          }
      }
    `, answer: J`
      Tabuk
      2022
    `, explain: "For 4 cities, 4 / 2 = 2 gives \"Tabuk\". For 3 years, 3 / 2 = 1 gives 2021, and 2021 + 1 = 2022." },
    { t: 'mcq', q: "Inside <code>class Box&lt;T&gt;</code>, which statement is <b>illegal</b>?", options: ['private T value;', 'public T get() { return value; }', 'T copy = new T();', 'public void set(T v) { value = v; }'], answer: 2, explain: "The actual type of T is not known at run time (type erasure), so <code>new T()</code> is not allowed." },
    { t: 'output', q: 'What does this program print?', code: J`
      public class Main {
          public static void main(String[] args) {
              Pair<String, Integer> p = new Pair<>("Exam", 90);
              Pair<Integer, String> q = new Pair<>(p.getSecond(), p.getFirst());
              System.out.println(q.getFirst() + 10);
              System.out.println(q.getSecond().length());
          }
      }

      class Pair<A, B> {
          private A first;
          private B second;
          public Pair(A first, B second) { this.first = first; this.second = second; }
          public A getFirst() { return first; }
          public B getSecond() { return second; }
      }
    `, answer: J`
      100
      4
    `, explain: "q is (90, \"Exam\"). 90 + 10 = 100; \"Exam\" has length 4." },
    { t: 'mcq', q: 'Which declaration correctly restricts T to types that can be compared with each other?', options: ['&lt;T implements Comparable&lt;T&gt;&gt;', '&lt;T extends Comparable&lt;T&gt;&gt;', '&lt;T super Comparable&gt;', '&lt;Comparable T&gt;'], answer: 1, explain: "Bounds always use <code>extends</code>." },
    { t: 'output', q: 'What does this program print?', code: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              ArrayList<Runner> race = new ArrayList<>();
              race.add(new Runner("Hind", 58));
              race.add(new Runner("Saad", 51));
              race.add(new Runner("Ola", 55));
              Collections.sort(race);
              System.out.println(race.get(0).name + " " + race.get(2).name);
          }
      }

      class Runner implements Comparable<Runner> {
          String name;
          int seconds;
          Runner(String name, int seconds) { this.name = name; this.seconds = seconds; }
          public int compareTo(Runner o) { return this.seconds - o.seconds; }
      }
    `, answer: 'Saad Hind', explain: "Sorted by time ascending: Saad (51), Ola (55), Hind (58). Index 0 is Saad and index 2 is Hind." },
    { t: 'mcq', q: 'A method has the parameter <code>ArrayList&lt;Number&gt; list</code>. What happens if you pass an <code>ArrayList&lt;Integer&gt;</code>?', options: ['It works because Integer extends Number', 'Compilation error', 'ClassCastException at runtime', 'The Integers are converted to Doubles'], answer: 1, explain: "ArrayList&lt;Integer&gt; is not a subtype of ArrayList&lt;Number&gt;. Use <code>ArrayList&lt;? extends Number&gt;</code> to accept it." },
    { t: 'mcq', q: "What does the compiler say about <code>ArrayList list = new ArrayList();</code>?", options: ['Nothing; it is the recommended style', 'It is a syntax error', 'It compiles but uses a raw type and gives an unchecked warning', 'It creates a list of int'], answer: 2, explain: "Raw types are still legal for backward compatibility, but the compiler warns because it cannot check element types." },
    { t: 'bug', q: "This generic method should return the biggest mark. It does not compile. Tap the line where the real mistake is. (Two answers are accepted.)",
      code: J`
        public class Main {
            public static <T> T findMax(T[] a) {
                T best = a[0];
                for (T item : a) {
                    if (item.compareTo(best) > 0) {
                        best = item;
                    }
                }
                return best;
            }
            public static void main(String[] args) {
                Integer[] marks = {72, 95, 88};
                System.out.println(findMax(marks));
            }
        }
      `, bug: [2, 5],
      fix: J`
        public class Main {
            public static <T extends Comparable<T>> T findMax(T[] a) {
                T best = a[0];
                for (T item : a) {
                    if (item.compareTo(best) > 0) {
                        best = item;
                    }
                }
                return best;
            }
            public static void main(String[] args) {
                Integer[] marks = {72, 95, 88};
                System.out.println(findMax(marks));
            }
        }
      `,
      hint: "What does the compiler know about a plain T?",
      explain: "The compiler rejects <code>item.compareTo(best)</code> on line 5, because a plain T might be a type that cannot compare. The cause is the header on line 2: add the bound <code>&lt;T extends Comparable&lt;T&gt;&gt;</code>. The fixed program prints 95.",
      explainAr: 'بدون القيد لا يُسمح باستدعاء compareTo على T.' },
    { t: 'bug', q: "This method should add <code>n</code> zero marks to a list. It does not compile. Tap the line where the real mistake is. (Two answers are accepted.)",
      code: J`
        import java.util.*;

        public class Main {
            public static void fillZeros(List<? extends Number> list, int n) {
                for (int i = 0; i < n; i++) {
                    list.add(0);
                }
            }

            public static void main(String[] args) {
                List<Integer> marks = new ArrayList<>();
                fillZeros(marks, 3);
                System.out.println(marks);
            }
        }
      `, bug: [4, 6],
      fix: J`
        import java.util.*;

        public class Main {
            public static void fillZeros(List<? super Integer> list, int n) {
                for (int i = 0; i < n; i++) {
                    list.add(0);
                }
            }

            public static void main(String[] args) {
                List<Integer> marks = new ArrayList<>();
                fillZeros(marks, 3);
                System.out.println(marks);
            }
        }
      `,
      hint: "Get = Extends, Put = Super. What does this method do with the list?",
      explain: "The method <b>puts</b> Integers into the list, but <code>? extends Number</code> forbids adding (line 6): the list might be a List&lt;Double&gt;. The parameter on line 4 should be <code>List&lt;? super Integer&gt;</code>. The fixed program prints [0, 0, 0].",
      explainAr: 'الدالة تضيف عناصر، لذلك نستخدم ‎? super Integer‎ وليس ‎? extends Number‎.' }
  ],
  lab: {
    t: 'code',
    q: "<b>Generic toolkit.</b> Write two generic static methods:<br>• <code>&lt;T extends Comparable&lt;T&gt;&gt; T findMax(ArrayList&lt;T&gt; list)</code> — returns the largest element;<br>• <code>&lt;T&gt; int countOf(ArrayList&lt;T&gt; list, T target)</code> — counts elements equal to target (use <code>equals</code>).<br>Input: an integer <code>w</code> followed by <code>w</code> words, then an integer <code>m</code> followed by <code>m</code> integers. Print <code>Max word: </code> + the largest word, <code>Max number: </code> + the largest number, and <code>Count: </code> + how many times that largest number appears. Use the <b>same</b> methods for words and numbers. Do not print prompts.<br><b>Tip:</b> first write <code>findMax</code> and test it with the words only; then add <code>countOf</code>.",
    qAr: "اكتب دالتين عامتين findMax و countOf واستخدمهما مع الكلمات والأعداد.",
    starter: J`
      import java.util.*;

      public class Main {
          // TODO: public static <T extends Comparable<T>> T findMax(ArrayList<T> list)

          // TODO: public static <T> int countOf(ArrayList<T> list, T target)

          public static void main(String[] args) {
              Scanner in = new Scanner(System.in);
              ArrayList<String> words = new ArrayList<>();
              ArrayList<Integer> nums = new ArrayList<>();
              int w = in.nextInt();
              for (int i = 0; i < w; i++) {
                  words.add(in.next());
              }
              int m = in.nextInt();
              for (int i = 0; i < m; i++) {
                  nums.add(in.nextInt());
              }
              // print the three lines
          }
      }
    `,
    tests: [
      { stdin: '3\nbanana apple cherry\n4\n12 45 7 45', expected: J`
        Max word: cherry
        Max number: 45
        Count: 2
      ` },
      { stdin: '1\nzebra\n3\n-5 -2 -9', expected: J`
        Max word: zebra
        Max number: -2
        Count: 1
      ` },
      { stdin: '4\nJava java JAVA jaVa\n2\n0 0', expected: J`
        Max word: java
        Max number: 0
        Count: 2
      ` }
    ],
    solution: J`
      import java.util.*;

      public class Main {
          public static <T extends Comparable<T>> T findMax(ArrayList<T> list) {
              T best = list.get(0);
              for (T item : list) {
                  if (item.compareTo(best) > 0) {
                      best = item;
                  }
              }
              return best;
          }

          public static <T> int countOf(ArrayList<T> list, T target) {
              int count = 0;
              for (T item : list) {
                  if (item.equals(target)) {
                      count++;
                  }
              }
              return count;
          }

          public static void main(String[] args) {
              Scanner in = new Scanner(System.in);
              ArrayList<String> words = new ArrayList<>();
              ArrayList<Integer> nums = new ArrayList<>();
              int w = in.nextInt();
              for (int i = 0; i < w; i++) {
                  words.add(in.next());
              }
              int m = in.nextInt();
              for (int i = 0; i < m; i++) {
                  nums.add(in.nextInt());
              }
              Integer maxNum = findMax(nums);
              System.out.println("Max word: " + findMax(words));
              System.out.println("Max number: " + maxNum);
              System.out.println("Count: " + countOf(nums, maxNum));
          }
      }
    `,
    hint: "Start <code>best</code> at <code>list.get(0)</code> and replace it whenever <code>item.compareTo(best) &gt; 0</code>. Compare objects with <code>equals</code>, not <code>==</code>.",
    explain: "Because String and Integer both implement Comparable, one bounded generic method finds the maximum of either list; countOf needs no bound since equals exists on every object."
  },
  cheats: [
    { code: J`ArrayList<String> names = new ArrayList<>();`, note: 'Type argument + diamond: compiler checks every add and get' },
    { code: J`public static <T> void printAll(T[] items) { ... }`, note: 'Generic method: &lt;T&gt; goes before the return type' },
    { code: J`class Box<T> { private T value; public T get() { return value; } }`, note: 'Generic class with one type parameter' },
    { code: J`class Pair<K, V> { ... }   new Pair<>("Room", 204)`, note: 'Several type parameters, separated by commas' },
    { code: J`public static <T extends Comparable<T>> T max(T a, T b)`, note: 'Bounded type: T must have compareTo (always "extends")' },
    { code: J`class Student implements Comparable<Student> { public int compareTo(Student o) { ... } }`, note: 'Implementing a generic interface: no casts in compareTo' },
    { code: J`interface Converter<A, B> { B convert(A input); }`, note: 'Your own generic interface' },
    { code: J`double sum(ArrayList<? extends Number> list)`, note: 'Wildcard: accepts lists of Integer, Double, ...' },
    { code: J`ArrayList raw = new ArrayList();`, note: 'Raw type: legal but unsafe, gives unchecked warning' },
    { code: J`ArrayList<Integer> marks; marks.add(90); int m = marks.get(0);`, note: 'Wrapper class in &lt;&gt;; autoboxing and unboxing convert for you' },
    { code: J`class Inventory<T> { private ArrayList<T> items = new ArrayList<>(); public void add(T x) { items.add(x); } }`, note: 'Generic container: a private list inside, methods pass the work to it' },
    { code: J`public static <T extends Comparable<T>> T findMax(T[] a)`, note: 'Array tool that compares: needs the Comparable bound' },
    { code: J`public static <T extends Number> double average(T[] values)`, note: 'Bound with a class: unlocks doubleValue()' },
    { code: J`static void printList(List<?> list)`, note: 'Any list; read items as Object; no adding' },
    { code: J`static void addMarks(List<? super Integer> list)`, note: 'Lower bound: safe to add Integers (Get = Extends, Put = Super)' },
    { code: J`new T()   new T[n]   x instanceof T   // not allowed`, note: 'Type erasure: T is unknown at run time; use ArrayList&lt;T&gt; instead of T[]' },
    { code: J`public static <T> Result<T> ok(T value) { return new Result<>(value, null); }`, note: 'Static factory method in a generic class declares its own &lt;T&gt;' },
    { code: J`public static <A, B extends Comparable<B>> Pair<A, B> best(ArrayList<Pair<A, B>> list)`, note: 'Bound only the placeholder you compare' }
  ],
  glossary: [
    { term: 'Generics', ar: 'الأنواع العامة', def: 'A Java feature that lets classes, interfaces and methods be parameterized by types.' },
    { term: 'Type parameter', ar: 'معامل النوع', def: 'A placeholder such as T or E declared in a generic class or method.' },
    { term: 'Type argument', ar: 'وسيط النوع', def: 'The actual type, such as String, that replaces a type parameter when the generic is used.' },
    { term: 'Generic method', ar: 'دالة عامة', def: 'A method that declares its own type parameters before its return type.' },
    { term: 'Generic class', ar: 'صنف عام', def: 'A class declared with type parameters, for example Box&lt;T&gt;.' },
    { term: 'Generic interface', ar: 'واجهة عامة', def: 'An interface declared with type parameters, for example Comparable&lt;T&gt;.' },
    { term: 'Bounded type', ar: 'نوع مقيَّد', def: 'A type parameter restricted with extends, e.g. &lt;T extends Comparable&lt;T&gt;&gt;.' },
    { term: 'Raw type', ar: 'نوع خام', def: 'A generic class used without type arguments, e.g. ArrayList; unsafe and produces warnings.' },
    { term: 'Wildcard', ar: 'حرف البدل', def: 'The ? symbol in a type argument meaning an unknown type, optionally bounded with extends or super.' },
    { term: 'Diamond operator', ar: 'عامل الماسة', def: 'The empty &lt;&gt; that lets the compiler infer type arguments in a constructor call.' },
    { term: 'Autoboxing', ar: 'التغليف التلقائي', def: 'Automatic conversion between a primitive such as int and its wrapper class such as Integer.' },
    { term: 'Stack', ar: 'مكدس', def: 'A structure where the last item added is the first one removed (push and pop).' },
    { term: 'Type erasure', ar: 'محو الأنواع', def: 'The compiler removes generic type information after checking it, which is why new T() is not allowed.' },
    { term: 'Wrapper class', ar: 'صنف مغلِّف', def: 'A class that wraps a primitive value in an object: Integer for int, Double for double, Character for char, Boolean for boolean.' },
    { term: 'Type inference', ar: 'استنتاج النوع', def: 'The compiler works out a type argument by itself, for example T from the arguments of a generic method call or from the diamond &lt;&gt;.' },
    { term: 'Compile time', ar: 'وقت الترجمة', def: 'The moment when the compiler checks and translates the code. Generic type errors are reported here.' },
    { term: 'Run time', ar: 'وقت التشغيل', def: 'The moment when the translated program is executed. Errors here stop the program, for example ClassCastException.' },
    { term: 'ClassCastException', ar: 'استثناء التحويل', def: 'The error thrown when a cast is wrong at run time, e.g. casting an Integer to String. Generics prevent most of them.' },
    { term: 'Unchecked warning', ar: 'تحذير غير متحقَّق', def: 'A compiler warning that type safety cannot be checked, usually because a raw type is used.' },
    { term: 'Upper bound', ar: 'الحد الأعلى', def: 'A limit written with extends: T extends Number or ? extends Number means Number or any subclass of it.' },
    { term: 'Lower bound', ar: 'الحد الأدنى', def: 'A limit written with super: ? super Integer means Integer or any superclass of it (Number, Object).' },
    { term: 'Unbounded wildcard', ar: 'حرف بدل غير مقيد', def: 'The plain ? as in List&lt;?&gt;: a list of some unknown type; items can be read as Object.' },
    { term: 'PECS', ar: 'المنتج extends والمستهلك super', def: '"Producer Extends, Consumer Super": use ? extends when you get items from a collection and ? super when you put items into it.' },
    { term: 'Container class', ar: 'صنف حاوية', def: 'A class whose job is to hold other objects, usually in a private list, for example Inventory&lt;T&gt; or WaitingList&lt;T&gt;.' },
    { term: 'Delegation', ar: 'التفويض', def: 'When a method passes its work to another object, e.g. add() calling items.add().' },
    { term: 'Factory method', ar: 'دالة مصنع', def: 'A (usually static) method that creates and returns an object, e.g. Result.ok(88). In a generic class it declares its own type parameter.' }
  ]
});
