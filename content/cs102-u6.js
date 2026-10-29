JP.unit({
  course: 'cs102',
  n: 6,
  title: 'Generics',
  titleAr: 'الأنواع العامة (Generics)',
  intro: "Generics let you write a class, interface or method once and use it safely with many types: an ArrayList of String, a Box of Integer, a Pair of String and Double. The compiler checks the types for you, so mistakes are caught before the program runs and you no longer need casts. Step by step you will use generic types, write your own generic methods and classes, restrict them with bounds, and implement generic interfaces such as Comparable.",
  introAr: "تسمح الأنواع العامة بكتابة صنف أو دالة مرة واحدة واستخدامها بأمان مع أنواع مختلفة؛ يكتشف المترجم الأخطاء مبكراً ولا نحتاج إلى التحويل (cast).",
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      title: 'Why generics?',
      titleAr: 'لماذا الأنواع العامة؟',
      minutes: 25,
      body: [
        { type: 'h', en: 'The problem: a list that accepts anything' },
        { type: 'p', en: "You already use <code>ArrayList&lt;String&gt;</code>. The part in angle brackets, <code>&lt;String&gt;</code>, tells Java what kind of things the list holds. Why is that useful? Imagine a list of student names. If someone accidentally adds the number 42, your program should complain <i>immediately</i>, not later when it crashes in front of the user.",
          ar: 'الجزء بين القوسين الزاويين يخبر Java بنوع العناصر في القائمة.' },
        { type: 'analogy', title: 'Labelled boxes', en: "In a pharmacy, every shelf box has a label: \"Painkillers\". Only painkillers go in. A box with no label can hold anything, so you must open each item and check it before use. A list without a type is the box with no label." },
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
          `, ar: 'القائمة من نوع Integer لذلك لا نحتاج إلى cast. 90 + 75 + 60 = 225.' }
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
        "A type argument must be a class: <code>Integer</code>, not <code>int</code>."
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
          explain: "The list is typed, so each item is an Integer and can be added directly." }
      ]
    },

    // ---------------------------------------------------------------- L2
    {
      title: 'Generic methods',
      titleAr: 'الدوال العامة',
      minutes: 30,
      body: [
        { type: 'h', en: 'One method for many types' },
        { type: 'p', en: "Suppose you want a method that prints an array. You would write one for <code>String[]</code>, another for <code>Integer[]</code>, another for <code>Double[]</code>. The code is the same each time! A <b>generic method</b> lets you write it once.",
          ar: 'الدالة العامة تكتب مرة واحدة وتعمل مع أنواع كثيرة.' },
        { type: 'analogy', title: 'A photocopier', en: "A photocopier does not care what is on the paper: a timetable, a menu, or a map. It copies any page. A generic method is a photocopier for types." },
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
        { type: 'p', en: "The return type can also be <code>T</code>. The result then has the same type as the array's items, so no cast is needed." },
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
          `, ar: 'نحفظ عنصرًا في متغير مؤقت ثم نبدل. نفس الدالة تعمل مع String وInteger.' }
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
        "T must be a class, not a primitive. Compare objects with <code>equals</code>."
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
          explain: "T becomes String here, but the method works for any type." }
      ]
    },

    // ---------------------------------------------------------------- L3
    {
      title: 'Writing a generic class',
      titleAr: 'كتابة صنف عام',
      minutes: 25,
      body: [
        { type: 'h', en: 'A box that holds anything' },
        { type: 'p', en: "Sometimes a whole <b>class</b> should work for many types. Think of a <code>Box</code> that stores one item. Without generics you would write <code>StringBox</code>, <code>IntegerBox</code>, <code>DoubleBox</code>... A <b>generic class</b> declares a placeholder after its name: <code>class Box&lt;T&gt;</code>. Each time you create a box, you choose what T is.",
          ar: 'الصنف العام يعلن معامل النوع بعد اسمه، ونحدد النوع عند إنشاء الكائن.' },
        { type: 'analogy', title: 'A labelled lunchbox', en: "A lunchbox is the same plastic box for everyone. Today you label it \"sandwich\"; your friend labels hers \"fruit\". The box (the class) is the same. The label (the type argument) decides what goes inside." },
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
        { type: 'check', q: 'In <code>Box&lt;String&gt; b = new Box&lt;&gt;("pen");</code> what does <code>b.get()</code> return?', options: ['Object', 'T', 'String', 'int'], answer: 2, explain: "T is replaced by String, so get() returns a String." },
        { type: 'note', kind: 'tip', en: "The constructor is <code>public Box(T content)</code>, <b>without</b> <code>&lt;T&gt;</code> after the name. The type parameter belongs only to the class header." },
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
          `, ar: 'نفس الصنف Holder يحمل نصًا مرة وعددًا مرة أخرى.' }
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
        "No <code>new T()</code> and no <code>new T[n]</code>."
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
          explain: "For Box&lt;String&gt;, get() returns a String, so toUpperCase() is allowed." }
      ]
    },
    // ---------------------------------------------------------------- L4
    {
      title: 'Two type parameters and a generic stack',
      titleAr: 'معاملا نوع ومكدس عام',
      minutes: 30,
      body: [
        { type: 'h', en: 'Pair: two placeholders' },
        { type: 'p', en: "Sometimes you want to store two values of <i>different</i> types together: a room name and its capacity, or a product and its price. A class may have several placeholders, separated by commas: <code>Pair&lt;K, V&gt;</code> (K for key, V for value).",
          ar: 'يمكن للصنف أن يملك أكثر من معامل نوع مفصولة بفواصل.' },
        { type: 'analogy', title: 'A tag on a key', en: "A hotel key has a tag. The key is one thing (a number) and the tag is another (a room name). A Pair is a key with a tag: two parts, each with its own type." },
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
        { type: 'check', q: 'What is the type of <code>room.swap()</code> when <code>room</code> is <code>Pair&lt;String, Integer&gt;</code>?', options: ['Pair<String, Integer>', 'Pair<Integer, String>', 'Pair<String, String>', 'Object'], answer: 1, explain: "swap returns Pair&lt;V, K&gt;: V is Integer, K is String." },
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
        "Generic classes can be nested: <code>ArrayList&lt;Pair&lt;String, Integer&gt;&gt;</code>."
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
          explain: "Inside the class K and V are ordinary types, so a method can build a Pair with the type arguments in the opposite order." }
      ]
    },

    // ---------------------------------------------------------------- L5
    {
      title: 'Bounded types and Comparable',
      titleAr: 'الأنواع المقيَّدة و Comparable',
      minutes: 30,
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
        { type: 'h', en: 'Your own classes can be Comparable' },
        { type: 'p', en: "From the previous unit you know <code>Comparable&lt;T&gt;</code> is an interface with <code>int compareTo(T other)</code>. It is a <b>generic interface</b>: when your class implements <code>Comparable&lt;Student&gt;</code>, the parameter is already a <code>Student</code> (no cast). Then <code>Collections.sort(list)</code> sorts a list of students, and <code>Collections.max(list)</code> finds the biggest. <code>Collections</code> is a helper class with ready-made methods for lists." },
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
          `, ar: 'نفترض أن a الأكبر ثم نستبدلها إذا وجدنا أكبر منها.' }
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
        "Implement <code>Comparable&lt;YourClass&gt;</code> so <code>Collections.sort</code> and <code>Collections.max</code> work."
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
          explain: "One method works for String and Integer because both are Comparable." }
      ]
    },

    // ---------------------------------------------------------------- L6
    {
      title: 'Generic interfaces and wildcards',
      titleAr: 'الواجهات العامة وأحرف البدل',
      minutes: 30,
      body: [
        { type: 'h', en: 'Your own generic interface' },
        { type: 'p', en: "You have met a generic interface already: <code>Comparable&lt;T&gt;</code>. You can write your own. Imagine anything that turns an input of type A into a result of type B: Celsius to Fahrenheit, a word to its length, a mark to a grade letter. One interface can describe them all: <code>Converter&lt;A, B&gt;</code>.",
          ar: 'الواجهة العامة تعلن معاملات نوع مثل الصنف العام.' },
        { type: 'analogy', title: 'A machine with a label', en: "A machine has an input slot and an output slot. The label says what goes in and what comes out: \"coffee beans in, coffee out\" or \"paper in, copies out\". The shape of the machine is the interface. The labels are the types." },
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
        { type: 'h', en: 'Wildcards: a surprise' },
        { type: 'p', en: "Integer is a kind of Number. So you might think <code>ArrayList&lt;Integer&gt;</code> is a kind of <code>ArrayList&lt;Number&gt;</code>. It is <b>not</b>! If it were, you could add a Double into your list of Integers by mistake. So a method with the parameter <code>ArrayList&lt;Number&gt;</code> refuses an <code>ArrayList&lt;Integer&gt;</code>.",
          ar: 'ArrayList&lt;Integer&gt;‎ ليست نوعًا فرعيًا من ‎ArrayList&lt;Number&gt;‎.' },
        { type: 'analogy', title: 'A basket of apples', en: "A basket of apples is not a \"basket of fruit\". If it were, someone could put an orange into the apple basket. Apples are fruit, but the basket's label matters." },
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
        { type: 'check', q: 'Which parameter type accepts both <code>ArrayList&lt;Integer&gt;</code> and <code>ArrayList&lt;Double&gt;</code>?', options: ['ArrayList<Number>', 'ArrayList<Object>', 'ArrayList<? extends Number>', 'ArrayList<Integer>'], answer: 2, explain: "Only the wildcard with an upper bound accepts every kind of Number list." },
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
        "<code>?</code> alone means any type."
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
          explain: "A = String is the input, B = Integer is the result." }
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
    { t: 'mcq', q: "What does the compiler say about <code>ArrayList list = new ArrayList();</code>?", options: ['Nothing; it is the recommended style', 'It is a syntax error', 'It compiles but uses a raw type and gives an unchecked warning', 'It creates a list of int'], answer: 2, explain: "Raw types are still legal for backward compatibility, but the compiler warns because it cannot check element types." }
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
    { code: J`ArrayList raw = new ArrayList();`, note: 'Raw type: legal but unsafe, gives unchecked warning' }
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
    { term: 'Type erasure', ar: 'محو الأنواع', def: 'The compiler removes generic type information after checking it, which is why new T() is not allowed.' }
  ]
});
