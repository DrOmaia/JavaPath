JP.unit({
  course: 'cs102',
  n: 4,
  title: 'Polymorphism and Interfaces',
  titleAr: 'تعدد الأشكال والواجهات',
  intro: "Polymorphism means one piece of code working with many types of objects. A Shape variable can hold a Circle or a Rectangle, and calling area() runs the right version automatically. Step by step you will learn dynamic binding, upcasting and downcasting, abstract classes, interfaces, the Comparable interface for sorting, and a first taste of lambda expressions.",
  introAr: "تعدد الأشكال يعني أن كودًا واحدًا يعمل مع أنواع كثيرة من الكائنات. سنتعلم خطوة بخطوة: الربط الديناميكي، والتحويل بين الأنواع، والأصناف المجردة، والواجهات، والترتيب، وتعبيرات لامدا.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'One reference, many forms',
      titleAr: 'مرجع واحد وأشكال كثيرة',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why do we need polymorphism?' },
        { type: 'p', en: "Imagine a zoo program. It has dogs, cats and birds, and every animal makes a sound. Without polymorphism you would write a separate piece of code for each kind of animal. With polymorphism you write the code <b>once</b> and it works for every animal, even animals you add next year. The word <b>polymorphism</b> means \"many forms\".",
          ar: "تعدد الأشكال يعني أن نكتب الكود مرة واحدة ويعمل مع أنواع كثيرة من الكائنات." },
        { type: 'analogy', title: 'The barista', en: "You say \"one coffee, please\" to a barista. You do not explain how to make it. A latte barista and an espresso barista both understand the same request, but each one does it in their own way. The request is the same. The result depends on who receives it.",
          ar: "الطلب واحد، لكن كل شخص ينفذه بطريقته." },
        { type: 'h', en: 'A superclass variable can hold a subclass object' },
        { type: 'p', en: "Remember from the inheritance unit: a <code>Dog</code> <i>is an</i> <code>Animal</code>. So Java lets you store a Dog object in an <code>Animal</code> variable. Let us see it in a tiny program." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal a = new Dog();
                  System.out.println(a.sound());
              }
          }

          class Animal {
              public String sound() { return "..."; }
          }

          class Dog extends Animal {
              @Override
              public String sound() { return "Woof"; }
          }
        `, out: J`
          Woof
        ` },
        { type: 'lines', title: 'Read it like a programmer', rows: [
          ['Animal a = new Dog();', 'The variable type is <code>Animal</code>, but the object created is a <code>Dog</code>. This is allowed because a Dog is an Animal.'],
          ['a.sound()', 'We call <code>sound()</code> through the Animal variable.'],
          ['public String sound() { return "Woof"; }', 'The Dog class <b>overrides</b> (replaces) the Animal version.'],
          ['Woof', 'Java runs the <b>Dog</b> version, because the real object is a Dog.']
        ], ar: 'المتغير من نوع Animal لكن الكائن الحقيقي Dog، لذلك تعمل نسخة Dog.' },
        { type: 'check', q: 'In <code>Animal a = new Dog();</code> what is the real object?', options: ['An Animal', 'A Dog', 'Both at the same time', 'Nothing yet'], answer: 1, explain: "The word after <code>new</code> tells you the real object. The type on the left is only the variable's type." },
        { type: 'h', en: 'The same call, different results' },
        { type: 'p', en: "Now the power appears. We put different animals in one array and use one loop. The loop does not know which animal is which." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal[] zoo = { new Dog(), new Cat(), new Animal() };
                  for (Animal a : zoo) {
                      System.out.println(a.sound());
                  }
              }
          }

          class Animal {
              public String sound() { return "..."; }
          }

          class Dog extends Animal {
              @Override
              public String sound() { return "Woof"; }
          }

          class Cat extends Animal {
              @Override
              public String sound() { return "Meow"; }
          }
        `, out: J`
          Woof
          Meow
          ...
        ` },
        { type: 'lines', rows: [
          ['Animal[] zoo = { new Dog(), new Cat(), new Animal() };', 'One array of type Animal holds three different kinds of objects.'],
          ['for (Animal a : zoo)', 'Visit each animal one by one. <code>a</code> is the current animal.'],
          ['a.sound()', 'Same line every time, but the output changes with the real object.']
        ], ar: 'السطر نفسه في كل دورة، لكن النتيجة تتغير حسب الكائن الحقيقي.' },
        { type: 'check', q: 'What happens if you add <code>new Cat()</code> to the array twice?', options: ['A compile error', 'Meow is printed twice', 'Only one Meow is printed', 'Woof is printed'], answer: 1, explain: "Each element is its own Cat object, so each one prints Meow." },
        { type: 'h', en: 'Dynamic binding: who decides?' },
        { type: 'p', en: "When your program runs, Java looks at the <b>real object</b> (not the variable type) and uses that object's version of the method. This choice at run time is called <b>dynamic binding</b>. \"Binding\" means connecting a method call to the code that runs.",
          ar: "الربط الديناميكي: يختار Java النسخة حسب الكائن الحقيقي وقت التشغيل." },
        { type: 'analogy', title: 'A phone number', en: "A contact called \"Taxi\" in your phone is only a name. When you press call, the phone dials whatever number is saved <i>right now</i>. The variable is the name. The object is the number that decides who answers." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Employee e = new Manager();
                  e.report();
              }
          }

          class Employee {
              public void report() {
                  System.out.println("Role: " + role());
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
        { type: 'lines', rows: [
          ['e.report();', 'The Manager class has no <code>report()</code>, so the one inherited from Employee runs.'],
          ['"Role: " + role()', 'Inside <code>report()</code> the call <code>role()</code> means <code>this.role()</code>.'],
          ['this is a Manager object', 'So dynamic binding picks <code>Manager.role()</code>. Output: <code>Role: Manager</code>.']
        ], ar: 'حتى داخل دالة الأب، الاستدعاء يذهب إلى نسخة الابن لأن الكائن الحقيقي Manager.' },
        { type: 'note', kind: 'exam', en: "Only overridden <b>instance methods</b> are chosen at run time. <b>Fields</b> and <b>static methods</b> are chosen by the variable's declared type. If both classes declare a field <code>tag</code>, then <code>Animal a = new Dog(); a.tag</code> reads Animal's field.",
          ar: "الحقول والدوال الساكنة يحددها نوع المتغير وليس الكائن." },
        { type: 'steps', title: 'Worked example: coffee shop prices', problem: 'A coffee shop sells a normal Drink and a Latte. A Latte costs 3 riyals more. Print the price of every item in an order, using one loop.',
          steps: [
            { en: 'Write the superclass <code>Drink</code> with a <code>price()</code> method.', code: J`
              class Drink {
                  public int price() { return 10; }
              }
            ` },
            { en: 'Write the subclass <code>Latte</code>. It overrides <code>price()</code>.', code: J`
              class Latte extends Drink {
                  @Override
                  public int price() { return 13; }
              }
            ` },
            { en: 'In <code>main</code>, make an array of <code>Drink</code> that mixes both.', code: J`
              Drink[] order = { new Drink(), new Latte(), new Latte() };
            ` },
            { en: 'Loop through the order, add the prices to a total, and print it.', code: J`
              int total = 0;
              for (Drink d : order) {
                  total += d.price();
              }
              System.out.println("Total: " + total + " SAR");
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Drink[] order = { new Drink(), new Latte(), new Latte() };
                    int total = 0;
                    for (Drink d : order) {
                        total += d.price();
                    }
                    System.out.println("Total: " + total + " SAR");
                }
            }

            class Drink {
                public int price() { return 10; }
            }

            class Latte extends Drink {
                @Override
                public int price() { return 13; }
            }
          `, out: J`
            Total: 36 SAR
          `, ar: 'نفس الحلقة تحسب سعر المشروب العادي واللاتيه: 10 + 13 + 13 = 36.' }
      ],
      mistakes: [
        { title: 'Misspelling the method name', en: "If the name differs, it is a new method, not an override. The parent version runs. Always write <code>@Override</code>: the compiler then reports the mistake.", code: J`
          class Dog extends Animal {
              @Override
              public String sond() { return "Woof"; }   // compile error: no sond() in Animal
          }
        `, ar: 'اكتب @Override ليكتشف المترجم أخطاء الاسم.' },
        { title: 'Calling a subclass-only method through the superclass variable', en: "The compiler only allows methods that the <b>variable type</b> has.", code: J`
          Animal a = new Dog();
          a.fetch();    // compile error if only Dog has fetch()
        ` },
        { title: 'Expecting fields to be polymorphic', en: "<code>a.tag</code> uses the variable type. Only methods are dynamically bound." },
        { title: 'Forgetting extends', en: "Without <code>extends Animal</code>, a Dog is not an Animal, and <code>Animal a = new Dog();</code> does not compile." }
      ],
      remember: [
        "A superclass variable can refer to a subclass object (<code>Animal a = new Dog();</code>).",
        "The <b>variable type</b> decides which methods you may call.",
        "The <b>real object</b> decides which overridden version runs (dynamic binding).",
        "Fields and static methods are not dynamically bound.",
        "Always use <code>@Override</code> when you override."
      ],
      rememberAr: 'متغير الأب يشير إلى كائن الابن. نوع المتغير يحدد ما يمكن استدعاؤه، والكائن الحقيقي يحدد النسخة التي تعمل.',
      practice: [
        { t: 'mcq', q: "What does <b>polymorphism</b> mean?", options: ['Many forms', 'Many files', 'Many variables', 'Many errors'], answer: 0, explain: "Poly = many, morph = form. One call can behave in many ways.", qAr: 'ماذا يعني تعدد الأشكال؟' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal a = new Cat();
                  System.out.println(a.sound());
              }
          }

          class Animal {
              public String sound() { return "..."; }
          }

          class Cat extends Animal {
              @Override
              public String sound() { return "Meow"; }
          }
        `, answer: 'Meow', explain: "The real object is a Cat, so the Cat version of <code>sound()</code> runs." },
        { t: 'mcq', q: "<code>Animal a = new Dog();</code> Which <code>sound()</code> runs when we call <code>a.sound()</code>?", options: ["Animal's version", "Dog's version (if Dog overrides it)", 'Both', 'Neither'], answer: 1, explain: "Dynamic binding uses the real object, a Dog." },
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
        `, explain: "<code>x.tag</code> uses the declared type <code>A</code>. <code>x.getTag()</code> is overridden, so B's version runs and returns B's field.", explainAr: "الحقل يُختار حسب نوع المتغير، والدالة حسب نوع الكائن." },
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
        `, answer: 'This is a Savings!', explain: "<code>Savings.describe()</code> calls <code>super.describe()</code>. Inside it, <code>type()</code> is still bound to the real object (a Savings), so it returns <code>Savings</code>." },
        { t: 'fill', q: "Fill the blanks so that Cat overrides the method.", code: J`
          class Cat ___ Animal {
              ___
              public String sound() { return "Meow"; }
          }
        `, answers: ['extends', '@Override'], explain: "<code>extends</code> makes Cat a subclass. <code>@Override</code> asks the compiler to check the override." },
        { t: 'order', q: "Put the lines in the correct order to make a valid subclass.", lines: [
          'class Cat extends Animal {',
          '    @Override',
          '    public String sound() {',
          '        return "Meow";',
          '    }',
          '}'
        ], explain: "Class header first, then the annotation, then the method header, its body, and the closing braces." },
        { t: 'code', q: "Read a word: <code>dog</code> or <code>cat</code>. Create the matching animal in an <code>Animal</code> variable and print its sound (Woof or Meow). No prompts.", qAr: 'اقرأ كلمة dog أو cat وأنشئ الحيوان المناسب واطبع صوته.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String kind = sc.next();
                    Animal a;
                    // create a Dog or a Cat, then print a.sound()
                }
            }

            class Animal {
                public String sound() { return "..."; }
            }

            class Dog extends Animal {
                @Override
                public String sound() { return "Woof"; }
            }

            class Cat extends Animal {
                @Override
                public String sound() { return "Meow"; }
            }
          `,
          tests: [{ stdin: 'dog', expected: 'Woof' }, { stdin: 'cat', expected: 'Meow' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String kind = sc.next();
                    Animal a;
                    if (kind.equals("dog")) {
                        a = new Dog();
                    } else {
                        a = new Cat();
                    }
                    System.out.println(a.sound());
                }
            }

            class Animal {
                public String sound() { return "..."; }
            }

            class Dog extends Animal {
                @Override
                public String sound() { return "Woof"; }
            }

            class Cat extends Animal {
                @Override
                public String sound() { return "Meow"; }
            }
          `,
          hint: "Use <code>if (kind.equals(\"dog\"))</code> to choose which object to create.",
          explain: "The variable has type Animal in both cases. The object created decides the sound." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Upcasting, downcasting and instanceof',
      titleAr: 'التحويل بين الأنواع و instanceof',
      minutes: 30,
      body: [
        { type: 'h', en: 'What can a variable see?' },
        { type: 'p', en: "A variable's type decides which methods you may call through it. If you keep a <code>Circle</code> in a <code>Shape</code> variable, you can only use what <code>Shape</code> offers. This keeps the program safe: the compiler must be sure the method exists.",
          ar: 'نوع المتغير يحدد الدوال التي يمكنك استدعاؤها.' },
        { type: 'analogy', title: 'A library card', en: "A student card lets you borrow books. The same person may also be a gym member, but when you show the <i>student card</i>, the library only sees the \"student\" side. The object has more abilities. The variable shows only some of them." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape s = new Circle(2);      // upcasting
                  System.out.println(s.name());
                  // s.getRadius();             // compile error: Shape has no getRadius()
                  Circle c = (Circle) s;        // downcasting
                  System.out.println(c.getRadius());
              }
          }

          class Shape {
              public String name() { return "shape"; }
          }

          class Circle extends Shape {
              private double radius;
              public Circle(double radius) { this.radius = radius; }
              public double getRadius() { return radius; }
              @Override
              public String name() { return "circle"; }
          }
        `, out: J`
          circle
          2.0
        ` },
        { type: 'lines', rows: [
          ['Shape s = new Circle(2);', '<b>Upcasting</b>: subclass object into a superclass variable. It is always safe, so no cast is written.'],
          ['s.name()', 'Allowed: Shape has <code>name()</code>. Circle\'s version runs.'],
          ['// s.getRadius();', 'Not allowed: the variable type Shape has no such method.'],
          ['Circle c = (Circle) s;', '<b>Downcasting</b>: we tell Java "trust me, this is really a Circle". We write the type in brackets.']
        ], ar: 'التحويل للأعلى تلقائي وآمن. التحويل للأسفل نكتب فيه النوع بين قوسين.' },
        { type: 'check', q: 'Which direction needs the brackets <code>(Circle)</code>?', options: ['Upcasting', 'Downcasting', 'Both', 'Neither'], answer: 1, explain: "Going down the family tree might be wrong, so Java asks you to write the cast yourself." },
        { type: 'h', en: 'When a downcast goes wrong' },
        { type: 'p', en: "If you promise Java that a Shape is a Circle but it is really a Rectangle, the program stops with <code>ClassCastException</code>. The compiler cannot see this mistake, because it only checks types of variables. The error happens at run time.",
          ar: 'إذا كان الكائن الحقيقي ليس من النوع المطلوب يحدث ClassCastException وقت التشغيل.' },
        { type: 'analogy', title: 'Opening the wrong box', en: "A box is labelled \"Gift\". You say \"I am sure it contains a watch\" and open it. If it holds a book instead, your promise was wrong." },
        { type: 'h', en: 'Ask first with instanceof' },
        { type: 'p', en: "<code>x instanceof Circle</code> is a question: \"Is x really a Circle?\" It gives <code>true</code> or <code>false</code>. Ask first, then cast. This is the safe way." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape r = new Rectangle();
                  if (r instanceof Circle) {
                      Circle c = (Circle) r;
                      System.out.println("It is a circle");
                  } else {
                      System.out.println("Not a circle, cast skipped");
                  }
                  try {
                      Circle bad = (Circle) r;
                      System.out.println("not reached");
                  } catch (ClassCastException ex) {
                      System.out.println("ClassCastException caught");
                  }
              }
          }

          class Shape { }
          class Circle extends Shape { }
          class Rectangle extends Shape { }
        `, out: J`
          Not a circle, cast skipped
          ClassCastException caught
        ` },
        { type: 'lines', rows: [
          ['r instanceof Circle', 'False, because r holds a Rectangle.'],
          ['else { ... }', 'So we skip the cast and print a message instead.'],
          ['try { Circle bad = (Circle) r; ... }', 'We deliberately cast without asking. It fails.'],
          ['catch (ClassCastException ex)', 'The error is caught and we print a message. Without the try/catch, the program would crash.']
        ], ar: 'نسأل بـ instanceof قبل التحويل لنتجنب الخطأ.' },
        { type: 'check', q: '<code>Animal a = new Animal();</code> What is <code>a instanceof Dog</code>?', options: ['true', 'false', 'a compile error', 'an exception'], answer: 1, explain: "The object is a plain Animal. It is not a Dog." },
        { type: 'h', en: 'instanceof or getClass()?' },
        { type: 'table', head: ['Check', 'True when', 'Use'], rows: [
          ['<code>x instanceof Rectangle</code>', 'x is a Rectangle <b>or a subclass</b> (like Square)', 'before a downcast'],
          ['<code>x.getClass() == Rectangle.class</code>', 'x is <b>exactly</b> a Rectangle', 'strict match'],
          ['<code>x.getClass() == y.getClass()</code>', 'x and y have the same exact class', 'comparing two objects']
        ] },
        { type: 'note', kind: 'exam', en: "Newer Java (16+) allows <code>if (s instanceof Circle c)</code>. In this course use the classic form: ask with <code>instanceof</code>, then cast." },
        { type: 'steps', title: 'Worked example: total load of trucks', problem: 'A fleet has cars and trucks. Only trucks have a load. Add up the loads of all trucks safely.',
          steps: [
            { en: 'Start with the family: Car and Truck are both Vehicles. Only Truck has <code>getLoad()</code>.', code: J`
              class Truck extends Vehicle {
                  private int load;
                  Truck(int load) { this.load = load; }
                  int getLoad() { return load; }
              }
            ` },
            { en: 'Put all vehicles in one <code>Vehicle[]</code> array (upcasting happens automatically).', code: J`
              Vehicle[] fleet = { new Car(), new Truck(500), new Car(), new Truck(800) };
            ` },
            { en: 'In the loop, ask <code>instanceof Truck</code> first.', code: J`
              for (Vehicle v : fleet) {
                  if (v instanceof Truck) {
            ` },
            { en: 'Inside the if, cast and use <code>getLoad()</code>. The cast is now safe.', code: J`
                      Truck t = (Truck) v;
                      total += t.getLoad();
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Vehicle[] fleet = { new Car(), new Truck(500), new Car(), new Truck(800) };
                    int total = 0;
                    for (Vehicle v : fleet) {
                        if (v instanceof Truck) {
                            Truck t = (Truck) v;
                            total += t.getLoad();
                        }
                    }
                    System.out.println("Total load: " + total);
                }
            }

            class Vehicle { }

            class Car extends Vehicle { }

            class Truck extends Vehicle {
                private int load;
                Truck(int load) { this.load = load; }
                int getLoad() { return load; }
            }
          `, out: J`
            Total load: 1300
          `, ar: 'نسأل instanceof أولًا ثم نحول، فلا يحدث خطأ. المجموع 500 + 800 = 1300.' }
      ],
      mistakes: [
        { title: 'Downcasting without checking', en: "The code compiles but may crash at run time.", code: J`
          Vehicle v = new Car();
          Truck t = (Truck) v;    // ClassCastException
        ` },
        { title: 'Casting unrelated classes', en: "A cast between classes that are not in the same family is a compile error.", code: J`
          String s = (String) new Car();   // compile error
        ` },
        { title: 'Using instanceof the wrong way round', en: "<code>animal instanceof Dog</code> asks about the object. Writing <code>Dog instanceof animal</code> is a syntax error." },
        { title: 'Thinking the cast changes the object', en: "A cast does not convert the object. It only changes what the variable promises. A Rectangle never becomes a Circle." }
      ],
      remember: [
        "<b>Upcasting</b> (subclass to superclass) is automatic and safe.",
        "<b>Downcasting</b> (superclass to subclass) needs <code>(Type)</code> and can fail.",
        "A failed downcast throws <code>ClassCastException</code> at run time.",
        "Ask with <code>x instanceof Type</code> before you cast.",
        "<code>instanceof</code> includes subclasses; <code>getClass() ==</code> means exact class."
      ],
      rememberAr: 'التحويل للأعلى آمن وتلقائي. للأسفل نكتب النوع بين قوسين وقد يفشل، لذلك نسأل بـ instanceof أولًا.',
      practice: [
        { t: 'mcq', q: "<code>Shape s = new Circle(1);</code> This line is an example of…", options: ['upcasting', 'downcasting', 'overloading', 'a compile error'], answer: 0, explain: "A Circle object is put into a Shape variable: subclass to superclass is upcasting." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal a = new Dog();
                  System.out.println(a instanceof Dog);
              }
          }

          class Animal { }

          class Dog extends Animal { }
        `, answer: 'true', explain: "The real object is a Dog, so the test is true." },
        { t: 'mcq', q: "Which line throws a <code>ClassCastException</code> at run time?", code: J`
          Vehicle v1 = new Car();        // line 1
          Vehicle v2 = new Truck();      // line 2
          Car c1 = (Car) v1;             // line 3
          Car c2 = (Car) v2;             // line 4
          // Car and Truck both extend Vehicle
        `, options: ['line 1', 'line 2', 'line 3', 'line 4'], answer: 3,
          explain: "Lines 1 and 2 are upcasts. Line 3 is fine: v1 really is a Car. v2 refers to a Truck, so casting it to Car fails." },
        { t: 'mcq', q: "<code>Shape s = new Circle(1);</code> and only <code>Circle</code> defines <code>getRadius()</code>. What is <code>s.getRadius()</code>?",
          options: ["1.0, because the object is a Circle", "A compile error, because the variable type Shape has no getRadius()", "A ClassCastException at run time", "0.0"], answer: 1,
          explain: "The compiler checks calls against the variable type. You must downcast first: <code>((Circle) s).getRadius()</code>." },
        { t: 'fill', q: "Complete the safe downcast.", code: J`
          for (Vehicle v : fleet) {
              if (v ___ Truck) {
                  Truck t = (___) v;
                  System.out.println(t.getLoad());
              }
          }
        `, answers: ['instanceof', 'Truck'], explain: "Test with <code>instanceof</code> first, then cast with <code>(Truck)</code>." },
        { t: 'order', q: "Put the lines in the safe order.", lines: [
          'if (v instanceof Truck) {',
          '    Truck t = (Truck) v;',
          '    System.out.println(t.getLoad());',
          '}'
        ], explain: "First ask, then cast, then use the Truck method." },
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
        `, explain: "A Dog is an Animal (true), but its exact class is Dog, not Animal (false). A plain Animal is not a Dog (false). The two objects have different classes (false)." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> lines. Each line is either <code>car</code> or <code>truck LOAD</code>. Print the total load of all trucks (cars add nothing). Use a <code>Vehicle[]</code> array and <code>instanceof</code>. No prompts.", qAr: 'اقرأ المركبات واحسب مجموع حمولة الشاحنات فقط.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Vehicle[] fleet = new Vehicle[n];
                    // read each vehicle, then add up the truck loads
                }
            }

            class Vehicle { }

            class Car extends Vehicle { }

            class Truck extends Vehicle {
                private int load;
                Truck(int load) { this.load = load; }
                int getLoad() { return load; }
            }
          `,
          tests: [{ stdin: '4\ncar\ntruck 500\ntruck 300\ncar', expected: '800' }, { stdin: '2\ncar\ncar', expected: '0' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Vehicle[] fleet = new Vehicle[n];
                    for (int i = 0; i < n; i++) {
                        String kind = sc.next();
                        if (kind.equals("truck")) {
                            fleet[i] = new Truck(sc.nextInt());
                        } else {
                            fleet[i] = new Car();
                        }
                    }
                    int total = 0;
                    for (Vehicle v : fleet) {
                        if (v instanceof Truck) {
                            total += ((Truck) v).getLoad();
                        }
                    }
                    System.out.println(total);
                }
            }

            class Vehicle { }

            class Car extends Vehicle { }

            class Truck extends Vehicle {
                private int load;
                Truck(int load) { this.load = load; }
                int getLoad() { return load; }
            }
          `,
          hint: "Read the word first. Only when it is <code>truck</code>, read the load with <code>sc.nextInt()</code>.",
          explain: "All objects are stored as Vehicle (upcasting). instanceof then finds the trucks, and the cast lets us call getLoad()." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Abstract classes and abstract methods',
      titleAr: 'الأصناف والدوال المجردة',
      minutes: 30,
      body: [
        { type: 'h', en: 'A method with no real answer' },
        { type: 'p', en: "Think about a general <code>Shape</code>. What is its area? There is no answer: a circle, a rectangle and a triangle each use a different formula. Writing <code>return 0;</code> in Shape is a fake answer. A better idea: say \"every shape must have an area, but I will not say how\". In Java this is an <b>abstract method</b>.",
          ar: 'الدالة المجردة تعلن أن كل صنف ابن يجب أن يوفر هذه الدالة دون أن نكتب جسمها.' },
        { type: 'analogy', title: 'A job advert', en: "A company advert says: \"We need a driver.\" It does not say who. The advert describes the job, but nobody can sit in an advert and drive. Someone real has to be hired. An abstract class is the advert. The subclasses are the people hired." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape s = new Square(4);
                  System.out.println(s.area());
                  // Shape t = new Shape();   // compile error: Shape is abstract
              }
          }

          abstract class Shape {
              public abstract double area();    // no body, ends with ;
          }

          class Square extends Shape {
              private double side;
              public Square(double side) { this.side = side; }

              @Override
              public double area() { return side * side; }
          }
        `, out: J`
          16.0
        ` },
        { type: 'lines', rows: [
          ['abstract class Shape', 'The keyword <code>abstract</code> means: you cannot create objects of this class with <code>new</code>.'],
          ['public abstract double area();', 'An abstract method has <b>no body</b>. It ends with a semicolon.'],
          ['class Square extends Shape', 'Square is a normal (concrete) class. It must provide <code>area()</code>.'],
          ['Shape s = new Square(4);', 'A variable of the abstract type is fine. The object is a Square.']
        ], ar: 'لا يمكن إنشاء كائن من صنف مجرد، لكن يمكن إنشاء متغير منه.' },
        { type: 'check', q: 'Which line is a compile error?', code: J`
          abstract class Shape { }
          class Square extends Shape { }
        `, options: ['Shape a = new Square();', 'Shape b = new Shape();', 'Square c = new Square();', 'Shape[] d = new Shape[3];'], answer: 1, explain: "You cannot create an object of an abstract class. An array of Shape is fine because it holds only empty slots (null) for now." },
        { type: 'h', en: 'An abstract class can also have normal members' },
        { type: 'p', en: "An abstract class may have fields, constructors and normal methods. Normal methods can even call the abstract ones. This is useful: the shared work is written once. The subclasses fill in the missing parts." },
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
              public String toString() {     // a normal method using abstract ones
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

              @Override public double area() {
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
        { type: 'lines', title: 'Follow one object', rows: [
          ['System.out.println(s);', 'Printing an object calls its <code>toString()</code>.'],
          ['getClass().getSimpleName()', 'Gives the real class name as text: Rectangle, Square or Triangle.'],
          ['area() + perimeter()', 'These are abstract in Shape. At run time the real object\'s versions run (dynamic binding again).'],
          ['class Square extends Rectangle', 'Square reuses Rectangle\'s <code>area()</code> by calling <code>super(side, side)</code>.']
        ], ar: 'toString مكتوبة مرة واحدة في Shape وتعمل لكل الأشكال.' },
        { type: 'check', q: 'Class <code>Triangle extends Shape</code> forgets to write <code>perimeter()</code>. What happens?', options: ['It compiles; perimeter returns 0', 'Compile error unless Triangle is also abstract', 'The program crashes when run', 'Java writes the method for you'], answer: 1, explain: "A concrete subclass must implement every abstract method it inherits." },
        { type: 'h', en: 'Rules to remember' },
        { type: 'list', items: [
          "A class with an abstract method must be declared <code>abstract</code>.",
          "You cannot use <code>new</code> on an abstract class.",
          "A concrete subclass must override <b>all</b> abstract methods, or it must be abstract too.",
          "An abstract class can have constructors. Subclasses call them with <code>super(...)</code>."
        ], ar: 'الصنف الابن غير المجرد يجب أن ينفذ كل الدوال المجردة.' },
        { type: 'steps', title: 'Worked example: monthly pay', problem: 'A company has full-time staff (fixed salary) and part-time staff (hourly rate times hours). Print what each person earns.',
          steps: [
            { en: 'Everyone has a name and everyone earns money, but the way to calculate pay differs. So <code>monthlyPay()</code> is abstract.', code: J`
              abstract class Employee {
                  private String name;
                  Employee(String name) { this.name = name; }
                  String getName() { return name; }
                  abstract double monthlyPay();
              }
            ` },
            { en: 'Full-time: return the salary.', code: J`
              class FullTime extends Employee {
                  private double salary;
                  FullTime(String name, double salary) {
                      super(name);
                      this.salary = salary;
                  }
                  @Override
                  double monthlyPay() { return salary; }
              }
            ` },
            { en: 'Part-time: hourly rate times hours.', code: J`
              @Override
              double monthlyPay() { return hourlyRate * hours; }
            ` },
            { en: 'In <code>main</code> one loop prints everyone.', code: J`
              for (Employee e : staff) {
                  System.out.println(e.getName() + " earns " + e.monthlyPay());
              }
            ` }
          ],
          code: J`
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
          `, out: J`
            Majed earns 9000.0
            Lama earns 4000.0
          `, ar: 'الاسم مشترك في الصنف المجرد، وطريقة حساب الراتب تختلف في كل صنف ابن: 50 × 80 = 4000.' }
      ],
      mistakes: [
        { title: 'Creating an object of an abstract class', en: "<code>new Shape()</code> is a compile error.", code: J`
          Shape s = new Shape();   // error: Shape is abstract
        ` },
        { title: 'Writing a body for an abstract method', en: "An abstract method ends with <code>;</code>. A body with braces is an error.", code: J`
          public abstract double area() { return 0; }   // error
        ` },
        { title: 'Forgetting to implement an abstract method', en: "A concrete subclass must provide every abstract method, or the compiler stops." },
        { title: 'Forgetting the word abstract on the class', en: "If a class has an abstract method, the class itself must say <code>abstract</code> too." }
      ],
      remember: [
        "An <b>abstract method</b> has no body: <code>public abstract double area();</code>",
        "A class with an abstract method is an <b>abstract class</b>; you cannot use <code>new</code> on it.",
        "Concrete subclasses must override every abstract method.",
        "Abstract classes can have fields, constructors and normal methods.",
        "You can still declare variables and arrays of the abstract type: <code>Shape[] shapes</code>."
      ],
      rememberAr: 'الدالة المجردة بلا جسم، والصنف المجرد لا نستطيع عمل new منه، والأصناف الأبناء يجب أن تنفذ كل الدوال المجردة.',
      practice: [
        { t: 'mcq', q: "Can you write <code>new Shape()</code> when Shape is abstract?", options: ['Yes, always', 'No, it is a compile error', 'Only inside main', 'Only if it has a constructor'], answer: 1, explain: "Abstract classes are incomplete, so Java does not let you create objects from them." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape s = new Square(3);
                  System.out.println(s.area());
              }
          }

          abstract class Shape {
              public abstract double area();
          }

          class Square extends Shape {
              private double side;
              Square(double side) { this.side = side; }
              public double area() { return side * side; }
          }
        `, answer: '9.0', explain: "3.0 * 3.0 = 9.0. Doubles print with one decimal." },
        { t: 'mcq', q: "Which statement about abstract classes is true?",
          options: ["An abstract class cannot have a constructor.", "An abstract class can have both abstract and concrete methods.", "Every method in an abstract class must be abstract.", "You can create an object with <code>new</code> if it has no abstract methods."], answer: 1,
          explain: "Abstract classes may mix abstract and concrete methods and may have constructors. They can never be instantiated directly." },
        { t: 'mcq', q: "A concrete class extends an abstract class and does not implement one abstract method. What happens?", options: ['It compiles; the method returns a default value', 'Compile error, unless the class is declared abstract', 'Run-time exception when called', 'The method is removed'], answer: 1, explain: "A concrete class must implement all abstract methods it inherits." },
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
        `, explain: "Each object runs its own <code>monthlyPay()</code>. The part-timer: 50 * 80 = 4000.0." },
        { t: 'fill', q: "Complete the abstract class.", code: J`
          ___ class Shape {
              public ___ double area();
          }
        `, answers: ['abstract', 'abstract'], explain: "Both the class and the method use the keyword <code>abstract</code>." },
        { t: 'order', q: "Put these lines in order to build an abstract class.", lines: [
          'abstract class Pet {',
          '    private String name;',
          '    Pet(String name) { this.name = name; }',
          '    abstract String speak();',
          '}'
        ], explain: "Header, field, constructor, abstract method, closing brace." },
        { t: 'code', q: "Complete <code>Rectangle</code> so it extends the abstract class <code>Shape</code>. Read the width and the height (decimal numbers) and print the area. No prompts.", qAr: 'أكمل الصنف Rectangle ليرث من Shape واطبع المساحة.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    double w = sc.nextDouble();
                    double h = sc.nextDouble();
                    Shape s = new Rectangle(w, h);
                    System.out.println(s.area());
                }
            }

            abstract class Shape {
                public abstract double area();
            }

            // TODO: class Rectangle extends Shape
          `,
          tests: [{ stdin: '3 4', expected: '12.0' }, { stdin: '2.5 2', expected: '5.0' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    double w = sc.nextDouble();
                    double h = sc.nextDouble();
                    Shape s = new Rectangle(w, h);
                    System.out.println(s.area());
                }
            }

            abstract class Shape {
                public abstract double area();
            }

            class Rectangle extends Shape {
                private double width, height;

                Rectangle(double width, double height) {
                    this.width = width;
                    this.height = height;
                }

                @Override
                public double area() { return width * height; }
            }
          `,
          hint: "Write two fields, a constructor with two parameters, and <code>public double area()</code>.",
          explain: "Rectangle supplies the missing method, so it is concrete and we can use new on it." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'Interfaces',
      titleAr: 'الواجهات',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why interfaces?' },
        { type: 'p', en: "A class can extend only <b>one</b> class. But real things can do many jobs: a smartphone can be charged <i>and</i> take photos. An <b>interface</b> lists abilities (method headers) without any code. A class that <code>implements</code> the interface promises to provide those methods. A class may implement as many interfaces as it wants.",
          ar: 'الواجهة قائمة بالإمكانيات بلا كود، والصنف الذي ينفذها يلتزم بكتابة دوالها. يمكن تنفيذ أكثر من واجهة.' },
        { type: 'analogy', title: 'A driving licence rule', en: "The rule says: \"A driver must be able to start, steer and stop.\" The rule has no car in it. Any person who passes the test can drive in their own way. The interface is the rule. Classes are the drivers." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Payable p = new Invoice(250);
                  System.out.println(p.amountDue());
              }
          }

          interface Payable {
              double amountDue();
          }

          class Invoice implements Payable {
              private double total;

              Invoice(double total) { this.total = total; }

              @Override
              public double amountDue() { return total; }
          }
        `, out: J`
          250.0
        ` },
        { type: 'lines', rows: [
          ['interface Payable', 'We declare an interface with the keyword <code>interface</code>.'],
          ['double amountDue();', 'Only the header, no body. It is automatically <code>public abstract</code>.'],
          ['class Invoice implements Payable', 'Invoice promises to provide everything in Payable.'],
          ['public double amountDue()', 'It must be written <b>public</b>, because interface methods are public.'],
          ['Payable p = new Invoice(250);', 'An interface type can be a variable type. Polymorphism works again!']
        ], ar: 'يجب أن تكون الدالة المنفذة public.' },
        { type: 'check', q: 'Which keyword connects a class to an interface?', options: ['extends', 'implements', 'interface', 'abstract'], answer: 1, explain: "A class <code>implements</code> an interface. (An interface can <code>extend</code> another interface, but that comes later.)" },
        { type: 'note', kind: 'exam', en: "Two classic errors: (1) implementing an interface method without <code>public</code>, and (2) writing <code>new Payable()</code>. You cannot create an object of an interface.", ar: 'لا يمكن عمل new من واجهة، ويجب أن تكون الدوال المنفذة public.' },
        { type: 'h', en: 'Implementing several interfaces' },
        { type: 'p', en: "Separate the interface names with commas. Below, <code>SmartPhone</code> is both <code>Chargeable</code> and <code>Camera</code>. The same object can be seen through either interface. Interface fields are constants (<code>public static final</code>)." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  SmartPhone p = new SmartPhone("Galaxy", 80);
                  p.charge(15);
                  p.charge(30);
                  p.takePhoto();

                  Chargeable c = p;               // view as Chargeable
                  System.out.println(c.getBatteryLevel() + "%");

                  Camera cam = p;                 // view as Camera
                  cam.takePhoto();
                  System.out.println(Chargeable.MAX_LEVEL);
              }
          }

          interface Chargeable {
              int MAX_LEVEL = 100;                // constant
              void charge(int percent);
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
        { type: 'lines', title: 'Trace the battery', rows: [
          ['new SmartPhone("Galaxy", 80)', 'Battery starts at 80.'],
          ['p.charge(15)', '80 + 15 = 95. <code>Math.min(100, 95)</code> is 95. Prints 95%.'],
          ['p.charge(30)', '95 + 30 = 125, but <code>Math.min(100, 125)</code> is 100. The battery cannot go over MAX_LEVEL.'],
          ['p.takePhoto()', 'Photos become 1, battery 100 - 2 = 98.'],
          ['cam.takePhoto()', 'Second photo, battery 96 (not printed). Then <code>Chargeable.MAX_LEVEL</code> prints 100.']
        ], ar: 'نفس الكائن يمكن النظر إليه كـ Chargeable أو كـ Camera.' },
        { type: 'check', q: 'Can a class write <code>class A extends B, C</code> for two classes B and C?', options: ['Yes', 'No, only one class; but many interfaces with implements', 'Only if B and C are abstract', 'Only inside main'], answer: 1, explain: "Java allows one superclass but many interfaces." },
        { type: 'h', en: 'Abstract class or interface?' },
        { type: 'table', head: ['', 'Abstract class', 'Interface'], rows: [
          ['Keyword', '<code>extends</code> (only one)', '<code>implements</code> (many)'],
          ['Fields', 'Any fields', 'Only constants (<code>public static final</code>)'],
          ['Constructors', 'Yes', 'No'],
          ['Models', 'A common base: <i>is-a</i> with shared code', 'A skill: <i>can-do</i>']
        ] },
        { type: 'code', code: J`
          // One class AND several interfaces together:
          class ElectricCar extends Vehicle implements Chargeable, Comparable<ElectricCar> {
              ...
          }
        ` },
        { type: 'steps', title: 'Worked example: bills to pay', problem: 'An Invoice and a Salary slip are both Payable. Add up the amounts of a list of Payable things.',
          steps: [
            { en: 'Write the interface with the one ability we need.', code: J`
              interface Payable {
                  double amount();
              }
            ` },
            { en: 'Implement it in <code>Invoice</code>. The method must be public.', code: J`
              class Invoice implements Payable {
                  private double total;
                  Invoice(double total) { this.total = total; }
                  public double amount() { return total; }
              }
            ` },
            { en: 'Implement it in <code>Salary</code>: base minus deduction.', code: J`
              public double amount() { return base - deduction; }
            ` },
            { en: 'Store both kinds in one <code>Payable[]</code> and add them in a loop.', code: J`
              Payable[] bills = { new Invoice(250), new Salary(4000, 500) };
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Payable[] bills = { new Invoice(250), new Salary(4000, 500) };
                    double total = 0;
                    for (Payable p : bills) {
                        total += p.amount();
                    }
                    System.out.println("Total due: " + total);
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
          `, out: J`
            Total due: 3750.0
          `, ar: 'الفاتورة وكشف الراتب لا يرثان من صنف واحد، لكن كلاهما Payable. 250 + 3500 = 3750.' }
      ],
      mistakes: [
        { title: 'Forgetting public in the implementing method', en: "Interface methods are public, so the class method must be public too.", code: J`
          class Invoice implements Payable {
              double amountDue() { return 0; }   // error: weaker access
          }
        ` },
        { title: 'Using new on an interface', en: "<code>new Payable()</code> is an error. Create an object of a class that implements it.", code: J`
          Payable p = new Payable();   // error
        ` },
        { title: 'Not implementing every method', en: "If a method of the interface is missing, the class does not compile (unless it is abstract)." },
        { title: 'Using extends for an interface', en: "A class <b>implements</b> an interface. <code>class Invoice extends Payable</code> is an error." }
      ],
      remember: [
        "An interface lists method headers: what an object <b>can do</b>.",
        "A class uses <code>implements</code> and must write every method as <code>public</code>.",
        "One class can implement many interfaces: <code>implements A, B</code>.",
        "Interface fields are constants (<code>public static final</code>).",
        "You can use an interface as a variable type, but you cannot use <code>new</code> on it."
      ],
      rememberAr: 'الواجهة عقد يحدد ما يستطيع الكائن فعله. الصنف ينفذها بـ implements وتكون الدوال public. يمكن تنفيذ عدة واجهات.',
      practice: [
        { t: 'mcq', q: "Which keyword does a class use to follow an interface?", options: ['extends', 'implements', 'inherits', 'uses'], answer: 1, explain: "<code>implements</code> is the keyword for interfaces." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Greeter g = new Polite();
                  System.out.println(g.greet());
              }
          }

          interface Greeter {
              String greet();
          }

          class Polite implements Greeter {
              public String greet() { return "Good morning"; }
          }
        `, answer: 'Good morning', explain: "The variable is a Greeter, the object is a Polite. Its greet() runs." },
        { t: 'mcq', q: "<code>class Invoice implements Payable</code> does not write one of Payable's methods. What happens?", options: ['It compiles; the method returns a default', 'Compile error, unless Invoice is abstract', 'Run-time exception when called', 'The method is silently removed'], answer: 1, explain: "A concrete class must implement every method of the interface." },
        { t: 'mcq', q: "Which statement about interfaces is <b>false</b>?", options: ["A class can implement more than one interface.", "Interface fields are implicitly public static final.", "You can create an object with <code>new</code> followed by an interface name.", "A variable can have an interface type."], answer: 2, explain: "Interfaces cannot be instantiated." },
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
        `, answers: ['interface', 'implements', 'public'], explain: "Interfaces are declared with <code>interface</code> and used with <code>implements</code>. The method must be <code>public</code>.", explainAr: 'دالة الواجهة يجب أن تُنفّذ بمستوى وصول public.' },
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
        `, explain: "Both are Swimmers. Only Duck is also a Flyer, so only it passes the instanceof test." },
        { t: 'order', q: "Put the lines in order to declare an interface and a class that implements it.", lines: [
          'interface Camera {',
          '    void takePhoto();',
          '}',
          'class Phone implements Camera {',
          '    public void takePhoto() { }',
          '}'
        ], explain: "First the interface, then the class that implements it." },
        { t: 'code', q: "Complete the class <code>Salary</code> that implements <code>Payable</code>. Read the base salary and the deduction (decimal numbers) and print the amount due (base minus deduction). No prompts.", qAr: 'أكمل الصنف Salary الذي ينفذ Payable.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    double base = sc.nextDouble();
                    double ded = sc.nextDouble();
                    Payable p = new Salary(base, ded);
                    System.out.println(p.amountDue());
                }
            }

            interface Payable {
                double amountDue();
            }

            // TODO: class Salary implements Payable
          `,
          tests: [{ stdin: '4000 500', expected: '3500.0' }, { stdin: '1200.5 200.5', expected: '1000.0' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    double base = sc.nextDouble();
                    double ded = sc.nextDouble();
                    Payable p = new Salary(base, ded);
                    System.out.println(p.amountDue());
                }
            }

            interface Payable {
                double amountDue();
            }

            class Salary implements Payable {
                private double base, deduction;

                Salary(double base, double deduction) {
                    this.base = base;
                    this.deduction = deduction;
                }

                @Override
                public double amountDue() { return base - deduction; }
            }
          `,
          hint: "Remember <code>implements Payable</code> and <code>public</code> on the method.",
          explain: "Salary keeps the promise of the interface, so a Salary can be used as a Payable." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 5
    {
      title: 'Comparable: sorting your own objects',
      titleAr: 'الواجهة Comparable: ترتيب كائناتك',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why does Java need a rule for ordering?' },
        { type: 'p', en: "Java knows how to sort numbers and words. But how can it sort <code>Student</code> objects? By name? By GPA? Java cannot guess. You must give it a rule. The interface <code>Comparable&lt;T&gt;</code> is how you give that rule. It has one method: <code>int compareTo(T other)</code>.",
          ar: 'لترتيب كائناتك يجب أن تعطي Java قاعدة المقارنة عبر Comparable.' },
        { type: 'analogy', title: 'Lining up in class', en: "The teacher says \"line up by height\". Now every two students can be compared: who stands before whom? Without the rule, the line cannot be made. <code>compareTo</code> is the teacher's rule." },
        { type: 'table', head: ['<code>a.compareTo(b)</code> returns', 'Meaning'], rows: [
          ['a negative number', '<code>a</code> comes <b>before</b> <code>b</code>'],
          ['zero', 'they are equal in order'],
          ['a positive number', '<code>a</code> comes <b>after</b> <code>b</code>']
        ] },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Student a = new Student("Nouf", 3.4);
                  Student b = new Student("Badr", 3.9);
                  System.out.println(a.compareTo(b));
                  System.out.println(b.compareTo(a));
                  System.out.println(a.compareTo(a));
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
                  return Double.compare(this.gpa, other.gpa);
              }
          }
        `, out: J`
          -1
          1
          0
        ` },
        { type: 'lines', rows: [
          ['implements Comparable<Student>', 'Student promises it can be compared with other Students.'],
          ['public int compareTo(Student other)', 'The method gets the other student. <code>this</code> is the first one.'],
          ['Double.compare(this.gpa, other.gpa)', 'A ready-made helper: -1 if the first is smaller, 0 if equal, 1 if bigger.'],
          ['a.compareTo(b)', '3.4 against 3.9 gives -1, so Nouf comes before Badr.']
        ], ar: 'سالب يعني هذا الكائن قبل الآخر، وصفر متساويان، وموجب بعده.' },
        { type: 'check', q: '<code>x.compareTo(y)</code> returns 5. Which is true?', options: ['x comes before y', 'x comes after y', 'x and y are equal', 'an exception occurred'], answer: 1, explain: "Positive means x comes after y." },
        { type: 'h', en: 'Arrays.sort uses your rule' },
        { type: 'p', en: "Once the class implements Comparable, <code>Arrays.sort(array)</code> works on it. Java calls <code>compareTo</code> again and again to decide the order." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Student[] list = {
                      new Student("Nouf", 3.4),
                      new Student("Badr", 3.9),
                      new Student("Hessa", 2.8)
                  };
                  Arrays.sort(list);
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
                  return Double.compare(this.gpa, other.gpa);
              }

              @Override
              public String toString() { return name + " " + gpa; }
          }
        `, out: J`
          Hessa 2.8
          Nouf 3.4
          Badr 3.9
        ` },
        { type: 'lines', rows: [
          ['Arrays.sort(list);', 'Sorts the array using <code>compareTo</code>. Smallest GPA first.'],
          ['System.out.println(s);', 'Uses <code>toString()</code> to print "name gpa".'],
          ['Hessa 2.8 first', 'Her GPA is the smallest, so she comes first (ascending order).']
        ] },
        { type: 'h', en: 'Useful tricks' },
        { type: 'list', items: [
          "Numbers: <code>Integer.compare(x, y)</code> and <code>Double.compare(x, y)</code>.",
          "Words: <code>s1.compareTo(s2)</code> sorts alphabetically (String already implements Comparable).",
          "Largest first: swap the arguments: <code>Integer.compare(other.score, this.score)</code>.",
          "Tie? Compare a second field when the first comparison gives 0."
        ], ar: 'للترتيب التنازلي بدّل المعاملين، ولكسر التعادل قارن حقلًا ثانيًا.' },
        { type: 'note', kind: 'warn', en: "Avoid <code>return this.price - other.price;</code> for big ints (it can overflow) and never for doubles: <code>(int) (3.4 - 3.9)</code> is 0, which wrongly says \"equal\". Use <code>Integer.compare</code> or <code>Double.compare</code>." },
        { type: 'check', q: 'How do you sort scores from highest to lowest?', options: ['<code>Integer.compare(score, other.score)</code>', '<code>Integer.compare(other.score, score)</code>', '<code>score + other.score</code>', 'You cannot'], answer: 1, explain: "Swapping the two arguments reverses the order." },
        { type: 'steps', title: 'Worked example: exam results', problem: 'Read results (name and score). Print them with the highest score first. When two scores are equal, the names must be in alphabetical order.',
          steps: [
            { en: 'Make <code>Result</code> comparable.', code: J`
              class Result implements Comparable<Result> {
                  private String name;
                  private int score;
            ` },
            { en: 'First compare the scores, swapped, for highest first. Only if they differ.', code: J`
              if (score != other.score) {
                  return Integer.compare(other.score, score);
              }
            ` },
            { en: 'If the scores are equal, compare the names.', code: J`
              return name.compareTo(other.name);
            ` },
            { en: 'Read the results into an array, call <code>Arrays.sort</code>, print each one.', code: J`
              Arrays.sort(results);
            ` }
          ],
          code: J`
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
          `, stdin: J`
            4
            Omar 82
            Lina 95
            Adel 82
            Reem 70
          `, out: J`
            Lina 95
            Adel 82
            Omar 82
            Reem 70
          `, ar: 'نقارن الدرجات أولًا (تنازليًا)، وعند التساوي نقارن الأسماء أبجديًا.' }
      ],
      mistakes: [
        { title: 'Forgetting implements Comparable', en: "Without it, <code>Arrays.sort</code> throws a ClassCastException at run time.", code: J`
          class Student { ... }            // not Comparable
          Arrays.sort(students);           // ClassCastException
        ` },
        { title: 'Wrong parameter type', en: "With <code>Comparable&lt;Student&gt;</code> the parameter must be <code>Student</code>, not <code>Object</code>." },
        { title: 'Subtracting doubles', en: "<code>(int) (a - b)</code> loses decimals. Use <code>Double.compare</code>." },
        { title: 'Comparing text with minus', en: "Strings cannot be subtracted. Use <code>name.compareTo(other.name)</code>." }
      ],
      remember: [
        "<code>Comparable&lt;T&gt;</code> has one method: <code>int compareTo(T other)</code>.",
        "Negative = before, zero = equal, positive = after.",
        "Use <code>Integer.compare</code>, <code>Double.compare</code> and <code>String.compareTo</code>.",
        "Swap the arguments for descending order.",
        "After implementing it, <code>Arrays.sort(array)</code> works on your class."
      ],
      rememberAr: 'compareTo تعيد سالبًا أو صفرًا أو موجبًا. بعد تنفيذ Comparable يمكن استخدام Arrays.sort.',
      practice: [
        { t: 'mcq', q: "If <code>x.compareTo(y)</code> returns a negative number, then…", options: ["x comes before y", "x comes after y", "x and y are equal", "an exception occurred"], answer: 0, explain: "Negative means x comes first." },
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
        `, explain: "Pen (5) is cheaper than Bag (40): -1. Bag against Pen: 1. Pen and Cap have the same price: 0 (names are ignored)." },
        { t: 'mcq', q: "Which gives the order <b>highest score first</b>?", options: ["<code>Integer.compare(score, other.score)</code>", "<code>Integer.compare(other.score, score)</code>", "<code>score.compareTo(other.score)</code>", "<code>score - other.score</code> only for doubles"], answer: 1, explain: "Swapping the arguments reverses the ascending order." },
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
                      return Integer.compare(other.salary, salary);
                  }
                  return name.compareTo(other.name);
              }
          }
        `, answer: J`
          Amal 9000
          Maha 7000
          Zaid 7000
        `, explain: "Highest salary first: Amal. Maha and Zaid tie, so the names decide: Maha before Zaid." },
        { t: 'fill', q: "Make <code>Box</code> sortable by volume.", code: J`
          class Box implements ___<Box> {
              int volume;

              @Override
              public int ___(Box other) {
                  return Integer.compare(volume, other.volume);
              }
          }
        `, answers: ['Comparable', 'compareTo'], explain: "<code>Comparable&lt;Box&gt;</code> requires <code>public int compareTo(Box other)</code>." },
        { t: 'order', q: "Put the lines in order to write the compareTo method.", lines: [
          '@Override',
          'public int compareTo(Product other) {',
          '    return Integer.compare(price, other.price);',
          '}'
        ], explain: "Annotation, header, body, closing brace." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> lines with a one-word product name and an integer price. Make <code>Product</code> implement <code>Comparable&lt;Product&gt;</code> (cheapest first). Sort with <code>Arrays.sort</code> and print each as <code>NAME PRICE</code>. No prompts.", qAr: 'رتّب المنتجات من الأرخص إلى الأغلى.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Product[] items = new Product[n];
                    // read, sort, print
                }
            }

            class Product {
                // TODO: implement Comparable<Product>
            }
          `,
          tests: [{ stdin: '3\nPen 5\nBag 40\nRuler 3', expected: 'Ruler 3\nPen 5\nBag 40' }, { stdin: '2\nA 5\nB 5', expected: 'A 5\nB 5' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Product[] items = new Product[n];
                    for (int i = 0; i < n; i++) {
                        items[i] = new Product(sc.next(), sc.nextInt());
                    }
                    Arrays.sort(items);
                    for (Product p : items) {
                        System.out.println(p);
                    }
                }
            }

            class Product implements Comparable<Product> {
                private String name;
                private int price;

                Product(String name, int price) {
                    this.name = name;
                    this.price = price;
                }

                @Override
                public int compareTo(Product other) {
                    return Integer.compare(price, other.price);
                }

                @Override
                public String toString() { return name + " " + price; }
            }
          `,
          hint: "Add fields, a constructor, <code>compareTo</code> with <code>Integer.compare</code>, and <code>toString</code>.",
          explain: "Arrays.sort uses compareTo. Equal prices keep their input order (sorting objects is stable)." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 6
    {
      title: 'Functional interfaces and lambdas',
      titleAr: 'الواجهات الوظيفية وتعبيرات لامدا',
      minutes: 25,
      body: [
        { type: 'h', en: 'Why do we need something shorter?' },
        { type: 'p', en: "Sometimes you need only a tiny piece of behaviour, for example \"halve the price\". Writing a whole class for one line is heavy. Java has a short way for interfaces that have only <b>one</b> abstract method.",
          ar: 'عندما تحتاج سلوكًا صغيرًا، لا داعي لكتابة صنف كامل.' },
        { type: 'analogy', title: 'A sticky note', en: "To tell a cashier \"give 50% off\", you do not write a book about discounts. You write a short sticky note: \"price times 0.5\". A lambda is a sticky note with a rule on it." },
        { type: 'h', en: 'Functional interface = one abstract method' },
        { type: 'p', en: "An interface with exactly <b>one</b> abstract method is a <b>functional interface</b> (also called a <b>SAM</b> interface: Single Abstract Method). First, the old way with a normal class:" },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  PriceRule rule = new HalfPrice();
                  System.out.println(rule.apply(120));
              }
          }

          @FunctionalInterface
          interface PriceRule {
              double apply(double price);
          }

          class HalfPrice implements PriceRule {
              @Override
              public double apply(double price) { return price * 0.5; }
          }
        `, out: J`
          60.0
        ` },
        { type: 'lines', rows: [
          ['@FunctionalInterface', 'Optional label. The compiler checks that there is only one abstract method.'],
          ['double apply(double price);', 'The one abstract method: takes a double, gives a double.'],
          ['class HalfPrice implements PriceRule', 'A whole class just to write one line of logic.']
        ] },
        { type: 'h', en: 'The lambda: the short way' },
        { type: 'p', en: "A <b>lambda expression</b> has this shape: <code>parameter -&gt; result</code>. The arrow separates the input (left) from the output (right). Java matches it to the single abstract method." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  PriceRule studentRule = price -> price * 0.5;
                  PriceRule flatRule = price -> price - 20;
                  PriceRule noRule = new FullPrice();

                  double ticket = 120;
                  System.out.println(studentRule.apply(ticket));
                  System.out.println(flatRule.apply(ticket));
                  System.out.println(noRule.apply(ticket));
              }
          }

          @FunctionalInterface
          interface PriceRule {
              double apply(double price);
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
        { type: 'lines', rows: [
          ['price -> price * 0.5', 'Left of the arrow: the input name. Right: the value to return.'],
          ['PriceRule studentRule = ...', 'The lambda is stored in a variable of the interface type.'],
          ['studentRule.apply(ticket)', 'Calling <code>apply</code> runs the lambda: 120 * 0.5 = 60.0.'],
          ['new FullPrice()', 'A class and a lambda can both be used as a PriceRule.']
        ], ar: 'السهم يفصل المدخل (يسار) عن النتيجة (يمين).' },
        { type: 'check', q: 'Which interface can be written with a lambda?', code: J`
          interface A { void run(); void stop(); }
          interface B { int MAX = 10; }
          interface C { double convert(double value); }
        `, options: ['A', 'B', 'C', 'All of them'], answer: 2, explain: "Only C has exactly one abstract method." },
        { type: 'h', en: 'A lambda for sorting' },
        { type: 'p', en: "<code>Arrays.sort(array, comparator)</code> accepts a rule for ordering. The rule has one method, <code>compare(a, b)</code>, with the same negative/zero/positive meaning as <code>compareTo</code>. A lambda writes it in one line." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  String[] cities = { "Riyadh", "Abha", "Jeddah", "Dammam" };
                  Arrays.sort(cities, (a, b) -> a.length() - b.length());
                  System.out.println(Arrays.toString(cities));
                  Arrays.sort(cities);
                  System.out.println(Arrays.toString(cities));
              }
          }
        `, out: J`
          [Abha, Riyadh, Jeddah, Dammam]
          [Abha, Dammam, Jeddah, Riyadh]
        ` },
        { type: 'lines', rows: [
          ['(a, b) -> a.length() - b.length()', 'Two inputs, so brackets are needed. A shorter word gives a negative number, so it comes first.'],
          ['Arrays.toString(cities)', 'Turns the array into text like [Abha, Riyadh].'],
          ['Arrays.sort(cities)', 'No rule given: natural alphabetical order.']
        ] },
        { type: 'note', kind: 'exam', en: "Sorting objects with <code>Arrays.sort</code> is <b>stable</b>: items that compare as equal keep their original order. That is why Riyadh, Jeddah and Dammam (6 letters each) stay in input order.", ar: 'العناصر المتساوية تحافظ على ترتيبها الأصلي.' },
        { type: 'steps', title: 'Worked example: three discount rules', problem: 'A shop has three rules: half price, minus 20 riyals, and no change. Show what a 200 riyal item costs under each rule.',
          steps: [
            { en: 'One interface with one method.', code: J`
              interface PriceRule {
                  double apply(double price);
              }
            ` },
            { en: 'Write each rule as a lambda.', code: J`
              PriceRule half = p -> p * 0.5;
              PriceRule minus20 = p -> p - 20;
              PriceRule same = p -> p;
            ` },
            { en: 'Put the rules in an array and apply each to 200.', code: J`
              PriceRule[] rules = { half, minus20, same };
              for (PriceRule r : rules) {
                  System.out.println(r.apply(200));
              }
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    PriceRule half = p -> p * 0.5;
                    PriceRule minus20 = p -> p - 20;
                    PriceRule same = p -> p;
                    PriceRule[] rules = { half, minus20, same };
                    for (PriceRule r : rules) {
                        System.out.println(r.apply(200));
                    }
                }
            }

            interface PriceRule {
                double apply(double price);
            }
          `, out: J`
            100.0
            180.0
            200.0
          `, ar: 'كل قاعدة خصم هي لامدا صغيرة، ونستعملها كلها بنفس الحلقة.' }
      ],
      mistakes: [
        { title: 'Using a lambda with two abstract methods', en: "A lambda only fits an interface with exactly one abstract method." },
        { title: 'Wrong number of parameters', en: "The lambda must have the same number of inputs as the method.", code: J`
          PriceRule r = (a, b) -> a * b;   // error: apply takes one parameter
        ` },
        { title: 'Writing = instead of ->', en: "The arrow is a minus sign and a greater-than sign: <code>-&gt;</code>." },
        { title: 'Wrong result type', en: "The lambda result must match the method: <code>p -&gt; \"cheap\"</code> does not fit a method that returns double." }
      ],
      remember: [
        "A <b>functional interface</b> has exactly one abstract method.",
        "A lambda has the shape <code>input -&gt; result</code>.",
        "Two or more inputs need brackets: <code>(a, b) -&gt; ...</code>.",
        "Lambdas can be stored in variables of the interface type.",
        "<code>Arrays.sort(array, (a, b) -&gt; ...)</code> sorts with your own rule."
      ],
      rememberAr: 'الواجهة الوظيفية لها دالة مجردة واحدة، وتعبير لامدا يكتب بالشكل مدخل -> نتيجة.',
      practice: [
        { t: 'mcq', q: "How many abstract methods does a functional interface have?", options: ['Zero', 'Exactly one', 'At least two', 'Any number'], answer: 1, explain: "Functional = Single Abstract Method." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  PriceRule twice = p -> p * 2;
                  System.out.println(twice.apply(5));
              }
          }

          interface PriceRule {
              double apply(double price);
          }
        `, answer: '10.0', explain: "5 becomes 5.0 as a double, then 5.0 * 2 = 10.0." },
        { t: 'mcq', q: "Which of these is a functional (SAM) interface?", code: J`
          interface A { void run(); void stop(); }
          interface B { int MAX = 10; }
          interface C { double convert(double value); }
          interface D { }
        `, options: ['A', 'B', 'C', 'D'], answer: 2, explain: "C has exactly one abstract method, so <code>v -&gt; v * 3.75</code> can implement it." },
        { t: 'mcq', q: "Which lambda can implement <code>interface Discount { double apply(double price); }</code>?", options: ['<code>p -&gt; p * 0.9</code>', '<code>() -&gt; 0.9</code>', '<code>(a, b) -&gt; a * b</code>', '<code>p -&gt; { System.out.println(p); }</code>'], answer: 0, explain: "One input and a double result: <code>p -&gt; p * 0.9</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  String[] words = { "kiwi", "fig", "banana" };
                  Arrays.sort(words, (a, b) -> a.length() - b.length());
                  System.out.println(Arrays.toString(words));
              }
          }
        `, answer: '[fig, kiwi, banana]', explain: "Sorted by length: fig (3), kiwi (4), banana (6)." },
        { t: 'fill', q: "Create a lambda that doubles a value. <code>Scaler</code> is an interface with <code>int scale(int x);</code>.", code: J`
          Scaler twice = x ___ x * 2;
        `, answers: ['->'], explain: "The arrow <code>-&gt;</code> separates the input from the result." },
        { t: 'order', q: "Put the lines in order to declare a functional interface.", lines: [
          '@FunctionalInterface',
          'interface Scaler {',
          '    int scale(int x);',
          '}'
        ], explain: "Annotation, header, the single method, closing brace." },
        { t: 'code', q: "Read a price (a decimal number). Create a lambda <code>rule</code> of type <code>PriceRule</code> that gives a 25% student discount (price times 0.75) and print <code>rule.apply(price)</code>. No prompts.", qAr: 'اكتب لامدا لخصم الطالب 25% واطبع السعر بعد الخصم.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    double price = sc.nextDouble();
                    // PriceRule rule = ...
                    // print rule.apply(price)
                }
            }

            interface PriceRule {
                double apply(double price);
            }
          `,
          tests: [{ stdin: '200', expected: '150.0' }, { stdin: '80', expected: '60.0' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    double price = sc.nextDouble();
                    PriceRule rule = p -> p * 0.75;
                    System.out.println(rule.apply(price));
                }
            }

            interface PriceRule {
                double apply(double price);
            }
          `,
          hint: "<code>PriceRule rule = p -&gt; p * 0.75;</code>",
          explain: "The lambda is the body of apply. 200 * 0.75 = 150.0 and 80 * 0.75 = 60.0." }
      ]
    }
  ],

  quiz: [
    { t: 'mcq', q: "What is <b>polymorphism</b>?", options: ["One variable type working with objects of many subclasses", "Writing many classes in one file", "Converting int to double", "Copying an object"], answer: 0, explain: "One reference type, many real forms, each reacting in its own way." },
    { t: 'mcq', q: "What is <b>dynamic binding</b>?",
      options: ["Choosing an overloaded method from the argument types at compile time", "Choosing which overridden method runs from the actual object type at run time", "Converting a primitive to its wrapper class", "Linking two classes with extends"], answer: 1,
      explain: "With dynamic binding, the JVM uses the real class of the object to pick the overridden method." },
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
    `, explain: "Car overrides sound(), Bike inherits the default. Wheels: 4 + 2 + 4 = 10." },
    { t: 'mcq', q: "<code>Animal a = new Cat();</code> What is <code>Dog d = (Dog) a;</code> (Dog and Cat both extend Animal)?",
      options: ["A compile error", "It compiles but throws ClassCastException at run time", "It works, and d refers to the cat", "It creates a new Dog object"], answer: 1,
      explain: "The compiler allows it because an Animal might be a Dog. At run time the object is a Cat, so the cast fails." },
    { t: 'mcq', q: "Which statement about interfaces is <b>false</b>?",
      options: ["A class can implement more than one interface.", "Interface fields are implicitly public static final.", "You can create an object with <code>new</code> followed by an interface name and ()", "A variable can have an interface type, e.g. <code>Comparable&lt;Student&gt; c</code>."], answer: 2,
      explain: "Interfaces cannot be instantiated." },
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
    `, explain: "250 + (4000 - 500) = 3750.0. Both classes implement Payable, so instanceof is true." },
    { t: 'mcq', q: "What must a concrete class do when it extends an abstract class that declares <code>abstract double area();</code>?",
      options: ["Nothing; the method is inherited with an empty body", "Override <code>area()</code> with a body", "Declare <code>area()</code> as static", "Call <code>super.area()</code> in its constructor"], answer: 1,
      explain: "A concrete class must implement every abstract method it inherits." },
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
    `, answer: 'MATH111 CS102 ENG101', explain: "Ordered by credits, descending. MATH111 (4) first; CS102 and ENG101 tie at 3 and keep their original order (stable sort)." },
    { t: 'mcq', q: "Which lambda can implement <code>interface Discount { double apply(double price); }</code>?",
      options: ['<code>p -&gt; p * 0.9</code>', '<code>() -&gt; 0.9</code>', '<code>(a, b) -&gt; a * b</code>', '<code>p -&gt; { System.out.println(p); }</code>'], answer: 0,
      explain: "One double input and a double result: <code>p -&gt; p * 0.9</code>." },
    { t: 'mcq', q: "For <code>Shape s = new Square(2);</code> where <code>Square extends Rectangle extends Shape</code>, which condition is <code>true</code>?",
      options: ['<code>s.getClass() == Rectangle.class</code>', '<code>s.getClass() == Shape.class</code>', '<code>s instanceof Rectangle</code>', '<code>!(s instanceof Square)</code>'], answer: 2,
      explain: "<code>instanceof</code> is true for the exact class and all its superclasses. <code>getClass()</code> is exactly Square." }
  ],

  lab: {
    t: 'code',
    q: "<b>Mini project: Shape sorter.</b> Create an abstract class <code>Shape</code> that implements <code>Comparable&lt;Shape&gt;</code> (ordering by area, smallest first) and declares <code>abstract double area()</code>. Write concrete classes <code>Circle</code> (radius), <code>Rectangle</code> (width, height) and <code>Square</code> (extends <code>Rectangle</code>).<br>Input: an integer <code>n</code>, then <code>n</code> lines: <code>C radius</code>, <code>R width height</code> or <code>S side</code>. Store the shapes in a <code>Shape[]</code>, sort it with <code>Arrays.sort</code>, and print each shape as <code>ClassName AREA</code>, where the class name comes from <code>getClass().getSimpleName()</code> and AREA is rounded to two decimals with <code>Math.round(area * 100) / 100.0</code>. Finally print <code>Largest: ClassName</code>. No prompts.<br><b>Tip:</b> do it in small steps: (1) write the classes, (2) read the input, (3) sort, (4) print.",
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
    explain: "The abstract class defines the ordering for all shapes, and each subclass only supplies its <code>area()</code>. After sorting ascending, the largest shape is the last element."
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
    { term: 'Override', ar: 'إعادة تعريف', def: 'Writing a new version of an inherited method in a subclass, with the same name and parameters.' },
    { term: 'Declared type', ar: 'النوع المعلن', def: 'The type of a variable as written in code; it decides which members may be accessed.' },
    { term: 'Actual type', ar: 'النوع الفعلي', def: 'The class of the object the variable refers to at run time.' },
    { term: 'Upcasting', ar: 'التحويل للأعلى', def: 'Treating a subclass object as its superclass type; implicit and safe.' },
    { term: 'Downcasting', ar: 'التحويل للأسفل', def: 'Casting a superclass reference to a subclass type; needs an explicit cast.' },
    { term: 'instanceof', ar: 'instanceof', def: 'An operator that tests whether an object is of a given type; gives true or false.' },
    { term: 'ClassCastException', ar: 'استثناء التحويل', def: 'Run-time error thrown when an object is cast to a type it does not belong to.' },
    { term: 'Abstract method', ar: 'دالة مجردة', def: 'A method declared without a body that subclasses must implement.' },
    { term: 'Abstract class', ar: 'صنف مجرد', def: 'A class declared abstract; you cannot create objects from it directly.' },
    { term: 'Interface', ar: 'واجهة', def: 'A type that declares a contract of methods (and constants) that implementing classes must provide.' },
    { term: 'implements', ar: 'implements', def: 'Keyword used by a class to promise it provides the methods of one or more interfaces.' },
    { term: 'Comparable&lt;T&gt;', ar: 'الواجهة Comparable', def: 'Interface with compareTo(T) that defines the natural ordering of objects.' },
    { term: 'compareTo', ar: 'compareTo', def: 'Returns a negative number, zero, or a positive number when this object is before, equal to, or after the other.' },
    { term: 'Functional interface (SAM)', ar: 'واجهة وظيفية', def: 'An interface with exactly one abstract method; it can be implemented with a lambda.' },
    { term: 'Lambda expression', ar: 'تعبير لامدا', def: 'A short anonymous function such as x -&gt; x * 2 that implements a functional interface.' }
  ]
});
