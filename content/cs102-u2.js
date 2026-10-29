JP.unit({
  course: 'cs102',
  n: 2,
  title: 'Class Design',
  titleAr: 'تصميم الأصناف',
  intro: "In CS101 you wrote everything inside main. Now you will design your own types. A class is a blueprint, and an object is a thing built from it. Step by step you will learn fields, methods, constructors, this, getters and setters, toString and equals, static members, abstract classes and simple UML drawings. Go slowly: every lesson is short and has one worked example.",
  introAr: "في CS101 كتبت كل شيء داخل main. هنا ستصمم أنواعك الخاصة: الصنف مخطط والكائن شيء مبني منه. سنتعلم الحقول والدوال والمُنشئات و this والتغليف و toString و equals والأعضاء الساكنة والأصناف المجردة ومخططات UML، خطوة بخطوة وبدروس قصيرة.",
  lessons: [

    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'Why classes? Blueprints and objects',
      titleAr: 'لماذا الأصناف؟ المخطط والكائنات',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: too many loose variables' },
        { type: 'p', en: "Imagine you store 3 students. Each student has a name and a GPA. With the tools from CS101 you would write <code>name1</code>, <code>gpa1</code>, <code>name2</code>, <code>gpa2</code>, <code>name3</code>, <code>gpa3</code>. With 500 students this is a mess. We want ONE thing called a student that carries its own name and its own GPA.",
          ar: "بدل عشرات المتغيرات المتفرقة نريد شيئًا واحدًا اسمه طالب يحمل اسمه ومعدله." },
        { type: 'h', en: 'A class is a blueprint' },
        { type: 'p', en: "A <b>class</b> is a plan that says: &quot;a student has a name and a GPA&quot;. The plan is written once. It does not hold anyone's real data yet." },
        { type: 'analogy', title: 'The house blueprint', en: "An architect draws one blueprint of a house. The blueprint is only paper: nobody can sleep in it. But from that one blueprint a builder can build ten houses. The blueprint is the <b>class</b>. Each real house is an <b>object</b>.",
          ar: "المخطط ورق فقط، لكن يمكن بناء عشرة بيوت منه. المخطط هو الصنف، والبيت الحقيقي هو الكائن." },
        { type: 'code', code: J`
          class Student {
              String name;
              double gpa;
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['class Student {', 'We start a new blueprint called <code>Student</code>. Class names start with a capital letter.'],
          ['String name;', 'Every student will have a piece of text called <code>name</code>.'],
          ['double gpa;', 'Every student will have a decimal number called <code>gpa</code>.'],
          ['}', 'The blueprint ends here. No student exists yet!']
        ], ar: "الصنف يصف ما يملكه كل طالب: اسم ومعدل. لا يوجد طالب فعلي بعد." },
        { type: 'p', en: "The variables inside a class (<code>name</code> and <code>gpa</code>) are called <b>fields</b>. A field is a variable that belongs to an object." },
        { type: 'check', q: "What is a class?", options: ["A real student with real data", "A blueprint that describes a kind of thing", "A number", "A loop"], answer: 1,
          explain: "A class is only a plan. Real data lives in objects made from the class.", hint: "Think about the house blueprint." },

        { type: 'h', en: 'An object is built with new' },
        { type: 'p', en: "To get a real student we must <b>build</b> one from the blueprint. The keyword <code>new</code> does this. The thing we get is called an <b>object</b> (or an <i>instance</i> of the class)." },
        { type: 'analogy', title: 'The blank student card', en: "Think of a printed blank card with two empty lines: &quot;Name: ____&quot; and &quot;GPA: ____&quot;. The blank form is the class. When the registrar prints one card for you, that card is an object. Printing another card for your friend gives a second, separate object.",
          ar: "النموذج الفارغ هو الصنف، والبطاقة المطبوعة لك هي الكائن. بطاقة صديقك كائن آخر منفصل." },
        { type: 'code', code: J`
          Student s1 = new Student();
        ` },
        { type: 'lines', rows: [
          ['Student', 'The <b>type</b> of the variable: it will hold a Student.'],
          ['s1', 'The variable name. We call it a <i>reference</i>: it points to the object.'],
          ['new Student()', 'Build one new student from the blueprint. Its fields start empty.']
        ], ar: "new تبني كائنًا جديدًا من الصنف، والمتغير s1 يشير إليه." },
        { type: 'check', q: "Which keyword builds a new object?", options: ["class", "new", "static", "void"], answer: 1,
          explain: "<code>new</code> builds an object from a class." },

        { type: 'h', en: 'Filling the card: the dot' },
        { type: 'p', en: "A new object has empty fields. To write or read a field we write the object name, a <b>dot</b>, and the field name: <code>s1.name</code> means &quot;the name on card s1&quot;." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Student s1 = new Student();
                  s1.name = "Sara";
                  s1.gpa = 3.6;

                  Student s2 = new Student();
                  s2.name = "Omar";
                  s2.gpa = 2.9;

                  System.out.println(s1.name + " " + s1.gpa);
                  System.out.println(s2.name + " " + s2.gpa);
              }
          }

          class Student {
              String name;
              double gpa;
          }
        `, out: J`
          Sara 3.6
          Omar 2.9
        ` },
        { type: 'lines', title: 'Follow the cards', rows: [
          ['Student s1 = new Student();', 'Card number 1 is printed (empty).'],
          ['s1.name = "Sara";', 'Write &quot;Sara&quot; on card 1.'],
          ['s1.gpa = 3.6;', 'Write 3.6 on card 1.'],
          ['Student s2 = new Student();', 'Card number 2 is printed. It is a different object.'],
          ['s2.name = "Omar"; s2.gpa = 2.9;', 'Fill card 2. Card 1 is not changed.']
        ], ar: "لكل كائن نسخته الخاصة من الحقول: تغيير بطاقة سارة لا يغيّر بطاقة عمر." },
        { type: 'p', en: "In memory you can draw it like this. Each object is a box with its own fields, and the variable is an arrow to the box." },
        { type: 'code', code: J`
          s1 ---> [ name = "Sara", gpa = 3.6 ]
          s2 ---> [ name = "Omar", gpa = 2.9 ]
        ` },
        { type: 'note', kind: 'tip', en: "In these lessons the class <code>Main</code> (with <code>main</code>) comes first, and the helper classes like <code>Student</code> are written below it, without the word <code>public</code>. All of it goes in one file.",
          ar: "نكتب Main أولًا ثم الأصناف المساعدة تحتها في ملف واحد." },
        { type: 'check', q: "After running the program above, what is <code>s2.name</code>?", options: ["Sara", "Omar", "null", "2.9"], answer: 1,
          explain: "s2 is the second card. We wrote &quot;Omar&quot; on it.", hint: "s2, not s1." },
        { type: 'steps', title: 'Worked example: a coffee order', problem: "A cafe wants to keep an order: the drink name and the price in riyals. Read them and print one sentence.",
          steps: [
            { en: "Step 1: Design the blueprint. An order needs a drink (text) and a price (decimal).", code: J`
              class Order {
                  String drink;
                  double price;
              }
            ` },
            { en: "Step 2: In main, read the two values from the keyboard with Scanner (you know this from CS101).", code: J`
              Scanner sc = new Scanner(System.in);
              String d = sc.next();
              double p = sc.nextDouble();
            ` },
            { en: "Step 3: Build an order object with new.", code: J`
              Order o = new Order();
            ` },
            { en: "Step 4: Put the values into the fields using the dot.", code: J`
              o.drink = d;
              o.price = p;
            ` },
            { en: "Step 5: Read the fields back with the dot and print.", code: J`
              System.out.println(o.drink + " costs " + o.price + " riyals");
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String d = sc.next();
                    double p = sc.nextDouble();

                    Order o = new Order();
                    o.drink = d;
                    o.price = p;

                    System.out.println(o.drink + " costs " + o.price + " riyals");
                }
            }

            class Order {
                String drink;
                double price;
            }
          `, stdin: 'Latte 14.5', out: 'Latte costs 14.5 riyals',
          ar: "صمّم الصنف، أنشئ الكائن بـ new، ضع القيم بالنقطة، ثم اقرأها بالنقطة." }
      ],
      mistakes: [
        { title: 'Forgetting new', en: "Declaring a variable does not build an object. You must write <code>new</code>.", code: J`
          Student s1;
          s1.name = "Sara";   // ERROR: s1 has no object yet
        `, ar: "المتغير وحده ليس كائنًا؛ لا بد من new." },
        { title: 'Using the class name instead of the object', en: "Fields belong to an object (a card), not to the blueprint. Use the variable name before the dot.", code: J`
          Student.name = "Sara";   // ERROR
          s1.name = "Sara";        // correct
        ` },
        { title: 'Wrong type for a field', en: "A field has a type. You cannot put text into a <code>double</code>.", code: J`
          s1.gpa = "high";   // ERROR: gpa is a double
        ` },
        { title: 'Wrong capital letters', en: "Java cares about capital letters. The class is <code>Student</code>, not <code>student</code>.", code: J`
          student s1 = new student();   // ERROR: cannot find symbol
        ` }
      ],
      remember: [
        "A <b>class</b> is a blueprint: it is written once and holds no real data.",
        "An <b>object</b> is one real thing built from a class with <code>new</code>.",
        "<b>Fields</b> are variables inside the class; each object has its own copy.",
        "Use the <b>dot</b> to reach a field: <code>s1.name</code>.",
        "Many objects can be built from one class."
      ],
      rememberAr: "الصنف مخطط، والكائن شيء حقيقي يُبنى بـ new، والحقول متغيرات داخل الصنف ولكل كائن نسخته، ونصل إليها بالنقطة.",
      practice: [
        { t: 'mcq', q: "A city plan draws a &quot;Villa&quot; once. Ten real villas are built from it. In Java words, what are the ten villas?",
          qAr: "ما اسم البيوت العشرة الحقيقية في لغة جافا؟",
          options: ["Ten classes", "Ten objects", "Ten fields", "Ten methods"], answer: 1,
          explain: "The plan is the class. Each real villa is an object.", explainAr: "المخطط صنف والبيوت كائنات." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Student s = new Student();
                  s.name = "Lina";
                  System.out.println(s.name);
              }
          }

          class Student {
              String name;
          }
        `, answer: 'Lina', explain: "We wrote Lina into the field, then read the field back with the dot." },
        { t: 'mcq', q: "How many objects does this code build?", code: J`
          Student a = new Student();
          Student b = new Student();
          Student c;
        `, options: ["1", "2", "3", "0"], answer: 1,
          explain: "Only the two lines with <code>new</code> build objects. The variable <code>c</code> has no object." },
        { t: 'fill', q: "Complete the class and the line that builds an object.", code: J`
          class Phone {
              ___ brand;
              ___ price;
          }

          // inside main:
          Phone p = ___ Phone();
        `, answers: ['String', 'double', 'new'],
          explain: "The brand is text (<code>String</code>), the price is decimal (<code>double</code>), and <code>new</code> builds the object." },
        { t: 'order', q: "Put the lines in order: build a Phone object, then store its brand and its price.",
          lines: [
            "Phone p = new Phone();",
            "p.brand = \"Samsung\";",
            "p.price = 2500;"
          ],
          explain: "First build the object. Only then can you write into its fields." },
        { t: 'output', q: "What does this program print? (Two separate cups.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  Cup a = new Cup();
                  Cup b = new Cup();
                  a.size = 200;
                  b.size = 350;
                  a.size = a.size + 50;
                  System.out.println(a.size + " " + b.size);
              }
          }

          class Cup {
              int size;
          }
        `, answer: '250 350', explain: "Cup a becomes 200 + 50 = 250. Cup b is a different object and stays 350.",
          explainAr: "a و b كائنان منفصلان." },
        { t: 'mcq', q: "Which line prints Sara's GPA? (s1 is a Student object with name Sara.)",
          options: ["System.out.println(Student.gpa);", "System.out.println(s1.gpa);", "System.out.println(gpa.s1);", "System.out.println(s1(gpa));"], answer: 1,
          explain: "Object name, dot, field name: <code>s1.gpa</code>." },
        { t: 'code', q: "Write a class <code>Book</code> with fields <code>title</code> (String) and <code>pages</code> (int). In <code>main</code> read a one-word title and the pages (no prompts), build a Book, store the values in its fields, and print <code>TITLE has PAGES pages</code>.",
          qAr: "اكتب الصنف Book بحقلين، اقرأ القيم، خزّنها في الكائن، ثم اطبعها. لا تطبع رسائل إدخال.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read title and pages, build a Book, print
                }
            }

            class Book {
                // fields
            }
          `,
          tests: [
            { stdin: 'Java 300', expected: 'Java has 300 pages' },
            { stdin: 'Poems 85', expected: 'Poems has 85 pages' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String t = sc.next();
                    int p = sc.nextInt();
                    Book b = new Book();
                    b.title = t;
                    b.pages = p;
                    System.out.println(b.title + " has " + b.pages + " pages");
                }
            }

            class Book {
                String title;
                int pages;
            }
          `,
          hint: "Declare <code>String title;</code> and <code>int pages;</code> in the class, then use <code>b.title = ...</code>.",
          explain: "Build the object with <code>new Book()</code>, fill the fields with the dot, and read them back to print." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Methods in a class and references',
      titleAr: 'الدوال داخل الصنف والمراجع',
      minutes: 30,
      body: [
        { type: 'h', en: 'Objects can do things: methods' },
        { type: 'p', en: "So far a student card only stores data. But a student can also <i>do</i> things: print their own info, or say if they are on the honor list. We put this behavior inside the class as <b>methods</b>. (Reminder from CS101: a method is a named block of code that you can call.)" },
        { type: 'analogy', title: 'The card that can speak', en: "Imagine each student card has a small button. When you press it, the card reads its own name and GPA aloud. Every card reads <i>its own</i> data. The button is a method.",
          ar: "الدالة كزر على البطاقة: عند الضغط تقرأ البطاقة بياناتها هي." },
        { type: 'code', code: J`
          class Student {
              String name;
              double gpa;

              void printInfo() {
                  System.out.println(name + " has GPA " + gpa);
              }
          }
        ` },
        { type: 'lines', rows: [
          ['void printInfo() {', 'A method. <code>void</code> means &quot;it gives nothing back&quot;. There is no <code>static</code> here: it works on one object.'],
          ['System.out.println(name + ...', 'Inside the method, <code>name</code> and <code>gpa</code> mean the fields of the object that was called.']
        ], ar: "داخل الدالة، name و gpa هما حقلا الكائن الذي استُدعيت عليه الدالة." },
        { type: 'p', en: "We call the method with the dot: <code>s1.printInfo()</code>. Whoever stands before the dot is the card that speaks." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Student s1 = new Student();
                  s1.name = "Sara";
                  s1.gpa = 3.6;
                  Student s2 = new Student();
                  s2.name = "Omar";
                  s2.gpa = 2.9;

                  s1.printInfo();
                  s2.printInfo();
                  System.out.println(s1.isHonor());
                  System.out.println(s2.isHonor());
              }
          }

          class Student {
              String name;
              double gpa;

              void printInfo() {
                  System.out.println(name + " has GPA " + gpa);
              }

              boolean isHonor() {
                  return gpa >= 3.5;
              }
          }
        `, out: J`
          Sara has GPA 3.6
          Omar has GPA 2.9
          true
          false
        ` },
        { type: 'lines', title: 'Who speaks?', rows: [
          ['s1.printInfo();', 'The method runs on card s1, so <code>name</code> is Sara.'],
          ['s2.printInfo();', 'The same method now runs on card s2, so <code>name</code> is Omar.'],
          ['boolean isHonor()', 'This method <i>returns</i> true or false using <code>return</code>, like methods in CS101.']
        ] },
        { type: 'check', q: "<code>s2.isHonor()</code> with gpa 2.9 returns...", options: ["true", "false", "2.9", "nothing"], answer: 1,
          explain: "2.9 is not &gt;= 3.5, so the answer is false." },

        { type: 'h', en: 'Default values' },
        { type: 'p', en: "What is inside a field before you write anything? Java fills it for you: <code>0</code> for int, <code>0.0</code> for double, <code>false</code> for boolean and <code>null</code> for text and other objects. <code>null</code> means &quot;nothing here&quot;.",
          ar: "الحقول تأخذ قيمًا افتراضية: 0 للأرقام و false و null للنصوص." },
        { type: 'analogy', title: 'The empty form', en: "A new form from the printer is blank. A blank number box counts as 0, a blank yes/no box counts as &quot;no&quot; (false), and a blank text line counts as &quot;nothing&quot; (null).",
          ar: "النموذج الجديد فارغ: الرقم 0 ونعم/لا هي لا، والنص لا شيء." },
        { type: 'check', q: "A new <code>Student</code> has never been given a name. What does <code>s.name</code> hold?", options: ["0", "an empty text &quot;&quot;", "null", "false"], answer: 2,
          explain: "A text (String) field starts as <code>null</code>, which means no text at all." },

        { type: 'h', en: 'A variable holds an arrow, not the object' },
        { type: 'p', en: "This is the most important idea of the unit. A variable like <code>s1</code> does not hold the object. It holds a <b>reference</b>: an arrow pointing to the object in memory. If you write <code>b = a</code>, you copy the <i>arrow</i>, not the object." },
        { type: 'analogy', title: 'Two keys to one flat', en: "A flat has one real flat and two keys. You give your brother a copy of the key (not a second flat!). If he paints the wall red, you see a red wall too, because it is the same flat.",
          ar: "نسخ المفتاح لا ينسخ الشقة: الاثنان يدخلان الشقة نفسها." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  BankAccount a = new BankAccount();
                  a.owner = "Lina";
                  a.deposit(500);

                  BankAccount b = a;
                  b.deposit(250);
                  System.out.println(a.owner + ": " + a.balance);
              }
          }

          class BankAccount {
              String owner;
              double balance;

              void deposit(double amount) {
                  balance += amount;
              }
          }
        `, out: 'Lina: 750.0' },
        { type: 'p', en: "Trace it with boxes. After <code>BankAccount b = a;</code> there is still only ONE account box and TWO arrows:" },
        { type: 'code', code: J`
          a ---+
               +---> [ owner = "Lina", balance = 750.0 ]
          b ---+
        ` },
        { type: 'lines', title: 'Trace step by step', rows: [
          ['BankAccount a = new BankAccount();', 'One box is built. <code>a</code> points to it. balance = 0.0, owner = null.'],
          ['a.owner = "Lina"; a.deposit(500);', 'The box now says Lina, 500.0.'],
          ['BankAccount b = a;', 'No new box! <code>b</code> gets a copy of the arrow.'],
          ['b.deposit(250);', 'Follow arrow b to the same box: balance becomes 750.0.'],
          ['a.owner + ": " + a.balance', 'Follow arrow a to the same box: prints Lina: 750.0.']
        ], ar: "b = a ينسخ السهم فقط، فيشير a و b إلى الصندوق نفسه." },
        { type: 'note', kind: 'exam', en: "<code>b = a</code> does NOT copy an object. It makes two names for one object. A real copy needs a copy constructor (Lesson 4).",
          ar: "الإسناد b = a لا ينسخ الكائن." },
        { type: 'check', q: "<code>Box x = new Box(); Box y = x; y.width = 9;</code> What is <code>x.width</code>?", options: ["0", "9", "null", "error"], answer: 1,
          explain: "x and y point to the same box, so the change is seen through both." },

        { type: 'h', en: 'null: an arrow that points nowhere' },
        { type: 'p', en: "A reference can also be <code>null</code>: the arrow points to nothing. If you press the button of a card that does not exist, the program crashes with a <code>NullPointerException</code>." },
        { type: 'code', code: J`
          Student s = null;
          s.printInfo();   // crash: NullPointerException
        ` },
        { type: 'steps', title: 'Worked example: a coffee loyalty card', problem: "A cafe gives one stamp for each coffee. Read how many coffees Huda bought and print how many stamps her card has.",
          steps: [
            { en: "Step 1: The card has an owner and a number of stamps. Add a method that adds one stamp.", code: J`
              class LoyaltyCard {
                  String owner;
                  int stamps;

                  void addStamp() {
                      stamps++;
                  }
              }
            ` },
            { en: "Step 2: Build one card and write the owner. The stamps start at 0 (default value).", code: J`
              LoyaltyCard card = new LoyaltyCard();
              card.owner = "Huda";
            ` },
            { en: "Step 3: Read n, the number of coffees.", code: J`
              int n = sc.nextInt();
            ` },
            { en: "Step 4: Repeat n times: call addStamp on the card (a loop, as in CS101).", code: J`
              for (int i = 0; i < n; i++) {
                  card.addStamp();
              }
            ` },
            { en: "Step 5: Print the result.", code: J`
              System.out.println(card.owner + " has " + card.stamps + " stamps");
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    LoyaltyCard card = new LoyaltyCard();
                    card.owner = "Huda";
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        card.addStamp();
                    }
                    System.out.println(card.owner + " has " + card.stamps + " stamps");
                }
            }

            class LoyaltyCard {
                String owner;
                int stamps;

                void addStamp() {
                    stamps++;
                }
            }
          `, stdin: '3', out: 'Huda has 3 stamps',
          ar: "الدالة addStamp تعدّل حقل البطاقة التي استُدعيت عليها." }
      ],
      mistakes: [
        { title: 'Thinking b = a makes a copy', en: "Both variables now point to the same object. Changing one changes what the other sees.", code: J`
          Cup b = a;     // same cup, not a new one
        ` },
        { title: 'Calling a method without an object', en: "Instance methods need an object before the dot. Writing the method name alone inside <code>main</code> is an error.", code: J`
          printInfo();        // ERROR in main
          s1.printInfo();     // correct
        ` },
        { title: 'Using a method on null', en: "If the variable is <code>null</code> there is no object, so the call crashes at run time.", code: J`
          Student s = null;
          s.printInfo();   // NullPointerException
        ` },
        { title: 'Forgetting return', en: "A method with a return type such as <code>boolean</code> must send a value back with <code>return</code>.", code: J`
          boolean isHonor() {
              gpa >= 3.5;       // ERROR: nothing is returned
          }
        ` }
      ],
      remember: [
        "A <b>method</b> inside a class is the behavior of an object. Call it with the dot: <code>s1.printInfo()</code>.",
        "Inside a method, field names mean the fields of the object it was called on.",
        "Fields start with <b>default values</b>: 0, 0.0, false and null.",
        "A class-type variable holds a <b>reference</b> (an arrow), not the object.",
        "<code>b = a</code> copies the arrow: both names point to the same object.",
        "<code>null</code> means no object; calling a method on it crashes."
      ],
      rememberAr: "الدالة سلوك الكائن وتُستدعى بالنقطة. الحقول لها قيم افتراضية. المتغير يحمل مرجعًا (سهمًا) لا الكائن نفسه، والإسناد b = a ينسخ السهم فقط.",
      practice: [
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Dog d = new Dog();
                  d.name = "Rex";
                  d.bark();
              }
          }

          class Dog {
              String name;

              void bark() {
                  System.out.println(name + " says Woof");
              }
          }
        `, answer: 'Rex says Woof', explain: "The method runs on the dog d, so <code>name</code> is Rex." },
        { t: 'mcq', q: "What does this code print?", code: J`
          class Sensor {
              String location;
              int reading;
              boolean active;
          }
          // in main:
          Sensor s = new Sensor();
          System.out.println(s.location + " " + s.reading + " " + s.active);
        `, options: ["<code>null 0 false</code>", "<code> 0 false</code> (empty location)", "Compile error: fields are not set", "<code>null null null</code>"], answer: 0,
          explain: "Default values: <code>null</code> for a String, <code>0</code> for an int, <code>false</code> for a boolean." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Box b1 = new Box();
                  Box b2 = new Box();
                  b1.width = 4;
                  b2.width = 7;
                  b1 = b2;
                  b1.width = 10;
                  System.out.println(b1.width + " " + b2.width);
              }
          }

          class Box {
              int width;
          }
        `, answer: '10 10', explain: "After <code>b1 = b2</code> both arrows point to the second box. Setting width to 10 changes that one shared box. The first box is no longer used.",
          explainAr: "بعد b1 = b2 يشير المتغيران إلى الصندوق نفسه." },
        { t: 'fill', q: "Complete the <code>Rectangle</code> class and the line that builds one.", code: J`
          class Rectangle {
              double width;
              double height;

              ___ area() {
                  ___ width * height;
              }
          }

          // inside main:
          Rectangle r = ___ Rectangle();
        `, answers: ['double', 'return', 'new'],
          explain: "The method gives back a <code>double</code>, so its type is <code>double</code> and it needs <code>return</code>. Objects are built with <code>new</code>." },
        { t: 'order', q: "Arrange the lines to write a <code>Temperature</code> class with a method that converts its Celsius value to Fahrenheit.",
          lines: [
            "class Temperature {",
            "    double celsius;",
            "    double toFahrenheit() {",
            "        return celsius * 9 / 5 + 32;",
            "    }",
            "}"
          ],
          explain: "Open the class, declare the field, write the method with its return, then close the blocks in reverse order." },
        { t: 'mcq', q: "What happens when this code runs?", code: J`
          Student s = null;
          s.printInfo();
        `, options: ["It prints nothing", "It prints null", "It crashes with a NullPointerException", "It does not compile"], answer: 2,
          explain: "The code compiles, but at run time there is no object behind <code>s</code>, so Java throws a <code>NullPointerException</code>." },
        { t: 'code', q: "Write a class <code>Rectangle</code> with <code>double</code> fields <code>width</code> and <code>height</code> and a method <code>area()</code> that returns width * height. In <code>main</code> read width and height (no prompts), build the rectangle, and print its area.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read, build, print the area
                }
            }

            class Rectangle {
                // fields and area()
            }
          `,
          tests: [
            { stdin: '3 4', expected: '12.0' },
            { stdin: '2.5 4', expected: '10.0' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Rectangle r = new Rectangle();
                    r.width = sc.nextDouble();
                    r.height = sc.nextDouble();
                    System.out.println(r.area());
                }
            }

            class Rectangle {
                double width;
                double height;

                double area() {
                    return width * height;
                }
            }
          `,
          hint: "<code>double area() { return width * height; }</code>",
          explain: "The method uses the fields of the object it is called on. A double result prints with <code>.0</code> when it is a whole number." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Constructors',
      titleAr: 'المُنشئات',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: building an object takes many lines' },
        { type: 'p', en: "In Lesson 1 we built a card and then filled it line by line. It is easy to forget a line, and then the object has empty fields. It would be better to build the card <i>already filled</i>, in one line." },
        { type: 'analogy', title: 'The registration desk', en: "When you register for a course, the clerk does not give you a blank card and walk away. The card is created and your name and ID are written on it at the same moment. A <b>constructor</b> is that clerk: code that runs when the object is born and fills it.",
          ar: "المُنشئ كموظف التسجيل: يملأ البطاقة لحظة إنشائها." },
        { type: 'code', code: J`
          Student s1 = new Student("Sara", 3.6);
        ` },
        { type: 'p', en: "Look at <code>new Student(\"Sara\", 3.6)</code>. The values in brackets are sent to the constructor. Here is the constructor inside the class:" },
        { type: 'code', code: J`
          class Student {
              String name;
              double gpa;

              Student(String n, double g) {
                  name = n;
                  gpa = g;
              }
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['Student(String n, double g) {', 'The constructor. Its name is <b>exactly the class name</b>. It has <b>no return type</b> (not even <code>void</code>).'],
          ['name = n;', 'Copy the first value that came in (<code>n</code>) into the field <code>name</code>.'],
          ['gpa = g;', 'Copy the second value (<code>g</code>) into the field <code>gpa</code>.'],
          ['new Student("Sara", 3.6)', 'Java runs the constructor right after building the empty object.']
        ], ar: "المُنشئ اسمه مثل الصنف وبلا نوع إرجاع، ويعمل مباشرة عند new." },
        { type: 'p', en: "The names <code>n</code> and <code>g</code> are <b>parameters</b>: little boxes that receive the values when we call. (We chose short names different from the fields on purpose. In the next lesson you will see how to use the same names.)" },
        { type: 'check', q: "Which line is a correct constructor header for class <code>Book</code>?", options: ["void Book(String t) {", "Book(String t) {", "book(String t) {", "public Book {"], answer: 1,
          explain: "A constructor has the class name (same capitals) and no return type.", hint: "No void!" },

        { type: 'h', en: 'Constructor overloading: more than one way to build' },
        { type: 'p', en: "Sometimes you know all the data. Sometimes you know nothing yet. A class can have <b>several constructors</b> with different parameter lists. This is called <b>overloading</b>. Java chooses the one that matches the values you write in <code>new</code>." },
        { type: 'analogy', title: 'Two ways to join the gym', en: "At a gym you can join with the full form (name and phone), or you can get a quick guest pass with no details. Two entrances, same gym.",
          ar: "بابان لنفس النادي: تسجيل كامل أو تذكرة زائر سريعة." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Employee e1 = new Employee();
                  Employee e2 = new Employee("Huda", 9000);
                  e1.show();
                  e2.show();
              }
          }

          class Employee {
              String name;
              double salary;

              Employee() {
                  name = "Unknown";
                  salary = 4000;
              }

              Employee(String n, double s) {
                  name = n;
                  salary = s;
              }

              void show() {
                  System.out.println(name + " earns " + salary);
              }
          }
        `, out: J`
          Unknown earns 4000.0
          Huda earns 9000.0
        ` },
        { type: 'lines', rows: [
          ['Employee() { ... }', 'The <b>no-argument constructor</b>: used for <code>new Employee()</code>. It sets safe default values.'],
          ['Employee(String n, double s) { ... }', 'The <b>full-argument constructor</b>: used when you give a name and a salary.'],
          ['new Employee("Huda", 9000)', 'Two values (text, number) match the second constructor. The int 9000 becomes 9000.0.']
        ], ar: "تعدد المُنشئات بقوائم معاملات مختلفة يسمى تحميلًا زائدًا، وجافا تختار المناسب." },
        { type: 'check', q: "Which constructor runs for <code>new Employee()</code>?", options: ["The one with parameters", "The one with no parameters", "Both", "None"], answer: 1,
          explain: "Java matches the number and types of the values in brackets. No values means the no-argument constructor." },

        { type: 'h', en: 'The default constructor disappears' },
        { type: 'p', en: "If you write <b>no</b> constructor at all, Java secretly adds an empty one with no parameters. That is why <code>new Student()</code> worked in Lessons 1 and 2. But once you write <b>any</b> constructor, the secret one is gone." },
        { type: 'code', code: J`
          class Product {
              String name;
              Product(String n) { name = n; }
          }
          // Product p = new Product();      // ERROR: no such constructor
          Product p = new Product("Pen");     // OK
        ` },
        { type: 'note', kind: 'warn', en: "After you write a constructor with parameters, <code>new Product()</code> stops working unless you also write a no-argument constructor yourself.",
          ar: "إذا كتبت أي مُنشئ يختفي المُنشئ الافتراضي." },
        { type: 'check', q: "Class <code>Course</code> has only <code>Course(String c)</code>. Does <code>new Course()</code> compile?", options: ["Yes", "No"], answer: 1,
          explain: "Writing one constructor removes the free default one." },
        { type: 'steps', title: 'Worked example: an employee with a default', problem: "Read a name and a salary. Build one employee with the values and one employee with the defaults, then print both.",
          steps: [
            { en: "Step 1: Write the class with two fields.", code: J`
              class Employee {
                  String name;
                  double salary;
              }
            ` },
            { en: "Step 2: Add the no-argument constructor with safe defaults.", code: J`
              Employee() {
                  name = "Unknown";
                  salary = 4000;
              }
            ` },
            { en: "Step 3: Add the full-argument constructor.", code: J`
              Employee(String n, double s) {
                  name = n;
                  salary = s;
              }
            ` },
            { en: "Step 4: In main, read the two values and build both employees.", code: J`
              Employee e1 = new Employee();
              Employee e2 = new Employee(sc.next(), sc.nextDouble());
            ` },
            { en: "Step 5: Add show() and call it for each employee.", code: J`
              e1.show();
              e2.show();
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Employee e1 = new Employee();
                    Employee e2 = new Employee(sc.next(), sc.nextDouble());
                    e1.show();
                    e2.show();
                }
            }

            class Employee {
                String name;
                double salary;

                Employee() {
                    name = "Unknown";
                    salary = 4000;
                }

                Employee(String n, double s) {
                    name = n;
                    salary = s;
                }

                void show() {
                    System.out.println(name + " earns " + salary);
                }
            }
          `, stdin: 'Huda 9000', out: J`
            Unknown earns 4000.0
            Huda earns 9000.0
          `, ar: "مُنشئان: واحد بلا معاملات بقيم افتراضية، وآخر كامل بقيم تُقرأ من المستخدم." }
      ],
      mistakes: [
        { title: 'Writing a return type', en: "If you write <code>void</code>, it is no longer a constructor. It becomes an ordinary method.", code: J`
          void Student(String n) { name = n; }   // NOT a constructor
        ` },
        { title: 'Wrong name', en: "The constructor name must be exactly the class name.", code: J`
          class Student {
              Studnet(String n) { }   // ERROR: invalid method declaration
          }
        ` },
        { title: 'Wrong values in new', en: "The values in <code>new</code> must match one constructor in count, order and type.", code: J`
          new Employee(9000, "Huda");   // ERROR: order is wrong
        ` },
        { title: 'Expecting the free constructor', en: "After writing your own constructor with parameters, the free no-argument one is gone.", code: J`
          new Product();    // ERROR if only Product(String n) exists
        ` }
      ],
      remember: [
        "A <b>constructor</b> runs when you write <code>new</code> and fills the new object.",
        "Its name is the class name and it has <b>no return type</b>.",
        "A class may have several constructors: this is <b>overloading</b>.",
        "Java picks the constructor that matches the values in <code>new</code>.",
        "If you write no constructor, Java adds an empty one; if you write any, that free one is gone."
      ],
      rememberAr: "المُنشئ يعمل عند new ويملأ الكائن. اسمه اسم الصنف وبلا نوع إرجاع. يمكن وجود عدة مُنشئات (تحميل زائد). إذا كتبت أي مُنشئ يختفي المُنشئ الافتراضي.",
      practice: [
        { t: 'mcq', q: "Which statement about a constructor is true?",
          options: ["It must have a return type", "It has the same name as the class and no return type", "It must be called with a dot", "A class can have only one"], answer: 1,
          explain: "Same name as the class, no return type, and a class may have many (overloading)." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Book b = new Book("Java", 300);
                  System.out.println(b.title + " " + b.pages);
              }
          }

          class Book {
              String title;
              int pages;

              Book(String t, int p) {
                  title = t;
                  pages = p;
              }
          }
        `, answer: 'Java 300', explain: "The constructor copies the two incoming values into the fields." },
        { t: 'mcq', q: "Class <code>Course</code> declares only the constructor <code>Course(String code)</code>. Which statement is true?",
          options: [
            "<code>new Course()</code> compiles because Java always adds a default constructor.",
            "<code>new Course()</code> is a compile error; the free constructor is added only when a class has none.",
            "<code>new Course()</code> compiles and sets <code>code</code> to an empty string.",
            "A constructor cannot have a parameter."
          ], answer: 1,
          explain: "As soon as you write one constructor, you must write the no-argument one yourself if you need it." },
        { t: 'fill', q: "Complete the constructor of <code>Item</code>.", code: J`
          class Item {
              String name;
              double price;

              ___(String n, double p) {
                  name = ___;
                  price = p;
              }
          }
        `, answers: ['Item', 'n'], explain: "The constructor name is the class name, <code>Item</code>. Then the incoming <code>n</code> is stored in the field." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Tea a = new Tea();
                  Tea b = new Tea(3);
                  System.out.println(a.sugar + " " + b.sugar);
              }
          }

          class Tea {
              int sugar;

              Tea() {
                  sugar = 1;
              }

              Tea(int s) {
                  sugar = s;
              }
          }
        `, answer: '1 3', explain: "<code>new Tea()</code> uses the first constructor (sugar 1). <code>new Tea(3)</code> uses the second (sugar 3)." },
        { t: 'order', q: "Arrange the lines of a class <code>Player</code> with a constructor.",
          lines: [
            "class Player {",
            "    String name;",
            "    int score;",
            "    Player(String n, int s) {",
            "        name = n;",
            "        score = s;",
            "    }",
            "}"
          ], explain: "Fields first, then the constructor with its two assignments inside, then close the class." },
        { t: 'mcq', q: "What is wrong with this class?", code: J`
          class Car {
              String model;
              void Car(String m) {
                  model = m;
              }
          }
          // Car c = new Car("Camry");
        `, options: ["Nothing", "<code>void</code> makes it a normal method, so <code>new Car(\"Camry\")</code> finds no constructor", "model should be int", "The class name is wrong"], answer: 1,
          explain: "A constructor has no return type. With <code>void</code> it is a method that happens to be named Car." },
        { t: 'code', q: "Write a class <code>Product</code> with fields <code>name</code> (String), <code>price</code> (double) and <code>quantity</code> (int), a constructor <code>Product(String n, double p, int q)</code>, and a method <code>total()</code> returning price * quantity. In <code>main</code> read a one-word name, a price and a quantity (no prompts), build the product and print <code>NAME xQUANTITY = TOTAL</code>.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read name, price, quantity
                    // build a Product and print
                }
            }

            class Product {
                // fields, constructor, total()
            }
          `,
          tests: [
            { stdin: 'Pen 2.5 4', expected: 'Pen x4 = 10.0' },
            { stdin: 'Notebook 7.25 3', expected: 'Notebook x3 = 21.75' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String name = sc.next();
                    double price = sc.nextDouble();
                    int quantity = sc.nextInt();
                    Product p = new Product(name, price, quantity);
                    System.out.println(p.name + " x" + p.quantity + " = " + p.total());
                }
            }

            class Product {
                String name;
                double price;
                int quantity;

                Product(String n, double p, int q) {
                    name = n;
                    price = p;
                    quantity = q;
                }

                double total() {
                    return price * quantity;
                }
            }
          `,
          hint: "Inside the constructor write <code>price = p;</code> for each field.",
          explain: "The constructor copies each incoming value into its field. <code>total()</code> multiplies a double by an int, giving a double such as <code>10.0</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'this, copy constructors and chaining',
      titleAr: 'this ومُنشئ النسخ وربط المُنشئات',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: two names that look the same' },
        { type: 'p', en: "In Lesson 3 we used short parameter names like <code>n</code>. Real programmers prefer clear names: the parameter is <code>name</code> and the field is also <code>name</code>. But then Java cannot tell which is which. We need a way to say &quot;the field of THIS object&quot;." },
        { type: 'analogy', title: 'Two Alis in the class', en: "If two students are both named Ali, the teacher says &quot;Ali, the one sitting here&quot;. The word <code>this</code> means &quot;me, the object that is running this code right now&quot;.",
          ar: "this تعني: الكائن الحالي الذي ينفّذ هذا الكود." },
        { type: 'code', code: J`
          class Student {
              String name;

              Student(String name) {
                  this.name = name;
              }
          }
        ` },
        { type: 'lines', rows: [
          ['Student(String name) {', 'The parameter is called <code>name</code>.'],
          ['this.name', 'The <b>field</b> <code>name</code> of the current object (left side).'],
          ['= name;', 'The <b>parameter</b> <code>name</code> (right side). Store it in the field.']
        ], ar: "this.name هو الحقل، وname وحدها هي المعامل." },
        { type: 'note', kind: 'exam', en: "If you forget <code>this</code> and write <code>name = name;</code>, the parameter is copied to itself and the field stays <code>null</code>. The code compiles, so this bug is easy to miss!",
          ar: "كتابة name = name بدون this لا تغيّر الحقل." },
        { type: 'check', q: "In <code>this.price = price;</code>, what is on the LEFT?", options: ["the parameter", "the field of the current object", "a new variable", "a method"], answer: 1,
          explain: "<code>this.price</code> is the field. The right side is the parameter." },

        { type: 'h', en: 'Copy constructor: a real copy' },
        { type: 'p', en: "In Lesson 2 you learned that <code>b = a</code> only copies the arrow. How do we make a second, independent object with the same data? We write a constructor that takes an object of the <i>same class</i> and copies its fields. This is a <b>copy constructor</b>." },
        { type: 'analogy', title: 'The photocopier', en: "Giving your friend your key does not give a second flat. A photocopy of your timetable is a separate paper: if your friend writes on it, your paper stays clean.",
          ar: "الصورة المنسوخة ورقة مستقلة؛ الكتابة عليها لا تغيّر الأصل." },
        { type: 'code', code: J`
          Employee(Employee other) {
              this.name = other.name;
              this.salary = other.salary;
          }
        ` },
        { type: 'lines', rows: [
          ['Employee(Employee other)', 'The one parameter is an Employee: the one to copy.'],
          ['this.name = other.name;', 'Take the name from the other box and put it in my new box.'],
          ['this.salary = other.salary;', 'Same for the salary. The new object is separate.']
        ] },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Employee e2 = new Employee("Huda", 9000);
                  Employee e3 = new Employee(e2);
                  Employee e4 = e2;
                  e3.salary = 9500;
                  e4.salary = 7000;
                  System.out.println(e2.salary + " " + e3.salary + " " + e4.salary);
              }
          }

          class Employee {
              String name;
              double salary;

              Employee(String name, double salary) {
                  this.name = name;
                  this.salary = salary;
              }

              Employee(Employee other) {
                  this.name = other.name;
                  this.salary = other.salary;
              }
          }
        `, out: '7000.0 9500.0 7000.0' },
        { type: 'p', en: "Draw the boxes: e3 is its own box (9500.0). e2 and e4 are two arrows to the same box (7000.0)." },
        { type: 'code', code: J`
          e2 ---+
                +---> [ name = "Huda", salary = 7000.0 ]
          e4 ---+

          e3 -------> [ name = "Huda", salary = 9500.0 ]
        ` },
        { type: 'check', q: "<code>Employee x = new Employee(e2);</code> then <code>x.salary = 1;</code>. Is <code>e2.salary</code> changed?", options: ["Yes", "No"], answer: 1,
          explain: "The copy constructor built a separate box, so e2 is safe.", ar: "المُنشئ النسخي أنشأ كائنًا مستقلًا." },

        { type: 'h', en: 'Constructor chaining with this(...)' },
        { type: 'p', en: "Look at three constructors that all repeat the same assignments. Boring and risky! One constructor can <b>call another constructor of the same class</b> by writing <code>this(...)</code>. The call must be the <b>first line</b>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Circle c1 = new Circle();
                  System.out.println("---");
                  Circle c2 = new Circle(2.5);
                  System.out.println(c1.radius + " " + c2.radius);
              }
          }

          class Circle {
              double radius;
              String color;

              Circle() {
                  this(1.0);
                  System.out.println("no-arg constructor");
              }

              Circle(double radius) {
                  this(radius, "red");
                  System.out.println("one-arg constructor");
              }

              Circle(double radius, String color) {
                  this.radius = radius;
                  this.color = color;
                  System.out.println("full constructor");
              }
          }
        `, out: J`
          full constructor
          one-arg constructor
          no-arg constructor
          ---
          full constructor
          one-arg constructor
          1.0 2.5
        ` },
        { type: 'lines', title: 'Trace new Circle()', rows: [
          ['Circle()  ->  this(1.0);', 'Jump at once to <code>Circle(double)</code>.'],
          ['Circle(1.0)  ->  this(1.0, "red");', 'Jump again to the full constructor.'],
          ['Circle(1.0, "red")', 'Fields are set, prints &quot;full constructor&quot;. It ends.'],
          ['back in Circle(double)', 'Now its next line runs: prints &quot;one-arg constructor&quot;.'],
          ['back in Circle()', 'Last: prints &quot;no-arg constructor&quot;.']
        ], ar: "this(...) يستدعي مُنشئًا آخر، وينتهي الأعمق أولًا ثم نرجع للخارج." },
        { type: 'check', q: "Where must <code>this(...)</code> be in a constructor?", options: ["Anywhere", "The first statement", "The last statement", "Inside a loop"], answer: 1,
          explain: "A <code>this(...)</code> call must be the first statement." },
        { type: 'steps', title: 'Worked example: copy a price tag and change the copy', problem: "Read an item name, its price, and a sale price. Make a copy of the item and put the sale price on the copy only. Print both.",
          steps: [
            { en: "Step 1: The Item class with a normal constructor that uses this.", code: J`
              Item(String name, double price) {
                  this.name = name;
                  this.price = price;
              }
            ` },
            { en: "Step 2: Add the copy constructor.", code: J`
              Item(Item other) {
                  this.name = other.name;
                  this.price = other.price;
              }
            ` },
            { en: "Step 3: In main read the data and build the first item.", code: J`
              Item a = new Item(sc.next(), sc.nextDouble());
            ` },
            { en: "Step 4: Build the copy and change only the copy.", code: J`
              Item b = new Item(a);
              b.price = sc.nextDouble();
            ` },
            { en: "Step 5: Print both. The first price did not change.", code: J`
              System.out.println(a.name + " " + a.price);
              System.out.println(b.name + " " + b.price);
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Item a = new Item(sc.next(), sc.nextDouble());
                    Item b = new Item(a);
                    b.price = sc.nextDouble();
                    System.out.println(a.name + " " + a.price);
                    System.out.println(b.name + " " + b.price);
                }
            }

            class Item {
                String name;
                double price;

                Item(String name, double price) {
                    this.name = name;
                    this.price = price;
                }

                Item(Item other) {
                    this.name = other.name;
                    this.price = other.price;
                }
            }
          `, stdin: 'Pen 2.5 1.5', out: J`
            Pen 2.5
            Pen 1.5
          `, ar: "النسخة مستقلة: غيّرنا سعر b فبقي سعر a كما هو." }
      ],
      mistakes: [
        { title: 'name = name without this', en: "The parameter is assigned to itself. The field keeps its default value.", code: J`
          Book(String title) {
              title = title;        // field stays null
              this.title = title;   // correct
          }
        ` },
        { title: 'this(...) not on the first line', en: "Putting another statement before <code>this(...)</code> is a compile error.", code: J`
          Circle() {
              System.out.println("hi");
              this(1.0);     // ERROR
          }
        ` },
        { title: 'Using = instead of a copy constructor', en: "<code>Item b = a;</code> gives two arrows to one object. Use <code>new Item(a)</code> for a real copy.", code: J`
          Item b = a;           // same object
          Item c = new Item(a); // a real copy
        ` },
        { title: 'Using this in main', en: "<code>this</code> only exists inside an object's constructors and methods. In <code>main</code> there is no current object.", code: J`
          public static void main(String[] args) {
              this.name = "x";   // ERROR
          }
        ` }
      ],
      remember: [
        "<code>this</code> means the <b>current object</b>.",
        "<code>this.name = name;</code> stores the parameter (right) in the field (left).",
        "A <b>copy constructor</b> takes an object of the same class and copies its fields into a new object.",
        "<code>b = a</code> copies the arrow; <code>new T(a)</code> with a copy constructor copies the data.",
        "<code>this(...)</code> calls another constructor and must be the <b>first statement</b>."
      ],
      rememberAr: "this هي الكائن الحالي. this.name = name تخزّن المعامل في الحقل. مُنشئ النسخ يبني كائنًا مستقلًا بنفس القيم. this(...) تستدعي مُنشئًا آخر ويجب أن تكون أول سطر.",
      practice: [
        { t: 'mcq', q: "What does <code>this</code> refer to inside a constructor?",
          options: ["The class", "The object being built or used", "The parameter", "The last object created"], answer: 1,
          explain: "<code>this</code> is the current object." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Book b = new Book("Java", 300);
                  System.out.println(b.title + " " + b.pages);
              }
          }

          class Book {
              String title;
              int pages;

              Book(String title, int pages) {
                  title = title;
                  this.pages = pages;
              }
          }
        `, answer: 'null 300', explain: "<code>title = title;</code> changes only the parameter. The field <code>title</code> stays <code>null</code>.",
          explainAr: "بدون this بقي الحقل title يساوي null." },
        { t: 'fill', q: "Complete the <code>Point</code> class: a normal constructor and a copy constructor that reuses it.", code: J`
          class Point {
              int x, y;

              Point(int x, int y) {
                  ___.x = x;
                  this.y = y;
              }

              Point(___ p) {
                  ___(p.x, p.y);
              }
          }
        `, answers: ['this', 'Point', 'this'],
          explain: "<code>this.x</code> is the field. The copy constructor takes a <code>Point</code>, and <code>this(p.x, p.y)</code> calls the first constructor." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Wallet a = new Wallet(100);
                  Wallet b = new Wallet(a);
                  Wallet c = a;
                  a.cash = 40;
                  System.out.println(b.cash + " " + c.cash);
              }
          }

          class Wallet {
              int cash;

              Wallet(int cash) { this.cash = cash; }

              Wallet(Wallet other) { this.cash = other.cash; }
          }
        `, answer: '100 40', explain: "<code>b</code> is a separate copy (still 100). <code>c</code> is another arrow to a, so it sees 40." },
        { t: 'order', q: "Arrange the lines of a copy constructor for class <code>Student</code> (fields name and gpa).",
          lines: [
            "Student(Student other) {",
            "    this.name = other.name;",
            "    this.gpa = other.gpa;",
            "}"
          ], explain: "The header takes a Student, then each field of the new object is set from the other one." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Vehicle v = new Vehicle("Camry");
                  System.out.println(v.model + " " + v.year);
              }
          }

          class Vehicle {
              String model;
              int year;

              Vehicle() {
                  this("Generic", 2020);
                  System.out.println("A");
              }

              Vehicle(String model) {
                  this(model, 2024);
                  System.out.println("B");
              }

              Vehicle(String model, int year) {
                  this.model = model;
                  this.year = year;
                  System.out.println("C");
              }
          }
        `, answer: J`
          C
          B
          Camry 2024
        `, explain: "<code>new Vehicle(\"Camry\")</code> uses the one-argument constructor. It first calls the full one (prints C), then prints B. The no-argument constructor never runs." },
        { t: 'mcq', q: "Which rule about <code>this(...)</code> is correct?",
          options: ["It can appear anywhere in a constructor", "It must be the first statement of a constructor", "It can be used in any method", "It creates a second object"], answer: 1,
          explain: "It must be the first statement and only works inside a constructor. It does not build a new object." },
        { t: 'code', q: "Class <code>Item</code> (name, price) is started for you. Read a name, a price and a new price (no prompts). Make a copy of the item with a copy constructor, set the copy's price to the new price, and print the original as <code>NAME PRICE</code> and then the copy in the same format.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read, copy, change the copy, print both
                }
            }

            class Item {
                String name;
                double price;

                Item(String name, double price) {
                    this.name = name;
                    this.price = price;
                }

                // add the copy constructor
            }
          `,
          tests: [
            { stdin: 'Pen 2.5 3.0', expected: J`
              Pen 2.5
              Pen 3.0
            ` },
            { stdin: 'Cake 12 9.5', expected: J`
              Cake 12.0
              Cake 9.5
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Item a = new Item(sc.next(), sc.nextDouble());
                    Item b = new Item(a);
                    b.price = sc.nextDouble();
                    System.out.println(a.name + " " + a.price);
                    System.out.println(b.name + " " + b.price);
                }
            }

            class Item {
                String name;
                double price;

                Item(String name, double price) {
                    this.name = name;
                    this.price = price;
                }

                Item(Item other) {
                    this.name = other.name;
                    this.price = other.price;
                }
            }
          `,
          hint: "<code>Item(Item other) { this.name = other.name; this.price = other.price; }</code>",
          explain: "The copy is a separate object, so changing its price does not change the original." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 5
    {
      title: 'Encapsulation: private fields, getters and setters',
      titleAr: 'التغليف: الحقول الخاصة ودوال الجلب والتعيين',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: anyone can break the data' },
        { type: 'p', en: "Right now any code can write <code>acc.balance = -5000;</code>. A bank account with a negative balance because of a typing mistake is a disaster. We want the class to <b>guard</b> its own data." },
        { type: 'analogy', title: 'The bank counter', en: "In a bank you cannot walk into the vault and take money. You go to the counter, and the clerk checks the rules: &quot;Do you have enough money?&quot;. The vault is <b>private</b>. The counter is <b>public</b>.",
          ar: "الخزنة خاصة والشباك عام: لا تأخذ المال مباشرة بل عبر موظف يتحقق من القواعد." },
        { type: 'h', en: 'private and public' },
        { type: 'p', en: "<code>private</code> in front of a field means: only code inside the same class may touch it. <code>public</code> in front of a method means: anyone may call it. This idea is called <b>encapsulation</b>: data is hidden, and public methods are the controlled doors." },
        { type: 'code', code: J`
          class BankAccount {
              private double balance;

              public double getBalance() {
                  return balance;
              }
          }
        ` },
        { type: 'lines', rows: [
          ['private double balance;', 'Hidden. Code outside the class cannot write <code>acc.balance</code>.'],
          ['public double getBalance()', 'A public door that lets others <b>read</b> the value. Such a method is called a <b>getter</b>.'],
          ['return balance;', 'It gives back the hidden value.']
        ], ar: "الحقل private يخفيه، والدالة public تسمح بقراءته بطريقة مضبوطة." },
        { type: 'table', head: ['Modifier', 'Who can use it?'], rows: [
          ['<code>public</code>', 'Everyone'],
          ['<code>private</code>', 'Only code inside the same class'],
          ['(nothing, default)', 'Classes in the same package (folder)'],
          ['<code>protected</code>', 'Same package and subclasses (Unit 3)']
        ] },
        { type: 'check', q: "<code>acc.balance = 100;</code> is written in <code>Main</code>. <code>balance</code> is private in <code>BankAccount</code>. What happens?", options: ["It works", "Compile error", "balance becomes 0", "A NullPointerException"], answer: 1,
          explain: "Private fields cannot be used outside their class. The compiler stops you." },

        { type: 'h', en: 'Setters check the rules' },
        { type: 'p', en: "A <b>setter</b> is a public method that changes a private field. Its best job is to <b>check</b> the new value first. If the value is bad, it refuses." },
        { type: 'analogy', title: 'The door guard', en: "A guard at a gym door checks your card before you enter. A valid card gets in. A wrong card gets a polite &quot;no&quot;.",
          ar: "الحارس يتحقق من البطاقة قبل السماح بالدخول." },
        { type: 'code', code: J`
          public void setMark(int mark) {
              if (mark >= 0 && mark <= 100) {
                  this.mark = mark;
              } else {
                  System.out.println("Invalid mark");
              }
          }
        ` },
        { type: 'lines', rows: [
          ['public void setMark(int mark)', 'Setters usually return nothing (<code>void</code>) and take the new value.'],
          ['if (mark >= 0 && mark <= 100)', 'The rule: a mark must be between 0 and 100.'],
          ['this.mark = mark;', 'Good value: store it in the field.'],
          ['else { ... }', 'Bad value: refuse and tell the user. The field keeps its old value.']
        ] },
        { type: 'check', q: "What is the best reason to use a setter instead of a public field?", options: ["It runs faster", "It can check the new value", "It uses less memory", "Java requires it"], answer: 1,
          explain: "A setter is a place to protect the rules of the class." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  BankAccount acc = new BankAccount("Nora", 1000);
                  acc.deposit(250);
                  acc.withdraw(2000);
                  acc.withdraw(300);
                  System.out.println(acc.getOwner() + " " + acc.getBalance());
              }
          }

          class BankAccount {
              private String owner;
              private double balance;

              public BankAccount(String owner, double balance) {
                  this.owner = owner;
                  this.balance = balance;
              }

              public String getOwner() { return owner; }
              public double getBalance() { return balance; }

              public void deposit(double amount) {
                  if (amount > 0) {
                      balance += amount;
                  }
              }

              public boolean withdraw(double amount) {
                  if (amount <= 0 || amount > balance) {
                      System.out.println("Withdrawal of " + amount + " refused");
                      return false;
                  }
                  balance -= amount;
                  return true;
              }
          }
        `, out: J`
          Withdrawal of 2000.0 refused
          Nora 950.0
        ` },
        { type: 'lines', title: 'Trace the account', rows: [
          ['new BankAccount("Nora", 1000)', 'Balance 1000.0.'],
          ['acc.deposit(250)', 'Amount is positive, balance 1250.0.'],
          ['acc.withdraw(2000)', '2000 is more than 1250: refused, message printed.'],
          ['acc.withdraw(300)', 'Allowed: balance 950.0.']
        ], ar: "القواعد كلها داخل الصنف، فلا يمكن أن يصبح الرصيد سالبًا من الخارج." },
        { type: 'note', kind: 'tip', en: "There is no <code>setBalance</code> on purpose. The balance can only change through <code>deposit</code> and <code>withdraw</code>. Encapsulation is not &quot;a getter and setter for every field&quot;: it is about controlling HOW data changes.",
          ar: "لا نضع setBalance عمدًا." },
        { type: 'steps', title: 'Worked example: a safe bank account', problem: "Read an owner and a starting balance, a deposit and a withdrawal. Use a BankAccount whose balance is private. Print the final balance.",
          steps: [
            { en: "Step 1: Make the fields private.", code: J`
              private String owner;
              private double balance;
            ` },
            { en: "Step 2: Write a constructor that sets them (with this).", code: J`
              public BankAccount(String owner, double balance) {
                  this.owner = owner;
                  this.balance = balance;
              }
            ` },
            { en: "Step 3: Write the getters so others can read.", code: J`
              public String getOwner() { return owner; }
              public double getBalance() { return balance; }
            ` },
            { en: "Step 4: Write deposit and withdraw with checks.", code: J`
              public void deposit(double amount) {
                  if (amount > 0) { balance += amount; }
              }
            ` },
            { en: "Step 5: In main use only the public methods.", code: J`
              acc.deposit(sc.nextDouble());
              acc.withdraw(sc.nextDouble());
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    BankAccount acc = new BankAccount(sc.next(), sc.nextDouble());
                    acc.deposit(sc.nextDouble());
                    acc.withdraw(sc.nextDouble());
                    System.out.println(acc.getOwner() + " " + acc.getBalance());
                }
            }

            class BankAccount {
                private String owner;
                private double balance;

                public BankAccount(String owner, double balance) {
                    this.owner = owner;
                    this.balance = balance;
                }

                public String getOwner() { return owner; }
                public double getBalance() { return balance; }

                public void deposit(double amount) {
                    if (amount > 0) {
                        balance += amount;
                    }
                }

                public boolean withdraw(double amount) {
                    if (amount <= 0 || amount > balance) {
                        System.out.println("Withdrawal of " + amount + " refused");
                        return false;
                    }
                    balance -= amount;
                    return true;
                }
            }
          `, stdin: J`
            Nora 1000
            250 2000
          `, out: J`
            Withdrawal of 2000.0 refused
            Nora 1250.0
          `, ar: "main يستخدم الدوال العامة فقط، والرصيد الخاص محمي." }
      ],
      mistakes: [
        { title: 'Reaching a private field from another class', en: "Use the public getter instead.", code: J`
          System.out.println(acc.balance);       // ERROR
          System.out.println(acc.getBalance());  // correct
        ` },
        { title: 'Making fields public', en: "Public fields allow anyone to set invalid values. Make them private.", code: J`
          public double balance;   // anyone can write -5000
        ` },
        { title: 'A getter that returns void', en: "A getter must return the value, so its type is the field's type.", code: J`
          public void getBalance() { return balance; }   // ERROR
          public double getBalance() { return balance; } // correct
        ` },
        { title: 'A setter that does not check', en: "A setter that just copies any value gives no protection. Add an <code>if</code> for the rules.", code: J`
          public void setMark(int mark) { this.mark = mark; }   // accepts 500!
        ` }
      ],
      remember: [
        "<b>Encapsulation</b>: hide the data, offer public methods to use it.",
        "Rule of thumb: <b>fields private, methods public</b>.",
        "A <b>getter</b> returns a field; a <b>setter</b> changes it and can check the new value.",
        "Do not write a setter if outside code should not change the field.",
        "Private members are visible only inside their own class."
      ],
      rememberAr: "التغليف: الحقول private والدوال public. دالة الجلب تُرجع القيمة ودالة التعيين تغيّرها بعد التحقق. لا نكتب دالة تعيين إذا لم نرد السماح بالتغيير.",
      practice: [
        { t: 'mcq', q: "Which access modifier makes a field visible only inside its own class?",
          options: ["<code>public</code>", "<code>protected</code>", "no modifier (default)", "<code>private</code>"], answer: 3,
          explain: "<code>private</code> members are visible only inside their own class." },
        { t: 'mcq', q: "In a getter named <code>getName()</code> for a String field, what is the return type?", options: ["void", "int", "String", "boolean"], answer: 2,
          explain: "A getter returns the field, so its type matches the field's type: <code>String</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Thermostat t = new Thermostat();
                  t.setTarget(35);
                  t.setTarget(22);
                  t.setTarget(5);
                  System.out.println(t.getTarget());
              }
          }

          class Thermostat {
              private int target = 20;

              public void setTarget(int value) {
                  if (value >= 16 && value <= 30) {
                      target = value;
                  } else {
                      System.out.println(value + " out of range");
                  }
              }

              public int getTarget() {
                  return target;
              }
          }
        `, answer: J`
          35 out of range
          5 out of range
          22
        `, explain: "The setter rejects 35 and 5 and prints a message. Only 22 is accepted.", explainAr: "الدالة set ترفض القيم خارج المدى." },
        { t: 'fill', q: "Complete the encapsulated <code>Course</code> class.", code: J`
          class Course {
              ___ String code;

              public String getCode() {
                  ___ code;
              }

              public ___ setCode(String code) {
                  this.code = code;
              }
          }
        `, answers: ['private', 'return', 'void'],
          explain: "The field is <code>private</code>. The getter uses <code>return</code>. The setter returns nothing: <code>void</code>." },
        { t: 'mcq', q: "Why does the BankAccount example have NO <code>setBalance</code> method?",
          options: ["Java does not allow it", "So the balance can change only through deposit and withdraw, which check the rules", "Setters are slow", "It was forgotten"], answer: 1,
          explain: "Not every field needs a setter. Leaving it out protects the data." },
        { t: 'order', q: "Arrange a setter that accepts only a positive price.",
          lines: [
            "public void setPrice(double price) {",
            "    if (price > 0) {",
            "        this.price = price;",
            "    }",
            "}"
          ], explain: "The header, the check, the assignment inside the if, then close both blocks." },
        { t: 'mcq', q: "Which line causes a compile error in <code>Main</code>?", code: J`
          class Student {
              private int mark;
              public int getMark() { return mark; }
              public void setMark(int mark) { this.mark = mark; }
          }
          // in main: Student s = new Student();
        `, options: ["<code>s.setMark(80);</code>", "<code>System.out.println(s.getMark());</code>", "<code>s.mark = 80;</code>", "<code>int m = s.getMark();</code>"], answer: 2,
          explain: "<code>mark</code> is private, so only the class itself can use it directly." },
        { t: 'code', q: "Write a class <code>Student</code> with a private int field <code>mark</code> (starts at 0), a getter <code>getMark()</code>, and a setter <code>setMark(int m)</code> that accepts only 0 to 100; otherwise it prints <code>Invalid mark</code> and does not change the mark. In <code>main</code> read one integer, call the setter, then print <code>Mark: </code> and the mark. No prompts.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // build a Student, call setMark, print
                }
            }

            class Student {
                // private field, getter, setter
            }
          `,
          tests: [
            { stdin: '85', expected: 'Mark: 85' },
            { stdin: '150', expected: J`
              Invalid mark
              Mark: 0
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Student s = new Student();
                    s.setMark(sc.nextInt());
                    System.out.println("Mark: " + s.getMark());
                }
            }

            class Student {
                private int mark;

                public int getMark() {
                    return mark;
                }

                public void setMark(int m) {
                    if (m >= 0 && m <= 100) {
                        mark = m;
                    } else {
                        System.out.println("Invalid mark");
                    }
                }
            }
          `,
          hint: "Use <code>if (m &gt;= 0 &amp;&amp; m &lt;= 100)</code> inside the setter.",
          explain: "The field is private. All changes go through the setter, which checks the rule." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 6
    {
      title: 'toString and equals',
      titleAr: 'toString و equals',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: printing an object gives nonsense' },
        { type: 'p', en: "If you write <code>System.out.println(s1);</code> for a Student object with no special code, Java prints something like <code>Student@1b6d3586</code>. That is the class name and a memory number: useless for a human. We want to print <code>Reem (202301), GPA 3.8</code>." },
        { type: 'analogy', title: 'The name tag', en: "At a conference everyone wears a name tag. Without it you only see &quot;person number 47&quot;. <code>toString()</code> is the name tag of an object: a short readable description.",
          ar: "toString بطاقة تعريف نصية للكائن." },
        { type: 'p', en: "Every class automatically has a <code>toString()</code> method (inherited from a class called <code>Object</code>). We can write our own version. Writing a new version of an existing method is called <b>overriding</b>, and we put <code>@Override</code> above it as a safety label." },
        { type: 'code', code: J`
          @Override
          public String toString() {
              return name + " (" + id + "), GPA " + gpa;
          }
        ` },
        { type: 'lines', rows: [
          ['@Override', 'A label: &quot;I am replacing a method that already exists&quot;. The compiler checks that we spelled it right.'],
          ['public String toString()', 'Exactly this header. It returns a String.'],
          ['return name + " (" + id + ")..."', 'Build and return the text you want to see.']
        ], ar: "نكتب toString بالاسم والشكل نفسه ونُرجع نصًا مقروءًا." },
        { type: 'p', en: "After that, <code>println(s1)</code> and <code>\"Student: \" + s1</code> call <code>toString()</code> automatically." },
        { type: 'check', q: "Do you have to call <code>s1.toString()</code> yourself inside <code>println(s1)</code>?", options: ["Yes, always", "No, Java calls it for you", "Only with @Override", "Only for numbers"], answer: 1,
          explain: "<code>println</code> and <code>+</code> with text call toString automatically." },

        { type: 'h', en: '== and equals: same object or same data?' },
        { type: 'p', en: "Two students can have the same ID but be two different objects in memory. Java gives you two questions:" },
        { type: 'list', items: [
          "<code>a == b</code> asks: are these the <b>same box</b> (same arrow target)?",
          "<code>a.equals(b)</code> asks: do they hold <b>equal data</b>? (only if the class overrides equals)"
        ] },
        { type: 'analogy', title: 'Two copies of the same book', en: "The library has two copies of the same book. They are two different physical books (<code>==</code> is false). But they are the same book by title and ISBN (<code>equals</code> is true).",
          ar: "نسختان من الكتاب نفسه: جسمان مختلفان لكنهما الكتاب ذاته." },
        { type: 'code', code: J`
          @Override
          public boolean equals(Object obj) {
              if (obj == null || getClass() != obj.getClass()) return false;
              Student other = (Student) obj;
              return id == other.id;
          }
        ` },
        { type: 'lines', rows: [
          ['public boolean equals(Object obj)', 'The parameter MUST be <code>Object</code>. It accepts anything.'],
          ['if (obj == null || getClass() != obj.getClass()) return false;', 'Not an object, or a different class (a Student cannot equal a Car): answer false.'],
          ['Student other = (Student) obj;', 'Now we know it is a Student, so we treat it as one (a <i>cast</i>).'],
          ['return id == other.id;', 'Two students are equal when their IDs are equal.']
        ], ar: "المعامل يجب أن يكون Object، ثم نتحقق من النوع، ثم نقارن الحقول التي تعرّف التساوي." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Student a = new Student(202301, "Reem", 3.8);
                  Student b = new Student(202301, "Reem", 3.8);
                  Student c = a;
                  System.out.println(a);
                  System.out.println("Student: " + b);
                  System.out.println(a == b);
                  System.out.println(a.equals(b));
                  System.out.println(a == c);
              }
          }

          class Student {
              private int id;
              private String name;
              private double gpa;

              public Student(int id, String name, double gpa) {
                  this.id = id;
                  this.name = name;
                  this.gpa = gpa;
              }

              @Override
              public String toString() {
                  return name + " (" + id + "), GPA " + gpa;
              }

              @Override
              public boolean equals(Object obj) {
                  if (obj == null || getClass() != obj.getClass()) return false;
                  Student other = (Student) obj;
                  return id == other.id;
              }
          }
        `, out: J`
          Reem (202301), GPA 3.8
          Student: Reem (202301), GPA 3.8
          false
          true
          true
        ` },
        { type: 'p', en: "In memory: a and b are two different boxes (so <code>==</code> is false), but their IDs match (so <code>equals</code> is true). c is a second arrow to a's box (so <code>a == c</code> is true)." },
        { type: 'code', code: J`
          a ---+
               +---> [ 202301, Reem, 3.8 ]
          c ---+
          b -------> [ 202301, Reem, 3.8 ]
        ` },
        { type: 'note', kind: 'exam', en: "Writing <code>public boolean equals(Student other)</code> does NOT override equals. The parameter must be <code>Object</code>. With <code>@Override</code> the compiler tells you about this mistake.",
          ar: "معامل equals يجب أن يكون Object." },
        { type: 'check', q: "Two Coin objects both hold value 5, and Coin does NOT override equals. What is <code>x.equals(y)</code>?", options: ["true", "false"], answer: 1,
          explain: "Without an override, equals just compares arrows, like ==." },
        { type: 'steps', title: 'Worked example: print a room', problem: "Read a building letter and a room number twice. Print the first room as B-101 style and say whether the two rooms are equal.",
          steps: [
            { en: "Step 1: Class Room with two private fields and a constructor.", code: J`
              private String building;
              private int number;
              Room(String building, int number) {
                  this.building = building;
                  this.number = number;
              }
            ` },
            { en: "Step 2: Override toString to show building-number.", code: J`
              @Override
              public String toString() {
                  return building + "-" + number;
              }
            ` },
            { en: "Step 3: Override equals: same building AND same number.", code: J`
              @Override
              public boolean equals(Object o) {
                  if (o == null || getClass() != o.getClass()) return false;
                  Room r = (Room) o;
                  return building.equals(r.building) && number == r.number;
              }
            ` },
            { en: "Step 4: In main read two rooms and print.", code: J`
              System.out.println(r1);
              System.out.println(r1.equals(r2));
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Room r1 = new Room(sc.next(), sc.nextInt());
                    Room r2 = new Room(sc.next(), sc.nextInt());
                    System.out.println(r1);
                    System.out.println(r1.equals(r2));
                }
            }

            class Room {
                private String building;
                private int number;

                Room(String building, int number) {
                    this.building = building;
                    this.number = number;
                }

                @Override
                public String toString() {
                    return building + "-" + number;
                }

                @Override
                public boolean equals(Object o) {
                    if (o == null || getClass() != o.getClass()) return false;
                    Room r = (Room) o;
                    return building.equals(r.building) && number == r.number;
                }
            }
          `, stdin: 'B 101 B 101', out: J`
            B-101
            true
          `, ar: "نقارن النصوص بـ equals وليس ==." }
      ],
      mistakes: [
        { title: 'Comparing text fields with ==', en: "Inside equals, compare Strings with <code>.equals</code>, not <code>==</code>.", code: J`
          return building == r.building;          // risky
          return building.equals(r.building);     // correct
        ` },
        { title: 'Wrong equals parameter', en: "The parameter must be <code>Object</code>, otherwise you overload and do not override.", code: J`
          public boolean equals(Room r) { ... }    // NOT an override
        ` },
        { title: 'toString that prints instead of returning', en: "<code>toString()</code> must <b>return</b> a String. Do not print inside it.", code: J`
          public String toString() {
              System.out.println(name);   // wrong idea
          }
        ` },
        { title: 'Forgetting public', en: "<code>toString</code> in <code>Object</code> is public, so your version must be public too.", code: J`
          String toString() { return name; }   // ERROR: weaker access
        ` }
      ],
      remember: [
        "<code>toString()</code> returns a readable text. <code>println</code> and <code>+</code> call it automatically.",
        "Override with the exact header and the label <code>@Override</code>.",
        "<code>==</code> asks: same object? <code>equals</code> asks: same data?",
        "<code>equals</code> must take an <code>Object</code>; check null and class, cast, then compare fields.",
        "Compare text fields with <code>.equals</code>."
      ],
      rememberAr: "toString تُرجع نصًا مقروءًا وتُستدعى تلقائيًا. == تسأل: هل هو الكائن نفسه؟ و equals تسأل: هل البيانات متساوية؟ ومعاملها Object.",
      practice: [
        { t: 'mcq', q: "What does <code>System.out.println(myCar)</code> print if <code>Car</code> does NOT override <code>toString()</code>?",
          options: ["The car's fields", "Something like <code>Car@1b6d3586</code>", "An error", "Nothing"], answer: 1,
          explain: "The inherited toString prints the class name and a memory number." },
        { t: 'mcq', q: "<code>Car</code> overrides <code>toString()</code> to return its plate number. What does <code>System.out.println(\"Car: \" + myCar);</code> do?",
          options: ["Compile error", "Prints <code>Car: </code> followed by the result of <code>myCar.toString()</code>", "Prints the memory address", "Prints only <code>Car: </code>"], answer: 1,
          explain: "Joining an object to text calls its toString automatically." },
        { t: 'output', q: "<code>Coin</code> does not override <code>equals</code>. What is printed?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Coin x = new Coin(5);
                  Coin y = new Coin(5);
                  System.out.println(x.equals(y));
                  System.out.println(x == y);
                  System.out.println(x.value == y.value);
              }
          }

          class Coin {
              int value;
              Coin(int value) { this.value = value; }
          }
        `, answer: J`
          false
          false
          true
        `, explain: "Without an override, equals compares arrows like ==. Two different objects give false. The two int values are equal, so the last line is true." },
        { t: 'fill', q: "Complete the toString of <code>Player</code>.", code: J`
          class Player {
              String name;
              int score;

              ___
              public ___ toString() {
                  ___ name + ": " + score;
              }
          }
        `, answers: ['@Override', 'String', 'return'],
          explain: "The label <code>@Override</code>, the return type <code>String</code>, and <code>return</code> to give back the text." },
        { t: 'order', q: "Arrange the lines of an <code>equals</code> override for a <code>Book</code> whose identity is its <code>isbn</code> String.",
          lines: [
            "@Override",
            "public boolean equals(Object obj) {",
            "    if (obj == null || getClass() != obj.getClass()) return false;",
            "    Book other = (Book) obj;",
            "    return isbn.equals(other.isbn);",
            "}"
          ], explain: "Reject null and other classes first; then it is safe to cast and compare." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Room r1 = new Room("B", 101);
                  Room r2 = new Room("B", 101);
                  Room r3 = new Room("F", 101);
                  System.out.println(r1 + " " + r3);
                  System.out.println(r1 == r2);
                  System.out.println(r1.equals(r2));
                  System.out.println(r1.equals(r3));
              }
          }

          class Room {
              private String building;
              private int number;

              Room(String building, int number) {
                  this.building = building;
                  this.number = number;
              }

              @Override
              public String toString() {
                  return building + "-" + number;
              }

              @Override
              public boolean equals(Object o) {
                  if (o == null || getClass() != o.getClass()) return false;
                  Room r = (Room) o;
                  return building.equals(r.building) && number == r.number;
              }
          }
        `, answer: J`
          B-101 F-101
          false
          true
          false
        `, explain: "toString is used in the first line. == compares arrows (different objects). equals compares building and number." },
        { t: 'mcq', q: "Why does <code>public boolean equals(Room r)</code> NOT override <code>Object.equals</code>?",
          options: ["It is not public", "Its parameter type is Room, not Object, so it is a different (overloaded) method", "It returns boolean", "Room is a bad name"], answer: 1,
          explain: "To override, the parameter type must be exactly <code>Object</code>." },
        { t: 'code', q: "Class <code>Room</code> is started for you. Add <code>toString()</code> returning <code>BUILDING-NUMBER</code> and <code>equals</code> (same building and same number). Main is written: it reads two rooms, prints the first, then prints <code>true</code> or <code>false</code>.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Room r1 = new Room(sc.next(), sc.nextInt());
                    Room r2 = new Room(sc.next(), sc.nextInt());
                    System.out.println(r1);
                    System.out.println(r1.equals(r2));
                }
            }

            class Room {
                private String building;
                private int number;

                Room(String building, int number) {
                    this.building = building;
                    this.number = number;
                }

                // add toString and equals
            }
          `,
          tests: [
            { stdin: 'B 101 B 101', expected: J`
              B-101
              true
            ` },
            { stdin: 'B 101 F 101', expected: J`
              B-101
              false
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Room r1 = new Room(sc.next(), sc.nextInt());
                    Room r2 = new Room(sc.next(), sc.nextInt());
                    System.out.println(r1);
                    System.out.println(r1.equals(r2));
                }
            }

            class Room {
                private String building;
                private int number;

                Room(String building, int number) {
                    this.building = building;
                    this.number = number;
                }

                @Override
                public String toString() {
                    return building + "-" + number;
                }

                @Override
                public boolean equals(Object o) {
                    if (o == null || getClass() != o.getClass()) return false;
                    Room r = (Room) o;
                    return building.equals(r.building) && number == r.number;
                }
            }
          `,
          hint: "Compare the building with <code>building.equals(r.building)</code> and the number with <code>==</code>.",
          explain: "toString builds the readable text; equals compares the identifying fields after the class check." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 7
    {
      title: 'Static members: things shared by the whole class',
      titleAr: 'الأعضاء الساكنة: ما يشترك فيه الصنف كله',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: counting all objects' },
        { type: 'p', en: "Each Ticket object has its own number. But who remembers &quot;how many tickets did we print today&quot;? One single card cannot know that. We need ONE value that belongs to the whole class, not to one object." },
        { type: 'analogy', title: 'The notice board', en: "Every student has a personal locker (an instance field: each one has its own). But the whole school has just one notice board (a static field): everybody sees the same board, and if someone changes it, everyone sees the change.",
          ar: "الخزانة لكل طالب (حقل عادي)، ولوحة الإعلانات واحدة للجميع (حقل ساكن)." },
        { type: 'p', en: "A field marked <code>static</code> has <b>one copy</b> for the whole class. We reach it with the class name: <code>Ticket.count</code>." },
        { type: 'code', code: J`
          class Ticket {
              private static int count = 0;
              private int number;

              public Ticket() {
                  count++;
                  number = count;
              }
          }
        ` },
        { type: 'lines', rows: [
          ['private static int count = 0;', 'ONE shared counter, starting at 0. It is not inside any one ticket.'],
          ['private int number;', 'A normal field: every ticket has its own number.'],
          ['count++;', 'Each time a ticket is built, the shared counter goes up by one.'],
          ['number = count;', 'The new ticket takes the current count as its own number.']
        ], ar: "العداد الساكن نسخة واحدة تزيد عند كل إنشاء، ورقم التذكرة لكل كائن." },
        { type: 'check', q: "How many copies of a <code>static</code> field exist if you build 10 objects?", options: ["10", "1", "0", "11"], answer: 1,
          explain: "A static field belongs to the class: exactly one copy." },

        { type: 'h', en: 'Static methods' },
        { type: 'p', en: "A <code>static</code> method also belongs to the class. You call it with the class name, without any object: you already did this with <code>Math.sqrt(2)</code>. A static method has <b>no current object</b>, so it cannot use <code>this</code> and cannot use normal fields." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println("Tickets so far: " + Ticket.getCount());
                  Ticket a = new Ticket();
                  Ticket b = new Ticket();
                  Ticket c = new Ticket();
                  System.out.println(a.getNumber() + " " + b.getNumber() + " " + c.getNumber());
                  System.out.println("Tickets so far: " + Ticket.getCount());
                  System.out.println(Ticket.PRICE);
              }
          }

          class Ticket {
              public static final int PRICE = 15;
              private static int count = 0;
              private int number;

              public Ticket() {
                  count++;
                  number = count;
              }

              public int getNumber() { return number; }

              public static int getCount() { return count; }
          }
        `, out: J`
          Tickets so far: 0
          1 2 3
          Tickets so far: 3
          15
        ` },
        { type: 'lines', rows: [
          ['Ticket.getCount()', 'Called on the class name. It works even before any ticket exists.'],
          ['a.getNumber()', 'A normal method: it needs an object, and returns that ticket\'s own number.'],
          ['public static final int PRICE = 15;', 'A <b>constant</b>: <code>static</code> (shared) and <code>final</code> (cannot change). Constant names are written in CAPITAL LETTERS.']
        ] },
        { type: 'table', head: ['', 'Instance (normal)', 'Static'], rows: [
          ['Belongs to', 'each object', 'the class'],
          ['Copies', 'one per object', 'only one'],
          ['Used with', '<code>object.member</code>', '<code>ClassName.member</code>'],
          ['Can use <code>this</code>?', 'yes', 'no']
        ] },
        { type: 'check', q: "Which call is correct for a static method <code>getCount()</code> of <code>Ticket</code>?", options: ["a.getCount() only", "Ticket.getCount()", "getCount.Ticket()", "new getCount()"], answer: 1,
          explain: "Use the class name. (Calling through an object also compiles, but the class name is the clear way.)" },
        { type: 'note', kind: 'exam', en: "The error <i>non-static variable cannot be referenced from a static context</i> appears when a static method (like <code>main</code>) uses a normal field or method without an object. Fix: build an object first, or make the member static if it truly belongs to the class.",
          ar: "خطأ شائع: استخدام حقل غير ساكن داخل دالة ساكنة بدون كائن." },
        { type: 'code', code: J`
          class Converter {
              private double rate = 3.75;

              public static double toFahrenheit(double c) {
                  return c * 9 / 5 + 32;     // OK: uses only its parameter
              }

              public static double toRiyal(double dollars) {
                  return dollars * rate;     // ERROR: rate is not static
              }
          }
        ` },
        { type: 'steps', title: 'Worked example: count the tickets', problem: "Read n, the number of tickets to print. Build n tickets and show the number of the last one and the total made.",
          steps: [
            { en: "Step 1: Write the class with a static counter and a normal number.", code: J`
              private static int count = 0;
              private int number;
            ` },
            { en: "Step 2: In the constructor, increase the counter and take it as the ticket's number.", code: J`
              public Ticket() {
                  count++;
                  number = count;
              }
            ` },
            { en: "Step 3: Add a getter for the number and a static getter for the count.", code: J`
              public int getNumber() { return number; }
              public static int getCount() { return count; }
            ` },
            { en: "Step 4: In main, build n tickets in a loop and keep the last one.", code: J`
              Ticket last = null;
              for (int i = 0; i < n; i++) {
                  last = new Ticket();
              }
            ` },
            { en: "Step 5: Print the last ticket's number and the shared count.", code: J`
              System.out.println("Last ticket: " + last.getNumber());
              System.out.println("Tickets: " + Ticket.getCount());
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Ticket last = null;
                    for (int i = 0; i < n; i++) {
                        last = new Ticket();
                    }
                    System.out.println("Last ticket: " + last.getNumber());
                    System.out.println("Tickets: " + Ticket.getCount());
                }
            }

            class Ticket {
                private static int count = 0;
                private int number;

                public Ticket() {
                    count++;
                    number = count;
                }

                public int getNumber() { return number; }

                public static int getCount() { return count; }
            }
          `, stdin: '3', out: J`
            Last ticket: 3
            Tickets: 3
          `, ar: "العدّاد الساكن يعدّ كل الكائنات، ولكل تذكرة رقمها الخاص." }
      ],
      mistakes: [
        { title: 'Using an instance field in main', en: "<code>main</code> is static. It cannot use a normal field without an object.", code: J`
          public static void main(String[] args) {
              count++;     // ERROR if count is not static
          }
        ` },
        { title: 'Using this in a static method', en: "A static method has no current object, so <code>this</code> does not exist.", code: J`
          public static int getCount() {
              return this.count;    // ERROR
          }
        ` },
        { title: 'Making a per-object value static', en: "If every object needs its own value (like a ticket number), do not make it static: all objects would share it.", code: J`
          private static int number;   // all tickets would have the same number!
        ` },
        { title: 'Changing a constant', en: "A <code>final</code> field can never change after it is set.", code: J`
          Ticket.PRICE = 20;    // ERROR: PRICE is final
        ` }
      ],
      remember: [
        "A <b>static</b> field has one copy shared by the whole class; a normal field has one copy per object.",
        "Reach static members with the class name: <code>Ticket.getCount()</code>.",
        "A static method has no <code>this</code> and cannot use normal fields directly.",
        "<code>static final</code> means a constant; write its name in CAPITAL LETTERS.",
        "Counters that count objects are the classic use of <code>static</code>."
      ],
      rememberAr: "الحقل الساكن له نسخة واحدة للصنف كله، والعادي نسخة لكل كائن. نصل للساكن باسم الصنف. الدالة الساكنة لا تملك this. static final تعني ثابتًا.",
      practice: [
        { t: 'mcq', q: "A shared counter of all <code>Student</code> objects created should be declared...",
          options: ["as a normal field", "as a <code>static</code> field", "inside main", "as a constructor"], answer: 1,
          explain: "One copy for the whole class means <code>static</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Dog a = new Dog();
                  Dog b = new Dog();
                  System.out.println(Dog.total);
              }
          }

          class Dog {
              static int total = 0;
              Dog() { total++; }
          }
        `, answer: '2', explain: "Each constructor call adds 1 to the one shared <code>total</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Visitor v1 = new Visitor();
                  Visitor v2 = new Visitor();
                  Visitor v3 = new Visitor();
                  System.out.println(v1.visits + " " + Visitor.total);
                  v2.visits += 5;
                  System.out.println(v2.visits + " " + v3.visits + " " + Visitor.total);
              }
          }

          class Visitor {
              static int total = 0;
              int visits = 0;

              Visitor() {
                  total++;
                  visits++;
              }
          }
        `, answer: J`
          1 3
          6 1 3
        `, explain: "<code>total</code> is shared, so three objects make it 3. Each object has its own <code>visits</code> starting at 1; only v2 got +5.", explainAr: "total مشترك أما visits فلكل كائن قيمته." },
        { t: 'mcq', q: "Which line causes a compile error?", code: J`
          class Counter {
              private int value;
              private static int created;

              public static void reset() {
                  created = 0;      // line A
                  value = 0;        // line B
              }

              public void increment() {
                  value++;          // line C
                  created++;        // line D
              }
          }
        `, options: ["Line A", "Line B", "Line C", "Line D"], answer: 1,
          explain: "<code>reset()</code> is static, so it cannot touch the normal field <code>value</code>. Normal methods (C and D) may use both kinds." },
        { t: 'fill', q: "Each ticket gets the next number from a counter shared by the whole class.", code: J`
          class Ticket {
              private ___ int nextNumber = 100;
              private int number;

              public Ticket() {
                  number = nextNumber;
                  nextNumber++;
              }

              public ___ int getNextNumber() {
                  return nextNumber;
              }
          }
        `, answers: ['static', 'static'],
          explain: "The counter must be shared: <code>static</code>. The getter is also <code>static</code> so you can call <code>Ticket.getNextNumber()</code>." },
        { t: 'mcq', q: "What does <code>public static final double VAT = 0.15;</code> declare?",
          options: ["A normal field", "A constant shared by the class", "A method", "A constructor"], answer: 1,
          explain: "<code>static</code> (shared) plus <code>final</code> (cannot change) makes a constant." },
        { t: 'code', q: "Read an integer <code>n</code>, then <code>n</code> lines each with a one-word name and an integer score. Store them as <code>Student</code> objects in an array. <code>Student</code> needs private fields, a constructor, getters, a <code>toString()</code> returning <code>NAME: SCORE</code>, and a static counter of created students. Print every student, then <code>Top: NAME</code> (the first student with the highest score), then <code>Students created: COUNT</code> using the static counter. No prompts.",
          qAr: "خزّن الطلاب في مصفوفة، واطبع كلًا منهم ثم صاحب أعلى درجة ثم العدد من العدّاد الساكن.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Student[] list = new Student[n];
                    // read and create students, then print the report
                }
            }

            class Student {
                // private fields, static counter, constructor, getters, toString
            }
          `,
          tests: [
            { stdin: J`
              3
              Ali 85
              Mona 92
              Fahad 78
            `, expected: J`
              Ali: 85
              Mona: 92
              Fahad: 78
              Top: Mona
              Students created: 3
            ` },
            { stdin: J`
              2
              Yara 70
              Sami 70
            `, expected: J`
              Yara: 70
              Sami: 70
              Top: Yara
              Students created: 2
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Student[] list = new Student[n];
                    for (int i = 0; i < n; i++) {
                        list[i] = new Student(sc.next(), sc.nextInt());
                    }
                    Student top = list[0];
                    for (Student s : list) {
                        System.out.println(s);
                        if (s.getScore() > top.getScore()) {
                            top = s;
                        }
                    }
                    System.out.println("Top: " + top.getName());
                    System.out.println("Students created: " + Student.getCount());
                }
            }

            class Student {
                private static int count = 0;
                private String name;
                private int score;

                public Student(String name, int score) {
                    this.name = name;
                    this.score = score;
                    count++;
                }

                public String getName() { return name; }
                public int getScore() { return score; }
                public static int getCount() { return count; }

                @Override
                public String toString() {
                    return name + ": " + score;
                }
            }
          `,
          hint: "Use <code>&gt;</code> (not <code>&gt;=</code>) when searching for the top score so the first student wins a tie.",
          explain: "The static <code>count</code> grows in the constructor, so it equals the number of objects created. <code>println(s)</code> calls the overridden <code>toString()</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 8
    {
      title: 'Abstract classes and UML diagrams',
      titleAr: 'الأصناف المجردة ومخططات UML',
      minutes: 30,
      body: [
        { type: 'h', en: 'UML: draw the class before you code' },
        { type: 'p', en: "Before building a house the architect draws a plan. Before writing a class, programmers draw a small box called a <b>UML class diagram</b>. Everybody can read the plan in a minute, and you can turn it into code box by box." },
        { type: 'analogy', title: 'The ID card layout', en: "A UML box is like the layout of an ID card: the top shows the name of the card, the middle shows the information lines, and the bottom shows what the card can do.",
          ar: "مخطط UML مثل تصميم بطاقة: الاسم في الأعلى، المعلومات في الوسط، والعمليات في الأسفل." },
        { type: 'code', code: J`
          +-----------------------------------------+
          |                  Book                   |
          +-----------------------------------------+
          | - title: String                         |
          | - pages: int                            |
          +-----------------------------------------+
          | + Book(title: String, pages: int)       |
          | + getTitle(): String                    |
          | + getPages(): int                       |
          +-----------------------------------------+
        ` },
        { type: 'lines', title: 'Read the box', rows: [
          ['Book', 'Top part: the class name.'],
          ['- title: String', 'Middle part: a field. <code>-</code> means private. After the colon comes the type.'],
          ['+ Book(title: String, pages: int)', 'Bottom part: a constructor. <code>+</code> means public. It has no return type.'],
          ['+ getPages(): int', 'A public method that returns an int.']
        ], ar: "أعلى: الاسم. وسط: الحقول. أسفل: المُنشئات والدوال. الرمز - خاص و + عام." },
        { type: 'table', head: ['UML', 'Meaning in Java'], rows: [
          ['<code>+</code>', '<code>public</code>'],
          ['<code>-</code>', '<code>private</code>'],
          ['<code>#</code>', '<code>protected</code>'],
          ['<u>underlined</u> member', '<code>static</code> member'],
          ['<code>name: Type</code>', 'field <code>Type name;</code>'],
          ['<code>method(p: Type): Ret</code>', '<code>Ret method(Type p)</code>']
        ] },
        { type: 'check', q: "What does <code>- balance: double</code> mean in a UML box?", options: ["A public method", "A private field of type double", "A static constant", "A constructor"], answer: 1,
          explain: "<code>-</code> is private. <code>name: Type</code> without brackets is a field." },
        { type: 'steps', title: 'Worked example: from the UML box to Java', problem: "Turn the Book box above into Java code, then read a title and the pages and print them.",
          steps: [
            { en: "Step 1: Class name from the top part.", code: J`
              class Book {
              }
            ` },
            { en: "Step 2: Fields from the middle part. Every minus sign means private.", code: J`
              private String title;
              private int pages;
            ` },
            { en: "Step 3: The constructor from the bottom part. + means public. Use this because the names match.", code: J`
              public Book(String title, int pages) {
                  this.title = title;
                  this.pages = pages;
              }
            ` },
            { en: "Step 4: The two getters.", code: J`
              public String getTitle() { return title; }
              public int getPages() { return pages; }
            ` },
            { en: "Step 5: Use the class in main.", code: J`
              Book b = new Book(sc.next(), sc.nextInt());
              System.out.println(b.getTitle() + " has " + b.getPages() + " pages");
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Book b = new Book(sc.next(), sc.nextInt());
                    System.out.println(b.getTitle() + " has " + b.getPages() + " pages");
                }
            }

            class Book {
                private String title;
                private int pages;

                public Book(String title, int pages) {
                    this.title = title;
                    this.pages = pages;
                }

                public String getTitle() { return title; }
                public int getPages() { return pages; }
            }
          `, stdin: 'Java 300', out: 'Java has 300 pages', ar: "حوّل المخطط صندوقًا صندوقًا: الاسم ثم الحقول ثم المُنشئ والدوال." },

        { type: 'h', en: 'Abstract classes: a plan that is too general' },
        { type: 'p', en: "Sometimes an idea is too general to build. What is the area of &quot;a shape&quot;? A circle and a rectangle compute it in different ways. We can write a class <code>Shape</code> that holds what is common (a color) but is <code>abstract</code>: nobody may build a plain <code>Shape</code> with <code>new</code>." },
        { type: 'analogy', title: 'The word &quot;vehicle&quot;', en: "Nobody drives &quot;a vehicle&quot;. You drive a car or a bus. &quot;Vehicle&quot; is an idea that says every vehicle has wheels and can move, but it leaves the details to cars and buses.",
          ar: "لا أحد يقود مركبة عامة؛ نقود سيارة أو حافلة. الصنف المجرد فكرة عامة." },
        { type: 'p', en: "An <b>abstract method</b> has a header but <b>no body</b>. Every concrete class that extends the abstract class must write the body. (The words <code>extends</code> and <code>super</code> are explained properly in Unit 3; here just notice the idea.)" },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Rectangle r = new Rectangle("blue", 3, 4);
                  r.describe();
                  // Shape s = new Shape("red");   // ERROR: Shape is abstract
              }
          }

          abstract class Shape {
              private String color;

              public Shape(String color) { this.color = color; }

              public String getColor() { return color; }

              public abstract double area();

              public void describe() {
                  System.out.println(getColor() + " shape with area " + area());
              }
          }

          class Rectangle extends Shape {
              private double width, height;

              public Rectangle(String color, double width, double height) {
                  super(color);
                  this.width = width;
                  this.height = height;
              }

              public double area() { return width * height; }
          }
        `, out: 'blue shape with area 12.0' },
        { type: 'lines', rows: [
          ['abstract class Shape', 'A class that cannot be built with <code>new</code>.'],
          ['public abstract double area();', 'Abstract method: no body, ends with a semicolon.'],
          ['class Rectangle extends Shape', 'A concrete class that is a kind of Shape.'],
          ['public double area() { ... }', 'Rectangle supplies the missing body.'],
          ['r.describe()', 'Shape\'s normal method calls <code>area()</code>, and Rectangle\'s version runs.']
        ], ar: "الدالة المجردة بلا جسم، والصنف الفرعي ملزم بكتابتها." },
        { type: 'note', kind: 'tip', en: "An abstract class can still have fields, a constructor and normal methods. Only the abstract methods are left empty.",
          ar: "الصنف المجرد قد يحتوي حقولًا ودوالًا عادية." },
        { type: 'check', q: "Which line gives a compile error if <code>Shape</code> is abstract?", options: ["Rectangle r = new Rectangle(\"red\", 1, 2);", "Shape s = new Shape(\"red\");", "r.describe();", "double a = r.area();"], answer: 1,
          explain: "You cannot build an object of an abstract class with <code>new</code>." }
      ],
      mistakes: [
        { title: 'Building an abstract class', en: "<code>new Shape(...)</code> is a compile error. Build a concrete subclass.", code: J`
          Shape s = new Shape("red");   // ERROR
        ` },
        { title: 'Giving an abstract method a body', en: "An abstract method has no braces, only a semicolon.", code: J`
          public abstract double area() { return 0; }   // ERROR
          public abstract double area();                // correct
        ` },
        { title: 'Forgetting the subclass method', en: "A concrete class that extends an abstract class must write every abstract method.", code: J`
          class Circle extends Shape { }   // ERROR: area() is missing
        ` },
        { title: 'Mixing up the UML signs', en: "<code>+</code> is public, <code>-</code> is private. The type goes after a colon.", code: J`
          - title: String      // private String title;
          + getTitle(): String // public String getTitle()
        ` }
      ],
      remember: [
        "A <b>UML class box</b> has three parts: name, fields, methods.",
        "<code>+</code> public, <code>-</code> private, <code>#</code> protected; underlined means static.",
        "An <b>abstract class</b> cannot be built with <code>new</code>.",
        "An <b>abstract method</b> has no body; subclasses must write it.",
        "Use abstract classes for general ideas such as Shape or Employee."
      ],
      rememberAr: "مخطط UML صندوق من ثلاثة أجزاء: الاسم والحقول والدوال. + عام و - خاص. الصنف المجرد لا يُنشأ منه كائن، والدالة المجردة بلا جسم وتكتبها الأصناف الفرعية.",
      practice: [
        { t: 'mcq', q: "In a UML class diagram, what does <code>- balance: double</code> mean?",
          options: ["A public method named balance", "A private field named balance of type double", "A static field", "A protected field"], answer: 1,
          explain: "<code>-</code> is private and <code>name: Type</code> is a field." },
        { t: 'mcq', q: "In UML, <code>+ getName(): String</code> is...",
          options: ["a private field", "a public method returning a String", "a constructor", "a static constant"], answer: 1,
          explain: "Brackets make it a method; <code>+</code> makes it public; the type after the colon is the return type." },
        { t: 'mcq', q: "<code>Shape</code> is declared <code>abstract class Shape</code>. Which statement is true?",
          options: ["<code>new Shape()</code> creates a shape with area 0.", "<code>Shape</code> cannot have fields.", "You cannot build objects with <code>new Shape(...)</code>, but you can build objects of concrete subclasses.", "Every method in <code>Shape</code> must be abstract."], answer: 2,
          explain: "An abstract class cannot be built directly. It may still have fields, constructors and normal methods." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Square s = new Square(5);
                  s.show();
              }
          }

          abstract class Shape {
              public abstract double area();

              public void show() {
                  System.out.println("Area = " + area());
              }
          }

          class Square extends Shape {
              private double side;

              public Square(double side) {
                  this.side = side;
              }

              public double area() {
                  return side * side;
              }
          }
        `, answer: 'Area = 25.0', explain: "<code>show()</code> calls <code>area()</code>, and Square's version computes 5 * 5 = 25.0." },
        { t: 'fill', q: "Complete the abstract class.", code: J`
          ___ class Animal {
              public ___ void sound();
          }
        `, answers: ['abstract', 'abstract'],
          explain: "Both the class and the method without a body are marked <code>abstract</code>." },
        { t: 'order', q: "Arrange the lines of a class that matches this UML: <code>Player</code> with <code>- name: String</code> and <code>+ getName(): String</code>.",
          lines: [
            "class Player {",
            "    private String name;",
            "    public String getName() {",
            "        return name;",
            "    }",
            "}"
          ], explain: "The minus sign becomes <code>private</code>, the plus sign becomes <code>public</code>." },
        { t: 'code', q: "UML: class <code>Player</code> with <code>- name: String</code>, <code>- score: int</code>, <code>+ Player(name: String, score: int)</code>, <code>+ addScore(points: int): void</code>, <code>+ toString(): String</code> returning <code>NAME: SCORE</code>. In <code>main</code> read a name, a start score and points, build the player, call <code>addScore</code>, and print the player.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read, build the Player, add points, print
                }
            }

            class Player {
                // write the class from the UML
            }
          `,
          tests: [
            { stdin: 'Ali 10 5', expected: 'Ali: 15' },
            { stdin: 'Mona 0 20', expected: 'Mona: 20' }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Player p = new Player(sc.next(), sc.nextInt());
                    p.addScore(sc.nextInt());
                    System.out.println(p);
                }
            }

            class Player {
                private String name;
                private int score;

                public Player(String name, int score) {
                    this.name = name;
                    this.score = score;
                }

                public void addScore(int points) {
                    score += points;
                }

                @Override
                public String toString() {
                    return name + ": " + score;
                }
            }
          `,
          hint: "Go box by box: two private fields, the constructor with <code>this</code>, then the two methods.",
          explain: "Each line of the UML box becomes one member of the class." }
      ]
    }

  ],

  quiz: [
    { t: 'mcq', q: "A class is like a...",
      options: ["finished house", "house blueprint", "key", "door"], answer: 1,
      explain: "A class is the plan; objects are built from it." },
    { t: 'mcq', q: "Which keyword builds an object?",
      options: ["this", "static", "new", "private"], answer: 2,
      explain: "<code>new</code> builds an object and runs a constructor." },
    { t: 'mcq', q: "Which of the following is the best description of an object?",
      options: [
        "A file that contains Java code",
        "An instance of a class, with its own field values",
        "A method that returns a value",
        "Another name for a variable of type int"
      ], answer: 1,
      explain: "An object is a concrete instance created from a class; each object stores its own values for the instance fields." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Course c = new Course();
              System.out.println(c.code + " " + c.credits);
          }
      }

      class Course {
          String code;
          int credits;

          Course() {
              this("CS102");
              credits++;
          }

          Course(String code) {
              this(code, 3);
          }

          Course(String code, int credits) {
              this.code = code;
              this.credits = credits;
          }
      }
    `, answer: J`
      CS102 4
    `, explain: "The chain sets code to CS102 and credits to 3. After the chained call returns, the no-argument constructor runs <code>credits++</code>, giving 4." },
    { t: 'mcq', q: "When does the Java compiler provide a default (no-argument) constructor?",
      options: [
        "Always",
        "Only when the class declares no constructors at all",
        "Only when all fields are private",
        "Only when the class is abstract"
      ], answer: 1,
      explain: "The default constructor is generated only if you write no constructor. Writing any constructor removes it." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Order a = new Order();
              Order b = new Order();
              Order c = new Order();
              System.out.println(a.number + b.number + c.number);
              System.out.println(Order.count + "" + a.count);
          }
      }

      class Order {
          static int count;
          int number;

          Order() {
              count++;
              number = count * 10;
          }
      }
    `, answer: J`
      60
      33
    `, explain: "The numbers are 10, 20 and 30, and adding three ints gives 60. <code>count</code> is shared and equals 3; <code>a.count</code> is the same static field, and <code>3 + \"\" + 3</code> is the String <code>33</code>." },
    { t: 'mcq', q: "<code>BankAccount</code> declares <code>private double balance;</code>. In <code>Main</code>, what happens with <code>acc.balance = 100;</code>?",
      options: [
        "It compiles and sets the balance",
        "Compile error: balance has private access in BankAccount",
        "Run-time exception",
        "It compiles but has no effect"
      ], answer: 1,
      explain: "Private members are not accessible from another class. Other classes must use public methods such as <code>deposit</code>." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Room r1 = new Room("B", 101);
              Room r2 = new Room("B", 101);
              Room r3 = new Room("F", 101);
              System.out.println(r1 + " " + r3);
              System.out.println(r1 == r2);
              System.out.println(r1.equals(r2));
              System.out.println(r1.equals(r3));
          }
      }

      class Room {
          private String building;
          private int number;

          Room(String building, int number) {
              this.building = building;
              this.number = number;
          }

          @Override
          public String toString() {
              return building + "-" + number;
          }

          @Override
          public boolean equals(Object o) {
              if (o == null || getClass() != o.getClass()) return false;
              Room r = (Room) o;
              return building.equals(r.building) && number == r.number;
          }
      }
    `, answer: J`
      B-101 F-101
      false
      true
      false
    `, explain: "<code>toString()</code> is used in the concatenation. <code>==</code> compares references (two different objects), while the overridden <code>equals</code> compares building and number." },
    { t: 'mcq', q: "In a UML class diagram, an <u>underlined</u> attribute represents a…",
      options: ['private field', 'constant only', 'static field', 'abstract field'], answer: 2,
      explain: "Underlining marks class-level (static) members. Italics mark abstract classes and methods." },
    { t: 'mcq', q: "Which statement about <code>this</code> is <b>false</b>?",
      options: [
        "<code>this</code> refers to the current object.",
        "<code>this(...)</code> calls another constructor of the same class.",
        "<code>this</code> can be used inside a static method.",
        "<code>this.name = name;</code> assigns the parameter to the field."
      ], answer: 2,
      explain: "A static method is not called on an object, so there is no current object and <code>this</code> cannot be used there." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Wallet a = new Wallet(100);
              Wallet b = new Wallet(a);
              Wallet c = a;
              a.cash = 40;
              System.out.println(b.cash + " " + c.cash);
          }
      }

      class Wallet {
          int cash;

          Wallet(int cash) { this.cash = cash; }

          Wallet(Wallet other) { this.cash = other.cash; }
      }
    `, answer: J`
      100 40
    `, explain: "<code>b</code> is a separate copy made by the copy constructor, so it keeps 100. <code>c</code> is just another reference to <code>a</code>, so it sees the change to 40." },
    { t: 'mcq', q: "Which is a correct reason to declare a class <code>abstract</code>?",
      options: [
        "To make all of its fields private",
        "Because it is a general concept that should not be instantiated directly, and it may declare methods that subclasses must implement",
        "To allow it to have a <code>main</code> method",
        "To make its methods run faster"
      ], answer: 1,
      explain: "Abstract classes model general ideas such as Shape or Employee. They cannot be instantiated, and their abstract methods are completed by subclasses." }
  ],

  lab: {
    t: 'code',
    q: "<b>Mini project: Bank account manager.</b> Write a class <code>BankAccount</code> with private fields <code>owner</code> and <code>balance</code>, a full-argument constructor, getters, and methods <code>boolean deposit(double amount)</code> (accept only amount &gt; 0) and <code>boolean withdraw(double amount)</code> (accept only 0 &lt; amount &le; balance). Each method returns whether the operation was accepted. Override <code>toString()</code> to return <code>Account[owner=NAME, balance=BALANCE]</code>.<br>Input: the owner's one-word name and the initial balance, then an integer <code>n</code>, then <code>n</code> operations each written as <code>D amount</code> or <code>W amount</code>. Print the account using <code>toString()</code>, then <code>Rejected: COUNT</code> with the number of refused operations. No prompts.",
    qAr: "مشروع مصغر: صنف حساب بنكي مغلّف، نفّذ عمليات الإيداع والسحب واطبع الحساب وعدد العمليات المرفوضة.",
    starter: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              String owner = sc.next();
              double start = sc.nextDouble();
              // create the account, process n operations, print the result
          }
      }

      class BankAccount {
          private String owner;
          private double balance;

          // constructor, getters, deposit, withdraw, toString
      }
    `,
    tests: [
      { stdin: J`
        Ali 500
        4
        D 200
        W 1000
        W 50
        D -20
      `, expected: J`
        Account[owner=Ali, balance=650.0]
        Rejected: 2
      ` },
      { stdin: J`
        Huda 0
        3
        W 10
        D 1500.5
        W 500
      `, expected: J`
        Account[owner=Huda, balance=1000.5]
        Rejected: 1
      ` }
    ],
    solution: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              String owner = sc.next();
              double start = sc.nextDouble();
              BankAccount acc = new BankAccount(owner, start);
              int n = sc.nextInt();
              int rejected = 0;
              for (int i = 0; i < n; i++) {
                  String op = sc.next();
                  double amount = sc.nextDouble();
                  boolean ok;
                  if (op.equals("D")) {
                      ok = acc.deposit(amount);
                  } else {
                      ok = acc.withdraw(amount);
                  }
                  if (!ok) {
                      rejected++;
                  }
              }
              System.out.println(acc);
              System.out.println("Rejected: " + rejected);
          }
      }

      class BankAccount {
          private String owner;
          private double balance;

          public BankAccount(String owner, double balance) {
              this.owner = owner;
              this.balance = balance;
          }

          public String getOwner() { return owner; }
          public double getBalance() { return balance; }

          public boolean deposit(double amount) {
              if (amount <= 0) {
                  return false;
              }
              balance += amount;
              return true;
          }

          public boolean withdraw(double amount) {
              if (amount <= 0 || amount > balance) {
                  return false;
              }
              balance -= amount;
              return true;
          }

          @Override
          public String toString() {
              return "Account[owner=" + owner + ", balance=" + balance + "]";
          }
      }
    `,
    hint: "Let <code>deposit</code> and <code>withdraw</code> return <code>false</code> for a refused operation, and count those in <code>main</code>.",
    explain: "All the rules live inside <code>BankAccount</code>; <code>main</code> only reads input and reacts to the returned booleans. That is encapsulation: the balance can never be changed in an invalid way from outside."
  },

  cheats: [
    { code: J`
      class Student {
          private String name;
          private double gpa;
      }
    `, note: 'Class with private fields (encapsulated state)' },
    { code: J`Student s = new Student("Sara", 3.6);`, note: 'Create an object with new; s holds a reference' },
    { code: J`
      Student(String name, double gpa) {
          this.name = name;
          this.gpa = gpa;
      }
    `, note: 'Full-argument constructor: same name as class, no return type' },
    { code: J`Student() { this("Unknown", 0.0); }`, note: 'Constructor chaining: this(...) must be the first statement' },
    { code: J`Student(Student other) { this(other.name, other.gpa); }`, note: 'Copy constructor: builds an independent copy' },
    { code: J`
      public double getGpa() { return gpa; }
      public void setGpa(double gpa) { if (gpa >= 0 && gpa <= 4) this.gpa = gpa; }
    `, note: 'Getter and validating setter' },
    { code: J`
      @Override
      public String toString() { return name + " " + gpa; }
    `, note: 'Called automatically by println and string concatenation' },
    { code: J`
      @Override
      public boolean equals(Object obj) {
          if (obj == null || getClass() != obj.getClass()) return false;
          Student o = (Student) obj;
          return name.equals(o.name);
      }
    `, note: 'equals must take an Object parameter to override' },
    { code: J`private static int count = 0;`, note: 'One shared copy for the whole class; use ClassName.member' },
    { code: J`abstract class Shape { public abstract double area(); }`, note: 'Cannot be instantiated; subclasses implement area()' }
  ],

  glossary: [
    { term: 'null', ar: 'لا شيء', def: 'A reference that points to no object; calling a method on it causes a NullPointerException.' },
    { term: 'Override', ar: 'تجاوز', def: 'Writing a new version of a method that already exists (such as toString), marked with @Override.' },
    { term: 'Constant', ar: 'ثابت', def: 'A static final field whose value never changes, written in CAPITAL LETTERS.' },
    { term: 'Class', ar: 'صنف', def: 'A blueprint that defines the fields and methods of a kind of object.' },
    { term: 'Object (instance)', ar: 'كائن', def: 'A concrete value created from a class with new, holding its own field values.' },
    { term: 'Field (instance variable)', ar: 'حقل', def: 'A variable declared in a class that stores part of each object\'s state.' },
    { term: 'Reference', ar: 'مرجع', def: 'The value stored in a class-type variable; it points to an object in memory.' },
    { term: 'Constructor', ar: 'مُنشئ', def: 'A special method with the class name and no return type that initializes a new object.' },
    { term: 'Default constructor', ar: 'المُنشئ الافتراضي', def: 'The no-argument constructor the compiler adds only when a class declares no constructors.' },
    { term: 'Copy constructor', ar: 'مُنشئ النسخ', def: 'A constructor that takes an object of the same class and copies its fields.' },
    { term: 'Constructor overloading', ar: 'تحميل المُنشئات', def: 'Having several constructors in one class with different parameter lists.' },
    { term: 'this', ar: 'this (الكائن الحالي)', def: 'A reference to the current object; this(...) calls another constructor of the same class.' },
    { term: 'Encapsulation', ar: 'التغليف', def: 'Bundling data with the methods that use it and hiding the data behind a controlled interface.' },
    { term: 'Getter / Setter', ar: 'دالة جلب / دالة تعيين', def: 'Public methods that read (get) or change (set) a private field.' },
    { term: 'Access modifier', ar: 'مُعدِّل الوصول', def: 'public, protected, private, or default; controls where a member can be used.' },
    { term: 'Static member', ar: 'عضو ساكن', def: 'A field or method that belongs to the class itself and is shared by all objects.' },
    { term: 'Abstract class', ar: 'صنف مجرد', def: 'A class declared abstract that cannot be instantiated and may contain abstract methods.' },
    { term: 'UML class diagram', ar: 'مخطط الأصناف UML', def: 'A standard drawing of a class as a box listing its name, attributes, and operations.' }
  ]
});
