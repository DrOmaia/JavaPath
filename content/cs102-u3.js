JP.unit({
  course: 'cs102',
  n: 3,
  title: 'Inheritance',
  titleAr: 'الوراثة',
  intro: "Inheritance lets you build a new class on top of an existing one. A Manager is an Employee, a Car is a Vehicle: the subclass reuses the fields and methods of its superclass and adds or changes what is special about it. This unit covers extends, the Object class, super, constructor chaining, overriding versus overloading, protected access, UML inheritance arrows, superclass references, instanceof and getClass().",
  introAr: "الوراثة تسمح ببناء صنف جديد فوق صنف موجود: المدير موظف، والسيارة مركبة. الصنف الفرعي يعيد استخدام حقول ودوال الصنف الأب ويضيف أو يغيّر ما يميزه.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'Superclasses, subclasses and extends',
      titleAr: 'الصنف الأب والصنف الفرعي و extends',
      minutes: 45,
      body: [
        { type: 'p', en: "When several classes share the same data and behavior, put the shared part in a <b>superclass</b> (parent, base class) and let each <b>subclass</b> (child, derived class) <code>extends</code> it. The subclass automatically <b>inherits</b> the accessible fields and methods of the superclass and can add its own.",
          ar: "ضع الجزء المشترك في الصنف الأب، ودع الأصناف الفرعية ترثه باستخدام extends." },
        { type: 'p', en: "Use inheritance only for an <b>is-a</b> relationship: a <code>Manager</code> <i>is an</i> <code>Employee</code>, a <code>Circle</code> <i>is a</i> <code>Shape</code>. A <code>Car</code> <i>has an</i> <code>Engine</code>; that is composition (a field), not inheritance." },
        { type: 'code', run: true, code: J`
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
        ` },
        { type: 'list', items: [
          "A subclass is usually <b>bigger</b> (more specific) than its superclass: it has everything the parent has, plus more.",
          "<code>private</code> members of the superclass exist inside the subclass object but cannot be named directly by subclass code; use public or protected methods.",
          "Constructors are <b>not</b> inherited; each class writes its own (next lesson).",
          "A class can be both: <code>Employee</code> is a subclass of <code>Person</code> and a superclass of <code>Manager</code>."
        ], ar: "الحقول الخاصة private موجودة لكن لا يمكن الوصول إليها مباشرة، والمُنشئات لا تُورث." },
        { type: 'h', en: 'The Object class' },
        { type: 'p', en: "Every Java class has exactly one superclass. If you do not write <code>extends</code>, the class extends <code>java.lang.Object</code> automatically. So every object inherits methods such as <code>toString()</code>, <code>equals(Object)</code>, <code>hashCode()</code> and <code>getClass()</code>.",
          ar: "كل صنف في جافا يرث في النهاية من الصنف Object." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Vehicle v = new Vehicle("ABC-1234");
                  Object o = v;                  // every Vehicle is an Object
                  System.out.println(o.toString());
                  System.out.println(v.getClass().getName());
                  System.out.println(v.equals(o));
              }
          }

          class Vehicle {               // same as: class Vehicle extends Object
              private String plate;

              Vehicle(String plate) { this.plate = plate; }

              @Override
              public String toString() { return "Vehicle " + plate; }
          }
        `, out: J`
          Vehicle ABC-1234
          Vehicle
          true
        ` },
        { type: 'h', en: 'Single inheritance' },
        { type: 'p', en: "Java allows a class to extend <b>only one</b> class. If two parents both defined a method <code>pay()</code> with different code, the child would not know which one to inherit (the so-called <i>diamond problem</i>). Java avoids this by allowing multiple inheritance of <b>types</b> only through <b>interfaces</b>: a class extends one class but may implement many interfaces (Unit 4).",
          ar: "جافا تسمح بوراثة صنف واحد فقط، أما الوراثة المتعددة فتكون عبر الواجهات interfaces." },
        { type: 'code', code: J`
          class TeachingAssistant extends Student, Employee { }      // ERROR: only one class allowed

          class TeachingAssistant extends Student implements Payable, Schedulable { }   // OK
        ` },
        { type: 'h', en: 'Inheritance in UML' },
        { type: 'p', en: "In a UML class diagram, inheritance is drawn as a solid line with a <b>hollow triangle</b> arrowhead pointing <b>from the subclass to the superclass</b>. Inherited members are not repeated in the subclass box; only new or overridden ones are listed." },
        { type: 'code', code: J`
          +-----------------------+
          |       Employee        |
          +-----------------------+
          | # name: String        |
          | # salary: double      |
          +-----------------------+
          | + work(): void        |
          +-----------------------+
                     /_\
                      |
          +-----------------------+
          |        Manager        |
          +-----------------------+
          | - teamSize: int       |
          +-----------------------+
          | + holdMeeting(): void |
          +-----------------------+
        ` },
        { type: 'note', kind: 'exam', en: "The triangle always touches the <b>superclass</b>. In exams, students often draw the arrow the wrong way. Read it as: <i>Manager is an Employee</i>.",
          ar: "رأس المثلث يشير دائمًا إلى الصنف الأب." }
      ],
      practice: [
        { t: 'mcq', q: "Which declaration correctly makes <code>Truck</code> a subclass of <code>Vehicle</code>?",
          options: [
            '<code>class Truck inherits Vehicle { }</code>',
            '<code>class Truck extends Vehicle { }</code>',
            '<code>class Truck implements Vehicle { }</code>',
            '<code>class Vehicle extends Truck { }</code>'
          ], answer: 1,
          explain: "The keyword is <code>extends</code>, and the subclass is written on the left: <code>class Sub extends Super</code>." },
        { t: 'mcq', q: "Which class header is legal in Java?",
          options: [
            '<code>class Duck extends Animal, Bird { }</code>',
            '<code>class Duck extends Animal implements Swimmer, Flyer { }</code>',
            '<code>class Duck implements Animal extends Bird { }</code>',
            '<code>class Duck extends Animal extends Bird { }</code>'
          ], answer: 1,
          explain: "A class may extend exactly one class but implement any number of interfaces, and <code>extends</code> comes before <code>implements</code>.",
          explainAr: "صنف واحد فقط بعد extends، وعدد غير محدود من الواجهات بعد implements." },
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
              double rate = 0.25;   // promotional rate

              void addInterest() {
                  deposit(balance * rate);
              }
          }
        `, answer: J`
          1250.0
        `, explain: "<code>deposit</code> and <code>balance</code> are inherited from <code>BankAccount</code>. After depositing 1000, interest of 1000 * 0.25 = 250 is deposited, so the balance is 1250.0." },
        { t: 'fill', q: "Fill in the blanks.", code: J`
          // A class written without extends automatically inherits from ___
          class Animal { }

          class Dog ___ Animal { }
        `, answers: ['Object', 'extends'],
          explain: "<code>java.lang.Object</code> is the root of every class hierarchy. <code>Dog</code> becomes a subclass of <code>Animal</code> with <code>extends</code>." },
        { t: 'order', q: "Arrange the lines to define <code>Student</code> as a subclass of <code>Person</code> that adds a <code>major</code> field and a method returning it.",
          lines: [
            "class Student extends Person {",
            "    private String major;",
            "    public String getMajor() {",
            "        return major;",
            "    }",
            "}"
          ],
          explain: "The header names both classes with <code>extends</code>; the new field and method go inside the subclass body." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'super and constructor chaining',
      titleAr: 'super وتسلسل المُنشئات',
      minutes: 50,
      body: [
        { type: 'p', en: "Creating a subclass object also builds its superclass part. Therefore <b>every constructor first calls a superclass constructor</b>, written <code>super(...)</code>. If you do not write it, the compiler inserts <code>super();</code> (a call to the no-argument constructor) as the first statement.",
          ar: "كل مُنشئ يستدعي أولًا مُنشئ الصنف الأب عبر super، وإن لم تكتبه يضيف المترجم super() تلقائيًا." },
        { type: 'p', en: "This leads to <b>constructor chaining</b>: building a <code>Manager</code> runs the <code>Person</code> constructor body first, then <code>Employee</code>, then <code>Manager</code>, from the top of the hierarchy down." },
        { type: 'code', run: true, code: J`
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
        ` },
        { type: 'h', en: 'Passing data up with super(...)' },
        { type: 'p', en: "When the superclass fields are <code>private</code>, the subclass cannot assign them. Instead it passes the values to the superclass constructor with <code>super(...)</code>. The keyword <code>super</code> can also call a superclass <b>method</b>: <code>super.toString()</code> runs the parent's version even if the child overrides it." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Car c = new Car("Toyota", 2022, 4);
                  System.out.println(c);
                  System.out.println(c.getMake());
              }
          }

          class Vehicle {
              private String make;
              private int year;

              public Vehicle(String make, int year) {
                  this.make = make;
                  this.year = year;
              }

              public String getMake() { return make; }

              @Override
              public String toString() {
                  return year + " " + make;
              }
          }

          class Car extends Vehicle {
              private int doors;

              public Car(String make, int year, int doors) {
                  super(make, year);          // let Vehicle set its own private fields
                  this.doors = doors;
              }

              @Override
              public String toString() {
                  return super.toString() + ", " + doors + " doors";
              }
          }
        `, out: J`
          2022 Toyota, 4 doors
          Toyota
        ` },
        { type: 'table', head: ['', '<code>this</code>', '<code>super</code>'], rows: [
          ['Refers to', 'the current object, as its own class', 'the current object, viewed as its superclass'],
          ['Constructor call', '<code>this(...)</code>: another constructor of the same class', '<code>super(...)</code>: a constructor of the superclass'],
          ['Member access', '<code>this.name</code>, <code>this.show()</code>', '<code>super.toString()</code>, <code>super.pay()</code>'],
          ['Position rule', 'must be the first statement', 'must be the first statement']
        ] },
        { type: 'note', kind: 'warn', en: "A constructor can start with <code>this(...)</code> <b>or</b> <code>super(...)</code>, never both. If it starts with <code>this(...)</code>, the other constructor it calls is responsible for calling <code>super</code>." },
        { type: 'h', en: 'A classic compile error' },
        { type: 'p', en: "If the superclass has <b>no</b> no-argument constructor, the automatic <code>super();</code> cannot work, and every subclass constructor must call an existing superclass constructor explicitly.",
          ar: "إذا لم يكن للصنف الأب مُنشئ بلا معاملات، يجب استدعاء super بمعاملات صراحةً." },
        { type: 'code', code: J`
          class Shape {
              private String color;
              Shape(String color) { this.color = color; }   // the only constructor
          }

          class Square extends Shape {
              private double side;
              Square(double side) {
                  // compiler inserts super();  -> ERROR: Shape() does not exist
                  this.side = side;
              }
          }

          // Fix:
          //     Square(double side) {
          //         super("black");
          //         this.side = side;
          //     }
        ` },
        { type: 'note', kind: 'exam', en: "Exam trick: the error is reported in the <b>subclass</b>, even though the cause is the missing no-argument constructor in the <b>superclass</b>. Always check what <code>super()</code> the compiler would insert.",
          ar: "الخطأ يظهر في الصنف الفرعي رغم أن سببه في الصنف الأب." }
      ],
      practice: [
        { t: 'output', q: "What does this program print?", code: J`
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
        `, explain: "<code>C()</code> implicitly calls <code>super()</code>, i.e. <code>B()</code>. <code>B()</code> chains to <code>B(5)</code>, which implicitly calls <code>A()</code> first. Bodies then finish from the top down: A, B(5), B(), C.",
          explainAr: "يبدأ التنفيذ الفعلي من أعلى الهرمية: A ثم B(5) ثم B() ثم C." },
        { t: 'mcq', q: "A constructor does not begin with <code>this(...)</code> or <code>super(...)</code>. What does the compiler insert as its first statement?",
          options: ['Nothing', '<code>this();</code>', '<code>super();</code>', '<code>new Object();</code>'], answer: 2,
          explain: "Every constructor must start by initializing the superclass part, so the compiler inserts a call to the superclass no-argument constructor, <code>super();</code>." },
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
            "The implicit <code>super()</code> in <code>Savings(double)</code> needs <code>Account()</code>, which does not exist",
            "A subclass cannot have its own constructor"
          ], answer: 2,
          explain: "<code>Account</code> only has <code>Account(double)</code>. The compiler inserts <code>super();</code> in the <code>Savings</code> constructor, and there is no matching constructor. Fix: call <code>super(0)</code> or another value." },
        { t: 'fill', q: "Complete <code>Student</code>, a subclass of <code>Person</code> (which has a constructor <code>Person(String name)</code> and its own <code>toString()</code>).", code: J`
          class Student extends Person {
              private double gpa;

              public Student(String name, double gpa) {
                  ___(name);
                  this.gpa = gpa;
              }

              @Override
              public String toString() {
                  return ___.toString() + ", GPA " + gpa;
              }
          }
        `, answers: ['super', 'super'],
          explain: "<code>super(name)</code> calls the <code>Person</code> constructor; <code>super.toString()</code> reuses the parent's text and appends the GPA." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Overriding, overloading and protected',
      titleAr: 'التجاوز والتحميل الزائد و protected',
      minutes: 50,
      body: [
        { type: 'p', en: "A subclass <b>overrides</b> an inherited method when it defines a method with the <b>same name, same parameter list and compatible return type</b>. Objects of the subclass then use the new version. <b>Overloading</b> is different: same name, <b>different parameters</b>; it simply adds another method.",
          ar: "التجاوز: نفس الاسم ونفس المعاملات في الصنف الفرعي. التحميل الزائد: نفس الاسم بمعاملات مختلفة." },
        { type: 'code', run: true, code: J`
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
        ` },
        { type: 'table', head: ['', 'Overriding', 'Overloading'], rows: [
          ['Where', 'In a subclass, replacing an inherited method', 'In the same class (or a subclass), adding a method'],
          ['Name', 'Same', 'Same'],
          ['Parameters', 'Same types, number and order', 'Different'],
          ['Return type', 'Same (or a subtype)', 'May differ'],
          ['Chosen', 'At run time, by the actual object (dynamic binding)', 'At compile time, by the argument types'],
          ['Annotation', '<code>@Override</code> recommended', 'none']
        ] },
        { type: 'h', en: 'The @Override annotation' },
        { type: 'p', en: "<code>@Override</code> tells the compiler: <i>this method must override an inherited one</i>. If you misspell the name or change a parameter type, you get a compile error instead of a silent new method that never gets called." },
        { type: 'code', code: J`
          class Product {
              private String name;

              @Override
              public String tostring() {        // ERROR: method does not override
                  return name;                  // (lowercase s: Object has toString)
              }
          }
        ` },
        { type: 'note', kind: 'tip', en: "Always write <code>@Override</code> on <code>toString</code>, <code>equals</code>, and any method you mean to override. It costs nothing and catches typos such as <code>equals(Product p)</code> instead of <code>equals(Object o)</code>.",
          ar: "اكتب @Override دائمًا عند التجاوز ليكتشف المترجم الأخطاء." },
        { type: 'h', en: 'Rules for overriding' },
        { type: 'list', items: [
          "The overriding method cannot be <b>less visible</b>: a <code>public</code> method must stay <code>public</code>.",
          "<code>private</code> methods are not inherited, so they cannot be overridden.",
          "<code>final</code> methods cannot be overridden, and a <code>final</code> class cannot be extended.",
          "<code>static</code> methods are not overridden; a static method with the same signature in a subclass only <i>hides</i> the parent's.",
          "Inside the override, <code>super.method(...)</code> calls the parent's version."
        ] },
        { type: 'h', en: 'protected access' },
        { type: 'p', en: "A <code>protected</code> member is visible in its own class, in the same package, and in <b>subclasses</b> (even in other packages). It is useful for fields or helper methods that subclasses need but the general public should not use. In UML it is marked with <code>#</code>.",
          ar: "العضو protected مرئي في الصنف نفسه، والحزمة نفسها، والأصناف الفرعية." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Savings s = new Savings(2000);
                  s.addProfit(0.5);
                  System.out.println(s);
              }
          }

          class Account {
              protected double balance;          // visible to subclasses

              Account(double balance) { this.balance = balance; }
          }

          class Savings extends Account {
              Savings(double balance) { super(balance); }

              void addProfit(double ratio) {
                  balance = balance + balance * ratio;   // direct access: protected
              }

              @Override
              public String toString() { return "Savings: " + balance; }
          }
        `, out: J`
          Savings: 3000.0
        ` },
        { type: 'note', kind: 'exam', en: "Overriding with weaker access is a compile error: if <code>Employee</code> has <code>public double pay()</code>, then <code>double pay()</code> (default access) in <code>Manager</code> is rejected with <i>attempting to assign weaker access privileges</i>.",
          ar: "لا يجوز تقليل مستوى الوصول عند التجاوز." }
      ],
      practice: [
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
        `, explain: "<code>a.speak()</code> runs the <code>Animal</code> version. <code>c.speak()</code> runs the override, which first calls <code>super.speak()</code> and then prints Meow." },
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
        { t: 'mcq', q: "<code>Shape</code> has <code>public double area()</code>. Which method in subclass <code>Circle</code> <b>overrides</b> it?",
          options: [
            '<code>public double area(double r)</code>',
            '<code>public double area()</code>',
            '<code>public int area()</code>',
            '<code>public static double area()</code>'
          ], answer: 1,
          explain: "Overriding needs the same name and parameter list with a compatible return type. A different parameter list is overloading; <code>int</code> is not compatible with <code>double</code>; a static method cannot override an instance method." },
        { t: 'mcq', q: "What is the main benefit of writing <code>@Override</code>?",
          options: [
            "It makes the method run faster",
            "It makes the method public",
            "The compiler reports an error if the method does not actually override an inherited method",
            "It lets a class extend two classes"
          ], answer: 2,
          explain: "<code>@Override</code> is a check for the compiler; it catches spelling and parameter mistakes that would otherwise silently create a new method." },
        { t: 'mcq', q: "<code>Employee</code> declares <code>public double pay()</code>. Subclass <code>Intern</code> declares <code>double pay() { return 0; }</code> with no modifier. What happens?",
          options: [
            "It compiles; interns are paid 0",
            "Compile error: the override has weaker access than <code>public</code>",
            "It compiles but <code>Employee.pay()</code> is always used",
            "Run-time exception"
          ], answer: 1,
          explain: "An overriding method may keep or widen the access level but never narrow it. Default access is narrower than public." },
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
          explain: "<code>protected</code> grants access to subclasses. <code>@Override</code> documents and checks that <code>toString()</code> overrides <code>Object.toString()</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'Superclass references, instanceof and class hierarchies',
      titleAr: 'مراجع الصنف الأب و instanceof وهرميات الأصناف',
      minutes: 50,
      body: [
        { type: 'p', en: "Because every subclass object <i>is a</i> superclass object, a <b>superclass reference may point to a subclass object</b>: <code>Vehicle v = new Car(...);</code>. This lets one array or one method handle many kinds of vehicles. The opposite, <code>Car c = new Vehicle(...);</code>, does not compile.",
          ar: "يمكن لمتغير من نوع الصنف الأب أن يشير إلى كائن من صنف فرعي، والعكس غير مسموح." },
        { type: 'p', en: "Two types are involved: the <b>declared type</b> of the variable (decides which methods you are <i>allowed to call</i>, checked at compile time) and the <b>actual type</b> of the object (decides which overridden version <i>runs</i>, at run time)." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Vehicle[] fleet = {
                      new Vehicle("Bus-1"),
                      new Car("Car-7", 4),
                      new Truck("Trk-3", 12.5)
                  };
                  for (Vehicle v : fleet) {
                      System.out.println(v.describe());   // the object's own version runs
                  }

                  Vehicle v = fleet[1];
                  // v.getDoors();          // compile error: Vehicle has no getDoors()
                  if (v instanceof Car) {
                      Car c = (Car) v;      // safe cast after the check
                      System.out.println("Doors: " + c.getDoors());
                  }
              }
          }

          class Vehicle {
              protected String id;

              public Vehicle(String id) { this.id = id; }

              public String describe() { return id + ": vehicle"; }
          }

          class Car extends Vehicle {
              private int doors;

              public Car(String id, int doors) {
                  super(id);
                  this.doors = doors;
              }

              public int getDoors() { return doors; }

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
          Doors: 4
        ` },
        { type: 'h', en: 'instanceof and getClass()' },
        { type: 'p', en: "<code>obj instanceof T</code> is <code>true</code> when the object is a <code>T</code> <b>or any subclass of</b> <code>T</code> (and <code>false</code> for <code>null</code>). <code>obj.getClass()</code> returns the object's <b>exact</b> run-time class, so <code>obj.getClass() == T.class</code> is true only for exactly <code>T</code>.",
          ar: "instanceof تشمل الأصناف الفرعية، أما getClass فتعطي الصنف الفعلي بالضبط." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Employee e = new Manager();
                  System.out.println(e instanceof Employee);
                  System.out.println(e instanceof Manager);
                  System.out.println(e instanceof Object);
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
          true
          false
          true
          Manager
        ` },
        { type: 'h', en: 'Class hierarchies' },
        { type: 'p', en: "Classes form a tree with <code>Object</code> at the root. Each level adds detail. A method defined high in the tree is available to everything below it, and an override low in the tree affects only that branch." },
        { type: 'code', code: J`
          Object
            └── Shape                 (color, area())
                  ├── Circle          (radius)
                  └── Rectangle       (width, height)
                        └── Square    (side = width = height)
        ` },
        { type: 'list', items: [
          "A <code>Square</code> is a <code>Rectangle</code>, a <code>Shape</code> and an <code>Object</code>: all four <code>instanceof</code> tests are true.",
          "A <code>Shape</code> variable can hold a <code>Circle</code>, <code>Rectangle</code> or <code>Square</code>.",
          "A <code>Circle</code> and a <code>Rectangle</code> are siblings: neither is an instance of the other."
        ] },
        { type: 'note', kind: 'exam', en: "The compiler only looks at the declared type. With <code>Vehicle v = new Car(\"C1\", 4);</code>, the call <code>v.getDoors()</code> is a compile error even though the object is a <code>Car</code>. Cast first: <code>((Car) v).getDoors()</code>.",
          ar: "المترجم ينظر إلى نوع المتغير المعلن، لذا يلزم التحويل (cast) قبل استدعاء دوال الصنف الفرعي." },
        { type: 'note', kind: 'warn', en: "Casting to the wrong type compiles but fails at run time with a <code>ClassCastException</code>. Check with <code>instanceof</code> before downcasting. Unit 4 studies casting in detail." }
      ],
      practice: [
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
        { t: 'mcq', q: "<code>Manager extends Employee</code>. Which statement compiles?",
          options: [
            '<code>Manager m = new Employee();</code>',
            '<code>Employee e = new Manager();</code>',
            '<code>Manager m = (Employee) new Manager();</code>',
            'None of them'
          ], answer: 1,
          explain: "A superclass variable can refer to a subclass object (every Manager is an Employee). The reverse assignment needs a cast and is not allowed implicitly." },
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
        `, explain: "Each element runs the <code>level()</code> of its actual class. All three objects are instances of <code>Student</code> (directly or through a subclass), so the count is 3." },
        { t: 'mcq', q: "Given <code>Vehicle v = new Truck(\"T1\", 8.0);</code> where only <code>Truck</code> has <code>getLoad()</code>, what is true about <code>v.getLoad()</code>?",
          options: [
            "It compiles and returns 8.0",
            "It is a compile error because the declared type <code>Vehicle</code> has no <code>getLoad()</code>",
            "It compiles but throws ClassCastException",
            "It returns 0.0 because Vehicle has no load"
          ], answer: 1,
          explain: "Which methods may be called is decided at compile time from the declared type. Use <code>((Truck) v).getLoad()</code> after checking <code>v instanceof Truck</code>." },
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
      explain: "Generalization (inheritance) is a solid line whose hollow triangle points to the superclass." },
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
    q: "<b>Mini project: Vehicle rental.</b> Build the hierarchy <code>Vehicle</code> &rarr; <code>Car</code>, <code>Truck</code>. <code>Vehicle</code> has private <code>id</code> (String) and <code>dailyRate</code> (int), getters, and <code>int rentalCost(int days)</code> returning <code>dailyRate * days</code>. <code>Car</code> overrides <code>rentalCost</code>: every 7th day is free, so it charges <code>dailyRate * (days - days / 7)</code>. <code>Truck</code> adds an int <code>tons</code> and overrides <code>rentalCost</code> to return the normal cost (use <code>super.rentalCost(days)</code>) plus <code>20 * tons</code>. Constructors must use <code>super(...)</code>.<br>Input: the number of rental <code>days</code>, then <code>n</code>, then <code>n</code> lines: <code>CAR id rate</code>, <code>TRUCK id rate tons</code>, or <code>VEHICLE id rate</code>. Store all of them in a <code>Vehicle[]</code>. For each print <code>ID (ClassName): COST</code> using <code>getClass().getSimpleName()</code>, then <code>Total: SUM</code>. No prompts.",
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
    { code: J`protected double balance;`, note: 'Visible to subclasses and the same package (# in UML)' },
    { code: J`Vehicle v = new Car("C1", 4);`, note: 'Superclass reference to a subclass object' },
    { code: J`if (v instanceof Car) { Car c = (Car) v; }`, note: 'Check before downcasting' },
    { code: J`v.getClass().getSimpleName()`, note: 'Exact run-time class name, e.g. Car' }
  ],

  glossary: [
    { term: 'Inheritance', ar: 'الوراثة', def: 'A mechanism where a class reuses and extends the fields and methods of another class.' },
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
    { term: 'instanceof', ar: 'instanceof', def: 'Operator that tests whether an object is an instance of a class or any of its subclasses.' },
    { term: 'getClass()', ar: 'getClass()', def: 'Object method returning the exact run-time class of an object.' },
    { term: 'Class hierarchy', ar: 'هرمية الأصناف', def: 'The tree of classes formed by inheritance, with Object at the root.' }
  ]
});
