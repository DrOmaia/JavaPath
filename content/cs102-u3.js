JP.unit({
  course: 'cs102',
  key: 3,
  n: 4,
  title: 'Inheritance',
  titleAr: 'الوراثة',
  intro: "Inheritance lets you build a new class on top of an existing one. A Manager is an Employee, a Car is a Vehicle: the new class reuses what the old class already has and adds only what is special. In this unit you go slowly, step by step: the is-a idea, extends, the Object class, super, constructor order, overriding, protected, superclass references, instanceof and getClass(). Then you design hierarchies from a story, write toString and equals for a family of classes, use final and the four access levels, choose between is-a and has-a, and build a complete university people system.",
  introAr: "الوراثة تسمح ببناء صنف جديد فوق صنف موجود: المدير موظف، والسيارة مركبة. الصنف الفرعي يعيد استخدام ما في الصنف الأب ويضيف ما يميزه. سنتقدم ببطء وخطوة خطوة، ثم نصمم هرميات كاملة ونختار بين الوراثة والتركيب، وننهي بدراسة حالة لنظام أفراد الجامعة.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'The is-a idea and extends',
      titleAr: 'فكرة "هو" و extends',
      minutes: 35,
      body: [
        { type: 'h', en: 'Families of things' },
        { type: 'p', en: "Imagine you write classes for <code>Student</code> and <code>Teacher</code>. Both have a name and an age. Both can introduce themselves. If you copy the same code into both classes, you must fix every mistake twice. <b>Inheritance</b> solves this: you write the shared part <b>once</b> and let other classes reuse it.",
          ar: "بدل نسخ الكود نفسه في أكثر من صنف، نكتبه مرة واحدة ونجعل الأصناف الأخرى تعيد استخدامه. هذه هي الوراثة." },
        { type: 'code', code: J`
          class Student {
              String name;                  // same in Teacher
              int age;                      // same in Teacher
              String studentId;             // only students

              void introduce() {            // same in Teacher
                  System.out.println("I am " + name);
              }
          }

          class Teacher {
              String name;                  // copied
              int age;                      // copied
              String subject;               // only teachers

              void introduce() {            // copied
                  System.out.println("I am " + name);
              }
          }
        ` },
        { type: 'p', en: "Count the copied lines: the name, the age and the whole <code>introduce()</code> method. Only one field in each class is really different. Now imagine the university asks you to print <code>\"My name is ...\"</code> instead of <code>\"I am ...\"</code>. You must change two classes, and it is easy to forget one. With ten kinds of people (students, teachers, guards, librarians...) you would copy the same code ten times. Copying code is the problem; inheritance is the cure." },
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
        { type: 'table', head: ['The general class (top)', 'The special class (below)'], rows: [
            ['superclass', 'subclass'],
            ['parent class', 'child class'],
            ['base class', 'derived class']
          ] },
        { type: 'p', en: "The three words in each column mean the same thing. Books, teachers and exams use all of them, so learn to recognise them. In this unit we mostly say <b>parent</b> and <b>child</b>, because they are short and easy to remember.",
          ar: "الكلمات في كل عمود لها المعنى نفسه: الأب (superclass) والابن (subclass)." },
        { type: 'h', en: 'The is-a test' },
        { type: 'p', en: "How do you know that two classes belong in one family? Say the sentence <i>\"A ___ is a ___\"</i>. If it sounds right, inheritance fits. If it sounds wrong, it does not.",
          ar: "اختبار \"هو\": قل \"س هو ص\". إذا كانت الجملة صحيحة فالوراثة مناسبة." },
        { type: 'list', items: [
          "A Car <b>is a</b> Vehicle. True, so use inheritance.",
          "A Manager <b>is an</b> Employee. True, so use inheritance.",
          "A Car <b>is an</b> Engine. False! A Car <b>has an</b> Engine. That is a field inside Car, not inheritance."
        ] },
        { type: 'p', en: "The test works in <b>one direction</b> only. Every car is a vehicle, but not every vehicle is a car (it may be a bus). So the child is always the <b>more special</b> class, and the parent is the <b>more general</b> class. You will practise choosing between is-a and has-a in Lesson 11." },
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
        { type: 'h', en: 'What exactly does the child get?' },
        { type: 'table', head: ['Part of the parent', 'Does the child get it?'], rows: [
            ['Fields (for example <code>name</code>)', 'Yes. Every child object has a place for them.'],
            ['Methods (for example <code>eat()</code>)', 'Yes. The child can call them as if it wrote them.'],
            ['Constructors', 'No. Each class writes its own constructors (Lesson 3).'],
            ['<code>private</code> fields and methods', 'They are inside the child object, but child code cannot use their names (Lessons 3 and 5).']
          ] },
        { type: 'p', en: "A family can have more than two levels. A child of a child gets everything from <b>all</b> the classes above it. In the next program, <code>Manager</code> extends <code>Employee</code>, and <code>Employee</code> extends <code>Person</code>. A Manager object can call a method written two levels up.",
          ar: "الحفيد يرث من أبيه ومن جده أيضًا؛ كل ما في الأعلى يصل إلى الأسفل." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Manager m = new Manager();
                  m.name = "Noura";
                  m.sayHello();     // written in Person (grandparent)
                  m.work();         // written in Employee (parent)
                  m.lead();         // written in Manager itself
              }
          }

          class Person {
              String name;

              void sayHello() {
                  System.out.println("Hello, I am " + name);
              }
          }

          class Employee extends Person {
              void work() {
                  System.out.println(name + " is working");
              }
          }

          class Manager extends Employee {
              void lead() {
                  System.out.println(name + " leads the team");
              }
          }
        `, out: J`
          Hello, I am Noura
          Noura is working
          Noura leads the team
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['m.name = "Noura";', '<code>name</code> is declared in <code>Person</code>. Manager has it through Employee.'],
            ['m.sayHello();', 'Java looks in <code>Manager</code>: not there. In <code>Employee</code>: not there. In <code>Person</code>: found. It runs.'],
            ['m.work();', 'Found in <code>Employee</code>, one level up.'],
            ['m.lead();', 'Found at once in <code>Manager</code>.']
          ], ar: "تبحث جافا عن الدالة في صنف الكائن أولًا، ثم تصعد إلى الأب ثم الجد حتى تجدها." },
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
        { type: 'h', en: 'One object, two parts' },
        { type: 'p', en: "Many students think that <code>new Manager()</code> makes two objects: an Employee and a Manager. It does not. Java makes <b>one</b> object. Inside it there is a place for every field: the fields written in <code>Employee</code> and the field written in <code>Manager</code>. Step through the picture." },
        { type: 'memory', title: 'Inside a Manager object', code: J`
            Manager m = new Manager();
            m.name = "Khalid";
            m.salary = 15000;
            m.teamSize = 6;
          `, frames: [
            { label: 'After <code>Manager m = new Manager();</code> All fields start with default values.',
              vars: [{ name: 'm', type: 'Manager', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Manager', fields: [{ name: 'name (from Employee)', value: 'null' }, { name: 'salary (from Employee)', value: '0.0' }, { name: 'teamSize', value: '0' }] }] },
            { label: 'After <code>m.name = "Khalid";</code> and <code>m.salary = 15000;</code>',
              vars: [{ name: 'm', type: 'Manager', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Manager', fields: [{ name: 'name (from Employee)', value: '"Khalid"' }, { name: 'salary (from Employee)', value: '15000.0' }, { name: 'teamSize', value: '0' }] }] },
            { label: 'After <code>m.teamSize = 6;</code> One object holds all three fields.',
              vars: [{ name: 'm', type: 'Manager', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Manager', fields: [{ name: 'name (from Employee)', value: '"Khalid"' }, { name: 'salary (from Employee)', value: '15000.0' }, { name: 'teamSize', value: '6' }] }] }
          ], ar: "كائن واحد فقط فيه حقول الأب (name و salary) وحقل الابن (teamSize) معًا." },
        { type: 'check', q: "How many objects does <code>new Manager()</code> create?", options: [
            "One Manager object that also holds the Employee fields",
            "Two objects: one Employee and one Manager",
            "None, until you call a method"
          ], answer: 0, explain: "There is one object. Its class is <code>Manager</code>, and it contains a place for every inherited field as well as its own.",
          ar: "كائن واحد يحمل الجزأين معًا." },
        { type: 'steps', title: 'Worked example: Student and Teacher share Person', problem: "Go back to the copied <code>Student</code> and <code>Teacher</code> classes at the start of this lesson. Rewrite them so that the shared code is written only once.",
          steps: [
            { en: "<b>Step 1.</b> Find what both classes share: <code>name</code>, <code>age</code> and <code>introduce()</code>. Put them in a new parent class <code>Person</code>.", code: J`
              class Person {
                  String name;
                  int age;

                  void introduce() {
                      System.out.println("I am " + name + ", " + age + " years old");
                  }
              }
            ` },
            { en: "<b>Step 2.</b> <code>Student extends Person</code> and adds only what is special: <code>studentId</code> and <code>showId()</code>.", code: J`
              class Student extends Person {
                  String studentId;

                  void showId() {
                      System.out.println("My student ID is " + studentId);
                  }
              }
            ` },
            { en: "<b>Step 3.</b> <code>Teacher extends Person</code> in the same way and adds <code>subject</code> and <code>showSubject()</code>." },
            { en: "<b>Step 4.</b> In <code>main</code>, make one Student and one Teacher. Both call <code>introduce()</code>, which is written only once, in <code>Person</code>." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Student s = new Student();
                    s.name = "Reem";
                    s.age = 19;
                    s.studentId = "S-2231";

                    Teacher t = new Teacher();
                    t.name = "Dr. Fahad";
                    t.age = 45;
                    t.subject = "Java";

                    s.introduce();
                    s.showId();
                    t.introduce();
                    t.showSubject();
                }
            }

            class Person {
                String name;
                int age;

                void introduce() {
                    System.out.println("I am " + name + ", " + age + " years old");
                }
            }

            class Student extends Person {
                String studentId;

                void showId() {
                    System.out.println("My student ID is " + studentId);
                }
            }

            class Teacher extends Person {
                String subject;

                void showSubject() {
                    System.out.println("I teach " + subject);
                }
            }
          `, out: J`
            I am Reem, 19 years old
            My student ID is S-2231
            I am Dr. Fahad, 45 years old
            I teach Java
          `, ar: "كتبنا introduce مرة واحدة في Person، واستخدمها الطالب والمعلم معًا." },
        { type: 'p', en: "Now, if the message must change, you edit <b>one</b> line in <code>Person</code> and both classes change together. That is the real gift of inheritance: less code, and one place to fix." },
        { type: 'h', en: 'Drawing inheritance in UML' },
        { type: 'p', en: "In Unit 2 you drew one class as a box. In UML, inheritance is a <b>solid line</b> from the child to the parent, with a <b>hollow (empty) triangle</b> touching the parent. Read the arrow as \"is a\". The child box lists only its <b>new</b> members; it does not repeat the parent's.",
          ar: "في UML نرسم الوراثة بخط متصل ينتهي بمثلث فارغ يشير إلى الأب." },
        { type: 'code', code: J`
                  +-----------------+
                  |     Person      |
                  +-----------------+
                  | name : String   |
                  | age : int       |
                  +-----------------+
                  | introduce()     |
                  +-----------------+
                          △        hollow triangle = "is a"
                          |
                 +--------+----------+
                 |                   |
          +---------------+  +----------------+
          |    Student    |  |    Teacher     |
          +---------------+  +----------------+
          | studentId     |  | subject        |
          +---------------+  +----------------+
          | showId()      |  | showSubject()  |
          +---------------+  +----------------+
        ` },
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
        { title: 'Copying the parent field again', en: "Do not declare <code>name</code> again in the child. It already has it. Declaring it again creates a <b>second</b> <code>name</code> inside the same object. Code in Manager uses one, code in Employee uses the other, and you get strange <code>null</code> values (see practice exercise 9).", code: J`
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
        "Constructors are not inherited. <code>new Manager()</code> makes <b>one</b> object that holds the parent's fields and its own.",
        "Draw the family as a tree, general class at the top. In UML a hollow triangle points to the parent."
      ],
      rememberAr: "نكتب الكود المشترك مرة واحدة في الصنف الأب. نختبر بجملة \"هو\". نكتب class Child extends Parent. الابن يأخذ حقول ودوال الأب ويضيف الخاص به. المُنشئات لا تُورث، والكائن الفرعي كائن واحد فيه حقول الأب والابن.",
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
          explain: "<code>Student</code> gets <code>name</code> and <code>greet()</code> from <code>Person</code> and adds only <code>major</code> and <code>showMajor()</code>." },
        { t: 'bug', q: "This program does not compile: the compiler says it cannot find <code>name</code> in <code>Manager</code>. Tap the line with the bug.",
          qAr: "البرنامج لا يُترجم. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Manager m = new Manager();
                    m.name = "Huda";
                    m.teamSize = 4;
                    m.lead();
                }
            }
            class Employee {
                String name;
            }
            class Manager {
                int teamSize;
                void lead() { System.out.println(name + " leads " + teamSize + " people"); }
            }
          `, bug: 12,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Manager m = new Manager();
                    m.name = "Huda";
                    m.teamSize = 4;
                    m.lead();
                }
            }
            class Employee {
                String name;
            }
            class Manager extends Employee {
                int teamSize;
                void lead() { System.out.println(name + " leads " + teamSize + " people"); }
            }
          `,
          hint: "Which class is supposed to have <code>name</code>? How does Manager get it?",
          explain: "<code>Manager</code> never says <code>extends Employee</code>, so it is a separate class with no <code>name</code> field. Adding <code>extends Employee</code> on line 12 gives Manager the inherited field, and the program prints <code>Huda leads 4 people</code>.",
          explainAr: "نسي{{g:تَ|تِ}} كلمة extends، فلم يرث Manager الحقل name." },
        { t: 'bug', q: "This program compiles, but it prints <code>null is working</code> instead of <code>Khalid is working</code>. Tap the line with the bug.",
          qAr: "البرنامج يطبع null بدل الاسم. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Manager m = new Manager();
                    m.name = "Khalid";
                    m.work();
                }
            }
            class Employee {
                String name;
                void work() { System.out.println(name + " is working"); }
            }
            class Manager extends Employee {
                String name;
                int teamSize;
            }
          `, bug: 13,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Manager m = new Manager();
                    m.name = "Khalid";
                    m.work();
                }
            }
            class Employee {
                String name;
                void work() { System.out.println(name + " is working"); }
            }
            class Manager extends Employee {
                int teamSize;
            }
          `,
          hint: "How many fields called <code>name</code> does a Manager object have?",
          explain: "Line 13 declares a <b>second</b> <code>name</code> in Manager. <code>m.name = \"Khalid\"</code> fills Manager's copy, but <code>work()</code> is written in Employee and reads Employee's copy, which is still <code>null</code>. Delete line 13: Manager already inherits <code>name</code>.",
          explainAr: "لا تكرر حقل الأب في الابن؛ فهو موروث أصلًا." },
        { t: 'code', q: "Class <code>Vehicle</code> is written for you (fields <code>plate</code> and <code>wheels</code>, method <code>move()</code>). Write class <code>Bus</code> that extends <code>Vehicle</code>, adds an <code>int seats</code> field and a method <code>busInfo()</code> that prints <code>Bus PLATE has SEATS seats</code>. <code>main</code> reads a plate (one word) and the number of seats. No prompts.",
          qAr: "اكتب الصنف Bus الذي يرث من Vehicle ويضيف الحقل seats والدالة busInfo.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String plate = sc.next();
                    int seats = sc.nextInt();
                    Bus b = new Bus();
                    b.plate = plate;
                    b.wheels = 6;
                    b.seats = seats;
                    b.move();
                    b.busInfo();
                }
            }

            class Vehicle {
                String plate;
                int wheels;

                void move() {
                    System.out.println(plate + " moves on " + wheels + " wheels");
                }
            }

            // write class Bus here
          `,
          tests: [
            { stdin: J`
              RUH-4521 40
            `, expected: J`
              RUH-4521 moves on 6 wheels
              Bus RUH-4521 has 40 seats
            ` },
            { stdin: J`
              JED-1180 25
            `, expected: J`
              JED-1180 moves on 6 wheels
              Bus JED-1180 has 25 seats
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String plate = sc.next();
                    int seats = sc.nextInt();
                    Bus b = new Bus();
                    b.plate = plate;
                    b.wheels = 6;
                    b.seats = seats;
                    b.move();
                    b.busInfo();
                }
            }

            class Vehicle {
                String plate;
                int wheels;

                void move() {
                    System.out.println(plate + " moves on " + wheels + " wheels");
                }
            }

            class Bus extends Vehicle {
                int seats;

                void busInfo() {
                    System.out.println("Bus " + plate + " has " + seats + " seats");
                }
            }
          `,
          hint: "Write <code>class Bus extends Vehicle {</code>. Do not declare <code>plate</code> again: it is inherited.",
          explain: "<code>Bus</code> inherits <code>plate</code>, <code>wheels</code> and <code>move()</code>, and adds only <code>seats</code> and <code>busInfo()</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'The Object class and single inheritance',
      titleAr: 'الصنف Object والوراثة الأحادية',
      minutes: 30,
      body: [
        { type: 'h', en: 'Every class has a parent' },
        { type: 'p', en: "So far we wrote <code>extends</code> ourselves. But what about a class like <code>Pet</code> that has no <code>extends</code> at all? Java quietly adds one for you: <code>extends Object</code>. <code>Object</code> is a built-in class that sits at the very top of every family tree.",
          ar: "إذا لم تكتب extends فإن جافا تضيف extends Object تلقائيًا. الصنف Object هو أصل كل الأصناف." },
        { type: 'code', code: J`
          class Pet { }                     // what you write
          class Pet extends Object { }      // what Java understands
        ` },
        { type: 'p', en: "Why does Java do this? Because some jobs are needed by <b>every</b> object of <b>every</b> class: turning itself into text for printing, comparing itself with another object, and telling which class it belongs to. Java writes these jobs once, in <code>Object</code>, and every class inherits them. It is the same idea as Lesson 1, used by Java itself." },
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
        { type: 'p', en: "Why is <code>p.equals(q)</code> true but <code>p.equals(r)</code> false? The <code>equals</code> inherited from <code>Object</code> does not look at fields at all. It only asks one question: <i>do both variables point to the <b>same</b> object?</i> Follow the arrows in the picture." },
        { type: 'memory', title: 'What the default equals() compares', code: J`
            Pet p = new Pet();
            Pet q = p;
            Pet r = new Pet();
          `, frames: [
            { label: 'After <code>Pet p = new Pet();</code>', vars: [{ name: 'p', type: 'Pet', ref: 'A' }], objects: [{ id: 'A', cls: 'Pet', fields: [] }] },
            { label: 'After <code>Pet q = p;</code> No new object: q gets a copy of the arrow.', vars: [{ name: 'p', type: 'Pet', ref: 'A' }, { name: 'q', type: 'Pet', ref: 'A' }], objects: [{ id: 'A', cls: 'Pet', fields: [] }] },
            { label: 'After <code>Pet r = new Pet();</code> A second object. <code>p.equals(q)</code> is true (same arrow), <code>p.equals(r)</code> is false.', vars: [{ name: 'p', type: 'Pet', ref: 'A' }, { name: 'q', type: 'Pet', ref: 'A' }, { name: 'r', type: 'Pet', ref: 'B' }], objects: [{ id: 'A', cls: 'Pet', fields: [] }, { id: 'B', cls: 'Pet', fields: [] }] }
          ], ar: "equals الموروثة من Object تسأل فقط: هل يشير المتغيران إلى الكائن نفسه؟" },
        { type: 'note', kind: 'tip', en: "Usually you want two objects with the same data to be equal (two books with the same ISBN). To do that you replace <code>equals</code> with your own version. You will learn how in Lesson 9." },
        { type: 'h', en: 'Replacing toString()' },
        { type: 'p', en: "If you print an object without writing <code>toString()</code>, Java uses the <code>toString()</code> inherited from <code>Object</code>. It shows the class name, the sign <code>@</code> and a code number, like <code>Book@1b6d3586</code>. The number changes from run to run and tells you nothing about the book." },
        { type: 'code', code: J`
          Book b = new Book();
          System.out.println(b);       // prints something like Book@1b6d3586
        ` },
        { type: 'p', en: "That is not useful. You can write your own <code>toString()</code> in your class to replace the one from <code>Object</code>. You already met this in Unit 2; here is a small reminder." },
        { type: 'code', code: J`
          class Book {
              String title;

              @Override
              public String toString() {
                  return "Book: " + title;
              }
          }
        ` },
        { type: 'p', en: "When <code>println(book)</code> runs, Java calls <code>toString()</code> for you. Your text appears. Java also calls it when you join an object to a String with <code>+</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Book b = new Book("Data Structures");
                  System.out.println(b);                // println calls toString()
                  String line = "On my desk: " + b;     // + also calls toString()
                  System.out.println(line);
              }
          }

          class Book {
              String title;

              Book(String title) {
                  this.title = title;
              }

              @Override
              public String toString() {
                  return "Book: " + title;
              }
          }
        `, out: J`
          Book: Data Structures
          On my desk: Book: Data Structures
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['System.out.println(b);', 'You pass an object. <code>println</code> asks it for text by calling <code>b.toString()</code>.'],
            ['"On my desk: " + b', 'A String plus an object: Java calls <code>b.toString()</code> and joins the two texts.'],
            ['@Override public String toString()', 'Our version replaces the one from <code>Object</code>, so our text appears instead of <code>Book@...</code>.']
          ], ar: "println وعلامة + تستدعيان toString تلقائيًا، فتظهر نسختنا بدل النص الغريب." },
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
        { type: 'h', en: 'One parent, but many levels' },
        { type: 'p', en: "Be careful with the word \"single\". It means <b>one direct parent</b>. It does <b>not</b> mean one level. A chain of parents, grandparents and great-grandparents is completely legal. This is called <b>multi-level inheritance</b>. What Java forbids is <b>multiple inheritance</b>: two parents for one class.",
          ar: "الوراثة متعددة المستويات (أب ثم جد) مسموحة. الممنوع هو أن يكون للصنف أبوان." },
        { type: 'code', code: J`
          Object
            └── Person
                  └── Employee
                        └── Manager     <- one parent (Employee), three ancestors above it
        ` },
        { type: 'table', head: ['', 'Multi-level', 'Multiple'], rows: [
            ['Shape', 'A chain: C extends B, B extends A', 'One class with two parents: C extends A, B'],
            ['Example', '<code>Manager extends Employee</code>, <code>Employee extends Person</code>', '<code>TeachingAssistant extends Student, Employee</code>'],
            ['Allowed in Java?', 'Yes', 'No (compile error)']
          ] },
        { type: 'check', q: "Which design is legal in Java?", options: [
            "<code>class B extends A { }</code> and <code>class C extends B { }</code>",
            "<code>class C extends A, B { }</code>",
            "Both of them"
          ], answer: 0, explain: "A chain (multi-level) is fine: every class still has one direct parent. Two classes after <code>extends</code> is multiple inheritance, which Java does not allow." },
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
        { type: 'steps', title: 'Worked example: three levels of bank accounts', problem: "A bank has a basic account (you can deposit), a savings account (it also earns profit), and a student savings account (the bank also gives students a gift of 50 SAR). Build the chain and check that a student account can use the methods of all three levels.",
          steps: [
            { en: "<b>Step 1.</b> The top class <code>Account</code> has a <code>balance</code> and <code>deposit()</code>. It has no <code>extends</code>, so its parent is <code>Object</code>.", code: J`
              class Account {
                  int balance;

                  void deposit(int amount) {
                      balance += amount;
                  }
              }
            ` },
            { en: "<b>Step 2.</b> <code>Savings extends Account</code> and adds <code>addProfit()</code>. It uses the inherited <code>balance</code>.", code: J`
              class Savings extends Account {
                  void addProfit(int percent) {
                      balance += balance * percent / 100;
                  }
              }
            ` },
            { en: "<b>Step 3.</b> <code>StudentSavings extends Savings</code>. Its <code>addGift()</code> calls <code>deposit()</code>, a method from its <b>grandparent</b>.", code: J`
              class StudentSavings extends Savings {
                  void addGift() {
                      deposit(50);
                  }
              }
            ` },
            { en: "<b>Step 4.</b> Trace the balance: deposit 1000, so 1000. Profit 10%: 1000 + 100 = 1100. Gift: 1100 + 50 = 1150." },
            { en: "<b>Step 5.</b> <code>getClass().getName()</code> (from <code>Object</code>, the top of the chain) tells the exact class of the object." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    StudentSavings s = new StudentSavings();
                    s.deposit(1000);       // from Account (grandparent)
                    s.addProfit(10);       // from Savings (parent)
                    s.addGift();           // its own method
                    System.out.println("Balance: " + s.balance);
                    System.out.println("Class: " + s.getClass().getName());
                }
            }

            class Account {
                int balance;

                void deposit(int amount) {
                    balance += amount;
                }
            }

            class Savings extends Account {
                void addProfit(int percent) {
                    balance += balance * percent / 100;
                }
            }

            class StudentSavings extends Savings {
                void addGift() {
                    deposit(50);
                }
            }
          `, out: J`
            Balance: 1150
            Class: StudentSavings
          `, ar: "سلسلة من ثلاثة مستويات: الحفيد يستخدم دوال الأب والجد، وكلها ترث في النهاية من Object." },
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
        "A class can extend <b>only one</b> class (single inheritance), but chains of many levels are fine.",
        "The default <code>equals</code> only checks \"same object\"; <code>println</code> and <code>+</code> call <code>toString()</code> for you.",
        "Write <code>@Override</code> when you replace a method such as <code>toString()</code>."
      ],
      rememberAr: "كل صنف يرث من Object. وإن لم تكتب extends تضيفها جافا. الصنف يرث من صنف واحد فقط، لكن السلسلة متعددة المستويات مسموحة. اكتب @Override عند استبدال toString.",
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
          explain: "<code>println(c)</code> calls <code>c.toString()</code>, which replaces the version inherited from <code>Object</code>." },
        { t: 'bug', q: "The student expected <code>Java (3 hours)</code>, but the program prints something like <code>Course@5ca881b5</code>. Tap the line with the bug.",
          qAr: "يظهر نص غريب بدل وصف المقرر. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Course c = new Course("Java", 3);
                    System.out.println(c);
                }
            }
            class Course {
                String name;
                int hours;
                Course(String name, int hours) { this.name = name; this.hours = hours; }
                public String tostring() {
                    return name + " (" + hours + " hours)";
                }
            }
          `, bug: 11,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Course c = new Course("Java", 3);
                    System.out.println(c);
                }
            }
            class Course {
                String name;
                int hours;
                Course(String name, int hours) { this.name = name; this.hours = hours; }
                @Override
                public String toString() {
                    return name + " (" + hours + " hours)";
                }
            }
          `,
          hint: "Java is case sensitive. Compare the method name with the one in <code>Object</code>.",
          explain: "<code>tostring</code> (small s) is a brand new method, so <code>println</code> still uses the <code>toString()</code> inherited from <code>Object</code>, which prints the class name and a code. Rename it to <code>toString</code> and add <code>@Override</code>: the compiler will then catch this mistake for you.",
          explainAr: "tostring تختلف عن toString، فلم يحدث استبدال. اكتب{{g:|ي}} @Override دائمًا." },
        { t: 'mcq', q: "<code>class Employee extends Person { }</code> and <code>class Manager extends Employee { }</code>. Which statement is true?",
          options: [
            "It does not compile: Java allows only single inheritance",
            "It compiles: this is multi-level inheritance, and each class has one direct parent",
            "Manager has two direct parents: Employee and Person",
            "Manager cannot use methods written in Person"
          ], answer: 1,
          explain: "A chain is legal. Manager's direct parent is Employee; Person is its grandparent, and Manager still inherits Person's methods through Employee." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  GamingPhone g = new GamingPhone();
                  g.call();
                  g.browse();
                  g.play();
                  System.out.println(g.getClass().getName());
              }
          }

          class Phone {
              void call() { System.out.println("Calling"); }
          }

          class SmartPhone extends Phone {
              void browse() { System.out.println("Browsing"); }
          }

          class GamingPhone extends SmartPhone {
              void play() { System.out.println("Playing"); }
          }
        `, answer: J`
          Calling
          Browsing
          Playing
          GamingPhone
        `, explain: "<code>call()</code> comes from the grandparent <code>Phone</code>, <code>browse()</code> from the parent <code>SmartPhone</code>, and <code>play()</code> is GamingPhone's own. <code>getClass().getName()</code> gives the exact class: <code>GamingPhone</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'super and the order of constructors',
      titleAr: 'super وترتيب المُنشئات',
      minutes: 35,
      body: [
        { type: 'h', en: 'The parent part is built first' },
        { type: 'p', en: "When you create a <code>Manager</code>, the object is also an <code>Employee</code> and a <code>Person</code>. All these parts must be built. Java builds them <b>from the top down</b>: first the parent part, then the child part. A constructor (the special method that builds an object, from Unit 2) therefore starts by running its parent's constructor.",
          ar: "عند إنشاء كائن من صنف فرعي يُبنى جزء الأب أولًا ثم جزء الابن." },
        { type: 'analogy', title: 'Building a house', en: "You cannot build the second floor before the foundation. In the same way, the parent constructor must finish before the child constructor continues.",
          ar: "لا تبني الطابق الثاني قبل الأساس؛ كذلك مُنشئ الأب يعمل قبل مُنشئ الابن." },
        { type: 'analogy', title: 'Joining the university', en: "When you join the university, the admission and registration office first opens your general file: your name and your ID number. Only after that can your college add its part: your major and your advisor. The college cannot write a major into a file that does not exist yet. In Java, the parent constructor opens the \"general file\" and the child constructor adds the special part.",
          ar: "عمادة القبول والتسجيل تفتح ملفك العام أولًا، ثم تضيف الكلية تخصصك. كذلك يعمل مُنشئ الأب قبل مُنشئ الابن." },
        { type: 'p', en: "One more rule makes this work: <b>each class fills its own fields</b>. <code>Person</code>'s constructor fills the fields written in Person. <code>Student</code>'s constructor fills the fields written in Student. Nobody fills fields that belong to another class." },
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
        { type: 'p', en: "Why does Java insist on this order? Because the child's constructor may want to <b>use</b> the parent's part, for example print the name. If the parent part were not ready, the child would read empty values. Building from the top down means that, when the child's code runs, everything above it is already finished.",
          ar: "عندما يبدأ كود الابن يكون جزء الأب جاهزًا، فيستطيع الابن استخدامه بأمان." },
        { type: 'h', en: 'Passing data up with super(...)' },
        { type: 'p', en: "Often the parent needs information to be built, for example a name or a year. The parent's fields are usually <code>private</code>, so the child cannot set them directly. The child sends the values <b>up</b> by writing <code>super(value1, value2)</code>. It must be the <b>first line</b> of the constructor.",
          ar: "نمرر القيم إلى مُنشئ الأب بالأمر super(...) ويجب أن يكون أول سطر في المُنشئ." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Car c = new Car("Sedan", 2022, 4);
                  System.out.println(c.getModel() + " " + c.getYear() + " " + c.getDoors());
              }
          }

          class Vehicle {
              private String model;
              private int year;

              Vehicle(String model, int year) {
                  this.model = model;
                  this.year = year;
              }

              String getModel() { return model; }
              int getYear() { return year; }
          }

          class Car extends Vehicle {
              private int doors;

              Car(String model, int year, int doors) {
                  super(model, year);     // Vehicle stores model and year
                  this.doors = doors;     // Car stores its own field
              }

              int getDoors() { return doors; }
          }
        `, out: J`
          Sedan 2022 4
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['Car(String model, int year, int doors) {', 'The Car constructor receives all three values.'],
            ['super(model, year);', 'Send <code>model</code> and <code>year</code> up to the <code>Vehicle</code> constructor. <b>First line!</b>'],
            ['this.doors = doors;', 'Car keeps the value that belongs to Car only.']
          ], ar: "Car يرسل model و year إلى Vehicle ويحتفظ لنفسه بـ doors." },
        { type: 'p', en: "Let us watch the object while it is being built. Remember: there is only <b>one</b> object. Java first makes it with default values (<code>null</code>, <code>0</code>). Then the constructors fill it, parent part first." },
        { type: 'memory', title: 'Building one Car object', code: J`
            Car c = new Car("Sedan", 2022, 4);
          `, frames: [
            { label: '1. <code>new Car(...)</code> makes one object. Every field has its default value.',
              vars: [],
              objects: [{ id: 'A', cls: 'Car', fields: [{ name: 'model (Vehicle part)', value: 'null' }, { name: 'year (Vehicle part)', value: '0' }, { name: 'doors (Car part)', value: '0' }] }] },
            { label: '2. <code>super(model, year);</code> runs the Vehicle constructor. It fills the Vehicle part.',
              vars: [],
              objects: [{ id: 'A', cls: 'Car', fields: [{ name: 'model (Vehicle part)', value: '"Sedan"' }, { name: 'year (Vehicle part)', value: '2022' }, { name: 'doors (Car part)', value: '0' }] }] },
            { label: '3. Back in the Car constructor: <code>this.doors = doors;</code>',
              vars: [],
              objects: [{ id: 'A', cls: 'Car', fields: [{ name: 'model (Vehicle part)', value: '"Sedan"' }, { name: 'year (Vehicle part)', value: '2022' }, { name: 'doors (Car part)', value: '4' }] }] },
            { label: '4. The constructor is finished. Now <code>c</code> points to the ready object.',
              vars: [{ name: 'c', type: 'Car', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Car', fields: [{ name: 'model (Vehicle part)', value: '"Sedan"' }, { name: 'year (Vehicle part)', value: '2022' }, { name: 'doors (Car part)', value: '4' }] }] }
          ], ar: "كائن واحد: مُنشئ Vehicle يملأ جزء الأب أولًا، ثم يملأ Car حقله doors، وبعدها يشير c إلى الكائن." },
        { type: 'check', q: "While <code>super(model, year)</code> is running, what is the value of <code>doors</code> in the new object?", options: [
            "4", "0, because the Car constructor has not set it yet", "There is no doors field yet"
          ], answer: 1, explain: "The whole object exists from the start with default values. <code>doors</code> becomes 4 only after <code>super(...)</code> returns and <code>this.doors = doors;</code> runs." },
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
          ], answer: 1, explain: "Java can only insert <code>super();</code>, and <code>Shape()</code> does not exist, so you must call the existing constructor yourself." },
        { type: 'steps', title: 'Worked example: fixing "constructor cannot be applied"', problem: "Your friend wrote <code>Shape</code> and <code>Square</code>. The compiler says: <code>constructor Shape in class Shape cannot be applied to given types</code>, and it points at the <code>Square</code> constructor. Find the cause and fix it.",
          steps: [
            { en: "<b>Step 1.</b> Read the error slowly. It talks about a <b>Shape</b> constructor, but it points at <b>Square</b>. So the problem is the call from Square to Shape.", code: J`
              class Square extends Shape {
                  private int side;

                  Square(int side) {           // <- the error points here
                      this.side = side;
                  }
              }
            ` },
            { en: "<b>Step 2.</b> Look at the parent. <code>Shape</code> has only <code>Shape(String color)</code>. There is no <code>Shape()</code> with empty brackets." },
            { en: "<b>Step 3.</b> Square's constructor has no <code>super(...)</code>, so Java inserted <code>super();</code>. That call needs <code>Shape()</code>, which does not exist. That is the cause." },
            { en: "<b>Step 4.</b> The fix: let Square receive a colour too, and pass it up with <code>super(color);</code> as the <b>first</b> line.", code: J`
              Square(String color, int side) {
                  super(color);                // calls Shape(String color)
                  this.side = side;
              }
            ` },
            { en: "<b>Step 5.</b> <code>color</code> is private in Shape, so Square reads it with <code>getColor()</code>. Run the fixed program." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Square s = new Square("green", 4);
                    System.out.println(s.describe());
                }
            }

            class Shape {
                private String color;

                Shape(String color) {
                    this.color = color;
                }

                String getColor() { return color; }
            }

            class Square extends Shape {
                private int side;

                Square(String color, int side) {
                    super(color);              // the fix
                    this.side = side;
                }

                String describe() {
                    return getColor() + " square, area " + (side * side);
                }
            }
          `, out: J`
            green square, area 16
          `, ar: "الخطأ يظهر في Square لكن سببه أن Shape ليس له مُنشئ فارغ. الحل: super(color) في أول سطر." },
        { type: 'h', en: 'this(...) or super(...)' },
        { type: 'p', en: "In Unit 2 you used <code>this(...)</code> to call another constructor of the <b>same</b> class. A constructor can start with <code>this(...)</code> <b>or</b> with <code>super(...)</code>, never both, because each must be the first line. If it starts with <code>this(...)</code>, the other constructor will call the parent. Either way, the parent is still built first.",
          ar: "المُنشئ يبدأ إما بـ this(...) أو بـ super(...)، ولا يجمع بينهما." },
        { type: 'code', code: J`
          class Student extends Person {
              String major;

              Student(String name) {
                  this(name, "Undeclared");    // first line: another Student constructor
              }

              Student(String name, String major) {
                  super(name);                 // first line: the Person constructor
                  this.major = major;
              }
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['Student(String name) {', 'Suppose <code>main</code> writes <code>new Student("Ali")</code>. Java picks this constructor, because it takes one String.'],
            ['this(name, "Undeclared");', 'It passes the work to the two-parameter constructor of the same class.'],
            ['super(name);', 'That constructor calls <code>Person(name)</code> first, so the Person part is built first.'],
            ['this.major = major;', 'Then the Student part is filled: major is "Undeclared".']
          ], ar: "this(...) يحوّل العمل إلى مُنشئ آخر في الصنف نفسه، وذلك المُنشئ يستدعي super." }
      ],
      mistakes: [
        { title: 'super is not the first line', en: "<code>super(...)</code> must come first in the constructor.", code: J`
          Car(String model, int year) {
              this.doors = 4;
              super(model, year);      // error: must be first
          }
        ` },
        { title: 'Setting a private parent field directly', en: "The child cannot touch a <code>private</code> field of the parent. Send the value up with <code>super(...)</code>.", code: J`
          Car(String model, int year) {
              this.model = model;      // error: model is private in Vehicle
          }
        ` },
        { title: 'Forgetting that the parent has no empty constructor', en: "If the parent has only constructors with parameters, the child must call one with <code>super(...)</code>. Otherwise Java inserts <code>super();</code> and finds nothing to call.", code: J`
          class Account { Account(double balance) { } }
          class Savings extends Account {
              Savings() { }                // error: Account() does not exist
          }
        ` },
        { title: 'Thinking the child prints first', en: "Parent bodies finish first. Trace from the top of the tree when predicting output." }
      ],
      remember: [
        "Every constructor starts by running a parent constructor.",
        "If you do not write <code>super(...)</code>, Java inserts <code>super();</code>.",
        "<code>super(values)</code> sends data up to the parent. It must be the <b>first line</b>.",
        "Constructor bodies finish in order: top parent first, child last. Each class fills its own fields.",
        "If the parent has no empty constructor, you must call <code>super(...)</code> with values.",
        "A constructor starts with <code>this(...)</code> or <code>super(...)</code>, never both."
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

              Car(String model, int year, int doors) {
                  ___(model, year);
                  this.doors = doors;
              }
          }
        `, answers: ['super'],
          explain: "<code>super(model, year)</code> calls the <code>Vehicle</code> constructor and must be the first line." },
        { t: 'order', q: "Arrange the lines of a correct <code>Car</code> constructor.",
          lines: [
            "Car(String model, int year, int doors) {",
            "    super(model, year);",
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
        { t: 'code', q: "<code>Vehicle</code> is written for you (private <code>model</code> and <code>year</code>, constructor, getters). Write class <code>Car</code> that extends it, adds an <code>int doors</code> field, calls <code>super(...)</code> in its constructor, and has a method <code>describe()</code> returning <code>YEAR MODEL, DOORS doors</code>. <code>main</code> reads model, year and doors and prints <code>describe()</code>. No prompts.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String model = sc.next();
                    int year = sc.nextInt();
                    int doors = sc.nextInt();
                    Car c = new Car(model, year, doors);
                    System.out.println(c.describe());
                }
            }

            class Vehicle {
                private String model;
                private int year;

                Vehicle(String model, int year) {
                    this.model = model;
                    this.year = year;
                }

                String getModel() { return model; }
                int getYear() { return year; }
            }

            // write class Car here
          `,
          tests: [
            { stdin: J`
              Sedan 2022 4
            `, expected: J`
              2022 Sedan, 4 doors
            ` },
            { stdin: J`
              Coupe 2019 2
            `, expected: J`
              2019 Coupe, 2 doors
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String model = sc.next();
                    int year = sc.nextInt();
                    int doors = sc.nextInt();
                    Car c = new Car(model, year, doors);
                    System.out.println(c.describe());
                }
            }

            class Vehicle {
                private String model;
                private int year;

                Vehicle(String model, int year) {
                    this.model = model;
                    this.year = year;
                }

                String getModel() { return model; }
                int getYear() { return year; }
            }

            class Car extends Vehicle {
                private int doors;

                Car(String model, int year, int doors) {
                    super(model, year);
                    this.doors = doors;
                }

                String describe() {
                    return getYear() + " " + getModel() + ", " + doors + " doors";
                }
            }
          `,
          hint: "The fields in <code>Vehicle</code> are private, so use <code>getYear()</code> and <code>getModel()</code> inside <code>Car</code>.",
          explain: "<code>super(model, year)</code> lets <code>Vehicle</code> store its private fields. <code>Car</code> reads them back through the getters." },
        { t: 'bug', q: "This program does not compile. The parent <code>Account</code> has no constructor without parameters. Tap the line with the bug.",
          qAr: "الصنف الأب ليس له مُنشئ فارغ. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Savings s = new Savings(5000, 0.05);
                    System.out.println(s.getBalance());
                }
            }
            class Account {
                private double balance;
                Account(double balance) { this.balance = balance; }
                double getBalance() { return balance; }
            }
            class Savings extends Account {
                private double rate;
                Savings(double balance, double rate) { this.rate = rate; }
            }
          `, bug: 14,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Savings s = new Savings(5000, 0.05);
                    System.out.println(s.getBalance());
                }
            }
            class Account {
                private double balance;
                Account(double balance) { this.balance = balance; }
                double getBalance() { return balance; }
            }
            class Savings extends Account {
                private double rate;
                Savings(double balance, double rate) { super(balance); this.rate = rate; }
            }
          `,
          hint: "What does Java insert at the start of a constructor that has no <code>super(...)</code>?",
          explain: "The Savings constructor on line 14 has no <code>super(...)</code>, so Java inserts <code>super();</code>. But <code>Account()</code> does not exist, so the code does not compile. Also, the balance would never be stored. Add <code>super(balance);</code> as the first statement: the program then prints <code>5000.0</code>.",
          explainAr: "أضف{{g:|ي}} super(balance) في أول المُنشئ ليُبنى جزء الأب ويُحفظ الرصيد." },
        { t: 'bug', q: "This program does not compile. Tap the line with the bug.",
          qAr: "البرنامج لا يُترجم. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Teacher t = new Teacher("Mona", "Math");
                    System.out.println(t.name + " teaches " + t.subject);
                }
            }
            class Person {
                String name;
                Person(String name) { this.name = name; }
            }
            class Teacher extends Person {
                String subject;
                Teacher(String name, String subject) {
                    this.subject = subject;
                    super(name);
                }
            }
          `, bug: 15,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Teacher t = new Teacher("Mona", "Math");
                    System.out.println(t.name + " teaches " + t.subject);
                }
            }
            class Person {
                String name;
                Person(String name) { this.name = name; }
            }
            class Teacher extends Person {
                String subject;
                Teacher(String name, String subject) {
                    super(name);
                    this.subject = subject;
                }
            }
          `,
          hint: "Where must the call to the parent constructor be?",
          explain: "<code>super(name);</code> on line 15 comes after another statement. The call to the parent constructor must be the <b>first</b> statement, because the parent part is built first. Swap the two lines; the program prints <code>Mona teaches Math</code>.",
          explainAr: "super(...) يجب أن يكون أول جملة في المُنشئ." },
        { t: 'output', q: "What does this program print? Trace the constructors carefully.", code: J`
          public class Main {
              public static void main(String[] args) {
                  Faculty f = new Faculty("Dr. Sami", 20000, "IS");
                  System.out.println(f.info());
              }
          }

          class Person {
              protected String name;

              Person(String name) {
                  this.name = name;
                  System.out.println("Person: " + name);
              }
          }

          class Employee extends Person {
              protected int salary;

              Employee(String name, int salary) {
                  super(name);
                  this.salary = salary;
                  System.out.println("Employee: " + salary);
              }
          }

          class Faculty extends Employee {
              private String dept;

              Faculty(String name, int salary, String dept) {
                  super(name, salary);
                  this.dept = dept;
                  System.out.println("Faculty: " + dept);
              }

              String info() {
                  return name + ", " + dept + ", " + salary + " SAR";
              }
          }
        `, answer: J`
          Person: Dr. Sami
          Employee: 20000
          Faculty: IS
          Dr. Sami, IS, 20000 SAR
        `, explain: "Each constructor first sends values up with <code>super(...)</code>. The bodies then finish from the top: Person prints first, then Employee, then Faculty. Finally <code>info()</code> uses fields from all three levels." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'Overriding: changing inherited behaviour',
      titleAr: 'التجاوز: تغيير السلوك الموروث',
      minutes: 35,
      body: [
        { type: 'h', en: 'When the parent version is not right' },
        { type: 'p', en: "A child inherits the parent's methods. But sometimes the inherited method does not fit. Every <code>Animal</code> can <code>speak()</code>, but a dog says \"Woof!\" and a cat says \"Meow!\". The child can <b>override</b> the method: write a new version with the <b>same name and the same parameters</b>. Objects of the child then use the new version.",
          ar: "التجاوز (override): كتابة دالة في الصنف الفرعي بنفس الاسم ونفس المعاملات لتغيير السلوك الموروث." },
        { type: 'p', en: "Why not just give the dog a new method with a new name, like <code>bark()</code>? Because then every piece of code that works with animals must know all the special names: <code>bark()</code> for dogs, <code>meow()</code> for cats, <code>tweet()</code> for birds. With overriding, the question is always the same, <code>speak()</code>, and each animal answers in its own way. In Lesson 6 you will see how powerful this is." },
        { type: 'analogy', title: 'University rule, college rule', en: "The university has a general rule: \"the final exam is two hours\". The college of engineering replaces it with its own rule: \"our final exam is three hours\". The rule has the same name, but for engineering students the college version applies. Students of other colleges still follow the general rule. Overriding works the same way.",
          ar: "الجامعة تضع قاعدة عامة، وكلية ما تستبدلها بقاعدتها الخاصة لطلابها فقط." },
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
        { type: 'h', en: 'How Java finds the method to run' },
        { type: 'p', en: "When you call a method on an object, Java follows a simple rule. It starts in the object's <b>own class</b>. If the method is there, it runs. If not, Java goes <b>one level up</b> to the parent, then the grandparent, and so on, and runs the <b>first</b> version it finds. A child only overrides what it wants; everything else still comes from above.",
          ar: "تبدأ جافا البحث في صنف الكائن نفسه، ثم تصعد إلى الأب، وتنفذ أول نسخة تجدها." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Dog d = new Dog();
                  d.eat();        // not written in Dog
                  d.speak();      // written in Dog
              }
          }

          class Animal {
              void eat() { System.out.println("Animal eats"); }
              void speak() { System.out.println("..."); }
          }

          class Dog extends Animal {
              @Override
              void speak() { System.out.println("Woof!"); }
          }
        `, out: J`
          Animal eats
          Woof!
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['d.eat();', 'Look in <code>Dog</code>: no <code>eat()</code>. Go up to <code>Animal</code>: found. Prints <code>Animal eats</code>.'],
            ['d.speak();', 'Look in <code>Dog</code>: found at once. Java stops searching. Prints <code>Woof!</code>; the Animal version is not used.']
          ], ar: "eat غير موجودة في Dog فتعمل نسخة Animal، أما speak فموجودة في Dog فتعمل نسختها." },
        { type: 'check', q: "<code>Truck extends Vehicle</code>. Vehicle has <code>start()</code> and <code>stop()</code>. Truck overrides only <code>stop()</code>. Which versions run for a Truck object?", options: [
            "Both from Vehicle",
            "<code>start()</code> from Vehicle, <code>stop()</code> from Truck",
            "Both from Truck",
            "<code>start()</code> does not exist for a Truck"
          ], answer: 1, explain: "Java searches from the object's class upward. <code>stop()</code> is found in Truck; <code>start()</code> is not, so Vehicle's version runs." },
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
        { type: 'memory', title: 'Where super.pay() finds the base salary', en: "Both objects have a <code>pay()</code> method, but they run different code. The Manager object contains the Employee part, so <code>super.pay()</code> can read <code>baseSalary</code> even though it is private in Employee.", code: J`
            Employee e = new Employee("Ahmed", 8000);
            Manager m = new Manager("Dana", 12000, 3000);
          `, frames: [
            { label: 'After <code>Employee e = new Employee("Ahmed", 8000);</code> <code>e.pay()</code> runs Employee\'s version: 8000.0',
              vars: [{ name: 'e', type: 'Employee', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Employee', fields: [{ name: 'name', value: '"Ahmed"' }, { name: 'baseSalary', value: '8000.0' }] }] },
            { label: 'After <code>Manager m = new Manager("Dana", 12000, 3000);</code> <code>m.pay()</code> runs Manager\'s version: <code>super.pay()</code> gives 12000.0 from the Employee part, plus 3000.0',
              vars: [{ name: 'e', type: 'Employee', ref: 'A' }, { name: 'm', type: 'Manager', ref: 'B' }],
              objects: [{ id: 'A', cls: 'Employee', fields: [{ name: 'name', value: '"Ahmed"' }, { name: 'baseSalary', value: '8000.0' }] },
                        { id: 'B', cls: 'Manager', fields: [{ name: 'name (Employee part)', value: '"Dana"' }, { name: 'baseSalary (Employee part)', value: '12000.0' }, { name: 'bonus (Manager part)', value: '3000.0' }] }] }
          ], ar: "super.pay() تعمل على الكائن نفسه، فتقرأ baseSalary من جزء Employee داخل كائن Manager." },
        { type: 'steps', title: 'Worked example: each shape computes its own area', problem: "Every shape can tell its area. A plain <code>Shape</code> does not know its area, so it returns 0. A <code>Rectangle</code> and a <code>Triangle</code> each replace <code>area()</code> with their own formula. This time the overrides do <b>not</b> use the parent's version at all.",
          steps: [
            { en: "<b>Step 1.</b> The parent <code>Shape</code> stores a name and has a general <code>area()</code> that returns 0.", code: J`
              class Shape {
                  private String name;

                  Shape(String name) { this.name = name; }

                  String getName() { return name; }

                  double area() { return 0; }
              }
            ` },
            { en: "<b>Step 2.</b> <code>Rectangle</code> sends its name up with <code>super(\"rectangle\")</code> and overrides <code>area()</code>: width times height.", code: J`
              @Override
              double area() { return width * height; }
            ` },
            { en: "<b>Step 3.</b> <code>Triangle</code> does the same with its own formula: base times height divided by 2.", code: J`
              @Override
              double area() { return base * height / 2; }
            ` },
            { en: "<b>Step 4.</b> Trace: the plain shape gives 0.0. The rectangle 4 by 3 gives 12.0. The triangle with base 4 and height 3 gives 4 * 3 / 2 = 6.0. Every class keeps <code>getName()</code> from Shape." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Shape s = new Shape("shape");
                    Rectangle r = new Rectangle(4, 3);
                    Triangle t = new Triangle(4, 3);
                    System.out.println(s.getName() + ": " + s.area());
                    System.out.println(r.getName() + ": " + r.area());
                    System.out.println(t.getName() + ": " + t.area());
                }
            }

            class Shape {
                private String name;

                Shape(String name) { this.name = name; }

                String getName() { return name; }

                double area() { return 0; }
            }

            class Rectangle extends Shape {
                private double width, height;

                Rectangle(double width, double height) {
                    super("rectangle");
                    this.width = width;
                    this.height = height;
                }

                @Override
                double area() { return width * height; }
            }

            class Triangle extends Shape {
                private double base, height;

                Triangle(double base, double height) {
                    super("triangle");
                    this.base = base;
                    this.height = height;
                }

                @Override
                double area() { return base * height / 2; }
            }
          `, out: J`
            shape: 0.0
            rectangle: 12.0
            triangle: 6.0
          `, ar: "كل شكل يتجاوز area بمعادلته الخاصة، ويرث getName من Shape كما هي." },
        { type: 'note', kind: 'tip', en: "Two ways to override: <b>replace</b> the parent's work completely (like <code>area()</code> here), or <b>extend</b> it by calling <code>super.method()</code> first and adding more (like <code>pay()</code> for the manager). Choose by asking: is the parent's work still part of the answer?",
          ar: "إما أن تستبدل عمل الأب كليًا، أو تستدعيه بـ super ثم تضيف إليه." },
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
          explain: "<code>Manager</code> sends <code>base</code> up with <code>super(base)</code> and reuses <code>Employee.pay()</code> through <code>super.pay()</code>." },
        { t: 'bug', q: "The student wanted <code>Rectangle</code> to replace <code>area()</code>, so that the program prints <code>12.0</code>. It prints <code>0.0</code>. Tap the line with the bug.",
          qAr: "أراد الطالب تجاوز area لكن البرنامج يطبع 0.0. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Rectangle r = new Rectangle(4, 3);
                    System.out.println(r.area());
                }
            }
            class Shape {
                double area() { return 0; }
            }
            class Rectangle extends Shape {
                double width, height;
                Rectangle(double w, double h) { width = w; height = h; }
                double area(double w, double h) { return w * h; }
            }
          `, bug: 13,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Rectangle r = new Rectangle(4, 3);
                    System.out.println(r.area());
                }
            }
            class Shape {
                double area() { return 0; }
            }
            class Rectangle extends Shape {
                double width, height;
                Rectangle(double w, double h) { width = w; height = h; }
                @Override
                double area() { return width * height; }
            }
          `,
          hint: "Compare the parameter list of the two <code>area</code> methods.",
          explain: "Line 13 has <b>parameters</b>, so it does not override <code>area()</code>: it <b>overloads</b> it (a second, different method). <code>r.area()</code> with no arguments still finds Shape's version and returns 0.0. Write <code>double area()</code> with no parameters, use the fields, and add <code>@Override</code> so the compiler checks it.",
          explainAr: "تغيير المعاملات يصنع دالة جديدة (تحميل زائد) لا تجاوزًا. استخدم{{g:|ي}} @Override." },
        { t: 'bug', q: "This program compiles, but when it runs it crashes with <code>StackOverflowError</code>. Tap the line with the bug.",
          qAr: "البرنامج يتوقف بخطأ StackOverflowError. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Manager m = new Manager(12000, 3000);
                    System.out.println(m.pay());
                }
            }
            class Employee {
                private double base;
                Employee(double base) { this.base = base; }
                double pay() { return base; }
            }
            class Manager extends Employee {
                private double bonus;
                Manager(double base, double bonus) { super(base); this.bonus = bonus; }
                @Override double pay() { return pay() + bonus; }
            }
          `, bug: 15,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Manager m = new Manager(12000, 3000);
                    System.out.println(m.pay());
                }
            }
            class Employee {
                private double base;
                Employee(double base) { this.base = base; }
                double pay() { return base; }
            }
            class Manager extends Employee {
                private double bonus;
                Manager(double base, double bonus) { super(base); this.bonus = bonus; }
                @Override double pay() { return super.pay() + bonus; }
            }
          `,
          hint: "Inside Manager's <code>pay()</code>, which <code>pay()</code> does the word <code>pay()</code> call?",
          explain: "On line 15, <code>pay()</code> without <code>super.</code> calls Manager's own <code>pay()</code> again, which calls itself again, forever, until the memory for method calls is full. Write <code>super.pay()</code> to call Employee's version; the program then prints <code>15000.0</code>.",
          explainAr: "بدون super تستدعي الدالة نفسها بلا نهاية. اكتب super.pay()." },
        { t: 'output', q: "What does this program print? Remember how Java searches for a method.", code: J`
          public class Main {
              public static void main(String[] args) {
                  StudentPhone p = new StudentPhone();
                  p.ring();
                  p.showPlan();
              }
          }

          class Phone {
              void ring() { System.out.println("Ring ring"); }
              void showPlan() { System.out.println("Basic plan"); }
          }

          class SmartPhone extends Phone {
              @Override
              void ring() { System.out.println("Ding dong"); }
          }

          class StudentPhone extends SmartPhone {
              @Override
              void showPlan() {
                  super.showPlan();
                  System.out.println("+ 10 GB student data");
              }
          }
        `, answer: J`
          Ding dong
          Basic plan
          + 10 GB student data
        `, explain: "<code>ring()</code> is not in StudentPhone, so Java goes up and finds SmartPhone's version first. <code>showPlan()</code> is in StudentPhone; its <code>super.showPlan()</code> searches from the parent upward: SmartPhone has none, so Phone's version prints <code>Basic plan</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 5
    {
      title: 'Overloading vs overriding, and protected',
      titleAr: 'التحميل الزائد مقابل التجاوز و protected',
      minutes: 35,
      body: [
        { type: 'h', en: 'Same name, different job: overloading' },
        { type: 'p', en: "Two words sound similar, so students mix them up. <b>Overriding</b> (last lesson) replaces a parent's method. <b>Overloading</b> means writing several methods with the <b>same name but different parameters</b>. Java chooses the right one by looking at the values you pass.",
          ar: "التحميل الزائد: نفس الاسم بمعاملات مختلفة. التجاوز: نفس الاسم ونفس المعاملات في الصنف الفرعي." },
        { type: 'p', en: "You have used overloading since your first week without knowing its name. <code>System.out.println(5)</code>, <code>println(\"Hi\")</code> and <code>println(2.5)</code> are <b>different</b> methods that share one name. In Unit 2 you also wrote several constructors with different parameters: that was overloading too. Why is it useful? You remember one simple name, and Java picks the right version for your data." },
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
        { type: 'p', en: "Overloads can also differ in the <b>number</b> of parameters. A parking machine normally charges 5 SAR per hour, but with a coupon some hours are free. Same job, same name, different details." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Parking p = new Parking();
                  System.out.println(p.fee(4));        // one int
                  System.out.println(p.fee(4, 1));     // two ints
              }
          }

          class Parking {
              int fee(int hours) {
                  return hours * 5;
              }

              int fee(int hours, int freeHours) {
                  return (hours - freeHours) * 5;
              }
          }
        `, out: J`
          20
          15
        ` },
        { type: 'p', en: "Java counts the arguments: one value matches <code>fee(int hours)</code>, two values match <code>fee(int hours, int freeHours)</code>. If there is no exact type match, Java may <b>widen</b> a value, for example turn an <code>int</code> into a <code>double</code>, and use that method instead.",
          ar: "تختار جافا حسب عدد المعاملات وأنواعها، وقد تحوّل int إلى double إذا لم تجد تطابقًا تامًا." },
        { type: 'check', q: "Using the <code>Parking</code> class above, what does <code>p.fee(6, 2)</code> return?", options: [
            "30, from <code>fee(int hours)</code>",
            "20, from <code>fee(int hours, int freeHours)</code>",
            "A compile error, because there are two methods called fee"
          ], answer: 1, explain: "Two arguments match the two-parameter version: (6 - 2) * 5 = 20. Two methods with the same name are fine when their parameter lists differ." },
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
        { type: 'p', en: "A memory trick for the two words: over<b>R</b>iding <b>R</b>eplaces a parent method (R and R). over<b>L</b>oading <b>L</b>oads more versions of one name (L and L). When you are not sure, look at the parameter list first: same list in a child class means overriding; a different list means overloading.",
          ar: "تذكير سهل: overRiding = Replace (استبدال)، و overLoading = Load more (إضافة نسخ أخرى)." },
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
        { type: 'memory', title: 'A protected field inside the child object', code: J`
            Savings s = new Savings(2000);
            s.addProfit(0.5);
          `, frames: [
            { label: 'After <code>Savings s = new Savings(2000);</code> <code>super(balance)</code> stored 2000.0 in the Account part.',
              vars: [{ name: 's', type: 'Savings', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Savings', fields: [{ name: 'balance (protected, from Account)', value: '2000.0' }] }] },
            { label: 'After <code>s.addProfit(0.5);</code> Savings code changed the protected field directly: 2000 + 2000 * 0.5',
              vars: [{ name: 's', type: 'Savings', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Savings', fields: [{ name: 'balance (protected, from Account)', value: '3000.0' }] }] }
          ], ar: "الحقل المحمي موجود داخل كائن Savings، ويستطيع كود Savings تغييره مباشرة." },
        { type: 'p', en: "If <code>balance</code> were <code>private</code>, the field would <b>still be inside</b> the Savings object (the picture would look the same), but the line <code>balance = balance + balance * ratio;</code> in Savings would not compile. <code>private</code> hides the <b>name</b> from child code; it does not remove the field." },
        { type: 'check', q: "A field is <code>protected</code>. Who can use it directly?", options: [
            "Only its own class", "Its own class and its subclasses", "Anyone, anywhere"
          ], answer: 1, explain: "Protected is between private and public: the family (subclasses) may use it. (Same-package classes may too.)" },
        { type: 'note', kind: 'tip', en: "Many programmers still prefer <code>private</code> fields with getters, even for children. Use <code>protected</code> when children really need direct access. Lesson 10 shows the full table of access levels, including the one with no keyword at all.",
          ar: "في الغالب نفضل private مع getters، ونستخدم protected عند الحاجة." },
        { type: 'steps', title: 'Worked example: a VIP parking meter', problem: "A normal parking meter charges 10 SAR per hour. A VIP meter charges half price, and it can also give some free hours. Use overriding for the half price and overloading for the free hours, then trace which method runs for each call.",
          steps: [
            { en: "<b>Step 1.</b> The parent <code>ParkingMeter</code> has a <code>protected</code> rate, so children can read it, and <code>fee(int hours)</code>.", code: J`
              class ParkingMeter {
                  protected int ratePerHour = 10;

                  int fee(int hours) {
                      return hours * ratePerHour;
                  }
              }
            ` },
            { en: "<b>Step 2.</b> <code>VipMeter</code> writes <code>fee(int hours)</code> again with the <b>same</b> parameter list: an <b>override</b>. It asks the parent for the normal price and halves it.", code: J`
              @Override
              int fee(int hours) {
                  return super.fee(hours) / 2;
              }
            ` },
            { en: "<b>Step 3.</b> It also adds <code>fee(int hours, int freeHours)</code> with a <b>new</b> parameter list: an <b>overload</b>. It reuses the one-parameter version for the hours that are not free.", code: J`
              int fee(int hours, int freeHours) {
                  return fee(hours - freeHours);
              }
            ` },
            { en: "<b>Step 4.</b> Trace. <code>normal.fee(4)</code>: 4 * 10 = 40. <code>vip.fee(4)</code>: the VIP override, 40 / 2 = 20. <code>vip.fee(4, 2)</code>: the overload calls <code>fee(2)</code>; the object is a VipMeter, so the VIP override runs: 20 / 2 = 10." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    ParkingMeter normal = new ParkingMeter();
                    VipMeter vip = new VipMeter();
                    System.out.println(normal.fee(4));
                    System.out.println(vip.fee(4));
                    System.out.println(vip.fee(4, 2));
                }
            }

            class ParkingMeter {
                protected int ratePerHour = 10;

                int fee(int hours) {
                    return hours * ratePerHour;
                }
            }

            class VipMeter extends ParkingMeter {
                @Override
                int fee(int hours) {                      // overriding: same parameters
                    return super.fee(hours) / 2;
                }

                int fee(int hours, int freeHours) {       // overloading: new parameter list
                    return fee(hours - freeHours);
                }
            }
          `, out: J`
            40
            20
            10
          `, ar: "fee(int) في VipMeter تجاوز، و fee(int, int) تحميل زائد. والكائن الفعلي يحدد النسخة التي تعمل." }
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
          explain: "Because <code>balance</code> is protected, <code>Savings</code> can use it directly." },
        { t: 'bug', q: "This program does not compile: the compiler says <code>balance has private access in Account</code>. Tap a line that causes the problem.",
          qAr: "الحقل خاص (private) في الأب. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Savings s = new Savings(2000);
                    s.addProfit(10);
                    System.out.println(s.getBalance());
                }
            }
            class Account {
                private int balance;
                Account(int balance) { this.balance = balance; }
                int getBalance() { return balance; }
            }
            class Savings extends Account {
                Savings(int balance) { super(balance); }
                void addProfit(int percent) { balance += balance * percent / 100; }
            }
          `, bug: [9, 15],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Savings s = new Savings(2000);
                    s.addProfit(10);
                    System.out.println(s.getBalance());
                }
            }
            class Account {
                protected int balance;
                Account(int balance) { this.balance = balance; }
                int getBalance() { return balance; }
            }
            class Savings extends Account {
                Savings(int balance) { super(balance); }
                void addProfit(int percent) { balance += balance * percent / 100; }
            }
          `,
          hint: "Who may use a <code>private</code> field by its name?",
          explain: "Line 15 uses <code>balance</code> inside Savings, but line 9 makes it <code>private</code>, so only Account itself may use the name. Change line 9 to <code>protected int balance;</code> (or give Account a method that adds money). The program then prints <code>2200</code>.",
          explainAr: "الابن لا يرى الحقل الخاص. اجعله protected." },
        { t: 'bug', q: "This class does not compile. Tap the line with the bug.",
          qAr: "الصنف لا يُترجم. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Converter c = new Converter();
                    System.out.println(c.convert(5));
                }
            }
            class Converter {
                int convert(int riyals) { return riyals * 100; }          // to halalas
                double convert(int riyals) { return riyals / 1000.0; }    // in thousands
            }
          `, bug: 9,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Converter c = new Converter();
                    System.out.println(c.convert(5));
                }
            }
            class Converter {
                int convert(int riyals) { return riyals * 100; }          // to halalas
                double inThousands(int riyals) { return riyals / 1000.0; }
            }
          `,
          hint: "Look at the parameter lists of the two <code>convert</code> methods.",
          explain: "Both methods are called <code>convert</code> and both take one <code>int</code>. Only the return type differs, and that is not enough: for <code>c.convert(5)</code> Java could not know which one you mean. Give the second method another name (or other parameters). The fixed program prints <code>500</code>.",
          explainAr: "تغيير نوع الإرجاع وحده لا يكفي للتحميل الزائد." },
        { t: 'output', q: "There is no <code>put(int)</code> method. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Box b = new Box();
                  b.put(5);
                  b.put(5.5);
                  b.put("5");
              }
          }

          class Box {
              void put(double x) { System.out.println("double " + x); }
              void put(String s) { System.out.println("String " + s); }
          }
        `, answer: J`
          double 5.0
          double 5.5
          String 5
        `, explain: "For <code>put(5)</code> there is no exact <code>int</code> version, so Java widens 5 to the double 5.0 and uses <code>put(double)</code>. The text <code>\"5\"</code> matches <code>put(String)</code>.",
          explainAr: "لا توجد put(int)، فتحوّل جافا 5 إلى 5.0 وتستخدم put(double)." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 6
    {
      title: 'Superclass references and class hierarchies',
      titleAr: 'مراجع الصنف الأب وهرميات الأصناف',
      minutes: 35,
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
        { type: 'p', en: "Look at the picture. The arrow of \"is a\" goes up. You may put a child into a parent box, but not the other way round. Putting a child object into a parent variable is called <b>upcasting</b> (casting = changing the type you see; up = towards the parent). It is automatic and always safe, because every Dog really is an Animal.",
          ar: "وضع كائن الابن في متغير من نوع الأب يسمى upcasting، وهو تلقائي وآمن دائمًا." },
        { type: 'code', code: J`
          Animal   <- box type (declared type)
            ├── Dog   <- real object may be a Dog
            └── Cat   <- or a Cat
        ` },
        { type: 'h', en: 'Two types: the box and the object' },
        { type: 'p', en: "In <code>Animal a = new Dog();</code> there are <b>two</b> types. The <b>declared type</b> is on the left (<code>Animal</code>, the box). The <b>actual type</b> is on the right (<code>Dog</code>, the real object). The declared type decides <i>which methods you may call</i> (checked when compiling). The actual type decides <i>which version runs</i> when the overridden method is called.",
          ar: "النوع المعلن (يسار) يحدد الدوال المسموح استدعاؤها. النوع الفعلي (يمين) يحدد أي نسخة معدّلة تعمل." },
        { type: 'memory', title: 'One object, two kinds of box', en: "The type of a variable is the type of the <b>box</b>. It never changes the object. Step through and watch the arrows.", code: J`
            Car c = new Car("Car-7");
            Vehicle v = c;
            v = new Truck("Trk-3", 12.5);
          `, frames: [
            { label: 'After <code>Car c = new Car("Car-7");</code>',
              vars: [{ name: 'c', type: 'Car', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Car', fields: [{ name: 'id (from Vehicle)', value: '"Car-7"' }] }] },
            { label: 'After <code>Vehicle v = c;</code> No new object. A Car box and a Vehicle box point to the <b>same</b> Car.',
              vars: [{ name: 'c', type: 'Car', ref: 'A' }, { name: 'v', type: 'Vehicle', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Car', fields: [{ name: 'id (from Vehicle)', value: '"Car-7"' }] }] },
            { label: 'After <code>v = new Truck("Trk-3", 12.5);</code> The same Vehicle box now points to a Truck.',
              vars: [{ name: 'c', type: 'Car', ref: 'A' }, { name: 'v', type: 'Vehicle', ref: 'B' }],
              objects: [{ id: 'A', cls: 'Car', fields: [{ name: 'id (from Vehicle)', value: '"Car-7"' }] },
                        { id: 'B', cls: 'Truck', fields: [{ name: 'id (from Vehicle)', value: '"Trk-3"' }, { name: 'loadTons', value: '12.5' }] }] }
          ], ar: "نوع المتغير هو نوع الصندوق فقط؛ الكائن نفسه لا يتغير. متغير Vehicle يمكن أن يشير إلى Car ثم إلى Truck." },
        { type: 'check', q: "In step 2 of the picture, what is the class of the object that <code>v</code> points to?", options: [
            "Vehicle, because v is a Vehicle variable",
            "Car: the object is still the same Car",
            "Both Vehicle and Car: there are two objects"
          ], answer: 1, explain: "<code>Vehicle v = c;</code> copies the arrow only. The object was made with <code>new Car(...)</code>, so it is a Car forever. <code>v</code> just looks at it through a Vehicle-shaped box." },
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
        { type: 'analogy', title: 'A basic remote and a smart TV', en: "You can control a smart TV with an old basic remote. It works, because a smart TV is a TV. But the basic remote only has the basic buttons: power, volume, channel. It has no \"apps\" button, even though the TV can run apps. The variable type is the remote: it decides which buttons (methods) you can press. The object is the TV: it decides what each button really does.",
          ar: "جهاز التحكم البسيط يشغّل التلفاز الذكي، لكنه لا يملك زر التطبيقات. نوع المتغير يحدد الأزرار المتاحة." },
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
        { type: 'h', en: 'One method for every child' },
        { type: 'p', en: "The same rule works for method parameters. A method whose parameter is a <code>Vehicle</code> accepts a Car, a Truck, or any vehicle that someone adds next year. You write the method <b>once</b>.",
          ar: "دالة معاملها من نوع Vehicle تقبل أي مركبة: سيارة أو شاحنة أو غيرهما." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  printTicket(new Car("Car-7"));
                  printTicket(new Truck("Trk-3", 12.5));
              }

              static void printTicket(Vehicle v) {
                  System.out.println("Ticket for " + v.describe());
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
              public String describe() { return id + ": truck carrying " + loadTons + " tons"; }
          }
        `, out: J`
          Ticket for Car-7: car
          Ticket for Trk-3: truck carrying 12.5 tons
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['static void printTicket(Vehicle v)', 'The parameter is a Vehicle box. Any child object fits.'],
            ['printTicket(new Car("Car-7"));', 'Upcasting: the Car goes into the Vehicle parameter automatically.'],
            ['v.describe()', 'Allowed, because Vehicle has <code>describe()</code>. The real object decides which version runs.']
          ], ar: "كتبنا printTicket مرة واحدة، وهي تعمل مع كل أنواع المركبات." },
        { type: 'steps', title: 'Worked example: a payroll array with a count', problem: "A small company keeps its staff in an array with room for 5 people and a counter, just like the arrays of objects in Unit 3. Add two employees and one manager, then print each person's pay and the total monthly payroll.",
          steps: [
            { en: "<b>Step 1.</b> Make an array of the <b>parent</b> type with room for 5, and a counter that starts at 0.", code: J`
              Employee[] staff = new Employee[5];
              int count = 0;
            ` },
            { en: "<b>Step 2.</b> Add people at position <code>count</code>, then increase <code>count</code>. A Manager fits in an Employee box (upcasting).", code: J`
              staff[count] = new Manager("Dana", 12000, 3000);
              count++;
            ` },
            { en: "<b>Step 3.</b> Loop with <code>i &lt; count</code>, <b>not</b> <code>i &lt; staff.length</code>. Only the first 3 boxes are filled; the last 2 are <code>null</code>, and calling a method on <code>null</code> crashes the program." },
            { en: "<b>Step 4.</b> For each person call <code>pay()</code>. The real object decides: Dana is a Manager, so she gets 12000 + 3000 = 15000.0." },
            { en: "<b>Step 5.</b> Add each pay to <code>total</code>: 8000 + 15000 + 7500 = 30500.0." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Employee[] staff = new Employee[5];
                    int count = 0;

                    staff[count] = new Employee("Ahmed", 8000);
                    count++;
                    staff[count] = new Manager("Dana", 12000, 3000);
                    count++;
                    staff[count] = new Employee("Ali", 7500);
                    count++;

                    double total = 0;
                    for (int i = 0; i < count; i++) {
                        System.out.println(staff[i].getName() + ": " + staff[i].pay());
                        total += staff[i].pay();
                    }
                    System.out.println("People: " + count);
                    System.out.println("Total payroll: " + total);
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
                double pay() { return super.pay() + bonus; }
            }
          `, out: J`
            Ahmed: 8000.0
            Dana: 15000.0
            Ali: 7500.0
            People: 3
            Total payroll: 30500.0
          `, ar: "مصفوفة من نوع Employee مع عدّاد count، والمدير يدخل فيها لأنه موظف. نكرر حتى count فقط." },
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
        "One array (or one method parameter) of the parent type can hold all the children. Upcasting is automatic.",
        "With an array and a count, loop to <code>count</code>, not to <code>length</code>."
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
          explain: "The array has the parent type, so it can hold both children. Each call runs the real object's <code>speak()</code>." },
        { t: 'bug', q: "This program does not compile: <code>cannot find symbol: method getLoad()</code>. Tap a line that causes the problem.",
          qAr: "المترجم لا يجد getLoad. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Vehicle v = new Truck("Trk-3", 12.5);
                    System.out.println(v.getLoad());
                }
            }
            class Vehicle {
                protected String id;
                Vehicle(String id) { this.id = id; }
            }
            class Truck extends Vehicle {
                private double load;
                Truck(String id, double load) { super(id); this.load = load; }
                double getLoad() { return load; }
            }
          `, bug: [3, 4],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Truck v = new Truck("Trk-3", 12.5);
                    System.out.println(v.getLoad());
                }
            }
            class Vehicle {
                protected String id;
                Vehicle(String id) { this.id = id; }
            }
            class Truck extends Vehicle {
                private double load;
                Truck(String id, double load) { super(id); this.load = load; }
                double getLoad() { return load; }
            }
          `,
          hint: "The compiler looks at the type of the box, not at the object.",
          explain: "The object is a Truck, but the variable on line 3 has type <code>Vehicle</code>, and Vehicle has no <code>getLoad()</code>. So the call on line 4 does not compile. If you need Truck methods, use a <code>Truck</code> variable (or check and cast, as in Lesson 7). The fixed program prints <code>12.5</code>.",
          explainAr: "المترجم ينظر إلى نوع المتغير Vehicle، وهو لا يملك getLoad." },
        { t: 'bug', q: "This program compiles, but it crashes with <code>NullPointerException</code>. Tap the line with the bug.",
          qAr: "البرنامج يتوقف بخطأ NullPointerException. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Employee[] staff = new Employee[5];
                    staff[0] = new Employee(8000);
                    staff[1] = new Manager(12000, 3000);
                    int count = 2;
                    double total = 0;
                    for (int i = 0; i < staff.length; i++) {
                        total += staff[i].pay();
                    }
                    System.out.println("Total: " + total);
                }
            }
            class Employee { double base; Employee(double b) { base = b; } double pay() { return base; } }
            class Manager extends Employee { double bonus; Manager(double b, double x) { super(b); bonus = x; } @Override double pay() { return base + bonus; } }
          `, bug: 8,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Employee[] staff = new Employee[5];
                    staff[0] = new Employee(8000);
                    staff[1] = new Manager(12000, 3000);
                    int count = 2;
                    double total = 0;
                    for (int i = 0; i < count; i++) {
                        total += staff[i].pay();
                    }
                    System.out.println("Total: " + total);
                }
            }
            class Employee { double base; Employee(double b) { base = b; } double pay() { return base; } }
            class Manager extends Employee { double bonus; Manager(double b, double x) { super(b); bonus = x; } @Override double pay() { return base + bonus; } }
          `,
          hint: "How many boxes of the array really hold an object?",
          explain: "The array has 5 boxes but only 2 are filled; <code>staff[2]</code> is <code>null</code>. Line 8 loops to <code>staff.length</code>, so <code>staff[2].pay()</code> is called on <code>null</code> and the program crashes. Loop with <code>i &lt; count</code>; it then prints <code>Total: 23000.0</code>.",
          explainAr: "كرر{{g:|ي}} حتى count لا حتى طول المصفوفة، لأن الخانات الباقية null." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  welcome(new Person("Saad"));
                  welcome(new Student("Lama"));
                  welcome(new Teacher("Dr. Huda"));
              }

              static void welcome(Person p) {
                  System.out.println("Welcome, " + p.getName() + " (" + p.role() + ")");
              }
          }

          class Person {
              private String name;

              Person(String name) { this.name = name; }

              String getName() { return name; }

              String role() { return "visitor"; }
          }

          class Student extends Person {
              Student(String name) { super(name); }

              @Override
              String role() { return "student"; }
          }

          class Teacher extends Person {
              Teacher(String name) { super(name); }

              @Override
              String role() { return "teacher"; }
          }
        `, answer: J`
          Welcome, Saad (visitor)
          Welcome, Lama (student)
          Welcome, Dr. Huda (teacher)
        `, explain: "<code>welcome</code> takes a <code>Person</code>, so all three objects fit. <code>getName()</code> is inherited by everyone; <code>role()</code> runs the version of the real object." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 7
    {
      title: 'instanceof, casting and getClass()',
      titleAr: 'instanceof والتحويل و getClass()',
      minutes: 35,
      body: [
        { type: 'h', en: 'Asking an object what it really is' },
        { type: 'p', en: "In the last lesson a <code>Vehicle</code> variable could hold a Car. But then we could not call Car-only methods like <code>getDoors()</code>. We need a way to ask: <i>\"Are you really a Car?\"</i> That question is the <code>instanceof</code> operator. It gives <code>true</code> or <code>false</code>.",
          ar: "instanceof تسأل الكائن: هل أنت فعلًا من هذا النوع؟ وتعطي true أو false." },
        { type: 'p', en: "Here is a real situation. A university system keeps all its people in one <code>Person[]</code> array: students, lecturers and staff. Most jobs work for everyone (print the name). But some jobs belong to one kind only: only students have a GPA, only employees have a salary. Before you ask for a GPA, you must find out which people are students. <code>instanceof</code> is how you find out." },
        { type: 'analogy', title: 'A sealed box labelled "Fruit"', en: "A box says \"Fruit\" on the outside. Before you peel it like a banana, you look inside: is it really a banana? <code>instanceof</code> is the look inside.",
          ar: "قبل أن تقشر الثمرة كالموز، تتأكد أنها موزة فعلًا." },
        { type: 'analogy', title: 'The student discount at the bookshop', en: "Anyone can buy from the campus bookshop. But before giving the 10% student discount, the cashier asks to see your student card. The card check is <code>instanceof Student</code>. Only after the check does the cashier treat you as a student (that is the cast) and apply the student-only discount (the child-only method).",
          ar: "قبل خصم الطلاب يطلب البائع بطاقتك الجامعية: هذا هو instanceof، ثم يعاملك كطالب: هذا هو التحويل." },
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
        { type: 'table', head: ['', 'Upcasting (Lesson 6)', 'Downcasting (this lesson)'], rows: [
            ['Direction', 'child object into a parent variable', 'parent variable into a child variable'],
            ['Example', '<code>Vehicle v = new Car(...);</code>', '<code>Car c = (Car) v;</code>'],
            ['Brackets needed?', 'No, automatic', 'Yes: <code>(Car)</code>'],
            ['Can it fail?', 'Never', 'Yes, if the object is not really a Car: check first']
          ] },
        { type: 'p', en: "A cast does <b>not</b> change the object and does <b>not</b> make a new one. It only gives you a new box, with a more specific type, that points to the <b>same</b> object. The memory picture shows it.",
          ar: "التحويل لا يغيّر الكائن ولا ينشئ كائنًا جديدًا؛ يعطيك متغيرًا بنوع أدق يشير إلى الكائن نفسه." },
        { type: 'memory', title: 'Casting gives a new box, not a new object', code: J`
            Vehicle v = new Car("Car-7", 4);
            Car c = (Car) v;
          `, frames: [
            { label: 'After <code>Vehicle v = new Car("Car-7", 4);</code> Through <code>v</code> you cannot call <code>getDoors()</code>.',
              vars: [{ name: 'v', type: 'Vehicle', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Car', fields: [{ name: 'id (from Vehicle)', value: '"Car-7"' }, { name: 'doors', value: '4' }] }] },
            { label: 'After <code>Car c = (Car) v;</code> Same object, second box. Through <code>c</code> you may call <code>getDoors()</code>.',
              vars: [{ name: 'v', type: 'Vehicle', ref: 'A' }, { name: 'c', type: 'Car', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Car', fields: [{ name: 'id (from Vehicle)', value: '"Car-7"' }, { name: 'doors', value: '4' }] }] }
          ], ar: "v و c يشيران إلى الكائن نفسه؛ الفرق فقط في الأزرار (الدوال) المتاحة لكل متغير." },
        { type: 'h', en: 'What a wrong cast looks like' },
        { type: 'p', en: "If you cast without checking and the object is something else, the program compiles but stops when it reaches that line. The message names both classes. (You will learn to handle such errors in Unit 6.)" },
        { type: 'code', code: J`
          Animal a = new Cat();
          Dog d = (Dog) a;      // compiles, but crashes when it runs:
          // Exception in thread "main" java.lang.ClassCastException:
          //     class Cat cannot be cast to class Dog
        ` },
        { type: 'p', en: "One more useful fact: <code>instanceof</code> is <b>false</b> for <code>null</code>, and it never crashes. So the check also protects you from the empty (<code>null</code>) boxes of a half-full array." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal a = null;
                  System.out.println(a instanceof Animal);
                  a = new Cat();
                  System.out.println(a instanceof Animal);
              }
          }

          class Animal { }

          class Cat extends Animal { }
        `, out: J`
          false
          true
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
          ar: "التحويل الخاطئ يسبب خطأ أثناء التشغيل، فتحقق بـ instanceof أولًا." },
        { type: 'h', en: 'Test the most special class first' },
        { type: 'p', en: "In an <code>if / else if</code> chain, the <b>order</b> of the <code>instanceof</code> tests matters. A Director is a Manager, and a Manager is an Employee. If you test <code>instanceof Employee</code> first, <b>everybody</b> passes that test, and the other branches never run. Always test the lowest (most special) class first, and the parent last.",
          ar: "في سلسلة if / else if اختبر{{g:|ي}} الصنف الأدق (الأسفل) أولًا، ثم الأب في النهاية." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Employee[] staff = { new Employee(), new Manager(), new Director() };
                  for (Employee e : staff) {
                      if (e instanceof Director) {
                          System.out.println("Director");
                      } else if (e instanceof Manager) {
                          System.out.println("Manager");
                      } else {
                          System.out.println("Employee");
                      }
                  }
              }
          }

          class Employee { }

          class Manager extends Employee { }

          class Director extends Manager { }
        `, out: J`
          Employee
          Manager
          Director
        ` },
        { type: 'check', q: "In the program above, what would the Director object print if the first test were <code>e instanceof Manager</code>?", options: [
            "Director", "Manager", "Employee"
          ], answer: 1, explain: "A Director is also a Manager, so the first test is already true and the Director branch is never reached." },
        { type: 'steps', title: 'Worked example: the library lends books and laptops', problem: "The university library lends books and laptops. All items are in one <code>Item[]</code> array. Print every title; for a book also print its pages, and for a laptop its battery hours. Finally print how many laptops are lent.",
          steps: [
            { en: "<b>Step 1.</b> The parent <code>Item</code> has the shared part: a title and <code>getTitle()</code>. <code>Book</code> adds <code>getPages()</code>; <code>Laptop</code> adds <code>getBatteryHours()</code>." },
            { en: "<b>Step 2.</b> Loop over the array. <code>getTitle()</code> is in Item, so every element can call it without any cast. Use <code>print</code> so the details stay on the same line.", code: J`
              for (Item it : items) {
                  System.out.print(it.getTitle() + ": ");
            ` },
            { en: "<b>Step 3.</b> Check, cast, use: once for Book and once for Laptop.", code: J`
              if (it instanceof Book) {
                  Book b = (Book) it;
                  System.out.println(b.getPages() + " pages");
              } else if (it instanceof Laptop) {
                  Laptop l = (Laptop) it;
                  System.out.println(l.getBatteryHours() + " hours battery");
                  laptops++;
              }
            ` },
            { en: "<b>Step 4.</b> After the loop print the counter. Book and Laptop are siblings, so the order of these two tests does not matter here." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Item[] items = {
                        new Book("Java Programming", 520),
                        new Laptop("Laptop L-12", 8),
                        new Book("Database Systems", 610)
                    };
                    int laptops = 0;
                    for (Item it : items) {
                        System.out.print(it.getTitle() + ": ");
                        if (it instanceof Book) {
                            Book b = (Book) it;
                            System.out.println(b.getPages() + " pages");
                        } else if (it instanceof Laptop) {
                            Laptop l = (Laptop) it;
                            System.out.println(l.getBatteryHours() + " hours battery");
                            laptops++;
                        }
                    }
                    System.out.println("Laptops lent: " + laptops);
                }
            }

            class Item {
                private String title;

                Item(String title) { this.title = title; }

                String getTitle() { return title; }
            }

            class Book extends Item {
                private int pages;

                Book(String title, int pages) {
                    super(title);
                    this.pages = pages;
                }

                int getPages() { return pages; }
            }

            class Laptop extends Item {
                private int batteryHours;

                Laptop(String title, int batteryHours) {
                    super(title);
                    this.batteryHours = batteryHours;
                }

                int getBatteryHours() { return batteryHours; }
            }
          `, out: J`
            Java Programming: 520 pages
            Laptop L-12: 8 hours battery
            Database Systems: 610 pages
            Laptops lent: 1
          `, ar: "الدوال المشتركة نستدعيها مباشرة، والدوال الخاصة نصل إليها بعد التحقق والتحويل." },
        { type: 'note', kind: 'tip', en: "Use <code>instanceof</code> only for things that <b>one</b> kind of object has. If <b>every</b> class has the job (for example describing itself), do not write a chain of <code>instanceof</code> tests: put the method in the parent and override it in each child. Unit 5 builds on this idea.",
          ar: "إذا كانت الدالة لكل الأصناف فاستخدم{{g:|ي}} التجاوز بدل سلسلة instanceof." }
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
        "<code>obj instanceof T</code> is true if the object is a T or a child of T; it is false for <code>null</code>.",
        "Cast after checking: <code>if (v instanceof Car) { Car c = (Car) v; }</code>.",
        "<code>getClass()</code> returns the exact class; <code>getSimpleName()</code> gives its name.",
        "A wrong cast crashes with <code>ClassCastException</code>. A cast never changes or copies the object.",
        "In an <code>if / else if</code> chain, test the most special class first."
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
          explain: "The array has declared type <code>Employee</code>, but each element runs its own <code>pay()</code> and <code>toString()</code>. <code>instanceof Manager</code> identifies the managers." },
        { t: 'bug', q: "There are 1 employee and 2 managers, but the program prints <code>Employees: 3, Managers: 0</code>. Tap a line that causes the problem.",
          qAr: "المديرون لا يُعدّون أبدًا. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Employee[] staff = { new Employee(), new Manager(), new Manager() };
                    int employees = 0, managers = 0;
                    for (Employee e : staff) {
                        if (e instanceof Employee) {
                            employees++;
                        } else if (e instanceof Manager) {
                            managers++;
                        }
                    }
                    System.out.println("Employees: " + employees + ", Managers: " + managers);
                }
            }
            class Employee { }
            class Manager extends Employee { }
          `, bug: [6, 8],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Employee[] staff = { new Employee(), new Manager(), new Manager() };
                    int employees = 0, managers = 0;
                    for (Employee e : staff) {
                        if (e instanceof Manager) {
                            managers++;
                        } else if (e instanceof Employee) {
                            employees++;
                        }
                    }
                    System.out.println("Employees: " + employees + ", Managers: " + managers);
                }
            }
            class Employee { }
            class Manager extends Employee { }
          `,
          hint: "Is a Manager also an instance of Employee?",
          explain: "A Manager <b>is an</b> Employee, so the first test on line 6 is true for every object, and the <code>else if</code> on line 8 is never reached. Test the more special class (<code>Manager</code>) first. The fixed program prints <code>Employees: 1, Managers: 2</code>.",
          explainAr: "المدير موظف أيضًا، فاختبر Manager أولًا." },
        { t: 'bug', q: "This program compiles, but it crashes with <code>ClassCastException</code>. Tap the line with the bug.",
          qAr: "البرنامج يتوقف بخطأ ClassCastException. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Vehicle[] fleet = { new Car(4), new Truck(), new Car(2) };
                    int doors = 0;
                    for (Vehicle v : fleet) {
                        Car c = (Car) v;
                        doors += c.getDoors();
                    }
                    System.out.println("Total doors: " + doors);
                }
            }
            class Vehicle { }
            class Car extends Vehicle { private int doors; Car(int d) { doors = d; } int getDoors() { return doors; } }
            class Truck extends Vehicle { }
          `, bug: 6,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Vehicle[] fleet = { new Car(4), new Truck(), new Car(2) };
                    int doors = 0;
                    for (Vehicle v : fleet) {
                        if (v instanceof Car) {
                            Car c = (Car) v;
                            doors += c.getDoors();
                        }
                    }
                    System.out.println("Total doors: " + doors);
                }
            }
            class Vehicle { }
            class Car extends Vehicle { private int doors; Car(int d) { doors = d; } int getDoors() { return doors; } }
            class Truck extends Vehicle { }
          `,
          hint: "Is every vehicle in the array a Car?",
          explain: "The second element is a Truck. Line 6 casts it to <code>Car</code> without checking, so the program stops with <code>ClassCastException</code>. Put the cast inside <code>if (v instanceof Car)</code>; the trucks are then skipped and the program prints <code>Total doors: 6</code>.",
          explainAr: "تحقق{{g:|ي}} بـ instanceof قبل التحويل." },
        { t: 'output', q: "The array has an empty box. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape[] shapes = new Shape[3];
                  shapes[0] = new Circle();
                  shapes[1] = new Square();
                  int circles = 0, empty = 0;
                  for (Shape s : shapes) {
                      if (s instanceof Circle) circles++;
                      if (s == null) empty++;
                      System.out.println(s instanceof Shape);
                  }
                  System.out.println(circles + " " + empty);
              }
          }

          class Shape { }

          class Circle extends Shape { }

          class Square extends Shape { }
        `, answer: J`
          true
          true
          false
          1 1
        `, explain: "The Circle and the Square are both Shapes: true, true. <code>shapes[2]</code> is <code>null</code>, and <code>instanceof</code> is false for null (without crashing). One circle, one empty box." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 8 (new)
    {
      title: 'Designing a hierarchy from a story',
      titleAr: 'تصميم هرمية من وصف مكتوب',
      minutes: 30,
      body: [
        { type: 'h', en: 'From a story to classes' },
        { type: 'p', en: "So far the classes were always given to you. In a real project nobody does that. A customer tells you a <b>story</b>: what the system must keep and do. Exam questions often work the same way: a short paragraph, then \"design the classes and draw the UML\". This lesson gives you a simple method to go from the story to a good hierarchy.",
          ar: "في المشاريع والاختبارات تحصل{{g:|ين}} على وصف مكتوب، وعليك أن تستخرج{{g:|ي}} منه الأصناف والهرمية." },
        { type: 'analogy', title: 'Packing for a group trip', en: "Five friends plan a trip to Abha. First they list what <b>everyone</b> needs: tickets, a map, a first-aid kit. They put these in one shared bag. Then each friend packs his <b>own</b> bag with his personal things. The shared bag is the parent class; the personal bags are the child classes. Nobody packs a second first-aid kit.",
          ar: "ما يحتاجه الجميع يوضع في حقيبة مشتركة (الأب)، وما يخص كل شخص يوضع في حقيبته (الابن)." },
        { type: 'p', en: "Here is the story we will use:" },
        { type: 'note', kind: 'tip', en: "<i>\"A bookshop near campus sells books, electronic items and food. Every product has a code, a name and a price, and the shop prints a label for it. A book also has an author. An electronic item, such as a calculator, has a warranty in months. A food item has the number of days before it expires.\"</i>" },
        { type: 'h', en: 'Step 1: list the nouns and their data' },
        { type: 'p', en: "Read the story slowly and underline the important <b>nouns</b> (names of things). They are candidate classes: Book, Electronic item, Food. For each one, write its data (fields) and its actions (methods)." },
        { type: 'table', head: ['Candidate class', 'Data (fields)', 'Actions (methods)'], rows: [
            ['Book', 'code, name, price, <b>author</b>', 'print a label'],
            ['Electronic', 'code, name, price, <b>warrantyMonths</b>', 'print a label'],
            ['Food', 'code, name, price, <b>expiryDays</b>', 'print a label']
          ] },
        { type: 'p', en: "Look at the table. Three fields and one action appear in <b>every</b> row. Only one field (in bold) is different in each row. If we wrote three separate classes, we would copy the same code three times, which is exactly the problem Lesson 1 solved." },
        { type: 'h', en: 'Step 2: move what is shared up' },
        { type: 'p', en: "Make a new parent class for the shared part. The story already gives it a name: every one of them is a <b>product</b>. Moving shared members up into a new parent is called <b>generalization</b>. The opposite direction, where each child adds its special members, is called <b>specialization</b>.",
          ar: "التعميم: نقل الأجزاء المشتركة إلى صنف أب جديد. التخصيص: كل ابن يضيف ما يميزه." },
        { type: 'analogy', title: 'University request forms', en: "Every request form at the university has the same top part: name, student ID and date. Below it, each form has its own part: a \"drop a course\" form asks for the course code, an \"excuse\" form asks for the reason. The office designs the top part once, for all forms. The top part is the parent; each form type is a child.",
          ar: "كل نماذج الجامعة لها جزء علوي مشترك، ثم جزء خاص بكل نموذج." },
        { type: 'code', code: J`
                          +-----------------------+
                          |        Product        |
                          +-----------------------+
                          | - code : String       |
                          | - name : String       |
                          | - price : double      |
                          +-----------------------+
                          | + getPrice() : double |
                          | + label() : String    |
                          +-----------------------+
                                      △
                                      |
                 +--------------------+--------------------+
                 |                    |                    |
          +-------------+    +------------------+   +-----------------+
          |    Book     |    |    Electronic    |   |      Food       |
          +-------------+    +------------------+   +-----------------+
          | - author    |    | - warrantyMonths |   | - expiryDays    |
          +-------------+    +------------------+   +-----------------+
          | + label()   |    | + label()        |   | + label()       |
          +-------------+    +------------------+   +-----------------+
        ` },
        { type: 'lines', title: 'Read the UML like a programmer', rows: [
            ['- code : String', 'The minus sign means <code>private</code>. The type comes after the colon.'],
            ['+ label() : String', 'The plus sign means <code>public</code>. (A <code>#</code> would mean <code>protected</code>.)'],
            ['△ and the lines', 'The hollow triangle touches the parent: Book, Electronic and Food each <b>is a</b> Product.'],
            ['- author', 'Each child box lists only its <b>new</b> fields. It does not repeat code, name and price.'],
            ['+ label() in the children', 'A method appears again in a child box only when the child <b>overrides</b> it.']
          ], ar: "علامة - تعني private، و + تعني public، و # تعني protected. والمثلث الفارغ يشير إلى الأب." },
        { type: 'check', q: "In the bookshop design, where does the field <code>warrantyMonths</code> belong?", options: [
            "In Product, so every product has it",
            "In Electronic only",
            "In all three child classes"
          ], answer: 1, explain: "Only electronic items have a warranty. A field goes up into the parent only when it makes sense for <b>every</b> child." },
        { type: 'h', en: 'Step 3: test every arrow and every field' },
        { type: 'p', en: "Now check the design with two quick tests. First, say the is-a sentence for every arrow: \"A Book is a Product\", \"A Food item is a Product\". All true. Second, for every field in the parent ask: <i>does this make sense for <b>all</b> children?</i> Does a food item have a price? Yes. Does a calculator have an author? No! So <code>author</code> must never go into Product. A wrong field in the parent gives every child a value that means nothing (an author of <code>null</code> for a box of dates).",
          ar: "اختبر{{g:|ي}} كل سهم بجملة \"هو\"، واختبر{{g:|ي}} كل حقل في الأب: هل يناسب كل الأبناء؟" },
        { type: 'steps', title: 'Worked example: from the bookshop story to code', problem: "Turn the bookshop design into Java. Each product prints a label; the child classes add their special part to the label. Put three products in one array and print all the labels.",
          steps: [
            { en: "<b>Step 1.</b> Write the parent with the shared fields, a constructor and the general <code>label()</code>.", code: J`
              class Product {
                  private String code;
                  private String name;
                  private double price;

                  Product(String code, String name, double price) {
                      this.code = code;
                      this.name = name;
                      this.price = price;
                  }

                  double getPrice() { return price; }

                  String label() {
                      return code + " " + name + " - " + price + " SAR";
                  }
              }
            ` },
            { en: "<b>Step 2.</b> Write <code>Book</code>. It declares only <code>author</code>, sends the shared values up with <code>super(...)</code>, and overrides <code>label()</code> by adding to the parent's label.", code: J`
              class Book extends Product {
                  private String author;

                  Book(String code, String name, double price, String author) {
                      super(code, name, price);
                      this.author = author;
                  }

                  @Override
                  String label() {
                      return super.label() + " (by " + author + ")";
                  }
              }
            ` },
            { en: "<b>Step 3.</b> <code>Electronic</code> and <code>Food</code> follow the same pattern with their own field." },
            { en: "<b>Step 4.</b> In <code>main</code>, one <code>Product[]</code> array holds all three kinds. One loop prints every label; each object runs its own <code>label()</code>." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Product[] shelf = {
                        new Book("B01", "Java Basics", 85.0, "A. Salem"),
                        new Electronic("E07", "Calculator", 120.0, 12),
                        new Food("F03", "Dates box", 35.0, 60)
                    };
                    for (Product p : shelf) {
                        System.out.println(p.label());
                    }
                }
            }

            class Product {
                private String code;
                private String name;
                private double price;

                Product(String code, String name, double price) {
                    this.code = code;
                    this.name = name;
                    this.price = price;
                }

                double getPrice() { return price; }

                String label() {
                    return code + " " + name + " - " + price + " SAR";
                }
            }

            class Book extends Product {
                private String author;

                Book(String code, String name, double price, String author) {
                    super(code, name, price);
                    this.author = author;
                }

                @Override
                String label() {
                    return super.label() + " (by " + author + ")";
                }
            }

            class Electronic extends Product {
                private int warrantyMonths;

                Electronic(String code, String name, double price, int warrantyMonths) {
                    super(code, name, price);
                    this.warrantyMonths = warrantyMonths;
                }

                @Override
                String label() {
                    return super.label() + " (warranty " + warrantyMonths + " months)";
                }
            }

            class Food extends Product {
                private int expiryDays;

                Food(String code, String name, double price, int expiryDays) {
                    super(code, name, price);
                    this.expiryDays = expiryDays;
                }

                @Override
                String label() {
                    return super.label() + " (use within " + expiryDays + " days)";
                }
            }
          `, out: J`
            B01 Java Basics - 85.0 SAR (by A. Salem)
            E07 Calculator - 120.0 SAR (warranty 12 months)
            F03 Dates box - 35.0 SAR (use within 60 days)
          `, ar: "الحقول المشتركة كُتبت مرة واحدة في Product، وكل ابن أضاف حقله وجزءه من الملصق فقط." },
        { type: 'memory', title: 'A Book object holds a Product part and a Book part', code: J`
            Book b = new Book("B01", "Java Basics", 85.0, "A. Salem");
            Product p = b;
          `, frames: [
            { label: 'After <code>Book b = new Book(...);</code> One object: three fields from Product, one from Book.',
              vars: [{ name: 'b', type: 'Book', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Book', fields: [{ name: 'code (Product part)', value: '"B01"' }, { name: 'name (Product part)', value: '"Java Basics"' }, { name: 'price (Product part)', value: '85.0' }, { name: 'author (Book part)', value: '"A. Salem"' }] }] },
            { label: 'After <code>Product p = b;</code> A Product box can point to the Book, as in the shelf array.',
              vars: [{ name: 'b', type: 'Book', ref: 'A' }, { name: 'p', type: 'Product', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Book', fields: [{ name: 'code (Product part)', value: '"B01"' }, { name: 'name (Product part)', value: '"Java Basics"' }, { name: 'price (Product part)', value: '85.0' }, { name: 'author (Book part)', value: '"A. Salem"' }] }] }
          ], ar: "كائن Book واحد يحتوي على جزء Product وجزء Book." },
        { type: 'steps', title: 'Worked example: a delivery app in Jeddah', problem: "Design from a second story: <i>\"A delivery app has orders. Every order has a number and a distance in km. A normal order costs 10 SAR plus 2 SAR per km. A food order also has a restaurant name and costs 5 SAR more. A parcel order also has a weight in kg and costs 3 SAR more per kg.\"</i> Print each order and the total of all fees.",
          steps: [
            { en: "<b>Step 1. Nouns and data.</b> Order: number, km. Food order: number, km, restaurant. Parcel order: number, km, weight. Every one can compute a fee and describe itself." },
            { en: "<b>Step 2. Generalize.</b> Number, km, <code>fee()</code> and <code>describe()</code> are shared, so they go into the parent <code>Order</code>. Here the parent is a real kind of order too, so it is a normal class we can create." },
            { en: "<b>Step 3. Specialize.</b> <code>FoodOrder</code> adds <code>restaurant</code>; <code>ParcelOrder</code> adds <code>weightKg</code>. Both override <code>fee()</code> with <code>super.fee()</code> plus their extra, and <code>describe()</code> in the same way.", code: J`
              @Override
              int fee() {
                  return super.fee() + 3 * weightKg;
              }
            ` },
            { en: "<b>Step 4. Test.</b> \"A food order is an order\": true. Does every order have a distance? Yes, so <code>km</code> belongs in the parent. Does every order have a weight? No, so <code>weightKg</code> stays in ParcelOrder." },
            { en: "<b>Step 5. Trace.</b> Order 101, 4 km: 10 + 8 = 18. Food order 102, 3 km: 10 + 6 + 5 = 21. Parcel 103, 10 km, 2 kg: 10 + 20 + 6 = 36. Total: 75." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Order[] orders = {
                        new Order(101, 4),
                        new FoodOrder(102, 3, "Kabsa Corner"),
                        new ParcelOrder(103, 10, 2)
                    };
                    int total = 0;
                    for (Order o : orders) {
                        System.out.println(o.describe() + ": " + o.fee() + " SAR");
                        total += o.fee();
                    }
                    System.out.println("Total: " + total + " SAR");
                }
            }

            class Order {
                private int number;
                private int km;

                Order(int number, int km) {
                    this.number = number;
                    this.km = km;
                }

                int fee() {
                    return 10 + 2 * km;
                }

                String describe() {
                    return "Order " + number;
                }
            }

            class FoodOrder extends Order {
                private String restaurant;

                FoodOrder(int number, int km, String restaurant) {
                    super(number, km);
                    this.restaurant = restaurant;
                }

                @Override
                int fee() {
                    return super.fee() + 5;
                }

                @Override
                String describe() {
                    return super.describe() + " from " + restaurant;
                }
            }

            class ParcelOrder extends Order {
                private int weightKg;

                ParcelOrder(int number, int km, int weightKg) {
                    super(number, km);
                    this.weightKg = weightKg;
                }

                @Override
                int fee() {
                    return super.fee() + 3 * weightKg;
                }

                @Override
                String describe() {
                    return super.describe() + ", " + weightKg + " kg";
                }
            }
          `, out: J`
            Order 101: 18 SAR
            Order 102 from Kabsa Corner: 21 SAR
            Order 103, 2 kg: 36 SAR
            Total: 75 SAR
          `, ar: "طبقنا الطريقة نفسها: الأسماء والبيانات، ثم التعميم، ثم التخصيص، ثم الاختبار." },
        { type: 'note', kind: 'exam', en: "In a design question, marks are usually given for: the correct parent and children, shared fields <b>only</b> in the parent, special fields only in the right child, correct UML symbols (<code>-</code>, <code>+</code>, <code>#</code>, hollow triangle), and constructors that call <code>super(...)</code>.",
          ar: "في أسئلة التصميم: الحقول المشتركة في الأب فقط، والخاصة في الابن المناسب، ورموز UML صحيحة." }
      ],
      mistakes: [
        { title: 'Putting a special field in the parent', en: "Only books have an author. In Product, every calculator and every box of dates would carry a meaningless <code>author</code>.", code: J`
          class Product {
              private String name;
              private String author;        // wrong: only books have an author
          }
        `, ar: "الحقل الخاص بابن واحد لا يوضع في الأب." },
        { title: 'Repeating parent fields in the children', en: "If Product has <code>price</code>, Book must not declare <code>price</code> again. It inherits it.", code: J`
          class Book extends Product {
              private double price;         // wrong: already in Product
              private String author;
          }
        ` },
        { title: 'Making siblings inherit from each other', en: "Food is not a Book, even if you want to reuse <code>label()</code>. Both should extend the common parent.", code: J`
          class Food extends Book { }       // wrong: a Food item is not a Book
        ` },
        { title: 'A new class for every small difference', en: "A red book and a blue book differ only in a <b>value</b>. Use a field, not a new class. Make a child class only when there is new data or new behaviour.", code: J`
          class RedBook extends Book { }    // wrong: colour should be a field
        ` }
      ],
      remember: [
        "Method: (1) list nouns and their data, (2) move shared members up, (3) keep special members in each child, (4) test.",
        "Moving shared members into a parent is <b>generalization</b>; children adding members is <b>specialization</b>.",
        "A field belongs in the parent only if it makes sense for <b>every</b> child.",
        "Test every arrow with \"A ___ is a ___\".",
        "UML: <code>-</code> private, <code>+</code> public, <code>#</code> protected; a hollow triangle points to the parent; children list only new members."
      ],
      rememberAr: "استخرج{{g:|ي}} الأسماء وبياناتها، وانقل{{g:|ي}} المشترك إلى الأب، واترك{{g:|ي}} الخاص في الأبناء، ثم اختبر{{g:|ي}} بجملة \"هو\". الحقل في الأب يجب أن يناسب كل الأبناء.",
      practice: [
        { t: 'mcq', q: "What does <b>generalization</b> mean when you design classes?",
          options: [
            "Copying the shared fields into every class",
            "Moving the members that several classes share into a new parent class",
            "Making every field public",
            "Writing one very big class for everything"
          ], answer: 1,
          explain: "Generalization finds what classes have in common and puts it once in a parent. The children then add only their special members (specialization)." },
        { t: 'mcq', q: "A transport company has cars, buses and trucks. All have a plate number. Buses have seats; trucks have a maximum load. Which field belongs in the parent class <code>Vehicle</code>?",
          options: ["seats", "maxLoad", "plate", "all three"], answer: 2,
          explain: "Only the plate number makes sense for every vehicle. Seats belong to Bus and the maximum load to Truck." },
        { t: 'fill', q: "Complete the UML lines for class <code>Product</code>: <code>code</code> is private, <code>label()</code> is public and <code>discount</code> is protected.", code: J`
          ___ code : String
          ___ discount : double
          ___ label() : String
        `, answers: ['-', '#', '+'],
          explain: "In UML, <code>-</code> means private, <code>#</code> means protected and <code>+</code> means public." },
        { t: 'bug', q: "This design compiles, but one line is a <b>design</b> bug: it gives every product a value that is meaningless for most of them. Tap that line.",
          qAr: "التصميم يُترجم، لكن فيه خطأ تصميمي. أين هو؟",
          code: J`
            class Product {
                String name;
                double price;
                int pages;
            }
            class Book extends Product {
                String author;
            }
            class Food extends Product {
                int expiryDays;
            }
          `, bug: 4,
          fix: J`
            class Product {
                String name;
                double price;
            }
            class Book extends Product {
                String author;
                int pages;
            }
            class Food extends Product {
                int expiryDays;
            }
          `,
          hint: "Does a box of dates have pages?",
          explain: "Only books have pages, but line 4 puts <code>pages</code> in Product, so every Food object also gets a <code>pages</code> field (always 0). Move <code>pages</code> down into Book. A parent should hold only what <b>every</b> child shares.",
          explainAr: "عدد الصفحات خاص بالكتاب، فمكانه Book لا Product." },
        { t: 'order', q: "Arrange the lines of class <code>Food</code> from the bookshop design.",
          lines: [
            "class Food extends Product {",
            "    private int expiryDays;",
            "    Food(String code, String name, double price, int expiryDays) {",
            "        super(code, name, price);",
            "        this.expiryDays = expiryDays;",
            "    }",
            "}"
          ],
          explain: "The header says Food is a Product; the class declares only its special field; the constructor sends the shared values up first with <code>super(...)</code>." },
        { t: 'code', q: "Class <code>Product</code> is written for you. Write class <code>Food</code> that extends it, adds an <code>int expiryDays</code> field, calls <code>super(...)</code>, and overrides <code>label()</code> to return the parent's label followed by <code> (use within N days)</code>. <code>main</code> reads a code, a name (one word), a price and the days. No prompts.",
          qAr: "اكتب الصنف Food الذي يرث من Product ويتجاوز label مستخدمًا super.label().",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String code = sc.next();
                    String name = sc.next();
                    double price = sc.nextDouble();
                    int days = sc.nextInt();
                    Product p = new Food(code, name, price, days);
                    System.out.println(p.label());
                }
            }

            class Product {
                private String code;
                private String name;
                private double price;

                Product(String code, String name, double price) {
                    this.code = code;
                    this.name = name;
                    this.price = price;
                }

                String label() {
                    return code + " " + name + " - " + price + " SAR";
                }
            }

            // write class Food here
          `,
          tests: [
            { stdin: J`
              F03 Dates 35.0 60
            `, expected: J`
              F03 Dates - 35.0 SAR (use within 60 days)
            ` },
            { stdin: J`
              F11 Laban 4.5 7
            `, expected: J`
              F11 Laban - 4.5 SAR (use within 7 days)
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String code = sc.next();
                    String name = sc.next();
                    double price = sc.nextDouble();
                    int days = sc.nextInt();
                    Product p = new Food(code, name, price, days);
                    System.out.println(p.label());
                }
            }

            class Product {
                private String code;
                private String name;
                private double price;

                Product(String code, String name, double price) {
                    this.code = code;
                    this.name = name;
                    this.price = price;
                }

                String label() {
                    return code + " " + name + " - " + price + " SAR";
                }
            }

            class Food extends Product {
                private int expiryDays;

                Food(String code, String name, double price, int expiryDays) {
                    super(code, name, price);
                    this.expiryDays = expiryDays;
                }

                @Override
                String label() {
                    return super.label() + " (use within " + expiryDays + " days)";
                }
            }
          `,
          hint: "The fields of Product are private, so do not try to read <code>code</code> or <code>price</code> in Food: use <code>super.label()</code>.",
          explain: "Food stores only its own field. <code>super(...)</code> lets Product store the shared ones, and <code>super.label()</code> builds the shared part of the label." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 9 (new)
    {
      title: 'toString and equals in a hierarchy',
      titleAr: 'toString و equals في الهرمية',
      minutes: 30,
      body: [
        { type: 'h', en: 'Printing a whole family' },
        { type: 'p', en: "In Lesson 2 you wrote <code>toString()</code> for one class. In a hierarchy there is a new problem. A Student's text should show the Person part (name, ID) <b>and</b> the Student part (major). But the Person fields are <code>private</code>, so Student code cannot read them. And copying the Person text into Student would mean copying code again. The answer is <code>super.toString()</code>: the child asks the parent for its part of the text and adds its own.",
          ar: "الابن يطلب نص الأب بـ super.toString() ثم يضيف حقوله، دون أن يقرأ حقول الأب الخاصة." },
        { type: 'analogy', title: 'A parcel label and an express sticker', en: "The post office prints the main label on every parcel: name and address. For an express parcel they do not print a new label. They keep the main label and add a red \"EXPRESS\" sticker next to it. <code>super.toString()</code> is the main label; the child adds its sticker.",
          ar: "الملصق الأساسي يبقى كما هو، والابن يضيف ملصقه الخاص بجانبه." },
        { type: 'code', code: J`
          class Student extends Person {
              private String major;

              @Override
              public String toString() {
                  return super.toString() + ", major: " + major;
              }
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['@Override public String toString()', 'Student replaces the toString() it inherited from Person.'],
            ['super.toString()', 'Runs <b>Person</b>\'s toString() on this same object. It returns, for example, <code>"Lama (S-221)"</code>.'],
            ['+ ", major: " + major', 'Student adds only what it owns. It never touches the private name or ID.']
          ], ar: "super.toString() تعطي جزء Person من النص، ثم يضيف Student التخصص." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Person p = new Person("Saad", "P-100");
                  Student s = new Student("Lama", "S-221", "IS");
                  System.out.println(p);
                  System.out.println(s);
              }
          }

          class Person {
              private String name;
              private String id;

              Person(String name, String id) {
                  this.name = name;
                  this.id = id;
              }

              @Override
              public String toString() {
                  return name + " (" + id + ")";
              }
          }

          class Student extends Person {
              private String major;

              Student(String name, String id, String major) {
                  super(name, id);
                  this.major = major;
              }

              @Override
              public String toString() {
                  return super.toString() + ", major: " + major;
              }
          }
        `, out: J`
          Saad (P-100)
          Lama (S-221), major: IS
        ` },
        { type: 'check', q: "In the program above, what does <code>super.toString()</code> return while printing Lama?", options: [
            "<code>Lama (S-221), major: IS</code>",
            "<code>Lama (S-221)</code>",
            "<code>Student@1b6d3586</code>"
          ], answer: 1, explain: "<code>super.toString()</code> runs Person's version, which knows only the name and the ID. Student then adds <code>, major: IS</code>." },
        { type: 'steps', title: 'Worked example: three levels, each adds one piece', problem: "A graduate student is a student who also writes a thesis. Make <code>GradStudent extends Student</code> and let each of the three classes add its own piece to the text.",
          steps: [
            { en: "<b>Step 1.</b> Person gives the base text: <code>name (id)</code>. Student adds the major, as above." },
            { en: "<b>Step 2.</b> GradStudent adds a <code>thesis</code> field and overrides <code>toString()</code> in the same way.", code: J`
              @Override
              public String toString() {
                  return super.toString() + ", thesis: " + thesis;
              }
            ` },
            { en: "<b>Step 3.</b> Trace <code>println(g)</code>. GradStudent's toString calls <code>super.toString()</code>, which is <b>Student</b>'s. Student's calls <code>super.toString()</code>, which is <b>Person</b>'s. Person returns <code>Nora (S-310)</code>." },
            { en: "<b>Step 4.</b> The texts come back down: Student adds <code>, major: CS</code>, then GradStudent adds <code>, thesis: Smart Parking</code>." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    GradStudent g = new GradStudent("Nora", "S-310", "CS", "Smart Parking");
                    System.out.println(g);
                }
            }

            class Person {
                private String name;
                private String id;

                Person(String name, String id) {
                    this.name = name;
                    this.id = id;
                }

                @Override
                public String toString() {
                    return name + " (" + id + ")";
                }
            }

            class Student extends Person {
                private String major;

                Student(String name, String id, String major) {
                    super(name, id);
                    this.major = major;
                }

                @Override
                public String toString() {
                    return super.toString() + ", major: " + major;
                }
            }

            class GradStudent extends Student {
                private String thesis;

                GradStudent(String name, String id, String major, String thesis) {
                    super(name, id, major);
                    this.thesis = thesis;
                }

                @Override
                public String toString() {
                    return super.toString() + ", thesis: " + thesis;
                }
            }
          `, out: J`
            Nora (S-310), major: CS, thesis: Smart Parking
          `, ar: "كل مستوى يستدعي نسخة أبيه ثم يضيف قطعة واحدة، فيتكوّن النص كاملًا." },
        { type: 'h', en: 'equals: same data, not same object' },
        { type: 'p', en: "In Lesson 2 the inherited <code>equals</code> said <code>false</code> for two different objects, even with exactly the same data. Often that is wrong for your program. Two Student objects with the same university ID are the <b>same student</b>. Two Product objects with the same code are the <b>same product</b>, even if one was made from yesterday's list. You decide what \"equal\" means by overriding <code>equals</code>.",
          ar: "نعيد تعريف equals لتقارن البيانات المهمة (مثل الرقم الجامعي) بدل أن تسأل: هل هو الكائن نفسه؟" },
        { type: 'analogy', title: 'An ID card and its photocopy', en: "Your ID card and a photocopy of it are two different pieces of paper: two objects. But they describe the same person: the same data. <code>==</code> asks \"is it the same piece of paper?\" Your own <code>equals</code> asks \"is it the same person?\", by comparing the ID number.",
          ar: "البطاقة وصورتها ورقتان مختلفتان (==) لكنهما لنفس الشخص (equals)." },
        { type: 'memory', title: '== compares arrows, equals compares data', code: J`
            Product a = new Product("B01", "Java Basics", 85.0);
            Product b = new Product("B01", "Java Basics", 80.0);
            Product c = a;
          `, frames: [
            { label: 'After <code>a</code> and <code>b</code>: two different objects with the same code.',
              vars: [{ name: 'a', type: 'Product', ref: 'A' }, { name: 'b', type: 'Product', ref: 'B' }],
              objects: [{ id: 'A', cls: 'Product', fields: [{ name: 'code', value: '"B01"' }, { name: 'name', value: '"Java Basics"' }, { name: 'price', value: '85.0' }] },
                        { id: 'B', cls: 'Product', fields: [{ name: 'code', value: '"B01"' }, { name: 'name', value: '"Java Basics"' }, { name: 'price', value: '80.0' }] }] },
            { label: 'After <code>Product c = a;</code> Now <code>a == c</code> is true (same arrow), <code>a == b</code> is false (different arrows), and with our equals <code>a.equals(b)</code> is true (same code).',
              vars: [{ name: 'a', type: 'Product', ref: 'A' }, { name: 'b', type: 'Product', ref: 'B' }, { name: 'c', type: 'Product', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Product', fields: [{ name: 'code', value: '"B01"' }, { name: 'name', value: '"Java Basics"' }, { name: 'price', value: '85.0' }] },
                        { id: 'B', cls: 'Product', fields: [{ name: 'code', value: '"B01"' }, { name: 'name', value: '"Java Basics"' }, { name: 'price', value: '80.0' }] }] }
          ], ar: "== تقارن الأسهم (هل هو الكائن نفسه؟)، و equals التي نكتبها تقارن البيانات." },
        { type: 'p', en: "Write <code>equals</code> with this recipe. Learn it by heart; it is the same in almost every class:" },
        { type: 'list', items: [
            "<b>1.</b> The header must be exactly <code>public boolean equals(Object o)</code>. The parameter type is <code>Object</code>, as in the Object class.",
            "<b>2.</b> <code>if (this == o) return true;</code> The same object is always equal to itself.",
            "<b>3.</b> <code>if (o == null || getClass() != o.getClass()) return false;</code> Nothing is equal to null or to an object of another class.",
            "<b>4.</b> Cast: <code>Product other = (Product) o;</code> Now you can read the other object's fields.",
            "<b>5.</b> Compare the important fields: numbers with <code>==</code>, Strings with <code>.equals()</code>."
          ], ar: "الوصفة: الرأس بمعامل Object، ثم نفس الكائن، ثم null والصنف، ثم التحويل، ثم مقارنة الحقول." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Product a = new Product("B01", "Java Basics", 85.0);
                  Product b = new Product("B01", "Java Basics", 80.0);
                  Product c = new Product("E07", "Calculator", 120.0);
                  System.out.println(a == b);
                  System.out.println(a.equals(b));
                  System.out.println(a.equals(c));
              }
          }

          class Product {
              private String code;
              private String name;
              private double price;

              Product(String code, String name, double price) {
                  this.code = code;
                  this.name = name;
                  this.price = price;
              }

              @Override
              public boolean equals(Object o) {
                  if (this == o) return true;
                  if (o == null || getClass() != o.getClass()) return false;
                  Product other = (Product) o;
                  return code.equals(other.code);
              }
          }
        `, out: J`
          false
          true
          false
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['public boolean equals(Object o)', 'Same header as in Object, so this <b>overrides</b> it. <code>@Override</code> checks that.'],
            ['getClass() != o.getClass()', 'If <code>o</code> is not exactly a Product, the answer is false.'],
            ['Product other = (Product) o;', 'Safe cast: we already know <code>o</code> is a Product.'],
            ['code.equals(other.code)', 'Two products are equal when their codes are equal. <code>other.code</code> is private, but we are inside Product, so we may read it: <code>private</code> means private to the <b>class</b>, not to one object.']
          ], ar: "داخل الصنف Product يمكن قراءة الحقل الخاص لكائن Product آخر." },
        { type: 'check', q: "Which header correctly <b>overrides</b> <code>equals</code> in class <code>Student</code>?", options: [
            "<code>public boolean equals(Student s)</code>",
            "<code>public boolean equals(Object o)</code>",
            "<code>public String equals(Object o)</code>"
          ], answer: 1, explain: "The parameter must be <code>Object</code> and the return type <code>boolean</code>, exactly as in the Object class. <code>equals(Student s)</code> is an overload: a different method that Java's own tools never call." },
        { type: 'h', en: 'equals in a child class' },
        { type: 'p', en: "A child class may add a field that matters for equality. It then reuses the parent's check with <code>super.equals(o)</code> first (this checks null, the class and the parent's fields), and compares only its own field after that. This is the same pattern as <code>super.toString()</code>." },
        { type: 'steps', title: 'Worked example: points and coloured pins on a campus map', problem: "A campus map has points (x, y). A <code>Pin</code> is a point with a colour. Two points are equal when they are at the same place. Two pins are equal when they are at the same place <b>and</b> have the same colour. A plain point is never equal to a pin.",
          steps: [
            { en: "<b>Step 1.</b> <code>MapPoint.equals</code> follows the recipe and compares <code>x</code> and <code>y</code> with <code>==</code> (they are ints).", code: J`
              @Override
              public boolean equals(Object o) {
                  if (this == o) return true;
                  if (o == null || getClass() != o.getClass()) return false;
                  MapPoint other = (MapPoint) o;
                  return x == other.x && y == other.y;
              }
            ` },
            { en: "<b>Step 2.</b> <code>Pin.equals</code> first asks the parent. If the parent says false (other class, other place), the answer is false.", code: J`
              @Override
              public boolean equals(Object o) {
                  if (!super.equals(o)) return false;
                  Pin other = (Pin) o;
                  return color.equals(other.color);
              }
            ` },
            { en: "<b>Step 3.</b> The cast to <code>Pin</code> is safe: <code>super.equals</code> already checked that both objects have exactly the same class." },
            { en: "<b>Step 4.</b> Trace the four tests: two points at (2, 3): true. Two red pins at (5, 1): true. A red and a blue pin at (5, 1): false (colour). A point and a pin at (5, 1): false, because <code>getClass()</code> differs." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    MapPoint p1 = new MapPoint(2, 3);
                    MapPoint p2 = new MapPoint(2, 3);
                    Pin red1 = new Pin(5, 1, "red");
                    Pin red2 = new Pin(5, 1, "red");
                    Pin blue = new Pin(5, 1, "blue");
                    MapPoint p3 = new MapPoint(5, 1);
                    System.out.println(p1.equals(p2));
                    System.out.println(red1.equals(red2));
                    System.out.println(red1.equals(blue));
                    System.out.println(p3.equals(red1));
                }
            }

            class MapPoint {
                private int x;
                private int y;

                MapPoint(int x, int y) {
                    this.x = x;
                    this.y = y;
                }

                @Override
                public boolean equals(Object o) {
                    if (this == o) return true;
                    if (o == null || getClass() != o.getClass()) return false;
                    MapPoint other = (MapPoint) o;
                    return x == other.x && y == other.y;
                }
            }

            class Pin extends MapPoint {
                private String color;

                Pin(int x, int y, String color) {
                    super(x, y);
                    this.color = color;
                }

                @Override
                public boolean equals(Object o) {
                    if (!super.equals(o)) return false;
                    Pin other = (Pin) o;
                    return color.equals(other.color);
                }
            }
          `, out: J`
            true
            true
            false
            false
          `, ar: "Pin تستدعي equals الأب أولًا، ثم تقارن اللون فقط." },
        { type: 'note', kind: 'tip', en: "In Unit 7 you will learn that a class which overrides <code>equals</code> should also override a method called <code>hashCode()</code>, so that its objects work correctly in collections. For now, <code>equals</code> is enough.",
          ar: "في الوحدة السابعة ستتعلم{{g:|ين}} كتابة hashCode مع equals." }
      ],
      mistakes: [
        { title: 'equals with the wrong parameter type', en: "With a <code>Student</code> parameter you <b>overload</b> equals instead of overriding it. Code that sees the objects as <code>Object</code> (for example the collections of Unit 7) still uses the old version that compares arrows. <code>@Override</code> would report the error.", code: J`
          public boolean equals(Student s) { ... }     // wrong: must be (Object o)
        `, ar: "معامل equals يجب أن يكون Object." },
        { title: 'Comparing Strings with == inside equals', en: "<code>==</code> on Strings compares arrows, not letters. Use <code>.equals()</code> for String fields.", code: J`
          return code == other.code;                   // wrong: use code.equals(other.code)
        ` },
        { title: 'Calling toString() instead of super.toString()', en: "Without <code>super.</code>, the method calls <b>itself</b> again and again until the program crashes with <code>StackOverflowError</code>.", code: J`
          public String toString() {
              return toString() + ", major: " + major;  // wrong: endless
          }
        ` },
        { title: "Reading the parent's private fields in the child", en: "The child cannot use the parent's private names. Use <code>super.toString()</code> or the parent's getters.", code: J`
          public String toString() {
              return name + ", major: " + major;        // error if name is private in Person
          }
        ` }
      ],
      remember: [
        "In a child, build the text with <code>super.toString() + ...own fields...</code>.",
        "<code>==</code> asks \"same object?\"; your <code>equals</code> decides what \"same data\" means.",
        "The equals header is exactly <code>public boolean equals(Object o)</code>; add <code>@Override</code>.",
        "Recipe: same object? null or other class? cast, then compare fields (Strings with <code>.equals</code>).",
        "A child's equals starts with <code>if (!super.equals(o)) return false;</code> and then compares its own fields."
      ],
      rememberAr: "في الابن: super.toString() ثم الحقول الخاصة. == تقارن الأسهم و equals تقارن البيانات. رأس equals بمعامل Object. الابن يستدعي super.equals أولًا.",
      practice: [
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Vehicle v = new Vehicle("RUH-1234");
                  Bus b = new Bus("JED-5678", 40);
                  System.out.println(v);
                  System.out.println(b);
              }
          }

          class Vehicle {
              private String plate;

              Vehicle(String plate) { this.plate = plate; }

              @Override
              public String toString() { return "Vehicle " + plate; }
          }

          class Bus extends Vehicle {
              private int seats;

              Bus(String plate, int seats) {
                  super(plate);
                  this.seats = seats;
              }

              @Override
              public String toString() { return super.toString() + " with " + seats + " seats"; }
          }
        `, answer: J`
          Vehicle RUH-1234
          Vehicle JED-5678 with 40 seats
        `, explain: "The Bus text starts with Vehicle's text (<code>super.toString()</code>), then adds the seats." },
        { t: 'mcq', q: "<code>a</code> and <code>b</code> are two different Product objects with the same code, and Product overrides <code>equals</code> to compare codes. What are <code>a == b</code> and <code>a.equals(b)</code>?",
          options: ["true and true", "false and true", "true and false", "false and false"], answer: 1,
          explain: "<code>==</code> compares the arrows: two different objects, so false. Our <code>equals</code> compares the codes: true." },
        { t: 'fill', q: "Complete the child's toString and the header of equals.", code: J`
          class Student extends Person {
              private String major;

              @Override
              public String toString() {
                  return ___.toString() + ", major: " + major;
              }

              @Override
              public boolean equals(___ o) {
                  if (!super.equals(o)) return false;
                  Student other = (Student) o;
                  return major.equals(other.major);
              }
          }
        `, answers: ['super', 'Object'],
          explain: "<code>super.toString()</code> gives the parent's text. The parameter of <code>equals</code> must be <code>Object</code> to override the inherited method." },
        { t: 'bug', q: "Both students have the ID <code>S-221</code>, so the program should print <code>true</code>. It prints <code>false</code>. Tap the line with the bug.",
          qAr: "الطالبان لهما الرقم نفسه لكن النتيجة false. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Object a = new Student("S-221");
                    Object b = new Student("S-221");
                    System.out.println(a.equals(b));
                }
            }
            class Student {
                private String id;
                Student(String id) { this.id = id; }
                public boolean equals(Student other) {
                    return id.equals(other.id);
                }
            }
          `, bug: 11,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Object a = new Student("S-221");
                    Object b = new Student("S-221");
                    System.out.println(a.equals(b));
                }
            }
            class Student {
                private String id;
                Student(String id) { this.id = id; }
                @Override
                public boolean equals(Object o) {
                    if (this == o) return true;
                    if (o == null || getClass() != o.getClass()) return false;
                    Student other = (Student) o;
                    return id.equals(other.id);
                }
            }
          `,
          hint: "Compare the parameter type with the <code>equals</code> in the Object class.",
          explain: "Line 11 takes a <code>Student</code>, so it <b>overloads</b> equals instead of overriding it. The variables have type <code>Object</code>, so Java uses <code>equals(Object)</code>, the version inherited from Object, which compares arrows: false. Use <code>equals(Object o)</code> with the recipe and <code>@Override</code>.",
          explainAr: "equals(Student) دالة جديدة لا تجاوز؛ يجب أن يكون المعامل Object." },
        { t: 'bug', q: "This program compiles, but it crashes with <code>StackOverflowError</code>. Tap the line with the bug.",
          qAr: "البرنامج يتوقف بخطأ StackOverflowError. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    System.out.println(new Student("Lama", "IS"));
                }
            }
            class Person {
                private String name;
                Person(String name) { this.name = name; }
                @Override public String toString() { return name; }
            }
            class Student extends Person {
                private String major;
                Student(String name, String major) { super(name); this.major = major; }
                @Override public String toString() { return toString() + ", major: " + major; }
            }
          `, bug: 14,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    System.out.println(new Student("Lama", "IS"));
                }
            }
            class Person {
                private String name;
                Person(String name) { this.name = name; }
                @Override public String toString() { return name; }
            }
            class Student extends Person {
                private String major;
                Student(String name, String major) { super(name); this.major = major; }
                @Override public String toString() { return super.toString() + ", major: " + major; }
            }
          `,
          hint: "Inside Student's toString, which toString does <code>toString()</code> call?",
          explain: "On line 14, <code>toString()</code> without <code>super.</code> calls Student's own toString again, forever. Write <code>super.toString()</code> to get Person's text; the program then prints <code>Lama, major: IS</code>.",
          explainAr: "بدون super تستدعي الدالة نفسها بلا نهاية." },
        { t: 'code', q: "Class <code>Product</code> is written for you (a <code>toString()</code> and an <code>equals</code> that compares codes). Write class <code>Book</code> that extends it, adds a <code>String author</code>, and overrides <code>toString()</code> to return the parent's text followed by <code> by AUTHOR</code>. Do not write equals: the inherited one already compares codes. <code>main</code> reads two books (code, name, price, author; one word each) and prints both and whether they are the same book. No prompts.",
          qAr: "اكتب الصنف Book وتجاوز toString باستخدام super.toString().",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Book a = new Book(sc.next(), sc.next(), sc.nextDouble(), sc.next());
                    Book b = new Book(sc.next(), sc.next(), sc.nextDouble(), sc.next());
                    System.out.println(a);
                    System.out.println(b);
                    System.out.println("Same book: " + a.equals(b));
                }
            }

            class Product {
                private String code;
                private String name;
                private double price;

                Product(String code, String name, double price) {
                    this.code = code;
                    this.name = name;
                    this.price = price;
                }

                @Override
                public String toString() {
                    return code + " " + name + " " + price + " SAR";
                }

                @Override
                public boolean equals(Object o) {
                    if (this == o) return true;
                    if (o == null || getClass() != o.getClass()) return false;
                    Product other = (Product) o;
                    return code.equals(other.code);
                }
            }

            // write class Book here
          `,
          tests: [
            { stdin: J`
              B01 JavaBasics 85.0 Salem
              B01 JavaBasics 80.0 Salem
            `, expected: J`
              B01 JavaBasics 85.0 SAR by Salem
              B01 JavaBasics 80.0 SAR by Salem
              Same book: true
            ` },
            { stdin: J`
              B02 Databases 95.5 Huda
              B03 Networks 70.0 Majed
            `, expected: J`
              B02 Databases 95.5 SAR by Huda
              B03 Networks 70.0 SAR by Majed
              Same book: false
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    Book a = new Book(sc.next(), sc.next(), sc.nextDouble(), sc.next());
                    Book b = new Book(sc.next(), sc.next(), sc.nextDouble(), sc.next());
                    System.out.println(a);
                    System.out.println(b);
                    System.out.println("Same book: " + a.equals(b));
                }
            }

            class Product {
                private String code;
                private String name;
                private double price;

                Product(String code, String name, double price) {
                    this.code = code;
                    this.name = name;
                    this.price = price;
                }

                @Override
                public String toString() {
                    return code + " " + name + " " + price + " SAR";
                }

                @Override
                public boolean equals(Object o) {
                    if (this == o) return true;
                    if (o == null || getClass() != o.getClass()) return false;
                    Product other = (Product) o;
                    return code.equals(other.code);
                }
            }

            class Book extends Product {
                private String author;

                Book(String code, String name, double price, String author) {
                    super(code, name, price);
                    this.author = author;
                }

                @Override
                public String toString() {
                    return super.toString() + " by " + author;
                }
            }
          `,
          hint: "Start the constructor with <code>super(code, name, price);</code> and build the text with <code>super.toString() + \" by \" + author</code>.",
          explain: "Book adds only its author. The inherited <code>equals</code> works for books too: both objects are exactly Books (same class), so it compares their codes." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 10 (new)
    {
      title: 'final classes and methods, and the four access levels',
      titleAr: 'الأصناف والدوال final ومستويات الوصول الأربعة',
      minutes: 30,
      body: [
        { type: 'h', en: 'Some rules must not change' },
        { type: 'p', en: "Inheritance lets a child change (override) the methods it inherits. Usually that is exactly what we want. But some rules must be the <b>same for every child</b>. Value added tax (VAT) in Saudi Arabia is 15%. If any child of <code>Invoice</code> could override the VAT method, a careless programmer could write a child that charges 0% tax, and nobody would notice. The keyword <code>final</code> on a method means: <b>children inherit it and can call it, but cannot override it</b>.",
          ar: "الدالة final يرثها الأبناء ويستدعونها، لكن لا يستطيعون تجاوزها." },
        { type: 'analogy', title: 'An official stamp', en: "A certificate with the university's official stamp can be copied, shown and used by anyone. But nobody may change what it says. A <code>final</code> method is stamped in the same way: every child gets it, nobody can rewrite it.",
          ar: "الوثيقة المختومة تُستخدم ولا تُعدَّل." },
        { type: 'code', code: J`
          class Invoice {
              final int vat(int amount) {
                  return amount * 15 / 100;
              }
          }

          class StudentInvoice extends Invoice {
              @Override
              int vat(int amount) { return 0; }      // ERROR: vat(int) in Invoice is final
          }
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['final int vat(int amount)', '<code>final</code> before the return type: this method is the last word; no child may replace it.'],
            ['class StudentInvoice extends Invoice', 'Extending is still allowed. StudentInvoice inherits <code>vat()</code> and may call it.'],
            ['int vat(int amount) { return 0; }', 'Trying to override it is a compile error: <i>overridden method is final</i>.']
          ], ar: "يمكن الوراثة من Invoice، لكن لا يمكن تجاوز vat لأنها final." },
        { type: 'check', q: "Class <code>Account</code> has <code>final double fee()</code>. What can a subclass do with <code>fee()</code>?", options: [
            "Override it with a new body",
            "Call it, but not override it",
            "Nothing: final methods are not inherited"
          ], answer: 1, explain: "A final method is inherited and can be called. Only overriding is forbidden." },
        { type: 'h', en: 'final classes: no children at all' },
        { type: 'p', en: "You can also write <code>final</code> before <code>class</code>. A <b>final class</b> cannot be extended at all. Java's own <code>String</code> class is final: nobody can write a \"fake String\" that behaves differently and then pass it to code that trusts Strings. Make a class final when it is complete and must stay exactly as it is, for example an official receipt.",
          ar: "الصنف final لا يمكن الوراثة منه أبدًا، ومثاله الصنف String." },
        { type: 'code', code: J`
          final class Receipt {
              private int amount;
              Receipt(int amount) { this.amount = amount; }
          }

          class FakeReceipt extends Receipt { }      // ERROR: cannot inherit from final Receipt
          class MyString extends String { }          // ERROR: String is final too
        ` },
        { type: 'table', head: ['Where you write final', 'Meaning', 'Example'], rows: [
            ['A variable (CS101)', 'Its value cannot change after it is set: a constant.', '<code>final int VAT_PERCENT = 15;</code>'],
            ['A method', 'Children inherit it but cannot override it.', '<code>final int total() { ... }</code>'],
            ['A class', 'No class can extend it.', '<code>final class Receipt { ... }</code>']
          ] },
        { type: 'analogy', title: 'A finished building', en: "When a building is declared finished, the city does not allow new floors on top. A final class is a finished building: you can use it, but you cannot build a child class on top of it.",
          ar: "الصنف final مثل مبنى مكتمل لا يُسمح بإضافة طوابق فوقه." },
        { type: 'steps', title: 'Worked example: a fixed VAT rule with flexible prices', problem: "Every invoice adds 15% VAT to its subtotal, and no child may change that rule. A student invoice gets a 10% discount on the subtotal. Make <code>total()</code> final and let children change only <code>subtotal()</code>.",
          steps: [
            { en: "<b>Step 1.</b> <code>Invoice</code> has a private amount, a normal <code>subtotal()</code> that children may override, and a <b>final</b> <code>total()</code> that adds the VAT.", code: J`
              int subtotal() {
                  return amount;
              }

              final int total() {
                  int s = subtotal();
                  return s + s * 15 / 100;
              }
            ` },
            { en: "<b>Step 2.</b> <code>StudentInvoice</code> overrides only <code>subtotal()</code>: 90% of the parent's subtotal.", code: J`
              @Override
              int subtotal() {
                  return super.subtotal() * 90 / 100;
              }
            ` },
            { en: "<b>Step 3.</b> Trace the normal invoice of 200: subtotal 200, VAT 200 * 15 / 100 = 30, total 230." },
            { en: "<b>Step 4.</b> Trace the student invoice of 200. <code>total()</code> is Invoice's (final), but inside it, <code>subtotal()</code> runs the <b>student</b> version, because the object is a StudentInvoice: 180. VAT 180 * 15 / 100 = 27. Total 207." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Invoice a = new Invoice(200);
                    Invoice b = new StudentInvoice(200);
                    System.out.println("Normal: " + a.total());
                    System.out.println("Student: " + b.total());
                }
            }

            class Invoice {
                private int amount;

                Invoice(int amount) {
                    this.amount = amount;
                }

                int subtotal() {                  // children may change this
                    return amount;
                }

                final int total() {               // nobody may change the VAT rule
                    int s = subtotal();
                    return s + s * 15 / 100;
                }
            }

            class StudentInvoice extends Invoice {
                StudentInvoice(int amount) {
                    super(amount);
                }

                @Override
                int subtotal() {                  // 10% student discount
                    return super.subtotal() * 90 / 100;
                }
            }
          `, out: J`
            Normal: 230
            Student: 207
          `, ar: "total ثابتة (final) لكنها تستدعي subtotal، فتعمل نسخة الابن حسب الكائن الفعلي." },
        { type: 'memory', title: 'A private field is inside the child object', en: "The <code>amount</code> field is private in Invoice. It is still stored inside the StudentInvoice object; only the <b>name</b> is hidden from StudentInvoice code. That is why the child reads it through <code>super.subtotal()</code>.", code: J`
            Invoice a = new Invoice(200);
            Invoice b = new StudentInvoice(200);
          `, frames: [
            { label: 'After <code>Invoice a = new Invoice(200);</code>',
              vars: [{ name: 'a', type: 'Invoice', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Invoice', fields: [{ name: 'amount (private)', value: '200' }] }] },
            { label: 'After <code>Invoice b = new StudentInvoice(200);</code> The child object holds the private field too.',
              vars: [{ name: 'a', type: 'Invoice', ref: 'A' }, { name: 'b', type: 'Invoice', ref: 'B' }],
              objects: [{ id: 'A', cls: 'Invoice', fields: [{ name: 'amount (private)', value: '200' }] },
                        { id: 'B', cls: 'StudentInvoice', fields: [{ name: 'amount (private, Invoice part)', value: '200' }] }] }
          ], ar: "الحقل الخاص موجود داخل كائن الابن، لكن كود الابن لا يستطيع كتابة اسمه." },
        { type: 'h', en: 'The four access levels' },
        { type: 'p', en: "You know three access words: <code>private</code>, <code>protected</code> and <code>public</code>. There is a fourth level that has <b>no keyword at all</b>. If you write nothing (as in many of our examples, such as <code>int pay()</code>), the member has <b>default access</b>, also called <b>package access</b>: every class in the same <b>package</b> may use it. A package is a folder of related classes; Java's own <code>java.util</code> is a package.",
          ar: "المستوى الرابع بلا كلمة: الوصول الافتراضي، ويراه كل صنف في الحزمة نفسها." },
        { type: 'table', head: ['Modifier', 'UML', 'Same class', 'Same package', 'Subclass in another package', 'Any other class'], rows: [
            ['<code>private</code>', '<code>-</code>', 'yes', 'no', 'no', 'no'],
            ['(no keyword) default', '<code>~</code>', 'yes', 'yes', 'no', 'no'],
            ['<code>protected</code>', '<code>#</code>', 'yes', 'yes', 'yes', 'no'],
            ['<code>public</code>', '<code>+</code>', 'yes', 'yes', 'yes', 'yes']
          ] },
        { type: 'analogy', title: 'The rooms of a house', en: "<code>private</code> is your own bedroom: only you. Default is the whole house: everyone who lives in it (the same package). <code>protected</code> is the house plus your married brothers and sisters who live elsewhere (subclasses in other packages). <code>public</code> is the street: everyone. Read the table from top to bottom: each level opens one more door.",
          ar: "private غرفتك، والافتراضي البيت كله، و protected البيت مع الأقارب في أماكن أخرى، و public الشارع." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Account a = new Account();
                  // System.out.println(a.pin);     // ERROR: pin is private
                  System.out.println(a.branch);     // default: same package
                  System.out.println(a.balance);    // protected: same package
                  System.out.println(a.owner);      // public: everyone
              }
          }

          class Account {
              private int pin = 1234;
              String branch = "Riyadh";
              protected double balance = 500.0;
              public String owner = "Fahad";
          }
        `, out: J`
          Riyadh
          500.0
          Fahad
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['private int pin = 1234;', 'Only code written inside Account may use <code>pin</code>. Main may not.'],
            ['String branch = "Riyadh";', 'No keyword: default access. Main is in the same file, so the same package: allowed.'],
            ['protected double balance', 'Same package again, so allowed (subclasses elsewhere could use it too).'],
            ['public String owner', 'Allowed everywhere.']
          ], ar: "كل برامجنا في ملف واحد، أي في حزمة واحدة، لذلك يتشابه الافتراضي و protected فيها." },
        { type: 'p', en: "All our programs are written in one file, so all their classes are in one package. That is why default and protected behave the same in our examples. The difference appears in big projects with many packages. Still, learn the table: it is a favourite exam question." },
        { type: 'check', q: "A field is declared as <code>double rate;</code> with no access keyword. Who can use it directly?", options: [
            "Only its own class",
            "Every class in the same package",
            "Every class everywhere, because no keyword means public"
          ], answer: 1, explain: "No keyword means default (package) access: the class itself and every class in its package. It is <b>not</b> public." },
        { type: 'steps', title: 'Worked example: which lines may a subclass use?', problem: "<code>SavingsAccount extends Account</code> (from the program above) wants to print a report with every field. Decide for each field whether SavingsAccount code may use it.",
          steps: [
            { en: "<b>Step 1.</b> <code>owner</code> is public: always allowed." },
            { en: "<b>Step 2.</b> <code>balance</code> is protected: allowed in a subclass." },
            { en: "<b>Step 3.</b> <code>branch</code> has default access: allowed, because both classes are in the same package." },
            { en: "<b>Step 4.</b> <code>pin</code> is private: <code>System.out.println(pin);</code> in SavingsAccount would not compile. Account must offer a method, written inside Account, that uses the pin for us.", code: J`
              boolean checkPin(int p) {
                  return p == pin;          // allowed: this line is inside Account
              }
            ` },
            { en: "<b>Step 5.</b> Run the report." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    SavingsAccount s = new SavingsAccount();
                    s.report();
                }
            }

            class Account {
                private int pin = 1234;
                String branch = "Riyadh";
                protected double balance = 500.0;
                public String owner = "Fahad";

                boolean checkPin(int p) {
                    return p == pin;
                }
            }

            class SavingsAccount extends Account {
                void report() {
                    System.out.println(owner);            // public: always OK
                    System.out.println(balance);          // protected: OK in a subclass
                    System.out.println(branch);           // default: OK in the same package
                    System.out.println(checkPin(1234));   // private pin: only through a method
                }
            }
          `, out: J`
            Fahad
            500.0
            Riyadh
            true
          `, ar: "الحقل الخاص pin لا يصل إليه الابن إلا عبر دالة مكتوبة داخل Account." },
        { type: 'h', en: 'Choosing an access level' },
        { type: 'list', items: [
            "Fields: <code>private</code> by default. Give getters (and setters only if needed).",
            "Methods that other classes need: <code>public</code>.",
            "Members that only children need: <code>protected</code>.",
            "Helper methods used only inside the class: <code>private</code>.",
            "A rule that no child may change: a <code>final</code> method. A class that must never get children: a <code>final</code> class."
          ], ar: "الحقول private غالبًا، والدوال التي يحتاجها الآخرون public، وما يحتاجه الأبناء protected." },
        { type: 'note', kind: 'exam', en: "Remember Lesson 4: an override may keep or <b>widen</b> access, never narrow it. <code>protected</code> in the parent may become <code>public</code> in the child, but <code>public</code> may not become <code>protected</code>, default or <code>private</code>.",
          ar: "عند التجاوز يجوز توسيع الوصول لا تضييقه." }
      ],
      mistakes: [
        { title: 'Overriding a final method', en: "A final method cannot be replaced. Override a non-final method instead (like <code>subtotal()</code>), or remove <code>final</code> if the rule really may change.", code: J`
          class Invoice { final int total() { return 0; } }
          class Free extends Invoice {
              int total() { return 0; }      // error: total() is final
          }
        `, ar: "لا يمكن تجاوز دالة final." },
        { title: 'Extending a final class', en: "<code>String</code> and any class marked <code>final</code> cannot have children. Use composition (a String field) instead.", code: J`
          class Name extends String { }      // error: String is final
        ` },
        { title: 'Thinking private fields are missing from the child object', en: "The field is inside the object; only its <b>name</b> is hidden from child code. Reach it through <code>super(...)</code>, a getter or another parent method." },
        { title: 'Forgetting that no keyword is also an access level', en: "<code>int pay()</code> is not public. It is default (package) access. In another package it would not be visible." }
      ],
      remember: [
        "<code>final</code> method: inherited and callable, but cannot be overridden.",
        "<code>final</code> class: cannot be extended (for example <code>String</code>).",
        "<code>final</code> variable: a constant whose value cannot change.",
        "Four access levels, from closed to open: <code>private</code>, default (no keyword), <code>protected</code>, <code>public</code>.",
        "UML symbols: <code>-</code> private, <code>~</code> default, <code>#</code> protected, <code>+</code> public.",
        "Private fields are inside the child object, but child code cannot use their names."
      ],
      rememberAr: "الدالة final لا تُتجاوز، والصنف final لا يُورث، والمتغير final ثابت. مستويات الوصول: private ثم الافتراضي ثم protected ثم public.",
      practice: [
        { t: 'mcq', q: "What does <code>final</code> mean on a method?",
          options: [
            "The method runs only once",
            "Subclasses cannot override the method",
            "The method cannot be called",
            "The method is private"
          ], answer: 1,
          explain: "A final method is inherited and can be called, but no subclass may override it." },
        { t: 'mcq', q: "Which class can you <b>not</b> extend?",
          options: ["<code>Object</code>", "<code>String</code>", "Your own class <code>Product</code> (not final)", "Your own class <code>Animal</code> (not final)"], answer: 1,
          explain: "<code>String</code> is a final class. <code>Object</code> and your own non-final classes can be extended." },
        { t: 'output', q: "<code>total()</code> is final. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Invoice a = new Invoice(400);
                  Invoice b = new DeliveryInvoice(400);
                  System.out.println(a.total());
                  System.out.println(b.total());
              }
          }

          class Invoice {
              private int amount;

              Invoice(int amount) { this.amount = amount; }

              int subtotal() { return amount; }

              final int total() {
                  int s = subtotal();
                  return s + s * 15 / 100;
              }
          }

          class DeliveryInvoice extends Invoice {
              DeliveryInvoice(int amount) { super(amount); }

              @Override
              int subtotal() { return super.subtotal() + 20; }
          }
        `, answer: J`
          460
          483
        `, explain: "Normal: 400 + 400 * 15 / 100 = 460. Delivery: the final <code>total()</code> calls the child's <code>subtotal()</code>, 420, then adds 420 * 15 / 100 = 63, so 483." },
        { t: 'fill', q: "Fill in the keywords that match the comments.", code: J`
          class Account {
              ___ int pin;              // only Account itself may use it
              ___ double balance;       // Account, its package and its subclasses
              ___ String owner;         // everyone
              ___ int fee() {           // subclasses may not override it
                  return 5;
              }
          }
        `, answers: ['private', 'protected', 'public', 'final'],
          explain: "<code>private</code> is the most closed, <code>protected</code> adds subclasses, <code>public</code> is open to all, and <code>final</code> stops overriding." },
        { t: 'bug', q: "This program does not compile. Tap the line with the bug.",
          qAr: "البرنامج لا يُترجم. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Invoice inv = new StudentInvoice(200);
                    System.out.println(inv.total());
                }
            }
            class Invoice {
                private int amount;
                Invoice(int amount) { this.amount = amount; }
                int subtotal() { return amount; }
                final int total() { int s = subtotal(); return s + s * 15 / 100; }
            }
            class StudentInvoice extends Invoice {
                StudentInvoice(int amount) { super(amount); }
                @Override int total() { return subtotal(); }
            }
          `, bug: 15,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Invoice inv = new StudentInvoice(200);
                    System.out.println(inv.total());
                }
            }
            class Invoice {
                private int amount;
                Invoice(int amount) { this.amount = amount; }
                int subtotal() { return amount; }
                final int total() { int s = subtotal(); return s + s * 15 / 100; }
            }
            class StudentInvoice extends Invoice {
                StudentInvoice(int amount) { super(amount); }
                @Override int subtotal() { return super.subtotal() * 90 / 100; }
            }
          `,
          hint: "Look for a method marked <code>final</code> in the parent.",
          explain: "<code>total()</code> is final in Invoice: it holds the VAT rule, and line 15 tries to override it (and even drop the VAT). That is a compile error. To give students a discount, override <code>subtotal()</code> instead; the fixed program prints <code>207</code>.",
          explainAr: "total دالة final لا يجوز تجاوزها؛ تجاوز{{g:|ي}} subtotal بدلًا منها." },
        { t: 'bug', q: "The design says \"a Manager is an Employee\", but this program does not compile: <code>cannot inherit from final Employee</code>. Tap a line that causes the problem.",
          qAr: "لا يمكن الوراثة من صنف final. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Manager m = new Manager("Dana");
                    System.out.println(m.title());
                }
            }
            final class Employee {
                protected String name;
                Employee(String name) { this.name = name; }
                String title() { return "Employee " + name; }
            }
            class Manager extends Employee {
                Manager(String name) { super(name); }
                @Override String title() { return "Manager " + name; }
            }
          `, bug: [7, 12],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Manager m = new Manager("Dana");
                    System.out.println(m.title());
                }
            }
            class Employee {
                protected String name;
                Employee(String name) { this.name = name; }
                String title() { return "Employee " + name; }
            }
            class Manager extends Employee {
                Manager(String name) { super(name); }
                @Override String title() { return "Manager " + name; }
            }
          `,
          hint: "Which keyword forbids children?",
          explain: "Line 7 makes Employee a <code>final</code> class, so line 12 cannot extend it. Since the design needs children of Employee, remove <code>final</code> from line 7. The fixed program prints <code>Manager Dana</code>.",
          explainAr: "الصنف final لا يقبل أبناء؛ احذف{{g:|ي}} final لأن التصميم يحتاج Manager." },
        { t: 'code', q: "Class <code>Invoice</code> is written for you, with a <b>final</b> <code>total()</code>. Write class <code>CouponInvoice</code> that extends it, stores an <code>int coupon</code>, and overrides <code>subtotal()</code> to return the parent's subtotal minus the coupon, but never less than 0. <code>main</code> reads the amount and the coupon. No prompts.",
          qAr: "اكتب CouponInvoice التي تتجاوز subtotal فقط، لأن total ثابتة (final).",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int amount = sc.nextInt();
                    int coupon = sc.nextInt();
                    Invoice inv = new CouponInvoice(amount, coupon);
                    System.out.println("Subtotal: " + inv.subtotal());
                    System.out.println("Total: " + inv.total());
                }
            }

            class Invoice {
                private int amount;

                Invoice(int amount) { this.amount = amount; }

                int subtotal() { return amount; }

                final int total() {
                    int s = subtotal();
                    return s + s * 15 / 100;
                }
            }

            // write class CouponInvoice here
          `,
          tests: [
            { stdin: J`
              200 50
            `, expected: J`
              Subtotal: 150
              Total: 172
            ` },
            { stdin: J`
              100 120
            `, expected: J`
              Subtotal: 0
              Total: 0
            ` },
            { stdin: J`
              1000 0
            `, expected: J`
              Subtotal: 1000
              Total: 1150
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int amount = sc.nextInt();
                    int coupon = sc.nextInt();
                    Invoice inv = new CouponInvoice(amount, coupon);
                    System.out.println("Subtotal: " + inv.subtotal());
                    System.out.println("Total: " + inv.total());
                }
            }

            class Invoice {
                private int amount;

                Invoice(int amount) { this.amount = amount; }

                int subtotal() { return amount; }

                final int total() {
                    int s = subtotal();
                    return s + s * 15 / 100;
                }
            }

            class CouponInvoice extends Invoice {
                private int coupon;

                CouponInvoice(int amount, int coupon) {
                    super(amount);
                    this.coupon = coupon;
                }

                @Override
                int subtotal() {
                    int s = super.subtotal() - coupon;
                    if (s < 0) {
                        s = 0;
                    }
                    return s;
                }
            }
          `,
          hint: "You cannot override <code>total()</code>. Override <code>subtotal()</code>, start from <code>super.subtotal()</code>, and use an <code>if</code> for the \"never below 0\" rule.",
          explain: "The final <code>total()</code> calls <code>subtotal()</code>, which runs the CouponInvoice version. For 200 and 50: subtotal 150, VAT 150 * 15 / 100 = 22 (integer division), total 172." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 11 (new)
    {
      title: 'is-a or has-a? Inheritance or composition',
      titleAr: '"هو" أم "يملك"؟ الوراثة أم التركيب',
      minutes: 30,
      body: [
        { type: 'h', en: 'Two ways to reuse a class' },
        { type: 'p', en: "You now know two ways to build a class from another class. In Unit 3 you used <b>composition</b>: an object keeps another object in a field (a Car <b>has an</b> Engine; a Department <b>has</b> an array of Employees). In this unit you used <b>inheritance</b>: a Manager <b>is an</b> Employee. Beginners often write <code>extends</code> just to get some methods quickly. The program may even work, but the design is wrong and becomes painful later. This lesson teaches you to choose well.",
          ar: "التركيب (has-a): كائن داخل حقل. الوراثة (is-a): extends. لا تستخدم{{g:|ي}} extends لمجرد الحصول على دوال بسرعة." },
        { type: 'table', head: ['', 'Composition (has-a)', 'Inheritance (is-a)'], rows: [
            ['Java tool', 'a field: <code>private Engine engine;</code>', '<code>class Manager extends Employee</code>'],
            ['The sentence', '\"A Car <b>has an</b> Engine\"', '\"A Manager <b>is an</b> Employee\"'],
            ['Objects in memory', 'two objects joined by an arrow', 'one object with a parent part and a child part'],
            ['UML (Units 2 and 3)', 'a line between the classes (a diamond for a whole and its parts)', 'a line with a hollow triangle at the parent'],
            ['Can it change while the program runs?', 'Yes: put another Engine in the field', 'No: an object keeps its class forever']
          ] },
        { type: 'analogy', title: 'You and your phone', en: "You <b>have</b> a phone; you <b>are</b> not a phone. If you \"inherited\" from Phone, you would have a battery level and a charging port, and you could never change to a new phone. Keeping the phone as something you <b>have</b> (a field) lets you use it, and replace it next year.",
          ar: "أنت تملك هاتفًا ولست هاتفًا. لو ورثت منه لصار لك منفذ شحن! والتملك يسمح بتغييره لاحقًا." },
        { type: 'h', en: 'Test 1: say both sentences' },
        { type: 'p', en: "Say \"A ___ <b>is a</b> ___\" and \"A ___ <b>has a</b> ___\". Choose the one that sounds true in normal English." },
        { type: 'list', items: [
            "A Manager <b>is an</b> Employee. Inheritance.",
            "A Car <b>has an</b> Engine. Composition: an Engine field.",
            "A Department <b>has</b> Employees. Composition: an <code>Employee[]</code> array with a count.",
            "A Student <b>has</b> Courses. Composition: a <code>Course[]</code> array.",
            "A SavingsAccount <b>is an</b> Account. Inheritance."
          ], ar: "قل الجملتين واختر{{g:|ي}} الصحيحة منهما." },
        { type: 'analogy', title: 'Kabsa and its ingredients', en: "Kabsa <b>has</b> rice, meat and spices: those are its ingredients (has-a, parts). Chicken kabsa <b>is a</b> kind of kabsa (is-a, a special version). Nobody says \"kabsa is a rice\". Parts are fields; special versions are subclasses.",
          ar: "الكبسة تحتوي أرزًا ولحمًا (أجزاء = حقول)، وكبسة الدجاج نوع من الكبسة (نوع خاص = صنف فرعي)." },
        { type: 'check', q: "Which relationship should be modelled with a <b>field</b> (composition)?", options: [
            "A Faculty member and an Employee",
            "A Library and its Books",
            "A Truck and a Vehicle"
          ], answer: 1, explain: "A library <b>has</b> books: an array of Book objects inside Library. The other two pairs pass the is-a test." },
        { type: 'h', en: 'Test 2: does the child want everything?' },
        { type: 'p', en: "If you write <code>class Car extends Engine</code>, every Car gets <b>all</b> the Engine's methods directly: <code>myCar.getCylinders()</code>, <code>myCar.changeSparkPlugs()</code>. That makes no sense for a car. And what about a hybrid car with two engines? With one parent class, impossible. When the child does not want <b>all</b> of the parent's members, or needs more than one of the \"parent\", inheritance is the wrong tool.",
          ar: "إذا كان الابن لا يريد كل دوال الأب، أو يحتاج أكثر من واحد منه، فالوراثة خطأ." },
        { type: 'code', code: J`
          // BAD: a Car is not an Engine
          class Car extends Engine {
              String plate;
          }

          // GOOD: a Car has an Engine
          class Car {
              private String plate;
              private Engine engine;

              void start() {
                  engine.start();        // the car passes the job to its engine
              }
          }
        ` },
        { type: 'p', en: "In the good design, <code>Car.start()</code> simply asks its engine to start. Passing a job to an object you hold is called <b>delegation</b>. The car shows only the methods that make sense for a car, and hides the rest of the engine." },
        { type: 'memory', title: 'has-a gives two objects; is-a gives one', code: J`
            Car c = new Car("RUH-1234", new Engine(150));
            Manager m = new Manager("Dana", 12000, 5);
          `, frames: [
            { label: 'has-a: after <code>Car c = new Car("RUH-1234", new Engine(150));</code> Two objects, joined by an arrow in the field <code>engine</code>.',
              vars: [{ name: 'c', type: 'Car', ref: 'A' }],
              objects: [{ id: 'A', cls: 'Car', fields: [{ name: 'plate', value: '"RUH-1234"' }, { name: 'engine', ref: 'B' }] },
                        { id: 'B', cls: 'Engine', fields: [{ name: 'horsePower', value: '150' }] }] },
            { label: 'is-a: after <code>Manager m = new Manager("Dana", 12000, 5);</code> One object that contains the Employee part.',
              vars: [{ name: 'c', type: 'Car', ref: 'A' }, { name: 'm', type: 'Manager', ref: 'C' }],
              objects: [{ id: 'A', cls: 'Car', fields: [{ name: 'plate', value: '"RUH-1234"' }, { name: 'engine', ref: 'B' }] },
                        { id: 'B', cls: 'Engine', fields: [{ name: 'horsePower', value: '150' }] },
                        { id: 'C', cls: 'Manager', fields: [{ name: 'name (Employee part)', value: '"Dana"' }, { name: 'salary (Employee part)', value: '12000.0' }, { name: 'teamSize', value: '5' }] }] }
          ], ar: "التركيب: كائنان يربطهما سهم. الوراثة: كائن واحد فيه جزء الأب." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Engine e = new Engine(150);
                  Car c = new Car("RUH-1234", e);
                  c.start();
                  c.replaceEngine(new Engine(200));
                  c.start();
              }
          }

          class Engine {
              private int horsePower;

              Engine(int horsePower) { this.horsePower = horsePower; }

              void start() {
                  System.out.println("Engine " + horsePower + " HP starts");
              }
          }

          class Car {
              private String plate;
              private Engine engine;

              Car(String plate, Engine engine) {
                  this.plate = plate;
                  this.engine = engine;
              }

              void start() {
                  System.out.print(plate + ": ");
                  engine.start();
              }

              void replaceEngine(Engine newEngine) {
                  engine = newEngine;
              }
          }
        `, out: J`
          RUH-1234: Engine 150 HP starts
          RUH-1234: Engine 200 HP starts
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
            ['private Engine engine;', 'has-a: the Car keeps an arrow to an Engine object.'],
            ['engine.start();', 'Delegation: the Car asks its engine to do the engine\'s job.'],
            ['engine = newEngine;', 'The part can be replaced while the program runs. With <code>extends</code> this is impossible.']
          ], ar: "مع التركيب نستطيع استبدال المحرك أثناء التشغيل؛ مع الوراثة لا يمكن." },
        { type: 'h', en: 'Good and bad designs side by side' },
        { type: 'table', head: ['Story', 'Bad design', 'Good design', 'Why'], rows: [
            ['A car and its engine', '<code>Car extends Engine</code>', 'Car has an <code>Engine</code> field', 'A car is not an engine.'],
            ['A department and its staff', '<code>Department extends Employee</code>', 'Department has <code>Employee[]</code> and a count', 'A department is a group, not a person.'],
            ['A student and the courses', '<code>Student extends Course</code>', 'Student has a <code>Course[]</code> array', 'A student takes courses; a student is not a course.'],
            ['A savings account', 'SavingsAccount has an <code>Account</code> field and copies every method', '<code>SavingsAccount extends Account</code>', 'It really is an account; inheritance avoids copying.']
          ] },
        { type: 'p', en: "Notice the last row: composition can be the wrong choice too. If you find yourself writing a field of type X and then copying <b>every</b> method of X just to pass the call on, the honest sentence is probably \"is a\", and inheritance is better." },
        { type: 'check', q: "A team writes <code>class Classroom extends Student</code> so that a classroom can use <code>getName()</code>. What is the better design?", options: [
            "Keep it: it compiles, so it is correct",
            "Classroom has a <code>Student[]</code> array and a count",
            "<code>class Student extends Classroom</code>"
          ], answer: 1, explain: "A classroom is not a student; it <b>has</b> students. Use an array of Student objects with a count, as in Unit 3." },
        { type: 'h', en: 'Using both together' },
        { type: 'p', en: "Real systems mix the two. A Manager <b>is an</b> Employee (inheritance) and <b>has a</b> team of Employees (composition: an array with a count, from Unit 3). The two arrows in the UML mean different things.",
          ar: "المدير موظف (وراثة) ويملك فريقًا من الموظفين (تركيب) في الوقت نفسه." },
        { type: 'code', code: J`
                 +---------------------+   team 0..10    +---------------------+
                 |       Manager       |---------------->|      Employee       |
                 +---------------------+    (has-a)      +---------------------+
                 | - team : Employee[] |                 | - name : String     |
                 | - count : int       |                 | - salary : double   |
                 +---------------------+                 +---------------------+
                 | + addMember(e)      |                 | + getSalary()       |
                 | + teamCost()        |                 +---------------------+
                 +---------------------+                            △
                            |                                       |
                            +---------------------------------------+
                                 (is-a)  Manager extends Employee
        ` },
        { type: 'steps', title: 'Worked example: a manager and her team', problem: "Dana is a manager (an employee with a team). Add two team members and compute the team cost: Dana's salary plus the salaries of her team.",
          steps: [
            { en: "<b>Step 1.</b> <code>Employee</code> is a normal class with a name, a salary and getters." },
            { en: "<b>Step 2.</b> <code>Manager extends Employee</code> (is-a), and holds an array of Employees with a count (has-a).", code: J`
              class Manager extends Employee {               // is-a
                  private Employee[] team = new Employee[10];    // has-a
                  private int count = 0;
            ` },
            { en: "<b>Step 3.</b> <code>addMember</code> stores a new member at position <code>count</code>, only if there is room.", code: J`
              void addMember(Employee e) {
                  if (count < team.length) {
                      team[count] = e;
                      count++;
                  }
              }
            ` },
            { en: "<b>Step 4.</b> <code>teamCost</code> starts with the manager's own salary, from the inherited <code>getSalary()</code>, and adds every member's salary: 12000 + 8000 + 7500 = 27500.0." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Manager m = new Manager("Dana", 12000);
                    m.addMember(new Employee("Ahmed", 8000));
                    m.addMember(new Employee("Ali", 7500));
                    System.out.println(m.getName() + " leads " + m.getTeamSize() + " people");
                    System.out.println("Team cost: " + m.teamCost());
                }
            }

            class Employee {
                private String name;
                private double salary;

                Employee(String name, double salary) {
                    this.name = name;
                    this.salary = salary;
                }

                String getName() { return name; }

                double getSalary() { return salary; }
            }

            class Manager extends Employee {                   // is-a
                private Employee[] team = new Employee[10];    // has-a
                private int count = 0;

                Manager(String name, double salary) {
                    super(name, salary);
                }

                void addMember(Employee e) {
                    if (count < team.length) {
                        team[count] = e;
                        count++;
                    }
                }

                int getTeamSize() { return count; }

                double teamCost() {
                    double total = getSalary();               // the manager's own salary
                    for (int i = 0; i < count; i++) {
                        total += team[i].getSalary();
                    }
                    return total;
                }
            }
          `, out: J`
            Dana leads 2 people
            Team cost: 27500.0
          `, ar: "Manager يرث من Employee ويحتوي مصفوفة موظفين مع عدّاد، فيجمع الوراثة والتركيب." },
        { type: 'note', kind: 'tip', en: "One more question helps in hard cases: <i>will it stay true?</i> An object cannot change its class. If an employee may become a manager next year, some designers prefer an Employee with a <code>role</code> field (composition) instead of a Manager class. For the programs in this course, <code>Manager extends Employee</code> is fine.",
          ar: "الكائن لا يغيّر صنفه أبدًا؛ لذلك يُفضَّل التركيب أحيانًا عندما تتغير الأدوار." }
      ],
      mistakes: [
        { title: 'Inheriting from a part', en: "A part of something is a field, not a parent.", code: J`
          class Car extends Engine { }          // wrong: use  private Engine engine;
        `, ar: "الجزء يكون حقلًا لا أبًا." },
        { title: 'Making a group extend its members', en: "A group <b>has</b> members. Use an array with a count.", code: J`
          class Department extends Employee { } // wrong: use  Employee[] staff  and  int count
        ` },
        { title: 'Inheriting only to borrow one method', en: "If you want one useful method from another class, call it on an object of that class (or move it to a better place). Do not add <code>extends</code> and get twenty methods that make no sense for your class." },
        { title: 'Copying every method through a field', en: "If a class has a field of type X and forwards every single method of X, the true sentence is probably \"is a\". Then <code>extends</code> is simpler and correct." }
      ],
      remember: [
        "is-a: use <code>extends</code>. has-a: use a field (composition), from Unit 3.",
        "Say both sentences; keep the one that is true in normal English.",
        "If the child does not want <b>all</b> the parent's members, or needs two of them, do not inherit.",
        "Composition gives two objects joined by an arrow; inheritance gives one object.",
        "A part held in a field can be replaced while the program runs; a class cannot change.",
        "Real designs use both: a Manager is an Employee and has a team of Employees."
      ],
      rememberAr: "\"هو\" تعني extends، و\"يملك\" تعني حقلًا. لا ترث{{g:|ي}} إلا إذا كان الابن يريد كل ما في الأب. التصاميم الحقيقية تجمع الطريقتين.",
      practice: [
        { t: 'mcq', q: "Which pair is a <b>has-a</b> relationship?",
          options: ["Faculty and Employee", "Bus and Vehicle", "Course and its Students", "Square and Shape"], answer: 2,
          explain: "A course <b>has</b> students: an array of Student objects. The other pairs pass the is-a test." },
        { t: 'mcq', q: "In a UML diagram, what does a line with a <b>hollow triangle</b> at one end mean?",
          options: [
            "has-a: one class keeps the other in a field",
            "is-a: the class at the other end extends the class at the triangle",
            "The two classes are in the same package",
            "The classes are final"
          ], answer: 1,
          explain: "The hollow triangle touches the parent (superclass). A has-a relationship is drawn as a plain line or with a diamond, as in Unit 3." },
        { t: 'output', q: "This program uses both inheritance and composition. What does it print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Department d = new Department("IS");
                  d.add(new Employee("Ahmed", 8000));
                  d.add(new Manager("Dana", 12000, 3000));
                  System.out.println(d.getName() + ": " + d.getCount() + " people");
                  System.out.println("Salaries: " + d.totalPay());
              }
          }

          class Employee {
              private String name;
              private double salary;

              Employee(String name, double salary) {
                  this.name = name;
                  this.salary = salary;
              }

              double pay() { return salary; }
          }

          class Manager extends Employee {
              private double bonus;

              Manager(String name, double salary, double bonus) {
                  super(name, salary);
                  this.bonus = bonus;
              }

              @Override
              double pay() { return super.pay() + bonus; }
          }

          class Department {
              private String name;
              private Employee[] staff = new Employee[10];
              private int count = 0;

              Department(String name) { this.name = name; }

              void add(Employee e) {
                  staff[count] = e;
                  count++;
              }

              String getName() { return name; }

              int getCount() { return count; }

              double totalPay() {
                  double total = 0;
                  for (int i = 0; i < count; i++) {
                      total += staff[i].pay();
                  }
                  return total;
              }
          }
        `, answer: J`
          IS: 2 people
          Salaries: 23000.0
        `, explain: "Department <b>has</b> employees (an array with a count). Manager <b>is an</b> Employee, so it fits in the array, and its <code>pay()</code> override adds the bonus: 8000 + 15000 = 23000.0." },
        { t: 'bug', q: "This program works, but one line is a <b>design</b> bug: it uses inheritance where composition is right. Tap that line.",
          qAr: "البرنامج يعمل لكن فيه خطأ تصميمي. أين هو؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Car c = new Car();
                    c.plate = "RUH-1234";
                    c.drive();
                }
            }
            class Engine {
                void start() { System.out.println("Engine starts"); }
            }
            class Car extends Engine {
                String plate;
                void drive() { start(); System.out.println(plate + " is moving"); }
            }
          `, bug: 11,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Car c = new Car();
                    c.plate = "RUH-1234";
                    c.drive();
                }
            }
            class Engine {
                void start() { System.out.println("Engine starts"); }
            }
            class Car {
                String plate;
                Engine engine = new Engine();
                void drive() { engine.start(); System.out.println(plate + " is moving"); }
            }
          `,
          hint: "Say the sentence: \"A Car is an Engine\". Does it sound right?",
          explain: "A car <b>has</b> an engine; it is not one. Because of line 11, every Car gets all the Engine's methods as if the car itself were an engine, and a car can never get a different engine. Keep an <code>Engine</code> field and delegate: <code>engine.start()</code>. The output stays the same, but the design is now correct.",
          explainAr: "السيارة تملك محركًا ولا تعتبر محركًا، فالصحيح حقل من نوع Engine." },
        { t: 'fill', q: "Complete the composition: a Phone has a Battery, and <code>charge()</code> passes the job to the battery.", code: J`
          class Phone {
              private ___ battery = new Battery();

              void charge() {
                  ___.fill();
              }
          }
        `, answers: ['Battery', 'battery'],
          explain: "The field has type <code>Battery</code> (has-a). <code>battery.fill()</code> is delegation: the phone asks its battery to do the work." },
        { t: 'code', q: "Classes <code>Book</code> and <code>EBook extends Book</code> are written for you. Write class <code>Library</code> (composition, <b>not</b> inheritance) with a <code>Book[]</code> of size 20, an <code>int count</code>, a method <code>add(Book b)</code>, and a method <code>printAll()</code> that prints every book (using its <code>toString()</code>) and then <code>Books: N, pages: P</code>. <code>main</code> reads the books. No prompts.",
          qAr: "اكتب الصنف Library الذي يملك مصفوفة كتب مع عدّاد (تركيب لا وراثة).",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Library lib = new Library();
                    for (int i = 0; i < n; i++) {
                        String type = sc.next();
                        String title = sc.next();
                        int pages = sc.nextInt();
                        if (type.equals("E")) {
                            lib.add(new EBook(title, pages, sc.nextInt()));
                        } else {
                            lib.add(new Book(title, pages));
                        }
                    }
                    lib.printAll();
                }
            }

            class Book {
                private String title;
                private int pages;

                Book(String title, int pages) {
                    this.title = title;
                    this.pages = pages;
                }

                int getPages() { return pages; }

                @Override
                public String toString() { return title + " (" + pages + " pages)"; }
            }

            class EBook extends Book {
                private int sizeMB;

                EBook(String title, int pages, int sizeMB) {
                    super(title, pages);
                    this.sizeMB = sizeMB;
                }

                @Override
                public String toString() { return super.toString() + " [e-book, " + sizeMB + " MB]"; }
            }

            // write class Library here
          `,
          tests: [
            { stdin: J`
              3
              P Algorithms 450
              E Networks 300 12
              P Calculus 520
            `, expected: J`
              Algorithms (450 pages)
              Networks (300 pages) [e-book, 12 MB]
              Calculus (520 pages)
              Books: 3, pages: 1270
            ` },
            { stdin: J`
              1
              E Java 610 25
            `, expected: J`
              Java (610 pages) [e-book, 25 MB]
              Books: 1, pages: 610
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Library lib = new Library();
                    for (int i = 0; i < n; i++) {
                        String type = sc.next();
                        String title = sc.next();
                        int pages = sc.nextInt();
                        if (type.equals("E")) {
                            lib.add(new EBook(title, pages, sc.nextInt()));
                        } else {
                            lib.add(new Book(title, pages));
                        }
                    }
                    lib.printAll();
                }
            }

            class Book {
                private String title;
                private int pages;

                Book(String title, int pages) {
                    this.title = title;
                    this.pages = pages;
                }

                int getPages() { return pages; }

                @Override
                public String toString() { return title + " (" + pages + " pages)"; }
            }

            class EBook extends Book {
                private int sizeMB;

                EBook(String title, int pages, int sizeMB) {
                    super(title, pages);
                    this.sizeMB = sizeMB;
                }

                @Override
                public String toString() { return super.toString() + " [e-book, " + sizeMB + " MB]"; }
            }

            class Library {
                private Book[] books = new Book[20];
                private int count = 0;

                void add(Book b) {
                    if (count < books.length) {
                        books[count] = b;
                        count++;
                    }
                }

                void printAll() {
                    int pages = 0;
                    for (int i = 0; i < count; i++) {
                        System.out.println(books[i]);
                        pages += books[i].getPages();
                    }
                    System.out.println("Books: " + count + ", pages: " + pages);
                }
            }
          `,
          hint: "Library does not extend anything. It has <code>private Book[] books = new Book[20];</code> and <code>private int count = 0;</code>. Loop with <code>i &lt; count</code>.",
          explain: "A library <b>has</b> books, so it keeps them in an array with a count (Unit 3). An EBook <b>is a</b> Book, so it fits in the same array, and <code>println</code> runs its own <code>toString()</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 12 (new)
    {
      title: 'Case study: a university people system',
      titleAr: 'دراسة حالة: نظام لأفراد الجامعة',
      minutes: 30,
      body: [
        { type: 'h', en: 'Putting everything together' },
        { type: 'p', en: "In this lesson you build one complete small system. It uses almost every idea of the unit: <code>extends</code>, <code>super(...)</code>, overriding with <code>super.method()</code>, <code>toString()</code>, private fields, an array of superclass references with a count, loops, <code>instanceof</code> and casting. Nothing here is new; what is new is using it all <b>together</b>. Go slowly, step by step.",
          ar: "لا جديد في هذا الدرس؛ الجديد هو استخدام كل أفكار الوحدة معًا في نظام واحد." },
        { type: 'analogy', title: 'Cooking a full dinner', en: "You have learned to cook rice, salad and grilled chicken, one at a time. Today guests are coming, and you cook a full kabsa dinner: nothing new, but everything together, in the right order. A case study is a full dinner made of the dishes you already know.",
          ar: "تعلمت{{g:|ِ}} كل طبق وحده، واليوم تطبخ{{g:|ين}} العشاء كاملًا." },
        { type: 'p', en: "<b>The story.</b> The College of Computer and Information Sciences wants a small program for its people. Every person has a name and an ID. A student also has a major and a GPA. An employee has a monthly salary. A faculty member is an employee who also teaches courses, and receives a teaching allowance of 1000 SAR per course every month. The program must print everyone, count the students, find the best GPA, and compute the monthly payroll." },
        { type: 'h', en: 'Step 1: the design' },
        { type: 'p', en: "Use the method of Lesson 8. Name and ID are shared by everyone, so they go into <code>Person</code>. Student and Employee each add their own data. A faculty member <b>is an</b> employee, so <code>Faculty extends Employee</code>: it inherits the salary and <code>monthlyPay()</code>, and overrides <code>monthlyPay()</code> to add the allowance." },
        { type: 'code', code: J`
                            +--------------------+
                            |       Person       |
                            +--------------------+
                            | - name : String    |
                            | - id : String      |
                            +--------------------+
                            | + getName()        |
                            | + toString()       |
                            +--------------------+
                                      △
                       +--------------+--------------+
                       |                             |
            +--------------------+        +--------------------+
            |      Student       |        |      Employee      |
            +--------------------+        +--------------------+
            | - major : String   |        | - salary : double  |
            | - gpa : double     |        +--------------------+
            +--------------------+        | + monthlyPay()     |
            | + getGpa()         |        | + toString()       |
            | + toString()       |        +--------------------+
            +--------------------+                  △
                                                    |
                                          +--------------------+
                                          |      Faculty       |
                                          +--------------------+
                                          | - courses : int    |
                                          +--------------------+
                                          | + monthlyPay()     |
                                          | + toString()       |
                                          +--------------------+
        ` },
        { type: 'check', q: "The college now wants an office number for every employee, including faculty, but not for students. Where should the field go?", options: [
            "In Person", "In Employee", "In Faculty", "In Student and Faculty"
          ], answer: 1, explain: "Every employee has an office, and Faculty is an Employee, so it inherits the field. Students do not get it. Person would be wrong because students have no office." },
        { type: 'h', en: 'Step 2: the classes' },
        { type: 'p', en: "One small trick saves a lot of code. <code>Person.toString()</code> starts with <code>getClass().getSimpleName()</code>. Because <code>getClass()</code> always reports the <b>real</b> object, every child prints its own class name for free, without writing it again.",
          ar: "getClass().getSimpleName() داخل Person تطبع اسم الصنف الفعلي لكل كائن تلقائيًا." },
        { type: 'steps', title: 'Worked example: building and testing the four classes', problem: "Write Person, Student, Employee and Faculty from the design, then test them with one object of each kind before building the full system.",
          steps: [
            { en: "<b>Step 1.</b> <code>Person</code>: private name and ID, a constructor, <code>getName()</code>, and the <code>toString()</code> with the class-name trick.", code: J`
              @Override
              public String toString() {
                  return getClass().getSimpleName() + ": " + name + " (" + id + ")";
              }
            ` },
            { en: "<b>Step 2.</b> <code>Student</code> and <code>Employee</code> call <code>super(name, id)</code> and add their part with <code>super.toString()</code>. Employee's text uses <code>monthlyPay()</code>.", code: J`
              @Override
              public String toString() {
                  return super.toString() + ", pay " + monthlyPay();
              }
            ` },
            { en: "<b>Step 3.</b> <code>Faculty</code> overrides <code>monthlyPay()</code>: the salary from the parent plus 1000 per course.", code: J`
              @Override
              double monthlyPay() {
                  return super.monthlyPay() + 1000 * courses;
              }
            ` },
            { en: "<b>Step 4.</b> Trace <code>println(f)</code> for Dr. Sami. Faculty's toString calls Employee's, which calls Person's. Person prints <code>Faculty: Dr. Sami (F-007)</code>, because the real object is a Faculty. Employee adds <code>, pay </code> and calls <code>monthlyPay()</code>: the <b>Faculty</b> version runs, 18000 + 2 * 1000 = 20000.0. Faculty adds <code>, courses 2</code>." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Student s = new Student("Lama", "S-221", "IS", 3.8);
                    Employee e = new Employee("Huda", "E-015", 9000);
                    Faculty f = new Faculty("Dr. Sami", "F-007", 18000, 2);
                    System.out.println(s);
                    System.out.println(e);
                    System.out.println(f);
                }
            }

            class Person {
                private String name;
                private String id;

                Person(String name, String id) {
                    this.name = name;
                    this.id = id;
                }

                String getName() { return name; }

                @Override
                public String toString() {
                    return getClass().getSimpleName() + ": " + name + " (" + id + ")";
                }
            }

            class Student extends Person {
                private String major;
                private double gpa;

                Student(String name, String id, String major, double gpa) {
                    super(name, id);
                    this.major = major;
                    this.gpa = gpa;
                }

                double getGpa() { return gpa; }

                @Override
                public String toString() {
                    return super.toString() + ", " + major + ", GPA " + gpa;
                }
            }

            class Employee extends Person {
                private double salary;

                Employee(String name, String id, double salary) {
                    super(name, id);
                    this.salary = salary;
                }

                double monthlyPay() { return salary; }

                @Override
                public String toString() {
                    return super.toString() + ", pay " + monthlyPay();
                }
            }

            class Faculty extends Employee {
                private int courses;

                Faculty(String name, String id, double salary, int courses) {
                    super(name, id, salary);
                    this.courses = courses;
                }

                @Override
                double monthlyPay() {
                    return super.monthlyPay() + 1000 * courses;
                }

                @Override
                public String toString() {
                    return super.toString() + ", courses " + courses;
                }
            }
          `, out: J`
            Student: Lama (S-221), IS, GPA 3.8
            Employee: Huda (E-015), pay 9000.0
            Faculty: Dr. Sami (F-007), pay 20000.0, courses 2
          `, ar: "حتى داخل دوال الأب، الكائن الفعلي هو الذي يحدد أي نسخة من monthlyPay تعمل." },
        { type: 'h', en: 'Step 3: one array for everyone' },
        { type: 'p', en: "Now the system part. As in Unit 3, the people go into an array with room to spare and a counter. The array type is the <b>top</b> class, <code>Person[]</code>, so a Student, an Employee and a Faculty member can all go in it. Watch the array in memory." },
        { type: 'memory', title: 'A Person[] array holding different kinds of people', code: J`
            Person[] people = new Person[10];
            int count = 0;
            people[count] = new Student("Lama", "S-221", "IS", 3.8);
            count++;
            people[count] = new Faculty("Dr. Sami", "F-007", 18000, 2);
            count++;
          `, frames: [
            { label: 'After <code>Person[] people = new Person[10];</code> and <code>int count = 0;</code> Ten empty boxes.',
              vars: [{ name: 'people', type: 'Person[]', ref: 'A' }, { name: 'count', type: 'int', value: '0' }],
              objects: [{ id: 'A', cls: 'Person[10]', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }, { name: '[3] ... [9]', value: 'null' }] }] },
            { label: 'After adding Lama and <code>count++;</code> Box [0] points to a Student.',
              vars: [{ name: 'people', type: 'Person[]', ref: 'A' }, { name: 'count', type: 'int', value: '1' }],
              objects: [{ id: 'A', cls: 'Person[10]', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }, { name: '[3] ... [9]', value: 'null' }] },
                        { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Lama"' }, { name: 'id', value: '"S-221"' }, { name: 'major', value: '"IS"' }, { name: 'gpa', value: '3.8' }] }] },
            { label: 'After adding Dr. Sami and <code>count++;</code> Box [1] points to a Faculty object. Each object keeps its real class.',
              vars: [{ name: 'people', type: 'Person[]', ref: 'A' }, { name: 'count', type: 'int', value: '2' }],
              objects: [{ id: 'A', cls: 'Person[10]', fields: [{ name: '[0]', ref: 'B' }, { name: '[1]', ref: 'C' }, { name: '[2]', value: 'null' }, { name: '[3] ... [9]', value: 'null' }] },
                        { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Lama"' }, { name: 'id', value: '"S-221"' }, { name: 'major', value: '"IS"' }, { name: 'gpa', value: '3.8' }] },
                        { id: 'C', cls: 'Faculty', fields: [{ name: 'name', value: '"Dr. Sami"' }, { name: 'id', value: '"F-007"' }, { name: 'salary', value: '18000.0' }, { name: 'courses', value: '2' }] }] }
          ], ar: "كل خانة في مصفوفة Person تحمل سهمًا إلى كائن، وكل كائن يحتفظ بصنفه الحقيقي." },
        { type: 'steps', title: 'Worked example: the complete system', problem: "Store five people, then (1) print everyone, (2) count the students and find the best GPA, and (3) compute the monthly payroll of all employees, faculty included.",
          steps: [
            { en: "<b>Step 1.</b> Fill the <code>Person[]</code> array with <code>people[count] = ...; count++;</code> five times." },
            { en: "<b>Step 2.</b> Printing needs no <code>instanceof</code>: every object has <code>toString()</code>, and each runs its own version." },
            { en: "<b>Step 3.</b> GPA exists only in Student, so check, cast, use. Keep the best student so far in a variable that starts as <code>null</code>.", code: J`
              if (people[i] instanceof Student) {
                  Student s = (Student) people[i];
                  students++;
                  if (best == null || s.getGpa() > best.getGpa()) {
                      best = s;
                  }
              }
            ` },
            { en: "<b>Step 4.</b> For the payroll, test <code>instanceof Employee</code>. It is true for Faculty too (a Faculty is an Employee), and <code>monthlyPay()</code> runs the Faculty override: 20000 + 9000 = 29000.0." },
            { en: "<b>Step 5.</b> Every loop stops at <code>count</code>, never at <code>people.length</code>: boxes 5 to 9 are <code>null</code>." }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Person[] people = new Person[10];
                    int count = 0;

                    people[count] = new Student("Lama", "S-221", "IS", 3.8);
                    count++;
                    people[count] = new Faculty("Dr. Sami", "F-007", 18000, 2);
                    count++;
                    people[count] = new Student("Omar", "S-305", "CS", 3.2);
                    count++;
                    people[count] = new Employee("Huda", "E-015", 9000);
                    count++;
                    people[count] = new Student("Nora", "S-410", "IS", 3.9);
                    count++;

                    // 1. print everyone
                    for (int i = 0; i < count; i++) {
                        System.out.println(people[i]);
                    }

                    // 2. students and the best GPA
                    int students = 0;
                    Student best = null;
                    for (int i = 0; i < count; i++) {
                        if (people[i] instanceof Student) {
                            Student s = (Student) people[i];
                            students++;
                            if (best == null || s.getGpa() > best.getGpa()) {
                                best = s;
                            }
                        }
                    }
                    System.out.println("Students: " + students);
                    System.out.println("Best GPA: " + best.getName() + " (" + best.getGpa() + ")");

                    // 3. monthly payroll of all employees (faculty included)
                    double payroll = 0;
                    for (int i = 0; i < count; i++) {
                        if (people[i] instanceof Employee) {
                            Employee e = (Employee) people[i];
                            payroll += e.monthlyPay();
                        }
                    }
                    System.out.println("Monthly payroll: " + payroll + " SAR");
                }
            }

            class Person {
                private String name;
                private String id;

                Person(String name, String id) {
                    this.name = name;
                    this.id = id;
                }

                String getName() { return name; }

                @Override
                public String toString() {
                    return getClass().getSimpleName() + ": " + name + " (" + id + ")";
                }
            }

            class Student extends Person {
                private String major;
                private double gpa;

                Student(String name, String id, String major, double gpa) {
                    super(name, id);
                    this.major = major;
                    this.gpa = gpa;
                }

                double getGpa() { return gpa; }

                @Override
                public String toString() {
                    return super.toString() + ", " + major + ", GPA " + gpa;
                }
            }

            class Employee extends Person {
                private double salary;

                Employee(String name, String id, double salary) {
                    super(name, id);
                    this.salary = salary;
                }

                double monthlyPay() { return salary; }

                @Override
                public String toString() {
                    return super.toString() + ", pay " + monthlyPay();
                }
            }

            class Faculty extends Employee {
                private int courses;

                Faculty(String name, String id, double salary, int courses) {
                    super(name, id, salary);
                    this.courses = courses;
                }

                @Override
                double monthlyPay() {
                    return super.monthlyPay() + 1000 * courses;
                }

                @Override
                public String toString() {
                    return super.toString() + ", courses " + courses;
                }
            }
          `, out: J`
            Student: Lama (S-221), IS, GPA 3.8
            Faculty: Dr. Sami (F-007), pay 20000.0, courses 2
            Student: Omar (S-305), CS, GPA 3.2
            Employee: Huda (E-015), pay 9000.0
            Student: Nora (S-410), IS, GPA 3.9
            Students: 3
            Best GPA: Nora (3.9)
            Monthly payroll: 29000.0 SAR
          `, ar: "مصفوفة واحدة من Person، وحلقات حتى count، و instanceof مع التحويل للبيانات الخاصة فقط." },
        { type: 'p', en: "Trace the best-GPA loop slowly with a table. This is how you should check a loop on paper in an exam." },
        { type: 'table', head: ['i', '<code>people[i]</code>', 'instanceof Student?', '<code>best</code> after this step'], rows: [
            ['0', 'Lama, GPA 3.8', 'yes', 'Lama (best was null)'],
            ['1', 'Dr. Sami (Faculty)', 'no', 'Lama'],
            ['2', 'Omar, GPA 3.2', 'yes', 'Lama (3.2 is not bigger than 3.8)'],
            ['3', 'Huda (Employee)', 'no', 'Lama'],
            ['4', 'Nora, GPA 3.9', 'yes', 'Nora (3.9 is bigger than 3.8)']
          ] },
        { type: 'check', q: "The payroll loop tests <code>people[i] instanceof Employee</code>. Why is Dr. Sami's pay included?", options: [
            "Because his name starts with Dr.",
            "Because a Faculty object is also an Employee, so the test is true",
            "It is not included; only Huda is counted"
          ], answer: 1, explain: "<code>instanceof</code> is true for the class and all its children. Faculty extends Employee, so Dr. Sami passes, and his <code>monthlyPay()</code> is the Faculty version (20000.0)." },
        { type: 'analogy', title: 'One question at the morning meeting', en: "At the first meeting of the year, the dean says to everyone in the hall: \"Please introduce yourselves.\" He says it <b>once</b>. Each person answers in his or her own way: a student gives a major, a lecturer gives the courses. The printing loop is that one sentence; each object's <code>toString()</code> is its own answer.",
          ar: "العميد يقول جملة واحدة للجميع، وكل شخص يجيب بطريقته. كذلك حلقة الطباعة وtoString لكل كائن." },
        { type: 'p', en: "Look how little <code>main</code> needs to know. It never asks \"how do I print a faculty member?\" or \"how is a faculty member paid?\". Each class answers those questions itself. <code>main</code> only uses <code>instanceof</code> for data that belongs to one branch of the tree (GPA, pay).",
          ar: "كل صنف يعرف كيف يطبع نفسه وكيف يُحسب راتبه؛ main لا تحتاج إلى معرفة التفاصيل." },
        { type: 'note', kind: 'tip', en: "Want to grow the system? A new kind of person, for example an administrative staff member with overtime pay, needs only one new class that extends <code>Employee</code>. The three loops in <code>main</code> do not change at all. You will try this in the last practice exercise. Unit 5 explains why this works so well (polymorphism).",
          ar: "إضافة نوع جديد تحتاج صنفًا جديدًا فقط، دون تغيير الحلقات." }
      ],
      mistakes: [
        { title: 'Looping to people.length', en: "Only <code>count</code> boxes are filled; the rest are <code>null</code>, and calling a method on <code>null</code> crashes.", code: J`
          for (int i = 0; i < people.length; i++)    // wrong: use i < count
        `, ar: "كرر{{g:|ي}} حتى count." },
        { title: 'Casting every person to Student', en: "A Faculty object is not a Student: the cast crashes with <code>ClassCastException</code>. Check with <code>instanceof Student</code> first.", code: J`
          Student s = (Student) people[i];           // wrong without a check
        ` },
        { title: 'Putting gpa in Person', en: "Then every employee and faculty member would carry a GPA of 0.0. GPA belongs only to Student (Lesson 8)." },
        { title: 'Forgetting super.monthlyPay() in Faculty', en: "Without it, a faculty member is paid only the allowance and loses the salary.", code: J`
          double monthlyPay() { return 1000 * courses; }   // wrong: salary is lost
        ` }
      ],
      remember: [
        "Design first (Lesson 8), then write the classes from the top of the tree down.",
        "One <code>Person[]</code> array with a count holds every kind of person.",
        "Use overriding for jobs every class has (<code>toString</code>, <code>monthlyPay</code>).",
        "Use <code>instanceof</code> and a cast only for data of one branch (GPA).",
        "<code>instanceof Employee</code> is true for Faculty too.",
        "A new kind of person = one new class; the loops stay the same."
      ],
      rememberAr: "صمّم{{g:|ي}} أولًا، ثم اكتب{{g:|ي}} الأصناف من الأعلى. مصفوفة واحدة من Person مع عدّاد. التجاوز للمهام المشتركة، و instanceof للبيانات الخاصة فقط.",
      practice: [
        { t: 'mcq', q: "In the case study, why is <code>Faculty</code> a subclass of <code>Employee</code> and not of <code>Person</code> directly?",
          options: [
            "Because Java needs at least three levels",
            "Because a faculty member is an employee: it reuses the salary and monthlyPay() from Employee",
            "Because Faculty cannot have a name",
            "Because Person is final"
          ], answer: 1,
          explain: "\"A faculty member is an employee\" is true, so Faculty inherits everything an employee has and changes only <code>monthlyPay()</code>." },
        { t: 'output', q: "What does this program print? (Faculty does not override <code>toString()</code>.)", code: J`
          public class Main {
              public static void main(String[] args) {
                  Person[] people = {
                      new Student("Reem", 3.5),
                      new Faculty("Dr. Ali", 15000, 3),
                      new Employee("Saleh", 7000)
                  };
                  double payroll = 0;
                  for (Person p : people) {
                      System.out.println(p);
                      if (p instanceof Employee) {
                          Employee e = (Employee) p;
                          payroll += e.monthlyPay();
                      }
                  }
                  System.out.println(payroll);
              }
          }

          class Person {
              private String name;

              Person(String name) { this.name = name; }

              @Override
              public String toString() { return name; }
          }

          class Student extends Person {
              private double gpa;

              Student(String name, double gpa) { super(name); this.gpa = gpa; }

              @Override
              public String toString() { return super.toString() + " GPA " + gpa; }
          }

          class Employee extends Person {
              private double salary;

              Employee(String name, double salary) { super(name); this.salary = salary; }

              double monthlyPay() { return salary; }

              @Override
              public String toString() { return super.toString() + " " + monthlyPay(); }
          }

          class Faculty extends Employee {
              private int courses;

              Faculty(String name, double salary, int courses) { super(name, salary); this.courses = courses; }

              @Override
              double monthlyPay() { return super.monthlyPay() + 1000 * courses; }
          }
        `, answer: J`
          Reem GPA 3.5
          Dr. Ali 18000.0
          Saleh 7000.0
          25000.0
        `, explain: "Faculty inherits Employee's <code>toString()</code>, but inside it <code>monthlyPay()</code> runs the Faculty version: 15000 + 3 * 1000 = 18000.0. The payroll is 18000 + 7000 = 25000.0; the student is skipped." },
        { t: 'order', q: "Arrange the lines that compute the monthly payroll of everyone who is an Employee.",
          lines: [
            "double payroll = 0;",
            "for (int i = 0; i < count; i++) {",
            "    if (people[i] instanceof Employee) {",
            "        Employee e = (Employee) people[i];",
            "        payroll += e.monthlyPay();",
            "    }",
            "}"
          ],
          explain: "Start the total at 0, loop to <code>count</code>, check with <code>instanceof</code>, cast, then add the pay." },
        { t: 'bug', q: "Dr. Sami has a salary of 18000 and teaches 2 courses, so he should be paid <code>20000.0</code>. The program prints <code>2000.0</code>. Tap the line with the bug.",
          qAr: "راتب عضو هيئة التدريس خاطئ. أين الخطأ؟",
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Employee f = new Faculty("Dr. Sami", 18000, 2);
                    System.out.println(f.monthlyPay());
                }
            }
            class Employee {
                private String name; private double salary;
                Employee(String name, double salary) { this.name = name; this.salary = salary; }
                double monthlyPay() { return salary; }
            }
            class Faculty extends Employee {
                private int courses;
                Faculty(String name, double salary, int courses) { super(name, salary); this.courses = courses; }
                @Override double monthlyPay() { return 1000 * courses; }
            }
          `, bug: 15,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Employee f = new Faculty("Dr. Sami", 18000, 2);
                    System.out.println(f.monthlyPay());
                }
            }
            class Employee {
                private String name; private double salary;
                Employee(String name, double salary) { this.name = name; this.salary = salary; }
                double monthlyPay() { return salary; }
            }
            class Faculty extends Employee {
                private int courses;
                Faculty(String name, double salary, int courses) { super(name, salary); this.courses = courses; }
                @Override double monthlyPay() { return super.monthlyPay() + 1000 * courses; }
            }
          `,
          hint: "Where does the salary part of the pay come from?",
          explain: "The override on line 15 returns only the allowance (2 * 1000) and forgets the salary. The salary is private in Employee, so get it with <code>super.monthlyPay()</code> and add the allowance: 18000 + 2000 = 20000.0.",
          explainAr: "نسي{{g:تَ|تِ}} super.monthlyPay()، فضاع الراتب الأساسي." },
        { t: 'mcq', q: "The college adds a new kind of person, <code>Visitor extends Person</code>, with its own <code>toString()</code>. What must change in the loop that prints everyone?",
          options: [
            "A new <code>if (p instanceof Visitor)</code> branch",
            "Nothing: <code>println(people[i])</code> already runs each object's own toString()",
            "The array must become <code>Visitor[]</code>",
            "Every class must be rewritten"
          ], answer: 1,
          explain: "The printing loop works with any child of Person. Adding a class does not change code that only uses methods every Person has." },
        { t: 'code', q: "Classes <code>Person</code> and <code>Employee</code> and the whole <code>main</code> are written for you. Add class <code>Staff</code> (administrative staff) that extends <code>Employee</code>, stores <code>int overtimeHours</code>, overrides <code>monthlyPay()</code> to add 50 SAR per overtime hour (use <code>super.monthlyPay()</code>), and overrides <code>toString()</code> to add <code>, overtime H h</code> at the end. Input: <code>n</code>, then <code>n</code> lines <code>E name id salary</code> or <code>S name id salary hours</code>. No prompts.",
          qAr: "أضف{{g:|ي}} الصنف Staff إلى النظام دون تغيير main.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Person[] people = new Person[n];
                    int count = 0;
                    for (int i = 0; i < n; i++) {
                        String type = sc.next();
                        String name = sc.next();
                        String id = sc.next();
                        double salary = sc.nextDouble();
                        if (type.equals("S")) {
                            people[count] = new Staff(name, id, salary, sc.nextInt());
                        } else {
                            people[count] = new Employee(name, id, salary);
                        }
                        count++;
                    }
                    double payroll = 0;
                    for (int i = 0; i < count; i++) {
                        System.out.println(people[i]);
                        if (people[i] instanceof Employee) {
                            Employee e = (Employee) people[i];
                            payroll += e.monthlyPay();
                        }
                    }
                    System.out.println("Monthly payroll: " + payroll + " SAR");
                }
            }

            class Person {
                private String name;
                private String id;

                Person(String name, String id) {
                    this.name = name;
                    this.id = id;
                }

                @Override
                public String toString() {
                    return getClass().getSimpleName() + ": " + name + " (" + id + ")";
                }
            }

            class Employee extends Person {
                private double salary;

                Employee(String name, String id, double salary) {
                    super(name, id);
                    this.salary = salary;
                }

                double monthlyPay() { return salary; }

                @Override
                public String toString() {
                    return super.toString() + ", pay " + monthlyPay();
                }
            }

            // write class Staff here
          `,
          tests: [
            { stdin: J`
              3
              E Huda E-015 9000
              S Majed A-020 7000 10
              S Rawan A-031 7500 4
            `, expected: J`
              Employee: Huda (E-015), pay 9000.0
              Staff: Majed (A-020), pay 7500.0, overtime 10 h
              Staff: Rawan (A-031), pay 7700.0, overtime 4 h
              Monthly payroll: 24200.0 SAR
            ` },
            { stdin: J`
              2
              S Ali A-001 6000 0
              E Sara E-002 8000
            `, expected: J`
              Staff: Ali (A-001), pay 6000.0, overtime 0 h
              Employee: Sara (E-002), pay 8000.0
              Monthly payroll: 14000.0 SAR
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Person[] people = new Person[n];
                    int count = 0;
                    for (int i = 0; i < n; i++) {
                        String type = sc.next();
                        String name = sc.next();
                        String id = sc.next();
                        double salary = sc.nextDouble();
                        if (type.equals("S")) {
                            people[count] = new Staff(name, id, salary, sc.nextInt());
                        } else {
                            people[count] = new Employee(name, id, salary);
                        }
                        count++;
                    }
                    double payroll = 0;
                    for (int i = 0; i < count; i++) {
                        System.out.println(people[i]);
                        if (people[i] instanceof Employee) {
                            Employee e = (Employee) people[i];
                            payroll += e.monthlyPay();
                        }
                    }
                    System.out.println("Monthly payroll: " + payroll + " SAR");
                }
            }

            class Person {
                private String name;
                private String id;

                Person(String name, String id) {
                    this.name = name;
                    this.id = id;
                }

                @Override
                public String toString() {
                    return getClass().getSimpleName() + ": " + name + " (" + id + ")";
                }
            }

            class Employee extends Person {
                private double salary;

                Employee(String name, String id, double salary) {
                    super(name, id);
                    this.salary = salary;
                }

                double monthlyPay() { return salary; }

                @Override
                public String toString() {
                    return super.toString() + ", pay " + monthlyPay();
                }
            }

            class Staff extends Employee {
                private int overtimeHours;

                Staff(String name, String id, double salary, int overtimeHours) {
                    super(name, id, salary);
                    this.overtimeHours = overtimeHours;
                }

                @Override
                double monthlyPay() {
                    return super.monthlyPay() + 50 * overtimeHours;
                }

                @Override
                public String toString() {
                    return super.toString() + ", overtime " + overtimeHours + " h";
                }
            }
          `,
          hint: "Copy the shape of Faculty from the lesson: <code>super(name, id, salary)</code> in the constructor, <code>super.monthlyPay() + ...</code>, and <code>super.toString() + ...</code>.",
          explain: "Staff is an Employee, so it fits the existing array and the payroll loop without any change in <code>main</code>. Employee's <code>toString()</code> calls <code>monthlyPay()</code>, which runs the Staff override: 7000 + 10 * 50 = 7500.0." }
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
    { t: 'mcq', q: "Which statement about <code>final</code> is true?",
      options: [
        "A final class can be extended, but its methods cannot be called",
        "A final method is inherited by subclasses but cannot be overridden",
        "Writing final before a field makes it private",
        "A final class must have exactly one subclass"
      ], answer: 1,
      explain: "A final method can be inherited and called, but not overridden. A final class cannot be extended at all (like <code>String</code>). A final field is a constant; it says nothing about access." },
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
          Computer(String model) {
              this();
              System.out.println("Model " + model);
          }
      }

      class Laptop extends Computer {
          Laptop() {
              super("Pro");
              System.out.println("Laptop");
          }
      }
    `, answer: J`
      Device
      Computer
      Model Pro
      Laptop
    `, explain: "<code>Laptop()</code> calls <code>Computer(\"Pro\")</code>, which calls <code>Computer()</code>, which implicitly calls <code>Device()</code>. The bodies complete from the top: Device, Computer, Model Pro, Laptop." },
    { t: 'bug', q: "This program does not compile: <i>attempting to assign weaker access privileges</i>. Tap the line with the bug.",
      qAr: "البرنامج لا يُترجم بسبب مستوى الوصول. أين الخطأ؟",
      code: J`
        public class Main {
            public static void main(String[] args) {
                Student s = new Student("Lama", "IS");
                System.out.println(s);
            }
        }
        class Person {
            protected String name;
            Person(String name) { this.name = name; }
            public String toString() { return name; }
        }
        class Student extends Person {
            private String major;
            Student(String name, String major) { super(name); this.major = major; }
            String toString() { return super.toString() + ", " + major; }
        }
      `, bug: 15,
      fix: J`
        public class Main {
            public static void main(String[] args) {
                Student s = new Student("Lama", "IS");
                System.out.println(s);
            }
        }
        class Person {
            protected String name;
            Person(String name) { this.name = name; }
            public String toString() { return name; }
        }
        class Student extends Person {
            private String major;
            Student(String name, String major) { super(name); this.major = major; }
            @Override public String toString() { return super.toString() + ", " + major; }
        }
      `,
      hint: "Compare the access level of the two <code>toString()</code> methods.",
      explain: "<code>toString()</code> is <code>public</code> in Person (and in Object). On line 15 the override has no modifier (default access), which is narrower, so it does not compile. An override may never reduce access. Write <code>public</code> (and <code>@Override</code>); the program prints <code>Lama, IS</code>.",
      explainAr: "لا يجوز تضييق مستوى الوصول عند التجاوز؛ toString يجب أن تبقى public." },
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
    { t: 'bug', q: "This program does not compile: <i>constructor Vehicle in class Vehicle cannot be applied to given types</i>. Tap the line with the bug.",
      qAr: "البرنامج لا يُترجم بسبب المُنشئ. أين الخطأ؟",
      code: J`
        public class Main {
            public static void main(String[] args) {
                Bus b = new Bus("RUH-4521", 40);
                System.out.println(b.getPlate() + ": " + b.getSeats() + " seats");
            }
        }
        class Vehicle {
            private String plate;
            Vehicle(String plate) { this.plate = plate; }
            String getPlate() { return plate; }
        }
        class Bus extends Vehicle {
            private int seats;
            Bus(String plate, int seats) { this.seats = seats; }
            int getSeats() { return seats; }
        }
      `, bug: 14,
      fix: J`
        public class Main {
            public static void main(String[] args) {
                Bus b = new Bus("RUH-4521", 40);
                System.out.println(b.getPlate() + ": " + b.getSeats() + " seats");
            }
        }
        class Vehicle {
            private String plate;
            Vehicle(String plate) { this.plate = plate; }
            String getPlate() { return plate; }
        }
        class Bus extends Vehicle {
            private int seats;
            Bus(String plate, int seats) { super(plate); this.seats = seats; }
            int getSeats() { return seats; }
        }
      `,
      hint: "Vehicle has only one constructor. Which constructor call does Java insert in Bus?",
      explain: "Line 14 has no <code>super(...)</code>, so Java inserts <code>super();</code>, but Vehicle has no constructor without parameters. Call <code>super(plate);</code> as the first statement; it also stores the plate. The fixed program prints <code>RUH-4521: 40 seats</code>.",
      explainAr: "أضف{{g:|ي}} super(plate) في أول مُنشئ Bus." },
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
    `, explain: "<code>equals</code> uses <code>getClass()</code>, so an <code>Account</code> and a <code>Premium</code> are never equal even with the same balance. The inherited <code>toString()</code> calls <code>getClass()</code> on the actual object, giving <code>Premium</code>." },
    { t: 'bug', q: "This program does not compile: <i>name has private access in Employee</i>. Tap a line that causes the problem.",
      qAr: "الحقل name خاص في الأب. أين الخطأ؟",
      code: J`
        public class Main {
            public static void main(String[] args) {
                Faculty f = new Faculty("Dr. Sami", 2);
                System.out.println(f);
            }
        }
        class Employee {
            private String name;
            Employee(String name) { this.name = name; }
            String getName() { return name; }
        }
        class Faculty extends Employee {
            private int courses;
            Faculty(String name, int courses) { super(name); this.courses = courses; }
            @Override public String toString() { return name + " teaches " + courses + " courses"; }
        }
      `, bug: [15, 8],
      fix: J`
        public class Main {
            public static void main(String[] args) {
                Faculty f = new Faculty("Dr. Sami", 2);
                System.out.println(f);
            }
        }
        class Employee {
            private String name;
            Employee(String name) { this.name = name; }
            String getName() { return name; }
        }
        class Faculty extends Employee {
            private int courses;
            Faculty(String name, int courses) { super(name); this.courses = courses; }
            @Override public String toString() { return getName() + " teaches " + courses + " courses"; }
        }
      `,
      hint: "The field is inside the Faculty object, but can Faculty code use its name?",
      explain: "<code>name</code> is <code>private</code> in Employee (line 8), so Faculty code on line 15 may not use it, even though the field is inside the Faculty object. Use the inherited getter <code>getName()</code> (or make the field <code>protected</code>). The fixed program prints <code>Dr. Sami teaches 2 courses</code>.",
      explainAr: "الابن لا يستخدم اسم الحقل الخاص؛ استخدم{{g:|ي}} getName()." }
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
    { code: J`v.getClass().getSimpleName()`, note: 'Exact run-time class name, e.g. Car' },
    { code: J`
      Employee[] staff = new Employee[10];
      int count = 0;
      staff[count] = new Manager("Dana", 12000, 3000);
      count++;
    `, note: 'An array of the parent type with a count holds every child; loop with i &lt; count' },
    { code: J`
      @Override
      public String toString() {
          return super.toString() + ", major: " + major;
      }
    `, note: 'In a child, build on the parent text instead of reading its private fields' },
    { code: J`
      @Override
      public boolean equals(Object o) {
          if (this == o) return true;
          if (o == null || getClass() != o.getClass()) return false;
          Product other = (Product) o;
          return code.equals(other.code);
      }
    `, note: 'equals recipe: parameter must be Object; compare Strings with .equals()' },
    { code: J`if (!super.equals(o)) return false;`, note: 'First line of equals in a child class that adds a field' },
    { code: J`final int total() { ... }`, note: 'final method: inherited and callable, but cannot be overridden' },
    { code: J`final class Receipt { ... }`, note: 'final class: cannot be extended (String is final)' },
    { code: J`private  <  (no keyword)  <  protected  <  public`, note: 'Access levels from closed to open; UML symbols - ~ # +' },
    { code: J`
      class Car { private Engine engine; }        // has-a
      class Manager extends Employee { }          // is-a
    `, note: 'has-a: a field (composition); is-a: extends (inheritance)' }
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
    { term: 'Class hierarchy', ar: 'هرمية الأصناف', def: 'The tree of classes formed by inheritance, with Object at the root.' },
    { term: 'Multi-level inheritance', ar: 'الوراثة متعددة المستويات', def: 'A chain of classes (Manager extends Employee, Employee extends Person). Allowed: each class still has one direct parent.' },
    { term: 'Multiple inheritance', ar: 'الوراثة المتعددة', def: 'One class with two or more parent classes. Not allowed for classes in Java.' },
    { term: 'Method lookup', ar: 'البحث عن الدالة', def: 'Java looks for a called method in the object\'s own class first, then in its parent, grandparent and so on, and runs the first version it finds.' },
    { term: 'Upcasting', ar: 'التحويل إلى الأعلى', def: 'Putting a subclass object into a superclass variable, as in Vehicle v = new Car(...). Automatic and always safe.' },
    { term: 'Downcasting', ar: 'التحويل إلى الأسفل', def: 'Treating a superclass reference as a subclass type with a cast, as in (Car) v. Check with instanceof first.' },
    { term: 'Generalization', ar: 'التعميم', def: 'Designing a hierarchy by moving the members that several classes share into a new parent class.' },
    { term: 'Specialization', ar: 'التخصيص', def: 'A subclass adding its own fields and methods, or overriding inherited ones, to become more specific.' },
    { term: 'final method', ar: 'دالة final', def: 'A method that subclasses inherit and can call but cannot override.' },
    { term: 'final class', ar: 'صنف final', def: 'A class that cannot be extended, such as String.' },
    { term: 'Default (package) access', ar: 'الوصول الافتراضي (الحزمة)', def: 'The access level when no modifier is written: visible to every class in the same package.' },
    { term: 'Package', ar: 'الحزمة', def: 'A named group (folder) of related classes, such as java.util.' },
    { term: 'Composition', ar: 'التركيب', def: 'A has-a relationship: an object keeps another object in a field, as a Car keeps an Engine.' },
    { term: 'Delegation', ar: 'التفويض', def: 'An object passing a job to an object it holds, as in engine.start() inside Car.start().' },
    { term: 'equals(Object o)', ar: 'الدالة equals', def: 'The method that decides whether two objects hold the same data. Override it with an Object parameter; == only checks for the same object.' }
  ]
});
