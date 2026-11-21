JP.unit({
  course: 'cs102',
  key: 5,
  n: 7,
  title: 'Java Collections Framework',
  titleAr: 'إطار المجموعات في جافا',
  intro: 'An array has a fixed size, but real programs need lists that grow and shrink, sets without repeats, and maps that find a value from a key. Java gives you ready-made tools for this: ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap, PriorityQueue and ArrayDeque (for stacks and queues). In this unit you meet them one small step at a time, learn to choose the right one, and finish by rebuilding a course registration system with them.',
  introAr: 'المصفوفة ثابتة الحجم، لكن البرامج الحقيقية تحتاج قوائم تكبر وتصغر، ومجموعات بلا تكرار، وخرائط تجد القيمة من المفتاح، وطوابير ومكدسات. في هذه الوحدة نتعرف على هذه الأدوات خطوة صغيرة بعد خطوة، ونتعلم اختيار المناسب منها، ثم نبني بها نظام تسجيل مقررات.',
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
        { type: 'p', en: 'Here is a real situation. The registration office makes an array for 30 students in your section. During the add and drop week, a 31st student joins. The array has no room. The program must make a new, bigger array and copy all 30 names into it, one by one. This lesson reviews arrays and the ready-made <code>Arrays</code> helper class, so that later you can see clearly what the new tools do better.' },
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
        ], ar: '{{g:استخدم|استخدمي}} Arrays.toString لطباعة المصفوفة بشكل مقروء.' },
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
        { type: 'p', en: '<code>Arrays.sort</code> also works on an array of Strings. Strings are sorted in alphabetical order, like the names in a class register.' },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  String[] names = {"Omar", "Aisha", "Khalid", "Bader"};
                  Arrays.sort(names);
                  System.out.println(Arrays.toString(names));
              }
          }
        `, out: '[Aisha, Bader, Khalid, Omar]' },
        { type: 'note', kind: 'exam', en: 'Java sorts Strings by the codes of their letters, and every capital letter comes before every small letter. So <code>"Zaid"</code> comes before <code>"ali"</code>. Write names in the same style (first letter capital) to get the order you expect.', ar: 'الحروف الكبيرة تأتي قبل الصغيرة في الترتيب.' },
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
        { type: 'h', en: 'Growing an array by hand: Arrays.copyOf' },
        { type: 'p', en: 'Back to the late student. An array cannot grow, so we make a <b>new</b> array that is one box bigger and copy the old values into it. <code>Arrays.copyOf(array, newLength)</code> does the copying for you. The new boxes at the end start with 0.', ar: 'لا يمكن تكبير المصفوفة، لذلك ننشئ مصفوفة أكبر وننسخ القيم إليها بـ Arrays.copyOf.' },
        { type: 'analogy', title: 'Moving to a bigger tray', en: 'You buy a tray with 7 holes, move the 6 eggs into it, and throw the old tray away. Now there is one empty hole for the new egg.' },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] marks = {80, 91, 67};
                  int[] bigger = Arrays.copyOf(marks, 4);
                  marks = bigger;
                  marks[3] = 75;
                  System.out.println(Arrays.toString(marks));
              }
          }
        `, out: '[80, 91, 67, 75]' },
        { type: 'lines', rows: [
          ['int[] bigger = Arrays.copyOf(marks, 4);', 'Make a NEW array with 4 boxes. Copy 80, 91, 67 into the first three. The 4th box gets 0.'],
          ['marks = bigger;', 'Now the name <code>marks</code> points to the new array. Nobody points to the old one any more.'],
          ['marks[3] = 75;', 'Put the late mark in the new, empty box.']
        ], ar: 'المتغير marks صار يشير إلى المصفوفة الجديدة الأكبر.' },
        { type: 'memory', title: 'What happens in memory', en: 'An array variable does not hold the boxes. It holds a <b>reference</b> (an arrow) to an array object. Press Next to see the arrow move to the new array.', code: J`
          int[] marks = {80, 91, 67};
          int[] bigger = Arrays.copyOf(marks, 4);
          marks = bigger;
        `, frames: [
          { label: 'After <code>int[] marks = {80, 91, 67};</code>', vars: [{ name: 'marks', type: 'int[]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[3]', fields: [{ name: '[0]', value: '80' }, { name: '[1]', value: '91' }, { name: '[2]', value: '67' }] }
          ] },
          { label: 'After <code>int[] bigger = Arrays.copyOf(marks, 4);</code>', vars: [{ name: 'marks', type: 'int[]', ref: 'A' }, { name: 'bigger', type: 'int[]', ref: 'B' }], objects: [
            { id: 'A', cls: 'int[3]', fields: [{ name: '[0]', value: '80' }, { name: '[1]', value: '91' }, { name: '[2]', value: '67' }] },
            { id: 'B', cls: 'int[4]', fields: [{ name: '[0]', value: '80' }, { name: '[1]', value: '91' }, { name: '[2]', value: '67' }, { name: '[3]', value: '0' }] }
          ] },
          { label: 'After <code>marks = bigger;</code>', vars: [{ name: 'marks', type: 'int[]', ref: 'B' }, { name: 'bigger', type: 'int[]', ref: 'B' }], objects: [
            { id: 'A', cls: 'int[3]', gone: true, fields: [{ name: '[0]', value: '80' }, { name: '[1]', value: '91' }, { name: '[2]', value: '67' }] },
            { id: 'B', cls: 'int[4]', fields: [{ name: '[0]', value: '80' }, { name: '[1]', value: '91' }, { name: '[2]', value: '67' }, { name: '[3]', value: '0' }] }
          ] }
        ], ar: 'المصفوفة القديمة لم يعد يشير إليها أحد فتصبح مهملة.' },
        { type: 'check', q: 'After <code>int[] b = Arrays.copyOf(a, 5);</code> where <code>a</code> is <code>{2, 4}</code>, what is <code>b</code>?', options: ['{2, 4}', '{2, 4, 0, 0, 0}', '{0, 0, 0, 2, 4}', 'An error'], answer: 1, explain: 'The values are copied to the start; the 3 extra boxes start with 0.' },
        { type: 'note', kind: 'tip', en: 'You can write it in one line: <code>marks = Arrays.copyOf(marks, marks.length + 1);</code>. Making a bigger array and copying every value each time something is added is boring work. In Lesson 3, <code>ArrayList</code> does it for you, silently.' },
        { type: 'h', en: 'Comparing two arrays: Arrays.equals' },
        { type: 'p', en: 'A teacher wants to know if the answers of a student are exactly the same as the answer key. You may think of <code>key == answers</code>, but <code>==</code> on two arrays only asks "do both variables point to the <b>same</b> array object?" Two different arrays with the same values give <code>false</code>. <code>Arrays.equals(a, b)</code> compares the values box by box.' },
        { type: 'analogy', title: 'Two copies of one exam paper', en: 'Two students hold two printed copies of the same exam. The papers say the same thing, but they are two different sheets. <code>==</code> asks "is it the same sheet?" <code>Arrays.equals</code> asks "do the sheets say the same thing?"' },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] key = {1, 3, 2, 4};
                  int[] answers = {1, 3, 2, 4};
                  System.out.println(key == answers);
                  System.out.println(Arrays.equals(key, answers));
              }
          }
        `, out: J`
          false
          true
        ` },
        { type: 'lines', rows: [
          ['key == answers', 'Two different array objects, so the arrows are different: <code>false</code>.'],
          ['Arrays.equals(key, answers)', 'Same length and the same value in every box: <code>true</code>.']
        ], ar: '{{g:استخدم|استخدمي}} Arrays.equals لمقارنة القيم، لا ==.' },
        { type: 'check', q: 'Which expression is <code>true</code> when two int arrays hold the same values?', options: ['a == b', 'a.equals(b)', 'Arrays.equals(a, b)', 'a.length == b'], answer: 2, explain: 'Only Arrays.equals compares the values box by box. == and a.equals(b) both compare the references for arrays.' },
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
        `, ar: 'نقرأ القيم ثم نرتبها ثم نطبع أول وآخر عنصر.' },
        { type: 'steps', title: 'Worked example: checking an answer sheet', problem: 'Read n, then the n answers of the key, then the n answers of a student (each answer is a number 1 to 4). Print <code>All correct!</code> if they are the same. Otherwise print how many answers are correct.', steps: [
          { en: 'Read n and make two arrays of the same size.', code: J`
            int n = in.nextInt();
            int[] key = new int[n];
            int[] answers = new int[n];
          ` },
          { en: 'Fill the key first, then the answers of the student, with two loops.', code: J`
            for (int i = 0; i < n; i++) {
                key[i] = in.nextInt();
            }
            for (int i = 0; i < n; i++) {
                answers[i] = in.nextInt();
            }
          ` },
          { en: 'Compare the whole arrays with <code>Arrays.equals</code>, never with <code>==</code>.', code: J`
            if (Arrays.equals(key, answers)) {
                System.out.println("All correct!");
            }
          ` },
          { en: 'In the else part, count the boxes where the two arrays agree.', code: J`
            int correct = 0;
            for (int i = 0; i < n; i++) {
                if (key[i] == answers[i]) {
                    correct++;
                }
            }
            System.out.println("Correct: " + correct + " out of " + n);
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] key = new int[n];
                  int[] answers = new int[n];
                  for (int i = 0; i < n; i++) {
                      key[i] = in.nextInt();
                  }
                  for (int i = 0; i < n; i++) {
                      answers[i] = in.nextInt();
                  }
                  if (Arrays.equals(key, answers)) {
                      System.out.println("All correct!");
                  } else {
                      int correct = 0;
                      for (int i = 0; i < n; i++) {
                          if (key[i] == answers[i]) {
                              correct++;
                          }
                      }
                      System.out.println("Correct: " + correct + " out of " + n);
                  }
              }
          }
        `, stdin: '5\n1 3 2 4 1\n1 3 4 4 2', out: 'Correct: 3 out of 5', ar: 'نقارن المصفوفتين كاملتين بـ Arrays.equals، وإن اختلفتا نعدّ الإجابات الصحيحة.' }
      ],
      mistakes: [
        { title: 'Printing the array directly', en: 'This prints strange text, not the values.', code: 'System.out.println(marks);', ar: '{{g:استخدم|استخدمي}} Arrays.toString.' },
        { title: 'Calling sort on the array', en: 'Arrays are not objects with a sort method. Use the helper class.', code: 'marks.sort();   // error', ar: 'الصحيح Arrays.sort(marks).' },
        { title: 'Forgetting the import', en: 'Without <code>import java.util.Arrays;</code> Java says: cannot find symbol.', code: 'Arrays.sort(marks);   // no import above' },
        { title: 'Using the index length', en: 'The last index is length - 1, not length.', code: 'marks[marks.length] = 5;   // error at run time' }
      ],
      remember: [
        'An array has a fixed size. You cannot add a box later.',
        '<code>Arrays.toString(a)</code> gives readable text for printing.',
        '<code>Arrays.sort(a)</code> puts the values in ascending order.',
        '<code>Arrays.fill(a, v)</code> puts the value v in every box.',
        '<code>Arrays.copyOf(a, n)</code> makes a new, bigger copy; <code>Arrays.equals(a, b)</code> compares the values (never use <code>==</code> for that).',
        'Do not forget <code>import java.util.Arrays;</code> (or <code>java.util.*</code>).'
      ],
      rememberAr: 'المصفوفة ثابتة الحجم. نستخدم Arrays.toString للطباعة وArrays.sort للترتيب وArrays.fill للتعبئة وArrays.copyOf للنسخ إلى مصفوفة أكبر وArrays.equals للمقارنة، ولا ننسى الاستيراد.',
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
        { t: 'code', q: 'Read 4 integers into an array, sort the array and print it with <code>Arrays.toString</code>. No prompts.', qAr: '{{g:اقرأ|اقرئي}} 4 أعداد {{g:ورتّبها|ورتّبيها}} ثم {{g:اطبعها|اطبعيها}}.', starter: J`
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
        `, hint: 'Use a for loop with in.nextInt(), then Arrays.sort(a).', explain: 'Read with a loop, sort, print.' },
        { t: 'bug', q: 'The student wrote exactly the answers of the key, but the program prints <code>Check again</code>. Tap the line with the bug.', qAr: 'الطالب أجاب كل الأسئلة صحيحة لكن البرنامج يطبع Check again. أين الخطأ؟', code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] key = {1, 3, 2, 4};
                  int[] answers = {1, 3, 2, 4};
                  if (key == answers) {
                      System.out.println("Full marks");
                  } else {
                      System.out.println("Check again");
                  }
              }
          }
        `, bug: 7, fix: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] key = {1, 3, 2, 4};
                  int[] answers = {1, 3, 2, 4};
                  if (Arrays.equals(key, answers)) {
                      System.out.println("Full marks");
                  } else {
                      System.out.println("Check again");
                  }
              }
          }
        `, hint: 'How do you compare the VALUES of two arrays?', explain: '<code>key</code> and <code>answers</code> are two different array objects, so <code>key == answers</code> is false even though the values match. <code>Arrays.equals</code> compares the values box by box and gives true.', explainAr: 'المقارنة بـ == تقارن المراجع لا القيم. {{g:استخدم|استخدمي}} Arrays.equals.' },
        { t: 'output', q: 'What does this program print? (Watch which array changes.)', code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] a = {5, 8};
                  int[] b = Arrays.copyOf(a, 4);
                  b[0] = 9;
                  System.out.println(Arrays.toString(a));
                  System.out.println(Arrays.toString(b));
                  System.out.println(b.length);
              }
          }
        `, answer: J`
          [5, 8]
          [9, 8, 0, 0]
          4
        `, explain: 'copyOf makes a NEW array with 4 boxes: [5, 8, 0, 0]. Changing b[0] changes only the new array, so a is still [5, 8].', explainAr: 'النسخة مصفوفة جديدة مستقلة، فتغييرها لا يغير الأصل.' },
        { t: 'bug', q: 'This program should print the total of the marks, but it crashes. Tap the line with the bug.', code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] marks = {70, 85, 90};
                  int total = 0;
                  for (int i = 0; i <= marks.length; i++) {
                      total += marks[i];
                  }
                  System.out.println("Total: " + total);
              }
          }
        `, bug: 5, fix: J`
          public class Main {
              public static void main(String[] args) {
                  int[] marks = {70, 85, 90};
                  int total = 0;
                  for (int i = 0; i < marks.length; i++) {
                      total += marks[i];
                  }
                  System.out.println("Total: " + total);
              }
          }
        `, hint: 'What is the last value of i? Is there a box with that index?', explain: 'With <code>&lt;=</code> the loop also runs with i = 3, but the last index is 2. Java stops with <code>ArrayIndexOutOfBoundsException</code>. With <code>&lt;</code> the loop stops after index 2.', explainAr: 'آخر فهرس هو الطول ناقص 1، لذلك نستخدم &lt; لا &lt;=.' },
        { t: 'code', q: '<b>Late registration.</b> Read <code>n</code>, then <code>n</code> marks into an array, then ONE more mark (a late student). Use <code>Arrays.copyOf</code> to make the array one box bigger, put the late mark in the last box, sort the array and print it with <code>Arrays.toString</code>. No prompts.', qAr: '{{g:اقرأ|اقرئي}} n علامة ثم علامة متأخرة، {{g:كبّر|كبّري}} المصفوفة بـ Arrays.copyOf و{{g:ضع|ضعي}} العلامة في آخرها ثم {{g:رتّب|رتّبي}} و{{g:اطبع|اطبعي}}.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] marks = new int[n];
                  // 1. read n marks
                  // 2. read the late mark, grow the array, put it in the last box
                  // 3. sort and print
              }
          }
        `, tests: [{ stdin: '3\n70 90 60\n85', expected: '[60, 70, 85, 90]' }, { stdin: '1\n50\n40', expected: '[40, 50]' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] marks = new int[n];
                  for (int i = 0; i < n; i++) {
                      marks[i] = in.nextInt();
                  }
                  int late = in.nextInt();
                  marks = Arrays.copyOf(marks, n + 1);
                  marks[n] = late;
                  Arrays.sort(marks);
                  System.out.println(Arrays.toString(marks));
              }
          }
        `, hint: 'marks = Arrays.copyOf(marks, n + 1); then the new last index is n.', explain: 'The copy has n + 1 boxes, so the new empty box has index n. After that, sort and print as usual.', explainAr: 'المصفوفة الجديدة فيها n+1 صندوق، والصندوق الجديد فهرسه n.' }
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
        { type: 'h', en: 'How binary search thinks: a careful trace' },
        { type: 'p', en: 'You do not have to write binary search yourself, but you should understand it, because exam questions ask you to trace it. Java keeps two marks: <code>low</code> (the first index that may still hold the value) and <code>high</code> (the last one). At each step it looks at the middle index <code>mid = (low + high) / 2</code> and throws away the half that cannot hold the value.' },
        { type: 'p', en: 'Let us search for <b>40</b> in the sorted IDs <code>{3, 8, 15, 21, 27, 34, 40, 52}</code> (indexes 0 to 7):' },
        { type: 'table', head: ['Step', 'low', 'high', 'mid', 'Value at mid', 'Decision'], rows: [
          ['1', '0', '7', '3', '21', '40 is bigger: keep the right half, low = 4'],
          ['2', '4', '7', '5', '34', '40 is bigger: keep the right half, low = 6'],
          ['3', '6', '7', '6', '40', 'Found! The answer is index 6']
        ] },
        { type: 'p', en: 'Only 3 looks instead of 7. The bigger the array, the bigger the saving: for one million sorted IDs binary search needs about 20 looks, while checking one by one may need one million.', ar: 'كل خطوة تحذف نصف القيم، لذلك يكفي نحو 20 خطوة لمليون قيمة.' },
        { type: 'check', q: 'Searching for 8 in the same array. Step 1 looks at index 3 (value 21). What happens next?', options: ['low becomes 4', 'high becomes 2', 'The search stops: not found', 'mid becomes 4'], answer: 1, explain: '8 is smaller than 21, so the value can only be on the left: high becomes mid - 1 = 2.' },
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
        { type: 'h', en: 'Searching Strings' },
        { type: 'p', en: 'Binary search works on a sorted array of Strings too, for example a class register in alphabetical order. The same rules apply: the index when found, a negative number when missing.' },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  String[] names = {"Aisha", "Bader", "Khalid", "Omar"};
                  System.out.println(Arrays.binarySearch(names, "Khalid"));
                  System.out.println(Arrays.binarySearch(names, "Huda"));
              }
          }
        `, out: J`
          2
          -3
        ` },
        { type: 'lines', rows: [
          ['binarySearch(names, "Khalid")', 'Khalid is in the box with index 2.'],
          ['binarySearch(names, "Huda")', 'Huda is missing. In alphabetical order she would stand between Bader (1) and Khalid (2), so the insertion point is 2 and the result is -(2) - 1 = -3.']
        ], ar: 'القواعد نفسها تنطبق على النصوص المرتبة أبجدياً.' },
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
        ], ar: 'للحصول على قائمة تكبر {{g:انسخ|انسخي}} القيم إلى ArrayList جديدة.' },
        { type: 'note', kind: 'warn', en: 'Calling <code>cities.add("Taif")</code> directly on the asList result compiles, but crashes at run time with <code>UnsupportedOperationException</code>.' },
        { type: 'memory', title: 'Two different lists in memory', en: '<code>new ArrayList&lt;&gt;(cities)</code> does not give a second name to the same list. It builds a <b>new</b> list object and copies the elements into it. (To keep the picture short we write the text inside the boxes. In Lesson 3 you will see that a list really keeps arrows to String objects.)', code: J`
          List<String> cities = Arrays.asList("Riyadh", "Jeddah", "Dammam");
          ArrayList<String> trip = new ArrayList<>(cities);
          trip.add("Taif");
        `, frames: [
          { label: 'After <code>Arrays.asList(...)</code>', vars: [{ name: 'cities', type: 'List<String>', ref: 'A' }], objects: [
            { id: 'A', cls: 'fixed-size List', fields: [{ name: '[0]', value: '"Riyadh"' }, { name: '[1]', value: '"Jeddah"' }, { name: '[2]', value: '"Dammam"' }] }
          ] },
          { label: 'After <code>new ArrayList&lt;&gt;(cities)</code>', vars: [{ name: 'cities', type: 'List<String>', ref: 'A' }, { name: 'trip', type: 'ArrayList<String>', ref: 'B' }], objects: [
            { id: 'A', cls: 'fixed-size List', fields: [{ name: '[0]', value: '"Riyadh"' }, { name: '[1]', value: '"Jeddah"' }, { name: '[2]', value: '"Dammam"' }] },
            { id: 'B', cls: 'ArrayList<String>', fields: [{ name: '[0]', value: '"Riyadh"' }, { name: '[1]', value: '"Jeddah"' }, { name: '[2]', value: '"Dammam"' }] }
          ] },
          { label: 'After <code>trip.add("Taif");</code>', vars: [{ name: 'cities', type: 'List<String>', ref: 'A' }, { name: 'trip', type: 'ArrayList<String>', ref: 'B' }], objects: [
            { id: 'A', cls: 'fixed-size List', fields: [{ name: '[0]', value: '"Riyadh"' }, { name: '[1]', value: '"Jeddah"' }, { name: '[2]', value: '"Dammam"' }] },
            { id: 'B', cls: 'ArrayList<String>', fields: [{ name: '[0]', value: '"Riyadh"' }, { name: '[1]', value: '"Jeddah"' }, { name: '[2]', value: '"Dammam"' }, { name: '[3]', value: '"Taif"' }] }
          ] }
        ], ar: 'القائمة الجديدة كائن مستقل؛ الإضافة إليها لا تغيّر القائمة الأولى.' },
        { type: 'check', q: 'After the code above, what is <code>cities.size()</code>?', options: ['3', '4', '0', 'It crashes'], answer: 0, explain: 'Taif was added only to the new list <code>trip</code>. The fixed-size list <code>cities</code> still has 3 elements.' },
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
        `, stdin: '5\n10 20 30 40 50\n30', out: 'Found at index 2', ar: 'نختبر pos >= 0 لنعرف هل وُجدت القيمة.' },
        { type: 'steps', title: 'Worked example: where does a new ID go?', problem: 'Read n sorted IDs and a new ID. If the ID is already there, print its index. If not, print the index where it should be inserted to keep the array sorted.', steps: [
          { en: 'Read the sorted IDs into an array as in the last example. Then read the new ID and search for it.', code: J`
            int key = in.nextInt();
            int pos = Arrays.binarySearch(ids, key);
          ` },
          { en: 'A result of 0 or more means the ID is already registered.', code: J`
            if (pos >= 0) {
                System.out.println("Already registered at index " + pos);
            }
          ` },
          { en: 'A negative result hides the insertion point. The rule <code>pos = -(insertion point) - 1</code> turned around gives <code>insertion point = -pos - 1</code>.', code: J`
            int insertAt = -pos - 1;
            System.out.println("New ID: insert at index " + insertAt);
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
                      System.out.println("Already registered at index " + pos);
                  } else {
                      int insertAt = -pos - 1;
                      System.out.println("New ID: insert at index " + insertAt);
                  }
              }
          }
        `, stdin: '5\n10 20 30 40 50\n35', out: 'New ID: insert at index 3', ar: 'من النتيجة السالبة نحسب مكان الإدراج: -pos - 1.' }
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
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> sorted integers, then a key. Print the index of the key, or <code>-1</code> if it is not in the array. No prompts.', qAr: '{{g:اقرأ|اقرئي}} n ثم n عدداً مرتباً ثم مفتاحاً، و{{g:اطبع|اطبعي}} فهرسه أو -1.', starter: J`
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
        `, hint: 'Call Arrays.binarySearch(a, key). If the result is negative print -1.', explain: 'Any negative result means missing, so we print -1.' },
        { t: 'bug', q: 'This program prints <code>Found at index -3</code>, which is nonsense. Tap the line with the bug.', qAr: 'البرنامج يطبع فهرساً سالباً. أين الخطأ؟', code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] ids = {10, 20, 30, 40};
                  int pos = Arrays.binarySearch(ids, 25);
                  if (pos == -1) {
                      System.out.println("Not found");
                  } else {
                      System.out.println("Found at index " + pos);
                  }
              }
          }
        `, bug: 7, fix: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] ids = {10, 20, 30, 40};
                  int pos = Arrays.binarySearch(ids, 25);
                  if (pos < 0) {
                      System.out.println("Not found");
                  } else {
                      System.out.println("Found at index " + pos);
                  }
              }
          }
        `, hint: 'Is -1 the only negative answer binarySearch can give?', explain: '25 is missing and would go at index 2, so binarySearch returns -(2) - 1 = -3, not -1. The test <code>pos == -1</code> is false and the else part prints a negative index. Any negative result means missing, so test <code>pos &lt; 0</code>.', explainAr: 'كل نتيجة سالبة تعني عدم الوجود، فاختبر pos &lt; 0.' },
        { t: 'bug', q: 'This program compiles, but it crashes with <code>UnsupportedOperationException</code>. Tap the line that causes the problem.', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  List<String> trip = Arrays.asList("Riyadh", "Jeddah");
                  trip.add("Abha");
                  System.out.println(trip);
              }
          }
        `, bug: [5, 6], fix: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> trip = new ArrayList<>(Arrays.asList("Riyadh", "Jeddah"));
                  trip.add("Abha");
                  System.out.println(trip);
              }
          }
        `, hint: 'Which kind of list does Arrays.asList give you?', explain: 'Arrays.asList gives a fixed-size list, so <code>add</code> crashes at run time (line 6). The real fix is on line 5: copy the values into a growable <code>new ArrayList&lt;&gt;(...)</code>. Then the program prints <code>[Riyadh, Jeddah, Abha]</code>.', explainAr: 'القائمة من asList ثابتة الحجم؛ انسخها إلى ArrayList جديدة.' },
        { t: 'output', q: 'The array below is sorted alphabetically. What does this program print?', code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  String[] days = {"Mon", "Sat", "Sun", "Thu", "Tue"};
                  System.out.println(Arrays.binarySearch(days, "Sun"));
                  System.out.println(Arrays.binarySearch(days, "Fri"));
                  System.out.println(Arrays.binarySearch(days, "Wed"));
              }
          }
        `, answer: J`
          2
          -1
          -6
        `, explain: 'Sun is at index 2. Fri would go before Mon (insertion point 0): -(0) - 1 = -1. Wed would go after Tue (insertion point 5): -(5) - 1 = -6.', explainAr: 'نحسب مكان الإدراج ثم نطبق القاعدة -(مكان الإدراج) - 1.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> sorted student IDs, then <code>q</code>, then <code>q</code> IDs to check. For each checked ID print <code>Found</code> or <code>Missing</code> on its own line. Use <code>Arrays.binarySearch</code>. No prompts.', qAr: 'لكل رقم مطلوب {{g:اطبع|اطبعي}} Found أو Missing باستخدام البحث الثنائي.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] ids = new int[n];
                  // read the ids, then q, then check q ids
              }
          }
        `, tests: [{ stdin: '4\n1001 1005 1010 1020\n3\n1005 1007 1020', expected: J`
          Found
          Missing
          Found
        ` }, { stdin: '1\n7\n2\n7 8', expected: J`
          Found
          Missing
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] ids = new int[n];
                  for (int i = 0; i < n; i++) {
                      ids[i] = in.nextInt();
                  }
                  int q = in.nextInt();
                  for (int i = 0; i < q; i++) {
                      int key = in.nextInt();
                      if (Arrays.binarySearch(ids, key) >= 0) {
                          System.out.println("Found");
                      } else {
                          System.out.println("Missing");
                      }
                  }
              }
          }
        `, hint: 'Read all the IDs first. Then use a second loop: read one key, search, print.', explain: 'One binary search per question. A result of 0 or more means the ID is in the array.', explainAr: 'نبحث مرة لكل رقم، والنتيجة غير السالبة تعني الوجود.' }
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
        { type: 'p', en: 'Remember the late student from Lesson 1? With an array we had to make a bigger array and copy everything by hand. An ArrayList does exactly that work for you, inside, without you seeing it. You only say "add this", and the list makes room. That is why most Java programs use ArrayList much more often than plain arrays.' },
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
        { type: 'memory', title: 'A list keeps arrows to its objects', en: 'An ArrayList does not keep the words themselves. Each box of the list holds a <b>reference</b> (an arrow) to a String object. Watch what happens when we insert in the middle: the arrows move one box to the right, the String objects stay where they are.', code: J`
          ArrayList<String> basket = new ArrayList<>();
          basket.add("milk");
          basket.add("bread");
          basket.add(1, "eggs");
        `, frames: [
          { label: 'After <code>new ArrayList&lt;&gt;()</code>', vars: [{ name: 'basket', type: 'ArrayList<String>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '0' }] }
          ] },
          { label: 'After <code>basket.add("milk");</code>', vars: [{ name: 'basket', type: 'ArrayList<String>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '1' }, { name: '[0]', ref: 'M' }] },
            { id: 'M', cls: 'String', fields: [{ name: 'text', value: '"milk"' }] }
          ] },
          { label: 'After <code>basket.add("bread");</code>', vars: [{ name: 'basket', type: 'ArrayList<String>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '2' }, { name: '[0]', ref: 'M' }, { name: '[1]', ref: 'B' }] },
            { id: 'M', cls: 'String', fields: [{ name: 'text', value: '"milk"' }] },
            { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"bread"' }] }
          ] },
          { label: 'After <code>basket.add(1, "eggs");</code>', vars: [{ name: 'basket', type: 'ArrayList<String>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '3' }, { name: '[0]', ref: 'M' }, { name: '[1]', ref: 'E' }, { name: '[2]', ref: 'B' }] },
            { id: 'M', cls: 'String', fields: [{ name: 'text', value: '"milk"' }] },
            { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"bread"' }] },
            { id: 'E', cls: 'String', fields: [{ name: 'text', value: '"eggs"' }] }
          ] }
        ], ar: 'كل خانة في القائمة تحمل سهماً إلى كائن نصي، وعند الإدراج تنتقل الأسهم إلى اليمين.' },
        { type: 'h', en: 'Two names for one list' },
        { type: 'p', en: 'You want a backup of the class list before you change it. It is tempting to write <code>ArrayList&lt;String&gt; other = names;</code>, but this does <b>not</b> copy the list. It copies the <b>arrow</b>. Now two variables point to the same list object, and a change through one name is seen through the other. To get a real, separate copy, write <code>new ArrayList&lt;&gt;(names)</code>.', ar: 'الإسناد = ينسخ السهم فقط، أما new ArrayList&lt;&gt;(names) فينشئ نسخة مستقلة.' },
        { type: 'analogy', title: 'Two remote controls, one TV', en: 'Giving your brother a second remote control does not give him a second TV. If he changes the channel, your screen changes too. A real copy is a second TV.' },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> names = new ArrayList<>();
                  names.add("Huda");
                  names.add("Omar");
                  ArrayList<String> other = names;
                  other.add("Lina");
                  System.out.println(names);
                  ArrayList<String> copy = new ArrayList<>(names);
                  copy.add("Reem");
                  System.out.println(names);
                  System.out.println(copy);
              }
          }
        `, out: J`
          [Huda, Omar, Lina]
          [Huda, Omar, Lina]
          [Huda, Omar, Lina, Reem]
        ` },
        { type: 'memory', title: 'Same list or a copy?', frames: [
          { label: 'After the two <code>add</code> calls', vars: [{ name: 'names', type: 'ArrayList<String>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<String>', fields: [{ name: '[0]', value: '"Huda"' }, { name: '[1]', value: '"Omar"' }] }
          ] },
          { label: 'After <code>ArrayList&lt;String&gt; other = names;</code> (only the arrow is copied)', vars: [{ name: 'names', type: 'ArrayList<String>', ref: 'A' }, { name: 'other', type: 'ArrayList<String>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<String>', fields: [{ name: '[0]', value: '"Huda"' }, { name: '[1]', value: '"Omar"' }] }
          ] },
          { label: 'After <code>other.add("Lina");</code> (names sees it too)', vars: [{ name: 'names', type: 'ArrayList<String>', ref: 'A' }, { name: 'other', type: 'ArrayList<String>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<String>', fields: [{ name: '[0]', value: '"Huda"' }, { name: '[1]', value: '"Omar"' }, { name: '[2]', value: '"Lina"' }] }
          ] },
          { label: 'After <code>copy = new ArrayList&lt;&gt;(names);</code> (a second list)', vars: [{ name: 'names', type: 'ArrayList<String>', ref: 'A' }, { name: 'other', type: 'ArrayList<String>', ref: 'A' }, { name: 'copy', type: 'ArrayList<String>', ref: 'C' }], objects: [
            { id: 'A', cls: 'ArrayList<String>', fields: [{ name: '[0]', value: '"Huda"' }, { name: '[1]', value: '"Omar"' }, { name: '[2]', value: '"Lina"' }] },
            { id: 'C', cls: 'ArrayList<String>', fields: [{ name: '[0]', value: '"Huda"' }, { name: '[1]', value: '"Omar"' }, { name: '[2]', value: '"Lina"' }] }
          ] },
          { label: 'After <code>copy.add("Reem");</code> (only the copy changes)', vars: [{ name: 'names', type: 'ArrayList<String>', ref: 'A' }, { name: 'other', type: 'ArrayList<String>', ref: 'A' }, { name: 'copy', type: 'ArrayList<String>', ref: 'C' }], objects: [
            { id: 'A', cls: 'ArrayList<String>', fields: [{ name: '[0]', value: '"Huda"' }, { name: '[1]', value: '"Omar"' }, { name: '[2]', value: '"Lina"' }] },
            { id: 'C', cls: 'ArrayList<String>', fields: [{ name: '[0]', value: '"Huda"' }, { name: '[1]', value: '"Omar"' }, { name: '[2]', value: '"Lina"' }, { name: '[3]', value: '"Reem"' }] }
          ] }
        ], ar: 'other وnames سهمان لقائمة واحدة، أما copy فقائمة ثانية.' },
        { type: 'check', q: 'After <code>ArrayList&lt;String&gt; b = a;</code> and <code>b.add("x");</code>, what happens to <code>a</code>?', options: ['Nothing, a is a separate list', 'a also contains "x", because a and b are the same list', 'It does not compile', 'a becomes empty'], answer: 1, explain: '<code>b = a</code> copies the arrow, not the list. Both names point to one list, so a sees the new item.' },
        { type: 'h', en: 'Visiting every item with an index loop' },
        { type: 'p', en: 'To print a numbered list, loop over the indexes from 0 to <code>size() - 1</code> and call <code>get(i)</code>. It is the same loop you know from arrays, with <code>size()</code> instead of <code>length</code> and <code>get(i)</code> instead of <code>[i]</code>.' },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> basket = new ArrayList<>();
                  basket.add("milk");
                  basket.add("bread");
                  basket.add("eggs");
                  for (int i = 0; i < basket.size(); i++) {
                      System.out.println((i + 1) + ". " + basket.get(i));
                  }
              }
          }
        `, out: J`
          1. milk
          2. bread
          3. eggs
        ` },
        { type: 'lines', rows: [
          ['i < basket.size()', 'Stop before index 3, because the last index is 2.'],
          ['(i + 1) + ". "', 'People count from 1, Java counts from 0. The brackets make Java add the numbers first.'],
          ['basket.get(i)', 'The item at index i.']
        ], ar: 'نمر على الفهارس من 0 إلى size()-1.' },
        { type: 'h', en: 'isEmpty() and clear()' },
        { type: 'p', en: '<code>isEmpty()</code> answers true when the list has no items. <code>clear()</code> removes every item at once, for example when the cashier starts a new basket.' },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> basket = new ArrayList<>();
                  basket.add("milk");
                  System.out.println(basket.isEmpty());
                  basket.clear();
                  System.out.println(basket.isEmpty() + " " + basket.size());
              }
          }
        `, out: J`
          false
          true 0
        ` },
        { type: 'h', en: 'Array or ArrayList? Side by side' },
        { type: 'table', head: ['Job', 'Array', 'ArrayList'], rows: [
          ['Create', '<code>String[] a = new String[5];</code>', '<code>ArrayList&lt;String&gt; a = new ArrayList&lt;&gt;();</code>'],
          ['Size', 'Fixed: <code>a.length</code>', 'Grows: <code>a.size()</code>'],
          ['Read item i', '<code>a[i]</code>', '<code>a.get(i)</code>'],
          ['Change item i', '<code>a[i] = x;</code>', '<code>a.set(i, x);</code>'],
          ['Add at the end', 'Not possible (make a bigger array)', '<code>a.add(x);</code>'],
          ['Print', '<code>Arrays.toString(a)</code>', '<code>System.out.println(a)</code>'],
          ['Simple types (int, double)', 'Allowed', 'Use Integer, Double (next lesson)']
        ] },
        { type: 'note', kind: 'exam', en: 'Exams love this mix-up: arrays use <code>length</code> (no brackets), Strings use <code>length()</code>, and lists use <code>size()</code>.', ar: 'المصفوفة length، والنص length()، والقائمة size().' },
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
        `, ar: 'نقرأ الكلمات ونضيفها إلى القائمة ثم نطبع.' },
        { type: 'steps', title: 'Worked example: class register with a late student', problem: 'Read n names (the register). Then read one more name: a student who must be first in the list. Insert this name at the front and print the numbered register and the number of students.', steps: [
          { en: 'Read the n names into a list, as before.', code: J`
            ArrayList<String> register = new ArrayList<>();
            int n = in.nextInt();
            for (int i = 0; i < n; i++) {
                register.add(in.next());
            }
          ` },
          { en: 'Read the extra name and insert it at index 0. Everybody else moves one place to the right.', code: J`
            String first = in.next();
            register.add(0, first);
          ` },
          { en: 'Print the numbered register with an index loop.', code: J`
            for (int i = 0; i < register.size(); i++) {
                System.out.println((i + 1) + ". " + register.get(i));
            }
          ` },
          { en: 'Print the number of students with <code>size()</code>.', code: 'System.out.println("Students: " + register.size());' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  ArrayList<String> register = new ArrayList<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      register.add(in.next());
                  }
                  String first = in.next();
                  register.add(0, first);
                  for (int i = 0; i < register.size(); i++) {
                      System.out.println((i + 1) + ". " + register.get(i));
                  }
                  System.out.println("Students: " + register.size());
              }
          }
        `, stdin: '3\nHuda Omar Lina\nAisha', out: J`
          1. Aisha
          2. Huda
          3. Omar
          4. Lina
          Students: 4
        `, ar: 'add(0, x) تضع الاسم في البداية وتزيح الباقين.' }
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
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> words. Put them in an <code>ArrayList&lt;String&gt;</code>. Print the list on the first line and <code>Size: </code> plus the size on the second line. No prompts.', qAr: '{{g:اقرأ|اقرئي}} n كلمة {{g:وضعها|وضعيها}} في ArrayList ثم {{g:اطبع|اطبعي}} القائمة وحجمها.', starter: J`
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
        `, hint: 'Use a for loop and words.add(in.next()).', explain: 'The loop adds one word per round.' },
        { t: 'bug', q: 'The programmer wants <code>backup</code> to keep the list as it was BEFORE Lina was added, but the program prints <code>Backup: [Huda, Omar, Lina]</code>. Tap the line with the bug.', qAr: 'المطلوب نسخة احتياطية قبل إضافة Lina، لكن النسخة تغيرت أيضاً. أين الخطأ؟', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> names = new ArrayList<>();
                  names.add("Huda");
                  names.add("Omar");
                  ArrayList<String> backup = names;
                  names.add("Lina");
                  System.out.println("Backup: " + backup);
              }
          }
        `, bug: 8, fix: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> names = new ArrayList<>();
                  names.add("Huda");
                  names.add("Omar");
                  ArrayList<String> backup = new ArrayList<>(names);
                  names.add("Lina");
                  System.out.println("Backup: " + backup);
              }
          }
        `, hint: 'Does = copy the list, or only the arrow to it?', explain: '<code>backup = names</code> copies only the reference, so both names point to ONE list and Lina appears in both. <code>new ArrayList&lt;&gt;(names)</code> builds a separate list, so the fixed program prints <code>Backup: [Huda, Omar]</code>.', explainAr: 'الإسناد ينسخ السهم فقط؛ {{g:استخدم|استخدمي}} new ArrayList&lt;&gt;(names) لنسخة مستقلة.' },
        { t: 'bug', q: 'This program does not compile. Tap the line with the bug.', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> cities = new ArrayList<>();
                  cities.add("Riyadh");
                  cities.add("Abha");
                  for (int i = 0; i < cities.length; i++) {
                      System.out.println(cities.get(i));
                  }
              }
          }
        `, bug: 8, fix: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> cities = new ArrayList<>();
                  cities.add("Riyadh");
                  cities.add("Abha");
                  for (int i = 0; i < cities.size(); i++) {
                      System.out.println(cities.get(i));
                  }
              }
          }
        `, hint: 'Arrays have length. What do lists have?', explain: 'An ArrayList has no field called <code>length</code>, so Java says <i>cannot find symbol</i>. The number of items in a list is <code>cities.size()</code>.', explainAr: 'القائمة ليس لها length؛ {{g:استخدم|استخدمي}} size().' },
        { t: 'output', q: 'What does this program print? Think about arrows.', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> a = new ArrayList<>();
                  a.add("tea");
                  a.add("coffee");
                  ArrayList<String> b = a;
                  ArrayList<String> c = new ArrayList<>(a);
                  b.set(0, "juice");
                  c.add("water");
                  System.out.println(a);
                  System.out.println(b);
                  System.out.println(c);
              }
          }
        `, answer: J`
          [juice, coffee]
          [juice, coffee]
          [tea, coffee, water]
        `, explain: 'a and b point to the same list, so b.set changes what a shows too. c is a separate copy made BEFORE the change, so it still has tea, plus water.', explainAr: 'a وb قائمة واحدة، وc نسخة مستقلة.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> words into an ArrayList. Then read an index <code>k</code> and one more word <code>w</code>. Insert <code>w</code> at index <code>k</code>. Print the list, then <code>Size: </code> and the size. No prompts.', qAr: '{{g:أدخل|أدخلي}} الكلمة w في الموضع k ثم {{g:اطبع|اطبعي}} القائمة وحجمها.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<String> list = new ArrayList<>();
                  // read n words, then k and w, insert, print
              }
          }
        `, tests: [{ stdin: '3\nmilk bread eggs\n1 tea', expected: J`
          [milk, tea, bread, eggs]
          Size: 4
        ` }, { stdin: '2\nA B\n2 C', expected: J`
          [A, B, C]
          Size: 3
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<String> list = new ArrayList<>();
                  for (int i = 0; i < n; i++) {
                      list.add(in.next());
                  }
                  int k = in.nextInt();
                  String w = in.next();
                  list.add(k, w);
                  System.out.println(list);
                  System.out.println("Size: " + list.size());
              }
          }
        `, hint: 'list.add(k, w) inserts. An index equal to size() is allowed: it adds at the end.', explain: 'add(k, w) moves the items from index k one place to the right. When k equals the size, the word simply goes at the end.', explainAr: 'add(k, w) تُدخل وتزيح العناصر إلى اليمين.' }
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
        { type: 'memory', title: 'The gift box in memory', en: 'The list keeps an arrow to an <code>Integer</code> object (the box). When you take the number out into an <code>int</code> variable, the variable holds the plain number itself, with no arrow.', code: J`
          ArrayList<Integer> marks = new ArrayList<>();
          marks.add(30);
          int first = marks.get(0);
        `, frames: [
          { label: 'After <code>marks.add(30);</code> (autoboxing)', vars: [{ name: 'marks', type: 'ArrayList<Integer>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<Integer>', fields: [{ name: 'size', value: '1' }, { name: '[0]', ref: 'B' }] },
            { id: 'B', cls: 'Integer', fields: [{ name: 'value', value: '30' }] }
          ] },
          { label: 'After <code>int first = marks.get(0);</code> (unboxing)', vars: [{ name: 'marks', type: 'ArrayList<Integer>', ref: 'A' }, { name: 'first', type: 'int', value: '30' }], objects: [
            { id: 'A', cls: 'ArrayList<Integer>', fields: [{ name: 'size', value: '1' }, { name: '[0]', ref: 'B' }] },
            { id: 'B', cls: 'Integer', fields: [{ name: 'value', value: '30' }] }
          ] }
        ], ar: 'القائمة تشير إلى كائن Integer، أما المتغير int فيحمل الرقم نفسه.' },
        { type: 'check', q: 'Which declaration is correct?', options: ['ArrayList&lt;int&gt; a;', 'ArrayList&lt;Integer&gt; a;', 'ArrayList&lt;integer&gt; a;', 'ArrayList&lt;Int&gt; a;'], answer: 1, explain: 'The wrapper class is spelled Integer, with a capital I.' },
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
        { type: 'memory', title: 'Removing makes the others slide left', en: 'After a removal there is no empty hole in a list. Every item after the removed one moves one box to the left, so its index becomes one smaller. (For a short picture, the numbers are written inside the boxes.)', frames: [
          { label: 'Start: <code>[30, 10, 20, 10]</code>', vars: [{ name: 'marks', type: 'ArrayList<Integer>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<Integer>', fields: [{ name: '[0]', value: '30' }, { name: '[1]', value: '10' }, { name: '[2]', value: '20' }, { name: '[3]', value: '10' }] }
          ] },
          { label: 'After <code>marks.remove(1);</code>: 20 and 10 slide left', vars: [{ name: 'marks', type: 'ArrayList<Integer>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<Integer>', fields: [{ name: '[0]', value: '30' }, { name: '[1]', value: '20' }, { name: '[2]', value: '10' }] }
          ] },
          { label: 'After <code>marks.remove(Integer.valueOf(10));</code>', vars: [{ name: 'marks', type: 'ArrayList<Integer>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<Integer>', fields: [{ name: '[0]', value: '30' }, { name: '[1]', value: '20' }] }
          ] }
        ], ar: 'بعد الحذف تنتقل العناصر التالية خانة إلى اليسار ويقل فهرسها بواحد.' },
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
        { type: 'h', en: 'Comparing two Integer items: equals, not ==' },
        { type: 'p', en: 'Two students may have the same score, and you want to check it. With plain <code>int</code> values you use <code>==</code>. But <code>list.get(0)</code> gives an <code>Integer</code> object, and <code>==</code> between two objects asks "is it the same object?", not "is it the same number?". Java keeps ready-made boxes only for small numbers (from -128 to 127), so <code>==</code> seems to work for small scores and then suddenly fails for bigger ones.', ar: 'المقارنة بـ == بين كائنَي Integer تقارن الصناديق لا الأرقام. {{g:استخدم|استخدمي}} equals.' },
        { type: 'analogy', title: 'Two gift boxes with the same number inside', en: 'Two gift boxes each hold a card with 1000 written on it. They are two boxes, so "same box?" says no. For small numbers, the shop uses boxes from one shared shelf, so you sometimes get the very same box. Do not depend on that luck: compare the cards with <code>equals</code>.' },
        { type: 'code', run: true, code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> scores = new ArrayList<>();
                  scores.add(100);
                  scores.add(100);
                  scores.add(1000);
                  scores.add(1000);
                  System.out.println(scores.get(0) == scores.get(1));
                  System.out.println(scores.get(2) == scores.get(3));
                  System.out.println(scores.get(2).equals(scores.get(3)));
              }
          }
        `, out: J`
          true
          false
          true
        ` },
        { type: 'lines', rows: [
          ['scores.get(0) == scores.get(1)', '100 is small, so both boxes come from the shared shelf: same object, <code>true</code>. Lucky!'],
          ['scores.get(2) == scores.get(3)', '1000 is bigger than 127, so Java made two different boxes: <code>false</code>, even though the numbers are equal.'],
          ['scores.get(2).equals(scores.get(3))', '<code>equals</code> compares the numbers inside: <code>true</code>. Always correct.']
        ], ar: 'equals تقارن القيم دائماً بشكل صحيح.' },
        { type: 'note', kind: 'exam', en: 'Safe ways to compare: <code>a.equals(b)</code>, or take the numbers out first: <code>int x = list.get(2); int y = list.get(3);</code> then <code>x == y</code>. Comparing an Integer with a plain number, like <code>list.get(2) == 1000</code>, is also fine, because Java unboxes the Integer first.' },
        { type: 'check', q: 'A list holds 500 and 500. What does <code>list.get(0) == list.get(1)</code> give with normal Java settings?', options: ['true', 'false', 'It does not compile', '500'], answer: 1, explain: '500 is above 127, so the two Integer objects are different boxes. == compares the boxes and gives false. Use equals.' },
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
        `, ar: 'نجمع العلامات ثم نقسم على الحجم.' },
        { type: 'steps', title: 'Worked example: marks above the average', problem: 'Read n marks. Print the average, then a list of the marks that are above the average. (You cannot know the average until you have read ALL the marks, so you must keep them in a list.)', steps: [
          { en: 'Read the marks into a list and add them up at the same time.', code: J`
            ArrayList<Integer> marks = new ArrayList<>();
            int n = in.nextInt();
            int total = 0;
            for (int i = 0; i < n; i++) {
                int m = in.nextInt();
                marks.add(m);
                total += m;
            }
          ` },
          { en: 'Compute the average as a double.', code: J`
            double average = (double) total / n;
            System.out.println("Average: " + average);
          ` },
          { en: 'Walk through the list a second time. Copy every mark above the average into a new list.', code: J`
            ArrayList<Integer> above = new ArrayList<>();
            for (int m : marks) {
                if (m > average) {
                    above.add(m);
                }
            }
          ` },
          { en: 'Print the new list.', code: 'System.out.println("Above average: " + above);' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  ArrayList<Integer> marks = new ArrayList<>();
                  int n = in.nextInt();
                  int total = 0;
                  for (int i = 0; i < n; i++) {
                      int m = in.nextInt();
                      marks.add(m);
                      total += m;
                  }
                  double average = (double) total / n;
                  System.out.println("Average: " + average);
                  ArrayList<Integer> above = new ArrayList<>();
                  for (int m : marks) {
                      if (m > average) {
                          above.add(m);
                      }
                  }
                  System.out.println("Above average: " + above);
              }
          }
        `, stdin: '5\n70 85 60 95 90', out: J`
          Average: 80.0
          Above average: [85, 95, 90]
        `, ar: 'نحفظ العلامات في قائمة لأننا نحتاج المرور عليها مرتين.' }
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
        'To remove many items in a loop, go backwards over the indexes.',
        'Compare two Integer objects with <code>equals</code>, never with <code>==</code> (it fails above 127).'
      ],
      rememberAr: 'القوائم تحمل كائنات فقط (Integer). remove(int) تحذف بالفهرس. للحذف بالقيمة {{g:استخدم|استخدمي}} Integer.valueOf. وعند الحذف في حلقة {{g:ابدأ|ابدئي}} من النهاية، و{{g:قارن|قارني}} كائنات Integer بـ equals.',
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
        { t: 'code', q: 'Read an integer <code>n</code> followed by <code>n</code> integers into an <code>ArrayList&lt;Integer&gt;</code>. Print the list, then remove every negative number and print the list again. No prompts.', qAr: '{{g:اقرأ|اقرئي}} n ثم n عدداً، {{g:اطبع|اطبعي}} القائمة، ثم {{g:احذف|احذفي}} السالب {{g:واطبعها|واطبعيها}} مرة أخرى.', starter: J`
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
        `, hint: 'Loop from list.size() - 1 down to 0 and call list.remove(i).', explain: 'Going backwards means removing index i never shifts an item we still need to check.' },
        { t: 'bug', q: 'The programmer wants to remove the age <b>3</b> from the list, but the program crashes with <code>IndexOutOfBoundsException</code>. Tap the line with the bug.', qAr: 'المطلوب حذف القيمة 3 لكن البرنامج يتوقف. أين الخطأ؟', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> ages = new ArrayList<>();
                  ages.add(18);
                  ages.add(3);
                  ages.add(25);
                  ages.remove(3);
                  System.out.println(ages);
              }
          }
        `, bug: 9, fix: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> ages = new ArrayList<>();
                  ages.add(18);
                  ages.add(3);
                  ages.add(25);
                  ages.remove(Integer.valueOf(3));
                  System.out.println(ages);
              }
          }
        `, hint: 'A plain int inside remove(...) means an index.', explain: '<code>ages.remove(3)</code> means "remove the item at INDEX 3". The list has indexes 0, 1, 2 only, so Java crashes. <code>Integer.valueOf(3)</code> makes Java use the remove-by-value version, and the fixed program prints <code>[18, 25]</code>.', explainAr: 'remove(3) تحذف بالفهرس؛ للحذف بالقيمة {{g:استخدم|استخدمي}} Integer.valueOf(3).' },
        { t: 'bug', q: 'Both items cost 250 riyals, but the program prints <code>Different prices</code>. Tap the line with the bug.', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> prices = new ArrayList<>();
                  prices.add(250);
                  prices.add(250);
                  if (prices.get(0) == prices.get(1)) {
                      System.out.println("Same price");
                  } else {
                      System.out.println("Different prices");
                  }
              }
          }
        `, bug: 8, fix: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> prices = new ArrayList<>();
                  prices.add(250);
                  prices.add(250);
                  if (prices.get(0).equals(prices.get(1))) {
                      System.out.println("Same price");
                  } else {
                      System.out.println("Different prices");
                  }
              }
          }
        `, hint: 'What does == compare when both sides are Integer objects?', explain: '<code>prices.get(0)</code> and <code>prices.get(1)</code> are two different Integer objects (250 is above 127, so no shared box). <code>==</code> compares the objects and gives false. <code>equals</code> compares the numbers and gives true.', explainAr: 'لا {{g:تقارن|تقارني}} كائنات Integer بـ ==؛ {{g:استخدم|استخدمي}} equals.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.ArrayList;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> a = new ArrayList<>();
                  a.add(5);
                  a.add(1);
                  a.add(5);
                  a.add(2);
                  a.remove(Integer.valueOf(5));
                  a.set(0, a.get(0) * 10);
                  System.out.println(a);
                  System.out.println(a.indexOf(5));
              }
          }
        `, answer: J`
          [10, 5, 2]
          1
        `, explain: 'Removing the value 5 removes only the FIRST 5: [1, 5, 2]. Then index 0 becomes 1 * 10 = 10: [10, 5, 2]. The 5 is now at index 1.', explainAr: 'تُحذف أول 5 فقط، ثم تتغير الخانة 0 إلى 10.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> prices in riyals (with decimals) into an <code>ArrayList&lt;Double&gt;</code>. Print <code>Total: </code> and the sum, then <code>Above 50: </code> and how many prices are more than 50. No prompts.', qAr: '{{g:اقرأ|اقرئي}} الأسعار في ArrayList&lt;Double&gt; و{{g:اطبع|اطبعي}} المجموع وعدد الأسعار الأكبر من 50.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Double> prices = new ArrayList<>();
                  // read the prices, then add up and count
              }
          }
        `, tests: [{ stdin: '4\n12.5 99.0 7.25 60.5', expected: J`
          Total: 179.25
          Above 50: 2
        ` }, { stdin: '2\n10.0 20.0', expected: J`
          Total: 30.0
          Above 50: 0
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Double> prices = new ArrayList<>();
                  for (int i = 0; i < n; i++) {
                      prices.add(in.nextDouble());
                  }
                  double total = 0;
                  int above = 0;
                  for (double p : prices) {
                      total += p;
                      if (p > 50) {
                          above++;
                      }
                  }
                  System.out.println("Total: " + total);
                  System.out.println("Above 50: " + above);
              }
          }
        `, hint: 'Use in.nextDouble() to read, and a for-each loop with double p to add up and count.', explain: 'Double is the wrapper of double. Java unboxes each Double into the double p inside the for-each loop.', explainAr: 'Double هو الصنف المغلِّف لـ double، ويُفك تلقائياً في الحلقة.' }
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
        { type: 'p', en: 'Why does this matter? Think of a waiting line of 10,000 people at a government service centre, kept in an ArrayList. Each time the first person is served, <code>remove(0)</code> makes the other 9,999 references slide one box to the left (you saw this sliding in Lesson 4). With a LinkedList, serving the first person only changes one link. The list does not care how long the line is.' },
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
        { type: 'memory', title: 'The chain of nodes in memory', en: 'The LinkedList object only knows the <b>first</b> and the <b>last</b> node. Each node holds one item and an arrow to the next node. Adding at the front makes one new node and changes one arrow: nothing slides. (Java nodes also keep an arrow back to the previous node; we hide it to keep the picture small.)', frames: [
          { label: 'After <code>orders.add("Order#1");</code>', vars: [{ name: 'orders', type: 'LinkedList<String>', ref: 'L' }], objects: [
            { id: 'L', cls: 'LinkedList<String>', fields: [{ name: 'size', value: '1' }, { name: 'first', ref: 'N1' }, { name: 'last', ref: 'N1' }] },
            { id: 'N1', cls: 'Node', fields: [{ name: 'item', value: '"Order#1"' }, { name: 'next', value: 'null' }] }
          ] },
          { label: 'After <code>orders.add("Order#2");</code>', vars: [{ name: 'orders', type: 'LinkedList<String>', ref: 'L' }], objects: [
            { id: 'L', cls: 'LinkedList<String>', fields: [{ name: 'size', value: '2' }, { name: 'first', ref: 'N1' }, { name: 'last', ref: 'N2' }] },
            { id: 'N1', cls: 'Node', fields: [{ name: 'item', value: '"Order#1"' }, { name: 'next', ref: 'N2' }] },
            { id: 'N2', cls: 'Node', fields: [{ name: 'item', value: '"Order#2"' }, { name: 'next', value: 'null' }] }
          ] },
          { label: 'After <code>orders.addFirst("VIP");</code>', vars: [{ name: 'orders', type: 'LinkedList<String>', ref: 'L' }], objects: [
            { id: 'L', cls: 'LinkedList<String>', fields: [{ name: 'size', value: '3' }, { name: 'first', ref: 'N0' }, { name: 'last', ref: 'N2' }] },
            { id: 'N0', cls: 'Node', fields: [{ name: 'item', value: '"VIP"' }, { name: 'next', ref: 'N1' }] },
            { id: 'N1', cls: 'Node', fields: [{ name: 'item', value: '"Order#1"' }, { name: 'next', ref: 'N2' }] },
            { id: 'N2', cls: 'Node', fields: [{ name: 'item', value: '"Order#2"' }, { name: 'next', value: 'null' }] }
          ] }
        ], ar: 'الإضافة في البداية تنشئ عقدة جديدة وتغيّر سهماً واحداً فقط.' },
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
        { type: 'h', en: 'Safe versions for an empty list: peekFirst and pollFirst' },
        { type: 'p', en: 'What if nobody is waiting? <code>getFirst()</code> and <code>removeFirst()</code> crash with <code>NoSuchElementException</code> on an empty list. Their safe partners <code>peekFirst()</code> (look) and <code>pollFirst()</code> (look and remove) simply return <code>null</code>. There are also <code>peekLast()</code> and <code>pollLast()</code> for the other end.', ar: 'peekFirst وpollFirst تعيدان null بدل التوقف عندما تكون القائمة فارغة.' },
        { type: 'code', run: true, code: J`
          import java.util.LinkedList;

          public class Main {
              public static void main(String[] args) {
                  LinkedList<String> q = new LinkedList<>();
                  System.out.println(q.peekFirst());
                  System.out.println(q.pollFirst());
                  q.add("Sara");
                  System.out.println(q.pollFirst());
                  System.out.println(q.size());
              }
          }
        `, out: J`
          null
          null
          Sara
          0
        ` },
        { type: 'lines', rows: [
          ['q.peekFirst()', 'The list is empty, so the answer is <code>null</code>. No crash.'],
          ['q.pollFirst()', 'Also <code>null</code>: there was nothing to remove.'],
          ['q.pollFirst()  // after add', 'Now Sara is there: she is removed and returned.']
        ], ar: 'النسخ الآمنة مفيدة عندما لا نعرف هل القائمة فارغة.' },
        { type: 'check', q: 'An empty LinkedList <code>q</code>. Which call does NOT crash?', options: ['q.getFirst()', 'q.removeFirst()', 'q.pollFirst()', 'q.removeLast()'], answer: 2, explain: 'pollFirst returns null on an empty list. The get/remove versions throw NoSuchElementException.' },
        { type: 'h', en: 'ArrayList or LinkedList?' },
        { type: 'table', head: ['Task', 'ArrayList', 'LinkedList'], rows: [
          ['Read the item at index i (<code>get(i)</code>)', 'Fast', 'Slow (walks node by node)'],
          ['Add at the end', 'Fast', 'Fast'],
          ['Add or remove at the front', 'Slow (everyone shifts)', 'Fast']
        ] },
        { type: 'note', kind: 'tip', en: 'Rule of thumb: use <code>ArrayList</code> by default. Use <code>LinkedList</code> when you often add or remove at the front, like a waiting line.' },
        { type: 'h', en: 'Both are a List' },
        { type: 'p', en: 'In Unit 5 you met interfaces. <code>List</code> is an interface, and both <code>ArrayList</code> and <code>LinkedList</code> implement it. So a method with a <code>List&lt;String&gt;</code> parameter accepts either kind. You can change your mind later about which list to use, and the method does not change.' },
        { type: 'analogy', title: 'A charger that fits two phones', en: 'If a charger fits the standard plug, it charges any phone with that plug. <code>List</code> is the standard plug; ArrayList and LinkedList are two phones.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              static void show(List<String> list) {
                  System.out.println(list.size() + " items, first: " + list.get(0));
              }

              public static void main(String[] args) {
                  List<String> a = new ArrayList<>();
                  a.add("Huda");
                  a.add("Omar");
                  List<String> b = new LinkedList<>();
                  b.add("Sara");
                  show(a);
                  show(b);
              }
          }
        `, out: J`
          2 items, first: Huda
          1 items, first: Sara
        ` },
        { type: 'lines', rows: [
          ['static void show(List<String> list)', 'The parameter type is the interface, so any kind of List can come in.'],
          ['List<String> b = new LinkedList<>();', 'The variable type is List, the object is a LinkedList.'],
          ['show(b);', 'Works, because a LinkedList IS a List.']
        ], ar: 'المتغير من نوع List يقبل ArrayList وLinkedList.' },
        { type: 'note', kind: 'warn', en: 'A variable declared as <code>List</code> only offers the <code>List</code> methods. To call <code>peekFirst</code> or <code>pollFirst</code>, declare it as <code>LinkedList&lt;String&gt;</code>.' },
        { type: 'note', kind: 'tip', en: 'Since Java 21, every List (ArrayList too) also has <code>addFirst</code>, <code>getFirst</code>, <code>removeFirst</code> and the <code>Last</code> versions. On an ArrayList, <code>addFirst</code> and <code>removeFirst</code> still make every item slide, so they are slow for long lists. The LinkedList versions are fast.' },
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
        `, ar: 'من يصل أولاً يُخدم أولاً: نحذف من البداية.' },
        { type: 'steps', title: 'Worked example: recently viewed products', problem: 'A shopping app shows the 3 products you viewed most recently, the newest first. Read n product names in the order they were viewed and print the list the app shows at the end.', steps: [
          { en: 'Make an empty LinkedList and read n.', code: J`
            LinkedList<String> recent = new LinkedList<>();
            int n = in.nextInt();
          ` },
          { en: 'Each new product goes to the FRONT, because it is the newest.', code: J`
            for (int i = 0; i < n; i++) {
                recent.addFirst(in.next());
          ` },
          { en: 'If there are now more than 3, the oldest one (at the end) leaves.', code: J`
                if (recent.size() > 3) {
                    recent.removeLast();
                }
            }
          ` },
          { en: 'Print the list.', code: 'System.out.println("Recently viewed: " + recent);' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  LinkedList<String> recent = new LinkedList<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      recent.addFirst(in.next());
                      if (recent.size() > 3) {
                          recent.removeLast();
                      }
                  }
                  System.out.println("Recently viewed: " + recent);
              }
          }
        `, stdin: '5\npen bag book cup lamp', out: 'Recently viewed: [lamp, cup, book]', ar: 'الجديد يدخل من البداية والأقدم يخرج من النهاية.' }
      ],
      mistakes: [
        { title: 'Using get(i) in a big loop on a LinkedList', en: 'It works, but each get walks the chain. It is slow for big lists.', code: 'for (int i = 0; i < list.size(); i++) { list.get(i); }' },
        { title: 'Calling pollFirst on an ArrayList variable', en: 'pollFirst and peekFirst are LinkedList methods. If the variable is declared as ArrayList or List it does not compile.', code: J`
          ArrayList<String> a = new ArrayList<>();
          a.pollFirst();   // error: cannot find symbol
        ` },
        { title: 'removeFirst on an empty list', en: 'It throws NoSuchElementException. Check isEmpty() first.', code: J`
          LinkedList<String> q = new LinkedList<>();
          q.removeFirst();
        ` },
        { title: 'getFirst when you mean removeFirst', en: 'getFirst only looks. In a loop that serves customers, nobody ever leaves the line, so the loop never ends.', code: J`
          while (!q.isEmpty()) {
              System.out.println(q.getFirst());   // q never gets shorter
          }
        `, ar: 'getFirst لا تحذف، فتبقى الحلقة تعمل إلى الأبد.' }
      ],
      remember: [
        '<code>LinkedList</code> is a List made of nodes joined in a chain.',
        'It is fast at the ends: <code>addFirst</code>, <code>addLast</code>, <code>removeFirst</code>, <code>removeLast</code>.',
        '<code>getFirst</code> and <code>getLast</code> only look; they do not remove.',
        'On an empty list, <code>peekFirst</code> and <code>pollFirst</code> return <code>null</code> instead of crashing.',
        '<code>get(i)</code> is slow on a LinkedList.',
        'Use ArrayList by default; LinkedList for a waiting line.'
      ],
      rememberAr: 'LinkedList سلسلة عُقَد، سريعة عند الطرفين وبطيئة في get(i). peekFirst وpollFirst تعيدان null للقائمة الفارغة. نستخدم ArrayList افتراضياً وLinkedList لطوابير الانتظار.',
      practice: [
        { t: 'mcq', q: 'Which method belongs to LinkedList but not to a plain ArrayList?', options: ['add', 'size', 'pollFirst', 'get'], answer: 2, explain: 'pollFirst (and peekFirst, pollLast, peekLast) are LinkedList methods. add, size and get belong to every List. (Since Java 21 an ArrayList also has addFirst, but not pollFirst.)' },
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
        { t: 'code', q: 'Read <code>n</code> (at least 3) and then <code>n</code> words into a <code>LinkedList&lt;String&gt;</code>. Remove the first and the last word and print the list that remains. No prompts.', qAr: '{{g:اقرأ|اقرئي}} n كلمة {{g:وضعها|وضعيها}} في LinkedList ثم {{g:احذف|احذفي}} الأولى والأخيرة و{{g:اطبع|اطبعي}} الباقي.', starter: J`
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
        `, hint: 'Use list.removeFirst() and list.removeLast().', explain: 'The two end methods do the job in one line each.' },
        { t: 'bug', q: 'This program should serve Sara, then Ali, then stop. Instead it prints <code>Serving Sara</code> forever. Tap the line with the bug.', qAr: 'البرنامج يطبع Serving Sara بلا توقف. أين الخطأ؟', code: J`
          import java.util.LinkedList;

          public class Main {
              public static void main(String[] args) {
                  LinkedList<String> q = new LinkedList<>();
                  q.add("Sara");
                  q.add("Ali");
                  while (!q.isEmpty()) {
                      String c = q.getFirst();
                      System.out.println("Serving " + c);
                  }
              }
          }
        `, bug: 9, fix: J`
          import java.util.LinkedList;

          public class Main {
              public static void main(String[] args) {
                  LinkedList<String> q = new LinkedList<>();
                  q.add("Sara");
                  q.add("Ali");
                  while (!q.isEmpty()) {
                      String c = q.removeFirst();
                      System.out.println("Serving " + c);
                  }
              }
          }
        `, hint: 'Which line should make the queue shorter?', explain: '<code>getFirst()</code> only looks at Sara and never removes her, so the queue is never empty and the loop never ends. <code>removeFirst()</code> takes her out, then Ali, and then the loop stops.', explainAr: 'getFirst تنظر فقط؛ removeFirst تحذف فتنتهي الحلقة.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.LinkedList;

          public class Main {
              public static void main(String[] args) {
                  LinkedList<Integer> q = new LinkedList<>();
                  q.add(4);
                  q.addFirst(2);
                  System.out.println(q.pollFirst());
                  System.out.println(q.pollLast());
                  System.out.println(q.pollFirst());
                  System.out.println(q.size());
              }
          }
        `, answer: J`
          2
          4
          null
          0
        `, explain: 'The list is [2, 4]. pollFirst takes 2, pollLast takes 4. Now it is empty, so pollFirst returns null instead of crashing, and the size is 0.', explainAr: 'pollFirst تعيد null عندما تكون القائمة فارغة.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> integers. Put every <b>even</b> number at the FRONT of a <code>LinkedList&lt;Integer&gt;</code> and every <b>odd</b> number at the END. Print the list. No prompts.', qAr: '{{g:ضع|ضعي}} الأعداد الزوجية في البداية والفردية في النهاية ثم {{g:اطبع|اطبعي}} القائمة.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  LinkedList<Integer> list = new LinkedList<>();
                  // read n numbers: even -> addFirst, odd -> addLast
              }
          }
        `, tests: [{ stdin: '5\n1 2 3 4 5', expected: '[4, 2, 1, 3, 5]' }, { stdin: '3\n6 8 7', expected: '[8, 6, 7]' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  LinkedList<Integer> list = new LinkedList<>();
                  for (int i = 0; i < n; i++) {
                      int x = in.nextInt();
                      if (x % 2 == 0) {
                          list.addFirst(x);
                      } else {
                          list.addLast(x);
                      }
                  }
                  System.out.println(list);
              }
          }
        `, hint: 'Trace it on paper: after 1, 2, 3, 4 the list is [4, 2, 1, 3].', explain: 'Each even number goes in front of everything read so far, so the even numbers end up in reverse order; the odd numbers keep their order at the end.', explainAr: 'الزوجية تظهر بترتيب معكوس لأن كل واحد يدخل في المقدمة.' }
      ]
    },

    // ---------------------------------------------------------------- L6
    {
      title: 'Iterator and ListIterator',
      titleAr: 'المُكرِّر Iterator و ListIterator',
      minutes: 30,
      body: [
        { type: 'h', en: 'A safe way to walk through a collection' },
        { type: 'p', en: 'In Lesson 4 you learned that you must not call <code>list.remove(...)</code> inside a for-each loop. But sometimes you do want to remove items while you walk through the list. Java solves this with an <b>iterator</b>: a helper object that walks through a collection for you and is allowed to remove the item it just visited.', ar: 'المُكرِّر يمر على العناصر ويستطيع حذف العنصر الحالي بأمان.' },
        { type: 'analogy', title: 'A finger on a shopping list', en: 'You move your finger down the list, one item at a time. When you cross out the item under your finger, you do not lose your place.' },
        { type: 'h', en: 'Why does for-each crash when you remove?' },
        { type: 'p', en: 'A for-each loop over a list secretly uses an iterator. The list counts every change made to it. If you call <code>list.remove(...)</code> yourself, the hidden iterator sees that the list changed behind its back, and it stops the program instead of giving you wrong results. This code compiles, but it crashes:' },
        { type: 'code', code: J`
          for (double p : prices) {
              if (p > 50) {
                  prices.remove(p);   // the list changes behind the loop
              }
          }
        ` },
        { type: 'p', en: 'Java prints <code>Exception in thread "main" java.util.ConcurrentModificationException</code>. "Concurrent modification" means "changed while someone was walking through it". The fix is to remove <b>through</b> the iterator, so the iterator knows about the change.', ar: 'حلقة for-each تستخدم مكرراً مخفياً، والحذف من القائمة مباشرة يربكه فيتوقف البرنامج.' },
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
        { type: 'memory', title: 'The finger inside the iterator', en: 'An iterator is a small object that remembers two things: the index it will give next, and the item it gave last. When <code>it.remove()</code> deletes that item, the iterator also moves its finger back by one, so the item that slides left is not skipped.', code: J`
          Iterator<Double> it = prices.iterator();
          it.next();      // 12.5
          it.next();      // 99.0
          it.remove();    // removes 99.0
        `, frames: [
          { label: 'After <code>prices.iterator()</code>', vars: [{ name: 'prices', type: 'ArrayList<Double>', ref: 'A' }, { name: 'it', type: 'Iterator<Double>', ref: 'I' }], objects: [
            { id: 'A', cls: 'ArrayList<Double>', fields: [{ name: '[0]', value: '12.5' }, { name: '[1]', value: '99.0' }, { name: '[2]', value: '7.25' }] },
            { id: 'I', cls: 'Iterator', fields: [{ name: 'list', ref: 'A' }, { name: 'next index', value: '0' }, { name: 'last given', value: 'none' }] }
          ] },
          { label: 'After the first <code>it.next()</code> (gives 12.5)', vars: [{ name: 'prices', type: 'ArrayList<Double>', ref: 'A' }, { name: 'it', type: 'Iterator<Double>', ref: 'I' }], objects: [
            { id: 'A', cls: 'ArrayList<Double>', fields: [{ name: '[0]', value: '12.5' }, { name: '[1]', value: '99.0' }, { name: '[2]', value: '7.25' }] },
            { id: 'I', cls: 'Iterator', fields: [{ name: 'list', ref: 'A' }, { name: 'next index', value: '1' }, { name: 'last given', value: '[0]' }] }
          ] },
          { label: 'After the second <code>it.next()</code> (gives 99.0)', vars: [{ name: 'prices', type: 'ArrayList<Double>', ref: 'A' }, { name: 'it', type: 'Iterator<Double>', ref: 'I' }], objects: [
            { id: 'A', cls: 'ArrayList<Double>', fields: [{ name: '[0]', value: '12.5' }, { name: '[1]', value: '99.0' }, { name: '[2]', value: '7.25' }] },
            { id: 'I', cls: 'Iterator', fields: [{ name: 'list', ref: 'A' }, { name: 'next index', value: '2' }, { name: 'last given', value: '[1]' }] }
          ] },
          { label: 'After <code>it.remove()</code>: 7.25 slides to [1], and the finger moves back to 1', vars: [{ name: 'prices', type: 'ArrayList<Double>', ref: 'A' }, { name: 'it', type: 'Iterator<Double>', ref: 'I' }], objects: [
            { id: 'A', cls: 'ArrayList<Double>', fields: [{ name: '[0]', value: '12.5' }, { name: '[1]', value: '7.25' }] },
            { id: 'I', cls: 'Iterator', fields: [{ name: 'list', ref: 'A' }, { name: 'next index', value: '1' }, { name: 'last given', value: 'none' }] }
          ] }
        ], ar: 'المكرر يعيد إصبعه خطوة إلى الخلف بعد الحذف، فلا يتخطى أي عنصر.' },
        { type: 'h', en: 'A shortcut: removeIf' },
        { type: 'p', en: 'Removing by a rule is so common that lists have a one-line method for it: <code>removeIf</code>. You give it the rule as a lambda (you met lambdas with Comparator in Unit 5). Read <code>p -&gt; p &gt; 50</code> as "for each p, remove it when p is more than 50". Inside, removeIf walks through the list safely for you.', ar: 'removeIf تحذف كل عنصر يحقق الشرط في سطر واحد.' },
        { type: 'analogy', title: 'Giving a rule to a helper', en: 'Instead of checking every box in the store room yourself, you tell a helper: "throw away every box older than one year". The helper walks the shelves and does it.' },
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
                  prices.removeIf(p -> p > 50);
                  System.out.println(prices);
              }
          }
        `, out: '[12.5, 7.25, 30.0]' },
        { type: 'lines', rows: [
          ['prices.removeIf(p -> p > 50);', 'p stands for each price in turn. When <code>p &gt; 50</code> is true, that price is removed.'],
          ['System.out.println(prices);', 'Same result as the Iterator program, in one line instead of seven.']
        ], ar: 'المتغير p يمثل كل سعر بدوره.' },
        { type: 'check', q: 'A list of names. Which line removes every name that starts with "A"?', options: ['names.remove("A");', 'names.removeIf(n -&gt; n.startsWith("A"));', 'names.removeIf("A");', 'for (String n : names) names.remove(n);'], answer: 1, explain: 'removeIf takes a rule (a lambda). n stands for each name; startsWith("A") is the rule.' },
        { type: 'note', kind: 'tip', en: 'Use <code>removeIf</code> for a simple rule. Use an <code>Iterator</code> when you must do more work for each item, for example print the removed item or count it. Both are safe; <code>list.remove</code> inside for-each is not. Every collection has <code>iterator()</code>, even the sets in the next lesson, which have no indexes at all.' },
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
        `, stdin: '5\nAl Sara Bo Fahad Li', out: 'Kept: [Sara, Fahad]', ar: 'نحذف بواسطة المُكرِّر لا بواسطة القائمة.' },
        { type: 'steps', title: 'Worked example: a 10% discount with ListIterator.set', problem: 'A shop gives 10% off every price above 100 riyals. Read n whole-riyal prices, change the prices in the list itself, and print the list.', steps: [
          { en: 'Read the prices into an ArrayList&lt;Integer&gt;.', code: J`
            ArrayList<Integer> prices = new ArrayList<>();
            int n = in.nextInt();
            for (int i = 0; i < n; i++) {
                prices.add(in.nextInt());
            }
          ` },
          { en: 'Walk through the list with a ListIterator, because only a ListIterator can <code>set</code>.', code: J`
            ListIterator<Integer> li = prices.listIterator();
            while (li.hasNext()) {
                int p = li.next();
          ` },
          { en: 'If the price is above 100, replace it with the price minus a tenth (integer division).', code: J`
                if (p > 100) {
                    li.set(p - p / 10);
                }
            }
          ` },
          { en: 'Print the changed list.', code: 'System.out.println(prices);' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  ArrayList<Integer> prices = new ArrayList<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      prices.add(in.nextInt());
                  }
                  ListIterator<Integer> li = prices.listIterator();
                  while (li.hasNext()) {
                      int p = li.next();
                      if (p > 100) {
                          li.set(p - p / 10);
                      }
                  }
                  System.out.println(prices);
              }
          }
        `, stdin: '4\n80 120 250 100', out: '[80, 108, 225, 100]', ar: 'set تستبدل العنصر الذي أعاده next للتو.' }
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
        'The cursor sits between items: <code>next()</code> jumps right, <code>previous()</code> jumps left.',
        'For a simple rule, <code>list.removeIf(x -&gt; rule)</code> removes every matching item safely in one line.'
      ],
      rememberAr: 'نستخدم Iterator للحذف أثناء المرور، أو removeIf لقاعدة بسيطة. ListIterator يضيف الرجوع للخلف وset. المؤشر يقع بين العناصر.',
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
        { t: 'code', q: 'Read <code>n</code> and then <code>n</code> integers into an ArrayList. Use an <b>Iterator</b> to remove every even number. Print the list that remains. No prompts.', qAr: '{{g:احذف|احذفي}} الأعداد الزوجية باستخدام Iterator ثم {{g:اطبع|اطبعي}} الباقي.', starter: J`
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
        `, hint: 'int x = it.next(); then if (x % 2 == 0) it.remove();', explain: 'The iterator may remove the item it just returned.' },
        { t: 'bug', q: 'This program should remove the prices above 50, but it crashes with <code>ConcurrentModificationException</code>. Tap the line with the bug.', qAr: 'البرنامج يتوقف باستثناء ConcurrentModificationException. أين الخطأ؟', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> prices = new ArrayList<>(Arrays.asList(12, 99, 7, 150, 30));
                  for (int p : prices) {
                      if (p > 50) {
                          prices.remove(Integer.valueOf(p));
                      }
                  }
                  System.out.println(prices);
              }
          }
        `, bug: [6, 8], fix: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> prices = new ArrayList<>(Arrays.asList(12, 99, 7, 150, 30));
                  prices.removeIf(p -> p > 50);
                  System.out.println(prices);
              }
          }
        `, hint: 'Who is allowed to remove while a for-each loop is walking the list?', explain: 'The for-each loop (line 6) walks with a hidden iterator. <code>prices.remove</code> (line 8) changes the list behind its back, so the next step crashes. Use <code>removeIf</code> (or an Iterator and <code>it.remove()</code>). The fixed program prints <code>[12, 7, 30]</code>.', explainAr: 'لا {{g:تحذف|تحذفي}} من القائمة داخل for-each؛ {{g:استخدم|استخدمي}} removeIf أو it.remove().' },
        { t: 'bug', q: 'Same crash, but now there IS an iterator. Tap the line with the bug.', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> names = new ArrayList<>(Arrays.asList("Al", "Sara", "Bo", "Fahad"));
                  Iterator<String> it = names.iterator();
                  while (it.hasNext()) {
                      String s = it.next();
                      if (s.length() < 3) {
                          names.remove(s);
                      }
                  }
                  System.out.println(names);
              }
          }
        `, bug: 10, fix: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> names = new ArrayList<>(Arrays.asList("Al", "Sara", "Bo", "Fahad"));
                  Iterator<String> it = names.iterator();
                  while (it.hasNext()) {
                      String s = it.next();
                      if (s.length() < 3) {
                          it.remove();
                      }
                  }
                  System.out.println(names);
              }
          }
        `, hint: 'Having an iterator is not enough. Who must do the removing?', explain: 'The removal must go through the iterator. <code>names.remove(s)</code> changes the list without telling <code>it</code>, so the next <code>it.next()</code> throws. <code>it.remove()</code> removes the current name safely; the fixed program prints <code>[Sara, Fahad]</code>.', explainAr: 'يجب الحذف عن طريق المكرر نفسه: it.remove().' },
        { t: 'output', q: '<code>removeIf</code> also returns <code>true</code> when it removed at least one item. What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> fruit = new ArrayList<>(Arrays.asList("apple", "kiwi", "avocado", "fig", "apricot"));
                  boolean changed = fruit.removeIf(s -> s.startsWith("a"));
                  System.out.println(changed);
                  System.out.println(fruit);
                  System.out.println(fruit.removeIf(s -> s.length() > 10));
              }
          }
        `, answer: J`
          true
          [kiwi, fig]
          false
        `, explain: 'apple, avocado and apricot start with "a", so they go and removeIf returns true. No fruit left has more than 10 letters, so the second call removes nothing and returns false.', explainAr: 'removeIf تعيد true إذا حذفت شيئاً.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> prices (whole riyals) into an ArrayList. Remove every price below 10 using <code>removeIf</code>. Print the list, then <code>Removed: </code> and how many prices were removed. No prompts.', qAr: '{{g:احذف|احذفي}} الأسعار الأقل من 10 بـ removeIf و{{g:اطبع|اطبعي}} القائمة وعدد المحذوف.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Integer> prices = new ArrayList<>();
                  // read, remember the size, removeIf, print
              }
          }
        `, tests: [{ stdin: '5\n5 20 8 15 3', expected: J`
          [20, 15]
          Removed: 3
        ` }, { stdin: '2\n10 11', expected: J`
          [10, 11]
          Removed: 0
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Integer> prices = new ArrayList<>();
                  for (int i = 0; i < n; i++) {
                      prices.add(in.nextInt());
                  }
                  int before = prices.size();
                  prices.removeIf(p -> p < 10);
                  System.out.println(prices);
                  System.out.println("Removed: " + (before - prices.size()));
              }
          }
        `, hint: 'Save prices.size() before removeIf. The difference of the two sizes is the number removed.', explain: 'removeIf does not tell you how many it removed, but the size before minus the size after does.', explainAr: 'الفرق بين الحجم قبل الحذف وبعده هو عدد المحذوف.' }
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
        { type: 'memory', title: 'A repeat changes nothing', en: 'The set holds each course once. Adding CS101 again does not make a second copy; the only result is the answer <code>false</code>. (A HashSet keeps no particular order, so the order of the boxes below means nothing.)', frames: [
          { label: 'After the first three <code>add</code> calls', vars: [{ name: 'courses', type: 'HashSet<String>', ref: 'S' }], objects: [
            { id: 'S', cls: 'HashSet<String>', fields: [{ name: 'size', value: '3' }, { name: 'item', value: '"CS101"' }, { name: 'item', value: '"MATH111"' }, { name: 'item', value: '"CS102"' }] }
          ] },
          { label: 'After <code>boolean added = courses.add("CS101");</code>', vars: [{ name: 'courses', type: 'HashSet<String>', ref: 'S' }, { name: 'added', type: 'boolean', value: 'false' }], objects: [
            { id: 'S', cls: 'HashSet<String>', fields: [{ name: 'size', value: '3' }, { name: 'item', value: '"CS101"' }, { name: 'item', value: '"MATH111"' }, { name: 'item', value: '"CS102"' }] }
          ] }
        ], ar: 'إضافة قيمة موجودة لا تغير المجموعة، والنتيجة false فقط.' },
        { type: 'h', en: 'Why is a HashSet so fast?' },
        { type: 'p', en: 'To answer <code>list.contains("Omar")</code>, an ArrayList checks its items one by one: with 100,000 names that can be 100,000 checks. A HashSet works differently. From the value itself it calculates a number called a <b>hash code</b>, and that number says which small group (bucket) the value lives in. It jumps straight to that group and checks only the few values there.', ar: 'HashSet يحسب رقماً (hash code) من القيمة يدله مباشرة على مكانها، فلا يفحص كل العناصر.' },
        { type: 'analogy', title: 'The pigeonholes in a mail room', en: 'A university mail room has one pigeonhole for each first letter. To find the letter for Omar, the clerk goes straight to the O box. He does not read every letter in the room. The first letter is like the hash code.' },
        { type: 'table', head: ['Question on 100,000 items', 'ArrayList', 'HashSet'], rows: [
          ['<code>contains(x)</code>', 'Up to 100,000 checks', 'About 1 check'],
          ['<code>add(x)</code> without repeats', 'Must call contains first (slow)', 'Built in, fast'],
          ['Keeps the order you added?', 'Yes', 'No']
        ] },
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
        { type: 'note', kind: 'warn', en: 'Never rely on the printed order of a <code>HashSet</code>. It can change between computers and Java versions. Use <code>TreeSet</code> when order matters.', ar: 'لا {{g:تعتمد|تعتمدي}} على ترتيب HashSet.' },
        { type: 'check', q: 'You need the unique student IDs printed from smallest to largest. Which class?', options: ['ArrayList', 'HashSet', 'TreeSet', 'LinkedList'], answer: 2, explain: 'TreeSet has no repeats and keeps sorted order.' },
        { type: 'p', en: 'There is a third set, <code>LinkedHashSet</code>. It removes repeats too, but it remembers the order in which values were <b>first added</b>. Use it when you want "no repeats, same order as typed".' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  LinkedHashSet<String> orders = new LinkedHashSet<>();
                  orders.add("tea");
                  orders.add("coffee");
                  orders.add("tea");
                  orders.add("juice");
                  System.out.println(orders);
              }
          }
        `, out: '[tea, coffee, juice]' },
        { type: 'h', en: 'Working with two sets: both, all, only one' },
        { type: 'p', en: 'The student affairs office has the list of students in CS102 and the list in MATH. Who takes both? Who takes at least one? Who takes only CS102? Sets answer these questions with three methods. Each one <b>changes</b> the set you call it on, so first make a copy.' },
        { type: 'table', head: ['Method', 'Question it answers', 'Maths name'], rows: [
          ['<code>a.retainAll(b)</code>', 'Keep in a only what is ALSO in b (in both)', 'intersection'],
          ['<code>a.addAll(b)</code>', 'Put everything of b into a (in at least one)', 'union'],
          ['<code>a.removeAll(b)</code>', 'Take out of a everything that is in b (only in a)', 'difference']
        ] },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeSet<String> cs = new TreeSet<>(Arrays.asList("Huda", "Omar", "Sara", "Ziad"));
                  TreeSet<String> math = new TreeSet<>(Arrays.asList("Omar", "Lina", "Ziad"));
                  TreeSet<String> both = new TreeSet<>(cs);
                  both.retainAll(math);
                  System.out.println("Both: " + both);
                  TreeSet<String> all = new TreeSet<>(cs);
                  all.addAll(math);
                  System.out.println("All: " + all);
                  TreeSet<String> onlyCs = new TreeSet<>(cs);
                  onlyCs.removeAll(math);
                  System.out.println("Only CS102: " + onlyCs);
              }
          }
        `, out: J`
          Both: [Omar, Ziad]
          All: [Huda, Lina, Omar, Sara, Ziad]
          Only CS102: [Huda, Sara]
        ` },
        { type: 'lines', rows: [
          ['TreeSet<String> both = new TreeSet<>(cs);', 'A copy of cs, so the original set is not damaged.'],
          ['both.retainAll(math);', 'Keep only Omar and Ziad, the names that are also in math.'],
          ['all.addAll(math);', 'Lina joins; Omar and Ziad are already there, so they are not repeated.'],
          ['onlyCs.removeAll(math);', 'Omar and Ziad leave; Huda and Sara stay.']
        ], ar: 'retainAll للمشترك، وaddAll للاتحاد، وremoveAll للفرق. {{g:انسخ|انسخي}} المجموعة أولاً.' },
        { type: 'check', q: 'a = {1, 2, 3}, b = {2, 3, 4}. After <code>a.removeAll(b)</code>, a is:', options: ['{1}', '{4}', '{2, 3}', '{1, 2, 3, 4}'], answer: 0, explain: 'removeAll takes out of a every value that is also in b (2 and 3). Only 1 is left.' },
        { type: 'note', kind: 'warn', en: 'For your own classes (for example a <code>Student</code> from Unit 2), a HashSet can only find repeats if the class defines <code>equals</code> and <code>hashCode</code>. Until you learn that, keep Strings and Integers in your sets.' },
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
        `, ar: 'المجموعة تتجاهل التكرار تلقائياً.' },
        { type: 'steps', title: 'Worked example: the first repeated ID', problem: 'At the exam hall door, students scan their ID cards. Read n IDs in scan order and print the first ID that is scanned a second time, or <code>No repeats</code>.', steps: [
          { en: 'Make a set of IDs already seen, and a variable for the answer (-1 means "none yet").', code: J`
            HashSet<Integer> seen = new HashSet<>();
            int repeated = -1;
          ` },
          { en: 'Use the answer of <code>add</code>: it is <code>false</code> when the ID was already in the set. Keep only the FIRST repeat. (The add is written first, so it runs for every ID.)', code: J`
            for (int i = 0; i < n; i++) {
                int id = in.nextInt();
                if (!seen.add(id) && repeated == -1) {
                    repeated = id;
                }
            }
          ` },
          { en: 'Print the result.', code: J`
            if (repeated == -1) {
                System.out.println("No repeats");
            } else {
                System.out.println("First repeated ID: " + repeated);
            }
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  HashSet<Integer> seen = new HashSet<>();
                  int repeated = -1;
                  for (int i = 0; i < n; i++) {
                      int id = in.nextInt();
                      if (!seen.add(id) && repeated == -1) {
                          repeated = id;
                      }
                  }
                  if (repeated == -1) {
                      System.out.println("No repeats");
                  } else {
                      System.out.println("First repeated ID: " + repeated);
                  }
              }
          }
        `, stdin: '6\n1005 1002 1009 1002 1005 1007', out: 'First repeated ID: 1002', ar: 'add تعيد false عند التكرار، فنستخدمها لاكتشاف أول رقم مكرر.' }
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
        'To remove repeats from a list: <code>new TreeSet&lt;&gt;(list)</code> or <code>new HashSet&lt;&gt;(list)</code>; <code>LinkedHashSet</code> keeps the typed order.',
        'Two sets: <code>retainAll</code> = in both, <code>addAll</code> = in at least one, <code>removeAll</code> = only in the first. Copy first.'
      ],
      rememberAr: 'المجموعة لا تحفظ التكرار. add تعيد false إذا وُجدت القيمة. HashSet بلا ترتيب مضمون، وTreeSet مرتبة، وLinkedHashSet بترتيب الإدخال. retainAll للمشترك وaddAll للاتحاد وremoveAll للفرق.',
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
        { t: 'code', q: 'Read <code>n</code> and then <code>n</code> integers. Print how many <b>different</b> numbers there are. No prompts.', qAr: '{{g:اقرأ|اقرئي}} n عدداً و{{g:اطبع|اطبعي}} عدد القيم المختلفة.', starter: J`
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
        `, hint: 'Add each number to the set, then print set.size().', explain: 'The set removes repeats for you, so its size is the number of different values.' },
        { t: 'bug', q: 'This program should print only the IDs that appear twice (here: <code>Repeated: 7</code>). Instead it prints 7, 3 and 5. Tap the line with the bug.', qAr: 'المطلوب طباعة المكرر فقط، لكن البرنامج يطبع كل الأرقام الجديدة. أين الخطأ؟', code: J`
          import java.util.HashSet;

          public class Main {
              public static void main(String[] args) {
                  int[] ids = {7, 3, 7, 5};
                  HashSet<Integer> seen = new HashSet<>();
                  for (int id : ids) {
                      if (seen.add(id)) {
                          System.out.println("Repeated: " + id);
                      }
                  }
              }
          }
        `, bug: 8, fix: J`
          import java.util.HashSet;

          public class Main {
              public static void main(String[] args) {
                  int[] ids = {7, 3, 7, 5};
                  HashSet<Integer> seen = new HashSet<>();
                  for (int id : ids) {
                      if (!seen.add(id)) {
                          System.out.println("Repeated: " + id);
                      }
                  }
              }
          }
        `, hint: 'When does add return true, and when false?', explain: '<code>add</code> returns <code>true</code> for a NEW value, so the if prints every first visit: 7, 3, 5. A repeat is when add returns <code>false</code>, so the condition must be <code>!seen.add(id)</code>.', explainAr: 'add تعيد true للقيمة الجديدة، والمكرر عندما تعيد false.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeSet<Integer> a = new TreeSet<>(Arrays.asList(5, 1, 3, 9));
                  TreeSet<Integer> b = new TreeSet<>(Arrays.asList(3, 4, 5));
                  a.retainAll(b);
                  System.out.println(a);
                  b.addAll(Arrays.asList(1, 4, 8));
                  System.out.println(b);
                  System.out.println(b.size());
              }
          }
        `, answer: J`
          [3, 5]
          [1, 3, 4, 5, 8]
          5
        `, explain: 'retainAll keeps 3 and 5, the values in both sets. addAll adds 1 and 8 to b; 4 is already there, so it is not repeated. A TreeSet prints in sorted order.', explainAr: 'retainAll تُبقي المشترك، وaddAll لا تكرر الموجود.' },
        { t: 'code', q: 'Read <code>n</code> and <code>n</code> names (members of the chess club), then <code>m</code> and <code>m</code> names (members of the robotics club). Print the names in BOTH clubs as a sorted set, for example <code>[Huda, Sara]</code>, or <code>None</code> if nobody is in both. No prompts.', qAr: '{{g:اطبع|اطبعي}} أسماء الأعضاء المشتركين في الناديين مرتبة، أو None.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  TreeSet<String> chess = new TreeSet<>();
                  TreeSet<String> robotics = new TreeSet<>();
                  // read both clubs, keep only the common names, print
              }
          }
        `, tests: [{ stdin: '3\nHuda Omar Sara\n2\nSara Huda', expected: '[Huda, Sara]' }, { stdin: '1\nAli\n1\nOmar', expected: 'None' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  TreeSet<String> chess = new TreeSet<>();
                  TreeSet<String> robotics = new TreeSet<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      chess.add(in.next());
                  }
                  int m = in.nextInt();
                  for (int i = 0; i < m; i++) {
                      robotics.add(in.next());
                  }
                  chess.retainAll(robotics);
                  if (chess.isEmpty()) {
                      System.out.println("None");
                  } else {
                      System.out.println(chess);
                  }
              }
          }
        `, hint: 'chess.retainAll(robotics) keeps only the common names. Then check isEmpty().', explain: 'retainAll is the "in both" question. A TreeSet prints its names in alphabetical order.', explainAr: 'retainAll تجيب عن سؤال: من في الاثنين؟' }
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
        { type: 'p', en: 'In CS101 you would solve "the price of tea" with two arrays side by side, one for the names and one for the prices, and a loop to find the right index:' },
        { type: 'code', code: J`
          String[] items = {"coffee", "tea", "cake"};
          int[] prices = {12, 8, 15};
          for (int i = 0; i < items.length; i++) {
              if (items[i].equals("tea")) {
                  System.out.println(prices[i]);
              }
          }
        ` },
        { type: 'p', en: 'It works, but you must keep the two arrays in step, and every question needs a loop. A map keeps each name glued to its price, and the question becomes one call: <code>menu.get("tea")</code>. It is also much faster, because a HashMap uses hash codes, like the HashSet in the last lesson.', ar: 'الخريطة تغني عن مصفوفتين متوازيتين وحلقة بحث؛ يكفي get(المفتاح).' },
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
        { type: 'memory', title: 'The pairs inside a map', en: 'Each line inside the map object is one pair: the key on the left, its value on the right. A <code>put</code> with an old key changes a value; a <code>put</code> with a new key adds a pair. (A HashMap keeps no fixed order, and it really stores arrows to String and Double objects; we write them inside to keep the picture short.)', frames: [
          { label: 'After three <code>put</code> calls', vars: [{ name: 'gpa', type: 'HashMap<String, Double>', ref: 'M' }], objects: [
            { id: 'M', cls: 'HashMap<String, Double>', fields: [{ name: '"Sara"', value: '3.8' }, { name: '"Faisal"', value: '3.1' }, { name: '"Mona"', value: '3.5' }] }
          ] },
          { label: 'After <code>gpa.put("Faisal", 3.3);</code> (old key: value replaced)', vars: [{ name: 'gpa', type: 'HashMap<String, Double>', ref: 'M' }], objects: [
            { id: 'M', cls: 'HashMap<String, Double>', fields: [{ name: '"Sara"', value: '3.8' }, { name: '"Faisal"', value: '3.3' }, { name: '"Mona"', value: '3.5' }] }
          ] },
          { label: 'After <code>gpa.put("Huda", 3.9);</code> (new key: a new pair)', vars: [{ name: 'gpa', type: 'HashMap<String, Double>', ref: 'M' }], objects: [
            { id: 'M', cls: 'HashMap<String, Double>', fields: [{ name: '"Sara"', value: '3.8' }, { name: '"Faisal"', value: '3.3' }, { name: '"Mona"', value: '3.5' }, { name: '"Huda"', value: '3.9' }] }
          ] }
        ], ar: 'put بمفتاح قديم تستبدل القيمة، وبمفتاح جديد تضيف زوجاً.' },
        { type: 'h', en: 'Updating a value: get, change, put back' },
        { type: 'p', en: 'A shop sells 5 pens. The new stock is the old stock minus 5. There is no "subtract" method in a map; you read the old value with <code>get</code>, calculate, and <code>put</code> the new value under the same key.' },
        { type: 'code', run: true, code: J`
          import java.util.HashMap;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, Integer> stock = new HashMap<>();
                  stock.put("pens", 40);
                  stock.put("pens", stock.get("pens") - 5);
                  System.out.println(stock.get("pens"));
              }
          }
        `, out: '35' },
        { type: 'lines', rows: [
          ['stock.get("pens")', 'Read the old value: 40.'],
          ['stock.get("pens") - 5', 'Calculate the new value: 35.'],
          ['stock.put("pens", ...)', 'Store 35 under the same key. It replaces 40.']
        ], ar: 'للتحديث: نقرأ القيمة القديمة ثم نضع الجديدة بالمفتاح نفسه.' },
        { type: 'check', q: 'A map has <code>"Ali" -&gt; 70</code>. Which line adds 5 bonus marks to Ali?', options: ['m.put("Ali", 5);', 'm.put("Ali", m.get("Ali") + 5);', 'm.get("Ali") + 5;', 'm.add("Ali", 5);'], answer: 1, explain: 'Read 70, add 5, and put 75 back under the key Ali. put("Ali", 5) would replace 70 with 5.' },
        { type: 'note', kind: 'warn', en: 'Keys are compared exactly, letter by letter: <code>"Tea"</code>, <code>"tea"</code> and <code>"TEA"</code> are three different keys. If users type in different styles, change the text first, for example with <code>toLowerCase()</code>.', ar: 'المفاتيح حساسة لحالة الأحرف.' },
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
        `, stdin: '3\ncoffee 12\ntea 8\ncake 15\ntea', out: 'tea costs 8 riyals', ar: 'نتحقق بـ containsKey قبل القراءة.' },
        { type: 'steps', title: 'Worked example: shop stock after sales', problem: 'Read n items with their quantities. Then read m sales (an item and how many were sold) and update the stock. Finally read one item name and print how many are left, or <code>No such item</code>.', steps: [
          { en: 'Read the stock into a map: item name -&gt; quantity.', code: J`
            HashMap<String, Integer> stock = new HashMap<>();
            int n = in.nextInt();
            for (int i = 0; i < n; i++) {
                stock.put(in.next(), in.nextInt());
            }
          ` },
          { en: 'For each sale: read the item and the amount, then get, subtract and put back.', code: J`
            int m = in.nextInt();
            for (int i = 0; i < m; i++) {
                String item = in.next();
                int sold = in.nextInt();
                stock.put(item, stock.get(item) - sold);
            }
          ` },
          { en: 'Read the item to check. Use <code>containsKey</code> before <code>get</code>, so a missing item never gives <code>null</code>.', code: J`
            String wanted = in.next();
            if (stock.containsKey(wanted)) {
                System.out.println(wanted + ": " + stock.get(wanted) + " left");
            } else {
                System.out.println("No such item");
            }
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  HashMap<String, Integer> stock = new HashMap<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      stock.put(in.next(), in.nextInt());
                  }
                  int m = in.nextInt();
                  for (int i = 0; i < m; i++) {
                      String item = in.next();
                      int sold = in.nextInt();
                      stock.put(item, stock.get(item) - sold);
                  }
                  String wanted = in.next();
                  if (stock.containsKey(wanted)) {
                      System.out.println(wanted + ": " + stock.get(wanted) + " left");
                  } else {
                      System.out.println("No such item");
                  }
              }
          }
        `, stdin: '3\npens 40\nbooks 12\nbags 5\n2\npens 15\nbags 2\npens', out: 'pens: 25 left', ar: 'نحدّث المخزون بـ get ثم put، ونتحقق بـ containsKey قبل القراءة.' }
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
        '<code>remove(k)</code> deletes the pair; <code>size()</code> counts pairs.',
        'To change a value: <code>m.put(k, m.get(k) + x)</code>. Keys are case sensitive.'
      ],
      rememberAr: 'الخريطة تربط مفتاحاً فريداً بقيمة. put تضيف أو تستبدل، وget تقرأ وتعيد null للمفتاح الغائب، وgetOrDefault وcontainsKey أكثر أماناً. للتحديث نقرأ القيمة ثم نضع الجديدة.',
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
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> pairs (a name and an integer score). Then read one more name. Print its score, or <code>-1</code> if the name was not entered. No prompts.', qAr: '{{g:اقرأ|اقرئي}} أزواجاً (اسم ودرجة) ثم اسماً للبحث، و{{g:اطبع|اطبعي}} الدرجة أو -1.', starter: J`
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
        `, hint: 'scores.getOrDefault(wanted, -1) does everything in one line.', explain: 'getOrDefault returns -1 for a name that is not a key.' },
        { t: 'bug', q: 'This program crashes with <code>NullPointerException</code>. Tap the line with the bug.', qAr: 'البرنامج يتوقف بـ NullPointerException. أين الخطأ؟', code: J`
          import java.util.HashMap;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, Integer> stock = new HashMap<>();
                  stock.put("pens", 40);
                  stock.put("books", 12);
                  int cups = stock.get("cups");
                  System.out.println("Cups: " + cups);
              }
          }
        `, bug: 8, fix: J`
          import java.util.HashMap;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, Integer> stock = new HashMap<>();
                  stock.put("pens", 40);
                  stock.put("books", 12);
                  int cups = stock.getOrDefault("cups", 0);
                  System.out.println("Cups: " + cups);
              }
          }
        `, hint: 'What does get return for a key that is not in the map?', explain: '"cups" is not a key, so <code>get</code> returns <code>null</code>. Java then tries to unbox null into the int variable and throws NullPointerException. <code>getOrDefault("cups", 0)</code> gives 0 instead, and the program prints <code>Cups: 0</code>.', explainAr: 'get تعيد null للمفتاح الغائب ولا يمكن تحويل null إلى int.' },
        { t: 'bug', q: 'A delivery of 10 pens arrives, so the stock should become 50. The program prints <code>10</code>. Tap the line with the bug.', code: J`
          import java.util.HashMap;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, Integer> stock = new HashMap<>();
                  stock.put("pens", 40);
                  // a delivery of 10 more pens arrives
                  stock.put("pens", 10);
                  System.out.println(stock.get("pens"));
              }
          }
        `, bug: 8, fix: J`
          import java.util.HashMap;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, Integer> stock = new HashMap<>();
                  stock.put("pens", 40);
                  // a delivery of 10 more pens arrives
                  stock.put("pens", stock.get("pens") + 10);
                  System.out.println(stock.get("pens"));
              }
          }
        `, hint: 'Does put add to the old value, or replace it?', explain: '<code>put</code> with an existing key REPLACES the value, so 40 becomes 10. To add, read the old value first: <code>stock.get("pens") + 10</code>, then put the result (50).', explainAr: 'put تستبدل القيمة ولا تجمع؛ {{g:اقرأ|اقرئي}} القيمة القديمة أولاً.' },
        { t: 'output', q: 'Keys are compared letter by letter. What does this program print?', code: J`
          import java.util.HashMap;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, Integer> m = new HashMap<>();
                  m.put("Tea", 8);
                  m.put("tea", 6);
                  m.put("Tea", m.get("Tea") + 1);
                  System.out.println(m.size());
                  System.out.println(m.get("Tea"));
                  System.out.println(m.get("TEA"));
              }
          }
        `, answer: J`
          2
          9
          null
        `, explain: '"Tea" and "tea" are two different keys, so the size is 2. "Tea" goes from 8 to 9. "TEA" is a third spelling that was never put, so get returns null.', explainAr: 'Tea وtea وTEA ثلاثة مفاتيح مختلفة.' },
        { t: 'code', q: '<b>Phone book.</b> Read <code>n</code>, then <code>n</code> pairs (a name and a phone number, both one word). Then read <code>q</code> and <code>q</code> names. For each name print its number, or <code>Unknown</code>. No prompts.', qAr: 'دفتر هاتف: لكل اسم {{g:اطبع|اطبعي}} رقمه أو Unknown.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  HashMap<String, String> phone = new HashMap<>();
                  // read the n pairs, then answer q questions
              }
          }
        `, tests: [{ stdin: '2\nHuda 0551234567\nOmar 0509876543\n3\nOmar Sara Huda', expected: J`
          0509876543
          Unknown
          0551234567
        ` }, { stdin: '1\nLina 0531112222\n1\nLina', expected: '0531112222' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  HashMap<String, String> phone = new HashMap<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      String name = in.next();
                      String number = in.next();
                      phone.put(name, number);
                  }
                  int q = in.nextInt();
                  for (int i = 0; i < q; i++) {
                      String name = in.next();
                      System.out.println(phone.getOrDefault(name, "Unknown"));
                  }
              }
          }
        `, hint: 'Keep the numbers as Strings (a leading 0 would be lost in an int). getOrDefault(name, "Unknown") answers each question.', explain: 'The value type can be any class: here String. getOrDefault gives "Unknown" for a name that is not a key.', explainAr: 'نحفظ الأرقام نصوصاً حتى لا يضيع الصفر في البداية.' }
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
        { type: 'p', en: 'There is a second way: <code>entrySet()</code> gives whole pairs called <code>Map.Entry</code>. Each entry has <code>getKey()</code> and <code>getValue()</code>. You get the key and the value together, so you do not need to call <code>get</code>.' },
        { type: 'analogy', title: 'Contact cards', en: '<code>keySet()</code> gives you a list of names, and you look up each number again. <code>entrySet()</code> gives you whole contact cards, each with the name and the number printed on it.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<String, Integer> stock = new TreeMap<>();
                  stock.put("pens", 40);
                  stock.put("books", 12);
                  for (Map.Entry<String, Integer> e : stock.entrySet()) {
                      System.out.println(e.getKey() + " = " + e.getValue());
                  }
              }
          }
        `, out: J`
          books = 12
          pens = 40
        ` },
        { type: 'lines', rows: [
          ['Map.Entry<String, Integer> e', 'One pair of the map: a String key with its Integer value.'],
          ['e.getKey()', 'The key of this pair, for example books.'],
          ['e.getValue()', 'The value of this pair, for example 12.']
        ], ar: 'entrySet تعطي الأزواج كاملة: getKey للمفتاح وgetValue للقيمة.' },
        { type: 'check', q: 'Which method gives you all the keys of a map?', options: ['keys()', 'keySet()', 'getKeys()', 'allKeys'], answer: 1, explain: 'The method is keySet().' },
        { type: 'h', en: 'Only the values: values()' },
        { type: 'p', en: 'Sometimes the keys do not matter. To know the total number of items in the shop, you only need the quantities. <code>values()</code> gives all the values, ready for a for-each loop.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<String, Integer> stock = new TreeMap<>();
                  stock.put("pens", 40);
                  stock.put("books", 12);
                  stock.put("bags", 5);
                  int total = 0;
                  for (int q : stock.values()) {
                      total += q;
                  }
                  System.out.println("Items in the shop: " + total);
              }
          }
        `, out: 'Items in the shop: 57' },
        { type: 'table', head: ['You need', 'Loop over', 'Inside the loop'], rows: [
          ['Only the keys', '<code>map.keySet()</code>', 'the key'],
          ['Only the values', '<code>map.values()</code>', 'the value'],
          ['Keys and values', '<code>map.entrySet()</code>', '<code>e.getKey()</code>, <code>e.getValue()</code>']
        ] },
        { type: 'note', kind: 'warn', en: 'Do not add or remove keys while a loop is walking over the same map. As with lists, Java stops with <code>ConcurrentModificationException</code>. Collect the keys to remove in a list first, then remove them after the loop.' },
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
        { type: 'memory', title: 'The counting map grows, word by word', en: 'Counting the words of <code>"the cat the"</code>. A new word adds a pair with 1; a word seen before only gets a bigger number. A TreeMap keeps the keys in alphabetical order.', frames: [
          { label: 'After the word <code>the</code> (new: 0 + 1)', vars: [{ name: 'counts', type: 'TreeMap<String, Integer>', ref: 'M' }, { name: 'w', type: 'String', value: '"the"' }], objects: [
            { id: 'M', cls: 'TreeMap<String, Integer>', fields: [{ name: '"the"', value: '1' }] }
          ] },
          { label: 'After the word <code>cat</code> (new: 0 + 1)', vars: [{ name: 'counts', type: 'TreeMap<String, Integer>', ref: 'M' }, { name: 'w', type: 'String', value: '"cat"' }], objects: [
            { id: 'M', cls: 'TreeMap<String, Integer>', fields: [{ name: '"cat"', value: '1' }, { name: '"the"', value: '1' }] }
          ] },
          { label: 'After the word <code>the</code> again (old: 1 + 1)', vars: [{ name: 'counts', type: 'TreeMap<String, Integer>', ref: 'M' }, { name: 'w', type: 'String', value: '"the"' }], objects: [
            { id: 'M', cls: 'TreeMap<String, Integer>', fields: [{ name: '"cat"', value: '1' }, { name: '"the"', value: '2' }] }
          ] }
        ], ar: 'الكلمة الجديدة تضيف زوجاً بقيمة 1، والكلمة المكررة تزيد قيمتها.' },
        { type: 'h', en: 'Counting letters' },
        { type: 'p', en: 'The same pattern counts anything: letters, votes, grades. For letters the key type is <code>Character</code>, the wrapper class of <code>char</code>. <code>word.toCharArray()</code> gives the letters of a word as an array.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<Character, Integer> letters = new TreeMap<>();
                  for (char c : "banana".toCharArray()) {
                      letters.put(c, letters.getOrDefault(c, 0) + 1);
                  }
                  System.out.println(letters);
              }
          }
        `, out: '{a=3, b=1, n=2}' },
        { type: 'note', kind: 'tip', en: 'A <code>LinkedHashMap</code> works like a HashMap but remembers the order in which keys were first put, just like a LinkedHashSet. Use TreeMap for alphabetical order and LinkedHashMap for "first come" order.' },
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
        `, ar: 'نمط العدّ: getOrDefault(k,0)+1.' },
        { type: 'steps', title: 'Worked example: the most common word', problem: 'Read n words. Print the word that appears most often and how many times. If two words tie, print the one that comes first in alphabetical order.', steps: [
          { en: 'Count the words with the counting pattern in a TreeMap.', code: J`
            TreeMap<String, Integer> counts = new TreeMap<>();
            int n = in.nextInt();
            for (int i = 0; i < n; i++) {
                String w = in.next();
                counts.put(w, counts.getOrDefault(w, 0) + 1);
            }
          ` },
          { en: 'Keep the best word so far and its count. Start with an empty word and 0.', code: J`
            String best = "";
            int bestCount = 0;
          ` },
          { en: 'Visit every pair. A count that is strictly bigger replaces the best. Because the TreeMap gives the words in alphabetical order and we use <code>&gt;</code> (not <code>&gt;=</code>), a later word with the same count does not win a tie.', code: J`
            for (Map.Entry<String, Integer> e : counts.entrySet()) {
                if (e.getValue() > bestCount) {
                    best = e.getKey();
                    bestCount = e.getValue();
                }
            }
          ` },
          { en: 'Print the result.', code: 'System.out.println("Most common: " + best + " (" + bestCount + " times)");' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  TreeMap<String, Integer> counts = new TreeMap<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      String w = in.next();
                      counts.put(w, counts.getOrDefault(w, 0) + 1);
                  }
                  String best = "";
                  int bestCount = 0;
                  for (Map.Entry<String, Integer> e : counts.entrySet()) {
                      if (e.getValue() > bestCount) {
                          best = e.getKey();
                          bestCount = e.getValue();
                      }
                  }
                  System.out.println("Most common: " + best + " (" + bestCount + " times)");
              }
          }
        `, stdin: '8\nthe cat and the dog and the bird', out: 'Most common: the (3 times)', ar: 'نعدّ أولاً ثم نبحث عن أكبر قيمة مع مفتاحها.' }
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
        '<code>entrySet()</code> gives pairs with <code>getKey()</code> and <code>getValue()</code>; <code>values()</code> gives only the values.',
        'Counting pattern: <code>m.put(k, m.getOrDefault(k, 0) + 1)</code>.',
        'Biggest value: loop over <code>entrySet()</code> and keep the best key and count.'
      ],
      rememberAr: 'TreeMap مفاتيحها مرتبة. نمر على keySet أو values أو entrySet. وللعدّ نستخدم put(k, getOrDefault(k,0)+1)، ولإيجاد الأكبر نحتفظ بأفضل مفتاح وعدده.',
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
        { t: 'code', q: 'Read words (separated by spaces) until the end of input. Print each different word and how many times it appears, one per line as <code>word count</code>, in alphabetical order. No prompts.', qAr: '{{g:اقرأ|اقرئي}} الكلمات حتى نهاية الإدخال و{{g:اطبع|اطبعي}} كل كلمة مع عدد مرات ظهورها بترتيب أبجدي.', starter: J`
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
        `, hint: 'while (in.hasNext()) { String w = in.next(); ... } then loop over keySet().', explain: 'hasNext() is false at the end of the input, which ends the loop.' },
        { t: 'bug', q: 'This word counter crashes with <code>NullPointerException</code> on the very first word. Tap the line with the bug.', qAr: 'عدّاد الكلمات يتوقف من أول كلمة. أين الخطأ؟', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  String[] words = {"red", "blue", "red"};
                  TreeMap<String, Integer> counts = new TreeMap<>();
                  for (String w : words) {
                      counts.put(w, counts.get(w) + 1);
                  }
                  System.out.println(counts);
              }
          }
        `, bug: 8, fix: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  String[] words = {"red", "blue", "red"};
                  TreeMap<String, Integer> counts = new TreeMap<>();
                  for (String w : words) {
                      counts.put(w, counts.getOrDefault(w, 0) + 1);
                  }
                  System.out.println(counts);
              }
          }
        `, hint: 'What is counts.get("red") before "red" was ever counted?', explain: 'For a new word, <code>counts.get(w)</code> is <code>null</code>, and <code>null + 1</code> cannot be calculated, so Java throws NullPointerException. <code>getOrDefault(w, 0)</code> starts new words at 0. The fixed program prints <code>{blue=1, red=2}</code>.', explainAr: 'الكلمة الجديدة ليس لها قيمة (null)؛ {{g:استخدم|استخدمي}} getOrDefault(w, 0).' },
        { t: 'bug', q: 'This program does not compile. Tap the line with the bug.', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<String, Integer> m = new TreeMap<>();
                  m.put("tea", 8);
                  for (String k : m) {
                      System.out.println(k + " " + m.get(k));
                  }
              }
          }
        `, bug: 7, fix: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<String, Integer> m = new TreeMap<>();
                  m.put("tea", 8);
                  for (String k : m.keySet()) {
                      System.out.println(k + " " + m.get(k));
                  }
              }
          }
        `, hint: 'Can a for-each loop walk over a map directly?', explain: 'A map is not a list of single items, so for-each cannot walk over it directly (Java says: for-each not applicable). Loop over <code>m.keySet()</code>, <code>m.values()</code> or <code>m.entrySet()</code>.', explainAr: 'لا يمكن المرور على الخريطة مباشرة؛ {{g:استخدم|استخدمي}} keySet أو entrySet.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<String, Integer> stock = new TreeMap<>();
                  stock.put("pens", 40);
                  stock.put("bags", 5);
                  stock.put("books", 12);
                  int total = 0;
                  for (int q : stock.values()) {
                      total += q;
                  }
                  System.out.println(total);
                  for (Map.Entry<String, Integer> e : stock.entrySet()) {
                      if (e.getValue() < 20) {
                          System.out.println("Order more " + e.getKey());
                      }
                  }
              }
          }
        `, answer: J`
          57
          Order more bags
          Order more books
        `, explain: '40 + 5 + 12 = 57. Then the entries come in alphabetical order (bags, books, pens); bags (5) and books (12) are below 20.', explainAr: 'نجمع القيم، ثم نمر على الأزواج بالترتيب الأبجدي.' },
        { t: 'code', q: 'Read ONE word. Print each different letter and how many times it appears, one per line as <code>letter count</code>, in alphabetical order. No prompts.', qAr: '{{g:اقرأ|اقرئي}} كلمة و{{g:اطبع|اطبعي}} كل حرف مع عدد مرات ظهوره بترتيب أبجدي.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String word = in.next();
                  TreeMap<Character, Integer> letters = new TreeMap<>();
                  // count the letters, then print them
              }
          }
        `, tests: [{ stdin: 'banana', expected: J`
          a 3
          b 1
          n 2
        ` }, { stdin: 'level', expected: J`
          e 2
          l 2
          v 1
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String word = in.next();
                  TreeMap<Character, Integer> letters = new TreeMap<>();
                  for (char c : word.toCharArray()) {
                      letters.put(c, letters.getOrDefault(c, 0) + 1);
                  }
                  for (Map.Entry<Character, Integer> e : letters.entrySet()) {
                      System.out.println(e.getKey() + " " + e.getValue());
                  }
              }
          }
        `, hint: 'Loop with for (char c : word.toCharArray()) and use the counting pattern. Then loop over entrySet().', explain: 'The key type is Character, the wrapper of char. The TreeMap keeps the letters in alphabetical order.', explainAr: 'نوع المفتاح Character، والخريطة المرتبة تعطي الحروف أبجدياً.' }
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
        { type: 'p', en: 'The item at the front of the queue is called the <b>head</b>. A PriorityQueue promises only one thing: the head is the smallest item. It does NOT keep all the items in sorted order inside. It keeps them in a clever half-sorted shape (called a heap) that is quick to fix after every <code>offer</code> or <code>poll</code>. That is why you ask for items one at a time.', ar: 'الطابور يضمن فقط أن العنصر في المقدمة هو الأصغر، وليس أن كل العناصر مرتبة.' },
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
        { type: 'note', kind: 'exam', en: 'Never print the queue itself (<code>System.out.println(pq)</code>) or loop over it with for-each to see the priority order. Only the head is guaranteed to be the smallest. To get the right order, use <code>poll()</code> repeatedly.', ar: 'لا {{g:تطبع|تطبعي}} الطابور مباشرة؛ {{g:استخدم|استخدمي}} poll.' },
        { type: 'h', en: 'Largest first: reverseOrder' },
        { type: 'p', en: 'What if the biggest number should come first, like the highest bid in an auction? Give the queue a reversed order: <code>new PriorityQueue&lt;&gt;(Collections.reverseOrder())</code>. You need <code>import java.util.*;</code>.' },
        { type: 'analogy', title: 'The auctioneer', en: 'At a car auction the auctioneer does not care who raised a hand first. He always looks for the highest offer in the room. A reversed PriorityQueue is that auctioneer.', ar: 'في المزاد يُختار العرض الأعلى دائماً.' },
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
        { type: 'h', en: 'Your own objects: patients by urgency' },
        { type: 'p', en: 'In a real clinic each patient is an object with a name and an urgency level. Java cannot guess which patient is "smaller". You tell it with a <b>Comparator</b>, written as a lambda, exactly as in Unit 5: <code>(a, b) -&gt; a.getLevel() - b.getLevel()</code> means "the patient with the lower level comes first".', ar: 'مع الكائنات نعطي الطابور Comparator يحدد من يأتي أولاً.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  PriorityQueue<Patient> er = new PriorityQueue<>((a, b) -> a.getLevel() - b.getLevel());
                  er.offer(new Patient("Omar", 3));
                  er.offer(new Patient("Huda", 1));
                  er.offer(new Patient("Fahad", 2));
                  while (!er.isEmpty()) {
                      System.out.println(er.poll());
                  }
              }
          }

          class Patient {
              private String name;
              private int level;

              Patient(String name, int level) {
                  this.name = name;
                  this.level = level;
              }

              int getLevel() {
                  return level;
              }

              public String toString() {
                  return name + " (level " + level + ")";
              }
          }
        `, out: J`
          Huda (level 1)
          Fahad (level 2)
          Omar (level 3)
        ` },
        { type: 'lines', rows: [
          ['new PriorityQueue<>((a, b) -> a.getLevel() - b.getLevel())', 'The Comparator: a negative answer means a comes first, so lower levels come out first.'],
          ['er.offer(new Patient("Omar", 3));', 'The queue keeps a reference to each new Patient object.'],
          ['System.out.println(er.poll());', 'poll removes the most urgent patient; println uses toString.']
        ], ar: 'الـ Comparator يقارن مستوى الإلحاح، والأقل يخرج أولاً.' },
        { type: 'memory', title: 'The queue holds arrows to Patient objects', en: 'The queue does not copy the patients; it keeps references to them. Its head always points to the most urgent patient. The order of the others is not promised.', code: J`
          er.offer(new Patient("Omar", 3));
          er.offer(new Patient("Huda", 1));
          er.offer(new Patient("Fahad", 2));
          Patient next = er.poll();
        `, frames: [
          { label: 'After the three <code>offer</code> calls', vars: [{ name: 'er', type: 'PriorityQueue<Patient>', ref: 'Q' }], objects: [
            { id: 'Q', cls: 'PriorityQueue<Patient>', fields: [{ name: 'size', value: '3' }, { name: 'head', ref: 'P2' }, { name: 'other', ref: 'P1' }, { name: 'other', ref: 'P3' }] },
            { id: 'P1', cls: 'Patient', fields: [{ name: 'name', value: '"Omar"' }, { name: 'level', value: '3' }] },
            { id: 'P2', cls: 'Patient', fields: [{ name: 'name', value: '"Huda"' }, { name: 'level', value: '1' }] },
            { id: 'P3', cls: 'Patient', fields: [{ name: 'name', value: '"Fahad"' }, { name: 'level', value: '2' }] }
          ] },
          { label: 'After <code>Patient next = er.poll();</code>', vars: [{ name: 'er', type: 'PriorityQueue<Patient>', ref: 'Q' }, { name: 'next', type: 'Patient', ref: 'P2' }], objects: [
            { id: 'Q', cls: 'PriorityQueue<Patient>', fields: [{ name: 'size', value: '2' }, { name: 'head', ref: 'P3' }, { name: 'other', ref: 'P1' }] },
            { id: 'P1', cls: 'Patient', fields: [{ name: 'name', value: '"Omar"' }, { name: 'level', value: '3' }] },
            { id: 'P2', cls: 'Patient', fields: [{ name: 'name', value: '"Huda"' }, { name: 'level', value: '1' }] },
            { id: 'P3', cls: 'Patient', fields: [{ name: 'name', value: '"Fahad"' }, { name: 'level', value: '2' }] }
          ] }
        ], ar: 'بعد poll يخرج أكثر المرضى إلحاحاً ويصبح التالي في المقدمة.' },
        { type: 'check', q: 'Which Comparator makes the patient with the HIGHEST level come out first?', options: ['(a, b) -&gt; a.getLevel() - b.getLevel()', '(a, b) -&gt; b.getLevel() - a.getLevel()', '(a, b) -&gt; 0', 'No Comparator is needed'], answer: 1, explain: 'Swapping a and b flips the order, so the bigger level comes first.' },
        { type: 'note', kind: 'warn', en: 'When two items have the same priority, a PriorityQueue does NOT promise first come, first served between them. If arrival order matters for ties, add it to the Comparator (for example a ticket number).' },
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
        `, stdin: '5\n40 10 30 20 50', out: '10 20 30 40 50', ar: 'نخرج المهام من الأصغر للأكبر بـ poll.' },
        { type: 'steps', title: 'Worked example: the top 3 scores', problem: 'A competition has n scores. Print the three highest scores as <code>1. score</code>, <code>2. score</code>, <code>3. score</code>. If there are fewer than 3 scores, print all of them.', steps: [
          { en: 'Make a queue that gives the LARGEST first, and offer every score.', code: J`
            PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
            int n = in.nextInt();
            for (int i = 0; i < n; i++) {
                pq.offer(in.nextInt());
            }
          ` },
          { en: 'Poll at most 3 times. The condition <code>!pq.isEmpty()</code> stops early when there are fewer than 3 scores.', code: J`
            int place = 1;
            while (place <= 3 && !pq.isEmpty()) {
                System.out.println(place + ". " + pq.poll());
                place++;
            }
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      pq.offer(in.nextInt());
                  }
                  int place = 1;
                  while (place <= 3 && !pq.isEmpty()) {
                      System.out.println(place + ". " + pq.poll());
                      place++;
                  }
              }
          }
        `, stdin: '6\n70 95 60 88 99 75', out: J`
          1. 99
          2. 95
          3. 88
        `, ar: 'نعكس الترتيب ليخرج الأكبر أولاً، ونتوقف بعد ثلاث مرات.' }
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
        'Get sorted order with repeated <code>poll()</code>, never by printing.',
        'For your own objects, give a Comparator: <code>new PriorityQueue&lt;&gt;((a, b) -&gt; a.getLevel() - b.getLevel())</code>.'
      ],
      rememberAr: 'PriorityQueue تعطي الأصغر أولاً. offer للإضافة وpeek للنظر وpoll للإخراج. {{g:استخدم|استخدمي}} reverseOrder للأكبر أولاً، وComparator لكائناتك.',
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
        { t: 'code', q: 'Read <code>n</code> (at least 3) and then <code>n</code> integers. Print the three smallest numbers, one per line, using a PriorityQueue. No prompts.', qAr: '{{g:اطبع|اطبعي}} أصغر ثلاثة أعداد، كل عدد في سطر، باستخدام PriorityQueue.', starter: J`
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
        `, hint: 'Offer all n numbers in one loop, then poll three times in a second loop.', explain: 'Each poll gives the next smallest value.' },
        { t: 'bug', q: 'The programmer wants the numbers from the smallest to the largest, but the program prints <code>[2, 4, 9, 7]</code>. Tap the line with the bug.', qAr: 'المطلوب طباعة الأعداد مرتبة، لكن الناتج غير مرتب. أين الخطأ؟', code: J`
          import java.util.PriorityQueue;

          public class Main {
              public static void main(String[] args) {
                  PriorityQueue<Integer> pq = new PriorityQueue<>();
                  pq.offer(7);
                  pq.offer(2);
                  pq.offer(9);
                  pq.offer(4);
                  // print the numbers from smallest to largest
                  System.out.println(pq);
              }
          }
        `, bug: 11, fix: J`
          import java.util.PriorityQueue;

          public class Main {
              public static void main(String[] args) {
                  PriorityQueue<Integer> pq = new PriorityQueue<>();
                  pq.offer(7);
                  pq.offer(2);
                  pq.offer(9);
                  pq.offer(4);
                  // print the numbers from smallest to largest
                  while (!pq.isEmpty()) {
                      System.out.println(pq.poll());
                  }
              }
          }
        `, hint: 'Which item is the only one a PriorityQueue promises to keep in place?', explain: 'Printing the queue shows its inside heap shape, where only the head (2) is sure to be the smallest. Repeated <code>poll()</code> takes out the smallest each time and gives 2, 4, 7, 9.', explainAr: 'طباعة الطابور لا تعطي ترتيباً؛ {{g:استخدم|استخدمي}} poll المتكررة.' },
        { t: 'bug', q: 'In an auction the HIGHEST bid wins, but this program prints <code>Winner: 250</code>. Tap the line with the bug.', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  // the highest bid must come out first
                  PriorityQueue<Integer> bids = new PriorityQueue<>();
                  bids.offer(250);
                  bids.offer(400);
                  bids.offer(300);
                  System.out.println("Winner: " + bids.poll());
              }
          }
        `, bug: 6, fix: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  // the highest bid must come out first
                  PriorityQueue<Integer> bids = new PriorityQueue<>(Collections.reverseOrder());
                  bids.offer(250);
                  bids.offer(400);
                  bids.offer(300);
                  System.out.println("Winner: " + bids.poll());
              }
          }
        `, hint: 'Which item does a normal PriorityQueue give first?', explain: 'A normal PriorityQueue gives the SMALLEST item first, so 250 comes out. With <code>Collections.reverseOrder()</code> the largest comes first and the program prints <code>Winner: 400</code>.', explainAr: 'الطابور العادي يعطي الأصغر؛ {{g:استخدم|استخدمي}} reverseOrder للأكبر.' },
        { t: 'output', q: 'This queue compares city names by their LENGTH. What does the program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  PriorityQueue<String> pq = new PriorityQueue<>((a, b) -> a.length() - b.length());
                  pq.offer("Riyadh");
                  pq.offer("Abha");
                  pq.offer("Tabuk");
                  pq.offer("Al-Khobar");
                  System.out.println(pq.poll());
                  System.out.println(pq.poll());
                  System.out.println(pq.size());
              }
          }
        `, answer: J`
          Abha
          Tabuk
          2
        `, explain: 'The Comparator puts shorter names first: Abha (4 letters), then Tabuk (5). Riyadh and Al-Khobar are still waiting, so the size is 2.', explainAr: 'المقارنة حسب طول الاسم، فالأقصر يخرج أولاً.' },
        { t: 'code', q: '<b>Clinic queue.</b> Read <code>n</code>, then <code>n</code> patients, each a name and an urgency level (1 = most urgent; all levels are different). Print the names in the order the doctor will see them, one per line. The <code>Patient</code> class is given. No prompts.', qAr: '{{g:اطبع|اطبعي}} أسماء المرضى بترتيب الدخول على الطبيب حسب الإلحاح.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  // make a PriorityQueue<Patient> with a Comparator on the level
                  // offer n patients, then poll and print the names
              }
          }

          class Patient {
              private String name;
              private int level;

              Patient(String name, int level) {
                  this.name = name;
                  this.level = level;
              }

              String getName() { return name; }
              int getLevel() { return level; }
          }
        `, tests: [{ stdin: '3\nOmar 3\nHuda 1\nFahad 2', expected: J`
          Huda
          Fahad
          Omar
        ` }, { stdin: '2\nSara 5\nAli 4', expected: J`
          Ali
          Sara
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  PriorityQueue<Patient> pq = new PriorityQueue<>((a, b) -> a.getLevel() - b.getLevel());
                  for (int i = 0; i < n; i++) {
                      String name = in.next();
                      int level = in.nextInt();
                      pq.offer(new Patient(name, level));
                  }
                  while (!pq.isEmpty()) {
                      System.out.println(pq.poll().getName());
                  }
              }
          }

          class Patient {
              private String name;
              private int level;

              Patient(String name, int level) {
                  this.name = name;
                  this.level = level;
              }

              String getName() { return name; }
              int getLevel() { return level; }
          }
        `, hint: 'new PriorityQueue<>((a, b) -> a.getLevel() - b.getLevel()); then poll().getName() in a while loop.', explain: 'The Comparator tells the queue that a lower level comes first. Each poll gives the most urgent patient still waiting.', explainAr: 'الـ Comparator يجعل المستوى الأقل يخرج أولاً.' }
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
        { type: 'h', en: 'Counting and swapping: frequency and swap' },
        { type: 'p', en: 'A teacher has the answers of the class to question 1 and wants to know how many students chose A. <code>Collections.frequency(list, x)</code> counts how many times x appears, without writing a loop. <code>Collections.swap(list, i, j)</code> exchanges the items at two indexes, for example to swap two students in a seating plan.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> answers = new ArrayList<>(Arrays.asList("A", "C", "A", "B", "A"));
                  System.out.println(Collections.frequency(answers, "A"));
                  Collections.swap(answers, 0, 1);
                  System.out.println(answers);
              }
          }
        `, out: J`
          3
          [C, A, A, B, A]
        ` },
        { type: 'lines', rows: [
          ['Collections.frequency(answers, "A")', 'Count the A answers: there are 3. The list does not change.'],
          ['Collections.swap(answers, 0, 1);', 'The items at index 0 (A) and index 1 (C) change places.']
        ], ar: 'frequency تعدّ مرات ظهور القيمة، وswap تبادل عنصرين.' },
        { type: 'note', kind: 'tip', en: '<code>Collections.addAll(list, "a", "b", "c");</code> adds several items in one line. It is handy for filling a list for a quick test.' },
        { type: 'h', en: 'Sort a copy when you need the original order too' },
        { type: 'p', en: '<code>Collections.sort</code> changes the list itself. Sometimes you need both: the marks in the order they were entered (for the register) and in ranked order (for the honours list). If you write <code>ranked = marks</code> and sort <code>ranked</code>, you sort the ONE list both names point to, and the entered order is lost. Sort a copy instead.', ar: 'sort تغيّر القائمة نفسها، فإذا احتجت الترتيب الأصلي فرتّب نسخة.' },
        { type: 'analogy', title: 'Photocopy before you highlight', en: 'Before you write all over an important paper, you make a photocopy and write on the copy. The original stays clean.' },
        { type: 'memory', title: 'Sorting through a second name', en: 'Two variables, one list: sorting through <code>ranked</code> also changes what <code>marks</code> shows.', code: J`
          ArrayList<Integer> marks = new ArrayList<>(Arrays.asList(70, 95, 60));
          ArrayList<Integer> ranked = marks;
          Collections.sort(ranked);
        `, frames: [
          { label: 'After the first line', vars: [{ name: 'marks', type: 'ArrayList<Integer>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<Integer>', fields: [{ name: '[0]', value: '70' }, { name: '[1]', value: '95' }, { name: '[2]', value: '60' }] }
          ] },
          { label: 'After <code>ranked = marks;</code>', vars: [{ name: 'marks', type: 'ArrayList<Integer>', ref: 'A' }, { name: 'ranked', type: 'ArrayList<Integer>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<Integer>', fields: [{ name: '[0]', value: '70' }, { name: '[1]', value: '95' }, { name: '[2]', value: '60' }] }
          ] },
          { label: 'After <code>Collections.sort(ranked);</code>: the entered order is gone', vars: [{ name: 'marks', type: 'ArrayList<Integer>', ref: 'A' }, { name: 'ranked', type: 'ArrayList<Integer>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<Integer>', fields: [{ name: '[0]', value: '60' }, { name: '[1]', value: '70' }, { name: '[2]', value: '95' }] }
          ] }
        ], ar: 'المتغيران يشيران إلى قائمة واحدة، فالترتيب يظهر في الاثنين.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> marks = new ArrayList<>(Arrays.asList(70, 95, 60));
                  ArrayList<Integer> ranked = new ArrayList<>(marks);
                  Collections.sort(ranked, Collections.reverseOrder());
                  System.out.println("Entered: " + marks);
                  System.out.println("Ranked: " + ranked);
              }
          }
        `, out: J`
          Entered: [70, 95, 60]
          Ranked: [95, 70, 60]
        ` },
        { type: 'check', q: 'Which line keeps <code>marks</code> in its entered order after sorting <code>ranked</code>?', options: ['ArrayList&lt;Integer&gt; ranked = marks;', 'ArrayList&lt;Integer&gt; ranked = new ArrayList&lt;&gt;(marks);', 'ArrayList&lt;Integer&gt; ranked = Collections.sort(marks);', 'ArrayList&lt;Integer&gt; ranked;'], answer: 1, explain: 'new ArrayList&lt;&gt;(marks) makes a separate copy, so sorting it does not touch marks. (Collections.sort returns nothing, so the third option does not compile.)' },
        { type: 'note', kind: 'exam', en: '<code>Collections.sort</code> and <code>Collections.max</code> know how to compare Integers and Strings. For a list of your own objects (for example Students), they need <code>Comparable</code> or a <code>Comparator</code> from Unit 5. Lesson 12 shows how.' },
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
        `, ar: 'نرتب القائمة ثم نطبع الأكبر والأصغر.' },
        { type: 'steps', title: 'Worked example: exam report with a copy', problem: 'Read n marks. Print them in the entered order, then a sorted copy, then the top mark and how many students got it.', steps: [
          { en: 'Read the marks into a list.', code: J`
            ArrayList<Integer> marks = new ArrayList<>();
            int n = in.nextInt();
            for (int i = 0; i < n; i++) {
                marks.add(in.nextInt());
            }
          ` },
          { en: 'Make a copy and sort only the copy.', code: J`
            ArrayList<Integer> sorted = new ArrayList<>(marks);
            Collections.sort(sorted);
          ` },
          { en: 'Print both lists. The original order is still there.', code: J`
            System.out.println("Entered: " + marks);
            System.out.println("Sorted: " + sorted);
          ` },
          { en: 'Find the top mark with <code>max</code> and count it with <code>frequency</code>.', code: J`
            int top = Collections.max(marks);
            int howMany = Collections.frequency(marks, top);
            System.out.println("Top: " + top + " (" + howMany + " students)");
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
                  ArrayList<Integer> sorted = new ArrayList<>(marks);
                  Collections.sort(sorted);
                  System.out.println("Entered: " + marks);
                  System.out.println("Sorted: " + sorted);
                  int top = Collections.max(marks);
                  int howMany = Collections.frequency(marks, top);
                  System.out.println("Top: " + top + " (" + howMany + " students)");
              }
          }
        `, stdin: '6\n88 95 70 95 60 81', out: J`
          Entered: [88, 95, 70, 95, 60, 81]
          Sorted: [60, 70, 81, 88, 95, 95]
          Top: 95 (2 students)
        `, ar: 'نرتب نسخة لنحتفظ بالترتيب الأصلي، ونعدّ أعلى علامة بـ frequency.' }
      ],
      mistakes: [
        { title: 'Calling sort on the list with empty brackets', en: '<code>temps.sort()</code> does not compile: the list method <code>sort</code> needs a Comparator. Use <code>Collections.sort(temps)</code>.', code: 'temps.sort();   // error: needs an argument' },
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
        '<code>frequency(list, x)</code> counts x; <code>swap(list, i, j)</code> exchanges two items.',
        'Sort a copy (<code>new ArrayList&lt;&gt;(list)</code>) when you also need the original order; sort before <code>binarySearch</code>.'
      ],
      rememberAr: 'Collections صنف مساعد للقوائم: sort وmax وmin وreverse وshuffle وbinarySearch وfrequency وswap. للترتيب التنازلي {{g:استخدم|استخدمي}} reverseOrder، و{{g:رتّب|رتّبي}} نسخة إذا احتجت الترتيب الأصلي.',
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
        { t: 'code', q: 'Read <code>n</code> and then <code>n</code> integers into an ArrayList. Print the list sorted from the largest to the smallest (list format). No prompts.', qAr: '{{g:اطبع|اطبعي}} القائمة مرتبة تنازلياً.', starter: J`
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
        `, hint: 'Collections.sort(list, Collections.reverseOrder());', explain: 'The second argument reverses the sort order.' },
        { t: 'bug', q: 'The program should print the marks in the order they were entered, then ranked. But both lines show <code>[60, 70, 95]</code>. Tap the line with the bug.', qAr: 'الترتيب الأصلي ضاع بعد الترتيب. أين الخطأ؟', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> marks = new ArrayList<>(Arrays.asList(70, 95, 60));
                  ArrayList<Integer> ranked = marks;
                  Collections.sort(ranked);
                  System.out.println("Entered: " + marks);
                  System.out.println("Ranked: " + ranked);
              }
          }
        `, bug: 6, fix: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> marks = new ArrayList<>(Arrays.asList(70, 95, 60));
                  ArrayList<Integer> ranked = new ArrayList<>(marks);
                  Collections.sort(ranked);
                  System.out.println("Entered: " + marks);
                  System.out.println("Ranked: " + ranked);
              }
          }
        `, hint: 'How many lists are there after line 6?', explain: '<code>ranked = marks</code> gives the same list a second name, so sorting through <code>ranked</code> sorts <code>marks</code> too. A copy, <code>new ArrayList&lt;&gt;(marks)</code>, keeps the entered order <code>[70, 95, 60]</code>.', explainAr: '{{g:رتّب|رتّبي}} نسخة مستقلة حتى لا يضيع الترتيب الأصلي.' },
        { t: 'bug', q: 'The scores should be printed from the highest to the lowest (<code>[9, 5, 3, 1]</code>), but the program prints <code>[5, 1, 9, 3]</code>. Tap the line with the bug.', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> scores = new ArrayList<>(Arrays.asList(3, 9, 1, 5));
                  // sort from the highest to the lowest
                  Collections.reverse(scores);
                  System.out.println(scores);
              }
          }
        `, bug: 7, fix: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Integer> scores = new ArrayList<>(Arrays.asList(3, 9, 1, 5));
                  // sort from the highest to the lowest
                  Collections.sort(scores, Collections.reverseOrder());
                  System.out.println(scores);
              }
          }
        `, hint: 'Does reverse sort anything?', explain: '<code>reverse</code> only flips the CURRENT order: [3, 9, 1, 5] becomes [5, 1, 9, 3]. It does not sort. <code>Collections.sort(scores, Collections.reverseOrder())</code> sorts from the highest to the lowest.', explainAr: 'reverse تقلب الترتيب الحالي فقط ولا ترتب.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<String> votes = new ArrayList<>(Arrays.asList("Huda", "Omar", "Huda", "Sara", "Huda", "Omar"));
                  System.out.println(Collections.frequency(votes, "Huda"));
                  System.out.println(Collections.frequency(votes, "Lina"));
                  Collections.swap(votes, 0, 5);
                  System.out.println(votes);
              }
          }
        `, answer: J`
          3
          0
          [Omar, Omar, Huda, Sara, Huda, Huda]
        `, explain: 'Huda appears 3 times; Lina never appears, so 0 (no error). swap exchanges index 0 (Huda) and index 5 (Omar).', explainAr: 'frequency تعيد 0 للقيمة غير الموجودة، وswap تبادل الخانتين 0 و5.' }
      ]
    },

    // ---------------------------------------------------------------- L12 (new)
    {
      title: 'A list of your own objects',
      titleAr: 'قائمة من كائناتك الخاصة',
      minutes: 30,
      body: [
        { type: 'h', en: 'From "an array with a count" to a list' },
        { type: 'p', en: 'In Unit 3 you kept <code>Student</code> objects in an array with a counter: <code>Student[] students = new Student[50]; int count = 0;</code>. Adding needed a "is it full?" check, and removing needed a loop that shifted every later student one box to the left. An <code>ArrayList&lt;Student&gt;</code> does all of that for you: it knows its own size, it grows, and it shifts when you remove. In this lesson you put your own objects in a list, search them by a field, remove them by a rule, and sort them.', ar: 'ArrayList&lt;Student&gt; تغنيك عن المصفوفة والعدّاد وحلقات الإزاحة التي كتبتها في الوحدة 3.' },
        { type: 'analogy', title: 'A folder of student cards', en: 'The list is a folder. Each student is a card with several lines on it: name, ID, GPA. The folder does not keep photocopies of the cards; it keeps the real cards. If you take one out and correct the GPA, the folder holds the corrected card.' },
        { type: 'h', en: 'Adding and reading objects' },
        { type: 'p', en: 'The type inside the angle brackets is now your class: <code>ArrayList&lt;Student&gt;</code>. You add a new object with <code>list.add(new Student(...))</code>, and <code>get(i)</code> gives back the object, so you can call its methods. Printing a Student uses its <code>toString</code> method.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Student> list = new ArrayList<>();
                  list.add(new Student("Sara", 1001, 3.8));
                  list.add(new Student("Omar", 1002, 2.9));
                  list.add(new Student("Lina", 1003, 3.4));
                  System.out.println(list.size() + " students");
                  System.out.println(list.get(0));
                  for (Student s : list) {
                      System.out.println(s.getName());
                  }
              }
          }

          class Student {
              private String name;
              private int id;
              private double gpa;

              Student(String name, int id, double gpa) {
                  this.name = name;
                  this.id = id;
                  this.gpa = gpa;
              }

              String getName() { return name; }
              int getId() { return id; }
              double getGpa() { return gpa; }
              void setGpa(double gpa) { this.gpa = gpa; }

              public String toString() {
                  return name + " (" + id + ", GPA " + gpa + ")";
              }
          }
        `, out: J`
          3 students
          Sara (1001, GPA 3.8)
          Sara
          Omar
          Lina
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['ArrayList<Student> list = new ArrayList<>();', 'A list whose items are Student objects.'],
          ['list.add(new Student("Sara", 1001, 3.8));', 'First <code>new</code> makes the object, then <code>add</code> puts a reference to it at the end of the list.'],
          ['System.out.println(list.get(0));', 'get(0) gives the Sara object; println calls its toString.'],
          ['for (Student s : list)', 's becomes each Student in turn, so <code>s.getName()</code> works.']
        ], ar: 'نضيف كائناً جديداً بـ new، وget تعيد الكائن نفسه فنستدعي دواله.' },
        { type: 'memory', title: 'The list points to the real objects', en: '<code>get</code> does not give a copy. After <code>Student s = list.get(1);</code> the variable <code>s</code> and the list point to the same Omar object, so a change through <code>s</code> is a change inside the list.', code: J`
          list.add(new Student("Sara", 1001, 3.8));
          list.add(new Student("Omar", 1002, 2.9));
          Student s = list.get(1);
          s.setGpa(3.1);
        `, frames: [
          { label: 'After the two <code>add</code> calls', vars: [{ name: 'list', type: 'ArrayList<Student>', ref: 'A' }], objects: [
            { id: 'A', cls: 'ArrayList<Student>', fields: [{ name: '[0]', ref: 'S1' }, { name: '[1]', ref: 'S2' }] },
            { id: 'S1', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'id', value: '1001' }, { name: 'gpa', value: '3.8' }] },
            { id: 'S2', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }, { name: 'id', value: '1002' }, { name: 'gpa', value: '2.9' }] }
          ] },
          { label: 'After <code>Student s = list.get(1);</code>', vars: [{ name: 'list', type: 'ArrayList<Student>', ref: 'A' }, { name: 's', type: 'Student', ref: 'S2' }], objects: [
            { id: 'A', cls: 'ArrayList<Student>', fields: [{ name: '[0]', ref: 'S1' }, { name: '[1]', ref: 'S2' }] },
            { id: 'S1', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'id', value: '1001' }, { name: 'gpa', value: '3.8' }] },
            { id: 'S2', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }, { name: 'id', value: '1002' }, { name: 'gpa', value: '2.9' }] }
          ] },
          { label: 'After <code>s.setGpa(3.1);</code>: the list sees the new GPA', vars: [{ name: 'list', type: 'ArrayList<Student>', ref: 'A' }, { name: 's', type: 'Student', ref: 'S2' }], objects: [
            { id: 'A', cls: 'ArrayList<Student>', fields: [{ name: '[0]', ref: 'S1' }, { name: '[1]', ref: 'S2' }] },
            { id: 'S1', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'id', value: '1001' }, { name: 'gpa', value: '3.8' }] },
            { id: 'S2', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }, { name: 'id', value: '1002' }, { name: 'gpa', value: '3.1' }] }
          ] }
        ], ar: 'get لا تنسخ الكائن؛ التعديل عبر s يظهر داخل القائمة.' },
        { type: 'check', q: 'After the code in the picture, what does <code>list.get(1).getGpa()</code> return?', options: ['2.9', '3.1', '3.8', 'null'], answer: 1, explain: 's and list.get(1) are the same object, so the new GPA 3.1 is seen through the list.' },
        { type: 'h', en: 'Searching by a field' },
        { type: 'p', en: 'The registrar asks: "Who has ID 1002?" The list cannot answer <code>contains(1002)</code>, because its items are Students, not numbers. You loop over the list, compare the field, and return the object when you find it. If the loop ends without a match, return <code>null</code> ("nobody"). Put this in a method so you can use it again and again.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              static Student findById(ArrayList<Student> list, int id) {
                  for (Student s : list) {
                      if (s.getId() == id) {
                          return s;
                      }
                  }
                  return null;
              }

              public static void main(String[] args) {
                  ArrayList<Student> list = new ArrayList<>();
                  list.add(new Student("Sara", 1001, 3.8));
                  list.add(new Student("Omar", 1002, 2.9));
                  System.out.println("Found: " + findById(list, 1002));
                  if (findById(list, 1009) == null) {
                      System.out.println("1009: not found");
                  }
              }
          }

          class Student {
              private String name;
              private int id;
              private double gpa;

              Student(String name, int id, double gpa) {
                  this.name = name;
                  this.id = id;
                  this.gpa = gpa;
              }

              String getName() { return name; }
              int getId() { return id; }
              double getGpa() { return gpa; }

              public String toString() {
                  return name + " (" + id + ", GPA " + gpa + ")";
              }
          }
        `, out: J`
          Found: Omar (1002, GPA 2.9)
          1009: not found
        ` },
        { type: 'lines', rows: [
          ['if (s.getId() == id)', 'Compare the field of this student with the ID we want. ids are int, so == is right.'],
          ['return s;', 'Found: leave the method at once and give back the object.'],
          ['return null;', 'This line is reached only after checking EVERY student without a match.']
        ], ar: 'نمر على الطلاب ونقارن الحقل؛ إن لم نجد نعيد null بعد انتهاء الحلقة.' },
        { type: 'note', kind: 'exam', en: 'To search by a String field, use <code>equals</code>: <code>if (s.getName().equals(wanted))</code>. Never <code>==</code> for Strings. And the <code>return null;</code> must come AFTER the loop, not in an else inside it, or only the first student is ever checked.', ar: '{{g:قارن|قارني}} النصوص بـ equals، و{{g:ضع|ضعي}} return null بعد الحلقة.' },
        { type: 'check', q: 'A search method has <code>return null;</code> in an else part inside the loop. What happens?', options: ['It works normally', 'Only the first student is checked', 'It does not compile', 'It returns the last student'], answer: 1, explain: 'In the first round the method returns either the first student or null. It never reaches the second student.' },
        { type: 'h', en: 'Removing by a rule: removeIf or an Iterator' },
        { type: 'p', en: 'At the end of the term, students with a GPA below 2.0 move to the academic warning list. The tools are the ones from Lesson 6, now with a getter inside the rule: <code>list.removeIf(s -&gt; s.getGpa() &lt; 2.0)</code>. Read it as "remove every student s whose GPA is below 2.0".' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Student> list = new ArrayList<>();
                  list.add(new Student("Sara", 3.8));
                  list.add(new Student("Omar", 1.7));
                  list.add(new Student("Lina", 3.4));
                  list.add(new Student("Fahad", 1.9));
                  list.removeIf(s -> s.getGpa() < 2.0);
                  for (Student s : list) {
                      System.out.println(s.getName());
                  }
              }
          }

          class Student {
              private String name;
              private double gpa;

              Student(String name, double gpa) {
                  this.name = name;
                  this.gpa = gpa;
              }

              String getName() { return name; }
              double getGpa() { return gpa; }
          }
        `, out: J`
          Sara
          Lina
        ` },
        { type: 'p', en: 'If you must also DO something with each removed student (for example print a warning letter), use an Iterator, as in Lesson 6:' },
        { type: 'code', code: J`
          Iterator<Student> it = list.iterator();
          while (it.hasNext()) {
              Student s = it.next();
              if (s.getGpa() < 2.0) {
                  System.out.println("Warning letter for " + s.getName());
                  it.remove();
              }
          }
        ` },
        { type: 'check', q: 'Which line removes every student whose name starts with "A"?', options: ['list.remove("A");', 'list.removeIf(s -&gt; s.getName().startsWith("A"));', 'list.removeIf(s -&gt; s.startsWith("A"));', 'for (Student s : list) list.remove(s);'], answer: 1, explain: 's is a Student, so first get the name, then test it. A Student has no startsWith method, and removing inside for-each crashes.' },
        { type: 'h', en: 'Sorting by the natural order: Comparable' },
        { type: 'p', en: 'Try <code>Collections.sort(list)</code> on Students and Java refuses to compile: it does not know which student comes first. One way to teach it is the <code>Comparable</code> interface from Unit 5. The class says <code>implements Comparable&lt;Student&gt;</code> and writes <code>compareTo</code>: a negative answer means "this comes before other". Here the natural order is by name.', ar: 'لكي يرتب Java الطلاب يجب أن يعرف من يأتي أولاً: Comparable يحدد الترتيب الطبيعي.' },
        { type: 'analogy', title: 'The usual way to line up', en: 'A class register has one usual order: by name. That is the natural order (Comparable). For special lists, like the honours board by GPA, the teacher gives a different rule for that day only (a Comparator).' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Student> list = new ArrayList<>();
                  list.add(new Student("Sara", 3.8));
                  list.add(new Student("Omar", 2.9));
                  list.add(new Student("Lina", 3.4));
                  Collections.sort(list);
                  for (Student s : list) {
                      System.out.println(s.getName());
                  }
              }
          }

          class Student implements Comparable<Student> {
              private String name;
              private double gpa;

              Student(String name, double gpa) {
                  this.name = name;
                  this.gpa = gpa;
              }

              String getName() { return name; }
              double getGpa() { return gpa; }

              public int compareTo(Student other) {
                  return name.compareTo(other.name);
              }
          }
        `, out: J`
          Lina
          Omar
          Sara
        ` },
        { type: 'lines', rows: [
          ['class Student implements Comparable<Student>', 'A promise: Students can be compared with other Students.'],
          ['public int compareTo(Student other)', 'Negative: this first. Zero: same place. Positive: other first.'],
          ['return name.compareTo(other.name);', 'Strings already know alphabetical order, so we let them decide.'],
          ['Collections.sort(list);', 'Now it compiles: sort calls compareTo to compare two students.']
        ], ar: 'compareTo تعيد سالباً إذا جاء هذا الكائن أولاً.' },
        { type: 'h', en: 'Sorting by any other order: a Comparator' },
        { type: 'p', en: 'For the honours board you want the highest GPA first, and you should not change the class for one list. Give <code>Collections.sort</code> a second argument: a Comparator lambda. Because GPA is a <code>double</code>, use <code>Double.compare(x, y)</code>; it returns a negative int, zero or a positive int. Writing <code>b</code> first gives the highest first.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Student> list = new ArrayList<>();
                  list.add(new Student("Sara", 3.8));
                  list.add(new Student("Omar", 2.9));
                  list.add(new Student("Lina", 3.4));
                  Collections.sort(list, (a, b) -> Double.compare(b.getGpa(), a.getGpa()));
                  for (Student s : list) {
                      System.out.println(s.getName() + " " + s.getGpa());
                  }
              }
          }

          class Student {
              private String name;
              private double gpa;

              Student(String name, double gpa) {
                  this.name = name;
                  this.gpa = gpa;
              }

              String getName() { return name; }
              double getGpa() { return gpa; }
          }
        `, out: J`
          Sara 3.8
          Lina 3.4
          Omar 2.9
        ` },
        { type: 'lines', rows: [
          ['(a, b) -> Double.compare(b.getGpa(), a.getGpa())', 'Compare b with a (not a with b), so the bigger GPA comes first.'],
          ['Collections.sort(list, ...)', 'The Comparator decides the order. The Student class needs no Comparable here.']
        ], ar: 'الـ Comparator يعطي ترتيباً خاصاً دون تغيير الصنف.' },
        { type: 'note', kind: 'tip', en: 'For int fields, subtraction works: <code>(a, b) -&gt; a.getId() - b.getId()</code>. For double fields it does not compile (a double is not an int), so use <code>Double.compare</code>. <code>list.sort(comparator)</code> does the same as <code>Collections.sort(list, comparator)</code>.' },
        { type: 'check', q: 'Which Comparator sorts students by ID from the smallest to the largest?', options: ['(a, b) -&gt; b.getId() - a.getId()', '(a, b) -&gt; a.getId() - b.getId()', '(a, b) -&gt; a.getName() - b.getName()', '(a, b) -&gt; 0'], answer: 1, explain: 'a minus b is negative when a has the smaller ID, so a comes first: ascending. Strings cannot be subtracted.' },
        { type: 'steps', title: 'Worked example: warnings and the honours list', problem: 'Read n students (name, ID, GPA). Students with a GPA below 2.0 get a warning and leave the list. Print the number of warnings, then the other students ranked by GPA, highest first, as <code>1. name GPA</code>.', steps: [
          { en: 'Read the students and add a new object for each line.', code: J`
            ArrayList<Student> list = new ArrayList<>();
            int n = in.nextInt();
            for (int i = 0; i < n; i++) {
                list.add(new Student(in.next(), in.nextInt(), in.nextDouble()));
            }
          ` },
          { en: 'Remove by the rule, and count the warnings as "size before minus size after".', code: J`
            int before = list.size();
            list.removeIf(s -> s.getGpa() < 2.0);
            System.out.println("Warnings: " + (before - list.size()));
          ` },
          { en: 'Sort with a Comparator: highest GPA first.', code: 'Collections.sort(list, (a, b) -> Double.compare(b.getGpa(), a.getGpa()));' },
          { en: 'Print the ranked list with an index loop, so you can print the place number.', code: J`
            for (int i = 0; i < list.size(); i++) {
                Student s = list.get(i);
                System.out.println((i + 1) + ". " + s.getName() + " " + s.getGpa());
            }
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  ArrayList<Student> list = new ArrayList<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      list.add(new Student(in.next(), in.nextInt(), in.nextDouble()));
                  }
                  int before = list.size();
                  list.removeIf(s -> s.getGpa() < 2.0);
                  System.out.println("Warnings: " + (before - list.size()));
                  Collections.sort(list, (a, b) -> Double.compare(b.getGpa(), a.getGpa()));
                  for (int i = 0; i < list.size(); i++) {
                      Student s = list.get(i);
                      System.out.println((i + 1) + ". " + s.getName() + " " + s.getGpa());
                  }
              }
          }

          class Student {
              private String name;
              private int id;
              private double gpa;

              Student(String name, int id, double gpa) {
                  this.name = name;
                  this.id = id;
                  this.gpa = gpa;
              }

              String getName() { return name; }
              int getId() { return id; }
              double getGpa() { return gpa; }
          }
        `, stdin: '5\nFahad 1004 2.6\nOmar 1002 1.7\nSara 1001 3.8\nHuda 1005 1.9\nLina 1003 3.4', out: J`
          Warnings: 2
          1. Sara 3.8
          2. Lina 3.4
          3. Fahad 2.6
        `, ar: 'نحذف بقاعدة، ثم نرتب بـ Comparator، ثم نطبع مع رقم الترتيب.' },
        { type: 'note', kind: 'tip', en: 'Compare this with Unit 3: no <code>count</code> variable, no "array is full" check, no shifting loop. The list does the bookkeeping, and you think only about the students.' }
      ],
      mistakes: [
        { title: 'Sorting objects with no order', en: 'Without Comparable in the class or a Comparator argument, Java does not know how to compare two Students, so this does not compile.', code: J`
          ArrayList<Student> list = new ArrayList<>();
          Collections.sort(list);   // error if Student is not Comparable
        `, ar: '{{g:أضف|أضيفي}} Comparable للصنف أو {{g:مرّر|مرّري}} Comparator.' },
        { title: 'Comparing a String field with ==', en: '== asks "same object?", not "same text?". Use equals.', code: 'if (s.getName() == wanted) { ... }   // use s.getName().equals(wanted)' },
        { title: 'Subtracting doubles in a Comparator', en: 'The lambda must return an int, and a double minus a double is a double: compile error. Use Double.compare.', code: 'list.sort((a, b) -> b.getGpa() - a.getGpa());   // error' },
        { title: 'Removing students inside for-each', en: 'Same crash as with numbers: ConcurrentModificationException. Use removeIf or an Iterator.', code: J`
          for (Student s : list) {
              if (s.getGpa() < 2.0) list.remove(s);   // crash
          }
        ` }
      ],
      remember: [
        '<code>ArrayList&lt;Student&gt;</code> holds references to your objects; <code>get(i)</code> gives the real object, not a copy.',
        'Search by a field with a loop; return the object, or <code>null</code> after the loop.',
        'Remove by a rule: <code>list.removeIf(s -&gt; s.getGpa() &lt; 2.0)</code>, or an Iterator if you need to do more.',
        'Natural order: <code>implements Comparable&lt;Student&gt;</code> + <code>compareTo</code>, then <code>Collections.sort(list)</code>.',
        'Any other order: <code>Collections.sort(list, (a, b) -&gt; ...)</code>; use <code>Double.compare</code> for doubles.'
      ],
      rememberAr: 'القائمة تحمل مراجع لكائناتك. نبحث بحلقة ونعيد null بعد الحلقة، ونحذف بـ removeIf، ونرتب بـ Comparable للترتيب الطبيعي أو بـ Comparator لأي ترتيب آخر.',
      practice: [
        { t: 'mcq', q: 'What does <code>list.add(new Student("Sara", 1001, 3.8))</code> put in the list?', options: ['A copy of the text "Sara"', 'A reference to the new Student object', 'Three separate items', 'Nothing until the list is printed'], answer: 1, explain: 'new makes one Student object; the list stores a reference (arrow) to it.', explainAr: 'القائمة تحفظ مرجعاً للكائن.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayList<Student> list = new ArrayList<>();
                  list.add(new Student("Huda", 3.0));
                  list.add(new Student("Ali", 2.5));
                  Student s = list.get(1);
                  s.setGpa(3.5);
                  System.out.println(list.get(1).getGpa());
                  System.out.println(list.size());
              }
          }

          class Student {
              private String name;
              private double gpa;

              Student(String name, double gpa) {
                  this.name = name;
                  this.gpa = gpa;
              }

              double getGpa() { return gpa; }
              void setGpa(double gpa) { this.gpa = gpa; }
          }
        `, answer: J`
          3.5
          2
        `, explain: 's points to the same Ali object as list.get(1), so the list sees 3.5. Taking a reference with get does not remove anything, so the size is still 2.', explainAr: 's والقائمة يشيران إلى الكائن نفسه.' },
        { t: 'fill', q: 'Remove every student whose GPA is below 2.0, then sort the rest by GPA from high to low.', code: J`
          list.___(s -> s.getGpa() < 2.0);
          Collections.sort(list, (a, b) -> Double.___(b.getGpa(), a.getGpa()));
        `, answers: ['removeIf', 'compare'], explain: 'removeIf removes by a rule; Double.compare compares two doubles and returns an int, as a Comparator must.' },
        { t: 'order', q: 'Put the lines in order: a method that returns the student with a given ID, or null.', lines: [
          'static Student findById(ArrayList<Student> list, int id) {',
          '    for (Student s : list) {',
          '        if (s.getId() == id) {',
          '            return s;',
          '        }',
          '    }',
          '    return null;',
          '}'
        ], explain: 'The return null comes after the loop, so every student is checked before giving up.' },
        { t: 'bug', q: 'This search method finds Sara (the first student) but says "null" for Omar, who is second in the list. Tap the line with the bug.', qAr: 'الدالة تجد الطالب الأول فقط. أين الخطأ؟', code: J`
          static Student findById(ArrayList<Student> list, int id) {
              for (Student s : list) {
                  if (s.getId() == id) {
                      return s;
                  } else {
                      return null;
                  }
              }
              return null;
          }
        `, bug: [5, 6], fix: J`
          static Student findById(ArrayList<Student> list, int id) {
              for (Student s : list) {
                  if (s.getId() == id) {
                      return s;
                  }
              }
              return null;
          }
        `, hint: 'How many students does the loop really check?', explain: 'In the first round, the method returns the first student OR null, so it never looks at the second student. Remove the else part: return null only after the loop has checked everybody.', explainAr: 'لا {{g:تُرجع|تُرجعي}} null داخل الحلقة؛ {{g:انتظر|انتظري}} حتى تنتهي.' },
        { t: 'bug', q: 'The programmer wants the honours list with the highest GPA first, but the code does not compile. Tap the line with the bug.', code: J`
          ArrayList<Student> list = new ArrayList<>();
          list.add(new Student("Sara", 3.8));
          list.add(new Student("Omar", 2.9));
          // honours list: highest GPA first
          list.sort((a, b) -> b.getGpa() - a.getGpa());
          System.out.println(list.get(0).getName());
        `, bug: 5, fix: J`
          ArrayList<Student> list = new ArrayList<>();
          list.add(new Student("Sara", 3.8));
          list.add(new Student("Omar", 2.9));
          // honours list: highest GPA first
          list.sort((a, b) -> Double.compare(b.getGpa(), a.getGpa()));
          System.out.println(list.get(0).getName());
        `, hint: 'What type must a Comparator return? What type is 3.8 - 2.9?', explain: 'A Comparator must return an int, but <code>b.getGpa() - a.getGpa()</code> is a double, so Java reports a possible lossy conversion. <code>Double.compare(b.getGpa(), a.getGpa())</code> returns an int with the right sign.', explainAr: 'الـ Comparator يعيد int، فاستخدم Double.compare مع الأعداد العشرية.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> students (name, ID, GPA). Remove every student with a GPA below 2.0. Print the remaining students sorted by GPA from the highest to the lowest, one per line as <code>name gpa</code>. All GPAs are different. The <code>Student</code> class is given. No prompts.', qAr: '{{g:احذف|احذفي}} من معدله أقل من 2.0 ثم {{g:اطبع|اطبعي}} الباقين مرتبين تنازلياً حسب المعدل.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Student> list = new ArrayList<>();
                  // 1. read n students
                  // 2. removeIf GPA below 2.0
                  // 3. sort with a Comparator (highest GPA first) and print
              }
          }

          class Student {
              private String name;
              private int id;
              private double gpa;

              Student(String name, int id, double gpa) {
                  this.name = name;
                  this.id = id;
                  this.gpa = gpa;
              }

              String getName() { return name; }
              int getId() { return id; }
              double getGpa() { return gpa; }
          }
        `, tests: [{ stdin: '4\nSara 1001 3.8\nOmar 1002 1.9\nFahad 1004 2.5\nLina 1003 3.4', expected: J`
          Sara 3.8
          Lina 3.4
          Fahad 2.5
        ` }, { stdin: '2\nAli 1 1.5\nHuda 2 2.0', expected: 'Huda 2.0' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Student> list = new ArrayList<>();
                  for (int i = 0; i < n; i++) {
                      String name = in.next();
                      int id = in.nextInt();
                      double gpa = in.nextDouble();
                      list.add(new Student(name, id, gpa));
                  }
                  list.removeIf(s -> s.getGpa() < 2.0);
                  Collections.sort(list, (a, b) -> Double.compare(b.getGpa(), a.getGpa()));
                  for (Student s : list) {
                      System.out.println(s.getName() + " " + s.getGpa());
                  }
              }
          }

          class Student {
              private String name;
              private int id;
              private double gpa;

              Student(String name, int id, double gpa) {
                  this.name = name;
                  this.id = id;
                  this.gpa = gpa;
              }

              String getName() { return name; }
              int getId() { return id; }
              double getGpa() { return gpa; }
          }
        `, hint: 'list.add(new Student(name, id, gpa)); then list.removeIf(...); then Collections.sort(list, (a, b) -> Double.compare(b.getGpa(), a.getGpa()));', explain: 'Three tools in a row: add objects, remove by a rule, sort with a Comparator. Exactly 2.0 is not below 2.0, so Huda stays.', explainAr: 'المعدل 2.0 ليس أقل من 2.0 فيبقى الطالب.' }
      ]
    },

    // ---------------------------------------------------------------- L13 (new)
    {
      title: 'TreeSet and TreeMap: always in order',
      titleAr: 'TreeSet و TreeMap: مرتبة دائماً',
      minutes: 25,
      body: [
        { type: 'h', en: 'Collections that keep themselves sorted' },
        { type: 'p', en: 'You met <code>TreeSet</code> (Lesson 7) and <code>TreeMap</code> (Lesson 9) as "the sorted versions" of HashSet and HashMap. They can do more than print nicely. Because they are always in order, they can tell you at once the smallest and the largest item, and the item nearest to a value: the cheapest price, the latest score, the first free appointment after 11 o\'clock.', ar: 'TreeSet وTreeMap مرتبتان دائماً، فتعطيان الأصغر والأكبر والأقرب فوراً.' },
        { type: 'analogy', title: 'A library shelf', en: 'In a library every book is put back in its place by its number. Because the shelf is always in order, the first and the last book are easy to find, and so is "the book just after number 500". Nobody has to sort the shelf again.' },
        { type: 'h', en: 'TreeSet: first() and last()' },
        { type: 'p', en: 'Each time you add a value, the TreeSet puts it in its sorted place (and ignores repeats, like every set). <code>first()</code> gives the smallest value and <code>last()</code> the largest. You do not call any sort method.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeSet<Integer> prices = new TreeSet<>();
                  prices.add(45);
                  prices.add(12);
                  prices.add(30);
                  prices.add(99);
                  prices.add(30);
                  System.out.println(prices);
                  System.out.println("Cheapest: " + prices.first());
                  System.out.println("Most expensive: " + prices.last());
              }
          }
        `, out: J`
          [12, 30, 45, 99]
          Cheapest: 12
          Most expensive: 99
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['prices.add(30);   // second time', 'A repeat: the set ignores it.'],
          ['System.out.println(prices);', 'Always printed from small to large.'],
          ['prices.first()', 'The smallest value: 12.'],
          ['prices.last()', 'The largest value: 99.']
        ], ar: 'first تعطي الأصغر وlast تعطي الأكبر.' },
        { type: 'memory', title: 'Every new value goes to its sorted place', en: 'The boxes show the values in the order the set keeps them, from the smallest. (Inside, Java stores them in a tree shape, which is where the name comes from.)', frames: [
          { label: 'After <code>prices.add(45);</code>', vars: [{ name: 'prices', type: 'TreeSet<Integer>', ref: 'T' }], objects: [
            { id: 'T', cls: 'TreeSet<Integer>', fields: [{ name: 'item', value: '45' }] }
          ] },
          { label: 'After <code>prices.add(12);</code>: 12 goes BEFORE 45', vars: [{ name: 'prices', type: 'TreeSet<Integer>', ref: 'T' }], objects: [
            { id: 'T', cls: 'TreeSet<Integer>', fields: [{ name: 'item', value: '12' }, { name: 'item', value: '45' }] }
          ] },
          { label: 'After <code>prices.add(30);</code>: 30 goes between them', vars: [{ name: 'prices', type: 'TreeSet<Integer>', ref: 'T' }], objects: [
            { id: 'T', cls: 'TreeSet<Integer>', fields: [{ name: 'item', value: '12' }, { name: 'item', value: '30' }, { name: 'item', value: '45' }] }
          ] }
        ], ar: 'كل قيمة جديدة تذهب إلى مكانها المرتب مباشرة.' },
        { type: 'check', q: 'A TreeSet gets 8, 3, 8, 5 in this order. What does <code>last()</code> return?', options: ['5', '8', '3', '4'], answer: 1, explain: 'The set is [3, 5, 8]. The largest value is 8.' },
        { type: 'note', kind: 'warn', en: 'On an EMPTY TreeSet, <code>first()</code> and <code>last()</code> throw <code>NoSuchElementException</code>. Check <code>isEmpty()</code> first.' },
        { type: 'h', en: 'The nearest value: ceiling() and floor()' },
        { type: 'p', en: 'A clinic has free appointments at 9, 10, 13 and 15 o\'clock. A patient says "11 or later, please". <code>ceiling(x)</code> gives the smallest value that is x <b>or more</b>. <code>floor(x)</code> gives the largest value that is x <b>or less</b>. If there is no such value, the answer is <code>null</code>.' },
        { type: 'analogy', title: 'Ceiling and floor of a room', en: 'Stand at height 11 in a room: the ceiling is the first thing above you (13), the floor is the first thing below you (10).' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeSet<Integer> slots = new TreeSet<>(Arrays.asList(9, 10, 13, 15));
                  System.out.println(slots.ceiling(11));
                  System.out.println(slots.floor(11));
                  System.out.println(slots.ceiling(13));
                  System.out.println(slots.ceiling(16));
              }
          }
        `, out: J`
          13
          10
          13
          null
        ` },
        { type: 'lines', rows: [
          ['slots.ceiling(11)', 'The first slot at 11 or later: 13.'],
          ['slots.floor(11)', 'The last slot at 11 or earlier: 10.'],
          ['slots.ceiling(13)', '13 itself counts ("or more"): 13.'],
          ['slots.ceiling(16)', 'No slot at 16 or later: null.']
        ], ar: 'ceiling أقرب قيمة أكبر أو تساوي، وfloor أقرب قيمة أصغر أو تساوي.' },
        { type: 'check', q: 'slots = [9, 10, 13, 15]. What is <code>slots.floor(8)</code>?', options: ['9', '8', 'null', '15'], answer: 2, explain: 'No slot is 8 or earlier, so floor returns null.' },
        { type: 'h', en: 'TreeMap: firstKey() and lastKey()' },
        { type: 'p', en: 'A TreeMap keeps its <b>keys</b> sorted. So <code>firstKey()</code> is the smallest key and <code>lastKey()</code> the largest. Think of a day planner: the key is the hour, the value is the patient. The first key is the first appointment of the day.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<Integer, String> day = new TreeMap<>();
                  day.put(13, "Omar");
                  day.put(9, "Sara");
                  day.put(11, "Lina");
                  System.out.println(day);
                  System.out.println("First: " + day.firstKey() + " " + day.get(day.firstKey()));
                  System.out.println("Last: " + day.lastKey() + " " + day.get(day.lastKey()));
              }
          }
        `, out: J`
          {9=Sara, 11=Lina, 13=Omar}
          First: 9 Sara
          Last: 13 Omar
        ` },
        { type: 'lines', rows: [
          ['TreeMap<Integer, String> day', 'Keys are hours (Integer), values are names. The keys stay sorted: 9, 11, 13.'],
          ['day.firstKey()', 'The smallest key: 9. Then <code>day.get(9)</code> gives Sara.'],
          ['day.lastKey()', 'The largest key: 13, which belongs to Omar.']
        ], ar: 'firstKey أصغر مفتاح وlastKey أكبر مفتاح.' },
        { type: 'note', kind: 'exam', en: 'A TreeMap is sorted by its KEYS, never by its values. <code>lastKey()</code> of a map of team -&gt; points is the team whose NAME is last in the alphabet, not the team with the most points.', ar: 'الترتيب حسب المفاتيح لا القيم.' },
        { type: 'check', q: 'A TreeMap holds <code>{Eagles=7, Falcons=4, Stars=2}</code>. What is <code>firstKey()</code>?', options: ['Stars', 'Eagles', '7', '2'], answer: 1, explain: 'firstKey is the smallest KEY in alphabetical order: Eagles. The values play no part.' },
        { type: 'h', en: 'A league table: sorted by name, then ranked by points' },
        { type: 'p', en: 'In a school football league, a win gives 3 points, a draw 1 point, a loss 0. A <code>TreeMap&lt;String, Integer&gt;</code> collects the points and prints the table in alphabetical order for free. To rank by points, copy the team names into a list and sort the list with a Comparator that looks up the points in the map. Java\'s list sort never swaps two equal items, so teams with the same points stay in alphabetical order.' },
        { type: 'steps', title: 'Worked example: the school league', problem: 'Read n match results like <code>Falcons 2 Eagles 1</code> (home team, goals, away team, goals). Print the table in alphabetical order, then the ranking by points.', steps: [
          { en: 'For each match, read the four parts and decide the points of each team.', code: J`
            String home = in.next();
            int homeGoals = in.nextInt();
            String away = in.next();
            int awayGoals = in.nextInt();
            int homePts = 1;
            int awayPts = 1;
            if (homeGoals > awayGoals) {
                homePts = 3;
                awayPts = 0;
            } else if (homeGoals < awayGoals) {
                homePts = 0;
                awayPts = 3;
            }
          ` },
          { en: 'Add the points with the counting pattern. A team that lost still gets a pair (with + 0), so it appears in the table.', code: J`
            points.put(home, points.getOrDefault(home, 0) + homePts);
            points.put(away, points.getOrDefault(away, 0) + awayPts);
          ` },
          { en: 'After all matches, print the TreeMap: alphabetical order.', code: 'System.out.println("Table (A-Z): " + points);' },
          { en: 'Copy the keys into a list and sort it by points, highest first. Then print the ranking.', code: J`
            ArrayList<String> teams = new ArrayList<>(points.keySet());
            teams.sort((a, b) -> points.get(b) - points.get(a));
            for (int i = 0; i < teams.size(); i++) {
                String t = teams.get(i);
                System.out.println((i + 1) + ". " + t + " " + points.get(t));
            }
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  TreeMap<String, Integer> points = new TreeMap<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      String home = in.next();
                      int homeGoals = in.nextInt();
                      String away = in.next();
                      int awayGoals = in.nextInt();
                      int homePts = 1;
                      int awayPts = 1;
                      if (homeGoals > awayGoals) {
                          homePts = 3;
                          awayPts = 0;
                      } else if (homeGoals < awayGoals) {
                          homePts = 0;
                          awayPts = 3;
                      }
                      points.put(home, points.getOrDefault(home, 0) + homePts);
                      points.put(away, points.getOrDefault(away, 0) + awayPts);
                  }
                  System.out.println("Table (A-Z): " + points);
                  ArrayList<String> teams = new ArrayList<>(points.keySet());
                  teams.sort((a, b) -> points.get(b) - points.get(a));
                  for (int i = 0; i < teams.size(); i++) {
                      String t = teams.get(i);
                      System.out.println((i + 1) + ". " + t + " " + points.get(t));
                  }
              }
          }
        `, stdin: '4\nFalcons 2 Eagles 1\nLions 0 Stars 0\nEagles 3 Lions 1\nStars 1 Falcons 1', out: J`
          Table (A-Z): {Eagles=3, Falcons=4, Lions=1, Stars=2}
          1. Falcons 4
          2. Eagles 3
          3. Stars 2
          4. Lions 1
        `, ar: 'TreeMap تعطي الجدول أبجدياً، ثم نرتب قائمة الأسماء حسب النقاط.' }
      ],
      mistakes: [
        { title: 'Expecting a TreeMap to be sorted by values', en: 'It is sorted by keys only. To rank by values, copy the keys to a list and sort it with a Comparator, as in the league example.', code: 'points.lastKey();   // last NAME in the alphabet, not the top team' },
        { title: 'first() on an empty set', en: 'first, last, firstKey and lastKey throw NoSuchElementException when there is nothing inside.', code: J`
          TreeSet<Integer> s = new TreeSet<>();
          s.first();   // crash
        ` },
        { title: 'A TreeSet of your own objects with no order', en: 'A TreeSet must compare items to sort them. If your class is not Comparable (and you give no Comparator), adding an object crashes with ClassCastException.', code: 'TreeSet<Student> set = new TreeSet<>();   // Student needs compareTo' },
        { title: 'Using a TreeMap when you want arrival order', en: 'A TreeMap re-orders the keys. For "the order they were entered", use a LinkedHashMap; for no particular order, a HashMap.', code: 'TreeMap<String, Integer> m;   // alphabetical, not arrival order' }
      ],
      remember: [
        'TreeSet and TreeMap stay sorted all the time; you never call sort.',
        'TreeSet: <code>first()</code>, <code>last()</code>, <code>ceiling(x)</code> (x or more), <code>floor(x)</code> (x or less).',
        'TreeMap: <code>firstKey()</code>, <code>lastKey()</code>; sorted by KEYS, not values.',
        '<code>ceiling</code> and <code>floor</code> return <code>null</code> when nothing fits; <code>first</code> and <code>last</code> crash on an empty set.',
        'To rank a map by its values: copy the keys to a list and sort the list with a Comparator.'
      ],
      rememberAr: 'TreeSet وTreeMap مرتبتان دائماً. first وlast للأصغر والأكبر، وceiling وfloor للأقرب، وfirstKey وlastKey للمفاتيح. الترتيب حسب المفاتيح فقط.',
      practice: [
        { t: 'mcq', q: 'A TreeSet holds [4, 9, 15, 22]. What does <code>first()</code> return?', options: ['22', '4', '9', '[4]'], answer: 1, explain: 'first() gives the smallest value of a TreeSet.', explainAr: 'first تعطي أصغر قيمة.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeSet<Integer> s = new TreeSet<>(Arrays.asList(20, 5, 15, 10));
                  System.out.println(s.ceiling(12));
                  System.out.println(s.floor(12));
                  System.out.println(s.floor(4));
                  System.out.println(s.last());
              }
          }
        `, answer: J`
          15
          10
          null
          20
        `, explain: 'The set is [5, 10, 15, 20]. The first value 12 or more is 15; the last value 12 or less is 10; nothing is 4 or less, so null; the largest value is 20.', explainAr: 'نرتب المجموعة أولاً ثم نبحث عن الأقرب.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<String, Double> prices = new TreeMap<>();
                  prices.put("tea", 8.5);
                  prices.put("coffee", 12.0);
                  prices.put("juice", 10.0);
                  System.out.println(prices);
                  System.out.println(prices.firstKey());
                  System.out.println(prices.get(prices.lastKey()));
              }
          }
        `, answer: J`
          {coffee=12.0, juice=10.0, tea=8.5}
          coffee
          8.5
        `, explain: 'Keys are sorted alphabetically: coffee, juice, tea. The first key is coffee. The last key is tea, and its value is 8.5.', explainAr: 'المفاتيح مرتبة أبجدياً، وآخر مفتاح هو tea.' },
        { t: 'fill', q: 'Print the lowest and the highest mark of a TreeSet called <code>marks</code>.', code: J`
          System.out.println("Lowest: " + marks.___());
          System.out.println("Highest: " + marks.___());
        `, answers: ['first', 'last'], explain: 'first() is the smallest value, last() the largest.' },
        { t: 'bug', q: 'This program should print the team with the MOST points (Eagles), but it prints <code>Top: Stars</code>. Tap the line with the bug.', qAr: 'المطلوب الفريق صاحب أعلى نقاط لكن البرنامج يطبع Stars. أين الخطأ؟', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<String, Integer> points = new TreeMap<>();
                  points.put("Falcons", 4);
                  points.put("Stars", 2);
                  points.put("Eagles", 7);
                  // print the team with the most points
                  System.out.println("Top: " + points.lastKey());
              }
          }
        `, bug: 10, fix: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  TreeMap<String, Integer> points = new TreeMap<>();
                  points.put("Falcons", 4);
                  points.put("Stars", 2);
                  points.put("Eagles", 7);
                  // print the team with the most points
                  String top = points.firstKey();
                  for (String t : points.keySet()) {
                      if (points.get(t) > points.get(top)) {
                          top = t;
                      }
                  }
                  System.out.println("Top: " + top);
              }
          }
        `, hint: 'A TreeMap is sorted by what?', explain: 'A TreeMap is sorted by its keys, so <code>lastKey()</code> is the name last in the alphabet: Stars. To find the most points, loop over the keys and keep the team with the biggest value.', explainAr: 'lastKey تعطي آخر اسم أبجدياً لا صاحب أعلى نقاط.' },
        { t: 'code', q: 'Read words until the end of the input. Print <code>First: </code> and the alphabetically first word, <code>Last: </code> and the alphabetically last word, and <code>Different: </code> and the number of different words. Use a TreeSet. No prompts.', qAr: '{{g:اقرأ|اقرئي}} الكلمات و{{g:اطبع|اطبعي}} أول وآخر كلمة أبجدياً وعدد الكلمات المختلفة باستخدام TreeSet.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  TreeSet<String> words = new TreeSet<>();
                  // read until the end, then print three lines
              }
          }
        `, tests: [{ stdin: 'pear apple fig apple', expected: J`
          First: apple
          Last: pear
          Different: 3
        ` }, { stdin: 'zebra', expected: J`
          First: zebra
          Last: zebra
          Different: 1
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  TreeSet<String> words = new TreeSet<>();
                  while (in.hasNext()) {
                      words.add(in.next());
                  }
                  System.out.println("First: " + words.first());
                  System.out.println("Last: " + words.last());
                  System.out.println("Different: " + words.size());
              }
          }
        `, hint: 'while (in.hasNext()) words.add(in.next()); then first(), last() and size().', explain: 'The TreeSet removes repeats and keeps the words sorted, so first(), last() and size() answer everything.', explainAr: 'المجموعة المرتبة تزيل التكرار وترتب الكلمات.' }
      ]
    },

    // ---------------------------------------------------------------- L14 (new)
    {
      title: 'Stacks and queues with ArrayDeque',
      titleAr: 'المكدس والطابور باستخدام ArrayDeque',
      minutes: 30,
      body: [
        { type: 'h', en: 'Two ways to wait in line' },
        { type: 'p', en: 'Many programs need one of two simple orders. <b>Last in, first out</b> (LIFO): the newest item leaves first, like the Undo button that cancels your LAST action. This is called a <b>stack</b>. <b>First in, first out</b> (FIFO): the oldest item leaves first, like patients in a clinic. This is called a <b>queue</b>. Java has one fast class for both: <code>ArrayDeque</code> (say "array deck"; deque means "double-ended queue").', ar: 'المكدس: آخر من يدخل أول من يخرج. الطابور: أول من يدخل أول من يخرج. وArrayDeque يقوم بالاثنين.' },
        { type: 'analogy', title: 'A pile of plates', en: 'In a restaurant kitchen, clean plates are put on top of the pile, and the cook always takes the top plate. The plate washed last is used first. That is a stack.' },
        { type: 'analogy', title: 'The clinic waiting line', en: 'At the clinic, new patients join at the back, and the nurse calls the person at the front. The patient who came first goes in first. That is a queue.' },
        { type: 'table', head: ['', 'Stack (LIFO)', 'Queue (FIFO)'], rows: [
          ['Put in', '<code>push(x)</code>: on the top', '<code>offer(x)</code>: at the back'],
          ['Look, do not remove', '<code>peek()</code>: the top', '<code>peek()</code>: the front'],
          ['Take out', '<code>pop()</code>: the top', '<code>poll()</code>: the front'],
          ['When empty', '<code>pop()</code> crashes; <code>peek()</code> gives null', '<code>poll()</code> and <code>peek()</code> give null']
        ] },
        { type: 'h', en: 'A stack: push, pop, peek' },
        { type: 'p', en: 'A text editor remembers your actions on a stack. Every new action is pushed on top. Undo pops the top action, the most recent one.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayDeque<String> undo = new ArrayDeque<>();
                  undo.push("type Hello");
                  undo.push("make bold");
                  undo.push("delete word");
                  System.out.println("Top: " + undo.peek());
                  System.out.println("Undo: " + undo.pop());
                  System.out.println("Undo: " + undo.pop());
                  System.out.println("Left: " + undo);
              }
          }
        `, out: J`
          Top: delete word
          Undo: delete word
          Undo: make bold
          Left: [type Hello]
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['undo.push("delete word");', 'The third action goes on top of the other two.'],
          ['undo.peek()', 'Look at the top without removing it: delete word.'],
          ['undo.pop()', 'Remove and return the top: first delete word, then make bold.'],
          ['System.out.println(undo);', 'Only the oldest action is left. (A stack prints from the top down.)']
        ], ar: 'push تضع في الأعلى، وpop تأخذ من الأعلى، وpeek تنظر فقط.' },
        { type: 'memory', title: 'The stack grows and shrinks at the top', frames: [
          { label: 'After <code>undo.push("type Hello");</code>', vars: [{ name: 'undo', type: 'ArrayDeque<String>', ref: 'D' }], objects: [
            { id: 'D', cls: 'ArrayDeque<String>', fields: [{ name: 'top', value: '"type Hello"' }] }
          ] },
          { label: 'After <code>undo.push("make bold");</code>', vars: [{ name: 'undo', type: 'ArrayDeque<String>', ref: 'D' }], objects: [
            { id: 'D', cls: 'ArrayDeque<String>', fields: [{ name: 'top', value: '"make bold"' }, { name: 'below', value: '"type Hello"' }] }
          ] },
          { label: 'After <code>undo.push("delete word");</code>', vars: [{ name: 'undo', type: 'ArrayDeque<String>', ref: 'D' }], objects: [
            { id: 'D', cls: 'ArrayDeque<String>', fields: [{ name: 'top', value: '"delete word"' }, { name: 'below', value: '"make bold"' }, { name: 'below', value: '"type Hello"' }] }
          ] },
          { label: 'After <code>String done = undo.pop();</code>', vars: [{ name: 'undo', type: 'ArrayDeque<String>', ref: 'D' }, { name: 'done', type: 'String', value: '"delete word"' }], objects: [
            { id: 'D', cls: 'ArrayDeque<String>', fields: [{ name: 'top', value: '"make bold"' }, { name: 'below', value: '"type Hello"' }] }
          ] }
        ], ar: 'كل شيء يدخل ويخرج من الأعلى فقط.' },
        { type: 'check', q: 'push 1, push 2, push 3, then pop. Which value comes out?', options: ['1', '2', '3', 'null'], answer: 2, explain: '3 was pushed last, so it is on top and pops first.' },
        { type: 'note', kind: 'tip', en: 'Older books use the class <code>Stack</code> (with <code>push</code> and <code>pop</code> too). It still works, but the Java documentation recommends <code>ArrayDeque</code> for new programs: it is faster.' },
        { type: 'h', en: 'A queue: offer, poll, peek' },
        { type: 'p', en: 'The same class works as a queue when you use the queue methods: <code>offer</code> adds at the back, <code>poll</code> takes from the front. You already know these names from PriorityQueue (Lesson 10); here the order is simply the order of arrival.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayDeque<String> clinic = new ArrayDeque<>();
                  clinic.offer("Sara");
                  clinic.offer("Ali");
                  clinic.offer("Noura");
                  System.out.println("Next: " + clinic.peek());
                  System.out.println("Now seeing: " + clinic.poll());
                  System.out.println("Waiting: " + clinic);
              }
          }
        `, out: J`
          Next: Sara
          Now seeing: Sara
          Waiting: [Ali, Noura]
        ` },
        { type: 'lines', rows: [
          ['clinic.offer("Noura");', 'Noura joins at the back, behind Sara and Ali.'],
          ['clinic.peek()', 'Who is at the front? Sara (still waiting).'],
          ['clinic.poll()', 'Sara goes in: she is removed from the front.']
        ], ar: 'offer تضيف في الخلف وpoll تأخذ من الأمام.' },
        { type: 'check', q: 'offer A, offer B, offer C, then poll. Which value comes out?', options: ['A', 'B', 'C', 'null'], answer: 0, explain: 'A queue is first in, first out: A arrived first.' },
        { type: 'note', kind: 'warn', en: 'Use ONE set of methods for one deque: push/pop for a stack, or offer/poll for a queue. <code>push</code> adds at the FRONT and <code>offer</code> at the BACK, so mixing them puts people in the wrong place.', ar: 'لا {{g:تخلط|تخلطي}} push مع offer في البنية نفسها.' },
        { type: 'p', en: 'You can also write the variable with the interface type: <code>Queue&lt;String&gt; clinic = new ArrayDeque&lt;&gt;();</code>. A LinkedList (Lesson 5) can also be a queue, but ArrayDeque is usually faster.' },
        { type: 'steps', title: 'Worked example: calling patients at a clinic', problem: 'Read n commands. <code>ARRIVE name</code> means a patient joins the queue. <code>NEXT</code> means the nurse calls the next patient: print <code>Calling name</code>, or <code>Nobody waiting</code>. At the end print who is still waiting.', steps: [
          { en: 'Make the queue and read the number of commands.', code: J`
            ArrayDeque<String> queue = new ArrayDeque<>();
            int n = in.nextInt();
          ` },
          { en: 'For ARRIVE, read the name and offer it at the back.', code: J`
            String cmd = in.next();
            if (cmd.equals("ARRIVE")) {
                queue.offer(in.next());
            }
          ` },
          { en: 'For NEXT, poll the front. poll gives null when the queue is empty, so test for null.', code: J`
            else {
                String p = queue.poll();
                if (p == null) {
                    System.out.println("Nobody waiting");
                } else {
                    System.out.println("Calling " + p);
                }
            }
          ` },
          { en: 'After the loop, print the queue.', code: 'System.out.println("Still waiting: " + queue);' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  ArrayDeque<String> queue = new ArrayDeque<>();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      String cmd = in.next();
                      if (cmd.equals("ARRIVE")) {
                          queue.offer(in.next());
                      } else {
                          String p = queue.poll();
                          if (p == null) {
                              System.out.println("Nobody waiting");
                          } else {
                              System.out.println("Calling " + p);
                          }
                      }
                  }
                  System.out.println("Still waiting: " + queue);
              }
          }
        `, stdin: '7\nARRIVE Sara\nARRIVE Ali\nNEXT\nARRIVE Noura\nNEXT\nNEXT\nNEXT', out: J`
          Calling Sara
          Calling Ali
          Calling Noura
          Nobody waiting
          Still waiting: []
        `, ar: 'نضيف بـ offer ونستدعي بـ poll، وnull تعني أن الطابور فارغ.' },
        { type: 'h', en: 'A famous stack job: balanced brackets' },
        { type: 'p', en: 'Before your program runs, the compiler checks that every bracket is closed in the right order. <code>{[(x+1)*2]}</code> is balanced; <code>([)]</code> and <code>((</code> are not. A stack solves it: <b>push</b> every opening bracket; at a closing bracket, <b>pop</b> the top and check that it is the matching opening bracket; at the end the stack must be <b>empty</b>.', ar: 'نضع كل قوس فتح في المكدس، وعند قوس الإغلاق نأخذ الأعلى ونتأكد أنه يطابقه، وفي النهاية يجب أن يكون المكدس فارغاً.' },
        { type: 'analogy', title: 'Boxes inside boxes', en: 'You put a small box inside a medium box inside a big box. To close them, you must close the small one first, then the medium one, then the big one: the last opened is the first closed.' },
        { type: 'steps', title: 'Worked example: is it balanced?', problem: 'Read one expression with no spaces and print <code>Balanced</code> or <code>Not balanced</code>.', steps: [
          { en: 'A small helper says whether an opening and a closing bracket belong together.', code: J`
            static boolean matches(char open, char close) {
                return (open == '(' && close == ')') || (open == '[' && close == ']') || (open == '{' && close == '}');
            }
          ` },
          { en: 'Walk through the characters. Push every opening bracket.', code: J`
            for (char c : text.toCharArray()) {
                if (c == '(' || c == '[' || c == '{') {
                    stack.push(c);
                }
          ` },
          { en: 'At a closing bracket the stack must not be empty, and the popped bracket must match. Otherwise the answer is no.', code: J`
                else if (c == ')' || c == ']' || c == '}') {
                    if (stack.isEmpty() || !matches(stack.pop(), c)) {
                        ok = false;
                    }
                }
            }
          ` },
          { en: 'At the end, every opened bracket must have been closed: the stack must be empty too.', code: J`
            if (ok && stack.isEmpty()) {
                System.out.println("Balanced");
            } else {
                System.out.println("Not balanced");
            }
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              static boolean matches(char open, char close) {
                  return (open == '(' && close == ')') || (open == '[' && close == ']') || (open == '{' && close == '}');
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String text = in.next();
                  ArrayDeque<Character> stack = new ArrayDeque<>();
                  boolean ok = true;
                  for (char c : text.toCharArray()) {
                      if (c == '(' || c == '[' || c == '{') {
                          stack.push(c);
                      } else if (c == ')' || c == ']' || c == '}') {
                          if (stack.isEmpty() || !matches(stack.pop(), c)) {
                              ok = false;
                          }
                      }
                  }
                  if (ok && stack.isEmpty()) {
                      System.out.println("Balanced");
                  } else {
                      System.out.println("Not balanced");
                  }
              }
          }
        `, stdin: '{[(x+1)*2]}', out: 'Balanced', ar: 'إذا لم يطابق القوس أو بقي شيء في المكدس فالتعبير غير متوازن.' },
        { type: 'p', en: 'Try it with <code>([)]</code>: <code>(</code> and <code>[</code> are pushed; at <code>)</code> the top is <code>[</code>, which does not match, so the answer is Not balanced. With <code>((</code> nothing is wrong during the loop, but two brackets are left on the stack, so the last check catches it. The <code>||</code> in <code>stack.isEmpty() || ...</code> is important: when the stack is empty, Java does not run the second part, so <code>pop</code> never crashes.' },
        { type: 'check', q: 'Which input makes the stack non-empty at the end?', options: ['()', '([])', '(()', ')('], answer: 2, explain: 'In "(()" two brackets are opened and only one is closed, so one ( stays on the stack. (")(" fails earlier: the first ) finds an empty stack.)' }
      ],
      mistakes: [
        { title: 'pop on an empty stack', en: 'pop() throws NoSuchElementException when the stack is empty. Check isEmpty() first (or use poll(), which returns null).', code: J`
          ArrayDeque<String> s = new ArrayDeque<>();
          s.pop();   // crash
        ` },
        { title: 'Mixing push and offer', en: 'push adds at the front, offer at the back. On one deque, use only push/pop (stack) or only offer/poll (queue).', code: J`
          q.offer("Sara");
          q.push("Ali");   // Ali jumps in front of Sara
        ` },
        { title: 'Forgetting the final empty check', en: 'In the bracket checker, "((" passes the loop with no error. Without "stack.isEmpty()" at the end it is called balanced.', code: 'if (ok) { ... }   // must be: ok && stack.isEmpty()' },
        { title: 'Putting null in an ArrayDeque', en: 'ArrayDeque does not accept null (null is how poll and peek say "empty"). Adding null throws NullPointerException.', code: 'queue.offer(null);   // crash' }
      ],
      remember: [
        'Stack = last in, first out: <code>push</code>, <code>pop</code>, <code>peek</code>.',
        'Queue = first in, first out: <code>offer</code>, <code>poll</code>, <code>peek</code>.',
        '<code>ArrayDeque</code> does both; use one set of methods per deque.',
        'On an empty deque: <code>poll</code> and <code>peek</code> return <code>null</code>, <code>pop</code> crashes.',
        'Balanced brackets: push openings, pop and match at closings, the stack must be empty at the end.'
      ],
      rememberAr: 'المكدس: push وpop وpeek. الطابور: offer وpoll وpeek. ArrayDeque تقوم بالاثنين. poll تعيد null عند الفراغ وpop تتوقف. وللتحقق من الأقواس نستخدم مكدساً.',
      practice: [
        { t: 'mcq', q: 'The Back button of a browser returns to the page you visited LAST. Which structure fits?', options: ['A queue (FIFO)', 'A stack (LIFO)', 'A TreeSet', 'A HashMap'], answer: 1, explain: 'The most recent page is the first one you go back to: last in, first out.', explainAr: 'آخر صفحة زرتها هي أول ما ترجع إليه: مكدس.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayDeque<Integer> s = new ArrayDeque<>();
                  s.push(10);
                  s.push(20);
                  s.push(30);
                  System.out.println(s.pop());
                  System.out.println(s.peek());
                  s.push(40);
                  System.out.println(s.pop() + s.pop());
                  System.out.println(s.size());
              }
          }
        `, answer: J`
          30
          20
          60
          1
        `, explain: 'pop gives 30 (the top). peek shows 20 without removing it. After push 40, two pops give 40 and 20: 40 + 20 = 60. Only 10 is left.', explainAr: 'نأخذ دائماً من الأعلى.' },
        { t: 'output', q: 'What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayDeque<String> q = new ArrayDeque<>();
                  q.offer("Huda");
                  q.offer("Omar");
                  System.out.println(q.poll());
                  q.offer("Lina");
                  System.out.println(q.poll());
                  System.out.println(q.poll());
                  System.out.println(q.poll());
              }
          }
        `, answer: J`
          Huda
          Omar
          Lina
          null
        `, explain: 'First in, first out: Huda, then Omar, then Lina. The queue is then empty, so poll returns null (no crash).', explainAr: 'poll تعيد null عندما يفرغ الطابور.' },
        { t: 'fill', q: 'Complete the stack code: put two actions on the stack, look at the top, then undo it.', code: J`
          ArrayDeque<String> undo = new ArrayDeque<>();
          undo.___("type");
          undo.___("paste");
          System.out.println(undo.___());   // paste, still there
          System.out.println(undo.___());   // paste, removed
        `, answers: ['push', 'push', 'peek', 'pop'], explain: 'push puts on top, peek only looks, pop removes the top.' },
        { t: 'bug', q: 'The clinic is first come, first served, so Sara should be called first. The program prints <code>Ali</code>. Tap the line with the bug.', qAr: 'المفروض أن تُخدم سارة أولاً لكن البرنامج يطبع Ali. أين الخطأ؟', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayDeque<String> q = new ArrayDeque<>();
                  q.offer("Sara");
                  q.push("Ali");
                  q.offer("Noura");
                  System.out.println(q.poll());
              }
          }
        `, bug: 7, fix: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  ArrayDeque<String> q = new ArrayDeque<>();
                  q.offer("Sara");
                  q.offer("Ali");
                  q.offer("Noura");
                  System.out.println(q.poll());
              }
          }
        `, hint: 'Where does push put an item, and where does offer put it?', explain: '<code>push</code> is a stack method: it puts Ali at the FRONT, so poll takes him first. A queue must use <code>offer</code> for everyone; then poll gives Sara.', explainAr: 'push تضع في المقدمة؛ في الطابور {{g:استخدم|استخدمي}} offer دائماً.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> words. Use a stack (<code>ArrayDeque&lt;String&gt;</code>) to print the words in REVERSE order on one line, separated by single spaces. No prompts.', qAr: '{{g:استخدم|استخدمي}} مكدساً لطباعة الكلمات بترتيب معكوس في سطر واحد.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayDeque<String> stack = new ArrayDeque<>();
                  // push every word, then pop them all
              }
          }
        `, tests: [{ stdin: '3\nI love Java', expected: 'Java love I' }, { stdin: '1\nRiyadh', expected: 'Riyadh' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayDeque<String> stack = new ArrayDeque<>();
                  for (int i = 0; i < n; i++) {
                      stack.push(in.next());
                  }
                  String line = "";
                  while (!stack.isEmpty()) {
                      line += stack.pop() + " ";
                  }
                  System.out.println(line.trim());
              }
          }
        `, hint: 'Push all words. Then, while the stack is not empty, pop a word and add it to a String with a space. Print the String with trim().', explain: 'The last word pushed is the first popped, so the order comes out reversed. trim() removes the extra space at the end.', explainAr: 'آخر كلمة تدخل المكدس هي أول ما يخرج، فينعكس الترتيب.' }
      ]
    },

    // ---------------------------------------------------------------- L15 (new)
    {
      title: 'Choosing the right collection',
      titleAr: 'اختيار المجموعة المناسبة',
      minutes: 25,
      body: [
        { type: 'h', en: 'So many collections: which one do I need?' },
        { type: 'p', en: 'You now know about ten collection classes. The right choice makes a program short and fast, because the collection does the work for you: a set refuses repeats, a map finds by key, a queue keeps the order of arrival. The wrong choice makes you write loops that the right collection already has inside. In exams too, many questions are simply "which collection fits this situation?"', ar: 'الاختيار الصحيح يجعل البرنامج قصيراً وسريعاً لأن المجموعة تقوم بالعمل عنك.' },
        { type: 'analogy', title: 'Containers at home', en: 'A numbered shelf keeps things in a row (list). A guest list never has a name twice (set). A cabinet of labelled drawers finds things by their label (map). A ticket line serves people in turn (queue). You would not keep spoons in the guest list.' },
        { type: 'h', en: 'Ask three questions' },
        { type: 'list', items: [
          '<b>1. Do I look things up by a key</b> (a name, an ID, a code)? Then use a <b>Map</b>: <code>HashMap</code>, or <code>TreeMap</code> if the keys must be sorted.',
          '<b>2. Must every value appear only once</b>, or do I mostly ask "is it there?"? Then use a <b>Set</b>: <code>HashSet</code>, <code>TreeSet</code> (sorted) or <code>LinkedHashSet</code> (typed order).',
          '<b>3. Do items wait to be processed in a special order?</b> Arrival order: a queue (<code>ArrayDeque</code> with offer/poll). Newest first: a stack (<code>ArrayDeque</code> with push/pop). Most urgent first: <code>PriorityQueue</code>.',
          '<b>None of these?</b> Use a <b>List</b>: <code>ArrayList</code> (the everyday choice).'
        ], ar: 'هل نبحث بمفتاح؟ خريطة. هل نمنع التكرار؟ مجموعة. هل ننتظر بترتيب خاص؟ طابور أو مكدس. وإلا فقائمة.' },
        { type: 'h', en: 'The decision table' },
        { type: 'table', head: ['You need', 'Use', 'Example'], rows: [
          ['Items in order, by position, repeats allowed', '<code>ArrayList</code>', 'A class register, a shopping basket'],
          ['Many adds and removes at the front', '<code>LinkedList</code> or <code>ArrayDeque</code>', 'Recently viewed products'],
          ['No repeats, fast "is it there?"', '<code>HashSet</code>', 'Students who visited the library today'],
          ['No repeats, sorted', '<code>TreeSet</code>', 'Different student IDs, smallest first'],
          ['No repeats, in the order first added', '<code>LinkedHashSet</code>', 'Attendance: who came, in arrival order'],
          ['Find a value by a key', '<code>HashMap</code>', 'Phone book, menu prices, stock'],
          ['Find by key, keys printed in order', '<code>TreeMap</code>', 'Word count A to Z, a league table'],
          ['First in, first out', '<code>ArrayDeque</code>: offer / poll', 'A clinic queue, print jobs'],
          ['Last in, first out', '<code>ArrayDeque</code>: push / pop', 'Undo, the Back button, brackets'],
          ['Most urgent first', '<code>PriorityQueue</code>', 'Emergency room, top scores']
        ] },
        { type: 'h', en: 'What order will I get?' },
        { type: 'table', head: ['Collection', 'Order when you loop or print'], rows: [
          ['<code>ArrayList</code>, <code>LinkedList</code>', 'The order you added (positions 0, 1, 2…)'],
          ['<code>HashSet</code>, <code>HashMap</code>', 'No promise at all'],
          ['<code>LinkedHashSet</code>, <code>LinkedHashMap</code>', 'The order of first adding'],
          ['<code>TreeSet</code>, <code>TreeMap</code>', 'Sorted (keys for a map)'],
          ['<code>ArrayDeque</code>', 'Queue: arrival order. Stack: newest first'],
          ['<code>PriorityQueue</code>', 'Only the head is sure; use poll() for the order']
        ] },
        { type: 'h', en: 'Same data, three collections' },
        { type: 'p', en: 'The best way to feel the difference is to give the same words to a list, a set and a map, and print all three. It is also good style to write the variable with the <b>interface</b> type (<code>List</code>, <code>Set</code>, <code>Map</code>) and choose the class only after <code>new</code>. Then changing <code>TreeMap</code> to <code>HashMap</code> later is a one-word change.' },
        { type: 'analogy', title: 'Booking "a car"', en: 'When you book a ride you ask for "a car", not for one particular car. Any car that can drive you is fine, and the company can send a different one next time. Writing <code>Map</code> on the left is asking for "a map"; the class after <code>new</code> is the car that comes today.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  List<String> list = new ArrayList<>();
                  Set<String> set = new TreeSet<>();
                  Map<String, Integer> map = new TreeMap<>();
                  for (String w : "red blue red green red".split(" ")) {
                      list.add(w);
                      set.add(w);
                      map.put(w, map.getOrDefault(w, 0) + 1);
                  }
                  System.out.println(list);
                  System.out.println(set);
                  System.out.println(map);
              }
          }
        `, out: J`
          [red, blue, red, green, red]
          [blue, green, red]
          {blue=1, green=1, red=3}
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['List<String> list = new ArrayList<>();', 'Interface type on the left, class on the right.'],
          ['System.out.println(list);', 'The list keeps every word, repeats included, in the order read.'],
          ['System.out.println(set);', 'The set keeps each word once; a TreeSet sorts them.'],
          ['System.out.println(map);', 'The map links each word to its count.']
        ], ar: 'القائمة تحفظ كل شيء بالترتيب، والمجموعة تحذف التكرار، والخريطة تربط الكلمة بعددها.' },
        { type: 'check', q: 'You must store the 30 names of a class in register order and often ask for "the 5th student". Which collection?', options: ['HashSet', 'ArrayList', 'HashMap', 'PriorityQueue'], answer: 1, explain: 'Order and positions (get(4)) are exactly what a list gives. A set has no positions.' },
        { type: 'check', q: 'A shop must find the price of a product from its barcode number, very fast. Which collection?', options: ['ArrayList&lt;Integer&gt;', 'TreeSet&lt;Integer&gt;', 'HashMap&lt;Long, Double&gt;', 'ArrayDeque&lt;Double&gt;'], answer: 2, explain: 'Looking up a value (price) by a key (barcode) is the job of a map. A HashMap does it in about one step.' },
        { type: 'check', q: 'Print the different cities the students come from, in alphabetical order. Which collection?', options: ['TreeSet&lt;String&gt;', 'ArrayList&lt;String&gt;', 'HashSet&lt;String&gt;', 'LinkedList&lt;String&gt;'], answer: 0, explain: 'No repeats AND sorted: TreeSet. A HashSet has no order; lists keep repeats.' },
        { type: 'check', q: 'In a café, the first order placed is the first one prepared. Which collection?', options: ['A stack (push/pop)', 'A queue (ArrayDeque with offer/poll)', 'A PriorityQueue', 'A TreeMap'], answer: 1, explain: 'First in, first out is a queue. A stack would prepare the newest order first, which is unfair.' },
        { type: 'steps', title: 'Worked example: a library visits report', problem: 'Read n library visits (the student name of each visit, in time order). Print the visits in order, the number of different visitors, and the visits per student from A to Z. Choose the right collection for each line.', steps: [
          { en: 'Line 1 needs every visit in time order, repeats included: a List.', code: 'List<String> visits = new ArrayList<>();' },
          { en: 'Line 2 needs "different" visitors only: a Set (we only need its size, so a HashSet is enough).', code: 'Set<String> visitors = new HashSet<>();' },
          { en: 'Line 3 needs a count per name, printed A to Z: a TreeMap.', code: 'Map<String, Integer> perStudent = new TreeMap<>();' },
          { en: 'One loop fills all three. Then print.', code: J`
            for (int i = 0; i < n; i++) {
                String name = in.next();
                visits.add(name);
                visitors.add(name);
                perStudent.put(name, perStudent.getOrDefault(name, 0) + 1);
            }
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  List<String> visits = new ArrayList<>();
                  Set<String> visitors = new HashSet<>();
                  Map<String, Integer> perStudent = new TreeMap<>();
                  for (int i = 0; i < n; i++) {
                      String name = in.next();
                      visits.add(name);
                      visitors.add(name);
                      perStudent.put(name, perStudent.getOrDefault(name, 0) + 1);
                  }
                  System.out.println("Visits in order: " + visits);
                  System.out.println("Different visitors: " + visitors.size());
                  System.out.println("Visits per student: " + perStudent);
              }
          }
        `, stdin: '6\nSara Omar Sara Lina Omar Sara', out: J`
          Visits in order: [Sara, Omar, Sara, Lina, Omar, Sara]
          Different visitors: 3
          Visits per student: {Lina=1, Omar=2, Sara=3}
        `, ar: 'لكل سؤال المجموعة المناسبة: قائمة للترتيب، ومجموعة للتمييز، وخريطة مرتبة للعدّ.' },
        { type: 'note', kind: 'tip', en: 'We never print the HashSet itself, only its size, so its missing order does not matter. When the printed order matters, pick a Tree or a Linked collection.' }
      ],
      mistakes: [
        { title: 'Avoiding repeats by hand with a list', en: 'A list with a contains check before every add works, but it is slow and long. A set refuses repeats by itself.', code: J`
          if (!names.contains(n)) names.add(n);   // a Set does this alone
        ` },
        { title: 'Two parallel lists instead of a map', en: 'Keeping names in one list and prices in another forces you to keep them in step. A map glues each key to its value.', code: J`
          ArrayList<String> items;  ArrayList<Integer> prices;   // use HashMap<String, Integer>
        ` },
        { title: 'Expecting order from HashSet or HashMap', en: 'They promise no order. Choose TreeSet/TreeMap (sorted) or LinkedHashSet/LinkedHashMap (first added) when the printed order matters.', code: 'System.out.println(new HashSet<>(names));   // any order' },
        { title: 'A PriorityQueue for first come, first served', en: 'A PriorityQueue orders by value, not by arrival. For a fair waiting line use ArrayDeque with offer and poll.', code: 'PriorityQueue<String> line;   // serves "Ahmad" before "Zaid", whoever came first' }
      ],
      remember: [
        'Look up by key: <b>Map</b>. No repeats or "is it there?": <b>Set</b>. Waiting in an order: <b>queue / stack / PriorityQueue</b>. Otherwise: <b>ArrayList</b>.',
        'Need sorted order? Tree collections. Need first-added order? Linked collections. Hash collections promise no order.',
        'First in, first out: ArrayDeque with offer/poll. Last in, first out: ArrayDeque with push/pop.',
        'Declare with the interface: <code>List&lt;String&gt; a = new ArrayList&lt;&gt;();</code>, <code>Map&lt;String, Integer&gt; m = new HashMap&lt;&gt;();</code>.'
      ],
      rememberAr: 'نبحث بمفتاح: خريطة. لا تكرار: مجموعة. انتظار بترتيب: طابور أو مكدس أو طابور أولوية. وإلا ArrayList. وTree للترتيب وLinked لترتيب الإدخال وHash بلا ترتيب.',
      practice: [
        { t: 'mcq', q: 'An emergency room must always treat the most urgent patient next. Which collection?', options: ['ArrayList', 'ArrayDeque (queue)', 'PriorityQueue', 'TreeSet'], answer: 2, explain: 'A PriorityQueue always gives the most urgent item (with the right Comparator), whatever the arrival order.', explainAr: 'طابور الأولوية يعطي الأكثر إلحاحاً.' },
        { t: 'mcq', q: 'You must remove repeated names but KEEP the order in which the names were first typed. Which collection?', options: ['HashSet', 'TreeSet', 'LinkedHashSet', 'PriorityQueue'], answer: 2, explain: 'LinkedHashSet refuses repeats and remembers the order of first adding. TreeSet would sort; HashSet has no order.' },
        { t: 'mcq', q: 'Which declaration is written in the recommended style?', options: ['ArrayList&lt;String&gt; a = new List&lt;&gt;();', 'List&lt;String&gt; a = new ArrayList&lt;&gt;();', 'List a = new ArrayList&lt;int&gt;();', 'Map&lt;String&gt; m = new HashMap&lt;&gt;();'], answer: 1, explain: 'Interface type on the left, real class on the right. List is an interface, so new List is impossible; a Map needs two types.' },
        { t: 'output', q: 'The same numbers go into three collections. What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  int[] data = {3, 1, 3, 2};
                  List<Integer> list = new ArrayList<>();
                  Set<Integer> set = new TreeSet<>();
                  ArrayDeque<Integer> stack = new ArrayDeque<>();
                  for (int x : data) {
                      list.add(x);
                      set.add(x);
                      stack.push(x);
                  }
                  System.out.println(list);
                  System.out.println(set);
                  System.out.println(stack.pop());
              }
          }
        `, answer: J`
          [3, 1, 3, 2]
          [1, 2, 3]
          2
        `, explain: 'The list keeps everything in order. The TreeSet drops the second 3 and sorts. The stack gives the LAST pushed value, 2.', explainAr: 'القائمة بالترتيب، والمجموعة مرتبة بلا تكرار، والمكدس يعطي آخر عنصر.' },
        { t: 'bug', q: 'The library wants the TOTAL number of visits (6), but the program prints <code>Visits: 3</code>. Tap the line with the wrong choice of collection.', qAr: 'المطلوب عدد الزيارات كلها لكن البرنامج يطبع 3. أين الخطأ؟', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  String[] scans = {"Sara", "Omar", "Sara", "Lina", "Omar", "Sara"};
                  Set<String> visits = new HashSet<>();
                  for (String s : scans) {
                      visits.add(s);
                  }
                  System.out.println("Visits: " + visits.size());
              }
          }
        `, bug: 6, fix: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  String[] scans = {"Sara", "Omar", "Sara", "Lina", "Omar", "Sara"};
                  List<String> visits = new ArrayList<>();
                  for (String s : scans) {
                      visits.add(s);
                  }
                  System.out.println("Visits: " + visits.size());
              }
          }
        `, hint: 'Which collection throws away repeats?', explain: 'A Set keeps each name once, so it counts different VISITORS (3), not visits. Every visit counts here, repeats included, so a List is the right choice and the size is 6.', explainAr: 'المجموعة تحذف التكرار فتعدّ الزوار لا الزيارات؛ {{g:استخدم|استخدمي}} قائمة.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> attendance scans (names, may repeat). Print the names in the order they FIRST arrived, without repeats, in list format. No prompts.', qAr: '{{g:اطبع|اطبعي}} الأسماء بترتيب أول وصول دون تكرار.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  // choose a collection that refuses repeats and keeps the first-added order
              }
          }
        `, tests: [{ stdin: '6\nSara Omar Sara Lina Omar Huda', expected: '[Sara, Omar, Lina, Huda]' }, { stdin: '2\nAli Ali', expected: '[Ali]' }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  Set<String> arrived = new LinkedHashSet<>();
                  for (int i = 0; i < n; i++) {
                      arrived.add(in.next());
                  }
                  System.out.println(arrived);
              }
          }
        `, hint: 'No repeats + first-added order = LinkedHashSet.', explain: 'A LinkedHashSet ignores the repeated scans and remembers who came first, so no extra code is needed.', explainAr: 'LinkedHashSet تحذف التكرار وتحفظ ترتيب الإدخال.' }
      ]
    },

    // ---------------------------------------------------------------- L16 (new)
    {
      title: 'Mini project: a course registration manager',
      titleAr: 'مشروع مصغّر: نظام تسجيل المقررات',
      minutes: 30,
      body: [
        { type: 'h', en: 'The same system, built twice' },
        { type: 'p', en: 'In Unit 3 you built systems from several classes, and each class kept its objects in an array with a count. In this project we rebuild a small course registration manager, the kind the registration office uses in the add and drop week, with <code>ArrayList</code> and <code>HashMap</code>. Then you can see with your own eyes how much code the collections remove.', ar: 'نعيد بناء نظام التسجيل من الوحدة 3 باستخدام ArrayList وHashMap ونرى كم يصبح أبسط.' },
        { type: 'analogy', title: 'Hiring an assistant', en: 'In Unit 3 you were the registration clerk AND the person who counted the seats, checked for repeats and moved names along the list. With collections you hire an assistant who keeps the count, refuses nothing you did not ask for, and moves names for you. You only make the decisions.' },
        { type: 'h', en: 'Unit 3 style: an array and a count' },
        { type: 'p', en: 'This is how one course kept its students with an array. Read it, but do not copy it: look at how many lines only do bookkeeping.' },
        { type: 'code', code: J`
          class Course {
              private String code;
              private String[] students = new String[30];
              private int count = 0;

              boolean register(String id) {
                  if (count == students.length) {
                      return false;                      // full
                  }
                  for (int i = 0; i < count; i++) {
                      if (students[i].equals(id)) {
                          return false;                  // already registered
                      }
                  }
                  students[count] = id;
                  count++;
                  return true;
              }

              boolean drop(String id) {
                  for (int i = 0; i < count; i++) {
                      if (students[i].equals(id)) {
                          for (int j = i; j < count - 1; j++) {
                              students[j] = students[j + 1];   // shift left
                          }
                          count--;
                          students[count] = null;
                          return true;
                      }
                  }
                  return false;
              }
          }
        ` },
        { type: 'h', en: 'Collections style: an ArrayList' },
        { type: 'p', en: 'Now the same two jobs with an ArrayList. <code>contains</code> replaces the search loop, <code>add</code> replaces "put at count and add one", and <code>remove</code> does the search AND the shifting, and even returns <code>true</code> or <code>false</code> for us.' },
        { type: 'code', code: J`
          class Course {
              private String code;
              private int capacity;
              private ArrayList<String> students = new ArrayList<>();

              boolean register(String id) {
                  if (students.size() == capacity || students.contains(id)) {
                      return false;
                  }
                  students.add(id);
                  return true;
              }

              boolean drop(String id) {
                  return students.remove(id);
              }
          }
        ` },
        { type: 'table', head: ['Job', 'Array + count (Unit 3)', 'ArrayList'], rows: [
          ['Is it full?', '<code>count == students.length</code>', '<code>students.size() == capacity</code>'],
          ['Already registered?', 'A loop with equals', '<code>students.contains(id)</code>'],
          ['Add a student', '<code>students[count] = id; count++;</code>', '<code>students.add(id);</code>'],
          ['Drop a student', 'A search loop + a shifting loop + count--', '<code>students.remove(id)</code>'],
          ['Lines for the two methods', 'about 25', 'about 9']
        ] },
        { type: 'note', kind: 'exam', en: 'We keep student IDs as <b>Strings</b> on purpose. With an <code>ArrayList&lt;Integer&gt;</code>, <code>students.remove(id)</code> with an int id would remove by INDEX (the trap from Lesson 4), not the student with that ID.', ar: 'نحفظ الأرقام الجامعية نصوصاً لتجنب فخ remove(int).' },
        { type: 'check', q: 'In the collections version, what does <code>students.remove(id)</code> return when the ID is not in the list?', options: ['null', 'false', '-1', 'It crashes'], answer: 1, explain: 'remove(Object) returns true when it removed something and false when the value was not there. So drop can simply return it.' },
        { type: 'h', en: 'Many courses: a map from code to Course' },
        { type: 'p', en: 'The registration office has many courses and always finds them by their code: "register 1001 in CS102". Finding by a key is the job of a map: <code>HashMap&lt;String, Course&gt;</code>. A <code>Registrar</code> class holds the map and gives clear messages. Every method starts with <code>courses.get(code)</code> and checks for <code>null</code>, because the user may type a code that does not exist.' },
        { type: 'analogy', title: 'The building directory', en: 'At the entrance of a college building, a directory board tells you which room belongs to which department. You find the room by the name, walk in, and that office keeps its own register of names. The board is the map, each office is a Course, and each register is an ArrayList.' },
        { type: 'memory', title: 'Objects inside collections inside objects', en: 'The Registrar points to a map; each value of the map points to a Course object; each Course points to its own ArrayList of student IDs.', frames: [
          { label: 'After adding CS102 (2 seats) and MATH111 (30 seats)', vars: [{ name: 'reg', type: 'Registrar', ref: 'R' }], objects: [
            { id: 'R', cls: 'Registrar', fields: [{ name: 'courses', ref: 'M' }] },
            { id: 'M', cls: 'HashMap<String, Course>', fields: [{ name: '"CS102"', ref: 'C1' }, { name: '"MATH111"', ref: 'C2' }] },
            { id: 'C1', cls: 'Course', fields: [{ name: 'code', value: '"CS102"' }, { name: 'capacity', value: '2' }, { name: 'students', ref: 'L1' }] },
            { id: 'L1', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '0' }] },
            { id: 'C2', cls: 'Course', fields: [{ name: 'code', value: '"MATH111"' }, { name: 'capacity', value: '30' }, { name: 'students', ref: 'L2' }] },
            { id: 'L2', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '0' }] }
          ] },
          { label: 'After <code>reg.register("1001", "CS102")</code>', vars: [{ name: 'reg', type: 'Registrar', ref: 'R' }], objects: [
            { id: 'R', cls: 'Registrar', fields: [{ name: 'courses', ref: 'M' }] },
            { id: 'M', cls: 'HashMap<String, Course>', fields: [{ name: '"CS102"', ref: 'C1' }, { name: '"MATH111"', ref: 'C2' }] },
            { id: 'C1', cls: 'Course', fields: [{ name: 'code', value: '"CS102"' }, { name: 'capacity', value: '2' }, { name: 'students', ref: 'L1' }] },
            { id: 'L1', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '1' }, { name: '[0]', value: '"1001"' }] },
            { id: 'C2', cls: 'Course', fields: [{ name: 'code', value: '"MATH111"' }, { name: 'capacity', value: '30' }, { name: 'students', ref: 'L2' }] },
            { id: 'L2', cls: 'ArrayList<String>', fields: [{ name: 'size', value: '0' }] }
          ] }
        ], ar: 'المسجّل يشير إلى خريطة، وكل قيمة فيها مقرر، ولكل مقرر قائمته.' },
        { type: 'check', q: 'Why does every Registrar method check <code>courses.get(code) == null</code> first?', options: ['To make the program faster', 'Because get returns null for a course code that is not a key, and calling a method on null crashes', 'Because HashMap cannot hold Course objects', 'It is not needed'], answer: 1, explain: 'A wrong code gives null, and null.isFull() would throw NullPointerException. The check turns it into a friendly message.' },
        { type: 'steps', title: 'Worked example: the whole manager', problem: 'Read n commands and print a message for each: <code>ADD code seats</code>, <code>REG id code</code>, <code>DROP id code</code>, <code>LIST code</code>.', steps: [
          { en: 'The Course class: an ArrayList and four small methods. <code>getStudents</code> returns a COPY, so outside code cannot change the real list.', code: J`
            class Course {
                private String code;
                private int capacity;
                private ArrayList<String> students = new ArrayList<>();

                Course(String code, int capacity) {
                    this.code = code;
                    this.capacity = capacity;
                }

                boolean has(String id) { return students.contains(id); }
                boolean isFull() { return students.size() >= capacity; }
                void add(String id) { students.add(id); }
                boolean remove(String id) { return students.remove(id); }
                ArrayList<String> getStudents() { return new ArrayList<>(students); }
            }
          ` },
          { en: 'The Registrar keeps the map. <code>register</code> checks, in order: does the course exist, is the student already in, is it full. Only then it adds.', code: J`
            String register(String id, String code) {
                Course c = courses.get(code);
                if (c == null) {
                    return "No course " + code;
                }
                if (c.has(id)) {
                    return id + " is already in " + code;
                }
                if (c.isFull()) {
                    return code + " is full";
                }
                c.add(id);
                return id + " registered in " + code;
            }
          ` },
          { en: '<code>drop</code> and <code>list</code> follow the same idea: get the course, check null, then let the list do the work.', code: J`
            String drop(String id, String code) {
                Course c = courses.get(code);
                if (c == null || !c.remove(id)) {
                    return id + " is not in " + code;
                }
                return id + " dropped " + code;
            }
          ` },
          { en: 'main reads each command word and calls the right method.', code: J`
            String cmd = in.next();
            if (cmd.equals("ADD")) { ... }
            else if (cmd.equals("REG")) { ... }
            else if (cmd.equals("DROP")) { ... }
            else if (cmd.equals("LIST")) { ... }
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  Registrar reg = new Registrar();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      String cmd = in.next();
                      if (cmd.equals("ADD")) {
                          String code = in.next();
                          int seats = in.nextInt();
                          reg.addCourse(code, seats);
                          System.out.println("Course " + code + " added");
                      } else if (cmd.equals("REG")) {
                          String id = in.next();
                          String code = in.next();
                          System.out.println(reg.register(id, code));
                      } else if (cmd.equals("DROP")) {
                          String id = in.next();
                          String code = in.next();
                          System.out.println(reg.drop(id, code));
                      } else if (cmd.equals("LIST")) {
                          System.out.println(reg.list(in.next()));
                      }
                  }
              }
          }

          class Registrar {
              private HashMap<String, Course> courses = new HashMap<>();

              void addCourse(String code, int capacity) {
                  courses.put(code, new Course(code, capacity));
              }

              String register(String id, String code) {
                  Course c = courses.get(code);
                  if (c == null) {
                      return "No course " + code;
                  }
                  if (c.has(id)) {
                      return id + " is already in " + code;
                  }
                  if (c.isFull()) {
                      return code + " is full";
                  }
                  c.add(id);
                  return id + " registered in " + code;
              }

              String drop(String id, String code) {
                  Course c = courses.get(code);
                  if (c == null || !c.remove(id)) {
                      return id + " is not in " + code;
                  }
                  return id + " dropped " + code;
              }

              String list(String code) {
                  Course c = courses.get(code);
                  if (c == null) {
                      return "No course " + code;
                  }
                  return code + ": " + c.getStudents();
              }
          }

          class Course {
              private String code;
              private int capacity;
              private ArrayList<String> students = new ArrayList<>();

              Course(String code, int capacity) {
                  this.code = code;
                  this.capacity = capacity;
              }

              boolean has(String id) { return students.contains(id); }
              boolean isFull() { return students.size() >= capacity; }
              void add(String id) { students.add(id); }
              boolean remove(String id) { return students.remove(id); }
              ArrayList<String> getStudents() { return new ArrayList<>(students); }
          }
        `, stdin: '10\nADD CS102 2\nADD MATH111 30\nREG 1001 CS102\nREG 1002 CS102\nREG 1001 CS102\nREG 1003 CS102\nREG 1003 PHYS101\nDROP 1001 CS102\nREG 1003 CS102\nLIST CS102', out: J`
          Course CS102 added
          Course MATH111 added
          1001 registered in CS102
          1002 registered in CS102
          1001 is already in CS102
          CS102 is full
          No course PHYS101
          1001 dropped CS102
          1003 registered in CS102
          CS102: [1002, 1003]
        `, ar: 'كل أمر يستدعي دالة في Registrar، وكل دالة تجد المقرر بالخريطة ثم تترك العمل للقائمة.' },
        { type: 'lines', title: 'Trace the interesting commands', rows: [
          ['REG 1001 CS102   (second time)', '<code>c.has("1001")</code> is true, so the message is "already in". Nothing is added.'],
          ['REG 1003 CS102   (before the drop)', 'CS102 has 2 students and 2 seats: <code>isFull()</code> is true.'],
          ['REG 1003 PHYS101', '<code>courses.get("PHYS101")</code> is null: "No course PHYS101". No crash.'],
          ['DROP 1001 CS102', '<code>students.remove("1001")</code> removes him and returns true; 1002 slides to index 0.'],
          ['LIST CS102', 'A copy of the list is printed: [1002, 1003].']
        ], ar: 'نتتبع الأوامر المهمة: التكرار، والامتلاء، والمقرر غير الموجود، والحذف.' },
        { type: 'note', kind: 'tip', en: 'Ideas to grow the project: a <code>TreeMap</code> instead of the HashMap to list all courses A to Z; a waiting list per course with an <code>ArrayDeque</code> (when someone drops, the first waiting student gets the seat); or, as in Unit 6, throw your own <code>CourseFullException</code> instead of returning a message.' }
      ],
      mistakes: [
        { title: 'Forgetting the null check after get', en: 'A wrong course code makes get return null, and the next method call crashes with NullPointerException.', code: J`
          Course c = courses.get(code);
          c.add(id);   // crash when code is not a key
        `, ar: '{{g:تحقق|تحققي}} من null بعد get.' },
        { title: 'Declaring the list but never creating it', en: 'A field declared without new is null. The first add crashes. Create it where you declare it, or in the constructor.', code: 'private ArrayList<String> students;   // null! write = new ArrayList<>();' },
        { title: 'Integer IDs and remove', en: 'With ArrayList&lt;Integer&gt;, remove(id) removes by index. Use Strings for IDs, or remove(Integer.valueOf(id)).', code: 'students.remove(1001);   // index 1001, not the student 1001' },
        { title: 'Giving away the real list', en: 'If getStudents returns the field itself, outside code can add or clear students without any checks. Return a copy.', code: 'ArrayList<String> getStudents() { return students; }   // better: new ArrayList<>(students)' }
      ],
      remember: [
        'An <code>ArrayList</code> field replaces "array + count": size, add, contains and remove do the bookkeeping.',
        'Find objects by a key with a <code>HashMap&lt;String, Course&gt;</code>.',
        'After <code>map.get(key)</code>, always check for <code>null</code>.',
        'Keep IDs as Strings to avoid the <code>remove(int)</code> trap; return a copy of an inner list.',
        'Collections inside objects inside collections are normal: draw the memory picture when you are lost.'
      ],
      rememberAr: 'قائمة ArrayList تغني عن المصفوفة والعدّاد، وخريطة HashMap تجد المقرر برمزه. {{g:تحقق|تحققي}} من null بعد get، و{{g:احفظ|احفظي}} الأرقام نصوصاً، و{{g:أعد|أعيدي}} نسخة من القائمة الداخلية.',
      practice: [
        { t: 'mcq', q: 'The manager must find a Course object from its code (like "CS102") many times a second. Which field is best?', options: ['ArrayList&lt;Course&gt; courses', 'HashMap&lt;String, Course&gt; courses', 'TreeSet&lt;String&gt; courses', 'Course[] courses'], answer: 1, explain: 'Finding a value by a key is the job of a map. With a list or an array you would loop over every course.', explainAr: 'البحث بالمفتاح عمل الخريطة.' },
        { t: 'output', q: 'A map whose values are lists. What does this program print?', code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  HashMap<String, ArrayList<String>> sections = new HashMap<>();
                  sections.put("CS102", new ArrayList<>());
                  sections.get("CS102").add("Sara");
                  sections.get("CS102").add("Omar");
                  ArrayList<String> list = sections.get("CS102");
                  list.remove("Sara");
                  System.out.println(sections.get("CS102"));
                  System.out.println(sections.containsKey("MATH111"));
                  System.out.println(sections.get("CS102").size());
              }
          }
        `, answer: J`
          [Omar]
          false
          1
        `, explain: 'get returns the SAME list that is inside the map, so removing Sara through list changes the map too. MATH111 was never put, so containsKey is false.', explainAr: 'get تعيد القائمة نفسها الموجودة في الخريطة.' },
        { t: 'bug', q: '<code>reg.register("1001", "PHYS101")</code> crashes with <code>NullPointerException</code> because PHYS101 does not exist. Tap the line with the bug.', qAr: 'البرنامج يتوقف عند رمز مقرر غير موجود. أين الخطأ؟', code: J`
          String register(String id, String code) {
              Course c = courses.get(code);
              if (c.has(id)) {
                  return id + " is already in " + code;
              }
              if (c.isFull()) {
                  return code + " is full";
              }
              c.add(id);
              return id + " registered in " + code;
          }
        `, bug: 3, fix: J`
          String register(String id, String code) {
              Course c = courses.get(code);
              if (c == null) {
                  return "No course " + code;
              }
              if (c.has(id)) {
                  return id + " is already in " + code;
              }
              if (c.isFull()) {
                  return code + " is full";
              }
              c.add(id);
              return id + " registered in " + code;
          }
        `, hint: 'What is c when the code is not a key of the map?', explain: 'For an unknown code, <code>courses.get(code)</code> is null, and line 3 calls <code>c.has(id)</code> on null. Check <code>c == null</code> first and return a message.', explainAr: '{{g:تحقق|تحققي}} من null قبل استدعاء أي دالة على c.' },
        { t: 'bug', q: 'The first <code>add</code> on this course crashes with <code>NullPointerException</code>. Tap the line with the bug.', code: J`
          class Course {
              private String code;
              private ArrayList<String> students;

              Course(String code) {
                  this.code = code;
              }

              void add(String id) {
                  students.add(id);
              }
          }
        `, bug: 3, fix: J`
          class Course {
              private String code;
              private ArrayList<String> students = new ArrayList<>();

              Course(String code) {
                  this.code = code;
              }

              void add(String id) {
                  students.add(id);
              }
          }
        `, hint: 'Was a list object ever created with new?', explain: 'Line 3 only declares the field, so <code>students</code> is null. <code>students.add(id)</code> then calls a method on null. Create the list with <code>new ArrayList&lt;&gt;()</code>.', explainAr: 'الحقل مُعرَّف لكنه لم يُنشأ بـ new فقيمته null.' },
        { t: 'order', q: 'Put the checks of <code>register</code> in a safe order.', lines: [
          'Course c = courses.get(code);',
          'if (c == null) return "No course " + code;',
          'if (c.has(id)) return id + " is already in " + code;',
          'if (c.isFull()) return code + " is full";',
          'c.add(id);',
          'return id + " registered in " + code;'
        ], explain: 'The null check must come before any call on c. Adding comes only after all the checks have passed.' },
        { t: 'code', q: 'Complete the method <code>register</code> in the Registrar (the rest of the program is given). It must return exactly: <code>No course CODE</code>, <code>ID is already in CODE</code>, <code>CODE is full</code>, or <code>ID registered in CODE</code>, checked in this order. No prompts.', qAr: '{{g:أكمل|أكملي}} الدالة register لتعيد الرسالة المناسبة بالترتيب المطلوب.', starter: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  Registrar reg = new Registrar();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      String cmd = in.next();
                      if (cmd.equals("ADD")) {
                          reg.addCourse(in.next(), in.nextInt());
                      } else if (cmd.equals("REG")) {
                          String id = in.next();
                          String code = in.next();
                          System.out.println(reg.register(id, code));
                      }
                  }
              }
          }

          class Registrar {
              private HashMap<String, Course> courses = new HashMap<>();

              void addCourse(String code, int capacity) {
                  courses.put(code, new Course(capacity));
              }

              String register(String id, String code) {
                  // 1. get the course; null -> "No course " + code
                  // 2. already in -> id + " is already in " + code
                  // 3. full -> code + " is full"
                  // 4. otherwise add, and return id + " registered in " + code
                  return "";
              }
          }

          class Course {
              private int capacity;
              private ArrayList<String> students = new ArrayList<>();

              Course(int capacity) { this.capacity = capacity; }

              boolean has(String id) { return students.contains(id); }
              boolean isFull() { return students.size() >= capacity; }
              void add(String id) { students.add(id); }
          }
        `, tests: [{ stdin: '5\nADD CS102 1\nREG 1001 CS102\nREG 1001 CS102\nREG 1002 CS102\nREG 1002 MATH111', expected: J`
          1001 registered in CS102
          1001 is already in CS102
          CS102 is full
          No course MATH111
        ` }, { stdin: '3\nADD IS201 5\nREG 2001 IS201\nREG 2002 IS201', expected: J`
          2001 registered in IS201
          2002 registered in IS201
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  Registrar reg = new Registrar();
                  int n = in.nextInt();
                  for (int i = 0; i < n; i++) {
                      String cmd = in.next();
                      if (cmd.equals("ADD")) {
                          reg.addCourse(in.next(), in.nextInt());
                      } else if (cmd.equals("REG")) {
                          String id = in.next();
                          String code = in.next();
                          System.out.println(reg.register(id, code));
                      }
                  }
              }
          }

          class Registrar {
              private HashMap<String, Course> courses = new HashMap<>();

              void addCourse(String code, int capacity) {
                  courses.put(code, new Course(capacity));
              }

              String register(String id, String code) {
                  Course c = courses.get(code);
                  if (c == null) {
                      return "No course " + code;
                  }
                  if (c.has(id)) {
                      return id + " is already in " + code;
                  }
                  if (c.isFull()) {
                      return code + " is full";
                  }
                  c.add(id);
                  return id + " registered in " + code;
              }
          }

          class Course {
              private int capacity;
              private ArrayList<String> students = new ArrayList<>();

              Course(int capacity) { this.capacity = capacity; }

              boolean has(String id) { return students.contains(id); }
              boolean isFull() { return students.size() >= capacity; }
              void add(String id) { students.add(id); }
          }
        `, hint: 'Start with Course c = courses.get(code); and test c == null before anything else.', explain: 'The map finds the course by its code; the Course methods (backed by an ArrayList) answer the questions. The order of the checks decides which message wins.', explainAr: 'الخريطة تجد المقرر، ودوال المقرر تجيب عن الأسئلة، وترتيب الفحوص يحدد الرسالة.' }
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
    { t: 'mcq', q: 'Your program inserts thousands of items at the <b>front</b> of a list. Which class is most efficient?', options: ['ArrayList', 'LinkedList', 'int[]', 'Arrays.asList'], answer: 1, explain: 'A LinkedList adds at the front by linking one node; an ArrayList must shift every item.' },
    { t: 'bug', q: 'Both teams have 200 points, but this program prints <code>Different points</code>. Tap the line with the bug.', qAr: 'للفريقين النقاط نفسها لكن البرنامج يطبع Different points. أين الخطأ؟', code: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              HashMap<String, Integer> points = new HashMap<>();
              points.put("Falcons", 200);
              points.put("Eagles", 200);
              if (points.get("Falcons") == points.get("Eagles")) {
                  System.out.println("Same points");
              } else {
                  System.out.println("Different points");
              }
          }
      }
    `, bug: 8, fix: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              HashMap<String, Integer> points = new HashMap<>();
              points.put("Falcons", 200);
              points.put("Eagles", 200);
              if (points.get("Falcons").equals(points.get("Eagles"))) {
                  System.out.println("Same points");
              } else {
                  System.out.println("Different points");
              }
          }
      }
    `, hint: 'The map gives back Integer objects. What does == compare for objects?', explain: '<code>get</code> returns two Integer objects. 200 is above 127, so they are two different boxes and <code>==</code> gives false. <code>equals</code> compares the numbers and gives true.', explainAr: 'قيم الخريطة كائنات Integer؛ قارنها بـ equals.' },
    { t: 'bug', q: 'This method says that <code>"(("</code> is balanced, which is wrong. Tap the line with the bug.', code: J`
      static boolean balanced(String text) {
          ArrayDeque<Character> stack = new ArrayDeque<>();
          for (char c : text.toCharArray()) {
              if (c == '(') {
                  stack.push(c);
              } else if (c == ')') {
                  if (stack.isEmpty()) {
                      return false;
                  }
                  stack.pop();
              }
          }
          return true;
      }
    `, bug: 13, fix: J`
      static boolean balanced(String text) {
          ArrayDeque<Character> stack = new ArrayDeque<>();
          for (char c : text.toCharArray()) {
              if (c == '(') {
                  stack.push(c);
              } else if (c == ')') {
                  if (stack.isEmpty()) {
                      return false;
                  }
                  stack.pop();
              }
          }
          return stack.isEmpty();
      }
    `, hint: 'After the loop, what is still on the stack for "(("?', explain: 'With "((" nothing goes wrong inside the loop, but two opening brackets are left on the stack. The method must return <code>stack.isEmpty()</code>, which is false here.', explainAr: 'يجب أن يكون المكدس فارغاً في النهاية.' }
  ],
  lab: {
    t: 'code',
    q: '<b>Grade book.</b> Read an integer <code>n</code>, then <code>n</code> lines. Each line has a student name (one word, all names different) and an integer score. Print these lines, in this order:<br>1) every student as <code>name: score</code>, in alphabetical order of name;<br>2) <code>Sorted scores: </code> followed by the list of scores in ascending order, for example <code>[55, 70, 88]</code>;<br>3) <code>Highest: </code> and the highest score;<br>4) <code>Passed: </code> and how many scores are 60 or more.<br>Hints: use a <code>TreeMap</code> for the names, an <code>ArrayList</code> for the scores and the <code>Collections</code> class. Do not print prompts.',
    qAr: '{{g:اقرأ|اقرئي}} أسماء الطلاب ودرجاتهم، {{g:واطبعهم|واطبعيهم}} مرتبين أبجدياً، ثم الدرجات مرتبة، ثم أعلى درجة، ثم عدد الناجحين (60 فأكثر).',
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
    { code: J`Collections.sort(l); Collections.max(l); Collections.reverse(l);`, note: 'List utilities (also min, shuffle, binarySearch)' },
    { code: J`arr = Arrays.copyOf(arr, arr.length + 1); Arrays.equals(a, b);`, note: 'Bigger copy of an array; compare array values (never ==)' },
    { code: J`ArrayList<String> copy = new ArrayList<>(list);`, note: 'A real copy; copy = list only copies the reference' },
    { code: J`list.get(0).equals(list.get(1))`, note: 'Compare Integer objects with equals (== fails above 127)' },
    { code: J`list.removeIf(x -> x < 10);`, note: 'Remove every item that matches a rule, safely' },
    { code: J`q.peekFirst(); q.pollFirst();`, note: 'LinkedList ends: null instead of a crash when empty' },
    { code: J`a.retainAll(b); a.addAll(b); a.removeAll(b);`, note: 'Sets: in both / in either / only in a (copy a first)' },
    { code: J`for (Map.Entry<String, Integer> e : map.entrySet()) { e.getKey(); e.getValue(); }`, note: 'Loop over key-value pairs; map.values() for values only' },
    { code: J`m.put(k, m.get(k) + x);`, note: 'Update a value: get, change, put back' },
    { code: J`new PriorityQueue<>((a, b) -> a.getLevel() - b.getLevel())`, note: 'Priority queue of your own objects (lowest level first)' },
    { code: J`Collections.frequency(l, x); Collections.swap(l, i, j);`, note: 'Count a value; exchange two items' },
    { code: J`class Student implements Comparable<Student> { public int compareTo(Student o) { return name.compareTo(o.name); } }`, note: 'Natural order, used by Collections.sort(list)' },
    { code: J`Collections.sort(list, (a, b) -> Double.compare(b.getGpa(), a.getGpa()));`, note: 'Sort objects with a Comparator (highest GPA first)' },
    { code: J`ts.first(); ts.last(); ts.ceiling(x); ts.floor(x); tm.firstKey(); tm.lastKey();`, note: 'TreeSet / TreeMap: smallest, largest, nearest' },
    { code: J`stack.push(x); stack.pop(); stack.peek();`, note: 'ArrayDeque as a stack: last in, first out' },
    { code: J`queue.offer(x); queue.poll(); queue.peek();`, note: 'ArrayDeque as a queue: first in, first out; poll gives null when empty' },
    { code: J`List<String> a = new ArrayList<>(); Map<String, Integer> m = new HashMap<>();`, note: 'Declare with the interface type, choose the class after new' }
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
    { term: 'Binary search', ar: 'البحث الثنائي', def: 'A fast search on sorted data that throws away half of the data at each step.' },
    { term: 'Insertion point', ar: 'نقطة الإدراج', def: 'The index where a missing value would go in sorted data. binarySearch returns -(insertion point) - 1.' },
    { term: 'Reference', ar: 'المرجع', def: 'An arrow from a variable (or a box of a list) to an object. b = a copies the arrow, so both names point to the same object.' },
    { term: 'Hash code', ar: 'رمز التجزئة', def: 'A number calculated from a value that tells a HashSet or HashMap where to look, so it does not check every item.' },
    { term: 'LinkedHashSet / LinkedHashMap', ar: 'مجموعة/خريطة بترتيب الإدخال', def: 'Like HashSet and HashMap, but they remember the order in which items were first added.' },
    { term: 'ConcurrentModificationException', ar: 'استثناء التعديل أثناء المرور', def: 'The crash you get when a collection is changed (for example with list.remove) while a for-each loop is walking over it.' },
    { term: 'Head', ar: 'رأس الطابور', def: 'The item at the front of a queue: the next one that poll() or peek() gives.' },
    { term: 'Comparable', ar: 'قابل للمقارنة', def: 'An interface with the method compareTo. It gives a class its natural order, used by Collections.sort(list) and TreeSet.' },
    { term: 'Comparator', ar: 'المقارِن', def: 'An object, often a lambda like (a, b) -> a.getId() - b.getId(), that compares two items to give any other order.' },
    { term: 'Stack (LIFO)', ar: 'المكدس', def: 'A collection where the last item put in is the first taken out: push, pop, peek.' },
    { term: 'Queue (FIFO)', ar: 'الطابور', def: 'A collection where the first item put in is the first taken out: offer, poll, peek.' },
    { term: 'ArrayDeque', ar: 'طابور مزدوج الطرفين', def: 'A double-ended queue: fast adding and removing at both ends. It can work as a stack or as a queue.' }
  ]
});

