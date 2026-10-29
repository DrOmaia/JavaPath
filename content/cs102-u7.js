JP.unit({
  course: 'cs102',
  n: 7,
  title: 'Recursion',
  titleAr: 'الاستدعاء الذاتي (التكرار العودي)',
  intro: 'A recursive method solves a problem by calling itself on a smaller copy of the same problem, until the problem is so small that the answer is obvious. In this unit you learn the two parts of every recursive method, how to follow the call stack step by step, and how to use recursion for factorials, digits, Fibonacci numbers, strings and binary search.',
  introAr: 'الدالة العودية تحل المسألة باستدعاء نفسها على نسخة أصغر منها حتى تصبح الإجابة واضحة. ستتعلم جزأي الدالة العودية، وكيف تتتبع مكدس الاستدعاءات خطوة بخطوة، ثم تطبقها على مسائل كلاسيكية.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      title: 'What is recursion? Base case and recursive case',
      titleAr: 'ما هو الاستدعاء الذاتي؟ الحالة الأساسية والحالة العودية',
      minutes: 25,
      body: [
        { type: 'h', en: 'A method that calls itself' },
        { type: 'p', en: 'Until now, a method called <i>other</i> methods. In this unit, a method calls <b>itself</b>. This sounds strange, but it is a natural way to solve problems that contain a smaller copy of themselves, like counting down: "to count down from 3, say 3, then count down from 2".', ar: 'الدالة العودية هي دالة تستدعي نفسها.' },
        { type: 'analogy', title: 'Russian dolls', en: 'Open a Russian doll and you find a smaller doll. Open it, and there is an even smaller one. You keep opening until you reach the tiny doll that does not open. Recursion is the same: each call opens a smaller problem until the smallest one.', ar: 'مثل الدمى الروسية: كل دمية تحوي دمية أصغر حتى نصل إلى أصغر دمية.' },
        { type: 'p', en: 'Every recursive method needs <b>two parts</b>:' },
        { type: 'list', items: [
          '<b>Base case</b>: the smallest problem. The method answers directly and does <b>not</b> call itself. It is the tiny doll.',
          '<b>Recursive case</b>: the method calls itself with a <b>smaller</b> input. It is opening the next doll.'
        ], ar: 'الحالة الأساسية توقف الاستدعاء، والحالة العودية تستدعي الدالة بمدخل أصغر.' },
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
        `, ar: 'الحالة الأساسية أولاً ثم الحالة العودية.' }
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
        ` }
      ],
      remember: [
        'A recursive method calls itself.',
        'The <b>base case</b> stops the recursion without a new call.',
        'The <b>recursive case</b> calls the method with a smaller input.',
        'Every call must move closer to the base case.',
        'Check the base case first, then write the recursive call.'
      ],
      rememberAr: 'الدالة العودية تستدعي نفسها. الحالة الأساسية توقفها، والحالة العودية تستدعيها بمدخل أصغر، ويجب أن يقترب كل استدعاء من الحالة الأساسية.',
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
        `, hint: 'If n is 0, return. Otherwise print n and call down(n - 1).', explain: 'Print first, then recurse on the smaller number.' }
      ]
    },
    // ---------------------------------------------------------------- L2
    {
      title: 'The call stack: what happens on the way down and up',
      titleAr: 'مكدس الاستدعاءات: ماذا يحدث عند النزول والصعود',
      minutes: 30,
      body: [
        { type: 'h', en: 'Every call waits for the next one' },
        { type: 'p', en: 'When a method calls another method, the first one <b>waits</b>. Java remembers all the waiting calls in a pile called the <b>call stack</b>. Each call has its own box (a <b>frame</b>) with its own copy of <code>n</code>. When the smallest call finishes, the boxes are removed one by one, from the top.', ar: 'كل استدعاء ينتظر الذي بعده، وتُحفظ الاستدعاءات في مكدس.' },
        { type: 'analogy', title: 'A pile of plates', en: 'You put plates on a pile one by one. You can only take the top plate first. The last plate you put is the first plate you take (last in, first out).', ar: 'آخر طبق وُضع هو أول طبق يُؤخذ.' },
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
        `, ar: 'قبل الاستدعاء = عند النزول، وبعده = عند الصعود.' }
      ],
      mistakes: [
        { title: 'Thinking all calls run at the same time', en: 'Only the top call of the stack runs. The others wait.', code: 'trace(3);   // trace(2) runs only after the print' },
        { title: 'Reading the output in the wrong order', en: 'Lines after the call come out in reverse order.', code: J`
          show(n - 1);
          System.out.println(n);   // 1 2 3, not 3 2 1
        ` },
        { title: 'Forgetting the base-case message', en: 'The base case may also print. Do not skip its line when you trace.', code: 'System.out.println("base case");' }
      ],
      remember: [
        'Each call has its own frame with its own <code>n</code> on the call stack.',
        'The stack works like a pile of plates: last in, first out.',
        'Code <b>before</b> the recursive call runs on the way <b>down</b>.',
        'Code <b>after</b> the recursive call runs on the way <b>up</b>, in reverse order.',
        'To trace: write each call, what it prints, and what it waits for.'
      ],
      rememberAr: 'لكل استدعاء إطار خاص في المكدس. ما قبل الاستدعاء العودي يُنفَّذ عند النزول، وما بعده عند الصعود بترتيب عكسي.',
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
        `, hint: 'Print n, call both(n - 1), print n again.', explain: 'The first print happens going down, the second going up.' }
      ]
    },
    // ---------------------------------------------------------------- L3
    {
      title: 'Methods that return a value: factorial',
      titleAr: 'دوال عودية تُرجع قيمة: المضروب',
      minutes: 30,
      body: [
        { type: 'h', en: 'Recursion that builds an answer' },
        { type: 'p', en: 'So far our recursive methods only printed. Now a method will <b>return</b> a number. Each call waits for the answer of the smaller call, then uses it to build its own answer. The classic example is the factorial. <code>4! = 4 × 3 × 2 × 1</code>. Notice that <code>4! = 4 × 3!</code>. The factorial of a number contains the factorial of a smaller number. By definition <code>0! = 1</code>.', ar: 'المضروب n! = n × (n-1)! و 0! = 1.' },
        { type: 'analogy', title: 'Passing a question down the line', en: 'You ask the person next to you, "what is 3!?" They ask the next person "what is 2!?" and so on. The last person knows that 0! is 1. The answers come back up the line, each person multiplying by their own number.' },
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
        { type: 'check', q: 'Which value does <code>factorial(2)</code> return to <code>factorial(3)</code>?', options: ['1', '2', '3', '6'], answer: 1, explain: 'factorial(2) = 2 * factorial(1) = 2 * 1 = 2.' },
        { type: 'note', kind: 'tip', en: 'Why <code>long</code>? 13! is already bigger than the largest <code>int</code>. A <code>long</code> holds up to 20! safely.' },
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
        `, stdin: '5', out: '15', ar: 'مجموع 1 إلى n = n + مجموع 1 إلى n-1.' }
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
        'Use <code>long</code> for big factorials.'
      ],
      rememberAr: 'المضروب: 0! = 1 و n! = n * (n-1)!. تنزل الاستدعاءات أولاً ثم تعود النتائج وتُضرب.',
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
        `, hint: 'if (n == 0) return 1; return n * factorial(n - 1);', explain: 'The base case returns 1, and every other call multiplies by the smaller factorial.' }
      ]
    },

    // ---------------------------------------------------------------- L4
    {
      title: 'When recursion never stops: StackOverflowError',
      titleAr: 'عندما لا تتوقف العودية: StackOverflowError',
      minutes: 20,
      body: [
        { type: 'h', en: 'What goes wrong without a base case' },
        { type: 'p', en: 'Every waiting call takes space on the call stack. The stack has a limited size. If a method never reaches a base case, it keeps calling itself, the pile of waiting calls grows and grows, and at some point Java stops the program with <code>StackOverflowError</code>.', ar: 'بدون حالة أساسية تمتلئ ذاكرة المكدس ويحدث StackOverflowError.' },
        { type: 'analogy', title: 'An endless pile of plates', en: 'If you keep adding plates and never take any away, the pile finally falls over. The error message is the pile falling.' },
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
        `, ar: 'أضفنا حالة أساسية في بداية الدالة.' }
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
        'The error appears when the program runs, not when it compiles.'
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
        `, hint: 'if (n <= 0) return 0; return n + sumTo(n - 1);', explain: 'Returning 0 for n <= 0 is both the base case and a safe guard.' }
      ]
    },
    // ---------------------------------------------------------------- L5
    {
      title: 'Digits and powers',
      titleAr: 'أرقام العدد والقوى',
      minutes: 30,
      body: [
        { type: 'h', en: 'Taking a number apart: % 10 and / 10' },
        { type: 'p', en: 'Remember from CS101: <code>n % 10</code> is the <b>last digit</b> of n, and <code>n / 10</code> (integer division) is the number <b>without</b> its last digit. For 4096: <code>4096 % 10 = 6</code> and <code>4096 / 10 = 409</code>. A number with a single digit is the smallest problem.', ar: 'n % 10 هو الرقم الأخير، وn / 10 هو العدد بعد حذف الرقم الأخير.' },
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
        { type: 'check', q: 'What is <code>sumDigits(123)</code>?', options: ['3', '6', '12', '123'], answer: 1, explain: '3 + sumDigits(12) = 3 + 2 + sumDigits(1) = 3 + 2 + 1 = 6.' },
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
        `, stdin: '507', out: '12', ar: 'نقشر الرقم الأخير في كل استدعاء.' }
      ],
      mistakes: [
        { title: 'Mixing up % and /', en: '<code>n % 10</code> is the last digit. <code>n / 10</code> is the rest.', code: 'return n / 10 + sumDigits(n % 10);' },
        { title: 'Wrong base case for digits', en: 'If you only stop at 0, a one-digit number still works, but you must return 0, not n.', code: 'if (n == 0) return n;   // fine\nif (n < 10) return 0;   // wrong' },
        { title: 'Changing the base in power', en: 'Only the exponent shrinks.', code: 'return base * power(base - 1, exp);' },
        { title: 'Using int for big powers', en: 'power(2, 40) does not fit in an int. Use long.', code: 'public static int power(int b, int e)' }
      ],
      remember: [
        '<code>n % 10</code> = last digit, <code>n / 10</code> = the number without it.',
        'Digit sum base case: <code>n &lt; 10</code> returns <code>n</code>.',
        'Digit sum recursive case: <code>n % 10 + sumDigits(n / 10)</code>.',
        'Power base case: exponent 0 returns 1.',
        'Power recursive case: <code>base * power(base, exp - 1)</code>.'
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
        `, hint: 'if (exp == 0) return 1; return base * power(base, exp - 1);', explain: 'Each call does one multiplication and lowers the exponent by one.' }
      ]
    },
    // ---------------------------------------------------------------- L6
    {
      title: 'Fibonacci numbers: two calls at once',
      titleAr: 'أعداد فيبوناتشي: استدعاءان معاً',
      minutes: 30,
      body: [
        { type: 'h', en: 'A sequence built from the two before' },
        { type: 'p', en: 'The Fibonacci sequence starts with 0 and 1. Every next number is the <b>sum of the previous two</b>: 0, 1, 1, 2, 3, 5, 8, 13, 21 ... For example 8 = 3 + 5. We write <code>fib(n) = fib(n-1) + fib(n-2)</code>. This time the method needs <b>two</b> base cases (fib(0) and fib(1)) and makes <b>two</b> recursive calls.', ar: 'كل حد = مجموع الحدين السابقين. لها حالتان أساسيتان واستدعاءان عوديان.' },
        { type: 'analogy', title: 'Rabbits and months', en: 'The number of rabbit pairs this month is the number of pairs last month plus the number two months ago. To know today, you must know two earlier answers.' },
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
        { type: 'p', en: 'Look carefully: <code>fib(2)</code> is computed twice (once inside fib(3) and once directly from fib(4)). For big n, this repeated work grows very quickly.' },
        { type: 'note', kind: 'warn', en: '<code>fib(5)</code> makes 15 calls. <code>fib(40)</code> makes hundreds of millions. Recursive Fibonacci is great for learning, but a loop is much faster.', ar: 'فيبوناتشي العودية تكرر الحسابات؛ الحلقة أسرع.' },
        { type: 'check', q: 'Why is recursive <code>fib(40)</code> slow?', options: ['Java is slow', 'It computes the same values again and again', 'It has no base case', 'It uses long'], answer: 1, explain: 'The same smaller values are recomputed many times, so the number of calls explodes.' },
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
        `, stdin: '8', out: '0 1 1 2 3 5 8 13', ar: 'نطبع أول n حداً.' }
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
        'The sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.'
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
        `, hint: 'if (n <= 1) return n; return fib(n - 1) + fib(n - 2);', explain: 'n <= 1 covers both base cases at once.' }
      ]
    },

    // ---------------------------------------------------------------- L7
    {
      title: 'Recursion on text: reverse and palindrome',
      titleAr: 'العودية على النصوص: العكس والتناظر',
      minutes: 30,
      body: [
        { type: 'h', en: 'Making a String smaller' },
        { type: 'p', en: 'To use recursion on a String, we need a way to make it smaller. Remember these String tools: <code>s.length()</code> (number of characters), <code>s.charAt(0)</code> (the first character), <code>s.substring(1)</code> (everything except the first character) and <code>s.substring(1, s.length() - 1)</code> (without the first and the last character).', ar: 'نُصغّر النص باستخدام substring.' },
        { type: 'table', head: ['Call on "CAT"', 'Result'], rows: [
          ['<code>"CAT".charAt(0)</code>', "'C'"],
          ['<code>"CAT".substring(1)</code>', '"AT"'],
          ['<code>"CAT".substring(1, 2)</code>', '"A"'],
          ['<code>"T".substring(1)</code>', '"" (empty String)']
        ] },
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
        { type: 'check', q: 'What does <code>reverse("AB")</code> return?', options: ['"AB"', '"BA"', '"A"', '"B"'], answer: 1, explain: 'reverse("B") + "A" = "B" + "A" = "BA".' },
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
        `, ar: 'نقرأ كلمة ونطبع مقلوبها ونختبر التناظر.' }
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
        'Case matters: M and m are different.'
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
        `, hint: 'reverse: reverse(s.substring(1)) + s.charAt(0). isPalindrome: compare first and last, then recurse on s.substring(1, s.length() - 1).', explain: 'Both methods shrink the String and stop at length 0 or 1.' }
      ]
    },
    // ---------------------------------------------------------------- L8
    {
      title: 'Helper methods: carrying extra information',
      titleAr: 'الدوال المساعدة: حمل معلومات إضافية',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why do we need a helper?' },
        { type: 'p', en: 'Using <code>substring</code> at every step creates a new String each time. A cleverer way is to keep the original data and pass <b>positions</b> (indexes) that say which part we are looking at. But the person who calls our method should not have to supply these extra numbers. The solution is a <b>helper method</b>: a simple public method for the caller, and a second method with extra parameters that does the recursion.', ar: 'الدالة المساعدة تحمل معاملات إضافية مثل الفهارس، وتبقى الدالة العامة بسيطة.' },
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
        { type: 'h', en: 'Arrays need a helper too' },
        { type: 'p', en: 'We cannot make an array smaller. So we pass the array and the index where we are now. When the index equals the length, there are no elements left (base case).' },
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
        { type: 'check', q: 'For an array of length 5, which index makes the base case true?', options: ['4', '5', '0', '-1'], answer: 1, explain: 'Valid indexes are 0 to 4. At index 5 we are past the end.' },
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
        `, stdin: '4\n3 5 2 10', out: '20', ar: 'الدالة العامة تبدأ المساعدة من الفهرس 0.' }
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
        'Two pointers: stop when <code>low &gt;= high</code>.'
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
        `, hint: 'Base case: index == a.length - 1 returns a[index]. Otherwise Math.max(a[index], max(a, index + 1)).', explain: 'With one element left, that element is the largest. Otherwise compare the current element with the largest of the rest.' }
      ]
    },
    // ---------------------------------------------------------------- L9
    {
      title: 'Recursive binary search',
      titleAr: 'البحث الثنائي العودي',
      minutes: 30,
      body: [
        { type: 'h', en: 'Halving the problem' },
        { type: 'p', en: 'You met binary search in the last unit: on a <b>sorted</b> array you look at the middle and throw away the half that cannot contain your value. This is naturally recursive: after the middle check, the job is the same job on a smaller range. The range is described by two indexes, <code>low</code> and <code>high</code>, so we use a helper method from the last lesson.', ar: 'البحث الثنائي: ننظر للوسط ونهمل النصف الذي لا يحوي القيمة، ثم نكرر على نصف أصغر.' },
        { type: 'analogy', title: 'Guess the number game', en: 'Think of a number from 1 to 100. I guess 50. You say "higher". Now I only look at 51 to 100 and guess 75. Each guess removes half of the numbers.' },
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
        { type: 'p', en: 'Now trace the search for a key that is NOT there, for example 50 in the same array:' },
        { type: 'table', head: ['Call', 'low', 'high', 'mid', 'list[mid]', 'What happens'], rows: [
          ['1', '0', '6', '3', '21', '50 is bigger: search 4..6'],
          ['2', '4', '6', '5', '42', '50 is bigger: search 6..6'],
          ['3', '6', '6', '6', '57', '50 is smaller: search 6..5'],
          ['4', '6', '5', '-', '-', 'low &gt; high: empty range, return -1']
        ] },
        { type: 'check', q: 'About how many steps does binary search need for 1,000,000 sorted numbers?', options: ['About 20', 'About 1,000', 'About 500,000', 'Exactly 1,000,000'], answer: 0, explain: 'Each step halves the range, and 2 to the power 20 is about one million.' },
        { type: 'note', kind: 'exam', en: 'Do not forget the <code>low &gt; high</code> base case. Without it, a missing key causes a wrong index or an endless recursion.' },
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
        `, stdin: '7\n3 8 15 21 34 42 57\n34', out: '4', ar: 'كل استدعاء ينصّف المجال.' }
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
        'Each call halves the range: about 20 steps for a million items.'
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
        `, hint: 'If low > high return -1. Compute mid. Equal: return mid. Smaller key: low..mid-1. Bigger key: mid+1..high.', explain: 'Each call either finds the key or continues on half of the range.' }
      ]
    },
    // ---------------------------------------------------------------- L10
    {
      title: 'Recursion or loops?',
      titleAr: 'العودية أم الحلقات؟',
      minutes: 25,
      body: [
        { type: 'h', en: 'Two ways to repeat work' },
        { type: 'p', en: 'You already know loops. Any recursive method can be written with a loop, and many loops can be written as recursion. So which one should you use? It depends on the problem. Here are the two factorials side by side.', ar: 'يمكن كتابة أي دالة عودية بحلقة، والاختيار يعتمد على المسألة.' },
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
        { type: 'table', head: ['', 'Recursion', 'Loop (iteration)'], rows: [
          ['Code', 'Often short and close to the math definition', 'Can be longer for tree-like problems'],
          ['Memory', 'One stack frame per call; very deep recursion can cause StackOverflowError', 'Almost no extra memory'],
          ['Speed', 'Each call costs a little; may repeat work (Fibonacci)', 'Usually faster'],
          ['Good for', 'Binary search, palindromes, nested/tree structures', 'Simple counting and adding']
        ] },
        { type: 'note', kind: 'tip', en: 'Choose recursion when it makes the solution clearly simpler and the depth is small (binary search needs only about 20 levels for a million items). Choose a loop for simple counting, or when the input can be very large.', ar: 'العودية للمسائل التي تبسّطها ويكون عمقها صغيراً، والحلقة للمسائل البسيطة أو المدخلات الكبيرة.' },
        { type: 'check', q: 'Which problem is a good fit for a plain loop?', options: ['Adding the numbers of an array', 'Exploring a folder inside a folder', 'Playing a perfect chess game', 'None of them'], answer: 0, explain: 'A simple running total is easiest with a loop.' },
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
        `, ar: 'نفس النتيجة بطريقتين.' }
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
        'Very deep recursion can end in <code>StackOverflowError</code>.'
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
        `, hint: 'Loop: count = 1, while (n >= 10) { n = n / 10; count++; }. Recursion: n < 10 gives 1, else 1 + digitsRec(n / 10).', explain: 'Both versions remove one digit with n / 10 until a single digit remains.' }
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
    `, explain: 'From index 0: 2 * 3 * 5 * 1 = 30. From index 2: 5 * 1 = 5. Index 3 is the length: 1.' }
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
    { code: J`StackOverflowError`, note: 'Missing base case or calls that do not approach it' }
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
    { term: 'Iteration', ar: 'التكرار بالحلقات', def: 'Repeating work using loops (for, while) instead of recursive calls.' }
  ]
});

