JP.unit({
  course: 'cs101',
  n: 7,
  title: 'Arrays',
  titleAr: 'المصفوفات',
  intro: "Until now, one variable held one value. But a class has 30 marks, and a shop has 100 prices. An array lets you keep many values of the same type under one name, and a loop can then handle all of them. In small, slow steps you will learn to create arrays, use indexes, loop over arrays, copy them, pass them to methods, search them and sort them. Then you will use arrays of names and letters, parallel arrays, counting arrays, change arrays in place, and finish with a class marks analyser.",
  introAr: "المصفوفة تخزّن قيمًا كثيرة من النوع نفسه تحت اسم واحد، فنعالج 30 درجة أو 100 سعر بحلقة واحدة. ستتعلم بخطوات صغيرة إنشاء المصفوفات والفهارس والحلقات والنسخ والدوال والبحث والترتيب، ثم مصفوفات النصوص والمصفوفات المتوازية والعدّ والتعديل، وتختم بمشروع لتحليل درجات الشعبة.",
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
        { type: 'p', en: "Here is one more example. Your phone counts your steps every day. For one week you need 7 numbers. With 7 separate variables, every job (the total, the best day, printing) must be written 7 times. With one array of 7 boxes, you write the job once and a loop repeats it. This is why arrays are one of the most important tools in programming." },
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
        { type: 'table', head: ['Box (how people count)', 'Index (how Java counts)'], rows: [
          ['1st box', '<code>marks[0]</code>'],
          ['2nd box', '<code>marks[1]</code>'],
          ['3rd box', '<code>marks[2]</code>'],
          ['the n-th box', '<code>marks[n - 1]</code>']
        ] },
        { type: 'h', en: 'The index can be a variable' },
        { type: 'p', en: "The number inside the brackets does not have to be written by hand. It can be a variable or a small calculation, as long as it is a whole number (<code>int</code>). This is very useful: later a loop will change the index for us. Here we store the steps of a week, and the variable <code>day</code> chooses the box." },
        { type: 'code', code: J`
          int[] steps = new int[7];
          int day = 3;
          steps[day] = 8500;
          steps[day - 1] = 6200;
        ` },
        { type: 'lines', rows: [
          ['int[] steps = new int[7];', 'Seven boxes, one for each day. Indexes 0 to 6.'],
          ['int day = 3;', 'A normal int variable.'],
          ['steps[day] = 8500;', '<code>day</code> is 3, so this is <code>steps[3]</code>: the 4th box gets 8500.'],
          ['steps[day - 1] = 6200;', 'Java first computes 3 - 1 = 2, so this is <code>steps[2]</code>.']
        ], ar: "الفهرس يمكن أن يكون متغيرًا أو عملية حسابية تعطي عددًا صحيحًا." },
        { type: 'check', q: "<code>int day = 3;</code> Which box is <code>steps[day + 2]</code>?", options: ['<code>steps[3]</code>', '<code>steps[5]</code>', '<code>steps[2]</code>', 'An error'], answer: 1,
          explain: "Java computes the index first: 3 + 2 = 5. So it is <code>steps[5]</code>, the 6th box.", hint: "Work out the number inside the brackets first." },
        { type: 'h', en: 'Inside the computer: the variable holds an arrow' },
        { type: 'p', en: "Until now, every variable kept its value inside itself. After <code>int count = 3;</code> the variable <code>count</code> holds the number 3. An array variable is different. The boxes are built in another part of memory, and the variable holds only an <b>arrow</b> to them. Programmers call this arrow a <b>reference</b>. The boxes together are called the <b>array object</b>.",
          ar: "متغير المصفوفة لا يحمل الصناديق نفسها، بل يحمل سهمًا (مرجعًا) يشير إليها." },
        { type: 'analogy', title: 'A hotel key card', en: "Your hotel key card is not the room. It is a small card that leads you to the room. The array variable is the card; the array object (the row of boxes) is the room. Keep this picture in mind: it will explain many surprises later in this unit.",
          ar: "بطاقة الفندق ليست الغرفة، لكنها تقودك إليها. المتغير هو البطاقة والمصفوفة هي الغرفة." },
        { type: 'memory', title: 'Building an array step by step', en: "On the left are the variables. On the right is the array object. Press Next and watch one line run at a time.",
          code: J`
            int count = 3;
            int[] marks = new int[3];
            marks[0] = 70;
            marks[1] = 85;
            marks[2] = 60;
          `,
          frames: [
            { label: 'After <code>int count = 3;</code> (the number is inside the variable)', vars: [{ name: 'count', type: 'int', value: '3' }], objects: [] },
            { label: 'After <code>int[] marks = new int[3];</code> (an arrow to 3 new boxes, all 0)', vars: [{ name: 'count', type: 'int', value: '3' }, { name: 'marks', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] }
            ] },
            { label: 'After <code>marks[0] = 70;</code>', vars: [{ name: 'count', type: 'int', value: '3' }, { name: 'marks', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '70' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] }
            ] },
            { label: 'After <code>marks[1] = 85;</code>', vars: [{ name: 'count', type: 'int', value: '3' }, { name: 'marks', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '70' }, { name: '[1]', value: '85' }, { name: '[2]', value: '0' }] }
            ] },
            { label: 'After <code>marks[2] = 60;</code>', vars: [{ name: 'count', type: 'int', value: '3' }, { name: 'marks', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '70' }, { name: '[1]', value: '85' }, { name: '[2]', value: '60' }] }
            ] }
          ],
          ar: "لاحظ{{g:|ي}} أن count يحمل الرقم نفسه، أما marks فيحمل سهمًا إلى الصناديق." },
        { type: 'check', q: "What does the variable <code>marks</code> hold after <code>int[] marks = new int[3];</code>?", options: ['The three numbers', 'An arrow (reference) to the array object', 'Only the number 3', 'Nothing'], answer: 1,
          explain: "The boxes live in the array object. The variable holds a reference (an arrow) to it." },
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
        { type: 'p', en: "Why is this useful? Think of an attendance list for 30 students: <code>boolean[] present = new boolean[30];</code>. Every student starts as <code>false</code> (absent), and you only change the students who come: <code>present[4] = true;</code>. A counter array starts at 0 in every box, which is exactly what a counter needs.",
          ar: "القيم الابتدائية مفيدة: كل العدادات تبدأ من 0، وكل قيم boolean تبدأ false." },
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
        { type: 'steps', title: 'Worked example: steps in three days', problem: "Hessa walked 6200 steps on Sunday, 8500 on Monday and 7300 on Tuesday. Store the steps in an array and print the total. Then her phone corrects Monday to 9000 steps: change that box and print the new total.",
          steps: [
            { en: "Three whole numbers, so the type is <code>int</code>. Create 3 boxes.", code: "int[] steps = new int[3];" },
            { en: "Sunday is the 1st day, so index 0. Monday is index 1, Tuesday is index 2.", code: J`
              steps[0] = 6200;
              steps[1] = 8500;
              steps[2] = 7300;
            ` },
            { en: "Each box is used like a normal variable, so we can add the boxes.", code: J`
              int total = steps[0] + steps[1] + steps[2];
              System.out.println("Total: " + total);
            ` },
            { en: "Change Monday (index 1). The old value 8500 is replaced. Then compute the total again.", code: J`
              steps[1] = 9000;
              total = steps[0] + steps[1] + steps[2];
            ` },
            { en: "Print the new total and the number of days. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] steps = new int[3];
                    steps[0] = 6200;
                    steps[1] = 8500;
                    steps[2] = 7300;
                    int total = steps[0] + steps[1] + steps[2];
                    System.out.println("Total: " + total);
                    steps[1] = 9000;
                    total = steps[0] + steps[1] + steps[2];
                    System.out.println("New total: " + total);
                    System.out.println("Days: " + steps.length);
                }
            }
          `, out: J`
            Total: 22000
            New total: 22500
            Days: 3
          `, ar: "كل صندوق يعمل مثل متغير عادي: نقرأه ونجمعه ونغيّر قيمته." },
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
        "An array is <b>one name, many boxes</b> of the same type. The variable holds a <b>reference</b> (an arrow) to the boxes.",
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
          explain: "Each box is a variable: you can assign to it with <code>n[0] = input.nextInt();</code>." },
        { t: 'output', q: "What is the output? (The index is a variable.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] steps = new int[5];
                  int day = 2;
                  steps[day] = 7000;
                  steps[day + 1] = steps[day] + 500;
                  steps[0] = steps[3] - 1000;
                  System.out.println(steps[0] + " " + steps[1] + " " + steps[2] + " " + steps[3]);
              }
          }
        `, answer: '6500 0 7000 7500', explain: "<code>steps[2]</code> = 7000, <code>steps[3]</code> = 7000 + 500 = 7500, <code>steps[0]</code> = 7500 - 1000 = 6500. <code>steps[1]</code> was never set, so it keeps its default 0.",
          explainAr: "احسب{{g:|ي}} رقم الصندوق أولًا، ثم القيمة." },
        { t: 'bug', q: "This program should print <code>Items: 3</code> and <code>First: 4.5</code>, but it does not compile. Tap the line with the bug.",
          qAr: "البرنامج لا يُترجم. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    double[] prices = new double[3];
                    prices[0] = 4.5;
                    prices[1] = 6.0;
                    prices[2] = 3.5;
                    System.out.println("Items: " + prices.length());
                    System.out.println("First: " + prices[0]);
                }
            }
          `, bug: 7,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    double[] prices = new double[3];
                    prices[0] = 4.5;
                    prices[1] = 6.0;
                    prices[2] = 3.5;
                    System.out.println("Items: " + prices.length);
                    System.out.println("First: " + prices[0]);
                }
            }
          `,
          hint: "For an array, is <code>length</code> a method?",
          explain: "For an array, <code>length</code> is not a method, so <code>prices.length()</code> gives a compile error (&quot;cannot find symbol&quot;). Write <code>prices.length</code> with no brackets. (Only a String uses <code>length()</code> with brackets.)",
          explainAr: "طول المصفوفة length بدون أقواس، أما النص فـ length()." },
        { t: 'bug', q: "Four buses carry 12, 15, 9 and 20 students. The program should print <code>Last bus: 20</code>. It compiles, but when it runs it stops with <code>ArrayIndexOutOfBoundsException</code>. Tap the line with the bug.",
          qAr: "البرنامج يتوقف أثناء التشغيل. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] seats = new int[4];
                    seats[0] = 12;
                    seats[1] = 15;
                    seats[2] = 9;
                    seats[3] = 20;
                    System.out.println("Last bus: " + seats[4]);
                }
            }
          `, bug: 8,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] seats = new int[4];
                    seats[0] = 12;
                    seats[1] = 15;
                    seats[2] = 9;
                    seats[3] = 20;
                    System.out.println("Last bus: " + seats[seats.length - 1]);
                }
            }
          `,
          hint: "The array has 4 boxes. What are their indexes?",
          explain: "The 4 boxes have the indexes 0, 1, 2 and 3. There is no box 4, so Java stops the program at that line. The last box is <code>seats[3]</code>, which is the same as <code>seats[seats.length - 1]</code>.",
          explainAr: "آخر فهرس هو الطول ناقص 1، أي 3 وليس 4." },
        { t: 'mcq', q: "Look at the memory picture of <code>int count = 3;</code> and <code>int[] marks = new int[3];</code>. Which sentence is true?",
          options: ['Both variables hold the number 3', '<code>count</code> holds 3; <code>marks</code> holds an arrow to an array object with 3 boxes', '<code>marks</code> holds the three values 0, 0, 0 inside itself', '<code>count</code> holds an arrow to the number 3'], answer: 1,
          explain: "A simple <code>int</code> variable holds its value. An array variable holds a reference (an arrow) to the array object, where the boxes live.",
          explainAr: "المتغير العادي يحمل قيمته، ومتغير المصفوفة يحمل سهمًا إلى الصناديق." }
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
        { type: 'p', en: "You can also use the old value to compute the new one. <code>temps[4] = temps[4] + 2;</code> means: read box 4 (38), add 2, and store 40 back in box 4. The memory picture shows the array object after each line." },
        { type: 'memory', title: 'The braces build the object; an assignment changes one box', code: J`
            int[] temps = {31, 35, 29, 40, 38};
            temps[2] = 30;
            temps[4] = temps[4] + 2;
          `,
          frames: [
            { label: 'After <code>int[] temps = {31, 35, 29, 40, 38};</code>', vars: [{ name: 'temps', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '31' }, { name: '[1]', value: '35' }, { name: '[2]', value: '29' }, { name: '[3]', value: '40' }, { name: '[4]', value: '38' }] }
            ] },
            { label: 'After <code>temps[2] = 30;</code> (only box 2 changes)', vars: [{ name: 'temps', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '31' }, { name: '[1]', value: '35' }, { name: '[2]', value: '30' }, { name: '[3]', value: '40' }, { name: '[4]', value: '38' }] }
            ] },
            { label: 'After <code>temps[4] = temps[4] + 2;</code> (38 + 2 = 40)', vars: [{ name: 'temps', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '31' }, { name: '[1]', value: '35' }, { name: '[2]', value: '30' }, { name: '[3]', value: '40' }, { name: '[4]', value: '40' }] }
            ] }
          ],
          ar: "الإسناد إلى صندوق واحد يغيّر ذلك الصندوق فقط، وتبقى بقية القيم كما هي." },
        { type: 'p', en: "Other types work the same way. Words go into a <code>String</code> array, and single letters go into a <code>char</code> array:" },
        { type: 'code', code: J`
          String[] cities = {"Riyadh", "Jeddah", "Dammam"};
          char[] grades = {'A', 'B', 'C'};
        ` },
        { type: 'p', en: "Each box of a <code>String</code> array is a normal String. So everything you learned in Unit 4 still works on one box: <code>cities[0].length()</code>, <code>cities[2].toUpperCase()</code>, <code>cities[1].charAt(0)</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] cities = {"Riyadh", "Jeddah", "Dammam"};
                  char[] grades = {'A', 'B', 'C'};
                  System.out.println(cities[0] + " has " + cities[0].length() + " letters");
                  System.out.println("Best grade: " + grades[0]);
                  System.out.println(cities[2].toUpperCase());
              }
          }
        `, out: J`
          Riyadh has 6 letters
          Best grade: A
          DAMMAM
        ` },
        { type: 'lines', rows: [
          ['cities[0].length()', 'Box 0 holds "Riyadh". A String has <code>length()</code> <b>with</b> brackets: 6 letters.'],
          ['grades[0]', 'Box 0 of the char array: <code>A</code>.'],
          ['cities[2].toUpperCase()', 'Box 2 holds "Dammam"; the String method gives "DAMMAM".']
        ], ar: "كل صندوق في مصفوفة النصوص نصٌّ عادي، فنستخدم معه دوال النصوص." },
        { type: 'check', q: "<code>String[] cities = {&quot;Riyadh&quot;, &quot;Jeddah&quot;, &quot;Dammam&quot;};</code> What is <code>cities[1].charAt(0)</code>?", options: ["'R'", "'J'", "'e'", "'D'"], answer: 1,
          explain: "<code>cities[1]</code> is &quot;Jeddah&quot;, and its first letter is <code>'J'</code>." },
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
        { type: 'p', en: "The same trick finds the <b>middle</b> box when the size is odd: <code>temps[temps.length / 2]</code>. With 5 boxes, 5 / 2 is 2 (integer division), and box 2 is the middle one: two boxes on its left and two on its right." },
        { type: 'table', head: ['Expression', 'Index (size 5)', 'Value in <code>{31, 35, 29, 40, 38}</code>'], rows: [
          ['<code>temps[0]</code>', '0', '31 (first)'],
          ['<code>temps[temps.length / 2]</code>', '5 / 2 = 2', '29 (middle)'],
          ['<code>temps[temps.length - 1]</code>', '5 - 1 = 4', '38 (last)'],
          ['<code>temps[temps.length - 2]</code>', '5 - 2 = 3', '40 (one before the last)']
        ] },
        { type: 'h', en: 'Going outside the array' },
        { type: 'p', en: "What happens if you ask for a box that does not exist? Java checks every index <b>when the program runs</b>. If the index is below 0 or equal to or bigger than <code>length</code>, the program stops with an error called <code>ArrayIndexOutOfBoundsException</code>. The word &quot;exception&quot; means: an error that happens while the program is running." },
        { type: 'code', code: J`
          int[] marks = {90, 75, 88};
          System.out.println(marks[2]);   // OK: prints 88
          System.out.println(marks[3]);   // ERROR: there is no box 3
        ` },
        { type: 'note', kind: 'warn', en: "The compiler does <b>not</b> warn you about a wrong index. The program compiles and starts, then it crashes at that line. Always check: index must be from 0 to <code>length - 1</code>.",
          ar: "انتبه{{g:|ي}}: الخطأ يظهر أثناء التشغيل وليس عند الترجمة." },
        { type: 'p', en: "When it happens, the screen shows a message like this. Learn to read it, because it tells you the bad index and the size:<br><code>Exception in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3</code><br>&quot;Index 3&quot; is the box you asked for; &quot;length 3&quot; means the boxes are 0, 1 and 2 only. The program stops at that line, so the lines after it never run." },
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
        { type: 'steps', title: 'Worked example: the name of a Hijri month', problem: "The user types a month number from 1 to 12. Print the name of that Hijri month and how many months there are. Example: for 9 print <code>Month 9 is Ramadan</code>.",
          steps: [
            { en: "The 12 names are known, so use the braces shortcut. A long list may continue on the next lines.", code: J`
              String[] months = {"Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani",
                      "Jumada al-Ula", "Jumada al-Akhirah", "Rajab", "Shaban",
                      "Ramadan", "Shawwal", "Dhu al-Qadah", "Dhu al-Hijjah"};
            ` },
            { en: "Read the month number with a Scanner.", code: "int number = input.nextInt();" },
            { en: "People count months from 1, but indexes start at 0. Month 1 is box 0, so month <code>number</code> is box <code>number - 1</code>.", code: J`System.out.println("Month " + number + " is " + months[number - 1]);` },
            { en: "Print the size with <code>months.length</code>. Complete program (try other numbers with Run):" }
          ],
          stdin: '9',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    String[] months = {"Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani",
                            "Jumada al-Ula", "Jumada al-Akhirah", "Rajab", "Shaban",
                            "Ramadan", "Shawwal", "Dhu al-Qadah", "Dhu al-Hijjah"};
                    int number = input.nextInt();
                    System.out.println("Month " + number + " is " + months[number - 1]);
                    System.out.println("There are " + months.length + " months");
                }
            }
          `, out: J`
            Month 9 is Ramadan
            There are 12 months
          `, ar: "رقم الشهر يبدأ من 1 والفهرس يبدأ من 0، لذلك نكتب months[number - 1]." },
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
          hint: "The index can be a variable: a[x].", explain: "An index can be any int expression, including a variable." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] cities = {"Riyadh", "Jeddah", "Abha"};
                  char[] codes = {'R', 'J', 'A'};
                  cities[2] = "Tabuk";
                  codes[2] = cities[2].charAt(0);
                  System.out.println(cities[2] + " " + codes[2] + " " + cities[0].length());
              }
          }
        `, answer: 'Tabuk T 6', explain: "Box 2 of <code>cities</code> becomes &quot;Tabuk&quot;. Its first letter <code>'T'</code> goes into box 2 of <code>codes</code>. &quot;Riyadh&quot; has 6 letters." },
        { t: 'bug', q: "The program should print <code>35</code>, but it does not compile. Tap the line with the bug.",
          qAr: "البرنامج لا يُترجم. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] temps;
                    temps = {31, 35, 29};
                    System.out.println(temps[1]);
                }
            }
          `, bug: 4,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] temps;
                    temps = new int[]{31, 35, 29};
                    System.out.println(temps[1]);
                }
            }
          `,
          hint: "Where is the braces shortcut allowed?",
          explain: "The short form <code>{31, 35, 29}</code> is allowed only in the declaration line (<code>int[] temps = {31, 35, 29};</code>). On a later line Java needs <code>new int[]{31, 35, 29}</code>. With the fix the program prints 35.",
          explainAr: "الاختصار { } يعمل فقط في سطر التعريف، وبعده نكتب new int[]{...}." },
        { t: 'bug', q: "The program should print the first and the last city. It prints <code>First: Riyadh</code> and then stops with <code>ArrayIndexOutOfBoundsException: Index 4 out of bounds for length 4</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    String[] cities = {"Riyadh", "Jeddah", "Abha", "Tabuk"};
                    System.out.println("First: " + cities[0]);
                    System.out.println("Last: " + cities[cities.length]);
                }
            }
          `, bug: 5,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    String[] cities = {"Riyadh", "Jeddah", "Abha", "Tabuk"};
                    System.out.println("First: " + cities[0]);
                    System.out.println("Last: " + cities[cities.length - 1]);
                }
            }
          `,
          hint: "The size is 4. Is there a box number 4?",
          explain: "<code>cities.length</code> is 4, but the indexes are 0 to 3. The last box is <code>cities[cities.length - 1]</code>, which is &quot;Tabuk&quot;.",
          explainAr: "آخر عنصر هو cities[cities.length - 1]." },
        { t: 'code', q: "The week starts on Sunday. Read a day number from 1 to 7 and print the name of that day (1 = Sunday, 7 = Saturday). Use a <code>String</code> array with the braces shortcut. No prompts.",
          qAr: "اقرأ رقم اليوم من 1 إلى 7 واطبع اسمه باستخدام مصفوفة نصوص.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int d = input.nextInt();
                    // create the array of 7 day names, then print the right box
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int d = input.nextInt();
                    String[] days = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
                    System.out.println(days[d - 1]);
                }
            }
          `,
          tests: [ { stdin: '1', expected: 'Sunday' }, { stdin: '6', expected: 'Friday' }, { stdin: '7', expected: 'Saturday' } ],
          hint: "Day 1 is in box 0, so day d is in box d - 1.",
          explain: "People count from 1, Java counts from 0, so the box is <code>days[d - 1]</code>." }
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
        { type: 'table', head: ['Pass', 'i', 'scores[i] before', 'scores[i] after', 'Array after the pass'], rows: [
          ['start', '-', '-', '-', '[70, 82, 95]'],
          ['1', '0', '70', '75', '[75, 82, 95]'],
          ['2', '1', '82', '87', '[75, 87, 95]'],
          ['3', '2', '95', '100', '[75, 87, 100]'],
          ['end', '3', '-', '-', '3 &lt; 3 is false: the loop stops']
        ] },
        { type: 'memory', title: 'The same array, pass by pass', en: "The variable <code>scores</code> keeps the same arrow all the time. Only the boxes of the array object change, one box in each pass.",
          frames: [
            { label: 'Before the loop', vars: [{ name: 'scores', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '70' }, { name: '[1]', value: '82' }, { name: '[2]', value: '95' }] }
            ] },
            { label: 'After the pass with <code>i = 0</code>', vars: [{ name: 'scores', type: 'int[]', ref: 'A' }, { name: 'i', type: 'int', value: '0' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '75' }, { name: '[1]', value: '82' }, { name: '[2]', value: '95' }] }
            ] },
            { label: 'After the pass with <code>i = 1</code>', vars: [{ name: 'scores', type: 'int[]', ref: 'A' }, { name: 'i', type: 'int', value: '1' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '75' }, { name: '[1]', value: '87' }, { name: '[2]', value: '95' }] }
            ] },
            { label: 'After the pass with <code>i = 2</code> (then i becomes 3 and the loop stops)', vars: [{ name: 'scores', type: 'int[]', ref: 'A' }, { name: 'i', type: 'int', value: '2' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '75' }, { name: '[1]', value: '87' }, { name: '[2]', value: '100' }] }
            ] }
          ],
          ar: "في كل دورة يتغير صندوق واحد فقط، وهو الصندوق رقم i." },
        { type: 'h', en: 'Filling boxes with values made from i' },
        { type: 'p', en: "The loop can also put <b>new</b> values into an empty array. The value can be made from the counter <code>i</code>. Here we build the 5 times table: box 0 gets 5, box 1 gets 10, and so on." },
        { type: 'code', code: J`
          int[] table = new int[5];
          for (int i = 0; i < table.length; i++) {
              table[i] = (i + 1) * 5;
          }
          // table is now {5, 10, 15, 20, 25}
        ` },
        { type: 'check', q: "After this loop, what is in <code>a[3]</code>?", code: J`
          int[] a = new int[4];
          for (int i = 0; i < a.length; i++) {
              a[i] = i * i;
          }
        `, options: ['3', '9', '16', '0'], answer: 1, explain: "When <code>i</code> is 3, the box gets 3 * 3 = 9. The array is {0, 1, 4, 9}." },
        { type: 'h', en: 'Going backwards' },
        { type: 'p', en: "Sometimes you need the boxes from the last to the first, for example to show the newest message first. Start at the last index, <code>a.length - 1</code>, continue while <code>i &gt;= 0</code>, and count down with <code>i--</code>." },
        { type: 'code', code: J`
          String[] msgs = {"Hello", "Are you home?", "See you soon"};
          for (int i = msgs.length - 1; i >= 0; i--) {
              System.out.println(msgs[i]);
          }
          // prints: See you soon, Are you home?, Hello
        ` },
        { type: 'lines', rows: [
          ['int i = msgs.length - 1', 'Start at the last box (index 2).'],
          ['i >= 0', 'Box 0 must also be printed, so continue while i is 0 or more.'],
          ['i--', 'Move one box to the left.']
        ], ar: "للمرور بالعكس: نبدأ من length - 1 ونستمر ما دام i &gt;= 0 وننقص i." },
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
        { type: 'p', en: "for-each works for every type. Here is a list of prices in riyals:" },
        { type: 'code', code: J`
          double[] prices = {12.5, 8.0, 20.0};
          for (double p : prices) {
              System.out.println(p + " riyals");
          }
        ` },
        { type: 'note', kind: 'warn', en: "In for-each the variable is only a <b>copy</b>. Writing <code>x = x * 2;</code> inside does not change the array. To change values, or to know the position, use the normal <code>for</code> with an index.",
          ar: "for-each للقراءة فقط." },
        { type: 'table', head: ['You want to…', 'Use'], rows: [
          ['read every value, position not needed', 'for-each: <code>for (int x : a)</code>'],
          ['print the position too (Day 1, Day 2…)', 'for with index: <code>a[i]</code> and <code>i + 1</code>'],
          ['change the values in the array', 'for with index: <code>a[i] = ...</code>'],
          ['go backwards or skip boxes', 'for with index, starting where you need']
        ] },
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
          `, ar: "رقم اليوم = i + 1 لأن الفهرس يبدأ من 0." },
        { type: 'steps', title: 'Worked example: the 5 times table on one line', problem: "Build an array with the 5 times table (5, 10, 15, 20, 25) using a loop. Then print it on one line with a comma and a space between the numbers, but not after the last one: <code>5, 10, 15, 20, 25</code>.",
          steps: [
            { en: "Create an empty array of 5 boxes.", code: "int[] table = new int[5];" },
            { en: "First loop: fill the boxes. In box <code>i</code> put <code>(i + 1) * 5</code>.", code: J`
              for (int i = 0; i < table.length; i++) {
                  table[i] = (i + 1) * 5;
              }
            ` },
            { en: "Second loop: print on one line with <code>print</code>. Before every number <b>except the first</b>, print <code>&quot;, &quot;</code>. The first number has index 0, so test <code>i &gt; 0</code>.", code: J`
              for (int i = 0; i < table.length; i++) {
                  if (i > 0) {
                      System.out.print(", ");
                  }
                  System.out.print(table[i]);
              }
            ` },
            { en: "End the line with <code>println()</code>. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] table = new int[5];
                    for (int i = 0; i < table.length; i++) {
                        table[i] = (i + 1) * 5;
                    }
                    for (int i = 0; i < table.length; i++) {
                        if (i > 0) {
                            System.out.print(", ");
                        }
                        System.out.print(table[i]);
                    }
                    System.out.println();
                }
            }
          `, out: J`
            5, 10, 15, 20, 25
          `, ar: "نطبع الفاصلة قبل كل عدد ما عدا الأول، فلا تظهر فاصلة في النهاية." }
      ],
      mistakes: [
        { title: 'Using &lt;= with length', en: "The loop tries index 3 for an array of size 3 and crashes with <code>ArrayIndexOutOfBoundsException</code>.", code: J`
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
        "Use a normal for loop when you need the index or want to change values.",
        "Backwards: <code>for (int i = a.length - 1; i &gt;= 0; i--)</code>."
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
          hint: "Use i < k as the loop condition.", explain: "The loop does not have to go to the end of the array: here it stops at k." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] names = {"Ali", "Huda", "Faisal"};
                  for (int i = names.length - 1; i >= 0; i--) {
                      System.out.print(names[i] + " ");
                  }
                  System.out.println();
              }
          }
        `, answer: 'Faisal Huda Ali', explain: "The loop starts at the last index (2) and goes down to 0, so the names come out backwards." },
        { t: 'bug', q: "The program should print the three prices. It prints them, and then it stops with <code>ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3</code>. Tap the line with the bug.",
          qAr: "البرنامج يطبع الأسعار ثم يتوقف بخطأ. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    double[] prices = {12.5, 8.0, 20.0};
                    for (int i = 0; i <= prices.length; i++) {
                        System.out.println(prices[i] + " riyals");
                    }
                }
            }
          `, bug: 4,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    double[] prices = {12.5, 8.0, 20.0};
                    for (int i = 0; i < prices.length; i++) {
                        System.out.println(prices[i] + " riyals");
                    }
                }
            }
          `,
          hint: "Which values does <code>i</code> take? Is the last one a real index?",
          explain: "With <code>&lt;=</code>, <code>i</code> takes the values 0, 1, 2 <b>and 3</b>. There is no box 3, so the program crashes in the fourth round. With <code>i &lt; prices.length</code> the loop stops after index 2.",
          explainAr: "استخدم{{g:|ي}} &lt; وليس &lt;= مع length." },
        { t: 'bug', q: "The program should add 2 marks to every student and print the new marks, one per line. Instead it prints something strange like <code>[I@6d06d69c</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] marks = {80, 95, 70};
                    for (int i = 0; i < marks.length; i++) {
                        marks[i] = marks[i] + 2;
                    }
                    System.out.println(marks);
                }
            }
          `, bug: 7,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] marks = {80, 95, 70};
                    for (int i = 0; i < marks.length; i++) {
                        marks[i] = marks[i] + 2;
                    }
                    for (int i = 0; i < marks.length; i++) {
                        System.out.println(marks[i]);
                    }
                }
            }
          `,
          hint: "What does the variable <code>marks</code> hold: the boxes, or an arrow?",
          explain: "The variable <code>marks</code> holds a reference, not the values. Printing it shows a code for the type and the address (<code>[I</code> means &quot;int array&quot;). To see the values (82, 97, 72), print the boxes with a loop.",
          explainAr: "طباعة اسم المصفوفة لا تطبع القيم؛ نحتاج حلقة." },
        { t: 'code', q: "Read <code>n</code>, then the steps of <code>n</code> days into an array. Print one line <code>Day d: s</code> for every day with <b>8000 steps or more</b> (days are numbered from 1). No prompts.",
          qAr: "اطبع الأيام التي مشى فيها 8000 خطوة أو أكثر مع رقم اليوم.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] steps = new int[n];
                    for (int i = 0; i < n; i++) {
                        steps[i] = input.nextInt();
                    }
                    // print the good days
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] steps = new int[n];
                    for (int i = 0; i < n; i++) {
                        steps[i] = input.nextInt();
                    }
                    for (int i = 0; i < steps.length; i++) {
                        if (steps[i] >= 8000) {
                            System.out.println("Day " + (i + 1) + ": " + steps[i]);
                        }
                    }
                }
            }
          `,
          tests: [ { stdin: '5\n6200 8500 7300 9100 8000', expected: 'Day 2: 8500\nDay 4: 9100\nDay 5: 8000' }, { stdin: '3\n12000 500 700', expected: 'Day 1: 12000' } ],
          hint: "You need the position, so use a for loop with i. The day number is i + 1.",
          explain: "A for loop with an index gives both the value <code>steps[i]</code> and the day number <code>i + 1</code>." }
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
        { type: 'p', en: "The same pattern adds prices in riyals. The total must be a <code>double</code> because prices have decimals, and a for-each loop is enough because we do not need the positions. <code>printf</code> with <code>%.2f</code> shows two decimals, like a real bill." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  double[] prices = {12.5, 9.75, 15.0};
                  double bill = 0;
                  for (double p : prices) {
                      bill += p;
                  }
                  System.out.printf("Bill: %.2f riyals%n", bill);
              }
          }
        `, out: J`
          Bill: 37.25 riyals
        ` },
        { type: 'p', en: "In the sum pattern, the variable <code>sum</code> is called an <b>accumulator</b>: a variable that collects a result little by little, one box at a time.", ar: "المُراكِم متغير يجمع النتيجة شيئًا فشيئًا، صندوقًا بعد صندوق." },
        { type: 'h', en: 'Pattern 2: the average' },
        { type: 'p', en: "Average = sum divided by the number of values. Remember that dividing two <code>int</code> values cuts the decimals (<code>7 / 2</code> is <code>3</code>). To keep decimals, turn one number into a <code>double</code> first with <code>(double)</code>.",
          ar: "المتوسط = المجموع ÷ العدد، ونحوّل أحدهما إلى double حتى لا تضيع الكسور." },
        { type: 'code', code: J`
          double average = (double) sum / scores.length;
        ` },
        { type: 'check', q: "<code>sum = 7</code> and <code>length = 2</code> (both int). What does <code>sum / length</code> give?", options: ['3.5', '3', '4', '3.0'], answer: 1,
          explain: "Integer division throws away the decimals: 7 / 2 = 3. Use <code>(double) sum / length</code> to get 3.5." },
        { type: 'p', en: "Once you have the average, a <b>second loop</b> can compare every value with it, for example to count the students above the average. You cannot do this in the first loop, because the average is known only after all values were added. This is one big reason to keep values in an array: you can visit them again." },
        { type: 'code', code: J`
          int above = 0;
          for (int s : scores) {
              if (s > average) {
                  above++;
              }
          }
        ` },
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
        { type: 'note', kind: 'warn', en: "Why not start with <code>max = 0</code>? Think of winter mornings in Turaif, in the north of the Kingdom: <code>{-3, -1, -5, -2}</code>. No value is bigger than 0, so <code>max</code> would stay 0, a temperature that never happened. Starting with the first box always gives a real value from the array.",
          ar: "إذا بدأنا max من 0 والقيم كلها سالبة فالنتيجة 0 وهي خاطئة. ابدأ{{g:|ي}} من أول عنصر." },
        { type: 'p', en: "Here is the smallest value of those winter temperatures, followed round by round:" },
        { type: 'code', code: J`
          int[] mornings = {-3, -1, -5, -2};
          int min = mornings[0];
          for (int i = 1; i < mornings.length; i++) {
              if (mornings[i] < min) {
                  min = mornings[i];
              }
          }
          // min is -5
        ` },
        { type: 'table', head: ['i', 'mornings[i]', 'smaller than min?', 'min after'], rows: [
          ['start', '-', '-', '-3'], ['1', '-1', 'no', '-3'], ['2', '-5', 'yes', '-5'], ['3', '-2', 'no', '-5']
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
        { type: 'analogy', title: 'The guard at the gate', en: "A guard at a school gate holds a small counter. He does not write down names; he only presses the button when a student in uniform passes. At the end of the morning, the counter shows how many came. The <code>if</code> is the guard's test, and <code>passed++</code> is the button.",
          ar: "العدّاد مثل حارس يضغط الزر كلما تحقق الشرط." },
        { type: 'p', en: "One more example: how many days in Riyadh were hotter than 40 degrees?" },
        { type: 'code', code: J`
          int[] temps = {38, 42, 41, 39, 44};
          int hot = 0;
          for (int t : temps) {
              if (t > 40) {
                  hot++;
              }
          }
          // hot is 3 (42, 41 and 44)
        ` },
        { type: 'check', q: "For <code>{55, 60, 47, 90}</code>, how many values pass the test <code>m &gt;= 60</code>?", options: ['1', '2', '3', '4'], answer: 1,
          explain: "60 and 90 pass (60 is equal, and &gt;= accepts equal). 55 and 47 do not." },
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
        ` },
        { type: 'steps', title: 'Worked example: a week of steps', problem: "The steps of one week are {6200, 8500, 7300, 9100, 4800, 10200, 7900}. Print the total, the average with one decimal, the best day (numbered from 1) and how many days were above the average.",
          steps: [
            { en: "Create the array. We need a total and the <b>index</b> of the best day, because the question asks for the day number.", code: J`
              int[] steps = {6200, 8500, 7300, 9100, 4800, 10200, 7900};
              int total = 0;
              int best = 0;
            ` },
            { en: "One loop adds to the total and updates the best index.", code: J`
              for (int i = 0; i < steps.length; i++) {
                  total += steps[i];
                  if (steps[i] > steps[best]) {
                      best = i;
                  }
              }
            ` },
            { en: "After the loop, compute the average with <code>(double)</code>. Print it with <code>%.1f</code>. The day number is <code>best + 1</code>.", code: J`
              double average = (double) total / steps.length;
              System.out.printf("Average: %.1f%n", average);
            ` },
            { en: "A second loop counts the days above the average. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] steps = {6200, 8500, 7300, 9100, 4800, 10200, 7900};
                    int total = 0;
                    int best = 0;
                    for (int i = 0; i < steps.length; i++) {
                        total += steps[i];
                        if (steps[i] > steps[best]) {
                            best = i;
                        }
                    }
                    double average = (double) total / steps.length;
                    System.out.println("Total: " + total);
                    System.out.printf("Average: %.1f%n", average);
                    System.out.println("Best day: " + (best + 1) + " with " + steps[best] + " steps");
                    int above = 0;
                    for (int s : steps) {
                        if (s > average) {
                            above++;
                        }
                    }
                    System.out.println("Days above average: " + above);
                }
            }
          `, out: J`
            Total: 54000
            Average: 7714.3
            Best day: 6 with 10200 steps
            Days above average: 4
          `, ar: "نحفظ فهرس أفضل يوم لا قيمته فقط، ورقم اليوم = الفهرس + 1." }
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
        "Counting: a counter starts at 0 and <code>count++</code> when the test is true.",
        "Need the position of the best value? Keep its index (<code>best = i;</code>); the value is <code>a[best]</code>."
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
          explain: "Because the values are in an array, you can go over them twice." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] temps = {38, 42, 41, 39, 44};
                  int hot = 0;
                  int min = temps[0];
                  for (int t : temps) {
                      if (t > 40) hot++;
                      if (t < min) min = t;
                  }
                  System.out.println(hot + " " + min);
              }
          }
        `, answer: '3 38', explain: "42, 41 and 44 are above 40, so <code>hot</code> is 3. No value is smaller than the first one (38), so <code>min</code> stays 38." },
        { t: 'bug', q: "Winter mornings in Turaif: the program should print <code>Warmest: -1</code>. It prints <code>Warmest: 0</code>. Tap the line with the bug.",
          qAr: "البرنامج يطبع 0 بدل ‎-1. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] temps = {-3, -1, -5, -2};
                    int max = 0;
                    for (int i = 0; i < temps.length; i++) {
                        if (temps[i] > max) {
                            max = temps[i];
                        }
                    }
                    System.out.println("Warmest: " + max);
                }
            }
          `, bug: 4,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] temps = {-3, -1, -5, -2};
                    int max = temps[0];
                    for (int i = 0; i < temps.length; i++) {
                        if (temps[i] > max) {
                            max = temps[i];
                        }
                    }
                    System.out.println("Warmest: " + max);
                }
            }
          `,
          hint: "What is the champion at the start? Is it a value from the array?",
          explain: "All values are negative, so none of them is bigger than 0 and <code>max</code> never changes. Start the champion with a real value: <code>int max = temps[0];</code>. Then -1 wins.",
          explainAr: "ابدأ{{g:|ي}} max من temps[0] وليس من 0." },
        { t: 'bug', q: "The marks are 7, 8, 8 and 6, so the average should be <code>7.25</code>. The program prints <code>Average: 7.0</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] marks = {7, 8, 8, 6};
                    int sum = 0;
                    for (int m : marks) {
                        sum += m;
                    }
                    double average = sum / marks.length;
                    System.out.println("Average: " + average);
                }
            }
          `, bug: 8,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] marks = {7, 8, 8, 6};
                    int sum = 0;
                    for (int m : marks) {
                        sum += m;
                    }
                    double average = (double) sum / marks.length;
                    System.out.println("Average: " + average);
                }
            }
          `,
          hint: "What type are <code>sum</code> and <code>marks.length</code>?",
          explain: "Both <code>sum</code> (29) and <code>marks.length</code> (4) are int, so Java does integer division: 29 / 4 = 7. Only then is 7 stored as 7.0. Cast first: <code>(double) sum / marks.length</code> gives 7.25.",
          explainAr: "قسمة عددين صحيحين تحذف الكسر؛ حوّل{{g:|ي}} أحدهما إلى double." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> prices (decimal numbers) into an array. Print <code>Total: X</code> and <code>Cheapest: Y</code>, both with two decimals (use <code>printf</code> with <code>%.2f</code>). No prompts.",
          qAr: "اقرأ الأسعار واطبع المجموع وأرخص سعر بخانتين عشريتين.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    double[] prices = new double[n];
                    // read the prices, then find the total and the cheapest
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    double[] prices = new double[n];
                    for (int i = 0; i < n; i++) {
                        prices[i] = input.nextDouble();
                    }
                    double total = 0;
                    double cheapest = prices[0];
                    for (double p : prices) {
                        total += p;
                        if (p < cheapest) {
                            cheapest = p;
                        }
                    }
                    System.out.printf("Total: %.2f%n", total);
                    System.out.printf("Cheapest: %.2f%n", cheapest);
                }
            }
          `,
          tests: [ { stdin: '3\n12.5 9.75 15', expected: 'Total: 37.25\nCheapest: 9.75' }, { stdin: '4\n5 3.5 8.25 3.5', expected: 'Total: 20.25\nCheapest: 3.50' }, { stdin: '1\n7', expected: 'Total: 7.00\nCheapest: 7.00' } ],
          hint: "The total starts at 0; the cheapest starts at prices[0]. One loop can do both jobs.",
          explain: "Two patterns in one loop: the accumulator (total) and the champion (cheapest, with &lt;)." }
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
        { type: 'p', en: "Words are read the same way. <code>input.next()</code> reads one word, so a class list of first names can be typed on one line: <code>3 Sara Ali Nora</code>." },
        { type: 'code', code: J`
          int n = input.nextInt();
          String[] names = new String[n];
          for (int i = 0; i < n; i++) {
              names[i] = input.next();
          }
        ` },
        { type: 'table', head: ['Round', 'i', 'Next thing typed', 'Array after the round'], rows: [
          ['before', '-', '-', '[null, null, null]'],
          ['1', '0', 'Sara', '[Sara, null, null]'],
          ['2', '1', 'Ali', '[Sara, Ali, null]'],
          ['3', '2', 'Nora', '[Sara, Ali, Nora]']
        ] },
        { type: 'note', kind: 'tip', en: "Scanner does not care about lines. <code>4 30.5 28 33.25 31</code> on one line and the same numbers on five lines are read in exactly the same way.", ar: "Scanner يقرأ القيم بالترتيب سواء كانت في سطر واحد أو أسطر كثيرة." },
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
        { type: 'memory', title: '<code>int[] b = a;</code> copies the arrow, not the boxes', en: "Watch the arrows. After the second line there are two variables but still only <b>one</b> array object (A).",
          code: J`
            int[] a = {1, 2, 3};
            int[] b = a;
            b[0] = 99;
          `,
          frames: [
            { label: 'After <code>int[] a = {1, 2, 3};</code>', vars: [{ name: 'a', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] }
            ] },
            { label: 'After <code>int[] b = a;</code> (b gets a copy of the arrow)', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'b', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] }
            ] },
            { label: 'After <code>b[0] = 99;</code> (a[0] is now 99 too)', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'b', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '99' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] }
            ] }
          ],
          ar: "b = a ينسخ السهم فقط، فيصبح للمصفوفة الواحدة اسمان." },
        { type: 'p', en: "Two names for one array are called <b>aliases</b>. Aliases are not always a mistake, but you must know when you have them.", ar: "الاسمان لمصفوفة واحدة يسمّيان أسماء مستعارة." },
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
        { type: 'memory', title: 'A real copy is a second array object', en: "This time <code>new</code> runs twice, so there are two array objects, A and B. Changing B does not touch A.",
          code: J`
            int[] original = {1, 2, 3};
            int[] copy = new int[original.length];
            for (int i = 0; i < original.length; i++) {
                copy[i] = original[i];
            }
            copy[1] = 50;
          `,
          frames: [
            { label: 'After <code>int[] original = {1, 2, 3};</code>', vars: [{ name: 'original', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] }
            ] },
            { label: 'After <code>int[] copy = new int[original.length];</code> (a new object, all 0)', vars: [{ name: 'original', type: 'int[]', ref: 'A' }, { name: 'copy', type: 'int[]', ref: 'B' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] },
              { id: 'B', cls: 'int[] length 3', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] }
            ] },
            { label: 'After the copy loop (values copied box by box)', vars: [{ name: 'original', type: 'int[]', ref: 'A' }, { name: 'copy', type: 'int[]', ref: 'B' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] },
              { id: 'B', cls: 'int[] length 3', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] }
            ] },
            { label: 'After <code>copy[1] = 50;</code> (only B changes)', vars: [{ name: 'original', type: 'int[]', ref: 'A' }, { name: 'copy', type: 'int[]', ref: 'B' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] },
              { id: 'B', cls: 'int[] length 3', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '50' }, { name: '[2]', value: '3' }] }
            ] }
          ],
          ar: "النسخ الحقيقي يحتاج new، فيصبح لدينا كائنان منفصلان." },
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
        { type: 'note', kind: 'exam', en: "<code>a == b</code> compares the <b>addresses</b>, not the values. Two different arrays with the same values are <b>not</b> <code>==</code>." },
        { type: 'h', en: 'Pointing a variable at a new array' },
        { type: 'p', en: "An array cannot grow, but a variable can be pointed at a <b>new</b> array. <code>a = new int[]{7, 8, 9, 10};</code> builds a new object and moves the arrow of <code>a</code> to it. Other variables keep their old arrows. If no variable points to an object any more, Java throws it away later. Such an object is called <b>garbage</b>." },
        { type: 'memory', title: 'Moving an arrow', code: J`
            int[] a = {1, 2, 3};
            int[] b = a;
            a = new int[]{7, 8, 9, 10};
            b = a;
          `,
          frames: [
            { label: 'After <code>int[] b = a;</code> (aliases of A)', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'b', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] }
            ] },
            { label: 'After <code>a = new int[]{7, 8, 9, 10};</code> (only a moves)', vars: [{ name: 'a', type: 'int[]', ref: 'B' }, { name: 'b', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] },
              { id: 'B', cls: 'int[] length 4', fields: [{ name: '[0]', value: '7' }, { name: '[1]', value: '8' }, { name: '[2]', value: '9' }, { name: '[3]', value: '10' }] }
            ] },
            { label: 'After <code>b = a;</code> (nobody points to A now)', vars: [{ name: 'a', type: 'int[]', ref: 'B' }, { name: 'b', type: 'int[]', ref: 'B' }], objects: [
              { id: 'A', cls: 'int[] length 3', gone: true, fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] },
              { id: 'B', cls: 'int[] length 4', fields: [{ name: '[0]', value: '7' }, { name: '[1]', value: '8' }, { name: '[2]', value: '9' }, { name: '[3]', value: '10' }] }
            ] }
          ],
          ar: "إسناد مصفوفة جديدة ينقل السهم فقط، والكائن الذي لا يشير إليه أحد يصبح مهملًا." },
        { type: 'h', en: 'Comparing the values of two arrays' },
        { type: 'p', en: "Because <code>==</code> compares arrows, we compare values with a loop. First the sizes must be equal. Then we look for one box that is different. One difference is enough to say &quot;not the same&quot;." },
        { type: 'code', code: J`
          boolean same = (a.length == b.length);
          for (int i = 0; same && i < a.length; i++) {
              if (a[i] != b[i]) {
                  same = false;
              }
          }
        ` },
        { type: 'lines', rows: [
          ['boolean same = (a.length == b.length);', 'Different sizes can never be the same, so <code>same</code> starts as <code>false</code> in that case.'],
          ['same && i < a.length', 'Continue only while no difference has been found and there are boxes left.'],
          ['if (a[i] != b[i]) same = false;', 'One different box is enough.']
        ], ar: "نقارن الطول أولًا ثم القيم صندوقًا صندوقًا." },
        { type: 'check', q: "<code>int[] x = {5, 6};</code> and <code>int[] y = {5, 6};</code> What is <code>x == y</code>, and what does the loop above give for <code>same</code>?", options: ['true and true', 'false and true', 'true and false', 'false and false'], answer: 1,
          explain: "Two <code>new</code> objects, so the arrows are different (<code>false</code>). The values are equal, so the loop leaves <code>same</code> as <code>true</code>." },
        { type: 'steps', title: 'Worked example: keep the original marks', problem: "Read n marks. Build a <b>second</b> array with 5 bonus marks added to each mark, and print both arrays. The original marks must not change. Example input: 4 then 70 85 60 92.",
          steps: [
            { en: "Read <code>n</code> and the marks, as usual.", code: J`
              int n = input.nextInt();
              int[] marks = new int[n];
              for (int i = 0; i < n; i++) {
                  marks[i] = input.nextInt();
              }
            ` },
            { en: "Build a <b>new</b> array with <code>new</code>. Writing <code>int[] bonus = marks;</code> would only make an alias, and the original marks would change.", code: "int[] bonus = new int[n];" },
            { en: "Fill the new array from the old one: each box gets the old mark + 5.", code: J`
              for (int i = 0; i < n; i++) {
                  bonus[i] = marks[i] + 5;
              }
            ` },
            { en: "Print both arrays on one line each. Complete program:" }
          ],
          stdin: '4\n70 85 60 92',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] marks = new int[n];
                    for (int i = 0; i < n; i++) {
                        marks[i] = input.nextInt();
                    }
                    int[] bonus = new int[n];
                    for (int i = 0; i < n; i++) {
                        bonus[i] = marks[i] + 5;
                    }
                    System.out.print("Original:");
                    for (int m : marks) {
                        System.out.print(" " + m);
                    }
                    System.out.println();
                    System.out.print("With bonus:");
                    for (int b : bonus) {
                        System.out.print(" " + b);
                    }
                    System.out.println();
                }
            }
          `, out: J`
            Original: 70 85 60 92
            With bonus: 75 90 65 97
          `, ar: "مصفوفة جديدة بـ new تحفظ الأصل دون تغيير." }
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
        "<code>a == b</code> compares addresses, not contents. To compare values, use a loop.",
        "An object that no variable points to is garbage; Java removes it."
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
          hint: "Second loop: start at n - 1 and count down while i >= 0. Print a space only when i > 0.", explain: "Counting downwards from the last index visits the boxes in reverse." },
        { t: 'output', q: "What is the output? Draw the arrows first.", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {4, 5, 6};
                  int[] b = a;
                  int[] c = new int[3];
                  for (int i = 0; i < a.length; i++) {
                      c[i] = a[i];
                  }
                  b[0] = 40;
                  c[1] = 50;
                  System.out.println(a[0] + " " + a[1] + " " + b[1] + " " + c[0]);
              }
          }
        `, answer: '40 5 5 4', explain: "<code>a</code> and <code>b</code> point to the same object, so <code>b[0] = 40</code> also changes <code>a[0]</code>. <code>c</code> is a separate copy: <code>c[1] = 50</code> changes only <code>c</code>, and <code>c[0]</code> is still 4.",
          explainAr: "a وb اسمان لمصفوفة واحدة، أما c فنسخة مستقلة." },
        { t: 'bug', q: "The teacher wants to keep a backup of the marks before she changes them. The program should print <code>Backup: 70</code>, but it prints <code>Backup: 0</code>. Tap the line with the bug.",
          qAr: "النسخة الاحتياطية تتغير مع الأصل. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] marks = {70, 85, 60};
                    int[] backup = marks;
                    marks[0] = 0;
                    System.out.println("Backup: " + backup[0]);
                }
            }
          `, bug: 4,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] marks = {70, 85, 60};
                    int[] backup = new int[marks.length];
                    for (int i = 0; i < marks.length; i++) {
                        backup[i] = marks[i];
                    }
                    marks[0] = 0;
                    System.out.println("Backup: " + backup[0]);
                }
            }
          `,
          hint: "How many array objects are there? Count the arrays that are built.",
          explain: "<code>int[] backup = marks;</code> copies only the arrow, so <code>backup</code> and <code>marks</code> are two names for one array. Setting <code>marks[0]</code> to 0 is seen through <code>backup</code> too. A real backup needs a new array and a copy loop.",
          explainAr: "= ينسخ السهم لا القيم؛ النسخة الحقيقية تحتاج new وحلقة." },
        { t: 'bug', q: "This program should read a number of days and then the temperatures. It does not compile. Tap the line with the bug.",
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    double[] temps = new double[n];
                    int n = input.nextInt();
                    for (int i = 0; i < n; i++) {
                        temps[i] = input.nextDouble();
                    }
                    System.out.println("Read " + temps.length + " days");
                }
            }
          `, bug: [6, 7],
          fix: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    double[] temps = new double[n];
                    for (int i = 0; i < n; i++) {
                        temps[i] = input.nextDouble();
                    }
                    System.out.println("Read " + temps.length + " days");
                }
            }
          `,
          hint: "Can Java build <code>n</code> boxes before it knows <code>n</code>?",
          explain: "Line 6 uses <code>n</code> before line 7 creates it, so Java reports &quot;cannot find symbol n&quot;. Read <code>n</code> first, then build the array: the two lines must be swapped.",
          explainAr: "اقرأ{{g:|ي}} n أولًا ثم أنشئ{{g:|ي}} المصفوفة." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> numbers for week 1 and <code>n</code> numbers for week 2 (two arrays). Print <code>Same</code> if both weeks have the same values in the same order, otherwise <code>Different</code>. Do not use <code>==</code> on the arrays. No prompts.",
          qAr: "قارن{{g:|ي}} قيم مصفوفتين صندوقًا صندوقًا.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] week1 = new int[n];
                    int[] week2 = new int[n];
                    // read week1, then week2, then compare box by box
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] week1 = new int[n];
                    int[] week2 = new int[n];
                    for (int i = 0; i < n; i++) {
                        week1[i] = input.nextInt();
                    }
                    for (int i = 0; i < n; i++) {
                        week2[i] = input.nextInt();
                    }
                    boolean same = true;
                    for (int i = 0; i < n; i++) {
                        if (week1[i] != week2[i]) {
                            same = false;
                        }
                    }
                    if (same) {
                        System.out.println("Same");
                    } else {
                        System.out.println("Different");
                    }
                }
            }
          `,
          tests: [ { stdin: '3\n40 41 39\n40 41 39', expected: 'Same' }, { stdin: '3\n40 41 39\n40 39 41', expected: 'Different' }, { stdin: '1\n5\n6', expected: 'Different' } ],
          hint: "Start with boolean same = true; set it to false when you find one box where week1[i] != week2[i].",
          explain: "Comparing box by box looks at the values. <code>week1 == week2</code> would compare the arrows and always be false here." }
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
        { type: 'p', en: "Why does this work? When you call <code>applyDiscount(prices, 0.5)</code>, Java copies the <b>value</b> of <code>prices</code> into the parameter <code>list</code>. But the value of an array variable is an arrow. So <code>list</code> gets a copy of the arrow and points to the <b>same</b> array object. The memory picture shows the variables of <code>main</code> and of the method together." },
        { type: 'memory', title: 'Passing an array: the method gets a copy of the arrow', frames: [
            { label: 'In <code>main</code>, before the call', vars: [{ name: 'prices (main)', type: 'double[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'double[] length 3', fields: [{ name: '[0]', value: '10.0' }, { name: '[1]', value: '25.0' }, { name: '[2]', value: '40.0' }] }
            ] },
            { label: 'The call <code>applyDiscount(prices, 0.5)</code> starts: <code>list</code> points to the same object', vars: [{ name: 'prices (main)', type: 'double[]', ref: 'A' }, { name: 'list (applyDiscount)', type: 'double[]', ref: 'A' }, { name: 'rate (applyDiscount)', type: 'double', value: '0.5' }], objects: [
              { id: 'A', cls: 'double[] length 3', fields: [{ name: '[0]', value: '10.0' }, { name: '[1]', value: '25.0' }, { name: '[2]', value: '40.0' }] }
            ] },
            { label: 'After the loop in the method: <code>list[i] = list[i] * rate;</code>', vars: [{ name: 'prices (main)', type: 'double[]', ref: 'A' }, { name: 'list (applyDiscount)', type: 'double[]', ref: 'A' }, { name: 'rate (applyDiscount)', type: 'double', value: '0.5' }], objects: [
              { id: 'A', cls: 'double[] length 3', fields: [{ name: '[0]', value: '5.0' }, { name: '[1]', value: '12.5' }, { name: '[2]', value: '20.0' }] }
            ] },
            { label: 'Back in <code>main</code>: <code>list</code> and <code>rate</code> are gone, the changes stay', vars: [{ name: 'prices (main)', type: 'double[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'double[] length 3', fields: [{ name: '[0]', value: '5.0' }, { name: '[1]', value: '12.5' }, { name: '[2]', value: '20.0' }] }
            ] }
          ],
          ar: "المعامل list يأخذ نسخة من السهم، فيشير إلى المصفوفة نفسها، لذلك يرى main التغيير." },
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
        { type: 'memory', title: 'An int is copied; an array is shared', code: J`
            change(x, y);   // x is 1, y is {1, 1}
          `,
          frames: [
            { label: 'In <code>main</code>, before the call', vars: [{ name: 'x (main)', type: 'int', value: '1' }, { name: 'y (main)', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 2', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '1' }] }
            ] },
            { label: 'The call starts: <code>number</code> gets a copy of 1, <code>numbers</code> a copy of the arrow', vars: [{ name: 'x (main)', type: 'int', value: '1' }, { name: 'y (main)', type: 'int[]', ref: 'A' }, { name: 'number (change)', type: 'int', value: '1' }, { name: 'numbers (change)', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 2', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '1' }] }
            ] },
            { label: 'After <code>number = 100;</code> (only the copy changes)', vars: [{ name: 'x (main)', type: 'int', value: '1' }, { name: 'y (main)', type: 'int[]', ref: 'A' }, { name: 'number (change)', type: 'int', value: '100' }, { name: 'numbers (change)', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 2', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '1' }] }
            ] },
            { label: 'After <code>numbers[0] = 100;</code> (the shared object changes)', vars: [{ name: 'x (main)', type: 'int', value: '1' }, { name: 'y (main)', type: 'int[]', ref: 'A' }, { name: 'number (change)', type: 'int', value: '100' }, { name: 'numbers (change)', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 2', fields: [{ name: '[0]', value: '100' }, { name: '[1]', value: '1' }] }
            ] },
            { label: 'Back in <code>main</code>: x is still 1, y[0] is 100', vars: [{ name: 'x (main)', type: 'int', value: '1' }, { name: 'y (main)', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 2', fields: [{ name: '[0]', value: '100' }, { name: '[1]', value: '1' }] }
            ] }
          ],
          ar: "العدد يُنسخ فلا يتأثر x، أما المصفوفة فمشتركة فيتغير y[0]." },
        { type: 'check', q: "Why did <code>x</code> stay 1 but <code>y[0]</code> become 100?", options: ['The method got a copy of x, but the same array y', 'Arrays are bigger', 'x is not an int', 'It is a compiler bug'], answer: 0,
          explain: "A number is copied. An array is shared." },
        { type: 'note', kind: 'exam', en: "Inside a method, <code>list = new int[5];</code> only points the local name at a new array. The caller's array does not change. Changing the <i>boxes</i> (<code>list[0] = 5</code>) does.",
          ar: "تغيير عناصر المصفوفة داخل الدالة يظهر خارجها، أما إسناد مصفوفة جديدة للمعامل فلا." },
        { type: 'memory', title: 'The trap: giving the parameter a new array', code: J`
            public static void reset(int[] list) {
                list = new int[list.length];
            }
            // in main:  int[] votes = {5, 3};  reset(votes);
          `,
          frames: [
            { label: 'The call <code>reset(votes)</code> starts', vars: [{ name: 'votes (main)', type: 'int[]', ref: 'A' }, { name: 'list (reset)', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 2', fields: [{ name: '[0]', value: '5' }, { name: '[1]', value: '3' }] }
            ] },
            { label: 'After <code>list = new int[list.length];</code> (only list moves to a new object)', vars: [{ name: 'votes (main)', type: 'int[]', ref: 'A' }, { name: 'list (reset)', type: 'int[]', ref: 'B' }], objects: [
              { id: 'A', cls: 'int[] length 2', fields: [{ name: '[0]', value: '5' }, { name: '[1]', value: '3' }] },
              { id: 'B', cls: 'int[] length 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }] }
            ] },
            { label: 'Back in <code>main</code>: votes still points to A; B is garbage', vars: [{ name: 'votes (main)', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 2', fields: [{ name: '[0]', value: '5' }, { name: '[1]', value: '3' }] },
              { id: 'B', cls: 'int[] length 2', gone: true, fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }] }
            ] }
          ],
          ar: "إسناد مصفوفة جديدة للمعامل يحرّك سهم المعامل فقط، ولا يرى main أي تغيير." },
        { type: 'h', en: 'A method that answers a question about an array' },
        { type: 'p', en: "Many useful methods only <b>read</b> the array and return one answer: the largest value, the number of passes, the average. They are short, and you can reuse them for every array in your program." },
        { type: 'code', code: J`
          public static int max(int[] list) {
              int best = list[0];
              for (int x : list) {
                  if (x > best) {
                      best = x;
                  }
              }
              return best;
          }
        ` },
        { type: 'p', en: "In <code>main</code> you can now write <code>max(marks)</code>, <code>max(steps)</code> or <code>max(ages)</code>: one method, many arrays." },
        { type: 'h', en: 'A method that returns an array' },
        { type: 'p', en: "A method can build a new array and give it back. The return type has brackets: <code>int[]</code>." },
        { type: 'analogy', title: 'A photocopy shop', en: "You give the shop your paper and ask for a copy in reverse page order. The shop does not touch your paper: it makes a new one and hands it back to you. A method that returns a new array works the same way: the original stays as it was, and you receive a second array.",
          ar: "الدالة التي ترجع مصفوفة جديدة مثل محل نسخ: الأصل يبقى كما هو وتحصل على نسخة جديدة." },
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
          ` },
        { type: 'steps', title: 'Worked example: two methods for a week of temperatures', problem: "The temperatures of 5 days are {38.5, 42.0, 43.5, 40.0, 41.0}. Write a method <code>average</code> and a method <code>countAbove(list, limit)</code>. Use them to print the average, the number of days above 40, and the number of days above the average.",
          steps: [
            { en: "<code>average</code> receives a <code>double[]</code> and returns a <code>double</code>.", code: J`
              public static double average(double[] list) {
                  double total = 0;
                  for (double t : list) {
                      total += t;
                  }
                  return total / list.length;
              }
            ` },
            { en: "<code>countAbove</code> receives the array <b>and</b> a limit. The same method works for any limit.", code: J`
              public static int countAbove(double[] list, double limit) {
                  int count = 0;
                  for (double t : list) {
                      if (t > limit) {
                          count++;
                      }
                  }
                  return count;
              }
            ` },
            { en: "In <code>main</code>, call <code>average</code> once and keep the answer in a variable.", code: "double avg = average(temps);" },
            { en: "Call <code>countAbove</code> twice, with two different limits. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    double[] temps = {38.5, 42.0, 43.5, 40.0, 41.0};
                    double avg = average(temps);
                    System.out.println("Average: " + avg);
                    System.out.println("Days above 40: " + countAbove(temps, 40.0));
                    System.out.println("Days above average: " + countAbove(temps, avg));
                }

                public static double average(double[] list) {
                    double total = 0;
                    for (double t : list) {
                        total += t;
                    }
                    return total / list.length;
                }

                public static int countAbove(double[] list, double limit) {
                    int count = 0;
                    for (double t : list) {
                        if (t > limit) {
                            count++;
                        }
                    }
                    return count;
                }
            }
          `, out: J`
            Average: 41.0
            Days above 40: 3
            Days above average: 2
          `, ar: "دالة واحدة مع معامل limit تعمل لأي حدّ نريده." }
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
        "A method can return an array: <code>public static int[] name(...)</code>.",
        "<code>list = new int[...]</code> inside a method moves only the parameter's arrow; the caller sees nothing."
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
          explain: "Counting first lets you create an array of the exact size." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] prices = {10, 20, 30};
                  int[] withFee = addFee(prices);
                  System.out.println(prices[0] + " " + withFee[0] + " " + withFee[2]);
              }

              public static int[] addFee(int[] list) {
                  int[] result = new int[list.length];
                  for (int i = 0; i < list.length; i++) {
                      result[i] = list[i] + 5;
                  }
                  return result;
              }
          }
        `, answer: '10 15 35', explain: "<code>addFee</code> writes into a <b>new</b> array <code>result</code>, so <code>prices</code> is not changed (10). The new array is {15, 25, 35}." },
        { t: 'bug', q: "The method should set every vote count to 0, so the program should print <code>0 0 0</code>. It prints <code>5 3 8</code>. Tap the line with the bug.",
          qAr: "الدالة لا تصفّر المصفوفة. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] votes = {5, 3, 8};
                    clear(votes);
                    System.out.println(votes[0] + " " + votes[1] + " " + votes[2]);
                }

                public static void clear(int[] list) {
                    list = new int[list.length];
                }
            }
          `, bug: 9,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] votes = {5, 3, 8};
                    clear(votes);
                    System.out.println(votes[0] + " " + votes[1] + " " + votes[2]);
                }

                public static void clear(int[] list) {
                    for (int i = 0; i < list.length; i++) {
                        list[i] = 0;
                    }
                }
            }
          `,
          hint: "Does this line change the boxes of the shared array, or only where <code>list</code> points?",
          explain: "<code>list = new int[...]</code> only moves the parameter's arrow to a new array. <code>votes</code> in <code>main</code> still points to the old one, so nothing changes there. To change the caller's array, change its <b>boxes</b>: <code>list[i] = 0;</code>.",
          explainAr: "غيّر{{g:|ي}} الصناديق list[i] بدل إسناد مصفوفة جديدة." },
        { t: 'bug', q: "The program should print <code>Best: 90</code>, but it does not compile. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] marks = {70, 90, 80};
                    System.out.println("Best: " + max(marks[]));
                }

                public static int max(int[] list) {
                    int best = list[0];
                    for (int x : list) {
                        if (x > best) best = x;
                    }
                    return best;
                }
            }
          `, bug: 4,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] marks = {70, 90, 80};
                    System.out.println("Best: " + max(marks));
                }

                public static int max(int[] list) {
                    int best = list[0];
                    for (int x : list) {
                        if (x > best) best = x;
                    }
                    return best;
                }
            }
          `,
          hint: "Where do the brackets <code>[]</code> belong: in the method header or in the call?",
          explain: "In a call you pass the array by its name only: <code>max(marks)</code>. The brackets belong to the parameter's type in the header (<code>int[] list</code>).",
          explainAr: "عند الاستدعاء نكتب اسم المصفوفة فقط بدون أقواس." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> marks, then a bonus. Write a method <code>public static void addBonus(int[] marks, int bonus)</code> that adds the bonus to every mark but never goes above 100. Call it, then print the marks separated by single spaces. No prompts.",
          qAr: "دالة تضيف درجات إضافية لكل طالب بحد أقصى 100 وتغيّر المصفوفة نفسها.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] marks = new int[n];
                    for (int i = 0; i < n; i++) {
                        marks[i] = input.nextInt();
                    }
                    int bonus = input.nextInt();
                    addBonus(marks, bonus);
                    // print the marks
                }

                public static void addBonus(int[] marks, int bonus) {
                    // change the boxes; keep every mark at most 100
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] marks = new int[n];
                    for (int i = 0; i < n; i++) {
                        marks[i] = input.nextInt();
                    }
                    int bonus = input.nextInt();
                    addBonus(marks, bonus);
                    for (int i = 0; i < n; i++) {
                        if (i > 0) System.out.print(" ");
                        System.out.print(marks[i]);
                    }
                    System.out.println();
                }

                public static void addBonus(int[] marks, int bonus) {
                    for (int i = 0; i < marks.length; i++) {
                        marks[i] = marks[i] + bonus;
                        if (marks[i] > 100) {
                            marks[i] = 100;
                        }
                    }
                }
            }
          `,
          tests: [ { stdin: '4\n70 98 85 100\n5', expected: '75 100 90 100' }, { stdin: '2\n50 60\n0', expected: '50 60' } ],
          hint: "Inside the method: marks[i] = marks[i] + bonus; then if it is above 100, set it to 100. main sees the change because the array is shared.",
          explain: "The method returns nothing, but it changes the boxes of the shared array, so <code>main</code> prints the new marks." }
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
        { type: 'p', en: "<code>Arrays.toString</code> works for every type of array. A <code>double</code> array shows its decimals, and a <code>String</code> array shows the words without quotes: <code>[Riyadh, Jeddah, Abha]</code>. It is the quickest way to check what is inside an array while you test a program." },
        { type: 'note', kind: 'exam', en: "The toolbox is great in real programs, but exams often ask you to write the loop yourself: &quot;find the largest <b>without</b> using Arrays&quot;, &quot;sort with selection sort&quot;. Learn both: the loop to understand, the tool to save time.",
          ar: "في الاختبار قد يُطلب منك كتابة الحلقة بنفسك دون Arrays." },
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
        { type: 'memory', title: '<code>b = a</code> versus <code>Arrays.copyOf</code>', en: "Both lines look like &quot;copying&quot;, but only <code>Arrays.copyOf</code> builds a second object. Watch what <code>Arrays.sort</code> changes.",
          code: J`
            int[] a = {77, 64, 91};
            int[] b = a;
            int[] c = Arrays.copyOf(a, a.length);
            Arrays.sort(c);
          `,
          frames: [
            { label: 'After <code>int[] a = {77, 64, 91};</code>', vars: [{ name: 'a', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '77' }, { name: '[1]', value: '64' }, { name: '[2]', value: '91' }] }
            ] },
            { label: 'After <code>int[] b = a;</code> (an alias, still one object)', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'b', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '77' }, { name: '[1]', value: '64' }, { name: '[2]', value: '91' }] }
            ] },
            { label: 'After <code>int[] c = Arrays.copyOf(a, a.length);</code> (a second object B)', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'b', type: 'int[]', ref: 'A' }, { name: 'c', type: 'int[]', ref: 'B' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '77' }, { name: '[1]', value: '64' }, { name: '[2]', value: '91' }] },
              { id: 'B', cls: 'int[] length 3', fields: [{ name: '[0]', value: '77' }, { name: '[1]', value: '64' }, { name: '[2]', value: '91' }] }
            ] },
            { label: 'After <code>Arrays.sort(c);</code> (only B is reordered)', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'b', type: 'int[]', ref: 'A' }, { name: 'c', type: 'int[]', ref: 'B' }], objects: [
              { id: 'A', cls: 'int[] length 3', fields: [{ name: '[0]', value: '77' }, { name: '[1]', value: '64' }, { name: '[2]', value: '91' }] },
              { id: 'B', cls: 'int[] length 3', fields: [{ name: '[0]', value: '64' }, { name: '[1]', value: '77' }, { name: '[2]', value: '91' }] }
            ] }
          ],
          ar: "Arrays.copyOf تبني كائنًا ثانيًا، أما b = a فاسم آخر للكائن نفسه." },
        { type: 'h', en: 'copyOf can make a longer or a shorter array' },
        { type: 'p', en: "The second number of <code>Arrays.copyOf</code> is the size of the <b>new</b> array. If it is bigger, the extra boxes get the default value (0). If it is smaller, only the first values are copied. This is how programs &quot;grow&quot; an array: they make a bigger copy and point the variable at it." },
        { type: 'analogy', title: 'Moving to a bigger cupboard', en: "You cannot stretch a cupboard. When it is full, you buy a bigger one, move your things into it, and the extra shelves stay empty. Then you stop using the old cupboard. <code>a = Arrays.copyOf(a, a.length + 1);</code> does exactly this: a bigger new array, the old values moved in, and the variable now points to the new one.",
          ar: "لا نستطيع تكبير المصفوفة، لكن ننشئ مصفوفة أكبر وننقل إليها القيم." },
        { type: 'code', code: J`
          int[] a = {4, 8, 15};
          int[] longer = Arrays.copyOf(a, 5);    // [4, 8, 15, 0, 0]
          int[] shorter = Arrays.copyOf(a, 2);   // [4, 8]
          a = Arrays.copyOf(a, a.length + 1);    // a now has 4 boxes: [4, 8, 15, 0]
        ` },
        { type: 'check', q: "What does <code>Arrays.copyOf(new int[]{1, 2, 3}, 4)</code> give?", options: ['[1, 2, 3]', '[1, 2, 3, 0]', '[0, 1, 2, 3]', 'An error'], answer: 1,
          explain: "The new array has 4 boxes. The 3 values are copied, and the extra box gets 0." },
        { type: 'p', en: "<code>Arrays.toString</code> and <code>Arrays.fill</code> work for every type. For example, the seats of a bus can be a <code>boolean</code> array: <code>false</code> means free." },
        { type: 'code', code: J`
          boolean[] booked = new boolean[4];
          booked[2] = true;
          System.out.println(Arrays.toString(booked));   // [false, false, true, false]
          Arrays.fill(booked, true);                     // the whole bus is booked
        ` },
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
        { type: 'note', kind: 'tip', en: "Many students forget the import line. If you see &quot;cannot find symbol Arrays&quot;, check that <code>import java.util.Arrays;</code> is at the top." },
        { type: 'steps', title: 'Worked example: the median of a week of steps', problem: "The <b>median</b> is the middle value after sorting: half of the values are below it and half are above it. Print the steps {7300, 6200, 10200, 8500, 4800} in their original order, then sorted, then the median, the lowest and the highest. Keep the original order.",
          steps: [
            { en: "Sorting changes the array, so first make a real copy with <code>Arrays.copyOf</code>.", code: J`
              int[] steps = {7300, 6200, 10200, 8500, 4800};
              int[] sorted = Arrays.copyOf(steps, steps.length);
            ` },
            { en: "Sort only the copy, then print both arrays with <code>Arrays.toString</code>.", code: J`
              Arrays.sort(sorted);
              System.out.println("Days:   " + Arrays.toString(steps));
              System.out.println("Sorted: " + Arrays.toString(sorted));
            ` },
            { en: "With an odd number of values, the middle index is <code>length / 2</code> (5 / 2 = 2).", code: "int median = sorted[sorted.length / 2];" },
            { en: "In a sorted array the lowest is in box 0 and the highest is in the last box. Complete program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[] steps = {7300, 6200, 10200, 8500, 4800};
                    int[] sorted = Arrays.copyOf(steps, steps.length);
                    Arrays.sort(sorted);
                    System.out.println("Days:   " + Arrays.toString(steps));
                    System.out.println("Sorted: " + Arrays.toString(sorted));
                    int median = sorted[sorted.length / 2];
                    System.out.println("Median: " + median);
                    System.out.println("Lowest: " + sorted[0] + ", highest: " + sorted[sorted.length - 1]);
                }
            }
          `, out: J`
            Days:   [7300, 6200, 10200, 8500, 4800]
            Sorted: [4800, 6200, 7300, 8500, 10200]
            Median: 7300
            Lowest: 4800, highest: 10200
          `, ar: "الوسيط هو القيمة الوسطى بعد الترتيب، ونرتب نسخة حتى يبقى الأصل كما هو." }
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
        "Sort a copy when you must keep the original order.",
        "<code>Arrays.copyOf(a, n)</code> builds a new object: longer arrays get extra 0s, shorter ones keep the first n values."
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
          hint: "Fill with a loop, then Arrays.sort(a), then print Arrays.toString(a).", explain: "Three steps: read, sort, print." },
        { t: 'output', q: "What is the output?", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] a = {4, 8, 15};
                  int[] longer = Arrays.copyOf(a, 5);
                  int[] shorter = Arrays.copyOf(a, 2);
                  longer[0] = 99;
                  System.out.println(Arrays.toString(a));
                  System.out.println(Arrays.toString(longer));
                  System.out.println(Arrays.toString(shorter));
              }
          }
        `, answer: J`
          [4, 8, 15]
          [99, 8, 15, 0, 0]
          [4, 8]
        `, explain: "<code>longer</code> is a new array of 5 boxes (two extra zeros), so changing it does not change <code>a</code>. <code>shorter</code> keeps only the first 2 values." },
        { t: 'bug', q: "The programmer wants a sorted copy of the ages. The program does not compile. Tap the line with the bug.",
          qAr: "البرنامج لا يُترجم. أين الخطأ؟",
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[] ages = {21, 18, 25};
                    int[] sorted = Arrays.sort(ages);
                    System.out.println(Arrays.toString(sorted));
                }
            }
          `, bug: 6,
          fix: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[] ages = {21, 18, 25};
                    int[] sorted = Arrays.copyOf(ages, ages.length);
                    Arrays.sort(sorted);
                    System.out.println(Arrays.toString(sorted));
                }
            }
          `,
          hint: "What does <code>Arrays.sort</code> give back?",
          explain: "<code>Arrays.sort</code> sorts the array it receives and returns nothing (<code>void</code>), so its result cannot be stored in <code>int[] sorted</code>. Make the copy first with <code>Arrays.copyOf</code>, then sort the copy. The fixed program prints <code>[18, 21, 25]</code>.",
          explainAr: "Arrays.sort لا ترجع شيئًا؛ انسخ{{g:|ي}} أولًا ثم رتّب{{g:|ي}} النسخة." },
        { t: 'bug', q: "This program does not compile: Java says &quot;cannot find symbol: Arrays&quot; on line 6. But the real mistake is on another line. Tap the line with the bug.",
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    String[] names = {"Sara", "Ali", "Nora"};
                    Arrays.sort(names);
                    System.out.println(Arrays.toString(names));
                }
            }
          `, bug: 1,
          fix: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    String[] names = {"Sara", "Ali", "Nora"};
                    Arrays.sort(names);
                    System.out.println(Arrays.toString(names));
                }
            }
          `,
          hint: "Which toolbox does the program use, and which one did it import?",
          explain: "The program uses <code>Arrays</code> but imports only <code>Scanner</code>. Java looks for <code>Arrays</code> and cannot find it. The fix is <code>import java.util.Arrays;</code>. Then it prints <code>[Ali, Nora, Sara]</code>." },
        { t: 'mcq', q: "How many array objects exist after these lines?", code: J`
          int[] a = {3, 1, 2};
          int[] b = a;
          int[] c = Arrays.copyOf(a, a.length);
        `, options: ['1', '2', '3', '0'], answer: 1,
          explain: "<code>a</code> builds one object. <code>b = a</code> is only a second arrow to it. <code>Arrays.copyOf</code> builds a second object. So there are 2 objects and 3 variables." }
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
        { type: 'p', en: "And when the key is missing? Here is the trace of <code>linearSearch(ids, 9999)</code>. Every box is checked, the loop ends, and only then the line after the loop runs." },
        { type: 'table', head: ['i', 'list[i]', 'list[i] == 9999?', 'What happens'], rows: [
          ['0', '4021', 'no', 'next box'],
          ['1', '3310', 'no', 'next box'],
          ['2', '5874', 'no', 'next box'],
          ['3', '1200', 'no', 'next box'],
          ['4', '3310', 'no', 'next box'],
          ['5', '-', '5 &lt; 5 is false', 'loop ends: <code>return -1;</code>']
        ] },
        { type: 'check', q: "An array has 50 boxes and the key is <b>not</b> in it. How many boxes does linear search check?", options: ['1', '25', '49', '50'], answer: 3,
          explain: "To be sure the key is missing, it must check every box: all 50." },
        { type: 'h', en: 'Small changes, new questions' },
        { type: 'analogy', title: 'The ticket inspector', en: "An inspector walks down the bus looking for one passenger without a ticket. If he only needs to know <i>whether</i> there is one, he stops at the first one and says &quot;yes&quot;. If he needs <i>everyone</i> without a ticket, he must walk to the end of the bus. The question decides when the search may stop.",
          ar: "السؤال يحدد متى نتوقف: عند أول تطابق، أم بعد فحص الجميع." },
        { type: 'p', en: "The search loop is a pattern you can bend to answer other questions. Sometimes you only want a yes or no answer: <b>is</b> the key there? Then return a <code>boolean</code>." },
        { type: 'code', code: J`
          public static boolean contains(int[] list, int key) {
              for (int x : list) {
                  if (x == key) {
                      return true;
                  }
              }
              return false;
          }
        ` },
        { type: 'p', en: "Sometimes you want the <b>last</b> match, for example the last day a student was absent. Search from the end: the first match you meet going backwards is the last one in the array." },
        { type: 'code', code: J`
          for (int i = list.length - 1; i >= 0; i--) {
              if (list[i] == key) {
                  return i;
              }
          }
          return -1;
        ` },
        { type: 'p', en: "The test does not have to be <code>==</code>. Here we look for the first price that fits a budget of 10 riyals: the first box with <code>prices[i] &lt;= budget</code>." },
        { type: 'code', code: J`
          double[] prices = {14.0, 12.5, 9.75, 6.0};
          double budget = 10.0;
          int first = -1;
          for (int i = 0; i < prices.length; i++) {
              if (prices[i] <= budget) {
                  first = i;
                  break;
              }
          }
          // first is 2 (9.75 riyals)
        ` },
        { type: 'lines', rows: [
          ['int first = -1;', 'Start with &quot;not found&quot;.'],
          ['if (prices[i] <= budget)', 'Any test can be used, not only equality.'],
          ['first = i; break;', 'Remember the position and leave the loop at once. <code>break</code> stops a loop, like <code>return</code> stops a method.']
        ], ar: "يمكن تغيير شرط البحث: أول سعر ضمن الميزانية بدل أول قيمة مساوية." },
        { type: 'h', en: 'Searching words' },
        { type: 'p', en: "For numbers we use <code>==</code>. For <code>String</code> values we must use <code>.equals(...)</code>, because <code>==</code> on Strings checks the address, not the letters." },
        { type: 'code', code: J`
          if (names[i].equals(key)) {
              return i;
          }
        ` },
        { type: 'check', q: "How do you compare two Strings for the same letters?", options: ['<code>a == b</code>', '<code>a.equals(b)</code>', '<code>a = b</code>', '<code>a.length(b)</code>'], answer: 1, explain: "Use equals for Strings." },
        { type: 'note', kind: 'tip', en: "If small and capital letters should count as the same (&quot;sara&quot; and &quot;Sara&quot;), use <code>names[i].equalsIgnoreCase(key)</code>, which you met in Unit 4.", ar: "equalsIgnoreCase تتجاهل الفرق بين الحروف الصغيرة والكبيرة." },
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
        { type: 'note', kind: 'tip', en: "Linear search works on any array, sorted or not. In the worst case (the key is last or missing) it checks all <i>n</i> boxes." },
        { type: 'steps', title: 'Worked example: is this student in my section?', problem: "Read n first names, then one more name. Print <code>Nora found at position 3</code> (positions start at 1 for people) or <code>Nora not found</code>. Example input: 4 names Sara Ali Nora Omar, then Nora.",
          steps: [
            { en: "Read the names into a <code>String</code> array with <code>input.next()</code>.", code: J`
              int n = input.nextInt();
              String[] names = new String[n];
              for (int i = 0; i < n; i++) {
                  names[i] = input.next();
              }
            ` },
            { en: "Read the name to look for.", code: "String key = input.next();" },
            { en: "Write a search method for Strings. It must use <code>equals</code>, not <code>==</code>.", code: J`
              public static int findName(String[] list, String key) {
                  for (int i = 0; i < list.length; i++) {
                      if (list[i].equals(key)) {
                          return i;
                      }
                  }
                  return -1;
              }
            ` },
            { en: "In <code>main</code>, test the answer: -1 means not found; otherwise print index + 1. Complete program:" }
          ],
          stdin: '4\nSara Ali Nora Omar\nNora',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    String[] names = new String[n];
                    for (int i = 0; i < n; i++) {
                        names[i] = input.next();
                    }
                    String key = input.next();
                    int pos = findName(names, key);
                    if (pos == -1) {
                        System.out.println(key + " not found");
                    } else {
                        System.out.println(key + " found at position " + (pos + 1));
                    }
                }

                public static int findName(String[] list, String key) {
                    for (int i = 0; i < list.length; i++) {
                        if (list[i].equals(key)) {
                            return i;
                        }
                    }
                    return -1;
                }
            }
          `, out: J`
            Nora found at position 3
          `, ar: "نبحث في مصفوفة النصوص بـ equals، ونطبع الفهرس + 1 لأن الناس يعدّون من 1." }
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
        "It works on unsorted arrays.",
        "Change the pattern for new questions: a <code>boolean</code> answer, the last match (search backwards), or any test such as <code>&lt;=</code>."
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
          hint: "Loop over the boxes; when list[i] == key return i; after the loop return -1.", explain: "This is exactly the linear search pattern." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] a = {5, 9, 5, 2, 9};
                  int last = -1;
                  for (int i = a.length - 1; i >= 0; i--) {
                      if (a[i] == 9) {
                          last = i;
                          break;
                      }
                  }
                  System.out.println(last + " " + contains(a, 7));
              }

              public static boolean contains(int[] list, int key) {
                  for (int x : list) {
                      if (x == key) return true;
                  }
                  return false;
              }
          }
        `, answer: '4 false', explain: "Going backwards, the first 9 met is at index 4, the last 9 in the array. 7 is not in the array, so <code>contains</code> returns <code>false</code>." },
        { t: 'bug', q: "The ID 5874 is in the array, so the program should print <code>2</code>. It prints <code>-1</code>. Tap the line with the bug.",
          qAr: "المفتاح موجود لكن البرنامج يطبع ‎-1. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] ids = {4021, 3310, 5874};
                    System.out.println(find(ids, 5874));
                }

                public static int find(int[] list, int key) {
                    for (int i = 0; i < list.length; i++) {
                        if (list[i] == key) return i;
                        else return -1;
                    }
                    return -1;
                }
            }
          `, bug: 10,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] ids = {4021, 3310, 5874};
                    System.out.println(find(ids, 5874));
                }

                public static int find(int[] list, int key) {
                    for (int i = 0; i < list.length; i++) {
                        if (list[i] == key) return i;
                    }
                    return -1;
                }
            }
          `,
          hint: "How many boxes does the loop look at before the method returns?",
          explain: "In the first round, <code>list[0]</code> (4021) is not the key, so the <code>else</code> returns -1 at once: the method never looks at box 1 or box 2. &quot;Not found&quot; is known only <b>after</b> the loop has checked every box, so delete the <code>else</code> line.",
          explainAr: "return -1 مكانها بعد الحلقة، لا داخلها." },
        { t: 'bug', q: "The program should print <code>First 8 at index 1</code>. It prints <code>First 8 at index 8</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] prices = {15, 8, 22, 8};
                    System.out.println("First 8 at index " + find(prices, 8));
                }

                public static int find(int[] list, int key) {
                    for (int i = 0; i < list.length; i++) {
                        if (list[i] == key) return list[i];
                    }
                    return -1;
                }
            }
          `, bug: 9,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] prices = {15, 8, 22, 8};
                    System.out.println("First 8 at index " + find(prices, 8));
                }

                public static int find(int[] list, int key) {
                    for (int i = 0; i < list.length; i++) {
                        if (list[i] == key) return i;
                    }
                    return -1;
                }
            }
          `,
          hint: "The question is &quot;where?&quot;. Which is the position: <code>i</code> or <code>list[i]</code>?",
          explain: "<code>list[i]</code> is the value in the box, which is the key itself (8). The position is <code>i</code>. Return <code>i</code> to get 1." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> integers, then a key. Print <b>all</b> the indexes where the key appears, separated by single spaces. If it does not appear, print <code>Not found</code>. No prompts.",
          qAr: "اطبع جميع مواضع المفتاح، أو Not found إن لم يوجد.",
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
                    // print every index i where a[i] == key
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
                    int found = 0;
                    for (int i = 0; i < n; i++) {
                        if (a[i] == key) {
                            if (found > 0) System.out.print(" ");
                            System.out.print(i);
                            found++;
                        }
                    }
                    if (found == 0) {
                        System.out.println("Not found");
                    } else {
                        System.out.println();
                    }
                }
            }
          `,
          tests: [ { stdin: '6\n3 7 3 1 3 9\n3', expected: '0 2 4' }, { stdin: '3\n1 2 3\n5', expected: 'Not found' }, { stdin: '1\n4\n4', expected: '0' } ],
          hint: "Do not stop at the first match: no return and no break. Count the matches; print a space before every match except the first.",
          explain: "To find every match, the loop must visit all boxes. A counter tells you at the end whether anything was found." }
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
        { type: 'p', en: "Now a key that is <b>not</b> there: <b>9</b>. Watch how the range gets smaller until <code>low</code> passes <code>high</code>. At that moment no box is left, so the answer is -1." },
        { type: 'table', head: ['Step', 'low', 'high', 'mid', 'list[mid]', 'Action (key = 9)'], rows: [
          ['1', '0', '9', '4', '21', '9 &lt; 21, go left: high = 3'],
          ['2', '0', '3', '1', '8', '9 &gt; 8, go right: low = 2'],
          ['3', '2', '3', '2', '12', '9 &lt; 12, go left: high = 1'],
          ['4', '2', '1', '-', '-', 'low &gt; high: the loop stops, return -1']
        ] },
        { type: 'p', en: "Notice: when the range has an even number of boxes, there is no exact middle. Integer division chooses the left one of the two middle boxes: <code>(0 + 3) / 2</code> is 1, not 1.5. This is fine; the method still works." },
        { type: 'table', head: ['Boxes in the sorted array', 'Linear search, worst case', 'Binary search, worst case'], rows: [
          ['10', '10 checks', '4 checks'],
          ['1,000', '1,000 checks', '10 checks'],
          ['1,000,000', '1,000,000 checks', '20 checks']
        ] },
        { type: 'analogy', title: 'Finding a name in a class list', en: "A teacher has a printed class list sorted by name. To find &quot;Nora&quot; she does not read from the top. She opens the middle page: &quot;Khalid&quot;. N comes after K, so she only looks at the second half. One look removed half of the names.",
          ar: "في قائمة مرتبة نفتح الوسط ونقرر: النصف الأول أم الثاني؟" },
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
          ` },
        { type: 'steps', title: 'Worked example: sort first, then search', problem: "Student IDs were typed in any order: {5874, 1200, 4021, 3310, 2650}. Sort them, print the sorted list, and use binary search to find 4021 and 9999.",
          steps: [
            { en: "Binary search needs a sorted array, so sort it first with <code>Arrays.sort</code>.", code: J`
              int[] ids = {5874, 1200, 4021, 3310, 2650};
              Arrays.sort(ids);
            ` },
            { en: "Print the sorted array so we can check the positions.", code: J`System.out.println("Sorted: " + Arrays.toString(ids));` },
            { en: "Call the same <code>binarySearch</code> method. The index it returns is a position in the <b>sorted</b> array.", code: "int pos = binarySearch(ids, 4021);" },
            { en: "Trace for 4021: mid = 2 (3310), go right; mid = 3 (4021), found. Complete program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[] ids = {5874, 1200, 4021, 3310, 2650};
                    Arrays.sort(ids);
                    System.out.println("Sorted: " + Arrays.toString(ids));
                    int pos = binarySearch(ids, 4021);
                    System.out.println("4021 is at index " + pos);
                    System.out.println("9999 gives " + binarySearch(ids, 9999));
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
            Sorted: [1200, 2650, 3310, 4021, 5874]
            4021 is at index 3
            9999 gives -1
          `, ar: "رتّب{{g:|ي}} أولًا ثم ابحث{{g:|ي}}، والفهرس الناتج موضع في المصفوفة المرتبة." }
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
          hint: "Keep an answer variable starting at -1. When key == a[mid], set answer = mid and break.", explain: "The same loop as in the lesson, but it prints the result." },
        { t: 'output', q: "What is the output? (The key is not in the array.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] list = {2, 5, 9, 14, 20, 31, 40};
                  int key = 15;
                  int low = 0, high = list.length - 1;
                  while (low <= high) {
                      int mid = (low + high) / 2;
                      System.out.print(list[mid] + " ");
                      if (key == list[mid]) break;
                      else if (key < list[mid]) high = mid - 1;
                      else low = mid + 1;
                  }
                  System.out.println();
                  System.out.println("low=" + low + " high=" + high);
              }
          }
        `, answer: J`
          14 31 20
          low=4 high=3
        `, explain: "mid = 3 (14): 15 is bigger, low = 4. mid = 5 (31): smaller, high = 4. mid = 4 (20): smaller, high = 3. Now low (4) &gt; high (3), so the loop stops." },
        { t: 'bug', q: "40 <b>is</b> in the array, but the program prints <code>-1</code>. The search loop itself is written correctly. Tap the line with the bug.",
          qAr: "القيمة موجودة لكن البحث الثنائي لا يجدها. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] list = {40, 8, 31, 12, 25};
                    int key = 40;
                    int low = 0, high = list.length - 1, found = -1;
                    while (low <= high) {
                        int mid = (low + high) / 2;
                        if (key == list[mid]) { found = mid; break; }
                        else if (key < list[mid]) high = mid - 1;
                        else low = mid + 1;
                    }
                    System.out.println(found);
                }
            }
          `, bug: 3,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] list = {8, 12, 25, 31, 40};
                    int key = 40;
                    int low = 0, high = list.length - 1, found = -1;
                    while (low <= high) {
                        int mid = (low + high) / 2;
                        if (key == list[mid]) { found = mid; break; }
                        else if (key < list[mid]) high = mid - 1;
                        else low = mid + 1;
                    }
                    System.out.println(found);
                }
            }
          `,
          hint: "What does binary search need before it starts?",
          explain: "The array is not sorted. mid = 2 (31): 40 is bigger, so the search goes right and never looks at box 0, where 40 really is. Binary search works only on a sorted array; with <code>{8, 12, 25, 31, 40}</code> it prints 4.",
          explainAr: "البحث الثنائي يحتاج مصفوفة مرتبة." },
        { t: 'bug', q: "The program should find 21 at index 4, but it prints <code>-1</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] list = {3, 8, 12, 17, 21};
                    int key = 21;
                    int low = 0, high = list.length - 1, found = -1;
                    while (low < high) {
                        int mid = (low + high) / 2;
                        if (key == list[mid]) { found = mid; break; }
                        else if (key < list[mid]) high = mid - 1;
                        else low = mid + 1;
                    }
                    System.out.println(found);
                }
            }
          `, bug: 6,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] list = {3, 8, 12, 17, 21};
                    int key = 21;
                    int low = 0, high = list.length - 1, found = -1;
                    while (low <= high) {
                        int mid = (low + high) / 2;
                        if (key == list[mid]) { found = mid; break; }
                        else if (key < list[mid]) high = mid - 1;
                        else low = mid + 1;
                    }
                    System.out.println(found);
                }
            }
          `,
          hint: "Trace it. What happens when only one box is left (low == high)?",
          explain: "mid = 2 (12), go right: low = 3. mid = 3 (17), go right: low = 4. Now low and high are both 4: one box is still possible, but <code>low &lt; high</code> is false, so the loop stops without checking it. With <code>low &lt;= high</code> box 4 is checked and found." },
        { t: 'mcq', q: "About how many checks does binary search need, at most, for a sorted array of 1,000,000 values?", options: ['About 20', 'About 1,000', 'About 500,000', 'About 1,000,000'], answer: 0,
          explain: "Each check halves the range: 1,000,000 → 500,000 → 250,000 → … After about 20 halvings only one box is left." }
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
        { type: 'memory', title: 'A swap in three moves', code: J`
            int[] a = {5, 9};
            int temp = a[0];
            a[0] = a[1];
            a[1] = temp;
          `,
          frames: [
            { label: 'Before the swap', vars: [{ name: 'a', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 2', fields: [{ name: '[0]', value: '5' }, { name: '[1]', value: '9' }] }
            ] },
            { label: 'After <code>int temp = a[0];</code> (5 is safe in temp)', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'temp', type: 'int', value: '5' }], objects: [
              { id: 'A', cls: 'int[] length 2', fields: [{ name: '[0]', value: '5' }, { name: '[1]', value: '9' }] }
            ] },
            { label: 'After <code>a[0] = a[1];</code> (the old 5 in the box is gone, but temp has it)', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'temp', type: 'int', value: '5' }], objects: [
              { id: 'A', cls: 'int[] length 2', fields: [{ name: '[0]', value: '9' }, { name: '[1]', value: '9' }] }
            ] },
            { label: 'After <code>a[1] = temp;</code> (swapped)', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'temp', type: 'int', value: '5' }], objects: [
              { id: 'A', cls: 'int[] length 2', fields: [{ name: '[0]', value: '9' }, { name: '[1]', value: '5' }] }
            ] }
          ],
          ar: "بدون temp يضيع الرقم 5 في الخطوة الثانية." },
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
        { type: 'memory', title: 'Selection sort, one pass per frame', en: "Each frame shows the array object after one pass of the outer loop. The variables show which pass it was and where the smallest value was found.",
          frames: [
            { label: 'Start', vars: [{ name: 'list', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '29' }, { name: '[1]', value: '10' }, { name: '[2]', value: '14' }, { name: '[3]', value: '37' }, { name: '[4]', value: '13' }] }
            ] },
            { label: 'After pass <code>i = 0</code>: smallest 10 at index 1, swapped with box 0', vars: [{ name: 'list', type: 'int[]', ref: 'A' }, { name: 'i', type: 'int', value: '0' }, { name: 'minIndex', type: 'int', value: '1' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '10' }, { name: '[1]', value: '29' }, { name: '[2]', value: '14' }, { name: '[3]', value: '37' }, { name: '[4]', value: '13' }] }
            ] },
            { label: 'After pass <code>i = 1</code>: smallest of the rest is 13 at index 4', vars: [{ name: 'list', type: 'int[]', ref: 'A' }, { name: 'i', type: 'int', value: '1' }, { name: 'minIndex', type: 'int', value: '4' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '10' }, { name: '[1]', value: '13' }, { name: '[2]', value: '14' }, { name: '[3]', value: '37' }, { name: '[4]', value: '29' }] }
            ] },
            { label: 'After pass <code>i = 2</code>: 14 is already in place (it swaps with itself)', vars: [{ name: 'list', type: 'int[]', ref: 'A' }, { name: 'i', type: 'int', value: '2' }, { name: 'minIndex', type: 'int', value: '2' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '10' }, { name: '[1]', value: '13' }, { name: '[2]', value: '14' }, { name: '[3]', value: '37' }, { name: '[4]', value: '29' }] }
            ] },
            { label: 'After pass <code>i = 3</code>: 29 at index 4 swaps with 37. Sorted!', vars: [{ name: 'list', type: 'int[]', ref: 'A' }, { name: 'i', type: 'int', value: '3' }, { name: 'minIndex', type: 'int', value: '4' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '10' }, { name: '[1]', value: '13' }, { name: '[2]', value: '14' }, { name: '[3]', value: '29' }, { name: '[4]', value: '37' }] }
            ] }
          ],
          ar: "بعد كل جولة يثبت عنصر إضافي في مكانه الصحيح من اليسار." },
        { type: 'p', en: "How much work is this? For 5 values, the inner loop compares 4 + 3 + 2 + 1 = 10 times. For 100 values it is about 5,000 comparisons. That is fine for a class list, but very big arrays need faster methods such as <code>Arrays.sort</code>." },
        { type: 'h', en: 'Largest first' },
        { type: 'p', en: "To sort from the largest to the smallest (for example the most expensive item first), <i>select</i> the largest instead: keep a <code>maxIndex</code> and change <code>&lt;</code> to <code>&gt;</code>. Everything else stays the same." },
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
          `, ar: "التبديل يحتاج متغيرًا مؤقتًا temp." },
        { type: 'steps', title: 'Worked example: the most expensive item first', problem: "A shop wants its prices {12.5, 30.0, 7.25, 18.0} shown from the most expensive to the cheapest. Write <code>sortDescending</code> with selection sort.",
          steps: [
            { en: "The array holds <code>double</code> values, so the parameter is <code>double[]</code> and <code>temp</code> must be a <code>double</code> too.", code: "public static void sortDescending(double[] list) {" },
            { en: "Outer loop: one pass for each position except the last.", code: "for (int i = 0; i < list.length - 1; i++) {" },
            { en: "Find the position of the <b>largest</b> value in the rest: the test uses <code>&gt;</code>.", code: J`
              int maxIndex = i;
              for (int j = i + 1; j < list.length; j++) {
                  if (list[j] > list[maxIndex]) {
                      maxIndex = j;
                  }
              }
            ` },
            { en: "Swap it into box <code>i</code>.", code: J`
              double temp = list[i];
              list[i] = list[maxIndex];
              list[maxIndex] = temp;
            ` },
            { en: "Complete program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    double[] prices = {12.5, 30.0, 7.25, 18.0};
                    sortDescending(prices);
                    System.out.println(Arrays.toString(prices));
                }

                public static void sortDescending(double[] list) {
                    for (int i = 0; i < list.length - 1; i++) {
                        int maxIndex = i;
                        for (int j = i + 1; j < list.length; j++) {
                            if (list[j] > list[maxIndex]) {
                                maxIndex = j;
                            }
                        }
                        double temp = list[i];
                        list[i] = list[maxIndex];
                        list[maxIndex] = temp;
                    }
                }
            }
          `, out: J`
            [30.0, 18.0, 12.5, 7.25]
          `, ar: "للترتيب التنازلي نختار الأكبر بدل الأصغر." },
        { type: 'note', kind: 'exam', en: "Exams often ask: &quot;What does the array look like after the second pass?&quot; Do not run the whole sort in your head. Do one pass at a time and write the array after each pass, like the memory picture above.",
          ar: "في الاختبار اكتب{{g:|ي}} المصفوفة بعد كل جولة على حدة." }
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
        "The sorted part grows from the left.",
        "Largest first: select the largest with <code>maxIndex</code> and <code>&gt;</code>."
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
          hint: "Outer loop i from 0 to n - 2; inner loop j from i + 1; remember minIndex; swap with temp.", explain: "The same three parts as in the lesson: minIndex search, then swap." },
        { t: 'output', q: "What is the output? (Only <b>two</b> passes run.)", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] list = {50, 20, 40, 10, 30};
                  for (int i = 0; i < 2; i++) {
                      int minIndex = i;
                      for (int j = i + 1; j < list.length; j++) {
                          if (list[j] < list[minIndex]) minIndex = j;
                      }
                      int temp = list[i];
                      list[i] = list[minIndex];
                      list[minIndex] = temp;
                  }
                  System.out.println(Arrays.toString(list));
              }
          }
        `, answer: '[10, 20, 40, 50, 30]', explain: "Pass 0: the smallest (10, index 3) swaps with 50: [10, 20, 40, 50, 30]. Pass 1: the smallest of the rest is 20, already at index 1, so nothing moves." },
        { t: 'bug', q: "The program should swap the two values and print <code>9 4</code>. It prints <code>9 9</code>. Tap the line with the bug.",
          qAr: "التبديل لا يعمل. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] a = {4, 9};
                    a[0] = a[1];
                    a[1] = a[0];
                    System.out.println(a[0] + " " + a[1]);
                }
            }
          `, bug: [4, 5],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] a = {4, 9};
                    int temp = a[0];
                    a[0] = a[1];
                    a[1] = temp;
                    System.out.println(a[0] + " " + a[1]);
                }
            }
          `,
          hint: "After line 4, where is the 4?",
          explain: "Line 4 puts 9 into <code>a[0]</code>, and the 4 is lost for ever. Line 5 then copies 9 back. Save the old value first: <code>int temp = a[0];</code>, then <code>a[0] = a[1];</code>, then <code>a[1] = temp;</code>.",
          explainAr: "التبديل يحتاج متغيرًا مؤقتًا temp." },
        { t: 'bug', q: "This selection sort should print <code>3 6 8</code>. It stops with <code>ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] list = {8, 3, 6};
                    for (int i = 0; i < list.length - 1; i++) {
                        int minIndex = i;
                        for (int j = i + 1; j < list.length; j++) {
                            if (list[j] < list[minIndex]) minIndex = list[j];
                        }
                        int temp = list[i];
                        list[i] = list[minIndex];
                        list[minIndex] = temp;
                    }
                    System.out.println(list[0] + " " + list[1] + " " + list[2]);
                }
            }
          `, bug: 7,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] list = {8, 3, 6};
                    for (int i = 0; i < list.length - 1; i++) {
                        int minIndex = i;
                        for (int j = i + 1; j < list.length; j++) {
                            if (list[j] < list[minIndex]) minIndex = j;
                        }
                        int temp = list[i];
                        list[i] = list[minIndex];
                        list[minIndex] = temp;
                    }
                    System.out.println(list[0] + " " + list[1] + " " + list[2]);
                }
            }
          `,
          hint: "<code>minIndex</code> should hold a position. What does line 7 store in it?",
          explain: "Line 7 stores the <b>value</b> 3 in <code>minIndex</code>. In the next round <code>list[minIndex]</code> means <code>list[3]</code>, which does not exist. <code>minIndex</code> must store the position: <code>minIndex = j;</code>." },
        { t: 'mcq', q: "Selection sort is used on an array of 6 values. How many passes does the outer loop make?", options: ['5', '6', '7', '36'], answer: 0,
          explain: "The loop runs while <code>i &lt; list.length - 1</code>, so i = 0 to 4: five passes. After them, the last value is already in place." }
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
        { type: 'memory', title: 'Inserting the card 13, shift by shift', en: "The card 13 waits safely in <code>current</code>. The bigger values slide right one by one, and for a moment a value appears twice. That is normal: the gap moves left until 13 drops into it.",
          frames: [
            { label: 'Start of step <code>i = 4</code>: <code>current = 13</code>, <code>k = 3</code>', vars: [{ name: 'list', type: 'int[]', ref: 'A' }, { name: 'current', type: 'int', value: '13' }, { name: 'k', type: 'int', value: '3' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '10' }, { name: '[1]', value: '14' }, { name: '[2]', value: '29' }, { name: '[3]', value: '37' }, { name: '[4]', value: '13' }] }
            ] },
            { label: '37 &gt; 13: <code>list[4] = list[3];</code> then k becomes 2', vars: [{ name: 'list', type: 'int[]', ref: 'A' }, { name: 'current', type: 'int', value: '13' }, { name: 'k', type: 'int', value: '2' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '10' }, { name: '[1]', value: '14' }, { name: '[2]', value: '29' }, { name: '[3]', value: '37' }, { name: '[4]', value: '37' }] }
            ] },
            { label: '29 &gt; 13: <code>list[3] = list[2];</code> then k becomes 1', vars: [{ name: 'list', type: 'int[]', ref: 'A' }, { name: 'current', type: 'int', value: '13' }, { name: 'k', type: 'int', value: '1' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '10' }, { name: '[1]', value: '14' }, { name: '[2]', value: '29' }, { name: '[3]', value: '29' }, { name: '[4]', value: '37' }] }
            ] },
            { label: '14 &gt; 13: <code>list[2] = list[1];</code> then k becomes 0', vars: [{ name: 'list', type: 'int[]', ref: 'A' }, { name: 'current', type: 'int', value: '13' }, { name: 'k', type: 'int', value: '0' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '10' }, { name: '[1]', value: '14' }, { name: '[2]', value: '14' }, { name: '[3]', value: '29' }, { name: '[4]', value: '37' }] }
            ] },
            { label: '10 is not &gt; 13, the loop stops: <code>list[k + 1] = current;</code> puts 13 in box 1', vars: [{ name: 'list', type: 'int[]', ref: 'A' }, { name: 'current', type: 'int', value: '13' }, { name: 'k', type: 'int', value: '0' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '10' }, { name: '[1]', value: '13' }, { name: '[2]', value: '14' }, { name: '[3]', value: '29' }, { name: '[4]', value: '37' }] }
            ] }
          ],
          ar: "القيمة 13 محفوظة في current، والقيم الأكبر تنزاح لليمين حتى تظهر الفجوة." },
        { type: 'check', q: "In the last frame, why is 13 written into <code>list[k + 1]</code> and not <code>list[k]</code>?", options: ['Because box k holds 10, which is smaller and must stay; the gap is just after it', 'Because k is always -1 at the end', 'Because Java counts from 1', 'There is no reason'], answer: 0,
          explain: "The loop stops at the first value that is not bigger (10 at k = 0). The gap is the box right after it: k + 1." },
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
        { type: 'table', head: ['', 'Selection sort', 'Insertion sort'], rows: [
          ['Idea', 'select the smallest of the rest', 'insert the next card into the sorted part'],
          ['Moves values by', 'one swap per pass', 'shifting bigger values right'],
          ['Outer loop starts at', '<code>i = 0</code>', '<code>i = 1</code>'],
          ['Inner loop', '<code>for</code>, from <code>i + 1</code> to the end', '<code>while</code>, going left from <code>i - 1</code>'],
          ['Almost sorted array', 'still does every comparison', 'very fast: almost nothing shifts']
        ] },
        { type: 'check', q: "Which sort slides bigger values to the right to make a gap?", options: ['Selection sort', 'Insertion sort', 'Binary search', 'Linear search'], answer: 1, explain: "That is insertion sort." },
        { type: 'analogy', title: 'A queue at the clinic', en: "Patients sit in a row sorted by their number. A new patient arrives with number 13. Everybody with a bigger number moves one chair to the right, and the new patient sits in the empty chair. If the new patient has the biggest number, nobody moves at all: that is why insertion sort is quick when the array is almost sorted.",
          ar: "إذا كان الرقم الجديد هو الأكبر فلا يتحرك أحد، لذلك الترتيب بالإدراج سريع للمصفوفة شبه المرتبة." },
        { type: 'steps', title: 'Worked example: watch every pass', problem: "Sort the ages of six children {9, 4, 7, 11, 3, 6} with insertion sort, and print the array after every pass so you can see the sorted part grow.",
          steps: [
            { en: "Use the insertion sort from this lesson, inside a method.", code: "public static void insertionSort(int[] list) {" },
            { en: "After the card is inserted (the end of one pass), print the pass number and the array.", code: J`
              list[k + 1] = current;
              System.out.println("After i = " + i + ": " + Arrays.toString(list));
            ` },
            { en: "Predict each line before you run it. Pass 3 changes nothing, because 11 is bigger than every value on its left. Complete program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[] ages = {9, 4, 7, 11, 3, 6};
                    insertionSort(ages);
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
                        System.out.println("After i = " + i + ": " + Arrays.toString(list));
                    }
                }
            }
          `, out: J`
            After i = 1: [4, 9, 7, 11, 3, 6]
            After i = 2: [4, 7, 9, 11, 3, 6]
            After i = 3: [4, 7, 9, 11, 3, 6]
            After i = 4: [3, 4, 7, 9, 11, 6]
            After i = 5: [3, 4, 6, 7, 9, 11]
          `, ar: "طباعة المصفوفة بعد كل جولة تساعد على فهم الخوارزمية." }
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
        "Check <code>k &gt;= 0</code> before <code>list[k]</code>.",
        "It is fast on an almost sorted array, because little needs to shift."
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
          hint: "In the while condition, shift while the value at k is SMALLER than current (a[k] < current).", explain: "Reversing the comparison reverses the order of the result." },
        { t: 'output', q: "What is the output? (Count the shifts.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] list = {4, 1, 3, 2};
                  int shifts = 0;
                  for (int i = 1; i < list.length; i++) {
                      int current = list[i];
                      int k = i - 1;
                      while (k >= 0 && list[k] > current) {
                          list[k + 1] = list[k];
                          k--;
                          shifts++;
                      }
                      list[k + 1] = current;
                  }
                  System.out.println(shifts + " " + list[0] + " " + list[3]);
              }
          }
        `, answer: '4 1 4', explain: "i = 1: 4 slides (1 shift) → [1, 4, 3, 2]. i = 2: 4 slides (2) → [1, 3, 4, 2]. i = 3: 4 and 3 slide (4) → [1, 2, 3, 4]. So 4 shifts; the first value is 1 and the last is 4." },
        { t: 'bug', q: "This insertion sort should print <code>3 5 7</code>. It stops with <code>ArrayIndexOutOfBoundsException: Index -1 out of bounds for length 3</code>. Tap the line with the bug.",
          qAr: "البرنامج يتوقف بفهرس ‎-1. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] list = {7, 3, 5};
                    for (int i = 1; i < list.length; i++) {
                        int current = list[i];
                        int k = i - 1;
                        while (list[k] > current && k >= 0) {
                            list[k + 1] = list[k];
                            k--;
                        }
                        list[k + 1] = current;
                    }
                    System.out.println(list[0] + " " + list[1] + " " + list[2]);
                }
            }
          `, bug: 7,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] list = {7, 3, 5};
                    for (int i = 1; i < list.length; i++) {
                        int current = list[i];
                        int k = i - 1;
                        while (k >= 0 && list[k] > current) {
                            list[k + 1] = list[k];
                            k--;
                        }
                        list[k + 1] = current;
                    }
                    System.out.println(list[0] + " " + list[1] + " " + list[2]);
                }
            }
          `,
          hint: "When k becomes -1, which part of the condition does Java check first?",
          explain: "When 7 has slid right, <code>k</code> becomes -1. Java checks the left part first: <code>list[-1]</code> crashes before it ever reaches <code>k &gt;= 0</code>. With <code>k &gt;= 0 &amp;&amp; list[k] &gt; current</code>, the test stops at <code>false</code> and never reads <code>list[-1]</code>.",
          explainAr: "افحص{{g:|ي}} k &gt;= 0 أولًا، لأن جافا تتوقف عند أول شرط خاطئ في &amp;&amp;." },
        { t: 'bug', q: "This insertion sort should print <code>3 5 7</code>. It prints <code>7 7 7</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] list = {7, 3, 5};
                    for (int i = 1; i < list.length; i++) {
                        int current = list[i];
                        int k = i - 1;
                        while (k >= 0 && list[k] > current) {
                            list[k + 1] = list[k];
                            k--;
                        }
                        list[k + 1] = list[i];
                    }
                    System.out.println(list[0] + " " + list[1] + " " + list[2]);
                }
            }
          `, bug: 11,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] list = {7, 3, 5};
                    for (int i = 1; i < list.length; i++) {
                        int current = list[i];
                        int k = i - 1;
                        while (k >= 0 && list[k] > current) {
                            list[k + 1] = list[k];
                            k--;
                        }
                        list[k + 1] = current;
                    }
                    System.out.println(list[0] + " " + list[1] + " " + list[2]);
                }
            }
          `,
          hint: "After the shifting, is the card still in <code>list[i]</code>?",
          explain: "The first shift writes over box <code>i</code>, so <code>list[i]</code> no longer holds the card: it holds a copy of a bigger value. The card was saved in <code>current</code> for exactly this reason. Insert <code>current</code>." },
        { t: 'mcq', q: "Which sort does the least work on an array that is <b>already almost sorted</b>, like <code>{10, 13, 14, 29, 37, 30}</code>?", options: ['Insertion sort', 'Selection sort', 'Both do exactly the same work', 'Binary search'], answer: 0,
          explain: "Insertion sort shifts only when a value is out of place, so here almost nothing moves. Selection sort still searches the whole rest of the array in every pass." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 12 (new)
    {
      title: 'Arrays of Strings and chars',
      titleAr: 'مصفوفات النصوص والحروف',
      minutes: 30,
      body: [
        { type: 'h', en: 'A class list of names' },
        { type: 'p', en: "Teachers, clinics and sports clubs all keep lists of names. Until now our arrays held numbers, but a box can hold any type. In a <code>String</code> array each box holds a whole word or name, and everything you learned about loops, searching and sorting still works.",
          ar: "مصفوفة النصوص تحمل في كل صندوق كلمة أو اسمًا كاملًا." },
        { type: 'analogy', title: 'The attendance sheet', en: "An attendance sheet has numbered lines, and each line holds one student's name. The sheet is the array, the line numbers are the indexes, and each name is the value in one box.",
          ar: "ورقة الحضور: كل سطر مرقّم يحمل اسم طالب واحد." },
        { type: 'code', code: J`
          String[] names = {"Sara", "Huda", "Reem", "Nouf"};
          for (int i = 0; i < names.length; i++) {
              System.out.println((i + 1) + ". " + names[i]);
          }
        ` },
        { type: 'lines', rows: [
          ['String[] names = {...};', 'Four names, so four boxes (indexes 0 to 3).'],
          ['(i + 1) + ". "', 'People number lines from 1, so we print <code>i + 1</code>. The brackets make Java add first and then join the text.'],
          ['names[i]', 'The name in box <code>i</code>. The loop prints <code>1. Sara</code>, <code>2. Huda</code>, <code>3. Reem</code>, <code>4. Nouf</code>.']
        ], ar: "نطبع i + 1 لأن الناس يرقّمون من 1." },
        { type: 'h', en: 'Empty boxes hold null' },
        { type: 'p', en: "With <code>new String[3]</code> Java builds three boxes, but there are no names yet. Each box holds <code>null</code>, which means &quot;no String here&quot;. You fill the boxes later, for example from the keyboard. In the picture we write the text inside the box to keep it simple; in fact each box holds an arrow to a String object, because a String is an object too." },
        { type: 'memory', title: 'Filling a String array', code: J`
            String[] names = new String[3];
            names[0] = "Sara";
            names[1] = "Ali";
          `,
          frames: [
            { label: 'After <code>String[] names = new String[3];</code> (every box is null)', vars: [{ name: 'names', type: 'String[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'String[] length 3', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }] }
            ] },
            { label: 'After <code>names[0] = "Sara";</code>', vars: [{ name: 'names', type: 'String[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'String[] length 3', fields: [{ name: '[0]', value: '"Sara"' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }] }
            ] },
            { label: 'After <code>names[1] = "Ali";</code> (box 2 is still null)', vars: [{ name: 'names', type: 'String[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'String[] length 3', fields: [{ name: '[0]', value: '"Sara"' }, { name: '[1]', value: '"Ali"' }, { name: '[2]', value: 'null' }] }
            ] }
          ],
          ar: "صناديق مصفوفة النصوص الجديدة تبدأ بالقيمة null أي لا يوجد نص بعد." },
        { type: 'check', q: "After the three lines above, what does <code>names[2]</code> hold?", options: ['<code>&quot;&quot;</code> (empty text)', '<code>null</code>', '<code>&quot;Ali&quot;</code>', '0'], answer: 1,
          explain: "Box 2 was never given a name, so it still holds the default value <code>null</code>." },
        { type: 'note', kind: 'warn', en: "You cannot use a String method on <code>null</code>. <code>names[2].length()</code> stops the program with <code>NullPointerException</code>, the error Java gives when you use an arrow that points to nothing. Fill every box before you use it.",
          ar: "استدعاء دالة على null يوقف البرنامج بخطأ NullPointerException." },
        { type: 'h', en: 'String methods on every box' },
        { type: 'p', en: "Inside a loop, each box is a normal String, so you can use <code>length()</code>, <code>charAt()</code>, <code>equals()</code> and the other methods from Unit 4. Here we find the longest name with the champion pattern and count the names that start with S." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] names = {"Sara", "Abdullah", "Reem", "Sultan"};
                  String longest = names[0];
                  int startsWithS = 0;
                  for (String name : names) {
                      if (name.length() > longest.length()) {
                          longest = name;
                      }
                      if (name.charAt(0) == 'S') {
                          startsWithS++;
                      }
                  }
                  System.out.println("Longest: " + longest);
                  System.out.println("Starting with S: " + startsWithS);
              }
          }
        `, out: J`
          Longest: Abdullah
          Starting with S: 2
        ` },
        { type: 'lines', rows: [
          ['String longest = names[0];', 'The first name is the champion at the start.'],
          ['name.length() > longest.length()', 'Compare the <b>lengths</b> of the names, not the names themselves.'],
          ["name.charAt(0) == 'S'", 'The first letter is a <code>char</code>, so <code>==</code> is correct here.']
        ], ar: "نقارن أطوال الأسماء بـ length()، ونقارن الحروف char بـ ==." },
        { type: 'check', q: "For <code>{&quot;Omar&quot;, &quot;Lina&quot;, &quot;Fahad&quot;}</code>, what is the longest name with the code above?", options: ['Omar', 'Lina', 'Fahad', 'All the same'], answer: 2,
          explain: "Omar and Lina have 4 letters; Fahad has 5, so Fahad becomes the champion." },
        { type: 'h', en: 'Joining names into one line' },
        { type: 'p', en: "Often you want the whole list on one line, like <code>Sara, Abdullah, Reem, Sultan</code>. Build a String step by step with <code>+=</code>, and add the comma before every name except the first, as you did with numbers in Lesson 3." },
        { type: 'code', code: J`
          String line = "";
          for (int i = 0; i < names.length; i++) {
              if (i > 0) {
                  line += ", ";
              }
              line += names[i];
          }
          // line is "Sara, Abdullah, Reem, Sultan"
        ` },
        { type: 'p', en: "Java also has a ready-made shortcut for String arrays: <code>String.join(&quot;, &quot;, names)</code> gives the same text in one line.", ar: "String.join يجمع عناصر مصفوفة النصوص في سطر واحد مع فاصل." },
        { type: 'h', en: 'A char array: the answer sheet' },
        { type: 'p', en: "A <code>char</code> array keeps single letters. A good example is a multiple-choice quiz: the answer key is one char array, and a student's answers are another. Compare them box by box: box <code>i</code> of both arrays is question <code>i + 1</code>." },
        { type: 'analogy', title: 'Marking with the key', en: "The teacher puts the answer key next to the student's sheet and moves her finger down both at the same time: question 1 with question 1, question 2 with question 2. One finger is one index <code>i</code> for both arrays.",
          ar: "المعلمة تضع ورقة الحل بجانب ورقة الطالب وتقارن السؤال نفسه في الورقتين." },
        { type: 'code', code: J`
          char[] key = {'B', 'D', 'A', 'C', 'B'};
          char[] answers = {'B', 'A', 'A', 'C', 'D'};
          int correct = 0;
          for (int i = 0; i < key.length; i++) {
              if (answers[i] == key[i]) {
                  correct++;
              }
          }
          // correct is 3
        ` },
        { type: 'check', q: "Why is <code>==</code> fine for <code>answers[i] == key[i]</code>, but not for two names?", options: ['Because char is a simple type that holds the letter itself; a String is an object', 'Because char arrays are shorter', 'It is not fine; it is a mistake', 'Because the arrays have the same length'], answer: 0,
          explain: "A <code>char</code> variable holds the letter itself, like an <code>int</code> holds a number. Strings are objects, so compare them with <code>equals</code>." },
        { type: 'p', en: "A String can also become a char array: <code>char[] letters = word.toCharArray();</code> puts each letter of <code>word</code> into its own box. Then a for-each loop can visit the letters, for example to count the vowels in &quot;Riyadh&quot;." },
        { type: 'code', code: J`
          char[] letters = "Riyadh".toCharArray();   // {'R', 'i', 'y', 'a', 'd', 'h'}
          int vowels = 0;
          for (char c : letters) {
              if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                  vowels++;
              }
          }
          // vowels is 2
        ` },
        { type: 'steps', title: 'Worked example: mark a quiz', problem: "The answer key is {B, D, A, C, B} and a student answered {B, A, A, C, D}. Print one line per question and then the score, like <code>Score: 3/5</code>.",
          steps: [
            { en: "Two char arrays of the same length.", code: J`
              char[] key = {'B', 'D', 'A', 'C', 'B'};
              char[] answers = {'B', 'A', 'A', 'C', 'D'};
            ` },
            { en: "One loop and one index for both arrays. The question number is <code>i + 1</code>.", code: "for (int i = 0; i < key.length; i++) {" },
            { en: "Equal letters: count it and say correct. Otherwise show the right answer from the key.", code: J`
              if (answers[i] == key[i]) {
                  correct++;
                  System.out.println("Q" + (i + 1) + ": correct");
              } else {
                  System.out.println("Q" + (i + 1) + ": wrong, the answer is " + key[i]);
              }
            ` },
            { en: "After the loop print the score out of <code>key.length</code>. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    char[] key = {'B', 'D', 'A', 'C', 'B'};
                    char[] answers = {'B', 'A', 'A', 'C', 'D'};
                    int correct = 0;
                    for (int i = 0; i < key.length; i++) {
                        if (answers[i] == key[i]) {
                            correct++;
                            System.out.println("Q" + (i + 1) + ": correct");
                        } else {
                            System.out.println("Q" + (i + 1) + ": wrong, the answer is " + key[i]);
                        }
                    }
                    System.out.println("Score: " + correct + "/" + key.length);
                }
            }
          `, out: J`
            Q1: correct
            Q2: wrong, the answer is D
            Q3: correct
            Q4: correct
            Q5: wrong, the answer is B
            Score: 3/5
          `, ar: "فهرس واحد i يقارن الصندوق نفسه في المصفوفتين." },
        { type: 'steps', title: 'Worked example: class list and initials', problem: "Read n first names. Print them on one line separated by commas, and then the initials (the first letter of every name). Example input: 3 Sara Ali Nora.",
          steps: [
            { en: "Read the names into a String array with <code>input.next()</code>.", code: J`
              int n = input.nextInt();
              String[] names = new String[n];
              for (int i = 0; i < n; i++) {
                  names[i] = input.next();
              }
            ` },
            { en: "Build a char array with the first letter of every name.", code: J`
              char[] initials = new char[n];
              for (int i = 0; i < n; i++) {
                  initials[i] = names[i].charAt(0);
              }
            ` },
            { en: "Join the names with <code>&quot;, &quot;</code> between them.", code: J`
              String line = "";
              for (int i = 0; i < n; i++) {
                  if (i > 0) {
                      line += ", ";
                  }
                  line += names[i];
              }
            ` },
            { en: "Print the line, then the initials one after the other with <code>print</code>. Complete program:" }
          ],
          stdin: '3\nSara Ali Nora',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    String[] names = new String[n];
                    for (int i = 0; i < n; i++) {
                        names[i] = input.next();
                    }
                    char[] initials = new char[n];
                    for (int i = 0; i < n; i++) {
                        initials[i] = names[i].charAt(0);
                    }
                    String line = "";
                    for (int i = 0; i < n; i++) {
                        if (i > 0) {
                            line += ", ";
                        }
                        line += names[i];
                    }
                    System.out.println("Class: " + line);
                    System.out.print("Initials: ");
                    for (char c : initials) {
                        System.out.print(c);
                    }
                    System.out.println();
                }
            }
          `, out: J`
            Class: Sara, Ali, Nora
            Initials: SAN
          `, ar: "نأخذ الحرف الأول من كل اسم بـ charAt(0) ونخزنه في مصفوفة حروف." },
        { type: 'note', kind: 'exam', en: "Know the three lengths: <code>names.length</code> (how many names, no brackets), <code>names[0].length()</code> (letters in the first name, with brackets), and <code>letters.length</code> for a char array (no brackets).",
          ar: "طول المصفوفة بدون أقواس، وطول النص length() بأقواس." }
      ],
      mistakes: [
        { title: 'Using a box that is still null', en: "The box has no String yet, so the program stops with <code>NullPointerException</code>.", code: J`
          String[] names = new String[3];
          names[0] = "Sara";
          System.out.println(names[1].length());   // WRONG: names[1] is null
        `, ar: "املأ{{g:|ي}} الصندوق قبل استخدامه." },
        { title: 'Comparing names with ==', en: "Names are Strings, so use <code>equals</code>. <code>==</code> is only right for single <code>char</code> values.", code: J`
          if (names[i] == key)          // WRONG
          if (names[i].equals(key))     // correct
        ` },
        { title: 'Mixing the two kinds of length', en: "The array has <code>length</code>; each String in it has <code>length()</code>.", code: J`
          names.length()      // WRONG: the array has no length() method
          names[0].length     // WRONG: a String needs brackets
          names.length        // number of names
          names[0].length()   // letters in the first name
        ` },
        { title: 'Joining a char array to text with +', en: "<code>&quot;Initials: &quot; + initials</code> prints a code like <code>[C@1b6d3586</code>, not the letters. Print the letters with a loop.", code: J`
          System.out.println("Initials: " + initials);   // WRONG
        ` }
      ],
      remember: [
        "<code>String[] names = {...};</code> holds one word or name in each box.",
        "A new String array is full of <code>null</code>: fill a box before you use it.",
        "Each box is a normal String: use <code>length()</code>, <code>charAt()</code>, <code>equals()</code>.",
        "Join names with <code>+=</code> and a separator before every name except the first (or <code>String.join</code>).",
        "A <code>char</code> array holds single letters; compare chars with <code>==</code>.",
        "<code>word.toCharArray()</code> gives the letters of a word as a char array."
      ],
      rememberAr: "مصفوفة النصوص تبدأ بـ null. كل صندوق نص عادي له دوال النصوص. نقارن الأسماء بـ equals والحروف بـ ==. toCharArray يحوّل الكلمة إلى مصفوفة حروف.",
      practice: [
        { t: 'mcq', q: "What does every box of <code>new String[4]</code> hold at the start?", options: ['<code>&quot;&quot;</code>', '<code>null</code>', '0', '<code>&quot;null&quot;</code>'], answer: 1,
          explain: "A new String array has no Strings yet; every box holds <code>null</code>.", explainAr: "القيمة الابتدائية للنصوص هي null." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] names = {"Omar", "Lina", "Fahad"};
                  for (String n : names) {
                      System.out.print(n.charAt(n.length() - 1));
                  }
                  System.out.println();
              }
          }
        `, answer: 'rad', explain: "<code>n.charAt(n.length() - 1)</code> is the last letter of each name: r (Omar), a (Lina), d (Fahad)." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  char[] letters = "Riyadh".toCharArray();
                  int vowels = 0;
                  for (char c : letters) {
                      if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                          vowels++;
                      }
                  }
                  System.out.println(letters.length + " " + vowels);
              }
          }
        `, answer: '6 2', explain: "&quot;Riyadh&quot; has 6 letters. The small vowels are i and a. (The capital R is not a vowel.)" },
        { t: 'fill', q: "Complete the loop that joins the names with a comma and a space between them.", code: J`
          String line = "";
          for (int i = 0; i < names.length; i++) {
              if (i ___ 0) {
                  line += ", ";
              }
              line += names[___];
          }
        `, answers: ['>', 'i'], explain: "The separator goes before every name except the first one (index 0), and then the name in box <code>i</code> is added." },
        { t: 'bug', q: "The teacher made room for 3 names but her class has only two students. The program prints <code>SARA</code> and <code>ALI</code>, and then stops with <code>NullPointerException</code>. Tap the line with the bug.",
          qAr: "البرنامج يتوقف بخطأ NullPointerException. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    String[] names = new String[3];
                    names[0] = "Sara";
                    names[1] = "Ali";
                    for (int i = 0; i < names.length; i++) {
                        System.out.println(names[i].toUpperCase());
                    }
                }
            }
          `, bug: 3,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    String[] names = new String[2];
                    names[0] = "Sara";
                    names[1] = "Ali";
                    for (int i = 0; i < names.length; i++) {
                        System.out.println(names[i].toUpperCase());
                    }
                }
            }
          `,
          hint: "How many boxes were made, and how many were filled?",
          explain: "The array has 3 boxes but only 2 names. Box 2 still holds <code>null</code>, and <code>null.toUpperCase()</code> crashes. Make the array exactly as big as the class: <code>new String[2]</code>.",
          explainAr: "الصندوق الثالث بقي null؛ اجعل{{g:|ي}} حجم المصفوفة مساويًا لعدد الأسماء." },
        { t: 'bug', q: "The program should print <code>Score: 2</code>, but it does not compile. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    char[] key = {'A', 'C', 'B'};
                    char[] answers = {'A', 'B', 'B'};
                    int correct = 0;
                    for (int i = 0; i < key.length; i++) {
                        if (answers[i] = key[i]) {
                            correct++;
                        }
                    }
                    System.out.println("Score: " + correct);
                }
            }
          `, bug: 7,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    char[] key = {'A', 'C', 'B'};
                    char[] answers = {'A', 'B', 'B'};
                    int correct = 0;
                    for (int i = 0; i < key.length; i++) {
                        if (answers[i] == key[i]) {
                            correct++;
                        }
                    }
                    System.out.println("Score: " + correct);
                }
            }
          `,
          hint: "Is this line comparing, or storing?",
          explain: "One <code>=</code> stores a value; it does not compare. Java needs a true/false test inside <code>if</code>, so it reports &quot;incompatible types: char cannot be converted to boolean&quot;. Use <code>==</code> to compare two chars." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> first names. Print <code>Longest: X</code> (the first longest name if there is a tie) and <code>Long names: K</code>, where K is how many names have <b>more than 4</b> letters. No prompts.",
          qAr: "اطبع أطول اسم وعدد الأسماء التي تزيد على 4 حروف.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    String[] names = new String[n];
                    // read the names, then find the longest and count the long names
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    String[] names = new String[n];
                    for (int i = 0; i < n; i++) {
                        names[i] = input.next();
                    }
                    String longest = names[0];
                    int longNames = 0;
                    for (String name : names) {
                        if (name.length() > longest.length()) {
                            longest = name;
                        }
                        if (name.length() > 4) {
                            longNames++;
                        }
                    }
                    System.out.println("Longest: " + longest);
                    System.out.println("Long names: " + longNames);
                }
            }
          `,
          tests: [ { stdin: '4\nSara Abdullah Reem Sultan', expected: 'Longest: Abdullah\nLong names: 2' }, { stdin: '2\nAli Omar', expected: 'Longest: Omar\nLong names: 0' }, { stdin: '3\nNoura Hessa Lama', expected: 'Longest: Noura\nLong names: 2' } ],
          hint: "Start the champion with names[0] and replace it only when a name is strictly longer (&gt;), so the first one wins a tie.",
          explain: "The champion pattern works with <code>length()</code>. Using <code>&gt;</code> (not <code>&gt;=</code>) keeps the first name in a tie." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 13 (new)
    {
      title: 'Parallel arrays',
      titleAr: 'المصفوفات المتوازية',
      minutes: 30,
      body: [
        { type: 'h', en: 'Two lists that belong together' },
        { type: 'p', en: "A mark alone is not very useful: you also need to know <b>whose</b> mark it is. One array cannot hold a name and a number in the same box, because all boxes have one type. The simple answer in CS101 is to use <b>two arrays</b> of the same length, where the same index means the same student: <code>names[i]</code> goes with <code>marks[i]</code>. These are called <b>parallel arrays</b>.",
          ar: "المصفوفات المتوازية: مصفوفتان بالطول نفسه، والفهرس نفسه يعني الطالب نفسه." },
        { type: 'analogy', title: 'Two columns of the class register', en: "In a paper register, the first column has the names and the second column has the marks. Row 3 of the name column and row 3 of the mark column belong to the same student. You read across the same row. Parallel arrays are those two columns, and the index is the row number.",
          ar: "مثل عمودين في سجل الدرجات: الصف نفسه في العمودين يخص الطالب نفسه." },
        { type: 'code', code: J`
          String[] names = {"Sara", "Ali", "Nora", "Omar"};
          int[] marks = {88, 72, 95, 55};
        ` },
        { type: 'table', head: ['index i', 'names[i]', 'marks[i]'], rows: [
          ['0', 'Sara', '88'], ['1', 'Ali', '72'], ['2', 'Nora', '95'], ['3', 'Omar', '55']
        ] },
        { type: 'memory', title: 'Two array objects, one index', en: "There are two separate objects. Nothing joins them except our rule: the same index belongs to the same student. Watch box 1 of <code>marks</code> change; Ali is still box 1 of <code>names</code>.",
          code: J`
            String[] names = {"Sara", "Ali", "Nora", "Omar"};
            int[] marks = {88, 72, 95, 55};
            marks[1] = marks[1] + 5;   // Ali's mark is corrected
          `,
          frames: [
            { label: 'After the two declarations', vars: [{ name: 'names', type: 'String[]', ref: 'A' }, { name: 'marks', type: 'int[]', ref: 'B' }], objects: [
              { id: 'A', cls: 'String[] length 4', fields: [{ name: '[0]', value: '"Sara"' }, { name: '[1]', value: '"Ali"' }, { name: '[2]', value: '"Nora"' }, { name: '[3]', value: '"Omar"' }] },
              { id: 'B', cls: 'int[] length 4', fields: [{ name: '[0]', value: '88' }, { name: '[1]', value: '72' }, { name: '[2]', value: '95' }, { name: '[3]', value: '55' }] }
            ] },
            { label: 'After <code>marks[1] = marks[1] + 5;</code> (Ali now has 77)', vars: [{ name: 'names', type: 'String[]', ref: 'A' }, { name: 'marks', type: 'int[]', ref: 'B' }], objects: [
              { id: 'A', cls: 'String[] length 4', fields: [{ name: '[0]', value: '"Sara"' }, { name: '[1]', value: '"Ali"' }, { name: '[2]', value: '"Nora"' }, { name: '[3]', value: '"Omar"' }] },
              { id: 'B', cls: 'int[] length 4', fields: [{ name: '[0]', value: '88' }, { name: '[1]', value: '77' }, { name: '[2]', value: '95' }, { name: '[3]', value: '55' }] }
            ] }
          ],
          ar: "لا شيء يربط المصفوفتين إلا الفهرس المشترك." },
        { type: 'check', q: "Using the arrays above, which mark belongs to Nora?", options: ['<code>marks[1]</code> = 72', '<code>marks[2]</code> = 95', '<code>marks[3]</code> = 55', '<code>marks[0]</code> = 88'], answer: 1,
          explain: "Nora is in <code>names[2]</code>, so her mark is in <code>marks[2]</code>: 95." },
        { type: 'h', en: 'Printing a report' },
        { type: 'p', en: "To print a report, use <b>one</b> loop with <b>one</b> index <code>i</code>, and read both arrays with it. A for-each loop cannot do this, because it gives you the values of only one array and no index." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] names = {"Sara", "Ali", "Nora", "Omar"};
                  int[] marks = {88, 72, 95, 55};
                  for (int i = 0; i < names.length; i++) {
                      String result = "fail";
                      if (marks[i] >= 60) {
                          result = "pass";
                      }
                      System.out.println(names[i] + ": " + marks[i] + " (" + result + ")");
                  }
              }
          }
        `, out: J`
          Sara: 88 (pass)
          Ali: 72 (pass)
          Nora: 95 (pass)
          Omar: 55 (fail)
        ` },
        { type: 'lines', rows: [
          ['for (int i = 0; i < names.length; i++)', 'Both arrays have the same length, so either length works.'],
          ['marks[i] >= 60', 'Decide using the number array…'],
          ['names[i] + ": " + marks[i]', '…and print the matching name from the other array with the same <code>i</code>.']
        ], ar: "حلقة واحدة وفهرس واحد i نقرأ به من المصفوفتين." },
        { type: 'h', en: "Finding the top student's name" },
        { type: 'p', en: "Here you see why Lesson 4 taught you to keep the <b>index</b> of the largest value. If you only keep the value 95, you do not know who got it. If you keep its index (2), you can read <code>names[2]</code> as well." },
        { type: 'code', code: J`
          int best = 0;
          for (int i = 1; i < marks.length; i++) {
              if (marks[i] > marks[best]) {
                  best = i;
              }
          }
          System.out.println("Top: " + names[best] + " with " + marks[best]);
          // Top: Nora with 95
        ` },
        { type: 'check', q: "Why do we keep <code>best</code> as an index and not as a mark?", options: ['Because the index also tells us where the name is', 'Because indexes are smaller numbers', 'Because marks cannot be compared', 'There is no reason'], answer: 0,
          explain: "With the index we can read both <code>marks[best]</code> and <code>names[best]</code>." },
        { type: 'h', en: 'Looking up by name' },
        { type: 'p', en: "The opposite question: &quot;What is Ali's mark?&quot; Search the names (linear search with <code>equals</code>), then use the index you found in the marks array." },
        { type: 'analogy', title: 'The cloakroom ticket', en: "At a wedding hall cloakroom you get ticket number 17, and your coat hangs on hook 17. To find the coat, the attendant first finds the number, then goes to the hook with the same number. Searching <code>names</code> gives the number; <code>marks</code> is the row of hooks.",
          ar: "نبحث عن الرقم في مصفوفة، ثم نذهب إلى الرقم نفسه في المصفوفة الأخرى." },
        { type: 'code', code: J`
          public static int markOf(String[] names, int[] marks, String who) {
              for (int i = 0; i < names.length; i++) {
                  if (names[i].equals(who)) {
                      return marks[i];
                  }
              }
              return -1;   // not in the list
          }
        ` },
        { type: 'h', en: 'Keep the pairs together' },
        { type: 'p', en: "The danger with parallel arrays: if you move a value in one array, you must make the same move in the other. <code>Arrays.sort(marks)</code> sorts only the marks, and the names stay where they were. Now the pairs are broken." },
        { type: 'memory', title: 'Sorting only one array breaks the pairs', code: J`
            String[] names = {"Sara", "Ali", "Nora"};
            int[] marks = {88, 72, 95};
            Arrays.sort(marks);
          `,
          frames: [
            { label: 'Before: Sara 88, Ali 72, Nora 95', vars: [{ name: 'names', type: 'String[]', ref: 'A' }, { name: 'marks', type: 'int[]', ref: 'B' }], objects: [
              { id: 'A', cls: 'String[] length 3', fields: [{ name: '[0]', value: '"Sara"' }, { name: '[1]', value: '"Ali"' }, { name: '[2]', value: '"Nora"' }] },
              { id: 'B', cls: 'int[] length 3', fields: [{ name: '[0]', value: '88' }, { name: '[1]', value: '72' }, { name: '[2]', value: '95' }] }
            ] },
            { label: 'After <code>Arrays.sort(marks);</code>: now Sara seems to have 72. Wrong!', vars: [{ name: 'names', type: 'String[]', ref: 'A' }, { name: 'marks', type: 'int[]', ref: 'B' }], objects: [
              { id: 'A', cls: 'String[] length 3', fields: [{ name: '[0]', value: '"Sara"' }, { name: '[1]', value: '"Ali"' }, { name: '[2]', value: '"Nora"' }] },
              { id: 'B', cls: 'int[] length 3', fields: [{ name: '[0]', value: '72' }, { name: '[1]', value: '88' }, { name: '[2]', value: '95' }] }
            ] }
          ],
          ar: "ترتيب مصفوفة واحدة فقط يفسد الأزواج؛ كل تبديل يجب أن يحدث في المصفوفتين." },
        { type: 'p', en: "The fix is to write your own sort and swap in <b>both</b> arrays at the same time. You will do exactly this in the project lesson." },
        { type: 'code', code: J`
          int tempMark = marks[i];
          marks[i] = marks[j];
          marks[j] = tempMark;
          String tempName = names[i];
          names[i] = names[j];
          names[j] = tempName;
        ` },
        { type: 'note', kind: 'warn', en: "Parallel arrays must always have the same length. If you read <code>n</code> names, read exactly <code>n</code> marks, and create both arrays with the same <code>n</code>.",
          ar: "المصفوفتان المتوازيتان يجب أن يكون لهما الطول نفسه دائمًا." },
        { type: 'steps', title: 'Worked example: a section report', problem: "For the names {Sara, Ali, Nora, Omar, Huda} and marks {88, 72, 95, 55, 81}, print the class average, the top student and the lowest student with their marks.",
          steps: [
            { en: "Two parallel arrays, plus the sum and two <b>indexes</b>: one for the best and one for the lowest.", code: J`
              String[] names = {"Sara", "Ali", "Nora", "Omar", "Huda"};
              int[] marks = {88, 72, 95, 55, 81};
              int sum = 0;
              int best = 0;
              int low = 0;
            ` },
            { en: "One loop does three jobs.", code: J`
              for (int i = 0; i < marks.length; i++) {
                  sum += marks[i];
                  if (marks[i] > marks[best]) best = i;
                  if (marks[i] < marks[low]) low = i;
              }
            ` },
            { en: "The two indexes give us the names too.", code: J`
              System.out.println("Top: " + names[best] + " (" + marks[best] + ")");
              System.out.println("Lowest: " + names[low] + " (" + marks[low] + ")");
            ` },
            { en: "Print the average with <code>printf</code>. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    String[] names = {"Sara", "Ali", "Nora", "Omar", "Huda"};
                    int[] marks = {88, 72, 95, 55, 81};
                    int sum = 0;
                    int best = 0;
                    int low = 0;
                    for (int i = 0; i < marks.length; i++) {
                        sum += marks[i];
                        if (marks[i] > marks[best]) best = i;
                        if (marks[i] < marks[low]) low = i;
                    }
                    System.out.printf("Average: %.1f%n", (double) sum / marks.length);
                    System.out.println("Top: " + names[best] + " (" + marks[best] + ")");
                    System.out.println("Lowest: " + names[low] + " (" + marks[low] + ")");
                }
            }
          `, out: J`
            Average: 78.2
            Top: Nora (95)
            Lowest: Omar (55)
          `, ar: "نحفظ الفهارس best وlow لنقرأ بها الاسم والدرجة معًا." },
        { type: 'steps', title: 'Worked example: look up a mark from the keyboard', problem: "Read n, then n lines with a name and a mark, then one more name. Print that student's mark, or say that the name is not in the list. Example: 3 students, then Ali.",
          steps: [
            { en: "Create both arrays with the same <code>n</code>. In each round read a name <b>and</b> a mark into the same index.", code: J`
              String[] names = new String[n];
              int[] marks = new int[n];
              for (int i = 0; i < n; i++) {
                  names[i] = input.next();
                  marks[i] = input.nextInt();
              }
            ` },
            { en: "Read the name to look for, and search the names array.", code: J`
              String who = input.next();
              int pos = -1;
              for (int i = 0; i < n; i++) {
                  if (names[i].equals(who)) {
                      pos = i;
                      break;
                  }
              }
            ` },
            { en: "Use the found index in the marks array. Complete program:" }
          ],
          stdin: '3\nSara 88\nAli 72\nNora 95\nAli',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    String[] names = new String[n];
                    int[] marks = new int[n];
                    for (int i = 0; i < n; i++) {
                        names[i] = input.next();
                        marks[i] = input.nextInt();
                    }
                    String who = input.next();
                    int pos = -1;
                    for (int i = 0; i < n; i++) {
                        if (names[i].equals(who)) {
                            pos = i;
                            break;
                        }
                    }
                    if (pos == -1) {
                        System.out.println(who + " is not in the list");
                    } else {
                        System.out.println(who + ": " + marks[pos]);
                    }
                }
            }
          `, out: J`
            Ali: 72
          `, ar: "نبحث في مصفوفة الأسماء ثم نستخدم الفهرس نفسه في مصفوفة الدرجات." }
      ],
      mistakes: [
        { title: 'Sorting only one of the arrays', en: "The values move, but their partners do not. Every swap must happen in both arrays.", code: J`
          Arrays.sort(marks);   // WRONG for parallel arrays: names do not move
        `, ar: "كل تبديل يجب أن يتم في المصفوفتين." },
        { title: 'Keeping the best value instead of its index', en: "With the value you cannot find the name. <code>names[95]</code> even crashes.", code: J`
          int best = marks[0];              // a value
          System.out.println(names[best]);  // WRONG
        ` },
        { title: 'Arrays of different lengths', en: "If the arrays have different sizes, some students have no mark, or the loop crashes.", code: J`
          String[] names = new String[n];
          int[] marks = new int[n - 1];     // WRONG: must be n
        ` },
        { title: 'Using for-each for two arrays', en: "for-each gives values of one array only, with no index for the other array.", code: J`
          for (int m : marks) {
              System.out.println(names[?] + m);   // no index to use!
          }
        ` }
      ],
      remember: [
        "Parallel arrays: <code>names[i]</code> and <code>marks[i]</code> belong to the same student.",
        "Use one <code>for</code> loop with one index <code>i</code> for both arrays.",
        "Keep the <b>index</b> of the best value; then <code>names[best]</code> is the name.",
        "Search one array, then use the index in the other.",
        "Every move or swap must happen in <b>both</b> arrays; never <code>Arrays.sort</code> just one.",
        "Both arrays must always have the same length."
      ],
      rememberAr: "الفهرس نفسه يربط المصفوفتين. نحفظ فهرس الأفضل لا قيمته. أي تبديل يتم في المصفوفتين معًا، ويجب أن يتساوى طولهما.",
      practice: [
        { t: 'mcq', q: "In parallel arrays <code>names</code> and <code>marks</code>, what connects <code>names[3]</code> with its mark?", options: ['They have the same index, 3', 'They have the same value', 'They are in the same array', 'Nothing'], answer: 0,
          explain: "The rule of parallel arrays: the same index means the same person." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] items = {"Tea", "Coffee", "Juice"};
                  double[] prices = {3.0, 9.5, 6.0};
                  double total = 0;
                  for (int i = 0; i < items.length; i++) {
                      if (prices[i] > 5) {
                          System.out.println(items[i]);
                          total += prices[i];
                      }
                  }
                  System.out.println(total);
              }
          }
        `, answer: J`
          Coffee
          Juice
          15.5
        `, explain: "Only boxes 1 (9.5) and 2 (6.0) are above 5, so their items are printed and 9.5 + 6.0 = 15.5." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[] players = {"Faisal", "Majed", "Turki"};
                  int[] goals = {4, 7, 7};
                  int best = 0;
                  for (int i = 1; i < goals.length; i++) {
                      if (goals[i] > goals[best]) best = i;
                  }
                  System.out.println(players[best] + " " + goals[best] + " " + best);
              }
          }
        `, answer: 'Majed 7 1', explain: "Index 1 (7 goals) beats index 0. Index 2 also has 7, but 7 is not <b>bigger</b> than 7, so the first top scorer, Majed, stays." },
        { t: 'fill', q: "Complete the line that prints the top student's name and mark.", code: J`
          System.out.println(names[___] + " " + marks[___]);
        `, answers: ['best', 'best'], explain: "The same index <code>best</code> is used in both arrays." },
        { t: 'bug', q: "The program should print the student with the lowest mark: <code>Lowest: Ali 72</code>. It prints <code>Lowest: Sara 72</code>. Tap the line with the bug.",
          qAr: "الاسم لا يطابق الدرجة. أين الخطأ؟",
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    String[] names = {"Sara", "Ali", "Nora"};
                    int[] marks = {88, 72, 95};
                    Arrays.sort(marks);
                    System.out.println("Lowest: " + names[0] + " " + marks[0]);
                }
            }
          `, bug: 7,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    String[] names = {"Sara", "Ali", "Nora"};
                    int[] marks = {88, 72, 95};
                    int low = 0;
                    for (int i = 1; i < marks.length; i++) {
                        if (marks[i] < marks[low]) low = i;
                    }
                    System.out.println("Lowest: " + names[low] + " " + marks[low]);
                }
            }
          `,
          hint: "After line 7, which arrays have changed?",
          explain: "<code>Arrays.sort(marks)</code> moves 72 to box 0, but the names do not move, so box 0 of <code>names</code> is still Sara. The pairs are broken. Find the <b>index</b> of the lowest mark instead and use it in both arrays.",
          explainAr: "ترتيب مصفوفة واحدة يفسد الأزواج؛ ابحث{{g:|ي}} عن فهرس الأقل." },
        { t: 'bug', q: "The program should print <code>Top: Nora</code>. It stops with <code>ArrayIndexOutOfBoundsException: Index 95 out of bounds for length 3</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    String[] names = {"Sara", "Ali", "Nora"};
                    int[] marks = {88, 72, 95};
                    int best = marks[0];
                    for (int i = 1; i < marks.length; i++) {
                        if (marks[i] > best) best = marks[i];
                    }
                    System.out.println("Top: " + names[best]);
                }
            }
          `, bug: [5, 7],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    String[] names = {"Sara", "Ali", "Nora"};
                    int[] marks = {88, 72, 95};
                    int best = 0;
                    for (int i = 1; i < marks.length; i++) {
                        if (marks[i] > marks[best]) best = i;
                    }
                    System.out.println("Top: " + names[best]);
                }
            }
          `,
          hint: "Is <code>best</code> a mark or a position?",
          explain: "<code>best</code> collects the best <b>mark</b> (95), and then <code>names[95]</code> is used as if 95 were a position. Keep the index instead: start with <code>best = 0</code> and write <code>best = i</code> when <code>marks[i] &gt; marks[best]</code>." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> lines with a first name and a whole mark. Print <code>Top: NAME (MARK)</code> (the first one if there is a tie) and <code>Above average: K</code>, the number of students whose mark is strictly above the average. No prompts.",
          qAr: "اقرأ الأسماء والدرجات في مصفوفتين متوازيتين، واطبع الأول وعدد من فوق المتوسط.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    String[] names = new String[n];
                    int[] marks = new int[n];
                    // read the pairs, then find the top student and count above average
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    String[] names = new String[n];
                    int[] marks = new int[n];
                    for (int i = 0; i < n; i++) {
                        names[i] = input.next();
                        marks[i] = input.nextInt();
                    }
                    int sum = 0;
                    int best = 0;
                    for (int i = 0; i < n; i++) {
                        sum += marks[i];
                        if (marks[i] > marks[best]) best = i;
                    }
                    double average = (double) sum / n;
                    int above = 0;
                    for (int m : marks) {
                        if (m > average) above++;
                    }
                    System.out.println("Top: " + names[best] + " (" + marks[best] + ")");
                    System.out.println("Above average: " + above);
                }
            }
          `,
          tests: [ { stdin: '4\nSara 88\nAli 72\nNora 95\nOmar 55', expected: 'Top: Nora (95)\nAbove average: 2' }, { stdin: '2\nHuda 70\nLama 70', expected: 'Top: Huda (70)\nAbove average: 0' }, { stdin: '1\nReem 100', expected: 'Top: Reem (100)\nAbove average: 0' } ],
          hint: "Read names[i] and marks[i] in the same round. Keep the index of the best mark. A second loop counts the marks above the average.",
          explain: "One index connects the two arrays; the best index gives the name. The average is known only after the first loop, so counting needs a second loop." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 14 (new)
    {
      title: 'Counting with an array',
      titleAr: 'العدّ باستخدام مصفوفة',
      minutes: 30,
      body: [
        { type: 'h', en: 'Many counters at once' },
        { type: 'p', en: "You roll a die 20 times. How many 1s, 2s, 3s… did you get? You could make six counter variables and a long <code>if</code> chain. There is a much shorter way: an <b>array of counters</b>, one box for every possible result. The result itself tells you which box to increase. Such an array is called a <b>frequency array</b> (frequency means &quot;how many times&quot;).",
          ar: "مصفوفة التكرار: صندوق عدّاد لكل نتيجة ممكنة، والنتيجة نفسها هي رقم الصندوق." },
        { type: 'analogy', title: 'Tally marks on the board', en: "In a class vote, the teacher writes the numbers 1 to 6 on the board. For each vote she finds the right number and adds one tally mark under it. She never searches: the vote tells her where to write. The array box is the place under the number, and <code>counts[vote]++</code> is the tally mark.",
          ar: "مثل علامات العدّ على السبورة: كل صوت يضيف علامة تحت رقمه مباشرة." },
        { type: 'code', code: J`
          int[] counts = new int[7];   // boxes 0 to 6; we use 1 to 6
          int roll = 4;
          counts[roll]++;              // counts[4] goes from 0 to 1
        ` },
        { type: 'lines', rows: [
          ['new int[7]', 'A die gives 1 to 6. To have a box number 6 we need 7 boxes (0 to 6). Box 0 is simply not used.'],
          ['counts[roll]++;', 'The value of the roll <b>is</b> the index. Add one to that counter.']
        ], ar: "قيمة الرمية هي الفهرس، لذلك نحتاج 7 صناديق حتى يوجد الصندوق رقم 6." },
        { type: 'memory', title: 'Counting the rolls 3, 6, 3, 1', en: "All counters start at 0 (the default value). Each roll adds 1 to exactly one box.",
          frames: [
            { label: 'After <code>int[] counts = new int[7];</code>', vars: [{ name: 'counts', type: 'int[]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[] length 7', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }, { name: '[4]', value: '0' }, { name: '[5]', value: '0' }, { name: '[6]', value: '0' }] }
            ] },
            { label: 'Roll 3: <code>counts[3]++;</code>', vars: [{ name: 'counts', type: 'int[]', ref: 'A' }, { name: 'roll', type: 'int', value: '3' }], objects: [
              { id: 'A', cls: 'int[] length 7', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '1' }, { name: '[4]', value: '0' }, { name: '[5]', value: '0' }, { name: '[6]', value: '0' }] }
            ] },
            { label: 'Roll 6: <code>counts[6]++;</code>', vars: [{ name: 'counts', type: 'int[]', ref: 'A' }, { name: 'roll', type: 'int', value: '6' }], objects: [
              { id: 'A', cls: 'int[] length 7', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '1' }, { name: '[4]', value: '0' }, { name: '[5]', value: '0' }, { name: '[6]', value: '1' }] }
            ] },
            { label: 'Roll 3 again: <code>counts[3]++;</code> (now 2)', vars: [{ name: 'counts', type: 'int[]', ref: 'A' }, { name: 'roll', type: 'int', value: '3' }], objects: [
              { id: 'A', cls: 'int[] length 7', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '2' }, { name: '[4]', value: '0' }, { name: '[5]', value: '0' }, { name: '[6]', value: '1' }] }
            ] },
            { label: 'Roll 1: <code>counts[1]++;</code>', vars: [{ name: 'counts', type: 'int[]', ref: 'A' }, { name: 'roll', type: 'int', value: '1' }], objects: [
              { id: 'A', cls: 'int[] length 7', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '1' }, { name: '[2]', value: '0' }, { name: '[3]', value: '2' }, { name: '[4]', value: '0' }, { name: '[5]', value: '0' }, { name: '[6]', value: '1' }] }
            ] }
          ],
          ar: "كل رمية تزيد صندوقًا واحدًا فقط بمقدار 1." },
        { type: 'check', q: "The rolls are 2, 2, 5. What is <code>counts[2]</code> at the end?", options: ['0', '1', '2', '5'], answer: 2,
          explain: "The value 2 appears twice, so box 2 is increased twice: 2." },
        { type: 'p', en: "Here is a complete program for 10 rolls. The first loop counts; the second loop prints one line per face." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] rolls = {3, 6, 3, 1, 5, 3, 6, 2, 4, 3};
                  int[] counts = new int[7];
                  for (int r : rolls) {
                      counts[r]++;
                  }
                  for (int face = 1; face <= 6; face++) {
                      System.out.println(face + ": " + counts[face]);
                  }
              }
          }
        `, out: J`
          1: 1
          2: 1
          3: 4
          4: 1
          5: 1
          6: 2
        ` },
        { type: 'h', en: 'Counting marks by group' },
        { type: 'p', en: "Marks go from 0 to 100, and we usually want groups: the 60s, the 70s, the 80s… Integer division does the grouping for us: <code>mark / 10</code> throws away the last digit. So 72 / 10 is 7, 79 / 10 is also 7, and 85 / 10 is 8. Use that number as the index." },
        { type: 'table', head: ['mark', 'mark / 10', 'box increased'], rows: [
          ['72', '7', '<code>counts[7]</code>'], ['79', '7', '<code>counts[7]</code>'], ['85', '8', '<code>counts[8]</code>'], ['60', '6', '<code>counts[6]</code>'], ['100', '10', '<code>counts[10]</code>']
        ] },
        { type: 'code', code: J`
          int[] counts = new int[11];   // boxes 0 to 10, because 100 / 10 is 10
          for (int m : marks) {
              counts[m / 10]++;
          }
        ` },
        { type: 'check', q: "Which box does the mark 59 increase with <code>counts[m / 10]++</code>?", options: ['<code>counts[5]</code>', '<code>counts[6]</code>', '<code>counts[59]</code>', '<code>counts[9]</code>'], answer: 0,
          explain: "59 / 10 is 5 in integer division (the .9 is thrown away)." },
        { type: 'h', en: 'A text histogram with stars' },
        { type: 'p', en: "A <b>histogram</b> is a picture of counts: one bar for each group, and a longer bar means more. We can draw it with stars. For each group, an <b>inner loop</b> prints as many stars as the counter says." },
        { type: 'analogy', title: 'Stacks of coins', en: "Put one coin on the table for every student in each group. You do not need to read numbers: the highest stack is the biggest group, at a glance. Each line of stars is one stack of coins lying on its side.",
          ar: "المدرج مثل أكوام من العملات: الكومة الأعلى هي المجموعة الأكبر." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] rolls = {3, 6, 3, 1, 5, 3, 6, 2, 4, 3};
                  int[] counts = new int[7];
                  for (int r : rolls) {
                      counts[r]++;
                  }
                  for (int face = 1; face <= 6; face++) {
                      System.out.print(face + ": ");
                      for (int s = 0; s < counts[face]; s++) {
                          System.out.print("*");
                      }
                      System.out.println();
                  }
              }
          }
        `, out: J`
          1: *
          2: *
          3: ****
          4: *
          5: *
          6: **
        ` },
        { type: 'lines', rows: [
          ['System.out.print(face + ": ");', 'Start the bar with its label, without ending the line.'],
          ['for (int s = 0; s < counts[face]; s++)', 'Repeat <code>counts[face]</code> times: once per roll of that face.'],
          ['System.out.println();', 'End the line after the bar.']
        ], ar: "حلقة داخلية تطبع عددًا من النجوم يساوي قيمة العدّاد." },
        { type: 'h', en: 'Counting letters' },
        { type: 'p', en: "In Unit 4 you saw that a <code>char</code> is a number inside. The small letters are in order, so <code>'c' - 'a'</code> is 2 and <code>'z' - 'a'</code> is 25. That gives every small letter its own box in an array of 26 counters." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String word = "banana";
                  int[] counts = new int[26];
                  for (int i = 0; i < word.length(); i++) {
                      char c = word.charAt(i);
                      counts[c - 'a']++;
                  }
                  for (int i = 0; i < 26; i++) {
                      if (counts[i] > 0) {
                          System.out.println((char) ('a' + i) + ": " + counts[i]);
                      }
                  }
              }
          }
        `, out: J`
          a: 3
          b: 1
          n: 2
        ` },
        { type: 'lines', rows: [
          ["counts[c - 'a']++;", "For 'b', <code>'b' - 'a'</code> is 1, so box 1 is the counter of b."],
          ["(char) ('a' + i)", "The way back: box 13 becomes <code>'a' + 13</code>, which is 'n'."]
        ], ar: "c - 'a' يعطي رقم الحرف من 0 إلى 25." },
        { type: 'check', q: "What is <code>'d' - 'a'</code>?", options: ['3', '4', '100', "'d'"], answer: 0,
          explain: "a, b, c, d: d is 3 places after a." },
        { type: 'note', kind: 'warn', en: "<code>c - 'a'</code> works only for small letters. A capital letter, a space or a digit gives a negative or too big index and crashes. Make the text small first with <code>toLowerCase()</code>, and skip anything that is not a letter.",
          ar: "c - 'a' يصلح للحروف الصغيرة فقط؛ حوّل{{g:|ي}} النص إلى حروف صغيرة أولًا." },
        { type: 'steps', title: 'Worked example: vote for the trip day', problem: "Students vote for a trip day: 1 = Sunday … 5 = Thursday. Read n votes, print the count for every day, and the winning day (the first one if there is a tie).",
          steps: [
            { en: "A String array for the day names. Box 0 is an empty name so that day 1 is in box 1, like the votes.", code: J`String[] days = {"", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"};` },
            { en: "Six counters (boxes 0 to 5). Each vote increases its own box.", code: J`
              int[] votes = new int[6];
              for (int i = 0; i < n; i++) {
                  int choice = input.nextInt();
                  votes[choice]++;
              }
            ` },
            { en: "Print every day and keep the index of the biggest counter: the champion pattern.", code: J`
              int best = 1;
              for (int d = 1; d <= 5; d++) {
                  System.out.println(days[d] + ": " + votes[d]);
                  if (votes[d] > votes[best]) {
                      best = d;
                  }
              }
            ` },
            { en: "The winner's name is <code>days[best]</code>. Complete program:" }
          ],
          stdin: '9\n2 4 2 5 2 4 1 4 2',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    String[] days = {"", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"};
                    int n = input.nextInt();
                    int[] votes = new int[6];
                    for (int i = 0; i < n; i++) {
                        int choice = input.nextInt();
                        votes[choice]++;
                    }
                    int best = 1;
                    for (int d = 1; d <= 5; d++) {
                        System.out.println(days[d] + ": " + votes[d]);
                        if (votes[d] > votes[best]) {
                            best = d;
                        }
                    }
                    System.out.println("Trip day: " + days[best]);
                }
            }
          `, out: J`
            Sunday: 1
            Monday: 4
            Tuesday: 0
            Wednesday: 3
            Thursday: 1
            Trip day: Monday
          `, ar: "مصفوفة العدّ ومصفوفة الأسماء تعملان معًا بالفهرس نفسه." },
        { type: 'steps', title: 'Worked example: a marks histogram', problem: "Draw a histogram of the marks {72, 95, 60, 88, 85, 100, 67, 79, 91, 64, 58} in the groups 50-59, 60-69, 70-79, 80-89 and 90-100, with the count in brackets.",
          steps: [
            { en: "Group with <code>m / 10</code>. A mark of 100 would go to group 10, but we want it in the 90-100 group, so move it to 9.", code: J`
              int g = m / 10;
              if (g == 10) {
                  g = 9;
              }
              counts[g]++;
            ` },
            { en: "For each group from 5 to 9, work out the label: the lowest mark is <code>g * 10</code>, the highest is that + 9 (or 100 for the last group).", code: J`
              int low = g * 10;
              int high = low + 9;
              if (g == 9) {
                  high = 100;
              }
            ` },
            { en: "Print the label, the stars with an inner loop, and the count. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] marks = {72, 95, 60, 88, 85, 100, 67, 79, 91, 64, 58};
                    int[] counts = new int[10];
                    for (int m : marks) {
                        int g = m / 10;
                        if (g == 10) {
                            g = 9;
                        }
                        counts[g]++;
                    }
                    for (int g = 5; g <= 9; g++) {
                        int low = g * 10;
                        int high = low + 9;
                        if (g == 9) {
                            high = 100;
                        }
                        System.out.print(low + "-" + high + ": ");
                        for (int s = 0; s < counts[g]; s++) {
                            System.out.print("*");
                        }
                        System.out.println(" (" + counts[g] + ")");
                    }
                }
            }
          `, out: J`
            50-59: * (1)
            60-69: *** (3)
            70-79: ** (2)
            80-89: ** (2)
            90-100: *** (3)
          `, ar: "نقسم الدرجة على 10 لنحصل على رقم المجموعة، ونطبع نجمة لكل طالب." }
      ],
      mistakes: [
        { title: 'The counter array is one box too small', en: "For values 1 to 6 you need a box number 6, so the size must be 7. With <code>new int[6]</code>, a roll of 6 crashes.", code: J`
          int[] counts = new int[6];   // WRONG: boxes 0 to 5 only
          counts[6]++;                 // ArrayIndexOutOfBoundsException
        `, ar: "الحجم = أكبر قيمة + 1." },
        { title: 'Creating the counters inside the loop', en: "Every round would start with new zero counters, and all earlier counts are lost.", code: J`
          for (int r : rolls) {
              int[] counts = new int[7];   // WRONG place
              counts[r]++;
          }
        ` },
        { title: 'Counting the value instead of one', en: "<code>counts[r] += r;</code> adds the value; a counter must go up by exactly 1.", code: J`
          counts[r] += r;   // WRONG
          counts[r]++;      // correct
        ` },
        { title: 'Capital letters in letter counting', en: "<code>'A' - 'a'</code> is -32, a negative index. Make the letter small first.", code: J`
          char c = Character.toLowerCase(word.charAt(i));
          counts[c - 'a']++;
        ` }
      ],
      remember: [
        "A frequency array has one counter box for every possible value.",
        "The value is the index: <code>counts[value]++;</code>.",
        "Size = the largest value + 1 (box 0 may stay unused).",
        "Group marks with <code>mark / 10</code>; count letters with <code>c - 'a'</code>.",
        "A histogram prints one line per box, with an inner loop of <code>counts[i]</code> stars."
      ],
      rememberAr: "مصفوفة التكرار: counts[value]++ وحجمها أكبر قيمة + 1. نجمع الدرجات بالقسمة على 10، والحروف بـ c - 'a'، ونرسم المدرج بالنجوم.",
      practice: [
        { t: 'mcq', q: "You count dice results 1 to 6 with <code>counts[r]++</code>. What is the smallest size that works?", options: ['5', '6', '7', '12'], answer: 2,
          explain: "Index 6 must exist, so you need boxes 0 to 6: size 7." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] data = {2, 0, 2, 3, 2};
                  int[] counts = new int[4];
                  for (int d : data) {
                      counts[d]++;
                  }
                  System.out.println(counts[0] + " " + counts[1] + " " + counts[2] + " " + counts[3]);
              }
          }
        `, answer: '1 0 3 1', explain: "0 appears once, 1 never, 2 three times and 3 once." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[] counts = {0, 3, 1, 2};
                  for (int i = 1; i < counts.length; i++) {
                      System.out.print(i + " ");
                      for (int s = 0; s < counts[i]; s++) {
                          System.out.print("*");
                      }
                      System.out.println();
                  }
              }
          }
        `, answer: J`
          1 ***
          2 *
          3 **
        `, explain: "Each line shows its number and then as many stars as the counter in that box. Box 0 is skipped because the loop starts at 1." },
        { t: 'fill', q: "Complete the line that counts small letters.", code: J`
          char c = word.charAt(i);
          counts[c - ___]++;
        `, answers: [["'a'"]], explain: "<code>c - 'a'</code> turns a to 0, b to 1, … z to 25." },
        { t: 'bug', q: "The program should print <code>Sixes: 2</code>. It stops with <code>ArrayIndexOutOfBoundsException: Index 6 out of bounds for length 6</code>. Tap the line with the bug.",
          qAr: "مصفوفة العدّ أصغر من اللازم. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] rolls = {1, 6, 3, 6};
                    int[] counts = new int[6];
                    for (int r : rolls) {
                        counts[r]++;
                    }
                    System.out.println("Sixes: " + counts[6]);
                }
            }
          `, bug: 4,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] rolls = {1, 6, 3, 6};
                    int[] counts = new int[7];
                    for (int r : rolls) {
                        counts[r]++;
                    }
                    System.out.println("Sixes: " + counts[6]);
                }
            }
          `,
          hint: "Which indexes does <code>new int[6]</code> have?",
          explain: "<code>new int[6]</code> has boxes 0 to 5, so the first roll of 6 crashes. The value is used as the index, so the size must be the largest value + 1: <code>new int[7]</code>.",
          explainAr: "الحجم يجب أن يساوي أكبر قيمة + 1." },
        { t: 'bug', q: "The program should print <code>a: 2</code> for the word &quot;Abha&quot;. It stops with <code>ArrayIndexOutOfBoundsException: Index -32 out of bounds for length 26</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    String word = "Abha";
                    int[] counts = new int[26];
                    for (int i = 0; i < word.length(); i++) {
                        char c = word.charAt(i);
                        counts[c - 'a']++;
                    }
                    System.out.println("a: " + counts[0]);
                }
            }
          `, bug: [6, 7],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    String word = "Abha";
                    int[] counts = new int[26];
                    for (int i = 0; i < word.length(); i++) {
                        char c = Character.toLowerCase(word.charAt(i));
                        counts[c - 'a']++;
                    }
                    System.out.println("a: " + counts[0]);
                }
            }
          `,
          hint: "The first letter is a capital A. What is <code>'A' - 'a'</code>?",
          explain: "Capital letters come before small letters, so <code>'A' - 'a'</code> is -32, which is not an index. Make every letter small first with <code>Character.toLowerCase</code>; then A and a both go to box 0 and the program prints <code>a: 2</code>." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> dice rolls (1 to 6). Print a histogram with one line per face, from 1 to 6, like <code>3: ***</code> (the face, a colon, a space, then one star per roll). No prompts.",
          qAr: "ارسم{{g:|ي}} مدرجًا تكراريًا بالنجوم لنتائج النرد.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] counts = new int[7];
                    // read n rolls and count them, then print 6 lines of stars
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] counts = new int[7];
                    for (int i = 0; i < n; i++) {
                        int r = input.nextInt();
                        counts[r]++;
                    }
                    for (int face = 1; face <= 6; face++) {
                        System.out.print(face + ": ");
                        for (int s = 0; s < counts[face]; s++) {
                            System.out.print("*");
                        }
                        System.out.println();
                    }
                }
            }
          `,
          tests: [ { stdin: '8\n1 3 3 6 2 3 6 5', expected: '1: *\n2: *\n3: ***\n4:\n5: *\n6: **' }, { stdin: '3\n4 4 4', expected: '1:\n2:\n3:\n4: ***\n5:\n6:' } ],
          hint: "counts[r]++ for every roll. Then for each face print the label, an inner loop of stars, and println().",
          explain: "Counting first and drawing afterwards keeps the program simple: two separate loops." },
        { t: 'code', q: "Read one word of small letters. Print the letter that appears the <b>most</b> and how many times, like <code>a 3</code>. If there is a tie, print the letter that comes first in the alphabet. No prompts.",
          qAr: "اطبع الحرف الأكثر تكرارًا في الكلمة وعدد مرات ظهوره.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    String word = input.next();
                    int[] counts = new int[26];
                    // count the letters, then find the biggest counter
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    String word = input.next();
                    int[] counts = new int[26];
                    for (int i = 0; i < word.length(); i++) {
                        counts[word.charAt(i) - 'a']++;
                    }
                    int best = 0;
                    for (int i = 1; i < 26; i++) {
                        if (counts[i] > counts[best]) {
                            best = i;
                        }
                    }
                    System.out.println((char) ('a' + best) + " " + counts[best]);
                }
            }
          `,
          tests: [ { stdin: 'banana', expected: 'a 3' }, { stdin: 'mississippi', expected: 'i 4' }, { stdin: 'riyadh', expected: 'a 1' } ],
          hint: "After counting, use the champion pattern on the counters with &gt; so that the earlier letter wins a tie. Turn the index back into a letter with (char) ('a' + best).",
          explain: "The index of the biggest counter tells you <b>which</b> letter; the counter tells you <b>how many</b>." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 15 (new)
    {
      title: 'Changing an array: reverse, rotate, insert and remove',
      titleAr: 'تعديل المصفوفة: العكس والتدوير والإدراج والحذف',
      minutes: 30,
      body: [
        { type: 'h', en: 'Reverse in place' },
        { type: 'p', en: "In Lesson 6 the method <code>reverse</code> built a <b>new</b> array. Sometimes we want to change the <b>same</b> array instead, without a second one. This is called working <b>in place</b>. It saves memory, and every name that points to the array sees the new order.",
          ar: "التعديل في المكان: نغيّر المصفوفة نفسها دون إنشاء مصفوفة ثانية." },
        { type: 'analogy', title: 'Swapping seats from both ends', en: "Students sit in a row. The first and the last swap seats, then the second and the second-to-last, and so on, until they meet in the middle. When they meet, they stop: if they went on, they would swap back again!",
          ar: "الأول يبدّل مع الأخير، والثاني مع قبل الأخير، حتى نصل إلى المنتصف." },
        { type: 'code', code: J`
          int[] a = {1, 2, 3, 4, 5};
          for (int i = 0; i < a.length / 2; i++) {
              int temp = a[i];
              a[i] = a[a.length - 1 - i];
              a[a.length - 1 - i] = temp;
          }
          // a is now {5, 4, 3, 2, 1}
        ` },
        { type: 'lines', rows: [
          ['i < a.length / 2', 'Only half of the array: 5 / 2 is 2, so i is 0 and 1. The middle box (3) stays where it is.'],
          ['a.length - 1 - i', 'The partner of box <code>i</code> from the other end: 4 for i = 0, 3 for i = 1.'],
          ['the three swap lines', 'The swap with <code>temp</code> from Lesson 10.']
        ], ar: "نكرر حتى منتصف المصفوفة فقط، وشريك i هو a.length - 1 - i." },
        { type: 'table', head: ['i', 'partner', 'swap', 'Array after'], rows: [
          ['start', '-', '-', '[1, 2, 3, 4, 5]'],
          ['0', '4', '1 and 5', '[5, 2, 3, 4, 1]'],
          ['1', '3', '2 and 4', '[5, 4, 3, 2, 1]'],
          ['2', '-', '2 &lt; 2 is false', 'stop: the middle stays']
        ] },
        { type: 'check', q: "An array has 6 boxes. How many swaps does the reverse loop make?", options: ['2', '3', '6', '5'], answer: 1,
          explain: "6 / 2 = 3 swaps: boxes 0-5, 1-4 and 2-3." },
        { type: 'h', en: 'Rotate: everyone moves one place' },
        { type: 'p', en: "A cleaning duty list for four students: each week the first student goes to the end and everybody else moves one place forward. This is a <b>rotation to the left</b>. Save the first value, shift every other value one box to the left, then put the saved value in the last box." },
        { type: 'code', code: J`
          String[] duty = {"Ali", "Sara", "Omar", "Huda"};
          String first = duty[0];
          for (int i = 0; i < duty.length - 1; i++) {
              duty[i] = duty[i + 1];
          }
          duty[duty.length - 1] = first;
          // duty is now {"Sara", "Omar", "Huda", "Ali"}
        ` },
        { type: 'lines', rows: [
          ['String first = duty[0];', 'Save Ali, because box 0 is about to be overwritten.'],
          ['i < duty.length - 1', 'Stop one box early: the loop reads <code>duty[i + 1]</code>, and box 4 does not exist.'],
          ['duty[i] = duty[i + 1];', 'Each box takes the value of its right neighbour.'],
          ['duty[duty.length - 1] = first;', 'Ali goes to the last box.']
        ], ar: "نحفظ العنصر الأول، ونزيح الباقي لليسار، ثم نضعه في الآخر." },
        { type: 'check', q: "Why does the rotate loop stop at <code>duty.length - 1</code>?", options: ['Because it reads <code>duty[i + 1]</code>, which must exist', 'To save time', 'Because the last name is not important', 'It is a mistake'], answer: 0,
          explain: "When i is the last index, <code>i + 1</code> would be outside the array." },
        { type: 'h', en: 'A partially filled array' },
        { type: 'p', en: "An array cannot grow. So when we do not know how many values will come, we make the array big enough for the most we expect (its <b>capacity</b>) and keep a second variable, <code>count</code>, that says how many boxes are really used. The used boxes are always 0 to <code>count - 1</code>; the rest are free. This is a <b>partially filled array</b>.",
          ar: "المصفوفة الممتلئة جزئيًا: سعة ثابتة، ومتغير count يحدد عدد الصناديق المستخدمة فعلًا." },
        { type: 'analogy', title: 'A school bus', en: "A bus has 40 seats (the capacity), but today 32 students are on board (the count). Students always fill the seats from the front. To greet every student, the driver walks to seat 32, not to seat 40.",
          ar: "الحافلة فيها 40 مقعدًا لكن الركاب اليوم 32؛ نمرّ على المقاعد المشغولة فقط." },
        { type: 'code', code: J`
          int[] marks = new int[10];   // capacity: 10 boxes
          int count = 0;               // no mark yet
          marks[count] = 85;           // the next free box is always marks[count]
          count++;
          marks[count] = 70;
          count++;                     // count is 2: boxes 0 and 1 are used
          for (int i = 0; i < count; i++) {
              System.out.println(marks[i]);
          }
        ` },
        { type: 'note', kind: 'warn', en: "In a partially filled array, every loop must stop at <code>count</code>, not at <code>marks.length</code>. Otherwise you also visit the empty boxes (0, 0, 0…). And before adding, check that <code>count &lt; marks.length</code>, or a full array crashes.",
          ar: "الحلقات تتوقف عند count لا عند length، وتأكد{{g:|ي}} أن المصفوفة ليست ممتلئة قبل الإضافة." },
        { type: 'h', en: 'Insert in the middle' },
        { type: 'p', en: "To insert a value at position <code>pos</code>, first make a gap: shift every value from <code>pos</code> to the end one box to the <b>right</b>. Start from the <b>end</b> and go backwards, so that no value is overwritten before it has moved. Then put the new value in the gap and increase <code>count</code>." },
        { type: 'code', code: J`
          for (int i = count; i > pos; i--) {
              a[i] = a[i - 1];
          }
          a[pos] = value;
          count++;
        ` },
        { type: 'memory', title: 'Inserting 50 at position 1', en: "The array has capacity 5 and count 3: {30, 60, 90}. Watch the gap move left until it reaches position 1.",
          frames: [
            { label: 'Start: count = 3, pos = 1', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'count', type: 'int', value: '3' }, { name: 'pos', type: 'int', value: '1' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '30' }, { name: '[1]', value: '60' }, { name: '[2]', value: '90' }, { name: '[3]', value: '0' }, { name: '[4]', value: '0' }] }
            ] },
            { label: 'i = 3: <code>a[3] = a[2];</code>', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'count', type: 'int', value: '3' }, { name: 'pos', type: 'int', value: '1' }, { name: 'i', type: 'int', value: '3' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '30' }, { name: '[1]', value: '60' }, { name: '[2]', value: '90' }, { name: '[3]', value: '90' }, { name: '[4]', value: '0' }] }
            ] },
            { label: 'i = 2: <code>a[2] = a[1];</code> (then i = 1 is not &gt; pos, the loop stops)', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'count', type: 'int', value: '3' }, { name: 'pos', type: 'int', value: '1' }, { name: 'i', type: 'int', value: '2' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '30' }, { name: '[1]', value: '60' }, { name: '[2]', value: '60' }, { name: '[3]', value: '90' }, { name: '[4]', value: '0' }] }
            ] },
            { label: 'After <code>a[pos] = 50;</code> and <code>count++;</code>', vars: [{ name: 'a', type: 'int[]', ref: 'A' }, { name: 'count', type: 'int', value: '4' }, { name: 'pos', type: 'int', value: '1' }], objects: [
              { id: 'A', cls: 'int[] length 5', fields: [{ name: '[0]', value: '30' }, { name: '[1]', value: '50' }, { name: '[2]', value: '60' }, { name: '[3]', value: '90' }, { name: '[4]', value: '0' }] }
            ] }
          ],
          ar: "نزيح القيم لليمين بدءًا من النهاية حتى لا تضيع أي قيمة، ثم نضع الجديدة في الفجوة." },
        { type: 'check', q: "Why does the insert loop go <b>backwards</b> from <code>count</code>?", options: ['Going forwards would copy the same value into every box', 'Backwards loops are faster', 'Because the array is sorted', 'There is no reason'], answer: 0,
          explain: "Going forwards, <code>a[2] = a[1]</code> would destroy 90 before it moved, and 60 would be copied again and again." },
        { type: 'h', en: 'Remove from the middle' },
        { type: 'p', en: "Removing is the opposite: every value after <code>pos</code> moves one box to the <b>left</b>, which closes the gap. This time go <b>forwards</b>. Then decrease <code>count</code>. The old last value is still in the array, but it is outside the used part, so we ignore it." },
        { type: 'code', code: J`
          for (int i = pos; i < count - 1; i++) {
              a[i] = a[i + 1];
          }
          count--;
        ` },
        { type: 'steps', title: 'Worked example: a waiting list with methods', problem: "Keep a waiting list of patient numbers in an array of capacity 6. Insert 30 at position 0, 90 at position 1, then 60 at position 1. Print the list, remove position 0, and print again.",
          steps: [
            { en: "A method can change the boxes (the array is shared), but it cannot change <code>count</code> in <code>main</code>, because an int is copied. So the method <b>returns</b> the new count.", code: J`
              public static int insert(int[] a, int count, int pos, int value) {
                  for (int i = count; i > pos; i--) {
                      a[i] = a[i - 1];
                  }
                  a[pos] = value;
                  return count + 1;
              }
            ` },
            { en: "<code>remove</code> works the same way and returns <code>count - 1</code>.", code: J`
              public static int remove(int[] a, int count, int pos) {
                  for (int i = pos; i < count - 1; i++) {
                      a[i] = a[i + 1];
                  }
                  return count - 1;
              }
            ` },
            { en: "In <code>main</code>, always store the answer back: <code>count = insert(...)</code>.", code: "count = insert(list, count, 1, 60);" },
            { en: "<code>print</code> stops at <code>count</code>. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] list = new int[6];
                    int count = 0;
                    count = insert(list, count, 0, 30);
                    count = insert(list, count, 1, 90);
                    count = insert(list, count, 1, 60);
                    print(list, count);
                    count = remove(list, count, 0);
                    print(list, count);
                    System.out.println("Used " + count + " of " + list.length + " boxes");
                }

                public static int insert(int[] a, int count, int pos, int value) {
                    for (int i = count; i > pos; i--) {
                        a[i] = a[i - 1];
                    }
                    a[pos] = value;
                    return count + 1;
                }

                public static int remove(int[] a, int count, int pos) {
                    for (int i = pos; i < count - 1; i++) {
                        a[i] = a[i + 1];
                    }
                    return count - 1;
                }

                public static void print(int[] a, int count) {
                    for (int i = 0; i < count; i++) {
                        System.out.print(a[i] + " ");
                    }
                    System.out.println();
                }
            }
          `, out: J`
            30 60 90
            60 90
            Used 2 of 6 boxes
          `, ar: "الدالة تغيّر الصناديق، لكنها تُرجع count الجديد لأن العدد الصحيح يُنسخ." },
        { type: 'steps', title: 'Worked example: rotate and reverse a duty list', problem: "The duty list is {Ali, Sara, Omar, Huda}. Rotate it left for two weeks and print it after each week. Then reverse it in place and print it.",
          steps: [
            { en: "A loop over the weeks. Inside it, the rotation from this lesson.", code: J`
              for (int week = 1; week <= 2; week++) {
                  String first = duty[0];
                  for (int i = 0; i < duty.length - 1; i++) {
                      duty[i] = duty[i + 1];
                  }
                  duty[duty.length - 1] = first;
                  System.out.println("Week " + week + ": " + Arrays.toString(duty));
              }
            ` },
            { en: "Then reverse in place: swap from both ends up to the middle.", code: J`
              for (int i = 0; i < duty.length / 2; i++) {
                  String temp = duty[i];
                  duty[i] = duty[duty.length - 1 - i];
                  duty[duty.length - 1 - i] = temp;
              }
            ` },
            { en: "Complete program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    String[] duty = {"Ali", "Sara", "Omar", "Huda"};
                    for (int week = 1; week <= 2; week++) {
                        String first = duty[0];
                        for (int i = 0; i < duty.length - 1; i++) {
                            duty[i] = duty[i + 1];
                        }
                        duty[duty.length - 1] = first;
                        System.out.println("Week " + week + ": " + Arrays.toString(duty));
                    }
                    for (int i = 0; i < duty.length / 2; i++) {
                        String temp = duty[i];
                        duty[i] = duty[duty.length - 1 - i];
                        duty[duty.length - 1 - i] = temp;
                    }
                    System.out.println("Reversed: " + Arrays.toString(duty));
                }
            }
          `, out: J`
            Week 1: [Sara, Omar, Huda, Ali]
            Week 2: [Omar, Huda, Ali, Sara]
            Reversed: [Sara, Ali, Huda, Omar]
          `, ar: "التدوير والعكس يعملان على المصفوفة نفسها، ولأي نوع من القيم." }
      ],
      mistakes: [
        { title: 'Reversing over the whole array', en: "With <code>i &lt; a.length</code> every pair is swapped twice, so the array ends exactly as it started.", code: J`
          for (int i = 0; i < a.length; i++) {        // WRONG
          for (int i = 0; i < a.length / 2; i++) {    // correct
        `, ar: "العكس حتى المنتصف فقط." },
        { title: 'Shifting right from the front', en: "Going forwards copies the same value into all the boxes. To make a gap, shift from the end backwards.", code: J`
          for (int i = pos; i < count; i++) {
              a[i + 1] = a[i];      // WRONG: overwrites before moving
          }
        ` },
        { title: 'Looping to length in a partially filled array', en: "The empty boxes are printed too. Stop at <code>count</code>.", code: J`
          for (int i = 0; i < a.length; i++)   // WRONG: prints the 0s
          for (int i = 0; i < count; i++)      // correct
        ` },
        { title: 'Forgetting to update count', en: "After an insert, <code>count++</code>; after a remove, <code>count--</code>. In a method, return the new count and store it.", code: J`
          insert(list, count, 1, 60);           // WRONG: the new count is lost
          count = insert(list, count, 1, 60);   // correct
        ` }
      ],
      remember: [
        "Reverse in place: swap <code>a[i]</code> with <code>a[a.length - 1 - i]</code> for <code>i &lt; a.length / 2</code>.",
        "Rotate left: save <code>a[0]</code>, shift left with <code>a[i] = a[i + 1]</code>, put the saved value last.",
        "A partially filled array has a capacity (<code>a.length</code>) and a <code>count</code> of used boxes 0 to count - 1.",
        "Insert: shift right from the end backwards, put the value, <code>count++</code>.",
        "Remove: shift left from <code>pos</code> forwards, <code>count--</code>.",
        "A method can change the boxes but must return the new count."
      ],
      rememberAr: "العكس حتى المنتصف. التدوير: نحفظ الأول ونزيح لليسار. المصفوفة الممتلئة جزئيًا لها count. الإدراج يزيح لليمين من النهاية، والحذف يزيح لليسار من الموضع.",
      practice: [
        { t: 'mcq', q: "In a partially filled array with <code>count = 4</code> and capacity 10, which boxes hold real data?", options: ['0 to 3', '1 to 4', '0 to 9', '4 to 9'], answer: 0,
          explain: "The used boxes are always 0 to <code>count - 1</code>." },
        { t: 'output', q: "What is the output?", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] a = {10, 20, 30, 40, 50};
                  for (int i = 0; i < a.length / 2; i++) {
                      int temp = a[i];
                      a[i] = a[a.length - 1 - i];
                      a[a.length - 1 - i] = temp;
                  }
                  System.out.println(Arrays.toString(a));
              }
          }
        `, answer: '[50, 40, 30, 20, 10]', explain: "Two swaps (10 with 50, 20 with 40). The middle value 30 does not move." },
        { t: 'output', q: "What is the output? (This is a rotation to the <b>right</b>.)", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] a = {1, 2, 3, 4};
                  int last = a[a.length - 1];
                  for (int i = a.length - 1; i > 0; i--) {
                      a[i] = a[i - 1];
                  }
                  a[0] = last;
                  System.out.println(Arrays.toString(a));
              }
          }
        `, answer: '[4, 1, 2, 3]', explain: "The last value is saved, every other value moves one box right (going backwards), and the saved 4 goes to box 0." },
        { t: 'order', q: "Arrange the lines that insert <code>value</code> at <code>pos</code> in a partially filled array.", lines: [
          'for (int i = count; i > pos; i--) {',
          '    a[i] = a[i - 1];',
          '}',
          'a[pos] = value;',
          'count++;'
        ], explain: "Make the gap first (shift right from the end), then fill it, then count the new value." },
        { t: 'bug', q: "The program should reverse the array and print <code>[4, 3, 2, 1]</code>. It prints <code>[1, 2, 3, 4]</code>. Tap the line with the bug.",
          qAr: "المصفوفة لم تنعكس. أين الخطأ؟",
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[] a = {1, 2, 3, 4};
                    for (int i = 0; i < a.length; i++) {
                        int temp = a[i];
                        a[i] = a[a.length - 1 - i];
                        a[a.length - 1 - i] = temp;
                    }
                    System.out.println(Arrays.toString(a));
                }
            }
          `, bug: 6,
          fix: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[] a = {1, 2, 3, 4};
                    for (int i = 0; i < a.length / 2; i++) {
                        int temp = a[i];
                        a[i] = a[a.length - 1 - i];
                        a[a.length - 1 - i] = temp;
                    }
                    System.out.println(Arrays.toString(a));
                }
            }
          `,
          hint: "After i = 1 the array is already reversed. What do rounds 2 and 3 do?",
          explain: "The first two rounds reverse the array, and the last two rounds swap the same pairs back. Stop in the middle: <code>i &lt; a.length / 2</code>.",
          explainAr: "التكرار على كامل المصفوفة يعكسها مرتين فتعود كما كانت." },
        { t: 'bug', q: "The program should insert 50 at position 1 and print <code>30 50 60 90</code>. It prints <code>30 50 60 60</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] a = {30, 60, 90, 0, 0};
                    int count = 3;
                    int pos = 1;
                    for (int i = pos; i < count; i++) {
                        a[i + 1] = a[i];
                    }
                    a[pos] = 50;
                    count++;
                    for (int i = 0; i < count; i++) System.out.print(a[i] + " ");
                    System.out.println();
                }
            }
          `, bug: [6, 7],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] a = {30, 60, 90, 0, 0};
                    int count = 3;
                    int pos = 1;
                    for (int i = count; i > pos; i--) {
                        a[i] = a[i - 1];
                    }
                    a[pos] = 50;
                    count++;
                    for (int i = 0; i < count; i++) System.out.print(a[i] + " ");
                    System.out.println();
                }
            }
          `,
          hint: "Trace the loop: after <code>a[2] = a[1];</code>, where is 90?",
          explain: "Going forwards, <code>a[2] = a[1]</code> overwrites 90 before it has moved, and then 60 is copied again into box 3. Shift from the end backwards: <code>for (int i = count; i &gt; pos; i--) a[i] = a[i - 1];</code>." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> integers, then a position <code>p</code> (0 to n) and a value <code>v</code>. Store the numbers in an array of size <code>n + 1</code>, insert <code>v</code> at position <code>p</code> by shifting, and print all <code>n + 1</code> numbers separated by single spaces. No prompts.",
          qAr: "أدرج{{g:|ي}} قيمة في موضع معيّن بإزاحة العناصر لليمين.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n + 1];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    int p = input.nextInt();
                    int v = input.nextInt();
                    // shift right from the end, insert v, print n + 1 numbers
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[] a = new int[n + 1];
                    for (int i = 0; i < n; i++) {
                        a[i] = input.nextInt();
                    }
                    int p = input.nextInt();
                    int v = input.nextInt();
                    for (int i = n; i > p; i--) {
                        a[i] = a[i - 1];
                    }
                    a[p] = v;
                    for (int i = 0; i <= n; i++) {
                        if (i > 0) System.out.print(" ");
                        System.out.print(a[i]);
                    }
                    System.out.println();
                }
            }
          `,
          tests: [ { stdin: '4\n10 20 40 50\n2 30', expected: '10 20 30 40 50' }, { stdin: '3\n5 6 7\n0 4', expected: '4 5 6 7' }, { stdin: '2\n1 2\n2 3', expected: '1 2 3' } ],
          hint: "Here count is n. Shift with for (int i = n; i > p; i--) a[i] = a[i - 1]; then a[p] = v.",
          explain: "The array was made one box bigger, so there is room for the gap. Shifting from the end keeps every value." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> integers, then a value <code>x</code>. Remove <b>every</b> <code>x</code> from the array, keeping the order of the others, and print what is left separated by single spaces. If nothing is left, print <code>Empty</code>. No prompts.",
          qAr: "احذف{{g:|ي}} كل القيم المساوية لـ x مع الحفاظ على ترتيب الباقي.",
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
                    int x = input.nextInt();
                    int count = 0;
                    // keep the values that are not x at the front of the array
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
                    int x = input.nextInt();
                    int count = 0;
                    for (int i = 0; i < n; i++) {
                        if (a[i] != x) {
                            a[count] = a[i];
                            count++;
                        }
                    }
                    if (count == 0) {
                        System.out.println("Empty");
                    } else {
                        for (int i = 0; i < count; i++) {
                            if (i > 0) System.out.print(" ");
                            System.out.print(a[i]);
                        }
                        System.out.println();
                    }
                }
            }
          `,
          tests: [ { stdin: '6\n4 7 4 1 4 9\n4', expected: '7 1 9' }, { stdin: '3\n2 2 2\n2', expected: 'Empty' }, { stdin: '3\n1 2 3\n5', expected: '1 2 3' } ],
          hint: "Use count as the next free box: every value that is not x is copied to a[count], then count++. At the end only boxes 0 to count - 1 matter.",
          explain: "This is a partially filled array built inside the same array: <code>count</code> grows only for the values we keep." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 16 (new)
    {
      title: 'Project: a class marks analyser',
      titleAr: 'مشروع: محلل درجات الشعبة',
      minutes: 30,
      body: [
        { type: 'h', en: 'The project' },
        { type: 'p', en: "Time to use the whole unit in one real program. A teacher types the number of students, and then one line per student: a first name and a mark. The program prints the class average, the top student, how many students got each letter grade, and a ranking from the highest mark to the lowest. Here is a sample run:",
          ar: "مشروع يجمع الوحدة كلها: متوسط الشعبة، الأول، عدد كل تقدير، وترتيب الطلاب." },
        { type: 'code', code: J`
          Input:                 Output:
          6                      Average: 76.33
          Sara 88                Highest: Nora (95)
          Ali 72                 A: 1
          Nora 95                B: 2
          Omar 55                C: 1
          Huda 81                D: 1
          Faisal 67              F: 1
                                 Ranking:
                                 1. Nora 95 A
                                 2. Sara 88 B
                                 ...
        ` },
        { type: 'p', en: "A big program is easy to get lost in, so we split it into small <b>methods</b>, each with one clear job. <code>main</code> only calls them in order. Each method is short enough to test alone." },
        { type: 'analogy', title: 'A kitchen with stations', en: "In a restaurant kitchen, one cook cuts, one grills and one makes the salad. The head chef does not cook everything; he calls each station at the right time. <code>main</code> is the head chef, and every method is a station with one job.",
          ar: "main مثل رئيس المطبخ، وكل دالة محطة لها عمل واحد." },
        { type: 'table', head: ['Method', 'Receives', 'Returns', 'Job'], rows: [
          ['<code>readData</code>', 'Scanner, names, marks', 'nothing', 'fills both arrays'],
          ['<code>average</code>', 'marks', '<code>double</code>', 'the class average'],
          ['<code>maxIndex</code>', 'marks', '<code>int</code>', 'index of the highest mark'],
          ['<code>letter</code>', 'one mark', '<code>char</code>', 'A, B, C, D or F'],
          ['<code>gradeCounts</code>', 'marks', '<code>int[]</code>', 'how many A, B, C, D, F'],
          ['<code>sortByMark</code>', 'names, marks', 'nothing', 'sorts both arrays, highest first']
        ] },
        { type: 'h', en: 'Part 1: reading the data in a method' },
        { type: 'p', en: "<code>main</code> creates the two parallel arrays with the size <code>n</code>. <code>readData</code> fills them. It needs the Scanner, so we pass it as a parameter. A Scanner is an object, so the method gets an arrow to the same Scanner, just like with arrays." },
        { type: 'code', code: J`
          public static void readData(Scanner input, String[] names, int[] marks) {
              for (int i = 0; i < names.length; i++) {
                  names[i] = input.next();
                  marks[i] = input.nextInt();
              }
          }
        ` },
        { type: 'lines', rows: [
          ['Scanner input', 'The same Scanner object that <code>main</code> created.'],
          ['String[] names, int[] marks', 'Arrows to the arrays of <code>main</code>. Filling their boxes here fills them for <code>main</code>.'],
          ['input.next(); input.nextInt();', 'One name and one mark per round, into the same index.']
        ], ar: "الدالة تملأ صناديق مصفوفتي main لأنها تستقبل سهمين إليهما." },
        { type: 'check', q: "<code>readData</code> returns nothing. How does <code>main</code> get the names?", options: ['The method fills the boxes of the same arrays that main created', 'It cannot; the method must return them', 'Java copies the arrays back at the end', 'Through a global variable'], answer: 0,
          explain: "The parameters are copies of the arrows, so they point to <code>main</code>'s array objects. Changing their boxes is seen by <code>main</code>." },
        { type: 'h', en: 'Part 2: the average and the top student' },
        { type: 'p', en: "These are the sum pattern and the champion-index pattern from Lesson 4, each in its own method." },
        { type: 'code', code: J`
          public static double average(int[] marks) {
              int sum = 0;
              for (int m : marks) {
                  sum += m;
              }
              return (double) sum / marks.length;
          }

          public static int maxIndex(int[] marks) {
              int best = 0;
              for (int i = 1; i < marks.length; i++) {
                  if (marks[i] > marks[best]) {
                      best = i;
                  }
              }
              return best;
          }
        ` },
        { type: 'h', en: 'Part 3: letter grades and counting them' },
        { type: 'p', en: "<code>letter</code> turns one mark into a letter. The tests go from the <b>highest</b> grade down, so the first true test gives the right letter: 85 fails <code>&gt;= 90</code> but passes <code>&gt;= 80</code>, so it is B." },
        { type: 'code', code: J`
          public static char letter(int mark) {
              if (mark >= 90) {
                  return 'A';
              } else if (mark >= 80) {
                  return 'B';
              } else if (mark >= 70) {
                  return 'C';
              } else if (mark >= 60) {
                  return 'D';
              } else {
                  return 'F';
              }
          }
        ` },
        { type: 'p', en: "To count the letters we use a frequency array of 5 counters. Which box? The String <code>&quot;ABCDF&quot;</code> holds the letters in order, and <code>indexOf</code> (Unit 4) tells us the position of a letter in it: A is 0, B is 1, … F is 4." },
        { type: 'code', code: J`
          public static int[] gradeCounts(int[] marks) {
              int[] counts = new int[5];
              String letters = "ABCDF";
              for (int m : marks) {
                  counts[letters.indexOf(letter(m))]++;
              }
              return counts;
          }
        ` },
        { type: 'table', head: ['mark', 'letter(mark)', 'indexOf in &quot;ABCDF&quot;', 'box increased'], rows: [
          ['95', 'A', '0', '<code>counts[0]</code>'], ['81', 'B', '1', '<code>counts[1]</code>'], ['67', 'D', '3', '<code>counts[3]</code>'], ['55', 'F', '4', '<code>counts[4]</code>']
        ] },
        { type: 'check', q: "What is <code>&quot;ABCDF&quot;.indexOf('C')</code>?", options: ['1', '2', '3', '-1'], answer: 1,
          explain: "A is at 0, B at 1, C at 2." },
        { type: 'h', en: 'Part 4: sorting both arrays together' },
        { type: 'p', en: "For the ranking we sort from the highest mark to the lowest: selection sort that <i>selects the largest</i> (Lesson 10). Because the arrays are parallel, every swap of two marks is followed by the same swap of the two names (Lesson 13)." },
        { type: 'code', code: J`
          public static void sortByMark(String[] names, int[] marks) {
              for (int i = 0; i < marks.length - 1; i++) {
                  int maxI = i;
                  for (int j = i + 1; j < marks.length; j++) {
                      if (marks[j] > marks[maxI]) {
                          maxI = j;
                      }
                  }
                  int tempMark = marks[i];
                  marks[i] = marks[maxI];
                  marks[maxI] = tempMark;
                  String tempName = names[i];
                  names[i] = names[maxI];
                  names[maxI] = tempName;
              }
          }
        ` },
        { type: 'memory', title: 'One pass: swap the marks, then swap the names', en: "Three students: Sara 88, Ali 72, Nora 95. In pass 0 the largest mark is at index 2.",
          frames: [
            { label: 'Before the swap: <code>i = 0</code>, <code>maxI = 2</code>', vars: [{ name: 'names', type: 'String[]', ref: 'A' }, { name: 'marks', type: 'int[]', ref: 'B' }, { name: 'i', type: 'int', value: '0' }, { name: 'maxI', type: 'int', value: '2' }], objects: [
              { id: 'A', cls: 'String[] length 3', fields: [{ name: '[0]', value: '"Sara"' }, { name: '[1]', value: '"Ali"' }, { name: '[2]', value: '"Nora"' }] },
              { id: 'B', cls: 'int[] length 3', fields: [{ name: '[0]', value: '88' }, { name: '[1]', value: '72' }, { name: '[2]', value: '95' }] }
            ] },
            { label: 'After the three mark lines: the pairs are broken for a moment', vars: [{ name: 'names', type: 'String[]', ref: 'A' }, { name: 'marks', type: 'int[]', ref: 'B' }, { name: 'i', type: 'int', value: '0' }, { name: 'maxI', type: 'int', value: '2' }], objects: [
              { id: 'A', cls: 'String[] length 3', fields: [{ name: '[0]', value: '"Sara"' }, { name: '[1]', value: '"Ali"' }, { name: '[2]', value: '"Nora"' }] },
              { id: 'B', cls: 'int[] length 3', fields: [{ name: '[0]', value: '95' }, { name: '[1]', value: '72' }, { name: '[2]', value: '88' }] }
            ] },
            { label: 'After the three name lines: Nora 95 and Sara 88 are together again', vars: [{ name: 'names', type: 'String[]', ref: 'A' }, { name: 'marks', type: 'int[]', ref: 'B' }, { name: 'i', type: 'int', value: '0' }, { name: 'maxI', type: 'int', value: '2' }], objects: [
              { id: 'A', cls: 'String[] length 3', fields: [{ name: '[0]', value: '"Nora"' }, { name: '[1]', value: '"Ali"' }, { name: '[2]', value: '"Sara"' }] },
              { id: 'B', cls: 'int[] length 3', fields: [{ name: '[0]', value: '95' }, { name: '[1]', value: '72' }, { name: '[2]', value: '88' }] }
            ] }
          ],
          ar: "كل تبديل للدرجات يتبعه التبديل نفسه للأسماء حتى تبقى الأزواج صحيحة." },
        { type: 'check', q: "Why does <code>sortByMark</code> need two <code>temp</code> variables?", options: ['One is an int for the marks, the other a String for the names', 'Because Java needs two for every swap', 'To make it faster', 'It does not; one is enough'], answer: 0,
          explain: "The marks are <code>int</code> and the names are <code>String</code>, so each swap needs a helper of its own type." },
        { type: 'steps', title: 'Worked example: the whole analyser', problem: "Put the six methods together. <code>main</code> reads <code>n</code>, creates the arrays, and calls the methods in order to print the full report.",
          steps: [
            { en: "Create the arrays and fill them.", code: J`
              int n = input.nextInt();
              String[] names = new String[n];
              int[] marks = new int[n];
              readData(input, names, marks);
            ` },
            { en: "Average and top student, <b>before</b> sorting (both work on any order).", code: J`
              System.out.printf("Average: %.2f%n", average(marks));
              int top = maxIndex(marks);
              System.out.println("Highest: " + names[top] + " (" + marks[top] + ")");
            ` },
            { en: "Store the array that <code>gradeCounts</code> returns, and print one line per letter.", code: J`
              int[] counts = gradeCounts(marks);
              String letters = "ABCDF";
              for (int g = 0; g < counts.length; g++) {
                  System.out.println(letters.charAt(g) + ": " + counts[g]);
              }
            ` },
            { en: "Sort both arrays and print the ranking with the position, name, mark and letter. Complete program:" }
          ],
          stdin: '6\nSara 88\nAli 72\nNora 95\nOmar 55\nHuda 81\nFaisal 67',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    String[] names = new String[n];
                    int[] marks = new int[n];
                    readData(input, names, marks);

                    System.out.printf("Average: %.2f%n", average(marks));
                    int top = maxIndex(marks);
                    System.out.println("Highest: " + names[top] + " (" + marks[top] + ")");

                    int[] counts = gradeCounts(marks);
                    String letters = "ABCDF";
                    for (int g = 0; g < counts.length; g++) {
                        System.out.println(letters.charAt(g) + ": " + counts[g]);
                    }

                    sortByMark(names, marks);
                    System.out.println("Ranking:");
                    for (int i = 0; i < n; i++) {
                        System.out.println((i + 1) + ". " + names[i] + " " + marks[i] + " " + letter(marks[i]));
                    }
                }

                public static void readData(Scanner input, String[] names, int[] marks) {
                    for (int i = 0; i < names.length; i++) {
                        names[i] = input.next();
                        marks[i] = input.nextInt();
                    }
                }

                public static double average(int[] marks) {
                    int sum = 0;
                    for (int m : marks) {
                        sum += m;
                    }
                    return (double) sum / marks.length;
                }

                public static int maxIndex(int[] marks) {
                    int best = 0;
                    for (int i = 1; i < marks.length; i++) {
                        if (marks[i] > marks[best]) {
                            best = i;
                        }
                    }
                    return best;
                }

                public static char letter(int mark) {
                    if (mark >= 90) {
                        return 'A';
                    } else if (mark >= 80) {
                        return 'B';
                    } else if (mark >= 70) {
                        return 'C';
                    } else if (mark >= 60) {
                        return 'D';
                    } else {
                        return 'F';
                    }
                }

                public static int[] gradeCounts(int[] marks) {
                    int[] counts = new int[5];
                    String letters = "ABCDF";
                    for (int m : marks) {
                        counts[letters.indexOf(letter(m))]++;
                    }
                    return counts;
                }

                public static void sortByMark(String[] names, int[] marks) {
                    for (int i = 0; i < marks.length - 1; i++) {
                        int maxI = i;
                        for (int j = i + 1; j < marks.length; j++) {
                            if (marks[j] > marks[maxI]) {
                                maxI = j;
                            }
                        }
                        int tempMark = marks[i];
                        marks[i] = marks[maxI];
                        marks[maxI] = tempMark;
                        String tempName = names[i];
                        names[i] = names[maxI];
                        names[maxI] = tempName;
                    }
                }
            }
          `, out: J`
            Average: 76.33
            Highest: Nora (95)
            A: 1
            B: 2
            C: 1
            D: 1
            F: 1
            Ranking:
            1. Nora 95 A
            2. Sara 88 B
            3. Huda 81 B
            4. Ali 72 C
            5. Faisal 67 D
            6. Omar 55 F
          `, ar: "main يستدعي الدوال بالترتيب، وكل دالة تؤدي عملًا واحدًا." },
        { type: 'steps', title: 'Worked example: test each method alone first', problem: "Before you trust the whole program, test the small methods with values you can check by hand: <code>letter</code> at the edges (90, 89, 60, 59) and <code>gradeCounts</code> on a short array.",
          steps: [
            { en: "The edges are where mistakes hide: 90 must be A, but 89 must be B.", code: J`System.out.println(letter(90) + " " + letter(89) + " " + letter(60) + " " + letter(59));` },
            { en: "For {95, 91, 75, 40, 88} we expect 2 A, 1 B, 1 C, 0 D and 1 F.", code: J`System.out.println(Arrays.toString(gradeCounts(new int[]{95, 91, 75, 40, 88})));` },
            { en: "If the printed answers match your hand work, the methods are ready to be used in the big program. Complete test program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    System.out.println(letter(90) + " " + letter(89) + " " + letter(60) + " " + letter(59));
                    System.out.println(Arrays.toString(gradeCounts(new int[]{95, 91, 75, 40, 88})));
                }

                public static char letter(int mark) {
                    if (mark >= 90) {
                        return 'A';
                    } else if (mark >= 80) {
                        return 'B';
                    } else if (mark >= 70) {
                        return 'C';
                    } else if (mark >= 60) {
                        return 'D';
                    } else {
                        return 'F';
                    }
                }

                public static int[] gradeCounts(int[] marks) {
                    int[] counts = new int[5];
                    String letters = "ABCDF";
                    for (int m : marks) {
                        counts[letters.indexOf(letter(m))]++;
                    }
                    return counts;
                }
            }
          `, out: J`
            A B D F
            [2, 1, 1, 0, 1]
          `, ar: "اختبر{{g:|ي}} كل دالة وحدها بقيم تعرف{{g:|ين}} نتيجتها قبل جمعها في برنامج كبير." },
        { type: 'note', kind: 'tip', en: "Good test inputs for any marks program: only one student; two students with the same mark; a mark of exactly 90, 80, 70 or 60; a 100 and a 0. If your program survives these, it is probably right.",
          ar: "جرّب{{g:|ي}} حالات خاصة: طالب واحد، درجات متساوية، والدرجات على الحدود." }
      ],
      mistakes: [
        { title: 'Testing the letter grades from the bottom', en: "If the first test is <code>mark &gt;= 60</code>, then 95 also passes it and gets D. Test from the highest grade down.", code: J`
          if (mark >= 60) return 'D';        // WRONG order: 95 becomes D
          else if (mark >= 90) return 'A';
        `, ar: "ابدأ{{g:|ي}} بالتقدير الأعلى." },
        { title: 'Swapping only the marks', en: "The ranking then prints wrong names next to the marks. Every swap must happen in both parallel arrays.", code: J`
          int tempMark = marks[i];
          marks[i] = marks[maxI];
          marks[maxI] = tempMark;
          // WRONG: the names were not swapped
        ` },
        { title: 'Integer division in average', en: "The return type <code>double</code> does not help if the division is done with two ints.", code: J`
          return sum / marks.length;              // WRONG: 76.0 instead of 76.33
          return (double) sum / marks.length;     // correct
        ` },
        { title: 'Ignoring the returned array', en: "<code>gradeCounts</code> builds a new array and returns it. If you do not store it, it is lost.", code: J`
          gradeCounts(marks);                  // WRONG: the result is thrown away
          int[] counts = gradeCounts(marks);   // correct
        ` }
      ],
      remember: [
        "Split a big program into small methods with one job each; <code>main</code> calls them in order.",
        "A method can fill arrays that <code>main</code> created (it gets arrows to them).",
        "Letter grades: test from the highest grade down with <code>else if</code>.",
        "Count letters with a frequency array and <code>&quot;ABCDF&quot;.indexOf(letter)</code>.",
        "Sorting parallel arrays: every swap is done in both arrays.",
        "Test each method alone with values you can check by hand."
      ],
      rememberAr: "قسّم{{g:|ي}} البرنامج إلى دوال صغيرة. الدالة تملأ مصفوفات main. التقديرات من الأعلى إلى الأدنى. عند ترتيب المصفوفات المتوازية بدّل{{g:|ي}} في الاثنتين.",
      practice: [
        { t: 'mcq', q: "Which header fits a method that counts how many students got each of the 5 letter grades?", options: ['<code>public static int gradeCounts(int[] marks)</code>', '<code>public static int[] gradeCounts(int[] marks)</code>', '<code>public static void gradeCounts(int marks)</code>', '<code>public static char[] gradeCounts(int[] marks)</code>'], answer: 1,
          explain: "It needs all the marks (<code>int[]</code>) and gives back 5 counters, so it returns an <code>int[]</code>." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println(letter(100) + " " + letter(80) + " " + letter(79) + " " + letter(0));
              }

              public static char letter(int mark) {
                  if (mark >= 90) {
                      return 'A';
                  } else if (mark >= 80) {
                      return 'B';
                  } else if (mark >= 70) {
                      return 'C';
                  } else if (mark >= 60) {
                      return 'D';
                  } else {
                      return 'F';
                  }
              }
          }
        `, answer: 'A B C F', explain: "100 → A; 80 passes <code>&gt;= 80</code> → B; 79 fails it but passes <code>&gt;= 70</code> → C; 0 → F." },
        { t: 'output', q: "What is the output?", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[] marks = {91, 64, 70, 58, 99, 85};
                  int[] counts = new int[5];
                  String letters = "ABCDF";
                  for (int m : marks) {
                      char g = 'F';
                      if (m >= 90) g = 'A';
                      else if (m >= 80) g = 'B';
                      else if (m >= 70) g = 'C';
                      else if (m >= 60) g = 'D';
                      counts[letters.indexOf(g)]++;
                  }
                  System.out.println(Arrays.toString(counts));
              }
          }
        `, answer: '[2, 1, 1, 1, 1]', explain: "91 and 99 are A; 85 is B; 70 is C; 64 is D; 58 is F." },
        { t: 'fill', q: "Complete the name swap inside <code>sortByMark</code>.", code: J`
          String tempName = names[i];
          names[i] = ___;
          names[maxI] = ___;
        `, answers: ['names[maxI]', 'tempName'], explain: "The same three moves as the mark swap, with a String helper." },
        { t: 'bug', q: "The program should print <code>A B</code>, but it prints <code>D D</code>. Tap the line with the bug.",
          qAr: "كل التقديرات تخرج D. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    System.out.println(letter(95) + " " + letter(85));
                }

                public static char letter(int mark) {
                    if (mark >= 60) return 'D';
                    else if (mark >= 70) return 'C';
                    else if (mark >= 80) return 'B';
                    else if (mark >= 90) return 'A';
                    else return 'F';
                }
            }
          `, bug: 7,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    System.out.println(letter(95) + " " + letter(85));
                }

                public static char letter(int mark) {
                    if (mark >= 90) return 'A';
                    else if (mark >= 80) return 'B';
                    else if (mark >= 70) return 'C';
                    else if (mark >= 60) return 'D';
                    else return 'F';
                }
            }
          `,
          hint: "Which test is checked first, and does 95 pass it?",
          explain: "Java checks the tests from the top and stops at the first true one. 95 and 85 are both <code>&gt;= 60</code>, so the first line returns D for them, and the other lines are never reached. Test from the highest grade down.",
          explainAr: "رتّب{{g:|ي}} الشروط من التقدير الأعلى إلى الأدنى." },
        { t: 'bug', q: "The marks add up to 458 for 6 students, so the program should print <code>Average: 76.33</code>. It prints <code>Average: 76.00</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[] marks = {88, 72, 95, 55, 81, 67};
                    System.out.printf("Average: %.2f%n", average(marks));
                }

                public static double average(int[] marks) {
                    int sum = 0;
                    for (int m : marks) {
                        sum += m;
                    }
                    return sum / marks.length;
                }
            }
          `, bug: 12,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[] marks = {88, 72, 95, 55, 81, 67};
                    System.out.printf("Average: %.2f%n", average(marks));
                }

                public static double average(int[] marks) {
                    int sum = 0;
                    for (int m : marks) {
                        sum += m;
                    }
                    return (double) sum / marks.length;
                }
            }
          `,
          hint: "What types are <code>sum</code> and <code>marks.length</code>?",
          explain: "458 / 6 with two ints is 76; the decimals are lost <b>before</b> the value becomes a <code>double</code>. Cast first: <code>(double) sum / marks.length</code> gives 76.333…" },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> lines with a first name and a mark. Write two methods, <code>public static int minIndex(int[] marks)</code> and <code>public static int countBelow(int[] marks, int limit)</code>, and use them to print <code>Lowest: NAME (MARK)</code> (the first one if there is a tie) and <code>Below 60: K</code>. No prompts.",
          qAr: "اكتب{{g:|ي}} دالتين: فهرس أقل درجة، وعدد الدرجات تحت حد معيّن.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    String[] names = new String[n];
                    int[] marks = new int[n];
                    for (int i = 0; i < n; i++) {
                        names[i] = input.next();
                        marks[i] = input.nextInt();
                    }
                    // use minIndex and countBelow
                }

                public static int minIndex(int[] marks) {
                    return 0;
                }

                public static int countBelow(int[] marks, int limit) {
                    return 0;
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    String[] names = new String[n];
                    int[] marks = new int[n];
                    for (int i = 0; i < n; i++) {
                        names[i] = input.next();
                        marks[i] = input.nextInt();
                    }
                    int low = minIndex(marks);
                    System.out.println("Lowest: " + names[low] + " (" + marks[low] + ")");
                    System.out.println("Below 60: " + countBelow(marks, 60));
                }

                public static int minIndex(int[] marks) {
                    int low = 0;
                    for (int i = 1; i < marks.length; i++) {
                        if (marks[i] < marks[low]) {
                            low = i;
                        }
                    }
                    return low;
                }

                public static int countBelow(int[] marks, int limit) {
                    int count = 0;
                    for (int m : marks) {
                        if (m < limit) {
                            count++;
                        }
                    }
                    return count;
                }
            }
          `,
          tests: [ { stdin: '6\nSara 88\nAli 72\nNora 95\nOmar 55\nHuda 81\nFaisal 67', expected: 'Lowest: Omar (55)\nBelow 60: 1' }, { stdin: '3\nReem 40\nLama 40\nNouf 59', expected: 'Lowest: Reem (40)\nBelow 60: 3' }, { stdin: '1\nHessa 100', expected: 'Lowest: Hessa (100)\nBelow 60: 0' } ],
          hint: "minIndex is the champion pattern with &lt; that returns the index. countBelow is a counter with the test m &lt; limit.",
          explain: "Small methods with one job each: one returns a position, the other a count. <code>main</code> uses the position in both parallel arrays." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> lines with a first name and a mark (all marks are different). Sort both arrays from the <b>lowest</b> mark to the highest, keeping each name with its mark, and print one line per student: <code>NAME MARK LETTER</code> (A ≥ 90, B ≥ 80, C ≥ 70, D ≥ 60, otherwise F). No prompts.",
          qAr: "رتّب{{g:|ي}} المصفوفتين تصاعديًا مع الحفاظ على الأزواج، واطبع التقدير.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    String[] names = new String[n];
                    int[] marks = new int[n];
                    for (int i = 0; i < n; i++) {
                        names[i] = input.next();
                        marks[i] = input.nextInt();
                    }
                    // sort both arrays (lowest first), then print NAME MARK LETTER
                }

                public static char letter(int mark) {
                    return 'F';
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    String[] names = new String[n];
                    int[] marks = new int[n];
                    for (int i = 0; i < n; i++) {
                        names[i] = input.next();
                        marks[i] = input.nextInt();
                    }
                    for (int i = 0; i < n - 1; i++) {
                        int minI = i;
                        for (int j = i + 1; j < n; j++) {
                            if (marks[j] < marks[minI]) {
                                minI = j;
                            }
                        }
                        int tempMark = marks[i];
                        marks[i] = marks[minI];
                        marks[minI] = tempMark;
                        String tempName = names[i];
                        names[i] = names[minI];
                        names[minI] = tempName;
                    }
                    for (int i = 0; i < n; i++) {
                        System.out.println(names[i] + " " + marks[i] + " " + letter(marks[i]));
                    }
                }

                public static char letter(int mark) {
                    if (mark >= 90) {
                        return 'A';
                    } else if (mark >= 80) {
                        return 'B';
                    } else if (mark >= 70) {
                        return 'C';
                    } else if (mark >= 60) {
                        return 'D';
                    } else {
                        return 'F';
                    }
                }
            }
          `,
          tests: [ { stdin: '4\nSara 88\nAli 72\nNora 95\nOmar 55', expected: 'Omar 55 F\nAli 72 C\nSara 88 B\nNora 95 A' }, { stdin: '2\nHuda 60\nLama 59', expected: 'Lama 59 F\nHuda 60 D' }, { stdin: '1\nReem 90', expected: 'Reem 90 A' } ],
          hint: "Selection sort with minI and &lt;. After swapping the marks, swap the names with the same i and minI. Then write letter() with else if from A down.",
          explain: "This combines three ideas of the unit: selection sort, parallel arrays kept in step, and a method that returns a char." }
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
    { t: 'mcq', q: "Binary search needs the array to be…", options: ['Sorted', 'Of even length', 'Full of positive numbers', 'Copied first'], answer: 0, explain: "Only a sorted array can be halved." },
    { t: 'output', q: "What is the output? (Parallel arrays and a frequency array.)", code: J`
      public class Main {
          public static void main(String[] args) {
              String[] names = {"Ali", "Sara", "Nora", "Huda"};
              int[] marks = {70, 92, 85, 98};
              int[] counts = new int[11];
              int best = 0;
              for (int i = 0; i < marks.length; i++) {
                  counts[marks[i] / 10]++;
                  if (marks[i] > marks[best]) best = i;
              }
              System.out.println(names[best] + " " + counts[9] + " " + counts[8]);
          }
      }
    `, answer: 'Huda 2 1', explain: "The highest mark (98) is at index 3, so the name is Huda. 92 and 98 go to box 9 (two marks), and 85 goes to box 8 (one mark)." },
    { t: 'bug', q: "The bus has room for 5 groups, but only 2 groups have booked. The program should print <code>12 7</code>. It prints <code>12 7 0 0 0</code>. Tap the line with the bug.",
      code: J`
        public class Main {
            public static void main(String[] args) {
                int[] seats = new int[5];
                int count = 0;
                seats[count] = 12; count++;
                seats[count] = 7; count++;
                for (int i = 0; i < seats.length; i++) {
                    System.out.print(seats[i] + " ");
                }
                System.out.println();
            }
        }
      `, bug: 7,
      fix: J`
        public class Main {
            public static void main(String[] args) {
                int[] seats = new int[5];
                int count = 0;
                seats[count] = 12; count++;
                seats[count] = 7; count++;
                for (int i = 0; i < count; i++) {
                    System.out.print(seats[i] + " ");
                }
                System.out.println();
            }
        }
      `,
      hint: "How many boxes are really used?",
      explain: "In a partially filled array only boxes 0 to <code>count - 1</code> hold data. The loop goes to <code>seats.length</code> (5), so it also prints the three empty boxes. Stop at <code>count</code>." }
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
    { code: J`int t = a[i]; a[i] = a[j]; a[j] = t;`, note: 'Swap two elements' },
    { code: J`int best = 0; ... if (a[i] > a[best]) best = i;`, note: 'Keep the INDEX of the largest; the value is a[best]' },
    { code: J`for (int i = a.length - 1; i >= 0; i--)`, note: 'Visit the boxes backwards' },
    { code: J`Arrays.equals(a, b)`, note: 'Same values in the same order? (a == b only compares the arrows)' },
    { code: J`String[] names = new String[n];  names[i] = input.next();`, note: 'String array: boxes start as null; read one word per box' },
    { code: J`char[] letters = word.toCharArray();`, note: 'The letters of a String as a char array' },
    { code: J`names[best] + " " + marks[best]`, note: 'Parallel arrays: the same index is the same student' },
    { code: J`counts[value]++;   counts[c - 'a']++;   counts[mark / 10]++;`, note: 'Frequency array: the value chooses the counter' },
    { code: J`for (int i = 0; i < a.length / 2; i++) { swap a[i] and a[a.length - 1 - i] }`, note: 'Reverse in place' },
    { code: J`for (int i = count; i > pos; i--) a[i] = a[i - 1];  a[pos] = v;  count++;`, note: 'Insert into a partially filled array' },
    { code: J`for (int i = pos; i < count - 1; i++) a[i] = a[i + 1];  count--;`, note: 'Remove from a partially filled array' }
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
    { term: 'Insertion sort', ar: 'الترتيب بالإدراج', def: 'Builds a sorted part by inserting each new element into its correct place.' },
    { term: 'Array object', ar: 'كائن المصفوفة', def: 'The row of boxes built by new; the array variable only holds a reference (arrow) to it.' },
    { term: 'Alias', ar: 'اسم مستعار', def: 'A second variable that refers to the same array, for example after b = a.' },
    { term: 'Garbage', ar: 'كائن مهمل', def: 'An object that no variable refers to any more; Java removes it automatically.' },
    { term: 'Accumulator', ar: 'المُراكِم', def: 'A variable that collects a result little by little, such as sum += a[i].' },
    { term: 'Median', ar: 'الوسيط', def: 'The middle value of a sorted list.' },
    { term: 'null', ar: 'لا شيء (null)', def: 'The value of an object variable or String box that refers to nothing yet.' },
    { term: 'NullPointerException', ar: 'استثناء المؤشر الفارغ', def: 'Run-time error when a method is called on null, for example names[2].length() before the box is filled.' },
    { term: 'Parallel arrays', ar: 'المصفوفات المتوازية', def: 'Two or more arrays of the same length where the same index belongs to the same item, like names[i] and marks[i].' },
    { term: 'Frequency array', ar: 'مصفوفة التكرار', def: 'An array of counters where the value being counted is used as the index: counts[value]++.' },
    { term: 'Histogram', ar: 'المدرج التكراري', def: 'A picture of counts with one bar per group; here drawn with stars.' },
    { term: 'In place', ar: 'في المكان نفسه', def: 'Changing the same array (for example reversing it) without building a second array.' },
    { term: 'Rotate', ar: 'تدوير', def: 'Move every element one place, and the one that falls off one end goes to the other end.' },
    { term: 'Partially filled array', ar: 'مصفوفة ممتلئة جزئيًا', def: 'An array with a fixed capacity where only the first count boxes are used.' },
    { term: 'Capacity', ar: 'السعة', def: 'The number of boxes an array has (a.length), used or not.' }
  ]
});
