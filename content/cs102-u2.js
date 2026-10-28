JP.unit({
  course: 'cs102',
  n: 2,
  title: 'Class Design',
  titleAr: 'تصميم الأصناف',
  intro: "In CS101 you wrote everything inside main. In CS102 you design your own types: classes that bundle data (fields) with behavior (methods). This unit shows how to define a class, build objects with constructors, protect data with encapsulation, override toString() and equals(), share data with static members, and sketch your design as a UML class diagram.",
  introAr: "في CS101 كتبت كل شيء داخل main. هنا ستصمم أنواعك الخاصة: أصناف تجمع البيانات (الحقول) مع السلوك (الدوال). ستتعلم تعريف الصنف، وإنشاء الكائنات بالمُنشئات، وحماية البيانات بالتغليف، وتجاوز toString و equals، والأعضاء الساكنة، ومخططات UML.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'Classes and objects',
      titleAr: 'الأصناف والكائنات',
      minutes: 45,
      body: [
        { type: 'p', en: "A <b>class</b> is a blueprint that describes a kind of thing: what data it holds and what it can do. An <b>object</b> is one concrete thing built from that blueprint. <code>Student</code> is a class; the student Sara with GPA 3.6 is an object (also called an <i>instance</i>) of that class.",
          ar: "الصنف مخطط عام، والكائن نسخة فعلية مبنية منه. Student صنف، والطالبة سارة كائن منه." },
        { type: 'list', items: [
          "<b>Fields</b> (instance variables) store the state of each object, e.g. <code>name</code>, <code>gpa</code>.",
          "<b>Methods</b> define behavior, e.g. <code>printInfo()</code>, <code>isHonor()</code>.",
          "Each object has its <b>own copy</b> of every instance field.",
          "Objects are created with <code>new</code>, which returns a <b>reference</b> (the object's address)."
        ], ar: "الحقول تحفظ حالة الكائن، والدوال تحدد سلوكه، ولكل كائن نسخته الخاصة من الحقول." },
        { type: 'h', en: 'Defining and using a class' },
        { type: 'p', en: "In one Java file, <code>public class Main</code> holds <code>main</code>, and helper classes such as <code>Student</code> go below it without the word <code>public</code>. Inside <code>main</code> we create objects and use the dot operator (<code>.</code>) to reach their fields and methods." },
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
              String name;   // field
              double gpa;    // field

              void printInfo() {           // method
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
        { type: 'p', en: "Notice that <code>printInfo()</code> uses <code>name</code> and <code>gpa</code> without any prefix. Inside an instance method these names mean <i>the fields of the object the method was called on</i>: <code>s1.printInfo()</code> prints Sara's data, <code>s2.printInfo()</code> prints Omar's." },
        { type: 'h', en: 'Default values and reference variables' },
        { type: 'p', en: "Fields get default values automatically: <code>0</code> for numbers, <code>0.0</code> for doubles, <code>false</code> for booleans, <code>'\\u0000'</code> for chars, and <code>null</code> for references such as <code>String</code>. Local variables inside a method get <b>no</b> default and must be assigned before use.",
          ar: "الحقول تأخذ قيمًا افتراضية (0 أو false أو null)، أما المتغيرات المحلية فلا." },
        { type: 'p', en: "A variable of a class type stores a <b>reference</b>, not the object itself. Assigning one reference variable to another copies the reference, so both names point to the <b>same</b> object." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  BankAccount a = new BankAccount();
                  System.out.println(a.owner);     // default value
                  System.out.println(a.balance);   // default value

                  a.owner = "Lina";
                  a.deposit(500);

                  BankAccount b = a;      // b refers to the SAME object
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
        `, out: J`
          null
          0.0
          Lina: 750.0
        ` },
        { type: 'note', kind: 'exam', en: "<code>b = a</code> does <b>not</b> copy an object. It makes <code>b</code> refer to the same object as <code>a</code>, so a change through <code>b</code> is visible through <code>a</code>. To get a real copy you need a copy constructor (next lesson).",
          ar: "الإسناد b = a لا ينسخ الكائن، بل يجعل المتغيرين يشيران إلى الكائن نفسه." },
        { type: 'table', head: ['Class', 'Object'], rows: [
          ['A type / blueprint written once in code', 'A value created at run time with <code>new</code>'],
          ['Declares fields and methods', 'Holds actual field values (its state)'],
          ['Example: <code>Student</code>', 'Example: the student whose name is Sara'],
          ['One class', 'Many objects of that class']
        ] },
        { type: 'note', kind: 'warn', en: "Calling a method on a reference that is <code>null</code> (for example <code>Student s = null; s.printInfo();</code>) compiles, but crashes at run time with a <code>NullPointerException</code>." }
      ],
      practice: [
        { t: 'mcq', q: "Which statement best describes the relationship between a class and an object?",
          qAr: "ما العلاقة بين الصنف والكائن؟",
          options: [
            "An object is a blueprint; a class is built from it.",
            "A class is a blueprint; an object is an instance created from it.",
            "A class and an object are two names for the same thing.",
            "A class can have only one object."
          ], answer: 1,
          explain: "The class describes fields and methods once; <code>new</code> creates as many objects (instances) as you need from it.",
          explainAr: "الصنف مخطط، ويمكن إنشاء عدد غير محدود من الكائنات منه." },
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
        `, answer: J`
          10 10
        `, explain: "After <code>b1 = b2</code> both variables refer to the second box. Setting <code>b1.width = 10</code> changes that one shared object, so both print 10. The first box is no longer referenced.",
          explainAr: "بعد b1 = b2 يشير المتغيران إلى الصندوق نفسه." },
        { t: 'fill', q: "Complete the <code>Rectangle</code> class and the statement that creates a rectangle.", code: J`
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
          explain: "<code>area()</code> returns a <code>double</code>, so its return type is <code>double</code> and it needs a <code>return</code> statement. Objects are created with <code>new</code>." },
        { t: 'mcq', q: "What does this code print?", code: J`
          class Sensor {
              String location;
              int reading;
              boolean active;
          }
          // in main:
          Sensor s = new Sensor();
          System.out.println(s.location + " " + s.reading + " " + s.active);
        `, options: [
            "<code>null 0 false</code>",
            "<code> 0 false</code> (empty location)",
            "Compile error: fields are not initialized",
            "<code>null null null</code>"
          ], answer: 0,
          explain: "Fields receive default values: <code>null</code> for a <code>String</code>, <code>0</code> for an <code>int</code>, <code>false</code> for a <code>boolean</code>. Only <i>local</i> variables must be initialized before use." },
        { t: 'order', q: "Arrange the lines to define a <code>Temperature</code> class with a method that converts its Celsius value to Fahrenheit.",
          lines: [
            "class Temperature {",
            "    double celsius;",
            "    double toFahrenheit() {",
            "        return celsius * 9 / 5 + 32;",
            "    }",
            "}"
          ],
          explain: "The class header opens the block, the field is declared, then the method with its return statement; each block is closed in reverse order." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Constructors and the keyword this',
      titleAr: 'المُنشئات والكلمة this',
      minutes: 50,
      body: [
        { type: 'p', en: "A <b>constructor</b> is a special method that runs when an object is created with <code>new</code>. Its job is to give the new object a valid starting state. A constructor has the <b>same name as the class</b> and <b>no return type</b> (not even <code>void</code>).",
          ar: "المُنشئ يُستدعى عند new، واسمه مثل اسم الصنف، وليس له نوع إرجاع." },
        { type: 'list', items: [
          "<b>Default constructor</b>: if you write <i>no</i> constructor at all, the compiler adds an invisible no-argument constructor that does nothing.",
          "<b>No-argument constructor</b>: one you write yourself with no parameters, usually to set sensible defaults.",
          "<b>Full-argument constructor</b>: takes a value for every field.",
          "<b>Copy constructor</b>: takes another object of the same class and copies its fields into the new object."
        ] },
        { type: 'h', en: 'Constructor overloading' },
        { type: 'p', en: "A class may have several constructors as long as their parameter lists differ (in number, types, or order). This is <b>constructor overloading</b>. Java picks the constructor whose parameters match the arguments you pass to <code>new</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Employee e1 = new Employee();
                  Employee e2 = new Employee("Huda", 9000);
                  Employee e3 = new Employee(e2);   // independent copy of e2
                  e3.salary = 9500;
                  e1.show();
                  e2.show();
                  e3.show();
              }
          }

          class Employee {
              String name;
              double salary;

              Employee() {                               // no-argument
                  name = "Unknown";
                  salary = 4000;
              }

              Employee(String name, double salary) {     // full-argument
                  this.name = name;
                  this.salary = salary;
              }

              Employee(Employee other) {                 // copy constructor
                  this.name = other.name;
                  this.salary = other.salary;
              }

              void show() {
                  System.out.println(name + " earns " + salary);
              }
          }
        `, out: J`
          Unknown earns 4000.0
          Huda earns 9000.0
          Huda earns 9500.0
        ` },
        { type: 'p', en: "Changing <code>e3.salary</code> did not change <code>e2</code>: the copy constructor built a separate object. Compare this with <code>e3 = e2</code>, which would only copy the reference." },
        { type: 'h', en: 'The keyword this' },
        { type: 'p', en: "<code>this</code> is a reference to the <b>current object</b>, the one whose method or constructor is running. Its most common use is to tell a field apart from a parameter with the same name: in <code>this.name = name;</code> the left side is the field and the right side is the parameter.",
          ar: "this تشير إلى الكائن الحالي، وتُستخدم للتمييز بين الحقل والمعامل إذا تشابه الاسمان." },
        { type: 'note', kind: 'exam', en: "If you forget <code>this</code> and write <code>name = name;</code>, the parameter is assigned to itself and the field keeps its default value (<code>null</code> or <code>0</code>). The code compiles, so the bug is easy to miss.",
          ar: "كتابة name = name بدون this لا تغيّر الحقل إطلاقًا." },
        { type: 'h', en: 'Constructor chaining with this(...)' },
        { type: 'p', en: "Inside a constructor, <code>this(...)</code> calls <b>another constructor of the same class</b>. This avoids repeating the same assignments. The call <code>this(...)</code> must be the <b>first statement</b> in the constructor." },
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
                  this(1.0);                       // calls Circle(double)
                  System.out.println("no-arg constructor");
              }

              Circle(double radius) {
                  this(radius, "red");             // calls Circle(double, String)
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
        { type: 'p', en: "Trace <code>new Circle()</code>: it immediately jumps to <code>Circle(1.0)</code>, which jumps to <code>Circle(1.0, \"red\")</code>. The full constructor finishes first, then control returns and the remaining print statements run in reverse order of the calls." },
        { type: 'note', kind: 'warn', en: "Once you write <b>any</b> constructor, the compiler no longer supplies the default one. If <code>Product</code> only has <code>Product(String name)</code>, then <code>new Product()</code> is a compile error unless you also write a no-argument constructor.",
          ar: "إذا كتبت أي مُنشئ، يختفي المُنشئ الافتراضي." },
        { type: 'code', code: J`
          class Product {
              String name;
              Product(String name) { this.name = name; }
          }
          // Product p = new Product();      // ERROR: no constructor Product()
          Product p = new Product("Pen");     // OK
        ` }
      ],
      practice: [
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
        `, answer: J`
          null 300
        `, explain: "<code>title = title;</code> assigns the parameter to itself. The field <code>title</code> keeps its default <code>null</code>, and string concatenation prints it as <code>null</code>. <code>this.pages</code> is set correctly.",
          explainAr: "بدون this بقي الحقل title بقيمته الافتراضية null." },
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
        `, explain: "<code>new Vehicle(\"Camry\")</code> calls the one-argument constructor, which first chains to the two-argument constructor (prints C), then prints B. The no-argument constructor is never called, so A is not printed." },
        { t: 'mcq', q: "Class <code>Course</code> declares only the constructor <code>Course(String code)</code>. Which statement is true?",
          options: [
            "<code>new Course()</code> compiles because Java always adds a default constructor.",
            "<code>new Course()</code> is a compile error; the default constructor is added only when a class has no constructors.",
            "<code>new Course()</code> compiles and sets <code>code</code> to an empty string.",
            "A class cannot have a constructor with a parameter."
          ], answer: 1,
          explain: "The compiler supplies a default constructor only when the class declares none. As soon as you write one, you must write the no-argument version yourself if you need it." },
        { t: 'fill', q: "Complete the <code>Point</code> class: a full-argument constructor and a copy constructor that reuses it.", code: J`
          class Point {
              int x, y;

              Point(int x, int y) {
                  ___.x = x;
                  this.y = y;
              }

              Point(___ p) {          // copy constructor
                  ___(p.x, p.y);
              }
          }
        `, answers: ['this', 'Point', 'this'],
          explain: "<code>this.x</code> names the field. A copy constructor takes a parameter of the same class, and <code>this(p.x, p.y)</code> chains to the full-argument constructor." },
        { t: 'mcq', q: "Which rule about <code>this(...)</code> inside a constructor is correct?",
          options: [
            "It can appear anywhere in the constructor.",
            "It must be the first statement of the constructor.",
            "It can be used inside any method, not only constructors.",
            "It creates a second object."
          ], answer: 1,
          explain: "A call to another constructor with <code>this(...)</code> must be the very first statement, and it only works inside a constructor. It does not create a new object; it initializes the same one." },
        { t: 'code', q: "Write a class <code>Product</code> with fields <code>name</code> (String), <code>price</code> (double) and <code>quantity</code> (int), a full-argument constructor using <code>this</code>, and a method <code>total()</code> that returns <code>price * quantity</code>. In <code>main</code>, read a one-word name, a price and a quantity (no prompts), create the product and print <code>NAME xQUANTITY = TOTAL</code>.",
          qAr: "اكتب الصنف Product مع مُنشئ كامل ودالة total، ثم اطبع الإجمالي. لا تطبع رسائل إدخال.",
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    // read name, price, quantity
                    // create a Product and print the result
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

                Product(String name, double price, int quantity) {
                    this.name = name;
                    this.price = price;
                    this.quantity = quantity;
                }

                double total() {
                    return price * quantity;
                }
            }
          `,
          hint: "Inside the constructor write <code>this.price = price;</code> for each field.",
          explain: "The constructor copies each parameter into the matching field with <code>this</code>. <code>total()</code> multiplies a double by an int, giving a double such as <code>10.0</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Encapsulation, getters/setters, toString and equals',
      titleAr: 'التغليف ودوال الوصول و toString و equals',
      minutes: 55,
      body: [
        { type: 'p', en: "<b>Encapsulation</b> means keeping an object's data and the code that works on it together, and <b>hiding</b> the data from the outside. Fields are made <code>private</code>, and other classes use <code>public</code> methods to read or change them. This lets the class protect its own rules, for example that a balance never becomes negative.",
          ar: "التغليف: اجعل الحقول private ووفّر دوال public للوصول إليها، حتى يحمي الصنف قواعده." },
        { type: 'h', en: 'Access modifiers' },
        { type: 'table', head: ['Modifier', 'Same class', 'Same package', 'Subclass (other package)', 'Everywhere'], rows: [
          ['<code>public</code>', 'yes', 'yes', 'yes', 'yes'],
          ['<code>protected</code>', 'yes', 'yes', 'yes', 'no'],
          ['(default, no keyword)', 'yes', 'yes', 'no', 'no'],
          ['<code>private</code>', 'yes', 'no', 'no', 'no']
        ] },
        { type: 'p', en: "<code>protected</code> matters once we use inheritance (Unit 3). For now remember the usual design rule: <b>fields private, methods public</b> (helper methods used only inside the class can also be private)." },
        { type: 'h', en: 'Getters and setters' },
        { type: 'p', en: "A <b>getter</b> (accessor) returns a field's value: <code>getBalance()</code>, or <code>isActive()</code> for a boolean. A <b>setter</b> (mutator) changes it: <code>setOwner(String owner)</code>. A setter is the right place to <b>validate</b> new values. Leaving out a setter makes a field read-only from outside." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  BankAccount acc = new BankAccount("Nora", 1000);
                  acc.deposit(250);
                  acc.withdraw(2000);
                  acc.withdraw(300);
                  acc.setOwner("");
                  // acc.balance = -50;   // compile error: balance is private
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

              public void setOwner(String owner) {
                  if (owner != null && !owner.isEmpty()) {
                      this.owner = owner;
                  } else {
                      System.out.println("Invalid name ignored");
                  }
              }

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
          Invalid name ignored
          Nora 950.0
        ` },
        { type: 'note', kind: 'tip', en: "There is deliberately no <code>setBalance</code>. The balance can change only through <code>deposit</code> and <code>withdraw</code>, which enforce the rules. Encapsulation is about controlling <i>how</i> data changes, not just adding a getter and setter for every field.",
          ar: "لا نضع setBalance عمدًا؛ يتغير الرصيد فقط عبر الإيداع والسحب." },
        { type: 'h', en: 'Overriding toString()' },
        { type: 'p', en: "Every class inherits a <code>toString()</code> method from <code>Object</code>. The inherited version returns something like <code>Student@1b6d3586</code>, which is not useful and changes from run to run. When you print an object, or join it to a String with <code>+</code>, Java calls <code>toString()</code> automatically, so you should write your own." },
        { type: 'h', en: 'Overriding equals()' },
        { type: 'p', en: "<code>==</code> on two references asks: <i>are these the same object?</i> To ask <i>do these objects hold equal data?</i>, override <code>equals(Object obj)</code>. The inherited <code>equals</code> from <code>Object</code> simply uses <code>==</code>.",
          ar: "== تقارن المراجع (هل هما الكائن نفسه؟)، أما equals فتقارن المحتوى إذا تجاوزناها." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Student a = new Student(202301, "Reem", 3.8);
                  Student b = new Student(202301, "Reem", 3.8);
                  Student c = a;
                  System.out.println(a);                 // calls a.toString()
                  System.out.println("Student: " + b);   // calls b.toString()
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
                  if (this == obj) return true;
                  if (obj == null || getClass() != obj.getClass()) return false;
                  Student other = (Student) obj;
                  return id == other.id;      // same student ID = same student
              }
          }
        `, out: J`
          Reem (202301), GPA 3.8
          Student: Reem (202301), GPA 3.8
          false
          true
          true
        ` },
        { type: 'p', en: "<code>@Override</code> asks the compiler to check that the method really overrides an inherited one (you will see it in detail in Unit 3). The parameter of <code>equals</code> must be <code>Object</code>; inside, we check for <code>null</code> and for the same class, then cast and compare the fields that define equality." },
        { type: 'note', kind: 'exam', en: "Writing <code>public boolean equals(Student other)</code> does <b>not</b> override <code>equals</code>; it <i>overloads</i> it, because the parameter type differs from <code>Object</code>. Code that calls <code>equals(Object)</code>, such as <code>ArrayList.contains</code>, will still use the old reference comparison. With <code>@Override</code> the compiler reports this mistake.",
          ar: "يجب أن يكون معامل equals من النوع Object وإلا فهو تحميل زائد وليس تجاوزًا." },
        { type: 'note', kind: 'tip', en: "Classes that override <code>equals</code> should also override <code>hashCode()</code> so they work correctly in hash-based collections such as <code>HashMap</code>. You will meet this in later courses." }
      ],
      practice: [
        { t: 'mcq', q: "Which access modifier makes a field visible <b>only</b> inside its own class?",
          options: ['<code>public</code>', '<code>protected</code>', 'no modifier (default)', '<code>private</code>'], answer: 3,
          explain: "<code>private</code> members are visible only inside the class that declares them. Default access also allows the same package, and <code>protected</code> also allows subclasses." },
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
        `, explain: "The setter rejects 35 and 5 and prints a message for each. Only 22 is accepted, so the getter returns 22.",
          explainAr: "الدالة set ترفض القيم خارج المدى، فتبقى القيمة 22." },
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
        `, explain: "Without an override, <code>equals</code> is inherited from <code>Object</code> and compares references, just like <code>==</code>. The two coins are different objects. Comparing the <code>int</code> fields directly gives <code>true</code>." },
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
          explain: "The field is hidden with <code>private</code>. The getter returns the value, and a setter normally returns nothing (<code>void</code>)." },
        { t: 'mcq', q: "<code>Car</code> overrides <code>toString()</code> to return the plate number. What does <code>System.out.println(\"Car: \" + myCar);</code> do?",
          options: [
            "Compile error: you cannot add an object to a String",
            "Prints <code>Car: </code> followed by the result of <code>myCar.toString()</code>",
            "Prints <code>Car: </code> followed by the memory address, ignoring the override",
            "Prints only <code>Car: </code>"
          ], answer: 1,
          explain: "String concatenation with an object calls its <code>toString()</code> automatically, and the overridden version is used." },
        { t: 'order', q: "Arrange the lines of an <code>equals</code> override for a <code>Book</code> class whose identity is its <code>isbn</code> String.",
          lines: [
            "@Override",
            "public boolean equals(Object obj) {",
            "    if (obj == null || getClass() != obj.getClass()) return false;",
            "    Book other = (Book) obj;",
            "    return isbn.equals(other.isbn);",
            "}"
          ],
          explain: "First reject <code>null</code> and objects of another class, then it is safe to cast to <code>Book</code>, then compare the identifying field with <code>String.equals</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'Static members, abstract classes and UML',
      titleAr: 'الأعضاء الساكنة والأصناف المجردة و UML',
      minutes: 50,
      body: [
        { type: 'p', en: "An <b>instance</b> field belongs to each object: every <code>Car</code> has its own <code>model</code>. A <b>static</b> (class) field belongs to the class itself: there is <b>one copy shared</b> by all objects. Static fields are perfect for counters and constants.",
          ar: "الحقل العادي لكل كائن نسخته، أما الحقل الساكن static فنسخة واحدة مشتركة بين جميع الكائنات." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println("Cars so far: " + Car.getCount());
                  Car a = new Car("Sonata");
                  Car b = new Car("Accent");
                  Car c = new Car("Elantra");
                  System.out.println(a.getId() + " " + b.getId() + " " + c.getId());
                  System.out.println("Cars so far: " + Car.getCount());
                  System.out.println(Car.WHEELS);
              }
          }

          class Car {
              public static final int WHEELS = 4;   // constant shared by all cars
              private static int count = 0;         // one counter for the class
              private int id;                       // each car has its own id
              private String model;

              public Car(String model) {
                  this.model = model;
                  count++;
                  id = count;
              }

              public int getId() { return id; }

              public static int getCount() { return count; }
          }
        `, out: J`
          Cars so far: 0
          1 2 3
          Cars so far: 3
          4
        ` },
        { type: 'list', items: [
          "Use static members through the class name: <code>Car.getCount()</code>, <code>Math.sqrt(2)</code>, <code>Integer.MAX_VALUE</code>.",
          "A <b>static method</b> has no current object, so it cannot use <code>this</code> or access instance fields/methods directly.",
          "An instance method can use both instance and static members.",
          "<code>static final</code> fields are constants; by convention their names are UPPER_CASE."
        ], ar: "الدالة الساكنة لا تملك this ولا تستطيع الوصول مباشرة إلى الحقول العادية." },
        { type: 'code', code: J`
          class Converter {
              private double rate = 3.75;

              public static double toFahrenheit(double c) {   // OK: uses only its parameter
                  return c * 9 / 5 + 32;
              }

              public static double toRiyal(double dollars) {
                  return dollars * rate;    // ERROR: non-static field rate
              }                             // cannot be referenced from a static context
          }
        ` },
        { type: 'note', kind: 'exam', en: "The error message <i>non-static variable cannot be referenced from a static context</i> appears when <code>main</code> (which is static) or another static method uses an instance field or method without an object. Fix it by creating an object, or by making the member static if it truly belongs to the class.",
          ar: "خطأ شائع: استخدام حقل غير ساكن داخل main أو دالة ساكنة بدون كائن." },
        { type: 'h', en: 'Abstract classes (first look)' },
        { type: 'p', en: "Sometimes a class is too general to have objects of its own. A generic <code>Shape</code> has a color, but what is its area? Declaring the class <code>abstract</code> means: <i>you cannot write <code>new Shape(...)</code>; create a specific kind of shape instead.</i> An <b>abstract method</b> has no body; each concrete subclass must supply one. The <code>extends</code> and <code>super</code> keywords below are covered fully in Unit 3.",
          ar: "الصنف المجرد abstract لا يمكن إنشاء كائن منه مباشرة، والدالة المجردة بلا جسم ويجب أن تكتبها الأصناف الفرعية." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Rectangle r = new Rectangle("blue", 3, 4);
                  r.describe();
                  // Shape s = new Shape("red");   // compile error: Shape is abstract
              }
          }

          abstract class Shape {
              private String color;

              public Shape(String color) { this.color = color; }

              public String getColor() { return color; }

              public abstract double area();          // no body

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
        `, out: J`
          blue shape with area 12.0
        ` },
        { type: 'h', en: 'UML class diagrams' },
        { type: 'p', en: "A <b>UML class diagram</b> draws a class as a box with three parts: the class name, the fields (attributes), and the methods (operations). Types are written after a colon, and a symbol in front shows visibility." },
        { type: 'code', code: J`
          +-----------------------------------------------+
          |                  BankAccount                  |
          +-----------------------------------------------+
          | - owner: String                               |
          | - balance: double                             |
          | - count: int            {static, underlined}  |
          +-----------------------------------------------+
          | + BankAccount(owner: String, balance: double) |
          | + getBalance(): double                        |
          | + deposit(amount: double): void               |
          | + withdraw(amount: double): boolean           |
          | + getCount(): int       {static, underlined}  |
          +-----------------------------------------------+
        ` },
        { type: 'table', head: ['UML notation', 'Meaning in Java'], rows: [
          ['<code>+</code>', '<code>public</code>'],
          ['<code>-</code>', '<code>private</code>'],
          ['<code>#</code>', '<code>protected</code>'],
          ['<code>~</code>', 'default (package) access'],
          ['<u>underlined</u> member', '<code>static</code> member'],
          ['<i>italic</i> class or method name', '<code>abstract</code>'],
          ['<code>name: Type</code>', 'field <code>Type name;</code>'],
          ['<code>method(p: Type): Ret</code>', '<code>Ret method(Type p)</code>']
        ] },
        { type: 'note', kind: 'tip', en: "Constructors in UML have no return type, exactly like in Java. When you translate a diagram to code, go box by box: name, then fields with their visibility, then constructors and methods.",
          ar: "عند تحويل مخطط UML إلى كود: الاسم، ثم الحقول، ثم المُنشئات والدوال." }
      ],
      practice: [
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
        `, explain: "<code>total</code> is shared, so three constructions make it 3. Each object has its own <code>visits</code>, which starts at 1; only <code>v2</code> was increased by 5.",
          explainAr: "total مشترك فيصبح 3، أما visits فلكل كائن قيمته." },
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
        `, options: ['Line A', 'Line B', 'Line C', 'Line D'], answer: 1,
          explain: "<code>reset()</code> is static, so it has no current object and cannot touch the instance field <code>value</code>. Instance methods (lines C and D) may use both kinds of fields." },
        { t: 'mcq', q: "In a UML class diagram, what does <code>- balance: double</code> mean?",
          options: [
            "A public method named balance returning double",
            "A private field named balance of type double",
            "A static field named balance",
            "A protected field that subtracts a double"
          ], answer: 1,
          explain: "<code>-</code> means private, and <code>name: Type</code> describes a field (attribute). A method would have parentheses." },
        { t: 'mcq', q: "<code>Shape</code> is declared <code>abstract class Shape</code>. Which statement is true?",
          options: [
            "<code>new Shape()</code> creates a shape with area 0.",
            "<code>Shape</code> cannot have fields or constructors.",
            "You cannot create objects with <code>new Shape(...)</code>, but you can create objects of concrete subclasses.",
            "Every method in <code>Shape</code> must be abstract."
          ], answer: 2,
          explain: "An abstract class cannot be instantiated directly. It may still have fields, constructors (used by subclasses) and normal methods alongside its abstract ones." },
        { t: 'fill', q: "Each ticket gets the next number from a counter shared by the whole class. Fill in the blanks.", code: J`
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
          explain: "The counter must be shared, so it is <code>static</code>. The getter should also be <code>static</code> so it can be called as <code>Ticket.getNextNumber()</code> without an object." },
        { t: 'code', q: "Read an integer <code>n</code>, then <code>n</code> lines each with a one-word name and an integer score. Store them as <code>Student</code> objects in an array. <code>Student</code> must have private fields, a constructor, getters, a <code>toString()</code> returning <code>NAME: SCORE</code>, and a static counter of created students. Print every student, then <code>Top: NAME</code> (the first student with the highest score), then <code>Students created: COUNT</code> using the static counter. No prompts.",
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
          explain: "The static <code>count</code> is increased in the constructor, so it equals the number of objects created. <code>println(s)</code> calls the overridden <code>toString()</code>." }
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
              if (!(o instanceof Room)) return false;
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
