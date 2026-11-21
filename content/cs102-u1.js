JP.unit({
  course: 'cs102',
  n: 1,
  title: 'Two-Dimensional Arrays',
  titleAr: 'المصفوفات ثنائية الأبعاد',
  intro: "Many things come as tables: the marks of students in several quizzes, the sales of branches in each quarter, the seats of a cinema, or a timetable. A two-dimensional array keeps such a table in rows and columns. You already know one-dimensional arrays (one row of boxes). In small steps you will learn to create a table, visit every cell with nested loops, add up rows and columns, use rows of different lengths, pass tables to methods, and do matrix addition, transpose and multiplication. Then you will store names and letters in tables, search a table, walk through it in different orders, build a tic-tac-toe referee, and learn the difference between a shallow and a deep copy.",
  introAr: "كثير من البيانات تأتي على شكل جداول. المصفوفة ثنائية الأبعاد تخزّن الجدول في صفوف وأعمدة. ستتعلم بخطوات صغيرة إنشاءها ومعالجتها بالحلقات المتداخلة، والمصفوفات غير المنتظمة، وتمريرها للدوال، وعمليات المصفوفات الرياضية، ثم جداول الأسماء والحروف، والبحث في الجدول، ولعبة XO، والنسخ السطحي والعميق.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'A table of boxes: rows and columns',
      titleAr: 'جدول من الصناديق: صفوف وأعمدة',
      minutes: 40,
      body: [
        { type: 'h', en: 'From a row to a table' },
        { type: 'p', en: "A one-dimensional array is a single row of boxes. But a lot of real data is a <b>table</b>. A cinema hall has many rows of seats. A class has many students, and each student has marks in several quizzes. For this we need boxes arranged in <b>rows</b> and <b>columns</b>: a two-dimensional (2D) array.",
          ar: "المصفوفة ثنائية الأبعاد جدول من صفوف وأعمدة." },
        { type: 'p', en: "Why not use one 1D array for each quiz? Imagine 30 students and 5 quizzes. You would need five arrays: <code>quiz1</code>, <code>quiz2</code> … <code>quiz5</code>. A loop cannot move from <code>quiz1</code> to <code>quiz2</code>, because they are different names. And if the teacher adds a sixth quiz, you must change the program. A 2D array keeps the whole table under <b>one name</b>, and two numbers find any box. One name, one pair of loops, any size.",
          ar: "بدل خمس مصفوفات بأسماء مختلفة نستخدم اسمًا واحدًا، ونصل إلى أي خانة برقمين." },
        { type: 'analogy', title: 'A cinema hall', en: "To find your seat you need two numbers: the <b>row</b> and the <b>seat number in that row</b>. For example: row 2, seat 3. A 2D array works in the same way: every box has a row number and a column number. Both start from 0.",
          ar: "مثل مقعد السينما: نحتاج رقم الصف ورقم المقعد داخل الصف." },
        { type: 'h', en: 'Creating a table' },
        { type: 'code', code: J`
          int[][] seats = new int[3][4];
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int[][] seats', 'A variable for a table of <code>int</code>. Two pairs of brackets mean two dimensions.'],
          ['new int[3][4]', 'Build a table with <b>3 rows</b> (first number) and <b>4 columns</b> (second number). That is 3 × 4 = 12 boxes.']
        ], ar: "الرقم الأول عدد الصفوف والثاني عدد الأعمدة." },
        { type: 'code', code: J`
                  col 0  col 1  col 2  col 3
                +------+------+------+------+
          row 0 |  0   |  0   |  0   |  0   |
                +------+------+------+------+
          row 1 |  0   |  0   |  0   |  0   |
                +------+------+------+------+
          row 2 |  0   |  0   |  0   |  0   |
                +------+------+------+------+
        ` },
        { type: 'check', q: "How many boxes does <code>new int[2][5]</code> create?", options: ['7', '10', '25', '2'], answer: 1, explain: "2 rows × 5 columns = 10 boxes." },
        { type: 'p', en: "The boxes can have any type you know: <code>int</code>, <code>double</code>, <code>char</code>, <code>boolean</code> or <code>String</code>. Here is one more example: a week of temperatures in Riyadh. There are 7 days (rows) and 3 readings each day: morning, noon and night (columns)." },
        { type: 'code', code: J`
          double[][] temps = new double[7][3];
        ` },
        { type: 'lines', rows: [
          ['double[][] temps', 'A table of decimal numbers. The type of every box is <code>double</code>.'],
          ['new double[7][3]', '7 rows (one per day) and 3 columns (one per reading): 7 × 3 = 21 boxes.']
        ], ar: "يمكن أن يكون نوع الخانات double أو char أو String، والقاعدة نفسها: الصفوف أولًا ثم الأعمدة." },
        { type: 'note', kind: 'tip', en: "A new table is never really empty. Every box starts with a <b>default value</b>: <code>0</code> for <code>int</code>, <code>0.0</code> for <code>double</code> and <code>false</code> for <code>boolean</code>. (Later in this unit you will see that a table of <code>String</code> starts with <code>null</code>, which means &quot;no text yet&quot;.)",
          ar: "كل خانة جديدة تبدأ بقيمة افتراضية: 0 للأعداد الصحيحة و0.0 للعشرية." },
        { type: 'h', en: 'Using one box: [row][column]' },
        { type: 'p', en: "To reach one box write the table name, then the row in brackets, then the column in brackets: <code>seats[0][1]</code> means row 0, column 1. The <b>row always comes first</b>." },
        { type: 'code', code: J`
          seats[0][1] = 7;
          seats[2][3] = 9;
        ` },
        { type: 'code', code: J`
                  col 0  col 1  col 2  col 3
                +------+------+------+------+
          row 0 |  0   |  7   |  0   |  0   |
                +------+------+------+------+
          row 1 |  0   |  0   |  0   |  0   |
                +------+------+------+------+
          row 2 |  0   |  0   |  0   |  9   |
                +------+------+------+------+
        ` },
        { type: 'check', q: "In <code>seats[2][3]</code>, what is the <b>2</b>?", options: ['The column', 'The row', 'The value', 'The size'], answer: 1, explain: "The first index is always the row." },
        { type: 'p', en: "One box works exactly like a normal variable of its type. You can read it, print it, use it in a calculation, change it with <code>++</code> or <code>+=</code>, and compare it in an <code>if</code>. The only new thing is its name: two indexes instead of one." },
        { type: 'code', code: J`
          seats[1][0] = seats[0][1] + 1;   // 7 + 1 = 8
          seats[0][1]++;                   // row 0, column 1 is now 8
          seats[2][3] += 10;               // 9 + 10 = 19
        ` },
        { type: 'lines', rows: [
          ['seats[1][0] = seats[0][1] + 1;', 'Read box [0][1] (7), add 1, and store 8 in box [1][0].'],
          ['seats[0][1]++;', 'Add 1 to box [0][1]. Only this one box changes.'],
          ['seats[2][3] += 10;', 'Box [2][3] was 9; now it is 19.']
        ], ar: "الخانة الواحدة تُستعمل مثل أي متغير عادي: نقرؤها ونغيّرها ونحسب بها." },
        { type: 'h', en: 'How many rows? How many columns?' },
        { type: 'p', en: "Java sees a 2D array as a <b>row of rows</b>. So <code>seats.length</code> is the number of <b>rows</b>, and <code>seats[0].length</code> is the number of <b>columns</b> (the length of row 0). Remember: <code>length</code> has no brackets.",
          ar: "seats.length عدد الصفوف، وseats[0].length عدد الأعمدة." },
        { type: 'analogy', title: 'A building', en: "A building has floors, and each floor has rooms. <code>building.length</code> is the number of floors. <code>building[1]</code> is the whole second floor. <code>building[1].length</code> is the number of rooms on that floor.",
          ar: "المبنى فيه طوابق، وكل طابق فيه غرف: الجدول صفوف، وكل صف فيه أعمدة." },
        { type: 'memory', title: 'What <code>new int[3][4]</code> really builds', en: "Java does not build one big block of 12 boxes. It builds <b>one array of rows</b> (A) and <b>three row arrays</b> (B, C, D). The variable <code>seats</code> holds only an arrow to A. Press Next to see the boxes change.",
          code: J`
            int[][] seats = new int[3][4];
            seats[0][1] = 7;
            seats[2][3] = 9;
          `,
          frames: [
            { label: 'After <code>int[][] seats = new int[3][4];</code>', vars: [{ name: 'seats', type: 'int[][]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
              { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] },
              { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] },
              { id: 'D', cls: 'int[] row 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] }
            ] },
            { label: 'After <code>seats[0][1] = 7;</code> (row B, box 1)', vars: [{ name: 'seats', type: 'int[][]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
              { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '7' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] },
              { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] },
              { id: 'D', cls: 'int[] row 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] }
            ] },
            { label: 'After <code>seats[2][3] = 9;</code> (row D, box 3)', vars: [{ name: 'seats', type: 'int[][]', ref: 'A' }], objects: [
              { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
              { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '7' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] },
              { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] },
              { id: 'D', cls: 'int[] row 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '9' }] }
            ] }
          ], ar: "المتغير seats يشير إلى مصفوفة صفوف، وكل صف مصفوفة عادية مستقلة." },
        { type: 'p', en: "This is the most important picture of the unit. A 2D array is an <b>array of rows</b>, and every row is its own ordinary 1D array. Now the two lengths make sense: <code>seats.length</code> is the length of A (3 arrows, so 3 rows). <code>seats[0]</code> is the first arrow, which leads to row B, so <code>seats[0].length</code> is the length of B (4 boxes, so 4 columns).",
          ar: "seats.length طول مصفوفة الصفوف، وseats[0].length طول الصف الأول." },
        { type: 'p', en: "Follow how Java finds <code>seats[2][3]</code>, one step at a time, from left to right:" },
        { type: 'table', head: ['Step', 'Java reads', 'What it gets'], rows: [
          ['1', '<code>seats</code>', 'Follow the arrow to the array of rows A.'],
          ['2', '<code>seats[2]</code>', 'Box 2 of A: the arrow to row D (a whole row of 4 ints).'],
          ['3', '<code>seats[2][3]</code>', 'Box 3 of row D: the value 9.']
        ] },
        { type: 'check', q: "Look at the memory picture. What is <code>seats[1]</code>?", options: ['The number 0', 'A whole row (row C, an array of 4 ints)', 'The number of columns', 'A compile error'], answer: 1, explain: "One index gives a whole row. You need a second index to reach a single box, for example <code>seats[1][2]</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] seats = new int[3][4];
                  seats[0][1] = 7;
                  seats[2][3] = 9;
                  System.out.println("Rows: " + seats.length);
                  System.out.println("Columns: " + seats[0].length);
                  System.out.println(seats[0][1] + seats[2][3] + seats[1][1]);
              }
          }
        `, out: J`
          Rows: 3
          Columns: 4
          16
        ` },
        { type: 'lines', rows: [
          ['seats.length', '3: the number of rows.'],
          ['seats[0].length', '4: the number of columns in row 0.'],
          ['seats[0][1] + seats[2][3] + seats[1][1]', '7 + 9 + 0 = 16. The box [1][1] was never set, so it is 0.']
        ] },
        { type: 'check', q: "<code>double[][] t = new double[4][6];</code> What is <code>t[0].length</code>?", options: ['4', '6', '24', '10'], answer: 1, explain: "6 is the number of columns." },
        { type: 'steps', title: 'Worked example: a small timetable', problem: "A student has 2 days and 3 lessons per day. Store the room numbers in a table and print the room of day 2, lesson 3, and the size of the table.",
          steps: [
            { en: "2 days = 2 rows; 3 lessons = 3 columns.", code: "int[][] rooms = new int[2][3];" },
            { en: "Set some rooms. Row 0 is day 1, row 1 is day 2.", code: J`
              rooms[0][0] = 101;
              rooms[1][2] = 205;
            ` },
            { en: "Day 2, lesson 3 means row 1, column 2 (we start at 0).", code: J`System.out.println("Room: " + rooms[1][2]);` },
            { en: "Print the size.", code: J`System.out.println(rooms.length + " x " + rooms[0].length);` },
            { en: "Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] rooms = new int[2][3];
                    rooms[0][0] = 101;
                    rooms[1][2] = 205;
                    System.out.println("Room: " + rooms[1][2]);
                    System.out.println(rooms.length + " x " + rooms[0].length);
                }
            }
          `, out: J`
            Room: 205
            2 x 3
          `, ar: "اليوم الثاني هو الصف 1، والحصة الثالثة هي العمود 2." },
        { type: 'h', en: 'People count from 1, Java counts from 0' },
        { type: 'p', en: "People say &quot;team 3&quot; or &quot;row 1, seat 1&quot;. Java says row 2 or row 0. When a person gives you a number, <b>subtract 1</b> to get the index. When you print an index for a person, <b>add 1</b>. The next example uses this rule all the time." },
        { type: 'analogy', title: 'Floors in a building', en: "In many buildings the entrance floor is called the ground floor (0), and the next one is floor 1. A visitor who wants &quot;the first room&quot; really wants room 0 in Java. Keep two names in your head: the human number and the index.",
          ar: "الإنسان يعدّ من 1 وجافا تعدّ من 0: نطرح 1 عند القراءة ونضيف 1 عند الطباعة." },
        { type: 'steps', title: 'Worked example: a football league table', problem: "A school league has 4 teams. For each team we keep 3 numbers: wins, draws and losses. A win gives 3 points and a draw gives 1 point. Team 3 won 5 matches, drew 2 and lost 1. Print how many games team 3 played, its points, and the position and value of the last box in the table.",
          steps: [
            { en: "4 teams = 4 rows. 3 numbers per team = 3 columns: column 0 = wins, column 1 = draws, column 2 = losses.", code: "int[][] league = new int[4][3];" },
            { en: "Team 3 is <b>row 2</b> (subtract 1). Store its three numbers.", code: J`
              league[2][0] = 5;
              league[2][1] = 2;
              league[2][2] = 1;
            ` },
            { en: "Each box is used like a normal <code>int</code>. Points = wins × 3 + draws, and games = wins + draws + losses.", code: J`
              int points = league[2][0] * 3 + league[2][1];
              int played = league[2][0] + league[2][1] + league[2][2];
            ` },
            { en: "The last row is <code>league.length - 1</code> and the last column is <code>league[0].length - 1</code>. That box was never set, so it is still 0.", code: J`
              int lastRow = league.length - 1;
              int lastCol = league[0].length - 1;
            ` },
            { en: "Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] league = new int[4][3];
                    league[2][0] = 5;
                    league[2][1] = 2;
                    league[2][2] = 1;
                    int points = league[2][0] * 3 + league[2][1];
                    int played = league[2][0] + league[2][1] + league[2][2];
                    System.out.println("Team 3 played " + played + " games");
                    System.out.println("Team 3 points: " + points);
                    int lastRow = league.length - 1;
                    int lastCol = league[0].length - 1;
                    System.out.println("Last box: [" + lastRow + "][" + lastCol + "] = " + league[lastRow][lastCol]);
                }
            }
          `, out: J`
            Team 3 played 8 games
            Team 3 points: 17
            Last box: [3][2] = 0
          `, ar: "الفريق الثالث هو الصف 2، ونستعمل كل خانة مثل متغير عادي في الحساب." },
        { type: 'check', q: "A teacher says &quot;student 5, quiz 2&quot;. Which box is it in <code>marks</code>?", options: ['<code>marks[5][2]</code>', '<code>marks[4][1]</code>', '<code>marks[2][5]</code>', '<code>marks[1][4]</code>'], answer: 1, explain: "Subtract 1 from both human numbers, and keep the order: row (student) first, then column (quiz)." },
        { type: 'note', kind: 'exam', en: "For <code>int[][] m = new int[4][3];</code> the last box is <code>m[3][2]</code>, not <code>m[4][3]</code>. And <code>m.length()</code> with brackets does not compile." }
      ],
      mistakes: [
        { title: 'Swapping row and column', en: "The row comes first. <code>m[col][row]</code> reads the wrong box, or crashes if the table is not square.", code: J`
          int[][] m = new int[2][5];
          m[4][1] = 3;   // WRONG: there are only 2 rows
        ` },
        { title: 'Counting from 1', en: "The last row of a table with 3 rows is row 2.", code: J`
          int[][] m = new int[3][3];
          m[3][3] = 1;   // WRONG: valid are 0, 1, 2
        ` },
        { title: 'Using only one pair of brackets', en: "A table needs two index brackets.", code: J`
          System.out.println(seats[1]);   // prints an address, not a seat
        ` },
        { title: 'Mixing up length', en: "<code>m.length</code> is the number of rows, not the number of boxes.", code: J`
          int[][] m = new int[3][4];
          System.out.println(m.length);   // 3, not 12
        ` }
      ],
      remember: [
        "A 2D array is a table: <code>new type[rows][columns]</code>.",
        "A box is <code>m[row][column]</code>. Both indexes start from 0.",
        "<code>m.length</code> = number of rows.",
        "<code>m[0].length</code> = number of columns.",
        "The last box is <code>m[m.length - 1][m[0].length - 1]</code>.",
        "In memory a 2D array is an <b>array of rows</b>: <code>m[i]</code> is a whole row (a 1D array)."
      ],
      rememberAr: "المصفوفة ثنائية الأبعاد جدول: new int[صفوف][أعمدة]. العنصر m[الصف][العمود] والعد يبدأ من 0. m.length عدد الصفوف وm[0].length عدد الأعمدة. وفي الذاكرة هي مصفوفة من الصفوف.",
      practice: [
        { t: 'mcq', q: "How many boxes does <code>new int[3][2]</code> have?", options: ['5', '6', '3', '2'], answer: 1, explain: "3 rows × 2 columns = 6." },
        { t: 'mcq', q: "In <code>m[1][4]</code>, which number is the column?", options: ['1', '4', 'Both', 'Neither'], answer: 1, explain: "The second index is the column." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] grid = {{1, 2, 3}, {4, 5, 6}};
                  System.out.println(grid[1][2] - grid[0][1]);
                  System.out.println(grid.length + " " + grid[1].length);
              }
          }
        `, answer: J`
          4
          2 3
        `, explain: "grid[1][2] is 6 and grid[0][1] is 2, so 4. There are 2 rows; row 1 has 3 columns." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  double[][] prices = new double[2][2];
                  prices[0][1] = 4.5;
                  prices[1][0] = 2.0;
                  System.out.println(prices[0][0] + prices[0][1] + prices[1][0] + prices[1][1]);
              }
          }
        `, answer: '6.5', explain: "0.0 + 4.5 + 2.0 + 0.0 = 6.5." },
        { t: 'mcq', q: "For <code>double[][] m = new double[4][6];</code>, what are <code>m.length</code> and <code>m[0].length</code>?", options: ['6 and 4', '4 and 6', '24 and 6', '4 and 4'], answer: 1, explain: "m.length is the rows (4); m[0].length is the columns (6)." },
        { t: 'fill', q: "Complete the code that creates a table for 30 students and 5 quizzes and prints how many students.", code: J`
          double[][] grades = new double[___][___];
          System.out.println(grades.___);
        `, answers: ['30', '5', 'length'], explain: "Rows first (students), then columns (quizzes). <code>grades.length</code> is the number of rows." },
        { t: 'mcq', q: "Which expression is the last element of <code>int[][] t = new int[5][3];</code>?", options: ['<code>t[5][3]</code>', '<code>t[4][2]</code>', '<code>t[3][5]</code>', '<code>t[2][4]</code>'], answer: 1, explain: "Rows go 0 to 4 and columns 0 to 2." },
        { t: 'code', q: "The table <code>{{1, 2, 3}, {4, 5, 6}}</code> is given. Read a row number <code>r</code> and a column number <code>c</code> and print the value in that box. No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int r = input.nextInt();
                    int c = input.nextInt();
                    int[][] grid = {{1, 2, 3}, {4, 5, 6}};
                    // print the box in row r and column c
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int r = input.nextInt();
                    int c = input.nextInt();
                    int[][] grid = {{1, 2, 3}, {4, 5, 6}};
                    System.out.println(grid[r][c]);
                }
            }
          `,
          tests: [ { stdin: '0 0', expected: '1' }, { stdin: '1 2', expected: '6' }, { stdin: '0 2', expected: '3' } ],
          hint: "The row comes first: grid[r][c].", explain: "Two variables can be the two indexes." },
        { t: 'bug', q: "The table keeps the marks of 3 students in 4 quizzes. The program crashes. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] marks = new int[3][4];
                    marks[0][0] = 90;
                    marks[1][2] = 75;
                    marks[3][3] = 88;
                    System.out.println(marks[0][0] + marks[1][2]);
                }
            }
          `, bug: 6,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] marks = new int[3][4];
                    marks[0][0] = 90;
                    marks[1][2] = 75;
                    marks[2][3] = 88;
                    System.out.println(marks[0][0] + marks[1][2]);
                }
            }
          `,
          hint: "How many rows are there, and what is the last row number?",
          explain: "The table has rows 0, 1 and 2 only. <code>marks[3][3]</code> asks for a fourth row, so Java stops with <code>ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3</code>. The last student is row 2 and the last quiz is column 3, so the fix is <code>marks[2][3]</code>. Then the program prints 165.",
          explainAr: "الصفوف 0 و1 و2 فقط، فالصف 3 غير موجود." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] league = new int[4][3];
                  league[1][0] = 6;
                  league[1][1] = 3;
                  league[1][0]++;
                  int points = league[1][0] * 3 + league[1][1];
                  System.out.println(points);
                  System.out.println(league[3][2] + " " + league.length);
              }
          }
        `, answer: J`
          24
          0 4
        `, explain: "After <code>++</code>, box [1][0] is 7. Points = 7 × 3 + 3 = 24. Box [3][2] was never set, so it is 0, and the table has 4 rows." },
        { t: 'code', q: "A cinema hall has <code>rows</code> rows and <code>cols</code> seats in each row. Read <code>rows</code> and <code>cols</code>, then one booking: a row number and a seat number <b>as people say them</b> (starting from 1). Create the table, put 1 in the booked box, and print exactly three lines:<br><code>Booked: hall[r][c]</code> (the indexes of the booked box)<br><code>Last seat: hall[r][c]</code> (the indexes of the last box)<br><code>Last seat value: v</code> (the value in the last box).<br>No prompts.",
          qAr: "حوّل{{g:|ي}} رقم الصف والمقعد من العدّ البشري إلى الفهارس بطرح 1.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int r = input.nextInt();
                    int s = input.nextInt();
                    int[][] hall = new int[rows][cols];
                    // put 1 in the booked box, then print the three lines
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int r = input.nextInt();
                    int s = input.nextInt();
                    int[][] hall = new int[rows][cols];
                    hall[r - 1][s - 1] = 1;
                    int lastRow = hall.length - 1;
                    int lastCol = hall[0].length - 1;
                    System.out.println("Booked: hall[" + (r - 1) + "][" + (s - 1) + "]");
                    System.out.println("Last seat: hall[" + lastRow + "][" + lastCol + "]");
                    System.out.println("Last seat value: " + hall[lastRow][lastCol]);
                }
            }
          `,
          tests: [ { stdin: '5 8\n2 3', expected: 'Booked: hall[1][2]\nLast seat: hall[4][7]\nLast seat value: 0' }, { stdin: '5 8\n5 8', expected: 'Booked: hall[4][7]\nLast seat: hall[4][7]\nLast seat value: 1' }, { stdin: '1 1\n1 1', expected: 'Booked: hall[0][0]\nLast seat: hall[0][0]\nLast seat value: 1' } ],
          hint: "The box is hall[r - 1][s - 1]. The last box is hall[hall.length - 1][hall[0].length - 1].",
          explain: "People count from 1 and Java counts from 0, so subtract 1 from both numbers. The last box uses <code>length - 1</code> for the rows and for the columns." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Filling and printing a table with nested loops',
      titleAr: 'تعبئة الجدول وطباعته بحلقات متداخلة',
      minutes: 40,
      body: [
        { type: 'h', en: 'Writing a table with values' },
        { type: 'p', en: "If you know the values, write them as a table inside curly braces. Each row gets its own pair of braces. It is like writing the table on paper, row after row.",
          ar: "نكتب كل صف بين أقواس { } خاصة به." },
        { type: 'code', code: J`
          int[][] scores = {
              {85, 90, 78},
              {70, 65, 88},
              {92, 81, 95},
              {60, 74, 69}
          };
        ` },
        { type: 'code', code: J`
                    col 0  col 1  col 2
                  +------+------+------+
          row 0   |  85  |  90  |  78  |
                  +------+------+------+
          row 1   |  70  |  65  |  88  |
                  +------+------+------+
          row 2   |  92  |  81  |  95  |
                  +------+------+------+
          row 3   |  60  |  74  |  69  |
                  +------+------+------+
        ` },
        { type: 'p', en: "For example <code>scores[1][2]</code> is 88, and <code>scores[3][0]</code> is 60. The table has 4 rows (students) and 3 columns (quizzes)." },
        { type: 'check', q: "What is <code>scores[2][1]</code> in the table above?", options: ['95', '81', '65', '92'], answer: 1, explain: "Row 2, column 1 is 81." },
        { type: 'h', en: 'Visiting every box: a loop inside a loop' },
        { type: 'p', en: "The table above has 12 boxes. Printing them with 12 <code>println</code> lines is boring but possible. A real class has 30 students and 5 quizzes: 150 boxes. Nobody writes 150 lines, and the program must also work when the size changes. We need a way to visit <b>every</b> box with a few lines of code, whatever the size of the table." },
        { type: 'p', en: "With a 1D array one loop visited every box. A table has two directions, so we use <b>two loops, one inside the other</b>. They are called <b>nested loops</b>. The outer loop picks a <b>row</b>. For that row, the inner loop goes through all the <b>columns</b>.",
          ar: "الحلقة الخارجية تختار الصف، والداخلية تمر على أعمدته." },
        { type: 'analogy', title: 'Reading a book', en: "When you read a page you read line 1 from left to right, then line 2, then line 3. The outer loop is &quot;next line&quot;; the inner loop is &quot;next word on this line&quot;. At the end of each line you go down.",
          ar: "مثل قراءة صفحة: سطرًا سطرًا، وفي كل سطر كلمة كلمة." },
        { type: 'analogy', title: 'The hands of a clock', en: "The minute hand goes all the way round (0 to 59) for <b>every one step</b> of the hour hand. The inner loop is the minute hand: it runs completely, from start to end, every time the outer loop (the hour hand) moves by one.",
          ar: "عقرب الدقائق يدور دورة كاملة مع كل خطوة لعقرب الساعات: الحلقة الداخلية تكتمل مع كل خطوة للخارجية." },
        { type: 'p', en: "Before we use a table, look at the loops alone. This program prints only the pair (row, column) for a table with 2 rows and 3 columns. Watch the order of the pairs." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  for (int row = 0; row < 2; row++) {
                      for (int col = 0; col < 3; col++) {
                          System.out.print("(" + row + "," + col + ") ");
                      }
                      System.out.println();
                  }
              }
          }
        `, out: J`
          (0,0) (0,1) (0,2)
          (1,0) (1,1) (1,2)
        ` },
        { type: 'p', en: "While <code>row</code> is 0, <code>col</code> takes the values 0, 1, 2. Then the inner loop ends, <code>println()</code> starts a new line, <code>row</code> becomes 1, and <code>col</code> starts again from 0. These pairs are exactly the indexes of all the boxes, in reading order. Now we only have to replace the pair with the box <code>scores[row][col]</code>.",
          ar: "الأزواج المطبوعة هي فهارس كل الخانات بترتيب القراءة." },
        { type: 'code', code: J`
          for (int row = 0; row < scores.length; row++) {
              for (int col = 0; col < scores[row].length; col++) {
                  System.out.print(scores[row][col] + " ");
              }
              System.out.println();
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['for (int row = 0; row < scores.length; row++)', 'Outer loop: <code>row</code> is 0, 1, 2, 3 (one value per row).'],
          ['for (int col = 0; col < scores[row].length; col++)', 'Inner loop: <b>for each row</b>, <code>col</code> goes 0, 1, 2 (all the columns of this row).'],
          ['System.out.print(scores[row][col] + " ");', 'Print one box and a space, without a new line.'],
          ['System.out.println();', 'This is in the outer loop but <b>after</b> the inner loop: one new line at the end of each row.']
        ], ar: "println() بعد الحلقة الداخلية ليبدأ الصف التالي في سطر جديد." },
        { type: 'p', en: "Follow the first two rows. The inner loop restarts from 0 every time the outer loop moves on." },
        { type: 'table', head: ['row', 'col', 'scores[row][col]', 'screen'], rows: [
          ['0', '0', '85', '85 '],
          ['0', '1', '90', '85 90 '],
          ['0', '2', '78', '85 90 78 (then new line)'],
          ['1', '0', '70', '70 '],
          ['1', '1', '65', '70 65 '],
          ['1', '2', '88', '70 65 88 (then new line)']
        ] },
        { type: 'check', q: "A table has 3 rows and 4 columns. How many times does <code>print</code> run?", options: ['7', '12', '3', '4'], answer: 1, explain: "3 rows × 4 columns = 12 boxes, so 12 prints." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] scores = {
                      {85, 90, 78},
                      {70, 65, 88},
                      {92, 81, 95},
                      {60, 74, 69}
                  };
                  for (int row = 0; row < scores.length; row++) {
                      for (int col = 0; col < scores[row].length; col++) {
                          System.out.print(scores[row][col] + " ");
                      }
                      System.out.println();
                  }
              }
          }
        `, out: J`
          85 90 78
          70 65 88
          92 81 95
          60 74 69
        ` },
        { type: 'h', en: 'Filling a table with a formula' },
        { type: 'p', en: "Nested loops can also <b>write</b> values. A multiplication table: the box in row <code>i</code>, column <code>j</code> gets <code>(i + 1) * (j + 1)</code> (we add 1 because indexes start from 0)." },
        { type: 'code', code: J`
          int[][] t = new int[3][4];
          for (int i = 0; i < t.length; i++) {
              for (int j = 0; j < t[i].length; j++) {
                  t[i][j] = (i + 1) * (j + 1);
              }
          }
        ` },
        { type: 'lines', rows: [
          ['int[][] t = new int[3][4];', 'An empty table: 3 rows, 4 columns, all zeros.'],
          ['t[i][j] = (i + 1) * (j + 1);', 'The same line runs 12 times. Each time <code>i</code> and <code>j</code> are different, so each box gets its own value.']
        ] },
        { type: 'table', head: ['i', 'j', '(i + 1) * (j + 1)', 'box that is written'], rows: [
          ['0', '0', '1 × 1 = 1', 't[0][0]'],
          ['0', '1', '1 × 2 = 2', 't[0][1]'],
          ['0', '2', '1 × 3 = 3', 't[0][2]'],
          ['0', '3', '1 × 4 = 4', 't[0][3] (row 0 is finished)'],
          ['1', '0', '2 × 1 = 2', 't[1][0]'],
          ['1', '1', '2 × 2 = 4', 't[1][1]'],
          ['…', '…', '…', '…'],
          ['2', '3', '3 × 4 = 12', 't[2][3] (the last box)']
        ] },
        { type: 'memory', title: 'The table fills one row at a time', en: "Each frame shows the table after the inner loop has finished one whole row.", frames: [
          { label: 'After <code>int[][] t = new int[3][4];</code>', vars: [{ name: 't', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] },
            { id: 'D', cls: 'int[] row 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] }
          ] },
          { label: 'The inner loop finished with <code>i = 0</code>: row B is full', vars: [{ name: 't', type: 'int[][]', ref: 'A' }, { name: 'i', type: 'int', value: '0' }], objects: [
            { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }, { name: '[3]', value: '4' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] },
            { id: 'D', cls: 'int[] row 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] }
          ] },
          { label: 'The inner loop finished with <code>i = 1</code>: row C is full', vars: [{ name: 't', type: 'int[][]', ref: 'A' }, { name: 'i', type: 'int', value: '1' }], objects: [
            { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }, { name: '[3]', value: '4' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '2' }, { name: '[1]', value: '4' }, { name: '[2]', value: '6' }, { name: '[3]', value: '8' }] },
            { id: 'D', cls: 'int[] row 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }, { name: '[3]', value: '0' }] }
          ] },
          { label: 'The inner loop finished with <code>i = 2</code>: the whole table is full', vars: [{ name: 't', type: 'int[][]', ref: 'A' }, { name: 'i', type: 'int', value: '2' }], objects: [
            { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }, { name: '[3]', value: '4' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '2' }, { name: '[1]', value: '4' }, { name: '[2]', value: '6' }, { name: '[3]', value: '8' }] },
            { id: 'D', cls: 'int[] row 2', fields: [{ name: '[0]', value: '3' }, { name: '[1]', value: '6' }, { name: '[2]', value: '9' }, { name: '[3]', value: '12' }] }
          ] }
        ], ar: "كل دورة للحلقة الخارجية تملأ صفًّا كاملًا." },
        { type: 'check', q: "In the multiplication table above, what is <code>t[2][1]</code>?", options: ['3', '6', '2', '12'], answer: 1, explain: "(2 + 1) × (1 + 1) = 3 × 2 = 6." },
        { type: 'note', kind: 'tip', en: "Common names: <code>row</code>/<code>col</code>, or <code>r</code>/<code>c</code>, or <code>i</code>/<code>j</code>. Use any, but always keep the same order: row first, column second.",
          ar: "اختر{{g:|ي}} أسماء واضحة للصف والعمود وحافظ{{g:|ي}} على الترتيب." },
        { type: 'steps', title: 'Worked example: print a labelled report', problem: "Two students have three quiz marks each. Print each student on one line like <code>Student 1: 85 90 78</code>.",
          steps: [
            { en: "The table: 2 rows (students) and 3 columns (quizzes).", code: J`
              int[][] marks = {{85, 90, 78}, {70, 65, 88}};
            ` },
            { en: "Outer loop over rows. Print the label first. Students are numbered from 1, so use <code>row + 1</code>.", code: J`
              for (int row = 0; row < marks.length; row++) {
                  System.out.print("Student " + (row + 1) + ":");
            ` },
            { en: "Inner loop over columns: print a space and the mark.", code: J`
                  for (int col = 0; col < marks[row].length; col++) {
                      System.out.print(" " + marks[row][col]);
                  }
            ` },
            { en: "Finish the line, close the outer loop. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] marks = {{85, 90, 78}, {70, 65, 88}};
                    for (int row = 0; row < marks.length; row++) {
                        System.out.print("Student " + (row + 1) + ":");
                        for (int col = 0; col < marks[row].length; col++) {
                            System.out.print(" " + marks[row][col]);
                        }
                        System.out.println();
                    }
                }
            }
          `, out: J`
            Student 1: 85 90 78
            Student 2: 70 65 88
          `, ar: "التسمية تُطبع قبل الحلقة الداخلية، وprintln بعدها." },
        { type: 'h', en: 'Filling a table with a counter' },
        { type: 'p', en: "Sometimes there is no formula, but the boxes must be numbered in order: 1, 2, 3 … Use a <b>counter</b> variable declared before the loops. Each time a box is filled, the counter grows by one. Because nested loops visit the boxes in reading order, the numbers also go in reading order." },
        { type: 'steps', title: 'Worked example: numbering the desks of an exam hall', problem: "An exam hall has 3 rows of 4 desks. The desks are numbered 1, 2, 3 … row by row, from the front. Fill a table with the desk numbers and print each row like <code>Row 1: 1 2 3 4</code>.",
          steps: [
            { en: "3 rows and 4 desks per row.", code: "int[][] desk = new int[3][4];" },
            { en: "A counter starts at 1, <b>before</b> both loops, so it is not reset.", code: "int next = 1;" },
            { en: "Nested loops: give the current box the counter, then add 1 to the counter.", code: J`
              for (int r = 0; r < desk.length; r++) {
                  for (int c = 0; c < desk[r].length; c++) {
                      desk[r][c] = next;
                      next++;
                  }
              }
            ` },
            { en: "Print with a label before the inner loop and <code>println()</code> after it.", code: J`
              System.out.print("Row " + (r + 1) + ":");
            ` },
            { en: "Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] desk = new int[3][4];
                    int next = 1;
                    for (int r = 0; r < desk.length; r++) {
                        for (int c = 0; c < desk[r].length; c++) {
                            desk[r][c] = next;
                            next++;
                        }
                    }
                    for (int r = 0; r < desk.length; r++) {
                        System.out.print("Row " + (r + 1) + ":");
                        for (int c = 0; c < desk[r].length; c++) {
                            System.out.print(" " + desk[r][c]);
                        }
                        System.out.println();
                    }
                }
            }
          `, out: J`
            Row 1: 1 2 3 4
            Row 2: 5 6 7 8
            Row 3: 9 10 11 12
          `, ar: "العدّاد يُعلن قبل الحلقتين حتى لا يعود إلى 1 في كل صف." },
        { type: 'check', q: "In the desk program, what would happen if <code>int next = 1;</code> were written inside the outer loop?", options: ['Nothing changes', 'Every row would be numbered 1 2 3 4', 'The program would not compile', 'Only the last row would be numbered'], answer: 1, explain: "The counter would start again at 1 for every row, so all rows would get 1 2 3 4." },
        { type: 'note', kind: 'exam', en: "Swapping the loops changes the order: if the outer loop goes over columns and the inner over rows, you visit the table <b>column by column</b>. Also remember: the bound of the outer loop is <code>m.length</code> (rows), the bound of the inner loop is <code>m[row].length</code> (columns)." }
      ],
      mistakes: [
        { title: 'println in the wrong place', en: "If <code>println()</code> is inside the inner loop, every value is on its own line.", code: J`
          for (int c = 0; c < m[r].length; c++) {
              System.out.print(m[r][c] + " ");
              System.out.println();   // WRONG place
          }
        ` },
        { title: 'Using the same variable in both loops', en: "The two loops need different counters.", code: J`
          for (int i = 0; i < m.length; i++) {
              for (int i = 0; i < m[0].length; i++) {   // WRONG: i again
        ` },
        { title: 'Wrong bounds', en: "Rows are <code>m.length</code>; columns are <code>m[r].length</code>.", code: J`
          for (int c = 0; c < m.length; c++)   // WRONG for the column loop
        ` },
        { title: 'Mixing the indexes inside', en: "Write <code>m[row][col]</code>, not <code>m[col][row]</code>.", code: J`
          System.out.print(m[col][row]);   // WRONG for a non-square table
        ` }
      ],
      remember: [
        "Initializer: one pair of braces per row, inside outer braces.",
        "Nested loops: outer = rows, inner = columns.",
        "Outer bound: <code>m.length</code>. Inner bound: <code>m[row].length</code>.",
        "The inner loop restarts from 0 for every row.",
        "<code>println()</code> goes after the inner loop to end the row.",
        "To fill a table, use a formula of <code>i</code> and <code>j</code>, or a counter declared before both loops."
      ],
      rememberAr: "الحلقة الخارجية للصفوف والداخلية للأعمدة. حد الخارجية m.length وحد الداخلية m[row].length. نكتب println() بعد الحلقة الداخلية لننتقل إلى سطر جديد.",
      practice: [
        { t: 'mcq', q: "In nested loops over a table, which loop usually goes through the rows?", options: ['The inner loop', 'The outer loop', 'Both', 'Neither'], answer: 1, explain: "Outer = rows, inner = columns." },
        { t: 'mcq', q: "A table has 2 rows and 5 columns. How many times does the inner loop body run in total?", options: ['7', '10', '5', '2'], answer: 1, explain: "5 times for each of the 2 rows." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] a = {{1, 2}, {3, 4}};
                  for (int r = 0; r < a.length; r++) {
                      for (int c = 0; c < a[r].length; c++) {
                          System.out.print(a[r][c]);
                      }
                      System.out.println();
                  }
              }
          }
        `, answer: J`
          12
          34
        `, explain: "Each row is printed on its own line, without spaces." },
        { t: 'output', q: "What is the output? (Notice which loop is outside.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] a = {{1, 2, 3}, {4, 5, 6}};
                  for (int col = 0; col < a[0].length; col++) {
                      for (int row = 0; row < a.length; row++) {
                          System.out.print(a[row][col]);
                      }
                      System.out.println();
                  }
              }
          }
        `, answer: J`
          14
          25
          36
        `, explain: "The outer loop goes over the 3 columns; for each column the inner loop prints the two rows." },
        { t: 'fill', q: "Complete the loops that print any table <code>m</code> row by row.", code: J`
          for (int i = 0; i < m.___; i++) {
              for (int j = 0; j < m[i].___; j++) {
                  System.out.print(m[i][j] + " ");
              }
              System.out.println();
          }
        `, answers: ['length', 'length'], explain: "<code>m.length</code> is the number of rows; <code>m[i].length</code> the number of columns in row i." },
        { t: 'order', q: "Arrange the lines that print a table with 2 rows and 2 columns (a complete program).", lines: [
          'public class Main {',
          '    public static void main(String[] args) {',
          '        int[][] m = {{1, 2}, {3, 4}};',
          '        for (int r = 0; r < m.length; r++) {',
          '            for (int c = 0; c < m[r].length; c++) {',
          '                System.out.print(m[r][c] + " ");',
          '            }',
          '            System.out.println();',
          '        }',
          '    }',
          '}'
        ], explain: "The table first, then the outer loop, the inner loop, the print, and the new line after the inner loop." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] t = new int[2][3];
                  for (int i = 0; i < t.length; i++) {
                      for (int j = 0; j < t[i].length; j++) {
                          t[i][j] = i + j;
                      }
                  }
                  System.out.println(t[1][2] + " " + t[0][0]);
              }
          }
        `, answer: '3 0', explain: "t[1][2] = 1 + 2 = 3 and t[0][0] = 0 + 0 = 0." },
        { t: 'code', q: "Read a whole number <code>n</code>. Build an n × n multiplication table where the box in row <code>i</code>, column <code>j</code> is <code>(i+1)*(j+1)</code>. Print it row by row with single spaces between values (no space at the end of a line). No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[][] t = new int[n][n];
                    // 1) fill t with nested loops
                    // 2) print it with nested loops
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[][] t = new int[n][n];
                    for (int i = 0; i < n; i++) {
                        for (int j = 0; j < n; j++) {
                            t[i][j] = (i + 1) * (j + 1);
                        }
                    }
                    for (int i = 0; i < n; i++) {
                        for (int j = 0; j < n; j++) {
                            if (j > 0) System.out.print(" ");
                            System.out.print(t[i][j]);
                        }
                        System.out.println();
                    }
                }
            }
          `,
          tests: [ { stdin: '3', expected: '1 2 3\n2 4 6\n3 6 9' }, { stdin: '1', expected: '1' }, { stdin: '4', expected: '1 2 3 4\n2 4 6 8\n3 6 9 12\n4 8 12 16' } ],
          hint: "Print a space only when j > 0. Put println() after the inner printing loop.", explain: "One pair of nested loops fills the table, another prints it." },
        { t: 'bug', q: "This program should print the table row by row, but it crashes after the first row. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] m = {{4, 8, 15}, {16, 23, 42}};
                    for (int r = 0; r < m.length; r++) {
                        for (int c = 0; c <= m[r].length; c++) {
                            System.out.print(m[r][c] + " ");
                        }
                        System.out.println();
                    }
                }
            }
          `, bug: 5,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] m = {{4, 8, 15}, {16, 23, 42}};
                    for (int r = 0; r < m.length; r++) {
                        for (int c = 0; c < m[r].length; c++) {
                            System.out.print(m[r][c] + " ");
                        }
                        System.out.println();
                    }
                }
            }
          `,
          hint: "Each row has 3 boxes. Which values does c take?",
          explain: "With <code>&lt;=</code> the column goes 0, 1, 2 <b>and 3</b>. Row 0 has only indexes 0 to 2, so <code>m[0][3]</code> stops the program with <code>ArrayIndexOutOfBoundsException</code> after printing <code>4 8 15</code>. With <code>&lt;</code> the loop stops at the last real column.",
          explainAr: "الشرط &lt;= يجعل العمود يصل إلى 3 وهو غير موجود؛ الصحيح &lt;." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] desk = new int[2][3];
                  int next = 10;
                  for (int r = 0; r < desk.length; r++) {
                      for (int c = 0; c < desk[r].length; c++) {
                          desk[r][c] = next;
                          next += 5;
                      }
                  }
                  System.out.println(desk[0][2] + " " + desk[1][0]);
                  System.out.println(next);
              }
          }
        `, answer: J`
          20 25
          40
        `, explain: "The boxes get 10, 15, 20 (row 0) and 25, 30, 35 (row 1). After the last box the counter grows once more, to 40." },
        { t: 'code', q: "Read <code>rows</code> and <code>cols</code>. Fill a table like a chess board: a box gets <code>1</code> when <code>row + col</code> is even and <code>0</code> when it is odd. Print the table row by row with <b>no spaces</b> between the values. No prompts.",
          qAr: "املأ{{g:|ي}} الجدول مثل رقعة الشطرنج: 1 إذا كان مجموع الفهرسين زوجيًا و0 إذا كان فرديًا.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] board = new int[rows][cols];
                    // 1) fill the board
                    // 2) print it, one row per line
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] board = new int[rows][cols];
                    for (int r = 0; r < rows; r++) {
                        for (int c = 0; c < cols; c++) {
                            if ((r + c) % 2 == 0) {
                                board[r][c] = 1;
                            } else {
                                board[r][c] = 0;
                            }
                        }
                    }
                    for (int r = 0; r < rows; r++) {
                        for (int c = 0; c < cols; c++) {
                            System.out.print(board[r][c]);
                        }
                        System.out.println();
                    }
                }
            }
          `,
          tests: [ { stdin: '2 3', expected: '101\n010' }, { stdin: '3 3', expected: '101\n010\n101' }, { stdin: '1 4', expected: '1010' } ],
          hint: "(r + c) % 2 == 0 means the sum is even.",
          explain: "The formula decides each box from its two indexes. The same nested loops then print the table." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Reading a table and adding up rows',
      titleAr: 'قراءة جدول وجمع الصفوف',
      minutes: 40,
      body: [
        { type: 'h', en: 'Typing the table at the keyboard' },
        { type: 'p', en: "In real programs the user types the table. First read the number of rows and columns, then create the table with these sizes, then fill it with nested loops: the same loops as before, but each box gets <code>input.nextInt()</code>.",
          ar: "نقرأ عدد الصفوف والأعمدة ثم ننشئ الجدول ثم نملؤه بحلقتين متداخلتين." },
        { type: 'code', code: J`
          int rows = input.nextInt();
          int cols = input.nextInt();
          int[][] sales = new int[rows][cols];
          for (int r = 0; r < rows; r++) {
              for (int c = 0; c < cols; c++) {
                  sales[r][c] = input.nextInt();
              }
          }
        ` },
        { type: 'lines', rows: [
          ['int rows = ...; int cols = ...;', 'The two sizes come first, in the order rows then columns.'],
          ['new int[rows][cols]', 'A table of exactly that size.'],
          ['sales[r][c] = input.nextInt();', 'The numbers are read row by row, left to right, like reading a book.']
        ] },
        { type: 'p', en: "<code>Scanner</code> does not care how the numbers are placed on the screen. The user may type one row per line, or all the numbers on one long line: <code>nextInt()</code> simply takes the next number. What matters is the <b>order</b>: first all of row 0 from left to right, then all of row 1, and so on. Here the user typed <code>2 3</code>, then <code>5 7 9</code>, then <code>4 6 8</code>.",
          ar: "المهم ترتيب الأعداد: الصف الأول من اليسار إلى اليمين ثم الصف الثاني." },
        { type: 'memory', title: 'Reading the input into the table', frames: [
          { label: 'After <code>int[][] sales = new int[rows][cols];</code> with rows = 2, cols = 3', vars: [{ name: 'rows', type: 'int', value: '2' }, { name: 'cols', type: 'int', value: '3' }, { name: 'sales', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] }
          ] },
          { label: 'The inner loop for <code>r = 0</code> read 5, 7, 9', vars: [{ name: 'rows', type: 'int', value: '2' }, { name: 'cols', type: 'int', value: '3' }, { name: 'sales', type: 'int[][]', ref: 'A' }, { name: 'r', type: 'int', value: '0' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '5' }, { name: '[1]', value: '7' }, { name: '[2]', value: '9' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] }
          ] },
          { label: 'The inner loop for <code>r = 1</code> read 4, 6, 8', vars: [{ name: 'rows', type: 'int', value: '2' }, { name: 'cols', type: 'int', value: '3' }, { name: 'sales', type: 'int[][]', ref: 'A' }, { name: 'r', type: 'int', value: '1' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '5' }, { name: '[1]', value: '7' }, { name: '[2]', value: '9' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '4' }, { name: '[1]', value: '6' }, { name: '[2]', value: '8' }] }
          ] }
        ], ar: "كل دورة للحلقة الخارجية تقرأ صفًّا كاملًا من المدخلات." },
        { type: 'check', q: "The user types <code>2 3</code> and then 6 numbers. What are <code>rows</code> and <code>cols</code>?", options: ['rows = 3, cols = 2', 'rows = 2, cols = 3', 'both 6', 'both 2'], answer: 1, explain: "They are read in order: first rows, then cols." },
        { type: 'h', en: 'The total of every row' },
        { type: 'p', en: "A branch manager wants the total sales of each branch. Each branch is a row. For every row we add its numbers together, exactly like the sum pattern for one array. The important point: the row total must start from <b>0 again for each row</b>.",
          ar: "مجموع كل صف: نبدأ المجموع من صفر عند كل صف جديد." },
        { type: 'analogy', title: 'Receipts of each day', en: "A shop owner has a pile of receipts for each day. For each day's pile he takes a new empty sheet and adds the receipts. He never continues the total of yesterday on today's sheet. The new sheet is <code>int rowSum = 0;</code>.",
          ar: "لكل يوم ورقة جديدة فارغة، وهي rowSum = 0." },
        { type: 'code', code: J`
          for (int r = 0; r < sales.length; r++) {
              int rowSum = 0;
              for (int c = 0; c < sales[r].length; c++) {
                  rowSum += sales[r][c];
              }
              System.out.println("Branch " + r + ": " + rowSum);
          }
        ` },
        { type: 'lines', rows: [
          ['int rowSum = 0;', 'Inside the outer loop but before the inner loop: a fresh total for each row.'],
          ['rowSum += sales[r][c];', 'Add the current box.'],
          ['System.out.println(...)', 'After the inner loop, the row is finished: show its total.']
        ], ar: "rowSum = 0 داخل الحلقة الخارجية وقبل الداخلية." },
        { type: 'p', en: "Trace the first two branches of the table below (row 0 is 120, 150, 130, 160 and row 1 is 90, 110, 100, 140). Watch <code>rowSum</code> go back to 0 when <code>r</code> changes." },
        { type: 'table', head: ['r', 'c', 'sales[r][c]', 'rowSum after the line'], rows: [
          ['0', '–', '–', '0 (fresh total)'],
          ['0', '0', '120', '120'],
          ['0', '1', '150', '270'],
          ['0', '2', '130', '400'],
          ['0', '3', '160', '560 → print &quot;Branch 0: 560&quot;'],
          ['1', '–', '–', '0 (fresh total again)'],
          ['1', '0', '90', '90'],
          ['1', '1', '110', '200'],
          ['1', '2', '100', '300'],
          ['1', '3', '140', '440 → print &quot;Branch 1: 440&quot;']
        ] },
        { type: 'check', q: "Where does <code>int rowSum = 0;</code> belong?", options: ['Before both loops', 'Inside the outer loop, before the inner loop', 'Inside the inner loop', 'After both loops'], answer: 1, explain: "A new row needs a new total." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] sales = {
                      {120, 150, 130, 160},
                      {90, 110, 100, 140},
                      {200, 180, 210, 190}
                  };
                  int total = 0;
                  for (int r = 0; r < sales.length; r++) {
                      int rowSum = 0;
                      for (int c = 0; c < sales[r].length; c++) {
                          rowSum += sales[r][c];
                      }
                      System.out.println("Branch " + r + ": " + rowSum);
                      total += rowSum;
                  }
                  System.out.println("Total: " + total);
              }
          }
        `, out: J`
          Branch 0: 560
          Branch 1: 440
          Branch 2: 780
          Total: 1780
        ` },
        { type: 'p', en: "The variable <code>total</code> is outside the loops. It collects the row totals and gives the grand total: 560 + 440 + 780 = 1780." },
        { type: 'h', en: 'The average of every row' },
        { type: 'p', en: "A teacher usually wants the <b>average</b> of each student, not only the total. The average of one row is its total divided by the number of boxes in that row, <code>marks[r].length</code>. Use <code>(double)</code>, or the division throws away the decimals (from CS101: <code>7 / 2</code> is 3, but <code>(double) 7 / 2</code> is 3.5)." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] marks = {
                      {80, 90, 70, 85},
                      {60, 75, 65, 70},
                      {95, 100, 90, 85}
                  };
                  for (int r = 0; r < marks.length; r++) {
                      int rowSum = 0;
                      for (int c = 0; c < marks[r].length; c++) {
                          rowSum += marks[r][c];
                      }
                      double avg = (double) rowSum / marks[r].length;
                      System.out.println("Student " + (r + 1) + " average: " + avg);
                  }
              }
          }
        `, out: J`
          Student 1 average: 81.25
          Student 2 average: 67.5
          Student 3 average: 92.5
        ` },
        { type: 'lines', rows: [
          ['double avg = (double) rowSum / marks[r].length;', 'After the inner loop the row total is ready. Divide it by the length of this row: 325 / 4 = 81.25.'],
          ['"Student " + (r + 1)', 'Row 0 is shown to people as student 1.']
        ], ar: "المتوسط = مجموع الصف ÷ طول الصف، مع (double) للحفاظ على الكسور." },
        { type: 'h', en: 'Which row is best?' },
        { type: 'p', en: "To find the row with the biggest total, use king of the hill: remember the best total and the row that gave it. Start from row 0, and replace only when a row is strictly bigger (so ties keep the smaller row number)." },
        { type: 'analogy', title: 'The class prize', en: "A teacher holds the paper of the best student so far. She looks at the next paper: if its total is higher, she puts down the old paper and holds the new one. At the end, the paper in her hand is the winner, and its name tells her which student it was. <code>bestSum</code> is the total on the paper; <code>bestRow</code> is the name on it.",
          ar: "نحتفظ بأفضل مجموع ورقم صاحبه، ونستبدلهما عند وجود مجموع أكبر." },
        { type: 'steps', title: 'Worked example: the best branch', problem: "Read the sales table of some branches. Print every branch total, then the number of the best branch.",
          steps: [
            { en: "Read the sizes and fill the table (as in the lesson).", code: J`
              int rows = input.nextInt();
              int cols = input.nextInt();
              int[][] m = new int[rows][cols];
            ` },
            { en: "Prepare two variables for the champion row.", code: J`
              int bestRow = 0;
              int bestSum = 0;
            ` },
            { en: "Compute each row's total. For row 0 the first total is automatically the best, so we test <code>r == 0</code> too.", code: J`
              if (r == 0 || sum > bestSum) {
                  bestSum = sum;
                  bestRow = r;
              }
            ` },
            { en: "Print the totals as we go, then the best row. Complete program (input: 3 branches, 4 quarters):" }
          ],
          stdin: '3 4\n120 150 130 160\n90 110 100 140\n200 180 210 190',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    for (int r = 0; r < rows; r++) {
                        for (int c = 0; c < cols; c++) {
                            m[r][c] = input.nextInt();
                        }
                    }
                    int bestRow = 0;
                    int bestSum = 0;
                    for (int r = 0; r < rows; r++) {
                        int sum = 0;
                        for (int c = 0; c < cols; c++) {
                            sum += m[r][c];
                        }
                        System.out.println("Row " + r + ": " + sum);
                        if (r == 0 || sum > bestSum) {
                            bestSum = sum;
                            bestRow = r;
                        }
                    }
                    System.out.println("Best row: " + bestRow);
                }
            }
          `, out: J`
            Row 0: 560
            Row 1: 440
            Row 2: 780
            Best row: 2
          `, ar: "نبدأ الأفضل من الصف 0 ونستبدله عندما نجد مجموعًا أكبر تمامًا." },
        { type: 'note', kind: 'tip', en: "Why <code>r == 0 ||</code>? If all totals are negative, starting <code>bestSum</code> at 0 would give a wrong answer. The first row must always become the first champion." },
        { type: 'h', en: 'Counting in every row' },
        { type: 'p', en: "The same shape answers counting questions: &quot;How many quizzes did each student pass?&quot; or &quot;How many hot days were there in each week?&quot; Replace the row total with a <b>row counter</b>. It also starts at 0 inside the outer loop, and it grows by 1 only when a box passes a test." },
        { type: 'steps', title: 'Worked example: hot days in Riyadh', problem: "The noon temperatures of 3 weeks (7 days each) are in a table. For each week print how many days were <b>above 40</b> degrees, then the total number of hot days.",
          steps: [
            { en: "One row per week, one column per day.", code: J`
              int[][] temps = {
                  {38, 41, 43, 39, 40, 42, 37},
                  {44, 45, 43, 41, 39, 38, 40},
                  {36, 37, 39, 40, 38, 35, 36}
              };
            ` },
            { en: "A total for all weeks goes before the loops. A counter for one week goes inside the outer loop.", code: J`
              int allHot = 0;
              for (int w = 0; w < temps.length; w++) {
                  int hot = 0;
            ` },
            { en: "The inner loop tests every day. Note that 40 itself is not <b>above</b> 40.", code: J`
                  for (int d = 0; d < temps[w].length; d++) {
                      if (temps[w][d] > 40) {
                          hot++;
                      }
                  }
            ` },
            { en: "After the inner loop, print the week and add its count to the total. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] temps = {
                        {38, 41, 43, 39, 40, 42, 37},
                        {44, 45, 43, 41, 39, 38, 40},
                        {36, 37, 39, 40, 38, 35, 36}
                    };
                    int allHot = 0;
                    for (int w = 0; w < temps.length; w++) {
                        int hot = 0;
                        for (int d = 0; d < temps[w].length; d++) {
                            if (temps[w][d] > 40) {
                                hot++;
                            }
                        }
                        System.out.println("Week " + (w + 1) + ": " + hot + " hot days");
                        allHot += hot;
                    }
                    System.out.println("Total hot days: " + allHot);
                }
            }
          `, out: J`
            Week 1: 3 hot days
            Week 2: 4 hot days
            Week 3: 0 hot days
            Total hot days: 7
          `, ar: "عدّاد الأسبوع يبدأ من صفر داخل الحلقة الخارجية، والمجموع الكلي قبل الحلقتين." },
        { type: 'check', q: "In the hot days program, where must <code>int hot = 0;</code> be?", options: ['Before both loops', 'Inside the outer loop, before the inner loop', 'Inside the inner loop', 'After the println'], answer: 1, explain: "Every week needs its own fresh counter, exactly like a fresh row total." }
      ],
      mistakes: [
        { title: 'Row total declared outside the loops', en: "The total keeps growing over all rows.", code: J`
          int rowSum = 0;                 // WRONG place
          for (int r = 0; r < rows; r++) {
              for (...) rowSum += m[r][c];
        ` },
        { title: 'Printing the total inside the inner loop', en: "You print many partial totals instead of one final total per row.", code: J`
          for (int c = 0; c < cols; c++) {
              rowSum += m[r][c];
              System.out.println(rowSum);   // WRONG place
          }
        ` },
        { title: 'Reading rows and columns in the wrong order', en: "If the input says rows first, read rows first.", code: J`
          int cols = input.nextInt();   // WRONG order
          int rows = input.nextInt();
        ` },
        { title: 'Starting best at 0', en: "It fails when all totals are below 0.", code: J`
          int bestSum = 0;   // risky; use the first row instead
        ` }
      ],
      remember: [
        "Read <code>rows</code>, then <code>cols</code>, then <code>new int[rows][cols]</code>, then fill with nested loops.",
        "Row total: <code>int rowSum = 0;</code> <b>inside</b> the outer loop, before the inner loop.",
        "Print the row total after the inner loop.",
        "A grand total variable is declared before all loops.",
        "For the best row, remember the best sum and its row number.",
        "Row average: <code>(double) rowSum / m[r].length</code>. A row counter is reset in the same place as a row total."
      ],
      rememberAr: "نقرأ الصفوف ثم الأعمدة ثم ننشئ الجدول ونملؤه. مجموع الصف يبدأ من صفر داخل الحلقة الخارجية وقبل الداخلية، ويُطبع بعد الداخلية.",
      practice: [
        { t: 'mcq', q: "To sum each row, where do you set the row total to 0?", options: ['Before the loops', 'Inside the outer loop, before the inner loop', 'Inside the inner loop', 'After the loops'], answer: 1, explain: "Each row needs a fresh total." },
        { t: 'mcq', q: "The input is <code>3 2</code>. How many numbers should follow to fill the table?", options: ['5', '6', '3', '2'], answer: 1, explain: "3 rows × 2 columns = 6." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{1, 2, 3}, {4, 5, 6}};
                  for (int r = 0; r < m.length; r++) {
                      int sum = 0;
                      for (int c = 0; c < m[r].length; c++) {
                          sum += m[r][c];
                      }
                      System.out.println(sum);
                  }
              }
          }
        `, answer: J`
          6
          15
        `, explain: "Row 0: 1 + 2 + 3 = 6. Row 1: 4 + 5 + 6 = 15." },
        { t: 'output', q: "What is the output? (The total is declared in the wrong place.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{1, 2}, {3, 4}};
                  int sum = 0;
                  for (int r = 0; r < m.length; r++) {
                      for (int c = 0; c < m[r].length; c++) {
                          sum += m[r][c];
                      }
                      System.out.println(sum);
                  }
              }
          }
        `, answer: J`
          3
          10
        `, explain: "The total is never reset, so the second line shows 3 + 3 + 4 = 10, not 7." },
        { t: 'fill', q: "Complete the code that fills the table from the keyboard.", code: J`
          int[][] m = new int[rows][cols];
          for (int r = 0; r < rows; r++) {
              for (int c = 0; c < ___; c++) {
                  m[r][___] = input.nextInt();
              }
          }
        `, answers: ['cols', 'c'], explain: "The inner loop goes up to the number of columns; the second index is the column <code>c</code>." },
        { t: 'order', q: "Arrange the lines that print the total of row <code>r</code> (assume <code>r</code> already exists).", lines: [
          'int sum = 0;',
          'for (int c = 0; c < m[r].length; c++) {',
          '    sum += m[r][c];',
          '}',
          'System.out.println(sum);'
        ], explain: "Start the total, add each column, then print after the loop." },
        { t: 'code', q: "Read <code>rows</code> and <code>cols</code>, then a table of integers. Print the sum of each row on its own line, then a line <code>Max row: k</code> where k is the index of the row with the largest sum (the smallest index if there is a tie). No prompts.",
          qAr: "اطبع مجموع كل صف ثم رقم الصف صاحب أكبر مجموع.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    // read the table, then print row sums and the max row
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    for (int i = 0; i < rows; i++) {
                        for (int j = 0; j < cols; j++) {
                            m[i][j] = input.nextInt();
                        }
                    }
                    int maxRow = 0;
                    int maxSum = 0;
                    for (int i = 0; i < rows; i++) {
                        int sum = 0;
                        for (int j = 0; j < cols; j++) {
                            sum += m[i][j];
                        }
                        System.out.println(sum);
                        if (i == 0 || sum > maxSum) {
                            maxSum = sum;
                            maxRow = i;
                        }
                    }
                    System.out.println("Max row: " + maxRow);
                }
            }
          `,
          tests: [
            { stdin: '2 3\n1 2 3\n4 5 6', expected: '6\n15\nMax row: 1' },
            { stdin: '3 2\n5 5\n9 1\n2 2', expected: '10\n10\n4\nMax row: 0' },
            { stdin: '1 4\n-1 -2 -3 -4', expected: '-10\nMax row: 0' }
          ],
          hint: "Start the best sum from row 0 (use i == 0 || sum > maxSum), so tables with only negative numbers still work.",
          explain: "Each row sum is computed in the inner loop and compared with the best so far; > keeps the first row on ties." },
        { t: 'bug', q: "The program should print the sales of each branch: 30, 70 and 110. It prints 30, 100 and 210. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] sales = {{10, 20}, {30, 40}, {50, 60}};
                    int rowSum = 0;
                    for (int r = 0; r < sales.length; r++) {
                        for (int c = 0; c < sales[r].length; c++) {
                            rowSum += sales[r][c];
                        }
                        System.out.println("Branch " + (r + 1) + ": " + rowSum);
                    }
                }
            }
          `, bug: 4,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] sales = {{10, 20}, {30, 40}, {50, 60}};
                    for (int r = 0; r < sales.length; r++) {
                        int rowSum = 0;
                        for (int c = 0; c < sales[r].length; c++) {
                            rowSum += sales[r][c];
                        }
                        System.out.println("Branch " + (r + 1) + ": " + rowSum);
                    }
                }
            }
          `,
          hint: "When does the total go back to 0?",
          explain: "<code>rowSum</code> is created once, before the outer loop, so it never goes back to 0. Branch 2 gets 30 + 30 + 40 = 100 and branch 3 gets 100 + 50 + 60 = 210. Moving <code>int rowSum = 0;</code> inside the outer loop gives every branch a fresh total.",
          explainAr: "المجموع أُعلن قبل الحلقة الخارجية فلا يعود إلى صفر عند كل فرع." },
        { t: 'output', q: "What is the output? (Look carefully at the two divisions.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{3, 4}, {5, 8}, {1, 2}};
                  for (int r = 0; r < m.length; r++) {
                      int s = 0;
                      for (int c = 0; c < m[r].length; c++) {
                          s += m[r][c];
                      }
                      System.out.println(s / 2 + " " + (double) s / 2);
                  }
              }
          }
        `, answer: J`
          3 3.5
          6 6.5
          1 1.5
        `, explain: "The row totals are 7, 13 and 3. <code>s / 2</code> is integer division (3, 6, 1); <code>(double) s / 2</code> keeps the half (3.5, 6.5, 1.5)." },
        { t: 'code', q: "Read <code>rows</code> and <code>cols</code>, then a table of temperatures (integers), then a number <code>limit</code>. For each row print <code>Week k: n</code>, where k starts at 1 and n is how many values in that row are <b>greater than</b> <code>limit</code>. No prompts.",
          qAr: "اطبع{{g:|ي}} لكل صف عدد القيم الأكبر من الحد.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] t = new int[rows][cols];
                    // read the table, then read limit, then count in every row
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] t = new int[rows][cols];
                    for (int r = 0; r < rows; r++) {
                        for (int c = 0; c < cols; c++) {
                            t[r][c] = input.nextInt();
                        }
                    }
                    int limit = input.nextInt();
                    for (int r = 0; r < rows; r++) {
                        int count = 0;
                        for (int c = 0; c < cols; c++) {
                            if (t[r][c] > limit) {
                                count++;
                            }
                        }
                        System.out.println("Week " + (r + 1) + ": " + count);
                    }
                }
            }
          `,
          tests: [ { stdin: '2 3\n38 41 43\n40 39 45\n40', expected: 'Week 1: 2\nWeek 2: 1' }, { stdin: '1 4\n10 20 30 40\n25', expected: 'Week 1: 2' }, { stdin: '3 2\n1 1\n50 50\n0 0\n45', expected: 'Week 1: 0\nWeek 2: 2\nWeek 3: 0' } ],
          hint: "Read limit after the whole table. Put int count = 0; inside the outer loop.",
          explain: "A row counter works like a row total: reset it for every row, update it in the inner loop, print it after the inner loop." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'Columns, the largest value and the diagonal',
      titleAr: 'الأعمدة وأكبر قيمة والقطر',
      minutes: 40,
      body: [
        { type: 'h', en: 'The total of every column' },
        { type: 'p', en: "Sometimes the question is about the columns: &quot;What were the total sales of each quarter?&quot; Now one column is fixed, and we go <b>down</b> through the rows. So the loops swap roles: the <b>outer</b> loop goes over columns, the <b>inner</b> loop goes over rows.",
          ar: "لمجموع كل عمود نبدّل الأدوار: الخارجية للأعمدة والداخلية للصفوف." },
        { type: 'analogy', title: 'Adding a column of numbers', en: "In a school report you add the numbers of one column (for example Quiz 1 of all students) by going from the top to the bottom. Then you move your finger to the next column and do it again.",
          ar: "نجمع عمودًا من الأعلى إلى الأسفل ثم ننتقل إلى العمود التالي." },
        { type: 'p', en: "Column questions are very common. A teacher looks at a column to see how the whole class did in one quiz. A manager looks at a column to compare one quarter across all branches. A row describes <b>one thing</b> (a student, a branch); a column describes <b>one measurement</b> for everybody." },
        { type: 'code', code: J`
          for (int c = 0; c < sales[0].length; c++) {
              int colSum = 0;
              for (int r = 0; r < sales.length; r++) {
                  colSum += sales[r][c];
              }
              System.out.println("Q" + (c + 1) + ": " + colSum);
          }
        ` },
        { type: 'lines', rows: [
          ['c < sales[0].length', 'The outer loop runs over the <b>columns</b> (the length of a row).'],
          ['r < sales.length', 'The inner loop runs over the <b>rows</b>.'],
          ['sales[r][c]', 'The row <code>r</code> changes in the inner loop; the column <code>c</code> stays the same. So we move down one column.']
        ], ar: "الحدود تتبدل أيضًا: الخارجية sales[0].length والداخلية sales.length." },
        { type: 'memory', title: 'Walking down column 1', en: "Remember: every row is its own array object. A column is <b>not</b> an object: it is one box in each row. To add column 1, the inner loop visits box [1] of row B, then of row C, then of row D.", frames: [
          { label: '<code>c = 1</code>, <code>r = 0</code>: add box [1] of row B (150)', vars: [{ name: 'sales', type: 'int[][]', ref: 'A' }, { name: 'c', type: 'int', value: '1' }, { name: 'r', type: 'int', value: '0' }, { name: 'colSum', type: 'int', value: '150' }], objects: [
            { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '120' }, { name: '[1] ←', value: '150' }, { name: '[2]', value: '130' }, { name: '[3]', value: '160' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '90' }, { name: '[1]', value: '110' }, { name: '[2]', value: '100' }, { name: '[3]', value: '140' }] },
            { id: 'D', cls: 'int[] row 2', fields: [{ name: '[0]', value: '200' }, { name: '[1]', value: '180' }, { name: '[2]', value: '210' }, { name: '[3]', value: '190' }] }
          ] },
          { label: '<code>r = 1</code>: add box [1] of row C (110)', vars: [{ name: 'sales', type: 'int[][]', ref: 'A' }, { name: 'c', type: 'int', value: '1' }, { name: 'r', type: 'int', value: '1' }, { name: 'colSum', type: 'int', value: '260' }], objects: [
            { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '120' }, { name: '[1]', value: '150' }, { name: '[2]', value: '130' }, { name: '[3]', value: '160' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '90' }, { name: '[1] ←', value: '110' }, { name: '[2]', value: '100' }, { name: '[3]', value: '140' }] },
            { id: 'D', cls: 'int[] row 2', fields: [{ name: '[0]', value: '200' }, { name: '[1]', value: '180' }, { name: '[2]', value: '210' }, { name: '[3]', value: '190' }] }
          ] },
          { label: '<code>r = 2</code>: add box [1] of row D (180). Column 1 is done: 440', vars: [{ name: 'sales', type: 'int[][]', ref: 'A' }, { name: 'c', type: 'int', value: '1' }, { name: 'r', type: 'int', value: '2' }, { name: 'colSum', type: 'int', value: '440' }], objects: [
            { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '120' }, { name: '[1]', value: '150' }, { name: '[2]', value: '130' }, { name: '[3]', value: '160' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '90' }, { name: '[1]', value: '110' }, { name: '[2]', value: '100' }, { name: '[3]', value: '140' }] },
            { id: 'D', cls: 'int[] row 2', fields: [{ name: '[0]', value: '200' }, { name: '[1] ←', value: '180' }, { name: '[2]', value: '210' }, { name: '[3]', value: '190' }] }
          ] }
        ], ar: "العمود ليس كائنًا واحدًا؛ إنه خانة واحدة من كل صف، لذلك نحتاج حلقة تنزل عبر الصفوف." },
        { type: 'p', en: "This explains an important rule: <code>sales[1]</code> gives you a whole <b>row</b> in one step, but there is no way to get a whole column in one step (<code>sales[][1]</code> does not exist). For a column you always need a loop over the rows." },
        { type: 'table', head: ['c', 'r', 'sales[r][c]', 'colSum after the line'], rows: [
          ['0', '–', '–', '0 (fresh total for column 0)'],
          ['0', '0', '120', '120'],
          ['0', '1', '90', '210'],
          ['0', '2', '200', '410 → print &quot;Q1: 410&quot;'],
          ['1', '–', '–', '0 (fresh total for column 1)'],
          ['1', '0', '150', '150'],
          ['1', '1', '110', '260'],
          ['1', '2', '180', '440 → print &quot;Q2: 440&quot;']
        ] },
        { type: 'check', q: "For column totals, the inner loop goes up to…", options: ['<code>sales[0].length</code>', '<code>sales.length</code>', '<code>sales.length - 2</code>', '10'], answer: 1, explain: "The inner loop goes down through all rows." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] sales = {
                      {120, 150, 130, 160},
                      {90, 110, 100, 140},
                      {200, 180, 210, 190}
                  };
                  for (int c = 0; c < sales[0].length; c++) {
                      int colSum = 0;
                      for (int r = 0; r < sales.length; r++) {
                          colSum += sales[r][c];
                      }
                      System.out.println("Q" + (c + 1) + ": " + colSum);
                  }
              }
          }
        `, out: J`
          Q1: 410
          Q2: 440
          Q3: 440
          Q4: 490
        ` },
        { type: 'note', kind: 'exam', en: "If you mix the bounds, a table that is not square causes an <code>ArrayIndexOutOfBoundsException</code>. A 3 × 4 table has 3 rows and 4 columns; a loop to 4 over the rows tries row 3, which does not exist.",
          ar: "خلط حدود الصفوف والأعمدة يسبب خطأ تجاوز الحدود في الجدول غير المربع." },
        { type: 'h', en: 'The largest value and where it is' },
        { type: 'p', en: "King of the hill works for tables too. We remember the <b>row and column</b> of the champion, not only its value." },
        { type: 'code', code: J`
          int maxRow = 0, maxCol = 0;
          for (int r = 0; r < temps.length; r++) {
              for (int c = 0; c < temps[r].length; c++) {
                  if (temps[r][c] > temps[maxRow][maxCol]) {
                      maxRow = r;
                      maxCol = c;
                  }
              }
          }
        ` },
        { type: 'lines', rows: [
          ['int maxRow = 0, maxCol = 0;', 'The first box <code>[0][0]</code> is the champion at the start.'],
          ['temps[r][c] > temps[maxRow][maxCol]', 'Is this box bigger than the champion?'],
          ['maxRow = r; maxCol = c;', 'Yes: remember its position (two numbers).']
        ] },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  double[][] temps = {
                      {31.5, 33.0, 29.5},
                      {35.5, 34.0, 36.5},
                      {30.0, 36.5, 32.0}
                  };
                  int maxRow = 0, maxCol = 0;
                  for (int r = 0; r < temps.length; r++) {
                      for (int c = 0; c < temps[r].length; c++) {
                          if (temps[r][c] > temps[maxRow][maxCol]) {
                              maxRow = r;
                              maxCol = c;
                          }
                      }
                  }
                  System.out.println("Max " + temps[maxRow][maxCol] + " at [" + maxRow + "][" + maxCol + "]");
              }
          }
        `, out: J`
          Max 36.5 at [1][2]
        ` },
        { type: 'p', en: "The value 36.5 appears twice. Because we use <code>&gt;</code> (not <code>&gt;=</code>), the first one we meet (row 1, column 2) stays the champion." },
        { type: 'p', en: "The <b>smallest</b> value works the same way. Only the comparison changes: <code>&lt;</code> instead of <code>&gt;</code>. In the temperatures table, the coldest reading is 29.5 at row 0, column 2." },
        { type: 'code', code: J`
          int minRow = 0, minCol = 0;
          for (int r = 0; r < temps.length; r++) {
              for (int c = 0; c < temps[r].length; c++) {
                  if (temps[r][c] < temps[minRow][minCol]) {
                      minRow = r;
                      minCol = c;
                  }
              }
          }
        ` },
        { type: 'check', q: "We want the position of the <b>last</b> 36.5 (row 2, column 1) instead of the first. What should the test be?", options: ['<code>temps[r][c] &gt; temps[maxRow][maxCol]</code>', '<code>temps[r][c] &gt;= temps[maxRow][maxCol]</code>', '<code>temps[r][c] &lt; temps[maxRow][maxCol]</code>', '<code>temps[r][c] == 36.5</code>'], answer: 1, explain: "With <code>&gt;=</code> an equal value also takes the crown, so the last 36.5 we meet wins." },
        { type: 'h', en: 'The main diagonal' },
        { type: 'p', en: "In a <b>square</b> table (same number of rows and columns), the boxes <code>[0][0]</code>, <code>[1][1]</code>, <code>[2][2]</code> ... form the <b>main diagonal</b>. Only <b>one loop</b> is needed, because row and column are the same number." },
        { type: 'code', code: J`
                +-----+-----+-----+
                | [2] |  7  |  1  |
                +-----+-----+-----+
                |  8  | [3] |  4  |       diagonal = 2, 3, 9
                +-----+-----+-----+
                |  5  |  6  | [9] |
                +-----+-----+-----+
        ` },
        { type: 'steps', title: 'Worked example: sum of the diagonal', problem: "Print the sum of the main diagonal of the square table {{2, 7, 1}, {8, 3, 4}, {5, 6, 9}}.",
          steps: [
            { en: "Create the table and a total.", code: J`
              int[][] m = {{2, 7, 1}, {8, 3, 4}, {5, 6, 9}};
              int d = 0;
            ` },
            { en: "One loop is enough: box number <code>i</code> is <code>m[i][i]</code>.", code: J`
              for (int i = 0; i < m.length; i++) {
                  d += m[i][i];
              }
            ` },
            { en: "Print. 2 + 3 + 9 = 14. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] m = {{2, 7, 1}, {8, 3, 4}, {5, 6, 9}};
                    int d = 0;
                    for (int i = 0; i < m.length; i++) {
                        d += m[i][i];
                    }
                    System.out.println("Diagonal sum: " + d);
                }
            }
          `, out: J`
            Diagonal sum: 14
          `, ar: "القطر الرئيسي يحتاج حلقة واحدة لأن رقم الصف يساوي رقم العمود." },
        { type: 'analogy', title: 'A bishop on a chess board', en: "A bishop that starts in the top-left corner and moves towards the bottom-right goes one step down <b>and</b> one step right each time. Its row and its column grow together: (0,0), (1,1), (2,2). That is the main diagonal.",
          ar: "مثل الفيل في الشطرنج: ينزل خطوة ويتحرك يمينًا خطوة في الوقت نفسه." },
        { type: 'h', en: 'The other diagonal' },
        { type: 'p', en: "The second diagonal goes from the top-right corner to the bottom-left corner. The row goes up (0, 1, 2) while the column goes <b>down</b> (2, 1, 0). For a square table of size <code>n</code>, the column is <code>n - 1 - i</code>. You will need this diagonal later for the tic-tac-toe game." },
        { type: 'code', code: J`
                +-----+-----+-----+
                |  2  |  7  | [1] |
                +-----+-----+-----+
                |  8  | [3] |  4  |       other diagonal = 1, 3, 5
                +-----+-----+-----+
                | [5] |  6  |  9  |
                +-----+-----+-----+
        ` },
        { type: 'code', code: J`
          int other = 0;
          for (int i = 0; i < m.length; i++) {
              other += m[i][m.length - 1 - i];
          }
        ` },
        { type: 'table', head: ['i', 'm.length - 1 - i', 'box', 'value', 'other'], rows: [
          ['0', '3 - 1 - 0 = 2', 'm[0][2]', '1', '1'],
          ['1', '3 - 1 - 1 = 1', 'm[1][1]', '3', '4'],
          ['2', '3 - 1 - 2 = 0', 'm[2][0]', '5', '9']
        ] },
        { type: 'p', en: "Notice that the middle box <code>m[1][1]</code> belongs to <b>both</b> diagonals in a 3 × 3 table.",
          ar: "القطر الآخر: m[i][n - 1 - i]، والعمود ينقص بينما الصف يزيد." },
        { type: 'check', q: "In a 4 × 4 table, which box of the other diagonal is in row 1?", options: ['<code>m[1][1]</code>', '<code>m[1][2]</code>', '<code>m[1][3]</code>', '<code>m[2][1]</code>'], answer: 1, explain: "n - 1 - i = 4 - 1 - 1 = 2, so the box is m[1][2]." },
        { type: 'h', en: 'Putting it together: the hardest quiz' },
        { type: 'steps', title: 'Worked example: which quiz was the hardest?', problem: "Four students took three quizzes. Print the average of every quiz, then the number of the quiz with the <b>lowest</b> average (the hardest one).",
          steps: [
            { en: "One row per student, one column per quiz.", code: J`
              int[][] marks = {
                  {85, 60, 78},
                  {70, 55, 88},
                  {92, 65, 95},
                  {60, 70, 69}
              };
            ` },
            { en: "A quiz is a column, so the outer loop goes over the columns. The total of the column is divided by the number of students, <code>marks.length</code>.", code: J`
              for (int c = 0; c < marks[0].length; c++) {
                  int sum = 0;
                  for (int r = 0; r < marks.length; r++) {
                      sum += marks[r][c];
                  }
                  double avg = (double) sum / marks.length;
            ` },
            { en: "King of the hill, but for the <b>lowest</b> value. Column 0 is always the first champion.", code: J`
                  if (c == 0 || avg < lowest) {
                      lowest = avg;
                      hardest = c;
                  }
            ` },
            { en: "Print the quiz number with <code>+ 1</code>. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] marks = {
                        {85, 60, 78},
                        {70, 55, 88},
                        {92, 65, 95},
                        {60, 70, 69}
                    };
                    int hardest = 0;
                    double lowest = 0;
                    for (int c = 0; c < marks[0].length; c++) {
                        int sum = 0;
                        for (int r = 0; r < marks.length; r++) {
                            sum += marks[r][c];
                        }
                        double avg = (double) sum / marks.length;
                        System.out.println("Quiz " + (c + 1) + " average: " + avg);
                        if (c == 0 || avg < lowest) {
                            lowest = avg;
                            hardest = c;
                        }
                    }
                    System.out.println("Hardest quiz: " + (hardest + 1));
                }
            }
          `, out: J`
            Quiz 1 average: 76.75
            Quiz 2 average: 62.5
            Quiz 3 average: 82.5
            Hardest quiz: 2
          `, ar: "متوسط العمود = مجموعه ÷ عدد الصفوف، ثم نبحث عن أصغر متوسط." }
      ],
      mistakes: [
        { title: 'Using the row bound for columns', en: "In a 3 × 4 table, the column loop must reach 4.", code: J`
          for (int c = 0; c < sales.length; c++)   // WRONG: 3 instead of 4
        ` },
        { title: 'Resetting the column total in the wrong place', en: "<code>colSum = 0</code> belongs inside the outer (column) loop.", code: J`
          int colSum = 0;   // WRONG: before both loops
        ` },
        { title: 'Remembering only the value of the maximum', en: "If you also need the position, remember both row and column.", code: J`
          double max = temps[0][0];   // you lose the position
        ` },
        { title: 'Diagonal in a non-square table', en: "<code>m[i][i]</code> can crash if the table has fewer columns than rows.", code: J`
          int[][] m = new int[3][2];
          m[2][2] = 1;   // WRONG: no column 2
        ` }
      ],
      remember: [
        "Column sum: outer loop = columns, inner loop = rows, <code>m[r][c]</code> with fixed <code>c</code>.",
        "Outer bound <code>m[0].length</code>; inner bound <code>m.length</code>.",
        "The total is reset inside the outer loop.",
        "The largest value: remember <code>maxRow</code> and <code>maxCol</code>.",
        "Main diagonal of a square table: <code>m[i][i]</code>, one loop.",
        "Other diagonal: <code>m[i][m.length - 1 - i]</code>. A column average divides by <code>m.length</code>."
      ],
      rememberAr: "مجموع العمود: الحلقة الخارجية للأعمدة والداخلية للصفوف. لأكبر قيمة نحفظ الصف والعمود معًا. القطر الرئيسي في المربع هو m[i][i] بحلقة واحدة.",
      practice: [
        { t: 'mcq', q: "For column totals, which loop is the outer loop?", options: ['The loop over rows', 'The loop over columns', 'Either', 'There is no outer loop'], answer: 1, explain: "Fix one column, then go down through the rows." },
        { t: 'mcq', q: "Which boxes form the main diagonal of a square table?", options: ['<code>m[0][i]</code>', '<code>m[i][0]</code>', '<code>m[i][i]</code>', '<code>m[i][m.length]</code>'], answer: 2, explain: "Row and column are equal." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{1, 2}, {3, 4}, {5, 6}};
                  for (int c = 0; c < m[0].length; c++) {
                      int s = 0;
                      for (int r = 0; r < m.length; r++) {
                          s += m[r][c];
                      }
                      System.out.println(s);
                  }
              }
          }
        `, answer: J`
          9
          12
        `, explain: "Column 0: 1 + 3 + 5 = 9. Column 1: 2 + 4 + 6 = 12." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{2, 7, 1}, {8, 3, 4}, {5, 6, 9}};
                  int d = 0;
                  for (int i = 0; i < m.length; i++) {
                      d += m[i][i];
                  }
                  System.out.println(d);
              }
          }
        `, answer: '14', explain: "2 + 3 + 9 = 14." },
        { t: 'fill', q: "Complete the code that prints the sum of each <b>column</b> of <code>m</code>.", code: J`
          for (int col = 0; col < m[0].length; col++) {
              int total = 0;
              for (int row = 0; row < ___; row++) {
                  total += m[___][col];
              }
              System.out.println(total);
          }
        `, answers: ['m.length', 'row'], explain: "For a fixed column, the inner loop moves down through all rows." },
        { t: 'order', q: "Arrange the lines that find the largest value of a table of ints (assume <code>m</code> exists).", lines: [
          'int max = m[0][0];',
          'for (int r = 0; r < m.length; r++) {',
          '    for (int c = 0; c < m[r].length; c++) {',
          '        if (m[r][c] > max) {',
          '            max = m[r][c];',
          '        }',
          '    }',
          '}'
        ], explain: "Start from the first box; compare inside both loops." },
        { t: 'mcq', q: "The table <code>{{4, 9}, {7, 2}}</code>: which box does king of the hill (with <code>&gt;</code>) keep as the maximum?", options: ['[0][0]', '[0][1]', '[1][0]', '[1][1]'], answer: 1, explain: "9 is the largest and is in row 0, column 1." },
        { t: 'code', q: "Read <code>rows</code> and <code>cols</code>, then a table of integers. Print the sum of each <b>column</b>, separated by single spaces, on one line. No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    // read the table, then print the column sums
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    for (int r = 0; r < rows; r++) {
                        for (int c = 0; c < cols; c++) {
                            m[r][c] = input.nextInt();
                        }
                    }
                    for (int c = 0; c < cols; c++) {
                        int sum = 0;
                        for (int r = 0; r < rows; r++) {
                            sum += m[r][c];
                        }
                        if (c > 0) System.out.print(" ");
                        System.out.print(sum);
                    }
                    System.out.println();
                }
            }
          `,
          tests: [ { stdin: '2 3\n1 2 3\n4 5 6', expected: '5 7 9' }, { stdin: '3 2\n1 1\n2 2\n3 3', expected: '6 6' }, { stdin: '1 1\n5', expected: '5' } ],
          hint: "Outer loop over columns, inner loop over rows, sum += m[r][c]. Print a space before every column total except the first.", explain: "Fix a column and walk down the rows." },
        { t: 'bug', q: "The table has 3 rows and 4 columns. The program should print the total of each column, but it crashes. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] m = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
                    for (int c = 0; c < m[0].length; c++) {
                        int colSum = 0;
                        for (int r = 0; r < m[0].length; r++) {
                            colSum += m[r][c];
                        }
                        System.out.println("Column " + c + ": " + colSum);
                    }
                }
            }
          `, bug: 6,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] m = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
                    for (int c = 0; c < m[0].length; c++) {
                        int colSum = 0;
                        for (int r = 0; r < m.length; r++) {
                            colSum += m[r][c];
                        }
                        System.out.println("Column " + c + ": " + colSum);
                    }
                }
            }
          `,
          hint: "The inner loop walks over the rows. How many rows are there?",
          explain: "The inner loop goes over the <b>rows</b>, but its bound <code>m[0].length</code> is the number of columns (4). When <code>r</code> becomes 3, <code>m[3]</code> does not exist and the program stops with <code>ArrayIndexOutOfBoundsException</code> before printing anything. The row bound is <code>m.length</code> (3). The fixed program prints 15, 18, 21 and 24.",
          explainAr: "الحلقة الداخلية تمر على الصفوف، فحدّها m.length وليس m[0].length." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{2, 7, 1}, {8, 3, 4}, {5, 6, 9}};
                  int main = 0;
                  int other = 0;
                  for (int i = 0; i < m.length; i++) {
                      main += m[i][i];
                      other += m[i][m.length - 1 - i];
                  }
                  System.out.println(main + " " + other);
              }
          }
        `, answer: '14 9', explain: "Main diagonal: 2 + 3 + 9 = 14. Other diagonal: m[0][2] + m[1][1] + m[2][0] = 1 + 3 + 5 = 9." },
        { t: 'code', q: "Read <code>n</code> and then an n × n table of integers. Print two lines: <code>Main: x</code> (the sum of the main diagonal) and <code>Other: y</code> (the sum of the other diagonal). No prompts.",
          qAr: "اطبع{{g:|ي}} مجموع القطر الرئيسي ومجموع القطر الآخر.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[][] m = new int[n][n];
                    // read the table, then add the two diagonals with one loop
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[][] m = new int[n][n];
                    for (int r = 0; r < n; r++) {
                        for (int c = 0; c < n; c++) {
                            m[r][c] = input.nextInt();
                        }
                    }
                    int main = 0;
                    int other = 0;
                    for (int i = 0; i < n; i++) {
                        main += m[i][i];
                        other += m[i][n - 1 - i];
                    }
                    System.out.println("Main: " + main);
                    System.out.println("Other: " + other);
                }
            }
          `,
          tests: [ { stdin: '3\n2 7 1\n8 3 4\n5 6 9', expected: 'Main: 14\nOther: 9' }, { stdin: '4\n1 0 0 2\n0 3 4 0\n0 5 6 0\n9 0 0 8', expected: 'Main: 18\nOther: 20' }, { stdin: '1\n7', expected: 'Main: 7\nOther: 7' } ],
          hint: "One loop is enough: m[i][i] for the main diagonal and m[i][n - 1 - i] for the other.",
          explain: "On both diagonals the row is <code>i</code>. Only the column differs: <code>i</code> or <code>n - 1 - i</code>." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 5
    {
      title: 'Ragged arrays: rows of different lengths',
      titleAr: 'المصفوفات غير المنتظمة',
      minutes: 35,
      body: [
        { type: 'h', en: 'Not every row is the same' },
        { type: 'p', en: "Some tables are not rectangles. One student took 2 quizzes, another took 4, a third took only 1. If you make a rectangular table, you waste boxes. Java allows each row to have its <b>own length</b>. This is called a <b>ragged</b> (or jagged) array.",
          ar: "المصفوفة غير المنتظمة: كل صف له طول مختلف." },
        { type: 'analogy', title: 'A staircase of seats', en: "Imagine a stadium where the front row has 5 seats, the next row has 8, and the back row has 12. The rows are not equal, but each row still has its own seat numbers. In Java a 2D array is a row of rows, so each row can have a different size.",
          ar: "مثل مدرج: كل صف فيه عدد مختلف من المقاعد." },
        { type: 'p', en: "Why is this possible? Think back to the memory picture of Lesson 1. A 2D array is an <b>array of rows</b>, and every row is a separate 1D array with its own <code>length</code>. Nothing forces the rows to be equal. A rectangle is only the special case where all the rows happen to have the same length." },
        { type: 'analogy', title: 'A calendar', en: "A calendar for one year has 12 months, but the months do not have the same number of days: 31, 28 (or 29), 31, 30 … If you store the year as a table with one row per month, the rows are naturally of different lengths. A ragged array fits this data exactly, with no empty boxes at the end of short months.",
          ar: "مثل التقويم: لكل شهر عدد مختلف من الأيام." },
        { type: 'p', en: "With braces it is easy: just write a different number of values in each row." },
        { type: 'code', code: J`
          int[][] marks = {
              {90, 85},
              {70, 75, 80, 65},
              {88}
          };
        ` },
        { type: 'code', code: J`
          row 0 | 90 | 85 |
          row 1 | 70 | 75 | 80 | 65 |
          row 2 | 88 |
        ` },
        { type: 'lines', rows: [
          ['marks.length', '3: the number of rows.'],
          ['marks[0].length', '2: row 0 has two marks.'],
          ['marks[1].length', '4: row 1 has four marks.'],
          ['marks[2].length', '1: row 2 has one mark.']
        ], ar: "marks[i].length يعطي طول الصف i." },
        { type: 'check', q: "For the table above, what is <code>marks[1][3]</code>?", options: ['75', '65', '80', 'An error'], answer: 1, explain: "Row 1 is {70, 75, 80, 65}; index 3 is 65." },
        { type: 'p', en: "Because rows have different lengths, the inner loop must use <code>marks[i].length</code> (the length of the <b>current</b> row), not the length of row 0." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] marks = {
                      {90, 85},
                      {70, 75, 80, 65},
                      {88}
                  };
                  for (int i = 0; i < marks.length; i++) {
                      int sum = 0;
                      System.out.print("Student " + i + ":");
                      for (int j = 0; j < marks[i].length; j++) {
                          System.out.print(" " + marks[i][j]);
                          sum += marks[i][j];
                      }
                      System.out.println(" -> avg " + (double) sum / marks[i].length);
                  }
              }
          }
        `, out: J`
          Student 0: 90 85 -> avg 87.5
          Student 1: 70 75 80 65 -> avg 72.5
          Student 2: 88 -> avg 88.0
        ` },
        { type: 'lines', rows: [
          ['j < marks[i].length', 'The inner loop follows the length of the <b>current</b> row <code>i</code>.'],
          ['(double) sum / marks[i].length', 'The average of this student: divided by this row\'s length. <code>(double)</code> keeps the decimals.']
        ] },
        { type: 'table', head: ['i', 'marks[i].length', 'inner loop visits j =', 'sum', 'average'], rows: [
          ['0', '2', '0, 1', '90 + 85 = 175', '175 / 2 = 87.5'],
          ['1', '4', '0, 1, 2, 3', '70 + 75 + 80 + 65 = 290', '290 / 4 = 72.5'],
          ['2', '1', '0', '88', '88 / 1 = 88.0']
        ] },
        { type: 'p', en: "The inner loop runs 2 times, then 4 times, then 1 time. It always stops at the end of the <b>current</b> row, so it never goes past a short row and never misses the end of a long row.",
          ar: "الحلقة الداخلية تتوقف عند نهاية الصف الحالي، فلا تتجاوزه ولا تترك منه شيئًا." },
        { type: 'h', en: 'Creating the rows yourself' },
        { type: 'p', en: "You can also give only the number of rows and create each row later. Leave the second bracket empty: <code>new int[3][]</code>. At first the three rows do not exist yet; then you create each row with its own size." },
        { type: 'code', code: J`
          int[][] tri = new int[3][];
          tri[0] = new int[1];
          tri[1] = new int[2];
          tri[2] = new int[3];
        ` },
        { type: 'memory', title: 'Rows that do not exist yet', en: "After <code>new int[3][]</code> the array of rows exists, but its three boxes hold <code>null</code>: no row yet. Each later line creates one row and puts its arrow into the array of rows.", frames: [
          { label: 'After <code>int[][] tri = new int[3][];</code>', vars: [{ name: 'tri', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }] }
          ] },
          { label: 'After <code>tri[0] = new int[1];</code>', vars: [{ name: 'tri', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }] },
            { id: 'B', cls: 'int[] length 1', fields: [{ name: '[0]', value: '0' }] }
          ] },
          { label: 'After <code>tri[1] = new int[2];</code>', vars: [{ name: 'tri', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', value: 'null' }] },
            { id: 'B', cls: 'int[] length 1', fields: [{ name: '[0]', value: '0' }] },
            { id: 'C', cls: 'int[] length 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }] }
          ] },
          { label: 'After <code>tri[2] = new int[3];</code>', vars: [{ name: 'tri', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
            { id: 'B', cls: 'int[] length 1', fields: [{ name: '[0]', value: '0' }] },
            { id: 'C', cls: 'int[] length 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }] },
            { id: 'D', cls: 'int[] length 3', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] }
          ] }
        ], ar: "بعد new int[3][] تكون الصفوف null حتى ننشئ كل صف بحجمه." },
        { type: 'note', kind: 'warn', en: "While a row is still <code>null</code>, you cannot use it. <code>tri[2][0] = 5;</code> in the first frame stops the program with a <code>NullPointerException</code>: Java follows <code>tri[2]</code>, finds no row, and has nowhere to put the 5. Also <code>tri[2].length</code> crashes in the same way.",
          ar: "استعمال صف قيمته null يوقف البرنامج بخطأ NullPointerException." },
        { type: 'p', en: "Usually you create the rows in a loop. Here row <code>i</code> gets <code>i + 1</code> boxes, which makes a triangle. The new row is created and filled in the same pass of the outer loop." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] tri = new int[4][];
                  for (int i = 0; i < tri.length; i++) {
                      tri[i] = new int[i + 1];
                      for (int j = 0; j < tri[i].length; j++) {
                          tri[i][j] = j + 1;
                      }
                  }
                  for (int i = 0; i < tri.length; i++) {
                      for (int j = 0; j < tri[i].length; j++) {
                          System.out.print(tri[i][j] + " ");
                      }
                      System.out.println();
                  }
              }
          }
        `, out: J`
          1
          1 2
          1 2 3
          1 2 3 4
        ` },
        { type: 'lines', rows: [
          ['tri[i] = new int[i + 1];', 'Create row <code>i</code> with <code>i + 1</code> boxes: lengths 1, 2, 3, 4.'],
          ['j < tri[i].length', 'Fill and print only the boxes of this row.']
        ] },
        { type: 'check', q: "Which creates a table with 4 rows whose lengths are decided later?", options: ['<code>new int[4][]</code>', '<code>new int[][4]</code>', '<code>new int[4]</code>', '<code>new int[][]</code>'], answer: 0, explain: "The number of rows must be written. The columns can be left empty." },
        { type: 'steps', title: 'Worked example: quizzes of different students', problem: "Read the number of students, then for each student the count of quizzes followed by the marks. Print each student's average with one decimal.",
          steps: [
            { en: "Read how many students and create only the rows.", code: J`
              int s = input.nextInt();
              int[][] marks = new int[s][];
            ` },
            { en: "For each student, read how many quizzes, create that row, and fill it.", code: J`
              for (int i = 0; i < s; i++) {
                  int k = input.nextInt();
                  marks[i] = new int[k];
                  for (int j = 0; j < k; j++) {
                      marks[i][j] = input.nextInt();
                  }
              }
            ` },
            { en: "Compute the average of each row using <code>marks[i].length</code> and print with <code>printf</code> (one decimal).", code: J`
              System.out.printf("Student %d: %.1f%n", i + 1, (double) sum / marks[i].length);
            ` },
            { en: "Complete program (input: two students):" }
          ],
          stdin: '2\n2 90 85\n3 70 80 60',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int s = input.nextInt();
                    int[][] marks = new int[s][];
                    for (int i = 0; i < s; i++) {
                        int k = input.nextInt();
                        marks[i] = new int[k];
                        for (int j = 0; j < k; j++) {
                            marks[i][j] = input.nextInt();
                        }
                    }
                    for (int i = 0; i < s; i++) {
                        int sum = 0;
                        for (int j = 0; j < marks[i].length; j++) {
                            sum += marks[i][j];
                        }
                        System.out.printf("Student %d: %.1f%n", i + 1, (double) sum / marks[i].length);
                    }
                }
            }
          `, out: J`
            Student 1: 87.5
            Student 2: 70.0
          `, ar: "ننشئ كل صف بحجمه الخاص بعد قراءة عدد الدرجات." },
        { type: 'note', kind: 'warn', en: "Never use <code>m[0].length</code> as the bound for every row of a ragged array. Always use <code>m[i].length</code>. And <code>new int[][3]</code> (columns without rows) is a compile error.",
          ar: "في المصفوفة غير المنتظمة استخدم{{g:|ي}} طول الصف الحالي دائمًا." },
        { type: 'steps', title: 'Worked example: goals of a school league', problem: "Three teams played a different number of matches. The goals of each match are in a ragged array. Print, for each team, the number of matches and the total goals, then the number of the team with the most goals.",
          steps: [
            { en: "Team 1 played 3 matches, team 2 played 2, team 3 played 4.", code: J`
              int[][] goals = {
                  {2, 1, 3},
                  {0, 4},
                  {1, 2, 2, 3}
              };
            ` },
            { en: "The number of matches of team <code>i</code> is simply the length of its row.", code: "int matches = goals[i].length;" },
            { en: "Add the goals of the row with the bound <code>goals[i].length</code>.", code: J`
              int total = 0;
              for (int j = 0; j < goals[i].length; j++) {
                  total += goals[i][j];
              }
            ` },
            { en: "King of the hill on the totals (row 0 is the first champion). Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] goals = {
                        {2, 1, 3},
                        {0, 4},
                        {1, 2, 2, 3}
                    };
                    int bestTeam = 0;
                    int bestTotal = 0;
                    for (int i = 0; i < goals.length; i++) {
                        int total = 0;
                        for (int j = 0; j < goals[i].length; j++) {
                            total += goals[i][j];
                        }
                        System.out.println("Team " + (i + 1) + ": " + goals[i].length + " matches, " + total + " goals");
                        if (i == 0 || total > bestTotal) {
                            bestTotal = total;
                            bestTeam = i;
                        }
                    }
                    System.out.println("Most goals: team " + (bestTeam + 1));
                }
            }
          `, out: J`
            Team 1: 3 matches, 6 goals
            Team 2: 2 matches, 4 goals
            Team 3: 4 matches, 8 goals
            Most goals: team 3
          `, ar: "عدد مباريات الفريق هو طول صفه goals[i].length." }
      ],
      mistakes: [
        { title: 'Using the length of row 0 for every row', en: "A longer row is cut, or a shorter row crashes.", code: J`
          for (int j = 0; j < m[0].length; j++)   // WRONG for ragged arrays
              ... m[i][j] ...
        ` },
        { title: 'Using a row before creating it', en: "After <code>new int[3][]</code>, every row is <code>null</code> until you create it.", code: J`
          int[][] t = new int[3][];
          t[0][0] = 5;   // WRONG: row 0 does not exist yet
        ` },
        { title: 'Writing the sizes in the wrong brackets', en: "The rows number is the first one.", code: J`
          int[][] t = new int[][3];   // WRONG
          int[][] u = new int[3][];   // correct
        ` },
        { title: 'Dividing by the wrong length', en: "Each student's average uses that student's own number of marks.", code: J`
          (double) sum / marks[0].length   // WRONG for other students
        ` }
      ],
      remember: [
        "A ragged array has rows of different lengths.",
        "Use the length of the current row: <code>m[i].length</code>.",
        "<code>new int[3][]</code> makes 3 empty rows; create each with <code>m[i] = new int[size];</code>.",
        "The number of rows is always required, the number of columns may be left out.",
        "Until a row is created it is <code>null</code>; using it causes a <code>NullPointerException</code>.",
        "Rows can differ because each row is its own 1D array object."
      ],
      rememberAr: "المصفوفة غير المنتظمة أطوال صفوفها مختلفة. نستخدم دائمًا m[i].length. new int[3][] ينشئ 3 صفوف فارغة ننشئ كلًّا منها بحجمه.",
      practice: [
        { t: 'mcq', q: "What is a ragged array?", options: ['A broken array', 'A 2D array whose rows have different lengths', 'An array of zero length', 'A 3D array'], answer: 1, explain: "Each row can have its own length." },
        { t: 'mcq', q: "Given <code>int[][] r = {{1}, {2, 3, 4}, {5, 6}};</code>, what are <code>r.length</code>, <code>r[1].length</code> and <code>r[2].length</code>?", options: ['3, 3, 2', '3, 2, 3', '6, 3, 2', '1, 3, 2'], answer: 0, explain: "3 rows; row 1 has 3 elements; row 2 has 2." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] r = {{1, 2, 3}, {4}, {5, 6}};
                  for (int[] row : r) {
                      System.out.print(row.length);
                  }
                  System.out.println();
                  System.out.println(r[2][1] + r[1][0]);
              }
          }
        `, answer: J`
          312
          10
        `, explain: "The row lengths 3, 1 and 2 are printed together. Then r[2][1] + r[1][0] = 6 + 4 = 10. (<code>for (int[] row : r)</code> takes the rows one by one.)" },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] r = new int[3][];
                  for (int i = 0; i < r.length; i++) {
                      r[i] = new int[i + 2];
                  }
                  int cells = 0;
                  for (int i = 0; i < r.length; i++) {
                      cells += r[i].length;
                  }
                  System.out.println(cells);
                  System.out.println(r[2][3]);
              }
          }
        `, answer: J`
          9
          0
        `, explain: "Rows get lengths 2, 3 and 4, so there are 9 cells. r[2] has 4 boxes, so r[2][3] exists and is 0." },
        { t: 'fill', q: "Complete the code that prints the length of every row.", code: J`
          int[][] t = {{1, 2}, {3}, {4, 5, 6}};
          for (int i = 0; i < t.___; i++) {
              System.out.println(t[i].___);
          }
        `, answers: ['length', 'length'], explain: "<code>t.length</code> is the number of rows; <code>t[i].length</code> the length of row i." },
        { t: 'mcq', q: "Which statement correctly starts a ragged array with 3 rows?", options: ['<code>int[][] a = new int[][3];</code>', '<code>int[][] a = new int[3][];</code>', '<code>int[][] a = new int[];</code>', '<code>int[3][] a = new int;</code>'], answer: 1, explain: "The number of rows is required; each row is created later." },
        { t: 'code', q: "Read a number <code>s</code> of students. For each student read <code>k</code> (the number of marks) and then <code>k</code> marks. Print for each student <code>Student i: total</code> (i starts at 1, total = sum of the marks). No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int s = input.nextInt();
                    int[][] marks = new int[s][];
                    // for each student: read k, create the row, read k marks
                    // then print the totals
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int s = input.nextInt();
                    int[][] marks = new int[s][];
                    for (int i = 0; i < s; i++) {
                        int k = input.nextInt();
                        marks[i] = new int[k];
                        for (int j = 0; j < k; j++) {
                            marks[i][j] = input.nextInt();
                        }
                    }
                    for (int i = 0; i < s; i++) {
                        int total = 0;
                        for (int j = 0; j < marks[i].length; j++) {
                            total += marks[i][j];
                        }
                        System.out.println("Student " + (i + 1) + ": " + total);
                    }
                }
            }
          `,
          tests: [ { stdin: '2\n2 90 85\n3 70 80 60', expected: 'Student 1: 175\nStudent 2: 210' }, { stdin: '1\n1 50', expected: 'Student 1: 50' }, { stdin: '3\n1 5\n2 1 2\n3 1 2 3', expected: 'Student 1: 5\nStudent 2: 3\nStudent 3: 6' } ],
          hint: "marks[i] = new int[k]; creates row i. Use marks[i].length in the second loop.", explain: "Each row is created with the size that the input gives." },
        { t: 'bug', q: "Each team played a different number of matches. The program prints the first team and then crashes. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] goals = {{2, 1, 3}, {0, 4}, {1, 2, 2, 3}};
                    for (int i = 0; i < goals.length; i++) {
                        int total = 0;
                        for (int j = 0; j < goals[0].length; j++) {
                            total += goals[i][j];
                        }
                        System.out.println("Team " + (i + 1) + ": " + total);
                    }
                }
            }
          `, bug: 6,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] goals = {{2, 1, 3}, {0, 4}, {1, 2, 2, 3}};
                    for (int i = 0; i < goals.length; i++) {
                        int total = 0;
                        for (int j = 0; j < goals[i].length; j++) {
                            total += goals[i][j];
                        }
                        System.out.println("Team " + (i + 1) + ": " + total);
                    }
                }
            }
          `,
          hint: "Do all rows have the same length as row 0?",
          explain: "<code>goals[0].length</code> is 3 for every row. Row 0 works (Team 1: 6), but row 1 has only 2 boxes, so <code>goals[1][2]</code> stops the program with <code>ArrayIndexOutOfBoundsException</code>. (Row 2 would also lose its fourth match.) The bound must be the length of the current row, <code>goals[i].length</code>. Then the program prints 6, 4 and 8.",
          explainAr: "في المصفوفة غير المنتظمة يجب أن يكون الحد طول الصف الحالي goals[i].length." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] tri = new int[4][];
                  for (int i = 0; i < tri.length; i++) {
                      tri[i] = new int[i + 1];
                      for (int j = 0; j < tri[i].length; j++) {
                          tri[i][j] = i + j;
                      }
                  }
                  System.out.println(tri[3].length + " " + tri[3][3]);
                  System.out.println(tri[2][0] + tri[2][2]);
              }
          }
        `, answer: J`
          4 6
          6
        `, explain: "Row 3 has 3 + 1 = 4 boxes, and its last box is 3 + 3 = 6. In row 2, box 0 is 2 + 0 = 2 and box 2 is 2 + 2 = 4, so 2 + 4 = 6." },
        { t: 'code', q: "Read a number <code>n</code>. Build a ragged array with <code>n</code> rows where row <code>i</code> has <code>i + 1</code> boxes, and box <code>j</code> of row <code>i</code> holds <code>(i + 1) * (j + 1)</code> (half of a multiplication table). Print each row on its own line with single spaces between values. No prompts.",
          qAr: "الصف i فيه i + 1 خانة: أنشئ{{g:|ي}} كل صف بحجمه ثم املأه.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[][] tri = new int[n][];
                    // create and fill each row, then print the triangle
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[][] tri = new int[n][];
                    for (int i = 0; i < n; i++) {
                        tri[i] = new int[i + 1];
                        for (int j = 0; j < tri[i].length; j++) {
                            tri[i][j] = (i + 1) * (j + 1);
                        }
                    }
                    for (int i = 0; i < n; i++) {
                        for (int j = 0; j < tri[i].length; j++) {
                            if (j > 0) System.out.print(" ");
                            System.out.print(tri[i][j]);
                        }
                        System.out.println();
                    }
                }
            }
          `,
          tests: [ { stdin: '3', expected: '1\n2 4\n3 6 9' }, { stdin: '1', expected: '1' }, { stdin: '4', expected: '1\n2 4\n3 6 9\n4 8 12 16' } ],
          hint: "tri[i] = new int[i + 1]; then fill with the bound tri[i].length.",
          explain: "Each row is created inside the outer loop with its own size; every inner loop uses the length of the current row." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 6
    {
      title: 'Passing and returning tables',
      titleAr: 'تمرير الجداول وإرجاعها من الدوال',
      minutes: 40,
      body: [
        { type: 'h', en: 'Why methods for tables?' },
        { type: 'p', en: "Nested loops make code long. If you need &quot;print a table&quot; or &quot;sum of a table&quot; in many places, write it once as a method and call it. A method can receive a 2D array and also return one.",
          ar: "نكتب العملية مرة واحدة في دالة ونستدعيها كلما احتجنا." },
        { type: 'p', en: "Methods also make <code>main</code> easy to read, like a list of steps: <code>readTable</code>, <code>printTable</code>, <code>rowTotals</code>. Each method does one small job, so you can test it alone and find mistakes faster. You already did this with 1D arrays in CS101; the only new thing is the type <code>int[][]</code>." },
        { type: 'analogy', title: 'A photocopy of the key, not of the flat', en: "As with 1D arrays, a method does not receive a copy of the whole table. It receives the &quot;key&quot; (the address). So the method works on the same table, and if it changes a box, the caller sees the change.",
          ar: "الدالة تستلم المرجع نفسه، فتغيير الصناديق داخلها يظهر في المستدعي." },
        { type: 'code', code: J`
          public static void printMatrix(int[][] m) {
              for (int i = 0; i < m.length; i++) {
                  for (int j = 0; j < m[i].length; j++) {
                      System.out.print(m[i][j] + " ");
                  }
                  System.out.println();
              }
          }
        ` },
        { type: 'lines', rows: [
          ['int[][] m', 'The parameter is a table of ints. Two pairs of brackets, as for variables.'],
          ['void', 'It prints and returns nothing.'],
          ['to call it: printMatrix(table);', 'Write only the name of the table.']
        ], ar: "المعامل int[][] يعني جدولًا." },
        { type: 'check', q: "Which is the correct header for a method that receives a table of doubles and returns the sum as a double?", options: ['<code>double sum(double[] m)</code>', '<code>double sum(double[][] m)</code>', '<code>double[][] sum(double m)</code>', '<code>void sum(double m[][][])</code>'], answer: 1, explain: "A table parameter is <code>double[][]</code>; the result is one double." },
        { type: 'h', en: 'Nested for-each' },
        { type: 'p', en: "When you only <b>read</b> boxes, nested for-each loops are shorter. The outer variable is a whole <b>row</b>, of type <code>int[]</code>. The inner variable is one value." },
        { type: 'code', code: J`
          public static int sum(int[][] m) {
              int total = 0;
              for (int[] row : m) {
                  for (int value : row) {
                      total += value;
                  }
              }
              return total;
          }
        ` },
        { type: 'lines', rows: [
          ['for (int[] row : m)', 'Take the rows one by one. Each <code>row</code> is a 1D array.'],
          ['for (int value : row)', 'Take the boxes of the current row one by one.'],
          ['total += value;', 'Add each value. At the end, all boxes are added.']
        ], ar: "المتغير الخارجي صف من نوع int[] والداخلي قيمة." },
        { type: 'table', head: ['row (outer variable)', 'value (inner variable)', 'total'], rows: [
          ['{80, 90}', '80', '80'],
          ['{80, 90}', '90', '170'],
          ['{70, 60}', '70', '240'],
          ['{70, 60}', '60', '300 → return 300']
        ] },
        { type: 'p', en: "The trace above is for <code>sum</code> on the table <code>{{80, 90}, {70, 60}}</code>. The outer variable holds a whole row; the inner variable holds one number of that row." },
        { type: 'h', en: 'A row is a 1D array: reuse your CS101 methods' },
        { type: 'p', en: "Here is a useful idea. <code>sales[r]</code> is a whole row, and a row is an ordinary <code>int[]</code>. So you can pass one row to any method that takes a 1D array, for example the <code>sum(int[] a)</code> method you wrote in CS101. You do not need a new method for rows.",
          ar: "الصف sales[r] مصفوفة أحادية، فيمكن تمريره لأي دالة تستقبل int[]." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] sales = {{120, 150, 130}, {90, 110, 100}};
                  for (int r = 0; r < sales.length; r++) {
                      System.out.println("Branch " + (r + 1) + ": " + sum(sales[r]));
                  }
              }

              public static int sum(int[] a) {
                  int total = 0;
                  for (int v : a) {
                      total += v;
                  }
                  return total;
              }
          }
        `, out: J`
          Branch 1: 400
          Branch 2: 300
        ` },
        { type: 'lines', rows: [
          ['sum(sales[r])', 'One pair of brackets: we pass the <b>whole row</b> <code>r</code>, a 1D array.'],
          ['public static int sum(int[] a)', 'An ordinary 1D method. It does not know that the array is a row of a table.']
        ] },
        { type: 'check', q: "<code>int[][] m = new int[4][6];</code> Which call matches the header <code>static int sum(int[] a)</code>?", options: ['<code>sum(m)</code>', '<code>sum(m[2])</code>', '<code>sum(m[2][3])</code>', '<code>sum(m[][])</code>'], answer: 1, explain: "<code>m[2]</code> is row 2, an <code>int[]</code>. <code>m</code> is an <code>int[][]</code> and <code>m[2][3]</code> is a single <code>int</code>." },
        { type: 'h', en: 'Returning a table' },
        { type: 'p', en: "A method can also build a table and return it. The return type is <code>int[][]</code>." },
        { type: 'analogy', title: 'A carpenter builds a new cupboard', en: "You tell a carpenter: &quot;3 shelves, 4 boxes on each shelf&quot;. He builds a <b>new</b> cupboard and gives it to you. Your old furniture is not touched. A method that returns <code>int[][]</code> does the same: it creates a new table inside, fills it, and gives back the arrow to it.",
          ar: "الدالة تبني جدولًا جديدًا وتعيد مرجعه إلى من استدعاها." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] table = multiplicationTable(3, 4);
                  printMatrix(table);
                  System.out.println("Sum = " + sum(table));
              }

              public static int[][] multiplicationTable(int rows, int cols) {
                  int[][] result = new int[rows][cols];
                  for (int i = 0; i < rows; i++) {
                      for (int j = 0; j < cols; j++) {
                          result[i][j] = (i + 1) * (j + 1);
                      }
                  }
                  return result;
              }

              public static int sum(int[][] m) {
                  int total = 0;
                  for (int[] row : m) {
                      for (int value : row) {
                          total += value;
                      }
                  }
                  return total;
              }

              public static void printMatrix(int[][] m) {
                  for (int i = 0; i < m.length; i++) {
                      for (int j = 0; j < m[i].length; j++) {
                          System.out.print(m[i][j] + " ");
                      }
                      System.out.println();
                  }
              }
          }
        `, out: J`
          1 2 3 4
          2 4 6 8
          3 6 9 12
          Sum = 60
        ` },
        { type: 'check', q: "What does <code>multiplicationTable(3, 4)</code> give back?", options: ['A single int', 'A table with 3 rows and 4 columns', 'A table with 4 rows and 3 columns', 'Nothing'], answer: 1, explain: "The first parameter is rows (3), the second is columns (4)." },
        { type: 'h', en: 'A method that changes a table' },
        { type: 'p', en: "Because the method gets the same table, it can change it. This method doubles every box. It returns nothing, but the caller's table is changed." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] g = {{1, 2}, {3, 4}};
                  doubleAll(g);
                  System.out.println(g[0][0] + " " + g[0][1]);
                  System.out.println(g[1][0] + " " + g[1][1]);
              }

              public static void doubleAll(int[][] m) {
                  for (int i = 0; i < m.length; i++) {
                      for (int j = 0; j < m[i].length; j++) {
                          m[i][j] = m[i][j] * 2;
                      }
                  }
              }
          }
        `, out: J`
          2 4
          6 8
        ` },
        { type: 'memory', title: 'Two names, one table', en: "When <code>main</code> calls <code>doubleAll(g)</code>, Java copies the <b>arrow</b>, not the table. For a short time two variables point to the same table: <code>g</code> in <code>main</code> and <code>m</code> in <code>doubleAll</code>.", frames: [
          { label: 'In <code>main</code>, after <code>int[][] g = {{1, 2}, {3, 4}};</code>', vars: [{ name: 'g (main)', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '3' }, { name: '[1]', value: '4' }] }
          ] },
          { label: '<code>doubleAll(g)</code> starts: the parameter <code>m</code> gets a copy of the arrow', vars: [{ name: 'g (main)', type: 'int[][]', ref: 'A' }, { name: 'm (doubleAll)', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '3' }, { name: '[1]', value: '4' }] }
          ] },
          { label: 'The loops in <code>doubleAll</code> change the boxes through <code>m</code>', vars: [{ name: 'g (main)', type: 'int[][]', ref: 'A' }, { name: 'm (doubleAll)', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '2' }, { name: '[1]', value: '4' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '6' }, { name: '[1]', value: '8' }] }
          ] },
          { label: 'Back in <code>main</code>: <code>m</code> is gone, but <code>g</code> sees the changed table', vars: [{ name: 'g (main)', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '2' }, { name: '[1]', value: '4' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '6' }, { name: '[1]', value: '8' }] }
          ] }
        ], ar: "المعامل m والمتغير g يشيران إلى الجدول نفسه، فالتعديل داخل الدالة يبقى بعد عودتها." },
        { type: 'note', kind: 'warn', en: "To change boxes use the indexed loop (<code>m[i][j] = ...</code>). In a for-each loop, <code>value</code> is only a copy, so <code>value = value * 2;</code> changes nothing.",
          ar: "للتعديل استخدم{{g:|ي}} الحلقة ذات الفهارس." },
        { type: 'steps', title: 'Worked example: average of a table', problem: "Write a method <code>average</code> that receives a table of ints and returns the average of all its boxes.",
          steps: [
            { en: "Header: a table in, a <code>double</code> out.", code: "public static double average(int[][] m) {" },
            { en: "Add all values and count them in the same loop.", code: J`
              int sum = 0;
              int count = 0;
              for (int[] row : m) {
                  for (int value : row) {
                      sum += value;
                      count++;
                  }
              }
            ` },
            { en: "Return the average with <code>(double)</code>.", code: "return (double) sum / count;" },
            { en: "Test it in main. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] scores = {{80, 90}, {70, 60}, {100, 50}};
                    System.out.println("Average: " + average(scores));
                }

                public static double average(int[][] m) {
                    int sum = 0;
                    int count = 0;
                    for (int[] row : m) {
                        for (int value : row) {
                            sum += value;
                            count++;
                        }
                    }
                    return (double) sum / count;
                }
            }
          `, out: J`
            Average: 75.0
          `, ar: "نجمع القيم ونعدّها في الحلقة نفسها، ثم نقسم مع (double)." },
        { type: 'h', en: 'A table in, a 1D array out' },
        { type: 'p', en: "A method can also turn a table into a 1D array: one answer per row. Then your CS101 methods for 1D arrays can finish the job. This is how real programs are built: small methods passing results to each other." },
        { type: 'steps', title: 'Worked example: totals of each branch', problem: "Write a method <code>rowTotals</code> that receives a table of sales and returns a 1D array with the total of each row. Print the array with <code>Arrays.toString</code>, then use a 1D method <code>indexOfMax</code> to print the best branch.",
          steps: [
            { en: "The result has one box per row, so its length is <code>m.length</code>.", code: J`
              public static int[] rowTotals(int[][] m) {
                  int[] totals = new int[m.length];
            ` },
            { en: "Fill box <code>r</code> with the total of row <code>r</code>, then return the 1D array.", code: J`
                  for (int r = 0; r < m.length; r++) {
                      for (int c = 0; c < m[r].length; c++) {
                          totals[r] += m[r][c];
                      }
                  }
                  return totals;
              }
            ` },
            { en: "<code>indexOfMax</code> is a normal CS101 method for a 1D array.", code: J`
              public static int indexOfMax(int[] a) {
                  int best = 0;
                  for (int i = 1; i < a.length; i++) {
                      if (a[i] > a[best]) best = i;
                  }
                  return best;
              }
            ` },
            { en: "<code>main</code> now reads like a story. Complete program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[][] sales = {
                        {120, 150, 130, 160},
                        {90, 110, 100, 140},
                        {200, 180, 210, 190}
                    };
                    int[] totals = rowTotals(sales);
                    System.out.println(Arrays.toString(totals));
                    System.out.println("Best branch: " + (indexOfMax(totals) + 1));
                }

                public static int[] rowTotals(int[][] m) {
                    int[] totals = new int[m.length];
                    for (int r = 0; r < m.length; r++) {
                        for (int c = 0; c < m[r].length; c++) {
                            totals[r] += m[r][c];
                        }
                    }
                    return totals;
                }

                public static int indexOfMax(int[] a) {
                    int best = 0;
                    for (int i = 1; i < a.length; i++) {
                        if (a[i] > a[best]) best = i;
                    }
                    return best;
                }
            }
          `, out: J`
            [560, 440, 780]
            Best branch: 3
          `, ar: "الدالة تحوّل الجدول إلى مصفوفة أحادية فيها مجموع كل صف." },
        { type: 'check', q: "What is the return type of a method that gives back <b>one total for each row</b> of an <code>int[][]</code>?", options: ['<code>int</code>', '<code>int[]</code>', '<code>int[][]</code>', '<code>void</code>'], answer: 1, explain: "One number per row is a list of numbers: a 1D array <code>int[]</code>." }
      ],
      mistakes: [
        { title: 'Wrong parameter type', en: "A table is <code>int[][]</code>, not <code>int[]</code>.", code: J`
          public static int sum(int[] m)   // this takes a 1D array
        ` },
        { title: 'Putting brackets in the call', en: "Call with only the name.", code: J`
          sum(table[][]);   // WRONG
          sum(table);       // correct
        ` },
        { title: 'Forgetting that the table is shared', en: "A method that changes boxes changes the caller's table. Copy first if you want to keep the original.", code: J`
          doubleAll(g);   // g is changed!
        ` },
        { title: 'Wrong type for the outer for-each variable', en: "A row is an <code>int[]</code>, not an <code>int</code>.", code: J`
          for (int row : m)    // WRONG
          for (int[] row : m)  // correct
        ` }
      ],
      remember: [
        "A table parameter is written <code>int[][] m</code>; a call uses just <code>m</code>.",
        "The method works on the same table, so it can change boxes.",
        "Return a table with the type <code>int[][]</code>.",
        "Nested for-each: outer variable is a row (<code>int[]</code>), inner is a value.",
        "For-each only reads. Use indexes to change boxes.",
        "A row <code>m[r]</code> is an <code>int[]</code>: pass it to any 1D method, such as <code>sum(m[r])</code>."
      ],
      rememberAr: "المعامل جدول يُكتب int[][]. الدالة تعمل على الجدول نفسه فيمكنها تعديله. في for-each المتداخلة المتغير الخارجي صف int[] والداخلي قيمة.",
      practice: [
        { t: 'mcq', q: "Which parameter type receives a table of ints?", options: ['<code>int m</code>', '<code>int[] m</code>', '<code>int[][] m</code>', '<code>table m</code>'], answer: 2, explain: "Two pairs of brackets for two dimensions." },
        { t: 'mcq', q: "In <code>for (int[] row : m)</code>, what is <code>row</code>?", options: ['One number', 'One row of the table', 'The column', 'The size'], answer: 1, explain: "Each step takes one whole row." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] g = {{1, 2}, {3, 4}};
                  doubleAll(g);
                  System.out.println(g[0][1] + g[1][0]);
              }

              public static void doubleAll(int[][] m) {
                  for (int[] row : m) {
                      for (int j = 0; j < row.length; j++) {
                          row[j] *= 2;
                      }
                  }
              }
          }
        `, answer: '10', explain: "The method changes the shared table: {{2, 4}, {6, 8}}. Then 4 + 6 = 10." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{1, 2}, {3, 4}};
                  System.out.println(count(m));
              }

              public static int count(int[][] t) {
                  int n = 0;
                  for (int[] row : t) {
                      for (int v : row) {
                          if (v > 1) n++;
                      }
                  }
                  return n;
              }
          }
        `, answer: '3', explain: "The values 2, 3 and 4 are greater than 1." },
        { t: 'fill', q: "Complete the method that returns a new table filled with 1.", code: J`
          public static int[][] ones(int rows, int cols) {
              int[][] t = new int[rows][cols];
              for (int i = 0; i < rows; i++) {
                  for (int j = 0; j < cols; j++) {
                      t[i][j] = ___;
                  }
              }
              ___ t;
          }
        `, answers: ['1', 'return'], explain: "Put 1 in every box and return the table." },
        { t: 'mcq', q: "Which is the right header for a method that returns the average of all elements of a table of doubles?", options: ['<code>public static double average(double[] m)</code>', '<code>public static double[][] average(double m)</code>', '<code>public static double average(double[][] m)</code>', '<code>public static double average(double m[][][])</code>'], answer: 2, explain: "A table in, one double out." },
        { t: 'order', q: "Arrange the lines of a method that returns the biggest value of a table of ints.", lines: [
          'public static int largest(int[][] m) {',
          '    int max = m[0][0];',
          '    for (int[] row : m) {',
          '        for (int v : row) {',
          '            if (v > max) max = v;',
          '        }',
          '    }',
          '    return max;',
          '}'
        ], explain: "Start from the first box; compare in both loops; return after them." },
        { t: 'code', q: "Read <code>rows</code> and <code>cols</code> and a table of integers. Write a method <code>public static int sumAll(int[][] m)</code> that returns the sum of all boxes. Print the result. No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    for (int i = 0; i < rows; i++) {
                        for (int j = 0; j < cols; j++) {
                            m[i][j] = input.nextInt();
                        }
                    }
                    System.out.println(sumAll(m));
                }

                public static int sumAll(int[][] m) {
                    // your code
                    return 0;
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    for (int i = 0; i < rows; i++) {
                        for (int j = 0; j < cols; j++) {
                            m[i][j] = input.nextInt();
                        }
                    }
                    System.out.println(sumAll(m));
                }

                public static int sumAll(int[][] m) {
                    int total = 0;
                    for (int[] row : m) {
                        for (int v : row) {
                            total += v;
                        }
                    }
                    return total;
                }
            }
          `,
          tests: [ { stdin: '2 3\n1 2 3\n4 5 6', expected: '21' }, { stdin: '1 1\n-7', expected: '-7' }, { stdin: '2 2\n0 0\n0 9', expected: '9' } ],
          hint: "Start total at 0, loop over rows and values, return total.", explain: "The method hides the nested loops behind one name." },
        { t: 'bug', q: "<code>addBonus</code> should add 5 to every mark, so the program should print <code>75 65</code>. It prints <code>70 60</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] marks = {{70, 80}, {90, 60}};
                    addBonus(marks);
                    System.out.println(marks[0][0] + " " + marks[1][1]);
                }

                public static void addBonus(int[][] m) {
                    for (int[] row : m) {
                        for (int v : row) {
                            v = v + 5;
                        }
                    }
                }
            }
          `, bug: [10, 11],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] marks = {{70, 80}, {90, 60}};
                    addBonus(marks);
                    System.out.println(marks[0][0] + " " + marks[1][1]);
                }

                public static void addBonus(int[][] m) {
                    for (int[] row : m) {
                        for (int j = 0; j < row.length; j++) {
                            row[j] = row[j] + 5;
                        }
                    }
                }
            }
          `,
          hint: "In a for-each loop, is v the box itself or a copy of its value?",
          explain: "In <code>for (int v : row)</code>, <code>v</code> is a <b>copy</b> of the number in the box. <code>v = v + 5</code> changes only the copy, and the table stays the same. To change a box you need its index: <code>row[j] = row[j] + 5</code>. (The outer loop is fine: <code>row</code> is an arrow to the real row.)",
          explainAr: "متغير for-each نسخة من القيمة؛ لتعديل الخانة نحتاج الفهرس row[j]." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{4, 9, 2}, {7, 1, 8}};
                  System.out.println(max(m[0]) + max(m[1]));
                  System.out.println(max(m[1]) - m[0].length);
              }

              public static int max(int[] a) {
                  int best = a[0];
                  for (int v : a) {
                      if (v > best) best = v;
                  }
                  return best;
              }
          }
        `, answer: J`
          17
          5
        `, explain: "Each row is passed to the 1D method. The largest of row 0 is 9 and of row 1 is 8: 9 + 8 = 17. Then 8 - 3 = 5, because row 0 has 3 boxes." },
        { t: 'code', q: "Read <code>rows</code> and <code>cols</code> and a table of integers. Write a method <code>public static int[] columnTotals(int[][] m)</code> that returns a 1D array with the total of each column. Print the result with <code>Arrays.toString</code>. No prompts.",
          qAr: "الدالة تعيد مصفوفة أحادية فيها مجموع كل عمود.",
          starter: J`
            import java.util.Arrays;
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    for (int i = 0; i < rows; i++) {
                        for (int j = 0; j < cols; j++) {
                            m[i][j] = input.nextInt();
                        }
                    }
                    System.out.println(Arrays.toString(columnTotals(m)));
                }

                public static int[] columnTotals(int[][] m) {
                    // your code
                    return null;
                }
            }
          `,
          solution: J`
            import java.util.Arrays;
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    for (int i = 0; i < rows; i++) {
                        for (int j = 0; j < cols; j++) {
                            m[i][j] = input.nextInt();
                        }
                    }
                    System.out.println(Arrays.toString(columnTotals(m)));
                }

                public static int[] columnTotals(int[][] m) {
                    int[] totals = new int[m[0].length];
                    for (int c = 0; c < m[0].length; c++) {
                        for (int r = 0; r < m.length; r++) {
                            totals[c] += m[r][c];
                        }
                    }
                    return totals;
                }
            }
          `,
          tests: [ { stdin: '2 3\n1 2 3\n4 5 6', expected: '[5, 7, 9]' }, { stdin: '3 2\n10 20\n30 40\n50 60', expected: '[90, 120]' }, { stdin: '1 1\n8', expected: '[8]' } ],
          hint: "The result has one box per column: new int[m[0].length]. Then totals[c] += m[r][c].",
          explain: "The returned array has one box for each column. A new <code>int[]</code> starts with zeros, so <code>+=</code> works directly." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 7
    {
      title: 'Matrices: addition and transpose',
      titleAr: 'المصفوفات الرياضية: الجمع والمنقول',
      minutes: 40,
      body: [
        { type: 'h', en: 'What is a matrix?' },
        { type: 'p', en: "In mathematics a <b>matrix</b> is a table of numbers with <i>n</i> rows and <i>m</i> columns. It is called an <i>n</i> × <i>m</i> matrix (&quot;n by m&quot;; rows first). In Java it is simply a 2D array: <code>new int[n][m]</code>. Engineers, game makers and data scientists use matrices all the time.",
          ar: "المصفوفة الرياضية n × m هي جدول أعداد، وتقابل new int[n][m] في جافا." },
        { type: 'p', en: "Where do you meet matrices? A black-and-white photo on your phone is a matrix of brightness numbers, one per dot; adding the same number to every box makes the photo brighter. A shop that compares the sales of two months subtracts one table from another. A teacher who wants &quot;quizzes × students&quot; instead of &quot;students × quizzes&quot; uses the transpose. In this lesson we write these operations as methods that return a <b>new</b> table." },
        { type: 'h', en: 'Matrix addition' },
        { type: 'p', en: "Two matrices can be added if they have the <b>same size</b>. You add the boxes that are in the same position: <code>c[i][j] = a[i][j] + b[i][j]</code>." },
        { type: 'analogy', title: 'Two class timetables', en: "Put two tables of the same shape on top of each other (for example, the number of absent students on Sunday to Thursday in two classes). To get the total absent, you add box by box: Sunday + Sunday, Monday + Monday ... Tables of different shapes cannot be matched box by box.",
          ar: "نجمع الصندوق مع الصندوق الذي في الموضع نفسه، لذلك يجب أن يتساوى الحجمان." },
        { type: 'code', code: J`
            1  2  3        10  20  30        11  22  33
            4  5  6   +    40  50  60   =    44  55  66
        ` },
        { type: 'code', code: J`
          public static int[][] add(int[][] a, int[][] b) {
              int[][] result = new int[a.length][a[0].length];
              for (int i = 0; i < a.length; i++) {
                  for (int j = 0; j < a[i].length; j++) {
                      result[i][j] = a[i][j] + b[i][j];
                  }
              }
              return result;
          }
        ` },
        { type: 'lines', rows: [
          ['new int[a.length][a[0].length]', 'The result has the same size as <code>a</code>.'],
          ['result[i][j] = a[i][j] + b[i][j];', 'Box by box: the same position in <code>a</code> and in <code>b</code>.'],
          ['return result;', 'Give the new table back; <code>a</code> and <code>b</code> are not changed.']
        ], ar: "الناتج بحجم a نفسه، ونجمع العناصر المتقابلة." },
        { type: 'check', q: "Which two matrices can be added?", options: ['2 × 3 and 3 × 2', '2 × 3 and 2 × 3', '2 × 3 and 3 × 3', '1 × 2 and 2 × 1'], answer: 1, explain: "Same number of rows and same number of columns." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] a = {{1, 2, 3}, {4, 5, 6}};
                  int[][] b = {{10, 20, 30}, {40, 50, 60}};
                  int[][] c = add(a, b);
                  printMatrix(c);
              }

              public static int[][] add(int[][] a, int[][] b) {
                  int[][] result = new int[a.length][a[0].length];
                  for (int i = 0; i < a.length; i++) {
                      for (int j = 0; j < a[i].length; j++) {
                          result[i][j] = a[i][j] + b[i][j];
                      }
                  }
                  return result;
              }

              public static void printMatrix(int[][] m) {
                  for (int[] row : m) {
                      for (int value : row) {
                          System.out.print(value + " ");
                      }
                      System.out.println();
                  }
              }
          }
        `, out: J`
          11 22 33
          44 55 66
        ` },
        { type: 'h', en: 'Check the sizes first' },
        { type: 'p', en: "Box-by-box operations need two tables of the same shape. A careful program checks this before it starts, with a small method that returns a <code>boolean</code>. The same loops also do <b>subtraction</b>: here a shop compares the sales of two months in two branches (rows) for two products (columns). A negative number means the sales went down." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] june = {{120, 150}, {90, 110}};
                  int[][] july = {{130, 140}, {95, 125}};
                  if (sameSize(june, july)) {
                      for (int i = 0; i < july.length; i++) {
                          for (int j = 0; j < july[i].length; j++) {
                              System.out.print((july[i][j] - june[i][j]) + " ");
                          }
                          System.out.println();
                      }
                  } else {
                      System.out.println("Different sizes");
                  }
              }

              public static boolean sameSize(int[][] a, int[][] b) {
                  return a.length == b.length && a[0].length == b[0].length;
              }
          }
        `, out: J`
          10 -10
          5 15
        ` },
        { type: 'lines', rows: [
          ['a.length == b.length && a[0].length == b[0].length', 'Same number of rows <b>and</b> same number of columns. Both must be true.'],
          ['july[i][j] - june[i][j]', 'Subtraction, box by box: 130 - 120 = 10, 140 - 150 = -10, and so on.']
        ], ar: "نتحقق من تساوي عدد الصفوف وعدد الأعمدة قبل الجمع أو الطرح." },
        { type: 'check', q: "<code>a</code> is 2 × 3 and <code>b</code> is 2 × 4. What does <code>sameSize(a, b)</code> return?", options: ['true', 'false', 'It crashes', '2'], answer: 1, explain: "The rows match (2 and 2) but the columns do not (3 and 4), so the <code>&amp;&amp;</code> gives false." },
        { type: 'h', en: 'Transpose: rows become columns' },
        { type: 'p', en: "The <b>transpose</b> of a matrix turns every row into a column. The box <code>[i][j]</code> moves to <code>[j][i]</code>. A 2 × 3 matrix becomes a 3 × 2 matrix, so the result must be created with the sizes <b>swapped</b>: <code>new int[m[0].length][m.length]</code>.",
          ar: "المنقول: الصفوف تصبح أعمدة، والحجم يتبدل: 2 × 3 يصير 3 × 2." },
        { type: 'analogy', title: 'Turning a page', en: "Imagine a photo of a table. Fold it along the main diagonal (from the top-left corner), so that the first row lies down as the first column. The numbers have moved to new places, and the table is now &quot;tall&quot; instead of &quot;wide&quot;.",
          ar: "الصف الأول يصبح العمود الأول." },
        { type: 'code', code: J`
          1  2  3                  1  4
          4  5  6     becomes      2  5
                                   3  6
        ` },
        { type: 'code', code: J`
          int[][] t = new int[m[0].length][m.length];
          for (int i = 0; i < m.length; i++) {
              for (int j = 0; j < m[0].length; j++) {
                  t[j][i] = m[i][j];
              }
          }
        ` },
        { type: 'lines', rows: [
          ['new int[m[0].length][m.length]', 'Columns of <code>m</code> become the rows of <code>t</code>, and the rows of <code>m</code> become the columns of <code>t</code>.'],
          ['t[j][i] = m[i][j];', 'Copy the box at row <code>i</code>, column <code>j</code> to row <code>j</code>, column <code>i</code>. The two indexes switch places.']
        ] },
        { type: 'table', head: ['i', 'j', 'm[i][j]', 'is written to'], rows: [
          ['0', '0', '1', 't[0][0]'],
          ['0', '1', '2', 't[1][0]'],
          ['0', '2', '3', 't[2][0]'],
          ['1', '0', '4', 't[0][1]'],
          ['1', '1', '5', 't[1][1]'],
          ['1', '2', '6', 't[2][1]']
        ] },
        { type: 'p', en: "Read the table from top to bottom: row 0 of <code>m</code> (1, 2, 3) goes down column 0 of <code>t</code>, and row 1 of <code>m</code> (4, 5, 6) goes down column 1 of <code>t</code>.",
          ar: "الصف الأول من m يصبح العمود الأول من t." },
        { type: 'memory', title: 'The transpose is a new table with a new shape', frames: [
          { label: 'After <code>int[][] m = {{1, 2, 3}, {4, 5, 6}};</code>', vars: [{ name: 'm', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '4' }, { name: '[1]', value: '5' }, { name: '[2]', value: '6' }] }
          ] },
          { label: 'After <code>int[][] t = new int[3][2];</code>: 3 rows of 2', vars: [{ name: 'm', type: 'int[][]', ref: 'A' }, { name: 't', type: 'int[][]', ref: 'D' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '4' }, { name: '[1]', value: '5' }, { name: '[2]', value: '6' }] },
            { id: 'D', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'E' }, { name: '[1]', ref: 'F' }, { name: '[2]', ref: 'G' }] },
            { id: 'E', cls: 'int[] row 0', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }] },
            { id: 'F', cls: 'int[] row 1', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }] },
            { id: 'G', cls: 'int[] row 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }] }
          ] },
          { label: 'After the loops: <code>m</code> is unchanged, <code>t</code> holds the transpose', vars: [{ name: 'm', type: 'int[][]', ref: 'A' }, { name: 't', type: 'int[][]', ref: 'D' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '2' }, { name: '[2]', value: '3' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '4' }, { name: '[1]', value: '5' }, { name: '[2]', value: '6' }] },
            { id: 'D', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'E' }, { name: '[1]', ref: 'F' }, { name: '[2]', ref: 'G' }] },
            { id: 'E', cls: 'int[] row 0', fields: [{ name: '[0]', value: '1' }, { name: '[1]', value: '4' }] },
            { id: 'F', cls: 'int[] row 1', fields: [{ name: '[0]', value: '2' }, { name: '[1]', value: '5' }] },
            { id: 'G', cls: 'int[] row 2', fields: [{ name: '[0]', value: '3' }, { name: '[1]', value: '6' }] }
          ] }
        ], ar: "المنقول جدول جديد بشكل جديد: 3 صفوف في كل منها خانتان، والجدول الأصلي لا يتغير." },
        { type: 'check', q: "What is the size of the transpose of a 4 × 7 matrix?", options: ['4 × 7', '7 × 4', '28 × 1', '4 × 4'], answer: 1, explain: "Rows and columns swap." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{1, 2, 3}, {4, 5, 6}};
                  int[][] t = transpose(m);
                  System.out.println("Size: " + t.length + "x" + t[0].length);
                  for (int[] row : t) {
                      for (int value : row) {
                          System.out.print(value + " ");
                      }
                      System.out.println();
                  }
              }

              public static int[][] transpose(int[][] m) {
                  int[][] t = new int[m[0].length][m.length];
                  for (int i = 0; i < m.length; i++) {
                      for (int j = 0; j < m[0].length; j++) {
                          t[j][i] = m[i][j];
                      }
                  }
                  return t;
              }
          }
        `, out: J`
          Size: 3x2
          1 4
          2 5
          3 6
        ` },
        { type: 'steps', title: 'Worked example: the transpose of a small matrix', problem: "Read the size of a matrix and its numbers, and print the transpose, one row per line.",
          steps: [
            { en: "Read <code>rows</code>, <code>cols</code> and fill <code>m</code> (as in earlier lessons).", code: J`
              int[][] m = new int[rows][cols];
            ` },
            { en: "Create the result with swapped sizes.", code: "int[][] t = new int[cols][rows];" },
            { en: "Copy with swapped indexes.", code: "t[j][i] = m[i][j];" },
            { en: "Print <code>t</code> with nested loops: <code>t.length</code> rows. Complete program (input 2 × 3):" }
          ],
          stdin: '2 3\n1 2 3\n4 5 6',
          code: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    for (int i = 0; i < rows; i++) {
                        for (int j = 0; j < cols; j++) {
                            m[i][j] = input.nextInt();
                        }
                    }
                    int[][] t = new int[cols][rows];
                    for (int i = 0; i < rows; i++) {
                        for (int j = 0; j < cols; j++) {
                            t[j][i] = m[i][j];
                        }
                    }
                    for (int i = 0; i < t.length; i++) {
                        for (int j = 0; j < t[i].length; j++) {
                            if (j > 0) System.out.print(" ");
                            System.out.print(t[i][j]);
                        }
                        System.out.println();
                    }
                }
            }
          `, out: J`
            1 4
            2 5
            3 6
          ` },
        { type: 'note', kind: 'exam', en: "To transpose a <b>square</b> matrix in place by swapping <code>m[i][j]</code> and <code>m[j][i]</code>, the inner loop must start at <code>j = i + 1</code>. If it runs over all <code>j</code>, every pair is swapped twice and the matrix ends up unchanged." },
        { type: 'h', en: 'A table that equals its transpose' },
        { type: 'analogy', title: 'A road distance table', en: "On a road map there is a small table of distances between cities. The distance from Riyadh to Jeddah is the same as from Jeddah to Riyadh, so box [0][1] equals box [1][0]. If you transpose such a table, you get the same table back. We call it <b>symmetric</b>.",
          ar: "جدول المسافات بين المدن متماثل: المسافة من الرياض إلى جدة تساوي المسافة من جدة إلى الرياض." },
        { type: 'steps', title: 'Worked example: is the distance table symmetric?', problem: "Write a method <code>isSymmetric</code> that returns <code>true</code> when a square table has <code>m[i][j] == m[j][i]</code> for every <code>i</code> and <code>j</code>. Test it on a correct distance table (Riyadh, Jeddah, Dammam, in km) and on a copy with a typing mistake.",
          steps: [
            { en: "Header: a table in, a <code>boolean</code> out.", code: "public static boolean isSymmetric(int[][] m) {" },
            { en: "Visit every box and compare it with its mirror box. One difference is enough to answer <code>false</code>, so we can return at once.", code: J`
              for (int i = 0; i < m.length; i++) {
                  for (int j = 0; j < m.length; j++) {
                      if (m[i][j] != m[j][i]) {
                          return false;
                      }
                  }
              }
            ` },
            { en: "If the loops finish, no difference was found.", code: "return true;" },
            { en: "In the second table, box [2][1] was typed as 1430 instead of 1340. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] good = {
                        {0, 950, 400},
                        {950, 0, 1340},
                        {400, 1340, 0}
                    };
                    int[][] typo = {
                        {0, 950, 400},
                        {950, 0, 1340},
                        {400, 1430, 0}
                    };
                    System.out.println("Table 1 symmetric: " + isSymmetric(good));
                    System.out.println("Table 2 symmetric: " + isSymmetric(typo));
                }

                public static boolean isSymmetric(int[][] m) {
                    for (int i = 0; i < m.length; i++) {
                        for (int j = 0; j < m.length; j++) {
                            if (m[i][j] != m[j][i]) {
                                return false;
                            }
                        }
                    }
                    return true;
                }
            }
          `, out: J`
            Table 1 symmetric: true
            Table 2 symmetric: false
          `, ar: "نعيد false عند أول اختلاف، ونعيد true فقط بعد انتهاء الحلقتين." },
        { type: 'check', q: "Why is <code>return true;</code> written <b>after</b> both loops and not inside them?", options: ['It is faster', 'We can say &quot;symmetric&quot; only after checking every pair', 'Java does not allow return inside a loop', 'It makes no difference'], answer: 1, explain: "One equal pair proves nothing; only after all pairs are checked do we know there is no difference." }
      ],
      mistakes: [
        { title: 'Adding matrices of different sizes', en: "Some boxes have no partner, and the program crashes.", code: J`
          // a is 2x3, b is 3x2: a[i][j] + b[i][j] is not safe
        ` },
        { title: 'Forgetting to swap the sizes of the transpose', en: "A non-square matrix crashes.", code: J`
          int[][] t = new int[m.length][m[0].length];   // WRONG
        ` },
        { title: 'Writing t[i][j] = m[i][j]', en: "That is only a copy, not a transpose.", code: J`
          t[i][j] = m[i][j];   // WRONG
          t[j][i] = m[i][j];   // correct
        ` },
        { title: 'Changing the input matrix by mistake', en: "Create a <b>new</b> result table; do not write into <code>a</code>.", code: J`
          a[i][j] = a[i][j] + b[i][j];   // changes a
        ` }
      ],
      remember: [
        "A matrix with n rows and m columns is <code>new int[n][m]</code>.",
        "Addition: same size, <code>c[i][j] = a[i][j] + b[i][j]</code>.",
        "Transpose: <code>t[j][i] = m[i][j]</code>.",
        "The transpose result is created with swapped sizes: <code>new int[m[0].length][m.length]</code>.",
        "Methods build and return a new table.",
        "Symmetric: <code>m[i][j] == m[j][i]</code> for every pair; the table equals its transpose."
      ],
      rememberAr: "الجمع يتطلب الحجم نفسه: c[i][j] = a[i][j] + b[i][j]. المنقول: t[j][i] = m[i][j] ويُنشأ بحجم معكوس new int[m[0].length][m.length].",
      practice: [
        { t: 'mcq', q: "When can two matrices be <b>added</b>?", options: ['When the columns of the first equal the rows of the second', 'Only when both are square', 'When they have the same number of rows and the same number of columns', 'Always'], answer: 2, explain: "Addition is box by box, so every position must exist in both." },
        { t: 'mcq', q: "What is the size of the transpose of a 2 × 5 matrix?", options: ['2 × 5', '5 × 2', '10 × 1', '2 × 2'], answer: 1, explain: "Swap rows and columns." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] a = {{1, 2}, {3, 4}};
                  int[][] b = {{5, 6}, {7, 8}};
                  int[][] c = new int[2][2];
                  for (int i = 0; i < 2; i++) {
                      for (int j = 0; j < 2; j++) {
                          c[i][j] = a[i][j] + b[i][j];
                      }
                  }
                  System.out.println(c[0][0] + " " + c[0][1]);
                  System.out.println(c[1][0] + " " + c[1][1]);
              }
          }
        `, answer: J`
          6 8
          10 12
        `, explain: "1+5=6, 2+6=8, 3+7=10, 4+8=12." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{1, 2, 3}, {4, 5, 6}};
                  int[][] t = new int[3][2];
                  for (int i = 0; i < 2; i++) {
                      for (int j = 0; j < 3; j++) {
                          t[j][i] = m[i][j];
                      }
                  }
                  System.out.println(t[2][0] + " " + t[0][1]);
              }
          }
        `, answer: '3 4', explain: "t[2][0] = m[0][2] = 3 and t[0][1] = m[1][0] = 4." },
        { t: 'fill', q: "Complete the transpose assignment.", code: J`
          int[][] t = new int[m[0].length][m.length];
          for (int i = 0; i < m.length; i++) {
              for (int j = 0; j < m[0].length; j++) {
                  t[___][___] = m[i][j];
              }
          }
        `, answers: ['j', 'i'], explain: "Row i, column j of m becomes row j, column i of t." },
        { t: 'order', q: "Arrange the lines that create the transpose <code>t</code> of <code>m</code> and fill it.", lines: [
          'int[][] t = new int[m[0].length][m.length];',
          'for (int i = 0; i < m.length; i++) {',
          '    for (int j = 0; j < m[0].length; j++) {',
          '        t[j][i] = m[i][j];',
          '    }',
          '}'
        ], explain: "Create the result first, then copy with swapped indexes." },
        { t: 'mcq', q: "Which line correctly creates the result of adding <code>a</code> and <code>b</code>?", options: ['<code>int[][] r = new int[a[0].length][a.length];</code>', '<code>int[][] r = new int[a.length][a[0].length];</code>', '<code>int[][] r = new int[a.length];</code>', '<code>int[][] r = a + b;</code>'], answer: 1, explain: "The sum has the same size as <code>a</code>." },
        { t: 'code', q: "Read <code>rows</code> and <code>cols</code>, then a matrix of integers of that size. Print its <b>transpose</b>: one row per line, values separated by a single space (no space at the end of a line). No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    // read the matrix, build the transpose, print it
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    for (int i = 0; i < rows; i++) {
                        for (int j = 0; j < cols; j++) {
                            m[i][j] = input.nextInt();
                        }
                    }
                    int[][] t = new int[cols][rows];
                    for (int i = 0; i < rows; i++) {
                        for (int j = 0; j < cols; j++) {
                            t[j][i] = m[i][j];
                        }
                    }
                    for (int i = 0; i < t.length; i++) {
                        for (int j = 0; j < t[i].length; j++) {
                            if (j > 0) System.out.print(" ");
                            System.out.print(t[i][j]);
                        }
                        System.out.println();
                    }
                }
            }
          `,
          tests: [ { stdin: '2 3\n1 2 3\n4 5 6', expected: '1 4\n2 5\n3 6' }, { stdin: '1 3\n7 8 9', expected: '7\n8\n9' }, { stdin: '2 2\n1 2\n3 4', expected: '1 3\n2 4' } ],
          hint: "The transpose has cols rows and rows columns: new int[cols][rows]. Print a space before every value except the first in a row.", explain: "Creating the result with swapped sizes and assigning t[j][i] = m[i][j] works for every rectangular matrix." },
        { t: 'bug', q: "The program should print 6 (the transpose of a 2 × 3 matrix is 3 × 2), but it crashes. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] m = {{1, 2, 3}, {4, 5, 6}};
                    int[][] t = new int[m.length][m[0].length];
                    for (int i = 0; i < m.length; i++) {
                        for (int j = 0; j < m[0].length; j++) {
                            t[j][i] = m[i][j];
                        }
                    }
                    System.out.println(t[2][1]);
                }
            }
          `, bug: 4,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] m = {{1, 2, 3}, {4, 5, 6}};
                    int[][] t = new int[m[0].length][m.length];
                    for (int i = 0; i < m.length; i++) {
                        for (int j = 0; j < m[0].length; j++) {
                            t[j][i] = m[i][j];
                        }
                    }
                    System.out.println(t[2][1]);
                }
            }
          `,
          hint: "What shape must the transpose have?",
          explain: "<code>t</code> was created 2 × 3, the same shape as <code>m</code>. When <code>j</code> is 2, <code>t[2][0]</code> asks for a third row that does not exist, and Java throws <code>ArrayIndexOutOfBoundsException</code>. The transpose must be created with the sizes swapped: <code>new int[m[0].length][m.length]</code> (3 × 2).",
          explainAr: "يجب إنشاء المنقول بحجم معكوس: عدد أعمدة m صفوفًا وعدد صفوف m أعمدة." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{1, 7, 3}, {7, 5, 2}, {3, 4, 9}};
                  int bad = 0;
                  for (int i = 0; i < m.length; i++) {
                      for (int j = 0; j < m.length; j++) {
                          if (m[i][j] != m[j][i]) {
                              bad++;
                          }
                      }
                  }
                  System.out.println(bad);
              }
          }
        `, answer: '2', explain: "Only m[1][2] (2) and m[2][1] (4) differ. The loops meet this pair twice: once at (1, 2) and once at (2, 1), so the count is 2." },
        { t: 'code', q: "Read <code>n</code> and then an n × n matrix of integers. Print <code>Symmetric</code> if <code>m[i][j] == m[j][i]</code> for every i and j, otherwise print <code>Not symmetric</code>. No prompts.",
          qAr: "تحقق{{g:|ي}} من أن كل خانة تساوي الخانة المقابلة لها عبر القطر.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[][] m = new int[n][n];
                    // read the matrix, then check it
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int[][] m = new int[n][n];
                    for (int i = 0; i < n; i++) {
                        for (int j = 0; j < n; j++) {
                            m[i][j] = input.nextInt();
                        }
                    }
                    if (isSymmetric(m)) {
                        System.out.println("Symmetric");
                    } else {
                        System.out.println("Not symmetric");
                    }
                }

                public static boolean isSymmetric(int[][] m) {
                    for (int i = 0; i < m.length; i++) {
                        for (int j = 0; j < m.length; j++) {
                            if (m[i][j] != m[j][i]) {
                                return false;
                            }
                        }
                    }
                    return true;
                }
            }
          `,
          tests: [ { stdin: '3\n0 950 400\n950 0 1340\n400 1340 0', expected: 'Symmetric' }, { stdin: '2\n1 2\n3 1', expected: 'Not symmetric' }, { stdin: '1\n5', expected: 'Symmetric' } ],
          hint: "Use a method that returns false at the first m[i][j] != m[j][i], and true after the loops.",
          explain: "A single different pair is enough for <code>Not symmetric</code>; the answer <code>Symmetric</code> needs all pairs checked." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 8
    {
      title: 'Matrix multiplication and a table application',
      titleAr: 'ضرب المصفوفات وتطبيق على الجداول',
      minutes: 45,
      body: [
        { type: 'h', en: 'Multiplication is different' },
        { type: 'p', en: "Multiplying matrices is <b>not</b> box by box. Each box of the result is made from a whole <b>row</b> of the first matrix and a whole <b>column</b> of the second: multiply the pairs and add them. This is the most difficult topic in this unit, so we go slowly.",
          ar: "ضرب المصفوفات ليس عنصرًا بعنصر: كل عنصر في الناتج يأتي من صف كامل وعمود كامل." },
        { type: 'analogy', title: 'The shopping bill', en: "Row of A = how many items you bought: 2 coffees and 3 sandwiches. Column of B = the prices: 10 riyals for a coffee and 15 for a sandwich. The bill is 2 × 10 + 3 × 15 = 65. You multiply pair by pair and add. That one number is one box of the result.",
          ar: "كمية كل غرض × سعره ثم نجمع: هذا هو معنى صف × عمود." },
        { type: 'p', en: "Now imagine many families (rows of A) and many shops (columns of B). One multiplication gives the whole bill table at once: the cost for every family in every shop. Computer games use the same operation to turn and move pictures on the screen, and map apps use it to compute routes. That is why this operation is worth learning carefully." },
        { type: 'p', en: "<b>Rule about sizes.</b> If A is <i>n</i> × <i>m</i> and B is <i>m</i> × <i>p</i>, then C = A × B is <i>n</i> × <i>p</i>. The number of <b>columns of A</b> must equal the number of <b>rows of B</b> (the two middle numbers must match)." },
        { type: 'check', q: "A is 2 × 3 and B is 3 × 4. What is the size of A × B?", options: ['3 × 3', '2 × 4', '4 × 2', 'Cannot multiply'], answer: 1, explain: "The middle numbers match (3 and 3). The result takes the outer numbers: 2 × 4." },
        { type: 'h', en: 'One box of the result' },
        { type: 'p', en: "Take A = {{1, 2}, {3, 4}, {5, 6}} (3 × 2) and B = {{7, 8, 9}, {10, 11, 12}} (2 × 3). The box <code>c[0][0]</code> uses row 0 of A and column 0 of B:" },
        { type: 'table', head: ['Box', 'Row of A', 'Column of B', 'Calculation', 'Value'], rows: [
          ['c[0][0]', '1, 2', '7, 10', '1·7 + 2·10', '27'],
          ['c[1][2]', '3, 4', '9, 12', '3·9 + 4·12', '75'],
          ['c[2][1]', '5, 6', '8, 11', '5·8 + 6·11', '106']
        ] },
        { type: 'p', en: "Notice: the pairs are <code>a[i][0]*b[0][j]</code>, then <code>a[i][1]*b[1][j]</code>, and so on. The second index of <code>a</code> and the first index of <code>b</code> run together. Call this running number <code>k</code>: <code>a[i][k] * b[k][j]</code>." },
        { type: 'check', q: "In <code>a[i][k] * b[k][j]</code>, which index is the same in both?", options: ['i', 'j', 'k', 'none'], answer: 2, explain: "k walks along the row of a and down the column of b together." },
        { type: 'h', en: 'Three loops' },
        { type: 'p', en: "We need three nested loops: <code>i</code> picks the row of the result, <code>j</code> picks the column of the result, and <code>k</code> adds up the pairs." },
        { type: 'code', code: J`
          for (int i = 0; i < n; i++) {
              for (int j = 0; j < p; j++) {
                  for (int k = 0; k < m; k++) {
                      c[i][j] += a[i][k] * b[k][j];
                  }
              }
          }
        ` },
        { type: 'lines', rows: [
          ['for (int i = 0; i < n; i++)', 'Each row of the result (n rows).'],
          ['for (int j = 0; j < p; j++)', 'Each column of the result (p columns).'],
          ['for (int k = 0; k < m; k++)', 'Walk along the row and the column together (m pairs).'],
          ['c[i][j] += a[i][k] * b[k][j];', 'Multiply one pair and add it to the box. The box starts at 0 because a new table has zeros.']
        ], ar: "i للصف، j للعمود، k لجمع حواصل الضرب." },
        { type: 'p', en: "Trace the innermost loop for the first box, <code>c[0][0]</code>, with the matrices A and B above (<code>i = 0</code>, <code>j = 0</code>, and <code>m = 2</code> pairs):" },
        { type: 'table', head: ['k', 'a[0][k]', 'b[k][0]', 'product', 'c[0][0] after +='], rows: [
          ['–', '–', '–', '–', '0 (a new table is full of zeros)'],
          ['0', '1', '7', '7', '7'],
          ['1', '2', '10', '20', '27 → this box is finished']
        ] },
        { type: 'p', en: "Then <code>j</code> becomes 1 and the <code>k</code> loop runs again for <code>c[0][1]</code>, then for <code>c[0][2]</code>. After that <code>i</code> becomes 1 and the second row of the result is computed. In total, 3 × 3 boxes × 2 pairs = 18 multiplications.",
          ar: "الحلقة k تكتمل لكل خانة من خانات الناتج." },
        { type: 'memory', title: 'Building one box of the result', en: "The variables <code>i</code> and <code>j</code> stay fixed while <code>k</code> runs. Only the box <code>c[0][0]</code> changes.", frames: [
          { label: 'Before the <code>k</code> loop: <code>c[0][0]</code> is 0', vars: [{ name: 'c', type: 'int[][]', ref: 'C' }, { name: 'i', type: 'int', value: '0' }, { name: 'j', type: 'int', value: '0' }], objects: [
            { id: 'C', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'R' }, { name: '[1]', ref: 'S' }, { name: '[2]', ref: 'T' }] },
            { id: 'R', cls: 'int[] row 0', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] },
            { id: 'S', cls: 'int[] row 1', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] },
            { id: 'T', cls: 'int[] row 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] }
          ] },
          { label: 'After <code>k = 0</code>: 0 + 1 × 7 = 7', vars: [{ name: 'c', type: 'int[][]', ref: 'C' }, { name: 'i', type: 'int', value: '0' }, { name: 'j', type: 'int', value: '0' }, { name: 'k', type: 'int', value: '0' }], objects: [
            { id: 'C', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'R' }, { name: '[1]', ref: 'S' }, { name: '[2]', ref: 'T' }] },
            { id: 'R', cls: 'int[] row 0', fields: [{ name: '[0]', value: '7' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] },
            { id: 'S', cls: 'int[] row 1', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] },
            { id: 'T', cls: 'int[] row 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] }
          ] },
          { label: 'After <code>k = 1</code>: 7 + 2 × 10 = 27', vars: [{ name: 'c', type: 'int[][]', ref: 'C' }, { name: 'i', type: 'int', value: '0' }, { name: 'j', type: 'int', value: '0' }, { name: 'k', type: 'int', value: '1' }], objects: [
            { id: 'C', cls: 'int[][] (3 rows)', fields: [{ name: '[0]', ref: 'R' }, { name: '[1]', ref: 'S' }, { name: '[2]', ref: 'T' }] },
            { id: 'R', cls: 'int[] row 0', fields: [{ name: '[0]', value: '27' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] },
            { id: 'S', cls: 'int[] row 1', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] },
            { id: 'T', cls: 'int[] row 2', fields: [{ name: '[0]', value: '0' }, { name: '[1]', value: '0' }, { name: '[2]', value: '0' }] }
          ] }
        ], ar: "الخانة c[0][0] تتجمع خطوة بخطوة: 0 ثم 7 ثم 27." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] a = {{1, 2}, {3, 4}, {5, 6}};
                  int[][] b = {{7, 8, 9}, {10, 11, 12}};
                  int[][] c = multiply(a, b);
                  for (int[] row : c) {
                      for (int value : row) {
                          System.out.print(value + " ");
                      }
                      System.out.println();
                  }
              }

              public static int[][] multiply(int[][] a, int[][] b) {
                  int n = a.length;
                  int m = b.length;
                  int p = b[0].length;
                  int[][] c = new int[n][p];
                  for (int i = 0; i < n; i++) {
                      for (int j = 0; j < p; j++) {
                          for (int k = 0; k < m; k++) {
                              c[i][j] += a[i][k] * b[k][j];
                          }
                      }
                  }
                  return c;
              }
          }
        `, out: J`
          27 30 33
          61 68 75
          95 106 117
        ` },
        { type: 'h', en: 'The order matters' },
        { type: 'p', en: "With normal numbers, 3 × 5 = 5 × 3. With matrices this is usually <b>not</b> true: A × B and B × A are different (and often one of them is not even allowed by the size rule). The program below multiplies the same two matrices in both orders." },
        { type: 'analogy', title: 'Socks and shoes', en: "Putting on your socks and then your shoes is not the same as putting on your shoes and then your socks. The same two steps in a different order give a different result. Matrix multiplication is like that.",
          ar: "ترتيب الضرب مهم: A × B لا يساوي B × A غالبًا." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] a = {{1, 2}, {3, 4}};
                  int[][] b = {{0, 1}, {1, 0}};
                  print(multiply(a, b));
                  System.out.println("---");
                  print(multiply(b, a));
              }

              public static int[][] multiply(int[][] a, int[][] b) {
                  int[][] c = new int[a.length][b[0].length];
                  for (int i = 0; i < a.length; i++) {
                      for (int j = 0; j < b[0].length; j++) {
                          for (int k = 0; k < b.length; k++) {
                              c[i][j] += a[i][k] * b[k][j];
                          }
                      }
                  }
                  return c;
              }

              public static void print(int[][] m) {
                  for (int[] row : m) {
                      for (int v : row) {
                          System.out.print(v + " ");
                      }
                      System.out.println();
                  }
              }
          }
        `, out: J`
          2 1
          4 3
          ---
          3 4
          1 2
        ` },
        { type: 'p', en: "A × B swapped the <b>columns</b> of A, but B × A swapped its <b>rows</b>. Same two matrices, different answers." },
        { type: 'check', q: "A is 2 × 3 and B is 3 × 4. Which products are allowed?", options: ['Only A × B', 'Only B × A', 'Both', 'Neither'], answer: 0, explain: "A × B: middle numbers 3 and 3 match. B × A: middle numbers 4 and 2 do not match." },
        { type: 'note', kind: 'warn', en: "Check <code>a[0].length == b.length</code> before multiplying. And <code>c[i][j] = a[i][j] * b[i][j]</code> is wrong: that is box-by-box multiplication, not matrix multiplication.",
          ar: "تحقق{{g:|ي}} أن عدد أعمدة A يساوي عدد صفوف B." },
        { type: 'steps', title: 'Worked example: a 2 × 2 product', problem: "Multiply A = {{2, 0}, {1, 3}} and B = {{4, 1}, {2, 5}}. Print the result.",
          steps: [
            { en: "Both are 2 × 2, so the result is 2 × 2.", code: "int[][] c = new int[2][2];" },
            { en: "By hand: c[0][0] = 2·4 + 0·2 = 8; c[0][1] = 2·1 + 0·5 = 2; c[1][0] = 1·4 + 3·2 = 10; c[1][1] = 1·1 + 3·5 = 16." },
            { en: "The three loops do these calculations for us.", code: J`
              for (int i = 0; i < 2; i++) {
                  for (int j = 0; j < 2; j++) {
                      for (int k = 0; k < 2; k++) {
                          c[i][j] += a[i][k] * b[k][j];
                      }
                  }
              }
            ` },
            { en: "Print the two rows. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] a = {{2, 0}, {1, 3}};
                    int[][] b = {{4, 1}, {2, 5}};
                    int[][] c = new int[2][2];
                    for (int i = 0; i < 2; i++) {
                        for (int j = 0; j < 2; j++) {
                            for (int k = 0; k < 2; k++) {
                                c[i][j] += a[i][k] * b[k][j];
                            }
                        }
                    }
                    System.out.println(c[0][0] + " " + c[0][1]);
                    System.out.println(c[1][0] + " " + c[1][1]);
                }
            }
          `, out: J`
            8 2
            10 16
          `, ar: "نحسب خانة واحدة باليد أولًا، ثم نترك الحلقات الثلاث تحسب الباقي." },
        { type: 'steps', title: 'Worked example: which shop is cheaper?', problem: "Two families buy rice bags, milk cartons and bread packs. Table Q (2 × 3) has the quantities of each family. Table P (3 × 2) has the price of each item in two shops, in riyals. Compute the cost table Q × P (2 × 2) and print, for each family, the cost in both shops and the cheaper shop.",
          steps: [
            { en: "Rows of Q = families, columns of Q = items. Rows of P = items, columns of P = shops. The middle sizes match (3 items).", code: J`
              int[][] q = {{2, 6, 4}, {1, 10, 3}};
              int[][] p = {{40, 38}, {6, 7}, {3, 2}};
            ` },
            { en: "By hand, family 1 in shop 1: 2 × 40 + 6 × 6 + 4 × 3 = 80 + 36 + 12 = 128 riyals." },
            { en: "The result has the rows of Q (families) and the columns of P (shops). The three loops fill it.", code: J`
              int[][] cost = new int[q.length][p[0].length];
              for (int i = 0; i < q.length; i++) {
                  for (int j = 0; j < p[0].length; j++) {
                      for (int k = 0; k < p.length; k++) {
                          cost[i][j] += q[i][k] * p[k][j];
                      }
                  }
              }
            ` },
            { en: "For each family compare its two boxes. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] q = {{2, 6, 4}, {1, 10, 3}};
                    int[][] p = {{40, 38}, {6, 7}, {3, 2}};
                    int[][] cost = new int[q.length][p[0].length];
                    for (int i = 0; i < q.length; i++) {
                        for (int j = 0; j < p[0].length; j++) {
                            for (int k = 0; k < p.length; k++) {
                                cost[i][j] += q[i][k] * p[k][j];
                            }
                        }
                    }
                    for (int i = 0; i < cost.length; i++) {
                        int cheaper = 1;
                        if (cost[i][1] < cost[i][0]) {
                            cheaper = 2;
                        }
                        System.out.println("Family " + (i + 1) + ": shop 1 = " + cost[i][0] + ", shop 2 = " + cost[i][1] + ", cheaper: shop " + cheaper);
                    }
                }
            }
          `, out: J`
            Family 1: shop 1 = 128, shop 2 = 126, cheaper: shop 2
            Family 2: shop 1 = 109, shop 2 = 114, cheaper: shop 1
          `, ar: "كل خانة في جدول التكلفة = كميات أسرة × أسعار متجر، ثم نجمع." },
        { type: 'h', en: 'Another use of tables: checking answers' },
        { type: 'p', en: "Tables are not only for mathematics. Here each row holds one student's answers to a 4-question quiz, and an array holds the answer key. For each student we count how many answers equal the key." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  char[][] answers = {
                      {'A', 'B', 'C', 'D'},
                      {'A', 'C', 'C', 'D'},
                      {'B', 'B', 'A', 'D'}
                  };
                  char[] key = {'A', 'B', 'C', 'D'};
                  for (int s = 0; s < answers.length; s++) {
                      int correct = 0;
                      for (int q = 0; q < key.length; q++) {
                          if (answers[s][q] == key[q]) correct++;
                      }
                      System.out.println("Student " + s + ": " + correct + "/" + key.length);
                  }
              }
          }
        `, out: J`
          Student 0: 4/4
          Student 1: 3/4
          Student 2: 2/4
        ` },
        { type: 'lines', rows: [
          ['answers[s][q] == key[q]', 'Compare the answer of student <code>s</code> to question <code>q</code> with the key for question <code>q</code>. (<code>char</code> values are compared with <code>==</code>.)'],
          ['int correct = 0;', 'A fresh counter for each student, inside the outer loop.']
        ] },
        { type: 'p', en: "Here the table holds <code>char</code> values, and the key is a 1D array. Column <code>q</code> of the table and box <code>q</code> of the key belong to the same question, so one index <code>q</code> walks along both. You will see many more tables of <code>char</code> and <code>String</code> in the next lessons.",
          ar: "العمود q في الجدول والخانة q في مفتاح الإجابة يخصان السؤال نفسه." },
        { type: 'check', q: "In the program above, the key changes to <code>{'B', 'B', 'A', 'D'}</code>. What is the score of student 2?", options: ['2/4', '3/4', '4/4', '1/4'], answer: 2, explain: "Student 2 answered B, B, A, D: exactly the new key, so 4/4." }
      ],
      mistakes: [
        { title: 'Multiplying box by box', en: "That is not matrix multiplication.", code: J`
          c[i][j] = a[i][j] * b[i][j];   // WRONG
        ` },
        { title: 'Using = instead of +=', en: "Each box needs the sum of several products.", code: J`
          c[i][j] = a[i][k] * b[k][j];   // WRONG: keeps only the last product
        ` },
        { title: 'Wrong size for the result', en: "The result is n × p: rows of A, columns of B.", code: J`
          int[][] c = new int[a.length][a[0].length];   // WRONG unless p equals m
        ` },
        { title: 'Wrong index pairs', en: "The pair must be row-of-a with column-of-b.", code: J`
          c[i][j] += a[k][i] * b[j][k];   // WRONG
        ` }
      ],
      remember: [
        "A is n × m and B is m × p: the middle numbers must match; the result is n × p.",
        "One result box = a row of A times a column of B, added up.",
        "Three loops: <code>i</code> (rows of C), <code>j</code> (columns of C), <code>k</code> (the pairs).",
        "The core line: <code>c[i][j] += a[i][k] * b[k][j];</code>",
        "The result starts as zeros, so use <code>+=</code>.",
        "The order matters: A × B is usually different from B × A."
      ],
      rememberAr: "الضرب: عدد أعمدة A = عدد صفوف B والناتج n × p. نستخدم ثلاث حلقات، والسطر الأساسي c[i][j] += a[i][k] * b[k][j]; ونستعمل += لأن الناتج يبدأ بأصفار.",
      practice: [
        { t: 'mcq', q: "A is 2 × 3 and B is 3 × 4. What is the size of A × B?", options: ['3 × 3', '2 × 4', '4 × 2', 'They cannot be multiplied'], answer: 1, explain: "Columns of A (3) equal rows of B (3); the product has the rows of A and the columns of B: 2 × 4." },
        { t: 'mcq', q: "How many loops do we need to multiply two matrices?", options: ['1', '2', '3', '4'], answer: 2, explain: "i, j and k." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] a = {{1, 2}, {3, 4}};
                  int[][] b = {{5, 6}, {7, 8}};
                  int[][] c = new int[2][2];
                  for (int i = 0; i < 2; i++) {
                      for (int j = 0; j < 2; j++) {
                          for (int k = 0; k < 2; k++) {
                              c[i][j] += a[i][k] * b[k][j];
                          }
                      }
                  }
                  System.out.println(c[0][0] + " " + c[0][1]);
                  System.out.println(c[1][0] + " " + c[1][1]);
              }
          }
        `, answer: J`
          19 22
          43 50
        `, explain: "c[0][0] = 1·5 + 2·7 = 19; c[0][1] = 1·6 + 2·8 = 22; c[1][0] = 3·5 + 4·7 = 43; c[1][1] = 3·6 + 4·8 = 50." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  char[][] ans = {{'A', 'B'}, {'B', 'B'}};
                  char[] key = {'A', 'B'};
                  for (int s = 0; s < ans.length; s++) {
                      int ok = 0;
                      for (int q = 0; q < key.length; q++) {
                          if (ans[s][q] == key[q]) ok++;
                      }
                      System.out.println(ok);
                  }
              }
          }
        `, answer: J`
          2
          1
        `, explain: "Student 0 matches both; student 1 matches only the second." },
        { t: 'fill', q: "Complete the core line of matrix multiplication.", code: J`
          c[i][j] ___ a[i][___] * b[k][j];
        `, answers: ['+=', 'k'], explain: "Add the product of the pair; the shared index is k." },
        { t: 'order', q: "Arrange the loops that compute <code>c = a × b</code> (a is n × m, b is m × p).", lines: [
          'for (int i = 0; i < n; i++) {',
          '    for (int j = 0; j < p; j++) {',
          '        for (int k = 0; k < m; k++) {',
          '            c[i][j] += a[i][k] * b[k][j];',
          '        }',
          '    }',
          '}'
        ], explain: "i chooses the row of the result, j the column, and k walks along row i of a and column j of b." },
        { t: 'mcq', q: "Which statement computes one term in the product <code>c = a × b</code> correctly?", options: ['<code>c[i][j] += a[i][k] * b[k][j];</code>', '<code>c[i][j] = a[i][j] * b[i][j];</code>', '<code>c[i][j] += a[k][i] * b[j][k];</code>', '<code>c[i][j] += a[i][j] * b[j][i];</code>'], answer: 0, explain: "Row i of a is multiplied with column j of b, with k moving along both." },
        { t: 'code', q: "Read 8 integers: the first four are matrix A in row order (2 × 2), the next four are matrix B (2 × 2). Print A × B, one row per line, values separated by a single space. No prompts.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int[][] a = new int[2][2];
                    int[][] b = new int[2][2];
                    int[][] c = new int[2][2];
                    // read a, then b
                    // multiply with three loops
                    // print c
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int[][] a = new int[2][2];
                    int[][] b = new int[2][2];
                    int[][] c = new int[2][2];
                    for (int i = 0; i < 2; i++) {
                        for (int j = 0; j < 2; j++) {
                            a[i][j] = input.nextInt();
                        }
                    }
                    for (int i = 0; i < 2; i++) {
                        for (int j = 0; j < 2; j++) {
                            b[i][j] = input.nextInt();
                        }
                    }
                    for (int i = 0; i < 2; i++) {
                        for (int j = 0; j < 2; j++) {
                            for (int k = 0; k < 2; k++) {
                                c[i][j] += a[i][k] * b[k][j];
                            }
                        }
                    }
                    for (int i = 0; i < 2; i++) {
                        System.out.println(c[i][0] + " " + c[i][1]);
                    }
                }
            }
          `,
          tests: [ { stdin: '1 2 3 4 5 6 7 8', expected: '19 22\n43 50' }, { stdin: '1 0 0 1 9 8 7 6', expected: '9 8\n7 6' }, { stdin: '0 1 1 0 1 2 3 4', expected: '3 4\n1 2' } ],
          hint: "Read a first (two loops), then b (two loops). The core line is c[i][j] += a[i][k] * b[k][j];", explain: "The same three loops as in the lesson." },
        { t: 'bug', q: "A × B should be <code>{{19, 22}, {43, 50}}</code>, so the program should print <code>19 50</code>. It prints <code>14 32</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] a = {{1, 2}, {3, 4}};
                    int[][] b = {{5, 6}, {7, 8}};
                    int[][] c = new int[2][2];
                    for (int i = 0; i < 2; i++) {
                        for (int j = 0; j < 2; j++) {
                            for (int k = 0; k < 2; k++) {
                                c[i][j] = a[i][k] * b[k][j];
                            }
                        }
                    }
                    System.out.println(c[0][0] + " " + c[1][1]);
                }
            }
          `, bug: 9,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] a = {{1, 2}, {3, 4}};
                    int[][] b = {{5, 6}, {7, 8}};
                    int[][] c = new int[2][2];
                    for (int i = 0; i < 2; i++) {
                        for (int j = 0; j < 2; j++) {
                            for (int k = 0; k < 2; k++) {
                                c[i][j] += a[i][k] * b[k][j];
                            }
                        }
                    }
                    System.out.println(c[0][0] + " " + c[1][1]);
                }
            }
          `,
          hint: "Each box needs the sum of two products. Does this line add?",
          explain: "With <code>=</code> every new product <b>replaces</b> the old one, so each box keeps only the last product: c[0][0] = 2 × 7 = 14 and c[1][1] = 4 × 8 = 32. With <code>+=</code> the products are added: 1 × 5 + 2 × 7 = 19 and 3 × 6 + 4 × 8 = 50.",
          explainAr: "العلامة = تستبدل الناتج السابق؛ نحتاج += لجمع حواصل الضرب." },
        { t: 'output', q: "What is the output? (<code>id</code> is called the identity matrix.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] a = {{2, 3}, {4, 5}};
                  int[][] id = {{1, 0}, {0, 1}};
                  int[][] c = new int[2][2];
                  for (int i = 0; i < 2; i++) {
                      for (int j = 0; j < 2; j++) {
                          for (int k = 0; k < 2; k++) {
                              c[i][j] += a[i][k] * id[k][j];
                          }
                      }
                  }
                  System.out.println(c[0][0] + " " + c[0][1]);
                  System.out.println(c[1][0] + " " + c[1][1]);
              }
          }
        `, answer: J`
          2 3
          4 5
        `, explain: "The identity matrix has 1 on the main diagonal and 0 elsewhere. Multiplying by it is like multiplying a number by 1: c[0][0] = 2 × 1 + 3 × 0 = 2, c[0][1] = 2 × 0 + 3 × 1 = 3, and so on. The result equals <code>a</code>." },
        { t: 'code', q: "Read three numbers <code>n m p</code>, then matrix A (n × m) and matrix B (m × p), row by row. Print A × B: one row per line, values separated by a single space. No prompts.",
          qAr: "اضرب{{g:|ي}} مصفوفتين بأي حجم مناسب: الناتج n × p.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int m = input.nextInt();
                    int p = input.nextInt();
                    int[][] a = new int[n][m];
                    int[][] b = new int[m][p];
                    // read a, read b, multiply, print
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int n = input.nextInt();
                    int m = input.nextInt();
                    int p = input.nextInt();
                    int[][] a = new int[n][m];
                    int[][] b = new int[m][p];
                    for (int i = 0; i < n; i++) {
                        for (int j = 0; j < m; j++) {
                            a[i][j] = input.nextInt();
                        }
                    }
                    for (int i = 0; i < m; i++) {
                        for (int j = 0; j < p; j++) {
                            b[i][j] = input.nextInt();
                        }
                    }
                    int[][] c = new int[n][p];
                    for (int i = 0; i < n; i++) {
                        for (int j = 0; j < p; j++) {
                            for (int k = 0; k < m; k++) {
                                c[i][j] += a[i][k] * b[k][j];
                            }
                        }
                    }
                    for (int i = 0; i < n; i++) {
                        for (int j = 0; j < p; j++) {
                            if (j > 0) System.out.print(" ");
                            System.out.print(c[i][j]);
                        }
                        System.out.println();
                    }
                }
            }
          `,
          tests: [ { stdin: '3 2 3\n1 2\n3 4\n5 6\n7 8 9\n10 11 12', expected: '27 30 33\n61 68 75\n95 106 117' }, { stdin: '1 3 1\n1 2 3\n4\n5\n6', expected: '32' }, { stdin: '2 2 2\n2 0\n1 3\n4 1\n2 5', expected: '8 2\n10 16' } ],
          hint: "The result is new int[n][p]. Loop i &lt; n, j &lt; p, k &lt; m.",
          explain: "The three loop bounds come straight from the sizes: rows of the result (n), columns of the result (p), and the shared middle size (m)." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 9
    {
      title: 'Tables of words and letters: String and char',
      titleAr: 'جداول الكلمات والحروف: String وchar',
      minutes: 30,
      body: [
        { type: 'h', en: 'Tables that hold text' },
        { type: 'p', en: "Not every table holds numbers. A teacher's seating chart holds <b>names</b>. A cinema booking screen shows free and taken seats as <b>letters</b>. The game tic-tac-toe (many people call it XO) is a 3 × 3 board of X and O. Everything you learned still works: rows first, nested loops, <code>length</code>. Only the type of the boxes changes: <code>String[][]</code> for words and <code>char[][]</code> for single letters.",
          ar: "الجدول قد يحمل أسماء (String) أو حروفًا (char)، والقواعد نفسها تبقى." },
        { type: 'analogy', title: 'The seating chart on the classroom door', en: "Some teachers stick a seating chart on the classroom door: rows of desks, and a name written in each box. A desk with nobody yet has an empty box. A <code>String[][]</code> is exactly that chart: each box holds a name, or nothing yet.",
          ar: "مثل خريطة الجلوس على باب الفصل: في كل خانة اسم أو لا شيء." },
        { type: 'h', en: 'A seating chart: String[][]' },
        { type: 'code', code: J`
          String[][] seats = new String[2][3];
          seats[0][0] = "Fahad";
          seats[0][2] = "Omar";
          seats[1][1] = "Khalid";
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['String[][] seats = new String[2][3];', '2 rows of desks, 3 desks in each row. Every box starts as <code>null</code>: no name yet.'],
          ['seats[0][0] = "Fahad";', 'Write a name in row 0, desk 0. Text uses double quotes.'],
          ['seats[1][1] = "Khalid";', 'Row 1, desk 1: the middle desk of the back row.']
        ], ar: "خانات String تبدأ بالقيمة null أي لا يوجد نص بعد." },
        { type: 'memory', title: 'Empty desks are null', en: "A new <code>String</code> table does not hold empty text; it holds <code>null</code>, which means &quot;no object here&quot;. (A <code>String</code> is also an object, but to keep the picture simple we write the text inside the box.)", frames: [
          { label: 'After <code>String[][] seats = new String[2][3];</code>', vars: [{ name: 'seats', type: 'String[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'String[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'String[] row 0', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }] },
            { id: 'C', cls: 'String[] row 1', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }] }
          ] },
          { label: 'After the three names are written', vars: [{ name: 'seats', type: 'String[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'String[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'String[] row 0', fields: [{ name: '[0]', value: '"Fahad"' }, { name: '[1]', value: 'null' }, { name: '[2]', value: '"Omar"' }] },
            { id: 'C', cls: 'String[] row 1', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: '"Khalid"' }, { name: '[2]', value: 'null' }] }
          ] }
        ], ar: "الخانة الفارغة في جدول String قيمتها null." },
        { type: 'p', en: "Be careful with <code>null</code>. Printing it shows the word <code>null</code>, which looks bad on a report. Worse, calling a method on it, such as <code>seats[1][0].length()</code>, stops the program with a <code>NullPointerException</code>, because there is no text to measure. So before you use a name, check whether the box is empty with <code>== null</code>. For this one test, <code>==</code> is correct.",
          ar: "قبل استعمال الاسم نتحقق: هل الخانة null؟ ونستعمل == null لهذا الفحص فقط." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String[][] seats = new String[2][3];
                  seats[0][0] = "Fahad";
                  seats[0][2] = "Omar";
                  seats[1][1] = "Khalid";
                  for (int r = 0; r < seats.length; r++) {
                      System.out.print("Row " + (r + 1) + ":");
                      for (int c = 0; c < seats[r].length; c++) {
                          if (seats[r][c] == null) {
                              System.out.print(" (empty)");
                          } else {
                              System.out.print(" " + seats[r][c]);
                          }
                      }
                      System.out.println();
                  }
              }
          }
        `, out: J`
          Row 1: Fahad (empty) Omar
          Row 2: (empty) Khalid (empty)
        ` },
        { type: 'lines', rows: [
          ['if (seats[r][c] == null)', 'Is this desk empty? Then print <code>(empty)</code> instead of the word null.'],
          ['System.out.print(" " + seats[r][c]);', 'Otherwise print the name. The loops are the same nested loops as for numbers.']
        ] },
        { type: 'check', q: "What is in every box right after <code>new String[3][4]</code>?", options: ['<code>&quot;&quot;</code> (empty text)', '<code>null</code>', '<code>0</code>', 'a space'], answer: 1, explain: "Boxes of an object type such as <code>String</code> start as <code>null</code>: no object yet." },
        { type: 'note', kind: 'exam', en: "<code>== null</code> asks &quot;is there no object?&quot;. To compare two <b>names</b>, always use <code>equals</code>, as you learned in CS101: <code>seats[r][c].equals(&quot;Omar&quot;)</code>. Comparing names with <code>==</code> compares where they are stored, not their letters, and can say false for two equal names (for example a name typed by the user).",
          ar: "للمقارنة بين نصين نستعمل equals وليس ==." },
        { type: 'h', en: 'A game board: char[][]' },
        { type: 'p', en: "A tic-tac-toe board has 3 rows and 3 columns, and each box holds <b>one character</b>: <code>'X'</code>, <code>'O'</code>, or <code>'-'</code> for a free box. A <code>char</code> is written with <b>single</b> quotes. A new <code>char</code> table is filled with the &quot;zero character&quot;, which prints as nothing you can see. So a game first fills every box with <code>'-'</code>, using the nested loops you know." },
        { type: 'code', code: J`
          char[][] board = new char[3][3];
          for (int r = 0; r < board.length; r++) {
              for (int c = 0; c < board[r].length; c++) {
                  board[r][c] = '-';
              }
          }
          board[1][1] = 'X';
          board[0][2] = 'O';
        ` },
        { type: 'lines', rows: [
          ['char[][] board = new char[3][3];', 'A 3 × 3 table of single characters.'],
          ["board[r][c] = '-';", 'Every box becomes a dash: the board is empty and visible.'],
          ["board[1][1] = 'X';", 'The first player takes the centre. Single quotes, because it is one <code>char</code>.'],
          ["board[0][2] = 'O';", 'The second player takes the top-right corner.']
        ], ar: "الحرف الواحد char يُكتب بين علامتي تنصيص مفردتين مثل 'X'." },
        { type: 'check', q: "Which line puts X in the <b>bottom-left</b> corner of a 3 × 3 board?", options: ["<code>board[0][2] = 'X';</code>", "<code>board[2][0] = 'X';</code>", '<code>board[2][0] = &quot;X&quot;;</code>', "<code>board[3][1] = 'X';</code>"], answer: 1, explain: "The bottom row is row 2 and the left column is column 0. <code>&quot;X&quot;</code> is a <code>String</code> and does not compile in a <code>char</code> box." },
        { type: 'h', en: 'Printing a board neatly' },
        { type: 'p', en: "Players want to see a real board, not <code>XO--X-O--</code>. We add separators: a bar <code>|</code> between two boxes, and a line <code>---+---+---</code> between two rows. The trick is the same as the spaces in Lesson 2: print a separator only when this is <b>not the last</b> box (or not the last row)." },
        { type: 'analogy', title: 'Lines in a printed timetable', en: "A printed school timetable has thin lines between the columns and between the rows, so your eye does not jump to the wrong lesson. There is no line after the last column, because nothing comes after it. Our board works the same way.",
          ar: "الفواصل تُطبع بين الخانات فقط، وليس بعد الخانة الأخيرة." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  char[][] board = {
                      {'X', 'O', '-'},
                      {'-', 'X', '-'},
                      {'O', '-', 'X'}
                  };
                  for (int r = 0; r < board.length; r++) {
                      for (int c = 0; c < board[r].length; c++) {
                          System.out.print(" " + board[r][c] + " ");
                          if (c < board[r].length - 1) {
                              System.out.print("|");
                          }
                      }
                      System.out.println();
                      if (r < board.length - 1) {
                          System.out.println("---+---+---");
                      }
                  }
              }
          }
        `, out: J`
           X | O | -
          ---+---+---
           - | X | -
          ---+---+---
           O | - | X
        ` },
        { type: 'lines', rows: [
          ['System.out.print(" " + board[r][c] + " ");', 'One box with a space on each side, so the letters do not touch the bars.'],
          ['if (c < board[r].length - 1)', 'A bar only <b>between</b> boxes: columns 0 and 1 get one, the last column does not.'],
          ['if (r < board.length - 1)', 'A line only <b>between</b> rows: not after the last row.']
        ], ar: "نطبع الفاصل إذا لم تكن هذه الخانة أو هذا الصف الأخير." },
        { type: 'check', q: "How many bars <code>|</code> does one row of a 3 × 3 board get?", options: ['1', '2', '3', '4'], answer: 1, explain: "Three boxes have two gaps between them, so two bars." },
        { type: 'steps', title: 'Worked example: a neat seating chart', problem: "A classroom has 2 rows of 3 desks. Print the chart in neat columns, each name in 8 places, write <code>---</code> for an empty desk, and then print how many desks are free.",
          steps: [
            { en: "<code>null</code> can be written directly in the braces for an empty desk.", code: J`
              String[][] seats = {
                  {"Sara", "Noura", null},
                  {"Reem", null, "Lama"}
              };
            ` },
            { en: "<code>printf(&quot;%-8s&quot;, text)</code> prints the text in 8 places, on the left, and fills the rest with spaces. That makes neat columns even when names have different lengths.", code: J`System.out.printf("%-8s", seats[r][c]);` },
            { en: "For an empty desk print <code>---</code> and count it.", code: J`
              if (seats[r][c] == null) {
                  System.out.printf("%-8s", "---");
                  free++;
              }
            ` },
            { en: "Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    String[][] seats = {
                        {"Sara", "Noura", null},
                        {"Reem", null, "Lama"}
                    };
                    int free = 0;
                    for (int r = 0; r < seats.length; r++) {
                        for (int c = 0; c < seats[r].length; c++) {
                            if (seats[r][c] == null) {
                                System.out.printf("%-8s", "---");
                                free++;
                            } else {
                                System.out.printf("%-8s", seats[r][c]);
                            }
                        }
                        System.out.println();
                    }
                    System.out.println("Free desks: " + free);
                }
            }
          `, out: J`
            Sara    Noura   ---
            Reem    ---     Lama
            Free desks: 2
          `, ar: "%-8s يطبع النص في ثماني خانات من اليسار فتصطف الأعمدة." },
        { type: 'steps', title: 'Worked example: play some moves', problem: "The moves of a short game are stored as a table: each row is one move, <code>{row, column}</code>. X plays first, then O, and so on. Fill the board, play the moves, and print the board neatly with a method.",
          steps: [
            { en: "A table of moves: 4 moves, 2 numbers each. Yes, this is a 2D array of <code>int</code> too!", code: "int[][] moves = {{1, 1}, {0, 0}, {2, 2}, {0, 2}};" },
            { en: "Move number <code>i</code> is played by X when <code>i</code> is even, by O when it is odd.", code: J`
              char player = 'X';
              if (i % 2 == 1) {
                  player = 'O';
              }
            ` },
            { en: "<code>moves[i][0]</code> is the row and <code>moves[i][1]</code> is the column of move <code>i</code>.", code: "board[moves[i][0]][moves[i][1]] = player;" },
            { en: "Put the printing in a method that takes the board. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    char[][] board = new char[3][3];
                    for (int r = 0; r < 3; r++) {
                        for (int c = 0; c < 3; c++) {
                            board[r][c] = '-';
                        }
                    }
                    int[][] moves = {{1, 1}, {0, 0}, {2, 2}, {0, 2}};
                    for (int i = 0; i < moves.length; i++) {
                        char player = 'X';
                        if (i % 2 == 1) {
                            player = 'O';
                        }
                        board[moves[i][0]][moves[i][1]] = player;
                    }
                    printBoard(board);
                }

                public static void printBoard(char[][] b) {
                    for (int r = 0; r < b.length; r++) {
                        for (int c = 0; c < b[r].length; c++) {
                            System.out.print(" " + b[r][c] + " ");
                            if (c < b[r].length - 1) {
                                System.out.print("|");
                            }
                        }
                        System.out.println();
                        if (r < b.length - 1) {
                            System.out.println("---+---+---");
                        }
                    }
                }
            }
          `, out: J`
             O | - | O
            ---+---+---
             - | X | -
            ---+---+---
             - | - | X
          `, ar: "كل صف في جدول الحركات حركة واحدة: رقم الصف ثم رقم العمود." }
      ],
      mistakes: [
        { title: 'Using an empty String box', en: "A box that was never set is <code>null</code>. Calling a method on it crashes.", code: J`
          String[][] s = new String[2][2];
          System.out.println(s[0][0].length());   // NullPointerException
        ` },
        { title: 'Double quotes for a char', en: "<code>&quot;X&quot;</code> is a <code>String</code>; a <code>char</code> box needs <code>'X'</code>.", code: J`
          board[0][0] = "X";   // WRONG: does not compile
          board[0][0] = 'X';   // correct
        ` },
        { title: 'Comparing names with ==', en: "Use <code>equals</code> for the letters of two Strings. Use <code>==</code> only for <code>null</code> and for <code>char</code> values.", code: J`
          if (seats[r][c] == "Omar")        // WRONG
          if (seats[r][c].equals("Omar"))   // correct (box not null)
        ` },
        { title: 'Forgetting to fill a char board', en: "A new <code>char</code> table holds the invisible zero character, so the printed board looks empty or strange. Fill it with <code>'-'</code> first.", code: J`
          char[][] b = new char[3][3];
          System.out.print(b[0][0]);   // prints an invisible character
        ` }
      ],
      remember: [
        "<code>String[][]</code> holds words; <code>char[][]</code> holds single characters.",
        "A new <code>String</code> table is full of <code>null</code>; test with <code>== null</code> before using a box.",
        "Compare names with <code>equals</code>; compare <code>char</code> values with <code>==</code>.",
        "Fill a new <code>char</code> board with a visible character such as <code>'-'</code>.",
        "Print separators only between boxes: <code>if (c &lt; b[r].length - 1)</code>.",
        "<code>printf(&quot;%-8s&quot;, name)</code> prints a name in 8 places for neat columns."
      ],
      rememberAr: "جدول String يبدأ بالقيمة null فنفحصها قبل الاستعمال، ونقارن النصوص بـ equals. جدول char نملؤه أولًا بحرف ظاهر مثل '-'، ونطبع الفواصل بين الخانات فقط.",
      practice: [
        { t: 'mcq', q: "What does <code>new String[2][2]</code> hold in every box?", options: ['<code>&quot;&quot;</code>', '<code>null</code>', "<code>'-'</code>", '<code>0</code>'], answer: 1, explain: "A table of Strings starts with <code>null</code> in every box." },
        { t: 'mcq', q: "<code>char[][] b = new char[3][3];</code> Which line compiles?", options: ['<code>b[0][0] = &quot;O&quot;;</code>', "<code>b[0][0] = 'O';</code>", "<code>b[0] = 'O';</code>", "<code>b = 'O';</code>"], answer: 1, explain: "A single box needs two indexes and a <code>char</code> in single quotes." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  char[][] b = new char[2][3];
                  for (int r = 0; r < b.length; r++) {
                      for (int c = 0; c < b[r].length; c++) {
                          b[r][c] = '.';
                      }
                  }
                  b[0][1] = 'X';
                  b[1][2] = 'O';
                  for (int r = 0; r < b.length; r++) {
                      for (int c = 0; c < b[r].length; c++) {
                          System.out.print(b[r][c]);
                      }
                      System.out.println();
                  }
              }
          }
        `, answer: J`
          .X.
          ..O
        `, explain: "All boxes become dots, then X goes to row 0, column 1 and O to row 1, column 2. Each row is printed on its own line with no spaces." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String[][] s = {{"Ali", null}, {null, "Saad"}, {"Hamad", "Majed"}};
                  int taken = 0;
                  for (int r = 0; r < s.length; r++) {
                      for (int c = 0; c < s[r].length; c++) {
                          if (s[r][c] != null) {
                              taken++;
                          }
                      }
                  }
                  System.out.println(taken + " " + s[2][0] + " " + s[0][1]);
              }
          }
        `, answer: '4 Hamad null', explain: "Four boxes hold names. <code>s[2][0]</code> is Hamad. <code>s[0][1]</code> is <code>null</code>, and printing it shows the word null." },
        { t: 'fill', q: "Complete the code that creates a 3 × 3 game board and fills it with dashes.", code: J`
          ___[][] board = new char[3][3];
          for (int r = 0; r < board.length; r++) {
              for (int c = 0; c < board[r].length; c++) {
                  board[r][c] = ___;
              }
          }
        `, answers: ['char', ["'-'"]], explain: "The type is <code>char</code>, and a dash as a <code>char</code> is written <code>'-'</code> with single quotes." },
        { t: 'order', q: "Arrange the lines of a program that fills a 2 × 2 board with <code>*</code> and prints it.", lines: [
          'public class Main {',
          '    public static void main(String[] args) {',
          '        char[][] b = new char[2][2];',
          '        for (int r = 0; r < 2; r++) {',
          '            for (int c = 0; c < 2; c++) {',
          "                b[r][c] = '*';",
          '                System.out.print(b[r][c]);',
          '            }',
          '            System.out.println();',
          '        }',
          '    }',
          '}'
        ], explain: "Create the board, then in the nested loops set each box and print it; the new line comes after the inner loop." },
        { t: 'bug', q: "The program should count the names longer than 4 letters (the answer is 1: Noura). It crashes. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    String[][] seats = {{"Sara", null}, {"Noura", "Reem"}};
                    int count = 0;
                    for (int r = 0; r < seats.length; r++) {
                        for (int c = 0; c < seats[r].length; c++) {
                            if (seats[r][c].length() > 4) {
                                count++;
                            }
                        }
                    }
                    System.out.println(count);
                }
            }
          `, bug: 7,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    String[][] seats = {{"Sara", null}, {"Noura", "Reem"}};
                    int count = 0;
                    for (int r = 0; r < seats.length; r++) {
                        for (int c = 0; c < seats[r].length; c++) {
                            if (seats[r][c] != null && seats[r][c].length() > 4) {
                                count++;
                            }
                        }
                    }
                    System.out.println(count);
                }
            }
          `,
          hint: "Look at seats[0][1]. What is in that box?",
          explain: "Box <code>seats[0][1]</code> is <code>null</code> (an empty desk). Calling <code>.length()</code> on it throws a <code>NullPointerException</code>. The fix tests <code>!= null</code> first. Because <code>&amp;&amp;</code> stops as soon as the left side is false, <code>length()</code> is never called on an empty box. The fixed program prints 1.",
          explainAr: "الخانة null لا يمكن استدعاء length() عليها، فنفحص != null أولًا." },
        { t: 'code', q: "Read three words, each made of 3 characters (<code>X</code>, <code>O</code> or <code>-</code>): one word per row of a tic-tac-toe board. Store them in a <code>char[3][3]</code> using <code>charAt</code>. Print the board with <code> | </code> between boxes (no separator lines), then a line <code>X: a, O: b</code> with the number of X and O. No prompts.",
          qAr: "خزّن{{g:|ي}} كل حرف في خانته باستعمال charAt ثم عدّ{{g:|ي}} حروف X وO.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    char[][] board = new char[3][3];
                    // read 3 words and copy their characters into the board
                    // print the board, then the counts
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    char[][] board = new char[3][3];
                    for (int r = 0; r < 3; r++) {
                        String word = input.next();
                        for (int c = 0; c < 3; c++) {
                            board[r][c] = word.charAt(c);
                        }
                    }
                    int x = 0;
                    int o = 0;
                    for (int r = 0; r < 3; r++) {
                        for (int c = 0; c < 3; c++) {
                            System.out.print(board[r][c]);
                            if (c < 2) {
                                System.out.print(" | ");
                            }
                            if (board[r][c] == 'X') x++;
                            if (board[r][c] == 'O') o++;
                        }
                        System.out.println();
                    }
                    System.out.println("X: " + x + ", O: " + o);
                }
            }
          `,
          tests: [ { stdin: 'XO-\n-X-\nO-X', expected: 'X | O | -\n- | X | -\nO | - | X\nX: 3, O: 2' }, { stdin: '---\n---\n---', expected: '- | - | -\n- | - | -\n- | - | -\nX: 0, O: 0' }, { stdin: 'XXX\nOO-\n---', expected: 'X | X | X\nO | O | -\n- | - | -\nX: 3, O: 2' } ],
          hint: "word.charAt(c) is the character at position c. Compare chars with ==, e.g. board[r][c] == 'X'.",
          explain: "Each word fills one row: character <code>c</code> of the word goes to column <code>c</code>. <code>char</code> values are compared with <code>==</code>." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 10
    {
      title: 'Searching a table',
      titleAr: 'البحث في جدول',
      minutes: 30,
      body: [
        { type: 'h', en: 'Where is it? Is it there?' },
        { type: 'p', en: "Very often the question is not &quot;what is the total?&quot; but &quot;where is it?&quot; or &quot;is it there?&quot;. Where does Omar sit? Did any student get 100? Did every week have a very hot day? In CS101 you searched a 1D array with <b>linear search</b>: look at every box, one by one, until you find the value. In a table we do the same with nested loops. The only difference: a position is now <b>two numbers</b>, a row and a column.",
          ar: "البحث في الجدول مثل البحث الخطي، لكن الموقع رقمان: صف وعمود." },
        { type: 'analogy', title: 'Finding your car in a parking garage', en: "You walk along level 1 from the first spot to the last, then go up to level 2 and do the same. When you see your car, you remember the <b>level</b> and the <b>spot number</b>. If you reach the end of the last level without seeing it, the car is not in this garage.",
          ar: "نمشي في الطابق الأول مكانًا مكانًا ثم الثاني، وعندما نجد السيارة نحفظ الطابق ورقم المكان." },
        { type: 'h', en: 'Find a value and report its row and column' },
        { type: 'p', en: "We need three variables. A <code>boolean found</code> starts as <code>false</code>. Two ints, <code>foundRow</code> and <code>foundCol</code>, start at <code>-1</code>: a position that cannot exist, which means &quot;not found yet&quot;. When a box matches, we save its row and column." },
        { type: 'code', code: J`
          boolean found = false;
          int foundRow = -1, foundCol = -1;
          for (int r = 0; r < m.length; r++) {
              for (int c = 0; c < m[r].length; c++) {
                  if (!found && m[r][c] == target) {
                      found = true;
                      foundRow = r;
                      foundCol = c;
                  }
              }
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['int foundRow = -1, foundCol = -1;', '-1 is never a real index, so it means &quot;nothing found yet&quot;.'],
          ['if (!found && m[r][c] == target)', 'Save a position only if nothing was found before. So we keep the <b>first</b> match in reading order.'],
          ['found = true;', 'From now on, later matches are ignored.'],
          ['foundRow = r; foundCol = c;', 'Remember both numbers of the position.']
        ], ar: "نبدأ الموقع بـ -1، ونحفظ أول تطابق فقط بفضل الشرط !found." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] marks = {
                      {85, 90, 78},
                      {70, 100, 88},
                      {92, 81, 100}
                  };
                  int target = 100;
                  boolean found = false;
                  int foundRow = -1, foundCol = -1;
                  for (int r = 0; r < marks.length; r++) {
                      for (int c = 0; c < marks[r].length; c++) {
                          if (!found && marks[r][c] == target) {
                              found = true;
                              foundRow = r;
                              foundCol = c;
                          }
                      }
                  }
                  if (found) {
                      System.out.println("First " + target + ": student " + (foundRow + 1) + ", quiz " + (foundCol + 1));
                  } else {
                      System.out.println(target + " not found");
                  }
              }
          }
        `, out: J`
          First 100: student 2, quiz 2
        ` },
        { type: 'table', head: ['r', 'c', 'marks[r][c]', 'found after', 'position'], rows: [
          ['0', '0, 1, 2', '85, 90, 78', 'false', '[-1][-1]'],
          ['1', '0', '70', 'false', '[-1][-1]'],
          ['1', '1', '100', '<b>true</b>', '[1][1] saved'],
          ['1', '2', '88', 'true', '[1][1]'],
          ['2', '0, 1', '92, 81', 'true', '[1][1]'],
          ['2', '2', '100', 'true', '[1][1] (ignored: <code>!found</code> is false)']
        ] },
        { type: 'check', q: "In the program above, <code>target</code> becomes 95. What is printed?", options: ['First 95: student 1, quiz 1', '95 not found', 'Nothing', 'First 95: student 0, quiz 0'], answer: 1, explain: "No box holds 95, so <code>found</code> stays false and the else branch runs." },
        { type: 'h', en: 'Stopping early with a method' },
        { type: 'p', en: "The loops above keep running after the value is found. That is correct, but wasteful in a big table. A <b>method</b> can stop at once with <code>return</code>, which leaves both loops immediately. A method can return only one thing, so it returns the position as a small <code>int[]</code> of two numbers, <code>{row, column}</code>, or <code>{-1, -1}</code> when the value is not there." },
        { type: 'code', code: J`
          public static int[] find(int[][] m, int target) {
              for (int r = 0; r < m.length; r++) {
                  for (int c = 0; c < m[r].length; c++) {
                      if (m[r][c] == target) {
                          return new int[] {r, c};
                      }
                  }
              }
              return new int[] {-1, -1};
          }
        ` },
        { type: 'lines', rows: [
          ['public static int[] find(int[][] m, int target)', 'A table and a value in; a 1D array of two numbers out.'],
          ['return new int[] {r, c};', '<code>new int[] {r, c}</code> creates a new array that holds the two numbers. <code>return</code> leaves the method, so both loops stop at once.'],
          ['return new int[] {-1, -1};', 'This line is reached only when the loops finish without a match.']
        ], ar: "return يخرج من الدالة ومن الحلقتين معًا، ونعيد الموقع في مصفوفة من رقمين." },
        { type: 'memory', title: 'The position travels back in a small array', en: "The table is <code>{{38, 41, 43}, {44, 39, 45}}</code> and we call <code>int[] pos = find(temps, 45);</code>.", frames: [
          { label: 'Inside <code>find</code>: a match at <code>r = 1</code>, <code>c = 2</code>', vars: [{ name: 'temps (main)', type: 'int[][]', ref: 'A' }, { name: 'm (find)', type: 'int[][]', ref: 'A' }, { name: 'r', type: 'int', value: '1' }, { name: 'c', type: 'int', value: '2' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '38' }, { name: '[1]', value: '41' }, { name: '[2]', value: '43' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '44' }, { name: '[1]', value: '39' }, { name: '[2]', value: '45' }] }
          ] },
          { label: '<code>return new int[] {r, c};</code> creates a new array D', vars: [{ name: 'temps (main)', type: 'int[][]', ref: 'A' }, { name: 'm (find)', type: 'int[][]', ref: 'A' }, { name: 'r', type: 'int', value: '1' }, { name: 'c', type: 'int', value: '2' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '38' }, { name: '[1]', value: '41' }, { name: '[2]', value: '43' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '44' }, { name: '[1]', value: '39' }, { name: '[2]', value: '45' }] },
            { id: 'D', cls: 'int[] (position)', fields: [{ name: '[0] row', value: '1' }, { name: '[1] column', value: '2' }] }
          ] },
          { label: 'Back in <code>main</code>: <code>pos</code> refers to D', vars: [{ name: 'temps (main)', type: 'int[][]', ref: 'A' }, { name: 'pos (main)', type: 'int[]', ref: 'D' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '38' }, { name: '[1]', value: '41' }, { name: '[2]', value: '43' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '44' }, { name: '[1]', value: '39' }, { name: '[2]', value: '45' }] },
            { id: 'D', cls: 'int[] (position)', fields: [{ name: '[0] row', value: '1' }, { name: '[1] column', value: '2' }] }
          ] }
        ], ar: "الدالة تنشئ مصفوفة صغيرة فيها الصف والعمود وتعيد مرجعها." },
        { type: 'p', en: "In <code>main</code>, <code>pos[0]</code> is the row and <code>pos[1]</code> is the column. Test <code>pos[0] == -1</code> to know whether the value was missing." },
        { type: 'code', code: J`
          for (int r = 0; r < m.length; r++) {
              for (int c = 0; c < m[r].length; c++) {
                  if (m[r][c] == target) {
                      foundRow = r;
                      foundCol = c;
                      break;          // leaves only the c loop!
                  }
              }
          }
        ` },
        { type: 'note', kind: 'exam', en: "<code>break</code> leaves only the loop it is in: the <b>inner</b> loop. The outer loop goes on with the next row, so a later match can overwrite the position, and you get the <b>last</b> row that has a match, not the first. Use the <code>!found</code> test, or a method with <code>return</code>.",
          ar: "break يخرج من الحلقة الداخلية فقط؛ الحلقة الخارجية تستمر." },
        { type: 'check', q: "<code>find(m, 7)</code> returns <code>{-1, -1}</code>. What does it mean?", options: ['7 is in row -1', '7 is not in the table', 'The table is empty', '7 is in the last box'], answer: 1, explain: "The method reaches its last line only when no box matched." },
        { type: 'h', en: 'Counting matches' },
        { type: 'p', en: "Sometimes you want <b>how many</b>: how many seats are booked, how many students got full marks. Use a counter declared before the loops, and add 1 for every match. Here you must <b>not</b> stop early: every box has to be checked." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  char[][] hall = {
                      {'B', 'B', '.', '.'},
                      {'.', 'B', 'B', 'B'},
                      {'.', '.', '.', 'B'}
                  };
                  int booked = 0;
                  for (int r = 0; r < hall.length; r++) {
                      for (int c = 0; c < hall[r].length; c++) {
                          if (hall[r][c] == 'B') {
                              booked++;
                          }
                      }
                  }
                  int all = hall.length * hall[0].length;
                  System.out.println("Booked: " + booked + " of " + all);
              }
          }
        `, out: J`
          Booked: 6 of 12
        ` },
        { type: 'lines', rows: [
          ["if (hall[r][c] == 'B')", "A booked seat is marked <code>'B'</code>; <code>char</code> values are compared with <code>==</code>."],
          ['int all = hall.length * hall[0].length;', 'For a rectangle, rows × columns gives the number of seats: 3 × 4 = 12.']
        ], ar: "العدّاد قبل الحلقتين، ونزيده عند كل تطابق دون توقف." },
        { type: 'check', q: "For counting, where is <code>int booked = 0;</code> declared?", options: ['Before both loops', 'Inside the outer loop', 'Inside the inner loop', 'After both loops'], answer: 0, explain: "One counter for the whole table, so it is created once, before the loops. (A counter <b>per row</b> would go inside the outer loop.)" },
        { type: 'h', en: 'Does every row have one?' },
        { type: 'p', en: "A harder question: &quot;Did <b>every</b> student pass at least one quiz?&quot; This needs two levels of yes/no. Inside the outer loop, a flag <code>rowHas</code> answers &quot;does this row have a pass?&quot;. Outside, a flag <code>allRows</code> starts <code>true</code> and becomes <code>false</code> as soon as one row has none." },
        { type: 'analogy', title: 'Checking the bags', en: "A teacher checks that every student brought at least one book. For each student she looks into the bag, item by item (inner loop). If one bag has no book at all, the answer for the whole class is &quot;no&quot;, whatever the other bags hold.",
          ar: "إذا خلت حقيبة واحدة من الكتب، فالجواب عن الفصل كله: لا." },
        { type: 'code', code: J`
          boolean allRows = true;
          for (int r = 0; r < m.length; r++) {
              boolean rowHas = false;
              for (int c = 0; c < m[r].length; c++) {
                  if (m[r][c] >= 60) {
                      rowHas = true;
                  }
              }
              if (!rowHas) {
                  allRows = false;
              }
          }
        ` },
        { type: 'lines', rows: [
          ['boolean allRows = true;', 'Innocent until proven guilty: we believe &quot;yes&quot; until a row fails.'],
          ['boolean rowHas = false;', 'For each row: no pass seen yet. It is inside the outer loop, so every row starts fresh.'],
          ['if (!rowHas) { allRows = false; }', 'After the inner loop: this row had no pass, so the whole answer is &quot;no&quot;.']
        ], ar: "allRows يبدأ true ويصبح false عند أول صف لا يحقق الشرط." },
        { type: 'table', head: ['Question', 'Flag starts as', 'Flag changes when'], rows: [
          ['Is there <b>any</b> box with the value?', '<code>false</code>', 'a box matches → <code>true</code>'],
          ['Does <b>every</b> box have the value?', '<code>true</code>', 'a box fails → <code>false</code>'],
          ['Does <b>every row</b> have the value?', 'all: <code>true</code>; per row: <code>false</code>', 'a row ends with no match → all becomes <code>false</code>']
        ] },
        { type: 'check', q: "To answer &quot;is <b>every</b> mark at least 50?&quot;, the flag should start as…", options: ['<code>true</code>, and become false when a mark is below 50', '<code>false</code>, and become true when a mark is at least 50', '<code>true</code>, and become false when a mark is at least 50', 'It does not matter'], answer: 0, explain: "&quot;Every&quot; starts with yes; one failing box is enough to say no." },
        { type: 'steps', title: 'Worked example: where does he sit?', problem: "Write a method <code>findName</code> that searches a seating chart for a name and returns its position, or <code>{-1, -1}</code>. Print the result for a student in the chart and for one who is not.",
          steps: [
            { en: "Some desks are empty (<code>null</code>).", code: J`
              String[][] seats = {
                  {"Fahad", null, "Omar"},
                  {"Khalid", "Saad", null}
              };
            ` },
            { en: "Names are compared with <code>equals</code>. Test <code>!= null</code> first, so an empty desk never crashes the program.", code: J`
              if (seats[r][c] != null && seats[r][c].equals(name)) {
                  return new int[] {r, c};
              }
            ` },
            { en: "A second method prints the answer for people: row and desk numbers start from 1.", code: J`
              System.out.println(name + ": row " + (pos[0] + 1) + ", desk " + (pos[1] + 1));
            ` },
            { en: "Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    String[][] seats = {
                        {"Fahad", null, "Omar"},
                        {"Khalid", "Saad", null}
                    };
                    report(seats, "Saad");
                    report(seats, "Ali");
                }

                public static void report(String[][] seats, String name) {
                    int[] pos = findName(seats, name);
                    if (pos[0] == -1) {
                        System.out.println(name + " is not in the chart");
                    } else {
                        System.out.println(name + ": row " + (pos[0] + 1) + ", desk " + (pos[1] + 1));
                    }
                }

                public static int[] findName(String[][] seats, String name) {
                    for (int r = 0; r < seats.length; r++) {
                        for (int c = 0; c < seats[r].length; c++) {
                            if (seats[r][c] != null && seats[r][c].equals(name)) {
                                return new int[] {r, c};
                            }
                        }
                    }
                    return new int[] {-1, -1};
                }
            }
          `, out: J`
            Saad: row 2, desk 2
            Ali is not in the chart
          `, ar: "نقارن الأسماء بـ equals بعد التأكد أن الخانة ليست null." },
        { type: 'steps', title: 'Worked example: a very hot day in every week?', problem: "The noon temperatures of 3 weeks are in a table. For each week print <code>yes</code> if some day was above 45, else <code>no</code>. Then print whether <b>every</b> week had such a day.",
          steps: [
            { en: "One row per week.", code: J`
              int[][] temps = {
                  {44, 46, 43, 41, 39, 38, 40},
                  {45, 45, 43, 44, 42, 41, 40},
                  {47, 48, 46, 45, 44, 43, 42}
              };
            ` },
            { en: "<code>allWeeks</code> starts true before the loops; <code>hot</code> starts false for each week.", code: J`
              boolean allWeeks = true;
              for (int w = 0; w < temps.length; w++) {
                  boolean hot = false;
            ` },
            { en: "Note: 45 is not <b>above</b> 45, so week 2 has no very hot day.", code: J`
                  for (int d = 0; d < temps[w].length; d++) {
                      if (temps[w][d] > 45) {
                          hot = true;
                      }
                  }
            ` },
            { en: "After the inner loop, print the week and update <code>allWeeks</code>. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] temps = {
                        {44, 46, 43, 41, 39, 38, 40},
                        {45, 45, 43, 44, 42, 41, 40},
                        {47, 48, 46, 45, 44, 43, 42}
                    };
                    boolean allWeeks = true;
                    for (int w = 0; w < temps.length; w++) {
                        boolean hot = false;
                        for (int d = 0; d < temps[w].length; d++) {
                            if (temps[w][d] > 45) {
                                hot = true;
                            }
                        }
                        if (hot) {
                            System.out.println("Week " + (w + 1) + ": yes");
                        } else {
                            System.out.println("Week " + (w + 1) + ": no");
                            allWeeks = false;
                        }
                    }
                    System.out.println("Every week above 45: " + allWeeks);
                }
            }
          `, out: J`
            Week 1: yes
            Week 2: no
            Week 3: yes
            Every week above 45: false
          `, ar: "علم لكل أسبوع يبدأ false، وعلم للجميع يبدأ true." }
      ],
      mistakes: [
        { title: 'Setting found back to false', en: "An <code>else</code> that sets <code>found = false</code> lets every later box undo the answer. Only the last box decides.", code: J`
          if (m[r][c] == target) found = true;
          else found = false;   // WRONG: forgets earlier matches
        ` },
        { title: 'Thinking break stops both loops', en: "<code>break</code> leaves only the inner loop; the outer loop continues.", code: J`
          if (m[r][c] == target) { row = r; col = c; break; }   // outer loop goes on
        ` },
        { title: 'Comparing names with ==', en: "Use <code>equals</code> (after a null test) to compare the letters of two Strings.", code: J`
          if (seats[r][c] == name)   // WRONG
          if (seats[r][c] != null && seats[r][c].equals(name))   // correct
        ` },
        { title: 'The row flag in the wrong place', en: "<code>rowHas</code> must be reset inside the outer loop. Declared before the loops, one good row makes every later row look good.", code: J`
          boolean rowHas = false;   // WRONG place: before the outer loop
          for (int r = 0; r < m.length; r++) { ... }
        ` }
      ],
      remember: [
        "Search with nested loops; a position is two numbers: row and column.",
        "Start the position at <code>-1</code> and a <code>found</code> flag at <code>false</code>; use <code>!found</code> to keep the first match.",
        "A method can return <code>new int[] {r, c}</code> and stop both loops at once; <code>{-1, -1}</code> means not found.",
        "<code>break</code> leaves only the inner loop.",
        "Counting: one counter before the loops, never stop early.",
        "&quot;Any&quot; flags start <code>false</code>; &quot;every&quot; flags start <code>true</code>."
      ],
      rememberAr: "نبحث بحلقتين متداخلتين ونحفظ الصف والعمود. الدالة تعيد new int[] {r, c} أو {-1, -1} إذا لم نجد القيمة. break يخرج من الحلقة الداخلية فقط. علم \"أي\" يبدأ false وعلم \"كل\" يبدأ true.",
      practice: [
        { t: 'mcq', q: "Why do <code>foundRow</code> and <code>foundCol</code> start at <code>-1</code>?", options: ['Because -1 is the last row', 'Because -1 can never be a real index, so it means &quot;not found&quot;', 'Because Java requires it', 'To make the loop faster'], answer: 1, explain: "Indexes start at 0, so -1 is a safe value for &quot;no position yet&quot;." },
        { t: 'mcq', q: "To answer &quot;does every row have a value above 90?&quot;, what does the overall flag start as?", options: ['<code>false</code>', '<code>true</code>', '<code>0</code>', '<code>null</code>'], answer: 1, explain: "&quot;Every&quot; starts as true and becomes false as soon as one row has no such value." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{5, 3, 5}, {1, 5, 2}, {5, 0, 4}};
                  int count = 0;
                  int lastRow = -1;
                  for (int r = 0; r < m.length; r++) {
                      for (int c = 0; c < m[r].length; c++) {
                          if (m[r][c] == 5) {
                              count++;
                              lastRow = r;
                          }
                      }
                  }
                  System.out.println(count + " " + lastRow);
              }
          }
        `, answer: '4 2', explain: "The value 5 appears twice in row 0, once in row 1 and once in row 2: 4 times. The last match is in row 2." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{4, 7, 2}, {7, 1, 9}};
                  boolean found = false;
                  int row = -1, col = -1;
                  for (int r = 0; r < m.length; r++) {
                      for (int c = 0; c < m[r].length; c++) {
                          if (!found && m[r][c] > 5) {
                              found = true;
                              row = r;
                              col = c;
                          }
                      }
                  }
                  System.out.println(row + " " + col);
              }
          }
        `, answer: '0 1', explain: "The first box greater than 5 in reading order is the 7 at row 0, column 1. Later matches are ignored because <code>found</code> is already true." },
        { t: 'fill', q: "Complete the method that returns the position of <code>target</code>, or <code>{-1, -1}</code>.", code: J`
          public static int[] find(int[][] m, int target) {
              for (int r = 0; r < m.length; r++) {
                  for (int c = 0; c < m[r].length; c++) {
                      if (m[r][c] == ___) {
                          return new int[] {r, ___};
                      }
                  }
              }
              return new int[] {___, -1};
          }
        `, answers: ['target', 'c', '-1'], explain: "Compare with the target, return the row and the column, and return -1, -1 when the loops end without a match." },
        { t: 'order', q: "Arrange the lines that decide whether <b>every</b> row of <code>m</code> has a mark of at least 60.", lines: [
          'boolean allRows = true;',
          'for (int r = 0; r < m.length; r++) {',
          '    boolean rowHas = false;',
          '    for (int c = 0; c < m[r].length; c++) {',
          '        if (m[r][c] >= 60) rowHas = true;',
          '    }',
          '    if (!rowHas) allRows = false;',
          '}'
        ], explain: "The overall flag starts true before the loops; the row flag starts false inside the outer loop; after the inner loop a row without a pass makes the overall flag false." },
        { t: 'bug', q: "The value 8 is in the table, so the program should print <code>true</code>. It prints <code>false</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] m = {{3, 8}, {6, 1}};
                    boolean found = false;
                    for (int r = 0; r < m.length; r++) {
                        for (int c = 0; c < m[r].length; c++) {
                            if (m[r][c] == 8) found = true;
                            else found = false;
                        }
                    }
                    System.out.println(found);
                }
            }
          `, bug: 8,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] m = {{3, 8}, {6, 1}};
                    boolean found = false;
                    for (int r = 0; r < m.length; r++) {
                        for (int c = 0; c < m[r].length; c++) {
                            if (m[r][c] == 8) found = true;
                        }
                    }
                    System.out.println(found);
                }
            }
          `,
          hint: "What happens to found when the loop reaches the boxes after the 8?",
          explain: "The 8 sets <code>found</code> to true, but the next box (6) runs the <code>else</code> and sets it back to false. In the end only the last box (1) decides. A search flag must only ever go from false to true, so remove the <code>else</code>. The fixed program prints true.",
          explainAr: "الفرع else يعيد found إلى false عند الخانات التالية؛ يجب حذفه." },
        { t: 'code', q: "Read <code>rows</code> and <code>cols</code>, a table of integers, and then a number <code>target</code>. Print <code>Found at [r][c]</code> with the indexes of the <b>first</b> match in reading order, or <code>Not found</code>. Then print <code>Count: n</code>, the number of boxes equal to <code>target</code>. No prompts.",
          qAr: "اطبع{{g:|ي}} موقع أول تطابق ثم عدد مرات ظهور القيمة.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    // read the table, then read target
                    // search: first position and count
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    for (int r = 0; r < rows; r++) {
                        for (int c = 0; c < cols; c++) {
                            m[r][c] = input.nextInt();
                        }
                    }
                    int target = input.nextInt();
                    int foundRow = -1, foundCol = -1;
                    int count = 0;
                    for (int r = 0; r < rows; r++) {
                        for (int c = 0; c < cols; c++) {
                            if (m[r][c] == target) {
                                if (count == 0) {
                                    foundRow = r;
                                    foundCol = c;
                                }
                                count++;
                            }
                        }
                    }
                    if (count > 0) {
                        System.out.println("Found at [" + foundRow + "][" + foundCol + "]");
                    } else {
                        System.out.println("Not found");
                    }
                    System.out.println("Count: " + count);
                }
            }
          `,
          tests: [ { stdin: '2 3\n4 7 2\n7 1 7\n7', expected: 'Found at [0][1]\nCount: 3' }, { stdin: '2 2\n1 2\n3 4\n9', expected: 'Not found\nCount: 0' }, { stdin: '3 1\n5\n6\n5\n5', expected: 'Found at [0][0]\nCount: 2' } ],
          hint: "Save the position only for the first match (when the count is still 0), but count every match.",
          explain: "One pass does both jobs: the count grows for every match, and the position is saved only when the count is still 0, which is the first match." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 11
    {
      title: 'Traversal patterns and quick printing',
      titleAr: 'طرق المرور على الجدول والطباعة السريعة',
      minutes: 25,
      body: [
        { type: 'h', en: 'Two ways to walk through a table' },
        { type: 'p', en: "Every program in this unit visits the boxes of a table in some order. Visiting all the boxes is called a <b>traversal</b>. Often the order does not matter: a total is the same in any order. But sometimes it does: when you print, when you want the <b>first</b> match, or when people must be served in a fair order. There are two main orders. <b>Row by row</b> reads like a book. <b>Column by column</b> goes down the first column, then down the second, and so on.",
          ar: "المرور على كل الخانات له ترتيبان رئيسيان: صفًّا صفًّا، أو عمودًا عمودًا." },
        { type: 'analogy', title: 'Collecting exam papers', en: "At the end of an exam, one teacher collects the papers row by row, from left to right, like reading. Another teacher walks down each column of desks from the front to the back, then moves to the next column. Both teachers collect every paper, but the papers end up in a different order in their hands.",
          ar: "معلم يجمع الأوراق صفًّا صفًّا، وآخر عمودًا عمودًا: كلاهما يجمع كل الأوراق بترتيب مختلف." },
        { type: 'code', code: J`
          visit order in a 3 x 4 table

          row by row             column by column
           1  2  3  4             1  4  7 10
           5  6  7  8             2  5  8 11
           9 10 11 12             3  6  9 12
        ` },
        { type: 'p', en: "In code, the only difference is <b>which loop is outside</b>. Row by row: the outer loop goes over the rows. Column by column: the outer loop goes over the columns. Inside the brackets nothing changes: the box is always <code>m[r][c]</code>, row first." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String[][] seats = {
                      {"Sara", "Noura", "Reem"},
                      {"Lama", "Hind", "Maha"}
                  };
                  System.out.print("Row by row:");
                  for (int r = 0; r < seats.length; r++) {
                      for (int c = 0; c < seats[r].length; c++) {
                          System.out.print(" " + seats[r][c]);
                      }
                  }
                  System.out.println();
                  System.out.print("Column by column:");
                  for (int c = 0; c < seats[0].length; c++) {
                      for (int r = 0; r < seats.length; r++) {
                          System.out.print(" " + seats[r][c]);
                      }
                  }
                  System.out.println();
              }
          }
        `, out: J`
          Row by row: Sara Noura Reem Lama Hind Maha
          Column by column: Sara Lama Noura Hind Reem Maha
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['for (int c = 0; c < seats[0].length; c++)', 'Column by column: the <b>outer</b> loop chooses a column. The number of columns is the length of a row.'],
          ['for (int r = 0; r < seats.length; r++)', 'The inner loop walks down that column, through all the rows.'],
          ['seats[r][c]', 'Still row first, column second, whichever loop is outside.']
        ], ar: "الحلقة الخارجية تحدد الترتيب، أما داخل الأقواس فالصف أولًا دائمًا." },
        { type: 'p', en: "You can also walk <b>backwards</b>. A league table is printed from the best team down, but to show the bottom of the table first, start the outer loop at the last row and count down:" },
        { type: 'code', code: J`
          for (int r = m.length - 1; r >= 0; r--) {   // last row first
              for (int c = 0; c < m[r].length; c++) {
                  System.out.print(m[r][c] + " ");
              }
              System.out.println();
          }
        ` },
        { type: 'note', kind: 'exam', en: "Column by column uses <code>m[0].length</code> as the number of columns, so it needs a <b>rectangle</b>. In a ragged array a short row has no box in some columns, and the program crashes. For ragged arrays, go row by row.",
          ar: "المرور عمودًا عمودًا يحتاج جدولًا مستطيلًا." },
        { type: 'check', q: "<code>int[][] m = {{1, 2}, {3, 4}, {5, 6}};</code> What does a column-by-column traversal print?", options: ['1 2 3 4 5 6', '1 3 5 2 4 6', '6 5 4 3 2 1', '1 4 2 5 3 6'], answer: 1, explain: "Down column 0 (1, 3, 5), then down column 1 (2, 4, 6)." },
        { type: 'h', en: 'The enhanced for loop over rows' },
        { type: 'p', en: "You met <code>for (int[] row : m)</code> in Lesson 6. Now look at it with the memory picture in mind. At each turn, <code>row</code> gets a copy of one <b>arrow</b> from the array of rows. So <code>row</code> is not a copy of the row: it refers to the <b>same</b> row object as <code>m[0]</code>, then <code>m[1]</code>. That is why <code>row[1] = 9;</code> really changes the table, while the inner variable of <code>for (int v : row)</code> is only a copy of a number." },
        { type: 'analogy', title: 'Pointing at each shelf', en: "Walk along a bookcase and point at one shelf at a time. Your finger is not a copy of the shelf: if you put a book on the shelf you point at, the bookcase really has that book. <code>row</code> is the finger. But when you copy the price of a book into your notebook (that is <code>v</code>), changing the notebook does not change the book.",
          ar: "row مثل إصبع يشير إلى الرف الحقيقي، أما v فنسخة من الرقم في دفترك." },
        { type: 'memory', title: '<code>row</code> refers to the real rows', code: J`
            int[][] m = {{3, 8}, {5, 1}};
            for (int[] row : m) {
                row[1] = 9;
            }
          `, frames: [
          { label: 'First turn: <code>row</code> refers to row B, and <code>row[1] = 9;</code> changes B', vars: [{ name: 'm', type: 'int[][]', ref: 'A' }, { name: 'row', type: 'int[]', ref: 'B' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '3' }, { name: '[1]', value: '9' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '5' }, { name: '[1]', value: '1' }] }
          ] },
          { label: 'Second turn: <code>row</code> refers to row C, and C changes', vars: [{ name: 'm', type: 'int[][]', ref: 'A' }, { name: 'row', type: 'int[]', ref: 'C' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '3' }, { name: '[1]', value: '9' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '5' }, { name: '[1]', value: '9' }] }
          ] },
          { label: 'After the loop: <code>row</code> is gone; <code>m</code> is now <code>{{3, 9}, {5, 9}}</code>', vars: [{ name: 'm', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '3' }, { name: '[1]', value: '9' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '5' }, { name: '[1]', value: '9' }] }
          ] }
        ], ar: "المتغير row يشير إلى الصف الحقيقي، لذلك row[1] = 9 يغيّر الجدول." },
        { type: 'p', en: "So which loop should you use? The enhanced for loop is short and safe, but it gives you no index numbers and it always goes row by row. Use this table to choose:",
          ar: "for-each قصيرة لكنها لا تعطي رقم الصف أو العمود، وتمر صفًّا صفًّا فقط." },
        { type: 'table', head: ['What you need', 'Loop to use'], rows: [
          ['Read every value; no position needed (total, count, largest value)', 'Nested for-each'],
          ['The row or column number (print &quot;Student 2&quot;, report a position)', 'Counting loops with <code>r</code> and <code>c</code>'],
          ['Change boxes', 'Counting loops, or <code>row[j] = …</code> inside <code>for (int[] row : m)</code>'],
          ['Column by column, or backwards', 'Counting loops (for-each always goes forward, row by row)']
        ] },
        { type: 'check', q: "Which task can be done with nested for-each loops only?", options: ['Add up all the boxes', 'Print the position of the largest value', 'Print the total of every column', 'Set the main diagonal to 0'], answer: 0, explain: "A total needs only the values. The other tasks need row or column numbers." },
        { type: 'h', en: 'Quick printing with Arrays.deepToString' },
        { type: 'p', en: "While you write a program you often want to <b>see</b> a whole table quickly, just to check it. In CS101 you used <code>Arrays.toString(a)</code> for a 1D array. For a table, use <code>Arrays.deepToString(m)</code>. &quot;Deep&quot; means that it also goes inside every row. Like all <code>Arrays</code> methods, it needs <code>import java.util.Arrays;</code> at the top." },
        { type: 'code', run: true, code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{1, 2, 3}, {4, 5, 6}};
                  System.out.println(Arrays.deepToString(m));
                  System.out.println(Arrays.toString(m[1]));
                  int[][] ragged = {{7}, {8, 9}, {}};
                  System.out.println(Arrays.deepToString(ragged));
              }
          }
        `, out: J`
          [[1, 2, 3], [4, 5, 6]]
          [4, 5, 6]
          [[7], [8, 9], []]
        ` },
        { type: 'lines', rows: [
          ['Arrays.deepToString(m)', 'The whole table on one line: each row in its own brackets, inside outer brackets.'],
          ['Arrays.toString(m[1])', 'One row is a 1D array, so the normal <code>toString</code> works for it.'],
          ['{{7}, {8, 9}, {}}', 'It also works for ragged arrays; <code>{}</code> is a row with no boxes, shown as <code>[]</code>.']
        ], ar: "Arrays.deepToString يطبع الجدول كله بسرعة للتحقق منه." },
        { type: 'note', kind: 'warn', en: "<code>Arrays.toString(m)</code> on a <b>table</b> prints something like <code>[[I@1b6d3586, [I@4554617c]</code>. The array of rows holds arrows, not numbers, and Java prints a code for each arrow (it changes from computer to computer). That is the memory picture again. Use <code>deepToString</code> for tables. It is made for checking your work, not for nice reports: for those, use your own loops.",
          ar: "Arrays.toString على جدول يطبع رموز عناوين؛ استعمل{{g:|ي}} deepToString." },
        { type: 'check', q: "What does <code>Arrays.deepToString(new int[2][2])</code> print?", options: ['<code>[[0, 0], [0, 0]]</code>', '<code>[0, 0, 0, 0]</code>', '<code>[[I@…, [I@…]</code>', '<code>[[], []]</code>'], answer: 0, explain: "Two rows of two boxes, all with the default value 0." },
        { type: 'steps', title: 'Worked example: the order of the papers', problem: "An exam hall has 3 rows of 4 desks, numbered 1 to 12 row by row (as in Lesson 2). The teacher collects the papers column by column, from the front. Print the desk numbers in the order the papers are collected.",
          steps: [
            { en: "Fill the desk numbers row by row with a counter.", code: J`
              int[][] desk = new int[3][4];
              int next = 1;
              for (int r = 0; r < desk.length; r++) {
                  for (int c = 0; c < desk[r].length; c++) {
                      desk[r][c] = next;
                      next++;
                  }
              }
            ` },
            { en: "Traverse column by column: the outer loop chooses the column.", code: J`
              for (int c = 0; c < desk[0].length; c++) {
                  for (int r = 0; r < desk.length; r++) {
                      System.out.print(desk[r][c] + " ");
                  }
              }
            ` },
            { en: "Check the table with <code>deepToString</code> first. Complete program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[][] desk = new int[3][4];
                    int next = 1;
                    for (int r = 0; r < desk.length; r++) {
                        for (int c = 0; c < desk[r].length; c++) {
                            desk[r][c] = next;
                            next++;
                        }
                    }
                    System.out.println(Arrays.deepToString(desk));
                    System.out.print("Collected:");
                    for (int c = 0; c < desk[0].length; c++) {
                        for (int r = 0; r < desk.length; r++) {
                            System.out.print(" " + desk[r][c]);
                        }
                    }
                    System.out.println();
                }
            }
          `, out: J`
            [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
            Collected: 1 5 9 2 6 10 3 7 11 4 8 12
          `, ar: "نملأ الأرقام صفًّا صفًّا ثم نجمع الأوراق عمودًا عمودًا." },
        { type: 'steps', title: 'Worked example: cleaning sensor readings', problem: "A broken sensor wrote 99 in the table of temperatures. Any reading above 60 is impossible, so replace it with 0 (meaning &quot;missing&quot;). Use <code>for (int[] day : temps)</code> and print the table before and after with <code>deepToString</code>.",
          steps: [
            { en: "One row per day, three readings per day.", code: "int[][] temps = {{41, 43, 40}, {44, 99, 42}};" },
            { en: "The outer for-each gives each real row. To change a box we need its index, so the inner loop counts.", code: J`
              for (int[] day : temps) {
                  for (int j = 0; j < day.length; j++) {
                      if (day[j] > 60) {
                          day[j] = 0;
                      }
                  }
              }
            ` },
            { en: "<code>day</code> refers to the real row, so the table changes. Complete program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[][] temps = {{41, 43, 40}, {44, 99, 42}};
                    System.out.println("Before: " + Arrays.deepToString(temps));
                    for (int[] day : temps) {
                        for (int j = 0; j < day.length; j++) {
                            if (day[j] > 60) {
                                day[j] = 0;
                            }
                        }
                    }
                    System.out.println("After:  " + Arrays.deepToString(temps));
                }
            }
          `, out: J`
            Before: [[41, 43, 40], [44, 99, 42]]
            After:  [[41, 43, 40], [44, 0, 42]]
          `, ar: "day يشير إلى الصف الحقيقي، فتعديل day[j] يعدّل الجدول." }
      ],
      mistakes: [
        { title: 'Column by column on a ragged array', en: "A short row has no box in the later columns.", code: J`
          int[][] r = {{1, 2, 3}, {4}};
          for (int c = 0; c < r[0].length; c++)
              for (int i = 0; i < r.length; i++)
                  System.out.print(r[i][c]);   // crashes at r[1][1]
        ` },
        { title: 'Swapping the indexes when the column loop is outside', en: "The loop order changes, the brackets do not: it is still <code>m[r][c]</code>.", code: J`
          for (int c = 0; c < m[0].length; c++)
              for (int r = 0; r < m.length; r++)
                  System.out.print(m[c][r]);   // WRONG
        ` },
        { title: 'Arrays.toString on a table', en: "It prints codes for the rows, not the numbers. Use <code>Arrays.deepToString</code>.", code: J`
          System.out.println(Arrays.toString(m));       // [[I@...
          System.out.println(Arrays.deepToString(m));   // [[1, 2], [3, 4]]
        ` },
        { title: 'Forgetting the import', en: "Without <code>import java.util.Arrays;</code> the compiler says <i>cannot find symbol</i>.", code: J`
          System.out.println(Arrays.deepToString(m));   // needs import java.util.Arrays;
        ` }
      ],
      remember: [
        "Row by row: outer loop over rows. Column by column: outer loop over columns.",
        "Whatever the order, a box is always <code>m[r][c]</code>.",
        "Column by column needs a rectangle; ragged arrays go row by row.",
        "In <code>for (int[] row : m)</code>, <code>row</code> refers to the real row, so <code>row[j] = …</code> changes the table.",
        "Use for-each when you need only values; use counting loops when you need positions or another order.",
        "<code>Arrays.deepToString(m)</code> prints a whole table quickly (needs <code>import java.util.Arrays;</code>)."
      ],
      rememberAr: "الحلقة الخارجية تحدد ترتيب المرور، والخانة دائمًا m[r][c]. في for (int[] row : m) يشير row إلى الصف الحقيقي. Arrays.deepToString يطبع الجدول كله للتحقق.",
      practice: [
        { t: 'mcq', q: "In which order do nested for-each loops visit a table?", options: ['Row by row', 'Column by column', 'Backwards', 'In a random order'], answer: 0, explain: "The outer for-each takes the rows one by one, and the inner one goes along each row." },
        { t: 'mcq', q: "What does <code>Arrays.deepToString(new int[][] {{1, 2}, {3}})</code> print?", options: ['<code>[1, 2, 3]</code>', '<code>[[1, 2], [3]]</code>', '<code>{{1, 2}, {3}}</code>', '<code>[[1, 2], [3, 0]]</code>'], answer: 1, explain: "Each row in its own square brackets; a ragged row stays short." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{1, 2, 3}, {4, 5, 6}};
                  for (int c = 0; c < m[0].length; c++) {
                      for (int r = 0; r < m.length; r++) {
                          System.out.print(m[r][c] + " ");
                      }
                  }
                  System.out.println();
                  for (int r = m.length - 1; r >= 0; r--) {
                      System.out.print(m[r][0] + " ");
                  }
                  System.out.println();
              }
          }
        `, answer: J`
          1 4 2 5 3 6
          4 1
        `, explain: "First column by column: 1 4, then 2 5, then 3 6. Then column 0 from the last row up: 4, then 1." },
        { t: 'output', q: "What is the output?", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[][] m = {{3, 8}, {5, 1}};
                  for (int[] row : m) {
                      row[0] = row[0] * 10;
                  }
                  for (int[] row : m) {
                      for (int v : row) {
                          v = 0;
                      }
                  }
                  System.out.println(Arrays.deepToString(m));
              }
          }
        `, answer: '[[30, 8], [50, 1]]', explain: "<code>row</code> refers to the real rows, so <code>row[0] = row[0] * 10</code> changes the table. But <code>v</code> is only a copy of a number, so <code>v = 0</code> changes nothing." },
        { t: 'fill', q: "Complete the loops that print the table <code>m</code> column by column.", code: J`
          for (int c = 0; c < m[0].___; c++) {
              for (int r = 0; r < m.___; r++) {
                  System.out.print(m[___][c] + " ");
              }
          }
        `, answers: ['length', 'length', 'r'], explain: "The outer loop runs over the columns (<code>m[0].length</code>), the inner one over the rows (<code>m.length</code>), and the box is still <code>m[r][c]</code>." },
        { t: 'order', q: "Arrange the lines that count the values above 50 in <code>m</code> with for-each loops.", lines: [
          'int count = 0;',
          'for (int[] row : m) {',
          '    for (int v : row) {',
          '        if (v > 50) count++;',
          '    }',
          '}'
        ], explain: "The counter comes first; the outer for-each gives rows, the inner one gives values." },
        { t: 'bug', q: "The program should print the whole table <code>[[90, 85], [75, 95]]</code>, but it prints strange codes. Tap the line with the bug.",
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[][] marks = {{90, 85}, {70, 95}};
                    marks[1][0] = 75;
                    System.out.println(Arrays.toString(marks));
                }
            }
          `, bug: 7,
          fix: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[][] marks = {{90, 85}, {70, 95}};
                    marks[1][0] = 75;
                    System.out.println(Arrays.deepToString(marks));
                }
            }
          `,
          hint: "Which Arrays method goes inside every row?",
          explain: "<code>Arrays.toString</code> prints the boxes of the array of rows, and those boxes are arrows to rows, so you see codes like <code>[I@1b6d3586</code>. <code>Arrays.deepToString</code> goes inside each row and prints <code>[[90, 85], [75, 95]]</code>.",
          explainAr: "toString يطبع مراجع الصفوف؛ deepToString يطبع الأعداد داخلها." },
        { t: 'code', q: "Read <code>rows</code> and <code>cols</code> and a table of integers. Print all the values <b>column by column</b> on one line, separated by single spaces. No prompts.",
          qAr: "اطبع{{g:|ي}} القيم عمودًا عمودًا في سطر واحد.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    // read the table row by row, then print it column by column
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] m = new int[rows][cols];
                    for (int r = 0; r < rows; r++) {
                        for (int c = 0; c < cols; c++) {
                            m[r][c] = input.nextInt();
                        }
                    }
                    boolean first = true;
                    for (int c = 0; c < cols; c++) {
                        for (int r = 0; r < rows; r++) {
                            if (!first) System.out.print(" ");
                            System.out.print(m[r][c]);
                            first = false;
                        }
                    }
                    System.out.println();
                }
            }
          `,
          tests: [ { stdin: '2 3\n1 2 3\n4 5 6', expected: '1 4 2 5 3 6' }, { stdin: '3 2\n1 2\n3 4\n5 6', expected: '1 3 5 2 4 6' }, { stdin: '1 3\n7 8 9', expected: '7 8 9' } ],
          hint: "The input comes row by row, so read it with the row loop outside. For printing, put the column loop outside.",
          explain: "Reading and printing use different orders: the input is row by row, the output is column by column. A <code>first</code> flag avoids a space before the first value." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 12
    {
      title: 'Project: who won the tic-tac-toe game?',
      titleAr: 'مشروع: من فاز في لعبة XO؟',
      minutes: 30,
      body: [
        { type: 'h', en: 'A real application: the game board' },
        { type: 'p', en: "Board games are a perfect use of 2D arrays: chess, Sudoku, crosswords and tic-tac-toe all live on a grid. In this lesson you build the most important part of a tic-tac-toe game: the code that decides whether a player has <b>won</b>. You will use almost everything from this unit: a <code>char[][]</code> board, rows, columns, both diagonals, and methods that receive the board as a parameter.",
          ar: "ألعاب اللوحة تطبيق مثالي للمصفوفات ثنائية الأبعاد." },
        { type: 'analogy', title: 'The referee', en: "After every move, a referee looks at the board and asks three questions. Is any <b>row</b> full of the same letter? Is any <b>column</b>? Is any <b>diagonal</b>? If one answer is yes, that player wins. If nobody won and there are no free boxes left, the game is a draw. Our methods will be the referee's questions.",
          ar: "الحكم يسأل: هل امتلأ صف أو عمود أو قطر بالحرف نفسه؟" },
        { type: 'h', en: 'Plan with small methods' },
        { type: 'p', en: "A big problem becomes easy when you split it into small questions. We write one method for each question. Each method receives the board <code>b</code> and the player's letter <code>p</code> (<code>'X'</code> or <code>'O'</code>) and returns a <code>boolean</code>." },
        { type: 'analogy', title: 'A car inspection', en: "At a vehicle inspection centre a car goes through separate checks: brakes, lights, tyres. Each check answers only yes or no, and each one can be tested alone. The final result combines them. Our small methods are the separate checks, and <code>hasWon</code> is the final result.",
          ar: "مثل فحص السيارة: فحوص صغيرة منفصلة، ثم نتيجة نهائية تجمعها." },
        { type: 'list', items: [
          "<code>rowWin(b, p)</code>: does <code>p</code> fill a whole row?",
          "<code>colWin(b, p)</code>: does <code>p</code> fill a whole column?",
          "<code>diagWin(b, p)</code>: does <code>p</code> fill one of the two diagonals?",
          "<code>hasWon(b, p)</code>: <code>rowWin || colWin || diagWin</code>.",
          "<code>isFull(b)</code>: is there no <code>'-'</code> left? (Then, with no winner, it is a draw.)"
        ], ar: "نقسم المشكلة إلى دوال صغيرة: صفوف، أعمدة، أقطار، ثم دالة تجمعها." },
        { type: 'table', head: ['Winning line', 'Its three boxes'], rows: [
          ['Row <code>r</code> (3 lines)', '<code>b[r][0]</code>, <code>b[r][1]</code>, <code>b[r][2]</code>'],
          ['Column <code>c</code> (3 lines)', '<code>b[0][c]</code>, <code>b[1][c]</code>, <code>b[2][c]</code>'],
          ['Main diagonal', '<code>b[0][0]</code>, <code>b[1][1]</code>, <code>b[2][2]</code>'],
          ['Other diagonal', '<code>b[0][2]</code>, <code>b[1][1]</code>, <code>b[2][0]</code>']
        ] },
        { type: 'check', q: "How many different winning lines does a 3 × 3 board have?", options: ['3', '6', '8', '9'], answer: 2, explain: "3 rows + 3 columns + 2 diagonals = 8." },
        { type: 'h', en: 'Checking the rows' },
        { type: 'p', en: "A row is a win for <code>p</code> when <b>all three</b> of its boxes hold <code>p</code>, so we join the three tests with <code>&amp;&amp;</code>. A loop goes over the rows; the column numbers 0, 1, 2 are written directly. As soon as one full row is found we can <code>return true</code>. If the loop ends, no row was full." },
        { type: 'code', code: J`
          public static boolean rowWin(char[][] b, char p) {
              for (int r = 0; r < 3; r++) {
                  if (b[r][0] == p && b[r][1] == p && b[r][2] == p) {
                      return true;
                  }
              }
              return false;
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['b[r][0] == p && b[r][1] == p && b[r][2] == p', 'All three boxes of row <code>r</code> hold the letter <code>p</code>. <code>&amp;&amp;</code> means <b>and</b>: every part must be true.'],
          ['return true;', 'One full row is enough. The method stops here.'],
          ['return false;', 'After the loop: we checked all three rows and none was full.']
        ], ar: "نستعمل && لأن الخانات الثلاث يجب أن تحمل الحرف نفسه." },
        { type: 'check', q: "What goes wrong if the test uses <code>||</code> instead of <code>&amp;&amp;</code>?", options: ['Nothing', 'One single X in a row would count as a win', 'The method would not compile', 'It would only check the first row'], answer: 1, explain: "<code>||</code> is true when <b>any</b> part is true, so one letter would be enough." },
        { type: 'h', en: 'Checking the columns' },
        { type: 'p', en: "Columns use the same idea with the roles swapped: the column number <code>c</code> is fixed and the row number changes, <code>b[0][c]</code>, <code>b[1][c]</code>, <code>b[2][c]</code>. This is the same &quot;walk down a column&quot; you learned in Lesson 4." },
        { type: 'code', code: J`
          public static boolean colWin(char[][] b, char p) {
              for (int c = 0; c < 3; c++) {
                  if (b[0][c] == p && b[1][c] == p && b[2][c] == p) {
                      return true;
                  }
              }
              return false;
          }
        ` },
        { type: 'h', en: 'Checking the diagonals' },
        { type: 'p', en: "There are only two diagonals, so no loop is needed. On the main diagonal the row equals the column. On the other diagonal the column is <code>2 - row</code> (in Lesson 4 we wrote it as <code>n - 1 - i</code>). The centre box <code>b[1][1]</code> is on both." },
        { type: 'code', code: J`
          public static boolean diagWin(char[][] b, char p) {
              boolean main = b[0][0] == p && b[1][1] == p && b[2][2] == p;
              boolean other = b[0][2] == p && b[1][1] == p && b[2][0] == p;
              return main || other;
          }
        ` },
        { type: 'lines', rows: [
          ['boolean main = b[0][0] == p && ...;', 'A <code>boolean</code> variable can store the result of a test.'],
          ['return main || other;', 'A win on <b>either</b> diagonal is a win, so here we use <code>||</code>.']
        ], ar: "يكفي أن يمتلئ أحد القطرين، لذلك نجمعهما بـ ||." },
        { type: 'check', q: "Which three boxes form the other diagonal?", options: ['<code>b[0][0]</code>, <code>b[1][1]</code>, <code>b[2][2]</code>', '<code>b[0][2]</code>, <code>b[1][1]</code>, <code>b[2][0]</code>', '<code>b[2][0]</code>, <code>b[2][1]</code>, <code>b[2][2]</code>', '<code>b[0][2]</code>, <code>b[1][2]</code>, <code>b[2][2]</code>'], answer: 1, explain: "From the top-right corner to the bottom-left corner: the column goes 2, 1, 0 while the row goes 0, 1, 2." },
        { type: 'memory', title: 'All the referee methods look at the same board', en: "<code>main</code> passes <code>board</code> to <code>hasWon</code>, which passes it on to <code>rowWin</code>. Only the arrow is copied, so every method reads the one real board. Here X has filled row 1.", frames: [
          { label: 'In <code>main</code>: the board after some moves', vars: [{ name: 'board (main)', type: 'char[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'char[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
            { id: 'B', cls: 'char[] row 0', fields: [{ name: '[0]', value: "'X'" }, { name: '[1]', value: "'O'" }, { name: '[2]', value: "'-'" }] },
            { id: 'C', cls: 'char[] row 1', fields: [{ name: '[0]', value: "'X'" }, { name: '[1]', value: "'X'" }, { name: '[2]', value: "'X'" }] },
            { id: 'D', cls: 'char[] row 2', fields: [{ name: '[0]', value: "'O'" }, { name: '[1]', value: "'-'" }, { name: '[2]', value: "'O'" }] }
          ] },
          { label: "Inside <code>rowWin(b, 'X')</code> with <code>r = 1</code>: all three boxes of row C are 'X'", vars: [{ name: 'board (main)', type: 'char[][]', ref: 'A' }, { name: 'b (rowWin)', type: 'char[][]', ref: 'A' }, { name: 'p', type: 'char', value: "'X'" }, { name: 'r', type: 'int', value: '1' }], objects: [
            { id: 'A', cls: 'char[][] (3 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', ref: 'D' }] },
            { id: 'B', cls: 'char[] row 0', fields: [{ name: '[0]', value: "'X'" }, { name: '[1]', value: "'O'" }, { name: '[2]', value: "'-'" }] },
            { id: 'C', cls: 'char[] row 1', fields: [{ name: '[0]', value: "'X'" }, { name: '[1]', value: "'X'" }, { name: '[2]', value: "'X'" }] },
            { id: 'D', cls: 'char[] row 2', fields: [{ name: '[0]', value: "'O'" }, { name: '[1]', value: "'-'" }, { name: '[2]', value: "'O'" }] }
          ] }
        ], ar: "كل الدوال تقرأ اللوحة نفسها لأن المرجع وحده يُنسخ." },
        { type: 'note', kind: 'tip', en: "These methods only <b>read</b> the board, so sharing it is safe and fast: no copy of the table is made. In the next lesson you will see how to make a real copy when you need one, for example to try a move without changing the real board.",
          ar: "الدوال تقرأ اللوحة فقط، فلا حاجة إلى نسخها." },
        { type: 'steps', title: 'Worked example: the referee program', problem: "Combine the methods. For a given board, print <code>X wins</code>, <code>O wins</code>, <code>Draw</code> (full board, no winner) or <code>Game continues</code>.",
          steps: [
            { en: "<code>hasWon</code> asks the three questions. If any answer is true, the player has won.", code: J`
              public static boolean hasWon(char[][] b, char p) {
                  return rowWin(b, p) || colWin(b, p) || diagWin(b, p);
              }
            ` },
            { en: "<code>isFull</code> looks for a free box with nested for-each loops (only values are needed).", code: J`
              public static boolean isFull(char[][] b) {
                  for (char[] row : b) {
                      for (char ch : row) {
                          if (ch == '-') return false;
                      }
                  }
                  return true;
              }
            ` },
            { en: "<code>main</code> decides in the right order: a win first, then a draw.", code: J`
              if (hasWon(board, 'X')) {
                  System.out.println("X wins");
              } else if (hasWon(board, 'O')) {
                  System.out.println("O wins");
              } else if (isFull(board)) {
                  System.out.println("Draw");
              } else {
                  System.out.println("Game continues");
              }
            ` },
            { en: "In this board X has filled column 2. Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    char[][] board = {
                        {'X', 'O', 'X'},
                        {'O', 'O', 'X'},
                        {'-', '-', 'X'}
                    };
                    if (hasWon(board, 'X')) {
                        System.out.println("X wins");
                    } else if (hasWon(board, 'O')) {
                        System.out.println("O wins");
                    } else if (isFull(board)) {
                        System.out.println("Draw");
                    } else {
                        System.out.println("Game continues");
                    }
                }

                public static boolean rowWin(char[][] b, char p) {
                    for (int r = 0; r < 3; r++) {
                        if (b[r][0] == p && b[r][1] == p && b[r][2] == p) {
                            return true;
                        }
                    }
                    return false;
                }

                public static boolean colWin(char[][] b, char p) {
                    for (int c = 0; c < 3; c++) {
                        if (b[0][c] == p && b[1][c] == p && b[2][c] == p) {
                            return true;
                        }
                    }
                    return false;
                }

                public static boolean diagWin(char[][] b, char p) {
                    boolean main = b[0][0] == p && b[1][1] == p && b[2][2] == p;
                    boolean other = b[0][2] == p && b[1][1] == p && b[2][0] == p;
                    return main || other;
                }

                public static boolean hasWon(char[][] b, char p) {
                    return rowWin(b, p) || colWin(b, p) || diagWin(b, p);
                }

                public static boolean isFull(char[][] b) {
                    for (char[] row : b) {
                        for (char ch : row) {
                            if (ch == '-') return false;
                        }
                    }
                    return true;
                }
            }
          `, out: J`
            X wins
          `, ar: "نفحص الفوز أولًا، ثم امتلاء اللوحة (تعادل)، وإلا تستمر اللعبة." },
        { type: 'h', en: 'A bigger board' },
        { type: 'p', en: "The methods above work only for 3 × 3, because the indexes 0, 1, 2 are written by hand. Some games use bigger boards, for example 4 × 4 with four in a row. Then we use loops and the &quot;every&quot; pattern from Lesson 10: a flag starts <code>true</code> and becomes <code>false</code> when one box is not <code>p</code>." },
        { type: 'steps', title: 'Worked example: rows and diagonals of any size', problem: "Write <code>rowWin</code> and <code>diagWin</code> that work for an n × n board. Test them on a 4 × 4 board where X filled the main diagonal.",
          steps: [
            { en: "For each row, a flag <code>all</code> starts true. One box that is not <code>p</code> makes it false.", code: J`
              for (int r = 0; r < b.length; r++) {
                  boolean all = true;
                  for (int c = 0; c < b[r].length; c++) {
                      if (b[r][c] != p) all = false;
                  }
                  if (all) return true;
              }
              return false;
            ` },
            { en: "The diagonals need one loop each: <code>b[i][i]</code> and <code>b[i][n - 1 - i]</code>.", code: J`
              int n = b.length;
              boolean main = true;
              boolean other = true;
              for (int i = 0; i < n; i++) {
                  if (b[i][i] != p) main = false;
                  if (b[i][n - 1 - i] != p) other = false;
              }
              return main || other;
            ` },
            { en: "Complete program:" }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    char[][] b = {
                        {'X', 'O', 'O', '-'},
                        {'O', 'X', '-', '-'},
                        {'-', 'O', 'X', '-'},
                        {'O', '-', '-', 'X'}
                    };
                    System.out.println("X full row: " + rowWin(b, 'X'));
                    System.out.println("X full diagonal: " + diagWin(b, 'X'));
                    System.out.println("O full row: " + rowWin(b, 'O'));
                }

                public static boolean rowWin(char[][] b, char p) {
                    for (int r = 0; r < b.length; r++) {
                        boolean all = true;
                        for (int c = 0; c < b[r].length; c++) {
                            if (b[r][c] != p) all = false;
                        }
                        if (all) return true;
                    }
                    return false;
                }

                public static boolean diagWin(char[][] b, char p) {
                    int n = b.length;
                    boolean main = true;
                    boolean other = true;
                    for (int i = 0; i < n; i++) {
                        if (b[i][i] != p) main = false;
                        if (b[i][n - 1 - i] != p) other = false;
                    }
                    return main || other;
                }
            }
          `, out: J`
            X full row: false
            X full diagonal: true
            O full row: false
          `, ar: "للوحة بأي حجم نستعمل الحلقات ونمط \"الكل\": العلم يبدأ true." }
      ],
      mistakes: [
        { title: 'Using || inside one line', en: "A winning line needs all three boxes, so use <code>&amp;&amp;</code>. (Between the three questions, <code>||</code> is right.)", code: J`
          if (b[r][0] == p || b[r][1] == p || b[r][2] == p)   // WRONG
        ` },
        { title: 'A wrong box on the other diagonal', en: "The other diagonal ends at the bottom-<b>left</b>: <code>b[2][0]</code>.", code: J`
          b[0][2] == p && b[1][1] == p && b[2][2] == p   // WRONG: b[2][2]
        ` },
        { title: 'Returning false too early', en: "An <code>else return false;</code> inside the loop stops after the first row. Return false only after the loop.", code: J`
          for (int r = 0; r < 3; r++) {
              if (...) return true;
              else return false;   // WRONG: rows 1 and 2 are never checked
          }
        ` },
        { title: 'Comparing with a String', en: "The board holds <code>char</code> values: compare with <code>'X'</code>, not <code>&quot;X&quot;</code>.", code: J`
          if (b[0][0] == "X")   // WRONG: does not compile
        ` }
      ],
      remember: [
        "Split the referee into small methods: <code>rowWin</code>, <code>colWin</code>, <code>diagWin</code>, <code>hasWon</code>, <code>isFull</code>.",
        "Inside one line use <code>&amp;&amp;</code> (all boxes); between the questions use <code>||</code> (any line).",
        "Rows: <code>b[r][0..2]</code>; columns: <code>b[0..2][c]</code>; diagonals: <code>b[i][i]</code> and <code>b[i][2 - i]</code>.",
        "Return <code>true</code> as soon as a line is full; return <code>false</code> only after checking everything.",
        "Decide in order: win, then draw (full board), then &quot;game continues&quot;.",
        "For any size, use loops with an &quot;every&quot; flag that starts <code>true</code>."
      ],
      rememberAr: "نقسم فحص الفوز إلى دوال صغيرة. داخل الخط الواحد نستعمل && وبين الأسئلة ||. نعيد true عند أول خط ممتلئ، وfalse بعد فحص كل شيء.",
      practice: [
        { t: 'mcq', q: "Which three boxes form the other diagonal of a 3 × 3 board?", options: ['<code>b[0][0], b[1][1], b[2][2]</code>', '<code>b[0][2], b[1][1], b[2][0]</code>', '<code>b[2][0], b[2][1], b[2][2]</code>', '<code>b[0][1], b[1][1], b[2][1]</code>'], answer: 1, explain: "Top-right to bottom-left: the column is 2 - row." },
        { t: 'mcq', q: "O holds <code>b[0][0]</code>, <code>b[1][1]</code> and <code>b[2][2]</code>. Which method returns true for O?", options: ['<code>rowWin</code>', '<code>colWin</code>', '<code>diagWin</code>', '<code>isFull</code>'], answer: 2, explain: "Those three boxes are the main diagonal." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  char[][] b = {
                      {'O', 'X', 'X'},
                      {'-', 'O', 'X'},
                      {'-', '-', 'X'}
                  };
                  System.out.println(colWin(b, 'X') + " " + colWin(b, 'O'));
                  System.out.println(b[0][0] == b[1][1]);
              }

              public static boolean colWin(char[][] b, char p) {
                  for (int c = 0; c < 3; c++) {
                      if (b[0][c] == p && b[1][c] == p && b[2][c] == p) {
                          return true;
                      }
                  }
                  return false;
              }
          }
        `, answer: J`
          true false
          true
        `, explain: "Column 2 is X, X, X, so X has a full column; O has none. <code>b[0][0]</code> and <code>b[1][1]</code> are both <code>'O'</code>, so the comparison is true." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  char[][] b = {
                      {'X', 'O', 'X'},
                      {'X', 'O', 'O'},
                      {'O', 'X', '-'}
                  };
                  int free = 0;
                  for (char[] row : b) {
                      for (char ch : row) {
                          if (ch == '-') free++;
                      }
                  }
                  System.out.println(free + " " + (free == 0));
              }
          }
        `, answer: '1 false', explain: "Only the last box is free, so the board is not full yet." },
        { t: 'fill', q: "Complete the diagonal tests of a 3 × 3 board.", code: J`
          boolean main = b[0][0] == p && b[1][1] == p && b[2][___] == p;
          boolean other = b[0][___] == p && b[1][1] == p && b[___][0] == p;
        `, answers: ['2', '2', '2'], explain: "The main diagonal ends at <code>b[2][2]</code>; the other diagonal goes from <code>b[0][2]</code> to <code>b[2][0]</code>." },
        { t: 'order', q: "Arrange the lines of the method that checks the rows of a 3 × 3 board.", lines: [
          'public static boolean rowWin(char[][] b, char p) {',
          '    for (int r = 0; r < 3; r++) {',
          '        if (b[r][0] == p && b[r][1] == p && b[r][2] == p) {',
          '            return true;',
          '        }',
          '    }',
          '    return false;',
          '}'
        ], explain: "Return true inside the loop as soon as a row is full; return false only after the loop." },
        { t: 'bug', q: "X has only one letter in row 0, so <code>rowWin(b, 'X')</code> should be <code>false</code>. It prints <code>true</code>. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    char[][] b = {{'X', 'O', '-'}, {'-', 'O', '-'}, {'-', '-', '-'}};
                    System.out.println(rowWin(b, 'X'));
                }

                public static boolean rowWin(char[][] b, char p) {
                    for (int r = 0; r < 3; r++) {
                        if (b[r][0] == p || b[r][1] == p || b[r][2] == p) {
                            return true;
                        }
                    }
                    return false;
                }
            }
          `, bug: 9,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    char[][] b = {{'X', 'O', '-'}, {'-', 'O', '-'}, {'-', '-', '-'}};
                    System.out.println(rowWin(b, 'X'));
                }

                public static boolean rowWin(char[][] b, char p) {
                    for (int r = 0; r < 3; r++) {
                        if (b[r][0] == p && b[r][1] == p && b[r][2] == p) {
                            return true;
                        }
                    }
                    return false;
                }
            }
          `,
          hint: "Must all three boxes hold p, or is one enough?",
          explain: "With <code>||</code> the test is true as soon as <b>one</b> box of the row holds X, so the single X in <code>b[0][0]</code> counts as a win. A row wins only when all three boxes hold the letter, so the parts must be joined with <code>&amp;&amp;</code>. The fixed program prints false.",
          explainAr: "|| يكفيه حرف واحد؛ الفوز يحتاج الخانات الثلاث، فنستعمل &&." },
        { t: 'code', q: "Read a tic-tac-toe board as three words of 3 characters each (<code>X</code>, <code>O</code> or <code>-</code>). Print <code>X wins</code>, <code>O wins</code>, <code>Draw</code> (full board, no winner) or <code>Game continues</code>. Use methods that receive the board. No prompts.",
          qAr: "اكتب{{g:|ي}} دوال تفحص الصفوف والأعمدة والقطرين ثم قرر{{g:|ي}} النتيجة.",
          starter: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    char[][] board = new char[3][3];
                    for (int r = 0; r < 3; r++) {
                        String word = input.next();
                        for (int c = 0; c < 3; c++) {
                            board[r][c] = word.charAt(c);
                        }
                    }
                    // decide: X wins, O wins, Draw or Game continues
                }

                public static boolean hasWon(char[][] b, char p) {
                    // check the rows, the columns and the two diagonals
                    return false;
                }
            }
          `,
          solution: J`
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    char[][] board = new char[3][3];
                    for (int r = 0; r < 3; r++) {
                        String word = input.next();
                        for (int c = 0; c < 3; c++) {
                            board[r][c] = word.charAt(c);
                        }
                    }
                    if (hasWon(board, 'X')) {
                        System.out.println("X wins");
                    } else if (hasWon(board, 'O')) {
                        System.out.println("O wins");
                    } else if (isFull(board)) {
                        System.out.println("Draw");
                    } else {
                        System.out.println("Game continues");
                    }
                }

                public static boolean hasWon(char[][] b, char p) {
                    for (int i = 0; i < 3; i++) {
                        if (b[i][0] == p && b[i][1] == p && b[i][2] == p) return true;
                        if (b[0][i] == p && b[1][i] == p && b[2][i] == p) return true;
                    }
                    if (b[0][0] == p && b[1][1] == p && b[2][2] == p) return true;
                    if (b[0][2] == p && b[1][1] == p && b[2][0] == p) return true;
                    return false;
                }

                public static boolean isFull(char[][] b) {
                    for (char[] row : b) {
                        for (char ch : row) {
                            if (ch == '-') return false;
                        }
                    }
                    return true;
                }
            }
          `,
          tests: [ { stdin: 'XOX\nOOX\n--X', expected: 'X wins' }, { stdin: 'OXX\nXOX\nXOO', expected: 'O wins' }, { stdin: 'XOX\nXOO\nOXX', expected: 'Draw' } ],
          hint: "In one loop over i you can check row i and column i. Then check the two diagonals. A board is full when no box is '-'.",
          explain: "Each winning line is three boxes joined with <code>&amp;&amp;</code>. The decision order matters: a win is checked before a draw." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 13
    {
      title: 'Copying tables: shallow and deep copies',
      titleAr: 'نسخ الجداول: النسخ السطحي والنسخ العميق',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why copy a table?' },
        { type: 'p', en: "Before you change data, you often want to keep the original. A teacher adds a bonus to the marks but must keep the original marks for the records. A game tries a move on a copy of the board without spoiling the real board. An &quot;undo&quot; button needs the old version. With tables, copying hides two traps. The memory pictures in this lesson show both of them clearly.",
          ar: "ننسخ الجدول لنحتفظ بالأصل قبل التعديل، لكن في النسخ فخّان." },
        { type: 'h', en: 'Trap 1: b = a is not a copy' },
        { type: 'p', en: "In CS101 you learned that <code>b = a</code> for arrays copies only the <b>arrow</b>. The same is true for tables: <code>int[][] backup = marks;</code> gives a second name to the <b>same</b> table. Two variables that refer to the same array are called <b>aliases</b>. Change a box through one name and you see the change through the other." },
        { type: 'analogy', title: 'A nickname', en: "A student called Abdullah is called Abood by his friends. Two names, one person. If Abood gets a haircut, Abdullah has a new haircut too. <code>marks</code> and <code>backup</code> are two names for one table.",
          ar: "اسمان لشخص واحد: أي تغيير يظهر بالاسمين." },
        { type: 'memory', title: 'Two names, one table', code: J`
            int[][] marks = {{70, 80}, {90, 60}};
            int[][] backup = marks;
            marks[0][0] = 75;
          `, frames: [
          { label: 'After <code>int[][] marks = {{70, 80}, {90, 60}};</code>', vars: [{ name: 'marks', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '70' }, { name: '[1]', value: '80' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '90' }, { name: '[1]', value: '60' }] }
          ] },
          { label: 'After <code>int[][] backup = marks;</code>: no new table, only a new arrow', vars: [{ name: 'marks', type: 'int[][]', ref: 'A' }, { name: 'backup', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '70' }, { name: '[1]', value: '80' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '90' }, { name: '[1]', value: '60' }] }
          ] },
          { label: 'After <code>marks[0][0] = 75;</code>: <code>backup[0][0]</code> is 75 too', vars: [{ name: 'marks', type: 'int[][]', ref: 'A' }, { name: 'backup', type: 'int[][]', ref: 'A' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '75' }, { name: '[1]', value: '80' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '90' }, { name: '[1]', value: '60' }] }
          ] }
        ], ar: "backup = marks لا ينشئ جدولًا جديدًا؛ المتغيران يشيران إلى الجدول نفسه." },
        { type: 'check', q: "After the three lines above, what is <code>backup[0][0]</code>?", options: ['70', '75', '0', 'An error'], answer: 1, explain: "<code>backup</code> and <code>marks</code> are the same table, so the change through <code>marks</code> is seen through <code>backup</code>." },
        { type: 'h', en: 'Trap 2: the shallow copy shares the rows' },
        { type: 'p', en: "Second try: create a <b>new</b> array of rows, then copy each row into it with <code>copy[i] = marks[i]</code>. This is called a <b>shallow copy</b>. There is now a new outer array, but its boxes hold the <b>same arrows</b> as before, so both tables share the same row objects. Changing a box still changes it for both. Be careful: <code>marks.clone()</code> and <code>Arrays.copyOf(marks, marks.length)</code> on a table also make only shallow copies.",
          ar: "النسخ السطحي ينشئ مصفوفة صفوف جديدة، لكن الصفوف نفسها مشتركة." },
        { type: 'code', code: J`
          int[][] marks = {{70, 80}, {90, 60}};
          int[][] copy = new int[marks.length][];
          for (int i = 0; i < marks.length; i++) {
              copy[i] = marks[i];          // copies the arrow only
          }
          copy[0][0] = 75;                 // marks[0][0] is 75 too!
        ` },
        { type: 'lines', rows: [
          ['int[][] copy = new int[marks.length][];', 'A new array of rows, with <code>null</code> boxes for now.'],
          ['copy[i] = marks[i];', 'Box <code>i</code> gets the <b>arrow</b> to row <code>i</code> of <code>marks</code>. No new row is made.'],
          ['copy[0][0] = 75;', 'Follow <code>copy[0]</code>: it is the same row object as <code>marks[0]</code>.']
        ] },
        { type: 'memory', title: 'A shallow copy: new outer array, shared rows', frames: [
          { label: 'After the loop: D is new, but its arrows lead to the old rows B and C', vars: [{ name: 'marks', type: 'int[][]', ref: 'A' }, { name: 'copy', type: 'int[][]', ref: 'D' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'D', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '70' }, { name: '[1]', value: '80' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '90' }, { name: '[1]', value: '60' }] }
          ] },
          { label: 'After <code>copy[0][0] = 75;</code>: row B changed, so both tables show 75', vars: [{ name: 'marks', type: 'int[][]', ref: 'A' }, { name: 'copy', type: 'int[][]', ref: 'D' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'D', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '75' }, { name: '[1]', value: '80' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '90' }, { name: '[1]', value: '60' }] }
          ] }
        ], ar: "في النسخ السطحي يشترك الجدولان في الصفوف، فتعديل خانة يظهر في الاثنين." },
        { type: 'analogy', title: 'Two lists of shortcuts', en: "On a computer you make a new folder of shortcuts to your files. The folder is new, but every shortcut opens the <b>same</b> file. If you edit a file through the new folder, the old folder shows the edit too. A shallow copy is a new folder of shortcuts to the same rows.",
          ar: "مثل مجلد اختصارات جديد يفتح الملفات نفسها." },
        { type: 'check', q: "After a shallow copy, the program runs <code>copy[1][1] = 0;</code>. What is <code>marks[1][1]</code>?", options: ['60', '0', 'null', 'It depends on the computer'], answer: 1, explain: "<code>copy[1]</code> and <code>marks[1]</code> are the same row object, so the change is shared." },
        { type: 'h', en: 'The deep copy: new rows, copied boxes' },
        { type: 'p', en: "A <b>deep copy</b> makes a new array of rows <b>and</b> new rows, then copies every number into them. Afterwards the two tables share nothing, and you can change one without touching the other. For each row: create a new row of the same length (using <code>marks[i].length</code>, so it also works for ragged arrays), then copy the boxes one by one.",
          ar: "النسخ العميق ينشئ صفوفًا جديدة وينسخ كل رقم، فلا يشترك الجدولان في شيء." },
        { type: 'code', code: J`
          int[][] copy = new int[marks.length][];
          for (int i = 0; i < marks.length; i++) {
              copy[i] = new int[marks[i].length];
              for (int j = 0; j < marks[i].length; j++) {
                  copy[i][j] = marks[i][j];
              }
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['copy[i] = new int[marks[i].length];', 'A <b>new</b> row with the same length as row <code>i</code>: this is the step the shallow copy was missing.'],
          ['copy[i][j] = marks[i][j];', 'Copy one number. Numbers are values, so this is a real copy.']
        ] },
        { type: 'memory', title: 'A deep copy shares nothing', frames: [
          { label: 'After the deep copy: new rows E and F hold the same numbers', vars: [{ name: 'marks', type: 'int[][]', ref: 'A' }, { name: 'copy', type: 'int[][]', ref: 'D' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '70' }, { name: '[1]', value: '80' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '90' }, { name: '[1]', value: '60' }] },
            { id: 'D', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'E' }, { name: '[1]', ref: 'F' }] },
            { id: 'E', cls: 'int[] row 0', fields: [{ name: '[0]', value: '70' }, { name: '[1]', value: '80' }] },
            { id: 'F', cls: 'int[] row 1', fields: [{ name: '[0]', value: '90' }, { name: '[1]', value: '60' }] }
          ] },
          { label: 'After <code>copy[0][0] = 75;</code>: only row E changes; <code>marks</code> keeps 70', vars: [{ name: 'marks', type: 'int[][]', ref: 'A' }, { name: 'copy', type: 'int[][]', ref: 'D' }], objects: [
            { id: 'A', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }] },
            { id: 'B', cls: 'int[] row 0', fields: [{ name: '[0]', value: '70' }, { name: '[1]', value: '80' }] },
            { id: 'C', cls: 'int[] row 1', fields: [{ name: '[0]', value: '90' }, { name: '[1]', value: '60' }] },
            { id: 'D', cls: 'int[][] (2 rows)', fields: [{ name: '[0]', ref: 'E' }, { name: '[1]', ref: 'F' }] },
            { id: 'E', cls: 'int[] row 0', fields: [{ name: '[0]', value: '75' }, { name: '[1]', value: '80' }] },
            { id: 'F', cls: 'int[] row 1', fields: [{ name: '[0]', value: '90' }, { name: '[1]', value: '60' }] }
          ] }
        ], ar: "بعد النسخ العميق يتغير الجدول المنسوخ وحده." },
        { type: 'p', en: "A shorter way to copy one row: <code>Arrays.copyOf(marks[i], marks[i].length)</code> returns a <b>new</b> 1D array with the same numbers (you met it with the <code>Arrays</code> class in CS101). So <code>copy[i] = Arrays.copyOf(marks[i], marks[i].length);</code> inside a loop over the rows also gives a deep copy. The important point is the same: every row must be a new array." },
        { type: 'table', head: ['How you &quot;copy&quot;', 'New array of rows?', 'New rows?', 'Does <code>copy[0][0] = 75</code> change the original?'], rows: [
          ['<code>copy = marks;</code>', 'no', 'no', '<b>yes</b>'],
          ['Shallow: <code>copy[i] = marks[i];</code> or <code>marks.clone()</code>', 'yes', 'no', '<b>yes</b>'],
          ['Deep: new rows, then copy every box', 'yes', 'yes', 'no']
        ] },
        { type: 'check', q: "Inside a loop over <code>i</code>, which line makes a deep copy of row <code>i</code>?", options: ['<code>copy[i] = marks[i];</code>', '<code>copy[i] = Arrays.copyOf(marks[i], marks[i].length);</code>', '<code>copy = marks;</code>', '<code>copy[i] = marks;</code>'], answer: 1, explain: "<code>Arrays.copyOf</code> creates a new row and copies the numbers into it." },
        { type: 'note', kind: 'exam', en: "Comparing tables has the same trap. <code>a == b</code> asks &quot;are these the same table?&quot; (the same arrow), not &quot;do they hold the same numbers?&quot;. To compare the contents of two tables use <code>Arrays.deepEquals(a, b)</code>. A fresh deep copy gives <code>==</code> false but <code>deepEquals</code> true.",
          ar: "== يقارن المراجع، وArrays.deepEquals يقارن المحتوى." },
        { type: 'steps', title: 'Worked example: a deepCopy method', problem: "Write a method <code>deepCopy</code> that returns a deep copy of any table, ragged or not. Change the copy and show that the original did not change.",
          steps: [
            { en: "The new array of rows has the same number of rows. The row lengths are decided one by one.", code: J`
              public static int[][] deepCopy(int[][] m) {
                  int[][] copy = new int[m.length][];
            ` },
            { en: "Each row is new and has the length of the original row, so ragged tables work too.", code: J`
                  for (int i = 0; i < m.length; i++) {
                      copy[i] = new int[m[i].length];
                      for (int j = 0; j < m[i].length; j++) {
                          copy[i][j] = m[i][j];
                      }
                  }
                  return copy;
              }
            ` },
            { en: "Test it: <code>==</code> on the tables and on the rows shows that nothing is shared. Complete program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[][] goals = {{2, 1, 3}, {0, 4}};
                    int[][] copy = deepCopy(goals);
                    copy[1][0] = 5;
                    System.out.println("Original: " + Arrays.deepToString(goals));
                    System.out.println("Copy:     " + Arrays.deepToString(copy));
                    System.out.println("Same table? " + (goals == copy));
                    System.out.println("Shared row? " + (goals[0] == copy[0]));
                }

                public static int[][] deepCopy(int[][] m) {
                    int[][] copy = new int[m.length][];
                    for (int i = 0; i < m.length; i++) {
                        copy[i] = new int[m[i].length];
                        for (int j = 0; j < m[i].length; j++) {
                            copy[i][j] = m[i][j];
                        }
                    }
                    return copy;
                }
            }
          `, out: J`
            Original: [[2, 1, 3], [0, 4]]
            Copy:     [[2, 1, 3], [5, 4]]
            Same table? false
            Shared row? false
          `, ar: "الدالة تنشئ كل صف جديدًا بطول الصف الأصلي ثم تنسخ الأرقام." },
        { type: 'steps', title: 'Worked example: keep the original marks', problem: "A teacher adds a bonus of 5 to every mark, but no mark may go above 100. The original marks must stay unchanged. Make a deep copy with <code>Arrays.copyOf</code>, add the bonus to the copy, and print both tables.",
          steps: [
            { en: "Deep copy, one row at a time.", code: J`
              int[][] curved = new int[marks.length][];
              for (int i = 0; i < marks.length; i++) {
                  curved[i] = Arrays.copyOf(marks[i], marks[i].length);
              }
            ` },
            { en: "Change only the copy. <code>Math.min</code> keeps every mark at 100 or less.", code: "curved[i][j] = Math.min(curved[i][j] + 5, 100);" },
            { en: "Complete program:" }
          ],
          code: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[][] marks = {{70, 98}, {85, 60}};
                    int[][] curved = new int[marks.length][];
                    for (int i = 0; i < marks.length; i++) {
                        curved[i] = Arrays.copyOf(marks[i], marks[i].length);
                    }
                    for (int i = 0; i < curved.length; i++) {
                        for (int j = 0; j < curved[i].length; j++) {
                            curved[i][j] = Math.min(curved[i][j] + 5, 100);
                        }
                    }
                    System.out.println("Original: " + Arrays.deepToString(marks));
                    System.out.println("Curved:   " + Arrays.deepToString(curved));
                }
            }
          `, out: J`
            Original: [[70, 98], [85, 60]]
            Curved:   [[75, 100], [90, 65]]
          `, ar: "نعدّل النسخة العميقة فقط، فتبقى الدرجات الأصلية كما هي." }
      ],
      mistakes: [
        { title: 'Thinking b = a makes a copy', en: "It only makes a second name for the same table.", code: J`
          int[][] backup = marks;   // NOT a copy
          marks[0][0] = 0;          // backup[0][0] is 0 too
        ` },
        { title: 'Copying the row arrows (shallow copy)', en: "<code>copy[i] = marks[i]</code> shares the rows. Create new rows.", code: J`
          copy[i] = marks[i];                                // shares row i
          copy[i] = Arrays.copyOf(marks[i], marks[i].length); // new row
        ` },
        { title: 'Expecting clone() to copy deeply', en: "On a table, <code>clone()</code> copies only the array of rows.", code: J`
          int[][] copy = marks.clone();   // shallow: rows are shared
        ` },
        { title: 'Comparing tables with ==', en: "<code>==</code> compares arrows. Use <code>Arrays.deepEquals</code> to compare contents.", code: J`
          if (a == b)                    // same table?
          if (Arrays.deepEquals(a, b))   // same numbers?
        ` }
      ],
      remember: [
        "<code>b = a</code> copies only the arrow: two names (aliases), one table.",
        "A shallow copy has a new array of rows but <b>shares</b> the rows; <code>clone()</code> on a table is shallow.",
        "A deep copy creates new rows and copies every box; the tables share nothing.",
        "Deep copy of a row: <code>new int[m[i].length]</code> plus a loop, or <code>Arrays.copyOf(m[i], m[i].length)</code>.",
        "<code>==</code> asks &quot;same table?&quot;; <code>Arrays.deepEquals</code> asks &quot;same numbers?&quot;."
      ],
      rememberAr: "b = a لا ينسخ الجدول بل يعطيه اسمًا ثانيًا. النسخ السطحي يشارك الصفوف. النسخ العميق ينشئ صفوفًا جديدة وينسخ كل رقم. نقارن المحتوى بـ Arrays.deepEquals.",
      practice: [
        { t: 'mcq', q: "What does <code>int[][] b = a;</code> do?", options: ['Makes a deep copy of a', 'Makes a shallow copy of a', 'Gives a second name to the same table', 'Creates an empty table'], answer: 2, explain: "Only the arrow is copied; <code>a</code> and <code>b</code> are aliases." },
        { t: 'mcq', q: "What does a deep copy of a table create?", options: ['Only a new variable', 'A new array of rows only', 'A new array of rows and new rows with copied values', 'Nothing new'], answer: 2, explain: "Every level is new, so nothing is shared." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] a = {{1, 2}, {3, 4}};
                  int[][] b = a;
                  b[0][1] = 20;
                  a[1][0] = 30;
                  System.out.println(a[0][1] + " " + b[1][0]);
                  System.out.println(a == b);
              }
          }
        `, answer: J`
          20 30
          true
        `, explain: "<code>a</code> and <code>b</code> are the same table, so each change is seen through both names, and <code>a == b</code> is true." },
        { t: 'output', q: "What is the output? (Think about which rows are shared.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] a = {{1, 2}, {3, 4}};
                  int[][] s = new int[2][];
                  s[0] = a[0];
                  s[1] = a[1];
                  s[0][0] = 100;
                  s[1] = new int[] {7, 8};
                  System.out.println(a[0][0] + " " + a[1][0] + " " + s[1][0]);
              }
          }
        `, answer: '100 3 7', explain: "<code>s[0]</code> is the same row as <code>a[0]</code>, so <code>a[0][0]</code> becomes 100. Then <code>s[1]</code> gets a brand-new row; this changes only the arrow in <code>s</code>, so <code>a[1][0]</code> is still 3, and <code>s[1][0]</code> is 7." },
        { t: 'output', q: "What is the output?", code: J`
          import java.util.Arrays;

          public class Main {
              public static void main(String[] args) {
                  int[][] a = {{5, 6}, {7, 8}};
                  int[][] d = new int[a.length][];
                  for (int i = 0; i < a.length; i++) {
                      d[i] = Arrays.copyOf(a[i], a[i].length);
                  }
                  System.out.println(Arrays.deepEquals(a, d) + " " + (a == d));
                  d[0][0] = 0;
                  System.out.println(a[0][0] + " " + d[0][0]);
              }
          }
        `, answer: J`
          true false
          5 0
        `, explain: "Right after the deep copy the contents are equal (<code>deepEquals</code> is true), but they are two different tables (<code>==</code> is false). Changing <code>d</code> does not change <code>a</code>." },
        { t: 'fill', q: "Complete the deep copy of the table <code>m</code>.", code: J`
          int[][] copy = new int[m.length][];
          for (int i = 0; i < m.length; i++) {
              copy[i] = new int[m[i].___];
              for (int j = 0; j < m[i].length; j++) {
                  copy[i][j] = ___[i][j];
              }
          }
        `, answers: ['length', 'm'], explain: "Each new row gets the length of the original row, and every box is copied from <code>m</code>." },
        { t: 'bug', q: "<code>backup</code> should keep the old marks, so the program should print 70. It prints 0. Tap the line with the bug.",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    int[][] marks = {{70, 80}, {90, 60}};
                    int[][] backup = new int[2][];
                    for (int i = 0; i < 2; i++) {
                        backup[i] = marks[i];
                    }
                    marks[0][0] = 0;
                    System.out.println(backup[0][0]);
                }
            }
          `, bug: 6,
          fix: J`
            import java.util.Arrays;

            public class Main {
                public static void main(String[] args) {
                    int[][] marks = {{70, 80}, {90, 60}};
                    int[][] backup = new int[2][];
                    for (int i = 0; i < 2; i++) {
                        backup[i] = Arrays.copyOf(marks[i], marks[i].length);
                    }
                    marks[0][0] = 0;
                    System.out.println(backup[0][0]);
                }
            }
          `,
          hint: "Does backup get new rows, or the same rows as marks?",
          explain: "<code>backup[i] = marks[i]</code> copies only the arrow, so <code>backup</code> is a <b>shallow</b> copy: both tables share the same rows. Setting <code>marks[0][0] = 0</code> changes the shared row. <code>Arrays.copyOf</code> creates a new row for the backup (a deep copy), so the backup keeps 70.",
          explainAr: "النسخ السطحي يشارك الصفوف؛ نحتاج صفًّا جديدًا لكل صف بـ Arrays.copyOf." },
        { t: 'code', q: "Read <code>rows</code> and <code>cols</code> and a table of marks. Make a <b>deep copy</b>. In the copy only, add 5 to every mark, but never above 100. Print <code>Original: </code> followed by <code>Arrays.deepToString</code> of the original, then <code>Copy: </code> followed by the copy. No prompts.",
          qAr: "انسخ{{g:|ي}} الجدول نسخًا عميقًا وعدّل{{g:|ي}} النسخة فقط.",
          starter: J`
            import java.util.Arrays;
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] marks = new int[rows][cols];
                    for (int r = 0; r < rows; r++) {
                        for (int c = 0; c < cols; c++) {
                            marks[r][c] = input.nextInt();
                        }
                    }
                    // deep copy, add the bonus to the copy, print both
                }
            }
          `,
          solution: J`
            import java.util.Arrays;
            import java.util.Scanner;

            public class Main {
                public static void main(String[] args) {
                    Scanner input = new Scanner(System.in);
                    int rows = input.nextInt();
                    int cols = input.nextInt();
                    int[][] marks = new int[rows][cols];
                    for (int r = 0; r < rows; r++) {
                        for (int c = 0; c < cols; c++) {
                            marks[r][c] = input.nextInt();
                        }
                    }
                    int[][] copy = new int[rows][];
                    for (int r = 0; r < rows; r++) {
                        copy[r] = Arrays.copyOf(marks[r], marks[r].length);
                    }
                    for (int r = 0; r < rows; r++) {
                        for (int c = 0; c < cols; c++) {
                            copy[r][c] = Math.min(copy[r][c] + 5, 100);
                        }
                    }
                    System.out.println("Original: " + Arrays.deepToString(marks));
                    System.out.println("Copy: " + Arrays.deepToString(copy));
                }
            }
          `,
          tests: [ { stdin: '2 2\n70 98\n85 60', expected: 'Original: [[70, 98], [85, 60]]\nCopy: [[75, 100], [90, 65]]' }, { stdin: '1 3\n100 0 50', expected: 'Original: [[100, 0, 50]]\nCopy: [[100, 5, 55]]' }, { stdin: '2 1\n96\n10', expected: 'Original: [[96], [10]]\nCopy: [[100], [15]]' } ],
          hint: "copy[r] = Arrays.copyOf(marks[r], marks[r].length); then change only copy. Math.min(x + 5, 100) keeps the mark at 100 or less.",
          explain: "Because every row of the copy is a new array, the changes stay in the copy and the original prints unchanged." }
      ]
    },
  ],
  quiz: [
    { t: 'mcq', q: "How many elements does <code>int[][] x = new int[2][5];</code> contain?", options: ['7', '10', '2', '5'], answer: 1, explain: "2 rows × 5 columns = 10 elements." },
    { t: 'mcq', q: "In <code>m[3][1]</code>, which number is the row?", options: ['3', '1', 'Both', 'Neither'], answer: 0, explain: "The first index is the row." },
    { t: 'output', q: "What is the output?", code: J`
      public class Main {
          public static void main(String[] args) {
              int[][] m = {{3, 1, 4}, {1, 5, 9}, {2, 6, 5}};
              int s = 0;
              for (int i = 0; i < m.length; i++) {
                  for (int j = 0; j < m[i].length; j++) {
                      if (j > i) s += m[i][j];
                  }
              }
              System.out.println(s);
          }
      }
    `, answer: '14', explain: "Only elements above the main diagonal are added: m[0][1] + m[0][2] + m[1][2] = 1 + 4 + 9 = 14." },
    { t: 'mcq', q: "For <code>int[][] p = {{1, 2}, {3, 4}, {5, 6}};</code>, what is <code>p.length</code>?", options: ['2', '3', '6', '1'], answer: 1, explain: "p.length is the number of rows (3)." },
    { t: 'output', q: "What is the output?", code: J`
      public class Main {
          public static void main(String[] args) {
              int[][] r = {{1, 2, 3}, {4}, {5, 6}};
              for (int[] row : r) {
                  System.out.print(row.length);
              }
              System.out.println();
              System.out.println(r[2][1] + r[1][0]);
          }
      }
    `, answer: J`
      312
      10
    `, explain: "The row lengths 3, 1 and 2 are printed without spaces. Then r[2][1] + r[1][0] = 6 + 4 = 10." },
    { t: 'mcq', q: "Which statement correctly starts creating a ragged array with 3 rows?", options: ['<code>int[][] a = new int[][3];</code>', '<code>int[][] a = new int[3][];</code>', '<code>int[][] a = new int[];</code>', '<code>int[3][] a = new int;</code>'], answer: 1, explain: "The number of rows must be given; each row is created later." },
    { t: 'output', q: "What is the output?", code: J`
      public class Main {
          public static void main(String[] args) {
              int[][] m = {{1, 2, 3}, {4, 5, 6}};
              int[][] t = new int[3][2];
              for (int i = 0; i < 2; i++) {
                  for (int j = 0; j < 3; j++) {
                      t[j][i] = m[i][j];
                  }
              }
              System.out.println(t[2][0] + " " + t[0][1]);
          }
      }
    `, answer: '3 4', explain: "t is the transpose: t[2][0] = m[0][2] = 3 and t[0][1] = m[1][0] = 4." },
    { t: 'mcq', q: "What is the size of the product of a 3 × 2 matrix and a 2 × 2 matrix?", options: ['2 × 2', '3 × 2', '2 × 3', 'Not defined'], answer: 1, explain: "n × m times m × p gives n × p: 3 × 2." },
    { t: 'output', q: "What is the output?", code: J`
      public class Main {
          public static void main(String[] args) {
              int[][] g = {{1, 2}, {3, 4}};
              doubleAll(g);
              System.out.println(g[0][1] + g[1][0]);
          }

          public static void doubleAll(int[][] m) {
              for (int[] row : m) {
                  for (int j = 0; j < row.length; j++) {
                      row[j] *= 2;
                  }
              }
          }
      }
    `, answer: '10', explain: "The method changes the shared table: {{2, 4}, {6, 8}}, and 4 + 6 = 10." },
    { t: 'mcq', q: "For <code>int[][] matrix = new int[4][5];</code>, what is <code>matrix[1]</code>?", options: ['The element in row 1, column 1', 'The second row: a 1D array of 5 ints', 'The second column', 'A compile error'], answer: 1, explain: "A 2D array is an array of rows; matrix[1] is the row at index 1." },
    { t: 'bug', q: "<code>backup</code> should keep the old marks, so the program should print <code>Old mark: 60</code>. It prints <code>Old mark: 100</code>. Tap the line with the bug.",
      code: J`
        public class Main {
            public static void main(String[] args) {
                int[][] marks = {{70, 80}, {90, 60}};
                int[][] backup = marks;
                marks[1][1] = 100;
                System.out.println("Old mark: " + backup[1][1]);
            }
        }
      `, bug: 4,
      fix: J`
        import java.util.Arrays;

        public class Main {
            public static void main(String[] args) {
                int[][] marks = {{70, 80}, {90, 60}};
                int[][] backup = new int[marks.length][];
                for (int i = 0; i < marks.length; i++) {
                    backup[i] = Arrays.copyOf(marks[i], marks[i].length);
                }
                marks[1][1] = 100;
                System.out.println("Old mark: " + backup[1][1]);
            }
        }
      `,
      explain: "<code>backup = marks</code> copies only the arrow, so both names refer to the same table, and the change to <code>marks[1][1]</code> is seen through <code>backup</code>. A real backup needs a deep copy: a new array of rows and a new copy of every row.",
      explainAr: "backup = marks لا ينسخ الجدول؛ نحتاج نسخًا عميقًا." },
    { t: 'bug', q: "The program should print the position of the <b>first</b> 7 in reading order, <code>0 1</code>. It prints <code>1 0</code>. Tap a line that causes the bug.",
      code: J`
        public class Main {
            public static void main(String[] args) {
                int[][] m = {{4, 7, 2}, {7, 1, 7}};
                int row = -1, col = -1;
                for (int r = 0; r < m.length; r++) {
                    for (int c = 0; c < m[r].length; c++) {
                        if (m[r][c] == 7) { row = r; col = c; break; }
                    }
                }
                System.out.println(row + " " + col);
            }
        }
      `, bug: [5, 7],
      fix: J`
        public class Main {
            public static void main(String[] args) {
                int[][] m = {{4, 7, 2}, {7, 1, 7}};
                int row = -1, col = -1;
                for (int r = 0; r < m.length && row == -1; r++) {
                    for (int c = 0; c < m[r].length; c++) {
                        if (m[r][c] == 7) { row = r; col = c; break; }
                    }
                }
                System.out.println(row + " " + col);
            }
        }
      `,
      explain: "<code>break</code> leaves only the inner loop. The outer loop continues with row 1, finds the 7 at [1][0], and overwrites the position. Adding <code>&amp;&amp; row == -1</code> to the outer loop stops it as soon as a position has been saved, so the first match [0][1] is kept.",
      explainAr: "break يخرج من الحلقة الداخلية فقط، فتستمر الخارجية وتكتب فوق الموقع الأول." }
  ],
  lab: {
    t: 'code',
    q: "<b>Quiz marks table.</b> Read <code>s</code> (students) and <code>q</code> (quizzes), then an s × q table of integer marks (one row per student). Print, with no prompts:<br>• for each student: <code>Student k total: T</code> (k starts at 1)<br>• for each quiz: <code>Quiz k average: A</code> with two decimals (<code>printf</code>, k starts at 1)<br>• finally <code>Top student: k</code> — the student with the highest total (the smallest number if tied).<br>Write at least two methods that take the 2D array as a parameter, e.g. <code>rowTotal(int[][] m, int r)</code> and <code>columnAverage(int[][] m, int c)</code>.<br><b>Plan:</b> read the table; loop over rows with <code>rowTotal</code>; remember the best row; then loop over columns with <code>columnAverage</code>.",
    qAr: "اطبع مجموع كل طالب ومتوسط كل اختبار وأفضل طالب، مستخدمًا دوال تستقبل المصفوفة ثنائية الأبعاد.",
    starter: J`
      import java.util.Scanner;

      public class Main {
          public static void main(String[] args) {
              Scanner input = new Scanner(System.in);
              int s = input.nextInt();
              int q = input.nextInt();
              int[][] marks = new int[s][q];
              // read the table, then print totals, averages and the top student
          }

          public static int rowTotal(int[][] m, int r) {
              return 0;
          }

          public static double columnAverage(int[][] m, int c) {
              return 0;
          }
      }
    `,
    solution: J`
      import java.util.Scanner;

      public class Main {
          public static void main(String[] args) {
              Scanner input = new Scanner(System.in);
              int s = input.nextInt();
              int q = input.nextInt();
              int[][] marks = new int[s][q];
              for (int i = 0; i < s; i++) {
                  for (int j = 0; j < q; j++) {
                      marks[i][j] = input.nextInt();
                  }
              }

              int top = 0;
              for (int i = 0; i < s; i++) {
                  int total = rowTotal(marks, i);
                  System.out.println("Student " + (i + 1) + " total: " + total);
                  if (total > rowTotal(marks, top)) {
                      top = i;
                  }
              }
              for (int j = 0; j < q; j++) {
                  System.out.printf("Quiz %d average: %.2f%n", j + 1, columnAverage(marks, j));
              }
              System.out.println("Top student: " + (top + 1));
          }

          public static int rowTotal(int[][] m, int r) {
              int total = 0;
              for (int j = 0; j < m[r].length; j++) {
                  total += m[r][j];
              }
              return total;
          }

          public static double columnAverage(int[][] m, int c) {
              int sum = 0;
              for (int i = 0; i < m.length; i++) {
                  sum += m[i][c];
              }
              return (double) sum / m.length;
          }
      }
    `,
    tests: [
      { stdin: '3 4\n8 9 7 10\n6 5 9 8\n10 10 9 9', expected: 'Student 1 total: 34\nStudent 2 total: 28\nStudent 3 total: 38\nQuiz 1 average: 8.00\nQuiz 2 average: 8.00\nQuiz 3 average: 8.33\nQuiz 4 average: 9.00\nTop student: 3' },
      { stdin: '2 2\n5 7\n9 3', expected: 'Student 1 total: 12\nStudent 2 total: 12\nQuiz 1 average: 7.00\nQuiz 2 average: 5.00\nTop student: 1' },
      { stdin: '1 3\n4 6 5', expected: 'Student 1 total: 15\nQuiz 1 average: 4.00\nQuiz 2 average: 6.00\nQuiz 3 average: 5.00\nTop student: 1' }
    ],
    hint: "Row totals walk along one row (m[r][j]); column averages walk down one column (m[i][c]) and divide by m.length as a double.",
    explain: "The same table answers two different questions: summing across a row describes a student, while going down a column describes a quiz."
  },
  cheats: [
    { code: J`int[][] m = new int[rows][cols];`, note: 'Create a rows × cols table (all 0)' },
    { code: J`int[][] m = {{1, 2, 3}, {4, 5, 6}};`, note: 'Initializer: one pair of braces per row' },
    { code: J`m.length      m[i].length`, note: 'Number of rows / number of columns in row i' },
    { code: J`for (int i = 0; i < m.length; i++)
    for (int j = 0; j < m[i].length; j++)
        ... m[i][j] ...`, note: 'Visit every element row by row' },
    { code: J`for (int[] row : m) for (int v : row) { ... }`, note: 'Nested for-each (read only)' },
    { code: J`int[][] r = new int[3][]; r[0] = new int[2];`, note: 'Ragged array: create rows separately' },
    { code: J`public static int sum(int[][] m)`, note: 'Table parameter' },
    { code: J`m[i][i]`, note: 'Main diagonal of a square table' },
    { code: J`c[i][j] = a[i][j] + b[i][j];`, note: 'Matrix addition (same size)' },
    { code: J`t[j][i] = m[i][j];`, note: 'Transpose; t is new int[m[0].length][m.length]' },
    { code: J`c[i][j] += a[i][k] * b[k][j];`, note: 'Matrix multiplication (three nested loops)' },
    { code: J`m[i][m.length - 1 - i]`, note: 'The other diagonal of a square table' },
    { code: J`int[] totals = new int[m.length];`, note: 'One answer per row: a method can return a 1D array' },
    { code: J`String[][] s = new String[2][3];   // every box is null`, note: 'Table of words; test a box with == null before using it' },
    { code: J`char[][] b = new char[3][3];  b[r][c] = '-';`, note: 'Game board of single characters (single quotes)' },
    { code: J`if (c < b[r].length - 1) System.out.print(" | ");`, note: 'Print a separator only between boxes' },
    { code: J`return new int[] {r, c};   // or {-1, -1}`, note: 'Return a position from a search method' },
    { code: J`boolean all = true;  ...  if (!rowHas) all = false;`, note: '&quot;Every row has…&quot;: start true, one failing row makes it false' },
    { code: J`for (int c = 0; c < m[0].length; c++)
    for (int r = 0; r < m.length; r++)
        ... m[r][c] ...`, note: 'Column-by-column traversal (rectangles only)' },
    { code: J`System.out.println(Arrays.deepToString(m));`, note: 'Quick print of a whole table, e.g. [[1, 2], [3, 4]]' },
    { code: J`b[r][0] == p && b[r][1] == p && b[r][2] == p`, note: 'Tic-tac-toe: row r is full of player p' },
    { code: J`int[][] b = a;`, note: 'NOT a copy: two names for one table' },
    { code: J`copy[i] = Arrays.copyOf(a[i], a[i].length);`, note: 'Deep copy, one new row at a time (inside a loop over i)' },
    { code: J`Arrays.deepEquals(a, b)`, note: 'Compare the contents of two tables (== compares arrows)' }
  ],
  glossary: [
    { term: 'Two-dimensional array', ar: 'مصفوفة ثنائية الأبعاد', def: 'An array of arrays that stores data in rows and columns (a table).' },
    { term: 'Row', ar: 'صف', def: 'A horizontal line of boxes; m[i] is row i.' },
    { term: 'Column', ar: 'عمود', def: 'A vertical line of boxes: m[0][j], m[1][j], ...' },
    { term: 'Cell', ar: 'خلية', def: 'One box of the table, written m[row][column].' },
    { term: 'Nested loops', ar: 'حلقات متداخلة', def: 'A loop inside another loop; used to visit every box of a table.' },
    { term: 'Ragged array', ar: 'مصفوفة غير منتظمة', def: 'A 2D array whose rows have different lengths.' },
    { term: 'Matrix', ar: 'مصفوفة (رياضية)', def: 'A rectangular table of numbers with n rows and m columns.' },
    { term: 'Main diagonal', ar: 'القطر الرئيسي', def: 'The boxes m[i][i] of a square table.' },
    { term: 'Transpose', ar: 'المنقول', def: 'The matrix obtained by turning rows into columns: t[j][i] = m[i][j].' },
    { term: 'Matrix multiplication', ar: 'ضرب المصفوفات', def: 'C = A × B where c[i][j] is the sum of a[i][k] · b[k][j]; needs columns of A = rows of B.' },
    { term: 'Default value', ar: 'القيمة الافتراضية', def: 'The value a new box starts with: 0 for int, 0.0 for double, false for boolean, null for String.' },
    { term: 'Array of rows', ar: 'مصفوفة من الصفوف', def: 'How Java stores a 2D array: an outer array whose boxes are references to the row arrays.' },
    { term: 'null', ar: 'لا شيء (null)', def: 'A reference that points to no object; every box of a new String table and every row of new int[3][] starts as null.' },
    { term: 'Symmetric matrix', ar: 'مصفوفة متماثلة', def: 'A square matrix with m[i][j] == m[j][i] for every i and j; it equals its own transpose.' },
    { term: 'Traversal', ar: 'المرور على العناصر', def: 'Visiting every box of a table in some order.' },
    { term: 'Row-major order', ar: 'الترتيب حسب الصفوف', def: 'Visiting a table row by row, from left to right, like reading a book.' },
    { term: 'Column-major order', ar: 'الترتيب حسب الأعمدة', def: 'Visiting a table column by column, from the top to the bottom.' },
    { term: 'Linear search', ar: 'البحث الخطي', def: 'Checking the boxes one by one until the value is found or the table ends.' },
    { term: 'Flag', ar: 'علَم (متغير منطقي)', def: 'A boolean variable that remembers whether something happened, such as found or allRows.' },
    { term: 'Alias', ar: 'اسم مستعار', def: 'A second variable that refers to the same array; b = a makes b an alias of a.' },
    { term: 'Shallow copy', ar: 'نسخ سطحي', def: 'A new array of rows that still shares the same row objects with the original table.' },
    { term: 'Deep copy', ar: 'نسخ عميق', def: 'A copy with a new array of rows, new rows and every value copied, so it shares nothing with the original.' }
  ]
});
