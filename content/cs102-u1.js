JP.unit({
  course: 'cs102',
  n: 1,
  title: 'Two-Dimensional Arrays',
  titleAr: 'المصفوفات ثنائية الأبعاد',
  intro: "Many kinds of data come as tables: marks of students in several quizzes, sales of branches per quarter, seats in a hall, or mathematical matrices. A two-dimensional array stores such a table in rows and columns. Building on one-dimensional arrays from CS101, this unit shows how to create and initialize 2D arrays, process them with nested loops (row sums, column sums, maximum), use ragged arrays, pass 2D arrays to methods, and implement matrix addition, transpose and multiplication.",
  introAr: "كثير من البيانات تأتي على شكل جداول. المصفوفة ثنائية الأبعاد تخزن الجدول في صفوف وأعمدة. ستتعلم إنشاءها ومعالجتها بالحلقات المتداخلة، والمصفوفات غير المنتظمة، وتمريرها للدوال، وعمليات المصفوفات الرياضية.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'Creating 2D arrays and nested loops',
      titleAr: 'إنشاء المصفوفات ثنائية الأبعاد والحلقات المتداخلة',
      minutes: 45,
      body: [
        { type: 'h', en: 'Tables of data' },
        { type: 'p', en: "A <b>two-dimensional array</b> stores values in a grid of <b>rows</b> and <b>columns</b>. Each element is identified by two indexes: <code>matrix[row][column]</code>. Both indexes start at 0.",
          ar: "المصفوفة ثنائية الأبعاد جدول من صفوف وأعمدة، ونصل للعنصر بفهرسين: [الصف][العمود]." },
        { type: 'h', en: 'Declaring and creating' },
        { type: 'code', code: J`
          int[][] matrix;                         // declare
          matrix = new int[3][4];                 // create: 3 rows, 4 columns

          double[][] grades = new double[30][5];  // 30 students, 5 quizzes
          char[][] board = new char[3][3];        // a tic-tac-toe board
        ` },
        { type: 'p', en: "As with 1D arrays, the elements receive default values (0, 0.0, false, <code>'\\u0000'</code> or null). The first size is the number of rows; the second is the number of columns." },
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
        { type: 'h', en: 'A 2D array is an array of arrays' },
        { type: 'p', en: "In Java, <code>seats</code> is really a 1D array whose elements are rows, and each row is itself a 1D array. That is why <code>seats.length</code> gives the <b>number of rows</b> and <code>seats[i].length</code> gives the <b>number of columns in row i</b>. The expression <code>seats[1]</code> is the whole second row.",
          ar: "matrix.length عدد الصفوف، وmatrix[i].length عدد أعمدة الصف i." },
        { type: 'h', en: 'Initializers and printing with nested loops' },
        { type: 'p', en: "An initializer lists each row in its own braces. To visit every element use <b>nested loops</b>: the outer loop goes over rows, the inner loop over the columns of the current row." },
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
                      System.out.println();     // end of the row
                  }
              }
          }
        `, out: J`
          85 90 78
          70 65 88
          92 81 95
          60 74 69
        ` },
        { type: 'table', head: ['', 'col 0', 'col 1', 'col 2'], rows: [
          ['<b>row 0</b>', 'scores[0][0] = 85', 'scores[0][1] = 90', 'scores[0][2] = 78'],
          ['<b>row 1</b>', 'scores[1][0] = 70', 'scores[1][1] = 65', 'scores[1][2] = 88'],
          ['<b>row 2</b>', 'scores[2][0] = 92', 'scores[2][1] = 81', 'scores[2][2] = 95'],
          ['<b>row 3</b>', 'scores[3][0] = 60', 'scores[3][1] = 74', 'scores[3][2] = 69']
        ] },
        { type: 'note', kind: 'exam', en: "For <code>int[][] m = new int[4][3];</code>: <code>m.length</code> is <b>4</b> (rows) and <code>m[0].length</code> is <b>3</b> (columns). <code>length</code> is a field, so <code>m.length()</code> does not compile. The last element is <code>m[3][2]</code>." },
        { type: 'h', en: 'Filling a 2D array from input' },
        { type: 'code', run: true, stdin: '2 3\n30.5 31 29.5\n27 33.5 32', code: J`
          import java.util.Scanner;

          public class Main {
              public static void main(String[] args) {
                  Scanner input = new Scanner(System.in);
                  int rows = input.nextInt();
                  int cols = input.nextInt();
                  double[][] temps = new double[rows][cols];
                  for (int r = 0; r < rows; r++) {
                      for (int c = 0; c < cols; c++) {
                          temps[r][c] = input.nextDouble();
                      }
                  }
                  System.out.println("Last value: " + temps[rows - 1][cols - 1]);
                  System.out.println("Element [1][0]: " + temps[1][0]);
              }
          }
        `, out: J`
          Last value: 32.0
          Element [1][0]: 27.0
        ` },
        { type: 'p', en: "Filling with random values uses the same loops, for example <code>matrix[r][c] = (int) (Math.random() * 100);</code> for values 0–99." },
        { type: 'note', kind: 'tip', en: "Row-by-row order (outer loop on rows) matches how input is typed and how tables are printed. Swapping the loops (outer loop on columns) visits the array column by column.",
          ar: "الحلقة الخارجية للصفوف والداخلية للأعمدة هو الترتيب المعتاد." }
      ],
      practice: [
        { t: 'mcq', q: "For <code>double[][] m = new double[4][6];</code>, what are <code>m.length</code> and <code>m[0].length</code>?",
          options: ['6 and 4', '4 and 6', '24 and 6', '4 and 4'], answer: 1,
          explain: "The first size is the number of rows (m.length), the second the number of columns (m[0].length)." },
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
        `, explain: "grid[1][2] is 6 and grid[0][1] is 2, so 6 − 2 = 4. There are 2 rows, and row 1 has 3 columns." },
        { t: 'fill', q: "Complete the loops that print any 2D array <code>m</code> row by row.", code: J`
          for (int i = 0; i < m.___; i++) {
              for (int j = 0; j < m[i].___; j++) {
                  System.out.print(m[i][j] + " ");
              }
              System.out.println();
          }
        `, answers: ['length', 'length'],
          explain: "<code>m.length</code> is the number of rows; <code>m[i].length</code> is the number of columns in row i." },
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
        `, explain: "The outer loop goes over the 3 columns; for each column the inner loop prints the values of both rows, then a new line." },
        { t: 'mcq', q: "Which expression gives the last element of <code>int[][] t = new int[5][3];</code>?",
          options: ['<code>t[5][3]</code>', '<code>t[4][2]</code>', '<code>t[3][5]</code>', '<code>t[2][4]</code>'], answer: 1,
          explain: "Rows go 0–4 and columns 0–2, so the bottom-right element is t[4][2]." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Processing 2D arrays, ragged arrays and methods',
      titleAr: 'معالجة المصفوفات ثنائية الأبعاد والمصفوفات غير المنتظمة والدوال',
      minutes: 50,
      body: [
        { type: 'h', en: 'Summing by row' },
        { type: 'p', en: "To sum each row, reset a row total at the start of every iteration of the outer loop, and add to it in the inner loop. The table below holds the sales of 3 branches over 4 quarters.",
          ar: "مجموع كل صف: نصفّر المجموع في بداية كل دورة للحلقة الخارجية." },
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
        { type: 'h', en: 'Summing by column' },
        { type: 'p', en: "For column totals the loops swap roles: the outer loop goes over columns and the inner loop over rows." },
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
        { type: 'note', kind: 'exam', en: "In a column loop the bounds swap too: the outer loop runs to <code>sales[0].length</code> (columns) and the inner loop to <code>sales.length</code> (rows). Mixing them up causes an <code>ArrayIndexOutOfBoundsException</code> when the table is not square." },
        { type: 'h', en: 'Largest element and its position' },
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
        { type: 'p', en: "36.5 appears twice. Because the test is <code>&gt;</code> (not <code>&gt;=</code>), the first occurrence in row-by-row order is kept." },
        { type: 'h', en: 'Ragged arrays' },
        { type: 'p', en: "Since each row is a separate array, rows may have <b>different lengths</b>. Such an array is called a <b>ragged</b> (or jagged) array. You can write it with an initializer, or create only the rows first and each row later: <code>int[][] tri = new int[3][];</code> then <code>tri[0] = new int[1]; tri[1] = new int[2]; tri[2] = new int[3];</code>.",
          ar: "المصفوفة غير المنتظمة: صفوفها بأطوال مختلفة." },
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
        { type: 'note', kind: 'warn', en: "With ragged arrays, never use <code>m[0].length</code> as the bound for every row — use <code>m[i].length</code>. Writing <code>new int[][3]</code> (columns without rows) is a compile error." },
        { type: 'h', en: 'Passing and returning 2D arrays' },
        { type: 'p', en: "A parameter of type <code>int[][]</code> receives the reference to the table, so a method can read it or change its elements. A method can also create a 2D array and return it." },
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
                  for (int[] row : m) {          // each row is an int[]
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
        { type: 'note', kind: 'tip', en: "Nested for-each loops are perfect for reading every element: the outer variable has type <code>int[]</code> (a row), the inner one has type <code>int</code>.",
          ar: "في for-each المتداخلة: متغير الحلقة الخارجية صف من نوع int[]." }
      ],
      practice: [
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
        `, answer: '14', explain: "The loop adds the main diagonal m[0][0] + m[1][1] + m[2][2] = 2 + 3 + 9 = 14." },
        { t: 'mcq', q: "Given <code>int[][] r = {{1}, {2, 3, 4}, {5, 6}};</code>, what are <code>r.length</code>, <code>r[1].length</code> and <code>r[2].length</code>?",
          options: ['3, 3, 2', '3, 2, 3', '6, 3, 2', '1, 3, 2'], answer: 0,
          explain: "There are 3 rows; row 1 has 3 elements and row 2 has 2 elements." },
        { t: 'fill', q: "Complete the code that prints the sum of each <b>column</b> of <code>m</code>.", code: J`
          for (int col = 0; col < m[0].length; col++) {
              int total = 0;
              for (int row = 0; row < ___; row++) {
                  total += m[___][col];
              }
              System.out.println(total);
          }
        `, answers: ['m.length', 'row'],
          explain: "For a fixed column, the inner loop moves down through all rows (0 to m.length − 1)." },
        { t: 'mcq', q: "Which is a correct header for a method that returns the average of all elements of a 2D array of doubles?",
          options: ['<code>public static double average(double[] m)</code>', '<code>public static double[][] average(double m)</code>', '<code>public static double average(double[][] m)</code>', '<code>public static double average(double m[][][])</code>'], answer: 2,
          explain: "The parameter is a 2D array (<code>double[][]</code>) and the result is one double." },
        { t: 'output', q: "What is the output?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] r = new int[3][];
                  for (int i = 0; i < r.length; i++) {
                      r[i] = new int[i + 2];
                  }
                  int cells = 0;
                  for (int[] row : r) {
                      cells += row.length;
                  }
                  System.out.println(cells);
                  System.out.println(r[2][3]);
              }
          }
        `, answer: J`
          9
          0
        `, explain: "Rows get lengths 2, 3 and 4, so there are 9 cells. r[2] has length 4, so r[2][3] exists and holds the default 0." },
        { t: 'code', q: "Read two integers <code>rows</code> and <code>cols</code>, then a table of integers with that many rows and columns. Print the sum of each row on its own line, then a line <code>Max row: k</code> where k is the index of the row with the largest sum (the smallest index if there is a tie). No prompts.",
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
          hint: "Initialize the best sum from row 0 (not from 0), so tables with only negative numbers still work.",
          explain: "Each row sum is computed in the inner loop and compared with the best so far; using > keeps the first row on ties." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Matrix applications',
      titleAr: 'تطبيقات المصفوفات الرياضية',
      minutes: 45,
      body: [
        { type: 'h', en: 'Matrices in Java' },
        { type: 'p', en: "A mathematical matrix with <i>n</i> rows and <i>m</i> columns (an <i>n</i> × <i>m</i> matrix) maps directly to <code>new int[n][m]</code> or <code>new double[n][m]</code>. Matrix operations are written as methods that take 2D arrays and return a new 2D array.",
          ar: "المصفوفة الرياضية n × m تقابل new int[n][m] في جافا." },
        { type: 'h', en: 'Matrix addition' },
        { type: 'p', en: "Two matrices can be added only if they have the <b>same dimensions</b>. Each element of the result is the sum of the elements in the same position: <code>c[i][j] = a[i][j] + b[i][j]</code>." },
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
        { type: 'h', en: 'Transpose' },
        { type: 'p', en: "The <b>transpose</b> of a matrix turns rows into columns: <code>t[j][i] = m[i][j]</code>. If <code>m</code> is <i>n</i> × <i>m</i>, its transpose is <i>m</i> × <i>n</i>, so the result is created as <code>new int[m[0].length][m.length]</code>.",
          ar: "المنقول: الصفوف تصبح أعمدة، t[j][i] = m[i][j]." },
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
        { type: 'note', kind: 'exam', en: "To transpose a <b>square</b> matrix in place by swapping <code>m[i][j]</code> and <code>m[j][i]</code>, the inner loop must start at <code>j = i + 1</code>. If it runs over all <code>j</code>, every pair is swapped twice and the matrix ends up unchanged." },
        { type: 'h', en: 'Matrix multiplication' },
        { type: 'p', en: "If <b>A</b> is <i>n</i> × <i>m</i> and <b>B</b> is <i>m</i> × <i>p</i>, the product <b>C</b> = <b>A</b> × <b>B</b> is <i>n</i> × <i>p</i>. The number of <b>columns of A</b> must equal the number of <b>rows of B</b>. Each element is a row of A “times” a column of B: <code>c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j] + … + a[i][m-1]*b[m-1][j]</code>. This needs <b>three</b> nested loops.",
          ar: "شرط الضرب: عدد أعمدة A يساوي عدد صفوف B، والناتج n × p." },
        { type: 'table', head: ['Element', 'Row of A · column of B', 'Value'], rows: [
          ['c[0][0]', '1·7 + 2·10', '27'],
          ['c[1][2]', '3·9 + 4·12', '75'],
          ['c[2][1]', '5·8 + 6·11', '106']
        ] },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int[][] a = {{1, 2}, {3, 4}, {5, 6}};       // 3 x 2
                  int[][] b = {{7, 8, 9}, {10, 11, 12}};     // 2 x 3
                  int[][] c = multiply(a, b);                // 3 x 3
                  for (int[] row : c) {
                      for (int value : row) {
                          System.out.print(value + " ");
                      }
                      System.out.println();
                  }
              }

              public static int[][] multiply(int[][] a, int[][] b) {
                  int n = a.length;
                  int m = b.length;          // must equal a[0].length
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
        { type: 'note', kind: 'warn', en: "Before multiplying, check <code>a[0].length == b.length</code>. Matrix multiplication is <b>not</b> element-by-element: <code>c[i][j] = a[i][j] * b[i][j]</code> is wrong." },
        { type: 'h', en: 'Another application: grading answers' },
        { type: 'p', en: "2D arrays are not only for math. Here each row holds one student's answers to a 4-question quiz, compared with an answer key." },
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
        ` }
      ],
      practice: [
        { t: 'mcq', q: "A is a 2 × 3 matrix and B is a 3 × 4 matrix. What is the size of A × B?",
          options: ['3 × 3', '2 × 4', '4 × 2', 'They cannot be multiplied'], answer: 1,
          explain: "Columns of A (3) equal rows of B (3), and the product has the rows of A and the columns of B: 2 × 4." },
        { t: 'output', q: "What is the output?", code: J`
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
        `, answer: J`
          8 2
          10 16
        `, explain: "c[0][0] = 2·4 + 0·2 = 8, c[0][1] = 2·1 + 0·5 = 2, c[1][0] = 1·4 + 3·2 = 10, c[1][1] = 1·1 + 3·5 = 16." },
        { t: 'fill', q: "Complete the transpose assignment.", code: J`
          int[][] t = new int[m[0].length][m.length];
          for (int i = 0; i < m.length; i++) {
              for (int j = 0; j < m[0].length; j++) {
                  t[___][___] = m[i][j];
              }
          }
        `, answers: ['j', 'i'],
          explain: "Row i, column j of m becomes row j, column i of the transpose." },
        { t: 'mcq', q: "When can two matrices be <b>added</b>?",
          options: ['When the columns of the first equal the rows of the second', 'Only when both are square', 'When they have the same number of rows and the same number of columns', 'Always'], answer: 2,
          explain: "Addition is element by element, so every position must exist in both matrices." },
        { t: 'order', q: "Arrange the loops that compute <code>c = a × b</code> (a is n × m, b is m × p).", lines: [
          'for (int i = 0; i < n; i++) {',
          '    for (int j = 0; j < p; j++) {',
          '        for (int k = 0; k < m; k++) {',
          '            c[i][j] += a[i][k] * b[k][j];',
          '        }',
          '    }',
          '}'
        ], explain: "i chooses the row of the result, j the column, and k walks along row i of a and column j of b." },
        { t: 'code', q: "Read <code>rows</code> and <code>cols</code>, then a matrix of integers of that size. Print its <b>transpose</b>: one row per line, values separated by a single space (no space at the end of a line). No prompts.",
          qAr: "اقرأ مصفوفة واطبع منقولها، كل صف في سطر.",
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
          tests: [
            { stdin: '2 3\n1 2 3\n4 5 6', expected: '1 4\n2 5\n3 6' },
            { stdin: '1 3\n7 8 9', expected: '7\n8\n9' },
            { stdin: '2 2\n1 2\n3 4', expected: '1 3\n2 4' }
          ],
          hint: "The transpose has cols rows and rows columns: new int[cols][rows]. Print a space before every value except the first in a row.",
          explain: "Creating the result with swapped dimensions and assigning t[j][i] = m[i][j] works for any rectangular matrix, not only square ones." }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: "How many elements does <code>int[][] x = new int[2][5];</code> contain?",
      options: ['7', '10', '2', '5'], answer: 1, explain: "2 rows × 5 columns = 10 elements." },
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
    { t: 'mcq', q: "For <code>int[][] p = {{1, 2}, {3, 4}, {5, 6}};</code>, what is <code>p.length</code>?",
      options: ['2', '3', '6', '1'], answer: 1, explain: "p.length is the number of rows (3)." },
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
    { t: 'mcq', q: "Which statement correctly starts creating a ragged array with 3 rows?",
      options: ['<code>int[][] a = new int[][3];</code>', '<code>int[][] a = new int[3][];</code>', '<code>int[][] a = new int[];</code>', '<code>int[3][] a = new int;</code>'], answer: 1,
      explain: "The number of rows must be given; each row is created later with its own length." },
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
    { t: 'mcq', q: "What is the size of the product of a 3 × 2 matrix and a 2 × 2 matrix?",
      options: ['2 × 2', '3 × 2', '2 × 3', 'Not defined'], answer: 1, explain: "n × m times m × p gives n × p: 3 × 2." },
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
    `, answer: '10', explain: "The method changes the shared array: g becomes {{2, 4}, {6, 8}}, and 4 + 6 = 10." },
    { t: 'mcq', q: "For <code>int[][] matrix = new int[4][5];</code>, what is <code>matrix[1]</code>?",
      options: ['The element in row 1, column 1', 'The second row: a 1D array of 5 ints', 'The second column', 'A compile error'], answer: 1,
      explain: "A 2D array is an array of rows; matrix[1] is the row at index 1." },
    { t: 'mcq', q: "Which statement computes one term in the product <code>c = a × b</code> correctly?",
      options: ['<code>c[i][j] += a[i][k] * b[k][j];</code>', '<code>c[i][j] = a[i][j] * b[i][j];</code>', '<code>c[i][j] += a[k][i] * b[j][k];</code>', '<code>c[i][j] += a[i][j] * b[j][i];</code>'], answer: 0,
      explain: "Row i of a is multiplied with column j of b, with k moving along both." }
  ],
  lab: {
    t: 'code',
    q: "<b>Quiz marks table.</b> Read <code>s</code> (students) and <code>q</code> (quizzes), then an s × q table of integer marks (one row per student). Print, with no prompts:<br>• for each student: <code>Student k total: T</code> (k starts at 1)<br>• for each quiz: <code>Quiz k average: A</code> with two decimals (<code>printf</code>, k starts at 1)<br>• finally <code>Top student: k</code> — the student with the highest total (the smallest number if tied).<br>Write at least two methods that take the 2D array as a parameter, e.g. <code>rowTotal(int[][] m, int r)</code> and <code>columnAverage(int[][] m, int c)</code>.",
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
    { code: J`public static int sum(int[][] m)`, note: '2D array parameter' },
    { code: J`c[i][j] = a[i][j] + b[i][j];`, note: 'Matrix addition (same dimensions)' },
    { code: J`t[j][i] = m[i][j];`, note: 'Transpose; t is new int[m[0].length][m.length]' },
    { code: J`c[i][j] += a[i][k] * b[k][j];`, note: 'Matrix multiplication (three nested loops)' }
  ],
  glossary: [
    { term: 'Two-dimensional array', ar: 'مصفوفة ثنائية الأبعاد', def: 'An array of arrays that stores data in rows and columns.' },
    { term: 'Row', ar: 'صف', def: 'A horizontal line of elements; m[i] is row i.' },
    { term: 'Column', ar: 'عمود', def: 'A vertical line of elements: m[0][j], m[1][j], …' },
    { term: 'Nested loops', ar: 'حلقات متداخلة', def: 'A loop inside another loop; used to visit every element of a table.' },
    { term: 'Ragged array', ar: 'مصفوفة غير منتظمة', def: 'A 2D array whose rows have different lengths.' },
    { term: 'Matrix', ar: 'مصفوفة (رياضية)', def: 'A rectangular table of numbers with n rows and m columns.' },
    { term: 'Main diagonal', ar: 'القطر الرئيسي', def: 'The elements m[i][i] of a square matrix.' },
    { term: 'Transpose', ar: 'المنقول', def: 'The matrix obtained by turning rows into columns: t[j][i] = m[i][j].' },
    { term: 'Matrix multiplication', ar: 'ضرب المصفوفات', def: 'C = A × B where c[i][j] is the sum of a[i][k] · b[k][j]; requires columns of A = rows of B.' }
  ]
});
