JP.unit({
  course: 'cs102',
  n: 4,
  title: 'Polymorphism and Interfaces',
  titleAr: 'تعدد الأشكال والواجهات',
  intro: "Polymorphism means one piece of code working with many types of objects. A Shape variable can hold a Circle or a Rectangle, and calling area() runs the right version automatically. This unit explains dynamic binding, upcasting and downcasting, abstract classes and methods, interfaces (including implementing several at once), the Comparable interface for sorting, and functional interfaces with a first taste of lambda expressions.",
  introAr: "تعدد الأشكال يعني أن كودًا واحدًا يعمل مع أنواع كثيرة من الكائنات. متغير من نوع Shape قد يحمل دائرة أو مستطيلًا، واستدعاء area() ينفّذ النسخة المناسبة تلقائيًا.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'Polymorphism, dynamic binding and casting',
      titleAr: 'تعدد الأشكال والربط الديناميكي والتحويل بين الأنواع',
      minutes: 55,
      body: [
        { type: 'p', en: "<b>Polymorphism</b> (\"many forms\") lets a variable of a superclass type refer to objects of different subclasses, and lets the same method call behave differently depending on the object. You write the loop once for <code>Shape</code>, and it works for every present and future kind of shape.",
          ar: "تعدد الأشكال: متغير من نوع الصنف الأب يشير إلى كائنات مختلفة، والاستدعاء نفسه يتصرف حسب نوع الكائن." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape[] shapes = { new Circle(1), new Rectangle(2, 3), new Shape() };
                  for (Shape s : shapes) {
                      System.out.println(s.name() + " area = " + s.area());
                  }
              }
          }

          class Shape {
              public String name() { return "shape"; }
              public double area() { return 0; }
          }

          class Circle extends Shape {
              private double radius;
              public Circle(double radius) { this.radius = radius; }
              @Override public String name() { return "circle"; }
              @Override public double area() { return Math.PI * radius * radius; }
          }

          class Rectangle extends Shape {
              private double width, height;
              public Rectangle(double width, double height) {
                  this.width = width;
                  this.height = height;
              }
              @Override public String name() { return "rectangle"; }
              @Override public double area() { return width * height; }
          }
        `, out: J`
          circle area = 3.141592653589793
          rectangle area = 6.0
          shape area = 0.0
        ` },
        { type: 'h', en: 'Dynamic binding' },
        { type: 'p', en: "When an overridden method is called, the JVM looks at the <b>actual object</b> at run time and starts searching for the method in that object's class, moving up the hierarchy until it finds an implementation. This is <b>dynamic binding</b> (late binding). It applies even when a superclass method calls another method on <code>this</code>.",
          ar: "الربط الديناميكي: يتحدد أي نسخة من الدالة ستُنفّذ وقت التشغيل حسب نوع الكائن الفعلي." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Employee e = new Manager();
                  e.report();
              }
          }

          class Employee {
              public void report() {
                  System.out.println("Role: " + role());   // which role()? decided at run time
              }

              public String role() { return "Employee"; }
          }

          class Manager extends Employee {
              @Override
              public String role() { return "Manager"; }
          }
        `, out: J`
          Role: Manager
        ` },
        { type: 'note', kind: 'exam', en: "Only overridden <b>instance methods</b> are dynamically bound. <b>Fields</b> and <b>static methods</b> are chosen by the declared type of the variable. If both classes declare a field <code>tag</code>, then <code>Animal a = new Dog(); a.tag</code> reads <code>Animal</code>'s field.",
          ar: "الحقول والدوال الساكنة لا تخضع للربط الديناميكي؛ يحددها نوع المتغير المعلن." },
        { type: 'h', en: 'Upcasting and downcasting' },
        { type: 'list', items: [
          "<b>Upcasting</b>: subclass to superclass, e.g. <code>Shape s = new Circle(2);</code>. Always safe, so it is automatic.",
          "<b>Downcasting</b>: superclass to subclass, e.g. <code>Circle c = (Circle) s;</code>. It needs an explicit cast because it might be wrong.",
          "If the object is not really of the target type, the cast compiles but throws <code>ClassCastException</code> at run time.",
          "Casting between unrelated classes (e.g. <code>(String) someCircle</code>) is a compile error."
        ] },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Object o = new Circle(2);       // upcast (automatic)
                  Shape s = (Shape) o;            // downcast: OK, it is a Shape
                  Circle c = (Circle) s;          // downcast: OK, it is a Circle
                  System.out.println(c.getRadius());

                  Shape r = new Rectangle(1, 1);
                  if (r instanceof Circle) {
                      System.out.println("r is a Circle");
                  } else {
                      System.out.println("r is not a Circle, cast skipped");
                  }

                  try {
                      Circle bad = (Circle) r;    // compiles, fails at run time
                      System.out.println("not reached");
                  } catch (ClassCastException ex) {
                      System.out.println("ClassCastException caught");
                  }
              }
          }

          class Shape { }

          class Circle extends Shape {
              private double radius;
              public Circle(double radius) { this.radius = radius; }
              public double getRadius() { return radius; }
          }

          class Rectangle extends Shape {
              private double width, height;
              public Rectangle(double width, double height) {
                  this.width = width;
                  this.height = height;
              }
          }
        `, out: J`
          2.0
          r is not a Circle, cast skipped
          ClassCastException caught
        ` },
        { type: 'h', en: 'instanceof vs getClass() checks' },
        { type: 'table', head: ['Check', 'True when', 'Typical use'], rows: [
          ['<code>x instanceof Rectangle</code>', 'x is a Rectangle or any subclass (e.g. Square)', 'before a downcast; &quot;can I treat it as a Rectangle?&quot;'],
          ['<code>x.getClass() == Rectangle.class</code>', 'x is exactly a Rectangle, not a subclass', 'strict type match, e.g. inside <code>equals</code>'],
          ['<code>x.getClass() == y.getClass()</code>', 'x and y have the same exact class', '<code>equals</code> between two objects']
        ] },
        { type: 'note', kind: 'tip', en: "Newer Java versions (16+) allow <code>if (s instanceof Circle c) { ... }</code>, which tests and casts in one step. The classic form <code>if (s instanceof Circle) { Circle c = (Circle) s; ... }</code> works in every version and is what most exam questions use." }
      ],
      practice: [
        { t: 'output', q: "Fields are not polymorphic. What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  A x = new B();
                  System.out.println(x.tag);
                  System.out.println(x.getTag());
              }
          }

          class A {
              String tag = "A";
              String getTag() { return tag; }
          }

          class B extends A {
              String tag = "B";
              @Override
              String getTag() { return tag; }
          }
        `, answer: J`
          A
          B
        `, explain: "<code>x.tag</code> is resolved by the declared type <code>A</code>. <code>x.getTag()</code> is an overridden method, so <code>B</code>'s version runs and returns <code>B</code>'s field.",
          explainAr: "الحقل يُختار حسب نوع المتغير، والدالة حسب نوع الكائن." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Account a = new Savings();
                  System.out.println(a.describe());
              }
          }

          class Account {
              String type() { return "Account"; }
              String describe() { return "This is a " + type(); }
          }

          class Savings extends Account {
              @Override
              String type() { return "Savings"; }

              @Override
              String describe() { return super.describe() + "!"; }
          }
        `, answer: J`
          This is a Savings!
        `, explain: "<code>Savings.describe()</code> calls <code>super.describe()</code>. Inside it, <code>type()</code> is still dynamically bound to the actual object, a <code>Savings</code>, so it returns <code>Savings</code>." },
        { t: 'mcq', q: "Which line throws a <code>ClassCastException</code> at run time?", code: J`
          Vehicle v1 = new Car();        // line 1
          Vehicle v2 = new Truck();      // line 2
          Car c1 = (Car) v1;             // line 3
          Car c2 = (Car) v2;             // line 4
          // Car and Truck both extend Vehicle
        `, options: ['line 1', 'line 2', 'line 3', 'line 4'], answer: 3,
          explain: "Lines 1 and 2 are upcasts (always safe). Line 3 is fine because <code>v1</code> really is a <code>Car</code>. <code>v2</code> refers to a <code>Truck</code>, so casting it to <code>Car</code> fails at run time." },
        { t: 'mcq', q: "<code>Shape s = new Circle(1);</code> and only <code>Circle</code> defines <code>getRadius()</code>. What is <code>s.getRadius()</code>?",
          options: [
            "1.0, because the object is a Circle",
            "A compile error, because the declared type Shape has no getRadius()",
            "A ClassCastException at run time",
            "0.0, because Shape has no radius"
          ], answer: 1,
          explain: "The compiler checks method calls against the declared type. Dynamic binding only chooses <i>which version</i> of a method that the declared type already has." },
        { t: 'fill', q: "Complete the safe downcast.", code: J`
          for (Vehicle v : fleet) {
              if (v ___ Truck) {
                  Truck t = (___) v;
                  System.out.println(t.getLoad());
              }
          }
        `, answers: ['instanceof', 'Truck'],
          explain: "Test with <code>instanceof</code> first, then cast with <code>(Truck)</code>; the cast can no longer fail." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal a = new Dog();
                  Animal b = new Animal();
                  System.out.println(a instanceof Animal);
                  System.out.println(a.getClass() == Animal.class);
                  System.out.println(b instanceof Dog);
                  System.out.println(a.getClass() == b.getClass());
              }
          }

          class Animal { }

          class Dog extends Animal { }
        `, answer: J`
          true
          false
          false
          false
        `, explain: "A Dog is an Animal, so the first test is true, but its exact class is <code>Dog</code>, not <code>Animal</code>. A plain Animal is not a Dog, and the two objects have different classes." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Abstract classes and interfaces',
      titleAr: 'الأصناف المجردة والواجهات',
      minutes: 55,
      body: [
        { type: 'p', en: "In the previous lesson <code>Shape.area()</code> returned 0, which is not a real answer. A better design declares it <b>abstract</b>: no body, just a promise that every concrete subclass will provide one. A class with an abstract method must itself be declared <code>abstract</code>, and cannot be instantiated.",
          ar: "الدالة المجردة بلا جسم، والصنف الذي يحتويها يجب أن يكون مجردًا ولا يمكن إنشاء كائن منه." },
        { type: 'list', items: [
          "An abstract class <b>can</b> have fields, constructors (called with <code>super(...)</code>) and normal methods.",
          "A concrete subclass must override <b>all</b> inherited abstract methods, or be declared abstract itself.",
          "You can still declare variables and arrays of the abstract type: <code>Shape[] shapes</code>.",
          "Concrete methods in the abstract class may call the abstract ones; dynamic binding picks the subclass version."
        ] },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape[] shapes = { new Rectangle(3, 4), new Square(5), new Triangle(3, 4, 5) };
                  double total = 0;
                  for (Shape s : shapes) {
                      System.out.println(s);
                      total += s.area();
                  }
                  System.out.println("Total area: " + total);
              }
          }

          abstract class Shape {
              public abstract double area();
              public abstract double perimeter();

              @Override
              public String toString() {     // concrete method using abstract ones
                  return getClass().getSimpleName() + " area=" + area() + " perimeter=" + perimeter();
              }
          }

          class Rectangle extends Shape {
              protected double width, height;

              public Rectangle(double width, double height) {
                  this.width = width;
                  this.height = height;
              }

              @Override public double area() { return width * height; }
              @Override public double perimeter() { return 2 * (width + height); }
          }

          class Square extends Rectangle {
              public Square(double side) { super(side, side); }
          }

          class Triangle extends Shape {
              private double a, b, c;

              public Triangle(double a, double b, double c) {
                  this.a = a;
                  this.b = b;
                  this.c = c;
              }

              @Override public double perimeter() { return a + b + c; }

              @Override public double area() {          // Heron's formula
                  double s = perimeter() / 2;
                  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
              }
          }
        `, out: J`
          Rectangle area=12.0 perimeter=14.0
          Square area=25.0 perimeter=20.0
          Triangle area=6.0 perimeter=12.0
          Total area: 43.0
        ` },
        { type: 'h', en: 'Interfaces' },
        { type: 'p', en: "An <b>interface</b> is a pure contract: a named set of method headers that a class promises to provide. A class <code>implements</code> an interface and must then define all its abstract methods as <code>public</code>. Interface methods are implicitly <code>public abstract</code>, and interface fields are implicitly <code>public static final</code> constants.",
          ar: "الواجهة عقد يحدد دوال يجب على الصنف تنفيذها باستخدام implements، ودوالها public abstract ضمنيًا." },
        { type: 'p', en: "A class can extend only one class but can implement <b>many</b> interfaces. This is how Java supports multiple inheritance of type: a <code>SmartPhone</code> can be both <code>Chargeable</code> and a <code>Camera</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  SmartPhone p = new SmartPhone("Galaxy", 80);
                  p.charge(15);
                  p.charge(30);
                  p.takePhoto();

                  Chargeable c = p;               // interface reference
                  System.out.println(c.getBatteryLevel() + "%");

                  Camera cam = p;                 // another view of the same object
                  cam.takePhoto();
                  System.out.println(Chargeable.MAX_LEVEL);
              }
          }

          interface Chargeable {
              int MAX_LEVEL = 100;                // public static final
              void charge(int percent);           // public abstract
              int getBatteryLevel();
          }

          interface Camera {
              void takePhoto();
          }

          class SmartPhone implements Chargeable, Camera {
              private String model;
              private int battery;
              private int photos;

              public SmartPhone(String model, int battery) {
                  this.model = model;
                  this.battery = battery;
              }

              @Override
              public void charge(int percent) {
                  battery = Math.min(MAX_LEVEL, battery + percent);
                  System.out.println(model + " battery: " + battery + "%");
              }

              @Override
              public int getBatteryLevel() { return battery; }

              @Override
              public void takePhoto() {
                  photos++;
                  battery -= 2;
                  System.out.println("Photo #" + photos + " taken");
              }
          }
        `, out: J`
          Galaxy battery: 95%
          Galaxy battery: 100%
          Photo #1 taken
          98%
          Photo #2 taken
          100
        ` },
        { type: 'note', kind: 'exam', en: "Implementing methods of an interface without <code>public</code> is a compile error (<i>attempting to assign weaker access privileges</i>), because interface methods are public. Also, <code>new Chargeable()</code> is illegal: you cannot instantiate an interface.",
          ar: "يجب أن تكون دوال الواجهة المنفذة public، ولا يمكن إنشاء كائن من واجهة." },
        { type: 'table', head: ['', 'Abstract class', 'Interface'], rows: [
          ['Keyword to use it', '<code>extends</code> (only one)', '<code>implements</code> (many)'],
          ['Fields', 'Any instance or static fields', 'Only <code>public static final</code> constants'],
          ['Constructors', 'Yes (called via <code>super</code>)', 'No'],
          ['Methods', 'Abstract and concrete, any access', 'Abstract (plus <code>default</code>/<code>static</code> methods since Java 8), public'],
          ['Models', 'A common base: <i>is-a</i> with shared code', 'A capability: <i>can-do</i> (Comparable, Chargeable)']
        ] },
        { type: 'code', code: J`
          // A class can extend one class AND implement interfaces at the same time:
          class ElectricCar extends Vehicle implements Chargeable, Comparable<ElectricCar> {
              ...
          }
        ` },
        { type: 'note', kind: 'tip', en: "Since Java 8 an interface may also contain <code>default</code> methods (with a body) that implementing classes inherit unless they override them. They let library designers add methods to an interface without breaking existing classes." }
      ],
      practice: [
        { t: 'mcq', q: "Which statement about abstract classes is true?",
          options: [
            "An abstract class cannot have a constructor.",
            "An abstract class can have both abstract and concrete methods.",
            "Every method in an abstract class must be abstract.",
            "You can create an object with <code>new</code> of an abstract class if it has no abstract methods."
          ], answer: 1,
          explain: "Abstract classes may mix abstract and concrete methods and may have constructors for subclasses to call. An abstract class can never be instantiated directly, even with no abstract methods." },
        { t: 'mcq', q: "<code>class Invoice implements Payable</code>, but <code>Invoice</code> does not implement one of <code>Payable</code>'s methods. What happens?",
          options: [
            "It compiles; the method returns a default value",
            "Compile error, unless <code>Invoice</code> is declared abstract",
            "Run-time exception when the method is called",
            "The interface method is silently removed"
          ], answer: 1,
          explain: "A concrete class must implement every abstract method it inherits. Otherwise it must be declared abstract, leaving the work to its subclasses." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Employee[] staff = { new FullTime("Majed", 9000), new PartTime("Lama", 50, 80) };
                  for (Employee e : staff) {
                      System.out.println(e.getName() + " earns " + e.monthlyPay());
                  }
              }
          }

          abstract class Employee {
              private String name;
              Employee(String name) { this.name = name; }
              String getName() { return name; }
              abstract double monthlyPay();
          }

          class FullTime extends Employee {
              private double salary;
              FullTime(String name, double salary) {
                  super(name);
                  this.salary = salary;
              }
              @Override
              double monthlyPay() { return salary; }
          }

          class PartTime extends Employee {
              private double hourlyRate;
              private int hours;
              PartTime(String name, double hourlyRate, int hours) {
                  super(name);
                  this.hourlyRate = hourlyRate;
                  this.hours = hours;
              }
              @Override
              double monthlyPay() { return hourlyRate * hours; }
          }
        `, answer: J`
          Majed earns 9000.0
          Lama earns 4000.0
        `, explain: "Each object runs its own <code>monthlyPay()</code>: the full-timer returns the salary, and the part-timer returns 50 * 80 = 4000.0. The abstract class supplies the shared <code>name</code> logic." },
        { t: 'fill', q: "Define the interface and implement it.", code: J`
          ___ Payable {
              double amountDue();
          }

          class Invoice ___ Payable {
              private double total;

              Invoice(double total) { this.total = total; }

              @Override
              ___ double amountDue() { return total; }
          }
        `, answers: ['interface', 'implements', 'public'],
          explain: "Interfaces are declared with <code>interface</code> and used with <code>implements</code>. The implementing method must be <code>public</code>, because interface methods are implicitly public.",
          explainAr: "دالة الواجهة يجب أن تُنفّذ بمستوى وصول public." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Swimmer[] pool = { new Duck(), new Penguin() };
                  for (Swimmer s : pool) {
                      String line = s.swim();
                      if (s instanceof Flyer) {
                          line += " and " + ((Flyer) s).fly();
                      }
                      System.out.println(line);
                  }
              }
          }

          interface Swimmer { String swim(); }

          interface Flyer { String fly(); }

          class Duck implements Swimmer, Flyer {
              public String swim() { return "paddles"; }
              public String fly() { return "flaps"; }
          }

          class Penguin implements Swimmer {
              public String swim() { return "dives"; }
          }
        `, answer: J`
          paddles and flaps
          dives
        `, explain: "Both objects are Swimmers. Only the Duck also implements <code>Flyer</code>, so only it passes the <code>instanceof</code> test and is cast to call <code>fly()</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Comparable and functional interfaces',
      titleAr: 'الواجهة Comparable والواجهات الوظيفية',
      minutes: 50,
      body: [
        { type: 'p', en: "Java's library uses interfaces to work with <i>your</i> classes. The most common example is <code>Comparable&lt;T&gt;</code>, which gives objects a <b>natural ordering</b>. It has one method, <code>int compareTo(T other)</code>, and once your class implements it, <code>Arrays.sort</code> can sort arrays of your objects.",
          ar: "الواجهة Comparable تعطي الكائنات ترتيبًا طبيعيًا عبر الدالة compareTo، فيمكن ترتيبها باستخدام Arrays.sort." },
        { type: 'table', head: ['<code>a.compareTo(b)</code> returns', 'Meaning'], rows: [
          ['a negative number', '<code>a</code> comes <b>before</b> <code>b</code>'],
          ['zero', '<code>a</code> and <code>b</code> are equal in order'],
          ['a positive number', '<code>a</code> comes <b>after</b> <code>b</code>']
        ] },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Student[] list = {
                      new Student("Nouf", 3.4),
                      new Student("Badr", 3.9),
                      new Student("Hessa", 2.8)
                  };
                  System.out.println(list[0].compareTo(list[1]) < 0);
                  Arrays.sort(list);              // uses compareTo
                  for (Student s : list) {
                      System.out.println(s);
                  }
              }
          }

          class Student implements Comparable<Student> {
              private String name;
              private double gpa;

              Student(String name, double gpa) {
                  this.name = name;
                  this.gpa = gpa;
              }

              @Override
              public int compareTo(Student other) {
                  return Double.compare(this.gpa, other.gpa);   // ascending GPA
              }

              @Override
              public String toString() { return name + " " + gpa; }
          }
        `, out: J`
          true
          Hessa 2.8
          Nouf 3.4
          Badr 3.9
        ` },
        { type: 'list', items: [
          "Use <code>Integer.compare(x, y)</code> and <code>Double.compare(x, y)</code> for numbers; they return -1, 0 or 1.",
          "Use <code>s1.compareTo(s2)</code> to order <code>String</code>s alphabetically (String implements Comparable).",
          "For descending order, swap the arguments: <code>Integer.compare(other.score, this.score)</code>.",
          "To break ties, compare a second field when the first comparison returns 0."
        ], ar: "للترتيب التنازلي بدّل المعاملين، ولكسر التعادل قارن حقلًا ثانيًا." },
        { type: 'note', kind: 'warn', en: "Avoid <code>return this.price - other.price;</code> for large ints (it can overflow) and never use it for doubles: <code>(int) (3.4 - 3.9)</code> is 0, which wrongly says the values are equal. Prefer <code>Integer.compare</code> and <code>Double.compare</code>." },
        { type: 'h', en: 'Functional (SAM) interfaces and lambdas' },
        { type: 'p', en: "An interface with exactly <b>one abstract method</b> is called a <b>functional interface</b> or <b>SAM</b> (Single Abstract Method) interface. <code>Comparable</code> is one. Instead of writing a whole class to implement such an interface, you can write a <b>lambda expression</b>: <code>parameters -&gt; expression</code>. The optional <code>@FunctionalInterface</code> annotation asks the compiler to check that there is only one abstract method.",
          ar: "الواجهة الوظيفية لها دالة مجردة واحدة فقط، ويمكن تنفيذها بتعبير لامدا مختصر بدل كتابة صنف كامل." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  PriceRule studentRule = price -> price * 0.5;   // lambda
                  PriceRule flatRule = price -> price - 20;       // lambda
                  PriceRule noRule = new FullPrice();             // ordinary class

                  double ticket = 120;
                  System.out.println(studentRule.apply(ticket));
                  System.out.println(flatRule.apply(ticket));
                  System.out.println(noRule.apply(ticket));
              }
          }

          @FunctionalInterface
          interface PriceRule {
              double apply(double price);     // the single abstract method
          }

          class FullPrice implements PriceRule {
              @Override
              public double apply(double price) { return price; }
          }
        `, out: J`
          60.0
          100.0
          120.0
        ` },
        { type: 'p', en: "Lambdas are handy with library methods that take a functional interface. <code>Arrays.sort(array, comparator)</code> accepts a <code>Comparator</code>, whose single method <code>compare(a, b)</code> follows the same sign rules as <code>compareTo</code>." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  String[] cities = { "Riyadh", "Abha", "Jeddah", "Dammam" };
                  Arrays.sort(cities, (a, b) -> a.length() - b.length());   // by length
                  System.out.println(Arrays.toString(cities));
                  Arrays.sort(cities);                                     // natural (alphabetical)
                  System.out.println(Arrays.toString(cities));
              }
          }
        `, out: J`
          [Abha, Riyadh, Jeddah, Dammam]
          [Abha, Dammam, Jeddah, Riyadh]
        ` },
        { type: 'note', kind: 'exam', en: "Sorting objects with <code>Arrays.sort</code> is <b>stable</b>: elements that compare as equal keep their original order. That is why Riyadh, Jeddah and Dammam (all 6 letters) stay in their input order after sorting by length.",
          ar: "الترتيب في Arrays.sort للكائنات مستقر: العناصر المتساوية تحافظ على ترتيبها الأصلي." }
      ],
      practice: [
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Product a = new Product("Pen", 5);
                  Product b = new Product("Bag", 40);
                  Product c = new Product("Cap", 5);
                  System.out.println(a.compareTo(b));
                  System.out.println(b.compareTo(a));
                  System.out.println(a.compareTo(c));
              }
          }

          class Product implements Comparable<Product> {
              String name;
              int price;

              Product(String name, int price) {
                  this.name = name;
                  this.price = price;
              }

              @Override
              public int compareTo(Product other) {
                  return Integer.compare(price, other.price);
              }
          }
        `, answer: J`
          -1
          1
          0
        `, explain: "<code>Integer.compare</code> returns -1, 0 or 1. Pen (5) is cheaper than Bag (40), Bag is more expensive than Pen, and Pen and Cap have the same price, so their order is equal (names are ignored)." },
        { t: 'mcq', q: "If <code>x.compareTo(y)</code> returns a positive number, then…",
          options: [
            "x comes before y in the natural ordering",
            "x comes after y in the natural ordering",
            "x and y are the same object",
            "an exception occurred"
          ], answer: 1,
          explain: "Positive means <code>x</code> is greater (comes after), negative means it comes before, and zero means equal order." },
        { t: 'mcq', q: "Which of these is a functional (SAM) interface?",
          code: J`
            interface A { void run(); void stop(); }
            interface B { int MAX = 10; }
            interface C { double convert(double value); }
            interface D { }
          `,
          options: ['A', 'B', 'C', 'D'], answer: 2,
          explain: "A functional interface has exactly one abstract method. <code>A</code> has two, while <code>B</code> and <code>D</code> have none. Only <code>C</code> can be implemented by a lambda such as <code>v -&gt; v * 3.75</code>." },
        { t: 'output', q: "Employees are ordered by salary (highest first), and by name when salaries are equal. What is printed?", code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Employee[] team = {
                      new Employee("Zaid", 7000),
                      new Employee("Amal", 9000),
                      new Employee("Maha", 7000)
                  };
                  Arrays.sort(team);
                  for (Employee e : team) {
                      System.out.println(e.name + " " + e.salary);
                  }
              }
          }

          class Employee implements Comparable<Employee> {
              String name;
              int salary;

              Employee(String name, int salary) {
                  this.name = name;
                  this.salary = salary;
              }

              @Override
              public int compareTo(Employee other) {
                  if (salary != other.salary) {
                      return Integer.compare(other.salary, salary);   // descending
                  }
                  return name.compareTo(other.name);                  // ascending
              }
          }
        `, answer: J`
          Amal 9000
          Maha 7000
          Zaid 7000
        `, explain: "Swapping the arguments of <code>Integer.compare</code> sorts salaries in descending order. Maha and Zaid tie at 7000, so the name comparison puts Maha first." },
        { t: 'fill', q: "Make <code>Box</code> sortable by volume and create a lambda that doubles a value.", code: J`
          class Box implements ___<Box> {
              int volume;

              @Override
              public int ___(Box other) {
                  return Integer.compare(volume, other.volume);
              }
          }

          // Scaler is a functional interface with: int scale(int x);
          Scaler twice = x ___ x * 2;
        `, answers: ['Comparable', 'compareTo', '->'],
          explain: "<code>Comparable&lt;Box&gt;</code> requires <code>public int compareTo(Box other)</code>. A lambda uses the arrow <code>-&gt;</code> between the parameters and the body." },
        { t: 'code', q: "Read an integer <code>n</code>, then <code>n</code> lines with a one-word name and an integer score. Create a class <code>Result</code> that implements <code>Comparable&lt;Result&gt;</code>: higher scores come first, and equal scores are ordered by name alphabetically. Sort an array with <code>Arrays.sort</code> and print each result as <code>NAME SCORE</code>. No prompts.",
          qAr: "رتّب النتائج تنازليًا حسب الدرجة، ثم أبجديًا حسب الاسم عند التساوي، باستخدام Comparable.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Result[] results = new Result[n];
                    // read, sort with Arrays.sort, print
                }
            }

            class Result implements Comparable<Result> {
                // name, score, constructor, compareTo, toString
                @Override
                public int compareTo(Result other) {
                    return 0;   // TODO
                }
            }
          `,
          tests: [
            { stdin: J`
              4
              Omar 82
              Lina 95
              Adel 82
              Reem 70
            `, expected: J`
              Lina 95
              Adel 82
              Omar 82
              Reem 70
            ` },
            { stdin: J`
              3
              Sara 60
              Ali 60
              Hind 60
            `, expected: J`
              Ali 60
              Hind 60
              Sara 60
            ` }
          ],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Result[] results = new Result[n];
                    for (int i = 0; i < n; i++) {
                        results[i] = new Result(sc.next(), sc.nextInt());
                    }
                    Arrays.sort(results);
                    for (Result r : results) {
                        System.out.println(r);
                    }
                }
            }

            class Result implements Comparable<Result> {
                private String name;
                private int score;

                Result(String name, int score) {
                    this.name = name;
                    this.score = score;
                }

                @Override
                public int compareTo(Result other) {
                    if (score != other.score) {
                        return Integer.compare(other.score, score);
                    }
                    return name.compareTo(other.name);
                }

                @Override
                public String toString() {
                    return name + " " + score;
                }
            }
          `,
          hint: "Compare scores with the arguments swapped for descending order; if they are equal, return <code>name.compareTo(other.name)</code>.",
          explain: "<code>Arrays.sort</code> calls your <code>compareTo</code> to decide the order. Swapping the arguments reverses the numeric order, and the String comparison breaks ties alphabetically." }
      ]
    }
  ],

  quiz: [
    { t: 'mcq', q: "What is <b>dynamic binding</b>?",
      options: [
        "Choosing an overloaded method from the argument types at compile time",
        "Choosing which overridden method runs from the actual object type at run time",
        "Converting a primitive to its wrapper class",
        "Linking two classes with extends"
      ], answer: 1,
      explain: "With dynamic (late) binding, the JVM uses the real class of the object to pick the overridden method. Overload selection happens at compile time." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Vehicle[] list = { new Car(), new Bike(), new Car() };
              int wheels = 0;
              for (Vehicle v : list) {
                  wheels += v.wheels();
                  System.out.print(v.sound() + " ");
              }
              System.out.println();
              System.out.println(wheels);
          }
      }

      abstract class Vehicle {
          abstract int wheels();
          String sound() { return "..."; }
      }

      class Car extends Vehicle {
          int wheels() { return 4; }
          @Override
          String sound() { return "Beep"; }
      }

      class Bike extends Vehicle {
          int wheels() { return 2; }
      }
    `, answer: J`
      Beep ... Beep
      10
    `, explain: "Car overrides <code>sound()</code>, Bike inherits the default. The wheels add up to 4 + 2 + 4 = 10. (The first line has a trailing space, which is ignored.)" },
    { t: 'mcq', q: "<code>Animal a = new Cat();</code> What is <code>Dog d = (Dog) a;</code> (Dog and Cat both extend Animal)?",
      options: [
        "A compile error",
        "It compiles but throws ClassCastException at run time",
        "It works, and d refers to the cat",
        "It creates a new Dog object"
      ], answer: 1,
      explain: "The compiler allows the cast because an Animal <i>might</i> be a Dog. At run time the object is a Cat, so the cast fails with <code>ClassCastException</code>." },
    { t: 'mcq', q: "Which statement about interfaces is <b>false</b>?",
      options: [
        "A class can implement more than one interface.",
        "Interface fields are implicitly public static final.",
        "You can create an object with <code>new</code> followed by an interface name and ()",
        "A variable can have an interface type, e.g. <code>Comparable&lt;Student&gt; c</code>."
      ], answer: 2,
      explain: "Interfaces cannot be instantiated. You create an object of a class that implements the interface (or use a lambda for a functional interface)." },
    { t: 'output', q: "What does this program print?", code: J`
      public class Main {
          public static void main(String[] args) {
              Payable[] bills = { new Invoice(250), new Salary(4000, 500) };
              double total = 0;
              for (Payable p : bills) {
                  total += p.amount();
              }
              System.out.println(total);
              System.out.println(bills[1] instanceof Payable);
          }
      }

      interface Payable {
          double amount();
      }

      class Invoice implements Payable {
          private double total;
          Invoice(double total) { this.total = total; }
          public double amount() { return total; }
      }

      class Salary implements Payable {
          private double base, deduction;
          Salary(double base, double deduction) {
              this.base = base;
              this.deduction = deduction;
          }
          public double amount() { return base - deduction; }
      }
    `, answer: J`
      3750.0
      true
    `, explain: "250 + (4000 - 500) = 3750.0. Both classes implement <code>Payable</code>, so the <code>instanceof</code> test is true." },
    { t: 'mcq', q: "What must a concrete class do when it extends an abstract class that declares <code>abstract double area();</code>?",
      options: [
        "Nothing; the method is inherited with an empty body",
        "Override <code>area()</code> with a body",
        "Declare <code>area()</code> as static",
        "Call <code>super.area()</code> in its constructor"
      ], answer: 1,
      explain: "A concrete (non-abstract) class must implement every abstract method it inherits." },
    { t: 'output', q: "What does this program print?", code: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Course[] courses = {
                  new Course("CS102", 3),
                  new Course("MATH111", 4),
                  new Course("ENG101", 3)
              };
              Arrays.sort(courses);
              for (Course c : courses) {
                  System.out.print(c.code + " ");
              }
              System.out.println();
          }
      }

      class Course implements Comparable<Course> {
          String code;
          int credits;

          Course(String code, int credits) {
              this.code = code;
              this.credits = credits;
          }

          public int compareTo(Course other) {
              return Integer.compare(other.credits, credits);
          }
      }
    `, answer: J`
      MATH111 CS102 ENG101
    `, explain: "The order is by credits, descending. MATH111 (4) comes first; CS102 and ENG101 tie at 3 and keep their original order because object sorting is stable." },
    { t: 'mcq', q: "Which lambda can implement <code>interface Discount { double apply(double price); }</code>?",
      options: [
        '<code>p -&gt; p * 0.9</code>',
        '<code>() -&gt; 0.9</code>',
        '<code>(a, b) -&gt; a * b</code>',
        '<code>p -&gt; { System.out.println(p); }</code>'
      ], answer: 0,
      explain: "The single method takes one double and returns a double. Only <code>p -&gt; p * 0.9</code> matches: one parameter and a double result." },
    { t: 'mcq', q: "For <code>Shape s = new Square(2);</code> where <code>Square extends Rectangle extends Shape</code>, which condition is <code>true</code>?",
      options: [
        '<code>s.getClass() == Rectangle.class</code>',
        '<code>s.getClass() == Shape.class</code>',
        '<code>s instanceof Rectangle</code>',
        '<code>!(s instanceof Square)</code>'
      ], answer: 2,
      explain: "<code>instanceof</code> is true for the exact class and all its superclasses. <code>getClass()</code> is exactly <code>Square</code>." }
  ],

  lab: {
    t: 'code',
    q: "<b>Mini project: Shape sorter.</b> Create an abstract class <code>Shape</code> that implements <code>Comparable&lt;Shape&gt;</code> (ordering by area, smallest first) and declares <code>abstract double area()</code>. Write concrete classes <code>Circle</code> (radius), <code>Rectangle</code> (width, height) and <code>Square</code> (extends <code>Rectangle</code>).<br>Input: an integer <code>n</code>, then <code>n</code> lines: <code>C radius</code>, <code>R width height</code> or <code>S side</code>. Store the shapes in a <code>Shape[]</code>, sort it with <code>Arrays.sort</code>, and print each shape as <code>ClassName AREA</code>, where the class name comes from <code>getClass().getSimpleName()</code> and AREA is rounded to two decimals with <code>Math.round(area * 100) / 100.0</code>. Finally print <code>Largest: ClassName</code>. No prompts.",
    qAr: "مشروع مصغر: صنف مجرد Shape يطبق Comparable، رتّب الأشكال حسب المساحة واطبعها.",
    starter: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int n = sc.nextInt();
              Shape[] shapes = new Shape[n];
              // read shapes, sort, print
          }
      }

      abstract class Shape implements Comparable<Shape> {
          public abstract double area();

          @Override
          public int compareTo(Shape other) {
              return 0;   // TODO: compare by area
          }
      }

      // TODO: Circle, Rectangle, Square
    `,
    tests: [
      { stdin: J`
        3
        R 4 5
        C 2
        S 3
      `, expected: J`
        Square 9.0
        Circle 12.57
        Rectangle 20.0
        Largest: Rectangle
      ` },
      { stdin: J`
        2
        C 1
        R 1 3
      `, expected: J`
        Rectangle 3.0
        Circle 3.14
        Largest: Circle
      ` }
    ],
    solution: J`
      import java.util.*;

      public class Main {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int n = sc.nextInt();
              Shape[] shapes = new Shape[n];
              for (int i = 0; i < n; i++) {
                  String type = sc.next();
                  if (type.equals("C")) {
                      shapes[i] = new Circle(sc.nextDouble());
                  } else if (type.equals("R")) {
                      shapes[i] = new Rectangle(sc.nextDouble(), sc.nextDouble());
                  } else {
                      shapes[i] = new Square(sc.nextDouble());
                  }
              }
              Arrays.sort(shapes);
              for (Shape s : shapes) {
                  double rounded = Math.round(s.area() * 100) / 100.0;
                  System.out.println(s.getClass().getSimpleName() + " " + rounded);
              }
              System.out.println("Largest: " + shapes[n - 1].getClass().getSimpleName());
          }
      }

      abstract class Shape implements Comparable<Shape> {
          public abstract double area();

          @Override
          public int compareTo(Shape other) {
              return Double.compare(area(), other.area());
          }
      }

      class Circle extends Shape {
          private double radius;

          public Circle(double radius) { this.radius = radius; }

          @Override
          public double area() { return Math.PI * radius * radius; }
      }

      class Rectangle extends Shape {
          private double width, height;

          public Rectangle(double width, double height) {
              this.width = width;
              this.height = height;
          }

          @Override
          public double area() { return width * height; }
      }

      class Square extends Rectangle {
          public Square(double side) { super(side, side); }
      }
    `,
    hint: "Implement <code>compareTo</code> once in <code>Shape</code> with <code>Double.compare(area(), other.area())</code>; dynamic binding calls each subclass's <code>area()</code>.",
    explain: "The abstract class defines the ordering for all shapes, and each subclass only supplies its <code>area()</code>. After sorting ascending, the largest shape is the last element. <code>Square</code> inherits <code>area()</code> from <code>Rectangle</code>, but <code>getClass()</code> still reports <code>Square</code>."
  },

  cheats: [
    { code: J`Shape s = new Circle(2);`, note: 'Upcast: automatic and always safe' },
    { code: J`if (s instanceof Circle) { Circle c = (Circle) s; }`, note: 'Downcast only after an instanceof check, or risk ClassCastException' },
    { code: J`s.area()`, note: 'Dynamic binding: the actual object\'s override runs' },
    { code: J`
      abstract class Shape {
          public abstract double area();
      }
    `, note: 'Abstract method: no body; subclasses must implement it' },
    { code: J`
      interface Chargeable {
          void charge(int percent);
      }
    `, note: 'Interface methods are public abstract; fields are public static final' },
    { code: J`class Phone implements Chargeable, Camera { ... }`, note: 'A class may implement many interfaces' },
    { code: J`
      class Student implements Comparable<Student> {
          public int compareTo(Student o) { return Double.compare(gpa, o.gpa); }
      }
    `, note: 'Natural ordering: negative = before, 0 = equal, positive = after' },
    { code: J`Arrays.sort(list);`, note: 'Sorts Comparable objects using compareTo (stable)' },
    { code: J`PriceRule half = price -> price * 0.5;`, note: 'Lambda implementing a functional (single abstract method) interface' },
    { code: J`Arrays.sort(names, (a, b) -> a.length() - b.length());`, note: 'Lambda as a Comparator' }
  ],

  glossary: [
    { term: 'Polymorphism', ar: 'تعدد الأشكال', def: 'The ability of one reference type and one method call to work with objects of many subclasses.' },
    { term: 'Dynamic binding', ar: 'الربط الديناميكي', def: 'Selecting the overridden method to run from the actual object type at run time.' },
    { term: 'Declared type', ar: 'النوع المعلن', def: 'The type of a variable as written in code; it decides which members may be accessed.' },
    { term: 'Actual type', ar: 'النوع الفعلي', def: 'The class of the object the variable refers to at run time.' },
    { term: 'Upcasting', ar: 'التحويل للأعلى', def: 'Treating a subclass object as its superclass type; implicit and safe.' },
    { term: 'Downcasting', ar: 'التحويل للأسفل', def: 'Casting a superclass reference to a subclass type; needs an explicit cast.' },
    { term: 'ClassCastException', ar: 'استثناء التحويل', def: 'Run-time error thrown when an object is cast to a type it does not belong to.' },
    { term: 'Abstract method', ar: 'دالة مجردة', def: 'A method declared without a body that subclasses must implement.' },
    { term: 'Interface', ar: 'واجهة', def: 'A type that declares a contract of methods (and constants) that implementing classes must provide.' },
    { term: 'implements', ar: 'implements', def: 'Keyword used by a class to promise it provides the methods of one or more interfaces.' },
    { term: 'Comparable&lt;T&gt;', ar: 'الواجهة Comparable', def: 'Interface with compareTo(T) that defines the natural ordering of objects.' },
    { term: 'compareTo', ar: 'compareTo', def: 'Returns a negative number, zero, or a positive number when this object is before, equal to, or after the other.' },
    { term: 'Functional interface (SAM)', ar: 'واجهة وظيفية', def: 'An interface with exactly one abstract method; it can be implemented with a lambda.' },
    { term: 'Lambda expression', ar: 'تعبير لامدا', def: 'A short anonymous function such as x -&gt; x * 2 that implements a functional interface.' }
  ]
});
