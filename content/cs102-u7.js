JP.unit({
  course: 'cs102',
  key: 7,
  n: 9,
  title: 'Recursion',
  titleAr: 'الاستدعاء الذاتي (التكرار العودي)',
  intro: 'A recursive method solves a problem by calling itself on a smaller copy of the same problem, until the problem is so small that the answer is obvious. In this unit you learn the two parts of every recursive method, how to follow the call stack step by step with memory pictures, and how to use recursion for factorials, digits, Fibonacci numbers, strings, arrays, binary search, printing patterns, the GCD, binary numbers, the Tower of Hanoi and permutations.',
  introAr: 'الدالة العودية تحل المسألة باستدعاء نفسها على نسخة أصغر منها حتى تصبح الإجابة واضحة. ستتعلم جزأي الدالة العودية، وكيف تتتبع مكدس الاستدعاءات خطوة بخطوة بصور الذاكرة، ثم تطبقها على مسائل كلاسيكية مثل المصفوفات والأنماط وبرج هانوي والتباديل.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      title: 'What is recursion? Base case and recursive case',
      titleAr: 'ما هو الاستدعاء الذاتي؟ الحالة الأساسية والحالة العودية',
      minutes: 35,
      body: [
        { type: 'h', en: 'A method that calls itself' },
        { type: 'p', en: 'Until now, a method called <i>other</i> methods. In this unit, a method calls <b>itself</b>. This sounds strange, but it is a natural way to solve problems that contain a smaller copy of themselves, like counting down: "to count down from 3, say 3, then count down from 2".', ar: 'الدالة العودية هي دالة تستدعي نفسها.' },
        { type: 'p', en: 'Why learn this? Many things around you are made of smaller copies of themselves. A folder on your laptop holds other folders, and they hold more folders. A big gift box can hold a smaller gift box, which holds an even smaller one. A staircase of 10 stairs is one stair plus a staircase of 9 stairs. For problems like these, recursion lets you write the work for <b>one small step</b> and lets the method repeat itself for the rest. The word <b>recursion</b> means "coming back to the same thing again".', ar: 'العودية مفيدة عندما تتكون المسألة من نسخة أصغر منها، مثل مجلد داخل مجلد.' },
        { type: 'analogy', title: 'Russian dolls', en: 'Open a Russian doll and you find a smaller doll. Open it, and there is an even smaller one. You keep opening until you reach the tiny doll that does not open. Recursion is the same: each call opens a smaller problem until the smallest one.', ar: 'مثل الدمى الروسية: كل دمية تحوي دمية أصغر حتى نصل إلى أصغر دمية.' },
        { type: 'analogy', title: 'Climbing the stairs', en: 'You stand at the bottom of the stairs in the college building. How do you climb 5 stairs? Climb <b>one</b> stair, then climb the 4 stairs that are left, in exactly the same way. How do you climb 0 stairs? You do nothing: you are already at the top. That last sentence is the base case. "Climb one, then climb the rest" is the recursive case.', ar: 'لصعود 5 درجات: اصعد درجة واحدة ثم اصعد الأربع الباقية بالطريقة نفسها. وعندما لا تبقى درجات تكون قد وصلت.' },
        { type: 'p', en: 'Every recursive method needs <b>two parts</b>:' },
        { type: 'list', items: [
          '<b>Base case</b>: the smallest problem. The method answers directly and does <b>not</b> call itself. It is the tiny doll.',
          '<b>Recursive case</b>: the method calls itself with a <b>smaller</b> input. It is opening the next doll.'
        ], ar: 'الحالة الأساسية توقف الاستدعاء، والحالة العودية تستدعي الدالة بمدخل أصغر.' },
        { type: 'check', q: 'In the stairs picture, what is the <b>base case</b>?', options: ['Climbing one stair', 'Having 0 stairs left', 'Having 5 stairs left', 'Walking back down'], answer: 1, explain: 'With 0 stairs left there is nothing to do: you answer directly. That is the base case. Climbing one stair and then the rest is the recursive case.' },
        { type: 'h', en: 'Our first recursive method: countdown' },
        { type: 'p', en: 'Remember: a <code>static</code> method inside <code>Main</code> can be called from <code>main</code> by its name. This one counts down and, at 0, says "Go!".' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void countdown(int n) {
                  if (n == 0) {
                      System.out.println("Go!");
                      return;
                  }
                  System.out.println(n);
                  countdown(n - 1);
              }

              public static void main(String[] args) {
                  countdown(3);
              }
          }
        `, out: J`
          3
          2
          1
          Go!
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['if (n == 0) {', 'This is the BASE CASE. When n is 0 we stop.'],
          ['System.out.println("Go!"); return;', 'Answer directly, then leave the method. No new call.'],
          ['System.out.println(n);', 'Otherwise: print the current number.'],
          ['countdown(n - 1);', 'The RECURSIVE CASE. Call the same method with a smaller number (n - 1).']
        ], ar: 'نتوقف عندما n تساوي 0، وإلا نطبع n ثم نستدعي countdown(n - 1).' },
        { type: 'p', en: 'Let us follow <code>countdown(3)</code> slowly. Each row of the table is one call of the method. Read the rows from top to bottom, exactly as Java runs them.' },
        { type: 'table', head: ['Call', 'Value of n', 'Is n == 0?', 'What it prints', 'What it does next'], rows: [
          ['1st', '3', 'no', '3', 'calls countdown(2)'],
          ['2nd', '2', 'no', '2', 'calls countdown(1)'],
          ['3rd', '1', 'no', '1', 'calls countdown(0)'],
          ['4th', '0', '<b>yes</b>', 'Go!', 'returns: no more calls']
        ] },
        { type: 'p', en: 'Notice that every call has its <b>own</b> n. While the second call runs with n = 2, the first call still has its n = 3. Java keeps them in separate boxes. The memory picture below shows these boxes for <code>countdown(2)</code>. Press <b>Next</b> to watch a new box appear for every call and disappear when that call finishes. Lesson 2 explains these boxes in detail.', ar: 'لكل استدعاء نسخة خاصة به من n، تُحفظ في صندوق مستقل.' },
        { type: 'memory', title: 'One box for every call of countdown(2)', en: 'Each box holds the n of one call. The newest box is at the bottom of the list.', frames: [
          { label: 'main calls <code>countdown(2)</code>. Call 1 gets its own n = 2. The test n == 0 is false, so it prints <b>2</b>.', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }] },
          { label: 'Call 1 runs <code>countdown(n - 1)</code>, so call 2 starts with a new n = 1 and prints <b>1</b>. Call 1 is still waiting.', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }, { name: 'n (call 2)', type: 'int', value: '1' }] },
          { label: 'Call 2 runs <code>countdown(0)</code>. In call 3, n == 0 is true: the base case prints <b>Go!</b>', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }, { name: 'n (call 2)', type: 'int', value: '1' }, { name: 'n (call 3)', type: 'int', value: '0' }] },
          { label: 'Call 3 runs <code>return;</code> and its box is removed.', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }, { name: 'n (call 2)', type: 'int', value: '1' }] },
          { label: 'Call 2 has no more lines after its recursive call, so it ends too.', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }] },
          { label: 'Call 1 ends. All boxes are gone and Java goes back to main. The output was 2, 1, Go!', vars: [] }
        ], ar: 'يظهر صندوق جديد مع كل استدعاء، ويختفي عندما ينتهي ذلك الاستدعاء.' },
        { type: 'check', q: 'In <code>countdown</code>, which line is the recursive call?', options: ['if (n == 0)', 'System.out.println(n);', 'countdown(n - 1);', 'return;'], answer: 2, explain: 'The recursive call is the line where the method calls itself: countdown(n - 1).' },
        { type: 'h', en: 'A second example: printing stars' },
        { type: 'p', en: 'To print 5 stars: print 1 star, then print 4 stars. To print 0 stars: do nothing. Notice that the base case may simply do nothing.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void stars(int n) {
                  if (n == 0) {
                      return;
                  }
                  System.out.print("*");
                  stars(n - 1);
              }

              public static void main(String[] args) {
                  stars(5);
                  System.out.println();
              }
          }
        `, out: '*****' },
        { type: 'lines', rows: [
          ['if (n == 0) { return; }', 'Nothing left to print: stop.'],
          ['System.out.print("*");', 'Print one star (no new line).'],
          ['stars(n - 1);', 'Print the other n - 1 stars the same way.']
        ], ar: 'نطبع نجمة واحدة ثم نطلب طباعة الباقي.' },
        { type: 'check', q: 'How many stars does <code>stars(3)</code> print?', options: ['0', '2', '3', '4'], answer: 2, explain: 'stars(3) prints 1, then stars(2) prints 1, then stars(1) prints 1, then stars(0) stops: 3 stars.' },
        { type: 'note', kind: 'tip', en: 'Two questions to ask about any recursive method: (1) What is the base case? (2) Does every recursive call get <b>closer</b> to the base case?', ar: 'اسأل: ما الحالة الأساسية؟ وهل كل استدعاء يقترب منها؟' },
        { type: 'h', en: 'A method with two parameters' },
        { type: 'p', en: 'Sometimes a recursive method needs more than one piece of information. Suppose you want to print the greeting "Salam" 3 times. The method needs the <b>word</b> and the <b>number of times</b>. Only the number gets smaller. The word stays the same in every call.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void repeat(String word, int times) {
                  if (times == 0) {
                      return;
                  }
                  System.out.println(word);
                  repeat(word, times - 1);
              }

              public static void main(String[] args) {
                  repeat("Salam", 3);
              }
          }
        `, out: J`
          Salam
          Salam
          Salam
        ` },
        { type: 'lines', rows: [
          ['repeat(String word, int times)', 'Two parameters: the word to print and how many times are still left.'],
          ['if (times == 0) { return; }', 'BASE CASE: no times left, so stop.'],
          ['System.out.println(word);', 'Our own small job: print the word once.'],
          ['repeat(word, times - 1);', 'The SAME word, but one time fewer. Only <code>times</code> gets smaller.']
        ], ar: 'الكلمة تبقى كما هي، والعدد ينقص بمقدار 1 في كل استدعاء.' },
        { type: 'check', q: 'What does <code>repeat("Hi", 0)</code> print?', options: ['Hi', 'Hi two times', 'Nothing', 'An error'], answer: 2, explain: 'times is 0, so the base case runs at once and returns. Nothing is printed.' },
        { type: 'h', en: 'Three questions to design a recursive method' },
        { type: 'p', en: 'When you write a new recursive method, do not try to imagine all the calls at once. That is too much for anyone. Instead, answer three small questions, one at a time:' },
        { type: 'list', items: [
          '<b>1. What is the smallest problem?</b> Its answer is the base case. (0 stairs: do nothing.)',
          '<b>2. How do I make the problem a little smaller?</b> Usually <code>n - 1</code>, a shorter String or the next index.',
          '<b>3. If the smaller problem were already solved, what is left for me to do?</b> Do that one piece of work (climb one stair, print one star) and call the method for the rest.'
        ], ar: 'ثلاثة أسئلة: ما أصغر مسألة؟ كيف أصغّرها؟ وما العمل الصغير الباقي لي؟' },
        { type: 'analogy', title: 'Trust the next person', en: 'In a line of students passing boxes of books to the library, you do not carry every box to the shelf. You pass your box one step and trust the next student to do the same. In recursion you write only your own small step and <b>trust</b> the smaller call to do the rest correctly.', ar: 'اكتب خطوتك الصغيرة فقط وثق بأن الاستدعاء الأصغر سيكمل الباقي.' },
        { type: 'steps', title: 'Worked example: rocket countdown', problem: 'Read a number n and print a countdown from n to 1, then "Lift off!".', steps: [
          { en: 'Write the base case: when n is 0, print the final message and stop.', code: J`
            if (n == 0) {
                System.out.println("Lift off!");
                return;
            }
          ` },
          { en: 'Write the recursive case: print n, then count down from n - 1.', code: J`
            System.out.println(n);
            countdown(n - 1);
          ` },
          { en: 'In main, read n and make the first call.', code: J`
            Scanner in = new Scanner(System.in);
            int n = in.nextInt();
            countdown(n);
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void countdown(int n) {
                  if (n == 0) {
                      System.out.println("Lift off!");
                      return;
                  }
                  System.out.println(n);
                  countdown(n - 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  countdown(n);
              }
          }
        `, stdin: '4', out: J`
          4
          3
          2
          1
          Lift off!
        `, ar: 'الحالة الأساسية أولاً ثم الحالة العودية.' },
        { type: 'steps', title: 'Worked example: climbing the stairs', problem: 'Read the number of stairs. For every stair print "Climb one stair, X left", where X is the number of stairs still left after it. At the end print "At the top!".', steps: [
          { en: 'Question 1, the smallest problem: 0 stairs left. Then we are at the top, so we print the message and stop.', code: J`
            if (left == 0) {
                System.out.println("At the top!");
                return;
            }
          ` },
          { en: 'Question 2, a smaller problem: one stair fewer, so the next call gets <code>left - 1</code>.' },
          { en: 'Question 3, our own small job: climb one stair and say how many are left after it. Then trust the call to climb the rest.', code: J`
            System.out.println("Climb one stair, " + (left - 1) + " left");
            climb(left - 1);
          ` },
          { en: 'In main, read the number of stairs and make the first call. For 3 stairs, the calls are climb(3), climb(2), climb(1) and climb(0).', code: J`
            Scanner in = new Scanner(System.in);
            climb(in.nextInt());
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void climb(int left) {
                  if (left == 0) {
                      System.out.println("At the top!");
                      return;
                  }
                  System.out.println("Climb one stair, " + (left - 1) + " left");
                  climb(left - 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  climb(in.nextInt());
              }
          }
        `, stdin: '3', out: J`
          Climb one stair, 2 left
          Climb one stair, 1 left
          Climb one stair, 0 left
          At the top!
        `, ar: 'أجبنا عن الأسئلة الثلاثة ثم كتبنا البرنامج كاملاً.' },
        { type: 'note', kind: 'exam', en: 'Exam tip: when a question asks "what does this print?", do not guess. Write one row per call on paper, like the table above: the value of n, what it prints, and which call comes next.', ar: 'في الاختبار: اكتب{{g:|ي}} سطراً لكل استدعاء ولا تخمّن{{g:|ي}}.' }
      ],
      mistakes: [
        { title: 'No base case', en: 'The method never stops. (Lesson 4 shows what happens.)', code: J`
          static void countdown(int n) {
              System.out.println(n);
              countdown(n - 1);
          }
        ` },
        { title: 'Calling with the same number', en: 'If the input does not get smaller, you never reach the base case.', code: 'countdown(n);   // same n again' },
        { title: 'Forgetting return in the base case', en: 'Without return, the code below the if still runs and calls itself again.', code: J`
          if (n == 0) {
              System.out.println("Go!");
          }
          System.out.println(n);
          countdown(n - 1);
        ` },
        { title: 'Checking the base case too late', en: 'The base case must come <b>before</b> the recursive call. Here the method calls itself first, so the check below is never reached.', code: J`
          static void countdown(int n) {
              System.out.println(n);
              countdown(n - 1);
              if (n == 0) return;   // too late
          }
        ` }
      ],
      remember: [
        'A recursive method calls itself.',
        'The <b>base case</b> stops the recursion without a new call.',
        'The <b>recursive case</b> calls the method with a smaller input.',
        'Every call must move closer to the base case.',
        'Check the base case first, then write the recursive call.',
        'Each call has its <b>own</b> copy of its parameters (its own n).'
      ],
      rememberAr: 'الدالة العودية تستدعي نفسها. الحالة الأساسية توقفها، والحالة العودية تستدعيها بمدخل أصغر، ويجب أن يقترب كل استدعاء من الحالة الأساسية. ولكل استدعاء نسخته الخاصة من n.',
      practice: [
        { t: 'mcq', q: 'What is the role of the <b>base case</b>?', options: ['It makes the method call itself', 'It stops the recursion by answering directly', 'It makes the method faster', 'It is optional for small inputs'], answer: 1, explain: 'The base case is the smallest problem. Without it the calls never stop.', explainAr: 'الحالة الأساسية تنهي الاستدعاءات.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void countdown(int n) {
                  if (n == 0) {
                      System.out.println("Go!");
                      return;
                  }
                  System.out.println(n);
                  countdown(n - 1);
              }

              public static void main(String[] args) {
                  countdown(2);
              }
          }
        `, answer: J`
          2
          1
          Go!
        `, explain: 'countdown(2) prints 2, countdown(1) prints 1, countdown(0) prints Go!.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void stars(int n) {
                  if (n == 0) {
                      return;
                  }
                  System.out.print("*");
                  stars(n - 1);
              }

              public static void main(String[] args) {
                  stars(3);
                  System.out.println();
              }
          }
        `, answer: '***', explain: 'Three calls each print one star, then stars(0) stops.' },
        { t: 'fill', q: 'Complete the recursive method that prints n, n-1, ..., 1.', code: J`
          public static void down(int n) {
              if (n ___ 0) {
                  return;
              }
              System.out.println(n);
              down(___);
          }
        `, answers: ['==', ['n - 1', 'n-1']], explain: 'The base case is n == 0, and the call must use the smaller number n - 1.' },
        { t: 'order', q: 'Put the lines of the method in order.', lines: [
          'public static void down(int n) {',
          '    if (n == 0) {',
          '        return;',
          '    }',
          '    System.out.println(n);',
          '    down(n - 1);',
          '}'
        ], explain: 'Base case first, then the work, then the recursive call.' },
        { t: 'code', q: 'Write a recursive method <code>down(int n)</code> that prints the numbers from n down to 1, one per line. In <code>main</code> read n and call it. No prompts.', qAr: 'اكتب دالة عودية تطبع الأعداد من n إلى 1.', starter: J`
          import java.util.*;

          public class Main {
              public static void down(int n) {
                  // base case and recursive case
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  down(n);
              }
          }
        `, tests: [{ stdin: '3', expected: J`
          3
          2
          1
        ` }, { stdin: '1', expected: '1' }], solution: J`
          import java.util.*;

          public class Main {
              public static void down(int n) {
                  if (n == 0) {
                      return;
                  }
                  System.out.println(n);
                  down(n - 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  down(n);
              }
          }
        `, hint: 'If n is 0, return. Otherwise print n and call down(n - 1).', explain: 'Print first, then recurse on the smaller number.' },
        { t: 'bug', q: 'This program should print 3 stars, but it never stops and ends with an error. Tap the line with the bug.', qAr: 'البرنامج لا يتوقف. أين الخطأ؟', code: J`
          public class Main {
              public static void stars(int n) {
                  if (n == 0) {
                      return;
                  }
                  System.out.print("*");
                  stars(n);
              }

              public static void main(String[] args) {
                  stars(3);
              }
          }
        `, bug: 7, fix: J`
          public class Main {
              public static void stars(int n) {
                  if (n == 0) {
                      return;
                  }
                  System.out.print("*");
                  stars(n - 1);
              }

              public static void main(String[] args) {
                  stars(3);
              }
          }
        `, hint: 'Does every call get closer to the base case n == 0?', explain: 'Line 7 calls stars(n) with the same n. The problem never gets smaller, so n == 0 is never true. The program prints stars again and again until the calls fill the memory and Java stops with StackOverflowError. Calling stars(n - 1) makes each call one star smaller, so the fourth call reaches 0 and stops.', explainAr: 'الاستدعاء بنفس n لا يقترب من الحالة الأساسية. الحل: stars(n - 1).' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void repeat(String word, int times) {
                  if (times == 0) {
                      return;
                  }
                  System.out.println(word);
                  repeat(word, times - 1);
              }

              public static void main(String[] args) {
                  repeat("Hi", 2);
                  repeat("Bye", 1);
              }
          }
        `, answer: J`
          Hi
          Hi
          Bye
        `, explain: 'repeat("Hi", 2) prints Hi, then repeat("Hi", 1) prints Hi, then repeat("Hi", 0) stops. After that, repeat("Bye", 1) prints Bye once.' },
        { t: 'code', q: 'Read a word and then a whole number n. Write a recursive method <code>repeat(String word, int times)</code> that prints the word <code>times</code> times, one per line. No loops and no prompts.', qAr: 'اكتب دالة عودية تطبع الكلمة عدداً من المرات.', starter: J`
          import java.util.*;

          public class Main {
              public static void repeat(String word, int times) {
                  // base case: no times left
                  // recursive case: print once, then repeat the rest
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String word = in.next();
                  int n = in.nextInt();
                  repeat(word, n);
              }
          }
        `, tests: [{ stdin: 'Salam 3', expected: J`
          Salam
          Salam
          Salam
        ` }, { stdin: 'Java 1', expected: 'Java' }], solution: J`
          import java.util.*;

          public class Main {
              public static void repeat(String word, int times) {
                  if (times == 0) {
                      return;
                  }
                  System.out.println(word);
                  repeat(word, times - 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String word = in.next();
                  int n = in.nextInt();
                  repeat(word, n);
              }
          }
        `, hint: 'if (times == 0) return; then print the word and call repeat(word, times - 1).', explain: 'The word stays the same in every call; only times gets smaller, so the calls stop when times reaches 0.' }
      ]
    },
    // ---------------------------------------------------------------- L2
    {
      title: 'The call stack: what happens on the way down and up',
      titleAr: 'مكدس الاستدعاءات: ماذا يحدث عند النزول والصعود',
      minutes: 35,
      body: [
        { type: 'h', en: 'Every call waits for the next one' },
        { type: 'p', en: 'When a method calls another method, the first one <b>waits</b>. Java remembers all the waiting calls in a pile called the <b>call stack</b>. Each call has its own box (a <b>frame</b>) with its own copy of <code>n</code>. When the smallest call finishes, the boxes are removed one by one, from the top.', ar: 'كل استدعاء ينتظر الذي بعده، وتُحفظ الاستدعاءات في مكدس.' },
        { type: 'p', en: 'Why does this matter? Most exam questions about recursion are "what does this print?" questions. To answer them you must know which call is <b>running</b> and which calls are <b>waiting</b>. Once you can see the stack in your head, recursion stops being magic and becomes simple bookkeeping.' },
        { type: 'analogy', title: 'A pile of plates', en: 'You put plates on a pile one by one. You can only take the top plate first. The last plate you put is the first plate you take (last in, first out).', ar: 'آخر طبق وُضع هو أول طبق يُؤخذ.' },
        { type: 'analogy', title: 'Bookmarks in books', en: 'You are reading book A. A footnote sends you to book B, so you put a bookmark in A and open B. Book B sends you to book C, so you put a bookmark in B too. When you finish C, you go back to B and continue <b>exactly at the bookmark</b>, then back to A. A frame is like a book with a bookmark: it remembers its own values and the line where it must continue.', ar: 'كل إطار يتذكر قيمه والسطر الذي سيكمل منه، مثل علامة في كتاب.' },
        { type: 'p', en: 'A statement written <b>before</b> the recursive call runs on the way <b>down</b>. A statement written <b>after</b> the recursive call runs on the way back <b>up</b>, in reverse order.' },
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
        { type: 'lines', title: 'Follow it call by call', rows: [
          ['trace(3) prints "enter 3"', 'Then it calls trace(2) and WAITS.'],
          ['trace(2) prints "enter 2"', 'Then it calls trace(1) and WAITS.'],
          ['trace(1) prints "enter 1"', 'Then it calls trace(0) and WAITS.'],
          ['trace(0) prints "base case"', 'It returns. The stack starts to unwind.'],
          ['trace(1) continues: "leave 1"', 'The line after its recursive call runs now.'],
          ['trace(2) continues: "leave 2"', 'Then trace(3) prints "leave 3".']
        ], ar: 'الطباعة بعد الاستدعاء تظهر بترتيب عكسي.' },
        { type: 'table', head: ['Moment', 'Stack (top on the right)', 'Output so far'], rows: [
          ['trace(3) starts', 'trace(3)', 'enter 3'],
          ['calls trace(2)', 'trace(3), trace(2)', 'enter 3, enter 2'],
          ['calls trace(1)', 'trace(3), trace(2), trace(1)', '... enter 1'],
          ['calls trace(0)', 'trace(3), trace(2), trace(1), trace(0)', '... base case'],
          ['trace(0) returns', 'trace(3), trace(2), trace(1)', '... leave 1'],
          ['trace(1) returns', 'trace(3), trace(2)', '... leave 2'],
          ['trace(2) returns', 'trace(3)', '... leave 3']
        ] },
        { type: 'p', en: 'Now watch the same thing as boxes in memory, for the smaller call <code>trace(2)</code>. Look at the output written under each step. On the way <b>down</b> a new box is added for every call. On the way <b>up</b> the newest box is removed first.', ar: 'عند النزول يُضاف صندوق لكل استدعاء، وعند الصعود يُحذف الأحدث أولاً.' },
        { type: 'memory', title: 'The call stack for trace(2)', code: J`
          public static void trace(int n) {
              if (n == 0) {
                  System.out.println("base case");
                  return;
              }
              System.out.println("enter " + n);
              trace(n - 1);
              System.out.println("leave " + n);
          }
        `, frames: [
          { label: 'Down: call 1 starts with n = 2 and prints "enter 2". Then it calls trace(1) and waits. Output: enter 2', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }] },
          { label: 'Down: call 2 starts with n = 1 and prints "enter 1". It calls trace(0) and waits. Output: enter 2, enter 1', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }, { name: 'n (call 2)', type: 'int', value: '1' }] },
          { label: 'Bottom: call 3 has n = 0. Base case: it prints "base case" and returns. Output: ..., base case', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }, { name: 'n (call 2)', type: 'int', value: '1' }, { name: 'n (call 3)', type: 'int', value: '0' }] },
          { label: 'Up: call 3 is removed. Call 2 continues after its recursive call and prints "leave 1".', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }, { name: 'n (call 2)', type: 'int', value: '1' }] },
          { label: 'Up: call 2 is removed. Call 1 continues and prints "leave 2".', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }] },
          { label: 'Call 1 is removed. The stack is empty. Output: enter 2, enter 1, base case, leave 1, leave 2', vars: [] }
        ], ar: 'لاحظ{{g:|ي}}: أعمق استدعاء ينتهي أولاً، وأول استدعاء ينتهي أخيراً.' },
        { type: 'check', q: 'In <code>trace</code>, which output line appears LAST?', options: ['enter 3', 'base case', 'leave 1', 'leave 3'], answer: 3, explain: 'trace(3) is at the bottom of the stack, so it finishes last: leave 3.' },
        { type: 'h', en: 'Printing after the call reverses the order' },
        { type: 'p', en: 'If the only print is <b>after</b> the recursive call, nothing is printed on the way down. All printing happens while the stack unwinds, so the numbers come out reversed.' },
        { type: 'code', run: true, code: J`
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
        `, out: J`
          1
          2
          3
        ` },
        { type: 'lines', rows: [
          ['show(3) calls show(2)', 'It prints nothing yet. It waits.'],
          ['show(2) calls show(1)', 'It prints nothing yet. It waits.'],
          ['show(1) calls show(0)', 'show(0) does nothing (n > 0 is false) and returns.'],
          ['show(1) prints 1', 'Then show(2) prints 2, then show(3) prints 3.']
        ], ar: 'الأرقام تظهر عند الرجوع: 1 ثم 2 ثم 3.' },
        { type: 'check', q: 'What would change if the <code>println(n)</code> line were placed BEFORE <code>show(n - 1)</code>?', options: ['Nothing', 'The numbers print as 3 2 1', 'The program does not compile', 'It prints only 3'], answer: 1, explain: 'Printing before the call prints on the way down: 3, 2, 1.' },
        { type: 'note', kind: 'exam', en: 'Exam trap: a print after the recursive call is executed in reverse order while the stack unwinds.', ar: 'انتبه: الطباعة بعد الاستدعاء العودي تُنفَّذ بترتيب عكسي.' },
        { type: 'h', en: 'Each call has its own local variables' },
        { type: 'p', en: 'A frame holds the parameters <b>and</b> the local variables of one call. If a method makes a local variable, every call gets its own copy. Changing the variable in one call never changes it in another call. In the next program each call stores <code>doubled</code> and prints it only on the way up.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void show(int n) {
                  int doubled = n * 2;
                  if (n > 0) {
                      show(n - 1);
                  }
                  System.out.println(n + " doubled is " + doubled);
              }

              public static void main(String[] args) {
                  show(2);
              }
          }
        `, out: J`
          0 doubled is 0
          1 doubled is 2
          2 doubled is 4
        ` },
        { type: 'lines', rows: [
          ['int doubled = n * 2;', 'A local variable. Each call makes its own <code>doubled</code> from its own n.'],
          ['if (n > 0) { show(n - 1); }', 'Go down while n is positive. When n is 0, there is no new call: this is the base case.'],
          ['System.out.println(n + " doubled is " + doubled);', 'Runs on the way up, so the deepest call (n = 0) prints first.']
        ], ar: 'لكل استدعاء متغيراته المحلية الخاصة.' },
        { type: 'memory', title: 'Every frame keeps its own n and doubled', frames: [
          { label: 'Call 1: n = 2, so its doubled is 4. n &gt; 0, so it calls show(1) and waits.', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }, { name: 'doubled (call 1)', type: 'int', value: '4' }] },
          { label: 'Call 2: a NEW n = 1 and a NEW doubled = 2. Call 1 still has 2 and 4.', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }, { name: 'doubled (call 1)', type: 'int', value: '4' }, { name: 'n (call 2)', type: 'int', value: '1' }, { name: 'doubled (call 2)', type: 'int', value: '2' }] },
          { label: 'Call 3: n = 0 and doubled = 0. n &gt; 0 is false, so it prints "0 doubled is 0".', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }, { name: 'doubled (call 1)', type: 'int', value: '4' }, { name: 'n (call 2)', type: 'int', value: '1' }, { name: 'doubled (call 2)', type: 'int', value: '2' }, { name: 'n (call 3)', type: 'int', value: '0' }, { name: 'doubled (call 3)', type: 'int', value: '0' }] },
          { label: 'Call 3 is removed. Call 2 prints with ITS values: "1 doubled is 2".', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }, { name: 'doubled (call 1)', type: 'int', value: '4' }, { name: 'n (call 2)', type: 'int', value: '1' }, { name: 'doubled (call 2)', type: 'int', value: '2' }] },
          { label: 'Call 2 is removed. Call 1 prints "2 doubled is 4", then it ends too.', vars: [{ name: 'n (call 1)', type: 'int', value: '2' }, { name: 'doubled (call 1)', type: 'int', value: '4' }] }
        ], ar: 'المتغير doubled في الاستدعاء الأول لم يتغير بسبب الاستدعاءات الأخرى.' },
        { type: 'check', q: 'In <code>show(2)</code>, when call 3 sets its <code>doubled</code> to 0, what happens to <code>doubled</code> in call 1?', options: ['It also becomes 0', 'It stays 4', 'It becomes 2', 'It is deleted'], answer: 1, explain: 'Every call has its own local variables in its own frame. Call 3 changes only its own copy, so call 1 still has 4.' },
        { type: 'steps', title: 'Worked example: down and up', problem: 'For n = 3 print "Down 3", "Down 2", "Down 1", then "Up 1", "Up 2", "Up 3".', steps: [
          { en: 'Base case: n is 0, so stop and print nothing.', code: J`
            if (n == 0) {
                return;
            }
          ` },
          { en: 'Before the call print "Down n". This runs on the way down.', code: 'System.out.println("Down " + n);' },
          { en: 'Make the recursive call with n - 1.', code: 'both(n - 1);' },
          { en: 'After the call print "Up n". This runs on the way up, in reverse order.', code: 'System.out.println("Up " + n);' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void both(int n) {
                  if (n == 0) {
                      return;
                  }
                  System.out.println("Down " + n);
                  both(n - 1);
                  System.out.println("Up " + n);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  both(in.nextInt());
              }
          }
        `, stdin: '3', out: J`
          Down 3
          Down 2
          Down 1
          Up 1
          Up 2
          Up 3
        `, ar: 'قبل الاستدعاء = عند النزول، وبعده = عند الصعود.' },
        { type: 'steps', title: 'Worked example: trace a mystery method on paper', problem: 'Without running it, find the output of <code>mystery(5)</code>. Notice two new things: the step is <code>n - 2</code>, and the base case is <code>n &lt;= 0</code>.', steps: [
          { en: 'Start with the first call. Write only what it prints <b>before</b> its recursive call: mystery(5) prints "in 5", then calls mystery(3) and waits.', code: J`
            System.out.println("in " + n);
            mystery(n - 2);
          ` },
          { en: 'Keep going down. mystery(3) prints "in 3" and calls mystery(1). mystery(1) prints "in 1" and calls mystery(-1). The numbers jump by 2: 5, 3, 1, -1.' },
          { en: 'At the bottom is mystery(-1). The test n &lt;= 0 is true, so it prints "*" and returns. (A test <code>n == 0</code> would miss -1 and never stop!)', code: J`
            if (n <= 0) {
                System.out.println("*");
                return;
            }
          ` },
          { en: 'Now go back up. Each waiting call runs the line <b>after</b> its recursive call: mystery(1) prints "out 1", then mystery(3) prints "out 3", then mystery(5) prints "out 5".', code: 'System.out.println("out " + n);' },
          { en: 'Write the whole output in order: three lines going down, the base-case line, three lines going up. Then press Run to check your paper.' }
        ], code: J`
          public class Main {
              public static void mystery(int n) {
                  if (n <= 0) {
                      System.out.println("*");
                      return;
                  }
                  System.out.println("in " + n);
                  mystery(n - 2);
                  System.out.println("out " + n);
              }

              public static void main(String[] args) {
                  mystery(5);
              }
          }
        `, out: J`
          in 5
          in 3
          in 1
          *
          out 1
          out 3
          out 5
        `, ar: 'نكتب ما يُطبع عند النزول، ثم سطر الحالة الأساسية، ثم ما يُطبع عند الصعود.' }
      ],
      mistakes: [
        { title: 'Thinking all calls run at the same time', en: 'Only the top call of the stack runs. The others wait.', code: 'trace(3);   // trace(2) runs only after the print' },
        { title: 'Reading the output in the wrong order', en: 'Lines after the call come out in reverse order.', code: J`
          show(n - 1);
          System.out.println(n);   // 1 2 3, not 3 2 1
        ` },
        { title: 'Forgetting the base-case message', en: 'The base case may also print. Do not skip its line when you trace.', code: 'System.out.println("base case");' },
        { title: 'Thinking a call is finished when it makes the recursive call', en: 'The call only <b>pauses</b>. When the smaller call returns, it continues with the next line. Do not forget the lines after the call when you trace.', code: J`
          trace(n - 1);
          System.out.println("leave " + n);   // still runs, later
        ` }
      ],
      remember: [
        'Each call has its own frame with its own <code>n</code> on the call stack.',
        'The stack works like a pile of plates: last in, first out.',
        'Code <b>before</b> the recursive call runs on the way <b>down</b>.',
        'Code <b>after</b> the recursive call runs on the way <b>up</b>, in reverse order.',
        'To trace: write each call, what it prints, and what it waits for.',
        'Local variables live in the frame too: every call has its own copy.'
      ],
      rememberAr: 'لكل استدعاء إطار خاص في المكدس فيه معاملاته ومتغيراته المحلية. ما قبل الاستدعاء العودي يُنفَّذ عند النزول، وما بعده عند الصعود بترتيب عكسي.',
      practice: [
        { t: 'mcq', q: 'The call stack works like:', options: ['A queue: first in, first out', 'A pile of plates: last in, first out', 'A sorted list', 'A set with no repeats'], answer: 1, explain: 'The most recent call finishes first.', explainAr: 'آخر استدعاء يُنهى أولاً.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void show(int n) {
                  if (n > 0) {
                      show(n - 1);
                      System.out.println(n);
                  }
              }

              public static void main(String[] args) {
                  show(2);
              }
          }
        `, answer: J`
          1
          2
        `, explain: 'The print comes after the call, so show(1) prints first.' },
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
        `, explain: 'A lines print on the way down (2, 1). B lines print on the way up (1, 2).' },
        { t: 'output', q: 'What does this program print?', code: J`
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
                  trace(2);
              }
          }
        `, answer: J`
          enter 2
          enter 1
          base case
          leave 1
          leave 2
        `, explain: 'Down: enter 2, enter 1, base case. Up: leave 1, leave 2.' },
        { t: 'fill', q: 'Make the numbers print as 1 2 3 (on the way up). Fill the missing words.', code: J`
          public static void show(int n) {
              if (n > 0) {
                  ___(n - 1);
                  System.out.println(___);
              }
          }
        `, answers: ['show', 'n'], explain: 'Call show(n - 1) first, then print n after the call.' },
        { t: 'code', q: 'Write a recursive method <code>both(int n)</code> that prints <code>n</code> before the recursive call and <code>n</code> again after it (each on its own line); stop when n is 0. In <code>main</code> read n and call it. No prompts.', qAr: 'اطبع n قبل الاستدعاء وبعده.', starter: J`
          import java.util.*;

          public class Main {
              public static void both(int n) {
                  // base case, print, recursive call, print
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  both(in.nextInt());
              }
          }
        `, tests: [{ stdin: '2', expected: J`
          2
          1
          1
          2
        ` }, { stdin: '1', expected: J`
          1
          1
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static void both(int n) {
                  if (n == 0) {
                      return;
                  }
                  System.out.println(n);
                  both(n - 1);
                  System.out.println(n);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  both(in.nextInt());
              }
          }
        `, hint: 'Print n, call both(n - 1), print n again.', explain: 'The first print happens going down, the second going up.' },
        { t: 'bug', q: 'This program should count UP: 1, 2, 3. Instead it prints 3, 2, 1. Tap the line that is in the wrong place.', qAr: 'البرنامج يجب أن يطبع 1 2 3. أي سطر في المكان الخطأ؟', code: J`
          public class Main {
              public static void countUp(int n) {
                  if (n == 0) {
                      return;
                  }
                  System.out.println(n);
                  countUp(n - 1);
              }

              public static void main(String[] args) {
                  countUp(3);
              }
          }
        `, bug: [6, 7], fix: J`
          public class Main {
              public static void countUp(int n) {
                  if (n == 0) {
                      return;
                  }
                  countUp(n - 1);
                  System.out.println(n);
              }

              public static void main(String[] args) {
                  countUp(3);
              }
          }
        `, hint: 'A print BEFORE the call runs on the way down. A print AFTER the call runs on the way up.', explain: 'The print on line 6 comes before the recursive call, so it runs on the way down: 3, 2, 1. Move the print after the call. Then nothing is printed going down, and the numbers are printed while the stack unwinds: countUp(1) prints first, then countUp(2), then countUp(3).', explainAr: 'الطباعة قبل الاستدعاء تُنفَّذ عند النزول. ننقلها بعد الاستدعاء لتُطبع عند الصعود.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void mystery(int n) {
                  if (n <= 0) {
                      System.out.println("*");
                      return;
                  }
                  System.out.println("in " + n);
                  mystery(n - 2);
                  System.out.println("out " + n);
              }

              public static void main(String[] args) {
                  mystery(4);
              }
          }
        `, answer: J`
          in 4
          in 2
          *
          out 2
          out 4
        `, explain: 'Down: mystery(4) prints in 4, mystery(2) prints in 2, mystery(0) is the base case and prints *. Up: mystery(2) prints out 2, then mystery(4) prints out 4.' },
        { t: 'mcq', q: 'We call <code>trace(3)</code>. While <code>trace(0)</code> is running, how many calls of <code>trace</code> are on the call stack (count trace(0) too)?', options: ['1', '3', '4', '7'], answer: 2, explain: 'trace(3), trace(2) and trace(1) are waiting, and trace(0) is running on top: 4 frames.', explainAr: 'ثلاثة استدعاءات تنتظر ورابع يعمل: 4.' }
      ]
    },
    // ---------------------------------------------------------------- L3
    {
      title: 'Methods that return a value: factorial',
      titleAr: 'دوال عودية تُرجع قيمة: المضروب',
      minutes: 35,
      body: [
        { type: 'h', en: 'Recursion that builds an answer' },
        { type: 'p', en: 'So far our recursive methods only printed. Now a method will <b>return</b> a number. Each call waits for the answer of the smaller call, then uses it to build its own answer. The classic example is the factorial. <code>4! = 4 × 3 × 2 × 1</code>. Notice that <code>4! = 4 × 3!</code>. The factorial of a number contains the factorial of a smaller number. By definition <code>0! = 1</code>.', ar: 'المضروب n! = n × (n-1)! و 0! = 1.' },
        { type: 'p', en: 'Where is this useful? In how many different orders can 4 friends stand in the queue at the cafeteria? The first place can be any of the 4, the second place any of the 3 who are left, then 2, then 1: <code>4 × 3 × 2 × 1 = 24</code> orders. That is 4!. The same idea counts the orders of songs in a playlist, of questions in an exam, or of letters in a word.', ar: 'المضروب يحسب عدد طرق ترتيب الأشياء، مثل ترتيب 4 أصدقاء في طابور.' },
        { type: 'analogy', title: 'Passing a question down the line', en: 'You ask the person next to you, "what is 3!?" They ask the next person "what is 2!?" and so on. The last person knows that 0! is 1. The answers come back up the line, each person multiplying by their own number.' },
        { type: 'analogy', title: 'Your place in a long queue', en: 'You are in a long queue at the bank and cannot see the front. You ask the person in front of you: "What is your place?" They ask the person in front of them, and so on. The first person in the queue simply says "1". Then each person adds 1 to the answer they hear and passes it back. Nobody counts the whole queue, yet everybody learns their place. A recursive method that returns a value works the same way: ask the smaller problem, wait, then use its answer.', ar: 'كل شخص يسأل من أمامه، ثم يضيف 1 إلى الجواب ويعيده إلى من خلفه.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static long factorial(int n) {
                  if (n == 0) {
                      return 1;
                  }
                  return n * factorial(n - 1);
              }

              public static void main(String[] args) {
                  for (int i = 0; i <= 5; i++) {
                      System.out.println(i + "! = " + factorial(i));
                  }
              }
          }
        `, out: J`
          0! = 1
          1! = 1
          2! = 2
          3! = 6
          4! = 24
          5! = 120
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['public static long factorial(int n)', 'Takes an int, returns a long (factorials grow very fast, so int could overflow).'],
          ['if (n == 0) { return 1; }', 'BASE CASE: 0! is 1. No more calls.'],
          ['return n * factorial(n - 1);', 'RECURSIVE CASE: n times the factorial of the smaller number.']
        ], ar: 'الحالة الأساسية: 0! = 1. الحالة العودية: n * factorial(n - 1).' },
        { type: 'check', q: 'What is the base case of <code>factorial</code>?', options: ['n == 1', 'n == 0', 'n > 0', 'There is none'], answer: 1, explain: 'When n is 0 the method returns 1 directly.' },
        { type: 'h', en: 'Tracing factorial(3) on paper' },
        { type: 'p', en: 'Go down first: every call is waiting. Then go up: each call finishes with a multiplication.' },
        { type: 'table', head: ['Step', 'Call', 'What it does', 'Result'], rows: [
          ['1 (down)', 'factorial(3)', 'waits for factorial(2) to compute 3 * ?', '(waiting)'],
          ['2 (down)', 'factorial(2)', 'waits for factorial(1) to compute 2 * ?', '(waiting)'],
          ['3 (down)', 'factorial(1)', 'waits for factorial(0) to compute 1 * ?', '(waiting)'],
          ['4 (base)', 'factorial(0)', 'returns 1', '1'],
          ['5 (up)', 'factorial(1)', '1 * 1', '1'],
          ['6 (up)', 'factorial(2)', '2 * 1', '2'],
          ['7 (up)', 'factorial(3)', '3 * 2', '6']
        ] },
        { type: 'p', en: 'The memory picture shows the same trace. Every frame holds its n and its <b>unfinished answer</b>, written with a question mark. On the way down the question marks pile up. On the way up each returned value replaces a question mark.', ar: 'عند النزول تتراكم علامات الاستفهام، وعند الصعود تحل محلها القيم المُرجعة.' },
        { type: 'memory', title: 'factorial(3): the answers fill in on the way up', frames: [
          { label: 'Call 1: factorial(3). n is not 0, so it must compute 3 * factorial(2). It calls and waits.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '3 * ?' }] },
          { label: 'Call 2: factorial(2) needs 2 * factorial(1). It waits too.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '3 * ?' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'answer (call 2)', value: '2 * ?' }] },
          { label: 'Call 3: factorial(1) needs 1 * factorial(0).', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '3 * ?' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'answer (call 2)', value: '2 * ?' }, { name: 'n (call 3)', type: 'int', value: '1' }, { name: 'answer (call 3)', value: '1 * ?' }] },
          { label: 'Call 4: factorial(0). n == 0 is the base case: it returns <b>1</b> at once.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '3 * ?' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'answer (call 2)', value: '2 * ?' }, { name: 'n (call 3)', type: 'int', value: '1' }, { name: 'answer (call 3)', value: '1 * ?' }, { name: 'n (call 4)', type: 'int', value: '0' }, { name: 'answer (call 4)', value: 'returns 1' }] },
          { label: 'Call 4 is removed. Call 3 gets 1 and finishes: 1 * 1 = <b>1</b>.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '3 * ?' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'answer (call 2)', value: '2 * ?' }, { name: 'n (call 3)', type: 'int', value: '1' }, { name: 'answer (call 3)', value: '1 * 1 = 1' }] },
          { label: 'Call 3 is removed. Call 2 gets 1: 2 * 1 = <b>2</b>.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '3 * ?' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'answer (call 2)', value: '2 * 1 = 2' }] },
          { label: 'Call 2 is removed. Call 1 gets 2: 3 * 2 = <b>6</b>. It returns 6 to main.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '3 * 2 = 6' }] }
        ], ar: 'كل استدعاء ينتظر جواب الاستدعاء الأصغر ثم يضربه في n.' },
        { type: 'check', q: 'Which value does <code>factorial(2)</code> return to <code>factorial(3)</code>?', options: ['1', '2', '3', '6'], answer: 1, explain: 'factorial(2) = 2 * factorial(1) = 2 * 1 = 2.' },
        { type: 'note', kind: 'tip', en: 'Why <code>long</code>? 13! is already bigger than the largest <code>int</code>. A <code>long</code> holds up to 20! safely.' },
        { type: 'h', en: 'The right base value: 0 for adding, 1 for multiplying' },
        { type: 'p', en: 'The value returned by the base case is very important, because every other answer is built on it. Here is a new example: a shop packs 6 dates in each box, and you buy 3 boxes. How many dates? Multiplication is just repeated adding: 6 + 6 + 6. So <code>multiply(6, 3) = 6 + multiply(6, 2)</code>, and zero boxes hold zero dates.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int multiply(int a, int b) {
                  if (b == 0) {
                      return 0;
                  }
                  return a + multiply(a, b - 1);
              }

              public static void main(String[] args) {
                  System.out.println(multiply(6, 3));
                  System.out.println(multiply(7, 0));
              }
          }
        `, out: J`
          18
          0
        ` },
        { type: 'lines', rows: [
          ['if (b == 0) { return 0; }', 'BASE CASE: 0 boxes hold 0 dates. For adding, the "empty" answer is 0.'],
          ['return a + multiply(a, b - 1);', 'One box of a dates, plus the dates in the other b - 1 boxes.'],
          ['multiply(6, 3)', '6 + (6 + (6 + 0)) = 18']
        ], ar: 'في الجمع تُرجع الحالة الأساسية 0، وفي الضرب تُرجع 1.' },
        { type: 'table', head: ['The recursive case uses', 'Base value', 'Why'], rows: [
          ['<code>+</code> (sum, count)', '<code>0</code>', 'Adding 0 changes nothing.'],
          ['<code>*</code> (factorial, power, product)', '<code>1</code>', 'Multiplying by 1 changes nothing. Multiplying by 0 destroys everything!']
        ] },
        { type: 'check', q: 'A method multiplies the elements of a list recursively. What should its base case return for an empty list?', options: ['0', '1', '-1', 'The first element'], answer: 1, explain: 'For multiplying, the neutral value is 1. If the base case returned 0, every product would become 0.' },
        { type: 'steps', title: 'Worked example: sum from 1 to n', problem: 'Write a recursive method that returns 1 + 2 + ... + n, and use it for the number the user types.', steps: [
          { en: 'Find the base case: the sum 1 + ... + 1 is just 1.', code: J`
            if (n == 1) {
                return 1;
            }
          ` },
          { en: 'Find the recursive case: the sum up to n is n plus the sum up to n - 1.', code: 'return n + sumTo(n - 1);' },
          { en: 'Trace sumTo(3): 3 + sumTo(2) = 3 + (2 + sumTo(1)) = 3 + (2 + 1) = 6.' },
          { en: 'Put it together in a program.', code: J`
            int n = in.nextInt();
            System.out.println(sumTo(n));
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static int sumTo(int n) {
                  if (n == 1) {
                      return 1;
                  }
                  return n + sumTo(n - 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  System.out.println(sumTo(n));
              }
          }
        `, stdin: '5', out: '15', ar: 'مجموع 1 إلى n = n + مجموع 1 إلى n-1.' },
        { type: 'steps', title: 'Worked example: ways to stand in a queue', problem: 'Read the number of students n (0 to 20). Print in how many different orders they can stand in a queue.', steps: [
          { en: 'Think recursively: the first place can be taken by any of the n students. The other n - 1 students then form a smaller queue. So ways(n) = n × ways(n - 1). This is exactly n!.' },
          { en: 'Base case: 0 students can stand in a queue in exactly <b>1</b> way (the empty queue). This is a good way to remember why 0! = 1.', code: J`
            if (n == 0) {
                return 1;
            }
          ` },
          { en: 'Recursive case: n choices for the first place, times the ways for the rest.', code: 'return n * factorial(n - 1);' },
          { en: 'Check with 3 students, Ali, Badr and Fahd: ABF, AFB, BAF, BFA, FAB, FBA. That is 6 orders, and 3! = 6.' },
          { en: 'In main, read n and print the sentence. We use <code>long</code> because the numbers grow very fast.', code: J`
            int n = in.nextInt();
            System.out.println(n + " students can stand in a queue in " + factorial(n) + " ways.");
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static long factorial(int n) {
                  if (n == 0) {
                      return 1;
                  }
                  return n * factorial(n - 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  System.out.println(n + " students can stand in a queue in " + factorial(n) + " ways.");
              }
          }
        `, stdin: '5', out: '5 students can stand in a queue in 120 ways.', ar: 'عدد طرق ترتيب n طالب = n!.' }
      ],
      mistakes: [
        { title: 'Forgetting to return the result', en: 'Without <code>return</code> the answer is lost, so the code does not compile.', code: 'n * factorial(n - 1);' },
        { title: 'Wrong base case value', en: 'If you return 0 for 0!, every result becomes 0.', code: J`
          if (n == 0) {
              return 0;
          }
        ` },
        { title: 'Using the same n', en: 'You must call with a smaller input.', code: 'return n * factorial(n);' },
        { title: 'Using int for big results', en: 'Large factorials overflow int and give wrong numbers. Use long.', code: 'public static int factorial(int n)' }
      ],
      remember: [
        '<code>n! = n × (n-1)!</code> and <code>0! = 1</code>.',
        'Base case: <code>if (n == 0) return 1;</code>.',
        'Recursive case: <code>return n * factorial(n - 1);</code>.',
        'The calls go down first, then the answers come back up and are multiplied.',
        'Use <code>long</code> for big factorials.',
        'Base value: <code>0</code> when the recursive case adds, <code>1</code> when it multiplies.'
      ],
      rememberAr: 'المضروب: 0! = 1 و n! = n * (n-1)!. تنزل الاستدعاءات أولاً ثم تعود النتائج وتُضرب. الحالة الأساسية تُرجع 0 في الجمع و1 في الضرب.',
      practice: [
        { t: 'mcq', q: 'What is <code>factorial(0)</code> in our method?', options: ['0', '1', 'It crashes', 'Not defined'], answer: 1, explain: 'By definition 0! = 1, and that is the base case.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static long factorial(int n) {
                  if (n == 0) {
                      return 1;
                  }
                  return n * factorial(n - 1);
              }

              public static void main(String[] args) {
                  System.out.println(factorial(4));
              }
          }
        `, answer: '24', explain: '4 * 3 * 2 * 1 * 1 = 24.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int sumTo(int n) {
                  if (n == 1) {
                      return 1;
                  }
                  return n + sumTo(n - 1);
              }

              public static void main(String[] args) {
                  System.out.println(sumTo(4));
                  System.out.println(sumTo(1));
              }
          }
        `, answer: J`
          10
          1
        `, explain: 'sumTo(4) = 4 + 3 + 2 + 1 = 10. sumTo(1) is the base case: 1.' },
        { t: 'fill', q: 'Complete the recursive factorial method.', code: J`
          public static long factorial(int n) {
              if (n ___ 0) {
                  return 1;
              }
              return n * factorial(___);
          }
        `, answers: ['==', ['n - 1', 'n-1']], explain: 'Base case n == 0; the recursive call uses n - 1.' },
        { t: 'order', q: 'Put the lines of <code>sumTo</code> in order.', lines: [
          'public static int sumTo(int n) {',
          '    if (n == 1) {',
          '        return 1;',
          '    }',
          '    return n + sumTo(n - 1);',
          '}'
        ], explain: 'Base case first; otherwise add n to the sum of the smaller problem.' },
        { t: 'mcq', q: 'In the trace of <code>factorial(3)</code>, which call returns FIRST (before any other call finishes)?', options: ['factorial(3)', 'factorial(2)', 'factorial(1)', 'factorial(0)'], answer: 3, explain: 'factorial(0) is the base case and returns 1 immediately. The others wait for it.' },
        { t: 'code', q: 'Write the recursive method <code>factorial</code> (return a <code>long</code>). In <code>main</code> read <code>n</code> and print <code>factorial(n)</code>. No prompts.', qAr: 'اكتب دالة المضروب العودية واطبع النتيجة.', starter: J`
          import java.util.*;

          public class Main {
              public static long factorial(int n) {
                  // base case and recursive case
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  System.out.println(factorial(n));
              }
          }
        `, tests: [{ stdin: '5', expected: '120' }, { stdin: '0', expected: '1' }, { stdin: '10', expected: '3628800' }], solution: J`
          import java.util.*;

          public class Main {
              public static long factorial(int n) {
                  if (n == 0) {
                      return 1;
                  }
                  return n * factorial(n - 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  System.out.println(factorial(n));
              }
          }
        `, hint: 'if (n == 0) return 1; return n * factorial(n - 1);', explain: 'The base case returns 1, and every other call multiplies by the smaller factorial.' },
        { t: 'bug', q: 'This program should print 24, but it prints 0. Tap the line with the bug.', qAr: 'البرنامج يطبع 0 بدلاً من 24. أين الخطأ؟', code: J`
          public class Main {
              public static long factorial(int n) {
                  if (n == 0) {
                      return 0;
                  }
                  return n * factorial(n - 1);
              }

              public static void main(String[] args) {
                  System.out.println(factorial(4));
              }
          }
        `, bug: 4, fix: J`
          public class Main {
              public static long factorial(int n) {
                  if (n == 0) {
                      return 1;
                  }
                  return n * factorial(n - 1);
              }

              public static void main(String[] args) {
                  System.out.println(factorial(4));
              }
          }
        `, hint: 'Which number does every multiplication finally use?', explain: 'The base case returns 0, so the last multiplication is 1 * 0 = 0, then 2 * 0 = 0, and so on: everything becomes 0. For a product the base value must be 1 (0! = 1). Then the result is 4 * 3 * 2 * 1 * 1 = 24.', explainAr: 'في الضرب يجب أن تُرجع الحالة الأساسية 1 وليس 0.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int multiply(int a, int b) {
                  if (b == 0) {
                      return 0;
                  }
                  return a + multiply(a, b - 1);
              }

              public static void main(String[] args) {
                  System.out.println(multiply(4, 3));
                  System.out.println(multiply(5, 1));
              }
          }
        `, answer: J`
          12
          5
        `, explain: 'multiply(4, 3) = 4 + 4 + 4 + 0 = 12. multiply(5, 1) = 5 + multiply(5, 0) = 5 + 0 = 5.' },
        { t: 'code', q: 'Read two whole numbers <code>a</code> and <code>b</code> (b is 0 or more). Print <code>a × b</code> using a recursive method <code>multiply(int a, int b)</code> that uses only <code>+</code> (no <code>*</code>). No prompts.', qAr: 'احسب حاصل الضرب بالجمع المتكرر باستخدام دالة عودية.', starter: J`
          import java.util.*;

          public class Main {
              public static int multiply(int a, int b) {
                  // base case: b == 0
                  // recursive case: a + multiply(a, b - 1)
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int a = in.nextInt();
                  int b = in.nextInt();
                  System.out.println(multiply(a, b));
              }
          }
        `, tests: [{ stdin: '6 3', expected: '18' }, { stdin: '7 0', expected: '0' }, { stdin: '1 9', expected: '9' }], solution: J`
          import java.util.*;

          public class Main {
              public static int multiply(int a, int b) {
                  if (b == 0) {
                      return 0;
                  }
                  return a + multiply(a, b - 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int a = in.nextInt();
                  int b = in.nextInt();
                  System.out.println(multiply(a, b));
              }
          }
        `, hint: 'if (b == 0) return 0; return a + multiply(a, b - 1);', explain: 'Adding a, b times, gives a × b. The base value is 0 because the method adds.' }
      ]
    },

    // ---------------------------------------------------------------- L4
    {
      title: 'When recursion never stops: StackOverflowError',
      titleAr: 'عندما لا تتوقف العودية: StackOverflowError',
      minutes: 30,
      body: [
        { type: 'h', en: 'What goes wrong without a base case' },
        { type: 'p', en: 'Every waiting call takes space on the call stack. The stack has a limited size. If a method never reaches a base case, it keeps calling itself, the pile of waiting calls grows and grows, and at some point Java stops the program with <code>StackOverflowError</code>.', ar: 'بدون حالة أساسية تمتلئ ذاكرة المكدس ويحدث StackOverflowError.' },
        { type: 'analogy', title: 'An endless pile of plates', en: 'If you keep adding plates and never take any away, the pile finally falls over. The error message is the pile falling.' },
        { type: 'p', en: 'Why learn about this error? It is the error you will meet most often while learning recursion. The good news: it almost always has one of three simple causes, and once you know them you can fix the method in a minute.' },
        { type: 'analogy', title: 'Two mirrors facing each other', en: 'In some shops two mirrors hang on opposite walls. You see a mirror inside a mirror inside a mirror, smaller and smaller, with no end. A recursive method with no base case is like that: a call inside a call inside a call, forever. In the shop the picture just becomes too small to see. In Java the memory for frames runs out, and the program stops.', ar: 'مثل مرآتين متقابلتين: صورة داخل صورة بلا نهاية.' },
        { type: 'p', en: 'There are two common ways to make this mistake. In the first, there is no base case at all. In the second, the call moves <b>away</b> from the base case.' },
        { type: 'code', code: J`
          // Mistake 1: no base case
          public static int count(int n) {
              return 1 + count(n - 1);
          }

          // Mistake 2: the input moves AWAY from the base case 0
          public static int count2(int n) {
              if (n == 0) {
                  return 0;
              }
              return 1 + count2(n + 1);
          }
        ` },
        { type: 'lines', rows: [
          ['count(3)', 'Calls count(2), count(1), count(0), count(-1), count(-2) ... there is no end.'],
          ['count2(3)', 'Calls count2(4), count2(5), count2(6) ... n grows and never equals 0.']
        ], ar: 'في الحالتين لا نصل للحالة الأساسية.' },
        { type: 'check', q: 'Why does <code>count2(3)</code> never stop?', options: ['It has no if statement', 'n + 1 moves away from 0', 'It returns too early', 'int is too small'], answer: 1, explain: 'n gets bigger, so n == 0 is never true.' },
        { type: 'p', en: 'Here is what happens in memory when we call <code>count(3)</code> from Mistake 1. Watch the stack grow. No frame is ever removed, because no call ever returns.', ar: 'لا يُحذف أي إطار لأن أي استدعاء لا ينتهي.' },
        { type: 'memory', title: 'count(3) with no base case: the stack only grows', frames: [
          { label: 'Call 1: n = 3. There is no base case, so it calls count(2).', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }] },
          { label: 'Call 2: n = 2. It calls count(1).', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'n (call 2)', type: 'int', value: '2' }] },
          { label: 'Call 3: n = 1. It calls count(0).', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'n (call 3)', type: 'int', value: '1' }] },
          { label: 'Call 4: n = 0. We would like to stop here, but nothing tells the method to stop. It calls count(-1).', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'n (call 3)', type: 'int', value: '1' }, { name: 'n (call 4)', type: 'int', value: '0' }] },
          { label: 'Thousands of calls later (the exact number depends on the computer) there is no room for one more frame. Java stops the program with <b>StackOverflowError</b>.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'n (call 3)', type: 'int', value: '1' }, { name: 'n (call 4)', type: 'int', value: '0' }, { name: '... many more frames', value: '...' }, { name: 'n (call 10000)', type: 'int', value: '-9996' }] }
        ], ar: 'المكدس يكبر فقط حتى يمتلئ، فيتوقف البرنامج بخطأ.' },
        { type: 'lines', title: 'Reading the error message', rows: [
          ['Exception in thread "main" java.lang.StackOverflowError', 'The name of the error. "Overflow" means "too much to fit": the stack of frames is full.'],
          ['    at Main.count(Main.java:3)', 'Where it happened: line 3 of the file, inside the method count.'],
          ['    at Main.count(Main.java:3)', 'The same line again, hundreds of times. This repeating line is the recursive call that never stops. Look at it first.']
        ], ar: 'السطر الذي يتكرر في رسالة الخطأ هو الاستدعاء العودي الذي لا يتوقف.' },
        { type: 'h', en: 'A checklist before you run' },
        { type: 'list', items: [
          '1. Is there a base case?',
          '2. Does every recursive call use a <b>smaller</b> input?',
          '3. Will every possible input reach the base case? Think about negative numbers!'
        ], ar: 'تأكد من الحالة الأساسية، ومن أن المدخل يصغر، ومن أن كل مدخل يصل إليها.' },
        { type: 'p', en: 'Point 3 is subtle. <code>if (n == 0)</code> works for 3, 2, 1. But if someone passes -2, n goes -3, -4 ... and never hits 0. A safer base case is <code>n &lt;= 0</code>.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void down(int n) {
                  if (n <= 0) {
                      return;
                  }
                  System.out.println(n);
                  down(n - 1);
              }

              public static void main(String[] args) {
                  down(2);
                  down(-3);
                  System.out.println("done");
              }
          }
        `, out: J`
          2
          1
          done
        ` },
        { type: 'lines', rows: [
          ['if (n <= 0) { return; }', 'Covers 0 and also every negative number.'],
          ['down(2)', 'Prints 2, then 1, then stops at 0.'],
          ['down(-3)', 'Stops immediately. Nothing is printed.']
        ], ar: 'الشرط n <= 0 أكثر أماناً من n == 0.' },
        { type: 'check', q: 'With the base case <code>if (n == 0)</code>, what happens for <code>down(-1)</code>?', options: ['It prints nothing', 'It prints -1 and stops', 'StackOverflowError', 'It prints 0'], answer: 2, explain: 'n goes -1, -2, -3 ... and never equals 0, so the stack overflows.' },
        { type: 'note', kind: 'warn', en: 'A <code>StackOverflowError</code> is an error in your design, not a typing error. The program compiles fine and fails when it runs.' },
        { type: 'h', en: 'A step that jumps over the base case' },
        { type: 'p', en: 'There is a third, sneaky cause. The input gets smaller, but it can <b>jump over</b> the base case. Imagine walking down the stairs two at a time and wanting to stop exactly on step 0. If you start on step 5 you land on 3, 1, and then -1: you missed step 0! The method below prints every second number.' },
        { type: 'code', code: J`
          public static void everyOther(int n) {
              if (n == 0) {
                  return;
              }
              System.out.println(n);
              everyOther(n - 2);
          }
        ` },
        { type: 'lines', rows: [
          ['everyOther(6)', 'Prints 6, 4, 2. Then n is 0: the base case. Fine.'],
          ['everyOther(5)', 'Prints 5, 3, 1. Then n is -1, -3, -5 ... It jumped OVER 0, so it never stops.'],
          ['if (n <= 0)', 'The fix: this test catches 0 <b>and</b> every number below it.']
        ], ar: 'إذا قفز المدخل فوق الحالة الأساسية فلن يتوقف. استخدم{{g:|ي}} n <= 0.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void everyOther(int n) {
                  if (n <= 0) {
                      return;
                  }
                  System.out.println(n);
                  everyOther(n - 2);
              }

              public static void main(String[] args) {
                  everyOther(6);
                  System.out.println("---");
                  everyOther(5);
              }
          }
        `, out: J`
          6
          4
          2
          ---
          5
          3
          1
        ` },
        { type: 'check', q: 'Which base case makes <code>everyOther</code> safe for <b>every</b> whole number?', options: ['if (n == 0)', 'if (n == 1)', 'if (n <= 0)', 'if (n > 0)'], answer: 2, explain: 'n <= 0 is true for 0 and for all negative numbers, so both even and odd starting numbers (and negative ones) stop.' },
        { type: 'note', kind: 'tip', en: 'Even a correct method can overflow when the input is huge, because every waiting call needs a frame. <code>sumTo(1000)</code> needs 1000 frames and works fine. <code>sumTo(1000000)</code> needs a million frames at the same time and may overflow. Lesson 10 explains when a loop is the better choice.', ar: 'حتى الدالة الصحيحة قد تملأ المكدس إذا كان المدخل كبيراً جداً.' },
        { type: 'steps', title: 'Worked example: fix a broken method', problem: 'This method should print n, n-1, ..., 1 but it crashes. Fix it.', steps: [
          { en: 'The broken version has no base case:', code: J`
            public static void countdown(int n) {
                System.out.println(n);
                countdown(n - 1);
            }
          ` },
          { en: 'It would print 3, 2, 1, 0, -1, -2 ... forever and then overflow. We want to stop before printing 0.' },
          { en: 'Add a base case at the top. Using n &lt;= 0 also protects against negative input.', code: J`
            if (n <= 0) {
                return;
            }
          ` },
          { en: 'Now the fixed program prints 3, 2, 1 and stops.' }
        ], code: J`
          public class Main {
              public static void countdown(int n) {
                  if (n <= 0) {
                      return;
                  }
                  System.out.println(n);
                  countdown(n - 1);
              }

              public static void main(String[] args) {
                  countdown(3);
              }
          }
        `, out: J`
          3
          2
          1
        `, ar: 'أضفنا حالة أساسية في بداية الدالة.' },
        { type: 'steps', title: 'Worked example: test the edge input', problem: 'A classmate wrote <code>sumTo</code> with the base case <code>n == 1</code>. It works for 3 and for 1. Does it work for 0? Find the problem and fix it.', steps: [
          { en: 'This is the classmate\'s method:', code: J`
            public static int sumTo(int n) {
                if (n == 1) {
                    return 1;
                }
                return n + sumTo(n - 1);
            }
          ` },
          { en: 'Test normal inputs on paper: sumTo(3) = 3 + 2 + 1 = 6, and sumTo(1) = 1. Both are correct.' },
          { en: 'Now test the <b>edge</b> input 0 (the smallest possible input): sumTo(0) = 0 + sumTo(-1) = 0 + (-1 + sumTo(-2)) ... n never equals 1, so this ends with StackOverflowError.' },
          { en: 'Fix: choose a base case that covers 0 and every negative number. The sum of no numbers is 0, so return 0.', code: J`
            if (n <= 0) {
                return 0;
            }
          ` },
          { en: 'Test again: sumTo(1) = 1 + sumTo(0) = 1 + 0 = 1, still correct. sumTo(3) is still 6, and sumTo(0) is now 0.' }
        ], code: J`
          public class Main {
              public static int sumTo(int n) {
                  if (n <= 0) {
                      return 0;
                  }
                  return n + sumTo(n - 1);
              }

              public static void main(String[] args) {
                  System.out.println(sumTo(3));
                  System.out.println(sumTo(1));
                  System.out.println(sumTo(0));
              }
          }
        `, out: J`
          6
          1
          0
        `, ar: 'اختبر{{g:|ي}} دائماً أصغر مدخل ممكن مثل 0.' }
      ],
      mistakes: [
        { title: 'No base case', en: 'The first thing to check in any recursive method.', code: 'return n * f(n - 1);' },
        { title: 'Moving the wrong way', en: 'Use n - 1 when the base case is below n.', code: 'return f(n + 1);' },
        { title: 'Base case that misses some inputs', en: '<code>n == 0</code> is never reached from a negative n.', code: 'if (n == 0) return 1;' },
        { title: 'Catching the error instead of fixing it', en: 'Do not try to hide StackOverflowError. Fix the base case.', code: '// try { f(5); } catch (StackOverflowError e) { }' }
      ],
      remember: [
        'A missing or unreachable base case causes <code>StackOverflowError</code>.',
        'Each waiting call uses stack memory, and the stack is limited.',
        'Check: base case? smaller input? every input reaches the base case?',
        '<code>n &lt;= 0</code> is safer than <code>n == 0</code> for counting down.',
        'The error appears when the program runs, not when it compiles.',
        'A step bigger than 1 (such as <code>n - 2</code>) can jump over <code>n == 0</code>: use <code>n &lt;= 0</code>.'
      ],
      rememberAr: 'غياب الحالة الأساسية أو عدم الوصول إليها يسبب StackOverflowError. افحص: حالة أساسية؟ مدخل أصغر؟ هل يصل كل مدخل إليها؟',
      practice: [
        { t: 'mcq', q: 'What causes a <code>StackOverflowError</code> in recursion?', options: ['Using long instead of int', 'Calls that never reach a base case', 'Using static methods', 'Too many comments'], answer: 1, explain: 'The waiting calls pile up until the stack is full.', explainAr: 'الاستدعاءات تتراكم دون توقف.' },
        { t: 'mcq', q: 'What happens when <code>count(5)</code> is called?', code: J`
          public static int count(int n) {
              if (n == 0) return 0;
              return 1 + count(n + 1);
          }
        `, options: ['It returns 5', 'It returns 0', 'StackOverflowError', 'Compilation error'], answer: 2, explain: 'n grows 6, 7, 8 ... and never reaches 0.' },
        { t: 'mcq', q: 'What happens when <code>f(3)</code> is called?', code: J`
          public static int f(int n) {
              return n + f(n - 1);
          }
        `, options: ['It returns 6', 'It returns 3', 'StackOverflowError', 'It does not compile'], answer: 2, explain: 'There is no base case, so f keeps calling itself.' },
        { t: 'fill', q: 'Fix the method so that it also stops for negative numbers.', code: J`
          public static void down(int n) {
              if (n ___ 0) {
                  return;
              }
              System.out.println(n);
              down(n - 1);
          }
        `, answers: ['<='], explain: 'n <= 0 stops for 0 and for every negative number.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void down(int n) {
                  if (n <= 0) {
                      return;
                  }
                  System.out.println(n);
                  down(n - 1);
              }

              public static void main(String[] args) {
                  down(-5);
                  System.out.println("done");
              }
          }
        `, answer: 'done', explain: 'down(-5) returns at once, so only "done" is printed.' },
        { t: 'code', q: 'Write a recursive method <code>sumTo(int n)</code> that returns 1 + 2 + ... + n, and returns 0 when n is 0 or negative. In <code>main</code> read n and print the result. No prompts.', qAr: 'اكتب sumTo التي تُرجع 0 إذا كانت n صفراً أو سالبة.', starter: J`
          import java.util.*;

          public class Main {
              public static int sumTo(int n) {
                  // base case: n <= 0
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(sumTo(in.nextInt()));
              }
          }
        `, tests: [{ stdin: '4', expected: '10' }, { stdin: '0', expected: '0' }, { stdin: '-3', expected: '0' }], solution: J`
          import java.util.*;

          public class Main {
              public static int sumTo(int n) {
                  if (n <= 0) {
                      return 0;
                  }
                  return n + sumTo(n - 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(sumTo(in.nextInt()));
              }
          }
        `, hint: 'if (n <= 0) return 0; return n + sumTo(n - 1);', explain: 'Returning 0 for n <= 0 is both the base case and a safe guard.' },
        { t: 'bug', q: 'This countdown should print 3, 2, 1, Go! but it ends with <code>StackOverflowError</code>. Tap the line with the bug.', qAr: 'العد التنازلي لا يتوقف. أين الخطأ؟', code: J`
          public class Main {
              public static void countdown(int n) {
                  if (n == 0) {
                      System.out.println("Go!");
                      return;
                  }
                  System.out.println(n);
                  countdown(n + 1);
              }

              public static void main(String[] args) {
                  countdown(3);
              }
          }
        `, bug: 8, fix: J`
          public class Main {
              public static void countdown(int n) {
                  if (n == 0) {
                      System.out.println("Go!");
                      return;
                  }
                  System.out.println(n);
                  countdown(n - 1);
              }

              public static void main(String[] args) {
                  countdown(3);
              }
          }
        `, hint: 'The base case is n == 0. Which way must n move?', explain: 'Line 8 calls countdown(n + 1), so n goes 3, 4, 5, 6 ... and moves AWAY from the base case 0. The program prints bigger and bigger numbers until the stack overflows. With countdown(n - 1), n goes 3, 2, 1, 0 and the base case prints Go!.', explainAr: 'n + 1 يبتعد عن الحالة الأساسية. الصحيح n - 1.' },
        { t: 'mcq', q: 'Your program stops with <code>StackOverflowError</code>, and the line <code>at Main.total(Main.java:6)</code> is repeated many times. What should you check first?', options: ['The import lines at the top', 'The base case of total, and whether the call on line 6 gets closer to it', 'The spelling of main', 'Whether the file is saved'], answer: 1, explain: 'The repeated line is the recursive call that never stops. Check the base case and make sure every call on line 6 moves toward it.', explainAr: 'السطر المتكرر هو الاستدعاء العودي؛ افحص الحالة الأساسية.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void everyOther(int n) {
                  if (n <= 0) {
                      return;
                  }
                  System.out.println(n);
                  everyOther(n - 2);
              }

              public static void main(String[] args) {
                  everyOther(7);
                  System.out.println("done");
              }
          }
        `, answer: J`
          7
          5
          3
          1
          done
        `, explain: 'n goes 7, 5, 3, 1, then -1. The test n <= 0 catches -1, so the recursion stops safely and main prints done.' },
        { t: 'code', q: 'Read a whole number n (it may be even, odd, zero or negative). Using a recursive method, print n, n - 2, n - 4, ... one per line, as long as the number is positive. Then print <code>done</code>. The method must stop for every input. No prompts.', qAr: 'اطبع n ثم n-2 ... ما دام العدد موجباً، ويجب أن تتوقف الدالة لكل مدخل.', starter: J`
          import java.util.*;

          public class Main {
              public static void everyOther(int n) {
                  // a base case that works for even, odd and negative n
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  everyOther(in.nextInt());
                  System.out.println("done");
              }
          }
        `, tests: [{ stdin: '7', expected: J`
          7
          5
          3
          1
          done
        ` }, { stdin: '6', expected: J`
          6
          4
          2
          done
        ` }, { stdin: '-4', expected: 'done' }], solution: J`
          import java.util.*;

          public class Main {
              public static void everyOther(int n) {
                  if (n <= 0) {
                      return;
                  }
                  System.out.println(n);
                  everyOther(n - 2);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  everyOther(in.nextInt());
                  System.out.println("done");
              }
          }
        `, hint: 'Use if (n <= 0) return; so that odd and negative numbers also stop.', explain: 'The step of 2 can jump over 0, so the base case must be n <= 0, not n == 0.' }
      ]
    },
    // ---------------------------------------------------------------- L5
    {
      title: 'Digits and powers',
      titleAr: 'أرقام العدد والقوى',
      minutes: 35,
      body: [
        { type: 'h', en: 'Taking a number apart: % 10 and / 10' },
        { type: 'p', en: 'Remember from CS101: <code>n % 10</code> is the <b>last digit</b> of n, and <code>n / 10</code> (integer division) is the number <b>without</b> its last digit. For 4096: <code>4096 % 10 = 6</code> and <code>4096 / 10 = 409</code>. A number with a single digit is the smallest problem.', ar: 'n % 10 هو الرقم الأخير، وn / 10 هو العدد بعد حذف الرقم الأخير.' },
        { type: 'p', en: 'Why is this useful? The numbers you meet every day are made of digits: your student ID, a phone number, a price in riyals. Many systems check an ID number by doing some work with its digits, for example adding them. With recursion, a number of <b>any</b> length is handled by the same few lines: peel off one digit, then deal with the shorter number.' },
        { type: 'analogy', title: 'Peeling an onion', en: 'You peel one layer (the last digit) and look at the smaller onion that remains. You repeat until only the center is left.' },
        { type: 'p', en: 'The sum of the digits of n is: the last digit <b>plus</b> the sum of the digits of the rest.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int sumDigits(int n) {
                  if (n < 10) {
                      return n;
                  }
                  return n % 10 + sumDigits(n / 10);
              }

              public static void main(String[] args) {
                  System.out.println(sumDigits(4096));
              }
          }
        `, out: '19' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['if (n < 10) { return n; }', 'BASE CASE: a single digit is its own digit sum.'],
          ['n % 10', 'The last digit.'],
          ['sumDigits(n / 10)', 'RECURSIVE CASE: the digit sum of the number without its last digit.']
        ], ar: 'مجموع الأرقام = الرقم الأخير + مجموع أرقام الباقي.' },
        { type: 'table', head: ['Call', 'Last digit', 'Rest', 'Answer'], rows: [
          ['sumDigits(4096)', '6', '409', '6 + sumDigits(409)'],
          ['sumDigits(409)', '9', '40', '9 + sumDigits(40)'],
          ['sumDigits(40)', '0', '4', '0 + sumDigits(4)'],
          ['sumDigits(4)', '-', '-', '4 (base case)'],
          ['Back up', '', '', '0 + 4 = 4, then 9 + 4 = 13, then 6 + 13 = <b>19</b>']
        ] },
        { type: 'memory', title: 'sumDigits(382) step by step', en: 'Each frame keeps its own n and its unfinished answer. Press Next.', frames: [
          { label: 'Call 1: n = 382. Not a single digit, so it needs 2 + sumDigits(38). It waits.', vars: [{ name: 'n (call 1)', type: 'int', value: '382' }, { name: 'answer (call 1)', value: '2 + ?' }] },
          { label: 'Call 2: n = 38. It needs 8 + sumDigits(3).', vars: [{ name: 'n (call 1)', type: 'int', value: '382' }, { name: 'answer (call 1)', value: '2 + ?' }, { name: 'n (call 2)', type: 'int', value: '38' }, { name: 'answer (call 2)', value: '8 + ?' }] },
          { label: 'Call 3: n = 3 is below 10. Base case: it returns <b>3</b>.', vars: [{ name: 'n (call 1)', type: 'int', value: '382' }, { name: 'answer (call 1)', value: '2 + ?' }, { name: 'n (call 2)', type: 'int', value: '38' }, { name: 'answer (call 2)', value: '8 + ?' }, { name: 'n (call 3)', type: 'int', value: '3' }, { name: 'answer (call 3)', value: 'returns 3' }] },
          { label: 'Call 3 is removed. Call 2 finishes: 8 + 3 = <b>11</b>.', vars: [{ name: 'n (call 1)', type: 'int', value: '382' }, { name: 'answer (call 1)', value: '2 + ?' }, { name: 'n (call 2)', type: 'int', value: '38' }, { name: 'answer (call 2)', value: '8 + 3 = 11' }] },
          { label: 'Call 2 is removed. Call 1 finishes: 2 + 11 = <b>13</b>, and returns 13.', vars: [{ name: 'n (call 1)', type: 'int', value: '382' }, { name: 'answer (call 1)', value: '2 + 11 = 13' }] }
        ], ar: 'كل استدعاء يحذف الرقم الأخير، ثم تُجمع الأرقام عند الصعود.' },
        { type: 'check', q: 'What is <code>sumDigits(123)</code>?', options: ['3', '6', '12', '123'], answer: 1, explain: '3 + sumDigits(12) = 3 + 2 + sumDigits(1) = 3 + 2 + 1 = 6.' },
        { type: 'h', en: 'Counting the digits' },
        { type: 'p', en: 'How many digits does a student ID like 441203 have? Use the same peeling idea, but instead of adding the digit itself, add <b>1</b> for every digit you peel. This is just like the queue picture from Lesson 3: every call adds 1 to the answer of the smaller call.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int countDigits(int n) {
                  if (n < 10) {
                      return 1;
                  }
                  return 1 + countDigits(n / 10);
              }

              public static void main(String[] args) {
                  System.out.println(countDigits(441203));
                  System.out.println(countDigits(7));
              }
          }
        `, out: J`
          6
          1
        ` },
        { type: 'lines', rows: [
          ['if (n < 10) { return 1; }', 'BASE CASE: a single digit is 1 digit.'],
          ['return 1 + countDigits(n / 10);', 'Count this last digit (1), plus the digits of the rest.'],
          ['countDigits(441203)', '1 + countDigits(44120) = ... = 1 + 1 + 1 + 1 + 1 + 1 = 6']
        ], ar: 'لعدّ الأرقام نضيف 1 لكل رقم نحذفه.' },
        { type: 'check', q: 'What is <code>countDigits(2026)</code>?', options: ['1', '3', '4', '10'], answer: 2, explain: '2026, 202, 20, 2: four calls, each adds 1. The answer is 4.' },
        { type: 'h', en: 'Powers: base to the exponent' },
        { type: 'p', en: '<code>2<sup>3</sup> = 2 × 2 × 2</code>. Notice that <code>2<sup>3</sup> = 2 × 2<sup>2</sup></code>. In general, <code>base<sup>exp</sup> = base × base<sup>exp-1</sup></code>, and anything to the power 0 is 1.' },
        { type: 'analogy', title: 'Doubling coins', en: 'A bank account that doubles each month: after 3 months it is 2 × (what it was after 2 months). The last month depends on the month before it.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static long power(int base, int exp) {
                  if (exp == 0) {
                      return 1;
                  }
                  return base * power(base, exp - 1);
              }

              public static void main(String[] args) {
                  System.out.println(power(2, 10));
                  System.out.println(power(3, 4));
                  System.out.println(power(5, 0));
              }
          }
        `, out: J`
          1024
          81
          1
        ` },
        { type: 'lines', rows: [
          ['if (exp == 0) { return 1; }', 'BASE CASE: any number to the power 0 is 1.'],
          ['base * power(base, exp - 1)', 'RECURSIVE CASE: one multiplication, and the exponent gets smaller.'],
          ['power(3, 4)', '3 * (3 * (3 * (3 * 1))) = 81']
        ], ar: 'الأساس يبقى ثابتاً والأس ينقص بمقدار 1.' },
        { type: 'memory', title: 'power(3, 2): base stays, exp shrinks', frames: [
          { label: 'Call 1: power(3, 2). exp is not 0, so it needs 3 * power(3, 1).', vars: [{ name: 'base (call 1)', type: 'int', value: '3' }, { name: 'exp (call 1)', type: 'int', value: '2' }, { name: 'answer (call 1)', value: '3 * ?' }] },
          { label: 'Call 2: power(3, 1). The base is still 3. It needs 3 * power(3, 0).', vars: [{ name: 'base (call 1)', type: 'int', value: '3' }, { name: 'exp (call 1)', type: 'int', value: '2' }, { name: 'answer (call 1)', value: '3 * ?' }, { name: 'base (call 2)', type: 'int', value: '3' }, { name: 'exp (call 2)', type: 'int', value: '1' }, { name: 'answer (call 2)', value: '3 * ?' }] },
          { label: 'Call 3: power(3, 0). exp == 0 is the base case: it returns <b>1</b>.', vars: [{ name: 'base (call 1)', type: 'int', value: '3' }, { name: 'exp (call 1)', type: 'int', value: '2' }, { name: 'answer (call 1)', value: '3 * ?' }, { name: 'base (call 2)', type: 'int', value: '3' }, { name: 'exp (call 2)', type: 'int', value: '1' }, { name: 'answer (call 2)', value: '3 * ?' }, { name: 'base (call 3)', type: 'int', value: '3' }, { name: 'exp (call 3)', type: 'int', value: '0' }, { name: 'answer (call 3)', value: 'returns 1' }] },
          { label: 'Call 3 is removed. Call 2 finishes: 3 * 1 = <b>3</b>.', vars: [{ name: 'base (call 1)', type: 'int', value: '3' }, { name: 'exp (call 1)', type: 'int', value: '2' }, { name: 'answer (call 1)', value: '3 * ?' }, { name: 'base (call 2)', type: 'int', value: '3' }, { name: 'exp (call 2)', type: 'int', value: '1' }, { name: 'answer (call 2)', value: '3 * 1 = 3' }] },
          { label: 'Call 2 is removed. Call 1 finishes: 3 * 3 = <b>9</b>.', vars: [{ name: 'base (call 1)', type: 'int', value: '3' }, { name: 'exp (call 1)', type: 'int', value: '2' }, { name: 'answer (call 1)', value: '3 * 3 = 9' }] }
        ], ar: 'الأساس 3 في كل استدعاء، والأس فقط هو الذي ينقص.' },
        { type: 'check', q: 'Which value does <code>power(2, 3)</code> return?', options: ['6', '8', '9', '5'], answer: 1, explain: '2 * 2 * 2 * 1 = 8.' },
        { type: 'note', kind: 'exam', en: 'In <code>power</code> the first parameter <code>base</code> stays the same in every call. Only <code>exp</code> gets smaller.' },
        { type: 'steps', title: 'Worked example: digit sum of a typed number', problem: 'Read a whole number and print the sum of its digits.', steps: [
          { en: 'Base case: if n has one digit (below 10), the answer is n.', code: J`
            if (n < 10) {
                return n;
            }
          ` },
          { en: 'Recursive case: add the last digit to the digit sum of the rest.', code: 'return n % 10 + sumDigits(n / 10);' },
          { en: 'Trace for 507: 7 + sumDigits(50) = 7 + (0 + sumDigits(5)) = 7 + 0 + 5 = 12.' },
          { en: 'Read the number in main and print the answer.', code: J`
            Scanner in = new Scanner(System.in);
            System.out.println(sumDigits(in.nextInt()));
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static int sumDigits(int n) {
                  if (n < 10) {
                      return n;
                  }
                  return n % 10 + sumDigits(n / 10);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(sumDigits(in.nextInt()));
              }
          }
        `, stdin: '507', out: '12', ar: 'نقشر الرقم الأخير في كل استدعاء.' },
        { type: 'steps', title: 'Worked example: the largest digit', problem: 'Read a whole number (0 or more) and print its largest digit. For 52813 the answer is 8.', steps: [
          { en: 'Base case: a number with one digit (below 10). Its only digit is also its largest digit.', code: J`
            if (n < 10) {
                return n;
            }
          ` },
          { en: 'Recursive case: the largest digit is either the last digit, or the largest digit of the rest. <code>Math.max</code> picks the bigger of the two.', code: 'return Math.max(n % 10, maxDigit(n / 10));' },
          { en: 'Trace 52813 going down: compare 3 with maxDigit(5281), compare 1 with maxDigit(528), compare 8 with maxDigit(52), compare 2 with maxDigit(5). maxDigit(5) is the base case: 5.' },
          { en: 'Going up: max(2, 5) = 5, then max(8, 5) = 8, then max(1, 8) = 8, then max(3, 8) = 8.' },
          { en: 'In main, read the number and print the answer.', code: 'System.out.println(maxDigit(in.nextInt()));' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static int maxDigit(int n) {
                  if (n < 10) {
                      return n;
                  }
                  return Math.max(n % 10, maxDigit(n / 10));
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(maxDigit(in.nextInt()));
              }
          }
        `, stdin: '52813', out: '8', ar: 'أكبر رقم = الأكبر بين الرقم الأخير وأكبر رقم في الباقي.' }
      ],
      mistakes: [
        { title: 'Mixing up % and /', en: '<code>n % 10</code> is the last digit. <code>n / 10</code> is the rest.', code: 'return n / 10 + sumDigits(n % 10);' },
        { title: 'Wrong value in the base case', en: 'For a single digit n, the digit sum is n itself, not 0. Returning 0 loses the first digit: sumDigits(42) would give 2 instead of 6.', code: 'if (n < 10) return 0;   // wrong: should be return n;' },
        { title: 'Changing the base in power', en: 'Only the exponent shrinks.', code: 'return base * power(base - 1, exp);' },
        { title: 'Using int for big powers', en: 'power(2, 40) does not fit in an int. Use long.', code: 'public static int power(int b, int e)' }
      ],
      remember: [
        '<code>n % 10</code> = last digit, <code>n / 10</code> = the number without it.',
        'Digit sum base case: <code>n &lt; 10</code> returns <code>n</code>.',
        'Digit sum recursive case: <code>n % 10 + sumDigits(n / 10)</code>.',
        'Power base case: exponent 0 returns 1.',
        'Power recursive case: <code>base * power(base, exp - 1)</code>.',
        'Always <b>use</b> the value a recursive call returns, for example <code>1 + countDigits(n / 10)</code>.'
      ],
      rememberAr: 'الرقم الأخير n % 10 والباقي n / 10. مجموع الأرقام: الأخير + مجموع الباقي. القوة: base * power(base, exp-1) والأس 0 يعطي 1.',
      practice: [
        { t: 'mcq', q: 'What is <code>4096 / 10</code> in Java (both are ints)?', options: ['409.6', '409', '6', '410'], answer: 1, explain: 'Integer division drops the decimal part: 409.' },
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
        `, explain: '507: 7 + 0 + 5 = 12. 9 is a single digit. 99999: 9 times 5 = 45.' },
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
        `, explain: 'p(3,3) = 3*3*3*1 = 27. p(10,2) = 10*10*1 = 100. p(7,1) = 7*1 = 7.' },
        { t: 'fill', q: 'Complete the recursive digit-sum method.', code: J`
          public static int sumDigits(int n) {
              if (n < 10) {
                  return ___;
              }
              return n % 10 + sumDigits(___);
          }
        `, answers: ['n', ['n / 10', 'n/10']], explain: 'A single digit is its own sum. Otherwise add the last digit to the digit sum of n / 10.' },
        { t: 'order', q: 'Put the lines of <code>power</code> in order.', lines: [
          'public static long power(int base, int exp) {',
          '    if (exp == 0) {',
          '        return 1;',
          '    }',
          '    return base * power(base, exp - 1);',
          '}'
        ], explain: 'Base case first, then the recursive case.' },
        { t: 'mcq', q: 'In <code>sumDigits(305)</code>, which two numbers are added in the FIRST call?', options: ['3 and 5', '5 and sumDigits(30)', '30 and 5', '305 and 0'], answer: 1, explain: 'The last digit is 5. The rest is 30, so the call is 5 + sumDigits(30).' },
        { t: 'code', q: 'Read two integers: a base and an exponent (zero or more). Print base raised to the exponent using a recursive method returning <code>long</code>. No prompts.', qAr: 'اقرأ الأساس والأس واطبع القوة بدالة عودية.', starter: J`
          import java.util.*;

          public class Main {
              public static long power(int base, int exp) {
                  // base case and recursive case
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int b = in.nextInt();
                  int e = in.nextInt();
                  System.out.println(power(b, e));
              }
          }
        `, tests: [{ stdin: '2 10', expected: '1024' }, { stdin: '5 0', expected: '1' }, { stdin: '3 4', expected: '81' }], solution: J`
          import java.util.*;

          public class Main {
              public static long power(int base, int exp) {
                  if (exp == 0) {
                      return 1;
                  }
                  return base * power(base, exp - 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int b = in.nextInt();
                  int e = in.nextInt();
                  System.out.println(power(b, e));
              }
          }
        `, hint: 'if (exp == 0) return 1; return base * power(base, exp - 1);', explain: 'Each call does one multiplication and lowers the exponent by one.' },
        { t: 'bug', q: 'This program should print 4 (the number of digits in 2026), but it prints 1. Tap the line with the bug.', qAr: 'البرنامج يطبع 1 بدلاً من 4. أين الخطأ؟', code: J`
          public class Main {
              public static int countDigits(int n) {
                  if (n < 10) {
                      return 1;
                  }
                  countDigits(n / 10);
                  return 1;
              }

              public static void main(String[] args) {
                  System.out.println(countDigits(2026));
              }
          }
        `, bug: [6, 7], fix: J`
          public class Main {
              public static int countDigits(int n) {
                  if (n < 10) {
                      return 1;
                  }
                  return 1 + countDigits(n / 10);
              }

              public static void main(String[] args) {
                  System.out.println(countDigits(2026));
              }
          }
        `, hint: 'The recursive call returns a number. What happens to that number?', explain: 'Line 6 makes the recursive call but throws its answer away, and line 7 always returns 1. So every call returns 1, whatever the smaller calls found. The answer of the smaller call must be USED: return 1 + countDigits(n / 10);', explainAr: 'نتيجة الاستدعاء العودي ضاعت. يجب استخدامها: return 1 + countDigits(n / 10).' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int maxDigit(int n) {
                  if (n < 10) {
                      return n;
                  }
                  return Math.max(n % 10, maxDigit(n / 10));
              }

              public static void main(String[] args) {
                  System.out.println(maxDigit(4719));
                  System.out.println(maxDigit(30));
              }
          }
        `, answer: J`
          9
          3
        `, explain: '4719: the digits are 4, 7, 1, 9, and the largest is 9. 30: max(0, maxDigit(3)) = max(0, 3) = 3.' },
        { t: 'code', q: 'Read a whole number n (0 or more). Print the <b>product</b> of its digits using a recursive method <code>productDigits(int n)</code>. For example 234 gives 2 × 3 × 4 = 24. No loops and no prompts.', qAr: 'اطبع حاصل ضرب أرقام العدد بدالة عودية.', starter: J`
          import java.util.*;

          public class Main {
              public static int productDigits(int n) {
                  // base case: a single digit
                  // recursive case: last digit times the product of the rest
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(productDigits(in.nextInt()));
              }
          }
        `, tests: [{ stdin: '234', expected: '24' }, { stdin: '105', expected: '0' }, { stdin: '7', expected: '7' }], solution: J`
          import java.util.*;

          public class Main {
              public static int productDigits(int n) {
                  if (n < 10) {
                      return n;
                  }
                  return n % 10 * productDigits(n / 10);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(productDigits(in.nextInt()));
              }
          }
        `, hint: 'if (n < 10) return n; return n % 10 * productDigits(n / 10);', explain: 'The base case returns the single digit itself. Every other call multiplies its last digit by the product of the rest. A 0 anywhere makes the product 0, which is correct.' }
      ]
    },
    // ---------------------------------------------------------------- L6
    {
      title: 'Fibonacci numbers: two calls at once',
      titleAr: 'أعداد فيبوناتشي: استدعاءان معاً',
      minutes: 35,
      body: [
        { type: 'h', en: 'A sequence built from the two before' },
        { type: 'p', en: 'The Fibonacci sequence starts with 0 and 1. Every next number is the <b>sum of the previous two</b>: 0, 1, 1, 2, 3, 5, 8, 13, 21 ... For example 8 = 3 + 5. We write <code>fib(n) = fib(n-1) + fib(n-2)</code>. This time the method needs <b>two</b> base cases (fib(0) and fib(1)) and makes <b>two</b> recursive calls.', ar: 'كل حد = مجموع الحدين السابقين. لها حالتان أساسيتان واستدعاءان عوديان.' },
        { type: 'p', en: 'Why study a method with two calls? Many real problems <b>branch</b>: a folder can contain several folders, a family tree splits into two parents for every person, and a decision can have two choices. Fibonacci is the simplest example of this branching recursion, so it is a good place to practise tracing it slowly.' },
        { type: 'analogy', title: 'Rabbits and months', en: 'The number of rabbit pairs this month is the number of pairs last month plus the number two months ago. To know today, you must know two earlier answers.' },
        { type: 'analogy', title: 'A family tree', en: 'You have 2 parents, 4 grandparents and 8 great-grandparents. Every step back in time doubles the number of people. A method that calls itself twice grows like a family tree: the number of calls roughly doubles at every level.', ar: 'مثل شجرة العائلة: عدد الاستدعاءات يتضاعف تقريباً في كل مستوى.' },
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
        `, out: '0 1 1 2 3 5 8 13 21 34' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['if (n == 0) { return 0; }', 'BASE CASE 1: fib(0) is 0.'],
          ['if (n == 1) { return 1; }', 'BASE CASE 2: fib(1) is 1.'],
          ['return fib(n - 1) + fib(n - 2);', 'RECURSIVE CASE: two calls, added together.'],
          ['line.trim()', 'Removes the extra space at the end of the line.']
        ], ar: 'حالتان أساسيتان: fib(0)=0 وfib(1)=1.' },
        { type: 'check', q: 'What is <code>fib(5)</code>?', options: ['3', '5', '8', '13'], answer: 1, explain: 'The sequence 0, 1, 1, 2, 3, 5: index 5 holds 5.' },
        { type: 'h', en: 'Tracing fib(4) as a tree' },
        { type: 'p', en: 'Each call splits into two calls. Follow each branch to the base cases, then add on the way back up.' },
        { type: 'table', head: ['Call', 'Splits into', 'Value'], rows: [
          ['fib(4)', 'fib(3) + fib(2)', '2 + 1 = <b>3</b>'],
          ['fib(3)', 'fib(2) + fib(1)', '1 + 1 = 2'],
          ['fib(2)', 'fib(1) + fib(0)', '1 + 0 = 1'],
          ['fib(1)', 'base case', '1'],
          ['fib(0)', 'base case', '0']
        ] },
        { type: 'p', en: 'In which <b>order</b> does Java make these calls? It always finishes the left call <code>fib(n - 1)</code> completely, with all of its own calls, before it starts the right call <code>fib(n - 2)</code>. Here are all 9 calls of <code>fib(4)</code> in the order they start.' },
        { type: 'table', head: ['Order', 'Call', 'Called by', 'Returns'], rows: [
          ['1', 'fib(4)', 'main', '3 (finishes last)'],
          ['2', 'fib(3)', 'fib(4), left call', '2'],
          ['3', 'fib(2)', 'fib(3), left call', '1'],
          ['4', 'fib(1)', 'fib(2), left call', '1 (base case)'],
          ['5', 'fib(0)', 'fib(2), right call', '0 (base case)'],
          ['6', 'fib(1)', 'fib(3), right call', '1 (base case)'],
          ['7', 'fib(2)', 'fib(4), right call', '1'],
          ['8', 'fib(1)', 'fib(2), left call', '1 (base case)'],
          ['9', 'fib(0)', 'fib(2), right call', '0 (base case)']
        ] },
        { type: 'p', en: 'Now look at the stack for the smaller call <code>fib(3)</code>. It makes 5 calls in total, but the stack never holds more than 3 frames at the same time, because the left branch is finished and removed before the right branch starts.', ar: 'ينتهي الفرع الأيسر ويُحذف قبل أن يبدأ الفرع الأيمن.' },
        { type: 'memory', title: 'fib(3): one branch at a time', frames: [
          { label: 'Call 1: fib(3) needs fib(2) + fib(1). It starts with the LEFT call, fib(2).', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '? + ?' }] },
          { label: 'Call 2: fib(2) needs fib(1) + fib(0). It starts with fib(1).', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '? + ?' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'answer (call 2)', value: '? + ?' }] },
          { label: 'Call 3: fib(1) is a base case. It returns <b>1</b>.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '? + ?' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'answer (call 2)', value: '? + ?' }, { name: 'n (call 3)', type: 'int', value: '1' }, { name: 'answer (call 3)', value: 'returns 1' }] },
          { label: 'Call 3 is removed; call 2 writes 1 on its left. Then call 2 makes its RIGHT call: call 4, fib(0), returns <b>0</b>.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '? + ?' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'answer (call 2)', value: '1 + ?' }, { name: 'n (call 4)', type: 'int', value: '0' }, { name: 'answer (call 4)', value: 'returns 0' }] },
          { label: 'Call 4 is removed. Call 2 finishes: 1 + 0 = <b>1</b>.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '? + ?' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'answer (call 2)', value: '1 + 0 = 1' }] },
          { label: 'Call 2 is removed; call 1 writes 1 on its left. Its RIGHT call is call 5, fib(1), which returns <b>1</b>.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '1 + ?' }, { name: 'n (call 5)', type: 'int', value: '1' }, { name: 'answer (call 5)', value: 'returns 1' }] },
          { label: 'Call 5 is removed. Call 1 finishes: 1 + 1 = <b>2</b>. So fib(3) = 2.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'answer (call 1)', value: '1 + 1 = 2' }] }
        ], ar: 'خمسة استدعاءات، لكن لا يوجد في المكدس أكثر من ثلاثة إطارات في الوقت نفسه.' },
        { type: 'p', en: 'Look carefully: <code>fib(2)</code> is computed twice (once inside fib(3) and once directly from fib(4)). For big n, this repeated work grows very quickly.' },
        { type: 'note', kind: 'warn', en: '<code>fib(5)</code> makes 15 calls. <code>fib(40)</code> makes hundreds of millions. Recursive Fibonacci is great for learning, but a loop is much faster.', ar: 'فيبوناتشي العودية تكرر الحسابات؛ الحلقة أسرع.' },
        { type: 'check', q: 'Why is recursive <code>fib(40)</code> slow?', options: ['Java is slow', 'It computes the same values again and again', 'It has no base case', 'It uses long'], answer: 1, explain: 'The same smaller values are recomputed many times, so the number of calls explodes.' },
        { type: 'h', en: 'Counting the calls' },
        { type: 'p', en: 'Let us measure the repeated work. A <code>static</code> variable (from Unit 2) belongs to the class, not to one call, so all calls share it. Every call adds 1 to it. This is the only new idea in the program.' },
        { type: 'code', run: true, code: J`
          public class Main {
              static int calls = 0;

              public static int fib(int n) {
                  calls++;
                  if (n <= 1) {
                      return n;
                  }
                  return fib(n - 1) + fib(n - 2);
              }

              public static void main(String[] args) {
                  int[] tests = {5, 10, 20};
                  for (int n : tests) {
                      calls = 0;
                      int value = fib(n);
                      System.out.println("fib(" + n + ") = " + value + " needed " + calls + " calls");
                  }
              }
          }
        `, out: J`
          fib(5) = 5 needed 15 calls
          fib(10) = 55 needed 177 calls
          fib(20) = 6765 needed 21891 calls
        ` },
        { type: 'lines', rows: [
          ['static int calls = 0;', 'One shared counter for all calls. It is NOT inside any frame.'],
          ['calls++;', 'Every call, big or small, adds 1.'],
          ['calls = 0;', 'Start counting again for each test.']
        ], ar: 'العدّاد المشترك يبيّن أن عدد الاستدعاءات يزداد بسرعة كبيرة.' },
        { type: 'p', en: 'Going from n = 10 to n = 20 makes the answer about 120 times bigger, and the number of calls about 120 times bigger too. For fib(40) the method needs more than 300 million calls. A loop needs only 40 steps (Lesson 10 compares the two).' },
        { type: 'check', q: 'Why can all calls change the same <code>calls</code> variable?', options: ['Because it is a parameter', 'Because it is static, so it belongs to the class and not to one frame', 'Because Java copies it into every frame', 'Because fib returns it'], answer: 1, explain: 'Parameters and local variables live in a frame (one copy per call). A static variable lives once for the whole class, so every call sees the same counter.' },
        { type: 'steps', title: 'Worked example: first n Fibonacci numbers', problem: 'Read n and print the first n Fibonacci numbers on one line, separated by spaces.', steps: [
          { en: 'Write fib with its two base cases and the recursive case.', code: J`
            public static int fib(int n) {
                if (n == 0) return 0;
                if (n == 1) return 1;
                return fib(n - 1) + fib(n - 2);
            }
          ` },
          { en: 'In main, read n and start with an empty line of text.', code: J`
            int n = in.nextInt();
            String line = "";
          ` },
          { en: 'Loop from 0 to n - 1 and add each fib(i) and a space.', code: J`
            for (int i = 0; i < n; i++) {
                line += fib(i) + " ";
            }
          ` },
          { en: 'Print the line without the last space.', code: 'System.out.println(line.trim());' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static int fib(int n) {
                  if (n == 0) return 0;
                  if (n == 1) return 1;
                  return fib(n - 1) + fib(n - 2);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  String line = "";
                  for (int i = 0; i < n; i++) {
                      line += fib(i) + " ";
                  }
                  System.out.println(line.trim());
              }
          }
        `, stdin: '8', out: '0 1 1 2 3 5 8 13', ar: 'نطبع أول n حداً.' },
        { type: 'steps', title: 'Worked example: ways to climb the stairs', problem: 'You can climb the stairs 1 stair or 2 stairs at a time. Read n (1 or more). In how many different ways can you climb n stairs?', steps: [
          { en: 'Look at your <b>last</b> move. To reach stair n, the last move was either 1 stair (from stair n - 1) or 2 stairs (from stair n - 2).' },
          { en: 'So the number of ways is the ways to reach n - 1 plus the ways to reach n - 2. Two recursive calls, just like Fibonacci.', code: 'return ways(n - 1) + ways(n - 2);' },
          { en: 'Base cases: 1 stair can be climbed in 1 way (1). 2 stairs can be climbed in 2 ways (1 + 1, or 2).', code: J`
            if (n == 1) {
                return 1;
            }
            if (n == 2) {
                return 2;
            }
          ` },
          { en: 'Trace ways(4) = ways(3) + ways(2) = (ways(2) + ways(1)) + 2 = (2 + 1) + 2 = 5. Check by hand: 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2. Five ways!' },
          { en: 'In main, read n and print the answer in a sentence.', code: 'System.out.println("Ways to climb " + n + " stairs: " + ways(n));' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static int ways(int n) {
                  if (n == 1) {
                      return 1;
                  }
                  if (n == 2) {
                      return 2;
                  }
                  return ways(n - 1) + ways(n - 2);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  System.out.println("Ways to climb " + n + " stairs: " + ways(n));
              }
          }
        `, stdin: '5', out: 'Ways to climb 5 stairs: 8', ar: 'الحركة الأخيرة إما درجة أو درجتان، لذلك نجمع استدعاءين.' }
      ],
      mistakes: [
        { title: 'Only one base case', en: 'fib(1) would call fib(0) and fib(-1), which never stops.', code: 'if (n == 0) return 0;' },
        { title: 'Using + instead of two calls', en: 'You need both fib(n - 1) AND fib(n - 2).', code: 'return fib(n - 1) + 1;' },
        { title: 'Wrong start values', en: 'Our sequence starts fib(0) = 0, fib(1) = 1. Some books start at 1, 1.', code: 'if (n == 0) return 1;' },
        { title: 'Large n', en: 'fib(45) with recursion takes a very long time.', code: 'fib(45);' }
      ],
      remember: [
        '<code>fib(n) = fib(n-1) + fib(n-2)</code>.',
        'Two base cases: <code>fib(0) = 0</code> and <code>fib(1) = 1</code>.',
        'Two recursive calls make a tree of calls.',
        'The same values are computed many times, so it is slow for large n.',
        'The sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.',
        'Java finishes the left call completely before it starts the right call.'
      ],
      rememberAr: 'fib(n) = fib(n-1) + fib(n-2) مع حالتين أساسيتين. الطريقة العودية بطيئة للأعداد الكبيرة لأنها تكرر الحسابات.',
      practice: [
        { t: 'mcq', q: 'Using fib(0) = 0, fib(1) = 1, what is <code>fib(7)</code>?', options: ['8', '13', '21', '7'], answer: 1, explain: 'The sequence 0, 1, 1, 2, 3, 5, 8, 13: index 7 holds 13.', explainAr: 'الحد السابع 13.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int fib(int n) {
                  if (n <= 1) {
                      return n;
                  }
                  return fib(n - 1) + fib(n - 2);
              }

              public static void main(String[] args) {
                  System.out.println(fib(5));
                  System.out.println(fib(2));
              }
          }
        `, answer: J`
          5
          1
        `, explain: 'fib(5) = 5 and fib(2) = fib(1) + fib(0) = 1 + 0 = 1.' },
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
        `, explain: 'g is Fibonacci: 0, 1, 1, 2, 3, 5, 8, so g(6) = 8. g(1) + g(0) = 1 + 0 = 1.' },
        { t: 'fill', q: 'Complete the Fibonacci method.', code: J`
          public static int fib(int n) {
              if (n <= 1) {
                  return ___;
              }
              return fib(n - 1) + fib(___);
          }
        `, answers: ['n', ['n - 2', 'n-2']], explain: 'For n = 0 or 1 the answer is n itself. Otherwise add fib(n - 1) and fib(n - 2).' },
        { t: 'mcq', q: 'Why is simple recursive Fibonacci slow for large n?', options: ['Because of integer division', 'It solves the same smaller problems again and again', 'Java cannot do recursion well', 'It has no base case'], answer: 1, explain: 'fib(n-1) and fib(n-2) both recompute many of the same values.' },
        { t: 'order', q: 'Put the lines in order.', lines: [
          'public static int fib(int n) {',
          '    if (n <= 1) {',
          '        return n;',
          '    }',
          '    return fib(n - 1) + fib(n - 2);',
          '}'
        ], explain: 'Base case, then two recursive calls added together.' },
        { t: 'code', q: 'Write a recursive <code>fib</code> method. Read <code>n</code> and print <code>fib(n)</code>. No prompts.', qAr: 'اكتب دالة فيبوناتشي العودية واطبع fib(n).', starter: J`
          import java.util.*;

          public class Main {
              public static int fib(int n) {
                  // base cases and recursive case
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(fib(in.nextInt()));
              }
          }
        `, tests: [{ stdin: '10', expected: '55' }, { stdin: '0', expected: '0' }, { stdin: '1', expected: '1' }], solution: J`
          import java.util.*;

          public class Main {
              public static int fib(int n) {
                  if (n <= 1) {
                      return n;
                  }
                  return fib(n - 1) + fib(n - 2);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(fib(in.nextInt()));
              }
          }
        `, hint: 'if (n <= 1) return n; return fib(n - 1) + fib(n - 2);', explain: 'n <= 1 covers both base cases at once.' },
        { t: 'bug', q: 'This program should print fib(5) = 5, but it ends with <code>StackOverflowError</code>. Tap the line with the bug.', qAr: 'البرنامج لا يتوقف. أين الخطأ؟', code: J`
          public class Main {
              public static int fib(int n) {
                  if (n == 0) {
                      return 0;
                  }
                  return fib(n - 1) + fib(n - 2);
              }

              public static void main(String[] args) {
                  System.out.println(fib(5));
              }
          }
        `, bug: 3, fix: J`
          public class Main {
              public static int fib(int n) {
                  if (n <= 1) {
                      return n;
                  }
                  return fib(n - 1) + fib(n - 2);
              }

              public static void main(String[] args) {
                  System.out.println(fib(5));
              }
          }
        `, hint: 'What does fib(1) do with this base case?', explain: 'The base case only catches 0. Then fib(1) calls fib(0) and fib(-1), and fib(-1) calls fib(-2), fib(-3) ... which never reach 0. With two calls (n - 1 and n - 2) you need two base cases: if (n <= 1) return n; covers fib(0) = 0 and fib(1) = 1.', explainAr: 'نحتاج حالتين أساسيتين: n <= 1 تُرجع n.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int ways(int n) {
                  if (n == 1) {
                      return 1;
                  }
                  if (n == 2) {
                      return 2;
                  }
                  return ways(n - 1) + ways(n - 2);
              }

              public static void main(String[] args) {
                  System.out.println(ways(3));
                  System.out.println(ways(4));
              }
          }
        `, answer: J`
          3
          5
        `, explain: 'ways(3) = ways(2) + ways(1) = 2 + 1 = 3. ways(4) = ways(3) + ways(2) = 3 + 2 = 5.' },
        { t: 'code', q: 'You can climb 1 or 2 stairs at a time. Read n (1 or more) and print the number of different ways to climb n stairs, using a recursive method <code>ways(int n)</code>. No prompts.', qAr: 'اطبع عدد طرق صعود n درجة (درجة أو درجتان في كل مرة).', starter: J`
          import java.util.*;

          public class Main {
              public static int ways(int n) {
                  // two base cases (1 stair, 2 stairs) and two recursive calls
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(ways(in.nextInt()));
              }
          }
        `, tests: [{ stdin: '1', expected: '1' }, { stdin: '4', expected: '5' }, { stdin: '10', expected: '89' }], solution: J`
          import java.util.*;

          public class Main {
              public static int ways(int n) {
                  if (n == 1) {
                      return 1;
                  }
                  if (n == 2) {
                      return 2;
                  }
                  return ways(n - 1) + ways(n - 2);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(ways(in.nextInt()));
              }
          }
        `, hint: 'ways(1) = 1, ways(2) = 2, otherwise ways(n - 1) + ways(n - 2).', explain: 'The last move is 1 or 2 stairs, so the answer is the sum of the ways for n - 1 and n - 2.' }
      ]
    },

    // ---------------------------------------------------------------- L7
    {
      title: 'Recursion on text: reverse and palindrome',
      titleAr: 'العودية على النصوص: العكس والتناظر',
      minutes: 35,
      body: [
        { type: 'h', en: 'Making a String smaller' },
        { type: 'p', en: 'To use recursion on a String, we need a way to make it smaller. Remember these String tools: <code>s.length()</code> (number of characters), <code>s.charAt(0)</code> (the first character), <code>s.substring(1)</code> (everything except the first character) and <code>s.substring(1, s.length() - 1)</code> (without the first and the last character).', ar: 'نُصغّر النص باستخدام substring.' },
        { type: 'p', en: 'Why recursion on text? Text is everywhere: names, passwords, car plates and messages. A String is a natural recursive thing: a word is its first letter followed by a <b>shorter word</b>. "Riyadh" is "R" followed by "iyadh". The <b>empty String</b> <code>""</code> (no characters at all) is the smallest String, and it is often the base case.', ar: 'الكلمة = الحرف الأول + كلمة أقصر. وأصغر نص هو النص الفارغ "".' },
        { type: 'table', head: ['Call on "CAT"', 'Result'], rows: [
          ['<code>"CAT".charAt(0)</code>', "'C'"],
          ['<code>"CAT".substring(1)</code>', '"AT"'],
          ['<code>"CAT".substring(1, 2)</code>', '"A"'],
          ['<code>"T".substring(1)</code>', '"" (empty String)']
        ] },
        { type: 'p', en: 'Two facts are worth remembering. <code>"T".substring(1)</code> gives the empty String "" without any error. But <code>"".charAt(0)</code> <b>is</b> an error, because there is no character at index 0. That is why every recursive method on Strings checks for a short String (the base case) <b>before</b> it uses <code>charAt</code>.', ar: 'substring(1) على حرف واحد يعطي ""، لكن charAt(0) على النص الفارغ خطأ.' },
        { type: 'h', en: 'Reversing a String' },
        { type: 'p', en: 'The reverse of "CAT" is the reverse of "AT" followed by the first letter "C". So: reverse the rest, then put the first character at the end. A String with 0 or 1 characters is already its own reverse (base case).' },
        { type: 'analogy', title: 'A queue turned around', en: 'The first person in the queue walks to the back after everyone else has been turned around.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static String reverse(String s) {
                  if (s.length() <= 1) {
                      return s;
                  }
                  return reverse(s.substring(1)) + s.charAt(0);
              }

              public static void main(String[] args) {
                  System.out.println(reverse("CAT"));
                  System.out.println(reverse("CS102"));
              }
          }
        `, out: J`
          TAC
          201SC
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['if (s.length() <= 1) { return s; }', 'BASE CASE: "" or one letter is already reversed.'],
          ['s.substring(1)', 'A smaller String: the text without its first letter.'],
          ['reverse(...) + s.charAt(0)', 'Reverse the rest, then add the first letter at the END.']
        ], ar: 'عكس النص = عكس الباقي ثم الحرف الأول في النهاية.' },
        { type: 'table', head: ['Call', 'Waits for', 'Returns'], rows: [
          ['reverse("CAT")', 'reverse("AT") + "C"', '"TA" + "C" = <b>"TAC"</b>'],
          ['reverse("AT")', 'reverse("T") + "A"', '"T" + "A" = "TA"'],
          ['reverse("T")', 'nothing (base case)', '"T"']
        ] },
        { type: 'memory', title: 'reverse("CAT") in memory', en: 'Each frame holds its own s, which is one letter shorter than the s of the call before it.', frames: [
          { label: 'Call 1: s = "CAT". It needs reverse("AT") + \'C\'. It waits.', vars: [{ name: 's (call 1)', type: 'String', value: '"CAT"' }, { name: 'answer (call 1)', value: '? + C' }] },
          { label: 'Call 2: s = "AT". It needs reverse("T") + \'A\'.', vars: [{ name: 's (call 1)', type: 'String', value: '"CAT"' }, { name: 'answer (call 1)', value: '? + C' }, { name: 's (call 2)', type: 'String', value: '"AT"' }, { name: 'answer (call 2)', value: '? + A' }] },
          { label: 'Call 3: s = "T" has length 1. Base case: it returns <b>"T"</b>.', vars: [{ name: 's (call 1)', type: 'String', value: '"CAT"' }, { name: 'answer (call 1)', value: '? + C' }, { name: 's (call 2)', type: 'String', value: '"AT"' }, { name: 'answer (call 2)', value: '? + A' }, { name: 's (call 3)', type: 'String', value: '"T"' }, { name: 'answer (call 3)', value: 'returns "T"' }] },
          { label: 'Call 3 is removed. Call 2 finishes: "T" + \'A\' = <b>"TA"</b>.', vars: [{ name: 's (call 1)', type: 'String', value: '"CAT"' }, { name: 'answer (call 1)', value: '? + C' }, { name: 's (call 2)', type: 'String', value: '"AT"' }, { name: 'answer (call 2)', value: '"T" + A = "TA"' }] },
          { label: 'Call 2 is removed. Call 1 finishes: "TA" + \'C\' = <b>"TAC"</b>.', vars: [{ name: 's (call 1)', type: 'String', value: '"CAT"' }, { name: 'answer (call 1)', value: '"TA" + C = "TAC"' }] }
        ], ar: 'الحرف الأول يُضاف في النهاية عند الصعود، لذلك ينعكس الترتيب.' },
        { type: 'check', q: 'What does <code>reverse("AB")</code> return?', options: ['"AB"', '"BA"', '"A"', '"B"'], answer: 1, explain: 'reverse("B") + "A" = "B" + "A" = "BA".' },
        { type: 'h', en: 'Printing backwards: work after the call' },
        { type: 'p', en: 'If you only want to <b>print</b> a word backwards, you do not need to build a new String. Remember Lesson 2: a print placed <b>after</b> the recursive call runs on the way up, in reverse order. So: first print the rest backwards, then print the first letter.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void printBackwards(String s) {
                  if (s.length() == 0) {
                      return;
                  }
                  printBackwards(s.substring(1));
                  System.out.print(s.charAt(0));
              }

              public static void main(String[] args) {
                  printBackwards("Abha");
                  System.out.println();
              }
          }
        `, out: 'ahbA' },
        { type: 'lines', rows: [
          ['if (s.length() == 0) { return; }', 'BASE CASE: the empty String. Nothing to print.'],
          ['printBackwards(s.substring(1));', 'First, go down: print the rest of the word backwards.'],
          ['System.out.print(s.charAt(0));', 'On the way up, print this call\'s first letter. The deepest call ("a") prints first.']
        ], ar: 'الطباعة بعد الاستدعاء تجعل الحروف تظهر بترتيب معكوس.' },
        { type: 'check', q: 'What would <code>printBackwards("Abha")</code> print if the two lines were swapped (print first, then the recursive call)?', options: ['ahbA', 'Abha', 'A', 'Nothing'], answer: 1, explain: 'Printing before the call happens on the way down, in the normal order: A, b, h, a.' },
        { type: 'h', en: 'Palindromes' },
        { type: 'p', en: 'A <b>palindrome</b> reads the same forwards and backwards, like "level". To test it: if the first and last characters are different, the answer is false. If they match, test the middle part (without those two characters).' },
        { type: 'code', run: true, code: J`
          public class Main {
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
                  System.out.println(isPalindrome("racecar"));
                  System.out.println(isPalindrome("noon"));
                  System.out.println(isPalindrome("java"));
              }
          }
        `, out: J`
          true
          true
          false
        ` },
        { type: 'lines', rows: [
          ['if (s.length() <= 1) { return true; }', 'BASE CASE: empty or one letter always reads the same.'],
          ['s.charAt(0) != s.charAt(s.length() - 1)', 'Compare the first and the last letters. Different? Then return false at once.'],
          ['isPalindrome(s.substring(1, s.length() - 1))', 'RECURSIVE CASE: the middle part must also be a palindrome.']
        ], ar: 'نقارن الطرفين ثم نختبر الوسط.' },
        { type: 'table', head: ['Call', 'First / last', 'Next'], rows: [
          ['isPalindrome("noon")', 'n / n match', 'isPalindrome("oo")'],
          ['isPalindrome("oo")', 'o / o match', 'isPalindrome("") because substring(1, 1) is empty'],
          ['isPalindrome("")', 'length 0, base case', 'true']
        ] },
        { type: 'analogy', title: 'Folding a paper strip', en: 'Write a word on a strip of paper and fold it in the middle. If every letter lands on the same letter, the word is a palindrome. The method works from the outside in: it compares the two outer letters first, then the next pair inside, and so on toward the fold. One wrong pair is enough to say "no".', ar: 'نقارن الحرفين الخارجيين، ثم الزوج التالي نحو الوسط.' },
        { type: 'check', q: 'Why is <code>s.length() &lt;= 1</code> a good base case for palindromes?', options: ['Because long Strings are never palindromes', 'It covers both the empty String (even length) and one letter (odd length)', 'Because charAt does not work on long Strings', 'It is faster'], answer: 1, explain: 'Even-length Strings shrink down to "" and odd-length Strings shrink down to one letter.' },
        { type: 'steps', title: 'Worked example: check a word', problem: 'Read one word. Print its reverse and then true or false for palindrome.', steps: [
          { en: 'Write reverse (last letter logic: reverse the rest, then add the first letter).', code: J`
            public static String reverse(String s) {
                if (s.length() <= 1) return s;
                return reverse(s.substring(1)) + s.charAt(0);
            }
          ` },
          { en: 'Write isPalindrome (compare ends, then check the middle).', code: J`
            public static boolean isPalindrome(String s) {
                if (s.length() <= 1) return true;
                if (s.charAt(0) != s.charAt(s.length() - 1)) return false;
                return isPalindrome(s.substring(1, s.length() - 1));
            }
          ` },
          { en: 'In main, read the word and print both answers.', code: J`
            String word = in.next();
            System.out.println(reverse(word));
            System.out.println(isPalindrome(word));
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static String reverse(String s) {
                  if (s.length() <= 1) return s;
                  return reverse(s.substring(1)) + s.charAt(0);
              }

              public static boolean isPalindrome(String s) {
                  if (s.length() <= 1) return true;
                  if (s.charAt(0) != s.charAt(s.length() - 1)) return false;
                  return isPalindrome(s.substring(1, s.length() - 1));
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String word = in.next();
                  System.out.println(reverse(word));
                  System.out.println(isPalindrome(word));
              }
          }
        `, stdin: 'level', out: J`
          level
          true
        `, ar: 'نقرأ كلمة ونطبع مقلوبها ونختبر التناظر.' },
        { type: 'steps', title: 'Worked example: ignore capital letters', problem: 'Read one word and print whether it is a palindrome, ignoring the difference between capital and small letters. "Racecar" should give true.', steps: [
          { en: 'The problem: "Racecar" starts with \'R\' and ends with \'r\'. For Java these are different characters, so our method says false.' },
          { en: 'The idea: change the word to small letters <b>first</b> with <code>toLowerCase()</code>, then check it. The recursive method itself does not change at all.', code: 'String small = word.toLowerCase();' },
          { en: 'Trace "racecar": r and r match, a and a match, c and c match, then "e" has length 1: true.' },
          { en: 'Print the original word and the answer.', code: 'System.out.println(word + ": " + isPalindrome(small));' }
        ], code: J`
          import java.util.*;

          public class Main {
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
                  String small = word.toLowerCase();
                  System.out.println(word + ": " + isPalindrome(small));
              }
          }
        `, stdin: 'Racecar', out: 'Racecar: true', ar: 'نحوّل الكلمة إلى حروف صغيرة قبل الفحص.' }
      ],
      mistakes: [
        { title: 'Putting the first letter first', en: 'That does not reverse anything.', code: 'return s.charAt(0) + reverse(s.substring(1));' },
        { title: 'No base case for the empty String', en: 'substring(1) of a one-letter String is "", and charAt(0) on "" crashes.', code: 'if (s.length() == 2) return ...;' },
        { title: 'Comparing Strings with !=', en: 'Compare characters with !=, but compare Strings with equals.', code: 'if (s.substring(0, 1) != s.substring(1, 2))' },
        { title: 'Forgetting upper and lower case', en: '"Madam" is not a palindrome here because M and m are different characters.', code: 'isPalindrome("Madam");   // false' }
      ],
      remember: [
        '<code>substring(1)</code> removes the first character; <code>substring(1, length - 1)</code> removes both ends.',
        'reverse: <code>reverse(rest) + firstChar</code>.',
        'palindrome: ends equal and the middle is a palindrome.',
        'Base case for Strings is usually <code>length() &lt;= 1</code>.',
        'Case matters: M and m are different. Use <code>toLowerCase()</code> first to ignore it.',
        'A print after the recursive call prints the letters in reverse order.'
      ],
      rememberAr: 'نصغّر النص بـ substring. العكس: عكس الباقي + الحرف الأول. التناظر: الطرفان متطابقان والوسط متناظر. الحالة الأساسية length() <= 1.',
      practice: [
        { t: 'mcq', q: 'What is <code>"HELLO".substring(1)</code>?', options: ['"H"', '"ELLO"', '"HELL"', '"ELL"'], answer: 1, explain: 'substring(1) keeps everything from index 1 to the end.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static String rev(String s) {
                  if (s.length() == 0) {
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
        `, explain: 'rev("JAV") = rev("AV") + J = (rev("V") + A) + J = "VAJ". rev("ab") is "ba" and rev("cd") is "dc".' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static boolean pal(String s) {
                  if (s.length() <= 1) {
                      return true;
                  }
                  if (s.charAt(0) != s.charAt(s.length() - 1)) {
                      return false;
                  }
                  return pal(s.substring(1, s.length() - 1));
              }

              public static void main(String[] args) {
                  System.out.println(pal("abba"));
                  System.out.println(pal("abca"));
                  System.out.println(pal("x"));
              }
          }
        `, answer: J`
          true
          false
          true
        `, explain: 'abba: a/a match, then "bb": b/b match, then "" is true. abca: a/a match, then "bc": b and c do not match, so false. "x" has one letter: true.' },
        { t: 'fill', q: 'Complete the reverse method.', code: J`
          public static String reverse(String s) {
              if (s.length() <= 1) {
                  return s;
              }
              return reverse(s.___(1)) + s.___(0);
          }
        `, answers: ['substring', 'charAt'], explain: 'Reverse everything after the first letter, then add the first letter at the end.' },
        { t: 'mcq', q: 'Which call does <code>isPalindrome("noon")</code> make next (when the ends match)?', options: ['isPalindrome("nooon")', 'isPalindrome("oo")', 'isPalindrome("noo")', 'isPalindrome("on")'], answer: 1, explain: 'Remove the first n and the last n to get "oo".' },
        { t: 'code', q: 'Read one word. Using <b>recursive</b> methods (no loops), print the word reversed on the first line and <code>true</code> or <code>false</code> (palindrome) on the second line. No prompts.', qAr: 'اطبع مقلوب الكلمة ثم true أو false باستخدام دوال عودية.', starter: J`
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
        `, hint: 'reverse: reverse(s.substring(1)) + s.charAt(0). isPalindrome: compare first and last, then recurse on s.substring(1, s.length() - 1).', explain: 'Both methods shrink the String and stop at length 0 or 1.' },
        { t: 'bug', q: 'This program should print <code>true</code>, but it crashes with <code>StringIndexOutOfBoundsException</code>. Tap the line with the bug.', qAr: 'البرنامج يتوقف بخطأ في الفهرس. أين الخطأ؟', code: J`
          public class Main {
              public static boolean pal(String s) {
                  if (s.length() <= 1) {
                      return true;
                  }
                  if (s.charAt(0) != s.charAt(s.length())) {
                      return false;
                  }
                  return pal(s.substring(1, s.length() - 1));
              }

              public static void main(String[] args) {
                  System.out.println(pal("noon"));
              }
          }
        `, bug: 6, fix: J`
          public class Main {
              public static boolean pal(String s) {
                  if (s.length() <= 1) {
                      return true;
                  }
                  if (s.charAt(0) != s.charAt(s.length() - 1)) {
                      return false;
                  }
                  return pal(s.substring(1, s.length() - 1));
              }

              public static void main(String[] args) {
                  System.out.println(pal("noon"));
              }
          }
        `, hint: 'For "noon", the length is 4. What are the valid indexes?', explain: 'The valid indexes of "noon" are 0 to 3. s.charAt(s.length()) asks for index 4, which does not exist, so Java throws StringIndexOutOfBoundsException. The last character is at s.length() - 1.', explainAr: 'آخر حرف في الفهرس s.length() - 1 وليس s.length().' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void printBackwards(String s) {
                  if (s.length() == 0) {
                      return;
                  }
                  printBackwards(s.substring(1));
                  System.out.print(s.charAt(0));
              }

              public static void main(String[] args) {
                  printBackwards("Taif");
                  System.out.println();
                  printBackwards("ab");
                  System.out.println();
              }
          }
        `, answer: J`
          fiaT
          ba
        `, explain: 'The print comes after the recursive call, so the letters appear on the way up: the last letter first. "Taif" becomes fiaT and "ab" becomes ba.' },
        { t: 'code', q: 'Read one word. Using a recursive method <code>doubleLetters(String s)</code>, print the word with every letter written twice. For example <code>abc</code> gives <code>aabbcc</code>. No loops and no prompts.', qAr: 'اطبع الكلمة مع تكرار كل حرف مرتين باستخدام دالة عودية.', starter: J`
          import java.util.*;

          public class Main {
              public static String doubleLetters(String s) {
                  // base case: the empty String
                  // recursive case: first letter twice + doubleLetters of the rest
                  return "";
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(doubleLetters(in.next()));
              }
          }
        `, tests: [{ stdin: 'abc', expected: 'aabbcc' }, { stdin: 'Hi', expected: 'HHii' }, { stdin: 'x', expected: 'xx' }], solution: J`
          import java.util.*;

          public class Main {
              public static String doubleLetters(String s) {
                  if (s.length() == 0) {
                      return "";
                  }
                  char first = s.charAt(0);
                  return "" + first + first + doubleLetters(s.substring(1));
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(doubleLetters(in.next()));
              }
          }
        `, hint: 'Start the expression with "" so that first + first joins two characters instead of adding their codes: "" + first + first + doubleLetters(s.substring(1)).', explain: 'Each call handles one letter and leaves the rest of the word to the smaller call. Starting with "" makes Java join characters as text; first + first alone would add two char codes as numbers.' }
      ]
    },
    // ---------------------------------------------------------------- L8
    {
      title: 'Helper methods: carrying extra information',
      titleAr: 'الدوال المساعدة: حمل معلومات إضافية',
      minutes: 35,
      body: [
        { type: 'h', en: 'Why do we need a helper?' },
        { type: 'p', en: 'Using <code>substring</code> at every step creates a new String each time. A cleverer way is to keep the original data and pass <b>positions</b> (indexes) that say which part we are looking at. But the person who calls our method should not have to supply these extra numbers. The solution is a <b>helper method</b>: a simple public method for the caller, and a second method with extra parameters that does the recursion.', ar: 'الدالة المساعدة تحمل معاملات إضافية مثل الفهارس، وتبقى الدالة العامة بسيطة.' },
        { type: 'p', en: 'Some words for this lesson. An <b>index</b> is a position number: 0 for the first element, 1 for the second, and so on. A <b>pointer</b> here simply means an <code>int</code> variable that holds an index, like a finger pointing at one letter. The keyword <code>private</code> (Unit 2) hides the helper, so only code inside the class can call it.' },
        { type: 'analogy', title: 'A receptionist', en: 'You tell the receptionist what you need. She then walks through the building with a list of rooms and a pen, keeping track of where she is. You do not need to know how she does it.' },
        { type: 'p', en: 'Two methods can have the same name if their parameters are different (this is called <b>overloading</b>). The public method has few parameters; the private helper has more.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static boolean isPalindrome(String s) {
                  return isPalindrome(s, 0, s.length() - 1);
              }

              private static boolean isPalindrome(String s, int low, int high) {
                  if (low >= high) {
                      return true;
                  }
                  if (s.charAt(low) != s.charAt(high)) {
                      return false;
                  }
                  return isPalindrome(s, low + 1, high - 1);
              }

              public static void main(String[] args) {
                  System.out.println(isPalindrome("level"));
                  System.out.println(isPalindrome("Madam"));
              }
          }
        `, out: J`
          true
          false
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['isPalindrome(String s)', 'The simple method the caller uses.'],
          ['return isPalindrome(s, 0, s.length() - 1);', 'Starts the helper: low is the first index, high is the last index.'],
          ['if (low >= high) { return true; }', 'BASE CASE: the two pointers met in the middle. Nothing is left to compare.'],
          ['isPalindrome(s, low + 1, high - 1)', 'RECURSIVE CASE: move both pointers one step towards the middle.']
        ], ar: 'low وhigh يتحركان نحو الوسط.' },
        { type: 'check', q: 'Why does the public method call the helper with <code>0</code> and <code>s.length() - 1</code>?', options: ['They are the first and the last index', 'They are the length twice', 'To make the method private', 'To avoid the base case'], answer: 0, explain: 'The helper starts by looking at the whole String: from the first index to the last index.' },
        { type: 'p', en: 'Let us see the two pointers move for "abcba":' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static boolean pal(String s, int low, int high) {
                  System.out.println(low + " " + high);
                  if (low >= high) {
                      return true;
                  }
                  if (s.charAt(low) != s.charAt(high)) {
                      return false;
                  }
                  return pal(s, low + 1, high - 1);
              }

              public static void main(String[] args) {
                  System.out.println(pal("abcba", 0, 4));
              }
          }
        `, out: J`
          0 4
          1 3
          2 2
          true
        ` },
        { type: 'p', en: 'Read the output slowly. First the pointers are on index 0 and 4 (a and a: they match). Then on 1 and 3 (b and b: they match). The last line, 2 2, means both pointers are on the middle letter c. One letter always matches itself, so <code>low &gt;= high</code> returns true. The String itself was never copied: only the two numbers changed.', ar: 'النص لم يُنسخ أبداً؛ فقط الرقمان low وhigh تغيّرا.' },
        { type: 'h', en: 'Arrays need a helper too' },
        { type: 'p', en: 'We cannot make an array smaller. So we pass the array and the index where we are now. When the index equals the length, there are no elements left (base case).' },
        { type: 'analogy', title: 'A finger on the class list', en: 'A teacher reads the class list from top to bottom with a finger on the current line. The list itself never changes; only the finger moves down one line at a time. When the finger goes past the last line, the job is done. In a recursive helper, the array is the list and the index is the finger.', ar: 'المصفوفة لا تتغير، والفهرس مثل الإصبع الذي يتحرك سطراً سطراً.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int sum(int[] a) {
                  return sum(a, 0);
              }

              private static int sum(int[] a, int index) {
                  if (index == a.length) {
                      return 0;
                  }
                  return a[index] + sum(a, index + 1);
              }

              public static void main(String[] args) {
                  int[] marks = {4, 7, 10, 3, 8};
                  System.out.println(sum(marks));
              }
          }
        `, out: '32' },
        { type: 'lines', rows: [
          ['sum(a, 0)', 'Start at index 0.'],
          ['if (index == a.length) { return 0; }', 'BASE CASE: we are past the last element. An empty sum is 0.'],
          ['a[index] + sum(a, index + 1)', 'The current element plus the sum of the rest.']
        ], ar: 'الفهرس يتقدم خطوة في كل استدعاء.' },
        { type: 'p', en: 'Here is the most important picture of this lesson. The array is an <b>object</b>, so it lives once on the heap (Unit 2). Every call gets its own copy of the <b>reference</b> <code>a</code>, but all the arrows point to the <b>same</b> array. Only <code>index</code> is different in each frame. We use a shorter array, {4, 7, 10}.', ar: 'كل الاستدعاءات تشير إلى المصفوفة نفسها، والذي يختلف هو الفهرس فقط.' },
        { type: 'memory', title: 'sum({4, 7, 10}): one array, many indexes', frames: [
          { label: 'Call 1: index 0. It needs a[0] + sum(a, 1) = 4 + ?', vars: [{ name: 'a (call 1)', type: 'int[]', ref: 'A' }, { name: 'index (call 1)', type: 'int', value: '0' }, { name: 'answer (call 1)', value: '4 + ?' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '4' }, { name: '[1]', value: '7' }, { name: '[2]', value: '10' }] }] },
          { label: 'Call 2: index 1. Its a points to the SAME array. It needs 7 + ?', vars: [{ name: 'a (call 1)', type: 'int[]', ref: 'A' }, { name: 'index (call 1)', type: 'int', value: '0' }, { name: 'answer (call 1)', value: '4 + ?' }, { name: 'a (call 2)', type: 'int[]', ref: 'A' }, { name: 'index (call 2)', type: 'int', value: '1' }, { name: 'answer (call 2)', value: '7 + ?' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '4' }, { name: '[1]', value: '7' }, { name: '[2]', value: '10' }] }] },
          { label: 'Call 3: index 2. It needs 10 + ?', vars: [{ name: 'a (call 1)', type: 'int[]', ref: 'A' }, { name: 'index (call 1)', type: 'int', value: '0' }, { name: 'answer (call 1)', value: '4 + ?' }, { name: 'a (call 2)', type: 'int[]', ref: 'A' }, { name: 'index (call 2)', type: 'int', value: '1' }, { name: 'answer (call 2)', value: '7 + ?' }, { name: 'a (call 3)', type: 'int[]', ref: 'A' }, { name: 'index (call 3)', type: 'int', value: '2' }, { name: 'answer (call 3)', value: '10 + ?' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '4' }, { name: '[1]', value: '7' }, { name: '[2]', value: '10' }] }] },
          { label: 'Call 4: index 3 equals a.length. Base case: it returns <b>0</b> without touching the array.', vars: [{ name: 'a (call 1)', type: 'int[]', ref: 'A' }, { name: 'index (call 1)', type: 'int', value: '0' }, { name: 'answer (call 1)', value: '4 + ?' }, { name: 'a (call 2)', type: 'int[]', ref: 'A' }, { name: 'index (call 2)', type: 'int', value: '1' }, { name: 'answer (call 2)', value: '7 + ?' }, { name: 'a (call 3)', type: 'int[]', ref: 'A' }, { name: 'index (call 3)', type: 'int', value: '2' }, { name: 'answer (call 3)', value: '10 + ?' }, { name: 'a (call 4)', type: 'int[]', ref: 'A' }, { name: 'index (call 4)', type: 'int', value: '3' }, { name: 'answer (call 4)', value: 'returns 0' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '4' }, { name: '[1]', value: '7' }, { name: '[2]', value: '10' }] }] },
          { label: 'Call 4 is removed. Call 3 finishes: 10 + 0 = <b>10</b>.', vars: [{ name: 'a (call 1)', type: 'int[]', ref: 'A' }, { name: 'index (call 1)', type: 'int', value: '0' }, { name: 'answer (call 1)', value: '4 + ?' }, { name: 'a (call 2)', type: 'int[]', ref: 'A' }, { name: 'index (call 2)', type: 'int', value: '1' }, { name: 'answer (call 2)', value: '7 + ?' }, { name: 'a (call 3)', type: 'int[]', ref: 'A' }, { name: 'index (call 3)', type: 'int', value: '2' }, { name: 'answer (call 3)', value: '10 + 0 = 10' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '4' }, { name: '[1]', value: '7' }, { name: '[2]', value: '10' }] }] },
          { label: 'Call 3 is removed. Call 2 finishes: 7 + 10 = <b>17</b>.', vars: [{ name: 'a (call 1)', type: 'int[]', ref: 'A' }, { name: 'index (call 1)', type: 'int', value: '0' }, { name: 'answer (call 1)', value: '4 + ?' }, { name: 'a (call 2)', type: 'int[]', ref: 'A' }, { name: 'index (call 2)', type: 'int', value: '1' }, { name: 'answer (call 2)', value: '7 + 10 = 17' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '4' }, { name: '[1]', value: '7' }, { name: '[2]', value: '10' }] }] },
          { label: 'Call 2 is removed. Call 1 finishes: 4 + 17 = <b>21</b>. The array was never copied or changed.', vars: [{ name: 'a (call 1)', type: 'int[]', ref: 'A' }, { name: 'index (call 1)', type: 'int', value: '0' }, { name: 'answer (call 1)', value: '4 + 17 = 21' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '4' }, { name: '[1]', value: '7' }, { name: '[2]', value: '10' }] }] }
        ], ar: 'المصفوفة موجودة مرة واحدة، وكل إطار يحمل فهرسه الخاص.' },
        { type: 'check', q: 'For an array of length 5, which index makes the base case true?', options: ['4', '5', '0', '-1'], answer: 1, explain: 'Valid indexes are 0 to 4. At index 5 we are past the end.' },
        { type: 'h', en: 'A helper for an ArrayList' },
        { type: 'p', en: 'The same idea works for an <code>ArrayList</code> (Unit 7). Use <code>size()</code> instead of <code>length</code>, and <code>get(i)</code> instead of <code>a[i]</code>. Here a helper prints a numbered list of names, like a class list for the teacher. The index starts at 0, but people count from 1, so we print <code>i + 1</code>.' },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void printList(ArrayList<String> names) {
                  printList(names, 0);
              }

              private static void printList(ArrayList<String> names, int i) {
                  if (i == names.size()) {
                      return;
                  }
                  System.out.println((i + 1) + ". " + names.get(i));
                  printList(names, i + 1);
              }

              public static void main(String[] args) {
                  ArrayList<String> names = new ArrayList<String>();
                  names.add("Sara");
                  names.add("Omar");
                  names.add("Lina");
                  printList(names);
              }
          }
        `, out: J`
          1. Sara
          2. Omar
          3. Lina
        ` },
        { type: 'lines', rows: [
          ['printList(names, 0);', 'The public method starts the helper at index 0.'],
          ['if (i == names.size()) { return; }', 'BASE CASE: we are past the last name.'],
          ['(i + 1) + ". " + names.get(i)', 'The number people expect (starting at 1) and the name at index i.'],
          ['printList(names, i + 1);', 'The same list, the next index.']
        ], ar: 'مع ArrayList نستخدم size() وget(i).' },
        { type: 'check', q: 'In the ArrayList helper, which expression plays the role of <code>a.length</code>?', options: ['names.length', 'names.size()', 'names.get(i)', 'i + 1'], answer: 1, explain: 'An ArrayList tells its number of elements with size(). Arrays use length (without brackets).' },
        { type: 'steps', title: 'Worked example: sum of an array', problem: 'Read n numbers into an array and print their sum using a recursive helper.', steps: [
          { en: 'Write the public method. It starts the helper at index 0.', code: J`
            public static int sum(int[] a) {
                return sum(a, 0);
            }
          ` },
          { en: 'Write the helper: base case when index reaches the length.', code: J`
            private static int sum(int[] a, int index) {
                if (index == a.length) {
                    return 0;
                }
          ` },
          { en: 'Recursive case: current element + the sum from the next index.', code: J`
                return a[index] + sum(a, index + 1);
            }
          ` },
          { en: 'In main, fill the array and print sum(a).' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static int sum(int[] a) {
                  return sum(a, 0);
              }

              private static int sum(int[] a, int index) {
                  if (index == a.length) {
                      return 0;
                  }
                  return a[index] + sum(a, index + 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] a = new int[n];
                  for (int i = 0; i < n; i++) {
                      a[i] = in.nextInt();
                  }
                  System.out.println(sum(a));
              }
          }
        `, stdin: '4\n3 5 2 10', out: '20', ar: 'الدالة العامة تبدأ المساعدة من الفهرس 0.' },
        { type: 'steps', title: 'Worked example: total of a shopping cart', problem: 'Read n, then n prices in riyals. Store them in an <code>ArrayList&lt;Integer&gt;</code> and print the total with a recursive helper, like this: <code>Total: 80 SAR</code>.', steps: [
          { en: 'The public method takes only the list and starts the helper at index 0.', code: J`
            public static int total(ArrayList<Integer> prices) {
                return total(prices, 0);
            }
          ` },
          { en: 'Base case of the helper: when i reaches <code>size()</code>, no prices are left. An empty cart costs 0.', code: J`
            if (i == prices.size()) {
                return 0;
            }
          ` },
          { en: 'Recursive case: the price at index i plus the total of the rest of the cart.', code: 'return prices.get(i) + total(prices, i + 1);' },
          { en: 'In main, read the prices into the list with a loop (reading is not part of the recursion), then print the total. For 25, 40, 15: 25 + (40 + (15 + 0)) = 80.', code: J`
            for (int k = 0; k < n; k++) {
                prices.add(in.nextInt());
            }
            System.out.println("Total: " + total(prices) + " SAR");
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static int total(ArrayList<Integer> prices) {
                  return total(prices, 0);
              }

              private static int total(ArrayList<Integer> prices, int i) {
                  if (i == prices.size()) {
                      return 0;
                  }
                  return prices.get(i) + total(prices, i + 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Integer> prices = new ArrayList<Integer>();
                  for (int k = 0; k < n; k++) {
                      prices.add(in.nextInt());
                  }
                  System.out.println("Total: " + total(prices) + " SAR");
              }
          }
        `, stdin: '3\n25 40 15', out: 'Total: 80 SAR', ar: 'نفس فكرة المصفوفة، لكن مع size() وget(i).' }
      ],
      mistakes: [
        { title: 'Forcing the caller to pass the extra numbers', en: 'Keep a simple public method and hide the helper.', code: 'isPalindrome("level", 0, 4);   // awkward for the caller' },
        { title: 'Wrong base case for indexes', en: 'Use <code>index == a.length</code>. Using <code>a.length - 1</code> skips the last element.', code: 'if (index == a.length - 1) return 0;' },
        { title: 'Not changing the index', en: 'If you pass the same index, the recursion never ends.', code: 'return a[index] + sum(a, index);' },
        { title: 'Moving only one pointer', en: 'Palindrome check must move both low and high.', code: 'return isPalindrome(s, low + 1, high);' }
      ],
      remember: [
        'A helper method has extra parameters (indexes, totals).',
        'The public method calls the helper with the starting values.',
        'Two methods may share a name if their parameters differ (overloading).',
        'Arrays: pass the array and the current index; stop at <code>index == a.length</code>.',
        'Two pointers: stop when <code>low &gt;= high</code>.',
        'All calls share the same array or list; only the index changes. For an ArrayList use <code>size()</code> and <code>get(i)</code>.'
      ],
      rememberAr: 'الدالة المساعدة تحمل معاملات إضافية كالفهرس. الدالة العامة تبدأها بالقيم الأولية. للمصفوفات نتوقف عند index == a.length.',
      practice: [
        { t: 'mcq', q: 'Why do we write recursive <b>helper</b> methods such as <code>isPalindrome(s, low, high)</code>?', options: ['Because public methods cannot be recursive', 'To carry extra parameters while keeping a simple method for the caller', 'Because helpers need no base case', 'To avoid the call stack'], answer: 1, explain: 'The helper holds the state of the recursion (indexes). The public method starts it with the right first values.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static boolean pal(String s, int low, int high) {
                  System.out.println(low + " " + high);
                  if (low >= high) {
                      return true;
                  }
                  if (s.charAt(low) != s.charAt(high)) {
                      return false;
                  }
                  return pal(s, low + 1, high - 1);
              }

              public static void main(String[] args) {
                  System.out.println(pal("abca", 0, 3));
              }
          }
        `, answer: J`
          0 3
          1 2
          false
        `, explain: 'First: a and a match, so call pal(1, 2). Then b and c do not match: false.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int countEven(int[] a, int i) {
                  if (i == a.length) {
                      return 0;
                  }
                  int add = 0;
                  if (a[i] % 2 == 0) {
                      add = 1;
                  }
                  return add + countEven(a, i + 1);
              }

              public static void main(String[] args) {
                  int[] data = {4, 7, 10, 3, 8};
                  System.out.println(countEven(data, 0));
                  System.out.println(countEven(data, 3));
              }
          }
        `, answer: J`
          3
          1
        `, explain: 'Even values are 4, 10 and 8, so 3. From index 3 we look at 3 and 8: only one even number.' },
        { t: 'fill', q: 'Complete the recursive helper that adds the elements.', code: J`
          private static int sum(int[] a, int index) {
              if (index == a.___) {
                  return 0;
              }
              return a[index] + sum(a, ___);
          }
        `, answers: ['length', ['index + 1', 'index+1']], explain: 'Stop when the index equals the length; otherwise move to the next index.' },
        { t: 'order', q: 'Put the lines of the public method and its helper in order.', lines: [
          'public static int sum(int[] a) {',
          '    return sum(a, 0);',
          '}',
          'private static int sum(int[] a, int index) {',
          '    if (index == a.length) {',
          '        return 0;',
          '    }',
          '    return a[index] + sum(a, index + 1);',
          '}'
        ], explain: 'First the simple method, then the helper with the base case and the recursive case.' },
        { t: 'code', q: 'Read <code>n</code> and then <code>n</code> integers (n is at least 1) into an array. Using a recursive helper (no loops except for reading), print the <b>largest</b> number. No prompts.', qAr: 'اطبع أكبر عدد باستخدام دالة مساعدة عودية.', starter: J`
          import java.util.*;

          public class Main {
              public static int max(int[] a) {
                  return max(a, 0);
              }

              private static int max(int[] a, int index) {
                  // base case: the last element; otherwise compare a[index] with the max of the rest
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] a = new int[n];
                  for (int i = 0; i < n; i++) {
                      a[i] = in.nextInt();
                  }
                  System.out.println(max(a));
              }
          }
        `, tests: [{ stdin: '4\n3 9 2 5', expected: '9' }, { stdin: '1\n7', expected: '7' }], solution: J`
          import java.util.*;

          public class Main {
              public static int max(int[] a) {
                  return max(a, 0);
              }

              private static int max(int[] a, int index) {
                  if (index == a.length - 1) {
                      return a[index];
                  }
                  return Math.max(a[index], max(a, index + 1));
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] a = new int[n];
                  for (int i = 0; i < n; i++) {
                      a[i] = in.nextInt();
                  }
                  System.out.println(max(a));
              }
          }
        `, hint: 'Base case: index == a.length - 1 returns a[index]. Otherwise Math.max(a[index], max(a, index + 1)).', explain: 'With one element left, that element is the largest. Otherwise compare the current element with the largest of the rest.' },
        { t: 'bug', q: 'This program should print 21 (4 + 7 + 10), but it prints 11. Tap the line with the bug.', qAr: 'البرنامج يطبع 11 بدلاً من 21. أين الخطأ؟', code: J`
          public class Main {
              public static int sum(int[] a, int index) {
                  if (index == a.length - 1) {
                      return 0;
                  }
                  return a[index] + sum(a, index + 1);
              }

              public static void main(String[] args) {
                  int[] marks = {4, 7, 10};
                  System.out.println(sum(marks, 0));
              }
          }
        `, bug: 3, fix: J`
          public class Main {
              public static int sum(int[] a, int index) {
                  if (index == a.length) {
                      return 0;
                  }
                  return a[index] + sum(a, index + 1);
              }

              public static void main(String[] args) {
                  int[] marks = {4, 7, 10};
                  System.out.println(sum(marks, 0));
              }
          }
        `, hint: 'Which element is never added?', explain: 'The base case stops at index 2 (a.length - 1) and returns 0 there, so the last element, 10, is never added: 4 + 7 + 0 = 11. This is an off-by-one error. The recursion must stop only when index is past the end, index == a.length.', explainAr: 'خطأ بفارق واحد: يجب التوقف عند index == a.length حتى يُجمع آخر عنصر.' },
        { t: 'output', q: 'The helper is called with index 1 instead of 0. What does this program print?', code: J`
          import java.util.*;

          public class Main {
              private static void printList(ArrayList<String> names, int i) {
                  if (i == names.size()) {
                      return;
                  }
                  System.out.println((i + 1) + ". " + names.get(i));
                  printList(names, i + 1);
              }

              public static void main(String[] args) {
                  ArrayList<String> names = new ArrayList<String>();
                  names.add("Sara");
                  names.add("Omar");
                  names.add("Lina");
                  printList(names, 1);
              }
          }
        `, answer: J`
          2. Omar
          3. Lina
        `, explain: 'Starting at index 1 skips Sara. The helper prints index 1 (number 2, Omar) and index 2 (number 3, Lina), then i == 3 == size() stops it.' },
        { t: 'code', q: 'Read <code>n</code> and then <code>n</code> integers into an <code>ArrayList&lt;Integer&gt;</code>. Using a recursive helper <code>countNegative(list, i)</code>, print how many of the numbers are negative. No prompts.', qAr: 'اطبع عدد الأعداد السالبة في القائمة باستخدام دالة مساعدة عودية.', starter: J`
          import java.util.*;

          public class Main {
              private static int countNegative(ArrayList<Integer> list, int i) {
                  // base case: i == list.size()
                  // recursive case: 1 or 0 for this element, plus the count of the rest
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Integer> list = new ArrayList<Integer>();
                  for (int k = 0; k < n; k++) {
                      list.add(in.nextInt());
                  }
                  System.out.println(countNegative(list, 0));
              }
          }
        `, tests: [{ stdin: '5\n3 -2 0 -7 4', expected: '2' }, { stdin: '1\n5', expected: '0' }, { stdin: '3\n-1 -1 -1', expected: '3' }], solution: J`
          import java.util.*;

          public class Main {
              private static int countNegative(ArrayList<Integer> list, int i) {
                  if (i == list.size()) {
                      return 0;
                  }
                  int add = 0;
                  if (list.get(i) < 0) {
                      add = 1;
                  }
                  return add + countNegative(list, i + 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  ArrayList<Integer> list = new ArrayList<Integer>();
                  for (int k = 0; k < n; k++) {
                      list.add(in.nextInt());
                  }
                  System.out.println(countNegative(list, 0));
              }
          }
        `, hint: 'int add = 0; if (list.get(i) < 0) add = 1; return add + countNegative(list, i + 1);', explain: 'Each call looks at one element: it adds 1 if the element is negative, otherwise 0, and leaves the rest of the list to the smaller call.' }
      ]
    },
    // ---------------------------------------------------------------- L9
    {
      title: 'Recursive binary search',
      titleAr: 'البحث الثنائي العودي',
      minutes: 35,
      body: [
        { type: 'h', en: 'Halving the problem' },
        { type: 'p', en: 'You met binary search in Unit 7: on a <b>sorted</b> array you look at the middle and throw away the half that cannot contain your value. This is naturally recursive: after the middle check, the job is the same job on a smaller range. The range is described by two indexes, <code>low</code> and <code>high</code>, so we use a helper method from the last lesson.', ar: 'البحث الثنائي: ننظر للوسط ونهمل النصف الذي لا يحوي القيمة، ثم نكرر على نصف أصغر.' },
        { type: 'p', en: 'Why does this matter? Your phone finds a contact among hundreds of names at once. The registration system finds your student ID among thousands of IDs. If the data is <b>sorted</b>, binary search finds any item in a few steps. Checking the items one by one (<b>linear search</b>) may need to look at every single item.' },
        { type: 'analogy', title: 'Guess the number game', en: 'Think of a number from 1 to 100. I guess 50. You say "higher". Now I only look at 51 to 100 and guess 75. Each guess removes half of the numbers.' },
        { type: 'analogy', title: 'A printed dictionary', en: 'To find a word in a paper dictionary, you do not read from page 1. You open it near the middle, see whether your word comes before or after that page, and forget about the other half of the book. Then you do the same thing with the half that is left, and again, until you reach the right page.', ar: 'نفتح القاموس من الوسط ونترك النصف الذي لا يحوي الكلمة.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int binarySearch(int[] list, int key) {
                  return binarySearch(list, key, 0, list.length - 1);
              }

              private static int binarySearch(int[] list, int key, int low, int high) {
                  if (low > high) {
                      return -1;
                  }
                  int mid = (low + high) / 2;
                  if (key == list[mid]) {
                      return mid;
                  } else if (key < list[mid]) {
                      return binarySearch(list, key, low, mid - 1);
                  } else {
                      return binarySearch(list, key, mid + 1, high);
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
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['if (low > high) { return -1; }', 'BASE CASE 1: the range is empty, so the key is not in the array.'],
          ['int mid = (low + high) / 2;', 'The middle index of the current range.'],
          ['if (key == list[mid]) { return mid; }', 'BASE CASE 2: found it! Return the index.'],
          ['key < list[mid]', 'The key is smaller, so search the left half: low .. mid - 1.'],
          ['otherwise', 'The key is bigger, so search the right half: mid + 1 .. high.']
        ], ar: 'نقارن بالوسط: وجدناه، أو نبحث يساراً، أو نبحث يميناً.' },
        { type: 'check', q: 'The key is SMALLER than <code>list[mid]</code>. Which range do we search next?', options: ['mid + 1 .. high', 'low .. mid - 1', 'low .. mid', '0 .. low'], answer: 1, explain: 'Smaller values are on the left, so the new range is low .. mid - 1.' },
        { type: 'h', en: 'Tracing the search for 34' },
        { type: 'p', en: 'The array is {3, 8, 15, 21, 34, 42, 57} with indexes 0 to 6.' },
        { type: 'table', head: ['Call', 'low', 'high', 'mid', 'list[mid]', 'What happens'], rows: [
          ['1', '0', '6', '3', '21', '34 is bigger: search 4..6'],
          ['2', '4', '6', '5', '42', '34 is smaller: search 4..4'],
          ['3', '4', '4', '4', '34', 'Found! return 4']
        ] },
        { type: 'p', en: 'The memory picture shows the same search. Every call has its own <code>low</code>, <code>high</code> and <code>mid</code>. The array exists once; to keep the picture small, its reference is drawn only once. Watch the end: the index 4 is found in call 3, and then it is <b>passed up unchanged</b> through call 2 and call 1. That is why every recursive call is written as <code>return binarySearch(...)</code>.', ar: 'الفهرس الذي وُجد يُمرَّر إلى الأعلى كما هو، لذلك نكتب return قبل كل استدعاء.' },
        { type: 'memory', title: 'Searching for 34: three calls, one answer passed up', frames: [
          { label: 'Call 1: low 0, high 6, mid 3. list[3] is 21, and 34 is bigger: search the right half 4..6.', vars: [{ name: 'list (all calls)', type: 'int[]', ref: 'A' }, { name: 'low, high (call 1)', value: '0, 6' }, { name: 'mid (call 1)', type: 'int', value: '3' }, { name: 'returns (call 1)', value: '?' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '3' }, { name: '[1]', value: '8' }, { name: '[2]', value: '15' }, { name: '[3]', value: '21' }, { name: '[4]', value: '34' }, { name: '[5]', value: '42' }, { name: '[6]', value: '57' }] }] },
          { label: 'Call 2: low 4, high 6, mid 5. list[5] is 42, and 34 is smaller: search the left half 4..4.', vars: [{ name: 'list (all calls)', type: 'int[]', ref: 'A' }, { name: 'low, high (call 1)', value: '0, 6' }, { name: 'mid (call 1)', type: 'int', value: '3' }, { name: 'returns (call 1)', value: '?' }, { name: 'low, high (call 2)', value: '4, 6' }, { name: 'mid (call 2)', type: 'int', value: '5' }, { name: 'returns (call 2)', value: '?' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '3' }, { name: '[1]', value: '8' }, { name: '[2]', value: '15' }, { name: '[3]', value: '21' }, { name: '[4]', value: '34' }, { name: '[5]', value: '42' }, { name: '[6]', value: '57' }] }] },
          { label: 'Call 3: low 4, high 4, mid 4. list[4] is 34: found! This call returns <b>4</b>.', vars: [{ name: 'list (all calls)', type: 'int[]', ref: 'A' }, { name: 'low, high (call 1)', value: '0, 6' }, { name: 'mid (call 1)', type: 'int', value: '3' }, { name: 'returns (call 1)', value: '?' }, { name: 'low, high (call 2)', value: '4, 6' }, { name: 'mid (call 2)', type: 'int', value: '5' }, { name: 'returns (call 2)', value: '?' }, { name: 'low, high (call 3)', value: '4, 4' }, { name: 'mid (call 3)', type: 'int', value: '4' }, { name: 'returns (call 3)', value: '4' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '3' }, { name: '[1]', value: '8' }, { name: '[2]', value: '15' }, { name: '[3]', value: '21' }, { name: '[4]', value: '34' }, { name: '[5]', value: '42' }, { name: '[6]', value: '57' }] }] },
          { label: 'Call 3 is removed. Call 2 returns the same value it received: <b>4</b>.', vars: [{ name: 'list (all calls)', type: 'int[]', ref: 'A' }, { name: 'low, high (call 1)', value: '0, 6' }, { name: 'mid (call 1)', type: 'int', value: '3' }, { name: 'returns (call 1)', value: '?' }, { name: 'low, high (call 2)', value: '4, 6' }, { name: 'mid (call 2)', type: 'int', value: '5' }, { name: 'returns (call 2)', value: '4' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '3' }, { name: '[1]', value: '8' }, { name: '[2]', value: '15' }, { name: '[3]', value: '21' }, { name: '[4]', value: '34' }, { name: '[5]', value: '42' }, { name: '[6]', value: '57' }] }] },
          { label: 'Call 2 is removed. Call 1 also returns <b>4</b>, and main prints 4.', vars: [{ name: 'list (all calls)', type: 'int[]', ref: 'A' }, { name: 'low, high (call 1)', value: '0, 6' }, { name: 'mid (call 1)', type: 'int', value: '3' }, { name: 'returns (call 1)', value: '4' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '3' }, { name: '[1]', value: '8' }, { name: '[2]', value: '15' }, { name: '[3]', value: '21' }, { name: '[4]', value: '34' }, { name: '[5]', value: '42' }, { name: '[6]', value: '57' }] }] }
        ], ar: 'كل استدعاء له low وhigh وmid خاصة به، والجواب يصعد كما هو.' },
        { type: 'p', en: 'Now trace the search for a key that is NOT there, for example 50 in the same array:' },
        { type: 'table', head: ['Call', 'low', 'high', 'mid', 'list[mid]', 'What happens'], rows: [
          ['1', '0', '6', '3', '21', '50 is bigger: search 4..6'],
          ['2', '4', '6', '5', '42', '50 is bigger: search 6..6'],
          ['3', '6', '6', '6', '57', '50 is smaller: search 6..5'],
          ['4', '6', '5', '-', '-', 'low &gt; high: empty range, return -1']
        ] },
        { type: 'check', q: 'About how many steps does binary search need for 1,000,000 sorted numbers?', options: ['About 20', 'About 1,000', 'About 500,000', 'Exactly 1,000,000'], answer: 0, explain: 'Each step halves the range, and 2 to the power 20 is about one million.' },
        { type: 'note', kind: 'exam', en: 'Do not forget the <code>low &gt; high</code> base case. Without it, a missing key causes a wrong index or an endless recursion.' },
        { type: 'h', en: 'Every call must pass the answer up' },
        { type: 'p', en: 'A common mistake is to make the recursive call but forget the word <code>return</code> in front of it. The program still compiles if there is a <code>return -1;</code> at the end, but the answer found deep down is thrown away.' },
        { type: 'code', code: J`
          int mid = (low + high) / 2;
          if (key == list[mid]) {
              return mid;
          }
          if (key < list[mid]) {
              binarySearch(list, key, low, mid - 1);    // answer thrown away!
          } else {
              binarySearch(list, key, mid + 1, high);   // answer thrown away!
          }
          return -1;
        ` },
        { type: 'lines', rows: [
          ['binarySearch(list, key, low, mid - 1);', 'The smaller call finds the right index and returns it, but nobody uses the returned value.'],
          ['return -1;', 'So the current call goes on to this line and returns -1, even though the key was found.'],
          ['return binarySearch(list, key, low, mid - 1);', 'The fix: return whatever the smaller call returns.']
        ], ar: 'بدون return يضيع الجواب الذي وجده الاستدعاء الأصغر.' },
        { type: 'check', q: 'With the broken code above, what does the search for 34 in {3, 8, 15, 21, 34, 42, 57} return?', options: ['4', '-1', '3', 'It crashes'], answer: 1, explain: 'Call 3 finds 34 and returns 4, but call 2 throws that 4 away and returns -1, and so does call 1. The result is -1.' },
        { type: 'p', en: 'How fast is binary search? The next program puts 1000 sorted numbers (0, 3, 6, ..., 2997) in an array and counts the calls with a <code>static</code> counter, as in Lesson 6.' },
        { type: 'code', run: true, code: J`
          public class Main {
              static int calls = 0;

              public static int search(int[] a, int key, int low, int high) {
                  calls++;
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
                  int[] a = new int[1000];
                  for (int i = 0; i < a.length; i++) {
                      a[i] = i * 3;
                  }
                  int[] keys = {2997, 1500, 1};
                  for (int key : keys) {
                      calls = 0;
                      int index = search(a, key, 0, a.length - 1);
                      System.out.println("key " + key + ": index " + index + ", calls " + calls);
                  }
              }
          }
        `, out: J`
          key 2997: index 999, calls 10
          key 1500: index 500, calls 9
          key 1: index -1, calls 11
        ` },
        { type: 'p', en: 'At most 11 calls for 1000 numbers, even when the key is missing! A linear search would look at up to 1000 numbers. Every call halves the range: 1000, 500, 250, 125, ... 1. The recursion is also never deep, so there is no danger of StackOverflowError.', ar: 'ألف عدد تحتاج 11 استدعاء على الأكثر.' },
        { type: 'steps', title: 'Worked example: find a student ID', problem: 'Read n sorted ids and a key. Print the index of the key, or -1.', steps: [
          { en: 'The public method starts the helper on the whole array.', code: J`
            public static int search(int[] a, int key) {
                return search(a, key, 0, a.length - 1);
            }
          ` },
          { en: 'Base case: an empty range means not found.', code: J`
            if (low > high) {
                return -1;
            }
          ` },
          { en: 'Compute mid and compare. Found: return mid.', code: J`
            int mid = (low + high) / 2;
            if (a[mid] == key) {
                return mid;
            }
          ` },
          { en: 'Otherwise search the half that can contain the key.', code: J`
            if (key < a[mid]) {
                return search(a, key, low, mid - 1);
            }
            return search(a, key, mid + 1, high);
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static int search(int[] a, int key) {
                  return search(a, key, 0, a.length - 1);
              }

              private static int search(int[] a, int key, int low, int high) {
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
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] a = new int[n];
                  for (int i = 0; i < n; i++) {
                      a[i] = in.nextInt();
                  }
                  int key = in.nextInt();
                  System.out.println(search(a, key));
              }
          }
        `, stdin: '7\n3 8 15 21 34 42 57\n34', out: '4', ar: 'كل استدعاء ينصّف المجال.' },
        { type: 'steps', title: 'Worked example: find a name in a sorted class list', problem: 'A class list is sorted in alphabetical order. Read a name and print its index with recursive binary search, or -1 if the name is not in the list.', steps: [
          { en: 'Strings cannot be compared with &lt; or &gt;. Use <code>compareTo</code> (from Unit 5): <code>a.compareTo(b)</code> is negative when a comes before b in dictionary order, 0 when they are equal, and positive when a comes after b.', code: 'int cmp = key.compareTo(names[mid]);' },
          { en: 'The base case is the same as before: an empty range means not found.', code: J`
            if (low > high) {
                return -1;
            }
          ` },
          { en: 'cmp == 0 means found. A negative cmp means the key comes before names[mid]: search the left half. Otherwise search the right half.', code: J`
            if (cmp == 0) {
                return mid;
            }
            if (cmp < 0) {
                return find(names, key, low, mid - 1);
            }
            return find(names, key, mid + 1, high);
          ` },
          { en: 'Trace "Rana" in the 9 names: mid 4 is Khalid, Rana comes after it, so search 5..8. Then mid 6 is Nasser, Rana comes after it, so search 7..8. Then mid 7 is Rana: found, return 7.' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static int find(String[] names, String key, int low, int high) {
                  if (low > high) {
                      return -1;
                  }
                  int mid = (low + high) / 2;
                  int cmp = key.compareTo(names[mid]);
                  if (cmp == 0) {
                      return mid;
                  }
                  if (cmp < 0) {
                      return find(names, key, low, mid - 1);
                  }
                  return find(names, key, mid + 1, high);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String[] names = {"Abdullah", "Dana", "Faisal", "Huda", "Khalid", "Mona", "Nasser", "Rana", "Turki"};
                  String key = in.next();
                  System.out.println(find(names, key, 0, names.length - 1));
              }
          }
        `, stdin: 'Rana', out: '7', ar: 'نقارن النصوص بـ compareTo بدلاً من < و >.' }
      ],
      mistakes: [
        { title: 'Searching mid again', en: 'Use mid - 1 and mid + 1. Using mid can loop forever.', code: 'return search(a, key, low, mid);' },
        { title: 'Using it on an unsorted array', en: 'Binary search needs sorted data.', code: 'int[] a = {9, 2, 7};' },
        { title: 'Missing the empty-range base case', en: 'Always return -1 when <code>low &gt; high</code>.', code: 'int mid = (low + high) / 2;   // with no check first' },
        { title: 'Checking the middle with = instead of ==', en: 'In a condition use <code>==</code>.', code: 'if (a[mid] = key)' }
      ],
      remember: [
        'Binary search works only on a <b>sorted</b> array.',
        'Helper parameters: array, key, <code>low</code>, <code>high</code>.',
        'Base cases: <code>low &gt; high</code> returns -1; <code>key == list[mid]</code> returns mid.',
        'Smaller key: search <code>low .. mid - 1</code>. Bigger key: search <code>mid + 1 .. high</code>.',
        'Each call halves the range: about 20 steps for a million items.',
        'Write <code>return</code> in front of every recursive call, so the found index is passed up unchanged.'
      ],
      rememberAr: 'البحث الثنائي على مصفوفة مرتبة. حالتان أساسيتان: low > high تعيد -1، ووجود المفتاح في الوسط. نبحث في نصف المجال في كل استدعاء.',
      practice: [
        { t: 'mcq', q: 'What does the base case <code>low &gt; high</code> mean in binary search?', options: ['The key was found', 'The range is empty and the key is not there', 'The array is sorted', 'The array has one element'], answer: 1, explain: 'No elements are left to look at, so the key is missing.' },
        { t: 'output', q: 'This binary search prints its range on every call. What does the program print?', code: J`
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
        `, explain: 'First call: range 0..5, mid = 2 (value 9). 20 is bigger, so search 3..5. Second call: mid = 4 (value 20): found, return 4.' },
        { t: 'output', q: 'What does this program print (the key is missing)?', code: J`
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
                  int[] a = {1, 3, 5};
                  System.out.println(search(a, 4, 0, 2));
              }
          }
        `, answer: J`
          0 2
          2 2
          2 1
          -1
        `, explain: 'mid = 1 (value 3): 4 is bigger, search 2..2. mid = 2 (value 5): 4 is smaller, search 2..1. Now low &gt; high, so -1.' },
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
        `, answers: ['>', '/', ['mid - 1', 'mid-1'], ['mid + 1', 'mid+1']], explain: 'Empty range: low > high. The middle is (low + high) / 2. The left half ends at mid - 1 and the right half starts at mid + 1.' },
        { t: 'mcq', q: 'A recursive binary search runs on <code>{1, 4, 6, 9, 12}</code> with key 12 and range 0..4. Which <code>mid</code> values are examined, in order?', options: ['2, 3, 4', '2, 4', '0, 1, 2, 3, 4', '4'], answer: 0, explain: 'mid = 2 (value 6): 12 is bigger, range 3..4. mid = 3 (value 9): bigger, range 4..4. mid = 4: found.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> sorted integers, then a key. Print the index of the key using <b>recursive</b> binary search, or <code>-1</code> if it is missing. No prompts.', qAr: 'اطبع فهرس المفتاح باستخدام البحث الثنائي العودي أو -1.', starter: J`
          import java.util.*;

          public class Main {
              public static int search(int[] a, int key, int low, int high) {
                  // base cases and recursive calls
                  return -1;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] a = new int[n];
                  for (int i = 0; i < n; i++) {
                      a[i] = in.nextInt();
                  }
                  int key = in.nextInt();
                  System.out.println(search(a, key, 0, n - 1));
              }
          }
        `, tests: [{ stdin: '5\n1 4 6 9 12\n12', expected: '4' }, { stdin: '5\n1 4 6 9 12\n5', expected: '-1' }, { stdin: '1\n8\n8', expected: '0' }], solution: J`
          import java.util.*;

          public class Main {
              public static int search(int[] a, int key, int low, int high) {
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
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] a = new int[n];
                  for (int i = 0; i < n; i++) {
                      a[i] = in.nextInt();
                  }
                  int key = in.nextInt();
                  System.out.println(search(a, key, 0, n - 1));
              }
          }
        `, hint: 'If low > high return -1. Compute mid. Equal: return mid. Smaller key: low..mid-1. Bigger key: mid+1..high.', explain: 'Each call either finds the key or continues on half of the range.' },
        { t: 'bug', q: 'This helper finds keys in the LEFT half correctly, but for every key in the RIGHT half it returns -1. Tap the line with the bug.', qAr: 'المفاتيح في النصف الأيمن تُرجع -1 دائماً. أين الخطأ؟', code: J`
          private static int search(int[] a, int key, int low, int high) {
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
              search(a, key, mid + 1, high);
              return -1;
          }
        `, bug: [12, 13], fix: J`
          private static int search(int[] a, int key, int low, int high) {
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
        `, hint: 'Compare the two recursive calls. What is different?', explain: 'Line 12 searches the right half and may find the key, but the returned index is thrown away, and line 13 returns -1. The left-half call works because it has return in front of it. The fix is return search(a, key, mid + 1, high);', explainAr: 'نسينا return قبل الاستدعاء العودي فضاع الجواب.' },
        { t: 'mcq', q: 'About how many calls does recursive binary search need, at most, for 1000 sorted numbers?', options: ['About 10', 'About 100', 'About 500', '1000'], answer: 0, explain: 'Each call halves the range. 2 to the power 10 is 1024, so about 10 halvings (11 calls with the final empty range) are enough for 1000 numbers.', explainAr: 'كل استدعاء ينصّف المجال، فيكفي نحو 10 استدعاءات.' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> names in alphabetical order, then one more name to find. Print the index of that name using <b>recursive</b> binary search with <code>compareTo</code>, or <code>-1</code> if it is missing. No prompts.', qAr: 'ابحث عن اسم في قائمة مرتبة باستخدام البحث الثنائي العودي وcompareTo.', starter: J`
          import java.util.*;

          public class Main {
              public static int find(String[] names, String key, int low, int high) {
                  // base case, mid, compareTo, then the left or the right half
                  return -1;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  String[] names = new String[n];
                  for (int i = 0; i < n; i++) {
                      names[i] = in.next();
                  }
                  String key = in.next();
                  System.out.println(find(names, key, 0, n - 1));
              }
          }
        `, tests: [{ stdin: '5\nAli Dana Huda Mona Rana\nMona', expected: '3' }, { stdin: '5\nAli Dana Huda Mona Rana\nAli', expected: '0' }, { stdin: '3\nFahd Nora Sami\nZaid', expected: '-1' }], solution: J`
          import java.util.*;

          public class Main {
              public static int find(String[] names, String key, int low, int high) {
                  if (low > high) {
                      return -1;
                  }
                  int mid = (low + high) / 2;
                  int cmp = key.compareTo(names[mid]);
                  if (cmp == 0) {
                      return mid;
                  }
                  if (cmp < 0) {
                      return find(names, key, low, mid - 1);
                  }
                  return find(names, key, mid + 1, high);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  String[] names = new String[n];
                  for (int i = 0; i < n; i++) {
                      names[i] = in.next();
                  }
                  String key = in.next();
                  System.out.println(find(names, key, 0, n - 1));
              }
          }
        `, hint: 'int cmp = key.compareTo(names[mid]); cmp == 0: found; cmp < 0: left half; otherwise right half.', explain: 'It is the same binary search, but compareTo replaces &lt; and == for Strings.' }
      ]
    },
    // ---------------------------------------------------------------- L10
    {
      title: 'Recursion or loops?',
      titleAr: 'العودية أم الحلقات؟',
      minutes: 35,
      body: [
        { type: 'h', en: 'Two ways to repeat work' },
        { type: 'p', en: 'You already know loops. Any recursive method can be written with a loop, and many loops can be written as recursion. So which one should you use? It depends on the problem. Here are the two factorials side by side.', ar: 'يمكن كتابة أي دالة عودية بحلقة، والاختيار يعتمد على المسألة.' },
        { type: 'p', en: 'Why compare them? In your next courses and in your job you will make this choice many times. Knowing what each one costs helps you write code that is clear <b>and</b> safe: clear because it matches the problem, safe because it does not run out of memory.' },
        { type: 'analogy', title: 'Stairs or lift', en: 'Climbing stairs one step at a time is like a loop: simple and cheap. Taking a lift that asks another lift for help is like recursion: elegant for some buildings, but each lift needs space.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static long factorialLoop(int n) {
                  long result = 1;
                  for (int i = 2; i <= n; i++) {
                      result *= i;
                  }
                  return result;
              }

              public static long factorialRec(int n) {
                  if (n == 0) {
                      return 1;
                  }
                  return n * factorialRec(n - 1);
              }

              public static void main(String[] args) {
                  System.out.println(factorialLoop(5));
                  System.out.println(factorialRec(5));
              }
          }
        `, out: J`
          120
          120
        ` },
        { type: 'lines', rows: [
          ['long result = 1; for (int i = 2; i <= n; i++)', 'The loop: start with 1 and multiply by 2, 3, ... n.'],
          ['result *= i;', 'The loop keeps its answer in ONE variable.'],
          ['n * factorialRec(n - 1)', 'The recursion keeps one waiting call (one frame) for every number.']
        ], ar: 'الحلقة تستخدم متغيراً واحداً، والعودية تستخدم إطاراً لكل استدعاء.' },
        { type: 'check', q: 'Which version uses more memory for a large n?', options: ['The loop', 'The recursion (one stack frame per call)', 'Both exactly the same', 'Neither uses memory'], answer: 1, explain: 'Recursion keeps all the waiting calls on the stack.' },
        { type: 'p', en: 'Compare the memory pictures. In Lesson 3, <code>factorial(3)</code> needed 4 frames at the same time. The loop version below needs only <b>one</b> frame for any n: the same variables simply change their values.', ar: 'الحلقة تحتاج إطاراً واحداً فقط، والمتغيرات نفسها تتغير قيمها.' },
        { type: 'memory', title: 'factorialLoop(3): one frame, changing values', frames: [
          { label: 'Before the loop: <code>result = 1</code> and the loop starts with <code>i = 2</code>.', vars: [{ name: 'n', type: 'int', value: '3' }, { name: 'result', type: 'long', value: '1' }, { name: 'i', type: 'int', value: '2' }] },
          { label: '<code>result *= i;</code> gives 1 * 2 = 2.', vars: [{ name: 'n', type: 'int', value: '3' }, { name: 'result', type: 'long', value: '2' }, { name: 'i', type: 'int', value: '2' }] },
          { label: '<code>i++</code> makes i = 3. The test 3 &lt;= 3 is true.', vars: [{ name: 'n', type: 'int', value: '3' }, { name: 'result', type: 'long', value: '2' }, { name: 'i', type: 'int', value: '3' }] },
          { label: '<code>result *= i;</code> gives 2 * 3 = 6.', vars: [{ name: 'n', type: 'int', value: '3' }, { name: 'result', type: 'long', value: '6' }, { name: 'i', type: 'int', value: '3' }] },
          { label: 'i becomes 4, the test 4 &lt;= 3 is false, the loop stops and the method returns 6. Still only one frame.', vars: [{ name: 'n', type: 'int', value: '3' }, { name: 'result', type: 'long', value: '6' }, { name: 'i', type: 'int', value: '4' }] }
        ], ar: 'إطار واحد مهما كانت n كبيرة.' },
        { type: 'table', head: ['', 'Recursion', 'Loop (iteration)'], rows: [
          ['Code', 'Often short and close to the math definition', 'Can be longer for tree-like problems'],
          ['Memory', 'One stack frame per call; very deep recursion can cause StackOverflowError', 'Almost no extra memory'],
          ['Speed', 'Each call costs a little; may repeat work (Fibonacci)', 'Usually faster'],
          ['Good for', 'Binary search, palindromes, nested/tree structures', 'Simple counting and adding']
        ] },
        { type: 'note', kind: 'tip', en: 'Choose recursion when it makes the solution clearly simpler and the depth is small (binary search needs only about 20 levels for a million items). Choose a loop for simple counting, or when the input can be very large.', ar: 'العودية للمسائل التي تبسّطها ويكون عمقها صغيراً، والحلقة للمسائل البسيطة أو المدخلات الكبيرة.' },
        { type: 'check', q: 'Which problem is a good fit for a plain loop?', options: ['Adding the numbers of an array', 'Exploring a folder inside a folder', 'Playing a perfect chess game', 'None of them'], answer: 0, explain: 'A simple running total is easiest with a loop.' },
        { type: 'h', en: 'Turning a recursive method into a loop' },
        { type: 'p', en: 'Each part of a simple recursive method has a partner in a loop. Once you see the partners, you can rewrite one as the other. The table uses the digit sum from Lesson 5.' },
        { type: 'table', head: ['Part of the recursive method', 'Partner in the loop'], rows: [
          ['The value of the base case (0 for a sum)', 'The starting value: <code>int total = 0;</code>'],
          ['The base case test (<code>n == 0</code>)', 'The moment the loop stops: <code>while (n &gt; 0)</code>'],
          ['The smaller call (<code>n / 10</code>)', 'The update: <code>n = n / 10;</code>'],
          ['Combining (<code>n % 10 + ...</code>)', 'Adding to the total: <code>total += n % 10;</code>']
        ] },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int sumDigitsRec(int n) {
                  if (n == 0) {
                      return 0;
                  }
                  return n % 10 + sumDigitsRec(n / 10);
              }

              public static int sumDigitsLoop(int n) {
                  int total = 0;
                  while (n > 0) {
                      total += n % 10;
                      n = n / 10;
                  }
                  return total;
              }

              public static void main(String[] args) {
                  System.out.println(sumDigitsRec(4096));
                  System.out.println(sumDigitsLoop(4096));
              }
          }
        `, out: J`
          19
          19
        ` },
        { type: 'lines', rows: [
          ['if (n == 0) { return 0; }', 'Recursion: the digit sum of 0 (no digits left) is 0.'],
          ['int total = 0;', 'Loop: the total starts at the base value, 0.'],
          ['while (n > 0)', 'Loop: keep going until n reaches the base case 0.'],
          ['total += n % 10; n = n / 10;', 'Loop: combine the last digit, then make n smaller, exactly like the recursive call.']
        ], ar: 'قيمة الحالة الأساسية تصبح القيمة الابتدائية في الحلقة.' },
        { type: 'check', q: 'When you rewrite a recursive <b>product</b> (base case returns 1) as a loop, what should the result variable start with?', options: ['0', '1', 'n', 'It does not matter'], answer: 1, explain: 'The base value becomes the starting value. For a product it must be 1, otherwise every result is 0.' },
        { type: 'h', en: 'When recursion is the natural choice: boxes inside boxes' },
        { type: 'p', en: 'Recursion shines when the <b>data itself</b> is nested: a gift box that holds a box, a folder that holds folders. Here each <code>Box</code> object (Unit 2) has a field <code>inside</code> that refers to a smaller box, or is <code>null</code> when there is no box inside. Counting the boxes is "1 for this box, plus the boxes inside it".' },
        { type: 'analogy', title: 'Folders inside folders', en: 'To count all the files on a USB stick, you open the main folder, count its files, and then do <b>the same job</b> for every folder inside it, and for every folder inside those. You never need to know in advance how deep the folders go. The job for one folder contains smaller copies of the same job: that is recursion.', ar: 'عدّ ملفات مجلد = ملفاته + عدّ ملفات كل مجلد بداخله بالطريقة نفسها.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int countBoxes(Box b) {
                  if (b == null) {
                      return 0;
                  }
                  return 1 + countBoxes(b.inside);
              }

              public static void main(String[] args) {
                  Box small = new Box("small", null);
                  Box medium = new Box("medium", small);
                  Box big = new Box("big", medium);
                  System.out.println(countBoxes(big));
              }
          }

          class Box {
              String label;
              Box inside;

              Box(String label, Box inside) {
                  this.label = label;
                  this.inside = inside;
              }
          }
        `, out: '3' },
        { type: 'lines', rows: [
          ['Box inside;', 'A box can refer to another box. This is what makes the data nested.'],
          ['if (b == null) { return 0; }', 'BASE CASE: no box here, so 0 boxes.'],
          ['return 1 + countBoxes(b.inside);', 'Count this box, plus all the boxes inside it. b.inside is a smaller problem.']
        ], ar: 'كل صندوق يشير إلى صندوق أصغر، والحالة الأساسية هي null.' },
        { type: 'memory', title: 'countBoxes(big): following the references', frames: [
          { label: 'Call 1: b refers to the big box. It needs 1 + countBoxes(b.inside).', vars: [{ name: 'b (call 1)', type: 'Box', ref: 'A' }, { name: 'answer (call 1)', value: '1 + ?' }], objects: [{ id: 'A', cls: 'Box', fields: [{ name: 'label', value: '"big"' }, { name: 'inside', ref: 'B' }] }, { id: 'B', cls: 'Box', fields: [{ name: 'label', value: '"medium"' }, { name: 'inside', ref: 'C' }] }, { id: 'C', cls: 'Box', fields: [{ name: 'label', value: '"small"' }, { name: 'inside', value: 'null' }] }] },
          { label: 'Call 2: b refers to the medium box.', vars: [{ name: 'b (call 1)', type: 'Box', ref: 'A' }, { name: 'answer (call 1)', value: '1 + ?' }, { name: 'b (call 2)', type: 'Box', ref: 'B' }, { name: 'answer (call 2)', value: '1 + ?' }], objects: [{ id: 'A', cls: 'Box', fields: [{ name: 'label', value: '"big"' }, { name: 'inside', ref: 'B' }] }, { id: 'B', cls: 'Box', fields: [{ name: 'label', value: '"medium"' }, { name: 'inside', ref: 'C' }] }, { id: 'C', cls: 'Box', fields: [{ name: 'label', value: '"small"' }, { name: 'inside', value: 'null' }] }] },
          { label: 'Call 3: b refers to the small box.', vars: [{ name: 'b (call 1)', type: 'Box', ref: 'A' }, { name: 'answer (call 1)', value: '1 + ?' }, { name: 'b (call 2)', type: 'Box', ref: 'B' }, { name: 'answer (call 2)', value: '1 + ?' }, { name: 'b (call 3)', type: 'Box', ref: 'C' }, { name: 'answer (call 3)', value: '1 + ?' }], objects: [{ id: 'A', cls: 'Box', fields: [{ name: 'label', value: '"big"' }, { name: 'inside', ref: 'B' }] }, { id: 'B', cls: 'Box', fields: [{ name: 'label', value: '"medium"' }, { name: 'inside', ref: 'C' }] }, { id: 'C', cls: 'Box', fields: [{ name: 'label', value: '"small"' }, { name: 'inside', value: 'null' }] }] },
          { label: 'Call 4: b is null (the small box has nothing inside). Base case: return <b>0</b>.', vars: [{ name: 'b (call 1)', type: 'Box', ref: 'A' }, { name: 'answer (call 1)', value: '1 + ?' }, { name: 'b (call 2)', type: 'Box', ref: 'B' }, { name: 'answer (call 2)', value: '1 + ?' }, { name: 'b (call 3)', type: 'Box', ref: 'C' }, { name: 'answer (call 3)', value: '1 + ?' }, { name: 'b (call 4)', type: 'Box', value: 'null' }, { name: 'answer (call 4)', value: 'returns 0' }], objects: [{ id: 'A', cls: 'Box', fields: [{ name: 'label', value: '"big"' }, { name: 'inside', ref: 'B' }] }, { id: 'B', cls: 'Box', fields: [{ name: 'label', value: '"medium"' }, { name: 'inside', ref: 'C' }] }, { id: 'C', cls: 'Box', fields: [{ name: 'label', value: '"small"' }, { name: 'inside', value: 'null' }] }] },
          { label: 'Going up: call 3 gives 1 + 0 = 1, then call 2 gives 1 + 1 = 2.', vars: [{ name: 'b (call 1)', type: 'Box', ref: 'A' }, { name: 'answer (call 1)', value: '1 + ?' }, { name: 'b (call 2)', type: 'Box', ref: 'B' }, { name: 'answer (call 2)', value: '1 + 1 = 2' }], objects: [{ id: 'A', cls: 'Box', fields: [{ name: 'label', value: '"big"' }, { name: 'inside', ref: 'B' }] }, { id: 'B', cls: 'Box', fields: [{ name: 'label', value: '"medium"' }, { name: 'inside', ref: 'C' }] }, { id: 'C', cls: 'Box', fields: [{ name: 'label', value: '"small"' }, { name: 'inside', value: 'null' }] }] },
          { label: 'Call 1 finishes: 1 + 2 = <b>3</b> boxes.', vars: [{ name: 'b (call 1)', type: 'Box', ref: 'A' }, { name: 'answer (call 1)', value: '1 + 2 = 3' }], objects: [{ id: 'A', cls: 'Box', fields: [{ name: 'label', value: '"big"' }, { name: 'inside', ref: 'B' }] }, { id: 'B', cls: 'Box', fields: [{ name: 'label', value: '"medium"' }, { name: 'inside', ref: 'C' }] }, { id: 'C', cls: 'Box', fields: [{ name: 'label', value: '"small"' }, { name: 'inside', value: 'null' }] }] }
        ], ar: 'كل استدعاء يتبع المرجع inside إلى صندوق أصغر حتى يصل إلى null.' },
        { type: 'p', en: 'To be honest: for a single chain of boxes like this, a <code>while</code> loop works too. But a real folder can hold <b>several</b> folders, and each of them several more. Then one recursive call per inner folder is far simpler than any loop. That is why programs that search folders or draw family trees usually use recursion.' },
        { type: 'check', q: 'In <code>countBoxes</code>, what is the base case?', options: ['The box label is empty', 'b is null: there is no box', 'b.inside is null', 'The count reaches 3'], answer: 1, explain: 'When b is null there is no box at all, so the answer is 0. The smallest box still counts as 1, because its own call adds 1 before reaching null.' },
        { type: 'steps', title: 'Worked example: same answer, two ways', problem: 'Read n. Print the sum 1 + 2 + ... + n computed with a loop and then with recursion.', steps: [
          { en: 'The loop version keeps a running total.', code: J`
            public static int sumLoop(int n) {
                int total = 0;
                for (int i = 1; i <= n; i++) {
                    total += i;
                }
                return total;
            }
          ` },
          { en: 'The recursive version uses the base case n == 0 (an empty sum is 0).', code: J`
            public static int sumRec(int n) {
                if (n == 0) {
                    return 0;
                }
                return n + sumRec(n - 1);
            }
          ` },
          { en: 'In main, call both and print the two results. They must be equal.' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static int sumLoop(int n) {
                  int total = 0;
                  for (int i = 1; i <= n; i++) {
                      total += i;
                  }
                  return total;
              }

              public static int sumRec(int n) {
                  if (n == 0) {
                      return 0;
                  }
                  return n + sumRec(n - 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  System.out.println(sumLoop(n));
                  System.out.println(sumRec(n));
              }
          }
        `, stdin: '5', out: J`
          15
          15
        `, ar: 'نفس النتيجة بطريقتين.' },
        { type: 'steps', title: 'Worked example: opening nested gift boxes', problem: 'Read n and then n box colours, from the outside box to the inside box. Build the nested boxes. Then print "Open the ... box" for each box going in, "Found the gift!" in the middle, and "Close the ... box" for each box coming out.', steps: [
          { en: 'The base case: there is no box left (null). The gift is here.', code: J`
            if (b == null) {
                System.out.println("Found the gift!");
                return;
            }
          ` },
          { en: 'On the way <b>down</b> (before the call), open this box. Then open the boxes inside it.', code: J`
            System.out.println("Open the " + b.label + " box");
            open(b.inside);
          ` },
          { en: 'On the way <b>up</b> (after the call), close this box. The inner boxes close first, in reverse order, just like in Lesson 2.', code: 'System.out.println("Close the " + b.label + " box");' },
          { en: 'Build the boxes in main. The inside box must exist first, so the loop goes from the last colour back to the first; each new box holds the box made before it.', code: J`
            Box current = null;
            for (int i = n - 1; i >= 0; i--) {
                current = new Box(labels[i], current);
            }
            open(current);
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void open(Box b) {
                  if (b == null) {
                      System.out.println("Found the gift!");
                      return;
                  }
                  System.out.println("Open the " + b.label + " box");
                  open(b.inside);
                  System.out.println("Close the " + b.label + " box");
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  String[] labels = new String[n];
                  for (int i = 0; i < n; i++) {
                      labels[i] = in.next();
                  }
                  Box current = null;
                  for (int i = n - 1; i >= 0; i--) {
                      current = new Box(labels[i], current);
                  }
                  open(current);
              }
          }

          class Box {
              String label;
              Box inside;

              Box(String label, Box inside) {
                  this.label = label;
                  this.inside = inside;
              }
          }
        `, stdin: '3\nred blue green', out: J`
          Open the red box
          Open the blue box
          Open the green box
          Found the gift!
          Close the green box
          Close the blue box
          Close the red box
        `, ar: 'نفتح الصناديق عند النزول ونغلقها عند الصعود بترتيب عكسي.' }
      ],
      mistakes: [
        { title: 'Believing recursion is always faster', en: 'It is usually slower than a loop because every call costs time and memory.', code: 'fib(45);   // very slow' },
        { title: 'Using recursion for very large counts', en: 'A recursion that is 100000 calls deep can overflow the stack.', code: 'sumRec(100000);' },
        { title: 'Believing some problems need recursion', en: 'Everything recursive can also be written with loops (sometimes with more work).', code: '// factorial: loop or recursion' },
        { title: 'Mixing both', en: 'Do not put a loop around a recursive call unless you know why.', code: 'for (...) { f(n - 1); }' }
      ],
      remember: [
        'Every recursive method can be rewritten with a loop, and the other way round.',
        'Recursion: shorter code for some problems; costs one stack frame per call.',
        'Loops: faster and use little memory.',
        'Use recursion for naturally recursive problems with small depth, like binary search.',
        'Very deep recursion can end in <code>StackOverflowError</code>.',
        'To rewrite recursion as a loop: base value = starting value, smaller call = update, base case test = when the loop stops.'
      ],
      rememberAr: 'كل دالة عودية يمكن كتابتها بحلقة. العودية أقصر أحياناً لكنها تستهلك إطاراً لكل استدعاء، والحلقة أسرع وأخف.',
      practice: [
        { t: 'mcq', q: 'Which statement is TRUE?', options: ['Recursion always runs faster than a loop', 'Some problems can only be solved with recursion', 'Each recursive call uses stack memory, so very deep recursion may overflow the stack', 'Loops cannot compute factorials'], answer: 2, explain: 'Every recursive solution can be rewritten as a loop. The cost of recursion is one stack frame per call.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int a(int n) {
                  int total = 0;
                  for (int i = 1; i <= n; i++) {
                      total += i;
                  }
                  return total;
              }

              public static int b(int n) {
                  if (n == 0) {
                      return 0;
                  }
                  return n + b(n - 1);
              }

              public static void main(String[] args) {
                  System.out.println(a(4));
                  System.out.println(b(4));
              }
          }
        `, answer: J`
          10
          10
        `, explain: 'Both compute 4 + 3 + 2 + 1 = 10.' },
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
        `, explain: 'From index 0: 2 * 3 * 5 * 1 = 30. From index 2: 5 * 1 = 5. Index 3 is the length, so the base case returns 1.' },
        { t: 'fill', q: 'Rewrite the recursive factorial as a loop.', code: J`
          long result = 1;
          for (int i = 2; i ___ n; i++) {
              result ___ i;
          }
        `, answers: ['<=', '*='], explain: 'The loop multiplies result by 2, 3, ... up to and including n.' },
        { t: 'mcq', q: 'Why is recursive Fibonacci a poor choice for <code>fib(45)</code>?', options: ['It has no base case', 'It repeats the same work many times', 'Recursion is not allowed for int', 'It needs a helper'], answer: 1, explain: 'The same smaller values are recomputed again and again.' },
        { t: 'code', q: 'Read a positive integer <code>n</code>. Print the number of digits of n twice: first with a <b>loop</b>, then with a <b>recursive</b> method. No prompts.', qAr: 'اطبع عدد أرقام n مرتين: بحلقة ثم بدالة عودية.', starter: J`
          import java.util.*;

          public class Main {
              public static int digitsLoop(int n) {
                  // use a while loop and n / 10
                  return 0;
              }

              public static int digitsRec(int n) {
                  // base case: n < 10 has 1 digit
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  System.out.println(digitsLoop(n));
                  System.out.println(digitsRec(n));
              }
          }
        `, tests: [{ stdin: '2026', expected: J`
          4
          4
        ` }, { stdin: '7', expected: J`
          1
          1
        ` }, { stdin: '100', expected: J`
          3
          3
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static int digitsLoop(int n) {
                  int count = 1;
                  while (n >= 10) {
                      n = n / 10;
                      count++;
                  }
                  return count;
              }

              public static int digitsRec(int n) {
                  if (n < 10) {
                      return 1;
                  }
                  return 1 + digitsRec(n / 10);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  System.out.println(digitsLoop(n));
                  System.out.println(digitsRec(n));
              }
          }
        `, hint: 'Loop: count = 1, while (n >= 10) { n = n / 10; count++; }. Recursion: n < 10 gives 1, else 1 + digitsRec(n / 10).', explain: 'Both versions remove one digit with n / 10 until a single digit remains.' },
        { t: 'bug', q: 'This loop should print 120 (5!), but it prints 0. Tap the line with the bug.', qAr: 'الحلقة تطبع 0 بدلاً من 120. أين الخطأ؟', code: J`
          public class Main {
              public static long factorialLoop(int n) {
                  long result = 0;
                  for (int i = 1; i <= n; i++) {
                      result *= i;
                  }
                  return result;
              }

              public static void main(String[] args) {
                  System.out.println(factorialLoop(5));
              }
          }
        `, bug: 3, fix: J`
          public class Main {
              public static long factorialLoop(int n) {
                  long result = 1;
                  for (int i = 1; i <= n; i++) {
                      result *= i;
                  }
                  return result;
              }

              public static void main(String[] args) {
                  System.out.println(factorialLoop(5));
              }
          }
        `, hint: 'The starting value of the loop plays the role of the base case. What is the base value for a product?', explain: 'result starts at 0, and 0 times anything is 0, so the answer stays 0. This is the same mistake as returning 0 in the base case of a recursive factorial. A product must start at 1.', explainAr: 'القيمة الابتدائية للضرب يجب أن تكون 1 مثل الحالة الأساسية.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void open(Box b) {
                  if (b == null) {
                      System.out.println("gift");
                      return;
                  }
                  System.out.println("open " + b.label);
                  open(b.inside);
                  System.out.println("close " + b.label);
              }

              public static void main(String[] args) {
                  Box inner = new Box("small", null);
                  Box outer = new Box("big", inner);
                  open(outer);
              }
          }

          class Box {
              String label;
              Box inside;

              Box(String label, Box inside) {
                  this.label = label;
                  this.inside = inside;
              }
          }
        `, answer: J`
          open big
          open small
          gift
          close small
          close big
        `, explain: 'Going down: open big, open small, then b is null, so gift. Going up, in reverse order: close small, then close big.' },
        { t: 'code', q: 'Read a positive integer n. Print the sum of the squares 1×1 + 2×2 + ... + n×n twice: first computed with a <b>loop</b>, then with a <b>recursive</b> method. No prompts.', qAr: 'اطبع مجموع المربعات مرتين: بحلقة ثم بدالة عودية.', starter: J`
          import java.util.*;

          public class Main {
              public static int squaresLoop(int n) {
                  // a total that starts at 0
                  return 0;
              }

              public static int squaresRec(int n) {
                  // base case n == 0 returns 0
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  System.out.println(squaresLoop(n));
                  System.out.println(squaresRec(n));
              }
          }
        `, tests: [{ stdin: '3', expected: J`
          14
          14
        ` }, { stdin: '1', expected: J`
          1
          1
        ` }, { stdin: '5', expected: J`
          55
          55
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static int squaresLoop(int n) {
                  int total = 0;
                  for (int i = 1; i <= n; i++) {
                      total += i * i;
                  }
                  return total;
              }

              public static int squaresRec(int n) {
                  if (n == 0) {
                      return 0;
                  }
                  return n * n + squaresRec(n - 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  System.out.println(squaresLoop(n));
                  System.out.println(squaresRec(n));
              }
          }
        `, hint: 'Loop: total += i * i for i from 1 to n. Recursion: if (n == 0) return 0; return n * n + squaresRec(n - 1);', explain: 'The loop starts its total at 0, which is the base value of the recursive version. 1 + 4 + 9 = 14 for n = 3.' }
      ]
    },
    // ---------------------------------------------------------------- L11
    {
      title: 'Recursion on arrays: sum, maximum, count and search',
      titleAr: 'العودية على المصفوفات: المجموع والأكبر والعدّ والبحث',
      minutes: 30,
      body: [
        { type: 'h', en: 'One element now, the rest later' },
        { type: 'p', en: 'Arrays hold lists of data: the marks of a class, the prices in a cart, the temperatures of a week. In Lesson 8 a helper walked through an array with an index. In this lesson you use the same pattern to answer four common questions: What is the total? What is the biggest value? How many values match? Where is a value? Every answer follows one recipe: look at <b>one</b> element (at <code>index</code>) and let the recursive call handle <b>the rest</b> (from <code>index + 1</code>).', ar: 'نعالج عنصراً واحداً عند الفهرس، ونترك الباقي للاستدعاء العودي.' },
        { type: 'analogy', title: 'Checking lockers along a corridor', en: 'You walk along a corridor of lockers, looking for your bag. At each locker you check <b>one</b> locker, then you continue with the lockers that are left. When you walk past the last locker, there is nothing left to check. Your position in the corridor is the index.', ar: 'تفحص خزانة واحدة ثم تكمل بالباقي، وموقعك هو الفهرس.' },
        { type: 'table', head: ['Question', 'Base case', 'Recursive case'], rows: [
          ['Total (sum)', '<code>index == a.length</code>: return 0', '<code>a[index] + sum(a, index + 1)</code>'],
          ['Largest (max)', '<code>index == a.length - 1</code>: return a[index]', '<code>Math.max(a[index], max(a, index + 1))</code>'],
          ['How many match (count)', '<code>index == a.length</code>: return 0', '1 or 0, plus the count of the rest'],
          ['Where is it (search)', 'past the end: return -1; a match: return index', 'search the rest from index + 1']
        ] },
        { type: 'p', en: 'Read the table row by row. Three of the four methods stop when the index walks past the end, because "nothing left" has an easy answer: 0 for a total or a count, and -1 for a search. Only max is different, because the largest value of nothing does not exist. Keep this table in mind; the rest of the lesson explains each row slowly.' },
        { type: 'h', en: 'The largest value' },
        { type: 'p', en: 'The temperatures in Riyadh on five summer days are {38, 44, 41, 46, 39}. Which day was the hottest? The largest value is either <b>this</b> element or the largest value of <b>the rest</b>. Notice the new base case: an empty part of the array has no largest value at all, so we stop at the <b>last</b> element instead, at <code>index == a.length - 1</code>.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int max(int[] a, int index) {
                  if (index == a.length - 1) {
                      return a[index];
                  }
                  return Math.max(a[index], max(a, index + 1));
              }

              public static void main(String[] args) {
                  int[] temps = {38, 44, 41, 46, 39};
                  System.out.println("Hottest: " + max(temps, 0));
              }
          }
        `, out: 'Hottest: 46' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['if (index == a.length - 1)', 'BASE CASE: we are on the last element. It is the only one left, so it is the largest of the rest.'],
          ['return a[index];', 'Return that last element.'],
          ['Math.max(a[index], max(a, index + 1))', 'RECURSIVE CASE: the bigger of this element and the largest value after it.']
        ], ar: 'الأكبر = الأكبر بين العنصر الحالي وأكبر عنصر في الباقي.' },
        { type: 'memory', title: 'max({12, 30, 7}) step by step', frames: [
          { label: 'Call 1: index 0. It needs max(12, largest of the rest).', vars: [{ name: 'a (all calls)', type: 'int[]', ref: 'A' }, { name: 'index (call 1)', type: 'int', value: '0' }, { name: 'answer (call 1)', value: 'max(12, ?)' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '12' }, { name: '[1]', value: '30' }, { name: '[2]', value: '7' }] }] },
          { label: 'Call 2: index 1. It needs max(30, ?).', vars: [{ name: 'a (all calls)', type: 'int[]', ref: 'A' }, { name: 'index (call 1)', type: 'int', value: '0' }, { name: 'answer (call 1)', value: 'max(12, ?)' }, { name: 'index (call 2)', type: 'int', value: '1' }, { name: 'answer (call 2)', value: 'max(30, ?)' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '12' }, { name: '[1]', value: '30' }, { name: '[2]', value: '7' }] }] },
          { label: 'Call 3: index 2 is the last index. Base case: it returns <b>7</b>.', vars: [{ name: 'a (all calls)', type: 'int[]', ref: 'A' }, { name: 'index (call 1)', type: 'int', value: '0' }, { name: 'answer (call 1)', value: 'max(12, ?)' }, { name: 'index (call 2)', type: 'int', value: '1' }, { name: 'answer (call 2)', value: 'max(30, ?)' }, { name: 'index (call 3)', type: 'int', value: '2' }, { name: 'answer (call 3)', value: 'returns 7' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '12' }, { name: '[1]', value: '30' }, { name: '[2]', value: '7' }] }] },
          { label: 'Call 3 is removed. Call 2: max(30, 7) = <b>30</b>.', vars: [{ name: 'a (all calls)', type: 'int[]', ref: 'A' }, { name: 'index (call 1)', type: 'int', value: '0' }, { name: 'answer (call 1)', value: 'max(12, ?)' }, { name: 'index (call 2)', type: 'int', value: '1' }, { name: 'answer (call 2)', value: 'max(30, 7) = 30' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '12' }, { name: '[1]', value: '30' }, { name: '[2]', value: '7' }] }] },
          { label: 'Call 2 is removed. Call 1: max(12, 30) = <b>30</b>.', vars: [{ name: 'a (all calls)', type: 'int[]', ref: 'A' }, { name: 'index (call 1)', type: 'int', value: '0' }, { name: 'answer (call 1)', value: 'max(12, 30) = 30' }], objects: [{ id: 'A', cls: 'int[]', fields: [{ name: '[0]', value: '12' }, { name: '[1]', value: '30' }, { name: '[2]', value: '7' }] }] }
        ], ar: 'نصل إلى آخر عنصر، ثم نقارن عند الصعود.' },
        { type: 'check', q: 'Why does <code>max</code> stop at <code>index == a.length - 1</code> and not at <code>index == a.length</code>?', options: ['It is faster', 'With no elements left there is no largest value to return', 'Java does not allow a.length in a condition', 'To skip the last element'], answer: 1, explain: 'A sum of nothing is 0, but the largest of nothing does not exist. So max stops while one element is still left, and returns it. (The array must have at least one element.)' },
        { type: 'h', en: 'Counting the values that match' },
        { type: 'p', en: 'How many days were hotter than 40 degrees? Each call adds <b>1</b> if its element matches and <b>0</b> if it does not, plus the count of the rest. The empty rest has a count of 0, so this base case is <code>index == a.length</code> again.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int countAbove(int[] a, int limit, int index) {
                  if (index == a.length) {
                      return 0;
                  }
                  int add = 0;
                  if (a[index] > limit) {
                      add = 1;
                  }
                  return add + countAbove(a, limit, index + 1);
              }

              public static void main(String[] args) {
                  int[] temps = {38, 44, 41, 46, 39};
                  System.out.println("Days above 40: " + countAbove(temps, 40, 0));
              }
          }
        `, out: 'Days above 40: 3' },
        { type: 'lines', rows: [
          ['countAbove(int[] a, int limit, int index)', 'Three parameters: the array, the limit (it never changes) and the index (it grows).'],
          ['int add = 0; if (a[index] > limit) { add = 1; }', 'This element counts as 1 if it is above the limit, otherwise 0.'],
          ['return add + countAbove(a, limit, index + 1);', 'Add this element\'s 1 or 0 to the count of the rest.']
        ], ar: 'نضيف 1 إذا تحقق الشرط و0 إذا لم يتحقق، ثم نعدّ الباقي.' },
        { type: 'table', head: ['index', 'a[index]', '&gt; 40?', 'add', 'Returns (on the way up)'], rows: [
          ['0', '38', 'no', '0', '0 + 3 = <b>3</b>'],
          ['1', '44', 'yes', '1', '1 + 2 = 3'],
          ['2', '41', 'yes', '1', '1 + 1 = 2'],
          ['3', '46', 'yes', '1', '1 + 0 = 1'],
          ['4', '39', 'no', '0', '0 + 0 = 0'],
          ['5', '-', '-', '-', '0 (base case)']
        ] },
        { type: 'check', q: 'With the same temperatures, what does <code>countAbove(temps, 45, 0)</code> return?', options: ['0', '1', '2', '5'], answer: 1, explain: 'Only 46 is above 45, so exactly one call adds 1.' },
        { type: 'h', en: 'Linear search: where is the value?' },
        { type: 'p', en: '<b>Linear search</b> checks the elements one by one from the start until it finds the value. It works on <b>any</b> array, sorted or not (binary search in Lesson 9 needs a sorted array). It has <b>two</b> base cases: past the end means "not found" (return -1), and a match means "found here" (return the index). For example, a lost-and-found office keeps item numbers in an array.' },
        { type: 'analogy', title: 'Waiting for your suitcase at the airport', en: 'Suitcases pass you on the belt one by one. You look at one suitcase: is it yours? If yes, you take it and stop. If not, you wait for the next one. If the belt stops and yours never came, it is "not found". The suitcases do not need to be in any order.', ar: 'تنظر إلى حقيبة واحدة كل مرة، وتتوقف عندما تجد حقيبتك.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int indexOf(int[] a, int key, int index) {
                  if (index == a.length) {
                      return -1;
                  }
                  if (a[index] == key) {
                      return index;
                  }
                  return indexOf(a, key, index + 1);
              }

              public static void main(String[] args) {
                  int[] items = {501, 733, 120, 845};
                  System.out.println(indexOf(items, 120, 0));
                  System.out.println(indexOf(items, 999, 0));
              }
          }
        `, out: J`
          2
          -1
        ` },
        { type: 'lines', rows: [
          ['if (index == a.length) { return -1; }', 'BASE CASE 1: we walked past the end. The key is not here.'],
          ['if (a[index] == key) { return index; }', 'BASE CASE 2: found it at this index. Stop at once.'],
          ['return indexOf(a, key, index + 1);', 'Otherwise search the rest, and pass its answer up with return.']
        ], ar: 'حالتان أساسيتان: تجاوزنا النهاية (-1) أو وجدنا المفتاح.' },
        { type: 'table', head: ['Call', 'index', 'a[index]', 'What happens'], rows: [
          ['1', '0', '501', 'not 120: search from index 1'],
          ['2', '1', '733', 'not 120: search from index 2'],
          ['3', '2', '120', 'found: return 2'],
          ['back up', '', '', 'call 2 returns 2, then call 1 returns 2']
        ] },
        { type: 'note', kind: 'exam', en: 'Order matters: test <code>index == a.length</code> <b>before</b> you read <code>a[index]</code>. If you read a[index] first, the last call reads past the end and Java throws <code>ArrayIndexOutOfBoundsException</code>.', ar: 'افحص{{g:|ي}} نهاية المصفوفة قبل قراءة a[index].' },
        { type: 'check', q: 'What does <code>indexOf(items, 501, 0)</code> return, and how many calls does it make?', options: ['0, with 1 call', '0, with 4 calls', '-1, with 5 calls', '3, with 4 calls'], answer: 0, explain: '501 is at index 0, so the very first call finds it and returns 0. No other call is made.' },
        { type: 'steps', title: 'Worked example: a class marks report', problem: 'Read n and then n marks. Print the total, the highest mark, and how many students passed (60 or more), using three recursive helpers.', steps: [
          { en: 'The total: base case past the end returns 0; otherwise this mark plus the total of the rest.', code: J`
            public static int sum(int[] a, int i) {
                if (i == a.length) {
                    return 0;
                }
                return a[i] + sum(a, i + 1);
            }
          ` },
          { en: 'The highest: base case on the last element; otherwise the bigger of this mark and the highest of the rest.', code: J`
            public static int max(int[] a, int i) {
                if (i == a.length - 1) {
                    return a[i];
                }
                return Math.max(a[i], max(a, i + 1));
            }
          ` },
          { en: 'The count: add 1 for a mark of at least 60, otherwise 0, plus the count of the rest.', code: J`
            public static int passed(int[] a, int i) {
                if (i == a.length) {
                    return 0;
                }
                int add = 0;
                if (a[i] >= 60) {
                    add = 1;
                }
                return add + passed(a, i + 1);
            }
          ` },
          { en: 'In main, read the marks and start every helper at index 0. For 72, 45, 90, 60, 38: total 305, highest 90, and 3 passed (72, 90, 60).' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static int sum(int[] a, int i) {
                  if (i == a.length) {
                      return 0;
                  }
                  return a[i] + sum(a, i + 1);
              }

              public static int max(int[] a, int i) {
                  if (i == a.length - 1) {
                      return a[i];
                  }
                  return Math.max(a[i], max(a, i + 1));
              }

              public static int passed(int[] a, int i) {
                  if (i == a.length) {
                      return 0;
                  }
                  int add = 0;
                  if (a[i] >= 60) {
                      add = 1;
                  }
                  return add + passed(a, i + 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] marks = new int[n];
                  for (int k = 0; k < n; k++) {
                      marks[k] = in.nextInt();
                  }
                  System.out.println("Total: " + sum(marks, 0));
                  System.out.println("Highest: " + max(marks, 0));
                  System.out.println("Passed: " + passed(marks, 0));
              }
          }
        `, stdin: '5\n72 45 90 60 38', out: J`
          Total: 305
          Highest: 90
          Passed: 3
        `, ar: 'ثلاث دوال عودية بنفس الوصفة: عنصر واحد ثم الباقي.' }
      ],
      mistakes: [
        { title: 'Reading a[index] before checking the end', en: 'The last call has index == a.length, and a[index] there crashes with ArrayIndexOutOfBoundsException. Check the end first.', code: J`
          if (a[index] == key) return index;   // crashes at the end
          if (index == a.length) return -1;
        ` },
        { title: 'Returning 0 as the largest of nothing', en: 'This seems to work for positive numbers, but for {-5, -2} it returns 0, which is not even in the array. Stop at the last element instead.', code: 'if (index == a.length) return 0;   // wrong for max' },
        { title: 'Forgetting return in front of the recursive call', en: 'The search finds the index deep down, but the answer is lost on the way up.', code: J`
          indexOf(a, key, index + 1);   // result thrown away
          return -1;
        ` },
        { title: 'Starting at the wrong index', en: 'The first call must start at index 0, or the first element is skipped.', code: 'sum(marks, 1);   // skips marks[0]' }
      ],
      remember: [
        'Recipe for arrays: handle <code>a[index]</code>, then call the method for <code>index + 1</code>.',
        'Sum and count stop at <code>index == a.length</code> and return 0.',
        'Max stops at the last element, <code>index == a.length - 1</code>, and returns it.',
        'Linear search has two base cases: past the end (-1) and found (return index).',
        'Check the end of the array <b>before</b> reading <code>a[index]</code>.'
      ],
      rememberAr: 'نعالج a[index] ثم نستدعي الدالة على index + 1. المجموع والعدّ يتوقفان عند index == a.length، والأكبر عند آخر عنصر، والبحث الخطي له حالتان أساسيتان.',
      practice: [
        { t: 'mcq', q: 'A recursive <code>sum(a, index)</code> runs on an array of length 4. Which call is the base case?', options: ['sum(a, 3)', 'sum(a, 4)', 'sum(a, 0)', 'sum(a, -1)'], answer: 1, explain: 'The valid indexes are 0 to 3. At index 4 (equal to the length) no elements are left, so it returns 0.', explainAr: 'الحالة الأساسية عندما يساوي الفهرس طول المصفوفة.' },
        { t: 'output', q: 'All the values are negative. What does this program print?', code: J`
          public class Main {
              public static int max(int[] a, int index) {
                  if (index == a.length - 1) {
                      return a[index];
                  }
                  return Math.max(a[index], max(a, index + 1));
              }

              public static void main(String[] args) {
                  int[] a = {-5, -2, -9};
                  System.out.println(max(a, 0));
                  System.out.println(max(a, 2));
              }
          }
        `, answer: J`
          -2
          -9
        `, explain: 'max(a, 0) = max(-5, max(-2, -9)) = max(-5, -2) = -2. max(a, 2) starts on the last element, so it returns -9 at once.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int indexOf(int[] a, int key, int index) {
                  if (index == a.length) {
                      return -1;
                  }
                  if (a[index] == key) {
                      return index;
                  }
                  return indexOf(a, key, index + 1);
              }

              public static void main(String[] args) {
                  int[] seats = {14, 7, 22, 7};
                  System.out.println(indexOf(seats, 7, 0));
                  System.out.println(indexOf(seats, 7, 2));
                  System.out.println(indexOf(seats, 5, 0));
              }
          }
        `, answer: J`
          1
          3
          -1
        `, explain: 'From index 0 the first 7 is at index 1. From index 2 the search skips the first 7 and finds the one at index 3. 5 is not in the array: -1.' },
        { t: 'fill', q: 'Complete the method that counts how many elements equal <code>target</code>.', code: J`
          public static int countEqual(int[] a, int target, int index) {
              if (index == ___) {
                  return 0;
              }
              int add = 0;
              if (a[index] == target) {
                  add = ___;
              }
              return add + countEqual(a, target, ___);
          }
        `, answers: ['a.length', '1', ['index + 1', 'index+1']], explain: 'Stop past the end. A match adds 1. Then count the rest from index + 1.' },
        { t: 'order', q: 'Put the lines of the recursive linear search in order.', lines: [
          'public static int indexOf(int[] a, int key, int index) {',
          '    if (index == a.length) {',
          '        return -1;',
          '    }',
          '    if (a[index] == key) {',
          '        return index;',
          '    }',
          '    return indexOf(a, key, index + 1);',
          '}'
        ], explain: 'First the end check (so a[index] is safe), then the match check, then search the rest.' },
        { t: 'bug', q: 'This search should print -1 for a missing key, but it crashes with <code>ArrayIndexOutOfBoundsException</code>. Tap the line where the problem starts.', qAr: 'البحث يتوقف بخطأ عندما لا يوجد المفتاح. أين المشكلة؟', code: J`
          public class Main {
              public static int indexOf(int[] a, int key, int index) {
                  if (a[index] == key) {
                      return index;
                  }
                  if (index == a.length) {
                      return -1;
                  }
                  return indexOf(a, key, index + 1);
              }
              public static void main(String[] args) {
                  int[] ids = {501, 733, 120};
                  System.out.println(indexOf(ids, 999, 0));
              }
          }
        `, bug: [3, 6], fix: J`
          public class Main {
              public static int indexOf(int[] a, int key, int index) {
                  if (index == a.length) {
                      return -1;
                  }
                  if (a[index] == key) {
                      return index;
                  }
                  return indexOf(a, key, index + 1);
              }
              public static void main(String[] args) {
                  int[] ids = {501, 733, 120};
                  System.out.println(indexOf(ids, 999, 0));
              }
          }
        `, hint: 'What happens in the call with index 3?', explain: 'The two checks are in the wrong order. In the call with index 3 (equal to the length), line 3 reads a[3], which does not exist, before line 6 can say "past the end". Swap the two if statements: check index == a.length first, then compare a[index].', explainAr: 'يجب فحص نهاية المصفوفة قبل قراءة a[index].' },
        { t: 'code', q: 'Read <code>n</code>, then <code>n</code> integers, then a key. Using a <b>recursive</b> linear search <code>indexOf(a, key, index)</code>, print the index of the FIRST position of the key, or <code>-1</code> if it is missing. No prompts.', qAr: 'اطبع فهرس أول ظهور للمفتاح باستخدام بحث خطي عودي، أو -1.', starter: J`
          import java.util.*;

          public class Main {
              public static int indexOf(int[] a, int key, int index) {
                  // two base cases, then search the rest
                  return -1;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] a = new int[n];
                  for (int i = 0; i < n; i++) {
                      a[i] = in.nextInt();
                  }
                  int key = in.nextInt();
                  System.out.println(indexOf(a, key, 0));
              }
          }
        `, tests: [{ stdin: '5\n4 8 15 8 23\n8', expected: '1' }, { stdin: '3\n1 2 3\n7', expected: '-1' }, { stdin: '1\n9\n9', expected: '0' }], solution: J`
          import java.util.*;

          public class Main {
              public static int indexOf(int[] a, int key, int index) {
                  if (index == a.length) {
                      return -1;
                  }
                  if (a[index] == key) {
                      return index;
                  }
                  return indexOf(a, key, index + 1);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  int[] a = new int[n];
                  for (int i = 0; i < n; i++) {
                      a[i] = in.nextInt();
                  }
                  int key = in.nextInt();
                  System.out.println(indexOf(a, key, 0));
              }
          }
        `, hint: 'if (index == a.length) return -1; if (a[index] == key) return index; return indexOf(a, key, index + 1);', explain: 'The search stops at the first match, so it returns the first position. Past the end it returns -1.' }
      ]
    },
    // ---------------------------------------------------------------- L12
    {
      title: 'Printing patterns: count down, count up and triangles',
      titleAr: 'أنماط الطباعة: العد التنازلي والتصاعدي والمثلثات',
      minutes: 30,
      body: [
        { type: 'h', en: 'Where you print decides the order' },
        { type: 'p', en: 'Printing patterns is the clearest way to <b>see</b> the call stack. The same recursive method can print 3 2 1, or 1 2 3, or a triangle that grows or shrinks. The only difference is where one print line stands: <b>before</b> or <b>after</b> the recursive call. Exams love these questions, because they show whether you really understand the way down and the way up.', ar: 'مكان سطر الطباعة (قبل الاستدعاء أو بعده) يحدد ترتيب الناتج.' },
        { type: 'analogy', title: 'Down to the basement and back', en: 'You walk down the stairs to the basement and read the number painted on each stair: 3, 2, 1. Then you walk back up and read the numbers again in the order you meet them: 1, 2, 3. The stairs did not change; only your direction did. Printing before the call is reading on the way down. Printing after the call is reading on the way up.', ar: 'عند النزول تقرأ 3 2 1، وعند الصعود تقرأ 1 2 3.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void down(int n) {
                  if (n == 0) {
                      return;
                  }
                  System.out.print(n + " ");
                  down(n - 1);
              }

              public static void up(int n) {
                  if (n == 0) {
                      return;
                  }
                  up(n - 1);
                  System.out.print(n + " ");
              }

              public static void main(String[] args) {
                  down(3);
                  System.out.println();
                  up(3);
                  System.out.println();
              }
          }
        `, out: J`
          3 2 1
          1 2 3
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['down: print, then down(n - 1)', 'The print runs BEFORE the smaller call, on the way down: 3, then 2, then 1.'],
          ['up: up(n - 1), then print', 'The print runs AFTER the smaller call returns, on the way up: the deepest call (n = 1) prints first.'],
          ['if (n == 0) { return; }', 'Both methods have the same base case and the same smaller call. Only the order of two lines differs.']
        ], ar: 'الدالتان متطابقتان ما عدا ترتيب سطرين.' },
        { type: 'memory', title: 'up(3): nothing is printed until the way up', frames: [
          { label: 'Call 1: n = 3. It calls up(2) first. Output: (nothing yet)', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }] },
          { label: 'Call 2: n = 2. It calls up(1) first. Output: (nothing yet)', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'n (call 2)', type: 'int', value: '2' }] },
          { label: 'Call 3: n = 1. It calls up(0) first. Output: (nothing yet)', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'n (call 3)', type: 'int', value: '1' }] },
          { label: 'Call 4: n = 0, the base case. It returns at once.', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'n (call 3)', type: 'int', value: '1' }, { name: 'n (call 4)', type: 'int', value: '0' }] },
          { label: 'Call 4 is removed. Call 3 continues and prints 1. Output: 1', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'n (call 2)', type: 'int', value: '2' }, { name: 'n (call 3)', type: 'int', value: '1' }] },
          { label: 'Call 3 is removed. Call 2 prints 2. Output: 1 2', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }, { name: 'n (call 2)', type: 'int', value: '2' }] },
          { label: 'Call 2 is removed. Call 1 prints 3. Output: 1 2 3', vars: [{ name: 'n (call 1)', type: 'int', value: '3' }] }
        ], ar: 'لا يُطبع شيء عند النزول؛ كل الطباعة تحدث عند الصعود.' },
        { type: 'check', q: 'What does <code>up(4)</code> print?', options: ['4 3 2 1', '1 2 3 4', '1 2 3', '4'], answer: 1, explain: 'The print is after the call, so it happens on the way up, starting with the deepest call: 1 2 3 4.' },
        { type: 'h', en: 'Counting up with two parameters' },
        { type: 'p', en: 'There is a second way to count up: carry the <b>current</b> number and the <b>last</b> number. Print the current one, then call the method with current + 1. The base case is when the current number goes past the last one. This version prints on the way down, but the numbers grow. The problem still gets smaller, because the distance between <code>from</code> and <code>to</code> shrinks by 1 in every call.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void countUp(int from, int to) {
                  if (from > to) {
                      return;
                  }
                  System.out.println(from);
                  countUp(from + 1, to);
              }

              public static void main(String[] args) {
                  countUp(5, 8);
              }
          }
        `, out: J`
          5
          6
          7
          8
        ` },
        { type: 'lines', rows: [
          ['if (from > to) { return; }', 'BASE CASE: we went past the last number.'],
          ['System.out.println(from);', 'Print the current number (on the way down).'],
          ['countUp(from + 1, to);', 'The next number; <code>to</code> never changes.']
        ], ar: 'المعامل from يزيد حتى يتجاوز to.' },
        { type: 'check', q: 'How many numbers does <code>countUp(3, 3)</code> print?', options: ['0', '1', '2', '3'], answer: 1, explain: 'from = 3 is not greater than to = 3, so it prints 3. Then countUp(4, 3) stops. One number.' },
        { type: 'p', en: 'So you now know two correct ways to count up: one parameter with the print <b>after</b> the call, or two parameters with the print <b>before</b> the call. Exams use both, so practise reading both. Next, we use the same ideas to draw shapes.' },
        { type: 'h', en: 'A triangle of stars' },
        { type: 'p', en: 'Now build something bigger out of small pieces. The method <code>line(n)</code> prints one row of n stars and then a new line (like <code>stars</code> in Lesson 1). Then <code>triangle(n)</code> uses it: to draw a triangle of n rows, first draw the triangle of n - 1 rows, then draw one row of n stars under it.' },
        { type: 'analogy', title: 'Passing the drawing down the class', en: 'The teacher asks you for a triangle of 4 rows. You pass the paper to your neighbour: "please draw 3 rows first". She passes it on: "please draw 2 rows first", and so on. The last student draws 1 star. Then the paper comes back, and each student adds one longer row at the bottom. So the shortest row is drawn first, even though you were asked first.', ar: 'كل طالب ينتظر رجوع الورقة ثم يضيف سطره الأطول في الأسفل.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void line(int n) {
                  if (n == 0) {
                      System.out.println();
                      return;
                  }
                  System.out.print("*");
                  line(n - 1);
              }

              public static void triangle(int n) {
                  if (n == 0) {
                      return;
                  }
                  triangle(n - 1);
                  line(n);
              }

              public static void main(String[] args) {
                  triangle(4);
              }
          }
        `, out: J`
          *
          **
          ***
          ****
        ` },
        { type: 'lines', rows: [
          ['line(n)', 'Prints n stars; its base case ends the row with println().'],
          ['triangle(n - 1);', 'First draw all the smaller rows above.'],
          ['line(n);', 'Then, on the way up, draw this row: the longest row comes last.']
        ], ar: 'نرسم المثلث الأصغر أولاً، ثم السطر الأطول تحته.' },
        { type: 'table', head: ['Moment in triangle(3)', 'What happens', 'Printed'], rows: [
          ['triangle(3) starts', 'calls triangle(2) first', '-'],
          ['triangle(2) starts', 'calls triangle(1) first', '-'],
          ['triangle(1) starts', 'calls triangle(0), which returns at once', '-'],
          ['triangle(1) continues', 'line(1)', '*'],
          ['triangle(2) continues', 'line(2)', '**'],
          ['triangle(3) continues', 'line(3)', '***']
        ] },
        { type: 'p', en: 'Swap the two lines and the triangle turns <b>upside down</b>: now <code>line(n)</code> runs on the way down, so the longest row is printed first.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void line(int n) {
                  if (n == 0) {
                      System.out.println();
                      return;
                  }
                  System.out.print("*");
                  line(n - 1);
              }

              public static void upsideDown(int n) {
                  if (n == 0) {
                      return;
                  }
                  line(n);
                  upsideDown(n - 1);
              }

              public static void main(String[] args) {
                  upsideDown(3);
              }
          }
        `, out: J`
          ***
          **
          *
        ` },
        { type: 'check', q: 'In <code>triangle(3)</code>, which call prints its row FIRST?', options: ['triangle(3)', 'triangle(2)', 'triangle(1)', 'triangle(0)'], answer: 2, explain: 'triangle(0) prints nothing. triangle(1) is the first call to continue after its recursive call, so it prints the first row: one star.' },
        { type: 'note', kind: 'exam', en: 'Exam method for pattern questions: find the recursive call first. Everything <b>above</b> it happens on the way down, in normal order. Everything <b>below</b> it happens on the way up, in reverse order.', ar: 'ما فوق الاستدعاء يحدث عند النزول، وما تحته يحدث عند الصعود بترتيب عكسي.' },
        { type: 'steps', title: 'Worked example: an hourglass', problem: 'Read n and print an hourglass (sand clock) shape: rows of n, n - 1, ..., 1 stars, then 1, 2, ..., n stars. For n = 3 there are 6 rows.', steps: [
          { en: 'Reuse <code>line(n)</code> from above. It prints one row of n stars.' },
          { en: 'Base case: n is 0, nothing to draw.', code: J`
            if (n == 0) {
                return;
            }
          ` },
          { en: 'The top half shrinks, so print a row <b>before</b> the call (on the way down: 3, 2, 1).', code: J`
            line(n);
            hourglass(n - 1);
          ` },
          { en: 'The bottom half grows, so print the same row again <b>after</b> the call (on the way up: 1, 2, 3).', code: 'line(n);' },
          { en: 'Trace n = 2: line(2), then hourglass(1) prints *, *, then line(2). Result: **, *, *, **.' }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void line(int n) {
                  if (n == 0) {
                      System.out.println();
                      return;
                  }
                  System.out.print("*");
                  line(n - 1);
              }

              public static void hourglass(int n) {
                  if (n == 0) {
                      return;
                  }
                  line(n);
                  hourglass(n - 1);
                  line(n);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  hourglass(in.nextInt());
              }
          }
        `, stdin: '3', out: J`
          ***
          **
          *
          *
          **
          ***
        `, ar: 'سطر قبل الاستدعاء للنصف العلوي، وسطر بعده للنصف السفلي.' }
      ],
      mistakes: [
        { title: 'Printing on the wrong side of the call', en: 'The numbers or rows come out in the reverse order. Decide: should the first output come from the biggest n (print before) or the smallest n (print after)?', code: J`
          System.out.print(n + " ");   // before: 3 2 1
          up(n - 1);                   // we wanted 1 2 3
        ` },
        { title: 'Forgetting the new line at the end of a row', en: 'If line(n) never calls println(), all the stars end up on one long line.', code: J`
          if (n == 0) {
              return;   // no System.out.println();
          }
        ` },
        { title: 'Row length off by one', en: 'Calling line(n - 1) inside triangle(n) makes every row one star too short, and the first row empty.', code: J`
          triangle(n - 1);
          line(n - 1);   // should be line(n)
        ` },
        { title: 'A base case that prints in triangle', en: 'The base case of triangle should do nothing. If it prints a new line, an extra empty row appears at the top.', code: 'if (n == 0) { System.out.println(); return; }   // extra empty row' }
      ],
      remember: [
        'Print <b>before</b> the recursive call: output on the way down (3 2 1).',
        'Print <b>after</b> the recursive call: output on the way up, reversed (1 2 3).',
        'Counting up can also use two parameters: <code>countUp(from + 1, to)</code>.',
        'A triangle is a smaller triangle plus one row: <code>triangle(n - 1); line(n);</code>.',
        'Swap the two lines and the triangle turns upside down.'
      ],
      rememberAr: 'الطباعة قبل الاستدعاء تظهر عند النزول، وبعده تظهر عند الصعود بترتيب معكوس. المثلث = مثلث أصغر + سطر واحد.',
      practice: [
        { t: 'mcq', q: 'A print statement placed AFTER the recursive call runs:', options: ['on the way down, in normal order', 'on the way up, in reverse order', 'only in the base case', 'never'], answer: 1, explain: 'It must wait until the smaller call returns, so it runs while the stack unwinds: the deepest call prints first.', explainAr: 'الطباعة بعد الاستدعاء تحدث عند الصعود.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void up(int n) {
                  if (n == 0) {
                      return;
                  }
                  up(n - 1);
                  System.out.print(n + " ");
              }

              public static void main(String[] args) {
                  up(4);
                  System.out.println();
              }
          }
        `, answer: '1 2 3 4', explain: 'Nothing is printed on the way down. On the way up, up(1) prints 1, then up(2) prints 2, and so on.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void row(int k) {
                  if (k == 0) {
                      return;
                  }
                  row(k - 1);
                  System.out.print(k + " ");
              }

              public static void rows(int n) {
                  if (n == 0) {
                      return;
                  }
                  rows(n - 1);
                  row(n);
                  System.out.println();
              }

              public static void main(String[] args) {
                  rows(3);
              }
          }
        `, answer: J`
          1
          1 2
          1 2 3
        `, explain: 'row(k) counts up from 1 to k. rows(n) first prints the smaller rows, then row n on the way up: row 1, row 2, row 3.' },
        { t: 'fill', q: 'Complete <code>triangle</code> so that it prints rows of 1, 2, ..., n stars (shortest row first).', code: J`
          public static void triangle(int n) {
              if (n == 0) {
                  return;
              }
              triangle(___);
              line(___);
          }
        `, answers: [['n - 1', 'n-1'], 'n'], explain: 'First draw the smaller triangle (n - 1 rows), then, on the way up, the row of n stars.' },
        { t: 'order', q: 'Put the lines in order so that the triangle is upside down (longest row first).', lines: [
          'public static void upsideDown(int n) {',
          '    if (n == 0) {',
          '        return;',
          '    }',
          '    line(n);',
          '    upsideDown(n - 1);',
          '}'
        ], explain: 'The row is printed before the recursive call, so the longest row comes first.' },
        { t: 'bug', q: '<code>line(n)</code> prints n stars and a new line, and it is correct. <code>triangle(3)</code> should print rows of 1, 2 and 3 stars, but it prints an empty row first and its last row has only 2 stars. Tap the line with the bug.', qAr: 'المثلث يبدأ بسطر فارغ وآخر سطر فيه نجمتان فقط. أين الخطأ؟', code: J`
          public static void triangle(int n) {
              if (n == 0) {
                  return;
              }
              triangle(n - 1);
              line(n - 1);
          }
        `, bug: 6, fix: J`
          public static void triangle(int n) {
              if (n == 0) {
                  return;
              }
              triangle(n - 1);
              line(n);
          }
        `, hint: 'How many stars should the row of triangle(1) have?', explain: 'Each call of triangle(n) must print a row of n stars. With line(n - 1), triangle(1) prints line(0), which is an empty row, and triangle(3) prints only 2 stars. This is an off-by-one error; the fix is line(n).', explainAr: 'خطأ بفارق واحد: يجب أن يطبع triangle(n) سطراً من n نجمة.' },
        { t: 'code', q: 'Read n (1 or more). Print the numbers from 1 up to n, one per line, using a recursive method <code>countUp(int n)</code> with only ONE parameter. No loops and no prompts.', qAr: 'اطبع الأعداد من 1 إلى n بدالة عودية لها معامل واحد فقط.', starter: J`
          import java.util.*;

          public class Main {
              public static void countUp(int n) {
                  // base case, then think: print before or after the call?
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  countUp(in.nextInt());
              }
          }
        `, tests: [{ stdin: '3', expected: J`
          1
          2
          3
        ` }, { stdin: '1', expected: '1' }], solution: J`
          import java.util.*;

          public class Main {
              public static void countUp(int n) {
                  if (n == 0) {
                      return;
                  }
                  countUp(n - 1);
                  System.out.println(n);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  countUp(in.nextInt());
              }
          }
        `, hint: 'Call countUp(n - 1) first, then print n.', explain: 'With the print after the call, the smallest number is printed first, while the stack unwinds.' }
      ]
    },
    // ---------------------------------------------------------------- L13
    {
      title: 'Classic problems: GCD, binary numbers and digit sums',
      titleAr: 'مسائل كلاسيكية: القاسم المشترك الأكبر والنظام الثنائي ومجموع الأرقام',
      minutes: 30,
      body: [
        { type: 'h', en: 'The greatest common divisor (GCD)' },
        { type: 'p', en: 'The three short methods in this lesson appear in almost every recursion exam, and each one teaches something new. The first is the <b>greatest common divisor</b> (GCD): the biggest number that divides two numbers with no remainder. Where is it useful? You have 24 dates and 36 chocolates and want to make identical gift bags with nothing left over. The largest number of bags is gcd(24, 36) = 12, and each bag gets 2 dates and 3 chocolates.', ar: 'القاسم المشترك الأكبر هو أكبر عدد يقسم العددين دون باقٍ.' },
        { type: 'analogy', title: 'The biggest square tiles', en: 'You want to cover a board of 48 by 18 with equal squares, as big as possible. Cut 18 × 18 squares from the long side: two fit, and a piece of 12 × 18 is left. Do the same with that smaller piece: one 12 × 12 square fits, and 12 × 6 is left. Two 6 × 6 squares fill it exactly. The biggest square is 6, and gcd(48, 18) = 6. Each step is the same job on a smaller board.', ar: 'نقص أكبر مربعات ممكنة، ونكرر على القطعة الباقية الأصغر.' },
        { type: 'p', en: 'The Greek mathematician Euclid noticed this more than 2000 years ago: <code>gcd(a, b) = gcd(b, a % b)</code>, and <code>gcd(a, 0) = a</code>. The remainder <code>a % b</code> is always smaller than b, so the numbers shrink quickly until the remainder is 0.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int gcd(int a, int b) {
                  if (b == 0) {
                      return a;
                  }
                  return gcd(b, a % b);
              }

              public static void main(String[] args) {
                  System.out.println(gcd(48, 18));
                  System.out.println(gcd(24, 36));
                  System.out.println(gcd(7, 5));
              }
          }
        `, out: J`
          6
          12
          1
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['if (b == 0) { return a; }', 'BASE CASE: dividing by 0 is not possible, and gcd(a, 0) is a.'],
          ['return gcd(b, a % b);', 'RECURSIVE CASE: the old b moves to the first place, and the remainder becomes the new b.'],
          ['gcd(7, 5)', '7 and 5 share no divisor except 1, so the answer is 1.']
        ], ar: 'gcd(a, b) = gcd(b, a % b) حتى يصبح الباقي 0.' },
        { type: 'table', head: ['Call', 'a', 'b', 'a % b', 'Next'], rows: [
          ['1', '48', '18', '12', 'gcd(18, 12)'],
          ['2', '18', '12', '6', 'gcd(12, 6)'],
          ['3', '12', '6', '0', 'gcd(6, 0)'],
          ['4', '6', '0', '-', 'base case: return <b>6</b>']
        ] },
        { type: 'memory', title: 'gcd(48, 18): the answer is passed up unchanged', frames: [
          { label: 'Call 1: a = 48, b = 18. b is not 0, so it returns gcd(18, 12).', vars: [{ name: 'a, b (call 1)', value: '48, 18' }, { name: 'returns (call 1)', value: '?' }] },
          { label: 'Call 2: a = 18, b = 12. It returns gcd(12, 6).', vars: [{ name: 'a, b (call 1)', value: '48, 18' }, { name: 'returns (call 1)', value: '?' }, { name: 'a, b (call 2)', value: '18, 12' }, { name: 'returns (call 2)', value: '?' }] },
          { label: 'Call 3: a = 12, b = 6. It returns gcd(6, 0).', vars: [{ name: 'a, b (call 1)', value: '48, 18' }, { name: 'returns (call 1)', value: '?' }, { name: 'a, b (call 2)', value: '18, 12' }, { name: 'returns (call 2)', value: '?' }, { name: 'a, b (call 3)', value: '12, 6' }, { name: 'returns (call 3)', value: '?' }] },
          { label: 'Call 4: b = 0. Base case: it returns <b>6</b>.', vars: [{ name: 'a, b (call 1)', value: '48, 18' }, { name: 'returns (call 1)', value: '?' }, { name: 'a, b (call 2)', value: '18, 12' }, { name: 'returns (call 2)', value: '?' }, { name: 'a, b (call 3)', value: '12, 6' }, { name: 'returns (call 3)', value: '?' }, { name: 'a, b (call 4)', value: '6, 0' }, { name: 'returns (call 4)', value: '6' }] },
          { label: 'Call 4 is removed. Call 3 returns the same 6, with no extra work.', vars: [{ name: 'a, b (call 1)', value: '48, 18' }, { name: 'returns (call 1)', value: '?' }, { name: 'a, b (call 2)', value: '18, 12' }, { name: 'returns (call 2)', value: '?' }, { name: 'a, b (call 3)', value: '12, 6' }, { name: 'returns (call 3)', value: '6' }] },
          { label: 'Calls 2 and 1 do the same, and main receives <b>6</b>.', vars: [{ name: 'a, b (call 1)', value: '48, 18' }, { name: 'returns (call 1)', value: '6' }] }
        ], ar: 'لا يوجد عمل عند الصعود؛ الجواب يُمرَّر كما هو.' },
        { type: 'check', q: 'What is <code>gcd(10, 4)</code>?', options: ['1', '2', '4', '40'], answer: 1, explain: 'gcd(10, 4) = gcd(4, 2) = gcd(2, 0) = 2.' },
        { type: 'note', kind: 'tip', en: 'What if a is smaller than b? gcd(24, 36) first calls gcd(36, 24), because 24 % 36 is 24. The two numbers simply swap places, so you never need a special case.' },
        { type: 'h', en: 'Converting a number to binary' },
        { type: 'p', en: 'Computers store every number with only two digits, 0 and 1. This is the <b>binary</b> system (base 2), and each 0 or 1 is called a <b>bit</b>. In our normal system each place is worth 10 times the place on its right (1, 10, 100). In binary each place is worth 2 times the place on its right: 1, 2, 4, 8, 16. For example 13 = 8 + 4 + 1, so 13 in binary is <code>1101</code>.', ar: 'في النظام الثنائي كل خانة تساوي ضعف الخانة التي على يمينها: 1، 2، 4، 8.' },
        { type: 'table', head: ['Place value', '8', '4', '2', '1'], rows: [
          ['13 = 8 + 4 + 1', '1', '1', '0', '1'],
          ['6 = 4 + 2', '0', '1', '1', '0']
        ] },
        { type: 'p', en: 'How do we find the bits? <code>n % 2</code> is the <b>last</b> bit (0 for an even number, 1 for an odd number), and <code>n / 2</code> is the number without its last bit. This is exactly like <code>% 10</code> and <code>/ 10</code> for decimal digits in Lesson 5. The bits are found from right to left, so we write the binary of <code>n / 2</code> <b>first</b> and the last bit <b>after</b> it.' },
        { type: 'analogy', title: 'Coins in pairs', en: 'You have 13 one-riyal coins. Put them in pairs: 6 pairs and 1 coin left over, so the last bit is 1. Now treat the 6 pairs as new coins and pair them again: 3 pairs, 0 left over (bit 0). Then 3 makes 1 pair with 1 left over (bit 1). Finally 1 makes 0 pairs with 1 left over (bit 1). Read the leftovers from the last one to the first: 1101.', ar: 'نجمع القطع أزواجاً ونسجل الباقي، ثم نقرأ البواقي من الأخير إلى الأول.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static String toBinary(int n) {
                  if (n < 2) {
                      return "" + n;
                  }
                  return toBinary(n / 2) + (n % 2);
              }

              public static void main(String[] args) {
                  System.out.println(toBinary(13));
                  System.out.println(toBinary(6));
                  System.out.println(toBinary(1));
              }
          }
        `, out: J`
          1101
          110
          1
        ` },
        { type: 'lines', rows: [
          ['if (n < 2) { return "" + n; }', 'BASE CASE: 0 and 1 are already one bit. "" + n turns the number into a String.'],
          ['toBinary(n / 2)', 'The bits of the rest of the number, which come FIRST (on the left).'],
          ['+ (n % 2)', 'The last bit, joined at the END (on the right).']
        ], ar: 'نكتب تمثيل n / 2 أولاً، ثم الباقي n % 2 في النهاية.' },
        { type: 'table', head: ['Call', 'n / 2', 'n % 2', 'Returns (on the way up)'], rows: [
          ['toBinary(13)', '6', '1', '"110" + 1 = <b>"1101"</b>'],
          ['toBinary(6)', '3', '0', '"11" + 0 = "110"'],
          ['toBinary(3)', '1', '1', '"1" + 1 = "11"'],
          ['toBinary(1)', '-', '-', '"1" (base case)']
        ] },
        { type: 'check', q: 'What does <code>toBinary(5)</code> return?', options: ['"101"', '"110"', '"011"', '"5"'], answer: 0, explain: '5 = 4 + 1. toBinary(5) = toBinary(2) + 1 = (toBinary(1) + 0) + 1 = "101".' },
        { type: 'h', en: 'Sum of digits revisited: the digital root' },
        { type: 'p', en: 'In Lesson 5 you wrote <code>sumDigits</code>. Now use it inside another recursive method. The <b>digital root</b> of a number: add its digits; if the result still has more than one digit, add <b>its</b> digits; repeat until one digit is left. For 4096: 4 + 0 + 9 + 6 = 19, then 1 + 9 = 10, then 1 + 0 = 1. Some ID and barcode checks use this idea. The new thing: the recursive call is on <code>sumDigits(n)</code>, not on <code>n - 1</code> or <code>n / 10</code>, but it is still a smaller number.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int sumDigits(int n) {
                  if (n < 10) {
                      return n;
                  }
                  return n % 10 + sumDigits(n / 10);
              }

              public static int digitalRoot(int n) {
                  if (n < 10) {
                      return n;
                  }
                  return digitalRoot(sumDigits(n));
              }

              public static void main(String[] args) {
                  System.out.println(digitalRoot(4096));
                  System.out.println(digitalRoot(99999));
              }
          }
        `, out: J`
          1
          9
        ` },
        { type: 'lines', rows: [
          ['if (n < 10) { return n; }', 'BASE CASE: one digit left. That digit is the digital root.'],
          ['digitalRoot(sumDigits(n))', 'Replace n by the sum of its digits (a smaller number) and do the same job again.'],
          ['digitalRoot(99999)', '9+9+9+9+9 = 45, then 4 + 5 = 9.']
        ], ar: 'نستبدل العدد بمجموع أرقامه ونكرر حتى يبقى رقم واحد.' },
        { type: 'check', q: 'What is <code>digitalRoot(38)</code>?', options: ['2', '11', '3', '8'], answer: 0, explain: '3 + 8 = 11, and 11 still has two digits: 1 + 1 = 2.' },
        { type: 'steps', title: 'Worked example: sharing gifts equally', problem: 'Read the number of dates and the number of chocolates. Print the largest number of identical gift bags (nothing left over) and what goes into each bag.', steps: [
          { en: 'Identical bags with nothing left over means the number of bags must divide both counts. The <b>largest</b> such number is the GCD.' },
          { en: 'Base case of gcd: when b is 0, the answer is a.', code: J`
            if (b == 0) {
                return a;
            }
          ` },
          { en: 'Recursive case: Euclid\'s rule.', code: 'return gcd(b, a % b);' },
          { en: 'Trace gcd(24, 36): gcd(36, 24), then gcd(24, 12), then gcd(12, 0) = 12 bags.' },
          { en: 'In main, divide each count by the number of bags to find the contents of one bag.', code: J`
            int bags = gcd(dates, chocolates);
            System.out.println("Bags: " + bags);
            System.out.println("Each bag: " + (dates / bags) + " dates and " + (chocolates / bags) + " chocolates");
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static int gcd(int a, int b) {
                  if (b == 0) {
                      return a;
                  }
                  return gcd(b, a % b);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int dates = in.nextInt();
                  int chocolates = in.nextInt();
                  int bags = gcd(dates, chocolates);
                  System.out.println("Bags: " + bags);
                  System.out.println("Each bag: " + (dates / bags) + " dates and " + (chocolates / bags) + " chocolates");
              }
          }
        `, stdin: '24 36', out: J`
          Bags: 12
          Each bag: 2 dates and 3 chocolates
        `, ar: 'عدد الأكياس = القاسم المشترك الأكبر للعددين.' }
      ],
      mistakes: [
        { title: 'Testing a instead of b in gcd', en: 'With <code>if (a == 0)</code>, the call gcd(6, 0) still computes 6 % 0, and Java throws ArithmeticException (division by zero). Test b.', code: J`
          if (a == 0) return b;        // wrong test
          return gcd(b, a % b);        // a % 0 crashes
        ` },
        { title: 'Swapping the order in the recursive call', en: 'gcd(a % b, b) keeps b the same. gcd(12, 18) calls gcd(12, 18) again and again, until StackOverflowError.', code: 'return gcd(a % b, b);   // should be gcd(b, a % b)' },
        { title: 'Bits in the wrong order', en: 'Putting the last bit first writes the bits backwards: 6 becomes "011" instead of "110".', code: 'return (n % 2) + toBinary(n / 2);' },
        { title: 'Base case that loses the number 0', en: 'If the base case is n == 0 returning "", then toBinary(0) prints an empty line. Use n &lt; 2 and return "" + n.', code: 'if (n == 0) return "";   // toBinary(0) gives ""' }
      ],
      remember: [
        'GCD: <code>gcd(a, b) = gcd(b, a % b)</code> and <code>gcd(a, 0) = a</code>.',
        'In gcd the answer is passed up unchanged: no work on the way up.',
        'Binary: last bit <code>n % 2</code>, rest <code>n / 2</code>, written as <code>toBinary(n / 2) + (n % 2)</code>.',
        'Binary base case: <code>n &lt; 2</code> returns <code>"" + n</code>.',
        'Digital root: <code>digitalRoot(sumDigits(n))</code> until one digit is left.'
      ],
      rememberAr: 'gcd(a, b) = gcd(b, a % b) و gcd(a, 0) = a. التحويل للثنائي: تمثيل n / 2 ثم n % 2. الجذر الرقمي: نكرر جمع الأرقام حتى يبقى رقم واحد.',
      practice: [
        { t: 'mcq', q: 'What is <code>gcd(12, 0)</code> with our method?', options: ['0', '12', '1', 'An error'], answer: 1, explain: 'b is 0, so the base case returns a, which is 12.', explainAr: 'عندما b = 0 نُرجع a.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int gcd(int a, int b) {
                  if (b == 0) {
                      return a;
                  }
                  return gcd(b, a % b);
              }

              public static void main(String[] args) {
                  System.out.println(gcd(84, 36));
                  System.out.println(gcd(17, 5));
              }
          }
        `, answer: J`
          12
          1
        `, explain: 'gcd(84, 36) = gcd(36, 12) = gcd(12, 0) = 12. gcd(17, 5) = gcd(5, 2) = gcd(2, 1) = gcd(1, 0) = 1.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static String toBinary(int n) {
                  if (n < 2) {
                      return "" + n;
                  }
                  return toBinary(n / 2) + (n % 2);
              }

              public static void main(String[] args) {
                  System.out.println(toBinary(10));
                  System.out.println(toBinary(8));
                  System.out.println(toBinary(0));
              }
          }
        `, answer: J`
          1010
          1000
          0
        `, explain: '10 = 8 + 2, so 1010. 8 is one 8 and nothing else: 1000. 0 is the base case: "0".' },
        { t: 'fill', q: 'Complete the method that converts n to binary.', code: J`
          public static String toBinary(int n) {
              if (n < 2) {
                  return "" + n;
              }
              return toBinary(n ___ 2) + (n ___ 2);
          }
        `, answers: ['/', '%'], explain: 'n / 2 is the number without its last bit, and n % 2 is the last bit, written at the end.' },
        { t: 'bug', q: 'This program should print 110 (6 in binary), but it prints 011. Tap the line with the bug.', qAr: 'البرنامج يطبع 011 بدلاً من 110. أين الخطأ؟', code: J`
          public class Main {
              public static String toBinary(int n) {
                  if (n < 2) {
                      return "" + n;
                  }
                  return (n % 2) + toBinary(n / 2);
              }

              public static void main(String[] args) {
                  System.out.println(toBinary(6));
              }
          }
        `, bug: 6, fix: J`
          public class Main {
              public static String toBinary(int n) {
                  if (n < 2) {
                      return "" + n;
                  }
                  return toBinary(n / 2) + (n % 2);
              }

              public static void main(String[] args) {
                  System.out.println(toBinary(6));
              }
          }
        `, hint: 'Which bit does n % 2 give: the first or the last?', explain: 'n % 2 is the LAST (rightmost) bit, but line 6 puts it in front of the other bits, so the bits come out backwards: 0, then "11", gives "011". The rest of the number must come first: toBinary(n / 2) + (n % 2).', explainAr: 'الباقي n % 2 هو آخر خانة، لذلك يجب أن يأتي في النهاية.' },
        { t: 'code', q: 'Read two positive integers. Print their greatest common divisor using a recursive method <code>gcd(int a, int b)</code> (Euclid). No prompts.', qAr: 'اطبع القاسم المشترك الأكبر لعددين بدالة عودية.', starter: J`
          import java.util.*;

          public class Main {
              public static int gcd(int a, int b) {
                  // base case: b == 0
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int a = in.nextInt();
                  int b = in.nextInt();
                  System.out.println(gcd(a, b));
              }
          }
        `, tests: [{ stdin: '48 18', expected: '6' }, { stdin: '7 5', expected: '1' }, { stdin: '75 100', expected: '25' }], solution: J`
          import java.util.*;

          public class Main {
              public static int gcd(int a, int b) {
                  if (b == 0) {
                      return a;
                  }
                  return gcd(b, a % b);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int a = in.nextInt();
                  int b = in.nextInt();
                  System.out.println(gcd(a, b));
              }
          }
        `, hint: 'if (b == 0) return a; return gcd(b, a % b);', explain: 'The remainder gets smaller in every call, so it reaches 0, and then a is the answer.' },
        { t: 'code', q: 'Read a whole number n (0 or more). Print its digital root: keep adding the digits until only one digit is left. Use two recursive methods, <code>sumDigits</code> and <code>digitalRoot</code>. No loops and no prompts.', qAr: 'اطبع الجذر الرقمي للعدد باستخدام دالتين عوديتين.', starter: J`
          import java.util.*;

          public class Main {
              public static int sumDigits(int n) {
                  // from Lesson 5
                  return 0;
              }

              public static int digitalRoot(int n) {
                  // one digit: done; otherwise digitalRoot of the digit sum
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(digitalRoot(in.nextInt()));
              }
          }
        `, tests: [{ stdin: '4096', expected: '1' }, { stdin: '7', expected: '7' }, { stdin: '99999', expected: '9' }], solution: J`
          import java.util.*;

          public class Main {
              public static int sumDigits(int n) {
                  if (n < 10) {
                      return n;
                  }
                  return n % 10 + sumDigits(n / 10);
              }

              public static int digitalRoot(int n) {
                  if (n < 10) {
                      return n;
                  }
                  return digitalRoot(sumDigits(n));
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(digitalRoot(in.nextInt()));
              }
          }
        `, hint: 'digitalRoot: if (n < 10) return n; return digitalRoot(sumDigits(n));', explain: 'sumDigits makes the number smaller, and digitalRoot repeats this until a single digit is left.' }
      ]
    },
    // ---------------------------------------------------------------- L14
    {
      title: 'The Tower of Hanoi',
      titleAr: 'برج هانوي',
      minutes: 30,
      body: [
        { type: 'h', en: 'The puzzle' },
        { type: 'p', en: 'The Tower of Hanoi is a famous puzzle. With loops it is very hard to solve, but with recursion the whole solution is <b>three lines</b>. It is the best example of the "trust the smaller call" idea from Lesson 1: you never plan all the moves yourself; you only plan the biggest disk.', ar: 'برج هانوي لغز صعب بالحلقات، لكن حله العودي ثلاثة أسطر فقط.' },
        { type: 'list', items: [
          'There are three rods: <b>A</b>, <b>B</b> and <b>C</b>.',
          'n disks of different sizes sit on rod A, the biggest at the bottom. Disk 1 is the smallest, disk n the biggest.',
          '<b>Rule 1</b>: move one disk at a time: the top disk of a rod.',
          '<b>Rule 2</b>: never put a bigger disk on a smaller disk.',
          '<b>Goal</b>: move all the disks to rod C. Rod B is the helper.'
        ], ar: 'ننقل قرصاً واحداً كل مرة، ولا نضع قرصاً كبيراً فوق قرص صغير.' },
        { type: 'analogy', title: 'Plates between three tables', en: 'In a restaurant kitchen you must move a pile of plates of different sizes, the biggest at the bottom, from one table to another. You may carry only one plate at a time, you may never put a big plate on a small one, and there is a third table that you may use as a helper. How do you do it with the fewest trips?', ar: 'مثل نقل أطباق مختلفة الأحجام بين ثلاث طاولات.' },
        { type: 'h', en: 'Small cases first' },
        { type: 'table', head: ['Disks', 'Moves', 'How many'], rows: [
          ['1', 'disk 1 A → C', '1'],
          ['2', 'disk 1 A → B, disk 2 A → C, disk 1 B → C', '3']
        ] },
        { type: 'p', en: 'Look at 2 disks again. First move the small disk <b>out of the way</b> (to B). Then move the big disk to C. Then put the small disk back on top of it. That is already the whole idea!' },
        { type: 'h', en: 'The recursive idea' },
        { type: 'p', en: 'To move n disks from A to C: the biggest disk, disk n, must at some moment go from A to C. At that moment all the n - 1 smaller disks must be out of the way, sitting on B. So: <b>(1)</b> move n - 1 disks from A to B (C is the helper); <b>(2)</b> move disk n from A to C; <b>(3)</b> move the n - 1 disks from B to C (A is the helper). Steps 1 and 3 are the same puzzle with one disk fewer: recursion! The base case is 0 disks: there is nothing to do.', ar: 'ننقل n - 1 قرصاً إلى المساعد، ثم أكبر قرص إلى الهدف، ثم الأقراص الصغيرة فوقه.' },
        { type: 'analogy', title: 'A manager with an assistant', en: 'A manager must move a tower of 3 disks. She only knows how to carry the biggest disk. So she says to her assistant: "Please move the top 2 disks to B." Then she carries disk 3 to C herself. Then: "Now please move those 2 disks onto C." The assistant does the same with his own assistant for 1 disk. Nobody plans all 7 moves, yet together they solve it.', ar: 'كل شخص ينقل القرص الأكبر فقط ويطلب من مساعده نقل الأقراص الأصغر.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void hanoi(int n, char from, char to, char via) {
                  if (n == 0) {
                      return;
                  }
                  hanoi(n - 1, from, via, to);
                  System.out.println("Move disk " + n + " from " + from + " to " + to);
                  hanoi(n - 1, via, to, from);
              }

              public static void main(String[] args) {
                  hanoi(3, 'A', 'C', 'B');
              }
          }
        `, out: J`
          Move disk 1 from A to C
          Move disk 2 from A to B
          Move disk 1 from C to B
          Move disk 3 from A to C
          Move disk 1 from B to A
          Move disk 2 from B to C
          Move disk 1 from A to C
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['hanoi(int n, char from, char to, char via)', 'n disks go from rod <code>from</code> to rod <code>to</code>, using rod <code>via</code> as the helper.'],
          ['if (n == 0) { return; }', 'BASE CASE: no disks, no moves.'],
          ['hanoi(n - 1, from, via, to);', 'Step 1: the smaller disks go to the HELPER rod. Notice that via and to swap places.'],
          ['System.out.println(...)', 'Step 2: move the biggest disk, n, straight to the target.'],
          ['hanoi(n - 1, via, to, from);', 'Step 3: the smaller disks go from the helper to the target, on top of disk n.']
        ], ar: 'في الاستدعاء الأول يتبادل to وvia مكانيهما.' },
        { type: 'check', q: 'In <code>hanoi(n, from, to, via)</code>, to which rod do the n - 1 smaller disks go in the FIRST recursive call?', options: ['to', 'via', 'from', 'They do not move'], answer: 1, explain: 'They must get out of the way of the biggest disk, so they go to the helper rod, via. The call is hanoi(n - 1, from, via, to).' },
        { type: 'h', en: 'Tracing 3 disks in full' },
        { type: 'p', en: 'The table shows every move of <code>hanoi(3, \'A\', \'C\', \'B\')</code>, the call that makes it, and the rods after the move. Disks are written from the bottom to the top, so "3 2" means disk 3 at the bottom with disk 2 on it. Check Rule 2 in every row: a bigger number never sits on a smaller one.' },
        { type: 'table', head: ['#', 'Move', 'Made by the call', 'Rod A', 'Rod B', 'Rod C'], rows: [
          ['start', '-', '-', '3 2 1', '-', '-'],
          ['1', 'disk 1 A → C', 'hanoi(1, A, C, B)', '3 2', '-', '1'],
          ['2', 'disk 2 A → B', 'hanoi(2, A, B, C)', '3', '2', '1'],
          ['3', 'disk 1 C → B', 'hanoi(1, C, B, A)', '3', '2 1', '-'],
          ['4', 'disk 3 A → C', 'hanoi(3, A, C, B)', '-', '2 1', '3'],
          ['5', 'disk 1 B → A', 'hanoi(1, B, A, C)', '1', '2', '3'],
          ['6', 'disk 2 B → C', 'hanoi(2, B, C, A)', '1', '-', '3 2'],
          ['7', 'disk 1 A → C', 'hanoi(1, A, C, B)', '-', '-', '3 2 1']
        ] },
        { type: 'p', en: 'Moves 1 to 3 are step 1 (two disks from A to B). Move 4 is step 2 (the biggest disk). Moves 5 to 7 are step 3 (two disks from B to C). The calls with n = 0 do nothing, so they are not in the table. The memory picture shows the stack for the smaller call <code>hanoi(2, \'A\', \'C\', \'B\')</code>.' },
        { type: 'memory', title: 'hanoi(2, A, C, B) on the call stack', en: 'The calls with n = 0 return at once, so they are not drawn.', frames: [
          { label: 'Call 1: 2 disks from A to C, helper B. Step 1: it calls hanoi(1, A, B, C) and waits.', vars: [{ name: 'n, from, to, via (call 1)', value: '2, A, C, B' }] },
          { label: 'Call 2: 1 disk from A to B. Its own calls with n = 0 do nothing, so it prints "Move disk 1 from A to B".', vars: [{ name: 'n, from, to, via (call 1)', value: '2, A, C, B' }, { name: 'n, from, to, via (call 2)', value: '1, A, B, C' }] },
          { label: 'Call 2 is removed. Call 1 does step 2 and prints "Move disk 2 from A to C".', vars: [{ name: 'n, from, to, via (call 1)', value: '2, A, C, B' }] },
          { label: 'Step 3: call 3 moves 1 disk from B to C and prints "Move disk 1 from B to C".', vars: [{ name: 'n, from, to, via (call 1)', value: '2, A, C, B' }, { name: 'n, from, to, via (call 3)', value: '1, B, C, A' }] },
          { label: 'Call 3 is removed, and call 1 is finished: 3 moves in total.', vars: [{ name: 'n, from, to, via (call 1)', value: '2, A, C, B' }] }
        ], ar: 'كل استدعاء يحمل أسماء الأعمدة الخاصة به.' },
        { type: 'check', q: 'When 3 disks are moved from A to C, what is the 4th move (the middle one)?', options: ['disk 1 from A to C', 'disk 3 from A to C', 'disk 2 from B to C', 'disk 1 from B to A'], answer: 1, explain: 'The middle move is always step 2 of the first call: the biggest disk goes straight from A to C.' },
        { type: 'h', en: 'How many moves? 2<sup>n</sup> − 1' },
        { type: 'p', en: 'Count the moves of the recursive idea: step 1 and step 3 each need the moves for n - 1 disks, and step 2 is one move. So <code>moves(n) = 2 × moves(n - 1) + 1</code>, and <code>moves(0) = 0</code>. This gives 1, 3, 7, 15, 31 ... Every answer is one less than a power of 2: <code>moves(n) = 2<sup>n</sup> − 1</code>. Nobody can do it in fewer moves.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static long countMoves(int n) {
                  if (n == 0) {
                      return 0;
                  }
                  return 2 * countMoves(n - 1) + 1;
              }

              public static void main(String[] args) {
                  int[] sizes = {1, 2, 3, 4, 10, 20};
                  for (int n : sizes) {
                      System.out.println("Disks: " + n + ", moves: " + countMoves(n));
                  }
              }
          }
        `, out: J`
          Disks: 1, moves: 1
          Disks: 2, moves: 3
          Disks: 3, moves: 7
          Disks: 4, moves: 15
          Disks: 10, moves: 1023
          Disks: 20, moves: 1048575
        ` },
        { type: 'lines', rows: [
          ['if (n == 0) { return 0; }', 'BASE CASE: no disks need no moves.'],
          ['2 * countMoves(n - 1) + 1', 'Two times the moves for the smaller tower (steps 1 and 3), plus one move for the biggest disk.']
        ], ar: 'عدد النقلات = 2 × نقلات البرج الأصغر + 1، أي 2 أس n ناقص 1.' },
        { type: 'note', kind: 'tip', en: 'An old story says that monks must move 64 golden disks. That needs 2<sup>64</sup> − 1 = 18,446,744,073,709,551,615 moves. At one move per second, it would take about 585 billion years! Adding one disk doubles the work.', ar: 'إضافة قرص واحد تضاعف عدد النقلات.' },
        { type: 'check', q: 'What is the smallest number of moves for 5 disks?', options: ['10', '25', '31', '32'], answer: 2, explain: '2 to the power 5 is 32, and 32 - 1 = 31. Check: 2 × 15 + 1 = 31.' },
        { type: 'steps', title: 'Worked example: number every move', problem: 'Read the number of disks n. Print every move with its number, and at the end print the total number of moves.', steps: [
          { en: 'Use a <code>static</code> counter (as in Lesson 6), so that all calls share one count.', code: 'static int moves = 0;' },
          { en: 'Keep the three lines of hanoi. Just before printing a move, add 1 to the counter and print it in front of the move.', code: J`
            hanoi(n - 1, from, via, to);
            moves++;
            System.out.println(moves + ". Move disk " + n + " from " + from + " to " + to);
            hanoi(n - 1, via, to, from);
          ` },
          { en: 'In main, solve the puzzle from A to C with B as the helper, then print the total. For 3 disks it must be 7, which is 2<sup>3</sup> − 1.', code: J`
            hanoi(n, 'A', 'C', 'B');
            System.out.println("Total moves: " + moves);
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              static int moves = 0;

              public static void hanoi(int n, char from, char to, char via) {
                  if (n == 0) {
                      return;
                  }
                  hanoi(n - 1, from, via, to);
                  moves++;
                  System.out.println(moves + ". Move disk " + n + " from " + from + " to " + to);
                  hanoi(n - 1, via, to, from);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  int n = in.nextInt();
                  hanoi(n, 'A', 'C', 'B');
                  System.out.println("Total moves: " + moves);
              }
          }
        `, stdin: '3', out: J`
          1. Move disk 1 from A to C
          2. Move disk 2 from A to B
          3. Move disk 1 from C to B
          4. Move disk 3 from A to C
          5. Move disk 1 from B to A
          6. Move disk 2 from B to C
          7. Move disk 1 from A to C
          Total moves: 7
        `, ar: 'عداد مشترك يرقّم النقلات ويحسب مجموعها.' }
      ],
      mistakes: [
        { title: 'Mixing up the target and the helper', en: 'In step 1 the smaller disks must go to the helper. If they go to the target, the biggest disk cannot be put there afterwards.', code: 'hanoi(n - 1, from, to, via);   // step 1: should be from, via, to' },
        { title: 'Moving the biggest disk too early', en: 'If the print comes before the first recursive call, disk n is "moved" while the smaller disks are still on top of it, which breaks Rule 1.', code: J`
          System.out.println("Move disk " + n + ...);   // too early
          hanoi(n - 1, from, via, to);
        ` },
        { title: 'No base case', en: 'Without <code>if (n == 0) return;</code>, n goes 0, -1, -2 ... and the program ends with StackOverflowError.', code: 'hanoi(n - 1, from, via, to);   // with no check of n first' },
        { title: 'Thinking n disks need n moves', en: 'The number of moves doubles with every disk: 3 disks need 7 moves, 10 disks need 1023 moves.', code: '// moves(n) = 2 * moves(n - 1) + 1, not n' }
      ],
      remember: [
        'To move n disks: n - 1 disks to the helper, disk n to the target, n - 1 disks onto it.',
        'Code: <code>hanoi(n - 1, from, via, to); print; hanoi(n - 1, via, to, from);</code>',
        'Base case: 0 disks, nothing to do.',
        'The middle move always moves the biggest disk.',
        'Moves: <code>2 × moves(n - 1) + 1 = 2<sup>n</sup> − 1</code> (3 disks: 7 moves).'
      ],
      rememberAr: 'لنقل n قرص: ننقل n - 1 إلى المساعد، ثم القرص الأكبر إلى الهدف، ثم n - 1 فوقه. عدد النقلات 2 أس n ناقص 1.',
      practice: [
        { t: 'mcq', q: 'What is the smallest number of moves for 4 disks?', options: ['4', '8', '15', '16'], answer: 2, explain: '2 to the power 4 is 16, and 16 - 1 = 15. Or: 2 × 7 + 1 = 15.', explainAr: '2 أس 4 ناقص 1 = 15.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void hanoi(int n, char from, char to, char via) {
                  if (n == 0) {
                      return;
                  }
                  hanoi(n - 1, from, via, to);
                  System.out.println("Move disk " + n + " from " + from + " to " + to);
                  hanoi(n - 1, via, to, from);
              }

              public static void main(String[] args) {
                  hanoi(2, 'A', 'C', 'B');
              }
          }
        `, answer: J`
          Move disk 1 from A to B
          Move disk 2 from A to C
          Move disk 1 from B to C
        `, explain: 'Step 1: hanoi(1, A, B, C) moves disk 1 from A to B. Step 2: disk 2 from A to C. Step 3: hanoi(1, B, C, A) moves disk 1 from B to C.' },
        { t: 'mcq', q: 'Three disks start on A and must go to C (helper B). What is the FIRST move?', options: ['disk 1 from A to B', 'disk 1 from A to C', 'disk 3 from A to C', 'disk 2 from A to B'], answer: 1, explain: 'Step 1 moves 2 disks from A to B, and that starts by moving disk 1 out of the way to C. (With an even number of disks, the first move goes to B instead.)' },
        { t: 'fill', q: 'Complete the two recursive calls of <code>hanoi</code>.', code: J`
          public static void hanoi(int n, char from, char to, char via) {
              if (n == 0) {
                  return;
              }
              hanoi(n - 1, from, ___, ___);
              System.out.println("Move disk " + n + " from " + from + " to " + to);
              hanoi(n - 1, ___, to, ___);
          }
        `, answers: ['via', 'to', 'via', 'from'], explain: 'First the smaller disks go from "from" to the helper "via" (using "to"). At the end they go from "via" to "to" (using "from").' },
        { t: 'order', q: 'Put the lines of <code>hanoi</code> in order.', lines: [
          'public static void hanoi(int n, char from, char to, char via) {',
          '    if (n == 0) {',
          '        return;',
          '    }',
          '    hanoi(n - 1, from, via, to);',
          '    System.out.println("Move disk " + n + " from " + from + " to " + to);',
          '    hanoi(n - 1, via, to, from);',
          '}'
        ], explain: 'Base case, then the smaller disks out of the way, then the biggest disk, then the smaller disks on top of it.' },
        { t: 'bug', q: 'For 2 disks this program prints "Move disk 1 from A to C" as its last move, but disk 1 is on rod B at that moment. Tap the line with the bug.', qAr: 'النقلة الأخيرة تحرك قرصاً ليس على العمود A. أين الخطأ؟', code: J`
          public class Main {
              public static void hanoi(int n, char from, char to, char via) {
                  if (n == 0) {
                      return;
                  }
                  hanoi(n - 1, from, via, to);
                  System.out.println("Move disk " + n + " from " + from + " to " + to);
                  hanoi(n - 1, from, to, via);
              }

              public static void main(String[] args) {
                  hanoi(2, 'A', 'C', 'B');
              }
          }
        `, bug: 8, fix: J`
          public class Main {
              public static void hanoi(int n, char from, char to, char via) {
                  if (n == 0) {
                      return;
                  }
                  hanoi(n - 1, from, via, to);
                  System.out.println("Move disk " + n + " from " + from + " to " + to);
                  hanoi(n - 1, via, to, from);
              }

              public static void main(String[] args) {
                  hanoi(2, 'A', 'C', 'B');
              }
          }
        `, hint: 'After line 6, where are the smaller disks?', explain: 'Line 6 puts the smaller disks on the helper rod (via). So the last step must move them FROM via to the target, using "from" as the helper: hanoi(n - 1, via, to, from). Line 8 tries to take them from "from", which is now empty.', explainAr: 'الأقراص الصغيرة على العمود المساعد، لذلك نبدأ منه: hanoi(n - 1, via, to, from).' },
        { t: 'code', q: 'Read the number of disks n (1 to 5). Print all the moves to bring them from rod A to rod C with helper B, one per line, in the form <code>Move disk 1 from A to C</code>. No prompts.', qAr: 'اطبع كل نقلات برج هانوي من A إلى C.', starter: J`
          import java.util.*;

          public class Main {
              public static void hanoi(int n, char from, char to, char via) {
                  // base case, then the three steps
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  hanoi(in.nextInt(), 'A', 'C', 'B');
              }
          }
        `, tests: [{ stdin: '1', expected: 'Move disk 1 from A to C' }, { stdin: '2', expected: J`
          Move disk 1 from A to B
          Move disk 2 from A to C
          Move disk 1 from B to C
        ` }, { stdin: '3', expected: J`
          Move disk 1 from A to C
          Move disk 2 from A to B
          Move disk 1 from C to B
          Move disk 3 from A to C
          Move disk 1 from B to A
          Move disk 2 from B to C
          Move disk 1 from A to C
        ` }], solution: J`
          import java.util.*;

          public class Main {
              public static void hanoi(int n, char from, char to, char via) {
                  if (n == 0) {
                      return;
                  }
                  hanoi(n - 1, from, via, to);
                  System.out.println("Move disk " + n + " from " + from + " to " + to);
                  hanoi(n - 1, via, to, from);
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  hanoi(in.nextInt(), 'A', 'C', 'B');
              }
          }
        `, hint: 'hanoi(n - 1, from, via, to); print the move of disk n; hanoi(n - 1, via, to, from);', explain: 'The smaller tower moves out of the way, the biggest disk moves, and the smaller tower moves back on top of it.' },
        { t: 'code', q: 'Read n (0 to 30). Print the smallest number of moves for n disks using a recursive method <code>countMoves(int n)</code> (do not use Math.pow). No prompts.', qAr: 'اطبع أقل عدد نقلات لـ n قرص بدالة عودية.', starter: J`
          import java.util.*;

          public class Main {
              public static long countMoves(int n) {
                  // base case: 0 disks
                  return 0;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(countMoves(in.nextInt()));
              }
          }
        `, tests: [{ stdin: '3', expected: '7' }, { stdin: '10', expected: '1023' }, { stdin: '0', expected: '0' }], solution: J`
          import java.util.*;

          public class Main {
              public static long countMoves(int n) {
                  if (n == 0) {
                      return 0;
                  }
                  return 2 * countMoves(n - 1) + 1;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  System.out.println(countMoves(in.nextInt()));
              }
          }
        `, hint: 'if (n == 0) return 0; return 2 * countMoves(n - 1) + 1;', explain: 'The smaller tower is moved twice, plus one move for the biggest disk.' }
      ]
    },
    // ---------------------------------------------------------------- L15
    {
      title: 'Strings and lists: counting, cleaning and permutations',
      titleAr: 'النصوص والقوائم: العدّ والتنظيف والتباديل',
      minutes: 30,
      body: [
        { type: 'h', en: 'Counting a character' },
        { type: 'p', en: 'Text work is everywhere: counting a letter in a name, cleaning a phone number typed with spaces, or listing every order of a few items. In Lesson 7 you reversed Strings with the idea "first character + the rest". Here you use the same idea to <b>count</b>, to <b>clean</b>, and finally to build <b>all</b> the arrangements of a short word, stored in an <code>ArrayList</code>.', ar: 'نستخدم فكرة "الحرف الأول + الباقي" للعدّ والتنظيف وتوليد كل الترتيبات.' },
        { type: 'analogy', title: 'Beads on a string', en: 'You count the red beads on a necklace by sliding them through your fingers one at a time. For each red bead you add 1. When no beads are left, you stop. The first character is the bead in your fingers; the rest of the String is the beads still to come.', ar: 'نفحص خرزة واحدة ثم نكمل بالباقي حتى تنتهي الخرزات.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static int countChar(String s, char c) {
                  if (s.length() == 0) {
                      return 0;
                  }
                  int add = 0;
                  if (s.charAt(0) == c) {
                      add = 1;
                  }
                  return add + countChar(s.substring(1), c);
              }

              public static void main(String[] args) {
                  System.out.println(countChar("Al-Ahsa oasis", 's'));
                  System.out.println(countChar("Jeddah", 'd'));
              }
          }
        `, out: J`
          3
          2
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['countChar(String s, char c)', 'c is a <code>char</code>: one character, written in single quotes, like \'s\'.'],
          ['if (s.length() == 0) { return 0; }', 'BASE CASE: the empty String contains no characters at all.'],
          ['if (s.charAt(0) == c)', 'Two chars can be compared with ==. This first character counts as 1 if it matches.'],
          ['add + countChar(s.substring(1), c)', 'Add the count for the rest of the String. c stays the same.']
        ], ar: 'نقارن الحروف (char) بـ == ونكتبها بين علامتي اقتباس مفردتين.' },
        { type: 'memory', title: 'countChar("dad", \'d\')', frames: [
          { label: 'Call 1: s = "dad". The first letter d matches, so it needs 1 + ?', vars: [{ name: 's (call 1)', type: 'String', value: '"dad"' }, { name: 'answer (call 1)', value: '1 + ?' }] },
          { label: 'Call 2: s = "ad". a does not match: 0 + ?', vars: [{ name: 's (call 1)', type: 'String', value: '"dad"' }, { name: 'answer (call 1)', value: '1 + ?' }, { name: 's (call 2)', type: 'String', value: '"ad"' }, { name: 'answer (call 2)', value: '0 + ?' }] },
          { label: 'Call 3: s = "d". It matches: 1 + ?', vars: [{ name: 's (call 1)', type: 'String', value: '"dad"' }, { name: 'answer (call 1)', value: '1 + ?' }, { name: 's (call 2)', type: 'String', value: '"ad"' }, { name: 'answer (call 2)', value: '0 + ?' }, { name: 's (call 3)', type: 'String', value: '"d"' }, { name: 'answer (call 3)', value: '1 + ?' }] },
          { label: 'Call 4: s = "", the base case. It returns <b>0</b>.', vars: [{ name: 's (call 1)', type: 'String', value: '"dad"' }, { name: 'answer (call 1)', value: '1 + ?' }, { name: 's (call 2)', type: 'String', value: '"ad"' }, { name: 'answer (call 2)', value: '0 + ?' }, { name: 's (call 3)', type: 'String', value: '"d"' }, { name: 'answer (call 3)', value: '1 + ?' }, { name: 's (call 4)', type: 'String', value: '""' }, { name: 'answer (call 4)', value: 'returns 0' }] },
          { label: 'Call 4 is removed. Call 3: 1 + 0 = <b>1</b>.', vars: [{ name: 's (call 1)', type: 'String', value: '"dad"' }, { name: 'answer (call 1)', value: '1 + ?' }, { name: 's (call 2)', type: 'String', value: '"ad"' }, { name: 'answer (call 2)', value: '0 + ?' }, { name: 's (call 3)', type: 'String', value: '"d"' }, { name: 'answer (call 3)', value: '1 + 0 = 1' }] },
          { label: 'Call 3 is removed. Call 2: 0 + 1 = <b>1</b>.', vars: [{ name: 's (call 1)', type: 'String', value: '"dad"' }, { name: 'answer (call 1)', value: '1 + ?' }, { name: 's (call 2)', type: 'String', value: '"ad"' }, { name: 'answer (call 2)', value: '0 + 1 = 1' }] },
          { label: 'Call 2 is removed. Call 1: 1 + 1 = <b>2</b>. There are two d\'s.', vars: [{ name: 's (call 1)', type: 'String', value: '"dad"' }, { name: 'answer (call 1)', value: '1 + 1 = 2' }] }
        ], ar: 'كل استدعاء يضيف 1 أو 0 عند الصعود.' },
        { type: 'check', q: 'What does <code>countChar("banana", \'a\')</code> return?', options: ['2', '3', '6', '0'], answer: 1, explain: 'b-a-n-a-n-a: three of the six letters are a.' },
        { type: 'h', en: 'Removing spaces' },
        { type: 'p', en: 'People often type a phone number with spaces, like "050 123 4567", but the system wants "0501234567". The recursive idea: clean the rest first; then, if the first character is a space, drop it, otherwise put it in front of the cleaned rest. The method <b>returns a new String</b>. The original String does not change, because Strings never change in Java.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static String removeSpaces(String s) {
                  if (s.length() == 0) {
                      return "";
                  }
                  String rest = removeSpaces(s.substring(1));
                  if (s.charAt(0) == ' ') {
                      return rest;
                  }
                  return s.charAt(0) + rest;
              }

              public static void main(String[] args) {
                  System.out.println(removeSpaces("050 123 4567"));
                  System.out.println(removeSpaces("King Fahd Road"));
              }
          }
        `, out: J`
          0501234567
          KingFahdRoad
        ` },
        { type: 'lines', rows: [
          ['String rest = removeSpaces(s.substring(1));', 'First get the rest of the text without spaces (trust the smaller call).'],
          ['if (s.charAt(0) == \' \') { return rest; }', 'The first character is a space: leave it out.'],
          ['return s.charAt(0) + rest;', 'Otherwise keep it in front. A char plus a String gives a String.']
        ], ar: 'إذا كان الحرف الأول مسافة نحذفه، وإلا نضعه أمام الباقي النظيف.' },
        { type: 'table', head: ['Call', 'First character', 'Returns (on the way up)'], rows: [
          ['removeSpaces("a b")', '\'a\': keep', '\'a\' + "b" = <b>"ab"</b>'],
          ['removeSpaces(" b")', 'space: drop', '"b"'],
          ['removeSpaces("b")', '\'b\': keep', '\'b\' + "" = "b"'],
          ['removeSpaces("")', '-', '"" (base case)']
        ] },
        { type: 'check', q: 'What does <code>removeSpaces(" hi ")</code> return?', options: ['" hi "', '"hi"', '"h i"', '""'], answer: 1, explain: 'Both spaces are dropped and the letters h and i are kept in their order.' },
        { type: 'h', en: 'All the orders of a word: permutations' },
        { type: 'p', en: 'A <b>permutation</b> is one way to put items in order. The word "CAT" has 6 permutations: CAT, CTA, ACT, ATC, TCA, TAC. In Lesson 3 you learned that 3 items can be ordered in 3! = 6 ways. Now we will <b>list</b> them all. Real uses: all the orders to visit 3 shops, all the ways to seat 3 guests, or word games.', ar: 'التبديل هو طريقة لترتيب العناصر. للكلمة CAT ستة تباديل.' },
        { type: 'analogy', title: 'Who stands first in the photo?', en: 'Three friends, Ali, Badr and Fahd, line up for a photo. First choose who stands first: there are 3 choices. For each choice, the other two friends must be arranged behind: that is the same problem with one friend fewer. When nobody is left to place, one complete order is ready.', ar: 'نختار من يقف أولاً، ثم نرتب الباقين بالطريقة نفسها.' },
        { type: 'p', en: 'The method has two parameters. <code>prefix</code> holds the letters already placed (the start of the arrangement), and <code>rest</code> holds the letters not used yet. Base case: <code>rest</code> is empty, so <code>prefix</code> is complete: print it. Recursive case: try <b>every</b> letter of rest as the next letter. Here a loop around the recursive call is correct (Lesson 10 said: only when you know why). We need one call for each possible next letter.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void permute(String prefix, String rest) {
                  if (rest.length() == 0) {
                      System.out.println(prefix);
                      return;
                  }
                  for (int i = 0; i < rest.length(); i++) {
                      char next = rest.charAt(i);
                      String others = rest.substring(0, i) + rest.substring(i + 1);
                      permute(prefix + next, others);
                  }
              }

              public static void main(String[] args) {
                  permute("", "CAT");
              }
          }
        `, out: J`
          CAT
          CTA
          ACT
          ATC
          TCA
          TAC
        ` },
        { type: 'lines', rows: [
          ['if (rest.length() == 0)', 'BASE CASE: no letters left, so prefix is a complete arrangement.'],
          ['for (int i = 0; i < rest.length(); i++)', 'Try each remaining letter as the next one: one recursive call per choice.'],
          ['rest.substring(0, i) + rest.substring(i + 1)', 'The remaining letters WITHOUT the one at index i. For "CAT" and i = 1 this is "C" + "T" = "CT".'],
          ['permute(prefix + next, others);', 'One more letter placed, one letter fewer left: a smaller problem.']
        ], ar: 'نجرب كل حرف متبقٍ كحرف تالٍ، ونحذفه من الباقي.' },
        { type: 'table', head: ['Call (prefix, rest)', 'Letters it tries', 'Prints'], rows: [
          ['("", "CAT")', 'C, then A, then T', '-'],
          ['("C", "AT")', 'A, then T', '-'],
          ['("CA", "T") then ("CAT", "")', 'T', 'CAT'],
          ['("CT", "A") then ("CTA", "")', 'A', 'CTA'],
          ['("A", "CT")', 'C, then T', 'ACT, ATC'],
          ['("T", "CA")', 'C, then A', 'TCA, TAC']
        ] },
        { type: 'memory', title: 'The first branch of permute("", "CAT")', frames: [
          { label: 'Call 1: nothing placed yet. The loop starts with i = 0 and tries C.', vars: [{ name: 'prefix, rest (call 1)', value: '"", "CAT"' }, { name: 'i (call 1)', type: 'int', value: '0' }] },
          { label: 'Call 2: C is placed; A and T are left. It tries A (i = 0).', vars: [{ name: 'prefix, rest (call 1)', value: '"", "CAT"' }, { name: 'i (call 1)', type: 'int', value: '0' }, { name: 'prefix, rest (call 2)', value: '"C", "AT"' }, { name: 'i (call 2)', type: 'int', value: '0' }] },
          { label: 'Call 3: CA is placed; only T is left. It tries T.', vars: [{ name: 'prefix, rest (call 1)', value: '"", "CAT"' }, { name: 'i (call 1)', type: 'int', value: '0' }, { name: 'prefix, rest (call 2)', value: '"C", "AT"' }, { name: 'i (call 2)', type: 'int', value: '0' }, { name: 'prefix, rest (call 3)', value: '"CA", "T"' }, { name: 'i (call 3)', type: 'int', value: '0' }] },
          { label: 'Call 4: rest is empty. Base case: it prints <b>CAT</b>.', vars: [{ name: 'prefix, rest (call 1)', value: '"", "CAT"' }, { name: 'i (call 1)', type: 'int', value: '0' }, { name: 'prefix, rest (call 2)', value: '"C", "AT"' }, { name: 'i (call 2)', type: 'int', value: '0' }, { name: 'prefix, rest (call 3)', value: '"CA", "T"' }, { name: 'i (call 3)', type: 'int', value: '0' }, { name: 'prefix, rest (call 4)', value: '"CAT", ""' }] },
          { label: 'Calls 4 and 3 finish and are removed. Call 2 continues its loop: i = 1, so it tries T.', vars: [{ name: 'prefix, rest (call 1)', value: '"", "CAT"' }, { name: 'i (call 1)', type: 'int', value: '0' }, { name: 'prefix, rest (call 2)', value: '"C", "AT"' }, { name: 'i (call 2)', type: 'int', value: '1' }] },
          { label: 'A new call 3: CT is placed; only A is left.', vars: [{ name: 'prefix, rest (call 1)', value: '"", "CAT"' }, { name: 'i (call 1)', type: 'int', value: '0' }, { name: 'prefix, rest (call 2)', value: '"C", "AT"' }, { name: 'i (call 2)', type: 'int', value: '1' }, { name: 'prefix, rest (call 3)', value: '"CT", "A"' }, { name: 'i (call 3)', type: 'int', value: '0' }] },
          { label: 'A new call 4 prints <b>CTA</b>. Later call 1 moves on to i = 1 (A first) and i = 2 (T first) in the same way.', vars: [{ name: 'prefix, rest (call 1)', value: '"", "CAT"' }, { name: 'i (call 1)', type: 'int', value: '0' }, { name: 'prefix, rest (call 2)', value: '"C", "AT"' }, { name: 'i (call 2)', type: 'int', value: '1' }, { name: 'prefix, rest (call 3)', value: '"CT", "A"' }, { name: 'i (call 3)', type: 'int', value: '0' }, { name: 'prefix, rest (call 4)', value: '"CTA", ""' }] }
        ], ar: 'كل إطار يتذكر أين وصلت حلقته (i)، ويكملها عند الرجوع إليه.' },
        { type: 'check', q: 'Which call prints <code>ATC</code>?', options: ['permute("ATC", "")', 'permute("A", "TC")', 'permute("", "ATC")', 'permute("AT", "")'], answer: 0, explain: 'Only a call with an empty rest prints, and it prints its prefix. So ATC is printed by permute("ATC", "").' },
        { type: 'note', kind: 'warn', en: 'The number of permutations grows very fast: n different letters give n! arrangements. A 10-letter word has 3,628,800 of them. Keep your words short (4 letters or fewer) when you try this.', ar: 'عدد التباديل n! يكبر بسرعة كبيرة، فاستخدم{{g:|ي}} كلمات قصيرة.' },
        { type: 'steps', title: 'Worked example: save the arrangements in an ArrayList', problem: 'Read a short word with different letters. Store all its permutations in an <code>ArrayList&lt;String&gt;</code>, then print how many there are and the whole list.', steps: [
          { en: 'Add a third parameter: the list. It is created once in main and passed to every call, so all calls add to the <b>same</b> list (like the shared array in Lesson 8).', code: 'public static void permute(String prefix, String rest, ArrayList<String> results)' },
          { en: 'Base case: instead of printing, add the complete arrangement to the list.', code: J`
            if (rest.length() == 0) {
                results.add(prefix);
                return;
            }
          ` },
          { en: 'Recursive case: the same loop as before; pass the list on.', code: J`
            for (int i = 0; i < rest.length(); i++) {
                String others = rest.substring(0, i) + rest.substring(i + 1);
                permute(prefix + rest.charAt(i), others, results);
            }
          ` },
          { en: 'In main, make the empty list, start with an empty prefix, and print the size (3! = 6 for a 3-letter word) and the list. Printing an ArrayList shows its elements in square brackets.', code: J`
            ArrayList<String> results = new ArrayList<String>();
            permute("", word, results);
            System.out.println(results.size() + " arrangements:");
            System.out.println(results);
          ` }
        ], code: J`
          import java.util.*;

          public class Main {
              public static void permute(String prefix, String rest, ArrayList<String> results) {
                  if (rest.length() == 0) {
                      results.add(prefix);
                      return;
                  }
                  for (int i = 0; i < rest.length(); i++) {
                      String others = rest.substring(0, i) + rest.substring(i + 1);
                      permute(prefix + rest.charAt(i), others, results);
                  }
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String word = in.next();
                  ArrayList<String> results = new ArrayList<String>();
                  permute("", word, results);
                  System.out.println(results.size() + " arrangements:");
                  System.out.println(results);
              }
          }
        `, stdin: 'SUN', out: J`
          6 arrangements:
          [SUN, SNU, USN, UNS, NSU, NUS]
        `, ar: 'كل الاستدعاءات تضيف إلى القائمة نفسها.' }
      ],
      mistakes: [
        { title: 'Comparing a char with a String', en: '<code>charAt</code> gives a <code>char</code>. "a" in double quotes is a String, and Java cannot compare them with ==: the code does not compile. Use single quotes.', code: 'if (s.charAt(0) == "a")   // error: use \'a\'' },
        { title: 'No base case for the empty String', en: 'Every call makes the String shorter, so it finally becomes "". Then <code>charAt(0)</code> throws StringIndexOutOfBoundsException unless you stop first.', code: 'if (s.length() == 1) return ...;   // "" is never handled' },
        { title: 'Removing the wrong letters in permutations', en: '<code>rest.substring(i + 1)</code> alone also throws away every letter BEFORE index i, so some arrangements are missing.', code: 'permute(prefix + next, rest.substring(i + 1));   // loses letters' },
        { title: 'Forgetting to keep the character', en: 'If removeSpaces always returns only the cleaned rest, every character is dropped and the answer is "".', code: 'return rest;   // also for letters: should be s.charAt(0) + rest' }
      ],
      remember: [
        'Strings: handle <code>s.charAt(0)</code>, then call the method on <code>s.substring(1)</code>; the base case is <code>""</code>.',
        'Compare characters with == and single quotes: <code>s.charAt(0) == \'a\'</code>.',
        'A recursive method can build and return a new String (removeSpaces).',
        'Permutations: <code>prefix</code> = letters placed, <code>rest</code> = letters left; print when rest is empty.',
        'n different letters have n! permutations. One shared ArrayList can collect them.'
      ],
      rememberAr: 'نعالج الحرف الأول ثم نستدعي الدالة على الباقي، والحالة الأساسية النص الفارغ. في التباديل: prefix للحروف المرتبة وrest للباقية، وعددها n!.',
      practice: [
        { t: 'mcq', q: 'How many permutations does the word "ABCD" have?', options: ['4', '12', '16', '24'], answer: 3, explain: '4 different letters can be ordered in 4! = 4 × 3 × 2 × 1 = 24 ways.', explainAr: '4! = 24.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static int countChar(String s, char c) {
                  if (s.length() == 0) {
                      return 0;
                  }
                  int add = 0;
                  if (s.charAt(0) == c) {
                      add = 1;
                  }
                  return add + countChar(s.substring(1), c);
              }

              public static void main(String[] args) {
                  System.out.println(countChar("Madinah", 'a'));
                  System.out.println(countChar("Abha", 'a'));
              }
          }
        `, answer: J`
          2
          1
        `, explain: 'Madinah has two small a\'s. In Abha the first letter is a capital A, which is a different character from a, so only the last letter counts: 1.' },
        { t: 'output', q: 'What does this program print?', code: J`
          public class Main {
              public static void permute(String prefix, String rest) {
                  if (rest.length() == 0) {
                      System.out.println(prefix);
                      return;
                  }
                  for (int i = 0; i < rest.length(); i++) {
                      String others = rest.substring(0, i) + rest.substring(i + 1);
                      permute(prefix + rest.charAt(i), others);
                  }
              }

              public static void main(String[] args) {
                  permute("", "AB");
                  permute("X", "YZ");
              }
          }
        `, answer: J`
          AB
          BA
          XYZ
          XZY
        `, explain: '"AB" gives AB and BA. The second call already has X placed, so only Y and Z are arranged behind it: XYZ and XZY.' },
        { t: 'fill', q: 'Complete <code>removeSpaces</code>.', code: J`
          public static String removeSpaces(String s) {
              if (s.length() == 0) {
                  return "";
              }
              String rest = removeSpaces(s.substring(1));
              if (s.charAt(0) == ___) {
                  return rest;
              }
              return s.charAt(0) + ___;
          }
        `, answers: ["' '", 'rest'], explain: 'A space is the char \' \'. It is dropped; any other character is put in front of the cleaned rest.' },
        { t: 'bug', q: 'This program does not compile. Tap the line with the bug.', qAr: 'البرنامج لا يُترجم. أين الخطأ؟', code: J`
          public class Main {
              public static int countA(String s) {
                  if (s.length() == 0) {
                      return 0;
                  }
                  int add = 0;
                  if (s.charAt(0) == "a") {
                      add = 1;
                  }
                  return add + countA(s.substring(1));
              }
              public static void main(String[] args) {
                  System.out.println(countA("banana"));
              }
          }
        `, bug: 7, fix: J`
          public class Main {
              public static int countA(String s) {
                  if (s.length() == 0) {
                      return 0;
                  }
                  int add = 0;
                  if (s.charAt(0) == 'a') {
                      add = 1;
                  }
                  return add + countA(s.substring(1));
              }
              public static void main(String[] args) {
                  System.out.println(countA("banana"));
              }
          }
        `, hint: 'What type does charAt return, and what type is "a"?', explain: 's.charAt(0) is a char, but "a" in double quotes is a String. Java refuses to compare a char with a String using == (the error says "bad operand types for binary operator =="). Write the character in single quotes: \'a\'. Then the program prints 3.', explainAr: 'نكتب الحرف بين علامتي اقتباس مفردتين \'a\' لأن charAt يُرجع char.' },
        { t: 'code', q: 'Read one whole line of text (use <code>in.nextLine()</code>). Print it without any spaces, using a recursive method <code>removeSpaces(String s)</code>. No loops and no prompts.', qAr: 'اطبع السطر بدون مسافات باستخدام دالة عودية.', starter: J`
          import java.util.*;

          public class Main {
              public static String removeSpaces(String s) {
                  // base case: the empty String
                  // clean the rest, then keep or drop the first character
                  return s;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String line = in.nextLine();
                  System.out.println(removeSpaces(line));
              }
          }
        `, tests: [{ stdin: '050 123 4567', expected: '0501234567' }, { stdin: 'Prince Sultan University', expected: 'PrinceSultanUniversity' }, { stdin: 'abc', expected: 'abc' }], solution: J`
          import java.util.*;

          public class Main {
              public static String removeSpaces(String s) {
                  if (s.length() == 0) {
                      return "";
                  }
                  String rest = removeSpaces(s.substring(1));
                  if (s.charAt(0) == ' ') {
                      return rest;
                  }
                  return s.charAt(0) + rest;
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  String line = in.nextLine();
                  System.out.println(removeSpaces(line));
              }
          }
        `, hint: 'String rest = removeSpaces(s.substring(1)); if the first char is \' \' return rest, else return s.charAt(0) + rest.', explain: 'Each call decides about one character and trusts the smaller call to clean the rest.' },
        { t: 'code', q: 'Read one short word with different letters (1 to 4 letters). Print all its permutations, one per line, in the order produced by the <code>permute(prefix, rest)</code> method of this lesson. No prompts.', qAr: 'اطبع كل تباديل الكلمة، كل تبديل في سطر.', starter: J`
          import java.util.*;

          public class Main {
              public static void permute(String prefix, String rest) {
                  // base case: rest is empty, print prefix
                  // otherwise try every letter of rest as the next letter
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  permute("", in.next());
              }
          }
        `, tests: [{ stdin: 'AB', expected: J`
          AB
          BA
        ` }, { stdin: 'CAT', expected: J`
          CAT
          CTA
          ACT
          ATC
          TCA
          TAC
        ` }, { stdin: 'X', expected: 'X' }], solution: J`
          import java.util.*;

          public class Main {
              public static void permute(String prefix, String rest) {
                  if (rest.length() == 0) {
                      System.out.println(prefix);
                      return;
                  }
                  for (int i = 0; i < rest.length(); i++) {
                      String others = rest.substring(0, i) + rest.substring(i + 1);
                      permute(prefix + rest.charAt(i), others);
                  }
              }

              public static void main(String[] args) {
                  Scanner in = new Scanner(System.in);
                  permute("", in.next());
              }
          }
        `, hint: 'For each i: permute(prefix + rest.charAt(i), rest.substring(0, i) + rest.substring(i + 1));', explain: 'Each call places one more letter and leaves one letter fewer, so the calls stop when rest is empty and print a complete arrangement.' }
      ]
    }
  ],
  quiz: [
    { t: 'mcq', q: 'Which two parts must every correct recursive method have?', options: ['A loop and a return statement', 'A base case and a recursive case that moves toward it', 'A static variable and a helper method', 'Two recursive calls'], answer: 1, explain: 'Without a base case, or without progress toward it, recursion never stops.' },
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
    `, explain: '"A" lines print on the way down (2, 1). "B" lines print while the stack unwinds, in reverse order (1, 2).' },
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
    `, explain: 'mystery counts the digits: 2026, 202, 20, 2 are four numbers.' },
    { t: 'mcq', q: 'What happens when <code>f(3)</code> is called?', code: J`
      public static int f(int n) {
          return n + f(n - 1);
      }
    `, options: ['It returns 6', 'It returns 3', 'It throws StackOverflowError', 'It does not compile'], answer: 2, explain: 'There is no base case, so f keeps calling itself until the call stack overflows.' },
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
    `, explain: 'rev("JAV") = "VAJ". rev("ab") is "ba" and rev("cd") is "dc".' },
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
    `, explain: 'g is Fibonacci: 0, 1, 1, 2, 3, 5, 8, so g(6) = 8. g(1) + g(0) = 1.' },
    { t: 'mcq', q: 'A recursive binary search runs on the sorted array <code>{1, 4, 6, 9, 12}</code> with key 12 and range 0..4. Which <code>mid</code> values are examined, in order?', options: ['2, 3, 4', '2, 4', '0, 1, 2, 3, 4', '4'], answer: 0, explain: 'mid = 2 (6), range 3..4; mid = 3 (9), range 4..4; mid = 4 (12) found.' },
    { t: 'mcq', q: 'Why is the simple recursive Fibonacci method slow for large n?', options: ['Because of integer division', 'It solves the same subproblems again and again', 'Because Java does not support recursion well', 'Because it has no base case'], answer: 1, explain: 'fib(n-1) and fib(n-2) both recompute many of the same values.' },
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
    `, explain: 'From index 0: 2 * 3 * 5 * 1 = 30. From index 2: 5 * 1 = 5. Index 3 is the length: 1.' },
    { t: 'bug', q: 'This program should print 30 (2 × 3 × 5), but it prints 0. Tap the line with the bug.', qAr: 'البرنامج يطبع 0 بدلاً من 30. أين الخطأ؟', code: J`
      public class Main {
          public static int product(int[] a, int i) {
              if (i == a.length) {
                  return 0;
              }
              return a[i] * product(a, i + 1);
          }

          public static void main(String[] args) {
              int[] a = {2, 3, 5};
              System.out.println(product(a, 0));
          }
      }
    `, bug: 4, fix: J`
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
          }
      }
    `, hint: 'What does every multiplication finally multiply by?', explain: 'The base case returns 0, so the last step is 5 * 0 = 0, and every product above it becomes 0. When the recursive case multiplies, the base value must be 1: 2 * 3 * 5 * 1 = 30.', explainAr: 'في الضرب تُرجع الحالة الأساسية 1 وليس 0.' },
    { t: 'bug', q: 'This program should print 2 (the number of zeros), but it crashes with <code>ArrayIndexOutOfBoundsException</code>. Tap the line with the bug.', qAr: 'البرنامج يتوقف بخطأ في الفهرس. أين الخطأ؟', code: J`
      public class Main {
          public static int countZeros(int[] a, int i) {
              if (i > a.length) {
                  return 0;
              }
              int add = 0;
              if (a[i] == 0) {
                  add = 1;
              }
              return add + countZeros(a, i + 1);
          }
          public static void main(String[] args) {
              int[] a = {0, 5, 0};
              System.out.println(countZeros(a, 0));
          }
      }
    `, bug: 3, fix: J`
      public class Main {
          public static int countZeros(int[] a, int i) {
              if (i == a.length) {
                  return 0;
              }
              int add = 0;
              if (a[i] == 0) {
                  add = 1;
              }
              return add + countZeros(a, i + 1);
          }
          public static void main(String[] args) {
              int[] a = {0, 5, 0};
              System.out.println(countZeros(a, 0));
          }
      }
    `, hint: 'The array has length 3. Which index is the first one that does not exist?', explain: 'With i > a.length, the call with i = 3 is not stopped (3 > 3 is false), so line 7 reads a[3], which does not exist. This is an off-by-one error. The recursion must stop at i == a.length (or i >= a.length).', explainAr: 'خطأ بفارق واحد: يجب التوقف عندما i == a.length.' },
    { t: 'output', q: 'What does this program print?', code: J`
      public class Main {
          public static int gcd(int a, int b) {
              if (b == 0) {
                  return a;
              }
              return gcd(b, a % b);
          }

          public static String toBinary(int n) {
              if (n < 2) {
                  return "" + n;
              }
              return toBinary(n / 2) + (n % 2);
          }

          public static void main(String[] args) {
              System.out.println(gcd(36, 60));
              System.out.println(toBinary(12));
          }
      }
    `, answer: J`
      12
      1100
    `, explain: 'gcd(36, 60) = gcd(60, 36) = gcd(36, 24) = gcd(24, 12) = gcd(12, 0) = 12. 12 = 8 + 4, so in binary it is 1100.' }
  ],
  lab: {
    t: 'code',
    q: '<b>Recursive number toolkit.</b> Read one non-negative integer <code>n</code>. Using <b>recursive</b> methods only (no loops), print three lines:<br><code>Sum of digits: </code> and the sum of the digits of n<br><code>Reversed: </code> and the digits of n in reverse order (as text, for example 120 gives 021)<br><code>Binary: </code> and n written in base 2<br>Do not print prompts.<br><b>Hints:</b> (1) sumDigits and reverseDigits peel the last digit with <code>n % 10</code> and continue with <code>n / 10</code>. (2) For binary, the last bit is <code>n % 2</code>; the rest is the binary of <code>n / 2</code>, written before it. (3) Stop when n has a single digit (or n is below 2 for binary).',
    qAr: 'اقرأ عدداً غير سالب واطبع مجموع أرقامه، وأرقامه معكوسة، وتمثيله الثنائي، باستخدام دوال عودية فقط.',
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
    hint: 'All three methods use a base case (a single digit, or n below 2 for binary) and shrink n with n / 10 or n / 2. Build Strings with "" + n.',
    explain: 'Each method peels off one digit (n % 10 or n % 2) and recurses on the rest (n / 10 or n / 2). For binary, the remainder is the rightmost bit, so it is appended after the recursive result.'
  },
  cheats: [
    { code: J`if (base case) return answer; return combine(smaller call);`, note: 'Shape of every recursive method' },
    { code: J`long factorial(int n) { if (n == 0) return 1; return n * factorial(n - 1); }`, note: 'Factorial' },
    { code: J`int fib(int n) { if (n <= 1) return n; return fib(n - 1) + fib(n - 2); }`, note: 'Fibonacci (two base cases, two calls; slow)' },
    { code: J`int sumDigits(int n) { if (n < 10) return n; return n % 10 + sumDigits(n / 10); }`, note: 'Peel digits with % 10 and / 10' },
    { code: J`long power(int b, int e) { if (e == 0) return 1; return b * power(b, e - 1); }`, note: 'Power' },
    { code: J`String reverse(String s) { if (s.length() <= 1) return s; return reverse(s.substring(1)) + s.charAt(0); }`, note: 'Reverse a string' },
    { code: J`boolean pal(String s, int lo, int hi) { if (lo >= hi) return true; ... pal(s, lo + 1, hi - 1); }`, note: 'Helper method with index parameters' },
    { code: J`if (low > high) return -1; int mid = (low + high) / 2;`, note: 'Recursive binary search: base case and middle' },
    { code: J`StackOverflowError`, note: 'Missing base case or calls that do not approach it' },
    { code: J`if (n == 0) return; up(n - 1); System.out.println(n);`, note: 'Print after the call: count up (output on the way up, reversed)' },
    { code: J`sum: if (n == 0) return 0;    product: if (n == 0) return 1;`, note: 'Base value: 0 for adding, 1 for multiplying' },
    { code: J`int max(int[] a, int i) { if (i == a.length - 1) return a[i]; return Math.max(a[i], max(a, i + 1)); }`, note: 'Largest element: stop at the last index' },
    { code: J`if (i == a.length) return -1; if (a[i] == key) return i; return indexOf(a, key, i + 1);`, note: 'Recursive linear search: check the end before reading a[i]' },
    { code: J`void triangle(int n) { if (n == 0) return; triangle(n - 1); line(n); }`, note: 'Triangle of stars (swap the two calls to turn it upside down)' },
    { code: J`int gcd(int a, int b) { if (b == 0) return a; return gcd(b, a % b); }`, note: 'Greatest common divisor (Euclid)' },
    { code: J`String toBinary(int n) { if (n < 2) return "" + n; return toBinary(n / 2) + (n % 2); }`, note: 'Number to binary: the last bit goes at the end' },
    { code: J`hanoi(n - 1, from, via, to); move disk n; hanoi(n - 1, via, to, from);`, note: 'Tower of Hanoi: 2<sup>n</sup> − 1 moves' },
    { code: J`return add + countChar(s.substring(1), c);`, note: 'Count a character: 1 or 0, plus the count of the rest' },
    { code: J`if (rest.length() == 0) { print prefix; } else for each i: permute(prefix + rest.charAt(i), rest without index i);`, note: 'Permutations: n different letters give n! orders' }
  ],
  glossary: [
    { term: 'Recursive method', ar: 'دالة عودية', def: 'A method that calls itself.' },
    { term: 'Base case', ar: 'الحالة الأساسية', def: 'The simplest input, answered directly without another recursive call; it stops the recursion.' },
    { term: 'Recursive case', ar: 'الحالة العودية', def: 'The part of a recursive method that calls itself on a smaller problem.' },
    { term: 'Call stack', ar: 'مكدس الاستدعاءات', def: 'The pile of waiting method calls. The newest call is on top and finishes first.' },
    { term: 'Frame (activation record)', ar: 'إطار الاستدعاء', def: 'The box on the call stack that holds the parameters and variables of one call.' },
    { term: 'Unwinding', ar: 'الرجوع من الاستدعاءات', def: 'The stack shrinking as calls finish, from the newest to the oldest.' },
    { term: 'StackOverflowError', ar: 'خطأ فيضان المكدس', def: 'The error thrown when recursion is too deep, often because the base case is never reached.' },
    { term: 'Helper method', ar: 'دالة مساعدة', def: 'A method with extra parameters (such as indexes) that does the real recursion.' },
    { term: 'Overloading', ar: 'تحميل زائد', def: 'Two methods with the same name but different parameters.' },
    { term: 'Palindrome', ar: 'كلمة متناظرة', def: 'A String that reads the same forwards and backwards, such as "level".' },
    { term: 'Iteration', ar: 'التكرار بالحلقات', def: 'Repeating work using loops (for, while) instead of recursive calls.' },
    { term: 'Index parameter', ar: 'معامل الفهرس', def: 'An extra parameter that tells the current call which position of an array, list or String it is working on.' },
    { term: 'Linear search', ar: 'البحث الخطي', def: 'Checking the elements one by one from the start until the key is found or the end is reached. Works on unsorted data.' },
    { term: 'Greatest common divisor (GCD)', ar: 'القاسم المشترك الأكبر', def: 'The largest number that divides two numbers with no remainder, for example gcd(24, 36) = 12.' },
    { term: 'Euclid\'s algorithm', ar: 'خوارزمية إقليدس', def: 'A method to find the GCD: gcd(a, b) = gcd(b, a % b), and gcd(a, 0) = a.' },
    { term: 'Binary (base 2)', ar: 'النظام الثنائي', def: 'Writing numbers with only the digits 0 and 1; each place is worth twice the place on its right (1, 2, 4, 8 ...).' },
    { term: 'Bit', ar: 'بت (خانة ثنائية)', def: 'One binary digit: 0 or 1.' },
    { term: 'Digital root', ar: 'الجذر الرقمي', def: 'The single digit you get by adding the digits of a number again and again, for example 4096 → 19 → 10 → 1.' },
    { term: 'Tower of Hanoi', ar: 'برج هانوي', def: 'A puzzle: move n disks between three rods, one at a time, never a bigger disk on a smaller one. It needs 2^n − 1 moves.' },
    { term: 'Permutation', ar: 'تبديل', def: 'One way to arrange items in order. n different items have n! permutations.' },
    { term: 'Empty String', ar: 'النص الفارغ', def: 'The String "" with no characters at all; a common base case for recursion on text.' }
  ]
});

