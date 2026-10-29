JP.unit({
  course: 'cs102',
  n: 5,
  title: 'Java Collections Framework',
  titleAr: 'إطار المجموعات في جافا',
  intro: 'An array has a fixed size, but real programs need lists that grow and shrink, sets without repeats, and maps that find a value from a key. Java gives you ready-made tools for this: ArrayList, LinkedList, HashSet, HashMap and PriorityQueue. In this unit you meet them one small step at a time.',
  introAr: 'المصفوفة ثابتة الحجم، لكن البرامج الحقيقية تحتاج قوائم تكبر وتصغر، ومجموعات بلا تكرار، وخرائط تجد القيمة من المفتاح. في هذه الوحدة نتعرف على هذه الأدوات خطوة صغيرة بعد خطوة.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      title: 'Arrays review and the Arrays class',
      titleAr: 'مراجعة المصفوفات والصنف Arrays',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why do we need something more than an array?' },
        { type: 'p', en: 'In CS101 you used arrays to keep many values under one name, for example the marks of a class. An array is a good tool, but it has one big limit: its size is fixed when you create it. In this unit you will see tools that remove this limit.', ar: 'المصفوفة تحفظ قيماً كثيرة تحت اسم واحد، لكن حجمها ثابت. سنتعلم أدوات تتخلص من هذا القيد.' },
        { type: 'analogy', title: 'A tray of egg boxes', en: 'An array is like an egg tray with exactly 6 holes. You cannot add a 7th hole. If you need 7 eggs, you must buy a bigger tray and move all the eggs.', ar: 'المصفوفة مثل صينية بيض فيها 6 فتحات فقط. لا يمكن إضافة فتحة سابعة.' },
        { type: 'h', en: 'A fixed-size array (quick reminder)' },
        { type: 'p', en: 'Remember: <code>new int[3]</code> makes 3 boxes, numbered 0, 1, 2. The number of boxes is <code>marks.length</code> (no brackets after <code>length</code>).' },
        { type: 'code', code: J`
          int[] marks = new int[3];
          marks[0] = 80;
          marks[1] = 91;
          marks[2] = 67;
          System.out.println(marks.length);
        `, out: '3' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int[] marks = new int[3];', 'Make 3 boxes for whole numbers. Each box starts with 0.'],
          ['marks[0] = 80;', 'Put 80 in the first box (index 0).'],
          ['marks[2] = 67;', 'Put 67 in the last box (index 2). Index 3 would be an error.'],
          ['marks.length', 'How many boxes there are: 3.']
        ], ar: 'الفهرس يبدأ من 0، وآخر فهرس هو الطول ناقص 1.' },
        { type: 'check', q: 'What is the index of the LAST box in <code>new int[5]</code>?', options: ['5', '4', '6', '1'], answer: 1, explain: 'Indexes are 0, 1, 2, 3, 4. The last index is length - 1.', ar: 'آخر فهرس = الطول - 1.' },
        { type: 'h', en: 'Printing an array: Arrays.toString' },
        { type: 'p', en: 'If you print an array with <code>System.out.println(marks)</code> you get strange text like <code>[I@1b6d3586</code>. Java has a helper class called <code>Arrays</code> (in <code>java.util</code>). Its method <code>Arrays.toString</code> turns an array into readable text.' },
        { type: 'analogy', title: 'A translator', en: 'The array speaks a language you cannot read. <code>Arrays.toString</code> is a translator that gives you the values in square brackets.' },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] marks = {72, 95, 60};
                  System.out.println(Arrays.toString(marks));
              }
          }
        `, out: '[72, 95, 60]' },
        { type: 'lines', rows: [
          ['import java.util.Arrays;', 'Tell Java we want to use the Arrays helper class.'],
          ['int[] marks = {72, 95, 60};', 'A short way to make an array and fill it at once.'],
          ['Arrays.toString(marks)', 'Returns the text <code>[72, 95, 60]</code>. We call it on the class name, not on the array.']
        ], ar: 'استخدم Arrays.toString لطباعة المصفوفة بشكل مقروء.' },
        { type: 'check', q: 'Which line prints the values of <code>marks</code> in a readable way?', options: ['System.out.println(marks);', 'System.out.println(Arrays.toString(marks));', 'System.out.println(marks.length);', 'System.out.println(marks[]);'], answer: 1, explain: 'Only Arrays.toString builds readable text for the whole array.' },
        { type: 'h', en: 'Sorting: Arrays.sort' },
        { type: 'p', en: 'Sorting means putting values in order, from the smallest to the largest. Sorting by hand with loops is long. <code>Arrays.sort</code> does it in one line.' },
        { type: 'analogy', title: 'Lining up by height', en: 'Students stand in a line in a random order. The teacher asks them to line up from the shortest to the tallest. <code>Arrays.sort</code> is that teacher.' },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] marks = {72, 95, 60, 88};
                  Arrays.sort(marks);
                  System.out.println(Arrays.toString(marks));
                  System.out.println("Lowest: " + marks[0]);
                  System.out.println("Highest: " + marks[marks.length - 1]);
              }
          }
        `, out: J`
          [60, 72, 88, 95]
          Lowest: 60
          Highest: 95
        ` },
        { type: 'lines', rows: [
          ['Arrays.sort(marks);', 'Changes the array itself. After this line the values are in ascending order.'],
          ['marks[0]', 'After sorting, the first box holds the smallest value.'],
          ['marks[marks.length - 1]', 'The last box holds the largest value.']
        ], ar: 'بعد الترتيب تصبح أصغر قيمة في الفهرس 0 وأكبرها في الأخير.' },
        { type: 'check', q: 'After <code>Arrays.sort</code> on <code>{5, 1, 4}</code>, what is in <code>a[0]</code>?', options: ['5', '1', '4', '0'], answer: 1, explain: 'The sorted array is {1, 4, 5}, so the first box holds 1.' },
        { type: 'h', en: 'Filling: Arrays.fill' },
        { type: 'p', en: 'Sometimes you want every box to hold the same value, for example 7 free seats in each row. <code>Arrays.fill(array, value)</code> does that.' },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] seats = new int[4];
                  Arrays.fill(seats, 7);
                  System.out.println(Arrays.toString(seats));
              }
          }
        `, out: '[7, 7, 7, 7]' },
        { type: 'note', kind: 'tip', en: 'All the methods of <code>Arrays</code> are static: you write <code>Arrays.sort(...)</code>, never <code>marks.sort()</code>.' },
        { type: 'steps', title: 'Worked example: class marks', problem: 'Read the marks of n students. Print the marks in order, then the lowest and the highest mark.', steps: [
          { en: 'Read n, then make an array with n boxes.', code: J`
            int n = in.nextInt();
            int[] marks = new int[n];
          ` },
          { en: 'Use a for loop to read the n marks into the boxes.', code: J`
            for (int i = 0; i < n; i++) {
                marks[i] = in.nextInt();
            }
          ` },
          { en: 'Sort the array.', code: 'Arrays.sort(marks);' },
          { en: 'Print the sorted array, then the first box and the last box.', code: J`
            System.out.println("Sorted: " + Arrays.toString(marks));
            System.out.println("Lowest: " + marks[0]);
            System.out.println("Highest: " + marks[n - 1]);
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] marks = new int[n];
                  for (int i = 0; i < n; i++) {
                      marks[i] = in.nextInt();
                  }
                  Arrays.sort(marks);
                  System.out.println("Sorted: " + Arrays.toString(marks));
                  System.out.println("Lowest: " + marks[0]);
                  System.out.println("Highest: " + marks[n - 1]);
              }
          }
        `, stdin: '5\n72 95 60 88 75', out: J`
          Sorted: [60, 72, 75, 88, 95]
          Lowest: 60
          Highest: 95
        `, ar: 'نقرأ القيم ثم نرتبها ثم نطبع أول وآخر عنصر.' }
      ],
      mistakes: [
        { title: 'Printing the array directly', en: 'This prints strange text, not the values.', code: 'System.out.println(marks);', ar: 'استخدم Arrays.toString.' },
        { title: 'Calling sort on the array', en: 'Arrays are not objects with a sort method. Use the helper class.', code: 'marks.sort();   // error', ar: 'الصحيح Arrays.sort(marks).' },
        { title: 'Forgetting the import', en: 'Without <code>import java.util.Arrays;</code> Java says: cannot find symbol.', code: 'Arrays.sort(marks);   // no import above' },
        { title: 'Using the index length', en: 'The last index is length - 1, not length.', code: 'marks[marks.length] = 5;   // error at run time' }
      ],
      remember: [
        'An array has a fixed size. You cannot add a box later.',
        '<code>Arrays.toString(a)</code> gives readable text for printing.',
        '<code>Arrays.sort(a)</code> puts the values in ascending order.',
        '<code>Arrays.fill(a, v)</code> puts the value v in every box.',
        'Do not forget <code>import java.util.Arrays;</code> (or <code>java.util.*</code>).'
      ],
      rememberAr: 'المصفوفة ثابتة الحجم. نستخدم Arrays.toString للطباعة وArrays.sort للترتيب وArrays.fill للتعبئة، ولا ننسى الاستيراد.',
      practice: [
        { t: 'mcq', q: 'Can you change the length of an array after you create it?', options: ['Yes, with add()', 'No, the size is fixed', 'Yes, with length = 10', 'Only for String arrays'], answer: 1, explain: 'The size of an array is decided when it is created and never changes.', explainAr: 'حجم المصفوفة لا يتغير.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = new int[3];
                  a[1] = 5;
                  System.out.println(a.length);
                  System.out.println(a[0]);
              }
          }
        `, answer: J`
          3
          0
        `, explain: 'The array has 3 boxes. Boxes start with 0, so a[0] is 0.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] a = {9, 3, 7};
                  Arrays.sort(a);
                  System.out.println(Arrays.toString(a));
              }
          }
        `, answer: '[3, 7, 9]', explain: 'Sorting puts the numbers in ascending order.' },
        { t: 'fill', q: 'Complete the code: every price becomes 0.0, then the array is printed.', code: J`
          double[] prices = new double[3];
          Arrays.___(prices, 0.0);
          System.out.println(Arrays.___(prices));
        `, answers: ['fill', 'toString'], explain: 'fill puts one value in every box; toString makes readable text.' },
        { t: 'order', q: 'Put the lines in order: sort the marks and print them.', lines: [
          'int[] marks = {70, 55, 90};',
          'Arrays.sort(marks);',
          'System.out.println(Arrays.toString(marks));'
        ], explain: 'First make the array, then sort it, then print it.' },
        { t: 'code', q: 'Read 4 integers into an array, sort the array and print it with <code>Arrays.toString</code>. No prompts.', qAr: 'اقرأ 4 أعداد وارتبها ثم اطبعها.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int[] a = new int[4];
                  // read 4 numbers, sort, print
              }
          }
        `, tests: [{ stdin: '9 3 7 1', expected: '[1, 3, 7, 9]' }, { stdin: '5 5 2 8', expected: '[2, 5, 5, 8]' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int[] a = new int[4];
                  for (int i = 0; i < 4; i++) {
                      a[i] = in.nextInt();
                  }
                  Arrays.sort(a);
                  System.out.println(Arrays.toString(a));
              }
          }
        `, hint: 'Use a for loop with in.nextInt(), then Arrays.sort(a).', explain: 'Read with a loop, sort, print.' }
      ]
    },

    // ---------------------------------------------------------------- L2
    {
      title: 'Arrays.binarySearch and Arrays.asList',
      titleAr: 'البحث الثنائي و Arrays.asList',
      minutes: 30,
      body: [
        { type: 'h', en: 'Finding a value fast: binarySearch' },
        { type: 'p', en: 'Imagine an array with one million student IDs. Checking them one by one is slow. If the IDs are <b>sorted</b>, there is a much faster way called binary search: look in the middle, then throw away the half that cannot contain your value.', ar: 'إذا كانت المصفوفة مرتبة فالبحث الثنائي يجد القيمة بسرعة كبيرة.' },
        { type: 'analogy', title: 'Looking up a word in a dictionary', en: 'You do not read the dictionary from page 1. You open it in the middle. If your word comes earlier, you only look at the left half. Then you repeat. Each step removes half of the pages.', ar: 'نفتح القاموس من المنتصف ونهمل نصفاً في كل خطوة.' },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] ids = {10, 20, 30, 40};
                  int pos = Arrays.binarySearch(ids, 30);
                  System.out.println(pos);
              }
          }
        `, out: '2' },
        { type: 'lines', rows: [
          ['int[] ids = {10, 20, 30, 40};', 'The array is already sorted from small to large. This is required.'],
          ['Arrays.binarySearch(ids, 30)', 'Search for 30. It returns the INDEX where 30 is.'],
          ['pos', '30 is in the third box, which has index 2.']
        ], ar: 'الدالة تعيد الفهرس (رقم الصندوق) وليس القيمة.' },
        { type: 'check', q: 'What does <code>Arrays.binarySearch(ids, 40)</code> return for the array above?', options: ['40', '3', '4', '-1'], answer: 1, explain: '40 is the fourth value, so its index is 3.' },
        { type: 'h', en: 'When the value is not there' },
        { type: 'p', en: 'If the value is missing, binarySearch returns a negative number. The rule is: <code>-(insertion point) - 1</code>. The insertion point is the index where the value <i>would</i> be placed to keep the array sorted.' },
        { type: 'analogy', title: 'A car park', en: 'You look for a car with number 25 in a row of cars sorted by number: 10, 20, 30, 40. It is not there, but it would stand at place 2 (between 20 and 30). The answer is -(2) - 1 = -3.' },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] ids = {10, 20, 30, 40};
                  System.out.println(Arrays.binarySearch(ids, 25));
                  System.out.println(Arrays.binarySearch(ids, 5));
              }
          }
        `, out: J`
          -3
          -1
        ` },
        { type: 'lines', rows: [
          ['binarySearch(ids, 25)', '25 would go at index 2. Result: -(2) - 1 = -3.'],
          ['binarySearch(ids, 5)', '5 would go at index 0 (before everything). Result: -(0) - 1 = -1.']
        ], ar: 'إذا لم توجد القيمة تكون النتيجة سالبة.' },
        { type: 'check', q: 'A negative result from binarySearch means:', options: ['The array is empty', 'The value was not found', 'The value is negative', 'The array is not an int array'], answer: 1, explain: 'Any negative result means the value is not in the array. You can test with pos &gt;= 0.' },
        { type: 'note', kind: 'exam', en: 'binarySearch only works on a <b>sorted</b> array. On an unsorted array the answer can be wrong.', ar: 'يجب ترتيب المصفوفة قبل البحث.' },
        { type: 'h', en: 'Arrays.asList: a quick list' },
        { type: 'p', en: 'Sometimes you want a <code>List</code> (an ordered group of objects, you meet it fully in the next lesson) from a few values. <code>Arrays.asList(...)</code> builds one at once. The list has a <b>fixed size</b>: you may change an element with <code>set</code>, but <code>add</code> and <code>remove</code> cause an error.' },
        { type: 'analogy', title: 'A rented shelf', en: 'You may swap a book on the shelf, but you cannot make the shelf longer.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  List<String> cities = Arrays.asList("Riyadh", "Jeddah", "Dammam");
                  System.out.println(cities + " size " + cities.size());
                  cities.set(0, "Abha");
                  System.out.println(cities);
                  ArrayList<String> trip = new ArrayList<>(cities);
                  trip.add("Taif");
                  System.out.println(trip);
              }
          }
        `, out: J`
          [Riyadh, Jeddah, Dammam] size 3
          [Abha, Jeddah, Dammam]
          [Abha, Jeddah, Dammam, Taif]
        ` },
        { type: 'lines', rows: [
          ['List<String> cities = Arrays.asList(...)', 'A list of Strings. Its size is fixed at 3.'],
          ['cities.set(0, "Abha")', 'Replace the element at index 0. Allowed: the size does not change.'],
          ['new ArrayList<>(cities)', 'Copy the values into a real growable list. Now <code>add</code> works.']
        ], ar: 'للحصول على قائمة تكبر انسخ القيم إلى ArrayList جديدة.' },
        { type: 'note', kind: 'warn', en: 'Calling <code>cities.add("Taif")</code> directly on the asList result compiles, but crashes at run time with <code>UnsupportedOperationException</code>.' },
        { type: 'steps', title: 'Worked example: is the ID registered?', problem: 'Read a sorted list of IDs and one ID to look for. Print the index or a message.', steps: [
          { en: 'Read n and the n sorted IDs into an array.', code: J`
            int n = in.nextInt();
            int[] ids = new int[n];
            for (int i = 0; i < n; i++) {
                ids[i] = in.nextInt();
            }
          ` },
          { en: 'Read the ID to look for and call binarySearch.', code: J`
            int key = in.nextInt();
            int pos = Arrays.binarySearch(ids, key);
          ` },
          { en: 'If pos is zero or more, the ID was found. Otherwise it is missing.', code: J`
            if (pos >= 0) {
                System.out.println("Found at index " + pos);
            } else {
                System.out.println("Not found");
            }
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] ids = new int[n];
                  for (int i = 0; i < n; i++) {
                      ids[i] = in.nextInt();
                  }
                  int key = in.nextInt();
                  int pos = Arrays.binarySearch(ids, key);
                  if (pos >= 0) {
                      System.out.println("Found at index " + pos);
                  } else {
                      System.out.println("Not found");
                  }
              }
          }
        `, stdin: '5\n10 20 30 40 50\n30', out: 'Found at index 2', ar: 'نختبر pos >= 0 لنعرف هل وُجدت القيمة.' }
      ],
      mistakes: [
        { title: 'Searching an unsorted array', en: 'The answer may be wrong. Sort first.', code: J`
          int[] a = {30, 10, 20};
          Arrays.binarySearch(a, 10);   // unreliable
        ` },
        { title: 'Thinking the result is the value', en: 'The result is an index (a position), not the value you searched.', code: 'int pos = Arrays.binarySearch(a, 30);' },
        { title: 'Adding to the asList result', en: 'The list has a fixed size, so add and remove fail at run time.', code: 'Arrays.asList(1, 2).add(3);   // UnsupportedOperationException' },
        { title: 'Testing only for -1', en: 'Missing values can give -1, -3, -5 ... Always test <code>pos &lt; 0</code>.', code: 'if (pos == -1) { ... }   // misses -3' }
      ],
      remember: [
        'Sort first, then use <code>Arrays.binarySearch</code>.',
        'Found: the index (0 or more). Not found: a negative number.',
        'Missing result = <code>-(insertion point) - 1</code>.',
        '<code>Arrays.asList</code> gives a fixed-size list: <code>set</code> works, <code>add</code> does not.',
        'Wrap it in <code>new ArrayList&lt;&gt;(...)</code> to get a list that can grow.'
      ],
      rememberAr: 'البحث الثنائي يحتاج مصفوفة مرتبة، ويعيد الفهرس أو رقماً سالباً إذا لم توجد القيمة. وasList تعطي قائمة ثابتة الحجم.',
      practice: [
        { t: 'mcq', q: 'What must be true before using <code>Arrays.binarySearch</code>?', options: ['The array has no duplicates', 'The array is sorted', 'The array has 10 elements', 'The key is the first value'], answer: 1, explain: 'Binary search throws away half of the array at each step. That only works when the array is sorted.', explainAr: 'يجب أن تكون المصفوفة مرتبة.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] a = {10, 20, 30, 40};
                  System.out.println(Arrays.binarySearch(a, 30));
              }
          }
        `, answer: '2', explain: '30 is at index 2.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] a = {10, 20, 30, 40};
                  System.out.println(Arrays.binarySearch(a, 40));
                  System.out.println(Arrays.binarySearch(a, 25));
                  System.out.println(Arrays.binarySearch(a, 5));
              }
          }
        `, answer: J`
          3
          -3
          -1
        `, explain: '40 is at index 3. 25 would go at index 2 so -(2) - 1 = -3. 5 would go at index 0 so -(0) - 1 = -1.' },
        { t: 'fill', q: 'Sort the array first, then search for 30.', code: J`
          Arrays.___(ids);
          int pos = Arrays.___(ids, 30);
        `, answers: ['sort', 'binarySearch'], explain: 'The array must be sorted before binarySearch is used.' },
        { t: 'mcq', q: 'What happens when this code runs?', code: J`
          List<Integer> ids = Arrays.asList(4, 8, 15);
          ids.add(16);
        `, options: ['ids becomes [4, 8, 15, 16]', 'Compilation error', 'UnsupportedOperationException at run time', 'Nothing happens'], answer: 2, explain: 'The list from asList has a fixed size. It compiles but crashes when you try to add.', explainAr: 'القائمة ثابتة الحجم فالإضافة تسبب استثناءً.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> sorted integers, then a key. Print the index of the key, or <code>-1</code> if it is not in the array. No prompts.', qAr: 'اقرأ n ثم n عدداً مرتباً ثم مفتاحاً، واطبع فهرسه أو -1.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] a = new int[n];
                  // read the numbers, read the key, search
              }
          }
        `, tests: [{ stdin: '4\n5 9 12 20\n12', expected: '2' }, { stdin: '3\n1 2 3\n7', expected: '-1' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] a = new int[n];
                  for (int i = 0; i < n; i++) {
                      a[i] = in.nextInt();
                  }
                  int key = in.nextInt();
                  int pos = Arrays.binarySearch(a, key);
                  if (pos >= 0) {
                      System.out.println(pos);
                  } else {
                      System.out.println(-1);
                  }
              }
          }
        `, hint: 'Call Arrays.binarySearch(a, key). If the result is negative print -1.', explain: 'Any negative result means missing, so we print -1.' }
      ]
    },
    // ---------------------------------------------------------------- L3
    {
      title: 'ArrayList: your first growable list',
      titleAr: 'ArrayList: أول قائمة قابلة للنمو',
      minutes: 30,
      body: [
        { type: 'h', en: 'A list that grows by itself' },
        { type: 'p', en: 'With a plain array you must know the size before you start. But how many items will a customer put in a shopping basket? You do not know. <code>ArrayList</code> is a list that grows and shrinks by itself, so you never worry about the size.', ar: 'ArrayList قائمة تكبر وتصغر تلقائياً فلا نحتاج معرفة الحجم مسبقاً.' },
        { type: 'analogy', title: 'A notebook instead of a form', en: 'An array is a printed form with 5 lines. An ArrayList is a notebook: when a page is full, you simply turn to a new page.', ar: 'ArrayList مثل دفتر نضيف إليه صفحات متى شئنا.' },
        { type: 'h', en: 'Creating a list and adding items' },
        { type: 'p', en: 'You must write the type of the items inside angle brackets <code>&lt; &gt;</code>. <code>ArrayList&lt;String&gt;</code> means "a list of Strings". The empty <code>&lt;&gt;</code> on the right side is called the diamond. Java fills it in for you. You also need <code>import java.util.ArrayList;</code>.' },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> basket = new ArrayList<>();
                  basket.add("milk");
                  basket.add("bread");
                  basket.add("eggs");
                  System.out.println(basket);
              }
          }
        `, out: '[milk, bread, eggs]' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['ArrayList<String> basket', 'A variable named basket. It holds a list of Strings.'],
          ['new ArrayList<>()', 'Make a new, empty list. There is no size to write.'],
          ['basket.add("milk");', 'Put "milk" at the END of the list.'],
          ['System.out.println(basket);', 'A list prints nicely by itself: <code>[milk, bread, eggs]</code>. No Arrays.toString needed.']
        ], ar: 'add تضيف عنصراً في نهاية القائمة، والقائمة تُطبع مباشرة.' },
        { type: 'check', q: 'What does <code>new ArrayList&lt;&gt;()</code> create?', options: ['A list with 10 items', 'An empty list', 'An array of size 0 that cannot grow', 'A list with null'], answer: 1, explain: 'It creates an empty list. You add the items later.' },
        { type: 'h', en: 'size() and get(i)' },
        { type: 'p', en: 'To know how many items there are, call <code>size()</code> (a method with brackets, unlike <code>array.length</code>). To read the item at a position, call <code>get(index)</code>. Indexes also start at 0.' },
        { type: 'analogy', title: 'Counting pages', en: '<code>size()</code> tells you how many pages are written. <code>get(0)</code> opens the first page.' },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> basket = new ArrayList<>();
                  basket.add("milk");
                  basket.add("bread");
                  System.out.println(basket.size());
                  System.out.println(basket.get(0));
                  System.out.println(basket.get(basket.size() - 1));
              }
          }
        `, out: J`
          2
          milk
          bread
        ` },
        { type: 'lines', rows: [
          ['basket.size()', '2, because we added two items.'],
          ['basket.get(0)', 'The first item: milk.'],
          ['basket.get(basket.size() - 1)', 'The last item: index 2 - 1 = 1, which is bread.']
        ], ar: 'size() للعدد وget(i) لقراءة العنصر.' },
        { type: 'check', q: 'A list has 4 items. Which call gives the LAST item?', options: ['list.get(4)', 'list.get(3)', 'list.get(5)', 'list.last()'], answer: 1, explain: 'Indexes are 0, 1, 2, 3. The last index is size() - 1 = 3.' },
        { type: 'h', en: 'Changing the list: set and add(index, item)' },
        { type: 'p', en: '<code>set(i, x)</code> <b>replaces</b> the item at index i. <code>add(i, x)</code> <b>inserts</b> x at index i and pushes the others one place to the right.' },
        { type: 'analogy', title: 'A queue at the bank', en: '<code>set</code> is like changing the name on a ticket. <code>add(1, x)</code> is like a person entering the queue in second place: everyone behind moves back one step.' },
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
                  students.set(2, "Reem");
                  System.out.println(students);
              }
          }
        `, out: J`
          [Huda, Khalid, Omar, Lina]
          [Huda, Khalid, Reem, Lina]
        ` },
        { type: 'lines', rows: [
          ['students.add(1, "Khalid");', 'Insert at index 1. Omar and Lina move right.'],
          ['students.set(2, "Reem");', 'Replace the item at index 2 (it was Omar). The size stays the same.']
        ], ar: 'add(i,x) تُدخل وتزيح الباقي، وset(i,x) تستبدل.' },
        { type: 'check', q: 'List is <code>[A, B, C]</code>. After <code>list.set(1, "Z")</code> it is:', options: ['[A, Z, B, C]', '[A, Z, C]', '[Z, B, C]', '[A, B, Z]'], answer: 1, explain: 'set replaces. B is replaced by Z, and the size stays 3.' },
        { type: 'steps', title: 'Worked example: shopping list', problem: 'Read n words (items). Put them in a list, then print the list, its size and the first item.', steps: [
          { en: 'Create the empty list and read n.', code: J`
            ArrayList<String> items = new ArrayList<>();
            int n = in.nextInt();
          ` },
          { en: 'Read n words and add each one to the list.', code: J`
            for (int i = 0; i < n; i++) {
                items.add(in.next());
            }
          ` },
          { en: 'Print the whole list, then its size, then the first item.', code: J`
            System.out.println(items);
            System.out.println("Size: " + items.size());
            System.out.println("First: " + items.get(0));
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  ArrayList<String> items = new ArrayList<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      items.add(in.next());
                  }
                  System.out.println(items);
                  System.out.println("Size: " + items.size());
                  System.out.println("First: " + items.get(0));
              }
          }
        `, stdin: '3\nmilk bread eggs', out: J`
          [milk, bread, eggs]
          Size: 3
          First: milk
        `, ar: 'نقرأ الكلمات ونضيفها إلى القائمة ثم نطبع.' }
      ],
      mistakes: [
        { title: 'Using length or brackets', en: 'A list has no <code>length</code> and no <code>[ ]</code>. Use size() and get().', code: J`
          list.length;
          list[0];
        ` },
        { title: 'Writing int inside the angle brackets', en: 'The type must be a class (String, Integer, ...). You will meet the reason in the next lesson.', code: 'ArrayList<int> a = new ArrayList<>();' },
        { title: 'Asking for an index that does not exist', en: 'With 3 items, get(3) crashes with IndexOutOfBoundsException.', code: 'list.get(list.size());' },
        { title: 'Forgetting the import', en: 'Add <code>import java.util.ArrayList;</code> at the top.', code: 'ArrayList<String> a;   // cannot find symbol' }
      ],
      remember: [
        '<code>ArrayList&lt;String&gt;</code> is a list of Strings that grows by itself.',
        '<code>add(x)</code> adds at the end; <code>add(i, x)</code> inserts and shifts.',
        '<code>get(i)</code> reads, <code>set(i, x)</code> replaces, <code>size()</code> counts.',
        'Indexes start at 0; the last index is <code>size() - 1</code>.',
        'You can print a list directly: <code>[a, b, c]</code>.'
      ],
      rememberAr: 'ArrayList قائمة تكبر تلقائياً. add للإضافة وget للقراءة وset للاستبدال وsize للعدد، والفهارس تبدأ من 0.',
      practice: [
        { t: 'mcq', q: 'Which method tells you how many items an ArrayList holds?', options: ['length', 'length()', 'size()', 'count()'], answer: 2, explain: 'Arrays use the field length. Lists use the method size().', explainAr: 'القائمة تستخدم size().' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> x = new ArrayList<>();
                  x.add("A");
                  x.add("B");
                  System.out.println(x.size());
                  System.out.println(x.get(0));
              }
          }
        `, answer: J`
          2
          A
        `, explain: 'Two items were added, so the size is 2. Index 0 is "A".' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> x = new ArrayList<>();
                  x.add("Huda");
                  x.add("Omar");
                  x.add(1, "Khalid");
                  x.set(0, "Lina");
                  System.out.println(x);
              }
          }
        `, answer: '[Lina, Khalid, Omar]', explain: '[Huda, Omar] then insert Khalid at 1: [Huda, Khalid, Omar]. Then set index 0 to Lina.' },
        { t: 'fill', q: 'Complete the code.', code: J`
          ArrayList<String> names = new ArrayList<>();
          names.___("Sara");
          System.out.println(names.___());
        `, answers: ['add', 'size'], explain: 'add puts Sara in the list; size() returns 1.' },
        { t: 'order', q: 'Put the lines in order: make a list of two cities and print it.', lines: [
          'ArrayList<String> cities = new ArrayList<>();',
          'cities.add("Riyadh");',
          'cities.add("Abha");',
          'System.out.println(cities);'
        ], explain: 'Create the list first, add the items, then print.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> words. Put them in an <code>ArrayList&lt;String&gt;</code>. Print the list on the first line and <code>Size: </code> plus the size on the second line. No prompts.', qAr: 'اقرأ n كلمة وضعها في ArrayList ثم اطبع القائمة وحجمها.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<String> words = new ArrayList<>();
                  // add n words, then print
              }
          }
        `, tests: [{ stdin: '3\nred green blue', expected: J`
          [red, green, blue]
          Size: 3
        ` }, { stdin: '1\nsun', expected: J`
          [sun]
          Size: 1
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<String> words = new ArrayList<>();
                  for (int i = 0; i < n; i++) {
                      words.add(in.next());
                  }
                  System.out.println(words);
                  System.out.println("Size: " + words.size());
              }
          }
        `, hint: 'Use a for loop and words.add(in.next()).', explain: 'The loop adds one word per round.' }
      ]
    },

    // ---------------------------------------------------------------- L4
    {
      title: 'ArrayList of numbers: Integer, remove and loops',
      titleAr: 'ArrayList للأعداد: Integer والحذف والحلقات',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why not ArrayList of int?' },
        { type: 'p', en: 'You want a list of marks, so you write <code>ArrayList&lt;int&gt;</code>. Java refuses! A list can only hold <b>objects</b>, and <code>int</code> is a simple value, not an object. Every simple type has a matching object type called a <b>wrapper class</b>: <code>int</code> has <code>Integer</code>, <code>double</code> has <code>Double</code>, <code>char</code> has <code>Character</code>, <code>boolean</code> has <code>Boolean</code>.', ar: 'القائمة تحمل كائنات فقط، لذلك نكتب Integer بدل int وDouble بدل double.' },
        { type: 'analogy', title: 'A gift box', en: 'A list only accepts things inside a gift box. An <code>Integer</code> is the number 30 packed in a gift box. Java packs and unpacks the box for you automatically (this is called autoboxing and unboxing).' },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> marks = new ArrayList<>();
                  marks.add(30);
                  marks.add(10);
                  marks.add(20);
                  int first = marks.get(0);
                  System.out.println(marks);
                  System.out.println(first + 5);
              }
          }
        `, out: J`
          [30, 10, 20]
          35
        ` },
        { type: 'lines', rows: [
          ['ArrayList<Integer> marks', 'A list of Integer objects. Use the capital-letter name.'],
          ['marks.add(30);', 'You write a plain 30. Java puts it in an Integer box (autoboxing).'],
          ['int first = marks.get(0);', 'Java takes the number out of the box (unboxing). Now you can calculate with it.']
        ], ar: 'Java تغلف وتفك الأرقام تلقائياً.' },
        { type: 'check', q: 'Which declaration is correct?', options: ['ArrayList<int> a;', 'ArrayList<Integer> a;', 'ArrayList<integer> a;', 'ArrayList<Int> a;'], answer: 1, explain: 'The wrapper class is spelled Integer, with a capital I.' },
        { type: 'h', en: 'Looping over a list' },
        { type: 'p', en: 'The for-each loop reads every item without using indexes. It is the easiest way to add up marks.' },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> marks = new ArrayList<>();
                  marks.add(30);
                  marks.add(10);
                  marks.add(20);
                  int total = 0;
                  for (int m : marks) {
                      total += m;
                  }
                  System.out.println("Total: " + total);
              }
          }
        `, out: 'Total: 60' },
        { type: 'lines', rows: [
          ['for (int m : marks)', 'Read it: for each m in marks. m takes the values 30, then 10, then 20.'],
          ['total += m;', 'Add the current mark to the total.']
        ], ar: 'for-each تمر على كل عنصر بالترتيب.' },
        { type: 'h', en: 'Removing: by index or by value' },
        { type: 'p', en: '<code>remove(int index)</code> removes the item at a position. <code>remove(Object o)</code> removes the first item equal to a value. With an <code>ArrayList&lt;Integer&gt;</code> this is confusing, because a number could mean both! Java picks the <b>index</b> version when you write a plain int. To remove a <b>value</b>, write <code>Integer.valueOf(10)</code>.' },
        { type: 'analogy', title: 'Seat number or name', en: '"Remove seat 1" and "remove the student named Ali" are different orders. A plain int means the seat number.' },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> marks = new ArrayList<>();
                  marks.add(30);
                  marks.add(10);
                  marks.add(20);
                  marks.add(10);
                  marks.remove(1);
                  System.out.println(marks);
                  marks.remove(Integer.valueOf(10));
                  System.out.println(marks);
              }
          }
        `, out: J`
          [30, 20, 10]
          [30, 20]
        ` },
        { type: 'lines', rows: [
          ['marks.remove(1);', 'Index version: remove the item at index 1 (the first 10). List: [30, 20, 10].'],
          ['marks.remove(Integer.valueOf(10));', 'Value version: remove the first item equal to 10. List: [30, 20].']
        ], ar: 'remove(1) تحذف بالفهرس، وremove(Integer.valueOf(1)) تحذف بالقيمة.' },
        { type: 'check', q: 'List is <code>[5, 6, 7]</code> (Integer). After <code>list.remove(1)</code> the list is:', options: ['[6, 7]', '[5, 7]', '[5, 6, 7]', '[5, 6]'], answer: 1, explain: 'The plain int 1 means index 1, which holds 6. So 6 is removed.' },
        { type: 'note', kind: 'exam', en: 'This trap is common in exams: <code>list.remove(1)</code> removes the item at INDEX 1, not the value 1.' },
        { type: 'h', en: 'Searching: contains and indexOf' },
        { type: 'p', en: '<code>contains(x)</code> answers true or false. <code>indexOf(x)</code> gives the position of the first match, or <code>-1</code> when there is none.' },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> students = new ArrayList<>();
                  students.add("Huda");
                  students.add("Omar");
                  students.add("Reem");
                  System.out.println(students.contains("Omar"));
                  System.out.println(students.indexOf("Reem"));
                  System.out.println(students.indexOf("Zaid"));
              }
          }
        `, out: J`
          true
          2
          -1
        ` },
        { type: 'h', en: 'Removing many items: go backwards' },
        { type: 'p', en: 'When you remove an item, the items after it move one place left. If you loop forwards you may skip an item. So loop from the end to the start.' },
        { type: 'analogy', title: 'Tidying a bookshelf', en: 'If you take books out from the left, the books on the right slide over and you may miss one. If you start from the right end, nothing you still have to check moves.' },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> grades = new ArrayList<>();
                  grades.add(45);
                  grades.add(80);
                  grades.add(59);
                  grades.add(90);
                  grades.add(30);
                  for (int i = grades.size() - 1; i >= 0; i--) {
                      if (grades.get(i) < 60) {
                          grades.remove(i);
                      }
                  }
                  System.out.println(grades);
              }
          }
        `, out: '[80, 90]' },
        { type: 'lines', rows: [
          ['int i = grades.size() - 1', 'Start at the last index.'],
          ['i >= 0; i--', 'Go down to index 0, one step at a time.'],
          ['grades.remove(i);', 'i is an int, so this removes by index. Items we still have to check do not move.']
        ], ar: 'عند الحذف داخل حلقة نبدأ من النهاية.' },
        { type: 'note', kind: 'warn', en: 'Do not call <code>list.remove(...)</code> inside a for-each loop over the same list. Java stops with <code>ConcurrentModificationException</code>. The next lesson shows a safe tool.' },
        { type: 'steps', title: 'Worked example: total and average', problem: 'Read n marks. Print their total and their average.', steps: [
          { en: 'Make a list of Integer and read n.', code: J`
            ArrayList<Integer> marks = new ArrayList<>();
            int n = in.nextInt();
          ` },
          { en: 'Read the n marks and add them to the list.', code: J`
            for (int i = 0; i < n; i++) {
                marks.add(in.nextInt());
            }
          ` },
          { en: 'Add up the marks with for-each.', code: J`
            int total = 0;
            for (int m : marks) {
                total += m;
            }
          ` },
          { en: 'Print the total and the average. Cast to double so we do not lose the decimal part.', code: J`
            System.out.println("Total: " + total);
            System.out.println("Average: " + (double) total / marks.size());
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  ArrayList<Integer> marks = new ArrayList<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      marks.add(in.nextInt());
                  }
                  int total = 0;
                  for (int m : marks) {
                      total += m;
                  }
                  System.out.println("Total: " + total);
                  System.out.println("Average: " + (double) total / marks.size());
              }
          }
        `, stdin: '4\n80 90 70 60', out: J`
          Total: 300
          Average: 75.0
        `, ar: 'نجمع العلامات ثم نقسم على الحجم.' }
      ],
      mistakes: [
        { title: 'Using int instead of Integer', en: 'Type arguments must be classes.', code: 'ArrayList<int> marks = new ArrayList<>();' },
        { title: 'remove(1) when you mean the value 1', en: 'It removes the item at index 1. Use <code>Integer.valueOf(1)</code> for the value.', code: 'list.remove(1);' },
        { title: 'Removing inside for-each', en: 'This crashes with ConcurrentModificationException.', code: J`
          for (int g : grades) {
              if (g < 60) grades.remove(Integer.valueOf(g));
          }
        ` },
        { title: 'Looping forward while removing by index', en: 'Items move left after each removal, so one item may be skipped. Loop backwards.', code: 'for (int i = 0; i < list.size(); i++) { list.remove(i); }' }
      ],
      remember: [
        'Lists hold objects: use <code>Integer</code>, <code>Double</code>, <code>Character</code>, <code>Boolean</code>.',
        'Java converts between int and Integer for you (autoboxing and unboxing).',
        '<code>remove(int)</code> removes by index; <code>remove(Integer.valueOf(x))</code> removes by value.',
        '<code>contains</code> gives true/false; <code>indexOf</code> gives a position or -1.',
        'To remove many items in a loop, go backwards over the indexes.'
      ],
      rememberAr: 'القوائم تحمل كائنات فقط (Integer). remove(int) تحذف بالفهرس. للحذف بالقيمة استخدم Integer.valueOf. وعند الحذف في حلقة ابدأ من النهاية.',
      practice: [
        { t: 'mcq', q: 'Which type can you put inside <code>ArrayList&lt; &gt;</code> to store whole numbers?', options: ['int', 'Integer', 'number', 'Int'], answer: 1, explain: 'Lists store objects, so we use the wrapper class Integer.', explainAr: 'نستخدم Integer.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> nums = new ArrayList<>();
                  nums.add(4);
                  nums.add(7);
                  nums.add(9);
                  nums.remove(1);
                  System.out.println(nums);
              }
          }
        `, answer: '[4, 9]', explain: 'remove(1) removes the item at index 1, which is 7.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> nums = new ArrayList<>();
                  nums.add(10);
                  nums.add(20);
                  nums.add(10);
                  nums.remove(Integer.valueOf(10));
                  System.out.println(nums);
                  System.out.println(nums.contains(10));
              }
          }
        `, answer: J`
          [20, 10]
          true
        `, explain: 'Only the FIRST 10 is removed, so one 10 is still in the list.' },
        { t: 'fill', q: 'Complete the code for a list of ages.', code: J`
          ArrayList<___> ages = new ArrayList<>();
          ages.___(12);
          System.out.println(ages.___());
        `, answers: ['Integer', 'add', 'size'], explain: 'We need Integer, then add puts 12 in the list, and size() prints 1.' },
        { t: 'order', q: 'Put the lines in order: remove every grade below 60 (backwards).', lines: [
          'for (int i = grades.size() - 1; i >= 0; i--) {',
          '    if (grades.get(i) < 60) {',
          '        grades.remove(i);',
          '    }',
          '}'
        ], explain: 'The loop starts at the last index; inside it, the if checks and removes.' },
        { t: 'mcq', q: 'Names list is <code>[Huda, Omar]</code>. What does <code>names.indexOf("Sara")</code> return?', options: ['0', '2', '-1', 'null'], answer: 2, explain: 'indexOf returns -1 when the item is not in the list.' },
        { t: 'code', q: 'Read an integer <code>n</code> followed by <code>n</code> integers into an <code>ArrayList&lt;Integer&gt;</code>. Print the list, then remove every negative number and print the list again. No prompts.', qAr: 'اقرأ n ثم n عدداً، اطبع القائمة، ثم احذف السالب واطبعها مرة أخرى.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Integer> list = new ArrayList<>();
                  // read n numbers into list

                  System.out.println(list);
                  // remove the negative numbers (loop backwards)

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
        `, hint: 'Loop from list.size() - 1 down to 0 and call list.remove(i).', explain: 'Going backwards means removing index i never shifts an item we still need to check.' }
      ]
    },
    // ---------------------------------------------------------------- L5
    {
      title: 'LinkedList: a chain of nodes',
      titleAr: 'LinkedList: سلسلة من العُقَد',
      minutes: 25,
      body: [
        { type: 'h', en: 'Another kind of list' },
        { type: 'p', en: 'An ArrayList keeps its items in one block, like seats in a row. If you insert someone at the front, everybody has to move one seat. <code>LinkedList</code> is a different kind of list that makes it cheap to add and remove at the <b>ends</b>. It is also a <code>List</code>, so <code>add</code>, <code>get</code>, <code>size</code> and <code>remove</code> work the same way.', ar: 'LinkedList قائمة تجعل الإضافة والحذف عند الطرفين سريعين.' },
        { type: 'analogy', title: 'A train', en: 'A LinkedList is a train. Every wagon (a node) holds one item and is joined to the next wagon. To add a wagon at the front, you just couple it. Nobody else moves. But to reach wagon number 50 you must walk through 49 wagons.' },
        { type: 'p', en: 'Because of this, a LinkedList has extra methods for the ends: <code>addFirst</code>, <code>addLast</code>, <code>getFirst</code>, <code>getLast</code>, <code>removeFirst</code>, <code>removeLast</code>.' },
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
              }
          }
        `, out: '[VIP, Order#1, Order#2, Order#3]' },
        { type: 'lines', rows: [
          ['orders.add("Order#1");', 'Same as ArrayList: add at the end.'],
          ['orders.addFirst("VIP");', 'Put VIP at the very front of the chain.'],
          ['orders.addLast("Order#3");', 'Put Order#3 at the very end (same as add).']
        ], ar: 'addFirst للبداية وaddLast للنهاية.' },
        { type: 'check', q: 'Which call puts "Zaid" at the front of a LinkedList called <code>q</code>?', options: ['q.add("Zaid")', 'q.addFirst("Zaid")', 'q.addLast("Zaid")', 'q.get("Zaid")'], answer: 1, explain: 'addFirst puts the item at the front.' },
        { type: 'h', en: 'Looking at and removing the ends' },
        { type: 'p', en: '<code>getFirst()</code> and <code>getLast()</code> only look. <code>removeFirst()</code> and <code>removeLast()</code> look <b>and</b> remove (they also return the removed item).' },
        { type: 'analogy', title: 'A coffee shop queue', en: 'The cashier looks at the first customer (getFirst), then serves and removes them (removeFirst).' },
        { type: 'code', run: true, code: J`
          import java.util.LinkedList;

          public class Main {
              public static void main(String[] args) {
                  LinkedList<String> q = new LinkedList<>();
                  q.add("Sara");
                  q.add("Ali");
                  q.add("Noura");
                  System.out.println(q.getFirst() + " / " + q.getLast());
                  String served = q.removeFirst();
                  System.out.println("Served: " + served);
                  System.out.println(q);
              }
          }
        `, out: J`
          Sara / Noura
          Served: Sara
          [Ali, Noura]
        ` },
        { type: 'lines', rows: [
          ['q.getFirst() + " / " + q.getLast()', 'Look at both ends. Nothing is removed.'],
          ['String served = q.removeFirst();', 'Remove Sara from the front and keep her name in served.'],
          ['System.out.println(q);', 'Two customers are still waiting.']
        ], ar: 'removeFirst تحذف أول عنصر وتعيده.' },
        { type: 'check', q: 'Queue is <code>[A, B, C]</code>. After <code>q.removeLast()</code> it is:', options: ['[B, C]', '[A, B]', '[A, C]', '[C]'], answer: 1, explain: 'removeLast removes the last item, C.' },
        { type: 'h', en: 'ArrayList or LinkedList?' },
        { type: 'table', head: ['Task', 'ArrayList', 'LinkedList'], rows: [
          ['Read the item at index i (<code>get(i)</code>)', 'Fast', 'Slow (walks node by node)'],
          ['Add at the end', 'Fast', 'Fast'],
          ['Add or remove at the front', 'Slow (everyone shifts)', 'Fast']
        ] },
        { type: 'note', kind: 'tip', en: 'Rule of thumb: use <code>ArrayList</code> by default. Use <code>LinkedList</code> when you often add or remove at the front, like a waiting line.' },
        { type: 'steps', title: 'Worked example: a bank queue', problem: 'Read n customer names, in order of arrival. Serve the first customer and print who is still waiting.', steps: [
          { en: 'Make the LinkedList and read n.', code: J`
            LinkedList<String> queue = new LinkedList<>();
            int n = in.nextInt();
          ` },
          { en: 'Each arriving customer joins the end of the queue.', code: J`
            for (int i = 0; i < n; i++) {
                queue.add(in.next());
            }
          ` },
          { en: 'Serve the customer at the front: remove and print.', code: 'System.out.println("Now serving: " + queue.removeFirst());' },
          { en: 'Print the waiting customers and how many there are.', code: J`
            System.out.println("Waiting: " + queue);
            System.out.println("Count: " + queue.size());
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  LinkedList<String> queue = new LinkedList<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      queue.add(in.next());
                  }
                  System.out.println("Now serving: " + queue.removeFirst());
                  System.out.println("Waiting: " + queue);
                  System.out.println("Count: " + queue.size());
              }
          }
        `, stdin: '3\nSara Ali Noura', out: J`
          Now serving: Sara
          Waiting: [Ali, Noura]
          Count: 2
        `, ar: 'من يصل أولاً يُخدم أولاً: نحذف من البداية.' }
      ],
      mistakes: [
        { title: 'Using get(i) in a big loop on a LinkedList', en: 'It works, but each get walks the chain. It is slow for big lists.', code: 'for (int i = 0; i < list.size(); i++) { list.get(i); }' },
        { title: 'Calling addFirst on an ArrayList variable', en: 'addFirst is a LinkedList method. If the variable is declared as ArrayList or List it does not compile.', code: J`
          ArrayList<String> a = new ArrayList<>();
          a.addFirst("x");   // error
        ` },
        { title: 'removeFirst on an empty list', en: 'It throws NoSuchElementException. Check isEmpty() first.', code: J`
          LinkedList<String> q = new LinkedList<>();
          q.removeFirst();
        ` }
      ],
      remember: [
        '<code>LinkedList</code> is a List made of nodes joined in a chain.',
        'It is fast at the ends: <code>addFirst</code>, <code>addLast</code>, <code>removeFirst</code>, <code>removeLast</code>.',
        '<code>getFirst</code> and <code>getLast</code> only look; they do not remove.',
        '<code>get(i)</code> is slow on a LinkedList.',
        'Use ArrayList by default; LinkedList for a waiting line.'
      ],
      rememberAr: 'LinkedList سلسلة عُقَد، سريعة عند الطرفين وبطيئة في get(i). نستخدم ArrayList افتراضياً وLinkedList لطوابير الانتظار.',
      practice: [
        { t: 'mcq', q: 'Which method belongs to LinkedList but not to a plain ArrayList?', options: ['add', 'size', 'addFirst', 'get'], answer: 2, explain: 'addFirst, addLast, getFirst, getLast, removeFirst and removeLast are the LinkedList end methods.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.LinkedList;

          public class Main {
              public static void main(String[] args) {
                  LinkedList<String> q = new LinkedList<>();
                  q.add("A");
                  q.add("B");
                  q.addFirst("Z");
                  System.out.println(q);
              }
          }
        `, answer: '[Z, A, B]', explain: 'Z is put at the front.' },
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
        `, explain: '[3] then [1, 3] then [1, 3, 5] then [9, 1, 3, 5]. removeLast removes 5. The first item is 9.' },
        { t: 'fill', q: 'Complete the code: look at the last customer, then serve the first.', code: J`
          String last = q.___();
          String served = q.___();
        `, answers: ['getLast', 'removeFirst'], explain: 'getLast only looks. removeFirst takes the first customer out.' },
        { t: 'mcq', q: 'Which collection is best for a waiting list where people are added at the end and removed from the front all day?', options: ['int[]', 'ArrayList', 'LinkedList', 'Arrays.asList(...)'], answer: 2, explain: 'Removing the front of an ArrayList shifts every item. A LinkedList just unlinks the first node.' },
        { t: 'code', q: 'Read <code>n</code> (at least 3) and then <code>n</code> words into a <code>LinkedList&lt;String&gt;</code>. Remove the first and the last word and print the list that remains. No prompts.', qAr: 'اقرأ n كلمة وضعها في LinkedList ثم احذف الأولى والأخيرة واطبع الباقي.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  LinkedList<String> list = new LinkedList<>();
                  // read, remove both ends, print
              }
          }
        `, tests: [{ stdin: '4\na b c d', expected: '[b, c]' }, { stdin: '3\nx y z', expected: '[y]' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  LinkedList<String> list = new LinkedList<>();
                  for (int i = 0; i < n; i++) {
                      list.add(in.next());
                  }
                  list.removeFirst();
                  list.removeLast();
                  System.out.println(list);
              }
          }
        `, hint: 'Use list.removeFirst() and list.removeLast().', explain: 'The two end methods do the job in one line each.' }
      ]
    },

    // ---------------------------------------------------------------- L6
    {
      title: 'Iterator and ListIterator',
      titleAr: 'المُكرِّر Iterator و ListIterator',
      minutes: 30,
      body: [
        { type: 'h', en: 'A safe way to walk through a collection' },
        { type: 'p', en: 'In the last lesson you learned that you must not call <code>list.remove(...)</code> inside a for-each loop. But sometimes you do want to remove items while you walk through the list. Java solves this with an <b>iterator</b>: a helper object that walks through a collection for you and is allowed to remove the item it just visited.', ar: 'المُكرِّر يمر على العناصر ويستطيع حذف العنصر الحالي بأمان.' },
        { type: 'analogy', title: 'A finger on a shopping list', en: 'You move your finger down the list, one item at a time. When you cross out the item under your finger, you do not lose your place.' },
        { type: 'p', en: 'An <code>Iterator</code> has three methods: <code>hasNext()</code> asks "is there another item?", <code>next()</code> gives the next item and moves on, and <code>remove()</code> deletes the item that <code>next()</code> just gave.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Double> prices = new ArrayList<>();
                  prices.add(12.5);
                  prices.add(99.0);
                  prices.add(7.25);
                  prices.add(150.0);
                  prices.add(30.0);
                  Iterator<Double> it = prices.iterator();
                  while (it.hasNext()) {
                      double p = it.next();
                      if (p > 50) {
                          it.remove();
                      }
                  }
                  System.out.println(prices);
              }
          }
        `, out: '[12.5, 7.25, 30.0]' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['Iterator<Double> it = prices.iterator();', 'Ask the list for an iterator. It starts before the first item.'],
          ['while (it.hasNext())', 'Repeat while there is one more item to visit.'],
          ['double p = it.next();', 'Take the next price and move the finger forward.'],
          ['it.remove();', 'Delete the price we just took (the one the finger is on). This is safe.']
        ], ar: 'نكرر ما دام hasNext صحيحة، وremove تحذف آخر عنصر أعاده next.' },
        { type: 'check', q: 'What does <code>it.hasNext()</code> return?', options: ['The next item', 'true if there is another item', 'The number of items', 'Nothing (void)'], answer: 1, explain: 'hasNext only answers true or false. next() gives the item.' },
        { type: 'note', kind: 'exam', en: 'Call <code>it.remove()</code> only after <code>it.next()</code>, and only once for each <code>next()</code>. Otherwise you get <code>IllegalStateException</code>.' },
        { type: 'h', en: 'ListIterator: forward and backward' },
        { type: 'p', en: 'Lists also have <code>listIterator()</code>. A <code>ListIterator</code> can go forward (<code>hasNext</code>, <code>next</code>) and also <b>backward</b> (<code>hasPrevious</code>, <code>previous</code>). It can also replace the current item with <code>set</code>.' },
        { type: 'analogy', title: 'A cursor between letters', en: 'In a text editor the cursor sits <i>between</i> two letters. <code>next()</code> jumps over the letter on the right. <code>previous()</code> jumps back over the letter on the left.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> list = new ArrayList<>();
                  list.add(1);
                  list.add(2);
                  list.add(3);
                  ListIterator<Integer> li = list.listIterator();
                  System.out.println(li.next());
                  System.out.println(li.next());
                  System.out.println(li.previous());
              }
          }
        `, out: J`
          1
          2
          2
        ` },
        { type: 'lines', rows: [
          ['li.next()   // 1', 'The cursor was at the start. It jumps over 1. Now it is between 1 and 2.'],
          ['li.next()   // 2', 'It jumps over 2. Now it is between 2 and 3.'],
          ['li.previous()   // 2', 'It jumps back over 2. So 2 is returned again.']
        ], ar: 'previous تعيد العنصر الذي على يسار المؤشر.' },
        { type: 'check', q: 'The cursor is between 2 and 3. What does <code>previous()</code> return?', options: ['1', '2', '3', 'Nothing'], answer: 1, explain: 'previous returns the item on the LEFT of the cursor: 2.' },
        { type: 'p', en: 'To walk the whole list backwards, start the cursor at the end: <code>list.listIterator(list.size())</code>.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  LinkedList<String> days = new LinkedList<>();
                  days.add("Sun");
                  days.add("Mon");
                  days.add("Tue");
                  ListIterator<String> li = days.listIterator();
                  while (li.hasNext()) {
                      String d = li.next();
                      li.set(d.toUpperCase());
                  }
                  System.out.println(days);
                  while (li.hasPrevious()) {
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
        { type: 'lines', rows: [
          ['li.set(d.toUpperCase());', 'Replace the item that next() just returned with its capital-letter version.'],
          ['while (li.hasPrevious())', 'After the first loop the cursor is at the end, so we can walk back.'],
          ['li.previous()', 'Gives TUE, then MON, then SUN.']
        ], ar: 'ListIterator يتحرك بالاتجاهين ويستطيع set.' },
        { type: 'steps', title: 'Worked example: remove short names', problem: 'Read n names. Remove every name with fewer than 3 letters, then print what is left.', steps: [
          { en: 'Read n names into an ArrayList.', code: J`
            ArrayList<String> names = new ArrayList<>();
            int n = in.nextInt();
            for (int i = 0; i < n; i++) {
                names.add(in.next());
            }
          ` },
          { en: 'Get an iterator and visit every name.', code: J`
            Iterator<String> it = names.iterator();
            while (it.hasNext()) {
                String s = it.next();
          ` },
          { en: 'If the name is short, remove it with the iterator. Then close the loop.', code: J`
                if (s.length() < 3) {
                    it.remove();
                }
            }
          ` },
          { en: 'Print the list.', code: 'System.out.println("Kept: " + names);' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  ArrayList<String> names = new ArrayList<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      names.add(in.next());
                  }
                  Iterator<String> it = names.iterator();
                  while (it.hasNext()) {
                      String s = it.next();
                      if (s.length() < 3) {
                          it.remove();
                      }
                  }
                  System.out.println("Kept: " + names);
              }
          }
        `, stdin: '5\nAl Sara Bo Fahad Li', out: 'Kept: [Sara, Fahad]', ar: 'نحذف بواسطة المُكرِّر لا بواسطة القائمة.' }
      ],
      mistakes: [
        { title: 'Removing with the list inside the loop', en: 'Use <code>it.remove()</code>, not <code>list.remove(...)</code>.', code: J`
          while (it.hasNext()) {
              String s = it.next();
              names.remove(s);   // ConcurrentModificationException
          }
        ` },
        { title: 'Calling next() twice in one round', en: 'Each next() moves forward and skips an item. Call it once per round and keep the result in a variable.', code: J`
          if (it.next().length() < 3 && it.next().length() > 0) {
              it.remove();   // two next() calls: items are skipped
          }
        ` },
        { title: 'remove() before next()', en: 'There is no current item yet, so Java throws IllegalStateException.', code: J`
          Iterator<String> it = names.iterator();
          it.remove();
        ` },
        { title: 'Forgetting the import', en: 'Iterator and ListIterator live in java.util.', code: 'import java.util.*;' }
      ],
      remember: [
        '<code>iterator()</code> gives an Iterator: <code>hasNext()</code>, <code>next()</code>, <code>remove()</code>.',
        'Remove while walking with <code>it.remove()</code>, never <code>list.remove()</code>.',
        '<code>it.remove()</code> deletes the item that the last <code>next()</code> returned.',
        '<code>ListIterator</code> (lists only) adds <code>hasPrevious()</code>, <code>previous()</code> and <code>set()</code>.',
        'The cursor sits between items: <code>next()</code> jumps right, <code>previous()</code> jumps left.'
      ],
      rememberAr: 'نستخدم Iterator للحذف أثناء المرور. ListIterator يضيف الرجوع للخلف وset. المؤشر يقع بين العناصر.',
      practice: [
        { t: 'mcq', q: 'Which method of Iterator tells you if there are more items?', options: ['next()', 'hasNext()', 'more()', 'size()'], answer: 1, explain: 'hasNext() returns true while there are items left.', explainAr: 'hasNext تخبرنا هل بقي عناصر.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> a = new ArrayList<>();
                  a.add(2);
                  a.add(4);
                  a.add(6);
                  int sum = 0;
                  Iterator<Integer> it = a.iterator();
                  while (it.hasNext()) {
                      sum += it.next();
                  }
                  System.out.println(sum);
              }
          }
        `, answer: '12', explain: 'The iterator visits 2, 4 and 6: 2 + 4 + 6 = 12.' },
        { t: 'fill', q: 'Complete the code that removes every name shorter than 3 characters.', code: J`
          Iterator<String> it = names.___();
          while (it.___()) {
              String s = it.___();
              if (s.length() < 3) {
                  it.___();
              }
          }
        `, answers: ['iterator', 'hasNext', 'next', 'remove'], explain: 'Get the iterator, loop while hasNext, read with next, delete with the iterator remove.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> a = new ArrayList<>();
                  a.add(2);
                  a.add(4);
                  a.add(6);
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
        `, explain: 'The cursor starts at the end. previous() gives 6, then 4, then 2, and sum grows to 6, 10, 12.' },
        { t: 'mcq', q: 'Which ability does <code>ListIterator</code> have that a plain <code>Iterator</code> does not?', options: ['Checking if more items remain', 'Removing the current item', 'Moving backward with previous()', 'Working with a HashSet'], answer: 2, explain: 'Both have hasNext, next and remove. Only ListIterator adds hasPrevious, previous and set.' },
        { t: 'order', q: 'Put the lines in order: print every name using an iterator.', lines: [
          'Iterator<String> it = names.iterator();',
          'while (it.hasNext()) {',
          '    System.out.println(it.next());',
          '}'
        ], explain: 'Get the iterator first, then loop while there is a next item.' },
        { t: 'code', q: 'Read <code>n</code> and then <code>n</code> integers into an ArrayList. Use an <b>Iterator</b> to remove every even number. Print the list that remains. No prompts.', qAr: 'احذف الأعداد الزوجية باستخدام Iterator ثم اطبع الباقي.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Integer> list = new ArrayList<>();
                  for (int i = 0; i < n; i++) {
                      list.add(in.nextInt());
                  }
                  // remove the even numbers with an Iterator

                  System.out.println(list);
              }
          }
        `, tests: [{ stdin: '5\n1 2 3 4 5', expected: '[1, 3, 5]' }, { stdin: '3\n2 4 6', expected: '[]' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Integer> list = new ArrayList<>();
                  for (int i = 0; i < n; i++) {
                      list.add(in.nextInt());
                  }
                  Iterator<Integer> it = list.iterator();
                  while (it.hasNext()) {
                      int x = it.next();
                      if (x % 2 == 0) {
                          it.remove();
                      }
                  }
                  System.out.println(list);
              }
          }
        `, hint: 'int x = it.next(); then if (x % 2 == 0) it.remove();', explain: 'The iterator may remove the item it just returned.' }
      ]
    },
    // ---------------------------------------------------------------- L7
    {
      title: 'HashSet: a collection with no repeats',
      titleAr: 'HashSet: مجموعة بلا تكرار',
      minutes: 25,
      body: [
        { type: 'h', en: 'What is a set?' },
        { type: 'p', en: 'Sometimes you only care <i>whether</i> something is there, not how many times. How many different students visited the library today? A <b>set</b> keeps each value only once. If you add a value that is already inside, the set simply ignores it. <code>HashSet</code> is the most common set and it is very fast.', ar: 'المجموعة Set تحفظ كل قيمة مرة واحدة فقط.' },
        { type: 'analogy', title: 'A guest list at the door', en: 'The guard only needs to know if your name is on the list. Writing your name twice does not make you two guests.' },
        { type: 'code', run: true, code: J`
          import java.util.HashSet;

          public class Main {
              public static void main(String[] args) {
                  HashSet<String> courses = new HashSet<>();
                  courses.add("CS101");
                  courses.add("MATH111");
                  courses.add("CS102");
                  boolean added = courses.add("CS101");
                  System.out.println("Added again? " + added);
                  System.out.println("Size: " + courses.size());
              }
          }
        `, out: J`
          Added again? false
          Size: 3
        ` },
        { type: 'lines', rows: [
          ['courses.add("CS101");', 'Put CS101 in the set. Returns true because it is new.'],
          ['boolean added = courses.add("CS101");', 'CS101 is already inside, so nothing changes and add returns false.'],
          ['courses.size()', 'Three different courses, so 3.']
        ], ar: 'add تعيد false إذا كانت القيمة موجودة.' },
        { type: 'check', q: 'A set has {1, 2}. What does <code>set.add(2)</code> return?', options: ['true', 'false', '2', 'It throws an error'], answer: 1, explain: '2 is already in the set, so add returns false and the set stays the same.' },
        { type: 'h', en: 'contains and remove' },
        { type: 'p', en: '<code>contains(x)</code> checks whether x is in the set. <code>remove(x)</code> takes x out. These are very fast, even when the set has millions of values.' },
        { type: 'code', run: true, code: J`
          import java.util.HashSet;

          public class Main {
              public static void main(String[] args) {
                  HashSet<String> visitors = new HashSet<>();
                  visitors.add("Huda");
                  visitors.add("Omar");
                  System.out.println(visitors.contains("Omar"));
                  visitors.remove("Omar");
                  System.out.println(visitors.contains("Omar"));
                  System.out.println(visitors.size());
              }
          }
        `, out: J`
          true
          false
          1
        ` },
        { type: 'h', en: 'The order is not guaranteed' },
        { type: 'p', en: 'A HashSet does not remember the order you added things. If you print it, the order may look strange. When you need a nice order, copy the values into a <code>TreeSet</code>. A TreeSet is also a set without repeats, and it keeps the values <b>sorted</b>.' },
        { type: 'analogy', title: 'A bag of marbles', en: 'You shake the bag: the marbles have no fixed order. A TreeSet is a row of marbles lined up from the smallest to the biggest.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> nums = new ArrayList<>();
                  nums.add(3);
                  nums.add(1);
                  nums.add(3);
                  nums.add(2);
                  nums.add(1);
                  TreeSet<Integer> unique = new TreeSet<>(nums);
                  System.out.println(unique);
                  System.out.println(unique.size());
              }
          }
        `, out: J`
          [1, 2, 3]
          3
        ` },
        { type: 'lines', rows: [
          ['new TreeSet<>(nums)', 'Build a sorted set from the list. Repeated values disappear.'],
          ['System.out.println(unique);', 'Prints the values in sorted order, once each.']
        ], ar: 'TreeSet تزيل التكرار وترتب القيم.' },
        { type: 'note', kind: 'warn', en: 'Never rely on the printed order of a <code>HashSet</code>. It can change between computers and Java versions. Use <code>TreeSet</code> when order matters.', ar: 'لا تعتمد على ترتيب HashSet.' },
        { type: 'check', q: 'You need the unique student IDs printed from smallest to largest. Which class?', options: ['ArrayList', 'HashSet', 'TreeSet', 'LinkedList'], answer: 2, explain: 'TreeSet has no repeats and keeps sorted order.' },
        { type: 'steps', title: 'Worked example: distinct words', problem: 'Read n words. Print how many different words there are, and the different words in alphabetical order.', steps: [
          { en: 'Create a HashSet and read n.', code: J`
            HashSet<String> words = new HashSet<>();
            int n = in.nextInt();
          ` },
          { en: 'Add every word. Repeats are ignored automatically.', code: J`
            for (int i = 0; i < n; i++) {
                words.add(in.next());
            }
          ` },
          { en: 'Print the size, then copy into a TreeSet to get alphabetical order.', code: J`
            System.out.println("Distinct: " + words.size());
            System.out.println("Sorted: " + new TreeSet<>(words));
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  HashSet<String> words = new HashSet<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      words.add(in.next());
                  }
                  System.out.println("Distinct: " + words.size());
                  System.out.println("Sorted: " + new TreeSet<>(words));
              }
          }
        `, stdin: '6\nred blue red green blue red', out: J`
          Distinct: 3
          Sorted: [blue, green, red]
        `, ar: 'المجموعة تتجاهل التكرار تلقائياً.' }
      ],
      mistakes: [
        { title: 'Expecting an index', en: 'A set has no get(i). You cannot ask for the item at position 2.', code: 'set.get(2);   // error' },
        { title: 'Trusting the HashSet print order', en: 'Copy to a TreeSet first when order matters.', code: 'System.out.println(hashSet);   // order not guaranteed' },
        { title: 'Expecting duplicates to be kept', en: 'Adding a second "CS101" does nothing. The size does not grow.', code: J`
          set.add("CS101");
          set.add("CS101");   // size is still 1
        ` },
        { title: 'Using int inside the brackets', en: 'Use the wrapper class: <code>HashSet&lt;Integer&gt;</code>.', code: 'HashSet<int> s;' }
      ],
      remember: [
        'A set stores each value at most once.',
        '<code>add</code> returns <code>false</code> when the value is already there.',
        '<code>contains</code>, <code>add</code> and <code>remove</code> are very fast in a HashSet.',
        'A HashSet has no reliable order. A TreeSet keeps values sorted.',
        'To remove repeats from a list: <code>new TreeSet&lt;&gt;(list)</code> or <code>new HashSet&lt;&gt;(list)</code>.'
      ],
      rememberAr: 'المجموعة لا تحفظ التكرار. add تعيد false إذا وُجدت القيمة. HashSet بلا ترتيب مضمون، وTreeSet مرتبة.',
      practice: [
        { t: 'mcq', q: 'Which statement about a Set is true?', options: ['It allows duplicates', 'It has no duplicates', 'It uses indexes like an array', 'It is always sorted'], answer: 1, explain: 'A set never keeps two equal values.', explainAr: 'المجموعة لا تقبل التكرار.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.HashSet;

          public class Main {
              public static void main(String[] args) {
                  HashSet<String> s = new HashSet<>();
                  System.out.println(s.add("a"));
                  System.out.println(s.add("a"));
                  System.out.println(s.size());
              }
          }
        `, answer: J`
          true
          false
          1
        `, explain: 'The first add succeeds. The second is a repeat, so false. The size is 1.' },
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
        `, explain: 'The set is {5, 3, 8}, size 3. Adding 9 works (true), so the size becomes 4.' },
        { t: 'fill', q: 'Complete the code.', code: J`
          HashSet<String> tags = new HashSet<>();
          tags.___("java");
          System.out.println(tags.___("java"));   // prints true
        `, answers: ['add', 'contains'], explain: 'add puts the tag in; contains checks that it is there.' },
        { t: 'mcq', q: 'You must store student IDs with no duplicates and print them in increasing order. Which collection fits best?', options: ['ArrayList&lt;Integer&gt;', 'HashSet&lt;Integer&gt;', 'TreeSet&lt;Integer&gt;', 'LinkedList&lt;Integer&gt;'], answer: 2, explain: 'A TreeSet rejects duplicates and keeps its values sorted.' },
        { t: 'order', q: 'Put the lines in order: count the different numbers in a set.', lines: [
          'HashSet<Integer> set = new HashSet<>();',
          'set.add(4);',
          'set.add(4);',
          'System.out.println(set.size());'
        ], explain: 'Create the set, add values, print the size (1).' },
        { t: 'code', q: 'Read <code>n</code> and then <code>n</code> integers. Print how many <b>different</b> numbers there are. No prompts.', qAr: 'اقرأ n عدداً واطبع عدد القيم المختلفة.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  HashSet<Integer> set = new HashSet<>();
                  // add the numbers, print the size
              }
          }
        `, tests: [{ stdin: '5\n1 2 2 3 3', expected: '3' }, { stdin: '3\n7 7 7', expected: '1' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  HashSet<Integer> set = new HashSet<>();
                  for (int i = 0; i < n; i++) {
                      set.add(in.nextInt());
                  }
                  System.out.println(set.size());
              }
          }
        `, hint: 'Add each number to the set, then print set.size().', explain: 'The set removes repeats for you, so its size is the number of different values.' }
      ]
    },

    // ---------------------------------------------------------------- L8
    {
      title: 'HashMap: finding a value from a key',
      titleAr: 'HashMap: إيجاد القيمة من المفتاح',
      minutes: 30,
      body: [
        { type: 'h', en: 'What is a map?' },
        { type: 'p', en: 'A list finds things by position (index). But often you know a <i>name</i>, not a position: "What is the price of coffee?" "What is the GPA of Sara?" A <b>map</b> stores pairs. The first part of a pair is the <b>key</b> (the name you look up) and the second part is the <b>value</b> (the answer). Keys are unique.', ar: 'الخريطة تخزن أزواجاً: مفتاح وقيمة، والمفتاح فريد.' },
        { type: 'analogy', title: 'A phone book', en: 'You look up a name (the key) and get a phone number (the value). Two people cannot have exactly the same entry name in the book, and you never search by page number.' },
        { type: 'p', en: 'We write <code>HashMap&lt;String, Double&gt;</code>: the first type is the key type, the second is the value type. <code>put(key, value)</code> adds a pair; <code>get(key)</code> returns the value. You need <code>import java.util.HashMap;</code>.' },
        { type: 'code', run: true, code: J`
          import java.util.HashMap;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, Double> gpa = new HashMap<>();
                  gpa.put("Sara", 3.8);
                  gpa.put("Faisal", 3.1);
                  gpa.put("Mona", 3.5);
                  System.out.println(gpa.get("Sara"));
                  System.out.println(gpa.size());
              }
          }
        `, out: J`
          3.8
          3
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['HashMap<String, Double> gpa', 'A map. Keys are Strings (names), values are Doubles (GPAs).'],
          ['gpa.put("Sara", 3.8);', 'Store the pair Sara -> 3.8.'],
          ['gpa.get("Sara")', 'Ask: what value belongs to the key Sara? Answer: 3.8.'],
          ['gpa.size()', 'The number of pairs: 3.']
        ], ar: 'put تضيف زوجاً وget تعيد القيمة من المفتاح.' },
        { type: 'check', q: 'In <code>HashMap&lt;String, Integer&gt;</code>, what is the KEY type?', options: ['Integer', 'String', 'HashMap', 'Both'], answer: 1, explain: 'The first type is the key type: String.' },
        { type: 'h', en: 'Same key again: the value is replaced' },
        { type: 'p', en: 'Keys are unique. If you <code>put</code> a key that already exists, the old value is replaced. No second pair is created.' },
        { type: 'analogy', title: 'Updating a contact', en: 'When Faisal changes his number, you edit his contact. You do not create a second Faisal.' },
        { type: 'code', run: true, code: J`
          import java.util.HashMap;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, Double> gpa = new HashMap<>();
                  gpa.put("Faisal", 3.1);
                  gpa.put("Faisal", 3.3);
                  System.out.println(gpa.get("Faisal"));
                  System.out.println(gpa.size());
              }
          }
        `, out: J`
          3.3
          1
        ` },
        { type: 'check', q: 'After <code>m.put("a", 1); m.put("a", 5);</code> what is <code>m.size()</code>?', options: ['2', '1', '5', '0'], answer: 1, explain: 'The second put replaced the value of the same key, so there is one pair.' },
        { type: 'h', en: 'Missing keys: null, getOrDefault and containsKey' },
        { type: 'p', en: 'If you ask for a key that is not in the map, <code>get</code> returns <code>null</code> (it means "nothing"). Two safer tools: <code>containsKey(k)</code> answers true or false, and <code>getOrDefault(k, d)</code> returns d when the key is missing.' },
        { type: 'code', run: true, code: J`
          import java.util.HashMap;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, Integer> stock = new HashMap<>();
                  stock.put("pens", 40);
                  stock.put("books", 12);
                  System.out.println(stock.get("cup"));
                  System.out.println(stock.getOrDefault("cup", 0));
                  System.out.println(stock.containsKey("pens"));
                  stock.remove("pens");
                  System.out.println(stock.size());
              }
          }
        `, out: J`
          null
          0
          true
          1
        ` },
        { type: 'lines', rows: [
          ['stock.get("cup")', 'There is no key cup, so the answer is null.'],
          ['stock.getOrDefault("cup", 0)', 'No cup, so use the default we gave: 0.'],
          ['stock.containsKey("pens")', 'true, pens is a key.'],
          ['stock.remove("pens");', 'Delete the whole pair for pens. One pair is left.']
        ], ar: 'getOrDefault تعيد قيمة افتراضية إذا لم يوجد المفتاح.' },
        { type: 'note', kind: 'exam', en: 'Writing <code>int c = stock.get("cup");</code> for a missing key crashes with <code>NullPointerException</code>, because Java cannot unbox <code>null</code>. Use <code>getOrDefault</code> or check <code>containsKey</code> first.' },
        { type: 'steps', title: 'Worked example: café menu', problem: 'Read a menu of n items with prices. Then read one item name and print its price, or a message if it is not on the menu.', steps: [
          { en: 'Make the map and read n.', code: J`
            HashMap<String, Integer> menu = new HashMap<>();
            int n = in.nextInt();
          ` },
          { en: 'Read n pairs: a name, then a price. Store them.', code: J`
            for (int i = 0; i < n; i++) {
                String item = in.next();
                int price = in.nextInt();
                menu.put(item, price);
            }
          ` },
          { en: 'Read the item to look up and check that it is a key.', code: J`
            String wanted = in.next();
            if (menu.containsKey(wanted)) {
          ` },
          { en: 'Print the price, or the message in the else part.', code: J`
                System.out.println(wanted + " costs " + menu.get(wanted) + " riyals");
            } else {
                System.out.println("Not on the menu");
            }
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  HashMap<String, Integer> menu = new HashMap<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      String item = in.next();
                      int price = in.nextInt();
                      menu.put(item, price);
                  }
                  String wanted = in.next();
                  if (menu.containsKey(wanted)) {
                      System.out.println(wanted + " costs " + menu.get(wanted) + " riyals");
                  } else {
                      System.out.println("Not on the menu");
                  }
              }
          }
        `, stdin: '3\ncoffee 12\ntea 8\ncake 15\ntea', out: 'tea costs 8 riyals', ar: 'نتحقق بـ containsKey قبل القراءة.' }
      ],
      mistakes: [
        { title: 'Expecting a key twice', en: 'A second put with the same key replaces the first value.', code: J`
          m.put("Ali", 70);
          m.put("Ali", 90);   // size is still 1, value 90
        ` },
        { title: 'Unboxing null', en: 'Crash with NullPointerException when the key is missing.', code: 'int c = stock.get("cup");' },
        { title: 'Using get(i) with an index', en: 'A map has no positions. get needs a key.', code: 'stock.get(0);   // looks for the key 0' },
        { title: 'Swapping key and value types', en: '<code>HashMap&lt;Integer, String&gt;</code> and <code>HashMap&lt;String, Integer&gt;</code> are different maps.', code: 'HashMap<Integer, String> m = new HashMap<>(); m.put("pens", 40);   // error' }
      ],
      remember: [
        'A map stores key -> value pairs. Keys are unique.',
        '<code>put(k, v)</code> adds or replaces. <code>get(k)</code> reads.',
        '<code>get</code> returns <code>null</code> for a missing key.',
        '<code>containsKey(k)</code> and <code>getOrDefault(k, d)</code> are the safe ways.',
        '<code>remove(k)</code> deletes the pair; <code>size()</code> counts pairs.'
      ],
      rememberAr: 'الخريطة تربط مفتاحاً فريداً بقيمة. put تضيف أو تستبدل، وget تقرأ وتعيد null للمفتاح الغائب، وgetOrDefault وcontainsKey أكثر أماناً.',
      practice: [
        { t: 'mcq', q: 'What does <code>map.get(k)</code> return if k is not a key?', options: ['0', 'An empty String', 'null', 'An exception is always thrown'], answer: 2, explain: 'get returns null for a missing key.', explainAr: 'تعيد null.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.HashMap;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, Integer> m = new HashMap<>();
                  m.put("a", 1);
                  m.put("b", 2);
                  m.put("a", 9);
                  System.out.println(m.get("a"));
                  System.out.println(m.size());
              }
          }
        `, answer: J`
          9
          2
        `, explain: 'The second put on "a" replaces 1 with 9. There are two keys: a and b.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.HashMap;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, Integer> m = new HashMap<>();
                  m.put("pen", 3);
                  System.out.println(m.get("cup"));
                  System.out.println(m.getOrDefault("cup", 0));
                  System.out.println(m.containsKey("pen"));
              }
          }
        `, answer: J`
          null
          0
          true
        `, explain: 'cup is missing: null, then the default 0. pen is a key: true.' },
        { t: 'fill', q: 'Complete the code.', code: J`
          m.___("Ali", 70);
          System.out.println(m.___("Ali"));          // 70
          System.out.println(m.___("Zed", 0));       // 0
        `, answers: ['put', 'get', 'getOrDefault'], explain: 'put stores, get reads, getOrDefault reads with a default for missing keys.' },
        { t: 'mcq', q: 'The map <code>HashMap&lt;String, Integer&gt; m</code> has no key "x". What happens with <code>int c = m.get("x");</code>?', options: ['c becomes 0', 'c becomes -1', 'NullPointerException', 'Compilation error'], answer: 2, explain: 'get returns null and Java cannot unbox null to an int.' },
        { t: 'order', q: 'Put the lines in order: store a price and print it.', lines: [
          'HashMap<String, Integer> price = new HashMap<>();',
          'price.put("tea", 8);',
          'System.out.println(price.get("tea"));'
        ], explain: 'Create the map, put the pair, then get it.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> pairs (a name and an integer score). Then read one more name. Print its score, or <code>-1</code> if the name was not entered. No prompts.', qAr: 'اقرأ أزواجاً (اسم ودرجة) ثم اسماً للبحث، واطبع الدرجة أو -1.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  HashMap<String, Integer> scores = new HashMap<>();
                  // read the pairs, read the name, print the answer
              }
          }
        `, tests: [{ stdin: '2\nAli 70\nSara 88\nSara', expected: '88' }, { stdin: '1\nAli 70\nOmar', expected: '-1' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  HashMap<String, Integer> scores = new HashMap<>();
                  for (int i = 0; i < n; i++) {
                      String name = in.next();
                      int score = in.nextInt();
                      scores.put(name, score);
                  }
                  String wanted = in.next();
                  System.out.println(scores.getOrDefault(wanted, -1));
              }
          }
        `, hint: 'scores.getOrDefault(wanted, -1) does everything in one line.', explain: 'getOrDefault returns -1 for a name that is not a key.' }
      ]
    },
    // ---------------------------------------------------------------- L9
    {
      title: 'Looping over a map and counting words',
      titleAr: 'المرور على الخريطة وعدّ الكلمات',
      minutes: 30,
      body: [
        { type: 'h', en: 'Printing a map in a nice order: TreeMap' },
        { type: 'p', en: 'Like HashSet, a HashMap does not keep a reliable order. If you print it, the pairs may come out in a surprising order. A <code>TreeMap</code> works exactly like a HashMap (same put, get, containsKey) but keeps its <b>keys sorted</b>. We use TreeMap whenever we print.', ar: 'TreeMap مثل HashMap لكن مفاتيحها مرتبة، فنستخدمها عند الطباعة.' },
        { type: 'analogy', title: 'A phone book sorted by name', en: 'A HashMap is a pile of contact cards. A TreeMap is the same cards placed in alphabetical order.' },
        { type: 'code', run: true, code: J`
          import java.util.TreeMap;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<String, Integer> stock = new TreeMap<>();
                  stock.put("pens", 40);
                  stock.put("books", 12);
                  stock.put("bags", 5);
                  System.out.println(stock);
              }
          }
        `, out: '{bags=5, books=12, pens=40}' },
        { type: 'lines', rows: [
          ['TreeMap<String, Integer> stock', 'Same idea as HashMap, but keys stay in order.'],
          ['System.out.println(stock);', 'A map prints as <code>{key=value, key=value}</code>. Keys are alphabetical: bags, books, pens.']
        ], ar: 'الخريطة تُطبع بالشكل {مفتاح=قيمة}.' },
        { type: 'check', q: 'Which class prints its keys in alphabetical order?', options: ['HashMap', 'TreeMap', 'ArrayList', 'HashSet'], answer: 1, explain: 'TreeMap keeps keys sorted.' },
        { type: 'h', en: 'Visiting every pair' },
        { type: 'p', en: '<code>keySet()</code> gives all the keys. Loop over it with for-each and call <code>get(key)</code> for each value.' },
        { type: 'code', run: true, code: J`
          import java.util.TreeMap;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<String, Integer> stock = new TreeMap<>();
                  stock.put("pens", 40);
                  stock.put("books", 12);
                  for (String k : stock.keySet()) {
                      System.out.println(k + " -> " + stock.get(k));
                  }
              }
          }
        `, out: J`
          books -> 12
          pens -> 40
        ` },
        { type: 'lines', rows: [
          ['stock.keySet()', 'The set of keys: books, pens (in order for a TreeMap).'],
          ['for (String k : stock.keySet())', 'k becomes books, then pens.'],
          ['stock.get(k)', 'The value that belongs to the current key.']
        ], ar: 'نمر على المفاتيح ونقرأ القيمة بـ get.' },
        { type: 'p', en: 'There is a second way: <code>entrySet()</code> gives whole pairs called <code>Map.Entry</code>. Each entry has <code>getKey()</code> and <code>getValue()</code>.' },
        { type: 'code', code: J`
          for (Map.Entry<String, Integer> e : stock.entrySet()) {
              System.out.println(e.getKey() + " = " + e.getValue());
          }
        ` },
        { type: 'check', q: 'Which method gives you all the keys of a map?', options: ['keys()', 'keySet()', 'getKeys()', 'allKeys'], answer: 1, explain: 'The method is keySet().' },
        { type: 'h', en: 'The counting pattern' },
        { type: 'p', en: 'A very common job: count how many times each word appears. Use the word as the key and the count as the value. The line <code>counts.put(w, counts.getOrDefault(w, 0) + 1)</code> works for the first time (0 + 1) and for every later time.' },
        { type: 'analogy', title: 'Tally marks', en: 'On a board you keep a row for each word. Each time you hear the word, you add one tally mark in its row. A new word starts at 0 and becomes 1.' },
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
              }
          }
        `, out: '{and=2, bird=1, cat=1, dog=1, the=3}' },
        { type: 'table', head: ['Word read', 'getOrDefault(w, 0)', 'New count stored'], rows: [
          ['the', '0 (new word)', '1'],
          ['cat', '0', '1'],
          ['and', '0', '1'],
          ['the', '1', '2'],
          ['dog', '0', '1'],
          ['and', '1', '2'],
          ['the', '2', '3'],
          ['bird', '0', '1']
        ] },
        { type: 'lines', rows: [
          ['text.split(" ")', 'Cut the text into an array of words at every space.'],
          ['for (String w : ...)', 'Visit each word.'],
          ['counts.getOrDefault(w, 0) + 1', 'The old count (or 0 if new) plus one.']
        ], ar: 'نزيد العدّاد بمقدار 1 لكل كلمة.' },
        { type: 'check', q: 'A word appears for the first time. What does <code>counts.getOrDefault(w, 0) + 1</code> give?', options: ['0', '1', 'null', 'An error'], answer: 1, explain: 'The default 0 is used, so 0 + 1 = 1.' },
        { type: 'steps', title: 'Worked example: counting votes', problem: 'Read n votes (candidate names). Print each candidate and the number of votes, in alphabetical order.', steps: [
          { en: 'Make a TreeMap so the keys are sorted.', code: J`
            TreeMap<String, Integer> votes = new TreeMap<>();
            int n = in.nextInt();
          ` },
          { en: 'For each vote, add 1 to the candidate count.', code: J`
            for (int i = 0; i < n; i++) {
                String name = in.next();
                votes.put(name, votes.getOrDefault(name, 0) + 1);
            }
          ` },
          { en: 'Print each candidate with the number of votes.', code: J`
            for (String k : votes.keySet()) {
                System.out.println(k + ": " + votes.get(k));
            }
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  TreeMap<String, Integer> votes = new TreeMap<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      String name = in.next();
                      votes.put(name, votes.getOrDefault(name, 0) + 1);
                  }
                  for (String k : votes.keySet()) {
                      System.out.println(k + ": " + votes.get(k));
                  }
              }
          }
        `, stdin: '5\nali sara ali omar ali', out: J`
          ali: 3
          omar: 1
          sara: 1
        `, ar: 'نمط العدّ: getOrDefault(k,0)+1.' }
      ],
      mistakes: [
        { title: 'Printing a HashMap and expecting an order', en: 'Use a TreeMap when the printed order matters.', code: 'System.out.println(hashMap);' },
        { title: 'Counting with put(w, 1)', en: 'This resets the count to 1 each time.', code: 'counts.put(w, 1);' },
        { title: 'Using get without a default in counting', en: 'For a new word get returns null and the addition crashes.', code: 'counts.put(w, counts.get(w) + 1);' },
        { title: 'Looping over the map itself', en: 'You cannot write for-each over a map. Loop over keySet() or entrySet().', code: 'for (String k : counts) { }' }
      ],
      remember: [
        '<code>TreeMap</code> = a map with sorted keys; use it when you print.',
        'A map prints like <code>{a=1, b=2}</code>.',
        'Loop over <code>keySet()</code> and call <code>get(key)</code>.',
        '<code>entrySet()</code> gives pairs with <code>getKey()</code> and <code>getValue()</code>.',
        'Counting pattern: <code>m.put(k, m.getOrDefault(k, 0) + 1)</code>.'
      ],
      rememberAr: 'TreeMap مفاتيحها مرتبة. نمر على keySet ونستخدم get. وللعدّ نستخدم put(k, getOrDefault(k,0)+1).',
      practice: [
        { t: 'mcq', q: 'What is the main difference between HashMap and TreeMap?', options: ['TreeMap keeps its keys sorted', 'TreeMap allows duplicate keys', 'HashMap cannot use Strings', 'There is no difference'], answer: 0, explain: 'TreeMap sorts keys. HashMap has no reliable order.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.TreeMap;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<String, Integer> m = new TreeMap<>();
                  m.put("b", 2);
                  m.put("a", 1);
                  for (String k : m.keySet()) {
                      System.out.println(k + " " + m.get(k));
                  }
              }
          }
        `, answer: J`
          a 1
          b 2
        `, explain: 'A TreeMap visits its keys in sorted order: a, then b.' },
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
        `, explain: 'The map prints sorted. pens becomes 40 - 15 = 25. rulers is missing so the default 0 is used.' },
        { t: 'fill', q: 'Complete the word counter and the loop.', code: J`
          for (String w : words) {
              counts.put(w, counts.___(w, 0) + 1);
          }
          for (String k : counts.___()) {
              System.out.println(k + " " + counts.get(k));
          }
        `, answers: ['getOrDefault', 'keySet'], explain: 'getOrDefault gives 0 for a new word; keySet gives all keys.' },
        { t: 'order', q: 'Put the lines in order: count the words in a String array.', lines: [
          'TreeMap<String, Integer> counts = new TreeMap<>();',
          'for (String w : words) {',
          '    counts.put(w, counts.getOrDefault(w, 0) + 1);',
          '}',
          'System.out.println(counts);'
        ], explain: 'Make the map, loop over the words, count, print.' },
        { t: 'mcq', q: 'What is stored for the key "a" after processing the words a a b a (counting pattern)?', options: ['1', '2', '3', '4'], answer: 2, explain: 'The word a appears three times.' },
        { t: 'code', q: 'Read words (separated by spaces) until the end of input. Print each different word and how many times it appears, one per line as <code>word count</code>, in alphabetical order. No prompts.', qAr: 'اقرأ الكلمات حتى نهاية الإدخال واطبع كل كلمة مع عدد مرات ظهورها بترتيب أبجدي.', starter: J`
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
                  for (String k : counts.keySet()) {
                      System.out.println(k + " " + counts.get(k));
                  }
              }
          }
        `, hint: 'while (in.hasNext()) { String w = in.next(); ... } then loop over keySet().', explain: 'hasNext() is false at the end of the input, which ends the loop.' }
      ]
    },

    // ---------------------------------------------------------------- L10
    {
      title: 'PriorityQueue: the most urgent first',
      titleAr: 'PriorityQueue: الأهم أولاً',
      minutes: 25,
      body: [
        { type: 'h', en: 'A queue with priorities' },
        { type: 'p', en: 'A normal queue is first come, first served. But in a hospital the most urgent patient is served first, even if they arrived last. A <code>PriorityQueue</code> works like that: whatever order you add things in, it always gives you the <b>smallest</b> item first (numbers go from small to large, Strings alphabetically).', ar: 'طابور الأولوية يعطيك دائماً العنصر الأصغر أولاً.' },
        { type: 'analogy', title: 'The emergency room', en: 'Patients get a number: 1 is the most urgent. The doctor always calls the smallest number next, not the person who waited longest.' },
        { type: 'table', head: ['Method', 'Meaning', 'Empty queue'], rows: [
          ['<code>offer(x)</code>', 'Put x in the queue', '-'],
          ['<code>peek()</code>', 'Look at the smallest, do not remove', 'null'],
          ['<code>poll()</code>', 'Take out and return the smallest', 'null'],
          ['<code>size()</code>, <code>isEmpty()</code>', 'How many / is it empty', '-']
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
              }
          }
        `, out: J`
          Peek: 10
          Size: 4
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['pq.offer(40);', 'Put 40 in. We add four numbers in a mixed order.'],
          ['pq.peek()', 'Look at the smallest without removing it: 10.'],
          ['pq.size()', 'Nothing was removed, so the size is still 4.']
        ], ar: 'peek تنظر ولا تحذف، وpoll تحذف الأصغر وتعيده.' },
        { type: 'check', q: 'You offer 8, 3, 5. What does <code>peek()</code> return?', options: ['8', '3', '5', 'null'], answer: 1, explain: 'The smallest value is 3.' },
        { type: 'h', en: 'poll: take out the smallest each time' },
        { type: 'p', en: 'Each <code>poll()</code> removes the smallest item. If you poll again and again you get all items from the smallest to the largest. On an empty queue, <code>poll()</code> returns <code>null</code>.' },
        { type: 'code', run: true, code: J`
          import java.util.PriorityQueue;

          public class Main {
              public static void main(String[] args) {
                  PriorityQueue<Integer> pq = new PriorityQueue<>();
                  pq.offer(40);
                  pq.offer(10);
                  pq.offer(30);
                  while (!pq.isEmpty()) {
                      System.out.println(pq.poll());
                  }
                  System.out.println(pq.poll());
              }
          }
        `, out: J`
          10
          30
          40
          null
        ` },
        { type: 'lines', rows: [
          ['while (!pq.isEmpty())', 'Repeat while the queue still has items.'],
          ['pq.poll()', 'Remove and print the smallest: 10, then 30, then 40.'],
          ['pq.poll()  // at the end', 'The queue is empty now, so the answer is null.']
        ], ar: 'poll المتكررة تعطي القيم من الأصغر للأكبر.' },
        { type: 'note', kind: 'exam', en: 'Never print the queue itself (<code>System.out.println(pq)</code>) or loop over it with for-each to see the priority order. Only the head is guaranteed to be the smallest. To get the right order, use <code>poll()</code> repeatedly.', ar: 'لا تطبع الطابور مباشرة؛ استخدم poll.' },
        { type: 'h', en: 'Largest first: reverseOrder' },
        { type: 'p', en: 'What if the biggest number should come first, like the highest bid in an auction? Give the queue a reversed order: <code>new PriorityQueue&lt;&gt;(Collections.reverseOrder())</code>. You need <code>import java.util.*;</code>.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  PriorityQueue<Integer> bids = new PriorityQueue<>(Collections.reverseOrder());
                  bids.offer(250);
                  bids.offer(400);
                  bids.offer(300);
                  System.out.println(bids.poll());
                  System.out.println(bids.poll());
              }
          }
        `, out: J`
          400
          300
        ` },
        { type: 'check', q: 'Which queue gives the HIGHEST number first?', options: ['new PriorityQueue<>()', 'new PriorityQueue<>(Collections.reverseOrder())', 'new LinkedList<>()', 'Both of the first two'], answer: 1, explain: 'reverseOrder flips the order, so the largest comes out first.' },
        { type: 'steps', title: 'Worked example: urgent tasks', problem: 'Read n task priorities (smaller number = more urgent). Print them in the order they will be done.', steps: [
          { en: 'Create the queue and read n.', code: J`
            PriorityQueue<Integer> tasks = new PriorityQueue<>();
            int n = in.nextInt();
          ` },
          { en: 'Offer every priority number.', code: J`
            for (int i = 0; i < n; i++) {
                tasks.offer(in.nextInt());
            }
          ` },
          { en: 'Poll until empty, collecting the numbers in a line of text.', code: J`
            String line = "";
            while (!tasks.isEmpty()) {
                line += tasks.poll() + " ";
            }
          ` },
          { en: 'Print the line without the last space.', code: 'System.out.println(line.trim());' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  PriorityQueue<Integer> tasks = new PriorityQueue<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      tasks.offer(in.nextInt());
                  }
                  String line = "";
                  while (!tasks.isEmpty()) {
                      line += tasks.poll() + " ";
                  }
                  System.out.println(line.trim());
              }
          }
        `, stdin: '5\n40 10 30 20 50', out: '10 20 30 40 50', ar: 'نخرج المهام من الأصغر للأكبر بـ poll.' }
      ],
      mistakes: [
        { title: 'Printing the queue to see the order', en: 'The printed order is not sorted. Only the head is the smallest.', code: 'System.out.println(pq);' },
        { title: 'Using for-each to get sorted order', en: 'for-each does not follow priority order. Use poll().', code: 'for (int x : pq) { System.out.println(x); }' },
        { title: 'Thinking peek removes', en: 'peek only looks. The size does not change.', code: 'pq.peek();' },
        { title: 'Forgetting reverseOrder', en: 'The default gives the smallest first, not the biggest.', code: 'new PriorityQueue<>();   // smallest first' }
      ],
      remember: [
        'A PriorityQueue always gives the smallest item first.',
        '<code>offer</code> adds, <code>peek</code> looks, <code>poll</code> removes the smallest.',
        '<code>poll()</code> and <code>peek()</code> return <code>null</code> on an empty queue.',
        'Use <code>Collections.reverseOrder()</code> for the largest first.',
        'Get sorted order with repeated <code>poll()</code>, never by printing.'
      ],
      rememberAr: 'PriorityQueue تعطي الأصغر أولاً. offer للإضافة وpeek للنظر وpoll للإخراج. استخدم reverseOrder للأكبر أولاً.',
      practice: [
        { t: 'mcq', q: 'What does <code>poll()</code> return on an EMPTY PriorityQueue?', options: ['0', 'null', 'An exception is thrown', 'The last item'], answer: 1, explain: 'poll and peek return null when the queue is empty.', explainAr: 'تعيد null.' },
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
        `, explain: 'poll removes 2, then 4. peek shows 7 without removing it.' },
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
        `, explain: 'Strings come out alphabetically. peek shows Kiwi but does not remove it; Kiwi and Mango remain.' },
        { t: 'fill', q: 'Serve the highest bid first.', code: J`
          PriorityQueue<Integer> bids = new PriorityQueue<>(Collections.___());
          bids.___(250);
          bids.___(400);
          System.out.println(bids.___());   // prints 400
        `, answers: ['reverseOrder', 'offer', 'offer', 'poll'], explain: 'reverseOrder puts the largest first; offer inserts; poll removes the head.' },
        { t: 'mcq', q: 'Which is the right way to print all items in priority order?', options: ['System.out.println(pq);', 'for (int x : pq) { print x }', 'while (!pq.isEmpty()) { print pq.poll() }', 'pq.sort()'], answer: 2, explain: 'Only repeated poll() guarantees the priority order.' },
        { t: 'code', q: 'Read <code>n</code> (at least 3) and then <code>n</code> integers. Print the three smallest numbers, one per line, using a PriorityQueue. No prompts.', qAr: 'اطبع أصغر ثلاثة أعداد، كل عدد في سطر، باستخدام PriorityQueue.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  PriorityQueue<Integer> pq = new PriorityQueue<>();
                  // offer all numbers, then poll three times
              }
          }
        `, tests: [{ stdin: '5\n9 4 7 1 8', expected: J`
          1
          4
          7
        ` }, { stdin: '3\n3 2 1', expected: J`
          1
          2
          3
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  PriorityQueue<Integer> pq = new PriorityQueue<>();
                  for (int i = 0; i < n; i++) {
                      pq.offer(in.nextInt());
                  }
                  for (int i = 0; i < 3; i++) {
                      System.out.println(pq.poll());
                  }
              }
          }
        `, hint: 'Offer all n numbers in one loop, then poll three times in a second loop.', explain: 'Each poll gives the next smallest value.' }
      ]
    },
    // ---------------------------------------------------------------- L11
    {
      title: 'The Collections helper class',
      titleAr: 'الصنف المساعد Collections',
      minutes: 25,
      body: [
        { type: 'h', en: 'Ready-made tools for lists' },
        { type: 'p', en: 'You met <code>Arrays</code> for arrays. For lists there is a similar helper class named <code>Collections</code> (with an <b>s</b>). It has static methods, so you call them on the class name: <code>Collections.sort(list)</code>. You need <code>import java.util.*;</code>.', ar: 'Collections صنف مساعد للقوائم، ودوالّه ساكنة.' },
        { type: 'analogy', title: 'A toolbox', en: 'The Arrays toolbox is for plain arrays. The Collections toolbox is for lists. Same idea, different box.' },
        { type: 'table', head: ['Method', 'What it does'], rows: [
          ['<code>Collections.sort(list)</code>', 'Sort in ascending order'],
          ['<code>Collections.max(list)</code>', 'The biggest item'],
          ['<code>Collections.min(list)</code>', 'The smallest item'],
          ['<code>Collections.reverse(list)</code>', 'Flip the order of the list'],
          ['<code>Collections.shuffle(list)</code>', 'Random order (different every run)']
        ] },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> temps = new ArrayList<>();
                  temps.add(31);
                  temps.add(45);
                  temps.add(28);
                  temps.add(39);
                  System.out.println("Max: " + Collections.max(temps));
                  System.out.println("Min: " + Collections.min(temps));
                  Collections.sort(temps);
                  System.out.println(temps);
              }
          }
        `, out: J`
          Max: 45
          Min: 28
          [28, 31, 39, 45]
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['Collections.max(temps)', 'Looks at all the temperatures and returns the biggest: 45.'],
          ['Collections.min(temps)', 'The smallest: 28. The list is not changed by max or min.'],
          ['Collections.sort(temps);', 'Changes the list itself into ascending order.']
        ], ar: 'max وmin لا تغيران القائمة، أما sort فتغيرها.' },
        { type: 'check', q: 'After <code>Collections.sort(list)</code> on <code>[3, 1, 2]</code>, what is the list?', options: ['[3, 1, 2]', '[1, 2, 3]', '[3, 2, 1]', '[2, 1, 3]'], answer: 1, explain: 'sort puts the items in ascending order.' },
        { type: 'h', en: 'reverse and descending order' },
        { type: 'p', en: '<code>reverse</code> flips the list. To sort from the largest to the smallest, give <code>sort</code> a second argument: <code>Collections.sort(list, Collections.reverseOrder())</code>.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> team = new ArrayList<>();
                  team.add("Omar");
                  team.add("Aisha");
                  team.add("Zaid");
                  Collections.sort(team);
                  System.out.println(team);
                  Collections.reverse(team);
                  System.out.println(team);
                  Collections.sort(team, Collections.reverseOrder());
                  System.out.println(team);
              }
          }
        `, out: J`
          [Aisha, Omar, Zaid]
          [Zaid, Omar, Aisha]
          [Zaid, Omar, Aisha]
        ` },
        { type: 'lines', rows: [
          ['Collections.sort(team);', 'Alphabetical: Aisha, Omar, Zaid.'],
          ['Collections.reverse(team);', 'Flip it: Zaid, Omar, Aisha.'],
          ['Collections.sort(team, Collections.reverseOrder());', 'Sorted from Z to A. Same result here.']
        ], ar: 'reverseOrder تعطي ترتيباً تنازلياً.' },
        { type: 'h', en: 'binarySearch and shuffle' },
        { type: 'p', en: '<code>Collections.binarySearch(list, key)</code> follows the same rules as <code>Arrays.binarySearch</code>: the list must be sorted first, and a negative result means "not found". <code>Collections.shuffle(list)</code> mixes the list randomly: great for a card game, but you can never predict the result.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> list = new ArrayList<>();
                  list.add(28);
                  list.add(31);
                  list.add(39);
                  list.add(45);
                  System.out.println(Collections.binarySearch(list, 39));
                  System.out.println(Collections.binarySearch(list, 40));
                  Collections.shuffle(list);
                  System.out.println(list.size());
              }
          }
        `, out: J`
          2
          -4
          4
        ` },
        { type: 'lines', rows: [
          ['Collections.binarySearch(list, 39)', '39 is at index 2.'],
          ['Collections.binarySearch(list, 40)', '40 would be inserted at index 3, so -(3) - 1 = -4.'],
          ['Collections.shuffle(list);', 'The order is random now, but the size is still 4.']
        ], ar: 'shuffle تخلط القائمة عشوائياً.' },
        { type: 'check', q: 'What is the difference between <code>Collection</code> and <code>Collections</code>?', options: ['None', 'Collection is an interface (List and Set are collections); Collections is a helper class', 'Collections is an interface', 'Collection is a helper class'], answer: 1, explain: 'Collection (no s) is the interface; Collections (with s) is the toolbox.' },
        { type: 'steps', title: 'Worked example: statistics', problem: 'Read n temperatures. Print them sorted, then the maximum and the minimum.', steps: [
          { en: 'Make the list and read n.', code: J`
            ArrayList<Integer> temps = new ArrayList<>();
            int n = in.nextInt();
          ` },
          { en: 'Read the temperatures into the list.', code: J`
            for (int i = 0; i < n; i++) {
                temps.add(in.nextInt());
            }
          ` },
          { en: 'Sort the list and print it.', code: J`
            Collections.sort(temps);
            System.out.println("Sorted: " + temps);
          ` },
          { en: 'Print the maximum and the minimum.', code: J`
            System.out.println("Max: " + Collections.max(temps));
            System.out.println("Min: " + Collections.min(temps));
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  ArrayList<Integer> temps = new ArrayList<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      temps.add(in.nextInt());
                  }
                  Collections.sort(temps);
                  System.out.println("Sorted: " + temps);
                  System.out.println("Max: " + Collections.max(temps));
                  System.out.println("Min: " + Collections.min(temps));
              }
          }
        `, stdin: '5\n31 45 28 39 42', out: J`
          Sorted: [28, 31, 39, 42, 45]
          Max: 45
          Min: 28
        `, ar: 'نرتب القائمة ثم نطبع الأكبر والأصغر.' }
      ],
      mistakes: [
        { title: 'Calling sort on the list', en: 'The sorting helper is on the class Collections.', code: 'temps.sort();   // not what we want here' },
        { title: 'Sorting an array with Collections', en: 'Collections works on lists. For arrays use <code>Arrays.sort</code>.', code: J`
          int[] a = {3, 1};
          Collections.sort(a);   // error
        ` },
        { title: 'binarySearch on an unsorted list', en: 'Sort first, otherwise the answer is unreliable.', code: 'Collections.binarySearch(unsortedList, 5);' },
        { title: 'Predicting shuffle', en: 'shuffle is random. You cannot know the order, so never use it in an expected output.', code: 'Collections.shuffle(list);' }
      ],
      remember: [
        '<code>Collections</code> (with s) is the helper class for lists; <code>Collection</code> is the interface.',
        '<code>sort</code>, <code>max</code>, <code>min</code>, <code>reverse</code>, <code>shuffle</code>, <code>binarySearch</code>.',
        '<code>max</code> and <code>min</code> do not change the list; <code>sort</code> and <code>reverse</code> do.',
        'Descending: <code>Collections.sort(list, Collections.reverseOrder())</code>.',
        'Sort before <code>binarySearch</code>.'
      ],
      rememberAr: 'Collections صنف مساعد للقوائم: sort وmax وmin وreverse وshuffle وbinarySearch. للترتيب التنازلي استخدم reverseOrder.',
      practice: [
        { t: 'mcq', q: 'Which call finds the biggest item of a list called <code>marks</code>?', options: ['marks.max()', 'Collections.max(marks)', 'Arrays.max(marks)', 'Collections.big(marks)'], answer: 1, explain: 'Collections.max(list) returns the biggest item.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> a = new ArrayList<>();
                  a.add(5);
                  a.add(1);
                  a.add(3);
                  Collections.sort(a);
                  System.out.println(a);
              }
          }
        `, answer: '[1, 3, 5]', explain: 'sort puts them in ascending order.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> team = new ArrayList<>();
                  team.add("Omar");
                  team.add("Aisha");
                  team.add("Zaid");
                  team.add("Bader");
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
        `, explain: 'Alphabetical order, so Zaid is the largest and Aisha the smallest. reverse flips the sorted list.' },
        { t: 'fill', q: 'Sort the list from the largest to the smallest.', code: J`
          Collections.___(marks, Collections.___());
        `, answers: ['sort', 'reverseOrder'], explain: 'sort with a second argument reverseOrder() gives descending order.' },
        { t: 'mcq', q: 'Which statement about <code>Collections.binarySearch(list, key)</code> is correct?', options: ['It works on any list, sorted or not', 'The list must be sorted first', 'It sorts the list and then searches', 'It only works on a LinkedList'], answer: 1, explain: 'Like Arrays.binarySearch, it needs a sorted list.' },
        { t: 'code', q: 'Read <code>n</code> and then <code>n</code> integers into an ArrayList. Print the list sorted from the largest to the smallest (list format). No prompts.', qAr: 'اطبع القائمة مرتبة تنازلياً.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Integer> list = new ArrayList<>();
                  // read, sort descending, print
              }
          }
        `, tests: [{ stdin: '4\n3 9 1 5', expected: '[9, 5, 3, 1]' }, { stdin: '1\n7', expected: '[7]' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Integer> list = new ArrayList<>();
                  for (int i = 0; i < n; i++) {
                      list.add(in.nextInt());
                  }
                  Collections.sort(list, Collections.reverseOrder());
                  System.out.println(list);
              }
          }
        `, hint: 'Collections.sort(list, Collections.reverseOrder());', explain: 'The second argument reverses the sort order.' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'Which declaration compiles?', options: ['ArrayList&lt;int&gt; a = new ArrayList&lt;&gt;();', 'ArrayList&lt;Integer&gt; a = new ArrayList&lt;&gt;();', 'ArrayList a = new ArrayList&lt;int&gt;();', 'ArrayList&lt;Integer&gt; a = new ArrayList[10];'], answer: 1, explain: 'Type arguments must be classes, so we use Integer instead of int.' },
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
    `, answer: '[30]', explain: 'remove(1) removes the item at index 1 (20), leaving [10, 30]. Then the value 10 is removed, leaving [30].' },
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
    `, explain: '6 is at index 2. 5 would go at index 2 so the result is -(2) - 1 = -3.' },
    { t: 'mcq', q: 'A HashMap already maps "Ali" to 70. What happens after <code>map.put("Ali", 85)</code>?', options: ['The map holds two entries for Ali', 'The value for Ali becomes 85', 'An exception is thrown', 'The put is ignored'], answer: 1, explain: 'Keys are unique, so put replaces the value.' },
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
    `, explain: 'poll removes the smallest each time: 2, then 4. peek shows 7.' },
    { t: 'mcq', q: 'Which of these does <b>not</b> guarantee any printing order?', options: ['ArrayList', 'TreeSet', 'HashSet', 'LinkedList'], answer: 2, explain: 'Lists keep insertion order and TreeSet keeps sorted order. HashSet has no guaranteed order.' },
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
    `, explain: 'The repeated "pear" is dropped and a TreeSet is sorted alphabetically.' },
    { t: 'mcq', q: 'What is the result of this code?', code: J`
      ArrayList<String> names = new ArrayList<>(Arrays.asList("Bandar", "Amal", "Ceren"));
      for (String n : names) {
          if (n.startsWith("B")) {
              names.remove(n);
          }
      }
    `, options: ['names becomes [Amal, Ceren]', 'Compilation error', 'ConcurrentModificationException is thrown', 'Infinite loop'], answer: 2, explain: 'Removing with the list while a for-each loop is running is not allowed. Use Iterator.remove().' },
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
    `, explain: 'After two next() calls the cursor is between 2 and 3. previous() returns 2 again.' },
    { t: 'mcq', q: 'Your program inserts thousands of items at the <b>front</b> of a list. Which class is most efficient?', options: ['ArrayList', 'LinkedList', 'int[]', 'Arrays.asList'], answer: 1, explain: 'A LinkedList adds at the front by linking one node; an ArrayList must shift every item.' }
  ],
  lab: {
    t: 'code',
    q: '<b>Grade book.</b> Read an integer <code>n</code>, then <code>n</code> lines. Each line has a student name (one word, all names different) and an integer score. Print these lines, in this order:<br>1) every student as <code>name: score</code>, in alphabetical order of name;<br>2) <code>Sorted scores: </code> followed by the list of scores in ascending order, for example <code>[55, 70, 88]</code>;<br>3) <code>Highest: </code> and the highest score;<br>4) <code>Passed: </code> and how many scores are 60 or more.<br>Hints: use a <code>TreeMap</code> for the names, an <code>ArrayList</code> for the scores and the <code>Collections</code> class. Do not print prompts.',
    qAr: 'اقرأ أسماء الطلاب ودرجاتهم، واطبعهم مرتبين أبجدياً، ثم الدرجات مرتبة، ثم أعلى درجة، ثم عدد الناجحين (60 فأكثر).',
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
              for (String k : book.keySet()) {
                  System.out.println(k + ": " + book.get(k));
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
    hint: 'Step 1: loop n times, read a name and a score, put the pair in the TreeMap and add the score to the list. Step 2: loop over keySet(). Step 3: Collections.sort, Collections.max, and a counter for scores of 60 or more.',
    explain: 'The TreeMap gives alphabetical order for free, the ArrayList holds the scores for Collections.sort and Collections.max, and a simple loop counts the passes.'
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
    { code: J`set.add(x); set.contains(x); set.size();`, note: 'Set: no repeats; add returns false for a repeat' },
    { code: J`map.put(k, map.getOrDefault(k, 0) + 1);`, note: 'Counting pattern' },
    { code: J`for (String k : map.keySet()) { map.get(k); }`, note: 'Loop over keys and read the values' },
    { code: J`pq.offer(x); pq.peek(); pq.poll();`, note: 'PriorityQueue: smallest first; null when empty' },
    { code: J`Collections.sort(l); Collections.max(l); Collections.reverse(l);`, note: 'List utilities (also min, shuffle, binarySearch)' }
  ],
  glossary: [
    { term: 'Collection', ar: 'مجموعة', def: 'An object that groups many items, such as a list, a set or a queue.' },
    { term: 'Dynamic array', ar: 'مصفوفة ديناميكية', def: 'A list that grows by itself when it becomes full (ArrayList).' },
    { term: 'Wrapper class', ar: 'صنف مُغلِّف', def: 'A class such as Integer or Double that holds a simple value as an object.' },
    { term: 'Autoboxing', ar: 'التغليف التلقائي', def: 'Java automatically turns an int into an Integer (and back, which is called unboxing).' },
    { term: 'Index', ar: 'الفهرس', def: 'The position number of an item in a list or array. The first index is 0.' },
    { term: 'Linked list', ar: 'قائمة مترابطة', def: 'A list made of nodes where each node links to the next one.' },
    { term: 'Node', ar: 'عقدة', def: 'One link in a chain; it holds one item and points to its neighbours.' },
    { term: 'Set', ar: 'مجموعة بلا تكرار', def: 'A collection that never contains the same value twice.' },
    { term: 'TreeSet / TreeMap', ar: 'مجموعة/خريطة مرتبة', def: 'A set or map that keeps its values or keys in sorted order.' },
    { term: 'Map', ar: 'خريطة (قاموس)', def: 'A collection of key and value pairs where each key is unique.' },
    { term: 'Key and value', ar: 'المفتاح والقيمة', def: 'In a map, the key is what you look up and the value is the answer you get.' },
    { term: 'Priority queue', ar: 'طابور أولوية', def: 'A queue that always gives the smallest item first (unless you reverse the order).' },
    { term: 'Iterator', ar: 'مُكرِّر', def: 'An object that visits the items of a collection one by one using hasNext and next.' },
    { term: 'ListIterator', ar: 'مُكرِّر القائمة', def: 'An iterator for lists that can also move backward and replace items.' },
    { term: 'Binary search', ar: 'البحث الثنائي', def: 'A fast search on sorted data that throws away half of the data at each step.' }
  ]
});

