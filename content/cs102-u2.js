JP.unit({
  course: 'cs102',
  n: 2,
  title: 'Class Design',
  titleAr: 'تصميم الأصناف',
  intro: "In CS101 you wrote everything inside main. Now you will design your own types. A class is a blueprint, and an object is a thing built from it. Step by step you will learn fields, methods, constructors, this, getters and setters, toString and equals, static members, abstract classes and UML drawings. Then you will see how objects travel to and from methods, how to use null safely, how to design a class from a short story, and why immutable objects are safe to share. Memory pictures show what every line does to the variables and the objects. Go slowly: every lesson has worked examples and small exercises.",
  introAr: "في CS101 كتبت كل شيء داخل main. هنا ستصمم أنواعك الخاصة: الصنف مخطط والكائن شيء مبني منه. سنتعلم الحقول والدوال والمُنشئات و this والتغليف و toString و equals والأعضاء الساكنة والأصناف المجردة ومخططات UML، ثم تمرير الكائنات إلى الدوال، والتعامل الآمن مع null، وتصميم صنف من قصة، والكائنات غير القابلة للتغيير. صور الذاكرة توضح أثر كل سطر.",
  lessons: [

    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'Why classes? Blueprints and objects',
      titleAr: 'لماذا الأصناف؟ المخطط والكائنات',
      minutes: 35,
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
        { type: 'p', en: "Why is this useful? A class gives Java a <b>new type</b>. You already know types like <code>int</code>, <code>double</code> and <code>String</code>. Now <code>Student</code> is a type too. You write the plan once, and then you can make as many students as you need: 3, 50 or 500." },
        { type: 'p', en: "One more small example. The metro gives each rider a card. Every card has a card number and a balance in riyals. Here is the blueprint:" },
        { type: 'code', code: J`
          class MetroCard {
              int cardNumber;
              double balance;
          }
        ` },
        { type: 'p', en: "Again, this is only the plan. No card exists yet. When we build real cards, each card will have its <i>own</i> number and its <i>own</i> balance.",
          ar: "الصنف نوع جديد مثل int و String: نكتبه مرة واحدة ونصنع منه ما نشاء." },
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
        { type: 'p', en: "What really happens when this line runs? Java finds a free place in the computer's memory and builds the object there. Every field gets a starting value: a number field starts at <code>0</code> (or <code>0.0</code>), and a text field starts as <code>null</code>, which means &quot;no text yet&quot;. Then the variable <code>s1</code> receives the <b>address</b> of the new object. Think of it as an arrow from <code>s1</code> to the object." },
        { type: 'memory', title: 'How to read a memory picture', en: "In this unit we draw memory in two columns. On the left are the <b>variables</b> of <code>main</code> (programmers call this part the <i>stack</i>). On the right are the <b>objects</b> built with <code>new</code> (the <i>heap</i>). Each object gets a letter: A, B, C… The sign <b>→ A</b> means &quot;this variable points to object A&quot;.", code: J`
          Student s1 = new Student();
        `, frames: [
          { label: 'After <code>Student s1 = new Student();</code>', vars: [{ name: 's1', type: 'Student', ref: 'A' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: 'null' }, { name: 'gpa', value: '0.0' }] }] }
        ], ar: "اليسار للمتغيرات واليمين للكائنات، والرمز → A يعني أن المتغير يشير إلى الكائن A." },
        { type: 'check', q: "Look at the memory picture. What is inside the variable <code>s1</code>?", options: ["The whole student object", "An arrow (reference) to object A", "The text &quot;Sara&quot;", "The number 0"], answer: 1,
          explain: "The variable holds only a reference, an arrow. The object itself lives on the right side, in the heap.", hint: "Look at the left column." },
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
        { type: 'p', en: "Let us follow the same program in memory, one line at a time. Press <b>Next</b> to see each step. Watch how the second <code>new</code> builds a second box, and how writing on one box never touches the other." },
        { type: 'memory', title: 'Two cards, two boxes', frames: [
          { label: 'After <code>Student s1 = new Student();</code>', vars: [{ name: 's1', type: 'Student', ref: 'A' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: 'null' }, { name: 'gpa', value: '0.0' }] }] },
          { label: 'After <code>s1.name = "Sara";</code>', vars: [{ name: 's1', type: 'Student', ref: 'A' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'gpa', value: '0.0' }] }] },
          { label: 'After <code>s1.gpa = 3.6;</code>', vars: [{ name: 's1', type: 'Student', ref: 'A' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'gpa', value: '3.6' }] }] },
          { label: 'After <code>Student s2 = new Student();</code>', vars: [{ name: 's1', type: 'Student', ref: 'A' }, { name: 's2', type: 'Student', ref: 'B' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'gpa', value: '3.6' }] }, { id: 'B', cls: 'Student', fields: [{ name: 'name', value: 'null' }, { name: 'gpa', value: '0.0' }] }] },
          { label: 'After <code>s2.name = "Omar"; s2.gpa = 2.9;</code>', vars: [{ name: 's1', type: 'Student', ref: 'A' }, { name: 's2', type: 'Student', ref: 'B' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'gpa', value: '3.6' }] }, { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }, { name: 'gpa', value: '2.9' }] }] }
        ], ar: "كل new تبني صندوقًا جديدًا، والكتابة في صندوق لا تغيّر الصندوق الآخر." },
        { type: 'p', en: "On paper (for example in an exam) draw it the same way: one box for each object, with its fields inside, and one arrow from each variable to its box." },
        { type: 'code', code: J`
          s1 ---> [ name = "Sara", gpa = 3.6 ]
          s2 ---> [ name = "Omar", gpa = 2.9 ]
        ` },
        { type: 'note', kind: 'tip', en: "In these lessons the class <code>Main</code> (with <code>main</code>) comes first, and the helper classes like <code>Student</code> are written below it, without the word <code>public</code>. All of it goes in one file.",
          ar: "نكتب Main أولًا ثم الأصناف المساعدة تحتها في ملف واحد." },
        { type: 'check', q: "After running the program above, what is <code>s2.name</code>?", options: ["Sara", "Omar", "null", "2.9"], answer: 1,
          explain: "s2 is the second card. We wrote &quot;Omar&quot; on it.", hint: "s2, not s1." },

        { type: 'h', en: 'Class, object, variable: three different things' },
        { type: 'p', en: "Beginners often mix up three words. Keep them apart from the first day, because every lesson in this unit uses them. The table uses our Student example." },
        { type: 'table', head: ['Word', 'In our example', 'What it is'], rows: [
          ['class', '<code>Student</code>', 'The blueprint. Written once. Holds no data.'],
          ['object (instance)', 'the box built by <code>new Student()</code>', 'One real student with its own name and GPA.'],
          ['variable (reference)', '<code>s1</code>', 'A name in <code>main</code> that points to an object.'],
          ['field', '<code>name</code>, <code>gpa</code>', 'A variable that lives inside every object.']
        ] },
        { type: 'note', kind: 'exam', en: "Exam questions often use the word <b>instance</b>. An instance is just another word for an object. &quot;s1 refers to an instance of Student&quot; means &quot;s1 points to a Student object&quot;.",
          ar: "كلمة instance تعني كائنًا." },
        { type: 'check', q: "In <code>MetroCard c = new MetroCard();</code>, which part is the variable?", options: ["<code>MetroCard</code> (the first word)", "<code>c</code>", "<code>new</code>", "<code>MetroCard()</code> (after new)"], answer: 1,
          explain: "<code>c</code> is the variable (the reference). The first <code>MetroCard</code> is its type, and <code>new MetroCard()</code> builds the object.", hint: "The variable is the name you choose." },
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
          ar: "صمّم الصنف، أنشئ الكائن بـ new، ضع القيم بالنقطة، ثم اقرأها بالنقطة." },
        { type: 'steps', title: 'Worked example 2: two metro cards', problem: "Read the balances of two metro cards. The first rider tops up her card with 10 riyals. Print both cards to show that only the first card changed.",
          steps: [
            { en: "Step 1: The blueprint. A card has an owner (text) and a balance (decimal).", code: J`
              class MetroCard {
                  String owner;
                  double balance;
              }
            ` },
            { en: "Step 2: Read the two balances with Scanner.", code: J`
              double first = sc.nextDouble();
              double second = sc.nextDouble();
            ` },
            { en: "Step 3: Build two separate cards with two <code>new</code>, and fill each one.", code: J`
              MetroCard a = new MetroCard();
              a.owner = "Reem";
              a.balance = first;

              MetroCard b = new MetroCard();
              b.owner = "Faisal";
              b.balance = second;
            ` },
            { en: "Step 4: Top up only card <code>a</code>. Read the old balance with the dot, add 10, and store it back.", code: J`
              a.balance = a.balance + 10;
            ` },
            { en: "Step 5: Print both cards. Card <code>b</code> is a different box, so it did not change.", code: J`
              System.out.println(a.owner + ": " + a.balance + " riyals");
              System.out.println(b.owner + ": " + b.balance + " riyals");
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    double first = sc.nextDouble();
                    double second = sc.nextDouble();

                    MetroCard a = new MetroCard();
                    a.owner = "Reem";
                    a.balance = first;

                    MetroCard b = new MetroCard();
                    b.owner = "Faisal";
                    b.balance = second;

                    a.balance = a.balance + 10;

                    System.out.println(a.owner + ": " + a.balance + " riyals");
                    System.out.println(b.owner + ": " + b.balance + " riyals");
                }
            }

            class MetroCard {
                String owner;
                double balance;
            }
          `, stdin: '25 40', out: J`
            Reem: 35.0 riyals
            Faisal: 40.0 riyals
          `, ar: "كل بطاقة كائن مستقل: الشحن غيّر البطاقة الأولى فقط." }
      ],
      mistakes: [
        { title: 'Forgetting new', en: "Declaring a variable does not build an object. You must write <code>new</code>. For a variable inside <code>main</code>, Java stops with the error <i>variable s1 might not have been initialized</i>.", code: J`
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
        "Many objects can be built from one class.",
        "A variable like <code>s1</code> holds an arrow (a <b>reference</b>) to its object. In a memory picture, variables are on the left and objects on the right."
      ],
      rememberAr: "الصنف مخطط، والكائن شيء حقيقي يُبنى بـ new، والحقول متغيرات داخل الصنف ولكل كائن نسخته، ونصل إليها بالنقطة. المتغير يحمل سهمًا إلى الكائن.",
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
          explain: "Build the object with <code>new Book()</code>, fill the fields with the dot, and read them back to print." },
        { t: 'bug', q: "The program should print <code>CS102 MATH101</code>, but it does not compile. Tap the line with the bug.",
          qAr: "البرنامج لا يُترجم. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Course a = new Course();
                    a.code = "CS102";
                    Course b;
                    b.code = "MATH101";
                    System.out.println(a.code + " " + b.code);
                }
            }

            class Course {
                String code;
            }
          `, bug: [5, 6],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Course a = new Course();
                    a.code = "CS102";
                    Course b = new Course();
                    b.code = "MATH101";
                    System.out.println(a.code + " " + b.code);
                }
            }

            class Course {
                String code;
            }
          `,
          hint: "How many times does the word <code>new</code> appear? How many courses do we need?",
          explain: "Line 5 only declares the variable <code>b</code>; it never builds an object. So on line 6 there is no course to write on, and Java stops with <i>variable b might not have been initialized</i>. Writing <code>Course b = new Course();</code> builds the second object.",
          explainAr: "السطر 5 يعرّف المتغير فقط ولا يبني كائنًا؛ نحتاج new." },
        { t: 'output', q: "What does this program print? Think about the two boxes.", code: J`
          public class Main {
              public static void main(String[] args) {
                  Appointment a = new Appointment();
                  Appointment b = new Appointment();
                  a.patient = "Hessa";
                  a.hour = 9;
                  b.patient = "Majed";
                  b.hour = a.hour + 2;
                  a.hour = 10;
                  System.out.println(a.patient + " " + a.hour);
                  System.out.println(b.patient + " " + b.hour);
              }
          }

          class Appointment {
              String patient;
              int hour;
          }
        `, answer: J`
          Hessa 10
          Majed 11
        `, explain: "When <code>b.hour = a.hour + 2;</code> runs, <code>a.hour</code> is 9, so b gets 11. Later <code>a.hour</code> becomes 10, but that changes only box a. Box b keeps 11.",
          explainAr: "قيمة b حُسبت مرة واحدة؛ تغيير a بعدها لا يغيّر b." },
        { t: 'mcq', q: "Which memory picture is correct right after <code>MetroCard c = new MetroCard();</code>? (MetroCard has an <code>int cardNumber</code> and a <code>double balance</code>.)",
          options: [
            "Left: <code>c</code> holds 0. Right: nothing.",
            "Left: <code>c → A</code>. Right: object A with cardNumber 0 and balance 0.0.",
            "Left: <code>c</code> holds the fields cardNumber and balance. Right: nothing.",
            "Left: nothing. Right: object A with cardNumber 0 and balance 0.0."
          ], answer: 1,
          explain: "<code>new</code> builds an object on the right with default values (0 and 0.0). The variable on the left holds only an arrow to it.",
          explainAr: "الكائن في اليمين بقيم افتراضية، والمتغير في اليسار يحمل سهمًا إليه." },
        { t: 'code', q: "Write a class <code>Appointment</code> with fields <code>patient</code> (String) and <code>hour</code> (int). In <code>main</code> read two appointments (a one-word name and an hour for each, no prompts). Build two objects and print <code>NAME at HOUR:00</code> for each one. Then print <code>Earlier: NAME</code> for the patient with the smaller hour (if the hours are equal, choose the first).",
          qAr: "ابنِ كائنين من الصنف Appointment واطبع كلًا منهما ثم صاحب الموعد الأبكر.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // build two appointments, print them, then the earlier one
                }
            }

            class Appointment {
                // fields
            }
          `,
          tests: [
            { stdin: 'Hessa 10 Majed 9', expected: J`
              Hessa at 10:00
              Majed at 9:00
              Earlier: Majed
            ` },
            { stdin: 'Sami 8 Nouf 8', expected: J`
              Sami at 8:00
              Nouf at 8:00
              Earlier: Sami
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Appointment a = new Appointment();
                    a.patient = sc.next();
                    a.hour = sc.nextInt();
                    Appointment b = new Appointment();
                    b.patient = sc.next();
                    b.hour = sc.nextInt();

                    System.out.println(a.patient + " at " + a.hour + ":00");
                    System.out.println(b.patient + " at " + b.hour + ":00");
                    if (b.hour < a.hour) {
                        System.out.println("Earlier: " + b.patient);
                    } else {
                        System.out.println("Earlier: " + a.patient);
                    }
                }
            }

            class Appointment {
                String patient;
                int hour;
            }
          `,
          hint: "Use two <code>new Appointment()</code>. Compare <code>b.hour &lt; a.hour</code> to choose.",
          explain: "Each appointment is its own object with its own fields. We compare the two <code>hour</code> fields with an ordinary <code>if</code>, as in CS101." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Methods in a class and references',
      titleAr: 'الدوال داخل الصنف والمراجع',
      minutes: 40,
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

        { type: 'h', en: 'Methods that receive values' },
        { type: 'p', en: "Some actions need extra information. A café order can add more cups, but how many? A bank account can take a deposit, but how much? We send that value inside the brackets, exactly like the methods you wrote in CS101. The method receives it in a <b>parameter</b>." },
        { type: 'code', code: J`
          class CafeOrder {
              String drink;
              int cups;

              void addCups(int n) {
                  cups = cups + n;
              }
          }
        ` },
        { type: 'lines', rows: [
          ['void addCups(int n) {', 'The method receives one int value. Inside the method its name is <code>n</code>.'],
          ['cups = cups + n;', '<code>cups</code> is the field of the order we called; <code>n</code> is the value we sent.'],
          ['order.addCups(2);', 'The call: the order standing before the dot gets 2 more cups.']
        ], ar: "المعامل n يستقبل القيمة المرسلة، والحقل cups يخص الكائن الذي استدعينا عليه الدالة." },
        { type: 'p', en: "Notice the two kinds of methods. <code>printInfo()</code> and <code>isHonor()</code> only <b>read</b> the fields. <code>addCups(int n)</code> <b>changes</b> a field. Both kinds are normal. A good name tells the reader which kind it is: <code>print…</code>, <code>is…</code> and <code>get…</code> read; <code>add…</code> and <code>set…</code> change." },
        { type: 'check', q: "An order has <code>cups = 1</code>. We call <code>order.addCups(3);</code> and then <code>order.addCups(1);</code>. What is <code>order.cups</code> now?", options: ["1", "4", "5", "3"], answer: 2,
          explain: "1 + 3 = 4, then 4 + 1 = 5. Both calls change the same field of the same object." },

        { type: 'h', en: 'Default values' },
        { type: 'p', en: "What is inside a field before you write anything? Java fills it for you: <code>0</code> for int, <code>0.0</code> for double, <code>false</code> for boolean and <code>null</code> for text and other objects. <code>null</code> means &quot;nothing here&quot;.",
          ar: "الحقول تأخذ قيمًا افتراضية: 0 للأرقام و false و null للنصوص." },
        { type: 'analogy', title: 'The empty form', en: "A new form from the printer is blank. A blank number box counts as 0, a blank yes/no box counts as &quot;no&quot; (false), and a blank text line counts as &quot;nothing&quot; (null).",
          ar: "النموذج الجديد فارغ: الرقم 0 ونعم/لا هي لا، والنص لا شيء." },
        { type: 'check', q: "A new <code>Student</code> has never been given a name. What does <code>s.name</code> hold?", options: ["0", "an empty text &quot;&quot;", "null", "false"], answer: 2,
          explain: "A text (String) field starts as <code>null</code>, which means no text at all." },
        { type: 'memory', title: 'A brand-new object', code: J`
          class Sensor {
              String location;
              int reading;
              boolean active;
          }
          // in main:
          Sensor s = new Sensor();
        `, frames: [
          { label: 'After <code>Sensor s = new Sensor();</code>', vars: [{ name: 's', type: 'Sensor', ref: 'A' }], objects: [{ id: 'A', cls: 'Sensor', fields: [{ name: 'location', value: 'null' }, { name: 'reading', value: '0' }, { name: 'active', value: 'false' }] }] }
        ], ar: "كل حقل يبدأ بقيمة افتراضية حسب نوعه." },
        { type: 'note', kind: 'warn', en: "Only <b>fields</b> get default values. A local variable inside <code>main</code> (or inside any method) gets nothing. If you use it before you give it a value, the program does not compile.",
          ar: "القيم الافتراضية للحقول فقط، وليست للمتغيرات المحلية." },

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
        { type: 'memory', title: 'One account, two arrows', en: "Press Next and watch the right side. The line <code>BankAccount b = a;</code> adds a new arrow on the left, but no new box on the right.", frames: [
          { label: 'After <code>BankAccount a = new BankAccount();</code>', vars: [{ name: 'a', type: 'BankAccount', ref: 'A' }], objects: [{ id: 'A', cls: 'BankAccount', fields: [{ name: 'owner', value: 'null' }, { name: 'balance', value: '0.0' }] }] },
          { label: 'After <code>a.owner = "Lina"; a.deposit(500);</code>', vars: [{ name: 'a', type: 'BankAccount', ref: 'A' }], objects: [{ id: 'A', cls: 'BankAccount', fields: [{ name: 'owner', value: '"Lina"' }, { name: 'balance', value: '500.0' }] }] },
          { label: 'After <code>BankAccount b = a;</code> (no new box!)', vars: [{ name: 'a', type: 'BankAccount', ref: 'A' }, { name: 'b', type: 'BankAccount', ref: 'A' }], objects: [{ id: 'A', cls: 'BankAccount', fields: [{ name: 'owner', value: '"Lina"' }, { name: 'balance', value: '500.0' }] }] },
          { label: 'After <code>b.deposit(250);</code>', vars: [{ name: 'a', type: 'BankAccount', ref: 'A' }, { name: 'b', type: 'BankAccount', ref: 'A' }], objects: [{ id: 'A', cls: 'BankAccount', fields: [{ name: 'owner', value: '"Lina"' }, { name: 'balance', value: '750.0' }] }] }
        ], ar: "الإسناد b = a يضيف سهمًا جديدًا فقط، ولا يبني صندوقًا جديدًا." },
        { type: 'p', en: "Two variables that point to the same object are called <b>aliases</b> (two names for one thing, like a person called &quot;Abdullah&quot; at home and &quot;Abu Khalid&quot; at work). Whatever you do through one name, you see through the other name." },
        { type: 'p', en: "On paper, after <code>BankAccount b = a;</code> there is still only ONE account box and TWO arrows:" },
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

        { type: 'h', en: 'Moving an arrow: the old object is lost' },
        { type: 'p', en: "A variable can be pointed at a different object later. Then its old object may have <b>no arrow at all</b>. Nobody can reach it any more, so it is useless. Java has a helper called the <b>garbage collector</b> that removes such objects from memory for you." },
        { type: 'analogy', title: 'The unclaimed suitcase', en: "At the airport, a suitcase that nobody claims stays on the belt for a while. Since no passenger will ever take it, the airport staff remove it. An object with no arrows is that suitcase.",
          ar: "الكائن الذي لا يشير إليه أي متغير كحقيبة لم يأخذها أحد؛ تُزال تلقائيًا." },
        { type: 'memory', title: 'b1 = b2 moves an arrow', code: J`
          Box b1 = new Box();
          Box b2 = new Box();
          b1.width = 4;
          b2.width = 7;
          b1 = b2;
        `, frames: [
          { label: 'After <code>b1.width = 4; b2.width = 7;</code>', vars: [{ name: 'b1', type: 'Box', ref: 'A' }, { name: 'b2', type: 'Box', ref: 'B' }], objects: [{ id: 'A', cls: 'Box', fields: [{ name: 'width', value: '4' }] }, { id: 'B', cls: 'Box', fields: [{ name: 'width', value: '7' }] }] },
          { label: 'After <code>b1 = b2;</code>', vars: [{ name: 'b1', type: 'Box', ref: 'B' }, { name: 'b2', type: 'Box', ref: 'B' }], objects: [{ id: 'A', cls: 'Box', fields: [{ name: 'width', value: '4' }], gone: true }, { id: 'B', cls: 'Box', fields: [{ name: 'width', value: '7' }] }] }
        ], ar: "بعد b1 = b2 لم يعد أي متغير يشير إلى الصندوق A، فيصبح مهملًا." },
        { type: 'lines', rows: [
          ['b1 = b2;', 'Copy the arrow in <code>b2</code> into <code>b1</code>. No box is copied.'],
          ['box A', 'Width 4 is still inside, but no variable points to it: garbage.'],
          ['box B', 'Now has two arrows. A change through <code>b1</code> is seen through <code>b2</code>.']
        ] },
        { type: 'check', q: "<code>Box p = new Box(); Box q = new Box(); p = q;</code> How many objects can still be reached?", options: ["0", "1", "2", "3"], answer: 1,
          explain: "Two boxes were built, but after <code>p = q</code> both arrows point to the second box. The first box can no longer be reached." },

        { type: 'h', en: 'null: an arrow that points nowhere' },
        { type: 'p', en: "A reference can also be <code>null</code>: the arrow points to nothing. If you press the button of a card that does not exist, the program crashes with a <code>NullPointerException</code>." },
        { type: 'analogy', title: 'A remote control with no TV', en: "Imagine a TV remote that is not linked to any TV. You can hold it, but pressing &quot;volume up&quot; cannot work: there is no TV. A <code>null</code> variable is that remote. Calling a method on it is an error.",
          ar: "المتغير null كجهاز تحكم غير مرتبط بأي تلفاز." },
        { type: 'memory', title: 'A variable that holds null', frames: [
          { label: 'After <code>Student s = null;</code>', vars: [{ name: 's', type: 'Student', value: 'null' }], objects: [] }
        ], ar: "المتغير موجود لكن لا يوجد كائن." },
        { type: 'code', code: J`
          Student s = null;
          s.printInfo();   // crash: NullPointerException
        ` },
        { type: 'p', en: "This code compiles. But when the second line runs, Java stops the program and prints a message that starts with <code>Exception in thread \"main\" java.lang.NullPointerException</code>. In Lesson 10 you will learn to read this message and to avoid it.",
          ar: "الكود يُترجم، لكنه يتوقف عند التشغيل برسالة NullPointerException." },
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
          ar: "الدالة addStamp تعدّل حقل البطاقة التي استُدعيت عليها." },
        { type: 'steps', title: 'Worked example 2: a shared family account', problem: "A father opens one bank account for the family. His son gets a second variable for the <i>same</i> account (not a new account). Read the father's deposit and the son's deposit, then print the balance seen by each of them.",
          steps: [
            { en: "Step 1: The class with a <code>deposit</code> method that changes the balance.", code: J`
              class BankAccount {
                  String owner;
                  double balance;

                  void deposit(double amount) {
                      balance += amount;
                  }
              }
            ` },
            { en: "Step 2: Build ONE account with <code>new</code>.", code: J`
              BankAccount family = new BankAccount();
              family.owner = "Family";
            ` },
            { en: "Step 3: Give the son a second arrow to the same account. There is no <code>new</code> here, so no new account.", code: J`
              BankAccount sonView = family;
            ` },
            { en: "Step 4: Deposit once through each name.", code: J`
              family.deposit(sc.nextDouble());
              sonView.deposit(sc.nextDouble());
            ` },
            { en: "Step 5: Print the balance through both names. Both follow their arrow to the same box, so both see the same total.", code: J`
              System.out.println(family.owner + ": " + family.balance);
              System.out.println("Son sees: " + sonView.balance);
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    BankAccount family = new BankAccount();
                    family.owner = "Family";
                    BankAccount sonView = family;

                    family.deposit(sc.nextDouble());
                    sonView.deposit(sc.nextDouble());

                    System.out.println(family.owner + ": " + family.balance);
                    System.out.println("Son sees: " + sonView.balance);
                }
            }

            class BankAccount {
                String owner;
                double balance;

                void deposit(double amount) {
                    balance += amount;
                }
            }
          `, stdin: '1000 250', out: J`
            Family: 1250.0
            Son sees: 1250.0
          `, ar: "متغيران يشيران إلى حساب واحد، فالإيداع من أيهما يظهر للآخر." }
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
        "<code>b = a</code> copies the arrow: both names point to the same object (they are <b>aliases</b>).",
        "An object with no arrows left is garbage; Java removes it for you.",
        "<code>null</code> means no object; calling a method on it crashes."
      ],
      rememberAr: "الدالة سلوك الكائن وتُستدعى بالنقطة. الحقول لها قيم افتراضية. المتغير يحمل مرجعًا (سهمًا) لا الكائن نفسه، والإسناد b = a ينسخ السهم فقط. الكائن بلا أسهم يُزال تلقائيًا.",
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
          explain: "The method uses the fields of the object it is called on. A double result prints with <code>.0</code> when it is a whole number." },
        { t: 'bug', q: "The programmer wants two <b>separate</b> cups and expects <code>200 350</code>. The program prints <code>350 350</code>. Tap the line with the bug.",
          qAr: "المبرمج يريد كوبين منفصلين. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Cup a = new Cup();
                    a.size = 200;
                    Cup b = a;
                    b.size = 350;
                    System.out.println(a.size + " " + b.size);
                }
            }

            class Cup {
                int size;
            }
          `, bug: 5,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Cup a = new Cup();
                    a.size = 200;
                    Cup b = new Cup();
                    b.size = 350;
                    System.out.println(a.size + " " + b.size);
                }
            }

            class Cup {
                int size;
            }
          `,
          hint: "Count the boxes. How many times is <code>new</code> used?",
          explain: "<code>Cup b = a;</code> copies the arrow, so a and b are aliases of ONE cup. Setting the size through b also changes what a sees. <code>Cup b = new Cup();</code> builds a second, separate cup.",
          explainAr: "b = a لا يبني كوبًا جديدًا؛ نحتاج new Cup()." },
        { t: 'output', q: "What does this program print? Draw the arrows first.", code: J`
          public class Main {
              public static void main(String[] args) {
                  LoyaltyCard c1 = new LoyaltyCard();
                  LoyaltyCard c2 = c1;
                  LoyaltyCard c3 = new LoyaltyCard();
                  c1.addStamp();
                  c2.addStamp();
                  c3.addStamp();
                  System.out.println(c1.stamps + " " + c2.stamps + " " + c3.stamps);
              }
          }

          class LoyaltyCard {
              int stamps;

              void addStamp() {
                  stamps++;
              }
          }
        `, answer: '2 2 1', explain: "c1 and c2 point to the same card, so that card gets two stamps, and both names show 2. c3 is a different card with one stamp.",
          explainAr: "c1 و c2 بطاقة واحدة حصلت على ختمين، و c3 بطاقة أخرى." },
        { t: 'mcq', q: "After these lines run, which sentence is true?", code: J`
          Student a = new Student();
          Student b = new Student();
          Student c = a;
          b = c;
        `, options: [
            "Three objects exist and each variable has its own object.",
            "Only the first object can still be reached, and all three variables point to it.",
            "Two objects can be reached: a and c point to one, b points to the other.",
            "No object can be reached."
          ], answer: 1,
          explain: "Two objects are built (A and B). c gets the arrow of a (A). Then b gets the arrow of c (also A). Nobody points to B any more: it is garbage. a, b and c all point to A.",
          explainAr: "الثلاثة تشير إلى الكائن الأول، والثاني أصبح مهملًا." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Constructors',
      titleAr: 'المُنشئات',
      minutes: 35,
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

        { type: 'h', en: 'What happens during new, step by step' },
        { type: 'p', en: "It helps to know the exact order, because exam questions often ask about it. When Java runs <code>new Student(\"Sara\", 3.6)</code> it does three things:" },
        { type: 'list', items: [
          "<b>1. Build</b> an empty object. Every field gets its default value (<code>null</code>, <code>0.0</code>…).",
          "<b>2. Run the constructor</b>. The parameters <code>n</code> and <code>g</code> receive the values, and the constructor copies them into the fields.",
          "<b>3. Give back the arrow</b>. The variable <code>s1</code> now points to the finished object. The parameters disappear."
        ], ar: "ثلاث خطوات: بناء كائن فارغ، ثم تنفيذ المُنشئ، ثم إعطاء السهم للمتغير." },
        { type: 'memory', title: 'Inside new Student("Sara", 3.6)', frames: [
          { label: 'Step 1: the empty object is built; the constructor starts with <code>n</code> and <code>g</code>', vars: [{ name: 'n', type: 'String', value: '"Sara"' }, { name: 'g', type: 'double', value: '3.6' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: 'null' }, { name: 'gpa', value: '0.0' }] }] },
          { label: 'After <code>name = n;</code>', vars: [{ name: 'n', type: 'String', value: '"Sara"' }, { name: 'g', type: 'double', value: '3.6' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'gpa', value: '0.0' }] }] },
          { label: 'After <code>gpa = g;</code>', vars: [{ name: 'n', type: 'String', value: '"Sara"' }, { name: 'g', type: 'double', value: '3.6' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'gpa', value: '3.6' }] }] },
          { label: 'Back in main: <code>s1</code> gets the arrow; <code>n</code> and <code>g</code> are gone', vars: [{ name: 's1', type: 'Student', ref: 'A' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }, { name: 'gpa', value: '3.6' }] }] }
        ], ar: "المعاملات n و g تعيش أثناء تنفيذ المُنشئ فقط، ثم تختفي ويبقى الكائن." },
        { type: 'check', q: "During <code>new Student(\"Sara\", 3.6)</code>, what is the value of the field <code>gpa</code> just <b>before</b> the constructor's first line runs?", options: ["3.6", "0.0", "null", "It does not exist yet"], answer: 1,
          explain: "Java first builds the object with default values (gpa = 0.0). Only then does the constructor copy 3.6 into it." },

        { type: 'h', en: 'Starting values that are not parameters' },
        { type: 'p', en: "Not every field must come from the brackets. Suppose every new metro card comes with a welcome gift of 5 riyals and 0 trips. The rider only tells us the name. The constructor can set the other fields to fixed starting values." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  MetroCard c = new MetroCard("Nouf");
                  System.out.println(c.owner + " " + c.balance + " " + c.trips);
              }
          }

          class MetroCard {
              String owner;
              double balance;
              int trips;

              MetroCard(String o) {
                  owner = o;
                  balance = 5.0;
                  trips = 0;
              }
          }
        `, out: 'Nouf 5.0 0' },
        { type: 'lines', rows: [
          ['MetroCard(String o)', 'Only one value comes in: the owner.'],
          ['balance = 5.0;', 'A fixed starting value: the welcome gift. Every new card gets it.'],
          ['trips = 0;', 'Also fixed. (Java would give 0 anyway, but writing it makes the plan clear.)']
        ], ar: "يمكن للمُنشئ أن يضع قيمًا ثابتة لحقول لا تأتي من المعاملات." },
        { type: 'p', en: "You can also write a starting value right where the field is declared: <code>double balance = 5.0;</code>. Java gives the field this value just before the constructor runs. Both ways are correct; choose the one that is easier to read." },
        { type: 'code', code: J`
          class MetroCard {
              String owner;
              double balance = 5.0;   // starting value at the declaration
              int trips;

              MetroCard(String o) {
                  owner = o;
              }
          }
        ` },
        { type: 'check', q: "Class <code>Cup</code> has <code>int sugar = 2;</code> and a constructor <code>Cup() { }</code> with an empty body. What is <code>new Cup().sugar</code>?", options: ["0", "2", "null", "Compile error"], answer: 1,
          explain: "The starting value at the declaration is given to every new object before the constructor runs. The empty constructor does not change it." },

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
        { type: 'note', kind: 'tip', en: "Java chooses a constructor by the <b>number, order and types</b> of the values, never by the parameter names. Two constructors with the same list of types, such as <code>Employee(String a)</code> and <code>Employee(String b)</code>, are not allowed: Java could not tell them apart.",
          ar: "الاختيار بين المُنشئات بعدد المعاملات وترتيبها وأنواعها، لا بأسمائها." },

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
          `, ar: "مُنشئان: واحد بلا معاملات بقيم افتراضية، وآخر كامل بقيم تُقرأ من المستخدم." },
        { type: 'steps', title: 'Worked example 2: clinic appointments', problem: "A clinic books appointments. Each appointment has a patient name and an hour, and every new appointment starts with the status <code>Booked</code>. Read two appointments, cancel the second one, and print both.",
          steps: [
            { en: "Step 1: Three fields. The status is not read from the user.", code: J`
              class Appointment {
                  String patient;
                  int hour;
                  String status;
              }
            ` },
            { en: "Step 2: The constructor takes the two known values and sets the status to a fixed starting value.", code: J`
              Appointment(String p, int h) {
                  patient = p;
                  hour = h;
                  status = "Booked";
              }
            ` },
            { en: "Step 3: A method that changes the status, and a method that prints the appointment.", code: J`
              void cancel() {
                  status = "Cancelled";
              }

              void show() {
                  System.out.println(patient + " at " + hour + ":00 - " + status);
              }
            ` },
            { en: "Step 4: In main, build each appointment in one line with the constructor.", code: J`
              Appointment a1 = new Appointment(sc.next(), sc.nextInt());
              Appointment a2 = new Appointment(sc.next(), sc.nextInt());
            ` },
            { en: "Step 5: Cancel only the second appointment, then show both.", code: J`
              a2.cancel();
              a1.show();
              a2.show();
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Appointment a1 = new Appointment(sc.next(), sc.nextInt());
                    Appointment a2 = new Appointment(sc.next(), sc.nextInt());
                    a2.cancel();
                    a1.show();
                    a2.show();
                }
            }

            class Appointment {
                String patient;
                int hour;
                String status;

                Appointment(String p, int h) {
                    patient = p;
                    hour = h;
                    status = "Booked";
                }

                void cancel() {
                    status = "Cancelled";
                }

                void show() {
                    System.out.println(patient + " at " + hour + ":00 - " + status);
                }
            }
          `, stdin: 'Hessa 9 Majed 11', out: J`
            Hessa at 9:00 - Booked
            Majed at 11:00 - Cancelled
          `, ar: "المُنشئ يملأ الاسم والساعة من المستخدم، ويضع الحالة Booked لكل موعد جديد." }
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
        "If you write no constructor, Java adds an empty one; if you write any, that free one is gone.",
        "Order of <code>new</code>: build the object with default values, run the constructor, give the arrow to the variable."
      ],
      rememberAr: "المُنشئ يعمل عند new ويملأ الكائن. اسمه اسم الصنف وبلا نوع إرجاع. يمكن وجود عدة مُنشئات (تحميل زائد). إذا كتبت أي مُنشئ يختفي المُنشئ الافتراضي. ترتيب new: كائن بقيم افتراضية ثم المُنشئ ثم السهم.",
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
          explain: "The constructor copies each incoming value into its field. <code>total()</code> multiplies a double by an int, giving a double such as <code>10.0</code>." },
        { t: 'bug', q: "This program does not compile. The error is reported on line 3, but the real mistake is in the class. Tap the line with the bug.",
          qAr: "الخطأ الحقيقي داخل الصنف. أين هو؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Ticket t = new Ticket("Jeddah", 120);
                    System.out.println(t.city + " " + t.price);
                }
            }

            class Ticket {
                String city;
                double price;
                void Ticket(String c, double p) {
                    city = c;
                    price = p;
                }
            }
          `, bug: 11,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Ticket t = new Ticket("Jeddah", 120);
                    System.out.println(t.city + " " + t.price);
                }
            }

            class Ticket {
                String city;
                double price;
                Ticket(String c, double p) {
                    city = c;
                    price = p;
                }
            }
          `,
          hint: "Does a constructor have a return type?",
          explain: "Because of <code>void</code>, line 11 is an ordinary method that happens to be called Ticket, not a constructor. The class has no constructor with two values, so <code>new Ticket(\"Jeddah\", 120)</code> on line 3 fails. Removing <code>void</code> makes it a real constructor.",
          explainAr: "كلمة void جعلته دالة عادية لا مُنشئًا؛ احذفها." },
        { t: 'output', q: "What does this program print? (Look at the starting values at the declarations.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  Membership a = new Membership("Ali");
                  Membership b = new Membership("Sara", 12);
                  System.out.println(a.name + " " + a.months + " " + a.active);
                  System.out.println(b.name + " " + b.months + " " + b.active);
              }
          }

          class Membership {
              String name;
              int months = 1;
              boolean active = true;

              Membership(String n) {
                  name = n;
              }

              Membership(String n, int m) {
                  name = n;
                  months = m;
              }
          }
        `, answer: J`
          Ali 1 true
          Sara 12 true
        `, explain: "Every new membership starts with months = 1 and active = true. The one-value constructor keeps those values. The two-value constructor then replaces months with 12.",
          explainAr: "القيم عند التعريف تُعطى أولًا، ثم يغيّر المُنشئ ما يريد." },
        { t: 'code', q: "Write a class <code>GymMember</code> with fields <code>name</code> (String) and <code>months</code> (int) and two constructors: <code>GymMember(String n)</code> sets months to 1, and <code>GymMember(String n, int m)</code> uses the given months. Add a method <code>show()</code> that prints <code>NAME: MONTHS month(s)</code>. In <code>main</code> read two one-word names and then a number of months (no prompts). Build the first member with the one-value constructor and the second with the two-value constructor, then call <code>show()</code> on both.",
          qAr: "صنف بمُنشئين: واحد يضع شهرًا واحدًا، وآخر يأخذ عدد الأشهر.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read two names and the months, build two members, show them
                }
            }

            class GymMember {
                // fields, two constructors, show()
            }
          `,
          tests: [
            { stdin: 'Ali Sara 6', expected: J`
              Ali: 1 month(s)
              Sara: 6 month(s)
            ` },
            { stdin: 'Nouf Fahad 12', expected: J`
              Nouf: 1 month(s)
              Fahad: 12 month(s)
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String first = sc.next();
                    String second = sc.next();
                    int m = sc.nextInt();
                    GymMember a = new GymMember(first);
                    GymMember b = new GymMember(second, m);
                    a.show();
                    b.show();
                }
            }

            class GymMember {
                String name;
                int months;

                GymMember(String n) {
                    name = n;
                    months = 1;
                }

                GymMember(String n, int m) {
                    name = n;
                    months = m;
                }

                void show() {
                    System.out.println(name + ": " + months + " month(s)");
                }
            }
          `,
          hint: "Read the two names first, then the number. <code>new GymMember(first)</code> uses the first constructor.",
          explain: "Java picks the constructor by the number of values: one value runs <code>GymMember(String n)</code>, two values run <code>GymMember(String n, int m)</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'this, copy constructors and chaining',
      titleAr: 'this ومُنشئ النسخ وربط المُنشئات',
      minutes: 35,
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
        { type: 'p', en: "Here is the secret: <code>this</code> is a reference, just like <code>s1</code>. While a constructor or method runs, Java keeps a hidden variable called <code>this</code> that points to the current object. The memory picture shows it." },
        { type: 'memory', title: 'this inside the constructor', code: J`
          Student s = new Student("Sara");
        `, frames: [
          { label: 'The constructor starts: <code>this</code> points to the new object, <code>name</code> is the parameter', vars: [{ name: 'this', type: 'Student', ref: 'A' }, { name: 'name', type: 'String', value: '"Sara"' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: 'null' }] }] },
          { label: 'After <code>this.name = name;</code>', vars: [{ name: 'this', type: 'Student', ref: 'A' }, { name: 'name', type: 'String', value: '"Sara"' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }] }] },
          { label: 'Back in main: <code>s</code> points to the same object', vars: [{ name: 's', type: 'Student', ref: 'A' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }] }] }
        ], ar: "this سهم مخفي يشير إلى الكائن الحالي أثناء تنفيذ المُنشئ." },
        { type: 'memory', title: 'The bug: name = name; without this', en: "Now the same constructor with the bug <code>name = name;</code>. Both names mean the parameter, so the parameter is copied onto itself. Nobody touches the object.", frames: [
          { label: 'The constructor starts', vars: [{ name: 'this', type: 'Student', ref: 'A' }, { name: 'name', type: 'String', value: '"Sara"' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: 'null' }] }] },
          { label: 'After <code>name = name;</code> (nothing changed in the object!)', vars: [{ name: 'this', type: 'Student', ref: 'A' }, { name: 'name', type: 'String', value: '"Sara"' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: 'null' }] }] }
        ], ar: "بدون this تُنسخ قيمة المعامل إلى نفسه، ويبقى الحقل null." },
        { type: 'p', en: "When a parameter has the same name as a field, we say the parameter <b>shadows</b> the field: like a shadow, it hides the field. Inside that constructor, the plain name always means the parameter. Only <code>this.name</code> reaches the field.",
          ar: "المعامل الذي يحمل اسم الحقل يُخفيه، ولا نصل إلى الحقل إلا بـ this." },

        { type: 'h', en: 'this in ordinary methods' },
        { type: 'p', en: "<code>this</code> also exists inside normal methods. There it points to the object standing before the dot. When no parameter hides a field, writing <code>this.</code> is optional: <code>name</code> and <code>this.name</code> mean the same field. Some programmers write <code>this.</code> anyway, because it reminds the reader that it is a field." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Student a = new Student("Sara");
                  Student b = new Student("Omar");
                  a.printInfo();
                  b.printInfo();
              }
          }

          class Student {
              String name;

              Student(String name) {
                  this.name = name;
              }

              void printInfo() {
                  System.out.println("I am " + this.name);
              }
          }
        `, out: J`
          I am Sara
          I am Omar
        ` },
        { type: 'memory', title: 'Who is this?', frames: [
          { label: 'During <code>a.printInfo();</code>', vars: [{ name: 'a', type: 'Student', ref: 'A' }, { name: 'b', type: 'Student', ref: 'B' }, { name: 'this', type: 'Student', ref: 'A' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }] }, { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }] }] },
          { label: 'During <code>b.printInfo();</code>', vars: [{ name: 'a', type: 'Student', ref: 'A' }, { name: 'b', type: 'Student', ref: 'B' }, { name: 'this', type: 'Student', ref: 'B' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Sara"' }] }, { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Omar"' }] }] }
        ], ar: "في كل استدعاء يشير this إلى الكائن المكتوب قبل النقطة." },
        { type: 'check', q: "While <code>b.printInfo()</code> runs, <code>this</code> points to...", options: ["object A (Sara)", "object B (Omar)", "nothing (null)", "the class Student"], answer: 1,
          explain: "<code>this</code> is always the object before the dot: here <code>b</code>, which points to B." },

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
        { type: 'memory', title: 'A copy and an alias', en: "Step through the program. Notice that <code>new Employee(e2)</code> builds a <b>second box</b>, while <code>e4 = e2</code> only adds an arrow.", frames: [
          { label: 'After <code>Employee e2 = new Employee("Huda", 9000);</code>', vars: [{ name: 'e2', type: 'Employee', ref: 'A' }], objects: [{ id: 'A', cls: 'Employee', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '9000.0' }] }] },
          { label: 'Inside the copy constructor: <code>this</code> is the new box B, <code>other</code> is A', vars: [{ name: 'e2', type: 'Employee', ref: 'A' }, { name: 'this', type: 'Employee', ref: 'B' }, { name: 'other', type: 'Employee', ref: 'A' }], objects: [{ id: 'A', cls: 'Employee', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '9000.0' }] }, { id: 'B', cls: 'Employee', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '9000.0' }] }] },
          { label: 'After <code>Employee e3 = new Employee(e2);</code>', vars: [{ name: 'e2', type: 'Employee', ref: 'A' }, { name: 'e3', type: 'Employee', ref: 'B' }], objects: [{ id: 'A', cls: 'Employee', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '9000.0' }] }, { id: 'B', cls: 'Employee', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '9000.0' }] }] },
          { label: 'After <code>Employee e4 = e2;</code>', vars: [{ name: 'e2', type: 'Employee', ref: 'A' }, { name: 'e3', type: 'Employee', ref: 'B' }, { name: 'e4', type: 'Employee', ref: 'A' }], objects: [{ id: 'A', cls: 'Employee', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '9000.0' }] }, { id: 'B', cls: 'Employee', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '9000.0' }] }] },
          { label: 'After <code>e3.salary = 9500; e4.salary = 7000;</code>', vars: [{ name: 'e2', type: 'Employee', ref: 'A' }, { name: 'e3', type: 'Employee', ref: 'B' }, { name: 'e4', type: 'Employee', ref: 'A' }], objects: [{ id: 'A', cls: 'Employee', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '7000.0' }] }, { id: 'B', cls: 'Employee', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '9500.0' }] }] }
        ], ar: "مُنشئ النسخ يبني صندوقًا ثانيًا، أما e4 = e2 فيضيف سهمًا فقط." },
        { type: 'p', en: "On paper: e3 is its own box (9500.0). e2 and e4 are two arrows to the same box (7000.0)." },
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
        { type: 'p', en: "Why bother? With chaining, the real work (the assignments and any checks) is written in <b>one</b> constructor only. The other constructors just pass values to it. If a rule changes later (for example, &quot;a GPA can never be negative&quot;), you fix one place instead of three." },
        { type: 'analogy', title: 'The main reception desk', en: "A hospital has several entrances, but every patient is sent to the same main reception desk to open a file. The entrances (short constructors) only guide you; the desk (the full constructor) does the real work.",
          ar: "مداخل كثيرة ومكتب استقبال واحد يقوم بالعمل الحقيقي." },
        { type: 'code', code: J`
          Student() {
              this("Unknown", 0.0);    // no data yet: send default values
          }

          Student(String name, double gpa) {
              this.name = name;        // the real work happens here only
              this.gpa = gpa;
          }
        ` },
        { type: 'p', en: "A copy constructor can chain too: <code>Student(Student other) { this(other.name, other.gpa); }</code>. It hands the other student's values to the full constructor.",
          ar: "حتى مُنشئ النسخ يمكنه استدعاء المُنشئ الكامل بـ this(...)." },
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
          `, ar: "النسخة مستقلة: غيّرنا سعر b فبقي سعر a كما هو." },
        { type: 'steps', title: 'Worked example 2: three ways to get a metro card', problem: "A metro card can be made in three ways: with no data (owner Guest, 5 riyals gift), with only a name (5 riyals gift), or with a name and a balance. Read a name and a balance, build one card each way using chaining, and show all three.",
          steps: [
            { en: "Step 1: Write the full constructor first. It is the only one that touches the fields.", code: J`
              MetroCard(String owner, double balance) {
                  this.owner = owner;
                  this.balance = balance;
              }
            ` },
            { en: "Step 2: The one-value constructor sends the name and the gift of 5.0 to the full constructor.", code: J`
              MetroCard(String owner) {
                  this(owner, 5.0);
              }
            ` },
            { en: "Step 3: The no-value constructor sends &quot;Guest&quot; to the one-value constructor (a chain of two jumps).", code: J`
              MetroCard() {
                  this("Guest");
              }
            ` },
            { en: "Step 4: In main build one card with each constructor.", code: J`
              MetroCard guest = new MetroCard();
              MetroCard basic = new MetroCard(name);
              MetroCard full = new MetroCard(name, money);
            ` },
            { en: "Step 5: Add <code>show()</code> and call it on each card.", code: J`
              void show() {
                  System.out.println(owner + ": " + balance + " riyals");
              }
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String name = sc.next();
                    double money = sc.nextDouble();
                    MetroCard guest = new MetroCard();
                    MetroCard basic = new MetroCard(name);
                    MetroCard full = new MetroCard(name, money);
                    guest.show();
                    basic.show();
                    full.show();
                }
            }

            class MetroCard {
                String owner;
                double balance;

                MetroCard() {
                    this("Guest");
                }

                MetroCard(String owner) {
                    this(owner, 5.0);
                }

                MetroCard(String owner, double balance) {
                    this.owner = owner;
                    this.balance = balance;
                }

                void show() {
                    System.out.println(owner + ": " + balance + " riyals");
                }
            }
          `, stdin: 'Lama 50', out: J`
            Guest: 5.0 riyals
            Lama: 5.0 riyals
            Lama: 50.0 riyals
          `, ar: "كل المُنشئات تنتهي عند المُنشئ الكامل، فالتعيين مكتوب في مكان واحد." }
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
        "<code>this(...)</code> calls another constructor and must be the <b>first statement</b>.",
        "Inside any method, <code>this</code> points to the object before the dot. A parameter with a field's name <b>shadows</b> (hides) the field."
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
          explain: "The copy is a separate object, so changing its price does not change the original." },
        { t: 'bug', q: "The program should print <code>Hessa 34</code> but prints <code>Hessa 0</code>. It compiles without any error. Tap the line with the bug.",
          qAr: "البرنامج يطبع 0 بدل 34. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Patient p = new Patient("Hessa", 34);
                    System.out.println(p.name + " " + p.age);
                }
            }

            class Patient {
                String name;
                int age;
                Patient(String name, int age) {
                    this.name = name;
                    age = age;
                }
            }
          `, bug: 13,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Patient p = new Patient("Hessa", 34);
                    System.out.println(p.name + " " + p.age);
                }
            }

            class Patient {
                String name;
                int age;

                Patient(String name, int age) {
                    this.name = name;
                    this.age = age;
                }
            }
          `,
          hint: "Which line works on the field, and which line works only on the parameter?",
          explain: "The parameter <code>age</code> shadows the field. On line 13 both sides mean the parameter, so 34 is copied onto itself and the field keeps its default 0. Writing <code>this.age = age;</code> stores the value in the object.",
          explainAr: "بدون this بقي الحقل age يساوي 0." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Order a = new Order("Latte", 2);
                  Order b = new Order(a);
                  b.addCups(3);
                  a.addCups(1);
                  System.out.println(a.cups + " " + b.cups);
              }
          }

          class Order {
              String drink;
              int cups;

              Order(String drink, int cups) {
                  this.drink = drink;
                  this.cups = cups;
              }

              Order(Order other) {
                  this(other.drink, other.cups);
              }

              void addCups(int cups) {
                  this.cups += cups;
              }
          }
        `, answer: '3 5', explain: "<code>new Order(a)</code> builds a separate copy with 2 cups. b gets 3 more (5), a gets 1 more (3). In <code>addCups</code>, <code>this.cups</code> is the field and <code>cups</code> is the parameter.",
          explainAr: "النسخة مستقلة: a صار 3 و b صار 5." },
        { t: 'mcq', q: "After these lines, which sentence is true?", code: J`
          Employee x = new Employee("Ali", 5000);
          Employee y = new Employee(x);   // copy constructor
          Employee z = y;
        `, options: [
            "There is one object, and x, y and z all point to it.",
            "There are two objects: x points to the first; y and z point to the copy.",
            "There are three objects, one for each variable.",
            "There are two objects: x and z point to the first; y points to the copy."
          ], answer: 1,
          explain: "Two <code>new</code> mean two objects. The copy constructor builds the second one for y. <code>z = y</code> adds an arrow to that copy; it does not build anything.",
          explainAr: "كائنان: x للأول، و y و z للنسخة." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 5
    {
      title: 'Encapsulation: private fields, getters and setters',
      titleAr: 'التغليف: الحقول الخاصة ودوال الجلب والتعيين',
      minutes: 35,
      body: [
        { type: 'h', en: 'The problem: anyone can break the data' },
        { type: 'p', en: "Right now any code can write <code>acc.balance = -5000;</code>. A bank account with a negative balance because of a typing mistake is a disaster. We want the class to <b>guard</b> its own data." },
        { type: 'analogy', title: 'The bank counter', en: "In a bank you cannot walk into the vault and take money. You go to the counter, and the clerk checks the rules: &quot;Do you have enough money?&quot;. The vault is <b>private</b>. The counter is <b>public</b>.",
          ar: "الخزنة خاصة والشباك عام: لا تأخذ المال مباشرة بل عبر موظف يتحقق من القواعد." },
        { type: 'p', en: "Most classes have <b>rules</b> that must always be true. A mark is between 0 and 100. A GPA is between 0.0 and 4.0. A balance is never negative. If the fields are open to everyone, one wrong line anywhere in a big program can break a rule, and you will not know which line did it." },
        { type: 'code', code: J`
          class BankAccount {
              double balance;          // open to everyone
          }

          // far away, in another part of the program:
          acc.balance = -5000;         // nobody stops this line
        ` },
        { type: 'p', en: "If only the class itself may change its fields, then only the class can break its rules. To find a bug you check one class instead of the whole program. That is the reason for this lesson.",
          ar: "إذا كان الصنف وحده يغيّر حقوله، فهو وحده المسؤول عن قواعده." },
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
          ['<code>protected</code>', 'Same package and subclasses (Unit 4)']
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
        { type: 'memory', title: 'Private fields are still inside the object', en: "<code>private</code> does not hide a field from memory. The field is inside the object as usual. It only means that code in <i>other</i> classes cannot touch it. Watch how the balance changes only through the public methods.", frames: [
          { label: 'After <code>new BankAccount("Nora", 1000)</code>', vars: [{ name: 'acc', type: 'BankAccount', ref: 'A' }], objects: [{ id: 'A', cls: 'BankAccount', fields: [{ name: 'owner (private)', value: '"Nora"' }, { name: 'balance (private)', value: '1000.0' }] }] },
          { label: 'After <code>acc.deposit(250);</code>', vars: [{ name: 'acc', type: 'BankAccount', ref: 'A' }], objects: [{ id: 'A', cls: 'BankAccount', fields: [{ name: 'owner (private)', value: '"Nora"' }, { name: 'balance (private)', value: '1250.0' }] }] },
          { label: 'After <code>acc.withdraw(2000);</code> (refused: no change)', vars: [{ name: 'acc', type: 'BankAccount', ref: 'A' }], objects: [{ id: 'A', cls: 'BankAccount', fields: [{ name: 'owner (private)', value: '"Nora"' }, { name: 'balance (private)', value: '1250.0' }] }] },
          { label: 'After <code>acc.withdraw(300);</code>', vars: [{ name: 'acc', type: 'BankAccount', ref: 'A' }], objects: [{ id: 'A', cls: 'BankAccount', fields: [{ name: 'owner (private)', value: '"Nora"' }, { name: 'balance (private)', value: '950.0' }] }] }
        ], ar: "الحقل الخاص موجود داخل الكائن، لكن لا يغيّره إلا كود الصنف نفسه." },
        { type: 'note', kind: 'tip', en: "There is no <code>setBalance</code> on purpose. The balance can only change through <code>deposit</code> and <code>withdraw</code>. Encapsulation is not &quot;a getter and setter for every field&quot;: it is about controlling HOW data changes.",
          ar: "لا نضع setBalance عمدًا." },

        { type: 'h', en: 'Names for getters and setters' },
        { type: 'p', en: "Java programmers all over the world use the same names, so anybody can read your class quickly. Take the field name, start it with a capital letter, and put <code>get</code> or <code>set</code> in front. For a <code>boolean</code> field the getter starts with <code>is</code>." },
        { type: 'table', head: ['Field', 'Getter', 'Setter'], rows: [
          ['<code>private String name;</code>', '<code>public String getName()</code>', '<code>public void setName(String name)</code>'],
          ['<code>private double gpa;</code>', '<code>public double getGpa()</code>', '<code>public void setGpa(double gpa)</code>'],
          ['<code>private boolean active;</code>', '<code>public boolean isActive()</code>', '<code>public void setActive(boolean active)</code>']
        ] },
        { type: 'check', q: "A class has <code>private boolean paid;</code>. What is the usual name of its getter?", options: ["getpaid()", "paid()", "isPaid()", "setPaid()"], answer: 2,
          explain: "For a boolean field the getter usually starts with <code>is</code>: <code>isPaid()</code>." },

        { type: 'h', en: 'A getter only reads' },
        { type: 'p', en: "People call a getter many times, just to look at a value. So a getter must <b>never change</b> anything. Imagine checking your balance on an app, and each check takes 4 riyals: nobody would trust that app. The same is true for a class." },
        { type: 'code', code: J`
          public double getBalance() {
              balance = balance - 4;   // WRONG: a getter must not change data
              return balance;
          }
        ` },
        { type: 'note', kind: 'warn', en: "A getter has one job: <code>return</code> the value. If something must change, write a method with an action name, such as <code>pay(double fare)</code>, so the reader knows that calling it changes the object.",
          ar: "دالة الجلب تُرجع القيمة فقط ولا تغيّر شيئًا." },

        { type: 'h', en: 'Check the rules at birth too' },
        { type: 'p', en: "Our setter refuses a mark of 500. But what about <code>new Student(\"Ali\", 500)</code>? If the constructor copies the value directly, the object is broken from its first second. The fix is simple: let the constructor <b>call the setter</b>, so the same check runs." },
        { type: 'code', code: J`
          public Student(String name, int mark) {
              this.name = name;
              setMark(mark);     // the same rule is checked here
          }
        ` },
        { type: 'lines', rows: [
          ['this.name = name;', 'No rule for the name, so we store it directly.'],
          ['setMark(mark);', 'A method of the same object, called without a dot (it means <code>this.setMark(mark)</code>). The check runs once, in one place.']
        ], ar: "اجعل المُنشئ يستدعي دالة التعيين حتى يُطبَّق الشرط نفسه عند الإنشاء." },
        { type: 'check', q: "Why should a constructor call <code>setMark(mark)</code> instead of writing <code>this.mark = mark;</code>?", options: ["It is faster", "So a bad value is refused even when the object is created", "Java requires it", "To make the field public"], answer: 1,
          explain: "The setter holds the rule. Calling it from the constructor protects the object from the very beginning." },
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
          `, ar: "main يستخدم الدوال العامة فقط، والرصيد الخاص محمي." },
        { type: 'steps', title: 'Worked example 2: a student record with a GPA rule', problem: "A GPA must be between 0.0 and 4.0. Read a name, a first GPA and a corrected GPA. The record must refuse a bad GPA both in the constructor and in the setter. Print the record after each step and say if the student is on the honor list (GPA 3.5 or more).",
          steps: [
            { en: "Step 1: Private fields.", code: J`
              private String name;
              private double gpa;
            ` },
            { en: "Step 2: The setter holds the rule. A bad value is refused with a message, and the old value stays.", code: J`
              public void setGpa(double gpa) {
                  if (gpa >= 0.0 && gpa <= 4.0) {
                      this.gpa = gpa;
                  } else {
                      System.out.println("Invalid GPA: " + gpa);
                  }
              }
            ` },
            { en: "Step 3: The constructor calls the setter, so the rule is checked at birth too.", code: J`
              public StudentRecord(String name, double gpa) {
                  this.name = name;
                  setGpa(gpa);
              }
            ` },
            { en: "Step 4: Getters only read. <code>isHonor()</code> also only reads.", code: J`
              public String getName() { return name; }
              public double getGpa() { return gpa; }
              public boolean isHonor() { return gpa >= 3.5; }
            ` },
            { en: "Step 5: In main, use only the public methods.", code: J`
              StudentRecord r = new StudentRecord(sc.next(), sc.nextDouble());
              System.out.println(r.getName() + " " + r.getGpa());
              r.setGpa(sc.nextDouble());
              System.out.println(r.getName() + " " + r.getGpa() + " honor=" + r.isHonor());
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    StudentRecord r = new StudentRecord(sc.next(), sc.nextDouble());
                    System.out.println(r.getName() + " " + r.getGpa());
                    r.setGpa(sc.nextDouble());
                    System.out.println(r.getName() + " " + r.getGpa() + " honor=" + r.isHonor());
                }
            }

            class StudentRecord {
                private String name;
                private double gpa;

                public StudentRecord(String name, double gpa) {
                    this.name = name;
                    setGpa(gpa);
                }

                public String getName() { return name; }
                public double getGpa() { return gpa; }
                public boolean isHonor() { return gpa >= 3.5; }

                public void setGpa(double gpa) {
                    if (gpa >= 0.0 && gpa <= 4.0) {
                        this.gpa = gpa;
                    } else {
                        System.out.println("Invalid GPA: " + gpa);
                    }
                }
            }
          `, stdin: 'Reem 5.2 3.7', out: J`
            Invalid GPA: 5.2
            Reem 0.0
            Reem 3.7 honor=true
          `, ar: "القاعدة مكتوبة مرة واحدة في دالة التعيين، ويستخدمها المُنشئ أيضًا." }
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
        "Private members are visible only inside their own class.",
        "Names: <code>getX()</code>, <code>setX(...)</code>, and <code>isX()</code> for a boolean. A getter only reads; the constructor can call the setter to check the rule at birth."
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
          explain: "The field is private. All changes go through the setter, which checks the rule." },
        { t: 'bug', q: "We check the same card twice and expect <code>20.0</code> both times. The program prints <code>16.0</code> and then <code>12.0</code>. Tap the line with the bug.",
          qAr: "فحص الرصيد يغيّره! أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    MetroCard c = new MetroCard(20);
                    System.out.println(c.getBalance());
                    System.out.println(c.getBalance());
                }
            }
            class MetroCard {
                private double balance;
                public MetroCard(double balance) { this.balance = balance; }
                public double getBalance() {
                    balance = balance - 4;
                    return balance;
                }
            }
          `, bug: 12,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    MetroCard c = new MetroCard(20);
                    System.out.println(c.getBalance());
                    System.out.println(c.getBalance());
                }
            }

            class MetroCard {
                private double balance;
                public MetroCard(double balance) { this.balance = balance; }
                public double getBalance() {
                    return balance;
                }
            }
          `,
          hint: "What should a getter do, and what should it never do?",
          explain: "Line 12 changes the balance inside a getter, so every look at the balance costs 4 riyals. A getter must only return the value. If paying a fare is needed, write a separate method such as <code>pay(double fare)</code>.",
          explainAr: "دالة الجلب يجب ألا تغيّر البيانات؛ احذف{{g:|ي}} السطر 12." },
        { t: 'output', q: "The constructor calls the setter. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Appointment a = new Appointment("Majed", 7);
                  Appointment b = new Appointment("Hessa", 10);
                  b.setHour(20);
                  System.out.println(a.getPatient() + " " + a.getHour());
                  System.out.println(b.getPatient() + " " + b.getHour());
              }
          }

          class Appointment {
              private String patient;
              private int hour = 8;

              public Appointment(String patient, int hour) {
                  this.patient = patient;
                  setHour(hour);
              }

              public String getPatient() { return patient; }
              public int getHour() { return hour; }

              public void setHour(int hour) {
                  if (hour >= 8 && hour <= 16) {
                      this.hour = hour;
                  } else {
                      System.out.println("Clinic closed at " + hour);
                  }
              }
          }
        `, answer: J`
          Clinic closed at 7
          Clinic closed at 20
          Majed 8
          Hessa 10
        `, explain: "Majed's 7 is refused inside the constructor, so his hour stays at the starting value 8. Hessa gets 10. Later 20 is refused, so Hessa keeps 10. The two messages print first because they happen before the last two println lines.",
          explainAr: "المُنشئ استدعى دالة التعيين فرفض الساعة 7، وبقيت 8." },
        { t: 'code', q: "Write a class <code>MetroCard</code> with a private <code>double balance</code>, a constructor <code>MetroCard(double balance)</code>, a getter <code>getBalance()</code>, and a method <code>boolean pay(double fare)</code> that takes the fare only when <code>0 &lt; fare &lt;= balance</code> and returns whether it worked. In <code>main</code> read the starting balance, then <code>n</code>, then <code>n</code> fares (no prompts). Count the trips that were paid. Print <code>Trips: COUNT</code> and then <code>Balance: BALANCE</code>.",
          qAr: "بطاقة مترو برصيد خاص ودالة pay ترفض الأجرة إذا لم يكفِ الرصيد.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read the balance, build the card, read n fares and pay them
                }
            }

            class MetroCard {
                private double balance;

                // constructor, getBalance(), pay(double fare)
            }
          `,
          tests: [
            { stdin: '10 3 4 4 4', expected: J`
              Trips: 2
              Balance: 2.0
            ` },
            { stdin: '5 3 6 2 4', expected: J`
              Trips: 1
              Balance: 3.0
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    MetroCard card = new MetroCard(sc.nextDouble());
                    int n = sc.nextInt();
                    int trips = 0;
                    for (int i = 0; i < n; i++) {
                        if (card.pay(sc.nextDouble())) {
                            trips++;
                        }
                    }
                    System.out.println("Trips: " + trips);
                    System.out.println("Balance: " + card.getBalance());
                }
            }

            class MetroCard {
                private double balance;

                public MetroCard(double balance) {
                    this.balance = balance;
                }

                public double getBalance() {
                    return balance;
                }

                public boolean pay(double fare) {
                    if (fare <= 0 || fare > balance) {
                        return false;
                    }
                    balance -= fare;
                    return true;
                }
            }
          `,
          hint: "In <code>pay</code>, return <code>false</code> first for a bad fare; otherwise subtract and return <code>true</code>. In main, count the <code>true</code> results.",
          explain: "The balance is private, so only <code>pay</code> can lower it, and <code>pay</code> checks the rule first. <code>main</code> only reads the boolean answer." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 6
    {
      title: 'toString and equals',
      titleAr: 'toString و equals',
      minutes: 35,
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
        { type: 'p', en: "What is that strange <code>Student@1b6d3586</code>? The part after <code>@</code> is a number Java makes from the object's identity. It can be different every time you run the program, so you can never predict it. That is one more reason to write your own <code>toString()</code>." },
        { type: 'p', en: "One more example: a café order. A good <code>toString()</code> shows the most useful facts in one short line." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  CafeOrder o = new CafeOrder("Latte", 2, 14.5);
                  System.out.println(o);
                  String line = "Order: " + o;
                  System.out.println(line);
              }
          }

          class CafeOrder {
              private String drink;
              private int cups;
              private double price;

              public CafeOrder(String drink, int cups, double price) {
                  this.drink = drink;
                  this.cups = cups;
                  this.price = price;
              }

              @Override
              public String toString() {
                  return cups + " x " + drink + " = " + (cups * price) + " riyals";
              }
          }
        `, out: J`
          2 x Latte = 29.0 riyals
          Order: 2 x Latte = 29.0 riyals
        ` },
        { type: 'lines', rows: [
          ['System.out.println(o);', '<code>println</code> receives an object, so it calls <code>o.toString()</code> and prints the text.'],
          ['"Order: " + o', 'Text plus an object: Java calls <code>o.toString()</code> and joins the two texts.'],
          ['(cups * price)', 'The brackets make Java multiply first (29.0) before joining the result to the text.']
        ], ar: "println وعلامة + مع النص تستدعيان toString تلقائيًا." },

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
        { type: 'memory', title: 'Same box or same data?', frames: [
          { label: 'After building <code>a</code> and <code>b</code>', vars: [{ name: 'a', type: 'Student', ref: 'A' }, { name: 'b', type: 'Student', ref: 'B' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'id', value: '202301' }, { name: 'name', value: '"Reem"' }, { name: 'gpa', value: '3.8' }] }, { id: 'B', cls: 'Student', fields: [{ name: 'id', value: '202301' }, { name: 'name', value: '"Reem"' }, { name: 'gpa', value: '3.8' }] }] },
          { label: 'After <code>Student c = a;</code>', vars: [{ name: 'a', type: 'Student', ref: 'A' }, { name: 'b', type: 'Student', ref: 'B' }, { name: 'c', type: 'Student', ref: 'A' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'id', value: '202301' }, { name: 'name', value: '"Reem"' }, { name: 'gpa', value: '3.8' }] }, { id: 'B', cls: 'Student', fields: [{ name: 'id', value: '202301' }, { name: 'name', value: '"Reem"' }, { name: 'gpa', value: '3.8' }] }] }
        ], ar: "== تقارن الأسهم (A مقابل B)، و equals تقارن البيانات داخل الصندوقين." },
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

        { type: 'h', en: 'Inside equals: following the arrows' },
        { type: 'p', en: "When you call <code>a.equals(b)</code>, the method gets two arrows: <code>this</code> (the object before the dot) and <code>obj</code> (the object in the brackets). The cast <code>(Student) obj</code> does not build anything. It only gives us a second arrow, of type Student, to the same box, so we may read its fields." },
        { type: 'memory', title: 'a.equals(b) step by step', frames: [
          { label: 'The method starts: <code>this</code> → A, <code>obj</code> → B', vars: [{ name: 'this', type: 'Student', ref: 'A' }, { name: 'obj', type: 'Object', ref: 'B' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'id', value: '202301' }] }, { id: 'B', cls: 'Student', fields: [{ name: 'id', value: '202301' }] }] },
          { label: 'After <code>Student other = (Student) obj;</code> (no new object)', vars: [{ name: 'this', type: 'Student', ref: 'A' }, { name: 'obj', type: 'Object', ref: 'B' }, { name: 'other', type: 'Student', ref: 'B' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'id', value: '202301' }] }, { id: 'B', cls: 'Student', fields: [{ name: 'id', value: '202301' }] }] },
          { label: '<code>return id == other.id;</code> compares 202301 with 202301: true', vars: [{ name: 'this', type: 'Student', ref: 'A' }, { name: 'obj', type: 'Object', ref: 'B' }, { name: 'other', type: 'Student', ref: 'B' }], objects: [{ id: 'A', cls: 'Student', fields: [{ name: 'id', value: '202301' }] }, { id: 'B', cls: 'Student', fields: [{ name: 'id', value: '202301' }] }] }
        ], ar: "التحويل (Student) لا يبني كائنًا؛ إنه سهم آخر إلى الصندوق نفسه." },

        { type: 'h', en: 'Strings are objects too' },
        { type: 'p', en: "In CS101 you learned to compare texts with <code>.equals</code>. Now you know why: a <code>String</code> is an object, and <code>==</code> only asks whether two arrows point to the same box. Two boxes can hold the same letters." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String part = "Riy";
                  String city = part + "adh";
                  System.out.println(city);
                  System.out.println(city == "Riyadh");
                  System.out.println(city.equals("Riyadh"));
              }
          }
        `, out: J`
          Riyadh
          false
          true
        ` },
        { type: 'lines', rows: [
          ['String city = part + "adh";', 'Joining builds a <b>new</b> String object while the program runs.'],
          ['city == "Riyadh"', 'Two different boxes with the same letters: <code>false</code>.'],
          ['city.equals("Riyadh")', 'String overrides equals to compare letters: <code>true</code>.']
        ], ar: "النص كائن؛ قارن النصوص دائمًا بـ equals." },

        { type: 'h', en: 'Which fields decide equality?' },
        { type: 'p', en: "You, the designer, decide what &quot;equal&quot; means for your class. Ask: which facts tell two objects apart in real life? Two students are the same student when the IDs match, even if one record has an old GPA. Two rooms are the same room when the building and the number match." },
        { type: 'table', head: ['Class', 'Equal when…', 'Not used'], rows: [
          ['Student', 'same <code>id</code>', 'name, GPA (can change)'],
          ['Room', 'same <code>building</code> and <code>number</code>', 'number of chairs'],
          ['Book', 'same <code>isbn</code>', 'number of copies'],
          ['CafeOrder', 'same <code>drink</code> and <code>size</code>', 'the time of the order']
        ] },
        { type: 'note', kind: 'tip', en: "Professional Java code also overrides a method called <code>hashCode()</code> whenever it overrides <code>equals</code>. You will need it in Unit 7 (collections). For now, focus on <code>equals</code>.",
          ar: "مع equals يُكتب عادة hashCode، وستحتاجه في الوحدة 7." },
        { type: 'check', q: "For a <code>NationalId</code> class with fields <code>number</code> and <code>holderName</code>, which equals is the most sensible?", options: ["Equal when the holder names match", "Equal when the ID numbers match", "Equal when both are not null", "Always true"], answer: 1,
          explain: "The ID number is what makes an ID unique. Names can repeat (many people are called Mohammed)." },
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
          `, ar: "نقارن النصوص بـ equals وليس ==." },
        { type: 'steps', title: 'Worked example 2: a clinic booking clash', problem: "A clinic must not book the same doctor twice at the same hour. Read two bookings (patient, doctor, hour). Print both bookings, then print whether they clash. Two bookings are &quot;equal&quot; (they clash) when the doctor and the hour are the same, even if the patients are different.",
          steps: [
            { en: "Step 1: Decide equality first: doctor and hour. The patient is not part of it.", code: J`
              private String patient;
              private String doctor;
              private int hour;
            ` },
            { en: "Step 2: A readable toString.", code: J`
              @Override
              public String toString() {
                  return patient + " with Dr. " + doctor + " at " + hour + ":00";
              }
            ` },
            { en: "Step 3: equals with the safe pattern: check null and class, cast, then compare the chosen fields (text with <code>.equals</code>, numbers with <code>==</code>).", code: J`
              @Override
              public boolean equals(Object obj) {
                  if (obj == null || getClass() != obj.getClass()) return false;
                  Booking other = (Booking) obj;
                  return doctor.equals(other.doctor) && hour == other.hour;
              }
            ` },
            { en: "Step 4: In main, read and build two bookings, then print them (toString runs by itself).", code: J`
              Booking a = new Booking(sc.next(), sc.next(), sc.nextInt());
              Booking b = new Booking(sc.next(), sc.next(), sc.nextInt());
              System.out.println(a);
              System.out.println(b);
            ` },
            { en: "Step 5: Use equals to decide.", code: J`
              if (a.equals(b)) {
                  System.out.println("Clash: same doctor at the same hour");
              } else {
                  System.out.println("No clash");
              }
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Booking a = new Booking(sc.next(), sc.next(), sc.nextInt());
                    Booking b = new Booking(sc.next(), sc.next(), sc.nextInt());
                    System.out.println(a);
                    System.out.println(b);
                    if (a.equals(b)) {
                        System.out.println("Clash: same doctor at the same hour");
                    } else {
                        System.out.println("No clash");
                    }
                }
            }

            class Booking {
                private String patient;
                private String doctor;
                private int hour;

                public Booking(String patient, String doctor, int hour) {
                    this.patient = patient;
                    this.doctor = doctor;
                    this.hour = hour;
                }

                @Override
                public String toString() {
                    return patient + " with Dr. " + doctor + " at " + hour + ":00";
                }

                @Override
                public boolean equals(Object obj) {
                    if (obj == null || getClass() != obj.getClass()) return false;
                    Booking other = (Booking) obj;
                    return doctor.equals(other.doctor) && hour == other.hour;
                }
            }
          `, stdin: 'Hessa Khalid 10 Majed Khalid 10', out: J`
            Hessa with Dr. Khalid at 10:00
            Majed with Dr. Khalid at 10:00
            Clash: same doctor at the same hour
          `, ar: "نحن نقرر معنى التساوي: هنا الطبيب والساعة فقط." }
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
        "Compare text fields with <code>.equals</code>: a String is an object too.",
        "You decide which fields define equality (an ID, or building + number…)."
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
          explain: "toString builds the readable text; equals compares the identifying fields after the class check." },
        { t: 'bug', q: "Both books have the same ISBN, and <code>Book</code> overrides <code>equals</code>. The program should print <code>Same book? true</code> but prints <code>Same book? false</code>. Tap the line with the bug.",
          qAr: "الكتابان لهما الرقم نفسه. أين الخطأ في المقارنة؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Book a = new Book("978-1");
                    Book b = new Book("978-1");
                    System.out.println("Same book? " + (a == b));
                }
            }
            class Book {
                private String isbn;
                Book(String isbn) { this.isbn = isbn; }
                @Override
                public boolean equals(Object obj) {
                    if (obj == null || getClass() != obj.getClass()) return false;
                    Book other = (Book) obj;
                    return isbn.equals(other.isbn);
                }
            }
          `, bug: 5,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Book a = new Book("978-1");
                    Book b = new Book("978-1");
                    System.out.println("Same book? " + a.equals(b));
                }
            }
            class Book {
                private String isbn;
                Book(String isbn) { this.isbn = isbn; }
                @Override
                public boolean equals(Object obj) {
                    if (obj == null || getClass() != obj.getClass()) return false;
                    Book other = (Book) obj;
                    return isbn.equals(other.isbn);
                }
            }
          `,
          hint: "Which operator compares arrows, and which method compares data?",
          explain: "<code>a == b</code> asks whether a and b point to the same box. They point to two different boxes, so it is false, even though the ISBNs match. <code>a.equals(b)</code> runs our override and compares the ISBNs.",
          explainAr: "== تقارن الأسهم؛ استخدم{{g:|ي}} equals لمقارنة البيانات." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Coin a = new Coin(5);
                  Coin b = new Coin(5);
                  Coin c = null;
                  System.out.println("Coins: " + a + ", " + b);
                  System.out.println(a.equals(b) + " " + (a == b));
                  System.out.println(a.equals(c));
              }
          }

          class Coin {
              private int value;

              Coin(int value) { this.value = value; }

              @Override
              public String toString() { return value + " SAR"; }

              @Override
              public boolean equals(Object obj) {
                  if (obj == null || getClass() != obj.getClass()) return false;
                  Coin other = (Coin) obj;
                  return value == other.value;
              }
          }
        `, answer: J`
          Coins: 5 SAR, 5 SAR
          true false
          false
        `, explain: "Joining text with an object calls toString. equals compares values (true), == compares arrows (false). <code>a.equals(null)</code> returns false thanks to the <code>obj == null</code> check, so there is no crash.",
          explainAr: "equals(null) تُرجع false بسبب الفحص الأول." },
        { t: 'code', q: "Class <code>CafeOrder</code> (drink, size) is started for you. Add <code>toString()</code> returning <code>SIZE DRINK</code> (for example <code>M Latte</code>) and <code>equals</code> (same drink and same size). Main is written: it reads two orders, prints them, and says if they are the same.",
          qAr: "أضف toString و equals إلى الصنف CafeOrder.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    CafeOrder a = new CafeOrder(sc.next(), sc.next());
                    CafeOrder b = new CafeOrder(sc.next(), sc.next());
                    System.out.println(a);
                    System.out.println(b);
                    if (a.equals(b)) {
                        System.out.println("Same order");
                    } else {
                        System.out.println("Different orders");
                    }
                }
            }

            class CafeOrder {
                private String drink;
                private String size;

                public CafeOrder(String drink, String size) {
                    this.drink = drink;
                    this.size = size;
                }

                // add toString and equals
            }
          `,
          tests: [
            { stdin: 'Latte M Latte M', expected: J`
              M Latte
              M Latte
              Same order
            ` },
            { stdin: 'Latte M Latte L', expected: J`
              M Latte
              L Latte
              Different orders
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    CafeOrder a = new CafeOrder(sc.next(), sc.next());
                    CafeOrder b = new CafeOrder(sc.next(), sc.next());
                    System.out.println(a);
                    System.out.println(b);
                    if (a.equals(b)) {
                        System.out.println("Same order");
                    } else {
                        System.out.println("Different orders");
                    }
                }
            }

            class CafeOrder {
                private String drink;
                private String size;

                public CafeOrder(String drink, String size) {
                    this.drink = drink;
                    this.size = size;
                }

                @Override
                public String toString() {
                    return size + " " + drink;
                }

                @Override
                public boolean equals(Object obj) {
                    if (obj == null || getClass() != obj.getClass()) return false;
                    CafeOrder other = (CafeOrder) obj;
                    return drink.equals(other.drink) && size.equals(other.size);
                }
            }
          `,
          hint: "Both fields are Strings, so compare both with <code>.equals</code>, joined by <code>&amp;&amp;</code>.",
          explain: "toString returns the text (it does not print). equals uses the safe pattern and compares both String fields with <code>.equals</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 7
    {
      title: 'Static members: things shared by the whole class',
      titleAr: 'الأعضاء الساكنة: ما يشترك فيه الصنف كله',
      minutes: 35,
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
        { type: 'memory', title: 'One shared counter, one number per ticket', en: "We draw the static part of the class in its own box (S). It is not inside any ticket: the tickets A, B and C only hold their own <code>number</code>. The static box exists even before the first ticket is built.", frames: [
          { label: 'When the program starts: no tickets yet', vars: [], objects: [{ id: 'S', cls: 'Ticket (static part)', fields: [{ name: 'count', value: '0' }] }] },
          { label: 'After <code>Ticket a = new Ticket();</code>', vars: [{ name: 'a', type: 'Ticket', ref: 'A' }], objects: [{ id: 'S', cls: 'Ticket (static part)', fields: [{ name: 'count', value: '1' }] }, { id: 'A', cls: 'Ticket', fields: [{ name: 'number', value: '1' }] }] },
          { label: 'After <code>Ticket b = new Ticket();</code>', vars: [{ name: 'a', type: 'Ticket', ref: 'A' }, { name: 'b', type: 'Ticket', ref: 'B' }], objects: [{ id: 'S', cls: 'Ticket (static part)', fields: [{ name: 'count', value: '2' }] }, { id: 'A', cls: 'Ticket', fields: [{ name: 'number', value: '1' }] }, { id: 'B', cls: 'Ticket', fields: [{ name: 'number', value: '2' }] }] },
          { label: 'After <code>Ticket c = new Ticket();</code>', vars: [{ name: 'a', type: 'Ticket', ref: 'A' }, { name: 'b', type: 'Ticket', ref: 'B' }, { name: 'c', type: 'Ticket', ref: 'C' }], objects: [{ id: 'S', cls: 'Ticket (static part)', fields: [{ name: 'count', value: '3' }] }, { id: 'A', cls: 'Ticket', fields: [{ name: 'number', value: '1' }] }, { id: 'B', cls: 'Ticket', fields: [{ name: 'number', value: '2' }] }, { id: 'C', cls: 'Ticket', fields: [{ name: 'number', value: '3' }] }] }
        ], ar: "الحقل الساكن في صندوق الصنف وحده، وكل تذكرة تحمل رقمها فقط." },
        { type: 'note', kind: 'exam', en: "You may write <code>a.count</code>, and it compiles, but it is the <b>same</b> shared variable as <code>Ticket.count</code>. Changing it through one ticket changes it for all. Always use the class name so the reader sees that it is shared.",
          ar: "a.count و Ticket.count متغير واحد مشترك." },

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
        { type: 'analogy', title: 'The school office', en: "To ask &quot;how many students are in the school?&quot; you go to the school office. You do not need to stop one particular student. A static method is the office: you ask the class itself, with no object.",
          ar: "الدالة الساكنة كمكتب المدرسة: نسأل الصنف نفسه دون كائن معيّن." },
        { type: 'p', en: "Static methods are perfect for small tools that need only their parameters, like <code>Math.max</code>. Here is our own tool class. It has a constant and a static method, and we never build a <code>PriceTools</code> object." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println(PriceTools.withVat(100));
                  System.out.println(PriceTools.withVat(40));
              }
          }

          class PriceTools {
              public static final double VAT = 0.15;

              public static double withVat(double price) {
                  return price + price * VAT;
              }
          }
        `, out: J`
          115.0
          46.0
        ` },
        { type: 'lines', rows: [
          ['PriceTools.withVat(100)', 'Class name, dot, method. No <code>new</code>, no object.'],
          ['public static final double VAT = 0.15;', 'The VAT rate is written in ONE place. If it changes, we change one line.'],
          ['return price + price * VAT;', 'The method uses only its parameter and a static constant, so it can be static.']
        ], ar: "الدالة الساكنة تعمل بمعاملاتها فقط، ونستدعيها باسم الصنف." },
        { type: 'p', en: "Now you can also understand <code>public static void main</code>. When a program starts, no object exists yet. Java needs a method it can call on the <b>class</b>, without building anything first. That is why <code>main</code> is static, and also why <code>main</code> cannot use normal fields directly." },
        { type: 'check', q: "Why is <code>main</code> declared <code>static</code>?", options: ["Because it prints text", "Because Java must call it before any object exists", "Because it is public", "Because it returns nothing"], answer: 1,
          explain: "At the start there are no objects, so the starting method must belong to the class itself." },
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

        { type: 'h', en: 'Constants instead of magic numbers' },
        { type: 'p', en: "A number written directly in the code, like <code>40</code> for the size of a class section, is called a <b>magic number</b>: the reader does not know what it means, and if the rule changes you must find every copy. A named constant fixes both problems." },
        { type: 'code', code: J`
          class Section {
              public static final int MAX_STUDENTS = 40;
              private int enrolled;

              public boolean addStudent() {
                  if (enrolled < MAX_STUDENTS) {
                      enrolled++;
                      return true;
                  }
                  return false;
              }
          }
        ` },
        { type: 'lines', rows: [
          ['static final int MAX_STUDENTS = 40;', '<code>static</code>: one copy for the class. <code>final</code>: it can never change. CAPITAL letters with <code>_</code> between words.'],
          ['if (enrolled < MAX_STUDENTS)', 'The rule now reads like English: &quot;if enrolled is less than the maximum&quot;.']
        ], ar: "الثابت المسمّى أوضح من رقم مكتوب مباشرة، ونغيّره في مكان واحد." },
        { type: 'check', q: "Which declaration is the best for a fixed late fee of 25 riyals used by every library loan?", options: ["<code>int lateFee = 25;</code>", "<code>public static final int LATE_FEE = 25;</code>", "<code>static int late_fee;</code>", "<code>final int x = 25;</code> inside main"], answer: 1,
          explain: "The fee is the same for every loan (static) and must never change (final). Constant names use CAPITAL letters." },
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
          `, ar: "العدّاد الساكن يعدّ كل الكائنات، ولكل تذكرة رقمها الخاص." },
        { type: 'steps', title: 'Worked example 2: café order numbers', problem: "A café numbers its orders 101, 102, 103… Each extra espresso shot costs 3 riyals (a constant). Read n orders (drink, price, extra shots). Print each order as <code>#NUMBER DRINK TOTAL riyals</code>, then the number of orders today.",
          steps: [
            { en: "Step 1: A constant for the shot price and a static counter shared by all orders.", code: J`
              public static final int SHOT_PRICE = 3;
              private static int count = 0;
            ` },
            { en: "Step 2: Normal fields: every order has its own number, drink, price and shots.", code: J`
              private int number;
              private String drink;
              private int price;
              private int shots;
            ` },
            { en: "Step 3: The constructor raises the shared counter and builds the order number from it.", code: J`
              public CafeOrder(String drink, int price, int shots) {
                  count++;
                  this.number = 100 + count;
                  this.drink = drink;
                  this.price = price;
                  this.shots = shots;
              }
            ` },
            { en: "Step 4: A normal method for the total (it needs this order's fields), and a static getter for the count.", code: J`
              public int total() {
                  return price + shots * SHOT_PRICE;
              }

              public static int getCount() { return count; }
            ` },
            { en: "Step 5: In main, build each order in a loop and print it (toString), then ask the class for the count.", code: J`
              for (int i = 0; i < n; i++) {
                  CafeOrder o = new CafeOrder(sc.next(), sc.nextInt(), sc.nextInt());
                  System.out.println(o);
              }
              System.out.println("Orders today: " + CafeOrder.getCount());
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        CafeOrder o = new CafeOrder(sc.next(), sc.nextInt(), sc.nextInt());
                        System.out.println(o);
                    }
                    System.out.println("Orders today: " + CafeOrder.getCount());
                }
            }

            class CafeOrder {
                public static final int SHOT_PRICE = 3;
                private static int count = 0;

                private int number;
                private String drink;
                private int price;
                private int shots;

                public CafeOrder(String drink, int price, int shots) {
                    count++;
                    this.number = 100 + count;
                    this.drink = drink;
                    this.price = price;
                    this.shots = shots;
                }

                public int total() {
                    return price + shots * SHOT_PRICE;
                }

                public static int getCount() { return count; }

                @Override
                public String toString() {
                    return "#" + number + " " + drink + " " + total() + " riyals";
                }
            }
          `, stdin: J`
            3
            Latte 14 1
            Tea 6 0
            Mocha 16 2
          `, out: J`
            #101 Latte 17 riyals
            #102 Tea 6 riyals
            #103 Mocha 22 riyals
            Orders today: 3
          `, ar: "العدّاد الساكن يعطي كل طلب رقمًا جديدًا، والثابت يحدد سعر الإضافة في مكان واحد." }
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
        "<code>static final</code> means a constant; write its name in CAPITAL LETTERS. Constants replace magic numbers.",
        "Counters that count objects are the classic use of <code>static</code>.",
        "<code>main</code> is static because Java calls it before any object exists."
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
          explain: "The static <code>count</code> grows in the constructor, so it equals the number of objects created. <code>println(s)</code> calls the overridden <code>toString()</code>." },
        { t: 'bug', q: "Every ticket should have its own number, so the program should print <code>1 2 3</code>. It prints <code>3 3 3</code>. Tap the line with the bug.",
          qAr: "كل التذاكر تحمل الرقم نفسه. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Ticket a = new Ticket();
                    Ticket b = new Ticket();
                    Ticket c = new Ticket();
                    System.out.println(a.getNumber() + " " + b.getNumber() + " " + c.getNumber());
                }
            }
            class Ticket {
                private static int count = 0;
                private static int number;
                public Ticket() { count++; number = count; }
                public int getNumber() { return number; }
            }
          `, bug: 11,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Ticket a = new Ticket();
                    Ticket b = new Ticket();
                    Ticket c = new Ticket();
                    System.out.println(a.getNumber() + " " + b.getNumber() + " " + c.getNumber());
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
            }
          `,
          hint: "Which value should be shared by all tickets, and which value should each ticket keep for itself?",
          explain: "Line 11 makes <code>number</code> static, so there is only ONE number for all tickets. Each new ticket overwrites it, and at the end all three show 3. A per-object value must be a normal field: <code>private int number;</code>.",
          explainAr: "رقم التذكرة يجب أن يكون لكل كائن، فلا يكون static." },
        { t: 'output', q: "What does this program print? (Watch the line <code>r1.capacity = 35;</code>.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  Classroom.capacity = 30;
                  Classroom r1 = new Classroom("B101");
                  Classroom r2 = new Classroom("F205");
                  r1.capacity = 35;
                  System.out.println(r2.name + " " + r2.capacity);
                  System.out.println(Classroom.capacity);
              }
          }

          class Classroom {
              static int capacity;
              String name;

              Classroom(String name) {
                  this.name = name;
              }
          }
        `, answer: J`
          F205 35
          35
        `, explain: "<code>capacity</code> is static: one shared copy. <code>r1.capacity = 35;</code> looks like it changes only r1, but it changes the shared value, so r2 and the class also see 35. Each room keeps its own <code>name</code>.",
          explainAr: "الحقل الساكن واحد للجميع، فتغييره عبر r1 يظهر عند r2." },
        { t: 'mcq', q: "In a <code>Student</code> class, which one should be <code>static</code>?",
          options: ["The student's GPA", "The student's name", "The number of Student objects created so far", "The student's ID"], answer: 2,
          explain: "GPA, name and ID are different for each student, so they are normal fields. The count of all students belongs to the whole class: static.",
          explainAr: "عدد الطلاب يخص الصنف كله، أما الاسم والمعدل فلكل طالب." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 8
    {
      title: 'Abstract classes and UML diagrams',
      titleAr: 'الأصناف المجردة ومخططات UML',
      minutes: 35,
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
        { type: 'p', en: "Why do teams draw UML first? A class box fits on one page, so a teacher, a classmate or a client can check the plan in a minute, before anyone writes a hundred lines of code. Changing a drawing is cheap; changing finished code is expensive. In exams you will both <b>read</b> boxes (and write the Java) and <b>draw</b> boxes for a class you are given.",
          ar: "الرسم أولًا أرخص من تعديل الكود لاحقًا، وفي الاختبار نقرأ المخطط ونرسمه." },
        { type: 'h', en: 'Static members in a UML box' },
        { type: 'p', en: "In a real UML drawing, static members are <u>underlined</u>. Plain text cannot show underlining well, so in this course we write <code>(underlined)</code> next to them. A constant usually also shows its value." },
        { type: 'code', code: J`
          +------------------------------------------------+
          |                    Ticket                      |
          +------------------------------------------------+
          | + PRICE: int = 15               (underlined)   |
          | - count: int                    (underlined)   |
          | - number: int                                  |
          +------------------------------------------------+
          | + Ticket()                                     |
          | + getNumber(): int                             |
          | + getCount(): int               (underlined)   |
          +------------------------------------------------+
        ` },
        { type: 'lines', title: 'From the box to Java', rows: [
          ['+ PRICE: int = 15  (underlined)', '<code>public static final int PRICE = 15;</code> (a constant: capital letters and a fixed value).'],
          ['- count: int  (underlined)', '<code>private static int count;</code>'],
          ['- number: int', '<code>private int number;</code> (not underlined: one per object)'],
          ['+ getCount(): int  (underlined)', '<code>public static int getCount()</code>']
        ], ar: "العضو المسطَّر في UML يعني static." },
        { type: 'check', q: "How do you write <code>+ getTotal(): double</code> <u>(underlined)</u> in Java?", options: ["<code>public double getTotal()</code>", "<code>private static double getTotal()</code>", "<code>public static double getTotal()</code>", "<code>public static getTotal(): double</code>"], answer: 2,
          explain: "<code>+</code> is public, underlined is static, and the type after the colon is the return type, written before the name in Java." },
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
        { type: 'steps', title: 'Worked example 2: a UML box with a static counter', problem: "Write the class from this UML box, then read two appointments, print them and print how many were made.<br><code>Appointment</code>: <code>- count: int</code> (underlined), <code>- patient: String</code>, <code>- hour: int</code>, <code>+ Appointment(patient: String, hour: int)</code>, <code>+ getCount(): int</code> (underlined), <code>+ toString(): String</code> returning <code>PATIENT at HOUR:00</code>.",
          steps: [
            { en: "Step 1: Fields. The underlined one is static; the others belong to each object.", code: J`
              private static int count = 0;
              private String patient;
              private int hour;
            ` },
            { en: "Step 2: The constructor (+ means public). It fills the fields and counts the new object.", code: J`
              public Appointment(String patient, int hour) {
                  this.patient = patient;
                  this.hour = hour;
                  count++;
              }
            ` },
            { en: "Step 3: The underlined method becomes a static method.", code: J`
              public static int getCount() { return count; }
            ` },
            { en: "Step 4: <code>toString(): String</code> becomes the usual override.", code: J`
              @Override
              public String toString() {
                  return patient + " at " + hour + ":00";
              }
            ` },
            { en: "Step 5: Use the class in main.", code: J`
              Appointment a = new Appointment(sc.next(), sc.nextInt());
              Appointment b = new Appointment(sc.next(), sc.nextInt());
              System.out.println(a);
              System.out.println(b);
              System.out.println("Appointments: " + Appointment.getCount());
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Appointment a = new Appointment(sc.next(), sc.nextInt());
                    Appointment b = new Appointment(sc.next(), sc.nextInt());
                    System.out.println(a);
                    System.out.println(b);
                    System.out.println("Appointments: " + Appointment.getCount());
                }
            }

            class Appointment {
                private static int count = 0;
                private String patient;
                private int hour;

                public Appointment(String patient, int hour) {
                    this.patient = patient;
                    this.hour = hour;
                    count++;
                }

                public static int getCount() { return count; }

                @Override
                public String toString() {
                    return patient + " at " + hour + ":00";
                }
            }
          `, stdin: 'Hessa 9 Majed 11', out: J`
            Hessa at 9:00
            Majed at 11:00
            Appointments: 2
          `, ar: "كل سطر في المخطط يصبح عضوًا في الصنف، والمسطَّر يصبح static." },

        { type: 'h', en: 'The other way: from code to a box' },
        { type: 'p', en: "In exams you will also go the other way: you get a class and must draw its box. Work member by member. <code>private</code> becomes <code>-</code>, <code>public</code> becomes <code>+</code>, static members are underlined, and the type moves to the end, after a colon. A UML box shows only the plan: no method bodies and no code inside the methods." },
        { type: 'code', code: J`
          class MetroCard {
              public static final double FARE = 4.0;
              private String owner;
              private double balance;

              public MetroCard(String owner) { ... }
              public boolean pay() { ... }
              public double getBalance() { ... }
          }
        ` },
        { type: 'code', code: J`
          +-------------------------------------------+
          |                MetroCard                  |
          +-------------------------------------------+
          | + FARE: double = 4.0        (underlined)  |
          | - owner: String                           |
          | - balance: double                         |
          +-------------------------------------------+
          | + MetroCard(owner: String)                |
          | + pay(): boolean                          |
          | + getBalance(): double                    |
          +-------------------------------------------+
        ` },
        { type: 'lines', rows: [
          ['private double balance;', '<code>- balance: double</code>: the name first, then a colon and the type.'],
          ['public boolean pay() { ... }', '<code>+ pay(): boolean</code>: brackets show it is a method; the return type goes at the end.'],
          ['public MetroCard(String owner)', '<code>+ MetroCard(owner: String)</code>: a constructor has no return type in UML either.']
        ], ar: "من الكود إلى المخطط: - للخاص و + للعام والنوع بعد النقطتين." },
        { type: 'check', q: "How do you draw <code>private boolean active;</code> in a UML box?", options: ["<code>+ active: boolean</code>", "<code>- boolean active</code>", "<code>- active: boolean</code>", "<code>- active(): boolean</code>"], answer: 2,
          explain: "Private is <code>-</code>, then the name, a colon and the type. No brackets, because it is a field, not a method." },

        { type: 'h', en: 'Abstract classes: a plan that is too general' },
        { type: 'p', en: "Sometimes an idea is too general to build. What is the area of &quot;a shape&quot;? A circle and a rectangle compute it in different ways. We can write a class <code>Shape</code> that holds what is common (a color) but is <code>abstract</code>: nobody may build a plain <code>Shape</code> with <code>new</code>." },
        { type: 'analogy', title: 'The word &quot;vehicle&quot;', en: "Nobody drives &quot;a vehicle&quot;. You drive a car or a bus. &quot;Vehicle&quot; is an idea that says every vehicle has wheels and can move, but it leaves the details to cars and buses.",
          ar: "لا أحد يقود مركبة عامة؛ نقود سيارة أو حافلة. الصنف المجرد فكرة عامة." },
        { type: 'p', en: "An <b>abstract method</b> has a header but <b>no body</b>. Every concrete class that extends the abstract class must write the body. (The words <code>extends</code> and <code>super</code> are explained properly in Unit 4; here just notice the idea.)" },
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
        { type: 'p', en: "How many objects does <code>new Rectangle(\"blue\", 3, 4)</code> build? Only <b>one</b>. That one Rectangle object carries the field from the Shape plan (<code>color</code>) and its own fields (<code>width</code>, <code>height</code>). There is never a separate Shape object." },
        { type: 'memory', title: 'One object with two parts', frames: [
          { label: 'After <code>Rectangle r = new Rectangle("blue", 3, 4);</code>', vars: [{ name: 'r', type: 'Rectangle', ref: 'A' }], objects: [{ id: 'A', cls: 'Rectangle', fields: [{ name: 'color (from Shape)', value: '"blue"' }, { name: 'width', value: '3.0' }, { name: 'height', value: '4.0' }] }] }
        ], ar: "كائن واحد فقط يحمل حقل Shape وحقوله الخاصة." },
        { type: 'p', en: "In UML, an abstract class or method is written in <i>italics</i>. In plain text we write <code>{abstract}</code> after the name:" },
        { type: 'code', code: J`
          +-------------------------------------+
          |          Shape {abstract}           |
          +-------------------------------------+
          | - color: String                     |
          +-------------------------------------+
          | + Shape(color: String)              |
          | + getColor(): String                |
          | + area(): double {abstract}         |
          | + describe(): void                  |
          +-------------------------------------+
        ` },
        { type: 'p', en: "You will learn how classes like <code>Rectangle</code> connect to <code>Shape</code> (the word <code>extends</code>) in Unit 4. For now, remember the two rules: no <code>new</code> for an abstract class, and no body for an abstract method.",
          ar: "اسم الصنف المجرد يُكتب مائلًا في UML، وسنتعلم extends في الوحدة 4." },
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
        "Use abstract classes for general ideas such as Shape or Employee.",
        "In UML, underlined = static (we write <code>(underlined)</code>), italics = abstract (we write <code>{abstract}</code>)."
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
          explain: "Each line of the UML box becomes one member of the class." },
        { t: 'bug', q: "A student turned this UML box into Java: <code>Product</code> with <code>- name: String</code>, <code>- price: double</code>, <code>+ Product(name: String, price: double)</code>, <code>+ getName(): String</code>, <code>+ getPrice(): double</code>. The code does not compile. Tap the line that does not match the box.",
          qAr: "سطر واحد لا يطابق مخطط UML. أين هو؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Product p = new Product("Pen", 2.5);
                    System.out.println(p.getName() + " " + p.getPrice());
                }
            }
            class Product {
                private String name;
                private double price;
                public Product(String name, double price) { this.name = name; this.price = price; }
                public String getName() { return name; }
                public void getPrice() { return price; }
            }
          `, bug: 12,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Product p = new Product("Pen", 2.5);
                    System.out.println(p.getName() + " " + p.getPrice());
                }
            }

            class Product {
                private String name;
                private double price;
                public Product(String name, double price) {
                    this.name = name;
                    this.price = price;
                }
                public String getName() { return name; }
                public double getPrice() { return price; }
            }
          `,
          hint: "Read <code>+ getPrice(): double</code> again. What comes after the colon?",
          explain: "In UML the type after the colon is the return type. <code>getPrice(): double</code> means <code>public double getPrice()</code>. With <code>void</code>, the method may not return a value, so line 12 fails (and line 4 cannot print a void result).",
          explainAr: "النوع بعد النقطتين في UML هو نوع الإرجاع: double وليس void." },
        { t: 'mcq', q: "A UML box shows <code>- count: int</code> <u>(underlined)</u>. Which Java line matches it?",
          options: ["<code>public int count;</code>", "<code>private int count;</code>", "<code>private static int count;</code>", "<code>public static final int COUNT;</code>"], answer: 2,
          explain: "<code>-</code> means private, and underlined means static. It has no fixed value and a normal name, so it is not a constant.",
          explainAr: "الرمز - يعني private، والتسطير يعني static." },
        { t: 'mcq', q: "<code>Shape</code> is abstract and <code>Rectangle extends Shape</code>. How many objects does <code>new Rectangle(\"blue\", 3, 4)</code> build?",
          options: ["Two: a Shape and a Rectangle", "One Rectangle object that also holds the fields from Shape", "Zero, because Shape is abstract", "One Shape object"], answer: 1,
          explain: "One <code>new</code> builds one object. The Rectangle object carries the Shape part (color) and its own fields. An abstract class never gets its own object.",
          explainAr: "new واحدة تبني كائنًا واحدًا يحمل الجزأين." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 9
    {
      title: 'Passing objects to methods and returning objects',
      titleAr: 'تمرير الكائنات إلى الدوال وإرجاعها',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: methods that work on objects' },
        { type: 'p', en: "In real programs, objects travel between methods. A transfer moves money from one account to another. A clinic moves an appointment to a new hour. A program asks &quot;which of these two students has the higher GPA?&quot; and gets one student back. To write such methods you must know exactly what Java sends when you pass an object. This one rule explains many surprising outputs, and it appears in almost every exam." },

        { type: 'h', en: 'First, a reminder: numbers are copied' },
        { type: 'p', en: "In CS101 you passed numbers to methods. The method receives a <b>copy</b> of the value. If the method changes its copy, the caller's variable does not change." },
        { type: 'analogy', title: 'A photocopy of your marks', en: "You give a classmate a photocopy of your marks sheet. He writes 75 on his copy. Your own sheet still says 70. The method got the photocopy.",
          ar: "الدالة تأخذ صورة من الرقم؛ الكتابة على الصورة لا تغيّر الأصل." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  int marks = 70;
                  addBonus(marks);
                  System.out.println(marks);
              }

              static void addBonus(int m) {
                  m = m + 5;
                  System.out.println("Inside: " + m);
              }
          }
        `, out: J`
          Inside: 75
          70
        ` },
        { type: 'memory', title: 'A number is copied', en: "In these pictures we write the method's name next to each variable, so you can see which method owns it.", frames: [
          { label: 'In main: <code>int marks = 70;</code>', vars: [{ name: 'marks (main)', type: 'int', value: '70' }], objects: [] },
          { label: 'The call <code>addBonus(marks)</code>: <code>m</code> gets a copy of 70', vars: [{ name: 'marks (main)', type: 'int', value: '70' }, { name: 'm (addBonus)', type: 'int', value: '70' }], objects: [] },
          { label: 'After <code>m = m + 5;</code>', vars: [{ name: 'marks (main)', type: 'int', value: '70' }, { name: 'm (addBonus)', type: 'int', value: '75' }], objects: [] },
          { label: 'Back in main: <code>m</code> is gone, <code>marks</code> is still 70', vars: [{ name: 'marks (main)', type: 'int', value: '70' }], objects: [] }
        ], ar: "المتغير m نسخة مستقلة، وينتهي عند انتهاء الدالة." },

        { type: 'h', en: 'Objects: the arrow is copied' },
        { type: 'p', en: "Now pass an object. Java follows the <b>same</b> rule: it sends a copy. But a variable of a class type holds an <b>arrow</b>, so the method receives a copy of the arrow. Two arrows, one object! The method can follow its arrow and change the object, and the caller will see the change." },
        { type: 'analogy', title: 'Your home address', en: "You give a painter a paper with your home address. The paper is a copy, but the address leads to your real house. If the painter paints the door green, you come home to a green door.",
          ar: "الدالة تأخذ نسخة من العنوان، لكن العنوان يوصل إلى البيت الحقيقي." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  MetroCard card = new MetroCard(20);
                  topUp(card, 30);
                  System.out.println(card.balance);
              }

              static void topUp(MetroCard c, double amount) {
                  c.balance = c.balance + amount;
              }
          }

          class MetroCard {
              double balance;

              MetroCard(double balance) {
                  this.balance = balance;
              }
          }
        `, out: '50.0' },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['static void topUp(MetroCard c, double amount)', 'The parameter <code>c</code> has a class type, so it will hold an arrow.'],
          ['topUp(card, 30);', 'Java copies the arrow in <code>card</code> into <code>c</code>, and 30 into <code>amount</code>.'],
          ['c.balance = c.balance + amount;', 'Follow arrow <code>c</code>: it reaches the same card as <code>card</code>. The balance becomes 50.0.'],
          ['System.out.println(card.balance);', 'Back in main, <code>card</code> still points to that card, so it prints 50.0.']
        ] },
        { type: 'memory', title: 'Two arrows, one card', frames: [
          { label: 'In main: <code>MetroCard card = new MetroCard(20);</code>', vars: [{ name: 'card (main)', type: 'MetroCard', ref: 'A' }], objects: [{ id: 'A', cls: 'MetroCard', fields: [{ name: 'balance', value: '20.0' }] }] },
          { label: 'The call: <code>c</code> gets a copy of the arrow', vars: [{ name: 'card (main)', type: 'MetroCard', ref: 'A' }, { name: 'c (topUp)', type: 'MetroCard', ref: 'A' }, { name: 'amount (topUp)', type: 'double', value: '30.0' }], objects: [{ id: 'A', cls: 'MetroCard', fields: [{ name: 'balance', value: '20.0' }] }] },
          { label: 'After <code>c.balance = c.balance + amount;</code>', vars: [{ name: 'card (main)', type: 'MetroCard', ref: 'A' }, { name: 'c (topUp)', type: 'MetroCard', ref: 'A' }, { name: 'amount (topUp)', type: 'double', value: '30.0' }], objects: [{ id: 'A', cls: 'MetroCard', fields: [{ name: 'balance', value: '50.0' }] }] },
          { label: 'Back in main: the copy is gone, the change stays', vars: [{ name: 'card (main)', type: 'MetroCard', ref: 'A' }], objects: [{ id: 'A', cls: 'MetroCard', fields: [{ name: 'balance', value: '50.0' }] }] }
        ], ar: "c و card سهمان إلى البطاقة نفسها، فالتغيير يبقى بعد انتهاء الدالة." },
        { type: 'check', q: "A method receives a <code>Student</code> parameter <code>s</code> and runs <code>s.gpa = 4.0;</code>. Does the caller's student change?", options: ["Yes: both arrows lead to the same object", "No: the method has its own copy of the object"], answer: 0,
          explain: "Only the arrow is copied, never the object. Following the arrow reaches the caller's object.", hint: "What exactly is copied: the arrow or the box?" },

        { type: 'h', en: "But the method cannot move the caller's arrow" },
        { type: 'p', en: "Here is the other half of the rule, and it surprises many students. If the method points its parameter at a <b>new</b> object, only its own copy of the arrow moves. The caller's variable still points to the old object." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  MetroCard card = new MetroCard(20);
                  replace(card);
                  System.out.println(card.balance);
              }

              static void replace(MetroCard c) {
                  c = new MetroCard(100);
                  System.out.println("Inside: " + c.balance);
              }
          }

          class MetroCard {
              double balance;

              MetroCard(double balance) {
                  this.balance = balance;
              }
          }
        `, out: J`
          Inside: 100.0
          20.0
        ` },
        { type: 'memory', title: 'Moving the copy of the arrow', frames: [
          { label: 'The call: <code>c</code> gets a copy of the arrow', vars: [{ name: 'card (main)', type: 'MetroCard', ref: 'A' }, { name: 'c (replace)', type: 'MetroCard', ref: 'A' }], objects: [{ id: 'A', cls: 'MetroCard', fields: [{ name: 'balance', value: '20.0' }] }] },
          { label: 'After <code>c = new MetroCard(100);</code>', vars: [{ name: 'card (main)', type: 'MetroCard', ref: 'A' }, { name: 'c (replace)', type: 'MetroCard', ref: 'B' }], objects: [{ id: 'A', cls: 'MetroCard', fields: [{ name: 'balance', value: '20.0' }] }, { id: 'B', cls: 'MetroCard', fields: [{ name: 'balance', value: '100.0' }] }] },
          { label: 'Back in main: <code>c</code> is gone; nobody points to B', vars: [{ name: 'card (main)', type: 'MetroCard', ref: 'A' }], objects: [{ id: 'A', cls: 'MetroCard', fields: [{ name: 'balance', value: '20.0' }] }, { id: 'B', cls: 'MetroCard', fields: [{ name: 'balance', value: '100.0' }], gone: true }] }
        ], ar: "تغيير اتجاه النسخة c لا يحرّك السهم card في main." },
        { type: 'p', en: "Back to the painter: if he crosses out the address on his paper and writes a different address, your house does not move. He can only change the house the paper leads to.",
          ar: "الدالة تغيّر الكائن عبر السهم، لكنها لا تستطيع تحريك سهم المستدعي." },
        { type: 'note', kind: 'exam', en: "The rule in one sentence: Java always passes a <b>copy</b>. For a number it is a copy of the value; for an object it is a copy of the arrow. So a method <b>can</b> change the caller's object, but it <b>cannot</b> make the caller's variable point to a different object.",
          ar: "جافا تمرر نسخة دائمًا: نسخة القيمة للأرقام، ونسخة السهم للكائنات." },
        { type: 'check', q: "What does <code>main</code> print?", code: J`
          static void work(Box b) {
              b.width = 5;
              b = new Box();
              b.width = 9;
          }
          // in main:
          Box x = new Box();
          work(x);
          System.out.println(x.width);
        `, options: ["0", "5", "9", "Compile error"], answer: 1,
          explain: "The first line changes x's box to 5. Then <code>b</code> is pointed at a new box, and 9 goes into that new box, not into x's box." },

        { type: 'h', en: 'Passing an object to a method of another object' },
        { type: 'p', en: "Methods inside a class can receive objects too, even objects of the same class. A transfer needs two accounts: the one before the dot (<code>this</code>) and the one in the brackets (<code>other</code>)." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  BankAccount lina = new BankAccount("Lina", 1000);
                  BankAccount omar = new BankAccount("Omar", 200);
                  lina.transferTo(omar, 300);
                  System.out.println(lina.getOwner() + " " + lina.getBalance());
                  System.out.println(omar.getOwner() + " " + omar.getBalance());
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

              public void transferTo(BankAccount other, double amount) {
                  if (amount > 0 && amount <= this.balance) {
                      this.balance -= amount;
                      other.balance += amount;
                  }
              }
          }
        `, out: J`
          Lina 700.0
          Omar 500.0
        ` },
        { type: 'memory', title: 'this and other during the transfer', frames: [
          { label: 'Inside <code>lina.transferTo(omar, 300)</code>, at the start', vars: [{ name: 'lina (main)', type: 'BankAccount', ref: 'A' }, { name: 'omar (main)', type: 'BankAccount', ref: 'B' }, { name: 'this', type: 'BankAccount', ref: 'A' }, { name: 'other', type: 'BankAccount', ref: 'B' }, { name: 'amount', type: 'double', value: '300.0' }], objects: [{ id: 'A', cls: 'BankAccount', fields: [{ name: 'owner', value: '"Lina"' }, { name: 'balance', value: '1000.0' }] }, { id: 'B', cls: 'BankAccount', fields: [{ name: 'owner', value: '"Omar"' }, { name: 'balance', value: '200.0' }] }] },
          { label: 'After <code>this.balance -= amount;</code>', vars: [{ name: 'lina (main)', type: 'BankAccount', ref: 'A' }, { name: 'omar (main)', type: 'BankAccount', ref: 'B' }, { name: 'this', type: 'BankAccount', ref: 'A' }, { name: 'other', type: 'BankAccount', ref: 'B' }, { name: 'amount', type: 'double', value: '300.0' }], objects: [{ id: 'A', cls: 'BankAccount', fields: [{ name: 'owner', value: '"Lina"' }, { name: 'balance', value: '700.0' }] }, { id: 'B', cls: 'BankAccount', fields: [{ name: 'owner', value: '"Omar"' }, { name: 'balance', value: '200.0' }] }] },
          { label: 'After <code>other.balance += amount;</code>', vars: [{ name: 'lina (main)', type: 'BankAccount', ref: 'A' }, { name: 'omar (main)', type: 'BankAccount', ref: 'B' }, { name: 'this', type: 'BankAccount', ref: 'A' }, { name: 'other', type: 'BankAccount', ref: 'B' }, { name: 'amount', type: 'double', value: '300.0' }], objects: [{ id: 'A', cls: 'BankAccount', fields: [{ name: 'owner', value: '"Lina"' }, { name: 'balance', value: '700.0' }] }, { id: 'B', cls: 'BankAccount', fields: [{ name: 'owner', value: '"Omar"' }, { name: 'balance', value: '500.0' }] }] }
        ], ar: "this هو الحساب قبل النقطة، و other هو الحساب بين القوسين." },
        { type: 'p', en: "Look at <code>other.balance</code>. The field is private, yet we may use it here. <code>private</code> means &quot;only code written inside the BankAccount class&quot;, and <code>transferTo</code> is written inside that class. Private protects the class from <i>other classes</i>, not one object from another object of the same class.",
          ar: "داخل الصنف نفسه يمكن الوصول إلى الحقول الخاصة لأي كائن من الصنف ذاته." },
        { type: 'check', q: "In <code>lina.transferTo(omar, 300)</code>, what does <code>this</code> point to?", options: ["Omar's account", "Lina's account", "Both accounts", "Nothing"], answer: 1,
          explain: "<code>this</code> is the object before the dot: lina. Omar's account arrives in the parameter <code>other</code>." },

        { type: 'h', en: 'Returning an object' },
        { type: 'p', en: "A method can also give an object back. Its return type is a class name. There are two very different cases: the method returns an arrow to an object that <b>already exists</b>, or it builds a <b>new</b> object and returns the arrow to it. Always ask: which case is this?" },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Student s1 = new Student("Sara", 3.6);
                  Student s2 = new Student("Omar", 3.9);
                  Student top = better(s1, s2);
                  System.out.println("Top: " + top.name);
                  top.gpa = 4.0;
                  System.out.println(s2.name + " " + s2.gpa);
              }

              static Student better(Student a, Student b) {
                  if (b.gpa > a.gpa) {
                      return b;
                  }
                  return a;
              }
          }

          class Student {
              String name;
              double gpa;

              Student(String name, double gpa) {
                  this.name = name;
                  this.gpa = gpa;
              }
          }
        `, out: J`
          Top: Omar
          Omar 4.0
        ` },
        { type: 'lines', rows: [
          ['static Student better(Student a, Student b)', 'The return type is <code>Student</code>: the method gives back an arrow to a student.'],
          ['return b;', 'It returns an arrow to an <b>existing</b> object. Nothing is copied.'],
          ['Student top = better(s1, s2);', '<code>top</code> now points to Omar\'s object: <code>top</code> and <code>s2</code> are aliases.'],
          ['top.gpa = 4.0;', 'So this changes Omar\'s object, and <code>s2.gpa</code> shows 4.0.']
        ], ar: "الدالة أعادت سهمًا إلى كائن موجود، فـ top و s2 يشيران إلى الكائن نفسه." },
        { type: 'p', en: "The second case: a method that builds a new object. The original stays as it was." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Rectangle small = new Rectangle(2, 3);
                  Rectangle big = small.scaled(2);
                  System.out.println(small.width + " x " + small.height);
                  System.out.println(big.width + " x " + big.height);
              }
          }

          class Rectangle {
              double width;
              double height;

              Rectangle(double width, double height) {
                  this.width = width;
                  this.height = height;
              }

              Rectangle scaled(double k) {
                  return new Rectangle(width * k, height * k);
              }
          }
        `, out: J`
          2.0 x 3.0
          4.0 x 6.0
        ` },
        { type: 'memory', title: 'A new object comes back', frames: [
          { label: 'After <code>Rectangle small = new Rectangle(2, 3);</code>', vars: [{ name: 'small', type: 'Rectangle', ref: 'A' }], objects: [{ id: 'A', cls: 'Rectangle', fields: [{ name: 'width', value: '2.0' }, { name: 'height', value: '3.0' }] }] },
          { label: 'After <code>Rectangle big = small.scaled(2);</code>', vars: [{ name: 'small', type: 'Rectangle', ref: 'A' }, { name: 'big', type: 'Rectangle', ref: 'B' }], objects: [{ id: 'A', cls: 'Rectangle', fields: [{ name: 'width', value: '2.0' }, { name: 'height', value: '3.0' }] }, { id: 'B', cls: 'Rectangle', fields: [{ name: 'width', value: '4.0' }, { name: 'height', value: '6.0' }] }] }
        ], ar: "scaled تبني كائنًا جديدًا وتعيد سهمه، والأصل لا يتغير." },
        { type: 'check', q: "After <code>Rectangle big = small.scaled(2);</code> we write <code>big.width = 10;</code>. What is <code>small.width</code>?", options: ["10.0", "4.0", "2.0", "0.0"], answer: 2,
          explain: "<code>scaled</code> built a new object, so big and small are two different boxes. small keeps 2.0." },

        { type: 'steps', title: 'Worked example: a bank transfer', problem: "Read two accounts (owner and balance) and an amount. Transfer the amount from the first account to the second. If the transfer is not allowed, print <code>Transfer refused</code>. Then print both accounts.",
          steps: [
            { en: "Step 1: The usual encapsulated class with a toString.", code: J`
              class BankAccount {
                  private String owner;
                  private double balance;
                  // constructor and toString
              }
            ` },
            { en: "Step 2: <code>transferTo</code> receives the other account. It refuses a bad amount and returns false.", code: J`
              public boolean transferTo(BankAccount other, double amount) {
                  if (amount <= 0 || amount > balance) {
                      return false;
                  }
            ` },
            { en: "Step 3: Otherwise take the money from <code>this</code> account and add it to <code>other</code> (allowed: same class).", code: J`
                  balance -= amount;
                  other.balance += amount;
                  return true;
              }
            ` },
            { en: "Step 4: In main build the two accounts and call the method on the first one.", code: J`
              BankAccount a = new BankAccount(sc.next(), sc.nextDouble());
              BankAccount b = new BankAccount(sc.next(), sc.nextDouble());
              double amount = sc.nextDouble();
              if (!a.transferTo(b, amount)) {
                  System.out.println("Transfer refused");
              }
            ` },
            { en: "Step 5: Print both accounts. The change made inside the method is visible in main.", code: J`
              System.out.println(a);
              System.out.println(b);
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    BankAccount a = new BankAccount(sc.next(), sc.nextDouble());
                    BankAccount b = new BankAccount(sc.next(), sc.nextDouble());
                    double amount = sc.nextDouble();
                    if (!a.transferTo(b, amount)) {
                        System.out.println("Transfer refused");
                    }
                    System.out.println(a);
                    System.out.println(b);
                }
            }

            class BankAccount {
                private String owner;
                private double balance;

                public BankAccount(String owner, double balance) {
                    this.owner = owner;
                    this.balance = balance;
                }

                public boolean transferTo(BankAccount other, double amount) {
                    if (amount <= 0 || amount > balance) {
                        return false;
                    }
                    balance -= amount;
                    other.balance += amount;
                    return true;
                }

                @Override
                public String toString() {
                    return owner + ": " + balance;
                }
            }
          `, stdin: 'Lina 1000 Omar 200 300', out: J`
            Lina: 700.0
            Omar: 500.0
          `, ar: "الدالة تستلم سهمًا إلى الحساب الآخر وتغيّره، والتغيير يظهر في main." },
        { type: 'steps', title: 'Worked example 2: moving an appointment', problem: "A clinic wants to move an appointment to a new hour but keep the old one for its records. Read a patient, an hour and a new hour. A method <code>movedTo</code> returns a <b>new</b> appointment. Print the old and the new appointment.",
          steps: [
            { en: "Step 1: A class with private fields, a constructor and toString.", code: J`
              class Appointment {
                  private String patient;
                  private int hour;
                  // constructor and toString
              }
            ` },
            { en: "Step 2: The method's return type is <code>Appointment</code>. It builds a new object with the same patient and the new hour.", code: J`
              public Appointment movedTo(int newHour) {
                  return new Appointment(patient, newHour);
              }
            ` },
            { en: "Step 3: In main, build the first appointment.", code: J`
              Appointment first = new Appointment(sc.next(), sc.nextInt());
            ` },
            { en: "Step 4: Call the method and <b>store</b> the returned object in a variable. Without the variable, the new object would be lost.", code: J`
              Appointment second = first.movedTo(sc.nextInt());
            ` },
            { en: "Step 5: Print both. The old appointment did not change.", code: J`
              System.out.println("Old: " + first);
              System.out.println("New: " + second);
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Appointment first = new Appointment(sc.next(), sc.nextInt());
                    Appointment second = first.movedTo(sc.nextInt());
                    System.out.println("Old: " + first);
                    System.out.println("New: " + second);
                }
            }

            class Appointment {
                private String patient;
                private int hour;

                public Appointment(String patient, int hour) {
                    this.patient = patient;
                    this.hour = hour;
                }

                public Appointment movedTo(int newHour) {
                    return new Appointment(patient, newHour);
                }

                @Override
                public String toString() {
                    return patient + " at " + hour + ":00";
                }
            }
          `, stdin: 'Hessa 9 13', out: J`
            Old: Hessa at 9:00
            New: Hessa at 13:00
          `, ar: "الدالة تعيد كائنًا جديدًا، ويجب حفظه في متغير." }
      ],
      mistakes: [
        { title: "Expecting the method to replace the caller's object", en: "Pointing the parameter at a new object changes only the method's copy of the arrow. Change the fields instead, or return the new object and assign it in the caller.", code: J`
          static void reset(MetroCard c) {
              c = new MetroCard(0);   // main's card does not change
          }
          static void reset2(MetroCard c) {
              c.balance = 0;          // this works: it changes the object
          }
        `, ar: "إعادة توجيه المعامل لا تغيّر متغير المستدعي." },
        { title: 'Ignoring the returned object', en: "A method that returns a new object does not change the old one. If you do not store the result, it is lost.", code: J`
          small.scaled(2);                    // result thrown away
          Rectangle big = small.scaled(2);    // correct
        ` },
        { title: 'Thinking a returned arrow is a copy', en: "If the method returns an existing object, the result is an alias. Changing it changes the original.", code: J`
          Student top = better(s1, s2);
          top.gpa = 0;      // this changes s1 or s2!
        ` },
        { title: 'Passing null', en: "If you pass <code>null</code>, the method has no object to follow, and the first dot crashes with a NullPointerException (Lesson 10).", code: J`
          topUp(null, 30);   // crash inside topUp: c.balance
        ` }
      ],
      remember: [
        "Java always passes a <b>copy</b>: a copy of the value for numbers, a copy of the <b>arrow</b> for objects.",
        "Through the copied arrow, a method <b>can change</b> the caller's object.",
        "A method <b>cannot</b> make the caller's variable point to a different object.",
        "Code inside a class may use the private fields of another object of the same class (<code>other.balance</code>).",
        "A method can return an existing object (an alias) or a new object; store the result in a variable."
      ],
      rememberAr: "جافا تمرر نسخة دائمًا: نسخة القيمة للأرقام ونسخة السهم للكائنات. تستطيع الدالة تغيير الكائن لكنها لا تحرّك سهم المستدعي. الكائن المُعاد قد يكون موجودًا أو جديدًا، فاحفظه في متغير.",
      practice: [
        { t: 'mcq', q: "When you pass an object to a method, what does the method receive?",
          qAr: "ماذا تستلم الدالة عندما نمرر كائنًا؟",
          options: ["A full copy of the object", "A copy of the arrow (reference) to the same object", "Only the first field", "Nothing; objects cannot be passed"], answer: 1,
          explain: "Java copies the reference. Both arrows lead to the same object.", explainAr: "نسخة من السهم إلى الكائن نفسه." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  int cups = 1;
                  CafeOrder o = new CafeOrder();
                  o.cups = 1;
                  addOne(cups, o);
                  System.out.println(cups + " " + o.cups);
              }

              static void addOne(int n, CafeOrder order) {
                  n++;
                  order.cups++;
              }
          }

          class CafeOrder {
              int cups;
          }
        `, answer: '1 2', explain: "<code>n</code> is a copy of the number, so main's <code>cups</code> stays 1. <code>order</code> is a copy of the arrow, so the object's field becomes 2.",
          explainAr: "الرقم نُسخ فلم يتغير، والكائن تغيّر عبر السهم." },
        { t: 'output', q: "What does this program print? Draw the arrows.", code: J`
          public class Main {
              public static void main(String[] args) {
                  Student s = new Student("Sara");
                  rename(s);
                  System.out.println(s.name);
              }

              static void rename(Student st) {
                  st.name = "Reem";
                  st = new Student("Nora");
                  st.name = "Huda";
              }
          }

          class Student {
              String name;

              Student(String name) {
                  this.name = name;
              }
          }
        `, answer: 'Reem', explain: "First <code>st</code> points to main's student, so the name becomes Reem. Then <code>st</code> is pointed at a new student (Nora, then Huda). main's <code>s</code> never moves, so it prints Reem.",
          explainAr: "التغيير الأول وصل إلى كائن main، أما الباقي فعلى كائن جديد." },
        { t: 'fill', q: "Complete the method that returns a <b>new</b> location moved by <code>dx</code> and <code>dy</code>.", code: J`
          class Location {
              int x, y;

              Location(int x, int y) {
                  this.x = x;
                  this.y = y;
              }

              ___ moved(int dx, int dy) {
                  return ___ Location(x + dx, y + dy);
              }
          }
        `, answers: ['Location', 'new'],
          explain: "The return type is the class name, <code>Location</code>. <code>new</code> builds the new object whose arrow is returned." },
        { t: 'bug', q: "The method should empty the card, so the program should print <code>0.0</code>. It prints <code>35.0</code>. Tap the line with the bug.",
          qAr: "الدالة لا تفرّغ البطاقة. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    MetroCard card = new MetroCard(35);
                    resetCard(card);
                    System.out.println(card.balance);
                }
                static void resetCard(MetroCard c) {
                    c = new MetroCard(0);
                }
            }
            class MetroCard {
                double balance;
                MetroCard(double balance) { this.balance = balance; }
            }
          `, bug: 8,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    MetroCard card = new MetroCard(35);
                    resetCard(card);
                    System.out.println(card.balance);
                }
                static void resetCard(MetroCard c) {
                    c.balance = 0;
                }
            }
            class MetroCard {
                double balance;
                MetroCard(double balance) { this.balance = balance; }
            }
          `,
          hint: "Does line 8 change main's card, or only the method's copy of the arrow?",
          explain: "Line 8 builds a new card and points the copy <code>c</code> at it. main's <code>card</code> still points to the old card with 35.0. Writing <code>c.balance = 0;</code> follows the arrow and changes main's card.",
          explainAr: "السطر 8 يحرّك النسخة c فقط؛ غيّر{{g:|ي}} الحقل بدلًا من ذلك." },
        { t: 'code', q: "Class <code>MetroCard</code> is given. Write the static method <code>MetroCard richer(MetroCard a, MetroCard b)</code> that returns the card with the larger balance (return <code>a</code> if they are equal). In <code>main</code> read two owners and balances (no prompts), find the richer card, add a bonus of 5 riyals to it <b>through the returned reference</b>, then print both cards.",
          qAr: "اكتب دالة تعيد البطاقة الأغنى، ثم أضف 5 ريالات عبر السهم المُعاد.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    MetroCard a = new MetroCard(sc.next(), sc.nextDouble());
                    MetroCard b = new MetroCard(sc.next(), sc.nextDouble());
                    // find the richer card, add 5 to it, print a and b
                }

                // write richer(...) here
            }

            class MetroCard {
                String owner;
                double balance;

                MetroCard(String owner, double balance) {
                    this.owner = owner;
                    this.balance = balance;
                }

                @Override
                public String toString() {
                    return owner + ": " + balance;
                }
            }
          `,
          tests: [
            { stdin: 'Reem 20 Faisal 35', expected: J`
              Reem: 20.0
              Faisal: 40.0
            ` },
            { stdin: 'Lama 10 Sami 10', expected: J`
              Lama: 15.0
              Sami: 10.0
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    MetroCard a = new MetroCard(sc.next(), sc.nextDouble());
                    MetroCard b = new MetroCard(sc.next(), sc.nextDouble());
                    MetroCard r = richer(a, b);
                    r.balance = r.balance + 5;
                    System.out.println(a);
                    System.out.println(b);
                }

                static MetroCard richer(MetroCard a, MetroCard b) {
                    if (b.balance > a.balance) {
                        return b;
                    }
                    return a;
                }
            }

            class MetroCard {
                String owner;
                double balance;

                MetroCard(String owner, double balance) {
                    this.owner = owner;
                    this.balance = balance;
                }

                @Override
                public String toString() {
                    return owner + ": " + balance;
                }
            }
          `,
          hint: "<code>richer</code> returns one of its parameters. Store it: <code>MetroCard r = richer(a, b);</code>, then change <code>r.balance</code>.",
          explain: "<code>richer</code> returns an arrow to an existing card, so <code>r</code> is an alias of a or b. Adding 5 through <code>r</code> changes that card, which you see when printing a and b." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 10
    {
      title: 'null and NullPointerException',
      titleAr: 'القيمة null والخطأ NullPointerException',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: something that does not exist yet' },
        { type: 'p', en: "Sometimes a thing is simply not there. A new student has no academic advisor yet. A parking spot has no car. A phone contact has a name, but no number was saved. A search finds nobody. Java needs a way to say &quot;no object here&quot;, and that way is the special value <code>null</code>. It is useful, but it is also the cause of the most common crash in Java. This lesson teaches you to use it safely." },
        { type: 'analogy', title: 'The empty parking spot', en: "A parking spot has a painted number, but no car in it. The spot (the variable) exists; the car (the object) does not. <code>null</code> is the empty spot.",
          ar: "null كموقف سيارة فارغ: الموقف موجود لكن لا سيارة فيه." },

        { type: 'h', en: 'null means no object' },
        { type: 'p', en: "Any variable of a class type can hold <code>null</code> instead of an arrow. Then there is no object behind it." },
        { type: 'code', code: J`
          Student s = null;      // a variable with no object
          String phone = null;   // no text at all
          String empty = "";     // a real String with 0 letters
        ` },
        { type: 'lines', rows: [
          ['Student s = null;', 'The variable exists, but it points to nothing.'],
          ['String phone = null;', 'No String object at all.'],
          ['String empty = "";', 'This is <b>not</b> null: it is a real String object that happens to have no letters.']
        ] },
        { type: 'memory', title: 'null is not the same as ""', frames: [
          { label: 'After the three lines', vars: [{ name: 's', type: 'Student', value: 'null' }, { name: 'phone', type: 'String', value: 'null' }, { name: 'empty', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '""' }] }] }
        ], ar: "null لا كائن، أما \"\" فكائن نصي فارغ." },
        { type: 'check', q: "Which variable points to a real object?", options: ["<code>String a = null;</code>", "<code>String b = \"\";</code>", "<code>Student c = null;</code>", "None of them"], answer: 1,
          explain: "An empty text <code>\"\"</code> is a real String object with zero letters. <code>null</code> is no object at all." },

        { type: 'h', en: 'Where does null come from?' },
        { type: 'p', en: "You can write <code>null</code> yourself, but most nulls appear by themselves. Remember the default values from Lesson 2: every field of a class type (like <code>String</code>) starts as <code>null</code> until somebody gives it an object. So a field that the constructor forgets stays <code>null</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Patient p = new Patient("Hessa");
                  System.out.println(p.name);
                  System.out.println(p.doctor);
              }
          }

          class Patient {
              String name;
              String doctor;

              Patient(String name) {
                  this.name = name;
              }
          }
        `, out: J`
          Hessa
          null
        ` },
        { type: 'memory', title: 'A field that was never filled', frames: [
          { label: 'After <code>Patient p = new Patient("Hessa");</code>', vars: [{ name: 'p', type: 'Patient', ref: 'A' }], objects: [{ id: 'A', cls: 'Patient', fields: [{ name: 'name', value: '"Hessa"' }, { name: 'doctor', value: 'null' }] }] }
        ], ar: "الحقل doctor لم يُملأ في المُنشئ، فبقي null." },
        { type: 'p', en: "Notice: <b>printing</b> a null value does not crash. <code>println</code> simply writes the word <code>null</code>. Joining it to text also works: <code>\"Dr. \" + p.doctor</code> gives <code>Dr. null</code>. The crash comes only when you try to <b>use</b> the missing object with a dot.",
          ar: "طباعة null لا توقف البرنامج؛ المشكلة عند استخدام النقطة عليها." },

        { type: 'h', en: 'NullPointerException: a dot on nothing' },
        { type: 'p', en: "If a variable is <code>null</code> and you put a dot after it (to call a method or to read a field), there is no object to go to. Java stops the program with an error called a <b>NullPointerException</b> (NPE for short). The code compiles without any error; the problem appears only when that line runs." },
        { type: 'analogy', title: 'Calling a contact with no number', en: "Your phone shows the name &quot;Majed&quot;, but no number was ever saved. You press &quot;call&quot;. The phone cannot call nobody, so it shows an error. Calling a method on null is the same.",
          ar: "الاتصال بجهة اتصال بلا رقم مستحيل، وكذلك استدعاء دالة على null." },
        { type: 'code', code: J`
          public class Main {
              public static void main(String[] args) {
                  Patient p = new Patient("Hessa");
                  System.out.println(p.doctor.length());   // doctor is null!
              }
          }
        ` },
        { type: 'p', en: "When this program runs, it stops and Java prints a message like the one below (the exact words depend on your Java version). Learn to read it: it tells you <i>what</i> was null and <i>where</i>." },
        { type: 'code', code: J`
          Exception in thread "main" java.lang.NullPointerException:
              Cannot invoke "String.length()" because "p.doctor" is null
              at Main.main(Main.java:4)
        ` },
        { type: 'lines', title: 'Read the crash message', rows: [
          ['java.lang.NullPointerException', 'The kind of error: something was null.'],
          ['Cannot invoke "String.length()"', 'What Java tried to do: call <code>length()</code>.'],
          ['because "p.doctor" is null', 'Which value was missing. (Some systems write <code>&lt;local1&gt;</code> instead of the variable name.)'],
          ['at Main.main(Main.java:4)', 'Where: line 4, inside <code>main</code>. Start your search on that line.']
        ], ar: "اقرأ{{g:|ي}} رسالة الخطأ: نوعه، والقيمة الفارغة، ورقم السطر." },
        { type: 'check', q: "<code>city</code> is null. Which line crashes?", code: J`
          String city = null;
          System.out.println(city);            // line A
          System.out.println(city + "!");      // line B
          System.out.println(city.length());   // line C
        `, options: ["Line A", "Line B", "Line C", "None of them"], answer: 2,
          explain: "Lines A and B only print or join the value (they show <code>null</code> and <code>null!</code>). Line C puts a dot after null, so it crashes." },

        { type: 'h', en: 'Check before you use it' },
        { type: 'p', en: "The cure is simple: before you use something that might be null, ask. Compare it with <code>!= null</code> (or <code>== null</code>). Here <code>==</code> is exactly right, because you are asking about the arrow itself: does it point anywhere?" },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Patient a = new Patient("Hessa");
                  Patient b = new Patient("Majed");
                  b.doctor = "Khalid";
                  printDoctor(a);
                  printDoctor(b);
              }

              static void printDoctor(Patient p) {
                  if (p.doctor != null) {
                      System.out.println(p.name + ": Dr. " + p.doctor);
                  } else {
                      System.out.println(p.name + ": no doctor yet");
                  }
              }
          }

          class Patient {
              String name;
              String doctor;

              Patient(String name) {
                  this.name = name;
              }
          }
        `, out: J`
          Hessa: no doctor yet
          Majed: Dr. Khalid
        ` },
        { type: 'lines', rows: [
          ['if (p.doctor != null)', 'Ask first: is there a doctor object?'],
          ['System.out.println(p.name + ": Dr. " + p.doctor);', 'Only here, when we know it is not null, do we use it.'],
          ['else { ... }', 'The missing case gets its own friendly message instead of a crash.']
        ], ar: "اسأل{{g:|ي}} أولًا: هل القيمة null؟ ثم استخدمها." },

        { type: 'h', en: 'The order inside && matters' },
        { type: 'p', en: "Often you check and use in one condition. This is safe because of <b>short-circuit</b> evaluation, which you met in CS101: if the left side of <code>&amp;&amp;</code> is false, Java does not even look at the right side. If you swap the two sides, the dot runs first and crashes." },
        { type: 'code', code: J`
          if (s != null && s.getGpa() >= 3.5)    // safe: check first, then use
          if (s.getGpa() >= 3.5 && s != null)    // crash when s is null
        ` },
        { type: 'check', q: "<code>card</code> may be null. Which condition is safe?", options: ["<code>card.getBalance() > 5 &amp;&amp; card != null</code>", "<code>card != null &amp;&amp; card.getBalance() > 5</code>", "<code>card.getBalance() > 5 || card == null</code>", "<code>card.equals(null)</code>"], answer: 1,
          explain: "The null check must come first. When it is false, <code>&amp;&amp;</code> stops and the dot never runs." },
        { type: 'note', kind: 'tip', en: "Comparing a String that may be null with a fixed text? Put the fixed text first: <code>\"Riyadh\".equals(city)</code> simply returns false when <code>city</code> is null, while <code>city.equals(\"Riyadh\")</code> crashes.",
          ar: "ضع{{g:|ي}} النص الثابت أولًا عند استخدام equals." },

        { type: 'h', en: 'Better: avoid null from the start' },
        { type: 'p', en: "The best NullPointerException is the one that never happens. Give every field a sensible value in the constructor. For a text that is not known yet, a clear word such as <code>\"Not assigned\"</code> is often better than null. Use null only when &quot;nothing&quot; is a real, expected state (like an empty parking spot), and then always check before use." },
        { type: 'code', code: J`
          Patient(String name) {
              this.name = name;
              this.doctor = "Not assigned";   // never null
          }
        ` },
        { type: 'p', en: "You may also set a variable to <code>null</code> on purpose, to say &quot;I am finished with this object&quot;. If no other arrow points to the object, it becomes garbage." },
        { type: 'memory', title: 'Letting go of an object', frames: [
          { label: 'After <code>MetroCard card = new MetroCard(20);</code>', vars: [{ name: 'card', type: 'MetroCard', ref: 'A' }], objects: [{ id: 'A', cls: 'MetroCard', fields: [{ name: 'balance', value: '20.0' }] }] },
          { label: 'After <code>card = null;</code>', vars: [{ name: 'card', type: 'MetroCard', value: 'null' }], objects: [{ id: 'A', cls: 'MetroCard', fields: [{ name: 'balance', value: '20.0' }], gone: true }] }
        ], ar: "عندما نضع null في المتغير الوحيد يصبح الكائن مهملًا." },

        { type: 'steps', title: 'Worked example: parking spots', problem: "A small car park has spots 1 and 2. Read a plate number for spot 1; the word <code>none</code> means no car came. Spot 2 stays empty. Print the state of both spots without any crash.",
          steps: [
            { en: "Step 1: A spot has a number and a plate. An empty spot has <code>plate == null</code>: here &quot;nothing&quot; is a real state.", code: J`
              private int number;
              private String plate;
            ` },
            { en: "Step 2: The constructor sets the number. The plate starts as null on purpose (free spot).", code: J`
              public ParkingSpot(int number) {
                  this.number = number;
                  this.plate = null;
              }
            ` },
            { en: "Step 3: Methods to park a car and to ask if the spot is free. The null check lives in ONE method.", code: J`
              public void park(String plate) { this.plate = plate; }

              public boolean isFree() { return plate == null; }
            ` },
            { en: "Step 4: <code>show()</code> asks <code>isFree()</code> before it uses the plate.", code: J`
              public void show() {
                  if (isFree()) {
                      System.out.println("Spot " + number + ": free");
                  } else {
                      System.out.println("Spot " + number + ": " + plate);
                  }
              }
            ` },
            { en: "Step 5: In main, park a car only if the input is not <code>none</code>, then show both spots.", code: J`
              String plate = sc.next();
              if (!plate.equals("none")) {
                  s1.park(plate);
              }
              s1.show();
              s2.show();
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    ParkingSpot s1 = new ParkingSpot(1);
                    ParkingSpot s2 = new ParkingSpot(2);
                    String plate = sc.next();
                    if (!plate.equals("none")) {
                        s1.park(plate);
                    }
                    s1.show();
                    s2.show();
                }
            }

            class ParkingSpot {
                private int number;
                private String plate;

                public ParkingSpot(int number) {
                    this.number = number;
                    this.plate = null;
                }

                public void park(String plate) { this.plate = plate; }

                public boolean isFree() { return plate == null; }

                public void show() {
                    if (isFree()) {
                        System.out.println("Spot " + number + ": free");
                    } else {
                        System.out.println("Spot " + number + ": " + plate);
                    }
                }
            }
          `, stdin: 'ABJ1234', out: J`
            Spot 1: ABJ1234
            Spot 2: free
          `, ar: "null هنا يعني موقفًا فارغًا، ونفحصه قبل استخدام اللوحة." },
        { type: 'steps', title: 'Worked example 2: a student with or without an advisor', problem: "Read two students, each with an advisor name; the word <code>none</code> means no advisor yet. Print one line per student. The class itself must handle the missing advisor, so <code>main</code> never sees a null.",
          steps: [
            { en: "Step 1: The advisor field starts as null (default value), because the constructor does not set it.", code: J`
              private String name;
              private String advisor;

              public Student(String name) {
                  this.name = name;
              }
            ` },
            { en: "Step 2: A setter to give the advisor later.", code: J`
              public void setAdvisor(String advisor) {
                  this.advisor = advisor;
              }
            ` },
            { en: "Step 3: A method that returns a safe text. It checks for null inside the class.", code: J`
              public String advisorText() {
                  if (advisor == null) {
                      return "no advisor yet";
                  }
                  return "advisor Dr. " + advisor;
              }
            ` },
            { en: "Step 4: A small static helper in Main reads one student, so we do not repeat code.", code: J`
              static Student readStudent(Scanner sc) {
                  Student s = new Student(sc.next());
                  String adv = sc.next();
                  if (!adv.equals("none")) {
                      s.setAdvisor(adv);
                  }
                  return s;
              }
            ` },
            { en: "Step 5: main reads two students and prints them.", code: J`
              Student a = readStudent(sc);
              Student b = readStudent(sc);
              System.out.println(a.getName() + ": " + a.advisorText());
              System.out.println(b.getName() + ": " + b.advisorText());
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Student a = readStudent(sc);
                    Student b = readStudent(sc);
                    System.out.println(a.getName() + ": " + a.advisorText());
                    System.out.println(b.getName() + ": " + b.advisorText());
                }

                static Student readStudent(Scanner sc) {
                    Student s = new Student(sc.next());
                    String adv = sc.next();
                    if (!adv.equals("none")) {
                        s.setAdvisor(adv);
                    }
                    return s;
                }
            }

            class Student {
                private String name;
                private String advisor;

                public Student(String name) {
                    this.name = name;
                }

                public String getName() { return name; }

                public void setAdvisor(String advisor) {
                    this.advisor = advisor;
                }

                public String advisorText() {
                    if (advisor == null) {
                        return "no advisor yet";
                    }
                    return "advisor Dr. " + advisor;
                }
            }
          `, stdin: 'Sara none Omar Huda', out: J`
            Sara: no advisor yet
            Omar: advisor Dr. Huda
          `, ar: "الصنف يتعامل مع null داخليًا، فلا يرى main أي قيمة فارغة." }
      ],
      mistakes: [
        { title: 'Using a dot on a null variable', en: "If the variable may be null, check it first. Otherwise the program crashes with a NullPointerException.", code: J`
          String phone = null;
          System.out.println(phone.length());     // crash

          if (phone != null) {                     // correct: check first
              System.out.println(phone.length());
          }
        `, ar: "لا تستخدم{{g:|ي}} النقطة على متغير قد يكون null قبل الفحص." },
        { title: 'Checking in the wrong order', en: "The null check must be on the LEFT of <code>&amp;&amp;</code>, so the dot never runs when the value is null.", code: J`
          if (s.getGpa() > 3 && s != null)    // crash when s is null
          if (s != null && s.getGpa() > 3)    // correct
        ` },
        { title: 'Testing for null with equals', en: "<code>s.equals(null)</code> needs a dot on <code>s</code>, so it crashes exactly when <code>s</code> is null. Use <code>==</code> to test for null.", code: J`
          if (s.equals(null))   // crash when s is null
          if (s == null)        // correct
        ` },
        { title: 'Mixing up null, "" and a variable with no value', en: "<code>\"\"</code> is a real (empty) String. A local variable with no value at all, like <code>Student s;</code> in main, is not null: using it is a compile error.", code: J`
          String a = "";      // a real String, length 0
          String b = null;    // no object
          Student s;          // no value yet: s.getName() does not compile
        ` }
      ],
      remember: [
        "<code>null</code> means <b>no object</b>. It is different from the empty text <code>\"\"</code>.",
        "Fields of class types (such as String) start as <code>null</code> until they get an object.",
        "Printing null shows the word <code>null</code>; a <b>dot</b> on null causes a <b>NullPointerException</b>.",
        "Check with <code>!= null</code> before use, and put the check on the left of <code>&amp;&amp;</code>.",
        "Avoid null with good starting values; read the crash message to find the line."
      ],
      rememberAr: "null تعني لا كائن وتختلف عن النص الفارغ. الحقول النصية تبدأ null. طباعة null لا توقف البرنامج، أما النقطة عليها فتسبب NullPointerException. افحص{{g:|ي}} بـ != null أولًا، وضع{{g:|ي}} قيمًا ابتدائية مناسبة.",
      practice: [
        { t: 'mcq', q: "What does <code>Student s = null;</code> mean?",
          qAr: "ماذا تعني القيمة null؟",
          options: ["s is a student with no name", "s points to no object", "s is a student with GPA 0", "s is an empty text"], answer: 1,
          explain: "The variable exists, but there is no Student object behind it.", explainAr: "المتغير لا يشير إلى أي كائن." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Contact c = new Contact("Majed");
                  System.out.println(c.name + " " + c.phone);
                  c.phone = "0551234567";
                  System.out.println(c.name + " " + c.phone);
              }
          }

          class Contact {
              String name;
              String phone;

              Contact(String name) {
                  this.name = name;
              }
          }
        `, answer: J`
          Majed null
          Majed 0551234567
        `, explain: "The phone field starts as null. Joining null to text prints the word <code>null</code> without a crash. After we set it, the number is printed.",
          explainAr: "طباعة null تُظهر الكلمة null ولا توقف البرنامج." },
        { t: 'fill', q: "Complete the <code>Contact</code> methods so they never crash when there is no phone.", code: J`
          class Contact {
              private String name;
              private String phone;

              public boolean hasPhone() {
                  return phone ___ null;
              }

              public String phoneText() {
                  if (___) {
                      return phone;
                  }
                  return "no number";
              }
          }
        `, answers: ['!=', ['hasPhone()', 'phone != null', 'this.hasPhone()']],
          explain: "<code>hasPhone()</code> is true when the phone is not null. <code>phoneText()</code> uses the phone only after that check." },
        { t: 'bug', q: "The search found nobody, so <code>s</code> is null. The program should print <code>Not found or not honor</code>, but it crashes with a NullPointerException. Tap the line with the bug.",
          qAr: "البرنامج يتوقف بخطأ NullPointerException. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Student s = null;   // the search found nobody
                    if (s.getGpa() >= 3.5 && s != null) {
                        System.out.println("Honor student");
                    } else {
                        System.out.println("Not found or not honor");
                    }
                }
            }
            class Student {
                private double gpa;
                public double getGpa() { return gpa; }
            }
          `, bug: 4,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Student s = null;   // the search found nobody
                    if (s != null && s.getGpa() >= 3.5) {
                        System.out.println("Honor student");
                    } else {
                        System.out.println("Not found or not honor");
                    }
                }
            }
            class Student {
                private double gpa;
                public double getGpa() { return gpa; }
            }
          `,
          hint: "Java reads the condition from left to right. What runs first?",
          explain: "On line 4, <code>s.getGpa()</code> runs before the null check, so Java puts a dot on null and crashes. With <code>s != null</code> on the left, <code>&amp;&amp;</code> stops at false and the dot never runs.",
          explainAr: "ضع{{g:|ي}} فحص null على يسار &&." },
        { t: 'output', q: "What does this program print? (Think about short-circuit evaluation.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  ParkingSpot a = new ParkingSpot();
                  ParkingSpot b = new ParkingSpot();
                  b.plate = "XYZ987";
                  System.out.println(a.plate == null);
                  System.out.println(b.plate != null && b.plate.length() == 6);
                  System.out.println(a.plate != null && a.plate.length() == 6);
              }
          }

          class ParkingSpot {
              String plate;
          }
        `, answer: J`
          true
          true
          false
        `, explain: "a's plate is null, so the first line is true. b has a 6-letter plate: true. For a, the left side <code>a.plate != null</code> is false, so <code>&amp;&amp;</code> stops: false, and no crash.",
          explainAr: "عندما يكون الطرف الأيسر false لا يُنفَّذ الطرف الأيمن." },
        { t: 'code', q: "Write a class <code>Contact</code> with private fields <code>name</code> and <code>phone</code>, a constructor <code>Contact(String name)</code> (the phone stays null), a method <code>setPhone(String phone)</code>, and <code>toString()</code> returning <code>NAME: PHONE</code>, or <code>NAME: no number</code> when the phone is null. In <code>main</code> read two contacts, each as a name and a phone, where <code>-</code> means no phone (no prompts). Print both contacts.",
          qAr: "جهة اتصال قد لا تملك رقمًا: تعامل{{g:|ي}} مع null داخل toString.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read two contacts; "-" means no phone
                }
            }

            class Contact {
                private String name;
                private String phone;

                // constructor, setPhone, toString
            }
          `,
          tests: [
            { stdin: 'Majed 0551234567 Nouf -', expected: J`
              Majed: 0551234567
              Nouf: no number
            ` },
            { stdin: 'Sami - Lama 0509876543', expected: J`
              Sami: no number
              Lama: 0509876543
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    for (int i = 0; i < 2; i++) {
                        Contact c = new Contact(sc.next());
                        String phone = sc.next();
                        if (!phone.equals("-")) {
                            c.setPhone(phone);
                        }
                        System.out.println(c);
                    }
                }
            }

            class Contact {
                private String name;
                private String phone;

                public Contact(String name) {
                    this.name = name;
                }

                public void setPhone(String phone) {
                    this.phone = phone;
                }

                @Override
                public String toString() {
                    if (phone == null) {
                        return name + ": no number";
                    }
                    return name + ": " + phone;
                }
            }
          `,
          hint: "Call <code>setPhone</code> only when the input is not <code>-</code>. In <code>toString</code>, test <code>phone == null</code> first.",
          explain: "The phone stays null when no number is given. <code>toString</code> checks for null before using the phone, so nothing crashes." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 11
    {
      title: 'Designing a class from a problem description',
      titleAr: 'تصميم صنف من وصف المسألة',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: a story, not code' },
        { type: 'p', en: "In real work, and in many exam questions, nobody gives you the class. You get a short story: &quot;The clinic wants to keep appointments…&quot;. You must decide which fields, constructors and methods the class needs. This lesson gives you a simple recipe, so you never stare at an empty page." },
        { type: 'analogy', title: 'The tailor', en: "A good tailor does not start by cutting the cloth. First he measures, asks questions and draws a pattern on paper. Only then does he cut. Designing a class is the same: read the story, decide, draw the UML box, and only then write Java.",
          ar: "الخياط يقيس ويرسم قبل أن يقص؛ ونحن نقرأ ونرسم قبل أن نكتب الكود." },

        { type: 'h', en: 'The recipe: nouns, verbs, rules' },
        { type: 'p', en: "Read the story with a pencil. Each kind of word tells you something about the class:" },
        { type: 'table', head: ['In the story', 'In the class', 'Example'], rows: [
          ['Nouns: what it <b>has</b>', 'fields', '&quot;a contact has a <u>name</u> and a <u>phone number</u>&quot;'],
          ['Verbs: what it <b>does</b>', 'methods', '&quot;you can <u>change</u> the number&quot;'],
          ['What is known when it is <b>created</b>', 'constructor parameters', '&quot;a new contact always has a name&quot;'],
          ['Rules: <b>must</b>, <b>never</b>, <b>at most</b>', 'private fields + checks', '&quot;a mark must be 0 to 100&quot;'],
          ['<b>Shared</b> by all, <b>counts</b> all', 'static members', '&quot;tickets are numbered 1, 2, 3…&quot;']
        ] },
        { type: 'p', en: "Then draw the UML box, write the Java code box by box, and finally test the class in <code>main</code> with two or three objects.",
          ar: "الأسماء حقول، والأفعال دوال، وما يُعرف عند الإنشاء معاملات المُنشئ، والقواعد تحقق داخل الدوال." },
        { type: 'check', q: "In the story &quot;A student can <u>register</u> for a course&quot;, the word <i>register</i> most likely becomes…", options: ["a field", "a method", "a class name", "a constant"], answer: 1,
          explain: "It is a verb, something the object does, so it becomes a method such as <code>register(...)</code>." },

        { type: 'h', en: 'Example 1: a phone contact' },
        { type: 'p', en: "The story: <i>&quot;A phone contact has a name and a phone number. A new contact always has a name, but the number may be added later. You can change the number, ask whether the contact has a number, and print the contact.&quot;</i> Let us apply the recipe." },
        { type: 'table', head: ['Words in the story', 'Design decision'], rows: [
          ['<i>name</i>, <i>phone number</i>', 'two private fields: <code>- name: String</code>, <code>- phone: String</code>'],
          ['<i>always has a name</i>', 'every constructor needs the name'],
          ['<i>the number may be added later</i>', 'a constructor with only the name (phone stays null) and one with both'],
          ['<i>change the number</i>', '<code>+ setPhone(phone: String): void</code>'],
          ['<i>ask whether it has a number</i>', '<code>+ hasPhone(): boolean</code>'],
          ['<i>print the contact</i>', '<code>+ toString(): String</code>']
        ] },
        { type: 'code', code: J`
          +------------------------------------------+
          |                 Contact                  |
          +------------------------------------------+
          | - name: String                           |
          | - phone: String                          |
          +------------------------------------------+
          | + Contact(name: String)                  |
          | + Contact(name: String, phone: String)   |
          | + setPhone(phone: String): void          |
          | + hasPhone(): boolean                    |
          | + toString(): String                     |
          +------------------------------------------+
        ` },
        { type: 'p', en: "Now translate the box, line by line, and test it:" },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Contact a = new Contact("Majed");
                  Contact b = new Contact("Nouf", "0509876543");
                  System.out.println(a + " | has phone: " + a.hasPhone());
                  a.setPhone("0551234567");
                  System.out.println(a);
                  System.out.println(b);
              }
          }

          class Contact {
              private String name;
              private String phone;

              public Contact(String name) {
                  this.name = name;
              }

              public Contact(String name, String phone) {
                  this.name = name;
                  this.phone = phone;
              }

              public void setPhone(String phone) { this.phone = phone; }

              public boolean hasPhone() { return phone != null; }

              @Override
              public String toString() {
                  if (hasPhone()) {
                      return name + " (" + phone + ")";
                  }
                  return name + " (no number)";
              }
          }
        `, out: J`
          Majed (no number) | has phone: false
          Majed (0551234567)
          Nouf (0509876543)
        ` },
        { type: 'lines', rows: [
          ['public Contact(String name)', 'From &quot;the number may be added later&quot;: only the name is needed at birth.'],
          ['public boolean hasPhone()', 'From &quot;ask whether…&quot;: a question becomes a <code>boolean</code> method. The null check lives here.'],
          ['toString() uses hasPhone()', 'One method reuses another, so the null check is written only once.']
        ], ar: "كل جملة في القصة أصبحت عضوًا في الصنف." },

        { type: 'h', en: 'Store facts, compute answers' },
        { type: 'p', en: "A common design question: should something be a <b>field</b> or a <b>method</b>? A good rule: store the basic facts, and compute the answers. A café order stores the price of one cup and the number of cups. The total is an answer you can compute, so it should be a method <code>total()</code>, not a field. A stored total becomes wrong as soon as somebody changes the cups and forgets to update it." },
        { type: 'analogy', title: 'Your ID card', en: "Your ID card shows your date of birth, not your age. Your age changes every year, but your date of birth never does. The card stores the fact; anyone can compute the age from it.",
          ar: "البطاقة تخزّن تاريخ الميلاد لا العمر؛ العمر يُحسب." },
        { type: 'code', code: J`
          // Risky design: total must be updated by hand every time
          class CafeOrder {
              private double price;
              private int cups;
              private double total;
          }

          // Better design: total is computed, so it is always right
          class CafeOrder {
              private double price;
              private int cups;

              public double total() {
                  return price * cups;
              }
          }
        ` },
        { type: 'check', q: "A <code>Student</code> class stores the marks of three exams. Which one should be a <b>method</b>, not a field?", options: ["The student's name", "The first mark", "The average of the three marks", "The student's ID"], answer: 2,
          explain: "The average can always be computed from the marks. Storing it would risk a wrong value after a mark changes." },

        { type: 'steps', title: 'Worked example: a parking ticket', problem: "The story: <i>&quot;A parking ticket gets an automatic number (1, 2, 3…), the car's plate and the entry hour. When the car leaves, the exit hour is recorded. The fee is 5 riyals for every hour after the first hour (the first hour is free). A ticket can be printed.&quot;</i> Design the class, then read two cars (plate, entry hour, exit hour) and print their tickets.",
          steps: [
            { en: "Step 1: Nouns become fields. &quot;Automatic number 1, 2, 3…&quot; means a static counter shared by all tickets. The fee is an answer, so it is NOT a field.", code: J`
              private static int count = 0;
              private int number;
              private String plate;
              private int entryHour;
              private int exitHour;
            ` },
            { en: "Step 2: The constructor. When the car enters we know the plate and the entry hour. The number comes from the counter.", code: J`
              public ParkingTicket(String plate, int entryHour) {
                  count++;
                  this.number = count;
                  this.plate = plate;
                  this.entryHour = entryHour;
              }
            ` },
            { en: "Step 3: Verbs become methods: <i>leaves</i> records the exit hour; the fee is computed from the facts.", code: J`
              public void leave(int exitHour) {
                  this.exitHour = exitHour;
              }

              public int fee() {
                  int hours = exitHour - entryHour;
                  if (hours <= 1) {
                      return 0;
                  }
                  return (hours - 1) * 5;
              }
            ` },
            { en: "Step 4: <i>can be printed</i> becomes toString.", code: J`
              @Override
              public String toString() {
                  return "Ticket #" + number + " " + plate + ": "
                      + (exitHour - entryHour) + " hour(s), " + fee() + " riyals";
              }
            ` },
            { en: "Step 5: Test in main with two cars.", code: J`
              for (int i = 0; i < 2; i++) {
                  ParkingTicket t = new ParkingTicket(sc.next(), sc.nextInt());
                  t.leave(sc.nextInt());
                  System.out.println(t);
              }
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    for (int i = 0; i < 2; i++) {
                        ParkingTicket t = new ParkingTicket(sc.next(), sc.nextInt());
                        t.leave(sc.nextInt());
                        System.out.println(t);
                    }
                }
            }

            class ParkingTicket {
                private static int count = 0;
                private int number;
                private String plate;
                private int entryHour;
                private int exitHour;

                public ParkingTicket(String plate, int entryHour) {
                    count++;
                    this.number = count;
                    this.plate = plate;
                    this.entryHour = entryHour;
                }

                public void leave(int exitHour) {
                    this.exitHour = exitHour;
                }

                public int fee() {
                    int hours = exitHour - entryHour;
                    if (hours <= 1) {
                        return 0;
                    }
                    return (hours - 1) * 5;
                }

                @Override
                public String toString() {
                    return "Ticket #" + number + " " + plate + ": "
                        + (exitHour - entryHour) + " hour(s), " + fee() + " riyals";
                }
            }
          `, stdin: 'ABJ1234 8 11 RUA5555 9 10', out: J`
            Ticket #1 ABJ1234: 3 hour(s), 10 riyals
            Ticket #2 RUA5555: 1 hour(s), 0 riyals
          `, ar: "الأسماء حقول، والرقم التلقائي عدّاد ساكن، والرسوم تُحسب بدالة ولا تُخزَّن." },
        { type: 'memory', title: 'The tickets in memory', en: "Follow the loop. Notice three things: the counter lives in the static box S; there is no <code>fee</code> field anywhere (it is computed when <code>toString</code> runs); and when the loop builds the second ticket, the variable <code>t</code> moves to it, so the first ticket becomes garbage.", frames: [
          { label: 'Loop 1: after <code>new ParkingTicket("ABJ1234", 8)</code>', vars: [{ name: 't', type: 'ParkingTicket', ref: 'A' }], objects: [{ id: 'S', cls: 'ParkingTicket (static part)', fields: [{ name: 'count', value: '1' }] }, { id: 'A', cls: 'ParkingTicket', fields: [{ name: 'number', value: '1' }, { name: 'plate', value: '"ABJ1234"' }, { name: 'entryHour', value: '8' }, { name: 'exitHour', value: '0' }] }] },
          { label: 'Loop 1: after <code>t.leave(11);</code>', vars: [{ name: 't', type: 'ParkingTicket', ref: 'A' }], objects: [{ id: 'S', cls: 'ParkingTicket (static part)', fields: [{ name: 'count', value: '1' }] }, { id: 'A', cls: 'ParkingTicket', fields: [{ name: 'number', value: '1' }, { name: 'plate', value: '"ABJ1234"' }, { name: 'entryHour', value: '8' }, { name: 'exitHour', value: '11' }] }] },
          { label: 'Loop 2: after <code>new ParkingTicket("RUA5555", 9)</code>', vars: [{ name: 't', type: 'ParkingTicket', ref: 'B' }], objects: [{ id: 'S', cls: 'ParkingTicket (static part)', fields: [{ name: 'count', value: '2' }] }, { id: 'A', cls: 'ParkingTicket', fields: [{ name: 'number', value: '1' }, { name: 'plate', value: '"ABJ1234"' }, { name: 'entryHour', value: '8' }, { name: 'exitHour', value: '11' }], gone: true }, { id: 'B', cls: 'ParkingTicket', fields: [{ name: 'number', value: '2' }, { name: 'plate', value: '"RUA5555"' }, { name: 'entryHour', value: '9' }, { name: 'exitHour', value: '0' }] }] }
        ], ar: "العدّاد في الجزء الساكن، والرسوم لا تُخزَّن، والتذكرة الأولى تصبح مهملة عندما ينتقل t." },

        { type: 'h', en: 'Reading a UML box you are given' },
        { type: 'p', en: "Sometimes the design is already done, and the exam gives you the UML box. Then your job is only to translate it carefully: every line of the box becomes one member, with the signs <code>+</code> / <code>-</code>, underlining for static, and the type after the colon." },
        { type: 'steps', title: 'Worked example 2: a café loyalty card from UML', problem: "Write the class from this box. Story: each coffee adds a stamp; at 10 stamps the customer earns a free coffee and the stamps go back to 0. Then read an owner and a number of coffees and print the card.<br><code>LoyaltyCard</code>: <code>+ STAMPS_FOR_FREE: int = 10</code> (underlined), <code>- owner: String</code>, <code>- stamps: int</code>, <code>- freeCoffees: int</code>, <code>+ LoyaltyCard(owner: String)</code>, <code>+ buyCoffee(): void</code>, <code>+ getFreeCoffees(): int</code>, <code>+ toString(): String</code>.",
          steps: [
            { en: "Step 1: The underlined constant, then the three private fields.", code: J`
              public static final int STAMPS_FOR_FREE = 10;
              private String owner;
              private int stamps;
              private int freeCoffees;
            ` },
            { en: "Step 2: The constructor takes only the owner. The counts start at 0.", code: J`
              public LoyaltyCard(String owner) {
                  this.owner = owner;
                  this.stamps = 0;
                  this.freeCoffees = 0;
              }
            ` },
            { en: "Step 3: <code>buyCoffee()</code> holds the rule from the story.", code: J`
              public void buyCoffee() {
                  stamps++;
                  if (stamps == STAMPS_FOR_FREE) {
                      freeCoffees++;
                      stamps = 0;
                  }
              }
            ` },
            { en: "Step 4: The getter and toString.", code: J`
              public int getFreeCoffees() { return freeCoffees; }

              @Override
              public String toString() {
                  return owner + ": " + stamps + " stamps, " + freeCoffees + " free coffee(s)";
              }
            ` },
            { en: "Step 5: Test it in main.", code: J`
              LoyaltyCard card = new LoyaltyCard(sc.next());
              int n = sc.nextInt();
              for (int i = 0; i < n; i++) {
                  card.buyCoffee();
              }
              System.out.println(card);
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    LoyaltyCard card = new LoyaltyCard(sc.next());
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        card.buyCoffee();
                    }
                    System.out.println(card);
                }
            }

            class LoyaltyCard {
                public static final int STAMPS_FOR_FREE = 10;
                private String owner;
                private int stamps;
                private int freeCoffees;

                public LoyaltyCard(String owner) {
                    this.owner = owner;
                    this.stamps = 0;
                    this.freeCoffees = 0;
                }

                public void buyCoffee() {
                    stamps++;
                    if (stamps == STAMPS_FOR_FREE) {
                        freeCoffees++;
                        stamps = 0;
                    }
                }

                public int getFreeCoffees() { return freeCoffees; }

                @Override
                public String toString() {
                    return owner + ": " + stamps + " stamps, " + freeCoffees + " free coffee(s)";
                }
            }
          `, stdin: 'Huda 23', out: 'Huda: 3 stamps, 2 free coffee(s)',
          ar: "ترجم{{g:|ي}} المخطط سطرًا سطرًا، ثم اختبر{{g:|ي}} الصنف في main." },
        { type: 'h', en: 'Check the design against the story' },
        { type: 'p', en: "Before you hand in, read the story again, sentence by sentence, and point to the member that handles each sentence. If a sentence has no member, something is missing. If a member matches no sentence, maybe you do not need it. Then ask four short questions:" },
        { type: 'list', items: [
          "Can every object start in a <b>valid</b> state? (Do the constructors ask for everything that must be known?)",
          "Can outside code <b>break a rule</b>? (Are the fields private, and do the methods check?)",
          "Is anything <b>stored</b> that could be <b>computed</b>?",
          "Does every name say clearly what it is or what it does?"
        ], ar: "راجع{{g:|ي}} التصميم: إنشاء سليم، قواعد محمية، لا تخزين لما يُحسب، وأسماء واضحة." },
        { type: 'note', kind: 'exam', en: "Exam tip: before writing code for a story question, write the UML box in the margin first. It takes one minute and it shows the examiner your design even if the code has a small mistake.",
          ar: "ارسم{{g:|ي}} مخطط UML قبل الكود في سؤال الاختبار." },
        { type: 'check', q: "A story says: &quot;Every bus ticket costs 4 riyals, and the system counts how many tickets were sold today.&quot; Which pair is the best design?", options: ["Two normal fields: price and sold", "A static final constant PRICE = 4 and a static counter sold", "A normal field price and a static method sold()", "Two local variables in main"], answer: 1,
          explain: "The price is the same for all tickets and never changes: a constant. The count of all tickets belongs to the whole class: a static field." }
      ],
      mistakes: [
        { title: 'Storing a value you can compute', en: "A stored total, average or age becomes wrong when the facts change. Compute it in a method instead.", code: J`
          private double total;          // risky
          public double total() {        // better
              return price * cups;
          }
        `, ar: "لا تخزّن{{g:|ي}} ما يمكن حسابه." },
        { title: 'Making every field public', en: "Public fields cannot protect the rules of the story (&quot;never negative&quot;, &quot;at most 10&quot;). Make fields private and put the checks in methods." },
        { title: 'Unclear names', en: "Class names are singular nouns with a capital letter (<code>Ticket</code>, not <code>tickets</code>). Method names are verbs or questions (<code>deposit</code>, <code>isFree</code>), not nouns.", code: J`
          void money(double x)        // unclear
          void deposit(double amount) // clear
        ` },
        { title: 'A constructor that leaves important fields empty', en: "Ask: what must be known when the object is created? If a contact must always have a name, do not offer a constructor without a name.", code: J`
          public Contact() { }   // allows a contact with no name (null)
        ` }
      ],
      remember: [
        "Nouns become <b>fields</b>, verbs become <b>methods</b>, rules become <b>private fields + checks</b>, &quot;shared / counts all&quot; becomes <b>static</b>.",
        "Ask what must be known at creation: those are the <b>constructor parameters</b>.",
        "<b>Store facts, compute answers</b>: total(), fee(), average() are methods.",
        "Draw the UML box first, then translate it line by line.",
        "Test the new class in <code>main</code> with two or three objects."
      ],
      rememberAr: "الأسماء حقول والأفعال دوال والقواعد تحقق داخل الدوال، وما يُعرف عند الإنشاء معاملات المُنشئ. خزّن{{g:|ي}} الحقائق واحسب{{g:|ي}} النتائج. ارسم{{g:|ي}} المخطط ثم اكتب{{g:|ي}} الكود واختبره.",
      practice: [
        { t: 'mcq', q: "Story: &quot;A library book has a title, an author and a number of available copies. Members can borrow and return copies.&quot; Which list is the best set of <b>fields</b>?",
          qAr: "ما الحقول المناسبة من القصة؟",
          options: ["title, author, copies", "borrow, return", "Library, Member", "title, borrow, return"], answer: 0,
          explain: "Fields are what the book <i>has</i>: the nouns title, author and copies. <i>borrow</i> and <i>return</i> are verbs, so they become methods.", explainAr: "الأسماء تصبح حقولًا والأفعال دوال." },
        { t: 'mcq', q: "In the same story, which member is a good <b>method</b>?",
          options: ["<code>String author</code>", "<code>boolean borrow()</code> that returns false when no copies are left", "<code>int copies</code>", "<code>static String title</code>"], answer: 1,
          explain: "<i>Borrow</i> is an action. Returning a boolean lets the caller know whether it worked, and the rule (no copies left) stays inside the class." },
        { t: 'mcq', q: "A <code>Rectangle</code> stores <code>width</code> and <code>height</code>. How should the area be designed?",
          options: ["As a field <code>area</code> set in the constructor", "As a method <code>area()</code> that returns width * height", "As a static field", "As a constant"], answer: 1,
          explain: "The area is computed from the facts. A method is always correct, even after the width changes." },
        { t: 'order', q: "Arrange the lines to write the class from this UML box: <code>Membership</code> with <code>- name: String</code>, <code>- months: int</code>, <code>+ Membership(name: String)</code> (months start at 1), <code>+ extend(m: int): void</code>.",
          lines: [
            "class Membership {",
            "    private String name;",
            "    private int months;",
            "    public Membership(String name) {",
            "        this.name = name;",
            "        this.months = 1;",
            "    }",
            "    public void extend(int m) {",
            "        months += m;",
            "    }",
            "}"
          ], explain: "Fields first (minus = private), then the constructor (plus = public, sets the starting month), then the method, then close the class." },
        { t: 'bug', q: "The order should cost 43.5 riyals after adding one cup (3 x 14.5), but the program prints <code>29.0</code>. Tap the line with the bug.",
          qAr: "الإجمالي لم يتحدّث بعد إضافة كوب. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    CafeOrder o = new CafeOrder(14.5, 2);
                    o.addCups(1);
                    System.out.println(o.total);
                }
            }
            class CafeOrder {
                double price;
                int cups;
                double total;
                CafeOrder(double p, int c) { price = p; cups = c; total = p * c; }
                void addCups(int n) { cups += n; }
            }
          `, bug: [13, 11],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    CafeOrder o = new CafeOrder(14.5, 2);
                    o.addCups(1);
                    System.out.println(o.total);
                }
            }
            class CafeOrder {
                double price;
                int cups;
                double total;
                CafeOrder(double p, int c) { price = p; cups = c; total = p * c; }
                void addCups(int n) { cups += n; total = price * cups; }
            }
          `,
          hint: "When the cups change, which other stored value should change too?",
          explain: "The total is stored in a field (line 11), but <code>addCups</code> on line 13 changes the cups and forgets the total, so it stays 29.0. The quick fix updates the total in <code>addCups</code>. The better design removes the field and computes <code>total()</code> in a method: store facts, compute answers.",
          explainAr: "القيمة المخزّنة لم تتحدّث؛ الأفضل حساب الإجمالي بدالة." },
        { t: 'code', q: "Design from the story and the UML box. <i>&quot;A gym membership has a member name and the months left. Each month used lowers the months by one, but never below zero. A membership is active while months are left.&quot;</i><br><code>Membership</code>: <code>- name: String</code>, <code>- months: int</code>, <code>+ Membership(name: String, months: int)</code>, <code>+ useMonth(): void</code>, <code>+ isActive(): boolean</code>, <code>+ toString(): String</code> returning <code>NAME: MONTHS month(s) left</code>.<br>In <code>main</code> read a name, the months and a number <code>k</code> of months used (no prompts). Call <code>useMonth()</code> k times, then print the membership and <code>Active: true</code> or <code>Active: false</code>.",
          qAr: "صمّم{{g:|ي}} الصنف من القصة والمخطط ثم اختبره.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read name, months, k; use k months; print
                }
            }

            class Membership {
                // write the class from the UML box
            }
          `,
          tests: [
            { stdin: 'Sara 3 2', expected: J`
              Sara: 1 month(s) left
              Active: true
            ` },
            { stdin: 'Ali 1 4', expected: J`
              Ali: 0 month(s) left
              Active: false
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Membership m = new Membership(sc.next(), sc.nextInt());
                    int k = sc.nextInt();
                    for (int i = 0; i < k; i++) {
                        m.useMonth();
                    }
                    System.out.println(m);
                    System.out.println("Active: " + m.isActive());
                }
            }

            class Membership {
                private String name;
                private int months;

                public Membership(String name, int months) {
                    this.name = name;
                    this.months = months;
                }

                public void useMonth() {
                    if (months > 0) {
                        months--;
                    }
                }

                public boolean isActive() {
                    return months > 0;
                }

                @Override
                public String toString() {
                    return name + ": " + months + " month(s) left";
                }
            }
          `,
          hint: "The rule &quot;never below zero&quot; goes inside <code>useMonth()</code>: lower the months only when they are more than 0.",
          explain: "Every line of the box became one member. The rule from the story lives in <code>useMonth()</code>, and <code>isActive()</code> is a computed answer, not a stored field." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 12
    {
      title: 'Immutable objects',
      titleAr: 'الكائنات غير القابلة للتغيير',
      minutes: 30,
      body: [
        { type: 'h', en: 'The problem: changes nobody expected' },
        { type: 'p', en: "In Lesson 2 you met aliases: two variables, one object. That is useful, but it can bite. Suppose a clinic gives the same time object to two patients' records, and then one record moves its time. Now the other patient's time moved too! Some values should simply never change once they are created: a national ID number, a date of birth, a receipt after payment, a time slot. Objects that can never change are called <b>immutable</b> (not changeable)." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Time t = new Time(9, 30);
                  Time hessa = t;
                  Time majed = t;
                  majed.hour = 11;
                  System.out.println("Hessa: " + hessa.hour + ":" + hessa.minute);
              }
          }

          class Time {
              int hour;
              int minute;

              Time(int hour, int minute) {
                  this.hour = hour;
                  this.minute = minute;
              }
          }
        `, out: 'Hessa: 11:30' },
        { type: 'memory', title: 'The surprise', frames: [
          { label: 'After <code>Time hessa = t; Time majed = t;</code>', vars: [{ name: 't', type: 'Time', ref: 'A' }, { name: 'hessa', type: 'Time', ref: 'A' }, { name: 'majed', type: 'Time', ref: 'A' }], objects: [{ id: 'A', cls: 'Time', fields: [{ name: 'hour', value: '9' }, { name: 'minute', value: '30' }] }] },
          { label: 'After <code>majed.hour = 11;</code>: Hessa\'s time moved too!', vars: [{ name: 't', type: 'Time', ref: 'A' }, { name: 'hessa', type: 'Time', ref: 'A' }, { name: 'majed', type: 'Time', ref: 'A' }], objects: [{ id: 'A', cls: 'Time', fields: [{ name: 'hour', value: '11' }, { name: 'minute', value: '30' }] }] }
        ], ar: "ثلاثة متغيرات تشير إلى كائن واحد، فتغييره عبر أحدها يفاجئ الآخرين." },
        { type: 'analogy', title: 'The printed receipt', en: "After you pay at a café you get a printed receipt. Nobody can change the numbers on it. If your order changes, the café prints a <b>new</b> receipt, and the old one stays as it was. An immutable object is that receipt.",
          ar: "الكائن غير القابل للتغيير كالإيصال المطبوع: لا يُعدَّل، بل يُطبع إيصال جديد." },

        { type: 'h', en: 'You already know one: String' },
        { type: 'p', en: "<code>String</code> is immutable. Methods such as <code>toUpperCase()</code> never change the String they are called on. They build and return a <b>new</b> String. If you do not keep the result, it is lost." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  String city = "riyadh";
                  city.toUpperCase();
                  System.out.println(city);
                  city = city.toUpperCase();
                  System.out.println(city);
              }
          }
        `, out: J`
          riyadh
          RIYADH
        ` },
        { type: 'memory', title: 'Strings never change; new Strings appear', frames: [
          { label: 'After <code>String city = "riyadh";</code>', vars: [{ name: 'city', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"riyadh"' }] }] },
          { label: 'After <code>city.toUpperCase();</code> (the new String is not kept)', vars: [{ name: 'city', type: 'String', ref: 'A' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"riyadh"' }] }, { id: 'B', cls: 'String', fields: [{ name: 'text', value: '"RIYADH"' }], gone: true }] },
          { label: 'After <code>city = city.toUpperCase();</code>', vars: [{ name: 'city', type: 'String', ref: 'C' }], objects: [{ id: 'A', cls: 'String', fields: [{ name: 'text', value: '"riyadh"' }], gone: true }, { id: 'C', cls: 'String', fields: [{ name: 'text', value: '"RIYADH"' }] }] }
        ], ar: "toUpperCase تعيد نصًا جديدًا؛ يجب حفظه في متغير." },
        { type: 'check', q: "What does this print?", code: J`
          String s = "abc";
          s.concat("d");
          System.out.println(s);
        `, options: ["abcd", "abc", "d", "Compile error"], answer: 1,
          explain: "<code>concat</code> returns a new String \"abcd\", but nobody keeps it. <code>s</code> still points to \"abc\"." },

        { type: 'h', en: 'Rule 1: final fields' },
        { type: 'p', en: "The keyword <code>final</code> on a field means: this field gets its value <b>once</b> (in the constructor, or where it is declared) and can never be assigned again. You do not have to remember the rule yourself: the compiler checks it." },
        { type: 'code', code: J`
          class NationalId {
              private final String number;

              public NationalId(String number) {
                  this.number = number;   // OK: the one and only assignment
              }

              public void change(String n) {
                  number = n;             // ERROR: cannot assign a value to final variable number
              }
          }
        ` },
        { type: 'lines', rows: [
          ['private final String number;', 'Private (others cannot touch it) and final (even this class cannot change it later).'],
          ['this.number = number;', 'The constructor gives the value. This is allowed once.'],
          ['number = n;', 'A second assignment: the compiler refuses.']
        ], ar: "الحقل final يأخذ قيمته مرة واحدة في المُنشئ ولا يتغير بعدها." },
        { type: 'note', kind: 'warn', en: "A <code>final</code> field must get a value in <b>every</b> constructor. If one constructor forgets it, the code does not compile (<i>variable number might not have been initialized</i>).",
          ar: "يجب إعطاء الحقل final قيمة في كل مُنشئ." },
        { type: 'check', q: "Where may a <code>final</code> field be assigned?", options: ["In any method, as many times as needed", "Only once: in the constructor or at its declaration", "Only in main", "Only in a setter"], answer: 1,
          explain: "A final field is assigned exactly once, when the object is created." },

        { type: 'h', en: 'Rule 2 and Rule 3: no setters, return a new object' },
        { type: 'p', en: "An immutable class has getters but <b>no setters</b>, and no other method that changes a field. But what if we need a later time? The method builds a <b>new</b> object with the new values and returns it, exactly like <code>toUpperCase()</code>. The original stays as it was." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Time start = new Time(9, 30);
                  Time end = start.plusMinutes(90);
                  System.out.println("Start: " + start);
                  System.out.println("End: " + end);
              }
          }

          class Time {
              private final int hour;
              private final int minute;

              public Time(int hour, int minute) {
                  this.hour = hour;
                  this.minute = minute;
              }

              public int getHour() { return hour; }
              public int getMinute() { return minute; }

              public Time plusMinutes(int m) {
                  int total = hour * 60 + minute + m;
                  return new Time(total / 60, total % 60);
              }

              @Override
              public String toString() {
                  if (minute < 10) {
                      return hour + ":0" + minute;
                  }
                  return hour + ":" + minute;
              }
          }
        `, out: J`
          Start: 9:30
          End: 11:00
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['private final int hour;', 'Rule 1: private and final.'],
          ['public int getHour()', 'Rule 2: getters only. There is no <code>setHour</code>.'],
          ['int total = hour * 60 + minute + m;', '9:30 is 570 minutes; plus 90 gives 660.'],
          ['return new Time(total / 60, total % 60);', 'Rule 3: build a new Time (660 / 60 = 11, 660 % 60 = 0) and return it.'],
          ['Time end = start.plusMinutes(90);', 'Keep the new object in a variable. <code>start</code> is still 9:30.']
        ], ar: "الدالة لا تغيّر الكائن، بل تعيد كائنًا جديدًا بالقيم الجديدة." },
        { type: 'memory', title: 'The original stays; a new object comes back', frames: [
          { label: 'After <code>Time start = new Time(9, 30);</code>', vars: [{ name: 'start', type: 'Time', ref: 'A' }], objects: [{ id: 'A', cls: 'Time', fields: [{ name: 'hour (final)', value: '9' }, { name: 'minute (final)', value: '30' }] }] },
          { label: 'After <code>Time end = start.plusMinutes(90);</code>', vars: [{ name: 'start', type: 'Time', ref: 'A' }, { name: 'end', type: 'Time', ref: 'B' }], objects: [{ id: 'A', cls: 'Time', fields: [{ name: 'hour (final)', value: '9' }, { name: 'minute (final)', value: '30' }] }, { id: 'B', cls: 'Time', fields: [{ name: 'hour (final)', value: '11' }, { name: 'minute (final)', value: '0' }] }] }
        ], ar: "الكائن A لم يتغير، والكائن B جديد." },
        { type: 'check', q: "After <code>Time end = start.plusMinutes(90);</code>, what is <code>start.getHour()</code> if start was 9:30?", options: ["11", "9", "10", "0"], answer: 1,
          explain: "Immutable: <code>plusMinutes</code> never changes <code>start</code>. It returned a new object, stored in <code>end</code>." },

        { type: 'h', en: 'Why immutable objects are safe' },
        { type: 'p', en: "Because nobody can change an immutable object, you can share it freely. Two patients may hold the same Time object: neither can move the other's time, because there is no way to move it at all. Look at the same story as before, now with the immutable Time:" },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Time t = new Time(9, 30);
                  Time hessa = t;
                  Time majed = t;
                  majed = majed.plusMinutes(90);
                  System.out.println("Hessa: " + hessa);
                  System.out.println("Majed: " + majed);
              }
          }

          class Time {
              private final int hour;
              private final int minute;

              public Time(int hour, int minute) {
                  this.hour = hour;
                  this.minute = minute;
              }

              public Time plusMinutes(int m) {
                  int total = hour * 60 + minute + m;
                  return new Time(total / 60, total % 60);
              }

              @Override
              public String toString() {
                  if (minute < 10) {
                      return hour + ":0" + minute;
                  }
                  return hour + ":" + minute;
              }
          }
        `, out: J`
          Hessa: 9:30
          Majed: 11:00
        ` },
        { type: 'memory', title: 'Sharing without surprises', frames: [
          { label: 'After <code>Time hessa = t; Time majed = t;</code>', vars: [{ name: 't', type: 'Time', ref: 'A' }, { name: 'hessa', type: 'Time', ref: 'A' }, { name: 'majed', type: 'Time', ref: 'A' }], objects: [{ id: 'A', cls: 'Time', fields: [{ name: 'hour (final)', value: '9' }, { name: 'minute (final)', value: '30' }] }] },
          { label: 'After <code>majed = majed.plusMinutes(90);</code>: only majed\'s arrow moved', vars: [{ name: 't', type: 'Time', ref: 'A' }, { name: 'hessa', type: 'Time', ref: 'A' }, { name: 'majed', type: 'Time', ref: 'B' }], objects: [{ id: 'A', cls: 'Time', fields: [{ name: 'hour (final)', value: '9' }, { name: 'minute (final)', value: '30' }] }, { id: 'B', cls: 'Time', fields: [{ name: 'hour (final)', value: '11' }, { name: 'minute (final)', value: '0' }] }] }
        ], ar: "مشاركة الكائن غير القابل للتغيير آمنة: لا أحد يستطيع تغييره." },
        { type: 'list', items: [
          "<b>Safe to share</b>: aliases can never surprise you, so you never need a copy constructor.",
          "<b>Safe to pass</b>: a method that receives it cannot change it (Lesson 9).",
          "<b>Easy to trust</b>: an object that was correct when it was built stays correct forever."
        ], ar: "الكائنات غير القابلة للتغيير آمنة في المشاركة والتمرير." },
        { type: 'table', head: ['Good as immutable', 'Better as changeable (mutable)'], rows: [
          ['ID numbers, dates and times', 'a bank account (the balance changes)'],
          ['an amount of money, a price', 'a shopping cart, a café order being built'],
          ['a receipt, a grade report that is final', 'a loyalty card, a game player\'s score']
        ] },
        { type: 'note', kind: 'tip', en: "Professional immutable classes are often declared <code>final class Time</code>, so nobody can create a changeable version of them. You will understand why in Unit 4 (inheritance).",
          ar: "غالبًا يُكتب الصنف نفسه final، وستعرف السبب في الوحدة 4." },

        { type: 'h', en: 'A final variable is not an immutable object' },
        { type: 'p', en: "Careful: <code>final</code> on a <b>variable</b> that holds an object only fixes the <b>arrow</b>. The arrow can never point elsewhere, but the object itself can still change if its class allows it." },
        { type: 'analogy', title: 'The parking sticker', en: "A university parking sticker is glued to one car. You cannot move the sticker to another car: that is the <code>final</code> variable. But the owner can still wash or repaint the car: the object itself can change.",
          ar: "الملصق ثابت على سيارة واحدة (final)، لكن السيارة نفسها يمكن طلاؤها." },
        { type: 'code', code: J`
          final BankAccount acc = new BankAccount("Lina", 100);
          acc.deposit(50);                     // allowed: the object changes
          acc = new BankAccount("Omar", 0);    // ERROR: the arrow is final
        ` },
        { type: 'note', kind: 'exam', en: "Exam trap: &quot;<code>final</code> makes an object immutable&quot; is FALSE. An object is immutable only when its <b>class</b> is designed that way: private final fields, no setters, and new objects for changes.",
          ar: "final على المتغير يثبّت السهم فقط، لا الكائن." },
        { type: 'check', q: "<code>final MetroCard card = new MetroCard(20);</code> Which line compiles?", options: ["<code>card = new MetroCard(50);</code>", "<code>card.topUp(30);</code> (MetroCard has this method)", "Neither", "Both"], answer: 1,
          explain: "The arrow is final, so it cannot point to another card. But the card object itself can still change through its own methods." },

        { type: 'steps', title: 'Worked example: when does the appointment end?', problem: "Read a start time (hour and minute) and a length in minutes. Using an immutable <code>Time</code>, print the start time and the end time. The start time must stay unchanged.",
          steps: [
            { en: "Step 1: Private final fields and a constructor that sets them once.", code: J`
              private final int hour;
              private final int minute;

              public Time(int hour, int minute) {
                  this.hour = hour;
                  this.minute = minute;
              }
            ` },
            { en: "Step 2: No setters. A &quot;change&quot; returns a new Time. Turn everything into minutes, add, then split back with <code>/</code> and <code>%</code>.", code: J`
              public Time plusMinutes(int m) {
                  int total = hour * 60 + minute + m;
                  return new Time(total / 60, total % 60);
              }
            ` },
            { en: "Step 3: toString writes minutes with two digits.", code: J`
              @Override
              public String toString() {
                  if (minute < 10) {
                      return hour + ":0" + minute;
                  }
                  return hour + ":" + minute;
              }
            ` },
            { en: "Step 4: In main build the start time and keep the returned end time.", code: J`
              Time start = new Time(sc.nextInt(), sc.nextInt());
              Time end = start.plusMinutes(sc.nextInt());
            ` },
            { en: "Step 5: Print both.", code: J`
              System.out.println("Start: " + start);
              System.out.println("End: " + end);
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Time start = new Time(sc.nextInt(), sc.nextInt());
                    Time end = start.plusMinutes(sc.nextInt());
                    System.out.println("Start: " + start);
                    System.out.println("End: " + end);
                }
            }

            class Time {
                private final int hour;
                private final int minute;

                public Time(int hour, int minute) {
                    this.hour = hour;
                    this.minute = minute;
                }

                public Time plusMinutes(int m) {
                    int total = hour * 60 + minute + m;
                    return new Time(total / 60, total % 60);
                }

                @Override
                public String toString() {
                    if (minute < 10) {
                        return hour + ":0" + minute;
                    }
                    return hour + ":" + minute;
                }
            }
          `, stdin: '10 45 50', out: J`
            Start: 10:45
            End: 11:35
          `, ar: "وقت البداية لم يتغير، ووقت النهاية كائن جديد." },
        { type: 'steps', title: 'Worked example 2: an immutable café bill', problem: "Read the price of a latte (whole riyals), the number of cups and the price of a cake. Use an immutable <code>Money</code> class to compute the total, and print each price and the total.",
          steps: [
            { en: "Step 1: One private final field.", code: J`
              private final int riyals;

              public Money(int riyals) {
                  this.riyals = riyals;
              }
            ` },
            { en: "Step 2: Two methods that return NEW Money objects. <code>other.riyals</code> is allowed: same class.", code: J`
              public Money plus(Money other) {
                  return new Money(riyals + other.riyals);
              }

              public Money times(int n) {
                  return new Money(riyals * n);
              }
            ` },
            { en: "Step 3: A readable toString.", code: J`
              @Override
              public String toString() {
                  return riyals + " SAR";
              }
            ` },
            { en: "Step 4: Chain the calls. <code>latte.times(cups)</code> returns a new Money; <code>.plus(cake)</code> is called on that new object and returns another new one.", code: J`
              Money total = latte.times(cups).plus(cake);
            ` },
            { en: "Step 5: Print. <code>latte</code> and <code>cake</code> did not change.", code: J`
              System.out.println("Latte: " + latte);
              System.out.println("Cake: " + cake);
              System.out.println("Total: " + total);
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Money latte = new Money(sc.nextInt());
                    int cups = sc.nextInt();
                    Money cake = new Money(sc.nextInt());
                    Money total = latte.times(cups).plus(cake);
                    System.out.println("Latte: " + latte);
                    System.out.println("Cake: " + cake);
                    System.out.println("Total: " + total);
                }
            }

            class Money {
                private final int riyals;

                public Money(int riyals) {
                    this.riyals = riyals;
                }

                public Money plus(Money other) {
                    return new Money(riyals + other.riyals);
                }

                public Money times(int n) {
                    return new Money(riyals * n);
                }

                @Override
                public String toString() {
                    return riyals + " SAR";
                }
            }
          `, stdin: '14 2 9', out: J`
            Latte: 14 SAR
            Cake: 9 SAR
            Total: 37 SAR
          `, ar: "كل عملية تعيد كائنًا جديدًا، فيمكن ربط الاستدعاءات." }
      ],
      mistakes: [
        { title: 'Throwing away the new object', en: "Methods of immutable objects return the result. Calling them without keeping the result does nothing.", code: J`
          start.plusMinutes(30);              // result lost; start unchanged
          Time later = start.plusMinutes(30); // correct
          name.toUpperCase();                 // same mistake with String
        `, ar: "احفظ{{g:|ي}} الكائن المُعاد في متغير." },
        { title: 'Changing a final field in a method', en: "A method of an immutable class may not assign its fields. Build and return a new object instead.", code: J`
          public Time plusMinutes(int m) {
              minute = minute + m;   // ERROR: minute is final
              return this;
          }
        ` },
        { title: 'Forgetting a final field in a constructor', en: "Every constructor must give every final field a value, or the class does not compile.", code: J`
          private final int hour;
          public Time() { }   // ERROR: hour might not have been initialized
        ` },
        { title: 'Thinking a final variable freezes the object', en: "<code>final</code> on a variable fixes only the arrow. The object can still change if its class has methods that change it.", code: J`
          final BankAccount acc = new BankAccount("Lina", 100);
          acc.deposit(50);   // compiles: the object changed
        ` }
      ],
      remember: [
        "An <b>immutable</b> object never changes after its constructor finishes.",
        "Recipe: <b>private final</b> fields set once in the constructor, <b>no setters</b>, and methods that <b>return a new object</b>.",
        "<code>String</code> is immutable: <code>s.toUpperCase()</code> returns a new String, so keep the result.",
        "Immutable objects are <b>safe to share</b>: aliases cannot surprise you, and no copy is needed.",
        "<code>final</code> on a variable fixes the arrow, not the object."
      ],
      rememberAr: "الكائن غير القابل للتغيير لا يتغير بعد إنشائه: حقول private final، بلا دوال تعيين، والدوال تعيد كائنًا جديدًا. String مثال عليه. مشاركته آمنة. final على المتغير يثبّت السهم فقط.",
      practice: [
        { t: 'mcq', q: "Which class is immutable?",
          qAr: "أي صنف غير قابل للتغيير؟",
          options: ["<code>BankAccount</code> with <code>deposit</code> and <code>withdraw</code>", "<code>String</code>", "<code>LoyaltyCard</code> with <code>addStamp()</code>", "Any class with a constructor"], answer: 1,
          explain: "A String never changes; its methods return new Strings. The other classes have methods that change their fields.", explainAr: "النص لا يتغير، ودواله تعيد نصوصًا جديدة." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  String name = "sara";
                  name.toUpperCase();
                  String upper = name.toUpperCase();
                  System.out.println(name + " " + upper);
                  name = name + "!";
                  System.out.println(name);
              }
          }
        `, answer: J`
          sara SARA
          sara!
        `, explain: "The first <code>toUpperCase()</code> result is thrown away. The second is kept in <code>upper</code>. <code>name + \"!\"</code> builds a new String, and <code>name</code> is pointed at it.",
          explainAr: "النص الأصلي لا يتغير؛ النتيجة الجديدة تُحفظ في متغير." },
        { t: 'output', q: "<code>Money</code> is immutable. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Money a = new Money(10);
                  Money b = a;
                  a = a.plus(new Money(5));
                  System.out.println(a + " " + b);
              }
          }

          class Money {
              private final int riyals;

              public Money(int riyals) {
                  this.riyals = riyals;
              }

              public Money plus(Money other) {
                  return new Money(riyals + other.riyals);
              }

              @Override
              public String toString() {
                  return riyals + " SAR";
              }
          }
        `, answer: '15 SAR 10 SAR', explain: "<code>b</code> keeps the arrow to the old object (10). <code>plus</code> returns a new object (15), and only <code>a</code> is pointed at it.",
          explainAr: "plus تعيد كائنًا جديدًا، و b بقي على الكائن القديم." },
        { t: 'fill', q: "Complete the immutable <code>Money</code> class.", code: J`
          class Money {
              private ___ int riyals;

              public Money(int riyals) {
                  this.riyals = riyals;
              }

              public Money times(int n) {
                  return ___ Money(riyals * n);
              }
          }
        `, answers: ['final', 'new'],
          explain: "<code>final</code> makes sure the field is set only once. <code>times</code> does not change this object: it returns a <code>new</code> one." },
        { t: 'bug', q: "This immutable <code>Time</code> class does not compile. Tap the line with the bug.",
          qAr: "صنف الوقت غير القابل للتغيير لا يُترجم. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Time start = new Time(9, 30);
                    Time end = start.plusMinutes(20);
                    System.out.println(start.getMinute() + " " + end.getMinute());
                }
            }
            class Time {
                private final int hour, minute;
                Time(int hour, int minute) { this.hour = hour; this.minute = minute; }
                int getMinute() { return minute; }
                Time plusMinutes(int m) { minute = minute + m; return this; }
            }
          `, bug: 12,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Time start = new Time(9, 30);
                    Time end = start.plusMinutes(20);
                    System.out.println(start.getMinute() + " " + end.getMinute());
                }
            }
            class Time {
                private final int hour, minute;
                Time(int hour, int minute) { this.hour = hour; this.minute = minute; }
                int getMinute() { return minute; }
                Time plusMinutes(int m) { int t = hour * 60 + minute + m; return new Time(t / 60, t % 60); }
            }
          `,
          hint: "Can a method assign a <code>final</code> field? What should an immutable class do instead?",
          explain: "Line 12 tries to change the final field <code>minute</code> (<i>cannot assign a value to final variable minute</i>). An immutable class must build and return a new object; then <code>start</code> stays 9:30 and the program prints <code>30 50</code>.",
          explainAr: "لا يجوز تغيير حقل final؛ أعِد{{g:|ي}} كائنًا جديدًا." },
        { t: 'code', q: "Write an immutable class <code>Price</code> with one <code>private final int riyals</code> field, a constructor, a getter <code>getRiyals()</code>, a method <code>Price withDiscount(int percent)</code> that returns a NEW Price of <code>riyals - riyals * percent / 100</code>, and <code>toString()</code> returning <code>RIYALS SAR</code>. No setters. In <code>main</code> read a price and a percent (no prompts), and print <code>Before: </code> with the original and <code>After: </code> with the discounted price.",
          qAr: "صنف سعر غير قابل للتغيير: الخصم يعيد كائنًا جديدًا.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read price and percent, print before and after
                }
            }

            class Price {
                // private final field, constructor, getter, withDiscount, toString
            }
          `,
          tests: [
            { stdin: '200 25', expected: J`
              Before: 200 SAR
              After: 150 SAR
            ` },
            { stdin: '80 10', expected: J`
              Before: 80 SAR
              After: 72 SAR
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Price original = new Price(sc.nextInt());
                    Price sale = original.withDiscount(sc.nextInt());
                    System.out.println("Before: " + original);
                    System.out.println("After: " + sale);
                }
            }

            class Price {
                private final int riyals;

                public Price(int riyals) {
                    this.riyals = riyals;
                }

                public int getRiyals() { return riyals; }

                public Price withDiscount(int percent) {
                    return new Price(riyals - riyals * percent / 100);
                }

                @Override
                public String toString() {
                    return riyals + " SAR";
                }
            }
          `,
          hint: "<code>withDiscount</code> must not assign <code>riyals</code>. Write <code>return new Price(...);</code>.",
          explain: "The original price object never changes, so it can still be printed as <code>Before</code>. The discount is a new object, kept in its own variable." }
      ]
    }

  ],

  quiz: [
    { t: 'mcq', q: "Which of the following is the best description of an object?",
      options: [
        "A file that contains Java code",
        "An instance of a class, with its own field values",
        "A method that returns a value",
        "Another name for a variable of type int"
      ], answer: 1,
      explain: "An object is a concrete instance created from a class; each object stores its own values for the instance fields." },
    { t: 'output', q: "What does this program print? Draw the arrows first.", code: J`
      public class Main {
          public static void main(String[] args) {
              Cup a = new Cup();
              Cup b = new Cup();
              Cup c = a;
              a.size = 200;
              b.size = 300;
              c.size = c.size + 50;
              System.out.println(a.size + " " + b.size + " " + c.size);
          }
      }

      class Cup {
          int size;
      }
    `, answer: '250 300 250',
      explain: "Two cups are built. <code>c = a</code> makes c an alias of the first cup, so <code>c.size + 50</code> changes that cup to 250, seen through both a and c. b is a different cup with 300." },
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
    { t: 'bug', q: "The setter should store 3.7, but the program prints <code>0.0</code>. It compiles without errors. Tap the line with the bug.",
      qAr: "دالة التعيين لا تحفظ القيمة. أين الخطأ؟",
      code: J`
        public class Main {
            public static void main(String[] args) {
                Student s = new Student();
                s.setGpa(3.7);
                System.out.println(s.getGpa());
            }
        }
        class Student {
            private double gpa;
            public void setGpa(double gpa) {
                if (gpa >= 0 && gpa <= 4) gpa = gpa;
            }
            public double getGpa() { return gpa; }
        }
      `, bug: 11,
      fix: J`
        public class Main {
            public static void main(String[] args) {
                Student s = new Student();
                s.setGpa(3.7);
                System.out.println(s.getGpa());
            }
        }
        class Student {
            private double gpa;
            public void setGpa(double gpa) {
                if (gpa >= 0 && gpa <= 4) this.gpa = gpa;
            }
            public double getGpa() { return gpa; }
        }
      `,
      explain: "The parameter <code>gpa</code> shadows the field. On line 11, <code>gpa = gpa</code> copies the parameter onto itself, and the field keeps its default 0.0. <code>this.gpa = gpa</code> stores the value in the object." },
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
    { t: 'bug', q: "Both courses have the code CS102, so the program should print <code>true</code>. It prints <code>false</code>. Tap the line with the bug.",
      qAr: "المقارنة داخل equals خاطئة. أين الخطأ؟",
      code: J`
        public class Main {
            public static void main(String[] args) {
                String part = "CS";
                Course a = new Course(part + "102");
                Course b = new Course("CS102");
                System.out.println(a.equals(b));
            }
        }
        class Course {
            private String code;
            Course(String code) { this.code = code; }
            @Override
            public boolean equals(Object obj) {
                if (obj == null || getClass() != obj.getClass()) return false;
                Course other = (Course) obj;
                return code == other.code;
            }
        }
      `, bug: 16,
      fix: J`
        public class Main {
            public static void main(String[] args) {
                String part = "CS";
                Course a = new Course(part + "102");
                Course b = new Course("CS102");
                System.out.println(a.equals(b));
            }
        }
        class Course {
            private String code;
            Course(String code) { this.code = code; }
            @Override
            public boolean equals(Object obj) {
                if (obj == null || getClass() != obj.getClass()) return false;
                Course other = (Course) obj;
                return code.equals(other.code);
            }
        }
      `,
      explain: "A String is an object. <code>part + \"102\"</code> builds a new String box, so <code>code == other.code</code> compares two different boxes and gives false. Text must be compared with <code>code.equals(other.code)</code>." },
    { t: 'mcq', q: "Story: &quot;Each parking ticket records a plate and an entry hour. The system counts how many tickets were made.&quot; In the UML box, how should the counter be written?",
      options: [
        "<code>+ count(): int</code>",
        "<code>- count: int</code> <u>(underlined)</u>",
        "<code>- count: int</code> (not underlined)",
        "<code>+ plate: String</code> <u>(underlined)</u>"
      ], answer: 1,
      explain: "The counter is a fact the class keeps (a field), it should be hidden (<code>-</code>), and it is shared by all tickets, so it is static (underlined)." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              MetroCard card = new MetroCard(10);
              int trips = 0;
              travel(card, trips);
              System.out.println(card.balance + " " + trips);
          }

          static void travel(MetroCard c, int t) {
              c.balance = c.balance - 4;
              t = t + 1;
              c = new MetroCard(100);
          }
      }

      class MetroCard {
          double balance;

          MetroCard(double balance) {
              this.balance = balance;
          }
      }
    `, answer: '6.0 0',
      explain: "<code>c</code> is a copy of the arrow, so <code>c.balance - 4</code> changes main's card to 6.0. <code>t</code> is a copy of the number, so main's <code>trips</code> stays 0. Pointing <code>c</code> at a new card does not move main's <code>card</code>." },
    { t: 'mcq', q: "What happens when this code runs?", code: J`
      String city = null;
      System.out.println(city);
      System.out.println(city.length());
    `, options: [
        "It prints <code>null</code> twice",
        "It prints <code>null</code>, then crashes with a NullPointerException",
        "It does not compile",
        "It prints <code>null</code> and then <code>0</code>"
      ], answer: 1,
      explain: "Printing a null value just shows the word <code>null</code>. The dot in <code>city.length()</code> needs an object, so the program crashes with a NullPointerException on that line." },
    { t: 'bug', q: "The program should greet <code>Welcome HUDA</code>, but it prints <code>Welcome huda</code>. Tap the line with the bug.",
      qAr: "الاسم لم يتحول إلى أحرف كبيرة. أين الخطأ؟",
      code: J`
        public class Main {
            public static void main(String[] args) {
                String name = "huda";
                name.toUpperCase();
                System.out.println("Welcome " + name);
            }
        }
      `, bug: 4,
      fix: J`
        public class Main {
            public static void main(String[] args) {
                String name = "huda";
                name = name.toUpperCase();
                System.out.println("Welcome " + name);
            }
        }
      `,
      explain: "String is immutable: <code>toUpperCase()</code> never changes <code>name</code>; it returns a new String. Line 4 throws that new String away. Keep it with <code>name = name.toUpperCase();</code>." },
    { t: 'mcq', q: "Which change makes this class <b>immutable</b>?", code: J`
      class Receipt {
          private double total;
          public Receipt(double total) { this.total = total; }
          public double getTotal() { return total; }
          public void setTotal(double total) { this.total = total; }
      }
    `, options: [
        "Make the field public",
        "Make the field <code>final</code> and remove <code>setTotal</code>",
        "Add a copy constructor",
        "Make <code>getTotal</code> static"
      ], answer: 1,
      explain: "An immutable class has private final fields set once in the constructor and no method that changes them. Removing the setter and adding <code>final</code> does exactly that." }
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
    { code: J`abstract class Shape { public abstract double area(); }`, note: 'Cannot be instantiated; subclasses implement area()' },
    { code: J`
      Student b = a;              // two arrows, ONE object (alias)
      Student c = new Student(a); // copy constructor: a second object
    `, note: 'b = a copies the reference; only new builds an object' },
    { code: J`
      public Student(String name, int mark) {
          this.name = name;
          setMark(mark);   // the setter's rule runs at birth too
      }
    `, note: 'Let the constructor call the setter so bad values are refused' },
    { code: J`public static final int MAX_STUDENTS = 40;`, note: 'Named constant instead of a magic number' },
    { code: J`
      static void topUp(MetroCard c, double amount) {
          c.balance += amount;        // changes the caller's object
          c = new MetroCard(0);       // does NOT change the caller's variable
      }
    `, note: 'Java passes a copy of the arrow: change the object, not the caller\'s arrow' },
    { code: J`Rectangle big = small.scaled(2);`, note: 'Store the object a method returns, or it is lost' },
    { code: J`if (s != null && s.getGpa() >= 3.5) { ... }`, note: 'Check for null first; && stops early, so the dot never runs on null' },
    { code: J`
      class Time {
          private final int hour, minute;   // set once, never changed
          public Time plusMinutes(int m) {
              int t = hour * 60 + minute + m;
              return new Time(t / 60, t % 60);   // new object, no setter
          }
      }
    `, note: 'Immutable class: private final fields, no setters, return new objects' },
    { code: J`name = name.toUpperCase();`, note: 'String is immutable: keep the returned String' }
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
    { term: 'UML class diagram', ar: 'مخطط الأصناف UML', def: 'A standard drawing of a class as a box listing its name, attributes, and operations.' },
    { term: 'Parameter', ar: 'معامل', def: 'A variable in a method or constructor header that receives a value when it is called.' },
    { term: 'Alias', ar: 'اسم بديل (مرجعان لكائن واحد)', def: 'Two or more variables that refer to the same object; a change through one is seen through the other.' },
    { term: 'Stack and heap', ar: 'المكدس والكومة', def: 'The stack holds the variables of running methods; the heap holds the objects built with new.' },
    { term: 'Garbage collector', ar: 'جامع المهملات', def: 'The part of Java that automatically removes objects that no variable refers to any more.' },
    { term: 'Shadowing', ar: 'الإخفاء (التظليل)', def: 'When a parameter has the same name as a field, the plain name means the parameter; use this.name for the field.' },
    { term: 'Magic number', ar: 'رقم سحري', def: 'A number written directly in code without a name; replace it with a named constant.' },
    { term: 'Pass by value', ar: 'التمرير بالقيمة', def: 'Java always passes a copy: a copy of the value for numbers, a copy of the reference for objects.' },
    { term: 'NullPointerException', ar: 'خطأ المرجع الفارغ', def: 'The run-time error that happens when code uses a dot on a reference that is null.' },
    { term: 'Short-circuit evaluation', ar: 'التقييم المختصر', def: 'With &&, Java skips the right side when the left side is false; used to check for null before use.' },
    { term: 'Immutable object', ar: 'كائن غير قابل للتغيير', def: 'An object whose fields can never change after it is built, such as a String; changes return new objects.' },
    { term: 'final field', ar: 'حقل نهائي (final)', def: 'A field that is assigned exactly once, in the constructor or at its declaration.' }
  ]
});
