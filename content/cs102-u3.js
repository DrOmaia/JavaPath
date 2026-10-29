JP.unit({
  course: 'cs102',
  n: 3,
  title: 'Inheritance',
  titleAr: 'الوراثة',
  intro: "Inheritance lets you build a new class on top of an existing one. A Manager is an Employee, a Car is a Vehicle: the new class reuses what the old class already has and adds only what is special. In this unit you go slowly, step by step: the is-a idea, extends, the Object class, super, constructor order, overriding, protected, superclass references, instanceof and getClass().",
  introAr: "الوراثة تسمح ببناء صنف جديد فوق صنف موجود: المدير موظف، والسيارة مركبة. الصنف الفرعي يعيد استخدام ما في الصنف الأب ويضيف ما يميزه. سنتقدم ببطء وخطوة خطوة.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'The is-a idea and extends',
      titleAr: 'فكرة "هو" و extends',
      minutes: 30,
      body: [
        { type: 'h', en: 'Families of things' },
        { type: 'p', en: "Imagine you write classes for <code>Student</code> and <code>Teacher</code>. Both have a name and an age. Both can introduce themselves. If you copy the same code into both classes, you must fix every mistake twice. <b>Inheritance</b> solves this: you write the shared part <b>once</b> and let other classes reuse it.",
          ar: "بدل نسخ الكود نفسه في أكثر من صنف، نكتبه مرة واحدة ونجعل الأصناف الأخرى تعيد استخدامه. هذه هي الوراثة." },
        { type: 'analogy', title: 'A family of vehicles', en: "A car, a bus and a truck are all <b>vehicles</b>. Every vehicle has wheels and an engine, and can move. A bus also has passenger seats. A truck also has a cargo area. The shared things belong to \"vehicle\". The special things belong to each one.",
          ar: "السيارة والحافلة والشاحنة كلها مركبات. ما يشترك فيه الجميع يوضع في المركبة، وما يخص كل واحدة يوضع فيها وحدها." },
        { type: 'p', en: "We draw a family as a <b>tree</b>. The general class is at the top. The more special classes are below it, joined by lines." },
        { type: 'code', code: J`
          Vehicle              <- general: wheels, move()
            ├── Car            <- special: doors
            ├── Bus            <- special: passenger seats
            └── Truck          <- special: cargo tons
        ` },
        { type: 'p', en: "The top class is the <b>superclass</b> (also called parent or base class). The classes below it are <b>subclasses</b> (also called child or derived classes). Here <code>Vehicle</code> is the superclass of <code>Car</code>, <code>Bus</code> and <code>Truck</code>." },
        { type: 'h', en: 'The is-a test' },
        { type: 'p', en: "How do you know that two classes belong in one family? Say the sentence <i>\"A ___ is a ___\"</i>. If it sounds right, inheritance fits. If it sounds wrong, it does not.",
          ar: "اختبار \"هو\": قل \"س هو ص\". إذا كانت الجملة صحيحة فالوراثة مناسبة." },
        { type: 'list', items: [
          "A Car <b>is a</b> Vehicle. True, so use inheritance.",
          "A Manager <b>is an</b> Employee. True, so use inheritance.",
          "A Car <b>is an</b> Engine. False! A Car <b>has an</b> Engine. That is a field inside Car, not inheritance."
        ] },
        { type: 'check', q: "Which pair passes the is-a test?", options: [
            "Library and Book (a Library is a Book)",
            "Dog and Animal (a Dog is an Animal)",
            "Student and GPA (a Student is a GPA)"
          ], answer: 1, explain: "A dog really is an animal. A library only <i>has</i> books, and a student only <i>has</i> a GPA.",
          ar: "الكلب حيوان، لكن المكتبة ليست كتابًا." },
        { type: 'h', en: 'Writing extends' },
        { type: 'p', en: "In Java you write the word <code>extends</code> to say \"is a\". The child class goes on the left, the parent on the right. Here is a tiny example with one new idea: the child gets the parent's method for free." },
        { type: 'code', code: J`
          class Animal {
              void eat() {
                  System.out.println("Eating...");
              }
          }

          class Cat extends Animal {
              void meow() {
                  System.out.println("Meow!");
              }
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['class Animal {', 'We create the parent class. It has no <code>extends</code>, so it is a normal class.'],
            ['void eat() { ... }', 'A method that every animal can do.'],
            ['class Cat extends Animal {', 'Read: <b>Cat is an Animal</b>. Cat now has everything Animal has.'],
            ['void meow() { ... }', 'Something only a Cat can do. We did <b>not</b> write <code>eat()</code> again.']
          ], ar: "القط (Cat) يمتلك eat() دون أن نكتبها فيه، لأنه يرث من Animal." },
        { type: 'p', en: "Now we use the class. Notice that the <code>Cat</code> object can call <code>eat()</code>, a method that is written only in <code>Animal</code>. This is called <b>inheriting</b>: the child receives the parent's members." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Cat c = new Cat();
                  c.eat();      // inherited from Animal
                  c.meow();     // Cat's own method
              }
          }

          class Animal {
              void eat() {
                  System.out.println("Eating...");
              }
          }

          class Cat extends Animal {
              void meow() {
                  System.out.println("Meow!");
              }
          }
        `, out: J`
          Eating...
          Meow!
        ` },
        { type: 'analogy', title: 'Family traits', en: "A child gets the family name and some traits from the parents, and then has their own personality too. A subclass gets the parent's fields and methods, and then adds its own.",
          ar: "الابن يرث صفات من والديه ثم تكون له صفاته الخاصة. كذلك الصنف الفرعي." },
        { type: 'check', q: "In <code>class Cat extends Animal</code>, which class is the superclass?", options: ["Cat", "Animal", "Both of them"], answer: 1,
          explain: "The class after <code>extends</code> is the parent (superclass). The class before it is the child.", hint: "The parent is written on the right." },
        { type: 'steps', title: 'Worked example: Employee and Manager', problem: "A company has employees with a name and salary who can work. A manager is an employee who also leads a team and holds meetings. Write the classes without repeating code.",
          steps: [
            { en: "<b>Step 1.</b> Write the general class first: <code>Employee</code> with <code>name</code>, <code>salary</code> and a <code>work()</code> method.", code: J`
              class Employee {
                  String name;
                  double salary;

                  void work() {
                      System.out.println(name + " is working");
                  }
              }
            ` },
            { en: "<b>Step 2.</b> Make <code>Manager</code> extend <code>Employee</code>. Add only the new things: a <code>teamSize</code> field and a <code>holdMeeting()</code> method.", code: J`
              class Manager extends Employee {
                  int teamSize;

                  void holdMeeting() {
                      System.out.println(name + " holds a meeting with " + teamSize + " people");
                  }
              }
            ` },
            { en: "<b>Step 3.</b> Notice <code>holdMeeting()</code> uses <code>name</code>. We never declared <code>name</code> in <code>Manager</code>; it came from <code>Employee</code>." },
            { en: "<b>Step 4.</b> In <code>main</code>, create a <code>Manager</code> and use both inherited and own members, then run the complete program." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Manager m = new Manager();
                    m.name = "Khalid";      // inherited field
                    m.salary = 15000;       // inherited field
                    m.teamSize = 6;         // Manager's own field
                    m.work();               // inherited method
                    m.holdMeeting();        // Manager's own method
                    System.out.println(m.name + " leads " + m.teamSize + " people");
                }
            }

            class Employee {
                String name;
                double salary;

                void work() {
                    System.out.println(name + " is working");
                }
            }

            class Manager extends Employee {
                int teamSize;

                void holdMeeting() {
                    System.out.println(name + " holds a meeting with " + teamSize + " people");
                }
            }
          `, out: J`
            Khalid is working
            Khalid holds a meeting with 6 people
            Khalid leads 6 people
          `, ar: "المدير يستخدم name و work() الموروثتين من الموظف، ويضيف teamSize و holdMeeting()." },
        { type: 'note', kind: 'tip', en: "A subclass is usually <b>bigger</b> than its superclass: it has everything the parent has, plus more. A class can be both a child and a parent: <code>Employee</code> can extend <code>Person</code> and still be the parent of <code>Manager</code>.",
          ar: "الصنف الفرعي عادةً أكبر من الأب. ويمكن لصنف أن يكون ابنًا لصنف وأبًا لصنف آخر." },
        { type: 'note', kind: 'exam', en: "Exam trap: a <code>private</code> member of the parent is inside the child object, but child code cannot write its name directly. (You will see how to reach it in Lesson 3.) Also, constructors are <b>not</b> inherited." }
      ],
      mistakes: [
        { title: 'Using inheritance for "has-a"', en: "A car has an engine, but it is not an engine. Make an <code>Engine</code> field instead.", code: J`
          class Car extends Engine { }      // wrong: a Car is not an Engine
        `, ar: "السيارة تملك محركًا ولا تعتبر محركًا، فلا نستخدم extends هنا." },
        { title: 'Writing the classes in the wrong order', en: "The child is on the left of <code>extends</code>. This line says the opposite of what you want.", code: J`
          class Animal extends Cat { }      // wrong: says Animal is a Cat
        ` },
        { title: 'Using the word inherits or implements', en: "Java has no keyword <code>inherits</code>. The word is <code>extends</code> (<code>implements</code> is for interfaces, a later topic).", code: J`
          class Cat inherits Animal { }     // wrong keyword
        ` },
        { title: 'Copying the parent field again', en: "Do not declare <code>name</code> again in the child. It already has it. Declaring it again creates a second, confusing variable.", code: J`
          class Manager extends Employee {
              String name;                  // wrong: Manager already has name
          }
        ` }
      ],
      remember: [
        "Inheritance means: write shared code once in a <b>superclass</b>; subclasses reuse it.",
        "Use the is-a test: \"A Car is a Vehicle\". If it sounds wrong, do not use <code>extends</code>.",
        "Write <code>class Child extends Parent</code>. Child on the left, Parent on the right.",
        "A subclass gets the parent's fields and methods, and can add its own.",
        "Constructors are not inherited.",
        "Draw the family as a tree: general class at the top."
      ],
      rememberAr: "نكتب الكود المشترك مرة واحدة في الصنف الأب. نختبر بجملة \"هو\". نكتب class Child extends Parent. الابن يأخذ حقول ودوال الأب ويضيف الخاص به. المُنشئات لا تُورث.",
      practice: [
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Cat c = new Cat();
                  c.eat();
                  c.meow();
              }
          }

          class Animal {
              void eat() { System.out.println("Eating..."); }
          }

          class Cat extends Animal {
              void meow() { System.out.println("Meow!"); }
          }
        `, answer: J`
          Eating...
          Meow!
        `, explain: "<code>eat()</code> comes from <code>Animal</code> and runs first. Then <code>meow()</code> is Cat's own method." },
        { t: 'mcq', q: "Which sentence passes the is-a test?",
          options: ["A Teacher is a Whiteboard", "A Teacher is a Person", "A Bus is a Seat"], answer: 1,
          explain: "A teacher is a person. A bus <i>has</i> seats, so Seat would be a field, not a parent." },
        { t: 'mcq', q: "Which declaration correctly makes <code>Truck</code> a subclass of <code>Vehicle</code>?",
          options: [
            '<code>class Truck inherits Vehicle { }</code>',
            '<code>class Truck extends Vehicle { }</code>',
            '<code>class Truck implements Vehicle { }</code>',
            '<code>class Vehicle extends Truck { }</code>'
          ], answer: 1,
          explain: "The keyword is <code>extends</code>, and the subclass is written on the left: <code>class Sub extends Super</code>." },
        { t: 'fill', q: "Fill in the blanks so that <code>Dog</code> is a subclass of <code>Animal</code>.", code: J`
          class Animal { }

          class Dog ___ ___ { }
        `, answers: ['extends', 'Animal'],
          explain: "Read it: <code>Dog extends Animal</code> means Dog is an Animal." },
        { t: 'order', q: "Arrange the lines to define <code>Student</code> as a subclass of <code>Person</code> that adds a <code>major</code> field and a method returning it.",
          lines: [
            "class Student extends Person {",
            "    private String major;",
            "    public String getMajor() {",
            "        return major;",
            "    }",
            "}"
          ],
          explain: "The header names both classes with <code>extends</code>; the new field and method go inside the subclass body." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  SavingsAccount s = new SavingsAccount();
                  s.deposit(1000);
                  s.addInterest();
                  System.out.println(s.balance);
              }
          }

          class BankAccount {
              double balance;

              void deposit(double amount) {
                  balance += amount;
              }
          }

          class SavingsAccount extends BankAccount {
              double rate = 0.25;

              void addInterest() {
                  deposit(balance * rate);
              }
          }
        `, answer: J`
          1250.0
        `, explain: "<code>deposit</code> and <code>balance</code> are inherited from <code>BankAccount</code>. After depositing 1000, interest 1000 * 0.25 = 250 is deposited, so the balance is 1250.0." },
        { t: 'code', q: "Class <code>Person</code> is written for you. Write class <code>Student</code> that extends <code>Person</code> and has a <code>String major</code> field and a method <code>showMajor()</code> that prints <code>NAME studies MAJOR</code>. <code>main</code> reads a name and a major (one word each). No prompts.",
          qAr: "اكتب الصنف Student الذي يرث من Person ويضيف الحقل major ودالة showMajor.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String name = sc.next();
                    String major = sc.next();
                    Student s = new Student();
                    s.name = name;
                    s.major = major;
                    s.greet();
                    s.showMajor();
                }
            }

            class Person {
                String name;

                void greet() {
                    System.out.println("Hello, " + name);
                }
            }

            // write class Student here
          `,
          tests: [
            { stdin: J`
              Sara Biology
            `, expected: J`
              Hello, Sara
              Sara studies Biology
            ` },
            { stdin: J`
              Omar Physics
            `, expected: J`
              Hello, Omar
              Omar studies Physics
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String name = sc.next();
                    String major = sc.next();
                    Student s = new Student();
                    s.name = name;
                    s.major = major;
                    s.greet();
                    s.showMajor();
                }
            }

            class Person {
                String name;

                void greet() {
                    System.out.println("Hello, " + name);
                }
            }

            class Student extends Person {
                String major;

                void showMajor() {
                    System.out.println(name + " studies " + major);
                }
            }
          `,
          hint: "Start with <code>class Student extends Person {</code>. The field <code>name</code> is already inherited.",
          explain: "<code>Student</code> gets <code>name</code> and <code>greet()</code> from <code>Person</code> and adds only <code>major</code> and <code>showMajor()</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'The Object class and single inheritance',
      titleAr: 'الصنف Object والوراثة الأحادية',
      minutes: 25,
      body: [
        { type: 'h', en: 'Every class has a parent' },
        { type: 'p', en: "So far we wrote <code>extends</code> ourselves. But what about a class like <code>Pet</code> that has no <code>extends</code> at all? Java quietly adds one for you: <code>extends Object</code>. <code>Object</code> is a built-in class that sits at the very top of every family tree.",
          ar: "إذا لم تكتب extends فإن جافا تضيف extends Object تلقائيًا. الصنف Object هو أصل كل الأصناف." },
        { type: 'analogy', title: 'The first grandparent', en: "Follow any family tree upward and you reach the same first ancestor. In Java, follow any class upward (parent, grandparent, ...) and you always reach <code>Object</code>.",
          ar: "إذا صعدت في شجرة أي صنف ستصل دائمًا إلى Object." },
        { type: 'code', code: J`
          Object
            ├── Pet
            ├── String
            └── Animal
                  ├── Cat
                  └── Dog
        ` },
        { type: 'p', en: "Because of this, every object already knows a few methods that <code>Object</code> provides. You get them for free, even in a class that is empty." },
        { type: 'table', head: ['Method', 'What it gives you'], rows: [
            ['<code>toString()</code>', 'Text that describes the object (you usually replace it with your own version)'],
            ['<code>equals(Object o)</code>', 'Are two objects the same one? (you usually replace it too)'],
            ['<code>getClass()</code>', 'The exact class of the object']
          ] },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Pet p = new Pet();
                  Pet q = p;                 // q points to the same object
                  Pet r = new Pet();         // a different object
                  System.out.println(p.equals(q));
                  System.out.println(p.equals(r));
                  System.out.println(p.getClass().getName());
              }
          }

          class Pet { }          // empty class, but it still has equals() and getClass()
        `, out: J`
          true
          false
          Pet
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['class Pet { }', 'No fields and no methods written. Java adds <code>extends Object</code> silently.'],
            ['p.equals(q)', '<code>q</code> points to the same object as <code>p</code>, so the answer is true.'],
            ['p.equals(r)', '<code>r</code> is a different object. The default <code>equals</code> only checks "same object", so false.'],
            ['p.getClass().getName()', 'Asks the object: "which class are you exactly?" Answer: <code>Pet</code>.']
          ], ar: "حتى الصنف الفارغ Pet يملك equals و getClass لأنه يرث من Object." },
        { type: 'check', q: "<code>class Pet { }</code> has no <code>extends</code>. What is its superclass?", options: ["Nothing", "Object", "Animal"], answer: 1,
          explain: "Java adds <code>extends Object</code> automatically when you write no <code>extends</code>." },
        { type: 'h', en: 'Replacing toString()' },
        { type: 'p', en: "If you print an object without writing <code>toString()</code>, Java shows a strange code like <code>Book@1b6d3586</code>. That is not useful. You can write your own <code>toString()</code> in your class to replace the one from <code>Object</code>. You already met this in Unit 2; here is a small reminder." },
        { type: 'code', code: J`
          class Book {
              String title;

              @Override
              public String toString() {
                  return "Book: " + title;
              }
          }
        ` },
        { type: 'p', en: "When <code>println(book)</code> runs, Java calls <code>toString()</code> for you. Your text appears." },
        { type: 'h', en: 'Why only one parent?' },
        { type: 'p', en: "A Java class can extend <b>only one</b> class. This is called <b>single inheritance</b>. The reason is a puzzle: imagine <code>Student</code> has <code>pay()</code> (pay the fees) and <code>Employee</code> has <code>pay()</code> (receive salary). If <code>TeachingAssistant</code> extended both, which <code>pay()</code> would it get? Java avoids the confusion by allowing only one parent class.",
          ar: "الصنف في جافا يرث من صنف واحد فقط لتجنب الحيرة عندما يحتوي الأبوان على دالة بنفس الاسم." },
        { type: 'analogy', title: 'One manager at a time', en: "At work you report to one direct manager. If two managers gave you opposite orders at the same moment, you would not know what to do. Java chooses one parent class to avoid this.",
          ar: "في العمل لديك مدير مباشر واحد حتى لا تتعارض الأوامر." },
        { type: 'code', code: J`
          class TeachingAssistant extends Student, Employee { }   // ERROR: only one class allowed
        ` },
        { type: 'p', en: "Do not worry: Java has another tool called <b>interfaces</b> for sharing behaviour from several places. A class may extend one class and implement many interfaces. You will study interfaces in the next unit." },
        { type: 'check', q: "Which statement is true about Java?", options: [
            "A class may extend two classes",
            "A class may extend only one class",
            "A class may extend no class at all, not even Object"
          ], answer: 1, explain: "Single inheritance: exactly one superclass. If you do not write one, it is <code>Object</code>." },
        { type: 'steps', title: 'Worked example: printing a Book nicely', problem: "You want <code>System.out.println(book)</code> to show <code>Java Basics - 85.5 SAR</code> instead of a strange code.",
          steps: [
            { en: "<b>Step 1.</b> Write the class with two fields and a constructor (this is Unit 2 material).", code: J`
              class Book {
                  private String title;
                  private double price;

                  Book(String title, double price) {
                      this.title = title;
                      this.price = price;
                  }
              }
            ` },
            { en: "<b>Step 2.</b> Add <code>toString()</code>. It must be <code>public</code> and return a <code>String</code>, just like the one in <code>Object</code>.", code: J`
              @Override
              public String toString() {
                  return title + " - " + price + " SAR";
              }
            ` },
            { en: "<b>Step 3.</b> <code>@Override</code> tells Java: \"I am replacing a method from my parent (Object).\" It helps the compiler catch spelling mistakes." },
            { en: "<b>Step 4.</b> In <code>main</code> print the object. Java calls your <code>toString()</code> automatically." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Book b = new Book("Java Basics", 85.5);
                    System.out.println(b);
                }
            }

            class Book {
                private String title;
                private double price;

                Book(String title, double price) {
                    this.title = title;
                    this.price = price;
                }

                @Override
                public String toString() {
                    return title + " - " + price + " SAR";
                }
            }
          `, out: J`
            Java Basics - 85.5 SAR
          `, ar: "نستبدل toString الموروثة من Object بنسختنا، فتظهر الطباعة بالشكل الذي نريده." },
        { type: 'note', kind: 'tip', en: "Every class you have ever written already used inheritance without you knowing: it inherited from <code>Object</code>.",
          ar: "كل الأصناف التي كتبتها سابقًا ترث من Object دون أن تلاحظ." }
      ],
      mistakes: [
        { title: 'Extending two classes', en: "Only one class is allowed after <code>extends</code>. Commas do not help.", code: J`
          class Duck extends Animal, Bird { }     // wrong
        ` },
        { title: 'Thinking an empty class has no methods', en: "An empty class still has <code>toString()</code>, <code>equals()</code> and <code>getClass()</code> from <code>Object</code>." },
        { title: 'Lowercase mistake in toString', en: "Java is case sensitive. <code>tostring()</code> is a new, different method, so <code>println</code> never uses it. <code>@Override</code> would give you an error and save you.", code: J`
          @Override
          public String tostring() { return title; }     // error: does not override anything
        ` },
        { title: 'Forgetting public on toString', en: "The version in <code>Object</code> is <code>public</code>. Yours must be public too, or the code will not compile.", code: J`
          String toString() { return title; }            // wrong: needs public
        ` }
      ],
      remember: [
        "Every class extends <code>Object</code>, directly or through other parents.",
        "If you write no <code>extends</code>, Java adds <code>extends Object</code> for you.",
        "<code>Object</code> gives every object <code>toString()</code>, <code>equals()</code> and <code>getClass()</code>.",
        "A class can extend <b>only one</b> class (single inheritance).",
        "Write <code>@Override</code> when you replace a method such as <code>toString()</code>."
      ],
      rememberAr: "كل صنف يرث من Object. وإن لم تكتب extends تضيفها جافا. الصنف يرث من صنف واحد فقط. اكتب @Override عند استبدال toString.",
      practice: [
        { t: 'mcq', q: "Which class is at the top of every Java class family tree?",
          options: ["Main", "Object", "Animal", "System"], answer: 1,
          explain: "<code>java.lang.Object</code> is the root of all classes." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Pet a = new Pet();
                  Pet b = a;
                  Pet c = new Pet();
                  System.out.println(a.equals(b));
                  System.out.println(a.equals(c));
              }
          }

          class Pet { }
        `, answer: J`
          true
          false
        `, explain: "<code>b</code> is the same object as <code>a</code>. <code>c</code> is a new object, so the default <code>equals</code> says false." },
        { t: 'mcq', q: "Which class header is legal in Java?",
          options: [
            '<code>class Duck extends Animal, Bird { }</code>',
            '<code>class Duck extends Animal { }</code>',
            '<code>class Duck extends Animal extends Bird { }</code>'
          ], answer: 1,
          explain: "A class may extend exactly one class.",
          explainAr: "صنف واحد فقط بعد extends." },
        { t: 'fill', q: "Fill in the blanks.", code: J`
          // A class written without extends automatically inherits from ___
          class Animal { }

          class Dog ___ Animal { }
        `, answers: ['Object', 'extends'],
          explain: "<code>java.lang.Object</code> is the root of every hierarchy. <code>Dog</code> becomes a subclass of <code>Animal</code> with <code>extends</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Book b = new Book("Algebra", 60.0);
                  System.out.println(b);
              }
          }

          class Book {
              String title;
              double price;

              Book(String title, double price) {
                  this.title = title;
                  this.price = price;
              }

              @Override
              public String toString() {
                  return title + " costs " + price + " SAR";
              }
          }
        `, answer: J`
          Algebra costs 60.0 SAR
        `, explain: "<code>println(b)</code> calls our own <code>toString()</code>. The double 60.0 prints as <code>60.0</code>." },
        { t: 'mcq', q: "Why does Java not allow <code>class C extends A, B</code>?",
          options: [
            "Because classes A and B might be abstract",
            "To avoid confusion when both parents have different code for the same method",
            "Because a class can never have a parent",
            "Because it would make objects too large"
          ], answer: 1,
          explain: "With two parents, Java would not know which version to inherit. Single inheritance avoids the problem; interfaces cover the rest." },
        { t: 'code', q: "Write class <code>Course</code> with fields <code>name</code> (String) and <code>hours</code> (int), a constructor, and a <code>toString()</code> that returns <code>Course: NAME (H hours)</code>. <code>main</code> reads a name (one word) and the hours, creates the object and prints it with <code>println</code>. No prompts.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String name = sc.next();
                    int hours = sc.nextInt();
                    Course c = new Course(name, hours);
                    System.out.println(c);
                }
            }

            // write class Course here
          `,
          tests: [
            { stdin: J`
              Java 3
            `, expected: J`
              Course: Java (3 hours)
            ` },
            { stdin: J`
              Math 4
            `, expected: J`
              Course: Math (4 hours)
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String name = sc.next();
                    int hours = sc.nextInt();
                    Course c = new Course(name, hours);
                    System.out.println(c);
                }
            }

            class Course {
                private String name;
                private int hours;

                Course(String name, int hours) {
                    this.name = name;
                    this.hours = hours;
                }

                @Override
                public String toString() {
                    return "Course: " + name + " (" + hours + " hours)";
                }
            }
          `,
          hint: "The method header must be exactly <code>public String toString()</code>.",
          explain: "<code>println(c)</code> calls <code>c.toString()</code>, which replaces the version inherited from <code>Object</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'super and the order of constructors',
      titleAr: 'super وترتيب المُنشئات',
      minutes: 30,
      body: [
        { type: 'h', en: 'The parent part is built first' },
        { type: 'p', en: "When you create a <code>Manager</code>, the object is also an <code>Employee</code> and a <code>Person</code>. All these parts must be built. Java builds them <b>from the top down</b>: first the parent part, then the child part. A constructor (the special method that builds an object, from Unit 2) therefore starts by running its parent's constructor.",
          ar: "عند إنشاء كائن من صنف فرعي يُبنى جزء الأب أولًا ثم جزء الابن." },
        { type: 'analogy', title: 'Building a house', en: "You cannot build the second floor before the foundation. In the same way, the parent constructor must finish before the child constructor continues.",
          ar: "لا تبني الطابق الثاني قبل الأساس؛ كذلك مُنشئ الأب يعمل قبل مُنشئ الابن." },
        { type: 'p', en: "Java does this with the call <code>super(...)</code>. If you do not write it, Java inserts <code>super();</code> as the first line of your constructor automatically." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  new Student();
              }
          }

          class Person {
              Person() {
                  System.out.println("Person built");
              }
          }

          class Student extends Person {
              Student() {
                  System.out.println("Student built");
              }
          }
        `, out: J`
          Person built
          Student built
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['new Student();', 'We ask for a Student. Java starts the <code>Student</code> constructor.'],
            ['Student() {', 'Before its first printed line, Java secretly adds <code>super();</code> here.'],
            ['Person() { println("Person built") }', 'The parent constructor runs first and prints its line.'],
            ['println("Student built")', 'Only now the rest of the <code>Student</code> constructor runs.']
          ], ar: "قبل تنفيذ سطور مُنشئ Student يعمل مُنشئ Person أولًا، ولذلك نرى Person built قبل Student built." },
        { type: 'check', q: "In the program above, which line is printed first?", options: ["Student built", "Person built", "It depends"], answer: 1,
          explain: "The parent constructor always finishes first." },
        { type: 'h', en: 'Passing data up with super(...)' },
        { type: 'p', en: "Often the parent needs information to be built, for example a name or a year. The parent's fields are usually <code>private</code>, so the child cannot set them directly. The child sends the values <b>up</b> by writing <code>super(value1, value2)</code>. It must be the <b>first line</b> of the constructor.",
          ar: "نمرر القيم إلى مُنشئ الأب بالأمر super(...) ويجب أن يكون أول سطر في المُنشئ." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Car c = new Car("Toyota", 2022, 4);
                  System.out.println(c.getMake() + " " + c.getYear() + " " + c.getDoors());
              }
          }

          class Vehicle {
              private String make;
              private int year;

              Vehicle(String make, int year) {
                  this.make = make;
                  this.year = year;
              }

              String getMake() { return make; }
              int getYear() { return year; }
          }

          class Car extends Vehicle {
              private int doors;

              Car(String make, int year, int doors) {
                  super(make, year);      // Vehicle stores make and year
                  this.doors = doors;     // Car stores its own field
              }

              int getDoors() { return doors; }
          }
        `, out: J`
          Toyota 2022 4
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['Car(String make, int year, int doors) {', 'The Car constructor receives all three values.'],
            ['super(make, year);', 'Send <code>make</code> and <code>year</code> up to the <code>Vehicle</code> constructor. <b>First line!</b>'],
            ['this.doors = doors;', 'Car keeps the value that belongs to Car only.']
          ], ar: "Car يرسل make و year إلى Vehicle ويحتفظ لنفسه بـ doors." },
        { type: 'steps', title: 'Worked example: trace three levels', problem: "Person, Employee and Manager each print a line in their constructor. In which order do the lines appear when we write <code>new Manager(\"Rana\", 12000, 5)</code>?",
          steps: [
            { en: "<b>Step 1.</b> <code>main</code> calls the <code>Manager</code> constructor. Its first line is <code>super(name, salary)</code>, so Manager waits and calls <code>Employee</code>." },
            { en: "<b>Step 2.</b> The <code>Employee</code> constructor has no <code>super</code> written, so Java adds <code>super();</code>. Employee waits and calls <code>Person</code>." },
            { en: "<b>Step 3.</b> <code>Person</code> is the top. (Its own hidden parent is <code>Object</code>.) It runs its body and prints <b>1</b>." },
            { en: "<b>Step 4.</b> Now Employee continues: it sets name and salary and prints <b>2</b>." },
            { en: "<b>Step 5.</b> Finally Manager continues: it sets <code>teamSize</code> and prints <b>3</b>. The order is Person, Employee, Manager." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    new Manager("Rana", 12000, 5);
                }
            }

            class Person {
                Person() {
                    System.out.println("1. Person constructor");
                }
            }

            class Employee extends Person {
                String name;
                double salary;

                Employee(String name, double salary) {
                    // super();  is inserted here automatically
                    this.name = name;
                    this.salary = salary;
                    System.out.println("2. Employee constructor");
                }
            }

            class Manager extends Employee {
                int teamSize;

                Manager(String name, double salary, int teamSize) {
                    super(name, salary);            // must be the first statement
                    this.teamSize = teamSize;
                    System.out.println("3. Manager constructor");
                }
            }
          `, out: J`
            1. Person constructor
            2. Employee constructor
            3. Manager constructor
          `, ar: "الاستدعاء يصعد من الأسفل إلى الأعلى، لكن التنفيذ الفعلي للأجسام يبدأ من الأعلى إلى الأسفل." },
        { type: 'h', en: 'A classic compile error' },
        { type: 'p', en: "What if the parent has <b>only</b> a constructor with parameters? Then the automatic <code>super();</code> (with no values) finds nothing to call, and the child will not compile. The fix is to write <code>super(...)</code> yourself with real values." },
        { type: 'code', code: J`
          class Shape {
              Shape(String color) { }          // the only constructor
          }

          class Square extends Shape {
              Square() {
                  // Java inserts super(); -> ERROR: Shape() does not exist
              }
          }

          // Fix:  Square() { super("black"); }
        ` },
        { type: 'note', kind: 'exam', en: "The error is reported in the <b>child</b> class, but the cause is the missing no-argument constructor in the <b>parent</b>. A constructor can start with <code>this(...)</code> or <code>super(...)</code>, never both.",
          ar: "الخطأ يظهر في الصنف الفرعي رغم أن سببه في الصنف الأب." },
        { type: 'check', q: "<code>Shape</code> has only <code>Shape(String color)</code>. How must <code>Square</code>'s constructor begin?", options: [
            "With nothing; Java handles it",
            "With <code>super(\"black\");</code> (or another String)",
            "With <code>this.color = color;</code>"
          ], answer: 1, explain: "Java can only insert <code>super();</code>, and <code>Shape()</code> does not exist, so you must call the existing constructor yourself." }
      ],
      mistakes: [
        { title: 'super is not the first line', en: "<code>super(...)</code> must come first in the constructor.", code: J`
          Car(String make, int year) {
              this.doors = 4;
              super(make, year);       // error: must be first
          }
        ` },
        { title: 'Setting a private parent field directly', en: "The child cannot touch a <code>private</code> field of the parent. Send the value up with <code>super(...)</code>.", code: J`
          Car(String make, int year) {
              this.make = make;        // error: make is private in Vehicle
          }
        ` },
        { title: 'Forgetting that the parent has no empty constructor', en: "If the parent has only constructors with parameters, the child must call one with <code>super(...)</code>." },
        { title: 'Thinking the child prints first', en: "Parent bodies finish first. Trace from the top of the tree when predicting output." }
      ],
      remember: [
        "Every constructor starts by running a parent constructor.",
        "If you do not write <code>super(...)</code>, Java inserts <code>super();</code>.",
        "<code>super(values)</code> sends data up to the parent. It must be the <b>first line</b>.",
        "Constructor bodies finish in order: top parent first, child last.",
        "If the parent has no empty constructor, you must call <code>super(...)</code> with values."
      ],
      rememberAr: "كل مُنشئ يبدأ باستدعاء مُنشئ الأب. إن لم تكتب super(...) تضيف جافا super(). يجب أن يكون super أول سطر. الأجسام تنتهي من الأعلى إلى الأسفل.",
      practice: [
        { t: 'mcq', q: "A constructor does not begin with <code>this(...)</code> or <code>super(...)</code>. What does Java insert as its first statement?",
          options: ['Nothing', '<code>this();</code>', '<code>super();</code>', '<code>new Object();</code>'], answer: 2,
          explain: "Every constructor must first build the parent part, so Java inserts a call to the parent's no-argument constructor, <code>super();</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  new B();
              }
          }

          class A {
              A() { System.out.println("A"); }
          }

          class B extends A {
              B() { System.out.println("B"); }
          }
        `, answer: J`
          A
          B
        `, explain: "Creating <code>B</code> first runs the parent constructor <code>A()</code>, then the body of <code>B()</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Circle c = new Circle(3);
                  System.out.println(c.describe());
              }
          }

          class Shape {
              String name;

              Shape(String name) {
                  this.name = name;
                  System.out.println("Creating " + name);
              }
          }

          class Circle extends Shape {
              int radius;

              Circle(int radius) {
                  super("circle");
                  this.radius = radius;
                  System.out.println("Radius set to " + radius);
              }

              String describe() {
                  return name + " r=" + radius;
              }
          }
        `, answer: J`
          Creating circle
          Radius set to 3
          circle r=3
        `, explain: "<code>super(\"circle\")</code> runs the <code>Shape</code> constructor first, then the rest of the <code>Circle</code> constructor. Finally <code>describe()</code> uses the inherited <code>name</code>." },
        { t: 'mcq', q: "Why does this code fail to compile?", code: J`
          class Account {
              private double balance;
              Account(double balance) { this.balance = balance; }
          }

          class Savings extends Account {
              private double rate;
              Savings(double rate) { this.rate = rate; }
          }
        `, options: [
            "<code>rate</code> must be public",
            "<code>Savings</code> must override <code>toString()</code>",
            "The automatic <code>super()</code> needs <code>Account()</code>, which does not exist",
            "A subclass cannot have its own constructor"
          ], answer: 2,
          explain: "<code>Account</code> only has <code>Account(double)</code>. Java inserts <code>super();</code> in the <code>Savings</code> constructor and finds no match. Fix: call <code>super(0)</code> or another value." },
        { t: 'fill', q: "Fill in the keyword that sends values up to the parent.", code: J`
          class Car extends Vehicle {
              private int doors;

              Car(String make, int year, int doors) {
                  ___(make, year);
                  this.doors = doors;
              }
          }
        `, answers: ['super'],
          explain: "<code>super(make, year)</code> calls the <code>Vehicle</code> constructor and must be the first line." },
        { t: 'order', q: "Arrange the lines of a correct <code>Car</code> constructor.",
          lines: [
            "Car(String make, int year, int doors) {",
            "    super(make, year);",
            "    this.doors = doors;",
            "}"
          ],
          explain: "<code>super(...)</code> comes first; then the child sets its own field." },
        { t: 'output', q: "What does this program print? (Trace it from the top of the tree.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  new C();
              }
          }

          class A {
              A() { System.out.println("A"); }
          }

          class B extends A {
              B() {
                  this(5);
                  System.out.println("B()");
              }

              B(int x) {
                  System.out.println("B(" + x + ")");
              }
          }

          class C extends B {
              C() {
                  System.out.println("C");
              }
          }
        `, answer: J`
          A
          B(5)
          B()
          C
        `, explain: "<code>C()</code> implicitly calls <code>super()</code>, i.e. <code>B()</code>. <code>B()</code> chains to <code>B(5)</code> with <code>this(5)</code>, and that one implicitly calls <code>A()</code> first. Bodies finish: A, B(5), B(), C.",
          explainAr: "يبدأ التنفيذ الفعلي من أعلى الهرمية: A ثم B(5) ثم B() ثم C." },
        { t: 'code', q: "<code>Vehicle</code> is written for you (private <code>make</code> and <code>year</code>, constructor, getters). Write class <code>Car</code> that extends it, adds an <code>int doors</code> field, calls <code>super(...)</code> in its constructor, and has a method <code>describe()</code> returning <code>YEAR MAKE, DOORS doors</code>. <code>main</code> reads make, year and doors and prints <code>describe()</code>. No prompts.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String make = sc.next();
                    int year = sc.nextInt();
                    int doors = sc.nextInt();
                    Car c = new Car(make, year, doors);
                    System.out.println(c.describe());
                }
            }

            class Vehicle {
                private String make;
                private int year;

                Vehicle(String make, int year) {
                    this.make = make;
                    this.year = year;
                }

                String getMake() { return make; }
                int getYear() { return year; }
            }

            // write class Car here
          `,
          tests: [
            { stdin: J`
              Toyota 2022 4
            `, expected: J`
              2022 Toyota, 4 doors
            ` },
            { stdin: J`
              Kia 2019 2
            `, expected: J`
              2019 Kia, 2 doors
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String make = sc.next();
                    int year = sc.nextInt();
                    int doors = sc.nextInt();
                    Car c = new Car(make, year, doors);
                    System.out.println(c.describe());
                }
            }

            class Vehicle {
                private String make;
                private int year;

                Vehicle(String make, int year) {
                    this.make = make;
                    this.year = year;
                }

                String getMake() { return make; }
                int getYear() { return year; }
            }

            class Car extends Vehicle {
                private int doors;

                Car(String make, int year, int doors) {
                    super(make, year);
                    this.doors = doors;
                }

                String describe() {
                    return getYear() + " " + getMake() + ", " + doors + " doors";
                }
            }
          `,
          hint: "The fields in <code>Vehicle</code> are private, so use <code>getYear()</code> and <code>getMake()</code> inside <code>Car</code>.",
          explain: "<code>super(make, year)</code> lets <code>Vehicle</code> store its private fields. <code>Car</code> reads them back through the getters." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'Overriding: changing inherited behaviour',
      titleAr: 'التجاوز: تغيير السلوك الموروث',
      minutes: 30,
      body: [
        { type: 'h', en: 'When the parent version is not right' },
        { type: 'p', en: "A child inherits the parent's methods. But sometimes the inherited method does not fit. Every <code>Animal</code> can <code>speak()</code>, but a dog says \"Woof!\" and a cat says \"Meow!\". The child can <b>override</b> the method: write a new version with the <b>same name and the same parameters</b>. Objects of the child then use the new version.",
          ar: "التجاوز (override): كتابة دالة في الصنف الفرعي بنفس الاسم ونفس المعاملات لتغيير السلوك الموروث." },
        { type: 'analogy', title: 'A family recipe', en: "Grandmother has a recipe for rice. Your family uses the same recipe but adds saffron. The dish name is the same, but the way you make it is changed. Overriding keeps the method name and changes what it does.",
          ar: "نفس اسم الوصفة، لكن الطريقة تغيّرت." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal a = new Animal();
                  Dog d = new Dog();
                  a.speak();
                  d.speak();
              }
          }

          class Animal {
              void speak() {
                  System.out.println("...");
              }
          }

          class Dog extends Animal {
              @Override
              void speak() {
                  System.out.println("Woof!");
              }
          }
        `, out: J`
          ...
          Woof!
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['void speak() { println("...") }', 'The general version in the parent.'],
            ['@Override', 'A label that says: "the next method replaces one from my parent."'],
            ['void speak() { println("Woof!") }', 'Same name, same (empty) parameter list, new body.'],
            ['d.speak();', 'The object is a <code>Dog</code>, so the Dog version runs.']
          ], ar: "الكائن من نوع Dog لذلك تعمل نسخة Dog من speak." },
        { type: 'check', q: "Which method in <code>Dog</code> overrides <code>void speak()</code> from <code>Animal</code>?", options: [
            "<code>void speak(String word)</code>", "<code>void speak()</code>", "<code>void talk()</code>"
          ], answer: 1, explain: "Overriding needs the same name and the same parameters. A different parameter list is a new method (overloading, next lesson)." },
        { type: 'h', en: 'Why write @Override?' },
        { type: 'p', en: "<code>@Override</code> is optional, but very useful. If you make a spelling mistake, the compiler tells you at once. Without it, Java just creates a new method that nobody calls." },
        { type: 'code', code: J`
          class Dog extends Animal {
              @Override
              void speek() {            // ERROR: speek() does not override anything
                  System.out.println("Woof!");
              }
          }
        ` },
        { type: 'h', en: 'Using the parent version with super' },
        { type: 'p', en: "Sometimes you want to <b>keep</b> the parent's work and add something. Inside the override, write <code>super.speak()</code> to call the parent's version first. In Lesson 3 <code>super(...)</code> called a parent constructor; now <code>super.method()</code> calls a parent method.",
          ar: "super.speak() تستدعي نسخة الأب من الدالة قبل إضافة ما نريده." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Cat c = new Cat();
                  c.speak();
              }
          }

          class Animal {
              void speak() {
                  System.out.println("...");
              }
          }

          class Cat extends Animal {
              @Override
              void speak() {
                  super.speak();                // parent version first
                  System.out.println("Meow");   // then Cat's extra work
              }
          }
        `, out: J`
          ...
          Meow
        ` },
        { type: 'check', q: "What does <code>super.speak()</code> do inside <code>Cat</code>?", options: [
            "Calls the speak() written in Animal", "Calls speak() in Cat again (endless loop)", "Creates a new Animal"
          ], answer: 0, explain: "<code>super</code> points to the parent part of the same object. (Without <code>super.</code> the method would call itself forever.)" },
        { type: 'steps', title: 'Worked example: Manager gets a bonus', problem: "An <code>Employee</code> is paid the base salary. A <code>Manager</code> is paid the base salary plus a bonus. Change <code>pay()</code> only for managers.",
          steps: [
            { en: "<b>Step 1.</b> Employee stores a name and base salary, and <code>pay()</code> returns the base salary.", code: J`
              class Employee {
                  private String name;
                  private double baseSalary;

                  Employee(String name, double baseSalary) {
                      this.name = name;
                      this.baseSalary = baseSalary;
                  }

                  String getName() { return name; }

                  double pay() { return baseSalary; }
              }
            ` },
            { en: "<b>Step 2.</b> Manager extends Employee, sends name and salary up with <code>super(...)</code> and keeps its own <code>bonus</code> field.", code: J`
              class Manager extends Employee {
                  private double bonus;

                  Manager(String name, double baseSalary, double bonus) {
                      super(name, baseSalary);
                      this.bonus = bonus;
                  }
              }
            ` },
            { en: "<b>Step 3.</b> Override <code>pay()</code>. The base salary is private, so ask the parent version with <code>super.pay()</code>, then add the bonus.", code: J`
              @Override
              double pay() {
                  return super.pay() + bonus;
              }
            ` },
            { en: "<b>Step 4.</b> Run it: the employee gets 8000, the manager gets 12000 + 3000." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Employee e = new Employee("Ahmed", 8000);
                    Manager m = new Manager("Dana", 12000, 3000);
                    System.out.println(e.getName() + ": " + e.pay());
                    System.out.println(m.getName() + ": " + m.pay());
                }
            }

            class Employee {
                private String name;
                private double baseSalary;

                Employee(String name, double baseSalary) {
                    this.name = name;
                    this.baseSalary = baseSalary;
                }

                String getName() { return name; }

                double pay() { return baseSalary; }
            }

            class Manager extends Employee {
                private double bonus;

                Manager(String name, double baseSalary, double bonus) {
                    super(name, baseSalary);
                    this.bonus = bonus;
                }

                @Override
                double pay() {
                    return super.pay() + bonus;
                }
            }
          `, out: J`
            Ahmed: 8000.0
            Dana: 15000.0
          `, ar: "pay في Manager تستدعي pay الأب ثم تضيف المكافأة." },
        { type: 'h', en: 'Rules for overriding' },
        { type: 'list', items: [
          "Same name and same parameters (and a compatible return type).",
          "The override cannot be <b>less visible</b>: a <code>public</code> method must stay <code>public</code>.",
          "<code>private</code> methods are not inherited, so they cannot be overridden.",
          "A <code>final</code> method cannot be overridden. A <code>static</code> method is not overridden either."
        ], ar: "لا يجوز تقليل مستوى الوصول عند التجاوز." },
        { type: 'note', kind: 'exam', en: "If <code>Employee</code> has <code>public double pay()</code>, then <code>double pay()</code> (no modifier) in <code>Manager</code> is a compile error: <i>attempting to assign weaker access privileges</i>." }
      ],
      mistakes: [
        { title: 'Different parameters', en: "If the parameters differ it is NOT an override, just another method. <code>@Override</code> would show an error.", code: J`
          @Override
          void speak(String word) { }      // error: parent has speak() with no parameters
        ` },
        { title: 'Weaker access', en: "The parent method is <code>public</code>; the child must not hide it.", code: J`
          class Employee { public double pay() { return 1; } }
          class Intern extends Employee {
              double pay() { return 0; }   // error: weaker access
          }
        ` },
        { title: 'Forgetting super. and calling yourself', en: "Without <code>super.</code> the method calls itself again and again until the program crashes.", code: J`
          double pay() {
              return pay() + bonus;        // wrong: endless recursion
          }
        ` },
        { title: 'Misspelling the name', en: "<code>speek()</code> is a brand new method. Always add <code>@Override</code> so the compiler checks for you." }
      ],
      remember: [
        "Overriding = same name, same parameters, new body in the child.",
        "The object's real class decides which version runs.",
        "Write <code>@Override</code> so the compiler catches mistakes.",
        "<code>super.method()</code> calls the parent's version.",
        "An override cannot have weaker access than the original.",
        "<code>private</code>, <code>final</code> and <code>static</code> methods are not overridden."
      ],
      rememberAr: "التجاوز: نفس الاسم ونفس المعاملات وجسم جديد. الكائن الفعلي يحدد النسخة التي تعمل. اكتب @Override. super.method() تستدعي نسخة الأب. لا تقلل مستوى الوصول.",
      practice: [
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal a = new Animal();
                  Dog d = new Dog();
                  a.speak();
                  d.speak();
              }
          }

          class Animal {
              void speak() { System.out.println("..."); }
          }

          class Dog extends Animal {
              @Override
              void speak() { System.out.println("Woof!"); }
          }
        `, answer: J`
          ...
          Woof!
        `, explain: "The Animal object uses the Animal version. The Dog object uses its own override." },
        { t: 'mcq', q: "<code>Shape</code> has <code>public double area()</code>. Which method in subclass <code>Circle</code> <b>overrides</b> it?",
          options: [
            '<code>public double area(double r)</code>',
            '<code>public double area()</code>',
            '<code>public int area()</code>',
            '<code>public static double area()</code>'
          ], answer: 1,
          explain: "Overriding needs the same name and parameter list with a compatible return type. A different parameter list is overloading; <code>int</code> is not compatible with <code>double</code>; a static method cannot override an instance method." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal a = new Animal();
                  Cat c = new Cat();
                  a.speak();
                  c.speak();
              }
          }

          class Animal {
              void speak() {
                  System.out.println("...");
              }
          }

          class Cat extends Animal {
              @Override
              void speak() {
                  super.speak();
                  System.out.println("Meow");
              }
          }
        `, answer: J`
          ...
          ...
          Meow
        `, explain: "<code>a.speak()</code> prints one line. <code>c.speak()</code> runs the override, which first calls <code>super.speak()</code> (prints <code>...</code>) and then prints Meow." },
        { t: 'mcq', q: "What is the main benefit of writing <code>@Override</code>?",
          options: [
            "It makes the method run faster",
            "It makes the method public",
            "The compiler reports an error if the method does not really override a parent method",
            "It lets a class extend two classes"
          ], answer: 2,
          explain: "<code>@Override</code> is a check for the compiler; it catches spelling and parameter mistakes." },
        { t: 'mcq', q: "<code>Employee</code> declares <code>public double pay()</code>. Subclass <code>Intern</code> declares <code>double pay() { return 0; }</code> with no modifier. What happens?",
          options: [
            "It compiles; interns are paid 0",
            "Compile error: the override has weaker access than <code>public</code>",
            "It compiles but <code>Employee.pay()</code> is always used",
            "Run-time exception"
          ], answer: 1,
          explain: "An override may keep or widen the access level but never narrow it. Default access is narrower than public." },
        { t: 'fill', q: "Complete the override so that the manager gets the parent's pay plus the bonus.", code: J`
          class Manager extends Employee {
              private double bonus;

              ___
              public double pay() {
                  return ___.pay() + bonus;
              }
          }
        `, answers: ['@Override', 'super'],
          explain: "<code>@Override</code> marks the override; <code>super.pay()</code> asks the parent for the base pay." },
        { t: 'code', q: "Class <code>Employee</code> is written for you (a constructor with <code>int base</code>, and <code>int pay()</code>). Write class <code>Manager</code> that extends it, takes <code>int base, int bonus</code>, and overrides <code>pay()</code> to return the parent's pay plus the bonus. <code>main</code> reads base and bonus, then prints <code>Employee: X</code> and <code>Manager: Y</code>. No prompts.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int base = sc.nextInt();
                    int bonus = sc.nextInt();
                    Employee e = new Employee(base);
                    Manager m = new Manager(base, bonus);
                    System.out.println("Employee: " + e.pay());
                    System.out.println("Manager: " + m.pay());
                }
            }

            class Employee {
                private int base;

                Employee(int base) { this.base = base; }

                int pay() { return base; }
            }

            // write class Manager here
          `,
          tests: [
            { stdin: J`
              5000 1000
            `, expected: J`
              Employee: 5000
              Manager: 6000
            ` },
            { stdin: J`
              7200 300
            `, expected: J`
              Employee: 7200
              Manager: 7500
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int base = sc.nextInt();
                    int bonus = sc.nextInt();
                    Employee e = new Employee(base);
                    Manager m = new Manager(base, bonus);
                    System.out.println("Employee: " + e.pay());
                    System.out.println("Manager: " + m.pay());
                }
            }

            class Employee {
                private int base;

                Employee(int base) { this.base = base; }

                int pay() { return base; }
            }

            class Manager extends Employee {
                private int bonus;

                Manager(int base, int bonus) {
                    super(base);
                    this.bonus = bonus;
                }

                @Override
                int pay() {
                    return super.pay() + bonus;
                }
            }
          `,
          hint: "Start with <code>super(base);</code> in the constructor, then write <code>super.pay() + bonus</code>.",
          explain: "<code>Manager</code> sends <code>base</code> up with <code>super(base)</code> and reuses <code>Employee.pay()</code> through <code>super.pay()</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 5
    {
      title: 'Overloading vs overriding, and protected',
      titleAr: 'التحميل الزائد مقابل التجاوز و protected',
      minutes: 30,
      body: [
        { type: 'h', en: 'Same name, different job: overloading' },
        { type: 'p', en: "Two words sound similar, so students mix them up. <b>Overriding</b> (last lesson) replaces a parent's method. <b>Overloading</b> means writing several methods with the <b>same name but different parameters</b>. Java chooses the right one by looking at the values you pass.",
          ar: "التحميل الزائد: نفس الاسم بمعاملات مختلفة. التجاوز: نفس الاسم ونفس المعاملات في الصنف الفرعي." },
        { type: 'analogy', title: 'Ordering coffee', en: "At a coffee shop the word is always \"order\". But \"order a small latte\" and \"order two large teas\" give different results because the details are different. Overloading is one name with different details (parameters).",
          ar: "الكلمة واحدة \"اطلب\" لكن التفاصيل مختلفة." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Printer p = new Printer();
                  p.print(7);
                  p.print(7.0);
                  p.print("7");
              }
          }

          class Printer {
              void print(int x)    { System.out.println("int " + x); }
              void print(double x) { System.out.println("double " + x); }
              void print(String s) { System.out.println("String " + s); }
          }
        `, out: J`
          int 7
          double 7.0
          String 7
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['void print(int x)', 'Used when you pass a whole number.'],
            ['void print(double x)', 'Used when you pass a decimal number.'],
            ['void print(String s)', 'Used when you pass text.'],
            ['p.print(7.0)', 'Java looks at the argument type (double) and picks the matching method <b>while compiling</b>.']
          ], ar: "جافا تختار الدالة المناسبة حسب نوع القيمة الممررة." },
        { type: 'check', q: "Which two methods are overloads of each other (in the same class)?", options: [
            "<code>void show(int a)</code> and <code>void show(int b)</code>",
            "<code>void show(int a)</code> and <code>void show(String a)</code>",
            "<code>void show()</code> and <code>void display()</code>"
          ], answer: 1, explain: "Same name, different parameter types. The first pair has the same parameters (only the variable name differs), and the third pair has different names." },
        { type: 'h', en: 'Overriding or overloading?' },
        { type: 'table', head: ['', 'Overriding', 'Overloading'], rows: [
          ['Where', 'In a subclass, replacing a parent method', 'In the same class (or subclass), adding a method'],
          ['Name', 'Same', 'Same'],
          ['Parameters', 'Same types, number and order', 'Different'],
          ['Which one runs?', 'Decided when the program runs, by the real object', 'Decided when compiling, by the argument types'],
          ['@Override', 'Recommended', 'Not used']
        ] },
        { type: 'steps', title: 'Worked example: classify the methods', problem: "<code>Employee</code> has <code>pay()</code>. <code>Manager</code> extends it. Decide for each new <code>Manager</code> method whether it overrides or overloads.",
          steps: [
            { en: "<b>Step 1.</b> Look at the parent: <code>public double pay()</code>. Name <code>pay</code>, no parameters." },
            { en: "<b>Step 2.</b> <code>Manager.pay()</code> has the same name <b>and</b> the same parameters: it is an <b>override</b>.", code: J`
              @Override
              public double pay() { return super.pay() + bonus; }
            ` },
            { en: "<b>Step 3.</b> <code>Manager.pay(int months)</code> has the same name but a new parameter: it is an <b>overload</b>. It is an extra method.", code: J`
              public double pay(int months) { return pay() * months; }
            ` },
            { en: "<b>Step 4.</b> Run the complete program. <code>m.pay()</code> chooses the no-parameter method; <code>m.pay(2)</code> chooses the one with an <code>int</code>." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Employee e = new Employee("Ahmed", 8000);
                    Manager m = new Manager("Dana", 12000, 3000);
                    System.out.println(e.getName() + ": " + e.pay());
                    System.out.println(m.getName() + ": " + m.pay());
                    System.out.println(m.pay(2));
                }
            }

            class Employee {
                protected String name;
                protected double baseSalary;

                public Employee(String name, double baseSalary) {
                    this.name = name;
                    this.baseSalary = baseSalary;
                }

                public String getName() { return name; }

                public double pay() { return baseSalary; }
            }

            class Manager extends Employee {
                private double bonus;

                public Manager(String name, double baseSalary, double bonus) {
                    super(name, baseSalary);
                    this.bonus = bonus;
                }

                @Override
                public double pay() {                 // overriding: same signature
                    return super.pay() + bonus;
                }

                public double pay(int months) {       // overloading: new parameter list
                    return pay() * months;
                }
            }
          `, out: J`
            Ahmed: 8000.0
            Dana: 15000.0
            30000.0
          `, ar: "pay() تجاوز لأن المعاملات نفسها. pay(int) تحميل زائد لأن المعاملات مختلفة." },
        { type: 'h', en: 'protected: sharing with children' },
        { type: 'p', en: "Why did the example above write <code>protected</code> before <code>name</code>? Remember: <code>private</code> hides a member even from children. <code>public</code> shows it to everybody. <code>protected</code> is in the middle: visible to the class itself, to its <b>subclasses</b>, and to classes in the same package (a package is a group of related classes; all our classes are in one package for now).",
          ar: "protected: يراه الصنف نفسه والأصناف الفرعية والحزمة نفسها، ولا يراه الغرباء." },
        { type: 'analogy', title: 'A family garden', en: "The garden behind the house is open to family members (subclasses) but closed to strangers. A private room is for one person only. The street is public.",
          ar: "الحديقة الخلفية مفتوحة لأفراد العائلة فقط." },
        { type: 'table', head: ['Modifier', 'Same class', 'Subclass', 'Everyone else'], rows: [
          ['<code>private</code>', 'yes', 'no', 'no'],
          ['<code>protected</code>', 'yes', 'yes', 'no (except same package)'],
          ['<code>public</code>', 'yes', 'yes', 'yes']
        ] },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Savings s = new Savings(2000);
                  s.addProfit(0.5);
                  System.out.println(s);
              }
          }

          class Account {
              protected double balance;          // children may use it directly

              Account(double balance) { this.balance = balance; }
          }

          class Savings extends Account {
              Savings(double balance) { super(balance); }

              void addProfit(double ratio) {
                  balance = balance + balance * ratio;   // direct access works
              }

              @Override
              public String toString() { return "Savings: " + balance; }
          }
        `, out: J`
          Savings: 3000.0
        ` },
        { type: 'check', q: "A field is <code>protected</code>. Who can use it directly?", options: [
            "Only its own class", "Its own class and its subclasses", "Anyone, anywhere"
          ], answer: 1, explain: "Protected is between private and public: the family (subclasses) may use it. (Same-package classes may too.)" },
        { type: 'note', kind: 'tip', en: "Many programmers still prefer <code>private</code> fields with getters, even for children. Use <code>protected</code> when children really need direct access.",
          ar: "في الغالب نفضل private مع getters، ونستخدم protected عند الحاجة." }
      ],
      mistakes: [
        { title: 'Confusing the two words', en: "Same parameters in a child = <b>over<u>r</u>iding</b>. Different parameters = <b>over<u>l</u>oading</b>. Check the parameter list first." },
        { title: 'Overloading by changing only the return type', en: "The return type alone cannot tell two methods apart. This does not compile.", code: J`
          int get() { return 1; }
          double get() { return 1.0; }       // error: same name and parameters
        ` },
        { title: 'Using a private parent field in the child', en: "The child cannot use a <code>private</code> field. Make it <code>protected</code> or use a getter.", code: J`
          class Savings extends Account {
              void show() { System.out.println(balance); }   // error if balance is private
          }
        ` },
        { title: 'Expecting a char to match a missing char method', en: "If there is no <code>print(char)</code>, Java converts <code>'A'</code> to the number 65 and picks <code>print(int)</code>." }
      ],
      remember: [
        "Overloading: same name, <b>different</b> parameters.",
        "Overriding: same name, <b>same</b> parameters, in a child class.",
        "Overloads are chosen at compile time by the argument types.",
        "Overrides are chosen at run time by the real object.",
        "<code>protected</code> = visible to subclasses (and the same package), hidden from outsiders.",
        "Changing only the return type is not overloading."
      ],
      rememberAr: "التحميل الزائد: نفس الاسم ومعاملات مختلفة. التجاوز: نفس الاسم ونفس المعاملات في الصنف الفرعي. protected يراه الصنف والأصناف الفرعية.",
      practice: [
        { t: 'mcq', q: "What is <b>overloading</b>?",
          options: [
            "Two methods with the same name but different parameters",
            "A child replacing a parent's method",
            "A method that is too long"
          ], answer: 0, explain: "Overloading = same name, different parameter lists." },
        { t: 'output', q: "Which overloaded method does each call choose? Write the output.", code: J`
          public class Main {
              public static void main(String[] args) {
                  Printer p = new Printer();
                  p.print(7);
                  p.print(7.0);
                  p.print("7");
                  p.print('A');
              }
          }

          class Printer {
              void print(int x) { System.out.println("int " + x); }
              void print(double x) { System.out.println("double " + x); }
              void print(String s) { System.out.println("String " + s); }
          }
        `, answer: J`
          int 7
          double 7.0
          String 7
          int 65
        `, explain: "Overloads are chosen at compile time by argument type. There is no <code>print(char)</code>, so <code>'A'</code> is widened to the <code>int</code> 65.",
          explainAr: "الحرف 'A' يتحول إلى int قيمته 65 لعدم وجود دالة تأخذ char." },
        { t: 'mcq', q: "<code>Animal</code> has <code>void speak()</code>. <code>Dog</code> has <code>void speak()</code> and also <code>void speak(int times)</code>. Which statement is true?",
          options: [
            "Both Dog methods are overrides",
            "<code>speak()</code> is an override and <code>speak(int)</code> is an overload",
            "<code>speak()</code> is an overload and <code>speak(int)</code> is an override",
            "Neither is allowed"
          ], answer: 1, explain: "Same parameters as the parent = override. A new parameter list = overload." },
        { t: 'mcq', q: "Who can directly use a <code>protected</code> field of a class?",
          options: ["Only the class itself", "The class and its subclasses (and the same package)", "Everybody"], answer: 1,
          explain: "<code>protected</code> sits between <code>private</code> and <code>public</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  B b = new B();
                  b.show(1);
                  b.show("x");
              }
          }

          class A {
              void show(int n) { System.out.println("A int"); }
          }

          class B extends A {
              void show(String s) { System.out.println("B String"); }

              @Override
              void show(int n) { System.out.println("B int"); }
          }
        `, answer: J`
          B int
          B String
        `, explain: "<code>show(1)</code> picks the int version, and because B overrides it, B's code runs. <code>show(\"x\")</code> picks the String overload." },
        { t: 'fill', q: "Make <code>balance</code> visible to subclasses (but not to everyone), and mark the method that replaces <code>Object</code>'s version.", code: J`
          class Account {
              ___ double balance;
          }

          class Savings extends Account {
              ___
              public String toString() {
                  return "Savings: " + balance;
              }
          }
        `, answers: ['protected', '@Override'],
          explain: "<code>protected</code> grants access to subclasses. <code>@Override</code> checks that <code>toString()</code> replaces <code>Object.toString()</code>." },
        { t: 'code', q: "<code>Account</code> (with a <code>protected int balance</code> and a constructor) is written for you. Write class <code>Savings</code> that extends it, has a method <code>addProfit(int percent)</code> doing <code>balance = balance + balance * percent / 100</code>, and a <code>toString()</code> returning <code>Savings: BALANCE</code>. No prompts.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int balance = sc.nextInt();
                    int percent = sc.nextInt();
                    Savings s = new Savings(balance);
                    s.addProfit(percent);
                    System.out.println(s);
                }
            }

            class Account {
                protected int balance;

                Account(int balance) { this.balance = balance; }
            }

            // write class Savings here
          `,
          tests: [
            { stdin: J`
              2000 50
            `, expected: J`
              Savings: 3000
            ` },
            { stdin: J`
              1000 10
            `, expected: J`
              Savings: 1100
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int balance = sc.nextInt();
                    int percent = sc.nextInt();
                    Savings s = new Savings(balance);
                    s.addProfit(percent);
                    System.out.println(s);
                }
            }

            class Account {
                protected int balance;

                Account(int balance) { this.balance = balance; }
            }

            class Savings extends Account {
                Savings(int balance) { super(balance); }

                void addProfit(int percent) {
                    balance = balance + balance * percent / 100;
                }

                @Override
                public String toString() {
                    return "Savings: " + balance;
                }
            }
          `,
          hint: "The constructor of <code>Savings</code> must call <code>super(balance)</code>.",
          explain: "Because <code>balance</code> is protected, <code>Savings</code> can use it directly." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 6
    {
      title: 'Superclass references and class hierarchies',
      titleAr: 'مراجع الصنف الأب وهرميات الأصناف',
      minutes: 30,
      body: [
        { type: 'h', en: 'One box for many kinds' },
        { type: 'p', en: "Imagine a car rental office with cars, buses and trucks. You would like <b>one list</b> of all vehicles, not three separate lists. Inheritance allows this: a variable of the <b>parent type</b> may point to an object of any <b>child type</b>. A Car is a Vehicle, so it fits.",
          ar: "متغير من نوع الصنف الأب يمكنه أن يشير إلى كائن من أي صنف فرعي، لأن الكائن الفرعي \"هو\" كائن من الأب." },
        { type: 'analogy', title: 'A parking sign', en: "A sign says \"Vehicles\". A car, a bus and a truck may all park there, because each one is a vehicle. The sign does not care which kind it is.",
          ar: "لافتة \"مركبات\" تسمح بوقوف أي مركبة." },
        { type: 'code', code: J`
          Animal a = new Dog();      // OK: a Dog is an Animal
          Dog d = new Animal();      // ERROR: not every Animal is a Dog
        ` },
        { type: 'p', en: "Look at the picture. The arrow of \"is a\" goes up. You may put a child into a parent box, but not the other way round." },
        { type: 'code', code: J`
          Animal   <- box type (declared type)
            ├── Dog   <- real object may be a Dog
            └── Cat   <- or a Cat
        ` },
        { type: 'h', en: 'Two types: the box and the object' },
        { type: 'p', en: "In <code>Animal a = new Dog();</code> there are <b>two</b> types. The <b>declared type</b> is on the left (<code>Animal</code>, the box). The <b>actual type</b> is on the right (<code>Dog</code>, the real object). The declared type decides <i>which methods you may call</i> (checked when compiling). The actual type decides <i>which version runs</i> when the overridden method is called.",
          ar: "النوع المعلن (يسار) يحدد الدوال المسموح استدعاؤها. النوع الفعلي (يمين) يحدد أي نسخة معدّلة تعمل." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal[] zoo = { new Animal(), new Dog(), new Cat() };
                  for (Animal a : zoo) {
                      a.speak();
                  }
              }
          }

          class Animal {
              void speak() { System.out.println("..."); }
          }

          class Dog extends Animal {
              @Override
              void speak() { System.out.println("Woof!"); }
          }

          class Cat extends Animal {
              @Override
              void speak() { System.out.println("Meow!"); }
          }
        `, out: J`
          ...
          Woof!
          Meow!
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['Animal[] zoo = { ... };', 'An array whose boxes are of type <code>Animal</code>, filled with three different kinds.'],
            ['for (Animal a : zoo)', 'Visit each animal. We only know it is an <code>Animal</code>.'],
            ['a.speak();', 'Java checks the <b>real</b> object each time: Animal says ..., Dog says Woof!, Cat says Meow!']
          ], ar: "نكتب سطرًا واحدًا a.speak() فتتصرف كل كائن بطريقته. هذا يسمى تعدد الأشكال." },
        { type: 'check', q: "Which line compiles?", options: [
            "<code>Dog d = new Animal();</code>", "<code>Animal a = new Cat();</code>", "<code>Cat c = new Dog();</code>"
          ], answer: 1, explain: "Only a child object may go into a parent variable. A Cat is not a Dog, and an Animal is not necessarily a Dog." },
        { type: 'h', en: 'What you can call' },
        { type: 'p', en: "A parent box only knows the parent's methods. Even if the object is really a <code>Truck</code>, the variable of type <code>Vehicle</code> cannot call a Truck-only method. The compiler checks the box, not the object." },
        { type: 'code', code: J`
          Vehicle v = new Truck("T1", 8.0);
          v.describe();       // OK: Vehicle has describe()
          v.getLoad();        // ERROR: Vehicle has no getLoad()
        ` },
        { type: 'p', en: "(In the next lesson you will learn how to reach Truck-only methods safely.)" },
        { type: 'steps', title: 'Worked example: a rental fleet', problem: "A rental office has plain vehicles, cars and trucks. Put them all in one array and print a description of each.",
          steps: [
            { en: "<b>Step 1.</b> Write the parent <code>Vehicle</code> with an id and a <code>describe()</code> method. The id is <code>protected</code> so children can use it.", code: J`
              class Vehicle {
                  protected String id;

                  public Vehicle(String id) { this.id = id; }

                  public String describe() { return id + ": vehicle"; }
              }
            ` },
            { en: "<b>Step 2.</b> <code>Car</code> and <code>Truck</code> extend it, call <code>super(id)</code> and override <code>describe()</code>.", code: J`
              class Car extends Vehicle {
                  public Car(String id) { super(id); }

                  @Override
                  public String describe() { return id + ": car"; }
              }
            ` },
            { en: "<b>Step 3.</b> Make one array of type <code>Vehicle[]</code> and put all three kinds in it." },
            { en: "<b>Step 4.</b> Loop over the array. Each element runs its own <code>describe()</code>." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Vehicle[] fleet = {
                        new Vehicle("Bus-1"),
                        new Car("Car-7"),
                        new Truck("Trk-3", 12.5)
                    };
                    for (Vehicle v : fleet) {
                        System.out.println(v.describe());
                    }
                }
            }

            class Vehicle {
                protected String id;

                public Vehicle(String id) { this.id = id; }

                public String describe() { return id + ": vehicle"; }
            }

            class Car extends Vehicle {
                public Car(String id) { super(id); }

                @Override
                public String describe() { return id + ": car"; }
            }

            class Truck extends Vehicle {
                private double loadTons;

                public Truck(String id, double loadTons) {
                    super(id);
                    this.loadTons = loadTons;
                }

                @Override
                public String describe() {
                    return id + ": truck carrying " + loadTons + " tons";
                }
            }
          `, out: J`
            Bus-1: vehicle
            Car-7: car
            Trk-3: truck carrying 12.5 tons
          `, ar: "مصفوفة واحدة من Vehicle تحمل ثلاثة أنواع، وكل عنصر ينفذ describe الخاصة به." },
        { type: 'h', en: 'Bigger hierarchies' },
        { type: 'p', en: "Trees can have many levels. A method written high in the tree is available to everything below it. An override low in the tree only changes that branch." },
        { type: 'code', code: J`
          Object
            └── Shape                 (color, area())
                  ├── Circle          (radius)
                  └── Rectangle       (width, height)
                        └── Square    (a Rectangle with equal sides)
        ` },
        { type: 'list', items: [
          "A <code>Square</code> is a <code>Rectangle</code>, a <code>Shape</code> and an <code>Object</code>.",
          "A <code>Shape</code> variable can hold a Circle, a Rectangle or a Square.",
          "<code>Circle</code> and <code>Rectangle</code> are <b>siblings</b> (same parent). Neither is the other."
        ], ar: "المربع مستطيل وشكل وكائن. الدائرة والمستطيل أخوان ولا يرث أحدهما الآخر." },
        { type: 'note', kind: 'exam', en: "The compiler only looks at the declared type. With <code>Vehicle v = new Car(\"C1\");</code>, calling a Car-only method on <code>v</code> is a compile error even though the object is a Car.",
          ar: "المترجم ينظر إلى نوع المتغير المعلن فقط." }
      ],
      mistakes: [
        { title: 'Child variable, parent object', en: "The box is too specific for the object.", code: J`
          Dog d = new Animal();       // error
        ` },
        { title: 'Calling a child-only method through the parent box', en: "The compiler checks the declared type.", code: J`
          Animal a = new Dog();
          a.bark();                   // error if bark() is only in Dog
        ` },
        { title: 'Thinking the declared type decides the output', en: "For an overridden method, the <b>actual</b> object decides what is printed. <code>Animal a = new Dog(); a.speak();</code> prints Woof!, not ..." },
        { title: 'Mixing siblings', en: "A Circle and a Rectangle share a parent, but you cannot put one into a variable of the other.", code: J`
          Circle c = new Rectangle();     // error: siblings
        ` }
      ],
      remember: [
        "A parent variable can point to a child object: <code>Animal a = new Dog();</code>.",
        "The opposite does not compile: <code>Dog d = new Animal();</code>.",
        "Declared type (left) decides <b>which methods you may call</b>.",
        "Actual type (right) decides <b>which overridden version runs</b>.",
        "One array of the parent type can hold all the children.",
        "Hierarchies are trees with <code>Object</code> at the root."
      ],
      rememberAr: "متغير الأب يشير إلى كائن الابن لا العكس. النوع المعلن يحدد الدوال المسموحة، والنوع الفعلي يحدد النسخة التي تعمل. مصفوفة من نوع الأب تحمل كل الأبناء.",
      practice: [
        { t: 'mcq', q: "<code>Manager extends Employee</code>. Which statement compiles?",
          options: [
            '<code>Manager m = new Employee();</code>',
            '<code>Employee e = new Manager();</code>',
            'Neither'
          ], answer: 1,
          explain: "A superclass variable can refer to a subclass object (every Manager is an Employee), but not the other way round." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal a = new Dog();
                  a.speak();
              }
          }

          class Animal {
              void speak() { System.out.println("..."); }
          }

          class Dog extends Animal {
              @Override
              void speak() { System.out.println("Woof!"); }
          }
        `, answer: J`
          Woof!
        `, explain: "The variable is an Animal, but the real object is a Dog, so Dog's override runs." },
        { t: 'mcq', q: "Given <code>Vehicle v = new Truck(\"T1\", 8.0);</code> where only <code>Truck</code> has <code>getLoad()</code>, what is true about <code>v.getLoad()</code>?",
          options: [
            "It compiles and returns 8.0",
            "It is a compile error because the declared type <code>Vehicle</code> has no <code>getLoad()</code>",
            "It returns 0.0 because Vehicle has no load"
          ], answer: 1,
          explain: "Which methods may be called is decided from the declared type at compile time." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape[] shapes = { new Shape(), new Square(3), new Rectangle(2, 5) };
                  for (Shape s : shapes) {
                      System.out.println(s.area());
                  }
              }
          }

          class Shape {
              int area() { return 0; }
          }

          class Rectangle extends Shape {
              int w, h;

              Rectangle(int w, int h) { this.w = w; this.h = h; }

              @Override
              int area() { return w * h; }
          }

          class Square extends Rectangle {
              Square(int side) { super(side, side); }
          }
        `, answer: J`
          0
          9
          10
        `, explain: "Shape returns 0. Square passes 3 and 3 up, and inherits Rectangle's area: 3 * 3 = 9. The rectangle gives 2 * 5 = 10." },
        { t: 'fill', q: "Fill in the types so that one variable can hold any shape.", code: J`
          ___ s = new Circle();       // the variable type is the parent
          s = new ___();              // now point it to a Square
        `, answers: ['Shape', 'Square'],
          explain: "The parent type <code>Shape</code> can refer to a Circle and later to a Square (both are Shapes)." },
        { t: 'order', q: "Arrange the lines to create an array of shapes and call <code>draw()</code> on each.",
          lines: [
            "Shape[] shapes = new Shape[2];",
            "shapes[0] = new Circle();",
            "shapes[1] = new Square();",
            "for (Shape s : shapes) {",
            "    s.draw();",
            "}"
          ],
          explain: "Create the array, fill it with different children, then loop and call the method." },
        { t: 'code', q: "Classes <code>Animal</code>, <code>Dog</code> and <code>Cat</code> are written for you (each has a <code>speak()</code> that prints). Read <code>n</code>, then <code>n</code> letters: <code>D</code> for a dog or <code>C</code> for a cat. Store the animals in an <code>Animal[]</code> and call <code>speak()</code> on each. No prompts.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Animal[] zoo = new Animal[n];
                    // fill the array, then call speak() on each animal
                }
            }

            class Animal {
                void speak() { System.out.println("..."); }
            }

            class Dog extends Animal {
                @Override
                void speak() { System.out.println("Woof!"); }
            }

            class Cat extends Animal {
                @Override
                void speak() { System.out.println("Meow!"); }
            }
          `,
          tests: [
            { stdin: J`
              3
              D
              C
              D
            `, expected: J`
              Woof!
              Meow!
              Woof!
            ` },
            { stdin: J`
              2
              C
              C
            `, expected: J`
              Meow!
              Meow!
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Animal[] zoo = new Animal[n];
                    for (int i = 0; i < n; i++) {
                        String t = sc.next();
                        if (t.equals("D")) {
                            zoo[i] = new Dog();
                        } else {
                            zoo[i] = new Cat();
                        }
                    }
                    for (Animal a : zoo) {
                        a.speak();
                    }
                }
            }

            class Animal {
                void speak() { System.out.println("..."); }
            }

            class Dog extends Animal {
                @Override
                void speak() { System.out.println("Woof!"); }
            }

            class Cat extends Animal {
                @Override
                void speak() { System.out.println("Meow!"); }
            }
          `,
          hint: "Use <code>t.equals(\"D\")</code> to compare the letter, then store <code>new Dog()</code> or <code>new Cat()</code> in <code>zoo[i]</code>.",
          explain: "The array has the parent type, so it can hold both children. Each call runs the real object's <code>speak()</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 7
    {
      title: 'instanceof, casting and getClass()',
      titleAr: 'instanceof والتحويل و getClass()',
      minutes: 30,
      body: [
        { type: 'h', en: 'Asking an object what it really is' },
        { type: 'p', en: "In the last lesson a <code>Vehicle</code> variable could hold a Car. But then we could not call Car-only methods like <code>getDoors()</code>. We need a way to ask: <i>\"Are you really a Car?\"</i> That question is the <code>instanceof</code> operator. It gives <code>true</code> or <code>false</code>.",
          ar: "instanceof تسأل الكائن: هل أنت فعلًا من هذا النوع؟ وتعطي true أو false." },
        { type: 'analogy', title: 'A sealed box labelled "Fruit"', en: "A box says \"Fruit\" on the outside. Before you peel it like a banana, you look inside: is it really a banana? <code>instanceof</code> is the look inside.",
          ar: "قبل أن تقشر الثمرة كالموز، تتأكد أنها موزة فعلًا." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal a = new Dog();
                  System.out.println(a instanceof Dog);
                  System.out.println(a instanceof Cat);
                  System.out.println(a instanceof Animal);
              }
          }

          class Animal { }

          class Dog extends Animal { }

          class Cat extends Animal { }
        `, out: J`
          true
          false
          true
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['a instanceof Dog', 'The real object is a Dog: <b>true</b>.'],
            ['a instanceof Cat', 'It is not a Cat: <b>false</b>.'],
            ['a instanceof Animal', 'A Dog is also an Animal (is-a goes upward): <b>true</b>.']
          ], ar: "instanceof تشمل الصنف نفسه وأي صنف أب له." },
        { type: 'check', q: "<code>Animal a = new Dog();</code> What is <code>a instanceof Object</code>?", options: ["true", "false"], answer: 0,
          explain: "Every object is an Object." },
        { type: 'h', en: 'Casting: opening the box' },
        { type: 'p', en: "After <code>instanceof</code> says true, you may <b>cast</b>: write the child type in brackets to tell Java \"treat this as a Car\". Now Car-only methods are allowed. Always check first. A wrong cast compiles but crashes the program with a <code>ClassCastException</code>.",
          ar: "بعد التأكد بـ instanceof نحول النوع بـ (Car) لنستطيع استدعاء دوال Car." },
        { type: 'code', code: J`
          Vehicle v = fleet[1];
          if (v instanceof Car) {          // 1. check
              Car c = (Car) v;             // 2. cast
              System.out.println(c.getDoors());   // 3. use
          }
        ` },
        { type: 'steps', title: 'Worked example: count the cars', problem: "The fleet has a bus, a car and a truck. Print the doors of every car and count how many cars there are.",
          steps: [
            { en: "<b>Step 1.</b> Loop over the <code>Vehicle[]</code> array. Each element is a <code>Vehicle</code> box." },
            { en: "<b>Step 2.</b> Ask <code>if (v instanceof Car)</code>. For the bus and truck this is false, so they are skipped." },
            { en: "<b>Step 3.</b> Inside the if, cast: <code>Car c = (Car) v;</code>. Now <code>c.getDoors()</code> is allowed.", code: J`
              if (v instanceof Car) {
                  Car c = (Car) v;
                  System.out.println(c.getDoors() + " doors");
                  cars++;
              }
            ` },
            { en: "<b>Step 4.</b> After the loop, print the counter." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Vehicle[] fleet = { new Vehicle("Bus-1"), new Car("Car-7", 4), new Truck("Trk-3") };
                    int cars = 0;
                    for (Vehicle v : fleet) {
                        if (v instanceof Car) {
                            Car c = (Car) v;
                            System.out.println(c.getDoors() + " doors");
                            cars++;
                        }
                    }
                    System.out.println("Cars: " + cars);
                }
            }

            class Vehicle {
                protected String id;

                public Vehicle(String id) { this.id = id; }
            }

            class Car extends Vehicle {
                private int doors;

                public Car(String id, int doors) {
                    super(id);
                    this.doors = doors;
                }

                public int getDoors() { return doors; }
            }

            class Truck extends Vehicle {
                public Truck(String id) { super(id); }
            }
          `, out: J`
            4 doors
            Cars: 1
          `, ar: "نتحقق بـ instanceof ثم نحول ثم نستخدم دوال Car." },
        { type: 'h', en: 'getClass(): the exact class' },
        { type: 'p', en: "<code>instanceof</code> also says true for parents. If you want the <b>exact</b> class and nothing else, use <code>getClass()</code> (from <code>Object</code>). <code>obj.getClass() == Manager.class</code> is true only when the object is exactly a Manager. <code>getClass().getSimpleName()</code> gives the class name as text.",
          ar: "getClass تعطي الصنف الفعلي بالضبط، بينما instanceof تشمل الأصناف الأب أيضًا." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Employee e = new Manager();
                  System.out.println(e instanceof Employee);
                  System.out.println(e instanceof Manager);
                  System.out.println(e.getClass() == Employee.class);
                  System.out.println(e.getClass() == Manager.class);
                  System.out.println(e.getClass().getSimpleName());
              }
          }

          class Employee { }

          class Manager extends Employee { }
        `, out: J`
          true
          true
          false
          true
          Manager
        ` },
        { type: 'table', head: ['', '<code>instanceof</code>', '<code>getClass() ==</code>'], rows: [
          ['<code>e</code> is really a Manager; test for Employee', 'true', 'false'],
          ['Test for Manager', 'true', 'true'],
          ['<code>e</code> is <code>null</code>', 'false', 'crash (NullPointerException)']
        ] },
        { type: 'check', q: "<code>Rectangle r = new Square();</code> Which expression is <b>false</b>?", options: [
            "<code>r instanceof Rectangle</code>", "<code>r instanceof Square</code>", "<code>r.getClass() == Rectangle.class</code>"
          ], answer: 2, explain: "<code>instanceof</code> accepts the class and its parents. <code>getClass()</code> is the exact class: Square, not Rectangle." },
        { type: 'note', kind: 'warn', en: "A wrong cast such as <code>(Dog) animalThatIsReallyACat</code> compiles, but crashes at run time with <code>ClassCastException</code>. Check with <code>instanceof</code> first.",
          ar: "التحويل الخاطئ يسبب خطأ أثناء التشغيل، فتحقق بـ instanceof أولًا." }
      ],
      mistakes: [
        { title: 'Casting without checking', en: "This compiles but crashes when the object is not a Car.", code: J`
          Car c = (Car) v;              // risky: check v instanceof Car first
        ` },
        { title: 'Using the wrong direction', en: "<code>instanceof</code> goes: object on the left, class on the right.", code: J`
          if (Dog instanceof a) { }     // wrong order
        ` },
        { title: 'Thinking getClass() == Parent.class is true for children', en: "<code>getClass()</code> is exact. A Manager's class is not <code>Employee.class</code>; use <code>instanceof</code> if children should count." },
        { title: 'Forgetting the brackets in a cast', en: "Without the brackets the code does not compile.", code: J`
          Car c = Car v;                // wrong
        ` }
      ],
      remember: [
        "<code>obj instanceof T</code> is true if the object is a T or a child of T.",
        "<code>instanceof</code> is false for <code>null</code>.",
        "Cast after checking: <code>if (v instanceof Car) { Car c = (Car) v; }</code>.",
        "<code>getClass()</code> returns the exact class; <code>getSimpleName()</code> gives its name.",
        "A wrong cast crashes with <code>ClassCastException</code>."
      ],
      rememberAr: "instanceof تعطي true إذا كان الكائن من هذا الصنف أو من صنف فرعي منه. نتحقق ثم نحول. getClass تعطي الصنف الفعلي. التحويل الخاطئ يوقف البرنامج.",
      practice: [
        { t: 'mcq', q: "What does <code>x instanceof Car</code> return?",
          options: ["The class of x", "true or false", "A new Car"], answer: 1,
          explain: "<code>instanceof</code> is a yes/no question: is the object a Car (or a child of Car)?" },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape s = new Square();
                  System.out.println(s instanceof Rectangle);
                  System.out.println(s instanceof Circle);
                  System.out.println(s instanceof Shape);
                  System.out.println(s.getClass().getSimpleName());
              }
          }

          class Shape { }

          class Circle extends Shape { }

          class Rectangle extends Shape { }

          class Square extends Rectangle { }
        `, answer: J`
          true
          false
          true
          Square
        `, explain: "A <code>Square</code> is a <code>Rectangle</code> and a <code>Shape</code>, but not a <code>Circle</code>. <code>getClass()</code> reports the exact class, <code>Square</code>." },
        { t: 'fill', q: "Complete the safe check and cast.", code: J`
          if (v ___ Car) {
              Car c = (___) v;
              System.out.println(c.getDoors());
          }
        `, answers: ['instanceof', 'Car'],
          explain: "Check with <code>instanceof Car</code>, then cast to <code>(Car)</code>." },
        { t: 'mcq', q: "<code>Animal a = new Cat();</code> then <code>Dog d = (Dog) a;</code>. What happens?",
          options: [
            "Compile error",
            "It compiles but throws ClassCastException when it runs",
            "It works and d points to the cat"
          ], answer: 1,
          explain: "The compiler accepts the cast (Dog is a child of Animal) but the real object is a Cat, so the program crashes at run time." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Student[] list = { new Grad(), new Student(), new Undergrad() };
                  int count = 0;
                  for (Student s : list) {
                      System.out.println(s.level());
                      if (s instanceof Student) {
                          count++;
                      }
                  }
                  System.out.println(count);
              }
          }

          class Student {
              String level() { return "student"; }
          }

          class Undergrad extends Student {
              @Override
              String level() { return "undergraduate"; }
          }

          class Grad extends Student {
              @Override
              String level() { return "graduate"; }
          }
        `, answer: J`
          graduate
          student
          undergraduate
          3
        `, explain: "Each element runs the <code>level()</code> of its real class. All three objects are instances of <code>Student</code> (directly or through a child), so the count is 3." },
        { t: 'mcq', q: "<code>Square extends Rectangle</code>, and <code>Rectangle r = new Square();</code>. Which expression is <code>false</code>?",
          options: [
            '<code>r instanceof Rectangle</code>',
            '<code>r instanceof Square</code>',
            '<code>r.getClass() == Rectangle.class</code>',
            '<code>r.getClass() == Square.class</code>'
          ], answer: 2,
          explain: "<code>instanceof</code> accepts child objects, but <code>getClass()</code> returns the exact class, which is <code>Square</code>." },
        { t: 'code', q: "Read an integer <code>n</code>, then <code>n</code> lines: either <code>E name salary</code> (an employee) or <code>M name salary bonus</code> (a manager). Create class <code>Employee</code> (name, salary, method <code>pay()</code> returning the salary, <code>toString()</code> giving <code>NAME: PAY</code>) and subclass <code>Manager</code> that overrides <code>pay()</code> to add the bonus and overrides <code>toString()</code> to give <code>NAME (manager): PAY</code>. Store everyone in one <code>Employee[]</code> array. Print each person, then <code>Total payroll: SUM</code>, then <code>Managers: COUNT</code> (count with <code>instanceof</code>). Salaries are whole numbers but use <code>double</code>. No prompts.",
          qAr: "خزّن الموظفين والمديرين في مصفوفة من نوع Employee واستخدم التجاوز و instanceof.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Employee[] staff = new Employee[n];
                    // read the staff, then print the report
                }
            }

            class Employee {
                // name, salary, constructor, pay(), toString()
            }

            class Manager extends Employee {
                // bonus, constructor using super(...), overrides
            }
          `,
          tests: [
            { stdin: J`
              3
              E Ahmed 5000
              M Sara 9000 2000
              E Ali 4500
            `, expected: J`
              Ahmed: 5000.0
              Sara (manager): 11000.0
              Ali: 4500.0
              Total payroll: 20500.0
              Managers: 1
            ` },
            { stdin: J`
              2
              M Huda 10000 2500
              M Faisal 8000 1500
            `, expected: J`
              Huda (manager): 12500.0
              Faisal (manager): 9500.0
              Total payroll: 22000.0
              Managers: 2
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Employee[] staff = new Employee[n];
                    for (int i = 0; i < n; i++) {
                        String type = sc.next();
                        String name = sc.next();
                        double salary = sc.nextDouble();
                        if (type.equals("M")) {
                            staff[i] = new Manager(name, salary, sc.nextDouble());
                        } else {
                            staff[i] = new Employee(name, salary);
                        }
                    }
                    double total = 0;
                    int managers = 0;
                    for (Employee e : staff) {
                        System.out.println(e);
                        total += e.pay();
                        if (e instanceof Manager) {
                            managers++;
                        }
                    }
                    System.out.println("Total payroll: " + total);
                    System.out.println("Managers: " + managers);
                }
            }

            class Employee {
                protected String name;
                protected double salary;

                public Employee(String name, double salary) {
                    this.name = name;
                    this.salary = salary;
                }

                public double pay() {
                    return salary;
                }

                @Override
                public String toString() {
                    return name + ": " + pay();
                }
            }

            class Manager extends Employee {
                private double bonus;

                public Manager(String name, double salary, double bonus) {
                    super(name, salary);
                    this.bonus = bonus;
                }

                @Override
                public double pay() {
                    return super.pay() + bonus;
                }

                @Override
                public String toString() {
                    return name + " (manager): " + pay();
                }
            }
          `,
          hint: "Read the type letter first; only for <code>M</code> read the extra bonus value.",
          explain: "The array has declared type <code>Employee</code>, but each element runs its own <code>pay()</code> and <code>toString()</code>. <code>instanceof Manager</code> identifies the managers." }
      ]
    }
  ],

  quiz: [
    { t: 'mcq', q: "Which relationship is best modeled with inheritance?",
      options: [
        "A Car has an Engine",
        "A Library has many Books",
        "A Manager is an Employee",
        "A Student has a GPA"
      ], answer: 2,
      explain: "Inheritance models an <i>is-a</i> relationship. <i>Has-a</i> relationships are modeled with fields (composition)." },
    { t: 'mcq', q: "Which keyword makes <code>Cat</code> a child of <code>Animal</code>?",
      options: ['<code>inherits</code>', '<code>extends</code>', '<code>super</code>', '<code>implements</code>'], answer: 1,
      explain: "<code>class Cat extends Animal</code>." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              new Laptop();
          }
      }

      class Device {
          Device() { System.out.println("Device"); }
      }

      class Computer extends Device {
          Computer() { System.out.println("Computer"); }
          Computer(String brand) {
              this();
              System.out.println("Brand " + brand);
          }
      }

      class Laptop extends Computer {
          Laptop() {
              super("Lenovo");
              System.out.println("Laptop");
          }
      }
    `, answer: J`
      Device
      Computer
      Brand Lenovo
      Laptop
    `, explain: "<code>Laptop()</code> calls <code>Computer(\"Lenovo\")</code>, which calls <code>Computer()</code>, which implicitly calls <code>Device()</code>. The bodies complete from the top: Device, Computer, Brand Lenovo, Laptop." },
    { t: 'mcq', q: "Why does Java not allow <code>class C extends A, B</code>?",
      options: [
        "Because classes A and B might be abstract",
        "To avoid ambiguity when both superclasses provide different implementations of the same method; multiple inheritance of type is done with interfaces",
        "Because a class can never have a superclass",
        "Because it would make objects too large to store"
      ], answer: 1,
      explain: "Single class inheritance avoids the diamond problem. A class can still implement several interfaces." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Employee e = new Manager("Lama", 7000);
              System.out.println(e.info());
              System.out.println(e.bonus(1000));
          }
      }

      class Employee {
          protected String name;
          protected double salary;

          Employee(String name, double salary) {
              this.name = name;
              this.salary = salary;
          }

          String info() { return name + " / " + salary; }

          double bonus(double base) { return base; }
      }

      class Manager extends Employee {
          Manager(String name, double salary) { super(name, salary); }

          @Override
          String info() { return "Manager " + super.info(); }

          @Override
          double bonus(double base) { return base * 2; }
      }
    `, answer: J`
      Manager Lama / 7000.0
      2000.0
    `, explain: "The object is a <code>Manager</code>, so its overrides run. <code>super.info()</code> supplies the base text, and <code>bonus</code> doubles 1000 to 2000.0." },
    { t: 'mcq', q: "Which access modifier lets subclasses use a field while hiding it from unrelated classes in other packages?",
      options: ['<code>private</code>', '<code>protected</code>', '<code>public</code>', '<code>static</code>'], answer: 1,
      explain: "<code>protected</code> members are visible to subclasses and the same package. <code>static</code> is not an access modifier." },
    { t: 'mcq', q: "In a UML class diagram, how is <i>Circle extends Shape</i> drawn?",
      options: [
        "A dashed line with an open arrow from Shape to Circle",
        "A solid line with a hollow triangle at the Shape end",
        "A solid line with a filled diamond at the Circle end",
        "Circle is drawn inside the Shape box"
      ], answer: 1,
      explain: "Inheritance is a solid line whose hollow triangle points to the superclass." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Object[] items = { new Pen(), new Pencil(), "Notebook" };
              for (Object o : items) {
                  if (o instanceof Pen) {
                      System.out.println("Pen family: " + o.getClass().getSimpleName());
                  } else {
                      System.out.println("Other: " + o.getClass().getSimpleName());
                  }
              }
          }
      }

      class Pen { }

      class Pencil { }
    `, answer: J`
      Pen family: Pen
      Other: Pencil
      Other: String
    `, explain: "<code>Pencil</code> does not extend <code>Pen</code>, so only the first item passes the test. <code>getSimpleName()</code> of a String object is <code>String</code>." },
    { t: 'mcq', q: "<code>Square extends Rectangle</code>, and <code>Rectangle r = new Square();</code>. Which expression is <code>false</code>?",
      options: [
        '<code>r instanceof Rectangle</code>',
        '<code>r instanceof Square</code>',
        '<code>r.getClass() == Rectangle.class</code>',
        '<code>r.getClass() == Square.class</code>'
      ], answer: 2,
      explain: "<code>instanceof</code> accepts subclasses, but <code>getClass()</code> returns the exact class, which is <code>Square</code>, not <code>Rectangle</code>." },
    { t: 'mcq', q: "Which pair is an example of <b>overloading</b>?",
      options: [
        "<code>Animal.speak()</code> and <code>Dog.speak()</code>",
        "<code>toString()</code> in <code>Object</code> and in <code>Student</code>",
        "<code>area()</code> and <code>area(double scale)</code> in the same class",
        "<code>pay()</code> in <code>Employee</code> and <code>pay()</code> in <code>Manager</code>"
      ], answer: 2,
      explain: "Overloading means the same name with a different parameter list. The other pairs have identical signatures in a superclass and subclass, which is overriding." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Account a = new Account(100);
              Account b = new Account(100);
              Account c = new Premium(100);
              System.out.println(a.equals(b));
              System.out.println(a.equals(c));
              System.out.println(c);
          }
      }

      class Account {
          protected int balance;

          Account(int balance) { this.balance = balance; }

          @Override
          public boolean equals(Object o) {
              if (o == null || getClass() != o.getClass()) return false;
              return balance == ((Account) o).balance;
          }

          @Override
          public String toString() { return getClass().getSimpleName() + "[" + balance + "]"; }
      }

      class Premium extends Account {
          Premium(int balance) { super(balance); }
      }
    `, answer: J`
      true
      false
      Premium[100]
    `, explain: "<code>equals</code> uses <code>getClass()</code>, so an <code>Account</code> and a <code>Premium</code> are never equal even with the same balance. The inherited <code>toString()</code> calls <code>getClass()</code> on the actual object, giving <code>Premium</code>." }
  ],

  lab: {
    t: 'code',
    q: "<b>Mini project: Vehicle rental.</b> Build the hierarchy <code>Vehicle</code> &rarr; <code>Car</code>, <code>Truck</code>. <code>Vehicle</code> has private <code>id</code> (String) and <code>dailyRate</code> (int), getters, and <code>int rentalCost(int days)</code> returning <code>dailyRate * days</code>. <code>Car</code> overrides <code>rentalCost</code>: every 7th day is free, so it charges <code>dailyRate * (days - days / 7)</code>. <code>Truck</code> adds an int <code>tons</code> and overrides <code>rentalCost</code> to return the normal cost (use <code>super.rentalCost(days)</code>) plus <code>20 * tons</code>. Constructors must use <code>super(...)</code>.<br>Input: the number of rental <code>days</code>, then <code>n</code>, then <code>n</code> lines: <code>CAR id rate</code>, <code>TRUCK id rate tons</code>, or <code>VEHICLE id rate</code>. Store all of them in a <code>Vehicle[]</code>. For each print <code>ID (ClassName): COST</code> using <code>getClass().getSimpleName()</code>, then <code>Total: SUM</code>. No prompts.<br><b>Plan:</b> (1) write Vehicle first; (2) write Car and Truck; (3) read the input and fill the array; (4) loop and print.",
    qAr: "مشروع مصغر: هرمية مركبات للتأجير مع تجاوز دالة التكلفة واستخدام super و getClass.",
    starter: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int days = sc.nextInt();
              int n = sc.nextInt();
              Vehicle[] fleet = new Vehicle[n];
              // read vehicles, then print each cost and the total
          }
      }

      class Vehicle {
          // id, dailyRate, constructor, getters, rentalCost(int days)
      }

      class Car extends Vehicle {
          // constructor, override rentalCost
      }

      class Truck extends Vehicle {
          // tons, constructor, override rentalCost
      }
    `,
    tests: [
      { stdin: J`
        10
        3
        CAR C1 150
        TRUCK T1 300 5
        VEHICLE V1 200
      `, expected: J`
        C1 (Car): 1350
        T1 (Truck): 3100
        V1 (Vehicle): 2000
        Total: 6450
      ` },
      { stdin: J`
        7
        2
        CAR C9 100
        TRUCK T2 250 0
      `, expected: J`
        C9 (Car): 600
        T2 (Truck): 1750
        Total: 2350
      ` }
    ],
    solution: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int days = sc.nextInt();
              int n = sc.nextInt();
              Vehicle[] fleet = new Vehicle[n];
              for (int i = 0; i < n; i++) {
                  String type = sc.next();
                  String id = sc.next();
                  int rate = sc.nextInt();
                  if (type.equals("CAR")) {
                      fleet[i] = new Car(id, rate);
                  } else if (type.equals("TRUCK")) {
                      fleet[i] = new Truck(id, rate, sc.nextInt());
                  } else {
                      fleet[i] = new Vehicle(id, rate);
                  }
              }
              int total = 0;
              for (Vehicle v : fleet) {
                  int cost = v.rentalCost(days);
                  total += cost;
                  System.out.println(v.getId() + " (" + v.getClass().getSimpleName() + "): " + cost);
              }
              System.out.println("Total: " + total);
          }
      }

      class Vehicle {
          private String id;
          private int dailyRate;

          public Vehicle(String id, int dailyRate) {
              this.id = id;
              this.dailyRate = dailyRate;
          }

          public String getId() { return id; }
          public int getDailyRate() { return dailyRate; }

          public int rentalCost(int days) {
              return dailyRate * days;
          }
      }

      class Car extends Vehicle {
          public Car(String id, int dailyRate) {
              super(id, dailyRate);
          }

          @Override
          public int rentalCost(int days) {
              return getDailyRate() * (days - days / 7);
          }
      }

      class Truck extends Vehicle {
          private int tons;

          public Truck(String id, int dailyRate, int tons) {
              super(id, dailyRate);
              this.tons = tons;
          }

          @Override
          public int rentalCost(int days) {
              return super.rentalCost(days) + 20 * tons;
          }
      }
    `,
    hint: "<code>dailyRate</code> is private in <code>Vehicle</code>, so <code>Car</code> must use <code>getDailyRate()</code>. For 10 days a car pays for 10 - 10/7 = 9 days.",
    explain: "The loop calls <code>rentalCost</code> through <code>Vehicle</code> references, but each object runs its own override. <code>Truck</code> reuses the parent's formula with <code>super.rentalCost(days)</code>, and <code>getClass().getSimpleName()</code> reports the real class."
  },

  cheats: [
    { code: J`class Manager extends Employee { ... }`, note: 'Manager inherits the accessible fields and methods of Employee' },
    { code: J`class Duck extends Animal implements Swimmer, Flyer { }`, note: 'One superclass only; many interfaces allowed' },
    { code: J`
      Manager(String name, double salary, int team) {
          super(name, salary);
          this.team = team;
      }
    `, note: 'super(...) must be the first statement; otherwise super() is inserted' },
    { code: J`return super.toString() + ", " + doors;`, note: 'Call the superclass version of an overridden method' },
    { code: J`
      @Override
      public double pay() { return super.pay() + bonus; }
    `, note: 'Override: same signature; @Override lets the compiler check it' },
    { code: J`void print(int x) { }   void print(String s) { }`, note: 'Overloading: same name, different parameters' },
    { code: J`protected double balance;`, note: 'Visible to subclasses and the same package (# in UML)' },
    { code: J`Vehicle v = new Car("C1", 4);`, note: 'Superclass reference to a subclass object' },
    { code: J`if (v instanceof Car) { Car c = (Car) v; }`, note: 'Check before downcasting' },
    { code: J`v.getClass().getSimpleName()`, note: 'Exact run-time class name, e.g. Car' }
  ],

  glossary: [
    { term: 'Inheritance', ar: 'الوراثة', def: 'A mechanism where a class reuses and extends the fields and methods of another class.' },
    { term: 'Is-a relationship', ar: 'علاقة "هو"', def: 'The test for inheritance: "A Car is a Vehicle". If the sentence is true, extends fits.' },
    { term: 'Superclass', ar: 'الصنف الأب', def: 'The more general class that another class extends (also parent or base class).' },
    { term: 'Subclass', ar: 'الصنف الفرعي', def: 'The more specific class that extends a superclass (also child or derived class).' },
    { term: 'Object class', ar: 'الصنف Object', def: 'java.lang.Object, the root of every Java class hierarchy.' },
    { term: 'Single inheritance', ar: 'الوراثة الأحادية', def: 'The Java rule that a class may extend only one class.' },
    { term: 'super', ar: 'super', def: 'Keyword to call a superclass constructor, super(...), or a superclass method, super.m().' },
    { term: 'Constructor chaining', ar: 'تسلسل المُنشئات', def: 'Each constructor calls a superclass constructor first, so bodies run from the top of the hierarchy down.' },
    { term: 'Overriding', ar: 'التجاوز', def: 'Redefining an inherited method in a subclass with the same signature.' },
    { term: 'Overloading', ar: 'التحميل الزائد', def: 'Defining methods with the same name but different parameter lists.' },
    { term: '@Override', ar: 'التعليق @Override', def: 'An annotation that makes the compiler verify a method really overrides an inherited one.' },
    { term: 'protected', ar: 'محمي', def: 'Access level allowing the class, its package, and its subclasses.' },
    { term: 'Declared type', ar: 'النوع المعلن', def: 'The type written on the left of a variable declaration; it decides which methods you may call.' },
    { term: 'Actual type', ar: 'النوع الفعلي', def: 'The real class of the object; it decides which overridden method runs.' },
    { term: 'Casting', ar: 'التحويل (cast)', def: 'Writing a type in brackets, such as (Car) v, to treat a parent reference as a child type.' },
    { term: 'instanceof', ar: 'instanceof', def: 'Operator that tests whether an object is an instance of a class or any of its subclasses.' },
    { term: 'getClass()', ar: 'getClass()', def: 'Object method returning the exact run-time class of an object.' },
    { term: 'Class hierarchy', ar: 'هرمية الأصناف', def: 'The tree of classes formed by inheritance, with Object at the root.' }
  ]
});
