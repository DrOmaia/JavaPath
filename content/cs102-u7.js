JP.unit({
  course: 'cs102',
  n: 7,
  title: 'Recursion',
  titleAr: 'الاستدعاء الذاتي (التكرار العودي)',
  intro: "A recursive method solves a problem by calling itself on a smaller version of the same problem, until it reaches a case so simple it can answer directly. Many problems (factorials, digit sums, palindromes, searching sorted data, processing nested structures) have short, elegant recursive solutions. In this unit you will learn to design base and recursive cases, trace the call stack by hand, use helper methods, and decide when recursion or a loop is the better tool.",
  introAr: "الدالة العودية تحل المسألة باستدعاء نفسها على نسخة أصغر منها حتى تصل إلى حالة بسيطة تُحل مباشرة. ستتعلم الحالة الأساسية والحالة العودية وتتبع مكدس الاستدعاءات والدوال المساعدة.",
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      title: 'Thinking recursively: base case, recursive case and the call stack',
      titleAr: 'التفكير العودي: الحالة الأساسية والعودية ومكدس الاستدعاءات',
      minutes: 45,
      body: [
        { type: 'h', en: 'What is a recursive method?' },
        { type: 'p', en: "A <b>recursive method</b> is a method that calls itself. Every correct recursive method has two parts:", ar: "الدالة العودية هي دالة تستدعي نفسها، ولها جزءان: حالة أساسية وحالة عودية." },
        { type: 'list', items: [
          "<b>Base case</b> (stopping case): an input small enough to answer directly, without another call.",
          "<b>Recursive case</b>: the method calls itself on a <b>smaller</b> input and uses that result to build its own answer."
        ], ar: "الحالة الأساسية توقف الاستدعاء، والحالة العودية تستدعي الدالة على مدخل أصغر." },
        { type: 'p', en: "The classic example is the factorial: <code>n! = n × (n-1)!</code> and <code>0! = 1</code>. The mathematical definition translates almost word for word into Java." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static long factorial(int n) {
                  if (n == 0) {
                      return 1;                    // base case
                  }
                  return n * factorial(n - 1);     // recursive case
              }

              public static void main(String[] args) {
                  for (int i = 0; i <= 5; i++) {
                      System.out.println(i + "! = " + factorial(i));
                  }
                  System.out.println("20! = " + factorial(20));
              }
          }
        `, out: J`
          0! = 1
          1! = 1
          2! = 2
          3! = 6
          4! = 24
          5! = 120
          20! = 2432902008176640000
        ` },
        { type: 'note', kind: 'tip', en: "We return <code>long</code> because factorials grow very fast: 13! already exceeds the <code>int</code> range, while 20! still fits in a <code>long</code>." },
        { type: 'h', en: 'Tracing the call stack' },
        { type: 'p', en: "Each call gets its own <b>activation record</b> (frame) on the <b>call stack</b>, holding its own copy of <code>n</code>. <code>factorial(3)</code> cannot finish until <code>factorial(2)</code> returns, which waits for <code>factorial(1)</code>, and so on. When the base case returns, the frames are popped one by one, each finishing its multiplication.", ar: "كل استدعاء له إطار خاص في مكدس الاستدعاءات بنسخة خاصة من n، وتُزال الإطارات بالترتيب العكسي عند الرجوع." },
        { type: 'table', head: ['Call', 'Waits for', 'Returns'], rows: [
          ['<code>factorial(3)</code>', '3 * factorial(2)', '3 * 2 = <b>6</b>'],
          ['<code>factorial(2)</code>', '2 * factorial(1)', '2 * 1 = 2'],
          ['<code>factorial(1)</code>', '1 * factorial(0)', '1 * 1 = 1'],
          ['<code>factorial(0)</code>', 'nothing (base case)', '1']
        ] },
        { type: 'p', en: "You can watch the stack grow and shrink by printing before and after the recursive call. Statements <b>before</b> the call run on the way down; statements <b>after</b> it run on the way back up, in reverse order." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void trace(int n) {
                  if (n == 0) {
                      System.out.println("base case");
                      return;
                  }
                  System.out.println("enter " + n);
                  trace(n - 1);
                  System.out.println("leave " + n);
              }

              public static void main(String[] args) {
                  trace(3);
              }
          }
        `, out: J`
          enter 3
          enter 2
          enter 1
          base case
          leave 1
          leave 2
          leave 3
        ` },
        { type: 'note', kind: 'exam', en: "Output questions on recursion often hide a print <b>after</b> the recursive call. Remember: everything after the call is executed in reverse order as the stack unwinds.", ar: "انتبه: الطباعة بعد الاستدعاء العودي تُنفَّذ بترتيب عكسي عند الرجوع." },
        { type: 'h', en: 'When the base case is missing: StackOverflowError' },
        { type: 'p', en: "If a method never reaches a base case, it keeps calling itself and pushing frames until the stack memory runs out. Java then throws <code>StackOverflowError</code>. The same happens if the recursive call does not move <b>toward</b> the base case." },
        { type: 'code', code: J`
          public static long badFactorial(int n) {
              return n * badFactorial(n - 1);   // no base case!
          }
          // badFactorial(5) -> 5, 4, 3, ..., 0, -1, -2, ... -> StackOverflowError

          public static long alsoBad(int n) {
              if (n == 0) return 1;
              return n * alsoBad(n + 1);        // moves AWAY from 0 -> StackOverflowError
          }
        ` },
        { type: 'note', kind: 'warn', en: "Checklist for every recursive method: (1) Is there a base case? (2) Does every recursive call use a smaller input? (3) Will every input eventually reach the base case (think about negative numbers)?", ar: "تأكد من وجود حالة أساسية، وأن كل استدعاء يقترب منها." }
      ],
      practice: [
        { t: 'mcq', q: 'What is the role of the <b>base case</b> in a recursive method?', options: ['It makes the method call itself', 'It stops the recursion by returning a result without a recursive call', 'It speeds up the method', 'It is optional when the input is small'], answer: 1, explain: "The base case is solved directly. Without it the calls never stop and a StackOverflowError occurs.", explainAr: "الحالة الأساسية تُنهي الاستدعاءات العودية." },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void show(int n) {
                  if (n > 0) {
                      show(n - 1);
                      System.out.println(n);
                  }
              }

              public static void main(String[] args) {
                  show(3);
              }
          }
        `, answer: J`
          1
          2
          3
        `, explain: "The print comes after the recursive call, so nothing is printed on the way down. show(1) prints first while unwinding, then show(2), then show(3).", explainAr: "الطباعة بعد الاستدعاء، لذلك تظهر الأرقام عند الرجوع: 1 ثم 2 ثم 3." },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int f(int n) {
                  if (n <= 1) {
                      return 1;
                  }
                  return n + f(n - 2);
              }

              public static void main(String[] args) {
                  System.out.println(f(7));
                  System.out.println(f(6));
              }
          }
        `, answer: J`
          16
          13
        `, explain: "f(7) = 7 + 5 + 3 + f(1) = 7 + 5 + 3 + 1 = 16. f(6) = 6 + 4 + 2 + f(0) = 6 + 4 + 2 + 1 = 13." },
        { t: 'fill', q: 'Complete the recursive factorial method.', code: J`
          public static long factorial(int n) {
              if (n ___ 0) {
                  return 1;
              }
              return n * factorial(___);
          }
        `, answers: ['==', ['n - 1', 'n-1']], explain: "The base case is n == 0, and the recursive call must use the smaller input n - 1." },
        { t: 'order', q: 'Arrange the lines of a recursive method that returns 1 + 2 + … + n.', lines: [
          'public static int sumTo(int n) {',
          '    if (n == 1) {',
          '        return 1;',
          '    }',
          '    return n + sumTo(n - 1);',
          '}'
        ], explain: "Check the base case first; otherwise add n to the sum of the smaller problem 1 + … + (n - 1)." },
        { t: 'mcq', q: 'What happens when <code>count(5)</code> is called?', code: J`
          public static int count(int n) {
              if (n == 0) return 0;
              return 1 + count(n + 1);
          }
        `, options: ['It returns 5', 'It returns 0', 'StackOverflowError', 'Compilation error'], answer: 2, explain: "n grows (6, 7, 8, …) and never reaches the base case 0, so frames pile up until the stack overflows." }
      ]
    },
    // ---------------------------------------------------------------- L2
    {
      title: 'Classic recursive problems: numbers and strings',
      titleAr: 'مسائل عودية كلاسيكية: الأعداد والنصوص',
      minutes: 50,
      body: [
        { type: 'h', en: 'Fibonacci numbers' },
        { type: 'p', en: "The Fibonacci sequence starts 0, 1 and each later term is the sum of the previous two: <code>fib(n) = fib(n-1) + fib(n-2)</code>. This method has <b>two</b> base cases and <b>two</b> recursive calls.", ar: "متتالية فيبوناتشي: كل حد هو مجموع الحدين السابقين، ولها حالتان أساسيتان." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int fib(int n) {
                  if (n == 0) {
                      return 0;
                  }
                  if (n == 1) {
                      return 1;
                  }
                  return fib(n - 1) + fib(n - 2);
              }

              public static void main(String[] args) {
                  String line = "";
                  for (int i = 0; i < 10; i++) {
                      line += fib(i) + " ";
                  }
                  System.out.println(line.trim());
              }
          }
        `, out: J`
          0 1 1 2 3 5 8 13 21 34
        ` },
        { type: 'note', kind: 'warn', en: "Recursive Fibonacci repeats the same work many times: <code>fib(5)</code> already makes 15 calls, and <code>fib(40)</code> makes hundreds of millions. It is a great example for learning, but a loop is far faster here.", ar: "فيبوناتشي العودية تكرر نفس الحسابات كثيراً؛ الحلقة أسرع بكثير." },
        { type: 'h', en: 'Sum of digits and power' },
        { type: 'p', en: "To split a number into digits, use <code>n % 10</code> (last digit) and <code>n / 10</code> (the rest). A number below 10 is its own digit sum. For powers, <code>base<sup>exp</sup> = base × base<sup>exp-1</sup></code> and <code>base<sup>0</sup> = 1</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int sumDigits(int n) {
                  if (n < 10) {
                      return n;
                  }
                  return n % 10 + sumDigits(n / 10);
              }

              public static long power(int base, int exp) {
                  if (exp == 0) {
                      return 1;
                  }
                  return base * power(base, exp - 1);
              }

              public static void main(String[] args) {
                  System.out.println(sumDigits(4096));
                  System.out.println(power(2, 10));
                  System.out.println(power(3, 4));
                  System.out.println(power(5, 0));
              }
          }
        `, out: J`
          19
          1024
          81
          1
        ` },
        { type: 'p', en: "Trace of <code>sumDigits(4096)</code>: 6 + sumDigits(409) → 6 + 9 + sumDigits(40) → 6 + 9 + 0 + sumDigits(4) → 6 + 9 + 0 + 4 = 19." },
        { type: 'h', en: 'Recursion on strings: reverse and palindrome' },
        { type: 'p', en: "A string shrinks naturally with <code>substring</code>. The reverse of a string is the reverse of everything after the first character, followed by that first character. A string is a <b>palindrome</b> if its first and last characters match and the middle part is also a palindrome.", ar: "عكس النص = عكس الباقي ثم الحرف الأول. والنص متناظر إذا تطابق طرفاه وكان وسطه متناظراً." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static String reverse(String s) {
                  if (s.length() <= 1) {
                      return s;
                  }
                  return reverse(s.substring(1)) + s.charAt(0);
              }

              public static boolean isPalindrome(String s) {
                  if (s.length() <= 1) {
                      return true;
                  }
                  if (s.charAt(0) != s.charAt(s.length() - 1)) {
                      return false;
                  }
                  return isPalindrome(s.substring(1, s.length() - 1));
              }

              public static void main(String[] args) {
                  System.out.println(reverse("CS102"));
                  System.out.println(isPalindrome("racecar"));
                  System.out.println(isPalindrome("noon"));
                  System.out.println(isPalindrome("java"));
              }
          }
        `, out: J`
          201SC
          true
          true
          false
        ` },
        { type: 'note', kind: 'exam', en: "Palindromes need a base case for <b>both</b> even and odd lengths. Using <code>s.length() &lt;= 1</code> covers the empty string (even length, e.g. \"noon\" → \"oo\" → \"\") and a single character (odd length, e.g. \"racecar\" → … → \"e\")." }
      ],
      practice: [
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int sumDigits(int n) {
                  if (n < 10) {
                      return n;
                  }
                  return n % 10 + sumDigits(n / 10);
              }

              public static void main(String[] args) {
                  System.out.println(sumDigits(507));
                  System.out.println(sumDigits(9));
                  System.out.println(sumDigits(99999));
              }
          }
        `, answer: J`
          12
          9
          45
        `, explain: "507 → 7 + 0 + 5 = 12. 9 is a single digit (base case). 99999 → 9 × 5 = 45." },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int p(int b, int e) {
                  if (e == 0) {
                      return 1;
                  }
                  return b * p(b, e - 1);
              }

              public static void main(String[] args) {
                  System.out.println(p(3, 3));
                  System.out.println(p(10, 2));
                  System.out.println(p(7, 1));
              }
          }
        `, answer: J`
          27
          100
          7
        `, explain: "p(3, 3) = 3 × 3 × 3 × 1 = 27; p(10, 2) = 10 × 10 × 1 = 100; p(7, 1) = 7 × 1 = 7." },
        { t: 'mcq', q: 'Using <code>fib(0) = 0</code>, <code>fib(1) = 1</code> and <code>fib(n) = fib(n-1) + fib(n-2)</code>, what is <code>fib(7)</code>?', options: ['8', '13', '21', '7'], answer: 1, explain: "The sequence is 0, 1, 1, 2, 3, 5, 8, 13 for n = 0…7, so fib(7) = 13.", explainAr: "الحدود: 0، 1، 1، 2، 3، 5، 8، 13، إذن fib(7) = 13." },
        { t: 'fill', q: 'Complete the recursive digit-sum method.', code: J`
          public static int sumDigits(int n) {
              if (n < 10) {
                  return ___;
              }
              return n % 10 + sumDigits(___);
          }
        `, answers: ['n', ['n / 10', 'n/10']], explain: "A single digit is its own sum. Otherwise add the last digit (n % 10) to the digit sum of the remaining number (n / 10)." },
        { t: 'code', q: "Read one word. Using <b>recursive</b> methods (no loops), print the word reversed on the first line, and <code>true</code> or <code>false</code> on the second line depending on whether the word is a palindrome (case-sensitive). Do not print prompts.", qAr: "اقرأ كلمة واطبع مقلوبها ثم true أو false حسب كونها متناظرة، باستخدام دوال عودية فقط.", starter: J`
          import java.util.*;

          public class Main {
              public static String reverse(String s) {
                  // base case and recursive case
                  return s;
              }

              public static boolean isPalindrome(String s) {
                  // base case(s) and recursive case
                  return false;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String word = in.next();
                  System.out.println(reverse(word));
                  System.out.println(isPalindrome(word));
              }
          }
        `, tests: [
          { stdin: 'radar', expected: J`
            radar
            true
          ` },
          { stdin: 'Riyadh', expected: J`
            hdayiR
            false
          ` },
          { stdin: 'abba', expected: J`
            abba
            true
          ` }
        ], solution: J`
          import java.util.*;

          public class Main {
              public static String reverse(String s) {
                  if (s.length() <= 1) {
                      return s;
                  }
                  return reverse(s.substring(1)) + s.charAt(0);
              }

              public static boolean isPalindrome(String s) {
                  if (s.length() <= 1) {
                      return true;
                  }
                  if (s.charAt(0) != s.charAt(s.length() - 1)) {
                      return false;
                  }
                  return isPalindrome(s.substring(1, s.length() - 1));
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String word = in.next();
                  System.out.println(reverse(word));
                  System.out.println(isPalindrome(word));
              }
          }
        `, hint: "reverse: <code>reverse(s.substring(1)) + s.charAt(0)</code>. isPalindrome: compare the first and last characters, then recurse on <code>s.substring(1, s.length() - 1)</code>.", explain: "Both methods shrink the string by at least one character per call and stop when the length is 0 or 1." }
      ]
    },
    // ---------------------------------------------------------------- L3
    {
      title: 'Recursive helper methods, binary search, and recursion vs iteration',
      titleAr: 'الدوال المساعدة العودية والبحث الثنائي والمقارنة مع الحلقات',
      minutes: 50,
      body: [
        { type: 'h', en: 'Recursive helper methods' },
        { type: 'p', en: "Calling <code>substring</code> on every step creates a new string each time. A more efficient design passes <b>indexes</b> instead. Because the caller should not have to supply those extra parameters, we keep a simple public method and add an overloaded <b>recursive helper method</b> that carries the extra information.", ar: "الدالة المساعدة العودية تأخذ معاملات إضافية (مثل الفهارس) بينما تبقى الدالة العامة بسيطة للمستخدم." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static boolean isPalindrome(String s) {
                  return isPalindrome(s, 0, s.length() - 1);   // start the helper
              }

              private static boolean isPalindrome(String s, int low, int high) {
                  if (low >= high) {
                      return true;                      // met in the middle
                  }
                  if (s.charAt(low) != s.charAt(high)) {
                      return false;
                  }
                  return isPalindrome(s, low + 1, high - 1);
              }

              public static void main(String[] args) {
                  System.out.println(isPalindrome("level"));
                  System.out.println(isPalindrome("madam"));
                  System.out.println(isPalindrome("Madam"));
              }
          }
        `, out: J`
          true
          true
          false
        ` },
        { type: 'p', en: "Helpers are also the natural way to process arrays recursively: pass the array plus the index you are currently looking at." },
        { type: 'code', code: J`
          public static int sum(int[] a) {
              return sum(a, 0);
          }

          private static int sum(int[] a, int index) {
              if (index == a.length) {
                  return 0;                         // no elements left
              }
              return a[index] + sum(a, index + 1);
          }
        ` },
        { type: 'h', en: 'Recursive binary search' },
        { type: 'p', en: "Binary search on a sorted array is naturally recursive: look at the middle element; if it is the key you are done; if the key is smaller, search the left half; otherwise search the right half. The helper receives the current range <code>low..high</code>. When <code>low &gt; high</code> the range is empty and the key is not there.", ar: "البحث الثنائي العودي: قارن بالعنصر الأوسط ثم ابحث في النصف المناسب، ويتوقف عندما يصبح low أكبر من high." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int binarySearch(int[] list, int key) {
                  return binarySearch(list, key, 0, list.length - 1);
              }

              private static int binarySearch(int[] list, int key, int low, int high) {
                  if (low > high) {
                      return -1;                                  // not found
                  }
                  int mid = (low + high) / 2;
                  if (key == list[mid]) {
                      return mid;
                  } else if (key < list[mid]) {
                      return binarySearch(list, key, low, mid - 1);   // left half
                  } else {
                      return binarySearch(list, key, mid + 1, high);  // right half
                  }
              }

              public static void main(String[] args) {
                  int[] ids = {3, 8, 15, 21, 34, 42, 57};
                  System.out.println(binarySearch(ids, 34));
                  System.out.println(binarySearch(ids, 3));
                  System.out.println(binarySearch(ids, 50));
              }
          }
        `, out: J`
          4
          0
          -1
        ` },
        { type: 'table', head: ['Call (key 34)', 'low', 'high', 'mid', 'list[mid]', 'Next'], rows: [
          ['1', '0', '6', '3', '21', '34 &gt; 21 → right half'],
          ['2', '4', '6', '5', '42', '34 &lt; 42 → left half'],
          ['3', '4', '4', '4', '34', 'found → return 4']
        ] },
        { type: 'note', kind: 'exam', en: "Each call halves the range, so a sorted array of 1,000,000 elements needs at most about 20 calls. Do not forget the <code>low &gt; high</code> base case, or a missing key leads to an out-of-range index or infinite recursion." },
        { type: 'h', en: 'Recursion vs iteration' },
        { type: 'p', en: "Any recursive method can be rewritten with a loop, and vice versa. Compare the two factorials:" },
        { type: 'code', code: J`
          // iterative
          public static long factorialLoop(int n) {
              long result = 1;
              for (int i = 2; i <= n; i++) {
                  result *= i;
              }
              return result;
          }

          // recursive
          public static long factorialRec(int n) {
              if (n == 0) return 1;
              return n * factorialRec(n - 1);
          }
        ` },
        { type: 'table', head: ['', 'Recursion', 'Iteration (loops)'], rows: [
          ['Code', 'Often shorter, mirrors the math definition', 'Can be longer for tree-like problems'],
          ['Memory', 'One stack frame per call; deep recursion can cause StackOverflowError', 'Constant extra memory'],
          ['Speed', 'Extra cost per method call; may repeat work (fib)', 'Usually faster'],
          ['Best for', 'Naturally recursive problems: binary search, directory trees, Towers of Hanoi', 'Simple counting and accumulating']
        ] },
        { type: 'note', kind: 'tip', en: "Choose recursion when it makes the solution clearly simpler and the depth is small (like binary search). Choose a loop when a simple counter does the job, or when the input could be very large.", ar: "استخدم العودية عندما تبسّط الحل وعمقها صغير، واستخدم الحلقة للمسائل البسيطة أو المدخلات الكبيرة." }
      ],
      practice: [
        { t: 'output', q: 'This version of binary search prints its range on every call. What does the program print?', code: J`
          public class Main {
              public static int search(int[] a, int key, int low, int high) {
                  System.out.println(low + " " + high);
                  if (low > high) {
                      return -1;
                  }
                  int mid = (low + high) / 2;
                  if (a[mid] == key) {
                      return mid;
                  }
                  if (key < a[mid]) {
                      return search(a, key, low, mid - 1);
                  }
                  return search(a, key, mid + 1, high);
              }

              public static void main(String[] args) {
                  int[] a = {2, 5, 9, 14, 20, 27};
                  System.out.println(search(a, 20, 0, 5));
              }
          }
        `, answer: J`
          0 5
          3 5
          4
        `, explain: "First call: range 0..5, mid = 2 (value 9); 20 &gt; 9 so search 3..5. Second call: mid = 4 (value 20), found, so 4 is returned and printed by main.", explainAr: "الاستدعاء الأول 0..5 والوسط 9، ثم 3..5 والوسط 20 فيُرجع 4." },
        { t: 'mcq', q: 'Why do we write recursive <b>helper</b> methods such as <code>isPalindrome(s, low, high)</code>?', options: ['Because public methods cannot be recursive', 'To carry extra parameters (like indexes) while keeping a simple method for the caller', 'Because helper methods never need a base case', 'To avoid using the call stack'], answer: 1, explain: "The helper holds the state of the recursion (indexes, accumulated values). The public method simply starts it with the right initial values." },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int countEven(int[] a, int i) {
                  if (i == a.length) {
                      return 0;
                  }
                  int add = (a[i] % 2 == 0) ? 1 : 0;
                  return add + countEven(a, i + 1);
              }

              public static int sum(int[] a, int i) {
                  if (i == a.length) {
                      return 0;
                  }
                  return a[i] + sum(a, i + 1);
              }

              public static void main(String[] args) {
                  int[] data = {4, 7, 10, 3, 8};
                  System.out.println(countEven(data, 0));
                  System.out.println(sum(data, 0));
              }
          }
        `, answer: J`
          3
          32
        `, explain: "The even values are 4, 10 and 8 (3 of them). The sum is 4 + 7 + 10 + 3 + 8 = 32. Both helpers stop when the index reaches the array length." },
        { t: 'fill', q: 'Complete the recursive binary search helper.', code: J`
          private static int bs(int[] list, int key, int low, int high) {
              if (low ___ high) {
                  return -1;
              }
              int mid = (low + high) ___ 2;
              if (key == list[mid]) return mid;
              if (key < list[mid]) return bs(list, key, low, ___);
              return bs(list, key, ___, high);
          }
        `, answers: ['>', '/', ['mid - 1', 'mid-1'], ['mid + 1', 'mid+1']], explain: "The range is empty when low &gt; high. The middle index is (low + high) / 2. The left half ends at mid - 1 and the right half starts at mid + 1, so mid itself is never searched twice." },
        { t: 'mcq', q: 'Which statement about recursion versus iteration is <b>true</b>?', options: ['Recursion always runs faster than a loop', 'Some problems can only be solved with recursion', 'Each recursive call uses stack memory, so very deep recursion may cause StackOverflowError', 'Loops cannot be used to compute factorials'], answer: 2, explain: "Every recursive solution can be converted into an iterative one. Recursion's cost is a stack frame per call, which limits the depth." }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'Which two parts must every correct recursive method have?', options: ['A loop and a return statement', 'A base case and a recursive case that moves toward it', 'A static variable and a helper method', 'Two recursive calls'], answer: 1, explain: "Without a base case or without progress toward it, recursion never stops." },
    { t: 'output', q: 'What does this program print?', code: J`
      public class Main {
          public static void m(int n) {
              if (n == 0) {
                  return;
              }
              System.out.println("A" + n);
              m(n - 1);
              System.out.println("B" + n);
          }

          public static void main(String[] args) {
              m(2);
          }
      }
    `, answer: J`
      A2
      A1
      B1
      B2
    `, explain: "\"A\" lines print on the way down (2, 1); \"B\" lines print while the stack unwinds, in reverse order (1, 2)." },
    { t: 'output', q: 'What does this program print?', code: J`
      public class Main {
          public static int mystery(int n) {
              if (n < 10) {
                  return 1;
              }
              return 1 + mystery(n / 10);
          }

          public static void main(String[] args) {
              System.out.println(mystery(7));
              System.out.println(mystery(2026));
          }
      }
    `, answer: J`
      1
      4
    `, explain: "mystery counts digits: 2026 → 202 → 20 → 2, adding 1 at each of the three recursive steps plus 1 for the base case = 4." },
    { t: 'mcq', q: 'What happens when <code>f(3)</code> is called?', code: J`
      public static int f(int n) {
          return n + f(n - 1);
      }
    `, options: ['It returns 6', 'It returns 3', 'It throws StackOverflowError', 'It does not compile'], answer: 2, explain: "There is no base case, so f keeps calling itself (3, 2, 1, 0, -1, …) until the call stack overflows." },
    { t: 'output', q: 'What does this program print?', code: J`
      public class Main {
          public static String rev(String s) {
              if (s.isEmpty()) {
                  return "";
              }
              return rev(s.substring(1)) + s.charAt(0);
          }

          public static void main(String[] args) {
              System.out.println(rev("JAV"));
              System.out.println(rev("ab") + rev("cd"));
          }
      }
    `, answer: J`
      VAJ
      badc
    `, explain: "rev(\"JAV\") = rev(\"AV\") + 'J' = (rev(\"V\") + 'A') + 'J' = \"VAJ\". rev(\"ab\") is \"ba\" and rev(\"cd\") is \"dc\"." },
    { t: 'output', q: 'What does this program print?', code: J`
      public class Main {
          public static int g(int n) {
              if (n <= 1) {
                  return n;
              }
              return g(n - 1) + g(n - 2);
          }

          public static void main(String[] args) {
              System.out.println(g(6));
              System.out.println(g(1) + g(0));
          }
      }
    `, answer: J`
      8
      1
      `, explain: "g is Fibonacci: 0, 1, 1, 2, 3, 5, 8, so g(6) = 8. g(1) + g(0) = 1 + 0 = 1." },
    { t: 'mcq', q: 'A recursive binary search is called on the sorted array <code>{1, 4, 6, 9, 12}</code> with key 12 and range 0..4. Which <code>mid</code> values are examined, in order?', options: ['2, 3, 4', '2, 4', '0, 1, 2, 3, 4', '4'], answer: 0, explain: "mid = (0 + 4) / 2 = 2 (value 6); 12 &gt; 6 so the range becomes 3..4 and mid = (3 + 4) / 2 = 3 (value 9, integer division); 12 &gt; 9 so the range becomes 4..4 and mid = 4, where 12 is found." },
    { t: 'mcq', q: 'Why is the simple recursive Fibonacci method slow for large n?', options: ['Because of integer division', 'Because it solves the same subproblems again and again', 'Because Java does not support recursion well', 'Because it has no base case'], answer: 1, explain: "fib(n) calls fib(n-1) and fib(n-2), and both of those recompute many of the same values; the number of calls grows exponentially." },
    { t: 'output', q: 'What does this program print?', code: J`
      public class Main {
          public static int product(int[] a, int i) {
              if (i == a.length) {
                  return 1;
              }
              return a[i] * product(a, i + 1);
          }

          public static void main(String[] args) {
              int[] a = {2, 3, 5};
              System.out.println(product(a, 0));
              System.out.println(product(a, 2));
              System.out.println(product(a, 3));
          }
      }
    `, answer: J`
      30
      5
      1
    `, explain: "From index 0: 2 × 3 × 5 × 1 = 30. From index 2: 5 × 1 = 5. Index 3 equals the length, so the base case returns 1." }
  ],
  lab: {
    t: 'code',
    q: "<b>Recursive number toolkit.</b> Read one non-negative integer <code>n</code>. Using <b>recursive</b> methods only (no loops), print three lines:<br><code>Sum of digits: </code> + the sum of the digits of n<br><code>Reversed: </code> + the digits of n in reverse order (as text, e.g. 120 → 021)<br><code>Binary: </code> + n written in base 2<br>Do not print prompts.",
    qAr: "اقرأ عدداً غير سالب واطبع مجموع أرقامه، وأرقامه معكوسة، وتمثيله الثنائي، باستخدام دوال عودية فقط.",
    starter: J`
      import java.util.*;

      public class Main {
          public static int sumDigits(int n) {
              // base case: one digit
              return 0;
          }

          public static String reverseDigits(int n) {
              // last digit followed by the reverse of the rest
              return "";
          }

          public static String toBinary(int n) {
              // binary of n / 2 followed by n % 2
              return "";
          }

          public static void main(String[] args) {
              Scanner in = new Scanner(System.in);
              int n = in.nextInt();
              System.out.println("Sum of digits: " + sumDigits(n));
              System.out.println("Reversed: " + reverseDigits(n));
              System.out.println("Binary: " + toBinary(n));
          }
      }
    `,
    tests: [
      { stdin: '13', expected: J`
        Sum of digits: 4
        Reversed: 31
        Binary: 1101
      ` },
      { stdin: '2026', expected: J`
        Sum of digits: 10
        Reversed: 6202
        Binary: 11111101010
      ` },
      { stdin: '0', expected: J`
        Sum of digits: 0
        Reversed: 0
        Binary: 0
      ` }
    ],
    solution: J`
      import java.util.*;

      public class Main {
          public static int sumDigits(int n) {
              if (n < 10) {
                  return n;
              }
              return n % 10 + sumDigits(n / 10);
          }

          public static String reverseDigits(int n) {
              if (n < 10) {
                  return "" + n;
              }
              return (n % 10) + reverseDigits(n / 10);
          }

          public static String toBinary(int n) {
              if (n < 2) {
                  return "" + n;
              }
              return toBinary(n / 2) + (n % 2);
          }

          public static void main(String[] args) {
              Scanner in = new Scanner(System.in);
              int n = in.nextInt();
              System.out.println("Sum of digits: " + sumDigits(n));
              System.out.println("Reversed: " + reverseDigits(n));
              System.out.println("Binary: " + toBinary(n));
          }
      }
    `,
    hint: "All three methods share the same base case idea (a single digit, or n &lt; 2 for binary) and shrink n with <code>n / 10</code> or <code>n / 2</code>. Build Strings with <code>\"\" + n</code>.",
    explain: "Each method peels off one digit (n % 10 or n % 2) and recurses on the rest (n / 10 or n / 2). For binary, the remainder of the last division is the rightmost bit, so it is appended after the recursive result."
  },
  cheats: [
    { code: J`if (base case) return answer; return combine(smaller call);`, note: 'Shape of every recursive method' },
    { code: J`long factorial(int n) { if (n == 0) return 1; return n * factorial(n - 1); }`, note: 'Factorial' },
    { code: J`int fib(int n) { if (n <= 1) return n; return fib(n - 1) + fib(n - 2); }`, note: 'Fibonacci (two base cases, two calls; slow)' },
    { code: J`int sumDigits(int n) { if (n < 10) return n; return n % 10 + sumDigits(n / 10); }`, note: 'Peel digits with % 10 and / 10' },
    { code: J`String reverse(String s) { if (s.length() <= 1) return s; return reverse(s.substring(1)) + s.charAt(0); }`, note: 'Reverse a string' },
    { code: J`boolean pal(String s, int lo, int hi) { if (lo >= hi) return true; ... pal(s, lo + 1, hi - 1); }`, note: 'Helper method with index parameters' },
    { code: J`if (low > high) return -1; int mid = (low + high) / 2;`, note: 'Recursive binary search: base case and middle' },
    { code: J`StackOverflowError`, note: 'Missing base case or calls that do not approach it' }
  ],
  glossary: [
    { term: 'Recursive method', ar: 'دالة عودية', def: 'A method that calls itself, directly or indirectly.' },
    { term: 'Base case', ar: 'الحالة الأساسية', def: 'The simplest input, answered directly without another recursive call; it stops the recursion.' },
    { term: 'Recursive case', ar: 'الحالة العودية', def: 'The part of a recursive method that calls itself on a smaller problem.' },
    { term: 'Call stack', ar: 'مكدس الاستدعاءات', def: 'The memory area where each active method call keeps its own frame with parameters and local variables.' },
    { term: 'Activation record', ar: 'سجل التنشيط (إطار)', def: 'The frame pushed on the call stack for one method call.' },
    { term: 'StackOverflowError', ar: 'خطأ فيضان المكدس', def: 'The error thrown when recursion is too deep (often because the base case is never reached).' },
    { term: 'Recursive helper method', ar: 'دالة مساعدة عودية', def: 'An overloaded method with extra parameters (such as indexes) that does the actual recursion.' },
    { term: 'Palindrome', ar: 'كلمة متناظرة', def: 'A string that reads the same forwards and backwards, such as "level".' },
    { term: 'Iteration', ar: 'التكرار بالحلقات', def: 'Repeating work using loops (for, while) instead of recursive calls.' }
  ]
});
