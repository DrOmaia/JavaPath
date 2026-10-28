JP.unit({
  course: 'cs102',
  n: 5,
  title: 'Java Collections Framework',
  titleAr: 'إطار المجموعات في جافا',
  intro: "Arrays have a fixed size, but real programs need lists that grow and shrink, sets without duplicates, and maps that look values up by key. The Java Collections Framework gives you ready-made, tested data structures (ArrayList, LinkedList, HashSet, HashMap, PriorityQueue) plus helper classes (Arrays, Collections) and iterators to walk through them. Choosing the right collection makes code shorter, faster and safer.",
  introAr: "المصفوفات ثابتة الحجم، لكن البرامج الحقيقية تحتاج قوائم تكبر وتصغر، ومجموعات بلا تكرار، وخرائط تبحث بالمفتاح. يوفّر إطار المجموعات هياكل بيانات جاهزة ومختبرة مع أدوات مساعدة ومُكرِّرات للمرور عليها.",
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      title: 'Arrays review and the Arrays class',
      titleAr: 'مراجعة المصفوفات والصنف Arrays',
      minutes: 40,
      body: [
        { type: 'h', en: 'Static arrays: fixed size' },
        { type: 'p', en: "In CS101 you used arrays such as <code>int[] scores = new int[5];</code>. An array is <b>static</b>: its length is decided when it is created and can never change. If a sixth student joins, you must create a bigger array and copy every element into it yourself.", ar: "المصفوفة العادية ثابتة الحجم؛ لا يمكن تغيير طولها بعد إنشائها." },
        { type: 'code', code: J`
          int[] scores = {80, 91, 67};
          // need room for one more score: build a new array and copy
          int[] bigger = new int[scores.length + 1];
          for (int i = 0; i < scores.length; i++) {
              bigger[i] = scores[i];
          }
          bigger[3] = 74;
          scores = bigger;   // scores now refers to the 4-element array
        ` },
        { type: 'p', en: "A <b>dynamic array</b> does this copying for you behind the scenes: it starts with some capacity and, when it fills up, silently allocates a larger array. Java's <code>ArrayList</code> is exactly that, and it is the first collection you will meet in the next lesson.", ar: "المصفوفة الديناميكية تكبر تلقائياً عند امتلائها، وهذا ما يفعله ArrayList." },
        { type: 'table', head: ['', 'Static array <code>int[]</code>', 'Dynamic array <code>ArrayList&lt;Integer&gt;</code>'], rows: [
          ['Size', 'Fixed at creation', 'Grows and shrinks automatically'],
          ['Length', '<code>arr.length</code> (field)', '<code>list.size()</code> (method)'],
          ['Element types', 'Primitives or objects', 'Objects only (use wrapper classes)'],
          ['Access', '<code>arr[i]</code>', '<code>list.get(i)</code>']
        ] },
        { type: 'h', en: 'The java.util.Arrays helper class' },
        { type: 'p', en: "<code>java.util.Arrays</code> contains static methods that work on ordinary arrays: <code>toString</code> (readable text), <code>sort</code> (ascending order), <code>binarySearch</code> (fast search in a <b>sorted</b> array), <code>fill</code> (set every element to one value) and <code>asList</code> (view an array as a <code>List</code>)." },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] scores = {72, 95, 60, 88, 75};
                  System.out.println(Arrays.toString(scores));
                  Arrays.sort(scores);
                  System.out.println(Arrays.toString(scores));
                  int pos = Arrays.binarySearch(scores, 88);
                  System.out.println("88 found at index " + pos);
                  System.out.println("80 search gives " + Arrays.binarySearch(scores, 80));
                  int[] seats = new int[4];
                  Arrays.fill(seats, 7);
                  System.out.println(Arrays.toString(seats));
              }
          }
        `, out: J`
          [72, 95, 60, 88, 75]
          [60, 72, 75, 88, 95]
          88 found at index 3
          80 search gives -4
          [7, 7, 7, 7]
        ` },
        { type: 'note', kind: 'exam', en: "When the key is <b>not found</b>, <code>binarySearch</code> returns <code>-(insertionPoint) - 1</code>, where the insertion point is the index where the key would go. 80 would go at index 3, so the result is <code>-3 - 1 = -4</code>. On an <b>unsorted</b> array the result is unpredictable.", ar: "إذا لم يوجد العنصر تُرجع binarySearch القيمة ‎-(موضع الإدراج)-1، ويجب أن تكون المصفوفة مرتبة." },
        { type: 'note', kind: 'tip', en: "Printing an array directly, <code>System.out.println(scores)</code>, shows something like <code>[I@1b6d3586</code> (type and hash code). Always use <code>Arrays.toString(scores)</code>." },
        { type: 'h', en: 'Arrays.asList' },
        { type: 'p', en: "<code>Arrays.asList(\"Riyadh\", \"Jeddah\", \"Dammam\")</code> returns a <b>fixed-size</b> list backed by an array. You may <code>set</code> elements, but <code>add</code> or <code>remove</code> throw <code>UnsupportedOperationException</code>. To get a real growable list, pass it to the ArrayList constructor." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  List<String> cities = Arrays.asList("Riyadh", "Jeddah", "Dammam");
                  System.out.println(cities + " size " + cities.size());
                  cities.set(0, "Abha");          // allowed: same size
                  System.out.println(cities);
                  // cities.add("Taif");          // UnsupportedOperationException
                  ArrayList<String> trip = new ArrayList<>(cities);
                  trip.add("Taif");               // fine: a real ArrayList
                  System.out.println(trip);
              }
          }
        `, out: J`
          [Riyadh, Jeddah, Dammam] size 3
          [Abha, Jeddah, Dammam]
          [Abha, Jeddah, Dammam, Taif]
        ` },
        { type: 'list', items: [
          "<code>Arrays.sort</code> also works on <code>String[]</code> (alphabetical, uppercase before lowercase) and <code>double[]</code>.",
          "<code>Arrays.fill(arr, v)</code> is handy to initialise counters or reset a board.",
          "All these methods are <code>static</code>: call them on the class name, never on an object."
        ] }
      ],
      practice: [
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  String[] names = {"Sara", "Ali", "Noura", "Fahad"};
                  Arrays.sort(names);
                  System.out.println(Arrays.toString(names));
                  System.out.println(names[names.length - 1]);
              }
          }
        `, answer: J`
          [Ali, Fahad, Noura, Sara]
          Sara
        `, explain: "Strings are sorted alphabetically: Ali, Fahad, Noura, Sara. The last element after sorting is Sara.", explainAr: "تُرتَّب النصوص أبجدياً، وآخر عنصر هو Sara." },
        { t: 'mcq', q: "What must be true before calling <code>Arrays.binarySearch(arr, key)</code>?", options: ['The array must contain no duplicates', 'The array must be sorted in ascending order', 'The array length must be a power of 2', 'The key must be the first element'], answer: 1, explain: "Binary search repeatedly compares with the middle element and discards half of the array. That only works if the array is sorted.", explainAr: "البحث الثنائي يعمل فقط على مصفوفة مرتبة." },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] a = {10, 20, 30, 40};
                  System.out.println(Arrays.binarySearch(a, 30));
                  System.out.println(Arrays.binarySearch(a, 25));
              }
          }
        `, answer: J`
          2
          -3
        `, explain: "30 is at index 2. 25 is missing; it would be inserted at index 2, so the result is -(2) - 1 = -3.", explainAr: "25 غير موجود وموضع إدراجه 2، فالناتج ‎-2-1 = ‎-3." },
        { t: 'fill', q: 'Complete the code so that every price becomes 0.0 and the array is then printed in readable form.', code: J`
          double[] prices = new double[5];
          Arrays.___(prices, 0.0);
          System.out.println(Arrays.___(prices));
        `, answers: ['fill', 'toString'], explain: "<code>Arrays.fill</code> assigns one value to every element; <code>Arrays.toString</code> builds the text <code>[0.0, 0.0, 0.0, 0.0, 0.0]</code>." },
        { t: 'mcq', q: 'What happens when this code runs?', code: J`
          List<Integer> ids = Arrays.asList(4, 8, 15);
          ids.add(16);
        `, options: ['ids becomes [4, 8, 15, 16]', 'Compilation error', 'UnsupportedOperationException at runtime', 'Nothing happens'], answer: 2, explain: "<code>Arrays.asList</code> returns a fixed-size list. It compiles (the type is <code>List</code>, which has <code>add</code>), but changing its size throws <code>UnsupportedOperationException</code>.", explainAr: "القائمة الناتجة من asList ثابتة الحجم، فالإضافة ترمي استثناءً وقت التشغيل." }
      ]
    },
    // ---------------------------------------------------------------- L2
    {
      title: 'ArrayList: a growable list',
      titleAr: 'ArrayList: قائمة قابلة للنمو',
      minutes: 50,
      body: [
        { type: 'h', en: 'Creating an ArrayList' },
        { type: 'p', en: "<code>ArrayList&lt;E&gt;</code> (in <code>java.util</code>) stores elements of type <code>E</code> in order, with indexes starting at 0, and resizes itself automatically. The type in angle brackets is called a <b>type argument</b>; the empty <code>&lt;&gt;</code> on the right (the diamond) lets Java infer it.", ar: "ArrayList تخزن العناصر بالترتيب وتبدأ الفهارس من 0 وتغيّر حجمها تلقائياً." },
        { type: 'table', head: ['Method', 'What it does'], rows: [
          ['<code>add(e)</code> / <code>add(i, e)</code>', 'Append at the end / insert at index i (later elements shift right)'],
          ['<code>get(i)</code>', 'Return the element at index i'],
          ['<code>set(i, e)</code>', 'Replace the element at index i'],
          ['<code>remove(i)</code> / <code>remove(o)</code>', 'Remove by index / remove first element equal to o'],
          ['<code>size()</code>', 'Number of elements'],
          ['<code>contains(o)</code>', 'true if some element equals o'],
          ['<code>indexOf(o)</code>', 'Index of first match, or -1'],
          ['<code>isEmpty()</code> / <code>clear()</code>', 'Test for no elements / remove all']
        ] },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> students = new ArrayList<>();
                  students.add("Huda");
                  students.add("Omar");
                  students.add("Lina");
                  students.add(1, "Khalid");
                  System.out.println(students);
                  System.out.println("Size: " + students.size());
                  System.out.println("First: " + students.get(0));
                  students.set(2, "Reem");
                  System.out.println(students);
                  students.remove("Lina");
                  System.out.println(students);
                  System.out.println(students.contains("Omar"));
                  System.out.println(students.indexOf("Reem"));
              }
          }
        `, out: J`
          [Huda, Khalid, Omar, Lina]
          Size: 4
          First: Huda
          [Huda, Khalid, Reem, Lina]
          [Huda, Khalid, Reem]
          false
          2
        ` },
        { type: 'p', en: "Notice that <code>add(1, \"Khalid\")</code> pushed Omar and Lina one place to the right, and <code>set(2, \"Reem\")</code> replaced Omar instead of inserting." },
        { type: 'h', en: 'Wrapper classes and autoboxing' },
        { type: 'p', en: "Collections hold <b>objects</b> only, so you cannot write <code>ArrayList&lt;int&gt;</code>. Use the wrapper class <code>Integer</code> (also <code>Double</code>, <code>Character</code>, <code>Boolean</code>…). Java converts automatically: <b>autoboxing</b> turns <code>int</code> into <code>Integer</code> when you add, and <b>unboxing</b> turns it back when you read.", ar: "المجموعات تخزن كائنات فقط؛ استخدم Integer بدل int، والتحويل بينهما تلقائي (autoboxing/unboxing)." },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> marks = new ArrayList<>();
                  marks.add(30);   // autoboxing: int 30 -> Integer
                  marks.add(10);
                  marks.add(20);
                  marks.add(10);
                  marks.remove(1);                   // remove INDEX 1
                  System.out.println(marks);
                  marks.remove(Integer.valueOf(10)); // remove VALUE 10
                  System.out.println(marks);
                  int total = 0;
                  for (int m : marks) {              // unboxing
                      total += m;
                  }
                  System.out.println("Total: " + total);
              }
          }
        `, out: J`
          [30, 20, 10]
          [30, 20]
          Total: 50
        ` },
        { type: 'note', kind: 'exam', en: "With <code>ArrayList&lt;Integer&gt;</code>, <code>list.remove(1)</code> removes the element <b>at index 1</b>, because an <code>int</code> argument matches <code>remove(int index)</code> exactly. To remove the <b>value</b> 1 write <code>list.remove(Integer.valueOf(1))</code>.", ar: "remove(1) تحذف العنصر في الفهرس 1، أما remove(Integer.valueOf(1)) فتحذف القيمة 1." },
        { type: 'h', en: 'Looping and removing safely' },
        { type: 'p', en: "You can loop with an index (<code>for (int i = 0; i &lt; list.size(); i++)</code>) or with for-each. When you remove elements inside an index loop, go <b>backwards</b> so that removing does not shift elements you have not checked yet." },
        { type: 'code', code: J`
          // remove every failing grade (below 60)
          for (int i = grades.size() - 1; i >= 0; i--) {
              if (grades.get(i) < 60) {
                  grades.remove(i);   // i is an int -> remove by index
              }
          }
        ` },
        { type: 'note', kind: 'warn', en: "Calling <code>list.remove(...)</code> inside a <b>for-each</b> loop over the same list throws <code>ConcurrentModificationException</code>. Use a backwards index loop or an <code>Iterator</code> (lesson 3)." }
      ],
      practice: [
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> nums = new ArrayList<>();
                  nums.add(5);
                  nums.add(8);
                  nums.add(3);
                  nums.add(0, 1);
                  nums.remove(Integer.valueOf(8));
                  nums.set(1, 9);
                  System.out.println(nums);
                  System.out.println(nums.size() + " " + nums.indexOf(3));
              }
          }
        `, answer: J`
          [1, 9, 3]
          3 2
        `, explain: "[5, 8, 3] → add(0, 1) → [1, 5, 8, 3] → remove value 8 → [1, 5, 3] → set(1, 9) → [1, 9, 3]. Size 3, value 3 is at index 2.", explainAr: "تتبّع القائمة خطوة بخطوة: ‎[1, 9, 3]‎ والحجم 3 والقيمة 3 في الفهرس 2." },
        { t: 'mcq', q: 'After this code, what is <code>list</code>?', code: J`
          ArrayList<Integer> list = new ArrayList<>();
          list.add(4);
          list.add(7);
          list.add(9);
          list.remove(1);
        `, options: ['[4, 9]', '[7, 9]', '[4, 7, 9]', '[4, 7]'], answer: 0, explain: "<code>remove(1)</code> with an int argument removes by index, so the element at index 1 (the value 7) is removed.", explainAr: "الوسيط int يعني الحذف بالفهرس، فيُحذف العنصر 7." },
        { t: 'fill', q: 'Complete the declaration of a list of whole numbers and add the value 12 to it.', code: J`
          ArrayList<___> ages = new ArrayList<>();
          ages.___(12);
          System.out.println(ages.___());   // prints 1
        `, answers: ['Integer', 'add', 'size'], explain: "Type arguments must be classes, so we use <code>Integer</code> rather than <code>int</code>. <code>add</code> appends and <code>size()</code> returns the number of elements." },
        { t: 'order', q: 'Arrange the lines to build a list of prices and print their sum.', lines: [
          'ArrayList<Double> prices = new ArrayList<>();',
          'prices.add(12.5);',
          'prices.add(7.5);',
          'double sum = 0;',
          'for (double p : prices) {',
          '    sum += p;',
          '}',
          'System.out.println(sum);'
        ], explain: "Create the list, add the elements, initialise the accumulator, loop (unboxing each Double), then print 20.0." },
        { t: 'code', q: "Read an integer <code>n</code> followed by <code>n</code> integers into an <code>ArrayList&lt;Integer&gt;</code>. Print the list, then remove every negative number and print the list again. Do not print any prompts.", qAr: "اقرأ n ثم n عدداً في ArrayList، اطبع القائمة، ثم احذف الأعداد السالبة واطبعها مرة أخرى.", starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Integer> list = new ArrayList<>();
                  // read n numbers into list

                  System.out.println(list);
                  // remove the negative numbers (hint: loop backwards)

                  System.out.println(list);
              }
          }
        `, tests: [
          { stdin: '6\n4 -2 7 -5 -1 9', expected: J`
            [4, -2, 7, -5, -1, 9]
            [4, 7, 9]
          ` },
          { stdin: '3\n-1 -2 3', expected: J`
            [-1, -2, 3]
            [3]
          ` },
          { stdin: '2\n5 6', expected: J`
            [5, 6]
            [5, 6]
          ` }
        ], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Integer> list = new ArrayList<>();
                  for (int i = 0; i < n; i++) {
                      list.add(in.nextInt());
                  }
                  System.out.println(list);
                  for (int i = list.size() - 1; i >= 0; i--) {
                      if (list.get(i) < 0) {
                          list.remove(i);
                      }
                  }
                  System.out.println(list);
              }
          }
        `, hint: "Loop from <code>list.size() - 1</code> down to 0 and call <code>list.remove(i)</code> with the int index.", explain: "Going backwards means that removing index i only shifts elements we have already checked, so nothing is skipped." }
      ]
    },
    // ---------------------------------------------------------------- L3
    {
      title: 'LinkedList, Iterator and ListIterator',
      titleAr: 'LinkedList والمُكرِّرات Iterator و ListIterator',
      minutes: 45,
      body: [
        { type: 'h', en: 'LinkedList' },
        { type: 'p', en: "<code>LinkedList&lt;E&gt;</code> implements the same <code>List</code> interface as ArrayList, so <code>add</code>, <code>get</code>, <code>remove</code>, <code>size</code> all work. Internally each element lives in a node that points to the next and previous nodes. That makes adding or removing at the <b>ends</b> very cheap, and it adds methods such as <code>addFirst</code>, <code>addLast</code>, <code>getFirst</code>, <code>getLast</code>, <code>removeFirst</code>, <code>removeLast</code>.", ar: "LinkedList تخزن العناصر في عُقَد مترابطة، فالإضافة والحذف عند الطرفين سريعان." },
        { type: 'code', run: true, code: J`
          import java.util.LinkedList;

          public class Main {
              public static void main(String[] args) {
                  LinkedList<String> orders = new LinkedList<>();
                  orders.add("Order#1");
                  orders.add("Order#2");
                  orders.addFirst("VIP");
                  orders.addLast("Order#3");
                  System.out.println(orders);
                  System.out.println(orders.getFirst() + " / " + orders.getLast());
                  orders.removeFirst();
                  orders.removeLast();
                  System.out.println(orders);
                  System.out.println(orders.size());
              }
          }
        `, out: J`
          [VIP, Order#1, Order#2, Order#3]
          VIP / Order#3
          [Order#1, Order#2]
          2
        ` },
        { type: 'table', head: ['Operation', 'ArrayList', 'LinkedList'], rows: [
          ['<code>get(i)</code> (random access)', 'Fast', 'Slow (walks node by node)'],
          ['Add/remove at the end', 'Fast', 'Fast'],
          ['Add/remove at the beginning', 'Slow (shifts all elements)', 'Fast'],
          ['Memory per element', 'Small', 'Larger (two links per node)']
        ] },
        { type: 'note', kind: 'tip', en: "Rule of thumb: use <code>ArrayList</code> by default; choose <code>LinkedList</code> when you mostly insert or delete at the front (queues, undo lists)." },
        { type: 'h', en: 'Iterator: walking a collection' },
        { type: 'p', en: "Every collection has an <code>iterator()</code> method that returns an <code>Iterator&lt;E&gt;</code>. It has three methods: <code>hasNext()</code> (is there another element?), <code>next()</code> (return it and move forward), and <code>remove()</code> (delete the element just returned by <code>next</code>). The for-each loop is built on top of an iterator.", ar: "المُكرِّر Iterator يمر على عناصر المجموعة: hasNext و next و remove." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Double> prices = new ArrayList<>(Arrays.asList(12.5, 99.0, 7.25, 150.0, 30.0));
                  Iterator<Double> it = prices.iterator();
                  while (it.hasNext()) {
                      double p = it.next();
                      if (p > 50) {
                          it.remove();   // safe removal during iteration
                      }
                  }
                  System.out.println(prices);
              }
          }
        `, out: J`
          [12.5, 7.25, 30.0]
        ` },
        { type: 'note', kind: 'exam', en: "<code>it.remove()</code> may be called only once per call to <code>next()</code>. Calling it before any <code>next()</code> throws <code>IllegalStateException</code>. Calling <code>prices.remove(...)</code> (the list's method) inside the loop throws <code>ConcurrentModificationException</code>.", ar: "استدعِ it.remove مرة واحدة فقط بعد كل next، ولا تستخدم remove الخاصة بالقائمة داخل الحلقة." },
        { type: 'h', en: 'ListIterator: both directions' },
        { type: 'p', en: "Lists also offer <code>listIterator()</code>. A <code>ListIterator</code> can move forward (<code>hasNext</code>, <code>next</code>) <b>and backward</b> (<code>hasPrevious</code>, <code>previous</code>), and it can replace (<code>set</code>) or insert (<code>add</code>) elements while iterating. <code>listIterator(list.size())</code> starts at the end, ready to walk backward.", ar: "ListIterator يتحرك للأمام وللخلف ويمكنه تعديل العناصر أثناء المرور." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  LinkedList<String> days = new LinkedList<>(Arrays.asList("Sun", "Mon", "Tue"));
                  ListIterator<String> li = days.listIterator();
                  while (li.hasNext()) {
                      String d = li.next();
                      li.set(d.toUpperCase());   // replace the element just returned
                  }
                  System.out.println(days);
                  while (li.hasPrevious()) {     // now walk back to the start
                      System.out.println(li.previous());
                  }
              }
          }
        `, out: J`
          [SUN, MON, TUE]
          TUE
          MON
          SUN
        ` },
        { type: 'p', en: "Think of the cursor as sitting <b>between</b> elements. <code>next()</code> returns the element to the right of the cursor and moves past it; <code>previous()</code> returns the element to the left and moves back. So calling <code>next()</code> and then <code>previous()</code> returns the <b>same</b> element twice." }
      ],
      practice: [
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.LinkedList;

          public class Main {
              public static void main(String[] args) {
                  LinkedList<Integer> q = new LinkedList<>();
                  q.add(3);
                  q.addFirst(1);
                  q.add(5);
                  q.addFirst(9);
                  q.removeLast();
                  System.out.println(q);
                  System.out.println(q.getFirst());
              }
          }
        `, answer: J`
          [9, 1, 3]
          9
        `, explain: "[3] → [1, 3] → [1, 3, 5] → [9, 1, 3, 5] → removeLast → [9, 1, 3]. The first element is 9." },
        { t: 'fill', q: 'Complete the code that removes every name shorter than 3 characters.', code: J`
          Iterator<String> it = names.___();
          while (it.___()) {
              String s = it.___();
              if (s.length() < 3) {
                  it.___();
              }
          }
        `, answers: ['iterator', 'hasNext', 'next', 'remove'], explain: "Get an iterator, loop while <code>hasNext()</code>, read with <code>next()</code>, and delete the current element with the iterator's own <code>remove()</code>." },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> a = new ArrayList<>(Arrays.asList(2, 4, 6));
                  ListIterator<Integer> li = a.listIterator(a.size());
                  int sum = 0;
                  while (li.hasPrevious()) {
                      int x = li.previous();
                      sum += x;
                      System.out.println(x + " " + sum);
                  }
              }
          }
        `, answer: J`
          6 6
          4 10
          2 12
        `, explain: "<code>listIterator(a.size())</code> places the cursor after the last element, so <code>previous()</code> returns 6, then 4, then 2, while sum grows 6, 10, 12.", explainAr: "يبدأ المكرر من النهاية ويرجع للخلف: 6 ثم 4 ثم 2." },
        { t: 'mcq', q: 'Which ability does <code>ListIterator</code> have that a plain <code>Iterator</code> does not?', options: ['Checking whether more elements remain', 'Removing the current element', 'Moving backward with previous()', 'Working with a HashSet'], answer: 2, explain: "Both have <code>hasNext</code>, <code>next</code> and <code>remove</code>. Only <code>ListIterator</code> (available on lists) adds <code>hasPrevious</code>/<code>previous</code>, <code>set</code> and <code>add</code>." },
        { t: 'mcq', q: 'Which collection is the better choice for a waiting list where people are constantly added at the end and removed from the front?', options: ['int[]', 'ArrayList', 'LinkedList', 'Arrays.asList(...)'], answer: 2, explain: "Removing the first element of an ArrayList shifts every other element left; a LinkedList simply unlinks its first node." }
      ]
    },
    // ---------------------------------------------------------------- L4
    {
      title: 'Sets and maps: HashSet and HashMap',
      titleAr: 'المجموعات والخرائط: HashSet و HashMap',
      minutes: 50,
      body: [
        { type: 'h', en: 'Sets: no duplicates' },
        { type: 'p', en: "A <b>set</b> stores each value at most once. <code>HashSet&lt;E&gt;</code> is the fastest set: <code>add</code>, <code>remove</code> and <code>contains</code> take about the same time no matter how big the set is. <code>add</code> returns <code>false</code> when the value is already there.", ar: "المجموعة Set لا تقبل التكرار، و HashSet سريعة جداً في الإضافة والبحث." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  HashSet<String> courses = new HashSet<>();
                  courses.add("CS101");
                  courses.add("MATH111");
                  courses.add("CS102");
                  boolean added = courses.add("CS101");   // duplicate
                  System.out.println("Added again? " + added);
                  System.out.println("Size: " + courses.size());
                  System.out.println(courses.contains("CS102"));
                  courses.remove("MATH111");
                  System.out.println(courses.contains("MATH111"));
                  TreeSet<String> sorted = new TreeSet<>(courses);
                  System.out.println(sorted);
              }
          }
        `, out: J`
          Added again? false
          Size: 3
          true
          false
          [CS101, CS102]
        ` },
        { type: 'note', kind: 'warn', en: "A <code>HashSet</code> or <code>HashMap</code> does <b>not</b> keep any particular order, and printing it may show elements in a surprising order that can change between Java versions. When order matters, copy into a <code>TreeSet</code>/<code>TreeMap</code> (sorted) or sort the keys first.", ar: "HashSet و HashMap لا تحفظان ترتيباً معيناً؛ استخدم TreeSet أو TreeMap إذا احتجت الترتيب." },
        { type: 'h', en: 'Maps: key → value' },
        { type: 'p', en: "A <b>map</b> stores pairs: each unique <b>key</b> is linked to one <b>value</b>, like a student ID linked to a GPA. <code>HashMap&lt;K, V&gt;</code> is the common implementation.", ar: "الخريطة Map تربط كل مفتاح فريد بقيمة واحدة." },
        { type: 'table', head: ['Method', 'Meaning'], rows: [
          ['<code>put(k, v)</code>', 'Add the pair, or replace the value if k already exists'],
          ['<code>get(k)</code>', 'Value for k, or <code>null</code> if k is missing'],
          ['<code>getOrDefault(k, d)</code>', 'Value for k, or d if k is missing'],
          ['<code>containsKey(k)</code>', 'true if k is a key'],
          ['<code>remove(k)</code>, <code>size()</code>', 'Delete a pair / number of pairs'],
          ['<code>keySet()</code>', 'A Set of all keys'],
          ['<code>entrySet()</code>', 'A Set of <code>Map.Entry</code> objects (key + value)']
        ] },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, Double> gpa = new HashMap<>();
                  gpa.put("Sara", 3.8);
                  gpa.put("Faisal", 3.1);
                  gpa.put("Mona", 3.5);
                  gpa.put("Faisal", 3.3);   // same key: value replaced
                  System.out.println(gpa.get("Faisal"));
                  System.out.println(gpa.get("Ali"));
                  System.out.println(gpa.getOrDefault("Ali", 0.0));
                  System.out.println(gpa.containsKey("Mona"));
                  System.out.println(gpa.size());
                  ArrayList<String> names = new ArrayList<>(gpa.keySet());
                  Collections.sort(names);          // fix the order before printing
                  for (String n : names) {
                      System.out.println(n + " -> " + gpa.get(n));
                  }
              }
          }
        `, out: J`
          3.3
          null
          0.0
          true
          3
          Faisal -> 3.3
          Mona -> 3.5
          Sara -> 3.8
        ` },
        { type: 'h', en: 'Classic pattern: counting words' },
        { type: 'p', en: "To count how many times each word appears, use the word as the key and its count as the value. <code>getOrDefault(w, 0) + 1</code> handles both the first time (0 + 1) and later times. Here we use <code>TreeMap</code>, which keeps keys sorted, so the printed output is predictable. Iterating over <code>entrySet()</code> gives you key and value together." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  String text = "the cat and the dog and the bird";
                  TreeMap<String, Integer> counts = new TreeMap<>();
                  for (String w : text.split(" ")) {
                      counts.put(w, counts.getOrDefault(w, 0) + 1);
                  }
                  System.out.println(counts);
                  for (Map.Entry<String, Integer> e : counts.entrySet()) {
                      if (e.getValue() > 1) {
                          System.out.println(e.getKey() + ": " + e.getValue());
                      }
                  }
              }
          }
        `, out: J`
          {and=2, bird=1, cat=1, dog=1, the=3}
          and: 2
          the: 3
        ` },
        { type: 'note', kind: 'exam', en: "<code>map.get(k)</code> returns <code>null</code> for a missing key. Writing <code>int c = map.get(k);</code> then crashes with <code>NullPointerException</code> during unboxing. Use <code>getOrDefault</code> or check <code>containsKey</code> first." }
      ],
      practice: [
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.HashSet;

          public class Main {
              public static void main(String[] args) {
                  HashSet<Integer> ids = new HashSet<>();
                  ids.add(5);
                  ids.add(3);
                  ids.add(5);
                  ids.add(8);
                  ids.add(3);
                  System.out.println(ids.size());
                  System.out.println(ids.contains(8));
                  System.out.println(ids.add(9));
                  System.out.println(ids.size());
              }
          }
        `, answer: J`
          3
          true
          true
          4
        `, explain: "Duplicates are ignored, so the set is {5, 3, 8} with size 3. Adding 9 succeeds (true) and the size becomes 4.", explainAr: "التكرار يُتجاهل فالحجم 3، وإضافة 9 تنجح فيصبح 4." },
        { t: 'mcq', q: "<code>HashMap&lt;String, Integer&gt; m</code> contains only the key <code>\"pen\"</code>. What does <code>m.get(\"cup\")</code> return?", options: ['0', 'null', 'An empty string', 'It throws an exception'], answer: 1, explain: "<code>get</code> returns <code>null</code> when the key is missing. <code>getOrDefault</code> lets you choose a different default." },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.TreeMap;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<String, Integer> stock = new TreeMap<>();
                  stock.put("pens", 40);
                  stock.put("books", 12);
                  stock.put("bags", 5);
                  stock.put("pens", stock.get("pens") - 15);
                  System.out.println(stock);
                  System.out.println(stock.getOrDefault("rulers", 0));
              }
          }
        `, answer: J`
          {bags=5, books=12, pens=25}
          0
        `, explain: "A TreeMap prints keys in sorted order (bags, books, pens). The second put on \"pens\" replaces 40 with 25. \"rulers\" is missing, so the default 0 is printed." },
        { t: 'fill', q: 'Complete the word counter and the loop that prints each key.', code: J`
          for (String w : words) {
              counts.put(w, counts.___(w, 0) + 1);
          }
          for (String k : counts.___()) {
              System.out.println(k + " " + counts.get(k));
          }
        `, answers: ['getOrDefault', 'keySet'], explain: "<code>getOrDefault(w, 0)</code> returns 0 the first time a word is seen. <code>keySet()</code> returns all keys to loop over." },
        { t: 'code', q: "Read words (separated by spaces) until the end of input. Print each distinct word and how many times it appears, one per line as <code>word count</code>, in alphabetical order. Do not print prompts.", qAr: "اقرأ الكلمات حتى نهاية الإدخال واطبع كل كلمة مع عدد مرات ظهورها بترتيب أبجدي.", starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  // use a TreeMap<String, Integer> so the keys stay sorted

              }
          }
        `, tests: [
          { stdin: 'red blue red green blue red', expected: J`
            blue 2
            green 1
            red 3
          ` },
          { stdin: 'java', expected: 'java 1' },
          { stdin: 'b a b a c', expected: J`
            a 2
            b 2
            c 1
          ` }
        ], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  TreeMap<String, Integer> counts = new TreeMap<>();
                  while (in.hasNext()) {
                      String w = in.next();
                      counts.put(w, counts.getOrDefault(w, 0) + 1);
                  }
                  for (Map.Entry<String, Integer> e : counts.entrySet()) {
                      System.out.println(e.getKey() + " " + e.getValue());
                  }
              }
          }
        `, hint: "Use <code>while (in.hasNext())</code> with <code>in.next()</code>, and <code>getOrDefault(w, 0) + 1</code>.", explain: "A TreeMap keeps keys sorted, so iterating over <code>entrySet()</code> prints the words alphabetically with their counts." },
        { t: 'mcq', q: 'You must store student IDs with no duplicates and print them in increasing order. Which collection fits best?', options: ['ArrayList&lt;Integer&gt;', 'HashSet&lt;Integer&gt;', 'TreeSet&lt;Integer&gt;', 'HashMap&lt;Integer, Integer&gt;'], answer: 2, explain: "A TreeSet rejects duplicates like any set and also keeps its elements sorted. A HashSet has no guaranteed order." }
      ]
    },
    // ---------------------------------------------------------------- L5
    {
      title: 'PriorityQueue and the Collections class',
      titleAr: 'طابور الأولوية PriorityQueue والصنف Collections',
      minutes: 45,
      body: [
        { type: 'h', en: 'PriorityQueue' },
        { type: 'p', en: "A normal queue is first-in, first-out. A <code>PriorityQueue&lt;E&gt;</code> instead always gives you the <b>smallest</b> element first (by natural order: numbers ascending, strings alphabetically). Think of an emergency room where the most urgent patient is served first, no matter when they arrived.", ar: "طابور الأولوية يُخرج دائماً العنصر الأصغر أولاً بغض النظر عن ترتيب الإضافة." },
        { type: 'table', head: ['Method', 'Meaning', 'On an empty queue'], rows: [
          ['<code>offer(e)</code>', 'Insert e', '-'],
          ['<code>peek()</code>', 'Look at the smallest element without removing it', 'returns <code>null</code>'],
          ['<code>poll()</code>', 'Remove and return the smallest element', 'returns <code>null</code>'],
          ['<code>size()</code>, <code>isEmpty()</code>', 'Count / test for empty', '-']
        ] },
        { type: 'code', run: true, code: J`
          import java.util.PriorityQueue;

          public class Main {
              public static void main(String[] args) {
                  PriorityQueue<Integer> pq = new PriorityQueue<>();
                  pq.offer(40);
                  pq.offer(10);
                  pq.offer(30);
                  pq.offer(20);
                  System.out.println("Peek: " + pq.peek());
                  System.out.println("Size: " + pq.size());
                  while (!pq.isEmpty()) {
                      System.out.println(pq.poll());
                  }
                  System.out.println(pq.poll());
              }
          }
        `, out: J`
          Peek: 10
          Size: 4
          10
          20
          30
          40
          null
        ` },
        { type: 'note', kind: 'exam', en: "Printing the queue itself (<code>System.out.println(pq)</code>) or looping over it with for-each does <b>not</b> show sorted order; only the head is guaranteed to be the smallest. To get elements in priority order, call <code>poll()</code> repeatedly.", ar: "طباعة الطابور مباشرة لا تُظهر ترتيباً مضموناً؛ استخدم poll بشكل متكرر." },
        { type: 'p', en: "To serve the <b>largest</b> element first, pass a reversed comparator: <code>new PriorityQueue&lt;&gt;(Collections.reverseOrder())</code>." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  // triage levels: higher number = more urgent
                  PriorityQueue<Integer> urgent = new PriorityQueue<>(Collections.reverseOrder());
                  urgent.offer(3);
                  urgent.offer(9);
                  urgent.offer(1);
                  urgent.offer(6);
                  System.out.println(urgent.poll());
                  System.out.println(urgent.poll());
                  System.out.println(urgent.peek());
              }
          }
        `, out: J`
          9
          6
          3
        ` },
        { type: 'h', en: 'The java.util.Collections helper class' },
        { type: 'p', en: "<code>Collections</code> (with an <b>s</b>) is to lists what <code>Arrays</code> is to arrays: a class full of static utility methods. The most used are <code>sort</code>, <code>binarySearch</code> (on a sorted list), <code>max</code>, <code>min</code>, <code>reverse</code> and <code>shuffle</code> (random order).", ar: "الصنف Collections يحتوي دوال ساكنة مساعدة للقوائم مثل sort و max و min و reverse و shuffle." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> temps = new ArrayList<>(Arrays.asList(31, 45, 28, 39, 42));
                  System.out.println("Max: " + Collections.max(temps));
                  System.out.println("Min: " + Collections.min(temps));
                  Collections.sort(temps);
                  System.out.println(temps);
                  System.out.println(Collections.binarySearch(temps, 39));
                  Collections.reverse(temps);
                  System.out.println(temps);
                  Collections.shuffle(temps);   // random order every run
                  System.out.println(temps.size());
              }
          }
        `, out: J`
          Max: 45
          Min: 28
          [28, 31, 39, 42, 45]
          2
          [45, 42, 39, 31, 28]
          5
        ` },
        { type: 'note', kind: 'tip', en: "Do not confuse <code>Collection</code> (the interface that List and Set extend) with <code>Collections</code> (the utility class). Also, <code>Collections.shuffle</code> gives a different order each run, which is great for quizzes and card games but impossible to predict in an output question." },
        { type: 'list', items: [
          "<code>Collections.sort(list)</code> sorts in natural order; <code>Collections.sort(list, Collections.reverseOrder())</code> sorts descending.",
          "<code>Collections.max</code>/<code>min</code> work on any collection, sorted or not.",
          "<code>Collections.binarySearch</code> has the same rule as <code>Arrays.binarySearch</code>: sort first."
        ] }
      ],
      practice: [
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.PriorityQueue;

          public class Main {
              public static void main(String[] args) {
                  PriorityQueue<String> pq = new PriorityQueue<>();
                  pq.offer("Mango");
                  pq.offer("Apple");
                  pq.offer("Kiwi");
                  pq.offer("Banana");
                  System.out.println(pq.poll());
                  System.out.println(pq.poll());
                  System.out.println(pq.peek());
                  System.out.println(pq.size());
              }
          }
        `, answer: J`
          Apple
          Banana
          Kiwi
          2
        `, explain: "Strings come out alphabetically: Apple, then Banana. <code>peek</code> shows Kiwi without removing it, leaving Kiwi and Mango (size 2).", explainAr: "تخرج النصوص أبجدياً، و peek لا تحذف العنصر." },
        { t: 'mcq', q: 'What does <code>poll()</code> return when the PriorityQueue is empty?', options: ['0', 'null', 'It throws NoSuchElementException', 'The last element removed'], answer: 1, explain: "<code>poll()</code> and <code>peek()</code> return <code>null</code> on an empty queue (unlike <code>remove()</code>/<code>element()</code>, which throw)." },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> team = new ArrayList<>(Arrays.asList("Omar", "Aisha", "Zaid", "Bader"));
                  Collections.sort(team);
                  System.out.println(team);
                  System.out.println(Collections.max(team) + " " + Collections.min(team));
                  Collections.reverse(team);
                  System.out.println(team);
              }
          }
        `, answer: J`
          [Aisha, Bader, Omar, Zaid]
          Zaid Aisha
          [Zaid, Omar, Bader, Aisha]
        `, explain: "Sorting is alphabetical. The largest string is Zaid and the smallest is Aisha. <code>reverse</code> flips the sorted list." },
        { t: 'fill', q: 'Complete the code that serves the highest bid first.', code: J`
          PriorityQueue<Integer> bids = new PriorityQueue<>(Collections.___());
          bids.___(250);
          bids.___(400);
          System.out.println(bids.___());   // prints 400 and removes it
        `, answers: ['reverseOrder', 'offer', 'offer', 'poll'], explain: "<code>Collections.reverseOrder()</code> makes the queue return the largest element first; <code>offer</code> inserts and <code>poll</code> removes the head." },
        { t: 'mcq', q: 'Which statement about <code>Collections.binarySearch(list, key)</code> is correct?', options: ['It works on any list, sorted or not', 'The list must be sorted first, otherwise the result is undefined', 'It sorts the list and then searches', 'It only works on a LinkedList'], answer: 1, explain: "Like <code>Arrays.binarySearch</code>, it assumes ascending order. Call <code>Collections.sort</code> before searching." }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'Which declaration compiles?', options: ['ArrayList&lt;int&gt; a = new ArrayList&lt;&gt;();', 'ArrayList&lt;Integer&gt; a = new ArrayList&lt;&gt;();', 'ArrayList a = new ArrayList&lt;int&gt;();', 'ArrayList&lt;Integer&gt; a = new ArrayList[10];'], answer: 1, explain: "Type arguments must be reference types, so the wrapper class <code>Integer</code> is used instead of <code>int</code>." },
    { t: 'output', q: 'What does this program print?', code: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              ArrayList<Integer> list = new ArrayList<>(Arrays.asList(10, 20, 30));
              list.remove(1);
              list.remove(Integer.valueOf(10));
              System.out.println(list);
          }
      }
    `, answer: '[30]', explain: "<code>remove(1)</code> removes index 1 (the value 20) giving [10, 30]; <code>remove(Integer.valueOf(10))</code> removes the value 10, leaving [30]." },
    { t: 'output', q: 'What does this program print?', code: J`
      import java.util.Arrays;

      public class Main {
          public static void main(String[] args) {
              int[] a = {2, 4, 6, 8};
              System.out.println(Arrays.binarySearch(a, 6));
              System.out.println(Arrays.binarySearch(a, 5));
          }
      }
    `, answer: J`
      2
      -3
    `, explain: "6 is at index 2. 5 would be inserted at index 2, so the result is -(2) - 1 = -3." },
    { t: 'mcq', q: "A HashMap already maps <code>\"Ali\"</code> to 70. What happens after <code>map.put(\"Ali\", 85)</code>?", options: ['The map holds two entries for Ali', 'The value for Ali becomes 85', 'An exception is thrown because the key exists', 'The put is ignored and 70 stays'], answer: 1, explain: "Keys are unique. Putting an existing key replaces its value (and <code>put</code> returns the old value, 70)." },
    { t: 'output', q: 'What does this program print?', code: J`
      import java.util.PriorityQueue;

      public class Main {
          public static void main(String[] args) {
              PriorityQueue<Integer> pq = new PriorityQueue<>();
              pq.offer(7);
              pq.offer(2);
              pq.offer(9);
              pq.offer(4);
              System.out.println(pq.poll());
              System.out.println(pq.poll());
              System.out.println(pq.peek());
          }
      }
    `, answer: J`
      2
      4
      7
    `, explain: "poll removes the smallest each time: 2, then 4. peek then shows 7 without removing it." },
    { t: 'mcq', q: 'Which of these does <b>not</b> guarantee any iteration order?', options: ['ArrayList', 'TreeSet', 'HashSet', 'LinkedList'], answer: 2, explain: "Lists keep insertion order and TreeSet keeps sorted order. A HashSet arranges elements by hash code, so its order is unspecified." },
    { t: 'output', q: 'What does this program print?', code: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              TreeSet<String> t = new TreeSet<>(Arrays.asList("pear", "apple", "pear", "fig"));
              System.out.println(t);
              System.out.println(t.size());
          }
      }
    `, answer: J`
      [apple, fig, pear]
      3
    `, explain: "The duplicate \"pear\" is dropped and a TreeSet keeps elements sorted alphabetically." },
    { t: 'mcq', q: 'What is the result of this code?', code: J`
      ArrayList<String> names = new ArrayList<>(Arrays.asList("Bandar", "Amal", "Ceren"));
      for (String n : names) {
          if (n.startsWith("B")) {
              names.remove(n);
          }
      }
    `, options: ['names becomes [Amal, Ceren]', 'Compilation error', 'ConcurrentModificationException is thrown', 'Infinite loop'], answer: 2, explain: "Changing a list with its own <code>remove</code> while a for-each loop is iterating over it is not allowed; the iterator detects the change and throws <code>ConcurrentModificationException</code>. Use <code>Iterator.remove()</code> instead." },
    { t: 'output', q: 'What does this program print?', code: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));
              ListIterator<Integer> li = list.listIterator();
              System.out.println(li.next());
              System.out.println(li.next());
              System.out.println(li.previous());
          }
      }
    `, answer: J`
      1
      2
      2
    `, explain: "After two calls to <code>next()</code> the cursor sits between 2 and 3. <code>previous()</code> returns the element to its left, which is 2 again." },
    { t: 'mcq', q: 'Your program inserts thousands of elements at the <b>front</b> of a list. Which class is most efficient?', options: ['ArrayList', 'LinkedList', 'int[]', 'Arrays.asList'], answer: 1, explain: "A LinkedList inserts at the front by creating one node and linking it; an ArrayList must shift every existing element one place right." }
  ],
  lab: {
    t: 'code',
    q: "<b>Grade book.</b> Read an integer <code>n</code>, then <code>n</code> lines, each with a student name (one word, all names different) and an integer score. Print:<br>1) every student as <code>name: score</code> in alphabetical order of name;<br>2) <code>Sorted scores: </code> followed by the list of scores in ascending order (ArrayList format);<br>3) <code>Highest: </code> and the highest score;<br>4) <code>Passed: </code> and how many scores are at least 60.<br>Use a <code>TreeMap</code>, an <code>ArrayList</code> and the <code>Collections</code> class. Do not print prompts.",
    qAr: "اقرأ أسماء الطلاب ودرجاتهم، واطبعهم مرتبين أبجدياً، ثم الدرجات مرتبة، ثم أعلى درجة، ثم عدد الناجحين (60 فأكثر).",
    starter: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Scanner in = new Scanner(System.in);
              int n = in.nextInt();
              TreeMap<String, Integer> book = new TreeMap<>();
              ArrayList<Integer> scores = new ArrayList<>();
              // 1. read the n students into book and scores

              // 2. print each "name: score" (alphabetical)

              // 3. sort and print the scores, the highest, and the number passed

          }
      }
    `,
    tests: [
      { stdin: '4\nSara 88\nAli 55\nNoura 92\nFahad 70', expected: J`
        Ali: 55
        Fahad: 70
        Noura: 92
        Sara: 88
        Sorted scores: [55, 70, 88, 92]
        Highest: 92
        Passed: 3
      ` },
      { stdin: '2\nZaid 40\nAmal 60', expected: J`
        Amal: 60
        Zaid: 40
        Sorted scores: [40, 60]
        Highest: 60
        Passed: 1
      ` },
      { stdin: '1\nHuda 100', expected: J`
        Huda: 100
        Sorted scores: [100]
        Highest: 100
        Passed: 1
      ` }
    ],
    solution: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Scanner in = new Scanner(System.in);
              int n = in.nextInt();
              TreeMap<String, Integer> book = new TreeMap<>();
              ArrayList<Integer> scores = new ArrayList<>();
              for (int i = 0; i < n; i++) {
                  String name = in.next();
                  int score = in.nextInt();
                  book.put(name, score);
                  scores.add(score);
              }
              for (Map.Entry<String, Integer> e : book.entrySet()) {
                  System.out.println(e.getKey() + ": " + e.getValue());
              }
              Collections.sort(scores);
              System.out.println("Sorted scores: " + scores);
              System.out.println("Highest: " + Collections.max(scores));
              int passed = 0;
              for (int s : scores) {
                  if (s >= 60) {
                      passed++;
                  }
              }
              System.out.println("Passed: " + passed);
          }
      }
    `,
    hint: "A TreeMap iterates its entries in key order. Concatenating a list with a String uses its toString, e.g. <code>[55, 70]</code>.",
    explain: "The TreeMap gives alphabetical order for free, the ArrayList holds the scores for <code>Collections.sort</code> and <code>Collections.max</code>, and a simple loop counts the passes."
  },
  cheats: [
    { code: J`ArrayList<Integer> a = new ArrayList<>();`, note: 'Growable list; use wrapper types like Integer, Double' },
    { code: J`a.add(x); a.add(i, x); a.get(i); a.set(i, x);`, note: 'Append, insert, read, replace' },
    { code: J`a.remove(i); a.remove(Integer.valueOf(x));`, note: 'Remove by index vs remove by value' },
    { code: J`a.size(); a.contains(x); a.indexOf(x);`, note: 'Count, membership, position (-1 if missing)' },
    { code: J`Arrays.toString(arr); Arrays.sort(arr); Arrays.fill(arr, v);`, note: 'Print, sort, fill a plain array' },
    { code: J`Arrays.binarySearch(sortedArr, key)`, note: 'Index, or -(insertionPoint) - 1 if missing' },
    { code: J`new ArrayList<>(Arrays.asList("a", "b"))`, note: 'asList alone is fixed-size; wrap it to grow' },
    { code: J`list.addFirst(x); list.removeLast();`, note: 'LinkedList end operations' },
    { code: J`Iterator<T> it = c.iterator(); while (it.hasNext()) { T x = it.next(); it.remove(); }`, note: 'Safe removal while iterating' },
    { code: J`ListIterator<T> li = list.listIterator(list.size()); li.previous();`, note: 'Walk a list backward' },
    { code: J`map.put(k, map.getOrDefault(k, 0) + 1);`, note: 'Counting pattern' },
    { code: J`for (Map.Entry<K, V> e : map.entrySet()) { e.getKey(); e.getValue(); }`, note: 'Loop over key/value pairs' },
    { code: J`pq.offer(x); pq.peek(); pq.poll();`, note: 'PriorityQueue: smallest first; null when empty' },
    { code: J`Collections.sort(l); Collections.max(l); Collections.reverse(l);`, note: 'List utilities (also min, shuffle, binarySearch)' }
  ],
  glossary: [
    { term: 'Collection', ar: 'مجموعة', def: 'An object that groups many elements, such as a list, set or queue.' },
    { term: 'Dynamic array', ar: 'مصفوفة ديناميكية', def: 'An array-based structure that automatically grows when it becomes full (ArrayList).' },
    { term: 'Wrapper class', ar: 'صنف مُغلِّف', def: 'A class such as Integer or Double that holds a primitive value as an object.' },
    { term: 'Autoboxing', ar: 'التغليف التلقائي', def: 'Automatic conversion from a primitive (int) to its wrapper object (Integer), and unboxing in the other direction.' },
    { term: 'Linked list', ar: 'قائمة مترابطة', def: 'A list made of nodes where each node links to the next (and previous) node.' },
    { term: 'Set', ar: 'مجموعة بلا تكرار', def: 'A collection that contains no duplicate elements.' },
    { term: 'Map', ar: 'خريطة (قاموس)', def: 'A collection of key/value pairs where each key is unique.' },
    { term: 'Priority queue', ar: 'طابور أولوية', def: 'A queue that always removes the element with the highest priority (by default the smallest).' },
    { term: 'Iterator', ar: 'مُكرِّر', def: 'An object that visits the elements of a collection one by one using hasNext and next.' },
    { term: 'ListIterator', ar: 'مُكرِّر القائمة', def: 'An iterator for lists that can move in both directions and modify elements.' },
    { term: 'Binary search', ar: 'البحث الثنائي', def: 'A fast search on sorted data that repeatedly halves the search range.' }
  ]
});
