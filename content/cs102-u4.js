JP.unit({
  course: 'cs102',
  key: 4,
  n: 5,
  title: 'Polymorphism and Interfaces',
  titleAr: 'تعدد الأشكال والواجهات',
  intro: "Polymorphism means one piece of code working with many types of objects. A Shape variable can hold a Circle or a Rectangle, and calling area() runs the right version automatically. Step by step you will learn dynamic binding, upcasting and downcasting, abstract classes, interfaces and multiple inheritance through interfaces, sorting with Comparable and Comparator, and a first taste of lambda expressions. The last lessons put it all together: tracing which method runs, a payroll with one loop, default and static interface methods, and the design of a small delivery app with a UML diagram.",
  introAr: "تعدد الأشكال يعني أن كودًا واحدًا يعمل مع أنواع كثيرة من الكائنات. سنتعلم خطوة بخطوة: الربط الديناميكي، والتحويل بين الأنواع، والأصناف المجردة، والواجهات والوراثة المتعددة عبرها، والترتيب بـ Comparable و Comparator، وتعبيرات لامدا، ثم نجمع كل ذلك في تصميم تطبيق توصيل صغير.",
  lessons: [
    // ---------------------------------------------------------------- Lesson 1
    {
      title: 'One reference, many forms',
      titleAr: 'مرجع واحد وأشكال كثيرة',
      minutes: 40,
      body: [
        { type: 'h', en: 'Why do we need polymorphism?' },
        { type: 'p', en: "Imagine a zoo program. It has dogs, cats and birds, and every animal makes a sound. Without polymorphism you would write a separate piece of code for each kind of animal. With polymorphism you write the code <b>once</b> and it works for every animal, even animals you add next year. The word <b>polymorphism</b> means \"many forms\".",
          ar: "تعدد الأشكال يعني أن نكتب الكود مرة واحدة ويعمل مع أنواع كثيرة من الكائنات." },
        { type: 'analogy', title: 'The barista', en: "You say \"one coffee, please\" to a barista. You do not explain how to make it. A latte barista and an espresso barista both understand the same request, but each one does it in their own way. The request is the same. The result depends on who receives it.",
          ar: "الطلب واحد، لكن كل شخص ينفذه بطريقته." },
        { type: 'p', en: "First, look at the problem polymorphism solves. Here is a program that does <b>not</b> use it. It keeps the kind of animal as a word and checks the word again and again:" },
        { type: 'code', code: J`
          if (kind.equals("dog")) {
              System.out.println("Woof");
          } else if (kind.equals("cat")) {
              System.out.println("Meow");
          } else if (kind.equals("cow")) {
              System.out.println("Moo");
          }
        ` },
        { type: 'p', en: "This works for three animals. But a real program checks the kind in many places: the sound, the food, the price of a ticket. When the zoo gets a camel, you must find <b>every</b> <code>if</code> chain and add one more branch. If you forget one place, the program is wrong. Polymorphism moves each answer into its own class, so the main code never needs this chain.",
          ar: "بدون تعدد الأشكال نكرر سلاسل if في كل مكان، وكل نوع جديد يجبرنا على تعديلها كلها." },
        { type: 'h', en: 'A superclass variable can hold a subclass object' },
        { type: 'p', en: "Remember from Unit 4 (Inheritance): a <code>Dog</code> <i>is an</i> <code>Animal</code>. So Java lets you store a Dog object in an <code>Animal</code> variable. Let us see it in a tiny program." },
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
        { type: 'h', en: 'Two types in one line' },
        { type: 'p', en: "Every line like <code>Animal a = new Dog();</code> has <b>two</b> types. The type on the left is the <b>variable type</b> (also called the <i>declared type</i>). It never changes. The type after <code>new</code> is the <b>object type</b> (the <i>actual type</i>). It is the real thing in memory. Learn to see both types in every line: it is the key to this whole unit.",
          ar: "في كل سطر نوعان: نوع المتغير على اليسار، ونوع الكائن بعد new." },
        { type: 'table', head: ['Line', 'Variable type', 'Object type'], rows: [
          ['<code>Animal a = new Dog();</code>', 'Animal', 'Dog'],
          ['<code>Animal b = new Animal();</code>', 'Animal', 'Animal'],
          ['<code>Dog d = new Dog();</code>', 'Dog', 'Dog'],
          ['<code>Dog x = new Animal();</code>', 'compile error', 'an Animal is not always a Dog']
        ] },
        { type: 'analogy', title: 'A parking space for vehicles', en: "A parking space has a sign: \"Vehicles only\". A car, a bus or a motorbike may park there, because each one is a vehicle. The sign is the variable type. The vehicle that is parked right now is the object. Tomorrow a different vehicle may park in the same space, but the sign stays the same.",
          ar: "اللافتة هي نوع المتغير، والمركبة المتوقفة الآن هي الكائن." },
        { type: 'p', en: "Because the variable is only a label, it can point to a Dog now and to a Cat later. Step through the memory picture: the variable <code>a</code> keeps its type Animal, but the object it points to changes." },
        { type: 'memory', title: 'One variable, two different objects', code: J`
          Animal a = new Dog();
          a = new Cat();
        `, frames: [
          { label: 'After <code>Animal a = new Dog();</code>', vars: [{ name: 'a', type: 'Animal', ref: 'A' }], objects: [{ id: 'A', cls: 'Dog', fields: [] }] },
          { label: 'After <code>a = new Cat();</code>', vars: [{ name: 'a', type: 'Animal', ref: 'B' }], objects: [{ id: 'A', cls: 'Dog', fields: [], gone: true }, { id: 'B', cls: 'Cat', fields: [] }] }
        ], ar: "المتغير a بقي من نوع Animal، لكنه صار يشير إلى قطة بدل الكلب." },
        { type: 'check', q: 'What does this print?', code: J`
          Animal a = new Cat();
          a = new Dog();
          System.out.println(a.sound());
        `, options: ['Meow', 'Woof', '...', 'A compile error'], answer: 1, explain: "When <code>sound()</code> is called, <code>a</code> points to a Dog. The object at the moment of the call decides." },
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
        { type: 'p', en: "What is really inside the array? Not the animals themselves. The array holds three <b>references</b> (arrows), and each arrow points to a different kind of object. In the loop, the variable <code>a</code> points to one object after the other. Press Next to follow the loop." },
        { type: 'memory', title: 'The zoo array and the loop variable', frames: [
          { label: 'After <code>Animal[] zoo = { new Dog(), new Cat(), new Animal() };</code>', vars: [{ name: 'zoo', type: 'Animal[]', ref: 'Z' }], objects: [
            { id: 'Z', cls: 'Animal[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', ref: 'B' }, { name: '[2]', ref: 'C' }] },
            { id: 'A', cls: 'Dog', fields: [] }, { id: 'B', cls: 'Cat', fields: [] }, { id: 'C', cls: 'Animal', fields: [] }] },
          { label: 'Loop, round 1: <code>a</code> points to the Dog, prints Woof', vars: [{ name: 'zoo', type: 'Animal[]', ref: 'Z' }, { name: 'a', type: 'Animal', ref: 'A' }], objects: [
            { id: 'Z', cls: 'Animal[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', ref: 'B' }, { name: '[2]', ref: 'C' }] },
            { id: 'A', cls: 'Dog', fields: [] }, { id: 'B', cls: 'Cat', fields: [] }, { id: 'C', cls: 'Animal', fields: [] }] },
          { label: 'Loop, round 2: <code>a</code> points to the Cat, prints Meow', vars: [{ name: 'zoo', type: 'Animal[]', ref: 'Z' }, { name: 'a', type: 'Animal', ref: 'B' }], objects: [
            { id: 'Z', cls: 'Animal[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', ref: 'B' }, { name: '[2]', ref: 'C' }] },
            { id: 'A', cls: 'Dog', fields: [] }, { id: 'B', cls: 'Cat', fields: [] }, { id: 'C', cls: 'Animal', fields: [] }] },
          { label: 'Loop, round 3: <code>a</code> points to the plain Animal, prints ...', vars: [{ name: 'zoo', type: 'Animal[]', ref: 'Z' }, { name: 'a', type: 'Animal', ref: 'C' }], objects: [
            { id: 'Z', cls: 'Animal[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', ref: 'B' }, { name: '[2]', ref: 'C' }] },
            { id: 'A', cls: 'Dog', fields: [] }, { id: 'B', cls: 'Cat', fields: [] }, { id: 'C', cls: 'Animal', fields: [] }] }
        ], ar: "المصفوفة تحمل أسهمًا إلى كائنات مختلفة، والمتغير a ينتقل من كائن إلى آخر في كل دورة." },
        { type: 'h', en: 'One method that works for every subclass' },
        { type: 'p', en: "Polymorphism also works with <b>method parameters</b>. A vet clinic examines every kind of animal. You do not want <code>checkDog</code>, <code>checkCat</code> and <code>checkCow</code>. Write <b>one</b> method whose parameter has the superclass type. Any subclass object can be passed to it." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  introduce(new Dog());
                  introduce(new Cat());
              }

              static void introduce(Animal a) {
                  System.out.println("This animal says " + a.sound());
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
          This animal says Woof
          This animal says Meow
        ` },
        { type: 'lines', rows: [
          ['static void introduce(Animal a)', 'The parameter type is Animal. The method accepts a Dog, a Cat, or any future subclass.'],
          ['introduce(new Dog());', 'A Dog object is passed. Inside the method, <code>a</code> points to it.'],
          ['a.sound()', 'Dynamic binding again: the Dog version runs the first time, the Cat version the second time.']
        ], ar: "دالة واحدة معاملها من نوع الأب تقبل أي كائن من الأصناف الأبناء." },
        { type: 'check', q: 'Next month you add <code>class Cow extends Animal</code> with its own <code>sound()</code>. What must you change in <code>introduce</code>?', options: ['Add an if for Cow', 'Nothing: introduce(new Cow()) already works', 'Write a new method introduceCow', 'Change the parameter to Cow'], answer: 1, explain: "A Cow is an Animal, so it can be passed. Its own <code>sound()</code> runs. The method never changes." },
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
        { type: 'p', en: "How does Java find the method that runs? Use this simple search rule every time you trace a program. You will practise it much more in Lesson 7." },
        { type: 'list', items: [
          "<b>1.</b> Find the real object: look at the word after <code>new</code>.",
          "<b>2.</b> Does the object's class write this method? Then that version runs.",
          "<b>3.</b> If not, go up to its parent class and look there. Keep going up until you find it.",
          "<b>4.</b> A call inside a method (like <code>role()</code> inside <code>report()</code>) means <code>this.role()</code>: start the search again from the real object."
        ], ar: "ابدأ البحث من صنف الكائن الحقيقي، ثم اصعد إلى الأب إن لم تجد الدالة." },
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
          `, ar: 'نفس الحلقة تحسب سعر المشروب العادي واللاتيه: 10 + 13 + 13 = 36.' },
        { type: 'steps', title: 'Worked example: exam reminders', problem: 'The college sends exam reminders. Some students want an SMS, some want an email, and some only want a general reminder. Send a reminder to Huda in each way, using one loop.',
          steps: [
            { en: 'Write the superclass <code>Reminder</code>. Its <code>send</code> method builds a general message.', code: J`
              class Reminder {
                  public String send(String name) {
                      return "Reminder for " + name;
                  }
              }
            ` },
            { en: 'Write <code>SmsReminder</code>. It overrides <code>send</code> with its own message. Keep the same name and the same parameter.', code: J`
              class SmsReminder extends Reminder {
                  @Override
                  public String send(String name) {
                      return "SMS to " + name + ": exam on Sunday";
                  }
              }
            ` },
            { en: 'Write <code>EmailReminder</code> in the same way.', code: J`
              class EmailReminder extends Reminder {
                  @Override
                  public String send(String name) {
                      return "Email to " + name + ": exam on Sunday";
                  }
              }
            ` },
            { en: 'In <code>main</code>, put all three kinds in one <code>Reminder[]</code> array. One loop sends every reminder. Each object chooses its own message.', code: J`
              Reminder[] list = { new SmsReminder(), new EmailReminder(), new Reminder() };
              for (Reminder r : list) {
                  System.out.println(r.send("Huda"));
              }
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Reminder[] list = { new SmsReminder(), new EmailReminder(), new Reminder() };
                    for (Reminder r : list) {
                        System.out.println(r.send("Huda"));
                    }
                }
            }

            class Reminder {
                public String send(String name) {
                    return "Reminder for " + name;
                }
            }

            class SmsReminder extends Reminder {
                @Override
                public String send(String name) {
                    return "SMS to " + name + ": exam on Sunday";
                }
            }

            class EmailReminder extends Reminder {
                @Override
                public String send(String name) {
                    return "Email to " + name + ": exam on Sunday";
                }
            }
          `, out: J`
            SMS to Huda: exam on Sunday
            Email to Huda: exam on Sunday
            Reminder for Huda
          `, ar: 'نفس الاستدعاء r.send في كل دورة، وكل كائن يكتب رسالته الخاصة. لو أضفنا تذكيرًا جديدًا فلن نغيّر الحلقة.' },
        { type: 'note', kind: 'tip', en: "Next year the college adds app notifications. You write one new class, <code>AppReminder extends Reminder</code>, and add <code>new AppReminder()</code> to the array. The loop stays exactly the same. This is the real power of polymorphism.", ar: 'صنف جديد فقط، والحلقة لا تتغير.' }
      ],
      mistakes: [
        { title: 'Misspelling the method name', en: "If the name differs, it is a new method, not an override. The parent version runs. Always write <code>@Override</code>: the compiler then reports the mistake.", code: J`
          class Dog extends Animal {
              @Override
              public String sond() { return "Woof"; }   // compile error: no sond() in Animal
          }
        `, ar: 'اكتب @Override ليكتشف المترجم أخطاء الاسم.' },
        { title: 'Calling a subclass-only method through the superclass variable', en: "The compiler only allows methods that the <b>variable type</b> has. The object is a Dog, but the label says Animal, and Animal has no <code>fetch()</code>.", code: J`
          Animal a = new Dog();
          a.fetch();    // compile error if only Dog has fetch()
        `, ar: 'المترجم ينظر إلى نوع المتغير فقط.' },
        { title: 'Expecting fields to be polymorphic', en: "<code>a.tag</code> uses the variable type. Only methods are dynamically bound. Keep fields <code>private</code> and use a getter: the getter is a method, so it is polymorphic.", code: J`
          Animal a = new Dog();
          System.out.println(a.tag);       // Animal's field, even if Dog has its own tag
          System.out.println(a.getTag());  // Dog's getter runs (if Dog overrides it)
        ` },
        { title: 'Forgetting extends', en: "Without <code>extends Animal</code>, a Dog is not an Animal, and <code>Animal a = new Dog();</code> does not compile.", code: J`
          class Dog { ... }           // no extends
          Animal a = new Dog();       // compile error: incompatible types
        ` }
      ],
      remember: [
        "A superclass variable can refer to a subclass object (<code>Animal a = new Dog();</code>).",
        "The <b>variable type</b> decides which methods you may call.",
        "The <b>real object</b> decides which overridden version runs (dynamic binding).",
        "A method with a superclass parameter, like <code>introduce(Animal a)</code>, works for every subclass.",
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
          explain: "The variable has type Animal in both cases. The object created decides the sound." },
        { t: 'bug', q: "This program should print <code>Meow</code>, but it prints <code>...</code>. Tap the line with the bug.", qAr: 'البرنامج يجب أن يطبع Meow لكنه يطبع ... أين الخطأ؟',
          code: J`
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
                public String Sound() { return "Meow"; }
            }
          `, bug: 13,
          fix: J`
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
          `,
          hint: "Java is case-sensitive. Compare the two method names letter by letter.",
          explain: "<code>Sound</code> with a capital S is a <b>new</b> method, not an override of <code>sound</code>. So <code>a.sound()</code> finds no Cat version and runs Animal's version, which returns <code>...</code>. The fix uses the exact same name. Adding <code>@Override</code> makes the compiler catch this kind of mistake for you.",
          explainAr: 'الاسم Sound مختلف عن sound، فلم تحدث إعادة تعريف. استخدم{{g:|ي}} @Override دائمًا.' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  check(new Dog());
                  check(new Animal());
                  check(new Puppy());
              }

              static void check(Animal a) {
                  System.out.println("Vet hears: " + a.sound());
              }
          }

          class Animal {
              public String sound() { return "..."; }
          }

          class Dog extends Animal {
              @Override
              public String sound() { return "Woof"; }
          }

          class Puppy extends Dog {
          }
        `, answer: J`
          Vet hears: Woof
          Vet hears: ...
          Vet hears: Woof
        `, explain: "The method accepts any Animal. A Puppy has no <code>sound()</code> of its own, so Java goes up to its parent Dog and runs <code>Woof</code>.", explainAr: 'Puppy لا يملك sound، فنصعد إلى الأب Dog.' },
        { t: 'mcq', q: "<code>Animal a = new Dog();</code> Which statement is true?", options: ['The variable type is Dog and the object type is Animal', 'The variable type is Animal and the object type is Dog', 'Both types are Animal', 'Both types are Dog'], answer: 1, explain: "The left side gives the variable (declared) type. The word after <code>new</code> gives the object (actual) type." },
        { t: 'code', q: "A cafeteria sells three drinks. <code>Drink</code> costs 5 riyals, <code>Tea</code> costs 3 and <code>Juice</code> costs 8 (both extend Drink and override <code>price()</code>). Read <code>n</code>, then <code>n</code> words (<code>tea</code>, <code>juice</code> or anything else for a plain drink). Store the drinks in a <code>Drink[]</code> array, then use <b>one</b> loop to print the total price. No prompts.", qAr: 'اقرأ الطلبات وخزّنها في مصفوفة Drink واحسب المجموع بحلقة واحدة.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Drink[] order = new Drink[n];
                    // fill the array, then add up the prices in one loop
                }
            }

            class Drink {
                public int price() { return 5; }
            }

            // TODO: class Tea and class Juice
          `,
          tests: [{ stdin: '3\ntea\njuice\nwater', expected: '16' }, { stdin: '2\njuice\njuice', expected: '16' }, { stdin: '1\ntea', expected: '3' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Drink[] order = new Drink[n];
                    for (int i = 0; i < n; i++) {
                        String word = sc.next();
                        if (word.equals("tea")) {
                            order[i] = new Tea();
                        } else if (word.equals("juice")) {
                            order[i] = new Juice();
                        } else {
                            order[i] = new Drink();
                        }
                    }
                    int total = 0;
                    for (Drink d : order) {
                        total += d.price();
                    }
                    System.out.println(total);
                }
            }

            class Drink {
                public int price() { return 5; }
            }

            class Tea extends Drink {
                @Override
                public int price() { return 3; }
            }

            class Juice extends Drink {
                @Override
                public int price() { return 8; }
            }
          `,
          hint: "The <code>if</code> chain is needed only once, when you <b>create</b> the objects. The loop that adds the prices needs no <code>if</code> at all.",
          explain: "The words decide which object is created. After that, <code>d.price()</code> uses dynamic binding: 3 + 8 + 5 = 16 for the first test." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 2
    {
      title: 'Upcasting, downcasting and instanceof',
      titleAr: 'التحويل بين الأنواع و instanceof',
      minutes: 40,
      body: [
        { type: 'h', en: 'What can a variable see?' },
        { type: 'p', en: "You met <code>instanceof</code> and casting in Unit 4. Now we use them with polymorphism. Remember the rule from Lesson 1: a variable's type decides which methods you may call through it. If you keep a <code>Circle</code> in a <code>Shape</code> variable, you can only use what <code>Shape</code> offers. This keeps the program safe: the compiler must be sure the method exists, and it only knows the variable type.",
          ar: 'نوع المتغير يحدد الدوال التي يمكنك استدعاؤها.' },
        { type: 'p', en: "Changing the type of a reference is called <b>casting</b>. There are two directions. Think of the family tree with the parent at the top: going <b>up</b> (Circle to Shape) is <b>upcasting</b>, and going <b>down</b> (Shape to Circle) is <b>downcasting</b>." },
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
        { type: 'h', en: 'A cast is a second view, not a second object' },
        { type: 'p', en: "Many students think that <code>(Circle) s</code> builds a new Circle. It does not. No <code>new</code> is written, so no object is created. The cast only gives you a <b>second variable that looks at the same object</b> with a wider view: through <code>c</code> you may call <code>getRadius()</code>. Step through the picture.",
          ar: 'التحويل لا ينشئ كائنًا جديدًا، بل يعطينا نظرة ثانية إلى الكائن نفسه.' },
        { type: 'memory', title: 'Two views of the same Circle', code: J`
          Shape s = new Circle(2);
          Circle c = (Circle) s;
          Object o = s;
        `, frames: [
          { label: 'After <code>Shape s = new Circle(2);</code>', vars: [{ name: 's', type: 'Shape', ref: 'A' }], objects: [{ id: 'A', cls: 'Circle', fields: [{ name: 'radius', value: '2.0' }] }] },
          { label: 'After <code>Circle c = (Circle) s;</code> (no new object)', vars: [{ name: 's', type: 'Shape', ref: 'A' }, { name: 'c', type: 'Circle', ref: 'A' }], objects: [{ id: 'A', cls: 'Circle', fields: [{ name: 'radius', value: '2.0' }] }] },
          { label: 'After <code>Object o = s;</code> (an upcast to the top of every family)', vars: [{ name: 's', type: 'Shape', ref: 'A' }, { name: 'c', type: 'Circle', ref: 'A' }, { name: 'o', type: 'Object', ref: 'A' }], objects: [{ id: 'A', cls: 'Circle', fields: [{ name: 'radius', value: '2.0' }] }] }
        ], ar: 'ثلاثة متغيرات وثلاث نظرات، لكن الكائن واحد فقط.' },
        { type: 'table', head: ['Variable', 'Its type', 'May call', 'Object'], rows: [
          ['<code>o</code>', 'Object', '<code>toString()</code>, <code>equals()</code> …', 'the same Circle'],
          ['<code>s</code>', 'Shape', 'everything in Object + <code>name()</code>', 'the same Circle'],
          ['<code>c</code>', 'Circle', 'everything in Shape + <code>getRadius()</code>', 'the same Circle']
        ] },
        { type: 'h', en: 'Upcasting happens by itself' },
        { type: 'p', en: "You rarely write an upcast. Java does it for you whenever a subclass object goes into a superclass place: a variable, an array element or a <b>method parameter</b>. It is always safe, because a Circle really is a Shape." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Circle c = new Circle(3);
                  printName(c);          // upcast: Circle to Shape
                  Shape s = c;           // upcast again, no brackets
                  System.out.println(s == c);
              }

              static void printName(Shape s) {
                  System.out.println("Name: " + s.name());
              }
          }

          class Shape {
              public String name() { return "shape"; }
          }

          class Circle extends Shape {
              private double radius;
              public Circle(double radius) { this.radius = radius; }
              @Override
              public String name() { return "circle"; }
          }
        `, out: J`
          Name: circle
          true
        ` },
        { type: 'lines', rows: [
          ['printName(c);', 'The method wants a Shape. We pass a Circle. Java upcasts it automatically.'],
          ['Shape s = c;', 'Another upcast. No brackets are needed.'],
          ['s == c', '<code>==</code> on references asks: same object? Yes, so it prints <code>true</code>.']
        ], ar: 'التحويل للأعلى يحدث تلقائيًا عند تمرير كائن الابن إلى مكان من نوع الأب.' },
        { type: 'p', en: "So why would anyone downcast? Because we often store different objects in one general array to use one loop (Lesson 1). Then, for one special kind, we need a method that only that kind has, such as the load of a truck or the radius of a circle. The downcast gives us that wider view again." },
        { type: 'h', en: 'When a downcast goes wrong' },
        { type: 'p', en: "If you promise Java that a Shape is a Circle but it is really a Rectangle, the program stops with <code>ClassCastException</code>. The compiler cannot see this mistake, because it only checks types of variables. The error happens at run time.",
          ar: 'إذا كان الكائن الحقيقي ليس من النوع المطلوب يحدث ClassCastException وقت التشغيل.' },
        { type: 'analogy', title: 'Opening the wrong box', en: "A box is labelled \"Gift\". You say \"I am sure it contains a watch\" and open it. If it holds a book instead, your promise was wrong." },
        { type: 'code', code: J`
          Shape r = new Rectangle();
          Circle c = (Circle) r;     // compiles, but the program stops here
          System.out.println("never printed");
        ` },
        { type: 'note', kind: 'warn', en: "When this code runs, Java stops the program and prints a message like <code>Exception in thread \"main\" java.lang.ClassCastException: class Rectangle cannot be cast to class Circle</code>. The last line never runs. In Unit 6 you will learn how to handle such errors. For now, <b>prevent</b> them: ask before you cast.", ar: 'البرنامج يتوقف عند التحويل الخاطئ. الحل الآن: اسأل{{g:|ي}} قبل التحويل.' },
        { type: 'h', en: 'Ask first with instanceof' },
        { type: 'p', en: "<code>x instanceof Circle</code> is a question: \"Is x really a Circle?\" It gives <code>true</code> or <code>false</code>. Ask first, then cast. This is the safe way." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape[] shapes = { new Rectangle(), new Circle(5) };
                  for (Shape s : shapes) {
                      if (s instanceof Circle) {
                          Circle c = (Circle) s;
                          System.out.println("A circle with radius " + c.getRadius());
                      } else {
                          System.out.println("Not a circle, cast skipped");
                      }
                  }
              }
          }

          class Shape { }

          class Rectangle extends Shape { }

          class Circle extends Shape {
              private double radius;
              Circle(double radius) { this.radius = radius; }
              double getRadius() { return radius; }
          }
        `, out: J`
          Not a circle, cast skipped
          A circle with radius 5.0
        ` },
        { type: 'lines', rows: [
          ['s instanceof Circle', 'Round 1: false, because <code>s</code> points to a Rectangle. Round 2: true.'],
          ['else { ... }', 'For the Rectangle we skip the cast and print a message instead.'],
          ['Circle c = (Circle) s;', 'This line runs only when the answer was true, so the cast can never fail.'],
          ['c.getRadius()', 'Through the Circle view we may call the Circle-only method.']
        ], ar: 'نسأل بـ instanceof قبل التحويل لنتجنب الخطأ.' },
        { type: 'check', q: '<code>Animal a = new Animal();</code> What is <code>a instanceof Dog</code>?', options: ['true', 'false', 'a compile error', 'an exception'], answer: 1, explain: "The object is a plain Animal. It is not a Dog." },
        { type: 'note', kind: 'exam', en: "<code>instanceof</code> is also safe with <code>null</code>: if <code>s</code> is <code>null</code>, then <code>s instanceof Circle</code> is simply <code>false</code>. There is no object, so it is not a Circle.", ar: 'إذا كان المتغير null فإن instanceof تعطي false.' },
        { type: 'h', en: 'instanceof or getClass()?' },
        { type: 'table', head: ['Check', 'True when', 'Use'], rows: [
          ['<code>x instanceof Rectangle</code>', 'x is a Rectangle <b>or a subclass</b> (like Square)', 'before a downcast'],
          ['<code>x.getClass() == Rectangle.class</code>', 'x is <b>exactly</b> a Rectangle', 'strict match'],
          ['<code>x.getClass() == y.getClass()</code>', 'x and y have the same exact class', 'comparing two objects']
        ] },
        { type: 'note', kind: 'exam', en: "Newer Java (16+) allows <code>if (s instanceof Circle c)</code>. In this course use the classic form: ask with <code>instanceof</code>, then cast." },
        { type: 'h', en: 'Do not use instanceof instead of overriding' },
        { type: 'p', en: "<code>instanceof</code> is a tool for special cases. If you use it to choose what <b>every</b> type does, you are back to the long <code>if</code> chains of Lesson 1. Compare the two versions below. The second one asks each object to do its own job.",
          ar: 'لا تستخدم{{g:|ي}} instanceof لاختيار سلوك كل نوع؛ ضع الدالة في الأب وأعد تعريفها في الأبناء.' },
        { type: 'code', code: J`
          // Weak: must be edited for every new shape
          if (s instanceof Circle) {
              area = 3.14 * ((Circle) s).getRadius() * ((Circle) s).getRadius();
          } else if (s instanceof Square) {
              area = ((Square) s).getSide() * ((Square) s).getSide();
          }

          // Strong: each class overrides area()
          area = s.area();
        ` },
        { type: 'note', kind: 'tip', en: "A good rule: if <b>all</b> types have the ability, put the method in the superclass and override it. Use <code>instanceof</code> + cast only when <b>one</b> special type has an extra ability that the others do not have." },
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
          `, ar: 'نسأل instanceof أولًا ثم نحول، فلا يحدث خطأ. المجموع 500 + 800 = 1300.' },
        { type: 'steps', title: 'Worked example: a report on circles', problem: 'A drawing has circles and squares in one <code>Shape[]</code> array. Count the circles and find the largest radius. Only circles have <code>getRadius()</code>.',
          steps: [
            { en: 'Only <code>Circle</code> has a radius, so <code>getRadius()</code> lives in Circle, not in Shape.', code: J`
              class Circle extends Shape {
                  private double radius;
                  Circle(double radius) { this.radius = radius; }
                  double getRadius() { return radius; }
              }
            ` },
            { en: 'Make the array and two variables: a counter and the biggest radius so far.', code: J`
              Shape[] shapes = { new Circle(2), new Square(5), new Circle(7), new Square(1) };
              int circles = 0;
              double biggest = 0;
            ` },
            { en: 'In the loop, ask <code>instanceof Circle</code>. Only then count it and cast it.', code: J`
              if (s instanceof Circle) {
                  circles++;
                  Circle c = (Circle) s;
            ` },
            { en: 'Through the Circle view, compare its radius with the biggest one so far.', code: J`
                  if (c.getRadius() > biggest) {
                      biggest = c.getRadius();
                  }
            ` },
            { en: 'After the loop, print both results.', code: J`
              System.out.println("Circles: " + circles);
              System.out.println("Largest radius: " + biggest);
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Shape[] shapes = { new Circle(2), new Square(5), new Circle(7), new Square(1) };
                    int circles = 0;
                    double biggest = 0;
                    for (Shape s : shapes) {
                        if (s instanceof Circle) {
                            circles++;
                            Circle c = (Circle) s;
                            if (c.getRadius() > biggest) {
                                biggest = c.getRadius();
                            }
                        }
                    }
                    System.out.println("Circles: " + circles);
                    System.out.println("Largest radius: " + biggest);
                }
            }

            class Shape { }

            class Circle extends Shape {
                private double radius;
                Circle(double radius) { this.radius = radius; }
                double getRadius() { return radius; }
            }

            class Square extends Shape {
                private double side;
                Square(double side) { this.side = side; }
            }
          `, out: J`
            Circles: 2
            Largest radius: 7.0
          `, ar: 'نعدّ الدوائر فقط، ونحوّل بعد السؤال لنقرأ نصف القطر. أكبر نصف قطر هو 7.0.' }
      ],
      mistakes: [
        { title: 'Downcasting without checking', en: "The code compiles but may crash at run time.", code: J`
          Vehicle v = new Car();
          Truck t = (Truck) v;    // ClassCastException
        `, ar: 'اسأل{{g:|ي}} بـ instanceof قبل التحويل.' },
        { title: 'Casting unrelated classes', en: "A cast between classes that are not in the same family is a compile error.", code: J`
          String s = (String) new Car();   // compile error
        ` },
        { title: 'Using instanceof the wrong way round', en: "<code>animal instanceof Dog</code> asks about the object. Writing <code>Dog instanceof animal</code> is a syntax error.", code: J`
          if (Dog instanceof animal) { }   // error: object on the left, class on the right
          if (animal instanceof Dog) { }   // correct
        ` },
        { title: 'Thinking the cast changes the object', en: "A cast does not convert the object. It only changes what the variable promises. A Rectangle never becomes a Circle, and no new object is created." }
      ],
      remember: [
        "<b>Upcasting</b> (subclass to superclass) is automatic and safe.",
        "<b>Downcasting</b> (superclass to subclass) needs <code>(Type)</code> and can fail.",
        "A cast creates a <b>second view</b> of the same object, never a new object.",
        "A failed downcast throws <code>ClassCastException</code> at run time.",
        "Ask with <code>x instanceof Type</code> before you cast (<code>null instanceof Type</code> is false).",
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
          explain: "All objects are stored as Vehicle (upcasting). instanceof then finds the trucks, and the cast lets us call getLoad()." },
        { t: 'bug', q: "This program should print the total load of the trucks (800), but it stops with a <code>ClassCastException</code>. Tap the line with the bug.", qAr: 'البرنامج يتوقف بخطأ ClassCastException. أين الخطأ؟',
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Vehicle[] fleet = { new Truck(500), new Car(), new Truck(300) };
                    int total = 0;
                    for (Vehicle v : fleet) {
                        Truck t = (Truck) v;
                        total += t.getLoad();
                    }
                    System.out.println(total);
                }
            }
            class Vehicle { }
            class Car extends Vehicle { }
            class Truck extends Vehicle { int load; Truck(int l) { load = l; } int getLoad() { return load; } }
          `, bug: 6,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Vehicle[] fleet = { new Truck(500), new Car(), new Truck(300) };
                    int total = 0;
                    for (Vehicle v : fleet) {
                        if (v instanceof Truck) {
                            Truck t = (Truck) v;
                            total += t.getLoad();
                        }
                    }
                    System.out.println(total);
                }
            }
            class Vehicle { }
            class Car extends Vehicle { }
            class Truck extends Vehicle { int load; Truck(int l) { load = l; } int getLoad() { return load; } }
          `,
          hint: "Look at the second element of the array. Is every vehicle a truck?",
          explain: "In the second round <code>v</code> points to a Car. Line 6 casts it to Truck without asking, so the program stops there. The fix asks <code>v instanceof Truck</code> first: the Car is skipped and the total is 500 + 300 = 800.",
          explainAr: 'السيارة ليست شاحنة، لذلك فشل التحويل. اسأل{{g:|ي}} بـ instanceof أولًا.' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape s = new Circle();
                  Circle c = (Circle) s;
                  Shape n = null;
                  System.out.println(s == c);
                  System.out.println(n instanceof Circle);
                  System.out.println(s instanceof Shape);
              }
          }

          class Shape { }

          class Circle extends Shape { }
        `, answer: J`
          true
          false
          true
        `, explain: "The cast does not create a new object, so <code>s</code> and <code>c</code> point to the same Circle (true). <code>null</code> is not an object of any class (false). A Circle is a Shape (true).", explainAr: 'التحويل لا ينشئ كائنًا جديدًا، و null ليست كائنًا.' },
        { t: 'mcq', q: "After these lines run, how many Circle objects exist?", code: J`
          Shape s = new Circle(4);
          Circle c = (Circle) s;
          Object o = c;
        `, options: ['1', '2', '3', '0'], answer: 0, explain: "<code>new</code> appears only once, so only one object exists. <code>s</code>, <code>c</code> and <code>o</code> are three views of it." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 3
    {
      title: 'Abstract classes and abstract methods',
      titleAr: 'الأصناف والدوال المجردة',
      minutes: 40,
      body: [
        { type: 'h', en: 'A method with no real answer' },
        { type: 'p', en: "Think about a general <code>Shape</code>. What is its area? There is no answer: a circle, a rectangle and a triangle each use a different formula. Writing <code>return 0;</code> in Shape is a fake answer. A better idea: say \"every shape must have an area, but I will not say how\". In Java this is an <b>abstract method</b>. (You saw the idea briefly in Unit 2; now you will use it with polymorphism.)",
          ar: 'الدالة المجردة تعلن أن كل صنف ابن يجب أن يوفر هذه الدالة دون أن نكتب جسمها.' },
        { type: 'code', code: J`
          class Shape {
              public double area() { return 0; }    // a fake answer
          }

          class Circle extends Shape {
              // forgot to write area(): no error, every circle has area 0.0
          }
        ` },
        { type: 'p', en: "The fake version has two problems. First, a plain <code>new Shape()</code> can be created, and its area 0.0 means nothing. Second, if someone writes a new subclass and forgets <code>area()</code>, the compiler says nothing and the totals are silently wrong. An abstract method solves <b>both</b> problems: nobody can create a plain Shape, and the compiler <b>forces</b> every normal subclass to write <code>area()</code>.",
          ar: 'الدالة المجردة تمنع الإجابة الوهمية، وتجبر كل صنف ابن على كتابة الدالة.' },
        { type: 'analogy', title: 'A job advert', en: "A company advert says: \"We need a driver.\" It does not say who. The advert describes the job, but nobody can sit in an advert and drive. Someone real has to be hired. An abstract class is the advert. The subclasses are the people hired." },
        { type: 'analogy', title: 'Required fields in a form', en: "An online registration form marks some fields with a red star: name, ID number, phone. The website will not let you press Submit until every starred field is filled. An abstract method is a starred field. The compiler will not accept a normal subclass until it fills in every abstract method.",
          ar: 'الدالة المجردة مثل حقل إلزامي في نموذج: لا يُقبل الصنف حتى يكتبها.' },
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
        { type: 'h', en: 'An array of an abstract type' },
        { type: 'p', en: "<code>new Shape[3]</code> does not create any Shape object. It creates <b>one array</b> with three empty slots. Each slot can hold a reference to any concrete subclass. Step through the picture: the array has the type <code>Shape[]</code>, but every object in it is a Circle, a Rectangle or a Triangle. There is never a plain Shape object.",
          ar: 'المصفوفة من نوع Shape لكن كل كائن فيها من صنف ابن حقيقي.' },
        { type: 'memory', title: 'Shape references to three different objects', code: J`
          Shape[] shapes = new Shape[3];
          shapes[0] = new Circle(1);
          shapes[1] = new Rectangle(3, 4);
          shapes[2] = new Triangle(3, 4, 5);
        `, frames: [
          { label: 'After <code>Shape[] shapes = new Shape[3];</code> (empty slots)', vars: [{ name: 'shapes', type: 'Shape[]', ref: 'S' }], objects: [
            { id: 'S', cls: 'Shape[]', fields: [{ name: '[0]', value: 'null' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }] }] },
          { label: 'After <code>shapes[0] = new Circle(1);</code>', vars: [{ name: 'shapes', type: 'Shape[]', ref: 'S' }], objects: [
            { id: 'S', cls: 'Shape[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', value: 'null' }, { name: '[2]', value: 'null' }] },
            { id: 'A', cls: 'Circle', fields: [{ name: 'radius', value: '1.0' }] }] },
          { label: 'After <code>shapes[1] = new Rectangle(3, 4);</code>', vars: [{ name: 'shapes', type: 'Shape[]', ref: 'S' }], objects: [
            { id: 'S', cls: 'Shape[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', ref: 'B' }, { name: '[2]', value: 'null' }] },
            { id: 'A', cls: 'Circle', fields: [{ name: 'radius', value: '1.0' }] },
            { id: 'B', cls: 'Rectangle', fields: [{ name: 'width', value: '3.0' }, { name: 'height', value: '4.0' }] }] },
          { label: 'After <code>shapes[2] = new Triangle(3, 4, 5);</code>', vars: [{ name: 'shapes', type: 'Shape[]', ref: 'S' }], objects: [
            { id: 'S', cls: 'Shape[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', ref: 'B' }, { name: '[2]', ref: 'C' }] },
            { id: 'A', cls: 'Circle', fields: [{ name: 'radius', value: '1.0' }] },
            { id: 'B', cls: 'Rectangle', fields: [{ name: 'width', value: '3.0' }, { name: 'height', value: '4.0' }] },
            { id: 'C', cls: 'Triangle', fields: [{ name: 'a', value: '3.0' }, { name: 'b', value: '4.0' }, { name: 'c', value: '5.0' }] }] }
        ], ar: 'كل خانة في المصفوفة سهم إلى كائن مختلف، ولا يوجد كائن Shape عادي.' },
        { type: 'p', en: "Now <code>shapes[i].area()</code> is always safe: the compiler knows every Shape has <code>area()</code> (it is declared in Shape), and at run time each object runs its own formula." },
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
        { type: 'h', en: 'Fields and a constructor in an abstract class' },
        { type: 'p', en: "If you cannot write <code>new Shape(...)</code>, why would Shape need a constructor? Because every subclass object <b>contains</b> the Shape part. Every shape has a colour, so the colour field and its constructor live in Shape and are written once. The subclass constructor calls it with <code>super(...)</code>, as you learned in Unit 4." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape s = new Circle("red", 1);
                  System.out.println(s.getColour());
                  System.out.printf("%.2f%n", s.area());
              }
          }

          abstract class Shape {
              private String colour;

              public Shape(String colour) { this.colour = colour; }

              public String getColour() { return colour; }

              public abstract double area();
          }

          class Circle extends Shape {
              private double radius;

              public Circle(String colour, double radius) {
                  super(colour);
                  this.radius = radius;
              }

              @Override
              public double area() { return Math.PI * radius * radius; }
          }
        `, out: J`
          red
          3.14
        ` },
        { type: 'lines', rows: [
          ['public Shape(String colour)', 'A normal constructor in an abstract class. It is never called with <code>new Shape</code>.'],
          ['super(colour);', 'The Circle constructor runs the Shape constructor first, to fill in the shared colour field.'],
          ['s.getColour()', 'A normal method, written once in Shape, used by every subclass.'],
          ['printf("%.2f%n", s.area())', 'Circle\'s <code>area()</code> runs: pi times 1 times 1, printed with two decimals: 3.14.']
        ], ar: 'المُنشئ في الصنف المجرد يُستدعى من الابن بواسطة super.' },
        { type: 'check', q: 'An abstract class has a constructor <code>Shape(String colour)</code>. Who can call it?', options: ['Anyone, with <code>new Shape("red")</code>', 'Only subclass constructors, with <code>super(...)</code>', 'Nobody: abstract classes cannot have constructors', 'Only the main method'], answer: 1, explain: "<code>new Shape(...)</code> is not allowed, but a subclass constructor can run it with <code>super(...)</code>." },
        { type: 'h', en: 'Rules to remember' },
        { type: 'list', items: [
          "A class with an abstract method must be declared <code>abstract</code>.",
          "You cannot use <code>new</code> on an abstract class.",
          "A concrete subclass must override <b>all</b> abstract methods, or it must be abstract too.",
          "An abstract class can have fields, constructors and normal methods. Subclasses call the constructor with <code>super(...)</code>.",
          "A class can be <code>abstract</code> even with no abstract method, only to stop people from creating it."
        ], ar: 'الصنف الابن غير المجرد يجب أن ينفذ كل الدوال المجردة.' },
        { type: 'note', kind: 'exam', en: "A <b>concrete</b> class is a normal class: it has no missing methods, so you may use <code>new</code> on it. Exam questions often ask: \"Which classes are concrete?\" Look for the word <code>abstract</code> in the class header.", ar: 'الصنف الملموس (concrete) هو صنف عادي يمكن إنشاء كائنات منه.' },
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
          `, ar: 'الاسم مشترك في الصنف المجرد، وطريقة حساب الراتب تختلف في كل صنف ابن: 50 × 80 = 4000.' },
        { type: 'steps', title: 'Worked example: grass for a garden', problem: 'A family garden has round plots and rectangular plots. Grass costs 12 riyals per square metre. Print the area of every plot and the total cost of the grass, with two decimals.',
          steps: [
            { en: 'Every plot has a name and an area, but the area formula differs. So the name is a normal field and <code>area()</code> is abstract.', code: J`
              abstract class Plot {
                  private String name;
                  Plot(String name) { this.name = name; }
                  String getName() { return name; }
                  abstract double area();
              }
            ` },
            { en: 'A round plot passes its name to <code>super</code> and uses pi times r squared.', code: J`
              class RoundPlot extends Plot {
                  private double radius;
                  RoundPlot(double radius) {
                      super("Round plot");
                      this.radius = radius;
                  }
                  @Override
                  double area() { return Math.PI * radius * radius; }
              }
            ` },
            { en: 'A rectangular plot uses width times length.', code: J`
              @Override
              double area() { return width * length; }
            ` },
            { en: 'In <code>main</code>, one loop prints each plot with <code>printf</code> and adds up the areas. Circle areas have many decimals, so <code>%.2f</code> keeps the output tidy.', code: J`
              for (Plot p : garden) {
                  System.out.printf("%s: %.2f m2%n", p.getName(), p.area());
                  total += p.area();
              }
              System.out.printf("Grass cost: %.2f SAR%n", total * 12);
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Plot[] garden = { new RoundPlot(2), new RectPlot(4, 3), new RoundPlot(1) };
                    double total = 0;
                    for (Plot p : garden) {
                        System.out.printf("%s: %.2f m2%n", p.getName(), p.area());
                        total += p.area();
                    }
                    System.out.printf("Grass cost: %.2f SAR%n", total * 12);
                }
            }

            abstract class Plot {
                private String name;
                Plot(String name) { this.name = name; }
                String getName() { return name; }
                abstract double area();
            }

            class RoundPlot extends Plot {
                private double radius;
                RoundPlot(double radius) {
                    super("Round plot");
                    this.radius = radius;
                }
                @Override
                double area() { return Math.PI * radius * radius; }
            }

            class RectPlot extends Plot {
                private double width, length;
                RectPlot(double width, double length) {
                    super("Rectangle plot");
                    this.width = width;
                    this.length = length;
                }
                @Override
                double area() { return width * length; }
            }
          `, out: J`
            Round plot: 12.57 m2
            Rectangle plot: 12.00 m2
            Round plot: 3.14 m2
            Grass cost: 332.50 SAR
          `, ar: 'الحقل name مشترك، والمساحة مجردة. المجموع تقريبًا 27.71 مترًا مربعًا × 12 = 332.50 ريالًا.' }
      ],
      mistakes: [
        { title: 'Creating an object of an abstract class', en: "<code>new Shape()</code> is a compile error.", code: J`
          Shape s = new Shape();   // error: Shape is abstract
        `, ar: 'لا يمكن عمل new من صنف مجرد.' },
        { title: 'Writing a body for an abstract method', en: "An abstract method ends with <code>;</code>. A body with braces is an error.", code: J`
          public abstract double area() { return 0; }   // error
        ` },
        { title: 'Forgetting to implement an abstract method', en: "A concrete subclass must provide every abstract method, or the compiler stops. A spelling mistake counts as forgetting: <code>getArea()</code> is not <code>area()</code>.", code: J`
          class Circle extends Shape {     // error: Circle does not override area()
              public double getArea() { return 3.14; }
          }
        ` },
        { title: 'Forgetting the word abstract on the class', en: "If a class has an abstract method, the class itself must say <code>abstract</code> too.", code: J`
          class Shape {                        // error: must be abstract class Shape
              public abstract double area();
          }
        ` }
      ],
      remember: [
        "An <b>abstract method</b> has no body: <code>public abstract double area();</code>",
        "A class with an abstract method is an <b>abstract class</b>; you cannot use <code>new</code> on it.",
        "Concrete subclasses must override every abstract method.",
        "Abstract classes can have fields, constructors and normal methods; subclasses call the constructor with <code>super(...)</code>.",
        "You can still declare variables and arrays of the abstract type: <code>Shape[] shapes</code>.",
        "Normal methods in the abstract class may call the abstract ones; dynamic binding fills in the right version."
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
          explain: "Rectangle supplies the missing method, so it is concrete and we can use new on it." },
        { t: 'bug', q: "This program does not compile. Tap the line with the bug.", qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Shape s = new Shape();
                    System.out.println(s.area());
                }
            }
            abstract class Shape {
                public abstract double area();
            }
            class Square extends Shape {
                public double area() { return 4.0; }
            }
          `, bug: 3,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Shape s = new Square();
                    System.out.println(s.area());
                }
            }
            abstract class Shape {
                public abstract double area();
            }
            class Square extends Shape {
                public double area() { return 4.0; }
            }
          `,
          hint: "Which class is abstract?",
          explain: "<code>Shape</code> is abstract, so <code>new Shape()</code> is a compile error. A Shape <b>variable</b> is fine, but the object must come from a concrete subclass. With <code>new Square()</code> the program prints <code>4.0</code>.",
          explainAr: 'المتغير من نوع Shape مسموح، لكن الكائن يجب أن يكون من صنف ملموس مثل Square.' },
        { t: 'bug', q: "The compiler says: <i>Intern is not abstract and does not override abstract method monthlyPay()</i>. Tap the line with the bug.", qAr: 'المترجم يقول إن Intern لم يكتب الدالة monthlyPay. أين الخطأ؟',
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Employee e = new Intern();
                    System.out.println(e.monthlyPay());
                }
            }
            abstract class Employee {
                abstract double monthlyPay();
            }
            class Intern extends Employee {
                private double allowance = 3000;
                double monthlypay() { return allowance; }
            }
          `, bug: [12, 10],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Employee e = new Intern();
                    System.out.println(e.monthlyPay());
                }
            }
            abstract class Employee {
                abstract double monthlyPay();
            }
            class Intern extends Employee {
                private double allowance = 3000;
                @Override
                double monthlyPay() { return allowance; }
            }
          `,
          hint: "Compare the method name in Intern with the abstract method in Employee, letter by letter.",
          explain: "<code>monthlypay</code> (small p) is a different method, so the abstract <code>monthlyPay</code> is still missing and the concrete class Intern does not compile. The compiler points at the class header (line 10), but the real mistake is the name on line 12. With the right name (and <code>@Override</code>), the program prints <code>3000.0</code>.",
          explainAr: 'الاسم monthlypay لا يطابق monthlyPay، لذلك بقيت الدالة المجردة بلا تنفيذ.' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Pet p = new Cat("Lulu");
                  System.out.println(p.intro());
              }
          }

          abstract class Pet {
              private String name;

              Pet(String name) {
                  this.name = name;
                  System.out.println("Pet created");
              }

              String intro() { return name + " says " + speak(); }

              abstract String speak();
          }

          class Cat extends Pet {
              Cat(String name) { super(name); }

              @Override
              String speak() { return "Meow"; }
          }
        `, answer: J`
          Pet created
          Lulu says Meow
        `, explain: "<code>new Cat(\"Lulu\")</code> runs the Pet constructor through <code>super(name)</code>, which prints <code>Pet created</code>. Then <code>intro()</code> (written in Pet) calls <code>speak()</code>, and dynamic binding runs Cat's version.", explainAr: 'مُنشئ الصنف المجرد يعمل عبر super، ثم تعمل speak الخاصة بـ Cat.' }
      ]
    },

    // ---------------------------------------------------------------- Lesson 4
    {
      title: 'Interfaces',
      titleAr: 'الواجهات',
      minutes: 40,
      body: [
        { type: 'h', en: 'Why interfaces?' },
        { type: 'p', en: "A class can extend only <b>one</b> class. But real things can do many jobs: a smartphone can be charged <i>and</i> take photos. An <b>interface</b> lists abilities (method headers) without any code. A class that <code>implements</code> the interface promises to provide those methods. A class may implement as many interfaces as it wants.",
          ar: 'الواجهة قائمة بالإمكانيات بلا كود، والصنف الذي ينفذها يلتزم بكتابة دوالها. يمكن تنفيذ أكثر من واجهة.' },
        { type: 'p', en: "Interfaces also connect classes that are <b>not in the same family</b>. An invoice, a salary slip and a traffic fine have nothing in common as objects, but all of them can be <i>paid</i>. With an interface, one loop can pay all of them. An abstract class answers \"what <b>is</b> it?\"; an interface answers \"what <b>can</b> it do?\"." },
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
        { type: 'h', en: 'Why only one parent class?' },
        { type: 'p', en: "Imagine Java allowed <code>class SmartWatch extends Phone, Watch</code>, and both parents had a method <code>showTime()</code> with <b>different code</b>. Which one should run for a SmartWatch? There is no good answer. This confusion is called the <b>diamond problem</b>, so Java allows only one parent class." },
        { type: 'p', en: "An interface method has no code, only a promise. If two interfaces both promise <code>showTime()</code>, there is nothing to clash: the class writes the method <b>once</b> and keeps both promises. That is how Java gives you <b>multiple inheritance through interfaces</b>: one parent class, but as many abilities (interfaces) as you need.",
          ar: 'يمنع Java وراثة صنفين لتجنب تعارض الكود، لكنه يسمح بعدة واجهات لأنها وعود بلا كود.' },
        { type: 'analogy', title: 'One family, many certificates', en: "You belong to one family: that is your parent class, and you inherit a lot from it. But you can also hold many certificates: first aid, driving, swimming. Each certificate says what you <i>can do</i>. Nobody is confused by having many certificates, because each one is only a promise of a skill. Interfaces are the certificates.",
          ar: 'لك عائلة واحدة (صنف أب واحد) وشهادات كثيرة (واجهات).' },
        { type: 'h', en: 'Implementing several interfaces' },
        { type: 'p', en: "Separate the interface names with commas. Below, <code>SmartPhone</code> is both <code>Chargeable</code> and <code>Camera</code>. The same object can be seen through either interface. Interface fields are constants (<code>public static final</code>)." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  SmartPhone p = new SmartPhone("Model A", 80);
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
          Model A battery: 95%
          Model A battery: 100%
          Photo #1 taken
          98%
          Photo #2 taken
          100
        ` },
        { type: 'lines', title: 'Trace the battery', rows: [
          ['new SmartPhone("Model A", 80)', 'Battery starts at 80.'],
          ['p.charge(15)', '80 + 15 = 95. <code>Math.min(100, 95)</code> is 95. Prints 95%.'],
          ['p.charge(30)', '95 + 30 = 125, but <code>Math.min(100, 125)</code> is 100. The battery cannot go over MAX_LEVEL.'],
          ['p.takePhoto()', 'Photos become 1, battery 100 - 2 = 98.'],
          ['cam.takePhoto()', 'Second photo, battery 96 (not printed). Then <code>Chargeable.MAX_LEVEL</code> prints 100.']
        ], ar: 'نفس الكائن يمكن النظر إليه كـ Chargeable أو كـ Camera.' },
        { type: 'memory', title: 'One phone, three views', code: J`
          SmartPhone p = new SmartPhone("Model A", 80);
          Chargeable c = p;
          Camera cam = p;
        `, frames: [
          { label: 'After <code>SmartPhone p = new SmartPhone("Model A", 80);</code>', vars: [{ name: 'p', type: 'SmartPhone', ref: 'A' }], objects: [{ id: 'A', cls: 'SmartPhone', fields: [{ name: 'model', value: '"Model A"' }, { name: 'battery', value: '80' }, { name: 'photos', value: '0' }] }] },
          { label: 'After <code>Chargeable c = p;</code>', vars: [{ name: 'p', type: 'SmartPhone', ref: 'A' }, { name: 'c', type: 'Chargeable', ref: 'A' }], objects: [{ id: 'A', cls: 'SmartPhone', fields: [{ name: 'model', value: '"Model A"' }, { name: 'battery', value: '80' }, { name: 'photos', value: '0' }] }] },
          { label: 'After <code>Camera cam = p;</code>', vars: [{ name: 'p', type: 'SmartPhone', ref: 'A' }, { name: 'c', type: 'Chargeable', ref: 'A' }, { name: 'cam', type: 'Camera', ref: 'A' }], objects: [{ id: 'A', cls: 'SmartPhone', fields: [{ name: 'model', value: '"Model A"' }, { name: 'battery', value: '80' }, { name: 'photos', value: '0' }] }] }
        ], ar: 'ثلاثة متغيرات من أنواع مختلفة تشير إلى هاتف واحد.' },
        { type: 'table', head: ['Variable', 'Type', 'May call'], rows: [
          ['<code>p</code>', 'SmartPhone', '<code>charge</code>, <code>getBatteryLevel</code>, <code>takePhoto</code>'],
          ['<code>c</code>', 'Chargeable', '<code>charge</code>, <code>getBatteryLevel</code> only'],
          ['<code>cam</code>', 'Camera', '<code>takePhoto</code> only']
        ] },
        { type: 'p', en: "The rule of Lesson 1 still holds: the variable type decides what you may call. <code>cam.charge(10)</code> is a compile error, even though the phone can charge, because the Camera view does not show <code>charge</code>." },
        { type: 'check', q: 'Can a class write <code>class A extends B, C</code> for two classes B and C?', options: ['Yes', 'No, only one class; but many interfaces with implements', 'Only if B and C are abstract', 'Only inside main'], answer: 1, explain: "Java allows one superclass but many interfaces." },
        { type: 'check', q: '<code>Camera cam = new SmartPhone("Model A", 80);</code> Which call compiles?', options: ['<code>cam.takePhoto()</code>', '<code>cam.charge(10)</code>', '<code>cam.getBatteryLevel()</code>', 'All three'], answer: 0, explain: "The variable type is Camera, and Camera only has <code>takePhoto()</code>." },
        { type: 'h', en: 'Abstract class or interface?' },
        { type: 'table', head: ['', 'Abstract class', 'Interface'], rows: [
          ['Keyword', '<code>extends</code> (only one)', '<code>implements</code> (many)'],
          ['Fields', 'Any fields', 'Only constants (<code>public static final</code>)'],
          ['Constructors', 'Yes', 'No'],
          ['Methods', 'Abstract and normal', 'Abstract (plus default and static ones, Lesson 9)'],
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
          `, ar: 'الفاتورة وكشف الراتب لا يرثان من صنف واحد، لكن كلاهما Payable. 250 + 3500 = 3750.' },
        { type: 'steps', title: 'Worked example: a charging station', problem: 'A charging station at the university charges laptops and electric scooters. They are not in the same class family, but both are <code>Chargeable</code>. A scooter charges at half speed. Charge every device by 30% with <b>one</b> method and print the new levels.',
          steps: [
            { en: 'The interface lists what the station needs from every device: charge it, read the level, and get a name.', code: J`
              interface Chargeable {
                  int MAX_LEVEL = 100;
                  void charge(int percent);
                  int getBatteryLevel();
                  String name();
              }
            ` },
            { en: '<code>Laptop</code> implements it. All methods are <code>public</code>.', code: J`
              class Laptop implements Chargeable {
                  private int battery;
                  Laptop(int battery) { this.battery = battery; }
                  public void charge(int percent) { battery = Math.min(MAX_LEVEL, battery + percent); }
                  public int getBatteryLevel() { return battery; }
                  public String name() { return "Laptop"; }
              }
            ` },
            { en: '<code>Scooter</code> implements the same interface in its own way: it adds only half of the percent.', code: J`
              public void charge(int percent) { battery = Math.min(MAX_LEVEL, battery + percent / 2); }
            ` },
            { en: 'Write one static method with a <code>Chargeable[]</code> parameter. It works for any class that implements the interface, now and in the future.', code: J`
              static void chargeAll(Chargeable[] items, int percent) {
                  for (Chargeable c : items) {
                      c.charge(percent);
                      System.out.println(c.name() + ": " + c.getBatteryLevel() + "%");
                  }
              }
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Chargeable[] station = { new Laptop(40), new Scooter(10), new Laptop(95) };
                    chargeAll(station, 30);
                }

                static void chargeAll(Chargeable[] items, int percent) {
                    for (Chargeable c : items) {
                        c.charge(percent);
                        System.out.println(c.name() + ": " + c.getBatteryLevel() + "%");
                    }
                }
            }

            interface Chargeable {
                int MAX_LEVEL = 100;
                void charge(int percent);
                int getBatteryLevel();
                String name();
            }

            class Laptop implements Chargeable {
                private int battery;
                Laptop(int battery) { this.battery = battery; }
                public void charge(int percent) { battery = Math.min(MAX_LEVEL, battery + percent); }
                public int getBatteryLevel() { return battery; }
                public String name() { return "Laptop"; }
            }

            class Scooter implements Chargeable {
                private int battery;
                Scooter(int battery) { this.battery = battery; }
                public void charge(int percent) { battery = Math.min(MAX_LEVEL, battery + percent / 2); }
                public int getBatteryLevel() { return battery; }
                public String name() { return "Scooter"; }
            }
          `, out: J`
            Laptop: 70%
            Scooter: 25%
            Laptop: 100%
          `, ar: 'دالة واحدة تشحن أي جهاز ينفذ Chargeable: 40+30=70، والسكوتر 10+15=25، والثالث لا يتجاوز 100.' }
      ],
      mistakes: [
        { title: 'Forgetting public in the implementing method', en: "Interface methods are public, so the class method must be public too.", code: J`
          class Invoice implements Payable {
              double amountDue() { return 0; }   // error: weaker access
          }
        `, ar: 'الدالة المنفذة يجب أن تكون public.' },
        { title: 'Using new on an interface', en: "<code>new Payable()</code> is an error. Create an object of a class that implements it.", code: J`
          Payable p = new Payable();   // error
        ` },
        { title: 'Not implementing every method', en: "If a method of the interface is missing, the class does not compile (unless it is abstract).", code: J`
          class Phone implements Chargeable {     // error: getBatteryLevel() is missing
              public void charge(int percent) { }
          }
        ` },
        { title: 'Using extends for an interface', en: "A class <b>implements</b> an interface. <code>class Invoice extends Payable</code> is an error. When a class has both, <code>extends</code> comes first: <code>class A extends B implements C</code>." }
      ],
      remember: [
        "An interface lists method headers: what an object <b>can do</b>.",
        "A class uses <code>implements</code> and must write every method as <code>public</code>.",
        "One class can implement many interfaces: <code>implements A, B</code>. This is multiple inheritance through interfaces.",
        "Interface fields are constants (<code>public static final</code>).",
        "You can use an interface as a variable or parameter type, but you cannot use <code>new</code> on it.",
        "Unrelated classes can share an interface, so one loop or one method can handle them all."
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
          explain: "Salary keeps the promise of the interface, so a Salary can be used as a Payable." },
        { t: 'bug', q: "This program does not compile. Tap the line with the bug.", qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Payable p = new Fine(150);
                    System.out.println(p.amount());
                }
            }
            interface Payable {
                double amount();
            }
            class Fine implements Payable {
                private double value;
                Fine(double value) { this.value = value; }
                double amount() { return value; }
            }
          `, bug: 13,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Payable p = new Fine(150);
                    System.out.println(p.amount());
                }
            }
            interface Payable {
                double amount();
            }
            class Fine implements Payable {
                private double value;
                Fine(double value) { this.value = value; }
                public double amount() { return value; }
            }
          `,
          hint: "Every method in an interface is automatically public. What about the method in the class?",
          explain: "<code>amount()</code> in the interface is public. In <code>Fine</code> it has no modifier, which is weaker than public, so the compiler refuses it (\"attempting to assign weaker access privileges\"). Writing <code>public</code> fixes it, and the program prints <code>150.0</code>.",
          explainAr: 'دوال الواجهة public دائمًا، فيجب أن تكون الدالة في الصنف public أيضًا.' },
        { t: 'mcq', q: "Why does Java allow a class to implement many interfaces but extend only one class?", options: ['Interfaces are faster', 'Interface methods have no code, so there is no clash between two versions of the same method', 'Classes cannot have methods', 'Because interfaces cannot be used as types'], answer: 1, explain: "Two parent classes could have two different bodies for the same method (the diamond problem). Interface methods are only promises, so the class writes each method once." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Camera cam = new Phone();
                  System.out.println(cam instanceof Chargeable);
                  Chargeable c = (Chargeable) cam;
                  c.charge(20);
                  cam.takePhoto();
              }
          }

          interface Chargeable { void charge(int p); }

          interface Camera { void takePhoto(); }

          class Phone implements Chargeable, Camera {
              private int battery = 50;

              public void charge(int p) {
                  battery += p;
                  System.out.println("Battery " + battery);
              }

              public void takePhoto() {
                  battery -= 5;
                  System.out.println("Click, battery " + battery);
              }
          }
        `, answer: J`
          true
          Battery 70
          Click, battery 65
        `, explain: "The object is a Phone, which is also Chargeable (true). The cast gives a Chargeable view of the <b>same</b> phone: 50 + 20 = 70. Then the Camera view takes a photo on the same object: 70 - 5 = 65.", explainAr: 'كل المتغيرات تشير إلى الهاتف نفسه، لذلك تتغير البطارية نفسها.' },
        { t: 'code', q: "A rental scooter is both <code>Chargeable</code> and <code>Rentable</code>. Complete the class <code>Scooter</code>. <code>charge(p)</code> adds <code>p</code> to the battery but never above 100. <code>price(minutes)</code> returns 3 riyals to unlock plus 0.5 riyal per minute. Read the start battery and the minutes, then print the lines shown in the tests. No prompts.", qAr: 'أكمل الصنف Scooter الذي ينفذ واجهتين.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int battery = sc.nextInt();
                    int minutes = sc.nextInt();
                    Scooter s = new Scooter(battery);
                    Chargeable c = s;
                    Rentable r = s;
                    c.charge(30);
                    System.out.println("Battery: " + c.getBattery());
                    System.out.println("Price: " + r.price(minutes));
                }
            }

            interface Chargeable {
                void charge(int p);
                int getBattery();
            }

            interface Rentable {
                double price(int minutes);
            }

            // TODO: class Scooter implements Chargeable, Rentable
          `,
          tests: [{ stdin: '50 30', expected: 'Battery: 80\nPrice: 18.0' }, { stdin: '90 10', expected: 'Battery: 100\nPrice: 8.0' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int battery = sc.nextInt();
                    int minutes = sc.nextInt();
                    Scooter s = new Scooter(battery);
                    Chargeable c = s;
                    Rentable r = s;
                    c.charge(30);
                    System.out.println("Battery: " + c.getBattery());
                    System.out.println("Price: " + r.price(minutes));
                }
            }

            interface Chargeable {
                void charge(int p);
                int getBattery();
            }

            interface Rentable {
                double price(int minutes);
            }

            class Scooter implements Chargeable, Rentable {
                private int battery;

                Scooter(int battery) { this.battery = battery; }

                public void charge(int p) { battery = Math.min(100, battery + p); }

                public int getBattery() { return battery; }

                public double price(int minutes) { return 3 + 0.5 * minutes; }
            }
          `,
          hint: "Write <code>implements Chargeable, Rentable</code>, a battery field, a constructor, and three <code>public</code> methods.",
          explain: "One class keeps the promises of two interfaces. 50 + 30 = 80; 3 + 0.5 * 30 = 18.0. In the second test 90 + 30 is capped at 100, and 3 + 5 = 8.0." }
      ]
    },
    // ---------------------------------------------------------------- Lesson 5
    {
      title: 'Comparable: sorting your own objects',
      titleAr: 'الواجهة Comparable: ترتيب كائناتك',
      minutes: 40,
      body: [
        { type: 'h', en: 'Why does Java need a rule for ordering?' },
        { type: 'p', en: "Sorted lists are everywhere: the honour list with the best GPA first, products from the cheapest, today's lectures from the earliest. Java knows how to sort numbers and words. But how can it sort <code>Student</code> objects? By name? By GPA? Java cannot guess. You must give it a rule. The interface <code>Comparable&lt;T&gt;</code> is how you give that rule. It has one method: <code>int compareTo(T other)</code>.",
          ar: 'لترتيب كائناتك يجب أن تعطي Java قاعدة المقارنة عبر Comparable.' },
        { type: 'p', en: "<code>Comparable</code> is an interface, just like those in Lesson 4. A class that implements it promises one ability: \"I can compare myself with another object of my class.\" The <code>&lt;Student&gt;</code> part tells Java <i>what</i> we compare with. (You will learn more about these angle brackets in Unit 8.)" },
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
        { type: 'h', en: 'Only the sign matters' },
        { type: 'p', en: "<code>String</code> already implements <code>Comparable</code>, so you can see the rule with words. The numbers it returns can be -1, 25 or anything else. Do not try to understand the size of the number. Only ask: is it <b>negative</b>, <b>zero</b> or <b>positive</b>?",
          ar: 'المهم هو الإشارة فقط: سالب أو صفر أو موجب.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println("Ali".compareTo("Badr"));
                  System.out.println("Sara".compareTo("Sara"));
                  System.out.println("Zaid".compareTo("Amal"));
              }
          }
        `, out: J`
          -1
          0
          25
        ` },
        { type: 'lines', rows: [
          ['"Ali".compareTo("Badr")', 'A comes before B in the alphabet: negative (-1).'],
          ['"Sara".compareTo("Sara")', 'The same text: zero.'],
          ['"Zaid".compareTo("Amal")', 'Z comes after A: positive. It happens to be 25 (Z is 25 letters after A), but only the sign is important.']
        ], ar: 'Ali قبل Badr فالنتيجة سالبة، و Zaid بعد Amal فالنتيجة موجبة.' },
        { type: 'note', kind: 'warn', en: "String comparison looks at character codes: every capital letter comes before every small letter, so <code>\"Zaid\"</code> comes before <code>\"ali\"</code>. Write names with the same capitals to get a normal alphabetical order." },
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
        { type: 'analogy', title: 'A referee with two players', en: "In a tournament, a referee never looks at all the players at once. He looks at <b>two</b> players, decides who goes first, then looks at two more. <code>Arrays.sort</code> works the same way: it picks two objects, calls <code>a.compareTo(b)</code>, and moves them according to the sign. After enough comparisons, the whole array is in order. You never call <code>compareTo</code> yourself; <code>Arrays.sort</code> calls it for you.",
          ar: 'Arrays.sort تقارن كائنين في كل مرة باستدعاء compareTo، حتى يترتب الكل.' },
        { type: 'p', en: "What does sorting change in memory? The Student objects do <b>not</b> move and do <b>not</b> change. Only the arrows in the array slots are rearranged. Compare the two frames.",
          ar: 'الترتيب يغيّر الأسهم في المصفوفة فقط، والكائنات نفسها لا تتغير.' },
        { type: 'memory', title: 'Before and after Arrays.sort(list)', frames: [
          { label: 'Before <code>Arrays.sort(list);</code>', vars: [{ name: 'list', type: 'Student[]', ref: 'L' }], objects: [
            { id: 'L', cls: 'Student[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', ref: 'B' }, { name: '[2]', ref: 'C' }] },
            { id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Nouf"' }, { name: 'gpa', value: '3.4' }] },
            { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Badr"' }, { name: 'gpa', value: '3.9' }] },
            { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Hessa"' }, { name: 'gpa', value: '2.8' }] }] },
          { label: 'After <code>Arrays.sort(list);</code> (only the arrows moved)', vars: [{ name: 'list', type: 'Student[]', ref: 'L' }], objects: [
            { id: 'L', cls: 'Student[]', fields: [{ name: '[0]', ref: 'C' }, { name: '[1]', ref: 'A' }, { name: '[2]', ref: 'B' }] },
            { id: 'A', cls: 'Student', fields: [{ name: 'name', value: '"Nouf"' }, { name: 'gpa', value: '3.4' }] },
            { id: 'B', cls: 'Student', fields: [{ name: 'name', value: '"Badr"' }, { name: 'gpa', value: '3.9' }] },
            { id: 'C', cls: 'Student', fields: [{ name: 'name', value: '"Hessa"' }, { name: 'gpa', value: '2.8' }] }] }
        ], ar: 'بعد الترتيب تشير الخانة [0] إلى Hessa لأن معدلها الأصغر.' },
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
          `, ar: 'نقارن الدرجات أولًا (تنازليًا)، وعند التساوي نقارن الأسماء أبجديًا.' },
        { type: 'steps', title: 'Worked example: today\'s lectures in time order', problem: 'A student\'s lectures for Sunday are stored in any order. Sort them by start time (hour, then minute) and print them like <code>08:30 MATH111</code>.',
          steps: [
            { en: 'A <code>Lecture</code> has a course code, an hour (24-hour clock) and a minute. It implements <code>Comparable&lt;Lecture&gt;</code>.', code: J`
              class Lecture implements Comparable<Lecture> {
                  private String course;
                  private int hour, minute;
            ` },
            { en: 'Compare the hours first. If they are different, the hours decide.', code: J`
              if (hour != other.hour) {
                  return Integer.compare(hour, other.hour);
              }
            ` },
            { en: 'Same hour? Then the minutes decide (8:00 before 8:30).', code: J`
              return Integer.compare(minute, other.minute);
            ` },
            { en: 'For printing, <code>String.format</code> works like <code>printf</code> but gives back the text. <code>%02d</code> prints a number with two digits, so 8 becomes 08.', code: J`
              public String toString() {
                  return String.format("%02d:%02d %s", hour, minute, course);
              }
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Lecture[] sunday = {
                        new Lecture("CS102", 13, 0),
                        new Lecture("MATH111", 8, 30),
                        new Lecture("ENG101", 10, 0),
                        new Lecture("PHYS101", 8, 0)
                    };
                    Arrays.sort(sunday);
                    for (Lecture l : sunday) {
                        System.out.println(l);
                    }
                }
            }

            class Lecture implements Comparable<Lecture> {
                private String course;
                private int hour, minute;

                Lecture(String course, int hour, int minute) {
                    this.course = course;
                    this.hour = hour;
                    this.minute = minute;
                }

                @Override
                public int compareTo(Lecture other) {
                    if (hour != other.hour) {
                        return Integer.compare(hour, other.hour);
                    }
                    return Integer.compare(minute, other.minute);
                }

                @Override
                public String toString() {
                    return String.format("%02d:%02d %s", hour, minute, course);
                }
            }
          `, out: J`
            08:00 PHYS101
            08:30 MATH111
            10:00 ENG101
            13:00 CS102
          `, ar: 'نقارن الساعة أولًا، وإذا تساوت نقارن الدقائق، فتأتي 08:00 قبل 08:30.' }
      ],
      mistakes: [
        { title: 'Forgetting implements Comparable', en: "Without it, <code>Arrays.sort</code> throws a ClassCastException at run time.", code: J`
          class Student { ... }            // not Comparable
          Arrays.sort(students);           // ClassCastException
        `, ar: 'بدون implements Comparable لا تعرف Arrays.sort كيف ترتب.' },
        { title: 'Wrong parameter type', en: "With <code>Comparable&lt;Student&gt;</code> the parameter must be <code>Student</code>, not <code>Object</code>.", code: J`
          class Student implements Comparable<Student> {
              public int compareTo(Object other) { ... }   // error: must be (Student other)
          }
        ` },
        { title: 'Subtracting doubles', en: "<code>(int) (a - b)</code> loses decimals: 3.4 - 3.9 = -0.5, which becomes 0 and wrongly means \"equal\". Use <code>Double.compare</code>." },
        { title: 'Comparing text with minus', en: "Strings cannot be subtracted. Use <code>name.compareTo(other.name)</code>.", code: J`
          return name - other.name;            // error
          return name.compareTo(other.name);   // correct
        ` }
      ],
      remember: [
        "<code>Comparable&lt;T&gt;</code> has one method: <code>int compareTo(T other)</code>.",
        "Negative = before, zero = equal, positive = after. Only the sign matters.",
        "Use <code>Integer.compare</code>, <code>Double.compare</code> and <code>String.compareTo</code>.",
        "Swap the arguments for descending order; compare a second field to break ties.",
        "After implementing it, <code>Arrays.sort(array)</code> works on your class.",
        "Sorting moves the references in the array; the objects themselves do not change."
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
          explain: "Arrays.sort uses compareTo. Equal prices keep their input order (sorting objects is stable)." },
        { t: 'bug', q: "This program does not compile. Tap the line with the bug.", qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
            import java.util.*;
            public class Main {
                public static void main(String[] args) {
                    Product[] items = { new Product(40), new Product(5) };
                    Arrays.sort(items);
                    System.out.println(items[0].price);
                }
            }
            class Product implements Comparable<Product> {
                int price;
                Product(int price) { this.price = price; }
                int compareTo(Product other) {
                    return Integer.compare(price, other.price);
                }
            }
          `, bug: 12,
          fix: J`
            import java.util.*;
            public class Main {
                public static void main(String[] args) {
                    Product[] items = { new Product(40), new Product(5) };
                    Arrays.sort(items);
                    System.out.println(items[0].price);
                }
            }
            class Product implements Comparable<Product> {
                int price;
                Product(int price) { this.price = price; }
                public int compareTo(Product other) {
                    return Integer.compare(price, other.price);
                }
            }
          `,
          hint: "Comparable is an interface. What do you remember about interface methods from Lesson 4?",
          explain: "<code>compareTo</code> comes from the interface <code>Comparable</code>, so it is public there. Without <code>public</code> in Product the access is weaker and the class does not compile. With <code>public</code>, the program sorts and prints <code>5</code>.",
          explainAr: 'compareTo دالة من واجهة، لذلك يجب أن تكون public.' },
        { t: 'bug', q: "The honour list must show the <b>highest</b> score first, but it shows the lowest first. Tap the line with the bug.", qAr: 'القائمة يجب أن تبدأ بالأعلى درجة لكنها تبدأ بالأقل. أين الخطأ؟',
          code: J`
            class Result implements Comparable<Result> {
                String name;
                int score;
                Result(String name, int score) {
                    this.name = name;
                    this.score = score;
                }
                @Override
                public int compareTo(Result other) {
                    return Integer.compare(score, other.score);
                }
            }
          `, bug: 10,
          fix: J`
            class Result implements Comparable<Result> {
                String name;
                int score;
                Result(String name, int score) {
                    this.name = name;
                    this.score = score;
                }
                @Override
                public int compareTo(Result other) {
                    return Integer.compare(other.score, score);
                }
            }
          `,
          hint: "Which order does <code>Integer.compare(a, b)</code> give: small first or big first?",
          explain: "<code>Integer.compare(score, other.score)</code> gives ascending order (lowest first). The code compiles, so the compiler cannot help: it is a logic bug. Swapping the two arguments reverses the order, so the highest score comes first.",
          explainAr: 'لعكس الترتيب بدّل{{g:|ي}} المعاملين في Integer.compare.' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println("Amal".compareTo("Badr") < 0);
                  System.out.println("Sami".compareTo("Sami"));
                  System.out.println("Omar".compareTo("Huda") > 0);
              }
          }
        `, answer: J`
          true
          0
          true
        `, explain: "Amal comes before Badr (negative, so true). The same word gives 0. Omar comes after Huda (positive, so true)." },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> lines with a one-word book title and its number of pages. Make <code>Book</code> implement <code>Comparable&lt;Book&gt;</code>: fewer pages first, and when the pages are equal, titles in alphabetical order. Sort with <code>Arrays.sort</code> and print each book as <code>TITLE PAGES</code>. No prompts.", qAr: 'رتّب الكتب حسب عدد الصفحات ثم العنوان.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Book[] shelf = new Book[n];
                    // read, sort, print
                }
            }

            class Book {
                // TODO: fields, constructor, compareTo, toString
            }
          `,
          tests: [{ stdin: '4\nPython 300\nJava 450\nAlgebra 300\nPoems 120', expected: 'Poems 120\nAlgebra 300\nPython 300\nJava 450' }, { stdin: '2\nB 10\nA 10', expected: 'A 10\nB 10' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Book[] shelf = new Book[n];
                    for (int i = 0; i < n; i++) {
                        shelf[i] = new Book(sc.next(), sc.nextInt());
                    }
                    Arrays.sort(shelf);
                    for (Book b : shelf) {
                        System.out.println(b);
                    }
                }
            }

            class Book implements Comparable<Book> {
                private String title;
                private int pages;

                Book(String title, int pages) {
                    this.title = title;
                    this.pages = pages;
                }

                @Override
                public int compareTo(Book other) {
                    if (pages != other.pages) {
                        return Integer.compare(pages, other.pages);
                    }
                    return title.compareTo(other.title);
                }

                @Override
                public String toString() { return title + " " + pages; }
            }
          `,
          hint: "Copy the shape of the exam-results example: compare the pages first, and only when they are equal compare the titles.",
          explain: "Poems has the fewest pages. Algebra and Python both have 300, so the titles decide: A before P." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 6
    {
      title: 'Functional interfaces and lambdas',
      titleAr: 'الواجهات الوظيفية وتعبيرات لامدا',
      minutes: 35,
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
        { type: 'analogy', title: 'A plug and a socket', en: "A wall socket has one fixed shape. Any plug with the matching shape fits: a lamp, a kettle, a phone charger. The functional interface is the socket: one method with a fixed number of inputs and a fixed result type. A lambda is a plug made on the spot. If its shape matches (same number of inputs, right result), it fits.",
          ar: 'الواجهة الوظيفية مثل المقبس، واللامدا مثل قابس يطابق شكله.' },
        { type: 'h', en: 'Three shapes of a lambda' },
        { type: 'p', en: "The left side of the arrow must match the method's parameters. The right side must give the method's result. This gives three common shapes:" },
        { type: 'table', head: ['Method in the interface', 'Lambda', 'Shape'], rows: [
          ['<code>String text();</code>', '<code>() -&gt; "Salam"</code>', 'no input: empty brackets'],
          ['<code>double apply(double price);</code>', '<code>p -&gt; p * 0.5</code>', 'one input: brackets are optional'],
          ['<code>int apply(int a, int b);</code>', '<code>(a, b) -&gt; a + b</code>', 'two inputs: brackets are needed']
        ] },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Greeting hello = () -> "Salam, welcome to PSU";
                  Calc add = (a, b) -> a + b;
                  System.out.println(hello.text());
                  System.out.println(add.apply(7, 5));
              }
          }

          interface Greeting {
              String text();
          }

          interface Calc {
              int apply(int a, int b);
          }
        `, out: J`
          Salam, welcome to PSU
          12
        ` },
        { type: 'lines', rows: [
          ['() -> "Salam, welcome to PSU"', '<code>text()</code> has no parameters, so the brackets are empty.'],
          ['(a, b) -> a + b', '<code>apply</code> has two int parameters, so the lambda has two names in brackets.'],
          ['add.apply(7, 5)', 'Runs the lambda with a = 7 and b = 5: 12.']
        ], ar: 'عدد المدخلات في اللامدا يساوي عدد معاملات الدالة.' },
        { type: 'h', en: 'A lambda with several lines' },
        { type: 'p', en: "If the rule needs more than one expression, for example an <code>if</code>, put the body in braces <code>{ }</code> and write <code>return</code> yourself, exactly like in a normal method. Do not forget the semicolon after the closing brace: the whole lambda is one statement.",
          ar: 'إذا احتاجت اللامدا أكثر من سطر نضعها بين أقواس ونكتب return.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Grader pass = mark -> {
                      if (mark >= 60) {
                          return "Pass";
                      }
                      return "Fail";
                  };
                  System.out.println(pass.result(75));
                  System.out.println(pass.result(40));
              }
          }

          interface Grader {
              String result(int mark);
          }
        `, out: J`
          Pass
          Fail
        ` },
        { type: 'check', q: 'Which lambda fits <code>interface Calc { int apply(int a, int b); }</code>?', options: ['<code>a -&gt; a * 2</code>', '<code>(a, b) -&gt; a * b</code>', '<code>() -&gt; 10</code>', '<code>(a, b) -&gt; "sum"</code>'], answer: 1, explain: "Two int inputs and an int result. The last option returns a String, so it does not fit." },
        { type: 'h', en: 'A lambda is an object too' },
        { type: 'p', en: "When Java meets a lambda, it creates an <b>object</b> of a hidden class that implements the interface. That is why you can store a lambda in a variable or in an array, exactly like any other object. Step through the picture." },
        { type: 'memory', title: 'Rules stored in variables and an array', code: J`
          PriceRule half = p -> p * 0.5;
          PriceRule minus20 = p -> p - 20;
          PriceRule[] rules = { half, minus20 };
        `, frames: [
          { label: 'After <code>PriceRule half = p -&gt; p * 0.5;</code>', vars: [{ name: 'half', type: 'PriceRule', ref: 'A' }], objects: [{ id: 'A', cls: 'lambda (PriceRule)', fields: [{ name: 'rule', value: 'p * 0.5' }] }] },
          { label: 'After <code>PriceRule minus20 = p -&gt; p - 20;</code>', vars: [{ name: 'half', type: 'PriceRule', ref: 'A' }, { name: 'minus20', type: 'PriceRule', ref: 'B' }], objects: [{ id: 'A', cls: 'lambda (PriceRule)', fields: [{ name: 'rule', value: 'p * 0.5' }] }, { id: 'B', cls: 'lambda (PriceRule)', fields: [{ name: 'rule', value: 'p - 20' }] }] },
          { label: 'After <code>PriceRule[] rules = { half, minus20 };</code>', vars: [{ name: 'half', type: 'PriceRule', ref: 'A' }, { name: 'minus20', type: 'PriceRule', ref: 'B' }, { name: 'rules', type: 'PriceRule[]', ref: 'R' }], objects: [{ id: 'R', cls: 'PriceRule[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', ref: 'B' }] }, { id: 'A', cls: 'lambda (PriceRule)', fields: [{ name: 'rule', value: 'p * 0.5' }] }, { id: 'B', cls: 'lambda (PriceRule)', fields: [{ name: 'rule', value: 'p - 20' }] }] }
        ], ar: 'اللامدا كائن، لذلك نخزنها في متغير أو مصفوفة مثل أي كائن.' },
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
          `, ar: 'كل قاعدة خصم هي لامدا صغيرة، ونستعملها كلها بنفس الحلقة.' },
        { type: 'steps', title: 'Worked example: a currency converter', problem: 'A travel app converts riyals into other units. Write three conversion rules as lambdas: to US dollars (divide by 3.75), to halalas (times 100), and a "round to whole riyals" rule. Convert 375.5 riyals with each rule and print two decimals.',
          steps: [
            { en: 'One functional interface with one method: riyals in, a number out.', code: J`
              interface Converter {
                  double convert(double riyals);
              }
            ` },
            { en: 'Write the first two rules as one-line lambdas.', code: J`
              Converter toDollars = r -> r / 3.75;
              Converter toHalalas = r -> r * 100;
            ` },
            { en: 'The rounding rule uses <code>Math.round</code>, which gives a long. The lambda still returns it as a double because the method returns double.', code: J`
              Converter rounded = r -> Math.round(r);
            ` },
            { en: 'Keep the names and the rules in two arrays with the same order, and print each result with <code>printf</code>.', code: J`
              String[] names = { "Dollars", "Halalas", "Rounded" };
              Converter[] rules = { toDollars, toHalalas, rounded };
              for (int i = 0; i < rules.length; i++) {
                  System.out.printf("%s: %.2f%n", names[i], rules[i].convert(375.5));
              }
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Converter toDollars = r -> r / 3.75;
                    Converter toHalalas = r -> r * 100;
                    Converter rounded = r -> Math.round(r);
                    String[] names = { "Dollars", "Halalas", "Rounded" };
                    Converter[] rules = { toDollars, toHalalas, rounded };
                    for (int i = 0; i < rules.length; i++) {
                        System.out.printf("%s: %.2f%n", names[i], rules[i].convert(375.5));
                    }
                }
            }

            interface Converter {
                double convert(double riyals);
            }
          `, out: J`
            Dollars: 100.13
            Halalas: 37550.00
            Rounded: 376.00
          `, ar: 'ثلاث قواعد تحويل كتبناها كلامدا، واستعملناها في حلقة واحدة.' }
      ],
      mistakes: [
        { title: 'Using a lambda with two abstract methods', en: "A lambda only fits an interface with exactly one abstract method. Java would not know which method the lambda is for.", ar: 'اللامدا تناسب واجهة لها دالة مجردة واحدة فقط.' },
        { title: 'Wrong number of parameters', en: "The lambda must have the same number of inputs as the method.", code: J`
          PriceRule r = (a, b) -> a * b;   // error: apply takes one parameter
        ` },
        { title: 'Writing = or => instead of ->', en: "The arrow is a minus sign and a greater-than sign: <code>-&gt;</code>. Other languages use <code>=&gt;</code>, but Java does not.", code: J`
          PriceRule r = p => p * 0.5;    // error
          PriceRule r = p -> p * 0.5;    // correct
        ` },
        { title: 'Wrong result type or a missing return', en: "The lambda result must match the method: <code>p -&gt; \"cheap\"</code> does not fit a method that returns double. With braces, you must write <code>return</code>.", code: J`
          Grader g = mark -> { "Pass"; };          // error: no return
          Grader g = mark -> { return "Pass"; };   // correct
        ` }
      ],
      remember: [
        "A <b>functional interface</b> has exactly one abstract method.",
        "A lambda has the shape <code>input -&gt; result</code>: <code>() -&gt;</code> for no input, <code>(a, b) -&gt;</code> for two.",
        "A lambda with several lines needs braces and <code>return</code>.",
        "A lambda is an object: store it in a variable or an array of the interface type.",
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
          explain: "The lambda is the body of apply. 200 * 0.75 = 150.0 and 80 * 0.75 = 60.0." },
        { t: 'bug', q: "This program should add a 10 riyal delivery fee to a price, but it does not compile. Tap the line with the bug.", qAr: 'البرنامج يجب أن يضيف رسوم توصيل 10 ريالات لكنه لا يُترجم. أين الخطأ؟',
          code: J`
            public class Main {
                public static void main(String[] args) {
                    PriceRule delivery = (p, fee) -> p + 10;
                    System.out.println(delivery.apply(100));
                }
            }
            interface PriceRule {
                double apply(double price);
            }
          `, bug: 3,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    PriceRule delivery = p -> p + 10;
                    System.out.println(delivery.apply(100));
                }
            }
            interface PriceRule {
                double apply(double price);
            }
          `,
          hint: "Count the parameters of <code>apply</code> and the inputs of the lambda.",
          explain: "<code>apply</code> takes <b>one</b> parameter, but the lambda has two inputs <code>(p, fee)</code>, so the shapes do not match. With one input <code>p -&gt; p + 10</code> it fits and prints <code>110.0</code>.",
          explainAr: 'عدد مدخلات اللامدا يجب أن يساوي عدد معاملات الدالة.' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Greeting g = () -> "Salam";
                  Grader grade = mark -> {
                      if (mark >= 90) {
                          return "A";
                      }
                      return "Not A";
                  };
                  System.out.println(g.text());
                  System.out.println(grade.result(95));
                  System.out.println(grade.result(89));
              }
          }

          interface Greeting { String text(); }

          interface Grader { String result(int mark); }
        `, answer: J`
          Salam
          A
          Not A
        `, explain: "The first lambda has no input and returns Salam. The second has a block body: 95 is at least 90, so A; 89 is not, so Not A." },
        { t: 'code', q: "Read two integers <code>a</code> and <code>b</code>. Using the interface <code>Calc</code> (method <code>int apply(int a, int b)</code>), create three lambdas: <code>add</code> (sum), <code>times</code> (product) and <code>bigger</code> (the larger of the two). Print the three results on three lines in that order. No prompts.", qAr: 'أنشئ ثلاث لامدا: الجمع والضرب والأكبر.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int a = sc.nextInt();
                    int b = sc.nextInt();
                    // Calc add = ...
                    // Calc times = ...
                    // Calc bigger = ...
                    // print add.apply(a, b), times.apply(a, b), bigger.apply(a, b)
                }
            }

            interface Calc {
                int apply(int a, int b);
            }
          `,
          tests: [{ stdin: '7 5', expected: '12\n35\n7' }, { stdin: '-2 3', expected: '1\n-6\n3' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int a = sc.nextInt();
                    int b = sc.nextInt();
                    Calc add = (x, y) -> x + y;
                    Calc times = (x, y) -> x * y;
                    Calc bigger = (x, y) -> Math.max(x, y);
                    System.out.println(add.apply(a, b));
                    System.out.println(times.apply(a, b));
                    System.out.println(bigger.apply(a, b));
                }
            }

            interface Calc {
                int apply(int a, int b);
            }
          `,
          hint: "Inside <code>main</code> the names <code>a</code> and <code>b</code> are already used, so give the lambda inputs other names: <code>(x, y) -&gt; x + y</code>.",
          explain: "Each lambda has two inputs because <code>apply</code> has two parameters. A lambda cannot reuse the name of a local variable, so we write <code>x</code> and <code>y</code>." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 7
    {
      title: 'Dynamic binding step by step',
      titleAr: 'الربط الديناميكي خطوة بخطوة',
      minutes: 30,
      body: [
        { type: 'h', en: 'Two questions, two moments' },
        { type: 'p', en: "Most exam questions on polymorphism are tracing questions: \"What does this program print?\" To answer them without guessing, you need one clear method. Every call like <code>x.m()</code> is decided in <b>two</b> moments, by two different judges, who ask two different questions.",
          ar: 'كل استدعاء يُقرَّر على مرحلتين: المترجم أولًا ثم آلة جافا وقت التشغيل.' },
        { type: 'table', head: ['Moment', 'Who decides', 'Looks at', 'Question'], rows: [
          ['Compile time (before the program runs)', 'the compiler (<code>javac</code>)', 'the <b>variable type</b>', 'Is this call allowed?'],
          ['Run time (while the program runs)', 'the JVM (<code>java</code>)', 'the <b>object type</b>', 'Which code runs?']
        ] },
        { type: 'analogy', title: 'The menu and the chef', en: "In a restaurant, the menu decides what you may order. If a dish is not on the menu, you cannot order it, even if the chef knows how to cook it. Once you order, the chef working in the kitchen today decides <i>how</i> the dish is made. The menu is the variable type (checked by the compiler). The chef is the real object (used by the JVM).",
          ar: 'القائمة هي نوع المتغير وتحدد ما يمكن طلبه، والطاهي هو الكائن ويحدد طريقة التنفيذ.' },
        { type: 'h', en: 'Step 1: the compiler checks the variable type' },
        { type: 'p', en: "The compiler does not run your program, so it cannot know which object a variable will hold. It knows only the type written in the declaration. It looks in that class (and in its parents) for a method with the right name and parameters. If there is none, you get a compile error and the program never runs." },
        { type: 'code', code: J`
          Animal a = new Dog();
          a.sound();    // OK: class Animal has sound()
          a.fetch();    // compile error: class Animal has no fetch()
        ` },
        { type: 'lines', rows: [
          ['Animal a = new Dog();', 'For the compiler, <code>a</code> is just \"some Animal\". It ignores the word after <code>new</code>.'],
          ['a.sound();', 'Animal has <code>sound()</code>, so the call is allowed. Which version runs is decided later.'],
          ['a.fetch();', 'Animal has no <code>fetch()</code>. Even though the object is a Dog, the compiler refuses.']
        ], ar: 'المترجم يبحث في صنف نوع المتغير فقط.' },
        { type: 'check', q: '<code>Shape s = new Circle(2);</code> Only Circle has <code>getRadius()</code>. Who stops <code>s.getRadius()</code>, and when?', options: ['The JVM, at run time', 'The compiler, before the program runs', 'Nobody: it prints 2.0', 'The Circle class'], answer: 1, explain: "The compiler checks the call against the variable type Shape, finds no <code>getRadius()</code>, and reports an error." },
        { type: 'h', en: 'Step 2: the JVM runs the object\'s method' },
        { type: 'p', en: "When the program runs, the JVM follows the reference to the real object. It looks for the method in the <b>object's own class</b> first. If that class does not write the method, it goes up to the parent, then to the grandparent, and runs the <b>first</b> version it finds. This search at run time is <b>dynamic binding</b>.",
          ar: 'وقت التشغيل يبدأ البحث من صنف الكائن الحقيقي ثم يصعد إلى الأب حتى يجد الدالة.' },
        { type: 'analogy', title: 'Asking up the family', en: "You need the car key. First you look in your own bag. If it is not there, you ask your father. If he does not have it, you ask your grandfather. You always start with yourself, go up, and stop at the first person who has the key. The JVM searches for a method in the same way, starting from the real object's class.",
          ar: 'نبدأ من الكائن نفسه ثم نصعد في العائلة ونتوقف عند أول من يملك الدالة.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Vehicle v = new Taxi();
                  System.out.println(v.kind());
                  System.out.println(v.wheels());
                  System.out.println(v.describe());
              }
          }

          class Vehicle {
              String kind() { return "vehicle"; }
              int wheels() { return 0; }
              String describe() { return "A " + kind() + " with " + wheels() + " wheels"; }
          }

          class Car extends Vehicle {
              @Override
              int wheels() { return 4; }
          }

          class Taxi extends Car {
              @Override
              String kind() { return "taxi"; }
          }
        `, out: J`
          taxi
          4
          A taxi with 4 wheels
        ` },
        { type: 'table', head: ['Call', 'Step 1: compiler (Vehicle)', 'Step 2: JVM search', 'Result'], rows: [
          ['<code>v.kind()</code>', 'Vehicle has kind(): allowed', 'Taxi writes kind(): found', '<code>taxi</code>'],
          ['<code>v.wheels()</code>', 'allowed', 'Taxi: no. Car: yes', '<code>4</code>'],
          ['<code>v.describe()</code>', 'allowed', 'Taxi: no. Car: no. Vehicle: yes', 'runs Vehicle\'s describe()'],
          ['<code>kind()</code> inside describe()', 'means <code>this.kind()</code>', '<code>this</code> is the Taxi: search from Taxi again', '<code>taxi</code>'],
          ['<code>wheels()</code> inside describe()', 'means <code>this.wheels()</code>', 'Taxi: no. Car: yes', '<code>4</code>']
        ] },
        { type: 'note', kind: 'exam', en: "The most common exam trap: a method written in the parent (like <code>describe()</code>) calls another method. Students use the parent's version. Wrong! The inner call means <code>this.kind()</code>, and <code>this</code> is still the real object, so the search starts again from the object's class.", ar: 'الاستدعاء داخل دالة الأب يبدأ البحث من جديد من الكائن الحقيقي.' },
        { type: 'check', q: 'We add <code>@Override int wheels() { return 3; }</code> to <b>Taxi</b>. What does <code>v.describe()</code> print now?', options: ['A taxi with 4 wheels', 'A taxi with 3 wheels', 'A vehicle with 0 wheels', 'A vehicle with 3 wheels'], answer: 1, explain: "The search for <code>wheels()</code> starts at Taxi and finds it there: 3. <code>kind()</code> is still Taxi's: taxi." },
        { type: 'h', en: 'Overloading is decided early, overriding late' },
        { type: 'p', en: "In Unit 4 you met <b>overloading</b>: two methods with the same name but different parameters. Be careful: the compiler chooses between overloaded methods in Step 1, using the <b>variable types</b> of the arguments. Only <b>overridden</b> methods are chosen in Step 2 by the object. One program can use both:",
          ar: 'اختيار الدالة المحمّلة (overloading) يتم وقت الترجمة حسب نوع المتغير.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Animal a = new Dog();
                  Dog d = new Dog();
                  Vet.check(a);
                  Vet.check(d);
              }
          }

          class Vet {
              static void check(Animal x) { System.out.println("Animal check: " + x.sound()); }
              static void check(Dog x) { System.out.println("Dog check: " + x.sound()); }
          }

          class Animal {
              String sound() { return "..."; }
          }

          class Dog extends Animal {
              @Override
              String sound() { return "Woof"; }
          }
        `, out: J`
          Animal check: Woof
          Dog check: Woof
        ` },
        { type: 'lines', rows: [
          ['Vet.check(a);', 'The variable <code>a</code> has type Animal, so the compiler picks <code>check(Animal x)</code>, even though the object is a Dog.'],
          ['Vet.check(d);', 'The variable <code>d</code> has type Dog, so the compiler picks <code>check(Dog x)</code>.'],
          ['x.sound()', 'Inside both methods, <code>sound()</code> is overridden: the JVM runs the Dog version both times.']
        ], ar: 'الدالة المحمّلة يختارها المترجم، والدالة المعاد تعريفها يختارها الكائن.' },
        { type: 'note', kind: 'tip', en: "Remember from Lesson 1: <b>fields</b> and <b>static methods</b> are also chosen in Step 1 by the variable type. Only overridden instance methods wait for Step 2." },
        { type: 'h', en: 'super.m() starts the search one level up' },
        { type: 'p', en: "<code>super.info()</code> tells the JVM: \"Do not start at the object's class. Start at the <b>parent</b> of the class where this line is written.\" But inside that parent method, plain calls such as <code>title()</code> are dynamic again: they start from the real object. The worked example below traces exactly this." },
        { type: 'steps', title: 'Worked example: trace an exam question', problem: 'A school has Staff, Teachers and Head Teachers. Predict the output of the loop before running it, using the two steps.',
          steps: [
            { en: 'Write down the real class of each object: Staff, Teacher, HeadTeacher. Every call <code>s.info()</code> is allowed, because Staff has <code>info()</code>.', code: J`
              Staff[] team = { new Staff("Ali"), new Teacher("Mona"), new HeadTeacher("Saad") };
            ` },
            { en: 'Ali (a Staff): search starts at Staff, finds <code>info()</code>. Inside it, <code>title()</code> starts from Staff: <code>Staff Ali</code>.', code: J`
              String info() { return title() + " " + name; }   // in Staff
            ` },
            { en: 'Mona (a Teacher): Teacher has no <code>info()</code>, so Staff\'s runs. Inside it, <code>title()</code> starts from Teacher, which overrides it: <code>Teacher Mona</code>.', code: J`
              String title() { return "Teacher"; }   // in Teacher
            ` },
            { en: 'Saad (a HeadTeacher): HeadTeacher writes <code>info()</code>. It calls <code>super.info()</code>: the search starts at Teacher (the parent), goes up and runs Staff\'s <code>info()</code>.', code: J`
              String info() { return super.info() + " (head)"; }   // in HeadTeacher
            ` },
            { en: 'Inside Staff\'s <code>info()</code>, <code>title()</code> is dynamic again: HeadTeacher has none, Teacher has one. Result: <code>Teacher Saad (head)</code>.' }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Staff[] team = { new Staff("Ali"), new Teacher("Mona"), new HeadTeacher("Saad") };
                    for (Staff s : team) {
                        System.out.println(s.info());
                    }
                }
            }

            class Staff {
                protected String name;
                Staff(String name) { this.name = name; }
                String title() { return "Staff"; }
                String info() { return title() + " " + name; }
            }

            class Teacher extends Staff {
                Teacher(String name) { super(name); }
                @Override
                String title() { return "Teacher"; }
            }

            class HeadTeacher extends Teacher {
                HeadTeacher(String name) { super(name); }
                @Override
                String info() { return super.info() + " (head)"; }
            }
          `, out: J`
            Staff Ali
            Teacher Mona
            Teacher Saad (head)
          `, ar: 'super تبدأ البحث من الأب، لكن الاستدعاءات داخلها تعود إلى الكائن الحقيقي.' }
      ],
      mistakes: [
        { title: 'Thinking the variable type chooses the overridden method', en: "The variable type only decides whether the call is <i>allowed</i>. The object decides which version runs.", code: J`
          Animal a = new Dog();
          a.sound();   // runs Dog's sound(), not Animal's
        `, ar: 'نوع المتغير يسمح بالاستدعاء فقط، والكائن يختار النسخة.' },
        { title: 'Thinking the object type decides what you may call', en: "The compiler never looks at the object. A Dog-only method cannot be called through an Animal variable without a cast.", code: J`
          Animal a = new Dog();
          a.fetch();   // compile error, even though the object is a Dog
        ` },
        { title: 'Using the parent version for a call inside a parent method', en: "Inside <code>describe()</code>, the call <code>kind()</code> means <code>this.kind()</code>. Start the search again from the real object, not from the class where the line is written." },
        { title: 'Mixing up overloading and overriding', en: "Overloaded methods (same name, different parameters) are chosen by the compiler from the variable types. Overridden methods (same name, same parameters, in a subclass) are chosen by the JVM from the object." }
      ],
      remember: [
        "Step 1, compile time: the compiler looks at the <b>variable type</b> and asks \"Is this call allowed?\"",
        "Step 2, run time: the JVM looks at the <b>object</b> and runs the first version it finds, searching from the object's class upward.",
        "A call inside a method means <code>this.m()</code>: the search starts again from the real object.",
        "<code>super.m()</code> starts the search in the parent of the class where it is written.",
        "Overloading is chosen at compile time; overriding at run time. Fields and static methods use the variable type."
      ],
      rememberAr: 'المترجم ينظر إلى نوع المتغير ويسأل: هل الاستدعاء مسموح؟ وآلة جافا تنظر إلى الكائن وتبحث عن الدالة من صنفه صعودًا.',
      practice: [
        { t: 'mcq', q: "Who checks that a call such as <code>a.fetch()</code> is allowed, and what does it look at?", options: ['The JVM; the object type', 'The compiler; the variable type', 'The compiler; the object type', 'The JVM; the variable type'], answer: 1, explain: "Allowed or not is decided at compile time from the variable type. The object is only used at run time to pick the version.", qAr: 'من يتحقق من أن الاستدعاء مسموح؟' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Phone p = new SmartPhone();
                  System.out.println(p.ring());
                  System.out.println(p.info());
              }
          }

          class Device {
              String info() { return "Device: " + ring(); }
              String ring() { return "beep"; }
          }

          class Phone extends Device {
              @Override
              String ring() { return "ring ring"; }
          }

          class SmartPhone extends Phone {
              @Override
              String info() { return "Smart " + super.info(); }
          }
        `, answer: J`
          ring ring
          Smart Device: ring ring
        `, explain: "<code>p.ring()</code>: SmartPhone has none, Phone has one: ring ring. <code>p.info()</code>: SmartPhone's runs and calls <code>super.info()</code>; Phone has no info, so Device's runs. Inside it, <code>ring()</code> starts from the SmartPhone again and finds Phone's version.", explainAr: 'داخل دالة Device يعود البحث عن ring إلى الكائن الحقيقي.' },
        { t: 'fill', q: "Complete the two rules in the comments.", code: J`
          // Animal a = new Dog();
          // a.sound() is checked by the compiler using the ___ type (Animal),
          // and run by the JVM using the ___ type (Dog).
        `, answers: [['variable', 'declared', 'reference'], ['object', 'actual', 'real']], explain: "Compile time uses the variable (declared) type; run time uses the object (actual) type." },
        { t: 'output', q: "Overloading or overriding? What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Shape s = new Circle();
                  Circle c = new Circle();
                  Printer.show(s);
                  Printer.show(c);
              }
          }

          class Shape {
              String name() { return "shape"; }
          }

          class Circle extends Shape {
              @Override
              String name() { return "circle"; }
          }

          class Printer {
              static void show(Shape x) { System.out.println("Shape version: " + x.name()); }
              static void show(Circle x) { System.out.println("Circle version: " + x.name()); }
          }
        `, answer: J`
          Shape version: circle
          Circle version: circle
        `, explain: "The compiler picks the overloaded <code>show</code> from the variable type: Shape for <code>s</code>, Circle for <code>c</code>. Inside, <code>name()</code> is overridden, so the object (a Circle both times) decides: circle." },
        { t: 'bug', q: "This program does not compile. Tap the line the compiler complains about.", qAr: 'البرنامج لا يُترجم. أين يشتكي المترجم؟',
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Employee e = new Manager();
                    System.out.println(e.bonus());
                }
            }
            class Employee {
                double salary() { return 8000; }
            }
            class Manager extends Employee {
                double bonus() { return 2000; }
            }
          `, bug: [4, 3],
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Employee e = new Manager();
                    if (e instanceof Manager) {
                        System.out.println(((Manager) e).bonus());
                    }
                }
            }
            class Employee {
                double salary() { return 8000; }
            }
            class Manager extends Employee {
                double bonus() { return 2000; }
            }
          `,
          hint: "Step 1: which class does the compiler search for <code>bonus()</code>?",
          explain: "The variable type is Employee, and Employee has no <code>bonus()</code>, so line 4 is a compile error, even though the object is a Manager. Fix it with a safe downcast (as shown), or declare the variable as <code>Manager</code> on line 3. The fixed program prints <code>2000.0</code>.",
          explainAr: 'المترجم يبحث عن bonus في Employee فلا يجدها. نحتاج تحويلًا آمنًا إلى Manager.' },
        { t: 'code', q: "A delivery app charges <code>10 + 2 * km</code> riyals. Express delivery costs 15 riyals more. Write <code>class Express extends Delivery</code> that overrides <code>fee()</code> using <code>super.fee()</code>. Do <b>not</b> change <code>receipt()</code>: dynamic binding will call your <code>fee()</code>. Input: <code>normal</code> or <code>express</code>, then the km. No prompts.", qAr: 'اكتب الصنف Express وأعد تعريف fee باستخدام super.fee.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String type = sc.next();
                    int km = sc.nextInt();
                    Delivery d;
                    if (type.equals("express")) {
                        d = new Express(km);
                    } else {
                        d = new Delivery(km);
                    }
                    System.out.println(d.receipt());
                }
            }

            class Delivery {
                protected int km;
                Delivery(int km) { this.km = km; }
                int fee() { return 10 + 2 * km; }
                String receipt() { return "Fee: " + fee() + " SAR"; }
            }

            // TODO: class Express extends Delivery
          `,
          tests: [{ stdin: 'normal 5', expected: 'Fee: 20 SAR' }, { stdin: 'express 5', expected: 'Fee: 35 SAR' }, { stdin: 'express 0', expected: 'Fee: 25 SAR' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String type = sc.next();
                    int km = sc.nextInt();
                    Delivery d;
                    if (type.equals("express")) {
                        d = new Express(km);
                    } else {
                        d = new Delivery(km);
                    }
                    System.out.println(d.receipt());
                }
            }

            class Delivery {
                protected int km;
                Delivery(int km) { this.km = km; }
                int fee() { return 10 + 2 * km; }
                String receipt() { return "Fee: " + fee() + " SAR"; }
            }

            class Express extends Delivery {
                Express(int km) { super(km); }

                @Override
                int fee() { return super.fee() + 15; }
            }
          `,
          hint: "Express needs a constructor that calls <code>super(km)</code>, and <code>fee()</code> returns <code>super.fee() + 15</code>.",
          explain: "<code>receipt()</code> is inherited from Delivery. Its call <code>fee()</code> means <code>this.fee()</code>, so for an Express object the JVM runs Express's version: 10 + 2 * 5 + 15 = 35." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 8
    {
      title: 'Polymorphic arrays in practice: a payroll',
      titleAr: 'المصفوفات متعددة الأشكال عمليًا: كشف الرواتب',
      minutes: 30,
      body: [
        { type: 'h', en: 'Pay day at a company' },
        { type: 'p', en: "A company in Riyadh pays three kinds of employees. <b>Salaried</b> staff get a fixed monthly salary. <b>Hourly</b> staff get a rate times their hours. <b>Commission</b> staff in sales get a base salary plus 5% of what they sold. On pay day the accountant wants every payslip, the total, the highest-paid person and how many people earn more than 6000 riyals. With a polymorphic array, <b>one loop</b> answers all of these questions.",
          ar: 'مصفوفة واحدة من نوع الأب وحلقة واحدة تحسب كل الرواتب مهما اختلفت أنواع الموظفين.' },
        { type: 'analogy', title: 'The accountant\'s question', en: "The accountant does not open every contract to calculate each salary. She asks each person the same question: \"How much is your pay this month?\" Each person knows the rule in their own contract and gives the answer. In Java, <code>e.pay()</code> is that question, and each object answers with its own formula.",
          ar: 'المحاسبة تسأل كل موظف السؤال نفسه، وكل موظف يجيب حسب عقده.' },
        { type: 'h', en: 'The family of employees' },
        { type: 'p', en: "Every employee has a name and a pay, but the pay formula is different. From Lesson 3 you know the design: an abstract class <code>Employee</code> with the shared name, and an abstract method <code>pay()</code> that each subclass must write." },
        { type: 'code', code: J`
          abstract class Employee {
              private String name;
              Employee(String name) { this.name = name; }
              String getName() { return name; }
              abstract double pay();
          }

          class Salaried extends Employee {      // pay() returns salary
          class Hourly extends Employee {        // pay() returns rate * hours
          class Commission extends Employee {    // pay() returns base + sales * 0.05
        ` },
        { type: 'p', en: "A <b>polymorphic array</b> is an array whose type is a superclass (or an interface), so it can hold objects of many subclasses. Watch the loop add up the pay: the variable <code>e</code> moves from object to object, and <code>total</code> grows by each object's own answer.",
          ar: 'المصفوفة متعددة الأشكال نوعها صنف الأب، فتحمل كائنات من أصناف أبناء مختلفة.' },
        { type: 'memory', title: 'The payroll array and the running total', code: J`
          Employee[] staff = { new Salaried("Huda", 9000), new Hourly("Fahad", 60, 100), new Commission("Reem", 4000, 50000) };
          double total = 0;
          for (Employee e : staff) {
              total += e.pay();
          }
        `, frames: [
          { label: 'Before the loop', vars: [{ name: 'staff', type: 'Employee[]', ref: 'S' }, { name: 'total', type: 'double', value: '0.0' }], objects: [
            { id: 'S', cls: 'Employee[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', ref: 'B' }, { name: '[2]', ref: 'C' }] },
            { id: 'A', cls: 'Salaried', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '9000.0' }] },
            { id: 'B', cls: 'Hourly', fields: [{ name: 'name', value: '"Fahad"' }, { name: 'rate', value: '60.0' }, { name: 'hours', value: '100' }] },
            { id: 'C', cls: 'Commission', fields: [{ name: 'name', value: '"Reem"' }, { name: 'base', value: '4000.0' }, { name: 'sales', value: '50000.0' }] }] },
          { label: 'Round 1: Salaried.pay() gives 9000.0', vars: [{ name: 'staff', type: 'Employee[]', ref: 'S' }, { name: 'total', type: 'double', value: '9000.0' }, { name: 'e', type: 'Employee', ref: 'A' }], objects: [
            { id: 'S', cls: 'Employee[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', ref: 'B' }, { name: '[2]', ref: 'C' }] },
            { id: 'A', cls: 'Salaried', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '9000.0' }] },
            { id: 'B', cls: 'Hourly', fields: [{ name: 'name', value: '"Fahad"' }, { name: 'rate', value: '60.0' }, { name: 'hours', value: '100' }] },
            { id: 'C', cls: 'Commission', fields: [{ name: 'name', value: '"Reem"' }, { name: 'base', value: '4000.0' }, { name: 'sales', value: '50000.0' }] }] },
          { label: 'Round 2: Hourly.pay() gives 60 * 100 = 6000.0', vars: [{ name: 'staff', type: 'Employee[]', ref: 'S' }, { name: 'total', type: 'double', value: '15000.0' }, { name: 'e', type: 'Employee', ref: 'B' }], objects: [
            { id: 'S', cls: 'Employee[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', ref: 'B' }, { name: '[2]', ref: 'C' }] },
            { id: 'A', cls: 'Salaried', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '9000.0' }] },
            { id: 'B', cls: 'Hourly', fields: [{ name: 'name', value: '"Fahad"' }, { name: 'rate', value: '60.0' }, { name: 'hours', value: '100' }] },
            { id: 'C', cls: 'Commission', fields: [{ name: 'name', value: '"Reem"' }, { name: 'base', value: '4000.0' }, { name: 'sales', value: '50000.0' }] }] },
          { label: 'Round 3: Commission.pay() gives 4000 + 2500 = 6500.0', vars: [{ name: 'staff', type: 'Employee[]', ref: 'S' }, { name: 'total', type: 'double', value: '21500.0' }, { name: 'e', type: 'Employee', ref: 'C' }], objects: [
            { id: 'S', cls: 'Employee[]', fields: [{ name: '[0]', ref: 'A' }, { name: '[1]', ref: 'B' }, { name: '[2]', ref: 'C' }] },
            { id: 'A', cls: 'Salaried', fields: [{ name: 'name', value: '"Huda"' }, { name: 'salary', value: '9000.0' }] },
            { id: 'B', cls: 'Hourly', fields: [{ name: 'name', value: '"Fahad"' }, { name: 'rate', value: '60.0' }, { name: 'hours', value: '100' }] },
            { id: 'C', cls: 'Commission', fields: [{ name: 'name', value: '"Reem"' }, { name: 'base', value: '4000.0' }, { name: 'sales', value: '50000.0' }] }] }
        ], ar: 'في كل دورة يشير e إلى موظف مختلف، ويزيد المجموع حسب معادلته الخاصة.' },
        { type: 'h', en: 'A total, the highest and a count in one loop' },
        { type: 'p', en: "The patterns you learned in CS101 for arrays of numbers (sum, maximum, counting) work the same way with objects. The only difference: instead of <code>a[i]</code> you write <code>e.pay()</code>, and the object computes its own number." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Employee[] staff = {
                      new Salaried("Huda", 9000),
                      new Hourly("Fahad", 60, 100),
                      new Commission("Reem", 4000, 50000)
                  };
                  double total = 0;
                  Employee top = staff[0];
                  int over6000 = 0;
                  for (Employee e : staff) {
                      total += e.pay();
                      if (e.pay() > top.pay()) {
                          top = e;
                      }
                      if (e.pay() > 6000) {
                          over6000++;
                      }
                  }
                  System.out.println("Total: " + total);
                  System.out.println("Highest: " + top.getName());
                  System.out.println("Over 6000: " + over6000);
              }
          }

          abstract class Employee {
              private String name;
              Employee(String name) { this.name = name; }
              String getName() { return name; }
              abstract double pay();
          }

          class Salaried extends Employee {
              private double salary;
              Salaried(String name, double salary) { super(name); this.salary = salary; }
              @Override
              double pay() { return salary; }
          }

          class Hourly extends Employee {
              private double rate;
              private int hours;
              Hourly(String name, double rate, int hours) { super(name); this.rate = rate; this.hours = hours; }
              @Override
              double pay() { return rate * hours; }
          }

          class Commission extends Employee {
              private double base, sales;
              Commission(String name, double base, double sales) { super(name); this.base = base; this.sales = sales; }
              @Override
              double pay() { return base + sales * 0.05; }
          }
        `, out: J`
          Total: 21500.0
          Highest: Huda
          Over 6000: 2
        ` },
        { type: 'lines', rows: [
          ['Employee top = staff[0];', 'Start the \"best so far\" with the first <b>employee</b> (an object, not a number), so we can print the name later.'],
          ['total += e.pay();', 'The same line works for every type: 9000 + 6000 + 6500 = 21500.'],
          ['if (e.pay() > top.pay())', 'Compare the pay of the current employee with the best so far.'],
          ['if (e.pay() > 6000)', 'Fahad earns exactly 6000, which is not more than 6000, so the count is 2 (Huda and Reem).']
        ], ar: 'نفس أنماط CS101 (المجموع والأكبر والعدّ) لكن مع e.pay().' },
        { type: 'check', q: 'In this loop, how many <code>if</code> statements ask about the <b>type</b> of the employee?', options: ['One for each type', 'Two', 'None: the objects choose their own formula', 'It depends on the array size'], answer: 2, explain: "The <code>if</code> statements compare numbers. No line asks \"Are you Hourly?\" Dynamic binding picks the formula." },
        { type: 'h', en: 'Adding a new type without changing the loop' },
        { type: 'p', en: "Next year the company takes interns. An intern gets a fixed allowance of 3000 riyals. What must change? Only two things: write one new class, and create its objects. The loop that pays everyone, the total, the maximum and the count do <b>not</b> change at all.",
          ar: 'نوع جديد يعني صنفًا جديدًا فقط؛ الحلقة تبقى كما هي.' },
        { type: 'code', code: J`
          class Intern extends Employee {            // 1. one new class
              private double allowance;
              Intern(String name, double allowance) { super(name); this.allowance = allowance; }
              @Override
              double pay() { return allowance; }
          }

          Employee[] staff = { ..., new Intern("Omar", 3000) };   // 2. create its object
          // the loop stays exactly the same
        ` },
        { type: 'p', en: "Programmers call this the <b>open-closed idea</b>: your code should be <b>open</b> for adding new types, but <b>closed</b> for changing the code that already works and is tested. Polymorphism is the tool that makes it possible." },
        { type: 'analogy', title: 'A wall socket', en: "When you buy a new kettle, you do not rewire your house. You plug it into the same socket. The wiring (your loop) is closed: nobody touches it. The house is open for any new device that fits the socket (any new subclass of Employee).",
          ar: 'الجهاز الجديد يدخل في المقبس نفسه دون إعادة تمديد الأسلاك.' },
        { type: 'table', head: ['When interns are added…', 'With an <code>instanceof</code> chain', 'With polymorphism'], rows: [
          ['The pay loop', 'add a new <code>else if</code>', 'no change'],
          ['Other loops (report, maximum, tax)', 'add a branch in each one', 'no change'],
          ['Risk', 'forget one place, wrong results', 'the compiler forces <code>pay()</code> in Intern']
        ] },
        { type: 'note', kind: 'exam', en: "A classic exam question: \"A new type of employee is added. Which parts of the program must change?\" The expected answer: only the new subclass (which must override the abstract method) and the code that <b>creates</b> objects. Loops that call the polymorphic method do not change.", ar: 'سؤال شائع: ما الذي يتغير عند إضافة نوع جديد؟ الصنف الجديد ومكان إنشاء الكائنات فقط.' },
        { type: 'note', kind: 'tip', en: "The array type can also be an <b>interface</b>. A <code>Payable[]</code> array (Lesson 4) can hold invoices, salary slips and fines together, even though they are not in the same class family. The same open-closed idea works: a new class that implements Payable fits into the old loop." },
        { type: 'check', q: 'The company adds <code>class Driver extends Employee</code>. What must change in the payroll program?', options: ['Every loop that uses <code>pay()</code>', 'Only the new class and the line that creates the objects', 'The abstract class Employee', 'Every other subclass'], answer: 1, explain: "This is the open-closed idea: the new type is added, and the working loops stay closed to changes." },
        { type: 'steps', title: 'Worked example: the pay-day report', problem: 'Print a payslip line for every employee (name, type and pay with two decimals), then the total and the average pay. The staff list includes the new intern.',
          steps: [
            { en: 'Reuse the family: <code>Employee</code>, <code>Salaried</code>, <code>Hourly</code>, <code>Commission</code>, plus the new <code>Intern</code>.', code: J`
              Employee[] staff = {
                  new Salaried("Huda", 9000),
                  new Hourly("Fahad", 60, 100),
                  new Commission("Reem", 4000, 50000),
                  new Intern("Omar", 3000)
              };
            ` },
            { en: 'For the type, use <code>getClass().getSimpleName()</code> (Lesson 3): it gives the real class name of each object.', code: J`
              e.getClass().getSimpleName()     // "Salaried", "Hourly", ...
            ` },
            { en: 'One loop prints each payslip with <code>printf</code> and adds to the total.', code: J`
              for (Employee e : staff) {
                  System.out.printf("%s (%s): %.2f SAR%n", e.getName(), e.getClass().getSimpleName(), e.pay());
                  total += e.pay();
              }
            ` },
            { en: 'The average is the total divided by the number of employees, <code>staff.length</code>.', code: J`
              System.out.printf("Total: %.2f SAR%n", total);
              System.out.printf("Average: %.2f SAR%n", total / staff.length);
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Employee[] staff = {
                        new Salaried("Huda", 9000),
                        new Hourly("Fahad", 60, 100),
                        new Commission("Reem", 4000, 50000),
                        new Intern("Omar", 3000)
                    };
                    double total = 0;
                    for (Employee e : staff) {
                        System.out.printf("%s (%s): %.2f SAR%n", e.getName(), e.getClass().getSimpleName(), e.pay());
                        total += e.pay();
                    }
                    System.out.printf("Total: %.2f SAR%n", total);
                    System.out.printf("Average: %.2f SAR%n", total / staff.length);
                }
            }

            abstract class Employee {
                private String name;
                Employee(String name) { this.name = name; }
                String getName() { return name; }
                abstract double pay();
            }

            class Salaried extends Employee {
                private double salary;
                Salaried(String name, double salary) { super(name); this.salary = salary; }
                @Override
                double pay() { return salary; }
            }

            class Hourly extends Employee {
                private double rate;
                private int hours;
                Hourly(String name, double rate, int hours) { super(name); this.rate = rate; this.hours = hours; }
                @Override
                double pay() { return rate * hours; }
            }

            class Commission extends Employee {
                private double base, sales;
                Commission(String name, double base, double sales) { super(name); this.base = base; this.sales = sales; }
                @Override
                double pay() { return base + sales * 0.05; }
            }

            class Intern extends Employee {
                private double allowance;
                Intern(String name, double allowance) { super(name); this.allowance = allowance; }
                @Override
                double pay() { return allowance; }
            }
          `, out: J`
            Huda (Salaried): 9000.00 SAR
            Fahad (Hourly): 6000.00 SAR
            Reem (Commission): 6500.00 SAR
            Omar (Intern): 3000.00 SAR
            Total: 24500.00 SAR
            Average: 6125.00 SAR
          `, ar: 'أضفنا Intern دون تغيير الحلقة. المجموع 24500 والمتوسط 24500 ÷ 4 = 6125.' }
      ],
      mistakes: [
        { title: 'Computing the pay with an instanceof chain', en: "This puts every formula in <code>main</code>. Each new type means editing this chain, and every other loop like it.", code: J`
          if (e instanceof Salaried) { total += ((Salaried) e).getSalary(); }
          else if (e instanceof Hourly) { total += ((Hourly) e).getRate() * ((Hourly) e).getHours(); }
          // better: total += e.pay();
        `, ar: 'ضع{{g:|ي}} المعادلة داخل كل صنف واستدع{{g:|ي}} e.pay().' },
        { title: 'Giving the array a subclass type', en: "A <code>Salaried[]</code> array can only hold Salaried objects. Use the superclass type for a mixed array.", code: J`
          Salaried[] staff = { new Salaried("Huda", 9000), new Hourly("Fahad", 60, 100) };   // error
          Employee[] staff = { new Salaried("Huda", 9000), new Hourly("Fahad", 60, 100) };   // correct
        ` },
        { title: 'Leaving empty slots in the array', en: "<code>new Employee[5]</code> with only 3 objects stored leaves two <code>null</code> slots. The loop then calls <code>pay()</code> on <code>null</code> and the program stops with a <code>NullPointerException</code>. Make the array the right size, or count how many slots are filled." },
        { title: 'Writing a fake pay() in the superclass', en: "If Employee has <code>double pay() { return 0; }</code>, a new subclass that forgets <code>pay()</code> quietly earns 0. Make it <code>abstract</code> so the compiler forces every subclass to write it." }
      ],
      remember: [
        "A <b>polymorphic array</b> has a superclass (or interface) type and holds objects of many subclasses.",
        "One loop with <code>e.pay()</code> gives totals, maximums and counts; no line asks about the type.",
        "Each formula lives in its own class, not in <code>main</code>.",
        "Adding a type = one new class + creating its objects; working loops do not change (the open-closed idea).",
        "Make the shared method <code>abstract</code> so no new class can forget it."
      ],
      rememberAr: 'مصفوفة من نوع الأب وحلقة واحدة تكفي للمجموع والأكبر والعدّ. النوع الجديد صنف جديد فقط، والحلقة لا تتغير.',
      practice: [
        { t: 'mcq', q: "What does the <b>open-closed idea</b> mean, in simple words?", options: ['Every class must be public', 'You can add new types without changing code that already works', 'Arrays must be closed after the loop', 'A class can be opened only once'], answer: 1, explain: "Open for adding new classes, closed for changing working code. Polymorphism makes it possible.", qAr: 'ما معنى فكرة مفتوح للإضافة ومغلق للتعديل؟' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Employee[] staff = { new Salaried(5000), new Hourly(40, 150), new Salaried(7000) };
                  double total = 0;
                  int count = 0;
                  for (Employee e : staff) {
                      total += e.pay();
                      if (e.pay() >= 6000) {
                          count++;
                      }
                  }
                  System.out.println(total);
                  System.out.println(count);
              }
          }

          abstract class Employee {
              abstract double pay();
          }

          class Salaried extends Employee {
              private double salary;
              Salaried(double salary) { this.salary = salary; }
              double pay() { return salary; }
          }

          class Hourly extends Employee {
              private double rate;
              private int hours;
              Hourly(double rate, int hours) { this.rate = rate; this.hours = hours; }
              double pay() { return rate * hours; }
          }
        `, answer: J`
          18000.0
          2
        `, explain: "Pays: 5000, 40 * 150 = 6000, 7000. Total 18000.0. Pays of at least 6000: the hourly one and the last one, so 2." },
        { t: 'fill', q: "Complete the payroll loop.", code: J`
          ___[] staff = { new Salaried(9000), new Hourly(60, 100) };
          double total = 0;
          for (Employee e : staff) {
              total += e.___();
          }
        `, answers: ['Employee', 'pay'], explain: "The array needs the superclass type to hold both kinds, and <code>pay()</code> is the shared method." },
        { t: 'order', q: "Put the lines in order to find the highest-paid employee.", lines: [
          'Employee top = staff[0];',
          'for (Employee e : staff) {',
          '    if (e.pay() > top.pay()) {',
          '        top = e;',
          '    }',
          '}',
          'System.out.println(top.getName());'
        ], explain: "Start with the first employee, compare each one with the best so far, and print the name after the loop." },
        { t: 'bug', q: "This program does not compile. Tap the line with the bug.", qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Salaried[] staff = { new Salaried(9000), new Hourly(50, 80) };
                    double total = 0;
                    for (Employee e : staff) {
                        total += e.pay();
                    }
                    System.out.println(total);
                }
            }
            abstract class Employee { abstract double pay(); }
            class Salaried extends Employee { double s; Salaried(double s) { this.s = s; } double pay() { return s; } }
            class Hourly extends Employee { double r; int h; Hourly(double r, int h) { this.r = r; this.h = h; } double pay() { return r * h; } }
          `, bug: 3,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Employee[] staff = { new Salaried(9000), new Hourly(50, 80) };
                    double total = 0;
                    for (Employee e : staff) {
                        total += e.pay();
                    }
                    System.out.println(total);
                }
            }
            abstract class Employee { abstract double pay(); }
            class Salaried extends Employee { double s; Salaried(double s) { this.s = s; } double pay() { return s; } }
            class Hourly extends Employee { double r; int h; Hourly(double r, int h) { this.r = r; this.h = h; } double pay() { return r * h; } }
          `,
          hint: "Can an Hourly object go into a slot of type Salaried?",
          explain: "An Hourly employee is not a Salaried employee, so it does not fit in a <code>Salaried[]</code> array. The array needs the common superclass type <code>Employee[]</code>. Then the program prints 9000 + 4000 = <code>13000.0</code>.",
          explainAr: 'المصفوفة المختلطة يجب أن تكون من نوع الأب Employee.' },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> lines: <code>S NAME SALARY</code>, <code>H NAME RATE HOURS</code> or <code>I NAME ALLOWANCE</code>. Write the missing class <code>Intern</code> (its pay is the allowance). Store everyone in one <code>Employee[]</code> array, then use <b>one</b> loop to print <code>NAME: PAY</code> for each person and finally <code>Total: TOTAL</code>. No prompts.", qAr: 'أضف الصنف Intern واطبع راتب كل موظف والمجموع بحلقة واحدة.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Employee[] staff = new Employee[n];
                    // read each line and create the right object
                    // one loop: print NAME: PAY and add up the total
                }
            }

            abstract class Employee {
                private String name;
                Employee(String name) { this.name = name; }
                String getName() { return name; }
                abstract double pay();
            }

            class Salaried extends Employee {
                private double salary;
                Salaried(String name, double salary) { super(name); this.salary = salary; }
                double pay() { return salary; }
            }

            class Hourly extends Employee {
                private double rate;
                private int hours;
                Hourly(String name, double rate, int hours) { super(name); this.rate = rate; this.hours = hours; }
                double pay() { return rate * hours; }
            }

            // TODO: class Intern extends Employee
          `,
          tests: [{ stdin: '3\nS Huda 9000\nH Fahad 50 80\nI Omar 3000', expected: 'Huda: 9000.0\nFahad: 4000.0\nOmar: 3000.0\nTotal: 16000.0' }, { stdin: '2\nI Sara 2500\nI Ali 2500', expected: 'Sara: 2500.0\nAli: 2500.0\nTotal: 5000.0' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Employee[] staff = new Employee[n];
                    for (int i = 0; i < n; i++) {
                        String kind = sc.next();
                        String name = sc.next();
                        if (kind.equals("S")) {
                            staff[i] = new Salaried(name, sc.nextDouble());
                        } else if (kind.equals("H")) {
                            staff[i] = new Hourly(name, sc.nextDouble(), sc.nextInt());
                        } else {
                            staff[i] = new Intern(name, sc.nextDouble());
                        }
                    }
                    double total = 0;
                    for (Employee e : staff) {
                        System.out.println(e.getName() + ": " + e.pay());
                        total += e.pay();
                    }
                    System.out.println("Total: " + total);
                }
            }

            abstract class Employee {
                private String name;
                Employee(String name) { this.name = name; }
                String getName() { return name; }
                abstract double pay();
            }

            class Salaried extends Employee {
                private double salary;
                Salaried(String name, double salary) { super(name); this.salary = salary; }
                double pay() { return salary; }
            }

            class Hourly extends Employee {
                private double rate;
                private int hours;
                Hourly(String name, double rate, int hours) { super(name); this.rate = rate; this.hours = hours; }
                double pay() { return rate * hours; }
            }

            class Intern extends Employee {
                private double allowance;
                Intern(String name, double allowance) { super(name); this.allowance = allowance; }
                double pay() { return allowance; }
            }
          `,
          hint: "Read the letter and the name first, then the numbers that this kind needs. The <code>if</code> chain is only for <b>creating</b> objects; the printing loop has no <code>if</code>.",
          explain: "The input decides which object to create. After that, one loop handles all employees with <code>e.pay()</code>. Adding Intern did not change the loop." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 9
    {
      title: 'Interfaces in more depth: default, static and extends',
      titleAr: 'الواجهات بعمق: default و static و extends',
      minutes: 30,
      body: [
        { type: 'h', en: 'Why do interfaces need more than headers?' },
        { type: 'p', en: "Imagine that 50 classes implement <code>Payable</code>. Now the bank wants every payable thing to print a receipt. If you add a normal abstract method <code>receipt()</code> to the interface, all 50 classes stop compiling until each one writes it. Modern Java (since version 8) solves this with <b>default methods</b>: a method <b>with a body</b> inside the interface. Every class gets it for free, and a class may still override it.",
          ar: 'الدالة default لها جسم داخل الواجهة، فتحصل عليها كل الأصناف دون أن تكتبها.' },
        { type: 'analogy', title: 'A phone update', en: "A system update adds a new feature to every phone, with a default setting already chosen. Owners who are happy do nothing. Owners who want something different change the setting on their own phone. A default method is that new feature: every class gets the default behaviour, and any class may replace it.",
          ar: 'مثل تحديث يضيف ميزة بإعداد افتراضي، ويمكن لكل مستخدم تغييره.' },
        { type: 'h', en: 'Default methods' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Payable a = new Invoice(250);
                  Payable b = new Fine(150);
                  System.out.println(a.receipt());
                  System.out.println(b.receipt());
              }
          }

          interface Payable {
              double amount();

              default String receipt() {
                  return "Paid " + amount() + " SAR";
              }
          }

          class Invoice implements Payable {
              private double total;
              Invoice(double total) { this.total = total; }
              public double amount() { return total; }
          }

          class Fine implements Payable {
              private double value;
              Fine(double value) { this.value = value; }
              public double amount() { return value; }

              @Override
              public String receipt() { return "Traffic fine paid: " + amount() + " SAR"; }
          }
        `, out: J`
          Paid 250.0 SAR
          Traffic fine paid: 150.0 SAR
        ` },
        { type: 'lines', rows: [
          ['default String receipt() { ... }', 'The keyword <code>default</code> allows a body inside the interface. It is public automatically.'],
          ['return "Paid " + amount() + " SAR";', 'A default method may call the abstract methods. Dynamic binding runs each class\'s <code>amount()</code>.'],
          ['class Invoice', 'Invoice does not write <code>receipt()</code>, so it uses the default one.'],
          ['public String receipt() in Fine', 'Fine overrides the default with its own text. It must be <code>public</code>.']
        ], ar: 'Invoice تستخدم النسخة الافتراضية، و Fine تعيد تعريفها.' },
        { type: 'check', q: 'A class implements an interface that has one abstract method and one default method. What must the class write?', options: ['Both methods', 'Only the abstract method; the default one is optional', 'Only the default method', 'Nothing'], answer: 1, explain: "The abstract method is a promise the class must keep. The default method already has a body; overriding it is optional." },
        { type: 'h', en: 'Static methods in an interface' },
        { type: 'p', en: "Sometimes a helper belongs to the <i>idea</i> of the interface, not to one object. For example: \"add up the amounts of an array of Payable things\". An interface may have a <b>static method</b> for this. You call it with the <b>interface name</b>, like <code>Math.max</code>." },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  Payable[] bills = { new Invoice(250), new Invoice(100) };
                  System.out.println(Payable.total(bills));
              }
          }

          interface Payable {
              double amount();

              static double total(Payable[] items) {
                  double sum = 0;
                  for (Payable p : items) {
                      sum += p.amount();
                  }
                  return sum;
              }
          }

          class Invoice implements Payable {
              private double total;
              Invoice(double total) { this.total = total; }
              public double amount() { return total; }
          }
        `, out: J`
          350.0
        ` },
        { type: 'lines', rows: [
          ['static double total(Payable[] items)', 'A static method with a body inside the interface. It does not belong to any object.'],
          ['Payable.total(bills)', 'Called with the interface name: 250 + 100 = 350.0.']
        ], ar: 'الدالة الساكنة في الواجهة تُستدعى باسم الواجهة.' },
        { type: 'note', kind: 'exam', en: "A static interface method is <b>not inherited</b>. <code>Payable.total(bills)</code> is correct; <code>Invoice.total(bills)</code> and <code>bills[0].total(bills)</code> are compile errors.", ar: 'لا تُستدعى الدالة الساكنة للواجهة باسم الصنف أو الكائن.' },
        { type: 'h', en: 'Constants in an interface' },
        { type: 'p', en: "Every field in an interface is automatically <code>public static final</code>: a <b>constant</b> shared by everyone, which can never change. By custom its name is written in capital letters. Use it with the interface name, or directly inside a class that implements the interface." },
        { type: 'code', code: J`
          interface Chargeable {
              int MAX_LEVEL = 100;          // public static final, automatically
          }

          System.out.println(Chargeable.MAX_LEVEL);   // 100
          Chargeable.MAX_LEVEL = 120;                 // compile error: it is final
        ` },
        { type: 'h', en: 'One interface can extend another' },
        { type: 'p', en: "Interfaces can build on each other. Every device has a name. A <i>smart</i> device can also connect to a network. So <code>SmartDevice</code> <b>extends</b> <code>Device</code>: it keeps <code>name()</code> and adds <code>connect()</code>. A class that implements SmartDevice must write the methods of <b>both</b>.",
          ar: 'واجهة يمكن أن ترث من واجهة أخرى بـ extends، والصنف ينفذ دوال الاثنتين.' },
        { type: 'code', run: true, code: J`
          public class Main {
              public static void main(String[] args) {
                  SmartDevice lamp = new SmartLamp();
                  System.out.println(lamp.name());
                  lamp.connect("home network");
                  Device d = lamp;
                  System.out.println(d.name());
              }
          }

          interface Device {
              String name();
          }

          interface SmartDevice extends Device {
              void connect(String network);
          }

          class SmartLamp implements SmartDevice {
              public String name() { return "Smart lamp"; }

              public void connect(String network) {
                  System.out.println("Lamp connected to " + network);
              }
          }
        `, out: J`
          Smart lamp
          Lamp connected to home network
          Smart lamp
        ` },
        { type: 'lines', rows: [
          ['interface SmartDevice extends Device', 'Interface to interface uses <code>extends</code> (never <code>implements</code>).'],
          ['class SmartLamp implements SmartDevice', 'SmartLamp must write <code>connect()</code> <b>and</b> <code>name()</code>, which comes from Device.'],
          ['Device d = lamp;', 'A SmartLamp is a SmartDevice, and a SmartDevice is a Device, so this upcast is fine.']
        ] },
        { type: 'check', q: '<code>interface B extends A</code>. A has <code>void x();</code>, B has <code>void y();</code>. <code>class C implements B</code> must write…', options: ['only y()', 'only x()', 'both x() and y()', 'nothing'], answer: 2, explain: "B includes everything from A, so C must keep both promises." },
        { type: 'h', en: 'One parent class and several interfaces' },
        { type: 'p', en: "Now the full header. A class may extend <b>one</b> class and implement <b>many</b> interfaces. Write <code>extends</code> first, then <code>implements</code>, then the interface names separated by commas. The class inherits real code from its parent and abilities from every interface: this is how Java gives you multiple inheritance safely." },
        { type: 'code', code: J`
          class ElectricCar extends Vehicle implements Chargeable, Trackable {
              ...
          }
        ` },
        { type: 'analogy', title: 'A uniform with badges', en: "A scout wears one uniform: it comes from one organisation (the parent class) and gives the shared look. On the uniform there are many badges: first aid, camping, map reading (the interfaces). Each badge is a skill the scout promises to have. One uniform, many badges.",
          ar: 'زي واحد (صنف أب واحد) وعليه شارات كثيرة (واجهات).' },
        { type: 'steps', title: 'Worked example: an electric car in a company fleet', problem: 'An electric car is a Vehicle (plate number), it is Chargeable (which extends Device), and it is Trackable. Use a default method, a static helper and a constant together.',
          steps: [
            { en: 'The parent class holds the shared code: the plate and <code>describe()</code>.', code: J`
              class Vehicle {
                  private String plate;
                  Vehicle(String plate) { this.plate = plate; }
                  String describe() { return "Vehicle " + plate; }
              }
            ` },
            { en: '<code>Chargeable</code> extends <code>Device</code>. It has a constant, two abstract methods, two default methods and one static helper.', code: J`
              interface Chargeable extends Device {
                  int MAX_LEVEL = 100;
                  int getBattery();
                  void charge(int amount);
                  default String status() { return name() + ": battery " + getBattery() + "%"; }
                  default boolean isLow() { return getBattery() < 20; }
                  static int percent(int part, int whole) { return part * 100 / whole; }
              }
            ` },
            { en: 'The class header: one parent, two interfaces. It writes every abstract method: <code>name()</code> from Device, the two from Chargeable, and <code>location()</code> from Trackable. All are <code>public</code>.', code: J`
              class ElectricCar extends Vehicle implements Chargeable, Trackable {
            ` },
            { en: 'In <code>main</code>, call the inherited method, the default methods, and the static helper with the interface name.', code: J`
              System.out.println(car.describe());
              System.out.println(car.status());
              System.out.println(Chargeable.percent(40, 80) + "%");
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    ElectricCar car = new ElectricCar("KSA-1234", 30);
                    car.charge(50);
                    System.out.println(car.describe());
                    System.out.println(car.status());
                    System.out.println("Low battery? " + car.isLow());
                    System.out.println("Where? " + car.location());
                    System.out.println(Chargeable.percent(40, 80) + "%");
                }
            }

            class Vehicle {
                private String plate;
                Vehicle(String plate) { this.plate = plate; }
                String describe() { return "Vehicle " + plate; }
            }

            interface Device {
                String name();
            }

            interface Chargeable extends Device {
                int MAX_LEVEL = 100;
                int getBattery();
                void charge(int amount);

                default String status() { return name() + ": battery " + getBattery() + "%"; }

                default boolean isLow() { return getBattery() < 20; }

                static int percent(int part, int whole) { return part * 100 / whole; }
            }

            interface Trackable {
                String location();
            }

            class ElectricCar extends Vehicle implements Chargeable, Trackable {
                private int battery;

                ElectricCar(String plate, int battery) {
                    super(plate);
                    this.battery = battery;
                }

                public String name() { return "Electric car"; }
                public int getBattery() { return battery; }
                public void charge(int amount) { battery = Math.min(MAX_LEVEL, battery + amount); }
                public String location() { return "Riyadh"; }
            }
          `, out: J`
            Vehicle KSA-1234
            Electric car: battery 80%
            Low battery? false
            Where? Riyadh
            50%
          `, ar: 'الصنف يرث الكود من Vehicle، ويحصل على status و isLow من الواجهة مجانًا، والدالة الساكنة تُستدعى باسم الواجهة.' },
        { type: 'note', kind: 'warn', en: "If two interfaces give the <b>same</b> default method (same name and parameters), Java cannot choose. The class must override that method itself. This is the only place where the diamond problem can appear with interfaces, and Java forces you to settle it." }
      ],
      mistakes: [
        { title: 'Forgetting the word default', en: "A method with a body in an interface needs <code>default</code> (or <code>static</code>). Without it, Java thinks it is an abstract method and refuses the body.", code: J`
          interface Payable {
              double amount();
              String receipt() { return "Paid"; }           // error
              default String receipt() { return "Paid"; }   // correct
          }
        `, ar: 'الدالة التي لها جسم في الواجهة تحتاج default أو static.' },
        { title: 'Calling a static interface method through a class or an object', en: "Static interface methods are not inherited. Use the interface name.", code: J`
          car.percent(40, 80);           // error
          Chargeable.percent(40, 80);    // correct
        ` },
        { title: 'Trying to change an interface constant', en: "Interface fields are <code>final</code>. <code>Chargeable.MAX_LEVEL = 120;</code> is a compile error." },
        { title: 'Writing implements before extends', en: "The order in the header is fixed: <code>extends</code> first, then <code>implements</code>.", code: J`
          class ElectricCar implements Chargeable extends Vehicle { }   // error
          class ElectricCar extends Vehicle implements Chargeable { }   // correct
        ` }
      ],
      remember: [
        "A <b>default</b> method has a body inside the interface; classes get it for free and may override it.",
        "A <b>static</b> interface method is a helper called with the interface name: <code>Payable.total(bills)</code>.",
        "Interface fields are constants: <code>public static final</code>.",
        "<code>interface B extends A</code>: a class that implements B must write the methods of A and B.",
        "Header order: <code>class X extends Parent implements A, B</code>.",
        "Two interfaces with the same default method: the class must override it."
      ],
      rememberAr: 'default دالة لها جسم في الواجهة، و static تُستدعى باسم الواجهة، والحقول ثوابت. الترتيب: extends ثم implements.',
      practice: [
        { t: 'mcq', q: "What does the keyword <code>default</code> allow inside an interface?", options: ['A field that can change', 'A method with a body that implementing classes get for free', 'A constructor', 'A private class'], answer: 1, explain: "A default method has a body. Classes inherit it and may override it.", qAr: 'ماذا تسمح الكلمة default داخل الواجهة؟' },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Notifier a = new Sms();
                  Notifier b = new Email();
                  System.out.println(a.sendTwice("Hi"));
                  System.out.println(b.sendTwice("Hi"));
              }
          }

          interface Notifier {
              String send(String text);

              default String sendTwice(String text) {
                  return send(text) + " | " + send(text);
              }
          }

          class Sms implements Notifier {
              public String send(String text) { return "SMS: " + text; }
          }

          class Email implements Notifier {
              public String send(String text) { return "Email: " + text; }

              @Override
              public String sendTwice(String text) { return "One email is enough: " + text; }
          }
        `, answer: J`
          SMS: Hi | SMS: Hi
          One email is enough: Hi
        `, explain: "Sms uses the default <code>sendTwice</code>, which calls Sms's <code>send</code> twice. Email overrides <code>sendTwice</code>, so its own version runs.", explainAr: 'Sms تستخدم النسخة الافتراضية، و Email تعيد تعريفها.' },
        { t: 'fill', q: "Make <code>SmartDevice</code> build on <code>Device</code>, and give it a method with a body.", code: J`
          interface Device {
              String name();
          }

          interface SmartDevice ___ Device {
              void connect(String network);

              ___ String status() {
                  return name() + " is online";
              }
          }
        `, answers: ['extends', 'default'], explain: "An interface uses <code>extends</code> to build on another interface. A method with a body needs <code>default</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  System.out.println(Grades.PASS_MARK);
                  System.out.println(Grades.letter(95));
                  System.out.println(Grades.letter(72));
                  System.out.println(Grades.letter(40));
              }
          }

          interface Grades {
              int PASS_MARK = 60;

              static String letter(int mark) {
                  if (mark >= 90) {
                      return "A";
                  }
                  if (mark >= PASS_MARK) {
                      return "Pass";
                  }
                  return "Fail";
              }
          }
        `, answer: J`
          60
          A
          Pass
          Fail
        `, explain: "<code>PASS_MARK</code> is a constant (60). The static method is called with the interface name: 95 gives A, 72 is at least 60 so Pass, 40 gives Fail." },
        { t: 'bug', q: "This program does not compile. Tap the line with the bug.", qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
            public class Main {
                public static void main(String[] args) {
                    ElectricCar car = new ElectricCar();
                    System.out.println(car.wheels() + " wheels, " + car.getBattery() + "%");
                }
            }
            class Vehicle {
                int wheels() { return 4; }
            }
            interface Chargeable {
                int getBattery();
            }
            class ElectricCar implements Chargeable extends Vehicle {
                public int getBattery() { return 75; }
            }
          `, bug: 13,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    ElectricCar car = new ElectricCar();
                    System.out.println(car.wheels() + " wheels, " + car.getBattery() + "%");
                }
            }
            class Vehicle {
                int wheels() { return 4; }
            }
            interface Chargeable {
                int getBattery();
            }
            class ElectricCar extends Vehicle implements Chargeable {
                public int getBattery() { return 75; }
            }
          `,
          hint: "Look at the order of the words in the class header.",
          explain: "In a class header <code>extends</code> must come before <code>implements</code>. With the right order, ElectricCar inherits <code>wheels()</code> from Vehicle and keeps the Chargeable promise, and the program prints <code>4 wheels, 75%</code>.",
          explainAr: 'الترتيب الصحيح: extends أولًا ثم implements.' },
        { t: 'code', q: "Complete the interface <code>Discountable</code>: add a <b>default</b> method <code>int finalPrice()</code> that returns the price minus 10% (use integers: <code>price() * 90 / 100</code>). Then make <code>Ebook</code> override <code>finalPrice()</code> to give half price. Input: <code>book</code> or <code>ebook</code>, then a price. The program prints the price and the final price. No prompts.", qAr: 'أضف دالة default للخصم 10%، واجعل Ebook يعيد تعريفها بنصف السعر.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String kind = sc.next();
                    int price = sc.nextInt();
                    Discountable d;
                    if (kind.equals("ebook")) {
                        d = new Ebook(price);
                    } else {
                        d = new Book(price);
                    }
                    System.out.println(d.price());
                    System.out.println(d.finalPrice());
                }
            }

            interface Discountable {
                int price();
                // TODO: default int finalPrice()
            }

            class Book implements Discountable {
                private int price;
                Book(int price) { this.price = price; }
                public int price() { return price; }
            }

            class Ebook implements Discountable {
                private int price;
                Ebook(int price) { this.price = price; }
                public int price() { return price; }
                // TODO: override finalPrice(): half price
            }
          `,
          tests: [{ stdin: 'book 200', expected: '200\n180' }, { stdin: 'ebook 200', expected: '200\n100' }, { stdin: 'book 55', expected: '55\n49' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    String kind = sc.next();
                    int price = sc.nextInt();
                    Discountable d;
                    if (kind.equals("ebook")) {
                        d = new Ebook(price);
                    } else {
                        d = new Book(price);
                    }
                    System.out.println(d.price());
                    System.out.println(d.finalPrice());
                }
            }

            interface Discountable {
                int price();

                default int finalPrice() {
                    return price() * 90 / 100;
                }
            }

            class Book implements Discountable {
                private int price;
                Book(int price) { this.price = price; }
                public int price() { return price; }
            }

            class Ebook implements Discountable {
                private int price;
                Ebook(int price) { this.price = price; }
                public int price() { return price; }

                @Override
                public int finalPrice() { return price / 2; }
            }
          `,
          hint: "Inside the interface write <code>default int finalPrice() { return price() * 90 / 100; }</code>. In Ebook the override must be <code>public</code>.",
          explain: "Book uses the default: 200 * 90 / 100 = 180, and 55 * 90 / 100 = 4950 / 100 = 49 (integer division). Ebook overrides it: 200 / 2 = 100." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 10
    {
      title: 'Comparator vs Comparable: sorting by different keys',
      titleAr: 'Comparator مقابل Comparable: الترتيب بمفاتيح مختلفة',
      minutes: 30,
      body: [
        { type: 'h', en: 'One list, many orders' },
        { type: 'p', en: "The same students are needed in different orders: the registrar wants them by ID, the attendance sheet by name, the honour list by GPA with the highest first. <code>Comparable</code> (Lesson 5) gives a class only <b>one</b> order, written inside the class. This is its <b>natural order</b>. For every other order we need a rule that lives <b>outside</b> the class: the interface <code>Comparator&lt;T&gt;</code> from <code>java.util</code>, with one method <code>int compare(T a, T b)</code>.",
          ar: 'Comparable يعطي ترتيبًا طبيعيًا واحدًا داخل الصنف، و Comparator قاعدة خارجية يمكن أن تتعدد.' },
        { type: 'analogy', title: 'Your height and an outside judge', en: "Your height is part of you: it gives one natural way to line up. A <b>Comparator</b> is a judge who comes from outside with a rule card. Today the card says \"by name\", tomorrow \"by GPA\". You can bring as many judges as you like, and the students themselves never change.",
          ar: 'الطول جزء منك (Comparable)، أما الحكم الخارجي فيحمل قاعدة يمكن تغييرها (Comparator).' },
        { type: 'table', head: ['', 'Comparable&lt;T&gt;', 'Comparator&lt;T&gt;'], rows: [
          ['Method', '<code>int compareTo(T other)</code>: one parameter', '<code>int compare(T a, T b)</code>: two parameters'],
          ['Where is it written?', 'inside the class itself', 'in a separate class or a lambda'],
          ['How many orders?', 'one (the natural order)', 'as many as you need'],
          ['How to sort', '<code>Arrays.sort(arr)</code>', '<code>Arrays.sort(arr, comparator)</code>'],
          ['Package', '<code>java.lang</code> (no import)', '<code>java.util</code> (import needed)']
        ] },
        { type: 'h', en: 'A Comparator class' },
        { type: 'p', en: "Below, <code>Student</code> has a natural order by ID. A separate class <code>ByName</code> implements <code>Comparator&lt;Student&gt;</code>. Its <code>compare(a, b)</code> follows the same sign rule as <code>compareTo</code>: negative means <code>a</code> comes first." },
        { type: 'code', run: true, code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Student[] list = {
                      new Student(101, "Nouf", 3.4),
                      new Student(203, "Badr", 3.9),
                      new Student(150, "Hessa", 2.8)
                  };
                  Arrays.sort(list);
                  System.out.println(Arrays.toString(list));
                  Arrays.sort(list, new ByName());
                  System.out.println(Arrays.toString(list));
              }
          }

          class Student implements Comparable<Student> {
              private int id;
              private String name;
              private double gpa;

              Student(int id, String name, double gpa) {
                  this.id = id;
                  this.name = name;
                  this.gpa = gpa;
              }

              String getName() { return name; }
              double getGpa() { return gpa; }

              @Override
              public int compareTo(Student other) {      // natural order: by ID
                  return Integer.compare(id, other.id);
              }

              @Override
              public String toString() { return name; }
          }

          class ByName implements Comparator<Student> {
              @Override
              public int compare(Student a, Student b) {
                  return a.getName().compareTo(b.getName());
              }
          }
        `, out: J`
          [Nouf, Hessa, Badr]
          [Badr, Hessa, Nouf]
        ` },
        { type: 'lines', rows: [
          ['Arrays.sort(list);', 'No comparator: the natural order <code>compareTo</code> is used. IDs 101, 150, 203 give Nouf, Hessa, Badr.'],
          ['class ByName implements Comparator<Student>', 'A small class whose only job is to compare two students.'],
          ['public int compare(Student a, Student b)', 'Two parameters: neither of them is <code>this</code>. The judge compares two other objects.'],
          ['Arrays.sort(list, new ByName());', 'We pass a ByName <b>object</b>. Java calls its <code>compare</code> again and again.']
        ], ar: 'نمرّر كائنًا من ByName إلى Arrays.sort ليرتب حسب الاسم.' },
        { type: 'check', q: 'How many parameters does <code>compare</code> in a Comparator have?', options: ['None', 'One, plus <code>this</code>', 'Two', 'Three'], answer: 2, explain: "<code>compare(a, b)</code> gets both objects. <code>compareTo(other)</code> has one parameter because <code>this</code> is the first object." },
        { type: 'p', en: "Trace the judge <code>ByName</code> on a few pairs. The sign rule is exactly the one from Lesson 5; only the place where the rule is written has changed.",
          ar: 'قاعدة الإشارة نفسها: سالب يعني a قبل b.' },
        { type: 'table', head: ['Call', 'Result', 'Meaning'], rows: [
          ['<code>compare(Nouf, Badr)</code>', 'positive (N after B)', 'Badr goes before Nouf'],
          ['<code>compare(Badr, Hessa)</code>', 'negative (B before H)', 'Badr goes before Hessa'],
          ['<code>compare(Hessa, Hessa)</code>', 'zero', 'equal: they keep their order']
        ] },
        { type: 'analogy', title: 'One library, many catalogues', en: "A library keeps its books on the shelves in one fixed order, by subject number: that is the natural order. But the library also has catalogues: one by title, one by author, one by year. The books do not move when you open a different catalogue; each catalogue is just another rule for listing them. Each Comparator is one more catalogue.",
          ar: 'ترتيب الرفوف هو الترتيب الطبيعي، والفهارس المختلفة هي المقارنات.' },
        { type: 'h', en: 'A Comparator as a lambda' },
        { type: 'p', en: "<code>Comparator</code> has exactly one abstract method, so it is a <b>functional interface</b> (Lesson 6). Instead of writing a whole class, you can write the rule as a lambda right where you sort. For the honour list we want the highest GPA first, so we swap <code>a</code> and <code>b</code> inside <code>Double.compare</code>.",
          ar: 'Comparator واجهة وظيفية، فيمكن كتابتها بلامدا في سطر واحد.' },
        { type: 'code', code: J`
          Arrays.sort(list, (a, b) -> Double.compare(b.getGpa(), a.getGpa()));
          // list is now: Badr (3.9), Nouf (3.4), Hessa (2.8)
        ` },
        { type: 'note', kind: 'tip', en: "Use a <b>class</b> when the same rule is needed in many places, or when it is long. Use a <b>lambda</b> for a short rule used once." },
        { type: 'p', en: "Does every class need a natural order? No. Give a class <code>Comparable</code> only when one order is obvious, such as lectures by start time or students by ID. When there is no obvious order (should products go by price? by name? by rating?), skip Comparable and use comparators only." },
        { type: 'h', en: 'Reversed order: three ways' },
        { type: 'p', en: "Often you need the opposite order. There are three easy ways. Two of them use ideas from this unit: <code>reversed()</code> is a <b>default method</b> of Comparator (Lesson 9), and <code>Collections.reverseOrder()</code> is a ready-made comparator that reverses the natural order." },
        { type: 'table', head: ['Way', 'Example', 'Reverses'], rows: [
          ['Swap the arguments', '<code>(a, b) -&gt; Double.compare(b.getGpa(), a.getGpa())</code>', 'your own rule'],
          ['<code>reversed()</code>', '<code>new ByName().reversed()</code>', 'any Comparator'],
          ['<code>Collections.reverseOrder()</code>', '<code>Arrays.sort(list, Collections.reverseOrder())</code>', 'the natural order (Comparable)']
        ] },
        { type: 'check', q: '<code>Student</code>\'s natural order is by ID. Which call sorts the students by ID, <b>largest first</b>?', options: ['<code>Arrays.sort(list)</code>', '<code>Arrays.sort(list, Collections.reverseOrder())</code>', '<code>Arrays.sort(list, new ByName())</code>', '<code>Arrays.sort(list, new ByName().reversed())</code>'], answer: 1, explain: "<code>Collections.reverseOrder()</code> reverses the natural order, which is by ID." },
        { type: 'steps', title: 'Worked example: a shop sorted four ways', problem: 'An online shop lists products. Show them by price (cheapest first), by name, by rating (best first) and by price (most expensive first).',
          steps: [
            { en: 'The natural order goes inside <code>Product</code>: by price, with <code>Comparable</code>.', code: J`
              public int compareTo(Product other) {
                  return Double.compare(price, other.price);
              }
            ` },
            { en: 'The name order is a separate <code>Comparator</code> class, because we may reuse it.', code: J`
              class ByName implements Comparator<Product> {
                  public int compare(Product a, Product b) {
                      return a.getName().compareTo(b.getName());
                  }
              }
            ` },
            { en: 'The rating order is used once, so a lambda is enough. Best first means <code>b</code> before <code>a</code>.', code: J`
              Arrays.sort(items, (a, b) -> Double.compare(b.getRating(), a.getRating()));
            ` },
            { en: 'Most expensive first is the natural order reversed. A small helper method prints each result.', code: J`
              Arrays.sort(items, Collections.reverseOrder());
              show("Price, high first", items);
            ` }
          ],
          code: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Product[] items = {
                        new Product("Pen", 5, 4.2),
                        new Product("Bag", 120, 4.8),
                        new Product("Lamp", 60, 3.9),
                        new Product("Cap", 35, 4.5)
                    };
                    Arrays.sort(items);
                    show("Price", items);
                    Arrays.sort(items, new ByName());
                    show("Name", items);
                    Arrays.sort(items, (a, b) -> Double.compare(b.getRating(), a.getRating()));
                    show("Rating", items);
                    Arrays.sort(items, Collections.reverseOrder());
                    show("Price, high first", items);
                }

                static void show(String title, Product[] items) {
                    System.out.println(title + ": " + Arrays.toString(items));
                }
            }

            class Product implements Comparable<Product> {
                private String name;
                private double price, rating;

                Product(String name, double price, double rating) {
                    this.name = name;
                    this.price = price;
                    this.rating = rating;
                }

                String getName() { return name; }
                double getRating() { return rating; }

                @Override
                public int compareTo(Product other) {
                    return Double.compare(price, other.price);
                }

                @Override
                public String toString() { return name; }
            }

            class ByName implements Comparator<Product> {
                @Override
                public int compare(Product a, Product b) {
                    return a.getName().compareTo(b.getName());
                }
            }
          `, out: J`
            Price: [Pen, Cap, Lamp, Bag]
            Name: [Bag, Cap, Lamp, Pen]
            Rating: [Bag, Cap, Pen, Lamp]
            Price, high first: [Bag, Lamp, Cap, Pen]
          `, ar: 'نفس المنتجات بأربعة ترتيبات: الطبيعي، وبالاسم، وبالتقييم، والطبيعي معكوسًا.' },
        { type: 'note', kind: 'exam', en: "A comparator works only with arrays of <b>objects</b>. <code>Arrays.sort(numbers, Collections.reverseOrder())</code> does not compile when <code>numbers</code> is an <code>int[]</code>. Use an <code>Integer[]</code> array instead.", ar: 'المقارن يعمل مع مصفوفات الكائنات فقط، وليس مع int[].' }
      ],
      mistakes: [
        { title: 'Mixing up compare and compareTo', en: "<code>compareTo</code> (Comparable) has one parameter and lives in the class. <code>compare</code> (Comparator) has two parameters.", code: J`
          class ByName implements Comparator<Student> {
              public int compareTo(Student other) { ... }       // wrong method for a Comparator
              public int compare(Student a, Student b) { ... }  // correct
          }
        `, ar: 'Comparator يحتاج compare بمعاملين.' },
        { title: 'Passing the class name instead of an object', en: "<code>Arrays.sort</code> needs a comparator <b>object</b>.", code: J`
          Arrays.sort(list, ByName);         // error
          Arrays.sort(list, new ByName());   // correct
        ` },
        { title: 'Forgetting the import', en: "<code>Comparator</code>, <code>Arrays</code> and <code>Collections</code> are in <code>java.util</code>. Without <code>import java.util.*;</code> the compiler cannot find them. (<code>Comparable</code> needs no import.)" },
        { title: 'Using a comparator with an int[] array', en: "Comparators compare objects. For a reversed array of numbers, use <code>Integer[]</code>, not <code>int[]</code>." }
      ],
      remember: [
        "<code>Comparable</code>: one natural order, <code>compareTo(other)</code>, written inside the class.",
        "<code>Comparator</code>: any number of extra orders, <code>compare(a, b)</code>, written outside the class.",
        "Sort with a rule: <code>Arrays.sort(arr, new ByName())</code> or <code>Arrays.sort(arr, (a, b) -&gt; ...)</code>.",
        "Reverse: swap the arguments, call <code>reversed()</code>, or use <code>Collections.reverseOrder()</code> for the natural order.",
        "Comparators work with arrays of objects only."
      ],
      rememberAr: 'Comparable ترتيب طبيعي واحد داخل الصنف، و Comparator قواعد خارجية متعددة بدالة compare ذات معاملين.',
      practice: [
        { t: 'mcq', q: "Which method does the interface <code>Comparator&lt;T&gt;</code> declare?", options: ['<code>int compareTo(T other)</code>', '<code>int compare(T a, T b)</code>', '<code>boolean equals(T a, T b)</code>', '<code>void sort(T[] arr)</code>'], answer: 1, explain: "A Comparator compares two objects given as parameters: <code>compare(a, b)</code>.", qAr: 'ما الدالة التي تعلنها الواجهة Comparator؟' },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Team[] league = { new Team("Falcons", 12), new Team("Eagles", 7), new Team("Hawks", 15) };
                  Arrays.sort(league, new ByPoints());
                  System.out.println(Arrays.toString(league));
                  Arrays.sort(league, new ByPoints().reversed());
                  System.out.println(Arrays.toString(league));
              }
          }

          class Team {
              String name;
              int points;
              Team(String name, int points) { this.name = name; this.points = points; }
              public String toString() { return name; }
          }

          class ByPoints implements Comparator<Team> {
              public int compare(Team a, Team b) {
                  return Integer.compare(a.points, b.points);
              }
          }
        `, answer: J`
          [Eagles, Falcons, Hawks]
          [Hawks, Falcons, Eagles]
        `, explain: "ByPoints sorts from the fewest points (Eagles, 7) to the most (Hawks, 15). <code>reversed()</code> gives the opposite order.", explainAr: 'reversed تعكس ترتيب المقارن.' },
        { t: 'fill', q: "Write a comparator that orders products by price.", code: J`
          class ByPrice implements ___<Product> {
              @Override
              public int ___(Product a, Product b) {
                  return Integer.compare(a.price, b.price);
              }
          }
        `, answers: ['Comparator', 'compare'], explain: "A comparator class implements <code>Comparator&lt;Product&gt;</code> and writes <code>compare(a, b)</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          import java.util.*;

          public class Main {
              public static void main(String[] args) {
                  Integer[] marks = { 70, 95, 82 };
                  Arrays.sort(marks, Collections.reverseOrder());
                  System.out.println(Arrays.toString(marks));
                  String[] names = { "Lina", "Al", "Fatimah" };
                  Arrays.sort(names, (a, b) -> Integer.compare(b.length(), a.length()));
                  System.out.println(Arrays.toString(names));
              }
          }
        `, answer: J`
          [95, 82, 70]
          [Fatimah, Lina, Al]
        `, explain: "<code>Collections.reverseOrder()</code> reverses the natural order of the Integer objects. The lambda swaps <code>a</code> and <code>b</code>, so the longest name comes first." },
        { t: 'bug', q: "This program should sort the names by length, but it does not compile. Tap the line with the bug.", qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
            import java.util.*;
            public class Main {
                public static void main(String[] args) {
                    String[] names = { "Abdullah", "Lina", "Badr" };
                    Arrays.sort(names, ByLength);
                    System.out.println(Arrays.toString(names));
                }
            }
            class ByLength implements Comparator<String> {
                public int compare(String a, String b) {
                    return Integer.compare(a.length(), b.length());
                }
            }
          `, bug: 5,
          fix: J`
            import java.util.*;
            public class Main {
                public static void main(String[] args) {
                    String[] names = { "Abdullah", "Lina", "Badr" };
                    Arrays.sort(names, new ByLength());
                    System.out.println(Arrays.toString(names));
                }
            }
            class ByLength implements Comparator<String> {
                public int compare(String a, String b) {
                    return Integer.compare(a.length(), b.length());
                }
            }
          `,
          hint: "<code>Arrays.sort</code> needs a judge. Is <code>ByLength</code> a judge, or only the plan for one?",
          explain: "<code>ByLength</code> is a class name, not an object. <code>Arrays.sort</code> needs a comparator object, so write <code>new ByLength()</code>. The fixed program prints <code>[Lina, Badr, Abdullah]</code> (Lina and Badr have the same length and keep their order).",
          explainAr: 'نحتاج كائنًا: new ByLength() وليس اسم الصنف فقط.' },
        { t: 'code', q: "Read <code>n</code>, then <code>n</code> lines with a one-word product name and an integer price. First sort the array <b>by name</b> and print it with <code>Arrays.toString</code>. Then sort the same array <b>by price, highest first</b>, and print it again. <code>toString()</code> of Product returns the name. Use a Comparator class or a lambda for each order. No prompts.", qAr: 'رتّب المنتجات بالاسم ثم بالسعر من الأعلى، باستخدام Comparator.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Product[] items = new Product[n];
                    for (int i = 0; i < n; i++) {
                        items[i] = new Product(sc.next(), sc.nextInt());
                    }
                    // sort by name, print
                    // sort by price (highest first), print
                }
            }

            class Product {
                private String name;
                private int price;
                Product(String name, int price) { this.name = name; this.price = price; }
                String getName() { return name; }
                int getPrice() { return price; }
                public String toString() { return name; }
            }
          `,
          tests: [{ stdin: '3\nPen 50\nBag 20\nCap 35', expected: '[Bag, Cap, Pen]\n[Pen, Cap, Bag]' }, { stdin: '2\nZed 10\nAmy 10', expected: '[Amy, Zed]\n[Amy, Zed]' }],
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
                    Arrays.sort(items, (a, b) -> a.getName().compareTo(b.getName()));
                    System.out.println(Arrays.toString(items));
                    Arrays.sort(items, (a, b) -> Integer.compare(b.getPrice(), a.getPrice()));
                    System.out.println(Arrays.toString(items));
                }
            }

            class Product {
                private String name;
                private int price;
                Product(String name, int price) { this.name = name; this.price = price; }
                String getName() { return name; }
                int getPrice() { return price; }
                public String toString() { return name; }
            }
          `,
          hint: "By name: <code>(a, b) -&gt; a.getName().compareTo(b.getName())</code>. Highest price first: swap <code>a</code> and <code>b</code> inside <code>Integer.compare</code>.",
          explain: "Product has no natural order, so both orders come from comparators. In the second test the prices are equal; the sort is stable, so Amy stays before Zed." }
      ]
    },

    // ---------------------------------------------------------------- Lesson 11
    {
      title: 'Designing with abstract classes and interfaces together',
      titleAr: 'التصميم بالأصناف المجردة والواجهات معًا',
      minutes: 30,
      body: [
        { type: 'h', en: 'Design before you code' },
        { type: 'p', en: "A delivery app in Riyadh and Jeddah uses four kinds of vehicles: motorbikes, cars, electric scooters, and cool vans for groceries, ice cream and medicine. Before writing any code, a good programmer decides <b>where each piece belongs</b>: what all vehicles share, what each does differently, and what only some of them can do. A good design means less code, fewer bugs, and new vehicle types that fit in easily. In this lesson you put the whole unit together.",
          ar: 'قبل كتابة الكود نقرر: ما المشترك بين الجميع؟ وما الذي يختلف؟ وما القدرة التي يملكها بعضهم فقط؟' },
        { type: 'analogy', title: 'The company rule book and special licences', en: "Every driver in the company follows the same rule book: same uniform, same app, same way to calculate the trip price. That is the <b>abstract class</b>. Some drivers also hold a special licence: one for charging electric vehicles, one for carrying cold food. Only those drivers have it, and a driver could hold both. Those licences are <b>interfaces</b>.",
          ar: 'دليل القواعد المشترك هو الصنف المجرد، والرخص الخاصة لبعض السائقين هي الواجهات.' },
        { type: 'h', en: 'Three questions decide the design' },
        { type: 'table', head: ['Ask', 'If yes, use', 'In the delivery app'], rows: [
          ['Do <b>all</b> vehicles have this data or this code, done the same way?', 'a field or normal method in the <b>abstract class</b>', 'id, maxKg, <code>canCarry(kg)</code>, <code>tripCost(km)</code>'],
          ['Do all vehicles have it, but each does it <b>differently</b>?', 'an <b>abstract method</b>', '<code>costPerKm()</code>'],
          ['Do only <b>some</b> vehicles have this ability?', 'an <b>interface</b>', '<code>Chargeable</code>, <code>Cooled</code>']
        ] },
        { type: 'p', en: "Why not put <code>charge()</code> into Vehicle? Because a motorbike would then have to write a fake <code>charge()</code> that does nothing, the same \"fake answer\" problem as in Lesson 3. And why not make Vehicle an interface? Because then every class would copy the same fields and the same <code>tripCost</code> code. Each tool has its job.",
          ar: 'القدرة الخاصة ببعض الأنواع مكانها واجهة، والكود المشترك مكانه الصنف المجرد.' },
        { type: 'check', q: 'A smart home has lamps, air conditioners and cameras. Only lamps can be dimmed. Where should <code>dim(int percent)</code> go?', options: ['As a normal method in the abstract class Device', 'As an abstract method in Device', 'In an interface <code>Dimmable</code>, implemented by Lamp', 'In main'], answer: 2, explain: "Only some devices have this ability, so it is an interface. An abstract method in Device would force air conditioners and cameras to write a fake <code>dim</code>." },
        { type: 'h', en: 'The UML diagram' },
        { type: 'p', en: "You learned UML class boxes in Unit 2 and the inheritance arrow in Unit 4. Here is the whole design in one picture. Read it from the top: the abstract parent, its four children, and the two interfaces that only some children implement." },
        { type: 'code', code: J`
                            +----------------------------------+
                            |        Vehicle {abstract}        |
                            +----------------------------------+
                            | - id: String                     |
                            | - maxKg: int                     |
                            +----------------------------------+
                            | + canCarry(kg: int): boolean     |
                            | + costPerKm(): double {abstract} |
                            | + tripCost(km: double): double   |
                            +----------------------------------+
                                             /_\
                                              |   solid line = extends
                +-----------+-----------------+------------------------------+
                |           |                 |                              |
          +-----------+  +-----+     +-----------------+                +---------+
          | Motorbike |  | Car |     | ElectricScooter |                | CoolVan |
          +-----------+  +-----+     +-----------------+                +---------+
                                              :                              :
                                              : dashed line                  :
                                              : = implements                 :
                                              V                              V
                                +--------------------------+    +-------------------------+
                                |      <<interface>>       |    |      <<interface>>      |
                                |        Chargeable        |    |          Cooled         |
                                +--------------------------+    +-------------------------+
                                | + getBattery(): int      |    | + getTemperature(): int |
                                | + charge(p: int): void   |    +-------------------------+
                                | + needsCharge(): boolean |
                                +--------------------------+
        ` },
        { type: 'lines', title: 'Read the diagram', rows: [
          ['Vehicle {abstract}', 'An abstract class. Some books write its name in <i>italics</i> instead.'],
          ['+ costPerKm(): double {abstract}', 'An abstract method: every child must write it.'],
          ['/_\\ and the solid line', '<b>extends</b>. The hollow triangle points to the parent. All four classes extend Vehicle.'],
          ['<<interface>>', 'This box is an interface, not a class.'],
          ['the dashed line with V', '<b>implements</b>. In a real UML diagram it is a dashed line with a hollow triangle pointing to the interface.']
        ], ar: 'الخط المتصل يعني extends، والخط المتقطع يعني implements، والسهم يشير دائمًا إلى الأب أو الواجهة.' },
        { type: 'table', head: ['UML', 'Meaning', 'Java'], rows: [
          ['<code>{abstract}</code> or <i>italic name</i>', 'abstract class or method', '<code>abstract</code>'],
          ['<code>&lt;&lt;interface&gt;&gt;</code>', 'interface', '<code>interface</code>'],
          ['solid line, hollow triangle', 'inheritance', '<code>extends</code>'],
          ['dashed line, hollow triangle', 'realisation', '<code>implements</code>']
        ] },
        { type: 'check', q: 'In the diagram, how can you tell that CoolVan is <code>Cooled</code>?', options: ['It is in the same row as Car', 'A dashed line goes from CoolVan to the Cooled interface', 'Its name has the word Cool', 'A solid line goes to Vehicle'], answer: 1, explain: "A dashed line to an interface means implements. The solid line to Vehicle means extends." },
        { type: 'h', en: 'From the diagram to Java headers' },
        { type: 'p', en: "Each box becomes one class or interface header. Each solid line becomes <code>extends</code>, and each dashed line becomes <code>implements</code>. Write the headers first, then fill in the bodies." },
        { type: 'code', code: J`
          abstract class Vehicle { ... }
          interface Chargeable { ... }
          interface Cooled { ... }
          class Motorbike extends Vehicle { ... }
          class Car extends Vehicle { ... }
          class ElectricScooter extends Vehicle implements Chargeable { ... }
          class CoolVan extends Vehicle implements Cooled { ... }
        ` },
        { type: 'p', en: "One scooter object can be seen through the Vehicle view (for trips) and through the Chargeable view (for charging). Step through the picture: when the battery changes through one view, the other view sees the change, because there is only one object." },
        { type: 'analogy', title: 'One person, two cards', en: "Ahmed shows his employee card at the company gate and his driving licence at a checkpoint. The guard at the gate sees only \"employee\"; the officer at the checkpoint sees only \"driver\". It is still the same Ahmed. If he moves house, both cards point to the same person with the new address. A Vehicle variable and a Chargeable variable are two cards for one object.",
          ar: 'بطاقتان لشخص واحد: كل جهة ترى جانبًا منه، لكنه الشخص نفسه.' },
        { type: 'memory', title: 'One scooter, a Vehicle view and a Chargeable view', code: J`
          Vehicle v = new ElectricScooter("S-03", 25);
          Chargeable c = (Chargeable) v;
          c.charge(100);
        `, frames: [
          { label: 'After <code>Vehicle v = new ElectricScooter("S-03", 25);</code>', vars: [{ name: 'v', type: 'Vehicle', ref: 'A' }], objects: [{ id: 'A', cls: 'ElectricScooter', fields: [{ name: 'id', value: '"S-03"' }, { name: 'maxKg', value: '10' }, { name: 'battery', value: '25' }] }] },
          { label: 'After <code>Chargeable c = (Chargeable) v;</code>', vars: [{ name: 'v', type: 'Vehicle', ref: 'A' }, { name: 'c', type: 'Chargeable', ref: 'A' }], objects: [{ id: 'A', cls: 'ElectricScooter', fields: [{ name: 'id', value: '"S-03"' }, { name: 'maxKg', value: '10' }, { name: 'battery', value: '25' }] }] },
          { label: 'After <code>c.charge(100);</code> (capped at 100)', vars: [{ name: 'v', type: 'Vehicle', ref: 'A' }, { name: 'c', type: 'Chargeable', ref: 'A' }], objects: [{ id: 'A', cls: 'ElectricScooter', fields: [{ name: 'id', value: '"S-03"' }, { name: 'maxKg', value: '10' }, { name: 'battery', value: '100' }] }] }
        ], ar: 'كائن واحد بنظرتين: Vehicle للرحلات و Chargeable للشحن.' },
        { type: 'note', kind: 'tip', en: "In Lesson 2 we said: do not use <code>instanceof</code> to choose a formula that every type has. Here it is the right tool: <code>v instanceof Chargeable</code> asks about an <b>optional ability</b> that only some vehicles have." },
        { type: 'steps', title: 'Worked example: the delivery app', problem: 'For each order (item, weight in kg, distance in km, needs cold or not), choose the <b>cheapest suitable</b> vehicle. A trip costs 5 riyals plus the cost per km times the distance. At night, charge every vehicle that needs it.',
          steps: [
            { en: 'The abstract class holds everything shared: the id, the maximum weight, <code>canCarry</code>, <code>tripCost</code> and <code>toString</code>. Only <code>costPerKm()</code> is abstract.', code: J`
              public double tripCost(double km) { return 5 + costPerKm() * km; }
            ` },
            { en: 'Each vehicle class gives its own maximum weight to <code>super</code> and its own cost per km. The scooter and the van also keep the promise of their interface.', code: J`
              class ElectricScooter extends Vehicle implements Chargeable {
                  ElectricScooter(String id, int battery) {
                      super(id, 10);
                      this.battery = battery;
                  }
            ` },
            { en: 'A helper decides if a vehicle is suitable: it must carry the weight, and for cold items it must be <code>Cooled</code>.', code: J`
              static boolean suitable(Vehicle v, int kg, boolean cold) {
                  if (!v.canCarry(kg)) {
                      return false;
                  }
                  if (cold) {
                      return v instanceof Cooled;
                  }
                  return true;
              }
            ` },
            { en: 'Choosing the cheapest is the \"best so far\" pattern from Lesson 8. <code>best</code> starts as <code>null</code> (no vehicle yet).', code: J`
              if (suitable(v, kg, cold)) {
                  if (best == null || v.tripCost(km) < best.tripCost(km)) {
                      best = v;
                  }
              }
            ` },
            { en: 'At night, only <code>Chargeable</code> vehicles are visited. The default method <code>needsCharge()</code> decides who gets charged.', code: J`
              if (v instanceof Chargeable) {
                  Chargeable c = (Chargeable) v;
                  if (c.needsCharge()) {
                      c.charge(100);
                  }
              }
            ` }
          ],
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Vehicle[] fleet = {
                        new Motorbike("M-01"),
                        new Car("C-02"),
                        new ElectricScooter("S-03", 25),
                        new CoolVan("V-04", 4)
                    };
                    deliver(fleet, "groceries", 8, 10, false);
                    deliver(fleet, "ice cream", 15, 10, true);
                    deliver(fleet, "furniture", 120, 4, false);
                    chargeAll(fleet);
                }

                static boolean suitable(Vehicle v, int kg, boolean cold) {
                    if (!v.canCarry(kg)) {
                        return false;
                    }
                    if (cold) {
                        return v instanceof Cooled;
                    }
                    return true;
                }

                static void deliver(Vehicle[] fleet, String item, int kg, double km, boolean cold) {
                    Vehicle best = null;
                    for (Vehicle v : fleet) {
                        if (suitable(v, kg, cold)) {
                            if (best == null || v.tripCost(km) < best.tripCost(km)) {
                                best = v;
                            }
                        }
                    }
                    System.out.printf("%s: %s, %.2f SAR%n", item, best, best.tripCost(km));
                }

                static void chargeAll(Vehicle[] fleet) {
                    for (Vehicle v : fleet) {
                        if (v instanceof Chargeable) {
                            Chargeable c = (Chargeable) v;
                            System.out.print(v + ": " + c.getBattery() + "%");
                            if (c.needsCharge()) {
                                c.charge(100);
                            }
                            System.out.println(" -> " + c.getBattery() + "%");
                        }
                    }
                }
            }

            abstract class Vehicle {
                private String id;
                private int maxKg;

                Vehicle(String id, int maxKg) {
                    this.id = id;
                    this.maxKg = maxKg;
                }

                public boolean canCarry(int kg) { return kg <= maxKg; }

                public abstract double costPerKm();

                public double tripCost(double km) { return 5 + costPerKm() * km; }

                @Override
                public String toString() { return getClass().getSimpleName() + " " + id; }
            }

            interface Chargeable {
                int MAX_LEVEL = 100;
                int getBattery();
                void charge(int percent);
                default boolean needsCharge() { return getBattery() < 30; }
            }

            interface Cooled {
                int getTemperature();
            }

            class Motorbike extends Vehicle {
                Motorbike(String id) { super(id, 20); }
                @Override
                public double costPerKm() { return 0.5; }
            }

            class Car extends Vehicle {
                Car(String id) { super(id, 150); }
                @Override
                public double costPerKm() { return 1.0; }
            }

            class ElectricScooter extends Vehicle implements Chargeable {
                private int battery;

                ElectricScooter(String id, int battery) {
                    super(id, 10);
                    this.battery = battery;
                }

                @Override
                public double costPerKm() { return 0.25; }
                public int getBattery() { return battery; }
                public void charge(int percent) { battery = Math.min(MAX_LEVEL, battery + percent); }
            }

            class CoolVan extends Vehicle implements Cooled {
                private int temperature;

                CoolVan(String id, int temperature) {
                    super(id, 800);
                    this.temperature = temperature;
                }

                @Override
                public double costPerKm() { return 2.0; }
                public int getTemperature() { return temperature; }
            }
          `, out: J`
            groceries: ElectricScooter S-03, 7.50 SAR
            ice cream: CoolVan V-04, 25.00 SAR
            furniture: Car C-02, 9.00 SAR
            ElectricScooter S-03: 25% -> 100%
          `, ar: 'البقالة 8 كغ: السكوتر الأرخص (5 + 0.25 × 10 = 7.5). الآيس كريم يحتاج تبريدًا: الشاحنة المبردة فقط. الأثاث 120 كغ: السيارة (5 + 4 = 9).' },
        { type: 'note', kind: 'exam', en: "Test the design: the company buys an electric cool van. You write <code>class ElectricVan extends Vehicle implements Chargeable, Cooled</code>, one parent and two interfaces. <code>suitable</code>, <code>deliver</code> and <code>chargeAll</code> do not change at all, yet the new van is chosen for cold orders and charged at night.", ar: 'نوع جديد بواجهتين يعمل دون تغيير أي حلقة.' }
      ],
      mistakes: [
        { title: 'Putting an ability that only some have into the abstract class', en: "If Vehicle has <code>abstract void charge(int p)</code>, a Motorbike must write a fake <code>charge</code> that does nothing. Put optional abilities into an interface.", code: J`
          abstract class Vehicle {
              abstract void charge(int p);   // wrong place: motorbikes cannot charge
          }
        `, ar: 'القدرة الاختيارية مكانها واجهة وليس الصنف المجرد.' },
        { title: 'Making everything an interface', en: "If Vehicle were an interface, every class would copy the same fields (id, maxKg) and the same <code>tripCost</code> code. Shared data and shared code belong in the abstract class." },
        { title: 'Writing extends for an interface in the header', en: "A class extends one class and <b>implements</b> interfaces.", code: J`
          class ElectricScooter extends Vehicle, Chargeable { }            // error
          class ElectricScooter extends Vehicle implements Chargeable { }  // correct
        ` },
        { title: 'Using instanceof for something every type has', en: "<code>if (v instanceof Car) cost = ...</code> for the price is weak design: every vehicle has a cost per km, so make it an abstract method. Keep <code>instanceof</code> for optional abilities such as Chargeable." }
      ],
      remember: [
        "Shared data and shared code: the <b>abstract class</b>. Shared idea, different formula: an <b>abstract method</b>. Ability of only some: an <b>interface</b>.",
        "UML: <code>{abstract}</code> or italics; <code>&lt;&lt;interface&gt;&gt;</code>; solid line = extends; dashed line = implements; the arrow points to the parent or interface.",
        "Turn each box into a header and each line into <code>extends</code> or <code>implements</code>.",
        "One object can be used through its class view and through each interface view.",
        "<code>instanceof</code> with an interface is fine for optional abilities; new types then fit without changing the loops."
      ],
      rememberAr: 'المشترك في الصنف المجرد، والمختلف دالة مجردة، والقدرة الخاصة ببعض الأنواع واجهة. الخط المتصل extends والمتقطع implements.',
      practice: [
        { t: 'mcq', q: "Every vehicle has a plate number and the same way of printing it. Where should the plate field and its getter go?", options: ['In an interface', 'In the abstract class Vehicle', 'Copied into every subclass', 'In main'], answer: 1, explain: "Data and code shared by <b>all</b> vehicles, done the same way, belong in the abstract class. Interfaces cannot hold normal fields.", qAr: 'أين نضع الحقل المشترك بين كل المركبات؟' },
        { t: 'mcq', q: "In a UML class diagram, what does a <b>dashed</b> line with a hollow triangle pointing to a box marked <code>&lt;&lt;interface&gt;&gt;</code> mean?", options: ['extends', 'implements', 'an object is created', 'a private field'], answer: 1, explain: "A dashed line to an interface is realisation, which is <code>implements</code> in Java. A solid line means <code>extends</code>." },
        { t: 'output', q: "What does this program print?", code: J`
          public class Main {
              public static void main(String[] args) {
                  Vehicle[] fleet = { new Bike("B-1"), new Scooter("S-1", 20), new Bike("B-2") };
                  int toCharge = 0;
                  for (Vehicle v : fleet) {
                      System.out.println(v.getId() + ": " + v.tripCost(10));
                      if (v instanceof Chargeable && ((Chargeable) v).getBattery() < 30) {
                          toCharge++;
                      }
                  }
                  System.out.println("To charge: " + toCharge);
              }
          }

          abstract class Vehicle {
              private String id;
              Vehicle(String id) { this.id = id; }
              String getId() { return id; }
              abstract double costPerKm();
              double tripCost(double km) { return 5 + costPerKm() * km; }
          }

          interface Chargeable {
              int getBattery();
          }

          class Bike extends Vehicle {
              Bike(String id) { super(id); }
              double costPerKm() { return 0.5; }
          }

          class Scooter extends Vehicle implements Chargeable {
              private int battery;
              Scooter(String id, int battery) { super(id); this.battery = battery; }
              double costPerKm() { return 0.25; }
              public int getBattery() { return battery; }
          }
        `, answer: J`
          B-1: 10.0
          S-1: 7.5
          B-2: 10.0
          To charge: 1
        `, explain: "<code>tripCost</code> is written once in Vehicle and uses each object's <code>costPerKm()</code>: 5 + 0.5 * 10 = 10.0 and 5 + 0.25 * 10 = 7.5. Only the scooter is Chargeable, and 20 is below 30, so the count is 1.", explainAr: 'tripCost مكتوبة مرة واحدة وتستخدم costPerKm الخاصة بكل كائن.' },
        { t: 'order', q: "Put the lines in order: an abstract class, an interface, and a class that uses both.", lines: [
          'abstract class Device {',
          '    abstract int watts();',
          '}',
          'interface Dimmable {',
          '    void dim(int percent);',
          '}',
          'class Lamp extends Device implements Dimmable {',
          '    public int watts() { return 10; }',
          '    public void dim(int percent) { }',
          '}'
        ], explain: "Declare the abstract class and the interface first. Then the class header with <code>extends</code> before <code>implements</code>, and both methods." },
        { t: 'bug', q: "This program does not compile. Tap the line with the bug.", qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
          code: J`
            public class Main {
                public static void main(String[] args) {
                    Scooter s = new Scooter();
                    System.out.println(s.costPerKm() + " " + s.getBattery());
                }
            }
            abstract class Vehicle {
                abstract double costPerKm();
            }
            interface Chargeable { int getBattery(); }
            class Scooter extends Vehicle, Chargeable {
                double costPerKm() { return 0.25; }
                public int getBattery() { return 60; }
            }
          `, bug: 11,
          fix: J`
            public class Main {
                public static void main(String[] args) {
                    Scooter s = new Scooter();
                    System.out.println(s.costPerKm() + " " + s.getBattery());
                }
            }
            abstract class Vehicle {
                abstract double costPerKm();
            }
            interface Chargeable { int getBattery(); }
            class Scooter extends Vehicle implements Chargeable {
                double costPerKm() { return 0.25; }
                public int getBattery() { return 60; }
            }
          `,
          hint: "How does a class connect to an interface?",
          explain: "<code>extends</code> accepts only one class, and Chargeable is an interface. The header must be <code>extends Vehicle implements Chargeable</code>. Then the program prints <code>0.25 60</code>.",
          explainAr: 'الصنف يرث صنفًا واحدًا بـ extends وينفذ الواجهات بـ implements.' },
        { t: 'code', q: "<b>Smart home.</b> <code>Device</code> is abstract with <code>abstract int watts()</code>. Only lamps are <code>Dimmable</code>. Write <code>class Lamp extends Device implements Dimmable</code>: a lamp starts at level 100, <code>dim(p)</code> sets the level to <code>p</code>, and <code>watts()</code> returns <code>10 * level / 100</code>. In <code>main</code>: read <code>n</code> devices (<code>lamp NAME</code> or <code>ac NAME</code>), then a percent. Dim every Dimmable device to that percent, then print <code>NAME: W watts</code> for each device and <code>Total: T watts</code>. No prompts.", qAr: 'اكتب الصنف Lamp الذي يرث Device وينفذ Dimmable، ثم خفّف الإضاءة واحسب الاستهلاك.',
          starter: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Device[] home = new Device[n];
                    for (int i = 0; i < n; i++) {
                        String kind = sc.next();
                        String name = sc.next();
                        if (kind.equals("lamp")) {
                            home[i] = new Lamp(name);
                        } else {
                            home[i] = new AirConditioner(name);
                        }
                    }
                    int percent = sc.nextInt();
                    // 1. dim every Dimmable device
                    // 2. print each device and the total
                }
            }

            abstract class Device {
                private String name;
                Device(String name) { this.name = name; }
                String getName() { return name; }
                abstract int watts();
            }

            interface Dimmable {
                void dim(int percent);
            }

            class AirConditioner extends Device {
                AirConditioner(String name) { super(name); }
                int watts() { return 1500; }
            }

            // TODO: class Lamp extends Device implements Dimmable
          `,
          tests: [{ stdin: '3\nlamp Kitchen\nac Bedroom\nlamp Hall\n50', expected: 'Kitchen: 5 watts\nBedroom: 1500 watts\nHall: 5 watts\nTotal: 1510 watts' }, { stdin: '1\nac Office\n30', expected: 'Office: 1500 watts\nTotal: 1500 watts' }, { stdin: '1\nlamp Desk\n30', expected: 'Desk: 3 watts\nTotal: 3 watts' }],
          solution: J`
            import java.util.*;

            public class Main {
                public static void main(String[] args) {
                    Scanner sc = new Scanner(System.in);
                    int n = sc.nextInt();
                    Device[] home = new Device[n];
                    for (int i = 0; i < n; i++) {
                        String kind = sc.next();
                        String name = sc.next();
                        if (kind.equals("lamp")) {
                            home[i] = new Lamp(name);
                        } else {
                            home[i] = new AirConditioner(name);
                        }
                    }
                    int percent = sc.nextInt();
                    for (Device d : home) {
                        if (d instanceof Dimmable) {
                            ((Dimmable) d).dim(percent);
                        }
                    }
                    int total = 0;
                    for (Device d : home) {
                        System.out.println(d.getName() + ": " + d.watts() + " watts");
                        total += d.watts();
                    }
                    System.out.println("Total: " + total + " watts");
                }
            }

            abstract class Device {
                private String name;
                Device(String name) { this.name = name; }
                String getName() { return name; }
                abstract int watts();
            }

            interface Dimmable {
                void dim(int percent);
            }

            class AirConditioner extends Device {
                AirConditioner(String name) { super(name); }
                int watts() { return 1500; }
            }

            class Lamp extends Device implements Dimmable {
                private int level = 100;

                Lamp(String name) { super(name); }

                int watts() { return 10 * level / 100; }

                public void dim(int percent) { level = percent; }
            }
          `,
          hint: "Lamp needs a <code>level</code> field (start 100), a constructor calling <code>super(name)</code>, <code>watts()</code>, and a <code>public</code> <code>dim</code>. In main, use <code>instanceof Dimmable</code> and a cast for dimming, then one loop with <code>d.watts()</code> for the report.",
          explain: "Dimming is an optional ability, so we ask <code>instanceof Dimmable</code>. Power is something every device has, so the report loop just calls <code>d.watts()</code>: 10 * 50 / 100 = 5 for each lamp, plus 1500 for the air conditioner." }
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
      explain: "<code>instanceof</code> is true for the exact class and all its superclasses. <code>getClass()</code> is exactly Square." },
    { t: 'bug', q: "This program does not compile. Tap the line with the bug.", qAr: 'البرنامج لا يُترجم. أين الخطأ؟',
      code: J`
        public class Main {
            public static void main(String[] args) {
                Notifier n = new Sms();
                System.out.println(n.sendAll("Exam at 8"));
            }
        }
        interface Notifier {
            String send(String text);
            default String sendAll(String text) { return send(text) + "!"; }
        }
        class Sms implements Notifier {
            String send(String text) { return "SMS: " + text; }
        }
      `, bug: 12,
      fix: J`
        public class Main {
            public static void main(String[] args) {
                Notifier n = new Sms();
                System.out.println(n.sendAll("Exam at 8"));
            }
        }
        interface Notifier {
            String send(String text);
            default String sendAll(String text) { return send(text) + "!"; }
        }
        class Sms implements Notifier {
            public String send(String text) { return "SMS: " + text; }
        }
      `,
      hint: "Every interface method is public. Check the method in the class.",
      explain: "<code>send</code> is public in the interface, so <code>Sms</code> must implement it as <code>public</code>; without it the access is weaker and the class does not compile. The default method <code>sendAll</code> is fine: Sms gets it for free. The fixed program prints <code>SMS: Exam at 8!</code>.",
      explainAr: 'الدالة المنفذة من واجهة يجب أن تكون public.' },
    { t: 'bug', q: "This program should print the side of every square. It compiles, but it stops with a <code>ClassCastException</code>. Tap the line with the bug.", qAr: 'البرنامج يتوقف بخطأ ClassCastException. أين الخطأ؟',
      code: J`
        public class Main {
            public static void main(String[] args) {
                Shape[] shapes = { new Circle(2), new Square(3) };
                for (Shape s : shapes) {
                    if (s instanceof Circle) {
                        Square q = (Square) s;
                        System.out.println(q.getSide());
                    }
                }
            }
        }
        class Shape { }
        class Circle extends Shape { double r; Circle(double r) { this.r = r; } }
        class Square extends Shape { double side; Square(double s) { side = s; } double getSide() { return side; } }
      `, bug: [5, 6],
      fix: J`
        public class Main {
            public static void main(String[] args) {
                Shape[] shapes = { new Circle(2), new Square(3) };
                for (Shape s : shapes) {
                    if (s instanceof Square) {
                        Square q = (Square) s;
                        System.out.println(q.getSide());
                    }
                }
            }
        }
        class Shape { }
        class Circle extends Shape { double r; Circle(double r) { this.r = r; } }
        class Square extends Shape { double side; Square(double s) { side = s; } double getSide() { return side; } }
      `,
      hint: "The check and the cast must name the same type.",
      explain: "The check asks about Circle, but the cast is to Square. The Circle passes the check and is then cast to Square, which it is not, so the program stops on line 6. Asking <code>instanceof Square</code> makes the check match the cast; the program prints <code>3.0</code>.",
      explainAr: 'السؤال بـ instanceof يجب أن يكون عن النوع نفسه الذي نحوّل إليه.' }
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
    { code: J`Arrays.sort(names, (a, b) -> a.length() - b.length());`, note: 'Lambda as a Comparator' },
    { code: J`static void introduce(Animal a) { System.out.println(a.sound()); }`, note: 'A superclass parameter accepts every subclass object' },
    { code: J`
      for (Employee e : staff) {
          total += e.pay();
      }
    `, note: 'Polymorphic array: one loop, no type checks; new subclasses fit without changes' },
    { code: J`
      Animal a = new Dog();
      a.sound();   // compiler: Animal has sound()?  JVM: run Dog's version
    `, note: 'Compile time checks the variable type; run time uses the object' },
    { code: J`
      interface Payable {
          double amount();
          default String receipt() { return "Paid " + amount(); }
          static double total(Payable[] items) { ... }
      }
    `, note: 'Default method: body in the interface, may be overridden. Static method: call Payable.total(...)' },
    { code: J`interface SmartDevice extends Device { void connect(String network); }`, note: 'An interface can extend another interface' },
    { code: J`class ElectricCar extends Vehicle implements Chargeable, Trackable { ... }`, note: 'One parent class, many interfaces: extends comes first' },
    { code: J`
      class ByName implements Comparator<Student> {
          public int compare(Student a, Student b) { return a.getName().compareTo(b.getName()); }
      }
    `, note: 'Comparator: an extra order written outside the class (two parameters)' },
    { code: J`Arrays.sort(list, new ByName());`, note: 'Sort with a Comparator object (not the class name)' },
    { code: J`Arrays.sort(list, (a, b) -> Double.compare(b.getGpa(), a.getGpa()));`, note: 'Comparator lambda: highest GPA first (arguments swapped)' },
    { code: J`
      Arrays.sort(list, new ByName().reversed());
      Arrays.sort(list, Collections.reverseOrder());
    `, note: 'Reverse a Comparator, or reverse the natural (Comparable) order' },
    { code: J`Grader g = mark -> { if (mark >= 60) { return "Pass"; } return "Fail"; };`, note: 'Lambda with a block body: braces and return' }
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
    { term: 'Lambda expression', ar: 'تعبير لامدا', def: 'A short anonymous function such as x -&gt; x * 2 that implements a functional interface.' },
    { term: 'Compile time', ar: 'وقت الترجمة', def: 'When the compiler checks the program before it runs; it uses the variable type to decide if a call is allowed.' },
    { term: 'Run time', ar: 'وقت التشغيل', def: 'When the program is running; the JVM uses the real object to choose which overridden method runs.' },
    { term: 'Overloading', ar: 'التحميل الزائد', def: 'Several methods with the same name but different parameters; the compiler chooses one from the argument types.' },
    { term: 'Concrete class', ar: 'صنف ملموس', def: 'A normal class with no missing (abstract) methods, so objects can be created from it with new.' },
    { term: 'Polymorphic array', ar: 'مصفوفة متعددة الأشكال', def: 'An array whose type is a superclass or an interface, so it can hold objects of many subclasses.' },
    { term: 'Open-closed idea', ar: 'مفتوح للإضافة مغلق للتعديل', def: 'Code should be open for adding new types but closed for changing code that already works; polymorphism makes this possible.' },
    { term: 'Multiple inheritance', ar: 'الوراثة المتعددة', def: 'Getting features from more than one parent. Java allows one parent class but many interfaces.' },
    { term: 'Diamond problem', ar: 'مشكلة الماسة', def: 'The confusion when two parents give different code for the same method; the reason Java allows only one parent class.' },
    { term: 'Default method', ar: 'دالة افتراضية', def: 'A method with a body inside an interface, marked default; implementing classes get it for free and may override it.' },
    { term: 'Static interface method', ar: 'دالة ساكنة في الواجهة', def: 'A helper method with a body inside an interface; it is called with the interface name, for example Payable.total(bills).' },
    { term: 'Constant', ar: 'ثابت', def: 'A value that never changes; every field in an interface is a public static final constant.' },
    { term: 'Natural order', ar: 'الترتيب الطبيعي', def: 'The one default order of a class, given by its compareTo method (Comparable).' },
    { term: 'Comparator&lt;T&gt;', ar: 'المقارن', def: 'An interface in java.util with compare(T a, T b); it describes an extra order outside the class, as a class or a lambda.' },
    { term: 'Realisation (UML)', ar: 'علاقة التنفيذ', def: 'The UML link for implements: a dashed line with a hollow triangle pointing to the interface.' }
  ]
});
