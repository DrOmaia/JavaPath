JP.unit({
  course: 'cs102',
  n: 1,
  title: 'Two-Dimensional Arrays',
  titleAr: 'المصفوفات ثنائية الأبعاد',
  intro: "Many things come as tables: the marks of students in several quizzes, the sales of branches in each quarter, the seats of a cinema, or a timetable. A two-dimensional array keeps such a table in rows and columns. You already know one-dimensional arrays (one row of boxes). In small steps you will learn to create a table, visit every cell with nested loops, add up rows and columns, use rows of different lengths, pass tables to methods, and do matrix addition, transpose and multiplication.",
  introAr: "كثير من البيانات تأتي على شكل جداول. المصفوفة ثنائية الأبعاد تخزّن الجدول في صفوف وأعمدة. ستتعلم بخطوات صغيرة إنشاءها ومعالجتها بالحلقات المتداخلة، والمصفوفات غير المنتظمة، وتمريرها للدوال، وعمليات المصفوفات الرياضية.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'A table of boxes: rows and columns',
      titleAr: 'جدول من الصناديق: صفوف وأعمدة',
      minutes: 30,
      body: [
        { type: 'h', en: 'From a row to a table' },
        { type: 'p', en: "A one-dimensional array is a single row of boxes. But a lot of real data is a <b>table</b>. A cinema hall has many rows of seats. A class has many students, and each student has marks in several quizzes. For this we need boxes arranged in <b>rows</b> and <b>columns</b>: a two-dimensional (2D) array.",
          ar: "المصفوفة ثنائية الأبعاد جدول من صفوف وأعمدة." },
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
        { type: 'h', en: 'How many rows? How many columns?' },
        { type: 'p', en: "Java sees a 2D array as a <b>row of rows</b>. So <code>seats.length</code> is the number of <b>rows</b>, and <code>seats[0].length</code> is the number of <b>columns</b> (the length of row 0). Remember: <code>length</code> has no brackets.",
          ar: "seats.length عدد الصفوف، وseats[0].length عدد الأعمدة." },
        { type: 'analogy', title: 'A building', en: "A building has floors, and each floor has rooms. <code>building.length</code> is the number of floors. <code>building[1]</code> is the whole second floor. <code>building[1].length</code> is the number of rooms on that floor.",
          ar: "المبنى فيه طوابق، وكل طابق فيه غرف: الجدول صفوف، وكل صف فيه أعمدة." },
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
        "The last box is <code>m[m.length - 1][m[0].length - 1]</code>."
      ],
      rememberAr: "المصفوفة ثنائية الأبعاد جدول: new int[صفوف][أعمدة]. العنصر m[الصف][العمود] والعد يبدأ من 0. m.length عدد الصفوف وm[0].length عدد الأعمدة.",
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
          hint: "The row comes first: grid[r][c].", explain: "Two variables can be the two indexes." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Filling and printing a table with nested loops',
      titleAr: 'تعبئة الجدول وطباعته بحلقات متداخلة',
      minutes: 30,
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
        { type: 'p', en: "With a 1D array one loop visited every box. A table has two directions, so we use <b>two loops, one inside the other</b>. They are called <b>nested loops</b>. The outer loop picks a <b>row</b>. For that row, the inner loop goes through all the <b>columns</b>.",
          ar: "الحلقة الخارجية تختار الصف، والداخلية تمر على أعمدته." },
        { type: 'analogy', title: 'Reading a book', en: "When you read a page you read line 1 from left to right, then line 2, then line 3. The outer loop is &quot;next line&quot;; the inner loop is &quot;next word on this line&quot;. At the end of each line you go down.",
          ar: "مثل قراءة صفحة: سطرًا سطرًا، وفي كل سطر كلمة كلمة." },
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
        "<code>println()</code> goes after the inner loop to end the row."
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
          hint: "Print a space only when j > 0. Put println() after the inner printing loop.", explain: "One pair of nested loops fills the table, another prints it." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Reading a table and adding up rows',
      titleAr: 'قراءة جدول وجمع الصفوف',
      minutes: 30,
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
        { type: 'h', en: 'Which row is best?' },
        { type: 'p', en: "To find the row with the biggest total, use king of the hill: remember the best total and the row that gave it. Start from row 0, and replace only when a row is strictly bigger (so ties keep the smaller row number)." },
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
        { type: 'note', kind: 'tip', en: "Why <code>r == 0 ||</code>? If all totals are negative, starting <code>bestSum</code> at 0 would give a wrong answer. The first row must always become the first champion." }
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
        "For the best row, remember the best sum and its row number."
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
          explain: "Each row sum is computed in the inner loop and compared with the best so far; > keeps the first row on ties." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'Columns, the largest value and the diagonal',
      titleAr: 'الأعمدة وأكبر قيمة والقطر',
      minutes: 35,
      body: [
        { type: 'h', en: 'The total of every column' },
        { type: 'p', en: "Sometimes the question is about the columns: &quot;What were the total sales of each quarter?&quot; Now one column is fixed, and we go <b>down</b> through the rows. So the loops swap roles: the <b>outer</b> loop goes over columns, the <b>inner</b> loop goes over rows.",
          ar: "لمجموع كل عمود نبدّل الأدوار: الخارجية للأعمدة والداخلية للصفوف." },
        { type: 'analogy', title: 'Adding a column of numbers', en: "In a school report you add the numbers of one column (for example Quiz 1 of all students) by going from the top to the bottom. Then you move your finger to the next column and do it again.",
          ar: "نجمع عمودًا من الأعلى إلى الأسفل ثم ننتقل إلى العمود التالي." },
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
          ` }
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
        "Main diagonal of a square table: <code>m[i][i]</code>, one loop."
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
          hint: "Outer loop over columns, inner loop over rows, sum += m[r][c]. Print a space before every column total except the first.", explain: "Fix a column and walk down the rows." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 5
    {
      title: 'Ragged arrays: rows of different lengths',
      titleAr: 'المصفوفات غير المنتظمة',
      minutes: 25,
      body: [
        { type: 'h', en: 'Not every row is the same' },
        { type: 'p', en: "Some tables are not rectangles. One student took 2 quizzes, another took 4, a third took only 1. If you make a rectangular table, you waste boxes. Java allows each row to have its <b>own length</b>. This is called a <b>ragged</b> (or jagged) array.",
          ar: "المصفوفة غير المنتظمة: كل صف له طول مختلف." },
        { type: 'analogy', title: 'A staircase of seats', en: "Imagine a stadium where the front row has 5 seats, the next row has 8, and the back row has 12. The rows are not equal, but each row still has its own seat numbers. In Java a 2D array is a row of rows, so each row can have a different size.",
          ar: "مثل مدرج: كل صف فيه عدد مختلف من المقاعد." },
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
        { type: 'h', en: 'Creating the rows yourself' },
        { type: 'p', en: "You can also give only the number of rows and create each row later. Leave the second bracket empty: <code>new int[3][]</code>. At first the three rows do not exist yet; then you create each row with its own size." },
        { type: 'code', code: J`
          int[][] tri = new int[3][];
          tri[0] = new int[1];
          tri[1] = new int[2];
          tri[2] = new int[3];
        ` },
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
          ar: "في المصفوفة غير المنتظمة استخدم{{g:|ي}} طول الصف الحالي دائمًا." }
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
        "The number of rows is always required, the number of columns may be left out."
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
          hint: "marks[i] = new int[k]; creates row i. Use marks[i].length in the second loop.", explain: "Each row is created with the size that the input gives." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 6
    {
      title: 'Passing and returning tables',
      titleAr: 'تمرير الجداول وإرجاعها من الدوال',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why methods for tables?' },
        { type: 'p', en: "Nested loops make code long. If you need &quot;print a table&quot; or &quot;sum of a table&quot; in many places, write it once as a method and call it. A method can receive a 2D array and also return one.",
          ar: "نكتب العملية مرة واحدة في دالة ونستدعيها كلما احتجنا." },
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
        { type: 'h', en: 'Returning a table' },
        { type: 'p', en: "A method can also build a table and return it. The return type is <code>int[][]</code>." },
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
        { type: 'note', kind: 'warn', en: "To change boxes use the indexed loop (<code>m[i][j] = ...</code>). In a for-each loop, <code>value</code> is only a copy, so <code>value = value * 2;</code> changes nothing.",
          ar: "للتعديل نستخدم{{g:|ي}} الحلقة ذات الفهارس." },
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
          ` }
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
        "For-each only reads. Use indexes to change boxes."
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
          hint: "Start total at 0, loop over rows and values, return total.", explain: "The method hides the nested loops behind one name." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 7
    {
      title: 'Matrices: addition and transpose',
      titleAr: 'المصفوفات الرياضية: الجمع والمنقول',
      minutes: 30,
      body: [
        { type: 'h', en: 'What is a matrix?' },
        { type: 'p', en: "In mathematics a <b>matrix</b> is a table of numbers with <i>n</i> rows and <i>m</i> columns. It is called an <i>n</i> × <i>m</i> matrix (&quot;n by m&quot;; rows first). In Java it is simply a 2D array: <code>new int[n][m]</code>. Engineers, game makers and data scientists use matrices all the time.",
          ar: "المصفوفة الرياضية n × m هي جدول أعداد، وتقابل new int[n][m] في جافا." },
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
        { type: 'note', kind: 'exam', en: "To transpose a <b>square</b> matrix in place by swapping <code>m[i][j]</code> and <code>m[j][i]</code>, the inner loop must start at <code>j = i + 1</code>. If it runs over all <code>j</code>, every pair is swapped twice and the matrix ends up unchanged." }
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
        "Methods build and return a new table."
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
          hint: "The transpose has cols rows and rows columns: new int[cols][rows]. Print a space before every value except the first in a row.", explain: "Creating the result with swapped sizes and assigning t[j][i] = m[i][j] works for every rectangular matrix." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 8
    {
      title: 'Matrix multiplication and a table application',
      titleAr: 'ضرب المصفوفات وتطبيق على الجداول',
      minutes: 35,
      body: [
        { type: 'h', en: 'Multiplication is different' },
        { type: 'p', en: "Multiplying matrices is <b>not</b> box by box. Each box of the result is made from a whole <b>row</b> of the first matrix and a whole <b>column</b> of the second: multiply the pairs and add them. This is the most difficult topic in this unit, so we go slowly.",
          ar: "ضرب المصفوفات ليس عنصرًا بعنصر: كل عنصر في الناتج يأتي من صف كامل وعمود كامل." },
        { type: 'analogy', title: 'The shopping bill', en: "Row of A = how many items you bought: 2 coffees and 3 sandwiches. Column of B = the prices: 10 riyals for a coffee and 15 for a sandwich. The bill is 2 × 10 + 3 × 15 = 65. You multiply pair by pair and add. That one number is one box of the result.",
          ar: "كمية كل غرض × سعره ثم نجمع: هذا هو معنى صف × عمود." },
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
          ` },
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
        ] }
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
        "The result starts as zeros, so use <code>+=</code>."
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
          hint: "Read a first (two loops), then b (two loops). The core line is c[i][j] += a[i][k] * b[k][j];", explain: "The same three loops as in the lesson." }
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
    { t: 'mcq', q: "For <code>int[][] matrix = new int[4][5];</code>, what is <code>matrix[1]</code>?", options: ['The element in row 1, column 1', 'The second row: a 1D array of 5 ints', 'The second column', 'A compile error'], answer: 1, explain: "A 2D array is an array of rows; matrix[1] is the row at index 1." }
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
    { code: J`c[i][j] += a[i][k] * b[k][j];`, note: 'Matrix multiplication (three nested loops)' }
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
    { term: 'Matrix multiplication', ar: 'ضرب المصفوفات', def: 'C = A × B where c[i][j] is the sum of a[i][k] · b[k][j]; needs columns of A = rows of B.' }
  ]
});
